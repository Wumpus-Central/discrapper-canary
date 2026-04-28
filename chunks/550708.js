a.d(t, { x: () => hX }), a(321073);
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
    j = a(372684),
    f = a(399925),
    y = a(871421);
function C() {
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
        [n, l] = o.useState(j.rb.KILL),
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
                            (0, r.jsx)(p.$, { text: "Manual", onClick: () => f.Ts({ type: j.Gy.MANUAL }) }),
                            (0, r.jsx)(p.$, {
                                text: "Distributed",
                                onClick: () =>
                                    f.Ts({
                                        type: j.Gy.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, r.jsx)(p.$, {
                                text: "Phrase: Clip",
                                onClick: () => f.Ts({ type: j.Gy.PHRASE, text: "clip" }),
                            }),
                            (0, r.jsx)(p.$, {
                                text: "Yelling",
                                onClick: () => f.Ts({ type: j.Gy.YELLING, userId: "123" }),
                            }),
                            (0, r.jsx)(p.$, {
                                text: "Laughter",
                                onClick: () => f.Ts({ type: j.Gy.LAUGHTER, label: "laughter", confidence: 1 }),
                            }),
                            (0, r.jsx)(p.$, {
                                text: "Shouting",
                                onClick: () => f.Ts({ type: j.Gy.LAUGHTER, label: "shouting", confidence: 1 }),
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
                                        { id: "kill", label: "Kill", value: j.rb.KILL },
                                        { id: "multikill", label: "Multikill", value: j.rb.MULTIKILL },
                                        { id: "death", label: "Death", value: j.rb.DEATH },
                                        { id: "assist", label: "Assist", value: j.rb.ASSIST },
                                        { id: "item", label: "Item", value: j.rb.ITEM },
                                        { id: "victory", label: "Victory", value: j.rb.VICTORY },
                                        { id: "defeat", label: "Defeat", value: j.rb.DEFEAT },
                                        { id: "level_up", label: "Level Up", value: j.rb.LEVEL_UP },
                                        { id: "treasure", label: "Treasure", value: j.rb.TREASURE },
                                        { id: "objective_kill", label: "Objective Kill", value: j.rb.OBJECTIVE_KILL },
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
                        (0, r.jsx)(p.$, {
                            text: "Create Game Event",
                            onClick: () => {
                                f.Ts({ type: j.Gy.GAME_EVENT, eventType: n, importance: s, title: C, description: S });
                            },
                        }),
                        (0, r.jsx)(p.$, {
                            text: "stash decider data",
                            onClick: () => {
                                y.Ay.debugStashDeciderData();
                            },
                        }),
                        (0, r.jsx)(p.$, {
                            text: "re-run ranking",
                            onClick: () => {
                                y.ih.debugRerunRanking();
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
                            onChange: (t) => f.dR({ ...e, emotionClassifier: t }),
                        }),
                        (0, r.jsx)(b.d, {
                            label: "Wake Word Detector",
                            checked: e.wakeWordDetector,
                            onChange: (t) => f.dR({ ...e, wakeWordDetector: t }),
                        }),
                        (0, r.jsx)(b.d, {
                            label: "Yell Detector",
                            checked: e.yellDetector,
                            onChange: (t) => f.dR({ ...e, yellDetector: t }),
                        }),
                        (0, r.jsx)(b.d, {
                            label: "Whisper Transcription",
                            checked: e.whisperTranscription,
                            onChange: (t) => f.dR({ ...e, whisperTranscription: t }),
                        }),
                        (0, r.jsx)(b.d, {
                            label: "Laughter / Shouting Detector (V3)",
                            checked: e.laughterDetector,
                            onChange: (t) => f.dR({ ...e, laughterDetector: t }),
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
                            onChange: () => A("wakeWord"),
                        }),
                        (0, r.jsx)(b.d, {
                            label: "Emotion Debug",
                            description: "Log emotion classification events to console",
                            checked: t.emotion,
                            onChange: () => A("emotion"),
                        }),
                        (0, r.jsx)(b.d, {
                            label: "Yell Debug",
                            description: "Show yell classification events to console",
                            checked: t.yell,
                            onChange: () => A("yell"),
                        }),
                        (0, r.jsx)(b.d, {
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
    D = a(331322),
    T = a(811893),
    I = a(534514),
    w = a(538064),
    O = a(265059),
    R = a(902592),
    L = a(869146);
a(323874), a(14289), a(35956);
var M = a(789645),
    P = a(110574),
    U = a(65593),
    B = a(121881),
    G = a(581298),
    F = a(500158),
    V = a(287809),
    $ = a(901139),
    W = a(641886),
    H = a(780898),
    z = a(652215),
    K = a(216894),
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
        status: z.clD.ONLINE,
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
    Z = a(809948);
function X(e) {
    let { selected: t, onSelect: a } = e,
        n = (0, J.Ay)();
    return (0, r.jsxs)("div", {
        className: Z.N,
        children: [
            (0, r.jsx)(A.E, { variant: "text-sm/semibold", children: "Preselected Gradient" }),
            (0, r.jsx)("div", {
                className: Z.Z,
                children: W.Z6.map((e) => {
                    let l = n !== z.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
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
        l = new et.cq({ id: "0", type: z.rbe.DM, name: "self", guild_id: "0", recipients: [n.id] });
    return (0, r.jsx)(ee.th, { selected: t, channel: l, user: n, nameplate: a });
}
var el = a(698638),
    es = a(877203);
function ei() {
    let [e, t] = (0, o.useState)(!1),
        [a, n] = (0, o.useState)(!1),
        [l, s] = (0, o.useState)(null),
        { node: i } = (0, G.Ay)(F.k, ""),
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
                className: es.ne,
                children: [
                    (0, r.jsxs)("div", {
                        className: es.gO,
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
                        className: es.uQ,
                        children: [
                            e && (0, r.jsx)(B.A, { node: i }),
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
                                    m(t, t, (0, H.nI)(n)), c(t, t, W.Wj);
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
                                onChange: (e) => x({ name: W.AK, darkBackground: e, lightBackground: e }),
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
                children: (0, r.jsx)(M.P, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, r.jsx)("img", { className: es.Ez, src: t, alt: "" }),
            (0, r.jsx)("div", {
                className: es.Lu,
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
function ed(e) {
    let { label: t, onClick: a } = e;
    return (0, r.jsxs)("div", {
        className: es.Uu,
        children: [
            (0, r.jsx)(A.E, { variant: "text-sm/normal", children: "coming soon" }),
            (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: a }),
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
var ep = a(132500),
    ex = a(157559),
    eg = a(780777),
    ev = a(993408),
    eb = a(315949),
    e_ = a(559474),
    ej = a(816866),
    ef = a(87558),
    ey = a(575593),
    eC = a(854284),
    eE = a(224640),
    eS = a(408278),
    eN = a(972213),
    eA = a(43990),
    ek = a(192308),
    eD = a(661531),
    eT = a(231723),
    eI = a(900686),
    ew = a(986687),
    eO = a(944768),
    eR = a(735438),
    eL = a.n(eR),
    eM = a(219220),
    eP = a(480335);
let eU = (e) => {
    let { profileEffect: t } = e,
        a = o.useMemo(() => (0, eR.cloneDeep)(t), [t]),
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
        { layerData: s } = (0, eM.A)({ skuId: "debug", layers: l.effects });
    return (0, r.jsx)(eP.p, { profileEffect: l, layerData: s, skuId: "debug" });
};
var eB = a(314485),
    eG = a(778765);
let eF =
        "https://cdn.discordapp.com/assets/content/ad2a252a6866e1ecb3bab521e2baaabbf13ab2d1ecaa8af67862c53c91f76761.png",
    eV = { [ef.qH.THUMBNAIL]: null, [ef.qH.STATIC]: null, [ef.qH.REDUCED_MOTION]: null },
    e$ = "debug",
    eW = "reduced-motion-preview-modal",
    eH = (e) => {
        let { transitionState: t, onClose: a, frameSrc: n, theme: l } = e;
        return (0, r.jsx)(eE.d, {
            transitionState: t,
            size: "md",
            onClose: a,
            maxHeight: "viewport",
            children: (0, r.jsxs)("div", {
                className: eB.Xd,
                children: [
                    (0, r.jsx)("div", {
                        className: eB.y6,
                        children: (0, r.jsx)(eS.K, {
                            "aria-label": "Close",
                            onClick: a,
                            icon: eN.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: eB.rU,
                        children: [
                            (0, r.jsx)(eA.N, {
                                theme: l,
                                children: (e) =>
                                    (0, r.jsx)("img", {
                                        src: eF,
                                        alt: "",
                                        className: S()(eB.aM, e),
                                        "aria-hidden": !0,
                                    }),
                            }),
                            null != n &&
                                "" !== n &&
                                (0, r.jsx)("img", { src: n, className: eB.SD, alt: "Reduced motion preview" }),
                        ],
                    }),
                ],
            }),
        });
    },
    ez = (e) => {
        let { type: t, frame: a, theme: n, onClear: l } = e,
            s = t === ef.qH.REDUCED_MOTION,
            i = s ? eF : eG.A,
            o = (0, r.jsx)(eA.N, {
                theme: n,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("img", { src: i, alt: "", className: S()(eB.aM, e), "aria-hidden": !0 }),
                            a?.src != null &&
                                "" !== a.src &&
                                (0, r.jsx)("img", { src: a.src, className: S()(eB.SD, e), alt: "" }),
                        ],
                    }),
            });
        return (0, r.jsxs)("div", {
            className: eB.pK,
            children: [
                (0, r.jsx)(I.D, { variant: "heading-sm/bold", children: t }),
                s
                    ? (0, r.jsx)(N.D, {
                          className: S()(eB.zd, eB.eB),
                          onClick: () => {
                              (0, ek.hasModalOpen)(eW)
                                  ? (0, ek.closeModal)(eW)
                                  : (0, ek.openModalLazy)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, r.jsx)(eH, { ...e, frameSrc: a?.src ?? null, theme: n }),
                                            ),
                                        { modalKey: eW, onCloseRequest: () => (0, ek.closeModal)(eW) },
                                    );
                          },
                          children: o,
                      })
                    : (0, r.jsx)("div", { className: eB.zd, children: o }),
                null != a && (0, r.jsx)(p.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: l }),
            ],
        });
    },
    eK = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, ej.wu)(),
            n = (0, d.bG)([V.default], () => V.default.getCurrentUser()),
            [l, s] = o.useState(!0),
            i = o.useRef({}),
            [c, u] = o.useState(!1),
            [m, h] = o.useState(!1),
            [x, g] = o.useState(8),
            [v, b] = o.useState([]),
            [_, j] = o.useState(eV),
            f = o.useRef([]),
            [y, C] = o.useState(t.name),
            E = y.toLowerCase().replace(/\s+/g, "_"),
            N = o.useMemo(
                () => ({
                    type: ey.R.PROFILE_EFFECT,
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
            k = c ? eD.A.themes.DARKER : eD.A.themes.LIGHT,
            D = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            T = (e, t) => {
                let a = D(t);
                null != a &&
                    (0, ef.Mz)(a, (t) => {
                        j((n) => ({ ...n, [e]: (0, ef.GT)(t, a) }));
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
                                j((e) => ({ ...e, [t]: a }));
                            else if ("" !== a.base64 && null != a.base64) {
                                let e = (0, ef.fB)(a.base64);
                                (a.src = e), f.current.push(e), j((e) => ({ ...e, [t]: a }));
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
                f.current.forEach((e) => {
                    URL.revokeObjectURL(e);
                }),
                    (f.current = []);
            },
            [],
        ),
        null == n)
            ? (0, r.jsx)("div", {})
            : (0, r.jsxs)("div", {
                  className: eB.zr,
                  children: [
                      (0, r.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, r.jsx)(eg.A, {
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
                              (0, r.jsx)(eg.A, {
                                  ref: (e) => {
                                      i.current.thumbnail = e;
                                  },
                                  onChange: (e) => T(ef.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eg.A, {
                                  ref: (e) => {
                                      i.current.static = e;
                                  },
                                  onChange: (e) => T(ef.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eg.A, {
                                  ref: (e) => {
                                      i.current.reducedMotion = e;
                                  },
                                  onChange: (e) => T(ef.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: eB.Vg,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: S()(eB.nM, eB.uW),
                                  children: [
                                      (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Profile Effect Name" }),
                                      (0, r.jsx)("input", {
                                          type: "text",
                                          value: y,
                                          className: eB.hF,
                                          onChange: (e) => {
                                              C(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eB.nM,
                                  children: [
                                      (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Dark Theme" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: c,
                                          className: eB.OO,
                                          onChange: () => {
                                              u(!c);
                                          },
                                      }),
                                      (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Show User Profile" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: m,
                                          className: eB.OO,
                                          onChange: () => {
                                              h(!m);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eB.nM,
                                  children: [
                                      (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Border Radius" }),
                                      (0, r.jsx)("input", {
                                          type: "range",
                                          min: 4,
                                          max: 24,
                                          step: 2,
                                          value: x,
                                          onChange: (e) => g(+e.target.value),
                                      }),
                                      (0, r.jsxs)(A.E, { variant: "text-sm/normal", children: [x, "px"] }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: S()(eB.nz, eB.VH),
                                  style: { borderRadius: x },
                                  children: [
                                      m
                                          ? (0, r.jsx)("div", {
                                                className: eB.jq,
                                                children: (0, r.jsx)(eO.A, {
                                                    user: n,
                                                    currentUser: n,
                                                    transitionState: eT.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: eB.JB,
                                                }),
                                            })
                                          : (0, r.jsx)(eA.N, {
                                                theme: k,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: S()(eB.aM, e),
                                                        children: (0, r.jsx)("img", { src: eG.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      l &&
                                          (0, r.jsx)("div", {
                                              className: eB.KJ,
                                              children: (0, r.jsx)(eU, { profileEffect: N }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  children:
                                      m &&
                                      (0, r.jsxs)("div", {
                                          className: S()(eB.f5, eB.VH),
                                          style: { borderRadius: x },
                                          children: [
                                              (0, r.jsx)(ew.A, {
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
                                  className: eB.nz,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: eB.nM,
                                          children: [
                                              (0, r.jsx)(p.$, {
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
                                          className: eB.nM,
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
                                          className: eB.q6,
                                          children: (0, r.jsx)("div", {
                                              className: eB.nM,
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
                                          className: S()(eB.q6, eB.XA),
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
                                                  className: eB.nM,
                                                  children: [
                                                      (0, r.jsx)(eI.A, {
                                                          fileContents: () => (0, ef.rs)(v),
                                                          contentType: "text/plain",
                                                          fileName: `${E}_timing_config.txt`,
                                                          children: (0, r.jsx)(p.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(eI.A, {
                                                          fileContents: () =>
                                                              JSON.stringify({
                                                                  ...t,
                                                                  name: y,
                                                                  readonly: !1,
                                                                  effects: v,
                                                                  stillFrames: _,
                                                              }),
                                                          contentType: "text/plain",
                                                          fileName: `${E}_config.txt`,
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
                                          className: eB.uW,
                                          children: [
                                              (0, r.jsx)(I.D, { variant: "heading-lg/bold", children: "Still Frames" }),
                                              (0, r.jsx)("div", {
                                                  className: eB.mv,
                                                  children: Object.entries(_).map((e) => {
                                                      let [t, a] = e;
                                                      return (0, r.jsx)(
                                                          ez,
                                                          {
                                                              type: t,
                                                              frame: a,
                                                              theme: k,
                                                              onClear: () => {
                                                                  j((e) => ({ ...e, [t]: null }));
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
                                              className: S()(eB.uW, eB.l7),
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
                                  className: S()(eB.Vg, eB.ZF),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: eB.cD,
                                          children: (0, r.jsx)(p.$, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: () => {
                                                  b([]), j(eV);
                                              },
                                          }),
                                      }),
                                      v.map((e, t) =>
                                          (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: eB.ec,
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: eB.D1,
                                                          children: [
                                                              (0, r.jsx)(I.D, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, r.jsx)("img", {
                                                                  src: e.src,
                                                                  className: eB.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, r.jsxs)(r.Fragment, {
                                                                      children: [
                                                                          (0, r.jsx)(I.D, {
                                                                              variant: "heading-md/bold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, r.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, r.jsx)(I.D, {
                                                                                                  variant:
                                                                                                      "heading-sm/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, r.jsx)("img", {
                                                                                              src: e.src,
                                                                                              className: eB.oq,
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
                                                          className: S()(eB.Vg, eB.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: eB.nz,
                                                                  children: [
                                                                      (0, r.jsx)(A.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: eB.hF,
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
                                                                  className: eB.nz,
                                                                  children: [
                                                                      (0, r.jsx)(A.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: eB.hF,
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
                                                          className: S()(eB.Vg, eB.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: eB.nz,
                                                                  children: [
                                                                      (0, r.jsx)(A.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: eB.OO,
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
                                                                  className: eB.nz,
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
                                                                                  className: eB.hF,
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
                                                          children: (0, r.jsx)(eg.A, {
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
                                                          className: S()(eB.nM, eB._N),
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
    eY = "Make sure you're only uploading text files!",
    eq = (e) => {
        let { profileEffect: t, onClick: a } = e,
            { deleteProfileEffect: n } = (0, ej.wu)();
        return (0, r.jsxs)(N.D, {
            className: eB.B0,
            onClick: a,
            children: [
                (0, r.jsx)("div", { className: eB.yV, style: { backgroundImage: `url(${t.effects?.[0]?.base64})` } }),
                (0, r.jsxs)("div", {
                    className: eB.eL,
                    children: [
                        (0, r.jsx)(A.E, { variant: "text-md/bold", children: t.name }),
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
function eJ() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, ej.wu)(),
        [n, l] = o.useState(),
        s = o.useRef(null),
        { categories: i } = (0, eb.A)(),
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
                if (null == a || !e.type.startsWith("text/")) return (0, e_.Ni)(eY);
                let [n, l] = a.split(",");
                if (!n.includes("text/plain")) return (0, e_.Ni)(eY);
                let s = JSON.parse(atob(l));
                (s.skuId = (0, ep.A)()), t(s), (0, e_.GF)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        x = o.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, e_.Ni)("Error uploading file. Try again!")
                    : (0, e_.KE)(e.currentTarget.files, h, e_.Ni);
            },
            [h],
        );
    return (0, r.jsxs)("div", {
        className: eB.zr,
        children: [
            null == n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eB.nz,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: S()(eB.uW, eB.nM),
                                    children: [
                                        (0, r.jsx)(I.D, {
                                            variant: "heading-xl/bold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, r.jsx)(p.$, {
                                            variant: "critical-secondary",
                                            text: "Clear All",
                                            onClick: async () => {
                                                (await ex.A.confirm({
                                                    title: "Clear All Profile Effects",
                                                    body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                                                    confirmText: "Clear All",
                                                    confirmVariant: "critical-primary",
                                                })) && (a(), (0, e_.GF)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: eB.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(eq, { profileEffect: e, onClick: () => l(e) }, e.skuId),
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: S()(eB.nM, eB._N, eB.uW),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: eB.au,
                                    children: [
                                        (0, r.jsx)(A.E, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: "Import Shared Config",
                                        }),
                                        (0, r.jsx)(eg.A, { ref: s, onChange: x, multiple: !1 }),
                                    ],
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: () => {
                                        t({ skuId: (0, ep.A)(), name: "New Profile Effect", effects: [] });
                                    },
                                }),
                            ],
                        }),
                        (0, r.jsx)("hr", {}),
                        (0, r.jsxs)("div", {
                            className: eB.uW,
                            children: [
                                (0, r.jsx)(I.D, { variant: "heading-xl/bold", children: "All Effects" }),
                                (0, r.jsx)(g.k, {
                                    value: c,
                                    onChange: (e) => {
                                        u(e);
                                    },
                                }),
                                (0, r.jsx)("div", {
                                    className: eB.xm,
                                    children: m.map((e) =>
                                        (0, r.jsx)(
                                            N.D,
                                            {
                                                className: eB.S5,
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
                                                    className: eB.Hd,
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
    eZ = a(462887),
    eX = a(289873),
    e0 = a(478016),
    e1 = a(565645),
    e2 = a(7584),
    e8 = a(47360),
    e7 = a(207803),
    e4 = a(84540),
    e6 = a(836602),
    e9 = a(999291),
    e3 = a(576622),
    e5 = a(841702),
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
            (0, r.jsx)("img", { src: (0, eZ.M)(e) ? tn : tl, alt: "" }),
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
        e?.id != null && (0, e3.A)(e.id);
    }, [e?.id]);
    let { purchases: a, isFetchingPurchases: n } = (0, e5.Bf)(),
        l = o.useMemo(() => (0, ev.MG)(a, new Map()), [a]),
        [{ pendingProfileFrame: s }, i] = (0, d.yK)([e6.A], () => [e6.A.getPendingChanges(), e6.A.showNotice()]),
        c = void 0 === s ? t?.profileFrame : s,
        u = null != c ? a.get(c.skuId) : void 0,
        m = (0, te.s)(u?.items[0]) ? u.items[0] : void 0;
    return (
        (0, eQ.l0)(e7.RE),
        (0, r.jsxs)("div", {
            className: ta.kL,
            children: [
                (0, r.jsxs)(I.D, {
                    variant: "heading-xl/bold",
                    children: [
                        (0, r.jsx)(e1.A, {
                            emojiName: e2.Ay.getByName("frame_with_picture")?.surrogates,
                            className: ta.Zg,
                        }),
                        "Profile Frames!",
                    ],
                }),
                0 === l.length && n && (0, r.jsx)(eX.y, {}),
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
                                            children: (0, r.jsx)(p.$, {
                                                text: "None",
                                                variant: "secondary",
                                                fullWidth: !0,
                                                icon: null == c ? e0.U : void 0,
                                                disabled: null == c,
                                                onClick: () => (0, e4.p)({ profileFrame: null }),
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
                                                          icon: c?.skuId === e.skuId ? e0.U : void 0,
                                                          disabled: c?.skuId === e.skuId,
                                                          onClick: () => (0, e4.p)({ profileFrame: e }),
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
                                            (0, r.jsx)("img", { src: eG.A, alt: "" }),
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
let tp = (e) => {
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
    tx = () => {
        let e = (0, tr.bG)([V.default], () => V.default.getCurrentUser()),
            t = (0, tr.bG)([td.A], () => td.A.categories),
            a = (0, tr.bG)([tc.A], () => tc.A.purchases),
            n = (0, tr.bG)([td.A], () => td.A.lastSuccessfulFetch),
            l = t.size > 0 && a.size > 0 && null != n,
            { isFetching: s, categories: i } = (0, e5.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: l }),
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
            let e = td.A.getProduct(u),
                t = td.A.getCategoryForProduct(u);
            null != e && null != t ? (x(e), b(t)) : (x(null), b(null));
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
                                (0, r.jsx)(I.D, { variant: "heading-lg/semibold", children: "Product Configuration" }),
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
                                (0, r.jsx)(I.D, { variant: "heading-lg/semibold", children: "Product Preview" }),
                                null != h && null != v
                                    ? (0, r.jsxs)("div", {
                                          className: th.i1,
                                          children: [
                                              (0, r.jsx)(tp, { skuId: h.skuId }),
                                              (0, r.jsx)(p.$, {
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
    tb = (e) => {
        let { setTab: t } = e,
            a = (0, d.bG)([L.A], () => L.A.getWindowOpen(z.MLl.DEVTOOLS_POPOUT));
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
                            children: (0, r.jsxs)(D.B, {
                                gap: 8,
                                children: [
                                    (0, r.jsx)(A.E, { variant: "text-md/semibold", children: "Not enough space?" }),
                                    (0, r.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        children: "You can pop out the DevTools to see the full layout.",
                                    }),
                                    (0, r.jsx)(p.$, {
                                        size: "sm",
                                        icon: T.t,
                                        variant: "secondary",
                                        onClick: R.openDevToolsPopout,
                                        text: "Popout DevTools",
                                    }),
                                ],
                            }),
                        }),
                    }),
            ],
        });
    },
    t_ = () => {
        let [e, t] = o.useState(() => {
            let e = O.A.lastOpenSubTabId;
            return null != e && e in tv ? tv[e] : 0;
        });
        return (
            o.useEffect(() => {
                null != O.A.lastOpenSubTabId && (0, w.Jt)({ lastOpenSubTabId: null });
            }, []),
            (0, r.jsxs)(c.Ip, {
                className: tg.iE,
                children: [
                    (0, r.jsxs)("div", {
                        className: tg.C$,
                        children: [
                            (0, r.jsx)(I.D, { variant: "heading-xxl/medium", children: "Collectibles DevTools" }),
                            0 !== e && (0, r.jsx)(p.$, { variant: "primary", onClick: () => t(0), text: "Back" }),
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
                                return (0, r.jsx)(tx, {});
                            default:
                                return (0, r.jsx)(tb, { setTab: t });
                        }
                    })(),
                ],
            })
        );
    };
var tj = a(681154),
    tf = a(306264),
    ty = a(506774),
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
var tD = a(409626),
    tT = a(692969),
    tI = a(760751),
    tw = a(403362),
    tO = a(435738),
    tR = a(99753),
    tL = a(975732),
    tM = a(352139),
    tP = a(808323),
    tU = a(583846),
    tB = a(424994),
    tG = a(330837);
function tF(e) {
    let { id: t } = e,
        a = (0, d.bG)([V.default], () => V.default.getUser(t));
    return null == a
        ? null
        : (0, r.jsx)(N.D, {
              className: tG._,
              onClick: function () {
                  (0, tL.openUserProfileModal)({ sourceAnalyticsLocations: [to.A.DEV_TOOLS], userId: t });
              },
              children: (0, r.jsx)(A.E, { variant: "text-md/semibold", children: a.username }),
          });
}
function tV() {
    let e = (0, d.bG)([tR.A], () => tR.A.getFeed(tB.X1.GLOBAL_FEED)),
        t = (0, d.bG)([tR.A], () => tR.A.getFilters()),
        a = (0, d.cf)([tM.A], () => {
            let t = {};
            for (let a of e?.entries ?? []) t[(0, tM.$)(a.content)] = tM.A.canRenderContent(a.content);
            return t;
        }, [e]),
        n = (0, d.bG)([tO.A], () => tO.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let l = e?.entries?.flatMap((e) => {
        let { content: l } = e;
        if (!(0, tP.l)(t, l)) return [];
        let s = a[(0, tM.$)(l)];
        return (0, r.jsxs)(
            "li",
            {
                className: tG.p,
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
            (0, r.jsx)(I.D, { variant: "heading-md/semibold", children: "Selected Content" }),
            null != l ? (0, r.jsx)("ul", { children: l }) : (0, r.jsx)("div", { children: "(none?)" }),
        ],
    });
}
var t$ = a(576470),
    tW = a(85451);
function tH() {
    let e = (0, d.bG)([tR.A], () => tR.A.getFeed(tB.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, d.cf)(
            [tR.A],
            () => tR.A.getFeedState(tB.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        n = (0, d.bG)([tR.A], () => tR.A.getLastFeedFetchDate(tB.X1.GLOBAL_FEED));
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
var tz = a(866839);
let tK = [
    {
        key: "type",
        cellClassName: S()(tz.Hn, tz.T$),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(A.E, { variant: "text-md/semibold", children: tj.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: S()(tz.Hn, tz.MX),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)("div", { children: (0, r.jsx)(A.E, { variant: "text-md/normal", children: t.length }) });
        },
    },
    {
        key: "only?",
        cellClassName: tz.Hn,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(tY, { type: t });
        },
    },
];
function tY(e) {
    let { type: t } = e,
        a = (0, d.bG)([tR.A], () => tR.A.getFilters()),
        n = a?.types?.has(t) ?? !1;
    return (0, r.jsx)(b.d, {
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
        a = (0, d.bG)([tR.A], () => tR.A.getFeed(tB.X1.GLOBAL_FEED)),
        n = (0, d.bG)([tR.A], () => tR.A.getDebugImpressionCappingDisabled()),
        l = (0, d.bG)([tO.A], () => tO.A.getDebugFastImpressionCappingEnabled()),
        s =
            ((e = a?.entries?.map((e) => e.content)),
            Object.keys((t = eL().groupBy(e, (e) => e.content_type))).map((e) => {
                let a = t[e];
                return { key: `${e}`, type: a[0].content_type, entries: a };
            })),
        i = (0, d.bG)([tR.A], () => tR.A.getFeedState(tB.X1.GLOBAL_FEED)?.loading === !0),
        [u, m] = o.useState(""),
        h = (0, d.bG)(
            [tI.A, tE.A],
            () => (parseInt(u) > 0 ? u : (tI.A.searchGamesByName(u)[0] ?? tE.A.getApplicationByName(u)?.id)),
            [u],
        ),
        x = (0, tT.A)({ applicationId: h, location: "DevToolsContentInventory", source: tD.Ob.DevTools }),
        v = Object.entries(ty.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        b = (0, tS.A)(v).filter(tw.Vq);
    return (0, r.jsx)("div", {
        className: tA.nd,
        children: (0, r.jsxs)(c.Ip, {
            className: tz.Qs,
            children: [
                (0, r.jsxs)(D.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(A.E, { variant: "text-md/semibold", children: "Inventory" }),
                        s.length > 0 && (0, r.jsx)(tk, { columns: tK, data: s }),
                        (0, r.jsx)(tH, {}),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                tC.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: tB.X1.GLOBAL_FEED,
                                    feature: tf.M.INBOX,
                                });
                            },
                            loading: i,
                        }),
                    ],
                }),
                (0, r.jsxs)(D.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(A.E, { variant: "text-md/semibold", children: "Impression Capping" }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tC.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tC.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: n ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tC.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, r.jsx)(p.$, {
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
                (0, r.jsxs)(D.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(A.E, { variant: "text-md/semibold", children: "Game Profile" }),
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
        a = (0, tT.A)({ applicationId: t.id, location: "DevToolsContentInventory", source: tD.Ob.DevTools });
    return (0, r.jsx)(N.D, {
        onClick: a,
        children: (0, r.jsx)(A.E, { variant: "text-xs/normal", color: "text-muted", children: t.name }),
    });
};
var tQ = a(696986),
    tZ = a(47167),
    tX = a(734057),
    t0 = a(994500),
    t1 = a(310031),
    t2 = a(394953),
    t8 = a(732421);
let t7 = [
        {
            key: "channelName",
            cellClassName: S()(t8.Hn, t8.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(A.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: S()(t8.Hn, t8.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(A.E, { variant: "text-md/normal", children: t });
            },
        },
    ],
    t4 = [
        {
            key: "channelName",
            cellClassName: S()(t8.Hn, t8.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(A.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: S()(t8.Hn, t8.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, r.jsx)(A.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: S()(t8.Hn, t8.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(A.E, { variant: "text-md/normal", children: t });
            },
        },
    ];
function t6() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, t2.U4)(),
        {
            isLoading: a,
            hasLoadedEver: n,
            hasPreloaded: l,
            hasMoreToLoad: s,
            isLoadingComplete: i,
        } = (0, tr.cf)([t1.A], () => ({
            isLoading: t1.A.isLoading,
            hasLoadedEver: t1.A.hasLoadedEver,
            hasPreloaded: t1.A.hasPreloaded,
            hasMoreToLoad: t1.A.hasMoreToLoad,
            isLoadingComplete: t1.A.isLoadingComplete,
        })),
        o = (0, tr.bG)([t1.A], () => t1.A.currentRequestAnalyticsPayload),
        d = (0, tr.cf)([t1.A], () => t1.A.getChannelInfoMap()),
        u = (0, tr.cf)([tX.A], () => {
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
        m = (0, tr.cf)([tX.A], () =>
            t.reduce((e, t) => {
                let a = tX.A.getChannel(t);
                return (e[t] = a ?? null), e;
            }, {}),
        ),
        h = (0, tr.bG)([t1.A], () => t1.A.getInboxMessages()),
        p = (0, tr.bG)([t1.A], () => t1.A.getDevOverrides().navOnClick);
    return (0, r.jsx)("div", {
        className: tA.nd,
        children: (0, r.jsxs)(c.Ip, {
            className: t8.Qs,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(I.D, { variant: "heading-lg/semibold", children: "Inbox" }),
                        (0, r.jsxs)("div", { children: ["Inbox Message Count: ", h.length] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(I.D, { variant: "heading-lg/semibold", children: "Dev Overrides" }),
                        (0, r.jsx)("div", {
                            style: { display: "flex", alignItems: "center", marginTop: 8 },
                            children: (0, r.jsx)(b.d, {
                                label: "Nav On Click",
                                checked: !!p,
                                onChange: (e) => {
                                    tC.h.dispatch({ type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES", navOnClick: e });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(I.D, { variant: "heading-lg/semibold", children: "Unreads and Badging" }),
                        (0, r.jsx)(tQ.h, { size: 8 }),
                        (0, r.jsxs)("div", { children: ["Unread Recent Mentions Count: ", e] }),
                        (0, r.jsxs)("div", { children: ["Unread Channel Count: ", t.length] }),
                        (0, r.jsx)(tk, {
                            columns: t7,
                            data: Object.entries(m).map((e) => {
                                let [t, a] = e;
                                return {
                                    key: t,
                                    channelId: t,
                                    channelName: null != a ? (0, tZ.m1)(a, V.default, t0.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(I.D, { variant: "heading-lg/semibold", children: "Store State" }),
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
                        (0, r.jsx)(I.D, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, r.jsxs)("div", { children: ["Total Channels: ", Object.keys(d).length] }),
                        (0, r.jsx)(tk, {
                            columns: t4,
                            data: Object.entries(d).map((e) => {
                                let t,
                                    [a, n] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = u[a]) ? (0, tZ.m1)(t, V.default, t0.A) : "",
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
    t3 = a(829219),
    t5 = a(988483);
let ae = function () {
    return (0, r.jsxs)("div", {
        className: t5.k,
        children: [
            (0, r.jsx)(A.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, r.jsx)(p.$, {
                onClick: () => {
                    (0, t3.Ov)(), (0, t9.pX)(z.BVt.QUEST_HOME);
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
var at = a(271866),
    aa = a(867099),
    an = a(147964),
    al = a(760716),
    as = a(99161),
    ai = a(115093),
    ar = a(11039);
let ao = window.GLOBAL_ENV.RELEASE_CHANNEL === ai.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function ad() {
    let e = (0, al.i)((e) => e.overrideApplicationId),
        t = (0, al.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        [n, l] = o.useState(ao),
        [s, i] = o.useState(z.FYj),
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
        m = (0, al.i)((e) => e.showSelfActivity),
        h = (0, al.i)((e) => e.setShowSelfActivity),
        x = (0, al.i)((e) => e.recommendationApplicationIds),
        v = (0, al.i)((e) => e.setRecommendationApplicationIds),
        _ = o.useCallback(
            (e) => {
                e ? v(s) : v(null);
            },
            [s, v],
        ),
        j = (0, d.bG)([an.A], () => null != an.A.testModeApplicationId),
        f = o.useCallback((e) => {
            e ? (0, ek.openModal)((e) => (0, r.jsx)(aa.A, { ...e })) : at.cL();
        }, []),
        y = (0, tT.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: n,
            source: tD.Ob.Embed,
            trackEntryPointImpression: !0,
        }),
        C = o.useCallback(
            (e) => {
                y?.(e);
            },
            [y],
        ),
        E = o.useCallback(() => {
            (0, as.openSocialLayerStorefrontAnnouncementModal)();
        }, []);
    return (0, r.jsx)("div", {
        className: S()(tA.nd, ar.n),
        children: (0, r.jsxs)("div", {
            className: ar.k,
            children: [
                (0, r.jsx)(g.k, { label: "Application ID", value: n, onChange: u }),
                (0, r.jsx)(I.D, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, r.jsx)(b.d, { label: "Override activity application ID", checked: a, onChange: c }),
                (0, r.jsx)(b.d, { label: "Show own voice activity (bypass self check)", checked: m, onChange: h }),
                (0, r.jsx)(b.d, { label: "Enable application test mode", checked: j, onChange: f }),
                (0, r.jsx)(p.$, { text: "Open Game Profile Modal", onClick: C }),
                (0, r.jsx)(p.$, { text: "Open Announcement Modal", onClick: E }),
                (0, r.jsx)(I.D, { variant: "heading-lg/normal", children: "Wishlists" }),
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
var ac = a(540999),
    au = a(865116);
a(670812), a(772958);
var am = a(58736);
a(558179), a(21574);
var ah = a(610920),
    ap = a(302031);
let ax = {
    base00: eD.A.colors.BACKGROUND_BASE_LOWER.css,
    base03: eD.A.colors.TEXT_FEEDBACK_WARNING.css,
    base07: eD.A.colors.TEXT_DEFAULT.css,
    base08: eD.A.colors.TEXT_MUTED.css,
    base09: eD.A.colors.TEXT_FEEDBACK_POSITIVE.css,
    base0B: eD.A.colors.TEXT_FEEDBACK_WARNING.css,
    base0D: eD.A.colors.TEXT_BRAND.css,
};
function ag(e) {
    let t = {};
    for (let [a, n] of Object.entries(e)) t[a] = n;
    return t;
}
let av = ag(ax),
    ab = ag(ax);
function a_(e) {
    return z.AKn.test(e) ? (0, r.jsx)(ap.Ay, { type: ap.Ay.Types.TEXT, children: () => e }) : e;
}
function aj(e) {
    let { data: t } = e,
        a = (0, J.Ay)();
    return (0, r.jsx)("div", {
        className: tA.H$,
        children: (0, r.jsx)(ah.d, {
            data: t,
            theme: "light" === a ? ab : av,
            invertTheme: !1,
            valueRenderer: a_,
            shouldExpandNode: () => !0,
        }),
    });
}
var af = a(761929),
    ay = a(23599);
function aC(e) {
    let { resizableNode: t, minHeight: a, onResize: n } = e,
        l = (0, af.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: n,
            orientation: af.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, r.jsx)("div", { onPointerDown: l, className: ay.Di });
}
function aE(e) {
    let { children: t, className: a, initialHeight: n, minHeight: l } = e,
        s = o.useRef(null),
        [i, d] = o.useState(n);
    return (0, r.jsxs)("div", {
        ref: s,
        className: ay.kL,
        style: { minHeight: l, height: i },
        children: [
            (0, r.jsx)(aC, { resizableNode: s, minHeight: l, onResize: d }),
            (0, r.jsx)("div", { className: S()(ay.KZ, a), children: t }),
        ],
    });
}
var aS = a(231643);
a(895017), aS.fu.NONE, aS.fu.NONE;
var aN = a(824552),
    aA = a(688810),
    ak = a(975460),
    aD = a(46225),
    aT = a(487431),
    aI = a(328153),
    aw = a(905552),
    aO = a(546183),
    aR = a(134861),
    aL = a(71393),
    aM = a(967198),
    aP = a(157257),
    aU = a(942370),
    aB = a(985018),
    aG = a(311350),
    aF = a(325126);
function aV() {
    var e;
    let t,
        a,
        n = o.useRef(null),
        { analyticsLocations: l } = (0, aA.Ay)(to.A.DEV_TOOLS),
        [s, i] = o.useState(""),
        c = (0, d.bG)([aM.A], () => aM.A.getGuildId()),
        u = (0, d.bG)([aL.A], () => aL.A.getGuild(c)),
        m = u?.gameApplicationIds ?? [],
        h = (0, tS.A)(m).filter((e) => null != e),
        x = (0, d.bG)([aI.Ay, aP.A], () => (0, aw.A)(aI.Ay, aP.A)),
        b = (0, tS.h)(s),
        _ = (0, ak.g)(b),
        j = (0, d.yK)(
            [tE.A],
            () => b?.linkedGames?.map((e) => tE.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        f = (0, aD.RD)(b, { allowedFlows: [aU._.RPC], debug: !0 }),
        y = (0, aD.RD)(b, { allowedFlows: [aU._.WEB], debug: !0 }),
        C = (0, d.bG)([aR.A], () => null != _ && aR.A.isConnected(_.id)),
        E = (0, aD.RD)(b, { debug: !0 }),
        { canDeauthorize: N, deauthorize: k } =
            ((e = E.connectionApp?.id),
            (t = (0, d.bG)([aO.default], () => aO.default.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && aN.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: n,
        className: S()(tA.nd, aF.nd),
        children: [
            (0, r.jsxs)("div", {
                className: aF.kL,
                children: [
                    (0, r.jsx)(I.D, { variant: "heading-lg/normal", children: "Guild Official Games" }),
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
                                      : (0, r.jsx)(A.E, { variant: "text-md/normal", children: "No official games" }),
                              ],
                          })
                        : (0, r.jsx)(A.E, { variant: "text-md/normal", children: "No guild selected" }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: aF.kL,
                children: [
                    (0, r.jsx)(I.D, { variant: "heading-lg/normal", children: "Application" }),
                    (0, r.jsx)(g.k, { label: "Application ID", value: s, onChange: i }),
                    null != x && null != x.id
                        ? (0, r.jsx)(p.$, {
                              onClick: () => i(x.id),
                              variant: "primary",
                              text: `Use detected game: ${x.name} (${x.id})`,
                          })
                        : null,
                    (0, r.jsxs)(A.E, {
                        variant: "text-md/normal",
                        children: ["Application Name: ", null != b ? b.name : "N/A"],
                    }),
                    (0, r.jsxs)(A.E, {
                        variant: "text-md/normal",
                        children: [
                            "Linked Games:",
                            " ",
                            j.length > 0
                                ? j.map((e) => ((0, ak.t)(b)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                : "N/A",
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(v.c, {}),
            (0, r.jsxs)("div", {
                className: aF.kL,
                children: [
                    (0, r.jsx)(I.D, { variant: "heading-lg/normal", children: "Authorization" }),
                    (0, r.jsx)(aT.VT, {
                        overallStatus: f.debug.isSubscribedToAuthorizeRequest
                            ? aT.nW.OVERALL_GOOD
                            : C
                              ? aT.nW.WARN
                              : aT.nW.OVERALL_BAD,
                        name: aB.intl.string(aG.default.AGLx00),
                        steps: [
                            {
                                status: C ? aT.nW.GOOD : aT.nW.BAD,
                                text: aB.intl.string(aG.default.kxF9br),
                                description: C ? null : aB.intl.string(aG.default.PFxxJa),
                                learnMoreLink: C
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: f.debug.isSubscribedToAuthorizeRequest
                                    ? aT.nW.GOOD
                                    : C
                                      ? aT.nW.WARN
                                      : aT.nW.BAD,
                                text: aB.intl.string(aG.default.S94dzs),
                                description:
                                    f.debug.isSubscribedToAuthorizeRequest || !C
                                        ? null
                                        : aB.intl.string(aG.default.aTULMB),
                                learnMoreLink:
                                    f.debug.isSubscribedToAuthorizeRequest || !C
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: E.chosenFlow === aU._.RPC,
                    }),
                    (0, r.jsx)(aT.VT, {
                        overallStatus: y.debug.hasConnectionEntrypointUrl ? aT.nW.OVERALL_GOOD : aT.nW.OVERALL_BAD,
                        name: aB.intl.string(aG.default.K3ObrU),
                        steps: [
                            {
                                status: y.debug.hasConnectionEntrypointUrl ? aT.nW.GOOD : aT.nW.BAD,
                                text: aB.intl.string(aG.default["8a7IrV"]),
                                description: y.debug.hasConnectionEntrypointUrl
                                    ? aB.intl.formatToPlainString(aG.default["9iLeL2"], {
                                          url: y.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: E.chosenFlow === aU._.WEB,
                    }),
                    (0, r.jsx)(aT.Sy, {
                        status: E.hasAlreadyLinked ? aT.nW.OVERALL_GOOD : aT.nW.OVERALL_BAD,
                        text: aB.intl.string(aB.t["Vu/zmQ"]),
                    }),
                    0 === E.debug.validFlows.length &&
                        (0, r.jsx)(A.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: aB.intl.string(aG.default.eg0mNa),
                        }),
                    (0, r.jsx)(p.$, {
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
                    (0, r.jsx)(p.$, {
                        disabled: !f.canStartAuthorization,
                        onClick: () => f.startAuthorization({ analyticsLocations: l }),
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, r.jsx)(p.$, {
                        disabled: !y.canStartAuthorization,
                        onClick: () => y.startAuthorization({ analyticsLocations: l }),
                        variant: "secondary",
                        text: "Start Web Authorization",
                    }),
                    (0, r.jsx)(p.$, { disabled: !N, onClick: k, variant: "critical-primary", text: "Deauthorize" }),
                ],
            }),
            b?.applicationAccountLinkBenefitConfig != null &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(v.c, {}),
                        (0, r.jsxs)("div", {
                            className: aF.kL,
                            children: [
                                (0, r.jsx)(I.D, { variant: "heading-lg/normal", children: "Reward Configuration" }),
                                (0, r.jsx)("div", {
                                    className: aF.Nr,
                                    children: (0, r.jsxs)("div", {
                                        className: aF.Tc,
                                        children: [
                                            null != b.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, r.jsx)("img", {
                                                    src: b.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: aF.L8,
                                                }),
                                            (0, r.jsx)(A.E, {
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
var a$ = a(427358),
    aW = a(465153);
let aH = [
    {
        key: "user",
        cellClassName: aW.iL,
        render(e) {
            let { user: t, key: a } = e;
            return t?.username ?? a;
        },
    },
    {
        key: "affinity",
        renderHeader: () => (0, r.jsx)(A.E, { variant: "text-sm/semibold", children: "COMMUNICATION AFFINITY" }),
        cellClassName: aW.nz,
        render(e) {
            let { affinity: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "vcProbability",
        renderHeader: () => (0, r.jsx)(A.E, { variant: "text-sm/semibold", children: "VOICE AFFINITY" }),
        cellClassName: aW.nz,
        render(e) {
            let { vcProbability: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "isFriend",
        renderHeader: () => (0, r.jsx)(A.E, { variant: "text-sm/semibold", children: "IS FRIEND" }),
        cellClassName: aW.nz,
        render(e) {
            let { isFriend: t } = e;
            return t.toString();
        },
    },
];
function az() {
    let e = (0, d.yK)([a$.A, V.default], () =>
        a$.A.getUserAffinities().map((e) => {
            let { otherUserId: t, communicationProbability: a, vcProbability: n, isFriend: l } = e;
            return { user: V.default.getUser(t), affinity: a, vcProbability: n, isFriend: l, key: t };
        }),
    );
    return 0 === e.length ? null : (0, r.jsx)(tk, { className: tA.nd, columns: aH, rowClassName: aW.nM, data: e });
}
var aK = a(139716),
    aY = a(847599),
    aq = a(282621);
function aJ() {
    return (0, r.jsx)("div", {
        className: S()(tA.nd, aq.k),
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(I.D, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                (0, r.jsx)(v.c, { gap: 16 }),
                (0, r.jsxs)("div", {
                    className: aq.h,
                    children: [
                        (0, r.jsx)(p.$, {
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
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Modal",
                            onClick: () =>
                                aK.A.showAgeVerificationGetStartedModal({ entryPoint: aY.q1.DEV_TOOLS_QUICK_ACTIONS }),
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var aQ = a(989349),
    aZ = a.n(aQ),
    aX = a(862482),
    a0 = a(624479),
    a1 = a(555704),
    a2 = a(285796),
    a8 = a(241326),
    a7 = a(892547),
    a4 = a(297413),
    a6 = a(379078),
    a9 = a(704554),
    a3 = a(957565),
    a5 = a(58703),
    ne = a(80703),
    nt = a(495544);
let na = 0,
    nn = [],
    nl = 0,
    ns = [],
    ni = !1;
class nr extends d.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(nt.default, ac.A);
    }
    get loggedEvents() {
        return nn;
    }
    get loggedEventsVersion() {
        return nl;
    }
    get loggedTriggers() {
        return ns;
    }
    get trackTriggers() {
        return ni;
    }
}
let no = new nr(tC.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        ac.A.isDeveloper &&
            (nn.push({
                key: (na++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, ne.d)(n) : nt.default.getId(),
                timestamp: new Date(),
            }),
            nl++,
            nn.length > 500 && (nn = nn.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: l, location: s, previouslyTracked: i } = e;
        !ac.A.isDeveloper ||
            (ni &&
                (ns = [
                    ...ns,
                    {
                        key: (0, ep.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: n,
                        excluded: l,
                        location: s,
                        previouslyTracked: i,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                ns.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        ni = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (nn = []), nl++, (ns = []);
    },
});
var nd = a(658675);
function nc(e) {
    let { className: t, children: a } = e;
    return (0, r.jsx)("dl", { className: S()(tA.qo, t), children: a });
}
let nu = (e) => {
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
                                  onClick: () => (0, a3.C)(n, () => s(!0)),
                                  children: l
                                      ? (0, r.jsx)(e0.U, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(a0.T, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
};
function nm(e) {
    let { value: t } = e;
    return (0, r.jsx)(nd.P, { checked: t });
}
var nh = a(733657);
let np = [
    {
        key: "event",
        cellClassName: nh.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "location",
        cellClassName: nh.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function nx(e) {
    let { children: t } = e;
    return (0, r.jsx)(c.Ip, { className: nh._D, children: (0, r.jsx)("dl", { children: t }) });
}
function ng(e) {
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
            className: nh.fY,
            children: [
                (0, r.jsx)("dt", { className: nh.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(N.D, {
                    tag: "span",
                    className: nh.nH,
                    onClick: () => (0, a3.C)(JSON.stringify(n), () => s(!0)),
                    children: l
                        ? (0, r.jsx)(e0.U, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(a0.T, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let nv = new Set(["client_performance_cpu", "client_performance_memory"]),
    nb = [
        {
            id: "details",
            name: "Details",
            group: aS.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: n, fingerprint: l },
                        onClose: s,
                        filteredEvents: i,
                    } = e,
                    o = V.default.getUser(l),
                    d = aZ()(n);
                return (0, r.jsxs)("div", {
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(am.Ay, {
                            className: S()(tA.jr, nh.nZ),
                            children: [
                                (0, r.jsx)(am.Ay.Icon, { icon: a1.U, tooltip: t }),
                                (0, r.jsxs)(am.Ay.Title, {
                                    wrapperClassName: nh.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(N.D, {
                                            tag: "span",
                                            className: nh.KE,
                                            onClick: () => (0, a3.C)(t),
                                            children: (0, r.jsx)(a0.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(am.Ay.Icon, {
                                    icon: a0.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, a3.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: n, fingerprint: l, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(am.Ay.Icon, { icon: a2.a, tooltip: "Close", onClick: s }),
                            ],
                        }),
                        (0, r.jsxs)(nc, {
                            className: nh.ZK,
                            children: [
                                (0, r.jsx)(nu, {
                                    name: "Timestamp (local)",
                                    copyValue: n.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: n.toISOString(),
                                        title: (0, a5.i$)(d, "LLLL"),
                                        children: ["(", aZ().locale(), ") ", (0, a5.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nu, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(a4.A, { user: o }),
                                    }),
                                (0, r.jsx)(nu, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(nx, {
                            children: Object.entries(a).map((e) => {
                                let [a, n] = e,
                                    l = nv.has(a)
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
                                                ng,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: n || null },
                                                    children:
                                                        null != n
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(n) })
                                                            : (0, r.jsx)("code", {
                                                                  className: nh.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, r.jsx)(
                                                    ng,
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
    n_ = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(n_)
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
    nj = {
        searchType: a6.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function nf() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (0, d.bG)([no], () => no.loggedEventsVersion),
        [l, s] = o.useState(() => Object.keys(n_)),
        [i, c] = o.useState(no.loggedEvents),
        u = o.useCallback((e) => {
            c(e);
        }, []);
    (0, a9.RT)(t, no.loggedEvents, u, nj, [n]);
    let m = i.filter((e) => {
            for (let t of l) if (n_[t].filter(e)) return !0;
            return !1;
        }),
        [h, p] = o.useState(void 0),
        x = m.find((e) => e.key === h),
        { TabBar: g, renderSelectedTab: v } = (0, aS.Ay)({ tabs: nb }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: S()(tA.nd, nh.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nh.rh,
                children: [
                    (0, r.jsx)(aX.$n, {
                        className: nh.Q$,
                        look: aX.$n.Looks.BLANK,
                        size: aX.$n.Sizes.ICON,
                        onClick: w.eY,
                        children: (0, r.jsx)("span", {
                            title: aB.intl.string(aB.t.VkKicb),
                            children: (0, r.jsx)(a8.u, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": aB.intl.string(aB.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: nh.Bi }),
                    (0, r.jsx)("div", {
                        className: nh.uW,
                        children: Object.entries(n_).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                N.D,
                                {
                                    className: S()(nh.pb, l.includes(t) && nh.bx),
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
                className: nh.rh,
                children: (0, r.jsx)(a7.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(tk, { columns: np, data: m, selectedRowKey: h, onClickRow: (e) => p(e.key) }),
            null != x &&
                (0, r.jsxs)(aE, {
                    className: nh.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(g, {}), v({ loggedEvent: x, onClose: () => p(void 0), filteredEvents: m })],
                }),
        ],
    });
}
var ny = a(382483),
    nC = a(385113),
    nE = a(315117);
function nS(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)(D.B, {
        gap: 8,
        padding: 8,
        className: nE.lt,
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
                          D.B,
                          {
                              gap: 4,
                              padding: 4,
                              className: nE.YL,
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
function nN(e) {
    let { config: t, isSelected: a, onSelect: n } = e;
    return (0, r.jsxs)(D.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? nE.FM : nE.gt,
        children: [
            (0, r.jsx)(N.D, {
                className: nE.Av,
                onClick: n,
                children: (0, r.jsxs)(D.B, {
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
            (0, r.jsx)(p.$, {
                variant: "secondary",
                size: "sm",
                text: "Refetch",
                onClick: () => (0, ny.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function nA() {
    let e = (0, d.bG)([nC.A], () => nC.A.getFeaturedFetchState());
    return (0, r.jsxs)(D.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(D.B, {
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
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, ny.Wq)({ force: !0 }),
            }),
        ],
    });
}
function nk() {
    let e = (0, d.bG)([nC.A], () => nC.A.getDeveloperFetchState());
    return (0, r.jsxs)(D.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(D.B, {
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
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, ny.i$)({ force: !0 }),
            }),
        ],
    });
}
function nD() {
    let [e, t] = o.useState(""),
        a = (0, d.bG)([nC.A], () => (e.length > 0 ? nC.A.getFetchState(e) : null)),
        n = (0, d.bG)([nC.A], () => (e.length > 0 ? nC.A.getConfigs(e) : null));
    return (0, r.jsxs)(D.B, {
        gap: 8,
        children: [
            (0, r.jsx)(A.E, { variant: "text-md/semibold", color: "text-strong", children: "Fetch by Application ID" }),
            (0, r.jsx)(g.k, { placeholder: "Application ID", value: e, onChange: (e) => t(e) }),
            (0, r.jsx)(p.$, {
                variant: "primary",
                size: "sm",
                text: "Fetch",
                disabled: 0 === e.length,
                onClick: () => (0, ny.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(A.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != n &&
                n.length > 0 &&
                (0, r.jsx)(D.B, { gap: 4, children: n.map((e) => (0, r.jsx)(nS, { config: e }, e.config_id)) }),
        ],
    });
}
function nT(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: n } = e,
        l = (0, d.bG)([nC.A], () => nC.A.getFeaturedFetchState());
    return (0, r.jsxs)(D.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(A.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            l === nC.e.FETCHING &&
                (0, r.jsx)(A.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    nN,
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
            (0, r.jsxs)(D.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(A.E, { variant: "text-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(nS, { config: t }),
                ],
            }),
        ],
    });
}
function nw() {
    let [e, t] = o.useState(null),
        a = Object.values((0, d.bG)([nC.A], () => nC.A.getAllConfigsByApplication())).flat(),
        n = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(c.Ar, {
        children: (0, r.jsxs)(D.B, {
            gap: 16,
            padding: 8,
            className: nE.zr,
            children: [
                (0, r.jsx)(I.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(nA, {}),
                (0, r.jsx)(v.c, {}),
                (0, r.jsx)(nk, {}),
                (0, r.jsx)(v.c, {}),
                (0, r.jsx)(nD, {}),
                (0, r.jsx)(v.c, {}),
                (0, r.jsx)(nT, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != n && (0, r.jsx)(nI, { config: n }),
            ],
        }),
    });
}
var nO = a(636537),
    nR = a(153488),
    nL = a(927813);
let nM = 12 * nL.A.Millis.HOUR,
    nP = new Map(),
    nU = !1,
    nB = Object.freeze({ channelAffinities: [], lastFetched: 0 }),
    nG = { ...nB };
function nF() {
    nP = new Map(nG.channelAffinities.map((e) => [e.channelId, e]));
}
class nV extends d.Ay.PersistedStore {
    static displayName = "ChannelAffinitiesV2Store";
    static persistKey = "ChannelAffinitiesStoreV2";
    initialize(e) {
        null != e && ((nG.channelAffinities = e.channelAffinities), (nG.lastFetched = e.lastFetched), nF());
    }
    shouldFetch() {
        if (!nU) return Date.now() - nG.lastFetched > nM;
    }
    isFetching() {
        return nU;
    }
    getChannelAffinities() {
        return nG.channelAffinities;
    }
    getChannelAffinitiesMap() {
        return nP;
    }
    getChannelAffinity(e) {
        return nP.get(e);
    }
    compare(e, t) {
        return (nP.get(t)?.score ?? 0) - (nP.get(e)?.score ?? 0);
    }
    getState() {
        return nG;
    }
}
let n$ = new nV(tC.h, {
    LOAD_CHANNEL_AFFINITIES_V2: function () {
        nU = !0;
    },
    LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineChannels: t } = e;
        (nG.lastFetched = Date.now()), (nU = !1), (nG.channelAffinities = t), nF();
    },
    LOAD_CHANNEL_AFFINITIES_V2_FAILURE: function () {
        nU = !1;
    },
    LOGOUT: function () {
        (nG = { ...nB }), (nP = new Map()), (nU = !1);
    },
});
var nW = a(907360);
let nH = [
    {
        key: "channel",
        cellClassName: nW._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(A.E, { variant: "text-sm/semibold", children: "SCORE" }),
        cellClassName: nW.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function nz() {
    o.useEffect(() => {
        !(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            n$.shouldFetch() && nR.A.hasConsented(z.YAq.PERSONALIZATION)
                ? (tC.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" }),
                  nO.Bo.get({
                      url: z.Rsh.CHANNEL_AFFINITIES_V2,
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
    let e = (0, d.yK)([n$, tX.A], () =>
        n$
            .getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: tX.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(tk, { className: tA.nd, columns: nH, rowClassName: nW.nM, data: e });
}
function nK() {
    return (0, r.jsxs)(A.E, {
        variant: "text-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var nY = a(554146),
    nq = a(105565),
    nJ = a(771781),
    nQ = a(193337);
let nZ = (e) => {
        switch (e) {
            case nq.r.DC_DISMISSED:
                return "DISMISS:";
            case nq.r.DC_SHOWN:
                return "SHOW:";
            case nq.r.DC_SHOW_REQUEST:
                return "REQUEST TO SHOW:";
            default:
                return "UNKNOWN TYPE:";
        }
    },
    nX = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${nY.M[a]}`;
            },
        },
    ],
    n0 = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${nY.M[t]}`;
            },
        },
    ];
function n1() {
    let e = (0, d.bG)([nq.A], () => nq.A.getDCFEvents()),
        t = (0, nJ.Ay)((e) => e.candidates),
        a = (0, nJ.Ay)((e) => e.lastWinnerTime),
        n = 0 !== a ? aZ()(a).fromNow() : "n/a",
        l = (0, nJ.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        s = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: nZ(t) + a.toString(), event: nZ(t), dismissibleContent: a };
        }),
        i = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: nQ.KE,
        children: [
            (0, r.jsxs)("div", { className: nQ.pq, children: ["Last winner time: ", n] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: nQ.pq, children: ["Last winner: ", null != l ? nY.M[l] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: nQ.uI,
                children: (0, r.jsx)(tk, { className: nQ.Th, columns: n0, data: i }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(tk, { columns: nX, data: s }),
        ],
    });
}
var n2 = a(689175),
    n8 = a(541689),
    n7 = a(199773);
function n4() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(n6());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        a.unshift(e), ty.w.set("RecentDismissibleOverrides", a);
    }, []);
    return [n6(), e];
}
function n6() {
    return ty.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var n9 = a(662546),
    n3 = a(643278),
    n5 = a(617617),
    le = a(256787),
    lt = a(20439);
let la = o.memo(function (e) {
    let { className: t, content: a, onChange: n } = e,
        l = nY.M[a],
        { isDismissed: s, handleToggleDismissState: i } = (0, lt.A)(l),
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
            (0, r.jsxs)(D.B, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, r.jsx)(eS.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: d ? n9.O : n3.s,
                        onClick: m,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(b.d, {
                        label: `${a.toLowerCase()} (${nY.M[a]})`,
                        description: (0, le.Zm)(l)
                            ? (function (e) {
                                  let t = n5.A.settings.userContent?.recurringDismissibleContentStates?.[e];
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
function ln(e) {
    let { items: t, onChange: a } = e,
        [n, l] = n4(),
        s = (0, o.useCallback)(
            (e) => {
                l(e), a?.(e);
            },
            [l, a],
        );
    return (0, r.jsx)(D.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(la, { content: e, onChange: s }, e)),
    });
}
function ll(e) {
    let { searchQuery: t = "" } = e,
        a = (0, nJ.Ay)((e) => e.recentlyShown),
        [n, l] = n4(),
        s = n
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(nY.M[e]))
            .slice(0, 3);
    return 0 === s.length
        ? null
        : (0, r.jsx)(m.n, { label: "Recent Overrides", children: (0, r.jsx)(ln, { items: s }) });
}
function ls(e) {
    let { searchQuery: t = "" } = e,
        a = (0, nJ.Ay)((e) => e.recentlyShown)
            .map((e) => nY.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(m.n, { label: "Recently Shown", children: (0, r.jsx)(ln, { items: a }) });
}
var li = a(594061),
    lr = a(268571);
function lo() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
        } = (0, d.cf)([n7.A], () => ({
            dailyCapReached: n7.A.hasUserHitDCCap(),
            dailyCapOverridden: n7.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: n7.A.newUserMinAgeRequiredOverridden,
        })),
        [n, l] = o.useState(""),
        [s, i] = o.useState(20),
        c = o.useMemo(
            () =>
                Object.keys(nY.M)
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
    return (0, r.jsx)(n2.Ch, {
        onScroll: u,
        children: (0, r.jsxs)("div", {
            className: lr.KE,
            children: [
                (0, r.jsxs)(m.n, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, r.jsxs)(D.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, n8.Ab)(),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, li.nT)(),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, li.D1)(),
                                }),
                                (0, r.jsx)(A.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: `Daily Cap Reached: ${e ? "Yes" : "No"}`,
                                }),
                            ],
                        }),
                        (0, r.jsx)(b.d, {
                            label: "Override Dismissible Content Daily Cap",
                            checked: t,
                            onChange: n8.SE,
                        }),
                        (0, r.jsx)(b.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: n8.U$,
                        }),
                    ],
                }),
                (0, r.jsx)(ls, {}),
                (0, r.jsx)(ll, {}),
                (0, r.jsxs)(m.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(a7.I, { query: n, onChange: l, onClear: () => l("") }),
                        (0, r.jsx)(ln, { items: c.slice(0, s) }),
                    ],
                }),
            ],
        }),
    });
}
var ld = a(53705),
    lc = a(154323),
    lu = a(155248);
function lm() {
    let e = (0, d.bG)([lc.A], () => lc.A.allWithDescriptions(), [], d.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, n] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                b.d,
                                { label: n, description: t, checked: a, onChange: (e) => (0, ld.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(v.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: lu.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: lu.x6,
                children: (0, r.jsx)(p.$, { variant: "primary", text: "Clear all", onClick: ld.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: lu.vu, children: t }),
        ],
    });
}
var lh = a(691540),
    lp = a(97483),
    lx = a(783878),
    lg = a(123292),
    lv = a(780907),
    lb = a(56562),
    l_ = a(137177),
    lj = a(569926);
let lf = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
];
function ly(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: n } = (0, lj.I)(t.id);
    return (0, r.jsxs)(D.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != n && (0, r.jsx)(l_.A, { game: n }),
            (0, r.jsxs)(D.B, {
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
function lC() {
    let e = (0, d.bG)([aI.Ay], () => aI.Ay.getRunningGames()),
        t = (0, d.bG)([aI.Ay], () => aI.Ay.getDebugRunningGame()),
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
            if (null == e || "" === e) return void (0, lv.xt)(null);
            let t = tI.A.getDetectableGame(e),
                a = t?.executables[0],
                n = t?.thirdPartySkus[0]?.distributor;
            if (null == t || null == a)
                return (0, lh.P0)({
                    id: "devtools-set-debug-game-error",
                    type: lp.Ck.FAILURE,
                    message: "Invalid Game ID",
                });
            (0, lv.xt)({
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
                fullscreenType: lb.aI.UNKNOWN,
                cmdLine: "",
                nativeProcessObserverId: -1,
            });
        };
    return (0, r.jsxs)(D.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(D.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(I.D, { variant: "heading-md/bold", children: "Running Games" }),
                    e.length > 0 &&
                        (0, r.jsx)("div", {
                            children: e.map((e) =>
                                (0, r.jsx)(ly, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, r.jsx)(v.c, {}),
            (0, r.jsxs)(D.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(I.D, { variant: "heading-md/bold", children: "Set Debug Running Game" }),
                    (0, r.jsx)(g.k, { label: "Custom Game ID", value: a, onChange: n }),
                    (0, r.jsx)(lx.Z, {
                        label: "Pick a Preset Game",
                        options: l,
                        value: t?.id ?? "",
                        onSelectionChange: (e) => {
                            s(e);
                        },
                        selectionMode: "single",
                        clearable: !0,
                    }),
                    (0, r.jsxs)(D.B, {
                        direction: "horizontal",
                        gap: 16,
                        justify: "end",
                        align: "end",
                        children: [
                            null != t &&
                                (0, r.jsx)(lg.Q, { variant: "secondary", text: "Clear", onClick: () => s(null) }),
                            (0, r.jsx)(p.$, { variant: "primary", text: "Detect Game", onClick: () => s(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lE = a(240248),
    lS = a(769195);
function lN() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            try {
                t(!0), n(null), s(null);
                let e = await nO.Bo.put({
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
    return (0, r.jsxs)(D.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(p.$, { variant: "primary", onClick: i, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, lE.uJ)(a) && (0, r.jsx)(A.E, { variant: "text-md/normal", color: "status-positive", children: a }),
            !(0, lE.uJ)(l) && (0, r.jsx)(A.E, { variant: "text-md/normal", color: "status-danger", children: l }),
        ],
    });
}
function lA() {
    return (0, r.jsx)("div", {
        className: lS.n,
        children: (0, r.jsx)(D.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(lN, {}) }),
    });
}
a(172879);
var lk = a(985623),
    lD = a.n(lk),
    lT = a(990078),
    lI = a(874804),
    lw = a(782134),
    lO = a(113494),
    lR = a(603349),
    lL = a(155466);
function lM(e) {
    return parseFloat(e.toFixed(3));
}
let lP = [
    {
        key: "store",
        cellClassName: lL.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: lL.i7,
        render(e) {
            let { trace: t } = e;
            return `${lM(t.time)} ms`;
        },
    },
];
function lU(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(c.Ip, { children: (0, r.jsx)(tk, { columns: lP, data: a }) });
}
let lB = [
    {
        id: "action",
        name: "Action",
        group: aS.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = aZ()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(nc, {
                        className: lL.mP,
                        children: [
                            (0, r.jsx)(nu, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, a5.i$)(a, "LLLL"),
                                    children: (0, a5.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(nu, { name: "Total Time", children: [lM(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(c.Ip, { className: lL.Dx, children: (0, r.jsx)(aj, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: aS.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsx)(lU, { actionLog: t });
        },
    },
];
function lG(e) {
    let { actionLog: t, initialHeight: a } = e,
        n = o.useMemo(
            () =>
                t.error
                    ? [
                          ...lB,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(lR.A, { className: lL.ik }), "Error"],
                              }),
                              group: aS.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: S()(lL.u4, tA.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: tA.R5,
                                                  children: (0, r.jsx)(aX.$n, {
                                                      className: tA.Q$,
                                                      size: aX.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(c.Ip, {
                                              className: lL.Dx,
                                              children: (0, r.jsx)(aj, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : lB,
            [t],
        ),
        { TabBar: l, renderSelectedTab: s } = (0, aS.Ay)({ tabs: n }, [n]);
    return (0, r.jsxs)(aE, {
        className: lL.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(am.Ay, {
                className: S()(tA.jr, lL.nZ),
                children: [
                    (0, r.jsx)(am.Ay.Icon, { icon: lI.K, tooltip: t.name }),
                    (0, r.jsx)(am.Ay.Title, {
                        wrapperClassName: S()(tA.qd, tA.ZE),
                        className: tA.Pz,
                        children: t.name,
                    }),
                    (0, r.jsx)(am.Ay.Icon, {
                        icon: a0.T,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var n;
                                    return (t[a] = ((n = e[a]), z.AKn.test(n) ? "REDACTED" : n)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, a3.C)(a, () =>
                                (0, lh.P0)({
                                    id: "copy-action-log-name",
                                    type: lp.Ck.SUCCESS,
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
let lF = [
        {
            key: "action",
            cellClassName: lL.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(lR.A, { className: lL.ik }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: lL.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${lM(t.totalTime)} ms`;
            },
        },
        {
            key: "timestamp",
            cellClassName: lL.i7,
            render(e) {
                let { actionLog: t } = e;
                return aZ()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    lV = {
        searchType: a6.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function l$() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = lD()(() => {
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
        [h, p] = o.useState(),
        x = o.useCallback((e) => {
            c(e);
        }, []);
    (0, a9.RT)(t, u ? s : l, x, lV);
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
        className: S()(tA.nd, lL.nd),
        children: [
            (0, r.jsxs)("div", {
                className: lL.KE,
                children: [
                    (0, r.jsx)(lT.m, {
                        text: _,
                        children: (0, r.jsx)(eS.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? lw.u : lO.E,
                            "aria-label": _,
                            onClick: () => g(!u),
                        }),
                    }),
                    (0, r.jsx)(a7.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(tk, {
                columns: lF,
                data: b,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => p(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(lG, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var lW = a(936388),
    lH = a(132369);
function lz() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: S()(tA.nd, lH.n),
        children: (0, r.jsx)(p.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: lW.A.clearUploadedKeyVersions,
        }),
    });
}
var lK = a(825484),
    lY = a(37962),
    lq = a(881520),
    lJ = a(670455),
    lQ = a(861160);
let lZ = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function lX() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(0),
        [l, s] = o.useState(1e3),
        [i, c] = o.useState(0),
        u = (0, d.bG)([lq.A], () => (null === e ? null : (lq.A.getFeedbackConfig(lJ.MW[e]) ?? lY.u[lJ.MW[e]]))),
        h = Object.entries(lJ.MW),
        b = h.slice(h.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        _ = o.useMemo(() => null != e && i >= 0 && i <= 100 && a >= 0, [e, i, a]);
    return (0, r.jsx)("div", {
        className: lQ.kL,
        children: (0, r.jsxs)(D.B, {
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
                        (0, r.jsxs)(D.B, {
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
                                    options: lZ,
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
                (0, r.jsxs)(lK.e, {
                    children: [
                        (0, r.jsx)(p.$, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != u &&
                                    tC.h.dispatch({ type: "FEEDBACK_OVERRIDE_CLEAR", feedbackType: u.feedbackType })
                                ),
                            disabled: !_,
                        }),
                        (0, r.jsx)(p.$, {
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
                            disabled: !_,
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
var l0 = a(334279),
    l1 = a(663417),
    l2 = a(147925),
    l8 = a(557009),
    l7 = a(788868);
let l4 = async () =>
        (
            await nO.Bo.get({
                url: z.Rsh.ENTITLEMENTS_FOR_APPLICATION(l7.tv),
                oldFormErrors: !0,
                query: { exclude_consumed: !0, exclude_ended: !0 },
                rejectWithError: !0,
            })
        ).body.map((e) => l8.A.createFromServer(e)),
    l6 = async (e) => {
        await nO.Bo.post({
            url: "/debug/entitlements/fractional-premium",
            body: { count: 1, sku_id: e },
            rejectWithError: !1,
        });
    },
    l9 = async (e) => {
        let t = "/debug/entitlements/fractional-premium";
        null != e && (t = `${t}/${e}`), await nO.Bo.del({ url: t, rejectWithError: !0 });
    },
    l3 = async () => {
        await nO.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
    },
    l5 = () => {
        let [e, t] = o.useState([]),
            [a, n] = o.useState(!1),
            l = (0, o.useCallback)(async () => {
                try {
                    n(!0);
                    let e = await l4();
                    t(e);
                } finally {
                    n(!1);
                }
            }, []),
            s = (0, o.useCallback)(
                async (e) => {
                    await l6(e), await l();
                },
                [l],
            );
        return {
            grantFractionalPremium: s,
            deleteFractionalPremium: (0, o.useCallback)(
                async (e) => {
                    await l9(e), await l();
                },
                [l],
            ),
            triggerNextEntitlementFulfillment: (0, o.useCallback)(async () => {
                await l3(), await l();
            }, [l]),
            refreshEntitlementList: l,
            entitlements: e,
            loading: a,
        };
    };
var se = a(51846),
    st = a(214868);
let sa = {
        [z.GD.QUEST_REWARD]: "Quest Reward",
        [z.GD.DEVELOPER_GIFT]: "Developer Gift",
        [z.GD.INVOICE]: "Invoice",
        [z.GD.REVERSE_TRIAL]: "Reverse Trial",
        [z.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
        [z.GD.SUBSCRIPTION]: "Subscription",
        [z.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
    },
    sn = (e) => {
        let t,
            { entitlement: a, active: n, onDelete: l } = e,
            s = (e) => (null != e ? (0, a5.i$)(e, "LLL") : "---");
        return (0, r.jsxs)("div", {
            className: S()(se.Nr, n ? st.C1 : ""),
            children: [
                (0, r.jsxs)(A.E, { variant: "text-md/normal", children: ["ID: ", a.id, " "] }),
                !n &&
                    (0, r.jsxs)(A.E, {
                        variant: "text-md/normal",
                        children: ["SKU: ", sl.find((e) => e.value === a.skuId)?.label],
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
                        null != (t = a.sourceType) && t in sa ? sa[t] : `Unknown source type ${t}`,
                    ],
                }),
                n &&
                    null != l &&
                    (0, r.jsx)(aX.$n, {
                        className: se.RW,
                        size: aX.$n.Sizes.TINY,
                        color: aX.$n.Colors.RED,
                        look: aX.$n.Looks.OUTLINED,
                        onClick: l,
                        children: "Delete",
                    }),
            ],
        });
    },
    sl = [
        { id: "1h", label: "1 hour", value: l0.j.PREMIUM_TIER_2_1_HOUR },
        { id: "1d", label: "1 day", value: l0.j.PREMIUM_TIER_2_1_DAY },
        { id: "3d", label: "3 days", value: l0.j.PREMIUM_TIER_2_3_DAY },
    ];
function ss() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(l0.j.PREMIUM_TIER_2_1_HOUR),
        [l, s] = o.useState([]),
        [i, d] = o.useState([]),
        {
            refreshEntitlementList: u,
            grantFractionalPremium: m,
            deleteFractionalPremium: h,
            triggerNextEntitlementFulfillment: g,
            entitlements: v,
            loading: b,
        } = l5();
    return (
        o.useEffect(() => {
            u();
        }, [u]),
        o.useEffect(() => {
            s(v.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === z.zF_.FRACTIONAL_REDEMPTION)),
                d(v.filter((e) => Object.values(l0.j).includes(e.skuId) && null == e.startsAt));
        }, [v]),
        (0, r.jsx)(c.Ip, {
            className: tA.nd,
            children: (0, r.jsxs)("div", {
                className: st.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: st.dL,
                        children: [
                            (0, r.jsx)(A.E, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, r.jsxs)(N.D, {
                                onClick: () => t(!e),
                                className: se.As,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Info" }),
                                    }),
                                    (0, r.jsx)(l2.A, { direction: e ? l2.A.Directions.UP : l2.A.Directions.DOWN }),
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
                        className: S()([se.uW, st.Uo]),
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: sl,
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
                        className: se.uW,
                        children: [
                            (0, r.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: st.dL,
                                children: [
                                    (0, r.jsx)(A.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: se.GC,
                                        children: [
                                            (0, r.jsx)(aX.$n, {
                                                disabled: b,
                                                size: aX.$n.Sizes.TINY,
                                                color: aX.$n.Colors.PRIMARY,
                                                look: aX.$n.Looks.OUTLINED,
                                                onClick: () => g(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(aX.$n, {
                                                disabled: b,
                                                size: aX.$n.Sizes.TINY,
                                                color: aX.$n.Colors.RED,
                                                look: aX.$n.Looks.OUTLINED,
                                                onClick: () => h(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(aX.$n, {
                                                disabled: b,
                                                look: aX.$n.Looks.BLANK,
                                                size: aX.$n.Sizes.ICON,
                                                onClick: u,
                                                children: (0, r.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, r.jsx)(l1.f, { size: "xs", color: "currentColor" }),
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
                                                    sn,
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
                                            children: i.map((e) => (0, r.jsx)(sn, { entitlement: e }, e.id)),
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
var si = a(390544),
    sr = a(665171),
    so = a(522055),
    sd = a(661202);
function sc() {
    let e = (0, d.bG)([aM.A], () => aM.A.getGuildId()),
        t = (0, d.bG)([aL.A], () => aL.A.getGuild(e)?.name),
        a = (0, d.bG)([so.A], () => so.A.getStateForGuild(e)?.instances),
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
                Object.values(si.M).map((e) =>
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
                tC.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...n, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [n, e]);
    return null == e
        ? null
        : (0, r.jsxs)(c.Ip, {
              className: sd.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: sd.uW,
                      children: (0, r.jsx)(I.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: sd.uW,
                      children: [
                          (0, r.jsx)(A.E, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${n?.name}`,
                          }),
                          (0, r.jsx)("div", { className: sd.UD, children: s }),
                          (0, r.jsx)(A.E, { variant: "eyebrow", children: "Remove Server Info" }),
                          (0, r.jsx)("div", {
                              className: sd.UD,
                              children: (0, r.jsx)(p.$, {
                                  variant: "primary",
                                  text: "Remove IP Address & Game Server Panel URL",
                                  onClick: i,
                              }),
                          }),
                          (0, r.jsx)(A.E, { variant: "eyebrow", children: "Reset server" }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              text: "Reset",
                              onClick: () => {
                                  (0, sr.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
function su(e, t) {
    let a = "boolean" == typeof t ? t : !au.Ay.get(e);
    tC.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var sm = a(460281);
function sh(e) {
    let { devSettingsCategory: t } = e,
        a = (0, d.bG)([au.Ay], () => au.Ay.allByCategory(t), [t], d.My),
        n = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: n }] = e;
                    return (0, r.jsx)(b.d, { label: n, description: t, checked: a, onChange: (e) => su(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: S()(tA.nd, sm.n), children: n });
}
var sp = a(950305),
    sx = a(231483),
    sg = a(597770),
    sv = a(433492),
    sb = a(695458),
    s_ = a(796140),
    sj = a(268791),
    sf = a(836480),
    sy = a(855473),
    sC = a(626258),
    sE = a(420854),
    sS = a(373846),
    sN = a(657044),
    sA = a(141060),
    sk = a(608599),
    sD = a(685761),
    sT = a(157225),
    sI = a(362704),
    sw = a(625903),
    sO = a(628284),
    sR = a(320448),
    sL = a(110259),
    sM = a(830215),
    sP = a(381689),
    sU = a(889227),
    sB = a(499785),
    sG = a(315069);
class sF extends sG.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids);
    }
    static fromServer(e) {
        return new sF(e);
    }
    setPassword(e) {
        return (this.password = e), this;
    }
}
let sV = { pools: null, users: null };
function s$(e) {
    null == sV.users && (sV.users = new Map()), sV.users.set(e.id, new sU.A(e));
}
class sW extends d.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (sV.pools = new Map(Object.entries(e.pools))),
            null != e.users && (sV.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != sV.pools ? Object.fromEntries(sV.pools) : null,
            users: null != sV.users ? Object.fromEntries(sV.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(sV.users?.values() ?? []).filter((t) => sV.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return sV.pools?.get(e) ?? null;
    }
    getUser(e) {
        return sV.users?.get(e) ?? null;
    }
    getPools() {
        return null === sV.pools ? null : Array.from(sV.pools.values());
    }
}
let sH = new sW(tC.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        null == sV.pools && (sV.pools = new Map()), sV.pools.set(t.id, t), a.forEach(s$);
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = sV.pools?.get(t);
        if (null == a) return !1;
        a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                sV.users?.delete(e);
            }),
            sV.pools?.delete(t);
    },
});
var sz = a(835002);
async function sK(e, t) {
    return await sB.A.get({
        url: z.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: sL.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: a, body: n } = e;
            if (!a) return void sP.A.showFailedToast(sz.OB.GENERIC_ERROR);
            let { generated_pool: l, users: s } = n;
            tC.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: sF.fromServer(l).setPassword(t),
                users: s.map((e) => new sU.A(e)),
            });
        })
        .catch(() => (sP.A.showFailedToast(sz.OB.GENERIC_ERROR), null));
}
var sY = a(844330),
    sq = a(277851);
let sJ = [
        sp.n,
        sx.l,
        sg.o,
        sv.K,
        sb.m,
        s_.c,
        sj.$,
        sf.Q,
        sy.Z,
        sC.A,
        sE.E,
        sS.C,
        sN._,
        sA.i,
        sk.L,
        sD.f,
        sT.N,
        sI.Y,
        sw.Z,
    ],
    sQ = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ],
    sZ = () => {
        let [e, t] = o.useState(""),
            [a, n] = o.useState(""),
            [l, s] = o.useState(!1);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("form", {
                    onSubmit: async (l) => {
                        l.preventDefault(), s(!0);
                        try {
                            await sK(e, a), t(""), n("");
                        } finally {
                            s(!1);
                        }
                    },
                    children: (0, r.jsxs)(D.B, {
                        direction: "vertical",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, r.jsxs)(D.B, {
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
                            (0, r.jsxs)(D.B, {
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
    sX = (e) => {
        let { pool: t } = e,
            { id: a, summary: n } = t,
            l = sH.getUsersForPool(a),
            s = (0, d.bG)([nt.default], () => nt.default.getId()),
            i = sJ[Number(a) % sJ.length],
            c = sQ[Number(a) % sQ.length],
            u = o.useCallback(() => {
                tC.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
            }, [a]);
        return (0, r.jsx)(D.B, {
            direction: "horizontal",
            align: "start",
            justify: "space-between",
            children: (0, r.jsx)(sY.A, {
                icon: (0, r.jsx)(A.E, {
                    variant: "text-md/medium",
                    color: c,
                    className: sq.td,
                    children: (0, r.jsx)(i, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
                title: n,
                className: sq.JC,
                subtitle: `${l.length} users`,
                children: (0, r.jsxs)(D.B, {
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
                                                            let a = sH.getUser(t);
                                                            if (null == a) throw Error("User not found");
                                                            let n = sH.getPool(e)?.password;
                                                            if (null == n) throw Error("Pool password not found");
                                                            if (null == a.email) throw Error("User email not found");
                                                            sM.A.login({
                                                                login: a.email,
                                                                password: n,
                                                                isMultiAccount: !0,
                                                                source: "generated_test_user",
                                                            }).catch(
                                                                () => (sP.A.showFailedToast(sz.OB.GENERIC_ERROR), null),
                                                            );
                                                        })(t.id, e.id);
                                                },
                                                "aria-disabled": s === e.id,
                                                className: S()(sq.vk, { [sq.Pe]: s === e.id }),
                                                children: (0, r.jsxs)(
                                                    D.B,
                                                    {
                                                        direction: "horizontal",
                                                        align: "center",
                                                        justify: "space-between",
                                                        gap: 8,
                                                        padding: { right: 8 },
                                                        fullWidth: !1,
                                                        children: [
                                                            (0, r.jsxs)(D.B, {
                                                                direction: "horizontal",
                                                                align: "center",
                                                                gap: 8,
                                                                fullWidth: !1,
                                                                className: S()({ [sq.WP]: s === e.id }),
                                                                children: [
                                                                    (0, r.jsx)(sp.n, {
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
                                                                                className: sq.c1,
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
                                                                      children: (0, r.jsx)(sO.y, {
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                                  })
                                                                : (0, r.jsx)(sR._, {
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
                            className: sq.UD,
                            children: (0, r.jsx)(p.$, {
                                icon: a8.u,
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
function s0() {
    let e = (0, d.yK)([sH], () => sH.getPools() ?? []);
    return (0, r.jsxs)(D.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: sq.kL,
        children: [
            (0, r.jsx)(sZ, {}),
            (0, r.jsx)(c.Ip, { className: sq.Ik, children: e?.map((e) => (0, r.jsx)(sX, { pool: e }, e.id)) }),
        ],
    });
}
var s1 = a(582306),
    s2 = a(528153),
    s8 = a(275759),
    s7 = a(888429);
function s4(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function s6() {
    let e = (0, d.bG)([s8.Ay], () => s8.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, d.bG)([s8.Ay], () => s8.Ay.getDevToolCurrentDate()),
        a = (0, d.bG)([s8.Ay], () => s8.Ay.getGiftUnreadNotificationLastDismissedTimes()),
        n = (0, d.bG)([s8.Ay], () => s8.Ay.getMessageGiftIntentLastShownMap()),
        l = (0, d.bG)([s8.Ay], () => s8.Ay.getHighestAffinityFriendAnniversaries()),
        s = (0, d.bG)([s8.Ay], () => s8.Ay.getHighAffinityFriendAnniversaries()),
        i = (0, d.bG)([s8.Ay], () => s8.Ay.getProfilePopoutGiftIntentsDismissMap()),
        o = (0, d.bG)([n5.A], () => {
            let e =
                n5.A.settings.userContent?.recurringDismissibleContentStates[nY.M.GIFT_INTENT_MESSAGE]
                    ?.lastDismissedAtMs;
            if (null == e || "0" === e) return null;
            let t = Number(e);
            return Number.isNaN(t) ? null : t;
        }),
        u = (e) => {
            tC.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
        },
        m = (e) => {
            let t = a$.A.getUserAffinity(e);
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
                    children: (0, r.jsxs)(D.B, {
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
                        className: s7.Pm,
                        children: (0, r.jsxs)(D.B, {
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
                                    (0, r.jsxs)(D.B, {
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
                                    (0, r.jsxs)(D.B, {
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
                    children: (0, r.jsxs)(D.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(s1.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? aZ()(t) : void 0,
                                onSelect: (e) => {
                                    let t = aZ()(),
                                        a = e
                                            .clone()
                                            .hours(t.hours())
                                            .minutes(t.minutes())
                                            .seconds(t.seconds())
                                            .milliseconds(t.milliseconds());
                                    tC.h.dispatch({ type: "DEV_TOOLS_SET_CURRENT_DATE", date: a.valueOf() });
                                },
                            }),
                            (0, r.jsx)(p.$, {
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
                    children: (0, r.jsxs)(D.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(D.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(A.E, {
                                        variant: "text-md/normal",
                                        children: "Reset DCF gift intent cooldown (global, 24h)",
                                    }),
                                    (0, r.jsx)(p.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            (0, li._N)(nY.M.GIFT_INTENT_MESSAGE);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsx)(A.E, {
                                variant: "text-xs/normal",
                                children: null != o ? `Dismissed at: ${s4(o)}` : "Not dismissed",
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: s7.Pm,
                    children: (0, r.jsxs)(D.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(D.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(A.E, {
                                        variant: "text-md/normal",
                                        children: "Reset gift message cooldown (per-user, 14d)",
                                    }),
                                    (0, r.jsx)(p.$, {
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
                                (0, r.jsxs)(D.B, {
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
                                                { variant: "text-xs/normal", children: [l, ": ", s4(a)] },
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
                    children: (0, r.jsxs)(D.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(D.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(A.E, {
                                        variant: "text-md/normal",
                                        children: "Reset gift notification cooldown",
                                    }),
                                    (0, r.jsx)(p.$, {
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
                                (0, r.jsxs)(D.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(A.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift notification shown timestamps:",
                                        }),
                                        a.map((e, t) =>
                                            (0, r.jsx)(A.E, { variant: "text-xs/normal", children: s4(e) }, t),
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
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Send",
                            onClick: () => {
                                s2.A.sendGiftingNotificationIfEligible();
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
                        (0, r.jsx)(p.$, {
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
                    children: (0, r.jsxs)(D.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(D.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(A.E, {
                                        variant: "text-md/normal",
                                        children: "Reset profile popout gift intents dismiss",
                                    }),
                                    (0, r.jsx)(p.$, {
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
                                (0, r.jsxs)(D.B, {
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
                                                { variant: "text-xs/normal", children: [l, ": ", s4(a)] },
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
var s9 = a(460890),
    s3 = a(349288),
    s5 = a(517461),
    ie = a(214947),
    it = a(403581),
    ia = a(34188);
let il = [
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
var is = a(545406);
let ii = [0, 0.5, 1],
    ir = ["Center", "Inner ring", "Outer ring"],
    io = ii.length,
    id = "ILLO_BLUE",
    ic = "ILLO_BLUE_40",
    iu = Array.from({ length: io }, () => ic),
    im = Array.from({ length: io }, () => id),
    ih = ["1", "0.5", "0"],
    ip = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    ix = [
        { label: "Light", value: z.NJ8.LIGHT, id: z.NJ8.LIGHT },
        { label: "Dark", value: z.NJ8.DARK, id: z.NJ8.DARK },
        { label: "Darker", value: z.NJ8.DARKER, id: z.NJ8.DARKER },
        { label: "Midnight", value: z.NJ8.MIDNIGHT, id: z.NJ8.MIDNIGHT },
    ],
    ig = { [z.NJ8.MIDNIGHT]: z.NJ8.DARKER, [z.NJ8.DARKER]: z.NJ8.DARK, [z.NJ8.LIGHT]: z.NJ8.DARK },
    iv = { [z.NJ8.LIGHT]: "light", [z.NJ8.DARK]: "ash", [z.NJ8.DARKER]: "dark", [z.NJ8.MIDNIGHT]: "onyx" },
    ib = [
        { id: "friends", icon: ie.$, text: "Friends" },
        { id: "nitro", icon: it.t, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: ia.U, text: "Shop", useCustomGradient: !0 },
    ],
    i_ = il.map((e) => ({ label: e, value: e, id: e })),
    ij = Object.fromEntries(
        il.map((e) => [
            e,
            Object.keys(eD.A.unsafe_rawColors)
                .filter((t) => String(t).startsWith(e + "_"))
                .sort(
                    (e, t) =>
                        parseInt(String(e).split("_").pop() ?? "0", 10) -
                        parseInt(String(t).split("_").pop() ?? "0", 10),
                )
                .map((e) => {
                    let t = String(e).split("_").pop() ?? e,
                        [a, n, l] = eD.A.unsafe_rawColors[e].resolve().rgba(),
                        s =
                            (0.299 * a + 0.587 * n + 0.114 * l) / 255 > 0.5
                                ? eD.A.unsafe_rawColors.OPACITY_BLACK_28
                                : eD.A.unsafe_rawColors.OPACITY_WHITE_28,
                        i = (0, r.jsx)("span", {
                            className: is.oP,
                            style: { background: `rgb(${a}, ${n}, ${l})`, border: `1px solid ${s.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: i };
                }),
        ]),
    );
var iy = a(306327);
function iC(e, t, a) {
    return e.map((e, n) => (n === t ? a : e));
}
function iE(e, t) {
    let [a, n, l, s] = eD.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: n, b: l, a: s };
}
function iS(e, t) {
    let a = eD.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function iN(e) {
    let { yaml: t, label: a } = e,
        n = o.useCallback(() => {
            navigator.clipboard.writeText(t);
        }, [t]);
    return (0, r.jsxs)(D.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(D.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                justify: "space-between",
                children: [
                    (0, r.jsx)(A.E, { variant: "text-md/semibold", children: a }),
                    (0, r.jsx)(eS.K, {
                        icon: a0.T,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: n,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: is.RP, children: t }),
        ],
    });
}
function iA(e) {
    let { allResolvedStops: t } = e,
        a = o.useMemo(
            () =>
                ir.map((e, a) => {
                    let n;
                    return (
                        (n = ix
                            .map((e) => {
                                let n,
                                    l,
                                    { value: s } = e,
                                    i = iv[s],
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
    return (0, r.jsxs)(D.B, {
        gap: 16,
        children: [
            (0, r.jsx)(I.D, { variant: "heading-sm/semibold", children: "Token YAML" }),
            ir.map((e, t) => (0, r.jsx)(iN, { yaml: a[t], label: e }, e)),
        ],
    });
}
function ik(e, t, a) {
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
    return new iy.A("srgb", [
        (e.r * (1 - r) + n * r) / 255,
        (e.g * (1 - r) + l * r) / 255,
        (e.b * (1 - r) + s * r) / 255,
    ]);
}
function iD(e, t, a) {
    let n = a.map((e) => {
            let [t, a, n] = eD.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: n, opacity: e.opacity, position: e.position };
        }),
        l = 1 / 0,
        s = (e) => {
            e < l && (l = e);
        };
    for (let a of n) s(e.contrast(ik(t, n, a.position), "WCAG21"));
    for (let a = 0; a < n.length - 1; a++) {
        let { contrast: l } = (function (e, t, a, n, l) {
            let s = 1 / 0,
                i = n;
            for (let r = 0; r <= 100; r++) {
                let o = n + (r / 100) * (l - n),
                    d = a.contrast(ik(e, t, o), "WCAG21");
                d < s && ((s = d), (i = o));
            }
            return { contrast: s, position: i };
        })(t, n, e, n[a].position, n[a + 1].position);
        s(l);
    }
    return Math.round(100 * l) / 100;
}
function iT(e) {
    let [t, a, n] = eD.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [l, s, i] = eD.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = eD.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new iy.A("srgb", [t / 255, a / 255, n / 255]),
        background: { r: l * (1 - c) + r * c, g: s * (1 - c) + o * c, b: i * (1 - c) + d * c },
    };
}
function iI() {
    return {
        colors: Array.from({ length: io }, () => void 0),
        scales: Array.from({ length: io }, () => void 0),
        opacities: Array.from({ length: io }, () => void 0),
    };
}
function iw() {
    return {
        [z.NJ8.LIGHT]: iI(),
        [z.NJ8.DARK]: { colors: [...iu], scales: [...im], opacities: [...ih] },
        [z.NJ8.DARKER]: iI(),
        [z.NJ8.MIDNIGHT]: iI(),
    };
}
function iO() {
    let e = (0, s9.G9)(),
        [t, a] = o.useState(z.NJ8.DARK),
        [n, l] = (0, s5.V)("DevToolsGradientContrastPanel_themeStops", iw()),
        s = n ?? iw(),
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
                        (0, r.jsxs)(D.B, {
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
                                              (0, r.jsx)(lg.Q, {
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
                    ix.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    n = [],
                                    l = [];
                                for (let s = 0; s < io; s++) {
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
                                        d = ig[d];
                                    }
                                    a.push(i ?? iu[s]), n.push(r ?? im[s]), l.push(o ?? ih[s]);
                                }
                                return { colors: a, scales: n, opacities: l };
                            })(s, t),
                        ];
                    }),
                ),
            [s],
        ),
        j = _[t],
        f = o.useCallback(
            (e) => {
                l({ ...s, [t]: e(s[t]) });
            },
            [t, l, s],
        ),
        y = o.useMemo(() => iT({ theme: t, saturation: 1 }), [t]),
        C = o.useMemo(() => {
            let e = [];
            for (let t = 0; t < io; t++) {
                let a = parseFloat(j.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: j.colors[t], opacity: a, position: ii[t] });
            }
            return e;
        }, [j]),
        E = o.useMemo(() => {
            if (null == C) return null;
            let { text: e, background: t } = y;
            return ir.map((a, n) =>
                ij[j.scales[n]].map((a) => {
                    let l = iD(e, t, iC(C, n, { ...C[n], color: a.value }));
                    return { ...a, trailing: `(${l}:1)` };
                }),
            );
        }, [C, y, j.scales]),
        S = o.useMemo(() => {
            try {
                return ix.map((e) => {
                    let { value: t, label: a } = e,
                        n = _[t],
                        l = [];
                    for (let e = 0; e < io; e++) {
                        let s = parseFloat(n.opacities[e]);
                        if (isNaN(s) || s < 0 || s > 1) return { theme: t, label: a, result: null };
                        l.push({ color: n.colors[e], opacity: s, position: ii[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: n, background: l } = iT(t),
                                s = iD(n, l, e),
                                i = s >= 4.5;
                            if (!i)
                                for (let t = 0; t < e.length; t++) {
                                    let s = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return il.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == s) continue;
                                    let i = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of ij[s]) {
                                        if (o === e[t].color) continue;
                                        let s = iD(n, l, iC(e, t, { ...e[t], color: o }));
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
        className: is.XG,
        children: (0, r.jsxs)(D.B, {
            gap: 24,
            padding: 8,
            className: is.zr,
            children: [
                (0, r.jsx)(I.D, {
                    variant: "heading-lg/medium",
                    children: "Tab Hover Gradient Token Generator & Contrast Checker",
                }),
                (0, r.jsxs)(D.B, {
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
                                "Use the hex field to paste in a hex color — it will snap to the closest allowed token and show the deltaE distance.",
                        }),
                        (0, r.jsxs)(A.E, {
                            variant: "text-sm/normal",
                            children: [
                                "Copy the generated YAML at the bottom to create your token definitions to be used by the",
                                " ",
                                (0, r.jsx)(s3.Anchor, {
                                    href: "https://design.discord.tools/foundations/color/token-pipeline",
                                    children: "token pipeline",
                                }),
                                ".",
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(lx.Z, {
                    selectionMode: "single",
                    label: "Theme",
                    value: t,
                    onSelectionChange: (e) => a(e),
                    closeOnSelect: !0,
                    options: ix,
                }),
                (0, r.jsxs)(D.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(I.D, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: is.G9,
                            children: ir.map((e, t) => {
                                let a = "" !== i[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)(D.B, {
                                                gap: 0,
                                                className: is.hi,
                                                children: [
                                                    (0, r.jsx)(A.E, { variant: "text-md/medium", children: e }),
                                                    (0, r.jsx)(lg.Q, {
                                                        variant: "secondary",
                                                        textVariant: "text-xs/normal",
                                                        text: `(${iS(j.colors[t], parseFloat(j.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                iS(j.colors[t], parseFloat(j.opacities[t])),
                                                            ),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(lx.Z, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: a,
                                                value: j.scales[t],
                                                onSelectionChange: (e) => {
                                                    let a = ij[e][0]?.value;
                                                    f((n) => ({
                                                        ...n,
                                                        scales: iC(n.scales, t, e),
                                                        colors: null != a ? iC(n.colors, t, a) : n.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: i_,
                                            }),
                                            (0, r.jsx)(lx.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: j.colors[t],
                                                onSelectionChange: (e) =>
                                                    f((a) => ({ ...a, colors: iC(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: E?.[t] ?? ij[j.scales[t]],
                                            }),
                                            (0, r.jsx)(g.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: j.opacities[t],
                                                onChange: (e) => f((a) => ({ ...a, opacities: iC(a.opacities, t, e) })),
                                                placeholder: "0–1",
                                            }),
                                            (0, r.jsx)(g.k, {
                                                label: `Hex${a && null != u[t] ? ` (dE: ${u[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: i[t],
                                                onChange: (e) => {
                                                    d((a) => iC(a, t, e));
                                                    let a = (function (e) {
                                                        if (!ip.test(e)) return null;
                                                        try {
                                                            return new iy.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = ic,
                                                                a = id,
                                                                n = 1 / 0;
                                                            for (let l of il)
                                                                for (let s of ij[l]) {
                                                                    let i = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, n] = eD.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new iy.A("srgb", [
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
                                                        m((a) => iC(a, t, e.deltaE)),
                                                            f((a) => ({
                                                                ...a,
                                                                scales: iC(a.scales, t, e.scale),
                                                                colors: iC(a.colors, t, e.color),
                                                            }));
                                                    } else m((e) => iC(e, t, null));
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
                (0, r.jsx)(I.D, { variant: "heading-sm/semibold", children: "Preview" }),
                (0, r.jsx)(s9.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(eA.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)(D.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: is.$8,
                                        style: { background: eD.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: ib.map((e, t) =>
                                            (0, r.jsx)(
                                                ee.z9,
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
                                                        hoverGradientStart: iE(j.colors[0], parseFloat(j.opacities[0])),
                                                        hoverGradientMiddle: iE(
                                                            j.colors[1],
                                                            parseFloat(j.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: iE(j.colors[2], parseFloat(j.opacities[2])),
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
                    (0, r.jsxs)(D.B, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(I.D, { variant: "heading-sm/semibold", children: "Results" }),
                            S.map((e) => {
                                let { theme: t, label: a, result: n } = e;
                                return null != n
                                    ? (0, r.jsxs)(
                                          D.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, r.jsx)(A.E, { variant: "text-md/semibold", children: a }),
                                                  (0, r.jsxs)(k.w, {
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
                                                      (0, r.jsxs)(D.B, {
                                                          gap: 4,
                                                          children: [
                                                              (0, r.jsx)(A.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: "Suggestion:",
                                                              }),
                                                              (0, r.jsxs)(A.E, {
                                                                  variant: "text-sm/normal",
                                                                  children: [
                                                                      ir[n.suggestion.stopIndex],
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
                (0, r.jsx)(iA, { allResolvedStops: _ }),
            ],
        }),
    });
}
var iR = a(820739),
    iL = a(230135),
    iM = a(45780),
    iP = a(942975),
    iU = a(859241);
let iB = [
        nY.M.GUILD_POWERUP_PERKS_COACHMARK,
        nY.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        nY.M.GUILD_POWERUP_NOTIFICATION,
        nY.M.GUILD_TAG_AVAILABLE_COACHMARK,
        nY.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
    ],
    iG = [
        nY.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        nY.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        nY.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        nY.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        nY.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    iF = [nY.V.ADOPT_CLAN_IDENTITY_NOTICE],
    iV = [
        nY.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        nY.M.VANITY_URL_POWERUP_ROLLBACK_MODAL,
        nY.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
    ];
function i$(e) {
    switch (e) {
        case nY.V.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return "GUILD_POWERUP_LEVEL_1_COACHMARK";
        case nY.V.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return "GUILD_POWERUP_LEVEL_2_COACHMARK";
        case nY.V.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return "GUILD_POWERUP_LEVEL_3_COACHMARK";
        case nY.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
        case nY.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
        case nY.V.ADOPT_CLAN_IDENTITY_NOTICE:
            return "ADOPT_CLAN_IDENTITY_NOTICE";
        default:
            return String(e);
    }
}
var iW = a(861671);
async function iH(e, t, a) {
    await nO.Bo.patch({
        url: z.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : aZ()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, iR.VU)(e),
        (0, iP.Xd)(e, !0);
}
async function iz(e) {
    await nO.Bo.post({ url: z.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function iK() {
    let e = (0, d.bG)([aM.A], () => aM.A.getGuildId()),
        t = (0, d.bG)([aL.A], () => aL.A.getGuild(e)?.name),
        a = (0, d.yK)([n5.A], () => [...iG, ...iF].filter((t) => null != e && (0, iM.zs)(t, e))),
        n = (0, d.yK)([iU.A], () => (null != e ? (iU.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(c.Ip, {
            className: iW.kL,
            children: [
                (0, r.jsx)("div", {
                    className: iW.uW,
                    children: (0, r.jsx)(I.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                }),
                (0, r.jsxs)("div", {
                    className: iW.uW,
                    children: [
                        (0, r.jsx)(A.E, {
                            variant: "eyebrow",
                            className: iW.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, iP.qM)();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iW.uW,
                    children: [
                        (0, r.jsx)(A.E, { variant: "eyebrow", className: iW.wx, children: "Reset Progress Bar State" }),
                        (0, r.jsx)(p.$, { variant: "primary", text: "Reset", onClick: iL.O }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iW.uW,
                    children: [
                        (0, r.jsx)(A.E, { variant: "eyebrow", children: "Set Warning State" }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        iH(e, n.slice(Math.floor(n.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        iH(e, n, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iW.uW,
                    children: [
                        (0, r.jsx)(A.E, { variant: "eyebrow", className: iW.wx, children: "Reset User Level DCs" }),
                        (0, r.jsx)(D.B, {
                            gap: 16,
                            children: iB.map((e) => (0, r.jsx)(la, { className: iW.z6, content: nY.M[e] }, nY.M[e])),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: iW.uW,
                    children: (0, r.jsx)(m.n, {
                        label: "Reset Guild Level DCs",
                        children: iG.map((t) =>
                            (0, r.jsx)(
                                b.d,
                                {
                                    label: i$(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, iM._$)(t, e, !1)
                                            : ((0, li._N)(nY.M.GUILD_POWERUP_NOTIFICATION), (0, iM.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: iW.uW,
                    children: (0, r.jsx)(m.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: iF.map((t) =>
                            (0, r.jsx)(
                                b.d,
                                {
                                    label: i$(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, iM._$)(t, e, !1)
                                            : ((0, li._N)(nY.M.GUILD_POWERUP_NOTIFICATION), (0, iM.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: iW.uW,
                    children: [
                        (0, r.jsx)(A.E, {
                            variant: "eyebrow",
                            className: iW.wx,
                            children: "Reset Powerup Rollback DCs",
                        }),
                        iV.map((e) => (0, r.jsx)(la, { className: iW.z6, content: nY.M[e] }, nY.M[e])),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iW.uW,
                    children: [
                        (0, r.jsx)(A.E, {
                            variant: "eyebrow",
                            className: iW.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                iz(e);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(p.$, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, sr.Wp)(!1);
                    },
                }),
            ],
        });
}
var iY = a(450510),
    iq = a(320681);
function iJ(e) {
    let { hotspotLocation: t } = e,
        [a, n] = (0, d.yK)([iY.HP], () => [iY.HP.hasHotspot(t, !0), iY.HP.getHotspotOverride(t)]);
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
        onSelectionChange: (e) => (null != e ? (0, iY.Kl)(t, e) : (0, iY.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function iQ() {
    return (0, r.jsx)(c.Ip, {
        className: tA.nd,
        children: (0, r.jsx)(m.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: iq.IN,
            children: (0, r.jsx)(D.B, {
                gap: 20,
                children: Object.keys(iY._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, r.jsx)(iJ, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var iZ = a(919523),
    iX = a(855522),
    i0 = a(37646),
    i1 = a(773669);
function i2() {
    let e = (0, d.bG)([i1.default], () => i1.default.locale),
        [t, a] = o.useState(),
        n = (0, iZ.runtimeHashMessageKey)(t ?? ""),
        l = o.useMemo(() => aB.t[n], [n]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(am.Ay, {
                children: [
                    (0, r.jsx)(am.Ay.Icon, { icon: i0.U, tooltip: "Locale" }),
                    (0, r.jsx)(am.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, r.jsxs)(nc, {
                children: [
                    (0, r.jsx)(nu, { name: "Active System", children: "@discord/intl" }),
                    (0, r.jsx)(nu, { name: "App", children: e }),
                    (0, r.jsx)(nu, { name: "System", children: aB.systemLocale }),
                    (0, r.jsx)(nu, { name: "@discord/intl", children: aB.intl.currentLocale }),
                    (0, r.jsx)(nu, { name: "common i18n", children: iX.A.getLocale() }),
                    (0, r.jsx)(nu, { name: "Moment", children: aZ().locale() }),
                ],
            }),
            (0, r.jsxs)(am.Ay, {
                children: [
                    (0, r.jsx)(am.Ay.Icon, { icon: i0.U, tooltip: "Messages" }),
                    (0, r.jsx)(am.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(nc, {
                children: (0, r.jsx)(nu, { name: "Unique Rendered Main Messages", children: Object.keys(aB.t).length }),
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
            (0, r.jsxs)(nc, {
                children: [
                    (0, r.jsx)(nu, { name: "Hashed key", children: n }),
                    (0, r.jsx)(nu, { name: "Exists?", children: null != l ? "yes" : "no" }),
                ],
            }),
            (0, r.jsx)(aj, { data: l?.(e) }),
        ],
    });
}
var i8 = a(76335);
function i7() {
    let { node: e } = (0, G.Ay)(i8.F, "");
    return (0, r.jsx)(c.Ip, {
        className: tA.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)(B.A, { node: e }, e.key),
        }),
    });
}
var i4 = a(361158),
    i6 = a(80556),
    i9 = a(907135),
    i3 = a(665095),
    i5 = a(87404);
function re() {
    return (0, r.jsx)(c.Ip, {
        className: tA.nd,
        children: (0, r.jsxs)("div", {
            className: st.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: st.uW,
                    children: [
                        (0, r.jsx)(I.D, { variant: "heading-md/semibold", children: "Verification Layer" }),
                        (0, r.jsx)("div", {
                            className: st.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: () => {
                                    (0, i4.B8)(() => (0, r.jsx)(i3.A, {}), { layerKey: i5._s, Layer: i6.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: st.uW,
                    children: [
                        (0, r.jsx)(I.D, { variant: "heading-md/semibold", children: "Safety Flow" }),
                        (0, r.jsx)("div", {
                            className: st.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: () => {
                                    (0, i4.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, r.jsx)(i9.A, { onClose: t });
                                        },
                                        { layerKey: i5._s, Layer: i6.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: st.uW,
                    children: [
                        (0, r.jsx)(I.D, { variant: "heading-md/semibold", children: "Layer Controls" }),
                        (0, r.jsx)("div", {
                            className: st.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: () => {
                                    i4.xr.setState({ fullScreenLayers: [] });
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
var rt = a(687813),
    ra = a(604121);
let rn = {
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
        a.e("94675").then(a.t.bind(a, 180440, 19)),
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
function rl(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let n = new Uint8Array(e);
                    rt.$1(n, (e, n) => {
                        null != e && a(e);
                        let l = Object.keys(n).reduce((e, t) => ({ ...e, [t]: JSON.parse(rt.he(n[t])) }), {}),
                            s = l["manifest.json"];
                        t(l[`animations/${s.animations[0].id}.json`]);
                    });
                }),
        );
}
function rs() {
    let [e, t] = o.useState(void 0),
        [a, n] = o.useState(400),
        [l, s] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)(D.B, {
            gap: 24,
            children: [
                (0, r.jsx)(lx.Z, {
                    options: Object.keys(rn).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)(D.B, {
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
                        let t = rn[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(rl).then(eL().cloneDeep)
                                            : await t().then((e) => eL().cloneDeep(e.default)),
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
                            ra.a,
                            {
                                importData: () => {
                                    let t = rn[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(rl).then(eL().cloneDeep)
                                        : t().then((e) => eL().cloneDeep(e.default));
                                },
                            },
                            e,
                        ),
                    }),
            ],
        }),
    });
}
var ri = a(442433),
    rr = a(395671);
let ro = {
        ClipsContextMenu: async () => {
            let { default: e } = await a.e("40638").then(a.bind(a, 562733));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await a.e("32986").then(a.bind(a, 728033)),
                t = new rr.kJ({
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
            return () => (0, r.jsx)(e, { application: t, channelId: "987654321", onClose: ri.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await a.e("10758").then(a.bind(a, 455557)),
                t = Object.values(aL.A.getGuilds())[0];
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
                t = Object.values(aL.A.getGuilds())[0];
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
            return (t) => (0, r.jsx)(e, { ...t, onClose: ri.Z_ });
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
                        console.log("Leave role clicked"), (0, ri.Z_)();
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await a.e("89346").then(a.bind(a, 949881)),
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
            let { AddQuestionsContextMenu: e } = await Promise.all([a.e("11810"), a.e("13578")]).then(
                    a.bind(a, 892921),
                ),
                t = Object.values(aL.A.getGuilds())[0];
            return null == t
                ? () => null
                : (a) =>
                      (0, r.jsx)(e, {
                          ...a,
                          addFormField: (e) => {
                              console.log("Add form field:", e), (0, ri.Z_)();
                          },
                          guild: t,
                          allowTerms: !0,
                      });
        },
        ChannelListThreadContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("94989"), a.e("84615")]).then(a.bind(a, 612826)),
                t = aL.A.getGuilds(),
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
                t = Object.values(aL.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: ri.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await a.e("14878").then(a.bind(a, 316173)),
                t = Object.values(aL.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: ri.Z_ });
        },
    },
    rd = {
        GuildShopSortOptions: o.lazy(async () => {
            let { default: e } = await a.e("50974").then(a.bind(a, 324269)),
                { default: t } = await a.e("55197").then(a.bind(a, 558060));
            return { default: () => (0, r.jsx)(t, { defaultSortOption: void 0, children: (0, r.jsx)(e, {}) }) };
        }),
    };
function rc() {
    let e = o.useMemo(
            () =>
                Object.keys(ro)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = o.useMemo(
            () =>
                Object.keys(rd)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(
            (e) => {
                null != a && (0, ri.L3)(e, ro[a]);
            },
            [a],
        ),
        d = null != l ? rd[l] : null;
    return (0, r.jsx)(c.Ip, {
        className: tA.nd,
        children: (0, r.jsxs)(D.B, {
            className: st.l$,
            gap: 16,
            children: [
                (0, r.jsxs)(D.B, {
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
                (0, r.jsxs)(D.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(lx.Z, {
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
                (0, r.jsxs)(D.B, {
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
                (0, r.jsx)(D.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: (0, r.jsx)(lx.Z, {
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
var ru = a(253506),
    rm = a(665260),
    rh = a(97808),
    rp = a(778712),
    rx = a(308528),
    rg = a(571694),
    rv = a(704844),
    rb = a(567761),
    r_ = a(716371),
    rj = a(48182);
function rf() {
    let e = (0, d.yK)([rb.default], () => rb.default.getSortedChannels()[1]),
        [t, a] = o.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: n, options: l } = (0, d.cf)([tX.A, V.default, t0.A], () => ({
            selectedChannel: tX.A.getChannel(t),
            options: e.map((e) => {
                let t = tX.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, tZ.m1)(t, V.default, t0.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, r.jsx)(rh.eu, { src: (0, rg.Y)(t), "aria-hidden": !0, size: rp._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        s = o.useCallback(() => {
            if (null == n || !n.isPrivate()) return;
            let e = (0, rm.PQ)(n.recipientFlags ?? 0, ru.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            rv.A.updatePrivateChannelRecipientFlags(n.id, e);
        }, [n]),
        i = !!n?.isPrivate() && (0, rm.Lt)(n.recipientFlags ?? 0, ru.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: rj.gs,
        children: [
            (0, r.jsx)(lx.Z, {
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
function ry() {
    let e = o.useCallback(() => {
        rx.A.openPrivateChannel({ recipientIds: [r_.K] });
    }, []);
    return (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function rC() {
    let e = (0, d.bG)([au.Ay], () => au.Ay.allByCategory(au.xW.MESSAGING), [], d.My).map((e) => {
        let [t, a, { label: n }] = e;
        return (0, r.jsx)(b.d, { label: n, description: t, checked: a, onChange: (e) => su(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: S()(tA.nd, rj.nd),
        children: [
            e,
            (0, r.jsx)("div", { className: rj.yF }),
            (0, r.jsx)(rf, {}),
            (0, r.jsx)("div", { className: rj.yF }),
            (0, r.jsx)(ry, {}),
        ],
    });
}
var rE = a(205693),
    rS = a(772707),
    rN = a(150934),
    rA = a(598653),
    rk = a(166403),
    rD = a(625494),
    rT = a(204925);
let rI = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e("29232").then(a.bind(a, 180275));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: aB.intl.string(aB.t.ZLRYGU),
                confirmButtonText: aB.intl.string(aB.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e("19840").then(a.bind(a, 79779));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: aB.intl.string(aB.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: aB.intl.string(aB.t["13ofGu"]),
                impression: { impressionName: sL.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await a.e("18467").then(a.bind(a, 297102));
        return (t) => (0, r.jsx)(e, { ...t, entryPoint: aY.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e("10136"), a.e("53333")]).then(a.bind(a, 776971));
        return (t) => (0, r.jsx)(e, { ...t, source: rT.w_.NSFW_SERVER });
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
        return (t) => (0, r.jsx)(e, { ...t, mediaEngineContext: rE.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, r.jsx)(rS.k, {
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
                (t.default.getDevicesForPlatform = (e) => (e === z.fg2.PLAYSTATION ? s : n.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== z.fg2.PLAYSTATION && i.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === z.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
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
                    (0, r.jsx)(e, { ...a, channel: l, platform: z.fg2.PLAYSTATION })
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
                j = d.useCallback(async () => {
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
                            (0, r.jsx)(e, { variant: "primary", text: "Timeout User", onClick: j, disabled: x }),
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
                                (0, r.jsx)(rN.S, {
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
                                (0, r.jsx)(rN.S, {
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
        let e = V.default.getUser("12345"),
            t = V.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await a.e("31385").then(a.bind(a, 58144));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = V.default.getUser("12345"),
            t = V.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await a.e("84811").then(a.bind(a, 389094));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = V.default.getUser("12345"),
            t = V.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await a.e("17219").then(a.bind(a, 187278));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = V.default.getUser("12345"),
            t = V.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await a.e("43139").then(a.bind(a, 179950));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([a.e("29835"), a.e("72875")]).then(a.bind(a, 320742));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await a.e("7960").then(a.bind(a, 785606)),
            t = rk.A.getPremiumGroupSubscription();
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
            t = Object.keys(aL.A.getGuilds())[0];
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
            t = Object.values(aL.A.getGuilds())[0];
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await a.e("73152").then(a.bind(a, 516259));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([a.e("25505"), a.e("55540"), a.e("4366")]).then(a.bind(a, 57375));
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
function rw() {
    let e = o.useMemo(
            () =>
                Object.keys(rI)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(c.Ip, {
        className: tA.nd,
        children: (0, r.jsxs)("div", {
            className: st.l$,
            children: [
                (0, r.jsx)("section", {
                    className: st.uW,
                    children: (0, r.jsxs)(D.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(lx.Z, {
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
                                onClick: () => null != t && (0, ek.openModalLazy)(rI[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: st.uW,
                    children: [
                        (0, r.jsx)(I.D, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: st.bd,
                            children: (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, rA.o)(!0), rD._.dispatch(z.jej.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var rO = a(933832),
    rR = a(472229),
    rL = a(694080),
    rM = a(354670),
    rP = a(927578);
let rU = async () => {
        try {
            let { body: e } = await nO.Bo.get({ url: z.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
            return e;
        } catch (e) {
            return [];
        }
    },
    rB = async (e, t) => {
        try {
            await nO.Bo.post({ url: z.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, rL._D)();
        }
    },
    rG = async (e, t) => {
        try {
            await nO.Bo.del({ url: z.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, rL._D)();
        }
    },
    rF = async () => {
        try {
            let { body: e } = await nO.Bo.get({ url: z.Rsh.USER_OFFERS, rejectWithError: !0 });
            return e;
        } catch (e) {
            return { trial: [], discount: [] };
        }
    },
    rV = async () => {
        try {
            await nO.Bo.del({ url: z.Rsh.USER_OFFERS, rejectWithError: !0 });
        } catch {
        } finally {
            await rM.A.forceReset(), await (0, rL._D)();
        }
    },
    r$ = async (e) => {
        await nO.Bo.post({ url: z.Rsh.CREATE_REVERSE_TRIAL, body: { ends_at: e }, rejectWithError: !0 });
    };
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
    let { id: p, expires_at: x, redeemed_at: g, trial_id: v, subscription_trial: b, referrer: _ } = t,
        j =
            a.find((e) => {
                let { value: t } = e;
                return t === v;
            })?.label ?? "Unknown";
    null != _ && (j = `${j} from @${_.username}`);
    let f = null != x,
        y = null != x && new Date(x).getTime() < Date.now(),
        C = b?.sku_id === l7.pe.TIER_0,
        E = async () => {
            u(!0), f ? await k({ expiresAt: null }) : await (0, rL.u1)(t), n(), u(!1);
        },
        k = async (e) => {
            u(!0);
            try {
                await nO.Bo.patch({
                    url: z.Rsh.UPDATE_USER_OFFER(p, "trial"),
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
        f && (D = "Acked"),
        y && (D = "Expired"),
        (0, r.jsxs)("div", {
            className: S()(st.Nr, C ? st.Qf : st.C1),
            children: [
                (0, r.jsx)("div", {
                    className: S()(st.nM, st.S7),
                    children: (0, r.jsx)(I.D, { variant: "heading-lg/semibold", color: "always-white", children: j }),
                }),
                (0, r.jsxs)(N.D, {
                    className: S()(st.nM, st.QB),
                    onClick: () => {
                        (0, a3.C)(p, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(A.E, { variant: "eyebrow", color: "always-white", children: ["Offer: ", p] }),
                        l
                            ? (0, r.jsx)(rO.A, { size: "md", color: "currentColor", className: st.Kk })
                            : (0, r.jsx)(a0.T, { size: "xs", color: "currentColor", className: st.Kk }),
                    ],
                }),
                (0, r.jsxs)(N.D, {
                    className: S()(st.nM, st.QB),
                    onClick: () => {
                        (0, a3.C)(v, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(A.E, { variant: "eyebrow", color: "always-white", children: ["Trial: ", v] }),
                        i
                            ? (0, r.jsx)(rO.A, { size: "md", color: "currentColor", className: st.Kk })
                            : (0, r.jsx)(a0.T, { size: "xs", color: "currentColor", className: st.Kk }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: st.nM,
                    children: (0, r.jsxs)(A.E, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, rP.re)({
                                intervalType: b?.interval ?? l7.WT.MONTH,
                                intervalCount: b?.interval_count ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: st.nM,
                    children: [
                        (0, r.jsxs)(A.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, rR.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, a5.Xm)(x),
                            onChange: (e) => {
                                k({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: st.nM,
                    children: [
                        (0, r.jsx)(A.E, { variant: "eyebrow", color: "always-white", children: "Referrer ID:" }),
                        (0, r.jsx)("input", {
                            type: "text",
                            value: _?.id ?? "",
                            onChange: (e) => k({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: st.fC,
                    children: [
                        (0, r.jsx)(N.D, {
                            onClick: E,
                            className: S()(st.qS, st.vk, { [st.R1]: f, [st._7]: y }),
                            children: (0, r.jsx)(A.E, {
                                variant: "eyebrow",
                                color: "Acked" === D ? void 0 : "always-white",
                                children: D,
                            }),
                        }),
                        null != g &&
                            (0, r.jsx)("div", {
                                className: S()(st.qS, st.k3),
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
                        u(!0), await rG(p, "trial"), n(), u(!1);
                    },
                    children: (0, r.jsx)(a8.u, { size: "md", color: "currentColor", className: S()(st.Kk, st.IT) }),
                }),
                (0, r.jsx)("div", { className: S()(st.g4, { [st.VP]: c || m }), children: (0, r.jsx)(eX.y, {}) }),
            ],
        })
    );
}
function rH(e) {
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
        j = null != x,
        f = null != x && new Date(x).getTime() < Date.now(),
        y = async () => {
            u(!0), j ? await C({ expiresAt: null }) : await (0, rL.u1)(void 0, t), n(), u(!1);
        },
        C = async (e) => {
            let { expiresAt: t } = e;
            u(!0);
            try {
                await nO.Bo.patch({
                    url: z.Rsh.UPDATE_USER_OFFER(p, "discount"),
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
        j && (E = "Acked"),
        (0, r.jsxs)("div", {
            className: S()(st.Nr, st.id),
            children: [
                (0, r.jsx)("div", {
                    className: S()(st.nM, st.S7),
                    children: (0, r.jsx)(I.D, { variant: "heading-lg/semibold", color: "text-default", children: _ }),
                }),
                (0, r.jsxs)(N.D, {
                    className: S()(st.nM, st.QB),
                    onClick: () => {
                        (0, a3.C)(p, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(A.E, { variant: "eyebrow", color: "text-default", children: ["Offer: ", p] }),
                        l
                            ? (0, r.jsx)(rO.A, { size: "md", color: "currentColor", className: S()(st.Kk, st.mK) })
                            : (0, r.jsx)(a0.T, { size: "xs", color: "currentColor", className: st.Kk }),
                    ],
                }),
                (0, r.jsxs)(N.D, {
                    className: S()(st.nM, st.QB),
                    onClick: () => {
                        (0, a3.C)(v, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(A.E, { variant: "eyebrow", color: "text-default", children: ["Discount: ", v] }),
                        i
                            ? (0, r.jsx)(rO.A, { size: "md", color: "currentColor", className: S()(st.Kk, st.mK) })
                            : (0, r.jsx)(a0.T, { size: "xs", color: "currentColor", className: st.Kk }),
                    ],
                }),
                b?.amount != null &&
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)(A.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [b.amount, "% off"],
                        }),
                    }),
                (0, r.jsxs)("div", {
                    className: st.nM,
                    children: [
                        (0, r.jsxs)(A.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, rR.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, a5.Xm)(x),
                            onChange: (e) =>
                                C({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: st.fC,
                    children: [
                        (0, r.jsx)(N.D, {
                            onClick: y,
                            className: S()(st.qS, st.vk, { [st.R1]: j, [st._7]: f }),
                            children: (0, r.jsx)(A.E, {
                                variant: "eyebrow",
                                color: "Acked" === E ? void 0 : "always-white",
                                children: E,
                            }),
                        }),
                        null != g &&
                            (0, r.jsx)("div", {
                                className: S()(st.qS, st.k3),
                                children: (0, r.jsx)(A.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(N.D, {
                    className: st.aR,
                    onClick: async () => {
                        u(!0), await rG(p, "discount"), n(), u(!1);
                    },
                    children: (0, r.jsx)(a8.u, { size: "md", color: "currentColor", className: S()(st.Kk, st.fy) }),
                }),
                (0, r.jsx)("div", { className: S()(st.g4, { [st.VP]: c || m }), children: (0, r.jsx)(eX.y, {}) }),
            ],
        })
    );
}
function rz() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState([]),
        [l, s] = o.useState(),
        [i, d] = o.useState(),
        [u, m] = o.useState([]),
        [h, g] = o.useState([]),
        [v, b] = o.useState(!0),
        [_, j] = o.useState(10080),
        [f, y] = o.useState([]),
        { entitlements: C, deleteFractionalPremium: E, refreshEntitlementList: S } = l5();
    o.useEffect(() => {
        S();
    }, [S]),
        o.useEffect(() => {
            y(C.filter((e) => e.sourceType === z.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [C]),
        o.useEffect(() => {
            (0 === e.length || 0 === a.length || v) &&
                rU().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        r = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    t(a), n(r), null == l && s(a[0].value), null == i && d(r[0].value);
                });
        }, [e, a, l, i, v]),
        o.useEffect(() => {
            v &&
                (b(!1),
                rM.A.forceReset(),
                (0, rL._D)(),
                rF().then((e) => {
                    m(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        g(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [v]);
    let N = async () => {
            null != l && (await rB(l, "trial"), b(!0));
        },
        k = async () => {
            null != i && (await rB(i, "discount"), b(!0));
        },
        D = async () => {
            await rV(), b(!0);
        },
        T = async () => {
            let e = new Date(Date.now() + 60 * _ * 1e3).toISOString();
            await r$(e), S();
        };
    return (0, r.jsx)(c.Ip, {
        className: tA.nd,
        children: (0, r.jsxs)("div", {
            className: st.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: st.uW,
                    children: [
                        (0, r.jsx)(I.D, { variant: "heading-md/semibold", children: "Utils" }),
                        (0, r.jsxs)("div", {
                            className: st.Uo,
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
                                    onClick: () => (0, li.xB)(nY.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, li._N)(nY.M.NAGBAR_NOTICE_OFFER_EXPIRING),
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
                    className: st.uW,
                    children: (0, r.jsxs)("div", {
                        className: st.bd,
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
                            (0, r.jsx)(p.$, { variant: "primary", text: "Create", onClick: N }),
                        ],
                    }),
                }),
                (0, r.jsx)("section", {
                    className: st.uW,
                    children: (0, r.jsxs)("div", {
                        className: st.bd,
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
                        className: st.uW,
                        children: [
                            (0, r.jsx)(I.D, { variant: "heading-md/semibold", children: "Existing Trial Offers" }),
                            u.map((t) =>
                                (0, r.jsx)(rW, { offer: t, offerOptions: e, forceRefetch: () => b(!0) }, t.id),
                            ),
                        ],
                    }),
                h.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: st.uW,
                        children: [
                            (0, r.jsx)(I.D, { variant: "heading-md/semibold", children: "Existing Discount Offers" }),
                            h.map((e) =>
                                (0, r.jsx)(rH, { offer: e, offerOptions: a, forceRefetch: () => b(!0) }, e.id),
                            ),
                        ],
                    }),
                (0, r.jsx)("section", {
                    className: st.uW,
                    children: (0, r.jsxs)("div", {
                        className: st.bd,
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
                                onSelectionChange: j,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(p.$, { variant: "primary", text: "Create", onClick: T }),
                        ],
                    }),
                }),
                f.length > 0 &&
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(A.E, {
                                style: { marginTop: "15px" },
                                variant: "text-md/bold",
                                children: "Active reverse trial",
                            }),
                            (0, r.jsx)("div", {
                                children: f.map((e) =>
                                    (0, r.jsx)(sn, { entitlement: e, active: !0, onDelete: () => E(e.id) }, e.id),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var rK = a(935462),
    rY = a(260598),
    rq = a(93688),
    rJ = a(717400),
    rQ = a(676955),
    rZ = a(31300),
    rX = a(500060),
    r0 = a(391973),
    r1 = a(684013),
    r2 = a(765671),
    r8 = a(235986),
    r7 = a(742589),
    r4 = a(41984),
    r6 = a(181435),
    r9 = a(435736),
    r3 = a(833551),
    r5 = a(515183),
    oe = a(489277),
    ot = a(127242),
    oa = a(869014),
    on = a(528772),
    ol = a(38502),
    os = a(532624),
    oi = a(773371),
    or = a(996439),
    oo = a(350535),
    od = a(9302),
    oc = a(644434),
    ou = a(618137);
let om = {
        [z.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: z.uss.CLICK_ZONE_DEBUG,
            id: (0, ep.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...ol.A.getWidgetDefaultSettings(z.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [z.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: z.uss.PERFORMANCE_DEBUG,
            id: (0, ep.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...ol.A.getWidgetDefaultSettings(z.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    oh = {};
function op(e) {
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
        (0, r.jsxs)(aX.$n, {
            look: aX.$n.Looks.LINK,
            color: aX.$n.Colors.LINK,
            size: aX.$n.Sizes.MIN,
            onClick: function () {
                (0, a3.C)(t, () => n(!0));
            },
            className: ou.DT,
            children: ["Application Id: ", t, " ", a ? aB.intl.string(aB.t.t5VZ88) : null],
        })
    );
}
let ox = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, d.bG)([aI.Ay], () => aI.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            n = (0, d.bG)([aP.A], () => aP.A.getGameForPID(t.pid)),
            l = (0, d.bG)([aI.Ay], () => (null == a ? null : aI.Ay.getGameOverlayStatus(a)));
        return (0, r.jsxs)("div", {
            className: ou.st,
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
                        children: (0, r.jsx)(op, { id: t.applicationId }),
                    }),
                (0, r.jsxs)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, r5.wR)(t.fullscreenType)],
                }),
                (0, r.jsxs)(A.E, { variant: "text-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, r.jsxs)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, r.jsxs)("div", {
                    className: ou.st,
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
                            children: ["overlayMethod: ", (0, r5.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != l &&
                    (0, r.jsxs)("div", {
                        className: ou.st,
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
                                children: ["raw overlayMethod: ", (0, r5.gK)(l.overlayMethod)],
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
    og = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, d.cf)([oi.default], () => oi.default.getOverlayPIDStatuses()),
            n = (0, d.cf)([r3.default], () => r3.default.getTrackedGames()),
            l = (0, d.bG)([oi.default], () => oi.default.isInputLocked(t), [t]),
            s = (0, d.bG)([oi.default], () => oi.default.DEV_isInputLockedV3(t), [t]),
            i = (0, d.bG)([oi.default], () => oi.default.DEV_isInputLocked(t), [t]),
            o = (0, d.bG)([oi.default], () => oi.default.isReady(t), [t]);
        return (0, r.jsxs)("div", {
            className: ou.st,
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
function ov(e) {
    let t,
        a = ((t = Object.values((0, d.yK)([ol.A], () => ol.A.getWidgetsForLayout(oc.G)))), t.find((t) => t.type === e));
    return [
        a,
        () => {
            if (null != a) (0, r0.uv)(a.id);
            else {
                let t = om[e];
                if (null == t) return;
                let a = t(oc.G);
                (0, r0.jn)(a);
            }
        },
    ];
}
function ob(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, a5.i$)(aZ()(e), "h:mm:ss.SSS");
}
let o_ = o.memo(function (e) {
    let { pid: t, ...a } = e,
        n = (0, d.bG)([r3.default], () => {
            if (null == t) return "Unknown";
            let e = r3.default.getTrackedGameByPid(t)?.gameName;
            return null != e ? ((oh[t] = e), e) : (oh[t] ?? "Unknown");
        }, [t]);
    return (0, r.jsx)(A.E, { ...a, variant: "text-md/semibold", color: "text-strong", children: n });
});
function oj() {
    let e = (0, d.bG)([ot.A], () => ot.A.hasRenderDebugMode(r4.x7.TrackFocusPIDs)),
        t = (0, d.yK)([r3.default], () => r3.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, r.jsxs)("div", {
        className: ou.st,
        children: [
            (0, r.jsxs)("div", {
                className: ou.Iv,
                children: [
                    (0, r.jsx)(b.d, {
                        checked: e,
                        onChange: () =>
                            void r1.A.setRenderDebugMode(
                                !ot.A.hasRenderDebugMode(r4.x7.TrackFocusPIDs),
                                r4.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, r.jsx)(N.D, {
                        className: ou.LL,
                        onClick: () => r1.A.clearTrackedPids(),
                        children: (0, r.jsx)(a8.u, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(c.Ip, {
                className: S()(ou.st, ou.XG),
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
                                children: (0, r.jsx)(lT.m, {
                                    position: "left",
                                    text: n === r4.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(A.E, {
                                            variant: "text-sm/medium",
                                            color: n === r4.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, r.jsx)(o_, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                ob(t),
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
            a = (0, d.bG)([r3.default, aI.Ay], () => {
                if (null == t) return null;
                let e = r3.default.getTrackedGameByPid(t)?.fullscreenType;
                if (null != e) return e;
                let a = aI.Ay.getGameOrTransformedSubgameForPID(t);
                return a?.fullscreenType ?? lb.aI.UNKNOWN;
            }, [t]);
        return (0, r.jsxs)(A.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, r5.wR)(a) : "Unknown"],
        });
    }),
    oy = o.memo(function () {
        let e = (0, d.cf)([r3.default], () => r3.default.getTrackedGames()),
            [t, a] = o.useState({}),
            n = o.useRef(null);
        return (
            o.useEffect(
                () => (
                    (n.current = setInterval(async () => {
                        let e = aI.Ay.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, r5.E1)(a.pid, 0).then((e) => [a.pid, e, n]));
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
                    }, +nL.A.Millis.SECOND)),
                    () => clearInterval(n.current)
                ),
                [],
            ),
            (0, r.jsx)(lT.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(c.Ip, {
                        className: S()(ou.st, ou.XG),
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
                                            (0, r.jsx)(o_, { tag: "div", pid: e.pid }),
                                            (0, r.jsx)(of, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: n } = t;
                                                    return (0, r.jsx)(
                                                        A.E,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, r5.wR)(a)} @ ${ob(n)}`,
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
    oC = o.memo(function () {
        let e = (0, d.cf)([r3.default], () => r3.default.getTrackedGames()),
            t = (0, od.getPID)(),
            a = (0, d.bG)([r3.default], () => r3.default.isOverlayOOPEnabledForPid(t), [t]),
            [n, l] = (0, d.yK)([on.A], () => [on.A.enabled, on.A.keepOpen]),
            s = (0, d.bG)([oi.default], () => oi.default.getFocusedPID()),
            i = (0, d.bG)([oi.default], () => oi.default.isFocusedPidOutOfProcess());
        return (0, r.jsxs)("div", {
            className: ou.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, r.jsx)(A.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, r.jsx)(og, { pid: e.pid }, e.pid)),
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
    oE = [
        {
            mode: r4.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: r4.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: r4.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: r4.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: r4.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: r4.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: r4.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    oS = o.memo(function () {
        let [e, t] = ov(z.uss.CLICK_ZONE_DEBUG),
            [a, n] = ov(z.uss.PERFORMANCE_DEBUG),
            l = (0, d.bG)([ot.A], () => ot.A.getRenderDebugModes()),
            [s, i] = o.useState({});
        return (
            o.useEffect(() => {
                let e = setInterval(() => {
                    i({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, r.jsx)("div", {
                className: ou.st,
                children: oE.map((s) => {
                    let i =
                            s.mode === r4.x7.OverlayRafManagerForceEnabled
                                ? `${s.label} (${oa.A.getLastRAFCallbackReason()})`
                                : s.label,
                        d = () =>
                            s.mode === r4.x7.ClickZones
                                ? null != e
                                : s.mode === r4.x7.WidgetAreas
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
                                    s.mode === r4.x7.ClickZones && t(),
                                        s.mode === r4.x7.WidgetAreas && n(),
                                        (e = s.mode),
                                        r1.A.setRenderDebugMode(!a, e);
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
    oN = o.memo(function () {
        let e = (0, d.cf)([r3.default], () => r3.default.getTrackedGames()),
            t = (0, d.bG)([aI.Ay], () => aI.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(lT.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: ou.st,
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
                                                (0, r.jsx)(of, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, r.jsx)(lT.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: ou.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, r.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, r.jsx)(ox, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    oA = o.memo(function () {
        let e = (0, d.bG)([r3.default], () => r3.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            n = [
                { label: r4.V6.UNSET, value: r4.V6.UNSET, id: r4.V6.UNSET },
                { label: r4.V6.IN_PROCESS_V2, value: r4.V6.IN_PROCESS_V2, id: r4.V6.IN_PROCESS_V2 },
                { label: r4.V6.OUT_OF_PROCESS_V3, value: r4.V6.OUT_OF_PROCESS_V3, id: r4.V6.OUT_OF_PROCESS_V3 },
                {
                    label: r4.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: r4.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: r4.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, r.jsx)(x.l, {
            label: "Override the overlay render mode",
            value: t,
            options: n,
            onSelectionChange: (e) => {
                a(e), r1.A.forceRenderMode(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function ok(e) {
    let { modalProps: t, onClose: a } = e,
        [n, l] = o.useState(null);
    function s() {
        a(null);
    }
    return (0, r.jsxs)(rK.EO, {
        size: rK.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, r.jsxs)(rK.rQ, {
                align: r8.A.Align.CENTER,
                justify: r8.A.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(A.E, {
                        variant: "text-md/bold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, r.jsx)(rK.s_, { onClick: s }),
                ],
            }),
            (0, r.jsx)(rK.$m, {
                children: (0, r.jsx)("div", {
                    className: ou.st,
                    children: (0, r.jsx)(rY.f, { label: "Paste JSON Here", onChange: l, value: n ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(rK.jl, {
                children: (0, r.jsxs)(lK.e, {
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
let oD = {
    native: { label: "Native", filter: (e) => e.type === r6.ON.NativeLegacy || e.type === r6.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === r6.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === r6.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === r6.ON.OOPModule || e.type === r6.ON.LegacyModule },
};
function oT(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r6.QJ.Info;
    if (t === r6.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case r6.ON.NativeLegacy:
            return "var(--yellow-500)";
        case r6.ON.NativeOOP:
            return "var(--green-500)";
        case r6.ON.Flux:
            return "var(--brand-400)";
        case r6.ON.Renderer:
            return "var(--brand-500)";
        case r6.ON.LegacyModule:
            return "var(--yellow-300)";
        case r6.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let oI = [
    {
        key: "type",
        cellClassName: ou.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                n = ow(t);
            return (0, r.jsx)("div", {
                className: ou.g$,
                style: { color: oT(t, a) },
                children: (0, r.jsx)(n, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "name",
        cellClassName: ou.Cm,
        render(e) {
            let { name: t, type: a, logType: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(A.E, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case r6.QJ.Info:
                                    return "text-strong";
                                case r6.QJ.Warning:
                                    return "text-feedback-warning";
                                case r6.QJ.Error:
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
        cellClassName: ou.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, a5.i$)(aZ()(t), "h:mm:ss.SSS");
        },
    },
];
function ow(e) {
    switch (e) {
        case r6.ON.NativeLegacy:
            return rq.W;
        case r6.ON.NativeOOP:
            return rJ.q;
        case r6.ON.Renderer:
        case r6.ON.Flux:
            return rQ.v;
        case r6.ON.LegacyModule:
            return rZ.k;
        case r6.ON.OOPModule:
            return rX.o;
        default:
            return rZ.k;
    }
}
function oO(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let oR = ["__webpack_require__", "fn"],
    oL = ["web.js", "web.js.map"],
    oM = [
        {
            id: "details",
            name: "Details",
            group: aS.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: n, type: l, logType: s, nativeId: i, stack: o, data: d, timestamp: u, pid: m } = t,
                    h = aZ()(u),
                    p = ow(l);
                return (0, r.jsxs)(c.Ar, {
                    className: ou.bW,
                    children: [
                        (0, r.jsxs)(r7.A, {
                            className: S()(tA.jr, ou.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: oT(l, s) },
                                    className: ou.nr,
                                    children: (0, r.jsx)(p, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(r7.A.Title, {
                                    wrapperClassName: ou.qd,
                                    children: [
                                        n,
                                        " (",
                                        l,
                                        ")",
                                        (0, r.jsx)(N.D, {
                                            tag: "span",
                                            className: ou.KE,
                                            onClick: () => (0, a3.C)(n),
                                            children: (0, r.jsx)(a0.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(r7.A.Icon, {
                                    icon: a0.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, a3.C)(oO(t));
                                    },
                                }),
                                (0, r.jsx)(r7.A.Icon, { icon: a2.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(nc, {
                            className: ou.ZK,
                            children: [
                                (0, r.jsx)(nu, {
                                    name: "Timestamp",
                                    copyValue: h.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: h.toISOString(),
                                        title: (0, a5.i$)(h, "LLLL"),
                                        children: (0, a5.i$)(h, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, r.jsx)(nu, {
                                    name: "Log Type",
                                    copyValue: s,
                                    children: (0, r.jsx)("code", { children: s }),
                                }),
                                (0, r.jsx)(nu, {
                                    name: "PID",
                                    copyValue: m?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: m?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nu, {
                                    name: "Native ID",
                                    copyValue: i?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: i?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nu, {
                                    name: "Data",
                                    copyValue: oO(d),
                                    children: (0, r.jsx)("code", { children: oO(d) }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nu, {
                                        name: "Stack Trace",
                                        copyValue: o,
                                        children: (0, r.jsx)("code", {
                                            children: o.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, n, l, s] = a,
                                                        i = n.split(/[\\/]/).pop();
                                                    return oR.includes(e.trim())
                                                        ? null
                                                        : (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, r.jsx)("span", {
                                                                          className: ou.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !oL.includes(i ?? "") &&
                                                                          (0, r.jsxs)(r.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, r.jsxs)("span", {
                                                                                      className: ou.lz,
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
    oP = {
        searchType: a6.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: l } = e,
                s = [t, a, JSON.stringify(l)];
            return null != n && s.push(n), s;
        },
        throttleMs: 100,
    };
function oU() {
    let { ref: e, height: t } = (0, r2.Ay)(),
        a = (0, d.bG)([ot.A], () => ot.A.isModuleLoggingEnabled()),
        [n, l] = o.useState(a),
        [s, i] = o.useState(!1),
        [c, u] = o.useState(null),
        [m, h] = o.useState(Object.keys(oD)),
        [p, x] = (0, d.bG)([ot.A], () => ot.A.getOverlayLoggingBreadcrumbs(), [], or.D),
        [g, v] = o.useState(null),
        b = g ?? p,
        _ = null != g ? -1 : x;
    o.useEffect(() => {
        0 !== _ &&
            (s
                ? u(b.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : u(null));
    }, [s, b, _]);
    let [j, f] = o.useState(""),
        y = o.useMemo(
            () =>
                0 === _
                    ? []
                    : b.filter((e) => {
                          if (s && null != c && e.timestamp < c) return !1;
                          for (let t of m) {
                              let { filter: a } = oD[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [b, m, c, s, _],
        ),
        [C, E] = o.useState(y),
        [k, D] = o.useState(null),
        T = o.useMemo(() => b.find((e) => e.key === k), [b, k]),
        I = o.useCallback((e) => {
            E(e);
        }, []),
        { renderSelectedTab: w } = (0, aS.Ay)({ tabs: oM }, []);
    (0, a9.RT)(j, y, I, oP, [b]);
    let O = o.useCallback((e) => {
            l(e), r1.A.setModuleLogging(e);
        }, []),
        [R, L] = o.useState(!1),
        M = o.useRef(null),
        P = o.useCallback(() => {
            (0, a3.C)(JSON.stringify(y)), L(!0);
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
                (0, ek.openModal)(
                    (e) =>
                        (0, r.jsx)(ok, {
                            modalProps: e,
                            onClose: (t) => {
                                U(t), e.onClose();
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    eT.SY,
                );
            },
            [U],
        );
    return (0, r.jsxs)("div", {
        ref: e,
        className: ou.rh,
        children: [
            (0, r.jsxs)("div", {
                className: ou.st,
                children: [
                    (0, r.jsxs)("div", {
                        className: S()(ou._V, ou.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: ou.iR,
                                children: (0, r.jsx)(rN.S, { label: "Poll Native", checked: n, onChange: (e) => O(e) }),
                            }),
                            (0, r.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: ou.iR,
                                children: (0, r.jsx)(rN.S, {
                                    label: "Only Active Games",
                                    checked: s,
                                    onChange: (e) => i(e),
                                }),
                            }),
                            (0, r.jsxs)(N.D, {
                                className: ou.ny,
                                onClick: P,
                                children: [
                                    (0, r.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: R ? "Copied" : "Copy All",
                                    }),
                                    R
                                        ? (0, r.jsx)(rO.A, { size: "sm", color: eD.A.unsafe_rawColors.GREEN_330.css })
                                        : (0, r.jsx)(a0.T, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(N.D, {
                                className: ou.ny,
                                onClick: () => B(null != g),
                                children: (0, r.jsx)(A.E, {
                                    variant: "text-sm/normal",
                                    color: "currentColor",
                                    children: null != g ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: S()(ou._V, ou.XQ),
                        children: Object.entries(oD).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                N.D,
                                {
                                    className: S()(ou.pb, m.includes(t) && ou.bx),
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
                        className: ou._V,
                        children: (0, r.jsx)(a7.I, {
                            query: j,
                            onChange: f,
                            onClear: () => f(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: S()(ou.st, ou.CZ),
                children: (0, r.jsx)(tk, {
                    columns: oI,
                    data: C,
                    selectedRowKey: k ?? void 0,
                    onClickRow: (e) => D(e.key),
                }),
            }),
            null != T &&
                (0, r.jsx)(aE, {
                    className: S()(ou.st, ou.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: w({ breadcrumb: T, onClose: () => D(null) }),
                }),
        ],
    });
}
let oB = o.memo(function () {
        let e = (0, d.bG)([oe.A], () => oe.A.getPopoutInitializationStages());
        return (0, r.jsxs)("div", {
            className: ou.st,
            children: [
                (0, r.jsx)("div", {
                    className: ou.Iv,
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
    oG = o.memo(function () {
        let e = (0, d.bG)([ot.A], () => ot.A.isStateDebuggingEnabled()),
            t = (0, d.bG)([ot.A], () => ot.A.getDebuggingState());
        return (
            o.useEffect(
                () => (
                    r1.A.setStateDebugging(!0),
                    () => {
                        r1.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, r.jsxs)("div", {
                className: ou.st,
                children: [
                    (0, r.jsx)("div", {
                        className: ou.Iv,
                        children: (0, r.jsx)(b.d, {
                            checked: e,
                            onChange: () => r1.A.setStateDebugging(!e),
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
function oF() {
    return (0, r.jsx)(c.Ar, {
        children: (0, r.jsxs)("div", {
            className: S()(tA.nd, ou.rf),
            children: [
                (0, r.jsx)(oS, {}),
                (0, r.jsx)(oA, {}),
                (0, r.jsx)(oN, {}),
                (0, r.jsx)(oC, {}),
                (0, r.jsx)(oj, {}),
                (0, r.jsx)(oy, {}),
                (0, r.jsx)(oB, {}),
                (0, r.jsx)(oG, {}),
            ],
        }),
    });
}
let oV = (e) => {
        switch (e) {
            case "Disabled":
                return;
            case "False":
                return !1;
            case "True":
                return !0;
        }
    },
    o$ = (e) => (null == e ? "Disabled" : e ? "True" : "False"),
    oW = o.memo(function () {
        let e = (0, r9.wW)(),
            t = (0, d.bG)([os.Ay], () => os.Ay.getOverlayKeybind());
        return (0, r.jsxs)("div", {
            className: ou.st,
            children: [
                (0, r.jsx)(I.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
                (0, r.jsx)(I.D, { variant: "heading-md/semibold", children: "Experiment State" }),
                (0, r.jsx)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", {
                        children: JSON.stringify({ ...e, overlayKeybind: (0, oo.dI)(t.shortcut) }, void 0, 2),
                    }),
                }),
                (0, r.jsx)(I.D, { variant: "heading-md/semibold", children: "Overrides" }),
                (0, r.jsx)(x.l, {
                    label: "Overlay User Status",
                    description: "Override whether the current user was a new or existing user",
                    value: o$(e.overrideIsNewOverlayUser),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Existing user", value: "False", id: "False" },
                        { label: "New user", value: "True", id: "True" },
                    ],
                    onSelectionChange: (e) => {
                        (0, r9.sw)(oV(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(x.l, {
                    label: "Override Previous Keybind Status",
                    description: "Override whether the user's pre-experiment keybind was the default keybind",
                    value: o$(e.overrideIsUsingDefaultOverlayKeybind),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Using default keybind", value: "True", id: "True" },
                        { label: "Not using default keybind", value: "False", id: "False" },
                    ],
                    onSelectionChange: (e) => {
                        (0, r9.C3)(oV(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(I.D, { variant: "heading-md/semibold", children: "Actions" }),
                (0, r.jsx)(p.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, r9.xc)() }),
                (0, r.jsx)(p.$, {
                    size: "sm",
                    text: "Reset isUsingDefaultOverlayKeybind",
                    onClick: () => (0, r9.tM)(),
                }),
            ],
        });
    });
function oH() {
    return (0, r.jsx)(c.Ar, {
        children: (0, r.jsx)("div", { className: S()(tA.nd, ou.rf), children: (0, r.jsx)(oW, {}) }),
    });
}
function oz() {
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
            className: S()(tA.nd, ou.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: ou._V,
                    children: [
                        (0, r.jsx)(N.D, {
                            className: S()(ou.k0, "state" === e && ou.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(A.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(N.D, {
                            className: S()(ou.k0, "logging" === e && ou.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(A.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(N.D, {
                            className: S()(ou.k0, "experiments" === e && ou.a),
                            onClick: () => t("experiments"),
                            children: (0, r.jsx)(A.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, r.jsx)(oF, {}),
                "logging" === e && (0, r.jsx)(oU, {}),
                "experiments" === e && (0, r.jsx)(oH, {}),
            ],
        })
    );
}
var oK = a(488428),
    oY = a(73825),
    oq = a(323082),
    oJ = a(226991),
    oQ = a(721923),
    oZ = a(300233),
    oX = a(599941),
    o0 = a(817649),
    o1 = a(4630),
    o2 = a(44120),
    o8 = a(532794),
    o7 = a(216678),
    o4 = a(194509),
    o6 = a(761705),
    o9 = a(65738),
    o3 = a(265768);
function o5(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, oX.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, r.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(o0.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let de = function () {
    let [e, t] = o.useState(l7.pe.TIER_2),
        [a, n] = o.useState(null),
        l = (0, d.yK)([aL.A], () => aL.A.getGuildsArray()),
        [s] = (0, d.yK)([rk.A], () => [rk.A.getPremiumSubscription()]),
        i = l.map((e) => ({ id: e.id, value: e, label: e.name })),
        [u, h] = o.useState(i.length > 0 ? i[0].value : null),
        [b, _] = o.useState(""),
        [j, f] = o.useState({ plan_id: l7.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        y = "true" !== j.gift && null != s,
        [C, E] = o.useState(i.length > 0 ? i[0].value : null),
        { analyticsLocations: S } = (0, aA.Ay)(to.A.PAYMENT_FLOW_TEST_PAGE),
        [N, k] = o.useState(""),
        [T, I] = o.useState(z.dJq),
        { balance: w, isFetching: O, error: R } = (0, o6.W)(),
        { isSubmitting: L, responseMessage: M, redeemVirtualCurrency: P } = (0, o6.Q)(),
        [U, B] = o.useState(z.dJq),
        [G, F] = o.useState(""),
        [V, $] = o.useState(z.dJq),
        [W, H] = o.useState(z.dJq);
    return (0, r.jsx)(aA.f5, {
        value: S,
        children: (0, r.jsx)(c.Ip, {
            className: o3.XG,
            children: (0, r.jsxs)(D.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, r.jsxs)(D.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(x.l, {
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
                            (0, r.jsx)(o4.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: aX.XD.PRIMARY,
                                look: aX.pR.FILLED,
                            }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(D.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(x.l, {
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
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, o8.A)({ subscriptionTier: a, analyticsLocations: S }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(D.B, {
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
                                ? (0, r.jsx)(oQ.A, { guild: u, analyticsLocation: {} })
                                : (0, r.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(D.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(s3.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, r.jsxs)(D.B, {
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
                                    (0, r.jsx)(lT.m, {
                                        text: "Need Promotion Code",
                                        shouldShow: b.length < 1,
                                        children: (0, r.jsx)(p.$, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: b.length < 1,
                                            onClick: () => {
                                                window.open(z.BVt.BILLING_PROMOTION_REDEMPTION(b));
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
                                value: j.plan_id,
                                options: [
                                    { id: "tier_2", value: l7.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: l7.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: l7.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
                                ],
                                onSelectionChange: (e) => {
                                    f((t) => ({ ...t, plan_id: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(x.l, {
                                label: "Type",
                                value: j.gift,
                                options: [
                                    { id: "gift", value: "true", label: "Gift" },
                                    { id: "not_gift", value: "false", label: "Not Gift" },
                                ],
                                onSelectionChange: (e) => {
                                    f((t) => ({ ...t, gift: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        ],
                    }),
                    (0, r.jsx)(lT.m, {
                        text: "Already subscribed",
                        shouldShow: y,
                        children: (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: y,
                            onClick: () => {
                                window.open(z.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + oK.stringify({ ...j }));
                            },
                        }),
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(m.n, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, r.jsxs)(D.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(A.E, {
                                        variant: "text-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    O
                                        ? (0, r.jsx)("div", {
                                              className: o3.wG,
                                              children: (0, r.jsx)(eX.y, { type: eX.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: o3.dB,
                                              children: [
                                                  null !== R &&
                                                      (0, r.jsxs)(A.E, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              R.message,
                                                          ],
                                                      }),
                                                  (0, r.jsx)(o9.Gy, {
                                                      balance: w ?? 0,
                                                      balanceWidgetMode: o9.k7.SELECTED,
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
                                onClick: () => P(U, (0, ep.A)()),
                            }),
                            null != M && (0, r.jsx)(A.E, { variant: "text-sm/normal", children: M }),
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
                            (0, r.jsx)(oZ.H, {
                                guildId: C?.id,
                                children: (0, r.jsx)(o5, { selectedGuildForGuildSub: C }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(D.B, {
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
                                        value: T,
                                        onChange: (e) => I(e),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, o1.openIAPPurchaseModal)({
                                        applicationId: N,
                                        skuId: T,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: z.liQ.IN_APP },
                                        context: z.BRT.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsx)(D.B, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, r.jsx)(m.n, {
                            label: "Standard Payment Modal Test",
                            children: (0, r.jsxs)(D.B, {
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
                                            (0, o7.A)({
                                                applicationId: G,
                                                skuId: V,
                                                analyticsLocations: S,
                                                checkoutFlow: oJ.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsxs)(D.B, {
                        direction: "horizontal",
                        align: "end",
                        gap: 8,
                        children: [
                            (0, r.jsx)(g.k, {
                                label: "Collectibles Payment Modal Test",
                                placeholder: "SKU ID",
                                value: W,
                                onChange: (e) => H(e),
                            }),
                            (0, r.jsx)(p.$, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () => (0, o2.A)({ skuId: W, analyticsLocations: S }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(v.c, {}),
                    (0, r.jsx)(m.n, {
                        label: "Helpers",
                        children: (0, r.jsxs)(D.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, oY.YG)(),
                                }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, oq.uZ)(),
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
                            onClick: () => (0, n8.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var dt = a(219887),
    da = a(459357),
    dn = a(885180),
    dl = a(742810),
    ds = a(500380),
    di = a(102609),
    dr = a(710195),
    dd = a(295405),
    dc = a(188976);
let du = [
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
    dm = {
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
    dh = [
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
    dp = {
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
    dx = [
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
    dg = {
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
function dv() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        [i, d] = o.useState(null),
        [u, m] = o.useState(null),
        [h, g] = o.useState("pm_card_us"),
        [v, b] = o.useState(!1),
        _ = Object.values((0, tr.bG)([dd.A], () => dd.A.paymentSources)),
        j = dm[e],
        f = async () => {
            let t = h;
            "" === t && (t = "pm_card_us"),
                await nO.Bo.post({
                    url: "/debug/payment-source",
                    body: { token: t, address: "US" === e ? l : "CA" === e ? u : null },
                    rejectWithError: !1,
                }),
                await (0, oq.$o)();
        },
        y = async () => {
            await nO.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }), await (0, oq.$o)();
        },
        C = async () => {
            await nO.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }), window.location.reload();
        };
    return (
        o.useEffect(() => {
            (0, oq.$o)();
        }, []),
        (0, r.jsx)(c.Ip, {
            className: tA.nd,
            children: (0, r.jsxs)("div", {
                className: st.l$,
                children: [
                    (0, r.jsxs)(A.E, {
                        style: { marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, r.jsxs)("div", {
                        className: st.Uo,
                        children: [
                            (0, r.jsx)(lx.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: du
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, r.jsx)("img", {
                                                alt: "",
                                                className: dc.bI,
                                                src: (0, ds.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: (e) => {
                                    t(e), g(dm[e][0].value), b(1 === dm[e].length);
                                },
                            }),
                            "US" === e &&
                                (0, r.jsx)(x.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: dh.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        n(e), s(dp[e] ?? null);
                                    },
                                }),
                            "CA" === e &&
                                (0, r.jsx)(x.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: i,
                                    options: dx.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        d(e), m(dg[e] ?? null);
                                    },
                                }),
                            (0, r.jsx)(x.l, {
                                selectionMode: "single",
                                label: "Card Token",
                                hideLabel: !0,
                                value: h,
                                options: j.map((e) => {
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
                                onClick: f,
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
                    (0, r.jsx)(A.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Generate Gift Card PIN",
                    }),
                    (0, r.jsx)(dN, {}),
                    (0, r.jsx)(A.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Experiment Overrides",
                    }),
                    (0, r.jsx)(dC, {}),
                    (0, r.jsx)(A.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Existing Payment Sources",
                    }),
                    _.map((e) => (0, r.jsx)(dA, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let db = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    d_ = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) — Legacy checkout" },
        { id: "1", value: "1", label: "Treatment (1) — Unified checkout" },
    ],
    dj = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) — Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) — Gift cards enabled" },
    ],
    df = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) — Payment elements disabled" },
        { id: "1", value: "1", label: "Treatment (1) — Payment elements enabled" },
    ];
function dy(e) {
    let { experimentName: t, options: a = db } = e,
        n = (0, tr.bG)([dr.A, nt.default], () => {
            let e = nt.default.getId(),
                a = dr.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        l = o.useCallback(
            (e) => {
                (0, di.t$)(di.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, r.jsx)(x.l, { selectionMode: "single", label: t, value: n, options: [...a], onSelectionChange: l });
}
function dC() {
    return (0, r.jsxs)(D.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(dy, { experimentName: dl.W2.definition.name, options: d_ }),
            (0, r.jsx)(dy, { experimentName: dl._$.definition.name, options: d_ }),
            (0, r.jsx)(dy, { experimentName: da.A.definition.name, options: dj }),
            (0, r.jsx)(dy, { experimentName: dn._.definition.name, options: df }),
        ],
    });
}
let dE = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    dS = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function dN() {
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
                    let t = await nO.Bo.post({
                        url: "/billing/gift-card/create-on-demand-pin",
                        body: { country: e, currency: dS[e], amount: v },
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
    return (0, r.jsxs)(D.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsxs)(D.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, r.jsx)(x.l, {
                        selectionMode: "single",
                        label: "Gift Card Country",
                        value: e,
                        options: dE,
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
                (0, r.jsxs)(D.B, {
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
            null != m && (0, r.jsx)(k.w, { type: "critical", children: m }),
        ],
    });
}
function dA(e) {
    let { paymentSource: t } = e,
        a = async () => {
            await nO.Bo.patch({ url: z.Rsh.BILLING_PAYMENT_SOURCE(t.id), body: { default: !0 }, rejectWithError: !1 }),
                await (0, oq.$o)();
        };
    return (0, r.jsxs)("div", {
        className: st.bd,
        children: [
            (0, r.jsx)(dt.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, r.jsx)("img", { alt: t.country, className: dc.bI, src: (0, ds.t)(t.country) }),
            t.isDefault
                ? (0, r.jsx)(A.E, { variant: "text-sm/medium", children: "(Default)" })
                : (0, r.jsx)(p.$, { variant: "secondary", size: "sm", text: "Set as Default", onClick: a }),
        ],
    });
}
var dk = a(706712),
    dD = a(367727),
    dT = a(845886);
function dI() {
    return (0, r.jsx)(c.Ip, { className: dT.kL, children: (0, r.jsx)(dw, {}) });
}
function dw() {
    let e = o.useCallback(() => {
            (0, li._N)(nY.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, dD.FZ)(nY.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(I.D, { className: dT.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, r.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, r.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, r.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, r.jsx)("div", {
                className: dT.PW,
                children: (0, r.jsx)(p.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var dO = a(136722),
    dR = a(576705),
    dL = a(309010),
    dM = a(558393),
    dP = a(719366),
    dU = a(842681);
function dB(e) {
    let { title: t, can: a } = e,
        n = a ? rO.A : M.P,
        l = (0, r.jsx)("div", {
            className: S()(dU.v_, a ? dU.uU : dU.Ss),
            children: (0, r.jsx)(n, { className: dU.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: dU.z8,
        children: [
            l,
            (0, r.jsx)("div", {
                className: dU.rv,
                children: (0, r.jsx)(A.E, { variant: "text-md/normal", children: t }),
            }),
        ],
    });
}
function dG() {
    let e = (0, d.bG)([dL.A], () => dL.A.getChannelId()),
        t = (0, d.bG)([aM.A], () => aM.A.getGuildId()),
        a = (0, d.bG)([tX.A], () => tX.A.getChannel(e)),
        n = (0, d.bG)([aL.A], () => aL.A.getGuild(t)),
        l = (0, d.bG)([dR.A], () => dR.A.computePermissions(a)),
        s = (0, d.bG)([dR.A], () => dR.A.computePermissions(n)),
        i = (0, tZ.Ay)(a, !0),
        o = null != a ? (0, dP.mW)(a, !1) : null,
        c = null != n ? dM.A.getGuildPermissionSpecMap(n) : null,
        u = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = dO.zy(l, a);
            return (0, r.jsx)(dB, { title: t, can: n }, t);
        }),
        m = Object.values(c ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = dO.zy(s, a);
            return (0, r.jsx)(dB, { title: t, can: n }, t);
        });
    return (0, r.jsx)("div", {
        className: S()(tA.nd, dU.nd),
        children: (0, r.jsxs)("div", {
            className: dU.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: dU.uW,
                    children: [
                        (0, r.jsx)(I.D, {
                            variant: "heading-md/semibold",
                            children: null != i ? `Permissions in ${i}` : "No channel selected",
                        }),
                        u,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: dU.uW,
                    children: [
                        (0, r.jsx)(I.D, {
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
var dF = a(873298),
    dV = a(775602),
    d$ = a(363195),
    dW = a(253932),
    dH = a(631670),
    dz = a(817281),
    dK = a(955572),
    dY = a(56348),
    dq = a(385803),
    dJ = a(381941);
let dQ = [z.NJ8.DARK, z.NJ8.LIGHT, z.NJ8.DARKER, z.NJ8.MIDNIGHT],
    dZ = [dF.NS.COMPACT, dF.NS.COZY, dF.NS.DEFAULT];
function dX(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function d0() {
    let e,
        t =
            ((e = V.default.getCurrentUser()),
            rP.Ay.canUseClientThemes(e) ? Object.keys(dq.ag).map((e) => Number(e)) : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                n = dX(a);
            if (null != n) {
                let t = dq.ag[n];
                e = t?.theme ?? z.NJ8.DARK;
            } else e = dX([z.NJ8.DARK, z.NJ8.DARKER, z.NJ8.MIDNIGHT]);
            await dz.u_(
                { theme: e, backgroundGradientPresetId: n ?? void 0, customUserThemeSettings: void 0 },
                li.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = dX(dQ);
            await dz.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                li.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function d1() {
    let e = tc.A.purchases,
        t = (0, ev.x9)(e),
        a = (0, ev.$W)(e),
        n = t.length > 0,
        l = a.length > 0;
    if (n || l)
        try {
            let e = {};
            n && (e.avatarDecoration = dX([...t, null])), l && (e.nameplate = dX([...a, null])), (0, e4.p)(e);
            let s = e6.A.getPendingChanges(),
                i = (0, dY.Sk)(s);
            await (0, dH._L)(i).finally(dH.pZ);
        } catch (e) {}
}
function d2() {
    try {
        let e = dX(z.hH7.FONT_SIZES);
        (0, dK.XS)(e);
        let t = dX(dJ.qh);
        (0, dK.AC)(t);
        let a = dX(dZ);
        dW.Xi.updateSetting(a);
    } catch (e) {}
}
function d8() {
    (0, e5.Bf)();
    let e = (0, d.bG)([V.default], () => V.default.getCurrentUser()),
        t = dW.eh.useSetting(),
        a = (0, d.bG)([d$.A], () => d$.A.theme),
        n = t.backgroundGradientPresetId,
        l = (0, d.bG)([tc.A], () => tc.A.purchases),
        s = (0, ev.x9)(l),
        i = (0, ev.$W)(l),
        c = e?.avatarDecoration?.skuId,
        u = e?.collectibles?.nameplate?.skuId,
        m = null != c ? (s.find((e) => e.skuId === c) ?? null) : null,
        h = null != u ? (i.find((e) => e.skuId === u) ?? null) : null,
        x = (0, d.bG)([td.A], () => td.A.getProduct(m?.skuId)),
        g = (0, d.bG)([td.A], () => td.A.getProduct(h?.skuId)),
        v = (0, d.bG)([dV.A], () => dV.A.fontSize),
        b = (0, d.bG)([dV.A], () => dV.A.messageGroupSpacing),
        _ = dW.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = V.default.getCurrentUser(),
                t = dW.eh.getSetting(),
                a = tc.A.purchases,
                n = (0, ev.x9)(a),
                l = (0, ev.$W)(a),
                s = d$.A.theme,
                i = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (n.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (l.find((e) => e.skuId === o) ?? null) : null,
                u = dV.A.fontSize,
                m = dV.A.messageGroupSpacing,
                h = dW.Xi.getSetting();
            return () => {
                try {
                    dz.u_(
                        { theme: s, backgroundGradientPresetId: i ?? void 0, customUserThemeSettings: void 0 },
                        li.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, e4.p)({ avatarDecoration: d, nameplate: c });
                    let e = e6.A.getPendingChanges(),
                        t = (0, dY.Sk)(e);
                    (0, dH._L)(t).finally(dH.pZ), (0, dK.XS)(u), (0, dK.AC)(m), dW.Xi.updateSetting(h);
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: lu.kL,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(I.D, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, r.jsx)(A.E, {
                            variant: "text-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: d0 }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: d1,
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: d2,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(I.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, r.jsxs)(A.E, { variant: "text-md/normal", children: ["Theme: ", a] }),
                        (0, r.jsxs)(A.E, {
                            variant: "text-md/normal",
                            children: ["Client Theme ID:", " ", null != n ? dq.ag[n]?.getName() : "None"],
                        }),
                        (0, r.jsxs)(A.E, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", x?.name ?? "None"],
                        }),
                        (0, r.jsxs)(A.E, { variant: "text-md/normal", children: ["Nameplate: ", g?.name ?? "None"] }),
                        (0, r.jsxs)(A.E, { variant: "text-md/normal", children: ["Font Size: ", v, "px"] }),
                        (0, r.jsxs)(A.E, { variant: "text-md/normal", children: ["Message Spacing: ", b] }),
                        (0, r.jsxs)(A.E, {
                            variant: "text-md/normal",
                            children: [
                                "UI Density: ",
                                _,
                                " (",
                                (function (e) {
                                    switch (e) {
                                        case dF.NS.COMPACT:
                                            return "Compact";
                                        case dF.NS.COZY:
                                            return "Cozy";
                                        case dF.NS.DEFAULT:
                                            return "Default";
                                        case dF.NS.RESPONSIVE:
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
var d7 = a(885574),
    d4 = a(311678),
    d6 = a(508274),
    d9 = a(837529);
let d3 = [5793266, 2303016],
    d5 = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function ce() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: n } = (0, d9.Zt)(),
        l = (0, J.Ay)(),
        s = (0, d.bG)([n5.A], () => n5.A.settings.appearance?.clientThemeSettings),
        i =
            s?.customUserThemeSettings != null &&
            null != s.customUserThemeSettings.colors &&
            s.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, dz.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), n(null));
    }
    return (0, r.jsx)(c.Ar, {
        children: (0, r.jsxs)(D.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(d4.N, {
                            collapsibleContent: (0, r.jsxs)(D.B, {
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
                                return (0, r.jsx)(p.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "What is this?",
                                    icon: d7.m,
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
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: d3 }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(lK.e, {
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
                                  options: d5,
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
                                                onClick: () => t({ ...e, themeColors: d3 }),
                                            }),
                                            (0, r.jsxs)(D.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(A.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, r.jsx)(d6.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[0] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [a, e.themeColors?.[1] ?? null] }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)(D.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(A.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Secondary Color",
                                                    }),
                                                    (0, r.jsx)(d6.VN, {
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
                                  : (0, r.jsxs)(D.B, {
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(x.l, {
                                                label: "Theme Type",
                                                selectionMode: "single",
                                                value: e.themeType,
                                                options: Object.values(z.NJ8).map((e) => ({
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
                                                                    (0, dz.u_)({ theme: "system" });
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
var ct = a(141931),
    ca = a(306173),
    cn = a(366853),
    cl = a(237984),
    cs = a(43203),
    ci = a(349435),
    cr = a(674272),
    co = a(407186),
    cd = a(10094),
    cc = a(683760);
let cu = () => {
    let e = (0, d.bG)([V.default], () => V.default.getCurrentUser()),
        t = (0, d.bG)([cc.A], () => {
            let e = cc.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, d.bG)([cc.A], () => cc.A.getPremiumTypeOverride());
    return (0, r.jsxs)(D.B, {
        gap: 16,
        children: [
            (0, r.jsx)(x.l, {
                label: "Override Client-Side Premium Type",
                options: l7.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, cd.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(lg.Q, {
                onClick: () => {
                    (0, cd.O)(l7.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(s1.J, {
                label: "Override Client-Side Account Created At Date",
                value: aZ()(t),
                onSelect: (e) => {
                    var t;
                    return (t = e.toISOString()), void (0, cd.Y)(new Date(t));
                },
            }),
            (0, r.jsx)(lg.Q, { onClick: () => (0, cd.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
};
var cm = a(19575),
    ch = a(327337),
    cp = a(431804),
    cx = a(865349),
    cg = a(818050);
function cv() {
    throw Error("Send help");
}
function cb() {
    let e = dW.j0.useSetting(),
        [t, n] = o.useState(!1);
    return t
        ? {}
        : (0, r.jsxs)(c.Ip, {
              children: [
                  (0, r.jsx)("div", { className: S()(cx.N, cg.SX), children: (0, r.jsx)(cu, {}) }),
                  (0, r.jsx)("div", {
                      className: S()(cx.N, cg.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, cr.A)({ source: cp.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: S()(cx.N, cg.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = dL.A.getChannelId() ?? "21154681615024128"),
                                  void (0, ek.openModalLazy)(
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
                                                  warningType: ci._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: ch.V },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: S()(cx.N, cg.QB),
                      children: (0, r.jsx)(p.$, {
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
                      className: S()(cx.N, cg.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, cs.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: S()(cx.N, cg.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: ca.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: S()(cx.N, cg.QB),
                      children: (0, r.jsx)(p.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = cn.A.getSocket();
                              tC.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: S()(cx.N, cg.QB),
                      children: (0, r.jsx)(b.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => dW.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: S()(cx.N, cg.QB),
                      children: [
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, cl.o)(),
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  cn.A.getSocket().close(), cn.A.getSocket().connect();
                              },
                          }),
                          (0, r.jsx)(p.$, {
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
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Show TOTP Success",
                              onClick: () => (0, co.sy)(!0),
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: () => {
                                  nO.Bo.post({ url: z.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: S()(cx.N, cg.QB),
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
                              onSelectionChange: (e) => null != e && cm.Ay.crash(e),
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
                                      value: ct.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: ct.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: ct.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void cm.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, r.jsx)(p.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => n(!0),
                          }),
                          (0, r.jsx)(p.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: cv }),
                      ],
                  }),
              ],
          });
}
var c_ = a(593924),
    cj = a(653887),
    cf = a(799226);
function cy() {
    let e = Object.keys(c_).map((e) => (0, r.jsx)(cS, { riveName: e }, e));
    return (0, r.jsx)(c.Ar, {
        style: { maxHeight: "100%" },
        children: (0, r.jsxs)(D.B, {
            gap: 24,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsx)(I.D, { variant: "heading-lg/medium", children: "Rive Inspector" }),
                (0, r.jsx)(A.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, r.jsx)(cC, {}),
                (0, r.jsx)(I.D, { variant: "heading-lg/medium", children: "Rive Overrides" }),
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
function cC() {
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
    return (0, r.jsxs)(D.B, {
        gap: 16,
        children: [
            (0, r.jsx)(cS, { riveName: "Rive inspector", onRiveLoad: b }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(cj._, { src: e, ref: c, onLoad: x, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, r.jsx)(eX.y, {}) : null,
            null != a &&
                (0, r.jsxs)(D.B, {
                    children: [
                        (0, r.jsxs)(D.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(I.D, { variant: "heading-lg/medium", children: "Dimensions" }),
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
                        (0, r.jsxs)(D.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(I.D, { variant: "heading-lg/medium", children: "Data Binding" }),
                                Object.keys(l ?? {}).map((e) =>
                                    (0, r.jsx)(
                                        cE,
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
function cE(e) {
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
                  ? (0, r.jsx)(lx.Z, {
                        selectionMode: "single",
                        label: t,
                        value: n,
                        onSelectionChange: (e) => l(e),
                        closeOnSelect: !0,
                        placeholder: "Select a color...",
                        options: Object.entries(eD.A.colors).map((e) => {
                            let [t, a] = e;
                            return { label: t, value: a, id: t };
                        }),
                    })
                  : "artboard" === a
                    ? (0, r.jsx)(lx.Z, {
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
function cS(e) {
    let { riveName: t, onRiveLoad: a } = e,
        n = c_[t]?.riveSrc,
        l = null == n,
        s = o.useRef(null),
        i = (0, cf.Gy)(n);
    return (0, r.jsxs)(
        D.B,
        {
            gap: 8,
            children: [
                (0, r.jsx)("label", { children: t }),
                (0, r.jsxs)(D.B, {
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
                        (0, r.jsx)(eS.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: () => {
                                null != s.current && (s.current.value = ""),
                                    null != n && (0, cf.DS)(n, null),
                                    a?.(null);
                            },
                            icon: a8.u,
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
var cN = a(290136),
    cA = a(106236),
    ck = a(629584),
    cD = a(600239),
    cT = a(940622),
    cI = a(961895),
    cw = a(343991),
    cO = a(699666);
let cR = () => {
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
            { modalKey: cw.D },
        );
    },
    cL = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    cM = (e) => {
        let { className: t, onDrop: a, children: n } = e,
            [l, s] = o.useState(!1),
            i = o.useRef(null),
            d = o.useCallback((e) => {
                cL(e), s(!0), (0, ek.closeModal)(cw.D);
            }, []),
            c = o.useCallback((e) => {
                cL(e);
                let t = i.current,
                    a = e.relatedTarget;
                (null != a && (null == t || t.contains(a))) || s(!1);
            }, []),
            u = o.useCallback(
                async (e) => {
                    cL(e), s(!1);
                    let t = e.dataTransfer;
                    if (null == t) return void cR();
                    let n = await Promise.all(
                        Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry()),
                    ).then((e) => e.filter((e) => null != e));
                    n.length > 0 ? a(n) : cR();
                },
                [a],
            );
        return (0, r.jsxs)("div", {
            ref: i,
            className: S()(t, cO.iE),
            onDragEnter: d,
            onDragOver: cL,
            onDragLeave: c,
            onDrop: u,
            children: [
                n,
                l &&
                    (0, r.jsx)("div", {
                        className: cO.d2,
                        children: (0, r.jsxs)("div", {
                            className: cO.vW,
                            children: [
                                (0, r.jsx)(cI.A, { icons: el.ir }),
                                (0, r.jsx)(I.D, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
                                (0, r.jsxs)("div", {
                                    className: cO.GA,
                                    children: [
                                        (0, r.jsx)(A.E, {
                                            variant: "text-sm/normal",
                                            children: "Drop file(s) into this panel to preview Shop assets!",
                                        }),
                                        (0, r.jsxs)(A.E, {
                                            variant: "text-sm/normal",
                                            children: [
                                                "Click",
                                                (0, r.jsx)(cN.c, {
                                                    className: cO.q4,
                                                    size: "xs",
                                                    color: eD.A.colors.TEXT_DEFAULT,
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
    cP = new Set([
        e_.RN.HERO_BANNER_STATIC,
        e_.RN.HERO_LOGO,
        e_.RN.PDP_BACKGROUND,
        e_.RN.LOGO,
        e_.RN.MOBILE_BANNER,
        e_.RN.MOBILE_BACKGROUND,
    ]),
    cU = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    cB = { max: 5e6, warn: 2e6 },
    cG = { max: 3e6, warn: 1e6 },
    cF = { max: 2e6, warn: 1e6 },
    cV = { max: 1e6, warn: 5e5 },
    c$ = { max: 25e4, warn: 5e4 },
    cW = {
        [e_.Jn.PROFILE_EFFECT]: cB,
        [e_.Jn.AVATAR_DECORATION]: cG,
        [e_.RN.HERO_BANNER_ANIMATED]: cB,
        [e_.RN.HERO_BANNER_RIVE]: cB,
        [e_.RN.CATALOG_BANNER_RIVE]: cB,
        [e_.RN.SHOP_BUTTON_BG_HOVER]: cG,
        [e_.RN.SHOP_BUTTON_BG_HOVER_DARK]: cG,
        [e_.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: cG,
        [e_.RN.SHOP_BUTTON_BG_RESTING]: cG,
        [e_.RN.SHOP_BUTTON_BG_RESTING_DARK]: cG,
        [e_.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: cG,
        [e_.RN.HERO_BANNER_STATIC]: cF,
        [e_.RN.UPSELL_BANNER]: cV,
        [e_.RN.UPSELL_BANNER_POPOUT]: c$,
        [e_.RN.MOBILE_BANNER]: cV,
        [e_.RN.MOBILE_BACKGROUND]: c$,
        [e_.RN.MOBILE_HERO]: cV,
        [e_.RN.PDP_BACKGROUND]: c$,
        [e_.RN.LOGO]: c$,
        [e_.RN.TAB_TOOLTIP]: c$,
    },
    cH = async (e) => {
        let t = Object.values(e_.Kx),
            a = new Set(),
            n = e.createReader();
        for (let e of await new Promise((e) => n.readEntries(e))) e.isDirectory && t.includes(e.name) && a.add(e.name);
        return t.filter((e) => !a.has(e));
    },
    cz = (e) => {
        let { names: t, addError: a } = e,
            n = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
            l = t.filter((e) => !n.test(e));
        l.length > 0 && a("File names must be in lowercase snake case", l);
    },
    cK = (e, t, a, n) => {
        let l = t.size,
            s = l > 1e6 ? `${(l / 1e6).toFixed(2)}MB` : `${(l / 1e3).toFixed(2)}KB`,
            i = `${t.name} - ${s}`;
        if (l > e.max) {
            let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
            a("Files exceed the recommended size limit - make sure they are optimized!", [`${i} (max: ${t})`]);
        } else l > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [`${i}`]);
    },
    cY = (e, t, a, n) => {
        let l = cW[e];
        if (null != l) for (let e of t) e.name.endsWith(".txt") || cK(l, e, a, n);
    },
    cq = (e) => {
        let t = e_.aL[e];
        return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
    };
var cJ = a(981388);
let cQ = o.createContext({ setDropHandler: () => {} }),
    cZ = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    cX = { id: "none", label: "[none selected]", value: null },
    c0 = () => {
        (0, ek.hasModalOpen)(cD.k)
            ? (0, ek.closeModal)(cD.k)
            : (0, ek.openModalLazy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: cD.k, onCloseRequest: () => (0, ek.closeModal)(cD.k) },
              );
    },
    c1 = () => {
        (0, ek.hasModalOpen)(cD.g)
            ? (0, ek.closeModal)(cD.g)
            : (0, ek.openModalLazy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: cD.g, onCloseRequest: () => (0, ek.closeModal)(cD.g) },
              );
    },
    c2 = () => {
        let e = (0, ej.pF)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, cT.JE)(),
            n = o.useMemo(() => [cX, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
        return (0, r.jsxs)("div", {
            className: cJ.kO,
            children: [
                (0, r.jsx)(tQ.h, { size: 16 }),
                (0, r.jsxs)("div", {
                    className: cJ.wR,
                    children: [
                        (0, r.jsx)(I.D, { variant: "heading-md/bold", children: "Preview Profile Effect" }),
                        (0, r.jsx)(eS.K, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: c1,
                            icon: cN.c,
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
    c8 = () => {
        let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, cT.JE)(),
            { avatarDecorationAssets: a } = (0, cT.NE)(),
            n = o.useMemo(() => a.map((e) => ({ id: e.name, label: e.name, value: e.name })), [a]);
        return 0 === a.length
            ? null
            : (0, r.jsxs)("div", {
                  className: cJ.kO,
                  children: [
                      (0, r.jsx)(tQ.h, { size: 16 }),
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
    c7 = new Set([e_.RN.HERO_BANNER_STATIC, e_.RN.HERO_BANNER_ANIMATED, e_.RN.HERO_BANNER_RIVE]),
    c4 = (e) => {
        let { clearAssets: t, clearIgnoredFiles: a } = e,
            { collectionAssets: n } = (0, cT.NE)(),
            {
                deleteCollectionAsset: l,
                clearAssets: s,
                heroLogoMaxHeight: i,
                setHeroLogoMaxHeight: d,
                heroResponsive: c,
                setHeroResponsive: u,
            } = (0, cT.JE)(),
            m = o.useMemo(() => Object.values(n).map((e) => ({ label: e.name, value: e.type })), [n]),
            h = m.some((e) => e.value === e_.RN.HERO_LOGO),
            x = m.some((e) => c7.has(e.value)),
            g = o.useCallback((e) => l(e), [l]),
            v = o.useCallback(() => {
                s(), t(), a();
            }, [s, t, a]);
        return 0 === m.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(tQ.h, { size: 16 }),
                      (h || x) &&
                          (0, r.jsxs)("div", {
                              className: cJ.v7,
                              children: [
                                  h &&
                                      (0, r.jsxs)("div", {
                                          className: cJ.cj,
                                          children: [
                                              (0, r.jsx)(A.E, {
                                                  variant: "text-md/normal",
                                                  className: cJ.Me,
                                                  children: "Logo size",
                                              }),
                                              (0, r.jsx)(cA.A, {
                                                  className: cJ.TQ,
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
                                  x &&
                                      (0, r.jsxs)("div", {
                                          className: cJ.sy,
                                          children: [
                                              (0, r.jsx)(b.d, { checked: c, onChange: u }),
                                              (0, r.jsx)(A.E, {
                                                  variant: "text-md/normal",
                                                  children: "Responsive Hero",
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                      (0, r.jsx)(tQ.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: cJ.wR,
                          children: [
                              (0, r.jsx)(I.D, { variant: "heading-lg/bold", children: "Uploaded Assets" }),
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
                                      className: cJ._0,
                                      children: [
                                          (0, r.jsx)(eS.K, {
                                              variant: "icon-only",
                                              size: "sm",
                                              onClick: () => g(e.value),
                                              icon: M.P,
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
    c6 = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
        return 0 === t.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(tQ.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: cJ.wR,
                          children: [
                              (0, r.jsx)(I.D, { variant: "heading-lg/bold", children: "Ignored Files" }),
                              (0, r.jsx)(p.$, { variant: "primary", size: "sm", onClick: a, text: "Clear" }),
                          ],
                      }),
                      (0, r.jsx)("ul", {
                          children: t.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      className: cJ.yk,
                                      children: (0, r.jsx)(A.E, { variant: "text-md/normal", children: e }),
                                  },
                                  `${e}-${t}`,
                              ),
                          ),
                      }),
                  ],
              });
    },
    c9 = () => {
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
                                let n = await cH(t);
                                if (n.length > 0) return void i("Missing required directories", n);
                                (a = await (0, e_.eg)([t])),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        for (let e of t.collectionFiles) {
                                            let t = (0, e_.pd)(e),
                                                l = null != t ? cW[t] : null;
                                            null != l && cK(l, e, a, n);
                                        }
                                        cz({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                        let l = new Set(
                                                t.collectionFiles.map((e) => (0, e_.pd)(e)).filter((e) => null != e),
                                            ),
                                            s = Array.from(cP)
                                                .filter((e) => !l.has(e))
                                                .map(cq);
                                        s.length > 0 && a("Missing required files", s);
                                        let i = Object.values(e_.RN)
                                            .filter((e) => !cP.has(e))
                                            .filter((e) => !l.has(e))
                                            .map(cq);
                                        i.length > 0 && n("Missing optional assets", i);
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        cz({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                            Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                                let [t, l] = e,
                                                    s = l.map((e) => e.name);
                                                cz({
                                                    names: s.map((e) => {
                                                        let t = e.indexOf("-");
                                                        return e.substring(0, t > 0 ? t : e.length);
                                                    }),
                                                    addError: a,
                                                }),
                                                    cY(e_.Jn.PROFILE_EFFECT, l, a, n);
                                                let i = cU
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
                                                        (e) => !cU.some((t) => e.startsWith(t)) && !e.endsWith(".txt"),
                                                    )
                                                    .map((e) => `${t}/${e}`);
                                                r.length > 0 && n("Contains unrecognized files", r);
                                            });
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        cz({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                            cY(e_.Jn.AVATAR_DECORATION, t.avatarDecorationFiles, a, n);
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
            { setDropHandler: u } = o.useContext(cQ),
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
                              className: cJ._f,
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
                                  (0, r.jsx)(p.$, { variant: "primary", size: "sm", onClick: t, text: "Reset" }),
                              ],
                          })
                        : (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Drop asset folder to validate." }),
                    (0, r.jsx)(tQ.h, { size: 16 }),
                    d &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(I.D, { variant: "heading-lg/bold", children: "Errors" }),
                                (0, r.jsx)(tQ.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: cJ.ck,
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
                                                            className: cJ.ck,
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
                                (0, r.jsx)(I.D, { variant: "heading-lg/bold", children: "Warnings" }),
                                (0, r.jsx)(tQ.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: cJ.ck,
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
                                                            className: cJ.ck,
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
    c3 = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, cT.JE)(),
            { ignoredFilenames: n, clearAssets: l, clearIgnoredFilenames: s, processAndUpsertAssets: i } = (0, e_.ds)(),
            { setDropHandler: d } = o.useContext(cQ),
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
                        className: cJ.sy,
                        children: [
                            (0, r.jsx)(b.d, { checked: e, onChange: (e) => t(e) }),
                            (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Enable Preview" }),
                            (0, r.jsx)(eS.K, {
                                variant: "icon-only",
                                size: "sm",
                                onClick: c0,
                                icon: cN.c,
                                "aria-label": "Open preview instructions",
                            }),
                        ],
                    }),
                    (0, r.jsx)(c2, {}),
                    (0, r.jsx)(c8, {}),
                    (0, r.jsx)(c4, { clearAssets: l, clearIgnoredFiles: s }),
                    (0, r.jsx)(c6, { ignoredFiles: n, handleClearIgnoredFiles: s }),
                ],
            })
        );
    },
    c5 = () => {
        let [e, t] = o.useState("preview");
        return (0, r.jsxs)("div", {
            className: cJ.kL,
            children: [
                (0, r.jsx)(ck.I, {
                    options: cZ,
                    value: e,
                    onChange: (e) => {
                        let { value: a } = e;
                        return t(a);
                    },
                    className: cJ.Vj,
                    optionClassName: cJ.UK,
                }),
                (0, r.jsx)(tQ.h, { size: 8 }),
                "preview" === e && (0, r.jsx)(c3, {}),
                "validate" === e && (0, r.jsx)(c9, {}),
                (0, r.jsx)(tQ.h, { size: 16 }),
            ],
        });
    },
    ue = (e) => {
        let { children: t } = e,
            [a, n] = o.useState(() => () => {}),
            l = o.useMemo(() => ({ setDropHandler: (e) => n(() => e) }), []);
        return (0, r.jsx)(cQ.Provider, { value: l, children: (0, r.jsx)(cM, { onDrop: a, children: t }) });
    };
var ut = a(663803),
    ua = a(693477),
    un = a(385815);
let ul = () => {
    let e = (0, d.bG)([td.A], () => td.A.skipNumCategories);
    return (0, r.jsxs)("div", {
        className: un.k,
        children: [
            (0, r.jsx)(A.E, { variant: "text-md/normal", children: "Hide first # of categories" }),
            (0, r.jsx)(ut.l, {
                value: e,
                onChange: (e) => {
                    (0, ua.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
};
var us =
        (((n = {}).DEFAULT = "default"),
        (n.DEFAULT_WITH_ORB_SHELF = "default_with_orb_shelf"),
        (n.ORB_TAB = "orb_tab"),
        (n.FRAMES = "frames"),
        (n.FRAMES_PINNED = "frames_pinned"),
        n),
    ui = a(295811),
    ur = a(172471);
let uo = () => {
        let e = (0, d.bG)([ui.A], () => ui.A.getShopHomeConfigOverride()),
            t = [
                { id: "none", label: "DISABLED (no override)", value: void 0 },
                ...Object.values(us).map((e) => ({ id: e, label: e, value: e })),
            ];
        return (0, r.jsx)("div", {
            className: ur.kL,
            children: (0, r.jsx)(x.l, {
                label: "Shop Home Override",
                options: t,
                value: e,
                onSelectionChange: (e) => {
                    (0, ua.Or)(e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
        });
    },
    ud = () => {
        let [e, t] = o.useState(void 0);
        return (0, r.jsxs)("div", {
            className: S()(ur.kL, ur.fi),
            children: [
                (0, r.jsx)(g.k, {
                    fullWidth: !0,
                    label: "Shop Layout URL Override",
                    value: e,
                    onChange: (e) => ("" === e ? t(void 0) : t(e)),
                    placeholder: "https://cdn.discordapp.com/assets/content/...",
                }),
                (0, r.jsxs)("div", {
                    className: ur.o1,
                    children: [
                        (0, r.jsx)(p.$, {
                            variant: "critical-primary",
                            text: "Clear",
                            onClick: () => {
                                t(void 0), (0, ua.Aq)(void 0);
                            },
                        }),
                        (0, r.jsx)(p.$, {
                            variant: "primary",
                            text: "Set",
                            onClick: () => (0, ua.Aq)("" !== e ? e : void 0),
                        }),
                    ],
                }),
            ],
        });
    },
    uc = (e) => {
        let { className: t } = e,
            a = Object.keys(nY.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
        return null == a
            ? null
            : (0, r.jsxs)("div", {
                  className: t,
                  children: [
                      (0, r.jsx)(I.D, { variant: "heading-md/semibold", children: "Shop Marketing" }),
                      (0, r.jsx)("div", { style: { zIndex: 1 }, children: (0, r.jsx)(ln, { items: [a] }) }),
                  ],
              });
    };
var uu = a(922529),
    um = a(628917);
let uh = () => {
        let e = (0, d.bG)([lc.A], () => lc.A.get("shop_disable_cache")),
            t = (0, d.bG)([lc.A], () => lc.A.get("shop_include_unpublished"));
        return (0, r.jsx)(ue, {
            children: (0, r.jsxs)("div", {
                className: um.Lm,
                children: [
                    (0, r.jsxs)("div", {
                        className: um.gf,
                        children: [
                            (0, r.jsx)(b.d, {
                                label: "Disable collectibles cache",
                                checked: e,
                                onChange: (e) => (0, ld.L)("shop_disable_cache", e),
                            }),
                            (0, r.jsx)(b.d, {
                                label: "Show unpublished collectibles",
                                checked: t,
                                onChange: (e) => (0, ld.L)("shop_include_unpublished", e),
                            }),
                        ],
                    }),
                    (0, r.jsx)(uc, { className: um._l }),
                    (0, r.jsxs)("div", {
                        className: um._l,
                        children: [
                            (0, r.jsx)(I.D, { variant: "heading-md/semibold", children: "Shop Overrides" }),
                            (0, r.jsx)(uo, {}),
                            (0, r.jsx)(uu.A, { className: um.yF }),
                            (0, r.jsx)(ud, {}),
                            (0, r.jsx)(uu.A, { className: um.yF }),
                            (0, r.jsx)(ul, {}),
                            (0, r.jsx)(uu.A, { className: um.yF }),
                            (0, r.jsx)(c5, {}),
                        ],
                    }),
                ],
            }),
        });
    },
    up = [
        { id: "unset", label: "Unset", value: dF.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
        { id: "all", label: "All", value: dF.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
        { id: "usersWithGame", label: "Users With Game", value: dF.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
        { id: "none", label: "None", value: dF.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
    ];
function ux() {
    let e = o.useRef(null),
        t = dW.TA.useSetting();
    return (0, r.jsx)("div", {
        ref: e,
        className: S()(tA.nd, ar.n),
        children: (0, r.jsxs)("div", {
            className: ar.k,
            children: [
                (0, r.jsx)(I.D, { variant: "heading-lg/normal", children: "Settings" }),
                (0, r.jsx)(x.l, {
                    label: "Receive DMs In Game",
                    options: up,
                    value: t,
                    onSelectionChange: dW.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var ug = a(278416),
    uv = a(220631);
function ub(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function u_(e) {
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
        (0, r.jsx)(c.Ip, { className: uv.Dx, children: (0, r.jsx)(aj, { data: n }) })
    );
}
function uj(e) {
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
        className: S()(uv.Dx, uv.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: uv.Vz,
                value: a,
                onChange: (e) => n(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != l && (0, r.jsx)("div", { className: uv.Xf, role: "alert", children: l }),
            (0, r.jsxs)("div", {
                className: uv.KA,
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
        cellClassName: uv.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function uy(e) {
    let { store: t, initialHeight: a } = e,
        n = o.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: aS.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVars
                                ? (0, r.jsxs)("div", {
                                      className: uv.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(u_, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: aS.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(u_, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: aS.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVarsEditConfig
                                ? (0, r.jsxs)("div", {
                                      className: uv.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(uj, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: l, renderSelectedTab: s } = (0, aS.Ay)({ tabs: n }, []);
    return (0, r.jsxs)(aE, {
        className: uv.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(am.Ay, {
                className: S()(tA.jr, uv.nZ),
                children: [
                    (0, r.jsx)(am.Ay.Icon, { icon: ug.g, tooltip: t.getName() }),
                    (0, r.jsx)(am.Ay.Title, { children: t.getName() }),
                ],
            }),
            s({ store: t }),
        ],
    });
}
function uC() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = d.il.getAll(),
        l = o
            .useMemo(() => n.map((e) => ({ key: e._dispatchToken, store: e })).sort(ub), [n])
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
        className: S()(tA.nd, uv.nd),
        children: [
            (0, r.jsx)("div", {
                className: uv.KE,
                children: (0, r.jsx)(a7.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(tk, { columns: uf, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != c &&
                (0, r.jsx)(uy, { store: c, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, s),
        ],
    });
}
var uE = a(91871),
    uS = a.n(uE);
let uN = [
        {
            key: "id",
            cellClassName: nh.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: nh.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: nh.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    uA = [
        {
            id: "details",
            name: "Details",
            group: aS.fu.NONE,
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
                    d = aZ()(s);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(am.Ay, {
                            className: S()(tA.jr, nh.nZ),
                            children: [
                                (0, r.jsx)(am.Ay.Icon, { icon: a1.U, tooltip: t }),
                                (0, r.jsx)(am.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(nc, {
                            className: nh.ZK,
                            children: [
                                (0, r.jsx)(nu, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: s.toISOString(),
                                        title: (0, a5.i$)(d, "LLLL"),
                                        children: (0, a5.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, r.jsx)(nu, {
                                        name: "Guild ID",
                                        children: (0, r.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, r.jsx)(nu, {
                                    name: "Bucket",
                                    children: (0, r.jsx)("code", { children: a.bucket }),
                                }),
                                (0, r.jsx)(nu, {
                                    name: "Revision",
                                    children: (0, r.jsx)("code", { children: a.revision }),
                                }),
                                (0, r.jsx)(nu, { name: "Override", children: (0, r.jsx)(nm, { value: a.override }) }),
                                (0, r.jsx)(nu, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                                (0, r.jsx)(nu, { name: "Excluded", children: (0, r.jsx)(nm, { value: l }) }),
                                (0, r.jsx)(nu, { name: "Previously tracked", children: (0, r.jsx)(nm, { value: o }) }),
                                (0, r.jsx)(nu, { name: "Location", children: (0, r.jsx)("code", { children: i }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function uk() {
    let [e, t] = o.useState(""),
        a = o.useRef(null),
        n = (0, d.yK)([no], () => no.loggedTriggers),
        l = o.useMemo(
            () =>
                n
                    .filter((t) => 0 === e.length || uS()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [n, e],
        ),
        [s, i] = o.useState(void 0),
        c = l.find((e) => e.key === s),
        { TabBar: u, renderSelectedTab: m } = (0, aS.Ay)({ tabs: uA }, []),
        h = (0, d.bG)([no], () => no.trackTriggers),
        p = o.useCallback((e) => {
            tC.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        x = h ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: S()(tA.nd, nh.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nh.rh,
                children: [
                    (0, r.jsx)(lT.m, {
                        text: x,
                        children: (0, r.jsx)(eS.K, {
                            size: "sm",
                            variant: h ? "active" : "primary",
                            icon: h ? lO.E : lw.u,
                            "aria-label": x,
                            onClick: () => p(!h),
                        }),
                    }),
                    (0, r.jsx)(a7.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, r.jsx)(eS.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": aB.intl.string(aB.t.VkKicb),
                        icon: a8.u,
                        onClick: w.eY,
                    }),
                ],
            }),
            (0, r.jsx)(tk, { columns: uN, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != c &&
                (0, r.jsxs)(aE, {
                    className: nh.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(u, {}), m({ loggedTrigger: c })],
                }),
        ],
    });
}
var uD = a(512950),
    uT = a(324861),
    uI = a(243655);
let uw = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, uT.A)();
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
                            e(), t(), (0, t9.pX)(z.BVt.APP);
                        },
                    }),
                }),
                (0, r.jsx)(uD.p, {
                    messageType: uD.Y.INFO,
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these",
                }),
            ],
        }),
    });
};
var uO = a(77729),
    uR = a(969341),
    uL = a(36934);
function uM() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, s] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        i = "processing" === l.status;
    return (0, r.jsx)(c.Ip, {
        className: tA.nd,
        children: (0, r.jsxs)("div", {
            className: uL.l7,
            children: [
                (0, r.jsx)(A.E, { variant: "text-lg/bold", children: "Batch Audio Processor" }),
                (0, r.jsx)(A.E, {
                    variant: "text-sm/normal",
                    children:
                        "Process wav files through the Discord audio ingest pipeline (WebRTC APM, Krisp, voice filters) and write output to wav files.",
                }),
                (0, r.jsxs)(D.B, {
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
                                let e = await uO.A.fileManager.showOpenDialog({ properties: ["openDirectory"] });
                                e.length > 0 && t(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)(D.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(g.k, { fullWidth: !0, value: a, onChange: n, placeholder: "Output directory" }),
                        (0, r.jsx)(p.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await uO.A.fileManager.showOpenDialog({
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
                              uR.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  s((e) => ({ ...e, status: "cancelled" }));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (s({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  uR.Ay.getMediaEngine().processBatchAudioFiles(
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
                    (0, r.jsxs)(D.B, {
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
                                            className: uL.TZ,
                                            children: (0, r.jsxs)(A.E, {
                                                variant: "text-xs/normal",
                                                className: e.success ? uL.$D : uL.uL,
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
var uP = a(207898),
    uU = a.n(uP),
    uB = a(32880),
    uG = a(827343),
    uF = a(964486),
    uV = a(602674),
    u$ = a(625841),
    uW = a(74848),
    uH = a(731854),
    uz = a(573908);
function uK(e) {
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
function uY(e) {
    let { recording: t, playing: a, onPlay: n, onStop: l } = e;
    return (0, r.jsx)(d4.N, {
        collapsibleContent: (0, r.jsx)(uK, { recording: t }),
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
                        children: a ? (0, r.jsx)(lO.E, { size: "xxs" }) : (0, r.jsx)(lw.u, { size: "xxs" }),
                    }),
                    (0, r.jsx)(N.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, n, l;
                            e.stopPropagation(),
                                (a = new Blob([uU()(t.audioBuffer)], { type: "audio/wav" })),
                                (n = URL.createObjectURL(a)),
                                ((l = document.createElement("a")).href = n),
                                (l.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                l.click(),
                                URL.revokeObjectURL(n);
                        },
                        children: (0, r.jsx)(uB.s, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function uq() {
    let { name: e } = (0, uW.x5)(uH.oh.AUDIO_INPUT),
        [t, a] = o.useState(!1),
        [n, l] = o.useState([]),
        s = (0, d.bG)([uR.Ay], () => uR.Ay.getKrispSuppressionLevel()),
        [i, u] = o.useState(null),
        m = o.useRef(null),
        h = o.useRef(null),
        [p, g] = o.useState(0.5),
        {
            krispModels: v,
            krispModelOverride: _,
            inputMode: j,
            echoCancellation: f,
            autoThreshold: y,
            vadUseKrisp: C,
            vadKrispActivationThreshold: E,
            noiseCancellation: S,
            noiseSuppression: N,
            noiseSuppressionSupported: k,
            noiseCancellationSupported: T,
            noiseCancellationEnableStats: I,
            vadDuringPreProcess: w,
        } = (0, d.cf)([uR.Ay], () => ({
            krispModels: uR.Ay.getKrispModels(),
            krispModelOverride: uR.Ay.getKrispModelOverride(),
            echoCancellation: uR.Ay.getEchoCancellation(),
            autoThreshold: uR.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: uR.Ay.getModeOptions().vadUseKrisp,
            inputMode: uR.Ay.getMode(),
            vadKrispActivationThreshold: uR.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: uR.Ay.getNoiseCancellation(),
            noiseSuppression: uR.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: uR.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: uR.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: uR.Ay.getKrispEnableStats(),
            vadDuringPreProcess: uR.Ay.getModeOptions().vadDuringPreProcess,
        })),
        O = S ? "KRISP" : N ? "STANDARD" : "NONE",
        R = (0, uV.v)(),
        L = o.useCallback(() => {
            m.current?.stop(), (m.current = null), u(null);
        }, []);
    function M() {
        uR.Ay.getMediaEngine().stopRecordingRawSamples();
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
        (0, uF.l0)(() => {
            uG.A.setMode(uR.Ay.getMode(), { vadDuringPreProcess: null, vadKrispActivationThreshold: void 0 });
        });
    let U = [];
    return (
        T && U.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        k && U.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        U.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(c.Ip, {
            className: tA.nd,
            children: (0, r.jsxs)("div", {
                className: uz.l,
                children: [
                    (0, r.jsx)(A.E, { variant: "text-lg/bold", children: "Krisp Tester" }),
                    (0, r.jsx)(u$.U, {
                        label: "Input Device",
                        deviceType: uH.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, r.jsx)(x.l, {
                        label: "Noise Cancellation",
                        value: O,
                        onSelectionChange: (e) => {
                            uG.A.setNoiseCancellation("KRISP" === e), uG.A.setNoiseSuppression("STANDARD" === e);
                        },
                        options: U,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === O &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(cA.A, {
                                    label: "Krisp Suppression Level",
                                    initialValue: s,
                                    onValueChange: uG.A.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, r.jsx)(x.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: _,
                                    options: v.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        uG.A.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(b.d, {
                                    label: "Enable Stats",
                                    checked: I,
                                    onChange: (e) => uG.A.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    j === uH.TB.VOICE_ACTIVITY &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(b.d, {
                                    label: "Auto Threshold",
                                    checked: y,
                                    onChange: (e) => uG.A.setMode(uH.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                y &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(b.d, {
                                                label: "Use Krisp VAD",
                                                checked: C,
                                                onChange: (e) => uG.A.setMode(uH.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            C &&
                                                (0, r.jsx)(cA.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: E,
                                                    onValueChange: (e) =>
                                                        uG.A.setMode(uH.TB.VOICE_ACTIVITY, {
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
                                    onChange: (e) => uG.A.setMode(uH.TB.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(b.d, {
                        label: "Echo Cancellation",
                        checked: f,
                        onChange: (e) => uG.A.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)(D.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(A.E, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(aX.$n, {
                                color: t ? aX.$n.Colors.RED : aX.$n.Colors.BRAND,
                                onClick: t
                                    ? M
                                    : function () {
                                          L(),
                                              a(!0),
                                              uG.A.setLoopback("krisp_test", !0),
                                              uR.Ay.getMediaEngine().startRecordingRawSamples((t, n, i) => {
                                                  a(!1), uG.A.setLoopback("krisp_test", !1);
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
                                                          echoCancellation: f,
                                                          krispSuppressionLevel: s,
                                                      },
                                                  ]);
                                              });
                                      },
                                children: t ? "Stop Recording" : "Start Recording",
                            }),
                        ],
                    }),
                    (0, r.jsx)(cA.A, {
                        label: "Volume",
                        initialValue: p,
                        asValueChanges: function (e) {
                            null != h.current && ((h.current.gain.value = e), g(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, r.jsxs)(D.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(A.E, { variant: "text-sm/semibold", children: "Recordings" }),
                            n.map((e, t) =>
                                (0, r.jsx)(uY, { recording: e, playing: e === i, onPlay: P, onStop: L }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var uJ = a(803306),
    uQ = a(243217),
    uZ = a(189213),
    uX = a(340351),
    u0 = a(935208),
    u1 = a(112848);
let u2 = [
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
function u8() {
    let [e, t] = o.useState(!1),
        a = (0, d.bG)([V.default], () => V.default.getCurrentUser()),
        n = (0, u1.Lh)(),
        l = (0, d.bG)([rk.A], () => rk.A.getPremiumTypeSubscription()),
        s = null != n ? (l7.VD[n]?.tenureReqNumMonths ?? 0) : 0,
        i = o.useCallback(
            async (e) => {
                let n = new Date();
                e > 0 ? n.setMonth(n.getMonth() - e) : n.setDate(n.getDate() - 7), n.setDate(n.getDate() - 2);
                let s = {
                    subscription_status: z.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: u0.default.fromTimestamp(n.getTime()),
                };
                t(!0),
                    await nO.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: s, rejectWithError: !1 }),
                    await (0, uJ.eO)(a.id),
                    await (0, oq.hP)(),
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
            options: u2,
            onSelectionChange: i,
        });
}
var u7 =
        (((l = {})[(l.DEFAULT = 0)] = "DEFAULT"),
        (l[(l.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (l[(l.FAILURE = 2)] = "FAILURE"),
        (l[(l.NONE = 3)] = "NONE"),
        l),
    u4 =
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
async function u6(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: n, paymentType: l, sendReminderEmail: s } = a;
    return (
        await nO.Bo.post({
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
var u9 = a(601107),
    u3 = a(142798);
let u5 = {
        [z.Dmq.UNPAID]: "Unpaid",
        [z.Dmq.ACTIVE]: "Active",
        [z.Dmq.PAST_DUE]: "Past Due",
        [z.Dmq.CANCELED]: "Canceled",
        [z.Dmq.ENDED]: "Ended",
        [z.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [z.Dmq.BILLING_RETRY]: "Billing Retry",
        [z.Dmq.PAUSED]: "Paused",
        [z.Dmq.PAUSE_PENDING]: "Pause Pending",
    },
    me = {
        [u9.qf.UNKNOWN]: "Unknown",
        [u9.qf.ADMIN]: "Admin",
        [u9.qf.USER]: "User",
        [u9.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [u9.qf.DEFERRED_START]: "Deferred Start",
        [u9.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    mt = [
        { id: "unpaid", label: "Unpaid", value: z.Dmq.UNPAID },
        { id: "active", label: "Active", value: z.Dmq.ACTIVE },
        { id: "pastDue", label: "Past Due", value: z.Dmq.PAST_DUE },
        { id: "canceled", label: "Canceled", value: z.Dmq.CANCELED },
        { id: "ended", label: "Ended", value: z.Dmq.ENDED },
        { id: "accountHold", label: "Account Hold", value: z.Dmq.ACCOUNT_HOLD },
        { id: "billingRetry", label: "Billing Retry", value: z.Dmq.BILLING_RETRY },
        { id: "paused", label: "Paused", value: z.Dmq.PAUSED },
        { id: "pausePending", label: "Pause Pending", value: z.Dmq.PAUSE_PENDING },
    ];
function ma(e) {
    let { subscription: t, onClose: a, onUpdated: n, transitionState: l } = e,
        [s, i] = o.useState(aZ()()),
        [d, c] = o.useState(aZ()().format("HH:mm")),
        [u, h] = o.useState(!1),
        [p, x] = o.useState(void 0),
        g = async () => {
            if (null == s) return void x("Please select a target date");
            let [e, l] = d.split(":").map(Number),
                i = s.clone().hours(e).minutes(l).seconds(0).milliseconds(0);
            h(!0), x(void 0);
            try {
                await u6(t.id, u4.TIME_TRAVEL, { targetDate: i, paymentType: u7.DEFAULT, sendReminderEmail: !1 }),
                    n(),
                    a();
            } catch (e) {
                x(e.body?.message || e.message || "Failed to time travel");
            } finally {
                h(!1);
            }
        };
    return (0, r.jsx)(uZ.Modal, {
        transitionState: l,
        onClose: () => (a(), Promise.resolve()),
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: a },
            { text: "Time Travel", variant: "primary", onClick: g, disabled: u || null == s },
        ],
        children: (0, r.jsxs)(D.B, {
            gap: 16,
            children: [
                (0, r.jsx)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, r.jsx)(s1.J, { label: "Target Date", value: s, onSelect: i }),
                (0, r.jsx)(m.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, r.jsx)("input", {
                        type: "time",
                        value: d,
                        onChange: (e) => {
                            c(e.target.value);
                        },
                        className: u3.Qn,
                    }),
                }),
                (0, r.jsxs)(D.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(A.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, r.jsxs)(D.B, {
                            gap: 4,
                            children: [
                                (0, r.jsxs)(A.E, {
                                    variant: "text-xs/normal",
                                    className: u3.JX,
                                    children: ["Start: ", aZ()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(A.E, {
                                    variant: "text-xs/normal",
                                    className: u3.JX,
                                    children: ["End: ", aZ()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != p && (0, r.jsx)(k.w, { type: "critical", children: p }),
            ],
        }),
    });
}
function mn(e) {
    var t;
    let a,
        { subscription: n, onUpdated: l } = e,
        [s, i] = o.useState(!1),
        [d, c] = o.useState(!1),
        [u, h] = o.useState(!1),
        [g, v] = o.useState(!1),
        [b, _] = o.useState(null),
        j = (e) => {
            let t = new Date(e);
            return u0.default.fromTimestamp(t.getTime());
        },
        f = async (e) => {
            let { status: t = n.status, premiumStreakStart: a, endedAt: s } = e,
                i = {
                    subscription_status: t,
                    ...(null != a ? { premium_streak_started_at: j(a) } : null),
                    ...(null != s ? { ended_at: j(s) } : null),
                };
            await nO.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: i, rejectWithError: !1 }), l();
        },
        y = async () => {
            try {
                await u6(n.id, u4.RENEW, {
                    targetDate: aZ()(new Date()),
                    paymentType: u7.DEFAULT,
                    sendReminderEmail: !1,
                });
            } catch (e) {
                _(e.body?.message || e.message || "Failed to renew subscription");
            }
            l();
        },
        C = l7.hd[n.planIdFromItems]?.premiumType === l7.PremiumTypes.TIER_0,
        E = n.metadata?.ended_at,
        T = null != E ? new Date(E).toISOString().substring(0, 10) : "",
        I = [
            { id: "id", label: `ID: ${n.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = n.status), t in u5) ? u5[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        w = n.hasActiveTrial,
        O = n.metadata?.active_discount_id != null;
    return (
        w && I.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        O && I.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        n.status !== z.Dmq.ACTIVE &&
            I.push({
                id: "dates",
                label: `Dates: ${(0, a5.i$)(n.createdAt, "LL")} - ${(0, a5.i$)(n.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        n.status === z.Dmq.PAUSED &&
            I.push({
                id: "pause-reason",
                label: `Pause Reason: ${n.pauseReason in me ? me[n.pauseReason] : `Unknown pause reason ${n.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: S()(st.Nr, C ? st.Qf : st.C1),
            children: (0, r.jsxs)(m.n, {
                label: `Type: ${null == ((a = n.planIdFromItems)) ? "No plan id" : a in l7.hd ? l7.hd[a].name : `Unknown plan id ${a}`}`,
                className: u3.lI,
                children: [
                    (0, r.jsx)(uX.C, {
                        items: I,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    w &&
                        (0, r.jsxs)("div", {
                            className: u3.VK,
                            children: [
                                (0, r.jsxs)(N.D, {
                                    onClick: () => {
                                        h(!u);
                                    },
                                    className: u3.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(A.E, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, r.jsx)(l2.A, { direction: u ? l2.A.Directions.UP : l2.A.Directions.DOWN }),
                                    ],
                                }),
                                u &&
                                    (0, r.jsxs)("ul", {
                                        className: u3.j3,
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
                                                                ? (0, a5.i$)(n.trialEndsAt, "LL")
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
                            className: u3.VK,
                            children: [
                                (0, r.jsxs)(N.D, {
                                    onClick: () => {
                                        v(!g);
                                    },
                                    className: u3.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(A.E, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, r.jsx)(l2.A, { direction: g ? l2.A.Directions.UP : l2.A.Directions.DOWN }),
                                    ],
                                }),
                                g &&
                                    (0, r.jsxs)("ul", {
                                        className: u3.j3,
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
                                                                ? (0, a5.i$)(
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
                            className: u3.VK,
                            children: [
                                (0, r.jsxs)(N.D, {
                                    onClick: () => {
                                        i(!s);
                                    },
                                    className: u3.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(A.E, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, r.jsx)(l2.A, { direction: s ? l2.A.Directions.UP : l2.A.Directions.DOWN }),
                                    ],
                                }),
                                s &&
                                    (0, r.jsx)("ul", {
                                        className: u3.j3,
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
                        className: u3.VK,
                        children: [
                            (0, r.jsxs)(N.D, {
                                onClick: () => {
                                    c(!d);
                                },
                                className: u3.Eh,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(A.E, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, r.jsx)(l2.A, { direction: d ? l2.A.Directions.UP : l2.A.Directions.DOWN }),
                                ],
                            }),
                            d &&
                                (0, r.jsxs)(D.B, {
                                    gap: 24,
                                    children: [
                                        (0, r.jsx)(x.l, {
                                            label: "Status",
                                            value: n.status,
                                            options: mt,
                                            onSelectionChange: (e) => {
                                                f({ status: e });
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsxs)(D.B, {
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
                                                                (0, ek.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, r.jsx)(ma, {
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
                                                        className: u3.z3,
                                                        children: (0, r.jsx)(k.w, { type: "critical", children: b }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)(D.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(s1.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: aZ()(n.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => f({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(u8, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(s1.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== T ? aZ()(T) : void 0,
                                            onSelect: (e) => f({ endedAt: e.toISOString() }),
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
let ml = async () =>
        (
            await nO.Bo.get({
                url: z.Rsh.BILLING_SUBSCRIPTIONS,
                query: { include_inactive: !0, limit: 5 },
                rejectWithError: !1,
            })
        ).body.map((e) => uQ.A.createFromServer(e)),
    ms = [
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
function mi() {
    let e = (0, d.bG)([rk.A], () => rk.A.getPremiumTypeSubscription()),
        t = (0, d.bG)([V.default], () => V.default.getCurrentUser()),
        [a, n] = o.useState("511651880837840896"),
        [l, s] = o.useState([]),
        [i, u] = o.useState(!1),
        m = o.useCallback(async () => {
            try {
                u(!0), await (0, oq.hP)(), await (0, uJ.eO)(t.id), s(await ml());
            } finally {
                u(!1);
            }
        }, [t]);
    o.useEffect(() => {
        m();
    }, [m]);
    let h = o.useMemo(() => l.filter((e) => e.status !== z.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [l]),
        g = async () => {
            await nO.Bo.post({ url: "/debug/subscription", body: { plan_id: a }, rejectWithError: !1 }), await m();
        },
        v = async () => {
            await nO.Bo.del({ url: "/debug/subscription", rejectWithError: !1 }), await m();
        };
    return (0, r.jsx)(c.Ip, {
        className: tA.nd,
        children: (0, r.jsxs)("div", {
            className: st.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: st.dL,
                    children: [
                        (0, r.jsx)(I.D, {
                            variant: "heading-lg/semibold",
                            className: tA.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, r.jsx)(eS.K, {
                            "aria-label": "Refresh",
                            icon: l1.f,
                            size: "sm",
                            variant: "icon-only",
                            disabled: i,
                            onClick: m,
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: S()([st.uW, st.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(x.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: ms,
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
                null != e && (0, r.jsx)(mn, { subscription: e, onUpdated: m }),
                (0, r.jsx)(I.D, { variant: "heading-lg/semibold", className: tA.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: S()([st.uW, st.Uo]),
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
                            (0, r.jsx)(I.D, {
                                variant: "heading-lg/semibold",
                                className: tA.wx,
                                children: "Previous Subscriptions",
                            }),
                            h.map((e) => (0, r.jsx)(mn, { subscription: e, onUpdated: m }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var mr = a(284009),
    mo = a.n(mr),
    md = a(889137),
    mc = a(412703),
    mu = a(440703),
    mm = a(267548),
    mh = a(668824),
    mp = a(695366),
    mx = a(359778),
    mg = a(507107),
    mv = a(801365),
    mb = a(792620),
    m_ = a(241124),
    mj = a(28082),
    mf = a(717695),
    my = a(59350),
    mC = a(127219),
    mE = a(262514),
    mS = a(291922),
    mN = a(317097),
    mA = a(452027),
    mk = a(922016),
    mD = a(714385),
    mT = a(359923);
let mI = function (e) {
    let { colorKey: t, value: a, onChange: n, title: l } = e,
        s = o.useRef(null);
    return (0, r.jsx)(mA.D, {
        label: l,
        children: (0, r.jsx)(mk.Y, {
            targetElementRef: s,
            renderPopout: (e) => (0, r.jsx)(d6.VN, { ...e, value: a, onChange: (e) => n(t, (0, mN.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(N.D, {
                    ...e,
                    innerRef: s,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: mT.O6,
                    style: { backgroundColor: a },
                    children: (0, r.jsx)(mD.d, { size: "xs", color: "currentColor", className: mT.WY }),
                }),
        }),
    });
};
var mw = a(247928);
let mO = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: n = !1 } = e;
    return (0, r.jsx)(mw.M, {
        children: (0, r.jsx)(mx.Z, {
            className: S()(mT.Rx, { [mT.aK]: n }),
            outline: n,
            children: (0, r.jsx)("div", {
                className: mT.AZ,
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
var mR = a(643374);
let mL = function (e) {
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
            (0, r.jsx)(mA.D, {
                label: s,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, r.jsx)(mR.A, {
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
    mM = function (e) {
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
var mP = a(890687);
let mU = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: n } = (0, mP.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
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
var mB = a(843282),
    mG = a(972886);
let mF = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    mV = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: n } = e;
        return (0, r.jsxs)(D.B, {
            gap: 20,
            children: [
                (0, r.jsx)(mB.Pw, {
                    label: "Task Type(s)",
                    className: mG.Z,
                    placeholder: "Select Task Preset",
                    options: mF,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, l, s, i, r;
                        return (
                            e ===
                            ((t = n.tasks),
                            (a = mc.n.PLAY_ON_PLAYSTATION in t || mc.n.PLAY_ON_XBOX in t),
                            (l = mc.n.PLAY_ON_DESKTOP in t),
                            (s = mc.n.STREAM_ON_DESKTOP in t),
                            (i = mc.n.WATCH_VIDEO in t),
                            (r = mc.n.PLAY_ACTIVITY in t),
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
                                        a[mc.n.STREAM_ON_DESKTOP] = { type: mc.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[mc.n.PLAY_ON_DESKTOP] = { type: mc.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        (a[mc.n.PLAY_ON_PLAYSTATION] = {
                                            type: mc.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[mc.n.PLAY_ON_XBOX] = {
                                                type: mc.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 4:
                                        (a[mc.n.PLAY_ON_DESKTOP] = { type: mc.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[mc.n.PLAY_ON_PLAYSTATION] = {
                                                type: mc.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[mc.n.PLAY_ON_XBOX] = {
                                                type: mc.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 2:
                                        a[mc.n.WATCH_VIDEO] = {
                                            type: mc.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[mc.n.PLAY_ACTIVITY] = { type: mc.n.PLAY_ACTIVITY, target: t };
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
                    value: String(a / nL.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= nL.A.Seconds.MINUTE;
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
var m$ = a(818348);
let mW = function () {
    let e = (0, J.Ay)();
    return (0, r.jsx)(mA.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(Q.zy, {
                    theme: m$.NJ.LIGHT,
                    isSelected: e === m$.NJ.LIGHT,
                    onSelect: () => (0, dz.u_)({ theme: m$.NJ.LIGHT }),
                }),
                (0, r.jsx)(Q.zy, {
                    theme: m$.NJ.DARK,
                    isSelected: e === m$.NJ.DARK,
                    onSelect: () => (0, dz.u_)({ theme: m$.NJ.DARK }),
                }),
            ],
        }),
    });
};
var mH =
    (((i = {})[(i.UNENROLLED = 0)] = "UNENROLLED"),
    (i[(i.ENROLLED = 1)] = "ENROLLED"),
    (i[(i.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (i[(i.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (i[(i.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (i[(i.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (i[(i.CLAIMED = 6)] = "CLAIMED"),
    i);
let mz = function (e) {
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
var mK = a(545986);
let mY = ["png", "gif", "webp"],
    mq = [...mY, "jpg", "jpeg"],
    mJ = Array.from(new Set([...mq, "gif", "mp4", "webm"]));
function mQ() {
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
let mZ = "1193992107035983872",
    mX = {
        id: mZ,
        preview: !0,
        config: {
            id: mZ,
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
                        type: mu.l.REWARD_CODE,
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
                joinOperator: mh.K.AND,
                tasks: { [mc.n.PLAY_ON_DESKTOP]: { type: mc.n.PLAY_ON_DESKTOP, target: 300 } },
            },
            features: [],
            sharePolicy: mm.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function m0() {
    var e;
    let [t, n] = o.useState(mX),
        l = o.useCallback((e) => {
            n({ ...e, preview: !0 });
        }, []),
        [s, i] = o.useState(mH.UNENROLLED),
        [d, u] = o.useState(!1),
        [m, h] = o.useState(!1),
        [x, g] = o.useState(null),
        v =
            ((e = t.config),
            (0, md.YW)(e)
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
                    (0, md.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function j(e, a) {
        let n = t.config.taskConfigV2.tasks,
            s = n[mc.n.WATCH_VIDEO];
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
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...n, [mc.n.WATCH_VIDEO]: { ...s, assets: i } } },
            },
        });
    }
    function f(e, a) {
        if ("questName" === e || "gameTitle" === e || "gamePublisher" === e) {
            var n, s;
            l({
                ...t,
                config:
                    ((n = t.config),
                    (s = { [e]: a }),
                    (0, md.YW)(n)
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
                    (0, md.YW)(s)
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
        (0, mv.tU)(t.config) && (0, mK.hJ)(t, mg.uF.GIFT_INVENTORY_FOR_YOU, mg.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let S = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * nL.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        N = o.useMemo(() => mc.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    mo()(!1 !== t.preview && null != t.preview, "Preview config must have property preview: true");
    let k = t.config.taskConfigV2.tasks[mc.n.WATCH_VIDEO];
    return (0, r.jsxs)(c.Ip, {
        className: mT.kL,
        children: [
            (0, r.jsx)(I.D, { variant: "heading-lg/bold", className: mT.R_, children: "Quest Preview Tool" }),
            (0, r.jsx)("div", {
                className: mT.OA,
                children: (0, r.jsx)(mU, {
                    onSelect: function (e) {
                        g(e),
                            null == e ||
                                (i(
                                    (function (e) {
                                        if (null == e.userStatus) return mH.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return mH.CLAIMED;
                                        if (null != e.userStatus.completedAt) return mH.COMPLETED_100;
                                        let t = (0, mb.Yh)(e),
                                            a = t.progressSeconds,
                                            n = t.targetSeconds;
                                        return a / n >= 1
                                            ? mH.COMPLETED_100
                                            : a / n >= 0.75
                                              ? mH.COMPLETED_75
                                              : a / n >= 0.5
                                                ? mH.COMPLETED_50
                                                : a / n >= 0.25
                                                  ? mH.COMPLETED_25
                                                  : mH.ENROLLED;
                                    })(e),
                                ),
                                l(e));
                    },
                    quest: x,
                }),
            }),
            (0, r.jsx)(I.D, { variant: "heading-md/semibold", className: mT.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: mT.OA,
                children: (0, r.jsx)(mV, {
                    taskDuration: S,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        l({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)(I.D, { variant: "heading-md/semibold", className: mT.fV, children: "Messages" }),
            (0, r.jsxs)("div", {
                className: mT.OA,
                children: [
                    (0, r.jsx)(mM, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: f,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, r.jsx)(mM, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: f,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(mM, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: f,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    N &&
                        (0, r.jsx)(mM, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let n = t.config.taskConfigV2.tasks,
                                    s = n[mc.n.WATCH_VIDEO];
                                if (null == s) return;
                                let i = { ...s.messages, [e]: a };
                                l({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...n, [mc.n.WATCH_VIDEO]: { ...s, messages: i } },
                                        },
                                    },
                                });
                            },
                            initialValue: k?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)(I.D, { variant: "heading-md/semibold", className: mT.fV, children: "Assets" }),
            (0, r.jsxs)("div", {
                className: mT.OA,
                children: [
                    (0, r.jsx)(mL, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: _,
                        filters: mJ,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, r.jsx)(mL, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: _,
                        filters: mJ,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, r.jsx)(mL, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: _,
                        filters: mJ,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(mL, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: _,
                        filters: mJ,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, r.jsx)(mL, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: _,
                        filters: [...mq, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, r.jsx)(mL, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: _,
                        filters: [...mY, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    N &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(mL, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: j,
                                    filters: mJ,
                                    initialValue: k?.assets.video.url,
                                }),
                                (0, r.jsx)(mL, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: j,
                                    filters: mJ,
                                    initialValue: k?.assets.videoLowRes?.url,
                                }),
                                (0, r.jsx)(mL, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: j,
                                    filters: mq,
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
                            (0, r.jsxs)(I.D, {
                                variant: "heading-md/semibold",
                                className: mT.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: mT.OA,
                                children: [
                                    (0, r.jsx)(mM, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => y(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(mM, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => y(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== mu.l.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(mL, {
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
                                                                (0, md.YW)(s)
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
                                            filters: mJ,
                                            initialValue: e.asset,
                                        }),
                                    (0, r.jsxs)(D.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(I.D, {
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
            (0, r.jsx)(I.D, { variant: "heading-md/semibold", className: mT.fV, children: "Colors & Quest States" }),
            (0, r.jsxs)("div", {
                className: mT.OA,
                children: [
                    (0, r.jsxs)("div", {
                        className: mT.OA,
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
                    (0, r.jsx)("div", { className: mT.OA, children: (0, r.jsx)(mW, {}) }),
                    (0, r.jsx)(mz, {
                        onChange: function (e) {
                            switch ((i(e), e)) {
                                case mH.UNENROLLED:
                                    l({ ...t, userStatus: null });
                                    break;
                                case mH.ENROLLED:
                                    l({ ...t, userStatus: mQ({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case mH.COMPLETED_25:
                                    l({
                                        ...t,
                                        userStatus: mQ({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * S,
                                        }),
                                    });
                                    break;
                                case mH.COMPLETED_50:
                                    l({
                                        ...t,
                                        userStatus: mQ({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * S,
                                        }),
                                    });
                                    break;
                                case mH.COMPLETED_75:
                                    l({
                                        ...t,
                                        userStatus: mQ({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * S,
                                        }),
                                    });
                                    break;
                                case mH.COMPLETED_100:
                                    l({
                                        ...t,
                                        userStatus: mQ({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: S,
                                        }),
                                    });
                                    break;
                                case mH.CLAIMED:
                                    l({
                                        ...t,
                                        userStatus: mQ({
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
            (0, r.jsx)(I.D, { variant: "heading-lg/bold", className: mT.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: mT.$$,
                children: [
                    (0, r.jsxs)(mO, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(I.D, { variant: "heading-sm/semibold", children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: mT.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, r.jsx)(A.E, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: mT.ok,
                                        children: (0, r.jsx)(m_.jY, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, r.jsx)(mf.A, { children: (0, r.jsx)(mj.Y, { quest: t }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(mO, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(I.D, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(m_.jY, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, r.jsx)(mS.A, {
                                    quest: t,
                                    className: mT.d,
                                    questContent: mg.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: mg.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(mO, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(I.D, { variant: "heading-sm/semibold", children: "Channel Call Header" }),
                            t.userStatus?.claimedAt != null &&
                                (0, r.jsx)(A.E, {
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, r.jsx)("div", {
                                className: mT.l4,
                                children: (0, r.jsx)(m_.jY, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, r.jsx)("div", {
                                        className: mT.Jr,
                                        children: (0, r.jsx)(my.A, {
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
                        className: mT.NY,
                        children: (0, r.jsx)(b.d, {
                            label: "Is Participating:",
                            checked: d,
                            onChange: function (e) {
                                u(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(mO, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(I.D, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            m
                                ? (0, r.jsx)(mC.l, { questId: t.id })
                                : (0, r.jsx)(
                                      mE.M,
                                      {
                                          quest: t,
                                          location: mg.uF.QUESTS_EMBED,
                                          sourceQuestContent: mg.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: mT.NY,
                        children: (0, r.jsx)(b.d, { label: "Invalid Quests Embed:", checked: m, onChange: h }),
                    }),
                    N &&
                        (0, r.jsxs)(mO, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(I.D, { variant: "heading-sm/semibold", children: "Video Player" }),
                                (0, r.jsx)(p.$, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        let e = performance.now();
                                        (0, ek.openModalLazy)(async () => {
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
                                                    sourceQuestContent: mg.uF.INTERNAL_PREVIEW_TOOL,
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
class m1 extends o.Component {
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
                  className: mT.TA,
                  children: [
                      (0, r.jsx)(mp.E, { className: mT.Yw }),
                      (0, r.jsx)(I.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(p.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, r.jsx)(mx.Z, {
                              className: mT.Fx,
                              children: (0, r.jsx)("code", { className: mT.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, r.jsx)(m0, {}, t);
    }
}
var m2 = a(845584),
    m8 = a(839214),
    m7 = a(77138),
    m4 = a(450827),
    m6 = a(626584),
    m9 = a(174768),
    m3 = a(205761),
    m5 = a(860071),
    he = a(696451),
    ht = a(860689),
    ha = a(926140);
let hn = new m6.A("SearchDebugUtils");
function hl() {
    hn.info("--------------------------");
}
function hs() {
    let e = m9.A.getProps();
    hn.info("START Quick Switcher State"),
        hn.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((hn.info(`Result Type: ${e.type}`), e.type)) {
                case ha.rD.GUILD:
                    hn.info(`guild id: ${e.record.id}`);
                    break;
                case ha.rD.TEXT_CHANNEL:
                case ha.rD.VOICE_CHANNEL:
                    hn.info(`channel type: ${e.record.type}`),
                        hn.info(`channel id: ${e.record.id}`),
                        hn.info(`name: ${e.record.name}`);
                    break;
                case ha.rD.DM:
                    hn.info(`channel type: ${e.record.type}`),
                        hn.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (hn.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = V.default.getUser(e);
                                null != t &&
                                    (hn.info(`recipient username: ${t.username}`),
                                    hn.info(`recipient global name: ${Y.Ay.getGlobalName(t)}`),
                                    hn.info(`recipient nickname: ${t0.A.getNickname(t.id)}`));
                            }));
                    break;
                case ha.rD.GROUP_DM:
                    hn.info(`channel type: ${e.record.type}`),
                        hn.info(`channel id: ${e.record.id}`),
                        hn.info(`name: ${(0, tZ.m1)(e.record, V.default, t0.A)}`),
                        e.record.isGroupDM() &&
                            (hn.info(`default name: ${(0, tZ.ks)(e.record, V.default, t0.A)}`),
                            hn.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = V.default.getUser(e);
                                null != t &&
                                    (hn.info(`recipient username: ${t.username}`),
                                    hn.info(`recipient global name: ${Y.Ay.getGlobalName(t)}`),
                                    hn.info(`recipient nickname: ${t0.A.getNickname(t.id)}`));
                            }));
                    break;
                case ha.rD.USER:
                    hn.info(`user id: ${e.record.id}`),
                        hn.info(`username: ${e.record.username}`),
                        hn.info(`global name: ${Y.Ay.getGlobalName(e.record)}`),
                        hn.info(`nickname: ${t0.A.getNickname(e.record.id)}`),
                        hn.info(`guild nicknames: ${he.Ay.getNicknames(e.record.id)}`);
            }
            hn.info(`frecency score: ${m3.A.getScoreWithoutFetchingLatest(e.record.id)}`), hl();
        }),
        hn.info("END Quick Switcher State\n");
}
async function hi() {
    hn.info("START User Search Worker State");
    let e = await m4.A.requestDebugState();
    null == e
        ? hn.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
              let [t, a] = e;
              hn.info(`id: ${t}`),
                  hn.info(`username: ${a.username}`),
                  hn.info(`global name: ${a.globalName}`),
                  hn.info(`nickname: ${a.friendNickname}`),
                  Object.entries(a.nicknames).forEach((e) => {
                      let [t, a] = e;
                      hn.info(`guild id: ${t}`), hn.info(`guild nickname: ${a}`);
                  }),
                  hl();
          }),
          hn.info("END User Search Worker State\n"));
}
async function hr() {
    let e = await m4.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        a = V.default.getUsers(),
        n = new Set(Object.keys(t)),
        l = u0.default.keys(a),
        s = [];
    return (
        l.forEach((e) => {
            n.has(e) || s.push(e);
        }),
        s
    );
}
async function ho(e) {
    let t = await m4.A.requestDebugState(),
        a = null != t ? JSON.parse(t.users)[e] : null,
        n = aL.A.getGuildIds(),
        l = [];
    n.forEach((t) => {
        let a = he.Ay.getMember(t, e);
        null != a && l.push(a);
    });
    let s = m5.A.getDebugState(e);
    return { user: V.default.getUser(e), searchWorkerUser: a, guildMembers: l, guildMemberRequests: s };
}
var hd = a(929948);
function hc(e) {
    let { isUploading: t, isSuccess: a, errorMessage: n, onClick: l, title: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p.$, { variant: "primary", onClick: l, loading: t, disabled: t, text: t ? "Uploading…" : s }),
            null != n &&
                (0, r.jsx)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: hd.qS,
                    children: n,
                }),
            a &&
                (0, r.jsx)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: hd.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let hu = (0, m8.D)(() => ({
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
function hm() {
    let e = hu.useField("includeFrecency"),
        t = hu.useField("includeFriends"),
        a = hu.useField("includeDMs"),
        n = hu.useField("includeGDMs"),
        l = hu.useField("includeQuickSwitcherState"),
        s = hu.useField("includeUserSearchWorkerState"),
        i = hu.useField("isUploading"),
        d = hu.useField("isSuccess"),
        c = hu.useField("errorMessage"),
        u = o.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: n,
                includeQuickSwitcherState: l,
                includeUserSearchWorkerState: s,
                isUploading: i,
            } = hu.getState();
            if (!i)
                try {
                    let i, r, o, d, c, u, m, h, p, x, g, v;
                    hu.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((i = t0.A.getFriendIDs()),
                            hn.info("START Discord Friends"),
                            i.forEach((e) => {
                                let t = V.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    n = Y.Ay.getGlobalName(t),
                                    l = t0.A.getNickname(t.id),
                                    s = he.Ay.getNicknames(t.id);
                                hn.info(`username: ${a}`),
                                    hn.info(`global name: ${n}`),
                                    hn.info(`nickname: ${l}`),
                                    hn.info(`guild nicknames: ${s}`),
                                    hl();
                            }),
                            hn.info("END Discord Friends\n")),
                        a &&
                            ((r = tX.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                e.isGroupDM() && o.push(e), e.isDM() && d.push(e);
                            }),
                            hn.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, tZ.m1)(e, V.default, t0.A),
                                    a = (0, tZ.ks)(e, V.default, t0.A);
                                hn.info(`id: ${e.id}`),
                                    hn.info(`name: ${t}`),
                                    hn.info(`default name: ${a}`),
                                    hn.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = V.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = Y.Ay.getGlobalName(t),
                                            l = t0.A.getNickname(t.id),
                                            s = he.Ay.getNicknames(t.id);
                                        hn.info(`username: ${a}`),
                                            hn.info(`global name: ${n}`),
                                            hn.info(`nickname: ${l}`),
                                            hn.info(`guild nicknames: ${s}`),
                                            hl();
                                    });
                            }),
                            hn.info("END Logging Group DM Channels\n"),
                            hn.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, tZ.m1)(e, V.default, t0.A);
                                hn.info(`id: ${e.id}`), hn.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = V.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = Y.Ay.getGlobalName(n),
                                    i = t0.A.getNickname(n.id);
                                hn.info(`username: ${l}`),
                                    hn.info(`global name: ${s}`),
                                    hn.info(`nickname: ${i}`),
                                    hl();
                            }),
                            hn.info("END Logging DM Channels\n")),
                        n &&
                            ((c = tX.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                e.isGroupDM() && u.push(e), e.isDM() && m.push(e);
                            }),
                            hn.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, tZ.m1)(e, V.default, t0.A),
                                    a = (0, tZ.ks)(e, V.default, t0.A);
                                hn.info(`id: ${e.id}`),
                                    hn.info(`name: ${t}`),
                                    hn.info(`default name: ${a}`),
                                    hn.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = V.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = Y.Ay.getGlobalName(t),
                                            l = t0.A.getNickname(t.id),
                                            s = he.Ay.getNicknames(t.id);
                                        hn.info(`username: ${a}`),
                                            hn.info(`global name: ${n}`),
                                            hn.info(`nickname: ${l}`),
                                            hn.info(`guild nicknames: ${s}`),
                                            hl();
                                    });
                            }),
                            hn.info("END Logging Group DM Channels\n"),
                            hn.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, tZ.m1)(e, V.default, t0.A);
                                hn.info(`id: ${e.id}`), hn.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = V.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = Y.Ay.getGlobalName(n),
                                    i = t0.A.getNickname(n.id);
                                hn.info(`username: ${l}`),
                                    hn.info(`global name: ${s}`),
                                    hn.info(`nickname: ${i}`),
                                    hl();
                            }),
                            hn.info("END Logging DM Channels\n")),
                        e &&
                            ((h = m3.A.getFrequentlyWithoutFetchingLatest()),
                            (p = []),
                            (x = []),
                            (g = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, ht.fh)(e)
                                    ? p.push(e)
                                    : e.isDM()
                                      ? g.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : x.push(e);
                            }),
                            hn.info("START Frecency"),
                            hn.info("Guilds"),
                            p.forEach((e) => {
                                let t = m3.A.getScoreWithoutFetchingLatest(e.id);
                                hn.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            hl(),
                            hn.info("DM Channels"),
                            g.forEach((e) => {
                                let t = m3.A.getScoreWithoutFetchingLatest(e.id);
                                hn.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            hl(),
                            hn.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = m3.A.getScoreWithoutFetchingLatest(e.id);
                                hn.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    hn.info(`default name: ${(0, tZ.ks)(e, V.default, t0.A)}`),
                                    hn.info(`name: ${(0, tZ.m1)(e, V.default, t0.A)}`);
                            }),
                            hl(),
                            hn.info("Guild Channels"),
                            x.forEach((e) => {
                                let t = m3.A.getScoreWithoutFetchingLatest(e.id);
                                hn.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            hl(),
                            hn.info("END Frecency\n")),
                        l && hs(),
                        s && hi(),
                        await (0, m7.a)(z.Umv.WEB_APP),
                        hu.setState({ isSuccess: !0, errorMessage: null });
                } catch (t) {
                    let e = new m2.LG(t);
                    hu.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    hu.setState({ isUploading: !1 });
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
                onChange: () => hu.setState({ includeFrecency: !e }),
            }),
            (0, r.jsx)(b.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => hu.setState({ includeFriends: !t }),
            }),
            (0, r.jsx)(b.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => hu.setState({ includeDMs: !a }),
            }),
            (0, r.jsx)(b.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => hu.setState({ includeGDMs: !n }),
            }),
            (0, r.jsx)(b.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: l,
                onChange: () => hu.setState({ includeQuickSwitcherState: !l }),
            }),
            (0, r.jsx)(b.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: s,
                onChange: () => hu.setState({ includeUserSearchWorkerState: !s }),
            }),
            (0, r.jsx)(hc, {
                isUploading: i,
                isSuccess: d,
                errorMessage: c,
                onClick: u,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let hh = (0, m8.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function hp() {
    let e = hh.useField("userIds"),
        t = hh.useField("isLoading"),
        a = hh.useField("isSuccess"),
        n = hh.useField("errorMessage"),
        l = hh.useField("lastRunAt"),
        s = o.useCallback(async () => {
            hh.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await hr();
                hh.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                hh.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                hh.setState({ isLoading: !1 });
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
                            className: hd.J1,
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
                (0, r.jsx)(p.$, { onClick: s, text: "Diff User State", loading: t, disabled: t }),
                (0, r.jsxs)("div", {
                    className: hd.N6,
                    children: [
                        null != n &&
                            (0, r.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: hd.qS,
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
                                    (0, r.jsx)("div", { className: hd.uk, children: i }),
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
let hx = (0, m8.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function hg() {
    let e = hx.useField("isRecording"),
        t = hx.useField("isUploading"),
        a = hx.useField("isSuccess"),
        n = hx.useField("errorMessage"),
        l = o.useRef([]),
        s = o.useRef(""),
        i = o.useCallback(() => {
            let { results: e, query: t } = m9.A.getProps();
            (l.current !== e || s.current !== t) && ((l.current = e), (s.current = t), hs());
        }, []);
    o.useEffect(() => {
        if (e) return m9.A.addChangeListener(i), () => m9.A.removeChangeListener(i);
    }, [i, e]);
    let d = o.useCallback(async () => {
        let { isUploading: e } = hx.getState();
        if (!e)
            try {
                hx.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, m7.a)(z.Umv.WEB_APP),
                    hx.setState({ isSuccess: !0, errorMessage: null });
            } catch (t) {
                let e = new m2.LG(t);
                hx.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                hx.setState({ isUploading: !1 });
            }
    }, []);
    return (0, r.jsxs)(m.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, r.jsx)(uD.p, {
                messageType: uD.Y.INFO,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, r.jsxs)(lK.e, {
                children: [
                    (0, r.jsx)(p.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => hx.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(hc, {
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
var hv = a(145497);
let hb = (0, m8.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function h_(e) {
    let { title: t, guildIds: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: hd.J1,
                children: (0, r.jsx)(A.E, { variant: "text-sm/normal", children: t }),
            }),
            (0, r.jsxs)("div", {
                className: hd.uk,
                children: [
                    0 === a.length &&
                        (0, r.jsx)("div", {
                            className: hd.J1,
                            children: (0, r.jsx)(A.E, { variant: "text-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = aL.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: hd.J1,
                                      children: [
                                          (0, r.jsx)(hv.Ay, { guild: t, iconSize: 16 }),
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
function hj(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: n, guildMembers: l, guildMemberRequests: s } = t,
        i = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(sO.y, { size: "sm", color: eD.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(mp.E, { size: "sm", color: eD.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, r.jsxs)("div", {
        className: hd.N6,
        children: [
            (0, r.jsxs)("div", {
                className: hd.J1,
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
                    className: hd.uk,
                    children: (0, r.jsx)("div", {
                        className: hd.J1,
                        children: (0, r.jsx)(A.E, { variant: "text-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: hd.J1,
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
                    className: hd.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: hd.J1,
                            children: (0, r.jsx)(A.E, {
                                variant: "text-sm/normal",
                                children: `username: ${n.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: hd.J1,
                            children: (0, r.jsx)(A.E, {
                                variant: "text-sm/normal",
                                children: `global name: ${n.globalName ?? "—"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: hd.J1,
                            children: (0, r.jsx)(A.E, { variant: "text-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: hd.uk,
                            children: [
                                0 === Object.keys(n.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: hd.J1,
                                        children: (0, r.jsx)(A.E, { variant: "text-sm/normal", children: "None" }),
                                    }),
                                Object.entries(n.nicknames).map((e) => {
                                    let [t, a] = e,
                                        n = aL.A.getGuild(t),
                                        l = tX.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: hd.J1,
                                            children: [
                                                null != n && (0, r.jsx)(hv.Ay, { guild: n, iconSize: 16 }),
                                                null != n &&
                                                    (0, r.jsx)(A.E, { variant: "text-sm/normal", children: n.name }),
                                                null == n &&
                                                    null != l &&
                                                    (0, r.jsx)(A.E, {
                                                        variant: "text-sm/normal",
                                                        children: (0, tZ.m1)(l, V.default, t0.A),
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
                className: hd.J1,
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
                    className: hd.uk,
                    children: l.map((e) => {
                        let t = aL.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: hd.J1,
                                children: [
                                    (0, r.jsx)(hv.Ay, { guild: t, iconSize: 16 }),
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
                className: hd.J1,
                children: [
                    (0, r.jsx)(d7.m, { size: "sm" }),
                    (0, r.jsx)(A.E, { variant: "text-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != s &&
                (0, r.jsxs)("div", {
                    className: hd.uk,
                    children: [
                        (0, r.jsx)(h_, { title: "Pending Guild Member Requests:", guildIds: s.pendingRequestGuildIds }),
                        (0, r.jsx)(h_, { title: "Sent Guild Member Requests:", guildIds: s.sentRequestGuildIds }),
                        (0, r.jsx)(h_, {
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
            hb.setState({ userId: e, state: null });
        }, []),
        t = o.useCallback(async () => {
            let { userId: e, loading: t } = hb.getState();
            if (!t && null != e) {
                hb.setState({ loading: !0, error: null });
                try {
                    let t = await ho(e);
                    hb.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new m2.LG(t);
                    hb.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    hb.setState({ loading: !1 });
                }
            }
        }, []),
        a = hb.useField("loading");
    return (0, r.jsxs)("div", {
        className: hd.$n,
        children: [
            (0, r.jsx)(g.k, { placeholder: "User ID", onChange: e }),
            (0, r.jsx)(p.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function hy() {
    let e = hb.useField("state"),
        t = hb.useField("error");
    return (0, r.jsxs)(m.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, r.jsx)(hf, {}),
            null != t &&
                (0, r.jsx)(A.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: hd.qS,
                    children: t,
                }),
            null != e && (0, r.jsx)(hj, { userState: e }),
        ],
    });
}
function hC() {
    return (0, r.jsxs)(c.Ip, {
        className: hd.nd,
        children: [
            (0, r.jsx)(hg, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(hm, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(hy, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(hp, {}),
        ],
    });
}
var hE = a(761508),
    hS = a(599147),
    hN = a(808411),
    hA = a(624716),
    hk = a(398590),
    hD = a(3258),
    hT = a(467680),
    hI = a(52822),
    hw = a(642153);
let hO = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    hR = {
        "virtual-currency": function () {
            return (0, r.jsxs)(hI.Hq, {
                label: "Open New Revenue Storybook",
                direction: "vertical",
                children: [
                    (0, r.jsx)(A.E, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        style: { marginBottom: "8px" },
                        children: "This section is deprecated. Use button to open the new Revenue Storybook instead.",
                    }),
                    (0, r.jsx)(p.$, {
                        onClick: () => {
                            var e;
                            return (
                                (e = hT.RevenuePlaygroundCollectionId.VIRTUAL_CURRENCY),
                                void (hD.PlaygroundStore.setState({ selectedCollection: e, selectedStory: null }),
                                (0, hk.id)(z.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: () =>
            (0, r.jsxs)("div", { children: [(0, r.jsx)(hS.o, {}), (0, r.jsx)(hN.A, {}), (0, r.jsx)(hA.A, {})] }),
    };
function hL() {
    let [e, t] = o.useState("virtual-currency"),
        a = o.useMemo(() => hR[e], [e]);
    return (0, r.jsxs)("div", {
        className: S()(tA.nd, hw.kL),
        children: [
            (0, r.jsx)(hE.V, {
                className: hw.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: hO.map((e) => (0, r.jsx)(hE.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, r.jsx)(c.Ar, { children: (0, r.jsx)("div", { className: hw.Qs, children: (0, r.jsx)(a, {}) }) }),
        ],
    });
}
var hM = a(718446),
    hP = a(858897),
    hU = a(355097);
let hB = (0, m8.D)(() => ({ urlString: "", error: null })),
    hG = Object.entries(hU.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function hF() {
    let [e, t] = o.useState(),
        a = hB.useField("urlString"),
        n = hB.useField("error"),
        l = o.useCallback(() => {
            let e = hB.getField("urlString");
            if (null == e || "" === e) return void hB.setState({ error: "URL is required" });
            let t = (0, hM.parseSettingsUrl)({ path: e });
            ((0, hM.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? hB.setState({ error: "String did not match expected format" })
                : (0, hP.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, r.jsxs)(m.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, r.jsx)(lx.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: hG,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = hU.od[e].split("/");
                        hB.setState({ urlString: z.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, r.jsx)(g.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => hB.setState({ urlString: e, error: null }),
            }),
            (0, r.jsxs)(lK.e, {
                children: [
                    (0, r.jsx)(p.$, {
                        variant: "primary",
                        onClick: l,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(p.$, {
                        variant: "secondary",
                        onClick: () => (0, a3.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != n && (0, r.jsx)(A.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var hV = a(780964);
let h$ = (0, m8.D)(() => ({ setting: hV.X.ACCOUNT_PANEL }));
function hW() {
    let e = h$.useField("setting"),
        t = o.useCallback(() => {
            (0, hP.openUserSettings)(e);
        }, [e]),
        a = o.useMemo(() => Object.values(hV.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, r.jsxs)(m.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, r.jsx)(lx.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => h$.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, r.jsx)(p.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var hH = a(963935),
    hz = a(74612),
    hK = a(53181);
function hY(e) {
    let { title: t, initExpanded: a, highlightMode: n = "none", children: l } = e,
        [s, i] = o.useState(a),
        d = o.useCallback(() => {
            i(!s);
        }, [s]),
        c = "migrated" === n || "migrated-root" === n ? void 0 : "status-warning",
        u = (e) => (0, r.jsx)(A.E, { variant: e, color: c, children: t });
    return null == l
        ? (0, r.jsx)("div", { className: hK.NF, children: u("text-md/normal") })
        : (0, r.jsxs)("div", {
              className: hK.NF,
              children: [
                  (0, r.jsxs)(N.D, {
                      className: hK.jr,
                      onClick: d,
                      children: [
                          u("text-md/bold"),
                          (0, r.jsx)(l2.A, {
                              direction: s ? l2.A.Directions.DOWN : l2.A.Directions.RIGHT,
                              className: hK.D,
                          }),
                      ],
                  }),
                  s && (0, r.jsx)("div", { className: hK.m4, children: l }),
              ],
          });
}
function hq(e) {
    let { setting: t, depth: a, inheritedHighlightMode: n } = e,
        l = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case hH.Z6.ROOT:
                    return "migrated-root";
                case hH.Z6.SECTION:
                case hH.Z6.PANEL:
                case hH.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, n),
        s = "migrated" === l ? "migrated" : void 0,
        i = null;
    return (
        (0, hH.nW)(t) &&
            t.layout.length > 0 &&
            (i = t.layout.map((e) => (0, r.jsx)(hq, { setting: e, depth: a + 1, inheritedHighlightMode: s }, e.key))),
        (0, r.jsx)(hY, { title: t.key, initExpanded: a <= 2, highlightMode: l, children: i })
    );
}
function hJ() {
    let { node: e } = (0, G.Ay)(hz.D, ""),
        t = (0, G.KA)();
    return (0, r.jsxs)(m.n, {
        label: "Settings Tree",
        children: [
            (0, r.jsx)(b.d, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: t,
                onChange: G.jL,
            }),
            (0, r.jsx)(hq, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var hQ = a(168803);
function hZ() {
    return (0, r.jsxs)(c.Ip, {
        className: hQ.n,
        children: [
            (0, r.jsx)(hW, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(hF, {}),
            (0, r.jsx)(v.c, {}),
            (0, r.jsx)(hJ, {}),
        ],
    });
}
function hX() {
    return o.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: aS.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(nf, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: aS.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(uk, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: aS.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(uC, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: aS.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(l$, {}),
            },
        ];
        return (
            ac.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: aS.fu.SHOP, render: () => (0, r.jsx)(uh, {}) }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: aS.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(de, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: aS.fu.SHOP,
                    render: () => (0, r.jsx)(t_, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: aS.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, r.jsx)(cb, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: aS.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(lz, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: aS.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(dk.Ay, {}),
                }),
                e.push({
                    id: "age_verification",
                    name: "Age Verification",
                    group: aS.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(aJ, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: aS.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(lX, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: aS.fu.GAMES, render: () => (0, r.jsx)(oz, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: aS.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(s0, {}),
                }),
                e.push({
                    id: "detected_games",
                    name: "Detected Games",
                    group: aS.fu.GAMES,
                    render: () => (0, r.jsx)(lC, {}),
                }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: aS.fu.GAMES, render: () => (0, r.jsx)(ux, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: aS.fu.GAMES,
                    render: () => (0, r.jsx)(aV, {}),
                }),
                e.push({
                    id: "slayer_storefront",
                    name: "Slayer Storefront",
                    group: aS.fu.GAMES,
                    render: () => (0, r.jsx)(ad, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: aS.fu.USERS,
                    render: () => (0, r.jsx)(hC, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: aS.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(C, {}) })),
            e.push({
                id: "rive",
                name: "Rive",
                group: aS.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(cy, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: aS.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag"],
                render: () => (0, r.jsx)(iO, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: aS.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rs, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: aS.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(i2, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: aS.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(nK, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: aS.fu.UI, render: () => (0, r.jsx)(lm, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: aS.fu.UI,
                render: () => (0, r.jsx)(d8, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: aS.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(sh, { devSettingsCategory: au.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: aS.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(rC, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: aS.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(sh, { devSettingsCategory: au.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: aS.fu.USERS, render: () => (0, r.jsx)(dG, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: aS.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(rw, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: aS.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(rc, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: aS.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(re, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: aS.fu.USERS,
                tags: ["friends"],
                render: () => (0, r.jsx)(az, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: aS.fu.USERS,
                tags: ["channels"],
                render: () => (0, r.jsx)(nz, {}),
            }),
            ac.A.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: aS.fu.USERS,
                    render: () => (0, r.jsx)(tq, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: aS.fu.USERS,
                    render: () => (0, r.jsx)(t6, {}),
                })),
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: aS.fu.DCF, render: () => (0, r.jsx)(lo, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: aS.fu.DCF, render: () => (0, r.jsx)(n1, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: aS.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(iQ, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: aS.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up"],
                render: () => (0, r.jsx)(dI, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: aS.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(rz, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: aS.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(dv, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: aS.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(mi, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: aS.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, r.jsx)(ss, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: aS.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, r.jsx)(s6, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: aS.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(uq, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: aS.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(uM, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: aS.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(iK, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: aS.fu.BOOSTING, render: () => (0, r.jsx)(sc, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: aS.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(i7, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: aS.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(hZ, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: aS.fu.QUESTS,
                render: () => (0, r.jsx)(ae, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: aS.fu.QUESTS,
                render: () => (0, r.jsx)(uw, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: aS.fu.BILLING,
                render: () => (0, r.jsx)(hL, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: aS.fu.QUESTS,
                render: () => (0, r.jsx)(m1, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: aS.fu.USERS,
                render: () => (0, r.jsx)(ce, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: aS.fu.USERS,
                render: () => (0, r.jsx)(nw, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: aS.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(lA, {}),
            }),
            e
        );
    }, []);
}
