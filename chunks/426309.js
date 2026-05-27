a.d(t, { x: () => xM }), a(321073);
var n,
    l,
    s,
    i,
    r = a(627968),
    o = a(64700),
    d = a(364522),
    c = a(611677),
    u = a(270003),
    m = a(532446),
    h = a(821609),
    x = a(691885),
    p = a(292666),
    g = a(404778),
    v = a(243721),
    j = a(952818),
    b = a(274372),
    f = a(372684),
    y = a(607814),
    C = a(871421),
    _ = a(227628),
    E = a(468550),
    S = a(781710);
function N() {
    let e = (0, _.MZ)((e) => e.isOpen),
        t = (0, E.sY)((e) => e.isOpen),
        a = o.useCallback((e) => {
            if (!e) return void (0, E.kF)();
            let t = j.Ay.getVisibleGame()?.id,
                a = b.A.getLastClipsSession()?.newClipIds[0],
                n = (null != a ? b.A.getClipById(a)?.applicationId : null) ?? b.A.getClips()[0]?.applicationId,
                l = t ?? n;
            null != l && (0, E.M8)(l);
        }, []),
        [n, l] = o.useState(f.rb.KILL),
        [s, i] = o.useState(1),
        [N, A] = o.useState(""),
        [k, I] = o.useState("");
    return (0, r.jsx)(d.Ip, {
        children: (0, r.jsxs)(c.l, {
            children: [
                (0, r.jsx)(u.n, {
                    label: "Send Test Signals",
                    children: (0, r.jsxs)(m.M, {
                        children: [
                            (0, r.jsx)(h.$, { text: "Manual", onClick: () => y.Ts({ type: f.Gy.MANUAL }) }),
                            (0, r.jsx)(h.$, {
                                text: "Distributed",
                                onClick: () =>
                                    y.Ts({
                                        type: f.Gy.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, r.jsx)(h.$, {
                                text: "Phrase: Clip",
                                onClick: () => y.Ts({ type: f.Gy.PHRASE, text: "clip" }),
                            }),
                            (0, r.jsx)(h.$, {
                                text: "Yelling",
                                onClick: () => y.Ts({ type: f.Gy.YELLING, userId: "123" }),
                            }),
                            (0, r.jsx)(h.$, {
                                text: "Laughter",
                                onClick: () => y.Ts({ type: f.Gy.LAUGHTER, label: "laughter", confidence: 1 }),
                            }),
                            (0, r.jsx)(h.$, {
                                text: "Shouting",
                                onClick: () => y.Ts({ type: f.Gy.LAUGHTER, label: "shouting", confidence: 1 }),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)(u.n, {
                    label: "Game Event Creator",
                    children: [
                        (0, r.jsxs)(m.M, {
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
                        (0, r.jsx)(p.k, {
                            label: "Title (optional)",
                            value: N,
                            onChange: A,
                            placeholder: "e.g., First Blood",
                        }),
                        (0, r.jsx)(p.k, {
                            label: "Description (optional)",
                            value: k,
                            onChange: I,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, r.jsx)(h.$, {
                            text: "Create Game Event",
                            onClick: () => {
                                y.Ts({ type: f.Gy.GAME_EVENT, eventType: n, importance: s, title: N, description: k });
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            text: "stash decider data",
                            onClick: () => {
                                C.Ay.debugStashDeciderData();
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            text: "re-run ranking",
                            onClick: () => {
                                C.ih.debugRerunRanking();
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(u.n, { label: "Clip Metadata Tool", children: (0, r.jsx)(S.A, {}) }),
                (0, r.jsx)(g.c, {}),
                (0, r.jsxs)(u.n, {
                    label: "Reminder UI",
                    children: [
                        (0, r.jsx)(v.d, {
                            label: "Clips Quick Bar",
                            description: "Toggle the inline reminder quick bar above the account panel.",
                            checked: e,
                            onChange: (e) => (e ? (0, _.w9)() : (0, _.yj)()),
                        }),
                        (0, r.jsx)(v.d, {
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
var A = a(503698),
    k = a.n(A),
    I = a(939249),
    D = a(834730),
    T = a(683071),
    R = a(331322),
    O = a(811893),
    w = a(534514),
    M = a(17928),
    L = a(538064),
    P = a(265059),
    U = a(902592),
    G = a(869146);
a(323874), a(14289), a(35956);
var F = a(789645),
    B = a(589158),
    V = a(65593),
    $ = a(740572),
    W = a(581298),
    z = a(98596),
    H = a(287809),
    K = a(901139),
    Y = a(641886),
    q = a(780898),
    J = a(652215),
    Q = a(726267),
    X = a(427262);
function Z(e) {
    let { nameplate: t } = e,
        a = (0, M.bG)([H.default], () => H.default.getCurrentUser()),
        n = X.Ay.useName(a) ?? "";
    return (0, r.jsx)(Q.g, {
        username: n,
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        streaming: !1,
        status: J.clD.ONLINE,
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
var ee = a(736653),
    et = a(653523),
    ea = a(809948);
function en(e) {
    let { selected: t, onSelect: a } = e,
        n = (0, ee.Ay)();
    return (0, r.jsxs)("div", {
        className: ea.N,
        children: [
            (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Preselected Gradient" }),
            (0, r.jsx)("div", {
                className: ea.Z,
                children: Y.Z6.map((e) => {
                    let l = n !== J.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        s = t === e.name;
                    return (0, r.jsx)(
                        et.S4,
                        { onSelect: () => a(e), style: { background: l }, name: e.name, isSelected: s },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
var el = a(696157),
    es = a(95701),
    ei = a(331884);
function er(e) {
    let { selected: t, nameplate: a } = e,
        n = (0, ei.i)(),
        l = new es.cq({ id: "0", type: J.rbe.DM, name: "self", guild_id: "0", recipients: [n.id] });
    return (0, r.jsx)(el.th, { selected: t, channel: l, user: n, nameplate: a });
}
var eo = a(698638),
    ed = a(877203);
function ec() {
    let [e, t] = (0, o.useState)(!1),
        [a, n] = (0, o.useState)(!1),
        [l, s] = (0, o.useState)(null),
        { node: i } = (0, W.Ay)(z.k, ""),
        d = (0, K.Ay)((e) => e.toolsCache),
        { setToolsCache: c, removeToolsCache: u } = (0, K.DE)(),
        { setImgCache: m } = (0, K.TW)(),
        x = (0, o.useCallback)(
            (e) => {
                let t = d[e];
                null != t
                    ? s({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : s((t) =>
                          null == t ? { previewToolKey: e, palette: Y.Wj, skuId: "0" } : { ...t, previewToolKey: e },
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
                className: ed.ne,
                children: [
                    (0, r.jsxs)("div", {
                        className: ed.gO,
                        children: [
                            (0, r.jsx)(h.$, {
                                size: "sm",
                                onClick: () => {
                                    n(!1), t((e) => !e);
                                },
                                variant: "secondary",
                                text: "Toggle Themes",
                            }),
                            (0, r.jsx)(h.$, {
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
                        className: ed.uQ,
                        children: [
                            e && (0, r.jsx)($.A, { node: i }),
                            a &&
                                (0, r.jsx)(en, {
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
                className: ed.iW,
                children: [
                    (0, r.jsx)(eu, { nameplate: l }, l?.palette?.name),
                    (0, r.jsxs)("div", {
                        className: ed.Uo,
                        children: [
                            (0, r.jsx)(D.E, {
                                variant: "text-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, r.jsx)(V.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: eo.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        a = e[0],
                                        n = await a.arrayBuffer();
                                    m(t, t, (0, q.nI)(n)), c(t, t, Y.Wj);
                                },
                            }),
                            (0, r.jsx)("div", {
                                className: ed.is,
                                children: Object.values(d).map((e) => {
                                    let { url: t } = e;
                                    return (0, r.jsx)(em, { src: t, onSetStatic: x, removeAsset: g }, t);
                                }),
                            }),
                            (0, r.jsx)(ex, {
                                label: "gradient override",
                                onChange: (e) => p({ name: Y.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, r.jsx)(eh, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eu(e) {
    let { nameplate: t } = e,
        [a, n] = (0, o.useState)(320),
        l = (0, o.useRef)(null),
        s = (0, o.useRef)(null),
        i = (0, o.useRef)(null),
        c = (0, o.useRef)(document),
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
                c.current = t;
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
                null != s.current && (c.current.removeEventListener("mousemove", s.current), (s.current = null)),
                    null != i.current && (c.current.removeEventListener("mouseup", i.current), (i.current = null));
            },
            [],
        ),
        (0, r.jsx)(d.Ip, {
            className: ed.Fp,
            orientation: "horizontal",
            children: (0, r.jsxs)("div", {
                ref: l,
                className: ed.ey,
                style: { width: `${a}px` },
                children: [
                    (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Memberlist" }),
                    (0, r.jsx)(ep, { nameplate: t }),
                    (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "DMs" }),
                    (0, r.jsx)(eg, { nameplate: t }),
                    (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "RTC" }),
                    (0, r.jsx)(ev, { nameplate: t }),
                    (0, r.jsx)("div", { className: ed.Di, onMouseDown: m }),
                ],
            }),
        })
    );
}
function em(e) {
    let { src: t, onSetStatic: a, removeAsset: n } = e;
    return (0, r.jsxs)("div", {
        className: ed.xO,
        children: [
            (0, r.jsx)(I.D, {
                onClick: () => n(t),
                className: ed.yV,
                children: (0, r.jsx)(F.P, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, r.jsx)("img", { className: ed.Ez, src: t, alt: "" }),
            (0, r.jsx)("div", {
                className: ed.Lu,
                children: (0, r.jsx)(h.$, {
                    onClick: () => a(t),
                    size: "sm",
                    variant: "secondary",
                    text: "set nameplate",
                }),
            }),
        ],
    });
}
function eh(e) {
    let { label: t, onClick: a } = e;
    return (0, r.jsxs)("div", {
        className: ed.Uu,
        children: [
            (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "coming soon" }),
            (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: a }),
        ],
    });
}
function ex(e) {
    let { label: t, onChange: a } = e;
    return (0, r.jsxs)("div", {
        className: ed.Im,
        children: [
            (0, r.jsx)(D.E, { variant: "text-sm/normal", children: t }),
            (0, r.jsx)("input", {
                onChange: (e) => {
                    a(e.target.value);
                },
                className: ed.QL,
                placeholder: "#000000",
            }),
        ],
    });
}
function ep(e) {
    let { nameplate: t } = e,
        a = (0, M.bG)([H.default], () => H.default.getCurrentUser());
    return (0, r.jsx)("div", {
        className: ed.VH,
        children: (0, r.jsxs)("div", {
            className: ed.H1,
            children: [
                (0, r.jsx)(D.E, { className: ed.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(B.A, { nameplate: t, user: a, currentUser: a }),
                (0, r.jsx)(D.E, { className: ed.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(B.A, { nameplate: t, selected: !0, user: a, currentUser: a }),
                        (0, r.jsx)(B.A, { selected: !0, user: a, currentUser: a }),
                    ],
                }),
            ],
        }),
    });
}
function eg(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: ed.VH,
        children: (0, r.jsxs)("div", {
            className: ed.H1,
            children: [
                (0, r.jsx)(D.E, { className: ed.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(er, { nameplate: t }),
                (0, r.jsx)(D.E, { className: ed.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(er, { selected: !0, nameplate: t }), (0, r.jsx)(er, { selected: !0 })],
                }),
            ],
        }),
    });
}
function ev(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: ed.VH,
        children: (0, r.jsx)("div", { className: ed.X2, children: (0, r.jsx)(Z, { nameplate: t }) }),
    });
}
a(508300);
var ej = a(835245),
    eb = a(157559),
    ef = a(780777),
    ey = a(993408),
    eC = a(315949),
    e_ = a(559474),
    eE = a(816866),
    eS = a(87558),
    eN = a(575593),
    eA = a(631903),
    ek = a(224640),
    eI = a(408278),
    eD = a(972213),
    eT = a(43990),
    eR = a(192308),
    eO = a(661531),
    ew = a(231723),
    eM = a(900686),
    eL = a(986687),
    eP = a(228537),
    eU = a(735438),
    eG = a.n(eU),
    eF = a(219220),
    eB = a(480335);
let eV = (e) => {
    let { profileEffect: t } = e,
        a = o.useMemo(() => (0, eU.cloneDeep)(t), [t]),
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
        { layerData: s } = (0, eF.A)({ skuId: "debug", layers: l.effects });
    return (0, r.jsx)(eB.p, { profileEffect: l, layerData: s, skuId: "debug" });
};
var e$ = a(314485),
    eW = a(778765);
let ez =
        "https://cdn.discordapp.com/assets/content/ad2a252a6866e1ecb3bab521e2baaabbf13ab2d1ecaa8af67862c53c91f76761.png",
    eH = { [eS.qH.THUMBNAIL]: null, [eS.qH.STATIC]: null, [eS.qH.REDUCED_MOTION]: null },
    eK = "debug",
    eY = "reduced-motion-preview-modal",
    eq = (e) => {
        let { transitionState: t, onClose: a, frameSrc: n, theme: l } = e;
        return (0, r.jsx)(ek.d, {
            transitionState: t,
            size: "md",
            onClose: a,
            maxHeight: "viewport",
            children: (0, r.jsxs)("div", {
                className: e$.Xd,
                children: [
                    (0, r.jsx)("div", {
                        className: e$.y6,
                        children: (0, r.jsx)(eI.K, {
                            "aria-label": "Close",
                            onClick: a,
                            icon: eD.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: e$.rU,
                        children: [
                            (0, r.jsx)(eT.N, {
                                theme: l,
                                children: (e) =>
                                    (0, r.jsx)("img", {
                                        src: ez,
                                        alt: "",
                                        className: k()(e$.aM, e),
                                        "aria-hidden": !0,
                                    }),
                            }),
                            null != n &&
                                "" !== n &&
                                (0, r.jsx)("img", { src: n, className: e$.SD, alt: "Reduced motion preview" }),
                        ],
                    }),
                ],
            }),
        });
    },
    eJ = (e) => {
        let { type: t, frame: a, theme: n, onClear: l } = e,
            s = t === eS.qH.REDUCED_MOTION,
            i = s ? ez : eW.A,
            o = (0, r.jsx)(eT.N, {
                theme: n,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("img", { src: i, alt: "", className: k()(e$.aM, e), "aria-hidden": !0 }),
                            a?.src != null &&
                                "" !== a.src &&
                                (0, r.jsx)("img", { src: a.src, className: k()(e$.SD, e), alt: "" }),
                        ],
                    }),
            });
        return (0, r.jsxs)("div", {
            className: e$.pK,
            children: [
                (0, r.jsx)(w.D, { variant: "heading-sm/bold", children: t }),
                s
                    ? (0, r.jsx)(I.D, {
                          className: k()(e$.zd, e$.eB),
                          onClick: () => {
                              (0, eR.hasModalOpen)(eY)
                                  ? (0, eR.closeModal)(eY)
                                  : (0, eR.openModalLazy)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, r.jsx)(eq, { ...e, frameSrc: a?.src ?? null, theme: n }),
                                            ),
                                        { modalKey: eY, onCloseRequest: () => (0, eR.closeModal)(eY) },
                                    );
                          },
                          children: o,
                      })
                    : (0, r.jsx)("div", { className: e$.zd, children: o }),
                null != a && (0, r.jsx)(h.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: l }),
            ],
        });
    },
    eQ = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, eE.wu)(),
            n = (0, M.bG)([H.default], () => H.default.getCurrentUser()),
            [l, s] = o.useState(!0),
            i = o.useRef({}),
            [d, c] = o.useState(!1),
            [u, m] = o.useState(!1),
            [x, p] = o.useState(8),
            [g, v] = o.useState([]),
            [j, b] = o.useState(eH),
            f = o.useRef([]),
            [y, C] = o.useState(t.name),
            _ = y.toLowerCase().replace(/\s+/g, "_"),
            E = o.useMemo(
                () => ({
                    type: eN.R.PROFILE_EFFECT,
                    skuId: eK,
                    title: eK,
                    description: eK,
                    accessibilityLabel: eK,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: g,
                    animationType: eA.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [g],
            ),
            S = d ? eO.A.themes.DARKER : eO.A.themes.LIGHT,
            N = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            A = (e, t) => {
                let a = N(t);
                null != a &&
                    (0, eS.Mz)(a, (t) => {
                        b((n) => ({ ...n, [e]: (0, eS.GT)(t, a) }));
                    });
            };
        o.useEffect(() => {
            let e = t.effects;
            e.length > 0 && v(e);
        }, [t.effects]),
            o.useEffect(() => {
                let e = t.stillFrames;
                null != e &&
                    Object.entries(e).forEach((e) => {
                        let [t, a] = e;
                        if (null != a) {
                            if ("" !== a.src && null != a.src && ("" === a.base64 || null == a.base64))
                                b((e) => ({ ...e, [t]: a }));
                            else if ("" !== a.base64 && null != a.base64) {
                                let e = (0, eS.fB)(a.base64);
                                (a.src = e), f.current.push(e), b((e) => ({ ...e, [t]: a }));
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
            e.readonly || t({ skuId: e.skuId, name: y, effects: g, stillFrames: j });
        }, [g, j, y]),
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
                  className: e$.zr,
                  children: [
                      (0, r.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, r.jsx)(ef.A, {
                                  ref: (e) => {
                                      i.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = N(e);
                                      null != t &&
                                          (0, eS.Mz)(t, async (e) => {
                                              let a = await (0, eS.Ay)(e, t, g.length);
                                              v((e) => [...e, a]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, r.jsx)(ef.A, {
                                  ref: (e) => {
                                      i.current.thumbnail = e;
                                  },
                                  onChange: (e) => A(eS.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(ef.A, {
                                  ref: (e) => {
                                      i.current.static = e;
                                  },
                                  onChange: (e) => A(eS.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(ef.A, {
                                  ref: (e) => {
                                      i.current.reducedMotion = e;
                                  },
                                  onChange: (e) => A(eS.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: e$.Vg,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: k()(e$.nM, e$.uW),
                                  children: [
                                      (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Profile Effect Name" }),
                                      (0, r.jsx)("input", {
                                          type: "text",
                                          value: y,
                                          className: e$.hF,
                                          onChange: (e) => {
                                              C(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: e$.nM,
                                  children: [
                                      (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Dark Theme" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: d,
                                          className: e$.OO,
                                          onChange: () => {
                                              c(!d);
                                          },
                                      }),
                                      (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Show User Profile" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: u,
                                          className: e$.OO,
                                          onChange: () => {
                                              m(!u);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: e$.nM,
                                  children: [
                                      (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Border Radius" }),
                                      (0, r.jsx)("input", {
                                          type: "range",
                                          min: 4,
                                          max: 24,
                                          step: 2,
                                          value: x,
                                          onChange: (e) => p(+e.target.value),
                                      }),
                                      (0, r.jsxs)(D.E, { variant: "text-sm/normal", children: [x, "px"] }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: k()(e$.nz, e$.VH),
                                  style: { borderRadius: x },
                                  children: [
                                      u
                                          ? (0, r.jsx)("div", {
                                                className: e$.jq,
                                                children: (0, r.jsx)(eP.A, {
                                                    user: n,
                                                    currentUser: n,
                                                    transitionState: ew.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: e$.JB,
                                                }),
                                            })
                                          : (0, r.jsx)(eT.N, {
                                                theme: S,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: k()(e$.aM, e),
                                                        children: (0, r.jsx)("img", { src: eW.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      l &&
                                          (0, r.jsx)("div", {
                                              className: e$.KJ,
                                              children: (0, r.jsx)(eV, { profileEffect: E }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  children:
                                      u &&
                                      (0, r.jsxs)("div", {
                                          className: k()(e$.f5, e$.VH),
                                          style: { borderRadius: x },
                                          children: [
                                              (0, r.jsx)(eL.A, {
                                                  user: n,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  hideProfileFrame: !0,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, r.jsx)(eV, { profileEffect: E }),
                                          ],
                                      }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: e$.nz,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: e$.nM,
                                          children: [
                                              (0, r.jsx)(h.$, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => i.current.animated?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(D.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: e$.nM,
                                          children: [
                                              (0, r.jsx)(h.$, {
                                                  variant: "active",
                                                  text: "Upload thumbnail.png",
                                                  onClick: () => i.current.thumbnail?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(h.$, {
                                                  variant: "active",
                                                  text: "Upload static.png",
                                                  onClick: () => i.current.static?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(h.$, {
                                                  variant: "active",
                                                  text: "Upload reduced_motion.png",
                                                  onClick: () => i.current.reducedMotion?.activateUploadDialogue(),
                                              }),
                                          ],
                                      }),
                                      (0, r.jsx)("div", {
                                          className: e$.q6,
                                          children: (0, r.jsx)("div", {
                                              className: e$.nM,
                                              children: (0, r.jsx)(h.$, {
                                                  variant: "primary",
                                                  text: "Replay Animation",
                                                  onClick: () => {
                                                      s(!1), setTimeout(() => s(!0), 100);
                                                  },
                                              }),
                                          }),
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: k()(e$.q6, e$.XA),
                                          children: [
                                              (0, r.jsx)(D.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Please download both configs for the drop package!",
                                              }),
                                              (0, r.jsx)(D.E, {
                                                  variant: "text-sm/bold",
                                                  color: "text-feedback-critical",
                                                  children: "WARNING: The full config is really big :0",
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: e$.nM,
                                                  children: [
                                                      (0, r.jsx)(eM.A, {
                                                          fileContents: () => (0, eS.rs)(g),
                                                          contentType: "text/plain",
                                                          fileName: `${_}_timing_config.txt`,
                                                          children: (0, r.jsx)(h.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(eM.A, {
                                                          fileContents: () =>
                                                              JSON.stringify({
                                                                  ...t,
                                                                  name: y,
                                                                  readonly: !1,
                                                                  effects: g,
                                                                  stillFrames: j,
                                                              }),
                                                          contentType: "text/plain",
                                                          fileName: `${_}_config.txt`,
                                                          children: (0, r.jsx)(h.$, {
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
                                          className: e$.uW,
                                          children: [
                                              (0, r.jsx)(w.D, { variant: "heading-lg/bold", children: "Still Frames" }),
                                              (0, r.jsx)("div", {
                                                  className: e$.mv,
                                                  children: Object.entries(j).map((e) => {
                                                      let [t, a] = e;
                                                      return (0, r.jsx)(
                                                          eJ,
                                                          {
                                                              type: t,
                                                              frame: a,
                                                              theme: S,
                                                              onClear: () => {
                                                                  b((e) => ({ ...e, [t]: null }));
                                                              },
                                                          },
                                                          t,
                                                      );
                                                  }),
                                              }),
                                          ],
                                      }),
                                      g.some((e) => (e.randomizedSources ?? []).length > 0) &&
                                          (0, r.jsxs)("div", {
                                              className: k()(e$.uW, e$.l7),
                                              children: [
                                                  (0, r.jsx)(D.E, {
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
                                  className: k()(e$.Vg, e$.ZF),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: e$.cD,
                                          children: (0, r.jsx)(h.$, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: () => {
                                                  v([]), b(eH);
                                              },
                                          }),
                                      }),
                                      g.map((e, t) =>
                                          (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: e$.ec,
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: e$.D1,
                                                          children: [
                                                              (0, r.jsx)(w.D, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, r.jsx)("img", {
                                                                  src: e.src,
                                                                  className: e$.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, r.jsxs)(r.Fragment, {
                                                                      children: [
                                                                          (0, r.jsx)(w.D, {
                                                                              variant: "heading-md/bold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, r.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, r.jsx)(w.D, {
                                                                                                  variant:
                                                                                                      "heading-sm/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, r.jsx)("img", {
                                                                                              src: e.src,
                                                                                              className: e$.oq,
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
                                                          className: k()(e$.Vg, e$.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: e$.nz,
                                                                  children: [
                                                                      (0, r.jsx)(D.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: e$.hF,
                                                                          onChange: (e) => {
                                                                              v((a) => {
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
                                                                  className: e$.nz,
                                                                  children: [
                                                                      (0, r.jsx)(D.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: e$.hF,
                                                                          onChange: (e) => {
                                                                              v((a) => {
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
                                                          className: k()(e$.Vg, e$.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: e$.nz,
                                                                  children: [
                                                                      (0, r.jsx)(D.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: e$.OO,
                                                                          onChange: (e) => {
                                                                              v((a) => {
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
                                                                  className: e$.nz,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, r.jsxs)(r.Fragment, {
                                                                          children: [
                                                                              (0, r.jsx)(D.E, {
                                                                                  variant: "text-md/bold",
                                                                                  children: "Loop Delay",
                                                                              }),
                                                                              (0, r.jsx)("input", {
                                                                                  type: "number",
                                                                                  value: e.loopDelay,
                                                                                  className: e$.hF,
                                                                                  onChange: (e) => {
                                                                                      v((a) => {
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
                                                          children: (0, r.jsx)(ef.A, {
                                                              ref: (e) => {
                                                                  i.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let a;
                                                                  null != (a = N(e)) &&
                                                                      (0, eS.Mz)(a, (e) => {
                                                                          v((n) => {
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
                                                          className: k()(e$.nM, e$._N),
                                                          children: [
                                                              (0, r.jsx)(h.$, {
                                                                  variant: "secondary",
                                                                  text: "Add Alternative",
                                                                  onClick: () =>
                                                                      i.current[
                                                                          `randomized-${t}`
                                                                      ]?.activateUploadDialogue(),
                                                              }),
                                                              (0, r.jsx)(h.$, {
                                                                  variant: "critical-secondary",
                                                                  text: "Remove Layer",
                                                                  onClick: () => {
                                                                      v((t) => t.filter((t) => t !== e));
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
    eX = "Make sure you're only uploading text files!",
    eZ = (e) => {
        let { profileEffect: t, onClick: a } = e,
            { deleteProfileEffect: n } = (0, eE.wu)();
        return (0, r.jsxs)(I.D, {
            className: e$.B0,
            onClick: a,
            children: [
                (0, r.jsx)("div", { className: e$.yV, style: { backgroundImage: `url(${t.effects?.[0]?.base64})` } }),
                (0, r.jsxs)("div", {
                    className: e$.eL,
                    children: [
                        (0, r.jsx)(D.E, { variant: "text-md/bold", children: t.name }),
                        (0, r.jsx)(h.$, {
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
function e0() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, eE.wu)(),
        [n, l] = o.useState(),
        s = o.useRef(null),
        { categories: i } = (0, eC.A)(),
        d = o.useMemo(() => (0, ey.Wj)(i), [i]),
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
        x = o.useCallback(
            (e, a) => {
                if (null == a || !e.type.startsWith("text/")) return (0, e_.Ni)(eX);
                let [n, l] = a.split(",");
                if (!n.includes("text/plain")) return (0, e_.Ni)(eX);
                let s = JSON.parse(atob(l));
                (s.skuId = (0, ej.A)()), t(s), (0, e_.GF)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        g = o.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, e_.Ni)("Error uploading file. Try again!")
                    : (0, e_.KE)(e.currentTarget.files, x, e_.Ni);
            },
            [x],
        );
    return (0, r.jsxs)("div", {
        className: e$.zr,
        children: [
            null == n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: e$.nz,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: k()(e$.uW, e$.nM),
                                    children: [
                                        (0, r.jsx)(w.D, {
                                            variant: "heading-xl/bold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, r.jsx)(h.$, {
                                            variant: "critical-secondary",
                                            text: "Clear All",
                                            onClick: async () => {
                                                (await eb.A.confirm({
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
                                    className: e$.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(eZ, { profileEffect: e, onClick: () => l(e) }, e.skuId),
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: k()(e$.nM, e$._N, e$.uW),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: e$.au,
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: "Import Shared Config",
                                        }),
                                        (0, r.jsx)(ef.A, { ref: s, onChange: g, multiple: !1 }),
                                    ],
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: () => {
                                        t({ skuId: (0, ej.A)(), name: "New Profile Effect", effects: [] });
                                    },
                                }),
                            ],
                        }),
                        (0, r.jsx)("hr", {}),
                        (0, r.jsxs)("div", {
                            className: e$.uW,
                            children: [
                                (0, r.jsx)(w.D, { variant: "heading-xl/bold", children: "All Effects" }),
                                (0, r.jsx)(p.k, {
                                    value: c,
                                    onChange: (e) => {
                                        u(e);
                                    },
                                }),
                                (0, r.jsx)("div", {
                                    className: e$.xm,
                                    children: m.map((e) =>
                                        (0, r.jsx)(
                                            I.D,
                                            {
                                                className: e$.S5,
                                                style: { backgroundImage: `url(${e.thumbnailPreviewSrc})` },
                                                onClick: () => {
                                                    let t = {
                                                        [eS.qH.THUMBNAIL]:
                                                            null != e.thumbnailPreviewSrc &&
                                                            "" !== e.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eS.qH.STATIC]:
                                                            null != e.staticFrameSrc && "" !== e.staticFrameSrc
                                                                ? {
                                                                      src: e.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [eS.qH.REDUCED_MOTION]:
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
                                                    className: e$.Hd,
                                                    children: (0, r.jsx)(D.E, {
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
            null != n && (0, r.jsx)(eQ, { profileEffect: n }),
        ],
    });
}
var e1 = a(935399),
    e2 = a(462887),
    e8 = a(289873),
    e6 = a(478016),
    e3 = a(565645),
    e5 = a(7584),
    e4 = a(619499),
    e9 = a(207803),
    e7 = a(84540),
    te = a(836602),
    tt = a(999291),
    ta = a(903209),
    tn = a(841702),
    tl = a(892118),
    ts = a(744808),
    ti = a(725287),
    tr = a(626768),
    to = a(464896);
function td() {
    let e = (0, ee.Ay)();
    return (0, r.jsxs)("div", {
        className: ti.z3,
        children: [
            (0, r.jsx)("img", { src: (0, e2.M)(e) ? tr : to, alt: "" }),
            (0, r.jsx)(D.E, {
                variant: "text-sm/normal",
                children:
                    "No frames found on your account. You must be granted test profile frame entitlements to use this tool.",
            }),
        ],
    });
}
function tc() {
    let e = (0, M.bG)([H.default], () => H.default.getCurrentUser()),
        t = (0, tt.Ay)(e?.id);
    o.useEffect(() => {
        e?.id != null && (0, ta.A)(e.id);
    }, [e?.id]);
    let { purchases: a, isFetchingPurchases: n } = (0, tn.Bf)(),
        l = o.useMemo(() => (0, ey.MG)(a, new Map()), [a]),
        [{ pendingProfileFrame: s }, i] = (0, M.yK)([te.A], () => [te.A.getPendingChanges(), te.A.showNotice()]),
        d = void 0 === s ? t?.profileFrame : s,
        c = null != d ? a.get(d.skuId) : void 0,
        u = (0, tl.s)(c?.items[0]) ? c.items[0] : void 0;
    return (
        (0, e1.l0)(e9.RE),
        (0, r.jsxs)("div", {
            className: ti.kL,
            children: [
                (0, r.jsxs)(w.D, {
                    variant: "heading-xl/bold",
                    children: [
                        (0, r.jsx)(e3.A, {
                            emojiName: e5.Ay.getByName("frame_with_picture")?.surrogates,
                            className: ti.Zg,
                        }),
                        "Profile Frames!",
                    ],
                }),
                0 === l.length && n && (0, r.jsx)(e8.y, {}),
                0 === l.length && !n && (0, r.jsx)(td, {}),
                l.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: ti.MK,
                        children: [
                            (0, r.jsx)(D.E, {
                                variant: "text-sm/normal",
                                children: "Select a frame to preview. Save to apply the frame to your main profile.",
                            }),
                            (0, r.jsxs)("ul", {
                                className: ti.p_,
                                children: [
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(h.$, {
                                                text: "None",
                                                variant: "secondary",
                                                fullWidth: !0,
                                                icon: null == d ? e6.U : void 0,
                                                disabled: null == d,
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
                                                      children: (0, r.jsx)(h.$, {
                                                          text: t.name,
                                                          variant: "secondary",
                                                          fullWidth: !0,
                                                          icon: d?.skuId === e.skuId ? e6.U : void 0,
                                                          disabled: d?.skuId === e.skuId,
                                                          onClick: () => (0, e7.p)({ profileFrame: e }),
                                                      }),
                                                  },
                                                  e.skuId,
                                              );
                                    }),
                                ],
                            }),
                            i && (0, r.jsx)(e4.A, {}),
                            (0, r.jsxs)("div", {
                                className: ti.VH,
                                children: [
                                    (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "Preview:" }),
                                    (0, r.jsxs)("div", {
                                        className: ti.ME,
                                        children: [
                                            (0, r.jsx)("img", { src: eW.A, alt: "" }),
                                            null != u && (0, r.jsx)(ts.A, { frame: u }),
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
var tu = a(702841),
    tm = a(793574),
    th = a(590180),
    tx = a(4227),
    tp = a(828614),
    tg = a(61750),
    tv = a(328762);
let tj = (e) => {
        let [t, a] = o.useState(0);
        return (
            o.useLayoutEffect(() => {
                let e = tx.A.getPurchase;
                return (
                    (tx.A.getPurchase = (e) => void 0),
                    tx.A.emitChange(),
                    a(1),
                    () => {
                        (tx.A.getPurchase = e), tx.A.emitChange();
                    }
                );
            }, []),
            (0, r.jsx)("div", { className: tv.Do, children: (0, r.jsx)(tp.A, { ...e }, t) })
        );
    },
    tb = () => {
        let e = (0, tu.bG)([H.default], () => H.default.getCurrentUser()),
            t = (0, tu.bG)([th.A], () => th.A.categories),
            a = (0, tu.bG)([tx.A], () => tx.A.purchases),
            n = (0, tu.bG)([th.A], () => th.A.lastSuccessfulFetch),
            l = t.size > 0 && a.size > 0 && null != n,
            { isFetching: s, categories: i } = (0, tn.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: l }),
            d = l ? t : i,
            c = l || (!s && d.size > 0),
            [u, m] = o.useState(""),
            [x, g] = o.useState(null),
            [v, j] = o.useState(null);
        return (o.useEffect(() => {
            if ("" === u.trim() || !c) {
                g(null), j(null);
                return;
            }
            let e = th.A.getProduct(u),
                t = th.A.getCategoryForProduct(u);
            null != e && null != t ? (g(e), j(t)) : (g(null), j(null));
        }, [u, c]),
        s)
            ? (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Loading categories and collectibles..." })
            : null == e
              ? (0, r.jsx)(D.E, { variant: "text-md/normal", children: "No user found" })
              : (0, r.jsxs)("div", {
                    className: tv.kL,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tv.uW,
                            children: [
                                (0, r.jsx)(w.D, { variant: "heading-lg/semibold", children: "Product Configuration" }),
                                (0, r.jsxs)("div", {
                                    className: tv.qp,
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            variant: "text-md/semibold",
                                            className: tv.NB,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, r.jsx)(p.k, { value: u, onChange: m, placeholder: "Enter product SKU ID" }),
                                        !c &&
                                            "" !== u.trim() &&
                                            (0, r.jsx)(D.E, {
                                                variant: "text-sm/normal",
                                                className: tv.KQ,
                                                children: "Loading products...",
                                            }),
                                        c &&
                                            "" !== u.trim() &&
                                            null == x &&
                                            (0, r.jsx)(D.E, {
                                                variant: "text-sm/normal",
                                                className: tv.kc,
                                                children: "Product not found",
                                            }),
                                        null != x &&
                                            (0, r.jsxs)(D.E, {
                                                variant: "text-sm/normal",
                                                className: tv.xT,
                                                children: ["Found: ", x.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tv.uW,
                            children: [
                                (0, r.jsx)(w.D, { variant: "heading-lg/semibold", children: "Product Preview" }),
                                null != x && null != v
                                    ? (0, r.jsxs)("div", {
                                          className: tv.i1,
                                          children: [
                                              (0, r.jsx)(tj, { skuId: x.skuId }),
                                              (0, r.jsx)(h.$, {
                                                  variant: "primary",
                                                  onClick: () => {
                                                      null != x &&
                                                          null != e &&
                                                          (0, tg.A)({
                                                              product: x,
                                                              analyticsLocations: [tm.A.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)("div", {
                                          className: tv.qf,
                                          children: (0, r.jsx)(D.E, {
                                              variant: "text-md/normal",
                                              className: tv.X2,
                                              children: "Enter a valid product SKU ID to see the preview",
                                          }),
                                      }),
                            ],
                        }),
                    ],
                });
    };
var tf = a(410724);
let ty = { profile_effects: 1, nameplates: 2, profile_frames: 3, product_preview: 4 },
    tC = (e) => {
        let { setTab: t } = e,
            a = (0, M.bG)([G.A], () => G.A.getWindowOpen(J.MLl.DEVTOOLS_POPOUT));
        return (0, r.jsxs)("div", {
            className: tf.Qs,
            children: [
                (0, r.jsx)(I.D, {
                    onClick: () => {
                        t(1);
                    },
                    children: (0, r.jsx)("div", {
                        className: k()(tf.vK, tf.Dg),
                        children: (0, r.jsx)(D.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Effects",
                        }),
                    }),
                }),
                (0, r.jsx)(I.D, {
                    onClick: () => {
                        t(2);
                    },
                    children: (0, r.jsx)("div", {
                        className: k()(tf.vK, tf.st),
                        children: (0, r.jsx)(D.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Nameplates",
                        }),
                    }),
                }),
                (0, r.jsx)(I.D, {
                    onClick: () => {
                        t(3);
                    },
                    children: (0, r.jsx)("div", {
                        className: k()(tf.vK, tf.Dg),
                        children: (0, r.jsx)(D.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Frames",
                        }),
                    }),
                }),
                (0, r.jsx)(I.D, {
                    onClick: () => {
                        t(4);
                    },
                    children: (0, r.jsx)("div", {
                        className: k()(tf.vK, tf.IP),
                        children: (0, r.jsx)(D.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Products",
                        }),
                    }),
                }),
                !a &&
                    (0, r.jsx)("div", {
                        style: { marginTop: 16 },
                        children: (0, r.jsx)(T.w, {
                            type: "warning",
                            children: (0, r.jsxs)(R.B, {
                                gap: 8,
                                children: [
                                    (0, r.jsx)(D.E, { variant: "text-md/semibold", children: "Not enough space?" }),
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        children: "You can pop out the DevTools to see the full layout.",
                                    }),
                                    (0, r.jsx)(h.$, {
                                        size: "sm",
                                        icon: O.t,
                                        variant: "secondary",
                                        onClick: U.openDevToolsPopout,
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
            let e = P.A.lastOpenSubTabId;
            return null != e && e in ty ? ty[e] : 0;
        });
        return (
            o.useEffect(() => {
                null != P.A.lastOpenSubTabId && (0, L.Jt)({ lastOpenSubTabId: null });
            }, []),
            (0, r.jsxs)(d.Ip, {
                className: tf.iE,
                children: [
                    (0, r.jsxs)("div", {
                        className: tf.C$,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-xxl/medium", children: "Collectibles DevTools" }),
                            0 !== e && (0, r.jsx)(h.$, { variant: "primary", onClick: () => t(0), text: "Back" }),
                        ],
                    }),
                    (() => {
                        switch (e) {
                            case 1:
                                return (0, r.jsx)(e0, {});
                            case 2:
                                return (0, r.jsx)(ec, {});
                            case 3:
                                return (0, r.jsx)(tc, {});
                            case 4:
                                return (0, r.jsx)(tb, {});
                            default:
                                return (0, r.jsx)(tC, { setTab: t });
                        }
                    })(),
                ],
            })
        );
    };
var tE = a(681154),
    tS = a(306264),
    tN = a(506774),
    tA = a(228366),
    tk = a(587895),
    tI = a(429913),
    tD = a(475825),
    tT = a(505206);
function tR(e) {
    let { columns: t, data: a, className: n, rowClassName: l, onClickRow: s, selectedRowKey: i, rowHeight: d = 40 } = e,
        c = o.useMemo(
            () =>
                t.map((e) => ({
                    renderHeader: () => (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: e.key }),
                    ...e,
                })),
            [t],
        ),
        u = 0 === a.length ? [1] : [a.length];
    return (0, r.jsx)("div", {
        className: tT.CZ,
        children: (0, r.jsx)(tD.OZ, {
            className: n,
            innerClassName: tT.tp,
            sections: u,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    n = tT.ZR;
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
                    u = k()(tT.jD, { [tT.wD]: o === i, rowClassName: l });
                return (0, r.jsx)(
                    I.D,
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
var tO = a(409626),
    tw = a(692969),
    tM = a(760751),
    tL = a(403362),
    tP = a(435738),
    tU = a(99753),
    tG = a(975732),
    tF = a(574520),
    tB = a(808323),
    tV = a(832384),
    t$ = a(424994),
    tW = a(330837);
function tz(e) {
    let { id: t } = e,
        a = (0, M.bG)([H.default], () => H.default.getUser(t));
    return null == a
        ? null
        : (0, r.jsx)(I.D, {
              className: tW._,
              onClick: function () {
                  (0, tG.openUserProfileModal)({ sourceAnalyticsLocations: [tm.A.DEV_TOOLS], userId: t });
              },
              children: (0, r.jsx)(D.E, { variant: "text-md/semibold", children: a.username }),
          });
}
function tH() {
    let e = (0, M.bG)([tU.A], () => tU.A.getFeed(t$.X1.GLOBAL_FEED)),
        t = (0, M.bG)([tU.A], () => tU.A.getFilters()),
        a = (0, M.cf)([tF.A], () => {
            let t = {};
            for (let a of e?.entries ?? []) t[(0, tF.$)(a.content)] = tF.A.canRenderContent(a.content);
            return t;
        }, [e]),
        n = (0, M.bG)([tP.A], () => tP.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let l = e?.entries?.flatMap((e) => {
        let { content: l } = e;
        if (!(0, tB.l)(t, l)) return [];
        let s = a[(0, tF.$)(l)];
        return (0, r.jsxs)(
            "li",
            {
                className: tW.p,
                children: [
                    (0, r.jsx)(tz, { type: l.author_type, id: l.author_id }),
                    !s && (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Expired or no matching presence" }),
                    (0, tV.I5)(l) &&
                        (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["Expired at ", l.expires_at] }),
                    n.has(l.id) && (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Impression capped" }),
                ],
            },
            l.id,
        );
    });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Selected Content" }),
            null != l ? (0, r.jsx)("ul", { children: l }) : (0, r.jsx)("div", { children: "(none?)" }),
        ],
    });
}
var tK = a(576470),
    tY = a(85451);
function tq() {
    let e = (0, M.bG)([tU.A], () => tU.A.getFeed(t$.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, M.cf)(
            [tU.A],
            () => tU.A.getFeedState(t$.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        n = (0, M.bG)([tU.A], () => tU.A.getLastFeedFetchDate(t$.X1.GLOBAL_FEED));
    return (0, r.jsxs)("div", {
        children: [
            t
                ? (0, r.jsx)(D.E, { variant: "text-md/normal", children: "(fetching)" })
                : (0, r.jsxs)(D.E, {
                      variant: "text-md/normal",
                      children: [
                          "Next fetch: ",
                          null != a ? (0, r.jsx)(tK.A, { deadline: a }) : e ? "(awaiting push)" : "(unscheduled)",
                      ],
                  }),
            (0, r.jsxs)(D.E, {
                variant: "text-md/normal",
                children: [
                    "Last fetch:",
                    " ",
                    null != n ? (0, r.jsx)(tY.z, { inline: !0, entry: { start: n.getTime() } }) : "(never)",
                ],
            }),
        ],
    });
}
var tJ = a(866839);
let tQ = [
    {
        key: "type",
        cellClassName: k()(tJ.Hn, tJ.T$),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(D.E, { variant: "text-md/semibold", children: tE.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: k()(tJ.Hn, tJ.MX),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)("div", { children: (0, r.jsx)(D.E, { variant: "text-md/normal", children: t.length }) });
        },
    },
    {
        key: "only?",
        cellClassName: tJ.Hn,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(tX, { type: t });
        },
    },
];
function tX(e) {
    let { type: t } = e,
        a = (0, M.bG)([tU.A], () => tU.A.getFilters()),
        n = a?.types?.has(t) ?? !1;
    return (0, r.jsx)(v.d, {
        checked: n,
        onChange: function () {
            n
                ? tA.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : tA.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function tZ() {
    var e;
    let t,
        a = (0, M.bG)([tU.A], () => tU.A.getFeed(t$.X1.GLOBAL_FEED)),
        n = (0, M.bG)([tU.A], () => tU.A.getDebugImpressionCappingDisabled()),
        l = (0, M.bG)([tP.A], () => tP.A.getDebugFastImpressionCappingEnabled()),
        s =
            ((e = a?.entries?.map((e) => e.content)),
            Object.keys((t = eG().groupBy(e, (e) => e.content_type))).map((e) => {
                let a = t[e];
                return { key: `${e}`, type: a[0].content_type, entries: a };
            })),
        i = (0, M.bG)([tU.A], () => tU.A.getFeedState(t$.X1.GLOBAL_FEED)?.loading === !0),
        [c, u] = o.useState(""),
        m = (0, M.bG)(
            [tM.A, tk.A],
            () => (parseInt(c) > 0 ? c : (tM.A.searchGamesByName(c)[0] ?? tk.A.getApplicationByName(c)?.id)),
            [c],
        ),
        x = (0, tw.A)({ applicationId: m, location: "DevToolsContentInventory", source: tO.Ob.DevTools }),
        g = Object.entries(tN.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        v = (0, tI.A)(g).filter(tL.Vq);
    return (0, r.jsx)("div", {
        className: tT.nd,
        children: (0, r.jsxs)(d.Ip, {
            className: tJ.Qs,
            children: [
                (0, r.jsxs)(R.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(D.E, { variant: "text-md/semibold", children: "Inventory" }),
                        s.length > 0 && (0, r.jsx)(tR, { columns: tQ, data: s }),
                        (0, r.jsx)(tq, {}),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                tA.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: t$.X1.GLOBAL_FEED,
                                    feature: tS.M.INBOX,
                                });
                            },
                            loading: i,
                        }),
                    ],
                }),
                (0, r.jsxs)(R.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(D.E, { variant: "text-md/semibold", children: "Impression Capping" }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tA.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                tA.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: n ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tA.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: l ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tA.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING" });
                            },
                        }),
                    ],
                }),
                !1,
                (0, r.jsx)(tH, {}),
                (0, r.jsxs)(R.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(D.E, { variant: "text-md/semibold", children: "Game Profile" }),
                        (0, r.jsx)(p.k, {
                            placeholder: "App ID or full name",
                            onChange: (e) => (0 === e.length || e.length >= 18) && u(e),
                            onKeyDown: (e) => {
                                "Enter" === e.key && (c === e.currentTarget.value ? x?.(e) : u(e.currentTarget.value));
                            },
                            error:
                                c.length > 0 && null == x ? `No game profile for ${m ?? c + " - try by id"}.` : void 0,
                            helperText: null != x ? "Game profile found" : void 0,
                        }),
                        (0, r.jsx)("ul", {
                            children: v.map((e) =>
                                (0, r.jsx)(
                                    "li",
                                    { children: (0, r.jsx)(t0, { application: e }) },
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
let t0 = (e) => {
    let { application: t } = e,
        a = (0, tw.A)({ applicationId: t.id, location: "DevToolsContentInventory", source: tO.Ob.DevTools });
    return (0, r.jsx)(I.D, {
        onClick: a,
        children: (0, r.jsx)(D.E, { variant: "text-xs/normal", color: "text-muted", children: t.name }),
    });
};
var t1 = a(783878),
    t2 = a(137177),
    t8 = a(311043),
    t6 = a(569926),
    t3 = a(282435);
function t5(e) {
    return t3.Bf.get(e) ?? 0;
}
function t4(e) {
    let { gameId: t } = e,
        { data: a, isLoading: n } = (0, t6.I)(t),
        l = (0, M.bG)([t8.A], () => t8.A.hasNoData(t), [t]);
    return n || (null == a && !l)
        ? (0, r.jsx)(D.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading\u2026" })
        : null == a
          ? (0, r.jsxs)(D.E, {
                variant: "text-sm/normal",
                color: "text-feedback-critical",
                children: ["No game found for ID ", t],
            })
          : (0, r.jsxs)(R.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(t2.A, { game: a, size: t2.M.SMALL }),
                    (0, r.jsxs)(R.B, {
                        gap: 0,
                        children: [
                            (0, r.jsx)(D.E, { variant: "text-md/semibold", children: a.name }),
                            (0, r.jsx)(D.E, { variant: "text-xxs/normal", color: "text-muted", children: a.id }),
                        ],
                    }),
                ],
            });
}
function t9() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, M.bG)([tM.A], () => tM.A.games),
        s = o.useMemo(
            () =>
                l
                    .filter((e) => null != e.name && "" !== e.name)
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sort((e, t) => t5(t.value) - t5(e.value)),
            [l],
        ),
        i = o.useMemo(() => ({ baseSort: (e, t) => t5(t.item.value) - t5(e.item.value), keys: ["label"] }), []),
        d = o.useCallback((e) => {
            t(e), null != e && n("");
        }, []),
        c = o.useCallback((e) => {
            n(e), e.trim().length > 0 && t(null);
        }, []),
        u = a.trim(),
        m = u.length > 0 ? u : (e ?? void 0),
        x = (0, tw.A)({ gameId: m, location: "DevToolsGameProfile", source: tO.Ob.DevTools });
    return (0, r.jsx)("div", {
        className: tT.nd,
        children: (0, r.jsxs)(R.B, {
            gap: 32,
            padding: 12,
            fullWidth: !1,
            children: [
                (0, r.jsxs)(R.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/bold", children: "Game Profile" }),
                        (0, r.jsx)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "Search for a game by name, or paste a game ID, then open its profile.",
                        }),
                    ],
                }),
                (0, r.jsxs)(R.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-sm/bold", children: "Search" }),
                        (0, r.jsx)(t1.Z, {
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
                (0, r.jsxs)(R.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-sm/bold", children: "Game ID" }),
                        (0, r.jsx)(p.k, {
                            label: "Game ID",
                            hideLabel: !0,
                            placeholder: "Paste a game ID",
                            value: a,
                            onChange: c,
                        }),
                        u.length > 0 && (0, r.jsx)(t4, { gameId: u }),
                    ],
                }),
                (0, r.jsx)(h.$, {
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
var t7 = a(554146),
    ae = a(617617),
    at = a(355898),
    aa = a(644103),
    an = a(574560),
    al = a(994182);
let as = [t7.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL].map((e) => ({ id: String(e), label: t7.M[e], value: e }));
function ai() {
    let [e, t] = o.useState("dismissals"),
        [a, n] = o.useState(t7.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL),
        l = (0, M.bG)([ae.A], () => ae.A.settings.userContent?.recurringDismissibleContentStates[a] ?? null),
        s = (0, M.bG)([an.A], () => an.A.getAllGameUpsellDismissals(a)),
        i = o.useMemo(() => Object.keys(s ?? {}), [s]),
        d = (0, tI.A)(i),
        [c, u] = o.useState(""),
        [m, v] = o.useState([]);
    o.useEffect(
        () =>
            (0, aa.Y)((e) => {
                v((t) => [e, ...t].slice(0, 100));
            }),
        [],
    );
    let j =
        l?.lastDismissedAtMs != null && "0" !== l.lastDismissedAtMs
            ? new Date(Number(l.lastDismissedAtMs)).toLocaleString()
            : "Never";
    return (0, r.jsxs)("div", {
        className: al.nd,
        children: [
            (0, r.jsxs)("div", {
                className: al.$H,
                children: [
                    (0, r.jsx)(I.D, {
                        className: k()(al.V3, { [al.u7]: "dismissals" === e }),
                        onClick: () => t("dismissals"),
                        children: "Dismissals",
                    }),
                    (0, r.jsxs)(I.D, {
                        className: k()(al.V3, { [al.u7]: "call-log" === e }),
                        onClick: () => t("call-log"),
                        children: ["Call Log ", m.length > 0 ? `(${m.length})` : ""],
                    }),
                ],
            }),
            "dismissals" === e
                ? (0, r.jsxs)("div", {
                      className: al.Lj,
                      children: [
                          (0, r.jsx)("div", {
                              className: al.uW,
                              children: (0, r.jsx)(x.l, {
                                  label: "Dismissible Content",
                                  value: a,
                                  onSelectionChange: (e) => n(e),
                                  options: as,
                                  selectionMode: "single",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: al.uW,
                              children: [
                                  (0, r.jsx)(w.D, { variant: "heading-md/bold", children: "Global DCF State" }),
                                  (0, r.jsxs)(D.E, { variant: "text-sm/normal", children: ["Last dismissed: ", j] }),
                                  (0, r.jsxs)(D.E, {
                                      variant: "text-sm/normal",
                                      children: ["Times dismissed: ", l?.numTimesDismissed ?? 0],
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: al.uW,
                              children: [
                                  (0, r.jsx)(w.D, { variant: "heading-md/bold", children: "Mark as Dismissed" }),
                                  (0, r.jsx)(p.k, {
                                      label: "Game ID",
                                      value: c,
                                      onChange: (e) => u(e),
                                      placeholder: "Enter Game ID",
                                  }),
                                  (0, r.jsx)(h.$, {
                                      variant: "secondary",
                                      text: "Mark as Dismissed",
                                      disabled: "" === c.trim(),
                                      onClick: () => {
                                          (0, at.M)([c.trim()], a), u("");
                                      },
                                  }),
                              ],
                          }),
                          (0, r.jsx)(g.c, {}),
                          (0, r.jsxs)("div", {
                              className: k()(al.uW, al.LY),
                              children: [
                                  (0, r.jsxs)(w.D, {
                                      variant: "heading-md/bold",
                                      children: ["Per-Game Dismissals (", i.length, ")"],
                                  }),
                                  0 === i.length
                                      ? (0, r.jsx)(D.E, {
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
                                                            className: al.Nr,
                                                            children: [
                                                                (0, r.jsxs)("div", {
                                                                    className: al.MY,
                                                                    children: [
                                                                        null != i &&
                                                                            (0, r.jsx)("img", {
                                                                                src: i,
                                                                                alt: "",
                                                                                className: al.Z2,
                                                                            }),
                                                                        (0, r.jsxs)("div", {
                                                                            className: al.qi,
                                                                            children: [
                                                                                (0, r.jsx)(D.E, {
                                                                                    variant: "text-sm/semibold",
                                                                                    children: n?.name ?? "Unknown App",
                                                                                }),
                                                                                (0, r.jsx)(D.E, {
                                                                                    variant: "text-xs/normal",
                                                                                    color: "text-muted",
                                                                                    children: e,
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        (0, r.jsx)(h.$, {
                                                                            variant: "secondary",
                                                                            text: "Clear",
                                                                            onClick: () => (0, at.e)(e, a),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(D.E, {
                                                                    variant: "text-xs/normal",
                                                                    children: [
                                                                        "Last dismissed: ",
                                                                        new Date(l.dismissedAt).toLocaleString(),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(D.E, {
                                                                    variant: "text-xs/normal",
                                                                    children: ["Times dismissed: ", l.timesDismissed],
                                                                }),
                                                            ],
                                                        },
                                                        e,
                                                    );
                                                }),
                                                (0, r.jsx)(h.$, {
                                                    variant: "critical-primary",
                                                    text: "Clear All",
                                                    onClick: () => {
                                                        for (let e of i) (0, at.e)(e, a);
                                                    },
                                                }),
                                            ],
                                        }),
                              ],
                          }),
                      ],
                  })
                : (0, r.jsx)("div", {
                      className: al.Lj,
                      children: (0, r.jsxs)("div", {
                          className: al.uW,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: al.aq,
                                  children: [
                                      (0, r.jsxs)(w.D, {
                                          variant: "heading-md/bold",
                                          children: ["Hook Calls (", m.length, ")"],
                                      }),
                                      (0, r.jsx)(h.$, { variant: "secondary", text: "Clear", onClick: () => v([]) }),
                                  ],
                              }),
                              0 === m.length
                                  ? (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children:
                                            "No calls recorded yet. Hook calls to useShouldShowGameUpsellForMultipleGames will appear here.",
                                    })
                                  : m.map((e, t) =>
                                        (0, r.jsxs)(
                                            "div",
                                            {
                                                className: al.Nr,
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-xs/semibold",
                                                        children: new Date(e.timestamp).toLocaleTimeString(),
                                                    }),
                                                    (0, r.jsxs)(D.E, {
                                                        variant: "text-xs/normal",
                                                        children: ["DC: ", t7.M[e.dismissibleContent]],
                                                    }),
                                                    (0, r.jsxs)(D.E, {
                                                        variant: "text-xs/normal",
                                                        children: [
                                                            "Apps: ",
                                                            e.applicationIds.length > 0
                                                                ? e.applicationIds.join(", ")
                                                                : "none",
                                                        ],
                                                    }),
                                                    (0, r.jsxs)(D.E, {
                                                        variant: "text-xs/normal",
                                                        children: [
                                                            "Eligible:",
                                                            " ",
                                                            e.eligibleToShow.length > 0
                                                                ? (0, r.jsx)("span", {
                                                                      className: al.OK,
                                                                      children: e.eligibleToShow.join(", "),
                                                                  })
                                                                : "none",
                                                        ],
                                                    }),
                                                    e.disabled &&
                                                        (0, r.jsx)(D.E, {
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
var ar = a(696986),
    ao = a(47167),
    ad = a(734057),
    ac = a(994500),
    au = a(310031),
    am = a(394953),
    ah = a(732421);
let ax = [
        {
            key: "channelName",
            cellClassName: k()(ah.Hn, ah.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(D.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: k()(ah.Hn, ah.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(D.E, { variant: "text-md/normal", children: t });
            },
        },
    ],
    ap = [
        {
            key: "channelName",
            cellClassName: k()(ah.Hn, ah.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(D.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: k()(ah.Hn, ah.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, r.jsx)(D.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: k()(ah.Hn, ah.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(D.E, { variant: "text-md/normal", children: t });
            },
        },
    ];
function ag() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, am.U4)(),
        {
            isLoading: a,
            hasLoadedEver: n,
            hasPreloaded: l,
            hasMoreToLoad: s,
            isLoadingComplete: i,
        } = (0, tu.cf)([au.A], () => ({
            isLoading: au.A.isLoading,
            hasLoadedEver: au.A.hasLoadedEver,
            hasPreloaded: au.A.hasPreloaded,
            hasMoreToLoad: au.A.hasMoreToLoad,
            isLoadingComplete: au.A.isLoadingComplete,
        })),
        o = (0, tu.bG)([au.A], () => au.A.currentRequestAnalyticsPayload),
        c = (0, tu.cf)([au.A], () => au.A.getChannelInfoMap()),
        u = (0, tu.cf)([ad.A], () => {
            let e = {};
            return (
                Object.entries(c).forEach((t) => {
                    let [a] = t,
                        n = ad.A.getChannel(a);
                    e[a] = n ?? null;
                }),
                e
            );
        }),
        m = (0, tu.cf)([ad.A], () =>
            t.reduce((e, t) => {
                let a = ad.A.getChannel(t);
                return (e[t] = a ?? null), e;
            }, {}),
        ),
        h = (0, tu.bG)([au.A], () => au.A.getInboxMessages()),
        x = (0, tu.bG)([au.A], () => au.A.getDevOverrides().navOnClick);
    return (0, r.jsx)("div", {
        className: tT.nd,
        children: (0, r.jsxs)(d.Ip, {
            className: ah.Qs,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-lg/semibold", children: "Inbox" }),
                        (0, r.jsxs)("div", { children: ["Inbox Message Count: ", h.length] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-lg/semibold", children: "Dev Overrides" }),
                        (0, r.jsx)("div", {
                            style: { display: "flex", alignItems: "center", marginTop: 8 },
                            children: (0, r.jsx)(v.d, {
                                label: "Nav On Click",
                                checked: !!x,
                                onChange: (e) => {
                                    tA.h.dispatch({ type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES", navOnClick: e });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-lg/semibold", children: "Unreads and Badging" }),
                        (0, r.jsx)(ar.h, { size: 8 }),
                        (0, r.jsxs)("div", { children: ["Unread Recent Mentions Count: ", e] }),
                        (0, r.jsxs)("div", { children: ["Unread Channel Count: ", t.length] }),
                        (0, r.jsx)(tR, {
                            columns: ax,
                            data: Object.entries(m).map((e) => {
                                let [t, a] = e;
                                return {
                                    key: t,
                                    channelId: t,
                                    channelName: null != a ? (0, ao.m1)(a, H.default, ac.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-lg/semibold", children: "Store State" }),
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
                        (0, r.jsx)(w.D, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, r.jsxs)("div", { children: ["Total Channels: ", Object.keys(c).length] }),
                        (0, r.jsx)(tR, {
                            columns: ap,
                            data: Object.entries(c).map((e) => {
                                let t,
                                    [a, n] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = u[a]) ? (0, ao.m1)(t, H.default, ac.A) : "",
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
var av = a(976860),
    aj = a(340124),
    ab = a(988483);
let af = function () {
    return (0, r.jsxs)("div", {
        className: ab.k,
        children: [
            (0, r.jsx)(D.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, r.jsx)(h.$, {
                onClick: () => {
                    (0, aj.Ov)(), (0, av.pX)(J.BVt.QUEST_HOME);
                },
                text: "Clear History",
            }),
            (0, r.jsx)(D.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                children:
                    "Your may have to refresh your client after being redirected to the Quest Home in order to see these changes.",
            }),
        ],
    });
};
var ay = a(271866),
    aC = a(868511),
    a_ = a(147964),
    aE = a(760716),
    aS = a(533406),
    aN = a(115093),
    aA = a(11039);
let ak = window.GLOBAL_ENV.RELEASE_CHANNEL === aN.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function aI() {
    let e = (0, aE.i)((e) => e.overrideApplicationId),
        t = (0, aE.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        [n, l] = o.useState(ak),
        [s, i] = o.useState(J.FYj),
        d = o.useCallback(
            (e) => {
                e ? t(n) : t(null);
            },
            [n, t],
        ),
        c = o.useCallback(
            (e) => {
                l(e), a && t(e);
            },
            [a, t],
        ),
        u = (0, aE.i)((e) => e.showSelfActivity),
        m = (0, aE.i)((e) => e.setShowSelfActivity),
        x = (0, aE.i)((e) => e.recommendationApplicationIds),
        g = (0, aE.i)((e) => e.setRecommendationApplicationIds),
        j = o.useCallback(
            (e) => {
                e ? g(s) : g(null);
            },
            [s, g],
        ),
        b = (0, M.bG)([a_.A], () => null != a_.A.testModeApplicationId),
        f = o.useCallback((e) => {
            e ? (0, eR.openModal)((e) => (0, r.jsx)(aC.A, { ...e })) : ay.cL();
        }, []),
        y = (0, tw.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: n,
            source: tO.Ob.Embed,
            trackEntryPointImpression: !0,
        }),
        C = o.useCallback(
            (e) => {
                y?.(e);
            },
            [y],
        ),
        _ = o.useCallback(() => {
            (0, av.pX)(J.BVt.COLLECTIBLES_SHOP_GAME_SHOP(n));
        }, [n]),
        E = o.useCallback(() => {
            (0, aS.openSocialLayerStorefrontAnnouncementModal)();
        }, []);
    return (0, r.jsx)("div", {
        className: k()(tT.nd, aA.n),
        children: (0, r.jsxs)("div", {
            className: aA.k,
            children: [
                (0, r.jsx)(p.k, { label: "Application ID", value: n, onChange: c }),
                (0, r.jsx)(w.D, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, r.jsx)(v.d, { label: "Override activity application ID", checked: a, onChange: d }),
                (0, r.jsx)(v.d, { label: "Show own voice activity (bypass self check)", checked: u, onChange: m }),
                (0, r.jsx)(v.d, { label: "Enable application test mode", checked: b, onChange: f }),
                (0, r.jsx)(h.$, { text: "Open Game Profile Modal", onClick: C }),
                (0, r.jsx)(h.$, { text: "Open Announcement Modal", onClick: E }),
                (0, r.jsx)(h.$, { text: "Navigate to App Game Shop", onClick: _ }),
                (0, r.jsx)(w.D, { variant: "heading-lg/normal", children: "Wishlists" }),
                (0, r.jsx)(p.k, {
                    label: "Recommendation application IDs",
                    value: s,
                    onChange: i,
                    disabled: null == x,
                }),
                (0, r.jsx)(v.d, {
                    label: "Enable recommendation application IDs override",
                    checked: null != x,
                    onChange: j,
                }),
            ],
        }),
    });
}
var aD = a(540999),
    aT = a(723702),
    aR = a(865116);
a(670812), a(772958);
var aO = a(58736);
a(558179), a(21574);
var aw = a(231545),
    aM = a(761929),
    aL = a(23599);
function aP(e) {
    let { resizableNode: t, minHeight: a, onResize: n } = e,
        l = (0, aM.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: n,
            orientation: aM.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, r.jsx)("div", { onPointerDown: l, className: aL.Di });
}
function aU(e) {
    let { children: t, className: a, initialHeight: n, minHeight: l } = e,
        s = o.useRef(null),
        [i, d] = o.useState(n);
    return (0, r.jsxs)("div", {
        ref: s,
        className: aL.kL,
        style: { minHeight: l, height: i },
        children: [
            (0, r.jsx)(aP, { resizableNode: s, minHeight: l, onResize: d }),
            (0, r.jsx)("div", { className: k()(aL.KZ, a), children: t }),
        ],
    });
}
var aG = a(231643);
a(895017), aG.fu.NONE, aG.fu.NONE;
var aF = a(824552),
    aB = a(688810),
    aV = a(975460),
    a$ = a(46225),
    aW = a(487431),
    az = a(905552),
    aH = a(546183),
    aK = a(134861),
    aY = a(71393),
    aq = a(967198),
    aJ = a(157257),
    aQ = a(942370),
    aX = a(375708),
    aZ = a(311350),
    a0 = a(325126);
function a1() {
    var e;
    let t,
        a,
        n = o.useRef(null),
        { analyticsLocations: l } = (0, aB.Ay)(tm.A.DEV_TOOLS),
        [s, i] = o.useState(""),
        d = (0, M.bG)([aq.A], () => aq.A.getGuildId()),
        c = (0, M.bG)([aY.A], () => aY.A.getGuild(d)),
        u = c?.gameApplicationIds ?? [],
        m = (0, tI.A)(u).filter((e) => null != e),
        x = (0, M.bG)([j.Ay, aJ.A], () => (0, az.A)(j.Ay, aJ.A)),
        v = (0, tI.h)(s),
        b = (0, aV.g)(v),
        f = (0, M.yK)(
            [tk.A],
            () => v?.linkedGames?.map((e) => tk.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        y = (0, a$.RD)(v, { allowedFlows: [aQ._M.RPC], debug: !0 }),
        C = (0, a$.RD)(v, { allowedFlows: [aQ._M.WEB], debug: !0 }),
        _ = (0, M.bG)([aK.A], () => null != b && aK.A.isConnected(b.id)),
        E = (0, a$.RD)(v, { debug: !0 }),
        { canDeauthorize: S, deauthorize: N } =
            ((e = E.connectionApp?.id),
            (t = (0, M.bG)([aH.default], () => aH.default.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && aF.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: n,
        className: k()(tT.nd, a0.nd),
        children: [
            (0, r.jsxs)("div", {
                className: a0.kL,
                children: [
                    (0, r.jsx)(w.D, { variant: "heading-lg/normal", children: "Guild Official Games" }),
                    null != c
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)(D.E, { variant: "text-md/normal", children: [c.name, " (", c.id, ")"] }),
                                  m.length > 0
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(D.E, {
                                                    variant: "text-sm/semibold",
                                                    children: "Official Games",
                                                }),
                                                m.map((e) =>
                                                    (0, r.jsx)(
                                                        h.$,
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
                                      : (0, r.jsx)(D.E, { variant: "text-md/normal", children: "No official games" }),
                              ],
                          })
                        : (0, r.jsx)(D.E, { variant: "text-md/normal", children: "No guild selected" }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: a0.kL,
                children: [
                    (0, r.jsx)(w.D, { variant: "heading-lg/normal", children: "Application" }),
                    (0, r.jsx)(p.k, { label: "Application ID", value: s, onChange: i }),
                    null != x && null != x.id
                        ? (0, r.jsx)(h.$, {
                              onClick: () => i(x.id),
                              variant: "primary",
                              text: `Use detected game: ${x.name} (${x.id})`,
                          })
                        : null,
                    (0, r.jsxs)(D.E, {
                        variant: "text-md/normal",
                        children: ["Application Name: ", null != v ? v.name : "N/A"],
                    }),
                    (0, r.jsxs)(D.E, {
                        variant: "text-md/normal",
                        children: [
                            "Linked Games:",
                            " ",
                            f.length > 0
                                ? f.map((e) => ((0, aV.t)(v)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                : "N/A",
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(g.c, {}),
            (0, r.jsxs)("div", {
                className: a0.kL,
                children: [
                    (0, r.jsx)(w.D, { variant: "heading-lg/normal", children: "Authorization" }),
                    (0, r.jsx)(aW.VT, {
                        overallStatus: y.debug.isSubscribedToAuthorizeRequest
                            ? aW.nW.OVERALL_GOOD
                            : _
                              ? aW.nW.WARN
                              : aW.nW.OVERALL_BAD,
                        name: aX.intl.string(aZ.default.AGLx00),
                        steps: [
                            {
                                status: _ ? aW.nW.GOOD : aW.nW.BAD,
                                text: aX.intl.string(aZ.default.kxF9br),
                                description: _ ? null : aX.intl.string(aZ.default.PFxxJa),
                                learnMoreLink: _
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: y.debug.isSubscribedToAuthorizeRequest
                                    ? aW.nW.GOOD
                                    : _
                                      ? aW.nW.WARN
                                      : aW.nW.BAD,
                                text: aX.intl.string(aZ.default.S94dzs),
                                description:
                                    y.debug.isSubscribedToAuthorizeRequest || !_
                                        ? null
                                        : aX.intl.string(aZ.default.aTULMB),
                                learnMoreLink:
                                    y.debug.isSubscribedToAuthorizeRequest || !_
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: E.chosenFlow === aQ._M.RPC,
                    }),
                    (0, r.jsx)(aW.VT, {
                        overallStatus: C.debug.hasConnectionEntrypointUrl ? aW.nW.OVERALL_GOOD : aW.nW.OVERALL_BAD,
                        name: aX.intl.string(aZ.default.K3ObrU),
                        steps: [
                            {
                                status: C.debug.hasConnectionEntrypointUrl ? aW.nW.GOOD : aW.nW.BAD,
                                text: aX.intl.string(aZ.default["8a7IrV"]),
                                description: C.debug.hasConnectionEntrypointUrl
                                    ? aX.intl.formatToPlainString(aZ.default["9iLeL2"], {
                                          url: C.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: E.chosenFlow === aQ._M.WEB,
                    }),
                    (0, r.jsx)(aW.Sy, {
                        status: E.hasAlreadyLinked ? aW.nW.OVERALL_GOOD : aW.nW.OVERALL_BAD,
                        text: aX.intl.string(aX.t["Vu/zmQ"]),
                    }),
                    0 === E.debug.validFlows.length &&
                        (0, r.jsx)(D.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: aX.intl.string(aZ.default.eg0mNa),
                        }),
                    (0, r.jsx)(h.$, {
                        disabled: !E.canStartAuthorization,
                        onClick: () => E.startAuthorization({ analyticsLocations: l }),
                        variant: "primary",
                        text: "Start Authorization",
                    }),
                    (0, r.jsx)(D.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children:
                            "This will start whichever authorization flow is available. RPC authorization takes precedence over web.",
                    }),
                    (0, r.jsx)(h.$, {
                        disabled: !y.canStartAuthorization,
                        onClick: () => y.startAuthorization({ analyticsLocations: l }),
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, r.jsx)(h.$, {
                        disabled: !C.canStartAuthorization,
                        onClick: () => C.startAuthorization({ analyticsLocations: l }),
                        variant: "secondary",
                        text: "Start Web Authorization",
                    }),
                    (0, r.jsx)(h.$, { disabled: !S, onClick: N, variant: "critical-primary", text: "Deauthorize" }),
                ],
            }),
            v?.applicationAccountLinkBenefitConfig != null &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(g.c, {}),
                        (0, r.jsxs)("div", {
                            className: a0.kL,
                            children: [
                                (0, r.jsx)(w.D, { variant: "heading-lg/normal", children: "Reward Configuration" }),
                                (0, r.jsx)("div", {
                                    className: a0.Nr,
                                    children: (0, r.jsxs)("div", {
                                        className: a0.Tc,
                                        children: [
                                            null != v.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, r.jsx)("img", {
                                                    src: v.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: a0.L8,
                                                }),
                                            (0, r.jsx)(D.E, {
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
var a2 = a(427358),
    a8 = a(465153);
let a6 = [
    {
        key: "user",
        cellClassName: a8.iL,
        render(e) {
            let { user: t, key: a } = e;
            return t?.username ?? a;
        },
    },
    {
        key: "affinity",
        renderHeader: () => (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "COMMUNICATION AFFINITY" }),
        cellClassName: a8.nz,
        render(e) {
            let { affinity: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "vcProbability",
        renderHeader: () => (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "VOICE AFFINITY" }),
        cellClassName: a8.nz,
        render(e) {
            let { vcProbability: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "isFriend",
        renderHeader: () => (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "IS FRIEND" }),
        cellClassName: a8.nz,
        render(e) {
            let { isFriend: t } = e;
            return t.toString();
        },
    },
];
function a3() {
    let e = (0, M.yK)([a2.A, H.default], () =>
        a2.A.getUserAffinities().map((e) => {
            let { otherUserId: t, communicationProbability: a, vcProbability: n, isFriend: l } = e;
            return { user: H.default.getUser(t), affinity: a, vcProbability: n, isFriend: l, key: t };
        }),
    );
    return 0 === e.length ? null : (0, r.jsx)(tR, { className: tT.nd, columns: a6, rowClassName: a8.nM, data: e });
}
var a5 = a(139716),
    a4 = a(847599),
    a9 = a(282621);
function a7() {
    return (0, r.jsx)("div", {
        className: k()(tT.nd, a9.k),
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(w.D, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                (0, r.jsx)(g.c, { gap: 16 }),
                (0, r.jsxs)("div", {
                    className: a9.h,
                    children: [
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Test Tool",
                            onClick: () =>
                                void (0, eR.openModalLazy)(
                                    async () => {
                                        let { default: e } = await a.e("29079").then(a.bind(a, 357578));
                                        return (t) => (0, r.jsx)(e, { ...t });
                                    },
                                    { onCloseCallback: void 0 },
                                ),
                            fullWidth: !0,
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Modal",
                            onClick: () =>
                                a5.A.showAgeVerificationGetStartedModal({ entryPoint: a4.q1.DEV_TOOLS_QUICK_ACTIONS }),
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var ne = a(989349),
    nt = a.n(ne),
    na = a(862482),
    nn = a(624479),
    nl = a(555704),
    ns = a(285796),
    ni = a(241326),
    nr = a(892547),
    no = a(297413),
    nd = a(379078),
    nc = a(704554),
    nu = a(957565),
    nm = a(58703),
    nh = a(80703),
    nx = a(495544);
let np = 0,
    ng = [],
    nv = 0,
    nj = [],
    nb = !1;
class nf extends M.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(nx.default, aD.A);
    }
    get loggedEvents() {
        return ng;
    }
    get loggedEventsVersion() {
        return nv;
    }
    get loggedTriggers() {
        return nj;
    }
    get trackTriggers() {
        return nb;
    }
}
let ny = new nf(tA.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        aD.A.isDeveloper &&
            (ng.push({
                key: (np++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, nh.d)(n) : nx.default.getId(),
                timestamp: new Date(),
            }),
            nv++,
            ng.length > 500 && (ng = ng.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: l, location: s, previouslyTracked: i } = e;
        !aD.A.isDeveloper ||
            (nb &&
                (nj = [
                    ...nj,
                    {
                        key: (0, ej.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: n,
                        excluded: l,
                        location: s,
                        previouslyTracked: i,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                nj.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        nb = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (ng = []), nv++, (nj = []);
    },
});
var nC = a(658675);
function n_(e) {
    let { className: t, children: a } = e;
    return (0, r.jsx)("dl", { className: k()(tT.qo, t), children: a });
}
let nE = (e) => {
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
                (0, r.jsx)("dt", { className: tT.Bz, children: t }),
                (0, r.jsxs)("dd", {
                    className: tT.Nw,
                    children: [
                        a,
                        null != n
                            ? (0, r.jsx)(I.D, {
                                  tag: "span",
                                  className: tT.nH,
                                  onClick: () => (0, nu.C)(n, () => s(!0)),
                                  children: l
                                      ? (0, r.jsx)(e6.U, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(nn.T, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
};
function nS(e) {
    let { value: t } = e;
    return (0, r.jsx)(nC.P, { checked: t });
}
var nN = a(733657);
let nA = [
    {
        key: "event",
        cellClassName: nN.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "location",
        cellClassName: nN.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function nk(e) {
    let { children: t } = e;
    return (0, r.jsx)(d.Ip, { className: nN._D, children: (0, r.jsx)("dl", { children: t }) });
}
function nI(e) {
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
            className: nN.fY,
            children: [
                (0, r.jsx)("dt", { className: nN.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(I.D, {
                    tag: "span",
                    className: nN.nH,
                    onClick: () => (0, nu.C)(JSON.stringify(n), () => s(!0)),
                    children: l
                        ? (0, r.jsx)(e6.U, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(nn.T, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let nD = new Set(["client_performance_cpu", "client_performance_memory"]),
    nT = [
        {
            id: "details",
            name: "Details",
            group: aG.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: n, fingerprint: l },
                        onClose: s,
                        filteredEvents: i,
                    } = e,
                    o = H.default.getUser(l),
                    d = nt()(n);
                return (0, r.jsxs)("div", {
                    className: nN.sw,
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(aO.Ay, {
                            className: k()(tT.jr, nN.nZ),
                            children: [
                                (0, r.jsx)(aO.Ay.Icon, { icon: nl.U, tooltip: t }),
                                (0, r.jsxs)(aO.Ay.Title, {
                                    wrapperClassName: nN.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(I.D, {
                                            tag: "span",
                                            className: nN.KE,
                                            onClick: () => (0, nu.C)(t),
                                            children: (0, r.jsx)(nn.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(aO.Ay.Icon, {
                                    icon: nn.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nu.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: n, fingerprint: l, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(aO.Ay.Icon, { icon: ns.a, tooltip: "Close", onClick: s }),
                            ],
                        }),
                        (0, r.jsxs)(n_, {
                            className: nN.ZK,
                            children: [
                                (0, r.jsx)(nE, {
                                    name: "Timestamp (local)",
                                    copyValue: n.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: n.toISOString(),
                                        title: (0, nm.i$)(d, "LLLL"),
                                        children: ["(", nt().locale(), ") ", (0, nm.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nE, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(no.A, { user: o }),
                                    }),
                                (0, r.jsx)(nE, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(nk, {
                            children: Object.entries(a).map((e) => {
                                let [a, n] = e,
                                    l = nD.has(a)
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
                                                nI,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: n || null },
                                                    children:
                                                        null != n
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(n) })
                                                            : (0, r.jsx)("code", {
                                                                  className: nN.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, r.jsx)(
                                                    nI,
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
    nR = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(nR)
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
    nO = {
        searchType: nd.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function nw() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (0, M.bG)([ny], () => ny.loggedEventsVersion),
        [l, s] = o.useState(() => Object.keys(nR)),
        [i, d] = o.useState(ny.loggedEvents),
        c = o.useCallback((e) => {
            d(e);
        }, []);
    (0, nc.RT)(t, ny.loggedEvents, c, nO, [n]);
    let u = i.filter((e) => {
            for (let t of l) if (nR[t].filter(e)) return !0;
            return !1;
        }),
        [m, h] = o.useState(void 0),
        x = u.find((e) => e.key === m),
        { TabBar: p, renderSelectedTab: g } = (0, aG.Ay)({ tabs: nT }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: k()(tT.nd, nN.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nN.rh,
                children: [
                    (0, r.jsx)(na.$n, {
                        className: nN.Q$,
                        look: na.$n.Looks.BLANK,
                        size: na.$n.Sizes.ICON,
                        onClick: L.eY,
                        children: (0, r.jsx)("span", {
                            title: aX.intl.string(aX.t.VkKicb),
                            children: (0, r.jsx)(ni.u, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": aX.intl.string(aX.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: nN.Bi }),
                    (0, r.jsx)("div", {
                        className: nN.uW,
                        children: Object.entries(nR).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                I.D,
                                {
                                    className: k()(nN.pb, l.includes(t) && nN.bx),
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
                className: nN.rh,
                children: (0, r.jsx)(nr.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(tR, { columns: nA, data: u, selectedRowKey: m, onClickRow: (e) => h(e.key) }),
            null != x &&
                (0, r.jsxs)(aU, {
                    className: nN.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(p, {}), g({ loggedEvent: x, onClose: () => h(void 0), filteredEvents: u })],
                }),
        ],
    });
}
var nM = a(382483),
    nL = a(385113),
    nP = a(315117);
function nU(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)(R.B, {
        gap: 8,
        padding: 8,
        className: nP.lt,
        children: [
            (0, r.jsx)(D.E, { variant: "text-sm/semibold", color: "text-strong", children: t.display_name }),
            (0, r.jsxs)(D.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["Config ID: ", t.config_id],
            }),
            (0, r.jsxs)(D.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["App ID: ", t.application_id],
            }),
            (0, r.jsxs)(D.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", t.status] }),
            null != t.updated_at &&
                (0, r.jsxs)(D.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Updated: ", t.updated_at],
                }),
            null != t.published_at &&
                (0, r.jsxs)(D.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Published: ", t.published_at],
                }),
            (0, r.jsx)(g.c, {}),
            (0, r.jsxs)(D.E, {
                variant: "text-xs/semibold",
                color: "text-strong",
                children: ["Surfaces (", a.length, ")"],
            }),
            0 === a.length
                ? (0, r.jsx)(D.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: "No surfaces configured",
                  })
                : a.map((e) => {
                      let [t, a] = e;
                      return (0, r.jsxs)(
                          R.B,
                          {
                              gap: 4,
                              padding: 4,
                              className: nP.YL,
                              children: [
                                  (0, r.jsx)(D.E, { variant: "text-xs/semibold", color: "text-default", children: t }),
                                  (0, r.jsxs)(D.E, {
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
function nG(e) {
    let { config: t, isSelected: a, onSelect: n } = e;
    return (0, r.jsxs)(R.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? nP.FM : nP.gt,
        children: [
            (0, r.jsx)(I.D, {
                className: nP.Av,
                onClick: n,
                children: (0, r.jsxs)(R.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(D.E, { variant: "text-sm/medium", color: "text-strong", children: t.display_name }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.config_id, " \xb7 ", t.application_id],
                        }),
                    ],
                }),
            }),
            (0, r.jsx)(h.$, {
                variant: "secondary",
                size: "sm",
                text: "Refetch",
                onClick: () => (0, nM.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function nF() {
    let e = (0, M.bG)([nL.A], () => nL.A.getFeaturedFetchState());
    return (0, r.jsxs)(R.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(R.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(D.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Featured Configs",
                    }),
                    (0, r.jsxs)(D.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(h.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, nM.Wq)({ force: !0 }),
            }),
        ],
    });
}
function nB() {
    let e = (0, M.bG)([nL.A], () => nL.A.getDeveloperFetchState());
    return (0, r.jsxs)(R.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(R.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(D.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Developer Configs",
                    }),
                    (0, r.jsxs)(D.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(h.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, nM.i$)({ force: !0 }),
            }),
        ],
    });
}
function nV() {
    let [e, t] = o.useState(""),
        a = (0, M.bG)([nL.A], () => (e.length > 0 ? nL.A.getFetchState(e) : null)),
        n = (0, M.bG)([nL.A], () => (e.length > 0 ? nL.A.getConfigs(e) : null));
    return (0, r.jsxs)(R.B, {
        gap: 8,
        children: [
            (0, r.jsx)(D.E, { variant: "text-md/semibold", color: "text-strong", children: "Fetch by Application ID" }),
            (0, r.jsx)(p.k, { placeholder: "Application ID", value: e, onChange: (e) => t(e) }),
            (0, r.jsx)(h.$, {
                variant: "primary",
                size: "sm",
                text: "Fetch",
                disabled: 0 === e.length,
                onClick: () => (0, nM.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(D.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != n &&
                n.length > 0 &&
                (0, r.jsx)(R.B, { gap: 4, children: n.map((e) => (0, r.jsx)(nU, { config: e }, e.config_id)) }),
        ],
    });
}
function n$(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: n } = e,
        l = (0, M.bG)([nL.A], () => nL.A.getFeaturedFetchState());
    return (0, r.jsxs)(R.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(D.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            l === nL.e.FETCHING &&
                (0, r.jsx)(D.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    nG,
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
function nW(e) {
    let { config: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.c, {}),
            (0, r.jsxs)(R.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(D.E, { variant: "text-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(nU, { config: t }),
                ],
            }),
        ],
    });
}
function nz() {
    let [e, t] = o.useState(null),
        a = Object.values((0, M.bG)([nL.A], () => nL.A.getAllConfigsByApplication())).flat(),
        n = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsxs)(R.B, {
            gap: 16,
            padding: 8,
            className: nP.zr,
            children: [
                (0, r.jsx)(w.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(nF, {}),
                (0, r.jsx)(g.c, {}),
                (0, r.jsx)(nB, {}),
                (0, r.jsx)(g.c, {}),
                (0, r.jsx)(nV, {}),
                (0, r.jsx)(g.c, {}),
                (0, r.jsx)(n$, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != n && (0, r.jsx)(nW, { config: n }),
            ],
        }),
    });
}
var nH = a(636537),
    nK = a(153488),
    nY = a(927813);
let nq = 12 * nY.A.Millis.HOUR,
    nJ = new Map(),
    nQ = !1,
    nX = Object.freeze({ channelAffinities: [], lastFetched: 0 }),
    nZ = { ...nX };
function n0() {
    nJ = new Map(nZ.channelAffinities.map((e) => [e.channelId, e]));
}
class n1 extends M.Ay.PersistedStore {
    static displayName = "ChannelAffinitiesV2Store";
    static persistKey = "ChannelAffinitiesStoreV2";
    initialize(e) {
        null != e && ((nZ.channelAffinities = e.channelAffinities), (nZ.lastFetched = e.lastFetched), n0());
    }
    shouldFetch() {
        if (!nQ) return Date.now() - nZ.lastFetched > nq;
    }
    isFetching() {
        return nQ;
    }
    getChannelAffinities() {
        return nZ.channelAffinities;
    }
    getChannelAffinitiesMap() {
        return nJ;
    }
    getChannelAffinity(e) {
        return nJ.get(e);
    }
    compare(e, t) {
        return (nJ.get(t)?.score ?? 0) - (nJ.get(e)?.score ?? 0);
    }
    getState() {
        return nZ;
    }
}
let n2 = new n1(tA.h, {
    LOAD_CHANNEL_AFFINITIES_V2: function () {
        nQ = !0;
    },
    LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineChannels: t } = e;
        (nZ.lastFetched = Date.now()), (nQ = !1), (nZ.channelAffinities = t), n0();
    },
    LOAD_CHANNEL_AFFINITIES_V2_FAILURE: function () {
        nQ = !1;
    },
    LOGOUT: function () {
        (nZ = { ...nX }), (nJ = new Map()), (nQ = !1);
    },
});
var n8 = a(907360);
let n6 = [
    {
        key: "channel",
        cellClassName: n8._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "SCORE" }),
        cellClassName: n8.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function n3() {
    o.useEffect(() => {
        !(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            n2.shouldFetch() && nK.A.hasConsented(J.YAq.PERSONALIZATION)
                ? (tA.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" }),
                  nH.Bo.get({
                      url: J.Rsh.CHANNEL_AFFINITIES_V2,
                      retries: 3 * !!e,
                      oldFormErrors: !0,
                      rejectWithError: !1,
                  }).then(
                      (e) => {
                          let { body: t } = e;
                          tA.h.dispatch({
                              type: "LOAD_CHANNEL_AFFINITIES_V2_SUCCESS",
                              affineChannels: t.channel_affinities.map((e) => ({
                                  channelId: e.channel_id,
                                  score: e.score ?? 0,
                              })),
                          });
                      },
                      () => {
                          tA.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2_FAILURE" });
                      },
                  ))
                : Promise.resolve();
        })();
    }, []);
    let e = (0, M.yK)([n2, ad.A], () =>
        n2
            .getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: ad.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(tR, { className: tT.nd, columns: n6, rowClassName: n8.nM, data: e });
}
function n5() {
    return (0, r.jsxs)(D.E, {
        variant: "text-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var n4 = a(105565),
    n9 = a(558845),
    n7 = a(193337);
let le = (e) => {
        switch (e) {
            case n4.r.DC_DISMISSED:
                return "DISMISS:";
            case n4.r.DC_SHOWN:
                return "SHOW:";
            case n4.r.DC_SHOW_REQUEST:
                return "REQUEST TO SHOW:";
            default:
                return "UNKNOWN TYPE:";
        }
    },
    lt = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${t7.M[a]}`;
            },
        },
    ],
    la = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${t7.M[t]}`;
            },
        },
    ];
function ln() {
    let e = (0, M.bG)([n4.A], () => n4.A.getDCFEvents()),
        t = (0, n9.Ay)((e) => e.candidates),
        a = (0, n9.Ay)((e) => e.lastWinnerTime),
        n = 0 !== a ? nt()(a).fromNow() : "n/a",
        l = (0, n9.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        s = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: le(t) + a.toString(), event: le(t), dismissibleContent: a };
        }),
        i = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: n7.KE,
        children: [
            (0, r.jsxs)("div", { className: n7.pq, children: ["Last winner time: ", n] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: n7.pq, children: ["Last winner: ", null != l ? t7.M[l] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: n7.uI,
                children: (0, r.jsx)(tR, { className: n7.Th, columns: la, data: i }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(tR, { columns: lt, data: s }),
        ],
    });
}
var ll = a(689175),
    ls = a(541689),
    li = a(199773);
function lr() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(lo());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        a.unshift(e), tN.w.set("RecentDismissibleOverrides", a);
    }, []);
    return [lo(), e];
}
function lo() {
    return tN.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var ld = a(662546),
    lc = a(643278),
    lu = a(256787),
    lm = a(20439);
let lh = o.memo(function (e) {
    let { className: t, content: a, onChange: n } = e,
        l = t7.M[a],
        { isDismissed: s, handleToggleDismissState: i } = (0, lm.A)(l),
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
            (0, r.jsxs)(R.B, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, r.jsx)(eI.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: d ? ld.O : lc.s,
                        onClick: m,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(v.d, {
                        label: `${a.toLowerCase()} (${t7.M[a]})`,
                        description: (0, lu.Zm)(l)
                            ? (function (e) {
                                  let t = ae.A.settings.userContent?.recurringDismissibleContentStates?.[e];
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
            (0, r.jsx)(g.c, {}),
        ],
    });
});
function lx(e) {
    let { items: t, onChange: a } = e,
        [n, l] = lr(),
        s = (0, o.useCallback)(
            (e) => {
                l(e), a?.(e);
            },
            [l, a],
        );
    return (0, r.jsx)(R.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(lh, { content: e, onChange: s }, e)),
    });
}
function lp(e) {
    let { searchQuery: t = "" } = e,
        a = (0, n9.Ay)((e) => e.recentlyShown),
        [n, l] = lr(),
        s = n
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(t7.M[e]))
            .slice(0, 3);
    return 0 === s.length
        ? null
        : (0, r.jsx)(u.n, { label: "Recent Overrides", children: (0, r.jsx)(lx, { items: s }) });
}
function lg(e) {
    let { searchQuery: t = "" } = e,
        a = (0, n9.Ay)((e) => e.recentlyShown)
            .map((e) => t7.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(u.n, { label: "Recently Shown", children: (0, r.jsx)(lx, { items: a }) });
}
var lv = a(594061),
    lj = a(268571);
function lb() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
        } = (0, M.cf)([li.A], () => ({
            dailyCapReached: li.A.hasUserHitDCCap(),
            dailyCapOverridden: li.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: li.A.newUserMinAgeRequiredOverridden,
        })),
        [n, l] = o.useState(""),
        [s, i] = o.useState(20),
        d = o.useMemo(
            () =>
                Object.keys(t7.M)
                    .filter((e) => e.toLowerCase().includes(n.toLowerCase()))
                    .reverse(),
            [n],
        ),
        c = o.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && s < d.length && i((e) => e + 100);
            },
            [s, d.length],
        );
    return (0, r.jsx)(ll.Ch, {
        onScroll: c,
        children: (0, r.jsxs)("div", {
            className: lj.KE,
            children: [
                (0, r.jsxs)(u.n, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, r.jsxs)(R.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, ls.Ab)(),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, lv.nT)(),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, lv.D1)(),
                                }),
                                (0, r.jsx)(D.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: `Daily Cap Reached: ${e ? "Yes" : "No"}`,
                                }),
                            ],
                        }),
                        (0, r.jsx)(v.d, {
                            label: "Override Dismissible Content Daily Cap",
                            checked: t,
                            onChange: ls.SE,
                        }),
                        (0, r.jsx)(v.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: ls.U$,
                        }),
                    ],
                }),
                (0, r.jsx)(lg, {}),
                (0, r.jsx)(lp, {}),
                (0, r.jsxs)(u.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(nr.I, { query: n, onChange: l, onClear: () => l("") }),
                        (0, r.jsx)(lx, { items: d.slice(0, s) }),
                    ],
                }),
            ],
        }),
    });
}
var lf = a(276086),
    ly = a(154323),
    lC = a(155248);
function l_() {
    let e = (0, M.bG)([ly.A], () => ly.A.allWithDescriptions(), [], M.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, n] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                v.d,
                                { label: n, description: t, checked: a, onChange: (e) => (0, lf.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(g.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: lC.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: lC.x6,
                children: (0, r.jsx)(h.$, { variant: "primary", text: "Clear all", onClick: lf.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: lC.vu, children: t }),
        ],
    });
}
var lE = a(691540),
    lS = a(97483),
    lN = a(123292),
    lA = a(780907),
    lk = a(56562);
let lI = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "Marvel Rivals", value: "1314395942253756416" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
];
function lD(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: n } = (0, t6.I)(t.id);
    return (0, r.jsxs)(R.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != n && (0, r.jsx)(t2.A, { game: n }),
            (0, r.jsxs)(R.B, {
                justify: "center",
                gap: 0,
                children: [
                    (0, r.jsx)(D.E, { variant: "text-md/normal", children: n?.name }),
                    a && (0, r.jsx)(D.E, { variant: "text-xxs/normal", children: "Debug" }),
                ],
            }),
        ],
    });
}
function lT() {
    let e = (0, M.bG)([j.Ay], () => j.Ay.getRunningGames()),
        t = (0, M.bG)([j.Ay], () => j.Ay.getDebugRunningGame()),
        [a, n] = (0, o.useState)(t?.id ?? ""),
        l = (0, o.useMemo)(
            () =>
                lI.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        ),
        s = (e) => {
            if (null == e || "" === e) return void (0, lA.xt)(null);
            let t = tM.A.getDetectableGame(e),
                a = t?.executables[0],
                n = t?.thirdPartySkus[0]?.distributor;
            if (null == t || null == a)
                return (0, lE.P0)({
                    id: "devtools-set-debug-game-error",
                    type: lS.Ck.FAILURE,
                    message: "Invalid Game ID",
                });
            (0, lA.xt)({
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
                fullscreenType: lk.aI.UNKNOWN,
                cmdLine: "",
                nativeProcessObserverId: -1,
            });
        };
    return (0, r.jsxs)(R.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(R.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(w.D, { variant: "heading-md/bold", children: "Running Games" }),
                    e.length > 0 &&
                        (0, r.jsx)("div", {
                            children: e.map((e) =>
                                (0, r.jsx)(lD, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, r.jsx)(g.c, {}),
            (0, r.jsxs)(R.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(w.D, { variant: "heading-md/bold", children: "Set Debug Running Game" }),
                    (0, r.jsx)(p.k, { label: "Custom Game ID", value: a, onChange: n }),
                    (0, r.jsx)(t1.Z, {
                        label: "Pick a Preset Game",
                        options: l,
                        value: t?.id ?? "",
                        onSelectionChange: (e) => {
                            s(e);
                        },
                        selectionMode: "single",
                        clearable: !0,
                    }),
                    (0, r.jsxs)(R.B, {
                        direction: "horizontal",
                        gap: 16,
                        justify: "end",
                        align: "end",
                        children: [
                            null != t &&
                                (0, r.jsx)(lN.Q, { variant: "secondary", text: "Clear", onClick: () => s(null) }),
                            (0, r.jsx)(h.$, { variant: "primary", text: "Detect Game", onClick: () => s(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lR = a(240248),
    lO = a(769195);
function lw() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            try {
                t(!0), n(null), s(null);
                let e = await nH.Bo.put({
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
    return (0, r.jsxs)(R.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(h.$, { variant: "primary", onClick: i, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, lR.uJ)(a) && (0, r.jsx)(D.E, { variant: "text-md/normal", color: "status-positive", children: a }),
            !(0, lR.uJ)(l) && (0, r.jsx)(D.E, { variant: "text-md/normal", color: "status-danger", children: l }),
        ],
    });
}
function lM() {
    return (0, r.jsx)("div", {
        className: lO.n,
        children: (0, r.jsx)(R.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(lw, {}) }),
    });
}
a(172879);
var lL = a(985623),
    lP = a.n(lL),
    lU = a(990078),
    lG = a(874804),
    lF = a(782134),
    lB = a(113494),
    lV = a(603349),
    l$ = a(155466);
function lW(e) {
    return parseFloat(e.toFixed(3));
}
let lz = [
    {
        key: "store",
        cellClassName: l$.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: l$.i7,
        render(e) {
            let { trace: t } = e;
            return `${lW(t.time)} ms`;
        },
    },
];
function lH(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(d.Ip, { children: (0, r.jsx)(tR, { columns: lz, data: a }) });
}
let lK = [
    {
        id: "action",
        name: "Action",
        group: aG.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = nt()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(n_, {
                        className: l$.mP,
                        children: [
                            (0, r.jsx)(nE, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, nm.i$)(a, "LLLL"),
                                    children: (0, nm.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(nE, { name: "Total Time", children: [lW(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(d.Ip, { className: l$.Dx, children: (0, r.jsx)(aw.A, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: aG.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsx)(lH, { actionLog: t });
        },
    },
];
function lY(e) {
    let { actionLog: t, initialHeight: a } = e,
        n = o.useMemo(
            () =>
                t.error
                    ? [
                          ...lK,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(lV.A, { className: l$.ik }), "Error"],
                              }),
                              group: aG.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: k()(l$.u4, tT.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: tT.R5,
                                                  children: (0, r.jsx)(na.$n, {
                                                      className: tT.Q$,
                                                      size: na.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(d.Ip, {
                                              className: l$.Dx,
                                              children: (0, r.jsx)(aw.A, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : lK,
            [t],
        ),
        { TabBar: l, renderSelectedTab: s } = (0, aG.Ay)({ tabs: n }, [n]);
    return (0, r.jsxs)(aU, {
        className: l$.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(aO.Ay, {
                className: k()(tT.jr, l$.nZ),
                children: [
                    (0, r.jsx)(aO.Ay.Icon, { icon: lG.K, tooltip: t.name }),
                    (0, r.jsx)(aO.Ay.Title, {
                        wrapperClassName: k()(tT.qd, tT.ZE),
                        className: tT.Pz,
                        children: t.name,
                    }),
                    (0, r.jsx)(aO.Ay.Icon, {
                        icon: nn.T,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var n;
                                    return (t[a] = ((n = e[a]), J.AKn.test(n) ? "REDACTED" : n)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, nu.C)(a, () =>
                                (0, lE.P0)({
                                    id: "copy-action-log-name",
                                    type: lS.Ck.SUCCESS,
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
let lq = [
        {
            key: "action",
            cellClassName: l$.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(lV.A, { className: l$.ik }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: l$.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${lW(t.totalTime)} ms`;
            },
        },
        {
            key: "timestamp",
            cellClassName: l$.i7,
            render(e) {
                let { actionLog: t } = e;
                return nt()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    lJ = {
        searchType: nd.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function lQ() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = lP()(() => {
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
        })(tA.h.actionLogger),
        l = o.useMemo(() => n.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [n]),
        [s, i] = o.useState(l),
        [d, c] = o.useState(l),
        [u, m] = o.useState(!1),
        [h, x] = o.useState(),
        p = o.useCallback((e) => {
            c(e);
        }, []);
    (0, nc.RT)(t, u ? s : l, p, lJ);
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
        className: k()(tT.nd, l$.nd),
        children: [
            (0, r.jsxs)("div", {
                className: l$.KE,
                children: [
                    (0, r.jsx)(lU.m, {
                        text: b,
                        children: (0, r.jsx)(eI.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? lF.u : lB.E,
                            "aria-label": b,
                            onClick: () => g(!u),
                        }),
                    }),
                    (0, r.jsx)(nr.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(tR, {
                columns: lq,
                data: j,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => x(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(lY, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var lX = a(936388),
    lZ = a(132369);
function l0() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: k()(tT.nd, lZ.n),
        children: (0, r.jsx)(h.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: lX.A.clearUploadedKeyVersions,
        }),
    });
}
var l1 = a(825484),
    l2 = a(37962),
    l8 = a(881520),
    l6 = a(670455),
    l3 = a(861160);
let l5 = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function l4() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(0),
        [l, s] = o.useState(1e3),
        [i, d] = o.useState(0),
        c = (0, M.bG)([l8.A], () => (null === e ? null : (l8.A.getFeedbackConfig(l6.MW[e]) ?? l2.u[l6.MW[e]]))),
        m = Object.entries(l6.MW),
        v = m.slice(m.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        j = o.useMemo(() => null != e && i >= 0 && i <= 100 && a >= 0, [e, i, a]);
    return (0, r.jsx)("div", {
        className: l3.kL,
        children: (0, r.jsxs)(R.B, {
            gap: 32,
            children: [
                (0, r.jsx)(x.l, {
                    label: "Feedback Survey",
                    options: v,
                    value: e,
                    onSelectionChange: t,
                    placeholder: "Select Feedback Survey",
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsxs)(u.n, {
                    label: "Override Survey Cooldown",
                    children: [
                        null != c &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Current cooldown" }),
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        children: `${c.cooldown / 1e3} second(s) or`,
                                    }),
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        children: `${c.cooldown / 6e4} minute(s) or`,
                                    }),
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        children: `${c.cooldown / 36e5} hour(s) or`,
                                    }),
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        children: `${c.cooldown / 864e5} day(s)`,
                                    }),
                                ],
                            }),
                        (0, r.jsxs)(R.B, {
                            direction: "horizontal",
                            align: "end",
                            children: [
                                (0, r.jsx)(p.k, {
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
                                    options: l5,
                                    value: l,
                                    onSelectionChange: s,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(g.c, {}),
                (0, r.jsx)(u.n, {
                    label: "Override Survey Chance",
                    children: (0, r.jsx)(p.k, {
                        label: "Override chance",
                        description: null != c ? `Current chance: ${100 * c.chance}%` : void 0,
                        helperText: "As a percentage",
                        min: 0,
                        max: 100,
                        value: i.toString(),
                        type: "number",
                        onChange: (e) => d(parseFloat(e)),
                    }),
                }),
                (0, r.jsxs)(l1.e, {
                    children: [
                        (0, r.jsx)(h.$, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != c &&
                                    tA.h.dispatch({ type: "FEEDBACK_OVERRIDE_CLEAR", feedbackType: c.feedbackType })
                                ),
                            disabled: !j,
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != c &&
                                    tA.h.dispatch({
                                        type: "FEEDBACK_OVERRIDE_SET",
                                        feedbackType: c.feedbackType,
                                        cooldown: a * l,
                                        chance: i / 100,
                                    })
                                ),
                            disabled: !j,
                        }),
                    ],
                }),
                null == e &&
                    (0, r.jsx)(D.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: need to select a survey",
                    }),
                !(a >= 0) &&
                    (0, r.jsx)(D.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: cooldown needs to be a number greater than 0",
                    }),
                !(i >= 0 && i <= 100) &&
                    (0, r.jsx)(D.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: chance needs to be a number between 0 and 100",
                    }),
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    children: "Clear override resets a feedback survey to its default values",
                }),
            ],
        }),
    });
}
var l9 = a(334279),
    l7 = a(663417),
    se = a(147925),
    st = a(557009),
    sa = a(788868);
let sn = async () =>
        (
            await nH.Bo.get({
                url: J.Rsh.ENTITLEMENTS_FOR_APPLICATION(sa.tv),
                oldFormErrors: !0,
                query: { exclude_consumed: !0, exclude_ended: !0 },
                rejectWithError: !0,
            })
        ).body.map((e) => st.A.createFromServer(e)),
    sl = async (e) => {
        await nH.Bo.post({
            url: "/debug/entitlements/fractional-premium",
            body: { count: 1, sku_id: e },
            rejectWithError: !1,
        });
    },
    ss = async (e) => {
        let t = "/debug/entitlements/fractional-premium";
        null != e && (t = `${t}/${e}`), await nH.Bo.del({ url: t, rejectWithError: !0 });
    },
    si = async () => {
        await nH.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
    },
    sr = () => {
        let [e, t] = o.useState([]),
            [a, n] = o.useState(!1),
            l = (0, o.useCallback)(async () => {
                try {
                    n(!0);
                    let e = await sn();
                    t(e);
                } finally {
                    n(!1);
                }
            }, []),
            s = (0, o.useCallback)(
                async (e) => {
                    await sl(e), await l();
                },
                [l],
            );
        return {
            grantFractionalPremium: s,
            deleteFractionalPremium: (0, o.useCallback)(
                async (e) => {
                    await ss(e), await l();
                },
                [l],
            ),
            triggerNextEntitlementFulfillment: (0, o.useCallback)(async () => {
                await si(), await l();
            }, [l]),
            refreshEntitlementList: l,
            entitlements: e,
            loading: a,
        };
    };
var so = a(51846),
    sd = a(214868);
let sc = {
        [J.GD.QUEST_REWARD]: "Quest Reward",
        [J.GD.DEVELOPER_GIFT]: "Developer Gift",
        [J.GD.INVOICE]: "Invoice",
        [J.GD.REVERSE_TRIAL]: "Reverse Trial",
        [J.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
        [J.GD.SUBSCRIPTION]: "Subscription",
        [J.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
    },
    su = (e) => {
        let t,
            { entitlement: a, active: n, onDelete: l } = e,
            s = (e) => (null != e ? (0, nm.i$)(e, "LLL") : "---");
        return (0, r.jsxs)("div", {
            className: k()(so.Nr, n ? sd.C1 : ""),
            children: [
                (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["ID: ", a.id, " "] }),
                !n &&
                    (0, r.jsxs)(D.E, {
                        variant: "text-md/normal",
                        children: ["SKU: ", sm.find((e) => e.value === a.skuId)?.label],
                    }),
                null != a.startsAt &&
                    null != a.endsAt &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["Start: ", s(a.startsAt), " "] }),
                            (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["End: ", s(a.endsAt), " "] }),
                        ],
                    }),
                (0, r.jsxs)(D.E, {
                    variant: "text-md/normal",
                    children: [
                        "Entitlement source type: ",
                        null != (t = a.sourceType) && t in sc ? sc[t] : `Unknown source type ${t}`,
                    ],
                }),
                n &&
                    null != l &&
                    (0, r.jsx)(na.$n, {
                        className: so.RW,
                        size: na.$n.Sizes.TINY,
                        color: na.$n.Colors.RED,
                        look: na.$n.Looks.OUTLINED,
                        onClick: l,
                        children: "Delete",
                    }),
            ],
        });
    },
    sm = [
        { id: "1h", label: "1 hour", value: l9.j.PREMIUM_TIER_2_1_HOUR },
        { id: "1d", label: "1 day", value: l9.j.PREMIUM_TIER_2_1_DAY },
        { id: "3d", label: "3 days", value: l9.j.PREMIUM_TIER_2_3_DAY },
    ];
function sh() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(l9.j.PREMIUM_TIER_2_1_HOUR),
        [l, s] = o.useState([]),
        [i, c] = o.useState([]),
        {
            refreshEntitlementList: u,
            grantFractionalPremium: m,
            deleteFractionalPremium: p,
            triggerNextEntitlementFulfillment: g,
            entitlements: v,
            loading: j,
        } = sr();
    return (
        o.useEffect(() => {
            u();
        }, [u]),
        o.useEffect(() => {
            s(v.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === J.zF_.FRACTIONAL_REDEMPTION)),
                c(v.filter((e) => Object.values(l9.j).includes(e.skuId) && null == e.startsAt));
        }, [v]),
        (0, r.jsx)(d.Ip, {
            className: tT.nd,
            children: (0, r.jsxs)("div", {
                className: sd.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: sd.dL,
                        children: [
                            (0, r.jsx)(D.E, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, r.jsxs)(I.D, {
                                onClick: () => t(!e),
                                className: so.As,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Info" }),
                                    }),
                                    (0, r.jsx)(se.A, { direction: e ? se.A.Directions.UP : se.A.Directions.DOWN }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        (0, r.jsxs)("div", {
                            style: { margin: "8px 0" },
                            children: [
                                (0, r.jsx)(D.E, {
                                    variant: "text-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.",
                                }),
                                (0, r.jsx)("br", {}),
                                (0, r.jsx)(D.E, {
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
                        className: k()([so.uW, sd.Uo]),
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: sm,
                                onSelectionChange: n,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Grant Fractional Nitro",
                                onClick: () => m(a),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("section", {
                        className: so.uW,
                        children: [
                            (0, r.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: sd.dL,
                                children: [
                                    (0, r.jsx)(D.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: so.GC,
                                        children: [
                                            (0, r.jsx)(na.$n, {
                                                disabled: j,
                                                size: na.$n.Sizes.TINY,
                                                color: na.$n.Colors.PRIMARY,
                                                look: na.$n.Looks.OUTLINED,
                                                onClick: () => g(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(na.$n, {
                                                disabled: j,
                                                size: na.$n.Sizes.TINY,
                                                color: na.$n.Colors.RED,
                                                look: na.$n.Looks.OUTLINED,
                                                onClick: () => p(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(na.$n, {
                                                disabled: j,
                                                look: na.$n.Looks.BLANK,
                                                size: na.$n.Sizes.ICON,
                                                onClick: u,
                                                children: (0, r.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, r.jsx)(l7.f, { size: "xs", color: "currentColor" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            l.length > 0 &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Active premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: l.map((e) =>
                                                (0, r.jsx)(
                                                    su,
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
                                        (0, r.jsx)(D.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: i.map((e) => (0, r.jsx)(su, { entitlement: e }, e.id)),
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
var sx = a(390544),
    sp = a(396748),
    sg = a(522055),
    sv = a(661202);
function sj() {
    let e = (0, M.bG)([aq.A], () => aq.A.getGuildId()),
        t = (0, M.bG)([aY.A], () => aY.A.getGuild(e)?.name),
        a = (0, M.bG)([sg.A], () => sg.A.getStateForGuild(e)?.instances),
        n = o.useMemo(() => Object.values(a ?? {})[0], [a]),
        l = o.useCallback(
            (t) => {
                null != n &&
                    null != e &&
                    tA.h.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: { ...n, status: t },
                    });
            },
            [n, e],
        ),
        s = o.useMemo(
            () =>
                Object.values(sx.M).map((e) =>
                    (0, r.jsx)(
                        h.$,
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
                tA.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...n, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [n, e]);
    return null == e
        ? null
        : (0, r.jsxs)(d.Ip, {
              className: sv.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: sv.uW,
                      children: (0, r.jsx)(w.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: sv.uW,
                      children: [
                          (0, r.jsx)(D.E, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${n?.name}`,
                          }),
                          (0, r.jsx)("div", { className: sv.UD, children: s }),
                          (0, r.jsx)(D.E, { variant: "eyebrow", children: "Remove Server Info" }),
                          (0, r.jsx)("div", {
                              className: sv.UD,
                              children: (0, r.jsx)(h.$, {
                                  variant: "primary",
                                  text: "Remove IP Address & Game Server Panel URL",
                                  onClick: i,
                              }),
                          }),
                          (0, r.jsx)(D.E, { variant: "eyebrow", children: "Reset server" }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              text: "Reset",
                              onClick: () => {
                                  (0, sp.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
function sb(e, t) {
    let a = "boolean" == typeof t ? t : !aR.Ay.get(e);
    tA.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var sf = a(460281);
function sy(e) {
    let { devSettingsCategory: t } = e,
        a = (0, M.bG)([aR.Ay], () => aR.Ay.allByCategory(t), [t], M.My),
        n = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: n }] = e;
                    return (0, r.jsx)(v.d, { label: n, description: t, checked: a, onChange: (e) => sb(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: k()(tT.nd, sf.n), children: n });
}
var sC = a(950305),
    s_ = a(231483),
    sE = a(597770),
    sS = a(433492),
    sN = a(695458),
    sA = a(796140),
    sk = a(268791),
    sI = a(836480),
    sD = a(855473),
    sT = a(626258),
    sR = a(420854),
    sO = a(373846),
    sw = a(657044),
    sM = a(141060),
    sL = a(608599),
    sP = a(685761),
    sU = a(157225),
    sG = a(362704),
    sF = a(625903),
    sB = a(628284),
    sV = a(320448),
    s$ = a(562708),
    sW = a(830215),
    sz = a(381689),
    sH = a(889227),
    sK = a(499785),
    sY = a(315069);
class sq extends sY.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids);
    }
    static fromServer(e) {
        return new sq(e);
    }
    setPassword(e) {
        return (this.password = e), this;
    }
}
let sJ = { pools: null, users: null };
function sQ(e) {
    null == sJ.users && (sJ.users = new Map()), sJ.users.set(e.id, new sH.A(e));
}
class sX extends M.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (sJ.pools = new Map(Object.entries(e.pools))),
            null != e.users && (sJ.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != sJ.pools ? Object.fromEntries(sJ.pools) : null,
            users: null != sJ.users ? Object.fromEntries(sJ.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(sJ.users?.values() ?? []).filter((t) => sJ.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return sJ.pools?.get(e) ?? null;
    }
    getUser(e) {
        return sJ.users?.get(e) ?? null;
    }
    getPools() {
        return null === sJ.pools ? null : Array.from(sJ.pools.values());
    }
}
let sZ = new sX(tA.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        null == sJ.pools && (sJ.pools = new Map()), sJ.pools.set(t.id, t), a.forEach(sQ);
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = sJ.pools?.get(t);
        if (null == a) return !1;
        a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                sJ.users?.delete(e);
            }),
            sJ.pools?.delete(t);
    },
});
var s0 = a(835002);
async function s1(e, t) {
    return await sK.A.get({
        url: J.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: s$.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: a, body: n } = e;
            if (!a) return void sz.A.showFailedToast(s0.OB.GENERIC_ERROR);
            let { generated_pool: l, users: s } = n;
            tA.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: sq.fromServer(l).setPassword(t),
                users: s.map((e) => new sH.A(e)),
            });
        })
        .catch(() => (sz.A.showFailedToast(s0.OB.GENERIC_ERROR), null));
}
var s2 = a(844330),
    s8 = a(277851);
let s6 = [
        sC.n,
        s_.l,
        sE.o,
        sS.K,
        sN.m,
        sA.c,
        sk.$,
        sI.Q,
        sD.Z,
        sT.A,
        sR.E,
        sO.C,
        sw._,
        sM.i,
        sL.L,
        sP.f,
        sU.N,
        sG.Y,
        sF.Z,
    ],
    s3 = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ],
    s5 = () => {
        let [e, t] = o.useState(""),
            [a, n] = o.useState(""),
            [l, s] = o.useState(!1);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("form", {
                    onSubmit: async (l) => {
                        l.preventDefault(), s(!0);
                        try {
                            await s1(e, a), t(""), n("");
                        } finally {
                            s(!1);
                        }
                    },
                    children: (0, r.jsxs)(R.B, {
                        direction: "vertical",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, r.jsxs)(R.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    (0, r.jsx)(p.k, {
                                        fullWidth: !0,
                                        value: e,
                                        onChange: t,
                                        placeholder: "Pool ID",
                                        disabled: l,
                                    }),
                                    (0, r.jsx)(p.k, {
                                        type: "password",
                                        fullWidth: !0,
                                        value: a,
                                        onChange: n,
                                        placeholder: "Password",
                                        disabled: l,
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(R.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 4,
                                children: [
                                    (0, r.jsx)(h.$, {
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
                                    (0, r.jsx)(h.$, {
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
                (0, r.jsx)(g.c, { gap: 4 }),
            ],
        });
    },
    s4 = (e) => {
        let { pool: t } = e,
            { id: a, summary: n } = t,
            l = sZ.getUsersForPool(a),
            s = (0, M.bG)([nx.default], () => nx.default.getId()),
            i = s6[Number(a) % s6.length],
            d = s3[Number(a) % s3.length],
            c = o.useCallback(() => {
                tA.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
            }, [a]);
        return (0, r.jsx)(R.B, {
            direction: "horizontal",
            align: "start",
            justify: "space-between",
            children: (0, r.jsx)(s2.A, {
                icon: (0, r.jsx)(D.E, {
                    variant: "text-md/medium",
                    color: d,
                    className: s8.td,
                    children: (0, r.jsx)(i, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
                title: n,
                className: s8.JC,
                subtitle: `${l.length} users`,
                children: (0, r.jsxs)(R.B, {
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
                                        0 !== a && (0, r.jsx)(g.c, { gap: 4 }),
                                        (0, r.jsx)(
                                            I.D,
                                            {
                                                onClick: (a) => {
                                                    a.stopPropagation(),
                                                        (function (e, t) {
                                                            let a = sZ.getUser(t);
                                                            if (null == a) throw Error("User not found");
                                                            let n = sZ.getPool(e)?.password;
                                                            if (null == n) throw Error("Pool password not found");
                                                            if (null == a.email) throw Error("User email not found");
                                                            sW.A.login({
                                                                login: a.email,
                                                                password: n,
                                                                isMultiAccount: !0,
                                                                source: "generated_test_user",
                                                            }).catch(
                                                                () => (sz.A.showFailedToast(s0.OB.GENERIC_ERROR), null),
                                                            );
                                                        })(t.id, e.id);
                                                },
                                                "aria-disabled": s === e.id,
                                                className: k()(s8.vk, { [s8.Pe]: s === e.id }),
                                                children: (0, r.jsxs)(
                                                    R.B,
                                                    {
                                                        direction: "horizontal",
                                                        align: "center",
                                                        justify: "space-between",
                                                        gap: 8,
                                                        padding: { right: 8 },
                                                        fullWidth: !1,
                                                        children: [
                                                            (0, r.jsxs)(R.B, {
                                                                direction: "horizontal",
                                                                align: "center",
                                                                gap: 8,
                                                                fullWidth: !1,
                                                                className: k()({ [s8.WP]: s === e.id }),
                                                                children: [
                                                                    (0, r.jsx)(sC.n, {
                                                                        size: "custom",
                                                                        width: 20,
                                                                        height: 20,
                                                                        color: "currentColor",
                                                                    }),
                                                                    (0, r.jsxs)("div", {
                                                                        children: [
                                                                            (0, r.jsx)(D.E, {
                                                                                variant: "text-sm/normal",
                                                                                color: "text-default",
                                                                                children: e.username,
                                                                            }),
                                                                            (0, r.jsx)(D.E, {
                                                                                variant: "text-xs/normal",
                                                                                color: "text-muted",
                                                                                className: s8.c1,
                                                                                children: e.email,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            s === e.id
                                                                ? (0, r.jsx)(D.E, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-feedback-positive",
                                                                      children: (0, r.jsx)(sB.y, {
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                                  })
                                                                : (0, r.jsx)(sV._, {
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
                            className: s8.UD,
                            children: (0, r.jsx)(h.$, {
                                icon: ni.u,
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
function s9() {
    let e = (0, M.yK)([sZ], () => sZ.getPools() ?? []);
    return (0, r.jsxs)(R.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: s8.kL,
        children: [
            (0, r.jsx)(s5, {}),
            (0, r.jsx)(d.Ip, { className: s8.Ik, children: e?.map((e) => (0, r.jsx)(s4, { pool: e }, e.id)) }),
        ],
    });
}
var s7 = a(582306),
    ie = a(528153),
    it = a(275759),
    ia = a(888429);
function il(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function is() {
    let e = (0, M.bG)([it.Ay], () => it.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, M.bG)([it.Ay], () => it.Ay.getDevToolCurrentDate()),
        a = (0, M.bG)([it.Ay], () => it.Ay.getGiftUnreadNotificationLastDismissedTimes()),
        n = (0, M.bG)([it.Ay], () => it.Ay.getMessageGiftIntentLastShownMap()),
        l = (0, M.bG)([it.Ay], () => it.Ay.getHighestAffinityFriendAnniversaries()),
        s = (0, M.bG)([it.Ay], () => it.Ay.getHighAffinityFriendAnniversaries()),
        i = (0, M.bG)([it.Ay], () => it.Ay.getProfilePopoutGiftIntentsDismissMap()),
        o = (0, M.bG)([ae.A], () => {
            let e =
                ae.A.settings.userContent?.recurringDismissibleContentStates[t7.M.GIFT_INTENT_MESSAGE]
                    ?.lastDismissedAtMs;
            if (null == e || "0" === e) return null;
            let t = Number(e);
            return Number.isNaN(t) ? null : t;
        }),
        c = (e) => {
            tA.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
        },
        u = (e) => {
            let t = a2.A.getUserAffinity(e);
            return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
        };
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)("div", {
            className: ia.l$,
            children: [
                (0, r.jsx)(D.E, { className: ia.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, r.jsx)("div", {
                    className: ia.Pm,
                    children: (0, r.jsxs)(R.B, {
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
                                    c(e);
                                },
                            }),
                            (0, r.jsx)(h.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Clear",
                                onClick: () => {
                                    c(null);
                                },
                            }),
                        ],
                    }),
                }),
                null != e &&
                    (0, r.jsx)("div", {
                        className: ia.Pm,
                        children: (0, r.jsxs)(R.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(D.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "Affinity is the percent chance that User A will DM or GDM User B in the next 7 days.",
                                }),
                                (0, r.jsx)(D.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "The devtool automatically assigns users as high affinity regardless of actual affinity for testing.",
                                }),
                                l.length > 0 &&
                                    (0, r.jsxs)(R.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(D.E, {
                                                variant: "text-xs/semibold",
                                                children:
                                                    "Highest Affinity Friend Anniversaries (Eligible for Notification):",
                                            }),
                                            l.map((e) => {
                                                let t = H.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    D.E,
                                                    { variant: "text-xs/normal", children: [a, " (", u(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                                s.length > 0 &&
                                    (0, r.jsxs)(R.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(D.E, {
                                                variant: "text-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            s.map((e) => {
                                                let t = H.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    D.E,
                                                    { variant: "text-xs/normal", children: [a, " (", u(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                    }),
                (0, r.jsx)("div", {
                    className: ia.Pm,
                    children: (0, r.jsxs)(R.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(s7.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? nt()(t) : void 0,
                                onSelect: (e) => {
                                    let t = nt()(),
                                        a = e
                                            .clone()
                                            .hours(t.hours())
                                            .minutes(t.minutes())
                                            .seconds(t.seconds())
                                            .milliseconds(t.milliseconds());
                                    tA.h.dispatch({ type: "DEV_TOOLS_SET_CURRENT_DATE", date: a.valueOf() });
                                },
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Clear",
                                onClick: () => {
                                    tA.h.dispatch({ type: "DEV_TOOLS_RESET_CURRENT_DATE" });
                                },
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: ia.Pm,
                    children: (0, r.jsxs)(R.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(R.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(D.E, {
                                        variant: "text-md/normal",
                                        children: "Reset DCF gift intent cooldown (global, 24h)",
                                    }),
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            (0, lv._N)(t7.M.GIFT_INTENT_MESSAGE);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsx)(D.E, {
                                variant: "text-xs/normal",
                                children: null != o ? `Dismissed at: ${il(o)}` : "Not dismissed",
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: ia.Pm,
                    children: (0, r.jsxs)(R.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(R.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(D.E, {
                                        variant: "text-md/normal",
                                        children: "Reset gift message cooldown (per-user, 14d)",
                                    }),
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            tA.h.dispatch({ type: "DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET" });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(n).length > 0 &&
                                (0, r.jsxs)(R.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift Message Intent Last Shown:",
                                        }),
                                        Object.entries(n).map((e) => {
                                            let [t, a] = e,
                                                n = H.default.getUser(t),
                                                l = n?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                D.E,
                                                { variant: "text-xs/normal", children: [l, ": ", il(a)] },
                                                t,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: ia.Pm,
                    children: (0, r.jsxs)(R.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(R.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(D.E, {
                                        variant: "text-md/normal",
                                        children: "Reset gift notification cooldown",
                                    }),
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            tA.h.dispatch({
                                                type: "DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            a.length > 0 &&
                                (0, r.jsxs)(R.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift notification shown timestamps:",
                                        }),
                                        a.map((e, t) =>
                                            (0, r.jsx)(D.E, { variant: "text-xs/normal", children: il(e) }, t),
                                        ),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: ia.Pm,
                    children: [
                        (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Send gift notification" }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Send",
                            onClick: () => {
                                ie.A.sendGiftingNotificationIfEligible();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: ia.Pm,
                    children: [
                        (0, r.jsx)(D.E, {
                            variant: "text-md/normal",
                            children: "Clear last seen friend anniversaries in All Friends",
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Clear",
                            onClick: () => {
                                tA.h.dispatch({ type: "DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET" });
                            },
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: ia.Pm,
                    children: (0, r.jsxs)(R.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(R.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(D.E, {
                                        variant: "text-md/normal",
                                        children: "Reset profile popout gift intents dismiss",
                                    }),
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            tA.h.dispatch({
                                                type: "DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET",
                                            });
                                        },
                                    }),
                                ],
                            }),
                            Object.keys(i).length > 0 &&
                                (0, r.jsxs)(R.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            variant: "text-xs/semibold",
                                            children: "Profile Popout Gift Intents Dismissed:",
                                        }),
                                        Object.entries(i).map((e) => {
                                            let [t, a] = e,
                                                n = H.default.getUser(t),
                                                l = n?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                D.E,
                                                { variant: "text-xs/normal", children: [l, ": ", il(a)] },
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
var ii = a(460890),
    ir = a(349288),
    io = a(517461),
    id = a(214947),
    ic = a(403581),
    iu = a(34188);
let im = [
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
var ih = a(545406);
let ix = [0, 0.5, 1],
    ip = ["Center", "Inner ring", "Outer ring"],
    ig = ix.length,
    iv = "ILLO_BLUE",
    ij = "ILLO_BLUE_40",
    ib = Array.from({ length: ig }, () => ij),
    iy = Array.from({ length: ig }, () => iv),
    iC = ["1", "0.5", "0"],
    i_ = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    iE = [
        { label: "Light", value: J.NJ8.LIGHT, id: J.NJ8.LIGHT },
        { label: "Dark", value: J.NJ8.DARK, id: J.NJ8.DARK },
        { label: "Darker", value: J.NJ8.DARKER, id: J.NJ8.DARKER },
        { label: "Midnight", value: J.NJ8.MIDNIGHT, id: J.NJ8.MIDNIGHT },
    ],
    iS = { [J.NJ8.MIDNIGHT]: J.NJ8.DARKER, [J.NJ8.DARKER]: J.NJ8.DARK, [J.NJ8.LIGHT]: J.NJ8.DARK },
    iN = { [J.NJ8.LIGHT]: "light", [J.NJ8.DARK]: "ash", [J.NJ8.DARKER]: "dark", [J.NJ8.MIDNIGHT]: "onyx" },
    iA = [
        { id: "friends", icon: id.$, text: "Friends" },
        { id: "nitro", icon: ic.t, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: iu.U, text: "Shop", useCustomGradient: !0 },
    ],
    ik = im.map((e) => ({ label: e, value: e, id: e })),
    iI = Object.fromEntries(
        im.map((e) => [
            e,
            Object.keys(eO.A.unsafe_rawColors)
                .filter((t) => String(t).startsWith(e + "_"))
                .sort(
                    (e, t) =>
                        parseInt(String(e).split("_").pop() ?? "0", 10) -
                        parseInt(String(t).split("_").pop() ?? "0", 10),
                )
                .map((e) => {
                    let t = String(e).split("_").pop() ?? e,
                        [a, n, l] = eO.A.unsafe_rawColors[e].resolve().rgba(),
                        s =
                            (0.299 * a + 0.587 * n + 0.114 * l) / 255 > 0.5
                                ? eO.A.unsafe_rawColors.OPACITY_BLACK_28
                                : eO.A.unsafe_rawColors.OPACITY_WHITE_28,
                        i = (0, r.jsx)("span", {
                            className: ih.oP,
                            style: { background: `rgb(${a}, ${n}, ${l})`, border: `1px solid ${s.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: i };
                }),
        ]),
    );
var iD = a(306327);
function iT(e, t, a) {
    return e.map((e, n) => (n === t ? a : e));
}
function iR(e, t) {
    let [a, n, l, s] = eO.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: n, b: l, a: s };
}
function iO(e, t) {
    let a = eO.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function iw(e) {
    let { yaml: t, label: a } = e,
        n = o.useCallback(() => {
            navigator.clipboard.writeText(t);
        }, [t]);
    return (0, r.jsxs)(R.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(R.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                justify: "space-between",
                children: [
                    (0, r.jsx)(D.E, { variant: "text-md/semibold", children: a }),
                    (0, r.jsx)(eI.K, {
                        icon: nn.T,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: n,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: ih.RP, children: t }),
        ],
    });
}
function iM(e) {
    let { allResolvedStops: t } = e,
        a = o.useMemo(
            () =>
                ip.map((e, a) => {
                    let n;
                    return (
                        (n = iE
                            .map((e) => {
                                let n,
                                    l,
                                    { value: s } = e,
                                    i = iN[s],
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
    return (0, r.jsxs)(R.B, {
        gap: 16,
        children: [
            (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Token YAML" }),
            ip.map((e, t) => (0, r.jsx)(iw, { yaml: a[t], label: e }, e)),
        ],
    });
}
function iL(e, t, a) {
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
    return new iD.A("srgb", [
        (e.r * (1 - r) + n * r) / 255,
        (e.g * (1 - r) + l * r) / 255,
        (e.b * (1 - r) + s * r) / 255,
    ]);
}
function iP(e, t, a) {
    let n = a.map((e) => {
            let [t, a, n] = eO.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: n, opacity: e.opacity, position: e.position };
        }),
        l = 1 / 0,
        s = (e) => {
            e < l && (l = e);
        };
    for (let a of n) s(e.contrast(iL(t, n, a.position), "WCAG21"));
    for (let a = 0; a < n.length - 1; a++) {
        let { contrast: l } = (function (e, t, a, n, l) {
            let s = 1 / 0,
                i = n;
            for (let r = 0; r <= 100; r++) {
                let o = n + (r / 100) * (l - n),
                    d = a.contrast(iL(e, t, o), "WCAG21");
                d < s && ((s = d), (i = o));
            }
            return { contrast: s, position: i };
        })(t, n, e, n[a].position, n[a + 1].position);
        s(l);
    }
    return Math.round(100 * l) / 100;
}
function iU(e) {
    let [t, a, n] = eO.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [l, s, i] = eO.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = eO.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new iD.A("srgb", [t / 255, a / 255, n / 255]),
        background: { r: l * (1 - c) + r * c, g: s * (1 - c) + o * c, b: i * (1 - c) + d * c },
    };
}
function iG() {
    return {
        colors: Array.from({ length: ig }, () => void 0),
        scales: Array.from({ length: ig }, () => void 0),
        opacities: Array.from({ length: ig }, () => void 0),
    };
}
function iF() {
    return {
        [J.NJ8.LIGHT]: iG(),
        [J.NJ8.DARK]: { colors: [...ib], scales: [...iy], opacities: [...iC] },
        [J.NJ8.DARKER]: iG(),
        [J.NJ8.MIDNIGHT]: iG(),
    };
}
function iB() {
    let e = (0, ii.G9)(),
        [t, a] = o.useState(J.NJ8.DARK),
        [n, l] = (0, io.V)("DevToolsGradientContrastPanel_themeStops", iF()),
        s = n ?? iF(),
        [i, c] = o.useState(["", "", ""]),
        [u, m] = o.useState([null, null, null]),
        [x, g] = o.useState(null),
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
                        (0, r.jsxs)(R.B, {
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
                                              (0, r.jsx)(D.E, { variant: "text-sm/normal", children: e.name }),
                                              (0, r.jsx)(lN.Q, {
                                                  text: "Remove",
                                                  variant: "critical",
                                                  textVariant: "text-sm/medium",
                                                  onClick: () => t(null),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(h.$, {
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
                    iE.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    n = [],
                                    l = [];
                                for (let s = 0; s < ig; s++) {
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
                                        d = iS[d];
                                    }
                                    a.push(i ?? ib[s]), n.push(r ?? iy[s]), l.push(o ?? iC[s]);
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
        C = o.useMemo(() => iU({ theme: t, saturation: 1 }), [t]),
        _ = o.useMemo(() => {
            let e = [];
            for (let t = 0; t < ig; t++) {
                let a = parseFloat(f.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: f.colors[t], opacity: a, position: ix[t] });
            }
            return e;
        }, [f]),
        E = o.useMemo(() => {
            if (null == _) return null;
            let { text: e, background: t } = C;
            return ip.map((a, n) =>
                iI[f.scales[n]].map((a) => {
                    let l = iP(e, t, iT(_, n, { ..._[n], color: a.value }));
                    return { ...a, trailing: `(${l}:1)` };
                }),
            );
        }, [_, C, f.scales]),
        S = o.useMemo(() => {
            try {
                return iE.map((e) => {
                    let { value: t, label: a } = e,
                        n = b[t],
                        l = [];
                    for (let e = 0; e < ig; e++) {
                        let s = parseFloat(n.opacities[e]);
                        if (isNaN(s) || s < 0 || s > 1) return { theme: t, label: a, result: null };
                        l.push({ color: n.colors[e], opacity: s, position: ix[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: n, background: l } = iU(t),
                                s = iP(n, l, e),
                                i = s >= 4.5;
                            if (!i)
                                for (let t = 0; t < e.length; t++) {
                                    let s = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return im.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == s) continue;
                                    let i = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of iI[s]) {
                                        if (o === e[t].color) continue;
                                        let s = iP(n, l, iT(e, t, { ...e[t], color: o }));
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
    return (0, r.jsx)(d.Ar, {
        className: ih.XG,
        children: (0, r.jsxs)(R.B, {
            gap: 24,
            padding: 8,
            className: ih.zr,
            children: [
                (0, r.jsx)(w.D, {
                    variant: "heading-lg/medium",
                    children: "Tab Hover Gradient Token Generator & Contrast Checker",
                }),
                (0, r.jsxs)(R.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(D.E, {
                            variant: "text-md/normal",
                            children:
                                "Checks that tab hover gradients pass WCAG AA (4.5:1) contrast against the text in the tab, accounting for opacities and hover states.",
                        }),
                        (0, r.jsx)(D.E, {
                            variant: "text-sm/normal",
                            children:
                                "Pick colors for each gradient stop (center, inner ring, outer ring) per theme. Each color in the dropdown will show the minimum contrast ratio for the gradient if the color were selected. Dark-family themes inherit: values set on Dark cascade to Darker and Midnight unless overridden.",
                        }),
                        (0, r.jsx)(D.E, {
                            variant: "text-sm/normal",
                            children:
                                "Use the hex field to paste in a hex color \u2014 it will snap to the closest allowed token and show the deltaE distance.",
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/normal",
                            children: [
                                "Copy the generated YAML at the bottom to create your token definitions to be used by the",
                                " ",
                                (0, r.jsx)(ir.Anchor, {
                                    href: "https://design.discord.tools/foundations/color/token-pipeline",
                                    children: "token pipeline",
                                }),
                                ".",
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(t1.Z, {
                    selectionMode: "single",
                    label: "Theme",
                    value: t,
                    onSelectionChange: (e) => a(e),
                    closeOnSelect: !0,
                    options: iE,
                }),
                (0, r.jsxs)(R.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: ih.G9,
                            children: ip.map((e, t) => {
                                let a = "" !== i[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)(R.B, {
                                                gap: 0,
                                                className: ih.hi,
                                                children: [
                                                    (0, r.jsx)(D.E, { variant: "text-md/medium", children: e }),
                                                    (0, r.jsx)(lN.Q, {
                                                        variant: "secondary",
                                                        textVariant: "text-xs/normal",
                                                        text: `(${iO(f.colors[t], parseFloat(f.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                iO(f.colors[t], parseFloat(f.opacities[t])),
                                                            ),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(t1.Z, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: a,
                                                value: f.scales[t],
                                                onSelectionChange: (e) => {
                                                    let a = iI[e][0]?.value;
                                                    y((n) => ({
                                                        ...n,
                                                        scales: iT(n.scales, t, e),
                                                        colors: null != a ? iT(n.colors, t, a) : n.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: ik,
                                            }),
                                            (0, r.jsx)(t1.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: f.colors[t],
                                                onSelectionChange: (e) =>
                                                    y((a) => ({ ...a, colors: iT(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: E?.[t] ?? iI[f.scales[t]],
                                            }),
                                            (0, r.jsx)(p.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: f.opacities[t],
                                                onChange: (e) => y((a) => ({ ...a, opacities: iT(a.opacities, t, e) })),
                                                placeholder: "0\u20131",
                                            }),
                                            (0, r.jsx)(p.k, {
                                                label: `Hex${a && null != u[t] ? ` (dE: ${u[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: i[t],
                                                onChange: (e) => {
                                                    c((a) => iT(a, t, e));
                                                    let a = (function (e) {
                                                        if (!i_.test(e)) return null;
                                                        try {
                                                            return new iD.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = ij,
                                                                a = iv,
                                                                n = 1 / 0;
                                                            for (let l of im)
                                                                for (let s of iI[l]) {
                                                                    let i = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, n] = eO.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new iD.A("srgb", [
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
                                                        m((a) => iT(a, t, e.deltaE)),
                                                            y((a) => ({
                                                                ...a,
                                                                scales: iT(a.scales, t, e.scale),
                                                                colors: iT(a.colors, t, e.color),
                                                            }));
                                                    } else m((e) => iT(e, t, null));
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
                (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Preview" }),
                (0, r.jsx)(ii.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(eT.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)(R.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: ih.$8,
                                        style: { background: eO.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: iA.map((e, t) =>
                                            (0, r.jsx)(
                                                el.z9,
                                                {
                                                    route: "",
                                                    selected: x === e.id,
                                                    onClick: () => g(e.id),
                                                    icon: e.icon,
                                                    text: e.text,
                                                    showHoverGradient: !0,
                                                    nitroHoverGradient: "nitroHoverGradient" in e,
                                                    role: "listitem",
                                                    tabIndex: 0,
                                                    onFocus: () => {},
                                                    ...("useCustomGradient" in e && {
                                                        hoverGradientStart: iR(f.colors[0], parseFloat(f.opacities[0])),
                                                        hoverGradientMiddle: iR(
                                                            f.colors[1],
                                                            parseFloat(f.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: iR(f.colors[2], parseFloat(f.opacities[2])),
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
                    (0, r.jsxs)(R.B, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Results" }),
                            S.map((e) => {
                                let { theme: t, label: a, result: n } = e;
                                return null != n
                                    ? (0, r.jsxs)(
                                          R.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, r.jsx)(D.E, { variant: "text-md/semibold", children: a }),
                                                  (0, r.jsxs)(T.w, {
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
                                                      (0, r.jsxs)(R.B, {
                                                          gap: 4,
                                                          children: [
                                                              (0, r.jsx)(D.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: "Suggestion:",
                                                              }),
                                                              (0, r.jsxs)(D.E, {
                                                                  variant: "text-sm/normal",
                                                                  children: [
                                                                      ip[n.suggestion.stopIndex],
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
                                                      (0, r.jsx)(D.E, {
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
                (0, r.jsx)(iM, { allResolvedStops: b }),
            ],
        }),
    });
}
var iV = a(820739),
    i$ = a(230135),
    iW = a(45780),
    iz = a(868652),
    iH = a(859241);
let iK = [
        t7.M.GUILD_POWERUP_PERKS_COACHMARK,
        t7.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        t7.M.GUILD_POWERUP_NOTIFICATION,
        t7.M.GUILD_TAG_AVAILABLE_COACHMARK,
        t7.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
    ],
    iY = [
        t7.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        t7.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        t7.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        t7.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        t7.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    iq = [t7.V.ADOPT_CLAN_IDENTITY_NOTICE],
    iJ = [
        t7.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        t7.M.VANITY_URL_POWERUP_ROLLBACK_MODAL,
        t7.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
    ];
function iQ(e) {
    switch (e) {
        case t7.V.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return "GUILD_POWERUP_LEVEL_1_COACHMARK";
        case t7.V.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return "GUILD_POWERUP_LEVEL_2_COACHMARK";
        case t7.V.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return "GUILD_POWERUP_LEVEL_3_COACHMARK";
        case t7.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
        case t7.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
        case t7.V.ADOPT_CLAN_IDENTITY_NOTICE:
            return "ADOPT_CLAN_IDENTITY_NOTICE";
        default:
            return String(e);
    }
}
var iX = a(861671);
async function iZ(e, t, a) {
    await nH.Bo.patch({
        url: J.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : nt()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, iV.VU)(e),
        (0, iz.Xd)(e, !0);
}
async function i0(e) {
    await nH.Bo.post({ url: J.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function i1() {
    let e = (0, M.bG)([aq.A], () => aq.A.getGuildId()),
        t = (0, M.bG)([aY.A], () => aY.A.getGuild(e)?.name),
        a = (0, M.yK)([ae.A], () => [...iY, ...iq].filter((t) => null != e && (0, iW.zs)(t, e))),
        n = (0, M.yK)([iH.A], () => (null != e ? (iH.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(d.Ip, {
            className: iX.kL,
            children: [
                (0, r.jsx)("div", {
                    className: iX.uW,
                    children: (0, r.jsx)(w.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                }),
                (0, r.jsxs)("div", {
                    className: iX.uW,
                    children: [
                        (0, r.jsx)(D.E, {
                            variant: "eyebrow",
                            className: iX.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, iz.qM)();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iX.uW,
                    children: [
                        (0, r.jsx)(D.E, { variant: "eyebrow", className: iX.wx, children: "Reset Progress Bar State" }),
                        (0, r.jsx)(h.$, { variant: "primary", text: "Reset", onClick: i$.O }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iX.uW,
                    children: [
                        (0, r.jsx)(D.E, { variant: "eyebrow", children: "Set Warning State" }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        iZ(e, n.slice(Math.floor(n.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        iZ(e, n, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iX.uW,
                    children: [
                        (0, r.jsx)(D.E, { variant: "eyebrow", className: iX.wx, children: "Reset User Level DCs" }),
                        (0, r.jsx)(R.B, {
                            gap: 16,
                            children: iK.map((e) => (0, r.jsx)(lh, { className: iX.z6, content: t7.M[e] }, t7.M[e])),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: iX.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Guild Level DCs",
                        children: iY.map((t) =>
                            (0, r.jsx)(
                                v.d,
                                {
                                    label: iQ(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, iW._$)(t, e, !1)
                                            : ((0, lv._N)(t7.M.GUILD_POWERUP_NOTIFICATION), (0, iW.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: iX.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: iq.map((t) =>
                            (0, r.jsx)(
                                v.d,
                                {
                                    label: iQ(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, iW._$)(t, e, !1)
                                            : ((0, lv._N)(t7.M.GUILD_POWERUP_NOTIFICATION), (0, iW.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: iX.uW,
                    children: [
                        (0, r.jsx)(D.E, {
                            variant: "eyebrow",
                            className: iX.wx,
                            children: "Reset Powerup Rollback DCs",
                        }),
                        iJ.map((e) => (0, r.jsx)(lh, { className: iX.z6, content: t7.M[e] }, t7.M[e])),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iX.uW,
                    children: [
                        (0, r.jsx)(D.E, {
                            variant: "eyebrow",
                            className: iX.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                i0(e);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(h.$, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, sp.Wp)(!1);
                    },
                }),
            ],
        });
}
var i2 = a(450510),
    i8 = a(320681);
function i6(e) {
    let { hotspotLocation: t } = e,
        [a, n] = (0, M.yK)([i2.HP], () => [i2.HP.hasHotspot(t, !0), i2.HP.getHotspotOverride(t)]);
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
        onSelectionChange: (e) => (null != e ? (0, i2.Kl)(t, e) : (0, i2.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function i3() {
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsx)(u.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: i8.IN,
            children: (0, r.jsx)(R.B, {
                gap: 20,
                children: Object.keys(i2._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, r.jsx)(i6, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var i5 = a(919523),
    i4 = a(855522),
    i9 = a(37646),
    i7 = a(773669);
function re() {
    let e = (0, M.bG)([i7.default], () => i7.default.locale),
        [t, a] = o.useState(),
        n = (0, i5.runtimeHashMessageKey)(t ?? ""),
        l = o.useMemo(() => aX.t[n], [n]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(aO.Ay, {
                children: [
                    (0, r.jsx)(aO.Ay.Icon, { icon: i9.U, tooltip: "Locale" }),
                    (0, r.jsx)(aO.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, r.jsxs)(n_, {
                children: [
                    (0, r.jsx)(nE, { name: "Active System", children: "@discord/intl" }),
                    (0, r.jsx)(nE, { name: "App", children: e }),
                    (0, r.jsx)(nE, { name: "System", children: aX.systemLocale }),
                    (0, r.jsx)(nE, { name: "@discord/intl", children: aX.intl.currentLocale }),
                    (0, r.jsx)(nE, { name: "common i18n", children: i4.A.getLocale() }),
                    (0, r.jsx)(nE, { name: "Moment", children: nt().locale() }),
                ],
            }),
            (0, r.jsxs)(aO.Ay, {
                children: [
                    (0, r.jsx)(aO.Ay.Icon, { icon: i9.U, tooltip: "Messages" }),
                    (0, r.jsx)(aO.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(n_, {
                children: (0, r.jsx)(nE, { name: "Unique Rendered Main Messages", children: Object.keys(aX.t).length }),
            }),
            (0, r.jsx)("div", {
                style: { margin: 16 },
                children: (0, r.jsx)(p.k, {
                    onChange: function (e) {
                        a(e);
                    },
                    name: "Message name",
                    placeholder: "Find a message",
                }),
            }),
            (0, r.jsxs)(n_, {
                children: [
                    (0, r.jsx)(nE, { name: "Hashed key", children: n }),
                    (0, r.jsx)(nE, { name: "Exists?", children: null != l ? "yes" : "no" }),
                ],
            }),
            (0, r.jsx)(aw.A, { data: l?.(e) }),
        ],
    });
}
var rt = a(434404);
function ra() {
    let { node: e } = (0, W.Ay)(rt.F, "");
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)($.A, { node: e }, e.key),
        }),
    });
}
var rn = a(663066),
    rl = a(80556),
    rs = a(907135),
    ri = a(665095),
    rr = a(87404);
function ro() {
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)("div", {
            className: sd.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: sd.uW,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Verification Layer" }),
                        (0, r.jsx)("div", {
                            className: sd.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: () => {
                                    (0, rn.B8)(() => (0, r.jsx)(ri.A, {}), { layerKey: rr._s, Layer: rl.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: sd.uW,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Safety Flow" }),
                        (0, r.jsx)("div", {
                            className: sd.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: () => {
                                    (0, rn.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, r.jsx)(rs.A, { onClose: t });
                                        },
                                        { layerKey: rr._s, Layer: rl.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: sd.uW,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Layer Controls" }),
                        (0, r.jsx)("div", {
                            className: sd.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: () => {
                                    rn.xr.setState({ fullScreenLayers: [] });
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
var rd = a(687813),
    rc = a(604121);
let ru = {
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
function rm(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let n = new Uint8Array(e);
                    rd.$1(n, (e, n) => {
                        null != e && a(e);
                        let l = Object.keys(n).reduce((e, t) => ({ ...e, [t]: JSON.parse(rd.he(n[t])) }), {}),
                            s = l["manifest.json"];
                        t(l[`animations/${s.animations[0].id}.json`]);
                    });
                }),
        );
}
function rh() {
    let [e, t] = o.useState(void 0),
        [a, n] = o.useState(400),
        [l, s] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)(R.B, {
            gap: 24,
            children: [
                (0, r.jsx)(t1.Z, {
                    options: Object.keys(ru).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)(R.B, {
                    gap: 8,
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(p.k, { value: a.toString(), onChange: (e) => n(Number(e)), label: "Width" }),
                        (0, r.jsx)(p.k, { value: l.toString(), onChange: (e) => s(Number(e)), label: "Height" }),
                    ],
                }),
                (0, r.jsx)(h.$, {
                    size: "sm",
                    disabled: null == e,
                    onClick: async () => {
                        if (null == e) return;
                        let t = ru[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(rm).then(eG().cloneDeep)
                                            : await t().then((e) => eG().cloneDeep(e.default)),
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
                            rc.a,
                            {
                                importData: () => {
                                    let t = ru[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(rm).then(eG().cloneDeep)
                                        : t().then((e) => eG().cloneDeep(e.default));
                                },
                            },
                            e,
                        ),
                    }),
            ],
        }),
    });
}
var rx = a(442433),
    rp = a(395671);
let rg = {
        ClipsContextMenu: async () => {
            let { default: e } = await a.e("40638").then(a.bind(a, 562733));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await a.e("32986").then(a.bind(a, 728033)),
                t = new rp.kJ({
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
            return () => (0, r.jsx)(e, { application: t, channelId: "987654321", onClose: rx.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("9004"), a.e("19690"), a.e("45322"), a.e("10758")]).then(
                    a.bind(a, 455557),
                ),
                t = Object.values(aY.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("28149"),
                    a.e("25201"),
                    a.e("91079"),
                    a.e("75702"),
                    a.e("95457"),
                    a.e("61"),
                    a.e("65744"),
                    a.e("59167"),
                    a.e("87845"),
                    a.e("45317"),
                    a.e("12616"),
                    a.e("45970"),
                    a.e("26846"),
                    a.e("14433"),
                    a.e("28808"),
                    a.e("54672"),
                    a.e("36592"),
                    a.e("96768"),
                    a.e("80186"),
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
                    a.e("22547"),
                    a.e("61058"),
                    a.e("50342"),
                    a.e("33097"),
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
                    a.e("81202"),
                    a.e("71719"),
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
                    a.e("69178"),
                    a.e("86692"),
                    a.e("52695"),
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
                    a.e("94529"),
                    a.e("50276"),
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
                t = Object.values(aY.A.getGuilds())[0];
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
            return (t) => (0, r.jsx)(e, { ...t, onClose: rx.Z_ });
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
                        console.log("Leave role clicked"), (0, rx.Z_)();
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await Promise.all([a.e("86456"), a.e("89346")]).then(a.bind(a, 949881)),
                { ContentInventoryEntryType: t } = await Promise.resolve().then(a.bind(a, 681154)),
                { ContentInventoryAuthorType: n } = await Promise.resolve().then(a.bind(a, 6161)),
                l = H.default.getCurrentUser(),
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
                    a.e("75702"),
                    a.e("59167"),
                    a.e("11810"),
                    a.e("14656"),
                ]).then(a.bind(a, 892921)),
                t = Object.values(aY.A.getGuilds())[0];
            return null == t
                ? () => null
                : (a) =>
                      (0, r.jsx)(e, {
                          ...a,
                          addFormField: (e) => {
                              console.log("Add form field:", e), (0, rx.Z_)();
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
                t = aY.A.getGuilds(),
                n = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(ad.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = ad.A.getAllThreadsForParent(t.id);
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
                t = Object.values(aY.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rx.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("28808"), a.e("71719"), a.e("14878"), a.e("66016")]).then(
                    a.bind(a, 316173),
                ),
                t = Object.values(aY.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rx.Z_ });
        },
    },
    rv = {
        GuildShopSortOptions: o.lazy(async () => {
            let { default: e } = await Promise.all([a.e("83518"), a.e("55197"), a.e("50974")]).then(a.bind(a, 324269)),
                { default: t } = await a.e("55197").then(a.bind(a, 558060));
            return { default: () => (0, r.jsx)(t, { defaultSortOption: void 0, children: (0, r.jsx)(e, {}) }) };
        }),
    };
function rj() {
    let e = o.useMemo(
            () =>
                Object.keys(rg)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = o.useMemo(
            () =>
                Object.keys(rv)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(
            (e) => {
                null != a && (0, rx.L3)(e, rg[a]);
            },
            [a],
        ),
        c = null != l ? rv[l] : null;
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)(R.B, {
            className: sd.l$,
            gap: 16,
            children: [
                (0, r.jsxs)(R.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(D.E, { variant: "eyebrow", children: "Context Menus" }),
                        (0, r.jsx)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a menu and click Open to trigger it as a context menu at the button position.",
                        }),
                    ],
                }),
                (0, r.jsxs)(R.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(t1.Z, {
                            label: "Open a Context Menu",
                            placeholder: "Select a menu",
                            options: e,
                            value: a,
                            onSelectionChange: n,
                            selectionMode: "single",
                        }),
                        (0, r.jsx)(h.$, { variant: "primary", text: "Open", disabled: null == a, onClick: i }),
                    ],
                }),
                (0, r.jsxs)(R.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(D.E, { variant: "eyebrow", children: "Popout Menus" }),
                        (0, r.jsx)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a popout menu to render it. Click the rendered button to open the popout.",
                        }),
                    ],
                }),
                (0, r.jsx)(R.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: (0, r.jsx)(t1.Z, {
                        label: "Render a Popout Menu",
                        placeholder: "Select a popout",
                        options: t,
                        value: l,
                        onSelectionChange: s,
                        selectionMode: "single",
                    }),
                }),
                null != c &&
                    (0, r.jsx)(o.Suspense, {
                        fallback: (0, r.jsx)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "Loading...",
                        }),
                        children: (0, r.jsx)(c, {}),
                    }),
            ],
        }),
    });
}
var rb = a(253506),
    rf = a(665260),
    ry = a(97808),
    rC = a(778712),
    r_ = a(308528),
    rE = a(571694),
    rS = a(704844),
    rN = a(567761),
    rA = a(716371),
    rk = a(825801);
function rI() {
    let e = (0, M.yK)([rN.default], () => rN.default.getSortedChannels()[1]),
        [t, a] = o.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: n, options: l } = (0, M.cf)([ad.A, H.default, ac.A], () => ({
            selectedChannel: ad.A.getChannel(t),
            options: e.map((e) => {
                let t = ad.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, ao.m1)(t, H.default, ac.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, r.jsx)(ry.eu, { src: (0, rE.Y)(t), "aria-hidden": !0, size: rC._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        s = o.useCallback(() => {
            if (null == n || !n.isPrivate()) return;
            let e = (0, rf.PQ)(n.recipientFlags ?? 0, rb.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            rS.A.updatePrivateChannelRecipientFlags(n.id, e);
        }, [n]),
        i = !!n?.isPrivate() && (0, rf.Lt)(n.recipientFlags ?? 0, rb.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: rk.gs,
        children: [
            (0, r.jsx)(t1.Z, {
                label: "In-Game NUX Message for DMs",
                selectionMode: "single",
                options: l,
                placeholder: "Select DM",
                value: t,
                onSelectionChange: a,
            }),
            (0, r.jsx)(h.$, {
                variant: "primary",
                size: "sm",
                text: i ? "Clear NUX Flag" : "Set NUX Flag",
                onClick: s,
                disabled: null == t,
            }),
        ],
    });
}
function rD() {
    let e = o.useCallback(() => {
        r_.A.openPrivateChannel({ recipientIds: [rA.K] });
    }, []);
    return (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function rT() {
    let e = (0, M.bG)([aR.Ay], () => aR.Ay.allByCategory(aR.xW.MESSAGING), [], M.My).map((e) => {
        let [t, a, { label: n }] = e;
        return (0, r.jsx)(v.d, { label: n, description: t, checked: a, onChange: (e) => sb(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: k()(tT.nd, rk.nd),
        children: [
            e,
            (0, r.jsx)("div", { className: rk.yF }),
            (0, r.jsx)(rI, {}),
            (0, r.jsx)("div", { className: rk.yF }),
            (0, r.jsx)(rD, {}),
        ],
    });
}
var rR = a(459838),
    rO = a(772707),
    rw = a(150934),
    rM = a(598653),
    rL = a(166403),
    rP = a(625494),
    rU = a(204925);
let rG = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e("29232").then(a.bind(a, 180275));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: aX.intl.string(aX.t.ZLRYGU),
                confirmButtonText: aX.intl.string(aX.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e("19840").then(a.bind(a, 79779));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: aX.intl.string(aX.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: aX.intl.string(aX.t["13ofGu"]),
                impression: { impressionName: s$.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await Promise.all([a.e("54398"), a.e("34260"), a.e("18467")]).then(a.bind(a, 297102));
        return (t) => (0, r.jsx)(e, { ...t, entryPoint: a4.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e("25226"), a.e("82758"), a.e("80022"), a.e("10136")]).then(
            a.bind(a, 776971),
        );
        return (t) => (0, r.jsx)(e, { ...t, source: rU.w_.NSFW_SERVER });
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
            a.e("32757"),
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
        let { default: e } = await Promise.all([a.e("96768"), a.e("4782"), a.e("89545"), a.e("11493")]).then(
            a.bind(a, 914724),
        );
        return (t) => (0, r.jsx)(e, { error: null, working: !1, validPhone: !1, ...t });
    },
    VoiceSettingsModal: async () => {
        let { default: e } = await a.e("96531").then(a.bind(a, 880510));
        return (t) => (0, r.jsx)(e, { ...t, mediaEngineContext: rR.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, r.jsx)(rO.k, {
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
                (t.default.getDevicesForPlatform = (e) => (e === J.fg2.PLAYSTATION ? s : n.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== J.fg2.PLAYSTATION && i.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === J.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
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
                    (0, r.jsx)(e, { ...a, channel: l, platform: J.fg2.PLAYSTATION })
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
            a.e("28952"),
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
                                (0, r.jsx)(rw.S, {
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
                                (0, r.jsx)(rw.S, {
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
        let { default: e } = await Promise.all([a.e("14433"), a.e("46313")]).then(a.bind(a, 336496));
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
        let e = H.default.getUser("12345"),
            t = H.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("31385")]).then(a.bind(a, 58144));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = H.default.getUser("12345"),
            t = H.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("84811")]).then(a.bind(a, 389094));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = H.default.getUser("12345"),
            t = H.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("17219")]).then(a.bind(a, 187278));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = H.default.getUser("12345"),
            t = H.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("43139")]).then(a.bind(a, 179950));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([
            a.e("96768"),
            a.e("30244"),
            a.e("98189"),
            a.e("48370"),
            a.e("72875"),
        ]).then(a.bind(a, 320742));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await Promise.all([a.e("44616"), a.e("85579")]).then(a.bind(a, 785606)),
            t = rL.A.getPremiumGroupSubscription();
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
            t = Object.keys(aY.A.getGuilds())[0];
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
            t = Object.values(aY.A.getGuilds())[0];
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await Promise.all([a.e("53684"), a.e("27917"), a.e("73152"), a.e("25281")]).then(
            a.bind(a, 516259),
        );
        return (t) => (0, r.jsx)(e, { ...t });
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([
            a.e("53684"),
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
            a.e("32757"),
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
function rF() {
    let e = o.useMemo(
            () =>
                Object.keys(rG)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)("div", {
            className: sd.l$,
            children: [
                (0, r.jsx)("section", {
                    className: sd.uW,
                    children: (0, r.jsxs)(R.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(t1.Z, {
                                label: "Open a Modal",
                                placeholder: "Select a modal",
                                options: e,
                                value: t,
                                onSelectionChange: a,
                                selectionMode: "single",
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open",
                                disabled: null == t,
                                onClick: () => null != t && (0, eR.openModalLazy)(rG[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: sd.uW,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: sd.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, rM.o)(!0), rP._.dispatch(J.jej.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var rB = a(933832),
    rV = a(472229),
    r$ = a(694080),
    rW = a(669316),
    rz = a(354670),
    rH = a(428262);
let rK = async () => {
        try {
            let { body: e } = await nH.Bo.get({ url: J.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
            return e;
        } catch (e) {
            return [];
        }
    },
    rY = async (e, t) => {
        try {
            await nH.Bo.post({ url: J.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, r$._D)();
        }
    },
    rq = async (e, t) => {
        try {
            await nH.Bo.del({ url: J.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, r$._D)();
        }
    },
    rJ = async () => {
        try {
            let { body: e } = await nH.Bo.get({ url: J.Rsh.USER_OFFERS, rejectWithError: !0 });
            return { trial: e.trial, discount: e.discount.map(rW.A.createFromServer) };
        } catch (e) {
            return { trial: [], discount: [] };
        }
    },
    rQ = async () => {
        try {
            await nH.Bo.del({ url: J.Rsh.USER_OFFERS, rejectWithError: !0 });
        } catch {
        } finally {
            await rz.A.forceReset(), await (0, r$._D)();
        }
    },
    rX = async (e) => {
        await nH.Bo.post({ url: J.Rsh.CREATE_REVERSE_TRIAL, body: { ends_at: e }, rejectWithError: !0 });
    };
function rZ(e) {
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
        C = null != p && new Date(p).getTime() < Date.now(),
        _ = j?.sku_id === sa.pe.TIER_0,
        E = async () => {
            u(!0), y ? await S({ expiresAt: null }) : await (0, r$.u1)(t), n(), u(!1);
        },
        S = async (e) => {
            u(!0);
            try {
                await nH.Bo.patch({
                    url: J.Rsh.UPDATE_USER_OFFER(x, "trial"),
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
    let N = "Active";
    return (
        y && (N = "Acked"),
        C && (N = "Expired"),
        (0, r.jsxs)("div", {
            className: k()(sd.Nr, _ ? sd.Qf : sd.C1),
            children: [
                (0, r.jsx)("div", {
                    className: k()(sd.nM, sd.S7),
                    children: (0, r.jsx)(w.D, { variant: "heading-lg/semibold", color: "always-white", children: f }),
                }),
                (0, r.jsxs)(I.D, {
                    className: k()(sd.nM, sd.QB),
                    onClick: () => {
                        (0, nu.C)(x, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(D.E, { variant: "eyebrow", color: "always-white", children: ["Offer: ", x] }),
                        l
                            ? (0, r.jsx)(rB.A, { size: "md", color: "currentColor", className: sd.Kk })
                            : (0, r.jsx)(nn.T, { size: "xs", color: "currentColor", className: sd.Kk }),
                    ],
                }),
                (0, r.jsxs)(I.D, {
                    className: k()(sd.nM, sd.QB),
                    onClick: () => {
                        (0, nu.C)(v, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(D.E, { variant: "eyebrow", color: "always-white", children: ["Trial: ", v] }),
                        i
                            ? (0, r.jsx)(rB.A, { size: "md", color: "currentColor", className: sd.Kk })
                            : (0, r.jsx)(nn.T, { size: "xs", color: "currentColor", className: sd.Kk }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: sd.nM,
                    children: (0, r.jsxs)(D.E, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, rH.re)({
                                intervalType: j?.interval ?? sa.WT.MONTH,
                                intervalCount: j?.interval_count ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: sd.nM,
                    children: [
                        (0, r.jsxs)(D.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, rV.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nm.Xm)(p),
                            onChange: (e) => {
                                S({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sd.nM,
                    children: [
                        (0, r.jsx)(D.E, { variant: "eyebrow", color: "always-white", children: "Referrer ID:" }),
                        (0, r.jsx)("input", {
                            type: "text",
                            value: b?.id ?? "",
                            onChange: (e) => S({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sd.fC,
                    children: [
                        (0, r.jsx)(I.D, {
                            onClick: E,
                            className: k()(sd.qS, sd.vk, { [sd.R1]: y, [sd._7]: C }),
                            children: (0, r.jsx)(D.E, {
                                variant: "eyebrow",
                                color: "Acked" === N ? void 0 : "always-white",
                                children: N,
                            }),
                        }),
                        null != g &&
                            (0, r.jsx)("div", {
                                className: k()(sd.qS, sd.k3),
                                children: (0, r.jsx)(D.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Redeemed",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(I.D, {
                    onClick: async () => {
                        u(!0), await rq(x, "trial"), n(), u(!1);
                    },
                    children: (0, r.jsx)(ni.u, { size: "md", color: "currentColor", className: k()(sd.Kk, sd.IT) }),
                }),
                (0, r.jsx)("div", { className: k()(sd.g4, { [sd.VP]: c || m }), children: (0, r.jsx)(e8.y, {}) }),
            ],
        })
    );
}
function r0(e) {
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
        C = async () => {
            u(!0), b ? await _({ expiresAt: null }) : await (0, r$.u1)(void 0, t), n(), u(!1);
        },
        _ = async (e) => {
            let { expiresAt: t } = e;
            u(!0);
            try {
                await nH.Bo.patch({
                    url: J.Rsh.UPDATE_USER_OFFER(x, "discount"),
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
            className: k()(sd.Nr, sd.id),
            children: [
                (0, r.jsx)("div", {
                    className: k()(sd.nM, sd.S7),
                    children: (0, r.jsx)(w.D, { variant: "heading-lg/semibold", color: "text-default", children: j }),
                }),
                (0, r.jsxs)(I.D, {
                    className: k()(sd.nM, sd.QB),
                    onClick: () => {
                        (0, nu.C)(x, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(D.E, { variant: "eyebrow", color: "text-default", children: ["Offer: ", x] }),
                        l
                            ? (0, r.jsx)(rB.A, { size: "md", color: "currentColor", className: k()(sd.Kk, sd.mK) })
                            : (0, r.jsx)(nn.T, { size: "xs", color: "currentColor", className: sd.Kk }),
                    ],
                }),
                (0, r.jsxs)(I.D, {
                    className: k()(sd.nM, sd.QB),
                    onClick: () => {
                        (0, nu.C)(g, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(D.E, { variant: "eyebrow", color: "text-default", children: ["Discount: ", g] }),
                        i
                            ? (0, r.jsx)(rB.A, { size: "md", color: "currentColor", className: k()(sd.Kk, sd.mK) })
                            : (0, r.jsx)(nn.T, { size: "xs", color: "currentColor", className: sd.Kk }),
                    ],
                }),
                v?.amount != null &&
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)(D.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [v.amount, "% off"],
                        }),
                    }),
                (0, r.jsxs)("div", {
                    className: sd.nM,
                    children: [
                        (0, r.jsxs)(D.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, rV.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nm.Xm)(p?.toISOString()),
                            onChange: (e) =>
                                _({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sd.fC,
                    children: [
                        (0, r.jsx)(I.D, {
                            onClick: C,
                            className: k()(sd.qS, sd.vk, { [sd.R1]: b, [sd._7]: f }),
                            children: (0, r.jsx)(D.E, {
                                variant: "eyebrow",
                                color: "Acked" === E ? void 0 : "always-white",
                                children: E,
                            }),
                        }),
                        y &&
                            (0, r.jsx)("div", {
                                className: k()(sd.qS, sd.k3),
                                children: (0, r.jsx)(D.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(I.D, {
                    className: sd.aR,
                    onClick: async () => {
                        u(!0), await rq(x, "discount"), n(), u(!1);
                    },
                    children: (0, r.jsx)(ni.u, { size: "md", color: "currentColor", className: k()(sd.Kk, sd.fy) }),
                }),
                (0, r.jsx)("div", { className: k()(sd.g4, { [sd.VP]: c || m }), children: (0, r.jsx)(e8.y, {}) }),
            ],
        })
    );
}
function r1() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState([]),
        [l, s] = o.useState(),
        [i, c] = o.useState(),
        [u, m] = o.useState([]),
        [p, g] = o.useState([]),
        [v, j] = o.useState(!0),
        [b, f] = o.useState(10080),
        [y, C] = o.useState([]),
        { entitlements: _, deleteFractionalPremium: E, refreshEntitlementList: S } = sr();
    o.useEffect(() => {
        S();
    }, [S]),
        o.useEffect(() => {
            C(_.filter((e) => e.sourceType === J.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [_]),
        o.useEffect(() => {
            (0 === e.length || 0 === a.length || v) &&
                rK().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        r = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    t(a), n(r), null == l && s(a[0].value), null == i && c(r[0].value);
                });
        }, [e, a, l, i, v]),
        o.useEffect(() => {
            v &&
                (j(!1),
                rz.A.forceReset(),
                (0, r$._D)(),
                rJ().then((e) => {
                    m(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        g(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [v]);
    let N = async () => {
            null != l && (await rY(l, "trial"), j(!0));
        },
        A = async () => {
            null != i && (await rY(i, "discount"), j(!0));
        },
        k = async () => {
            await rQ(), j(!0);
        },
        I = async () => {
            let e = new Date(Date.now() + 60 * b * 1e3).toISOString();
            await rX(e), S();
        };
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)("div", {
            className: sd.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: sd.uW,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Utils" }),
                        (0, r.jsxs)("div", {
                            className: sd.Uo,
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear all User Offers",
                                    onClick: k,
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Mobile Trials DismissibleContent",
                                    onClick: () => (0, lv.xB)(t7.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, lv._N)(t7.M.NAGBAR_NOTICE_OFFER_EXPIRING),
                                }),
                                (0, r.jsx)(h.$, {
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
                    className: sd.uW,
                    children: (0, r.jsxs)("div", {
                        className: sd.bd,
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
                            (0, r.jsx)(h.$, { variant: "primary", text: "Create", onClick: N }),
                        ],
                    }),
                }),
                (0, r.jsx)("section", {
                    className: sd.uW,
                    children: (0, r.jsxs)("div", {
                        className: sd.bd,
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
                                onSelectionChange: c,
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(h.$, { variant: "primary", text: "Create", onClick: A }),
                        ],
                    }),
                }),
                u.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: sd.uW,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Existing Trial Offers" }),
                            u.map((t) =>
                                (0, r.jsx)(rZ, { offer: t, offerOptions: e, forceRefetch: () => j(!0) }, t.id),
                            ),
                        ],
                    }),
                p.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: sd.uW,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Existing Discount Offers" }),
                            p.map((e) =>
                                (0, r.jsx)(r0, { offer: e, offerOptions: a, forceRefetch: () => j(!0) }, e.id),
                            ),
                        ],
                    }),
                (0, r.jsx)("section", {
                    className: sd.uW,
                    children: (0, r.jsxs)("div", {
                        className: sd.bd,
                        children: [
                            (0, r.jsx)(x.l, {
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
                            (0, r.jsx)(h.$, { variant: "primary", text: "Create", onClick: I }),
                        ],
                    }),
                }),
                y.length > 0 &&
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(D.E, {
                                style: { marginTop: "15px" },
                                variant: "text-md/bold",
                                children: "Active reverse trial",
                            }),
                            (0, r.jsx)("div", {
                                children: y.map((e) =>
                                    (0, r.jsx)(su, { entitlement: e, active: !0, onDelete: () => E(e.id) }, e.id),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var r2 = a(528265),
    r8 = a(26279),
    r6 = a(142798);
let r3 = {
        [r8.Re.UNSPECIFIED]: "Unspecified",
        [r8.Re.DRAFT]: "Draft",
        [r8.Re.SIGNED]: "Signed",
        [r8.Re.DISCARDED]: "Discarded",
        [r8.Re.SIGNING_IN_PROGRESS]: "Signing In Progress",
    },
    r5 = { [r8.BM.UNSPECIFIED]: "Unspecified", [r8.BM.ONE_TIME]: "One Time", [r8.BM.SUBSCRIPTION]: "Subscription" };
function r4() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(!0),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            n(!0), s(null);
            try {
                let e = await nH.Bo.get({ url: `${J.Rsh.ORDER_LIST}?limit=5`, rejectWithError: !0 });
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
        (0, r.jsx)(d.Ip, {
            className: tT.nd,
            children: (0, r.jsxs)("div", {
                className: sd.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: sd.dL,
                        style: { marginBottom: "16px" },
                        children: [
                            (0, r.jsxs)(D.E, { variant: "text-lg/bold", children: ["Orders (last ", 5, ")"] }),
                            (0, r.jsx)(h.$, {
                                variant: "secondary",
                                size: "sm",
                                text: "Refresh",
                                onClick: i,
                                loading: a,
                            }),
                        ],
                    }),
                    null != l && (0, r.jsx)(T.w, { type: "critical", children: l }),
                    !a &&
                        null != e &&
                        0 === e.length &&
                        (0, r.jsx)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "No orders found.",
                        }),
                    null != e && e.map((e) => (0, r.jsx)(r9, { order: e }, e.id)),
                ],
            }),
        })
    );
}
function r9(e) {
    let { order: t } = e,
        [a, n] = o.useState(!1),
        [l, s] = o.useState(!1),
        i = r3[t.status] ?? `Unknown (${t.status})`,
        d = [
            { id: "status", label: `Status: ${i}`, isDisabled: !1 },
            { id: "created", label: `Created: ${new Date(t.created_at).toLocaleString()}`, isDisabled: !1 },
        ],
        c = o.useCallback(() => {
            navigator.clipboard.writeText(t.id), s(!0), setTimeout(() => s(!1), 2e3);
        }, [t.id]);
    return (0, r.jsxs)("div", {
        className: sd.Nr,
        children: [
            (0, r.jsxs)(R.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                style: { marginBottom: "4px" },
                children: [
                    (0, r.jsx)(D.E, { variant: "text-md/semibold", children: t.id }),
                    (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: l ? "Copied!" : "Copy ID", onClick: c }),
                ],
            }),
            (0, r.jsx)(r2.C, {
                items: d,
                label: "Order info",
                layout: "inline",
                selectionMode: "none",
                selectionBehavior: "replace",
                disabledKeys: new Set(),
            }),
            (0, r.jsxs)(R.B, {
                direction: "vertical",
                gap: 4,
                style: { marginTop: "8px" },
                children: [
                    (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Line Items" }),
                    0 === t.order_line_items.length
                        ? (0, r.jsx)(D.E, { variant: "text-xs/normal", color: "text-muted", children: "No line items" })
                        : t.order_line_items.map((e) =>
                              (0, r.jsxs)(
                                  R.B,
                                  {
                                      direction: "horizontal",
                                      gap: 12,
                                      children: [
                                          (0, r.jsxs)(D.E, {
                                              variant: "text-xs/normal",
                                              children: ["SKU: ", e.sku_id],
                                          }),
                                          (0, r.jsxs)(D.E, {
                                              variant: "text-xs/normal",
                                              children: ["Qty: ", e.quantity],
                                          }),
                                          (0, r.jsxs)(D.E, {
                                              variant: "text-xs/normal",
                                              children: [
                                                  "Type: ",
                                                  r5[e.purchase_type] ?? `Unknown (${e.purchase_type})`,
                                              ],
                                          }),
                                          null != e.subscription_plan_id &&
                                              (0, r.jsxs)(D.E, {
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
                    className: r6.VK,
                    style: { marginTop: "8px" },
                    children: [
                        (0, r.jsxs)(I.D, {
                            onClick: () => n((e) => !e),
                            className: r6.Eh,
                            children: [
                                (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Billing Facet" }),
                                (0, r.jsx)(se.A, { direction: a ? se.A.Directions.UP : se.A.Directions.DOWN }),
                            ],
                        }),
                        a &&
                            (0, r.jsxs)("ul", {
                                className: r6.j3,
                                children: [
                                    (0, r.jsxs)("li", {
                                        children: [
                                            (0, r.jsx)(D.E, {
                                                variant: "text-xs/semibold",
                                                children: "payment_gateway",
                                            }),
                                            (0, r.jsx)(D.E, {
                                                variant: "text-xs/normal",
                                                children: String(t.billing_facet.payment_gateway),
                                            }),
                                        ],
                                    }),
                                    null != t.billing_facet.payment_source_id &&
                                        (0, r.jsxs)("li", {
                                            children: [
                                                (0, r.jsx)(D.E, {
                                                    variant: "text-xs/semibold",
                                                    children: "payment_source_id",
                                                }),
                                                (0, r.jsx)(D.E, {
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
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "currency",
                                                        }),
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.currency,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "subtotal",
                                                        }),
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.subtotal,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "tax",
                                                        }),
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.tax,
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("li", {
                                                    children: [
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-xs/semibold",
                                                            children: "total",
                                                        }),
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-xs/normal",
                                                            children: t.billing_facet.invoice_preview.total,
                                                        }),
                                                    ],
                                                }),
                                                t.billing_facet.invoice_preview.line_items.length > 0 &&
                                                    (0, r.jsxs)("li", {
                                                        children: [
                                                            (0, r.jsx)(D.E, {
                                                                variant: "text-xs/semibold",
                                                                children: "invoice line items",
                                                            }),
                                                            (0, r.jsx)(R.B, {
                                                                direction: "vertical",
                                                                gap: 4,
                                                                style: { marginTop: "4px" },
                                                                children:
                                                                    t.billing_facet.invoice_preview.line_items.map(
                                                                        (e) =>
                                                                            (0, r.jsxs)(
                                                                                R.B,
                                                                                {
                                                                                    direction: "horizontal",
                                                                                    gap: 12,
                                                                                    children: [
                                                                                        (0, r.jsxs)(D.E, {
                                                                                            variant: "text-xs/normal",
                                                                                            children: [
                                                                                                "ref: ",
                                                                                                e.ref_order_line_item_id,
                                                                                            ],
                                                                                        }),
                                                                                        (0, r.jsxs)(D.E, {
                                                                                            variant: "text-xs/normal",
                                                                                            children: [
                                                                                                "unit: ",
                                                                                                e.unit_price,
                                                                                            ],
                                                                                        }),
                                                                                        (0, r.jsxs)(D.E, {
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
var r7 = a(935462),
    oe = a(260598),
    ot = a(93688),
    oa = a(717400),
    on = a(676955),
    ol = a(31300),
    os = a(500060),
    oi = a(391973),
    or = a(684013),
    oo = a(765671),
    od = a(235986),
    oc = a(742589),
    ou = a(41984),
    om = a(181435),
    oh = a(435736),
    ox = a(296027),
    op = a(515183),
    og = a(489277),
    ov = a(127242),
    oj = a(869014),
    ob = a(528772),
    of = a(38502),
    oy = a(532624),
    oC = a(773371),
    o_ = a(996439),
    oE = a(350535),
    oS = a(9302),
    oN = a(644434),
    oA = a(618137);
let ok = {
        [J.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: J.uss.CLICK_ZONE_DEBUG,
            id: (0, ej.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...of.A.getWidgetDefaultSettings(J.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [J.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: J.uss.PERFORMANCE_DEBUG,
            id: (0, ej.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...of.A.getWidgetDefaultSettings(J.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    oI = {};
function oD(e) {
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
        (0, r.jsxs)(na.$n, {
            look: na.$n.Looks.LINK,
            color: na.$n.Colors.LINK,
            size: na.$n.Sizes.MIN,
            onClick: function () {
                (0, nu.C)(t, () => n(!0));
            },
            className: oA.DT,
            children: ["Application Id: ", t, " ", a ? aX.intl.string(aX.t.t5VZ88) : null],
        })
    );
}
let oT = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, M.bG)([j.Ay], () => j.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            n = (0, M.bG)([aJ.A], () => aJ.A.getGameForPID(t.pid)),
            l = (0, M.bG)([j.Ay], () => (null == a ? null : j.Ay.getGameOverlayStatus(a)));
        return (0, r.jsxs)("div", {
            className: oA.st,
            children: [
                (0, r.jsx)(D.E, { variant: "text-md/bold", color: "text-strong", children: t.gameName }),
                (0, r.jsx)(D.E, { variant: "text-sm/bold", color: "text-subtle", children: t.pid }),
                (0, r.jsx)(D.E, { variant: "text-sm/normal", color: "text-subtle", children: a?.exeName }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["isLauncher: ", a?.isLauncher ? "Yes" : "No"],
                }),
                null != t.applicationId &&
                    (0, r.jsx)(D.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: (0, r.jsx)(oD, { id: t.applicationId }),
                    }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, op.wR)(t.fullscreenType)],
                }),
                (0, r.jsxs)(D.E, { variant: "text-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, r.jsxs)("div", {
                    className: oA.st,
                    children: [
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["source: ", t.source],
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["overlayMethod: ", (0, op.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != l &&
                    (0, r.jsxs)("div", {
                        className: oA.st,
                        children: [
                            (0, r.jsxs)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", l.source],
                            }),
                            (0, r.jsxs)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", l.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", l.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, op.gK)(l.overlayMethod)],
                            }),
                        ],
                    }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hidden: ", a?.hidden ? "Yes" : "No"],
                }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hook: ", n?.hook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", n?.overlay ? "Yes" : "No"],
                }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlayCompatibilityHook: ", n?.overlayCompatibilityHook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["supportsOutOfProcessOverlay: ", n?.supportsOutOfProcessOverlay ? "Yes" : "No"],
                }),
            ],
        });
    }),
    oR = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, M.cf)([oC.default], () => oC.default.getOverlayPIDStatuses()),
            n = (0, M.cf)([ox.default], () => ox.default.getTrackedGames()),
            l = (0, M.bG)([oC.default], () => oC.default.isInputLocked(t), [t]),
            s = (0, M.bG)([oC.default], () => oC.default.DEV_isInputLockedV3(t), [t]),
            i = (0, M.bG)([oC.default], () => oC.default.DEV_isInputLocked(t), [t]),
            o = (0, M.bG)([oC.default], () => oC.default.isReady(t), [t]);
        return (0, r.jsxs)("div", {
            className: oA.st,
            children: [
                (0, r.jsx)(D.E, { variant: "text-md/semibold", color: "text-strong", children: `${t}` }),
                (0, r.jsxs)(D.E, {
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
                (0, r.jsxs)(D.E, {
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
                (0, r.jsxs)(D.E, {
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
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["Bridge Status: ", a.get(Number(t))],
                }),
                (0, r.jsxs)(D.E, { variant: "text-sm/normal", color: "text-strong", children: ["isInputLocked: ", l] }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV3: ", s],
                }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV2: ", i],
                }),
                (0, r.jsxs)(D.E, { variant: "text-sm/normal", color: "text-strong", children: ["isReady: ", o] }),
            ],
        });
    });
function oO(e) {
    let t,
        a = ((t = Object.values((0, M.yK)([of.A], () => of.A.getWidgetsForLayout(oN.G)))), t.find((t) => t.type === e));
    return [
        a,
        () => {
            if (null != a) (0, oi.uv)(a.id);
            else {
                let t = ok[e];
                if (null == t) return;
                let a = t(oN.G);
                (0, oi.jn)(a);
            }
        },
    ];
}
function ow(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, nm.i$)(nt()(e), "h:mm:ss.SSS");
}
let oM = o.memo(function (e) {
    let { pid: t, ...a } = e,
        n = (0, M.bG)([ox.default], () => {
            if (null == t) return "Unknown";
            let e = ox.default.getTrackedGameByPid(t)?.gameName;
            return null != e ? ((oI[t] = e), e) : (oI[t] ?? "Unknown");
        }, [t]);
    return (0, r.jsx)(D.E, { ...a, variant: "text-md/semibold", color: "text-strong", children: n });
});
function oL() {
    let e = (0, M.bG)([ov.A], () => ov.A.hasRenderDebugMode(ou.x7.TrackFocusPIDs)),
        t = (0, M.yK)([ox.default], () => ox.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, r.jsxs)("div", {
        className: oA.st,
        children: [
            (0, r.jsxs)("div", {
                className: oA.Iv,
                children: [
                    (0, r.jsx)(v.d, {
                        checked: e,
                        onChange: () =>
                            void or.A.setRenderDebugMode(
                                !ov.A.hasRenderDebugMode(ou.x7.TrackFocusPIDs),
                                ou.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, r.jsx)(I.D, {
                        className: oA.LL,
                        onClick: () => or.A.clearTrackedPids(),
                        children: (0, r.jsx)(ni.u, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(d.Ip, {
                className: k()(oA.st, oA.XG),
                children: [
                    0 === t.length &&
                        (0, r.jsx)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, a, n] = e;
                        return (0, r.jsx)(
                            o.Fragment,
                            {
                                children: (0, r.jsx)(lU.m, {
                                    position: "left",
                                    text: n === ou.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(D.E, {
                                            variant: "text-sm/medium",
                                            color: n === ou.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, r.jsx)(oM, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                ow(t),
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
let oP = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, M.bG)([ox.default, j.Ay], () => {
                if (null == t) return null;
                let e = ox.default.getTrackedGameByPid(t)?.fullscreenType;
                if (null != e) return e;
                let a = j.Ay.getGameOrTransformedSubgameForPID(t);
                return a?.fullscreenType ?? lk.aI.UNKNOWN;
            }, [t]);
        return (0, r.jsxs)(D.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, op.wR)(a) : "Unknown"],
        });
    }),
    oU = o.memo(function () {
        let e = (0, M.cf)([ox.default], () => ox.default.getTrackedGames()),
            [t, a] = o.useState({}),
            n = o.useRef(null);
        return (
            o.useEffect(
                () => (
                    (n.current = setInterval(async () => {
                        let e = j.Ay.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, op.E1)(a.pid, 0).then((e) => [a.pid, e, n]));
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
                    }, +nY.A.Millis.SECOND)),
                    () => clearInterval(n.current)
                ),
                [],
            ),
            (0, r.jsx)(lU.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(d.Ip, {
                        className: k()(oA.st, oA.XG),
                        children: [
                            0 === Object.keys(e).length &&
                                (0, r.jsx)(D.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: "No recent screen types",
                                }),
                            Object.values(e).map((e) =>
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, r.jsx)(oM, { tag: "div", pid: e.pid }),
                                            (0, r.jsx)(oP, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: n } = t;
                                                    return (0, r.jsx)(
                                                        D.E,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, op.wR)(a)} @ ${ow(n)}`,
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
    oG = o.memo(function () {
        let e = (0, M.cf)([ox.default], () => ox.default.getTrackedGames()),
            t = (0, oS.getPID)(),
            a = (0, M.bG)([ox.default], () => ox.default.isOverlayOOPEnabledForPid(t), [t]),
            [n, l] = (0, M.yK)([ob.A], () => [ob.A.enabled, ob.A.keepOpen]),
            s = (0, M.bG)([oC.default], () => oC.default.getFocusedPID()),
            i = (0, M.bG)([oC.default], () => oC.default.isFocusedPidOutOfProcess());
        return (0, r.jsxs)("div", {
            className: oA.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, r.jsx)(D.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, r.jsx)(oR, { pid: e.pid }, e.pid)),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["focusedPID: ", s?.toString() ?? "null"],
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isFocusedPidOutOfProcess: ", i ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["processPid: ", t?.toString() ?? "unknown"],
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isOOPEnabledForPid: ", a ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.enabled: ", n ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.keepOpen: ", l ? "Yes" : "No"],
                        }),
                    ],
                }),
            ],
        });
    }),
    oF = [
        {
            mode: ou.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: ou.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: ou.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: ou.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: ou.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: ou.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: ou.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    oB = o.memo(function () {
        let [e, t] = oO(J.uss.CLICK_ZONE_DEBUG),
            [a, n] = oO(J.uss.PERFORMANCE_DEBUG),
            l = (0, M.bG)([ov.A], () => ov.A.getRenderDebugModes()),
            [s, i] = o.useState({});
        return (
            o.useEffect(() => {
                let e = setInterval(() => {
                    i({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, r.jsx)("div", {
                className: oA.st,
                children: oF.map((s) => {
                    let i =
                            s.mode === ou.x7.OverlayRafManagerForceEnabled
                                ? `${s.label} (${oj.A.getLastRAFCallbackReason()})`
                                : s.label,
                        d = () =>
                            s.mode === ou.x7.ClickZones
                                ? null != e
                                : s.mode === ou.x7.WidgetAreas
                                  ? null != a
                                  : l.has(s.mode);
                    return (0, r.jsx)(
                        o.Fragment,
                        {
                            children: (0, r.jsx)(v.d, {
                                checked: d(),
                                onChange: () => {
                                    var e;
                                    let a = d();
                                    s.mode === ou.x7.ClickZones && t(),
                                        s.mode === ou.x7.WidgetAreas && n(),
                                        (e = s.mode),
                                        or.A.setRenderDebugMode(!a, e);
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
    oV = o.memo(function () {
        let e = (0, M.cf)([ox.default], () => ox.default.getTrackedGames()),
            t = (0, M.bG)([j.Ay], () => j.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(lU.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: oA.st,
                                children: [
                                    (0, r.jsx)(D.E, {
                                        variant: "text-md/bold",
                                        color: "text-feedback-critical",
                                        children: "Untracked Running Games",
                                    }),
                                    t.map((e) =>
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(
                                                    D.E,
                                                    {
                                                        variant: "text-sm/normal",
                                                        color: "text-feedback-critical",
                                                        children: `${e.pid} - ${e.name} (${e.exeName})`,
                                                    },
                                                    e.pid,
                                                ),
                                                (0, r.jsx)(oP, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, r.jsx)(lU.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: oA.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, r.jsx)(oT, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    o$ = o.memo(function () {
        let e = (0, M.bG)([ox.default], () => ox.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            n = [
                { label: ou.V6.UNSET, value: ou.V6.UNSET, id: ou.V6.UNSET },
                { label: ou.V6.IN_PROCESS_V2, value: ou.V6.IN_PROCESS_V2, id: ou.V6.IN_PROCESS_V2 },
                { label: ou.V6.OUT_OF_PROCESS_V3, value: ou.V6.OUT_OF_PROCESS_V3, id: ou.V6.OUT_OF_PROCESS_V3 },
                {
                    label: ou.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: ou.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: ou.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, r.jsx)(x.l, {
            label: "Override the overlay render mode",
            value: t,
            options: n,
            onSelectionChange: (e) => {
                a(e), or.A.forceRenderMode(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function oW(e) {
    let { modalProps: t, onClose: a } = e,
        [n, l] = o.useState(null);
    function s() {
        a(null);
    }
    return (0, r.jsxs)(r7.EO, {
        size: r7.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, r.jsxs)(r7.rQ, {
                align: od.A.Align.CENTER,
                justify: od.A.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(D.E, {
                        variant: "text-md/bold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, r.jsx)(r7.s_, { onClick: s }),
                ],
            }),
            (0, r.jsx)(r7.$m, {
                children: (0, r.jsx)("div", {
                    className: oA.st,
                    children: (0, r.jsx)(oe.f, { label: "Paste JSON Here", onChange: l, value: n ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(r7.jl, {
                children: (0, r.jsxs)(l1.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Import",
                            onClick: function () {
                                a(n);
                            },
                        }),
                        (0, r.jsx)(h.$, { variant: "secondary", text: "Clear", onClick: s }),
                    ],
                }),
            }),
        ],
    });
}
let oz = {
    native: { label: "Native", filter: (e) => e.type === om.ON.NativeLegacy || e.type === om.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === om.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === om.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === om.ON.OOPModule || e.type === om.ON.LegacyModule },
};
function oH(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : om.QJ.Info;
    if (t === om.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case om.ON.NativeLegacy:
            return "var(--yellow-500)";
        case om.ON.NativeOOP:
            return "var(--green-500)";
        case om.ON.Flux:
            return "var(--brand-400)";
        case om.ON.Renderer:
            return "var(--brand-500)";
        case om.ON.LegacyModule:
            return "var(--yellow-300)";
        case om.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let oK = [
    {
        key: "type",
        cellClassName: oA.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                n = oY(t);
            return (0, r.jsx)("div", {
                className: oA.g$,
                style: { color: oH(t, a) },
                children: (0, r.jsx)(n, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "name",
        cellClassName: oA.Cm,
        render(e) {
            let { name: t, type: a, logType: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(D.E, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case om.QJ.Info:
                                    return "text-strong";
                                case om.QJ.Warning:
                                    return "text-feedback-warning";
                                case om.QJ.Error:
                                    return "text-feedback-critical";
                                default:
                                    return "text-subtle";
                            }
                        })(n),
                        children: t,
                    }),
                    (0, r.jsxs)(D.E, { variant: "text-sm/normal", color: "text-subtle", children: ["(", a, ")"] }),
                ],
            });
        },
    },
    {
        key: "timestamp",
        cellClassName: oA.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, nm.i$)(nt()(t), "h:mm:ss.SSS");
        },
    },
];
function oY(e) {
    switch (e) {
        case om.ON.NativeLegacy:
            return ot.W;
        case om.ON.NativeOOP:
            return oa.q;
        case om.ON.Renderer:
        case om.ON.Flux:
            return on.v;
        case om.ON.LegacyModule:
            return ol.k;
        case om.ON.OOPModule:
            return os.o;
        default:
            return ol.k;
    }
}
function oq(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let oJ = ["__webpack_require__", "fn"],
    oQ = ["web.js", "web.js.map"],
    oX = [
        {
            id: "details",
            name: "Details",
            group: aG.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: n, type: l, logType: s, nativeId: i, stack: o, data: c, timestamp: u, pid: m } = t,
                    h = nt()(u),
                    x = oY(l);
                return (0, r.jsxs)(d.Ar, {
                    className: oA.bW,
                    children: [
                        (0, r.jsxs)(oc.A, {
                            className: k()(tT.jr, oA.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: oH(l, s) },
                                    className: oA.nr,
                                    children: (0, r.jsx)(x, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(oc.A.Title, {
                                    wrapperClassName: oA.qd,
                                    children: [
                                        n,
                                        " (",
                                        l,
                                        ")",
                                        (0, r.jsx)(I.D, {
                                            tag: "span",
                                            className: oA.KE,
                                            onClick: () => (0, nu.C)(n),
                                            children: (0, r.jsx)(nn.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(oc.A.Icon, {
                                    icon: nn.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nu.C)(oq(t));
                                    },
                                }),
                                (0, r.jsx)(oc.A.Icon, { icon: ns.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(n_, {
                            className: oA.ZK,
                            children: [
                                (0, r.jsx)(nE, {
                                    name: "Timestamp",
                                    copyValue: h.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: h.toISOString(),
                                        title: (0, nm.i$)(h, "LLLL"),
                                        children: (0, nm.i$)(h, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, r.jsx)(nE, {
                                    name: "Log Type",
                                    copyValue: s,
                                    children: (0, r.jsx)("code", { children: s }),
                                }),
                                (0, r.jsx)(nE, {
                                    name: "PID",
                                    copyValue: m?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: m?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nE, {
                                    name: "Native ID",
                                    copyValue: i?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: i?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nE, {
                                    name: "Data",
                                    copyValue: oq(c),
                                    children: (0, r.jsx)("code", { children: oq(c) }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nE, {
                                        name: "Stack Trace",
                                        copyValue: o,
                                        children: (0, r.jsx)("code", {
                                            children: o.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, n, l, s] = a,
                                                        i = n.split(/[\\/]/).pop();
                                                    return oJ.includes(e.trim())
                                                        ? null
                                                        : (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, r.jsx)("span", {
                                                                          className: oA.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !oQ.includes(i ?? "") &&
                                                                          (0, r.jsxs)(r.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, r.jsxs)("span", {
                                                                                      className: oA.lz,
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
    oZ = {
        searchType: nd.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: l } = e,
                s = [t, a, JSON.stringify(l)];
            return null != n && s.push(n), s;
        },
        throttleMs: 100,
    };
function o0() {
    let { ref: e, height: t } = (0, oo.Ay)(),
        a = (0, M.bG)([ov.A], () => ov.A.isModuleLoggingEnabled()),
        [n, l] = o.useState(a),
        [s, i] = o.useState(!1),
        [d, c] = o.useState(null),
        [u, m] = o.useState(Object.keys(oz)),
        [h, x] = (0, M.bG)([ov.A], () => ov.A.getOverlayLoggingBreadcrumbs(), [], o_.D),
        [p, g] = o.useState(null),
        v = p ?? h,
        j = null != p ? -1 : x;
    o.useEffect(() => {
        0 !== j &&
            (s
                ? c(v.reduce((e, t) => ("game_tracking_starting" === t.name ? Math.max(e, t.timestamp) : e), 0))
                : c(null));
    }, [s, v, j]);
    let [b, f] = o.useState(""),
        y = o.useMemo(
            () =>
                0 === j
                    ? []
                    : v.filter((e) => {
                          if (s && null != d && e.timestamp < d) return !1;
                          for (let t of u) {
                              let { filter: a } = oz[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [v, u, d, s, j],
        ),
        [C, _] = o.useState(y),
        [E, S] = o.useState(null),
        N = o.useMemo(() => v.find((e) => e.key === E), [v, E]),
        A = o.useCallback((e) => {
            _(e);
        }, []),
        { renderSelectedTab: T } = (0, aG.Ay)({ tabs: oX }, []);
    (0, nc.RT)(b, y, A, oZ, [v]);
    let R = o.useCallback((e) => {
            l(e), or.A.setModuleLogging(e);
        }, []),
        [O, w] = o.useState(!1),
        L = o.useRef(null),
        P = o.useCallback(() => {
            (0, nu.C)(JSON.stringify(y)), w(!0);
        }, [y]);
    o.useEffect(() => {
        if (O)
            return (
                (L.current = setTimeout(() => {
                    w(!1);
                }, 4e3)),
                () => {
                    null != L.current && clearTimeout(L.current);
                }
            );
    }, [O]);
    let U = o.useCallback((e) => {
            g(null != e ? JSON.parse(e) : null);
        }, []),
        G = o.useCallback(
            (e) => {
                if (e) return g(null);
                (0, eR.openModal)(
                    (e) =>
                        (0, r.jsx)(oW, {
                            modalProps: e,
                            onClose: (t) => {
                                U(t), e.onClose();
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    ew.SY,
                );
            },
            [U],
        );
    return (0, r.jsxs)("div", {
        ref: e,
        className: oA.rh,
        children: [
            (0, r.jsxs)("div", {
                className: oA.st,
                children: [
                    (0, r.jsxs)("div", {
                        className: k()(oA._V, oA.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: oA.iR,
                                children: (0, r.jsx)(rw.S, { label: "Poll Native", checked: n, onChange: (e) => R(e) }),
                            }),
                            (0, r.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: oA.iR,
                                children: (0, r.jsx)(rw.S, {
                                    label: "Only Active Games",
                                    checked: s,
                                    onChange: (e) => i(e),
                                }),
                            }),
                            (0, r.jsxs)(I.D, {
                                className: oA.ny,
                                onClick: P,
                                children: [
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: O ? "Copied" : "Copy All",
                                    }),
                                    O
                                        ? (0, r.jsx)(rB.A, { size: "sm", color: eO.A.unsafe_rawColors.GREEN_330.css })
                                        : (0, r.jsx)(nn.T, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(I.D, {
                                className: oA.ny,
                                onClick: () => G(null != p),
                                children: (0, r.jsx)(D.E, {
                                    variant: "text-sm/normal",
                                    color: "currentColor",
                                    children: null != p ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: k()(oA._V, oA.XQ),
                        children: Object.entries(oz).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                I.D,
                                {
                                    className: k()(oA.pb, u.includes(t) && oA.bx),
                                    onClick: () => {
                                        m((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: (0, r.jsx)(D.E, {
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
                        className: oA._V,
                        children: (0, r.jsx)(nr.I, {
                            query: b,
                            onChange: f,
                            onClear: () => f(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: k()(oA.st, oA.CZ),
                children: (0, r.jsx)(tR, {
                    columns: oK,
                    data: C,
                    selectedRowKey: E ?? void 0,
                    onClickRow: (e) => S(e.key),
                }),
            }),
            null != N &&
                (0, r.jsx)(aU, {
                    className: k()(oA.st, oA.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: T({ breadcrumb: N, onClose: () => S(null) }),
                }),
        ],
    });
}
let o1 = o.memo(function () {
        let e = (0, M.bG)([og.A], () => og.A.getPopoutInitializationStages());
        return (0, r.jsxs)("div", {
            className: oA.st,
            children: [
                (0, r.jsx)("div", {
                    className: oA.Iv,
                    children: (0, r.jsx)(D.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: "Popout Initialization Stages",
                    }),
                }),
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", { children: JSON.stringify(e, void 0, 2) }),
                }),
            ],
        });
    }),
    o2 = o.memo(function () {
        let e = (0, M.bG)([ov.A], () => ov.A.isStateDebuggingEnabled()),
            t = (0, M.bG)([ov.A], () => ov.A.getDebuggingState());
        return (
            o.useEffect(
                () => (
                    or.A.setStateDebugging(!0),
                    () => {
                        or.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, r.jsxs)("div", {
                className: oA.st,
                children: [
                    (0, r.jsx)("div", {
                        className: oA.Iv,
                        children: (0, r.jsx)(v.d, {
                            checked: e,
                            onChange: () => or.A.setStateDebugging(!e),
                            label: "Poll Native Module State",
                        }),
                    }),
                    (0, r.jsx)(D.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: (0, r.jsx)("pre", { children: JSON.stringify(t, void 0, 2) }),
                    }),
                ],
            })
        );
    });
function o8() {
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsxs)("div", {
            className: k()(tT.nd, oA.rf),
            children: [
                (0, r.jsx)(oB, {}),
                (0, r.jsx)(o$, {}),
                (0, r.jsx)(oV, {}),
                (0, r.jsx)(oG, {}),
                (0, r.jsx)(oL, {}),
                (0, r.jsx)(oU, {}),
                (0, r.jsx)(o1, {}),
                (0, r.jsx)(o2, {}),
            ],
        }),
    });
}
let o6 = (e) => {
        switch (e) {
            case "Disabled":
                return;
            case "False":
                return !1;
            case "True":
                return !0;
        }
    },
    o3 = (e) => (null == e ? "Disabled" : e ? "True" : "False"),
    o5 = o.memo(function () {
        let e = (0, oh.wW)(),
            t = (0, M.bG)([oy.Ay], () => oy.Ay.getOverlayKeybind());
        return (0, r.jsxs)("div", {
            className: oA.st,
            children: [
                (0, r.jsx)(w.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
                (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Experiment State" }),
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", {
                        children: JSON.stringify({ ...e, overlayKeybind: (0, oE.dI)(t.shortcut) }, void 0, 2),
                    }),
                }),
                (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Overrides" }),
                (0, r.jsx)(x.l, {
                    label: "Overlay User Status",
                    description: "Override whether the current user was a new or existing user",
                    value: o3(e.overrideIsNewOverlayUser),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Existing user", value: "False", id: "False" },
                        { label: "New user", value: "True", id: "True" },
                    ],
                    onSelectionChange: (e) => {
                        (0, oh.sw)(o6(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(x.l, {
                    label: "Override Previous Keybind Status",
                    description: "Override whether the user's pre-experiment keybind was the default keybind",
                    value: o3(e.overrideIsUsingDefaultOverlayKeybind),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Using default keybind", value: "True", id: "True" },
                        { label: "Not using default keybind", value: "False", id: "False" },
                    ],
                    onSelectionChange: (e) => {
                        (0, oh.C3)(o6(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Actions" }),
                (0, r.jsx)(h.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, oh.xc)() }),
                (0, r.jsx)(h.$, {
                    size: "sm",
                    text: "Reset isUsingDefaultOverlayKeybind",
                    onClick: () => (0, oh.tM)(),
                }),
            ],
        });
    });
function o4() {
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsx)("div", { className: k()(tT.nd, oA.rf), children: (0, r.jsx)(o5, {}) }),
    });
}
function o9() {
    let [e, t] = o.useState("state");
    return (
        o.useEffect(
            () => (
                tA.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !0 }),
                () => {
                    tA.h.dispatch({ type: "OVERLAY_SET_DETAILED_LOGGING", enabled: !1 });
                }
            ),
            [],
        ),
        (0, r.jsxs)("div", {
            className: k()(tT.nd, oA.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: oA._V,
                    children: [
                        (0, r.jsx)(I.D, {
                            className: k()(oA.k0, "state" === e && oA.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(D.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(I.D, {
                            className: k()(oA.k0, "logging" === e && oA.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(D.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(I.D, {
                            className: k()(oA.k0, "experiments" === e && oA.a),
                            onClick: () => t("experiments"),
                            children: (0, r.jsx)(D.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, r.jsx)(o8, {}),
                "logging" === e && (0, r.jsx)(o0, {}),
                "experiments" === e && (0, r.jsx)(o4, {}),
            ],
        })
    );
}
var o7 = a(488428),
    de = a(73825),
    dt = a(753390),
    da = a(155506),
    dn = a(944304),
    dl = a(300233),
    ds = a(599941),
    di = a(817649),
    dr = a(4630),
    dd = a(44120),
    dc = a(532794),
    du = a(216678),
    dm = a(194509),
    dh = a(761705),
    dx = a(65738),
    dp = a(265768);
function dg(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, ds.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, r.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(di.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let dv = function () {
    let [e, t] = o.useState(sa.pe.TIER_2),
        [a, n] = o.useState(null),
        l = (0, M.yK)([aY.A], () => aY.A.getGuildsArray()),
        [s] = (0, M.yK)([rL.A], () => [rL.A.getPremiumSubscription()]),
        i = l.map((e) => ({ id: e.id, value: e, label: e.name })),
        [c, m] = o.useState(i.length > 0 ? i[0].value : null),
        [v, j] = o.useState(""),
        [b, f] = o.useState({ plan_id: sa.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        y = "true" !== b.gift && null != s,
        [C, _] = o.useState(i.length > 0 ? i[0].value : null),
        { analyticsLocations: E } = (0, aB.Ay)(tm.A.PAYMENT_FLOW_TEST_PAGE),
        [S, N] = o.useState(""),
        [A, k] = o.useState(J.dJq),
        { balance: I, isFetching: T, error: O } = (0, dh.W)(),
        { isSubmitting: w, responseMessage: L, redeemVirtualCurrency: P } = (0, dh.Q)(),
        [U, G] = o.useState(J.dJq),
        [F, B] = o.useState(""),
        [V, $] = o.useState(J.dJq),
        [W, z] = o.useState(J.dJq);
    return (0, r.jsx)(aB.f5, {
        value: E,
        children: (0, r.jsx)(d.Ip, {
            className: dp.XG,
            children: (0, r.jsxs)(R.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, r.jsxs)(R.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Gift",
                                value: e,
                                options: [
                                    { id: "tier_2", value: sa.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: sa.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: sa.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(dm.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: na.XD.PRIMARY,
                                look: na.pR.FILLED,
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)(R.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Premium Select Plan",
                                value: a,
                                options: [
                                    { id: "tier_2", value: sa.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: sa.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: sa.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => n(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, dc.A)({ subscriptionTier: a, analyticsLocations: E }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)(R.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Boost",
                                value: c,
                                options: i,
                                onSelectionChange: (e) => m(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            null != c
                                ? (0, r.jsx)(dn.A, { guild: c, analyticsLocation: {} })
                                : (0, r.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)(R.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(ir.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, r.jsxs)(R.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(p.k, {
                                        label: "Standalone: Trial Promotion Redemption",
                                        placeholder: "Promotion Code",
                                        value: v,
                                        onChange: (e) => j(e),
                                    }),
                                    (0, r.jsx)(lU.m, {
                                        text: "Need Promotion Code",
                                        shouldShow: v.length < 1,
                                        children: (0, r.jsx)(h.$, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: v.length < 1,
                                            onClick: () => {
                                                window.open(J.BVt.BILLING_PROMOTION_REDEMPTION(v));
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Standalone: Gift/Subscription Purchase",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Plan",
                                value: b.plan_id,
                                options: [
                                    { id: "tier_2", value: sa.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: sa.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: sa.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
                                ],
                                onSelectionChange: (e) => {
                                    f((t) => ({ ...t, plan_id: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(x.l, {
                                label: "Type",
                                value: b.gift,
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
                    (0, r.jsx)(lU.m, {
                        text: "Already subscribed",
                        shouldShow: y,
                        children: (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: y,
                            onClick: () => {
                                window.open(J.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + o7.stringify({ ...b }));
                            },
                        }),
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, r.jsxs)(R.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    T
                                        ? (0, r.jsx)("div", {
                                              className: dp.wG,
                                              children: (0, r.jsx)(e8.y, { type: e8.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: dp.dB,
                                              children: [
                                                  null !== O &&
                                                      (0, r.jsxs)(D.E, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              O.message,
                                                          ],
                                                      }),
                                                  (0, r.jsx)(dx.Gy, {
                                                      balance: I ?? 0,
                                                      balanceWidgetMode: dx.k7.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsx)(p.k, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: U,
                                onChange: (e) => G(e),
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: w,
                                onClick: () => P(U, (0, ej.A)()),
                            }),
                            null != L && (0, r.jsx)(D.E, { variant: "text-sm/normal", children: L }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Creator Revenue",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Premium Server Subscription For",
                                value: C,
                                options: i,
                                onSelectionChange: (e) => _(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(dl.H, {
                                guildId: C?.id,
                                children: (0, r.jsx)(dg, { selectedGuildForGuildSub: C }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)(R.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsxs)(u.n, {
                                label: "Activities & Application Payment Modals",
                                children: [
                                    (0, r.jsx)(p.k, {
                                        label: "Application Id",
                                        placeholder: "Application Id",
                                        value: S,
                                        onChange: N,
                                    }),
                                    (0, r.jsx)(p.k, {
                                        label: "Sku Id",
                                        placeholder: "Sku Id",
                                        value: A,
                                        onChange: (e) => k(e),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, dr.openIAPPurchaseModal)({
                                        applicationId: S,
                                        skuId: A,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: J.liQ.IN_APP },
                                        context: J.BRT.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsx)(R.B, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, r.jsx)(u.n, {
                            label: "Standard Payment Modal Test",
                            children: (0, r.jsxs)(R.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(p.k, {
                                        label: "Application Id",
                                        hideLabel: !0,
                                        placeholder: "Application Id",
                                        value: F,
                                        onChange: B,
                                    }),
                                    (0, r.jsx)(p.k, {
                                        label: "SKU ID",
                                        hideLabel: !0,
                                        placeholder: "SKU ID",
                                        value: V,
                                        onChange: (e) => $(e),
                                    }),
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        text: "Open Premium Apps Payment Modal for SKU",
                                        onClick: () =>
                                            (0, du.q)({
                                                applicationId: F,
                                                skuId: V,
                                                analyticsLocations: E,
                                                checkoutFlow: da.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)(R.B, {
                        direction: "horizontal",
                        align: "end",
                        gap: 8,
                        children: [
                            (0, r.jsx)(p.k, {
                                label: "Collectibles Payment Modal Test",
                                placeholder: "SKU ID",
                                value: W,
                                onChange: (e) => z(e),
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open Collectibles Payment Modal for SKU",
                                onClick: () => (0, dd.A)({ skuId: W, analyticsLocations: E }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsx)(u.n, {
                        label: "Helpers",
                        children: (0, r.jsxs)(R.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, de.YG)(),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, dt.uZ)(),
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsx)(u.n, {
                        label: "Dismissible Content Framework",
                        children: (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Reset DismissibleContentFrameworkStore",
                            onClick: () => (0, ls.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var dj = a(219887),
    db = a(459357),
    df = a(885180),
    dy = a(742810),
    dC = a(500380),
    d_ = a(102609),
    dE = a(710195),
    dS = a(211287),
    dN = a(295405),
    dA = a(188976);
let dk = [
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
    dI = {
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
    dD = [
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
    dT = {
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
    dR = [
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
    dO = {
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
function dw() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        [i, c] = o.useState(null),
        [u, m] = o.useState(null),
        [p, g] = o.useState("pm_card_us"),
        [v, j] = o.useState(!1),
        b = Object.values((0, tu.bG)([dN.A], () => dN.A.paymentSources)),
        f = dI[e],
        y = async () => {
            let t = p;
            "" === t && (t = "pm_card_us"),
                await nH.Bo.post({
                    url: "/debug/payment-source",
                    body: { token: t, address: "US" === e ? l : "CA" === e ? u : null },
                    rejectWithError: !1,
                }),
                await (0, dt.$o)();
        },
        C = async () => {
            await nH.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }), await (0, dt.$o)();
        },
        _ = async () => {
            await nH.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }), window.location.reload();
        };
    return (
        o.useEffect(() => {
            (0, dt.$o)();
        }, []),
        (0, r.jsx)(d.Ip, {
            className: tT.nd,
            children: (0, r.jsxs)("div", {
                className: sd.l$,
                children: [
                    (0, r.jsxs)(D.E, {
                        style: { marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, r.jsxs)("div", {
                        className: sd.Uo,
                        children: [
                            (0, r.jsx)(t1.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: dk
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, r.jsx)("img", {
                                                alt: "",
                                                className: dA.bI,
                                                src: (0, dC.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: (e) => {
                                    t(e), g(dI[e][0].value), j(1 === dI[e].length);
                                },
                            }),
                            "US" === e &&
                                (0, r.jsx)(x.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: dD.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        n(e), s(dT[e] ?? null);
                                    },
                                }),
                            "CA" === e &&
                                (0, r.jsx)(x.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: i,
                                    options: dR.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        c(e), m(dO[e] ?? null);
                                    },
                                }),
                            (0, r.jsx)(x.l, {
                                selectionMode: "single",
                                label: "Card Token",
                                hideLabel: !0,
                                value: p,
                                options: f.map((e) => {
                                    let { value: t, label: a } = e;
                                    return { id: t, value: t, label: a };
                                }),
                                onSelectionChange: g,
                                disabled: v,
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Create Stripe Credit Card",
                                onClick: y,
                            }),
                            b.length > 0 &&
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Delete All Payment Sources",
                                    onClick: C,
                                }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset API Rate limits and reload app",
                                onClick: _,
                            }),
                        ],
                    }),
                    (0, r.jsx)(D.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Generate Gift Card PIN",
                    }),
                    (0, r.jsx)(dW, {}),
                    (0, r.jsx)(D.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Experiment Overrides",
                    }),
                    (0, r.jsx)(dB, {}),
                    (0, r.jsx)(D.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Existing Payment Sources",
                    }),
                    b.map((e) => (0, r.jsx)(dz, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let dM = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    dL = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Legacy checkout" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Unified checkout" },
    ],
    dP = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Gift cards enabled" },
    ],
    dU = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Payment elements disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Payment elements enabled" },
    ],
    dG = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Orb redemption via legacy" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Orb redemption via orders" },
    ];
function dF(e) {
    let { experimentName: t, options: a = dM } = e,
        n = (0, tu.bG)([dE.A, nx.default], () => {
            let e = nx.default.getId(),
                a = dE.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        l = o.useCallback(
            (e) => {
                (0, d_.t$)(d_.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, r.jsx)(x.l, { selectionMode: "single", label: t, value: n, options: [...a], onSelectionChange: l });
}
function dB() {
    return (0, r.jsxs)(R.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(dF, { experimentName: dy.W2.definition.name, options: dL }),
            (0, r.jsx)(dF, { experimentName: dy._$.definition.name, options: dL }),
            (0, r.jsx)(dF, { experimentName: db.A.definition.name, options: dP }),
            (0, r.jsx)(dF, { experimentName: df._.definition.name, options: dU }),
            (0, r.jsx)(dF, { experimentName: dS.A.definition.name, options: dG }),
        ],
    });
}
let dV = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    d$ = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function dW() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState("500"),
        [l, s] = o.useState(null),
        [i, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [m, g] = o.useState(null),
        v = parseInt(a, 10),
        j = !isNaN(v) && v >= 500 && v <= 5e3,
        b = async () => {
            if (j) {
                d(!0), g(null), s(null), u(!1);
                try {
                    let t = await nH.Bo.post({
                        url: "/billing/gift-card/create-on-demand-pin",
                        body: { country: e, currency: d$[e], amount: v },
                        rejectWithError: !0,
                    });
                    s(t.body.pin);
                } catch (e) {
                    g(e instanceof Error ? e.message : "Failed to generate PIN");
                } finally {
                    d(!1);
                }
            }
        };
    return (0, r.jsxs)(R.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsxs)(R.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, r.jsx)(x.l, {
                        selectionMode: "single",
                        label: "Gift Card Country",
                        value: e,
                        options: dV,
                        onSelectionChange: t,
                    }),
                    (0, r.jsx)(p.k, {
                        label: "Amount (500\u20135000)",
                        type: "number",
                        value: a,
                        onChange: n,
                        min: 500,
                        max: 5e3,
                    }),
                    (0, r.jsx)(h.$, {
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
                (0, r.jsxs)(R.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(p.k, { label: "Generated PIN", value: l, onChange: () => {}, readOnly: !0 }),
                        (0, r.jsx)(h.$, {
                            variant: "secondary",
                            size: "sm",
                            text: c ? "Copied!" : "Copy",
                            onClick: () => {
                                navigator.clipboard.writeText(l), u(!0), setTimeout(() => u(!1), 2e3);
                            },
                        }),
                    ],
                }),
            null != m && (0, r.jsx)(T.w, { type: "critical", children: m }),
        ],
    });
}
function dz(e) {
    let { paymentSource: t } = e,
        a = async () => {
            await nH.Bo.patch({ url: J.Rsh.BILLING_PAYMENT_SOURCE(t.id), body: { default: !0 }, rejectWithError: !1 }),
                await (0, dt.$o)();
        };
    return (0, r.jsxs)("div", {
        className: sd.bd,
        children: [
            (0, r.jsx)(dj.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, r.jsx)("img", { alt: t.country, className: dA.bI, src: (0, dC.t)(t.country) }),
            t.isDefault
                ? (0, r.jsx)(D.E, { variant: "text-sm/medium", children: "(Default)" })
                : (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: "Set as Default", onClick: a }),
        ],
    });
}
var dH = a(706712),
    dK = a(367727),
    dY = a(845886);
function dq() {
    return (0, r.jsx)(d.Ip, { className: dY.kL, children: (0, r.jsx)(dJ, {}) });
}
function dJ() {
    let e = o.useCallback(() => {
            (0, lv._N)(t7.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, dK.FZ)(t7.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(w.D, { className: dY.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, r.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, r.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, r.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, r.jsx)("div", {
                className: dY.PW,
                children: (0, r.jsx)(h.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var dQ = a(136722),
    dX = a(576705),
    dZ = a(309010),
    d0 = a(558393),
    d1 = a(719366),
    d2 = a(842681);
function d8(e) {
    let { title: t, can: a } = e,
        n = a ? rB.A : F.P,
        l = (0, r.jsx)("div", {
            className: k()(d2.v_, a ? d2.uU : d2.Ss),
            children: (0, r.jsx)(n, { className: d2.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: d2.z8,
        children: [
            l,
            (0, r.jsx)("div", {
                className: d2.rv,
                children: (0, r.jsx)(D.E, { variant: "text-md/normal", children: t }),
            }),
        ],
    });
}
function d6() {
    let e = (0, M.bG)([dZ.A], () => dZ.A.getChannelId()),
        t = (0, M.bG)([aq.A], () => aq.A.getGuildId()),
        a = (0, M.bG)([ad.A], () => ad.A.getChannel(e)),
        n = (0, M.bG)([aY.A], () => aY.A.getGuild(t)),
        l = (0, M.bG)([dX.A], () => dX.A.computePermissions(a)),
        s = (0, M.bG)([dX.A], () => dX.A.computePermissions(n)),
        i = (0, ao.Ay)(a, !0),
        o = null != a ? (0, d1.mW)(a, !1) : null,
        d = null != n ? d0.A.getGuildPermissionSpecMap(n) : null,
        c = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = dQ.zy(l, a);
            return (0, r.jsx)(d8, { title: t, can: n }, t);
        }),
        u = Object.values(d ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = dQ.zy(s, a);
            return (0, r.jsx)(d8, { title: t, can: n }, t);
        });
    return (0, r.jsx)("div", {
        className: k()(tT.nd, d2.nd),
        children: (0, r.jsxs)("div", {
            className: d2.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: d2.uW,
                    children: [
                        (0, r.jsx)(w.D, {
                            variant: "heading-md/semibold",
                            children: null != i ? `Permissions in ${i}` : "No channel selected",
                        }),
                        c,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: d2.uW,
                    children: [
                        (0, r.jsx)(w.D, {
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
var d3 = a(873298),
    d5 = a(775602),
    d4 = a(363195),
    d9 = a(885386),
    d7 = a(631670),
    ce = a(817281),
    ct = a(955572),
    ca = a(56348),
    cn = a(385803),
    cl = a(381941);
let cs = [J.NJ8.DARK, J.NJ8.LIGHT, J.NJ8.DARKER, J.NJ8.MIDNIGHT],
    ci = [d3.NS.COMPACT, d3.NS.COZY, d3.NS.DEFAULT];
function cr(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function co() {
    let e,
        t =
            ((e = H.default.getCurrentUser()),
            rH.Ay.canUseClientThemes(e) ? Object.keys(cn.ag).map((e) => Number(e)) : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                n = cr(a);
            if (null != n) {
                let t = cn.ag[n];
                e = t?.theme ?? J.NJ8.DARK;
            } else e = cr([J.NJ8.DARK, J.NJ8.DARKER, J.NJ8.MIDNIGHT]);
            await ce.u_(
                { theme: e, backgroundGradientPresetId: n ?? void 0, customUserThemeSettings: void 0 },
                lv.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = cr(cs);
            await ce.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                lv.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function cd() {
    let e = tx.A.purchases,
        t = (0, ey.x9)(e),
        a = (0, ey.$W)(e),
        n = t.length > 0,
        l = a.length > 0;
    if (n || l)
        try {
            let e = {};
            n && (e.avatarDecoration = cr([...t, null])), l && (e.nameplate = cr([...a, null])), (0, e7.p)(e);
            let s = te.A.getPendingChanges(),
                i = (0, ca.Sk)(s);
            await (0, d7._L)(i).finally(d7.pZ);
        } catch (e) {}
}
function cc() {
    try {
        let e = cr(J.hH7.FONT_SIZES);
        (0, ct.XS)(e);
        let t = cr(cl.qh);
        (0, ct.AC)(t);
        let a = cr(ci);
        d9.Xi.updateSetting(a);
    } catch (e) {}
}
function cu() {
    (0, tn.Bf)();
    let e = (0, M.bG)([H.default], () => H.default.getCurrentUser()),
        t = d9.eh.useSetting(),
        a = (0, M.bG)([d4.A], () => d4.A.theme),
        n = t.backgroundGradientPresetId,
        l = (0, M.bG)([tx.A], () => tx.A.purchases),
        s = (0, ey.x9)(l),
        i = (0, ey.$W)(l),
        d = e?.avatarDecoration?.skuId,
        c = e?.collectibles?.nameplate?.skuId,
        u = null != d ? (s.find((e) => e.skuId === d) ?? null) : null,
        m = null != c ? (i.find((e) => e.skuId === c) ?? null) : null,
        x = (0, M.bG)([th.A], () => th.A.getProduct(u?.skuId)),
        p = (0, M.bG)([th.A], () => th.A.getProduct(m?.skuId)),
        g = (0, M.bG)([d5.A], () => d5.A.fontSize),
        v = (0, M.bG)([d5.A], () => d5.A.messageGroupSpacing),
        j = d9.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = H.default.getCurrentUser(),
                t = d9.eh.getSetting(),
                a = tx.A.purchases,
                n = (0, ey.x9)(a),
                l = (0, ey.$W)(a),
                s = d4.A.theme,
                i = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (n.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (l.find((e) => e.skuId === o) ?? null) : null,
                u = d5.A.fontSize,
                m = d5.A.messageGroupSpacing,
                h = d9.Xi.getSetting();
            return () => {
                try {
                    ce.u_(
                        { theme: s, backgroundGradientPresetId: i ?? void 0, customUserThemeSettings: void 0 },
                        lv.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, e7.p)({ avatarDecoration: d, nameplate: c });
                    let e = te.A.getPendingChanges(),
                        t = (0, ca.Sk)(e);
                    (0, d7._L)(t).finally(d7.pZ), (0, ct.XS)(u), (0, ct.AC)(m), d9.Xi.updateSetting(h);
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: lC.kL,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(w.D, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, r.jsx)(D.E, {
                            variant: "text-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: co }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: cd,
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: cc,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["Theme: ", a] }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-md/normal",
                            children: ["Client Theme ID:", " ", null != n ? cn.ag[n]?.getName() : "None"],
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", x?.name ?? "None"],
                        }),
                        (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["Nameplate: ", p?.name ?? "None"] }),
                        (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["Font Size: ", g, "px"] }),
                        (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["Message Spacing: ", v] }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-md/normal",
                            children: [
                                "UI Density: ",
                                j,
                                " (",
                                (function (e) {
                                    switch (e) {
                                        case d3.NS.COMPACT:
                                            return "Compact";
                                        case d3.NS.COZY:
                                            return "Cozy";
                                        case d3.NS.DEFAULT:
                                            return "Default";
                                        case d3.NS.RESPONSIVE:
                                            return "Responsive";
                                        default:
                                            return "Unknown";
                                    }
                                })(j),
                                ")",
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
var cm = a(885574),
    ch = a(311678),
    cx = a(508274),
    cp = a(837529);
let cg = [5793266, 2303016],
    cv = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function cj() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: n } = (0, cp.Zt)(),
        l = (0, ee.Ay)(),
        s = (0, M.bG)([ae.A], () => ae.A.settings.appearance?.clientThemeSettings),
        i =
            s?.customUserThemeSettings != null &&
            null != s.customUserThemeSettings.colors &&
            s.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, ce.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), n(null));
    }
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsxs)(R.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ch.N, {
                            collapsibleContent: (0, r.jsxs)(R.B, {
                                gap: 8,
                                padding: 4,
                                children: [
                                    (0, r.jsx)(D.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "This panel allows you to override the theme and theme colors that are used when rendering user profiles. The overrides you set here will apply to all user profiles, not just your own.",
                                    }),
                                    (0, r.jsx)(D.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "The intended use case for this tool is to allow you to preview both Nitro and non-Nitro profile component styles across a variety of user profiles regardless of their Nitro status or chosen theme colors.",
                                    }),
                                ],
                            }),
                            children: (e) => {
                                let { onClick: t } = e;
                                return (0, r.jsx)(h.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: "What is this?",
                                    icon: cm.m,
                                    onClick: t,
                                });
                            },
                        }),
                        (0, r.jsx)(g.c, {}),
                    ],
                }),
                null == e
                    ? (0, r.jsx)(h.$, {
                          variant: "primary",
                          text: "Enable Theme Override",
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: cg }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(l1.e, {
                                  children: (0, r.jsx)(h.$, {
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
                                  options: cv,
                                  onSelectionChange: (a) => t({ ...e, mode: a }),
                              }),
                              "nitro" === e.mode
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(v.d, {
                                                label: "Disable Banner",
                                                checked: !0 === e.disableBanner,
                                                onChange: (a) => t({ ...e, disableBanner: a }),
                                            }),
                                            (0, r.jsx)(h.$, {
                                                variant: "secondary",
                                                text: "Reset Colors",
                                                onClick: () => t({ ...e, themeColors: cg }),
                                            }),
                                            (0, r.jsxs)(R.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, r.jsx)(cx.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[0] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [a, e.themeColors?.[1] ?? null] }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)(R.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Secondary Color",
                                                    }),
                                                    (0, r.jsx)(cx.VN, {
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
                                  : (0, r.jsxs)(R.B, {
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(x.l, {
                                                label: "Theme Type",
                                                selectionMode: "single",
                                                value: e.themeType,
                                                options: Object.values(J.NJ8).map((e) => ({
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
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-feedback-warning",
                                                            children:
                                                                "You have an active custom theme so setting a theme type does nothing.",
                                                        }),
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be saved and can be restored manually, or automatically when you clear the override.",
                                                        }),
                                                        (0, r.jsx)(h.$, {
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
                                                                    (0, ce.u_)({ theme: "system" });
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            null != a &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(D.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-muted",
                                                            children:
                                                                "Your custom theme will be automatically restored when you clear the override.",
                                                        }),
                                                        (0, r.jsx)(h.$, {
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
var cb = a(141931),
    cf = a(306173),
    cy = a(587626),
    cC = a(237984),
    c_ = a(43203),
    cE = a(349435),
    cS = a(674272),
    cN = a(466034),
    cA = a(10094),
    ck = a(683760);
let cI = () => {
    let e = (0, M.bG)([H.default], () => H.default.getCurrentUser()),
        t = (0, M.bG)([ck.A], () => {
            let e = ck.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, M.bG)([ck.A], () => ck.A.getPremiumTypeOverride());
    return (0, r.jsxs)(R.B, {
        gap: 16,
        children: [
            (0, r.jsx)(x.l, {
                label: "Override Client-Side Premium Type",
                options: sa.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, cA.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(lN.Q, {
                onClick: () => {
                    (0, cA.O)(sa.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(s7.J, {
                label: "Override Client-Side Account Created At Date",
                value: nt()(t),
                onSelect: (e) => {
                    var t;
                    return (t = e.toISOString()), void (0, cA.Y)(new Date(t));
                },
            }),
            (0, r.jsx)(lN.Q, { onClick: () => (0, cA.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
};
var cD = a(19575),
    cT = a(327337),
    cR = a(431804),
    cO = a(865349),
    cw = a(818050);
function cM() {
    throw Error("Send help");
}
function cL() {
    let e = d9.j0.useSetting(),
        [t, n] = o.useState(!1);
    return t
        ? {}
        : (0, r.jsxs)(d.Ip, {
              children: [
                  (0, r.jsx)("div", { className: k()(cO.N, cw.SX), children: (0, r.jsx)(cI, {}) }),
                  (0, r.jsx)("div", {
                      className: k()(cO.N, cw.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, cS.A)({ source: cR.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: k()(cO.N, cw.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = dZ.A.getChannelId() ?? "21154681615024128"),
                                  void (0, eR.openModalLazy)(
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
                                                  warningType: cE._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: cT.V },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: k()(cO.N, cw.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () =>
                              void (0, eR.openModalLazy)(
                                  async () => {
                                      let { default: e } = await a.e("17724").then(a.bind(a, 563255));
                                      return (t) => (0, r.jsx)(e, { ...t });
                                  },
                                  { onCloseCallback: void 0 },
                              ),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: k()(cO.N, cw.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, c_.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: k()(cO.N, cw.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: cf.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: k()(cO.N, cw.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = cy.A.getSocket();
                              tA.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: k()(cO.N, cw.QB),
                      children: (0, r.jsx)(v.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => d9.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: k()(cO.N, cw.QB),
                      children: [
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, cC.o)(),
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  cy.A.getSocket().close(), cy.A.getSocket().connect();
                              },
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Clear Caches",
                              onClick: () => {
                                  tA.h.dispatch({
                                      type: "CLEAR_CACHES",
                                      reason: "Requested by user",
                                      preventWritingCachesAgainThisSession: !0,
                                      resetSocket: !0,
                                  });
                              },
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Show TOTP Success",
                              onClick: () => (0, cN.sy)(!0),
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: () => {
                                  nH.Bo.post({ url: J.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: k()(cO.N, cw.QB),
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
                              onSelectionChange: (e) => null != e && cD.Ay.crash(e),
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
                                      value: cb.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: cb.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: cb.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void cD.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => n(!0),
                          }),
                          (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: cM }),
                      ],
                  }),
              ],
          });
}
var cP = a(465939),
    cU = a(653887),
    cG = a(105596);
function cF() {
    let e = Object.keys(cP).map((e) => (0, r.jsx)(c$, { riveName: e }, e));
    return (0, r.jsx)(d.Ar, {
        style: { maxHeight: "100%" },
        children: (0, r.jsxs)(R.B, {
            gap: 24,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsx)(w.D, { variant: "heading-lg/medium", children: "Rive Inspector" }),
                (0, r.jsx)(D.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, r.jsx)(cB, {}),
                (0, r.jsx)(w.D, { variant: "heading-lg/medium", children: "Rive Overrides" }),
                (0, r.jsx)(D.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to replace an existing Rive animation in the app with the new one. Useful for previewing updated versions of existing animations before uploading them via the Rive pipeline.",
                }),
                e,
            ],
        }),
    });
}
function cB() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        [i, d] = o.useState([]),
        c = o.useRef(null),
        [u, m] = o.useState(400),
        [h, x] = o.useState(400),
        g = o.useCallback(() => {
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
    return (0, r.jsxs)(R.B, {
        gap: 16,
        children: [
            (0, r.jsx)(c$, { riveName: "Rive inspector", onRiveLoad: j }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(cU._, { src: e, ref: c, onLoad: g, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, r.jsx)(e8.y, {}) : null,
            null != a &&
                (0, r.jsxs)(R.B, {
                    children: [
                        (0, r.jsxs)(R.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(w.D, { variant: "heading-lg/medium", children: "Dimensions" }),
                                (0, r.jsx)(p.k, {
                                    type: "number",
                                    label: "width",
                                    value: u.toString(),
                                    onChange: (e) => m(parseInt(e)),
                                }),
                                (0, r.jsx)(p.k, {
                                    type: "number",
                                    label: "height",
                                    value: h.toString(),
                                    onChange: (e) => x(parseInt(e)),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(R.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(w.D, { variant: "heading-lg/medium", children: "Data Binding" }),
                                Object.keys(l ?? {}).map((e) =>
                                    (0, r.jsx)(
                                        cV,
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
function cV(e) {
    let { property: t, type: a, value: n, onChange: l, artboards: s } = e;
    return "string" === a
        ? (0, r.jsx)(p.k, { label: t, value: n, onChange: (e) => l(e) })
        : "number" === a
          ? (0, r.jsx)(p.k, { type: "number", label: t, value: n, onChange: (e) => l(parseInt(e)) })
          : "boolean" === a
            ? (0, r.jsx)(v.d, { label: t, checked: n, onChange: (e) => l(e) })
            : "trigger" === a
              ? (0, r.jsx)(h.$, { text: `Trigger ${t}`, onClick: () => l(Number.isSafeInteger(n) ? n + 1 : 1) })
              : "image" === a
                ? (0, r.jsx)(p.k, { label: t, value: n, onChange: (e) => l(e) })
                : "color" === a
                  ? (0, r.jsx)(t1.Z, {
                        selectionMode: "single",
                        label: t,
                        value: n,
                        onSelectionChange: (e) => l(e),
                        closeOnSelect: !0,
                        placeholder: "Select a color...",
                        options: Object.entries(eO.A.colors).map((e) => {
                            let [t, a] = e;
                            return { label: t, value: a, id: t };
                        }),
                    })
                  : "artboard" === a
                    ? (0, r.jsx)(t1.Z, {
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
function c$(e) {
    let { riveName: t, onRiveLoad: a } = e,
        n = cP[t]?.riveSrc,
        l = null == n,
        s = o.useRef(null),
        i = (0, cG.Gy)(n);
    return (0, r.jsxs)(
        R.B,
        {
            gap: 8,
            children: [
                (0, r.jsx)("label", { children: t }),
                (0, r.jsxs)(R.B, {
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
                                    null != n && (0, cG.DS)(n, t), a?.(t);
                                }),
                                    l.readAsArrayBuffer(t);
                            },
                            ref: s,
                        }),
                        (0, r.jsx)(eI.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: () => {
                                null != s.current && (s.current.value = ""),
                                    null != n && (0, cG.DS)(n, null),
                                    a?.(null);
                            },
                            icon: ni.u,
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
var cW = a(290136),
    cz = a(106236),
    cH = a(629584),
    cK = a(600239),
    cY = a(940622),
    cq = a(961895),
    cJ = a(343991),
    cQ = a(699666);
let cX = () => {
        (0, eR.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(a.bind(a, 343991));
                return (t) =>
                    (0, r.jsx)(e, {
                        title: "No image or video files found!",
                        help: "Please drop one or more image or video files.",
                        ...t,
                    });
            },
            { modalKey: cJ.D },
        );
    },
    cZ = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    c0 = (e) => {
        let { className: t, onDrop: a, children: n } = e,
            [l, s] = o.useState(!1),
            i = o.useRef(null),
            d = o.useCallback((e) => {
                cZ(e), s(!0), (0, eR.closeModal)(cJ.D);
            }, []),
            c = o.useCallback((e) => {
                cZ(e);
                let t = i.current,
                    a = e.relatedTarget;
                (null != a && (null == t || t.contains(a))) || s(!1);
            }, []),
            u = o.useCallback(
                async (e) => {
                    cZ(e), s(!1);
                    let t = e.dataTransfer;
                    if (null == t) return void cX();
                    let n = await Promise.all(
                        Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry()),
                    ).then((e) => e.filter((e) => null != e));
                    n.length > 0 ? a(n) : cX();
                },
                [a],
            );
        return (0, r.jsxs)("div", {
            ref: i,
            className: k()(t, cQ.iE),
            onDragEnter: d,
            onDragOver: cZ,
            onDragLeave: c,
            onDrop: u,
            children: [
                n,
                l &&
                    (0, r.jsx)("div", {
                        className: cQ.d2,
                        children: (0, r.jsxs)("div", {
                            className: cQ.vW,
                            children: [
                                (0, r.jsx)(cq.A, { icons: eo.ir }),
                                (0, r.jsx)(w.D, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
                                (0, r.jsxs)("div", {
                                    className: cQ.GA,
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            variant: "text-sm/normal",
                                            children: "Drop file(s) into this panel to preview Shop assets!",
                                        }),
                                        (0, r.jsxs)(D.E, {
                                            variant: "text-sm/normal",
                                            children: [
                                                "Click",
                                                (0, r.jsx)(cW.c, {
                                                    className: cQ.q4,
                                                    size: "xs",
                                                    color: eO.A.colors.TEXT_DEFAULT,
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
var c1 = a(120301);
let c2 = new Set([
        e_.RN.HERO_BANNER_STATIC,
        e_.RN.HERO_LOGO,
        e_.RN.PDP_BACKGROUND,
        e_.RN.LOGO,
        e_.RN.MOBILE_BANNER,
        e_.RN.MOBILE_BACKGROUND,
    ]),
    c8 = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    c6 = { max: 5e6, warn: 2e6 },
    c3 = { max: 3e6, warn: 1e6 },
    c5 = { max: 2e6, warn: 1e6 },
    c4 = { max: 1e6, warn: 5e5 },
    c9 = { max: 25e4, warn: 5e4 },
    c7 = {
        [e_.Jn.PROFILE_EFFECT]: c6,
        [e_.Jn.AVATAR_DECORATION]: c3,
        [e_.Jn.PROFILE_FRAME]: c5,
        [e_.RN.HERO_BANNER_ANIMATED]: c6,
        [e_.RN.HERO_BANNER_RIVE]: c6,
        [e_.RN.CATALOG_BANNER_RIVE]: c6,
        [e_.RN.SHOP_BUTTON_BG_HOVER]: c3,
        [e_.RN.SHOP_BUTTON_BG_HOVER_DARK]: c3,
        [e_.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: c3,
        [e_.RN.SHOP_BUTTON_BG_RESTING]: c3,
        [e_.RN.SHOP_BUTTON_BG_RESTING_DARK]: c3,
        [e_.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: c3,
        [e_.RN.HERO_BANNER_STATIC]: c5,
        [e_.RN.UPSELL_BANNER]: c4,
        [e_.RN.UPSELL_BANNER_POPOUT]: c9,
        [e_.RN.MOBILE_BANNER]: c4,
        [e_.RN.MOBILE_BACKGROUND]: c9,
        [e_.RN.MOBILE_HERO]: c4,
        [e_.RN.PDP_BACKGROUND]: c9,
        [e_.RN.LOGO]: c9,
        [e_.RN.TAB_TOOLTIP]: c9,
    },
    ue = [e_.Kx.COLLECTION],
    ut = [e_.Kx.AVATAR_DECORATIONS, e_.Kx.FRAMES, e_.Kx.NAMEPLATES, e_.Kx.PROFILE_EFFECTS],
    ua = async (e) => {
        let t = e.createReader(),
            a = await new Promise((e) => t.readEntries(e)),
            n = new Set();
        for (let e of a) e.isDirectory && n.add(e.name);
        let l = ue.filter((e) => !n.has(e));
        return ut.some((e) => n.has(e)) || l.push(`at least one of: ${ut.join(", ")}`), l;
    },
    un = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
    ul = (e) => {
        let { names: t, addError: a } = e,
            n = t.filter((e) => !un.test(e));
        n.length > 0 && a("File names must be in lowercase snake case", n);
    },
    us = (e, t, a, n, l) => {
        let s = t.size,
            i = s > 1e6 ? `${(s / 1e6).toFixed(2)}MB` : `${(s / 1e3).toFixed(2)}KB`,
            r = `${l ?? t.name} - ${i}`;
        if (s > e.max) {
            let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
            a("Files exceed the recommended size limit - make sure they are optimized!", [`${r} (max: ${t})`]);
        } else s > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [`${r}`]);
    },
    ui = (e, t, a, n) => {
        let l = c7[e];
        if (null != l) for (let e of t) e.name.endsWith(".txt") || us(l, e, a, n);
    },
    ur = (e) => {
        let t = e_.aL[e];
        return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
    },
    uo = ["png", "jpg"];
var ud = a(981388);
let uc = o.createContext({ setDropHandler: () => {} }),
    uu = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    um = { id: "none", label: "[none selected]", value: null },
    uh = () => {
        (0, eR.hasModalOpen)(cK.k)
            ? (0, eR.closeModal)(cK.k)
            : (0, eR.openModalLazy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: cK.k, onCloseRequest: () => (0, eR.closeModal)(cK.k) },
              );
    },
    ux = () => {
        (0, eR.hasModalOpen)(cK.g)
            ? (0, eR.closeModal)(cK.g)
            : (0, eR.openModalLazy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: cK.g, onCloseRequest: () => (0, eR.closeModal)(cK.g) },
              );
    },
    up = () => {
        let e = (0, eE.pF)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, cY.JE)(),
            n = o.useMemo(() => [um, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: ud.kO,
                  children: [
                      (0, r.jsx)(ar.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: ud.wR,
                          children: [
                              (0, r.jsx)(w.D, {
                                  variant: "heading-sm/semibold",
                                  children: `Profile Effect (${e.length} to preview)`,
                              }),
                              (0, r.jsx)(eI.K, {
                                  variant: "icon-only",
                                  size: "sm",
                                  onClick: ux,
                                  icon: cW.c,
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
                          maxOptionsVisible: 50,
                          onSelectionChange: a,
                      }),
                  ],
              });
    },
    ug = () => {
        let e = (0, cY.bA)(),
            { previewProfileFrameKey: t, setPreviewProfileFrameKey: a } = (0, cY.JE)(),
            n = o.useMemo(() => [um, ...e.map((e) => ({ id: e.key, label: e.key, value: e.key }))], [e]);
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: ud.kO,
                  children: [
                      (0, r.jsx)(ar.h, { size: 16 }),
                      (0, r.jsx)(w.D, {
                          variant: "heading-sm/semibold",
                          children: `Profile Frame (${e.length} to preview)`,
                      }),
                      (0, r.jsx)(x.l, {
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
    uv = () => {
        let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, cY.JE)(),
            { avatarDecorationAssets: a } = (0, cY.NE)(),
            n = o.useMemo(() => [um, ...a.map((e) => ({ id: e.name, label: e.name, value: e.name }))], [a]);
        return 0 === a.length
            ? null
            : (0, r.jsxs)("div", {
                  className: ud.kO,
                  children: [
                      (0, r.jsx)(ar.h, { size: 16 }),
                      (0, r.jsx)(w.D, {
                          variant: "heading-sm/semibold",
                          children: `Avatar Decorations (${a.length} to preview)`,
                      }),
                      (0, r.jsx)(x.l, {
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
    uj = new Set([e_.RN.HERO_BANNER_STATIC, e_.RN.HERO_BANNER_ANIMATED, e_.RN.HERO_BANNER_RIVE]),
    ub = (e) => {
        let { clearAssets: t, clearIgnoredFiles: a } = e,
            { collectionAssets: n } = (0, cY.NE)(),
            {
                deleteCollectionAsset: l,
                clearAssets: s,
                heroLogoMaxHeight: i,
                setHeroLogoMaxHeight: d,
                heroResponsive: c,
                setHeroResponsive: u,
            } = (0, cY.JE)(),
            m = o.useMemo(() => Object.values(n).map((e) => ({ label: e.name, value: e.type })), [n]),
            x = m.some((e) => e.value === e_.RN.HERO_LOGO),
            p = m.some((e) => uj.has(e.value)),
            g = o.useCallback((e) => l(e), [l]),
            j = o.useCallback(() => {
                s(), t(), a();
            }, [s, t, a]);
        return 0 === m.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(ar.h, { size: 16 }),
                      (x || p) &&
                          (0, r.jsxs)("div", {
                              className: ud.v7,
                              children: [
                                  x &&
                                      (0, r.jsxs)("div", {
                                          className: ud.cj,
                                          children: [
                                              (0, r.jsx)(D.E, {
                                                  variant: "text-md/normal",
                                                  className: ud.Me,
                                                  children: "Logo size",
                                              }),
                                              (0, r.jsx)(cz.A, {
                                                  className: ud.TQ,
                                                  minValue: 90,
                                                  maxValue: 200,
                                                  initialValue: i ?? 90,
                                                  handleSize: 10,
                                                  onValueChange: (e) => d(Math.round(e)),
                                                  onValueRender: (e) => `${Math.round(e)}px`,
                                                  "aria-label": "Hero logo max height",
                                              }),
                                              (0, r.jsx)(D.E, { variant: "text-sm/normal", children: `${i ?? 90}px` }),
                                          ],
                                      }),
                                  p &&
                                      (0, r.jsxs)("div", {
                                          className: ud.sy,
                                          children: [
                                              (0, r.jsx)(v.d, { checked: c, onChange: u }),
                                              (0, r.jsx)(D.E, {
                                                  variant: "text-md/normal",
                                                  children: "Responsive Hero",
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                      (0, r.jsx)(ar.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: ud.wR,
                          children: [
                              (0, r.jsx)(w.D, { variant: "heading-lg/bold", children: "Uploaded Assets" }),
                              (0, r.jsx)(h.$, {
                                  variant: "critical-primary",
                                  size: "sm",
                                  onClick: j,
                                  text: "Clear All",
                              }),
                          ],
                      }),
                      (0, r.jsx)("ul", {
                          children: m.map((e) =>
                              (0, r.jsxs)(
                                  "li",
                                  {
                                      className: ud._0,
                                      children: [
                                          (0, r.jsx)(eI.K, {
                                              variant: "icon-only",
                                              size: "sm",
                                              onClick: () => g(e.value),
                                              icon: F.P,
                                              "aria-label": "Remove asset",
                                          }),
                                          (0, r.jsx)(D.E, { variant: "text-md/normal", children: e.label }),
                                      ],
                                  },
                                  e.value,
                              ),
                          ),
                      }),
                  ],
              });
    },
    uf = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
        return 0 === t.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(ar.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: ud.wR,
                          children: [
                              (0, r.jsx)(w.D, { variant: "heading-lg/bold", children: "Ignored Files" }),
                              (0, r.jsx)(h.$, { variant: "primary", size: "sm", onClick: a, text: "Clear" }),
                          ],
                      }),
                      (0, r.jsx)("ul", {
                          children: t.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      className: ud.yk,
                                      children: (0, r.jsx)(D.E, { variant: "text-md/normal", children: e }),
                                  },
                                  `${e}-${t}`,
                              ),
                          ),
                      }),
                  ],
              });
    },
    uy = () => {
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
                                let n = await ua(t);
                                n.length > 0 && i("Missing required directories", n),
                                    (a = await (0, e_.eg)([t])),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        for (let e of t.collectionFiles) {
                                            let t = (0, e_.pd)(e),
                                                l = null != t ? c7[t] : null;
                                            null != l && us(l, e, a, n);
                                        }
                                        ul({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                        let l = new Set(
                                                t.collectionFiles.map((e) => (0, e_.pd)(e)).filter((e) => null != e),
                                            ),
                                            s = Array.from(c2)
                                                .filter((e) => !l.has(e))
                                                .map(ur);
                                        s.length > 0 && a("Missing required files", s);
                                        let i = Object.values(e_.RN)
                                            .filter((e) => !c2.has(e))
                                            .filter((e) => !l.has(e))
                                            .map(ur);
                                        i.length > 0 && n("Missing optional assets", i);
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        ul({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                            Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                                let [t, l] = e,
                                                    s = l.map((e) => e.name);
                                                ul({
                                                    names: s.map((e) => {
                                                        let t = e.indexOf("-");
                                                        return e.substring(0, t > 0 ? t : e.length);
                                                    }),
                                                    addError: a,
                                                }),
                                                    ui(e_.Jn.PROFILE_EFFECT, l, a, n);
                                                let i = c8
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
                                                        (e) => !c8.some((t) => e.startsWith(t)) && !e.endsWith(".txt"),
                                                    )
                                                    .map((e) => `${t}/${e}`);
                                                r.length > 0 && n("Contains unrecognized files", r);
                                            });
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        ul({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                            ui(e_.Jn.AVATAR_DECORATION, t.avatarDecorationFiles, a, n);
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e,
                                            l = Object.keys(t.profileFrameDirsMap)
                                                .filter((e) => !un.test(e))
                                                .map((e) => `${e_.Kx.FRAMES}/${e}`);
                                        l.length > 0 && a("File names must be in lowercase snake case", l);
                                        let s = c7[e_.Jn.PROFILE_FRAME];
                                        Object.entries(t.profileFrameDirsMap).forEach((e) => {
                                            let [t, l] = e,
                                                i = `${e_.Kx.FRAMES}/${t}`,
                                                r = l.previewFile?.name.split(".").pop()?.toLowerCase();
                                            (null != l.previewFile && null != r && uo.includes(r)) ||
                                                a(
                                                    "Missing required preview file for profile frame (preview.png or preview.jpg)",
                                                    [`${i}/preview.{${uo.join("|")}}`],
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
                                                un.test(l.previewFile.name) ||
                                                o.push(`${i}/${l.previewFile.name}`),
                                            l.layerFiles))
                                                un.test(e.name) || o.push(`${i}/${t}/${e.name}`);
                                            o.length > 0 && a("File names must be in lowercase snake case", o);
                                            let d = [];
                                            for (let { file: e, folder: t } of l.layerFiles) {
                                                let { parsed: a, errorType: n } = (0, c1.Mf)(e.name);
                                                if (null == a) {
                                                    let a = null != n ? c1.h4[n] : "invalid";
                                                    d.push(`${i}/${t}/${e.name}: ${a}`);
                                                }
                                            }
                                            if (
                                                (d.length > 0 && a("Invalid profile frame layer filenames", d),
                                                null != s)
                                            )
                                                for (let { file: e, folder: t } of (null != l.previewFile &&
                                                    us(s, l.previewFile, a, n, `${i}/${l.previewFile.name}`),
                                                l.layerFiles))
                                                    us(s, e, a, n, `${i}/${t}/${e.name}`);
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
            { setDropHandler: u } = o.useContext(uc),
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
                              className: ud._f,
                              children: [
                                  (0, r.jsx)(D.E, {
                                      variant: "text-md/normal",
                                      color: d ? "text-feedback-critical" : "text-default",
                                      children: `${s.length} errors`,
                                  }),
                                  (0, r.jsx)(D.E, {
                                      variant: "text-md/normal",
                                      color: c ? "text-feedback-warning" : "text-default",
                                      children: `${i.length} warnings`,
                                  }),
                                  (0, r.jsx)(h.$, { variant: "primary", size: "sm", onClick: t, text: "Reset" }),
                              ],
                          })
                        : (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Drop asset folder to validate." }),
                    (0, r.jsx)(ar.h, { size: 16 }),
                    d &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(w.D, { variant: "heading-lg/bold", children: "Errors" }),
                                (0, r.jsx)(ar.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: ud.ck,
                                    children: s.map((e, t) => {
                                        let [a, n] = e;
                                        return (0, r.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-critical",
                                                        children: a,
                                                    }),
                                                    n.length > 0 &&
                                                        (0, r.jsx)("ul", {
                                                            className: ud.ck,
                                                            children: n.map((e, t) =>
                                                                (0, r.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, r.jsx)(D.E, {
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
                                (0, r.jsx)(w.D, { variant: "heading-lg/bold", children: "Warnings" }),
                                (0, r.jsx)(ar.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: ud.ck,
                                    children: Object.entries(n).map((e, t) => {
                                        let [a, n] = e;
                                        return (0, r.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-warning",
                                                        children: a,
                                                    }),
                                                    n.length > 0 &&
                                                        (0, r.jsx)("ul", {
                                                            className: ud.ck,
                                                            children: n.map((e, t) =>
                                                                (0, r.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, r.jsx)(D.E, {
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
    uC = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, cY.JE)(),
            { ignoredFilenames: n, clearAssets: l, clearIgnoredFilenames: s, processAndUpsertAssets: i } = (0, e_.ds)(),
            { setDropHandler: d } = o.useContext(uc),
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
                        className: ud.sy,
                        children: [
                            (0, r.jsx)(v.d, { checked: e, onChange: (e) => t(e) }),
                            (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Enable Preview" }),
                            (0, r.jsx)(eI.K, {
                                variant: "icon-only",
                                size: "sm",
                                onClick: uh,
                                icon: cW.c,
                                "aria-label": "Open preview instructions",
                            }),
                        ],
                    }),
                    (0, r.jsx)(D.E, {
                        variant: "text-md/normal",
                        children: "Drop files in this panel to begin preview.",
                    }),
                    (0, r.jsx)(up, {}),
                    (0, r.jsx)(ug, {}),
                    (0, r.jsx)(uv, {}),
                    (0, r.jsx)(ub, { clearAssets: l, clearIgnoredFiles: s }),
                    (0, r.jsx)(uf, { ignoredFiles: n, handleClearIgnoredFiles: s }),
                ],
            })
        );
    },
    u_ = () => {
        let [e, t] = o.useState("preview");
        return (0, r.jsxs)("div", {
            className: ud.kL,
            children: [
                (0, r.jsx)(cH.I, {
                    options: uu,
                    value: e,
                    onChange: (e) => {
                        let { value: a } = e;
                        return t(a);
                    },
                    className: ud.Vj,
                    optionClassName: ud.UK,
                }),
                (0, r.jsx)(ar.h, { size: 8 }),
                "preview" === e && (0, r.jsx)(uC, {}),
                "validate" === e && (0, r.jsx)(uy, {}),
                (0, r.jsx)(ar.h, { size: 16 }),
            ],
        });
    },
    uE = (e) => {
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
        return (0, r.jsx)(uc.Provider, { value: l, children: (0, r.jsx)(c0, { onDrop: s, children: t }) });
    };
var uS = a(663803),
    uN = a(859040),
    uA = a(385815);
let uk = () => {
    let e = (0, M.bG)([th.A], () => th.A.skipNumCategories);
    return (0, r.jsxs)("div", {
        className: uA.k,
        children: [
            (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Hide first # of categories" }),
            (0, r.jsx)(uS.l, {
                value: e,
                onChange: (e) => {
                    (0, uN.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
};
var uI =
        (((n = {}).DEFAULT = "default"),
        (n.DEFAULT_WITH_ORB_SHELF = "default_with_orb_shelf"),
        (n.ORB_TAB = "orb_tab"),
        (n.FRAMES = "frames"),
        (n.FRAMES_PINNED = "frames_pinned"),
        n),
    uD = a(295811);
let uT = () => {
    let e = (0, M.bG)([uD.A], () => uD.A.getShopHomeConfigOverride()),
        t = [
            { id: "none", label: "DISABLED (no override)", value: void 0 },
            ...Object.values(uI).map((e) => ({ id: e, label: e, value: e })),
        ];
    return (0, r.jsx)(x.l, {
        label: "Shop Home Override",
        layout: "horizontal",
        options: t,
        value: e,
        onSelectionChange: (e) => {
            (0, uN.Or)(e);
        },
        selectionMode: "single",
    });
};
var uR = a(172471);
let uO = () => {
        let [e, t] = o.useState(void 0);
        return (0, r.jsxs)("div", {
            className: k()(uR.kL, uR.fi),
            children: [
                (0, r.jsx)(p.k, {
                    fullWidth: !0,
                    label: "Shop Layout URL Override",
                    value: e,
                    onChange: (e) => ("" === e ? t(void 0) : t(e)),
                    placeholder: "https://cdn.discordapp.com/assets/content/...",
                }),
                (0, r.jsxs)("div", {
                    className: uR.o1,
                    children: [
                        (0, r.jsx)(h.$, {
                            variant: "critical-primary",
                            text: "Clear",
                            onClick: () => {
                                t(void 0), (0, uN.Aq)(void 0);
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Set",
                            onClick: () => (0, uN.Aq)("" !== e ? e : void 0),
                        }),
                    ],
                }),
            ],
        });
    },
    uw = (e) => {
        let { className: t } = e,
            a = Object.keys(t7.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
        return null == a
            ? null
            : (0, r.jsx)("div", { className: t, style: { zIndex: 1 }, children: (0, r.jsx)(lx, { items: [a] }) });
    };
var uM = a(578797),
    uL = a(628917);
let uP = (e) => {
        let { title: t, expanded: a, onToggle: n, children: l } = e,
            s = o.useId();
        return (0, r.jsx)(ch.N, {
            isExpanded: a,
            className: uL.uW,
            collapsibleContent: (0, r.jsx)("div", { id: s, className: uL.f5, children: l }),
            children: () =>
                (0, r.jsxs)("button", {
                    type: "button",
                    onClick: n,
                    "aria-expanded": a,
                    "aria-controls": s,
                    className: uL.bV,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/bold", children: t }),
                        (0, r.jsx)(sV._, { size: "sm", color: "currentColor", className: k()(uL.ai, { [uL.hg]: a }) }),
                    ],
                }),
        });
    },
    uU = () => {
        let e = (0, M.bG)([ly.A], () => ly.A.get("shop_disable_cache")),
            t = (0, M.bG)([ly.A], () => ly.A.get("shop_include_unpublished")),
            a = (0, uM.U)("DevToolsShopPanel"),
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
        return (0, r.jsx)(uE, {
            onDrop: i,
            children: (0, r.jsxs)("div", {
                className: uL.Lm,
                children: [
                    (0, r.jsxs)("div", {
                        className: uL.dQ,
                        children: [
                            (0, r.jsx)(v.d, {
                                label: "Disable collectibles cache",
                                checked: e,
                                onChange: (e) => (0, lf.L)("shop_disable_cache", e),
                            }),
                            (0, r.jsx)(v.d, {
                                label: "Show unpublished collectibles",
                                checked: t,
                                onChange: (e) => (0, lf.L)("shop_include_unpublished", e),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(uP, {
                        title: "Layouts",
                        expanded: n.has("layouts"),
                        onToggle: () => s("layouts"),
                        children: [(0, r.jsx)(uw, {}), (0, r.jsx)(uT, {}), a && (0, r.jsx)(uO, {}), (0, r.jsx)(uk, {})],
                    }),
                    (0, r.jsx)(uP, {
                        title: "Assets",
                        expanded: n.has("assets"),
                        onToggle: () => s("assets"),
                        children: (0, r.jsx)(u_, {}),
                    }),
                ],
            }),
        });
    },
    uG = [
        { id: "unset", label: "Unset", value: d3.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
        { id: "all", label: "All", value: d3.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
        { id: "usersWithGame", label: "Users With Game", value: d3.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
        { id: "none", label: "None", value: d3.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
    ];
function uF() {
    let e = o.useRef(null),
        t = d9.TA.useSetting();
    return (0, r.jsx)("div", {
        ref: e,
        className: k()(tT.nd, aA.n),
        children: (0, r.jsxs)("div", {
            className: aA.k,
            children: [
                (0, r.jsx)(w.D, { variant: "heading-lg/normal", children: "Settings" }),
                (0, r.jsx)(x.l, {
                    label: "Receive DMs In Game",
                    options: uG,
                    value: t,
                    onSelectionChange: d9.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var uB = a(278416),
    uV = a(220631);
function u$(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function uW(e) {
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
        (0, r.jsx)(d.Ip, { className: uV.Dx, children: (0, r.jsx)(aw.A, { data: n }) })
    );
}
function uz(e) {
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
                for (let e of n.preDispatches ?? []) tA.h.dispatch(e);
                tA.h.dispatch({ ...n.buildPayload(e), type: n.actionType }), i();
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
                for (let t of e.preDispatches ?? []) tA.h.dispatch(t);
                tA.h.dispatch({ ...e.buildPayload(t), type: e.actionType }), i();
            } catch (e) {
                s(e instanceof Error ? e.message : String(e));
            }
        }, [t, i]);
    return (0, r.jsxs)("div", {
        className: k()(uV.Dx, uV.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: uV.Vz,
                value: a,
                onChange: (e) => n(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != l && (0, r.jsx)("div", { className: uV.Xf, role: "alert", children: l }),
            (0, r.jsxs)("div", {
                className: uV.KA,
                children: [
                    (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "Apply", onClick: d }),
                    (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: "Refresh from store", onClick: i }),
                    t.__getLocalVarsEditConfig?.().getPurgeVars != null &&
                        (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: "Purge store", onClick: c }),
                ],
            }),
        ],
    });
}
let uH = [
    {
        key: "name",
        cellClassName: uV.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function uK(e) {
    let { store: t, initialHeight: a } = e,
        n = o.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: aG.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVars
                                ? (0, r.jsxs)("div", {
                                      className: uV.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(uW, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: aG.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(uW, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: aG.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVarsEditConfig
                                ? (0, r.jsxs)("div", {
                                      className: uV.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(uz, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: l, renderSelectedTab: s } = (0, aG.Ay)({ tabs: n }, []);
    return (0, r.jsxs)(aU, {
        className: uV.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(aO.Ay, {
                className: k()(tT.jr, uV.nZ),
                children: [
                    (0, r.jsx)(aO.Ay.Icon, { icon: uB.g, tooltip: t.getName() }),
                    (0, r.jsx)(aO.Ay.Title, { children: t.getName() }),
                ],
            }),
            s({ store: t }),
        ],
    });
}
function uY() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = M.il.getAll(),
        l = o
            .useMemo(() => n.map((e) => ({ key: e._dispatchToken, store: e })).sort(u$), [n])
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
        className: k()(tT.nd, uV.nd),
        children: [
            (0, r.jsx)("div", {
                className: uV.KE,
                children: (0, r.jsx)(nr.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(tR, { columns: uH, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != d &&
                (0, r.jsx)(uK, { store: d, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, s),
        ],
    });
}
var uq = a(91871),
    uJ = a.n(uq);
let uQ = [
        {
            key: "id",
            cellClassName: nN.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: nN.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: nN.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    uX = [
        {
            id: "details",
            name: "Details",
            group: aG.fu.NONE,
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
                    d = nt()(s);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(aO.Ay, {
                            className: k()(tT.jr, nN.nZ),
                            children: [
                                (0, r.jsx)(aO.Ay.Icon, { icon: nl.U, tooltip: t }),
                                (0, r.jsx)(aO.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(n_, {
                            className: nN.ZK,
                            children: [
                                (0, r.jsx)(nE, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: s.toISOString(),
                                        title: (0, nm.i$)(d, "LLLL"),
                                        children: (0, nm.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, r.jsx)(nE, {
                                        name: "Guild ID",
                                        children: (0, r.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, r.jsx)(nE, {
                                    name: "Bucket",
                                    children: (0, r.jsx)("code", { children: a.bucket }),
                                }),
                                (0, r.jsx)(nE, {
                                    name: "Revision",
                                    children: (0, r.jsx)("code", { children: a.revision }),
                                }),
                                (0, r.jsx)(nE, { name: "Override", children: (0, r.jsx)(nS, { value: a.override }) }),
                                (0, r.jsx)(nE, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                                (0, r.jsx)(nE, { name: "Excluded", children: (0, r.jsx)(nS, { value: l }) }),
                                (0, r.jsx)(nE, { name: "Previously tracked", children: (0, r.jsx)(nS, { value: o }) }),
                                (0, r.jsx)(nE, { name: "Location", children: (0, r.jsx)("code", { children: i }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function uZ() {
    let [e, t] = o.useState(""),
        a = o.useRef(null),
        n = (0, M.yK)([ny], () => ny.loggedTriggers),
        l = o.useMemo(
            () =>
                n
                    .filter((t) => 0 === e.length || uJ()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [n, e],
        ),
        [s, i] = o.useState(void 0),
        d = l.find((e) => e.key === s),
        { TabBar: c, renderSelectedTab: u } = (0, aG.Ay)({ tabs: uX }, []),
        m = (0, M.bG)([ny], () => ny.trackTriggers),
        h = o.useCallback((e) => {
            tA.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        x = m ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: k()(tT.nd, nN.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nN.rh,
                children: [
                    (0, r.jsx)(lU.m, {
                        text: x,
                        children: (0, r.jsx)(eI.K, {
                            size: "sm",
                            variant: m ? "active" : "primary",
                            icon: m ? lB.E : lF.u,
                            "aria-label": x,
                            onClick: () => h(!m),
                        }),
                    }),
                    (0, r.jsx)(nr.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, r.jsx)(eI.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": aX.intl.string(aX.t.VkKicb),
                        icon: ni.u,
                        onClick: L.eY,
                    }),
                ],
            }),
            (0, r.jsx)(tR, { columns: uQ, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != d &&
                (0, r.jsxs)(aU, {
                    className: nN.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(c, {}), u({ loggedTrigger: d })],
                }),
        ],
    });
}
var u0 = a(512950),
    u1 = a(324861),
    u2 = a(243655);
let u8 = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, u1.A)();
    return (0, r.jsx)("div", {
        className: u2.k,
        children: (0, r.jsxs)(u.n, {
            label: "Virtual Currency Configuration",
            description: "Click the button below to reset your onboarding state for Virtual Currency.",
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(h.$, {
                        text: "Reset Onboarding State",
                        onClick: () => {
                            e(), t(), (0, av.pX)(J.BVt.APP);
                        },
                    }),
                }),
                (0, r.jsx)(u0.p, {
                    messageType: u0.Y.INFO,
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these",
                }),
            ],
        }),
    });
};
var u6 = a(899e3),
    u3 = a(761853),
    u5 = a(731854);
let u4 = [
        ["codecH264", "H264"],
        ["codecH265", "H265 / HEVC"],
        ["codecAv1", "AV1"],
    ],
    u9 = [
        ["encNvidiaDx11", "NVIDIA Direct3D 11"],
        ["encNvidiaCuda", "NVIDIA CUDA"],
        ["encAmdDx11", "AMD Direct3D 11"],
        ["encIntelDx11", "Intel Direct3D 11"],
        ["encIntelCpu", "Intel CPU"],
        ["encWmfCpu", "Media Foundation CPU"],
        ["encWmfGpu", "Media Foundation GPU"],
        ["encWmfDx11", "Media Foundation Direct3D 11 (NYI)"],
    ],
    u7 = [
        ["capGraphicsCapture", "WGC / Windows Graphics Capture"],
        ["capDxgi", "DDA / DXGI Output Duplication"],
        ["capGdi", "GDI / PrintWindow + BitBlt"],
        ["capVideoHook", "Video Hook"],
    ],
    me = [
        ["bypassHybridGpuFpsRestriction", "WGC: Bypass Hybrid-GPU 60 FPS Restriction"],
        ["gdiForceBitblt", "GDI: Force Allow BitBlt"],
        ["allowHdr", "Allow HDR Capture"],
    ];
function mt(e) {
    let { title: t, toggles: a, state: n } = e;
    return (0, r.jsxs)(R.B, {
        gap: 8,
        children: [
            (0, r.jsx)(D.E, { variant: "text-lg/bold", children: t }),
            a.map((e) => {
                let [t, a] = e;
                return (0, r.jsx)(rw.S, { label: a, checked: !!n[t], onChange: () => (0, u6.yn)({ [t]: !n[t] }) }, t);
            }),
        ],
    });
}
function ma() {
    let e = (0, M.bG)([u6.Ay], () => u6.Ay.getSnapshot()),
        t = (0, M.bG)([u3.Ay], () => u3.Ay.supports(u5.O5.VIDEO));
    return (0, r.jsxs)(d.Ip, {
        className: tT.nd,
        children: [
            (0, r.jsx)(g.c, { gap: 16 }),
            (0, r.jsx)(mt, { title: "Video Codecs (Sender)", toggles: u4, state: e }),
            t
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(g.c, { gap: 16 }),
                          (0, r.jsx)(mt, { title: "Video Encoders", toggles: u9, state: e }),
                          (0, r.jsx)(g.c, { gap: 16 }),
                          (0, r.jsx)(mt, { title: "Capture Sources", toggles: u7, state: e }),
                          (0, r.jsx)(g.c, { gap: 16 }),
                          (0, r.jsx)(mt, { title: "Capture Options", toggles: me, state: e }),
                      ],
                  })
                : null,
            (0, r.jsx)(g.c, { gap: 16 }),
            (0, r.jsx)(mt, {
                title: "Preview",
                toggles: [["alwaysShowCapturePreview", "Always Show (ignore main window focus)"]],
                state: e,
            }),
            (0, r.jsx)(g.c, { gap: 16 }),
        ],
    });
}
var mn = a(77729),
    ml = a(36934);
function ms() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, s] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        i = "processing" === l.status;
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)("div", {
            className: ml.l7,
            children: [
                (0, r.jsx)(D.E, { variant: "text-lg/bold", children: "Batch Audio Processor" }),
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    children:
                        "Process wav files through the Discord audio ingest pipeline (WebRTC APM, Krisp, voice filters) and write output to wav files.",
                }),
                (0, r.jsxs)(R.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.k, {
                            fullWidth: !0,
                            value: e,
                            onChange: t,
                            placeholder: "Input directory (wav files)",
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await mn.A.fileManager.showOpenDialog({ properties: ["openDirectory"] });
                                e.length > 0 && t(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)(R.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.k, { fullWidth: !0, value: a, onChange: n, placeholder: "Output directory" }),
                        (0, r.jsx)(h.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await mn.A.fileManager.showOpenDialog({
                                    properties: ["openDirectory", "createDirectory"],
                                });
                                e.length > 0 && n(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(h.$, {
                    variant: i ? "critical-primary" : "primary",
                    text: i ? "Cancel" : "Start Processing",
                    onClick: i
                        ? function () {
                              u3.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  s((e) => ({ ...e, status: "cancelled" }));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (s({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  u3.Ay.getMediaEngine().processBatchAudioFiles(
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
                    (0, r.jsxs)(R.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(D.E, {
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
                                            className: ml.TZ,
                                            children: (0, r.jsxs)(D.E, {
                                                variant: "text-xs/normal",
                                                className: e.success ? ml.$D : ml.uL,
                                                children: [e.success ? "OK" : "FAIL", " - ", e.filename],
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                            l.log.length > 20 &&
                                (0, r.jsxs)(D.E, {
                                    variant: "text-xs/normal",
                                    children: ["...and ", l.log.length - 20, " more"],
                                }),
                        ],
                    }),
            ],
        }),
    });
}
var mi = a(207898),
    mr = a.n(mi),
    mo = a(32880),
    md = a(827343),
    mc = a(964486),
    mu = a(602674),
    mm = a(625841),
    mh = a(74848),
    mx = a(573908);
function mp(e) {
    let { recording: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(D.E, { variant: "text-sm/normal", children: ["Duration: ", t.audioBuffer.duration] }),
            (0, r.jsxs)(D.E, {
                variant: "text-sm/normal",
                children: ["Num Channels: ", t.audioBuffer.numberOfChannels],
            }),
            (0, r.jsxs)(D.E, { variant: "text-sm/normal", children: ["Sample Rate: ", t.audioBuffer.sampleRate] }),
            (0, r.jsxs)(D.E, { variant: "text-sm/normal", children: ["Noise Suppression: ", t.suppression] }),
            (0, r.jsxs)(D.E, {
                variant: "text-sm/normal",
                children: ["Krisp Suppression Level: ", t.krispSuppressionLevel],
            }),
            (0, r.jsxs)(D.E, {
                variant: "text-sm/normal",
                children: ["Echo Cancellation: ", String(t.echoCancellation)],
            }),
        ],
    });
}
function mg(e) {
    let { recording: t, playing: a, onPlay: n, onStop: l } = e;
    return (0, r.jsx)(ch.N, {
        collapsibleContent: (0, r.jsx)(mp, { recording: t }),
        children: (e) => {
            let { onClick: s } = e;
            return (0, r.jsxs)(I.D, {
                onClick: s,
                children: [
                    (0, r.jsxs)(D.E, {
                        variant: "text-sm/bold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, r.jsx)(I.D, {
                        tag: "span",
                        onClick: (e) => {
                            e.stopPropagation(), a ? l() : n(t);
                        },
                        children: a ? (0, r.jsx)(lB.E, { size: "xxs" }) : (0, r.jsx)(lF.u, { size: "xxs" }),
                    }),
                    (0, r.jsx)(I.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, n, l;
                            e.stopPropagation(),
                                (a = new Blob([mr()(t.audioBuffer)], { type: "audio/wav" })),
                                (n = URL.createObjectURL(a)),
                                ((l = document.createElement("a")).href = n),
                                (l.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                l.click(),
                                URL.revokeObjectURL(n);
                        },
                        children: (0, r.jsx)(mo.s, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function mv() {
    let { name: e } = (0, mh.x5)(u5.oh.AUDIO_INPUT),
        [t, a] = o.useState(!1),
        [n, l] = o.useState([]),
        s = (0, M.bG)([u3.Ay], () => u3.Ay.getKrispSuppressionLevel()),
        [i, c] = o.useState(null),
        u = o.useRef(null),
        m = o.useRef(null),
        [h, p] = o.useState(0.5),
        {
            krispModels: g,
            krispModelOverride: j,
            inputMode: b,
            echoCancellation: f,
            autoThreshold: y,
            vadUseKrisp: C,
            vadKrispActivationThreshold: _,
            noiseCancellation: E,
            noiseSuppression: S,
            noiseSuppressionSupported: N,
            noiseCancellationSupported: A,
            noiseCancellationEnableStats: k,
            vadDuringPreProcess: I,
        } = (0, M.cf)([u3.Ay], () => ({
            krispModels: u3.Ay.getKrispModels(),
            krispModelOverride: u3.Ay.getKrispModelOverride(),
            echoCancellation: u3.Ay.getEchoCancellation(),
            autoThreshold: u3.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: u3.Ay.getModeOptions().vadUseKrisp,
            inputMode: u3.Ay.getMode(),
            vadKrispActivationThreshold: u3.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: u3.Ay.getNoiseCancellation(),
            noiseSuppression: u3.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: u3.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: u3.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: u3.Ay.getKrispEnableStats(),
            vadDuringPreProcess: u3.Ay.getModeOptions().vadDuringPreProcess,
        })),
        T = E ? "KRISP" : S ? "STANDARD" : "NONE",
        O = (0, mu.v)(),
        w = o.useCallback(() => {
            u.current?.stop(), (u.current = null), c(null);
        }, []);
    function L() {
        u3.Ay.getMediaEngine().stopRecordingRawSamples();
    }
    function P(e) {
        if ((t && L(), w(), null == O)) return;
        let a = O.createBufferSource();
        (a.buffer = e.audioBuffer),
            (m.current = O.createGain()),
            (m.current.gain.value = h),
            a.connect(m.current),
            m.current.connect(O.destination),
            (a.loop = !0),
            a.start(),
            (u.current = a),
            c(e);
    }
    o.useEffect(() => {
        w();
    }, [w]),
        (0, mc.l0)(() => {
            md.A.setMode(u3.Ay.getMode(), { vadDuringPreProcess: null, vadKrispActivationThreshold: void 0 });
        });
    let U = [];
    return (
        A && U.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        N && U.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        U.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(d.Ip, {
            className: tT.nd,
            children: (0, r.jsxs)("div", {
                className: mx.l,
                children: [
                    (0, r.jsx)(D.E, { variant: "text-lg/bold", children: "Krisp Tester" }),
                    (0, r.jsx)(mm.U, {
                        label: "Input Device",
                        deviceType: u5.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, r.jsx)(x.l, {
                        label: "Noise Cancellation",
                        value: T,
                        onSelectionChange: (e) => {
                            md.A.setNoiseCancellation("KRISP" === e), md.A.setNoiseSuppression("STANDARD" === e);
                        },
                        options: U,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === T &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(cz.A, {
                                    label: "Krisp Suppression Level",
                                    initialValue: s,
                                    onValueChange: md.A.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, r.jsx)(x.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: j,
                                    options: g.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        md.A.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(v.d, {
                                    label: "Enable Stats",
                                    checked: k,
                                    onChange: (e) => md.A.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    b === u5.TB.VOICE_ACTIVITY &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(v.d, {
                                    label: "Auto Threshold",
                                    checked: y,
                                    onChange: (e) => md.A.setMode(u5.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                y &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(v.d, {
                                                label: "Use Krisp VAD",
                                                checked: C,
                                                onChange: (e) => md.A.setMode(u5.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            C &&
                                                (0, r.jsx)(cz.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: _,
                                                    onValueChange: (e) =>
                                                        md.A.setMode(u5.TB.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                }),
                                        ],
                                    }),
                                (0, r.jsx)(v.d, {
                                    label: "Run Before Processing",
                                    checked: I ?? !1,
                                    onChange: (e) => md.A.setMode(u5.TB.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(v.d, {
                        label: "Echo Cancellation",
                        checked: f,
                        onChange: (e) => md.A.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)(R.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(na.$n, {
                                color: t ? na.$n.Colors.RED : na.$n.Colors.BRAND,
                                onClick: t
                                    ? L
                                    : function () {
                                          w(),
                                              a(!0),
                                              md.A.setLoopback("krisp_test", !0),
                                              u3.Ay.getMediaEngine().startRecordingRawSamples((t, n, i) => {
                                                  a(!1), md.A.setLoopback("krisp_test", !1);
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
                                                          suppression: T,
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
                    (0, r.jsx)(cz.A, {
                        label: "Volume",
                        initialValue: h,
                        asValueChanges: function (e) {
                            null != m.current && ((m.current.gain.value = e), p(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, r.jsxs)(R.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Recordings" }),
                            n.map((e, t) =>
                                (0, r.jsx)(mg, { recording: e, playing: e === i, onPlay: P, onStop: w }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var mj = a(742158),
    mb = a(717558),
    mf = a(85448),
    my = a(763827),
    mC = a(977997),
    m_ = a(647160);
let mE = [
    { value: "line", label: "Line" },
    { value: "arc", label: "Arc" },
    { value: "grid", label: "Grid" },
    { value: "manual", label: "Manual" },
];
function mS(e, t) {
    let a = t / 2;
    return { x: a + (e.x / 7) * a, y: a + (e.z / 7) * a };
}
function mN(e, t) {
    let a = 7 / t,
        n = e / 2;
    return { zoom: a, pan: { x: n * (1 - a), y: n - n * (1 - t / 14) * a } };
}
function mA(e) {
    let {
            mode: t,
            computedPositions: a,
            otherUsers: n,
            distance: l,
            view: s,
            setView: i,
            canvasSize: d,
            setCanvasSize: c,
        } = e,
        u = o.useRef(null),
        m = o.useRef(null),
        [h, x] = o.useState(new Map()),
        [p, g] = o.useState(null),
        [v, j] = o.useState(!1);
    (0, mc.u5)(() => {
        let e = u.current;
        if (null == e) return;
        let t = !0,
            a = new ResizeObserver((e) => {
                let a = Math.floor(e[0].contentRect.width);
                a <= 0 || (t && ((t = !1), i(mN(a, l))), c(a));
            });
        return a.observe(e), () => a.disconnect();
    }),
        o.useEffect(() => {
            let e = u.current;
            if (null == e) return;
            let t = (t) => {
                t.preventDefault();
                let a = e.getBoundingClientRect(),
                    n = t.clientX - a.left,
                    l = t.clientY - a.top;
                i((e) => {
                    let { zoom: a, pan: s } = e,
                        i = Math.max(mk, Math.min(mI, a * Math.exp(-t.deltaY * mD))),
                        r = i / a;
                    return { zoom: i, pan: { x: n - (n - s.x) * r, y: l - (l - s.y) * r } };
                });
            };
            return e.addEventListener("wheel", t, { passive: !1 }), () => e.removeEventListener("wheel", t);
        }, [i]);
    let b = o.useMemo(() => {
        let e = new Map();
        if (0 === d) return e;
        if ("manual" === t)
            for (let t of n) {
                let a = h.get(t.userId);
                null != a && e.set(t.userId, a);
            }
        else
            n.forEach((t, n) => {
                n < a.length && e.set(t.userId, mS(a[n], d));
            });
        return e;
    }, [t, n, a, h, d]);
    o.useEffect(() => {
        if ("manual" === t || 0 === d) return;
        let e = new Map();
        n.forEach((t, n) => {
            n < a.length && e.set(t.userId, mS(a[n], d));
        }),
            x(e);
    }, [t, n, a, d]),
        o.useEffect(() => {
            let e = m.current;
            if (null == e || 0 === d) return;
            let t = e.getContext("2d");
            if (null != t) {
                t.setTransform(1, 0, 0, 1, 0, 0),
                    t.clearRect(0, 0, d, d),
                    (t.fillStyle = "#1e1f22"),
                    t.fillRect(0, 0, d, d),
                    t.setTransform(s.zoom, 0, 0, s.zoom, s.pan.x, s.pan.y),
                    (t.strokeStyle = "#2b2d31"),
                    (t.lineWidth = 1 / s.zoom);
                for (let e = 0; e <= 10; e++) {
                    let a = (e * d) / 10;
                    t.beginPath(),
                        t.moveTo(a, 0),
                        t.lineTo(a, d),
                        t.stroke(),
                        t.beginPath(),
                        t.moveTo(0, a),
                        t.lineTo(d, a),
                        t.stroke();
                }
                (t.fillStyle = "#23a559"),
                    t.beginPath(),
                    t.arc(d / 2, d / 2, 10 / s.zoom, 0, 2 * Math.PI),
                    t.fill(),
                    (t.fillStyle = "#ffffff"),
                    (t.font = `bold ${11 / s.zoom}px sans-serif`),
                    (t.textAlign = "center"),
                    t.fillText("You", d / 2, d / 2 - 16 / s.zoom);
            }
        }, [d, s]);
    let f = o.useCallback(
            (e, a) => {
                "manual" === t && 0 === e.button && g(a);
            },
            [t],
        ),
        y = o.useCallback((e) => {
            2 === e.button && j(!0);
        }, []),
        C = o.useCallback(
            (e) => {
                let t;
                if (v)
                    return void i((t) => ({
                        zoom: t.zoom,
                        pan: { x: t.pan.x + e.movementX, y: t.pan.y + e.movementY },
                    }));
                if (null == p) return;
                let a = m.current;
                if (null == a || 0 === d) return;
                let n = a.getBoundingClientRect(),
                    l = (e.clientX - n.left - s.pan.x) / s.zoom,
                    r = (e.clientY - n.top - s.pan.y) / s.zoom;
                x((e) => new Map(e).set(p, { x: l, y: r }));
                let o = { x: ((l - (t = d / 2)) / t) * 7, y: 0, z: ((r - t) / t) * 7 };
                u3.Ay.getMediaEngine().eachConnection((e) => {
                    e.setUserPosition(p, o);
                });
            },
            [v, p, d, s.pan.x, s.pan.y, s.zoom, i],
        ),
        _ = o.useCallback(() => {
            g(null), j(!1);
        }, []),
        E = v ? "grabbing" : "default";
    return (0, r.jsxs)("div", {
        ref: u,
        className: m_.BW,
        style: { cursor: E },
        onMouseDown: y,
        onMouseMove: C,
        onMouseUp: _,
        onMouseLeave: _,
        onContextMenu: (e) => e.preventDefault(),
        children: [
            (0, r.jsx)("canvas", { ref: m, width: d, height: d, className: m_.Ji }),
            n.map((e) => {
                let a = b.get(e.userId);
                return null == a
                    ? null
                    : (0, r.jsx)(
                          mT,
                          {
                              userId: e.userId,
                              x: a.x * s.zoom + s.pan.x,
                              y: a.y * s.zoom + s.pan.y,
                              draggable: "manual" === t,
                              onMouseDown: f,
                          },
                          e.userId,
                      );
            }),
        ],
    });
}
let mk = 0.25,
    mI = 4,
    mD = 0.002;
function mT(e) {
    let { userId: t, x: a, y: n, draggable: l, onMouseDown: s } = e,
        i = (0, M.bG)([H.default], () => H.default.getUser(t)),
        o = (0, mb.A)({ userId: t });
    return null == i
        ? null
        : (0, r.jsx)(lU.m, {
              text: i.username,
              children: (0, r.jsx)("div", {
                  className: m_.my,
                  style: { left: a - 12, top: n - 12, cursor: l ? "grab" : "default" },
                  onMouseDown: (e) => s(e, t),
                  children: (0, r.jsx)(mf.A, {
                      userId: t,
                      size: rC._3.SIZE_24,
                      src: i.getAvatarURL(void 0, 24),
                      speaking: o,
                      ringing: !1,
                  }),
              }),
          });
}
function mR() {
    return u3.Ay.getMediaEngine().supports(u5.O5.SPATIAL_AUDIO)
        ? (0, r.jsx)(mO, {})
        : (0, r.jsx)(d.Ip, {
              className: tT.nd,
              children: (0, r.jsxs)("div", {
                  className: m_.kL,
                  children: [
                      (0, r.jsx)(w.D, { variant: "heading-lg/semibold", className: m_.R_, children: "Spatial Audio" }),
                      (0, r.jsx)(D.E, {
                          variant: "text-md/normal",
                          children: "Spatial audio is not supported by this client. Update Discord to enable.",
                      }),
                  ],
              }),
          });
}
function mO() {
    let e = (0, M.bG)([u3.Ay], () => u3.Ay.getAudioMixerSettings()),
        t = rR.x.DEFAULT,
        [a, n] = o.useState({ zoom: 1, pan: { x: 0, y: 0 } }),
        [l, s] = o.useState(0),
        i = (0, M.bG)([my.A, ad.A], () => {
            let e = my.A.getChannelId();
            return null != e ? ad.A.getChannel(e) : null;
        }),
        c = nx.default.getId(),
        u = i?.id,
        m = (0, M.yK)(
            [mC.A],
            () => (null == u ? [] : Object.values(mC.A.getVoiceStatesForChannel(u)).filter((e) => e.userId !== c)),
            [u, c],
        ),
        x = e.mode ?? "line",
        p = o.useMemo(
            () =>
                "manual" !== x
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
                      })(x, e, m.length)
                    : [],
            [x, e, m.length],
        );
    o.useEffect(() => {
        "manual" === x ||
            u3.Ay.getMediaEngine().eachConnection((e) => {
                m.forEach((t, a) => {
                    a < p.length && e.setUserPosition(t.userId, p[a]);
                });
            });
    }, [x, p, m]);
    let j = o.useCallback(
            (a) => {
                md.A.setAudioMixerSettings({ ...e, ...a }, t);
            },
            [e, t],
        ),
        b = o.useRef(null),
        f = o.useCallback(
            (e) => {
                null !== b.current && clearTimeout(b.current),
                    (b.current = window.setTimeout(() => {
                        j({ roomSize: e }), (b.current = null);
                    }, 500));
            },
            [j],
        );
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)("div", {
            className: m_.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: m_.ne,
                    children: [
                        (0, r.jsx)(w.D, {
                            variant: "heading-lg/semibold",
                            className: m_.R_,
                            children: "Spatial Audio",
                        }),
                        (0, r.jsxs)("div", {
                            className: m_.nM,
                            children: [
                                (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Enabled" }),
                                (0, r.jsx)(v.d, { checked: e.enabled, onChange: (e) => j({ enabled: e }) }),
                            ],
                        }),
                        (0, r.jsx)(g.c, { className: m_.yF }),
                        (0, r.jsx)(mj.z, { className: m_.Pf, children: "Spatial Blend" }),
                        (0, r.jsx)(cz.A, {
                            className: m_.aw,
                            initialValue: e.spatialBlend,
                            value: e.spatialBlend,
                            minValue: 0,
                            maxValue: 1,
                            asValueChanges: (e) => j({ spatialBlend: e }),
                            onValueRender: (e) => e.toFixed(2),
                        }),
                        (0, r.jsx)(mj.z, { className: m_.Pf, children: "Room Size (m\xb2)" }),
                        (0, r.jsx)(cz.A, {
                            className: m_.aw,
                            initialValue: e.roomSize ?? 25,
                            value: e.roomSize ?? 25,
                            minValue: 10,
                            maxValue: 150,
                            asValueChanges: f,
                            onValueRender: (e) => e.toFixed(0),
                        }),
                        (0, r.jsx)(g.c, { className: m_.yF }),
                        (0, r.jsx)(mj.z, { className: m_.Pf, children: "Placement Mode" }),
                        (0, r.jsx)("div", {
                            className: m_.XU,
                            children: mE.map((t) => {
                                let { value: a, label: s } = t;
                                return (0, r.jsx)(
                                    "button",
                                    {
                                        className: `${m_._V} ${x === a ? m_.cB : ""}`,
                                        onClick: () => {
                                            j({ mode: a }), l > 0 && n(mN(l, e.distance));
                                        },
                                        children: s,
                                    },
                                    a,
                                );
                            }),
                        }),
                        "manual" !== x &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(mj.z, { className: m_.Pf, children: "Distance" }),
                                    (0, r.jsx)(cz.A, {
                                        className: m_.aw,
                                        initialValue: e.distance,
                                        value: e.distance,
                                        minValue: 1,
                                        maxValue: 10,
                                        asValueChanges: (e) => j({ distance: e }),
                                        onValueRender: (e) => e.toFixed(1),
                                    }),
                                ],
                            }),
                        "line" === x &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(mj.z, { className: m_.Pf, children: "Spread" }),
                                    (0, r.jsx)(cz.A, {
                                        className: m_.aw,
                                        initialValue: e.spread,
                                        value: e.spread,
                                        minValue: 0,
                                        maxValue: 10,
                                        asValueChanges: (e) => j({ spread: e }),
                                        onValueRender: (e) => e.toFixed(1),
                                    }),
                                ],
                            }),
                        "arc" === x &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(mj.z, { className: m_.Pf, children: "Arc Angle" }),
                                    (0, r.jsx)(cz.A, {
                                        className: m_.aw,
                                        initialValue: e.arcAngle ?? 180,
                                        value: e.arcAngle ?? 180,
                                        minValue: 0,
                                        maxValue: 180,
                                        asValueChanges: (e) => j({ arcAngle: e }),
                                        onValueRender: (e) => `${e.toFixed(0)}\xb0`,
                                    }),
                                ],
                            }),
                        "grid" === x &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(mj.z, { className: m_.Pf, children: "Columns" }),
                                    (0, r.jsx)(cz.A, {
                                        className: m_.aw,
                                        initialValue: e.gridColumns ?? 3,
                                        value: e.gridColumns ?? 3,
                                        minValue: 2,
                                        maxValue: 6,
                                        keyboardStep: 1,
                                        asValueChanges: (e) => j({ gridColumns: Math.round(e) }),
                                        onValueRender: (e) => e.toFixed(0),
                                    }),
                                    (0, r.jsx)(mj.z, { className: m_.Pf, children: "Spacing (m)" }),
                                    (0, r.jsx)(cz.A, {
                                        className: m_.aw,
                                        initialValue: e.gridSpacing ?? 1.5,
                                        value: e.gridSpacing ?? 1.5,
                                        minValue: 0.5,
                                        maxValue: 3,
                                        asValueChanges: (e) => j({ gridSpacing: e }),
                                        onValueRender: (e) => e.toFixed(1),
                                    }),
                                ],
                            }),
                        (0, r.jsx)(g.c, { className: m_.yF }),
                        (0, r.jsx)(h.$, {
                            variant: "secondary",
                            size: "sm",
                            text: "Reset to Defaults",
                            onClick: () => {
                                let a = { ...u3.bY, enabled: e.enabled };
                                md.A.setAudioMixerSettings(a, t), l > 0 && n(mN(l, a.distance));
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(mA, {
                    mode: x,
                    computedPositions: p,
                    otherUsers: m,
                    distance: e.distance,
                    view: a,
                    setView: n,
                    canvasSize: l,
                    setCanvasSize: s,
                }),
            ],
        }),
    });
}
var mw = a(803306),
    mM = a(243217),
    mL = a(189213),
    mP = a(935208),
    mU = a(878784);
let mG = [
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
function mF() {
    let [e, t] = o.useState(!1),
        a = (0, M.bG)([H.default], () => H.default.getCurrentUser()),
        n = (0, mU.Lh)(),
        l = (0, M.bG)([rL.A], () => rL.A.getPremiumTypeSubscription()),
        s = null != n ? (sa.VD[n]?.tenureReqNumMonths ?? 0) : 0,
        i = o.useCallback(
            async (e) => {
                let n = new Date();
                e > 0 ? n.setMonth(n.getMonth() - e) : n.setDate(n.getDate() - 7), n.setDate(n.getDate() - 2);
                let s = {
                    subscription_status: J.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: mP.default.fromTimestamp(n.getTime()),
                };
                t(!0),
                    await nH.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: s, rejectWithError: !1 }),
                    await (0, mw.eO)(a.id),
                    await (0, dt.hP)(),
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
            options: mG,
            onSelectionChange: i,
        });
}
var mB =
        (((l = {})[(l.DEFAULT = 0)] = "DEFAULT"),
        (l[(l.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (l[(l.FAILURE = 2)] = "FAILURE"),
        (l[(l.NONE = 3)] = "NONE"),
        l),
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
async function m$(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: n, paymentType: l, sendReminderEmail: s } = a;
    return (
        await nH.Bo.post({
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
var mW = a(601107);
let mz = {
        [J.Dmq.UNPAID]: "Unpaid",
        [J.Dmq.ACTIVE]: "Active",
        [J.Dmq.PAST_DUE]: "Past Due",
        [J.Dmq.CANCELED]: "Canceled",
        [J.Dmq.ENDED]: "Ended",
        [J.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [J.Dmq.BILLING_RETRY]: "Billing Retry",
        [J.Dmq.PAUSED]: "Paused",
        [J.Dmq.PAUSE_PENDING]: "Pause Pending",
    },
    mH = {
        [mW.qf.UNKNOWN]: "Unknown",
        [mW.qf.ADMIN]: "Admin",
        [mW.qf.USER]: "User",
        [mW.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [mW.qf.DEFERRED_START]: "Deferred Start",
        [mW.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    mK = [
        { id: "unpaid", label: "Unpaid", value: J.Dmq.UNPAID },
        { id: "active", label: "Active", value: J.Dmq.ACTIVE },
        { id: "pastDue", label: "Past Due", value: J.Dmq.PAST_DUE },
        { id: "canceled", label: "Canceled", value: J.Dmq.CANCELED },
        { id: "ended", label: "Ended", value: J.Dmq.ENDED },
        { id: "accountHold", label: "Account Hold", value: J.Dmq.ACCOUNT_HOLD },
        { id: "billingRetry", label: "Billing Retry", value: J.Dmq.BILLING_RETRY },
        { id: "paused", label: "Paused", value: J.Dmq.PAUSED },
        { id: "pausePending", label: "Pause Pending", value: J.Dmq.PAUSE_PENDING },
    ];
function mY(e) {
    let { subscription: t, onClose: a, onUpdated: n, transitionState: l } = e,
        [s, i] = o.useState(nt()()),
        [d, c] = o.useState(nt()().format("HH:mm")),
        [m, h] = o.useState(!1),
        [x, p] = o.useState(void 0),
        g = async () => {
            if (null == s) return void p("Please select a target date");
            let [e, l] = d.split(":").map(Number),
                i = s.clone().hours(e).minutes(l).seconds(0).milliseconds(0);
            h(!0), p(void 0);
            try {
                await m$(t.id, mV.TIME_TRAVEL, { targetDate: i, paymentType: mB.DEFAULT, sendReminderEmail: !1 }),
                    n(),
                    a();
            } catch (e) {
                p(e.body?.message || e.message || "Failed to time travel");
            } finally {
                h(!1);
            }
        };
    return (0, r.jsx)(mL.Modal, {
        transitionState: l,
        onClose: () => (a(), Promise.resolve()),
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: a },
            { text: "Time Travel", variant: "primary", onClick: g, disabled: m || null == s },
        ],
        children: (0, r.jsxs)(R.B, {
            gap: 16,
            children: [
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, r.jsx)(s7.J, { label: "Target Date", value: s, onSelect: i }),
                (0, r.jsx)(u.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, r.jsx)("input", {
                        type: "time",
                        value: d,
                        onChange: (e) => {
                            c(e.target.value);
                        },
                        className: r6.Qn,
                    }),
                }),
                (0, r.jsxs)(R.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(D.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, r.jsxs)(R.B, {
                            gap: 4,
                            children: [
                                (0, r.jsxs)(D.E, {
                                    variant: "text-xs/normal",
                                    className: r6.JX,
                                    children: ["Start: ", nt()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(D.E, {
                                    variant: "text-xs/normal",
                                    className: r6.JX,
                                    children: ["End: ", nt()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != x && (0, r.jsx)(T.w, { type: "critical", children: x }),
            ],
        }),
    });
}
function mq(e) {
    var t;
    let a,
        { subscription: n, onUpdated: l } = e,
        [s, i] = o.useState(!1),
        [d, c] = o.useState(!1),
        [m, p] = o.useState(!1),
        [g, v] = o.useState(!1),
        [j, b] = o.useState(null),
        f = (e) => {
            let t = new Date(e);
            return mP.default.fromTimestamp(t.getTime());
        },
        y = async (e) => {
            let { status: t = n.status, premiumStreakStart: a, endedAt: s } = e,
                i = {
                    subscription_status: t,
                    ...(null != a ? { premium_streak_started_at: f(a) } : null),
                    ...(null != s ? { ended_at: f(s) } : null),
                };
            await nH.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: i, rejectWithError: !1 }), l();
        },
        C = async () => {
            try {
                await m$(n.id, mV.RENEW, {
                    targetDate: nt()(new Date()),
                    paymentType: mB.DEFAULT,
                    sendReminderEmail: !1,
                });
            } catch (e) {
                b(e.body?.message || e.message || "Failed to renew subscription");
            }
            l();
        },
        _ = sa.hd[n.planIdFromItems]?.premiumType === sa.PremiumTypes.TIER_0,
        E = n.metadata?.ended_at,
        S = null != E ? new Date(E).toISOString().substring(0, 10) : "",
        N = [
            { id: "id", label: `ID: ${n.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = n.status), t in mz) ? mz[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        A = n.hasActiveTrial,
        O = n.metadata?.active_discount_id != null;
    return (
        A && N.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        O && N.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        n.status !== J.Dmq.ACTIVE &&
            N.push({
                id: "dates",
                label: `Dates: ${(0, nm.i$)(n.createdAt, "LL")} - ${(0, nm.i$)(n.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        n.status === J.Dmq.PAUSED &&
            N.push({
                id: "pause-reason",
                label: `Pause Reason: ${n.pauseReason in mH ? mH[n.pauseReason] : `Unknown pause reason ${n.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: k()(sd.Nr, _ ? sd.Qf : sd.C1),
            children: (0, r.jsxs)(u.n, {
                label: `Type: ${null == ((a = n.planIdFromItems)) ? "No plan id" : a in sa.hd ? sa.hd[a].name : `Unknown plan id ${a}`}`,
                className: r6.lI,
                children: [
                    (0, r.jsx)(r2.C, {
                        items: N,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    A &&
                        (0, r.jsxs)("div", {
                            className: r6.VK,
                            children: [
                                (0, r.jsxs)(I.D, {
                                    onClick: () => {
                                        p(!m);
                                    },
                                    className: r6.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(D.E, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, r.jsx)(se.A, { direction: m ? se.A.Directions.UP : se.A.Directions.DOWN }),
                                    ],
                                }),
                                m &&
                                    (0, r.jsxs)("ul", {
                                        className: r6.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(D.E, { variant: "text-md/bold", children: "trial_id" }),
                                                    (0, r.jsx)(D.E, { variant: "text-sm/normal", children: n.trialId }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/bold",
                                                        children: "trial_ends_at",
                                                    }),
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            null != n.trialEndsAt
                                                                ? (0, nm.i$)(n.trialEndsAt, "LL")
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
                            className: r6.VK,
                            children: [
                                (0, r.jsxs)(I.D, {
                                    onClick: () => {
                                        v(!g);
                                    },
                                    className: r6.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(D.E, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, r.jsx)(se.A, { direction: g ? se.A.Directions.UP : se.A.Directions.DOWN }),
                                    ],
                                }),
                                g &&
                                    (0, r.jsxs)("ul", {
                                        className: r6.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-sm/normal",
                                                        children: n.metadata?.active_discount_id,
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_expires_at",
                                                    }),
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            n.metadata?.active_discount_expires_at != null
                                                                ? (0, nm.i$)(
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
                            className: r6.VK,
                            children: [
                                (0, r.jsxs)(I.D, {
                                    onClick: () => {
                                        i(!s);
                                    },
                                    className: r6.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(D.E, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, r.jsx)(se.A, { direction: s ? se.A.Directions.UP : se.A.Directions.DOWN }),
                                    ],
                                }),
                                s &&
                                    (0, r.jsx)("ul", {
                                        className: r6.j3,
                                        children: Object.entries(n.metadata).map((e) => {
                                            let [t, a] = e;
                                            return (0, r.jsxs)(
                                                "li",
                                                {
                                                    children: [
                                                        (0, r.jsx)(D.E, { variant: "text-md/bold", children: t }),
                                                        (0, r.jsx)(D.E, { variant: "text-sm/normal", children: a }),
                                                    ],
                                                },
                                                t,
                                            );
                                        }),
                                    }),
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: r6.VK,
                        children: [
                            (0, r.jsxs)(I.D, {
                                onClick: () => {
                                    c(!d);
                                },
                                className: r6.Eh,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(D.E, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, r.jsx)(se.A, { direction: d ? se.A.Directions.UP : se.A.Directions.DOWN }),
                                ],
                            }),
                            d &&
                                (0, r.jsxs)(R.B, {
                                    gap: 24,
                                    children: [
                                        (0, r.jsx)(x.l, {
                                            label: "Status",
                                            value: n.status,
                                            options: mK,
                                            onSelectionChange: (e) => {
                                                y({ status: e });
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsxs)(R.B, {
                                                    gap: 12,
                                                    children: [
                                                        (0, r.jsx)(h.$, {
                                                            variant: "primary",
                                                            size: "sm",
                                                            text: "Renew Subscription",
                                                            onClick: (e) => C(),
                                                        }),
                                                        (0, r.jsx)(h.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, eR.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, r.jsx)(mY, {
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
                                                        className: r6.z3,
                                                        children: (0, r.jsx)(T.w, { type: "critical", children: j }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)(R.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(s7.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: nt()(n.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => y({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(mF, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(s7.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== S ? nt()(S) : void 0,
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
let mJ = async () =>
        (
            await nH.Bo.get({
                url: J.Rsh.BILLING_SUBSCRIPTIONS,
                query: { include_inactive: !0, limit: 5 },
                rejectWithError: !1,
            })
        ).body.map((e) => mM.A.createFromServer(e)),
    mQ = [
        { id: "nitro-monthly", label: "Nitro Monthly", value: sa.gD.PREMIUM_MONTH_TIER_2 },
        { id: "nitro-yearly", label: "Nitro Yearly", value: sa.gD.PREMIUM_YEAR_TIER_2 },
        { id: "nitro-classic-monthly", label: "Nitro Classic Monthly", value: sa.gD.PREMIUM_MONTH_TIER_1 },
        { id: "nitro-classic-yearly", label: "Nitro Classic Yearly", value: sa.gD.PREMIUM_YEAR_TIER_1 },
        { id: "basic-monthly", label: "Basic Monthly", value: sa.gD.PREMIUM_MONTH_TIER_0 },
        { id: "basic-yearly", label: "Basic Yearly", value: sa.gD.PREMIUM_YEAR_TIER_0 },
        { id: "reverse-trial-1week", label: "Reverse Trial 1-week", value: sa.gd },
        { id: "reverse-trial-2week", label: "Reverse Trial 2-week", value: sa.Uk },
        { id: "nitro-squad-monthly", label: "Nitro Squad Monthly", value: sa.gD.PREMIUM_GROUP_MONTH },
    ];
function mX() {
    let e = (0, M.bG)([rL.A], () => rL.A.getPremiumTypeSubscription()),
        t = (0, M.bG)([H.default], () => H.default.getCurrentUser()),
        [a, n] = o.useState("511651880837840896"),
        [l, s] = o.useState([]),
        [i, c] = o.useState(!1),
        u = o.useCallback(async () => {
            try {
                c(!0), await (0, dt.hP)(), await (0, mw.eO)(t.id), s(await mJ());
            } finally {
                c(!1);
            }
        }, [t]);
    o.useEffect(() => {
        u();
    }, [u]);
    let m = o.useMemo(() => l.filter((e) => e.status !== J.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [l]),
        p = async () => {
            await nH.Bo.post({ url: "/debug/subscription", body: { plan_id: a }, rejectWithError: !1 }), await u();
        },
        g = async () => {
            await nH.Bo.del({ url: "/debug/subscription", rejectWithError: !1 }), await u();
        };
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)("div", {
            className: sd.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: sd.dL,
                    children: [
                        (0, r.jsx)(w.D, {
                            variant: "heading-lg/semibold",
                            className: tT.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, r.jsx)(eI.K, {
                            "aria-label": "Refresh",
                            icon: l7.f,
                            size: "sm",
                            variant: "icon-only",
                            disabled: i,
                            onClick: u,
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: k()([sd.uW, sd.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(x.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: mQ,
                                    onSelectionChange: n,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Create Subscription",
                                    onClick: p,
                                }),
                            ],
                        }),
                }),
                null != e && (0, r.jsx)(mq, { subscription: e, onUpdated: u }),
                (0, r.jsx)(w.D, { variant: "heading-lg/semibold", className: tT.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: k()([sd.uW, sd.Uo]),
                    children: (0, r.jsx)(h.$, {
                        variant: "primary",
                        size: "sm",
                        text: "End All Subscriptions",
                        onClick: g,
                    }),
                }),
                m.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(w.D, {
                                variant: "heading-lg/semibold",
                                className: tT.wx,
                                children: "Previous Subscriptions",
                            }),
                            m.map((e) => (0, r.jsx)(mq, { subscription: e, onUpdated: u }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var mZ = a(284009),
    m0 = a.n(mZ),
    m1 = a(889137),
    m2 = a(412703),
    m8 = a(440703),
    m6 = a(267548),
    m3 = a(668824),
    m5 = a(695366),
    m4 = a(359778),
    m9 = a(507107),
    m7 = a(801365),
    he = a(792620),
    ht = a(241124),
    ha = a(732047),
    hn = a(717695),
    hl = a(961974),
    hs = a(127219),
    hi = a(262514),
    hr = a(291922),
    ho = a(317097),
    hd = a(452027),
    hc = a(922016),
    hu = a(714385),
    hm = a(359923);
let hh = function (e) {
    let { colorKey: t, value: a, onChange: n, title: l } = e,
        s = o.useRef(null);
    return (0, r.jsx)(hd.D, {
        label: l,
        children: (0, r.jsx)(hc.Y, {
            targetElementRef: s,
            renderPopout: (e) => (0, r.jsx)(cx.VN, { ...e, value: a, onChange: (e) => n(t, (0, ho.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(I.D, {
                    ...e,
                    innerRef: s,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: hm.O6,
                    style: { backgroundColor: a },
                    children: (0, r.jsx)(hu.d, { size: "xs", color: "currentColor", className: hm.WY }),
                }),
        }),
    });
};
var hx = a(247928);
let hp = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: n = !1 } = e;
    return (0, r.jsx)(hx.M, {
        children: (0, r.jsx)(m4.Z, {
            className: k()(hm.Rx, { [hm.aK]: n }),
            outline: n,
            children: (0, r.jsx)("div", {
                className: hm.AZ,
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
var hg = a(643374);
let hv = function (e) {
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
            (0, r.jsx)(hd.D, {
                label: s,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, r.jsx)(hg.A, {
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
    hj = function (e) {
        let { assetKey: t, initialValue: a, onMessageChange: n, title: l } = e,
            [s, i] = o.useState("");
        return (
            o.useEffect(() => {
                i(a ?? "");
            }, [a]),
            (0, r.jsx)(p.k, {
                label: l,
                value: s,
                onChange: function (e) {
                    i(e), n(t, e);
                },
            })
        );
    };
var hb = a(31587);
let hf = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: n } = (0, hb.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
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
var hy = a(843282),
    hC = a(972886);
let h_ = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    hE = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: n } = e;
        return (0, r.jsxs)(R.B, {
            gap: 20,
            children: [
                (0, r.jsx)(hy.Pw, {
                    label: "Task Type(s)",
                    className: hC.Z,
                    placeholder: "Select Task Preset",
                    options: h_,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, l, s, i, r;
                        return (
                            e ===
                            ((t = n.tasks),
                            (a = m2.n.PLAY_ON_PLAYSTATION in t || m2.n.PLAY_ON_XBOX in t),
                            (l = m2.n.PLAY_ON_DESKTOP in t),
                            (s = m2.n.STREAM_ON_DESKTOP in t),
                            (i = m2.n.WATCH_VIDEO in t),
                            (r = m2.n.PLAY_ACTIVITY in t),
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
                                        a[m2.n.STREAM_ON_DESKTOP] = { type: m2.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[m2.n.PLAY_ON_DESKTOP] = { type: m2.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        (a[m2.n.PLAY_ON_PLAYSTATION] = {
                                            type: m2.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[m2.n.PLAY_ON_XBOX] = {
                                                type: m2.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 4:
                                        (a[m2.n.PLAY_ON_DESKTOP] = { type: m2.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[m2.n.PLAY_ON_PLAYSTATION] = {
                                                type: m2.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[m2.n.PLAY_ON_XBOX] = {
                                                type: m2.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 2:
                                        a[m2.n.WATCH_VIDEO] = {
                                            type: m2.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[m2.n.PLAY_ACTIVITY] = { type: m2.n.PLAY_ACTIVITY, target: t };
                                }
                                return a;
                            })(e, a),
                        });
                    },
                    serialize: String,
                    "data-migration-pending": !0,
                }),
                (0, r.jsx)(p.k, {
                    label: "Task Duration",
                    value: String(a / nY.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= nY.A.Seconds.MINUTE;
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
var hS = a(818348);
let hN = function () {
    let e = (0, ee.Ay)();
    return (0, r.jsx)(hd.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(et.zy, {
                    theme: hS.NJ.LIGHT,
                    isSelected: e === hS.NJ.LIGHT,
                    onSelect: () => (0, ce.u_)({ theme: hS.NJ.LIGHT }),
                }),
                (0, r.jsx)(et.zy, {
                    theme: hS.NJ.DARK,
                    isSelected: e === hS.NJ.DARK,
                    onSelect: () => (0, ce.u_)({ theme: hS.NJ.DARK }),
                }),
            ],
        }),
    });
};
var hA =
    (((i = {})[(i.UNENROLLED = 0)] = "UNENROLLED"),
    (i[(i.ENROLLED = 1)] = "ENROLLED"),
    (i[(i.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (i[(i.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (i[(i.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (i[(i.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (i[(i.CLAIMED = 6)] = "CLAIMED"),
    i);
let hk = function (e) {
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
var hI = a(617986);
let hD = ["png", "gif", "webp"],
    hT = [...hD, "jpg", "jpeg"],
    hR = Array.from(new Set([...hT, "gif", "mp4", "webm"]));
function hO() {
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
let hw = "1193992107035983872",
    hM = {
        id: hw,
        preview: !0,
        config: {
            id: hw,
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
                joinOperator: m3.K.AND,
                tasks: { [m2.n.PLAY_ON_DESKTOP]: { type: m2.n.PLAY_ON_DESKTOP, target: 300 } },
            },
            features: [],
            sharePolicy: m6.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function hL() {
    var e;
    let [t, n] = o.useState(hM),
        l = o.useCallback((e) => {
            n({ ...e, preview: !0 });
        }, []),
        [s, i] = o.useState(hA.UNENROLLED),
        [c, u] = o.useState(!1),
        [m, x] = o.useState(!1),
        [p, g] = o.useState(null),
        j =
            ((e = t.config),
            (0, m1.YW)(e)
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
                    (0, m1.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function f(e, a) {
        let n = t.config.taskConfigV2.tasks,
            s = n[m2.n.WATCH_VIDEO];
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
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...n, [m2.n.WATCH_VIDEO]: { ...s, assets: i } } },
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
                    (0, m1.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, messages: { ...e.messages, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function C(e, a, n) {
        if ("name" === e || "nameWithArticle" === e) {
            var s, i;
            l({
                ...t,
                config:
                    ((s = t.config),
                    (i = { [e]: a }),
                    (0, m1.YW)(s)
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
    function _(e, a) {
        l({ ...t, config: { ...t.config, colors: { ...t.config.colors, [e]: a } } });
    }
    function E() {
        (0, m7.tU)(t.config) && (0, hI.hJ)(t, m9.uF.GIFT_INVENTORY_FOR_YOU, m9.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let S = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * nY.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        N = o.useMemo(() => m2.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    m0()(!1 !== t.preview && null != t.preview, "Preview config must have property preview: true");
    let A = t.config.taskConfigV2.tasks[m2.n.WATCH_VIDEO];
    return (0, r.jsxs)(d.Ip, {
        className: hm.kL,
        children: [
            (0, r.jsx)(w.D, { variant: "heading-lg/bold", className: hm.R_, children: "Quest Preview Tool" }),
            (0, r.jsx)("div", {
                className: hm.OA,
                children: (0, r.jsx)(hf, {
                    onSelect: function (e) {
                        g(e),
                            null == e ||
                                (i(
                                    (function (e) {
                                        if (null == e.userStatus) return hA.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return hA.CLAIMED;
                                        if (null != e.userStatus.completedAt) return hA.COMPLETED_100;
                                        let t = (0, he.Yh)(e),
                                            a = t.progressSeconds,
                                            n = t.targetSeconds;
                                        return a / n >= 1
                                            ? hA.COMPLETED_100
                                            : a / n >= 0.75
                                              ? hA.COMPLETED_75
                                              : a / n >= 0.5
                                                ? hA.COMPLETED_50
                                                : a / n >= 0.25
                                                  ? hA.COMPLETED_25
                                                  : hA.ENROLLED;
                                    })(e),
                                ),
                                l(e));
                    },
                    quest: p,
                }),
            }),
            (0, r.jsx)(w.D, { variant: "heading-md/semibold", className: hm.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: hm.OA,
                children: (0, r.jsx)(hE, {
                    taskDuration: S,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        l({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)(w.D, { variant: "heading-md/semibold", className: hm.fV, children: "Messages" }),
            (0, r.jsxs)("div", {
                className: hm.OA,
                children: [
                    (0, r.jsx)(hj, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: y,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, r.jsx)(hj, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: y,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(hj, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: y,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    N &&
                        (0, r.jsx)(hj, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let n = t.config.taskConfigV2.tasks,
                                    s = n[m2.n.WATCH_VIDEO];
                                if (null == s) return;
                                let i = { ...s.messages, [e]: a };
                                l({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...n, [m2.n.WATCH_VIDEO]: { ...s, messages: i } },
                                        },
                                    },
                                });
                            },
                            initialValue: A?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)(w.D, { variant: "heading-md/semibold", className: hm.fV, children: "Assets" }),
            (0, r.jsxs)("div", {
                className: hm.OA,
                children: [
                    (0, r.jsx)(hv, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: b,
                        filters: hR,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, r.jsx)(hv, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: b,
                        filters: hR,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, r.jsx)(hv, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: b,
                        filters: hR,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(hv, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: b,
                        filters: hR,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, r.jsx)(hv, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: b,
                        filters: [...hT, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, r.jsx)(hv, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: b,
                        filters: [...hD, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    N &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(hv, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: f,
                                    filters: hR,
                                    initialValue: A?.assets.video.url,
                                }),
                                (0, r.jsx)(hv, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: f,
                                    filters: hR,
                                    initialValue: A?.assets.videoLowRes?.url,
                                }),
                                (0, r.jsx)(hv, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: f,
                                    filters: hT,
                                    initialValue: A?.assets.video.thumbnail,
                                }),
                            ],
                        }),
                ],
            }),
            j.map((e, a) =>
                (0, r.jsxs)(
                    "div",
                    {
                        children: [
                            (0, r.jsxs)(w.D, {
                                variant: "heading-md/semibold",
                                className: hm.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: hm.OA,
                                children: [
                                    (0, r.jsx)(hj, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => C(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(hj, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => C(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== m8.l.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(hv, {
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
                                                                (0, m1.YW)(s)
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
                                            filters: hR,
                                            initialValue: e.asset,
                                        }),
                                    (0, r.jsxs)(R.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(w.D, {
                                                variant: "heading-sm/semibold",
                                                children: "Claim Modal",
                                            }),
                                            (0, r.jsx)(h.$, {
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
            (0, r.jsx)(w.D, { variant: "heading-md/semibold", className: hm.fV, children: "Colors & Quest States" }),
            (0, r.jsxs)("div", {
                className: hm.OA,
                children: [
                    (0, r.jsxs)("div", {
                        className: hm.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(hh, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: _,
                                value: t.config.colors.primary,
                            }),
                            (0, r.jsx)(hh, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: _,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: hm.OA, children: (0, r.jsx)(hN, {}) }),
                    (0, r.jsx)(hk, {
                        onChange: function (e) {
                            switch ((i(e), e)) {
                                case hA.UNENROLLED:
                                    l({ ...t, userStatus: null });
                                    break;
                                case hA.ENROLLED:
                                    l({ ...t, userStatus: hO({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case hA.COMPLETED_25:
                                    l({
                                        ...t,
                                        userStatus: hO({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * S,
                                        }),
                                    });
                                    break;
                                case hA.COMPLETED_50:
                                    l({
                                        ...t,
                                        userStatus: hO({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * S,
                                        }),
                                    });
                                    break;
                                case hA.COMPLETED_75:
                                    l({
                                        ...t,
                                        userStatus: hO({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * S,
                                        }),
                                    });
                                    break;
                                case hA.COMPLETED_100:
                                    l({
                                        ...t,
                                        userStatus: hO({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: S,
                                        }),
                                    });
                                    break;
                                case hA.CLAIMED:
                                    l({
                                        ...t,
                                        userStatus: hO({
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
            (0, r.jsx)(w.D, { variant: "heading-lg/bold", className: hm.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: hm.$$,
                children: [
                    (0, r.jsxs)(hp, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: hm.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, r.jsx)(D.E, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: hm.ok,
                                        children: (0, r.jsx)(ht.jY, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, r.jsx)(hn.A, { children: (0, r.jsx)(ha.Y, { quest: t }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(hp, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(ht.jY, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, r.jsx)(hr.Ay, {
                                    quest: t,
                                    className: hm.d,
                                    questContent: m9.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: m9.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(hp, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Channel Call Header" }),
                            t.userStatus?.claimedAt != null &&
                                (0, r.jsx)(D.E, {
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, r.jsx)("div", {
                                className: hm.l4,
                                children: (0, r.jsx)(ht.jY, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, r.jsx)("div", {
                                        className: hm.Jr,
                                        children: (0, r.jsx)(hl.A, {
                                            channelId: "123",
                                            previewQuest: t,
                                            isParticipatingOverride: c,
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: hm.NY,
                        children: (0, r.jsx)(v.d, {
                            label: "Is Participating:",
                            checked: c,
                            onChange: function (e) {
                                u(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(hp, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            m
                                ? (0, r.jsx)(hs.l, { questId: t.id })
                                : (0, r.jsx)(
                                      hi.M,
                                      {
                                          quest: t,
                                          location: m9.uF.QUESTS_EMBED,
                                          sourceQuestContent: m9.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: hm.NY,
                        children: (0, r.jsx)(v.d, { label: "Invalid Quests Embed:", checked: m, onChange: x }),
                    }),
                    N &&
                        (0, r.jsxs)(hp, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Video Player" }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        let e = performance.now();
                                        (0, eR.openModalLazy)(async () => {
                                            let { default: n } = await Promise.all([
                                                a.e("22448"),
                                                a.e("53684"),
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
                                                    sourceQuestContent: m9.uF.INTERNAL_PREVIEW_TOOL,
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
class hP extends o.Component {
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
                  className: hm.TA,
                  children: [
                      (0, r.jsx)(m5.E, { className: hm.Yw }),
                      (0, r.jsx)(w.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(h.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, r.jsx)(m4.Z, {
                              className: hm.Fx,
                              children: (0, r.jsx)("code", { className: hm.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, r.jsx)(hL, {}, t);
    }
}
var hU = a(913122),
    hG = a(839214),
    hF = a(77138),
    hB = a(450827),
    hV = a(626584),
    h$ = a(174768),
    hW = a(205761),
    hz = a(860071),
    hH = a(696451),
    hK = a(860689),
    hY = a(926140);
let hq = new hV.A("SearchDebugUtils");
function hJ() {
    hq.info("--------------------------");
}
function hQ() {
    let e = h$.A.getProps();
    hq.info("START Quick Switcher State"),
        hq.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((hq.info(`Result Type: ${e.type}`), e.type)) {
                case hY.rD.GUILD:
                    hq.info(`guild id: ${e.record.id}`);
                    break;
                case hY.rD.TEXT_CHANNEL:
                case hY.rD.VOICE_CHANNEL:
                    hq.info(`channel type: ${e.record.type}`),
                        hq.info(`channel id: ${e.record.id}`),
                        hq.info(`name: ${e.record.name}`);
                    break;
                case hY.rD.DM:
                    hq.info(`channel type: ${e.record.type}`),
                        hq.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (hq.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = H.default.getUser(e);
                                null != t &&
                                    (hq.info(`recipient username: ${t.username}`),
                                    hq.info(`recipient global name: ${X.Ay.getGlobalName(t)}`),
                                    hq.info(`recipient nickname: ${ac.A.getNickname(t.id)}`));
                            }));
                    break;
                case hY.rD.GROUP_DM:
                    hq.info(`channel type: ${e.record.type}`),
                        hq.info(`channel id: ${e.record.id}`),
                        hq.info(`name: ${(0, ao.m1)(e.record, H.default, ac.A)}`),
                        e.record.isGroupDM() &&
                            (hq.info(`default name: ${(0, ao.ks)(e.record, H.default, ac.A)}`),
                            hq.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = H.default.getUser(e);
                                null != t &&
                                    (hq.info(`recipient username: ${t.username}`),
                                    hq.info(`recipient global name: ${X.Ay.getGlobalName(t)}`),
                                    hq.info(`recipient nickname: ${ac.A.getNickname(t.id)}`));
                            }));
                    break;
                case hY.rD.USER:
                    hq.info(`user id: ${e.record.id}`),
                        hq.info(`username: ${e.record.username}`),
                        hq.info(`global name: ${X.Ay.getGlobalName(e.record)}`),
                        hq.info(`nickname: ${ac.A.getNickname(e.record.id)}`),
                        hq.info(`guild nicknames: ${hH.Ay.getNicknames(e.record.id)}`);
            }
            hq.info(`frecency score: ${hW.A.getScoreWithoutFetchingLatest(e.record.id)}`), hJ();
        }),
        hq.info("END Quick Switcher State\n");
}
async function hX() {
    hq.info("START User Search Worker State");
    let e = await hB.A.requestDebugState();
    null == e
        ? hq.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
              let [t, a] = e;
              hq.info(`id: ${t}`),
                  hq.info(`username: ${a.username}`),
                  hq.info(`global name: ${a.globalName}`),
                  hq.info(`nickname: ${a.friendNickname}`),
                  Object.entries(a.nicknames).forEach((e) => {
                      let [t, a] = e;
                      hq.info(`guild id: ${t}`), hq.info(`guild nickname: ${a}`);
                  }),
                  hJ();
          }),
          hq.info("END User Search Worker State\n"));
}
async function hZ() {
    let e = await hB.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        a = H.default.getUsers(),
        n = new Set(Object.keys(t)),
        l = mP.default.keys(a),
        s = [];
    return (
        l.forEach((e) => {
            n.has(e) || s.push(e);
        }),
        s
    );
}
async function h0(e) {
    let t = await hB.A.requestDebugState(),
        a = null != t ? JSON.parse(t.users)[e] : null,
        n = aY.A.getGuildIds(),
        l = [];
    n.forEach((t) => {
        let a = hH.Ay.getMember(t, e);
        null != a && l.push(a);
    });
    let s = hz.A.getDebugState(e);
    return { user: H.default.getUser(e), searchWorkerUser: a, guildMembers: l, guildMemberRequests: s };
}
var h1 = a(929948);
function h2(e) {
    let { isUploading: t, isSuccess: a, errorMessage: n, onClick: l, title: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(h.$, {
                variant: "primary",
                onClick: l,
                loading: t,
                disabled: t,
                text: t ? "Uploading\u2026" : s,
            }),
            null != n &&
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: h1.qS,
                    children: n,
                }),
            a &&
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: h1.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let h8 = (0, hG.D)(() => ({
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
        n = h8.useField("includeGDMs"),
        l = h8.useField("includeQuickSwitcherState"),
        s = h8.useField("includeUserSearchWorkerState"),
        i = h8.useField("isUploading"),
        d = h8.useField("isSuccess"),
        c = h8.useField("errorMessage"),
        m = o.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: n,
                includeQuickSwitcherState: l,
                includeUserSearchWorkerState: s,
                isUploading: i,
            } = h8.getState();
            if (!i)
                try {
                    let i, r, o, d, c, u, m, h, x, p, g, v;
                    h8.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((i = ac.A.getFriendIDs()),
                            hq.info("START Discord Friends"),
                            i.forEach((e) => {
                                let t = H.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    n = X.Ay.getGlobalName(t),
                                    l = ac.A.getNickname(t.id),
                                    s = hH.Ay.getNicknames(t.id);
                                hq.info(`username: ${a}`),
                                    hq.info(`global name: ${n}`),
                                    hq.info(`nickname: ${l}`),
                                    hq.info(`guild nicknames: ${s}`),
                                    hJ();
                            }),
                            hq.info("END Discord Friends\n")),
                        a &&
                            ((r = ad.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                e.isGroupDM() && o.push(e), e.isDM() && d.push(e);
                            }),
                            hq.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, ao.m1)(e, H.default, ac.A),
                                    a = (0, ao.ks)(e, H.default, ac.A);
                                hq.info(`id: ${e.id}`),
                                    hq.info(`name: ${t}`),
                                    hq.info(`default name: ${a}`),
                                    hq.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = H.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = X.Ay.getGlobalName(t),
                                            l = ac.A.getNickname(t.id),
                                            s = hH.Ay.getNicknames(t.id);
                                        hq.info(`username: ${a}`),
                                            hq.info(`global name: ${n}`),
                                            hq.info(`nickname: ${l}`),
                                            hq.info(`guild nicknames: ${s}`),
                                            hJ();
                                    });
                            }),
                            hq.info("END Logging Group DM Channels\n"),
                            hq.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, ao.m1)(e, H.default, ac.A);
                                hq.info(`id: ${e.id}`), hq.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = H.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = X.Ay.getGlobalName(n),
                                    i = ac.A.getNickname(n.id);
                                hq.info(`username: ${l}`),
                                    hq.info(`global name: ${s}`),
                                    hq.info(`nickname: ${i}`),
                                    hJ();
                            }),
                            hq.info("END Logging DM Channels\n")),
                        n &&
                            ((c = ad.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                e.isGroupDM() && u.push(e), e.isDM() && m.push(e);
                            }),
                            hq.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, ao.m1)(e, H.default, ac.A),
                                    a = (0, ao.ks)(e, H.default, ac.A);
                                hq.info(`id: ${e.id}`),
                                    hq.info(`name: ${t}`),
                                    hq.info(`default name: ${a}`),
                                    hq.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = H.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = X.Ay.getGlobalName(t),
                                            l = ac.A.getNickname(t.id),
                                            s = hH.Ay.getNicknames(t.id);
                                        hq.info(`username: ${a}`),
                                            hq.info(`global name: ${n}`),
                                            hq.info(`nickname: ${l}`),
                                            hq.info(`guild nicknames: ${s}`),
                                            hJ();
                                    });
                            }),
                            hq.info("END Logging Group DM Channels\n"),
                            hq.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, ao.m1)(e, H.default, ac.A);
                                hq.info(`id: ${e.id}`), hq.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = H.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = X.Ay.getGlobalName(n),
                                    i = ac.A.getNickname(n.id);
                                hq.info(`username: ${l}`),
                                    hq.info(`global name: ${s}`),
                                    hq.info(`nickname: ${i}`),
                                    hJ();
                            }),
                            hq.info("END Logging DM Channels\n")),
                        e &&
                            ((h = hW.A.getFrequentlyWithoutFetchingLatest()),
                            (x = []),
                            (p = []),
                            (g = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, hK.fh)(e)
                                    ? x.push(e)
                                    : e.isDM()
                                      ? g.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : p.push(e);
                            }),
                            hq.info("START Frecency"),
                            hq.info("Guilds"),
                            x.forEach((e) => {
                                let t = hW.A.getScoreWithoutFetchingLatest(e.id);
                                hq.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            hJ(),
                            hq.info("DM Channels"),
                            g.forEach((e) => {
                                let t = hW.A.getScoreWithoutFetchingLatest(e.id);
                                hq.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            hJ(),
                            hq.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = hW.A.getScoreWithoutFetchingLatest(e.id);
                                hq.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    hq.info(`default name: ${(0, ao.ks)(e, H.default, ac.A)}`),
                                    hq.info(`name: ${(0, ao.m1)(e, H.default, ac.A)}`);
                            }),
                            hJ(),
                            hq.info("Guild Channels"),
                            p.forEach((e) => {
                                let t = hW.A.getScoreWithoutFetchingLatest(e.id);
                                hq.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            hJ(),
                            hq.info("END Frecency\n")),
                        l && hQ(),
                        s && hX(),
                        await (0, hF.a)(J.Umv.WEB_APP),
                        h8.setState({ isSuccess: !0, errorMessage: null });
                } catch (t) {
                    let e = new hU.LG(t);
                    h8.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    h8.setState({ isUploading: !1 });
                }
        }, []);
    return (0, r.jsxs)(u.n, {
        label: "Debug Logs Snapshot",
        description:
            "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
        children: [
            (0, r.jsx)(v.d, {
                label: "Frecency",
                description:
                    "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
                checked: e,
                onChange: () => h8.setState({ includeFrecency: !e }),
            }),
            (0, r.jsx)(v.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => h8.setState({ includeFriends: !t }),
            }),
            (0, r.jsx)(v.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => h8.setState({ includeDMs: !a }),
            }),
            (0, r.jsx)(v.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => h8.setState({ includeGDMs: !n }),
            }),
            (0, r.jsx)(v.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: l,
                onChange: () => h8.setState({ includeQuickSwitcherState: !l }),
            }),
            (0, r.jsx)(v.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: s,
                onChange: () => h8.setState({ includeUserSearchWorkerState: !s }),
            }),
            (0, r.jsx)(h2, {
                isUploading: i,
                isSuccess: d,
                errorMessage: c,
                onClick: m,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let h3 = (0, hG.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function h5() {
    let e = h3.useField("userIds"),
        t = h3.useField("isLoading"),
        a = h3.useField("isSuccess"),
        n = h3.useField("errorMessage"),
        l = h3.useField("lastRunAt"),
        s = o.useCallback(async () => {
            h3.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await hZ();
                h3.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                h3.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                h3.setState({ isLoading: !1 });
            }
        }, []),
        i = o.useMemo(
            () =>
                e.map((e) => {
                    let t = H.default.getUser(e),
                        a = null != t ? X.Ay.getName(t) : "Unknown";
                    return (0, r.jsx)(
                        "div",
                        {
                            className: h1.J1,
                            children: (0, r.jsx)(D.E, { variant: "text-md/normal", children: `${a} (${e})` }),
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
                (0, r.jsx)(h.$, { onClick: s, text: "Diff User State", loading: t, disabled: t }),
                (0, r.jsxs)("div", {
                    className: h1.N6,
                    children: [
                        null != n &&
                            (0, r.jsx)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: h1.qS,
                                children: n,
                            }),
                        a &&
                            e.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(D.E, { variant: "text-md/normal", children: `Last run at: ${l}` }),
                                    (0, r.jsx)(D.E, {
                                        variant: "text-md/normal",
                                        children: "User IDs missing from Worker:",
                                    }),
                                    (0, r.jsx)("div", { className: h1.uk, children: i }),
                                ],
                            }),
                        a &&
                            0 === e.length &&
                            (0, r.jsx)(D.E, { variant: "text-md/normal", children: "No users missing from Worker" }),
                    ],
                }),
            ],
        }),
    });
}
let h4 = (0, hG.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function h9() {
    let e = h4.useField("isRecording"),
        t = h4.useField("isUploading"),
        a = h4.useField("isSuccess"),
        n = h4.useField("errorMessage"),
        l = o.useRef([]),
        s = o.useRef(""),
        i = o.useCallback(() => {
            let { results: e, query: t } = h$.A.getProps();
            (l.current !== e || s.current !== t) && ((l.current = e), (s.current = t), hQ());
        }, []);
    o.useEffect(() => {
        if (e) return h$.A.addChangeListener(i), () => h$.A.removeChangeListener(i);
    }, [i, e]);
    let d = o.useCallback(async () => {
        let { isUploading: e } = h4.getState();
        if (!e)
            try {
                h4.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, hF.a)(J.Umv.WEB_APP),
                    h4.setState({ isSuccess: !0, errorMessage: null });
            } catch (t) {
                let e = new hU.LG(t);
                h4.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                h4.setState({ isUploading: !1 });
            }
    }, []);
    return (0, r.jsxs)(u.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, r.jsx)(u0.p, {
                messageType: u0.Y.INFO,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, r.jsxs)(l1.e, {
                children: [
                    (0, r.jsx)(h.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => h4.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(h2, {
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
var h7 = a(145497);
let xe = (0, hG.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function xt(e) {
    let { title: t, guildIds: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: h1.J1,
                children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: t }),
            }),
            (0, r.jsxs)("div", {
                className: h1.uk,
                children: [
                    0 === a.length &&
                        (0, r.jsx)("div", {
                            className: h1.J1,
                            children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = aY.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: h1.J1,
                                      children: [
                                          (0, r.jsx)(h7.Ay, { guild: t, iconSize: 16 }),
                                          (0, r.jsx)(D.E, { variant: "text-sm/normal", children: t.name }),
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
function xa(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: n, guildMembers: l, guildMemberRequests: s } = t,
        i = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(sB.y, { size: "sm", color: eO.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(m5.E, { size: "sm", color: eO.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, r.jsxs)("div", {
        className: h1.N6,
        children: [
            (0, r.jsxs)("div", {
                className: h1.J1,
                children: [
                    i({ ok: null != a }),
                    (0, r.jsx)(D.E, {
                        variant: "text-sm/normal",
                        children: null != a ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != a &&
                (0, r.jsx)("div", {
                    className: h1.uk,
                    children: (0, r.jsx)("div", {
                        className: h1.J1,
                        children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: h1.J1,
                children: [
                    i({ ok: null != n }),
                    (0, r.jsx)(D.E, {
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
                    className: h1.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: h1.J1,
                            children: (0, r.jsx)(D.E, {
                                variant: "text-sm/normal",
                                children: `username: ${n.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: h1.J1,
                            children: (0, r.jsx)(D.E, {
                                variant: "text-sm/normal",
                                children: `global name: ${n.globalName ?? "\u2014"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: h1.J1,
                            children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: h1.uk,
                            children: [
                                0 === Object.keys(n.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: h1.J1,
                                        children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "None" }),
                                    }),
                                Object.entries(n.nicknames).map((e) => {
                                    let [t, a] = e,
                                        n = aY.A.getGuild(t),
                                        l = ad.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: h1.J1,
                                            children: [
                                                null != n && (0, r.jsx)(h7.Ay, { guild: n, iconSize: 16 }),
                                                null != n &&
                                                    (0, r.jsx)(D.E, { variant: "text-sm/normal", children: n.name }),
                                                null == n &&
                                                    null != l &&
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-sm/normal",
                                                        children: (0, ao.m1)(l, H.default, ac.A),
                                                    }),
                                                (0, r.jsx)(D.E, { variant: "text-sm/normal", children: ` (${t})` }),
                                                null != a &&
                                                    "" !== a &&
                                                    (0, r.jsx)(D.E, { variant: "text-sm/normal", children: ` - ${a}` }),
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
                className: h1.J1,
                children: [
                    i({ ok: l.length > 0 }),
                    (0, r.jsx)(D.E, {
                        variant: "text-sm/normal",
                        children: l.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            l.length > 0 &&
                (0, r.jsx)("div", {
                    className: h1.uk,
                    children: l.map((e) => {
                        let t = aY.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: h1.J1,
                                children: [
                                    (0, r.jsx)(h7.Ay, { guild: t, iconSize: 16 }),
                                    (0, r.jsxs)(D.E, {
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
                className: h1.J1,
                children: [
                    (0, r.jsx)(cm.m, { size: "sm" }),
                    (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != s &&
                (0, r.jsxs)("div", {
                    className: h1.uk,
                    children: [
                        (0, r.jsx)(xt, { title: "Pending Guild Member Requests:", guildIds: s.pendingRequestGuildIds }),
                        (0, r.jsx)(xt, { title: "Sent Guild Member Requests:", guildIds: s.sentRequestGuildIds }),
                        (0, r.jsx)(xt, {
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
            xe.setState({ userId: e, state: null });
        }, []),
        t = o.useCallback(async () => {
            let { userId: e, loading: t } = xe.getState();
            if (!t && null != e) {
                xe.setState({ loading: !0, error: null });
                try {
                    let t = await h0(e);
                    xe.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new hU.LG(t);
                    xe.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    xe.setState({ loading: !1 });
                }
            }
        }, []),
        a = xe.useField("loading");
    return (0, r.jsxs)("div", {
        className: h1.$n,
        children: [
            (0, r.jsx)(p.k, { placeholder: "User ID", onChange: e }),
            (0, r.jsx)(h.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function xl() {
    let e = xe.useField("state"),
        t = xe.useField("error");
    return (0, r.jsxs)(u.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, r.jsx)(xn, {}),
            null != t &&
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: h1.qS,
                    children: t,
                }),
            null != e && (0, r.jsx)(xa, { userState: e }),
        ],
    });
}
function xs() {
    return (0, r.jsxs)(d.Ip, {
        className: h1.nd,
        children: [
            (0, r.jsx)(h9, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(h6, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(xl, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(h5, {}),
        ],
    });
}
var xi = a(761508),
    xr = a(599147),
    xo = a(808411),
    xd = a(624716),
    xc = a(398590),
    xu = a(764451),
    xm = a(263419),
    xh = a(52822),
    xx = a(642153);
let xp = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    xg = {
        "virtual-currency": function () {
            return (0, r.jsxs)(xh.Hq, {
                label: "Open New Revenue Storybook",
                direction: "vertical",
                children: [
                    (0, r.jsx)(D.E, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        style: { marginBottom: "8px" },
                        children: "This section is deprecated. Use button to open the new Revenue Storybook instead.",
                    }),
                    (0, r.jsx)(h.$, {
                        onClick: () => {
                            var e;
                            return (
                                (e = xm.RevenuePlaygroundCollectionId.VIRTUAL_CURRENCY),
                                void (xu.PlaygroundStore.setState({ selectedCollection: e, selectedStory: null }),
                                (0, xc.id)(J.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: () =>
            (0, r.jsxs)("div", { children: [(0, r.jsx)(xr.o, {}), (0, r.jsx)(xo.A, {}), (0, r.jsx)(xd.A, {})] }),
    };
function xv() {
    let [e, t] = o.useState("virtual-currency"),
        a = o.useMemo(() => xg[e], [e]);
    return (0, r.jsxs)("div", {
        className: k()(tT.nd, xx.kL),
        children: [
            (0, r.jsx)(xi.V, {
                className: xx.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: xp.map((e) => (0, r.jsx)(xi.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, r.jsx)(d.Ar, { children: (0, r.jsx)("div", { className: xx.Qs, children: (0, r.jsx)(a, {}) }) }),
        ],
    });
}
var xj = a(718446),
    xb = a(766075),
    xf = a(355097);
let xy = (0, hG.D)(() => ({ urlString: "", error: null })),
    xC = Object.entries(xf.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function x_() {
    let [e, t] = o.useState(),
        a = xy.useField("urlString"),
        n = xy.useField("error"),
        l = o.useCallback(() => {
            let e = xy.getField("urlString");
            if (null == e || "" === e) return void xy.setState({ error: "URL is required" });
            let t = (0, xj.parseSettingsUrl)({ path: e });
            ((0, xj.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? xy.setState({ error: "String did not match expected format" })
                : (0, xb.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, r.jsx)(t1.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: xC,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = xf.od[e].split("/");
                        xy.setState({ urlString: J.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, r.jsx)(p.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => xy.setState({ urlString: e, error: null }),
            }),
            (0, r.jsxs)(l1.e, {
                children: [
                    (0, r.jsx)(h.$, {
                        variant: "primary",
                        onClick: l,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(h.$, {
                        variant: "secondary",
                        onClick: () => (0, nu.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != n && (0, r.jsx)(D.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var xE = a(780964);
let xS = (0, hG.D)(() => ({ setting: xE.X.ACCOUNT_PANEL }));
function xN() {
    let e = xS.useField("setting"),
        t = o.useCallback(() => {
            (0, xb.openUserSettings)(e);
        }, [e]),
        a = o.useMemo(() => Object.values(xE.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, r.jsx)(t1.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => xS.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, r.jsx)(h.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var xA = a(963935),
    xk = a(227086),
    xI = a(53181);
function xD(e) {
    let { title: t, initExpanded: a, highlightMode: n = "none", children: l } = e,
        [s, i] = o.useState(a),
        d = o.useCallback(() => {
            i(!s);
        }, [s]),
        c = "migrated" === n || "migrated-root" === n ? void 0 : "status-warning",
        u = (e) => (0, r.jsx)(D.E, { variant: e, color: c, children: t });
    return null == l
        ? (0, r.jsx)("div", { className: xI.NF, children: u("text-md/normal") })
        : (0, r.jsxs)("div", {
              className: xI.NF,
              children: [
                  (0, r.jsxs)(I.D, {
                      className: xI.jr,
                      onClick: d,
                      children: [
                          u("text-md/bold"),
                          (0, r.jsx)(se.A, {
                              direction: s ? se.A.Directions.DOWN : se.A.Directions.RIGHT,
                              className: xI.D,
                          }),
                      ],
                  }),
                  s && (0, r.jsx)("div", { className: xI.m4, children: l }),
              ],
          });
}
function xT(e) {
    let { setting: t, depth: a, inheritedHighlightMode: n } = e,
        l = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case xA.Z6.ROOT:
                    return "migrated-root";
                case xA.Z6.SECTION:
                case xA.Z6.PANEL:
                case xA.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, n),
        s = "migrated" === l ? "migrated" : void 0,
        i = null;
    return (
        (0, xA.nW)(t) &&
            t.layout.length > 0 &&
            (i = t.layout.map((e) => (0, r.jsx)(xT, { setting: e, depth: a + 1, inheritedHighlightMode: s }, e.key))),
        (0, r.jsx)(xD, { title: t.key, initExpanded: a <= 2, highlightMode: l, children: i })
    );
}
function xR() {
    let { node: e } = (0, W.Ay)(xk.D, ""),
        t = (0, W.KA)();
    return (0, r.jsxs)(u.n, {
        label: "Settings Tree",
        children: [
            (0, r.jsx)(v.d, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: t,
                onChange: W.jL,
            }),
            (0, r.jsx)(xT, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var xO = a(168803);
function xw() {
    return (0, r.jsxs)(d.Ip, {
        className: xO.n,
        children: [
            (0, r.jsx)(xN, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(x_, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(xR, {}),
        ],
    });
}
function xM() {
    return o.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: aG.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(nw, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: aG.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(uZ, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: aG.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(uY, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: aG.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(lQ, {}),
            },
        ];
        return (
            aD.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: aG.fu.SHOP, render: () => (0, r.jsx)(uU, {}) }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: aG.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(dv, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: aG.fu.SHOP,
                    render: () => (0, r.jsx)(t_, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: aG.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, r.jsx)(cL, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: aG.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(l0, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: aG.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(dH.Ay, {}),
                }),
                e.push({
                    id: "age_verification",
                    name: "Age Verification",
                    group: aG.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(a7, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: aG.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(l4, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: aG.fu.GAMES, render: () => (0, r.jsx)(o9, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: aG.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(s9, {}),
                }),
                aT.isPlatformEmbedded &&
                    e.push({
                        id: "detected_games",
                        name: "Detected Games",
                        group: aG.fu.GAMES,
                        render: () => (0, r.jsx)(lT, {}),
                    }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: aG.fu.GAMES, render: () => (0, r.jsx)(uF, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: aG.fu.GAMES,
                    render: () => (0, r.jsx)(a1, {}),
                }),
                e.push({
                    id: "game_upsells",
                    name: "Game Upsells",
                    group: aG.fu.GAMES,
                    tags: ["dismissible", "cooldown", "dcf"],
                    render: () => (0, r.jsx)(ai, {}),
                }),
                e.push({
                    id: "slayer_storefront",
                    name: "Slayer Storefront",
                    group: aG.fu.GAMES,
                    render: () => (0, r.jsx)(aI, {}),
                }),
                e.push({
                    id: "game_profile",
                    name: "Game Profile",
                    group: aG.fu.GAMES,
                    render: () => (0, r.jsx)(t9, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: aG.fu.USERS,
                    render: () => (0, r.jsx)(xs, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: aG.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(N, {}) })),
            e.push({
                id: "rive",
                name: "Rive",
                group: aG.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(cF, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: aG.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag"],
                render: () => (0, r.jsx)(iB, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: aG.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rh, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: aG.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(re, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: aG.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(n5, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: aG.fu.UI, render: () => (0, r.jsx)(l_, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: aG.fu.UI,
                render: () => (0, r.jsx)(cu, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: aG.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(sy, { devSettingsCategory: aR.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: aG.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(rT, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: aG.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(sy, { devSettingsCategory: aR.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: aG.fu.USERS, render: () => (0, r.jsx)(d6, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: aG.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(rF, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: aG.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(rj, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: aG.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(ro, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: aG.fu.USERS,
                tags: ["friends"],
                render: () => (0, r.jsx)(a3, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: aG.fu.USERS,
                tags: ["channels"],
                render: () => (0, r.jsx)(n3, {}),
            }),
            aD.A.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: aG.fu.USERS,
                    render: () => (0, r.jsx)(tZ, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: aG.fu.USERS,
                    render: () => (0, r.jsx)(ag, {}),
                })),
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: aG.fu.DCF, render: () => (0, r.jsx)(lb, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: aG.fu.DCF, render: () => (0, r.jsx)(ln, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: aG.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(i3, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: aG.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up"],
                render: () => (0, r.jsx)(dq, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: aG.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(r1, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: aG.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(dw, {}),
                }),
                e.push({
                    id: "orders",
                    name: "Orders",
                    group: aG.fu.BILLING,
                    tags: ["orders"],
                    render: () => (0, r.jsx)(r4, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: aG.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(mX, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: aG.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, r.jsx)(sh, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: aG.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, r.jsx)(is, {}),
            }),
            e.push({
                id: "spatial_audio",
                name: "Spatial Audio",
                group: aG.fu.AUDIO_VIDEO,
                tags: ["spatial", "hrtf", "steam audio", "3d"],
                render: () => (0, r.jsx)(mR, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: aG.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(mv, {}),
            }),
            e.push({
                id: "av_overrides",
                name: "Overrides",
                group: aG.fu.AUDIO_VIDEO,
                tags: ["video", "capture", "encoder", "golive"],
                render: () => (0, r.jsx)(ma, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: aG.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(ms, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: aG.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(i1, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: aG.fu.BOOSTING, render: () => (0, r.jsx)(sj, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: aG.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(ra, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: aG.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(xw, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: aG.fu.QUESTS,
                render: () => (0, r.jsx)(af, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: aG.fu.QUESTS,
                render: () => (0, r.jsx)(u8, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: aG.fu.BILLING,
                render: () => (0, r.jsx)(xv, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: aG.fu.QUESTS,
                render: () => (0, r.jsx)(hP, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: aG.fu.USERS,
                render: () => (0, r.jsx)(cj, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: aG.fu.USERS,
                render: () => (0, r.jsx)(nz, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: aG.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(lM, {}),
            }),
            e
        );
    }, []);
}
