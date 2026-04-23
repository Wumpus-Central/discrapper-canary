a.d(t, { x: () => hQ }), a(321073);
var n,
    l,
    i,
    s,
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
        [i, s] = o.useState(1),
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
                                    value: i,
                                    onSelectionChange: s,
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
                                j.Ts({ type: f.Gy.GAME_EVENT, eventType: n, importance: i, title: y, description: E });
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
    I = a(811893),
    T = a(534514),
    D = a(538064),
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
function X(e) {
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
                        i = t === e.name;
                    return (0, r.jsx)(
                        J.S4,
                        { onSelect: () => a(e), style: { background: l }, name: e.name, isSelected: i },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
var Z = a(696157),
    ee = a(95701),
    et = a(331884);
function ea(e) {
    let { selected: t, nameplate: a } = e,
        n = (0, et.i)(),
        l = new ee.cq({ id: "0", type: H.rbe.DM, name: "self", guild_id: "0", recipients: [n.id] });
    return (0, r.jsx)(Z.th, { selected: t, channel: l, user: n, nameplate: a });
}
var en = a(698638),
    el = a(877203);
function ei() {
    let [e, t] = (0, o.useState)(!1),
        [a, n] = (0, o.useState)(!1),
        [l, i] = (0, o.useState)(null),
        { node: s } = (0, B.Ay)(G.k, ""),
        d = (0, V.Ay)((e) => e.toolsCache),
        { setToolsCache: c, removeToolsCache: u } = (0, V.DE)(),
        { setImgCache: m } = (0, V.TW)(),
        h = (0, o.useCallback)(
            (e) => {
                let t = d[e];
                null != t
                    ? i({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : i((t) =>
                          null == t ? { previewToolKey: e, palette: $.Wj, skuId: "0" } : { ...t, previewToolKey: e },
                      );
            },
            [d],
        ),
        x = (0, o.useCallback)((e) => {
            i((t) => (null == t ? null : { ...t, palette: e }));
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
                            e && (0, r.jsx)(U.A, { node: s }),
                            a &&
                                (0, r.jsx)(X, {
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
                    (0, r.jsx)(es, { nameplate: l }, l?.palette?.name),
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
function es(e) {
    let { nameplate: t } = e,
        [a, n] = (0, o.useState)(320),
        l = (0, o.useRef)(null),
        i = (0, o.useRef)(null),
        s = (0, o.useRef)(null),
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
                        null != i.current && (t.removeEventListener("mousemove", i.current), (i.current = null)),
                            null != s.current && (t.removeEventListener("mouseup", s.current), (s.current = null));
                    };
                (i.current = a), (s.current = n), t.addEventListener("mousemove", a), t.addEventListener("mouseup", n);
            },
            [u],
        );
    return (
        (0, o.useEffect)(
            () => () => {
                null != i.current && (d.current.removeEventListener("mousemove", i.current), (i.current = null)),
                    null != s.current && (d.current.removeEventListener("mouseup", s.current), (s.current = null));
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
    eI = a(231723),
    eT = a(900686),
    eD = a(986687),
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
        { layerData: i } = (0, eL.A)({ skuId: "debug", layers: l.effects });
    return (0, r.jsx)(eM.p, { profileEffect: l, layerData: i, skuId: "debug" });
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
            i = t === ef.qH.REDUCED_MOTION,
            s = i ? eG : eB.A,
            o = (0, r.jsx)(eN.N, {
                theme: n,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("img", { src: s, alt: "", className: E()(eU.aM, e), "aria-hidden": !0 }),
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
                i
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
            [l, i] = o.useState(!0),
            s = o.useRef({}),
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
            I = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            D = (e, t) => {
                let a = I(t);
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
                                      s.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = I(e);
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
                                      s.current.thumbnail = e;
                                  },
                                  onChange: (e) => D(ef.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(ex.A, {
                                  ref: (e) => {
                                      s.current.static = e;
                                  },
                                  onChange: (e) => D(ef.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(ex.A, {
                                  ref: (e) => {
                                      s.current.reducedMotion = e;
                                  },
                                  onChange: (e) => D(ef.qH.REDUCED_MOTION, e),
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
                                                    transitionState: eI.ip.ENTERED,
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
                                              (0, r.jsx)(eD.A, {
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
                                                  onClick: () => s.current.animated?.activateUploadDialogue(),
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
                                          className: eU.q6,
                                          children: (0, r.jsx)("div", {
                                              className: eU.nM,
                                              children: (0, r.jsx)(p.$, {
                                                  variant: "primary",
                                                  text: "Replay Animation",
                                                  onClick: () => {
                                                      i(!1), setTimeout(() => i(!0), 100);
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
                                                                  s.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let a;
                                                                  null != (a = I(e)) &&
                                                                      (0, ef.Mz)(a, (e) => {
                                                                          b((n) => {
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
                                                          className: E()(eU.nM, eU._N),
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
        i = o.useRef(null),
        { categories: s } = (0, ev.A)(),
        d = o.useMemo(() => (0, eg.Wj)(s), [s]),
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
                let i = JSON.parse(atob(l));
                (i.skuId = (0, eh.A)()), t(i), (0, eb.GF)("Profile Effect (maybe??) imported!");
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
                                        (0, r.jsx)(ex.A, { ref: i, onChange: x, multiple: !1 }),
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
    eX = a(289873),
    eZ = a(478016),
    e0 = a(565645),
    e1 = a(7584),
    e2 = a(47360),
    e8 = a(207803),
    e7 = a(84540),
    e3 = a(836602),
    e9 = a(999291),
    e6 = a(576622),
    e4 = a(841702),
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
function ti() {
    let e = (0, d.bG)([F.default], () => F.default.getCurrentUser()),
        t = (0, e9.Ay)(e?.id);
    o.useEffect(() => {
        e?.id != null && (0, e6.A)(e.id);
    }, [e?.id]);
    let { purchases: a, isFetchingPurchases: n } = (0, e4.Bf)(),
        l = o.useMemo(() => (0, eg.MG)(a, new Map()), [a]),
        [{ pendingProfileFrame: i }, s] = (0, d.yK)([e3.A], () => [e3.A.getPendingChanges(), e3.A.showNotice()]),
        c = void 0 === i ? t?.profileFrame : i,
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
                0 === l.length && n && (0, r.jsx)(eX.y, {}),
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
                                                icon: null == c ? eZ.U : void 0,
                                                disabled: null == c,
                                                onClick: () => (0, e7.p)({ profileFrame: null }),
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
                                                          icon: c?.skuId === e.skuId ? eZ.U : void 0,
                                                          disabled: c?.skuId === e.skuId,
                                                          onClick: () => (0, e7.p)({ profileFrame: e }),
                                                      }),
                                                  },
                                                  e.skuId,
                                              );
                                    }),
                                ],
                            }),
                            s && (0, r.jsx)(e2.A, {}),
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
var ts = a(702841),
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
        let e = (0, ts.bG)([F.default], () => F.default.getCurrentUser()),
            t = (0, ts.bG)([to.A], () => to.A.categories),
            a = (0, ts.bG)([td.A], () => td.A.purchases),
            n = (0, ts.bG)([to.A], () => to.A.lastSuccessfulFetch),
            l = t.size > 0 && a.size > 0 && null != n,
            { isFetching: i, categories: s } = (0, e4.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: l }),
            d = l ? t : s,
            c = l || (!i && d.size > 0),
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
        i)
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
                                        icon: I.t,
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
                null != w.A.lastOpenSubTabId && (0, D.Jt)({ lastOpenSubTabId: null });
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
                                return (0, r.jsx)(ei, {});
                            case 3:
                                return (0, r.jsx)(ti, {});
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
    let { columns: t, data: a, className: n, rowClassName: l, onClickRow: i, selectedRowKey: s, rowHeight: d = 40 } = e,
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
                    u = E()(tN.jD, { [tN.wD]: o === s, rowClassName: l });
                return (0, r.jsx)(
                    S.D,
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
var tk = a(409626),
    tI = a(692969),
    tT = a(760751),
    tD = a(403362),
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
        let i = a[(0, tL.$)(l)];
        return (0, r.jsxs)(
            "li",
            {
                className: tB.p,
                children: [
                    (0, r.jsx)(tG, { type: l.author_type, id: l.author_id }),
                    !i && (0, r.jsx)(N.E, { variant: "text-md/normal", children: "Expired or no matching presence" }),
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
        i =
            ((e = a?.entries?.map((e) => e.content)),
            Object.keys((t = eR().groupBy(e, (e) => e.content_type))).map((e) => {
                let a = t[e];
                return { key: `${e}`, type: a[0].content_type, entries: a };
            })),
        s = (0, d.bG)([tO.A], () => tO.A.getFeedState(tU.X1.GLOBAL_FEED)?.loading === !0),
        [u, m] = o.useState(""),
        h = (0, d.bG)(
            [tT.A, tC.A],
            () => (parseInt(u) > 0 ? u : (tT.A.searchGamesByName(u)[0] ?? tC.A.getApplicationByName(u)?.id)),
            [u],
        ),
        x = (0, tI.A)({ applicationId: h, location: "DevToolsContentInventory", source: tk.Ob.DevTools }),
        v = Object.entries(tj.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        b = (0, tE.A)(v).filter(tD.Vq);
    return (0, r.jsx)("div", {
        className: tN.nd,
        children: (0, r.jsxs)(c.Ip, {
            className: tH.Qs,
            children: [
                (0, r.jsxs)(k.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(N.E, { variant: "text-md/semibold", children: "Inventory" }),
                        i.length > 0 && (0, r.jsx)(tA, { columns: tz, data: i }),
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
                            loading: s,
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
        a = (0, tI.A)({ applicationId: t.id, location: "DevToolsContentInventory", source: tk.Ob.DevTools });
    return (0, r.jsx)(S.D, {
        onClick: a,
        children: (0, r.jsx)(N.E, { variant: "text-xs/normal", color: "text-muted", children: t.name }),
    });
};
var tJ = a(696986),
    tQ = a(47167),
    tX = a(734057),
    tZ = a(994500),
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
    t7 = [
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
            hasMoreToLoad: i,
            isLoadingComplete: s,
        } = (0, ts.cf)([t0.A], () => ({
            isLoading: t0.A.isLoading,
            hasLoadedEver: t0.A.hasLoadedEver,
            hasPreloaded: t0.A.hasPreloaded,
            hasMoreToLoad: t0.A.hasMoreToLoad,
            isLoadingComplete: t0.A.isLoadingComplete,
        })),
        o = (0, ts.bG)([t0.A], () => t0.A.currentRequestAnalyticsPayload),
        d = (0, ts.cf)([t0.A], () => t0.A.getChannelInfoMap()),
        u = (0, ts.cf)([tX.A], () => {
            let e = {};
            return (
                Object.entries(d).forEach((t) => {
                    let [a] = t,
                        n = tX.A.getChannel(a);
                    e[a] = n ?? null;
                }),
                e
            );
        }),
        m = (0, ts.cf)([tX.A], () =>
            t.reduce((e, t) => {
                let a = tX.A.getChannel(t);
                return (e[t] = a ?? null), e;
            }, {}),
        ),
        h = (0, ts.bG)([t0.A], () => t0.A.getInboxMessages()),
        p = (0, ts.bG)([t0.A], () => t0.A.getDevOverrides().navOnClick);
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
                                    channelName: null != a ? (0, tQ.m1)(a, F.default, tZ.A) : "",
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
                        (0, r.jsxs)("div", { children: ["Has More To Load: ", i ? "✅" : "❌"] }),
                        (0, r.jsxs)("div", { children: ["Is Loading Complete: ", s ? "✅" : "❌"] }),
                        (0, r.jsxs)("div", { children: ["Last Loading Trigger: ", o?.loadingTrigger] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, r.jsxs)("div", { children: ["Total Channels: ", Object.keys(d).length] }),
                        (0, r.jsx)(tA, {
                            columns: t7,
                            data: Object.entries(d).map((e) => {
                                let t,
                                    [a, n] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = u[a]) ? (0, tQ.m1)(t, F.default, tZ.A) : "",
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
var t9 = a(976860),
    t6 = a(829219),
    t4 = a(988483);
let t5 = function () {
    return (0, r.jsxs)("div", {
        className: t4.k,
        children: [
            (0, r.jsx)(N.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, r.jsx)(p.$, {
                onClick: () => {
                    (0, t6.Ov)(), (0, t9.pX)(H.BVt.QUEST_HOME);
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
    al = a(533406),
    ai = a(115093),
    as = a(11039);
let ar = window.GLOBAL_ENV.RELEASE_CHANNEL === ai.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function ao() {
    let e = (0, an.i)((e) => e.overrideApplicationId),
        t = (0, an.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        [n, l] = o.useState(ar),
        [i, s] = o.useState(H.FYj),
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
                e ? v(i) : v(null);
            },
            [i, v],
        ),
        f = (0, d.bG)([aa.A], () => null != aa.A.testModeApplicationId),
        j = o.useCallback((e) => {
            e ? (0, eA.openModal)((e) => (0, r.jsx)(at.A, { ...e })) : ae.cL();
        }, []),
        y = (0, tI.A)({
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
            (0, al.B)();
        }, []);
    return (0, r.jsx)("div", {
        className: E()(tN.nd, as.n),
        children: (0, r.jsxs)("div", {
            className: as.k,
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
                    value: i,
                    onChange: s,
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
        i = o.useRef(null),
        [s, d] = o.useState(n);
    return (0, r.jsxs)("div", {
        ref: i,
        className: aj.kL,
        style: { minHeight: l, height: s },
        children: [
            (0, r.jsx)(ay, { resizableNode: i, minHeight: l, onResize: d }),
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
    aI = a(487431),
    aT = a(328153),
    aD = a(905552),
    aw = a(546183),
    aO = a(134861),
    aR = a(71393),
    aL = a(967198),
    aM = a(157257),
    aP = a(985018),
    aU = a(311350),
    aB = a(325126);
function aG() {
    var e;
    let t,
        a,
        n = o.useRef(null),
        { analyticsLocations: l } = (0, aN.Ay)(tr.A.DEV_TOOLS),
        [i, s] = o.useState(""),
        c = (0, d.bG)([aL.A], () => aL.A.getGuildId()),
        u = (0, d.bG)([aR.A], () => aR.A.getGuild(c)),
        m = u?.gameApplicationIds ?? [],
        h = (0, tE.A)(m).filter((e) => null != e),
        x = (0, d.bG)([aT.Ay, aM.A], () => (0, aD.A)(aT.Ay, aM.A)),
        b = (0, tE.h)(i),
        _ = (0, aA.g)(b),
        f = (0, d.yK)(
            [tC.A],
            () => b?.linkedGames?.map((e) => tC.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        j = (0, ak.RD)(b, { allowedFlows: [ak._M.RPC], debug: !0 }),
        y = (0, ak.RD)(b, { allowedFlows: [ak._M.WEB], debug: !0 }),
        C = (0, d.bG)([aO.A], () => null != _ && aO.A.isConnected(_.id)),
        S = (0, ak.RD)(b, { debug: !0 }),
        { canDeauthorize: A, deauthorize: k } =
            ((e = b?.id),
            (t = (0, d.bG)([aw.default], () => aw.default.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && aS.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: n,
        className: E()(tN.nd, aB.nd),
        children: [
            (0, r.jsxs)("div", {
                className: aB.kL,
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
                                                            onClick: () => s(e.id),
                                                            variant: i === e.id ? "primary" : "secondary",
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
                className: aB.kL,
                children: [
                    (0, r.jsx)(T.D, { variant: "heading-lg/normal", children: "Application" }),
                    (0, r.jsx)(g.k, { label: "Application ID", value: i, onChange: s }),
                    null != x && null != x.id
                        ? (0, r.jsx)(p.$, {
                              onClick: () => s(x.id),
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
                className: aB.kL,
                children: [
                    (0, r.jsx)(T.D, { variant: "heading-lg/normal", children: "Authorization" }),
                    (0, r.jsx)(aI.VT, {
                        overallStatus: j.debug.isSubscribedToAuthorizeRequest
                            ? aI.nW.OVERALL_GOOD
                            : C
                              ? aI.nW.WARN
                              : aI.nW.OVERALL_BAD,
                        name: aP.intl.string(aU.default.AGLx00),
                        steps: [
                            {
                                status: C ? aI.nW.GOOD : aI.nW.BAD,
                                text: aP.intl.string(aU.default.kxF9br),
                                description: C ? null : aP.intl.string(aU.default.PFxxJa),
                                learnMoreLink: C
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: j.debug.isSubscribedToAuthorizeRequest
                                    ? aI.nW.GOOD
                                    : C
                                      ? aI.nW.WARN
                                      : aI.nW.BAD,
                                text: aP.intl.string(aU.default.S94dzs),
                                description:
                                    j.debug.isSubscribedToAuthorizeRequest || !C
                                        ? null
                                        : aP.intl.string(aU.default.aTULMB),
                                learnMoreLink:
                                    j.debug.isSubscribedToAuthorizeRequest || !C
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: S.chosenFlow === ak._M.RPC,
                    }),
                    (0, r.jsx)(aI.VT, {
                        overallStatus: y.debug.hasConnectionEntrypointUrl ? aI.nW.OVERALL_GOOD : aI.nW.OVERALL_BAD,
                        name: aP.intl.string(aU.default.K3ObrU),
                        steps: [
                            {
                                status: y.debug.hasConnectionEntrypointUrl ? aI.nW.GOOD : aI.nW.BAD,
                                text: aP.intl.string(aU.default["8a7IrV"]),
                                description: y.debug.hasConnectionEntrypointUrl
                                    ? aP.intl.formatToPlainString(aU.default["9iLeL2"], {
                                          url: y.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: S.chosenFlow === ak._M.WEB,
                    }),
                    (0, r.jsx)(aI.Sy, {
                        status: S.hasAlreadyLinked ? aI.nW.OVERALL_GOOD : aI.nW.OVERALL_BAD,
                        text: aP.intl.string(aP.t["Vu/zmQ"]),
                    }),
                    0 === S.debug.validFlows.length &&
                        (0, r.jsx)(N.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: aP.intl.string(aU.default.eg0mNa),
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
                            className: aB.kL,
                            children: [
                                (0, r.jsx)(T.D, { variant: "heading-lg/normal", children: "Reward Configuration" }),
                                (0, r.jsx)("div", {
                                    className: aB.Nr,
                                    children: (0, r.jsxs)("div", {
                                        className: aB.Tc,
                                        children: [
                                            null != b.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, r.jsx)("img", {
                                                    src: b.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: aB.L8,
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
var aF = a(427358),
    aV = a(465153);
let a$ = [
    {
        key: "user",
        cellClassName: aV.iL,
        render(e) {
            let { user: t, key: a } = e;
            return t?.username ?? a;
        },
    },
    {
        key: "affinity",
        renderHeader: () => (0, r.jsx)(N.E, { variant: "text-sm/semibold", children: "COMMUNICATION AFFINITY" }),
        cellClassName: aV.nz,
        render(e) {
            let { affinity: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "vcProbability",
        renderHeader: () => (0, r.jsx)(N.E, { variant: "text-sm/semibold", children: "VOICE AFFINITY" }),
        cellClassName: aV.nz,
        render(e) {
            let { vcProbability: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "isFriend",
        renderHeader: () => (0, r.jsx)(N.E, { variant: "text-sm/semibold", children: "IS FRIEND" }),
        cellClassName: aV.nz,
        render(e) {
            let { isFriend: t } = e;
            return t.toString();
        },
    },
];
function aW() {
    let e = (0, d.yK)([aF.A, F.default], () =>
        aF.A.getUserAffinities().map((e) => {
            let { otherUserId: t, communicationProbability: a, vcProbability: n, isFriend: l } = e;
            return { user: F.default.getUser(t), affinity: a, vcProbability: n, isFriend: l, key: t };
        }),
    );
    return 0 === e.length ? null : (0, r.jsx)(tA, { className: tN.nd, columns: a$, rowClassName: aV.nM, data: e });
}
var aH = a(139716),
    az = a(847599),
    aK = a(282621);
function aY() {
    return (0, r.jsx)("div", {
        className: E()(tN.nd, aK.k),
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                (0, r.jsx)(v.c, { gap: 16 }),
                (0, r.jsxs)("div", {
                    className: aK.h,
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
                                aH.A.showAgeVerificationGetStartedModal({ entryPoint: az.q1.DEV_TOOLS_QUICK_ACTIONS }),
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var aq = a(989349),
    aJ = a.n(aq),
    aQ = a(862482),
    aX = a(624479),
    aZ = a(555704),
    a0 = a(285796),
    a1 = a(241326),
    a2 = a(892547),
    a8 = a(297413),
    a7 = a(379078),
    a3 = a(704554),
    a9 = a(957565),
    a6 = a(58703),
    a4 = a(80703),
    a5 = a(495544);
let ne = 0,
    nt = [],
    na = 0,
    nn = [],
    nl = !1;
class ni extends d.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(a5.default, ad.A);
    }
    get loggedEvents() {
        return nt;
    }
    get loggedEventsVersion() {
        return na;
    }
    get loggedTriggers() {
        return nn;
    }
    get trackTriggers() {
        return nl;
    }
}
let ns = new ni(ty.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        ad.A.isDeveloper &&
            (nt.push({
                key: (ne++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, a4.d)(n) : a5.default.getId(),
                timestamp: new Date(),
            }),
            na++,
            nt.length > 500 && (nt = nt.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: l, location: i, previouslyTracked: s } = e;
        !ad.A.isDeveloper ||
            (nl &&
                (nn = [
                    ...nn,
                    {
                        key: (0, eh.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: n,
                        excluded: l,
                        location: i,
                        previouslyTracked: s,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                nn.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        nl = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (nt = []), na++, (nn = []);
    },
});
var nr = a(658675);
function no(e) {
    let { className: t, children: a } = e;
    return (0, r.jsx)("dl", { className: E()(tN.qo, t), children: a });
}
let nd = (e) => {
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
                (0, r.jsx)("dt", { className: tN.Bz, children: t }),
                (0, r.jsxs)("dd", {
                    className: tN.Nw,
                    children: [
                        a,
                        null != n
                            ? (0, r.jsx)(S.D, {
                                  tag: "span",
                                  className: tN.nH,
                                  onClick: () => (0, a9.C)(n, () => i(!0)),
                                  children: l
                                      ? (0, r.jsx)(eZ.U, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(aX.T, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
};
function nc(e) {
    let { value: t } = e;
    return (0, r.jsx)(nr.P, { checked: t });
}
var nu = a(733657);
let nm = [
    {
        key: "event",
        cellClassName: nu.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "location",
        cellClassName: nu.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function nh(e) {
    let { children: t } = e;
    return (0, r.jsx)(c.Ip, { className: nu._D, children: (0, r.jsx)("dl", { children: t }) });
}
function np(e) {
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
            className: nu.fY,
            children: [
                (0, r.jsx)("dt", { className: nu.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(S.D, {
                    tag: "span",
                    className: nu.nH,
                    onClick: () => (0, a9.C)(JSON.stringify(n), () => i(!0)),
                    children: l
                        ? (0, r.jsx)(eZ.U, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(aX.T, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let nx = new Set(["client_performance_cpu", "client_performance_memory"]),
    ng = [
        {
            id: "details",
            name: "Details",
            group: aE.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: n, fingerprint: l },
                        onClose: i,
                        filteredEvents: s,
                    } = e,
                    o = F.default.getUser(l),
                    d = aJ()(n);
                return (0, r.jsxs)("div", {
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(au.Ay, {
                            className: E()(tN.jr, nu.nZ),
                            children: [
                                (0, r.jsx)(au.Ay.Icon, { icon: aZ.U, tooltip: t }),
                                (0, r.jsxs)(au.Ay.Title, {
                                    wrapperClassName: nu.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(S.D, {
                                            tag: "span",
                                            className: nu.KE,
                                            onClick: () => (0, a9.C)(t),
                                            children: (0, r.jsx)(aX.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(au.Ay.Icon, {
                                    icon: aX.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, a9.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: n, fingerprint: l, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(au.Ay.Icon, { icon: a0.a, tooltip: "Close", onClick: i }),
                            ],
                        }),
                        (0, r.jsxs)(no, {
                            className: nu.ZK,
                            children: [
                                (0, r.jsx)(nd, {
                                    name: "Timestamp (local)",
                                    copyValue: n.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: n.toISOString(),
                                        title: (0, a6.i$)(d, "LLLL"),
                                        children: ["(", aJ().locale(), ") ", (0, a6.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nd, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(a8.A, { user: o }),
                                    }),
                                (0, r.jsx)(nd, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(nh, {
                            children: Object.entries(a).map((e) => {
                                let [a, n] = e,
                                    l = nx.has(a)
                                        ? ((e, t, a) => {
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
                                                np,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: n || null },
                                                    children:
                                                        null != n
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(n) })
                                                            : (0, r.jsx)("code", {
                                                                  className: nu.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, r.jsx)(
                                                    np,
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
    nv = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(nv)
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
    nb = {
        searchType: a7.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function n_() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (0, d.bG)([ns], () => ns.loggedEventsVersion),
        [l, i] = o.useState(() => Object.keys(nv)),
        [s, c] = o.useState(ns.loggedEvents),
        u = o.useCallback((e) => {
            c(e);
        }, []);
    (0, a3.RT)(t, ns.loggedEvents, u, nb, [n]);
    let m = s.filter((e) => {
            for (let t of l) if (nv[t].filter(e)) return !0;
            return !1;
        }),
        [h, p] = o.useState(void 0),
        x = m.find((e) => e.key === h),
        { TabBar: g, renderSelectedTab: v } = (0, aE.Ay)({ tabs: ng }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: E()(tN.nd, nu.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nu.rh,
                children: [
                    (0, r.jsx)(aQ.$n, {
                        className: nu.Q$,
                        look: aQ.$n.Looks.BLANK,
                        size: aQ.$n.Sizes.ICON,
                        onClick: D.eY,
                        children: (0, r.jsx)("span", {
                            title: aP.intl.string(aP.t.VkKicb),
                            children: (0, r.jsx)(a1.u, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": aP.intl.string(aP.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: nu.Bi }),
                    (0, r.jsx)("div", {
                        className: nu.uW,
                        children: Object.entries(nv).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                S.D,
                                {
                                    className: E()(nu.pb, l.includes(t) && nu.bx),
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
                className: nu.rh,
                children: (0, r.jsx)(a2.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(tA, { columns: nm, data: m, selectedRowKey: h, onClickRow: (e) => p(e.key) }),
            null != x &&
                (0, r.jsxs)(aC, {
                    className: nu.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(g, {}), v({ loggedEvent: x, onClose: () => p(void 0), filteredEvents: m })],
                }),
        ],
    });
}
var nf = a(382483),
    nj = a(385113),
    ny = a(315117);
function nC(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)(k.B, {
        gap: 8,
        padding: 8,
        className: ny.lt,
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
                              className: ny.YL,
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
function nE(e) {
    let { config: t, isSelected: a, onSelect: n } = e;
    return (0, r.jsxs)(k.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? ny.FM : ny.gt,
        children: [
            (0, r.jsx)(S.D, {
                className: ny.Av,
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
                onClick: () => (0, nf.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function nS() {
    let e = (0, d.bG)([nj.A], () => nj.A.getFeaturedFetchState());
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
                onClick: () => (0, nf.Wq)({ force: !0 }),
            }),
        ],
    });
}
function nN() {
    let e = (0, d.bG)([nj.A], () => nj.A.getDeveloperFetchState());
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
                onClick: () => (0, nf.i$)({ force: !0 }),
            }),
        ],
    });
}
function nA() {
    let [e, t] = o.useState(""),
        a = (0, d.bG)([nj.A], () => (e.length > 0 ? nj.A.getFetchState(e) : null)),
        n = (0, d.bG)([nj.A], () => (e.length > 0 ? nj.A.getConfigs(e) : null));
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
                onClick: () => (0, nf.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(N.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != n &&
                n.length > 0 &&
                (0, r.jsx)(k.B, { gap: 4, children: n.map((e) => (0, r.jsx)(nC, { config: e }, e.config_id)) }),
        ],
    });
}
function nk(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: n } = e,
        l = (0, d.bG)([nj.A], () => nj.A.getFeaturedFetchState());
    return (0, r.jsxs)(k.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(N.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            l === nj.e.FETCHING &&
                (0, r.jsx)(N.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    nE,
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
function nI(e) {
    let { config: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(v.c, {}),
            (0, r.jsxs)(k.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(N.E, { variant: "text-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(nC, { config: t }),
                ],
            }),
        ],
    });
}
function nT() {
    let [e, t] = o.useState(null),
        a = Object.values((0, d.bG)([nj.A], () => nj.A.getAllConfigsByApplication())).flat(),
        n = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(c.Ar, {
        children: (0, r.jsxs)(k.B, {
            gap: 16,
            padding: 8,
            className: ny.zr,
            children: [
                (0, r.jsx)(T.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(nS, {}),
                (0, r.jsx)(v.c, {}),
                (0, r.jsx)(nN, {}),
                (0, r.jsx)(v.c, {}),
                (0, r.jsx)(nA, {}),
                (0, r.jsx)(v.c, {}),
                (0, r.jsx)(nk, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != n && (0, r.jsx)(nI, { config: n }),
            ],
        }),
    });
}
var nD = a(636537),
    nw = a(153488),
    nO = a(927813);
let nR = 12 * nO.A.Millis.HOUR,
    nL = new Map(),
    nM = !1,
    nP = Object.freeze({ channelAffinities: [], lastFetched: 0 }),
    nU = { ...nP };
function nB() {
    nL = new Map(nU.channelAffinities.map((e) => [e.channelId, e]));
}
class nG extends d.Ay.PersistedStore {
    static displayName = "ChannelAffinitiesV2Store";
    static persistKey = "ChannelAffinitiesStoreV2";
    initialize(e) {
        null != e && ((nU.channelAffinities = e.channelAffinities), (nU.lastFetched = e.lastFetched), nB());
    }
    shouldFetch() {
        if (!nM) return Date.now() - nU.lastFetched > nR;
    }
    isFetching() {
        return nM;
    }
    getChannelAffinities() {
        return nU.channelAffinities;
    }
    getChannelAffinitiesMap() {
        return nL;
    }
    getChannelAffinity(e) {
        return nL.get(e);
    }
    compare(e, t) {
        return (nL.get(t)?.score ?? 0) - (nL.get(e)?.score ?? 0);
    }
    getState() {
        return nU;
    }
}
let nF = new nG(ty.h, {
    LOAD_CHANNEL_AFFINITIES_V2: function () {
        nM = !0;
    },
    LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineChannels: t } = e;
        (nU.lastFetched = Date.now()), (nM = !1), (nU.channelAffinities = t), nB();
    },
    LOAD_CHANNEL_AFFINITIES_V2_FAILURE: function () {
        nM = !1;
    },
    LOGOUT: function () {
        (nU = { ...nP }), (nL = new Map()), (nM = !1);
    },
});
var nV = a(907360);
let n$ = [
    {
        key: "channel",
        cellClassName: nV._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(N.E, { variant: "text-sm/semibold", children: "SCORE" }),
        cellClassName: nV.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function nW() {
    o.useEffect(() => {
        !(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            nF.shouldFetch() && nw.A.hasConsented(H.YAq.PERSONALIZATION)
                ? (ty.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" }),
                  nD.Bo.get({
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
    let e = (0, d.yK)([nF, tX.A], () =>
        nF
            .getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: tX.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(tA, { className: tN.nd, columns: n$, rowClassName: nV.nM, data: e });
}
function nH() {
    return (0, r.jsxs)(N.E, {
        variant: "text-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var nz = a(554146),
    nK = a(105565),
    nY = a(771781),
    nq = a(193337);
let nJ = (e) => {
        switch (e) {
            case nK.r.DC_DISMISSED:
                return "DISMISS:";
            case nK.r.DC_SHOWN:
                return "SHOW:";
            case nK.r.DC_SHOW_REQUEST:
                return "REQUEST TO SHOW:";
            default:
                return "UNKNOWN TYPE:";
        }
    },
    nQ = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${nz.M[a]}`;
            },
        },
    ],
    nX = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${nz.M[t]}`;
            },
        },
    ];
function nZ() {
    let e = (0, d.bG)([nK.A], () => nK.A.getDCFEvents()),
        t = (0, nY.Ay)((e) => e.candidates),
        a = (0, nY.Ay)((e) => e.lastWinnerTime),
        n = 0 !== a ? aJ()(a).fromNow() : "n/a",
        l = (0, nY.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        i = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: nJ(t) + a.toString(), event: nJ(t), dismissibleContent: a };
        }),
        s = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: nq.KE,
        children: [
            (0, r.jsxs)("div", { className: nq.pq, children: ["Last winner time: ", n] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: nq.pq, children: ["Last winner: ", null != l ? nz.M[l] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: nq.uI,
                children: (0, r.jsx)(tA, { className: nq.Th, columns: nX, data: s }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(tA, { columns: nQ, data: i }),
        ],
    });
}
var n0 = a(689175),
    n1 = a(541689),
    n2 = a(199773);
function n8() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(n7());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        a.unshift(e), tj.w.set("RecentDismissibleOverrides", a);
    }, []);
    return [n7(), e];
}
function n7() {
    return tj.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var n3 = a(662546),
    n9 = a(643278),
    n6 = a(617617),
    n4 = a(256787),
    n5 = a(20439);
let le = o.memo(function (e) {
    let { className: t, content: a, onChange: n } = e,
        l = nz.M[a],
        { isDismissed: i, handleToggleDismissState: s } = (0, n5.A)(l),
        [d, c] = o.useState(!1),
        u = o.useCallback(() => {
            n?.(a), s();
        }, [n, s, a]),
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
                        icon: d ? n3.O : n9.s,
                        onClick: m,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(b.d, {
                        label: `${a.toLowerCase()} (${nz.M[a]})`,
                        description: (0, n4.Zm)(l)
                            ? (function (e) {
                                  let t = n6.A.settings.userContent?.recurringDismissibleContentStates?.[e];
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
            (0, r.jsx)(v.c, {}),
        ],
    });
});
function lt(e) {
    let { items: t, onChange: a } = e,
        [n, l] = n8(),
        i = (0, o.useCallback)(
            (e) => {
                l(e), a?.(e);
            },
            [l, a],
        );
    return (0, r.jsx)(k.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(le, { content: e, onChange: i }, e)),
    });
}
function la(e) {
    let { searchQuery: t = "" } = e,
        a = (0, nY.Ay)((e) => e.recentlyShown),
        [n, l] = n8(),
        i = n
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(nz.M[e]))
            .slice(0, 3);
    return 0 === i.length
        ? null
        : (0, r.jsx)(m.n, { label: "Recent Overrides", children: (0, r.jsx)(lt, { items: i }) });
}
function ln(e) {
    let { searchQuery: t = "" } = e,
        a = (0, nY.Ay)((e) => e.recentlyShown)
            .map((e) => nz.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(m.n, { label: "Recently Shown", children: (0, r.jsx)(lt, { items: a }) });
}
var ll = a(594061),
    li = a(268571);
function ls() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
        } = (0, d.cf)([n2.A], () => ({
            dailyCapReached: n2.A.hasUserHitDCCap(),
            dailyCapOverridden: n2.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: n2.A.newUserMinAgeRequiredOverridden,
        })),
        [n, l] = o.useState(""),
        [i, s] = o.useState(20),
        c = o.useMemo(
            () =>
                Object.keys(nz.M)
                    .filter((e) => e.toLowerCase().includes(n.toLowerCase()))
                    .reverse(),
            [n],
        ),
        u = o.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && i < c.length && s((e) => e + 100);
            },
            [i, c.length],
        );
    return (0, r.jsx)(n0.Ch, {
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
                                    onClick: () => (0, n1.Ab)(),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, ll.nT)(),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, ll.D1)(),
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
                            onChange: n1.SE,
                        }),
                        (0, r.jsx)(b.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: n1.U$,
                        }),
                    ],
                }),
                (0, r.jsx)(ln, {}),
                (0, r.jsx)(la, {}),
                (0, r.jsxs)(m.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(a2.I, { query: n, onChange: l, onClear: () => l("") }),
                        (0, r.jsx)(lt, { items: c.slice(0, i) }),
                    ],
                }),
            ],
        }),
    });
}
var lr = a(53705),
    lo = a(154323),
    ld = a(155248);
function lc() {
    let e = (0, d.bG)([lo.A], () => lo.A.allWithDescriptions(), [], d.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, n] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                b.d,
                                { label: n, description: t, checked: a, onChange: (e) => (0, lr.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(v.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: ld.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: ld.x6,
                children: (0, r.jsx)(p.$, { variant: "primary", text: "Clear all", onClick: lr.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: ld.vu, children: t }),
        ],
    });
}
var lu = a(691540),
    lm = a(97483),
    lh = a(783878),
    lp = a(123292),
    lx = a(780907),
    lg = a(56562),
    lv = a(137177),
    lb = a(569926);
let l_ = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
];
function lf(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: n } = (0, lb.I)(t.id);
    return (0, r.jsxs)(k.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != n && (0, r.jsx)(lv.A, { game: n }),
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
function lj() {
    let e = (0, d.bG)([aT.Ay], () => aT.Ay.getRunningGames()),
        t = (0, d.bG)([aT.Ay], () => aT.Ay.getDebugRunningGame()),
        [a, n] = (0, o.useState)(t?.id ?? ""),
        l = (0, o.useMemo)(
            () =>
                l_.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        ),
        i = (e) => {
            if (null == e || "" === e) return void (0, lx.xt)(null);
            let t = tT.A.getDetectableGame(e),
                a = t?.executables[0],
                n = t?.thirdPartySkus[0]?.distributor;
            if (null == t || null == a)
                return (0, lu.P0)({
                    id: "devtools-set-debug-game-error",
                    type: lm.Ck.FAILURE,
                    message: "Invalid Game ID",
                });
            (0, lx.xt)({
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
                fullscreenType: lg.aI.UNKNOWN,
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
                                (0, r.jsx)(lf, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
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
                    (0, r.jsx)(lh.Z, {
                        label: "Pick a Preset Game",
                        options: l,
                        value: t?.id ?? "",
                        onSelectionChange: (e) => {
                            i(e);
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
                                (0, r.jsx)(lp.Q, { variant: "secondary", text: "Clear", onClick: () => i(null) }),
                            (0, r.jsx)(p.$, { variant: "primary", text: "Detect Game", onClick: () => i(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var ly = a(240248),
    lC = a(769195);
function lE() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(null),
        [l, i] = o.useState(null),
        s = o.useCallback(async () => {
            try {
                t(!0), n(null), i(null);
                let e = await nD.Bo.put({
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
    return (0, r.jsxs)(k.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(p.$, { variant: "primary", onClick: s, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, ly.uJ)(a) && (0, r.jsx)(N.E, { variant: "text-md/normal", color: "status-positive", children: a }),
            !(0, ly.uJ)(l) && (0, r.jsx)(N.E, { variant: "text-md/normal", color: "status-danger", children: l }),
        ],
    });
}
function lS() {
    return (0, r.jsx)("div", {
        className: lC.n,
        children: (0, r.jsx)(k.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(lE, {}) }),
    });
}
a(172879);
var lN = a(985623),
    lA = a.n(lN),
    lk = a(990078),
    lI = a(874804),
    lT = a(782134),
    lD = a(113494),
    lw = a(603349),
    lO = a(155466);
function lR(e) {
    return parseFloat(e.toFixed(3));
}
let lL = [
    {
        key: "store",
        cellClassName: lO.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: lO.i7,
        render(e) {
            let { trace: t } = e;
            return `${lR(t.time)} ms`;
        },
    },
];
function lM(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(c.Ip, { children: (0, r.jsx)(tA, { columns: lL, data: a }) });
}
let lP = [
    {
        id: "action",
        name: "Action",
        group: aE.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = aJ()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(no, {
                        className: lO.mP,
                        children: [
                            (0, r.jsx)(nd, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, a6.i$)(a, "LLLL"),
                                    children: (0, a6.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(nd, { name: "Total Time", children: [lR(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(c.Ip, { className: lO.Dx, children: (0, r.jsx)(a_, { data: t.action }) }),
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
            return (0, r.jsx)(lM, { actionLog: t });
        },
    },
];
function lU(e) {
    let { actionLog: t, initialHeight: a } = e,
        n = o.useMemo(
            () =>
                t.error
                    ? [
                          ...lP,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(lw.A, { className: lO.ik }), "Error"],
                              }),
                              group: aE.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: E()(lO.u4, tN.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: tN.R5,
                                                  children: (0, r.jsx)(aQ.$n, {
                                                      className: tN.Q$,
                                                      size: aQ.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(c.Ip, {
                                              className: lO.Dx,
                                              children: (0, r.jsx)(a_, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : lP,
            [t],
        ),
        { TabBar: l, renderSelectedTab: i } = (0, aE.Ay)({ tabs: n }, [n]);
    return (0, r.jsxs)(aC, {
        className: lO.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(au.Ay, {
                className: E()(tN.jr, lO.nZ),
                children: [
                    (0, r.jsx)(au.Ay.Icon, { icon: lI.K, tooltip: t.name }),
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
                            (0, a9.C)(a, () =>
                                (0, lu.P0)({
                                    id: "copy-action-log-name",
                                    type: lm.Ck.SUCCESS,
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
let lB = [
        {
            key: "action",
            cellClassName: lO.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(lw.A, { className: lO.ik }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: lO.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${lR(t.totalTime)} ms`;
            },
        },
        {
            key: "timestamp",
            cellClassName: lO.i7,
            render(e) {
                let { actionLog: t } = e;
                return aJ()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    lG = {
        searchType: a7.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function lF() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = lA()(() => {
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
        [i, s] = o.useState(l),
        [d, c] = o.useState(l),
        [u, m] = o.useState(!1),
        [h, p] = o.useState(),
        x = o.useCallback((e) => {
            c(e);
        }, []);
    (0, a3.RT)(t, u ? i : l, x, lG);
    let g = o.useCallback(
            (e) => {
                s(l), m(e);
            },
            [l],
        ),
        v = t.trim().length > 0,
        b = o.useMemo(() => (v ? d : u ? i : l), [l, d, v, u, i]),
        _ = u ? "Enable Event Tracking" : "Pause Event Tracking";
    return (0, r.jsxs)("div", {
        ref: e,
        className: E()(tN.nd, lO.nd),
        children: [
            (0, r.jsxs)("div", {
                className: lO.KE,
                children: [
                    (0, r.jsx)(lk.m, {
                        text: _,
                        children: (0, r.jsx)(eE.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? lT.u : lD.E,
                            "aria-label": _,
                            onClick: () => g(!u),
                        }),
                    }),
                    (0, r.jsx)(a2.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(tA, {
                columns: lB,
                data: b,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => p(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(lU, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var lV = a(936388),
    l$ = a(132369);
function lW() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: E()(tN.nd, l$.n),
        children: (0, r.jsx)(p.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: lV.A.clearUploadedKeyVersions,
        }),
    });
}
var lH = a(825484),
    lz = a(37962),
    lK = a(881520),
    lY = a(670455),
    lq = a(861160);
let lJ = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function lQ() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(0),
        [l, i] = o.useState(1e3),
        [s, c] = o.useState(0),
        u = (0, d.bG)([lK.A], () => (null === e ? null : (lK.A.getFeedbackConfig(lY.MW[e]) ?? lz.u[lY.MW[e]]))),
        h = Object.entries(lY.MW),
        b = h.slice(h.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        _ = o.useMemo(() => null != e && s >= 0 && s <= 100 && a >= 0, [e, s, a]);
    return (0, r.jsx)("div", {
        className: lq.kL,
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
                                    options: lJ,
                                    value: l,
                                    onSelectionChange: i,
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
                        value: s.toString(),
                        type: "number",
                        onChange: (e) => c(parseFloat(e)),
                    }),
                }),
                (0, r.jsxs)(lH.e, {
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
                                        chance: s / 100,
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
                !(s >= 0 && s <= 100) &&
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
    lZ = a(663417),
    l0 = a(147925),
    l1 = a(513985),
    l2 = a(788868);
let l8 = async () =>
        (
            await nD.Bo.get({
                url: H.Rsh.ENTITLEMENTS_FOR_APPLICATION(l2.tv),
                oldFormErrors: !0,
                query: { exclude_consumed: !0, exclude_ended: !0 },
                rejectWithError: !0,
            })
        ).body.map((e) => l1.A.createFromServer(e)),
    l7 = async (e) => {
        await nD.Bo.post({
            url: "/debug/entitlements/fractional-premium",
            body: { count: 1, sku_id: e },
            rejectWithError: !1,
        });
    },
    l3 = async (e) => {
        let t = "/debug/entitlements/fractional-premium";
        null != e && (t = `${t}/${e}`), await nD.Bo.del({ url: t, rejectWithError: !0 });
    },
    l9 = async () => {
        await nD.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
    },
    l6 = () => {
        let [e, t] = o.useState([]),
            [a, n] = o.useState(!1),
            l = (0, o.useCallback)(async () => {
                try {
                    n(!0);
                    let e = await l8();
                    t(e);
                } finally {
                    n(!1);
                }
            }, []),
            i = (0, o.useCallback)(
                async (e) => {
                    await l7(e), await l();
                },
                [l],
            );
        return {
            grantFractionalPremium: i,
            deleteFractionalPremium: (0, o.useCallback)(
                async (e) => {
                    await l3(e), await l();
                },
                [l],
            ),
            triggerNextEntitlementFulfillment: (0, o.useCallback)(async () => {
                await l9(), await l();
            }, [l]),
            refreshEntitlementList: l,
            entitlements: e,
            loading: a,
        };
    };
var l4 = a(51846),
    l5 = a(214868);
let ie = {
        [H.GD.QUEST_REWARD]: "Quest Reward",
        [H.GD.DEVELOPER_GIFT]: "Developer Gift",
        [H.GD.INVOICE]: "Invoice",
        [H.GD.REVERSE_TRIAL]: "Reverse Trial",
        [H.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
        [H.GD.SUBSCRIPTION]: "Subscription",
        [H.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
    },
    it = (e) => {
        let t,
            { entitlement: a, active: n, onDelete: l } = e,
            i = (e) => (null != e ? (0, a6.i$)(e, "LLL") : "---");
        return (0, r.jsxs)("div", {
            className: E()(l4.Nr, n ? l5.C1 : ""),
            children: [
                (0, r.jsxs)(N.E, { variant: "text-md/normal", children: ["ID: ", a.id, " "] }),
                !n &&
                    (0, r.jsxs)(N.E, {
                        variant: "text-md/normal",
                        children: ["SKU: ", ia.find((e) => e.value === a.skuId)?.label],
                    }),
                null != a.startsAt &&
                    null != a.endsAt &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(N.E, { variant: "text-md/normal", children: ["Start: ", i(a.startsAt), " "] }),
                            (0, r.jsxs)(N.E, { variant: "text-md/normal", children: ["End: ", i(a.endsAt), " "] }),
                        ],
                    }),
                (0, r.jsxs)(N.E, {
                    variant: "text-md/normal",
                    children: [
                        "Entitlement source type: ",
                        null != (t = a.sourceType) && t in ie ? ie[t] : `Unknown source type ${t}`,
                    ],
                }),
                n &&
                    null != l &&
                    (0, r.jsx)(aQ.$n, {
                        className: l4.RW,
                        size: aQ.$n.Sizes.TINY,
                        color: aQ.$n.Colors.RED,
                        look: aQ.$n.Looks.OUTLINED,
                        onClick: l,
                        children: "Delete",
                    }),
            ],
        });
    },
    ia = [
        { id: "1h", label: "1 hour", value: lX.j.PREMIUM_TIER_2_1_HOUR },
        { id: "1d", label: "1 day", value: lX.j.PREMIUM_TIER_2_1_DAY },
        { id: "3d", label: "3 days", value: lX.j.PREMIUM_TIER_2_3_DAY },
    ];
function il() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(lX.j.PREMIUM_TIER_2_1_HOUR),
        [l, i] = o.useState([]),
        [s, d] = o.useState([]),
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
            i(v.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === H.zF_.FRACTIONAL_REDEMPTION)),
                d(v.filter((e) => Object.values(lX.j).includes(e.skuId) && null == e.startsAt));
        }, [v]),
        (0, r.jsx)(c.Ip, {
            className: tN.nd,
            children: (0, r.jsxs)("div", {
                className: l5.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: l5.dL,
                        children: [
                            (0, r.jsx)(N.E, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, r.jsxs)(S.D, {
                                onClick: () => t(!e),
                                className: l4.As,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(N.E, { variant: "text-md/normal", children: "Info" }),
                                    }),
                                    (0, r.jsx)(l0.A, { direction: e ? l0.A.Directions.UP : l0.A.Directions.DOWN }),
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
                        className: E()([l4.uW, l5.Uo]),
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: ia,
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
                        className: l4.uW,
                        children: [
                            (0, r.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: l5.dL,
                                children: [
                                    (0, r.jsx)(N.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: l4.GC,
                                        children: [
                                            (0, r.jsx)(aQ.$n, {
                                                disabled: b,
                                                size: aQ.$n.Sizes.TINY,
                                                color: aQ.$n.Colors.PRIMARY,
                                                look: aQ.$n.Looks.OUTLINED,
                                                onClick: () => g(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(aQ.$n, {
                                                disabled: b,
                                                size: aQ.$n.Sizes.TINY,
                                                color: aQ.$n.Colors.RED,
                                                look: aQ.$n.Looks.OUTLINED,
                                                onClick: () => h(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(aQ.$n, {
                                                disabled: b,
                                                look: aQ.$n.Looks.BLANK,
                                                size: aQ.$n.Sizes.ICON,
                                                onClick: u,
                                                children: (0, r.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, r.jsx)(lZ.f, { size: "xs", color: "currentColor" }),
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
                                                    it,
                                                    { entitlement: e, active: !0, onDelete: () => h(e.id) },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                            s.length > 0 &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(N.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: s.map((e) => (0, r.jsx)(it, { entitlement: e }, e.id)),
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
var ii = a(390544),
    is = a(665171),
    ir = a(522055),
    io = a(661202);
function id() {
    let e = (0, d.bG)([aL.A], () => aL.A.getGuildId()),
        t = (0, d.bG)([aR.A], () => aR.A.getGuild(e)?.name),
        a = (0, d.bG)([ir.A], () => ir.A.getStateForGuild(e)?.instances),
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
        i = o.useMemo(
            () =>
                Object.values(ii.M).map((e) =>
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
                ty.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...n, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [n, e]);
    return null == e
        ? null
        : (0, r.jsxs)(c.Ip, {
              className: io.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: io.uW,
                      children: (0, r.jsx)(T.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: io.uW,
                      children: [
                          (0, r.jsx)(N.E, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${n?.name}`,
                          }),
                          (0, r.jsx)("div", { className: io.UD, children: i }),
                          (0, r.jsx)(N.E, { variant: "eyebrow", children: "Remove Server Info" }),
                          (0, r.jsx)("div", {
                              className: io.UD,
                              children: (0, r.jsx)(p.$, {
                                  variant: "primary",
                                  text: "Remove IP Address & Game Server Panel URL",
                                  onClick: s,
                              }),
                          }),
                          (0, r.jsx)(N.E, { variant: "eyebrow", children: "Reset server" }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              text: "Reset",
                              onClick: () => {
                                  (0, is.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
function ic(e, t) {
    let a = "boolean" == typeof t ? t : !ac.Ay.get(e);
    ty.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var iu = a(460281);
function im(e) {
    let { devSettingsCategory: t } = e,
        a = (0, d.bG)([ac.Ay], () => ac.Ay.allByCategory(t), [t], d.My),
        n = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: n }] = e;
                    return (0, r.jsx)(b.d, { label: n, description: t, checked: a, onChange: (e) => ic(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: E()(tN.nd, iu.n), children: n });
}
var ih = a(950305),
    ip = a(231483),
    ix = a(597770),
    ig = a(433492),
    iv = a(695458),
    ib = a(796140),
    i_ = a(268791),
    ij = a(836480),
    iy = a(855473),
    iC = a(626258),
    iE = a(420854),
    iS = a(373846),
    iN = a(657044),
    iA = a(141060),
    ik = a(608599),
    iI = a(685761),
    iT = a(157225),
    iD = a(362704),
    iw = a(625903),
    iO = a(628284),
    iR = a(320448),
    iL = a(110259),
    iM = a(830215),
    iP = a(381689),
    iU = a(889227),
    iB = a(499785),
    iG = a(315069);
class iF extends iG.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids);
    }
    static fromServer(e) {
        return new iF(e);
    }
    setPassword(e) {
        return (this.password = e), this;
    }
}
let iV = { pools: null, users: null };
function i$(e) {
    null == iV.users && (iV.users = new Map()), iV.users.set(e.id, new iU.A(e));
}
class iW extends d.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (iV.pools = new Map(Object.entries(e.pools))),
            null != e.users && (iV.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != iV.pools ? Object.fromEntries(iV.pools) : null,
            users: null != iV.users ? Object.fromEntries(iV.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(iV.users?.values() ?? []).filter((t) => iV.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return iV.pools?.get(e) ?? null;
    }
    getUser(e) {
        return iV.users?.get(e) ?? null;
    }
    getPools() {
        return null === iV.pools ? null : Array.from(iV.pools.values());
    }
}
let iH = new iW(ty.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        null == iV.pools && (iV.pools = new Map()), iV.pools.set(t.id, t), a.forEach(i$);
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = iV.pools?.get(t);
        if (null == a) return !1;
        a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                iV.users?.delete(e);
            }),
            iV.pools?.delete(t);
    },
});
var iz = a(835002);
async function iK(e, t) {
    return await iB.A.get({
        url: H.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: iL.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: a, body: n } = e;
            if (!a) return void iP.A.showFailedToast(iz.OB.GENERIC_ERROR);
            let { generated_pool: l, users: i } = n;
            ty.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: iF.fromServer(l).setPassword(t),
                users: i.map((e) => new iU.A(e)),
            });
        })
        .catch(() => (iP.A.showFailedToast(iz.OB.GENERIC_ERROR), null));
}
var iY = a(844330),
    iq = a(277851);
let iJ = [
        ih.n,
        ip.l,
        ix.o,
        ig.K,
        iv.m,
        ib.c,
        i_.$,
        ij.Q,
        iy.Z,
        iC.A,
        iE.E,
        iS.C,
        iN._,
        iA.i,
        ik.L,
        iI.f,
        iT.N,
        iD.Y,
        iw.Z,
    ],
    iQ = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ],
    iX = () => {
        let [e, t] = o.useState(""),
            [a, n] = o.useState(""),
            [l, i] = o.useState(!1);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("form", {
                    onSubmit: async (l) => {
                        l.preventDefault(), i(!0);
                        try {
                            await iK(e, a), t(""), n("");
                        } finally {
                            i(!1);
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
    iZ = (e) => {
        let { pool: t } = e,
            { id: a, summary: n } = t,
            l = iH.getUsersForPool(a),
            i = (0, d.bG)([a5.default], () => a5.default.getId()),
            s = iJ[Number(a) % iJ.length],
            c = iQ[Number(a) % iQ.length],
            u = o.useCallback(() => {
                ty.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
            }, [a]);
        return (0, r.jsx)(k.B, {
            direction: "horizontal",
            align: "start",
            justify: "space-between",
            children: (0, r.jsx)(iY.A, {
                icon: (0, r.jsx)(N.E, {
                    variant: "text-md/medium",
                    color: c,
                    className: iq.td,
                    children: (0, r.jsx)(s, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
                title: n,
                className: iq.JC,
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
                                                            let a = iH.getUser(t);
                                                            if (null == a) throw Error("User not found");
                                                            let n = iH.getPool(e)?.password;
                                                            if (null == n) throw Error("Pool password not found");
                                                            if (null == a.email) throw Error("User email not found");
                                                            iM.A.login({
                                                                login: a.email,
                                                                password: n,
                                                                isMultiAccount: !0,
                                                                source: "generated_test_user",
                                                            }).catch(
                                                                () => (iP.A.showFailedToast(iz.OB.GENERIC_ERROR), null),
                                                            );
                                                        })(t.id, e.id);
                                                },
                                                "aria-disabled": i === e.id,
                                                className: E()(iq.vk, { [iq.Pe]: i === e.id }),
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
                                                                className: E()({ [iq.WP]: i === e.id }),
                                                                children: [
                                                                    (0, r.jsx)(ih.n, {
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
                                                                                className: iq.c1,
                                                                                children: e.email,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            i === e.id
                                                                ? (0, r.jsx)(N.E, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-feedback-positive",
                                                                      children: (0, r.jsx)(iO.y, {
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                                  })
                                                                : (0, r.jsx)(iR._, {
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
                            className: iq.UD,
                            children: (0, r.jsx)(p.$, {
                                icon: a1.u,
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
function i0() {
    let e = (0, d.yK)([iH], () => iH.getPools() ?? []);
    return (0, r.jsxs)(k.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: iq.kL,
        children: [
            (0, r.jsx)(iX, {}),
            (0, r.jsx)(c.Ip, { className: iq.Ik, children: e?.map((e) => (0, r.jsx)(iZ, { pool: e }, e.id)) }),
        ],
    });
}
var i1 = a(582306),
    i2 = a(528153),
    i8 = a(275759),
    i7 = a(888429);
function i3(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function i9() {
    let e = (0, d.bG)([i8.Ay], () => i8.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, d.bG)([i8.Ay], () => i8.Ay.getDevToolCurrentDate()),
        a = (0, d.bG)([i8.Ay], () => i8.Ay.getGiftUnreadNotificationLastDismissedTimes()),
        n = (0, d.bG)([i8.Ay], () => i8.Ay.getMessageGiftIntentLastShownMap()),
        l = (0, d.bG)([i8.Ay], () => i8.Ay.getHighestAffinityFriendAnniversaries()),
        i = (0, d.bG)([i8.Ay], () => i8.Ay.getHighAffinityFriendAnniversaries()),
        s = (0, d.bG)([i8.Ay], () => i8.Ay.getProfilePopoutGiftIntentsDismissMap()),
        o = (0, d.bG)([n6.A], () => {
            let e =
                n6.A.settings.userContent?.recurringDismissibleContentStates[nz.M.GIFT_INTENT_MESSAGE]
                    ?.lastDismissedAtMs;
            if (null == e || "0" === e) return null;
            let t = Number(e);
            return Number.isNaN(t) ? null : t;
        }),
        u = (e) => {
            ty.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
        },
        m = (e) => {
            let t = aF.A.getUserAffinity(e);
            return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
        };
    return (0, r.jsx)(c.Ip, {
        className: tN.nd,
        children: (0, r.jsxs)("div", {
            className: i7.l$,
            children: [
                (0, r.jsx)(N.E, { className: i7.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, r.jsx)("div", {
                    className: i7.Pm,
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
                        className: i7.Pm,
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
                                i.length > 0 &&
                                    (0, r.jsxs)(k.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(N.E, {
                                                variant: "text-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            i.map((e) => {
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
                    className: i7.Pm,
                    children: (0, r.jsxs)(k.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(i1.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? aJ()(t) : void 0,
                                onSelect: (e) => {
                                    let t = aJ()(),
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
                    className: i7.Pm,
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
                                            (0, ll._N)(nz.M.GIFT_INTENT_MESSAGE);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsx)(N.E, {
                                variant: "text-xs/normal",
                                children: null != o ? `Dismissed at: ${i3(o)}` : "Not dismissed",
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: i7.Pm,
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
                                                { variant: "text-xs/normal", children: [l, ": ", i3(a)] },
                                                t,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: i7.Pm,
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
                                            (0, r.jsx)(N.E, { variant: "text-xs/normal", children: i3(e) }, t),
                                        ),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: i7.Pm,
                    children: [
                        (0, r.jsx)(N.E, { variant: "text-md/normal", children: "Send gift notification" }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Send",
                            onClick: () => {
                                i2.A.sendGiftingNotificationIfEligible();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: i7.Pm,
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
                    className: i7.Pm,
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
                            Object.keys(s).length > 0 &&
                                (0, r.jsxs)(k.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(N.E, {
                                            variant: "text-xs/semibold",
                                            children: "Profile Popout Gift Intents Dismissed:",
                                        }),
                                        Object.entries(s).map((e) => {
                                            let [t, a] = e,
                                                n = F.default.getUser(t),
                                                l = n?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                N.E,
                                                { variant: "text-xs/normal", children: [l, ": ", i3(a)] },
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
var i6 = a(460890),
    i4 = a(349288),
    i5 = a(517461),
    se = a(214947),
    st = a(403581),
    sa = a(34188);
let sn = [
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
var sl = a(545406);
let si = [0, 0.5, 1],
    ss = ["Center", "Inner ring", "Outer ring"],
    sr = si.length,
    so = "ILLO_BLUE",
    sd = "ILLO_BLUE_40",
    sc = Array.from({ length: sr }, () => sd),
    su = Array.from({ length: sr }, () => so),
    sm = ["1", "0.5", "0"],
    sh = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    sp = [
        { label: "Light", value: H.NJ8.LIGHT, id: H.NJ8.LIGHT },
        { label: "Dark", value: H.NJ8.DARK, id: H.NJ8.DARK },
        { label: "Darker", value: H.NJ8.DARKER, id: H.NJ8.DARKER },
        { label: "Midnight", value: H.NJ8.MIDNIGHT, id: H.NJ8.MIDNIGHT },
    ],
    sx = { [H.NJ8.MIDNIGHT]: H.NJ8.DARKER, [H.NJ8.DARKER]: H.NJ8.DARK, [H.NJ8.LIGHT]: H.NJ8.DARK },
    sg = { [H.NJ8.LIGHT]: "light", [H.NJ8.DARK]: "ash", [H.NJ8.DARKER]: "dark", [H.NJ8.MIDNIGHT]: "onyx" },
    sv = [
        { id: "friends", icon: se.$, text: "Friends" },
        { id: "nitro", icon: st.t, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: sa.U, text: "Shop", useCustomGradient: !0 },
    ],
    sb = sn.map((e) => ({ label: e, value: e, id: e })),
    s_ = Object.fromEntries(
        sn.map((e) => [
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
                        i =
                            (0.299 * a + 0.587 * n + 0.114 * l) / 255 > 0.5
                                ? ek.A.unsafe_rawColors.OPACITY_BLACK_28
                                : ek.A.unsafe_rawColors.OPACITY_WHITE_28,
                        s = (0, r.jsx)("span", {
                            className: sl.oP,
                            style: { background: `rgb(${a}, ${n}, ${l})`, border: `1px solid ${i.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: s };
                }),
        ]),
    );
var sf = a(306327);
function sj(e, t, a) {
    return e.map((e, n) => (n === t ? a : e));
}
function sy(e, t) {
    let [a, n, l, i] = ek.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: n, b: l, a: i };
}
function sC(e, t) {
    let a = ek.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function sE(e) {
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
            (0, r.jsx)("pre", { className: sl.RP, children: t }),
        ],
    });
}
function sS(e) {
    let { allResolvedStops: t } = e,
        a = o.useMemo(
            () =>
                ss.map((e, a) => {
                    let n;
                    return (
                        (n = sp
                            .map((e) => {
                                let n,
                                    l,
                                    { value: i } = e,
                                    s = sg[i],
                                    r = t[i];
                                return `  ${s}:
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
            ss.map((e, t) => (0, r.jsx)(sE, { yaml: a[t], label: e }, e)),
        ],
    });
}
function sN(e, t, a) {
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
    return new sf.A("srgb", [
        (e.r * (1 - r) + n * r) / 255,
        (e.g * (1 - r) + l * r) / 255,
        (e.b * (1 - r) + i * r) / 255,
    ]);
}
function sA(e, t, a) {
    let n = a.map((e) => {
            let [t, a, n] = ek.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: n, opacity: e.opacity, position: e.position };
        }),
        l = 1 / 0,
        i = (e) => {
            e < l && (l = e);
        };
    for (let a of n) i(e.contrast(sN(t, n, a.position), "WCAG21"));
    for (let a = 0; a < n.length - 1; a++) {
        let { contrast: l } = (function (e, t, a, n, l) {
            let i = 1 / 0,
                s = n;
            for (let r = 0; r <= 100; r++) {
                let o = n + (r / 100) * (l - n),
                    d = a.contrast(sN(e, t, o), "WCAG21");
                d < i && ((i = d), (s = o));
            }
            return { contrast: i, position: s };
        })(t, n, e, n[a].position, n[a + 1].position);
        i(l);
    }
    return Math.round(100 * l) / 100;
}
function sk(e) {
    let [t, a, n] = ek.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [l, i, s] = ek.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = ek.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new sf.A("srgb", [t / 255, a / 255, n / 255]),
        background: { r: l * (1 - c) + r * c, g: i * (1 - c) + o * c, b: s * (1 - c) + d * c },
    };
}
function sI() {
    return {
        colors: Array.from({ length: sr }, () => void 0),
        scales: Array.from({ length: sr }, () => void 0),
        opacities: Array.from({ length: sr }, () => void 0),
    };
}
function sT() {
    return {
        [H.NJ8.LIGHT]: sI(),
        [H.NJ8.DARK]: { colors: [...sc], scales: [...su], opacities: [...sm] },
        [H.NJ8.DARKER]: sI(),
        [H.NJ8.MIDNIGHT]: sI(),
    };
}
function sD() {
    let e = (0, i6.G9)(),
        [t, a] = o.useState(H.NJ8.DARK),
        [n, l] = (0, i5.V)("DevToolsGradientContrastPanel_themeStops", sT()),
        i = n ?? sT(),
        [s, d] = o.useState(["", "", ""]),
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
                                              (0, r.jsx)(lp.Q, {
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
                    sp.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    n = [],
                                    l = [];
                                for (let i = 0; i < sr; i++) {
                                    let s,
                                        r,
                                        o,
                                        d = t;
                                    for (; null != d; ) {
                                        let t = e[d];
                                        if (
                                            ((s ??= t.colors[i]),
                                            (r ??= t.scales[i]),
                                            (o ??= t.opacities[i]),
                                            null != s && null != r && null != o)
                                        )
                                            break;
                                        d = sx[d];
                                    }
                                    a.push(s ?? sc[i]), n.push(r ?? su[i]), l.push(o ?? sm[i]);
                                }
                                return { colors: a, scales: n, opacities: l };
                            })(i, t),
                        ];
                    }),
                ),
            [i],
        ),
        f = _[t],
        j = o.useCallback(
            (e) => {
                l({ ...i, [t]: e(i[t]) });
            },
            [t, l, i],
        ),
        y = o.useMemo(() => sk({ theme: t, saturation: 1 }), [t]),
        C = o.useMemo(() => {
            let e = [];
            for (let t = 0; t < sr; t++) {
                let a = parseFloat(f.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: f.colors[t], opacity: a, position: si[t] });
            }
            return e;
        }, [f]),
        E = o.useMemo(() => {
            if (null == C) return null;
            let { text: e, background: t } = y;
            return ss.map((a, n) =>
                s_[f.scales[n]].map((a) => {
                    let l = sA(e, t, sj(C, n, { ...C[n], color: a.value }));
                    return { ...a, trailing: `(${l}:1)` };
                }),
            );
        }, [C, y, f.scales]),
        S = o.useMemo(() => {
            try {
                return sp.map((e) => {
                    let { value: t, label: a } = e,
                        n = _[t],
                        l = [];
                    for (let e = 0; e < sr; e++) {
                        let i = parseFloat(n.opacities[e]);
                        if (isNaN(i) || i < 0 || i > 1) return { theme: t, label: a, result: null };
                        l.push({ color: n.colors[e], opacity: i, position: si[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: n, background: l } = sk(t),
                                i = sA(n, l, e),
                                s = i >= 4.5;
                            if (!s)
                                for (let t = 0; t < e.length; t++) {
                                    let i = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return sn.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == i) continue;
                                    let s = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of s_[i]) {
                                        if (o === e[t].color) continue;
                                        let i = sA(n, l, sj(e, t, { ...e[t], color: o }));
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
        }, [_]);
    return (0, r.jsx)(c.Ar, {
        className: sl.XG,
        children: (0, r.jsxs)(k.B, {
            gap: 24,
            padding: 8,
            className: sl.zr,
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
                                (0, r.jsx)(i4.Anchor, {
                                    href: "https://design.discord.tools/foundations/color/token-pipeline",
                                    children: "token pipeline",
                                }),
                                ".",
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(lh.Z, {
                    selectionMode: "single",
                    label: "Theme",
                    value: t,
                    onSelectionChange: (e) => a(e),
                    closeOnSelect: !0,
                    options: sp,
                }),
                (0, r.jsxs)(k.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: sl.G9,
                            children: ss.map((e, t) => {
                                let a = "" !== s[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)(k.B, {
                                                gap: 0,
                                                className: sl.hi,
                                                children: [
                                                    (0, r.jsx)(N.E, { variant: "text-md/medium", children: e }),
                                                    (0, r.jsx)(lp.Q, {
                                                        variant: "secondary",
                                                        textVariant: "text-xs/normal",
                                                        text: `(${sC(f.colors[t], parseFloat(f.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                sC(f.colors[t], parseFloat(f.opacities[t])),
                                                            ),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(lh.Z, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: a,
                                                value: f.scales[t],
                                                onSelectionChange: (e) => {
                                                    let a = s_[e][0]?.value;
                                                    j((n) => ({
                                                        ...n,
                                                        scales: sj(n.scales, t, e),
                                                        colors: null != a ? sj(n.colors, t, a) : n.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: sb,
                                            }),
                                            (0, r.jsx)(lh.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: f.colors[t],
                                                onSelectionChange: (e) =>
                                                    j((a) => ({ ...a, colors: sj(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: E?.[t] ?? s_[f.scales[t]],
                                            }),
                                            (0, r.jsx)(g.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: f.opacities[t],
                                                onChange: (e) => j((a) => ({ ...a, opacities: sj(a.opacities, t, e) })),
                                                placeholder: "0–1",
                                            }),
                                            (0, r.jsx)(g.k, {
                                                label: `Hex${a && null != u[t] ? ` (dE: ${u[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: s[t],
                                                onChange: (e) => {
                                                    d((a) => sj(a, t, e));
                                                    let a = (function (e) {
                                                        if (!sh.test(e)) return null;
                                                        try {
                                                            return new sf.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = sd,
                                                                a = so,
                                                                n = 1 / 0;
                                                            for (let l of sn)
                                                                for (let i of s_[l]) {
                                                                    let s = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, n] = ek.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new sf.A("srgb", [
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
                                                        m((a) => sj(a, t, e.deltaE)),
                                                            j((a) => ({
                                                                ...a,
                                                                scales: sj(a.scales, t, e.scale),
                                                                colors: sj(a.colors, t, e.color),
                                                            }));
                                                    } else m((e) => sj(e, t, null));
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
                (0, r.jsx)(i6.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(eN.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)(k.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: sl.$8,
                                        style: { background: ek.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: sv.map((e, t) =>
                                            (0, r.jsx)(
                                                Z.z9,
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
                                                        hoverGradientStart: sy(f.colors[0], parseFloat(f.opacities[0])),
                                                        hoverGradientMiddle: sy(
                                                            f.colors[1],
                                                            parseFloat(f.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: sy(f.colors[2], parseFloat(f.opacities[2])),
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
                                                                      ss[n.suggestion.stopIndex],
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
                (0, r.jsx)(sS, { allResolvedStops: _ }),
            ],
        }),
    });
}
var sw = a(820739),
    sO = a(230135),
    sR = a(45780),
    sL = a(942975),
    sM = a(859241);
let sP = [
        nz.M.GUILD_POWERUP_PERKS_COACHMARK,
        nz.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        nz.M.GUILD_POWERUP_NOTIFICATION,
        nz.M.GUILD_TAG_AVAILABLE_COACHMARK,
        nz.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
    ],
    sU = [
        nz.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        nz.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        nz.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        nz.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        nz.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    sB = [nz.V.ADOPT_CLAN_IDENTITY_NOTICE],
    sG = [
        nz.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        nz.M.VANITY_URL_POWERUP_ROLLBACK_MODAL,
        nz.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
    ];
function sF(e) {
    switch (e) {
        case nz.V.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return "GUILD_POWERUP_LEVEL_1_COACHMARK";
        case nz.V.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return "GUILD_POWERUP_LEVEL_2_COACHMARK";
        case nz.V.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return "GUILD_POWERUP_LEVEL_3_COACHMARK";
        case nz.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
        case nz.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
        case nz.V.ADOPT_CLAN_IDENTITY_NOTICE:
            return "ADOPT_CLAN_IDENTITY_NOTICE";
        default:
            return String(e);
    }
}
var sV = a(861671);
async function s$(e, t, a) {
    await nD.Bo.patch({
        url: H.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : aJ()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, sw.VU)(e),
        (0, sL.Xd)(e, !0);
}
async function sW(e) {
    await nD.Bo.post({ url: H.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function sH() {
    let e = (0, d.bG)([aL.A], () => aL.A.getGuildId()),
        t = (0, d.bG)([aR.A], () => aR.A.getGuild(e)?.name),
        a = (0, d.yK)([n6.A], () => [...sU, ...sB].filter((t) => null != e && (0, sR.zs)(t, e))),
        n = (0, d.yK)([sM.A], () => (null != e ? (sM.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(c.Ip, {
            className: sV.kL,
            children: [
                (0, r.jsx)("div", {
                    className: sV.uW,
                    children: (0, r.jsx)(T.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                }),
                (0, r.jsxs)("div", {
                    className: sV.uW,
                    children: [
                        (0, r.jsx)(N.E, {
                            variant: "eyebrow",
                            className: sV.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, sL.qM)();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sV.uW,
                    children: [
                        (0, r.jsx)(N.E, { variant: "eyebrow", className: sV.wx, children: "Reset Progress Bar State" }),
                        (0, r.jsx)(p.$, { variant: "primary", text: "Reset", onClick: sO.O }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sV.uW,
                    children: [
                        (0, r.jsx)(N.E, { variant: "eyebrow", children: "Set Warning State" }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        s$(e, n.slice(Math.floor(n.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        s$(e, n, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sV.uW,
                    children: [
                        (0, r.jsx)(N.E, { variant: "eyebrow", className: sV.wx, children: "Reset User Level DCs" }),
                        (0, r.jsx)(k.B, {
                            gap: 16,
                            children: sP.map((e) => (0, r.jsx)(le, { className: sV.z6, content: nz.M[e] }, nz.M[e])),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: sV.uW,
                    children: (0, r.jsx)(m.n, {
                        label: "Reset Guild Level DCs",
                        children: sU.map((t) =>
                            (0, r.jsx)(
                                b.d,
                                {
                                    label: sF(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, sR._$)(t, e, !1)
                                            : ((0, ll._N)(nz.M.GUILD_POWERUP_NOTIFICATION), (0, sR.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: sV.uW,
                    children: (0, r.jsx)(m.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: sB.map((t) =>
                            (0, r.jsx)(
                                b.d,
                                {
                                    label: sF(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, sR._$)(t, e, !1)
                                            : ((0, ll._N)(nz.M.GUILD_POWERUP_NOTIFICATION), (0, sR.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: sV.uW,
                    children: [
                        (0, r.jsx)(N.E, {
                            variant: "eyebrow",
                            className: sV.wx,
                            children: "Reset Powerup Rollback DCs",
                        }),
                        sG.map((e) => (0, r.jsx)(le, { className: sV.z6, content: nz.M[e] }, nz.M[e])),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sV.uW,
                    children: [
                        (0, r.jsx)(N.E, {
                            variant: "eyebrow",
                            className: sV.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                sW(e);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(p.$, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, is.Wp)(!1);
                    },
                }),
            ],
        });
}
var sz = a(450510),
    sK = a(320681);
function sY(e) {
    let { hotspotLocation: t } = e,
        [a, n] = (0, d.yK)([sz.HP], () => [sz.HP.hasHotspot(t, !0), sz.HP.getHotspotOverride(t)]);
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
        onSelectionChange: (e) => (null != e ? (0, sz.Kl)(t, e) : (0, sz.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function sq() {
    return (0, r.jsx)(c.Ip, {
        className: tN.nd,
        children: (0, r.jsx)(m.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: sK.IN,
            children: (0, r.jsx)(k.B, {
                gap: 20,
                children: Object.keys(sz._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, r.jsx)(sY, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var sJ = a(919523),
    sQ = a(855522),
    sX = a(37646),
    sZ = a(773669);
function s0() {
    let e = (0, d.bG)([sZ.default], () => sZ.default.locale),
        [t, a] = o.useState(),
        n = (0, sJ.runtimeHashMessageKey)(t ?? ""),
        l = o.useMemo(() => aP.t[n], [n]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(au.Ay, {
                children: [
                    (0, r.jsx)(au.Ay.Icon, { icon: sX.U, tooltip: "Locale" }),
                    (0, r.jsx)(au.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, r.jsxs)(no, {
                children: [
                    (0, r.jsx)(nd, { name: "Active System", children: "@discord/intl" }),
                    (0, r.jsx)(nd, { name: "App", children: e }),
                    (0, r.jsx)(nd, { name: "System", children: aP.systemLocale }),
                    (0, r.jsx)(nd, { name: "@discord/intl", children: aP.intl.currentLocale }),
                    (0, r.jsx)(nd, { name: "common i18n", children: sQ.A.getLocale() }),
                    (0, r.jsx)(nd, { name: "Moment", children: aJ().locale() }),
                ],
            }),
            (0, r.jsxs)(au.Ay, {
                children: [
                    (0, r.jsx)(au.Ay.Icon, { icon: sX.U, tooltip: "Messages" }),
                    (0, r.jsx)(au.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(no, {
                children: (0, r.jsx)(nd, { name: "Unique Rendered Main Messages", children: Object.keys(aP.t).length }),
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
            (0, r.jsxs)(no, {
                children: [
                    (0, r.jsx)(nd, { name: "Hashed key", children: n }),
                    (0, r.jsx)(nd, { name: "Exists?", children: null != l ? "yes" : "no" }),
                ],
            }),
            (0, r.jsx)(a_, { data: l?.(e) }),
        ],
    });
}
var s1 = a(76335);
function s2() {
    let { node: e } = (0, B.Ay)(s1.F, "");
    return (0, r.jsx)(c.Ip, {
        className: tN.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)(U.A, { node: e }, e.key),
        }),
    });
}
var s8 = a(361158),
    s7 = a(80556),
    s3 = a(907135),
    s9 = a(665095),
    s6 = a(87404);
function s4() {
    return (0, r.jsx)(c.Ip, {
        className: tN.nd,
        children: (0, r.jsxs)("div", {
            className: l5.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: l5.uW,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Verification Layer" }),
                        (0, r.jsx)("div", {
                            className: l5.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: () => {
                                    (0, s8.B8)(() => (0, r.jsx)(s9.A, {}), { layerKey: s6._s, Layer: s7.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: l5.uW,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Safety Flow" }),
                        (0, r.jsx)("div", {
                            className: l5.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: () => {
                                    (0, s8.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, r.jsx)(s3.A, { onClose: t });
                                        },
                                        { layerKey: s6._s, Layer: s7.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: l5.uW,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Layer Controls" }),
                        (0, r.jsx)("div", {
                            className: l5.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: () => {
                                    s8.xr.setState({ fullScreenLayers: [] });
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
var s5 = a(687813),
    re = a(604121);
let rt = {
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
function ra(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let n = new Uint8Array(e);
                    s5.$1(n, (e, n) => {
                        null != e && a(e);
                        let l = Object.keys(n).reduce((e, t) => ({ ...e, [t]: JSON.parse(s5.he(n[t])) }), {}),
                            i = l["manifest.json"];
                        t(l[`animations/${i.animations[0].id}.json`]);
                    });
                }),
        );
}
function rn() {
    let [e, t] = o.useState(void 0),
        [a, n] = o.useState(400),
        [l, i] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)(k.B, {
            gap: 24,
            children: [
                (0, r.jsx)(lh.Z, {
                    options: Object.keys(rt).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)(k.B, {
                    gap: 8,
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(g.k, { value: a.toString(), onChange: (e) => n(Number(e)), label: "Width" }),
                        (0, r.jsx)(g.k, { value: l.toString(), onChange: (e) => i(Number(e)), label: "Height" }),
                    ],
                }),
                (0, r.jsx)(p.$, {
                    size: "sm",
                    disabled: null == e,
                    onClick: async () => {
                        if (null == e) return;
                        let t = rt[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(ra).then(eR().cloneDeep)
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
                            re.a,
                            {
                                importData: () => {
                                    let t = rt[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(ra).then(eR().cloneDeep)
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
var rl = a(442433),
    ri = a(395671);
let rs = {
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
            return () => (0, r.jsx)(e, { application: t, channelId: "987654321", onClose: rl.Z_ });
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
                    a.e("68587"),
                    a.e("22547"),
                    a.e("42749"),
                    a.e("56026"),
                    a.e("16301"),
                    a.e("22191"),
                    a.e("30501"),
                    a.e("25961"),
                    a.e("13848"),
                    a.e("47810"),
                    a.e("46291"),
                    a.e("41068"),
                    a.e("32347"),
                    a.e("8458"),
                    a.e("15666"),
                    a.e("11810"),
                    a.e("95765"),
                    a.e("13337"),
                    a.e("65338"),
                    a.e("60467"),
                    a.e("87500"),
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
            return (t) => (0, r.jsx)(e, { ...t, onClose: rl.Z_ });
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
                        console.log("Leave role clicked"), (0, rl.Z_)();
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await a.e("89346").then(a.bind(a, 949881)),
                { ContentInventoryEntryType: t } = await Promise.resolve().then(a.bind(a, 681154)),
                { ContentInventoryAuthorType: n } = await Promise.resolve().then(a.bind(a, 6161)),
                l = F.default.getCurrentUser(),
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
                              console.log("Add form field:", e), (0, rl.Z_)();
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
                for (let t of Object.values(tX.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = tX.A.getAllThreadsForParent(t.id);
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
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rl.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await a.e("14878").then(a.bind(a, 316173)),
                t = Object.values(aR.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rl.Z_ });
        },
    },
    rr = {
        GuildShopSortOptions: o.lazy(async () => {
            let { default: e } = await a.e("50974").then(a.bind(a, 324269)),
                { default: t } = await a.e("55197").then(a.bind(a, 558060));
            return { default: () => (0, r.jsx)(t, { defaultSortOption: void 0, children: (0, r.jsx)(e, {}) }) };
        }),
    };
function ro() {
    let e = o.useMemo(
            () =>
                Object.keys(rs)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = o.useMemo(
            () =>
                Object.keys(rr)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, n] = o.useState(null),
        [l, i] = o.useState(null),
        s = o.useCallback(
            (e) => {
                null != a && (0, rl.L3)(e, rs[a]);
            },
            [a],
        ),
        d = null != l ? rr[l] : null;
    return (0, r.jsx)(c.Ip, {
        className: tN.nd,
        children: (0, r.jsxs)(k.B, {
            className: l5.l$,
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
                        (0, r.jsx)(lh.Z, {
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
                    children: (0, r.jsx)(lh.Z, {
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
var rd = a(253506),
    rc = a(665260),
    ru = a(97808),
    rm = a(778712),
    rh = a(308528),
    rp = a(571694),
    rx = a(704844),
    rg = a(567761),
    rv = a(716371),
    rb = a(48182);
function r_() {
    let e = (0, d.yK)([rg.default], () => rg.default.getSortedChannels()[1]),
        [t, a] = o.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: n, options: l } = (0, d.cf)([tX.A, F.default, tZ.A], () => ({
            selectedChannel: tX.A.getChannel(t),
            options: e.map((e) => {
                let t = tX.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, tQ.m1)(t, F.default, tZ.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, r.jsx)(ru.eu, { src: (0, rp.Y)(t), "aria-hidden": !0, size: rm._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        i = o.useCallback(() => {
            if (null == n || !n.isPrivate()) return;
            let e = (0, rc.PQ)(n.recipientFlags ?? 0, rd.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            rx.A.updatePrivateChannelRecipientFlags(n.id, e);
        }, [n]),
        s = !!n?.isPrivate() && (0, rc.Lt)(n.recipientFlags ?? 0, rd.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: rb.gs,
        children: [
            (0, r.jsx)(lh.Z, {
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
function rf() {
    let e = o.useCallback(() => {
        rh.A.openPrivateChannel({ recipientIds: [rv.K] });
    }, []);
    return (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function rj() {
    let e = (0, d.bG)([ac.Ay], () => ac.Ay.allByCategory(ac.xW.MESSAGING), [], d.My).map((e) => {
        let [t, a, { label: n }] = e;
        return (0, r.jsx)(b.d, { label: n, description: t, checked: a, onChange: (e) => ic(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: E()(tN.nd, rb.nd),
        children: [
            e,
            (0, r.jsx)("div", { className: rb.yF }),
            (0, r.jsx)(r_, {}),
            (0, r.jsx)("div", { className: rb.yF }),
            (0, r.jsx)(rf, {}),
        ],
    });
}
var ry = a(205693),
    rC = a(772707),
    rE = a(150934),
    rS = a(598653),
    rN = a(166403),
    rA = a(625494),
    rk = a(204925);
let rI = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e("29232").then(a.bind(a, 180275));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: aP.intl.string(aP.t.ZLRYGU),
                confirmButtonText: aP.intl.string(aP.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e("19840").then(a.bind(a, 79779));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: aP.intl.string(aP.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: aP.intl.string(aP.t["13ofGu"]),
                impression: { impressionName: iL.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await a.e("18467").then(a.bind(a, 297102));
        return (t) => (0, r.jsx)(e, { ...t, entryPoint: az.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e("10136"), a.e("53333")]).then(a.bind(a, 776971));
        return (t) => (0, r.jsx)(e, { ...t, source: rk.w_.NSFW_SERVER });
    },
    ExistingUserAgeGateUnderage: async () => {
        let { default: e } = await a.e("80959").then(a.bind(a, 784578));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NewUserAgeGate: async () => {
        let { default: e } = await a.e("1143").then(a.bind(a, 284778));
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
        return (t) => (0, r.jsx)(e, { ...t, mediaEngineContext: ry.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, r.jsx)(rC.k, {
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
        return (i.displayName = "PremiumSubscriptionPauseModalWrapper"), (e) => (0, r.jsx)(i, { ...e });
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
        let { default: e } = await a.e("38035").then(a.bind(a, 14860)),
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
                (t.default.getDevicesForPlatform = (e) => (e === H.fg2.PLAYSTATION ? i : n.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== H.fg2.PLAYSTATION && s.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === H.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
                    (t.default.getAwaitingRemoteSessionInfo = () => null);
                let c = a.onClose;
                return (
                    (a.onClose = async () => {
                        (t.default.getDevicesForPlatform = n),
                            (t.default.getFetchingDevices = s),
                            (t.default.getLastSelectedDeviceByPlatform = o),
                            (t.default.getAwaitingRemoteSessionInfo = d),
                            await c();
                    }),
                    (0, r.jsx)(e, { ...a, channel: l, platform: H.fg2.PLAYSTATION })
                );
            };
        return (s.displayName = "PlayStationModalWrapper"), s;
    },
    GameDetectionReportModal: async () => {
        let { default: e } = await a.e("82733").then(a.bind(a, 651930));
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
                ButtonGroup: i,
            } = await a.e("88017").then(a.bind(a, 844616)),
            { DisableCommunicationDuration: s, getFriendlyDurationString: o } = await Promise.resolve().then(
                a.bind(a, 200700),
            ),
            d = await Promise.resolve().then(a.t.bind(a, 64700, 19)),
            c = "TestUser";
        function u(a) {
            let [u, m] = d.useState(s.DURATION_60_SEC),
                [h, p] = d.useState(""),
                [x, g] = d.useState(!1),
                [v, b] = d.useState(!1),
                _ = [
                    { value: s.DURATION_60_SEC, label: o(s.DURATION_60_SEC) },
                    { value: s.DURATION_5_MIN, label: o(s.DURATION_5_MIN) },
                    { value: s.DURATION_10_MIN, label: o(s.DURATION_10_MIN) },
                    { value: s.DURATION_1_HOUR, label: o(s.DURATION_1_HOUR) },
                    { value: s.DURATION_1_DAY, label: o(s.DURATION_1_DAY) },
                    { value: s.DURATION_1_WEEK, label: o(s.DURATION_1_WEEK) },
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
                            (0, r.jsx)(i, {
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
        let { Button: e, Text: t, Heading: n, Checkbox: l } = await a.e("88017").then(a.bind(a, 844616)),
            i = await Promise.resolve().then(a.t.bind(a, 64700, 19)),
            s = "Level 3 Server Boost",
            o = 200,
            d = 60,
            c = 8;
        function u(a) {
            let [u, m] = i.useState(!1),
                [h, p] = i.useState(!1),
                x = i.useCallback(async () => {
                    p(!0),
                        console.log("GuildPowerupDeactivateModal: Deactivating powerup", {
                            powerup: s,
                            guildId: "123456789",
                        }),
                        await new Promise((e) => setTimeout(e, 2e3)),
                        p(!1),
                        a.onClose();
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
            { Text: t, Heading: n } = await a.e("88017").then(a.bind(a, 844616)),
            l = await Promise.resolve().then(a.t.bind(a, 64700, 19));
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
                                (0, r.jsx)(rE.S, {
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
                                (0, r.jsx)(rE.S, {
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
        return (i.displayName = "ConsentCheckBoxModalContent"), (e) => (0, r.jsx)(i, { ...e });
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
            t = rN.A.getPremiumGroupSubscription();
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
        let { default: e } = await a.e("91976").then(a.bind(a, 526710));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    NewUserOnboarding: async () => {
        let { default: e } = await Promise.all([a.e("46881"), a.e("19183"), a.e("86996")]).then(a.bind(a, 923314));
        return (t) => (0, r.jsx)(e, { ...t });
    },
};
function rT() {
    let e = o.useMemo(
            () =>
                Object.keys(rI)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(c.Ip, {
        className: tN.nd,
        children: (0, r.jsxs)("div", {
            className: l5.l$,
            children: [
                (0, r.jsx)("section", {
                    className: l5.uW,
                    children: (0, r.jsxs)(k.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(lh.Z, {
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
                                onClick: () => null != t && (0, eA.openModalLazy)(rI[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: l5.uW,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: l5.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, rS.o)(!0), rA._.dispatch(H.jej.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var rD = a(933832),
    rw = a(472229),
    rO = a(694080),
    rR = a(354670),
    rL = a(927578);
let rM = async () => {
        try {
            let { body: e } = await nD.Bo.get({ url: H.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
            return e;
        } catch (e) {
            return [];
        }
    },
    rP = async (e, t) => {
        try {
            await nD.Bo.post({ url: H.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, rO._D)();
        }
    },
    rU = async (e, t) => {
        try {
            await nD.Bo.del({ url: H.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, rO._D)();
        }
    },
    rB = async () => {
        try {
            let { body: e } = await nD.Bo.get({ url: H.Rsh.USER_OFFERS, rejectWithError: !0 });
            return e;
        } catch (e) {
            return { trial: [], discount: [] };
        }
    },
    rG = async () => {
        try {
            await nD.Bo.del({ url: H.Rsh.USER_OFFERS, rejectWithError: !0 });
        } catch {
        } finally {
            await rR.A.forceReset(), await (0, rO._D)();
        }
    },
    rF = async (e) => {
        await nD.Bo.post({ url: H.Rsh.CREATE_REVERSE_TRIAL, body: { ends_at: e }, rejectWithError: !0 });
    };
function rV(e) {
    let { offer: t, offerOptions: a, forceRefetch: n } = e,
        [l, i] = o.useState(!1),
        [s, d] = o.useState(!1),
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
        C = b?.sku_id === l2.pe.TIER_0,
        A = async () => {
            u(!0), j ? await k({ expiresAt: null }) : await (0, rO.u1)(t), n(), u(!1);
        },
        k = async (e) => {
            u(!0);
            try {
                await nD.Bo.patch({
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
                i(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
        if (s) {
            let e = setTimeout(() => {
                d(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
    }, [l, s]);
    let I = "Active";
    return (
        j && (I = "Acked"),
        y && (I = "Expired"),
        (0, r.jsxs)("div", {
            className: E()(l5.Nr, C ? l5.Qf : l5.C1),
            children: [
                (0, r.jsx)("div", {
                    className: E()(l5.nM, l5.S7),
                    children: (0, r.jsx)(T.D, { variant: "heading-lg/semibold", color: "always-white", children: f }),
                }),
                (0, r.jsxs)(S.D, {
                    className: E()(l5.nM, l5.QB),
                    onClick: () => {
                        (0, a9.C)(p, () => i(!0));
                    },
                    children: [
                        (0, r.jsxs)(N.E, { variant: "eyebrow", color: "always-white", children: ["Offer: ", p] }),
                        l
                            ? (0, r.jsx)(rD.A, { size: "md", color: "currentColor", className: l5.Kk })
                            : (0, r.jsx)(aX.T, { size: "xs", color: "currentColor", className: l5.Kk }),
                    ],
                }),
                (0, r.jsxs)(S.D, {
                    className: E()(l5.nM, l5.QB),
                    onClick: () => {
                        (0, a9.C)(v, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(N.E, { variant: "eyebrow", color: "always-white", children: ["Trial: ", v] }),
                        s
                            ? (0, r.jsx)(rD.A, { size: "md", color: "currentColor", className: l5.Kk })
                            : (0, r.jsx)(aX.T, { size: "xs", color: "currentColor", className: l5.Kk }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: l5.nM,
                    children: (0, r.jsxs)(N.E, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, rL.re)({
                                intervalType: b?.interval ?? l2.WT.MONTH,
                                intervalCount: b?.interval_count ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: l5.nM,
                    children: [
                        (0, r.jsxs)(N.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, rw.A)(), "):"],
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
                    className: l5.nM,
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
                    className: l5.fC,
                    children: [
                        (0, r.jsx)(S.D, {
                            onClick: A,
                            className: E()(l5.qS, l5.vk, { [l5.R1]: j, [l5._7]: y }),
                            children: (0, r.jsx)(N.E, {
                                variant: "eyebrow",
                                color: "Acked" === I ? void 0 : "always-white",
                                children: I,
                            }),
                        }),
                        null != g &&
                            (0, r.jsx)("div", {
                                className: E()(l5.qS, l5.k3),
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
                        u(!0), await rU(p, "trial"), n(), u(!1);
                    },
                    children: (0, r.jsx)(a1.u, { size: "md", color: "currentColor", className: E()(l5.Kk, l5.IT) }),
                }),
                (0, r.jsx)("div", { className: E()(l5.g4, { [l5.VP]: c || m }), children: (0, r.jsx)(eX.y, {}) }),
            ],
        })
    );
}
function r$(e) {
    let { offer: t, offerOptions: a, forceRefetch: n } = e,
        [l, i] = o.useState(!1),
        [s, d] = o.useState(!1),
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
            u(!0), f ? await C({ expiresAt: null }) : await (0, rO.u1)(void 0, t), n(), u(!1);
        },
        C = async (e) => {
            let { expiresAt: t } = e;
            u(!0);
            try {
                await nD.Bo.patch({
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
                i(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
        if (s) {
            let e = setTimeout(() => {
                d(!1);
            }, 3e3);
            return () => {
                clearTimeout(e);
            };
        }
    }, [l, s]);
    let A = "Active";
    return (
        j && (A = "Expired"),
        f && (A = "Acked"),
        (0, r.jsxs)("div", {
            className: E()(l5.Nr, l5.id),
            children: [
                (0, r.jsx)("div", {
                    className: E()(l5.nM, l5.S7),
                    children: (0, r.jsx)(T.D, { variant: "heading-lg/semibold", color: "text-default", children: _ }),
                }),
                (0, r.jsxs)(S.D, {
                    className: E()(l5.nM, l5.QB),
                    onClick: () => {
                        (0, a9.C)(p, () => i(!0));
                    },
                    children: [
                        (0, r.jsxs)(N.E, { variant: "eyebrow", color: "text-default", children: ["Offer: ", p] }),
                        l
                            ? (0, r.jsx)(rD.A, { size: "md", color: "currentColor", className: E()(l5.Kk, l5.mK) })
                            : (0, r.jsx)(aX.T, { size: "xs", color: "currentColor", className: l5.Kk }),
                    ],
                }),
                (0, r.jsxs)(S.D, {
                    className: E()(l5.nM, l5.QB),
                    onClick: () => {
                        (0, a9.C)(v, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(N.E, { variant: "eyebrow", color: "text-default", children: ["Discount: ", v] }),
                        s
                            ? (0, r.jsx)(rD.A, { size: "md", color: "currentColor", className: E()(l5.Kk, l5.mK) })
                            : (0, r.jsx)(aX.T, { size: "xs", color: "currentColor", className: l5.Kk }),
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
                    className: l5.nM,
                    children: [
                        (0, r.jsxs)(N.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, rw.A)(), "):"],
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
                    className: l5.fC,
                    children: [
                        (0, r.jsx)(S.D, {
                            onClick: y,
                            className: E()(l5.qS, l5.vk, { [l5.R1]: f, [l5._7]: j }),
                            children: (0, r.jsx)(N.E, {
                                variant: "eyebrow",
                                color: "Acked" === A ? void 0 : "always-white",
                                children: A,
                            }),
                        }),
                        null != g &&
                            (0, r.jsx)("div", {
                                className: E()(l5.qS, l5.k3),
                                children: (0, r.jsx)(N.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(S.D, {
                    className: l5.aR,
                    onClick: async () => {
                        u(!0), await rU(p, "discount"), n(), u(!1);
                    },
                    children: (0, r.jsx)(a1.u, { size: "md", color: "currentColor", className: E()(l5.Kk, l5.fy) }),
                }),
                (0, r.jsx)("div", { className: E()(l5.g4, { [l5.VP]: c || m }), children: (0, r.jsx)(eX.y, {}) }),
            ],
        })
    );
}
function rW() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState([]),
        [l, i] = o.useState(),
        [s, d] = o.useState(),
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
                rM().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        r = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    t(a), n(r), null == l && i(a[0].value), null == s && d(r[0].value);
                });
        }, [e, a, l, s, v]),
        o.useEffect(() => {
            v &&
                (b(!1),
                rR.A.forceReset(),
                (0, rO._D)(),
                rB().then((e) => {
                    m(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        g(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [v]);
    let A = async () => {
            null != l && (await rP(l, "trial"), b(!0));
        },
        k = async () => {
            null != s && (await rP(s, "discount"), b(!0));
        },
        I = async () => {
            await rG(), b(!0);
        },
        D = async () => {
            let e = new Date(Date.now() + 60 * _ * 1e3).toISOString();
            await rF(e), S();
        };
    return (0, r.jsx)(c.Ip, {
        className: tN.nd,
        children: (0, r.jsxs)("div", {
            className: l5.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: l5.uW,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Utils" }),
                        (0, r.jsxs)("div", {
                            className: l5.Uo,
                            children: [
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear all User Offers",
                                    onClick: I,
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Mobile Trials DismissibleContent",
                                    onClick: () => (0, ll.xB)(nz.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, ll._N)(nz.M.NAGBAR_NOTICE_OFFER_EXPIRING),
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
                    className: l5.uW,
                    children: (0, r.jsxs)("div", {
                        className: l5.bd,
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
                                onSelectionChange: i,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(p.$, { variant: "primary", text: "Create", onClick: A }),
                        ],
                    }),
                }),
                (0, r.jsx)("section", {
                    className: l5.uW,
                    children: (0, r.jsxs)("div", {
                        className: l5.bd,
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Create a Discount Offer",
                                options: a,
                                formatOption: (e) => {
                                    let { label: t, value: a } = e;
                                    return { label: t, value: a, id: a };
                                },
                                value: s,
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
                        className: l5.uW,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Existing Trial Offers" }),
                            u.map((t) =>
                                (0, r.jsx)(rV, { offer: t, offerOptions: e, forceRefetch: () => b(!0) }, t.id),
                            ),
                        ],
                    }),
                h.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: l5.uW,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Existing Discount Offers" }),
                            h.map((e) =>
                                (0, r.jsx)(r$, { offer: e, offerOptions: a, forceRefetch: () => b(!0) }, e.id),
                            ),
                        ],
                    }),
                (0, r.jsx)("section", {
                    className: l5.uW,
                    children: (0, r.jsxs)("div", {
                        className: l5.bd,
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
                            (0, r.jsx)(p.$, { variant: "primary", text: "Create", onClick: D }),
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
                                    (0, r.jsx)(it, { entitlement: e, active: !0, onDelete: () => E(e.id) }, e.id),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var rH = a(935462),
    rz = a(260598),
    rK = a(93688),
    rY = a(495019),
    rq = a(676955),
    rJ = a(31300),
    rQ = a(500060),
    rX = a(391973),
    rZ = a(684013),
    r0 = a(765671),
    r1 = a(235986),
    r2 = a(742589),
    r8 = a(41984),
    r7 = a(181435),
    r3 = a(435736),
    r9 = a(833551),
    r6 = a(515183),
    r4 = a(489277),
    r5 = a(127242),
    oe = a(869014),
    ot = a(528772),
    oa = a(38502),
    on = a(532624),
    ol = a(773371),
    oi = a(996439),
    os = a(350535),
    or = a(9302),
    oo = a(644434),
    od = a(618137);
let oc = {
        [H.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: H.uss.CLICK_ZONE_DEBUG,
            id: (0, eh.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...oa.A.getWidgetDefaultSettings(H.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [H.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: H.uss.PERFORMANCE_DEBUG,
            id: (0, eh.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...oa.A.getWidgetDefaultSettings(H.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    ou = {};
function om(e) {
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
        (0, r.jsxs)(aQ.$n, {
            look: aQ.$n.Looks.LINK,
            color: aQ.$n.Colors.LINK,
            size: aQ.$n.Sizes.MIN,
            onClick: function () {
                (0, a9.C)(t, () => n(!0));
            },
            className: od.DT,
            children: ["Application Id: ", t, " ", a ? aP.intl.string(aP.t.t5VZ88) : null],
        })
    );
}
let oh = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, d.bG)([aT.Ay], () => aT.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            n = (0, d.bG)([aM.A], () => aM.A.getGameForPID(t.pid)),
            l = (0, d.bG)([aT.Ay], () => (null == a ? null : aT.Ay.getGameOverlayStatus(a)));
        return (0, r.jsxs)("div", {
            className: od.st,
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
                        children: (0, r.jsx)(om, { id: t.applicationId }),
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
                    className: od.st,
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
                        className: od.st,
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
    op = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.cf)([ol.default], () => ol.default.getOverlayPIDStatuses()),
            n = (0, d.cf)([r9.default], () => r9.default.getTrackedGames()),
            l = (0, d.bG)([ol.default], () => ol.default.isInputLocked(t), [t]),
            i = (0, d.bG)([ol.default], () => ol.default.DEV_isInputLockedV3(t), [t]),
            s = (0, d.bG)([ol.default], () => ol.default.DEV_isInputLocked(t), [t]),
            o = (0, d.bG)([ol.default], () => ol.default.isReady(t), [t]);
        return (0, r.jsxs)("div", {
            className: od.st,
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
                    children: ["isInputLockedV3: ", i],
                }),
                (0, r.jsxs)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV2: ", s],
                }),
                (0, r.jsxs)(N.E, { variant: "text-sm/normal", color: "text-strong", children: ["isReady: ", o] }),
            ],
        });
    });
function ox(e) {
    let t,
        a = ((t = Object.values((0, d.yK)([oa.A], () => oa.A.getWidgetsForLayout(oo.G)))), t.find((t) => t.type === e));
    return [
        a,
        () => {
            if (null != a) (0, rX.uv)(a.id);
            else {
                let t = oc[e];
                if (null == t) return;
                let a = t(oo.G);
                (0, rX.jn)(a);
            }
        },
    ];
}
function og(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, a6.i$)(aJ()(e), "h:mm:ss.SSS");
}
let ov = o.memo(function (e) {
    let { pid: t, ...a } = e,
        n = (0, d.bG)([r9.default], () => {
            if (null == t) return "Unknown";
            let e = r9.default.getTrackedGameByPid(t)?.gameName;
            return null != e ? ((ou[t] = e), e) : (ou[t] ?? "Unknown");
        }, [t]);
    return (0, r.jsx)(N.E, { ...a, variant: "text-md/semibold", color: "text-strong", children: n });
});
function ob() {
    let e = (0, d.bG)([r5.A], () => r5.A.hasRenderDebugMode(r8.x7.TrackFocusPIDs)),
        t = (0, d.yK)([r9.default], () => r9.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, r.jsxs)("div", {
        className: od.st,
        children: [
            (0, r.jsxs)("div", {
                className: od.Iv,
                children: [
                    (0, r.jsx)(b.d, {
                        checked: e,
                        onChange: () =>
                            void rZ.A.setRenderDebugMode(
                                !r5.A.hasRenderDebugMode(r8.x7.TrackFocusPIDs),
                                r8.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, r.jsx)(S.D, {
                        className: od.LL,
                        onClick: () => rZ.A.clearTrackedPids(),
                        children: (0, r.jsx)(a1.u, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(c.Ip, {
                className: E()(od.st, od.XG),
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
                                children: (0, r.jsx)(lk.m, {
                                    position: "left",
                                    text: n === r8.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(N.E, {
                                            variant: "text-sm/medium",
                                            color: n === r8.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, r.jsx)(ov, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                og(t),
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
let o_ = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.bG)([r9.default, aT.Ay], () => {
                if (null == t) return null;
                let e = r9.default.getTrackedGameByPid(t)?.fullscreenType;
                if (null != e) return e;
                let a = aT.Ay.getGameOrTransformedSubgameForPID(t);
                return a?.fullscreenType ?? lg.aI.UNKNOWN;
            }, [t]);
        return (0, r.jsxs)(N.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, r6.wR)(a) : "Unknown"],
        });
    }),
    of = o.memo(function () {
        let e = (0, d.cf)([r9.default], () => r9.default.getTrackedGames()),
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
                    }, +nO.A.Millis.SECOND)),
                    () => clearInterval(n.current)
                ),
                [],
            ),
            (0, r.jsx)(lk.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(c.Ip, {
                        className: E()(od.st, od.XG),
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
                                            (0, r.jsx)(ov, { tag: "div", pid: e.pid }),
                                            (0, r.jsx)(o_, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: n } = t;
                                                    return (0, r.jsx)(
                                                        N.E,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, r6.wR)(a)} @ ${og(n)}`,
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
    oj = o.memo(function () {
        let e = (0, d.cf)([r9.default], () => r9.default.getTrackedGames()),
            t = (0, or.getPID)(),
            a = (0, d.bG)([r9.default], () => r9.default.isOverlayOOPEnabledForPid(t), [t]),
            [n, l] = (0, d.yK)([ot.A], () => [ot.A.enabled, ot.A.keepOpen]),
            i = (0, d.bG)([ol.default], () => ol.default.getFocusedPID()),
            s = (0, d.bG)([ol.default], () => ol.default.isFocusedPidOutOfProcess());
        return (0, r.jsxs)("div", {
            className: od.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, r.jsx)(N.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, r.jsx)(op, { pid: e.pid }, e.pid)),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)(N.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["focusedPID: ", i?.toString() ?? "null"],
                        }),
                        (0, r.jsxs)(N.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isFocusedPidOutOfProcess: ", s ? "Yes" : "No"],
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
    oy = [
        {
            mode: r8.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: r8.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: r8.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: r8.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: r8.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: r8.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: r8.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    oC = o.memo(function () {
        let [e, t] = ox(H.uss.CLICK_ZONE_DEBUG),
            [a, n] = ox(H.uss.PERFORMANCE_DEBUG),
            l = (0, d.bG)([r5.A], () => r5.A.getRenderDebugModes()),
            [i, s] = o.useState({});
        return (
            o.useEffect(() => {
                let e = setInterval(() => {
                    s({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, r.jsx)("div", {
                className: od.st,
                children: oy.map((i) => {
                    let s =
                            i.mode === r8.x7.OverlayRafManagerForceEnabled
                                ? `${i.label} (${oe.A.getLastRAFCallbackReason()})`
                                : i.label,
                        d = () =>
                            i.mode === r8.x7.ClickZones
                                ? null != e
                                : i.mode === r8.x7.WidgetAreas
                                  ? null != a
                                  : l.has(i.mode);
                    return (0, r.jsx)(
                        o.Fragment,
                        {
                            children: (0, r.jsx)(b.d, {
                                checked: d(),
                                onChange: () => {
                                    var e;
                                    let a = d();
                                    i.mode === r8.x7.ClickZones && t(),
                                        i.mode === r8.x7.WidgetAreas && n(),
                                        (e = i.mode),
                                        rZ.A.setRenderDebugMode(!a, e);
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
    oE = o.memo(function () {
        let e = (0, d.cf)([r9.default], () => r9.default.getTrackedGames()),
            t = (0, d.bG)([aT.Ay], () => aT.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(lk.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: od.st,
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
                                                (0, r.jsx)(o_, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, r.jsx)(lk.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: od.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, r.jsx)(N.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, r.jsx)(oh, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    oS = o.memo(function () {
        let e = (0, d.bG)([r9.default], () => r9.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            n = [
                { label: r8.V6.UNSET, value: r8.V6.UNSET, id: r8.V6.UNSET },
                { label: r8.V6.IN_PROCESS_V2, value: r8.V6.IN_PROCESS_V2, id: r8.V6.IN_PROCESS_V2 },
                { label: r8.V6.OUT_OF_PROCESS_V3, value: r8.V6.OUT_OF_PROCESS_V3, id: r8.V6.OUT_OF_PROCESS_V3 },
                {
                    label: r8.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: r8.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: r8.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, r.jsx)(x.l, {
            label: "Override the overlay render mode",
            value: t,
            options: n,
            onSelectionChange: (e) => {
                a(e), rZ.A.forceRenderMode(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function oN(e) {
    let { modalProps: t, onClose: a } = e,
        [n, l] = o.useState(null);
    function i() {
        a(null);
    }
    return (0, r.jsxs)(rH.EO, {
        size: rH.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, r.jsxs)(rH.rQ, {
                align: r1.A.Align.CENTER,
                justify: r1.A.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(N.E, {
                        variant: "text-md/bold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, r.jsx)(rH.s_, { onClick: i }),
                ],
            }),
            (0, r.jsx)(rH.$m, {
                children: (0, r.jsx)("div", {
                    className: od.st,
                    children: (0, r.jsx)(rz.f, { label: "Paste JSON Here", onChange: l, value: n ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(rH.jl, {
                children: (0, r.jsxs)(lH.e, {
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
let oA = {
    native: { label: "Native", filter: (e) => e.type === r7.ON.NativeLegacy || e.type === r7.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === r7.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === r7.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === r7.ON.OOPModule || e.type === r7.ON.LegacyModule },
};
function ok(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r7.QJ.Info;
    if (t === r7.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case r7.ON.NativeLegacy:
            return "var(--yellow-500)";
        case r7.ON.NativeOOP:
            return "var(--green-500)";
        case r7.ON.Flux:
            return "var(--brand-400)";
        case r7.ON.Renderer:
            return "var(--brand-500)";
        case r7.ON.LegacyModule:
            return "var(--yellow-300)";
        case r7.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let oI = [
    {
        key: "type",
        cellClassName: od.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                n = oT(t);
            return (0, r.jsx)("div", {
                className: od.g$,
                style: { color: ok(t, a) },
                children: (0, r.jsx)(n, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "name",
        cellClassName: od.Cm,
        render(e) {
            let { name: t, type: a, logType: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(N.E, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case r7.QJ.Info:
                                    return "text-strong";
                                case r7.QJ.Warning:
                                    return "text-feedback-warning";
                                case r7.QJ.Error:
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
        cellClassName: od.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, a6.i$)(aJ()(t), "h:mm:ss.SSS");
        },
    },
];
function oT(e) {
    switch (e) {
        case r7.ON.NativeLegacy:
            return rK.W;
        case r7.ON.NativeOOP:
            return rY.q;
        case r7.ON.Renderer:
        case r7.ON.Flux:
            return rq.v;
        case r7.ON.LegacyModule:
            return rJ.k;
        case r7.ON.OOPModule:
            return rQ.o;
        default:
            return rJ.k;
    }
}
function oD(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let ow = ["__webpack_require__", "fn"],
    oO = ["web.js", "web.js.map"],
    oR = [
        {
            id: "details",
            name: "Details",
            group: aE.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: n, type: l, logType: i, nativeId: s, stack: o, data: d, timestamp: u, pid: m } = t,
                    h = aJ()(u),
                    p = oT(l);
                return (0, r.jsxs)(c.Ar, {
                    className: od.bW,
                    children: [
                        (0, r.jsxs)(r2.A, {
                            className: E()(tN.jr, od.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: ok(l, i) },
                                    className: od.nr,
                                    children: (0, r.jsx)(p, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(r2.A.Title, {
                                    wrapperClassName: od.qd,
                                    children: [
                                        n,
                                        " (",
                                        l,
                                        ")",
                                        (0, r.jsx)(S.D, {
                                            tag: "span",
                                            className: od.KE,
                                            onClick: () => (0, a9.C)(n),
                                            children: (0, r.jsx)(aX.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(r2.A.Icon, {
                                    icon: aX.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, a9.C)(oD(t));
                                    },
                                }),
                                (0, r.jsx)(r2.A.Icon, { icon: a0.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(no, {
                            className: od.ZK,
                            children: [
                                (0, r.jsx)(nd, {
                                    name: "Timestamp",
                                    copyValue: h.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: h.toISOString(),
                                        title: (0, a6.i$)(h, "LLLL"),
                                        children: (0, a6.i$)(h, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, r.jsx)(nd, {
                                    name: "Log Type",
                                    copyValue: i,
                                    children: (0, r.jsx)("code", { children: i }),
                                }),
                                (0, r.jsx)(nd, {
                                    name: "PID",
                                    copyValue: m?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: m?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nd, {
                                    name: "Native ID",
                                    copyValue: s?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: s?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nd, {
                                    name: "Data",
                                    copyValue: oD(d),
                                    children: (0, r.jsx)("code", { children: oD(d) }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nd, {
                                        name: "Stack Trace",
                                        copyValue: o,
                                        children: (0, r.jsx)("code", {
                                            children: o.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, n, l, i] = a,
                                                        s = n.split(/[\\/]/).pop();
                                                    return ow.includes(e.trim())
                                                        ? null
                                                        : (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, r.jsx)("span", {
                                                                          className: od.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !oO.includes(s ?? "") &&
                                                                          (0, r.jsxs)(r.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, r.jsxs)("span", {
                                                                                      className: od.lz,
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
    oL = {
        searchType: a7.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: l } = e,
                i = [t, a, JSON.stringify(l)];
            return null != n && i.push(n), i;
        },
        throttleMs: 100,
    };
function oM() {
    let { ref: e, height: t } = (0, r0.Ay)(),
        a = (0, d.bG)([r5.A], () => r5.A.isModuleLoggingEnabled()),
        [n, l] = o.useState(a),
        [i, s] = o.useState(!1),
        [c, u] = o.useState(null),
        [m, h] = o.useState(Object.keys(oA)),
        [p, x] = (0, d.bG)([r5.A], () => r5.A.getOverlayLoggingBreadcrumbs(), [], oi.D),
        [g, v] = o.useState(null),
        b = g ?? p,
        _ = null != g ? -1 : x;
    o.useEffect(() => {
        0 !== _ &&
            (i
                ? u(b.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : u(null));
    }, [i, b, _]);
    let [f, j] = o.useState(""),
        y = o.useMemo(
            () =>
                0 === _
                    ? []
                    : b.filter((e) => {
                          if (i && null != c && e.timestamp < c) return !1;
                          for (let t of m) {
                              let { filter: a } = oA[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [b, m, c, i, _],
        ),
        [C, A] = o.useState(y),
        [k, I] = o.useState(null),
        T = o.useMemo(() => b.find((e) => e.key === k), [b, k]),
        D = o.useCallback((e) => {
            A(e);
        }, []),
        { renderSelectedTab: w } = (0, aE.Ay)({ tabs: oR }, []);
    (0, a3.RT)(f, y, D, oL, [b]);
    let O = o.useCallback((e) => {
            l(e), rZ.A.setModuleLogging(e);
        }, []),
        [R, L] = o.useState(!1),
        M = o.useRef(null),
        P = o.useCallback(() => {
            (0, a9.C)(JSON.stringify(y)), L(!0);
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
                        (0, r.jsx)(oN, {
                            modalProps: e,
                            onClose: (t) => {
                                U(t), e.onClose();
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    eI.SY,
                );
            },
            [U],
        );
    return (0, r.jsxs)("div", {
        ref: e,
        className: od.rh,
        children: [
            (0, r.jsxs)("div", {
                className: od.st,
                children: [
                    (0, r.jsxs)("div", {
                        className: E()(od._V, od.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: od.iR,
                                children: (0, r.jsx)(rE.S, { label: "Poll Native", checked: n, onChange: (e) => O(e) }),
                            }),
                            (0, r.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: od.iR,
                                children: (0, r.jsx)(rE.S, {
                                    label: "Only Active Games",
                                    checked: i,
                                    onChange: (e) => s(e),
                                }),
                            }),
                            (0, r.jsxs)(S.D, {
                                className: od.ny,
                                onClick: P,
                                children: [
                                    (0, r.jsx)(N.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: R ? "Copied" : "Copy All",
                                    }),
                                    R
                                        ? (0, r.jsx)(rD.A, { size: "sm", color: ek.A.unsafe_rawColors.GREEN_330.css })
                                        : (0, r.jsx)(aX.T, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(S.D, {
                                className: od.ny,
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
                        className: E()(od._V, od.XQ),
                        children: Object.entries(oA).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                S.D,
                                {
                                    className: E()(od.pb, m.includes(t) && od.bx),
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
                        className: od._V,
                        children: (0, r.jsx)(a2.I, {
                            query: f,
                            onChange: j,
                            onClear: () => j(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: E()(od.st, od.CZ),
                children: (0, r.jsx)(tA, {
                    columns: oI,
                    data: C,
                    selectedRowKey: k ?? void 0,
                    onClickRow: (e) => I(e.key),
                }),
            }),
            null != T &&
                (0, r.jsx)(aC, {
                    className: E()(od.st, od.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: w({ breadcrumb: T, onClose: () => I(null) }),
                }),
        ],
    });
}
let oP = o.memo(function () {
        let e = (0, d.bG)([r4.A], () => r4.A.getPopoutInitializationStages());
        return (0, r.jsxs)("div", {
            className: od.st,
            children: [
                (0, r.jsx)("div", {
                    className: od.Iv,
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
    oU = o.memo(function () {
        let e = (0, d.bG)([r5.A], () => r5.A.isStateDebuggingEnabled()),
            t = (0, d.bG)([r5.A], () => r5.A.getDebuggingState());
        return (
            o.useEffect(
                () => (
                    rZ.A.setStateDebugging(!0),
                    () => {
                        rZ.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, r.jsxs)("div", {
                className: od.st,
                children: [
                    (0, r.jsx)("div", {
                        className: od.Iv,
                        children: (0, r.jsx)(b.d, {
                            checked: e,
                            onChange: () => rZ.A.setStateDebugging(!e),
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
function oB() {
    return (0, r.jsx)(c.Ar, {
        children: (0, r.jsxs)("div", {
            className: E()(tN.nd, od.rf),
            children: [
                (0, r.jsx)(oC, {}),
                (0, r.jsx)(oS, {}),
                (0, r.jsx)(oE, {}),
                (0, r.jsx)(oj, {}),
                (0, r.jsx)(ob, {}),
                (0, r.jsx)(of, {}),
                (0, r.jsx)(oP, {}),
                (0, r.jsx)(oU, {}),
            ],
        }),
    });
}
let oG = (e) => {
        switch (e) {
            case "Disabled":
                return;
            case "False":
                return !1;
            case "True":
                return !0;
        }
    },
    oF = (e) => (null == e ? "Disabled" : e ? "True" : "False"),
    oV = o.memo(function () {
        let e = (0, r3.wW)(),
            t = (0, d.bG)([on.Ay], () => on.Ay.getOverlayKeybind());
        return (0, r.jsxs)("div", {
            className: od.st,
            children: [
                (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
                (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Experiment State" }),
                (0, r.jsx)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", {
                        children: JSON.stringify({ ...e, overlayKeybind: (0, os.dI)(t.shortcut) }, void 0, 2),
                    }),
                }),
                (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Overrides" }),
                (0, r.jsx)(x.l, {
                    label: "Overlay User Status",
                    description: "Override whether the current user was a new or existing user",
                    value: oF(e.overrideIsNewOverlayUser),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Existing user", value: "False", id: "False" },
                        { label: "New user", value: "True", id: "True" },
                    ],
                    onSelectionChange: (e) => {
                        (0, r3.sw)(oG(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(x.l, {
                    label: "Override Previous Keybind Status",
                    description: "Override whether the user's pre-experiment keybind was the default keybind",
                    value: oF(e.overrideIsUsingDefaultOverlayKeybind),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Using default keybind", value: "True", id: "True" },
                        { label: "Not using default keybind", value: "False", id: "False" },
                    ],
                    onSelectionChange: (e) => {
                        (0, r3.C3)(oG(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Actions" }),
                (0, r.jsx)(p.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, r3.xc)() }),
                (0, r.jsx)(p.$, {
                    size: "sm",
                    text: "Reset isUsingDefaultOverlayKeybind",
                    onClick: () => (0, r3.tM)(),
                }),
            ],
        });
    });
function o$() {
    return (0, r.jsx)(c.Ar, {
        children: (0, r.jsx)("div", { className: E()(tN.nd, od.rf), children: (0, r.jsx)(oV, {}) }),
    });
}
function oW() {
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
            className: E()(tN.nd, od.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: od._V,
                    children: [
                        (0, r.jsx)(S.D, {
                            className: E()(od.k0, "state" === e && od.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(N.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(S.D, {
                            className: E()(od.k0, "logging" === e && od.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(N.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(S.D, {
                            className: E()(od.k0, "experiments" === e && od.a),
                            onClick: () => t("experiments"),
                            children: (0, r.jsx)(N.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, r.jsx)(oB, {}),
                "logging" === e && (0, r.jsx)(oM, {}),
                "experiments" === e && (0, r.jsx)(o$, {}),
            ],
        })
    );
}
var oH = a(488428),
    oz = a(73825),
    oK = a(323082),
    oY = a(226991),
    oq = a(721923),
    oJ = a(300233),
    oQ = a(599941),
    oX = a(817649),
    oZ = a(4630),
    o0 = a(44120),
    o1 = a(532794),
    o2 = a(216678),
    o8 = a(194509),
    o7 = a(761705),
    o3 = a(65738),
    o9 = a(265768);
function o6(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, oQ.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, r.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(oX.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let o4 = function () {
    let [e, t] = o.useState(l2.pe.TIER_2),
        [a, n] = o.useState(null),
        l = (0, d.yK)([aR.A], () => aR.A.getGuildsArray()),
        [i] = (0, d.yK)([rN.A], () => [rN.A.getPremiumSubscription()]),
        s = l.map((e) => ({ id: e.id, value: e, label: e.name })),
        [u, h] = o.useState(s.length > 0 ? s[0].value : null),
        [b, _] = o.useState(""),
        [f, j] = o.useState({ plan_id: l2.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        y = "true" !== f.gift && null != i,
        [C, E] = o.useState(s.length > 0 ? s[0].value : null),
        { analyticsLocations: S } = (0, aN.Ay)(tr.A.PAYMENT_FLOW_TEST_PAGE),
        [A, I] = o.useState(""),
        [T, D] = o.useState(H.dJq),
        { balance: w, isFetching: O, error: R } = (0, o7.W)(),
        { isSubmitting: L, responseMessage: M, redeemVirtualCurrency: P } = (0, o7.Q)(),
        [U, B] = o.useState(H.dJq),
        [G, F] = o.useState(""),
        [V, $] = o.useState(H.dJq),
        [W, z] = o.useState(H.dJq);
    return (0, r.jsx)(aN.f5, {
        value: S,
        children: (0, r.jsx)(c.Ip, {
            className: o9.XG,
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
                                    { id: "tier_2", value: l2.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: l2.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: l2.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(o8.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: aQ.XD.PRIMARY,
                                look: aQ.pR.FILLED,
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
                                    { id: "tier_2", value: l2.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: l2.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: l2.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => n(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, o1.A)({ subscriptionTier: a, analyticsLocations: S }),
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
                                options: s,
                                onSelectionChange: (e) => h(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            null != u
                                ? (0, r.jsx)(oq.A, { guild: u, analyticsLocation: {} })
                                : (0, r.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(k.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(i4.Anchor, {
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
                                    (0, r.jsx)(lk.m, {
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
                                    { id: "tier_2", value: l2.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: l2.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: l2.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
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
                    (0, r.jsx)(lk.m, {
                        text: "Already subscribed",
                        shouldShow: y,
                        children: (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: y,
                            onClick: () => {
                                window.open(H.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + oH.stringify({ ...f }));
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
                                              className: o9.wG,
                                              children: (0, r.jsx)(eX.y, { type: eX.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: o9.dB,
                                              children: [
                                                  null !== R &&
                                                      (0, r.jsxs)(N.E, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              R.message,
                                                          ],
                                                      }),
                                                  (0, r.jsx)(o3.Gy, {
                                                      balance: w ?? 0,
                                                      balanceWidgetMode: o3.k7.SELECTED,
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
                                options: s,
                                onSelectionChange: (e) => E(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(oJ.H, {
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
                                        onChange: I,
                                    }),
                                    (0, r.jsx)(g.k, {
                                        label: "Sku Id",
                                        placeholder: "Sku Id",
                                        value: T,
                                        onChange: (e) => D(e),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, oZ.j)({
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
                                            (0, o2.A)({
                                                applicationId: G,
                                                skuId: V,
                                                analyticsLocations: S,
                                                checkoutFlow: oY.CL.PREMIUM_APPS_OTP_CHECKOUT,
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
                                onClick: () => (0, o0.A)({ skuId: W, analyticsLocations: S }),
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
                                    onClick: () => (0, oz.YG)(),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, oK.uZ)(),
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
                            onClick: () => (0, n1.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var o5 = a(219887),
    de = a(459357),
    dt = a(885180),
    da = a(742810),
    dn = a(500380),
    dl = a(102609),
    di = a(710195),
    ds = a(295405),
    dr = a(188976);
let dd = [
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
    dc = {
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
    du = [
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
    dm = {
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
    dh = [
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
    dp = {
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
function dx() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState(null),
        [l, i] = o.useState(null),
        [s, d] = o.useState(null),
        [u, m] = o.useState(null),
        [h, g] = o.useState("pm_card_us"),
        [v, b] = o.useState(!1),
        _ = Object.values((0, ts.bG)([ds.A], () => ds.A.paymentSources)),
        f = dc[e],
        j = async () => {
            let t = h;
            "" === t && (t = "pm_card_us"),
                await nD.Bo.post({
                    url: "/debug/payment-source",
                    body: { token: t, address: "US" === e ? l : "CA" === e ? u : null },
                    rejectWithError: !1,
                }),
                await (0, oK.$o)();
        },
        y = async () => {
            await nD.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }), await (0, oK.$o)();
        },
        C = async () => {
            await nD.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }), window.location.reload();
        };
    return (
        o.useEffect(() => {
            (0, oK.$o)();
        }, []),
        (0, r.jsx)(c.Ip, {
            className: tN.nd,
            children: (0, r.jsxs)("div", {
                className: l5.l$,
                children: [
                    (0, r.jsxs)(N.E, {
                        style: { marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, r.jsxs)("div", {
                        className: l5.Uo,
                        children: [
                            (0, r.jsx)(lh.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: dd
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, r.jsx)("img", {
                                                alt: "",
                                                className: dr.bI,
                                                src: (0, dn.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: (e) => {
                                    t(e), g(dc[e][0].value), b(1 === dc[e].length);
                                },
                            }),
                            "US" === e &&
                                (0, r.jsx)(x.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: du.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        n(e), i(dm[e] ?? null);
                                    },
                                }),
                            "CA" === e &&
                                (0, r.jsx)(x.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: s,
                                    options: dh.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        d(e), m(dp[e] ?? null);
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
                    (0, r.jsx)(dE, {}),
                    (0, r.jsx)(N.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Experiment Overrides",
                    }),
                    (0, r.jsx)(dj, {}),
                    (0, r.jsx)(N.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Existing Payment Sources",
                    }),
                    _.map((e) => (0, r.jsx)(dS, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let dg = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    dv = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) — Legacy checkout" },
        { id: "1", value: "1", label: "Treatment (1) — Unified checkout" },
    ],
    db = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) — Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) — Gift cards enabled" },
    ],
    d_ = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) — Payment elements disabled" },
        { id: "1", value: "1", label: "Treatment (1) — Payment elements enabled" },
    ];
function df(e) {
    let { experimentName: t, options: a = dg } = e,
        n = (0, ts.bG)([di.A, a5.default], () => {
            let e = a5.default.getId(),
                a = di.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        l = o.useCallback(
            (e) => {
                (0, dl.t$)(dl.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, r.jsx)(x.l, { selectionMode: "single", label: t, value: n, options: [...a], onSelectionChange: l });
}
function dj() {
    return (0, r.jsxs)(k.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(df, { experimentName: da.W2.definition.name, options: dv }),
            (0, r.jsx)(df, { experimentName: da._$.definition.name, options: dv }),
            (0, r.jsx)(df, { experimentName: de.A.definition.name, options: db }),
            (0, r.jsx)(df, { experimentName: dt._.definition.name, options: d_ }),
        ],
    });
}
let dy = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    dC = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function dE() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState("500"),
        [l, i] = o.useState(null),
        [s, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [m, h] = o.useState(null),
        v = parseInt(a, 10),
        b = !isNaN(v) && v >= 500 && v <= 5e3,
        _ = async () => {
            if (b) {
                d(!0), h(null), i(null), u(!1);
                try {
                    let t = await nD.Bo.post({
                        url: "/billing/gift-card/create-on-demand-pin",
                        body: { country: e, currency: dC[e], amount: v },
                        rejectWithError: !0,
                    });
                    i(t.body.pin);
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
                        options: dy,
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
                        loading: s,
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
function dS(e) {
    let { paymentSource: t } = e,
        a = async () => {
            await nD.Bo.patch({ url: H.Rsh.BILLING_PAYMENT_SOURCE(t.id), body: { default: !0 }, rejectWithError: !1 }),
                await (0, oK.$o)();
        };
    return (0, r.jsxs)("div", {
        className: l5.bd,
        children: [
            (0, r.jsx)(o5.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, r.jsx)("img", { alt: t.country, className: dr.bI, src: (0, dn.t)(t.country) }),
            t.isDefault
                ? (0, r.jsx)(N.E, { variant: "text-sm/medium", children: "(Default)" })
                : (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Set as Default", onClick: a }),
        ],
    });
}
var dN = a(706712),
    dA = a(367727),
    dk = a(845886);
function dI() {
    return (0, r.jsx)(c.Ip, { className: dk.kL, children: (0, r.jsx)(dT, {}) });
}
function dT() {
    let e = o.useCallback(() => {
            (0, ll._N)(nz.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, dA.FZ)(nz.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(T.D, { className: dk.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, r.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, r.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, r.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, r.jsx)("div", {
                className: dk.PW,
                children: (0, r.jsx)(p.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var dD = a(136722),
    dw = a(576705),
    dO = a(309010),
    dR = a(558393),
    dL = a(719366),
    dM = a(842681);
function dP(e) {
    let { title: t, can: a } = e,
        n = a ? rD.A : L.P,
        l = (0, r.jsx)("div", {
            className: E()(dM.v_, a ? dM.uU : dM.Ss),
            children: (0, r.jsx)(n, { className: dM.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: dM.z8,
        children: [
            l,
            (0, r.jsx)("div", {
                className: dM.rv,
                children: (0, r.jsx)(N.E, { variant: "text-md/normal", children: t }),
            }),
        ],
    });
}
function dU() {
    let e = (0, d.bG)([dO.A], () => dO.A.getChannelId()),
        t = (0, d.bG)([aL.A], () => aL.A.getGuildId()),
        a = (0, d.bG)([tX.A], () => tX.A.getChannel(e)),
        n = (0, d.bG)([aR.A], () => aR.A.getGuild(t)),
        l = (0, d.bG)([dw.A], () => dw.A.computePermissions(a)),
        i = (0, d.bG)([dw.A], () => dw.A.computePermissions(n)),
        s = (0, tQ.Ay)(a, !0),
        o = null != a ? (0, dL.mW)(a, !1) : null,
        c = null != n ? dR.A.getGuildPermissionSpecMap(n) : null,
        u = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = dD.zy(l, a);
            return (0, r.jsx)(dP, { title: t, can: n }, t);
        }),
        m = Object.values(c ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = dD.zy(i, a);
            return (0, r.jsx)(dP, { title: t, can: n }, t);
        });
    return (0, r.jsx)("div", {
        className: E()(tN.nd, dM.nd),
        children: (0, r.jsxs)("div", {
            className: dM.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: dM.uW,
                    children: [
                        (0, r.jsx)(T.D, {
                            variant: "heading-md/semibold",
                            children: null != s ? `Permissions in ${s}` : "No channel selected",
                        }),
                        u,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: dM.uW,
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
var dB = a(873298),
    dG = a(775602),
    dF = a(363195),
    dV = a(253932),
    d$ = a(631670),
    dW = a(817281),
    dH = a(955572),
    dz = a(56348),
    dK = a(385803),
    dY = a(381941);
let dq = [H.NJ8.DARK, H.NJ8.LIGHT, H.NJ8.DARKER, H.NJ8.MIDNIGHT],
    dJ = [dB.NS.COMPACT, dB.NS.COZY, dB.NS.DEFAULT];
function dQ(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function dX() {
    let e,
        t =
            ((e = F.default.getCurrentUser()),
            rL.Ay.canUseClientThemes(e) ? Object.keys(dK.ag).map((e) => Number(e)) : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                n = dQ(a);
            if (null != n) {
                let t = dK.ag[n];
                e = t?.theme ?? H.NJ8.DARK;
            } else e = dQ([H.NJ8.DARK, H.NJ8.DARKER, H.NJ8.MIDNIGHT]);
            await dW.u_(
                { theme: e, backgroundGradientPresetId: n ?? void 0, customUserThemeSettings: void 0 },
                ll.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = dQ(dq);
            await dW.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                ll.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function dZ() {
    let e = td.A.purchases,
        t = (0, eg.x9)(e),
        a = (0, eg.$W)(e),
        n = t.length > 0,
        l = a.length > 0;
    if (n || l)
        try {
            let e = {};
            n && (e.avatarDecoration = dQ([...t, null])), l && (e.nameplate = dQ([...a, null])), (0, e7.p)(e);
            let i = e3.A.getPendingChanges(),
                s = (0, dz.Sk)(i);
            await (0, d$._L)(s).finally(d$.pZ);
        } catch (e) {}
}
function d0() {
    try {
        let e = dQ(H.hH7.FONT_SIZES);
        (0, dH.XS)(e);
        let t = dQ(dY.qh);
        (0, dH.AC)(t);
        let a = dQ(dJ);
        dV.Xi.updateSetting(a);
    } catch (e) {}
}
function d1() {
    (0, e4.Bf)();
    let e = (0, d.bG)([F.default], () => F.default.getCurrentUser()),
        t = dV.eh.useSetting(),
        a = (0, d.bG)([dF.A], () => dF.A.theme),
        n = t.backgroundGradientPresetId,
        l = (0, d.bG)([td.A], () => td.A.purchases),
        i = (0, eg.x9)(l),
        s = (0, eg.$W)(l),
        c = e?.avatarDecoration?.skuId,
        u = e?.collectibles?.nameplate?.skuId,
        m = null != c ? (i.find((e) => e.skuId === c) ?? null) : null,
        h = null != u ? (s.find((e) => e.skuId === u) ?? null) : null,
        x = (0, d.bG)([to.A], () => to.A.getProduct(m?.skuId)),
        g = (0, d.bG)([to.A], () => to.A.getProduct(h?.skuId)),
        v = (0, d.bG)([dG.A], () => dG.A.fontSize),
        b = (0, d.bG)([dG.A], () => dG.A.messageGroupSpacing),
        _ = dV.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = F.default.getCurrentUser(),
                t = dV.eh.getSetting(),
                a = td.A.purchases,
                n = (0, eg.x9)(a),
                l = (0, eg.$W)(a),
                i = dF.A.theme,
                s = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (n.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (l.find((e) => e.skuId === o) ?? null) : null,
                u = dG.A.fontSize,
                m = dG.A.messageGroupSpacing,
                h = dV.Xi.getSetting();
            return () => {
                try {
                    dW.u_(
                        { theme: i, backgroundGradientPresetId: s ?? void 0, customUserThemeSettings: void 0 },
                        ll.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, e7.p)({ avatarDecoration: d, nameplate: c });
                    let e = e3.A.getPendingChanges(),
                        t = (0, dz.Sk)(e);
                    (0, d$._L)(t).finally(d$.pZ), (0, dH.XS)(u), (0, dH.AC)(m), dV.Xi.updateSetting(h);
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: ld.kL,
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
                            onClick: dZ,
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: d0,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, r.jsxs)(N.E, { variant: "text-md/normal", children: ["Theme: ", a] }),
                        (0, r.jsxs)(N.E, {
                            variant: "text-md/normal",
                            children: ["Client Theme ID:", " ", null != n ? dK.ag[n]?.getName() : "None"],
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
                                        case dB.NS.COMPACT:
                                            return "Compact";
                                        case dB.NS.COZY:
                                            return "Cozy";
                                        case dB.NS.DEFAULT:
                                            return "Default";
                                        case dB.NS.RESPONSIVE:
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
var d2 = a(885574),
    d8 = a(311678),
    d7 = a(508274),
    d3 = a(837529);
let d9 = [5793266, 2303016],
    d6 = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function d4() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: n } = (0, d3.Zt)(),
        l = (0, q.Ay)(),
        i = (0, d.bG)([n6.A], () => n6.A.settings.appearance?.clientThemeSettings),
        s =
            i?.customUserThemeSettings != null &&
            null != i.customUserThemeSettings.colors &&
            i.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, dW.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), n(null));
    }
    return (0, r.jsx)(c.Ar, {
        children: (0, r.jsxs)(k.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(d8.N, {
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
                                    icon: d2.m,
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
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: d9 }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(lH.e, {
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
                                                onClick: () => t({ ...e, themeColors: d9 }),
                                            }),
                                            (0, r.jsxs)(k.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(N.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, r.jsx)(d7.VN, {
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
                                                    (0, r.jsx)(d7.VN, {
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
                                                disabled: s,
                                            }),
                                            s &&
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
                                                                i?.customUserThemeSettings != null &&
                                                                    n({
                                                                        theme: l,
                                                                        customUserThemeSettings:
                                                                            i.customUserThemeSettings,
                                                                    }),
                                                                    (0, dW.u_)({ theme: "system" });
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
var d5 = a(141931),
    ce = a(306173),
    ct = a(366853),
    ca = a(237984),
    cn = a(43203),
    cl = a(349435),
    ci = a(674272),
    cs = a(407186),
    cr = a(10094),
    co = a(683760);
let cd = () => {
    let e = (0, d.bG)([F.default], () => F.default.getCurrentUser()),
        t = (0, d.bG)([co.A], () => {
            let e = co.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, d.bG)([co.A], () => co.A.getPremiumTypeOverride());
    return (0, r.jsxs)(k.B, {
        gap: 16,
        children: [
            (0, r.jsx)(x.l, {
                label: "Override Client-Side Premium Type",
                options: l2.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, cr.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(lp.Q, {
                onClick: () => {
                    (0, cr.O)(l2.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(i1.J, {
                label: "Override Client-Side Account Created At Date",
                value: aJ()(t),
                onSelect: (e) => {
                    var t;
                    return (t = e.toISOString()), void (0, cr.Y)(new Date(t));
                },
            }),
            (0, r.jsx)(lp.Q, { onClick: () => (0, cr.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
};
var cc = a(19575),
    cu = a(327337),
    cm = a(431804),
    ch = a(865349),
    cp = a(818050);
function cx() {
    throw Error("Send help");
}
function cg() {
    let e = dV.j0.useSetting(),
        [t, n] = o.useState(!1);
    return t
        ? {}
        : (0, r.jsxs)(c.Ip, {
              children: [
                  (0, r.jsx)("div", { className: E()(ch.N, cp.SX), children: (0, r.jsx)(cd, {}) }),
                  (0, r.jsx)("div", {
                      className: E()(ch.N, cp.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, ci.A)({ source: cm.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: E()(ch.N, cp.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = dO.A.getChannelId() ?? "21154681615024128"),
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
                                                  warningType: cl._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: cu.V },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: E()(ch.N, cp.QB),
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
                      className: E()(ch.N, cp.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, cn.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: E()(ch.N, cp.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: ce.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: E()(ch.N, cp.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = ct.A.getSocket();
                              ty.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: E()(ch.N, cp.QB),
                      children: (0, r.jsx)(b.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => dV.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: E()(ch.N, cp.QB),
                      children: [
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, ca.o)(),
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  ct.A.getSocket().close(), ct.A.getSocket().connect();
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
                              onClick: () => (0, cs.sy)(!0),
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: () => {
                                  nD.Bo.post({ url: H.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: E()(ch.N, cp.QB),
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
                              onSelectionChange: (e) => null != e && cc.Ay.crash(e),
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
                                      value: d5.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: d5.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: d5.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void cc.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => n(!0),
                          }),
                          (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: cx }),
                      ],
                  }),
              ],
          });
}
var cv = a(593924),
    cb = a(653887),
    c_ = a(799226);
function cf() {
    let e = Object.keys(cv).map((e) => (0, r.jsx)(cC, { riveName: e }, e));
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
                (0, r.jsx)(cj, {}),
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
function cj() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(null),
        [l, i] = o.useState(null),
        [s, d] = o.useState([]),
        c = o.useRef(null),
        [u, m] = o.useState(400),
        [h, p] = o.useState(400),
        x = o.useCallback(() => {
            setTimeout(() => {
                i(c.current?.getProperties() ?? {}), d(c.current?.getArtboards() ?? []), n({});
            }, 1e3);
        }, []),
        v = o.useCallback(
            (e, t) => {
                null != a && n((a) => ({ ...a, [e]: { type: l?.[e]?.type, value: t } }));
            },
            [l, a],
        ),
        b = o.useCallback((e) => {
            i(null), n(null), t(e);
        }, []);
    return (0, r.jsxs)(k.B, {
        gap: 16,
        children: [
            (0, r.jsx)(cC, { riveName: "Rive inspector", onRiveLoad: b }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(cb._, { src: e, ref: c, onLoad: x, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, r.jsx)(eX.y, {}) : null,
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
                                        cy,
                                        {
                                            property: e,
                                            type: l?.[e]?.type,
                                            value: a?.[e]?.value ?? l?.[e]?.value,
                                            onChange: (t) => v(e, t),
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
function cy(e) {
    let { property: t, type: a, value: n, onChange: l, artboards: i } = e;
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
                  ? (0, r.jsx)(lh.Z, {
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
                    ? (0, r.jsx)(lh.Z, {
                          selectionMode: "single",
                          label: t,
                          value: n,
                          onSelectionChange: (e) => l(e),
                          closeOnSelect: !0,
                          placeholder: "Select an artboard...",
                          options: i.map((e) => ({ label: e, value: e, id: e })),
                      })
                    : null;
}
function cC(e) {
    let { riveName: t, onRiveLoad: a } = e,
        n = cv[t]?.riveSrc,
        l = null == n,
        i = o.useRef(null),
        s = (0, c_.Gy)(n);
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
                                    null != n && (0, c_.DS)(n, t), a?.(t);
                                }),
                                    l.readAsArrayBuffer(t);
                            },
                            ref: i,
                        }),
                        (0, r.jsx)(eE.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: () => {
                                null != i.current && (i.current.value = ""),
                                    null != n && (0, c_.DS)(n, null),
                                    a?.(null);
                            },
                            icon: a1.u,
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
var cE = a(290136),
    cS = a(106236),
    cN = a(629584),
    cA = a(600239),
    ck = a(940622),
    cI = a(961895),
    cT = a(343991),
    cD = a(699666);
let cw = () => {
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
            { modalKey: cT.D },
        );
    },
    cO = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    cR = (e) => {
        let { className: t, onDrop: a, children: n } = e,
            [l, i] = o.useState(!1),
            s = o.useRef(null),
            d = o.useCallback((e) => {
                cO(e), i(!0), (0, eA.closeModal)(cT.D);
            }, []),
            c = o.useCallback((e) => {
                cO(e);
                let t = s.current,
                    a = e.relatedTarget;
                (null != a && (null == t || t.contains(a))) || i(!1);
            }, []),
            u = o.useCallback(
                async (e) => {
                    cO(e), i(!1);
                    let t = e.dataTransfer;
                    if (null == t) return void cw();
                    let n = await Promise.all(
                        Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry()),
                    ).then((e) => e.filter((e) => null != e));
                    n.length > 0 ? a(n) : cw();
                },
                [a],
            );
        return (0, r.jsxs)("div", {
            ref: s,
            className: E()(t, cD.iE),
            onDragEnter: d,
            onDragOver: cO,
            onDragLeave: c,
            onDrop: u,
            children: [
                n,
                l &&
                    (0, r.jsx)("div", {
                        className: cD.d2,
                        children: (0, r.jsxs)("div", {
                            className: cD.vW,
                            children: [
                                (0, r.jsx)(cI.A, { icons: en.ir }),
                                (0, r.jsx)(T.D, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
                                (0, r.jsxs)("div", {
                                    className: cD.GA,
                                    children: [
                                        (0, r.jsx)(N.E, {
                                            variant: "text-sm/normal",
                                            children: "Drop file(s) into this panel to preview Shop assets!",
                                        }),
                                        (0, r.jsxs)(N.E, {
                                            variant: "text-sm/normal",
                                            children: [
                                                "Click",
                                                (0, r.jsx)(cE.c, {
                                                    className: cD.q4,
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
    cL = new Set([
        eb.RN.HERO_BANNER_STATIC,
        eb.RN.HERO_LOGO,
        eb.RN.PDP_BACKGROUND,
        eb.RN.LOGO,
        eb.RN.MOBILE_BANNER,
        eb.RN.MOBILE_BACKGROUND,
    ]),
    cM = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    cP = { max: 5e6, warn: 2e6 },
    cU = { max: 3e6, warn: 1e6 },
    cB = { max: 2e6, warn: 1e6 },
    cG = { max: 1e6, warn: 5e5 },
    cF = { max: 25e4, warn: 5e4 },
    cV = {
        [eb.Jn.PROFILE_EFFECT]: cP,
        [eb.Jn.AVATAR_DECORATION]: cU,
        [eb.RN.HERO_BANNER_ANIMATED]: cP,
        [eb.RN.HERO_BANNER_RIVE]: cP,
        [eb.RN.CATALOG_BANNER_RIVE]: cP,
        [eb.RN.SHOP_BUTTON_BG_HOVER]: cU,
        [eb.RN.SHOP_BUTTON_BG_HOVER_DARK]: cU,
        [eb.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: cU,
        [eb.RN.SHOP_BUTTON_BG_RESTING]: cU,
        [eb.RN.SHOP_BUTTON_BG_RESTING_DARK]: cU,
        [eb.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: cU,
        [eb.RN.HERO_BANNER_STATIC]: cB,
        [eb.RN.UPSELL_BANNER]: cG,
        [eb.RN.UPSELL_BANNER_POPOUT]: cF,
        [eb.RN.MOBILE_BANNER]: cG,
        [eb.RN.MOBILE_BACKGROUND]: cF,
        [eb.RN.MOBILE_HERO]: cG,
        [eb.RN.PDP_BACKGROUND]: cF,
        [eb.RN.LOGO]: cF,
        [eb.RN.TAB_TOOLTIP]: cF,
    },
    c$ = async (e) => {
        let t = Object.values(eb.Kx),
            a = new Set(),
            n = e.createReader();
        for (let e of await new Promise((e) => n.readEntries(e))) e.isDirectory && t.includes(e.name) && a.add(e.name);
        return t.filter((e) => !a.has(e));
    },
    cW = (e) => {
        let { names: t, addError: a } = e,
            n = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
            l = t.filter((e) => !n.test(e));
        l.length > 0 && a("File names must be in lowercase snake case", l);
    },
    cH = (e, t, a, n) => {
        let l = t.size,
            i = l > 1e6 ? `${(l / 1e6).toFixed(2)}MB` : `${(l / 1e3).toFixed(2)}KB`,
            s = `${t.name} - ${i}`;
        if (l > e.max) {
            let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
            a("Files exceed the recommended size limit - make sure they are optimized!", [`${s} (max: ${t})`]);
        } else l > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [`${s}`]);
    },
    cz = (e, t, a, n) => {
        let l = cV[e];
        if (null != l) for (let e of t) e.name.endsWith(".txt") || cH(l, e, a, n);
    },
    cK = (e) => {
        let t = eb.aL[e];
        return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
    };
var cY = a(981388);
let cq = o.createContext({ setDropHandler: () => {} }),
    cJ = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    cQ = { id: "none", label: "[none selected]", value: null },
    cX = () => {
        (0, eA.hasModalOpen)(cA.k)
            ? (0, eA.closeModal)(cA.k)
            : (0, eA.openModalLazy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: cA.k, onCloseRequest: () => (0, eA.closeModal)(cA.k) },
              );
    },
    cZ = () => {
        (0, eA.hasModalOpen)(cA.g)
            ? (0, eA.closeModal)(cA.g)
            : (0, eA.openModalLazy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: cA.g, onCloseRequest: () => (0, eA.closeModal)(cA.g) },
              );
    },
    c0 = () => {
        let e = (0, e_.pF)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, ck.JE)(),
            n = o.useMemo(() => [cQ, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
        return (0, r.jsxs)("div", {
            className: cY.kO,
            children: [
                (0, r.jsx)(tJ.h, { size: 16 }),
                (0, r.jsxs)("div", {
                    className: cY.wR,
                    children: [
                        (0, r.jsx)(T.D, { variant: "heading-md/bold", children: "Preview Profile Effect" }),
                        (0, r.jsx)(eE.K, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: cZ,
                            icon: cE.c,
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
    c1 = () => {
        let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, ck.JE)(),
            { avatarDecorationAssets: a } = (0, ck.NE)(),
            n = o.useMemo(() => a.map((e) => ({ id: e.name, label: e.name, value: e.name })), [a]);
        return 0 === a.length
            ? null
            : (0, r.jsxs)("div", {
                  className: cY.kO,
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
    c2 = new Set([eb.RN.HERO_BANNER_STATIC, eb.RN.HERO_BANNER_ANIMATED, eb.RN.HERO_BANNER_RIVE]),
    c8 = (e) => {
        let { clearAssets: t, clearIgnoredFiles: a } = e,
            { collectionAssets: n } = (0, ck.NE)(),
            {
                deleteCollectionAsset: l,
                clearAssets: i,
                heroLogoMaxHeight: s,
                setHeroLogoMaxHeight: d,
                heroResponsive: c,
                setHeroResponsive: u,
            } = (0, ck.JE)(),
            m = o.useMemo(() => Object.values(n).map((e) => ({ label: e.name, value: e.type })), [n]),
            h = m.some((e) => e.value === eb.RN.HERO_LOGO),
            x = m.some((e) => c2.has(e.value)),
            g = o.useCallback((e) => l(e), [l]),
            v = o.useCallback(() => {
                i(), t(), a();
            }, [i, t, a]);
        return 0 === m.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(tJ.h, { size: 16 }),
                      (h || x) &&
                          (0, r.jsxs)("div", {
                              className: cY.v7,
                              children: [
                                  h &&
                                      (0, r.jsxs)("div", {
                                          className: cY.cj,
                                          children: [
                                              (0, r.jsx)(N.E, {
                                                  variant: "text-md/normal",
                                                  className: cY.Me,
                                                  children: "Logo size",
                                              }),
                                              (0, r.jsx)(cS.A, {
                                                  className: cY.TQ,
                                                  minValue: 90,
                                                  maxValue: 200,
                                                  initialValue: s ?? 90,
                                                  handleSize: 10,
                                                  onValueChange: (e) => d(Math.round(e)),
                                                  onValueRender: (e) => `${Math.round(e)}px`,
                                                  "aria-label": "Hero logo max height",
                                              }),
                                              (0, r.jsx)(N.E, { variant: "text-sm/normal", children: `${s ?? 90}px` }),
                                          ],
                                      }),
                                  x &&
                                      (0, r.jsxs)("div", {
                                          className: cY.sy,
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
                          className: cY.wR,
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
                                      className: cY._0,
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
    c7 = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
        return 0 === t.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(tJ.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: cY.wR,
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
                                      className: cY.yk,
                                      children: (0, r.jsx)(N.E, { variant: "text-md/normal", children: e }),
                                  },
                                  `${e}-${t}`,
                              ),
                          ),
                      }),
                  ],
              });
    },
    c3 = () => {
        let {
                validateShopAssetPackage: e,
                reset: t,
                validationComplete: a,
                warnings: n,
                errors: l,
            } = (() => {
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
                        t(!1), i({}), n({});
                    }, []);
                return {
                    validationComplete: e,
                    errors: l,
                    warnings: a,
                    validateShopAssetPackage: o.useCallback(
                        async (e) => {
                            try {
                                var a;
                                if (0 === e.length) return void s("No files found");
                                if (e.length > 1) return void s("Uploaded multiple files. Expected 1 directory.");
                                let t = e[0];
                                if (!t.isDirectory) return void s("Uploaded a file. Expected a directory.");
                                let n = await c$(t);
                                if (n.length > 0) return void s("Missing required directories", n);
                                (a = await (0, eb.eg)([t])),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        for (let e of t.collectionFiles) {
                                            let t = (0, eb.pd)(e),
                                                l = null != t ? cV[t] : null;
                                            null != l && cH(l, e, a, n);
                                        }
                                        cW({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                        let l = new Set(
                                                t.collectionFiles.map((e) => (0, eb.pd)(e)).filter((e) => null != e),
                                            ),
                                            i = Array.from(cL)
                                                .filter((e) => !l.has(e))
                                                .map(cK);
                                        i.length > 0 && a("Missing required files", i);
                                        let s = Object.values(eb.RN)
                                            .filter((e) => !cL.has(e))
                                            .filter((e) => !l.has(e))
                                            .map(cK);
                                        s.length > 0 && n("Missing optional assets", s);
                                    })({ files: a, addError: s, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        cW({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                            Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                                let [t, l] = e,
                                                    i = l.map((e) => e.name);
                                                cW({
                                                    names: i.map((e) => {
                                                        let t = e.indexOf("-");
                                                        return e.substring(0, t > 0 ? t : e.length);
                                                    }),
                                                    addError: a,
                                                }),
                                                    cz(eb.Jn.PROFILE_EFFECT, l, a, n);
                                                let s = cM
                                                    .filter(
                                                        (e) => !i.some((t) => t.startsWith(e) && t.endsWith(".png")),
                                                    )
                                                    .map((e) => `${t}/${e}`);
                                                s.length > 0 && a("Missing required PFX files with prefix", s),
                                                    i.some((e) => e.endsWith(".txt")) ||
                                                        a(
                                                            "PFX configs required - please include both exports! (exception: duplicate variant configs are optional)",
                                                            [t],
                                                        );
                                                let r = i
                                                    .filter(
                                                        (e) => !cM.some((t) => e.startsWith(t)) && !e.endsWith(".txt"),
                                                    )
                                                    .map((e) => `${t}/${e}`);
                                                r.length > 0 && n("Contains unrecognized files", r);
                                            });
                                    })({ files: a, addError: s, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        cW({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                            cz(eb.Jn.AVATAR_DECORATION, t.avatarDecorationFiles, a, n);
                                    })({ files: a, addError: s, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addWarning: a } = e;
                                        t.ignoredFilenames.length > 0 &&
                                            a("Contains unrecognized files", t.ignoredFilenames);
                                    })({ files: a, addError: s, addWarning: r });
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
            { setDropHandler: u } = o.useContext(cq),
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
                              className: cY._f,
                              children: [
                                  (0, r.jsx)(N.E, {
                                      variant: "text-md/normal",
                                      color: d ? "text-feedback-critical" : "text-default",
                                      children: `${i.length} errors`,
                                  }),
                                  (0, r.jsx)(N.E, {
                                      variant: "text-md/normal",
                                      color: c ? "text-feedback-warning" : "text-default",
                                      children: `${s.length} warnings`,
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
                                    className: cY.ck,
                                    children: i.map((e, t) => {
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
                                                            className: cY.ck,
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
                                    className: cY.ck,
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
                                                            className: cY.ck,
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
    c9 = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, ck.JE)(),
            { ignoredFilenames: n, clearAssets: l, clearIgnoredFilenames: i, processAndUpsertAssets: s } = (0, eb.ds)(),
            { setDropHandler: d } = o.useContext(cq),
            c = o.useCallback(
                (e) => {
                    a(), s(e);
                },
                [s, a],
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
                        className: cY.sy,
                        children: [
                            (0, r.jsx)(b.d, { checked: e, onChange: (e) => t(e) }),
                            (0, r.jsx)(N.E, { variant: "text-md/normal", children: "Enable Preview" }),
                            (0, r.jsx)(eE.K, {
                                variant: "icon-only",
                                size: "sm",
                                onClick: cX,
                                icon: cE.c,
                                "aria-label": "Open preview instructions",
                            }),
                        ],
                    }),
                    (0, r.jsx)(c0, {}),
                    (0, r.jsx)(c1, {}),
                    (0, r.jsx)(c8, { clearAssets: l, clearIgnoredFiles: i }),
                    (0, r.jsx)(c7, { ignoredFiles: n, handleClearIgnoredFiles: i }),
                ],
            })
        );
    },
    c6 = () => {
        let [e, t] = o.useState("preview");
        return (0, r.jsxs)("div", {
            className: cY.kL,
            children: [
                (0, r.jsx)(cN.I, {
                    options: cJ,
                    value: e,
                    onChange: (e) => {
                        let { value: a } = e;
                        return t(a);
                    },
                    className: cY.Vj,
                    optionClassName: cY.UK,
                }),
                (0, r.jsx)(tJ.h, { size: 8 }),
                "preview" === e && (0, r.jsx)(c9, {}),
                "validate" === e && (0, r.jsx)(c3, {}),
                (0, r.jsx)(tJ.h, { size: 16 }),
            ],
        });
    },
    c4 = (e) => {
        let { children: t } = e,
            [a, n] = o.useState(() => () => {}),
            l = o.useMemo(() => ({ setDropHandler: (e) => n(() => e) }), []);
        return (0, r.jsx)(cq.Provider, { value: l, children: (0, r.jsx)(cR, { onDrop: a, children: t }) });
    };
var c5 = a(663803),
    ue = a(803375),
    ut = a(385815);
let ua = () => {
    let e = (0, d.bG)([to.A], () => to.A.skipNumCategories);
    return (0, r.jsxs)("div", {
        className: ut.k,
        children: [
            (0, r.jsx)(N.E, { variant: "text-md/normal", children: "Hide first # of categories" }),
            (0, r.jsx)(c5.l, {
                value: e,
                onChange: (e) => {
                    (0, ue.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
};
var un =
        (((n = {}).DEFAULT = "default"),
        (n.DEFAULT_WITH_ORB_SHELF = "default_with_orb_shelf"),
        (n.ORB_TAB = "orb_tab"),
        (n.FRAMES = "frames"),
        (n.FRAMES_PINNED = "frames_pinned"),
        n),
    ul = a(295811),
    ui = a(172471);
let us = () => {
        let e = (0, d.bG)([ul.A], () => ul.A.getShopHomeConfigOverride()),
            t = [
                { id: "none", label: "DISABLED (no override)", value: void 0 },
                ...Object.values(un).map((e) => ({ id: e, label: e, value: e })),
            ];
        return (0, r.jsx)("div", {
            className: ui.kL,
            children: (0, r.jsx)(x.l, {
                label: "Shop Home Override",
                options: t,
                value: e,
                onSelectionChange: (e) => {
                    (0, ue.Or)(e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
        });
    },
    ur = () => {
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
                                t(void 0), (0, ue.Aq)(void 0);
                            },
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Set",
                            onClick: () => (0, ue.Aq)("" !== e ? e : void 0),
                        }),
                    ],
                }),
            ],
        });
    },
    uo = (e) => {
        let { className: t } = e,
            a = Object.keys(nz.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
        return null == a
            ? null
            : (0, r.jsxs)("div", {
                  className: t,
                  children: [
                      (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Shop Marketing" }),
                      (0, r.jsx)("div", { style: { zIndex: 1 }, children: (0, r.jsx)(lt, { items: [a] }) }),
                  ],
              });
    };
var ud = a(922529),
    uc = a(628917);
let uu = () => {
        let e = (0, d.bG)([lo.A], () => lo.A.get("shop_disable_cache")),
            t = (0, d.bG)([lo.A], () => lo.A.get("shop_include_unpublished"));
        return (0, r.jsx)(c4, {
            children: (0, r.jsxs)("div", {
                className: uc.Lm,
                children: [
                    (0, r.jsxs)("div", {
                        className: uc.gf,
                        children: [
                            (0, r.jsx)(b.d, {
                                label: "Disable collectibles cache",
                                checked: e,
                                onChange: (e) => (0, lr.L)("shop_disable_cache", e),
                            }),
                            (0, r.jsx)(b.d, {
                                label: "Show unpublished collectibles",
                                checked: t,
                                onChange: (e) => (0, lr.L)("shop_include_unpublished", e),
                            }),
                        ],
                    }),
                    (0, r.jsx)(uo, { className: uc._l }),
                    (0, r.jsxs)("div", {
                        className: uc._l,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-md/semibold", children: "Shop Overrides" }),
                            (0, r.jsx)(us, {}),
                            (0, r.jsx)(ud.A, { className: uc.yF }),
                            (0, r.jsx)(ur, {}),
                            (0, r.jsx)(ud.A, { className: uc.yF }),
                            (0, r.jsx)(ua, {}),
                            (0, r.jsx)(ud.A, { className: uc.yF }),
                            (0, r.jsx)(c6, {}),
                        ],
                    }),
                ],
            }),
        });
    },
    um = [
        { id: "unset", label: "Unset", value: dB.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
        { id: "all", label: "All", value: dB.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
        { id: "usersWithGame", label: "Users With Game", value: dB.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
        { id: "none", label: "None", value: dB.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
    ];
function uh() {
    let e = o.useRef(null),
        t = dV.TA.useSetting();
    return (0, r.jsx)("div", {
        ref: e,
        className: E()(tN.nd, as.n),
        children: (0, r.jsxs)("div", {
            className: as.k,
            children: [
                (0, r.jsx)(T.D, { variant: "heading-lg/normal", children: "Settings" }),
                (0, r.jsx)(x.l, {
                    label: "Receive DMs In Game",
                    options: um,
                    value: t,
                    onSelectionChange: dV.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var up = a(278416),
    ux = a(220631);
function ug(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function uv(e) {
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
        (0, r.jsx)(c.Ip, { className: ux.Dx, children: (0, r.jsx)(a_, { data: n }) })
    );
}
function ub(e) {
    let { store: t } = e,
        [a, n] = o.useState(() => JSON.stringify(t.__getLocalVars(), null, 2)),
        [l, i] = o.useState(null),
        s = o.useCallback(() => {
            n(JSON.stringify(t.__getLocalVars(), null, 2)), i(null);
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
                for (let e of n.preDispatches ?? []) ty.h.dispatch(e);
                ty.h.dispatch({ ...n.buildPayload(e), type: n.actionType }), s();
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
                for (let t of e.preDispatches ?? []) ty.h.dispatch(t);
                ty.h.dispatch({ ...e.buildPayload(t), type: e.actionType }), s();
            } catch (e) {
                i(e instanceof Error ? e.message : String(e));
            }
        }, [t, s]);
    return (0, r.jsxs)("div", {
        className: E()(ux.Dx, ux.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: ux.Vz,
                value: a,
                onChange: (e) => n(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != l && (0, r.jsx)("div", { className: ux.Xf, role: "alert", children: l }),
            (0, r.jsxs)("div", {
                className: ux.KA,
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
let u_ = [
    {
        key: "name",
        cellClassName: ux.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function uf(e) {
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
                                      className: ux.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(uv, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: aE.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(uv, { store: t, dataGetter: (e) => e });
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
                                      className: ux.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(ub, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: l, renderSelectedTab: i } = (0, aE.Ay)({ tabs: n }, []);
    return (0, r.jsxs)(aC, {
        className: ux.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(au.Ay, {
                className: E()(tN.jr, ux.nZ),
                children: [
                    (0, r.jsx)(au.Ay.Icon, { icon: up.g, tooltip: t.getName() }),
                    (0, r.jsx)(au.Ay.Title, { children: t.getName() }),
                ],
            }),
            i({ store: t }),
        ],
    });
}
function uj() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = d.il.getAll(),
        l = o
            .useMemo(() => n.map((e) => ({ key: e._dispatchToken, store: e })).sort(ug), [n])
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
        className: E()(tN.nd, ux.nd),
        children: [
            (0, r.jsx)("div", {
                className: ux.KE,
                children: (0, r.jsx)(a2.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(tA, { columns: u_, data: l, selectedRowKey: i, onClickRow: (e) => s(e.key) }),
            null != c &&
                (0, r.jsx)(uf, { store: c, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, i),
        ],
    });
}
var uy = a(91871),
    uC = a.n(uy);
let uE = [
        {
            key: "id",
            cellClassName: nu.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: nu.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: nu.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    uS = [
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
                            timestamp: i,
                            location: s,
                            previouslyTracked: o,
                        },
                    } = e,
                    d = aJ()(i);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(au.Ay, {
                            className: E()(tN.jr, nu.nZ),
                            children: [
                                (0, r.jsx)(au.Ay.Icon, { icon: aZ.U, tooltip: t }),
                                (0, r.jsx)(au.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(no, {
                            className: nu.ZK,
                            children: [
                                (0, r.jsx)(nd, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: i.toISOString(),
                                        title: (0, a6.i$)(d, "LLLL"),
                                        children: (0, a6.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, r.jsx)(nd, {
                                        name: "Guild ID",
                                        children: (0, r.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, r.jsx)(nd, {
                                    name: "Bucket",
                                    children: (0, r.jsx)("code", { children: a.bucket }),
                                }),
                                (0, r.jsx)(nd, {
                                    name: "Revision",
                                    children: (0, r.jsx)("code", { children: a.revision }),
                                }),
                                (0, r.jsx)(nd, { name: "Override", children: (0, r.jsx)(nc, { value: a.override }) }),
                                (0, r.jsx)(nd, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                                (0, r.jsx)(nd, { name: "Excluded", children: (0, r.jsx)(nc, { value: l }) }),
                                (0, r.jsx)(nd, { name: "Previously tracked", children: (0, r.jsx)(nc, { value: o }) }),
                                (0, r.jsx)(nd, { name: "Location", children: (0, r.jsx)("code", { children: s }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function uN() {
    let [e, t] = o.useState(""),
        a = o.useRef(null),
        n = (0, d.yK)([ns], () => ns.loggedTriggers),
        l = o.useMemo(
            () =>
                n
                    .filter((t) => 0 === e.length || uC()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [n, e],
        ),
        [i, s] = o.useState(void 0),
        c = l.find((e) => e.key === i),
        { TabBar: u, renderSelectedTab: m } = (0, aE.Ay)({ tabs: uS }, []),
        h = (0, d.bG)([ns], () => ns.trackTriggers),
        p = o.useCallback((e) => {
            ty.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        x = h ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: E()(tN.nd, nu.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nu.rh,
                children: [
                    (0, r.jsx)(lk.m, {
                        text: x,
                        children: (0, r.jsx)(eE.K, {
                            size: "sm",
                            variant: h ? "active" : "primary",
                            icon: h ? lD.E : lT.u,
                            "aria-label": x,
                            onClick: () => p(!h),
                        }),
                    }),
                    (0, r.jsx)(a2.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, r.jsx)(eE.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": aP.intl.string(aP.t.VkKicb),
                        icon: a1.u,
                        onClick: D.eY,
                    }),
                ],
            }),
            (0, r.jsx)(tA, { columns: uE, data: l, selectedRowKey: i, onClickRow: (e) => s(e.key) }),
            null != c &&
                (0, r.jsxs)(aC, {
                    className: nu.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(u, {}), m({ loggedTrigger: c })],
                }),
        ],
    });
}
var uA = a(512950),
    uk = a(324861),
    uI = a(243655);
let uT = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, uk.A)();
    return (0, r.jsx)("div", {
        className: uI.k,
        children: (0, r.jsxs)(m.n, {
            label: "Virtual Currency Configuration",
            description: "Click the button below to reset your onboarding state for Virtual Currency.",
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(p.$, {
                        text: "Reset Onboarding State",
                        onClick: () => {
                            e(), t(), (0, t9.pX)(H.BVt.APP);
                        },
                    }),
                }),
                (0, r.jsx)(uA.p, {
                    messageType: uA.Y.INFO,
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these",
                }),
            ],
        }),
    });
};
var uD = a(77729),
    uw = a(969341),
    uO = a(36934);
function uR() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, i] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        s = "processing" === l.status;
    return (0, r.jsx)(c.Ip, {
        className: tN.nd,
        children: (0, r.jsxs)("div", {
            className: uO.l7,
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
                                let e = await uD.A.fileManager.showOpenDialog({ properties: ["openDirectory"] });
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
                                let e = await uD.A.fileManager.showOpenDialog({
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
                              uw.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  i((e) => ({ ...e, status: "cancelled" }));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (i({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  uw.Ay.getMediaEngine().processBatchAudioFiles(
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
                                            className: uO.TZ,
                                            children: (0, r.jsxs)(N.E, {
                                                variant: "text-xs/normal",
                                                className: e.success ? uO.$D : uO.uL,
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
var uL = a(207898),
    uM = a.n(uL),
    uP = a(32880),
    uU = a(827343),
    uB = a(964486),
    uG = a(602674),
    uF = a(625841),
    uV = a(74848),
    u$ = a(731854),
    uW = a(573908);
function uH(e) {
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
function uz(e) {
    let { recording: t, playing: a, onPlay: n, onStop: l } = e;
    return (0, r.jsx)(d8.N, {
        collapsibleContent: (0, r.jsx)(uH, { recording: t }),
        children: (e) => {
            let { onClick: i } = e;
            return (0, r.jsxs)(S.D, {
                onClick: i,
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
                        children: a ? (0, r.jsx)(lD.E, { size: "xxs" }) : (0, r.jsx)(lT.u, { size: "xxs" }),
                    }),
                    (0, r.jsx)(S.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, n, l;
                            e.stopPropagation(),
                                (a = new Blob([uM()(t.audioBuffer)], { type: "audio/wav" })),
                                (n = URL.createObjectURL(a)),
                                ((l = document.createElement("a")).href = n),
                                (l.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                l.click(),
                                URL.revokeObjectURL(n);
                        },
                        children: (0, r.jsx)(uP.s, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function uK() {
    let { name: e } = (0, uV.x5)(u$.oh.AUDIO_INPUT),
        [t, a] = o.useState(!1),
        [n, l] = o.useState([]),
        i = (0, d.bG)([uw.Ay], () => uw.Ay.getKrispSuppressionLevel()),
        [s, u] = o.useState(null),
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
            noiseSuppressionSupported: I,
            noiseCancellationSupported: T,
            noiseCancellationEnableStats: D,
            vadDuringPreProcess: w,
        } = (0, d.cf)([uw.Ay], () => ({
            krispModels: uw.Ay.getKrispModels(),
            krispModelOverride: uw.Ay.getKrispModelOverride(),
            echoCancellation: uw.Ay.getEchoCancellation(),
            autoThreshold: uw.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: uw.Ay.getModeOptions().vadUseKrisp,
            inputMode: uw.Ay.getMode(),
            vadKrispActivationThreshold: uw.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: uw.Ay.getNoiseCancellation(),
            noiseSuppression: uw.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: uw.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: uw.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: uw.Ay.getKrispEnableStats(),
            vadDuringPreProcess: uw.Ay.getModeOptions().vadDuringPreProcess,
        })),
        O = S ? "KRISP" : A ? "STANDARD" : "NONE",
        R = (0, uG.v)(),
        L = o.useCallback(() => {
            m.current?.stop(), (m.current = null), u(null);
        }, []);
    function M() {
        uw.Ay.getMediaEngine().stopRecordingRawSamples();
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
        (0, uB.l0)(() => {
            uU.A.setMode(uw.Ay.getMode(), { vadDuringPreProcess: null, vadKrispActivationThreshold: void 0 });
        });
    let U = [];
    return (
        T && U.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        I && U.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        U.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(c.Ip, {
            className: tN.nd,
            children: (0, r.jsxs)("div", {
                className: uW.l,
                children: [
                    (0, r.jsx)(N.E, { variant: "text-lg/bold", children: "Krisp Tester" }),
                    (0, r.jsx)(uF.U, {
                        label: "Input Device",
                        deviceType: u$.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, r.jsx)(x.l, {
                        label: "Noise Cancellation",
                        value: O,
                        onSelectionChange: (e) => {
                            uU.A.setNoiseCancellation("KRISP" === e), uU.A.setNoiseSuppression("STANDARD" === e);
                        },
                        options: U,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === O &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(cS.A, {
                                    label: "Krisp Suppression Level",
                                    initialValue: i,
                                    onValueChange: uU.A.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, r.jsx)(x.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: _,
                                    options: v.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        uU.A.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(b.d, {
                                    label: "Enable Stats",
                                    checked: D,
                                    onChange: (e) => uU.A.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    f === u$.TB.VOICE_ACTIVITY &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(b.d, {
                                    label: "Auto Threshold",
                                    checked: y,
                                    onChange: (e) => uU.A.setMode(u$.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                y &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(b.d, {
                                                label: "Use Krisp VAD",
                                                checked: C,
                                                onChange: (e) => uU.A.setMode(u$.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            C &&
                                                (0, r.jsx)(cS.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: E,
                                                    onValueChange: (e) =>
                                                        uU.A.setMode(u$.TB.VOICE_ACTIVITY, {
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
                                    onChange: (e) => uU.A.setMode(u$.TB.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(b.d, {
                        label: "Echo Cancellation",
                        checked: j,
                        onChange: (e) => uU.A.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)(k.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(N.E, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(aQ.$n, {
                                color: t ? aQ.$n.Colors.RED : aQ.$n.Colors.BRAND,
                                onClick: t
                                    ? M
                                    : function () {
                                          L(),
                                              a(!0),
                                              uU.A.setLoopback("krisp_test", !0),
                                              uw.Ay.getMediaEngine().startRecordingRawSamples((t, n, s) => {
                                                  a(!1), uU.A.setLoopback("krisp_test", !1);
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
                                                          echoCancellation: j,
                                                          krispSuppressionLevel: i,
                                                      },
                                                  ]);
                                              });
                                      },
                                children: t ? "Stop Recording" : "Start Recording",
                            }),
                        ],
                    }),
                    (0, r.jsx)(cS.A, {
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
                                (0, r.jsx)(uz, { recording: e, playing: e === s, onPlay: P, onStop: L }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var uY = a(803306),
    uq = a(243217),
    uJ = a(189213),
    uQ = a(340351),
    uX = a(935208),
    uZ = a(112848);
let u0 = [
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
function u1() {
    let [e, t] = o.useState(!1),
        a = (0, d.bG)([F.default], () => F.default.getCurrentUser()),
        n = (0, uZ.Lh)(),
        l = (0, d.bG)([rN.A], () => rN.A.getPremiumTypeSubscription()),
        i = null != n ? (l2.VD[n]?.tenureReqNumMonths ?? 0) : 0,
        s = o.useCallback(
            async (e) => {
                let n = new Date();
                e > 0 ? n.setMonth(n.getMonth() - e) : n.setDate(n.getDate() - 7), n.setDate(n.getDate() - 2);
                let i = {
                    subscription_status: H.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: uX.default.fromTimestamp(n.getTime()),
                };
                t(!0),
                    await nD.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: i, rejectWithError: !1 }),
                    await (0, uY.eO)(a.id),
                    await (0, oK.hP)(),
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
            value: i,
            options: u0,
            onSelectionChange: s,
        });
}
var u2 =
        (((l = {})[(l.DEFAULT = 0)] = "DEFAULT"),
        (l[(l.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (l[(l.FAILURE = 2)] = "FAILURE"),
        (l[(l.NONE = 3)] = "NONE"),
        l),
    u8 =
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
async function u7(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: n, paymentType: l, sendReminderEmail: i } = a;
    return (
        await nD.Bo.post({
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
var u3 = a(601107),
    u9 = a(142798);
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
    u4 = {
        [u3.qf.UNKNOWN]: "Unknown",
        [u3.qf.ADMIN]: "Admin",
        [u3.qf.USER]: "User",
        [u3.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [u3.qf.DEFERRED_START]: "Deferred Start",
        [u3.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    u5 = [
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
function me(e) {
    let { subscription: t, onClose: a, onUpdated: n, transitionState: l } = e,
        [i, s] = o.useState(aJ()()),
        [d, c] = o.useState(aJ()().format("HH:mm")),
        [u, h] = o.useState(!1),
        [p, x] = o.useState(void 0),
        g = async () => {
            if (null == i) return void x("Please select a target date");
            let [e, l] = d.split(":").map(Number),
                s = i.clone().hours(e).minutes(l).seconds(0).milliseconds(0);
            h(!0), x(void 0);
            try {
                await u7(t.id, u8.TIME_TRAVEL, { targetDate: s, paymentType: u2.DEFAULT, sendReminderEmail: !1 }),
                    n(),
                    a();
            } catch (e) {
                x(e.body?.message || e.message || "Failed to time travel");
            } finally {
                h(!1);
            }
        };
    return (0, r.jsx)(uJ.Modal, {
        transitionState: l,
        onClose: () => (a(), Promise.resolve()),
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: a },
            { text: "Time Travel", variant: "primary", onClick: g, disabled: u || null == i },
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
                (0, r.jsx)(i1.J, { label: "Target Date", value: i, onSelect: s }),
                (0, r.jsx)(m.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, r.jsx)("input", {
                        type: "time",
                        value: d,
                        onChange: (e) => {
                            c(e.target.value);
                        },
                        className: u9.Qn,
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
                                    className: u9.JX,
                                    children: ["Start: ", aJ()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(N.E, {
                                    variant: "text-xs/normal",
                                    className: u9.JX,
                                    children: ["End: ", aJ()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
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
function mt(e) {
    var t;
    let a,
        { subscription: n, onUpdated: l } = e,
        [i, s] = o.useState(!1),
        [d, c] = o.useState(!1),
        [u, h] = o.useState(!1),
        [g, v] = o.useState(!1),
        [b, _] = o.useState(null),
        f = (e) => {
            let t = new Date(e);
            return uX.default.fromTimestamp(t.getTime());
        },
        j = async (e) => {
            let { status: t = n.status, premiumStreakStart: a, endedAt: i } = e,
                s = {
                    subscription_status: t,
                    ...(null != a ? { premium_streak_started_at: f(a) } : null),
                    ...(null != i ? { ended_at: f(i) } : null),
                };
            await nD.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: s, rejectWithError: !1 }), l();
        },
        y = async () => {
            try {
                await u7(n.id, u8.RENEW, {
                    targetDate: aJ()(new Date()),
                    paymentType: u2.DEFAULT,
                    sendReminderEmail: !1,
                });
            } catch (e) {
                _(e.body?.message || e.message || "Failed to renew subscription");
            }
            l();
        },
        C = l2.hd[n.planIdFromItems]?.premiumType === l2.PremiumTypes.TIER_0,
        I = n.metadata?.ended_at,
        T = null != I ? new Date(I).toISOString().substring(0, 10) : "",
        D = [
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
        w && D.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        O && D.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        n.status !== H.Dmq.ACTIVE &&
            D.push({
                id: "dates",
                label: `Dates: ${(0, a6.i$)(n.createdAt, "LL")} - ${(0, a6.i$)(n.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        n.status === H.Dmq.PAUSED &&
            D.push({
                id: "pause-reason",
                label: `Pause Reason: ${n.pauseReason in u4 ? u4[n.pauseReason] : `Unknown pause reason ${n.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: E()(l5.Nr, C ? l5.Qf : l5.C1),
            children: (0, r.jsxs)(m.n, {
                label: `Type: ${null == ((a = n.planIdFromItems)) ? "No plan id" : a in l2.hd ? l2.hd[a].name : `Unknown plan id ${a}`}`,
                className: u9.lI,
                children: [
                    (0, r.jsx)(uQ.C, {
                        items: D,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    w &&
                        (0, r.jsxs)("div", {
                            className: u9.VK,
                            children: [
                                (0, r.jsxs)(S.D, {
                                    onClick: () => {
                                        h(!u);
                                    },
                                    className: u9.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(N.E, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, r.jsx)(l0.A, { direction: u ? l0.A.Directions.UP : l0.A.Directions.DOWN }),
                                    ],
                                }),
                                u &&
                                    (0, r.jsxs)("ul", {
                                        className: u9.j3,
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
                            className: u9.VK,
                            children: [
                                (0, r.jsxs)(S.D, {
                                    onClick: () => {
                                        v(!g);
                                    },
                                    className: u9.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(N.E, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, r.jsx)(l0.A, { direction: g ? l0.A.Directions.UP : l0.A.Directions.DOWN }),
                                    ],
                                }),
                                g &&
                                    (0, r.jsxs)("ul", {
                                        className: u9.j3,
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
                            className: u9.VK,
                            children: [
                                (0, r.jsxs)(S.D, {
                                    onClick: () => {
                                        s(!i);
                                    },
                                    className: u9.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(N.E, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, r.jsx)(l0.A, { direction: i ? l0.A.Directions.UP : l0.A.Directions.DOWN }),
                                    ],
                                }),
                                i &&
                                    (0, r.jsx)("ul", {
                                        className: u9.j3,
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
                        className: u9.VK,
                        children: [
                            (0, r.jsxs)(S.D, {
                                onClick: () => {
                                    c(!d);
                                },
                                className: u9.Eh,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(N.E, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, r.jsx)(l0.A, { direction: d ? l0.A.Directions.UP : l0.A.Directions.DOWN }),
                                ],
                            }),
                            d &&
                                (0, r.jsxs)(k.B, {
                                    gap: 24,
                                    children: [
                                        (0, r.jsx)(x.l, {
                                            label: "Status",
                                            value: n.status,
                                            options: u5,
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
                                                                        (0, r.jsx)(me, {
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
                                                        className: u9.z3,
                                                        children: (0, r.jsx)(A.w, { type: "critical", children: b }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)(k.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(i1.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: aJ()(n.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => j({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(u1, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(i1.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== T ? aJ()(T) : void 0,
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
let ma = async () =>
        (
            await nD.Bo.get({
                url: H.Rsh.BILLING_SUBSCRIPTIONS,
                query: { include_inactive: !0, limit: 5 },
                rejectWithError: !1,
            })
        ).body.map((e) => uq.A.createFromServer(e)),
    mn = [
        { id: "nitro-monthly", label: "Nitro Monthly", value: l2.gD.PREMIUM_MONTH_TIER_2 },
        { id: "nitro-yearly", label: "Nitro Yearly", value: l2.gD.PREMIUM_YEAR_TIER_2 },
        { id: "nitro-classic-monthly", label: "Nitro Classic Monthly", value: l2.gD.PREMIUM_MONTH_TIER_1 },
        { id: "nitro-classic-yearly", label: "Nitro Classic Yearly", value: l2.gD.PREMIUM_YEAR_TIER_1 },
        { id: "basic-monthly", label: "Basic Monthly", value: l2.gD.PREMIUM_MONTH_TIER_0 },
        { id: "basic-yearly", label: "Basic Yearly", value: l2.gD.PREMIUM_YEAR_TIER_0 },
        { id: "reverse-trial-1week", label: "Reverse Trial 1-week", value: l2.gd },
        { id: "reverse-trial-2week", label: "Reverse Trial 2-week", value: l2.Uk },
        { id: "nitro-squad-monthly", label: "Nitro Squad Monthly", value: l2.gD.PREMIUM_GROUP_MONTH },
    ];
function ml() {
    let e = (0, d.bG)([rN.A], () => rN.A.getPremiumTypeSubscription()),
        t = (0, d.bG)([F.default], () => F.default.getCurrentUser()),
        [a, n] = o.useState("511651880837840896"),
        [l, i] = o.useState([]),
        [s, u] = o.useState(!1),
        m = o.useCallback(async () => {
            try {
                u(!0), await (0, oK.hP)(), await (0, uY.eO)(t.id), i(await ma());
            } finally {
                u(!1);
            }
        }, [t]);
    o.useEffect(() => {
        m();
    }, [m]);
    let h = o.useMemo(() => l.filter((e) => e.status !== H.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [l]),
        g = async () => {
            await nD.Bo.post({ url: "/debug/subscription", body: { plan_id: a }, rejectWithError: !1 }), await m();
        },
        v = async () => {
            await nD.Bo.del({ url: "/debug/subscription", rejectWithError: !1 }), await m();
        };
    return (0, r.jsx)(c.Ip, {
        className: tN.nd,
        children: (0, r.jsxs)("div", {
            className: l5.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: l5.dL,
                    children: [
                        (0, r.jsx)(T.D, {
                            variant: "heading-lg/semibold",
                            className: tN.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, r.jsx)(eE.K, {
                            "aria-label": "Refresh",
                            icon: lZ.f,
                            size: "sm",
                            variant: "icon-only",
                            disabled: s,
                            onClick: m,
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: E()([l5.uW, l5.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(x.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: mn,
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
                null != e && (0, r.jsx)(mt, { subscription: e, onUpdated: m }),
                (0, r.jsx)(T.D, { variant: "heading-lg/semibold", className: tN.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: E()([l5.uW, l5.Uo]),
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
                            h.map((e) => (0, r.jsx)(mt, { subscription: e, onUpdated: m }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var mi = a(284009),
    ms = a.n(mi),
    mr = a(889137),
    mo = a(412703),
    md = a(440703),
    mc = a(267548),
    mu = a(668824),
    mm = a(695366),
    mh = a(359778),
    mp = a(507107),
    mx = a(801365),
    mg = a(792620),
    mv = a(241124),
    mb = a(28082),
    m_ = a(717695),
    mf = a(59350),
    mj = a(127219),
    my = a(882406),
    mC = a(291922),
    mE = a(317097),
    mS = a(452027),
    mN = a(922016),
    mA = a(714385),
    mk = a(359923);
let mI = function (e) {
    let { colorKey: t, value: a, onChange: n, title: l } = e,
        i = o.useRef(null);
    return (0, r.jsx)(mS.D, {
        label: l,
        children: (0, r.jsx)(mN.Y, {
            targetElementRef: i,
            renderPopout: (e) => (0, r.jsx)(d7.VN, { ...e, value: a, onChange: (e) => n(t, (0, mE.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(S.D, {
                    ...e,
                    innerRef: i,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: mk.O6,
                    style: { backgroundColor: a },
                    children: (0, r.jsx)(mA.d, { size: "xs", color: "currentColor", className: mk.WY }),
                }),
        }),
    });
};
var mT = a(247928);
let mD = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: n = !1 } = e;
    return (0, r.jsx)(mT.M, {
        children: (0, r.jsx)(mh.Z, {
            className: E()(mk.Rx, { [mk.aK]: n }),
            outline: n,
            children: (0, r.jsx)("div", {
                className: mk.AZ,
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
var mw = a(643374);
let mO = function (e) {
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
            (0, r.jsx)(mS.D, {
                label: i,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, r.jsx)(mw.A, {
                    filename: s?.name ?? n ?? "",
                    filters: [{ name: i, extensions: a }],
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
    mR = function (e) {
        let { assetKey: t, initialValue: a, onMessageChange: n, title: l } = e,
            [i, s] = o.useState("");
        return (
            o.useEffect(() => {
                s(a ?? "");
            }, [a]),
            (0, r.jsx)(g.k, {
                label: l,
                value: i,
                onChange: function (e) {
                    s(e), n(t, e);
                },
            })
        );
    };
var mL = a(890687);
let mM = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: n } = (0, mL.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
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
var mP = a(843282),
    mU = a(972886);
let mB = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    mG = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: n } = e;
        return (0, r.jsxs)(k.B, {
            gap: 20,
            children: [
                (0, r.jsx)(mP.Pw, {
                    label: "Task Type(s)",
                    className: mU.Z,
                    placeholder: "Select Task Preset",
                    options: mB,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, l, i, s, r;
                        return (
                            e ===
                            ((t = n.tasks),
                            (a = mo.n.PLAY_ON_PLAYSTATION in t || mo.n.PLAY_ON_XBOX in t),
                            (l = mo.n.PLAY_ON_DESKTOP in t),
                            (i = mo.n.STREAM_ON_DESKTOP in t),
                            (s = mo.n.WATCH_VIDEO in t),
                            (r = mo.n.PLAY_ACTIVITY in t),
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
                                        a[mo.n.STREAM_ON_DESKTOP] = { type: mo.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[mo.n.PLAY_ON_DESKTOP] = { type: mo.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        (a[mo.n.PLAY_ON_PLAYSTATION] = {
                                            type: mo.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[mo.n.PLAY_ON_XBOX] = {
                                                type: mo.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 4:
                                        (a[mo.n.PLAY_ON_DESKTOP] = { type: mo.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[mo.n.PLAY_ON_PLAYSTATION] = {
                                                type: mo.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[mo.n.PLAY_ON_XBOX] = {
                                                type: mo.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 2:
                                        a[mo.n.WATCH_VIDEO] = {
                                            type: mo.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[mo.n.PLAY_ACTIVITY] = { type: mo.n.PLAY_ACTIVITY, target: t };
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
                    value: String(a / nO.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= nO.A.Seconds.MINUTE;
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
var mF = a(818348);
let mV = function () {
    let e = (0, q.Ay)();
    return (0, r.jsx)(mS.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(J.zy, {
                    theme: mF.NJ.LIGHT,
                    isSelected: e === mF.NJ.LIGHT,
                    onSelect: () => (0, dW.u_)({ theme: mF.NJ.LIGHT }),
                }),
                (0, r.jsx)(J.zy, {
                    theme: mF.NJ.DARK,
                    isSelected: e === mF.NJ.DARK,
                    onSelect: () => (0, dW.u_)({ theme: mF.NJ.DARK }),
                }),
            ],
        }),
    });
};
var m$ =
    (((s = {})[(s.UNENROLLED = 0)] = "UNENROLLED"),
    (s[(s.ENROLLED = 1)] = "ENROLLED"),
    (s[(s.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (s[(s.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (s[(s.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (s[(s.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (s[(s.CLAIMED = 6)] = "CLAIMED"),
    s);
let mW = function (e) {
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
var mH = a(545986);
let mz = ["png", "gif", "webp"],
    mK = [...mz, "jpg", "jpeg"],
    mY = Array.from(new Set([...mK, "gif", "mp4", "webm"]));
function mq() {
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
let mJ = "1193992107035983872",
    mQ = {
        id: mJ,
        preview: !0,
        config: {
            id: mJ,
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
                        type: md.l.REWARD_CODE,
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
                joinOperator: mu.K.AND,
                tasks: { [mo.n.PLAY_ON_DESKTOP]: { type: mo.n.PLAY_ON_DESKTOP, target: 300 } },
            },
            features: [],
            sharePolicy: mc.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function mX() {
    var e;
    let [t, n] = o.useState(mQ),
        l = o.useCallback((e) => {
            n({ ...e, preview: !0 });
        }, []),
        [i, s] = o.useState(m$.UNENROLLED),
        [d, u] = o.useState(!1),
        [m, h] = o.useState(!1),
        [x, g] = o.useState(null),
        v =
            ((e = t.config),
            (0, mr.YW)(e)
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
            var n, i;
            l({
                ...t,
                config:
                    ((n = t.config),
                    (i = { [e]: a }),
                    (0, mr.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...i } }))
                        .exhaustive()),
            });
        }
    }
    function f(e, a) {
        let n = t.config.taskConfigV2.tasks,
            i = n[mo.n.WATCH_VIDEO];
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
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...n, [mo.n.WATCH_VIDEO]: { ...i, assets: s } } },
            },
        });
    }
    function j(e, a) {
        if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
            var n, i;
            l({
                ...t,
                config:
                    ((n = t.config),
                    (i = { [e]: a }),
                    (0, mr.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, messages: { ...e.messages, ...i } }))
                        .exhaustive()),
            });
        }
    }
    function y(e, a, n) {
        if ("name" === e || "nameWithArticle" === e) {
            var i, s;
            l({
                ...t,
                config:
                    ((i = t.config),
                    (s = { [e]: a }),
                    (0, mr.YW)(i)
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
    function E() {
        (0, mx.tU)(t.config) && (0, mH.hJ)(t, mp.uF.GIFT_INVENTORY_FOR_YOU, mp.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let S = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * nO.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        A = o.useMemo(() => mo.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    ms()(!1 !== t.preview && null != t.preview, "Preview config must have property preview: true");
    let I = t.config.taskConfigV2.tasks[mo.n.WATCH_VIDEO];
    return (0, r.jsxs)(c.Ip, {
        className: mk.kL,
        children: [
            (0, r.jsx)(T.D, { variant: "heading-lg/bold", className: mk.R_, children: "Quest Preview Tool" }),
            (0, r.jsx)("div", {
                className: mk.OA,
                children: (0, r.jsx)(mM, {
                    onSelect: function (e) {
                        g(e),
                            null == e ||
                                (s(
                                    (function (e) {
                                        if (null == e.userStatus) return m$.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return m$.CLAIMED;
                                        if (null != e.userStatus.completedAt) return m$.COMPLETED_100;
                                        let t = (0, mg.Yh)(e),
                                            a = t.progressSeconds,
                                            n = t.targetSeconds;
                                        return a / n >= 1
                                            ? m$.COMPLETED_100
                                            : a / n >= 0.75
                                              ? m$.COMPLETED_75
                                              : a / n >= 0.5
                                                ? m$.COMPLETED_50
                                                : a / n >= 0.25
                                                  ? m$.COMPLETED_25
                                                  : m$.ENROLLED;
                                    })(e),
                                ),
                                l(e));
                    },
                    quest: x,
                }),
            }),
            (0, r.jsx)(T.D, { variant: "heading-md/semibold", className: mk.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: mk.OA,
                children: (0, r.jsx)(mG, {
                    taskDuration: S,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        l({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)(T.D, { variant: "heading-md/semibold", className: mk.fV, children: "Messages" }),
            (0, r.jsxs)("div", {
                className: mk.OA,
                children: [
                    (0, r.jsx)(mR, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: j,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, r.jsx)(mR, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: j,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(mR, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: j,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    A &&
                        (0, r.jsx)(mR, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let n = t.config.taskConfigV2.tasks,
                                    i = n[mo.n.WATCH_VIDEO];
                                if (null == i) return;
                                let s = { ...i.messages, [e]: a };
                                l({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...n, [mo.n.WATCH_VIDEO]: { ...i, messages: s } },
                                        },
                                    },
                                });
                            },
                            initialValue: I?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)(T.D, { variant: "heading-md/semibold", className: mk.fV, children: "Assets" }),
            (0, r.jsxs)("div", {
                className: mk.OA,
                children: [
                    (0, r.jsx)(mO, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: _,
                        filters: mY,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, r.jsx)(mO, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: _,
                        filters: mY,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, r.jsx)(mO, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: _,
                        filters: mY,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(mO, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: _,
                        filters: mY,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, r.jsx)(mO, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: _,
                        filters: [...mK, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, r.jsx)(mO, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: _,
                        filters: [...mz, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    A &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(mO, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: f,
                                    filters: mY,
                                    initialValue: I?.assets.video.url,
                                }),
                                (0, r.jsx)(mO, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: f,
                                    filters: mY,
                                    initialValue: I?.assets.videoLowRes?.url,
                                }),
                                (0, r.jsx)(mO, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: f,
                                    filters: mK,
                                    initialValue: I?.assets.video.thumbnail,
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
                                className: mk.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: mk.OA,
                                children: [
                                    (0, r.jsx)(mR, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => y(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(mR, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => y(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== md.l.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(mO, {
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
                                                                (0, mr.YW)(i)
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
                                            filters: mY,
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
            (0, r.jsx)(T.D, { variant: "heading-md/semibold", className: mk.fV, children: "Colors & Quest States" }),
            (0, r.jsxs)("div", {
                className: mk.OA,
                children: [
                    (0, r.jsxs)("div", {
                        className: mk.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(mI, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: C,
                                value: t.config.colors.primary,
                            }),
                            (0, r.jsx)(mI, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: C,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: mk.OA, children: (0, r.jsx)(mV, {}) }),
                    (0, r.jsx)(mW, {
                        onChange: function (e) {
                            switch ((s(e), e)) {
                                case m$.UNENROLLED:
                                    l({ ...t, userStatus: null });
                                    break;
                                case m$.ENROLLED:
                                    l({ ...t, userStatus: mq({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case m$.COMPLETED_25:
                                    l({
                                        ...t,
                                        userStatus: mq({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * S,
                                        }),
                                    });
                                    break;
                                case m$.COMPLETED_50:
                                    l({
                                        ...t,
                                        userStatus: mq({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * S,
                                        }),
                                    });
                                    break;
                                case m$.COMPLETED_75:
                                    l({
                                        ...t,
                                        userStatus: mq({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * S,
                                        }),
                                    });
                                    break;
                                case m$.COMPLETED_100:
                                    l({
                                        ...t,
                                        userStatus: mq({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: S,
                                        }),
                                    });
                                    break;
                                case m$.CLAIMED:
                                    l({
                                        ...t,
                                        userStatus: mq({
                                            claimedAt: new Date().toISOString(),
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: S,
                                        }),
                                    });
                            }
                        },
                        value: i,
                    }),
                ],
            }),
            (0, r.jsx)(T.D, { variant: "heading-lg/bold", className: mk.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: mk.$$,
                children: [
                    (0, r.jsxs)(mD, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: mk.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, r.jsx)(N.E, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: mk.ok,
                                        children: (0, r.jsx)(mv.jY, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, r.jsx)(m_.A, { children: (0, r.jsx)(mb.Y, { quest: t }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(mD, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(mv.jY, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, r.jsx)(mC.A, {
                                    quest: t,
                                    className: mk.d,
                                    questContent: mp.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: mp.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(mD, {
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
                                className: mk.l4,
                                children: (0, r.jsx)(mv.jY, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, r.jsx)("div", {
                                        className: mk.Jr,
                                        children: (0, r.jsx)(mf.A, {
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
                        className: mk.NY,
                        children: (0, r.jsx)(b.d, {
                            label: "Is Participating:",
                            checked: d,
                            onChange: function (e) {
                                u(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(mD, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(T.D, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            m
                                ? (0, r.jsx)(mj.l, { questId: t.id })
                                : (0, r.jsx)(
                                      my.R,
                                      {
                                          quest: t,
                                          location: mp.uF.QUESTS_EMBED,
                                          sourceQuestContent: mp.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: mk.NY,
                        children: (0, r.jsx)(b.d, { label: "Invalid Quests Embed:", checked: m, onChange: h }),
                    }),
                    A &&
                        (0, r.jsxs)(mD, {
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
                                                    sourceQuestContent: mp.uF.INTERNAL_PREVIEW_TOOL,
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
class mZ extends o.Component {
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
                  className: mk.TA,
                  children: [
                      (0, r.jsx)(mm.E, { className: mk.Yw }),
                      (0, r.jsx)(T.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(p.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, r.jsx)(mh.Z, {
                              className: mk.Fx,
                              children: (0, r.jsx)("code", { className: mk.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, r.jsx)(mX, {}, t);
    }
}
var m0 = a(845584),
    m1 = a(839214),
    m2 = a(77138),
    m8 = a(450827),
    m7 = a(626584),
    m3 = a(174768),
    m9 = a(205761),
    m6 = a(860071),
    m4 = a(696451),
    m5 = a(860689),
    he = a(926140);
let ht = new m7.A("SearchDebugUtils");
function ha() {
    ht.info("--------------------------");
}
function hn() {
    let e = m3.A.getProps();
    ht.info("START Quick Switcher State"),
        ht.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((ht.info(`Result Type: ${e.type}`), e.type)) {
                case he.rD.GUILD:
                    ht.info(`guild id: ${e.record.id}`);
                    break;
                case he.rD.TEXT_CHANNEL:
                case he.rD.VOICE_CHANNEL:
                    ht.info(`channel type: ${e.record.type}`),
                        ht.info(`channel id: ${e.record.id}`),
                        ht.info(`name: ${e.record.name}`);
                    break;
                case he.rD.DM:
                    ht.info(`channel type: ${e.record.type}`),
                        ht.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (ht.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = F.default.getUser(e);
                                null != t &&
                                    (ht.info(`recipient username: ${t.username}`),
                                    ht.info(`recipient global name: ${K.Ay.getGlobalName(t)}`),
                                    ht.info(`recipient nickname: ${tZ.A.getNickname(t.id)}`));
                            }));
                    break;
                case he.rD.GROUP_DM:
                    ht.info(`channel type: ${e.record.type}`),
                        ht.info(`channel id: ${e.record.id}`),
                        ht.info(`name: ${(0, tQ.m1)(e.record, F.default, tZ.A)}`),
                        e.record.isGroupDM() &&
                            (ht.info(`default name: ${(0, tQ.ks)(e.record, F.default, tZ.A)}`),
                            ht.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = F.default.getUser(e);
                                null != t &&
                                    (ht.info(`recipient username: ${t.username}`),
                                    ht.info(`recipient global name: ${K.Ay.getGlobalName(t)}`),
                                    ht.info(`recipient nickname: ${tZ.A.getNickname(t.id)}`));
                            }));
                    break;
                case he.rD.USER:
                    ht.info(`user id: ${e.record.id}`),
                        ht.info(`username: ${e.record.username}`),
                        ht.info(`global name: ${K.Ay.getGlobalName(e.record)}`),
                        ht.info(`nickname: ${tZ.A.getNickname(e.record.id)}`),
                        ht.info(`guild nicknames: ${m4.Ay.getNicknames(e.record.id)}`);
            }
            ht.info(`frecency score: ${m9.A.getScoreWithoutFetchingLatest(e.record.id)}`), ha();
        }),
        ht.info("END Quick Switcher State\n");
}
async function hl() {
    ht.info("START User Search Worker State");
    let e = await m8.A.requestDebugState();
    null == e
        ? ht.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
              let [t, a] = e;
              ht.info(`id: ${t}`),
                  ht.info(`username: ${a.username}`),
                  ht.info(`global name: ${a.globalName}`),
                  ht.info(`nickname: ${a.friendNickname}`),
                  Object.entries(a.nicknames).forEach((e) => {
                      let [t, a] = e;
                      ht.info(`guild id: ${t}`), ht.info(`guild nickname: ${a}`);
                  }),
                  ha();
          }),
          ht.info("END User Search Worker State\n"));
}
async function hi() {
    let e = await m8.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        a = F.default.getUsers(),
        n = new Set(Object.keys(t)),
        l = uX.default.keys(a),
        i = [];
    return (
        l.forEach((e) => {
            n.has(e) || i.push(e);
        }),
        i
    );
}
async function hs(e) {
    let t = await m8.A.requestDebugState(),
        a = null != t ? JSON.parse(t.users)[e] : null,
        n = aR.A.getGuildIds(),
        l = [];
    n.forEach((t) => {
        let a = m4.Ay.getMember(t, e);
        null != a && l.push(a);
    });
    let i = m6.A.getDebugState(e);
    return { user: F.default.getUser(e), searchWorkerUser: a, guildMembers: l, guildMemberRequests: i };
}
var hr = a(929948);
function ho(e) {
    let { isUploading: t, isSuccess: a, errorMessage: n, onClick: l, title: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.$, { variant: "primary", onClick: l, loading: t, disabled: t, text: t ? "Uploading…" : i }),
            null != n &&
                (0, r.jsx)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: hr.qS,
                    children: n,
                }),
            a &&
                (0, r.jsx)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: hr.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let hd = (0, m1.D)(() => ({
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
function hc() {
    let e = hd.useField("includeFrecency"),
        t = hd.useField("includeFriends"),
        a = hd.useField("includeDMs"),
        n = hd.useField("includeGDMs"),
        l = hd.useField("includeQuickSwitcherState"),
        i = hd.useField("includeUserSearchWorkerState"),
        s = hd.useField("isUploading"),
        d = hd.useField("isSuccess"),
        c = hd.useField("errorMessage"),
        u = o.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: n,
                includeQuickSwitcherState: l,
                includeUserSearchWorkerState: i,
                isUploading: s,
            } = hd.getState();
            if (!s)
                try {
                    let s, r, o, d, c, u, m, h, p, x, g, v;
                    hd.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((s = tZ.A.getFriendIDs()),
                            ht.info("START Discord Friends"),
                            s.forEach((e) => {
                                let t = F.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    n = K.Ay.getGlobalName(t),
                                    l = tZ.A.getNickname(t.id),
                                    i = m4.Ay.getNicknames(t.id);
                                ht.info(`username: ${a}`),
                                    ht.info(`global name: ${n}`),
                                    ht.info(`nickname: ${l}`),
                                    ht.info(`guild nicknames: ${i}`),
                                    ha();
                            }),
                            ht.info("END Discord Friends\n")),
                        a &&
                            ((r = tX.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                e.isGroupDM() && o.push(e), e.isDM() && d.push(e);
                            }),
                            ht.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, tQ.m1)(e, F.default, tZ.A),
                                    a = (0, tQ.ks)(e, F.default, tZ.A);
                                ht.info(`id: ${e.id}`),
                                    ht.info(`name: ${t}`),
                                    ht.info(`default name: ${a}`),
                                    ht.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = F.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = K.Ay.getGlobalName(t),
                                            l = tZ.A.getNickname(t.id),
                                            i = m4.Ay.getNicknames(t.id);
                                        ht.info(`username: ${a}`),
                                            ht.info(`global name: ${n}`),
                                            ht.info(`nickname: ${l}`),
                                            ht.info(`guild nicknames: ${i}`),
                                            ha();
                                    });
                            }),
                            ht.info("END Logging Group DM Channels\n"),
                            ht.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, tQ.m1)(e, F.default, tZ.A);
                                ht.info(`id: ${e.id}`), ht.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = F.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    i = K.Ay.getGlobalName(n),
                                    s = tZ.A.getNickname(n.id);
                                ht.info(`username: ${l}`),
                                    ht.info(`global name: ${i}`),
                                    ht.info(`nickname: ${s}`),
                                    ha();
                            }),
                            ht.info("END Logging DM Channels\n")),
                        n &&
                            ((c = tX.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                e.isGroupDM() && u.push(e), e.isDM() && m.push(e);
                            }),
                            ht.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, tQ.m1)(e, F.default, tZ.A),
                                    a = (0, tQ.ks)(e, F.default, tZ.A);
                                ht.info(`id: ${e.id}`),
                                    ht.info(`name: ${t}`),
                                    ht.info(`default name: ${a}`),
                                    ht.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = F.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = K.Ay.getGlobalName(t),
                                            l = tZ.A.getNickname(t.id),
                                            i = m4.Ay.getNicknames(t.id);
                                        ht.info(`username: ${a}`),
                                            ht.info(`global name: ${n}`),
                                            ht.info(`nickname: ${l}`),
                                            ht.info(`guild nicknames: ${i}`),
                                            ha();
                                    });
                            }),
                            ht.info("END Logging Group DM Channels\n"),
                            ht.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, tQ.m1)(e, F.default, tZ.A);
                                ht.info(`id: ${e.id}`), ht.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = F.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    i = K.Ay.getGlobalName(n),
                                    s = tZ.A.getNickname(n.id);
                                ht.info(`username: ${l}`),
                                    ht.info(`global name: ${i}`),
                                    ht.info(`nickname: ${s}`),
                                    ha();
                            }),
                            ht.info("END Logging DM Channels\n")),
                        e &&
                            ((h = m9.A.getFrequentlyWithoutFetchingLatest()),
                            (p = []),
                            (x = []),
                            (g = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, m5.fh)(e)
                                    ? p.push(e)
                                    : e.isDM()
                                      ? g.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : x.push(e);
                            }),
                            ht.info("START Frecency"),
                            ht.info("Guilds"),
                            p.forEach((e) => {
                                let t = m9.A.getScoreWithoutFetchingLatest(e.id);
                                ht.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            ha(),
                            ht.info("DM Channels"),
                            g.forEach((e) => {
                                let t = m9.A.getScoreWithoutFetchingLatest(e.id);
                                ht.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            ha(),
                            ht.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = m9.A.getScoreWithoutFetchingLatest(e.id);
                                ht.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    ht.info(`default name: ${(0, tQ.ks)(e, F.default, tZ.A)}`),
                                    ht.info(`name: ${(0, tQ.m1)(e, F.default, tZ.A)}`);
                            }),
                            ha(),
                            ht.info("Guild Channels"),
                            x.forEach((e) => {
                                let t = m9.A.getScoreWithoutFetchingLatest(e.id);
                                ht.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            ha(),
                            ht.info("END Frecency\n")),
                        l && hn(),
                        i && hl(),
                        await (0, m2.a)(H.Umv.WEB_APP),
                        hd.setState({ isSuccess: !0, errorMessage: null });
                } catch (t) {
                    let e = new m0.LG(t);
                    hd.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    hd.setState({ isUploading: !1 });
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
                onChange: () => hd.setState({ includeFrecency: !e }),
            }),
            (0, r.jsx)(b.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => hd.setState({ includeFriends: !t }),
            }),
            (0, r.jsx)(b.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => hd.setState({ includeDMs: !a }),
            }),
            (0, r.jsx)(b.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => hd.setState({ includeGDMs: !n }),
            }),
            (0, r.jsx)(b.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: l,
                onChange: () => hd.setState({ includeQuickSwitcherState: !l }),
            }),
            (0, r.jsx)(b.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: i,
                onChange: () => hd.setState({ includeUserSearchWorkerState: !i }),
            }),
            (0, r.jsx)(ho, {
                isUploading: s,
                isSuccess: d,
                errorMessage: c,
                onClick: u,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let hu = (0, m1.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function hm() {
    let e = hu.useField("userIds"),
        t = hu.useField("isLoading"),
        a = hu.useField("isSuccess"),
        n = hu.useField("errorMessage"),
        l = hu.useField("lastRunAt"),
        i = o.useCallback(async () => {
            hu.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await hi();
                hu.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                hu.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                hu.setState({ isLoading: !1 });
            }
        }, []),
        s = o.useMemo(
            () =>
                e.map((e) => {
                    let t = F.default.getUser(e),
                        a = null != t ? K.Ay.getName(t) : "Unknown";
                    return (0, r.jsx)(
                        "div",
                        {
                            className: hr.J1,
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
                (0, r.jsx)(p.$, { onClick: i, text: "Diff User State", loading: t, disabled: t }),
                (0, r.jsxs)("div", {
                    className: hr.N6,
                    children: [
                        null != n &&
                            (0, r.jsx)(N.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: hr.qS,
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
                                    (0, r.jsx)("div", { className: hr.uk, children: s }),
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
let hh = (0, m1.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function hp() {
    let e = hh.useField("isRecording"),
        t = hh.useField("isUploading"),
        a = hh.useField("isSuccess"),
        n = hh.useField("errorMessage"),
        l = o.useRef([]),
        i = o.useRef(""),
        s = o.useCallback(() => {
            let { results: e, query: t } = m3.A.getProps();
            (l.current !== e || i.current !== t) && ((l.current = e), (i.current = t), hn());
        }, []);
    o.useEffect(() => {
        if (e) return m3.A.addChangeListener(s), () => m3.A.removeChangeListener(s);
    }, [s, e]);
    let d = o.useCallback(async () => {
        let { isUploading: e } = hh.getState();
        if (!e)
            try {
                hh.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, m2.a)(H.Umv.WEB_APP),
                    hh.setState({ isSuccess: !0, errorMessage: null });
            } catch (t) {
                let e = new m0.LG(t);
                hh.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                hh.setState({ isUploading: !1 });
            }
    }, []);
    return (0, r.jsxs)(m.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, r.jsx)(uA.p, {
                messageType: uA.Y.INFO,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, r.jsxs)(lH.e, {
                children: [
                    (0, r.jsx)(p.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => hh.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(ho, {
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
var hx = a(145497);
let hg = (0, m1.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function hv(e) {
    let { title: t, guildIds: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: hr.J1,
                children: (0, r.jsx)(N.E, { variant: "text-sm/normal", children: t }),
            }),
            (0, r.jsxs)("div", {
                className: hr.uk,
                children: [
                    0 === a.length &&
                        (0, r.jsx)("div", {
                            className: hr.J1,
                            children: (0, r.jsx)(N.E, { variant: "text-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = aR.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: hr.J1,
                                      children: [
                                          (0, r.jsx)(hx.Ay, { guild: t, iconSize: 16 }),
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
function hb(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: n, guildMembers: l, guildMemberRequests: i } = t,
        s = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(iO.y, { size: "sm", color: ek.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(mm.E, { size: "sm", color: ek.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, r.jsxs)("div", {
        className: hr.N6,
        children: [
            (0, r.jsxs)("div", {
                className: hr.J1,
                children: [
                    s({ ok: null != a }),
                    (0, r.jsx)(N.E, {
                        variant: "text-sm/normal",
                        children: null != a ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != a &&
                (0, r.jsx)("div", {
                    className: hr.uk,
                    children: (0, r.jsx)("div", {
                        className: hr.J1,
                        children: (0, r.jsx)(N.E, { variant: "text-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: hr.J1,
                children: [
                    s({ ok: null != n }),
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
                    className: hr.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: hr.J1,
                            children: (0, r.jsx)(N.E, {
                                variant: "text-sm/normal",
                                children: `username: ${n.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: hr.J1,
                            children: (0, r.jsx)(N.E, {
                                variant: "text-sm/normal",
                                children: `global name: ${n.globalName ?? "—"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: hr.J1,
                            children: (0, r.jsx)(N.E, { variant: "text-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: hr.uk,
                            children: [
                                0 === Object.keys(n.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: hr.J1,
                                        children: (0, r.jsx)(N.E, { variant: "text-sm/normal", children: "None" }),
                                    }),
                                Object.entries(n.nicknames).map((e) => {
                                    let [t, a] = e,
                                        n = aR.A.getGuild(t),
                                        l = tX.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: hr.J1,
                                            children: [
                                                null != n && (0, r.jsx)(hx.Ay, { guild: n, iconSize: 16 }),
                                                null != n &&
                                                    (0, r.jsx)(N.E, { variant: "text-sm/normal", children: n.name }),
                                                null == n &&
                                                    null != l &&
                                                    (0, r.jsx)(N.E, {
                                                        variant: "text-sm/normal",
                                                        children: (0, tQ.m1)(l, F.default, tZ.A),
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
                className: hr.J1,
                children: [
                    s({ ok: l.length > 0 }),
                    (0, r.jsx)(N.E, {
                        variant: "text-sm/normal",
                        children: l.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            l.length > 0 &&
                (0, r.jsx)("div", {
                    className: hr.uk,
                    children: l.map((e) => {
                        let t = aR.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: hr.J1,
                                children: [
                                    (0, r.jsx)(hx.Ay, { guild: t, iconSize: 16 }),
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
                className: hr.J1,
                children: [
                    (0, r.jsx)(d2.m, { size: "sm" }),
                    (0, r.jsx)(N.E, { variant: "text-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != i &&
                (0, r.jsxs)("div", {
                    className: hr.uk,
                    children: [
                        (0, r.jsx)(hv, { title: "Pending Guild Member Requests:", guildIds: i.pendingRequestGuildIds }),
                        (0, r.jsx)(hv, { title: "Sent Guild Member Requests:", guildIds: i.sentRequestGuildIds }),
                        (0, r.jsx)(hv, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: i.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function h_() {
    let e = o.useCallback((e) => {
            hg.setState({ userId: e, state: null });
        }, []),
        t = o.useCallback(async () => {
            let { userId: e, loading: t } = hg.getState();
            if (!t && null != e) {
                hg.setState({ loading: !0, error: null });
                try {
                    let t = await hs(e);
                    hg.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new m0.LG(t);
                    hg.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    hg.setState({ loading: !1 });
                }
            }
        }, []),
        a = hg.useField("loading");
    return (0, r.jsxs)("div", {
        className: hr.$n,
        children: [
            (0, r.jsx)(g.k, { placeholder: "User ID", onChange: e }),
            (0, r.jsx)(p.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function hf() {
    let e = hg.useField("state"),
        t = hg.useField("error");
    return (0, r.jsxs)(m.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, r.jsx)(h_, {}),
            null != t &&
                (0, r.jsx)(N.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: hr.qS,
                    children: t,
                }),
            null != e && (0, r.jsx)(hb, { userState: e }),
        ],
    });
}
function hj() {
    return (0, r.jsxs)(c.Ip, {
        className: hr.nd,
        children: [
            (0, r.jsx)(hp, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(hc, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(hf, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(hm, {}),
        ],
    });
}
var hy = a(761508),
    hC = a(599147),
    hE = a(808411),
    hS = a(624716),
    hN = a(398590),
    hA = a(3258),
    hk = a(467680),
    hI = a(52822),
    hT = a(642153);
let hD = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    hw = {
        "virtual-currency": function () {
            return (0, r.jsxs)(hI.Hq, {
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
                                (e = hk.RevenuePlaygroundCollectionId.VIRTUAL_CURRENCY),
                                void (hA.PlaygroundStore.setState({ selectedCollection: e, selectedStory: null }),
                                (0, hN.id)(H.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: () =>
            (0, r.jsxs)("div", { children: [(0, r.jsx)(hC.o, {}), (0, r.jsx)(hE.A, {}), (0, r.jsx)(hS.A, {})] }),
    };
function hO() {
    let [e, t] = o.useState("virtual-currency"),
        a = o.useMemo(() => hw[e], [e]);
    return (0, r.jsxs)("div", {
        className: E()(tN.nd, hT.kL),
        children: [
            (0, r.jsx)(hy.V, {
                className: hT.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: hD.map((e) => (0, r.jsx)(hy.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, r.jsx)(c.Ar, { children: (0, r.jsx)("div", { className: hT.Qs, children: (0, r.jsx)(a, {}) }) }),
        ],
    });
}
var hR = a(718446),
    hL = a(858897),
    hM = a(355097);
let hP = (0, m1.D)(() => ({ urlString: "", error: null })),
    hU = Object.entries(hM.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function hB() {
    let [e, t] = o.useState(),
        a = hP.useField("urlString"),
        n = hP.useField("error"),
        l = o.useCallback(() => {
            let e = hP.getField("urlString");
            if (null == e || "" === e) return void hP.setState({ error: "URL is required" });
            let t = (0, hR.parseSettingsUrl)({ path: e });
            ((0, hR.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? hP.setState({ error: "String did not match expected format" })
                : (0, hL.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, r.jsxs)(m.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, r.jsx)(lh.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: hU,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = hM.od[e].split("/");
                        hP.setState({ urlString: H.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, r.jsx)(g.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => hP.setState({ urlString: e, error: null }),
            }),
            (0, r.jsxs)(lH.e, {
                children: [
                    (0, r.jsx)(p.$, {
                        variant: "primary",
                        onClick: l,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(p.$, {
                        variant: "secondary",
                        onClick: () => (0, a9.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != n && (0, r.jsx)(N.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var hG = a(780964);
let hF = (0, m1.D)(() => ({ setting: hG.X.ACCOUNT_PANEL }));
function hV() {
    let e = hF.useField("setting"),
        t = o.useCallback(() => {
            (0, hL.openUserSettings)(e);
        }, [e]),
        a = o.useMemo(() => Object.values(hG.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, r.jsxs)(m.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, r.jsx)(lh.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => hF.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, r.jsx)(p.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var h$ = a(963935),
    hW = a(533163),
    hH = a(53181);
function hz(e) {
    let { title: t, initExpanded: a, highlightMode: n = "none", children: l } = e,
        [i, s] = o.useState(a),
        d = o.useCallback(() => {
            s(!i);
        }, [i]),
        c = "migrated" === n || "migrated-root" === n ? void 0 : "status-warning",
        u = (e) => (0, r.jsx)(N.E, { variant: e, color: c, children: t });
    return null == l
        ? (0, r.jsx)("div", { className: hH.NF, children: u("text-md/normal") })
        : (0, r.jsxs)("div", {
              className: hH.NF,
              children: [
                  (0, r.jsxs)(S.D, {
                      className: hH.jr,
                      onClick: d,
                      children: [
                          u("text-md/bold"),
                          (0, r.jsx)(l0.A, {
                              direction: i ? l0.A.Directions.DOWN : l0.A.Directions.RIGHT,
                              className: hH.D,
                          }),
                      ],
                  }),
                  i && (0, r.jsx)("div", { className: hH.m4, children: l }),
              ],
          });
}
function hK(e) {
    let { setting: t, depth: a, inheritedHighlightMode: n } = e,
        l = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case h$.Z6.ROOT:
                    return "migrated-root";
                case h$.Z6.SECTION:
                case h$.Z6.PANEL:
                case h$.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, n),
        i = "migrated" === l ? "migrated" : void 0,
        s = null;
    return (
        (0, h$.nW)(t) &&
            t.layout.length > 0 &&
            (s = t.layout.map((e) => (0, r.jsx)(hK, { setting: e, depth: a + 1, inheritedHighlightMode: i }, e.key))),
        (0, r.jsx)(hz, { title: t.key, initExpanded: a <= 2, highlightMode: l, children: s })
    );
}
function hY() {
    let { node: e } = (0, B.Ay)(hW.D, ""),
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
            (0, r.jsx)(hK, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var hq = a(168803);
function hJ() {
    return (0, r.jsxs)(c.Ip, {
        className: hq.n,
        children: [
            (0, r.jsx)(hV, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(hB, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(hY, {}),
        ],
    });
}
function hQ() {
    return o.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: aE.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(n_, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: aE.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(uN, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: aE.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(uj, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: aE.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(lF, {}),
            },
        ];
        return (
            ad.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: aE.fu.SHOP, render: () => (0, r.jsx)(uu, {}) }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: aE.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(o4, {}),
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
                    render: () => (0, r.jsx)(cg, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: aE.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(lW, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: aE.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(dN.Ay, {}),
                }),
                e.push({
                    id: "age_verification",
                    name: "Age Verification",
                    group: aE.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(aY, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: aE.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(lQ, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: aE.fu.GAMES, render: () => (0, r.jsx)(oW, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: aE.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(i0, {}),
                }),
                e.push({
                    id: "detected_games",
                    name: "Detected Games",
                    group: aE.fu.GAMES,
                    render: () => (0, r.jsx)(lj, {}),
                }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: aE.fu.GAMES, render: () => (0, r.jsx)(uh, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: aE.fu.GAMES,
                    render: () => (0, r.jsx)(aG, {}),
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
                    render: () => (0, r.jsx)(hj, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: aE.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(y, {}) })),
            e.push({
                id: "rive",
                name: "Rive",
                group: aE.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(cf, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: aE.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag"],
                render: () => (0, r.jsx)(sD, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: aE.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rn, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: aE.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(s0, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: aE.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(nH, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: aE.fu.UI, render: () => (0, r.jsx)(lc, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: aE.fu.UI,
                render: () => (0, r.jsx)(d1, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: aE.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(im, { devSettingsCategory: ac.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: aE.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(rj, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: aE.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(im, { devSettingsCategory: ac.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: aE.fu.USERS, render: () => (0, r.jsx)(dU, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: aE.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(rT, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: aE.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(ro, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: aE.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(s4, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: aE.fu.USERS,
                tags: ["friends"],
                render: () => (0, r.jsx)(aW, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: aE.fu.USERS,
                tags: ["channels"],
                render: () => (0, r.jsx)(nW, {}),
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
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: aE.fu.DCF, render: () => (0, r.jsx)(ls, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: aE.fu.DCF, render: () => (0, r.jsx)(nZ, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: aE.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(sq, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: aE.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up"],
                render: () => (0, r.jsx)(dI, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: aE.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(rW, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: aE.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(dx, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: aE.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(ml, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: aE.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, r.jsx)(il, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: aE.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, r.jsx)(i9, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: aE.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(uK, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: aE.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(uR, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: aE.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(sH, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: aE.fu.BOOSTING, render: () => (0, r.jsx)(id, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: aE.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(s2, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: aE.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(hJ, {}),
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
                render: () => (0, r.jsx)(uT, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: aE.fu.BILLING,
                render: () => (0, r.jsx)(hO, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: aE.fu.QUESTS,
                render: () => (0, r.jsx)(mZ, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: aE.fu.USERS,
                render: () => (0, r.jsx)(d4, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: aE.fu.USERS,
                render: () => (0, r.jsx)(nT, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: aE.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(lS, {}),
            }),
            e
        );
    }, []);
}
