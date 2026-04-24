a.d(t, { x: () => hZ }), a(321073);
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
    p = a(821609),
    x = a(691885),
    g = a(292666),
    v = a(404778),
    b = a(243721),
    _ = a(274372),
    f = a(372684),
    j = a(399925);
function y() {
    let { mlPipelinesEnabled: e } = (0, d.cf)([_.A], () => ({
            mlPipelinesEnabled: _.A.getSettings().mlPipelinesEnabled,
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
        [y, C] = o.useState(""),
        [E, S] = o.useState(""),
        N = o.useCallback(
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
                            (0, r.jsx)(p.$, { text: "Manual", onClick: () => j.Ts({ type: f.Gy.MANUAL }) }),
                            (0, r.jsx)(p.$, {
                                text: "Distributed",
                                onClick: () =>
                                    j.Ts({
                                        type: f.Gy.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, r.jsx)(p.$, {
                                text: "Phrase: Clip",
                                onClick: () => j.Ts({ type: f.Gy.PHRASE, text: "clip" }),
                            }),
                            (0, r.jsx)(p.$, {
                                text: "Yelling",
                                onClick: () => j.Ts({ type: f.Gy.YELLING, userId: "123" }),
                            }),
                            (0, r.jsx)(p.$, {
                                text: "Laughter",
                                onClick: () => j.Ts({ type: f.Gy.LAUGHTER, label: "laughter", confidence: 1 }),
                            }),
                            (0, r.jsx)(p.$, {
                                text: "Shouting",
                                onClick: () => j.Ts({ type: f.Gy.LAUGHTER, label: "shouting", confidence: 1 }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)(m.n, {
                    label: "Game Event Creator",
                    children: [
                        (0, r.jsxs)(h.M, {
                            children: [
                                (0, r.jsx)(x.l, {
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
                                (0, r.jsx)(x.l, {
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
                            value: y,
                            onChange: C,
                            placeholder: "e.g., First Blood",
                        }),
                        (0, r.jsx)(g.k, {
                            label: "Description (optional)",
                            value: E,
                            onChange: S,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, r.jsx)(p.$, {
                            text: "Create Game Event",
                            onClick: () => {
                                j.Ts({ type: f.Gy.GAME_EVENT, eventType: n, importance: s, title: y, description: E });
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(v.c, {}),
                (0, r.jsxs)(m.n, {
                    label: "ML Pipelines Enabled",
                    children: [
                        (0, r.jsx)(b.d, {
                            label: "Emotion Classifier",
                            checked: e.emotionClassifier,
                            onChange: (t) => j.dR({ ...e, emotionClassifier: t }),
                        }),
                        (0, r.jsx)(b.d, {
                            label: "Wake Word Detector",
                            checked: e.wakeWordDetector,
                            onChange: (t) => j.dR({ ...e, wakeWordDetector: t }),
                        }),
                        (0, r.jsx)(b.d, {
                            label: "Yell Detector",
                            checked: e.yellDetector,
                            onChange: (t) => j.dR({ ...e, yellDetector: t }),
                        }),
                        (0, r.jsx)(b.d, {
                            label: "Whisper Transcription",
                            checked: e.whisperTranscription,
                            onChange: (t) => j.dR({ ...e, whisperTranscription: t }),
                        }),
                        (0, r.jsx)(b.d, {
                            label: "Laughter / Shouting Detector (V3)",
                            checked: e.laughterDetector,
                            onChange: (t) => j.dR({ ...e, laughterDetector: t }),
                        }),
                    ],
                }),
                (0, r.jsxs)(m.n, {
                    label: "ML Debug Logging (window.__CLIPS_DEBUG__)",
                    children: [
                        (0, r.jsx)(b.d, {
                            label: "Wake Word Debug",
                            description: "Log wake word detection events to console",
                            checked: t.wakeWord,
                            onChange: () => N("wakeWord"),
                        }),
                        (0, r.jsx)(b.d, {
                            label: "Emotion Debug",
                            description: "Log emotion classification events to console",
                            checked: t.emotion,
                            onChange: () => N("emotion"),
                        }),
                        (0, r.jsx)(b.d, {
                            label: "Yell Debug",
                            description: "Show yell classification events to console",
                            checked: t.yell,
                            onChange: () => N("yell"),
                        }),
                        (0, r.jsx)(b.d, {
                            label: "Whisper Debug",
                            description: "Log whisper transcription events to console",
                            checked: t.whisper,
                            onChange: () => N("whisper"),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var C = a(503698),
    E = a.n(C),
    S = a(939249),
    N = a(834730),
    A = a(683071),
    k = a(331322),
    D = a(811893),
    T = a(534514),
    I = a(538064),
    w = a(265059),
    O = a(902592),
    R = a(869146);
a(323874), a(14289), a(35956);
var L = a(789645),
    M = a(110574),
    P = a(65593),
    U = a(121881),
    B = a(581298),
    G = a(500158),
    F = a(287809),
    V = a(901139),
    $ = a(641886),
    W = a(780898),
    H = a(652215),
    z = a(216894),
    K = a(427262);
function Y(e) {
    let { nameplate: t } = e,
        a = (0, d.bG)([F.default], () => F.default.getCurrentUser()),
        n = K.Ay.useName(a) ?? "";
    return (0, r.jsx)(z.g, {
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
var q = a(736653),
    J = a(653523),
    Q = a(809948);
function Z(e) {
    let { selected: t, onSelect: a } = e,
        n = (0, q.Ay)();
    return (0, r.jsxs)("div", {
        className: Q.N,
        children: [
            (0, r.jsx)(N.E, { variant: "text-sm/semibold", children: "Preselected Gradient" }),
            (0, r.jsx)("div", {
                className: Q.Z,
                children: $.Z6.map((e) => {
                    let l = n !== H.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        s = t === e.name;
                    return (0, r.jsx)(
                        J.S4,
                        { onSelect: () => a(e), style: { background: l }, name: e.name, isSelected: s },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
var X = a(696157),
    ee = a(95701),
    et = a(331884);
function ea(e) {
    let { selected: t, nameplate: a } = e,
        n = (0, et.i)(),
        l = new ee.cq({ id: "0", type: H.rbe.DM, name: "self", guild_id: "0", recipients: [n.id] });
    return (0, r.jsx)(X.th, { selected: t, channel: l, user: n, nameplate: a });
}
var en = a(698638),
    el = a(877203);
function es() {
    let [e, t] = (0, o.useState)(!1),
        [a, n] = (0, o.useState)(!1),
        [l, s] = (0, o.useState)(null),
        { node: i } = (0, B.Ay)(G.k, ""),
        d = (0, V.Ay)((e) => e.toolsCache),
        { setToolsCache: c, removeToolsCache: u } = (0, V.DE)(),
        { setImgCache: m } = (0, V.TW)(),
        h = (0, o.useCallback)(
            (e) => {
                let t = d[e];
                null != t
                    ? s({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : s((t) =>
                          null == t ? { previewToolKey: e, palette: $.Wj, skuId: "0" } : { ...t, previewToolKey: e },
                      );
            },
            [d],
        ),
        x = (0, o.useCallback)((e) => {
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
                className: el.ne,
                children: [
                    (0, r.jsxs)("div", {
                        className: el.gO,
                        children: [
                            (0, r.jsx)(p.$, {
                                size: "sm",
                                onClick: () => {
                                    n(!1), t((e) => !e);
                                },
                                variant: "secondary",
                                text: "Toggle Themes",
                            }),
                            (0, r.jsx)(p.$, {
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
                        className: el.uQ,
                        children: [
                            e && (0, r.jsx)(U.A, { node: i }),
                            a &&
                                (0, r.jsx)(Z, {
                                    selected: l?.palette?.name,
                                    onSelect: (e) => {
                                        l?.previewToolKey != null && c(l.previewToolKey, l.previewToolKey, e), x(e);
                                    },
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: el.iW,
                children: [
                    (0, r.jsx)(ei, { nameplate: l }, l?.palette?.name),
                    (0, r.jsxs)("div", {
                        className: el.Uo,
                        children: [
                            (0, r.jsx)(N.E, {
                                variant: "text-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, r.jsx)(P.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: en.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        a = e[0],
                                        n = await a.arrayBuffer();
                                    m(t, t, (0, W.nI)(n)), c(t, t, $.Wj);
                                },
                            }),
                            (0, r.jsx)("div", {
                                className: el.is,
                                children: Object.values(d).map((e) => {
                                    let { url: t } = e;
                                    return (0, r.jsx)(er, { src: t, onSetStatic: h, removeAsset: g }, t);
                                }),
                            }),
                            (0, r.jsx)(ed, {
                                label: "gradient override",
                                onChange: (e) => x({ name: $.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, r.jsx)(eo, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function ei(e) {
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
            className: el.Fp,
            orientation: "horizontal",
            children: (0, r.jsxs)("div", {
                ref: l,
                className: el.ey,
                style: { width: `${a}px` },
                children: [
                    (0, r.jsx)(N.E, { variant: "text-sm/semibold", children: "Memberlist" }),
                    (0, r.jsx)(ec, { nameplate: t }),
                    (0, r.jsx)(N.E, { variant: "text-sm/semibold", children: "DMs" }),
                    (0, r.jsx)(eu, { nameplate: t }),
                    (0, r.jsx)(N.E, { variant: "text-sm/semibold", children: "RTC" }),
                    (0, r.jsx)(em, { nameplate: t }),
                    (0, r.jsx)("div", { className: el.Di, onMouseDown: m }),
                ],
            }),
        })
    );
}
function er(e) {
    let { src: t, onSetStatic: a, removeAsset: n } = e;
    return (0, r.jsxs)("div", {
        className: el.xO,
        children: [
            (0, r.jsx)(S.D, {
                onClick: () => n(t),
                className: el.yV,
                children: (0, r.jsx)(L.P, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, r.jsx)("img", { className: el.Ez, src: t, alt: "" }),
            (0, r.jsx)("div", {
                className: el.Lu,
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
function eo(e) {
    let { label: t, onClick: a } = e;
    return (0, r.jsxs)("div", {
        className: el.Uu,
        children: [
            (0, r.jsx)(N.E, { variant: "text-sm/normal", children: "coming soon" }),
            (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: a }),
        ],
    });
}
function ed(e) {
    let { label: t, onChange: a } = e;
    return (0, r.jsxs)("div", {
        className: el.Im,
        children: [
            (0, r.jsx)(N.E, { variant: "text-sm/normal", children: t }),
            (0, r.jsx)("input", {
                onChange: (e) => {
                    a(e.target.value);
                },
                className: el.QL,
                placeholder: "#000000",
            }),
        ],
    });
}
function ec(e) {
    let { nameplate: t } = e,
        a = (0, d.bG)([F.default], () => F.default.getCurrentUser());
    return (0, r.jsx)("div", {
        className: el.VH,
        children: (0, r.jsxs)("div", {
            className: el.H1,
            children: [
                (0, r.jsx)(N.E, { className: el.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(M.A, { nameplate: t, user: a, currentUser: a }),
                (0, r.jsx)(N.E, { className: el.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(M.A, { nameplate: t, selected: !0, user: a, currentUser: a }),
                        (0, r.jsx)(M.A, { selected: !0, user: a, currentUser: a }),
                    ],
                }),
            ],
        }),
    });
}
function eu(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: el.VH,
        children: (0, r.jsxs)("div", {
            className: el.H1,
            children: [
                (0, r.jsx)(N.E, { className: el.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(ea, { nameplate: t }),
                (0, r.jsx)(N.E, { className: el.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(ea, { selected: !0, nameplate: t }), (0, r.jsx)(ea, { selected: !0 })],
                }),
            ],
        }),
    });
}
function em(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: el.VH,
        children: (0, r.jsx)("div", { className: el.X2, children: (0, r.jsx)(Y, { nameplate: t }) }),
    });
}
a(508300);
var eh = a(132500),
    ep = a(157559),
    ex = a(780777),
    eg = a(993408),
    ev = a(315949),
    eb = a(559474),
    e_ = a(816866),
    ef = a(87558),
    ej = a(575593),
    ey = a(854284),
    eC = a(224640),
    eE = a(408278),
    eS = a(972213),
    eN = a(43990),
    eA = a(192308),
    ek = a(661531),
    eD = a(231723),
    eT = a(900686),
    eI = a(986687),
    ew = a(43549),
    eO = a(735438),
    eR = a.n(eO),
    eL = a(219220),
    eM = a(480335);
let eP = (e) => {
    let { profileEffect: t } = e,
        a = o.useMemo(() => (0, eO.cloneDeep)(t), [t]),
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
    return (0, r.jsx)(eM.p, { profileEffect: l, layerData: s, skuId: "debug" });
};
var eU = a(314485),
    eB = a(778765);
let eG =
        "https://cdn.discordapp.com/assets/content/ad2a252a6866e1ecb3bab521e2baaabbf13ab2d1ecaa8af67862c53c91f76761.png",
    eF = { [ef.qH.THUMBNAIL]: null, [ef.qH.STATIC]: null, [ef.qH.REDUCED_MOTION]: null },
    eV = "debug",
    e$ = "reduced-motion-preview-modal",
    eW = (e) => {
        let { transitionState: t, onClose: a, frameSrc: n, theme: l } = e;
        return (0, r.jsx)(eC.d, {
            transitionState: t,
            size: "md",
            onClose: a,
            maxHeight: "viewport",
            children: (0, r.jsxs)("div", {
                className: eU.Xd,
                children: [
                    (0, r.jsx)("div", {
                        className: eU.y6,
                        children: (0, r.jsx)(eE.K, {
                            "aria-label": "Close",
                            onClick: a,
                            icon: eS.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: eU.rU,
                        children: [
                            (0, r.jsx)(eN.N, {
                                theme: l,
                                children: (e) =>
                                    (0, r.jsx)("img", {
                                        src: eG,
                                        alt: "",
                                        className: E()(eU.aM, e),
                                        "aria-hidden": !0,
                                    }),
                            }),
                            null != n &&
                                "" !== n &&
                                (0, r.jsx)("img", { src: n, className: eU.SD, alt: "Reduced motion preview" }),
                        ],
                    }),
                ],
            }),
        });
    },
    eH = (e) => {
        let { type: t, frame: a, theme: n, onClear: l } = e,
            s = t === ef.qH.REDUCED_MOTION,
            i = s ? eG : eB.A,
            o = (0, r.jsx)(eN.N, {
                theme: n,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("img", { src: i, alt: "", className: E()(eU.aM, e), "aria-hidden": !0 }),
                            a?.src != null &&
                                "" !== a.src &&
                                (0, r.jsx)("img", { src: a.src, className: E()(eU.SD, e), alt: "" }),
                        ],
                    }),
            });
        return (0, r.jsxs)("div", {
            className: eU.pK,
            children: [
                (0, r.jsx)(T.D, { variant: "heading-sm/bold", children: t }),
                s
                    ? (0, r.jsx)(S.D, {
                          className: E()(eU.zd, eU.eB),
                          onClick: () => {
                              (0, eA.hasModalOpen)(e$)
                                  ? (0, eA.closeModal)(e$)
                                  : (0, eA.openModalLazy)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, r.jsx)(eW, { ...e, frameSrc: a?.src ?? null, theme: n }),
                                            ),
                                        { modalKey: e$, onCloseRequest: () => (0, eA.closeModal)(e$) },
                                    );
                          },
                          children: o,
                      })
                    : (0, r.jsx)("div", { className: eU.zd, children: o }),
                null != a && (0, r.jsx)(p.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: l }),
            ],
        });
    },
    ez = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, e_.wu)(),
            n = (0, d.bG)([F.default], () => F.default.getCurrentUser()),
            [l, s] = o.useState(!0),
            i = o.useRef({}),
            [c, u] = o.useState(!1),
            [m, h] = o.useState(!1),
            [x, g] = o.useState(8),
            [v, b] = o.useState([]),
            [_, f] = o.useState(eF),
            j = o.useRef([]),
            [y, C] = o.useState(t.name),
            S = y.toLowerCase().replace(/\s+/g, "_"),
            A = o.useMemo(
                () => ({
                    type: ej.R.PROFILE_EFFECT,
                    skuId: eV,
                    title: eV,
                    description: eV,
                    accessibilityLabel: eV,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: v,
                    animationType: ey.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [v],
            ),
            k = c ? ek.A.themes.DARKER : ek.A.themes.LIGHT,
            D = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            I = (e, t) => {
                let a = D(t);
                null != a &&
                    (0, ef.Mz)(a, (t) => {
                        f((n) => ({ ...n, [e]: (0, ef.GT)(t, a) }));
                    });
            };
        o.useEffect(() => {
            let e = t.effects;
            e.length > 0 && b(e);
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
                                let e = (0, ef.fB)(a.base64);
                                (a.src = e), j.current.push(e), f((e) => ({ ...e, [t]: a }));
                            }
                        }
                    });
            }, [t.stillFrames]);
        let w = { profileEffect: t, upsertProfileEffect: a },
            O = o.useRef(w);
        return (o.useEffect(() => {
            O.current = w;
        }),
        o.useEffect(() => {
            let { profileEffect: e, upsertProfileEffect: t } = O.current;
            e.readonly || t({ skuId: e.skuId, name: y, effects: v, stillFrames: _ });
        }, [v, _, y]),
        o.useEffect(
            () => () => {
                j.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (j.current = []);
            },
            [],
        ),
        null == n)
            ? (0, r.jsx)("div", {})
            : (0, r.jsxs)("div", {
                  className: eU.zr,
                  children: [
                      (0, r.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, r.jsx)(ex.A, {
                                  ref: (e) => {
                                      i.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = D(e);
                                      null != t &&
                                          (0, ef.Mz)(t, async (e) => {
                                              let a = await (0, ef.Ay)(e, t, v.length);
                                              b((e) => [...e, a]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, r.jsx)(ex.A, {
                                  ref: (e) => {
                                      i.current.thumbnail = e;
                                  },
                                  onChange: (e) => I(ef.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(ex.A, {
                                  ref: (e) => {
                                      i.current.static = e;
                                  },
                                  onChange: (e) => I(ef.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(ex.A, {
                                  ref: (e) => {
                                      i.current.reducedMotion = e;
                                  },
                                  onChange: (e) => I(ef.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: eU.Vg,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: E()(eU.nM, eU.uW),
                                  children: [
                                      (0, r.jsx)(N.E, { variant: "text-md/normal", children: "Profile Effect Name" }),
                                      (0, r.jsx)("input", {
                                          type: "text",
                                          value: y,
                                          className: eU.hF,
                                          onChange: (e) => {
                                              C(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eU.nM,
                                  children: [
                                      (0, r.jsx)(N.E, { variant: "text-md/normal", children: "Dark Theme" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: c,
                                          className: eU.OO,
                                          onChange: () => {
                                              u(!c);
                                          },
                                      }),
                                      (0, r.jsx)(N.E, { variant: "text-md/normal", children: "Show User Profile" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: m,
                                          className: eU.OO,
                                          onChange: () => {
                                              h(!m);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eU.nM,
                                  children: [
                                      (0, r.jsx)(N.E, { variant: "text-md/normal", children: "Border Radius" }),
                                      (0, r.jsx)("input", {
                                          type: "range",
                                          min: 4,
                                          max: 24,
                                          step: 2,
                                          value: x,
                                          onChange: (e) => g(+e.target.value),
                                      }),
                                      (0, r.jsxs)(N.E, { variant: "text-sm/normal", children: [x, "px"] }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: E()(eU.nz, eU.VH),
                                  style: { borderRadius: x },
                                  children: [
                                      m
                                          ? (0, r.jsx)("div", {
                                                className: eU.jq,
                                                children: (0, r.jsx)(ew.A, {
                                                    user: n,
                                                    currentUser: n,
                                                    transitionState: eD.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: eU.JB,
                                                }),
                                            })
                                          : (0, r.jsx)(eN.N, {
                                                theme: k,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: E()(eU.aM, e),
                                                        children: (0, r.jsx)("img", { src: eB.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      l &&
                                          (0, r.jsx)("div", {
                                              className: eU.KJ,
                                              children: (0, r.jsx)(eP, { profileEffect: A }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  children:
                                      m &&
                                      (0, r.jsxs)("div", {
                                          className: E()(eU.f5, eU.VH),
                                          style: { borderRadius: x },
                                          children: [
                                              (0, r.jsx)(eI.A, {
                                                  user: n,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, r.jsx)(eP, { profileEffect: A }),
                                          ],
                                      }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: eU.nz,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: eU.nM,
                                          children: [
                                              (0, r.jsx)(p.$, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => i.current.animated?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(N.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: eU.nM,
                                          children: [
                                              (0, r.jsx)(p.$, {
                                                  variant: "active",
                                                  text: "Upload thumbnail.png",
                                                  onClick: () => i.current.thumbnail?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(p.$, {
                                                  variant: "active",
                                                  text: "Upload static.png",
                                                  onClick: () => i.current.static?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(p.$, {
                                                  variant: "active",
                                                  text: "Upload reduced_motion.png",
                                                  onClick: () => i.current.reducedMotion?.activateUploadDialogue(),
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)("div", {
                                          className: eU.q6,
                                          children: (0, r.jsx)("div", {
                                              className: eU.nM,
                                              children: (0, r.jsx)(p.$, {
                                                  variant: "primary",
                                                  text: "Replay Animation",
                                                  onClick: () => {
                                                      s(!1), setTimeout(() => s(!0), 100);
                                                  },
                                              }),
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: E()(eU.q6, eU.XA),
                                          children: [
                                              (0, r.jsx)(N.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Please download both configs for the drop package!",
                                              }),
                                              (0, r.jsx)(N.E, {
                                                  variant: "text-sm/bold",
                                                  color: "text-feedback-critical",
                                                  children: "WARNING: The full config is really big :0",
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: eU.nM,
                                                  children: [
                                                      (0, r.jsx)(eT.A, {
                                                          fileContents: () => (0, ef.rs)(v),
                                                          contentType: "text/plain",
                                                          fileName: `${S}_timing_config.txt`,
                                                          children: (0, r.jsx)(p.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(eT.A, {
                                                          fileContents: () =>
                                                              JSON.stringify({
                                                                  ...t,
                                                                  name: y,
                                                                  readonly: !1,
                                                                  effects: v,
                                                                  stillFrames: _,
                                                              }),
                                                          contentType: "text/plain",
                                                          fileName: `${S}_config.txt`,
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
                                          className: eU.uW,
                                          children: [
                                              (0, r.jsx)(T.D, { variant: "heading-lg/bold", children: "Still Frames" }),
                                              (0, r.jsx)("div", {
                                                  className: eU.mv,
                                                  children: Object.entries(_).map((e) => {
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
                                              className: E()(eU.uW, eU.l7),
                                              children: [
                                                  (0, r.jsx)(N.E, {
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
                                  className: E()(eU.Vg, eU.ZF),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: eU.cD,
                                          children: (0, r.jsx)(p.$, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: () => {
                                                  b([]), f(eF);
                                              },
                                          }),
                                      }),
                                      v.map((e, t) =>
                                          (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: eU.ec,
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: eU.D1,
                                                          children: [
                                                              (0, r.jsx)(T.D, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, r.jsx)("img", {
                                                                  src: e.src,
                                                                  className: eU.oq,
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
                                                                                              className: eU.oq,
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
                                                          className: E()(eU.Vg, eU.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: eU.nz,
                                                                  children: [
                                                                      (0, r.jsx)(N.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: eU.hF,
                                                                          onChange: (e) => {
                                                                              b((a) => {
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
                                                                  className: eU.nz,
                                                                  children: [
                                                                      (0, r.jsx)(N.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: eU.hF,
                                                                          onChange: (e) => {
                                                                              b((a) => {
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
                                                          className: E()(eU.Vg, eU.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: eU.nz,
                                                                  children: [
                                                                      (0, r.jsx)(N.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: eU.OO,
                                                                          onChange: (e) => {
                                                                              b((a) => {
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
                                                                  className: eU.nz,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, r.jsxs)(r.Fragment, {
                                                                          children: [
                                                                              (0, r.jsx)(N.E, {
                                                                                  variant: "text-md/bold",
                                                                                  children: "Loop Delay",
                                                                              }),
                                                                              (0, r.jsx)("input", {
                                                                                  type: "number",
                                                                                  value: e.loopDelay,
                                                                                  className: eU.hF,
                                                                                  onChange: (e) => {
                                                                                      b((a) => {
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
                                                          children: (0, r.jsx)(ex.A, {
                                                              ref: (e) => {
                                                                  i.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let a;
                                                                  null != (a = D(e)) &&
                                                                      (0, ef.Mz)(a, (e) => {
                                                                          b((n) => {
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
                                                          className: E()(eU.nM, eU._N),
                                                          children: [
                                                              (0, r.jsx)(p.$, {
                                                                  variant: "secondary",
                                                                  text: "Add Alternative",
                                                                  onClick: () =>
                                                                      i.current[
                                                                          `randomized-${t}`
                                                                      ]?.activateUploadDialogue(),
                                                              }),
                                                              (0, r.jsx)(p.$, {
                                                                  variant: "critical-secondary",
                                                                  text: "Remove Layer",
                                                                  onClick: () => {
                                                                      b((t) => t.filter((t) => t !== e));
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
    eK = "Make sure you're only uploading text files!",
    eY = (e) => {
        let { profileEffect: t, onClick: a } = e,
            { deleteProfileEffect: n } = (0, e_.wu)();
        return (0, r.jsxs)(S.D, {
            className: eU.B0,
            onClick: a,
            children: [
                (0, r.jsx)("div", { className: eU.yV, style: { backgroundImage: `url(${t.effects?.[0]?.base64})` } }),
                (0, r.jsxs)("div", {
                    className: eU.eL,
                    children: [
                        (0, r.jsx)(N.E, { variant: "text-md/bold", children: t.name }),
                        (0, r.jsx)(p.$, {
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
function eq() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, e_.wu)(),
        [n, l] = o.useState(),
        s = o.useRef(null),
        { categories: i } = (0, ev.A)(),
        d = o.useMemo(() => (0, eg.Wj)(i), [i]),
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
                if (null == a || !e.type.startsWith("text/")) return (0, eb.Ni)(eK);
                let [n, l] = a.split(",");
                if (!n.includes("text/plain")) return (0, eb.Ni)(eK);
                let s = JSON.parse(atob(l));
                (s.skuId = (0, eh.A)()), t(s), (0, eb.GF)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        x = o.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, eb.Ni)("Error uploading file. Try again!")
                    : (0, eb.KE)(e.currentTarget.files, h, eb.Ni);
            },
            [h],
        );
    return (0, r.jsxs)("div", {
        className: eU.zr,
        children: [
            null == n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eU.nz,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: E()(eU.uW, eU.nM),
                                    children: [
                                        (0, r.jsx)(T.D, {
                                            variant: "heading-xl/bold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, r.jsx)(p.$, {
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
                                    className: eU.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(eY, { profileEffect: e, onClick: () => l(e) }, e.skuId),
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: E()(eU.nM, eU._N, eU.uW),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: eU.au,
                                    children: [
                                        (0, r.jsx)(N.E, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: "Import Shared Config",
                                        }),
                                        (0, r.jsx)(ex.A, { ref: s, onChange: x, multiple: !1 }),
                                    ],
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: () => {
                                        t({ skuId: (0, eh.A)(), name: "New Profile Effect", effects: [] });
                                    },
                                }),
                            ],
                        }),
                        (0, r.jsx)("hr", {}),
                        (0, r.jsxs)("div", {
                            className: eU.uW,
                            children: [
                                (0, r.jsx)(T.D, { variant: "heading-xl/bold", children: "All Effects" }),
                                (0, r.jsx)(g.k, {
                                    value: c,
                                    onChange: (e) => {
                                        u(e);
                                    },
                                }),
                                (0, r.jsx)("div", {
                                    className: eU.xm,
                                    children: m.map((e) =>
                                        (0, r.jsx)(
                                            S.D,
                                            {
                                                className: eU.S5,
                                                style: { backgroundImage: `url(${e.thumbnailPreviewSrc})` },
                                                onClick: () => {
                                                    let t = {
                                                        [ef.qH.THUMBNAIL]:
                                                            null != e.thumbnailPreviewSrc &&
                                                            "" !== e.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [ef.qH.STATIC]:
                                                            null != e.staticFrameSrc && "" !== e.staticFrameSrc
                                                                ? {
                                                                      src: e.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [ef.qH.REDUCED_MOTION]:
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
                                                    className: eU.Hd,
                                                    children: (0, r.jsx)(N.E, {
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
            null != n && (0, r.jsx)(ez, { profileEffect: n }),
        ],
    });
}
var eJ = a(935399),
    eQ = a(462887),
    eZ = a(289873),
    eX = a(478016),
    e0 = a(565645),
    e1 = a(7584),
    e2 = a(47360),
    e8 = a(207803),
    e9 = a(84540),
    e3 = a(836602),
    e7 = a(999291),
    e4 = a(576622),
    e6 = a(841702),
    e5 = a(892118),
    te = a(744808),
    tt = a(725287),
    ta = a(626768),
    tn = a(464896);
function tl() {
    let e = (0, q.Ay)();
    return (0, r.jsxs)("div", {
        className: tt.z3,
        children: [
            (0, r.jsx)("img", { src: (0, eQ.M)(e) ? ta : tn, alt: "" }),
            (0, r.jsx)(N.E, {
                variant: "text-sm/normal",
                children:
                    "No frames found on your account. You must be granted test profile frame entitlements to use this tool.",
            }),
        ],
    });
}
function ts() {
    let e = (0, d.bG)([F.default], () => F.default.getCurrentUser()),
        t = (0, e7.Ay)(e?.id);
    o.useEffect(() => {
        e?.id != null && (0, e4.A)(e.id);
    }, [e?.id]);
    let { purchases: a, isFetchingPurchases: n } = (0, e6.Bf)(),
        l = o.useMemo(() => (0, eg.MG)(a, new Map()), [a]),
        [{ pendingProfileFrame: s }, i] = (0, d.yK)([e3.A], () => [e3.A.getPendingChanges(), e3.A.showNotice()]),
        c = void 0 === s ? t?.profileFrame : s,
        u = null != c ? a.get(c.skuId) : void 0,
        m = (0, e5.s)(u?.items[0]) ? u.items[0] : void 0;
    return (
        (0, eJ.l0)(e8.RE),
        (0, r.jsxs)("div", {
            className: tt.kL,
            children: [
                (0, r.jsxs)(T.D, {
                    variant: "heading-xl/bold",
                    children: [
                        (0, r.jsx)(e0.A, {
                            emojiName: e1.Ay.getByName("frame_with_picture")?.surrogates,
                            className: tt.Zg,
                        }),
                        "Profile Frames!",
                    ],
                }),
                0 === l.length && n && (0, r.jsx)(eZ.y, {}),
                0 === l.length && !n && (0, r.jsx)(tl, {}),
                l.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: tt.MK,
                        children: [
                            (0, r.jsx)(N.E, {
                                variant: "text-sm/normal",
                                children: "Select a frame to preview. Save to apply the frame to your main profile.",
                            }),
                            (0, r.jsxs)("ul", {
                                className: tt.p_,
                                children: [
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(p.$, {
                                                text: "None",
                                                variant: "secondary",
                                                fullWidth: !0,
                                                icon: null == c ? eX.U : void 0,
                                                disabled: null == c,
                                                onClick: () => (0, e9.p)({ profileFrame: null }),
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
                                                          icon: c?.skuId === e.skuId ? eX.U : void 0,
                                                          disabled: c?.skuId === e.skuId,
                                                          onClick: () => (0, e9.p)({ profileFrame: e }),
                                                      }),
                                                  },
                                                  e.skuId,
                                              );
                                    }),
                                ],
                            }),
                            i && (0, r.jsx)(e2.A, {}),
                            (0, r.jsxs)("div", {
                                className: tt.VH,
                                children: [
                                    (0, r.jsx)(N.E, { variant: "text-sm/normal", children: "Preview:" }),
                                    (0, r.jsxs)("div", {
                                        className: tt.ME,
                                        children: [
                                            (0, r.jsx)("img", { src: eB.A, alt: "" }),
                                            null != m && (0, r.jsx)(te.A, { frame: m }),
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
var ti = a(702841),
    tr = a(793574),
    to = a(590180),
    td = a(4227),
    tc = a(491438),
    tu = a(61750),
    tm = a(328762);
let th = (e) => {
        let [t, a] = o.useState(0);
        return (
            o.useLayoutEffect(() => {
                let e = td.A.getPurchase;
                return (
                    (td.A.getPurchase = (e) => void 0),
                    td.A.emitChange(),
                    a(1),
                    () => {
                        (td.A.getPurchase = e), td.A.emitChange();
                    }
                );
            }, []),
            (0, r.jsx)("div", { className: tm.Do, children: (0, r.jsx)(tc.A, { ...e }, t) })
        );
    },
    tp = () => {
        let e = (0, ti.bG)([F.default], () => F.default.getCurrentUser()),
            t = (0, ti.bG)([to.A], () => to.A.categories),
            a = (0, ti.bG)([td.A], () => td.A.purchases),
            n = (0, ti.bG)([to.A], () => to.A.lastSuccessfulFetch),
            l = t.size > 0 && a.size > 0 && null != n,
            { isFetching: s, categories: i } = (0, e6.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: l }),
            d = l ? t : i,
            c = l || (!s && d.size > 0),
            [u, m] = o.useState(""),
            [h, x] = o.useState(null),
            [v, b] = o.useState(null);
        return (o.useEffect(() => {
            if ("" === u.trim() || !c) {
                x(null), b(null);
                return;
            }
            let e = to.A.getProduct(u),
                t = to.A.getCategoryForProduct(u);
            null != e && null != t ? (x(e), b(t)) : (x(null), b(null));
        }, [u, c]),
        s)
            ? (0, r.jsx)(N.E, { variant: "text-md/normal", children: "Loading categories and collectibles..." })
            : null == e
              ? (0, r.jsx)(N.E, { variant: "text-md/normal", children: "No user found" })
              : (0, r.jsxs)("div", {
                    className: tm.kL,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tm.uW,
                            children: [
                                (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Product Configuration" }),
                                (0, r.jsxs)("div", {
                                    className: tm.qp,
                                    children: [
                                        (0, r.jsx)(N.E, {
                                            variant: "text-md/semibold",
                                            className: tm.NB,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, r.jsx)(g.k, { value: u, onChange: m, placeholder: "Enter product SKU ID" }),
                                        !c &&
                                            "" !== u.trim() &&
                                            (0, r.jsx)(N.E, {
                                                variant: "text-sm/normal",
                                                className: tm.KQ,
                                                children: "Loading products...",
                                            }),
                                        c &&
                                            "" !== u.trim() &&
                                            null == h &&
                                            (0, r.jsx)(N.E, {
                                                variant: "text-sm/normal",
                                                className: tm.kc,
                                                children: "Product not found",
                                            }),
                                        null != h &&
                                            (0, r.jsxs)(N.E, {
                                                variant: "text-sm/normal",
                                                className: tm.xT,
                                                children: ["Found: ", h.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tm.uW,
                            children: [
                                (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Product Preview" }),
                                null != h && null != v
                                    ? (0, r.jsxs)("div", {
                                          className: tm.i1,
                                          children: [
                                              (0, r.jsx)(th, { skuId: h.skuId }),
                                              (0, r.jsx)(p.$, {
                                                  variant: "primary",
                                                  onClick: () => {
                                                      null != h &&
                                                          null != e &&
                                                          (0, tu.A)({
                                                              product: h,
                                                              analyticsLocations: [tr.A.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)("div", {
                                          className: tm.qf,
                                          children: (0, r.jsx)(N.E, {
                                              variant: "text-md/normal",
                                              className: tm.X2,
                                              children: "Enter a valid product SKU ID to see the preview",
                                          }),
                                      }),
                            ],
                        }),
                    ],
                });
    };
var tx = a(410724);
let tg = { profile_effects: 1, nameplates: 2, profile_frames: 3, product_preview: 4 },
    tv = (e) => {
        let { setTab: t } = e,
            a = (0, d.bG)([R.A], () => R.A.getWindowOpen(H.MLl.DEVTOOLS_POPOUT));
        return (0, r.jsxs)("div", {
            className: tx.Qs,
            children: [
                (0, r.jsx)(S.D, {
                    onClick: () => {
                        t(1);
                    },
                    children: (0, r.jsx)("div", {
                        className: E()(tx.vK, tx.Dg),
                        children: (0, r.jsx)(N.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Effects",
                        }),
                    }),
                }),
                (0, r.jsx)(S.D, {
                    onClick: () => {
                        t(2);
                    },
                    children: (0, r.jsx)("div", {
                        className: E()(tx.vK, tx.st),
                        children: (0, r.jsx)(N.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Nameplates",
                        }),
                    }),
                }),
                (0, r.jsx)(S.D, {
                    onClick: () => {
                        t(3);
                    },
                    children: (0, r.jsx)("div", {
                        className: E()(tx.vK, tx.Dg),
                        children: (0, r.jsx)(N.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Frames",
                        }),
                    }),
                }),
                (0, r.jsx)(S.D, {
                    onClick: () => {
                        t(4);
                    },
                    children: (0, r.jsx)("div", {
                        className: E()(tx.vK, tx.IP),
                        children: (0, r.jsx)(N.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Products",
                        }),
                    }),
                }),
                !a &&
                    (0, r.jsx)("div", {
                        style: { marginTop: 16 },
                        children: (0, r.jsx)(A.w, {
                            type: "warning",
                            children: (0, r.jsxs)(k.B, {
                                gap: 8,
                                children: [
                                    (0, r.jsx)(N.E, { variant: "text-md/semibold", children: "Not enough space?" }),
                                    (0, r.jsx)(N.E, {
                                        variant: "text-sm/normal",
                                        children: "You can pop out the DevTools to see the full layout.",
                                    }),
                                    (0, r.jsx)(p.$, {
                                        size: "sm",
                                        icon: D.t,
                                        variant: "secondary",
                                        onClick: O.openDevToolsPopout,
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
            let e = w.A.lastOpenSubTabId;
            return null != e && e in tg ? tg[e] : 0;
        });
        return (
            o.useEffect(() => {
                null != w.A.lastOpenSubTabId && (0, I.Jt)({ lastOpenSubTabId: null });
            }, []),
            (0, r.jsxs)(c.Ip, {
                className: tx.iE,
                children: [
                    (0, r.jsxs)("div", {
                        className: tx.C$,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-xxl/medium", children: "Collectibles DevTools" }),
                            0 !== e && (0, r.jsx)(p.$, { variant: "primary", onClick: () => t(0), text: "Back" }),
                        ],
                    }),
                    (() => {
                        switch (e) {
                            case 1:
                                return (0, r.jsx)(eq, {});
                            case 2:
                                return (0, r.jsx)(es, {});
                            case 3:
                                return (0, r.jsx)(ts, {});
                            case 4:
                                return (0, r.jsx)(tp, {});
                            default:
                                return (0, r.jsx)(tv, { setTab: t });
                        }
                    })(),
                ],
            })
        );
    };
var t_ = a(681154),
    tf = a(306264),
    tj = a(506774),
    ty = a(228366),
    tC = a(587895),
    tE = a(429913),
    tS = a(475825),
    tN = a(505206);
function tA(e) {
    let { columns: t, data: a, className: n, rowClassName: l, onClickRow: s, selectedRowKey: i, rowHeight: d = 40 } = e,
        c = o.useMemo(
            () =>
                t.map((e) => ({
                    renderHeader: () => (0, r.jsx)(N.E, { variant: "text-sm/semibold", children: e.key }),
                    ...e,
                })),
            [t],
        ),
        u = 0 === a.length ? [1] : [a.length];
    return (0, r.jsx)("div", {
        className: tN.CZ,
        children: (0, r.jsx)(tS.OZ, {
            className: n,
            innerClassName: tN.tp,
            sections: u,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    n = tN.ZR;
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
                    u = E()(tN.jD, { [tN.wD]: o === i, rowClassName: l });
                return (0, r.jsx)(
                    S.D,
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
var tk = a(409626),
    tD = a(692969),
    tT = a(760751),
    tI = a(403362),
    tw = a(435738),
    tO = a(99753),
    tR = a(975732),
    tL = a(352139),
    tM = a(808323),
    tP = a(583846),
    tU = a(424994),
    tB = a(330837);
function tG(e) {
    let { id: t } = e,
        a = (0, d.bG)([F.default], () => F.default.getUser(t));
    return null == a
        ? null
        : (0, r.jsx)(S.D, {
              className: tB._,
              onClick: function () {
                  (0, tR.openUserProfileModal)({ sourceAnalyticsLocations: [tr.A.DEV_TOOLS], userId: t });
              },
              children: (0, r.jsx)(N.E, { variant: "text-md/semibold", children: a.username }),
          });
}
function tF() {
    let e = (0, d.bG)([tO.A], () => tO.A.getFeed(tU.X1.GLOBAL_FEED)),
        t = (0, d.bG)([tO.A], () => tO.A.getFilters()),
        a = (0, d.cf)([tL.A], () => {
            let t = {};
            for (let a of e?.entries ?? []) t[(0, tL.$)(a.content)] = tL.A.canRenderContent(a.content);
            return t;
        }, [e]),
        n = (0, d.bG)([tw.A], () => tw.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let l = e?.entries?.flatMap((e) => {
        let { content: l } = e;
        if (!(0, tM.l)(t, l)) return [];
        let s = a[(0, tL.$)(l)];
        return (0, r.jsxs)(
            "li",
            {
                className: tB.p,
                children: [
                    (0, r.jsx)(tG, { type: l.author_type, id: l.author_id }),
                    !s && (0, r.jsx)(N.E, { variant: "text-md/normal", children: "Expired or no matching presence" }),
                    (0, tP.I5)(l) &&
                        (0, r.jsxs)(N.E, { variant: "text-md/normal", children: ["Expired at ", l.expires_at] }),
                    n.has(l.id) && (0, r.jsx)(N.E, { variant: "text-md/normal", children: "Impression capped" }),
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
var tV = a(576470),
    t$ = a(85451);
function tW() {
    let e = (0, d.bG)([tO.A], () => tO.A.getFeed(tU.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, d.cf)(
            [tO.A],
            () => tO.A.getFeedState(tU.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        n = (0, d.bG)([tO.A], () => tO.A.getLastFeedFetchDate(tU.X1.GLOBAL_FEED));
    return (0, r.jsxs)("div", {
        children: [
            t
                ? (0, r.jsx)(N.E, { variant: "text-md/normal", children: "(fetching)" })
                : (0, r.jsxs)(N.E, {
                      variant: "text-md/normal",
                      children: [
                          "Next fetch: ",
                          null != a ? (0, r.jsx)(tV.A, { deadline: a }) : e ? "(awaiting push)" : "(unscheduled)",
                      ],
                  }),
            (0, r.jsxs)(N.E, {
                variant: "text-md/normal",
                children: [
                    "Last fetch:",
                    " ",
                    null != n ? (0, r.jsx)(t$.z, { inline: !0, entry: { start: n.getTime() } }) : "(never)",
                ],
            }),
        ],
    });
}
var tH = a(866839);
let tz = [
    {
        key: "type",
        cellClassName: E()(tH.Hn, tH.T$),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(N.E, { variant: "text-md/semibold", children: t_.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: E()(tH.Hn, tH.MX),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)("div", { children: (0, r.jsx)(N.E, { variant: "text-md/normal", children: t.length }) });
        },
    },
    {
        key: "only?",
        cellClassName: tH.Hn,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(tK, { type: t });
        },
    },
];
function tK(e) {
    let { type: t } = e,
        a = (0, d.bG)([tO.A], () => tO.A.getFilters()),
        n = a?.types?.has(t) ?? !1;
    return (0, r.jsx)(b.d, {
        checked: n,
        onChange: function () {
            n
                ? ty.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : ty.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function tY() {
    var e;
    let t,
        a = (0, d.bG)([tO.A], () => tO.A.getFeed(tU.X1.GLOBAL_FEED)),
        n = (0, d.bG)([tO.A], () => tO.A.getDebugImpressionCappingDisabled()),
        l = (0, d.bG)([tw.A], () => tw.A.getDebugFastImpressionCappingEnabled()),
        s =
            ((e = a?.entries?.map((e) => e.content)),
            Object.keys((t = eR().groupBy(e, (e) => e.content_type))).map((e) => {
                let a = t[e];
                return { key: `${e}`, type: a[0].content_type, entries: a };
            })),
        i = (0, d.bG)([tO.A], () => tO.A.getFeedState(tU.X1.GLOBAL_FEED)?.loading === !0),
        [u, m] = o.useState(""),
        h = (0, d.bG)(
            [tT.A, tC.A],
            () => (parseInt(u) > 0 ? u : (tT.A.searchGamesByName(u)[0] ?? tC.A.getApplicationByName(u)?.id)),
            [u],
        ),
        x = (0, tD.A)({ applicationId: h, location: "DevToolsContentInventory", source: tk.Ob.DevTools }),
        v = Object.entries(tj.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        b = (0, tE.A)(v).filter(tI.Vq);
    return (0, r.jsx)("div", {
        className: tN.nd,
        children: (0, r.jsxs)(c.Ip, {
            className: tH.Qs,
            children: [
                (0, r.jsxs)(k.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(N.E, { variant: "text-md/semibold", children: "Inventory" }),
                        s.length > 0 && (0, r.jsx)(tA, { columns: tz, data: s }),
                        (0, r.jsx)(tW, {}),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                ty.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: tU.X1.GLOBAL_FEED,
                                    feature: tf.M.INBOX,
                                });
                            },
                            loading: i,
                        }),
                    ],
                }),
                (0, r.jsxs)(k.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(N.E, { variant: "text-md/semibold", children: "Impression Capping" }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                ty.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                ty.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: n ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                ty.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                ty.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, r.jsx)(tF, {}),
                (0, r.jsxs)(k.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(N.E, { variant: "text-md/semibold", children: "Game Profile" }),
                        (0, r.jsx)(g.k, {
                            placeholder: "App ID or full name",
                            onChange: (e) => (0 === e.length || e.length >= 18) && m(e),
                            onKeyDown: (e) => {
                                "Enter" === e.key && (u === e.currentTarget.value ? x?.(e) : m(e.currentTarget.value));
                            },
                            error:
                                u.length > 0 && null == x ? `No game profile for ${h ?? u + " - try by id"}.` : void 0,
                            helperText: null != x ? "Game profile found" : void 0,
                        }),
                        (0, r.jsx)("ul", {
                            children: b.map((e) =>
                                (0, r.jsx)(
                                    "li",
                                    { children: (0, r.jsx)(tq, { application: e }) },
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
let tq = (e) => {
    let { application: t } = e,
        a = (0, tD.A)({ applicationId: t.id, location: "DevToolsContentInventory", source: tk.Ob.DevTools });
    return (0, r.jsx)(S.D, {
        onClick: a,
        children: (0, r.jsx)(N.E, { variant: "text-xs/normal", color: "text-muted", children: t.name }),
    });
};
var tJ = a(696986),
    tQ = a(47167),
    tZ = a(734057),
    tX = a(994500),
    t0 = a(310031),
    t1 = a(394953),
    t2 = a(732421);
let t8 = [
        {
            key: "channelName",
            cellClassName: E()(t2.Hn, t2.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(N.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: E()(t2.Hn, t2.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(N.E, { variant: "text-md/normal", children: t });
            },
        },
    ],
    t9 = [
        {
            key: "channelName",
            cellClassName: E()(t2.Hn, t2.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(N.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: E()(t2.Hn, t2.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, r.jsx)(N.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: E()(t2.Hn, t2.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(N.E, { variant: "text-md/normal", children: t });
            },
        },
    ];
function t3() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, t1.U4)(),
        {
            isLoading: a,
            hasLoadedEver: n,
            hasPreloaded: l,
            hasMoreToLoad: s,
            isLoadingComplete: i,
        } = (0, ti.cf)([t0.A], () => ({
            isLoading: t0.A.isLoading,
            hasLoadedEver: t0.A.hasLoadedEver,
            hasPreloaded: t0.A.hasPreloaded,
            hasMoreToLoad: t0.A.hasMoreToLoad,
            isLoadingComplete: t0.A.isLoadingComplete,
        })),
        o = (0, ti.bG)([t0.A], () => t0.A.currentRequestAnalyticsPayload),
        d = (0, ti.cf)([t0.A], () => t0.A.getChannelInfoMap()),
        u = (0, ti.cf)([tZ.A], () => {
            let e = {};
            return (
                Object.entries(d).forEach((t) => {
                    let [a] = t,
                        n = tZ.A.getChannel(a);
                    e[a] = n ?? null;
                }),
                e
            );
        }),
        m = (0, ti.cf)([tZ.A], () =>
            t.reduce((e, t) => {
                let a = tZ.A.getChannel(t);
                return (e[t] = a ?? null), e;
            }, {}),
        ),
        h = (0, ti.bG)([t0.A], () => t0.A.getInboxMessages()),
        p = (0, ti.bG)([t0.A], () => t0.A.getDevOverrides().navOnClick);
    return (0, r.jsx)("div", {
        className: tN.nd,
        children: (0, r.jsxs)(c.Ip, {
            className: t2.Qs,
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
                            children: (0, r.jsx)(b.d, {
                                label: "Nav On Click",
                                checked: !!p,
                                onChange: (e) => {
                                    ty.h.dispatch({ type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES", navOnClick: e });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Unreads and Badging" }),
                        (0, r.jsx)(tJ.h, { size: 8 }),
                        (0, r.jsxs)("div", { children: ["Unread Recent Mentions Count: ", e] }),
                        (0, r.jsxs)("div", { children: ["Unread Channel Count: ", t.length] }),
                        (0, r.jsx)(tA, {
                            columns: t8,
                            data: Object.entries(m).map((e) => {
                                let [t, a] = e;
                                return {
                                    key: t,
                                    channelId: t,
                                    channelName: null != a ? (0, tQ.m1)(a, F.default, tX.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Store State" }),
                        (0, r.jsxs)("div", { children: ["Is Loading: ", a ? "✅" : "❌"] }),
                        (0, r.jsxs)("div", { children: ["Has Preloaded: ", l ? "✅" : "❌"] }),
                        (0, r.jsxs)("div", { children: ["Has Loaded Ever: ", n ? "✅" : "❌"] }),
                        (0, r.jsxs)("div", { children: ["Has More To Load: ", s ? "✅" : "❌"] }),
                        (0, r.jsxs)("div", { children: ["Is Loading Complete: ", i ? "✅" : "❌"] }),
                        (0, r.jsxs)("div", { children: ["Last Loading Trigger: ", o?.loadingTrigger] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, r.jsxs)("div", { children: ["Total Channels: ", Object.keys(d).length] }),
                        (0, r.jsx)(tA, {
                            columns: t9,
                            data: Object.entries(d).map((e) => {
                                let t,
                                    [a, n] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = u[a]) ? (0, tQ.m1)(t, F.default, tX.A) : "",
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
var t7 = a(976860),
    t4 = a(829219),
    t6 = a(988483);
let t5 = function () {
    return (0, r.jsxs)("div", {
        className: t6.k,
        children: [
            (0, r.jsx)(N.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, r.jsx)(p.$, {
                onClick: () => {
                    (0, t4.Ov)(), (0, t7.pX)(H.BVt.QUEST_HOME);
                },
                text: "Clear History",
            }),
            (0, r.jsx)(N.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                children:
                    "Your may have to refresh your client after being redirected to the Quest Home in order to see these changes.",
            }),
        ],
    });
};
var ae = a(271866),
    at = a(867099),
    aa = a(147964),
    an = a(760716),
    al = a(99161),
    as = a(115093),
    ai = a(11039);
let ar = window.GLOBAL_ENV.RELEASE_CHANNEL === as.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function ao() {
    let e = (0, an.i)((e) => e.overrideApplicationId),
        t = (0, an.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        [n, l] = o.useState(ar),
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
        m = (0, an.i)((e) => e.showSelfActivity),
        h = (0, an.i)((e) => e.setShowSelfActivity),
        x = (0, an.i)((e) => e.recommendationApplicationIds),
        v = (0, an.i)((e) => e.setRecommendationApplicationIds),
        _ = o.useCallback(
            (e) => {
                e ? v(s) : v(null);
            },
            [s, v],
        ),
        f = (0, d.bG)([aa.A], () => null != aa.A.testModeApplicationId),
        j = o.useCallback((e) => {
            e ? (0, eA.openModal)((e) => (0, r.jsx)(at.A, { ...e })) : ae.cL();
        }, []),
        y = (0, tD.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: n,
            source: tk.Ob.Embed,
            trackEntryPointImpression: !0,
        }),
        C = o.useCallback(
            (e) => {
                y?.(e);
            },
            [y],
        ),
        S = o.useCallback(() => {
            (0, al.openSocialLayerStorefrontAnnouncementModal)();
        }, []);
    return (0, r.jsx)("div", {
        className: E()(tN.nd, ai.n),
        children: (0, r.jsxs)("div", {
            className: ai.k,
            children: [
                (0, r.jsx)(g.k, { label: "Application ID", value: n, onChange: u }),
                (0, r.jsx)(T.D, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, r.jsx)(b.d, { label: "Override activity application ID", checked: a, onChange: c }),
                (0, r.jsx)(b.d, { label: "Show own voice activity (bypass self check)", checked: m, onChange: h }),
                (0, r.jsx)(b.d, { label: "Enable application test mode", checked: f, onChange: j }),
                (0, r.jsx)(p.$, { text: "Open Game Profile Modal", onClick: C }),
                (0, r.jsx)(p.$, { text: "Open Announcement Modal", onClick: S }),
                (0, r.jsx)(T.D, { variant: "heading-lg/normal", children: "Wishlists" }),
                (0, r.jsx)(g.k, {
                    label: "Recommendation application IDs",
                    value: s,
                    onChange: i,
                    disabled: null == x,
                }),
                (0, r.jsx)(b.d, {
                    label: "Enable recommendation application IDs override",
                    checked: null != x,
                    onChange: _,
                }),
            ],
        }),
    });
}
var ad = a(540999),
    ac = a(865116);
a(670812), a(772958);
var au = a(58736);
a(558179), a(21574);
var am = a(610920),
    ah = a(302031);
let ap = {
    base00: ek.A.colors.BACKGROUND_BASE_LOWER.css,
    base03: ek.A.colors.TEXT_FEEDBACK_WARNING.css,
    base07: ek.A.colors.TEXT_DEFAULT.css,
    base08: ek.A.colors.TEXT_MUTED.css,
    base09: ek.A.colors.TEXT_FEEDBACK_POSITIVE.css,
    base0B: ek.A.colors.TEXT_FEEDBACK_WARNING.css,
    base0D: ek.A.colors.TEXT_BRAND.css,
};
function ax(e) {
    let t = {};
    for (let [a, n] of Object.entries(e)) t[a] = n;
    return t;
}
let ag = ax(ap),
    av = ax(ap);
function ab(e) {
    return H.AKn.test(e) ? (0, r.jsx)(ah.Ay, { type: ah.Ay.Types.TEXT, children: () => e }) : e;
}
function a_(e) {
    let { data: t } = e,
        a = (0, q.Ay)();
    return (0, r.jsx)("div", {
        className: tN.H$,
        children: (0, r.jsx)(am.d, {
            data: t,
            theme: "light" === a ? av : ag,
            invertTheme: !1,
            valueRenderer: ab,
            shouldExpandNode: () => !0,
        }),
    });
}
var af = a(761929),
    aj = a(23599);
function ay(e) {
    let { resizableNode: t, minHeight: a, onResize: n } = e,
        l = (0, af.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: n,
            orientation: af.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, r.jsx)("div", { onPointerDown: l, className: aj.Di });
}
function aC(e) {
    let { children: t, className: a, initialHeight: n, minHeight: l } = e,
        s = o.useRef(null),
        [i, d] = o.useState(n);
    return (0, r.jsxs)("div", {
        ref: s,
        className: aj.kL,
        style: { minHeight: l, height: i },
        children: [
            (0, r.jsx)(ay, { resizableNode: s, minHeight: l, onResize: d }),
            (0, r.jsx)("div", { className: E()(aj.KZ, a), children: t }),
        ],
    });
}
var aE = a(231643);
a(895017), aE.fu.NONE, aE.fu.NONE;
var aS = a(824552),
    aN = a(688810),
    aA = a(975460),
    ak = a(46225),
    aD = a(487431),
    aT = a(328153),
    aI = a(905552),
    aw = a(546183),
    aO = a(134861),
    aR = a(71393),
    aL = a(967198),
    aM = a(157257),
    aP = a(942370),
    aU = a(985018),
    aB = a(311350),
    aG = a(325126);
function aF() {
    var e;
    let t,
        a,
        n = o.useRef(null),
        { analyticsLocations: l } = (0, aN.Ay)(tr.A.DEV_TOOLS),
        [s, i] = o.useState(""),
        c = (0, d.bG)([aL.A], () => aL.A.getGuildId()),
        u = (0, d.bG)([aR.A], () => aR.A.getGuild(c)),
        m = u?.gameApplicationIds ?? [],
        h = (0, tE.A)(m).filter((e) => null != e),
        x = (0, d.bG)([aT.Ay, aM.A], () => (0, aI.A)(aT.Ay, aM.A)),
        b = (0, tE.h)(s),
        _ = (0, aA.g)(b),
        f = (0, d.yK)(
            [tC.A],
            () => b?.linkedGames?.map((e) => tC.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        j = (0, ak.RD)(b, { allowedFlows: [aP._.RPC], debug: !0 }),
        y = (0, ak.RD)(b, { allowedFlows: [aP._.WEB], debug: !0 }),
        C = (0, d.bG)([aO.A], () => null != _ && aO.A.isConnected(_.id)),
        S = (0, ak.RD)(b, { debug: !0 }),
        { canDeauthorize: A, deauthorize: k } =
            ((e = S.connectionApp?.id),
            (t = (0, d.bG)([aw.default], () => aw.default.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && aS.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: n,
        className: E()(tN.nd, aG.nd),
        children: [
            (0, r.jsxs)("div", {
                className: aG.kL,
                children: [
                    (0, r.jsx)(T.D, { variant: "heading-lg/normal", children: "Guild Official Games" }),
                    null != u
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)(N.E, { variant: "text-md/normal", children: [u.name, " (", u.id, ")"] }),
                                  h.length > 0
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(N.E, {
                                                    variant: "text-sm/semibold",
                                                    children: "Official Games",
                                                }),
                                                h.map((e) =>
                                                    (0, r.jsx)(
                                                        p.$,
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
                                      : (0, r.jsx)(N.E, { variant: "text-md/normal", children: "No official games" }),
                              ],
                          })
                        : (0, r.jsx)(N.E, { variant: "text-md/normal", children: "No guild selected" }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: aG.kL,
                children: [
                    (0, r.jsx)(T.D, { variant: "heading-lg/normal", children: "Application" }),
                    (0, r.jsx)(g.k, { label: "Application ID", value: s, onChange: i }),
                    null != x && null != x.id
                        ? (0, r.jsx)(p.$, {
                              onClick: () => i(x.id),
                              variant: "primary",
                              text: `Use detected game: ${x.name} (${x.id})`,
                          })
                        : null,
                    (0, r.jsxs)(N.E, {
                        variant: "text-md/normal",
                        children: ["Application Name: ", null != b ? b.name : "N/A"],
                    }),
                    (0, r.jsxs)(N.E, {
                        variant: "text-md/normal",
                        children: [
                            "Linked Games:",
                            " ",
                            f.length > 0
                                ? f.map((e) => ((0, aA.t)(b)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                : "N/A",
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(v.c, {}),
            (0, r.jsxs)("div", {
                className: aG.kL,
                children: [
                    (0, r.jsx)(T.D, { variant: "heading-lg/normal", children: "Authorization" }),
                    (0, r.jsx)(aD.VT, {
                        overallStatus: j.debug.isSubscribedToAuthorizeRequest
                            ? aD.nW.OVERALL_GOOD
                            : C
                              ? aD.nW.WARN
                              : aD.nW.OVERALL_BAD,
                        name: aU.intl.string(aB.default.AGLx00),
                        steps: [
                            {
                                status: C ? aD.nW.GOOD : aD.nW.BAD,
                                text: aU.intl.string(aB.default.kxF9br),
                                description: C ? null : aU.intl.string(aB.default.PFxxJa),
                                learnMoreLink: C
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: j.debug.isSubscribedToAuthorizeRequest
                                    ? aD.nW.GOOD
                                    : C
                                      ? aD.nW.WARN
                                      : aD.nW.BAD,
                                text: aU.intl.string(aB.default.S94dzs),
                                description:
                                    j.debug.isSubscribedToAuthorizeRequest || !C
                                        ? null
                                        : aU.intl.string(aB.default.aTULMB),
                                learnMoreLink:
                                    j.debug.isSubscribedToAuthorizeRequest || !C
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: S.chosenFlow === aP._.RPC,
                    }),
                    (0, r.jsx)(aD.VT, {
                        overallStatus: y.debug.hasConnectionEntrypointUrl ? aD.nW.OVERALL_GOOD : aD.nW.OVERALL_BAD,
                        name: aU.intl.string(aB.default.K3ObrU),
                        steps: [
                            {
                                status: y.debug.hasConnectionEntrypointUrl ? aD.nW.GOOD : aD.nW.BAD,
                                text: aU.intl.string(aB.default["8a7IrV"]),
                                description: y.debug.hasConnectionEntrypointUrl
                                    ? aU.intl.formatToPlainString(aB.default["9iLeL2"], {
                                          url: y.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: S.chosenFlow === aP._.WEB,
                    }),
                    (0, r.jsx)(aD.Sy, {
                        status: S.hasAlreadyLinked ? aD.nW.OVERALL_GOOD : aD.nW.OVERALL_BAD,
                        text: aU.intl.string(aU.t["Vu/zmQ"]),
                    }),
                    0 === S.debug.validFlows.length &&
                        (0, r.jsx)(N.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: aU.intl.string(aB.default.eg0mNa),
                        }),
                    (0, r.jsx)(p.$, {
                        disabled: !S.canStartAuthorization,
                        onClick: () => S.startAuthorization({ analyticsLocations: l }),
                        variant: "primary",
                        text: "Start Authorization",
                    }),
                    (0, r.jsx)(N.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children:
                            "This will start whichever authorization flow is available. RPC authorization takes precedence over web.",
                    }),
                    (0, r.jsx)(p.$, {
                        disabled: !j.canStartAuthorization,
                        onClick: () => j.startAuthorization({ analyticsLocations: l }),
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, r.jsx)(p.$, {
                        disabled: !y.canStartAuthorization,
                        onClick: () => y.startAuthorization({ analyticsLocations: l }),
                        variant: "secondary",
                        text: "Start Web Authorization",
                    }),
                    (0, r.jsx)(p.$, { disabled: !A, onClick: k, variant: "critical-primary", text: "Deauthorize" }),
                ],
            }),
            b?.applicationAccountLinkBenefitConfig != null &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(v.c, {}),
                        (0, r.jsxs)("div", {
                            className: aG.kL,
                            children: [
                                (0, r.jsx)(T.D, { variant: "heading-lg/normal", children: "Reward Configuration" }),
                                (0, r.jsx)("div", {
                                    className: aG.Nr,
                                    children: (0, r.jsxs)("div", {
                                        className: aG.Tc,
                                        children: [
                                            null != b.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, r.jsx)("img", {
                                                    src: b.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: aG.L8,
                                                }),
                                            (0, r.jsx)(N.E, {
                                                variant: "text-md/semibold",
                                                children:
                                                    b.applicationAccountLinkBenefitConfig.reward_name ??
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
var aV = a(427358),
    a$ = a(465153);
let aW = [
    {
        key: "user",
        cellClassName: a$.iL,
        render(e) {
            let { user: t, key: a } = e;
            return t?.username ?? a;
        },
    },
    {
        key: "affinity",
        renderHeader: () => (0, r.jsx)(N.E, { variant: "text-sm/semibold", children: "COMMUNICATION AFFINITY" }),
        cellClassName: a$.nz,
        render(e) {
            let { affinity: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "vcProbability",
        renderHeader: () => (0, r.jsx)(N.E, { variant: "text-sm/semibold", children: "VOICE AFFINITY" }),
        cellClassName: a$.nz,
        render(e) {
            let { vcProbability: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "isFriend",
        renderHeader: () => (0, r.jsx)(N.E, { variant: "text-sm/semibold", children: "IS FRIEND" }),
        cellClassName: a$.nz,
        render(e) {
            let { isFriend: t } = e;
            return t.toString();
        },
    },
];
function aH() {
    let e = (0, d.yK)([aV.A, F.default], () =>
        aV.A.getUserAffinities().map((e) => {
            let { otherUserId: t, communicationProbability: a, vcProbability: n, isFriend: l } = e;
            return { user: F.default.getUser(t), affinity: a, vcProbability: n, isFriend: l, key: t };
        }),
    );
    return 0 === e.length ? null : (0, r.jsx)(tA, { className: tN.nd, columns: aW, rowClassName: a$.nM, data: e });
}
var az = a(139716),
    aK = a(847599),
    aY = a(282621);
function aq() {
    return (0, r.jsx)("div", {
        className: E()(tN.nd, aY.k),
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                (0, r.jsx)(v.c, { gap: 16 }),
                (0, r.jsxs)("div", {
                    className: aY.h,
                    children: [
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Test Tool",
                            onClick: () =>
                                void (0, eA.openModalLazy)(
                                    async () => {
                                        let { default: e } = await a.e("29079").then(a.bind(a, 357578));
                                        return (t) => (0, r.jsx)(e, { ...t });
                                    },
                                    { onCloseCallback: void 0 },
                                ),
                            fullWidth: !0,
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Modal",
                            onClick: () =>
                                az.A.showAgeVerificationGetStartedModal({ entryPoint: aK.q1.DEV_TOOLS_QUICK_ACTIONS }),
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var aJ = a(989349),
    aQ = a.n(aJ),
    aZ = a(862482),
    aX = a(624479),
    a0 = a(555704),
    a1 = a(285796),
    a2 = a(241326),
    a8 = a(892547),
    a9 = a(297413),
    a3 = a(379078),
    a7 = a(704554),
    a4 = a(957565),
    a6 = a(58703),
    a5 = a(80703),
    ne = a(495544);
let nt = 0,
    na = [],
    nn = 0,
    nl = [],
    ns = !1;
class ni extends d.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(ne.default, ad.A);
    }
    get loggedEvents() {
        return na;
    }
    get loggedEventsVersion() {
        return nn;
    }
    get loggedTriggers() {
        return nl;
    }
    get trackTriggers() {
        return ns;
    }
}
let nr = new ni(ty.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        ad.A.isDeveloper &&
            (na.push({
                key: (nt++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, a5.d)(n) : ne.default.getId(),
                timestamp: new Date(),
            }),
            nn++,
            na.length > 500 && (na = na.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: l, location: s, previouslyTracked: i } = e;
        !ad.A.isDeveloper ||
            (ns &&
                (nl = [
                    ...nl,
                    {
                        key: (0, eh.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: n,
                        excluded: l,
                        location: s,
                        previouslyTracked: i,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                nl.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        ns = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (na = []), nn++, (nl = []);
    },
});
var no = a(658675);
function nd(e) {
    let { className: t, children: a } = e;
    return (0, r.jsx)("dl", { className: E()(tN.qo, t), children: a });
}
let nc = (e) => {
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
                (0, r.jsx)("dt", { className: tN.Bz, children: t }),
                (0, r.jsxs)("dd", {
                    className: tN.Nw,
                    children: [
                        a,
                        null != n
                            ? (0, r.jsx)(S.D, {
                                  tag: "span",
                                  className: tN.nH,
                                  onClick: () => (0, a4.C)(n, () => s(!0)),
                                  children: l
                                      ? (0, r.jsx)(eX.U, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(aX.T, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
};
function nu(e) {
    let { value: t } = e;
    return (0, r.jsx)(no.P, { checked: t });
}
var nm = a(733657);
let nh = [
    {
        key: "event",
        cellClassName: nm.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "location",
        cellClassName: nm.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function np(e) {
    let { children: t } = e;
    return (0, r.jsx)(c.Ip, { className: nm._D, children: (0, r.jsx)("dl", { children: t }) });
}
function nx(e) {
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
            className: nm.fY,
            children: [
                (0, r.jsx)("dt", { className: nm.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(S.D, {
                    tag: "span",
                    className: nm.nH,
                    onClick: () => (0, a4.C)(JSON.stringify(n), () => s(!0)),
                    children: l
                        ? (0, r.jsx)(eX.U, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(aX.T, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let ng = new Set(["client_performance_cpu", "client_performance_memory"]),
    nv = [
        {
            id: "details",
            name: "Details",
            group: aE.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: n, fingerprint: l },
                        onClose: s,
                        filteredEvents: i,
                    } = e,
                    o = F.default.getUser(l),
                    d = aQ()(n);
                return (0, r.jsxs)("div", {
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(au.Ay, {
                            className: E()(tN.jr, nm.nZ),
                            children: [
                                (0, r.jsx)(au.Ay.Icon, { icon: a0.U, tooltip: t }),
                                (0, r.jsxs)(au.Ay.Title, {
                                    wrapperClassName: nm.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(S.D, {
                                            tag: "span",
                                            className: nm.KE,
                                            onClick: () => (0, a4.C)(t),
                                            children: (0, r.jsx)(aX.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(au.Ay.Icon, {
                                    icon: aX.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, a4.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: n, fingerprint: l, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(au.Ay.Icon, { icon: a1.a, tooltip: "Close", onClick: s }),
                            ],
                        }),
                        (0, r.jsxs)(nd, {
                            className: nm.ZK,
                            children: [
                                (0, r.jsx)(nc, {
                                    name: "Timestamp (local)",
                                    copyValue: n.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: n.toISOString(),
                                        title: (0, a6.i$)(d, "LLLL"),
                                        children: ["(", aQ().locale(), ") ", (0, a6.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nc, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(a9.A, { user: o }),
                                    }),
                                (0, r.jsx)(nc, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(np, {
                            children: Object.entries(a).map((e) => {
                                let [a, n] = e,
                                    l = ng.has(a)
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
                                                nx,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: n || null },
                                                    children:
                                                        null != n
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(n) })
                                                            : (0, r.jsx)("code", {
                                                                  className: nm.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, r.jsx)(
                                                    nx,
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
    nb = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(nb)
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
    n_ = {
        searchType: a3.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function nf() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (0, d.bG)([nr], () => nr.loggedEventsVersion),
        [l, s] = o.useState(() => Object.keys(nb)),
        [i, c] = o.useState(nr.loggedEvents),
        u = o.useCallback((e) => {
            c(e);
        }, []);
    (0, a7.RT)(t, nr.loggedEvents, u, n_, [n]);
    let m = i.filter((e) => {
            for (let t of l) if (nb[t].filter(e)) return !0;
            return !1;
        }),
        [h, p] = o.useState(void 0),
        x = m.find((e) => e.key === h),
        { TabBar: g, renderSelectedTab: v } = (0, aE.Ay)({ tabs: nv }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: E()(tN.nd, nm.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nm.rh,
                children: [
                    (0, r.jsx)(aZ.$n, {
                        className: nm.Q$,
                        look: aZ.$n.Looks.BLANK,
                        size: aZ.$n.Sizes.ICON,
                        onClick: I.eY,
                        children: (0, r.jsx)("span", {
                            title: aU.intl.string(aU.t.VkKicb),
                            children: (0, r.jsx)(a2.u, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": aU.intl.string(aU.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: nm.Bi }),
                    (0, r.jsx)("div", {
                        className: nm.uW,
                        children: Object.entries(nb).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                S.D,
                                {
                                    className: E()(nm.pb, l.includes(t) && nm.bx),
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
                className: nm.rh,
                children: (0, r.jsx)(a8.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(tA, { columns: nh, data: m, selectedRowKey: h, onClickRow: (e) => p(e.key) }),
            null != x &&
                (0, r.jsxs)(aC, {
                    className: nm.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(g, {}), v({ loggedEvent: x, onClose: () => p(void 0), filteredEvents: m })],
                }),
        ],
    });
}
var nj = a(382483),
    ny = a(385113),
    nC = a(315117);
function nE(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)(k.B, {
        gap: 8,
        padding: 8,
        className: nC.lt,
        children: [
            (0, r.jsx)(N.E, { variant: "text-sm/semibold", color: "text-strong", children: t.display_name }),
            (0, r.jsxs)(N.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["Config ID: ", t.config_id],
            }),
            (0, r.jsxs)(N.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["App ID: ", t.application_id],
            }),
            (0, r.jsxs)(N.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", t.status] }),
            null != t.updated_at &&
                (0, r.jsxs)(N.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Updated: ", t.updated_at],
                }),
            null != t.published_at &&
                (0, r.jsxs)(N.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Published: ", t.published_at],
                }),
            (0, r.jsx)(v.c, {}),
            (0, r.jsxs)(N.E, {
                variant: "text-xs/semibold",
                color: "text-strong",
                children: ["Surfaces (", a.length, ")"],
            }),
            0 === a.length
                ? (0, r.jsx)(N.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: "No surfaces configured",
                  })
                : a.map((e) => {
                      let [t, a] = e;
                      return (0, r.jsxs)(
                          k.B,
                          {
                              gap: 4,
                              padding: 4,
                              className: nC.YL,
                              children: [
                                  (0, r.jsx)(N.E, { variant: "text-xs/semibold", color: "text-default", children: t }),
                                  (0, r.jsxs)(N.E, {
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
function nS(e) {
    let { config: t, isSelected: a, onSelect: n } = e;
    return (0, r.jsxs)(k.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? nC.FM : nC.gt,
        children: [
            (0, r.jsx)(S.D, {
                className: nC.Av,
                onClick: n,
                children: (0, r.jsxs)(k.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(N.E, { variant: "text-sm/medium", color: "text-strong", children: t.display_name }),
                        (0, r.jsxs)(N.E, {
                            variant: "text-xs/normal",
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
                onClick: () => (0, nj.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function nN() {
    let e = (0, d.bG)([ny.A], () => ny.A.getFeaturedFetchState());
    return (0, r.jsxs)(k.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(k.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(N.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Featured Configs",
                    }),
                    (0, r.jsxs)(N.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, nj.Wq)({ force: !0 }),
            }),
        ],
    });
}
function nA() {
    let e = (0, d.bG)([ny.A], () => ny.A.getDeveloperFetchState());
    return (0, r.jsxs)(k.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(k.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(N.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Developer Configs",
                    }),
                    (0, r.jsxs)(N.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, nj.i$)({ force: !0 }),
            }),
        ],
    });
}
function nk() {
    let [e, t] = o.useState(""),
        a = (0, d.bG)([ny.A], () => (e.length > 0 ? ny.A.getFetchState(e) : null)),
        n = (0, d.bG)([ny.A], () => (e.length > 0 ? ny.A.getConfigs(e) : null));
    return (0, r.jsxs)(k.B, {
        gap: 8,
        children: [
            (0, r.jsx)(N.E, { variant: "text-md/semibold", color: "text-strong", children: "Fetch by Application ID" }),
            (0, r.jsx)(g.k, { placeholder: "Application ID", value: e, onChange: (e) => t(e) }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Fetch",
                disabled: 0 === e.length,
                onClick: () => (0, nj.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(N.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != n &&
                n.length > 0 &&
                (0, r.jsx)(k.B, { gap: 4, children: n.map((e) => (0, r.jsx)(nE, { config: e }, e.config_id)) }),
        ],
    });
}
function nD(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: n } = e,
        l = (0, d.bG)([ny.A], () => ny.A.getFeaturedFetchState());
    return (0, r.jsxs)(k.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(N.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            l === ny.e.FETCHING &&
                (0, r.jsx)(N.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    nS,
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
function nT(e) {
    let { config: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(v.c, {}),
            (0, r.jsxs)(k.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(N.E, { variant: "text-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(nE, { config: t }),
                ],
            }),
        ],
    });
}
function nI() {
    let [e, t] = o.useState(null),
        a = Object.values((0, d.bG)([ny.A], () => ny.A.getAllConfigsByApplication())).flat(),
        n = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(c.Ar, {
        children: (0, r.jsxs)(k.B, {
            gap: 16,
            padding: 8,
            className: nC.zr,
            children: [
                (0, r.jsx)(T.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(nN, {}),
                (0, r.jsx)(v.c, {}),
                (0, r.jsx)(nA, {}),
                (0, r.jsx)(v.c, {}),
                (0, r.jsx)(nk, {}),
                (0, r.jsx)(v.c, {}),
                (0, r.jsx)(nD, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != n && (0, r.jsx)(nT, { config: n }),
            ],
        }),
    });
}
var nw = a(636537),
    nO = a(153488),
    nR = a(927813);
let nL = 12 * nR.A.Millis.HOUR,
    nM = new Map(),
    nP = !1,
    nU = Object.freeze({ channelAffinities: [], lastFetched: 0 }),
    nB = { ...nU };
function nG() {
    nM = new Map(nB.channelAffinities.map((e) => [e.channelId, e]));
}
class nF extends d.Ay.PersistedStore {
    static displayName = "ChannelAffinitiesV2Store";
    static persistKey = "ChannelAffinitiesStoreV2";
    initialize(e) {
        null != e && ((nB.channelAffinities = e.channelAffinities), (nB.lastFetched = e.lastFetched), nG());
    }
    shouldFetch() {
        if (!nP) return Date.now() - nB.lastFetched > nL;
    }
    isFetching() {
        return nP;
    }
    getChannelAffinities() {
        return nB.channelAffinities;
    }
    getChannelAffinitiesMap() {
        return nM;
    }
    getChannelAffinity(e) {
        return nM.get(e);
    }
    compare(e, t) {
        return (nM.get(t)?.score ?? 0) - (nM.get(e)?.score ?? 0);
    }
    getState() {
        return nB;
    }
}
let nV = new nF(ty.h, {
    LOAD_CHANNEL_AFFINITIES_V2: function () {
        nP = !0;
    },
    LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineChannels: t } = e;
        (nB.lastFetched = Date.now()), (nP = !1), (nB.channelAffinities = t), nG();
    },
    LOAD_CHANNEL_AFFINITIES_V2_FAILURE: function () {
        nP = !1;
    },
    LOGOUT: function () {
        (nB = { ...nU }), (nM = new Map()), (nP = !1);
    },
});
var n$ = a(907360);
let nW = [
    {
        key: "channel",
        cellClassName: n$._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(N.E, { variant: "text-sm/semibold", children: "SCORE" }),
        cellClassName: n$.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function nH() {
    o.useEffect(() => {
        !(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            nV.shouldFetch() && nO.A.hasConsented(H.YAq.PERSONALIZATION)
                ? (ty.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" }),
                  nw.Bo.get({
                      url: H.Rsh.CHANNEL_AFFINITIES_V2,
                      retries: 3 * !!e,
                      oldFormErrors: !0,
                      rejectWithError: !1,
                  }).then(
                      (e) => {
                          let { body: t } = e;
                          ty.h.dispatch({
                              type: "LOAD_CHANNEL_AFFINITIES_V2_SUCCESS",
                              affineChannels: t.channel_affinities.map((e) => ({
                                  channelId: e.channel_id,
                                  score: e.score ?? 0,
                              })),
                          });
                      },
                      () => {
                          ty.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2_FAILURE" });
                      },
                  ))
                : Promise.resolve();
        })();
    }, []);
    let e = (0, d.yK)([nV, tZ.A], () =>
        nV
            .getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: tZ.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(tA, { className: tN.nd, columns: nW, rowClassName: n$.nM, data: e });
}
function nz() {
    return (0, r.jsxs)(N.E, {
        variant: "text-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var nK = a(554146),
    nY = a(105565),
    nq = a(771781),
    nJ = a(193337);
let nQ = (e) => {
        switch (e) {
            case nY.r.DC_DISMISSED:
                return "DISMISS:";
            case nY.r.DC_SHOWN:
                return "SHOW:";
            case nY.r.DC_SHOW_REQUEST:
                return "REQUEST TO SHOW:";
            default:
                return "UNKNOWN TYPE:";
        }
    },
    nZ = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${nK.M[a]}`;
            },
        },
    ],
    nX = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${nK.M[t]}`;
            },
        },
    ];
function n0() {
    let e = (0, d.bG)([nY.A], () => nY.A.getDCFEvents()),
        t = (0, nq.Ay)((e) => e.candidates),
        a = (0, nq.Ay)((e) => e.lastWinnerTime),
        n = 0 !== a ? aQ()(a).fromNow() : "n/a",
        l = (0, nq.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        s = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: nQ(t) + a.toString(), event: nQ(t), dismissibleContent: a };
        }),
        i = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: nJ.KE,
        children: [
            (0, r.jsxs)("div", { className: nJ.pq, children: ["Last winner time: ", n] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: nJ.pq, children: ["Last winner: ", null != l ? nK.M[l] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: nJ.uI,
                children: (0, r.jsx)(tA, { className: nJ.Th, columns: nX, data: i }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(tA, { columns: nZ, data: s }),
        ],
    });
}
var n1 = a(689175),
    n2 = a(541689),
    n8 = a(199773);
function n9() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(n3());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        a.unshift(e), tj.w.set("RecentDismissibleOverrides", a);
    }, []);
    return [n3(), e];
}
function n3() {
    return tj.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var n7 = a(662546),
    n4 = a(643278),
    n6 = a(617617),
    n5 = a(256787),
    le = a(20439);
let lt = o.memo(function (e) {
    let { className: t, content: a, onChange: n } = e,
        l = nK.M[a],
        { isDismissed: s, handleToggleDismissState: i } = (0, le.A)(l),
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
            (0, r.jsxs)(k.B, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, r.jsx)(eE.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: d ? n7.O : n4.s,
                        onClick: m,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(b.d, {
                        label: `${a.toLowerCase()} (${nK.M[a]})`,
                        description: (0, n5.Zm)(l)
                            ? (function (e) {
                                  let t = n6.A.settings.userContent?.recurringDismissibleContentStates?.[e];
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
function la(e) {
    let { items: t, onChange: a } = e,
        [n, l] = n9(),
        s = (0, o.useCallback)(
            (e) => {
                l(e), a?.(e);
            },
            [l, a],
        );
    return (0, r.jsx)(k.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(lt, { content: e, onChange: s }, e)),
    });
}
function ln(e) {
    let { searchQuery: t = "" } = e,
        a = (0, nq.Ay)((e) => e.recentlyShown),
        [n, l] = n9(),
        s = n
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(nK.M[e]))
            .slice(0, 3);
    return 0 === s.length
        ? null
        : (0, r.jsx)(m.n, { label: "Recent Overrides", children: (0, r.jsx)(la, { items: s }) });
}
function ll(e) {
    let { searchQuery: t = "" } = e,
        a = (0, nq.Ay)((e) => e.recentlyShown)
            .map((e) => nK.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(m.n, { label: "Recently Shown", children: (0, r.jsx)(la, { items: a }) });
}
var ls = a(594061),
    li = a(268571);
function lr() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
        } = (0, d.cf)([n8.A], () => ({
            dailyCapReached: n8.A.hasUserHitDCCap(),
            dailyCapOverridden: n8.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: n8.A.newUserMinAgeRequiredOverridden,
        })),
        [n, l] = o.useState(""),
        [s, i] = o.useState(20),
        c = o.useMemo(
            () =>
                Object.keys(nK.M)
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
    return (0, r.jsx)(n1.Ch, {
        onScroll: u,
        children: (0, r.jsxs)("div", {
            className: li.KE,
            children: [
                (0, r.jsxs)(m.n, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, r.jsxs)(k.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, n2.Ab)(),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, ls.nT)(),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, ls.D1)(),
                                }),
                                (0, r.jsx)(N.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: `Daily Cap Reached: ${e ? "Yes" : "No"}`,
                                }),
                            ],
                        }),
                        (0, r.jsx)(b.d, {
                            label: "Override Dismissible Content Daily Cap",
                            checked: t,
                            onChange: n2.SE,
                        }),
                        (0, r.jsx)(b.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: n2.U$,
                        }),
                    ],
                }),
                (0, r.jsx)(ll, {}),
                (0, r.jsx)(ln, {}),
                (0, r.jsxs)(m.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(a8.I, { query: n, onChange: l, onClear: () => l("") }),
                        (0, r.jsx)(la, { items: c.slice(0, s) }),
                    ],
                }),
            ],
        }),
    });
}
var lo = a(53705),
    ld = a(154323),
    lc = a(155248);
function lu() {
    let e = (0, d.bG)([ld.A], () => ld.A.allWithDescriptions(), [], d.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, n] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                b.d,
                                { label: n, description: t, checked: a, onChange: (e) => (0, lo.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(v.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: lc.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: lc.x6,
                children: (0, r.jsx)(p.$, { variant: "primary", text: "Clear all", onClick: lo.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: lc.vu, children: t }),
        ],
    });
}
var lm = a(691540),
    lh = a(97483),
    lp = a(783878),
    lx = a(123292),
    lg = a(780907),
    lv = a(56562),
    lb = a(137177),
    l_ = a(569926);
let lf = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
];
function lj(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: n } = (0, l_.I)(t.id);
    return (0, r.jsxs)(k.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != n && (0, r.jsx)(lb.A, { game: n }),
            (0, r.jsxs)(k.B, {
                justify: "center",
                gap: 0,
                children: [
                    (0, r.jsx)(N.E, { variant: "text-md/normal", children: n?.name }),
                    a && (0, r.jsx)(N.E, { variant: "text-xxs/normal", children: "Debug" }),
                ],
            }),
        ],
    });
}
function ly() {
    let e = (0, d.bG)([aT.Ay], () => aT.Ay.getRunningGames()),
        t = (0, d.bG)([aT.Ay], () => aT.Ay.getDebugRunningGame()),
        [a, n] = (0, o.useState)(t?.id ?? ""),
        l = (0, o.useMemo)(
            () =>
                lf.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        ),
        s = (e) => {
            if (null == e || "" === e) return void (0, lg.xt)(null);
            let t = tT.A.getDetectableGame(e),
                a = t?.executables[0],
                n = t?.thirdPartySkus[0]?.distributor;
            if (null == t || null == a)
                return (0, lm.P0)({
                    id: "devtools-set-debug-game-error",
                    type: lh.Ck.FAILURE,
                    message: "Invalid Game ID",
                });
            (0, lg.xt)({
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
                fullscreenType: lv.aI.UNKNOWN,
                cmdLine: "",
                nativeProcessObserverId: -1,
            });
        };
    return (0, r.jsxs)(k.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(k.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(T.D, { variant: "heading-md/bold", children: "Running Games" }),
                    e.length > 0 &&
                        (0, r.jsx)("div", {
                            children: e.map((e) =>
                                (0, r.jsx)(lj, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, r.jsx)(v.c, {}),
            (0, r.jsxs)(k.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(T.D, { variant: "heading-md/bold", children: "Set Debug Running Game" }),
                    (0, r.jsx)(g.k, { label: "Custom Game ID", value: a, onChange: n }),
                    (0, r.jsx)(lp.Z, {
                        label: "Pick a Preset Game",
                        options: l,
                        value: t?.id ?? "",
                        onSelectionChange: (e) => {
                            s(e);
                        },
                        selectionMode: "single",
                        clearable: !0,
                    }),
                    (0, r.jsxs)(k.B, {
                        direction: "horizontal",
                        gap: 16,
                        justify: "end",
                        align: "end",
                        children: [
                            null != t &&
                                (0, r.jsx)(lx.Q, { variant: "secondary", text: "Clear", onClick: () => s(null) }),
                            (0, r.jsx)(p.$, { variant: "primary", text: "Detect Game", onClick: () => s(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lC = a(240248),
    lE = a(769195);
function lS() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            try {
                t(!0), n(null), s(null);
                let e = await nw.Bo.put({
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
    return (0, r.jsxs)(k.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(p.$, { variant: "primary", onClick: i, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, lC.uJ)(a) && (0, r.jsx)(N.E, { variant: "text-md/normal", color: "status-positive", children: a }),
            !(0, lC.uJ)(l) && (0, r.jsx)(N.E, { variant: "text-md/normal", color: "status-danger", children: l }),
        ],
    });
}
function lN() {
    return (0, r.jsx)("div", {
        className: lE.n,
        children: (0, r.jsx)(k.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(lS, {}) }),
    });
}
a(172879);
var lA = a(985623),
    lk = a.n(lA),
    lD = a(990078),
    lT = a(874804),
    lI = a(782134),
    lw = a(113494),
    lO = a(603349),
    lR = a(155466);
function lL(e) {
    return parseFloat(e.toFixed(3));
}
let lM = [
    {
        key: "store",
        cellClassName: lR.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: lR.i7,
        render(e) {
            let { trace: t } = e;
            return `${lL(t.time)} ms`;
        },
    },
];
function lP(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(c.Ip, { children: (0, r.jsx)(tA, { columns: lM, data: a }) });
}
let lU = [
    {
        id: "action",
        name: "Action",
        group: aE.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = aQ()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(nd, {
                        className: lR.mP,
                        children: [
                            (0, r.jsx)(nc, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, a6.i$)(a, "LLLL"),
                                    children: (0, a6.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(nc, { name: "Total Time", children: [lL(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(c.Ip, { className: lR.Dx, children: (0, r.jsx)(a_, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: aE.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsx)(lP, { actionLog: t });
        },
    },
];
function lB(e) {
    let { actionLog: t, initialHeight: a } = e,
        n = o.useMemo(
            () =>
                t.error
                    ? [
                          ...lU,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(lO.A, { className: lR.ik }), "Error"],
                              }),
                              group: aE.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: E()(lR.u4, tN.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: tN.R5,
                                                  children: (0, r.jsx)(aZ.$n, {
                                                      className: tN.Q$,
                                                      size: aZ.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(c.Ip, {
                                              className: lR.Dx,
                                              children: (0, r.jsx)(a_, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : lU,
            [t],
        ),
        { TabBar: l, renderSelectedTab: s } = (0, aE.Ay)({ tabs: n }, [n]);
    return (0, r.jsxs)(aC, {
        className: lR.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(au.Ay, {
                className: E()(tN.jr, lR.nZ),
                children: [
                    (0, r.jsx)(au.Ay.Icon, { icon: lT.K, tooltip: t.name }),
                    (0, r.jsx)(au.Ay.Title, {
                        wrapperClassName: E()(tN.qd, tN.ZE),
                        className: tN.Pz,
                        children: t.name,
                    }),
                    (0, r.jsx)(au.Ay.Icon, {
                        icon: aX.T,
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
                            (0, a4.C)(a, () =>
                                (0, lm.P0)({
                                    id: "copy-action-log-name",
                                    type: lh.Ck.SUCCESS,
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
let lG = [
        {
            key: "action",
            cellClassName: lR.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(lO.A, { className: lR.ik }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: lR.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${lL(t.totalTime)} ms`;
            },
        },
        {
            key: "timestamp",
            cellClassName: lR.i7,
            render(e) {
                let { actionLog: t } = e;
                return aQ()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    lF = {
        searchType: a3.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function lV() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = lk()(() => {
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
        })(ty.h.actionLogger),
        l = o.useMemo(() => n.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [n]),
        [s, i] = o.useState(l),
        [d, c] = o.useState(l),
        [u, m] = o.useState(!1),
        [h, p] = o.useState(),
        x = o.useCallback((e) => {
            c(e);
        }, []);
    (0, a7.RT)(t, u ? s : l, x, lF);
    let g = o.useCallback(
            (e) => {
                i(l), m(e);
            },
            [l],
        ),
        v = t.trim().length > 0,
        b = o.useMemo(() => (v ? d : u ? s : l), [l, d, v, u, s]),
        _ = u ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, r.jsxs)("div", {
        ref: e,
        className: E()(tN.nd, lR.nd),
        children: [
            (0, r.jsxs)("div", {
                className: lR.KE,
                children: [
                    (0, r.jsx)(lD.m, {
                        text: _,
                        children: (0, r.jsx)(eE.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? lI.u : lw.E,
                            "aria-label": _,
                            onClick: () => g(!u),
                        }),
                    }),
                    (0, r.jsx)(a8.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(tA, {
                columns: lG,
                data: b,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => p(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(lB, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var l$ = a(936388),
    lW = a(132369);
function lH() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: E()(tN.nd, lW.n),
        children: (0, r.jsx)(p.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: l$.A.clearUploadedKeyVersions,
        }),
    });
}
var lz = a(825484),
    lK = a(37962),
    lY = a(881520),
    lq = a(670455),
    lJ = a(861160);
let lQ = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function lZ() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(0),
        [l, s] = o.useState(1e3),
        [i, c] = o.useState(0),
        u = (0, d.bG)([lY.A], () => (null === e ? null : (lY.A.getFeedbackConfig(lq.MW[e]) ?? lK.u[lq.MW[e]]))),
        h = Object.entries(lq.MW),
        b = h.slice(h.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        _ = o.useMemo(() => null != e && i >= 0 && i <= 100 && a >= 0, [e, i, a]);
    return (0, r.jsx)("div", {
        className: lJ.kL,
        children: (0, r.jsxs)(k.B, {
            gap: 32,
            children: [
                (0, r.jsx)(x.l, {
                    label: "Feedback Survey",
                    options: b,
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
                                    (0, r.jsx)(N.E, { variant: "text-sm/semibold", children: "Current cooldown" }),
                                    (0, r.jsx)(N.E, {
                                        variant: "text-sm/normal",
                                        children: `${u.cooldown / 1e3} second(s) or`,
                                    }),
                                    (0, r.jsx)(N.E, {
                                        variant: "text-sm/normal",
                                        children: `${u.cooldown / 6e4} minute(s) or`,
                                    }),
                                    (0, r.jsx)(N.E, {
                                        variant: "text-sm/normal",
                                        children: `${u.cooldown / 36e5} hour(s) or`,
                                    }),
                                    (0, r.jsx)(N.E, {
                                        variant: "text-sm/normal",
                                        children: `${u.cooldown / 864e5} day(s)`,
                                    }),
                                ],
                            }),
                        (0, r.jsxs)(k.B, {
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
                                (0, r.jsx)(x.l, {
                                    label: "Override cooldown duration type",
                                    hideLabel: !0,
                                    options: lQ,
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
                (0, r.jsxs)(lz.e, {
                    children: [
                        (0, r.jsx)(p.$, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != u &&
                                    ty.h.dispatch({ type: "FEEDBACK_OVERRIDE_CLEAR", feedbackType: u.feedbackType })
                                ),
                            disabled: !_,
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != u &&
                                    ty.h.dispatch({
                                        type: "FEEDBACK_OVERRIDE_SET",
                                        feedbackType: u.feedbackType,
                                        cooldown: a * l,
                                        chance: i / 100,
                                    })
                                ),
                            disabled: !_,
                        }),
                    ],
                }),
                null == e &&
                    (0, r.jsx)(N.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: need to select a survey",
                    }),
                !(a >= 0) &&
                    (0, r.jsx)(N.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: cooldown needs to be a number greater than 0",
                    }),
                !(i >= 0 && i <= 100) &&
                    (0, r.jsx)(N.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: chance needs to be a number between 0 and 100",
                    }),
                (0, r.jsx)(N.E, {
                    variant: "text-sm/normal",
                    children: "Clear override resets a feedback survey to its default values",
                }),
            ],
        }),
    });
}
var lX = a(334279),
    l0 = a(663417),
    l1 = a(147925),
    l2 = a(557009),
    l8 = a(788868);
let l9 = async () =>
        (
            await nw.Bo.get({
                url: H.Rsh.ENTITLEMENTS_FOR_APPLICATION(l8.tv),
                oldFormErrors: !0,
                query: { exclude_consumed: !0, exclude_ended: !0 },
                rejectWithError: !0,
            })
        ).body.map((e) => l2.A.createFromServer(e)),
    l3 = async (e) => {
        await nw.Bo.post({
            url: "/debug/entitlements/fractional-premium",
            body: { count: 1, sku_id: e },
            rejectWithError: !1,
        });
    },
    l7 = async (e) => {
        let t = "/debug/entitlements/fractional-premium";
        null != e && (t = `${t}/${e}`), await nw.Bo.del({ url: t, rejectWithError: !0 });
    },
    l4 = async () => {
        await nw.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
    },
    l6 = () => {
        let [e, t] = o.useState([]),
            [a, n] = o.useState(!1),
            l = (0, o.useCallback)(async () => {
                try {
                    n(!0);
                    let e = await l9();
                    t(e);
                } finally {
                    n(!1);
                }
            }, []),
            s = (0, o.useCallback)(
                async (e) => {
                    await l3(e), await l();
                },
                [l],
            );
        return {
            grantFractionalPremium: s,
            deleteFractionalPremium: (0, o.useCallback)(
                async (e) => {
                    await l7(e), await l();
                },
                [l],
            ),
            triggerNextEntitlementFulfillment: (0, o.useCallback)(async () => {
                await l4(), await l();
            }, [l]),
            refreshEntitlementList: l,
            entitlements: e,
            loading: a,
        };
    };
var l5 = a(51846),
    se = a(214868);
let st = {
        [H.GD.QUEST_REWARD]: "Quest Reward",
        [H.GD.DEVELOPER_GIFT]: "Developer Gift",
        [H.GD.INVOICE]: "Invoice",
        [H.GD.REVERSE_TRIAL]: "Reverse Trial",
        [H.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
        [H.GD.SUBSCRIPTION]: "Subscription",
        [H.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
    },
    sa = (e) => {
        let t,
            { entitlement: a, active: n, onDelete: l } = e,
            s = (e) => (null != e ? (0, a6.i$)(e, "LLL") : "---");
        return (0, r.jsxs)("div", {
            className: E()(l5.Nr, n ? se.C1 : ""),
            children: [
                (0, r.jsxs)(N.E, { variant: "text-md/normal", children: ["ID: ", a.id, " "] }),
                !n &&
                    (0, r.jsxs)(N.E, {
                        variant: "text-md/normal",
                        children: ["SKU: ", sn.find((e) => e.value === a.skuId)?.label],
                    }),
                null != a.startsAt &&
                    null != a.endsAt &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(N.E, { variant: "text-md/normal", children: ["Start: ", s(a.startsAt), " "] }),
                            (0, r.jsxs)(N.E, { variant: "text-md/normal", children: ["End: ", s(a.endsAt), " "] }),
                        ],
                    }),
                (0, r.jsxs)(N.E, {
                    variant: "text-md/normal",
                    children: [
                        "Entitlement source type: ",
                        null != (t = a.sourceType) && t in st ? st[t] : `Unknown source type ${t}`,
                    ],
                }),
                n &&
                    null != l &&
                    (0, r.jsx)(aZ.$n, {
                        className: l5.RW,
                        size: aZ.$n.Sizes.TINY,
                        color: aZ.$n.Colors.RED,
                        look: aZ.$n.Looks.OUTLINED,
                        onClick: l,
                        children: "Delete",
                    }),
            ],
        });
    },
    sn = [
        { id: "1h", label: "1 hour", value: lX.j.PREMIUM_TIER_2_1_HOUR },
        { id: "1d", label: "1 day", value: lX.j.PREMIUM_TIER_2_1_DAY },
        { id: "3d", label: "3 days", value: lX.j.PREMIUM_TIER_2_3_DAY },
    ];
function sl() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(lX.j.PREMIUM_TIER_2_1_HOUR),
        [l, s] = o.useState([]),
        [i, d] = o.useState([]),
        {
            refreshEntitlementList: u,
            grantFractionalPremium: m,
            deleteFractionalPremium: h,
            triggerNextEntitlementFulfillment: g,
            entitlements: v,
            loading: b,
        } = l6();
    return (
        o.useEffect(() => {
            u();
        }, [u]),
        o.useEffect(() => {
            s(v.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === H.zF_.FRACTIONAL_REDEMPTION)),
                d(v.filter((e) => Object.values(lX.j).includes(e.skuId) && null == e.startsAt));
        }, [v]),
        (0, r.jsx)(c.Ip, {
            className: tN.nd,
            children: (0, r.jsxs)("div", {
                className: se.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: se.dL,
                        children: [
                            (0, r.jsx)(N.E, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, r.jsxs)(S.D, {
                                onClick: () => t(!e),
                                className: l5.As,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(N.E, { variant: "text-md/normal", children: "Info" }),
                                    }),
                                    (0, r.jsx)(l1.A, { direction: e ? l1.A.Directions.UP : l1.A.Directions.DOWN }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        (0, r.jsxs)("div", {
                            style: { margin: "8px 0" },
                            children: [
                                (0, r.jsx)(N.E, {
                                    variant: "text-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.",
                                }),
                                (0, r.jsx)("br", {}),
                                (0, r.jsx)(N.E, {
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
                        className: E()([l5.uW, se.Uo]),
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: sn,
                                onSelectionChange: n,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Grant Fractional Nitro",
                                onClick: () => m(a),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("section", {
                        className: l5.uW,
                        children: [
                            (0, r.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: se.dL,
                                children: [
                                    (0, r.jsx)(N.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: l5.GC,
                                        children: [
                                            (0, r.jsx)(aZ.$n, {
                                                disabled: b,
                                                size: aZ.$n.Sizes.TINY,
                                                color: aZ.$n.Colors.PRIMARY,
                                                look: aZ.$n.Looks.OUTLINED,
                                                onClick: () => g(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(aZ.$n, {
                                                disabled: b,
                                                size: aZ.$n.Sizes.TINY,
                                                color: aZ.$n.Colors.RED,
                                                look: aZ.$n.Looks.OUTLINED,
                                                onClick: () => h(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(aZ.$n, {
                                                disabled: b,
                                                look: aZ.$n.Looks.BLANK,
                                                size: aZ.$n.Sizes.ICON,
                                                onClick: u,
                                                children: (0, r.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, r.jsx)(l0.f, { size: "xs", color: "currentColor" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            l.length > 0 &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(N.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Active premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: l.map((e) =>
                                                (0, r.jsx)(
                                                    sa,
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
                                        (0, r.jsx)(N.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: i.map((e) => (0, r.jsx)(sa, { entitlement: e }, e.id)),
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
var ss = a(390544),
    si = a(665171),
    sr = a(522055),
    so = a(661202);
function sd() {
    let e = (0, d.bG)([aL.A], () => aL.A.getGuildId()),
        t = (0, d.bG)([aR.A], () => aR.A.getGuild(e)?.name),
        a = (0, d.bG)([sr.A], () => sr.A.getStateForGuild(e)?.instances),
        n = o.useMemo(() => Object.values(a ?? {})[0], [a]),
        l = o.useCallback(
            (t) => {
                null != n &&
                    null != e &&
                    ty.h.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: { ...n, status: t },
                    });
            },
            [n, e],
        ),
        s = o.useMemo(
            () =>
                Object.values(ss.M).map((e) =>
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
        i = o.useCallback(() => {
            null != n &&
                null != e &&
                ty.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...n, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [n, e]);
    return null == e
        ? null
        : (0, r.jsxs)(c.Ip, {
              className: so.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: so.uW,
                      children: (0, r.jsx)(T.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: so.uW,
                      children: [
                          (0, r.jsx)(N.E, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${n?.name}`,
                          }),
                          (0, r.jsx)("div", { className: so.UD, children: s }),
                          (0, r.jsx)(N.E, { variant: "eyebrow", children: "Remove Server Info" }),
                          (0, r.jsx)("div", {
                              className: so.UD,
                              children: (0, r.jsx)(p.$, {
                                  variant: "primary",
                                  text: "Remove IP Address & Game Server Panel URL",
                                  onClick: i,
                              }),
                          }),
                          (0, r.jsx)(N.E, { variant: "eyebrow", children: "Reset server" }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              text: "Reset",
                              onClick: () => {
                                  (0, si.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
function sc(e, t) {
    let a = "boolean" == typeof t ? t : !ac.Ay.get(e);
    ty.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var su = a(460281);
function sm(e) {
    let { devSettingsCategory: t } = e,
        a = (0, d.bG)([ac.Ay], () => ac.Ay.allByCategory(t), [t], d.My),
        n = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: n }] = e;
                    return (0, r.jsx)(b.d, { label: n, description: t, checked: a, onChange: (e) => sc(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: E()(tN.nd, su.n), children: n });
}
var sh = a(950305),
    sp = a(231483),
    sx = a(597770),
    sg = a(433492),
    sv = a(695458),
    sb = a(796140),
    s_ = a(268791),
    sf = a(836480),
    sj = a(855473),
    sy = a(626258),
    sC = a(420854),
    sE = a(373846),
    sS = a(657044),
    sN = a(141060),
    sA = a(608599),
    sk = a(685761),
    sD = a(157225),
    sT = a(362704),
    sI = a(625903),
    sw = a(628284),
    sO = a(320448),
    sR = a(110259),
    sL = a(830215),
    sM = a(381689),
    sP = a(889227),
    sU = a(499785),
    sB = a(315069);
class sG extends sB.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids);
    }
    static fromServer(e) {
        return new sG(e);
    }
    setPassword(e) {
        return (this.password = e), this;
    }
}
let sF = { pools: null, users: null };
function sV(e) {
    null == sF.users && (sF.users = new Map()), sF.users.set(e.id, new sP.A(e));
}
class s$ extends d.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (sF.pools = new Map(Object.entries(e.pools))),
            null != e.users && (sF.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != sF.pools ? Object.fromEntries(sF.pools) : null,
            users: null != sF.users ? Object.fromEntries(sF.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(sF.users?.values() ?? []).filter((t) => sF.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return sF.pools?.get(e) ?? null;
    }
    getUser(e) {
        return sF.users?.get(e) ?? null;
    }
    getPools() {
        return null === sF.pools ? null : Array.from(sF.pools.values());
    }
}
let sW = new s$(ty.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        null == sF.pools && (sF.pools = new Map()), sF.pools.set(t.id, t), a.forEach(sV);
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = sF.pools?.get(t);
        if (null == a) return !1;
        a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                sF.users?.delete(e);
            }),
            sF.pools?.delete(t);
    },
});
var sH = a(835002);
async function sz(e, t) {
    return await sU.A.get({
        url: H.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: sR.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: a, body: n } = e;
            if (!a) return void sM.A.showFailedToast(sH.OB.GENERIC_ERROR);
            let { generated_pool: l, users: s } = n;
            ty.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: sG.fromServer(l).setPassword(t),
                users: s.map((e) => new sP.A(e)),
            });
        })
        .catch(() => (sM.A.showFailedToast(sH.OB.GENERIC_ERROR), null));
}
var sK = a(844330),
    sY = a(277851);
let sq = [
        sh.n,
        sp.l,
        sx.o,
        sg.K,
        sv.m,
        sb.c,
        s_.$,
        sf.Q,
        sj.Z,
        sy.A,
        sC.E,
        sE.C,
        sS._,
        sN.i,
        sA.L,
        sk.f,
        sD.N,
        sT.Y,
        sI.Z,
    ],
    sJ = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ],
    sQ = () => {
        let [e, t] = o.useState(""),
            [a, n] = o.useState(""),
            [l, s] = o.useState(!1);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("form", {
                    onSubmit: async (l) => {
                        l.preventDefault(), s(!0);
                        try {
                            await sz(e, a), t(""), n("");
                        } finally {
                            s(!1);
                        }
                    },
                    children: (0, r.jsxs)(k.B, {
                        direction: "vertical",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, r.jsxs)(k.B, {
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
                            (0, r.jsxs)(k.B, {
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
                                            t(""), n("");
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
                (0, r.jsx)(v.c, { gap: 4 }),
            ],
        });
    },
    sZ = (e) => {
        let { pool: t } = e,
            { id: a, summary: n } = t,
            l = sW.getUsersForPool(a),
            s = (0, d.bG)([ne.default], () => ne.default.getId()),
            i = sq[Number(a) % sq.length],
            c = sJ[Number(a) % sJ.length],
            u = o.useCallback(() => {
                ty.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
            }, [a]);
        return (0, r.jsx)(k.B, {
            direction: "horizontal",
            align: "start",
            justify: "space-between",
            children: (0, r.jsx)(sK.A, {
                icon: (0, r.jsx)(N.E, {
                    variant: "text-md/medium",
                    color: c,
                    className: sY.td,
                    children: (0, r.jsx)(i, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
                title: n,
                className: sY.JC,
                subtitle: `${l.length} users`,
                children: (0, r.jsxs)(k.B, {
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
                                            S.D,
                                            {
                                                onClick: (a) => {
                                                    a.stopPropagation(),
                                                        (function (e, t) {
                                                            let a = sW.getUser(t);
                                                            if (null == a) throw Error("User not found");
                                                            let n = sW.getPool(e)?.password;
                                                            if (null == n) throw Error("Pool password not found");
                                                            if (null == a.email) throw Error("User email not found");
                                                            sL.A.login({
                                                                login: a.email,
                                                                password: n,
                                                                isMultiAccount: !0,
                                                                source: "generated_test_user",
                                                            }).catch(
                                                                () => (sM.A.showFailedToast(sH.OB.GENERIC_ERROR), null),
                                                            );
                                                        })(t.id, e.id);
                                                },
                                                "aria-disabled": s === e.id,
                                                className: E()(sY.vk, { [sY.Pe]: s === e.id }),
                                                children: (0, r.jsxs)(
                                                    k.B,
                                                    {
                                                        direction: "horizontal",
                                                        align: "center",
                                                        justify: "space-between",
                                                        gap: 8,
                                                        padding: { right: 8 },
                                                        fullWidth: !1,
                                                        children: [
                                                            (0, r.jsxs)(k.B, {
                                                                direction: "horizontal",
                                                                align: "center",
                                                                gap: 8,
                                                                fullWidth: !1,
                                                                className: E()({ [sY.WP]: s === e.id }),
                                                                children: [
                                                                    (0, r.jsx)(sh.n, {
                                                                        size: "custom",
                                                                        width: 20,
                                                                        height: 20,
                                                                        color: "currentColor",
                                                                    }),
                                                                    (0, r.jsxs)("div", {
                                                                        children: [
                                                                            (0, r.jsx)(N.E, {
                                                                                variant: "text-sm/normal",
                                                                                color: "text-default",
                                                                                children: e.username,
                                                                            }),
                                                                            (0, r.jsx)(N.E, {
                                                                                variant: "text-xs/normal",
                                                                                color: "text-muted",
                                                                                className: sY.c1,
                                                                                children: e.email,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            s === e.id
                                                                ? (0, r.jsx)(N.E, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-feedback-positive",
                                                                      children: (0, r.jsx)(sw.y, {
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                                  })
                                                                : (0, r.jsx)(sO._, {
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
                            className: sY.UD,
                            children: (0, r.jsx)(p.$, {
                                icon: a2.u,
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
function sX() {
    let e = (0, d.yK)([sW], () => sW.getPools() ?? []);
    return (0, r.jsxs)(k.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: sY.kL,
        children: [
            (0, r.jsx)(sQ, {}),
            (0, r.jsx)(c.Ip, { className: sY.Ik, children: e?.map((e) => (0, r.jsx)(sZ, { pool: e }, e.id)) }),
        ],
    });
}
var s0 = a(582306),
    s1 = a(528153),
    s2 = a(275759),
    s8 = a(888429);
function s9(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function s3() {
    let e = (0, d.bG)([s2.Ay], () => s2.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, d.bG)([s2.Ay], () => s2.Ay.getDevToolCurrentDate()),
        a = (0, d.bG)([s2.Ay], () => s2.Ay.getGiftUnreadNotificationLastDismissedTimes()),
        n = (0, d.bG)([s2.Ay], () => s2.Ay.getMessageGiftIntentLastShownMap()),
        l = (0, d.bG)([s2.Ay], () => s2.Ay.getHighestAffinityFriendAnniversaries()),
        s = (0, d.bG)([s2.Ay], () => s2.Ay.getHighAffinityFriendAnniversaries()),
        i = (0, d.bG)([s2.Ay], () => s2.Ay.getProfilePopoutGiftIntentsDismissMap()),
        o = (0, d.bG)([n6.A], () => {
            let e =
                n6.A.settings.userContent?.recurringDismissibleContentStates[nK.M.GIFT_INTENT_MESSAGE]
                    ?.lastDismissedAtMs;
            if (null == e || "0" === e) return null;
            let t = Number(e);
            return Number.isNaN(t) ? null : t;
        }),
        u = (e) => {
            ty.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
        },
        m = (e) => {
            let t = aV.A.getUserAffinity(e);
            return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
        };
    return (0, r.jsx)(c.Ip, {
        className: tN.nd,
        children: (0, r.jsxs)("div", {
            className: s8.l$,
            children: [
                (0, r.jsx)(N.E, { className: s8.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, r.jsx)("div", {
                    className: s8.Pm,
                    children: (0, r.jsxs)(k.B, {
                        gap: 8,
                        direction: "horizontal",
                        style: { flex: 1 },
                        children: [
                            (0, r.jsx)(x.l, {
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
                            (0, r.jsx)(p.$, {
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
                        className: s8.Pm,
                        children: (0, r.jsxs)(k.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(N.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "Affinity is the percent chance that User A will DM or GDM User B in the next 7 days.",
                                }),
                                (0, r.jsx)(N.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "The devtool automatically assigns users as high affinity regardless of actual affinity for testing.",
                                }),
                                l.length > 0 &&
                                    (0, r.jsxs)(k.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(N.E, {
                                                variant: "text-xs/semibold",
                                                children:
                                                    "Highest Affinity Friend Anniversaries (Eligible for Notification):",
                                            }),
                                            l.map((e) => {
                                                let t = F.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    N.E,
                                                    { variant: "text-xs/normal", children: [a, " (", m(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                                s.length > 0 &&
                                    (0, r.jsxs)(k.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(N.E, {
                                                variant: "text-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            s.map((e) => {
                                                let t = F.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    N.E,
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
                    className: s8.Pm,
                    children: (0, r.jsxs)(k.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(s0.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? aQ()(t) : void 0,
                                onSelect: (e) => {
                                    let t = aQ()(),
                                        a = e
                                            .clone()
                                            .hours(t.hours())
                                            .minutes(t.minutes())
                                            .seconds(t.seconds())
                                            .milliseconds(t.milliseconds());
                                    ty.h.dispatch({ type: "DEV_TOOLS_SET_CURRENT_DATE", date: a.valueOf() });
                                },
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Clear",
                                onClick: () => {
                                    ty.h.dispatch({ type: "DEV_TOOLS_RESET_CURRENT_DATE" });
                                },
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: s8.Pm,
                    children: (0, r.jsxs)(k.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(k.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(N.E, {
                                        variant: "text-md/normal",
                                        children: "Reset DCF gift intent cooldown (global, 24h)",
                                    }),
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            (0, ls._N)(nK.M.GIFT_INTENT_MESSAGE);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsx)(N.E, {
                                variant: "text-xs/normal",
                                children: null != o ? `Dismissed at: ${s9(o)}` : "Not dismissed",
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: s8.Pm,
                    children: (0, r.jsxs)(k.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(k.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(N.E, {
                                        variant: "text-md/normal",
                                        children: "Reset gift message cooldown (per-user, 14d)",
                                    }),
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            ty.h.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(n).length > 0 &&
                                (0, r.jsxs)(k.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(N.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift Message Intent Last Shown:",
                                        }),
                                        Object.entries(n).map((e) => {
                                            let [t, a] = e,
                                                n = F.default.getUser(t),
                                                l = n?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                N.E,
                                                { variant: "text-xs/normal", children: [l, ": ", s9(a)] },
                                                t,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: s8.Pm,
                    children: (0, r.jsxs)(k.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(k.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(N.E, {
                                        variant: "text-md/normal",
                                        children: "Reset gift notification cooldown",
                                    }),
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            ty.h.dispatch({
                                                type: "DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            a.length > 0 &&
                                (0, r.jsxs)(k.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(N.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift notification shown timestamps:",
                                        }),
                                        a.map((e, t) =>
                                            (0, r.jsx)(N.E, { variant: "text-xs/normal", children: s9(e) }, t),
                                        ),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: s8.Pm,
                    children: [
                        (0, r.jsx)(N.E, { variant: "text-md/normal", children: "Send gift notification" }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Send",
                            onClick: () => {
                                s1.A.sendGiftingNotificationIfEligible();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: s8.Pm,
                    children: [
                        (0, r.jsx)(N.E, {
                            variant: "text-md/normal",
                            children: "Clear last seen friend anniversaries in All Friends",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Clear",
                            onClick: () => {
                                ty.h.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: s8.Pm,
                    children: (0, r.jsxs)(k.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(k.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(N.E, {
                                        variant: "text-md/normal",
                                        children: "Reset profile popout gift intents dismiss",
                                    }),
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            ty.h.dispatch({
                                                type: "DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(i).length > 0 &&
                                (0, r.jsxs)(k.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(N.E, {
                                            variant: "text-xs/semibold",
                                            children: "Profile Popout Gift Intents Dismissed:",
                                        }),
                                        Object.entries(i).map((e) => {
                                            let [t, a] = e,
                                                n = F.default.getUser(t),
                                                l = n?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                N.E,
                                                { variant: "text-xs/normal", children: [l, ": ", s9(a)] },
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
var s7 = a(460890),
    s4 = a(349288),
    s6 = a(517461),
    s5 = a(214947),
    ie = a(403581),
    it = a(34188);
let ia = [
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
var il = a(545406);
let is = [0, 0.5, 1],
    ii = ["Center", "Inner ring", "Outer ring"],
    ir = is.length,
    io = "ILLO_BLUE",
    id = "ILLO_BLUE_40",
    ic = Array.from({ length: ir }, () => id),
    iu = Array.from({ length: ir }, () => io),
    im = ["1", "0.5", "0"],
    ih = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    ip = [
        { label: "Light", value: H.NJ8.LIGHT, id: H.NJ8.LIGHT },
        { label: "Dark", value: H.NJ8.DARK, id: H.NJ8.DARK },
        { label: "Darker", value: H.NJ8.DARKER, id: H.NJ8.DARKER },
        { label: "Midnight", value: H.NJ8.MIDNIGHT, id: H.NJ8.MIDNIGHT },
    ],
    ix = { [H.NJ8.MIDNIGHT]: H.NJ8.DARKER, [H.NJ8.DARKER]: H.NJ8.DARK, [H.NJ8.LIGHT]: H.NJ8.DARK },
    ig = { [H.NJ8.LIGHT]: "light", [H.NJ8.DARK]: "ash", [H.NJ8.DARKER]: "dark", [H.NJ8.MIDNIGHT]: "onyx" },
    iv = [
        { id: "friends", icon: s5.$, text: "Friends" },
        { id: "nitro", icon: ie.t, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: it.U, text: "Shop", useCustomGradient: !0 },
    ],
    ib = ia.map((e) => ({ label: e, value: e, id: e })),
    i_ = Object.fromEntries(
        ia.map((e) => [
            e,
            Object.keys(ek.A.unsafe_rawColors)
                .filter((t) => String(t).startsWith(e + "_"))
                .sort(
                    (e, t) =>
                        parseInt(String(e).split("_").pop() ?? "0", 10) -
                        parseInt(String(t).split("_").pop() ?? "0", 10),
                )
                .map((e) => {
                    let t = String(e).split("_").pop() ?? e,
                        [a, n, l] = ek.A.unsafe_rawColors[e].resolve().rgba(),
                        s =
                            (0.299 * a + 0.587 * n + 0.114 * l) / 255 > 0.5
                                ? ek.A.unsafe_rawColors.OPACITY_BLACK_28
                                : ek.A.unsafe_rawColors.OPACITY_WHITE_28,
                        i = (0, r.jsx)("span", {
                            className: il.oP,
                            style: { background: `rgb(${a}, ${n}, ${l})`, border: `1px solid ${s.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: i };
                }),
        ]),
    );
var ij = a(306327);
function iy(e, t, a) {
    return e.map((e, n) => (n === t ? a : e));
}
function iC(e, t) {
    let [a, n, l, s] = ek.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: n, b: l, a: s };
}
function iE(e, t) {
    let a = ek.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function iS(e) {
    let { yaml: t, label: a } = e,
        n = o.useCallback(() => {
            navigator.clipboard.writeText(t);
        }, [t]);
    return (0, r.jsxs)(k.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(k.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                justify: "space-between",
                children: [
                    (0, r.jsx)(N.E, { variant: "text-md/semibold", children: a }),
                    (0, r.jsx)(eE.K, {
                        icon: aX.T,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: n,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: il.RP, children: t }),
        ],
    });
}
function iN(e) {
    let { allResolvedStops: t } = e,
        a = o.useMemo(
            () =>
                ii.map((e, a) => {
                    let n;
                    return (
                        (n = ip
                            .map((e) => {
                                let n,
                                    l,
                                    { value: s } = e,
                                    i = ig[s],
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
    return (0, r.jsxs)(k.B, {
        gap: 16,
        children: [
            (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Token YAML" }),
            ii.map((e, t) => (0, r.jsx)(iS, { yaml: a[t], label: e }, e)),
        ],
    });
}
function iA(e, t, a) {
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
    return new ij.A("srgb", [
        (e.r * (1 - r) + n * r) / 255,
        (e.g * (1 - r) + l * r) / 255,
        (e.b * (1 - r) + s * r) / 255,
    ]);
}
function ik(e, t, a) {
    let n = a.map((e) => {
            let [t, a, n] = ek.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: n, opacity: e.opacity, position: e.position };
        }),
        l = 1 / 0,
        s = (e) => {
            e < l && (l = e);
        };
    for (let a of n) s(e.contrast(iA(t, n, a.position), "WCAG21"));
    for (let a = 0; a < n.length - 1; a++) {
        let { contrast: l } = (function (e, t, a, n, l) {
            let s = 1 / 0,
                i = n;
            for (let r = 0; r <= 100; r++) {
                let o = n + (r / 100) * (l - n),
                    d = a.contrast(iA(e, t, o), "WCAG21");
                d < s && ((s = d), (i = o));
            }
            return { contrast: s, position: i };
        })(t, n, e, n[a].position, n[a + 1].position);
        s(l);
    }
    return Math.round(100 * l) / 100;
}
function iD(e) {
    let [t, a, n] = ek.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [l, s, i] = ek.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = ek.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new ij.A("srgb", [t / 255, a / 255, n / 255]),
        background: { r: l * (1 - c) + r * c, g: s * (1 - c) + o * c, b: i * (1 - c) + d * c },
    };
}
function iT() {
    return {
        colors: Array.from({ length: ir }, () => void 0),
        scales: Array.from({ length: ir }, () => void 0),
        opacities: Array.from({ length: ir }, () => void 0),
    };
}
function iI() {
    return {
        [H.NJ8.LIGHT]: iT(),
        [H.NJ8.DARK]: { colors: [...ic], scales: [...iu], opacities: [...im] },
        [H.NJ8.DARKER]: iT(),
        [H.NJ8.MIDNIGHT]: iT(),
    };
}
function iw() {
    let e = (0, s7.G9)(),
        [t, a] = o.useState(H.NJ8.DARK),
        [n, l] = (0, s6.V)("DevToolsGradientContrastPanel_themeStops", iI()),
        s = n ?? iI(),
        [i, d] = o.useState(["", "", ""]),
        [u, m] = o.useState([null, null, null]),
        [h, x] = o.useState(null),
        { images: v, renderPickers: b } = (function () {
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
                        (0, r.jsxs)(k.B, {
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
                                              (0, r.jsx)(N.E, { variant: "text-sm/normal", children: e.name }),
                                              (0, r.jsx)(lx.Q, {
                                                  text: "Remove",
                                                  variant: "critical",
                                                  textVariant: "text-sm/medium",
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
        _ = o.useMemo(
            () =>
                Object.fromEntries(
                    ip.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    n = [],
                                    l = [];
                                for (let s = 0; s < ir; s++) {
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
                                        d = ix[d];
                                    }
                                    a.push(i ?? ic[s]), n.push(r ?? iu[s]), l.push(o ?? im[s]);
                                }
                                return { colors: a, scales: n, opacities: l };
                            })(s, t),
                        ];
                    }),
                ),
            [s],
        ),
        f = _[t],
        j = o.useCallback(
            (e) => {
                l({ ...s, [t]: e(s[t]) });
            },
            [t, l, s],
        ),
        y = o.useMemo(() => iD({ theme: t, saturation: 1 }), [t]),
        C = o.useMemo(() => {
            let e = [];
            for (let t = 0; t < ir; t++) {
                let a = parseFloat(f.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: f.colors[t], opacity: a, position: is[t] });
            }
            return e;
        }, [f]),
        E = o.useMemo(() => {
            if (null == C) return null;
            let { text: e, background: t } = y;
            return ii.map((a, n) =>
                i_[f.scales[n]].map((a) => {
                    let l = ik(e, t, iy(C, n, { ...C[n], color: a.value }));
                    return { ...a, trailing: `(${l}:1)` };
                }),
            );
        }, [C, y, f.scales]),
        S = o.useMemo(() => {
            try {
                return ip.map((e) => {
                    let { value: t, label: a } = e,
                        n = _[t],
                        l = [];
                    for (let e = 0; e < ir; e++) {
                        let s = parseFloat(n.opacities[e]);
                        if (isNaN(s) || s < 0 || s > 1) return { theme: t, label: a, result: null };
                        l.push({ color: n.colors[e], opacity: s, position: is[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: n, background: l } = iD(t),
                                s = ik(n, l, e),
                                i = s >= 4.5;
                            if (!i)
                                for (let t = 0; t < e.length; t++) {
                                    let s = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return ia.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == s) continue;
                                    let i = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of i_[s]) {
                                        if (o === e[t].color) continue;
                                        let s = ik(n, l, iy(e, t, { ...e[t], color: o }));
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
        }, [_]);
    return (0, r.jsx)(c.Ar, {
        className: il.XG,
        children: (0, r.jsxs)(k.B, {
            gap: 24,
            padding: 8,
            className: il.zr,
            children: [
                (0, r.jsx)(T.D, {
                    variant: "heading-lg/medium",
                    children: "Tab Hover Gradient Token Generator & Contrast Checker",
                }),
                (0, r.jsxs)(k.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(N.E, {
                            variant: "text-md/normal",
                            children:
                                "Checks that tab hover gradients pass WCAG AA (4.5:1) contrast against the text in the tab, accounting for opacities and hover states.",
                        }),
                        (0, r.jsx)(N.E, {
                            variant: "text-sm/normal",
                            children:
                                "Pick colors for each gradient stop (center, inner ring, outer ring) per theme. Each color in the dropdown will show the minimum contrast ratio for the gradient if the color were selected. Dark-family themes inherit: values set on Dark cascade to Darker and Midnight unless overridden.",
                        }),
                        (0, r.jsx)(N.E, {
                            variant: "text-sm/normal",
                            children:
                                "Use the hex field to paste in a hex color — it will snap to the closest allowed token and show the deltaE distance.",
                        }),
                        (0, r.jsxs)(N.E, {
                            variant: "text-sm/normal",
                            children: [
                                "Copy the generated YAML at the bottom to create your token definitions to be used by the",
                                " ",
                                (0, r.jsx)(s4.Anchor, {
                                    href: "https://design.discord.tools/foundations/color/token-pipeline",
                                    children: "token pipeline",
                                }),
                                ".",
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(lp.Z, {
                    selectionMode: "single",
                    label: "Theme",
                    value: t,
                    onSelectionChange: (e) => a(e),
                    closeOnSelect: !0,
                    options: ip,
                }),
                (0, r.jsxs)(k.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: il.G9,
                            children: ii.map((e, t) => {
                                let a = "" !== i[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)(k.B, {
                                                gap: 0,
                                                className: il.hi,
                                                children: [
                                                    (0, r.jsx)(N.E, { variant: "text-md/medium", children: e }),
                                                    (0, r.jsx)(lx.Q, {
                                                        variant: "secondary",
                                                        textVariant: "text-xs/normal",
                                                        text: `(${iE(f.colors[t], parseFloat(f.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                iE(f.colors[t], parseFloat(f.opacities[t])),
                                                            ),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(lp.Z, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: a,
                                                value: f.scales[t],
                                                onSelectionChange: (e) => {
                                                    let a = i_[e][0]?.value;
                                                    j((n) => ({
                                                        ...n,
                                                        scales: iy(n.scales, t, e),
                                                        colors: null != a ? iy(n.colors, t, a) : n.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: ib,
                                            }),
                                            (0, r.jsx)(lp.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: f.colors[t],
                                                onSelectionChange: (e) =>
                                                    j((a) => ({ ...a, colors: iy(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: E?.[t] ?? i_[f.scales[t]],
                                            }),
                                            (0, r.jsx)(g.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: f.opacities[t],
                                                onChange: (e) => j((a) => ({ ...a, opacities: iy(a.opacities, t, e) })),
                                                placeholder: "0–1",
                                            }),
                                            (0, r.jsx)(g.k, {
                                                label: `Hex${a && null != u[t] ? ` (dE: ${u[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: i[t],
                                                onChange: (e) => {
                                                    d((a) => iy(a, t, e));
                                                    let a = (function (e) {
                                                        if (!ih.test(e)) return null;
                                                        try {
                                                            return new ij.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = id,
                                                                a = io,
                                                                n = 1 / 0;
                                                            for (let l of ia)
                                                                for (let s of i_[l]) {
                                                                    let i = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, n] = ek.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new ij.A("srgb", [
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
                                                        m((a) => iy(a, t, e.deltaE)),
                                                            j((a) => ({
                                                                ...a,
                                                                scales: iy(a.scales, t, e.scale),
                                                                colors: iy(a.colors, t, e.color),
                                                            }));
                                                    } else m((e) => iy(e, t, null));
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
                (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Preview" }),
                (0, r.jsx)(s7.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(eN.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)(k.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: il.$8,
                                        style: { background: ek.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: iv.map((e, t) =>
                                            (0, r.jsx)(
                                                X.z9,
                                                {
                                                    route: "",
                                                    selected: h === e.id,
                                                    onClick: () => x(e.id),
                                                    icon: e.icon,
                                                    text: e.text,
                                                    showHoverGradient: !0,
                                                    nitroHoverGradient: "nitroHoverGradient" in e,
                                                    role: "listitem",
                                                    tabIndex: 0,
                                                    onFocus: () => {},
                                                    ...("useCustomGradient" in e && {
                                                        hoverGradientStart: iC(f.colors[0], parseFloat(f.opacities[0])),
                                                        hoverGradientMiddle: iC(
                                                            f.colors[1],
                                                            parseFloat(f.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: iC(f.colors[2], parseFloat(f.opacities[2])),
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
                    (0, r.jsxs)(k.B, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Results" }),
                            S.map((e) => {
                                let { theme: t, label: a, result: n } = e;
                                return null != n
                                    ? (0, r.jsxs)(
                                          k.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, r.jsx)(N.E, { variant: "text-md/semibold", children: a }),
                                                  (0, r.jsxs)(A.w, {
                                                      type: n.passes ? "success" : "critical",
                                                      children: [
                                                          n.passes ? "✓ Passes" : "✗ Fails",
                                                          " WCAG AA — Min contrast: ",
                                                          n.minContrastRatio,
                                                          " : 1",
                                                      ],
                                                  }),
                                                  !n.passes &&
                                                      null != n.suggestion &&
                                                      (0, r.jsxs)(k.B, {
                                                          gap: 4,
                                                          children: [
                                                              (0, r.jsx)(N.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: "Suggestion:",
                                                              }),
                                                              (0, r.jsxs)(N.E, {
                                                                  variant: "text-sm/normal",
                                                                  children: [
                                                                      ii[n.suggestion.stopIndex],
                                                                      ": ",
                                                                      (0, r.jsx)("strong", {
                                                                          children: n.suggestion.suggestedColor,
                                                                      }),
                                                                      " →",
                                                                      " ",
                                                                      n.suggestion.resultingMinContrast,
                                                                      " : 1",
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                  !n.passes &&
                                                      null == n.suggestion &&
                                                      (0, r.jsx)(N.E, {
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
                (0, r.jsx)(iN, { allResolvedStops: _ }),
            ],
        }),
    });
}
var iO = a(820739),
    iR = a(230135),
    iL = a(45780),
    iM = a(942975),
    iP = a(859241);
let iU = [
        nK.M.GUILD_POWERUP_PERKS_COACHMARK,
        nK.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        nK.M.GUILD_POWERUP_NOTIFICATION,
        nK.M.GUILD_TAG_AVAILABLE_COACHMARK,
        nK.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
    ],
    iB = [
        nK.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        nK.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        nK.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        nK.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        nK.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    iG = [nK.V.ADOPT_CLAN_IDENTITY_NOTICE],
    iF = [
        nK.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        nK.M.VANITY_URL_POWERUP_ROLLBACK_MODAL,
        nK.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
    ];
function iV(e) {
    switch (e) {
        case nK.V.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return "GUILD_POWERUP_LEVEL_1_COACHMARK";
        case nK.V.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return "GUILD_POWERUP_LEVEL_2_COACHMARK";
        case nK.V.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return "GUILD_POWERUP_LEVEL_3_COACHMARK";
        case nK.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
        case nK.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
        case nK.V.ADOPT_CLAN_IDENTITY_NOTICE:
            return "ADOPT_CLAN_IDENTITY_NOTICE";
        default:
            return String(e);
    }
}
var i$ = a(861671);
async function iW(e, t, a) {
    await nw.Bo.patch({
        url: H.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : aQ()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, iO.VU)(e),
        (0, iM.Xd)(e, !0);
}
async function iH(e) {
    await nw.Bo.post({ url: H.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function iz() {
    let e = (0, d.bG)([aL.A], () => aL.A.getGuildId()),
        t = (0, d.bG)([aR.A], () => aR.A.getGuild(e)?.name),
        a = (0, d.yK)([n6.A], () => [...iB, ...iG].filter((t) => null != e && (0, iL.zs)(t, e))),
        n = (0, d.yK)([iP.A], () => (null != e ? (iP.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(c.Ip, {
            className: i$.kL,
            children: [
                (0, r.jsx)("div", {
                    className: i$.uW,
                    children: (0, r.jsx)(T.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                }),
                (0, r.jsxs)("div", {
                    className: i$.uW,
                    children: [
                        (0, r.jsx)(N.E, {
                            variant: "eyebrow",
                            className: i$.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, iM.qM)();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: i$.uW,
                    children: [
                        (0, r.jsx)(N.E, { variant: "eyebrow", className: i$.wx, children: "Reset Progress Bar State" }),
                        (0, r.jsx)(p.$, { variant: "primary", text: "Reset", onClick: iR.O }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: i$.uW,
                    children: [
                        (0, r.jsx)(N.E, { variant: "eyebrow", children: "Set Warning State" }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        iW(e, n.slice(Math.floor(n.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        iW(e, n, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: i$.uW,
                    children: [
                        (0, r.jsx)(N.E, { variant: "eyebrow", className: i$.wx, children: "Reset User Level DCs" }),
                        (0, r.jsx)(k.B, {
                            gap: 16,
                            children: iU.map((e) => (0, r.jsx)(lt, { className: i$.z6, content: nK.M[e] }, nK.M[e])),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: i$.uW,
                    children: (0, r.jsx)(m.n, {
                        label: "Reset Guild Level DCs",
                        children: iB.map((t) =>
                            (0, r.jsx)(
                                b.d,
                                {
                                    label: iV(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, iL._$)(t, e, !1)
                                            : ((0, ls._N)(nK.M.GUILD_POWERUP_NOTIFICATION), (0, iL.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: i$.uW,
                    children: (0, r.jsx)(m.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: iG.map((t) =>
                            (0, r.jsx)(
                                b.d,
                                {
                                    label: iV(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, iL._$)(t, e, !1)
                                            : ((0, ls._N)(nK.M.GUILD_POWERUP_NOTIFICATION), (0, iL.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: i$.uW,
                    children: [
                        (0, r.jsx)(N.E, {
                            variant: "eyebrow",
                            className: i$.wx,
                            children: "Reset Powerup Rollback DCs",
                        }),
                        iF.map((e) => (0, r.jsx)(lt, { className: i$.z6, content: nK.M[e] }, nK.M[e])),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: i$.uW,
                    children: [
                        (0, r.jsx)(N.E, {
                            variant: "eyebrow",
                            className: i$.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                iH(e);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(p.$, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, si.Wp)(!1);
                    },
                }),
            ],
        });
}
var iK = a(450510),
    iY = a(320681);
function iq(e) {
    let { hotspotLocation: t } = e,
        [a, n] = (0, d.yK)([iK.HP], () => [iK.HP.hasHotspot(t, !0), iK.HP.getHotspotOverride(t)]);
    return (0, r.jsx)(x.l, {
        label: t,
        errorMessage: a ? "Inactive" : void 0,
        successMessage: a ? "Active" : void 0,
        value: n,
        options: [
            { id: "none", value: void 0, label: "No Override" },
            { id: "active", value: !0, label: "Force Active" },
            { id: "inactive", value: !1, label: "Force Inactive" },
        ],
        onSelectionChange: (e) => (null != e ? (0, iK.Kl)(t, e) : (0, iK.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function iJ() {
    return (0, r.jsx)(c.Ip, {
        className: tN.nd,
        children: (0, r.jsx)(m.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: iY.IN,
            children: (0, r.jsx)(k.B, {
                gap: 20,
                children: Object.keys(iK._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, r.jsx)(iq, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var iQ = a(919523),
    iZ = a(855522),
    iX = a(37646),
    i0 = a(773669);
function i1() {
    let e = (0, d.bG)([i0.default], () => i0.default.locale),
        [t, a] = o.useState(),
        n = (0, iQ.runtimeHashMessageKey)(t ?? ""),
        l = o.useMemo(() => aU.t[n], [n]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(au.Ay, {
                children: [
                    (0, r.jsx)(au.Ay.Icon, { icon: iX.U, tooltip: "Locale" }),
                    (0, r.jsx)(au.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, r.jsxs)(nd, {
                children: [
                    (0, r.jsx)(nc, { name: "Active System", children: "@discord/intl" }),
                    (0, r.jsx)(nc, { name: "App", children: e }),
                    (0, r.jsx)(nc, { name: "System", children: aU.systemLocale }),
                    (0, r.jsx)(nc, { name: "@discord/intl", children: aU.intl.currentLocale }),
                    (0, r.jsx)(nc, { name: "common i18n", children: iZ.A.getLocale() }),
                    (0, r.jsx)(nc, { name: "Moment", children: aQ().locale() }),
                ],
            }),
            (0, r.jsxs)(au.Ay, {
                children: [
                    (0, r.jsx)(au.Ay.Icon, { icon: iX.U, tooltip: "Messages" }),
                    (0, r.jsx)(au.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(nd, {
                children: (0, r.jsx)(nc, { name: "Unique Rendered Main Messages", children: Object.keys(aU.t).length }),
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
            (0, r.jsxs)(nd, {
                children: [
                    (0, r.jsx)(nc, { name: "Hashed key", children: n }),
                    (0, r.jsx)(nc, { name: "Exists?", children: null != l ? "yes" : "no" }),
                ],
            }),
            (0, r.jsx)(a_, { data: l?.(e) }),
        ],
    });
}
var i2 = a(76335);
function i8() {
    let { node: e } = (0, B.Ay)(i2.F, "");
    return (0, r.jsx)(c.Ip, {
        className: tN.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)(U.A, { node: e }, e.key),
        }),
    });
}
var i9 = a(361158),
    i3 = a(80556),
    i7 = a(907135),
    i4 = a(665095),
    i6 = a(87404);
function i5() {
    return (0, r.jsx)(c.Ip, {
        className: tN.nd,
        children: (0, r.jsxs)("div", {
            className: se.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: se.uW,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Verification Layer" }),
                        (0, r.jsx)("div", {
                            className: se.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: () => {
                                    (0, i9.B8)(() => (0, r.jsx)(i4.A, {}), { layerKey: i6._s, Layer: i3.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: se.uW,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Safety Flow" }),
                        (0, r.jsx)("div", {
                            className: se.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: () => {
                                    (0, i9.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, r.jsx)(i7.A, { onClose: t });
                                        },
                                        { layerKey: i6._s, Layer: i3.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: se.uW,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Layer Controls" }),
                        (0, r.jsx)("div", {
                            className: se.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: () => {
                                    i9.xr.setState({ fullScreenLayers: [] });
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
var re = a(687813),
    rt = a(604121);
let ra = {
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
        a.e("61309").then(a.t.bind(a, 433356, 17)),
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
        a.e("12250").then(a.t.bind(a, 331617, 19)),
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
        a.e("8891").then(a.t.bind(a, 778422, 19)),
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
        a.e("74410").then(a.t.bind(a, 714316, 19)),
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
        a.e("5560").then(a.t.bind(a, 157745, 19)),
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
function rn(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let n = new Uint8Array(e);
                    re.$1(n, (e, n) => {
                        null != e && a(e);
                        let l = Object.keys(n).reduce((e, t) => ({ ...e, [t]: JSON.parse(re.he(n[t])) }), {}),
                            s = l["manifest.json"];
                        t(l[`animations/${s.animations[0].id}.json`]);
                    });
                }),
        );
}
function rl() {
    let [e, t] = o.useState(void 0),
        [a, n] = o.useState(400),
        [l, s] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)(k.B, {
            gap: 24,
            children: [
                (0, r.jsx)(lp.Z, {
                    options: Object.keys(ra).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)(k.B, {
                    gap: 8,
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(g.k, { value: a.toString(), onChange: (e) => n(Number(e)), label: "Width" }),
                        (0, r.jsx)(g.k, { value: l.toString(), onChange: (e) => s(Number(e)), label: "Height" }),
                    ],
                }),
                (0, r.jsx)(p.$, {
                    size: "sm",
                    disabled: null == e,
                    onClick: async () => {
                        if (null == e) return;
                        let t = ra[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(rn).then(eR().cloneDeep)
                                            : await t().then((e) => eR().cloneDeep(e.default)),
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
                            rt.a,
                            {
                                importData: () => {
                                    let t = ra[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(rn).then(eR().cloneDeep)
                                        : t().then((e) => eR().cloneDeep(e.default));
                                },
                            },
                            e,
                        ),
                    }),
            ],
        }),
    });
}
var rs = a(442433),
    ri = a(395671);
let rr = {
        ClipsContextMenu: async () => {
            let { default: e } = await a.e("40638").then(a.bind(a, 562733));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await a.e("32986").then(a.bind(a, 728033)),
                t = new ri.kJ({
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
            return () => (0, r.jsx)(e, { application: t, channelId: "987654321", onClose: rs.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await a.e("10758").then(a.bind(a, 455557)),
                t = Object.values(aR.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("49681"),
                    a.e("96382"),
                    a.e("20044"),
                    a.e("28136"),
                    a.e("22547"),
                    a.e("68587"),
                    a.e("42749"),
                    a.e("56026"),
                    a.e("16301"),
                    a.e("22191"),
                    a.e("46411"),
                    a.e("25961"),
                    a.e("13848"),
                    a.e("62890"),
                    a.e("46291"),
                    a.e("41068"),
                    a.e("32347"),
                    a.e("8458"),
                    a.e("15666"),
                    a.e("11810"),
                    a.e("95765"),
                    a.e("31742"),
                    a.e("13337"),
                    a.e("65338"),
                    a.e("58484"),
                ]).then(a.bind(a, 860417)),
                t = Object.values(aR.A.getGuilds())[0];
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
            let { default: e } = await a.e("71586").then(a.bind(a, 410681));
            return (t) => (0, r.jsx)(e, { ...t, onClose: rs.Z_ });
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
                        console.log("Leave role clicked"), (0, rs.Z_)();
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await a.e("89346").then(a.bind(a, 949881)),
                { ContentInventoryEntryType: t } = await Promise.resolve().then(a.bind(a, 681154)),
                { ContentInventoryAuthorType: n } = await Promise.resolve().then(a.bind(a, 6161)),
                l = F.default.getCurrentUser(),
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
            let { AddQuestionsContextMenu: e } = await Promise.all([a.e("11810"), a.e("13578")]).then(
                    a.bind(a, 892921),
                ),
                t = Object.values(aR.A.getGuilds())[0];
            return null == t
                ? () => null
                : (a) =>
                      (0, r.jsx)(e, {
                          ...a,
                          addFormField: (e) => {
                              console.log("Add form field:", e), (0, rs.Z_)();
                          },
                          guild: t,
                          allowTerms: !0,
                      });
        },
        ChannelListThreadContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("94989"), a.e("84615")]).then(a.bind(a, 612826)),
                t = aR.A.getGuilds(),
                n = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(tZ.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = tZ.A.getAllThreadsForParent(t.id);
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
                t = Object.values(aR.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rs.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await a.e("14878").then(a.bind(a, 316173)),
                t = Object.values(aR.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rs.Z_ });
        },
    },
    ro = {
        GuildShopSortOptions: o.lazy(async () => {
            let { default: e } = await a.e("50974").then(a.bind(a, 324269)),
                { default: t } = await a.e("55197").then(a.bind(a, 558060));
            return { default: () => (0, r.jsx)(t, { defaultSortOption: void 0, children: (0, r.jsx)(e, {}) }) };
        }),
    };
function rd() {
    let e = o.useMemo(
            () =>
                Object.keys(rr)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = o.useMemo(
            () =>
                Object.keys(ro)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(
            (e) => {
                null != a && (0, rs.L3)(e, rr[a]);
            },
            [a],
        ),
        d = null != l ? ro[l] : null;
    return (0, r.jsx)(c.Ip, {
        className: tN.nd,
        children: (0, r.jsxs)(k.B, {
            className: se.l$,
            gap: 16,
            children: [
                (0, r.jsxs)(k.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(N.E, { variant: "eyebrow", children: "Context Menus" }),
                        (0, r.jsx)(N.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a menu and click Open to trigger it as a context menu at the button position.",
                        }),
                    ],
                }),
                (0, r.jsxs)(k.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(lp.Z, {
                            label: "Open a Context Menu",
                            placeholder: "Select a menu",
                            options: e,
                            value: a,
                            onSelectionChange: n,
                            selectionMode: "single",
                        }),
                        (0, r.jsx)(p.$, { variant: "primary", text: "Open", disabled: null == a, onClick: i }),
                    ],
                }),
                (0, r.jsxs)(k.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(N.E, { variant: "eyebrow", children: "Popout Menus" }),
                        (0, r.jsx)(N.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a popout menu to render it. Click the rendered button to open the popout.",
                        }),
                    ],
                }),
                (0, r.jsx)(k.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: (0, r.jsx)(lp.Z, {
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
                        fallback: (0, r.jsx)(N.E, {
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
var rc = a(253506),
    ru = a(665260),
    rm = a(97808),
    rh = a(778712),
    rp = a(308528),
    rx = a(571694),
    rg = a(704844),
    rv = a(567761),
    rb = a(716371),
    r_ = a(48182);
function rf() {
    let e = (0, d.yK)([rv.default], () => rv.default.getSortedChannels()[1]),
        [t, a] = o.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: n, options: l } = (0, d.cf)([tZ.A, F.default, tX.A], () => ({
            selectedChannel: tZ.A.getChannel(t),
            options: e.map((e) => {
                let t = tZ.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, tQ.m1)(t, F.default, tX.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, r.jsx)(rm.eu, { src: (0, rx.Y)(t), "aria-hidden": !0, size: rh._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        s = o.useCallback(() => {
            if (null == n || !n.isPrivate()) return;
            let e = (0, ru.PQ)(n.recipientFlags ?? 0, rc.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            rg.A.updatePrivateChannelRecipientFlags(n.id, e);
        }, [n]),
        i = !!n?.isPrivate() && (0, ru.Lt)(n.recipientFlags ?? 0, rc.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: r_.gs,
        children: [
            (0, r.jsx)(lp.Z, {
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
                text: i ? "Clear NUX Flag" : "Set NUX Flag",
                onClick: s,
                disabled: null == t,
            }),
        ],
    });
}
function rj() {
    let e = o.useCallback(() => {
        rp.A.openPrivateChannel({ recipientIds: [rb.K] });
    }, []);
    return (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function ry() {
    let e = (0, d.bG)([ac.Ay], () => ac.Ay.allByCategory(ac.xW.MESSAGING), [], d.My).map((e) => {
        let [t, a, { label: n }] = e;
        return (0, r.jsx)(b.d, { label: n, description: t, checked: a, onChange: (e) => sc(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: E()(tN.nd, r_.nd),
        children: [
            e,
            (0, r.jsx)("div", { className: r_.yF }),
            (0, r.jsx)(rf, {}),
            (0, r.jsx)("div", { className: r_.yF }),
            (0, r.jsx)(rj, {}),
        ],
    });
}
var rC = a(205693),
    rE = a(772707),
    rS = a(150934),
    rN = a(598653),
    rA = a(166403),
    rk = a(625494),
    rD = a(204925);
let rT = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e("29232").then(a.bind(a, 180275));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: aU.intl.string(aU.t.ZLRYGU),
                confirmButtonText: aU.intl.string(aU.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e("19840").then(a.bind(a, 79779));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: aU.intl.string(aU.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: aU.intl.string(aU.t["13ofGu"]),
                impression: { impressionName: sR.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await a.e("18467").then(a.bind(a, 297102));
        return (t) => (0, r.jsx)(e, { ...t, entryPoint: aK.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e("10136"), a.e("53333")]).then(a.bind(a, 776971));
        return (t) => (0, r.jsx)(e, { ...t, source: rD.w_.NSFW_SERVER });
    },
    ExistingUserAgeGateUnderage: async () => {
        let { default: e } = await a.e("80959").then(a.bind(a, 784578));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NewUserAgeGate: async () => {
        let { default: e } = await Promise.all([a.e("1143"), a.e("20969")]).then(a.bind(a, 284778));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    AutomatedUnderageAppealModal: async () => {
        let { default: e } = await a.e("93530").then(a.bind(a, 244321));
        return (t) => (0, r.jsx)(e, { ...t, classificationId: "123" });
    },
    AutomodRaidResolveModal: async () => {
        let { default: e } = await a.e("29514").then(a.bind(a, 580812));
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
        return (t) => (0, r.jsx)(e, { ...t, mediaEngineContext: rC.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, r.jsx)(rE.k, {
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
        let { default: e } = await a.e("82318").then(a.bind(a, 387101)),
            { OverlayToggledClientSettingType: t } = await Promise.resolve().then(a.bind(a, 810412));
        return (a) => (0, r.jsx)(e, { ...a, clientSettingType: t.LEGACY_GAME, gameId: "123456789" });
    },
    PremiumSubscriptionPauseModal: async () => {
        let { PremiumSubscriptionPauseModalSelect: e } = await a.e("80347").then(a.bind(a, 318998)),
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
        let { default: e } = await Promise.all([a.e("54569"), a.e("33342")]).then(a.bind(a, 251632)),
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
        let { default: e } = await a.e("60416").then(a.bind(a, 14860)),
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
        let { default: e } = await a.e("27495").then(a.bind(a, 651930));
        return (t) => (0, r.jsx)(e, { ...t, detectedActivity: { application_id: "123456789", name: "Test Game" } });
    },
    AppealIngestionModal: async () => {
        let { default: e } = await Promise.all([a.e("51471"), a.e("4270")]).then(a.bind(a, 550560));
        return (t) => (0, r.jsx)(e, { ...t, classificationId: "123456789" });
    },
    CreateTagModal: async () => {
        let { default: e } = await a.e("47326").then(a.bind(a, 950989));
        return (t) => (0, r.jsx)(e, { ...t, channelId: "123456789", guildId: "987654321" });
    },
    CreateTagModalEdit: async () => {
        let { default: e } = await a.e("47326").then(a.bind(a, 950989)),
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
        let { default: e } = await a.e("10919").then(a.bind(a, 556506));
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
        let { default: e } = await a.e("10919").then(a.bind(a, 556506));
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
        let { default: e } = await a.e("10919").then(a.bind(a, 556506));
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
            } = await a.e("10398").then(a.bind(a, 844616)),
            { DisableCommunicationDuration: i, getFriendlyDurationString: o } = await Promise.resolve().then(
                a.bind(a, 200700),
            ),
            d = await Promise.resolve().then(a.t.bind(a, 64700, 19)),
            c = "TestUser";
        function u(a) {
            let [u, m] = d.useState(i.DURATION_60_SEC),
                [h, p] = d.useState(""),
                [x, g] = d.useState(!1),
                [v, b] = d.useState(!1),
                _ = [
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
                                children: _.map((t) =>
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
        let { Button: e, Text: t, Heading: n, Checkbox: l } = await a.e("10398").then(a.bind(a, 844616)),
            s = await Promise.resolve().then(a.t.bind(a, 64700, 19)),
            i = "Level 3 Server Boost",
            o = 200,
            d = 60,
            c = 8;
        function u(a) {
            let [u, m] = s.useState(!1),
                [h, p] = s.useState(!1),
                x = s.useCallback(async () => {
                    p(!0),
                        console.log("GuildPowerupDeactivateModal: Deactivating powerup", {
                            powerup: i,
                            guildId: "123456789",
                        }),
                        await new Promise((e) => setTimeout(e, 2e3)),
                        p(!1),
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
                                        children: ["• ", o, " emoji slots"],
                                    }),
                                    (0, r.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["• ", d, " sticker slots"],
                                    }),
                                    (0, r.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["• ", c, " sound slots"],
                                    }),
                                    (0, r.jsx)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: "• Custom server banner",
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
                                    (0, r.jsx)("span", { role: "img", "aria-label": "Warning", children: "⚠️" }),
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
        let { default: e } = await a.e("81153").then(a.bind(a, 890904));
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
        let { default: e } = await Promise.all([a.e("74832"), a.e("70941")]).then(a.bind(a, 709779));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                onClose: async () => {
                    console.log("EnableCommunityModal: Closed"), await t.onClose();
                },
            });
    },
    DeprivateModal: async () => {
        let e = (await a.e("54857").then(a.bind(a, 147696))).default;
        return (t) => (0, r.jsx)(e, { ...t, guildId: "123456789012345678", startingChannelId: "987654321098765432" });
    },
    CameraPreviewModal: async () => {
        let { default: e } = await a.e("10534").then(a.bind(a, 308229));
        return (t) => (0, r.jsx)(e, { ...t, videoEnabled: !1, onEnable: () => console.log("Camera enabled") });
    },
    CameraPreviewModalWithVideo: async () => {
        let { default: e } = await a.e("10534").then(a.bind(a, 308229));
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
        let { default: e } = await a.e("59839").then(a.bind(a, 889186));
        return (t) => (0, r.jsx)(e, { ...t, parentId: null });
    },
    ActivityShareMomentModal: async () => {
        let { default: e } = await Promise.all([a.e("96758"), a.e("50178")]).then(a.bind(a, 190930));
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
        let { default: e } = await a.e("24848").then(a.bind(a, 354643));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                onClose: () => (console.log("OptInReorderAttemptModal: Modal closed"), t.onClose()),
            });
    },
    GuildAntiRaidReportModal: async () => {
        let { default: e } = await a.e("64499").then(a.bind(a, 296222));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildAntiRaidReportModal: Modal closed"), t.onClose()),
            });
    },
    ConsentCheckBoxModal: async () => {
        let { ConfirmModal: e } = await a.e("4823").then(a.bind(a, 158954)),
            { Text: t, Heading: n } = await a.e("10398").then(a.bind(a, 844616)),
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
                                (0, r.jsx)(rS.S, {
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
                                (0, r.jsx)(rS.S, {
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
        let { default: e } = await a.e("46313").then(a.bind(a, 336496));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildRaidLockdownFeedbackModal: Modal closed"), t.onClose()),
            });
    },
    GuildVerificationLevelModal: async () => {
        let { default: e } = await a.e("70232").then(a.bind(a, 313003)),
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
        let { default: e } = await a.e("70232").then(a.bind(a, 313003)),
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
        let { EmojiAddModal: e } = await a.e("90410").then(a.bind(a, 126033));
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
        let e = F.default.getUser("12345"),
            t = F.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await a.e("31385").then(a.bind(a, 58144));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = F.default.getUser("12345"),
            t = F.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await a.e("84811").then(a.bind(a, 389094));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = F.default.getUser("12345"),
            t = F.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await a.e("17219").then(a.bind(a, 187278));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = F.default.getUser("12345"),
            t = F.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await a.e("43139").then(a.bind(a, 179950));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([a.e("53242"), a.e("72875")]).then(a.bind(a, 320742));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await a.e("7960").then(a.bind(a, 785606)),
            t = rA.A.getPremiumGroupSubscription();
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, subscription: t });
    },
    PremiumGroupAcceptInviteModal: async () => {
        let { default: e } = await a.e("99910").then(a.bind(a, 826181));
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
        let { default: e } = await a.e("18469").then(a.bind(a, 534340));
        return (t) => (0, r.jsx)(e, { ...t, url: "https://example-phishing-site.com/malicious-page" });
    },
    DmSettingsUpsellModal: async () => {
        let { default: e } = await a.e("62684").then(a.bind(a, 228855)),
            t = Object.keys(aR.A.getGuilds())[0];
        return (a) => (0, r.jsx)(e, { ...a, guildId: t });
    },
    LinkNotDiscordModal: async () => {
        let { default: e } = await a.e("98597").then(a.bind(a, 696452));
        return (t) => (0, r.jsx)(e, { ...t, url: "https://external-website.com/some-page" });
    },
    UrgentMessageModal: async () => {
        let { default: e } = await a.e("36724").then(a.bind(a, 531519));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    UserAgreementsModal: async () => {
        let { default: e } = await a.e("22220").then(a.bind(a, 639719));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    DisableRiskyPermsModal: async () => {
        let { default: e } = await a.e("71905").then(a.bind(a, 868952)),
            t = Object.values(aR.A.getGuilds())[0];
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await a.e("73152").then(a.bind(a, 516259));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([a.e("47886"), a.e("55540"), a.e("4366")]).then(a.bind(a, 57375));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupSubscribeModal: async () => {
        let { default: e } = await a.e("24833").then(a.bind(a, 526710));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NewUserOnboarding: async () => {
        let { default: e } = await Promise.all([a.e("46881"), a.e("19183"), a.e("86996")]).then(a.bind(a, 923314));
        return (t) => (0, r.jsx)(e, { ...t });
    },
};
function rI() {
    let e = o.useMemo(
            () =>
                Object.keys(rT)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(c.Ip, {
        className: tN.nd,
        children: (0, r.jsxs)("div", {
            className: se.l$,
            children: [
                (0, r.jsx)("section", {
                    className: se.uW,
                    children: (0, r.jsxs)(k.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(lp.Z, {
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
                                onClick: () => null != t && (0, eA.openModalLazy)(rT[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: se.uW,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: se.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, rN.o)(!0), rk._.dispatch(H.jej.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var rw = a(933832),
    rO = a(472229),
    rR = a(694080),
    rL = a(354670),
    rM = a(927578);
let rP = async () => {
        try {
            let { body: e } = await nw.Bo.get({ url: H.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
            return e;
        } catch (e) {
            return [];
        }
    },
    rU = async (e, t) => {
        try {
            await nw.Bo.post({ url: H.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, rR._D)();
        }
    },
    rB = async (e, t) => {
        try {
            await nw.Bo.del({ url: H.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, rR._D)();
        }
    },
    rG = async () => {
        try {
            let { body: e } = await nw.Bo.get({ url: H.Rsh.USER_OFFERS, rejectWithError: !0 });
            return e;
        } catch (e) {
            return { trial: [], discount: [] };
        }
    },
    rF = async () => {
        try {
            await nw.Bo.del({ url: H.Rsh.USER_OFFERS, rejectWithError: !0 });
        } catch {
        } finally {
            await rL.A.forceReset(), await (0, rR._D)();
        }
    },
    rV = async (e) => {
        await nw.Bo.post({ url: H.Rsh.CREATE_REVERSE_TRIAL, body: { ends_at: e }, rejectWithError: !0 });
    };
function r$(e) {
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
    let { id: p, expires_at: x, redeemed_at: g, trial_id: v, subscription_trial: b, referrer: _ } = t,
        f =
            a.find((e) => {
                let { value: t } = e;
                return t === v;
            })?.label ?? "Unknown";
    null != _ && (f = `${f} from @${_.username}`);
    let j = null != x,
        y = null != x && new Date(x).getTime() < Date.now(),
        C = b?.sku_id === l8.pe.TIER_0,
        A = async () => {
            u(!0), j ? await k({ expiresAt: null }) : await (0, rR.u1)(t), n(), u(!1);
        },
        k = async (e) => {
            u(!0);
            try {
                await nw.Bo.patch({
                    url: H.Rsh.UPDATE_USER_OFFER(p, "trial"),
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
    let D = "Active";
    return (
        j && (D = "Acked"),
        y && (D = "Expired"),
        (0, r.jsxs)("div", {
            className: E()(se.Nr, C ? se.Qf : se.C1),
            children: [
                (0, r.jsx)("div", {
                    className: E()(se.nM, se.S7),
                    children: (0, r.jsx)(T.D, { variant: "heading-lg/semibold", color: "always-white", children: f }),
                }),
                (0, r.jsxs)(S.D, {
                    className: E()(se.nM, se.QB),
                    onClick: () => {
                        (0, a4.C)(p, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(N.E, { variant: "eyebrow", color: "always-white", children: ["Offer: ", p] }),
                        l
                            ? (0, r.jsx)(rw.A, { size: "md", color: "currentColor", className: se.Kk })
                            : (0, r.jsx)(aX.T, { size: "xs", color: "currentColor", className: se.Kk }),
                    ],
                }),
                (0, r.jsxs)(S.D, {
                    className: E()(se.nM, se.QB),
                    onClick: () => {
                        (0, a4.C)(v, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(N.E, { variant: "eyebrow", color: "always-white", children: ["Trial: ", v] }),
                        i
                            ? (0, r.jsx)(rw.A, { size: "md", color: "currentColor", className: se.Kk })
                            : (0, r.jsx)(aX.T, { size: "xs", color: "currentColor", className: se.Kk }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: se.nM,
                    children: (0, r.jsxs)(N.E, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, rM.re)({
                                intervalType: b?.interval ?? l8.WT.MONTH,
                                intervalCount: b?.interval_count ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: se.nM,
                    children: [
                        (0, r.jsxs)(N.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, rO.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, a6.Xm)(x),
                            onChange: (e) => {
                                k({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: se.nM,
                    children: [
                        (0, r.jsx)(N.E, { variant: "eyebrow", color: "always-white", children: "Referrer ID:" }),
                        (0, r.jsx)("input", {
                            type: "text",
                            value: _?.id ?? "",
                            onChange: (e) => k({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: se.fC,
                    children: [
                        (0, r.jsx)(S.D, {
                            onClick: A,
                            className: E()(se.qS, se.vk, { [se.R1]: j, [se._7]: y }),
                            children: (0, r.jsx)(N.E, {
                                variant: "eyebrow",
                                color: "Acked" === D ? void 0 : "always-white",
                                children: D,
                            }),
                        }),
                        null != g &&
                            (0, r.jsx)("div", {
                                className: E()(se.qS, se.k3),
                                children: (0, r.jsx)(N.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Redeemed",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(S.D, {
                    onClick: async () => {
                        u(!0), await rB(p, "trial"), n(), u(!1);
                    },
                    children: (0, r.jsx)(a2.u, { size: "md", color: "currentColor", className: E()(se.Kk, se.IT) }),
                }),
                (0, r.jsx)("div", { className: E()(se.g4, { [se.VP]: c || m }), children: (0, r.jsx)(eZ.y, {}) }),
            ],
        })
    );
}
function rW(e) {
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
    let { id: p, expires_at: x, applied_at: g, discount_id: v, discount: b } = t,
        _ =
            a.find((e) => {
                let { value: t } = e;
                return t === v;
            })?.label ?? "Unknown",
        f = null != x,
        j = null != x && new Date(x).getTime() < Date.now(),
        y = async () => {
            u(!0), f ? await C({ expiresAt: null }) : await (0, rR.u1)(void 0, t), n(), u(!1);
        },
        C = async (e) => {
            let { expiresAt: t } = e;
            u(!0);
            try {
                await nw.Bo.patch({
                    url: H.Rsh.UPDATE_USER_OFFER(p, "discount"),
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
    let A = "Active";
    return (
        j && (A = "Expired"),
        f && (A = "Acked"),
        (0, r.jsxs)("div", {
            className: E()(se.Nr, se.id),
            children: [
                (0, r.jsx)("div", {
                    className: E()(se.nM, se.S7),
                    children: (0, r.jsx)(T.D, { variant: "heading-lg/semibold", color: "text-default", children: _ }),
                }),
                (0, r.jsxs)(S.D, {
                    className: E()(se.nM, se.QB),
                    onClick: () => {
                        (0, a4.C)(p, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(N.E, { variant: "eyebrow", color: "text-default", children: ["Offer: ", p] }),
                        l
                            ? (0, r.jsx)(rw.A, { size: "md", color: "currentColor", className: E()(se.Kk, se.mK) })
                            : (0, r.jsx)(aX.T, { size: "xs", color: "currentColor", className: se.Kk }),
                    ],
                }),
                (0, r.jsxs)(S.D, {
                    className: E()(se.nM, se.QB),
                    onClick: () => {
                        (0, a4.C)(v, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(N.E, { variant: "eyebrow", color: "text-default", children: ["Discount: ", v] }),
                        i
                            ? (0, r.jsx)(rw.A, { size: "md", color: "currentColor", className: E()(se.Kk, se.mK) })
                            : (0, r.jsx)(aX.T, { size: "xs", color: "currentColor", className: se.Kk }),
                    ],
                }),
                b?.amount != null &&
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)(N.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [b.amount, "% off"],
                        }),
                    }),
                (0, r.jsxs)("div", {
                    className: se.nM,
                    children: [
                        (0, r.jsxs)(N.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, rO.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, a6.Xm)(x),
                            onChange: (e) =>
                                C({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: se.fC,
                    children: [
                        (0, r.jsx)(S.D, {
                            onClick: y,
                            className: E()(se.qS, se.vk, { [se.R1]: f, [se._7]: j }),
                            children: (0, r.jsx)(N.E, {
                                variant: "eyebrow",
                                color: "Acked" === A ? void 0 : "always-white",
                                children: A,
                            }),
                        }),
                        null != g &&
                            (0, r.jsx)("div", {
                                className: E()(se.qS, se.k3),
                                children: (0, r.jsx)(N.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(S.D, {
                    className: se.aR,
                    onClick: async () => {
                        u(!0), await rB(p, "discount"), n(), u(!1);
                    },
                    children: (0, r.jsx)(a2.u, { size: "md", color: "currentColor", className: E()(se.Kk, se.fy) }),
                }),
                (0, r.jsx)("div", { className: E()(se.g4, { [se.VP]: c || m }), children: (0, r.jsx)(eZ.y, {}) }),
            ],
        })
    );
}
function rH() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState([]),
        [l, s] = o.useState(),
        [i, d] = o.useState(),
        [u, m] = o.useState([]),
        [h, g] = o.useState([]),
        [v, b] = o.useState(!0),
        [_, f] = o.useState(10080),
        [j, y] = o.useState([]),
        { entitlements: C, deleteFractionalPremium: E, refreshEntitlementList: S } = l6();
    o.useEffect(() => {
        S();
    }, [S]),
        o.useEffect(() => {
            y(C.filter((e) => e.sourceType === H.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [C]),
        o.useEffect(() => {
            (0 === e.length || 0 === a.length || v) &&
                rP().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        r = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    t(a), n(r), null == l && s(a[0].value), null == i && d(r[0].value);
                });
        }, [e, a, l, i, v]),
        o.useEffect(() => {
            v &&
                (b(!1),
                rL.A.forceReset(),
                (0, rR._D)(),
                rG().then((e) => {
                    m(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        g(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [v]);
    let A = async () => {
            null != l && (await rU(l, "trial"), b(!0));
        },
        k = async () => {
            null != i && (await rU(i, "discount"), b(!0));
        },
        D = async () => {
            await rF(), b(!0);
        },
        I = async () => {
            let e = new Date(Date.now() + 60 * _ * 1e3).toISOString();
            await rV(e), S();
        };
    return (0, r.jsx)(c.Ip, {
        className: tN.nd,
        children: (0, r.jsxs)("div", {
            className: se.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: se.uW,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Utils" }),
                        (0, r.jsxs)("div", {
                            className: se.Uo,
                            children: [
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear all User Offers",
                                    onClick: D,
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Mobile Trials DismissibleContent",
                                    onClick: () => (0, ls.xB)(nK.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, ls._N)(nK.M.NAGBAR_NOTICE_OFFER_EXPIRING),
                                }),
                                (0, r.jsx)(p.$, {
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
                    className: se.uW,
                    children: (0, r.jsxs)("div", {
                        className: se.bd,
                        children: [
                            (0, r.jsx)(x.l, {
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
                            (0, r.jsx)(p.$, { variant: "primary", text: "Create", onClick: A }),
                        ],
                    }),
                }),
                (0, r.jsx)("section", {
                    className: se.uW,
                    children: (0, r.jsxs)("div", {
                        className: se.bd,
                        children: [
                            (0, r.jsx)(x.l, {
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
                            (0, r.jsx)(p.$, { variant: "primary", text: "Create", onClick: k }),
                        ],
                    }),
                }),
                u.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: se.uW,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Existing Trial Offers" }),
                            u.map((t) =>
                                (0, r.jsx)(r$, { offer: t, offerOptions: e, forceRefetch: () => b(!0) }, t.id),
                            ),
                        ],
                    }),
                h.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: se.uW,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Existing Discount Offers" }),
                            h.map((e) =>
                                (0, r.jsx)(rW, { offer: e, offerOptions: a, forceRefetch: () => b(!0) }, e.id),
                            ),
                        ],
                    }),
                (0, r.jsx)("section", {
                    className: se.uW,
                    children: (0, r.jsxs)("div", {
                        className: se.bd,
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Create a Reverse Trial Entitlement",
                                options: [
                                    { id: "5min", label: "5 minutes", value: 5 },
                                    { id: "1hour", label: "1 hour", value: 60 },
                                    { id: "1day", label: "1 day", value: 1440 },
                                    { id: "1week", label: "1 week", value: 10080 },
                                ],
                                value: _,
                                placeholder: "Reverse Trial Length",
                                onSelectionChange: f,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(p.$, { variant: "primary", text: "Create", onClick: I }),
                        ],
                    }),
                }),
                j.length > 0 &&
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(N.E, {
                                style: { marginTop: "15px" },
                                variant: "text-md/bold",
                                children: "Active reverse trial",
                            }),
                            (0, r.jsx)("div", {
                                children: j.map((e) =>
                                    (0, r.jsx)(sa, { entitlement: e, active: !0, onDelete: () => E(e.id) }, e.id),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var rz = a(935462),
    rK = a(260598),
    rY = a(93688),
    rq = a(717400),
    rJ = a(676955),
    rQ = a(31300),
    rZ = a(500060),
    rX = a(391973),
    r0 = a(684013),
    r1 = a(765671),
    r2 = a(235986),
    r8 = a(742589),
    r9 = a(41984),
    r3 = a(181435),
    r7 = a(435736),
    r4 = a(833551),
    r6 = a(515183),
    r5 = a(489277),
    oe = a(127242),
    ot = a(869014),
    oa = a(528772),
    on = a(38502),
    ol = a(532624),
    os = a(773371),
    oi = a(996439),
    or = a(350535),
    oo = a(9302),
    od = a(644434),
    oc = a(618137);
let ou = {
        [H.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: H.uss.CLICK_ZONE_DEBUG,
            id: (0, eh.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...on.A.getWidgetDefaultSettings(H.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [H.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: H.uss.PERFORMANCE_DEBUG,
            id: (0, eh.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...on.A.getWidgetDefaultSettings(H.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    om = {};
function oh(e) {
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
        (0, r.jsxs)(aZ.$n, {
            look: aZ.$n.Looks.LINK,
            color: aZ.$n.Colors.LINK,
            size: aZ.$n.Sizes.MIN,
            onClick: function () {
                (0, a4.C)(t, () => n(!0));
            },
            className: oc.DT,
            children: ["Application Id: ", t, " ", a ? aU.intl.string(aU.t.t5VZ88) : null],
        })
    );
}
let op = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, d.bG)([aT.Ay], () => aT.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            n = (0, d.bG)([aM.A], () => aM.A.getGameForPID(t.pid)),
            l = (0, d.bG)([aT.Ay], () => (null == a ? null : aT.Ay.getGameOverlayStatus(a)));
        return (0, r.jsxs)("div", {
            className: oc.st,
            children: [
                (0, r.jsx)(N.E, { variant: "text-md/bold", color: "text-strong", children: t.gameName }),
                (0, r.jsx)(N.E, { variant: "text-sm/bold", color: "text-subtle", children: t.pid }),
                (0, r.jsx)(N.E, { variant: "text-sm/normal", color: "text-subtle", children: a?.exeName }),
                (0, r.jsxs)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["isLauncher: ", a?.isLauncher ? "Yes" : "No"],
                }),
                null != t.applicationId &&
                    (0, r.jsx)(N.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: (0, r.jsx)(oh, { id: t.applicationId }),
                    }),
                (0, r.jsxs)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, r6.wR)(t.fullscreenType)],
                }),
                (0, r.jsxs)(N.E, { variant: "text-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, r.jsxs)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, r.jsxs)("div", {
                    className: oc.st,
                    children: [
                        (0, r.jsxs)(N.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["source: ", t.source],
                        }),
                        (0, r.jsxs)(N.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(N.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(N.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["overlayMethod: ", (0, r6.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != l &&
                    (0, r.jsxs)("div", {
                        className: oc.st,
                        children: [
                            (0, r.jsxs)(N.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", l.source],
                            }),
                            (0, r.jsxs)(N.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", l.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(N.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", l.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(N.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, r6.gK)(l.overlayMethod)],
                            }),
                        ],
                    }),
                (0, r.jsxs)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hidden: ", a?.hidden ? "Yes" : "No"],
                }),
                (0, r.jsxs)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hook: ", n?.hook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", n?.overlay ? "Yes" : "No"],
                }),
                (0, r.jsxs)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlayCompatibilityHook: ", n?.overlayCompatibilityHook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["supportsOutOfProcessOverlay: ", n?.supportsOutOfProcessOverlay ? "Yes" : "No"],
                }),
            ],
        });
    }),
    ox = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.cf)([os.default], () => os.default.getOverlayPIDStatuses()),
            n = (0, d.cf)([r4.default], () => r4.default.getTrackedGames()),
            l = (0, d.bG)([os.default], () => os.default.isInputLocked(t), [t]),
            s = (0, d.bG)([os.default], () => os.default.DEV_isInputLockedV3(t), [t]),
            i = (0, d.bG)([os.default], () => os.default.DEV_isInputLocked(t), [t]),
            o = (0, d.bG)([os.default], () => os.default.isReady(t), [t]);
        return (0, r.jsxs)("div", {
            className: oc.st,
            children: [
                (0, r.jsx)(N.E, { variant: "text-md/semibold", color: "text-strong", children: `${t}` }),
                (0, r.jsxs)(N.E, {
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
                (0, r.jsxs)(N.E, {
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
                (0, r.jsxs)(N.E, {
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
                (0, r.jsxs)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["Bridge Status: ", a.get(Number(t))],
                }),
                (0, r.jsxs)(N.E, { variant: "text-sm/normal", color: "text-strong", children: ["isInputLocked: ", l] }),
                (0, r.jsxs)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV3: ", s],
                }),
                (0, r.jsxs)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV2: ", i],
                }),
                (0, r.jsxs)(N.E, { variant: "text-sm/normal", color: "text-strong", children: ["isReady: ", o] }),
            ],
        });
    });
function og(e) {
    let t,
        a = ((t = Object.values((0, d.yK)([on.A], () => on.A.getWidgetsForLayout(od.G)))), t.find((t) => t.type === e));
    return [
        a,
        () => {
            if (null != a) (0, rX.uv)(a.id);
            else {
                let t = ou[e];
                if (null == t) return;
                let a = t(od.G);
                (0, rX.jn)(a);
            }
        },
    ];
}
function ov(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, a6.i$)(aQ()(e), "h:mm:ss.SSS");
}
let ob = o.memo(function (e) {
    let { pid: t, ...a } = e,
        n = (0, d.bG)([r4.default], () => {
            if (null == t) return "Unknown";
            let e = r4.default.getTrackedGameByPid(t)?.gameName;
            return null != e ? ((om[t] = e), e) : (om[t] ?? "Unknown");
        }, [t]);
    return (0, r.jsx)(N.E, { ...a, variant: "text-md/semibold", color: "text-strong", children: n });
});
function o_() {
    let e = (0, d.bG)([oe.A], () => oe.A.hasRenderDebugMode(r9.x7.TrackFocusPIDs)),
        t = (0, d.yK)([r4.default], () => r4.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, r.jsxs)("div", {
        className: oc.st,
        children: [
            (0, r.jsxs)("div", {
                className: oc.Iv,
                children: [
                    (0, r.jsx)(b.d, {
                        checked: e,
                        onChange: () =>
                            void r0.A.setRenderDebugMode(
                                !oe.A.hasRenderDebugMode(r9.x7.TrackFocusPIDs),
                                r9.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, r.jsx)(S.D, {
                        className: oc.LL,
                        onClick: () => r0.A.clearTrackedPids(),
                        children: (0, r.jsx)(a2.u, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(c.Ip, {
                className: E()(oc.st, oc.XG),
                children: [
                    0 === t.length &&
                        (0, r.jsx)(N.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, a, n] = e;
                        return (0, r.jsx)(
                            o.Fragment,
                            {
                                children: (0, r.jsx)(lD.m, {
                                    position: "left",
                                    text: n === r9.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(N.E, {
                                            variant: "text-sm/medium",
                                            color: n === r9.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, r.jsx)(ob, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                ov(t),
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
let of = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.bG)([r4.default, aT.Ay], () => {
                if (null == t) return null;
                let e = r4.default.getTrackedGameByPid(t)?.fullscreenType;
                if (null != e) return e;
                let a = aT.Ay.getGameOrTransformedSubgameForPID(t);
                return a?.fullscreenType ?? lv.aI.UNKNOWN;
            }, [t]);
        return (0, r.jsxs)(N.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, r6.wR)(a) : "Unknown"],
        });
    }),
    oj = o.memo(function () {
        let e = (0, d.cf)([r4.default], () => r4.default.getTrackedGames()),
            [t, a] = o.useState({}),
            n = o.useRef(null);
        return (
            o.useEffect(
                () => (
                    (n.current = setInterval(async () => {
                        let e = aT.Ay.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, r6.E1)(a.pid, 0).then((e) => [a.pid, e, n]));
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
                    }, +nR.A.Millis.SECOND)),
                    () => clearInterval(n.current)
                ),
                [],
            ),
            (0, r.jsx)(lD.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(c.Ip, {
                        className: E()(oc.st, oc.XG),
                        children: [
                            0 === Object.keys(e).length &&
                                (0, r.jsx)(N.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: "No recent screen types",
                                }),
                            Object.values(e).map((e) =>
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, r.jsx)(ob, { tag: "div", pid: e.pid }),
                                            (0, r.jsx)(of, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: n } = t;
                                                    return (0, r.jsx)(
                                                        N.E,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, r6.wR)(a)} @ ${ov(n)}`,
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
    oy = o.memo(function () {
        let e = (0, d.cf)([r4.default], () => r4.default.getTrackedGames()),
            t = (0, oo.getPID)(),
            a = (0, d.bG)([r4.default], () => r4.default.isOverlayOOPEnabledForPid(t), [t]),
            [n, l] = (0, d.yK)([oa.A], () => [oa.A.enabled, oa.A.keepOpen]),
            s = (0, d.bG)([os.default], () => os.default.getFocusedPID()),
            i = (0, d.bG)([os.default], () => os.default.isFocusedPidOutOfProcess());
        return (0, r.jsxs)("div", {
            className: oc.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, r.jsx)(N.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, r.jsx)(ox, { pid: e.pid }, e.pid)),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)(N.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["focusedPID: ", s?.toString() ?? "null"],
                        }),
                        (0, r.jsxs)(N.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isFocusedPidOutOfProcess: ", i ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(N.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["processPid: ", t?.toString() ?? "unknown"],
                        }),
                        (0, r.jsxs)(N.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isOOPEnabledForPid: ", a ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(N.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.enabled: ", n ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(N.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.keepOpen: ", l ? "Yes" : "No"],
                        }),
                    ],
                }),
            ],
        });
    }),
    oC = [
        {
            mode: r9.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: r9.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: r9.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: r9.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: r9.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: r9.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: r9.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    oE = o.memo(function () {
        let [e, t] = og(H.uss.CLICK_ZONE_DEBUG),
            [a, n] = og(H.uss.PERFORMANCE_DEBUG),
            l = (0, d.bG)([oe.A], () => oe.A.getRenderDebugModes()),
            [s, i] = o.useState({});
        return (
            o.useEffect(() => {
                let e = setInterval(() => {
                    i({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, r.jsx)("div", {
                className: oc.st,
                children: oC.map((s) => {
                    let i =
                            s.mode === r9.x7.OverlayRafManagerForceEnabled
                                ? `${s.label} (${ot.A.getLastRAFCallbackReason()})`
                                : s.label,
                        d = () =>
                            s.mode === r9.x7.ClickZones
                                ? null != e
                                : s.mode === r9.x7.WidgetAreas
                                  ? null != a
                                  : l.has(s.mode);
                    return (0, r.jsx)(
                        o.Fragment,
                        {
                            children: (0, r.jsx)(b.d, {
                                checked: d(),
                                onChange: () => {
                                    var e;
                                    let a = d();
                                    s.mode === r9.x7.ClickZones && t(),
                                        s.mode === r9.x7.WidgetAreas && n(),
                                        (e = s.mode),
                                        r0.A.setRenderDebugMode(!a, e);
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
    oS = o.memo(function () {
        let e = (0, d.cf)([r4.default], () => r4.default.getTrackedGames()),
            t = (0, d.bG)([aT.Ay], () => aT.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(lD.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: oc.st,
                                children: [
                                    (0, r.jsx)(N.E, {
                                        variant: "text-md/bold",
                                        color: "text-feedback-critical",
                                        children: "Untracked Running Games",
                                    }),
                                    t.map((e) =>
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(
                                                    N.E,
                                                    {
                                                        variant: "text-sm/normal",
                                                        color: "text-feedback-critical",
                                                        children: `${e.pid} - ${e.name} (${e.exeName})`,
                                                    },
                                                    e.pid,
                                                ),
                                                (0, r.jsx)(of, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, r.jsx)(lD.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: oc.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, r.jsx)(N.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, r.jsx)(op, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    oN = o.memo(function () {
        let e = (0, d.bG)([r4.default], () => r4.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            n = [
                { label: r9.V6.UNSET, value: r9.V6.UNSET, id: r9.V6.UNSET },
                { label: r9.V6.IN_PROCESS_V2, value: r9.V6.IN_PROCESS_V2, id: r9.V6.IN_PROCESS_V2 },
                { label: r9.V6.OUT_OF_PROCESS_V3, value: r9.V6.OUT_OF_PROCESS_V3, id: r9.V6.OUT_OF_PROCESS_V3 },
                {
                    label: r9.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: r9.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: r9.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, r.jsx)(x.l, {
            label: "Override the overlay render mode",
            value: t,
            options: n,
            onSelectionChange: (e) => {
                a(e), r0.A.forceRenderMode(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function oA(e) {
    let { modalProps: t, onClose: a } = e,
        [n, l] = o.useState(null);
    function s() {
        a(null);
    }
    return (0, r.jsxs)(rz.EO, {
        size: rz.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, r.jsxs)(rz.rQ, {
                align: r2.A.Align.CENTER,
                justify: r2.A.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(N.E, {
                        variant: "text-md/bold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, r.jsx)(rz.s_, { onClick: s }),
                ],
            }),
            (0, r.jsx)(rz.$m, {
                children: (0, r.jsx)("div", {
                    className: oc.st,
                    children: (0, r.jsx)(rK.f, { label: "Paste JSON Here", onChange: l, value: n ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(rz.jl, {
                children: (0, r.jsxs)(lz.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Import",
                            onClick: function () {
                                a(n);
                            },
                        }),
                        (0, r.jsx)(p.$, { variant: "secondary", text: "Clear", onClick: s }),
                    ],
                }),
            }),
        ],
    });
}
let ok = {
    native: { label: "Native", filter: (e) => e.type === r3.ON.NativeLegacy || e.type === r3.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === r3.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === r3.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === r3.ON.OOPModule || e.type === r3.ON.LegacyModule },
};
function oD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r3.QJ.Info;
    if (t === r3.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case r3.ON.NativeLegacy:
            return "var(--yellow-500)";
        case r3.ON.NativeOOP:
            return "var(--green-500)";
        case r3.ON.Flux:
            return "var(--brand-400)";
        case r3.ON.Renderer:
            return "var(--brand-500)";
        case r3.ON.LegacyModule:
            return "var(--yellow-300)";
        case r3.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let oT = [
    {
        key: "type",
        cellClassName: oc.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                n = oI(t);
            return (0, r.jsx)("div", {
                className: oc.g$,
                style: { color: oD(t, a) },
                children: (0, r.jsx)(n, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "name",
        cellClassName: oc.Cm,
        render(e) {
            let { name: t, type: a, logType: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(N.E, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case r3.QJ.Info:
                                    return "text-strong";
                                case r3.QJ.Warning:
                                    return "text-feedback-warning";
                                case r3.QJ.Error:
                                    return "text-feedback-critical";
                                default:
                                    return "text-subtle";
                            }
                        })(n),
                        children: t,
                    }),
                    (0, r.jsxs)(N.E, { variant: "text-sm/normal", color: "text-subtle", children: ["(", a, ")"] }),
                ],
            });
        },
    },
    {
        key: "timestamp",
        cellClassName: oc.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, a6.i$)(aQ()(t), "h:mm:ss.SSS");
        },
    },
];
function oI(e) {
    switch (e) {
        case r3.ON.NativeLegacy:
            return rY.W;
        case r3.ON.NativeOOP:
            return rq.q;
        case r3.ON.Renderer:
        case r3.ON.Flux:
            return rJ.v;
        case r3.ON.LegacyModule:
            return rQ.k;
        case r3.ON.OOPModule:
            return rZ.o;
        default:
            return rQ.k;
    }
}
function ow(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let oO = ["__webpack_require__", "fn"],
    oR = ["web.js", "web.js.map"],
    oL = [
        {
            id: "details",
            name: "Details",
            group: aE.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: n, type: l, logType: s, nativeId: i, stack: o, data: d, timestamp: u, pid: m } = t,
                    h = aQ()(u),
                    p = oI(l);
                return (0, r.jsxs)(c.Ar, {
                    className: oc.bW,
                    children: [
                        (0, r.jsxs)(r8.A, {
                            className: E()(tN.jr, oc.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: oD(l, s) },
                                    className: oc.nr,
                                    children: (0, r.jsx)(p, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(r8.A.Title, {
                                    wrapperClassName: oc.qd,
                                    children: [
                                        n,
                                        " (",
                                        l,
                                        ")",
                                        (0, r.jsx)(S.D, {
                                            tag: "span",
                                            className: oc.KE,
                                            onClick: () => (0, a4.C)(n),
                                            children: (0, r.jsx)(aX.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(r8.A.Icon, {
                                    icon: aX.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, a4.C)(ow(t));
                                    },
                                }),
                                (0, r.jsx)(r8.A.Icon, { icon: a1.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(nd, {
                            className: oc.ZK,
                            children: [
                                (0, r.jsx)(nc, {
                                    name: "Timestamp",
                                    copyValue: h.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: h.toISOString(),
                                        title: (0, a6.i$)(h, "LLLL"),
                                        children: (0, a6.i$)(h, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, r.jsx)(nc, {
                                    name: "Log Type",
                                    copyValue: s,
                                    children: (0, r.jsx)("code", { children: s }),
                                }),
                                (0, r.jsx)(nc, {
                                    name: "PID",
                                    copyValue: m?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: m?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nc, {
                                    name: "Native ID",
                                    copyValue: i?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: i?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nc, {
                                    name: "Data",
                                    copyValue: ow(d),
                                    children: (0, r.jsx)("code", { children: ow(d) }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nc, {
                                        name: "Stack Trace",
                                        copyValue: o,
                                        children: (0, r.jsx)("code", {
                                            children: o.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, n, l, s] = a,
                                                        i = n.split(/[\\/]/).pop();
                                                    return oO.includes(e.trim())
                                                        ? null
                                                        : (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, r.jsx)("span", {
                                                                          className: oc.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !oR.includes(i ?? "") &&
                                                                          (0, r.jsxs)(r.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, r.jsxs)("span", {
                                                                                      className: oc.lz,
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
    oM = {
        searchType: a3.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: l } = e,
                s = [t, a, JSON.stringify(l)];
            return null != n && s.push(n), s;
        },
        throttleMs: 100,
    };
function oP() {
    let { ref: e, height: t } = (0, r1.Ay)(),
        a = (0, d.bG)([oe.A], () => oe.A.isModuleLoggingEnabled()),
        [n, l] = o.useState(a),
        [s, i] = o.useState(!1),
        [c, u] = o.useState(null),
        [m, h] = o.useState(Object.keys(ok)),
        [p, x] = (0, d.bG)([oe.A], () => oe.A.getOverlayLoggingBreadcrumbs(), [], oi.D),
        [g, v] = o.useState(null),
        b = g ?? p,
        _ = null != g ? -1 : x;
    o.useEffect(() => {
        0 !== _ &&
            (s
                ? u(b.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : u(null));
    }, [s, b, _]);
    let [f, j] = o.useState(""),
        y = o.useMemo(
            () =>
                0 === _
                    ? []
                    : b.filter((e) => {
                          if (s && null != c && e.timestamp < c) return !1;
                          for (let t of m) {
                              let { filter: a } = ok[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [b, m, c, s, _],
        ),
        [C, A] = o.useState(y),
        [k, D] = o.useState(null),
        T = o.useMemo(() => b.find((e) => e.key === k), [b, k]),
        I = o.useCallback((e) => {
            A(e);
        }, []),
        { renderSelectedTab: w } = (0, aE.Ay)({ tabs: oL }, []);
    (0, a7.RT)(f, y, I, oM, [b]);
    let O = o.useCallback((e) => {
            l(e), r0.A.setModuleLogging(e);
        }, []),
        [R, L] = o.useState(!1),
        M = o.useRef(null),
        P = o.useCallback(() => {
            (0, a4.C)(JSON.stringify(y)), L(!0);
        }, [y]);
    o.useEffect(() => {
        if (R)
            return (
                (M.current = setTimeout(() => {
                    L(!1);
                }, 4e3)),
                () => {
                    null != M.current && clearTimeout(M.current);
                }
            );
    }, [R]);
    let U = o.useCallback((e) => {
            v(null != e ? JSON.parse(e) : null);
        }, []),
        B = o.useCallback(
            (e) => {
                if (e) return v(null);
                (0, eA.openModal)(
                    (e) =>
                        (0, r.jsx)(oA, {
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
        className: oc.rh,
        children: [
            (0, r.jsxs)("div", {
                className: oc.st,
                children: [
                    (0, r.jsxs)("div", {
                        className: E()(oc._V, oc.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: oc.iR,
                                children: (0, r.jsx)(rS.S, { label: "Poll Native", checked: n, onChange: (e) => O(e) }),
                            }),
                            (0, r.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: oc.iR,
                                children: (0, r.jsx)(rS.S, {
                                    label: "Only Active Games",
                                    checked: s,
                                    onChange: (e) => i(e),
                                }),
                            }),
                            (0, r.jsxs)(S.D, {
                                className: oc.ny,
                                onClick: P,
                                children: [
                                    (0, r.jsx)(N.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: R ? "Copied" : "Copy All",
                                    }),
                                    R
                                        ? (0, r.jsx)(rw.A, { size: "sm", color: ek.A.unsafe_rawColors.GREEN_330.css })
                                        : (0, r.jsx)(aX.T, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(S.D, {
                                className: oc.ny,
                                onClick: () => B(null != g),
                                children: (0, r.jsx)(N.E, {
                                    variant: "text-sm/normal",
                                    color: "currentColor",
                                    children: null != g ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: E()(oc._V, oc.XQ),
                        children: Object.entries(ok).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                S.D,
                                {
                                    className: E()(oc.pb, m.includes(t) && oc.bx),
                                    onClick: () => {
                                        h((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: (0, r.jsx)(N.E, {
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
                        className: oc._V,
                        children: (0, r.jsx)(a8.I, {
                            query: f,
                            onChange: j,
                            onClear: () => j(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: E()(oc.st, oc.CZ),
                children: (0, r.jsx)(tA, {
                    columns: oT,
                    data: C,
                    selectedRowKey: k ?? void 0,
                    onClickRow: (e) => D(e.key),
                }),
            }),
            null != T &&
                (0, r.jsx)(aC, {
                    className: E()(oc.st, oc.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: w({ breadcrumb: T, onClose: () => D(null) }),
                }),
        ],
    });
}
let oU = o.memo(function () {
        let e = (0, d.bG)([r5.A], () => r5.A.getPopoutInitializationStages());
        return (0, r.jsxs)("div", {
            className: oc.st,
            children: [
                (0, r.jsx)("div", {
                    className: oc.Iv,
                    children: (0, r.jsx)(N.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: "Popout Initialization Stages",
                    }),
                }),
                (0, r.jsx)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", { children: JSON.stringify(e, void 0, 2) }),
                }),
            ],
        });
    }),
    oB = o.memo(function () {
        let e = (0, d.bG)([oe.A], () => oe.A.isStateDebuggingEnabled()),
            t = (0, d.bG)([oe.A], () => oe.A.getDebuggingState());
        return (
            o.useEffect(
                () => (
                    r0.A.setStateDebugging(!0),
                    () => {
                        r0.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, r.jsxs)("div", {
                className: oc.st,
                children: [
                    (0, r.jsx)("div", {
                        className: oc.Iv,
                        children: (0, r.jsx)(b.d, {
                            checked: e,
                            onChange: () => r0.A.setStateDebugging(!e),
                            label: "Poll Native Module State",
                        }),
                    }),
                    (0, r.jsx)(N.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: (0, r.jsx)("pre", { children: JSON.stringify(t, void 0, 2) }),
                    }),
                ],
            })
        );
    });
function oG() {
    return (0, r.jsx)(c.Ar, {
        children: (0, r.jsxs)("div", {
            className: E()(tN.nd, oc.rf),
            children: [
                (0, r.jsx)(oE, {}),
                (0, r.jsx)(oN, {}),
                (0, r.jsx)(oS, {}),
                (0, r.jsx)(oy, {}),
                (0, r.jsx)(o_, {}),
                (0, r.jsx)(oj, {}),
                (0, r.jsx)(oU, {}),
                (0, r.jsx)(oB, {}),
            ],
        }),
    });
}
let oF = (e) => {
        switch (e) {
            case "Disabled":
                return;
            case "False":
                return !1;
            case "True":
                return !0;
        }
    },
    oV = (e) => (null == e ? "Disabled" : e ? "True" : "False"),
    o$ = o.memo(function () {
        let e = (0, r7.wW)(),
            t = (0, d.bG)([ol.Ay], () => ol.Ay.getOverlayKeybind());
        return (0, r.jsxs)("div", {
            className: oc.st,
            children: [
                (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
                (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Experiment State" }),
                (0, r.jsx)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", {
                        children: JSON.stringify({ ...e, overlayKeybind: (0, or.dI)(t.shortcut) }, void 0, 2),
                    }),
                }),
                (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Overrides" }),
                (0, r.jsx)(x.l, {
                    label: "Overlay User Status",
                    description: "Override whether the current user was a new or existing user",
                    value: oV(e.overrideIsNewOverlayUser),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Existing user", value: "False", id: "False" },
                        { label: "New user", value: "True", id: "True" },
                    ],
                    onSelectionChange: (e) => {
                        (0, r7.sw)(oF(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(x.l, {
                    label: "Override Previous Keybind Status",
                    description: "Override whether the user's pre-experiment keybind was the default keybind",
                    value: oV(e.overrideIsUsingDefaultOverlayKeybind),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Using default keybind", value: "True", id: "True" },
                        { label: "Not using default keybind", value: "False", id: "False" },
                    ],
                    onSelectionChange: (e) => {
                        (0, r7.C3)(oF(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Actions" }),
                (0, r.jsx)(p.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, r7.xc)() }),
                (0, r.jsx)(p.$, {
                    size: "sm",
                    text: "Reset isUsingDefaultOverlayKeybind",
                    onClick: () => (0, r7.tM)(),
                }),
            ],
        });
    });
function oW() {
    return (0, r.jsx)(c.Ar, {
        children: (0, r.jsx)("div", { className: E()(tN.nd, oc.rf), children: (0, r.jsx)(o$, {}) }),
    });
}
function oH() {
    let [e, t] = o.useState("state");
    return (
        o.useEffect(
            () => (
                ty.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !0 }),
                () => {
                    ty.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !1 });
                }
            ),
            [],
        ),
        (0, r.jsxs)("div", {
            className: E()(tN.nd, oc.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: oc._V,
                    children: [
                        (0, r.jsx)(S.D, {
                            className: E()(oc.k0, "state" === e && oc.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(N.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(S.D, {
                            className: E()(oc.k0, "logging" === e && oc.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(N.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(S.D, {
                            className: E()(oc.k0, "experiments" === e && oc.a),
                            onClick: () => t("experiments"),
                            children: (0, r.jsx)(N.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, r.jsx)(oG, {}),
                "logging" === e && (0, r.jsx)(oP, {}),
                "experiments" === e && (0, r.jsx)(oW, {}),
            ],
        })
    );
}
var oz = a(488428),
    oK = a(73825),
    oY = a(323082),
    oq = a(226991),
    oJ = a(721923),
    oQ = a(300233),
    oZ = a(599941),
    oX = a(817649),
    o0 = a(4630),
    o1 = a(44120),
    o2 = a(532794),
    o8 = a(216678),
    o9 = a(194509),
    o3 = a(761705),
    o7 = a(65738),
    o4 = a(265768);
function o6(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, oZ.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, r.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(oX.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let o5 = function () {
    let [e, t] = o.useState(l8.pe.TIER_2),
        [a, n] = o.useState(null),
        l = (0, d.yK)([aR.A], () => aR.A.getGuildsArray()),
        [s] = (0, d.yK)([rA.A], () => [rA.A.getPremiumSubscription()]),
        i = l.map((e) => ({ id: e.id, value: e, label: e.name })),
        [u, h] = o.useState(i.length > 0 ? i[0].value : null),
        [b, _] = o.useState(""),
        [f, j] = o.useState({ plan_id: l8.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        y = "true" !== f.gift && null != s,
        [C, E] = o.useState(i.length > 0 ? i[0].value : null),
        { analyticsLocations: S } = (0, aN.Ay)(tr.A.PAYMENT_FLOW_TEST_PAGE),
        [A, D] = o.useState(""),
        [T, I] = o.useState(H.dJq),
        { balance: w, isFetching: O, error: R } = (0, o3.W)(),
        { isSubmitting: L, responseMessage: M, redeemVirtualCurrency: P } = (0, o3.Q)(),
        [U, B] = o.useState(H.dJq),
        [G, F] = o.useState(""),
        [V, $] = o.useState(H.dJq),
        [W, z] = o.useState(H.dJq);
    return (0, r.jsx)(aN.f5, {
        value: S,
        children: (0, r.jsx)(c.Ip, {
            className: o4.XG,
            children: (0, r.jsxs)(k.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, r.jsxs)(k.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Gift",
                                value: e,
                                options: [
                                    { id: "tier_2", value: l8.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: l8.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: l8.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(o9.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: aZ.XD.PRIMARY,
                                look: aZ.pR.FILLED,
                            }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(k.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Premium Select Plan",
                                value: a,
                                options: [
                                    { id: "tier_2", value: l8.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: l8.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: l8.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => n(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, o2.A)({ subscriptionTier: a, analyticsLocations: S }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(k.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Boost",
                                value: u,
                                options: i,
                                onSelectionChange: (e) => h(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            null != u
                                ? (0, r.jsx)(oJ.A, { guild: u, analyticsLocation: {} })
                                : (0, r.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(k.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(s4.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, r.jsxs)(k.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(g.k, {
                                        label: "Standalone: Trial Promotion Redemption",
                                        placeholder: "Promotion Code",
                                        value: b,
                                        onChange: (e) => _(e),
                                    }),
                                    (0, r.jsx)(lD.m, {
                                        text: "Need Promotion Code",
                                        shouldShow: b.length < 1,
                                        children: (0, r.jsx)(p.$, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: b.length < 1,
                                            onClick: () => {
                                                window.open(H.BVt.BILLING_PROMOTION_REDEMPTION(b));
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
                            (0, r.jsx)(x.l, {
                                label: "Plan",
                                value: f.plan_id,
                                options: [
                                    { id: "tier_2", value: l8.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: l8.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: l8.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
                                ],
                                onSelectionChange: (e) => {
                                    j((t) => ({ ...t, plan_id: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(x.l, {
                                label: "Type",
                                value: f.gift,
                                options: [
                                    { id: "gift", value: "true", label: "Gift" },
                                    { id: "not_gift", value: "false", label: "Not Gift" },
                                ],
                                onSelectionChange: (e) => {
                                    j((t) => ({ ...t, gift: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        ],
                    }),
                    (0, r.jsx)(lD.m, {
                        text: "Already subscribed",
                        shouldShow: y,
                        children: (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: y,
                            onClick: () => {
                                window.open(H.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + oz.stringify({ ...f }));
                            },
                        }),
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(m.n, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, r.jsxs)(k.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(N.E, {
                                        variant: "text-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    O
                                        ? (0, r.jsx)("div", {
                                              className: o4.wG,
                                              children: (0, r.jsx)(eZ.y, { type: eZ.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: o4.dB,
                                              children: [
                                                  null !== R &&
                                                      (0, r.jsxs)(N.E, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              R.message,
                                                          ],
                                                      }),
                                                  (0, r.jsx)(o7.Gy, {
                                                      balance: w ?? 0,
                                                      balanceWidgetMode: o7.k7.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsx)(g.k, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: U,
                                onChange: (e) => B(e),
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: L,
                                onClick: () => P(U, (0, eh.A)()),
                            }),
                            null != M && (0, r.jsx)(N.E, { variant: "text-sm/normal", children: M }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(m.n, {
                        label: "Creator Revenue",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Premium Server Subscription For",
                                value: C,
                                options: i,
                                onSelectionChange: (e) => E(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(oQ.H, {
                                guildId: C?.id,
                                children: (0, r.jsx)(o6, { selectedGuildForGuildSub: C }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(k.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsxs)(m.n, {
                                label: "Activities & Application Payment Modals",
                                children: [
                                    (0, r.jsx)(g.k, {
                                        label: "Application Id",
                                        placeholder: "Application Id",
                                        value: A,
                                        onChange: D,
                                    }),
                                    (0, r.jsx)(g.k, {
                                        label: "Sku Id",
                                        placeholder: "Sku Id",
                                        value: T,
                                        onChange: (e) => I(e),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, o0.openIAPPurchaseModal)({
                                        applicationId: A,
                                        skuId: T,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: H.liQ.IN_APP },
                                        context: H.BRT.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsx)(k.B, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, r.jsx)(m.n, {
                            label: "Standard Payment Modal Test",
                            children: (0, r.jsxs)(k.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(g.k, {
                                        label: "Application Id",
                                        hideLabel: !0,
                                        placeholder: "Application Id",
                                        value: G,
                                        onChange: F,
                                    }),
                                    (0, r.jsx)(g.k, {
                                        label: "SKU ID",
                                        hideLabel: !0,
                                        placeholder: "SKU ID",
                                        value: V,
                                        onChange: (e) => $(e),
                                    }),
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        text: "Open Standard Payment Modal for SKU",
                                        onClick: () =>
                                            (0, o8.A)({
                                                applicationId: G,
                                                skuId: V,
                                                analyticsLocations: S,
                                                checkoutFlow: oq.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(k.B, {
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
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () => (0, o1.A)({ skuId: W, analyticsLocations: S }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsx)(m.n, {
                        label: "Helpers",
                        children: (0, r.jsxs)(k.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, oK.YG)(),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, oY.uZ)(),
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsx)(m.n, {
                        label: "Dismissible Content Framework",
                        children: (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Reset DismissibleContentFrameworkStore",
                            onClick: () => (0, n2.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var de = a(219887),
    dt = a(459357),
    da = a(885180),
    dn = a(742810),
    dl = a(500380),
    ds = a(102609),
    di = a(710195),
    dr = a(295405),
    dd = a(188976);
let dc = [
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
    du = {
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
    dm = [
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
    dh = {
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
    dp = [
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
    dx = {
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
function dg() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        [i, d] = o.useState(null),
        [u, m] = o.useState(null),
        [h, g] = o.useState("pm_card_us"),
        [v, b] = o.useState(!1),
        _ = Object.values((0, ti.bG)([dr.A], () => dr.A.paymentSources)),
        f = du[e],
        j = async () => {
            let t = h;
            "" === t && (t = "pm_card_us"),
                await nw.Bo.post({
                    url: "/debug/payment-source",
                    body: { token: t, address: "US" === e ? l : "CA" === e ? u : null },
                    rejectWithError: !1,
                }),
                await (0, oY.$o)();
        },
        y = async () => {
            await nw.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }), await (0, oY.$o)();
        },
        C = async () => {
            await nw.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }), window.location.reload();
        };
    return (
        o.useEffect(() => {
            (0, oY.$o)();
        }, []),
        (0, r.jsx)(c.Ip, {
            className: tN.nd,
            children: (0, r.jsxs)("div", {
                className: se.l$,
                children: [
                    (0, r.jsxs)(N.E, {
                        style: { marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, r.jsxs)("div", {
                        className: se.Uo,
                        children: [
                            (0, r.jsx)(lp.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: dc
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, r.jsx)("img", {
                                                alt: "",
                                                className: dd.bI,
                                                src: (0, dl.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: (e) => {
                                    t(e), g(du[e][0].value), b(1 === du[e].length);
                                },
                            }),
                            "US" === e &&
                                (0, r.jsx)(x.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: dm.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        n(e), s(dh[e] ?? null);
                                    },
                                }),
                            "CA" === e &&
                                (0, r.jsx)(x.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: i,
                                    options: dp.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        d(e), m(dx[e] ?? null);
                                    },
                                }),
                            (0, r.jsx)(x.l, {
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
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Create Stripe Credit Card",
                                onClick: j,
                            }),
                            _.length > 0 &&
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Delete All Payment Sources",
                                    onClick: y,
                                }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset API Rate limits and reload app",
                                onClick: C,
                            }),
                        ],
                    }),
                    (0, r.jsx)(N.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Generate Gift Card PIN",
                    }),
                    (0, r.jsx)(dS, {}),
                    (0, r.jsx)(N.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Experiment Overrides",
                    }),
                    (0, r.jsx)(dy, {}),
                    (0, r.jsx)(N.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Existing Payment Sources",
                    }),
                    _.map((e) => (0, r.jsx)(dN, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let dv = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    db = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) — Legacy checkout" },
        { id: "1", value: "1", label: "Treatment (1) — Unified checkout" },
    ],
    d_ = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) — Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) — Gift cards enabled" },
    ],
    df = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) — Payment elements disabled" },
        { id: "1", value: "1", label: "Treatment (1) — Payment elements enabled" },
    ];
function dj(e) {
    let { experimentName: t, options: a = dv } = e,
        n = (0, ti.bG)([di.A, ne.default], () => {
            let e = ne.default.getId(),
                a = di.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        l = o.useCallback(
            (e) => {
                (0, ds.t$)(ds.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, r.jsx)(x.l, { selectionMode: "single", label: t, value: n, options: [...a], onSelectionChange: l });
}
function dy() {
    return (0, r.jsxs)(k.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(dj, { experimentName: dn.W2.definition.name, options: db }),
            (0, r.jsx)(dj, { experimentName: dn._$.definition.name, options: db }),
            (0, r.jsx)(dj, { experimentName: dt.A.definition.name, options: d_ }),
            (0, r.jsx)(dj, { experimentName: da._.definition.name, options: df }),
        ],
    });
}
let dC = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    dE = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function dS() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState("500"),
        [l, s] = o.useState(null),
        [i, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [m, h] = o.useState(null),
        v = parseInt(a, 10),
        b = !isNaN(v) && v >= 500 && v <= 5e3,
        _ = async () => {
            if (b) {
                d(!0), h(null), s(null), u(!1);
                try {
                    let t = await nw.Bo.post({
                        url: "/billing/gift-card/create-on-demand-pin",
                        body: { country: e, currency: dE[e], amount: v },
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
    return (0, r.jsxs)(k.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsxs)(k.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, r.jsx)(x.l, {
                        selectionMode: "single",
                        label: "Gift Card Country",
                        value: e,
                        options: dC,
                        onSelectionChange: t,
                    }),
                    (0, r.jsx)(g.k, {
                        label: "Amount (500–5000)",
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
                        onClick: _,
                        loading: i,
                        disabled: !b,
                    }),
                ],
            }),
            null != l &&
                (0, r.jsxs)(k.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(g.k, { label: "Generated PIN", value: l, onChange: () => {}, readOnly: !0 }),
                        (0, r.jsx)(p.$, {
                            variant: "secondary",
                            size: "sm",
                            text: c ? "Copied!" : "Copy",
                            onClick: () => {
                                navigator.clipboard.writeText(l), u(!0), setTimeout(() => u(!1), 2e3);
                            },
                        }),
                    ],
                }),
            null != m && (0, r.jsx)(A.w, { type: "critical", children: m }),
        ],
    });
}
function dN(e) {
    let { paymentSource: t } = e,
        a = async () => {
            await nw.Bo.patch({ url: H.Rsh.BILLING_PAYMENT_SOURCE(t.id), body: { default: !0 }, rejectWithError: !1 }),
                await (0, oY.$o)();
        };
    return (0, r.jsxs)("div", {
        className: se.bd,
        children: [
            (0, r.jsx)(de.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, r.jsx)("img", { alt: t.country, className: dd.bI, src: (0, dl.t)(t.country) }),
            t.isDefault
                ? (0, r.jsx)(N.E, { variant: "text-sm/medium", children: "(Default)" })
                : (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Set as Default", onClick: a }),
        ],
    });
}
var dA = a(706712),
    dk = a(367727),
    dD = a(845886);
function dT() {
    return (0, r.jsx)(c.Ip, { className: dD.kL, children: (0, r.jsx)(dI, {}) });
}
function dI() {
    let e = o.useCallback(() => {
            (0, ls._N)(nK.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, dk.FZ)(nK.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(T.D, { className: dD.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, r.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, r.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, r.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, r.jsx)("div", {
                className: dD.PW,
                children: (0, r.jsx)(p.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var dw = a(136722),
    dO = a(576705),
    dR = a(309010),
    dL = a(558393),
    dM = a(719366),
    dP = a(842681);
function dU(e) {
    let { title: t, can: a } = e,
        n = a ? rw.A : L.P,
        l = (0, r.jsx)("div", {
            className: E()(dP.v_, a ? dP.uU : dP.Ss),
            children: (0, r.jsx)(n, { className: dP.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: dP.z8,
        children: [
            l,
            (0, r.jsx)("div", {
                className: dP.rv,
                children: (0, r.jsx)(N.E, { variant: "text-md/normal", children: t }),
            }),
        ],
    });
}
function dB() {
    let e = (0, d.bG)([dR.A], () => dR.A.getChannelId()),
        t = (0, d.bG)([aL.A], () => aL.A.getGuildId()),
        a = (0, d.bG)([tZ.A], () => tZ.A.getChannel(e)),
        n = (0, d.bG)([aR.A], () => aR.A.getGuild(t)),
        l = (0, d.bG)([dO.A], () => dO.A.computePermissions(a)),
        s = (0, d.bG)([dO.A], () => dO.A.computePermissions(n)),
        i = (0, tQ.Ay)(a, !0),
        o = null != a ? (0, dM.mW)(a, !1) : null,
        c = null != n ? dL.A.getGuildPermissionSpecMap(n) : null,
        u = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = dw.zy(l, a);
            return (0, r.jsx)(dU, { title: t, can: n }, t);
        }),
        m = Object.values(c ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = dw.zy(s, a);
            return (0, r.jsx)(dU, { title: t, can: n }, t);
        });
    return (0, r.jsx)("div", {
        className: E()(tN.nd, dP.nd),
        children: (0, r.jsxs)("div", {
            className: dP.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: dP.uW,
                    children: [
                        (0, r.jsx)(T.D, {
                            variant: "heading-md/semibold",
                            children: null != i ? `Permissions in ${i}` : "No channel selected",
                        }),
                        u,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: dP.uW,
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
var dG = a(873298),
    dF = a(775602),
    dV = a(363195),
    d$ = a(253932),
    dW = a(631670),
    dH = a(817281),
    dz = a(955572),
    dK = a(56348),
    dY = a(385803),
    dq = a(381941);
let dJ = [H.NJ8.DARK, H.NJ8.LIGHT, H.NJ8.DARKER, H.NJ8.MIDNIGHT],
    dQ = [dG.NS.COMPACT, dG.NS.COZY, dG.NS.DEFAULT];
function dZ(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function dX() {
    let e,
        t =
            ((e = F.default.getCurrentUser()),
            rM.Ay.canUseClientThemes(e) ? Object.keys(dY.ag).map((e) => Number(e)) : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                n = dZ(a);
            if (null != n) {
                let t = dY.ag[n];
                e = t?.theme ?? H.NJ8.DARK;
            } else e = dZ([H.NJ8.DARK, H.NJ8.DARKER, H.NJ8.MIDNIGHT]);
            await dH.u_(
                { theme: e, backgroundGradientPresetId: n ?? void 0, customUserThemeSettings: void 0 },
                ls.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = dZ(dJ);
            await dH.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                ls.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function d0() {
    let e = td.A.purchases,
        t = (0, eg.x9)(e),
        a = (0, eg.$W)(e),
        n = t.length > 0,
        l = a.length > 0;
    if (n || l)
        try {
            let e = {};
            n && (e.avatarDecoration = dZ([...t, null])), l && (e.nameplate = dZ([...a, null])), (0, e9.p)(e);
            let s = e3.A.getPendingChanges(),
                i = (0, dK.Sk)(s);
            await (0, dW._L)(i).finally(dW.pZ);
        } catch (e) {}
}
function d1() {
    try {
        let e = dZ(H.hH7.FONT_SIZES);
        (0, dz.XS)(e);
        let t = dZ(dq.qh);
        (0, dz.AC)(t);
        let a = dZ(dQ);
        d$.Xi.updateSetting(a);
    } catch (e) {}
}
function d2() {
    (0, e6.Bf)();
    let e = (0, d.bG)([F.default], () => F.default.getCurrentUser()),
        t = d$.eh.useSetting(),
        a = (0, d.bG)([dV.A], () => dV.A.theme),
        n = t.backgroundGradientPresetId,
        l = (0, d.bG)([td.A], () => td.A.purchases),
        s = (0, eg.x9)(l),
        i = (0, eg.$W)(l),
        c = e?.avatarDecoration?.skuId,
        u = e?.collectibles?.nameplate?.skuId,
        m = null != c ? (s.find((e) => e.skuId === c) ?? null) : null,
        h = null != u ? (i.find((e) => e.skuId === u) ?? null) : null,
        x = (0, d.bG)([to.A], () => to.A.getProduct(m?.skuId)),
        g = (0, d.bG)([to.A], () => to.A.getProduct(h?.skuId)),
        v = (0, d.bG)([dF.A], () => dF.A.fontSize),
        b = (0, d.bG)([dF.A], () => dF.A.messageGroupSpacing),
        _ = d$.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = F.default.getCurrentUser(),
                t = d$.eh.getSetting(),
                a = td.A.purchases,
                n = (0, eg.x9)(a),
                l = (0, eg.$W)(a),
                s = dV.A.theme,
                i = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (n.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (l.find((e) => e.skuId === o) ?? null) : null,
                u = dF.A.fontSize,
                m = dF.A.messageGroupSpacing,
                h = d$.Xi.getSetting();
            return () => {
                try {
                    dH.u_(
                        { theme: s, backgroundGradientPresetId: i ?? void 0, customUserThemeSettings: void 0 },
                        ls.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, e9.p)({ avatarDecoration: d, nameplate: c });
                    let e = e3.A.getPendingChanges(),
                        t = (0, dK.Sk)(e);
                    (0, dW._L)(t).finally(dW.pZ), (0, dz.XS)(u), (0, dz.AC)(m), d$.Xi.updateSetting(h);
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: lc.kL,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(T.D, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, r.jsx)(N.E, {
                            variant: "text-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: dX }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: d0,
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: d1,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, r.jsxs)(N.E, { variant: "text-md/normal", children: ["Theme: ", a] }),
                        (0, r.jsxs)(N.E, {
                            variant: "text-md/normal",
                            children: ["Client Theme ID:", " ", null != n ? dY.ag[n]?.getName() : "None"],
                        }),
                        (0, r.jsxs)(N.E, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", x?.name ?? "None"],
                        }),
                        (0, r.jsxs)(N.E, { variant: "text-md/normal", children: ["Nameplate: ", g?.name ?? "None"] }),
                        (0, r.jsxs)(N.E, { variant: "text-md/normal", children: ["Font Size: ", v, "px"] }),
                        (0, r.jsxs)(N.E, { variant: "text-md/normal", children: ["Message Spacing: ", b] }),
                        (0, r.jsxs)(N.E, {
                            variant: "text-md/normal",
                            children: [
                                "UI Density: ",
                                _,
                                " (",
                                (function (e) {
                                    switch (e) {
                                        case dG.NS.COMPACT:
                                            return "Compact";
                                        case dG.NS.COZY:
                                            return "Cozy";
                                        case dG.NS.DEFAULT:
                                            return "Default";
                                        case dG.NS.RESPONSIVE:
                                            return "Responsive";
                                        default:
                                            return "Unknown";
                                    }
                                })(_),
                                ")",
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var d8 = a(885574),
    d9 = a(311678),
    d3 = a(508274),
    d7 = a(837529);
let d4 = [5793266, 2303016],
    d6 = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function d5() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: n } = (0, d7.Zt)(),
        l = (0, q.Ay)(),
        s = (0, d.bG)([n6.A], () => n6.A.settings.appearance?.clientThemeSettings),
        i =
            s?.customUserThemeSettings != null &&
            null != s.customUserThemeSettings.colors &&
            s.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, dH.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), n(null));
    }
    return (0, r.jsx)(c.Ar, {
        children: (0, r.jsxs)(k.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(d9.N, {
                            collapsibleContent: (0, r.jsxs)(k.B, {
                                gap: 8,
                                padding: 4,
                                children: [
                                    (0, r.jsx)(N.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "This panel allows you to override the theme and theme colors that are used when rendering user profiles. The overrides you set here will apply to all user profiles, not just your own.",
                                    }),
                                    (0, r.jsx)(N.E, {
                                        variant: "text-md/normal",
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
                                    icon: d8.m,
                                    onClick: t,
                                });
                            },
                        }),
                        (0, r.jsx)(v.c, {}),
                    ],
                }),
                null == e
                    ? (0, r.jsx)(p.$, {
                          variant: "primary",
                          text: "Enable Theme Override",
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: d4 }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(lz.e, {
                                  children: (0, r.jsx)(p.$, {
                                      variant: "critical-primary",
                                      text: "Clear Theme Override",
                                      onClick: function () {
                                          o(), t(null);
                                      },
                                  }),
                              }),
                              (0, r.jsx)(x.l, {
                                  label: "Profile Type",
                                  selectionMode: "single",
                                  value: e.mode,
                                  options: d6,
                                  onSelectionChange: (a) => t({ ...e, mode: a }),
                              }),
                              "nitro" === e.mode
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(b.d, {
                                                label: "Disable Banner",
                                                checked: !0 === e.disableBanner,
                                                onChange: (a) => t({ ...e, disableBanner: a }),
                                            }),
                                            (0, r.jsx)(p.$, {
                                                variant: "secondary",
                                                text: "Reset Colors",
                                                onClick: () => t({ ...e, themeColors: d4 }),
                                            }),
                                            (0, r.jsxs)(k.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(N.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, r.jsx)(d3.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[0] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [a, e.themeColors?.[1] ?? null] }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)(k.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(N.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Secondary Color",
                                                    }),
                                                    (0, r.jsx)(d3.VN, {
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
                                  : (0, r.jsxs)(k.B, {
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(x.l, {
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
                                                        (0, r.jsx)(N.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-feedback-warning",
                                                            children:
                                                                "You have an active custom theme so setting a theme type does nothing.",
                                                        }),
                                                        (0, r.jsx)(N.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be saved and can be restored manually, or automatically when you clear the override.",
                                                        }),
                                                        (0, r.jsx)(p.$, {
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
                                                                    (0, dH.u_)({ theme: "system" });
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            null != a &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(N.E, {
                                                            variant: "text-sm/normal",
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
var ce = a(141931),
    ct = a(306173),
    ca = a(366853),
    cn = a(237984),
    cl = a(43203),
    cs = a(349435),
    ci = a(674272),
    cr = a(407186),
    co = a(10094),
    cd = a(683760);
let cc = () => {
    let e = (0, d.bG)([F.default], () => F.default.getCurrentUser()),
        t = (0, d.bG)([cd.A], () => {
            let e = cd.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, d.bG)([cd.A], () => cd.A.getPremiumTypeOverride());
    return (0, r.jsxs)(k.B, {
        gap: 16,
        children: [
            (0, r.jsx)(x.l, {
                label: "Override Client-Side Premium Type",
                options: l8.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, co.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(lx.Q, {
                onClick: () => {
                    (0, co.O)(l8.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(s0.J, {
                label: "Override Client-Side Account Created At Date",
                value: aQ()(t),
                onSelect: (e) => {
                    var t;
                    return (t = e.toISOString()), void (0, co.Y)(new Date(t));
                },
            }),
            (0, r.jsx)(lx.Q, { onClick: () => (0, co.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
};
var cu = a(19575),
    cm = a(327337),
    ch = a(431804),
    cp = a(865349),
    cx = a(818050);
function cg() {
    throw Error("Send help");
}
function cv() {
    let e = d$.j0.useSetting(),
        [t, n] = o.useState(!1);
    return t
        ? {}
        : (0, r.jsxs)(c.Ip, {
              children: [
                  (0, r.jsx)("div", { className: E()(cp.N, cx.SX), children: (0, r.jsx)(cc, {}) }),
                  (0, r.jsx)("div", {
                      className: E()(cp.N, cx.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, ci.A)({ source: ch.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: E()(cp.N, cx.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = dR.A.getChannelId() ?? "21154681615024128"),
                                  void (0, eA.openModalLazy)(
                                      async () => {
                                          let { default: t } = await Promise.all([
                                              a.e("45033"),
                                              a.e("19959"),
                                              a.e("45998"),
                                          ]).then(a.bind(a, 131882));
                                          return (a) =>
                                              (0, r.jsx)(t, {
                                                  otherUserId: "9876543210",
                                                  channelId: e,
                                                  warningId: "test-warning-id",
                                                  warningType: cs._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: cm.V },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: E()(cp.N, cx.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () =>
                              void (0, eA.openModalLazy)(
                                  async () => {
                                      let { default: e } = await a.e("17724").then(a.bind(a, 563255));
                                      return (t) => (0, r.jsx)(e, { ...t });
                                  },
                                  { onCloseCallback: void 0 },
                              ),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: E()(cp.N, cx.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, cl.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: E()(cp.N, cx.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: ct.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: E()(cp.N, cx.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = ca.A.getSocket();
                              ty.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: E()(cp.N, cx.QB),
                      children: (0, r.jsx)(b.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => d$.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: E()(cp.N, cx.QB),
                      children: [
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, cn.o)(),
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  ca.A.getSocket().close(), ca.A.getSocket().connect();
                              },
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Clear Caches",
                              onClick: () => {
                                  ty.h.dispatch({
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
                              onClick: () => (0, cr.sy)(!0),
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: () => {
                                  nw.Bo.post({ url: H.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: E()(cp.N, cx.QB),
                      children: [
                          (0, r.jsx)(x.l, {
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
                              onSelectionChange: (e) => null != e && cu.Ay.crash(e),
                          }),
                          (0, r.jsx)(x.l, {
                              label: "Trigger JS crash",
                              hideLabel: !0,
                              selectionMode: "single",
                              value: void 0,
                              options: [
                                  { label: "Native JS crash", value: void 0, id: "native_js_crash" },
                                  {
                                      label: "Delayed exception in renderer process",
                                      value: ce.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: ce.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: ce.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void cu.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => n(!0),
                          }),
                          (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: cg }),
                      ],
                  }),
              ],
          });
}
var cb = a(593924),
    c_ = a(653887),
    cf = a(799226);
function cj() {
    let e = Object.keys(cb).map((e) => (0, r.jsx)(cE, { riveName: e }, e));
    return (0, r.jsx)(c.Ar, {
        style: { maxHeight: "100%" },
        children: (0, r.jsxs)(k.B, {
            gap: 24,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsx)(T.D, { variant: "heading-lg/medium", children: "Rive Inspector" }),
                (0, r.jsx)(N.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, r.jsx)(cy, {}),
                (0, r.jsx)(T.D, { variant: "heading-lg/medium", children: "Rive Overrides" }),
                (0, r.jsx)(N.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to replace an existing Rive animation in the app with the new one. Useful for previewing updated versions of existing animations before uploading them via the Rive pipeline.",
                }),
                e,
            ],
        }),
    });
}
function cy() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        [i, d] = o.useState([]),
        c = o.useRef(null),
        [u, m] = o.useState(400),
        [h, p] = o.useState(400),
        x = o.useCallback(() => {
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
        b = o.useCallback((e) => {
            s(null), n(null), t(e);
        }, []);
    return (0, r.jsxs)(k.B, {
        gap: 16,
        children: [
            (0, r.jsx)(cE, { riveName: "Rive inspector", onRiveLoad: b }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(c_._, { src: e, ref: c, onLoad: x, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, r.jsx)(eZ.y, {}) : null,
            null != a &&
                (0, r.jsxs)(k.B, {
                    children: [
                        (0, r.jsxs)(k.B, {
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
                                    onChange: (e) => p(parseInt(e)),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(k.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(T.D, { variant: "heading-lg/medium", children: "Data Binding" }),
                                Object.keys(l ?? {}).map((e) =>
                                    (0, r.jsx)(
                                        cC,
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
function cC(e) {
    let { property: t, type: a, value: n, onChange: l, artboards: s } = e;
    return "string" === a
        ? (0, r.jsx)(g.k, { label: t, value: n, onChange: (e) => l(e) })
        : "number" === a
          ? (0, r.jsx)(g.k, { type: "number", label: t, value: n, onChange: (e) => l(parseInt(e)) })
          : "boolean" === a
            ? (0, r.jsx)(b.d, { label: t, checked: n, onChange: (e) => l(e) })
            : "trigger" === a
              ? (0, r.jsx)(p.$, { text: `Trigger ${t}`, onClick: () => l(Number.isSafeInteger(n) ? n + 1 : 1) })
              : "image" === a
                ? (0, r.jsx)(g.k, { label: t, value: n, onChange: (e) => l(e) })
                : "color" === a
                  ? (0, r.jsx)(lp.Z, {
                        selectionMode: "single",
                        label: t,
                        value: n,
                        onSelectionChange: (e) => l(e),
                        closeOnSelect: !0,
                        placeholder: "Select a color...",
                        options: Object.entries(ek.A.colors).map((e) => {
                            let [t, a] = e;
                            return { label: t, value: a, id: t };
                        }),
                    })
                  : "artboard" === a
                    ? (0, r.jsx)(lp.Z, {
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
function cE(e) {
    let { riveName: t, onRiveLoad: a } = e,
        n = cb[t]?.riveSrc,
        l = null == n,
        s = o.useRef(null),
        i = (0, cf.Gy)(n);
    return (0, r.jsxs)(
        k.B,
        {
            gap: 8,
            children: [
                (0, r.jsx)("label", { children: t }),
                (0, r.jsxs)(k.B, {
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
                                    null != n && (0, cf.DS)(n, t), a?.(t);
                                }),
                                    l.readAsArrayBuffer(t);
                            },
                            ref: s,
                        }),
                        (0, r.jsx)(eE.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: () => {
                                null != s.current && (s.current.value = ""),
                                    null != n && (0, cf.DS)(n, null),
                                    a?.(null);
                            },
                            icon: a2.u,
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
var cS = a(290136),
    cN = a(106236),
    cA = a(629584),
    ck = a(600239),
    cD = a(940622),
    cT = a(961895),
    cI = a(343991),
    cw = a(699666);
let cO = () => {
        (0, eA.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(a.bind(a, 343991));
                return (t) =>
                    (0, r.jsx)(e, {
                        title: "No image or video files found!",
                        help: "Please drop one or more image or video files.",
                        ...t,
                    });
            },
            { modalKey: cI.D },
        );
    },
    cR = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    cL = (e) => {
        let { className: t, onDrop: a, children: n } = e,
            [l, s] = o.useState(!1),
            i = o.useRef(null),
            d = o.useCallback((e) => {
                cR(e), s(!0), (0, eA.closeModal)(cI.D);
            }, []),
            c = o.useCallback((e) => {
                cR(e);
                let t = i.current,
                    a = e.relatedTarget;
                (null != a && (null == t || t.contains(a))) || s(!1);
            }, []),
            u = o.useCallback(
                async (e) => {
                    cR(e), s(!1);
                    let t = e.dataTransfer;
                    if (null == t) return void cO();
                    let n = await Promise.all(
                        Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry()),
                    ).then((e) => e.filter((e) => null != e));
                    n.length > 0 ? a(n) : cO();
                },
                [a],
            );
        return (0, r.jsxs)("div", {
            ref: i,
            className: E()(t, cw.iE),
            onDragEnter: d,
            onDragOver: cR,
            onDragLeave: c,
            onDrop: u,
            children: [
                n,
                l &&
                    (0, r.jsx)("div", {
                        className: cw.d2,
                        children: (0, r.jsxs)("div", {
                            className: cw.vW,
                            children: [
                                (0, r.jsx)(cT.A, { icons: en.ir }),
                                (0, r.jsx)(T.D, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
                                (0, r.jsxs)("div", {
                                    className: cw.GA,
                                    children: [
                                        (0, r.jsx)(N.E, {
                                            variant: "text-sm/normal",
                                            children: "Drop file(s) into this panel to preview Shop assets!",
                                        }),
                                        (0, r.jsxs)(N.E, {
                                            variant: "text-sm/normal",
                                            children: [
                                                "Click",
                                                (0, r.jsx)(cS.c, {
                                                    className: cw.q4,
                                                    size: "xs",
                                                    color: ek.A.colors.TEXT_DEFAULT,
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
    cM = new Set([
        eb.RN.HERO_BANNER_STATIC,
        eb.RN.HERO_LOGO,
        eb.RN.PDP_BACKGROUND,
        eb.RN.LOGO,
        eb.RN.MOBILE_BANNER,
        eb.RN.MOBILE_BACKGROUND,
    ]),
    cP = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    cU = { max: 5e6, warn: 2e6 },
    cB = { max: 3e6, warn: 1e6 },
    cG = { max: 2e6, warn: 1e6 },
    cF = { max: 1e6, warn: 5e5 },
    cV = { max: 25e4, warn: 5e4 },
    c$ = {
        [eb.Jn.PROFILE_EFFECT]: cU,
        [eb.Jn.AVATAR_DECORATION]: cB,
        [eb.RN.HERO_BANNER_ANIMATED]: cU,
        [eb.RN.HERO_BANNER_RIVE]: cU,
        [eb.RN.CATALOG_BANNER_RIVE]: cU,
        [eb.RN.SHOP_BUTTON_BG_HOVER]: cB,
        [eb.RN.SHOP_BUTTON_BG_HOVER_DARK]: cB,
        [eb.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: cB,
        [eb.RN.SHOP_BUTTON_BG_RESTING]: cB,
        [eb.RN.SHOP_BUTTON_BG_RESTING_DARK]: cB,
        [eb.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: cB,
        [eb.RN.HERO_BANNER_STATIC]: cG,
        [eb.RN.UPSELL_BANNER]: cF,
        [eb.RN.UPSELL_BANNER_POPOUT]: cV,
        [eb.RN.MOBILE_BANNER]: cF,
        [eb.RN.MOBILE_BACKGROUND]: cV,
        [eb.RN.MOBILE_HERO]: cF,
        [eb.RN.PDP_BACKGROUND]: cV,
        [eb.RN.LOGO]: cV,
        [eb.RN.TAB_TOOLTIP]: cV,
    },
    cW = async (e) => {
        let t = Object.values(eb.Kx),
            a = new Set(),
            n = e.createReader();
        for (let e of await new Promise((e) => n.readEntries(e))) e.isDirectory && t.includes(e.name) && a.add(e.name);
        return t.filter((e) => !a.has(e));
    },
    cH = (e) => {
        let { names: t, addError: a } = e,
            n = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
            l = t.filter((e) => !n.test(e));
        l.length > 0 && a("File names must be in lowercase snake case", l);
    },
    cz = (e, t, a, n) => {
        let l = t.size,
            s = l > 1e6 ? `${(l / 1e6).toFixed(2)}MB` : `${(l / 1e3).toFixed(2)}KB`,
            i = `${t.name} - ${s}`;
        if (l > e.max) {
            let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
            a("Files exceed the recommended size limit - make sure they are optimized!", [`${i} (max: ${t})`]);
        } else l > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [`${i}`]);
    },
    cK = (e, t, a, n) => {
        let l = c$[e];
        if (null != l) for (let e of t) e.name.endsWith(".txt") || cz(l, e, a, n);
    },
    cY = (e) => {
        let t = eb.aL[e];
        return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
    };
var cq = a(981388);
let cJ = o.createContext({ setDropHandler: () => {} }),
    cQ = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    cZ = { id: "none", label: "[none selected]", value: null },
    cX = () => {
        (0, eA.hasModalOpen)(ck.k)
            ? (0, eA.closeModal)(ck.k)
            : (0, eA.openModalLazy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: ck.k, onCloseRequest: () => (0, eA.closeModal)(ck.k) },
              );
    },
    c0 = () => {
        (0, eA.hasModalOpen)(ck.g)
            ? (0, eA.closeModal)(ck.g)
            : (0, eA.openModalLazy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: ck.g, onCloseRequest: () => (0, eA.closeModal)(ck.g) },
              );
    },
    c1 = () => {
        let e = (0, e_.pF)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, cD.JE)(),
            n = o.useMemo(() => [cZ, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
        return (0, r.jsxs)("div", {
            className: cq.kO,
            children: [
                (0, r.jsx)(tJ.h, { size: 16 }),
                (0, r.jsxs)("div", {
                    className: cq.wR,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-md/bold", children: "Preview Profile Effect" }),
                        (0, r.jsx)(eE.K, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: c0,
                            icon: cS.c,
                            "aria-label": "Open PFX preview instructions",
                        }),
                    ],
                }),
                (0, r.jsx)(x.l, {
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
    c2 = () => {
        let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, cD.JE)(),
            { avatarDecorationAssets: a } = (0, cD.NE)(),
            n = o.useMemo(() => a.map((e) => ({ id: e.name, label: e.name, value: e.name })), [a]);
        return 0 === a.length
            ? null
            : (0, r.jsxs)("div", {
                  className: cq.kO,
                  children: [
                      (0, r.jsx)(tJ.h, { size: 16 }),
                      (0, r.jsx)(x.l, {
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
    c8 = new Set([eb.RN.HERO_BANNER_STATIC, eb.RN.HERO_BANNER_ANIMATED, eb.RN.HERO_BANNER_RIVE]),
    c9 = (e) => {
        let { clearAssets: t, clearIgnoredFiles: a } = e,
            { collectionAssets: n } = (0, cD.NE)(),
            {
                deleteCollectionAsset: l,
                clearAssets: s,
                heroLogoMaxHeight: i,
                setHeroLogoMaxHeight: d,
                heroResponsive: c,
                setHeroResponsive: u,
            } = (0, cD.JE)(),
            m = o.useMemo(() => Object.values(n).map((e) => ({ label: e.name, value: e.type })), [n]),
            h = m.some((e) => e.value === eb.RN.HERO_LOGO),
            x = m.some((e) => c8.has(e.value)),
            g = o.useCallback((e) => l(e), [l]),
            v = o.useCallback(() => {
                s(), t(), a();
            }, [s, t, a]);
        return 0 === m.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(tJ.h, { size: 16 }),
                      (h || x) &&
                          (0, r.jsxs)("div", {
                              className: cq.v7,
                              children: [
                                  h &&
                                      (0, r.jsxs)("div", {
                                          className: cq.cj,
                                          children: [
                                              (0, r.jsx)(N.E, {
                                                  variant: "text-md/normal",
                                                  className: cq.Me,
                                                  children: "Logo size",
                                              }),
                                              (0, r.jsx)(cN.A, {
                                                  className: cq.TQ,
                                                  minValue: 90,
                                                  maxValue: 200,
                                                  initialValue: i ?? 90,
                                                  handleSize: 10,
                                                  onValueChange: (e) => d(Math.round(e)),
                                                  onValueRender: (e) => `${Math.round(e)}px`,
                                                  "aria-label": "Hero logo max height",
                                              }),
                                              (0, r.jsx)(N.E, { variant: "text-sm/normal", children: `${i ?? 90}px` }),
                                          ],
                                      }),
                                  x &&
                                      (0, r.jsxs)("div", {
                                          className: cq.sy,
                                          children: [
                                              (0, r.jsx)(b.d, { checked: c, onChange: u }),
                                              (0, r.jsx)(N.E, {
                                                  variant: "text-md/normal",
                                                  children: "Responsive Hero",
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                      (0, r.jsx)(tJ.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: cq.wR,
                          children: [
                              (0, r.jsx)(T.D, { variant: "heading-lg/bold", children: "Uploaded Assets" }),
                              (0, r.jsx)(p.$, {
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
                                      className: cq._0,
                                      children: [
                                          (0, r.jsx)(eE.K, {
                                              variant: "icon-only",
                                              size: "sm",
                                              onClick: () => g(e.value),
                                              icon: L.P,
                                              "aria-label": "Remove asset",
                                          }),
                                          (0, r.jsx)(N.E, { variant: "text-md/normal", children: e.label }),
                                      ],
                                  },
                                  e.value,
                              ),
                          ),
                      }),
                  ],
              });
    },
    c3 = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
        return 0 === t.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(tJ.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: cq.wR,
                          children: [
                              (0, r.jsx)(T.D, { variant: "heading-lg/bold", children: "Ignored Files" }),
                              (0, r.jsx)(p.$, { variant: "primary", size: "sm", onClick: a, text: "Clear" }),
                          ],
                      }),
                      (0, r.jsx)("ul", {
                          children: t.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      className: cq.yk,
                                      children: (0, r.jsx)(N.E, { variant: "text-md/normal", children: e }),
                                  },
                                  `${e}-${t}`,
                              ),
                          ),
                      }),
                  ],
              });
    },
    c7 = () => {
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
                                let n = await cW(t);
                                if (n.length > 0) return void i("Missing required directories", n);
                                (a = await (0, eb.eg)([t])),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        for (let e of t.collectionFiles) {
                                            let t = (0, eb.pd)(e),
                                                l = null != t ? c$[t] : null;
                                            null != l && cz(l, e, a, n);
                                        }
                                        cH({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                        let l = new Set(
                                                t.collectionFiles.map((e) => (0, eb.pd)(e)).filter((e) => null != e),
                                            ),
                                            s = Array.from(cM)
                                                .filter((e) => !l.has(e))
                                                .map(cY);
                                        s.length > 0 && a("Missing required files", s);
                                        let i = Object.values(eb.RN)
                                            .filter((e) => !cM.has(e))
                                            .filter((e) => !l.has(e))
                                            .map(cY);
                                        i.length > 0 && n("Missing optional assets", i);
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        cH({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                            Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                                let [t, l] = e,
                                                    s = l.map((e) => e.name);
                                                cH({
                                                    names: s.map((e) => {
                                                        let t = e.indexOf("-");
                                                        return e.substring(0, t > 0 ? t : e.length);
                                                    }),
                                                    addError: a,
                                                }),
                                                    cK(eb.Jn.PROFILE_EFFECT, l, a, n);
                                                let i = cP
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
                                                        (e) => !cP.some((t) => e.startsWith(t)) && !e.endsWith(".txt"),
                                                    )
                                                    .map((e) => `${t}/${e}`);
                                                r.length > 0 && n("Contains unrecognized files", r);
                                            });
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        cH({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                            cK(eb.Jn.AVATAR_DECORATION, t.avatarDecorationFiles, a, n);
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
            { setDropHandler: u } = o.useContext(cJ),
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
                              className: cq._f,
                              children: [
                                  (0, r.jsx)(N.E, {
                                      variant: "text-md/normal",
                                      color: d ? "text-feedback-critical" : "text-default",
                                      children: `${s.length} errors`,
                                  }),
                                  (0, r.jsx)(N.E, {
                                      variant: "text-md/normal",
                                      color: c ? "text-feedback-warning" : "text-default",
                                      children: `${i.length} warnings`,
                                  }),
                                  (0, r.jsx)(p.$, { variant: "primary", size: "sm", onClick: t, text: "Reset" }),
                              ],
                          })
                        : (0, r.jsx)(N.E, { variant: "text-md/normal", children: "Drop asset folder to validate." }),
                    (0, r.jsx)(tJ.h, { size: 16 }),
                    d &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(T.D, { variant: "heading-lg/bold", children: "Errors" }),
                                (0, r.jsx)(tJ.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: cq.ck,
                                    children: s.map((e, t) => {
                                        let [a, n] = e;
                                        return (0, r.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, r.jsx)(N.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-critical",
                                                        children: a,
                                                    }),
                                                    n.length > 0 &&
                                                        (0, r.jsx)("ul", {
                                                            className: cq.ck,
                                                            children: n.map((e, t) =>
                                                                (0, r.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, r.jsx)(N.E, {
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
                                (0, r.jsx)(tJ.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: cq.ck,
                                    children: Object.entries(n).map((e, t) => {
                                        let [a, n] = e;
                                        return (0, r.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, r.jsx)(N.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-warning",
                                                        children: a,
                                                    }),
                                                    n.length > 0 &&
                                                        (0, r.jsx)("ul", {
                                                            className: cq.ck,
                                                            children: n.map((e, t) =>
                                                                (0, r.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, r.jsx)(N.E, {
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
    c4 = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, cD.JE)(),
            { ignoredFilenames: n, clearAssets: l, clearIgnoredFilenames: s, processAndUpsertAssets: i } = (0, eb.ds)(),
            { setDropHandler: d } = o.useContext(cJ),
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
                    (0, r.jsx)(N.E, {
                        variant: "text-md/normal",
                        children: "Drop files in this panel to begin preview.",
                    }),
                    (0, r.jsxs)("div", {
                        className: cq.sy,
                        children: [
                            (0, r.jsx)(b.d, { checked: e, onChange: (e) => t(e) }),
                            (0, r.jsx)(N.E, { variant: "text-md/normal", children: "Enable Preview" }),
                            (0, r.jsx)(eE.K, {
                                variant: "icon-only",
                                size: "sm",
                                onClick: cX,
                                icon: cS.c,
                                "aria-label": "Open preview instructions",
                            }),
                        ],
                    }),
                    (0, r.jsx)(c1, {}),
                    (0, r.jsx)(c2, {}),
                    (0, r.jsx)(c9, { clearAssets: l, clearIgnoredFiles: s }),
                    (0, r.jsx)(c3, { ignoredFiles: n, handleClearIgnoredFiles: s }),
                ],
            })
        );
    },
    c6 = () => {
        let [e, t] = o.useState("preview");
        return (0, r.jsxs)("div", {
            className: cq.kL,
            children: [
                (0, r.jsx)(cA.I, {
                    options: cQ,
                    value: e,
                    onChange: (e) => {
                        let { value: a } = e;
                        return t(a);
                    },
                    className: cq.Vj,
                    optionClassName: cq.UK,
                }),
                (0, r.jsx)(tJ.h, { size: 8 }),
                "preview" === e && (0, r.jsx)(c4, {}),
                "validate" === e && (0, r.jsx)(c7, {}),
                (0, r.jsx)(tJ.h, { size: 16 }),
            ],
        });
    },
    c5 = (e) => {
        let { children: t } = e,
            [a, n] = o.useState(() => () => {}),
            l = o.useMemo(() => ({ setDropHandler: (e) => n(() => e) }), []);
        return (0, r.jsx)(cJ.Provider, { value: l, children: (0, r.jsx)(cL, { onDrop: a, children: t }) });
    };
var ue = a(663803),
    ut = a(693477),
    ua = a(385815);
let un = () => {
    let e = (0, d.bG)([to.A], () => to.A.skipNumCategories);
    return (0, r.jsxs)("div", {
        className: ua.k,
        children: [
            (0, r.jsx)(N.E, { variant: "text-md/normal", children: "Hide first # of categories" }),
            (0, r.jsx)(ue.l, {
                value: e,
                onChange: (e) => {
                    (0, ut.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
};
var ul =
        (((n = {}).DEFAULT = "default"),
        (n.DEFAULT_WITH_ORB_SHELF = "default_with_orb_shelf"),
        (n.ORB_TAB = "orb_tab"),
        (n.FRAMES = "frames"),
        (n.FRAMES_PINNED = "frames_pinned"),
        n),
    us = a(295811),
    ui = a(172471);
let ur = () => {
        let e = (0, d.bG)([us.A], () => us.A.getShopHomeConfigOverride()),
            t = [
                { id: "none", label: "DISABLED (no override)", value: void 0 },
                ...Object.values(ul).map((e) => ({ id: e, label: e, value: e })),
            ];
        return (0, r.jsx)("div", {
            className: ui.kL,
            children: (0, r.jsx)(x.l, {
                label: "Shop Home Override",
                options: t,
                value: e,
                onSelectionChange: (e) => {
                    (0, ut.Or)(e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
        });
    },
    uo = () => {
        let [e, t] = o.useState(void 0);
        return (0, r.jsxs)("div", {
            className: E()(ui.kL, ui.fi),
            children: [
                (0, r.jsx)(g.k, {
                    fullWidth: !0,
                    label: "Shop Layout URL Override",
                    value: e,
                    onChange: (e) => ("" === e ? t(void 0) : t(e)),
                    placeholder: "https://cdn.discordapp.com/assets/content/...",
                }),
                (0, r.jsxs)("div", {
                    className: ui.o1,
                    children: [
                        (0, r.jsx)(p.$, {
                            variant: "critical-primary",
                            text: "Clear",
                            onClick: () => {
                                t(void 0), (0, ut.Aq)(void 0);
                            },
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Set",
                            onClick: () => (0, ut.Aq)("" !== e ? e : void 0),
                        }),
                    ],
                }),
            ],
        });
    },
    ud = (e) => {
        let { className: t } = e,
            a = Object.keys(nK.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
        return null == a
            ? null
            : (0, r.jsxs)("div", {
                  className: t,
                  children: [
                      (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Shop Marketing" }),
                      (0, r.jsx)("div", { style: { zIndex: 1 }, children: (0, r.jsx)(la, { items: [a] }) }),
                  ],
              });
    };
var uc = a(922529),
    uu = a(628917);
let um = () => {
        let e = (0, d.bG)([ld.A], () => ld.A.get("shop_disable_cache")),
            t = (0, d.bG)([ld.A], () => ld.A.get("shop_include_unpublished"));
        return (0, r.jsx)(c5, {
            children: (0, r.jsxs)("div", {
                className: uu.Lm,
                children: [
                    (0, r.jsxs)("div", {
                        className: uu.gf,
                        children: [
                            (0, r.jsx)(b.d, {
                                label: "Disable collectibles cache",
                                checked: e,
                                onChange: (e) => (0, lo.L)("shop_disable_cache", e),
                            }),
                            (0, r.jsx)(b.d, {
                                label: "Show unpublished collectibles",
                                checked: t,
                                onChange: (e) => (0, lo.L)("shop_include_unpublished", e),
                            }),
                        ],
                    }),
                    (0, r.jsx)(ud, { className: uu._l }),
                    (0, r.jsxs)("div", {
                        className: uu._l,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Shop Overrides" }),
                            (0, r.jsx)(ur, {}),
                            (0, r.jsx)(uc.A, { className: uu.yF }),
                            (0, r.jsx)(uo, {}),
                            (0, r.jsx)(uc.A, { className: uu.yF }),
                            (0, r.jsx)(un, {}),
                            (0, r.jsx)(uc.A, { className: uu.yF }),
                            (0, r.jsx)(c6, {}),
                        ],
                    }),
                ],
            }),
        });
    },
    uh = [
        { id: "unset", label: "Unset", value: dG.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
        { id: "all", label: "All", value: dG.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
        { id: "usersWithGame", label: "Users With Game", value: dG.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
        { id: "none", label: "None", value: dG.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
    ];
function up() {
    let e = o.useRef(null),
        t = d$.TA.useSetting();
    return (0, r.jsx)("div", {
        ref: e,
        className: E()(tN.nd, ai.n),
        children: (0, r.jsxs)("div", {
            className: ai.k,
            children: [
                (0, r.jsx)(T.D, { variant: "heading-lg/normal", children: "Settings" }),
                (0, r.jsx)(x.l, {
                    label: "Receive DMs In Game",
                    options: uh,
                    value: t,
                    onSelectionChange: d$.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var ux = a(278416),
    ug = a(220631);
function uv(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function ub(e) {
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
        (0, r.jsx)(c.Ip, { className: ug.Dx, children: (0, r.jsx)(a_, { data: n }) })
    );
}
function u_(e) {
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
                for (let e of n.preDispatches ?? []) ty.h.dispatch(e);
                ty.h.dispatch({ ...n.buildPayload(e), type: n.actionType }), i();
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
                for (let t of e.preDispatches ?? []) ty.h.dispatch(t);
                ty.h.dispatch({ ...e.buildPayload(t), type: e.actionType }), i();
            } catch (e) {
                s(e instanceof Error ? e.message : String(e));
            }
        }, [t, i]);
    return (0, r.jsxs)("div", {
        className: E()(ug.Dx, ug.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: ug.Vz,
                value: a,
                onChange: (e) => n(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != l && (0, r.jsx)("div", { className: ug.Xf, role: "alert", children: l }),
            (0, r.jsxs)("div", {
                className: ug.KA,
                children: [
                    (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "Apply", onClick: d }),
                    (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Refresh from store", onClick: i }),
                    t.__getLocalVarsEditConfig?.().getPurgeVars != null &&
                        (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Purge store", onClick: c }),
                ],
            }),
        ],
    });
}
let uf = [
    {
        key: "name",
        cellClassName: ug.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function uj(e) {
    let { store: t, initialHeight: a } = e,
        n = o.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: aE.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVars
                                ? (0, r.jsxs)("div", {
                                      className: ug.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(ub, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: aE.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(ub, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: aE.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVarsEditConfig
                                ? (0, r.jsxs)("div", {
                                      className: ug.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(u_, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: l, renderSelectedTab: s } = (0, aE.Ay)({ tabs: n }, []);
    return (0, r.jsxs)(aC, {
        className: ug.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(au.Ay, {
                className: E()(tN.jr, ug.nZ),
                children: [
                    (0, r.jsx)(au.Ay.Icon, { icon: ux.g, tooltip: t.getName() }),
                    (0, r.jsx)(au.Ay.Title, { children: t.getName() }),
                ],
            }),
            s({ store: t }),
        ],
    });
}
function uy() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = d.il.getAll(),
        l = o
            .useMemo(() => n.map((e) => ({ key: e._dispatchToken, store: e })).sort(uv), [n])
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
        className: E()(tN.nd, ug.nd),
        children: [
            (0, r.jsx)("div", {
                className: ug.KE,
                children: (0, r.jsx)(a8.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(tA, { columns: uf, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != c &&
                (0, r.jsx)(uj, { store: c, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, s),
        ],
    });
}
var uC = a(91871),
    uE = a.n(uC);
let uS = [
        {
            key: "id",
            cellClassName: nm.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: nm.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: nm.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    uN = [
        {
            id: "details",
            name: "Details",
            group: aE.fu.NONE,
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
                    d = aQ()(s);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(au.Ay, {
                            className: E()(tN.jr, nm.nZ),
                            children: [
                                (0, r.jsx)(au.Ay.Icon, { icon: a0.U, tooltip: t }),
                                (0, r.jsx)(au.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(nd, {
                            className: nm.ZK,
                            children: [
                                (0, r.jsx)(nc, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: s.toISOString(),
                                        title: (0, a6.i$)(d, "LLLL"),
                                        children: (0, a6.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, r.jsx)(nc, {
                                        name: "Guild ID",
                                        children: (0, r.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, r.jsx)(nc, {
                                    name: "Bucket",
                                    children: (0, r.jsx)("code", { children: a.bucket }),
                                }),
                                (0, r.jsx)(nc, {
                                    name: "Revision",
                                    children: (0, r.jsx)("code", { children: a.revision }),
                                }),
                                (0, r.jsx)(nc, { name: "Override", children: (0, r.jsx)(nu, { value: a.override }) }),
                                (0, r.jsx)(nc, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                                (0, r.jsx)(nc, { name: "Excluded", children: (0, r.jsx)(nu, { value: l }) }),
                                (0, r.jsx)(nc, { name: "Previously tracked", children: (0, r.jsx)(nu, { value: o }) }),
                                (0, r.jsx)(nc, { name: "Location", children: (0, r.jsx)("code", { children: i }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function uA() {
    let [e, t] = o.useState(""),
        a = o.useRef(null),
        n = (0, d.yK)([nr], () => nr.loggedTriggers),
        l = o.useMemo(
            () =>
                n
                    .filter((t) => 0 === e.length || uE()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [n, e],
        ),
        [s, i] = o.useState(void 0),
        c = l.find((e) => e.key === s),
        { TabBar: u, renderSelectedTab: m } = (0, aE.Ay)({ tabs: uN }, []),
        h = (0, d.bG)([nr], () => nr.trackTriggers),
        p = o.useCallback((e) => {
            ty.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        x = h ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: E()(tN.nd, nm.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nm.rh,
                children: [
                    (0, r.jsx)(lD.m, {
                        text: x,
                        children: (0, r.jsx)(eE.K, {
                            size: "sm",
                            variant: h ? "active" : "primary",
                            icon: h ? lw.E : lI.u,
                            "aria-label": x,
                            onClick: () => p(!h),
                        }),
                    }),
                    (0, r.jsx)(a8.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, r.jsx)(eE.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": aU.intl.string(aU.t.VkKicb),
                        icon: a2.u,
                        onClick: I.eY,
                    }),
                ],
            }),
            (0, r.jsx)(tA, { columns: uS, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != c &&
                (0, r.jsxs)(aC, {
                    className: nm.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(u, {}), m({ loggedTrigger: c })],
                }),
        ],
    });
}
var uk = a(512950),
    uD = a(324861),
    uT = a(243655);
let uI = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, uD.A)();
    return (0, r.jsx)("div", {
        className: uT.k,
        children: (0, r.jsxs)(m.n, {
            label: "Virtual Currency Configuration",
            description: "Click the button below to reset your onboarding state for Virtual Currency.",
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(p.$, {
                        text: "Reset Onboarding State",
                        onClick: () => {
                            e(), t(), (0, t7.pX)(H.BVt.APP);
                        },
                    }),
                }),
                (0, r.jsx)(uk.p, {
                    messageType: uk.Y.INFO,
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these",
                }),
            ],
        }),
    });
};
var uw = a(77729),
    uO = a(969341),
    uR = a(36934);
function uL() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, s] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        i = "processing" === l.status;
    return (0, r.jsx)(c.Ip, {
        className: tN.nd,
        children: (0, r.jsxs)("div", {
            className: uR.l7,
            children: [
                (0, r.jsx)(N.E, { variant: "text-lg/bold", children: "Batch Audio Processor" }),
                (0, r.jsx)(N.E, {
                    variant: "text-sm/normal",
                    children:
                        "Process wav files through the Discord audio ingest pipeline (WebRTC APM, Krisp, voice filters) and write output to wav files.",
                }),
                (0, r.jsxs)(k.B, {
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
                        (0, r.jsx)(p.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await uw.A.fileManager.showOpenDialog({ properties: ["openDirectory"] });
                                e.length > 0 && t(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)(k.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.k, { fullWidth: !0, value: a, onChange: n, placeholder: "Output directory" }),
                        (0, r.jsx)(p.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await uw.A.fileManager.showOpenDialog({
                                    properties: ["openDirectory", "createDirectory"],
                                });
                                e.length > 0 && n(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(p.$, {
                    variant: i ? "critical-primary" : "primary",
                    text: i ? "Cancel" : "Start Processing",
                    onClick: i
                        ? function () {
                              uO.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  s((e) => ({ ...e, status: "cancelled" }));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (s({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  uO.Ay.getMediaEngine().processBatchAudioFiles(
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
                    (0, r.jsxs)(k.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(N.E, {
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
                                            className: uR.TZ,
                                            children: (0, r.jsxs)(N.E, {
                                                variant: "text-xs/normal",
                                                className: e.success ? uR.$D : uR.uL,
                                                children: [e.success ? "OK" : "FAIL", " - ", e.filename],
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                            l.log.length > 20 &&
                                (0, r.jsxs)(N.E, {
                                    variant: "text-xs/normal",
                                    children: ["...and ", l.log.length - 20, " more"],
                                }),
                        ],
                    }),
            ],
        }),
    });
}
var uM = a(207898),
    uP = a.n(uM),
    uU = a(32880),
    uB = a(827343),
    uG = a(964486),
    uF = a(602674),
    uV = a(625841),
    u$ = a(74848),
    uW = a(731854),
    uH = a(573908);
function uz(e) {
    let { recording: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(N.E, { variant: "text-sm/normal", children: ["Duration: ", t.audioBuffer.duration] }),
            (0, r.jsxs)(N.E, {
                variant: "text-sm/normal",
                children: ["Num Channels: ", t.audioBuffer.numberOfChannels],
            }),
            (0, r.jsxs)(N.E, { variant: "text-sm/normal", children: ["Sample Rate: ", t.audioBuffer.sampleRate] }),
            (0, r.jsxs)(N.E, { variant: "text-sm/normal", children: ["Noise Suppression: ", t.suppression] }),
            (0, r.jsxs)(N.E, {
                variant: "text-sm/normal",
                children: ["Krisp Suppression Level: ", t.krispSuppressionLevel],
            }),
            (0, r.jsxs)(N.E, {
                variant: "text-sm/normal",
                children: ["Echo Cancellation: ", String(t.echoCancellation)],
            }),
        ],
    });
}
function uK(e) {
    let { recording: t, playing: a, onPlay: n, onStop: l } = e;
    return (0, r.jsx)(d9.N, {
        collapsibleContent: (0, r.jsx)(uz, { recording: t }),
        children: (e) => {
            let { onClick: s } = e;
            return (0, r.jsxs)(S.D, {
                onClick: s,
                children: [
                    (0, r.jsxs)(N.E, {
                        variant: "text-sm/bold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, r.jsx)(S.D, {
                        tag: "span",
                        onClick: (e) => {
                            e.stopPropagation(), a ? l() : n(t);
                        },
                        children: a ? (0, r.jsx)(lw.E, { size: "xxs" }) : (0, r.jsx)(lI.u, { size: "xxs" }),
                    }),
                    (0, r.jsx)(S.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, n, l;
                            e.stopPropagation(),
                                (a = new Blob([uP()(t.audioBuffer)], { type: "audio/wav" })),
                                (n = URL.createObjectURL(a)),
                                ((l = document.createElement("a")).href = n),
                                (l.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                l.click(),
                                URL.revokeObjectURL(n);
                        },
                        children: (0, r.jsx)(uU.s, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function uY() {
    let { name: e } = (0, u$.x5)(uW.oh.AUDIO_INPUT),
        [t, a] = o.useState(!1),
        [n, l] = o.useState([]),
        s = (0, d.bG)([uO.Ay], () => uO.Ay.getKrispSuppressionLevel()),
        [i, u] = o.useState(null),
        m = o.useRef(null),
        h = o.useRef(null),
        [p, g] = o.useState(0.5),
        {
            krispModels: v,
            krispModelOverride: _,
            inputMode: f,
            echoCancellation: j,
            autoThreshold: y,
            vadUseKrisp: C,
            vadKrispActivationThreshold: E,
            noiseCancellation: S,
            noiseSuppression: A,
            noiseSuppressionSupported: D,
            noiseCancellationSupported: T,
            noiseCancellationEnableStats: I,
            vadDuringPreProcess: w,
        } = (0, d.cf)([uO.Ay], () => ({
            krispModels: uO.Ay.getKrispModels(),
            krispModelOverride: uO.Ay.getKrispModelOverride(),
            echoCancellation: uO.Ay.getEchoCancellation(),
            autoThreshold: uO.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: uO.Ay.getModeOptions().vadUseKrisp,
            inputMode: uO.Ay.getMode(),
            vadKrispActivationThreshold: uO.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: uO.Ay.getNoiseCancellation(),
            noiseSuppression: uO.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: uO.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: uO.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: uO.Ay.getKrispEnableStats(),
            vadDuringPreProcess: uO.Ay.getModeOptions().vadDuringPreProcess,
        })),
        O = S ? "KRISP" : A ? "STANDARD" : "NONE",
        R = (0, uF.v)(),
        L = o.useCallback(() => {
            m.current?.stop(), (m.current = null), u(null);
        }, []);
    function M() {
        uO.Ay.getMediaEngine().stopRecordingRawSamples();
    }
    function P(e) {
        if ((t && M(), L(), null == R)) return;
        let a = R.createBufferSource();
        (a.buffer = e.audioBuffer),
            (h.current = R.createGain()),
            (h.current.gain.value = p),
            a.connect(h.current),
            h.current.connect(R.destination),
            (a.loop = !0),
            a.start(),
            (m.current = a),
            u(e);
    }
    o.useEffect(() => {
        L();
    }, [L]),
        (0, uG.l0)(() => {
            uB.A.setMode(uO.Ay.getMode(), { vadDuringPreProcess: null, vadKrispActivationThreshold: void 0 });
        });
    let U = [];
    return (
        T && U.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        D && U.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        U.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(c.Ip, {
            className: tN.nd,
            children: (0, r.jsxs)("div", {
                className: uH.l,
                children: [
                    (0, r.jsx)(N.E, { variant: "text-lg/bold", children: "Krisp Tester" }),
                    (0, r.jsx)(uV.U, {
                        label: "Input Device",
                        deviceType: uW.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, r.jsx)(x.l, {
                        label: "Noise Cancellation",
                        value: O,
                        onSelectionChange: (e) => {
                            uB.A.setNoiseCancellation("KRISP" === e), uB.A.setNoiseSuppression("STANDARD" === e);
                        },
                        options: U,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === O &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(cN.A, {
                                    label: "Krisp Suppression Level",
                                    initialValue: s,
                                    onValueChange: uB.A.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, r.jsx)(x.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: _,
                                    options: v.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        uB.A.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(b.d, {
                                    label: "Enable Stats",
                                    checked: I,
                                    onChange: (e) => uB.A.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    f === uW.TB.VOICE_ACTIVITY &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(b.d, {
                                    label: "Auto Threshold",
                                    checked: y,
                                    onChange: (e) => uB.A.setMode(uW.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                y &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(b.d, {
                                                label: "Use Krisp VAD",
                                                checked: C,
                                                onChange: (e) => uB.A.setMode(uW.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            C &&
                                                (0, r.jsx)(cN.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: E,
                                                    onValueChange: (e) =>
                                                        uB.A.setMode(uW.TB.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                }),
                                        ],
                                    }),
                                (0, r.jsx)(b.d, {
                                    label: "Run Before Processing",
                                    checked: w ?? !1,
                                    onChange: (e) => uB.A.setMode(uW.TB.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(b.d, {
                        label: "Echo Cancellation",
                        checked: j,
                        onChange: (e) => uB.A.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)(k.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(N.E, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(aZ.$n, {
                                color: t ? aZ.$n.Colors.RED : aZ.$n.Colors.BRAND,
                                onClick: t
                                    ? M
                                    : function () {
                                          L(),
                                              a(!0),
                                              uB.A.setLoopback("krisp_test", !0),
                                              uO.Ay.getMediaEngine().startRecordingRawSamples((t, n, i) => {
                                                  a(!1), uB.A.setLoopback("krisp_test", !1);
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
                                                          echoCancellation: j,
                                                          krispSuppressionLevel: s,
                                                      },
                                                  ]);
                                              });
                                      },
                                children: t ? "Stop Recording" : "Start Recording",
                            }),
                        ],
                    }),
                    (0, r.jsx)(cN.A, {
                        label: "Volume",
                        initialValue: p,
                        asValueChanges: function (e) {
                            null != h.current && ((h.current.gain.value = e), g(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, r.jsxs)(k.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(N.E, { variant: "text-sm/semibold", children: "Recordings" }),
                            n.map((e, t) =>
                                (0, r.jsx)(uK, { recording: e, playing: e === i, onPlay: P, onStop: L }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var uq = a(803306),
    uJ = a(243217),
    uQ = a(189213),
    uZ = a(340351),
    uX = a(935208),
    u0 = a(112848);
let u1 = [
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
function u2() {
    let [e, t] = o.useState(!1),
        a = (0, d.bG)([F.default], () => F.default.getCurrentUser()),
        n = (0, u0.Lh)(),
        l = (0, d.bG)([rA.A], () => rA.A.getPremiumTypeSubscription()),
        s = null != n ? (l8.VD[n]?.tenureReqNumMonths ?? 0) : 0,
        i = o.useCallback(
            async (e) => {
                let n = new Date();
                e > 0 ? n.setMonth(n.getMonth() - e) : n.setDate(n.getDate() - 7), n.setDate(n.getDate() - 2);
                let s = {
                    subscription_status: H.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: uX.default.fromTimestamp(n.getTime()),
                };
                t(!0),
                    await nw.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: s, rejectWithError: !1 }),
                    await (0, uq.eO)(a.id),
                    await (0, oY.hP)(),
                    t(!1);
            },
            [l, a],
        );
    if (null != a && null != l)
        return (0, r.jsx)(x.l, {
            label: "Tenure",
            hideLabel: !0,
            selectionMode: "single",
            disabled: e,
            value: s,
            options: u1,
            onSelectionChange: i,
        });
}
var u8 =
        (((l = {})[(l.DEFAULT = 0)] = "DEFAULT"),
        (l[(l.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (l[(l.FAILURE = 2)] = "FAILURE"),
        (l[(l.NONE = 3)] = "NONE"),
        l),
    u9 =
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
async function u3(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: n, paymentType: l, sendReminderEmail: s } = a;
    return (
        await nw.Bo.post({
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
var u7 = a(601107),
    u4 = a(142798);
let u6 = {
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
    u5 = {
        [u7.qf.UNKNOWN]: "Unknown",
        [u7.qf.ADMIN]: "Admin",
        [u7.qf.USER]: "User",
        [u7.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [u7.qf.DEFERRED_START]: "Deferred Start",
        [u7.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    me = [
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
function mt(e) {
    let { subscription: t, onClose: a, onUpdated: n, transitionState: l } = e,
        [s, i] = o.useState(aQ()()),
        [d, c] = o.useState(aQ()().format("HH:mm")),
        [u, h] = o.useState(!1),
        [p, x] = o.useState(void 0),
        g = async () => {
            if (null == s) return void x("Please select a target date");
            let [e, l] = d.split(":").map(Number),
                i = s.clone().hours(e).minutes(l).seconds(0).milliseconds(0);
            h(!0), x(void 0);
            try {
                await u3(t.id, u9.TIME_TRAVEL, { targetDate: i, paymentType: u8.DEFAULT, sendReminderEmail: !1 }),
                    n(),
                    a();
            } catch (e) {
                x(e.body?.message || e.message || "Failed to time travel");
            } finally {
                h(!1);
            }
        };
    return (0, r.jsx)(uQ.Modal, {
        transitionState: l,
        onClose: () => (a(), Promise.resolve()),
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: a },
            { text: "Time Travel", variant: "primary", onClick: g, disabled: u || null == s },
        ],
        children: (0, r.jsxs)(k.B, {
            gap: 16,
            children: [
                (0, r.jsx)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, r.jsx)(s0.J, { label: "Target Date", value: s, onSelect: i }),
                (0, r.jsx)(m.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, r.jsx)("input", {
                        type: "time",
                        value: d,
                        onChange: (e) => {
                            c(e.target.value);
                        },
                        className: u4.Qn,
                    }),
                }),
                (0, r.jsxs)(k.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(N.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, r.jsxs)(k.B, {
                            gap: 4,
                            children: [
                                (0, r.jsxs)(N.E, {
                                    variant: "text-xs/normal",
                                    className: u4.JX,
                                    children: ["Start: ", aQ()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(N.E, {
                                    variant: "text-xs/normal",
                                    className: u4.JX,
                                    children: ["End: ", aQ()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != p && (0, r.jsx)(A.w, { type: "critical", children: p }),
            ],
        }),
    });
}
function ma(e) {
    var t;
    let a,
        { subscription: n, onUpdated: l } = e,
        [s, i] = o.useState(!1),
        [d, c] = o.useState(!1),
        [u, h] = o.useState(!1),
        [g, v] = o.useState(!1),
        [b, _] = o.useState(null),
        f = (e) => {
            let t = new Date(e);
            return uX.default.fromTimestamp(t.getTime());
        },
        j = async (e) => {
            let { status: t = n.status, premiumStreakStart: a, endedAt: s } = e,
                i = {
                    subscription_status: t,
                    ...(null != a ? { premium_streak_started_at: f(a) } : null),
                    ...(null != s ? { ended_at: f(s) } : null),
                };
            await nw.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: i, rejectWithError: !1 }), l();
        },
        y = async () => {
            try {
                await u3(n.id, u9.RENEW, {
                    targetDate: aQ()(new Date()),
                    paymentType: u8.DEFAULT,
                    sendReminderEmail: !1,
                });
            } catch (e) {
                _(e.body?.message || e.message || "Failed to renew subscription");
            }
            l();
        },
        C = l8.hd[n.planIdFromItems]?.premiumType === l8.PremiumTypes.TIER_0,
        D = n.metadata?.ended_at,
        T = null != D ? new Date(D).toISOString().substring(0, 10) : "",
        I = [
            { id: "id", label: `ID: ${n.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = n.status), t in u6) ? u6[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        w = n.hasActiveTrial,
        O = n.metadata?.active_discount_id != null;
    return (
        w && I.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        O && I.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        n.status !== H.Dmq.ACTIVE &&
            I.push({
                id: "dates",
                label: `Dates: ${(0, a6.i$)(n.createdAt, "LL")} - ${(0, a6.i$)(n.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        n.status === H.Dmq.PAUSED &&
            I.push({
                id: "pause-reason",
                label: `Pause Reason: ${n.pauseReason in u5 ? u5[n.pauseReason] : `Unknown pause reason ${n.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: E()(se.Nr, C ? se.Qf : se.C1),
            children: (0, r.jsxs)(m.n, {
                label: `Type: ${null == ((a = n.planIdFromItems)) ? "No plan id" : a in l8.hd ? l8.hd[a].name : `Unknown plan id ${a}`}`,
                className: u4.lI,
                children: [
                    (0, r.jsx)(uZ.C, {
                        items: I,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    w &&
                        (0, r.jsxs)("div", {
                            className: u4.VK,
                            children: [
                                (0, r.jsxs)(S.D, {
                                    onClick: () => {
                                        h(!u);
                                    },
                                    className: u4.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(N.E, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, r.jsx)(l1.A, { direction: u ? l1.A.Directions.UP : l1.A.Directions.DOWN }),
                                    ],
                                }),
                                u &&
                                    (0, r.jsxs)("ul", {
                                        className: u4.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(N.E, { variant: "text-md/bold", children: "trial_id" }),
                                                    (0, r.jsx)(N.E, { variant: "text-sm/normal", children: n.trialId }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(N.E, {
                                                        variant: "text-md/bold",
                                                        children: "trial_ends_at",
                                                    }),
                                                    (0, r.jsx)(N.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            null != n.trialEndsAt
                                                                ? (0, a6.i$)(n.trialEndsAt, "LL")
                                                                : "N/A",
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    O &&
                        (0, r.jsxs)("div", {
                            className: u4.VK,
                            children: [
                                (0, r.jsxs)(S.D, {
                                    onClick: () => {
                                        v(!g);
                                    },
                                    className: u4.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(N.E, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, r.jsx)(l1.A, { direction: g ? l1.A.Directions.UP : l1.A.Directions.DOWN }),
                                    ],
                                }),
                                g &&
                                    (0, r.jsxs)("ul", {
                                        className: u4.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(N.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, r.jsx)(N.E, {
                                                        variant: "text-sm/normal",
                                                        children: n.metadata?.active_discount_id,
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(N.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_expires_at",
                                                    }),
                                                    (0, r.jsx)(N.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            n.metadata?.active_discount_expires_at != null
                                                                ? (0, a6.i$)(
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
                            className: u4.VK,
                            children: [
                                (0, r.jsxs)(S.D, {
                                    onClick: () => {
                                        i(!s);
                                    },
                                    className: u4.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(N.E, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, r.jsx)(l1.A, { direction: s ? l1.A.Directions.UP : l1.A.Directions.DOWN }),
                                    ],
                                }),
                                s &&
                                    (0, r.jsx)("ul", {
                                        className: u4.j3,
                                        children: Object.entries(n.metadata).map((e) => {
                                            let [t, a] = e;
                                            return (0, r.jsxs)(
                                                "li",
                                                {
                                                    children: [
                                                        (0, r.jsx)(N.E, { variant: "text-md/bold", children: t }),
                                                        (0, r.jsx)(N.E, { variant: "text-sm/normal", children: a }),
                                                    ],
                                                },
                                                t,
                                            );
                                        }),
                                    }),
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: u4.VK,
                        children: [
                            (0, r.jsxs)(S.D, {
                                onClick: () => {
                                    c(!d);
                                },
                                className: u4.Eh,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(N.E, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, r.jsx)(l1.A, { direction: d ? l1.A.Directions.UP : l1.A.Directions.DOWN }),
                                ],
                            }),
                            d &&
                                (0, r.jsxs)(k.B, {
                                    gap: 24,
                                    children: [
                                        (0, r.jsx)(x.l, {
                                            label: "Status",
                                            value: n.status,
                                            options: me,
                                            onSelectionChange: (e) => {
                                                j({ status: e });
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsxs)(k.B, {
                                                    gap: 12,
                                                    children: [
                                                        (0, r.jsx)(p.$, {
                                                            variant: "primary",
                                                            size: "sm",
                                                            text: "Renew Subscription",
                                                            onClick: (e) => y(),
                                                        }),
                                                        (0, r.jsx)(p.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, eA.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, r.jsx)(mt, {
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
                                                        className: u4.z3,
                                                        children: (0, r.jsx)(A.w, { type: "critical", children: b }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)(k.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(s0.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: aQ()(n.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => j({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(u2, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(s0.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== T ? aQ()(T) : void 0,
                                            onSelect: (e) => j({ endedAt: e.toISOString() }),
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
let mn = async () =>
        (
            await nw.Bo.get({
                url: H.Rsh.BILLING_SUBSCRIPTIONS,
                query: { include_inactive: !0, limit: 5 },
                rejectWithError: !1,
            })
        ).body.map((e) => uJ.A.createFromServer(e)),
    ml = [
        { id: "nitro-monthly", label: "Nitro Monthly", value: l8.gD.PREMIUM_MONTH_TIER_2 },
        { id: "nitro-yearly", label: "Nitro Yearly", value: l8.gD.PREMIUM_YEAR_TIER_2 },
        { id: "nitro-classic-monthly", label: "Nitro Classic Monthly", value: l8.gD.PREMIUM_MONTH_TIER_1 },
        { id: "nitro-classic-yearly", label: "Nitro Classic Yearly", value: l8.gD.PREMIUM_YEAR_TIER_1 },
        { id: "basic-monthly", label: "Basic Monthly", value: l8.gD.PREMIUM_MONTH_TIER_0 },
        { id: "basic-yearly", label: "Basic Yearly", value: l8.gD.PREMIUM_YEAR_TIER_0 },
        { id: "reverse-trial-1week", label: "Reverse Trial 1-week", value: l8.gd },
        { id: "reverse-trial-2week", label: "Reverse Trial 2-week", value: l8.Uk },
        { id: "nitro-squad-monthly", label: "Nitro Squad Monthly", value: l8.gD.PREMIUM_GROUP_MONTH },
    ];
function ms() {
    let e = (0, d.bG)([rA.A], () => rA.A.getPremiumTypeSubscription()),
        t = (0, d.bG)([F.default], () => F.default.getCurrentUser()),
        [a, n] = o.useState("511651880837840896"),
        [l, s] = o.useState([]),
        [i, u] = o.useState(!1),
        m = o.useCallback(async () => {
            try {
                u(!0), await (0, oY.hP)(), await (0, uq.eO)(t.id), s(await mn());
            } finally {
                u(!1);
            }
        }, [t]);
    o.useEffect(() => {
        m();
    }, [m]);
    let h = o.useMemo(() => l.filter((e) => e.status !== H.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [l]),
        g = async () => {
            await nw.Bo.post({ url: "/debug/subscription", body: { plan_id: a }, rejectWithError: !1 }), await m();
        },
        v = async () => {
            await nw.Bo.del({ url: "/debug/subscription", rejectWithError: !1 }), await m();
        };
    return (0, r.jsx)(c.Ip, {
        className: tN.nd,
        children: (0, r.jsxs)("div", {
            className: se.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: se.dL,
                    children: [
                        (0, r.jsx)(T.D, {
                            variant: "heading-lg/semibold",
                            className: tN.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, r.jsx)(eE.K, {
                            "aria-label": "Refresh",
                            icon: l0.f,
                            size: "sm",
                            variant: "icon-only",
                            disabled: i,
                            onClick: m,
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: E()([se.uW, se.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(x.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: ml,
                                    onSelectionChange: n,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Create Subscription",
                                    onClick: g,
                                }),
                            ],
                        }),
                }),
                null != e && (0, r.jsx)(ma, { subscription: e, onUpdated: m }),
                (0, r.jsx)(T.D, { variant: "heading-lg/semibold", className: tN.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: E()([se.uW, se.Uo]),
                    children: (0, r.jsx)(p.$, {
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
                                className: tN.wx,
                                children: "Previous Subscriptions",
                            }),
                            h.map((e) => (0, r.jsx)(ma, { subscription: e, onUpdated: m }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var mi = a(284009),
    mr = a.n(mi),
    mo = a(889137),
    md = a(412703),
    mc = a(440703),
    mu = a(267548),
    mm = a(668824),
    mh = a(695366),
    mp = a(359778),
    mx = a(507107),
    mg = a(801365),
    mv = a(792620),
    mb = a(241124),
    m_ = a(28082),
    mf = a(717695),
    mj = a(59350),
    my = a(127219),
    mC = a(882406),
    mE = a(291922),
    mS = a(317097),
    mN = a(452027),
    mA = a(922016),
    mk = a(714385),
    mD = a(359923);
let mT = function (e) {
    let { colorKey: t, value: a, onChange: n, title: l } = e,
        s = o.useRef(null);
    return (0, r.jsx)(mN.D, {
        label: l,
        children: (0, r.jsx)(mA.Y, {
            targetElementRef: s,
            renderPopout: (e) => (0, r.jsx)(d3.VN, { ...e, value: a, onChange: (e) => n(t, (0, mS.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(S.D, {
                    ...e,
                    innerRef: s,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: mD.O6,
                    style: { backgroundColor: a },
                    children: (0, r.jsx)(mk.d, { size: "xs", color: "currentColor", className: mD.WY }),
                }),
        }),
    });
};
var mI = a(247928);
let mw = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: n = !1 } = e;
    return (0, r.jsx)(mI.M, {
        children: (0, r.jsx)(mp.Z, {
            className: E()(mD.Rx, { [mD.aK]: n }),
            outline: n,
            children: (0, r.jsx)("div", {
                className: mD.AZ,
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
var mO = a(643374);
let mR = function (e) {
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
            (0, r.jsx)(mN.D, {
                label: s,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, r.jsx)(mO.A, {
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
    mL = function (e) {
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
var mM = a(890687);
let mP = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: n } = (0, mM.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
        l = [
            { id: "none", label: "NONE", value: null },
            ...n.map((e) => ({ id: e.id, label: e.config.messages.questName, value: e })),
        ];
    return (0, r.jsx)(x.l, {
        label: "Prefill with Quest",
        options: l,
        value: a,
        onSelectionChange: t,
        selectionMode: "single",
        fullWidth: !0,
    });
};
var mU = a(843282),
    mB = a(972886);
let mG = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    mF = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: n } = e;
        return (0, r.jsxs)(k.B, {
            gap: 20,
            children: [
                (0, r.jsx)(mU.Pw, {
                    label: "Task Type(s)",
                    className: mB.Z,
                    placeholder: "Select Task Preset",
                    options: mG,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, l, s, i, r;
                        return (
                            e ===
                            ((t = n.tasks),
                            (a = md.n.PLAY_ON_PLAYSTATION in t || md.n.PLAY_ON_XBOX in t),
                            (l = md.n.PLAY_ON_DESKTOP in t),
                            (s = md.n.STREAM_ON_DESKTOP in t),
                            (i = md.n.WATCH_VIDEO in t),
                            (r = md.n.PLAY_ACTIVITY in t),
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
                                        a[md.n.STREAM_ON_DESKTOP] = { type: md.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[md.n.PLAY_ON_DESKTOP] = { type: md.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        (a[md.n.PLAY_ON_PLAYSTATION] = {
                                            type: md.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[md.n.PLAY_ON_XBOX] = {
                                                type: md.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 4:
                                        (a[md.n.PLAY_ON_DESKTOP] = { type: md.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[md.n.PLAY_ON_PLAYSTATION] = {
                                                type: md.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[md.n.PLAY_ON_XBOX] = {
                                                type: md.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 2:
                                        a[md.n.WATCH_VIDEO] = {
                                            type: md.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[md.n.PLAY_ACTIVITY] = { type: md.n.PLAY_ACTIVITY, target: t };
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
                    value: String(a / nR.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= nR.A.Seconds.MINUTE;
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
var mV = a(818348);
let m$ = function () {
    let e = (0, q.Ay)();
    return (0, r.jsx)(mN.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(J.zy, {
                    theme: mV.NJ.LIGHT,
                    isSelected: e === mV.NJ.LIGHT,
                    onSelect: () => (0, dH.u_)({ theme: mV.NJ.LIGHT }),
                }),
                (0, r.jsx)(J.zy, {
                    theme: mV.NJ.DARK,
                    isSelected: e === mV.NJ.DARK,
                    onSelect: () => (0, dH.u_)({ theme: mV.NJ.DARK }),
                }),
            ],
        }),
    });
};
var mW =
    (((i = {})[(i.UNENROLLED = 0)] = "UNENROLLED"),
    (i[(i.ENROLLED = 1)] = "ENROLLED"),
    (i[(i.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (i[(i.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (i[(i.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (i[(i.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (i[(i.CLAIMED = 6)] = "CLAIMED"),
    i);
let mH = function (e) {
    let { onChange: t, value: a } = e;
    return (0, r.jsx)(x.l, {
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
var mz = a(545986);
let mK = ["png", "gif", "webp"],
    mY = [...mK, "jpg", "jpeg"],
    mq = Array.from(new Set([...mY, "gif", "mp4", "webm"]));
function mJ() {
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
let mQ = "1193992107035983872",
    mZ = {
        id: mQ,
        preview: !0,
        config: {
            id: mQ,
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
                        type: mc.l.REWARD_CODE,
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
                joinOperator: mm.K.AND,
                tasks: { [md.n.PLAY_ON_DESKTOP]: { type: md.n.PLAY_ON_DESKTOP, target: 300 } },
            },
            features: [],
            sharePolicy: mu.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function mX() {
    var e;
    let [t, n] = o.useState(mZ),
        l = o.useCallback((e) => {
            n({ ...e, preview: !0 });
        }, []),
        [s, i] = o.useState(mW.UNENROLLED),
        [d, u] = o.useState(!1),
        [m, h] = o.useState(!1),
        [x, g] = o.useState(null),
        v =
            ((e = t.config),
            (0, mo.YW)(e)
                .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
                .exhaustive());
    function _(e, a) {
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
                    (0, mo.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function f(e, a) {
        let n = t.config.taskConfigV2.tasks,
            s = n[md.n.WATCH_VIDEO];
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
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...n, [md.n.WATCH_VIDEO]: { ...s, assets: i } } },
            },
        });
    }
    function j(e, a) {
        if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
            var n, s;
            l({
                ...t,
                config:
                    ((n = t.config),
                    (s = { [e]: a }),
                    (0, mo.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, messages: { ...e.messages, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function y(e, a, n) {
        if ("name" === e || "nameWithArticle" === e) {
            var s, i;
            l({
                ...t,
                config:
                    ((s = t.config),
                    (i = { [e]: a }),
                    (0, mo.YW)(s)
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
        (0, mg.tU)(t.config) && (0, mz.hJ)(t, mx.uF.GIFT_INVENTORY_FOR_YOU, mx.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let S = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * nR.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        A = o.useMemo(() => md.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    mr()(!1 !== t.preview && null != t.preview, "Preview config must have property preview: true");
    let D = t.config.taskConfigV2.tasks[md.n.WATCH_VIDEO];
    return (0, r.jsxs)(c.Ip, {
        className: mD.kL,
        children: [
            (0, r.jsx)(T.D, { variant: "heading-lg/bold", className: mD.R_, children: "Quest Preview Tool" }),
            (0, r.jsx)("div", {
                className: mD.OA,
                children: (0, r.jsx)(mP, {
                    onSelect: function (e) {
                        g(e),
                            null == e ||
                                (i(
                                    (function (e) {
                                        if (null == e.userStatus) return mW.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return mW.CLAIMED;
                                        if (null != e.userStatus.completedAt) return mW.COMPLETED_100;
                                        let t = (0, mv.Yh)(e),
                                            a = t.progressSeconds,
                                            n = t.targetSeconds;
                                        return a / n >= 1
                                            ? mW.COMPLETED_100
                                            : a / n >= 0.75
                                              ? mW.COMPLETED_75
                                              : a / n >= 0.5
                                                ? mW.COMPLETED_50
                                                : a / n >= 0.25
                                                  ? mW.COMPLETED_25
                                                  : mW.ENROLLED;
                                    })(e),
                                ),
                                l(e));
                    },
                    quest: x,
                }),
            }),
            (0, r.jsx)(T.D, { variant: "heading-md/semibold", className: mD.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: mD.OA,
                children: (0, r.jsx)(mF, {
                    taskDuration: S,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        l({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)(T.D, { variant: "heading-md/semibold", className: mD.fV, children: "Messages" }),
            (0, r.jsxs)("div", {
                className: mD.OA,
                children: [
                    (0, r.jsx)(mL, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: j,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, r.jsx)(mL, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: j,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(mL, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: j,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    A &&
                        (0, r.jsx)(mL, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let n = t.config.taskConfigV2.tasks,
                                    s = n[md.n.WATCH_VIDEO];
                                if (null == s) return;
                                let i = { ...s.messages, [e]: a };
                                l({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...n, [md.n.WATCH_VIDEO]: { ...s, messages: i } },
                                        },
                                    },
                                });
                            },
                            initialValue: D?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)(T.D, { variant: "heading-md/semibold", className: mD.fV, children: "Assets" }),
            (0, r.jsxs)("div", {
                className: mD.OA,
                children: [
                    (0, r.jsx)(mR, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: _,
                        filters: mq,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, r.jsx)(mR, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: _,
                        filters: mq,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, r.jsx)(mR, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: _,
                        filters: mq,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(mR, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: _,
                        filters: mq,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, r.jsx)(mR, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: _,
                        filters: [...mY, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, r.jsx)(mR, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: _,
                        filters: [...mK, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    A &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(mR, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: f,
                                    filters: mq,
                                    initialValue: D?.assets.video.url,
                                }),
                                (0, r.jsx)(mR, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: f,
                                    filters: mq,
                                    initialValue: D?.assets.videoLowRes?.url,
                                }),
                                (0, r.jsx)(mR, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: f,
                                    filters: mY,
                                    initialValue: D?.assets.video.thumbnail,
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
                                className: mD.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: mD.OA,
                                children: [
                                    (0, r.jsx)(mL, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => y(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(mL, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => y(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== mc.l.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(mR, {
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
                                                                (0, mo.YW)(s)
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
                                            filters: mq,
                                            initialValue: e.asset,
                                        }),
                                    (0, r.jsxs)(k.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(T.D, {
                                                variant: "heading-sm/semibold",
                                                children: "Claim Modal",
                                            }),
                                            (0, r.jsx)(p.$, {
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
            (0, r.jsx)(T.D, { variant: "heading-md/semibold", className: mD.fV, children: "Colors & Quest States" }),
            (0, r.jsxs)("div", {
                className: mD.OA,
                children: [
                    (0, r.jsxs)("div", {
                        className: mD.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(mT, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: C,
                                value: t.config.colors.primary,
                            }),
                            (0, r.jsx)(mT, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: C,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: mD.OA, children: (0, r.jsx)(m$, {}) }),
                    (0, r.jsx)(mH, {
                        onChange: function (e) {
                            switch ((i(e), e)) {
                                case mW.UNENROLLED:
                                    l({ ...t, userStatus: null });
                                    break;
                                case mW.ENROLLED:
                                    l({ ...t, userStatus: mJ({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case mW.COMPLETED_25:
                                    l({
                                        ...t,
                                        userStatus: mJ({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * S,
                                        }),
                                    });
                                    break;
                                case mW.COMPLETED_50:
                                    l({
                                        ...t,
                                        userStatus: mJ({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * S,
                                        }),
                                    });
                                    break;
                                case mW.COMPLETED_75:
                                    l({
                                        ...t,
                                        userStatus: mJ({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * S,
                                        }),
                                    });
                                    break;
                                case mW.COMPLETED_100:
                                    l({
                                        ...t,
                                        userStatus: mJ({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: S,
                                        }),
                                    });
                                    break;
                                case mW.CLAIMED:
                                    l({
                                        ...t,
                                        userStatus: mJ({
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
            (0, r.jsx)(T.D, { variant: "heading-lg/bold", className: mD.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: mD.$$,
                children: [
                    (0, r.jsxs)(mw, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: mD.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, r.jsx)(N.E, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: mD.ok,
                                        children: (0, r.jsx)(mb.jY, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, r.jsx)(mf.A, { children: (0, r.jsx)(m_.Y, { quest: t }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(mw, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(mb.jY, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, r.jsx)(mE.A, {
                                    quest: t,
                                    className: mD.d,
                                    questContent: mx.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: mx.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(mw, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Channel Call Header" }),
                            t.userStatus?.claimedAt != null &&
                                (0, r.jsx)(N.E, {
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, r.jsx)("div", {
                                className: mD.l4,
                                children: (0, r.jsx)(mb.jY, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, r.jsx)("div", {
                                        className: mD.Jr,
                                        children: (0, r.jsx)(mj.A, {
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
                        className: mD.NY,
                        children: (0, r.jsx)(b.d, {
                            label: "Is Participating:",
                            checked: d,
                            onChange: function (e) {
                                u(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(mw, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            m
                                ? (0, r.jsx)(my.l, { questId: t.id })
                                : (0, r.jsx)(
                                      mC.R,
                                      {
                                          quest: t,
                                          location: mx.uF.QUESTS_EMBED,
                                          sourceQuestContent: mx.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: mD.NY,
                        children: (0, r.jsx)(b.d, { label: "Invalid Quests Embed:", checked: m, onChange: h }),
                    }),
                    A &&
                        (0, r.jsxs)(mw, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Video Player" }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        let e = performance.now();
                                        (0, eA.openModalLazy)(async () => {
                                            let { default: n } = await Promise.all([
                                                a.e("92868"),
                                                a.e("77375"),
                                                a.e("19580"),
                                                a.e("44842"),
                                            ]).then(a.bind(a, 834135));
                                            return (a) =>
                                                (0, r.jsx)(n, {
                                                    ...a,
                                                    openStartClockTime: e,
                                                    videoSessionId: "fake-quest-session-id",
                                                    questId: t.id ?? "fake-quest-id",
                                                    overrideQuest: t,
                                                    autoplay: !0,
                                                    sourceQuestContent: mx.uF.INTERNAL_PREVIEW_TOOL,
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
class m0 extends o.Component {
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
                  className: mD.TA,
                  children: [
                      (0, r.jsx)(mh.E, { className: mD.Yw }),
                      (0, r.jsx)(T.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(p.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, r.jsx)(mp.Z, {
                              className: mD.Fx,
                              children: (0, r.jsx)("code", { className: mD.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, r.jsx)(mX, {}, t);
    }
}
var m1 = a(845584),
    m2 = a(839214),
    m8 = a(77138),
    m9 = a(450827),
    m3 = a(626584),
    m7 = a(174768),
    m4 = a(205761),
    m6 = a(860071),
    m5 = a(696451),
    he = a(860689),
    ht = a(926140);
let ha = new m3.A("SearchDebugUtils");
function hn() {
    ha.info("--------------------------");
}
function hl() {
    let e = m7.A.getProps();
    ha.info("START Quick Switcher State"),
        ha.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((ha.info(`Result Type: ${e.type}`), e.type)) {
                case ht.rD.GUILD:
                    ha.info(`guild id: ${e.record.id}`);
                    break;
                case ht.rD.TEXT_CHANNEL:
                case ht.rD.VOICE_CHANNEL:
                    ha.info(`channel type: ${e.record.type}`),
                        ha.info(`channel id: ${e.record.id}`),
                        ha.info(`name: ${e.record.name}`);
                    break;
                case ht.rD.DM:
                    ha.info(`channel type: ${e.record.type}`),
                        ha.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (ha.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = F.default.getUser(e);
                                null != t &&
                                    (ha.info(`recipient username: ${t.username}`),
                                    ha.info(`recipient global name: ${K.Ay.getGlobalName(t)}`),
                                    ha.info(`recipient nickname: ${tX.A.getNickname(t.id)}`));
                            }));
                    break;
                case ht.rD.GROUP_DM:
                    ha.info(`channel type: ${e.record.type}`),
                        ha.info(`channel id: ${e.record.id}`),
                        ha.info(`name: ${(0, tQ.m1)(e.record, F.default, tX.A)}`),
                        e.record.isGroupDM() &&
                            (ha.info(`default name: ${(0, tQ.ks)(e.record, F.default, tX.A)}`),
                            ha.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = F.default.getUser(e);
                                null != t &&
                                    (ha.info(`recipient username: ${t.username}`),
                                    ha.info(`recipient global name: ${K.Ay.getGlobalName(t)}`),
                                    ha.info(`recipient nickname: ${tX.A.getNickname(t.id)}`));
                            }));
                    break;
                case ht.rD.USER:
                    ha.info(`user id: ${e.record.id}`),
                        ha.info(`username: ${e.record.username}`),
                        ha.info(`global name: ${K.Ay.getGlobalName(e.record)}`),
                        ha.info(`nickname: ${tX.A.getNickname(e.record.id)}`),
                        ha.info(`guild nicknames: ${m5.Ay.getNicknames(e.record.id)}`);
            }
            ha.info(`frecency score: ${m4.A.getScoreWithoutFetchingLatest(e.record.id)}`), hn();
        }),
        ha.info("END Quick Switcher State\n");
}
async function hs() {
    ha.info("START User Search Worker State");
    let e = await m9.A.requestDebugState();
    null == e
        ? ha.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
              let [t, a] = e;
              ha.info(`id: ${t}`),
                  ha.info(`username: ${a.username}`),
                  ha.info(`global name: ${a.globalName}`),
                  ha.info(`nickname: ${a.friendNickname}`),
                  Object.entries(a.nicknames).forEach((e) => {
                      let [t, a] = e;
                      ha.info(`guild id: ${t}`), ha.info(`guild nickname: ${a}`);
                  }),
                  hn();
          }),
          ha.info("END User Search Worker State\n"));
}
async function hi() {
    let e = await m9.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        a = F.default.getUsers(),
        n = new Set(Object.keys(t)),
        l = uX.default.keys(a),
        s = [];
    return (
        l.forEach((e) => {
            n.has(e) || s.push(e);
        }),
        s
    );
}
async function hr(e) {
    let t = await m9.A.requestDebugState(),
        a = null != t ? JSON.parse(t.users)[e] : null,
        n = aR.A.getGuildIds(),
        l = [];
    n.forEach((t) => {
        let a = m5.Ay.getMember(t, e);
        null != a && l.push(a);
    });
    let s = m6.A.getDebugState(e);
    return { user: F.default.getUser(e), searchWorkerUser: a, guildMembers: l, guildMemberRequests: s };
}
var ho = a(929948);
function hd(e) {
    let { isUploading: t, isSuccess: a, errorMessage: n, onClick: l, title: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.$, { variant: "primary", onClick: l, loading: t, disabled: t, text: t ? "Uploading…" : s }),
            null != n &&
                (0, r.jsx)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: ho.qS,
                    children: n,
                }),
            a &&
                (0, r.jsx)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: ho.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let hc = (0, m2.D)(() => ({
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
function hu() {
    let e = hc.useField("includeFrecency"),
        t = hc.useField("includeFriends"),
        a = hc.useField("includeDMs"),
        n = hc.useField("includeGDMs"),
        l = hc.useField("includeQuickSwitcherState"),
        s = hc.useField("includeUserSearchWorkerState"),
        i = hc.useField("isUploading"),
        d = hc.useField("isSuccess"),
        c = hc.useField("errorMessage"),
        u = o.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: n,
                includeQuickSwitcherState: l,
                includeUserSearchWorkerState: s,
                isUploading: i,
            } = hc.getState();
            if (!i)
                try {
                    let i, r, o, d, c, u, m, h, p, x, g, v;
                    hc.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((i = tX.A.getFriendIDs()),
                            ha.info("START Discord Friends"),
                            i.forEach((e) => {
                                let t = F.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    n = K.Ay.getGlobalName(t),
                                    l = tX.A.getNickname(t.id),
                                    s = m5.Ay.getNicknames(t.id);
                                ha.info(`username: ${a}`),
                                    ha.info(`global name: ${n}`),
                                    ha.info(`nickname: ${l}`),
                                    ha.info(`guild nicknames: ${s}`),
                                    hn();
                            }),
                            ha.info("END Discord Friends\n")),
                        a &&
                            ((r = tZ.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                e.isGroupDM() && o.push(e), e.isDM() && d.push(e);
                            }),
                            ha.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, tQ.m1)(e, F.default, tX.A),
                                    a = (0, tQ.ks)(e, F.default, tX.A);
                                ha.info(`id: ${e.id}`),
                                    ha.info(`name: ${t}`),
                                    ha.info(`default name: ${a}`),
                                    ha.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = F.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = K.Ay.getGlobalName(t),
                                            l = tX.A.getNickname(t.id),
                                            s = m5.Ay.getNicknames(t.id);
                                        ha.info(`username: ${a}`),
                                            ha.info(`global name: ${n}`),
                                            ha.info(`nickname: ${l}`),
                                            ha.info(`guild nicknames: ${s}`),
                                            hn();
                                    });
                            }),
                            ha.info("END Logging Group DM Channels\n"),
                            ha.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, tQ.m1)(e, F.default, tX.A);
                                ha.info(`id: ${e.id}`), ha.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = F.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = K.Ay.getGlobalName(n),
                                    i = tX.A.getNickname(n.id);
                                ha.info(`username: ${l}`),
                                    ha.info(`global name: ${s}`),
                                    ha.info(`nickname: ${i}`),
                                    hn();
                            }),
                            ha.info("END Logging DM Channels\n")),
                        n &&
                            ((c = tZ.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                e.isGroupDM() && u.push(e), e.isDM() && m.push(e);
                            }),
                            ha.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, tQ.m1)(e, F.default, tX.A),
                                    a = (0, tQ.ks)(e, F.default, tX.A);
                                ha.info(`id: ${e.id}`),
                                    ha.info(`name: ${t}`),
                                    ha.info(`default name: ${a}`),
                                    ha.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = F.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = K.Ay.getGlobalName(t),
                                            l = tX.A.getNickname(t.id),
                                            s = m5.Ay.getNicknames(t.id);
                                        ha.info(`username: ${a}`),
                                            ha.info(`global name: ${n}`),
                                            ha.info(`nickname: ${l}`),
                                            ha.info(`guild nicknames: ${s}`),
                                            hn();
                                    });
                            }),
                            ha.info("END Logging Group DM Channels\n"),
                            ha.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, tQ.m1)(e, F.default, tX.A);
                                ha.info(`id: ${e.id}`), ha.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = F.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = K.Ay.getGlobalName(n),
                                    i = tX.A.getNickname(n.id);
                                ha.info(`username: ${l}`),
                                    ha.info(`global name: ${s}`),
                                    ha.info(`nickname: ${i}`),
                                    hn();
                            }),
                            ha.info("END Logging DM Channels\n")),
                        e &&
                            ((h = m4.A.getFrequentlyWithoutFetchingLatest()),
                            (p = []),
                            (x = []),
                            (g = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, he.fh)(e)
                                    ? p.push(e)
                                    : e.isDM()
                                      ? g.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : x.push(e);
                            }),
                            ha.info("START Frecency"),
                            ha.info("Guilds"),
                            p.forEach((e) => {
                                let t = m4.A.getScoreWithoutFetchingLatest(e.id);
                                ha.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            hn(),
                            ha.info("DM Channels"),
                            g.forEach((e) => {
                                let t = m4.A.getScoreWithoutFetchingLatest(e.id);
                                ha.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            hn(),
                            ha.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = m4.A.getScoreWithoutFetchingLatest(e.id);
                                ha.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    ha.info(`default name: ${(0, tQ.ks)(e, F.default, tX.A)}`),
                                    ha.info(`name: ${(0, tQ.m1)(e, F.default, tX.A)}`);
                            }),
                            hn(),
                            ha.info("Guild Channels"),
                            x.forEach((e) => {
                                let t = m4.A.getScoreWithoutFetchingLatest(e.id);
                                ha.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            hn(),
                            ha.info("END Frecency\n")),
                        l && hl(),
                        s && hs(),
                        await (0, m8.a)(H.Umv.WEB_APP),
                        hc.setState({ isSuccess: !0, errorMessage: null });
                } catch (t) {
                    let e = new m1.LG(t);
                    hc.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    hc.setState({ isUploading: !1 });
                }
        }, []);
    return (0, r.jsxs)(m.n, {
        label: "Debug Logs Snapshot",
        description:
            "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
        children: [
            (0, r.jsx)(b.d, {
                label: "Frecency",
                description:
                    "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
                checked: e,
                onChange: () => hc.setState({ includeFrecency: !e }),
            }),
            (0, r.jsx)(b.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => hc.setState({ includeFriends: !t }),
            }),
            (0, r.jsx)(b.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => hc.setState({ includeDMs: !a }),
            }),
            (0, r.jsx)(b.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => hc.setState({ includeGDMs: !n }),
            }),
            (0, r.jsx)(b.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: l,
                onChange: () => hc.setState({ includeQuickSwitcherState: !l }),
            }),
            (0, r.jsx)(b.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: s,
                onChange: () => hc.setState({ includeUserSearchWorkerState: !s }),
            }),
            (0, r.jsx)(hd, {
                isUploading: i,
                isSuccess: d,
                errorMessage: c,
                onClick: u,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let hm = (0, m2.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function hh() {
    let e = hm.useField("userIds"),
        t = hm.useField("isLoading"),
        a = hm.useField("isSuccess"),
        n = hm.useField("errorMessage"),
        l = hm.useField("lastRunAt"),
        s = o.useCallback(async () => {
            hm.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await hi();
                hm.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                hm.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                hm.setState({ isLoading: !1 });
            }
        }, []),
        i = o.useMemo(
            () =>
                e.map((e) => {
                    let t = F.default.getUser(e),
                        a = null != t ? K.Ay.getName(t) : "Unknown";
                    return (0, r.jsx)(
                        "div",
                        {
                            className: ho.J1,
                            children: (0, r.jsx)(N.E, { variant: "text-md/normal", children: `${a} (${e})` }),
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
                (0, r.jsx)(p.$, { onClick: s, text: "Diff User State", loading: t, disabled: t }),
                (0, r.jsxs)("div", {
                    className: ho.N6,
                    children: [
                        null != n &&
                            (0, r.jsx)(N.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: ho.qS,
                                children: n,
                            }),
                        a &&
                            e.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(N.E, { variant: "text-md/normal", children: `Last run at: ${l}` }),
                                    (0, r.jsx)(N.E, {
                                        variant: "text-md/normal",
                                        children: "User IDs missing from Worker:",
                                    }),
                                    (0, r.jsx)("div", { className: ho.uk, children: i }),
                                ],
                            }),
                        a &&
                            0 === e.length &&
                            (0, r.jsx)(N.E, { variant: "text-md/normal", children: "No users missing from Worker" }),
                    ],
                }),
            ],
        }),
    });
}
let hp = (0, m2.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function hx() {
    let e = hp.useField("isRecording"),
        t = hp.useField("isUploading"),
        a = hp.useField("isSuccess"),
        n = hp.useField("errorMessage"),
        l = o.useRef([]),
        s = o.useRef(""),
        i = o.useCallback(() => {
            let { results: e, query: t } = m7.A.getProps();
            (l.current !== e || s.current !== t) && ((l.current = e), (s.current = t), hl());
        }, []);
    o.useEffect(() => {
        if (e) return m7.A.addChangeListener(i), () => m7.A.removeChangeListener(i);
    }, [i, e]);
    let d = o.useCallback(async () => {
        let { isUploading: e } = hp.getState();
        if (!e)
            try {
                hp.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, m8.a)(H.Umv.WEB_APP),
                    hp.setState({ isSuccess: !0, errorMessage: null });
            } catch (t) {
                let e = new m1.LG(t);
                hp.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                hp.setState({ isUploading: !1 });
            }
    }, []);
    return (0, r.jsxs)(m.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, r.jsx)(uk.p, {
                messageType: uk.Y.INFO,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, r.jsxs)(lz.e, {
                children: [
                    (0, r.jsx)(p.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => hp.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(hd, {
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
var hg = a(145497);
let hv = (0, m2.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function hb(e) {
    let { title: t, guildIds: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: ho.J1,
                children: (0, r.jsx)(N.E, { variant: "text-sm/normal", children: t }),
            }),
            (0, r.jsxs)("div", {
                className: ho.uk,
                children: [
                    0 === a.length &&
                        (0, r.jsx)("div", {
                            className: ho.J1,
                            children: (0, r.jsx)(N.E, { variant: "text-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = aR.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: ho.J1,
                                      children: [
                                          (0, r.jsx)(hg.Ay, { guild: t, iconSize: 16 }),
                                          (0, r.jsx)(N.E, { variant: "text-sm/normal", children: t.name }),
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
function h_(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: n, guildMembers: l, guildMemberRequests: s } = t,
        i = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(sw.y, { size: "sm", color: ek.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(mh.E, { size: "sm", color: ek.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, r.jsxs)("div", {
        className: ho.N6,
        children: [
            (0, r.jsxs)("div", {
                className: ho.J1,
                children: [
                    i({ ok: null != a }),
                    (0, r.jsx)(N.E, {
                        variant: "text-sm/normal",
                        children: null != a ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != a &&
                (0, r.jsx)("div", {
                    className: ho.uk,
                    children: (0, r.jsx)("div", {
                        className: ho.J1,
                        children: (0, r.jsx)(N.E, { variant: "text-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: ho.J1,
                children: [
                    i({ ok: null != n }),
                    (0, r.jsx)(N.E, {
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
                    className: ho.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: ho.J1,
                            children: (0, r.jsx)(N.E, {
                                variant: "text-sm/normal",
                                children: `username: ${n.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: ho.J1,
                            children: (0, r.jsx)(N.E, {
                                variant: "text-sm/normal",
                                children: `global name: ${n.globalName ?? "—"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: ho.J1,
                            children: (0, r.jsx)(N.E, { variant: "text-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: ho.uk,
                            children: [
                                0 === Object.keys(n.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: ho.J1,
                                        children: (0, r.jsx)(N.E, { variant: "text-sm/normal", children: "None" }),
                                    }),
                                Object.entries(n.nicknames).map((e) => {
                                    let [t, a] = e,
                                        n = aR.A.getGuild(t),
                                        l = tZ.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: ho.J1,
                                            children: [
                                                null != n && (0, r.jsx)(hg.Ay, { guild: n, iconSize: 16 }),
                                                null != n &&
                                                    (0, r.jsx)(N.E, { variant: "text-sm/normal", children: n.name }),
                                                null == n &&
                                                    null != l &&
                                                    (0, r.jsx)(N.E, {
                                                        variant: "text-sm/normal",
                                                        children: (0, tQ.m1)(l, F.default, tX.A),
                                                    }),
                                                (0, r.jsx)(N.E, { variant: "text-sm/normal", children: ` (${t})` }),
                                                null != a &&
                                                    "" !== a &&
                                                    (0, r.jsx)(N.E, { variant: "text-sm/normal", children: ` - ${a}` }),
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
                className: ho.J1,
                children: [
                    i({ ok: l.length > 0 }),
                    (0, r.jsx)(N.E, {
                        variant: "text-sm/normal",
                        children: l.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            l.length > 0 &&
                (0, r.jsx)("div", {
                    className: ho.uk,
                    children: l.map((e) => {
                        let t = aR.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: ho.J1,
                                children: [
                                    (0, r.jsx)(hg.Ay, { guild: t, iconSize: 16 }),
                                    (0, r.jsxs)(N.E, {
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
                className: ho.J1,
                children: [
                    (0, r.jsx)(d8.m, { size: "sm" }),
                    (0, r.jsx)(N.E, { variant: "text-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != s &&
                (0, r.jsxs)("div", {
                    className: ho.uk,
                    children: [
                        (0, r.jsx)(hb, { title: "Pending Guild Member Requests:", guildIds: s.pendingRequestGuildIds }),
                        (0, r.jsx)(hb, { title: "Sent Guild Member Requests:", guildIds: s.sentRequestGuildIds }),
                        (0, r.jsx)(hb, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: s.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function hf() {
    let e = o.useCallback((e) => {
            hv.setState({ userId: e, state: null });
        }, []),
        t = o.useCallback(async () => {
            let { userId: e, loading: t } = hv.getState();
            if (!t && null != e) {
                hv.setState({ loading: !0, error: null });
                try {
                    let t = await hr(e);
                    hv.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new m1.LG(t);
                    hv.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    hv.setState({ loading: !1 });
                }
            }
        }, []),
        a = hv.useField("loading");
    return (0, r.jsxs)("div", {
        className: ho.$n,
        children: [
            (0, r.jsx)(g.k, { placeholder: "User ID", onChange: e }),
            (0, r.jsx)(p.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function hj() {
    let e = hv.useField("state"),
        t = hv.useField("error");
    return (0, r.jsxs)(m.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, r.jsx)(hf, {}),
            null != t &&
                (0, r.jsx)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: ho.qS,
                    children: t,
                }),
            null != e && (0, r.jsx)(h_, { userState: e }),
        ],
    });
}
function hy() {
    return (0, r.jsxs)(c.Ip, {
        className: ho.nd,
        children: [
            (0, r.jsx)(hx, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(hu, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(hj, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(hh, {}),
        ],
    });
}
var hC = a(761508),
    hE = a(599147),
    hS = a(808411),
    hN = a(624716),
    hA = a(398590),
    hk = a(3258),
    hD = a(467680),
    hT = a(52822),
    hI = a(642153);
let hw = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    hO = {
        "virtual-currency": function () {
            return (0, r.jsxs)(hT.Hq, {
                label: "Open New Revenue Storybook",
                direction: "vertical",
                children: [
                    (0, r.jsx)(N.E, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        style: { marginBottom: "8px" },
                        children: "This section is deprecated. Use button to open the new Revenue Storybook instead.",
                    }),
                    (0, r.jsx)(p.$, {
                        onClick: () => {
                            var e;
                            return (
                                (e = hD.RevenuePlaygroundCollectionId.VIRTUAL_CURRENCY),
                                void (hk.PlaygroundStore.setState({ selectedCollection: e, selectedStory: null }),
                                (0, hA.id)(H.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: () =>
            (0, r.jsxs)("div", { children: [(0, r.jsx)(hE.o, {}), (0, r.jsx)(hS.A, {}), (0, r.jsx)(hN.A, {})] }),
    };
function hR() {
    let [e, t] = o.useState("virtual-currency"),
        a = o.useMemo(() => hO[e], [e]);
    return (0, r.jsxs)("div", {
        className: E()(tN.nd, hI.kL),
        children: [
            (0, r.jsx)(hC.V, {
                className: hI.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: hw.map((e) => (0, r.jsx)(hC.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, r.jsx)(c.Ar, { children: (0, r.jsx)("div", { className: hI.Qs, children: (0, r.jsx)(a, {}) }) }),
        ],
    });
}
var hL = a(718446),
    hM = a(858897),
    hP = a(355097);
let hU = (0, m2.D)(() => ({ urlString: "", error: null })),
    hB = Object.entries(hP.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function hG() {
    let [e, t] = o.useState(),
        a = hU.useField("urlString"),
        n = hU.useField("error"),
        l = o.useCallback(() => {
            let e = hU.getField("urlString");
            if (null == e || "" === e) return void hU.setState({ error: "URL is required" });
            let t = (0, hL.parseSettingsUrl)({ path: e });
            ((0, hL.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? hU.setState({ error: "String did not match expected format" })
                : (0, hM.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, r.jsxs)(m.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, r.jsx)(lp.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: hB,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = hP.od[e].split("/");
                        hU.setState({ urlString: H.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, r.jsx)(g.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => hU.setState({ urlString: e, error: null }),
            }),
            (0, r.jsxs)(lz.e, {
                children: [
                    (0, r.jsx)(p.$, {
                        variant: "primary",
                        onClick: l,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(p.$, {
                        variant: "secondary",
                        onClick: () => (0, a4.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != n && (0, r.jsx)(N.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var hF = a(780964);
let hV = (0, m2.D)(() => ({ setting: hF.X.ACCOUNT_PANEL }));
function h$() {
    let e = hV.useField("setting"),
        t = o.useCallback(() => {
            (0, hM.openUserSettings)(e);
        }, [e]),
        a = o.useMemo(() => Object.values(hF.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, r.jsxs)(m.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, r.jsx)(lp.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => hV.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, r.jsx)(p.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var hW = a(963935),
    hH = a(74612),
    hz = a(53181);
function hK(e) {
    let { title: t, initExpanded: a, highlightMode: n = "none", children: l } = e,
        [s, i] = o.useState(a),
        d = o.useCallback(() => {
            i(!s);
        }, [s]),
        c = "migrated" === n || "migrated-root" === n ? void 0 : "status-warning",
        u = (e) => (0, r.jsx)(N.E, { variant: e, color: c, children: t });
    return null == l
        ? (0, r.jsx)("div", { className: hz.NF, children: u("text-md/normal") })
        : (0, r.jsxs)("div", {
              className: hz.NF,
              children: [
                  (0, r.jsxs)(S.D, {
                      className: hz.jr,
                      onClick: d,
                      children: [
                          u("text-md/bold"),
                          (0, r.jsx)(l1.A, {
                              direction: s ? l1.A.Directions.DOWN : l1.A.Directions.RIGHT,
                              className: hz.D,
                          }),
                      ],
                  }),
                  s && (0, r.jsx)("div", { className: hz.m4, children: l }),
              ],
          });
}
function hY(e) {
    let { setting: t, depth: a, inheritedHighlightMode: n } = e,
        l = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case hW.Z6.ROOT:
                    return "migrated-root";
                case hW.Z6.SECTION:
                case hW.Z6.PANEL:
                case hW.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, n),
        s = "migrated" === l ? "migrated" : void 0,
        i = null;
    return (
        (0, hW.nW)(t) &&
            t.layout.length > 0 &&
            (i = t.layout.map((e) => (0, r.jsx)(hY, { setting: e, depth: a + 1, inheritedHighlightMode: s }, e.key))),
        (0, r.jsx)(hK, { title: t.key, initExpanded: a <= 2, highlightMode: l, children: i })
    );
}
function hq() {
    let { node: e } = (0, B.Ay)(hH.D, ""),
        t = (0, B.KA)();
    return (0, r.jsxs)(m.n, {
        label: "Settings Tree",
        children: [
            (0, r.jsx)(b.d, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: t,
                onChange: B.jL,
            }),
            (0, r.jsx)(hY, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var hJ = a(168803);
function hQ() {
    return (0, r.jsxs)(c.Ip, {
        className: hJ.n,
        children: [
            (0, r.jsx)(h$, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(hG, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(hq, {}),
        ],
    });
}
function hZ() {
    return o.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: aE.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(nf, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: aE.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(uA, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: aE.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(uy, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: aE.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(lV, {}),
            },
        ];
        return (
            ad.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: aE.fu.SHOP, render: () => (0, r.jsx)(um, {}) }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: aE.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(o5, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: aE.fu.SHOP,
                    render: () => (0, r.jsx)(tb, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: aE.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, r.jsx)(cv, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: aE.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(lH, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: aE.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(dA.Ay, {}),
                }),
                e.push({
                    id: "age_verification",
                    name: "Age Verification",
                    group: aE.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(aq, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: aE.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(lZ, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: aE.fu.GAMES, render: () => (0, r.jsx)(oH, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: aE.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(sX, {}),
                }),
                e.push({
                    id: "detected_games",
                    name: "Detected Games",
                    group: aE.fu.GAMES,
                    render: () => (0, r.jsx)(ly, {}),
                }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: aE.fu.GAMES, render: () => (0, r.jsx)(up, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: aE.fu.GAMES,
                    render: () => (0, r.jsx)(aF, {}),
                }),
                e.push({
                    id: "slayer_storefront",
                    name: "Slayer Storefront",
                    group: aE.fu.GAMES,
                    render: () => (0, r.jsx)(ao, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: aE.fu.USERS,
                    render: () => (0, r.jsx)(hy, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: aE.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(y, {}) })),
            e.push({
                id: "rive",
                name: "Rive",
                group: aE.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(cj, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: aE.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag"],
                render: () => (0, r.jsx)(iw, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: aE.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rl, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: aE.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(i1, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: aE.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(nz, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: aE.fu.UI, render: () => (0, r.jsx)(lu, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: aE.fu.UI,
                render: () => (0, r.jsx)(d2, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: aE.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(sm, { devSettingsCategory: ac.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: aE.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(ry, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: aE.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(sm, { devSettingsCategory: ac.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: aE.fu.USERS, render: () => (0, r.jsx)(dB, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: aE.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(rI, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: aE.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(rd, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: aE.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(i5, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: aE.fu.USERS,
                tags: ["friends"],
                render: () => (0, r.jsx)(aH, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: aE.fu.USERS,
                tags: ["channels"],
                render: () => (0, r.jsx)(nH, {}),
            }),
            ad.A.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: aE.fu.USERS,
                    render: () => (0, r.jsx)(tY, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: aE.fu.USERS,
                    render: () => (0, r.jsx)(t3, {}),
                })),
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: aE.fu.DCF, render: () => (0, r.jsx)(lr, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: aE.fu.DCF, render: () => (0, r.jsx)(n0, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: aE.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(iJ, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: aE.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up"],
                render: () => (0, r.jsx)(dT, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: aE.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(rH, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: aE.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(dg, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: aE.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(ms, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: aE.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, r.jsx)(sl, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: aE.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, r.jsx)(s3, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: aE.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(uY, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: aE.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(uL, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: aE.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(iz, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: aE.fu.BOOSTING, render: () => (0, r.jsx)(sd, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: aE.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(i8, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: aE.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(hQ, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: aE.fu.QUESTS,
                render: () => (0, r.jsx)(t5, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: aE.fu.QUESTS,
                render: () => (0, r.jsx)(uI, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: aE.fu.BILLING,
                render: () => (0, r.jsx)(hR, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: aE.fu.QUESTS,
                render: () => (0, r.jsx)(m0, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: aE.fu.USERS,
                render: () => (0, r.jsx)(d5, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: aE.fu.USERS,
                render: () => (0, r.jsx)(nI, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: aE.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(lN, {}),
            }),
            e
        );
    }, []);
}
