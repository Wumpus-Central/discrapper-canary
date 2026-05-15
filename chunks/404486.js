a.d(t, { x: () => xf }), a(321073);
var n,
    l,
    s,
    i,
    r = a(627968),
    o = a(64700),
    d = a(17928),
    c = a(364522),
    u = a(611677),
    m = a(270003),
    h = a(532446),
    x = a(821609),
    p = a(691885),
    g = a(292666),
    v = a(404778),
    j = a(243721),
    b = a(274372),
    f = a(372684),
    y = a(607814),
    _ = a(871421);
function C() {
    let { mlPipelinesEnabled: e } = (0, d.cf)([b.A], () => ({
            mlPipelinesEnabled: b.A.getSettings().mlPipelinesEnabled,
        })),
        [t, a] = o.useState(
            () => (
                void 0 === window.__CLIPS_DEBUG__ &&
                    (window.__CLIPS_DEBUG__ = { emotion: !1, yell: !1, wakeWord: !1, whisper: !1 }),
                {
                    wakeWord: window.__CLIPS_DEBUG__.wakeWord,
                    emotion: window.__CLIPS_DEBUG__.emotion,
                    yell: window.__CLIPS_DEBUG__.yell,
                    whisper: window.__CLIPS_DEBUG__.whisper,
                }
            ),
        ),
        [n, l] = o.useState(f.rb.KILL),
        [s, i] = o.useState(1),
        [C, E] = o.useState(""),
        [S, N] = o.useState(""),
        A = o.useCallback(
            (e) => {
                let n = !t[e];
                void 0 === window.__CLIPS_DEBUG__ &&
                    (window.__CLIPS_DEBUG__ = { emotion: !1, yell: !1, wakeWord: !1, whisper: !1 }),
                    (window.__CLIPS_DEBUG__[e] = n),
                    a((t) => ({ ...t, [e]: n }));
            },
            [t],
        );
    return (0, r.jsx)(c.Ip, {
        children: (0, r.jsxs)(u.l, {
            children: [
                (0, r.jsx)(m.n, {
                    label: "Send Test Signals",
                    children: (0, r.jsxs)(h.M, {
                        children: [
                            (0, r.jsx)(x.$, { text: "Manual", onClick: () => y.Ts({ type: f.Gy.MANUAL }) }),
                            (0, r.jsx)(x.$, {
                                text: "Distributed",
                                onClick: () =>
                                    y.Ts({
                                        type: f.Gy.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, r.jsx)(x.$, {
                                text: "Phrase: Clip",
                                onClick: () => y.Ts({ type: f.Gy.PHRASE, text: "clip" }),
                            }),
                            (0, r.jsx)(x.$, {
                                text: "Yelling",
                                onClick: () => y.Ts({ type: f.Gy.YELLING, userId: "123" }),
                            }),
                            (0, r.jsx)(x.$, {
                                text: "Laughter",
                                onClick: () => y.Ts({ type: f.Gy.LAUGHTER, label: "laughter", confidence: 1 }),
                            }),
                            (0, r.jsx)(x.$, {
                                text: "Shouting",
                                onClick: () => y.Ts({ type: f.Gy.LAUGHTER, label: "shouting", confidence: 1 }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)(m.n, {
                    label: "Game Event Creator",
                    children: [
                        (0, r.jsxs)(h.M, {
                            children: [
                                (0, r.jsx)(p.l, {
                                    label: "Event Type",
                                    value: n,
                                    onSelectionChange: (e) => l(e),
                                    options: [
                                        { id: "kill", label: "Kill", value: f.rb.KILL },
                                        { id: "multikill", label: "Multikill", value: f.rb.MULTIKILL },
                                        { id: "death", label: "Death", value: f.rb.DEATH },
                                        { id: "assist", label: "Assist", value: f.rb.ASSIST },
                                        { id: "item", label: "Item", value: f.rb.ITEM },
                                        { id: "victory", label: "Victory", value: f.rb.VICTORY },
                                        { id: "defeat", label: "Defeat", value: f.rb.DEFEAT },
                                        { id: "level_up", label: "Level Up", value: f.rb.LEVEL_UP },
                                        { id: "treasure", label: "Treasure", value: f.rb.TREASURE },
                                        { id: "objective_kill", label: "Objective Kill", value: f.rb.OBJECTIVE_KILL },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(p.l, {
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
                        (0, r.jsx)(g.k, {
                            label: "Title (optional)",
                            value: C,
                            onChange: E,
                            placeholder: "e.g., First Blood",
                        }),
                        (0, r.jsx)(g.k, {
                            label: "Description (optional)",
                            value: S,
                            onChange: N,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, r.jsx)(x.$, {
                            text: "Create Game Event",
                            onClick: () => {
                                y.Ts({ type: f.Gy.GAME_EVENT, eventType: n, importance: s, title: C, description: S });
                            },
                        }),
                        (0, r.jsx)(x.$, {
                            text: "stash decider data",
                            onClick: () => {
                                _.Ay.debugStashDeciderData();
                            },
                        }),
                        (0, r.jsx)(x.$, {
                            text: "re-run ranking",
                            onClick: () => {
                                _.ih.debugRerunRanking();
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(v.c, {}),
                (0, r.jsxs)(m.n, {
                    label: "ML Pipelines Enabled",
                    children: [
                        (0, r.jsx)(j.d, {
                            label: "Emotion Classifier",
                            checked: e.emotionClassifier,
                            onChange: (t) => y.dR({ ...e, emotionClassifier: t }),
                        }),
                        (0, r.jsx)(j.d, {
                            label: "Wake Word Detector",
                            checked: e.wakeWordDetector,
                            onChange: (t) => y.dR({ ...e, wakeWordDetector: t }),
                        }),
                        (0, r.jsx)(j.d, {
                            label: "Yell Detector",
                            checked: e.yellDetector,
                            onChange: (t) => y.dR({ ...e, yellDetector: t }),
                        }),
                        (0, r.jsx)(j.d, {
                            label: "Whisper Transcription",
                            checked: e.whisperTranscription,
                            onChange: (t) => y.dR({ ...e, whisperTranscription: t }),
                        }),
                        (0, r.jsx)(j.d, {
                            label: "Laughter / Shouting Detector (V3)",
                            checked: e.laughterDetector,
                            onChange: (t) => y.dR({ ...e, laughterDetector: t }),
                        }),
                    ],
                }),
                (0, r.jsxs)(m.n, {
                    label: "ML Debug Logging (window.__CLIPS_DEBUG__)",
                    children: [
                        (0, r.jsx)(j.d, {
                            label: "Wake Word Debug",
                            description: "Log wake word detection events to console",
                            checked: t.wakeWord,
                            onChange: () => A("wakeWord"),
                        }),
                        (0, r.jsx)(j.d, {
                            label: "Emotion Debug",
                            description: "Log emotion classification events to console",
                            checked: t.emotion,
                            onChange: () => A("emotion"),
                        }),
                        (0, r.jsx)(j.d, {
                            label: "Yell Debug",
                            description: "Show yell classification events to console",
                            checked: t.yell,
                            onChange: () => A("yell"),
                        }),
                        (0, r.jsx)(j.d, {
                            label: "Whisper Debug",
                            description: "Log whisper transcription events to console",
                            checked: t.whisper,
                            onChange: () => A("whisper"),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var E = a(503698),
    S = a.n(E),
    N = a(939249),
    A = a(834730),
    k = a(683071),
    I = a(331322),
    D = a(811893),
    T = a(534514),
    O = a(538064),
    R = a(265059),
    w = a(902592),
    M = a(869146);
a(323874), a(14289), a(35956);
var L = a(789645),
    P = a(589158),
    U = a(65593),
    G = a(740572),
    B = a(581298),
    F = a(98596),
    V = a(287809),
    $ = a(901139),
    W = a(641886),
    z = a(780898),
    H = a(652215),
    K = a(224196),
    Y = a(427262);
function q(e) {
    let { nameplate: t } = e,
        a = (0, d.bG)([V.default], () => V.default.getCurrentUser()),
        n = Y.Ay.useName(a) ?? "";
    return (0, r.jsx)(K.g, {
        username: n,
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        streaming: !1,
        status: H.clD.ONLINE,
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
var J = a(736653),
    Q = a(653523),
    X = a(809948);
function Z(e) {
    let { selected: t, onSelect: a } = e,
        n = (0, J.Ay)();
    return (0, r.jsxs)("div", {
        className: X.N,
        children: [
            (0, r.jsx)(A.E, { variant: "text-sm/semibold", children: "Preselected Gradient" }),
            (0, r.jsx)("div", {
                className: X.Z,
                children: W.Z6.map((e) => {
                    let l = n !== H.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        s = t === e.name;
                    return (0, r.jsx)(
                        Q.S4,
                        { onSelect: () => a(e), style: { background: l }, name: e.name, isSelected: s },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
var ee = a(696157),
    et = a(95701),
    ea = a(331884);
function en(e) {
    let { selected: t, nameplate: a } = e,
        n = (0, ea.i)(),
        l = new et.cq({ id: "0", type: H.rbe.DM, name: "self", guild_id: "0", recipients: [n.id] });
    return (0, r.jsx)(ee.th, { selected: t, channel: l, user: n, nameplate: a });
}
var el = a(698638),
    es = a(877203);
function ei() {
    let [e, t] = (0, o.useState)(!1),
        [a, n] = (0, o.useState)(!1),
        [l, s] = (0, o.useState)(null),
        { node: i } = (0, B.Ay)(F.k, ""),
        d = (0, $.Ay)((e) => e.toolsCache),
        { setToolsCache: c, removeToolsCache: u } = (0, $.DE)(),
        { setImgCache: m } = (0, $.TW)(),
        h = (0, o.useCallback)(
            (e) => {
                let t = d[e];
                null != t
                    ? s({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : s((t) =>
                          null == t ? { previewToolKey: e, palette: W.Wj, skuId: "0" } : { ...t, previewToolKey: e },
                      );
            },
            [d],
        ),
        p = (0, o.useCallback)((e) => {
            s((t) => (null == t ? null : { ...t, palette: e }));
        }, []),
        g = (0, o.useCallback)(
            (e) => {
                u(e);
            },
            [u],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: es.ne,
                children: [
                    (0, r.jsxs)("div", {
                        className: es.gO,
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
                        className: es.uQ,
                        children: [
                            e && (0, r.jsx)(G.A, { node: i }),
                            a &&
                                (0, r.jsx)(Z, {
                                    selected: l?.palette?.name,
                                    onSelect: (e) => {
                                        l?.previewToolKey != null && c(l.previewToolKey, l.previewToolKey, e), p(e);
                                    },
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: es.iW,
                children: [
                    (0, r.jsx)(er, { nameplate: l }, l?.palette?.name),
                    (0, r.jsxs)("div", {
                        className: es.Uo,
                        children: [
                            (0, r.jsx)(A.E, {
                                variant: "text-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, r.jsx)(U.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: el.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        a = e[0],
                                        n = await a.arrayBuffer();
                                    m(t, t, (0, z.nI)(n)), c(t, t, W.Wj);
                                },
                            }),
                            (0, r.jsx)("div", {
                                className: es.is,
                                children: Object.values(d).map((e) => {
                                    let { url: t } = e;
                                    return (0, r.jsx)(eo, { src: t, onSetStatic: h, removeAsset: g }, t);
                                }),
                            }),
                            (0, r.jsx)(ec, {
                                label: "gradient override",
                                onChange: (e) => p({ name: W.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, r.jsx)(ed, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function er(e) {
    let { nameplate: t } = e,
        [a, n] = (0, o.useState)(320),
        l = (0, o.useRef)(null),
        s = (0, o.useRef)(null),
        i = (0, o.useRef)(null),
        d = (0, o.useRef)(document),
        u = (0, o.useCallback)((e) => {
            if (null != l.current) {
                let t = l.current.getBoundingClientRect();
                n(Math.max(264, Math.min(432, e.clientX - t.left)));
            }
        }, []),
        m = (0, o.useCallback)(
            (e) => {
                e.preventDefault(), e.stopPropagation();
                let t = e.currentTarget.ownerDocument;
                d.current = t;
                let a = (e) => {
                        e.preventDefault(), u(e);
                    },
                    n = () => {
                        null != s.current && (t.removeEventListener("mousemove", s.current), (s.current = null)),
                            null != i.current && (t.removeEventListener("mouseup", i.current), (i.current = null));
                    };
                (s.current = a), (i.current = n), t.addEventListener("mousemove", a), t.addEventListener("mouseup", n);
            },
            [u],
        );
    return (
        (0, o.useEffect)(
            () => () => {
                null != s.current && (d.current.removeEventListener("mousemove", s.current), (s.current = null)),
                    null != i.current && (d.current.removeEventListener("mouseup", i.current), (i.current = null));
            },
            [],
        ),
        (0, r.jsx)(c.Ip, {
            className: es.Fp,
            orientation: "horizontal",
            children: (0, r.jsxs)("div", {
                ref: l,
                className: es.ey,
                style: { width: `${a}px` },
                children: [
                    (0, r.jsx)(A.E, { variant: "text-sm/semibold", children: "Memberlist" }),
                    (0, r.jsx)(eu, { nameplate: t }),
                    (0, r.jsx)(A.E, { variant: "text-sm/semibold", children: "DMs" }),
                    (0, r.jsx)(em, { nameplate: t }),
                    (0, r.jsx)(A.E, { variant: "text-sm/semibold", children: "RTC" }),
                    (0, r.jsx)(eh, { nameplate: t }),
                    (0, r.jsx)("div", { className: es.Di, onMouseDown: m }),
                ],
            }),
        })
    );
}
function eo(e) {
    let { src: t, onSetStatic: a, removeAsset: n } = e;
    return (0, r.jsxs)("div", {
        className: es.xO,
        children: [
            (0, r.jsx)(N.D, {
                onClick: () => n(t),
                className: es.yV,
                children: (0, r.jsx)(L.P, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, r.jsx)("img", { className: es.Ez, src: t, alt: "" }),
            (0, r.jsx)("div", {
                className: es.Lu,
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
function ed(e) {
    let { label: t, onClick: a } = e;
    return (0, r.jsxs)("div", {
        className: es.Uu,
        children: [
            (0, r.jsx)(A.E, { variant: "text-sm/normal", children: "coming soon" }),
            (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: a }),
        ],
    });
}
function ec(e) {
    let { label: t, onChange: a } = e;
    return (0, r.jsxs)("div", {
        className: es.Im,
        children: [
            (0, r.jsx)(A.E, { variant: "text-sm/normal", children: t }),
            (0, r.jsx)("input", {
                onChange: (e) => {
                    a(e.target.value);
                },
                className: es.QL,
                placeholder: "#000000",
            }),
        ],
    });
}
function eu(e) {
    let { nameplate: t } = e,
        a = (0, d.bG)([V.default], () => V.default.getCurrentUser());
    return (0, r.jsx)("div", {
        className: es.VH,
        children: (0, r.jsxs)("div", {
            className: es.H1,
            children: [
                (0, r.jsx)(A.E, { className: es.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(P.A, { nameplate: t, user: a, currentUser: a }),
                (0, r.jsx)(A.E, { className: es.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(P.A, { nameplate: t, selected: !0, user: a, currentUser: a }),
                        (0, r.jsx)(P.A, { selected: !0, user: a, currentUser: a }),
                    ],
                }),
            ],
        }),
    });
}
function em(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: es.VH,
        children: (0, r.jsxs)("div", {
            className: es.H1,
            children: [
                (0, r.jsx)(A.E, { className: es.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(en, { nameplate: t }),
                (0, r.jsx)(A.E, { className: es.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(en, { selected: !0, nameplate: t }), (0, r.jsx)(en, { selected: !0 })],
                }),
            ],
        }),
    });
}
function eh(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: es.VH,
        children: (0, r.jsx)("div", { className: es.X2, children: (0, r.jsx)(q, { nameplate: t }) }),
    });
}
a(508300);
var ex = a(835245),
    ep = a(157559),
    eg = a(780777),
    ev = a(993408),
    ej = a(315949),
    eb = a(559474),
    ef = a(816866),
    ey = a(87558),
    e_ = a(575593),
    eC = a(631903),
    eE = a(224640),
    eS = a(408278),
    eN = a(972213),
    eA = a(43990),
    ek = a(192308),
    eI = a(661531),
    eD = a(231723),
    eT = a(900686),
    eO = a(986687),
    eR = a(474010),
    ew = a(735438),
    eM = a.n(ew),
    eL = a(219220),
    eP = a(480335);
let eU = (e) => {
    let { profileEffect: t } = e,
        a = o.useMemo(() => (0, ew.cloneDeep)(t), [t]),
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
        { layerData: s } = (0, eL.A)({ skuId: "debug", layers: l.effects });
    return (0, r.jsx)(eP.p, { profileEffect: l, layerData: s, skuId: "debug" });
};
var eG = a(314485),
    eB = a(778765);
let eF =
        "https://cdn.discordapp.com/assets/content/ad2a252a6866e1ecb3bab521e2baaabbf13ab2d1ecaa8af67862c53c91f76761.png",
    eV = { [ey.qH.THUMBNAIL]: null, [ey.qH.STATIC]: null, [ey.qH.REDUCED_MOTION]: null },
    e$ = "debug",
    eW = "reduced-motion-preview-modal",
    ez = (e) => {
        let { transitionState: t, onClose: a, frameSrc: n, theme: l } = e;
        return (0, r.jsx)(eE.d, {
            transitionState: t,
            size: "md",
            onClose: a,
            maxHeight: "viewport",
            children: (0, r.jsxs)("div", {
                className: eG.Xd,
                children: [
                    (0, r.jsx)("div", {
                        className: eG.y6,
                        children: (0, r.jsx)(eS.K, {
                            "aria-label": "Close",
                            onClick: a,
                            icon: eN.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: eG.rU,
                        children: [
                            (0, r.jsx)(eA.N, {
                                theme: l,
                                children: (e) =>
                                    (0, r.jsx)("img", {
                                        src: eF,
                                        alt: "",
                                        className: S()(eG.aM, e),
                                        "aria-hidden": !0,
                                    }),
                            }),
                            null != n &&
                                "" !== n &&
                                (0, r.jsx)("img", { src: n, className: eG.SD, alt: "Reduced motion preview" }),
                        ],
                    }),
                ],
            }),
        });
    },
    eH = (e) => {
        let { type: t, frame: a, theme: n, onClear: l } = e,
            s = t === ey.qH.REDUCED_MOTION,
            i = s ? eF : eB.A,
            o = (0, r.jsx)(eA.N, {
                theme: n,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("img", { src: i, alt: "", className: S()(eG.aM, e), "aria-hidden": !0 }),
                            a?.src != null &&
                                "" !== a.src &&
                                (0, r.jsx)("img", { src: a.src, className: S()(eG.SD, e), alt: "" }),
                        ],
                    }),
            });
        return (0, r.jsxs)("div", {
            className: eG.pK,
            children: [
                (0, r.jsx)(T.D, { variant: "heading-sm/bold", children: t }),
                s
                    ? (0, r.jsx)(N.D, {
                          className: S()(eG.zd, eG.eB),
                          onClick: () => {
                              (0, ek.hasModalOpen)(eW)
                                  ? (0, ek.closeModal)(eW)
                                  : (0, ek.openModalLazy)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, r.jsx)(ez, { ...e, frameSrc: a?.src ?? null, theme: n }),
                                            ),
                                        { modalKey: eW, onCloseRequest: () => (0, ek.closeModal)(eW) },
                                    );
                          },
                          children: o,
                      })
                    : (0, r.jsx)("div", { className: eG.zd, children: o }),
                null != a && (0, r.jsx)(x.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: l }),
            ],
        });
    },
    eK = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, ef.wu)(),
            n = (0, d.bG)([V.default], () => V.default.getCurrentUser()),
            [l, s] = o.useState(!0),
            i = o.useRef({}),
            [c, u] = o.useState(!1),
            [m, h] = o.useState(!1),
            [p, g] = o.useState(8),
            [v, j] = o.useState([]),
            [b, f] = o.useState(eV),
            y = o.useRef([]),
            [_, C] = o.useState(t.name),
            E = _.toLowerCase().replace(/\s+/g, "_"),
            N = o.useMemo(
                () => ({
                    type: e_.R.PROFILE_EFFECT,
                    skuId: e$,
                    title: e$,
                    description: e$,
                    accessibilityLabel: e$,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: v,
                    animationType: eC.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [v],
            ),
            k = c ? eI.A.themes.DARKER : eI.A.themes.LIGHT,
            I = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            D = (e, t) => {
                let a = I(t);
                null != a &&
                    (0, ey.Mz)(a, (t) => {
                        f((n) => ({ ...n, [e]: (0, ey.GT)(t, a) }));
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
                                let e = (0, ey.fB)(a.base64);
                                (a.src = e), y.current.push(e), f((e) => ({ ...e, [t]: a }));
                            }
                        }
                    });
            }, [t.stillFrames]);
        let O = { profileEffect: t, upsertProfileEffect: a },
            R = o.useRef(O);
        return (o.useEffect(() => {
            R.current = O;
        }),
        o.useEffect(() => {
            let { profileEffect: e, upsertProfileEffect: t } = R.current;
            e.readonly || t({ skuId: e.skuId, name: _, effects: v, stillFrames: b });
        }, [v, b, _]),
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
                  className: eG.zr,
                  children: [
                      (0, r.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, r.jsx)(eg.A, {
                                  ref: (e) => {
                                      i.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = I(e);
                                      null != t &&
                                          (0, ey.Mz)(t, async (e) => {
                                              let a = await (0, ey.Ay)(e, t, v.length);
                                              j((e) => [...e, a]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eg.A, {
                                  ref: (e) => {
                                      i.current.thumbnail = e;
                                  },
                                  onChange: (e) => D(ey.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eg.A, {
                                  ref: (e) => {
                                      i.current.static = e;
                                  },
                                  onChange: (e) => D(ey.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eg.A, {
                                  ref: (e) => {
                                      i.current.reducedMotion = e;
                                  },
                                  onChange: (e) => D(ey.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: eG.Vg,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: S()(eG.nM, eG.uW),
                                  children: [
                                      (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Profile Effect Name" }),
                                      (0, r.jsx)("input", {
                                          type: "text",
                                          value: _,
                                          className: eG.hF,
                                          onChange: (e) => {
                                              C(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eG.nM,
                                  children: [
                                      (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Dark Theme" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: c,
                                          className: eG.OO,
                                          onChange: () => {
                                              u(!c);
                                          },
                                      }),
                                      (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Show User Profile" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: m,
                                          className: eG.OO,
                                          onChange: () => {
                                              h(!m);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eG.nM,
                                  children: [
                                      (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Border Radius" }),
                                      (0, r.jsx)("input", {
                                          type: "range",
                                          min: 4,
                                          max: 24,
                                          step: 2,
                                          value: p,
                                          onChange: (e) => g(+e.target.value),
                                      }),
                                      (0, r.jsxs)(A.E, { variant: "text-sm/normal", children: [p, "px"] }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: S()(eG.nz, eG.VH),
                                  style: { borderRadius: p },
                                  children: [
                                      m
                                          ? (0, r.jsx)("div", {
                                                className: eG.jq,
                                                children: (0, r.jsx)(eR.A, {
                                                    user: n,
                                                    currentUser: n,
                                                    transitionState: eD.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: eG.JB,
                                                }),
                                            })
                                          : (0, r.jsx)(eA.N, {
                                                theme: k,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: S()(eG.aM, e),
                                                        children: (0, r.jsx)("img", { src: eB.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      l &&
                                          (0, r.jsx)("div", {
                                              className: eG.KJ,
                                              children: (0, r.jsx)(eU, { profileEffect: N }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  children:
                                      m &&
                                      (0, r.jsxs)("div", {
                                          className: S()(eG.f5, eG.VH),
                                          style: { borderRadius: p },
                                          children: [
                                              (0, r.jsx)(eO.A, {
                                                  user: n,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, r.jsx)(eU, { profileEffect: N }),
                                          ],
                                      }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: eG.nz,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: eG.nM,
                                          children: [
                                              (0, r.jsx)(x.$, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => i.current.animated?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(A.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: eG.nM,
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
                                          className: eG.q6,
                                          children: (0, r.jsx)("div", {
                                              className: eG.nM,
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
                                          className: S()(eG.q6, eG.XA),
                                          children: [
                                              (0, r.jsx)(A.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Please download both configs for the drop package!",
                                              }),
                                              (0, r.jsx)(A.E, {
                                                  variant: "text-sm/bold",
                                                  color: "text-feedback-critical",
                                                  children: "WARNING: The full config is really big :0",
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: eG.nM,
                                                  children: [
                                                      (0, r.jsx)(eT.A, {
                                                          fileContents: () => (0, ey.rs)(v),
                                                          contentType: "text/plain",
                                                          fileName: `${E}_timing_config.txt`,
                                                          children: (0, r.jsx)(x.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(eT.A, {
                                                          fileContents: () =>
                                                              JSON.stringify({
                                                                  ...t,
                                                                  name: _,
                                                                  readonly: !1,
                                                                  effects: v,
                                                                  stillFrames: b,
                                                              }),
                                                          contentType: "text/plain",
                                                          fileName: `${E}_config.txt`,
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
                                          className: eG.uW,
                                          children: [
                                              (0, r.jsx)(T.D, { variant: "heading-lg/bold", children: "Still Frames" }),
                                              (0, r.jsx)("div", {
                                                  className: eG.mv,
                                                  children: Object.entries(b).map((e) => {
                                                      let [t, a] = e;
                                                      return (0, r.jsx)(
                                                          eH,
                                                          {
                                                              type: t,
                                                              frame: a,
                                                              theme: k,
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
                                              className: S()(eG.uW, eG.l7),
                                              children: [
                                                  (0, r.jsx)(A.E, {
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
                                  className: S()(eG.Vg, eG.ZF),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: eG.cD,
                                          children: (0, r.jsx)(x.$, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: () => {
                                                  j([]), f(eV);
                                              },
                                          }),
                                      }),
                                      v.map((e, t) =>
                                          (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: eG.ec,
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: eG.D1,
                                                          children: [
                                                              (0, r.jsx)(T.D, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, r.jsx)("img", {
                                                                  src: e.src,
                                                                  className: eG.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, r.jsxs)(r.Fragment, {
                                                                      children: [
                                                                          (0, r.jsx)(T.D, {
                                                                              variant: "heading-md/bold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, r.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, r.jsx)(T.D, {
                                                                                                  variant:
                                                                                                      "heading-sm/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, r.jsx)("img", {
                                                                                              src: e.src,
                                                                                              className: eG.oq,
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
                                                          className: S()(eG.Vg, eG.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: eG.nz,
                                                                  children: [
                                                                      (0, r.jsx)(A.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: eG.hF,
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
                                                                  className: eG.nz,
                                                                  children: [
                                                                      (0, r.jsx)(A.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: eG.hF,
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
                                                          className: S()(eG.Vg, eG.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: eG.nz,
                                                                  children: [
                                                                      (0, r.jsx)(A.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: eG.OO,
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
                                                                  className: eG.nz,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, r.jsxs)(r.Fragment, {
                                                                          children: [
                                                                              (0, r.jsx)(A.E, {
                                                                                  variant: "text-md/bold",
                                                                                  children: "Loop Delay",
                                                                              }),
                                                                              (0, r.jsx)("input", {
                                                                                  type: "number",
                                                                                  value: e.loopDelay,
                                                                                  className: eG.hF,
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
                                                          children: (0, r.jsx)(eg.A, {
                                                              ref: (e) => {
                                                                  i.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let a;
                                                                  null != (a = I(e)) &&
                                                                      (0, ey.Mz)(a, (e) => {
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
                                                          className: S()(eG.nM, eG._N),
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
    eY = "Make sure you're only uploading text files!",
    eq = (e) => {
        let { profileEffect: t, onClick: a } = e,
            { deleteProfileEffect: n } = (0, ef.wu)();
        return (0, r.jsxs)(N.D, {
            className: eG.B0,
            onClick: a,
            children: [
                (0, r.jsx)("div", { className: eG.yV, style: { backgroundImage: `url(${t.effects?.[0]?.base64})` } }),
                (0, r.jsxs)("div", {
                    className: eG.eL,
                    children: [
                        (0, r.jsx)(A.E, { variant: "text-md/bold", children: t.name }),
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
    };
function eJ() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, ef.wu)(),
        [n, l] = o.useState(),
        s = o.useRef(null),
        { categories: i } = (0, ej.A)(),
        d = o.useMemo(() => (0, ev.Wj)(i), [i]),
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
                if (null == a || !e.type.startsWith("text/")) return (0, eb.Ni)(eY);
                let [n, l] = a.split(",");
                if (!n.includes("text/plain")) return (0, eb.Ni)(eY);
                let s = JSON.parse(atob(l));
                (s.skuId = (0, ex.A)()), t(s), (0, eb.GF)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        p = o.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, eb.Ni)("Error uploading file. Try again!")
                    : (0, eb.KE)(e.currentTarget.files, h, eb.Ni);
            },
            [h],
        );
    return (0, r.jsxs)("div", {
        className: eG.zr,
        children: [
            null == n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eG.nz,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: S()(eG.uW, eG.nM),
                                    children: [
                                        (0, r.jsx)(T.D, {
                                            variant: "heading-xl/bold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, r.jsx)(x.$, {
                                            variant: "critical-secondary",
                                            text: "Clear All",
                                            onClick: async () => {
                                                (await ep.A.confirm({
                                                    title: "Clear All Profile Effects",
                                                    body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                                                    confirmText: "Clear All",
                                                    confirmVariant: "critical-primary",
                                                })) && (a(), (0, eb.GF)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: eG.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(eq, { profileEffect: e, onClick: () => l(e) }, e.skuId),
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: S()(eG.nM, eG._N, eG.uW),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: eG.au,
                                    children: [
                                        (0, r.jsx)(A.E, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: "Import Shared Config",
                                        }),
                                        (0, r.jsx)(eg.A, { ref: s, onChange: p, multiple: !1 }),
                                    ],
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: () => {
                                        t({ skuId: (0, ex.A)(), name: "New Profile Effect", effects: [] });
                                    },
                                }),
                            ],
                        }),
                        (0, r.jsx)("hr", {}),
                        (0, r.jsxs)("div", {
                            className: eG.uW,
                            children: [
                                (0, r.jsx)(T.D, { variant: "heading-xl/bold", children: "All Effects" }),
                                (0, r.jsx)(g.k, {
                                    value: c,
                                    onChange: (e) => {
                                        u(e);
                                    },
                                }),
                                (0, r.jsx)("div", {
                                    className: eG.xm,
                                    children: m.map((e) =>
                                        (0, r.jsx)(
                                            N.D,
                                            {
                                                className: eG.S5,
                                                style: { backgroundImage: `url(${e.thumbnailPreviewSrc})` },
                                                onClick: () => {
                                                    let t = {
                                                        [ey.qH.THUMBNAIL]:
                                                            null != e.thumbnailPreviewSrc &&
                                                            "" !== e.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [ey.qH.STATIC]:
                                                            null != e.staticFrameSrc && "" !== e.staticFrameSrc
                                                                ? {
                                                                      src: e.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [ey.qH.REDUCED_MOTION]:
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
                                                    className: eG.Hd,
                                                    children: (0, r.jsx)(A.E, {
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
            null != n && (0, r.jsx)(eK, { profileEffect: n }),
        ],
    });
}
var eQ = a(935399),
    eX = a(462887),
    eZ = a(289873),
    e0 = a(478016),
    e1 = a(565645),
    e2 = a(7584),
    e8 = a(619499),
    e3 = a(207803),
    e6 = a(84540),
    e5 = a(836602),
    e9 = a(999291),
    e4 = a(903209),
    e7 = a(841702),
    te = a(892118),
    tt = a(744808),
    ta = a(725287),
    tn = a(626768),
    tl = a(464896);
function ts() {
    let e = (0, J.Ay)();
    return (0, r.jsxs)("div", {
        className: ta.z3,
        children: [
            (0, r.jsx)("img", { src: (0, eX.M)(e) ? tn : tl, alt: "" }),
            (0, r.jsx)(A.E, {
                variant: "text-sm/normal",
                children:
                    "No frames found on your account. You must be granted test profile frame entitlements to use this tool.",
            }),
        ],
    });
}
function ti() {
    let e = (0, d.bG)([V.default], () => V.default.getCurrentUser()),
        t = (0, e9.Ay)(e?.id);
    o.useEffect(() => {
        e?.id != null && (0, e4.A)(e.id);
    }, [e?.id]);
    let { purchases: a, isFetchingPurchases: n } = (0, e7.Bf)(),
        l = o.useMemo(() => (0, ev.MG)(a, new Map()), [a]),
        [{ pendingProfileFrame: s }, i] = (0, d.yK)([e5.A], () => [e5.A.getPendingChanges(), e5.A.showNotice()]),
        c = void 0 === s ? t?.profileFrame : s,
        u = null != c ? a.get(c.skuId) : void 0,
        m = (0, te.s)(u?.items[0]) ? u.items[0] : void 0;
    return (
        (0, eQ.l0)(e3.RE),
        (0, r.jsxs)("div", {
            className: ta.kL,
            children: [
                (0, r.jsxs)(T.D, {
                    variant: "heading-xl/bold",
                    children: [
                        (0, r.jsx)(e1.A, {
                            emojiName: e2.Ay.getByName("frame_with_picture")?.surrogates,
                            className: ta.Zg,
                        }),
                        "Profile Frames!",
                    ],
                }),
                0 === l.length && n && (0, r.jsx)(eZ.y, {}),
                0 === l.length && !n && (0, r.jsx)(ts, {}),
                l.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: ta.MK,
                        children: [
                            (0, r.jsx)(A.E, {
                                variant: "text-sm/normal",
                                children: "Select a frame to preview. Save to apply the frame to your main profile.",
                            }),
                            (0, r.jsxs)("ul", {
                                className: ta.p_,
                                children: [
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(x.$, {
                                                text: "None",
                                                variant: "secondary",
                                                fullWidth: !0,
                                                icon: null == c ? e0.U : void 0,
                                                disabled: null == c,
                                                onClick: () => (0, e6.p)({ profileFrame: null }),
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
                                                          icon: c?.skuId === e.skuId ? e0.U : void 0,
                                                          disabled: c?.skuId === e.skuId,
                                                          onClick: () => (0, e6.p)({ profileFrame: e }),
                                                      }),
                                                  },
                                                  e.skuId,
                                              );
                                    }),
                                ],
                            }),
                            i && (0, r.jsx)(e8.A, {}),
                            (0, r.jsxs)("div", {
                                className: ta.VH,
                                children: [
                                    (0, r.jsx)(A.E, { variant: "text-sm/normal", children: "Preview:" }),
                                    (0, r.jsxs)("div", {
                                        className: ta.ME,
                                        children: [
                                            (0, r.jsx)("img", { src: eB.A, alt: "" }),
                                            null != m && (0, r.jsx)(tt.A, { frame: m }),
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
var tr = a(702841),
    to = a(793574),
    td = a(590180),
    tc = a(4227),
    tu = a(491438),
    tm = a(61750),
    th = a(328762);
let tx = (e) => {
        let [t, a] = o.useState(0);
        return (
            o.useLayoutEffect(() => {
                let e = tc.A.getPurchase;
                return (
                    (tc.A.getPurchase = (e) => void 0),
                    tc.A.emitChange(),
                    a(1),
                    () => {
                        (tc.A.getPurchase = e), tc.A.emitChange();
                    }
                );
            }, []),
            (0, r.jsx)("div", { className: th.Do, children: (0, r.jsx)(tu.A, { ...e }, t) })
        );
    },
    tp = () => {
        let e = (0, tr.bG)([V.default], () => V.default.getCurrentUser()),
            t = (0, tr.bG)([td.A], () => td.A.categories),
            a = (0, tr.bG)([tc.A], () => tc.A.purchases),
            n = (0, tr.bG)([td.A], () => td.A.lastSuccessfulFetch),
            l = t.size > 0 && a.size > 0 && null != n,
            { isFetching: s, categories: i } = (0, e7.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: l }),
            d = l ? t : i,
            c = l || (!s && d.size > 0),
            [u, m] = o.useState(""),
            [h, p] = o.useState(null),
            [v, j] = o.useState(null);
        return (o.useEffect(() => {
            if ("" === u.trim() || !c) {
                p(null), j(null);
                return;
            }
            let e = td.A.getProduct(u),
                t = td.A.getCategoryForProduct(u);
            null != e && null != t ? (p(e), j(t)) : (p(null), j(null));
        }, [u, c]),
        s)
            ? (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Loading categories and collectibles..." })
            : null == e
              ? (0, r.jsx)(A.E, { variant: "text-md/normal", children: "No user found" })
              : (0, r.jsxs)("div", {
                    className: th.kL,
                    children: [
                        (0, r.jsxs)("div", {
                            className: th.uW,
                            children: [
                                (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Product Configuration" }),
                                (0, r.jsxs)("div", {
                                    className: th.qp,
                                    children: [
                                        (0, r.jsx)(A.E, {
                                            variant: "text-md/semibold",
                                            className: th.NB,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, r.jsx)(g.k, { value: u, onChange: m, placeholder: "Enter product SKU ID" }),
                                        !c &&
                                            "" !== u.trim() &&
                                            (0, r.jsx)(A.E, {
                                                variant: "text-sm/normal",
                                                className: th.KQ,
                                                children: "Loading products...",
                                            }),
                                        c &&
                                            "" !== u.trim() &&
                                            null == h &&
                                            (0, r.jsx)(A.E, {
                                                variant: "text-sm/normal",
                                                className: th.kc,
                                                children: "Product not found",
                                            }),
                                        null != h &&
                                            (0, r.jsxs)(A.E, {
                                                variant: "text-sm/normal",
                                                className: th.xT,
                                                children: ["Found: ", h.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: th.uW,
                            children: [
                                (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Product Preview" }),
                                null != h && null != v
                                    ? (0, r.jsxs)("div", {
                                          className: th.i1,
                                          children: [
                                              (0, r.jsx)(tx, { skuId: h.skuId }),
                                              (0, r.jsx)(x.$, {
                                                  variant: "primary",
                                                  onClick: () => {
                                                      null != h &&
                                                          null != e &&
                                                          (0, tm.A)({
                                                              product: h,
                                                              analyticsLocations: [to.A.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)("div", {
                                          className: th.qf,
                                          children: (0, r.jsx)(A.E, {
                                              variant: "text-md/normal",
                                              className: th.X2,
                                              children: "Enter a valid product SKU ID to see the preview",
                                          }),
                                      }),
                            ],
                        }),
                    ],
                });
    };
var tg = a(410724);
let tv = { profile_effects: 1, nameplates: 2, profile_frames: 3, product_preview: 4 },
    tj = (e) => {
        let { setTab: t } = e,
            a = (0, d.bG)([M.A], () => M.A.getWindowOpen(H.MLl.DEVTOOLS_POPOUT));
        return (0, r.jsxs)("div", {
            className: tg.Qs,
            children: [
                (0, r.jsx)(N.D, {
                    onClick: () => {
                        t(1);
                    },
                    children: (0, r.jsx)("div", {
                        className: S()(tg.vK, tg.Dg),
                        children: (0, r.jsx)(A.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Effects",
                        }),
                    }),
                }),
                (0, r.jsx)(N.D, {
                    onClick: () => {
                        t(2);
                    },
                    children: (0, r.jsx)("div", {
                        className: S()(tg.vK, tg.st),
                        children: (0, r.jsx)(A.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Nameplates",
                        }),
                    }),
                }),
                (0, r.jsx)(N.D, {
                    onClick: () => {
                        t(3);
                    },
                    children: (0, r.jsx)("div", {
                        className: S()(tg.vK, tg.Dg),
                        children: (0, r.jsx)(A.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Frames",
                        }),
                    }),
                }),
                (0, r.jsx)(N.D, {
                    onClick: () => {
                        t(4);
                    },
                    children: (0, r.jsx)("div", {
                        className: S()(tg.vK, tg.IP),
                        children: (0, r.jsx)(A.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Products",
                        }),
                    }),
                }),
                !a &&
                    (0, r.jsx)("div", {
                        style: { marginTop: 16 },
                        children: (0, r.jsx)(k.w, {
                            type: "warning",
                            children: (0, r.jsxs)(I.B, {
                                gap: 8,
                                children: [
                                    (0, r.jsx)(A.E, { variant: "text-md/semibold", children: "Not enough space?" }),
                                    (0, r.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        children: "You can pop out the DevTools to see the full layout.",
                                    }),
                                    (0, r.jsx)(x.$, {
                                        size: "sm",
                                        icon: D.t,
                                        variant: "secondary",
                                        onClick: w.openDevToolsPopout,
                                        text: "Popout DevTools",
                                    }),
                                ],
                            }),
                        }),
                    }),
            ],
        });
    },
    tb = () => {
        let [e, t] = o.useState(() => {
            let e = R.A.lastOpenSubTabId;
            return null != e && e in tv ? tv[e] : 0;
        });
        return (
            o.useEffect(() => {
                null != R.A.lastOpenSubTabId && (0, O.Jt)({ lastOpenSubTabId: null });
            }, []),
            (0, r.jsxs)(c.Ip, {
                className: tg.iE,
                children: [
                    (0, r.jsxs)("div", {
                        className: tg.C$,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-xxl/medium", children: "Collectibles DevTools" }),
                            0 !== e && (0, r.jsx)(x.$, { variant: "primary", onClick: () => t(0), text: "Back" }),
                        ],
                    }),
                    (() => {
                        switch (e) {
                            case 1:
                                return (0, r.jsx)(eJ, {});
                            case 2:
                                return (0, r.jsx)(ei, {});
                            case 3:
                                return (0, r.jsx)(ti, {});
                            case 4:
                                return (0, r.jsx)(tp, {});
                            default:
                                return (0, r.jsx)(tj, { setTab: t });
                        }
                    })(),
                ],
            })
        );
    };
var tf = a(681154),
    ty = a(306264),
    t_ = a(506774),
    tC = a(228366),
    tE = a(587895),
    tS = a(429913),
    tN = a(475825),
    tA = a(505206);
function tk(e) {
    let { columns: t, data: a, className: n, rowClassName: l, onClickRow: s, selectedRowKey: i, rowHeight: d = 40 } = e,
        c = o.useMemo(
            () =>
                t.map((e) => ({
                    renderHeader: () => (0, r.jsx)(A.E, { variant: "text-sm/semibold", children: e.key }),
                    ...e,
                })),
            [t],
        ),
        u = 0 === a.length ? [1] : [a.length];
    return (0, r.jsx)("div", {
        className: tA.CZ,
        children: (0, r.jsx)(tN.OZ, {
            className: n,
            innerClassName: tA.tp,
            sections: u,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    n = tA.ZR;
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
                    u = S()(tA.jD, { [tA.wD]: o === i, rowClassName: l });
                return (0, r.jsx)(
                    N.D,
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
var tI = a(409626),
    tD = a(692969),
    tT = a(760751),
    tO = a(403362),
    tR = a(435738),
    tw = a(99753),
    tM = a(975732),
    tL = a(574520),
    tP = a(808323),
    tU = a(832384),
    tG = a(424994),
    tB = a(330837);
function tF(e) {
    let { id: t } = e,
        a = (0, d.bG)([V.default], () => V.default.getUser(t));
    return null == a
        ? null
        : (0, r.jsx)(N.D, {
              className: tB._,
              onClick: function () {
                  (0, tM.openUserProfileModal)({ sourceAnalyticsLocations: [to.A.DEV_TOOLS], userId: t });
              },
              children: (0, r.jsx)(A.E, { variant: "text-md/semibold", children: a.username }),
          });
}
function tV() {
    let e = (0, d.bG)([tw.A], () => tw.A.getFeed(tG.X1.GLOBAL_FEED)),
        t = (0, d.bG)([tw.A], () => tw.A.getFilters()),
        a = (0, d.cf)([tL.A], () => {
            let t = {};
            for (let a of e?.entries ?? []) t[(0, tL.$)(a.content)] = tL.A.canRenderContent(a.content);
            return t;
        }, [e]),
        n = (0, d.bG)([tR.A], () => tR.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let l = e?.entries?.flatMap((e) => {
        let { content: l } = e;
        if (!(0, tP.l)(t, l)) return [];
        let s = a[(0, tL.$)(l)];
        return (0, r.jsxs)(
            "li",
            {
                className: tB.p,
                children: [
                    (0, r.jsx)(tF, { type: l.author_type, id: l.author_id }),
                    !s && (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Expired or no matching presence" }),
                    (0, tU.I5)(l) &&
                        (0, r.jsxs)(A.E, { variant: "text-md/normal", children: ["Expired at ", l.expires_at] }),
                    n.has(l.id) && (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Impression capped" }),
                ],
            },
            l.id,
        );
    });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Selected Content" }),
            null != l ? (0, r.jsx)("ul", { children: l }) : (0, r.jsx)("div", { children: "(none?)" }),
        ],
    });
}
var t$ = a(576470),
    tW = a(85451);
function tz() {
    let e = (0, d.bG)([tw.A], () => tw.A.getFeed(tG.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, d.cf)(
            [tw.A],
            () => tw.A.getFeedState(tG.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        n = (0, d.bG)([tw.A], () => tw.A.getLastFeedFetchDate(tG.X1.GLOBAL_FEED));
    return (0, r.jsxs)("div", {
        children: [
            t
                ? (0, r.jsx)(A.E, { variant: "text-md/normal", children: "(fetching)" })
                : (0, r.jsxs)(A.E, {
                      variant: "text-md/normal",
                      children: [
                          "Next fetch: ",
                          null != a ? (0, r.jsx)(t$.A, { deadline: a }) : e ? "(awaiting push)" : "(unscheduled)",
                      ],
                  }),
            (0, r.jsxs)(A.E, {
                variant: "text-md/normal",
                children: [
                    "Last fetch:",
                    " ",
                    null != n ? (0, r.jsx)(tW.z, { inline: !0, entry: { start: n.getTime() } }) : "(never)",
                ],
            }),
        ],
    });
}
var tH = a(866839);
let tK = [
    {
        key: "type",
        cellClassName: S()(tH.Hn, tH.T$),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(A.E, { variant: "text-md/semibold", children: tf.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: S()(tH.Hn, tH.MX),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)("div", { children: (0, r.jsx)(A.E, { variant: "text-md/normal", children: t.length }) });
        },
    },
    {
        key: "only?",
        cellClassName: tH.Hn,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(tY, { type: t });
        },
    },
];
function tY(e) {
    let { type: t } = e,
        a = (0, d.bG)([tw.A], () => tw.A.getFilters()),
        n = a?.types?.has(t) ?? !1;
    return (0, r.jsx)(j.d, {
        checked: n,
        onChange: function () {
            n
                ? tC.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : tC.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function tq() {
    var e;
    let t,
        a = (0, d.bG)([tw.A], () => tw.A.getFeed(tG.X1.GLOBAL_FEED)),
        n = (0, d.bG)([tw.A], () => tw.A.getDebugImpressionCappingDisabled()),
        l = (0, d.bG)([tR.A], () => tR.A.getDebugFastImpressionCappingEnabled()),
        s =
            ((e = a?.entries?.map((e) => e.content)),
            Object.keys((t = eM().groupBy(e, (e) => e.content_type))).map((e) => {
                let a = t[e];
                return { key: `${e}`, type: a[0].content_type, entries: a };
            })),
        i = (0, d.bG)([tw.A], () => tw.A.getFeedState(tG.X1.GLOBAL_FEED)?.loading === !0),
        [u, m] = o.useState(""),
        h = (0, d.bG)(
            [tT.A, tE.A],
            () => (parseInt(u) > 0 ? u : (tT.A.searchGamesByName(u)[0] ?? tE.A.getApplicationByName(u)?.id)),
            [u],
        ),
        p = (0, tD.A)({ applicationId: h, location: "DevToolsContentInventory", source: tI.Ob.DevTools }),
        v = Object.entries(t_.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        j = (0, tS.A)(v).filter(tO.Vq);
    return (0, r.jsx)("div", {
        className: tA.nd,
        children: (0, r.jsxs)(c.Ip, {
            className: tH.Qs,
            children: [
                (0, r.jsxs)(I.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(A.E, { variant: "text-md/semibold", children: "Inventory" }),
                        s.length > 0 && (0, r.jsx)(tk, { columns: tK, data: s }),
                        (0, r.jsx)(tz, {}),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                tC.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: tG.X1.GLOBAL_FEED,
                                    feature: ty.M.INBOX,
                                });
                            },
                            loading: i,
                        }),
                    ],
                }),
                (0, r.jsxs)(I.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(A.E, { variant: "text-md/semibold", children: "Impression Capping" }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tC.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tC.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: n ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tC.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tC.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, r.jsx)(tV, {}),
                (0, r.jsxs)(I.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(A.E, { variant: "text-md/semibold", children: "Game Profile" }),
                        (0, r.jsx)(g.k, {
                            placeholder: "App ID or full name",
                            onChange: (e) => (0 === e.length || e.length >= 18) && m(e),
                            onKeyDown: (e) => {
                                "Enter" === e.key && (u === e.currentTarget.value ? p?.(e) : m(e.currentTarget.value));
                            },
                            error:
                                u.length > 0 && null == p ? `No game profile for ${h ?? u + " - try by id"}.` : void 0,
                            helperText: null != p ? "Game profile found" : void 0,
                        }),
                        (0, r.jsx)("ul", {
                            children: j.map((e) =>
                                (0, r.jsx)(
                                    "li",
                                    { children: (0, r.jsx)(tJ, { application: e }) },
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
let tJ = (e) => {
    let { application: t } = e,
        a = (0, tD.A)({ applicationId: t.id, location: "DevToolsContentInventory", source: tI.Ob.DevTools });
    return (0, r.jsx)(N.D, {
        onClick: a,
        children: (0, r.jsx)(A.E, { variant: "text-xs/normal", color: "text-muted", children: t.name }),
    });
};
var tQ = a(783878),
    tX = a(137177),
    tZ = a(311043),
    t0 = a(569926),
    t1 = a(282435);
function t2(e) {
    return t1.Bf.get(e) ?? 0;
}
function t8(e) {
    let { gameId: t } = e,
        { data: a, isLoading: n } = (0, t0.I)(t),
        l = (0, d.bG)([tZ.A], () => tZ.A.hasNoData(t), [t]);
    return n || (null == a && !l)
        ? (0, r.jsx)(A.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading\u2026" })
        : null == a
          ? (0, r.jsxs)(A.E, {
                variant: "text-sm/normal",
                color: "text-feedback-critical",
                children: ["No game found for ID ", t],
            })
          : (0, r.jsxs)(I.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(tX.A, { game: a, size: tX.M.SMALL }),
                    (0, r.jsxs)(I.B, {
                        gap: 0,
                        children: [
                            (0, r.jsx)(A.E, { variant: "text-md/semibold", children: a.name }),
                            (0, r.jsx)(A.E, { variant: "text-xxs/normal", color: "text-muted", children: a.id }),
                        ],
                    }),
                ],
            });
}
function t3() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, d.bG)([tT.A], () => tT.A.games),
        s = o.useMemo(
            () =>
                l
                    .filter((e) => null != e.name && "" !== e.name)
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sort((e, t) => t2(t.value) - t2(e.value)),
            [l],
        ),
        i = o.useMemo(() => ({ baseSort: (e, t) => t2(t.item.value) - t2(e.item.value), keys: ["label"] }), []),
        c = o.useCallback((e) => {
            t(e), null != e && n("");
        }, []),
        u = o.useCallback((e) => {
            n(e), e.trim().length > 0 && t(null);
        }, []),
        m = a.trim(),
        h = m.length > 0 ? m : (e ?? void 0),
        p = (0, tD.A)({ gameId: h, location: "DevToolsGameProfile", source: tI.Ob.DevTools });
    return (0, r.jsx)("div", {
        className: tA.nd,
        children: (0, r.jsxs)(I.B, {
            gap: 32,
            padding: 12,
            fullWidth: !1,
            children: [
                (0, r.jsxs)(I.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-md/bold", children: "Game Profile" }),
                        (0, r.jsx)(A.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "Search for a game by name, or paste a game ID, then open its profile.",
                        }),
                    ],
                }),
                (0, r.jsxs)(I.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-sm/bold", children: "Search" }),
                        (0, r.jsx)(tQ.Z, {
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
                (0, r.jsxs)(I.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-sm/bold", children: "Game ID" }),
                        (0, r.jsx)(g.k, {
                            label: "Game ID",
                            hideLabel: !0,
                            placeholder: "Paste a game ID",
                            value: a,
                            onChange: u,
                        }),
                        m.length > 0 && (0, r.jsx)(t8, { gameId: m }),
                    ],
                }),
                (0, r.jsx)(x.$, {
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
var t6 = a(696986),
    t5 = a(47167),
    t9 = a(734057),
    t4 = a(994500),
    t7 = a(310031),
    ae = a(394953),
    at = a(732421);
let aa = [
        {
            key: "channelName",
            cellClassName: S()(at.Hn, at.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(A.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: S()(at.Hn, at.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(A.E, { variant: "text-md/normal", children: t });
            },
        },
    ],
    an = [
        {
            key: "channelName",
            cellClassName: S()(at.Hn, at.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(A.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: S()(at.Hn, at.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, r.jsx)(A.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: S()(at.Hn, at.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(A.E, { variant: "text-md/normal", children: t });
            },
        },
    ];
function al() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, ae.U4)(),
        {
            isLoading: a,
            hasLoadedEver: n,
            hasPreloaded: l,
            hasMoreToLoad: s,
            isLoadingComplete: i,
        } = (0, tr.cf)([t7.A], () => ({
            isLoading: t7.A.isLoading,
            hasLoadedEver: t7.A.hasLoadedEver,
            hasPreloaded: t7.A.hasPreloaded,
            hasMoreToLoad: t7.A.hasMoreToLoad,
            isLoadingComplete: t7.A.isLoadingComplete,
        })),
        o = (0, tr.bG)([t7.A], () => t7.A.currentRequestAnalyticsPayload),
        d = (0, tr.cf)([t7.A], () => t7.A.getChannelInfoMap()),
        u = (0, tr.cf)([t9.A], () => {
            let e = {};
            return (
                Object.entries(d).forEach((t) => {
                    let [a] = t,
                        n = t9.A.getChannel(a);
                    e[a] = n ?? null;
                }),
                e
            );
        }),
        m = (0, tr.cf)([t9.A], () =>
            t.reduce((e, t) => {
                let a = t9.A.getChannel(t);
                return (e[t] = a ?? null), e;
            }, {}),
        ),
        h = (0, tr.bG)([t7.A], () => t7.A.getInboxMessages()),
        x = (0, tr.bG)([t7.A], () => t7.A.getDevOverrides().navOnClick);
    return (0, r.jsx)("div", {
        className: tA.nd,
        children: (0, r.jsxs)(c.Ip, {
            className: at.Qs,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Inbox" }),
                        (0, r.jsxs)("div", { children: ["Inbox Message Count: ", h.length] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Dev Overrides" }),
                        (0, r.jsx)("div", {
                            style: { display: "flex", alignItems: "center", marginTop: 8 },
                            children: (0, r.jsx)(j.d, {
                                label: "Nav On Click",
                                checked: !!x,
                                onChange: (e) => {
                                    tC.h.dispatch({ type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES", navOnClick: e });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Unreads and Badging" }),
                        (0, r.jsx)(t6.h, { size: 8 }),
                        (0, r.jsxs)("div", { children: ["Unread Recent Mentions Count: ", e] }),
                        (0, r.jsxs)("div", { children: ["Unread Channel Count: ", t.length] }),
                        (0, r.jsx)(tk, {
                            columns: aa,
                            data: Object.entries(m).map((e) => {
                                let [t, a] = e;
                                return {
                                    key: t,
                                    channelId: t,
                                    channelName: null != a ? (0, t5.m1)(a, V.default, t4.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Store State" }),
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
                        (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, r.jsxs)("div", { children: ["Total Channels: ", Object.keys(d).length] }),
                        (0, r.jsx)(tk, {
                            columns: an,
                            data: Object.entries(d).map((e) => {
                                let t,
                                    [a, n] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = u[a]) ? (0, t5.m1)(t, V.default, t4.A) : "",
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
var as = a(976860),
    ai = a(340124),
    ar = a(988483);
let ao = function () {
    return (0, r.jsxs)("div", {
        className: ar.k,
        children: [
            (0, r.jsx)(A.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, r.jsx)(x.$, {
                onClick: () => {
                    (0, ai.Ov)(), (0, as.pX)(H.BVt.QUEST_HOME);
                },
                text: "Clear History",
            }),
            (0, r.jsx)(A.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                children:
                    "Your may have to refresh your client after being redirected to the Quest Home in order to see these changes.",
            }),
        ],
    });
};
var ad = a(271866),
    ac = a(868511),
    au = a(147964),
    am = a(760716),
    ah = a(533406),
    ax = a(115093),
    ap = a(11039);
let ag = window.GLOBAL_ENV.RELEASE_CHANNEL === ax.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function av() {
    let e = (0, am.i)((e) => e.overrideApplicationId),
        t = (0, am.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        [n, l] = o.useState(ag),
        [s, i] = o.useState(H.FYj),
        c = o.useCallback(
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
        m = (0, am.i)((e) => e.showSelfActivity),
        h = (0, am.i)((e) => e.setShowSelfActivity),
        p = (0, am.i)((e) => e.recommendationApplicationIds),
        v = (0, am.i)((e) => e.setRecommendationApplicationIds),
        b = o.useCallback(
            (e) => {
                e ? v(s) : v(null);
            },
            [s, v],
        ),
        f = (0, d.bG)([au.A], () => null != au.A.testModeApplicationId),
        y = o.useCallback((e) => {
            e ? (0, ek.openModal)((e) => (0, r.jsx)(ac.A, { ...e })) : ad.cL();
        }, []),
        _ = (0, tD.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: n,
            source: tI.Ob.Embed,
            trackEntryPointImpression: !0,
        }),
        C = o.useCallback(
            (e) => {
                _?.(e);
            },
            [_],
        ),
        E = o.useCallback(() => {
            (0, as.pX)(H.BVt.COLLECTIBLES_SHOP_GAME_SHOP(n));
        }, [n]),
        N = o.useCallback(() => {
            (0, ah.openSocialLayerStorefrontAnnouncementModal)();
        }, []);
    return (0, r.jsx)("div", {
        className: S()(tA.nd, ap.n),
        children: (0, r.jsxs)("div", {
            className: ap.k,
            children: [
                (0, r.jsx)(g.k, { label: "Application ID", value: n, onChange: u }),
                (0, r.jsx)(T.D, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, r.jsx)(j.d, { label: "Override activity application ID", checked: a, onChange: c }),
                (0, r.jsx)(j.d, { label: "Show own voice activity (bypass self check)", checked: m, onChange: h }),
                (0, r.jsx)(j.d, { label: "Enable application test mode", checked: f, onChange: y }),
                (0, r.jsx)(x.$, { text: "Open Game Profile Modal", onClick: C }),
                (0, r.jsx)(x.$, { text: "Open Announcement Modal", onClick: N }),
                (0, r.jsx)(x.$, { text: "Navigate to App Game Shop", onClick: E }),
                (0, r.jsx)(T.D, { variant: "heading-lg/normal", children: "Wishlists" }),
                (0, r.jsx)(g.k, {
                    label: "Recommendation application IDs",
                    value: s,
                    onChange: i,
                    disabled: null == p,
                }),
                (0, r.jsx)(j.d, {
                    label: "Enable recommendation application IDs override",
                    checked: null != p,
                    onChange: b,
                }),
            ],
        }),
    });
}
var aj = a(540999),
    ab = a(865116);
a(670812), a(772958);
var af = a(58736);
a(558179), a(21574);
var ay = a(788806),
    a_ = a(302031);
let aC = {
    base00: eI.A.colors.BACKGROUND_BASE_LOWER.css,
    base03: eI.A.colors.TEXT_FEEDBACK_WARNING.css,
    base07: eI.A.colors.TEXT_DEFAULT.css,
    base08: eI.A.colors.TEXT_MUTED.css,
    base09: eI.A.colors.TEXT_FEEDBACK_POSITIVE.css,
    base0B: eI.A.colors.TEXT_FEEDBACK_WARNING.css,
    base0D: eI.A.colors.TEXT_BRAND.css,
};
function aE(e) {
    let t = {};
    for (let [a, n] of Object.entries(e)) t[a] = n;
    return t;
}
let aS = aE(aC),
    aN = aE(aC);
function aA(e) {
    return H.AKn.test(e) ? (0, r.jsx)(a_.Ay, { type: a_.Ay.Types.TEXT, children: () => e }) : e;
}
function ak(e) {
    let { data: t } = e,
        a = (0, J.Ay)();
    return (0, r.jsx)("div", {
        className: tA.H$,
        children: (0, r.jsx)(ay.d, {
            data: t,
            theme: "light" === a ? aN : aS,
            invertTheme: !1,
            valueRenderer: aA,
            shouldExpandNode: () => !0,
        }),
    });
}
var aI = a(761929),
    aD = a(23599);
function aT(e) {
    let { resizableNode: t, minHeight: a, onResize: n } = e,
        l = (0, aI.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: n,
            orientation: aI.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, r.jsx)("div", { onPointerDown: l, className: aD.Di });
}
function aO(e) {
    let { children: t, className: a, initialHeight: n, minHeight: l } = e,
        s = o.useRef(null),
        [i, d] = o.useState(n);
    return (0, r.jsxs)("div", {
        ref: s,
        className: aD.kL,
        style: { minHeight: l, height: i },
        children: [
            (0, r.jsx)(aT, { resizableNode: s, minHeight: l, onResize: d }),
            (0, r.jsx)("div", { className: S()(aD.KZ, a), children: t }),
        ],
    });
}
var aR = a(231643);
a(895017), aR.fu.NONE, aR.fu.NONE;
var aw = a(824552),
    aM = a(688810),
    aL = a(975460),
    aP = a(46225),
    aU = a(487431),
    aG = a(952818),
    aB = a(905552),
    aF = a(546183),
    aV = a(134861),
    a$ = a(71393),
    aW = a(967198),
    az = a(157257),
    aH = a(942370),
    aK = a(375708),
    aY = a(311350),
    aq = a(325126);
function aJ() {
    var e;
    let t,
        a,
        n = o.useRef(null),
        { analyticsLocations: l } = (0, aM.Ay)(to.A.DEV_TOOLS),
        [s, i] = o.useState(""),
        c = (0, d.bG)([aW.A], () => aW.A.getGuildId()),
        u = (0, d.bG)([a$.A], () => a$.A.getGuild(c)),
        m = u?.gameApplicationIds ?? [],
        h = (0, tS.A)(m).filter((e) => null != e),
        p = (0, d.bG)([aG.Ay, az.A], () => (0, aB.A)(aG.Ay, az.A)),
        j = (0, tS.h)(s),
        b = (0, aL.g)(j),
        f = (0, d.yK)(
            [tE.A],
            () => j?.linkedGames?.map((e) => tE.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        y = (0, aP.RD)(j, { allowedFlows: [aH._M.RPC], debug: !0 }),
        _ = (0, aP.RD)(j, { allowedFlows: [aH._M.WEB], debug: !0 }),
        C = (0, d.bG)([aV.A], () => null != b && aV.A.isConnected(b.id)),
        E = (0, aP.RD)(j, { debug: !0 }),
        { canDeauthorize: N, deauthorize: k } =
            ((e = E.connectionApp?.id),
            (t = (0, d.bG)([aF.default], () => aF.default.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && aw.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: n,
        className: S()(tA.nd, aq.nd),
        children: [
            (0, r.jsxs)("div", {
                className: aq.kL,
                children: [
                    (0, r.jsx)(T.D, { variant: "heading-lg/normal", children: "Guild Official Games" }),
                    null != u
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)(A.E, { variant: "text-md/normal", children: [u.name, " (", u.id, ")"] }),
                                  h.length > 0
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(A.E, {
                                                    variant: "text-sm/semibold",
                                                    children: "Official Games",
                                                }),
                                                h.map((e) =>
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
                                            ],
                                        })
                                      : (0, r.jsx)(A.E, { variant: "text-md/normal", children: "No official games" }),
                              ],
                          })
                        : (0, r.jsx)(A.E, { variant: "text-md/normal", children: "No guild selected" }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: aq.kL,
                children: [
                    (0, r.jsx)(T.D, { variant: "heading-lg/normal", children: "Application" }),
                    (0, r.jsx)(g.k, { label: "Application ID", value: s, onChange: i }),
                    null != p && null != p.id
                        ? (0, r.jsx)(x.$, {
                              onClick: () => i(p.id),
                              variant: "primary",
                              text: `Use detected game: ${p.name} (${p.id})`,
                          })
                        : null,
                    (0, r.jsxs)(A.E, {
                        variant: "text-md/normal",
                        children: ["Application Name: ", null != j ? j.name : "N/A"],
                    }),
                    (0, r.jsxs)(A.E, {
                        variant: "text-md/normal",
                        children: [
                            "Linked Games:",
                            " ",
                            f.length > 0
                                ? f.map((e) => ((0, aL.t)(j)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                : "N/A",
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(v.c, {}),
            (0, r.jsxs)("div", {
                className: aq.kL,
                children: [
                    (0, r.jsx)(T.D, { variant: "heading-lg/normal", children: "Authorization" }),
                    (0, r.jsx)(aU.VT, {
                        overallStatus: y.debug.isSubscribedToAuthorizeRequest
                            ? aU.nW.OVERALL_GOOD
                            : C
                              ? aU.nW.WARN
                              : aU.nW.OVERALL_BAD,
                        name: aK.intl.string(aY.default.AGLx00),
                        steps: [
                            {
                                status: C ? aU.nW.GOOD : aU.nW.BAD,
                                text: aK.intl.string(aY.default.kxF9br),
                                description: C ? null : aK.intl.string(aY.default.PFxxJa),
                                learnMoreLink: C
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: y.debug.isSubscribedToAuthorizeRequest
                                    ? aU.nW.GOOD
                                    : C
                                      ? aU.nW.WARN
                                      : aU.nW.BAD,
                                text: aK.intl.string(aY.default.S94dzs),
                                description:
                                    y.debug.isSubscribedToAuthorizeRequest || !C
                                        ? null
                                        : aK.intl.string(aY.default.aTULMB),
                                learnMoreLink:
                                    y.debug.isSubscribedToAuthorizeRequest || !C
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: E.chosenFlow === aH._M.RPC,
                    }),
                    (0, r.jsx)(aU.VT, {
                        overallStatus: _.debug.hasConnectionEntrypointUrl ? aU.nW.OVERALL_GOOD : aU.nW.OVERALL_BAD,
                        name: aK.intl.string(aY.default.K3ObrU),
                        steps: [
                            {
                                status: _.debug.hasConnectionEntrypointUrl ? aU.nW.GOOD : aU.nW.BAD,
                                text: aK.intl.string(aY.default["8a7IrV"]),
                                description: _.debug.hasConnectionEntrypointUrl
                                    ? aK.intl.formatToPlainString(aY.default["9iLeL2"], {
                                          url: _.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: E.chosenFlow === aH._M.WEB,
                    }),
                    (0, r.jsx)(aU.Sy, {
                        status: E.hasAlreadyLinked ? aU.nW.OVERALL_GOOD : aU.nW.OVERALL_BAD,
                        text: aK.intl.string(aK.t["Vu/zmQ"]),
                    }),
                    0 === E.debug.validFlows.length &&
                        (0, r.jsx)(A.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: aK.intl.string(aY.default.eg0mNa),
                        }),
                    (0, r.jsx)(x.$, {
                        disabled: !E.canStartAuthorization,
                        onClick: () => E.startAuthorization({ analyticsLocations: l }),
                        variant: "primary",
                        text: "Start Authorization",
                    }),
                    (0, r.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children:
                            "This will start whichever authorization flow is available. RPC authorization takes precedence over web.",
                    }),
                    (0, r.jsx)(x.$, {
                        disabled: !y.canStartAuthorization,
                        onClick: () => y.startAuthorization({ analyticsLocations: l }),
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, r.jsx)(x.$, {
                        disabled: !_.canStartAuthorization,
                        onClick: () => _.startAuthorization({ analyticsLocations: l }),
                        variant: "secondary",
                        text: "Start Web Authorization",
                    }),
                    (0, r.jsx)(x.$, { disabled: !N, onClick: k, variant: "critical-primary", text: "Deauthorize" }),
                ],
            }),
            j?.applicationAccountLinkBenefitConfig != null &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(v.c, {}),
                        (0, r.jsxs)("div", {
                            className: aq.kL,
                            children: [
                                (0, r.jsx)(T.D, { variant: "heading-lg/normal", children: "Reward Configuration" }),
                                (0, r.jsx)("div", {
                                    className: aq.Nr,
                                    children: (0, r.jsxs)("div", {
                                        className: aq.Tc,
                                        children: [
                                            null != j.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, r.jsx)("img", {
                                                    src: j.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: aq.L8,
                                                }),
                                            (0, r.jsx)(A.E, {
                                                variant: "text-md/semibold",
                                                children:
                                                    j.applicationAccountLinkBenefitConfig.reward_name ??
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
var aQ = a(427358),
    aX = a(465153);
let aZ = [
    {
        key: "user",
        cellClassName: aX.iL,
        render(e) {
            let { user: t, key: a } = e;
            return t?.username ?? a;
        },
    },
    {
        key: "affinity",
        renderHeader: () => (0, r.jsx)(A.E, { variant: "text-sm/semibold", children: "COMMUNICATION AFFINITY" }),
        cellClassName: aX.nz,
        render(e) {
            let { affinity: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "vcProbability",
        renderHeader: () => (0, r.jsx)(A.E, { variant: "text-sm/semibold", children: "VOICE AFFINITY" }),
        cellClassName: aX.nz,
        render(e) {
            let { vcProbability: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "isFriend",
        renderHeader: () => (0, r.jsx)(A.E, { variant: "text-sm/semibold", children: "IS FRIEND" }),
        cellClassName: aX.nz,
        render(e) {
            let { isFriend: t } = e;
            return t.toString();
        },
    },
];
function a0() {
    let e = (0, d.yK)([aQ.A, V.default], () =>
        aQ.A.getUserAffinities().map((e) => {
            let { otherUserId: t, communicationProbability: a, vcProbability: n, isFriend: l } = e;
            return { user: V.default.getUser(t), affinity: a, vcProbability: n, isFriend: l, key: t };
        }),
    );
    return 0 === e.length ? null : (0, r.jsx)(tk, { className: tA.nd, columns: aZ, rowClassName: aX.nM, data: e });
}
var a1 = a(139716),
    a2 = a(847599),
    a8 = a(282621);
function a3() {
    return (0, r.jsx)("div", {
        className: S()(tA.nd, a8.k),
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                (0, r.jsx)(v.c, { gap: 16 }),
                (0, r.jsxs)("div", {
                    className: a8.h,
                    children: [
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Test Tool",
                            onClick: () =>
                                void (0, ek.openModalLazy)(
                                    async () => {
                                        let { default: e } = await a.e("29079").then(a.bind(a, 357578));
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
                                a1.A.showAgeVerificationGetStartedModal({ entryPoint: a2.q1.DEV_TOOLS_QUICK_ACTIONS }),
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var a6 = a(989349),
    a5 = a.n(a6),
    a9 = a(862482),
    a4 = a(624479),
    a7 = a(555704),
    ne = a(285796),
    nt = a(241326),
    na = a(892547),
    nn = a(297413),
    nl = a(379078),
    ns = a(704554),
    ni = a(957565),
    nr = a(58703),
    no = a(80703),
    nd = a(495544);
let nc = 0,
    nu = [],
    nm = 0,
    nh = [],
    nx = !1;
class np extends d.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(nd.default, aj.A);
    }
    get loggedEvents() {
        return nu;
    }
    get loggedEventsVersion() {
        return nm;
    }
    get loggedTriggers() {
        return nh;
    }
    get trackTriggers() {
        return nx;
    }
}
let ng = new np(tC.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        aj.A.isDeveloper &&
            (nu.push({
                key: (nc++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, no.d)(n) : nd.default.getId(),
                timestamp: new Date(),
            }),
            nm++,
            nu.length > 500 && (nu = nu.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: l, location: s, previouslyTracked: i } = e;
        !aj.A.isDeveloper ||
            (nx &&
                (nh = [
                    ...nh,
                    {
                        key: (0, ex.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: n,
                        excluded: l,
                        location: s,
                        previouslyTracked: i,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                nh.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        nx = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (nu = []), nm++, (nh = []);
    },
});
var nv = a(658675);
function nj(e) {
    let { className: t, children: a } = e;
    return (0, r.jsx)("dl", { className: S()(tA.qo, t), children: a });
}
let nb = (e) => {
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
                (0, r.jsx)("dt", { className: tA.Bz, children: t }),
                (0, r.jsxs)("dd", {
                    className: tA.Nw,
                    children: [
                        a,
                        null != n
                            ? (0, r.jsx)(N.D, {
                                  tag: "span",
                                  className: tA.nH,
                                  onClick: () => (0, ni.C)(n, () => s(!0)),
                                  children: l
                                      ? (0, r.jsx)(e0.U, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(a4.T, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
};
function nf(e) {
    let { value: t } = e;
    return (0, r.jsx)(nv.P, { checked: t });
}
var ny = a(733657);
let n_ = [
    {
        key: "event",
        cellClassName: ny.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "location",
        cellClassName: ny.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function nC(e) {
    let { children: t } = e;
    return (0, r.jsx)(c.Ip, { className: ny._D, children: (0, r.jsx)("dl", { children: t }) });
}
function nE(e) {
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
            className: ny.fY,
            children: [
                (0, r.jsx)("dt", { className: ny.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(N.D, {
                    tag: "span",
                    className: ny.nH,
                    onClick: () => (0, ni.C)(JSON.stringify(n), () => s(!0)),
                    children: l
                        ? (0, r.jsx)(e0.U, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(a4.T, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let nS = new Set(["client_performance_cpu", "client_performance_memory"]),
    nN = [
        {
            id: "details",
            name: "Details",
            group: aR.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: n, fingerprint: l },
                        onClose: s,
                        filteredEvents: i,
                    } = e,
                    o = V.default.getUser(l),
                    d = a5()(n);
                return (0, r.jsxs)("div", {
                    className: ny.sw,
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(af.Ay, {
                            className: S()(tA.jr, ny.nZ),
                            children: [
                                (0, r.jsx)(af.Ay.Icon, { icon: a7.U, tooltip: t }),
                                (0, r.jsxs)(af.Ay.Title, {
                                    wrapperClassName: ny.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(N.D, {
                                            tag: "span",
                                            className: ny.KE,
                                            onClick: () => (0, ni.C)(t),
                                            children: (0, r.jsx)(a4.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(af.Ay.Icon, {
                                    icon: a4.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, ni.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: n, fingerprint: l, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(af.Ay.Icon, { icon: ne.a, tooltip: "Close", onClick: s }),
                            ],
                        }),
                        (0, r.jsxs)(nj, {
                            className: ny.ZK,
                            children: [
                                (0, r.jsx)(nb, {
                                    name: "Timestamp (local)",
                                    copyValue: n.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: n.toISOString(),
                                        title: (0, nr.i$)(d, "LLLL"),
                                        children: ["(", a5().locale(), ") ", (0, nr.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nb, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(nn.A, { user: o }),
                                    }),
                                (0, r.jsx)(nb, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(nC, {
                            children: Object.entries(a).map((e) => {
                                let [a, n] = e,
                                    l = nS.has(a)
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
                                                nE,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: n || null },
                                                    children:
                                                        null != n
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(n) })
                                                            : (0, r.jsx)("code", {
                                                                  className: ny.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, r.jsx)(
                                                    nE,
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
    nA = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(nA)
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
    nk = {
        searchType: nl.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function nI() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (0, d.bG)([ng], () => ng.loggedEventsVersion),
        [l, s] = o.useState(() => Object.keys(nA)),
        [i, c] = o.useState(ng.loggedEvents),
        u = o.useCallback((e) => {
            c(e);
        }, []);
    (0, ns.RT)(t, ng.loggedEvents, u, nk, [n]);
    let m = i.filter((e) => {
            for (let t of l) if (nA[t].filter(e)) return !0;
            return !1;
        }),
        [h, x] = o.useState(void 0),
        p = m.find((e) => e.key === h),
        { TabBar: g, renderSelectedTab: v } = (0, aR.Ay)({ tabs: nN }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: S()(tA.nd, ny.nd),
        children: [
            (0, r.jsxs)("div", {
                className: ny.rh,
                children: [
                    (0, r.jsx)(a9.$n, {
                        className: ny.Q$,
                        look: a9.$n.Looks.BLANK,
                        size: a9.$n.Sizes.ICON,
                        onClick: O.eY,
                        children: (0, r.jsx)("span", {
                            title: aK.intl.string(aK.t.VkKicb),
                            children: (0, r.jsx)(nt.u, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": aK.intl.string(aK.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: ny.Bi }),
                    (0, r.jsx)("div", {
                        className: ny.uW,
                        children: Object.entries(nA).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                N.D,
                                {
                                    className: S()(ny.pb, l.includes(t) && ny.bx),
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
                className: ny.rh,
                children: (0, r.jsx)(na.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(tk, { columns: n_, data: m, selectedRowKey: h, onClickRow: (e) => x(e.key) }),
            null != p &&
                (0, r.jsxs)(aO, {
                    className: ny.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(g, {}), v({ loggedEvent: p, onClose: () => x(void 0), filteredEvents: m })],
                }),
        ],
    });
}
var nD = a(382483),
    nT = a(385113),
    nO = a(315117);
function nR(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)(I.B, {
        gap: 8,
        padding: 8,
        className: nO.lt,
        children: [
            (0, r.jsx)(A.E, { variant: "text-sm/semibold", color: "text-strong", children: t.display_name }),
            (0, r.jsxs)(A.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["Config ID: ", t.config_id],
            }),
            (0, r.jsxs)(A.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["App ID: ", t.application_id],
            }),
            (0, r.jsxs)(A.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", t.status] }),
            null != t.updated_at &&
                (0, r.jsxs)(A.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Updated: ", t.updated_at],
                }),
            null != t.published_at &&
                (0, r.jsxs)(A.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Published: ", t.published_at],
                }),
            (0, r.jsx)(v.c, {}),
            (0, r.jsxs)(A.E, {
                variant: "text-xs/semibold",
                color: "text-strong",
                children: ["Surfaces (", a.length, ")"],
            }),
            0 === a.length
                ? (0, r.jsx)(A.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: "No surfaces configured",
                  })
                : a.map((e) => {
                      let [t, a] = e;
                      return (0, r.jsxs)(
                          I.B,
                          {
                              gap: 4,
                              padding: 4,
                              className: nO.YL,
                              children: [
                                  (0, r.jsx)(A.E, { variant: "text-xs/semibold", color: "text-default", children: t }),
                                  (0, r.jsxs)(A.E, {
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
function nw(e) {
    let { config: t, isSelected: a, onSelect: n } = e;
    return (0, r.jsxs)(I.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? nO.FM : nO.gt,
        children: [
            (0, r.jsx)(N.D, {
                className: nO.Av,
                onClick: n,
                children: (0, r.jsxs)(I.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(A.E, { variant: "text-sm/medium", color: "text-strong", children: t.display_name }),
                        (0, r.jsxs)(A.E, {
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
                onClick: () => (0, nD.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function nM() {
    let e = (0, d.bG)([nT.A], () => nT.A.getFeaturedFetchState());
    return (0, r.jsxs)(I.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(I.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(A.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Featured Configs",
                    }),
                    (0, r.jsxs)(A.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(x.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, nD.Wq)({ force: !0 }),
            }),
        ],
    });
}
function nL() {
    let e = (0, d.bG)([nT.A], () => nT.A.getDeveloperFetchState());
    return (0, r.jsxs)(I.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(I.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(A.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Developer Configs",
                    }),
                    (0, r.jsxs)(A.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(x.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, nD.i$)({ force: !0 }),
            }),
        ],
    });
}
function nP() {
    let [e, t] = o.useState(""),
        a = (0, d.bG)([nT.A], () => (e.length > 0 ? nT.A.getFetchState(e) : null)),
        n = (0, d.bG)([nT.A], () => (e.length > 0 ? nT.A.getConfigs(e) : null));
    return (0, r.jsxs)(I.B, {
        gap: 8,
        children: [
            (0, r.jsx)(A.E, { variant: "text-md/semibold", color: "text-strong", children: "Fetch by Application ID" }),
            (0, r.jsx)(g.k, { placeholder: "Application ID", value: e, onChange: (e) => t(e) }),
            (0, r.jsx)(x.$, {
                variant: "primary",
                size: "sm",
                text: "Fetch",
                disabled: 0 === e.length,
                onClick: () => (0, nD.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(A.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != n &&
                n.length > 0 &&
                (0, r.jsx)(I.B, { gap: 4, children: n.map((e) => (0, r.jsx)(nR, { config: e }, e.config_id)) }),
        ],
    });
}
function nU(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: n } = e,
        l = (0, d.bG)([nT.A], () => nT.A.getFeaturedFetchState());
    return (0, r.jsxs)(I.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(A.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            l === nT.e.FETCHING &&
                (0, r.jsx)(A.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    nw,
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
function nG(e) {
    let { config: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(v.c, {}),
            (0, r.jsxs)(I.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(A.E, { variant: "text-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(nR, { config: t }),
                ],
            }),
        ],
    });
}
function nB() {
    let [e, t] = o.useState(null),
        a = Object.values((0, d.bG)([nT.A], () => nT.A.getAllConfigsByApplication())).flat(),
        n = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(c.Ar, {
        children: (0, r.jsxs)(I.B, {
            gap: 16,
            padding: 8,
            className: nO.zr,
            children: [
                (0, r.jsx)(T.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(nM, {}),
                (0, r.jsx)(v.c, {}),
                (0, r.jsx)(nL, {}),
                (0, r.jsx)(v.c, {}),
                (0, r.jsx)(nP, {}),
                (0, r.jsx)(v.c, {}),
                (0, r.jsx)(nU, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != n && (0, r.jsx)(nG, { config: n }),
            ],
        }),
    });
}
var nF = a(636537),
    nV = a(153488),
    n$ = a(927813);
let nW = 12 * n$.A.Millis.HOUR,
    nz = new Map(),
    nH = !1,
    nK = Object.freeze({ channelAffinities: [], lastFetched: 0 }),
    nY = { ...nK };
function nq() {
    nz = new Map(nY.channelAffinities.map((e) => [e.channelId, e]));
}
class nJ extends d.Ay.PersistedStore {
    static displayName = "ChannelAffinitiesV2Store";
    static persistKey = "ChannelAffinitiesStoreV2";
    initialize(e) {
        null != e && ((nY.channelAffinities = e.channelAffinities), (nY.lastFetched = e.lastFetched), nq());
    }
    shouldFetch() {
        if (!nH) return Date.now() - nY.lastFetched > nW;
    }
    isFetching() {
        return nH;
    }
    getChannelAffinities() {
        return nY.channelAffinities;
    }
    getChannelAffinitiesMap() {
        return nz;
    }
    getChannelAffinity(e) {
        return nz.get(e);
    }
    compare(e, t) {
        return (nz.get(t)?.score ?? 0) - (nz.get(e)?.score ?? 0);
    }
    getState() {
        return nY;
    }
}
let nQ = new nJ(tC.h, {
    LOAD_CHANNEL_AFFINITIES_V2: function () {
        nH = !0;
    },
    LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineChannels: t } = e;
        (nY.lastFetched = Date.now()), (nH = !1), (nY.channelAffinities = t), nq();
    },
    LOAD_CHANNEL_AFFINITIES_V2_FAILURE: function () {
        nH = !1;
    },
    LOGOUT: function () {
        (nY = { ...nK }), (nz = new Map()), (nH = !1);
    },
});
var nX = a(907360);
let nZ = [
    {
        key: "channel",
        cellClassName: nX._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(A.E, { variant: "text-sm/semibold", children: "SCORE" }),
        cellClassName: nX.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function n0() {
    o.useEffect(() => {
        !(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            nQ.shouldFetch() && nV.A.hasConsented(H.YAq.PERSONALIZATION)
                ? (tC.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" }),
                  nF.Bo.get({
                      url: H.Rsh.CHANNEL_AFFINITIES_V2,
                      retries: 3 * !!e,
                      oldFormErrors: !0,
                      rejectWithError: !1,
                  }).then(
                      (e) => {
                          let { body: t } = e;
                          tC.h.dispatch({
                              type: "LOAD_CHANNEL_AFFINITIES_V2_SUCCESS",
                              affineChannels: t.channel_affinities.map((e) => ({
                                  channelId: e.channel_id,
                                  score: e.score ?? 0,
                              })),
                          });
                      },
                      () => {
                          tC.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2_FAILURE" });
                      },
                  ))
                : Promise.resolve();
        })();
    }, []);
    let e = (0, d.yK)([nQ, t9.A], () =>
        nQ
            .getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: t9.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(tk, { className: tA.nd, columns: nZ, rowClassName: nX.nM, data: e });
}
function n1() {
    return (0, r.jsxs)(A.E, {
        variant: "text-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var n2 = a(554146),
    n8 = a(105565),
    n3 = a(558845),
    n6 = a(193337);
let n5 = (e) => {
        switch (e) {
            case n8.r.DC_DISMISSED:
                return "DISMISS:";
            case n8.r.DC_SHOWN:
                return "SHOW:";
            case n8.r.DC_SHOW_REQUEST:
                return "REQUEST TO SHOW:";
            default:
                return "UNKNOWN TYPE:";
        }
    },
    n9 = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${n2.M[a]}`;
            },
        },
    ],
    n4 = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${n2.M[t]}`;
            },
        },
    ];
function n7() {
    let e = (0, d.bG)([n8.A], () => n8.A.getDCFEvents()),
        t = (0, n3.Ay)((e) => e.candidates),
        a = (0, n3.Ay)((e) => e.lastWinnerTime),
        n = 0 !== a ? a5()(a).fromNow() : "n/a",
        l = (0, n3.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        s = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: n5(t) + a.toString(), event: n5(t), dismissibleContent: a };
        }),
        i = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: n6.KE,
        children: [
            (0, r.jsxs)("div", { className: n6.pq, children: ["Last winner time: ", n] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: n6.pq, children: ["Last winner: ", null != l ? n2.M[l] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: n6.uI,
                children: (0, r.jsx)(tk, { className: n6.Th, columns: n4, data: i }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(tk, { columns: n9, data: s }),
        ],
    });
}
var le = a(689175),
    lt = a(541689),
    la = a(199773);
function ln() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(ll());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        a.unshift(e), t_.w.set("RecentDismissibleOverrides", a);
    }, []);
    return [ll(), e];
}
function ll() {
    return t_.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var ls = a(662546),
    li = a(643278),
    lr = a(617617),
    lo = a(256787),
    ld = a(20439);
let lc = o.memo(function (e) {
    let { className: t, content: a, onChange: n } = e,
        l = n2.M[a],
        { isDismissed: s, handleToggleDismissState: i } = (0, ld.A)(l),
        [d, c] = o.useState(!1),
        u = o.useCallback(() => {
            n?.(a), i();
        }, [n, i, a]),
        m = o.useCallback(
            (e) => {
                e.preventDefault(), c(!0), navigator.clipboard.writeText(a.toLowerCase());
            },
            [a],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(I.B, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, r.jsx)(eS.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: d ? ls.O : li.s,
                        onClick: m,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(j.d, {
                        label: `${a.toLowerCase()} (${n2.M[a]})`,
                        description: (0, lo.Zm)(l)
                            ? (function (e) {
                                  let t = lr.A.settings.userContent?.recurringDismissibleContentStates?.[e];
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
            (0, r.jsx)(v.c, {}),
        ],
    });
});
function lu(e) {
    let { items: t, onChange: a } = e,
        [n, l] = ln(),
        s = (0, o.useCallback)(
            (e) => {
                l(e), a?.(e);
            },
            [l, a],
        );
    return (0, r.jsx)(I.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(lc, { content: e, onChange: s }, e)),
    });
}
function lm(e) {
    let { searchQuery: t = "" } = e,
        a = (0, n3.Ay)((e) => e.recentlyShown),
        [n, l] = ln(),
        s = n
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(n2.M[e]))
            .slice(0, 3);
    return 0 === s.length
        ? null
        : (0, r.jsx)(m.n, { label: "Recent Overrides", children: (0, r.jsx)(lu, { items: s }) });
}
function lh(e) {
    let { searchQuery: t = "" } = e,
        a = (0, n3.Ay)((e) => e.recentlyShown)
            .map((e) => n2.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(m.n, { label: "Recently Shown", children: (0, r.jsx)(lu, { items: a }) });
}
var lx = a(594061),
    lp = a(268571);
function lg() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
        } = (0, d.cf)([la.A], () => ({
            dailyCapReached: la.A.hasUserHitDCCap(),
            dailyCapOverridden: la.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: la.A.newUserMinAgeRequiredOverridden,
        })),
        [n, l] = o.useState(""),
        [s, i] = o.useState(20),
        c = o.useMemo(
            () =>
                Object.keys(n2.M)
                    .filter((e) => e.toLowerCase().includes(n.toLowerCase()))
                    .reverse(),
            [n],
        ),
        u = o.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && s < c.length && i((e) => e + 100);
            },
            [s, c.length],
        );
    return (0, r.jsx)(le.Ch, {
        onScroll: u,
        children: (0, r.jsxs)("div", {
            className: lp.KE,
            children: [
                (0, r.jsxs)(m.n, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, r.jsxs)(I.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, lt.Ab)(),
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, lx.nT)(),
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, lx.D1)(),
                                }),
                                (0, r.jsx)(A.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: `Daily Cap Reached: ${e ? "Yes" : "No"}`,
                                }),
                            ],
                        }),
                        (0, r.jsx)(j.d, {
                            label: "Override Dismissible Content Daily Cap",
                            checked: t,
                            onChange: lt.SE,
                        }),
                        (0, r.jsx)(j.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: lt.U$,
                        }),
                    ],
                }),
                (0, r.jsx)(lh, {}),
                (0, r.jsx)(lm, {}),
                (0, r.jsxs)(m.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(na.I, { query: n, onChange: l, onClear: () => l("") }),
                        (0, r.jsx)(lu, { items: c.slice(0, s) }),
                    ],
                }),
            ],
        }),
    });
}
var lv = a(276086),
    lj = a(154323),
    lb = a(155248);
function lf() {
    let e = (0, d.bG)([lj.A], () => lj.A.allWithDescriptions(), [], d.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, n] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                j.d,
                                { label: n, description: t, checked: a, onChange: (e) => (0, lv.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(v.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: lb.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: lb.x6,
                children: (0, r.jsx)(x.$, { variant: "primary", text: "Clear all", onClick: lv.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: lb.vu, children: t }),
        ],
    });
}
var ly = a(691540),
    l_ = a(97483),
    lC = a(123292),
    lE = a(780907),
    lS = a(56562);
let lN = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
];
function lA(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: n } = (0, t0.I)(t.id);
    return (0, r.jsxs)(I.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != n && (0, r.jsx)(tX.A, { game: n }),
            (0, r.jsxs)(I.B, {
                justify: "center",
                gap: 0,
                children: [
                    (0, r.jsx)(A.E, { variant: "text-md/normal", children: n?.name }),
                    a && (0, r.jsx)(A.E, { variant: "text-xxs/normal", children: "Debug" }),
                ],
            }),
        ],
    });
}
function lk() {
    let e = (0, d.bG)([aG.Ay], () => aG.Ay.getRunningGames()),
        t = (0, d.bG)([aG.Ay], () => aG.Ay.getDebugRunningGame()),
        [a, n] = (0, o.useState)(t?.id ?? ""),
        l = (0, o.useMemo)(
            () =>
                lN.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        ),
        s = (e) => {
            if (null == e || "" === e) return void (0, lE.xt)(null);
            let t = tT.A.getDetectableGame(e),
                a = t?.executables[0],
                n = t?.thirdPartySkus[0]?.distributor;
            if (null == t || null == a)
                return (0, ly.P0)({
                    id: "devtools-set-debug-game-error",
                    type: l_.Ck.FAILURE,
                    message: "Invalid Game ID",
                });
            (0, lE.xt)({
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
                fullscreenType: lS.aI.UNKNOWN,
                cmdLine: "",
                nativeProcessObserverId: -1,
            });
        };
    return (0, r.jsxs)(I.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(I.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(T.D, { variant: "heading-md/bold", children: "Running Games" }),
                    e.length > 0 &&
                        (0, r.jsx)("div", {
                            children: e.map((e) =>
                                (0, r.jsx)(lA, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, r.jsx)(v.c, {}),
            (0, r.jsxs)(I.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(T.D, { variant: "heading-md/bold", children: "Set Debug Running Game" }),
                    (0, r.jsx)(g.k, { label: "Custom Game ID", value: a, onChange: n }),
                    (0, r.jsx)(tQ.Z, {
                        label: "Pick a Preset Game",
                        options: l,
                        value: t?.id ?? "",
                        onSelectionChange: (e) => {
                            s(e);
                        },
                        selectionMode: "single",
                        clearable: !0,
                    }),
                    (0, r.jsxs)(I.B, {
                        direction: "horizontal",
                        gap: 16,
                        justify: "end",
                        align: "end",
                        children: [
                            null != t &&
                                (0, r.jsx)(lC.Q, { variant: "secondary", text: "Clear", onClick: () => s(null) }),
                            (0, r.jsx)(x.$, { variant: "primary", text: "Detect Game", onClick: () => s(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lI = a(240248),
    lD = a(769195);
function lT() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            try {
                t(!0), n(null), s(null);
                let e = await nF.Bo.put({
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
    return (0, r.jsxs)(I.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(x.$, { variant: "primary", onClick: i, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, lI.uJ)(a) && (0, r.jsx)(A.E, { variant: "text-md/normal", color: "status-positive", children: a }),
            !(0, lI.uJ)(l) && (0, r.jsx)(A.E, { variant: "text-md/normal", color: "status-danger", children: l }),
        ],
    });
}
function lO() {
    return (0, r.jsx)("div", {
        className: lD.n,
        children: (0, r.jsx)(I.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(lT, {}) }),
    });
}
a(172879);
var lR = a(985623),
    lw = a.n(lR),
    lM = a(990078),
    lL = a(874804),
    lP = a(782134),
    lU = a(113494),
    lG = a(603349),
    lB = a(155466);
function lF(e) {
    return parseFloat(e.toFixed(3));
}
let lV = [
    {
        key: "store",
        cellClassName: lB.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: lB.i7,
        render(e) {
            let { trace: t } = e;
            return `${lF(t.time)} ms`;
        },
    },
];
function l$(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(c.Ip, { children: (0, r.jsx)(tk, { columns: lV, data: a }) });
}
let lW = [
    {
        id: "action",
        name: "Action",
        group: aR.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = a5()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(nj, {
                        className: lB.mP,
                        children: [
                            (0, r.jsx)(nb, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, nr.i$)(a, "LLLL"),
                                    children: (0, nr.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(nb, { name: "Total Time", children: [lF(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(c.Ip, { className: lB.Dx, children: (0, r.jsx)(ak, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: aR.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsx)(l$, { actionLog: t });
        },
    },
];
function lz(e) {
    let { actionLog: t, initialHeight: a } = e,
        n = o.useMemo(
            () =>
                t.error
                    ? [
                          ...lW,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(lG.A, { className: lB.ik }), "Error"],
                              }),
                              group: aR.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: S()(lB.u4, tA.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: tA.R5,
                                                  children: (0, r.jsx)(a9.$n, {
                                                      className: tA.Q$,
                                                      size: a9.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(c.Ip, {
                                              className: lB.Dx,
                                              children: (0, r.jsx)(ak, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : lW,
            [t],
        ),
        { TabBar: l, renderSelectedTab: s } = (0, aR.Ay)({ tabs: n }, [n]);
    return (0, r.jsxs)(aO, {
        className: lB.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(af.Ay, {
                className: S()(tA.jr, lB.nZ),
                children: [
                    (0, r.jsx)(af.Ay.Icon, { icon: lL.K, tooltip: t.name }),
                    (0, r.jsx)(af.Ay.Title, {
                        wrapperClassName: S()(tA.qd, tA.ZE),
                        className: tA.Pz,
                        children: t.name,
                    }),
                    (0, r.jsx)(af.Ay.Icon, {
                        icon: a4.T,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var n;
                                    return (t[a] = ((n = e[a]), H.AKn.test(n) ? "REDACTED" : n)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, ni.C)(a, () =>
                                (0, ly.P0)({
                                    id: "copy-action-log-name",
                                    type: l_.Ck.SUCCESS,
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
let lH = [
        {
            key: "action",
            cellClassName: lB.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(lG.A, { className: lB.ik }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: lB.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${lF(t.totalTime)} ms`;
            },
        },
        {
            key: "timestamp",
            cellClassName: lB.i7,
            render(e) {
                let { actionLog: t } = e;
                return a5()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    lK = {
        searchType: nl.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function lY() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = lw()(() => {
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
        })(tC.h.actionLogger),
        l = o.useMemo(() => n.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [n]),
        [s, i] = o.useState(l),
        [d, c] = o.useState(l),
        [u, m] = o.useState(!1),
        [h, x] = o.useState(),
        p = o.useCallback((e) => {
            c(e);
        }, []);
    (0, ns.RT)(t, u ? s : l, p, lK);
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
        className: S()(tA.nd, lB.nd),
        children: [
            (0, r.jsxs)("div", {
                className: lB.KE,
                children: [
                    (0, r.jsx)(lM.m, {
                        text: b,
                        children: (0, r.jsx)(eS.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? lP.u : lU.E,
                            "aria-label": b,
                            onClick: () => g(!u),
                        }),
                    }),
                    (0, r.jsx)(na.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(tk, {
                columns: lH,
                data: j,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => x(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(lz, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var lq = a(936388),
    lJ = a(132369);
function lQ() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: S()(tA.nd, lJ.n),
        children: (0, r.jsx)(x.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: lq.A.clearUploadedKeyVersions,
        }),
    });
}
var lX = a(825484),
    lZ = a(37962),
    l0 = a(881520),
    l1 = a(670455),
    l2 = a(861160);
let l8 = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function l3() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(0),
        [l, s] = o.useState(1e3),
        [i, c] = o.useState(0),
        u = (0, d.bG)([l0.A], () => (null === e ? null : (l0.A.getFeedbackConfig(l1.MW[e]) ?? lZ.u[l1.MW[e]]))),
        h = Object.entries(l1.MW),
        j = h.slice(h.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        b = o.useMemo(() => null != e && i >= 0 && i <= 100 && a >= 0, [e, i, a]);
    return (0, r.jsx)("div", {
        className: l2.kL,
        children: (0, r.jsxs)(I.B, {
            gap: 32,
            children: [
                (0, r.jsx)(p.l, {
                    label: "Feedback Survey",
                    options: j,
                    value: e,
                    onSelectionChange: t,
                    placeholder: "Select Feedback Survey",
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsxs)(m.n, {
                    label: "Override Survey Cooldown",
                    children: [
                        null != u &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(A.E, { variant: "text-sm/semibold", children: "Current cooldown" }),
                                    (0, r.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        children: `${u.cooldown / 1e3} second(s) or`,
                                    }),
                                    (0, r.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        children: `${u.cooldown / 6e4} minute(s) or`,
                                    }),
                                    (0, r.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        children: `${u.cooldown / 36e5} hour(s) or`,
                                    }),
                                    (0, r.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        children: `${u.cooldown / 864e5} day(s)`,
                                    }),
                                ],
                            }),
                        (0, r.jsxs)(I.B, {
                            direction: "horizontal",
                            align: "end",
                            children: [
                                (0, r.jsx)(g.k, {
                                    label: "Override cooldown",
                                    min: 0,
                                    value: a.toString(),
                                    type: "number",
                                    placeholder: "Duration length",
                                    onChange: (e) => n(parseFloat(e)),
                                }),
                                (0, r.jsx)(p.l, {
                                    label: "Override cooldown duration type",
                                    hideLabel: !0,
                                    options: l8,
                                    value: l,
                                    onSelectionChange: s,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(v.c, {}),
                (0, r.jsx)(m.n, {
                    label: "Override Survey Chance",
                    children: (0, r.jsx)(g.k, {
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
                (0, r.jsxs)(lX.e, {
                    children: [
                        (0, r.jsx)(x.$, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != u &&
                                    tC.h.dispatch({ type: "FEEDBACK_OVERRIDE_CLEAR", feedbackType: u.feedbackType })
                                ),
                            disabled: !b,
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != u &&
                                    tC.h.dispatch({
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
                    (0, r.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: need to select a survey",
                    }),
                !(a >= 0) &&
                    (0, r.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: cooldown needs to be a number greater than 0",
                    }),
                !(i >= 0 && i <= 100) &&
                    (0, r.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: chance needs to be a number between 0 and 100",
                    }),
                (0, r.jsx)(A.E, {
                    variant: "text-sm/normal",
                    children: "Clear override resets a feedback survey to its default values",
                }),
            ],
        }),
    });
}
var l6 = a(334279),
    l5 = a(663417),
    l9 = a(147925),
    l4 = a(557009),
    l7 = a(788868);
let se = async () =>
        (
            await nF.Bo.get({
                url: H.Rsh.ENTITLEMENTS_FOR_APPLICATION(l7.tv),
                oldFormErrors: !0,
                query: { exclude_consumed: !0, exclude_ended: !0 },
                rejectWithError: !0,
            })
        ).body.map((e) => l4.A.createFromServer(e)),
    st = async (e) => {
        await nF.Bo.post({
            url: "/debug/entitlements/fractional-premium",
            body: { count: 1, sku_id: e },
            rejectWithError: !1,
        });
    },
    sa = async (e) => {
        let t = "/debug/entitlements/fractional-premium";
        null != e && (t = `${t}/${e}`), await nF.Bo.del({ url: t, rejectWithError: !0 });
    },
    sn = async () => {
        await nF.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
    },
    sl = () => {
        let [e, t] = o.useState([]),
            [a, n] = o.useState(!1),
            l = (0, o.useCallback)(async () => {
                try {
                    n(!0);
                    let e = await se();
                    t(e);
                } finally {
                    n(!1);
                }
            }, []),
            s = (0, o.useCallback)(
                async (e) => {
                    await st(e), await l();
                },
                [l],
            );
        return {
            grantFractionalPremium: s,
            deleteFractionalPremium: (0, o.useCallback)(
                async (e) => {
                    await sa(e), await l();
                },
                [l],
            ),
            triggerNextEntitlementFulfillment: (0, o.useCallback)(async () => {
                await sn(), await l();
            }, [l]),
            refreshEntitlementList: l,
            entitlements: e,
            loading: a,
        };
    };
var ss = a(51846),
    si = a(214868);
let sr = {
        [H.GD.QUEST_REWARD]: "Quest Reward",
        [H.GD.DEVELOPER_GIFT]: "Developer Gift",
        [H.GD.INVOICE]: "Invoice",
        [H.GD.REVERSE_TRIAL]: "Reverse Trial",
        [H.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
        [H.GD.SUBSCRIPTION]: "Subscription",
        [H.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
    },
    so = (e) => {
        let t,
            { entitlement: a, active: n, onDelete: l } = e,
            s = (e) => (null != e ? (0, nr.i$)(e, "LLL") : "---");
        return (0, r.jsxs)("div", {
            className: S()(ss.Nr, n ? si.C1 : ""),
            children: [
                (0, r.jsxs)(A.E, { variant: "text-md/normal", children: ["ID: ", a.id, " "] }),
                !n &&
                    (0, r.jsxs)(A.E, {
                        variant: "text-md/normal",
                        children: ["SKU: ", sd.find((e) => e.value === a.skuId)?.label],
                    }),
                null != a.startsAt &&
                    null != a.endsAt &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(A.E, { variant: "text-md/normal", children: ["Start: ", s(a.startsAt), " "] }),
                            (0, r.jsxs)(A.E, { variant: "text-md/normal", children: ["End: ", s(a.endsAt), " "] }),
                        ],
                    }),
                (0, r.jsxs)(A.E, {
                    variant: "text-md/normal",
                    children: [
                        "Entitlement source type: ",
                        null != (t = a.sourceType) && t in sr ? sr[t] : `Unknown source type ${t}`,
                    ],
                }),
                n &&
                    null != l &&
                    (0, r.jsx)(a9.$n, {
                        className: ss.RW,
                        size: a9.$n.Sizes.TINY,
                        color: a9.$n.Colors.RED,
                        look: a9.$n.Looks.OUTLINED,
                        onClick: l,
                        children: "Delete",
                    }),
            ],
        });
    },
    sd = [
        { id: "1h", label: "1 hour", value: l6.j.PREMIUM_TIER_2_1_HOUR },
        { id: "1d", label: "1 day", value: l6.j.PREMIUM_TIER_2_1_DAY },
        { id: "3d", label: "3 days", value: l6.j.PREMIUM_TIER_2_3_DAY },
    ];
function sc() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(l6.j.PREMIUM_TIER_2_1_HOUR),
        [l, s] = o.useState([]),
        [i, d] = o.useState([]),
        {
            refreshEntitlementList: u,
            grantFractionalPremium: m,
            deleteFractionalPremium: h,
            triggerNextEntitlementFulfillment: g,
            entitlements: v,
            loading: j,
        } = sl();
    return (
        o.useEffect(() => {
            u();
        }, [u]),
        o.useEffect(() => {
            s(v.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === H.zF_.FRACTIONAL_REDEMPTION)),
                d(v.filter((e) => Object.values(l6.j).includes(e.skuId) && null == e.startsAt));
        }, [v]),
        (0, r.jsx)(c.Ip, {
            className: tA.nd,
            children: (0, r.jsxs)("div", {
                className: si.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: si.dL,
                        children: [
                            (0, r.jsx)(A.E, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, r.jsxs)(N.D, {
                                onClick: () => t(!e),
                                className: ss.As,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Info" }),
                                    }),
                                    (0, r.jsx)(l9.A, { direction: e ? l9.A.Directions.UP : l9.A.Directions.DOWN }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        (0, r.jsxs)("div", {
                            style: { margin: "8px 0" },
                            children: [
                                (0, r.jsx)(A.E, {
                                    variant: "text-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.",
                                }),
                                (0, r.jsx)("br", {}),
                                (0, r.jsx)(A.E, {
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
                        className: S()([ss.uW, si.Uo]),
                        children: [
                            (0, r.jsx)(p.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: sd,
                                onSelectionChange: n,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Grant Fractional Nitro",
                                onClick: () => m(a),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("section", {
                        className: ss.uW,
                        children: [
                            (0, r.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: si.dL,
                                children: [
                                    (0, r.jsx)(A.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: ss.GC,
                                        children: [
                                            (0, r.jsx)(a9.$n, {
                                                disabled: j,
                                                size: a9.$n.Sizes.TINY,
                                                color: a9.$n.Colors.PRIMARY,
                                                look: a9.$n.Looks.OUTLINED,
                                                onClick: () => g(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(a9.$n, {
                                                disabled: j,
                                                size: a9.$n.Sizes.TINY,
                                                color: a9.$n.Colors.RED,
                                                look: a9.$n.Looks.OUTLINED,
                                                onClick: () => h(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(a9.$n, {
                                                disabled: j,
                                                look: a9.$n.Looks.BLANK,
                                                size: a9.$n.Sizes.ICON,
                                                onClick: u,
                                                children: (0, r.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, r.jsx)(l5.f, { size: "xs", color: "currentColor" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            l.length > 0 &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(A.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Active premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: l.map((e) =>
                                                (0, r.jsx)(
                                                    so,
                                                    { entitlement: e, active: !0, onDelete: () => h(e.id) },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                            i.length > 0 &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(A.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: i.map((e) => (0, r.jsx)(so, { entitlement: e }, e.id)),
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
var su = a(390544),
    sm = a(396748),
    sh = a(522055),
    sx = a(661202);
function sp() {
    let e = (0, d.bG)([aW.A], () => aW.A.getGuildId()),
        t = (0, d.bG)([a$.A], () => a$.A.getGuild(e)?.name),
        a = (0, d.bG)([sh.A], () => sh.A.getStateForGuild(e)?.instances),
        n = o.useMemo(() => Object.values(a ?? {})[0], [a]),
        l = o.useCallback(
            (t) => {
                null != n &&
                    null != e &&
                    tC.h.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: { ...n, status: t },
                    });
            },
            [n, e],
        ),
        s = o.useMemo(
            () =>
                Object.values(su.M).map((e) =>
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
                tC.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...n, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [n, e]);
    return null == e
        ? null
        : (0, r.jsxs)(c.Ip, {
              className: sx.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: sx.uW,
                      children: (0, r.jsx)(T.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: sx.uW,
                      children: [
                          (0, r.jsx)(A.E, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${n?.name}`,
                          }),
                          (0, r.jsx)("div", { className: sx.UD, children: s }),
                          (0, r.jsx)(A.E, { variant: "eyebrow", children: "Remove Server Info" }),
                          (0, r.jsx)("div", {
                              className: sx.UD,
                              children: (0, r.jsx)(x.$, {
                                  variant: "primary",
                                  text: "Remove IP Address & Game Server Panel URL",
                                  onClick: i,
                              }),
                          }),
                          (0, r.jsx)(A.E, { variant: "eyebrow", children: "Reset server" }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              text: "Reset",
                              onClick: () => {
                                  (0, sm.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
function sg(e, t) {
    let a = "boolean" == typeof t ? t : !ab.Ay.get(e);
    tC.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var sv = a(460281);
function sj(e) {
    let { devSettingsCategory: t } = e,
        a = (0, d.bG)([ab.Ay], () => ab.Ay.allByCategory(t), [t], d.My),
        n = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: n }] = e;
                    return (0, r.jsx)(j.d, { label: n, description: t, checked: a, onChange: (e) => sg(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: S()(tA.nd, sv.n), children: n });
}
var sb = a(950305),
    sf = a(231483),
    sy = a(597770),
    s_ = a(433492),
    sC = a(695458),
    sE = a(796140),
    sS = a(268791),
    sN = a(836480),
    sA = a(855473),
    sk = a(626258),
    sI = a(420854),
    sD = a(373846),
    sT = a(657044),
    sO = a(141060),
    sR = a(608599),
    sw = a(685761),
    sM = a(157225),
    sL = a(362704),
    sP = a(625903),
    sU = a(628284),
    sG = a(320448),
    sB = a(562708),
    sF = a(830215),
    sV = a(381689),
    s$ = a(889227),
    sW = a(499785),
    sz = a(315069);
class sH extends sz.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids);
    }
    static fromServer(e) {
        return new sH(e);
    }
    setPassword(e) {
        return (this.password = e), this;
    }
}
let sK = { pools: null, users: null };
function sY(e) {
    null == sK.users && (sK.users = new Map()), sK.users.set(e.id, new s$.A(e));
}
class sq extends d.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (sK.pools = new Map(Object.entries(e.pools))),
            null != e.users && (sK.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != sK.pools ? Object.fromEntries(sK.pools) : null,
            users: null != sK.users ? Object.fromEntries(sK.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(sK.users?.values() ?? []).filter((t) => sK.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return sK.pools?.get(e) ?? null;
    }
    getUser(e) {
        return sK.users?.get(e) ?? null;
    }
    getPools() {
        return null === sK.pools ? null : Array.from(sK.pools.values());
    }
}
let sJ = new sq(tC.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        null == sK.pools && (sK.pools = new Map()), sK.pools.set(t.id, t), a.forEach(sY);
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = sK.pools?.get(t);
        if (null == a) return !1;
        a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                sK.users?.delete(e);
            }),
            sK.pools?.delete(t);
    },
});
var sQ = a(835002);
async function sX(e, t) {
    return await sW.A.get({
        url: H.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: sB.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: a, body: n } = e;
            if (!a) return void sV.A.showFailedToast(sQ.OB.GENERIC_ERROR);
            let { generated_pool: l, users: s } = n;
            tC.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: sH.fromServer(l).setPassword(t),
                users: s.map((e) => new s$.A(e)),
            });
        })
        .catch(() => (sV.A.showFailedToast(sQ.OB.GENERIC_ERROR), null));
}
var sZ = a(844330),
    s0 = a(277851);
let s1 = [
        sb.n,
        sf.l,
        sy.o,
        s_.K,
        sC.m,
        sE.c,
        sS.$,
        sN.Q,
        sA.Z,
        sk.A,
        sI.E,
        sD.C,
        sT._,
        sO.i,
        sR.L,
        sw.f,
        sM.N,
        sL.Y,
        sP.Z,
    ],
    s2 = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ],
    s8 = () => {
        let [e, t] = o.useState(""),
            [a, n] = o.useState(""),
            [l, s] = o.useState(!1);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("form", {
                    onSubmit: async (l) => {
                        l.preventDefault(), s(!0);
                        try {
                            await sX(e, a), t(""), n("");
                        } finally {
                            s(!1);
                        }
                    },
                    children: (0, r.jsxs)(I.B, {
                        direction: "vertical",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, r.jsxs)(I.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    (0, r.jsx)(g.k, {
                                        fullWidth: !0,
                                        value: e,
                                        onChange: t,
                                        placeholder: "Pool ID",
                                        disabled: l,
                                    }),
                                    (0, r.jsx)(g.k, {
                                        type: "password",
                                        fullWidth: !0,
                                        value: a,
                                        onChange: n,
                                        placeholder: "Password",
                                        disabled: l,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(I.B, {
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
                (0, r.jsx)(v.c, { gap: 4 }),
            ],
        });
    },
    s3 = (e) => {
        let { pool: t } = e,
            { id: a, summary: n } = t,
            l = sJ.getUsersForPool(a),
            s = (0, d.bG)([nd.default], () => nd.default.getId()),
            i = s1[Number(a) % s1.length],
            c = s2[Number(a) % s2.length],
            u = o.useCallback(() => {
                tC.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
            }, [a]);
        return (0, r.jsx)(I.B, {
            direction: "horizontal",
            align: "start",
            justify: "space-between",
            children: (0, r.jsx)(sZ.A, {
                icon: (0, r.jsx)(A.E, {
                    variant: "text-md/medium",
                    color: c,
                    className: s0.td,
                    children: (0, r.jsx)(i, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
                title: n,
                className: s0.JC,
                subtitle: `${l.length} users`,
                children: (0, r.jsxs)(I.B, {
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
                                        0 !== a && (0, r.jsx)(v.c, { gap: 4 }),
                                        (0, r.jsx)(
                                            N.D,
                                            {
                                                onClick: (a) => {
                                                    a.stopPropagation(),
                                                        (function (e, t) {
                                                            let a = sJ.getUser(t);
                                                            if (null == a) throw Error("User not found");
                                                            let n = sJ.getPool(e)?.password;
                                                            if (null == n) throw Error("Pool password not found");
                                                            if (null == a.email) throw Error("User email not found");
                                                            sF.A.login({
                                                                login: a.email,
                                                                password: n,
                                                                isMultiAccount: !0,
                                                                source: "generated_test_user",
                                                            }).catch(
                                                                () => (sV.A.showFailedToast(sQ.OB.GENERIC_ERROR), null),
                                                            );
                                                        })(t.id, e.id);
                                                },
                                                "aria-disabled": s === e.id,
                                                className: S()(s0.vk, { [s0.Pe]: s === e.id }),
                                                children: (0, r.jsxs)(
                                                    I.B,
                                                    {
                                                        direction: "horizontal",
                                                        align: "center",
                                                        justify: "space-between",
                                                        gap: 8,
                                                        padding: { right: 8 },
                                                        fullWidth: !1,
                                                        children: [
                                                            (0, r.jsxs)(I.B, {
                                                                direction: "horizontal",
                                                                align: "center",
                                                                gap: 8,
                                                                fullWidth: !1,
                                                                className: S()({ [s0.WP]: s === e.id }),
                                                                children: [
                                                                    (0, r.jsx)(sb.n, {
                                                                        size: "custom",
                                                                        width: 20,
                                                                        height: 20,
                                                                        color: "currentColor",
                                                                    }),
                                                                    (0, r.jsxs)("div", {
                                                                        children: [
                                                                            (0, r.jsx)(A.E, {
                                                                                variant: "text-sm/normal",
                                                                                color: "text-default",
                                                                                children: e.username,
                                                                            }),
                                                                            (0, r.jsx)(A.E, {
                                                                                variant: "text-xs/normal",
                                                                                color: "text-muted",
                                                                                className: s0.c1,
                                                                                children: e.email,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            s === e.id
                                                                ? (0, r.jsx)(A.E, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-feedback-positive",
                                                                      children: (0, r.jsx)(sU.y, {
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                                  })
                                                                : (0, r.jsx)(sG._, {
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
                            className: s0.UD,
                            children: (0, r.jsx)(x.$, {
                                icon: nt.u,
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
    };
function s6() {
    let e = (0, d.yK)([sJ], () => sJ.getPools() ?? []);
    return (0, r.jsxs)(I.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: s0.kL,
        children: [
            (0, r.jsx)(s8, {}),
            (0, r.jsx)(c.Ip, { className: s0.Ik, children: e?.map((e) => (0, r.jsx)(s3, { pool: e }, e.id)) }),
        ],
    });
}
var s5 = a(582306),
    s9 = a(528153),
    s4 = a(275759),
    s7 = a(888429);
function ie(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function it() {
    let e = (0, d.bG)([s4.Ay], () => s4.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, d.bG)([s4.Ay], () => s4.Ay.getDevToolCurrentDate()),
        a = (0, d.bG)([s4.Ay], () => s4.Ay.getGiftUnreadNotificationLastDismissedTimes()),
        n = (0, d.bG)([s4.Ay], () => s4.Ay.getMessageGiftIntentLastShownMap()),
        l = (0, d.bG)([s4.Ay], () => s4.Ay.getHighestAffinityFriendAnniversaries()),
        s = (0, d.bG)([s4.Ay], () => s4.Ay.getHighAffinityFriendAnniversaries()),
        i = (0, d.bG)([s4.Ay], () => s4.Ay.getProfilePopoutGiftIntentsDismissMap()),
        o = (0, d.bG)([lr.A], () => {
            let e =
                lr.A.settings.userContent?.recurringDismissibleContentStates[n2.M.GIFT_INTENT_MESSAGE]
                    ?.lastDismissedAtMs;
            if (null == e || "0" === e) return null;
            let t = Number(e);
            return Number.isNaN(t) ? null : t;
        }),
        u = (e) => {
            tC.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
        },
        m = (e) => {
            let t = aQ.A.getUserAffinity(e);
            return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
        };
    return (0, r.jsx)(c.Ip, {
        className: tA.nd,
        children: (0, r.jsxs)("div", {
            className: s7.l$,
            children: [
                (0, r.jsx)(A.E, { className: s7.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, r.jsx)("div", {
                    className: s7.Pm,
                    children: (0, r.jsxs)(I.B, {
                        gap: 8,
                        direction: "horizontal",
                        style: { flex: 1 },
                        children: [
                            (0, r.jsx)(p.l, {
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
                                    u(e);
                                },
                            }),
                            (0, r.jsx)(x.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Clear",
                                onClick: () => {
                                    u(null);
                                },
                            }),
                        ],
                    }),
                }),
                null != e &&
                    (0, r.jsx)("div", {
                        className: s7.Pm,
                        children: (0, r.jsxs)(I.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(A.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "Affinity is the percent chance that User A will DM or GDM User B in the next 7 days.",
                                }),
                                (0, r.jsx)(A.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "The devtool automatically assigns users as high affinity regardless of actual affinity for testing.",
                                }),
                                l.length > 0 &&
                                    (0, r.jsxs)(I.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(A.E, {
                                                variant: "text-xs/semibold",
                                                children:
                                                    "Highest Affinity Friend Anniversaries (Eligible for Notification):",
                                            }),
                                            l.map((e) => {
                                                let t = V.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    A.E,
                                                    { variant: "text-xs/normal", children: [a, " (", m(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                                s.length > 0 &&
                                    (0, r.jsxs)(I.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(A.E, {
                                                variant: "text-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            s.map((e) => {
                                                let t = V.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    A.E,
                                                    { variant: "text-xs/normal", children: [a, " (", m(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                (0, r.jsx)("div", {
                    className: s7.Pm,
                    children: (0, r.jsxs)(I.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(s5.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? a5()(t) : void 0,
                                onSelect: (e) => {
                                    let t = a5()(),
                                        a = e
                                            .clone()
                                            .hours(t.hours())
                                            .minutes(t.minutes())
                                            .seconds(t.seconds())
                                            .milliseconds(t.milliseconds());
                                    tC.h.dispatch({ type: "DEV_TOOLS_SET_CURRENT_DATE", date: a.valueOf() });
                                },
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Clear",
                                onClick: () => {
                                    tC.h.dispatch({ type: "DEV_TOOLS_RESET_CURRENT_DATE" });
                                },
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: s7.Pm,
                    children: (0, r.jsxs)(I.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(I.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(A.E, {
                                        variant: "text-md/normal",
                                        children: "Reset DCF gift intent cooldown (global, 24h)",
                                    }),
                                    (0, r.jsx)(x.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            (0, lx._N)(n2.M.GIFT_INTENT_MESSAGE);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsx)(A.E, {
                                variant: "text-xs/normal",
                                children: null != o ? `Dismissed at: ${ie(o)}` : "Not dismissed",
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: s7.Pm,
                    children: (0, r.jsxs)(I.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(I.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(A.E, {
                                        variant: "text-md/normal",
                                        children: "Reset gift message cooldown (per-user, 14d)",
                                    }),
                                    (0, r.jsx)(x.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            tC.h.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(n).length > 0 &&
                                (0, r.jsxs)(I.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(A.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift Message Intent Last Shown:",
                                        }),
                                        Object.entries(n).map((e) => {
                                            let [t, a] = e,
                                                n = V.default.getUser(t),
                                                l = n?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                A.E,
                                                { variant: "text-xs/normal", children: [l, ": ", ie(a)] },
                                                t,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: s7.Pm,
                    children: (0, r.jsxs)(I.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(I.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(A.E, {
                                        variant: "text-md/normal",
                                        children: "Reset gift notification cooldown",
                                    }),
                                    (0, r.jsx)(x.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            tC.h.dispatch({
                                                type: "DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            a.length > 0 &&
                                (0, r.jsxs)(I.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(A.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift notification shown timestamps:",
                                        }),
                                        a.map((e, t) =>
                                            (0, r.jsx)(A.E, { variant: "text-xs/normal", children: ie(e) }, t),
                                        ),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: s7.Pm,
                    children: [
                        (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Send gift notification" }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Send",
                            onClick: () => {
                                s9.A.sendGiftingNotificationIfEligible();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: s7.Pm,
                    children: [
                        (0, r.jsx)(A.E, {
                            variant: "text-md/normal",
                            children: "Clear last seen friend anniversaries in All Friends",
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Clear",
                            onClick: () => {
                                tC.h.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: s7.Pm,
                    children: (0, r.jsxs)(I.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(I.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(A.E, {
                                        variant: "text-md/normal",
                                        children: "Reset profile popout gift intents dismiss",
                                    }),
                                    (0, r.jsx)(x.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            tC.h.dispatch({
                                                type: "DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(i).length > 0 &&
                                (0, r.jsxs)(I.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(A.E, {
                                            variant: "text-xs/semibold",
                                            children: "Profile Popout Gift Intents Dismissed:",
                                        }),
                                        Object.entries(i).map((e) => {
                                            let [t, a] = e,
                                                n = V.default.getUser(t),
                                                l = n?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                A.E,
                                                { variant: "text-xs/normal", children: [l, ": ", ie(a)] },
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
var ia = a(460890),
    il = a(349288),
    is = a(517461),
    ii = a(214947),
    ir = a(403581),
    io = a(34188);
let id = [
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
var ic = a(545406);
let iu = [0, 0.5, 1],
    im = ["Center", "Inner ring", "Outer ring"],
    ih = iu.length,
    ix = "ILLO_BLUE",
    ip = "ILLO_BLUE_40",
    ig = Array.from({ length: ih }, () => ip),
    iv = Array.from({ length: ih }, () => ix),
    ij = ["1", "0.5", "0"],
    ib = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    iy = [
        { label: "Light", value: H.NJ8.LIGHT, id: H.NJ8.LIGHT },
        { label: "Dark", value: H.NJ8.DARK, id: H.NJ8.DARK },
        { label: "Darker", value: H.NJ8.DARKER, id: H.NJ8.DARKER },
        { label: "Midnight", value: H.NJ8.MIDNIGHT, id: H.NJ8.MIDNIGHT },
    ],
    i_ = { [H.NJ8.MIDNIGHT]: H.NJ8.DARKER, [H.NJ8.DARKER]: H.NJ8.DARK, [H.NJ8.LIGHT]: H.NJ8.DARK },
    iC = { [H.NJ8.LIGHT]: "light", [H.NJ8.DARK]: "ash", [H.NJ8.DARKER]: "dark", [H.NJ8.MIDNIGHT]: "onyx" },
    iE = [
        { id: "friends", icon: ii.$, text: "Friends" },
        { id: "nitro", icon: ir.t, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: io.U, text: "Shop", useCustomGradient: !0 },
    ],
    iS = id.map((e) => ({ label: e, value: e, id: e })),
    iN = Object.fromEntries(
        id.map((e) => [
            e,
            Object.keys(eI.A.unsafe_rawColors)
                .filter((t) => String(t).startsWith(e + "_"))
                .sort(
                    (e, t) =>
                        parseInt(String(e).split("_").pop() ?? "0", 10) -
                        parseInt(String(t).split("_").pop() ?? "0", 10),
                )
                .map((e) => {
                    let t = String(e).split("_").pop() ?? e,
                        [a, n, l] = eI.A.unsafe_rawColors[e].resolve().rgba(),
                        s =
                            (0.299 * a + 0.587 * n + 0.114 * l) / 255 > 0.5
                                ? eI.A.unsafe_rawColors.OPACITY_BLACK_28
                                : eI.A.unsafe_rawColors.OPACITY_WHITE_28,
                        i = (0, r.jsx)("span", {
                            className: ic.oP,
                            style: { background: `rgb(${a}, ${n}, ${l})`, border: `1px solid ${s.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: i };
                }),
        ]),
    );
var iA = a(306327);
function ik(e, t, a) {
    return e.map((e, n) => (n === t ? a : e));
}
function iI(e, t) {
    let [a, n, l, s] = eI.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: n, b: l, a: s };
}
function iD(e, t) {
    let a = eI.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function iT(e) {
    let { yaml: t, label: a } = e,
        n = o.useCallback(() => {
            navigator.clipboard.writeText(t);
        }, [t]);
    return (0, r.jsxs)(I.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(I.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                justify: "space-between",
                children: [
                    (0, r.jsx)(A.E, { variant: "text-md/semibold", children: a }),
                    (0, r.jsx)(eS.K, {
                        icon: a4.T,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: n,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: ic.RP, children: t }),
        ],
    });
}
function iO(e) {
    let { allResolvedStops: t } = e,
        a = o.useMemo(
            () =>
                im.map((e, a) => {
                    let n;
                    return (
                        (n = iy
                            .map((e) => {
                                let n,
                                    l,
                                    { value: s } = e,
                                    i = iC[s],
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
    return (0, r.jsxs)(I.B, {
        gap: 16,
        children: [
            (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Token YAML" }),
            im.map((e, t) => (0, r.jsx)(iT, { yaml: a[t], label: e }, e)),
        ],
    });
}
function iR(e, t, a) {
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
    return new iA.A("srgb", [
        (e.r * (1 - r) + n * r) / 255,
        (e.g * (1 - r) + l * r) / 255,
        (e.b * (1 - r) + s * r) / 255,
    ]);
}
function iw(e, t, a) {
    let n = a.map((e) => {
            let [t, a, n] = eI.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: n, opacity: e.opacity, position: e.position };
        }),
        l = 1 / 0,
        s = (e) => {
            e < l && (l = e);
        };
    for (let a of n) s(e.contrast(iR(t, n, a.position), "WCAG21"));
    for (let a = 0; a < n.length - 1; a++) {
        let { contrast: l } = (function (e, t, a, n, l) {
            let s = 1 / 0,
                i = n;
            for (let r = 0; r <= 100; r++) {
                let o = n + (r / 100) * (l - n),
                    d = a.contrast(iR(e, t, o), "WCAG21");
                d < s && ((s = d), (i = o));
            }
            return { contrast: s, position: i };
        })(t, n, e, n[a].position, n[a + 1].position);
        s(l);
    }
    return Math.round(100 * l) / 100;
}
function iM(e) {
    let [t, a, n] = eI.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [l, s, i] = eI.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = eI.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new iA.A("srgb", [t / 255, a / 255, n / 255]),
        background: { r: l * (1 - c) + r * c, g: s * (1 - c) + o * c, b: i * (1 - c) + d * c },
    };
}
function iL() {
    return {
        colors: Array.from({ length: ih }, () => void 0),
        scales: Array.from({ length: ih }, () => void 0),
        opacities: Array.from({ length: ih }, () => void 0),
    };
}
function iP() {
    return {
        [H.NJ8.LIGHT]: iL(),
        [H.NJ8.DARK]: { colors: [...ig], scales: [...iv], opacities: [...ij] },
        [H.NJ8.DARKER]: iL(),
        [H.NJ8.MIDNIGHT]: iL(),
    };
}
function iU() {
    let e = (0, ia.G9)(),
        [t, a] = o.useState(H.NJ8.DARK),
        [n, l] = (0, is.V)("DevToolsGradientContrastPanel_themeStops", iP()),
        s = n ?? iP(),
        [i, d] = o.useState(["", "", ""]),
        [u, m] = o.useState([null, null, null]),
        [h, p] = o.useState(null),
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
                        (0, r.jsxs)(I.B, {
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
                                              (0, r.jsx)(A.E, { variant: "text-sm/normal", children: e.name }),
                                              (0, r.jsx)(lC.Q, {
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
                    iy.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    n = [],
                                    l = [];
                                for (let s = 0; s < ih; s++) {
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
                                        d = i_[d];
                                    }
                                    a.push(i ?? ig[s]), n.push(r ?? iv[s]), l.push(o ?? ij[s]);
                                }
                                return { colors: a, scales: n, opacities: l };
                            })(s, t),
                        ];
                    }),
                ),
            [s],
        ),
        f = b[t],
        y = o.useCallback(
            (e) => {
                l({ ...s, [t]: e(s[t]) });
            },
            [t, l, s],
        ),
        _ = o.useMemo(() => iM({ theme: t, saturation: 1 }), [t]),
        C = o.useMemo(() => {
            let e = [];
            for (let t = 0; t < ih; t++) {
                let a = parseFloat(f.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: f.colors[t], opacity: a, position: iu[t] });
            }
            return e;
        }, [f]),
        E = o.useMemo(() => {
            if (null == C) return null;
            let { text: e, background: t } = _;
            return im.map((a, n) =>
                iN[f.scales[n]].map((a) => {
                    let l = iw(e, t, ik(C, n, { ...C[n], color: a.value }));
                    return { ...a, trailing: `(${l}:1)` };
                }),
            );
        }, [C, _, f.scales]),
        S = o.useMemo(() => {
            try {
                return iy.map((e) => {
                    let { value: t, label: a } = e,
                        n = b[t],
                        l = [];
                    for (let e = 0; e < ih; e++) {
                        let s = parseFloat(n.opacities[e]);
                        if (isNaN(s) || s < 0 || s > 1) return { theme: t, label: a, result: null };
                        l.push({ color: n.colors[e], opacity: s, position: iu[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: n, background: l } = iM(t),
                                s = iw(n, l, e),
                                i = s >= 4.5;
                            if (!i)
                                for (let t = 0; t < e.length; t++) {
                                    let s = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return id.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == s) continue;
                                    let i = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of iN[s]) {
                                        if (o === e[t].color) continue;
                                        let s = iw(n, l, ik(e, t, { ...e[t], color: o }));
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
    return (0, r.jsx)(c.Ar, {
        className: ic.XG,
        children: (0, r.jsxs)(I.B, {
            gap: 24,
            padding: 8,
            className: ic.zr,
            children: [
                (0, r.jsx)(T.D, {
                    variant: "heading-lg/medium",
                    children: "Tab Hover Gradient Token Generator & Contrast Checker",
                }),
                (0, r.jsxs)(I.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(A.E, {
                            variant: "text-md/normal",
                            children:
                                "Checks that tab hover gradients pass WCAG AA (4.5:1) contrast against the text in the tab, accounting for opacities and hover states.",
                        }),
                        (0, r.jsx)(A.E, {
                            variant: "text-sm/normal",
                            children:
                                "Pick colors for each gradient stop (center, inner ring, outer ring) per theme. Each color in the dropdown will show the minimum contrast ratio for the gradient if the color were selected. Dark-family themes inherit: values set on Dark cascade to Darker and Midnight unless overridden.",
                        }),
                        (0, r.jsx)(A.E, {
                            variant: "text-sm/normal",
                            children:
                                "Use the hex field to paste in a hex color \u2014 it will snap to the closest allowed token and show the deltaE distance.",
                        }),
                        (0, r.jsxs)(A.E, {
                            variant: "text-sm/normal",
                            children: [
                                "Copy the generated YAML at the bottom to create your token definitions to be used by the",
                                " ",
                                (0, r.jsx)(il.Anchor, {
                                    href: "https://design.discord.tools/foundations/color/token-pipeline",
                                    children: "token pipeline",
                                }),
                                ".",
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(tQ.Z, {
                    selectionMode: "single",
                    label: "Theme",
                    value: t,
                    onSelectionChange: (e) => a(e),
                    closeOnSelect: !0,
                    options: iy,
                }),
                (0, r.jsxs)(I.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: ic.G9,
                            children: im.map((e, t) => {
                                let a = "" !== i[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)(I.B, {
                                                gap: 0,
                                                className: ic.hi,
                                                children: [
                                                    (0, r.jsx)(A.E, { variant: "text-md/medium", children: e }),
                                                    (0, r.jsx)(lC.Q, {
                                                        variant: "secondary",
                                                        textVariant: "text-xs/normal",
                                                        text: `(${iD(f.colors[t], parseFloat(f.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                iD(f.colors[t], parseFloat(f.opacities[t])),
                                                            ),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(tQ.Z, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: a,
                                                value: f.scales[t],
                                                onSelectionChange: (e) => {
                                                    let a = iN[e][0]?.value;
                                                    y((n) => ({
                                                        ...n,
                                                        scales: ik(n.scales, t, e),
                                                        colors: null != a ? ik(n.colors, t, a) : n.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: iS,
                                            }),
                                            (0, r.jsx)(tQ.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: f.colors[t],
                                                onSelectionChange: (e) =>
                                                    y((a) => ({ ...a, colors: ik(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: E?.[t] ?? iN[f.scales[t]],
                                            }),
                                            (0, r.jsx)(g.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: f.opacities[t],
                                                onChange: (e) => y((a) => ({ ...a, opacities: ik(a.opacities, t, e) })),
                                                placeholder: "0\u20131",
                                            }),
                                            (0, r.jsx)(g.k, {
                                                label: `Hex${a && null != u[t] ? ` (dE: ${u[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: i[t],
                                                onChange: (e) => {
                                                    d((a) => ik(a, t, e));
                                                    let a = (function (e) {
                                                        if (!ib.test(e)) return null;
                                                        try {
                                                            return new iA.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = ip,
                                                                a = ix,
                                                                n = 1 / 0;
                                                            for (let l of id)
                                                                for (let s of iN[l]) {
                                                                    let i = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, n] = eI.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new iA.A("srgb", [
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
                                                        m((a) => ik(a, t, e.deltaE)),
                                                            y((a) => ({
                                                                ...a,
                                                                scales: ik(a.scales, t, e.scale),
                                                                colors: ik(a.colors, t, e.color),
                                                            }));
                                                    } else m((e) => ik(e, t, null));
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
                (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Preview" }),
                (0, r.jsx)(ia.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(eA.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)(I.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: ic.$8,
                                        style: { background: eI.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: iE.map((e, t) =>
                                            (0, r.jsx)(
                                                ee.z9,
                                                {
                                                    route: "",
                                                    selected: h === e.id,
                                                    onClick: () => p(e.id),
                                                    icon: e.icon,
                                                    text: e.text,
                                                    showHoverGradient: !0,
                                                    nitroHoverGradient: "nitroHoverGradient" in e,
                                                    role: "listitem",
                                                    tabIndex: 0,
                                                    onFocus: () => {},
                                                    ...("useCustomGradient" in e && {
                                                        hoverGradientStart: iI(f.colors[0], parseFloat(f.opacities[0])),
                                                        hoverGradientMiddle: iI(
                                                            f.colors[1],
                                                            parseFloat(f.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: iI(f.colors[2], parseFloat(f.opacities[2])),
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
                null != S &&
                    (0, r.jsxs)(I.B, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Results" }),
                            S.map((e) => {
                                let { theme: t, label: a, result: n } = e;
                                return null != n
                                    ? (0, r.jsxs)(
                                          I.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, r.jsx)(A.E, { variant: "text-md/semibold", children: a }),
                                                  (0, r.jsxs)(k.w, {
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
                                                      (0, r.jsxs)(I.B, {
                                                          gap: 4,
                                                          children: [
                                                              (0, r.jsx)(A.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: "Suggestion:",
                                                              }),
                                                              (0, r.jsxs)(A.E, {
                                                                  variant: "text-sm/normal",
                                                                  children: [
                                                                      im[n.suggestion.stopIndex],
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
                                                      (0, r.jsx)(A.E, {
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
                (0, r.jsx)(iO, { allResolvedStops: b }),
            ],
        }),
    });
}
var iG = a(820739),
    iB = a(230135),
    iF = a(45780),
    iV = a(868652),
    i$ = a(859241);
let iW = [
        n2.M.GUILD_POWERUP_PERKS_COACHMARK,
        n2.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        n2.M.GUILD_POWERUP_NOTIFICATION,
        n2.M.GUILD_TAG_AVAILABLE_COACHMARK,
        n2.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
    ],
    iz = [
        n2.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        n2.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        n2.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        n2.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        n2.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    iH = [n2.V.ADOPT_CLAN_IDENTITY_NOTICE],
    iK = [
        n2.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        n2.M.VANITY_URL_POWERUP_ROLLBACK_MODAL,
        n2.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
    ];
function iY(e) {
    switch (e) {
        case n2.V.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return "GUILD_POWERUP_LEVEL_1_COACHMARK";
        case n2.V.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return "GUILD_POWERUP_LEVEL_2_COACHMARK";
        case n2.V.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return "GUILD_POWERUP_LEVEL_3_COACHMARK";
        case n2.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
        case n2.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
        case n2.V.ADOPT_CLAN_IDENTITY_NOTICE:
            return "ADOPT_CLAN_IDENTITY_NOTICE";
        default:
            return String(e);
    }
}
var iq = a(861671);
async function iJ(e, t, a) {
    await nF.Bo.patch({
        url: H.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : a5()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, iG.VU)(e),
        (0, iV.Xd)(e, !0);
}
async function iQ(e) {
    await nF.Bo.post({ url: H.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function iX() {
    let e = (0, d.bG)([aW.A], () => aW.A.getGuildId()),
        t = (0, d.bG)([a$.A], () => a$.A.getGuild(e)?.name),
        a = (0, d.yK)([lr.A], () => [...iz, ...iH].filter((t) => null != e && (0, iF.zs)(t, e))),
        n = (0, d.yK)([i$.A], () => (null != e ? (i$.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(c.Ip, {
            className: iq.kL,
            children: [
                (0, r.jsx)("div", {
                    className: iq.uW,
                    children: (0, r.jsx)(T.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                }),
                (0, r.jsxs)("div", {
                    className: iq.uW,
                    children: [
                        (0, r.jsx)(A.E, {
                            variant: "eyebrow",
                            className: iq.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, iV.qM)();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iq.uW,
                    children: [
                        (0, r.jsx)(A.E, { variant: "eyebrow", className: iq.wx, children: "Reset Progress Bar State" }),
                        (0, r.jsx)(x.$, { variant: "primary", text: "Reset", onClick: iB.O }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iq.uW,
                    children: [
                        (0, r.jsx)(A.E, { variant: "eyebrow", children: "Set Warning State" }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        iJ(e, n.slice(Math.floor(n.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        iJ(e, n, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iq.uW,
                    children: [
                        (0, r.jsx)(A.E, { variant: "eyebrow", className: iq.wx, children: "Reset User Level DCs" }),
                        (0, r.jsx)(I.B, {
                            gap: 16,
                            children: iW.map((e) => (0, r.jsx)(lc, { className: iq.z6, content: n2.M[e] }, n2.M[e])),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: iq.uW,
                    children: (0, r.jsx)(m.n, {
                        label: "Reset Guild Level DCs",
                        children: iz.map((t) =>
                            (0, r.jsx)(
                                j.d,
                                {
                                    label: iY(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, iF._$)(t, e, !1)
                                            : ((0, lx._N)(n2.M.GUILD_POWERUP_NOTIFICATION), (0, iF.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: iq.uW,
                    children: (0, r.jsx)(m.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: iH.map((t) =>
                            (0, r.jsx)(
                                j.d,
                                {
                                    label: iY(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, iF._$)(t, e, !1)
                                            : ((0, lx._N)(n2.M.GUILD_POWERUP_NOTIFICATION), (0, iF.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: iq.uW,
                    children: [
                        (0, r.jsx)(A.E, {
                            variant: "eyebrow",
                            className: iq.wx,
                            children: "Reset Powerup Rollback DCs",
                        }),
                        iK.map((e) => (0, r.jsx)(lc, { className: iq.z6, content: n2.M[e] }, n2.M[e])),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iq.uW,
                    children: [
                        (0, r.jsx)(A.E, {
                            variant: "eyebrow",
                            className: iq.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                iQ(e);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(x.$, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, sm.Wp)(!1);
                    },
                }),
            ],
        });
}
var iZ = a(450510),
    i0 = a(320681);
function i1(e) {
    let { hotspotLocation: t } = e,
        [a, n] = (0, d.yK)([iZ.HP], () => [iZ.HP.hasHotspot(t, !0), iZ.HP.getHotspotOverride(t)]);
    return (0, r.jsx)(p.l, {
        label: t,
        errorMessage: a ? "Inactive" : void 0,
        successMessage: a ? "Active" : void 0,
        value: n,
        options: [
            { id: "none", value: void 0, label: "No Override" },
            { id: "active", value: !0, label: "Force Active" },
            { id: "inactive", value: !1, label: "Force Inactive" },
        ],
        onSelectionChange: (e) => (null != e ? (0, iZ.Kl)(t, e) : (0, iZ.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function i2() {
    return (0, r.jsx)(c.Ip, {
        className: tA.nd,
        children: (0, r.jsx)(m.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: i0.IN,
            children: (0, r.jsx)(I.B, {
                gap: 20,
                children: Object.keys(iZ._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, r.jsx)(i1, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var i8 = a(919523),
    i3 = a(855522),
    i6 = a(37646),
    i5 = a(773669);
function i9() {
    let e = (0, d.bG)([i5.default], () => i5.default.locale),
        [t, a] = o.useState(),
        n = (0, i8.runtimeHashMessageKey)(t ?? ""),
        l = o.useMemo(() => aK.t[n], [n]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(af.Ay, {
                children: [
                    (0, r.jsx)(af.Ay.Icon, { icon: i6.U, tooltip: "Locale" }),
                    (0, r.jsx)(af.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, r.jsxs)(nj, {
                children: [
                    (0, r.jsx)(nb, { name: "Active System", children: "@discord/intl" }),
                    (0, r.jsx)(nb, { name: "App", children: e }),
                    (0, r.jsx)(nb, { name: "System", children: aK.systemLocale }),
                    (0, r.jsx)(nb, { name: "@discord/intl", children: aK.intl.currentLocale }),
                    (0, r.jsx)(nb, { name: "common i18n", children: i3.A.getLocale() }),
                    (0, r.jsx)(nb, { name: "Moment", children: a5().locale() }),
                ],
            }),
            (0, r.jsxs)(af.Ay, {
                children: [
                    (0, r.jsx)(af.Ay.Icon, { icon: i6.U, tooltip: "Messages" }),
                    (0, r.jsx)(af.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(nj, {
                children: (0, r.jsx)(nb, { name: "Unique Rendered Main Messages", children: Object.keys(aK.t).length }),
            }),
            (0, r.jsx)("div", {
                style: { margin: 16 },
                children: (0, r.jsx)(g.k, {
                    onChange: function (e) {
                        a(e);
                    },
                    name: "Message name",
                    placeholder: "Find a message",
                }),
            }),
            (0, r.jsxs)(nj, {
                children: [
                    (0, r.jsx)(nb, { name: "Hashed key", children: n }),
                    (0, r.jsx)(nb, { name: "Exists?", children: null != l ? "yes" : "no" }),
                ],
            }),
            (0, r.jsx)(ak, { data: l?.(e) }),
        ],
    });
}
var i4 = a(434404);
function i7() {
    let { node: e } = (0, B.Ay)(i4.F, "");
    return (0, r.jsx)(c.Ip, {
        className: tA.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)(G.A, { node: e }, e.key),
        }),
    });
}
var re = a(663066),
    rt = a(80556),
    ra = a(907135),
    rn = a(665095),
    rl = a(87404);
function rs() {
    return (0, r.jsx)(c.Ip, {
        className: tA.nd,
        children: (0, r.jsxs)("div", {
            className: si.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: si.uW,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Verification Layer" }),
                        (0, r.jsx)("div", {
                            className: si.bd,
                            children: (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: () => {
                                    (0, re.B8)(() => (0, r.jsx)(rn.A, {}), { layerKey: rl._s, Layer: rt.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: si.uW,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Safety Flow" }),
                        (0, r.jsx)("div", {
                            className: si.bd,
                            children: (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: () => {
                                    (0, re.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, r.jsx)(ra.A, { onClose: t });
                                        },
                                        { layerKey: rl._s, Layer: rt.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: si.uW,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Layer Controls" }),
                        (0, r.jsx)("div", {
                            className: si.bd,
                            children: (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: () => {
                                    re.xr.setState({ fullScreenLayers: [] });
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
var ri = a(687813),
    rr = a(604121);
let ro = {
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
function rd(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let n = new Uint8Array(e);
                    ri.$1(n, (e, n) => {
                        null != e && a(e);
                        let l = Object.keys(n).reduce((e, t) => ({ ...e, [t]: JSON.parse(ri.he(n[t])) }), {}),
                            s = l["manifest.json"];
                        t(l[`animations/${s.animations[0].id}.json`]);
                    });
                }),
        );
}
function rc() {
    let [e, t] = o.useState(void 0),
        [a, n] = o.useState(400),
        [l, s] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)(I.B, {
            gap: 24,
            children: [
                (0, r.jsx)(tQ.Z, {
                    options: Object.keys(ro).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)(I.B, {
                    gap: 8,
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(g.k, { value: a.toString(), onChange: (e) => n(Number(e)), label: "Width" }),
                        (0, r.jsx)(g.k, { value: l.toString(), onChange: (e) => s(Number(e)), label: "Height" }),
                    ],
                }),
                (0, r.jsx)(x.$, {
                    size: "sm",
                    disabled: null == e,
                    onClick: async () => {
                        if (null == e) return;
                        let t = ro[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(rd).then(eM().cloneDeep)
                                            : await t().then((e) => eM().cloneDeep(e.default)),
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
                            rr.a,
                            {
                                importData: () => {
                                    let t = ro[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(rd).then(eM().cloneDeep)
                                        : t().then((e) => eM().cloneDeep(e.default));
                                },
                            },
                            e,
                        ),
                    }),
            ],
        }),
    });
}
var ru = a(442433),
    rm = a(395671);
let rh = {
        ClipsContextMenu: async () => {
            let { default: e } = await a.e("40638").then(a.bind(a, 562733));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await a.e("32986").then(a.bind(a, 728033)),
                t = new rm.kJ({
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
            return () => (0, r.jsx)(e, { application: t, channelId: "987654321", onClose: ru.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("9004"), a.e("19690"), a.e("45322"), a.e("10758")]).then(
                    a.bind(a, 455557),
                ),
                t = Object.values(a$.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("28951"),
                    a.e("79924"),
                    a.e("39655"),
                    a.e("79149"),
                    a.e("74389"),
                    a.e("41069"),
                    a.e("2661"),
                    a.e("43908"),
                    a.e("87845"),
                    a.e("85970"),
                    a.e("49089"),
                    a.e("47459"),
                    a.e("45970"),
                    a.e("1472"),
                    a.e("83852"),
                    a.e("29690"),
                    a.e("80186"),
                    a.e("49681"),
                    a.e("96382"),
                    a.e("22687"),
                    a.e("63202"),
                    a.e("82596"),
                    a.e("49145"),
                    a.e("9004"),
                    a.e("30997"),
                    a.e("28136"),
                    a.e("16084"),
                    a.e("43116"),
                    a.e("87317"),
                    a.e("73669"),
                    a.e("22547"),
                    a.e("61058"),
                    a.e("50342"),
                    a.e("33097"),
                    a.e("10262"),
                    a.e("46313"),
                    a.e("69178"),
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
                    a.e("81202"),
                    a.e("71719"),
                    a.e("72847"),
                    a.e("19690"),
                    a.e("93767"),
                    a.e("13848"),
                    a.e("39214"),
                    a.e("99108"),
                    a.e("14878"),
                    a.e("88307"),
                    a.e("26508"),
                    a.e("61347"),
                    a.e("73091"),
                    a.e("86692"),
                    a.e("52695"),
                    a.e("16237"),
                    a.e("16373"),
                    a.e("24484"),
                    a.e("44943"),
                    a.e("32347"),
                    a.e("8458"),
                    a.e("11810"),
                    a.e("48111"),
                    a.e("90152"),
                    a.e("87973"),
                    a.e("57197"),
                    a.e("14863"),
                    a.e("84951"),
                    a.e("71167"),
                    a.e("12390"),
                    a.e("13446"),
                    a.e("61309"),
                    a.e("70284"),
                    a.e("94529"),
                    a.e("93305"),
                    a.e("21300"),
                    a.e("66016"),
                    a.e("83518"),
                    a.e("17699"),
                    a.e("57032"),
                    a.e("72238"),
                    a.e("45322"),
                    a.e("94832"),
                    a.e("37038"),
                    a.e("26386"),
                    a.e("65338"),
                    a.e("52191"),
                    a.e("14656"),
                    a.e("39855"),
                    a.e("98356"),
                    a.e("32607"),
                    a.e("65011"),
                ]).then(a.bind(a, 860417)),
                t = Object.values(a$.A.getGuilds())[0];
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
            let { default: e } = await Promise.all([
                a.e("30006"),
                a.e("26132"),
                a.e("81202"),
                a.e("43456"),
                a.e("44491"),
            ]).then(a.bind(a, 907206));
            return (t) => (0, r.jsx)(e, { ...t, onClose: ru.Z_ });
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
                        console.log("Leave role clicked"), (0, ru.Z_)();
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await Promise.all([a.e("86456"), a.e("89346")]).then(a.bind(a, 949881)),
                { ContentInventoryEntryType: t } = await Promise.resolve().then(a.bind(a, 681154)),
                { ContentInventoryAuthorType: n } = await Promise.resolve().then(a.bind(a, 6161)),
                l = V.default.getCurrentUser(),
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
                    a.e("74389"),
                    a.e("43908"),
                    a.e("11810"),
                    a.e("14656"),
                ]).then(a.bind(a, 892921)),
                t = Object.values(a$.A.getGuilds())[0];
            return null == t
                ? () => null
                : (a) =>
                      (0, r.jsx)(e, {
                          ...a,
                          addFormField: (e) => {
                              console.log("Add form field:", e), (0, ru.Z_)();
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
                t = a$.A.getGuilds(),
                n = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(t9.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = t9.A.getAllThreadsForParent(t.id);
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
                t = Object.values(a$.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: ru.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("29690"), a.e("71719"), a.e("14878"), a.e("66016")]).then(
                    a.bind(a, 316173),
                ),
                t = Object.values(a$.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: ru.Z_ });
        },
    },
    rx = {
        GuildShopSortOptions: o.lazy(async () => {
            let { default: e } = await Promise.all([a.e("83518"), a.e("55197"), a.e("50974")]).then(a.bind(a, 324269)),
                { default: t } = await a.e("55197").then(a.bind(a, 558060));
            return { default: () => (0, r.jsx)(t, { defaultSortOption: void 0, children: (0, r.jsx)(e, {}) }) };
        }),
    };
function rp() {
    let e = o.useMemo(
            () =>
                Object.keys(rh)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = o.useMemo(
            () =>
                Object.keys(rx)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(
            (e) => {
                null != a && (0, ru.L3)(e, rh[a]);
            },
            [a],
        ),
        d = null != l ? rx[l] : null;
    return (0, r.jsx)(c.Ip, {
        className: tA.nd,
        children: (0, r.jsxs)(I.B, {
            className: si.l$,
            gap: 16,
            children: [
                (0, r.jsxs)(I.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(A.E, { variant: "eyebrow", children: "Context Menus" }),
                        (0, r.jsx)(A.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a menu and click Open to trigger it as a context menu at the button position.",
                        }),
                    ],
                }),
                (0, r.jsxs)(I.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(tQ.Z, {
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
                (0, r.jsxs)(I.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(A.E, { variant: "eyebrow", children: "Popout Menus" }),
                        (0, r.jsx)(A.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a popout menu to render it. Click the rendered button to open the popout.",
                        }),
                    ],
                }),
                (0, r.jsx)(I.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: (0, r.jsx)(tQ.Z, {
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
                        fallback: (0, r.jsx)(A.E, {
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
var rg = a(253506),
    rv = a(665260),
    rj = a(97808),
    rb = a(778712),
    rf = a(308528),
    ry = a(571694),
    r_ = a(704844),
    rC = a(567761),
    rE = a(716371),
    rS = a(825801);
function rN() {
    let e = (0, d.yK)([rC.default], () => rC.default.getSortedChannels()[1]),
        [t, a] = o.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: n, options: l } = (0, d.cf)([t9.A, V.default, t4.A], () => ({
            selectedChannel: t9.A.getChannel(t),
            options: e.map((e) => {
                let t = t9.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, t5.m1)(t, V.default, t4.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, r.jsx)(rj.eu, { src: (0, ry.Y)(t), "aria-hidden": !0, size: rb._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        s = o.useCallback(() => {
            if (null == n || !n.isPrivate()) return;
            let e = (0, rv.PQ)(n.recipientFlags ?? 0, rg.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            r_.A.updatePrivateChannelRecipientFlags(n.id, e);
        }, [n]),
        i = !!n?.isPrivate() && (0, rv.Lt)(n.recipientFlags ?? 0, rg.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: rS.gs,
        children: [
            (0, r.jsx)(tQ.Z, {
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
function rA() {
    let e = o.useCallback(() => {
        rf.A.openPrivateChannel({ recipientIds: [rE.K] });
    }, []);
    return (0, r.jsx)(x.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function rk() {
    let e = (0, d.bG)([ab.Ay], () => ab.Ay.allByCategory(ab.xW.MESSAGING), [], d.My).map((e) => {
        let [t, a, { label: n }] = e;
        return (0, r.jsx)(j.d, { label: n, description: t, checked: a, onChange: (e) => sg(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: S()(tA.nd, rS.nd),
        children: [
            e,
            (0, r.jsx)("div", { className: rS.yF }),
            (0, r.jsx)(rN, {}),
            (0, r.jsx)("div", { className: rS.yF }),
            (0, r.jsx)(rA, {}),
        ],
    });
}
var rI = a(459838),
    rD = a(772707),
    rT = a(150934),
    rO = a(598653),
    rR = a(166403),
    rw = a(625494),
    rM = a(204925);
let rL = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e("29232").then(a.bind(a, 180275));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: aK.intl.string(aK.t.ZLRYGU),
                confirmButtonText: aK.intl.string(aK.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e("19840").then(a.bind(a, 79779));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: aK.intl.string(aK.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: aK.intl.string(aK.t["13ofGu"]),
                impression: { impressionName: sB.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await Promise.all([a.e("54398"), a.e("34260"), a.e("18467")]).then(a.bind(a, 297102));
        return (t) => (0, r.jsx)(e, { ...t, entryPoint: a2.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e("20969"), a.e("82758"), a.e("80022"), a.e("10136")]).then(
            a.bind(a, 776971),
        );
        return (t) => (0, r.jsx)(e, { ...t, source: rM.w_.NSFW_SERVER });
    },
    ExistingUserAgeGateUnderage: async () => {
        let { default: e } = await a.e("80959").then(a.bind(a, 784578));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NewUserAgeGate: async () => {
        let { default: e } = await Promise.all([
            a.e("20969"),
            a.e("19623"),
            a.e("82758"),
            a.e("80022"),
            a.e("1143"),
        ]).then(a.bind(a, 284778));
        return (t) => (0, r.jsx)(e, { ...t });
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
        let { default: e } = await Promise.resolve().then(a.bind(a, 914724));
        return (t) => (0, r.jsx)(e, { error: null, working: !1, validPhone: !1, ...t });
    },
    VoiceSettingsModal: async () => {
        let { default: e } = await a.e("96531").then(a.bind(a, 880510));
        return (t) => (0, r.jsx)(e, { ...t, mediaEngineContext: rI.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, r.jsx)(rD.k, {
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
                (t.default.getDevicesForPlatform = (e) => (e === H.fg2.PLAYSTATION ? s : n.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== H.fg2.PLAYSTATION && i.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === H.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
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
                    (0, r.jsx)(e, { ...a, channel: l, platform: H.fg2.PLAYSTATION })
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
            a.e("24092"),
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
            a.e("24092"),
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
                                (0, r.jsx)(rT.S, {
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
                                (0, r.jsx)(rT.S, {
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
        let { default: e } = await Promise.all([a.e("29690"), a.e("46313")]).then(a.bind(a, 336496));
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
    FamilyCenterAcceptLinkModal: async () => {
        let e = V.default.getUser("12345"),
            t = V.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("31385")]).then(a.bind(a, 58144));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = V.default.getUser("12345"),
            t = V.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("84811")]).then(a.bind(a, 389094));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = V.default.getUser("12345"),
            t = V.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("17219")]).then(a.bind(a, 187278));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = V.default.getUser("12345"),
            t = V.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("43139")]).then(a.bind(a, 179950));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([
            a.e("54266"),
            a.e("30244"),
            a.e("98189"),
            a.e("48370"),
            a.e("72875"),
        ]).then(a.bind(a, 320742));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await Promise.all([a.e("44616"), a.e("85579")]).then(a.bind(a, 785606)),
            t = rR.A.getPremiumGroupSubscription();
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
            t = Object.keys(a$.A.getGuilds())[0];
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
            t = Object.values(a$.A.getGuilds())[0];
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
            a.e("47459"),
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
            a.e("79924"),
            a.e("13754"),
            a.e("16138"),
            a.e("19580"),
            a.e("97804"),
            a.e("19623"),
            a.e("56856"),
            a.e("82721"),
            a.e("99574"),
            a.e("57794"),
            a.e("19183"),
        ]).then(a.bind(a, 923314));
        return (t) => (0, r.jsx)(e, { ...t });
    },
};
function rP() {
    let e = o.useMemo(
            () =>
                Object.keys(rL)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(c.Ip, {
        className: tA.nd,
        children: (0, r.jsxs)("div", {
            className: si.l$,
            children: [
                (0, r.jsx)("section", {
                    className: si.uW,
                    children: (0, r.jsxs)(I.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(tQ.Z, {
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
                                onClick: () => null != t && (0, ek.openModalLazy)(rL[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: si.uW,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: si.bd,
                            children: (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, rO.o)(!0), rw._.dispatch(H.jej.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var rU = a(933832),
    rG = a(472229),
    rB = a(694080),
    rF = a(669316),
    rV = a(354670),
    r$ = a(428262);
let rW = async () => {
        try {
            let { body: e } = await nF.Bo.get({ url: H.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
            return e;
        } catch (e) {
            return [];
        }
    },
    rz = async (e, t) => {
        try {
            await nF.Bo.post({ url: H.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, rB._D)();
        }
    },
    rH = async (e, t) => {
        try {
            await nF.Bo.del({ url: H.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, rB._D)();
        }
    },
    rK = async () => {
        try {
            let { body: e } = await nF.Bo.get({ url: H.Rsh.USER_OFFERS, rejectWithError: !0 });
            return { trial: e.trial, discount: e.discount.map(rF.A.createFromServer) };
        } catch (e) {
            return { trial: [], discount: [] };
        }
    },
    rY = async () => {
        try {
            await nF.Bo.del({ url: H.Rsh.USER_OFFERS, rejectWithError: !0 });
        } catch {
        } finally {
            await rV.A.forceReset(), await (0, rB._D)();
        }
    },
    rq = async (e) => {
        await nF.Bo.post({ url: H.Rsh.CREATE_REVERSE_TRIAL, body: { ends_at: e }, rejectWithError: !0 });
    };
function rJ(e) {
    let { offer: t, offerOptions: a, forceRefetch: n } = e,
        [l, s] = o.useState(!1),
        [i, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [m, h] = o.useState(!1);
    o.useEffect(() => {
        c && h(!0);
        let e = setTimeout(() => {
            h(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [c]);
    let { id: x, expires_at: p, redeemed_at: g, trial_id: v, subscription_trial: j, referrer: b } = t,
        f =
            a.find((e) => {
                let { value: t } = e;
                return t === v;
            })?.label ?? "Unknown";
    null != b && (f = `${f} from @${b.username}`);
    let y = null != p,
        _ = null != p && new Date(p).getTime() < Date.now(),
        C = j?.sku_id === l7.pe.TIER_0,
        E = async () => {
            u(!0), y ? await k({ expiresAt: null }) : await (0, rB.u1)(t), n(), u(!1);
        },
        k = async (e) => {
            u(!0);
            try {
                await nF.Bo.patch({
                    url: H.Rsh.UPDATE_USER_OFFER(x, "trial"),
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
    let I = "Active";
    return (
        y && (I = "Acked"),
        _ && (I = "Expired"),
        (0, r.jsxs)("div", {
            className: S()(si.Nr, C ? si.Qf : si.C1),
            children: [
                (0, r.jsx)("div", {
                    className: S()(si.nM, si.S7),
                    children: (0, r.jsx)(T.D, { variant: "heading-lg/semibold", color: "always-white", children: f }),
                }),
                (0, r.jsxs)(N.D, {
                    className: S()(si.nM, si.QB),
                    onClick: () => {
                        (0, ni.C)(x, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(A.E, { variant: "eyebrow", color: "always-white", children: ["Offer: ", x] }),
                        l
                            ? (0, r.jsx)(rU.A, { size: "md", color: "currentColor", className: si.Kk })
                            : (0, r.jsx)(a4.T, { size: "xs", color: "currentColor", className: si.Kk }),
                    ],
                }),
                (0, r.jsxs)(N.D, {
                    className: S()(si.nM, si.QB),
                    onClick: () => {
                        (0, ni.C)(v, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(A.E, { variant: "eyebrow", color: "always-white", children: ["Trial: ", v] }),
                        i
                            ? (0, r.jsx)(rU.A, { size: "md", color: "currentColor", className: si.Kk })
                            : (0, r.jsx)(a4.T, { size: "xs", color: "currentColor", className: si.Kk }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: si.nM,
                    children: (0, r.jsxs)(A.E, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, r$.re)({
                                intervalType: j?.interval ?? l7.WT.MONTH,
                                intervalCount: j?.interval_count ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: si.nM,
                    children: [
                        (0, r.jsxs)(A.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, rG.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nr.Xm)(p),
                            onChange: (e) => {
                                k({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: si.nM,
                    children: [
                        (0, r.jsx)(A.E, { variant: "eyebrow", color: "always-white", children: "Referrer ID:" }),
                        (0, r.jsx)("input", {
                            type: "text",
                            value: b?.id ?? "",
                            onChange: (e) => k({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: si.fC,
                    children: [
                        (0, r.jsx)(N.D, {
                            onClick: E,
                            className: S()(si.qS, si.vk, { [si.R1]: y, [si._7]: _ }),
                            children: (0, r.jsx)(A.E, {
                                variant: "eyebrow",
                                color: "Acked" === I ? void 0 : "always-white",
                                children: I,
                            }),
                        }),
                        null != g &&
                            (0, r.jsx)("div", {
                                className: S()(si.qS, si.k3),
                                children: (0, r.jsx)(A.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Redeemed",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(N.D, {
                    onClick: async () => {
                        u(!0), await rH(x, "trial"), n(), u(!1);
                    },
                    children: (0, r.jsx)(nt.u, { size: "md", color: "currentColor", className: S()(si.Kk, si.IT) }),
                }),
                (0, r.jsx)("div", { className: S()(si.g4, { [si.VP]: c || m }), children: (0, r.jsx)(eZ.y, {}) }),
            ],
        })
    );
}
function rQ(e) {
    let { offer: t, offerOptions: a, forceRefetch: n } = e,
        [l, s] = o.useState(!1),
        [i, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [m, h] = o.useState(!1);
    o.useEffect(() => {
        c && h(!0);
        let e = setTimeout(() => {
            h(!1);
        }, 500);
        return () => {
            clearTimeout(e);
        };
    }, [c]);
    let { id: x, expiresAt: p, discountId: g, discount: v } = t,
        j =
            a.find((e) => {
                let { value: t } = e;
                return t === g;
            })?.label ?? "Unknown",
        b = null != p,
        f = t.hasExpired(),
        y = t.isApplied(),
        _ = async () => {
            u(!0), b ? await C({ expiresAt: null }) : await (0, rB.u1)(void 0, t), n(), u(!1);
        },
        C = async (e) => {
            let { expiresAt: t } = e;
            u(!0);
            try {
                await nF.Bo.patch({
                    url: H.Rsh.UPDATE_USER_OFFER(x, "discount"),
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
    let E = "Active";
    return (
        f && (E = "Expired"),
        b && (E = "Acked"),
        (0, r.jsxs)("div", {
            className: S()(si.Nr, si.id),
            children: [
                (0, r.jsx)("div", {
                    className: S()(si.nM, si.S7),
                    children: (0, r.jsx)(T.D, { variant: "heading-lg/semibold", color: "text-default", children: j }),
                }),
                (0, r.jsxs)(N.D, {
                    className: S()(si.nM, si.QB),
                    onClick: () => {
                        (0, ni.C)(x, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(A.E, { variant: "eyebrow", color: "text-default", children: ["Offer: ", x] }),
                        l
                            ? (0, r.jsx)(rU.A, { size: "md", color: "currentColor", className: S()(si.Kk, si.mK) })
                            : (0, r.jsx)(a4.T, { size: "xs", color: "currentColor", className: si.Kk }),
                    ],
                }),
                (0, r.jsxs)(N.D, {
                    className: S()(si.nM, si.QB),
                    onClick: () => {
                        (0, ni.C)(g, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(A.E, { variant: "eyebrow", color: "text-default", children: ["Discount: ", g] }),
                        i
                            ? (0, r.jsx)(rU.A, { size: "md", color: "currentColor", className: S()(si.Kk, si.mK) })
                            : (0, r.jsx)(a4.T, { size: "xs", color: "currentColor", className: si.Kk }),
                    ],
                }),
                v?.amount != null &&
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)(A.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [v.amount, "% off"],
                        }),
                    }),
                (0, r.jsxs)("div", {
                    className: si.nM,
                    children: [
                        (0, r.jsxs)(A.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, rG.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nr.Xm)(p?.toISOString()),
                            onChange: (e) =>
                                C({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: si.fC,
                    children: [
                        (0, r.jsx)(N.D, {
                            onClick: _,
                            className: S()(si.qS, si.vk, { [si.R1]: b, [si._7]: f }),
                            children: (0, r.jsx)(A.E, {
                                variant: "eyebrow",
                                color: "Acked" === E ? void 0 : "always-white",
                                children: E,
                            }),
                        }),
                        y &&
                            (0, r.jsx)("div", {
                                className: S()(si.qS, si.k3),
                                children: (0, r.jsx)(A.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(N.D, {
                    className: si.aR,
                    onClick: async () => {
                        u(!0), await rH(x, "discount"), n(), u(!1);
                    },
                    children: (0, r.jsx)(nt.u, { size: "md", color: "currentColor", className: S()(si.Kk, si.fy) }),
                }),
                (0, r.jsx)("div", { className: S()(si.g4, { [si.VP]: c || m }), children: (0, r.jsx)(eZ.y, {}) }),
            ],
        })
    );
}
function rX() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState([]),
        [l, s] = o.useState(),
        [i, d] = o.useState(),
        [u, m] = o.useState([]),
        [h, g] = o.useState([]),
        [v, j] = o.useState(!0),
        [b, f] = o.useState(10080),
        [y, _] = o.useState([]),
        { entitlements: C, deleteFractionalPremium: E, refreshEntitlementList: S } = sl();
    o.useEffect(() => {
        S();
    }, [S]),
        o.useEffect(() => {
            _(C.filter((e) => e.sourceType === H.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [C]),
        o.useEffect(() => {
            (0 === e.length || 0 === a.length || v) &&
                rW().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        r = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    t(a), n(r), null == l && s(a[0].value), null == i && d(r[0].value);
                });
        }, [e, a, l, i, v]),
        o.useEffect(() => {
            v &&
                (j(!1),
                rV.A.forceReset(),
                (0, rB._D)(),
                rK().then((e) => {
                    m(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        g(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [v]);
    let N = async () => {
            null != l && (await rz(l, "trial"), j(!0));
        },
        k = async () => {
            null != i && (await rz(i, "discount"), j(!0));
        },
        I = async () => {
            await rY(), j(!0);
        },
        D = async () => {
            let e = new Date(Date.now() + 60 * b * 1e3).toISOString();
            await rq(e), S();
        };
    return (0, r.jsx)(c.Ip, {
        className: tA.nd,
        children: (0, r.jsxs)("div", {
            className: si.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: si.uW,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Utils" }),
                        (0, r.jsxs)("div", {
                            className: si.Uo,
                            children: [
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear all User Offers",
                                    onClick: I,
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Mobile Trials DismissibleContent",
                                    onClick: () => (0, lx.xB)(n2.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, lx._N)(n2.M.NAGBAR_NOTICE_OFFER_EXPIRING),
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Refresh DevTools",
                                    onClick: () => j(!0),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: si.uW,
                    children: (0, r.jsxs)("div", {
                        className: si.bd,
                        children: [
                            (0, r.jsx)(p.l, {
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
                            (0, r.jsx)(x.$, { variant: "primary", text: "Create", onClick: N }),
                        ],
                    }),
                }),
                (0, r.jsx)("section", {
                    className: si.uW,
                    children: (0, r.jsxs)("div", {
                        className: si.bd,
                        children: [
                            (0, r.jsx)(p.l, {
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
                            (0, r.jsx)(x.$, { variant: "primary", text: "Create", onClick: k }),
                        ],
                    }),
                }),
                u.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: si.uW,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Existing Trial Offers" }),
                            u.map((t) =>
                                (0, r.jsx)(rJ, { offer: t, offerOptions: e, forceRefetch: () => j(!0) }, t.id),
                            ),
                        ],
                    }),
                h.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: si.uW,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Existing Discount Offers" }),
                            h.map((e) =>
                                (0, r.jsx)(rQ, { offer: e, offerOptions: a, forceRefetch: () => j(!0) }, e.id),
                            ),
                        ],
                    }),
                (0, r.jsx)("section", {
                    className: si.uW,
                    children: (0, r.jsxs)("div", {
                        className: si.bd,
                        children: [
                            (0, r.jsx)(p.l, {
                                label: "Create a Reverse Trial Entitlement",
                                options: [
                                    { id: "5min", label: "5 minutes", value: 5 },
                                    { id: "1hour", label: "1 hour", value: 60 },
                                    { id: "1day", label: "1 day", value: 1440 },
                                    { id: "1week", label: "1 week", value: 10080 },
                                ],
                                value: b,
                                placeholder: "Reverse Trial Length",
                                onSelectionChange: f,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(x.$, { variant: "primary", text: "Create", onClick: D }),
                        ],
                    }),
                }),
                y.length > 0 &&
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(A.E, {
                                style: { marginTop: "15px" },
                                variant: "text-md/bold",
                                children: "Active reverse trial",
                            }),
                            (0, r.jsx)("div", {
                                children: y.map((e) =>
                                    (0, r.jsx)(so, { entitlement: e, active: !0, onDelete: () => E(e.id) }, e.id),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var rZ = a(935462),
    r0 = a(260598),
    r1 = a(93688),
    r2 = a(717400),
    r8 = a(676955),
    r3 = a(31300),
    r6 = a(500060),
    r5 = a(391973),
    r9 = a(684013),
    r4 = a(765671),
    r7 = a(235986),
    oe = a(742589),
    ot = a(41984),
    oa = a(181435),
    on = a(435736),
    ol = a(296027),
    os = a(515183),
    oi = a(489277),
    or = a(127242),
    oo = a(869014),
    od = a(528772),
    oc = a(38502),
    ou = a(532624),
    om = a(773371),
    oh = a(996439),
    ox = a(350535),
    op = a(9302),
    og = a(644434),
    ov = a(618137);
let oj = {
        [H.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: H.uss.CLICK_ZONE_DEBUG,
            id: (0, ex.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...oc.A.getWidgetDefaultSettings(H.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [H.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: H.uss.PERFORMANCE_DEBUG,
            id: (0, ex.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...oc.A.getWidgetDefaultSettings(H.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    ob = {};
function of(e) {
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
        (0, r.jsxs)(a9.$n, {
            look: a9.$n.Looks.LINK,
            color: a9.$n.Colors.LINK,
            size: a9.$n.Sizes.MIN,
            onClick: function () {
                (0, ni.C)(t, () => n(!0));
            },
            className: ov.DT,
            children: ["Application Id: ", t, " ", a ? aK.intl.string(aK.t.t5VZ88) : null],
        })
    );
}
let oy = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, d.bG)([aG.Ay], () => aG.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            n = (0, d.bG)([az.A], () => az.A.getGameForPID(t.pid)),
            l = (0, d.bG)([aG.Ay], () => (null == a ? null : aG.Ay.getGameOverlayStatus(a)));
        return (0, r.jsxs)("div", {
            className: ov.st,
            children: [
                (0, r.jsx)(A.E, { variant: "text-md/bold", color: "text-strong", children: t.gameName }),
                (0, r.jsx)(A.E, { variant: "text-sm/bold", color: "text-subtle", children: t.pid }),
                (0, r.jsx)(A.E, { variant: "text-sm/normal", color: "text-subtle", children: a?.exeName }),
                (0, r.jsxs)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["isLauncher: ", a?.isLauncher ? "Yes" : "No"],
                }),
                null != t.applicationId &&
                    (0, r.jsx)(A.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: (0, r.jsx)(of, { id: t.applicationId }),
                    }),
                (0, r.jsxs)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, os.wR)(t.fullscreenType)],
                }),
                (0, r.jsxs)(A.E, { variant: "text-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, r.jsxs)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, r.jsxs)("div", {
                    className: ov.st,
                    children: [
                        (0, r.jsxs)(A.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["source: ", t.source],
                        }),
                        (0, r.jsxs)(A.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(A.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(A.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["overlayMethod: ", (0, os.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != l &&
                    (0, r.jsxs)("div", {
                        className: ov.st,
                        children: [
                            (0, r.jsxs)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", l.source],
                            }),
                            (0, r.jsxs)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", l.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", l.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, os.gK)(l.overlayMethod)],
                            }),
                        ],
                    }),
                (0, r.jsxs)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hidden: ", a?.hidden ? "Yes" : "No"],
                }),
                (0, r.jsxs)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hook: ", n?.hook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", n?.overlay ? "Yes" : "No"],
                }),
                (0, r.jsxs)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlayCompatibilityHook: ", n?.overlayCompatibilityHook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["supportsOutOfProcessOverlay: ", n?.supportsOutOfProcessOverlay ? "Yes" : "No"],
                }),
            ],
        });
    }),
    o_ = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.cf)([om.default], () => om.default.getOverlayPIDStatuses()),
            n = (0, d.cf)([ol.default], () => ol.default.getTrackedGames()),
            l = (0, d.bG)([om.default], () => om.default.isInputLocked(t), [t]),
            s = (0, d.bG)([om.default], () => om.default.DEV_isInputLockedV3(t), [t]),
            i = (0, d.bG)([om.default], () => om.default.DEV_isInputLocked(t), [t]),
            o = (0, d.bG)([om.default], () => om.default.isReady(t), [t]);
        return (0, r.jsxs)("div", {
            className: ov.st,
            children: [
                (0, r.jsx)(A.E, { variant: "text-md/semibold", color: "text-strong", children: `${t}` }),
                (0, r.jsxs)(A.E, {
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
                (0, r.jsxs)(A.E, {
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
                (0, r.jsxs)(A.E, {
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
                (0, r.jsxs)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["Bridge Status: ", a.get(Number(t))],
                }),
                (0, r.jsxs)(A.E, { variant: "text-sm/normal", color: "text-strong", children: ["isInputLocked: ", l] }),
                (0, r.jsxs)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV3: ", s],
                }),
                (0, r.jsxs)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV2: ", i],
                }),
                (0, r.jsxs)(A.E, { variant: "text-sm/normal", color: "text-strong", children: ["isReady: ", o] }),
            ],
        });
    });
function oC(e) {
    let t,
        a = ((t = Object.values((0, d.yK)([oc.A], () => oc.A.getWidgetsForLayout(og.G)))), t.find((t) => t.type === e));
    return [
        a,
        () => {
            if (null != a) (0, r5.uv)(a.id);
            else {
                let t = oj[e];
                if (null == t) return;
                let a = t(og.G);
                (0, r5.jn)(a);
            }
        },
    ];
}
function oE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, nr.i$)(a5()(e), "h:mm:ss.SSS");
}
let oS = o.memo(function (e) {
    let { pid: t, ...a } = e,
        n = (0, d.bG)([ol.default], () => {
            if (null == t) return "Unknown";
            let e = ol.default.getTrackedGameByPid(t)?.gameName;
            return null != e ? ((ob[t] = e), e) : (ob[t] ?? "Unknown");
        }, [t]);
    return (0, r.jsx)(A.E, { ...a, variant: "text-md/semibold", color: "text-strong", children: n });
});
function oN() {
    let e = (0, d.bG)([or.A], () => or.A.hasRenderDebugMode(ot.x7.TrackFocusPIDs)),
        t = (0, d.yK)([ol.default], () => ol.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, r.jsxs)("div", {
        className: ov.st,
        children: [
            (0, r.jsxs)("div", {
                className: ov.Iv,
                children: [
                    (0, r.jsx)(j.d, {
                        checked: e,
                        onChange: () =>
                            void r9.A.setRenderDebugMode(
                                !or.A.hasRenderDebugMode(ot.x7.TrackFocusPIDs),
                                ot.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, r.jsx)(N.D, {
                        className: ov.LL,
                        onClick: () => r9.A.clearTrackedPids(),
                        children: (0, r.jsx)(nt.u, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(c.Ip, {
                className: S()(ov.st, ov.XG),
                children: [
                    0 === t.length &&
                        (0, r.jsx)(A.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, a, n] = e;
                        return (0, r.jsx)(
                            o.Fragment,
                            {
                                children: (0, r.jsx)(lM.m, {
                                    position: "left",
                                    text: n === ot.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(A.E, {
                                            variant: "text-sm/medium",
                                            color: n === ot.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, r.jsx)(oS, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                oE(t),
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
let oA = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.bG)([ol.default, aG.Ay], () => {
                if (null == t) return null;
                let e = ol.default.getTrackedGameByPid(t)?.fullscreenType;
                if (null != e) return e;
                let a = aG.Ay.getGameOrTransformedSubgameForPID(t);
                return a?.fullscreenType ?? lS.aI.UNKNOWN;
            }, [t]);
        return (0, r.jsxs)(A.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, os.wR)(a) : "Unknown"],
        });
    }),
    ok = o.memo(function () {
        let e = (0, d.cf)([ol.default], () => ol.default.getTrackedGames()),
            [t, a] = o.useState({}),
            n = o.useRef(null);
        return (
            o.useEffect(
                () => (
                    (n.current = setInterval(async () => {
                        let e = aG.Ay.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, os.E1)(a.pid, 0).then((e) => [a.pid, e, n]));
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
                    }, +n$.A.Millis.SECOND)),
                    () => clearInterval(n.current)
                ),
                [],
            ),
            (0, r.jsx)(lM.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(c.Ip, {
                        className: S()(ov.st, ov.XG),
                        children: [
                            0 === Object.keys(e).length &&
                                (0, r.jsx)(A.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: "No recent screen types",
                                }),
                            Object.values(e).map((e) =>
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, r.jsx)(oS, { tag: "div", pid: e.pid }),
                                            (0, r.jsx)(oA, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: n } = t;
                                                    return (0, r.jsx)(
                                                        A.E,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, os.wR)(a)} @ ${oE(n)}`,
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
    oI = o.memo(function () {
        let e = (0, d.cf)([ol.default], () => ol.default.getTrackedGames()),
            t = (0, op.getPID)(),
            a = (0, d.bG)([ol.default], () => ol.default.isOverlayOOPEnabledForPid(t), [t]),
            [n, l] = (0, d.yK)([od.A], () => [od.A.enabled, od.A.keepOpen]),
            s = (0, d.bG)([om.default], () => om.default.getFocusedPID()),
            i = (0, d.bG)([om.default], () => om.default.isFocusedPidOutOfProcess());
        return (0, r.jsxs)("div", {
            className: ov.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, r.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, r.jsx)(o_, { pid: e.pid }, e.pid)),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)(A.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["focusedPID: ", s?.toString() ?? "null"],
                        }),
                        (0, r.jsxs)(A.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isFocusedPidOutOfProcess: ", i ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(A.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["processPid: ", t?.toString() ?? "unknown"],
                        }),
                        (0, r.jsxs)(A.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isOOPEnabledForPid: ", a ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(A.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.enabled: ", n ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(A.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.keepOpen: ", l ? "Yes" : "No"],
                        }),
                    ],
                }),
            ],
        });
    }),
    oD = [
        {
            mode: ot.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: ot.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: ot.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: ot.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: ot.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: ot.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: ot.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    oT = o.memo(function () {
        let [e, t] = oC(H.uss.CLICK_ZONE_DEBUG),
            [a, n] = oC(H.uss.PERFORMANCE_DEBUG),
            l = (0, d.bG)([or.A], () => or.A.getRenderDebugModes()),
            [s, i] = o.useState({});
        return (
            o.useEffect(() => {
                let e = setInterval(() => {
                    i({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, r.jsx)("div", {
                className: ov.st,
                children: oD.map((s) => {
                    let i =
                            s.mode === ot.x7.OverlayRafManagerForceEnabled
                                ? `${s.label} (${oo.A.getLastRAFCallbackReason()})`
                                : s.label,
                        d = () =>
                            s.mode === ot.x7.ClickZones
                                ? null != e
                                : s.mode === ot.x7.WidgetAreas
                                  ? null != a
                                  : l.has(s.mode);
                    return (0, r.jsx)(
                        o.Fragment,
                        {
                            children: (0, r.jsx)(j.d, {
                                checked: d(),
                                onChange: () => {
                                    var e;
                                    let a = d();
                                    s.mode === ot.x7.ClickZones && t(),
                                        s.mode === ot.x7.WidgetAreas && n(),
                                        (e = s.mode),
                                        r9.A.setRenderDebugMode(!a, e);
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
    oO = o.memo(function () {
        let e = (0, d.cf)([ol.default], () => ol.default.getTrackedGames()),
            t = (0, d.bG)([aG.Ay], () => aG.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(lM.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: ov.st,
                                children: [
                                    (0, r.jsx)(A.E, {
                                        variant: "text-md/bold",
                                        color: "text-feedback-critical",
                                        children: "Untracked Running Games",
                                    }),
                                    t.map((e) =>
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(
                                                    A.E,
                                                    {
                                                        variant: "text-sm/normal",
                                                        color: "text-feedback-critical",
                                                        children: `${e.pid} - ${e.name} (${e.exeName})`,
                                                    },
                                                    e.pid,
                                                ),
                                                (0, r.jsx)(oA, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, r.jsx)(lM.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: ov.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, r.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, r.jsx)(oy, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    oR = o.memo(function () {
        let e = (0, d.bG)([ol.default], () => ol.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            n = [
                { label: ot.V6.UNSET, value: ot.V6.UNSET, id: ot.V6.UNSET },
                { label: ot.V6.IN_PROCESS_V2, value: ot.V6.IN_PROCESS_V2, id: ot.V6.IN_PROCESS_V2 },
                { label: ot.V6.OUT_OF_PROCESS_V3, value: ot.V6.OUT_OF_PROCESS_V3, id: ot.V6.OUT_OF_PROCESS_V3 },
                {
                    label: ot.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: ot.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: ot.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, r.jsx)(p.l, {
            label: "Override the overlay render mode",
            value: t,
            options: n,
            onSelectionChange: (e) => {
                a(e), r9.A.forceRenderMode(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function ow(e) {
    let { modalProps: t, onClose: a } = e,
        [n, l] = o.useState(null);
    function s() {
        a(null);
    }
    return (0, r.jsxs)(rZ.EO, {
        size: rZ.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, r.jsxs)(rZ.rQ, {
                align: r7.A.Align.CENTER,
                justify: r7.A.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(A.E, {
                        variant: "text-md/bold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, r.jsx)(rZ.s_, { onClick: s }),
                ],
            }),
            (0, r.jsx)(rZ.$m, {
                children: (0, r.jsx)("div", {
                    className: ov.st,
                    children: (0, r.jsx)(r0.f, { label: "Paste JSON Here", onChange: l, value: n ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(rZ.jl, {
                children: (0, r.jsxs)(lX.e, {
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
let oM = {
    native: { label: "Native", filter: (e) => e.type === oa.ON.NativeLegacy || e.type === oa.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === oa.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === oa.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === oa.ON.OOPModule || e.type === oa.ON.LegacyModule },
};
function oL(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : oa.QJ.Info;
    if (t === oa.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case oa.ON.NativeLegacy:
            return "var(--yellow-500)";
        case oa.ON.NativeOOP:
            return "var(--green-500)";
        case oa.ON.Flux:
            return "var(--brand-400)";
        case oa.ON.Renderer:
            return "var(--brand-500)";
        case oa.ON.LegacyModule:
            return "var(--yellow-300)";
        case oa.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let oP = [
    {
        key: "type",
        cellClassName: ov.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                n = oU(t);
            return (0, r.jsx)("div", {
                className: ov.g$,
                style: { color: oL(t, a) },
                children: (0, r.jsx)(n, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "name",
        cellClassName: ov.Cm,
        render(e) {
            let { name: t, type: a, logType: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(A.E, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case oa.QJ.Info:
                                    return "text-strong";
                                case oa.QJ.Warning:
                                    return "text-feedback-warning";
                                case oa.QJ.Error:
                                    return "text-feedback-critical";
                                default:
                                    return "text-subtle";
                            }
                        })(n),
                        children: t,
                    }),
                    (0, r.jsxs)(A.E, { variant: "text-sm/normal", color: "text-subtle", children: ["(", a, ")"] }),
                ],
            });
        },
    },
    {
        key: "timestamp",
        cellClassName: ov.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, nr.i$)(a5()(t), "h:mm:ss.SSS");
        },
    },
];
function oU(e) {
    switch (e) {
        case oa.ON.NativeLegacy:
            return r1.W;
        case oa.ON.NativeOOP:
            return r2.q;
        case oa.ON.Renderer:
        case oa.ON.Flux:
            return r8.v;
        case oa.ON.LegacyModule:
            return r3.k;
        case oa.ON.OOPModule:
            return r6.o;
        default:
            return r3.k;
    }
}
function oG(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let oB = ["__webpack_require__", "fn"],
    oF = ["web.js", "web.js.map"],
    oV = [
        {
            id: "details",
            name: "Details",
            group: aR.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: n, type: l, logType: s, nativeId: i, stack: o, data: d, timestamp: u, pid: m } = t,
                    h = a5()(u),
                    x = oU(l);
                return (0, r.jsxs)(c.Ar, {
                    className: ov.bW,
                    children: [
                        (0, r.jsxs)(oe.A, {
                            className: S()(tA.jr, ov.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: oL(l, s) },
                                    className: ov.nr,
                                    children: (0, r.jsx)(x, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(oe.A.Title, {
                                    wrapperClassName: ov.qd,
                                    children: [
                                        n,
                                        " (",
                                        l,
                                        ")",
                                        (0, r.jsx)(N.D, {
                                            tag: "span",
                                            className: ov.KE,
                                            onClick: () => (0, ni.C)(n),
                                            children: (0, r.jsx)(a4.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(oe.A.Icon, {
                                    icon: a4.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, ni.C)(oG(t));
                                    },
                                }),
                                (0, r.jsx)(oe.A.Icon, { icon: ne.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(nj, {
                            className: ov.ZK,
                            children: [
                                (0, r.jsx)(nb, {
                                    name: "Timestamp",
                                    copyValue: h.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: h.toISOString(),
                                        title: (0, nr.i$)(h, "LLLL"),
                                        children: (0, nr.i$)(h, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, r.jsx)(nb, {
                                    name: "Log Type",
                                    copyValue: s,
                                    children: (0, r.jsx)("code", { children: s }),
                                }),
                                (0, r.jsx)(nb, {
                                    name: "PID",
                                    copyValue: m?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: m?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nb, {
                                    name: "Native ID",
                                    copyValue: i?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: i?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nb, {
                                    name: "Data",
                                    copyValue: oG(d),
                                    children: (0, r.jsx)("code", { children: oG(d) }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nb, {
                                        name: "Stack Trace",
                                        copyValue: o,
                                        children: (0, r.jsx)("code", {
                                            children: o.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, n, l, s] = a,
                                                        i = n.split(/[\\/]/).pop();
                                                    return oB.includes(e.trim())
                                                        ? null
                                                        : (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, r.jsx)("span", {
                                                                          className: ov.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !oF.includes(i ?? "") &&
                                                                          (0, r.jsxs)(r.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, r.jsxs)("span", {
                                                                                      className: ov.lz,
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
    o$ = {
        searchType: nl.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: l } = e,
                s = [t, a, JSON.stringify(l)];
            return null != n && s.push(n), s;
        },
        throttleMs: 100,
    };
function oW() {
    let { ref: e, height: t } = (0, r4.Ay)(),
        a = (0, d.bG)([or.A], () => or.A.isModuleLoggingEnabled()),
        [n, l] = o.useState(a),
        [s, i] = o.useState(!1),
        [c, u] = o.useState(null),
        [m, h] = o.useState(Object.keys(oM)),
        [x, p] = (0, d.bG)([or.A], () => or.A.getOverlayLoggingBreadcrumbs(), [], oh.D),
        [g, v] = o.useState(null),
        j = g ?? x,
        b = null != g ? -1 : p;
    o.useEffect(() => {
        0 !== b &&
            (s
                ? u(j.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : u(null));
    }, [s, j, b]);
    let [f, y] = o.useState(""),
        _ = o.useMemo(
            () =>
                0 === b
                    ? []
                    : j.filter((e) => {
                          if (s && null != c && e.timestamp < c) return !1;
                          for (let t of m) {
                              let { filter: a } = oM[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [j, m, c, s, b],
        ),
        [C, E] = o.useState(_),
        [k, I] = o.useState(null),
        D = o.useMemo(() => j.find((e) => e.key === k), [j, k]),
        T = o.useCallback((e) => {
            E(e);
        }, []),
        { renderSelectedTab: O } = (0, aR.Ay)({ tabs: oV }, []);
    (0, ns.RT)(f, _, T, o$, [j]);
    let R = o.useCallback((e) => {
            l(e), r9.A.setModuleLogging(e);
        }, []),
        [w, M] = o.useState(!1),
        L = o.useRef(null),
        P = o.useCallback(() => {
            (0, ni.C)(JSON.stringify(_)), M(!0);
        }, [_]);
    o.useEffect(() => {
        if (w)
            return (
                (L.current = setTimeout(() => {
                    M(!1);
                }, 4e3)),
                () => {
                    null != L.current && clearTimeout(L.current);
                }
            );
    }, [w]);
    let U = o.useCallback((e) => {
            v(null != e ? JSON.parse(e) : null);
        }, []),
        G = o.useCallback(
            (e) => {
                if (e) return v(null);
                (0, ek.openModal)(
                    (e) =>
                        (0, r.jsx)(ow, {
                            modalProps: e,
                            onClose: (t) => {
                                U(t), e.onClose();
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    eD.SY,
                );
            },
            [U],
        );
    return (0, r.jsxs)("div", {
        ref: e,
        className: ov.rh,
        children: [
            (0, r.jsxs)("div", {
                className: ov.st,
                children: [
                    (0, r.jsxs)("div", {
                        className: S()(ov._V, ov.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: ov.iR,
                                children: (0, r.jsx)(rT.S, { label: "Poll Native", checked: n, onChange: (e) => R(e) }),
                            }),
                            (0, r.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: ov.iR,
                                children: (0, r.jsx)(rT.S, {
                                    label: "Only Active Games",
                                    checked: s,
                                    onChange: (e) => i(e),
                                }),
                            }),
                            (0, r.jsxs)(N.D, {
                                className: ov.ny,
                                onClick: P,
                                children: [
                                    (0, r.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: w ? "Copied" : "Copy All",
                                    }),
                                    w
                                        ? (0, r.jsx)(rU.A, { size: "sm", color: eI.A.unsafe_rawColors.GREEN_330.css })
                                        : (0, r.jsx)(a4.T, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(N.D, {
                                className: ov.ny,
                                onClick: () => G(null != g),
                                children: (0, r.jsx)(A.E, {
                                    variant: "text-sm/normal",
                                    color: "currentColor",
                                    children: null != g ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: S()(ov._V, ov.XQ),
                        children: Object.entries(oM).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                N.D,
                                {
                                    className: S()(ov.pb, m.includes(t) && ov.bx),
                                    onClick: () => {
                                        h((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: (0, r.jsx)(A.E, {
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
                        className: ov._V,
                        children: (0, r.jsx)(na.I, {
                            query: f,
                            onChange: y,
                            onClear: () => y(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: S()(ov.st, ov.CZ),
                children: (0, r.jsx)(tk, {
                    columns: oP,
                    data: C,
                    selectedRowKey: k ?? void 0,
                    onClickRow: (e) => I(e.key),
                }),
            }),
            null != D &&
                (0, r.jsx)(aO, {
                    className: S()(ov.st, ov.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: O({ breadcrumb: D, onClose: () => I(null) }),
                }),
        ],
    });
}
let oz = o.memo(function () {
        let e = (0, d.bG)([oi.A], () => oi.A.getPopoutInitializationStages());
        return (0, r.jsxs)("div", {
            className: ov.st,
            children: [
                (0, r.jsx)("div", {
                    className: ov.Iv,
                    children: (0, r.jsx)(A.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: "Popout Initialization Stages",
                    }),
                }),
                (0, r.jsx)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", { children: JSON.stringify(e, void 0, 2) }),
                }),
            ],
        });
    }),
    oH = o.memo(function () {
        let e = (0, d.bG)([or.A], () => or.A.isStateDebuggingEnabled()),
            t = (0, d.bG)([or.A], () => or.A.getDebuggingState());
        return (
            o.useEffect(
                () => (
                    r9.A.setStateDebugging(!0),
                    () => {
                        r9.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, r.jsxs)("div", {
                className: ov.st,
                children: [
                    (0, r.jsx)("div", {
                        className: ov.Iv,
                        children: (0, r.jsx)(j.d, {
                            checked: e,
                            onChange: () => r9.A.setStateDebugging(!e),
                            label: "Poll Native Module State",
                        }),
                    }),
                    (0, r.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: (0, r.jsx)("pre", { children: JSON.stringify(t, void 0, 2) }),
                    }),
                ],
            })
        );
    });
function oK() {
    return (0, r.jsx)(c.Ar, {
        children: (0, r.jsxs)("div", {
            className: S()(tA.nd, ov.rf),
            children: [
                (0, r.jsx)(oT, {}),
                (0, r.jsx)(oR, {}),
                (0, r.jsx)(oO, {}),
                (0, r.jsx)(oI, {}),
                (0, r.jsx)(oN, {}),
                (0, r.jsx)(ok, {}),
                (0, r.jsx)(oz, {}),
                (0, r.jsx)(oH, {}),
            ],
        }),
    });
}
let oY = (e) => {
        switch (e) {
            case "Disabled":
                return;
            case "False":
                return !1;
            case "True":
                return !0;
        }
    },
    oq = (e) => (null == e ? "Disabled" : e ? "True" : "False"),
    oJ = o.memo(function () {
        let e = (0, on.wW)(),
            t = (0, d.bG)([ou.Ay], () => ou.Ay.getOverlayKeybind());
        return (0, r.jsxs)("div", {
            className: ov.st,
            children: [
                (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
                (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Experiment State" }),
                (0, r.jsx)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", {
                        children: JSON.stringify({ ...e, overlayKeybind: (0, ox.dI)(t.shortcut) }, void 0, 2),
                    }),
                }),
                (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Overrides" }),
                (0, r.jsx)(p.l, {
                    label: "Overlay User Status",
                    description: "Override whether the current user was a new or existing user",
                    value: oq(e.overrideIsNewOverlayUser),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Existing user", value: "False", id: "False" },
                        { label: "New user", value: "True", id: "True" },
                    ],
                    onSelectionChange: (e) => {
                        (0, on.sw)(oY(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(p.l, {
                    label: "Override Previous Keybind Status",
                    description: "Override whether the user's pre-experiment keybind was the default keybind",
                    value: oq(e.overrideIsUsingDefaultOverlayKeybind),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Using default keybind", value: "True", id: "True" },
                        { label: "Not using default keybind", value: "False", id: "False" },
                    ],
                    onSelectionChange: (e) => {
                        (0, on.C3)(oY(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Actions" }),
                (0, r.jsx)(x.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, on.xc)() }),
                (0, r.jsx)(x.$, {
                    size: "sm",
                    text: "Reset isUsingDefaultOverlayKeybind",
                    onClick: () => (0, on.tM)(),
                }),
            ],
        });
    });
function oQ() {
    return (0, r.jsx)(c.Ar, {
        children: (0, r.jsx)("div", { className: S()(tA.nd, ov.rf), children: (0, r.jsx)(oJ, {}) }),
    });
}
function oX() {
    let [e, t] = o.useState("state");
    return (
        o.useEffect(
            () => (
                tC.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !0 }),
                () => {
                    tC.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !1 });
                }
            ),
            [],
        ),
        (0, r.jsxs)("div", {
            className: S()(tA.nd, ov.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: ov._V,
                    children: [
                        (0, r.jsx)(N.D, {
                            className: S()(ov.k0, "state" === e && ov.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(A.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(N.D, {
                            className: S()(ov.k0, "logging" === e && ov.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(A.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(N.D, {
                            className: S()(ov.k0, "experiments" === e && ov.a),
                            onClick: () => t("experiments"),
                            children: (0, r.jsx)(A.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, r.jsx)(oK, {}),
                "logging" === e && (0, r.jsx)(oW, {}),
                "experiments" === e && (0, r.jsx)(oQ, {}),
            ],
        })
    );
}
var oZ = a(488428),
    o0 = a(73825),
    o1 = a(753390),
    o2 = a(622207),
    o8 = a(944304),
    o3 = a(300233),
    o6 = a(599941),
    o5 = a(817649),
    o9 = a(4630),
    o4 = a(44120),
    o7 = a(532794),
    de = a(216678),
    dt = a(194509),
    da = a(761705),
    dn = a(65738),
    dl = a(265768);
function ds(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, o6.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, r.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(o5.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let di = function () {
    let [e, t] = o.useState(l7.pe.TIER_2),
        [a, n] = o.useState(null),
        l = (0, d.yK)([a$.A], () => a$.A.getGuildsArray()),
        [s] = (0, d.yK)([rR.A], () => [rR.A.getPremiumSubscription()]),
        i = l.map((e) => ({ id: e.id, value: e, label: e.name })),
        [u, h] = o.useState(i.length > 0 ? i[0].value : null),
        [j, b] = o.useState(""),
        [f, y] = o.useState({ plan_id: l7.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        _ = "true" !== f.gift && null != s,
        [C, E] = o.useState(i.length > 0 ? i[0].value : null),
        { analyticsLocations: S } = (0, aM.Ay)(to.A.PAYMENT_FLOW_TEST_PAGE),
        [N, k] = o.useState(""),
        [D, T] = o.useState(H.dJq),
        { balance: O, isFetching: R, error: w } = (0, da.W)(),
        { isSubmitting: M, responseMessage: L, redeemVirtualCurrency: P } = (0, da.Q)(),
        [U, G] = o.useState(H.dJq),
        [B, F] = o.useState(""),
        [V, $] = o.useState(H.dJq),
        [W, z] = o.useState(H.dJq);
    return (0, r.jsx)(aM.f5, {
        value: S,
        children: (0, r.jsx)(c.Ip, {
            className: dl.XG,
            children: (0, r.jsxs)(I.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, r.jsxs)(I.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(p.l, {
                                label: "Gift",
                                value: e,
                                options: [
                                    { id: "tier_2", value: l7.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: l7.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: l7.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(dt.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: a9.XD.PRIMARY,
                                look: a9.pR.FILLED,
                            }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(I.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(p.l, {
                                label: "Premium Select Plan",
                                value: a,
                                options: [
                                    { id: "tier_2", value: l7.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: l7.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: l7.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => n(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, o7.A)({ subscriptionTier: a, analyticsLocations: S }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(I.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(p.l, {
                                label: "Boost",
                                value: u,
                                options: i,
                                onSelectionChange: (e) => h(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            null != u
                                ? (0, r.jsx)(o8.A, { guild: u, analyticsLocation: {} })
                                : (0, r.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(I.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(il.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, r.jsxs)(I.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(g.k, {
                                        label: "Standalone: Trial Promotion Redemption",
                                        placeholder: "Promotion Code",
                                        value: j,
                                        onChange: (e) => b(e),
                                    }),
                                    (0, r.jsx)(lM.m, {
                                        text: "Need Promotion Code",
                                        shouldShow: j.length < 1,
                                        children: (0, r.jsx)(x.$, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: j.length < 1,
                                            onClick: () => {
                                                window.open(H.BVt.BILLING_PROMOTION_REDEMPTION(j));
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(m.n, {
                        label: "Standalone: Gift/Subscription Purchase",
                        children: [
                            (0, r.jsx)(p.l, {
                                label: "Plan",
                                value: f.plan_id,
                                options: [
                                    { id: "tier_2", value: l7.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: l7.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: l7.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
                                ],
                                onSelectionChange: (e) => {
                                    y((t) => ({ ...t, plan_id: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(p.l, {
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
                    (0, r.jsx)(lM.m, {
                        text: "Already subscribed",
                        shouldShow: _,
                        children: (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: _,
                            onClick: () => {
                                window.open(H.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + oZ.stringify({ ...f }));
                            },
                        }),
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(m.n, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, r.jsxs)(I.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    R
                                        ? (0, r.jsx)("div", {
                                              className: dl.wG,
                                              children: (0, r.jsx)(eZ.y, { type: eZ.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: dl.dB,
                                              children: [
                                                  null !== w &&
                                                      (0, r.jsxs)(A.E, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              w.message,
                                                          ],
                                                      }),
                                                  (0, r.jsx)(dn.Gy, {
                                                      balance: O ?? 0,
                                                      balanceWidgetMode: dn.k7.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsx)(g.k, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: U,
                                onChange: (e) => G(e),
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: M,
                                onClick: () => P(U, (0, ex.A)()),
                            }),
                            null != L && (0, r.jsx)(A.E, { variant: "text-sm/normal", children: L }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(m.n, {
                        label: "Creator Revenue",
                        children: [
                            (0, r.jsx)(p.l, {
                                label: "Premium Server Subscription For",
                                value: C,
                                options: i,
                                onSelectionChange: (e) => E(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(o3.H, {
                                guildId: C?.id,
                                children: (0, r.jsx)(ds, { selectedGuildForGuildSub: C }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(I.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsxs)(m.n, {
                                label: "Activities & Application Payment Modals",
                                children: [
                                    (0, r.jsx)(g.k, {
                                        label: "Application Id",
                                        placeholder: "Application Id",
                                        value: N,
                                        onChange: k,
                                    }),
                                    (0, r.jsx)(g.k, {
                                        label: "Sku Id",
                                        placeholder: "Sku Id",
                                        value: D,
                                        onChange: (e) => T(e),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, o9.openIAPPurchaseModal)({
                                        applicationId: N,
                                        skuId: D,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: H.liQ.IN_APP },
                                        context: H.BRT.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsx)(I.B, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, r.jsx)(m.n, {
                            label: "Standard Payment Modal Test",
                            children: (0, r.jsxs)(I.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(g.k, {
                                        label: "Application Id",
                                        hideLabel: !0,
                                        placeholder: "Application Id",
                                        value: B,
                                        onChange: F,
                                    }),
                                    (0, r.jsx)(g.k, {
                                        label: "SKU ID",
                                        hideLabel: !0,
                                        placeholder: "SKU ID",
                                        value: V,
                                        onChange: (e) => $(e),
                                    }),
                                    (0, r.jsx)(x.$, {
                                        variant: "primary",
                                        text: "Open Standard Payment Modal for SKU",
                                        onClick: () =>
                                            (0, de.A)({
                                                applicationId: B,
                                                skuId: V,
                                                analyticsLocations: S,
                                                checkoutFlow: o2.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(I.B, {
                        direction: "horizontal",
                        align: "end",
                        gap: 8,
                        children: [
                            (0, r.jsx)(g.k, {
                                label: "Collectibles Payment Modal Test",
                                placeholder: "SKU ID",
                                value: W,
                                onChange: (e) => z(e),
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () => (0, o4.A)({ skuId: W, analyticsLocations: S }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsx)(m.n, {
                        label: "Helpers",
                        children: (0, r.jsxs)(I.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, o0.YG)(),
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, o1.uZ)(),
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsx)(m.n, {
                        label: "Dismissible Content Framework",
                        children: (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Reset DismissibleContentFrameworkStore",
                            onClick: () => (0, lt.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var dr = a(219887),
    dd = a(459357),
    dc = a(885180),
    du = a(742810),
    dm = a(500380),
    dh = a(102609),
    dx = a(710195),
    dp = a(211287),
    dg = a(295405),
    dv = a(188976);
let dj = [
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
    db = {
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
    df = [
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
    dy = {
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
    d_ = [
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
    dC = {
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
function dE() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        [i, d] = o.useState(null),
        [u, m] = o.useState(null),
        [h, g] = o.useState("pm_card_us"),
        [v, j] = o.useState(!1),
        b = Object.values((0, tr.bG)([dg.A], () => dg.A.paymentSources)),
        f = db[e],
        y = async () => {
            let t = h;
            "" === t && (t = "pm_card_us"),
                await nF.Bo.post({
                    url: "/debug/payment-source",
                    body: { token: t, address: "US" === e ? l : "CA" === e ? u : null },
                    rejectWithError: !1,
                }),
                await (0, o1.$o)();
        },
        _ = async () => {
            await nF.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }), await (0, o1.$o)();
        },
        C = async () => {
            await nF.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }), window.location.reload();
        };
    return (
        o.useEffect(() => {
            (0, o1.$o)();
        }, []),
        (0, r.jsx)(c.Ip, {
            className: tA.nd,
            children: (0, r.jsxs)("div", {
                className: si.l$,
                children: [
                    (0, r.jsxs)(A.E, {
                        style: { marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, r.jsxs)("div", {
                        className: si.Uo,
                        children: [
                            (0, r.jsx)(tQ.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: dj
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, r.jsx)("img", {
                                                alt: "",
                                                className: dv.bI,
                                                src: (0, dm.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: (e) => {
                                    t(e), g(db[e][0].value), j(1 === db[e].length);
                                },
                            }),
                            "US" === e &&
                                (0, r.jsx)(p.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: df.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        n(e), s(dy[e] ?? null);
                                    },
                                }),
                            "CA" === e &&
                                (0, r.jsx)(p.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: i,
                                    options: d_.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        d(e), m(dC[e] ?? null);
                                    },
                                }),
                            (0, r.jsx)(p.l, {
                                selectionMode: "single",
                                label: "Card Token",
                                hideLabel: !0,
                                value: h,
                                options: f.map((e) => {
                                    let { value: t, label: a } = e;
                                    return { id: t, value: t, label: a };
                                }),
                                onSelectionChange: g,
                                disabled: v,
                            }),
                            (0, r.jsx)(x.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Create Stripe Credit Card",
                                onClick: y,
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
                    (0, r.jsx)(A.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Generate Gift Card PIN",
                    }),
                    (0, r.jsx)(dw, {}),
                    (0, r.jsx)(A.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Experiment Overrides",
                    }),
                    (0, r.jsx)(dT, {}),
                    (0, r.jsx)(A.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Existing Payment Sources",
                    }),
                    b.map((e) => (0, r.jsx)(dM, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let dS = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    dN = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Legacy checkout" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Unified checkout" },
    ],
    dA = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Gift cards enabled" },
    ],
    dk = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Payment elements disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Payment elements enabled" },
    ],
    dI = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Orb redemption via legacy" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Orb redemption via orders" },
    ];
function dD(e) {
    let { experimentName: t, options: a = dS } = e,
        n = (0, tr.bG)([dx.A, nd.default], () => {
            let e = nd.default.getId(),
                a = dx.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        l = o.useCallback(
            (e) => {
                (0, dh.t$)(dh.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, r.jsx)(p.l, { selectionMode: "single", label: t, value: n, options: [...a], onSelectionChange: l });
}
function dT() {
    return (0, r.jsxs)(I.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(dD, { experimentName: du.W2.definition.name, options: dN }),
            (0, r.jsx)(dD, { experimentName: du._$.definition.name, options: dN }),
            (0, r.jsx)(dD, { experimentName: dd.A.definition.name, options: dA }),
            (0, r.jsx)(dD, { experimentName: dc._.definition.name, options: dk }),
            (0, r.jsx)(dD, { experimentName: dp.A.definition.name, options: dI }),
        ],
    });
}
let dO = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    dR = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function dw() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState("500"),
        [l, s] = o.useState(null),
        [i, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [m, h] = o.useState(null),
        v = parseInt(a, 10),
        j = !isNaN(v) && v >= 500 && v <= 5e3,
        b = async () => {
            if (j) {
                d(!0), h(null), s(null), u(!1);
                try {
                    let t = await nF.Bo.post({
                        url: "/billing/gift-card/create-on-demand-pin",
                        body: { country: e, currency: dR[e], amount: v },
                        rejectWithError: !0,
                    });
                    s(t.body.pin);
                } catch (e) {
                    h(e instanceof Error ? e.message : "Failed to generate PIN");
                } finally {
                    d(!1);
                }
            }
        };
    return (0, r.jsxs)(I.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsxs)(I.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, r.jsx)(p.l, {
                        selectionMode: "single",
                        label: "Gift Card Country",
                        value: e,
                        options: dO,
                        onSelectionChange: t,
                    }),
                    (0, r.jsx)(g.k, {
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
                        onClick: b,
                        loading: i,
                        disabled: !j,
                    }),
                ],
            }),
            null != l &&
                (0, r.jsxs)(I.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(g.k, { label: "Generated PIN", value: l, onChange: () => {}, readOnly: !0 }),
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
            null != m && (0, r.jsx)(k.w, { type: "critical", children: m }),
        ],
    });
}
function dM(e) {
    let { paymentSource: t } = e,
        a = async () => {
            await nF.Bo.patch({ url: H.Rsh.BILLING_PAYMENT_SOURCE(t.id), body: { default: !0 }, rejectWithError: !1 }),
                await (0, o1.$o)();
        };
    return (0, r.jsxs)("div", {
        className: si.bd,
        children: [
            (0, r.jsx)(dr.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, r.jsx)("img", { alt: t.country, className: dv.bI, src: (0, dm.t)(t.country) }),
            t.isDefault
                ? (0, r.jsx)(A.E, { variant: "text-sm/medium", children: "(Default)" })
                : (0, r.jsx)(x.$, { variant: "secondary", size: "sm", text: "Set as Default", onClick: a }),
        ],
    });
}
var dL = a(706712),
    dP = a(367727),
    dU = a(845886);
function dG() {
    return (0, r.jsx)(c.Ip, { className: dU.kL, children: (0, r.jsx)(dB, {}) });
}
function dB() {
    let e = o.useCallback(() => {
            (0, lx._N)(n2.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, dP.FZ)(n2.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(T.D, { className: dU.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, r.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, r.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, r.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, r.jsx)("div", {
                className: dU.PW,
                children: (0, r.jsx)(x.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var dF = a(136722),
    dV = a(576705),
    d$ = a(309010),
    dW = a(558393),
    dz = a(719366),
    dH = a(842681);
function dK(e) {
    let { title: t, can: a } = e,
        n = a ? rU.A : L.P,
        l = (0, r.jsx)("div", {
            className: S()(dH.v_, a ? dH.uU : dH.Ss),
            children: (0, r.jsx)(n, { className: dH.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: dH.z8,
        children: [
            l,
            (0, r.jsx)("div", {
                className: dH.rv,
                children: (0, r.jsx)(A.E, { variant: "text-md/normal", children: t }),
            }),
        ],
    });
}
function dY() {
    let e = (0, d.bG)([d$.A], () => d$.A.getChannelId()),
        t = (0, d.bG)([aW.A], () => aW.A.getGuildId()),
        a = (0, d.bG)([t9.A], () => t9.A.getChannel(e)),
        n = (0, d.bG)([a$.A], () => a$.A.getGuild(t)),
        l = (0, d.bG)([dV.A], () => dV.A.computePermissions(a)),
        s = (0, d.bG)([dV.A], () => dV.A.computePermissions(n)),
        i = (0, t5.Ay)(a, !0),
        o = null != a ? (0, dz.mW)(a, !1) : null,
        c = null != n ? dW.A.getGuildPermissionSpecMap(n) : null,
        u = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = dF.zy(l, a);
            return (0, r.jsx)(dK, { title: t, can: n }, t);
        }),
        m = Object.values(c ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = dF.zy(s, a);
            return (0, r.jsx)(dK, { title: t, can: n }, t);
        });
    return (0, r.jsx)("div", {
        className: S()(tA.nd, dH.nd),
        children: (0, r.jsxs)("div", {
            className: dH.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: dH.uW,
                    children: [
                        (0, r.jsx)(T.D, {
                            variant: "heading-md/semibold",
                            children: null != i ? `Permissions in ${i}` : "No channel selected",
                        }),
                        u,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: dH.uW,
                    children: [
                        (0, r.jsx)(T.D, {
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
var dq = a(873298),
    dJ = a(775602),
    dQ = a(363195),
    dX = a(885386),
    dZ = a(631670),
    d0 = a(817281),
    d1 = a(955572),
    d2 = a(56348),
    d8 = a(385803),
    d3 = a(381941);
let d6 = [H.NJ8.DARK, H.NJ8.LIGHT, H.NJ8.DARKER, H.NJ8.MIDNIGHT],
    d5 = [dq.NS.COMPACT, dq.NS.COZY, dq.NS.DEFAULT];
function d9(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function d4() {
    let e,
        t =
            ((e = V.default.getCurrentUser()),
            r$.Ay.canUseClientThemes(e) ? Object.keys(d8.ag).map((e) => Number(e)) : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                n = d9(a);
            if (null != n) {
                let t = d8.ag[n];
                e = t?.theme ?? H.NJ8.DARK;
            } else e = d9([H.NJ8.DARK, H.NJ8.DARKER, H.NJ8.MIDNIGHT]);
            await d0.u_(
                { theme: e, backgroundGradientPresetId: n ?? void 0, customUserThemeSettings: void 0 },
                lx.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = d9(d6);
            await d0.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                lx.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function d7() {
    let e = tc.A.purchases,
        t = (0, ev.x9)(e),
        a = (0, ev.$W)(e),
        n = t.length > 0,
        l = a.length > 0;
    if (n || l)
        try {
            let e = {};
            n && (e.avatarDecoration = d9([...t, null])), l && (e.nameplate = d9([...a, null])), (0, e6.p)(e);
            let s = e5.A.getPendingChanges(),
                i = (0, d2.Sk)(s);
            await (0, dZ._L)(i).finally(dZ.pZ);
        } catch (e) {}
}
function ce() {
    try {
        let e = d9(H.hH7.FONT_SIZES);
        (0, d1.XS)(e);
        let t = d9(d3.qh);
        (0, d1.AC)(t);
        let a = d9(d5);
        dX.Xi.updateSetting(a);
    } catch (e) {}
}
function ct() {
    (0, e7.Bf)();
    let e = (0, d.bG)([V.default], () => V.default.getCurrentUser()),
        t = dX.eh.useSetting(),
        a = (0, d.bG)([dQ.A], () => dQ.A.theme),
        n = t.backgroundGradientPresetId,
        l = (0, d.bG)([tc.A], () => tc.A.purchases),
        s = (0, ev.x9)(l),
        i = (0, ev.$W)(l),
        c = e?.avatarDecoration?.skuId,
        u = e?.collectibles?.nameplate?.skuId,
        m = null != c ? (s.find((e) => e.skuId === c) ?? null) : null,
        h = null != u ? (i.find((e) => e.skuId === u) ?? null) : null,
        p = (0, d.bG)([td.A], () => td.A.getProduct(m?.skuId)),
        g = (0, d.bG)([td.A], () => td.A.getProduct(h?.skuId)),
        v = (0, d.bG)([dJ.A], () => dJ.A.fontSize),
        j = (0, d.bG)([dJ.A], () => dJ.A.messageGroupSpacing),
        b = dX.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = V.default.getCurrentUser(),
                t = dX.eh.getSetting(),
                a = tc.A.purchases,
                n = (0, ev.x9)(a),
                l = (0, ev.$W)(a),
                s = dQ.A.theme,
                i = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (n.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (l.find((e) => e.skuId === o) ?? null) : null,
                u = dJ.A.fontSize,
                m = dJ.A.messageGroupSpacing,
                h = dX.Xi.getSetting();
            return () => {
                try {
                    d0.u_(
                        { theme: s, backgroundGradientPresetId: i ?? void 0, customUserThemeSettings: void 0 },
                        lx.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, e6.p)({ avatarDecoration: d, nameplate: c });
                    let e = e5.A.getPendingChanges(),
                        t = (0, d2.Sk)(e);
                    (0, dZ._L)(t).finally(dZ.pZ), (0, d1.XS)(u), (0, d1.AC)(m), dX.Xi.updateSetting(h);
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: lb.kL,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(T.D, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, r.jsx)(A.E, {
                            variant: "text-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, r.jsx)(x.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: d4 }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: d7,
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: ce,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, r.jsxs)(A.E, { variant: "text-md/normal", children: ["Theme: ", a] }),
                        (0, r.jsxs)(A.E, {
                            variant: "text-md/normal",
                            children: ["Client Theme ID:", " ", null != n ? d8.ag[n]?.getName() : "None"],
                        }),
                        (0, r.jsxs)(A.E, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", p?.name ?? "None"],
                        }),
                        (0, r.jsxs)(A.E, { variant: "text-md/normal", children: ["Nameplate: ", g?.name ?? "None"] }),
                        (0, r.jsxs)(A.E, { variant: "text-md/normal", children: ["Font Size: ", v, "px"] }),
                        (0, r.jsxs)(A.E, { variant: "text-md/normal", children: ["Message Spacing: ", j] }),
                        (0, r.jsxs)(A.E, {
                            variant: "text-md/normal",
                            children: [
                                "UI Density: ",
                                b,
                                " (",
                                (function (e) {
                                    switch (e) {
                                        case dq.NS.COMPACT:
                                            return "Compact";
                                        case dq.NS.COZY:
                                            return "Cozy";
                                        case dq.NS.DEFAULT:
                                            return "Default";
                                        case dq.NS.RESPONSIVE:
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
var ca = a(885574),
    cn = a(311678),
    cl = a(508274),
    cs = a(837529);
let ci = [5793266, 2303016],
    cr = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function co() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: n } = (0, cs.Zt)(),
        l = (0, J.Ay)(),
        s = (0, d.bG)([lr.A], () => lr.A.settings.appearance?.clientThemeSettings),
        i =
            s?.customUserThemeSettings != null &&
            null != s.customUserThemeSettings.colors &&
            s.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, d0.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), n(null));
    }
    return (0, r.jsx)(c.Ar, {
        children: (0, r.jsxs)(I.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(cn.N, {
                            collapsibleContent: (0, r.jsxs)(I.B, {
                                gap: 8,
                                padding: 4,
                                children: [
                                    (0, r.jsx)(A.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "This panel allows you to override the theme and theme colors that are used when rendering user profiles. The overrides you set here will apply to all user profiles, not just your own.",
                                    }),
                                    (0, r.jsx)(A.E, {
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
                                    icon: ca.m,
                                    onClick: t,
                                });
                            },
                        }),
                        (0, r.jsx)(v.c, {}),
                    ],
                }),
                null == e
                    ? (0, r.jsx)(x.$, {
                          variant: "primary",
                          text: "Enable Theme Override",
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: ci }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(lX.e, {
                                  children: (0, r.jsx)(x.$, {
                                      variant: "critical-primary",
                                      text: "Clear Theme Override",
                                      onClick: function () {
                                          o(), t(null);
                                      },
                                  }),
                              }),
                              (0, r.jsx)(p.l, {
                                  label: "Profile Type",
                                  selectionMode: "single",
                                  value: e.mode,
                                  options: cr,
                                  onSelectionChange: (a) => t({ ...e, mode: a }),
                              }),
                              "nitro" === e.mode
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(j.d, {
                                                label: "Disable Banner",
                                                checked: !0 === e.disableBanner,
                                                onChange: (a) => t({ ...e, disableBanner: a }),
                                            }),
                                            (0, r.jsx)(x.$, {
                                                variant: "secondary",
                                                text: "Reset Colors",
                                                onClick: () => t({ ...e, themeColors: ci }),
                                            }),
                                            (0, r.jsxs)(I.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(A.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, r.jsx)(cl.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[0] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [a, e.themeColors?.[1] ?? null] }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)(I.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(A.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Secondary Color",
                                                    }),
                                                    (0, r.jsx)(cl.VN, {
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
                                  : (0, r.jsxs)(I.B, {
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(p.l, {
                                                label: "Theme Type",
                                                selectionMode: "single",
                                                value: e.themeType,
                                                options: Object.values(H.NJ8).map((e) => ({
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
                                                        (0, r.jsx)(A.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-feedback-warning",
                                                            children:
                                                                "You have an active custom theme so setting a theme type does nothing.",
                                                        }),
                                                        (0, r.jsx)(A.E, {
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
                                                                    (0, d0.u_)({ theme: "system" });
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            null != a &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(A.E, {
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
var cd = a(141931),
    cc = a(306173),
    cu = a(587626),
    cm = a(237984),
    ch = a(43203),
    cx = a(349435),
    cp = a(674272),
    cg = a(466034),
    cv = a(10094),
    cj = a(683760);
let cb = () => {
    let e = (0, d.bG)([V.default], () => V.default.getCurrentUser()),
        t = (0, d.bG)([cj.A], () => {
            let e = cj.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, d.bG)([cj.A], () => cj.A.getPremiumTypeOverride());
    return (0, r.jsxs)(I.B, {
        gap: 16,
        children: [
            (0, r.jsx)(p.l, {
                label: "Override Client-Side Premium Type",
                options: l7.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, cv.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(lC.Q, {
                onClick: () => {
                    (0, cv.O)(l7.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(s5.J, {
                label: "Override Client-Side Account Created At Date",
                value: a5()(t),
                onSelect: (e) => {
                    var t;
                    return (t = e.toISOString()), void (0, cv.Y)(new Date(t));
                },
            }),
            (0, r.jsx)(lC.Q, { onClick: () => (0, cv.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
};
var cf = a(19575),
    cy = a(327337),
    c_ = a(431804),
    cC = a(865349),
    cE = a(818050);
function cS() {
    throw Error("Send help");
}
function cN() {
    let e = dX.j0.useSetting(),
        [t, n] = o.useState(!1);
    return t
        ? {}
        : (0, r.jsxs)(c.Ip, {
              children: [
                  (0, r.jsx)("div", { className: S()(cC.N, cE.SX), children: (0, r.jsx)(cb, {}) }),
                  (0, r.jsx)("div", {
                      className: S()(cC.N, cE.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, cp.A)({ source: c_.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: S()(cC.N, cE.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = d$.A.getChannelId() ?? "21154681615024128"),
                                  void (0, ek.openModalLazy)(
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
                                                  warningType: cx._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: cy.V },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: S()(cC.N, cE.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () =>
                              void (0, ek.openModalLazy)(
                                  async () => {
                                      let { default: e } = await a.e("17724").then(a.bind(a, 563255));
                                      return (t) => (0, r.jsx)(e, { ...t });
                                  },
                                  { onCloseCallback: void 0 },
                              ),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: S()(cC.N, cE.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, ch.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: S()(cC.N, cE.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: cc.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: S()(cC.N, cE.QB),
                      children: (0, r.jsx)(x.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = cu.A.getSocket();
                              tC.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: S()(cC.N, cE.QB),
                      children: (0, r.jsx)(j.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => dX.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: S()(cC.N, cE.QB),
                      children: [
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, cm.o)(),
                          }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  cu.A.getSocket().close(), cu.A.getSocket().connect();
                              },
                          }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Clear Caches",
                              onClick: () => {
                                  tC.h.dispatch({
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
                              onClick: () => (0, cg.sy)(!0),
                          }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: () => {
                                  nF.Bo.post({ url: H.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: S()(cC.N, cE.QB),
                      children: [
                          (0, r.jsx)(p.l, {
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
                              onSelectionChange: (e) => null != e && cf.Ay.crash(e),
                          }),
                          (0, r.jsx)(p.l, {
                              label: "Trigger JS crash",
                              hideLabel: !0,
                              selectionMode: "single",
                              value: void 0,
                              options: [
                                  { label: "Native JS crash", value: void 0, id: "native_js_crash" },
                                  {
                                      label: "Delayed exception in renderer process",
                                      value: cd.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: cd.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: cd.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void cf.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, r.jsx)(x.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => n(!0),
                          }),
                          (0, r.jsx)(x.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: cS }),
                      ],
                  }),
              ],
          });
}
var cA = a(593924),
    ck = a(653887),
    cI = a(105596);
function cD() {
    let e = Object.keys(cA).map((e) => (0, r.jsx)(cR, { riveName: e }, e));
    return (0, r.jsx)(c.Ar, {
        style: { maxHeight: "100%" },
        children: (0, r.jsxs)(I.B, {
            gap: 24,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsx)(T.D, { variant: "heading-lg/medium", children: "Rive Inspector" }),
                (0, r.jsx)(A.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, r.jsx)(cT, {}),
                (0, r.jsx)(T.D, { variant: "heading-lg/medium", children: "Rive Overrides" }),
                (0, r.jsx)(A.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to replace an existing Rive animation in the app with the new one. Useful for previewing updated versions of existing animations before uploading them via the Rive pipeline.",
                }),
                e,
            ],
        }),
    });
}
function cT() {
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
        v = o.useCallback(
            (e, t) => {
                null != a && n((a) => ({ ...a, [e]: { type: l?.[e]?.type, value: t } }));
            },
            [l, a],
        ),
        j = o.useCallback((e) => {
            s(null), n(null), t(e);
        }, []);
    return (0, r.jsxs)(I.B, {
        gap: 16,
        children: [
            (0, r.jsx)(cR, { riveName: "Rive inspector", onRiveLoad: j }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(ck._, { src: e, ref: c, onLoad: p, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, r.jsx)(eZ.y, {}) : null,
            null != a &&
                (0, r.jsxs)(I.B, {
                    children: [
                        (0, r.jsxs)(I.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(T.D, { variant: "heading-lg/medium", children: "Dimensions" }),
                                (0, r.jsx)(g.k, {
                                    type: "number",
                                    label: "width",
                                    value: u.toString(),
                                    onChange: (e) => m(parseInt(e)),
                                }),
                                (0, r.jsx)(g.k, {
                                    type: "number",
                                    label: "height",
                                    value: h.toString(),
                                    onChange: (e) => x(parseInt(e)),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(I.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(T.D, { variant: "heading-lg/medium", children: "Data Binding" }),
                                Object.keys(l ?? {}).map((e) =>
                                    (0, r.jsx)(
                                        cO,
                                        {
                                            property: e,
                                            type: l?.[e]?.type,
                                            value: a?.[e]?.value ?? l?.[e]?.value,
                                            onChange: (t) => v(e, t),
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
function cO(e) {
    let { property: t, type: a, value: n, onChange: l, artboards: s } = e;
    return "string" === a
        ? (0, r.jsx)(g.k, { label: t, value: n, onChange: (e) => l(e) })
        : "number" === a
          ? (0, r.jsx)(g.k, { type: "number", label: t, value: n, onChange: (e) => l(parseInt(e)) })
          : "boolean" === a
            ? (0, r.jsx)(j.d, { label: t, checked: n, onChange: (e) => l(e) })
            : "trigger" === a
              ? (0, r.jsx)(x.$, { text: `Trigger ${t}`, onClick: () => l(Number.isSafeInteger(n) ? n + 1 : 1) })
              : "image" === a
                ? (0, r.jsx)(g.k, { label: t, value: n, onChange: (e) => l(e) })
                : "color" === a
                  ? (0, r.jsx)(tQ.Z, {
                        selectionMode: "single",
                        label: t,
                        value: n,
                        onSelectionChange: (e) => l(e),
                        closeOnSelect: !0,
                        placeholder: "Select a color...",
                        options: Object.entries(eI.A.colors).map((e) => {
                            let [t, a] = e;
                            return { label: t, value: a, id: t };
                        }),
                    })
                  : "artboard" === a
                    ? (0, r.jsx)(tQ.Z, {
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
function cR(e) {
    let { riveName: t, onRiveLoad: a } = e,
        n = cA[t]?.riveSrc,
        l = null == n,
        s = o.useRef(null),
        i = (0, cI.Gy)(n);
    return (0, r.jsxs)(
        I.B,
        {
            gap: 8,
            children: [
                (0, r.jsx)("label", { children: t }),
                (0, r.jsxs)(I.B, {
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
                                    null != n && (0, cI.DS)(n, t), a?.(t);
                                }),
                                    l.readAsArrayBuffer(t);
                            },
                            ref: s,
                        }),
                        (0, r.jsx)(eS.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: () => {
                                null != s.current && (s.current.value = ""),
                                    null != n && (0, cI.DS)(n, null),
                                    a?.(null);
                            },
                            icon: nt.u,
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
var cw = a(290136),
    cM = a(106236),
    cL = a(629584),
    cP = a(600239),
    cU = a(940622),
    cG = a(961895),
    cB = a(343991),
    cF = a(699666);
let cV = () => {
        (0, ek.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(a.bind(a, 343991));
                return (t) =>
                    (0, r.jsx)(e, {
                        title: "No image or video files found!",
                        help: "Please drop one or more image or video files.",
                        ...t,
                    });
            },
            { modalKey: cB.D },
        );
    },
    c$ = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    cW = (e) => {
        let { className: t, onDrop: a, children: n } = e,
            [l, s] = o.useState(!1),
            i = o.useRef(null),
            d = o.useCallback((e) => {
                c$(e), s(!0), (0, ek.closeModal)(cB.D);
            }, []),
            c = o.useCallback((e) => {
                c$(e);
                let t = i.current,
                    a = e.relatedTarget;
                (null != a && (null == t || t.contains(a))) || s(!1);
            }, []),
            u = o.useCallback(
                async (e) => {
                    c$(e), s(!1);
                    let t = e.dataTransfer;
                    if (null == t) return void cV();
                    let n = await Promise.all(
                        Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry()),
                    ).then((e) => e.filter((e) => null != e));
                    n.length > 0 ? a(n) : cV();
                },
                [a],
            );
        return (0, r.jsxs)("div", {
            ref: i,
            className: S()(t, cF.iE),
            onDragEnter: d,
            onDragOver: c$,
            onDragLeave: c,
            onDrop: u,
            children: [
                n,
                l &&
                    (0, r.jsx)("div", {
                        className: cF.d2,
                        children: (0, r.jsxs)("div", {
                            className: cF.vW,
                            children: [
                                (0, r.jsx)(cG.A, { icons: el.ir }),
                                (0, r.jsx)(T.D, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
                                (0, r.jsxs)("div", {
                                    className: cF.GA,
                                    children: [
                                        (0, r.jsx)(A.E, {
                                            variant: "text-sm/normal",
                                            children: "Drop file(s) into this panel to preview Shop assets!",
                                        }),
                                        (0, r.jsxs)(A.E, {
                                            variant: "text-sm/normal",
                                            children: [
                                                "Click",
                                                (0, r.jsx)(cw.c, {
                                                    className: cF.q4,
                                                    size: "xs",
                                                    color: eI.A.colors.TEXT_DEFAULT,
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
    },
    cz = new Set([
        eb.RN.HERO_BANNER_STATIC,
        eb.RN.HERO_LOGO,
        eb.RN.PDP_BACKGROUND,
        eb.RN.LOGO,
        eb.RN.MOBILE_BANNER,
        eb.RN.MOBILE_BACKGROUND,
    ]),
    cH = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    cK = { max: 5e6, warn: 2e6 },
    cY = { max: 3e6, warn: 1e6 },
    cq = { max: 2e6, warn: 1e6 },
    cJ = { max: 1e6, warn: 5e5 },
    cQ = { max: 25e4, warn: 5e4 },
    cX = {
        [eb.Jn.PROFILE_EFFECT]: cK,
        [eb.Jn.AVATAR_DECORATION]: cY,
        [eb.RN.HERO_BANNER_ANIMATED]: cK,
        [eb.RN.HERO_BANNER_RIVE]: cK,
        [eb.RN.CATALOG_BANNER_RIVE]: cK,
        [eb.RN.SHOP_BUTTON_BG_HOVER]: cY,
        [eb.RN.SHOP_BUTTON_BG_HOVER_DARK]: cY,
        [eb.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: cY,
        [eb.RN.SHOP_BUTTON_BG_RESTING]: cY,
        [eb.RN.SHOP_BUTTON_BG_RESTING_DARK]: cY,
        [eb.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: cY,
        [eb.RN.HERO_BANNER_STATIC]: cq,
        [eb.RN.UPSELL_BANNER]: cJ,
        [eb.RN.UPSELL_BANNER_POPOUT]: cQ,
        [eb.RN.MOBILE_BANNER]: cJ,
        [eb.RN.MOBILE_BACKGROUND]: cQ,
        [eb.RN.MOBILE_HERO]: cJ,
        [eb.RN.PDP_BACKGROUND]: cQ,
        [eb.RN.LOGO]: cQ,
        [eb.RN.TAB_TOOLTIP]: cQ,
    },
    cZ = async (e) => {
        let t = Object.values(eb.Kx),
            a = new Set(),
            n = e.createReader();
        for (let e of await new Promise((e) => n.readEntries(e))) e.isDirectory && t.includes(e.name) && a.add(e.name);
        return t.filter((e) => !a.has(e));
    },
    c0 = (e) => {
        let { names: t, addError: a } = e,
            n = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
            l = t.filter((e) => !n.test(e));
        l.length > 0 && a("File names must be in lowercase snake case", l);
    },
    c1 = (e, t, a, n) => {
        let l = t.size,
            s = l > 1e6 ? `${(l / 1e6).toFixed(2)}MB` : `${(l / 1e3).toFixed(2)}KB`,
            i = `${t.name} - ${s}`;
        if (l > e.max) {
            let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
            a("Files exceed the recommended size limit - make sure they are optimized!", [`${i} (max: ${t})`]);
        } else l > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [`${i}`]);
    },
    c2 = (e, t, a, n) => {
        let l = cX[e];
        if (null != l) for (let e of t) e.name.endsWith(".txt") || c1(l, e, a, n);
    },
    c8 = (e) => {
        let t = eb.aL[e];
        return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
    };
var c3 = a(981388);
let c6 = o.createContext({ setDropHandler: () => {} }),
    c5 = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    c9 = { id: "none", label: "[none selected]", value: null },
    c4 = () => {
        (0, ek.hasModalOpen)(cP.k)
            ? (0, ek.closeModal)(cP.k)
            : (0, ek.openModalLazy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: cP.k, onCloseRequest: () => (0, ek.closeModal)(cP.k) },
              );
    },
    c7 = () => {
        (0, ek.hasModalOpen)(cP.g)
            ? (0, ek.closeModal)(cP.g)
            : (0, ek.openModalLazy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: cP.g, onCloseRequest: () => (0, ek.closeModal)(cP.g) },
              );
    },
    ue = () => {
        let e = (0, ef.pF)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, cU.JE)(),
            n = o.useMemo(() => [c9, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
        return (0, r.jsxs)("div", {
            className: c3.kO,
            children: [
                (0, r.jsx)(t6.h, { size: 16 }),
                (0, r.jsxs)("div", {
                    className: c3.wR,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-md/bold", children: "Preview Profile Effect" }),
                        (0, r.jsx)(eS.K, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: c7,
                            icon: cw.c,
                            "aria-label": "Open PFX preview instructions",
                        }),
                    ],
                }),
                (0, r.jsx)(p.l, {
                    label: "Profile Effect",
                    hideLabel: !0,
                    selectionMode: "single",
                    options: n,
                    value: t,
                    maxOptionsVisible: 30,
                    onSelectionChange: a,
                }),
            ],
        });
    },
    ut = () => {
        let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, cU.JE)(),
            { avatarDecorationAssets: a } = (0, cU.NE)(),
            n = o.useMemo(() => a.map((e) => ({ id: e.name, label: e.name, value: e.name })), [a]);
        return 0 === a.length
            ? null
            : (0, r.jsxs)("div", {
                  className: c3.kO,
                  children: [
                      (0, r.jsx)(t6.h, { size: 16 }),
                      (0, r.jsx)(p.l, {
                          label: "Preview Avatar Decorations",
                          selectionMode: "single",
                          options: n,
                          value: e,
                          maxOptionsVisible: 30,
                          onSelectionChange: t,
                      }),
                  ],
              });
    },
    ua = new Set([eb.RN.HERO_BANNER_STATIC, eb.RN.HERO_BANNER_ANIMATED, eb.RN.HERO_BANNER_RIVE]),
    un = (e) => {
        let { clearAssets: t, clearIgnoredFiles: a } = e,
            { collectionAssets: n } = (0, cU.NE)(),
            {
                deleteCollectionAsset: l,
                clearAssets: s,
                heroLogoMaxHeight: i,
                setHeroLogoMaxHeight: d,
                heroResponsive: c,
                setHeroResponsive: u,
            } = (0, cU.JE)(),
            m = o.useMemo(() => Object.values(n).map((e) => ({ label: e.name, value: e.type })), [n]),
            h = m.some((e) => e.value === eb.RN.HERO_LOGO),
            p = m.some((e) => ua.has(e.value)),
            g = o.useCallback((e) => l(e), [l]),
            v = o.useCallback(() => {
                s(), t(), a();
            }, [s, t, a]);
        return 0 === m.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(t6.h, { size: 16 }),
                      (h || p) &&
                          (0, r.jsxs)("div", {
                              className: c3.v7,
                              children: [
                                  h &&
                                      (0, r.jsxs)("div", {
                                          className: c3.cj,
                                          children: [
                                              (0, r.jsx)(A.E, {
                                                  variant: "text-md/normal",
                                                  className: c3.Me,
                                                  children: "Logo size",
                                              }),
                                              (0, r.jsx)(cM.A, {
                                                  className: c3.TQ,
                                                  minValue: 90,
                                                  maxValue: 200,
                                                  initialValue: i ?? 90,
                                                  handleSize: 10,
                                                  onValueChange: (e) => d(Math.round(e)),
                                                  onValueRender: (e) => `${Math.round(e)}px`,
                                                  "aria-label": "Hero logo max height",
                                              }),
                                              (0, r.jsx)(A.E, { variant: "text-sm/normal", children: `${i ?? 90}px` }),
                                          ],
                                      }),
                                  p &&
                                      (0, r.jsxs)("div", {
                                          className: c3.sy,
                                          children: [
                                              (0, r.jsx)(j.d, { checked: c, onChange: u }),
                                              (0, r.jsx)(A.E, {
                                                  variant: "text-md/normal",
                                                  children: "Responsive Hero",
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                      (0, r.jsx)(t6.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: c3.wR,
                          children: [
                              (0, r.jsx)(T.D, { variant: "heading-lg/bold", children: "Uploaded Assets" }),
                              (0, r.jsx)(x.$, {
                                  variant: "critical-primary",
                                  size: "sm",
                                  onClick: v,
                                  text: "Clear All",
                              }),
                          ],
                      }),
                      (0, r.jsx)("ul", {
                          children: m.map((e) =>
                              (0, r.jsxs)(
                                  "li",
                                  {
                                      className: c3._0,
                                      children: [
                                          (0, r.jsx)(eS.K, {
                                              variant: "icon-only",
                                              size: "sm",
                                              onClick: () => g(e.value),
                                              icon: L.P,
                                              "aria-label": "Remove asset",
                                          }),
                                          (0, r.jsx)(A.E, { variant: "text-md/normal", children: e.label }),
                                      ],
                                  },
                                  e.value,
                              ),
                          ),
                      }),
                  ],
              });
    },
    ul = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
        return 0 === t.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(t6.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: c3.wR,
                          children: [
                              (0, r.jsx)(T.D, { variant: "heading-lg/bold", children: "Ignored Files" }),
                              (0, r.jsx)(x.$, { variant: "primary", size: "sm", onClick: a, text: "Clear" }),
                          ],
                      }),
                      (0, r.jsx)("ul", {
                          children: t.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      className: c3.yk,
                                      children: (0, r.jsx)(A.E, { variant: "text-md/normal", children: e }),
                                  },
                                  `${e}-${t}`,
                              ),
                          ),
                      }),
                  ],
              });
    },
    us = () => {
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
                                let n = await cZ(t);
                                if (n.length > 0) return void i("Missing required directories", n);
                                (a = await (0, eb.eg)([t])),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        for (let e of t.collectionFiles) {
                                            let t = (0, eb.pd)(e),
                                                l = null != t ? cX[t] : null;
                                            null != l && c1(l, e, a, n);
                                        }
                                        c0({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                        let l = new Set(
                                                t.collectionFiles.map((e) => (0, eb.pd)(e)).filter((e) => null != e),
                                            ),
                                            s = Array.from(cz)
                                                .filter((e) => !l.has(e))
                                                .map(c8);
                                        s.length > 0 && a("Missing required files", s);
                                        let i = Object.values(eb.RN)
                                            .filter((e) => !cz.has(e))
                                            .filter((e) => !l.has(e))
                                            .map(c8);
                                        i.length > 0 && n("Missing optional assets", i);
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        c0({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                            Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                                let [t, l] = e,
                                                    s = l.map((e) => e.name);
                                                c0({
                                                    names: s.map((e) => {
                                                        let t = e.indexOf("-");
                                                        return e.substring(0, t > 0 ? t : e.length);
                                                    }),
                                                    addError: a,
                                                }),
                                                    c2(eb.Jn.PROFILE_EFFECT, l, a, n);
                                                let i = cH
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
                                                        (e) => !cH.some((t) => e.startsWith(t)) && !e.endsWith(".txt"),
                                                    )
                                                    .map((e) => `${t}/${e}`);
                                                r.length > 0 && n("Contains unrecognized files", r);
                                            });
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        c0({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                            c2(eb.Jn.AVATAR_DECORATION, t.avatarDecorationFiles, a, n);
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
            { setDropHandler: u } = o.useContext(c6),
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
                              className: c3._f,
                              children: [
                                  (0, r.jsx)(A.E, {
                                      variant: "text-md/normal",
                                      color: d ? "text-feedback-critical" : "text-default",
                                      children: `${s.length} errors`,
                                  }),
                                  (0, r.jsx)(A.E, {
                                      variant: "text-md/normal",
                                      color: c ? "text-feedback-warning" : "text-default",
                                      children: `${i.length} warnings`,
                                  }),
                                  (0, r.jsx)(x.$, { variant: "primary", size: "sm", onClick: t, text: "Reset" }),
                              ],
                          })
                        : (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Drop asset folder to validate." }),
                    (0, r.jsx)(t6.h, { size: 16 }),
                    d &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(T.D, { variant: "heading-lg/bold", children: "Errors" }),
                                (0, r.jsx)(t6.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: c3.ck,
                                    children: s.map((e, t) => {
                                        let [a, n] = e;
                                        return (0, r.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, r.jsx)(A.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-critical",
                                                        children: a,
                                                    }),
                                                    n.length > 0 &&
                                                        (0, r.jsx)("ul", {
                                                            className: c3.ck,
                                                            children: n.map((e, t) =>
                                                                (0, r.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, r.jsx)(A.E, {
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
                                (0, r.jsx)(T.D, { variant: "heading-lg/bold", children: "Warnings" }),
                                (0, r.jsx)(t6.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: c3.ck,
                                    children: Object.entries(n).map((e, t) => {
                                        let [a, n] = e;
                                        return (0, r.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, r.jsx)(A.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-warning",
                                                        children: a,
                                                    }),
                                                    n.length > 0 &&
                                                        (0, r.jsx)("ul", {
                                                            className: c3.ck,
                                                            children: n.map((e, t) =>
                                                                (0, r.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, r.jsx)(A.E, {
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
    ui = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, cU.JE)(),
            { ignoredFilenames: n, clearAssets: l, clearIgnoredFilenames: s, processAndUpsertAssets: i } = (0, eb.ds)(),
            { setDropHandler: d } = o.useContext(c6),
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
                    (0, r.jsx)(A.E, {
                        variant: "text-md/normal",
                        children: "Drop files in this panel to begin preview.",
                    }),
                    (0, r.jsxs)("div", {
                        className: c3.sy,
                        children: [
                            (0, r.jsx)(j.d, { checked: e, onChange: (e) => t(e) }),
                            (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Enable Preview" }),
                            (0, r.jsx)(eS.K, {
                                variant: "icon-only",
                                size: "sm",
                                onClick: c4,
                                icon: cw.c,
                                "aria-label": "Open preview instructions",
                            }),
                        ],
                    }),
                    (0, r.jsx)(ue, {}),
                    (0, r.jsx)(ut, {}),
                    (0, r.jsx)(un, { clearAssets: l, clearIgnoredFiles: s }),
                    (0, r.jsx)(ul, { ignoredFiles: n, handleClearIgnoredFiles: s }),
                ],
            })
        );
    },
    ur = () => {
        let [e, t] = o.useState("preview");
        return (0, r.jsxs)("div", {
            className: c3.kL,
            children: [
                (0, r.jsx)(cL.I, {
                    options: c5,
                    value: e,
                    onChange: (e) => {
                        let { value: a } = e;
                        return t(a);
                    },
                    className: c3.Vj,
                    optionClassName: c3.UK,
                }),
                (0, r.jsx)(t6.h, { size: 8 }),
                "preview" === e && (0, r.jsx)(ui, {}),
                "validate" === e && (0, r.jsx)(us, {}),
                (0, r.jsx)(t6.h, { size: 16 }),
            ],
        });
    },
    uo = (e) => {
        let { children: t } = e,
            [a, n] = o.useState(() => () => {}),
            l = o.useMemo(() => ({ setDropHandler: (e) => n(() => e) }), []);
        return (0, r.jsx)(c6.Provider, { value: l, children: (0, r.jsx)(cW, { onDrop: a, children: t }) });
    };
var ud = a(663803),
    uc = a(859040),
    uu = a(385815);
let um = () => {
    let e = (0, d.bG)([td.A], () => td.A.skipNumCategories);
    return (0, r.jsxs)("div", {
        className: uu.k,
        children: [
            (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Hide first # of categories" }),
            (0, r.jsx)(ud.l, {
                value: e,
                onChange: (e) => {
                    (0, uc.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
};
var uh =
        (((n = {}).DEFAULT = "default"),
        (n.DEFAULT_WITH_ORB_SHELF = "default_with_orb_shelf"),
        (n.ORB_TAB = "orb_tab"),
        (n.FRAMES = "frames"),
        (n.FRAMES_PINNED = "frames_pinned"),
        n),
    ux = a(295811),
    up = a(172471);
let ug = () => {
        let e = (0, d.bG)([ux.A], () => ux.A.getShopHomeConfigOverride()),
            t = [
                { id: "none", label: "DISABLED (no override)", value: void 0 },
                ...Object.values(uh).map((e) => ({ id: e, label: e, value: e })),
            ];
        return (0, r.jsx)("div", {
            className: up.kL,
            children: (0, r.jsx)(p.l, {
                label: "Shop Home Override",
                options: t,
                value: e,
                onSelectionChange: (e) => {
                    (0, uc.Or)(e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
        });
    },
    uv = () => {
        let [e, t] = o.useState(void 0);
        return (0, r.jsxs)("div", {
            className: S()(up.kL, up.fi),
            children: [
                (0, r.jsx)(g.k, {
                    fullWidth: !0,
                    label: "Shop Layout URL Override",
                    value: e,
                    onChange: (e) => ("" === e ? t(void 0) : t(e)),
                    placeholder: "https://cdn.discordapp.com/assets/content/...",
                }),
                (0, r.jsxs)("div", {
                    className: up.o1,
                    children: [
                        (0, r.jsx)(x.$, {
                            variant: "critical-primary",
                            text: "Clear",
                            onClick: () => {
                                t(void 0), (0, uc.Aq)(void 0);
                            },
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "primary",
                            text: "Set",
                            onClick: () => (0, uc.Aq)("" !== e ? e : void 0),
                        }),
                    ],
                }),
            ],
        });
    },
    uj = (e) => {
        let { className: t } = e,
            a = Object.keys(n2.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
        return null == a
            ? null
            : (0, r.jsxs)("div", {
                  className: t,
                  children: [
                      (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Shop Marketing" }),
                      (0, r.jsx)("div", { style: { zIndex: 1 }, children: (0, r.jsx)(lu, { items: [a] }) }),
                  ],
              });
    };
var ub = a(922529),
    uf = a(628917);
let uy = () => {
        let e = (0, d.bG)([lj.A], () => lj.A.get("shop_disable_cache")),
            t = (0, d.bG)([lj.A], () => lj.A.get("shop_include_unpublished"));
        return (0, r.jsx)(uo, {
            children: (0, r.jsxs)("div", {
                className: uf.Lm,
                children: [
                    (0, r.jsxs)("div", {
                        className: uf.gf,
                        children: [
                            (0, r.jsx)(j.d, {
                                label: "Disable collectibles cache",
                                checked: e,
                                onChange: (e) => (0, lv.L)("shop_disable_cache", e),
                            }),
                            (0, r.jsx)(j.d, {
                                label: "Show unpublished collectibles",
                                checked: t,
                                onChange: (e) => (0, lv.L)("shop_include_unpublished", e),
                            }),
                        ],
                    }),
                    (0, r.jsx)(uj, { className: uf._l }),
                    (0, r.jsxs)("div", {
                        className: uf._l,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Shop Overrides" }),
                            (0, r.jsx)(ug, {}),
                            (0, r.jsx)(ub.A, { className: uf.yF }),
                            (0, r.jsx)(uv, {}),
                            (0, r.jsx)(ub.A, { className: uf.yF }),
                            (0, r.jsx)(um, {}),
                            (0, r.jsx)(ub.A, { className: uf.yF }),
                            (0, r.jsx)(ur, {}),
                        ],
                    }),
                ],
            }),
        });
    },
    u_ = [
        { id: "unset", label: "Unset", value: dq.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
        { id: "all", label: "All", value: dq.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
        { id: "usersWithGame", label: "Users With Game", value: dq.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
        { id: "none", label: "None", value: dq.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
    ];
function uC() {
    let e = o.useRef(null),
        t = dX.TA.useSetting();
    return (0, r.jsx)("div", {
        ref: e,
        className: S()(tA.nd, ap.n),
        children: (0, r.jsxs)("div", {
            className: ap.k,
            children: [
                (0, r.jsx)(T.D, { variant: "heading-lg/normal", children: "Settings" }),
                (0, r.jsx)(p.l, {
                    label: "Receive DMs In Game",
                    options: u_,
                    value: t,
                    onSelectionChange: dX.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var uE = a(278416),
    uS = a(220631);
function uN(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function uA(e) {
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
        (0, r.jsx)(c.Ip, { className: uS.Dx, children: (0, r.jsx)(ak, { data: n }) })
    );
}
function uk(e) {
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
                for (let e of n.preDispatches ?? []) tC.h.dispatch(e);
                tC.h.dispatch({ ...n.buildPayload(e), type: n.actionType }), i();
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
                for (let t of e.preDispatches ?? []) tC.h.dispatch(t);
                tC.h.dispatch({ ...e.buildPayload(t), type: e.actionType }), i();
            } catch (e) {
                s(e instanceof Error ? e.message : String(e));
            }
        }, [t, i]);
    return (0, r.jsxs)("div", {
        className: S()(uS.Dx, uS.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: uS.Vz,
                value: a,
                onChange: (e) => n(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != l && (0, r.jsx)("div", { className: uS.Xf, role: "alert", children: l }),
            (0, r.jsxs)("div", {
                className: uS.KA,
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
let uI = [
    {
        key: "name",
        cellClassName: uS.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function uD(e) {
    let { store: t, initialHeight: a } = e,
        n = o.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: aR.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVars
                                ? (0, r.jsxs)("div", {
                                      className: uS.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(uA, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: aR.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(uA, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: aR.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVarsEditConfig
                                ? (0, r.jsxs)("div", {
                                      className: uS.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(uk, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: l, renderSelectedTab: s } = (0, aR.Ay)({ tabs: n }, []);
    return (0, r.jsxs)(aO, {
        className: uS.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(af.Ay, {
                className: S()(tA.jr, uS.nZ),
                children: [
                    (0, r.jsx)(af.Ay.Icon, { icon: uE.g, tooltip: t.getName() }),
                    (0, r.jsx)(af.Ay.Title, { children: t.getName() }),
                ],
            }),
            s({ store: t }),
        ],
    });
}
function uT() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = d.il.getAll(),
        l = o
            .useMemo(() => n.map((e) => ({ key: e._dispatchToken, store: e })).sort(uN), [n])
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
        className: S()(tA.nd, uS.nd),
        children: [
            (0, r.jsx)("div", {
                className: uS.KE,
                children: (0, r.jsx)(na.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(tk, { columns: uI, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != c &&
                (0, r.jsx)(uD, { store: c, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, s),
        ],
    });
}
var uO = a(91871),
    uR = a.n(uO);
let uw = [
        {
            key: "id",
            cellClassName: ny.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: ny.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: ny.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    uM = [
        {
            id: "details",
            name: "Details",
            group: aR.fu.NONE,
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
                    d = a5()(s);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(af.Ay, {
                            className: S()(tA.jr, ny.nZ),
                            children: [
                                (0, r.jsx)(af.Ay.Icon, { icon: a7.U, tooltip: t }),
                                (0, r.jsx)(af.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(nj, {
                            className: ny.ZK,
                            children: [
                                (0, r.jsx)(nb, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: s.toISOString(),
                                        title: (0, nr.i$)(d, "LLLL"),
                                        children: (0, nr.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, r.jsx)(nb, {
                                        name: "Guild ID",
                                        children: (0, r.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, r.jsx)(nb, {
                                    name: "Bucket",
                                    children: (0, r.jsx)("code", { children: a.bucket }),
                                }),
                                (0, r.jsx)(nb, {
                                    name: "Revision",
                                    children: (0, r.jsx)("code", { children: a.revision }),
                                }),
                                (0, r.jsx)(nb, { name: "Override", children: (0, r.jsx)(nf, { value: a.override }) }),
                                (0, r.jsx)(nb, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                                (0, r.jsx)(nb, { name: "Excluded", children: (0, r.jsx)(nf, { value: l }) }),
                                (0, r.jsx)(nb, { name: "Previously tracked", children: (0, r.jsx)(nf, { value: o }) }),
                                (0, r.jsx)(nb, { name: "Location", children: (0, r.jsx)("code", { children: i }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function uL() {
    let [e, t] = o.useState(""),
        a = o.useRef(null),
        n = (0, d.yK)([ng], () => ng.loggedTriggers),
        l = o.useMemo(
            () =>
                n
                    .filter((t) => 0 === e.length || uR()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [n, e],
        ),
        [s, i] = o.useState(void 0),
        c = l.find((e) => e.key === s),
        { TabBar: u, renderSelectedTab: m } = (0, aR.Ay)({ tabs: uM }, []),
        h = (0, d.bG)([ng], () => ng.trackTriggers),
        x = o.useCallback((e) => {
            tC.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        p = h ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: S()(tA.nd, ny.nd),
        children: [
            (0, r.jsxs)("div", {
                className: ny.rh,
                children: [
                    (0, r.jsx)(lM.m, {
                        text: p,
                        children: (0, r.jsx)(eS.K, {
                            size: "sm",
                            variant: h ? "active" : "primary",
                            icon: h ? lU.E : lP.u,
                            "aria-label": p,
                            onClick: () => x(!h),
                        }),
                    }),
                    (0, r.jsx)(na.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, r.jsx)(eS.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": aK.intl.string(aK.t.VkKicb),
                        icon: nt.u,
                        onClick: O.eY,
                    }),
                ],
            }),
            (0, r.jsx)(tk, { columns: uw, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != c &&
                (0, r.jsxs)(aO, {
                    className: ny.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(u, {}), m({ loggedTrigger: c })],
                }),
        ],
    });
}
var uP = a(512950),
    uU = a(324861),
    uG = a(243655);
let uB = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, uU.A)();
    return (0, r.jsx)("div", {
        className: uG.k,
        children: (0, r.jsxs)(m.n, {
            label: "Virtual Currency Configuration",
            description: "Click the button below to reset your onboarding state for Virtual Currency.",
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(x.$, {
                        text: "Reset Onboarding State",
                        onClick: () => {
                            e(), t(), (0, as.pX)(H.BVt.APP);
                        },
                    }),
                }),
                (0, r.jsx)(uP.p, {
                    messageType: uP.Y.INFO,
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these",
                }),
            ],
        }),
    });
};
var uF = a(899e3),
    uV = a(235058),
    u$ = a(731854);
let uW = [
        ["codecH264", "H264"],
        ["codecH265", "H265 / HEVC"],
        ["codecAv1", "AV1"],
    ],
    uz = [
        ["encNvidiaDx11", "NVIDIA Direct3D 11"],
        ["encNvidiaCuda", "NVIDIA CUDA"],
        ["encAmdDx11", "AMD Direct3D 11"],
        ["encIntelDx11", "Intel Direct3D 11"],
        ["encIntelCpu", "Intel CPU"],
        ["encWmfCpu", "Media Foundation CPU"],
        ["encWmfGpu", "Media Foundation GPU"],
        ["encWmfDx11", "Media Foundation Direct3D 11 (NYI)"],
    ],
    uH = [
        ["capGraphicsCapture", "WGC / Windows Graphics Capture"],
        ["capDxgi", "DDA / DXGI Output Duplication"],
        ["capGdi", "GDI / PrintWindow + BitBlt"],
        ["capVideoHook", "Video Hook"],
    ],
    uK = [
        ["bypassHybridGpuFpsRestriction", "WGC: Bypass Hybrid-GPU 60 FPS Restriction"],
        ["gdiForceBitblt", "GDI: Force Allow BitBlt"],
        ["allowHdr", "Allow HDR Capture"],
    ];
function uY(e) {
    let { title: t, toggles: a, state: n } = e;
    return (0, r.jsxs)(I.B, {
        gap: 8,
        children: [
            (0, r.jsx)(A.E, { variant: "text-lg/bold", children: t }),
            a.map((e) => {
                let [t, a] = e;
                return (0, r.jsx)(rT.S, { label: a, checked: !!n[t], onChange: () => (0, uF.yn)({ [t]: !n[t] }) }, t);
            }),
        ],
    });
}
function uq() {
    let e = (0, d.bG)([uF.Ay], () => uF.Ay.getSnapshot()),
        t = (0, d.bG)([uV.Ay], () => uV.Ay.supports(u$.O5.VIDEO));
    return (0, r.jsxs)(c.Ip, {
        className: tA.nd,
        children: [
            (0, r.jsx)(v.c, { gap: 16 }),
            (0, r.jsx)(uY, { title: "Video Codecs (Sender)", toggles: uW, state: e }),
            t
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(v.c, { gap: 16 }),
                          (0, r.jsx)(uY, { title: "Video Encoders", toggles: uz, state: e }),
                          (0, r.jsx)(v.c, { gap: 16 }),
                          (0, r.jsx)(uY, { title: "Capture Sources", toggles: uH, state: e }),
                          (0, r.jsx)(v.c, { gap: 16 }),
                          (0, r.jsx)(uY, { title: "Capture Options", toggles: uK, state: e }),
                      ],
                  })
                : null,
            (0, r.jsx)(v.c, { gap: 16 }),
            (0, r.jsx)(uY, {
                title: "Preview",
                toggles: [["alwaysShowCapturePreview", "Always Show (ignore main window focus)"]],
                state: e,
            }),
            (0, r.jsx)(v.c, { gap: 16 }),
        ],
    });
}
var uJ = a(77729),
    uQ = a(36934);
function uX() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, s] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        i = "processing" === l.status;
    return (0, r.jsx)(c.Ip, {
        className: tA.nd,
        children: (0, r.jsxs)("div", {
            className: uQ.l7,
            children: [
                (0, r.jsx)(A.E, { variant: "text-lg/bold", children: "Batch Audio Processor" }),
                (0, r.jsx)(A.E, {
                    variant: "text-sm/normal",
                    children:
                        "Process wav files through the Discord audio ingest pipeline (WebRTC APM, Krisp, voice filters) and write output to wav files.",
                }),
                (0, r.jsxs)(I.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.k, {
                            fullWidth: !0,
                            value: e,
                            onChange: t,
                            placeholder: "Input directory (wav files)",
                        }),
                        (0, r.jsx)(x.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await uJ.A.fileManager.showOpenDialog({ properties: ["openDirectory"] });
                                e.length > 0 && t(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)(I.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.k, { fullWidth: !0, value: a, onChange: n, placeholder: "Output directory" }),
                        (0, r.jsx)(x.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await uJ.A.fileManager.showOpenDialog({
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
                              uV.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  s((e) => ({ ...e, status: "cancelled" }));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (s({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  uV.Ay.getMediaEngine().processBatchAudioFiles(
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
                    (0, r.jsxs)(I.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(A.E, {
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
                                            className: uQ.TZ,
                                            children: (0, r.jsxs)(A.E, {
                                                variant: "text-xs/normal",
                                                className: e.success ? uQ.$D : uQ.uL,
                                                children: [e.success ? "OK" : "FAIL", " - ", e.filename],
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                            l.log.length > 20 &&
                                (0, r.jsxs)(A.E, {
                                    variant: "text-xs/normal",
                                    children: ["...and ", l.log.length - 20, " more"],
                                }),
                        ],
                    }),
            ],
        }),
    });
}
var uZ = a(207898),
    u0 = a.n(uZ),
    u1 = a(32880),
    u2 = a(827343),
    u8 = a(964486),
    u3 = a(602674),
    u6 = a(625841),
    u5 = a(74848),
    u9 = a(573908);
function u4(e) {
    let { recording: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(A.E, { variant: "text-sm/normal", children: ["Duration: ", t.audioBuffer.duration] }),
            (0, r.jsxs)(A.E, {
                variant: "text-sm/normal",
                children: ["Num Channels: ", t.audioBuffer.numberOfChannels],
            }),
            (0, r.jsxs)(A.E, { variant: "text-sm/normal", children: ["Sample Rate: ", t.audioBuffer.sampleRate] }),
            (0, r.jsxs)(A.E, { variant: "text-sm/normal", children: ["Noise Suppression: ", t.suppression] }),
            (0, r.jsxs)(A.E, {
                variant: "text-sm/normal",
                children: ["Krisp Suppression Level: ", t.krispSuppressionLevel],
            }),
            (0, r.jsxs)(A.E, {
                variant: "text-sm/normal",
                children: ["Echo Cancellation: ", String(t.echoCancellation)],
            }),
        ],
    });
}
function u7(e) {
    let { recording: t, playing: a, onPlay: n, onStop: l } = e;
    return (0, r.jsx)(cn.N, {
        collapsibleContent: (0, r.jsx)(u4, { recording: t }),
        children: (e) => {
            let { onClick: s } = e;
            return (0, r.jsxs)(N.D, {
                onClick: s,
                children: [
                    (0, r.jsxs)(A.E, {
                        variant: "text-sm/bold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, r.jsx)(N.D, {
                        tag: "span",
                        onClick: (e) => {
                            e.stopPropagation(), a ? l() : n(t);
                        },
                        children: a ? (0, r.jsx)(lU.E, { size: "xxs" }) : (0, r.jsx)(lP.u, { size: "xxs" }),
                    }),
                    (0, r.jsx)(N.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, n, l;
                            e.stopPropagation(),
                                (a = new Blob([u0()(t.audioBuffer)], { type: "audio/wav" })),
                                (n = URL.createObjectURL(a)),
                                ((l = document.createElement("a")).href = n),
                                (l.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                l.click(),
                                URL.revokeObjectURL(n);
                        },
                        children: (0, r.jsx)(u1.s, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function me() {
    let { name: e } = (0, u5.x5)(u$.oh.AUDIO_INPUT),
        [t, a] = o.useState(!1),
        [n, l] = o.useState([]),
        s = (0, d.bG)([uV.Ay], () => uV.Ay.getKrispSuppressionLevel()),
        [i, u] = o.useState(null),
        m = o.useRef(null),
        h = o.useRef(null),
        [x, g] = o.useState(0.5),
        {
            krispModels: v,
            krispModelOverride: b,
            inputMode: f,
            echoCancellation: y,
            autoThreshold: _,
            vadUseKrisp: C,
            vadKrispActivationThreshold: E,
            noiseCancellation: S,
            noiseSuppression: N,
            noiseSuppressionSupported: k,
            noiseCancellationSupported: D,
            noiseCancellationEnableStats: T,
            vadDuringPreProcess: O,
        } = (0, d.cf)([uV.Ay], () => ({
            krispModels: uV.Ay.getKrispModels(),
            krispModelOverride: uV.Ay.getKrispModelOverride(),
            echoCancellation: uV.Ay.getEchoCancellation(),
            autoThreshold: uV.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: uV.Ay.getModeOptions().vadUseKrisp,
            inputMode: uV.Ay.getMode(),
            vadKrispActivationThreshold: uV.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: uV.Ay.getNoiseCancellation(),
            noiseSuppression: uV.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: uV.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: uV.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: uV.Ay.getKrispEnableStats(),
            vadDuringPreProcess: uV.Ay.getModeOptions().vadDuringPreProcess,
        })),
        R = S ? "KRISP" : N ? "STANDARD" : "NONE",
        w = (0, u3.v)(),
        M = o.useCallback(() => {
            m.current?.stop(), (m.current = null), u(null);
        }, []);
    function L() {
        uV.Ay.getMediaEngine().stopRecordingRawSamples();
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
            (m.current = a),
            u(e);
    }
    o.useEffect(() => {
        M();
    }, [M]),
        (0, u8.l0)(() => {
            u2.A.setMode(uV.Ay.getMode(), { vadDuringPreProcess: null, vadKrispActivationThreshold: void 0 });
        });
    let U = [];
    return (
        D && U.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        k && U.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        U.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(c.Ip, {
            className: tA.nd,
            children: (0, r.jsxs)("div", {
                className: u9.l,
                children: [
                    (0, r.jsx)(A.E, { variant: "text-lg/bold", children: "Krisp Tester" }),
                    (0, r.jsx)(u6.U, {
                        label: "Input Device",
                        deviceType: u$.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, r.jsx)(p.l, {
                        label: "Noise Cancellation",
                        value: R,
                        onSelectionChange: (e) => {
                            u2.A.setNoiseCancellation("KRISP" === e), u2.A.setNoiseSuppression("STANDARD" === e);
                        },
                        options: U,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === R &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(cM.A, {
                                    label: "Krisp Suppression Level",
                                    initialValue: s,
                                    onValueChange: u2.A.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, r.jsx)(p.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: b,
                                    options: v.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        u2.A.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(j.d, {
                                    label: "Enable Stats",
                                    checked: T,
                                    onChange: (e) => u2.A.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    f === u$.TB.VOICE_ACTIVITY &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(j.d, {
                                    label: "Auto Threshold",
                                    checked: _,
                                    onChange: (e) => u2.A.setMode(u$.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                _ &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(j.d, {
                                                label: "Use Krisp VAD",
                                                checked: C,
                                                onChange: (e) => u2.A.setMode(u$.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            C &&
                                                (0, r.jsx)(cM.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: E,
                                                    onValueChange: (e) =>
                                                        u2.A.setMode(u$.TB.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                }),
                                        ],
                                    }),
                                (0, r.jsx)(j.d, {
                                    label: "Run Before Processing",
                                    checked: O ?? !1,
                                    onChange: (e) => u2.A.setMode(u$.TB.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(j.d, {
                        label: "Echo Cancellation",
                        checked: y,
                        onChange: (e) => u2.A.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)(I.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(A.E, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(a9.$n, {
                                color: t ? a9.$n.Colors.RED : a9.$n.Colors.BRAND,
                                onClick: t
                                    ? L
                                    : function () {
                                          M(),
                                              a(!0),
                                              u2.A.setLoopback("krisp_test", !0),
                                              uV.Ay.getMediaEngine().startRecordingRawSamples((t, n, i) => {
                                                  a(!1), u2.A.setLoopback("krisp_test", !1);
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
                    (0, r.jsx)(cM.A, {
                        label: "Volume",
                        initialValue: x,
                        asValueChanges: function (e) {
                            null != h.current && ((h.current.gain.value = e), g(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, r.jsxs)(I.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(A.E, { variant: "text-sm/semibold", children: "Recordings" }),
                            n.map((e, t) =>
                                (0, r.jsx)(u7, { recording: e, playing: e === i, onPlay: P, onStop: M }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var mt = a(742158),
    ma = a(717558),
    mn = a(85448),
    ml = a(763827),
    ms = a(977997),
    mi = a(647160);
let mr = [
    { value: "line", label: "Line" },
    { value: "arc", label: "Arc" },
    { value: "grid", label: "Grid" },
    { value: "manual", label: "Manual" },
];
function mo(e, t) {
    let a = t / 2;
    return { x: a + (e.x / 7) * a, y: a + (e.z / 7) * a };
}
function md(e) {
    let { mode: t, computedPositions: a, otherUsers: n } = e,
        l = o.useRef(null),
        s = o.useRef(null),
        [i, d] = o.useState(0),
        [c, u] = o.useState(new Map()),
        [m, h] = o.useState(null),
        [x, p] = o.useState(!1),
        [g, v] = o.useState({ zoom: 1, pan: { x: 0, y: 0 } });
    o.useLayoutEffect(() => {
        let e = l.current;
        if (null == e) return;
        let t = new ResizeObserver((e) => {
            let t = Math.floor(e[0].contentRect.width);
            t <= 0 || d((e) => (0 === e && v({ zoom: 1, pan: { x: 0, y: t * mc } }), t));
        });
        return t.observe(e), () => t.disconnect();
    }, []),
        o.useEffect(() => {
            let e = l.current;
            if (null == e) return;
            let t = (t) => {
                t.preventDefault();
                let a = e.getBoundingClientRect(),
                    n = t.clientX - a.left,
                    l = t.clientY - a.top;
                v((e) => {
                    let { zoom: a, pan: s } = e,
                        i = Math.max(mu, Math.min(mm, a * Math.exp(-t.deltaY * mh))),
                        r = i / a;
                    return { zoom: i, pan: { x: n - (n - s.x) * r, y: l - (l - s.y) * r } };
                });
            };
            return e.addEventListener("wheel", t, { passive: !1 }), () => e.removeEventListener("wheel", t);
        }, []);
    let j = o.useMemo(() => {
        let e = new Map();
        if (0 === i) return e;
        if ("manual" === t)
            for (let t of n) {
                let a = c.get(t.userId);
                null != a && e.set(t.userId, a);
            }
        else
            n.forEach((t, n) => {
                n < a.length && e.set(t.userId, mo(a[n], i));
            });
        return e;
    }, [t, n, a, c, i]);
    o.useEffect(() => {
        if ("manual" === t || 0 === i) return;
        let e = new Map();
        n.forEach((t, n) => {
            n < a.length && e.set(t.userId, mo(a[n], i));
        }),
            u(e);
    }, [t, n, a, i]),
        o.useEffect(() => {
            let e = s.current;
            if (null == e || 0 === i) return;
            let t = e.getContext("2d");
            if (null != t) {
                t.setTransform(1, 0, 0, 1, 0, 0),
                    t.clearRect(0, 0, i, i),
                    (t.fillStyle = "#1e1f22"),
                    t.fillRect(0, 0, i, i),
                    t.setTransform(g.zoom, 0, 0, g.zoom, g.pan.x, g.pan.y),
                    (t.strokeStyle = "#2b2d31"),
                    (t.lineWidth = 1 / g.zoom);
                for (let e = 0; e <= 10; e++) {
                    let a = (e * i) / 10;
                    t.beginPath(),
                        t.moveTo(a, 0),
                        t.lineTo(a, i),
                        t.stroke(),
                        t.beginPath(),
                        t.moveTo(0, a),
                        t.lineTo(i, a),
                        t.stroke();
                }
                (t.fillStyle = "#23a559"),
                    t.beginPath(),
                    t.arc(i / 2, i / 2, 10 / g.zoom, 0, 2 * Math.PI),
                    t.fill(),
                    (t.fillStyle = "#ffffff"),
                    (t.font = `bold ${11 / g.zoom}px sans-serif`),
                    (t.textAlign = "center"),
                    t.fillText("You", i / 2, i / 2 - 16 / g.zoom);
            }
        }, [i, g]);
    let b = o.useCallback(
            (e, a) => {
                "manual" === t && 0 === e.button && h(a);
            },
            [t],
        ),
        f = o.useCallback((e) => {
            2 === e.button && p(!0);
        }, []),
        y = o.useCallback(
            (e) => {
                let t;
                if (x)
                    return void v((t) => ({
                        zoom: t.zoom,
                        pan: { x: t.pan.x + e.movementX, y: t.pan.y + e.movementY },
                    }));
                if (null == m) return;
                let a = s.current;
                if (null == a || 0 === i) return;
                let n = a.getBoundingClientRect(),
                    l = (e.clientX - n.left - g.pan.x) / g.zoom,
                    r = (e.clientY - n.top - g.pan.y) / g.zoom;
                u((e) => new Map(e).set(m, { x: l, y: r }));
                let o = { x: ((l - (t = i / 2)) / t) * 7, y: 0, z: ((r - t) / t) * 7 };
                uV.Ay.getMediaEngine().eachConnection((e) => {
                    e.setUserPosition(m, o);
                });
            },
            [x, m, i, g.pan.x, g.pan.y, g.zoom],
        ),
        _ = o.useCallback(() => {
            h(null), p(!1);
        }, []),
        C = x ? "grabbing" : "default";
    return (0, r.jsxs)("div", {
        ref: l,
        className: mi.BW,
        style: { cursor: C },
        onMouseDown: f,
        onMouseMove: y,
        onMouseUp: _,
        onMouseLeave: _,
        onContextMenu: (e) => e.preventDefault(),
        children: [
            (0, r.jsx)("canvas", { ref: s, width: i, height: i, className: mi.Ji }),
            n.map((e) => {
                let a = j.get(e.userId);
                return null == a
                    ? null
                    : (0, r.jsx)(
                          mx,
                          {
                              userId: e.userId,
                              x: a.x * g.zoom + g.pan.x,
                              y: a.y * g.zoom + g.pan.y,
                              draggable: "manual" === t,
                              onMouseDown: b,
                          },
                          e.userId,
                      );
            }),
        ],
    });
}
let mc = 0.25,
    mu = 0.25,
    mm = 4,
    mh = 0.002;
function mx(e) {
    let { userId: t, x: a, y: n, draggable: l, onMouseDown: s } = e,
        i = (0, d.bG)([V.default], () => V.default.getUser(t)),
        o = (0, ma.A)({ userId: t });
    return null == i
        ? null
        : (0, r.jsx)(lM.m, {
              text: i.username,
              children: (0, r.jsx)("div", {
                  className: mi.my,
                  style: { left: a - 12, top: n - 12, cursor: l ? "grab" : "default" },
                  onMouseDown: (e) => s(e, t),
                  children: (0, r.jsx)(mn.A, {
                      userId: t,
                      size: rb._3.SIZE_24,
                      src: i.getAvatarURL(void 0, 24),
                      speaking: o,
                      ringing: !1,
                  }),
              }),
          });
}
function mp() {
    return uV.Ay.getMediaEngine().supports(u$.O5.SPATIAL_AUDIO)
        ? (0, r.jsx)(mg, {})
        : (0, r.jsx)(c.Ip, {
              className: tA.nd,
              children: (0, r.jsxs)("div", {
                  className: mi.kL,
                  children: [
                      (0, r.jsx)(T.D, { variant: "heading-lg/semibold", className: mi.R_, children: "Spatial Audio" }),
                      (0, r.jsx)(A.E, {
                          variant: "text-md/normal",
                          children: "Spatial audio is not supported by this client. Update Discord to enable.",
                      }),
                  ],
              }),
          });
}
function mg() {
    let e = (0, d.bG)([uV.Ay], () => uV.Ay.getAudioMixerSettings()),
        t = rI.x.DEFAULT,
        a = (0, d.bG)([ml.A, t9.A], () => {
            let e = ml.A.getChannelId();
            return null != e ? t9.A.getChannel(e) : null;
        }),
        n = nd.default.getId(),
        l = a?.id,
        s = (0, d.yK)(
            [ms.A],
            () => (null == l ? [] : Object.values(ms.A.getVoiceStatesForChannel(l)).filter((e) => e.userId !== n)),
            [l, n],
        ),
        i = e.mode ?? "line",
        u = o.useMemo(
            () =>
                "manual" !== i
                    ? (function (e, t, a) {
                          if (0 === a) return [];
                          if (1 === a) return [{ x: 0, y: 0, z: -t.distance }];
                          switch (e) {
                              case "line": {
                                  let e = [];
                                  for (let n = 0; n < a; n++) {
                                      let l = n / (a - 1);
                                      e.push({ x: -t.spread / 2 + t.spread * l, y: 0, z: -t.distance });
                                  }
                                  return e;
                              }
                              case "arc": {
                                  let e = [],
                                      n = (t.arcAngle * Math.PI) / 180,
                                      l = n / 2;
                                  for (let s = 0; s < a; s++) {
                                      let i = Math.PI / 2 + l - (s / (a - 1)) * n;
                                      e.push({ x: t.distance * Math.cos(i), y: 0, z: -t.distance * Math.sin(i) });
                                  }
                                  return e;
                              }
                              case "grid": {
                                  let e = [],
                                      n = t.gridColumns;
                                  for (let l = 0; l < a; l++) {
                                      let a = l % n,
                                          s = Math.floor(l / n);
                                      e.push({
                                          x: (a - (n - 1) / 2) * t.gridSpacing,
                                          y: 0,
                                          z: -(t.distance + s * t.gridSpacing),
                                      });
                                  }
                                  return e;
                              }
                              default:
                                  return [];
                          }
                      })(i, e, s.length)
                    : [],
            [i, e, s.length],
        );
    o.useEffect(() => {
        "manual" === i ||
            uV.Ay.getMediaEngine().eachConnection((e) => {
                s.forEach((t, a) => {
                    a < u.length && e.setUserPosition(t.userId, u[a]);
                });
            });
    }, [i, u, s]);
    let m = o.useCallback(
            (a) => {
                u2.A.setAudioMixerSettings({ ...e, ...a }, t);
            },
            [e, t],
        ),
        h = o.useRef(null),
        x = o.useCallback(
            (e) => {
                null !== h.current && clearTimeout(h.current),
                    (h.current = window.setTimeout(() => {
                        m({ roomSize: e }), (h.current = null);
                    }, 500));
            },
            [m],
        );
    return (0, r.jsx)(c.Ip, {
        className: tA.nd,
        children: (0, r.jsxs)("div", {
            className: mi.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: mi.ne,
                    children: [
                        (0, r.jsx)(T.D, {
                            variant: "heading-lg/semibold",
                            className: mi.R_,
                            children: "Spatial Audio",
                        }),
                        (0, r.jsxs)("div", {
                            className: mi.nM,
                            children: [
                                (0, r.jsx)(j.d, { checked: e.enabled, onChange: (e) => m({ enabled: e }) }),
                                (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Enabled" }),
                            ],
                        }),
                        (0, r.jsx)(v.c, { className: mi.yF }),
                        (0, r.jsx)(mt.z, { className: mi.Pf, children: "Placement Mode" }),
                        (0, r.jsx)("div", {
                            className: mi.XU,
                            children: mr.map((e) => {
                                let { value: t, label: a } = e;
                                return (0, r.jsx)(
                                    "button",
                                    {
                                        className: `${mi._V} ${i === t ? mi.cB : ""}`,
                                        onClick: () => m({ mode: t }),
                                        children: a,
                                    },
                                    t,
                                );
                            }),
                        }),
                        (0, r.jsx)(v.c, { className: mi.yF }),
                        (0, r.jsx)(mt.z, { className: mi.Pf, children: "Spatial Blend" }),
                        (0, r.jsx)(cM.A, {
                            className: mi.aw,
                            initialValue: e.spatialBlend,
                            minValue: 0,
                            maxValue: 1,
                            asValueChanges: (e) => m({ spatialBlend: e }),
                            onValueRender: (e) => e.toFixed(2),
                        }),
                        (0, r.jsx)(mt.z, { className: mi.Pf, children: "Room Size (m\xb2)" }),
                        (0, r.jsx)(cM.A, {
                            className: mi.aw,
                            initialValue: e.roomSize ?? 25,
                            minValue: 10,
                            maxValue: 150,
                            asValueChanges: x,
                            onValueRender: (e) => e.toFixed(0),
                        }),
                        "manual" !== i &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(mt.z, { className: mi.Pf, children: "Distance" }),
                                    (0, r.jsx)(cM.A, {
                                        className: mi.aw,
                                        initialValue: e.distance,
                                        minValue: 1,
                                        maxValue: 10,
                                        asValueChanges: (e) => m({ distance: e }),
                                        onValueRender: (e) => e.toFixed(1),
                                    }),
                                ],
                            }),
                        "line" === i &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(mt.z, { className: mi.Pf, children: "Spread" }),
                                    (0, r.jsx)(cM.A, {
                                        className: mi.aw,
                                        initialValue: e.spread,
                                        minValue: 0,
                                        maxValue: 10,
                                        asValueChanges: (e) => m({ spread: e }),
                                        onValueRender: (e) => e.toFixed(1),
                                    }),
                                ],
                            }),
                        "arc" === i &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(mt.z, { className: mi.Pf, children: "Arc Angle" }),
                                    (0, r.jsx)(cM.A, {
                                        className: mi.aw,
                                        initialValue: e.arcAngle ?? 180,
                                        minValue: 0,
                                        maxValue: 180,
                                        asValueChanges: (e) => m({ arcAngle: e }),
                                        onValueRender: (e) => `${e.toFixed(0)}\xb0`,
                                    }),
                                ],
                            }),
                        "grid" === i &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(mt.z, { className: mi.Pf, children: "Columns" }),
                                    (0, r.jsx)(cM.A, {
                                        className: mi.aw,
                                        initialValue: e.gridColumns ?? 3,
                                        minValue: 2,
                                        maxValue: 6,
                                        keyboardStep: 1,
                                        asValueChanges: (e) => m({ gridColumns: Math.round(e) }),
                                        onValueRender: (e) => e.toFixed(0),
                                    }),
                                    (0, r.jsx)(mt.z, { className: mi.Pf, children: "Spacing (m)" }),
                                    (0, r.jsx)(cM.A, {
                                        className: mi.aw,
                                        initialValue: e.gridSpacing ?? 1.5,
                                        minValue: 0.5,
                                        maxValue: 3,
                                        asValueChanges: (e) => m({ gridSpacing: e }),
                                        onValueRender: (e) => e.toFixed(1),
                                    }),
                                ],
                            }),
                    ],
                }),
                (0, r.jsx)(md, { mode: i, computedPositions: u, otherUsers: s }),
            ],
        }),
    });
}
var mv = a(803306),
    mj = a(243217),
    mb = a(189213),
    mf = a(528265),
    my = a(935208),
    m_ = a(878784);
let mC = [
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
function mE() {
    let [e, t] = o.useState(!1),
        a = (0, d.bG)([V.default], () => V.default.getCurrentUser()),
        n = (0, m_.Lh)(),
        l = (0, d.bG)([rR.A], () => rR.A.getPremiumTypeSubscription()),
        s = null != n ? (l7.VD[n]?.tenureReqNumMonths ?? 0) : 0,
        i = o.useCallback(
            async (e) => {
                let n = new Date();
                e > 0 ? n.setMonth(n.getMonth() - e) : n.setDate(n.getDate() - 7), n.setDate(n.getDate() - 2);
                let s = {
                    subscription_status: H.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: my.default.fromTimestamp(n.getTime()),
                };
                t(!0),
                    await nF.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: s, rejectWithError: !1 }),
                    await (0, mv.eO)(a.id),
                    await (0, o1.hP)(),
                    t(!1);
            },
            [l, a],
        );
    if (null != a && null != l)
        return (0, r.jsx)(p.l, {
            label: "Tenure",
            hideLabel: !0,
            selectionMode: "single",
            disabled: e,
            value: s,
            options: mC,
            onSelectionChange: i,
        });
}
var mS =
        (((l = {})[(l.DEFAULT = 0)] = "DEFAULT"),
        (l[(l.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (l[(l.FAILURE = 2)] = "FAILURE"),
        (l[(l.NONE = 3)] = "NONE"),
        l),
    mN =
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
async function mA(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: n, paymentType: l, sendReminderEmail: s } = a;
    return (
        await nF.Bo.post({
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
var mk = a(601107),
    mI = a(142798);
let mD = {
        [H.Dmq.UNPAID]: "Unpaid",
        [H.Dmq.ACTIVE]: "Active",
        [H.Dmq.PAST_DUE]: "Past Due",
        [H.Dmq.CANCELED]: "Canceled",
        [H.Dmq.ENDED]: "Ended",
        [H.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [H.Dmq.BILLING_RETRY]: "Billing Retry",
        [H.Dmq.PAUSED]: "Paused",
        [H.Dmq.PAUSE_PENDING]: "Pause Pending",
    },
    mT = {
        [mk.qf.UNKNOWN]: "Unknown",
        [mk.qf.ADMIN]: "Admin",
        [mk.qf.USER]: "User",
        [mk.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [mk.qf.DEFERRED_START]: "Deferred Start",
        [mk.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    mO = [
        { id: "unpaid", label: "Unpaid", value: H.Dmq.UNPAID },
        { id: "active", label: "Active", value: H.Dmq.ACTIVE },
        { id: "pastDue", label: "Past Due", value: H.Dmq.PAST_DUE },
        { id: "canceled", label: "Canceled", value: H.Dmq.CANCELED },
        { id: "ended", label: "Ended", value: H.Dmq.ENDED },
        { id: "accountHold", label: "Account Hold", value: H.Dmq.ACCOUNT_HOLD },
        { id: "billingRetry", label: "Billing Retry", value: H.Dmq.BILLING_RETRY },
        { id: "paused", label: "Paused", value: H.Dmq.PAUSED },
        { id: "pausePending", label: "Pause Pending", value: H.Dmq.PAUSE_PENDING },
    ];
function mR(e) {
    let { subscription: t, onClose: a, onUpdated: n, transitionState: l } = e,
        [s, i] = o.useState(a5()()),
        [d, c] = o.useState(a5()().format("HH:mm")),
        [u, h] = o.useState(!1),
        [x, p] = o.useState(void 0),
        g = async () => {
            if (null == s) return void p("Please select a target date");
            let [e, l] = d.split(":").map(Number),
                i = s.clone().hours(e).minutes(l).seconds(0).milliseconds(0);
            h(!0), p(void 0);
            try {
                await mA(t.id, mN.TIME_TRAVEL, { targetDate: i, paymentType: mS.DEFAULT, sendReminderEmail: !1 }),
                    n(),
                    a();
            } catch (e) {
                p(e.body?.message || e.message || "Failed to time travel");
            } finally {
                h(!1);
            }
        };
    return (0, r.jsx)(mb.Modal, {
        transitionState: l,
        onClose: () => (a(), Promise.resolve()),
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: a },
            { text: "Time Travel", variant: "primary", onClick: g, disabled: u || null == s },
        ],
        children: (0, r.jsxs)(I.B, {
            gap: 16,
            children: [
                (0, r.jsx)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, r.jsx)(s5.J, { label: "Target Date", value: s, onSelect: i }),
                (0, r.jsx)(m.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, r.jsx)("input", {
                        type: "time",
                        value: d,
                        onChange: (e) => {
                            c(e.target.value);
                        },
                        className: mI.Qn,
                    }),
                }),
                (0, r.jsxs)(I.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(A.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, r.jsxs)(I.B, {
                            gap: 4,
                            children: [
                                (0, r.jsxs)(A.E, {
                                    variant: "text-xs/normal",
                                    className: mI.JX,
                                    children: ["Start: ", a5()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(A.E, {
                                    variant: "text-xs/normal",
                                    className: mI.JX,
                                    children: ["End: ", a5()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != x && (0, r.jsx)(k.w, { type: "critical", children: x }),
            ],
        }),
    });
}
function mw(e) {
    var t;
    let a,
        { subscription: n, onUpdated: l } = e,
        [s, i] = o.useState(!1),
        [d, c] = o.useState(!1),
        [u, h] = o.useState(!1),
        [g, v] = o.useState(!1),
        [j, b] = o.useState(null),
        f = (e) => {
            let t = new Date(e);
            return my.default.fromTimestamp(t.getTime());
        },
        y = async (e) => {
            let { status: t = n.status, premiumStreakStart: a, endedAt: s } = e,
                i = {
                    subscription_status: t,
                    ...(null != a ? { premium_streak_started_at: f(a) } : null),
                    ...(null != s ? { ended_at: f(s) } : null),
                };
            await nF.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: i, rejectWithError: !1 }), l();
        },
        _ = async () => {
            try {
                await mA(n.id, mN.RENEW, {
                    targetDate: a5()(new Date()),
                    paymentType: mS.DEFAULT,
                    sendReminderEmail: !1,
                });
            } catch (e) {
                b(e.body?.message || e.message || "Failed to renew subscription");
            }
            l();
        },
        C = l7.hd[n.planIdFromItems]?.premiumType === l7.PremiumTypes.TIER_0,
        E = n.metadata?.ended_at,
        D = null != E ? new Date(E).toISOString().substring(0, 10) : "",
        T = [
            { id: "id", label: `ID: ${n.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = n.status), t in mD) ? mD[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        O = n.hasActiveTrial,
        R = n.metadata?.active_discount_id != null;
    return (
        O && T.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        R && T.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        n.status !== H.Dmq.ACTIVE &&
            T.push({
                id: "dates",
                label: `Dates: ${(0, nr.i$)(n.createdAt, "LL")} - ${(0, nr.i$)(n.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        n.status === H.Dmq.PAUSED &&
            T.push({
                id: "pause-reason",
                label: `Pause Reason: ${n.pauseReason in mT ? mT[n.pauseReason] : `Unknown pause reason ${n.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: S()(si.Nr, C ? si.Qf : si.C1),
            children: (0, r.jsxs)(m.n, {
                label: `Type: ${null == ((a = n.planIdFromItems)) ? "No plan id" : a in l7.hd ? l7.hd[a].name : `Unknown plan id ${a}`}`,
                className: mI.lI,
                children: [
                    (0, r.jsx)(mf.C, {
                        items: T,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    O &&
                        (0, r.jsxs)("div", {
                            className: mI.VK,
                            children: [
                                (0, r.jsxs)(N.D, {
                                    onClick: () => {
                                        h(!u);
                                    },
                                    className: mI.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(A.E, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, r.jsx)(l9.A, { direction: u ? l9.A.Directions.UP : l9.A.Directions.DOWN }),
                                    ],
                                }),
                                u &&
                                    (0, r.jsxs)("ul", {
                                        className: mI.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(A.E, { variant: "text-md/bold", children: "trial_id" }),
                                                    (0, r.jsx)(A.E, { variant: "text-sm/normal", children: n.trialId }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(A.E, {
                                                        variant: "text-md/bold",
                                                        children: "trial_ends_at",
                                                    }),
                                                    (0, r.jsx)(A.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            null != n.trialEndsAt
                                                                ? (0, nr.i$)(n.trialEndsAt, "LL")
                                                                : "N/A",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    R &&
                        (0, r.jsxs)("div", {
                            className: mI.VK,
                            children: [
                                (0, r.jsxs)(N.D, {
                                    onClick: () => {
                                        v(!g);
                                    },
                                    className: mI.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(A.E, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, r.jsx)(l9.A, { direction: g ? l9.A.Directions.UP : l9.A.Directions.DOWN }),
                                    ],
                                }),
                                g &&
                                    (0, r.jsxs)("ul", {
                                        className: mI.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(A.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, r.jsx)(A.E, {
                                                        variant: "text-sm/normal",
                                                        children: n.metadata?.active_discount_id,
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(A.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_expires_at",
                                                    }),
                                                    (0, r.jsx)(A.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            n.metadata?.active_discount_expires_at != null
                                                                ? (0, nr.i$)(
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
                            className: mI.VK,
                            children: [
                                (0, r.jsxs)(N.D, {
                                    onClick: () => {
                                        i(!s);
                                    },
                                    className: mI.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(A.E, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, r.jsx)(l9.A, { direction: s ? l9.A.Directions.UP : l9.A.Directions.DOWN }),
                                    ],
                                }),
                                s &&
                                    (0, r.jsx)("ul", {
                                        className: mI.j3,
                                        children: Object.entries(n.metadata).map((e) => {
                                            let [t, a] = e;
                                            return (0, r.jsxs)(
                                                "li",
                                                {
                                                    children: [
                                                        (0, r.jsx)(A.E, { variant: "text-md/bold", children: t }),
                                                        (0, r.jsx)(A.E, { variant: "text-sm/normal", children: a }),
                                                    ],
                                                },
                                                t,
                                            );
                                        }),
                                    }),
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: mI.VK,
                        children: [
                            (0, r.jsxs)(N.D, {
                                onClick: () => {
                                    c(!d);
                                },
                                className: mI.Eh,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(A.E, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, r.jsx)(l9.A, { direction: d ? l9.A.Directions.UP : l9.A.Directions.DOWN }),
                                ],
                            }),
                            d &&
                                (0, r.jsxs)(I.B, {
                                    gap: 24,
                                    children: [
                                        (0, r.jsx)(p.l, {
                                            label: "Status",
                                            value: n.status,
                                            options: mO,
                                            onSelectionChange: (e) => {
                                                y({ status: e });
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsxs)(I.B, {
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
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, ek.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, r.jsx)(mR, {
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
                                                    (0, r.jsx)("div", {
                                                        className: mI.z3,
                                                        children: (0, r.jsx)(k.w, { type: "critical", children: j }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)(I.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(s5.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: a5()(n.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => y({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(mE, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(s5.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== D ? a5()(D) : void 0,
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
let mM = async () =>
        (
            await nF.Bo.get({
                url: H.Rsh.BILLING_SUBSCRIPTIONS,
                query: { include_inactive: !0, limit: 5 },
                rejectWithError: !1,
            })
        ).body.map((e) => mj.A.createFromServer(e)),
    mL = [
        { id: "nitro-monthly", label: "Nitro Monthly", value: l7.gD.PREMIUM_MONTH_TIER_2 },
        { id: "nitro-yearly", label: "Nitro Yearly", value: l7.gD.PREMIUM_YEAR_TIER_2 },
        { id: "nitro-classic-monthly", label: "Nitro Classic Monthly", value: l7.gD.PREMIUM_MONTH_TIER_1 },
        { id: "nitro-classic-yearly", label: "Nitro Classic Yearly", value: l7.gD.PREMIUM_YEAR_TIER_1 },
        { id: "basic-monthly", label: "Basic Monthly", value: l7.gD.PREMIUM_MONTH_TIER_0 },
        { id: "basic-yearly", label: "Basic Yearly", value: l7.gD.PREMIUM_YEAR_TIER_0 },
        { id: "reverse-trial-1week", label: "Reverse Trial 1-week", value: l7.gd },
        { id: "reverse-trial-2week", label: "Reverse Trial 2-week", value: l7.Uk },
        { id: "nitro-squad-monthly", label: "Nitro Squad Monthly", value: l7.gD.PREMIUM_GROUP_MONTH },
    ];
function mP() {
    let e = (0, d.bG)([rR.A], () => rR.A.getPremiumTypeSubscription()),
        t = (0, d.bG)([V.default], () => V.default.getCurrentUser()),
        [a, n] = o.useState("511651880837840896"),
        [l, s] = o.useState([]),
        [i, u] = o.useState(!1),
        m = o.useCallback(async () => {
            try {
                u(!0), await (0, o1.hP)(), await (0, mv.eO)(t.id), s(await mM());
            } finally {
                u(!1);
            }
        }, [t]);
    o.useEffect(() => {
        m();
    }, [m]);
    let h = o.useMemo(() => l.filter((e) => e.status !== H.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [l]),
        g = async () => {
            await nF.Bo.post({ url: "/debug/subscription", body: { plan_id: a }, rejectWithError: !1 }), await m();
        },
        v = async () => {
            await nF.Bo.del({ url: "/debug/subscription", rejectWithError: !1 }), await m();
        };
    return (0, r.jsx)(c.Ip, {
        className: tA.nd,
        children: (0, r.jsxs)("div", {
            className: si.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: si.dL,
                    children: [
                        (0, r.jsx)(T.D, {
                            variant: "heading-lg/semibold",
                            className: tA.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, r.jsx)(eS.K, {
                            "aria-label": "Refresh",
                            icon: l5.f,
                            size: "sm",
                            variant: "icon-only",
                            disabled: i,
                            onClick: m,
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: S()([si.uW, si.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(p.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: mL,
                                    onSelectionChange: n,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Create Subscription",
                                    onClick: g,
                                }),
                            ],
                        }),
                }),
                null != e && (0, r.jsx)(mw, { subscription: e, onUpdated: m }),
                (0, r.jsx)(T.D, { variant: "heading-lg/semibold", className: tA.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: S()([si.uW, si.Uo]),
                    children: (0, r.jsx)(x.$, {
                        variant: "primary",
                        size: "sm",
                        text: "End All Subscriptions",
                        onClick: v,
                    }),
                }),
                h.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(T.D, {
                                variant: "heading-lg/semibold",
                                className: tA.wx,
                                children: "Previous Subscriptions",
                            }),
                            h.map((e) => (0, r.jsx)(mw, { subscription: e, onUpdated: m }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var mU = a(284009),
    mG = a.n(mU),
    mB = a(889137),
    mF = a(412703),
    mV = a(440703),
    m$ = a(267548),
    mW = a(668824),
    mz = a(695366),
    mH = a(359778),
    mK = a(507107),
    mY = a(801365),
    mq = a(792620),
    mJ = a(241124),
    mQ = a(28082),
    mX = a(717695),
    mZ = a(961974),
    m0 = a(127219),
    m1 = a(262514),
    m2 = a(291922),
    m8 = a(317097),
    m3 = a(452027),
    m6 = a(922016),
    m5 = a(714385),
    m9 = a(359923);
let m4 = function (e) {
    let { colorKey: t, value: a, onChange: n, title: l } = e,
        s = o.useRef(null);
    return (0, r.jsx)(m3.D, {
        label: l,
        children: (0, r.jsx)(m6.Y, {
            targetElementRef: s,
            renderPopout: (e) => (0, r.jsx)(cl.VN, { ...e, value: a, onChange: (e) => n(t, (0, m8.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(N.D, {
                    ...e,
                    innerRef: s,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: m9.O6,
                    style: { backgroundColor: a },
                    children: (0, r.jsx)(m5.d, { size: "xs", color: "currentColor", className: m9.WY }),
                }),
        }),
    });
};
var m7 = a(247928);
let he = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: n = !1 } = e;
    return (0, r.jsx)(m7.M, {
        children: (0, r.jsx)(mH.Z, {
            className: S()(m9.Rx, { [m9.aK]: n }),
            outline: n,
            children: (0, r.jsx)("div", {
                className: m9.AZ,
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
var ht = a(643374);
let ha = function (e) {
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
            (0, r.jsx)(m3.D, {
                label: s,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, r.jsx)(ht.A, {
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
    hn = function (e) {
        let { assetKey: t, initialValue: a, onMessageChange: n, title: l } = e,
            [s, i] = o.useState("");
        return (
            o.useEffect(() => {
                i(a ?? "");
            }, [a]),
            (0, r.jsx)(g.k, {
                label: l,
                value: s,
                onChange: function (e) {
                    i(e), n(t, e);
                },
            })
        );
    };
var hl = a(31587);
let hs = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: n } = (0, hl.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
        l = [
            { id: "none", label: "NONE", value: null },
            ...n.map((e) => ({ id: e.id, label: e.config.messages.questName, value: e })),
        ];
    return (0, r.jsx)(p.l, {
        label: "Prefill with Quest",
        options: l,
        value: a,
        onSelectionChange: t,
        selectionMode: "single",
        fullWidth: !0,
    });
};
var hi = a(843282),
    hr = a(972886);
let ho = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    hd = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: n } = e;
        return (0, r.jsxs)(I.B, {
            gap: 20,
            children: [
                (0, r.jsx)(hi.Pw, {
                    label: "Task Type(s)",
                    className: hr.Z,
                    placeholder: "Select Task Preset",
                    options: ho,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, l, s, i, r;
                        return (
                            e ===
                            ((t = n.tasks),
                            (a = mF.n.PLAY_ON_PLAYSTATION in t || mF.n.PLAY_ON_XBOX in t),
                            (l = mF.n.PLAY_ON_DESKTOP in t),
                            (s = mF.n.STREAM_ON_DESKTOP in t),
                            (i = mF.n.WATCH_VIDEO in t),
                            (r = mF.n.PLAY_ACTIVITY in t),
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
                                        a[mF.n.STREAM_ON_DESKTOP] = { type: mF.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[mF.n.PLAY_ON_DESKTOP] = { type: mF.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        (a[mF.n.PLAY_ON_PLAYSTATION] = {
                                            type: mF.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[mF.n.PLAY_ON_XBOX] = {
                                                type: mF.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 4:
                                        (a[mF.n.PLAY_ON_DESKTOP] = { type: mF.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[mF.n.PLAY_ON_PLAYSTATION] = {
                                                type: mF.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[mF.n.PLAY_ON_XBOX] = {
                                                type: mF.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 2:
                                        a[mF.n.WATCH_VIDEO] = {
                                            type: mF.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[mF.n.PLAY_ACTIVITY] = { type: mF.n.PLAY_ACTIVITY, target: t };
                                }
                                return a;
                            })(e, a),
                        });
                    },
                    serialize: String,
                    "data-migration-pending": !0,
                }),
                (0, r.jsx)(g.k, {
                    label: "Task Duration",
                    value: String(a / n$.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= n$.A.Seconds.MINUTE;
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
var hc = a(818348);
let hu = function () {
    let e = (0, J.Ay)();
    return (0, r.jsx)(m3.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(Q.zy, {
                    theme: hc.NJ.LIGHT,
                    isSelected: e === hc.NJ.LIGHT,
                    onSelect: () => (0, d0.u_)({ theme: hc.NJ.LIGHT }),
                }),
                (0, r.jsx)(Q.zy, {
                    theme: hc.NJ.DARK,
                    isSelected: e === hc.NJ.DARK,
                    onSelect: () => (0, d0.u_)({ theme: hc.NJ.DARK }),
                }),
            ],
        }),
    });
};
var hm =
    (((i = {})[(i.UNENROLLED = 0)] = "UNENROLLED"),
    (i[(i.ENROLLED = 1)] = "ENROLLED"),
    (i[(i.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (i[(i.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (i[(i.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (i[(i.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (i[(i.CLAIMED = 6)] = "CLAIMED"),
    i);
let hh = function (e) {
    let { onChange: t, value: a } = e;
    return (0, r.jsx)(p.l, {
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
var hx = a(617986);
let hp = ["png", "gif", "webp"],
    hg = [...hp, "jpg", "jpeg"],
    hv = Array.from(new Set([...hg, "gif", "mp4", "webm"]));
function hj() {
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
let hb = "1193992107035983872",
    hf = {
        id: hb,
        preview: !0,
        config: {
            id: hb,
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
                        type: mV.l.REWARD_CODE,
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
                joinOperator: mW.K.AND,
                tasks: { [mF.n.PLAY_ON_DESKTOP]: { type: mF.n.PLAY_ON_DESKTOP, target: 300 } },
            },
            features: [],
            sharePolicy: m$.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function hy() {
    var e;
    let [t, n] = o.useState(hf),
        l = o.useCallback((e) => {
            n({ ...e, preview: !0 });
        }, []),
        [s, i] = o.useState(hm.UNENROLLED),
        [d, u] = o.useState(!1),
        [m, h] = o.useState(!1),
        [p, g] = o.useState(null),
        v =
            ((e = t.config),
            (0, mB.YW)(e)
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
                    (0, mB.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function f(e, a) {
        let n = t.config.taskConfigV2.tasks,
            s = n[mF.n.WATCH_VIDEO];
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
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...n, [mF.n.WATCH_VIDEO]: { ...s, assets: i } } },
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
                    (0, mB.YW)(n)
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
                    (0, mB.YW)(s)
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
    function E() {
        (0, mY.tU)(t.config) && (0, hx.hJ)(t, mK.uF.GIFT_INVENTORY_FOR_YOU, mK.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let S = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * n$.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        N = o.useMemo(() => mF.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    mG()(!1 !== t.preview && null != t.preview, "Preview config must have property preview: true");
    let k = t.config.taskConfigV2.tasks[mF.n.WATCH_VIDEO];
    return (0, r.jsxs)(c.Ip, {
        className: m9.kL,
        children: [
            (0, r.jsx)(T.D, { variant: "heading-lg/bold", className: m9.R_, children: "Quest Preview Tool" }),
            (0, r.jsx)("div", {
                className: m9.OA,
                children: (0, r.jsx)(hs, {
                    onSelect: function (e) {
                        g(e),
                            null == e ||
                                (i(
                                    (function (e) {
                                        if (null == e.userStatus) return hm.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return hm.CLAIMED;
                                        if (null != e.userStatus.completedAt) return hm.COMPLETED_100;
                                        let t = (0, mq.Yh)(e),
                                            a = t.progressSeconds,
                                            n = t.targetSeconds;
                                        return a / n >= 1
                                            ? hm.COMPLETED_100
                                            : a / n >= 0.75
                                              ? hm.COMPLETED_75
                                              : a / n >= 0.5
                                                ? hm.COMPLETED_50
                                                : a / n >= 0.25
                                                  ? hm.COMPLETED_25
                                                  : hm.ENROLLED;
                                    })(e),
                                ),
                                l(e));
                    },
                    quest: p,
                }),
            }),
            (0, r.jsx)(T.D, { variant: "heading-md/semibold", className: m9.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: m9.OA,
                children: (0, r.jsx)(hd, {
                    taskDuration: S,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        l({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)(T.D, { variant: "heading-md/semibold", className: m9.fV, children: "Messages" }),
            (0, r.jsxs)("div", {
                className: m9.OA,
                children: [
                    (0, r.jsx)(hn, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: y,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, r.jsx)(hn, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: y,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(hn, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: y,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    N &&
                        (0, r.jsx)(hn, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let n = t.config.taskConfigV2.tasks,
                                    s = n[mF.n.WATCH_VIDEO];
                                if (null == s) return;
                                let i = { ...s.messages, [e]: a };
                                l({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...n, [mF.n.WATCH_VIDEO]: { ...s, messages: i } },
                                        },
                                    },
                                });
                            },
                            initialValue: k?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)(T.D, { variant: "heading-md/semibold", className: m9.fV, children: "Assets" }),
            (0, r.jsxs)("div", {
                className: m9.OA,
                children: [
                    (0, r.jsx)(ha, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: b,
                        filters: hv,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, r.jsx)(ha, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: b,
                        filters: hv,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, r.jsx)(ha, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: b,
                        filters: hv,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(ha, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: b,
                        filters: hv,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, r.jsx)(ha, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: b,
                        filters: [...hg, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, r.jsx)(ha, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: b,
                        filters: [...hp, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    N &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(ha, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: f,
                                    filters: hv,
                                    initialValue: k?.assets.video.url,
                                }),
                                (0, r.jsx)(ha, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: f,
                                    filters: hv,
                                    initialValue: k?.assets.videoLowRes?.url,
                                }),
                                (0, r.jsx)(ha, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: f,
                                    filters: hg,
                                    initialValue: k?.assets.video.thumbnail,
                                }),
                            ],
                        }),
                ],
            }),
            v.map((e, a) =>
                (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsxs)(T.D, {
                                variant: "heading-md/semibold",
                                className: m9.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: m9.OA,
                                children: [
                                    (0, r.jsx)(hn, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => _(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(hn, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => _(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== mV.l.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(ha, {
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
                                                                (0, mB.YW)(s)
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
                                            filters: hv,
                                            initialValue: e.asset,
                                        }),
                                    (0, r.jsxs)(I.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(T.D, {
                                                variant: "heading-sm/semibold",
                                                children: "Claim Modal",
                                            }),
                                            (0, r.jsx)(x.$, {
                                                variant: "primary",
                                                text: "Open Reward Modal",
                                                onClick: E,
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
            (0, r.jsx)(T.D, { variant: "heading-md/semibold", className: m9.fV, children: "Colors & Quest States" }),
            (0, r.jsxs)("div", {
                className: m9.OA,
                children: [
                    (0, r.jsxs)("div", {
                        className: m9.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(m4, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: C,
                                value: t.config.colors.primary,
                            }),
                            (0, r.jsx)(m4, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: C,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: m9.OA, children: (0, r.jsx)(hu, {}) }),
                    (0, r.jsx)(hh, {
                        onChange: function (e) {
                            switch ((i(e), e)) {
                                case hm.UNENROLLED:
                                    l({ ...t, userStatus: null });
                                    break;
                                case hm.ENROLLED:
                                    l({ ...t, userStatus: hj({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case hm.COMPLETED_25:
                                    l({
                                        ...t,
                                        userStatus: hj({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * S,
                                        }),
                                    });
                                    break;
                                case hm.COMPLETED_50:
                                    l({
                                        ...t,
                                        userStatus: hj({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * S,
                                        }),
                                    });
                                    break;
                                case hm.COMPLETED_75:
                                    l({
                                        ...t,
                                        userStatus: hj({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * S,
                                        }),
                                    });
                                    break;
                                case hm.COMPLETED_100:
                                    l({
                                        ...t,
                                        userStatus: hj({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: S,
                                        }),
                                    });
                                    break;
                                case hm.CLAIMED:
                                    l({
                                        ...t,
                                        userStatus: hj({
                                            claimedAt: new Date().toISOString(),
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: S,
                                        }),
                                    });
                            }
                        },
                        value: s,
                    }),
                ],
            }),
            (0, r.jsx)(T.D, { variant: "heading-lg/bold", className: m9.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: m9.$$,
                children: [
                    (0, r.jsxs)(he, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: m9.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, r.jsx)(A.E, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: m9.ok,
                                        children: (0, r.jsx)(mJ.jY, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, r.jsx)(mX.A, { children: (0, r.jsx)(mQ.Y, { quest: t }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(he, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(mJ.jY, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, r.jsx)(m2.Ay, {
                                    quest: t,
                                    className: m9.d,
                                    questContent: mK.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: mK.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(he, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Channel Call Header" }),
                            t.userStatus?.claimedAt != null &&
                                (0, r.jsx)(A.E, {
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, r.jsx)("div", {
                                className: m9.l4,
                                children: (0, r.jsx)(mJ.jY, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, r.jsx)("div", {
                                        className: m9.Jr,
                                        children: (0, r.jsx)(mZ.A, {
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
                        className: m9.NY,
                        children: (0, r.jsx)(j.d, {
                            label: "Is Participating:",
                            checked: d,
                            onChange: function (e) {
                                u(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(he, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            m
                                ? (0, r.jsx)(m0.l, { questId: t.id })
                                : (0, r.jsx)(
                                      m1.M,
                                      {
                                          quest: t,
                                          location: mK.uF.QUESTS_EMBED,
                                          sourceQuestContent: mK.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: m9.NY,
                        children: (0, r.jsx)(j.d, { label: "Invalid Quests Embed:", checked: m, onChange: h }),
                    }),
                    N &&
                        (0, r.jsxs)(he, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Video Player" }),
                                (0, r.jsx)(x.$, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        let e = performance.now();
                                        (0, ek.openModalLazy)(async () => {
                                            let { default: n } = await Promise.all([
                                                a.e("42971"),
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
                                                    sourceQuestContent: mK.uF.INTERNAL_PREVIEW_TOOL,
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
class h_ extends o.Component {
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
                  className: m9.TA,
                  children: [
                      (0, r.jsx)(mz.E, { className: m9.Yw }),
                      (0, r.jsx)(T.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(x.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, r.jsx)(mH.Z, {
                              className: m9.Fx,
                              children: (0, r.jsx)("code", { className: m9.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, r.jsx)(hy, {}, t);
    }
}
var hC = a(913122),
    hE = a(839214),
    hS = a(77138),
    hN = a(450827),
    hA = a(626584),
    hk = a(174768),
    hI = a(205761),
    hD = a(860071),
    hT = a(696451),
    hO = a(860689),
    hR = a(926140);
let hw = new hA.A("SearchDebugUtils");
function hM() {
    hw.info("--------------------------");
}
function hL() {
    let e = hk.A.getProps();
    hw.info("START Quick Switcher State"),
        hw.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((hw.info(`Result Type: ${e.type}`), e.type)) {
                case hR.rD.GUILD:
                    hw.info(`guild id: ${e.record.id}`);
                    break;
                case hR.rD.TEXT_CHANNEL:
                case hR.rD.VOICE_CHANNEL:
                    hw.info(`channel type: ${e.record.type}`),
                        hw.info(`channel id: ${e.record.id}`),
                        hw.info(`name: ${e.record.name}`);
                    break;
                case hR.rD.DM:
                    hw.info(`channel type: ${e.record.type}`),
                        hw.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (hw.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = V.default.getUser(e);
                                null != t &&
                                    (hw.info(`recipient username: ${t.username}`),
                                    hw.info(`recipient global name: ${Y.Ay.getGlobalName(t)}`),
                                    hw.info(`recipient nickname: ${t4.A.getNickname(t.id)}`));
                            }));
                    break;
                case hR.rD.GROUP_DM:
                    hw.info(`channel type: ${e.record.type}`),
                        hw.info(`channel id: ${e.record.id}`),
                        hw.info(`name: ${(0, t5.m1)(e.record, V.default, t4.A)}`),
                        e.record.isGroupDM() &&
                            (hw.info(`default name: ${(0, t5.ks)(e.record, V.default, t4.A)}`),
                            hw.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = V.default.getUser(e);
                                null != t &&
                                    (hw.info(`recipient username: ${t.username}`),
                                    hw.info(`recipient global name: ${Y.Ay.getGlobalName(t)}`),
                                    hw.info(`recipient nickname: ${t4.A.getNickname(t.id)}`));
                            }));
                    break;
                case hR.rD.USER:
                    hw.info(`user id: ${e.record.id}`),
                        hw.info(`username: ${e.record.username}`),
                        hw.info(`global name: ${Y.Ay.getGlobalName(e.record)}`),
                        hw.info(`nickname: ${t4.A.getNickname(e.record.id)}`),
                        hw.info(`guild nicknames: ${hT.Ay.getNicknames(e.record.id)}`);
            }
            hw.info(`frecency score: ${hI.A.getScoreWithoutFetchingLatest(e.record.id)}`), hM();
        }),
        hw.info("END Quick Switcher State\n");
}
async function hP() {
    hw.info("START User Search Worker State");
    let e = await hN.A.requestDebugState();
    null == e
        ? hw.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
              let [t, a] = e;
              hw.info(`id: ${t}`),
                  hw.info(`username: ${a.username}`),
                  hw.info(`global name: ${a.globalName}`),
                  hw.info(`nickname: ${a.friendNickname}`),
                  Object.entries(a.nicknames).forEach((e) => {
                      let [t, a] = e;
                      hw.info(`guild id: ${t}`), hw.info(`guild nickname: ${a}`);
                  }),
                  hM();
          }),
          hw.info("END User Search Worker State\n"));
}
async function hU() {
    let e = await hN.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        a = V.default.getUsers(),
        n = new Set(Object.keys(t)),
        l = my.default.keys(a),
        s = [];
    return (
        l.forEach((e) => {
            n.has(e) || s.push(e);
        }),
        s
    );
}
async function hG(e) {
    let t = await hN.A.requestDebugState(),
        a = null != t ? JSON.parse(t.users)[e] : null,
        n = a$.A.getGuildIds(),
        l = [];
    n.forEach((t) => {
        let a = hT.Ay.getMember(t, e);
        null != a && l.push(a);
    });
    let s = hD.A.getDebugState(e);
    return { user: V.default.getUser(e), searchWorkerUser: a, guildMembers: l, guildMemberRequests: s };
}
var hB = a(929948);
function hF(e) {
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
                (0, r.jsx)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: hB.qS,
                    children: n,
                }),
            a &&
                (0, r.jsx)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: hB.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let hV = (0, hE.D)(() => ({
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
function h$() {
    let e = hV.useField("includeFrecency"),
        t = hV.useField("includeFriends"),
        a = hV.useField("includeDMs"),
        n = hV.useField("includeGDMs"),
        l = hV.useField("includeQuickSwitcherState"),
        s = hV.useField("includeUserSearchWorkerState"),
        i = hV.useField("isUploading"),
        d = hV.useField("isSuccess"),
        c = hV.useField("errorMessage"),
        u = o.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: n,
                includeQuickSwitcherState: l,
                includeUserSearchWorkerState: s,
                isUploading: i,
            } = hV.getState();
            if (!i)
                try {
                    let i, r, o, d, c, u, m, h, x, p, g, v;
                    hV.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((i = t4.A.getFriendIDs()),
                            hw.info("START Discord Friends"),
                            i.forEach((e) => {
                                let t = V.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    n = Y.Ay.getGlobalName(t),
                                    l = t4.A.getNickname(t.id),
                                    s = hT.Ay.getNicknames(t.id);
                                hw.info(`username: ${a}`),
                                    hw.info(`global name: ${n}`),
                                    hw.info(`nickname: ${l}`),
                                    hw.info(`guild nicknames: ${s}`),
                                    hM();
                            }),
                            hw.info("END Discord Friends\n")),
                        a &&
                            ((r = t9.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                e.isGroupDM() && o.push(e), e.isDM() && d.push(e);
                            }),
                            hw.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, t5.m1)(e, V.default, t4.A),
                                    a = (0, t5.ks)(e, V.default, t4.A);
                                hw.info(`id: ${e.id}`),
                                    hw.info(`name: ${t}`),
                                    hw.info(`default name: ${a}`),
                                    hw.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = V.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = Y.Ay.getGlobalName(t),
                                            l = t4.A.getNickname(t.id),
                                            s = hT.Ay.getNicknames(t.id);
                                        hw.info(`username: ${a}`),
                                            hw.info(`global name: ${n}`),
                                            hw.info(`nickname: ${l}`),
                                            hw.info(`guild nicknames: ${s}`),
                                            hM();
                                    });
                            }),
                            hw.info("END Logging Group DM Channels\n"),
                            hw.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, t5.m1)(e, V.default, t4.A);
                                hw.info(`id: ${e.id}`), hw.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = V.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = Y.Ay.getGlobalName(n),
                                    i = t4.A.getNickname(n.id);
                                hw.info(`username: ${l}`),
                                    hw.info(`global name: ${s}`),
                                    hw.info(`nickname: ${i}`),
                                    hM();
                            }),
                            hw.info("END Logging DM Channels\n")),
                        n &&
                            ((c = t9.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                e.isGroupDM() && u.push(e), e.isDM() && m.push(e);
                            }),
                            hw.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, t5.m1)(e, V.default, t4.A),
                                    a = (0, t5.ks)(e, V.default, t4.A);
                                hw.info(`id: ${e.id}`),
                                    hw.info(`name: ${t}`),
                                    hw.info(`default name: ${a}`),
                                    hw.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = V.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = Y.Ay.getGlobalName(t),
                                            l = t4.A.getNickname(t.id),
                                            s = hT.Ay.getNicknames(t.id);
                                        hw.info(`username: ${a}`),
                                            hw.info(`global name: ${n}`),
                                            hw.info(`nickname: ${l}`),
                                            hw.info(`guild nicknames: ${s}`),
                                            hM();
                                    });
                            }),
                            hw.info("END Logging Group DM Channels\n"),
                            hw.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, t5.m1)(e, V.default, t4.A);
                                hw.info(`id: ${e.id}`), hw.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = V.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = Y.Ay.getGlobalName(n),
                                    i = t4.A.getNickname(n.id);
                                hw.info(`username: ${l}`),
                                    hw.info(`global name: ${s}`),
                                    hw.info(`nickname: ${i}`),
                                    hM();
                            }),
                            hw.info("END Logging DM Channels\n")),
                        e &&
                            ((h = hI.A.getFrequentlyWithoutFetchingLatest()),
                            (x = []),
                            (p = []),
                            (g = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, hO.fh)(e)
                                    ? x.push(e)
                                    : e.isDM()
                                      ? g.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : p.push(e);
                            }),
                            hw.info("START Frecency"),
                            hw.info("Guilds"),
                            x.forEach((e) => {
                                let t = hI.A.getScoreWithoutFetchingLatest(e.id);
                                hw.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            hM(),
                            hw.info("DM Channels"),
                            g.forEach((e) => {
                                let t = hI.A.getScoreWithoutFetchingLatest(e.id);
                                hw.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            hM(),
                            hw.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = hI.A.getScoreWithoutFetchingLatest(e.id);
                                hw.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    hw.info(`default name: ${(0, t5.ks)(e, V.default, t4.A)}`),
                                    hw.info(`name: ${(0, t5.m1)(e, V.default, t4.A)}`);
                            }),
                            hM(),
                            hw.info("Guild Channels"),
                            p.forEach((e) => {
                                let t = hI.A.getScoreWithoutFetchingLatest(e.id);
                                hw.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            hM(),
                            hw.info("END Frecency\n")),
                        l && hL(),
                        s && hP(),
                        await (0, hS.a)(H.Umv.WEB_APP),
                        hV.setState({ isSuccess: !0, errorMessage: null });
                } catch (t) {
                    let e = new hC.LG(t);
                    hV.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    hV.setState({ isUploading: !1 });
                }
        }, []);
    return (0, r.jsxs)(m.n, {
        label: "Debug Logs Snapshot",
        description:
            "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
        children: [
            (0, r.jsx)(j.d, {
                label: "Frecency",
                description:
                    "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
                checked: e,
                onChange: () => hV.setState({ includeFrecency: !e }),
            }),
            (0, r.jsx)(j.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => hV.setState({ includeFriends: !t }),
            }),
            (0, r.jsx)(j.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => hV.setState({ includeDMs: !a }),
            }),
            (0, r.jsx)(j.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => hV.setState({ includeGDMs: !n }),
            }),
            (0, r.jsx)(j.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: l,
                onChange: () => hV.setState({ includeQuickSwitcherState: !l }),
            }),
            (0, r.jsx)(j.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: s,
                onChange: () => hV.setState({ includeUserSearchWorkerState: !s }),
            }),
            (0, r.jsx)(hF, {
                isUploading: i,
                isSuccess: d,
                errorMessage: c,
                onClick: u,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let hW = (0, hE.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function hz() {
    let e = hW.useField("userIds"),
        t = hW.useField("isLoading"),
        a = hW.useField("isSuccess"),
        n = hW.useField("errorMessage"),
        l = hW.useField("lastRunAt"),
        s = o.useCallback(async () => {
            hW.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await hU();
                hW.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                hW.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                hW.setState({ isLoading: !1 });
            }
        }, []),
        i = o.useMemo(
            () =>
                e.map((e) => {
                    let t = V.default.getUser(e),
                        a = null != t ? Y.Ay.getName(t) : "Unknown";
                    return (0, r.jsx)(
                        "div",
                        {
                            className: hB.J1,
                            children: (0, r.jsx)(A.E, { variant: "text-md/normal", children: `${a} (${e})` }),
                        },
                        e,
                    );
                }),
            [e],
        );
    return (0, r.jsx)(m.n, {
        label: "Diff User State",
        description: "Click to generate a diff between the client user state and the user worker state.",
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(x.$, { onClick: s, text: "Diff User State", loading: t, disabled: t }),
                (0, r.jsxs)("div", {
                    className: hB.N6,
                    children: [
                        null != n &&
                            (0, r.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: hB.qS,
                                children: n,
                            }),
                        a &&
                            e.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(A.E, { variant: "text-md/normal", children: `Last run at: ${l}` }),
                                    (0, r.jsx)(A.E, {
                                        variant: "text-md/normal",
                                        children: "User IDs missing from Worker:",
                                    }),
                                    (0, r.jsx)("div", { className: hB.uk, children: i }),
                                ],
                            }),
                        a &&
                            0 === e.length &&
                            (0, r.jsx)(A.E, { variant: "text-md/normal", children: "No users missing from Worker" }),
                    ],
                }),
            ],
        }),
    });
}
let hH = (0, hE.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function hK() {
    let e = hH.useField("isRecording"),
        t = hH.useField("isUploading"),
        a = hH.useField("isSuccess"),
        n = hH.useField("errorMessage"),
        l = o.useRef([]),
        s = o.useRef(""),
        i = o.useCallback(() => {
            let { results: e, query: t } = hk.A.getProps();
            (l.current !== e || s.current !== t) && ((l.current = e), (s.current = t), hL());
        }, []);
    o.useEffect(() => {
        if (e) return hk.A.addChangeListener(i), () => hk.A.removeChangeListener(i);
    }, [i, e]);
    let d = o.useCallback(async () => {
        let { isUploading: e } = hH.getState();
        if (!e)
            try {
                hH.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, hS.a)(H.Umv.WEB_APP),
                    hH.setState({ isSuccess: !0, errorMessage: null });
            } catch (t) {
                let e = new hC.LG(t);
                hH.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                hH.setState({ isUploading: !1 });
            }
    }, []);
    return (0, r.jsxs)(m.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, r.jsx)(uP.p, {
                messageType: uP.Y.INFO,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, r.jsxs)(lX.e, {
                children: [
                    (0, r.jsx)(x.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => hH.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(hF, {
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
var hY = a(145497);
let hq = (0, hE.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function hJ(e) {
    let { title: t, guildIds: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: hB.J1,
                children: (0, r.jsx)(A.E, { variant: "text-sm/normal", children: t }),
            }),
            (0, r.jsxs)("div", {
                className: hB.uk,
                children: [
                    0 === a.length &&
                        (0, r.jsx)("div", {
                            className: hB.J1,
                            children: (0, r.jsx)(A.E, { variant: "text-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = a$.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: hB.J1,
                                      children: [
                                          (0, r.jsx)(hY.Ay, { guild: t, iconSize: 16 }),
                                          (0, r.jsx)(A.E, { variant: "text-sm/normal", children: t.name }),
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
function hQ(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: n, guildMembers: l, guildMemberRequests: s } = t,
        i = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(sU.y, { size: "sm", color: eI.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(mz.E, { size: "sm", color: eI.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, r.jsxs)("div", {
        className: hB.N6,
        children: [
            (0, r.jsxs)("div", {
                className: hB.J1,
                children: [
                    i({ ok: null != a }),
                    (0, r.jsx)(A.E, {
                        variant: "text-sm/normal",
                        children: null != a ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != a &&
                (0, r.jsx)("div", {
                    className: hB.uk,
                    children: (0, r.jsx)("div", {
                        className: hB.J1,
                        children: (0, r.jsx)(A.E, { variant: "text-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: hB.J1,
                children: [
                    i({ ok: null != n }),
                    (0, r.jsx)(A.E, {
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
                    className: hB.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: hB.J1,
                            children: (0, r.jsx)(A.E, {
                                variant: "text-sm/normal",
                                children: `username: ${n.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: hB.J1,
                            children: (0, r.jsx)(A.E, {
                                variant: "text-sm/normal",
                                children: `global name: ${n.globalName ?? "\u2014"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: hB.J1,
                            children: (0, r.jsx)(A.E, { variant: "text-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: hB.uk,
                            children: [
                                0 === Object.keys(n.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: hB.J1,
                                        children: (0, r.jsx)(A.E, { variant: "text-sm/normal", children: "None" }),
                                    }),
                                Object.entries(n.nicknames).map((e) => {
                                    let [t, a] = e,
                                        n = a$.A.getGuild(t),
                                        l = t9.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: hB.J1,
                                            children: [
                                                null != n && (0, r.jsx)(hY.Ay, { guild: n, iconSize: 16 }),
                                                null != n &&
                                                    (0, r.jsx)(A.E, { variant: "text-sm/normal", children: n.name }),
                                                null == n &&
                                                    null != l &&
                                                    (0, r.jsx)(A.E, {
                                                        variant: "text-sm/normal",
                                                        children: (0, t5.m1)(l, V.default, t4.A),
                                                    }),
                                                (0, r.jsx)(A.E, { variant: "text-sm/normal", children: ` (${t})` }),
                                                null != a &&
                                                    "" !== a &&
                                                    (0, r.jsx)(A.E, { variant: "text-sm/normal", children: ` - ${a}` }),
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
                className: hB.J1,
                children: [
                    i({ ok: l.length > 0 }),
                    (0, r.jsx)(A.E, {
                        variant: "text-sm/normal",
                        children: l.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            l.length > 0 &&
                (0, r.jsx)("div", {
                    className: hB.uk,
                    children: l.map((e) => {
                        let t = a$.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: hB.J1,
                                children: [
                                    (0, r.jsx)(hY.Ay, { guild: t, iconSize: 16 }),
                                    (0, r.jsxs)(A.E, {
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
                className: hB.J1,
                children: [
                    (0, r.jsx)(ca.m, { size: "sm" }),
                    (0, r.jsx)(A.E, { variant: "text-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != s &&
                (0, r.jsxs)("div", {
                    className: hB.uk,
                    children: [
                        (0, r.jsx)(hJ, { title: "Pending Guild Member Requests:", guildIds: s.pendingRequestGuildIds }),
                        (0, r.jsx)(hJ, { title: "Sent Guild Member Requests:", guildIds: s.sentRequestGuildIds }),
                        (0, r.jsx)(hJ, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: s.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function hX() {
    let e = o.useCallback((e) => {
            hq.setState({ userId: e, state: null });
        }, []),
        t = o.useCallback(async () => {
            let { userId: e, loading: t } = hq.getState();
            if (!t && null != e) {
                hq.setState({ loading: !0, error: null });
                try {
                    let t = await hG(e);
                    hq.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new hC.LG(t);
                    hq.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    hq.setState({ loading: !1 });
                }
            }
        }, []),
        a = hq.useField("loading");
    return (0, r.jsxs)("div", {
        className: hB.$n,
        children: [
            (0, r.jsx)(g.k, { placeholder: "User ID", onChange: e }),
            (0, r.jsx)(x.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function hZ() {
    let e = hq.useField("state"),
        t = hq.useField("error");
    return (0, r.jsxs)(m.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, r.jsx)(hX, {}),
            null != t &&
                (0, r.jsx)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: hB.qS,
                    children: t,
                }),
            null != e && (0, r.jsx)(hQ, { userState: e }),
        ],
    });
}
function h0() {
    return (0, r.jsxs)(c.Ip, {
        className: hB.nd,
        children: [
            (0, r.jsx)(hK, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(h$, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(hZ, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(hz, {}),
        ],
    });
}
var h1 = a(761508),
    h2 = a(599147),
    h8 = a(808411),
    h3 = a(624716),
    h6 = a(398590),
    h5 = a(848281),
    h9 = a(263419),
    h4 = a(52822),
    h7 = a(642153);
let xe = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    xt = {
        "virtual-currency": function () {
            return (0, r.jsxs)(h4.Hq, {
                label: "Open New Revenue Storybook",
                direction: "vertical",
                children: [
                    (0, r.jsx)(A.E, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        style: { marginBottom: "8px" },
                        children: "This section is deprecated. Use button to open the new Revenue Storybook instead.",
                    }),
                    (0, r.jsx)(x.$, {
                        onClick: () => {
                            var e;
                            return (
                                (e = h9.RevenuePlaygroundCollectionId.VIRTUAL_CURRENCY),
                                void (h5.PlaygroundStore.setState({ selectedCollection: e, selectedStory: null }),
                                (0, h6.id)(H.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: () =>
            (0, r.jsxs)("div", { children: [(0, r.jsx)(h2.o, {}), (0, r.jsx)(h8.A, {}), (0, r.jsx)(h3.A, {})] }),
    };
function xa() {
    let [e, t] = o.useState("virtual-currency"),
        a = o.useMemo(() => xt[e], [e]);
    return (0, r.jsxs)("div", {
        className: S()(tA.nd, h7.kL),
        children: [
            (0, r.jsx)(h1.V, {
                className: h7.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: xe.map((e) => (0, r.jsx)(h1.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, r.jsx)(c.Ar, { children: (0, r.jsx)("div", { className: h7.Qs, children: (0, r.jsx)(a, {}) }) }),
        ],
    });
}
var xn = a(718446),
    xl = a(766075),
    xs = a(355097);
let xi = (0, hE.D)(() => ({ urlString: "", error: null })),
    xr = Object.entries(xs.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function xo() {
    let [e, t] = o.useState(),
        a = xi.useField("urlString"),
        n = xi.useField("error"),
        l = o.useCallback(() => {
            let e = xi.getField("urlString");
            if (null == e || "" === e) return void xi.setState({ error: "URL is required" });
            let t = (0, xn.parseSettingsUrl)({ path: e });
            ((0, xn.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? xi.setState({ error: "String did not match expected format" })
                : (0, xl.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, r.jsxs)(m.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, r.jsx)(tQ.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: xr,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = xs.od[e].split("/");
                        xi.setState({ urlString: H.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, r.jsx)(g.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => xi.setState({ urlString: e, error: null }),
            }),
            (0, r.jsxs)(lX.e, {
                children: [
                    (0, r.jsx)(x.$, {
                        variant: "primary",
                        onClick: l,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(x.$, {
                        variant: "secondary",
                        onClick: () => (0, ni.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != n && (0, r.jsx)(A.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var xd = a(780964);
let xc = (0, hE.D)(() => ({ setting: xd.X.ACCOUNT_PANEL }));
function xu() {
    let e = xc.useField("setting"),
        t = o.useCallback(() => {
            (0, xl.openUserSettings)(e);
        }, [e]),
        a = o.useMemo(() => Object.values(xd.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, r.jsxs)(m.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, r.jsx)(tQ.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => xc.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, r.jsx)(x.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var xm = a(963935),
    xh = a(755322),
    xx = a(53181);
function xp(e) {
    let { title: t, initExpanded: a, highlightMode: n = "none", children: l } = e,
        [s, i] = o.useState(a),
        d = o.useCallback(() => {
            i(!s);
        }, [s]),
        c = "migrated" === n || "migrated-root" === n ? void 0 : "status-warning",
        u = (e) => (0, r.jsx)(A.E, { variant: e, color: c, children: t });
    return null == l
        ? (0, r.jsx)("div", { className: xx.NF, children: u("text-md/normal") })
        : (0, r.jsxs)("div", {
              className: xx.NF,
              children: [
                  (0, r.jsxs)(N.D, {
                      className: xx.jr,
                      onClick: d,
                      children: [
                          u("text-md/bold"),
                          (0, r.jsx)(l9.A, {
                              direction: s ? l9.A.Directions.DOWN : l9.A.Directions.RIGHT,
                              className: xx.D,
                          }),
                      ],
                  }),
                  s && (0, r.jsx)("div", { className: xx.m4, children: l }),
              ],
          });
}
function xg(e) {
    let { setting: t, depth: a, inheritedHighlightMode: n } = e,
        l = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case xm.Z6.ROOT:
                    return "migrated-root";
                case xm.Z6.SECTION:
                case xm.Z6.PANEL:
                case xm.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, n),
        s = "migrated" === l ? "migrated" : void 0,
        i = null;
    return (
        (0, xm.nW)(t) &&
            t.layout.length > 0 &&
            (i = t.layout.map((e) => (0, r.jsx)(xg, { setting: e, depth: a + 1, inheritedHighlightMode: s }, e.key))),
        (0, r.jsx)(xp, { title: t.key, initExpanded: a <= 2, highlightMode: l, children: i })
    );
}
function xv() {
    let { node: e } = (0, B.Ay)(xh.D, ""),
        t = (0, B.KA)();
    return (0, r.jsxs)(m.n, {
        label: "Settings Tree",
        children: [
            (0, r.jsx)(j.d, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: t,
                onChange: B.jL,
            }),
            (0, r.jsx)(xg, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var xj = a(168803);
function xb() {
    return (0, r.jsxs)(c.Ip, {
        className: xj.n,
        children: [
            (0, r.jsx)(xu, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(xo, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(xv, {}),
        ],
    });
}
function xf() {
    return o.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: aR.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(nI, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: aR.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(uL, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: aR.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(uT, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: aR.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(lY, {}),
            },
        ];
        return (
            aj.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: aR.fu.SHOP, render: () => (0, r.jsx)(uy, {}) }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: aR.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(di, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: aR.fu.SHOP,
                    render: () => (0, r.jsx)(tb, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: aR.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, r.jsx)(cN, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: aR.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(lQ, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: aR.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(dL.Ay, {}),
                }),
                e.push({
                    id: "age_verification",
                    name: "Age Verification",
                    group: aR.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(a3, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: aR.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(l3, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: aR.fu.GAMES, render: () => (0, r.jsx)(oX, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: aR.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(s6, {}),
                }),
                e.push({
                    id: "detected_games",
                    name: "Detected Games",
                    group: aR.fu.GAMES,
                    render: () => (0, r.jsx)(lk, {}),
                }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: aR.fu.GAMES, render: () => (0, r.jsx)(uC, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: aR.fu.GAMES,
                    render: () => (0, r.jsx)(aJ, {}),
                }),
                e.push({
                    id: "slayer_storefront",
                    name: "Slayer Storefront",
                    group: aR.fu.GAMES,
                    render: () => (0, r.jsx)(av, {}),
                }),
                e.push({
                    id: "game_profile",
                    name: "Game Profile",
                    group: aR.fu.GAMES,
                    render: () => (0, r.jsx)(t3, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: aR.fu.USERS,
                    render: () => (0, r.jsx)(h0, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: aR.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(C, {}) })),
            e.push({
                id: "rive",
                name: "Rive",
                group: aR.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(cD, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: aR.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag"],
                render: () => (0, r.jsx)(iU, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: aR.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rc, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: aR.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(i9, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: aR.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(n1, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: aR.fu.UI, render: () => (0, r.jsx)(lf, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: aR.fu.UI,
                render: () => (0, r.jsx)(ct, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: aR.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(sj, { devSettingsCategory: ab.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: aR.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(rk, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: aR.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(sj, { devSettingsCategory: ab.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: aR.fu.USERS, render: () => (0, r.jsx)(dY, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: aR.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(rP, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: aR.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(rp, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: aR.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(rs, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: aR.fu.USERS,
                tags: ["friends"],
                render: () => (0, r.jsx)(a0, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: aR.fu.USERS,
                tags: ["channels"],
                render: () => (0, r.jsx)(n0, {}),
            }),
            aj.A.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: aR.fu.USERS,
                    render: () => (0, r.jsx)(tq, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: aR.fu.USERS,
                    render: () => (0, r.jsx)(al, {}),
                })),
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: aR.fu.DCF, render: () => (0, r.jsx)(lg, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: aR.fu.DCF, render: () => (0, r.jsx)(n7, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: aR.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(i2, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: aR.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up"],
                render: () => (0, r.jsx)(dG, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: aR.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(rX, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: aR.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(dE, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: aR.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(mP, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: aR.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, r.jsx)(sc, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: aR.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, r.jsx)(it, {}),
            }),
            e.push({
                id: "spatial_audio",
                name: "Spatial Audio",
                group: aR.fu.AUDIO_VIDEO,
                tags: ["spatial", "hrtf", "steam audio", "3d"],
                render: () => (0, r.jsx)(mp, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: aR.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(me, {}),
            }),
            e.push({
                id: "av_overrides",
                name: "Overrides",
                group: aR.fu.AUDIO_VIDEO,
                tags: ["video", "capture", "encoder", "golive"],
                render: () => (0, r.jsx)(uq, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: aR.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(uX, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: aR.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(iX, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: aR.fu.BOOSTING, render: () => (0, r.jsx)(sp, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: aR.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(i7, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: aR.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(xb, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: aR.fu.QUESTS,
                render: () => (0, r.jsx)(ao, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: aR.fu.QUESTS,
                render: () => (0, r.jsx)(uB, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: aR.fu.BILLING,
                render: () => (0, r.jsx)(xa, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: aR.fu.QUESTS,
                render: () => (0, r.jsx)(h_, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: aR.fu.USERS,
                render: () => (0, r.jsx)(co, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: aR.fu.USERS,
                render: () => (0, r.jsx)(nB, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: aR.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(lO, {}),
            }),
            e
        );
    }, []);
}
