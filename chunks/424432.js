a.d(t, { x: () => xI }), a(321073);
var l,
    n,
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
    y = a(315240),
    E = a(871421),
    _ = a(227628),
    C = a(468550),
    S = a(781710);
function N() {
    let e = (0, _.MZ)((e) => e.isOpen),
        t = (0, C.sY)((e) => e.isOpen),
        a = o.useCallback((e) => {
            if (!e) return void (0, C.kF)();
            let t = j.Ay.getVisibleGame()?.id,
                a = b.Ay.getLastClipsSession()?.newClipIds[0],
                l = (null != a ? b.Ay.getClipById(a)?.applicationId : null) ?? b.Ay.getClips()[0]?.applicationId,
                n = t ?? l;
            null != n && (0, C.M8)(n);
        }, []),
        [l, n] = o.useState(f.rb.KILL),
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
                                    value: l,
                                    onSelectionChange: (e) => n(e),
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
                                y.Ts({ type: f.Gy.GAME_EVENT, eventType: l, importance: s, title: N, description: k });
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            text: "stash decider data",
                            onClick: () => {
                                E.A.debugStashDeciderData();
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            text: "re-run ranking",
                            onClick: () => {
                                E.i.debugRerunRanking();
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
    $ = a(65593),
    V = a(740572),
    W = a(581298),
    z = a(98596),
    H = a(287809),
    K = a(901139),
    Y = a(641886),
    q = a(780898),
    J = a(652215),
    Q = a(571523),
    X = a(427262);
function Z(e) {
    let { nameplate: t } = e,
        a = (0, M.bG)([H.default], () => H.default.getCurrentUser()),
        l = X.Ay.useName(a) ?? "";
    return (0, r.jsx)(Q.g, {
        username: l,
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
function el(e) {
    let { selected: t, onSelect: a } = e,
        l = (0, ee.Ay)();
    return (0, r.jsxs)("div", {
        className: ea.N,
        children: [
            (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Preselected Gradient" }),
            (0, r.jsx)("div", {
                className: ea.Z,
                children: Y.Z6.map((e) => {
                    let n = l !== J.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        s = t === e.name;
                    return (0, r.jsx)(
                        et.S4,
                        { onSelect: () => a(e), style: { background: n }, name: e.name, isSelected: s },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
var en = a(808166),
    es = a(95701),
    ei = a(331884);
function er(e) {
    let { selected: t, nameplate: a } = e,
        l = (0, ei.i)(),
        n = new es.cq({ id: "0", type: J.rbe.DM, name: "self", guild_id: "0", recipients: [l.id] });
    return (0, r.jsx)(en.th, { selected: t, channel: n, user: l, nameplate: a });
}
var eo = a(698638),
    ed = a(877203);
function ec() {
    let [e, t] = (0, o.useState)(!1),
        [a, l] = (0, o.useState)(!1),
        [n, s] = (0, o.useState)(null),
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
                                    l(!1), t((e) => !e);
                                },
                                variant: "secondary",
                                text: "Toggle Themes",
                            }),
                            (0, r.jsx)(h.$, {
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
                        className: ed.uQ,
                        children: [
                            e && (0, r.jsx)(V.A, { node: i }),
                            a &&
                                (0, r.jsx)(el, {
                                    selected: n?.palette?.name,
                                    onSelect: (e) => {
                                        n?.previewToolKey != null && c(n.previewToolKey, n.previewToolKey, e), p(e);
                                    },
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: ed.iW,
                children: [
                    (0, r.jsx)(eu, { nameplate: n }, n?.palette?.name),
                    (0, r.jsxs)("div", {
                        className: ed.Uo,
                        children: [
                            (0, r.jsx)(D.E, {
                                variant: "text-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, r.jsx)($.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: eo.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        a = e[0],
                                        l = await a.arrayBuffer();
                                    m(t, t, (0, q.nI)(l)), c(t, t, Y.Wj);
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
        [a, l] = (0, o.useState)(320),
        n = (0, o.useRef)(null),
        s = (0, o.useRef)(null),
        i = (0, o.useRef)(null),
        c = (0, o.useRef)(document),
        u = (0, o.useCallback)((e) => {
            if (null != n.current) {
                let t = n.current.getBoundingClientRect();
                l(Math.max(264, Math.min(432, e.clientX - t.left)));
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
                    l = () => {
                        null != s.current && (t.removeEventListener("mousemove", s.current), (s.current = null)),
                            null != i.current && (t.removeEventListener("mouseup", i.current), (i.current = null));
                    };
                (s.current = a), (i.current = l), t.addEventListener("mousemove", a), t.addEventListener("mouseup", l);
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
                ref: n,
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
    let { src: t, onSetStatic: a, removeAsset: l } = e;
    return (0, r.jsxs)("div", {
        className: ed.xO,
        children: [
            (0, r.jsx)(I.D, {
                onClick: () => l(t),
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
    eE = a(315949),
    e_ = a(559474),
    eC = a(816866),
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
let e$ = (e) => {
    let { profileEffect: t } = e,
        a = o.useMemo(() => (0, eU.cloneDeep)(t), [t]),
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
        { layerData: s } = (0, eF.A)({ skuId: "debug", layers: n.effects });
    return (0, r.jsx)(eB.p, { profileEffect: n, layerData: s, skuId: "debug" });
};
var eV = a(314485),
    eW = a(778765);
let ez =
        "https://cdn.discordapp.com/assets/content/ad2a252a6866e1ecb3bab521e2baaabbf13ab2d1ecaa8af67862c53c91f76761.png",
    eH = { [eS.qH.THUMBNAIL]: null, [eS.qH.STATIC]: null, [eS.qH.REDUCED_MOTION]: null },
    eK = "debug",
    eY = "reduced-motion-preview-modal",
    eq = (e) => {
        let { transitionState: t, onClose: a, frameSrc: l, theme: n } = e;
        return (0, r.jsx)(ek.d, {
            transitionState: t,
            size: "md",
            onClose: a,
            maxHeight: "viewport",
            children: (0, r.jsxs)("div", {
                className: eV.Xd,
                children: [
                    (0, r.jsx)("div", {
                        className: eV.y6,
                        children: (0, r.jsx)(eI.K, {
                            "aria-label": "Close",
                            onClick: a,
                            icon: eD.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: eV.rU,
                        children: [
                            (0, r.jsx)(eT.N, {
                                theme: n,
                                children: (e) =>
                                    (0, r.jsx)("img", {
                                        src: ez,
                                        alt: "",
                                        className: k()(eV.aM, e),
                                        "aria-hidden": !0,
                                    }),
                            }),
                            null != l &&
                                "" !== l &&
                                (0, r.jsx)("img", { src: l, className: eV.SD, alt: "Reduced motion preview" }),
                        ],
                    }),
                ],
            }),
        });
    },
    eJ = (e) => {
        let { type: t, frame: a, theme: l, onClear: n } = e,
            s = t === eS.qH.REDUCED_MOTION,
            i = s ? ez : eW.A,
            o = (0, r.jsx)(eT.N, {
                theme: l,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("img", { src: i, alt: "", className: k()(eV.aM, e), "aria-hidden": !0 }),
                            a?.src != null &&
                                "" !== a.src &&
                                (0, r.jsx)("img", { src: a.src, className: k()(eV.SD, e), alt: "" }),
                        ],
                    }),
            });
        return (0, r.jsxs)("div", {
            className: eV.pK,
            children: [
                (0, r.jsx)(w.D, { variant: "heading-sm/bold", children: t }),
                s
                    ? (0, r.jsx)(I.D, {
                          className: k()(eV.zd, eV.eB),
                          onClick: () => {
                              (0, eR.hasModalOpen)(eY)
                                  ? (0, eR.closeModal)(eY)
                                  : (0, eR.openModalLazy)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, r.jsx)(eq, { ...e, frameSrc: a?.src ?? null, theme: l }),
                                            ),
                                        { modalKey: eY, onCloseRequest: () => (0, eR.closeModal)(eY) },
                                    );
                          },
                          children: o,
                      })
                    : (0, r.jsx)("div", { className: eV.zd, children: o }),
                null != a && (0, r.jsx)(h.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: n }),
            ],
        });
    },
    eQ = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, eC.wu)(),
            l = (0, M.bG)([H.default], () => H.default.getCurrentUser()),
            [n, s] = o.useState(!0),
            i = o.useRef({}),
            [d, c] = o.useState(!1),
            [u, m] = o.useState(!1),
            [x, p] = o.useState(8),
            [g, v] = o.useState([]),
            [j, b] = o.useState(eH),
            f = o.useRef([]),
            [y, E] = o.useState(t.name),
            _ = y.toLowerCase().replace(/\s+/g, "_"),
            C = o.useMemo(
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
                        b((l) => ({ ...l, [e]: (0, eS.GT)(t, a) }));
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
        null == l)
            ? (0, r.jsx)("div", {})
            : (0, r.jsxs)("div", {
                  className: eV.zr,
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
                          className: eV.Vg,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: k()(eV.nM, eV.uW),
                                  children: [
                                      (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Profile Effect Name" }),
                                      (0, r.jsx)("input", {
                                          type: "text",
                                          value: y,
                                          className: eV.hF,
                                          onChange: (e) => {
                                              E(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eV.nM,
                                  children: [
                                      (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Dark Theme" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: d,
                                          className: eV.OO,
                                          onChange: () => {
                                              c(!d);
                                          },
                                      }),
                                      (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Show User Profile" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: u,
                                          className: eV.OO,
                                          onChange: () => {
                                              m(!u);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eV.nM,
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
                                  className: k()(eV.nz, eV.VH),
                                  style: { borderRadius: x },
                                  children: [
                                      u
                                          ? (0, r.jsx)("div", {
                                                className: eV.jq,
                                                children: (0, r.jsx)(eP.A, {
                                                    user: l,
                                                    currentUser: l,
                                                    transitionState: ew.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: eV.JB,
                                                }),
                                            })
                                          : (0, r.jsx)(eT.N, {
                                                theme: S,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: k()(eV.aM, e),
                                                        children: (0, r.jsx)("img", { src: eW.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      n &&
                                          (0, r.jsx)("div", {
                                              className: eV.KJ,
                                              children: (0, r.jsx)(e$, { profileEffect: C }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  children:
                                      u &&
                                      (0, r.jsxs)("div", {
                                          className: k()(eV.f5, eV.VH),
                                          style: { borderRadius: x },
                                          children: [
                                              (0, r.jsx)(eL.A, {
                                                  user: l,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  hideProfileFrame: !0,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, r.jsx)(e$, { profileEffect: C }),
                                          ],
                                      }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: eV.nz,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: eV.nM,
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
                                          className: eV.nM,
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
                                          className: eV.q6,
                                          children: (0, r.jsx)("div", {
                                              className: eV.nM,
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
                                          className: k()(eV.q6, eV.XA),
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
                                                  className: eV.nM,
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
                                          className: eV.uW,
                                          children: [
                                              (0, r.jsx)(w.D, { variant: "heading-lg/bold", children: "Still Frames" }),
                                              (0, r.jsx)("div", {
                                                  className: eV.mv,
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
                                              className: k()(eV.uW, eV.l7),
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
                                  className: k()(eV.Vg, eV.ZF),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: eV.cD,
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
                                                  className: eV.ec,
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: eV.D1,
                                                          children: [
                                                              (0, r.jsx)(w.D, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, r.jsx)("img", {
                                                                  src: e.src,
                                                                  className: eV.oq,
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
                                                                                              className: eV.oq,
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
                                                          className: k()(eV.Vg, eV.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: eV.nz,
                                                                  children: [
                                                                      (0, r.jsx)(D.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: eV.hF,
                                                                          onChange: (e) => {
                                                                              v((a) => {
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
                                                                  className: eV.nz,
                                                                  children: [
                                                                      (0, r.jsx)(D.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: eV.hF,
                                                                          onChange: (e) => {
                                                                              v((a) => {
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
                                                          className: k()(eV.Vg, eV.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: eV.nz,
                                                                  children: [
                                                                      (0, r.jsx)(D.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: eV.OO,
                                                                          onChange: (e) => {
                                                                              v((a) => {
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
                                                                  className: eV.nz,
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
                                                                                  className: eV.hF,
                                                                                  onChange: (e) => {
                                                                                      v((a) => {
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
                                                          children: (0, r.jsx)(ef.A, {
                                                              ref: (e) => {
                                                                  i.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let a;
                                                                  null != (a = N(e)) &&
                                                                      (0, eS.Mz)(a, (e) => {
                                                                          v((l) => {
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
                                                          className: k()(eV.nM, eV._N),
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
            { deleteProfileEffect: l } = (0, eC.wu)();
        return (0, r.jsxs)(I.D, {
            className: eV.B0,
            onClick: a,
            children: [
                (0, r.jsx)("div", { className: eV.yV, style: { backgroundImage: `url(${t.effects?.[0]?.base64})` } }),
                (0, r.jsxs)("div", {
                    className: eV.eL,
                    children: [
                        (0, r.jsx)(D.E, { variant: "text-md/bold", children: t.name }),
                        (0, r.jsx)(h.$, {
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
function e0() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, eC.wu)(),
        [l, n] = o.useState(),
        s = o.useRef(null),
        { categories: i } = (0, eE.A)(),
        d = o.useMemo(() => (0, ey.Wj)(i), [i]),
        [c, u] = o.useState(""),
        m = o.useMemo(
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
        x = o.useCallback(
            (e, a) => {
                if (null == a || !e.type.startsWith("text/")) return (0, e_.Ni)(eX);
                let [l, n] = a.split(",");
                if (!l.includes("text/plain")) return (0, e_.Ni)(eX);
                let s = JSON.parse(atob(n));
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
        className: eV.zr,
        children: [
            null == l &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eV.nz,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: k()(eV.uW, eV.nM),
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
                                    className: eV.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(eZ, { profileEffect: e, onClick: () => n(e) }, e.skuId),
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: k()(eV.nM, eV._N, eV.uW),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: eV.au,
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
                            className: eV.uW,
                            children: [
                                (0, r.jsx)(w.D, { variant: "heading-xl/bold", children: "All Effects" }),
                                (0, r.jsx)(p.k, {
                                    value: c,
                                    onChange: (e) => {
                                        u(e);
                                    },
                                }),
                                (0, r.jsx)("div", {
                                    className: eV.xm,
                                    children: m.map((e) =>
                                        (0, r.jsx)(
                                            I.D,
                                            {
                                                className: eV.S5,
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
                                                    n({
                                                        skuId: e.skuId,
                                                        name: e.title,
                                                        effects: e.effects,
                                                        stillFrames: t,
                                                        readonly: !0,
                                                    });
                                                },
                                                children: (0, r.jsx)("div", {
                                                    className: eV.Hd,
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
            null != l && (0, r.jsx)(eQ, { profileEffect: l }),
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
    tl = a(841702),
    tn = a(892118),
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
    let { purchases: a, isFetchingPurchases: l } = (0, tl.Bf)(),
        n = o.useMemo(() => (0, ey.MG)(a, new Map()), [a]),
        [{ pendingProfileFrame: s }, i] = (0, M.yK)([te.A], () => [te.A.getPendingChanges(), te.A.showNotice()]),
        d = void 0 === s ? t?.profileFrame : s,
        c = null != d ? a.get(d.skuId) : void 0,
        u = (0, tn.s)(c?.items[0]) ? c.items[0] : void 0;
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
                0 === n.length && l && (0, r.jsx)(e8.y, {}),
                0 === n.length && !l && (0, r.jsx)(td, {}),
                n.length > 0 &&
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
                                    n.map((e) => {
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
            l = (0, tu.bG)([th.A], () => th.A.lastSuccessfulFetch),
            n = t.size > 0 && a.size > 0 && null != l,
            { isFetching: s, categories: i } = (0, tl.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: n }),
            d = n ? t : i,
            c = n || (!s && d.size > 0),
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
    tE = (e) => {
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
                                return (0, r.jsx)(tE, { setTab: t });
                        }
                    })(),
                ],
            })
        );
    };
var tC = a(681154),
    tS = a(306264),
    tN = a(506774),
    tA = a(228366),
    tk = a(587895),
    tI = a(429913),
    tD = a(475825),
    tT = a(505206);
function tR(e) {
    let { columns: t, data: a, className: l, rowClassName: n, onClickRow: s, selectedRowKey: i, rowHeight: d = 40 } = e,
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
            className: l,
            innerClassName: tT.tp,
            sections: u,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    l = tT.ZR;
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
                    u = k()(tT.jD, { [tT.wD]: o === i, rowClassName: n });
                return (0, r.jsx)(
                    I.D,
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
var tO = a(409626),
    tw = a(692969),
    tM = a(760751),
    tL = a(403362),
    tP = a(435738),
    tU = a(99753),
    tG = a(975732),
    tF = a(574520),
    tB = a(808323),
    t$ = a(832384),
    tV = a(424994),
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
    let e = (0, M.bG)([tU.A], () => tU.A.getFeed(tV.X1.GLOBAL_FEED)),
        t = (0, M.bG)([tU.A], () => tU.A.getFilters()),
        a = (0, M.cf)([tF.A], () => {
            let t = {};
            for (let a of e?.entries ?? []) t[(0, tF.$)(a.content)] = tF.A.canRenderContent(a.content);
            return t;
        }, [e]),
        l = (0, M.bG)([tP.A], () => tP.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let n = e?.entries?.flatMap((e) => {
        let { content: n } = e;
        if (!(0, tB.l)(t, n)) return [];
        let s = a[(0, tF.$)(n)];
        return (0, r.jsxs)(
            "li",
            {
                className: tW.p,
                children: [
                    (0, r.jsx)(tz, { type: n.author_type, id: n.author_id }),
                    !s && (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Expired or no matching presence" }),
                    (0, t$.I5)(n) &&
                        (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["Expired at ", n.expires_at] }),
                    l.has(n.id) && (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Impression capped" }),
                ],
            },
            n.id,
        );
    });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Selected Content" }),
            null != n ? (0, r.jsx)("ul", { children: n }) : (0, r.jsx)("div", { children: "(none?)" }),
        ],
    });
}
var tK = a(576470),
    tY = a(85451);
function tq() {
    let e = (0, M.bG)([tU.A], () => tU.A.getFeed(tV.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, M.cf)(
            [tU.A],
            () => tU.A.getFeedState(tV.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        l = (0, M.bG)([tU.A], () => tU.A.getLastFeedFetchDate(tV.X1.GLOBAL_FEED));
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
                    null != l ? (0, r.jsx)(tY.z, { inline: !0, entry: { start: l.getTime() } }) : "(never)",
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
            return (0, r.jsx)(D.E, { variant: "text-md/semibold", children: tC.ContentInventoryEntryType[t] });
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
        l = a?.types?.has(t) ?? !1;
    return (0, r.jsx)(v.d, {
        checked: l,
        onChange: function () {
            l
                ? tA.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : tA.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function tZ() {
    var e;
    let t,
        a = (0, M.bG)([tU.A], () => tU.A.getFeed(tV.X1.GLOBAL_FEED)),
        l = (0, M.bG)([tU.A], () => tU.A.getDebugImpressionCappingDisabled()),
        n = (0, M.bG)([tP.A], () => tP.A.getDebugFastImpressionCappingEnabled()),
        s =
            ((e = a?.entries?.map((e) => e.content)),
            Object.keys((t = eG().groupBy(e, (e) => e.content_type))).map((e) => {
                let a = t[e];
                return { key: `${e}`, type: a[0].content_type, entries: a };
            })),
        i = (0, M.bG)([tU.A], () => tU.A.getFeedState(tV.X1.GLOBAL_FEED)?.loading === !0),
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
                                    feedId: tV.X1.GLOBAL_FEED,
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
                            text: l ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                tA.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: n ? "Disable Fast Impression Capping" : "Enable Fast Impression Capping",
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
        { data: a, isLoading: l } = (0, t6.I)(t),
        n = (0, M.bG)([t8.A], () => t8.A.hasNoData(t), [t]);
    return l || (null == a && !n)
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
        [a, l] = o.useState(""),
        n = (0, M.bG)([tM.A], () => tM.A.games),
        s = o.useMemo(
            () =>
                n
                    .filter((e) => null != e.name && "" !== e.name)
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sort((e, t) => t5(t.value) - t5(e.value)),
            [n],
        ),
        i = o.useMemo(() => ({ baseSort: (e, t) => t5(t.item.value) - t5(e.item.value), keys: ["label"] }), []),
        d = o.useCallback((e) => {
            t(e), null != e && l("");
        }, []),
        c = o.useCallback((e) => {
            l(e), e.trim().length > 0 && t(null);
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
    al = a(574560),
    an = a(994182);
let as = [t7.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL, t7.M.APP_WIDGET_V2_PROFILE_UPSELL_COACHMARK].map((e) => ({
    id: String(e),
    label: t7.M[e],
    value: e,
}));
function ai() {
    let [e, t] = o.useState("dismissals"),
        [a, l] = o.useState(t7.M.GAME_ACCOUNT_LINK_RECURRING_UPSELL),
        n = (0, M.bG)([ae.A], () => ae.A.settings.userContent?.recurringDismissibleContentStates[a] ?? null),
        s = (0, M.bG)([al.A], () => al.A.getAllGameUpsellDismissals(a)),
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
        n?.lastDismissedAtMs != null && "0" !== n.lastDismissedAtMs
            ? new Date(Number(n.lastDismissedAtMs)).toLocaleString()
            : "Never";
    return (0, r.jsxs)("div", {
        className: an.nd,
        children: [
            (0, r.jsxs)("div", {
                className: an.$H,
                children: [
                    (0, r.jsx)(I.D, {
                        className: k()(an.V3, { [an.u7]: "dismissals" === e }),
                        onClick: () => t("dismissals"),
                        children: "Dismissals",
                    }),
                    (0, r.jsxs)(I.D, {
                        className: k()(an.V3, { [an.u7]: "call-log" === e }),
                        onClick: () => t("call-log"),
                        children: ["Call Log ", m.length > 0 ? `(${m.length})` : ""],
                    }),
                ],
            }),
            "dismissals" === e
                ? (0, r.jsxs)("div", {
                      className: an.Lj,
                      children: [
                          (0, r.jsx)("div", {
                              className: an.uW,
                              children: (0, r.jsx)(x.l, {
                                  label: "Dismissible Content",
                                  value: a,
                                  onSelectionChange: (e) => l(e),
                                  options: as,
                                  selectionMode: "single",
                                  fullWidth: !0,
                              }),
                          }),
                          (0, r.jsxs)("div", {
                              className: an.uW,
                              children: [
                                  (0, r.jsx)(w.D, { variant: "heading-md/bold", children: "Global DCF State" }),
                                  (0, r.jsxs)(D.E, { variant: "text-sm/normal", children: ["Last dismissed: ", j] }),
                                  (0, r.jsxs)(D.E, {
                                      variant: "text-sm/normal",
                                      children: ["Times dismissed: ", n?.numTimesDismissed ?? 0],
                                  }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: an.uW,
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
                              className: k()(an.uW, an.LY),
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
                                                    let l = d[t],
                                                        n = s?.[e];
                                                    if (null == n) return null;
                                                    let i = l?.getIconURL(32);
                                                    return (0, r.jsxs)(
                                                        "div",
                                                        {
                                                            className: an.Nr,
                                                            children: [
                                                                (0, r.jsxs)("div", {
                                                                    className: an.MY,
                                                                    children: [
                                                                        null != i &&
                                                                            (0, r.jsx)("img", {
                                                                                src: i,
                                                                                alt: "",
                                                                                className: an.Z2,
                                                                            }),
                                                                        (0, r.jsxs)("div", {
                                                                            className: an.qi,
                                                                            children: [
                                                                                (0, r.jsx)(D.E, {
                                                                                    variant: "text-sm/semibold",
                                                                                    children: l?.name ?? "Unknown App",
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
                                                                        new Date(n.dismissedAt).toLocaleString(),
                                                                    ],
                                                                }),
                                                                (0, r.jsxs)(D.E, {
                                                                    variant: "text-xs/normal",
                                                                    children: ["Times dismissed: ", n.timesDismissed],
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
                      className: an.Lj,
                      children: (0, r.jsxs)("div", {
                          className: an.uW,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: an.aq,
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
                                                className: an.Nr,
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
                                                                      className: an.OK,
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
            hasLoadedEver: l,
            hasPreloaded: n,
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
                        l = ad.A.getChannel(a);
                    e[a] = l ?? null;
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
                        (0, r.jsxs)("div", { children: ["Has Preloaded: ", n ? "\u2705" : "\u274C"] }),
                        (0, r.jsxs)("div", { children: ["Has Loaded Ever: ", l ? "\u2705" : "\u274C"] }),
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
                                    [a, l] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = u[a]) ? (0, ao.m1)(t, H.default, ac.A) : "",
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
    aE = a(868511),
    a_ = a(147964),
    aC = a(760716),
    aS = a(115093),
    aN = a(11039);
let aA = window.GLOBAL_ENV.RELEASE_CHANNEL === aS.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function ak() {
    let e = (0, aC.i)((e) => e.overrideApplicationId),
        t = (0, aC.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        [l, n] = o.useState(aA),
        [s, i] = o.useState(J.FYj),
        d = o.useCallback(
            (e) => {
                e ? t(l) : t(null);
            },
            [l, t],
        ),
        c = o.useCallback(
            (e) => {
                n(e), a && t(e);
            },
            [a, t],
        ),
        u = (0, aC.i)((e) => e.showSelfActivity),
        m = (0, aC.i)((e) => e.setShowSelfActivity),
        x = (0, aC.i)((e) => e.recommendationApplicationIds),
        g = (0, aC.i)((e) => e.setRecommendationApplicationIds),
        j = o.useCallback(
            (e) => {
                e ? g(s) : g(null);
            },
            [s, g],
        ),
        b = (0, M.bG)([a_.A], () => null != a_.A.testModeApplicationId),
        f = o.useCallback((e) => {
            e ? (0, eR.openModal)((e) => (0, r.jsx)(aE.A, { ...e })) : ay.cL();
        }, []),
        y = (0, tw.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: l,
            source: tO.Ob.Embed,
            trackEntryPointImpression: !0,
        }),
        E = o.useCallback(
            (e) => {
                y?.(e);
            },
            [y],
        ),
        _ = o.useCallback(() => {
            (0, av.pX)(J.BVt.COLLECTIBLES_SHOP_GAME_SHOP(l));
        }, [l]);
    return (0, r.jsx)("div", {
        className: k()(tT.nd, aN.n),
        children: (0, r.jsxs)("div", {
            className: aN.k,
            children: [
                (0, r.jsx)(p.k, { label: "Application ID", value: l, onChange: c }),
                (0, r.jsx)(w.D, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, r.jsx)(v.d, { label: "Override activity application ID", checked: a, onChange: d }),
                (0, r.jsx)(v.d, { label: "Show own voice activity (bypass self check)", checked: u, onChange: m }),
                (0, r.jsx)(v.d, { label: "Enable application test mode", checked: b, onChange: f }),
                (0, r.jsx)(h.$, { text: "Open Game Profile Modal", onClick: E }),
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
var aI = a(540999),
    aD = a(723702),
    aT = a(865116);
a(670812), a(772958);
var aR = a(58736);
a(558179), a(21574);
var aO = a(231545),
    aw = a(761929),
    aM = a(23599);
function aL(e) {
    let { resizableNode: t, minHeight: a, onResize: l } = e,
        n = (0, aw.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: l,
            orientation: aw.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, r.jsx)("div", { onPointerDown: n, className: aM.Di });
}
function aP(e) {
    let { children: t, className: a, initialHeight: l, minHeight: n } = e,
        s = o.useRef(null),
        [i, d] = o.useState(l);
    return (0, r.jsxs)("div", {
        ref: s,
        className: aM.kL,
        style: { minHeight: n, height: i },
        children: [
            (0, r.jsx)(aL, { resizableNode: s, minHeight: n, onResize: d }),
            (0, r.jsx)("div", { className: k()(aM.KZ, a), children: t }),
        ],
    });
}
var aU = a(231643);
a(895017), aU.fu.NONE, aU.fu.NONE;
var aG = a(824552),
    aF = a(688810),
    aB = a(975460),
    a$ = a(46225),
    aV = a(487431),
    aW = a(905552),
    az = a(546183),
    aH = a(134861),
    aK = a(71393),
    aY = a(967198),
    aq = a(157257),
    aJ = a(942370),
    aQ = a(375708),
    aX = a(311350),
    aZ = a(325126);
function a0() {
    var e;
    let t,
        a,
        l = o.useRef(null),
        { analyticsLocations: n } = (0, aF.Ay)(tm.A.DEV_TOOLS),
        [s, i] = o.useState(""),
        d = (0, M.bG)([aY.A], () => aY.A.getGuildId()),
        c = (0, M.bG)([aK.A], () => aK.A.getGuild(d)),
        u = c?.gameApplicationIds ?? [],
        m = (0, tI.A)(u).filter((e) => null != e),
        x = (0, M.bG)([j.Ay, aq.A], () => (0, aW.A)(j.Ay, aq.A)),
        v = (0, tI.h)(s),
        b = (0, aB.g)(v),
        f = (0, M.yK)(
            [tk.A],
            () => v?.linkedGames?.map((e) => tk.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        y = (0, a$.RD)(v, { allowedFlows: [aJ._M.RPC], debug: !0 }),
        E = (0, a$.RD)(v, { allowedFlows: [aJ._M.WEB], debug: !0 }),
        _ = (0, M.bG)([aH.A], () => null != b && aH.A.isConnected(b.id)),
        C = (0, a$.RD)(v, { debug: !0 }),
        { canDeauthorize: S, deauthorize: N } =
            ((e = C.connectionApp?.id),
            (t = (0, M.bG)([az.default], () => az.default.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && aG.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: l,
        className: k()(tT.nd, aZ.nd),
        children: [
            (0, r.jsxs)("div", {
                className: aZ.kL,
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
                className: aZ.kL,
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
                                ? f.map((e) => ((0, aB.t)(v)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                : "N/A",
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(g.c, {}),
            (0, r.jsxs)("div", {
                className: aZ.kL,
                children: [
                    (0, r.jsx)(w.D, { variant: "heading-lg/normal", children: "Authorization" }),
                    (0, r.jsx)(aV.VT, {
                        overallStatus: y.debug.isSubscribedToAuthorizeRequest
                            ? aV.nW.OVERALL_GOOD
                            : _
                              ? aV.nW.WARN
                              : aV.nW.OVERALL_BAD,
                        name: aQ.intl.string(aX.default.AGLx00),
                        steps: [
                            {
                                status: _ ? aV.nW.GOOD : aV.nW.BAD,
                                text: aQ.intl.string(aX.default.kxF9br),
                                description: _ ? null : aQ.intl.string(aX.default.PFxxJa),
                                learnMoreLink: _
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: y.debug.isSubscribedToAuthorizeRequest
                                    ? aV.nW.GOOD
                                    : _
                                      ? aV.nW.WARN
                                      : aV.nW.BAD,
                                text: aQ.intl.string(aX.default.S94dzs),
                                description:
                                    y.debug.isSubscribedToAuthorizeRequest || !_
                                        ? null
                                        : aQ.intl.string(aX.default.aTULMB),
                                learnMoreLink:
                                    y.debug.isSubscribedToAuthorizeRequest || !_
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: C.chosenFlow === aJ._M.RPC,
                    }),
                    (0, r.jsx)(aV.VT, {
                        overallStatus: E.debug.hasConnectionEntrypointUrl ? aV.nW.OVERALL_GOOD : aV.nW.OVERALL_BAD,
                        name: aQ.intl.string(aX.default.K3ObrU),
                        steps: [
                            {
                                status: E.debug.hasConnectionEntrypointUrl ? aV.nW.GOOD : aV.nW.BAD,
                                text: aQ.intl.string(aX.default["8a7IrV"]),
                                description: E.debug.hasConnectionEntrypointUrl
                                    ? aQ.intl.formatToPlainString(aX.default["9iLeL2"], {
                                          url: E.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: C.chosenFlow === aJ._M.WEB,
                    }),
                    (0, r.jsx)(aV.Sy, {
                        status: C.hasAlreadyLinked ? aV.nW.OVERALL_GOOD : aV.nW.OVERALL_BAD,
                        text: aQ.intl.string(aQ.t["Vu/zmQ"]),
                    }),
                    0 === C.debug.validFlows.length &&
                        (0, r.jsx)(D.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: aQ.intl.string(aX.default.eg0mNa),
                        }),
                    (0, r.jsx)(h.$, {
                        disabled: !C.canStartAuthorization,
                        onClick: () => C.startAuthorization({ analyticsLocations: n }),
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
                        onClick: () => y.startAuthorization({ analyticsLocations: n }),
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, r.jsx)(h.$, {
                        disabled: !E.canStartAuthorization,
                        onClick: () => E.startAuthorization({ analyticsLocations: n }),
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
                            className: aZ.kL,
                            children: [
                                (0, r.jsx)(w.D, { variant: "heading-lg/normal", children: "Reward Configuration" }),
                                (0, r.jsx)("div", {
                                    className: aZ.Nr,
                                    children: (0, r.jsxs)("div", {
                                        className: aZ.Tc,
                                        children: [
                                            null != v.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, r.jsx)("img", {
                                                    src: v.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: aZ.L8,
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
var a1 = a(427358),
    a2 = a(465153);
let a8 = [
    {
        key: "user",
        cellClassName: a2.iL,
        render(e) {
            let { user: t, key: a } = e;
            return t?.username ?? a;
        },
    },
    {
        key: "affinity",
        renderHeader: () => (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "COMMUNICATION AFFINITY" }),
        cellClassName: a2.nz,
        render(e) {
            let { affinity: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "vcProbability",
        renderHeader: () => (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "VOICE AFFINITY" }),
        cellClassName: a2.nz,
        render(e) {
            let { vcProbability: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "isFriend",
        renderHeader: () => (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "IS FRIEND" }),
        cellClassName: a2.nz,
        render(e) {
            let { isFriend: t } = e;
            return t.toString();
        },
    },
];
function a6() {
    let e = (0, M.yK)([a1.A, H.default], () =>
        a1.A.getUserAffinities().map((e) => {
            let { otherUserId: t, communicationProbability: a, vcProbability: l, isFriend: n } = e;
            return { user: H.default.getUser(t), affinity: a, vcProbability: l, isFriend: n, key: t };
        }),
    );
    return 0 === e.length ? null : (0, r.jsx)(tR, { className: tT.nd, columns: a8, rowClassName: a2.nM, data: e });
}
var a3 = a(139716),
    a5 = a(847599),
    a4 = a(282621);
function a9() {
    return (0, r.jsx)("div", {
        className: k()(tT.nd, a4.k),
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(w.D, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                (0, r.jsx)(g.c, { gap: 16 }),
                (0, r.jsxs)("div", {
                    className: a4.h,
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
                                a3.A.showAgeVerificationGetStartedModal({ entryPoint: a5.q1.DEV_TOOLS_QUICK_ACTIONS }),
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var a7 = a(989349),
    le = a.n(a7),
    lt = a(862482),
    la = a(624479),
    ll = a(555704),
    ln = a(285796),
    ls = a(241326),
    li = a(892547),
    lr = a(297413),
    lo = a(379078),
    ld = a(704554),
    lc = a(957565),
    lu = a(58703),
    lm = a(80703),
    lh = a(495544);
let lx = 0,
    lp = [],
    lg = 0,
    lv = [],
    lj = !1;
class lb extends M.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(lh.default, aI.A);
    }
    get loggedEvents() {
        return lp;
    }
    get loggedEventsVersion() {
        return lg;
    }
    get loggedTriggers() {
        return lv;
    }
    get trackTriggers() {
        return lj;
    }
}
let lf = new lb(tA.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: l } = e;
        aI.A.isDeveloper &&
            (lp.push({
                key: (lx++).toString(),
                event: t,
                properties: a,
                fingerprint: null != l ? (0, lm.d)(l) : lh.default.getId(),
                timestamp: new Date(),
            }),
            lg++,
            lp.length > 500 && (lp = lp.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: l, excluded: n, location: s, previouslyTracked: i } = e;
        !aI.A.isDeveloper ||
            (lj &&
                (lv = [
                    ...lv,
                    {
                        key: (0, ej.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: l,
                        excluded: n,
                        location: s,
                        previouslyTracked: i,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                lv.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        lj = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (lp = []), lg++, (lv = []);
    },
});
var ly = a(658675);
function lE(e) {
    let { className: t, children: a } = e;
    return (0, r.jsx)("dl", { className: k()(tT.qo, t), children: a });
}
let l_ = (e) => {
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
                (0, r.jsx)("dt", { className: tT.Bz, children: t }),
                (0, r.jsxs)("dd", {
                    className: tT.Nw,
                    children: [
                        a,
                        null != l
                            ? (0, r.jsx)(I.D, {
                                  tag: "span",
                                  className: tT.nH,
                                  onClick: () => (0, lc.C)(l, () => s(!0)),
                                  children: n
                                      ? (0, r.jsx)(e6.U, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(la.T, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
};
function lC(e) {
    let { value: t } = e;
    return (0, r.jsx)(ly.P, { checked: t });
}
var lS = a(733657);
let lN = [
    {
        key: "event",
        cellClassName: lS.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "location",
        cellClassName: lS.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function lA(e) {
    let { children: t } = e;
    return (0, r.jsx)(d.Ip, { className: lS._D, children: (0, r.jsx)("dl", { children: t }) });
}
function lk(e) {
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
            className: lS.fY,
            children: [
                (0, r.jsx)("dt", { className: lS.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(I.D, {
                    tag: "span",
                    className: lS.nH,
                    onClick: () => (0, lc.C)(JSON.stringify(l), () => s(!0)),
                    children: n
                        ? (0, r.jsx)(e6.U, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(la.T, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let lI = new Set(["client_performance_cpu", "client_performance_memory"]),
    lD = [
        {
            id: "details",
            name: "Details",
            group: aU.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: l, fingerprint: n },
                        onClose: s,
                        filteredEvents: i,
                    } = e,
                    o = H.default.getUser(n),
                    d = le()(l);
                return (0, r.jsxs)("div", {
                    className: lS.sw,
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(aR.Ay, {
                            className: k()(tT.jr, lS.nZ),
                            children: [
                                (0, r.jsx)(aR.Ay.Icon, { icon: ll.U, tooltip: t }),
                                (0, r.jsxs)(aR.Ay.Title, {
                                    wrapperClassName: lS.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(I.D, {
                                            tag: "span",
                                            className: lS.KE,
                                            onClick: () => (0, lc.C)(t),
                                            children: (0, r.jsx)(la.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(aR.Ay.Icon, {
                                    icon: la.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, lc.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: l, fingerprint: n, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(aR.Ay.Icon, { icon: ln.a, tooltip: "Close", onClick: s }),
                            ],
                        }),
                        (0, r.jsxs)(lE, {
                            className: lS.ZK,
                            children: [
                                (0, r.jsx)(l_, {
                                    name: "Timestamp (local)",
                                    copyValue: l.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: l.toISOString(),
                                        title: (0, lu.i$)(d, "LLLL"),
                                        children: ["(", le().locale(), ") ", (0, lu.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(l_, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(lr.A, { user: o }),
                                    }),
                                (0, r.jsx)(l_, {
                                    name: "Fingerprint",
                                    copyValue: n,
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(lA, {
                            children: Object.entries(a).map((e) => {
                                let [a, l] = e,
                                    n = lI.has(a)
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
                                                lk,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: l || null },
                                                    children:
                                                        null != l
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(l) })
                                                            : (0, r.jsx)("code", {
                                                                  className: lS.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== n &&
                                                null !== n.average &&
                                                (0, r.jsx)(
                                                    lk,
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
    lT = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(lT)
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
    lR = {
        searchType: lo.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function lO() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        l = (0, M.bG)([lf], () => lf.loggedEventsVersion),
        [n, s] = o.useState(() => Object.keys(lT)),
        [i, d] = o.useState(lf.loggedEvents),
        c = o.useCallback((e) => {
            d(e);
        }, []);
    (0, ld.RT)(t, lf.loggedEvents, c, lR, [l]);
    let u = i.filter((e) => {
            for (let t of n) if (lT[t].filter(e)) return !0;
            return !1;
        }),
        [m, h] = o.useState(void 0),
        x = u.find((e) => e.key === m),
        { TabBar: p, renderSelectedTab: g } = (0, aU.Ay)({ tabs: lD }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: k()(tT.nd, lS.nd),
        children: [
            (0, r.jsxs)("div", {
                className: lS.rh,
                children: [
                    (0, r.jsx)(lt.$n, {
                        className: lS.Q$,
                        look: lt.$n.Looks.BLANK,
                        size: lt.$n.Sizes.ICON,
                        onClick: L.eY,
                        children: (0, r.jsx)("span", {
                            title: aQ.intl.string(aQ.t.VkKicb),
                            children: (0, r.jsx)(ls.u, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": aQ.intl.string(aQ.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: lS.Bi }),
                    (0, r.jsx)("div", {
                        className: lS.uW,
                        children: Object.entries(lT).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                I.D,
                                {
                                    className: k()(lS.pb, n.includes(t) && lS.bx),
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
                className: lS.rh,
                children: (0, r.jsx)(li.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(tR, { columns: lN, data: u, selectedRowKey: m, onClickRow: (e) => h(e.key) }),
            null != x &&
                (0, r.jsxs)(aP, {
                    className: lS.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(p, {}), g({ loggedEvent: x, onClose: () => h(void 0), filteredEvents: u })],
                }),
        ],
    });
}
var lw = a(382483),
    lM = a(385113),
    lL = a(315117);
function lP(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)(R.B, {
        gap: 8,
        padding: 8,
        className: lL.lt,
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
                              className: lL.YL,
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
function lU(e) {
    let { config: t, isSelected: a, onSelect: l } = e;
    return (0, r.jsxs)(R.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? lL.FM : lL.gt,
        children: [
            (0, r.jsx)(I.D, {
                className: lL.Av,
                onClick: l,
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
                onClick: () => (0, lw.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function lG() {
    let e = (0, M.bG)([lM.A], () => lM.A.getFeaturedFetchState());
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
                onClick: () => (0, lw.Wq)({ force: !0 }),
            }),
        ],
    });
}
function lF() {
    let e = (0, M.bG)([lM.A], () => lM.A.getDeveloperFetchState());
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
                onClick: () => (0, lw.i$)({ force: !0 }),
            }),
        ],
    });
}
function lB() {
    let [e, t] = o.useState(""),
        a = (0, M.bG)([lM.A], () => (e.length > 0 ? lM.A.getFetchState(e) : null)),
        l = (0, M.bG)([lM.A], () => (e.length > 0 ? lM.A.getConfigs(e) : null));
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
                onClick: () => (0, lw.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(D.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != l &&
                l.length > 0 &&
                (0, r.jsx)(R.B, { gap: 4, children: l.map((e) => (0, r.jsx)(lP, { config: e }, e.config_id)) }),
        ],
    });
}
function l$(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: l } = e,
        n = (0, M.bG)([lM.A], () => lM.A.getFeaturedFetchState());
    return (0, r.jsxs)(R.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(D.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            n === lM.e.FETCHING &&
                (0, r.jsx)(D.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    lU,
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
function lV(e) {
    let { config: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.c, {}),
            (0, r.jsxs)(R.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(D.E, { variant: "text-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(lP, { config: t }),
                ],
            }),
        ],
    });
}
function lW() {
    let [e, t] = o.useState(null),
        a = Object.values((0, M.bG)([lM.A], () => lM.A.getAllConfigsByApplication())).flat(),
        l = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsxs)(R.B, {
            gap: 16,
            padding: 8,
            className: lL.zr,
            children: [
                (0, r.jsx)(w.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(lG, {}),
                (0, r.jsx)(g.c, {}),
                (0, r.jsx)(lF, {}),
                (0, r.jsx)(g.c, {}),
                (0, r.jsx)(lB, {}),
                (0, r.jsx)(g.c, {}),
                (0, r.jsx)(l$, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != l && (0, r.jsx)(lV, { config: l }),
            ],
        }),
    });
}
var lz = a(636537),
    lH = a(153488),
    lK = a(927813);
let lY = 12 * lK.A.Millis.HOUR,
    lq = new Map(),
    lJ = !1,
    lQ = Object.freeze({ channelAffinities: [], lastFetched: 0 }),
    lX = { ...lQ };
function lZ() {
    lq = new Map(lX.channelAffinities.map((e) => [e.channelId, e]));
}
class l0 extends M.Ay.PersistedStore {
    static displayName = "ChannelAffinitiesV2Store";
    static persistKey = "ChannelAffinitiesStoreV2";
    initialize(e) {
        null != e && ((lX.channelAffinities = e.channelAffinities), (lX.lastFetched = e.lastFetched), lZ());
    }
    shouldFetch() {
        if (!lJ) return Date.now() - lX.lastFetched > lY;
    }
    isFetching() {
        return lJ;
    }
    getChannelAffinities() {
        return lX.channelAffinities;
    }
    getChannelAffinitiesMap() {
        return lq;
    }
    getChannelAffinity(e) {
        return lq.get(e);
    }
    compare(e, t) {
        return (lq.get(t)?.score ?? 0) - (lq.get(e)?.score ?? 0);
    }
    getState() {
        return lX;
    }
}
let l1 = new l0(tA.h, {
    LOAD_CHANNEL_AFFINITIES_V2: function () {
        lJ = !0;
    },
    LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineChannels: t } = e;
        (lX.lastFetched = Date.now()), (lJ = !1), (lX.channelAffinities = t), lZ();
    },
    LOAD_CHANNEL_AFFINITIES_V2_FAILURE: function () {
        lJ = !1;
    },
    LOGOUT: function () {
        (lX = { ...lQ }), (lq = new Map()), (lJ = !1);
    },
});
var l2 = a(907360);
let l8 = [
    {
        key: "channel",
        cellClassName: l2._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "SCORE" }),
        cellClassName: l2.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function l6() {
    o.useEffect(() => {
        !(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            l1.shouldFetch() && lH.A.hasConsented(J.YAq.PERSONALIZATION)
                ? (tA.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" }),
                  lz.Bo.get({
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
    let e = (0, M.yK)([l1, ad.A], () =>
        l1
            .getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: ad.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(tR, { className: tT.nd, columns: l8, rowClassName: l2.nM, data: e });
}
function l3() {
    return (0, r.jsxs)(D.E, {
        variant: "text-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var l5 = a(105565),
    l4 = a(558845),
    l9 = a(193337);
let l7 = (e) => {
        switch (e) {
            case l5.r.DC_DISMISSED:
                return "DISMISS:";
            case l5.r.DC_SHOWN:
                return "SHOW:";
            case l5.r.DC_SHOW_REQUEST:
                return "REQUEST TO SHOW:";
            default:
                return "UNKNOWN TYPE:";
        }
    },
    ne = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${t7.M[a]}`;
            },
        },
    ],
    nt = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${t7.M[t]}`;
            },
        },
    ];
function na() {
    let e = (0, M.bG)([l5.A], () => l5.A.getDCFEvents()),
        t = (0, l4.Ay)((e) => e.candidates),
        a = (0, l4.Ay)((e) => e.lastWinnerTime),
        l = 0 !== a ? le()(a).fromNow() : "n/a",
        n = (0, l4.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        s = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: l7(t) + a.toString(), event: l7(t), dismissibleContent: a };
        }),
        i = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: l9.KE,
        children: [
            (0, r.jsxs)("div", { className: l9.pq, children: ["Last winner time: ", l] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: l9.pq, children: ["Last winner: ", null != n ? t7.M[n] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: l9.uI,
                children: (0, r.jsx)(tR, { className: l9.Th, columns: nt, data: i }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(tR, { columns: ne, data: s }),
        ],
    });
}
var nl = a(689175),
    nn = a(541689),
    ns = a(199773);
function ni() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(nr());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        a.unshift(e), tN.w.set("RecentDismissibleOverrides", a);
    }, []);
    return [nr(), e];
}
function nr() {
    return tN.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var no = a(662546),
    nd = a(643278),
    nc = a(256787),
    nu = a(20439);
let nm = o.memo(function (e) {
    let { className: t, content: a, onChange: l } = e,
        n = t7.M[a],
        { isDismissed: s, handleToggleDismissState: i } = (0, nu.A)(n),
        [d, c] = o.useState(!1),
        u = o.useCallback(() => {
            l?.(a), i();
        }, [l, i, a]),
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
                        icon: d ? no.O : nd.s,
                        onClick: m,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(v.d, {
                        label: `${a.toLowerCase()} (${t7.M[a]})`,
                        description: (0, nc.Zm)(n)
                            ? (function (e) {
                                  let t = ae.A.settings.userContent?.recurringDismissibleContentStates?.[e];
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
                        onChange: u,
                    }),
                ],
            }),
            (0, r.jsx)(g.c, {}),
        ],
    });
});
function nh(e) {
    let { items: t, onChange: a } = e,
        [l, n] = ni(),
        s = (0, o.useCallback)(
            (e) => {
                n(e), a?.(e);
            },
            [n, a],
        );
    return (0, r.jsx)(R.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(nm, { content: e, onChange: s }, e)),
    });
}
function nx(e) {
    let { searchQuery: t = "" } = e,
        a = (0, l4.Ay)((e) => e.recentlyShown),
        [l, n] = ni(),
        s = l
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(t7.M[e]))
            .slice(0, 3);
    return 0 === s.length
        ? null
        : (0, r.jsx)(u.n, { label: "Recent Overrides", children: (0, r.jsx)(nh, { items: s }) });
}
function np(e) {
    let { searchQuery: t = "" } = e,
        a = (0, l4.Ay)((e) => e.recentlyShown)
            .map((e) => t7.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(u.n, { label: "Recently Shown", children: (0, r.jsx)(nh, { items: a }) });
}
var ng = a(594061),
    nv = a(268571);
function nj() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
        } = (0, M.cf)([ns.A], () => ({
            dailyCapReached: ns.A.hasUserHitDCCap(),
            dailyCapOverridden: ns.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: ns.A.newUserMinAgeRequiredOverridden,
        })),
        [l, n] = o.useState(""),
        [s, i] = o.useState(20),
        d = o.useMemo(
            () =>
                Object.keys(t7.M)
                    .filter((e) => e.toLowerCase().includes(l.toLowerCase()))
                    .reverse(),
            [l],
        ),
        c = o.useCallback(
            (e) => {
                let t = e.currentTarget;
                t.scrollHeight - t.scrollTop <= t.clientHeight + 100 && s < d.length && i((e) => e + 100);
            },
            [s, d.length],
        );
    return (0, r.jsx)(nl.Ch, {
        onScroll: c,
        children: (0, r.jsxs)("div", {
            className: nv.KE,
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
                                    onClick: () => (0, nn.Ab)(),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, ng.nT)(),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, ng.D1)(),
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
                            onChange: nn.SE,
                        }),
                        (0, r.jsx)(v.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: nn.U$,
                        }),
                    ],
                }),
                (0, r.jsx)(np, {}),
                (0, r.jsx)(nx, {}),
                (0, r.jsxs)(u.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(li.I, { query: l, onChange: n, onClear: () => n("") }),
                        (0, r.jsx)(nh, { items: d.slice(0, s) }),
                    ],
                }),
            ],
        }),
    });
}
var nb = a(276086),
    nf = a(154323),
    ny = a(155248);
function nE() {
    let e = (0, M.bG)([nf.A], () => nf.A.allWithDescriptions(), [], M.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, l] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                v.d,
                                { label: l, description: t, checked: a, onChange: (e) => (0, nb.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(g.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: ny.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: ny.x6,
                children: (0, r.jsx)(h.$, { variant: "primary", text: "Clear all", onClick: nb.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: ny.vu, children: t }),
        ],
    });
}
var n_ = a(881436);
function nC() {
    let e = (0, M.bG)([tM.A], () => tM.A.detectableGamesEtag),
        t = (0, M.bG)([tM.A], () => tM.A.lastFetched),
        a = (0, M.bG)([tM.A], () => tM.A.games.length);
    return (0, r.jsxs)(R.B, {
        gap: 4,
        children: [
            (0, r.jsx)(w.D, { variant: "heading-sm/bold", children: "Cache Status" }),
            (0, r.jsxs)(D.E, {
                variant: "text-sm/normal",
                children: [(0, r.jsx)("strong", { children: "Total games:" }), " ", a],
            }),
            (0, r.jsxs)(D.E, {
                variant: "text-sm/normal",
                children: [
                    (0, r.jsx)("strong", { children: "ETag:" }),
                    " ",
                    "" === e ? "(empty)" : (0, r.jsx)("span", { className: n_.ti, children: e }),
                ],
            }),
            (0, r.jsxs)(D.E, {
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
function nS(e) {
    let { game: t } = e;
    return (0, r.jsxs)(R.B, {
        gap: 12,
        className: n_.f_,
        children: [
            (0, r.jsxs)(R.B, {
                direction: "horizontal",
                gap: 12,
                align: "center",
                children: [
                    (0, r.jsx)(t2.A, { game: t, size: t2.M.LARGE }),
                    (0, r.jsxs)(R.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-lg/bold", children: t.name }),
                            (0, r.jsx)(D.E, { variant: "text-sm/normal", color: "text-muted", children: t.id }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: n_.aY, children: JSON.stringify(t, null, 2) }),
        ],
    });
}
function nN() {
    let [e, t] = o.useState(null),
        [a, l] = o.useState(""),
        n = (0, M.bG)([tM.A], () => tM.A.games),
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
        m = (0, M.bG)([tM.A], () => (null != u ? (tM.A.getDetectableGame(u) ?? null) : null), [u]);
    return (0, r.jsx)("div", {
        className: k()(tT.nd, n_.kL),
        children: (0, r.jsxs)(R.B, {
            gap: 16,
            padding: 12,
            className: n_.rf,
            children: [
                (0, r.jsxs)(R.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/bold", children: "Detectable Cache" }),
                        (0, r.jsx)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Inspect the local detectable games cache. Use this to verify whether a SKU or executable change has propagated to your client.",
                        }),
                    ],
                }),
                (0, r.jsx)(nC, {}),
                (0, r.jsxs)(R.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-sm/bold", children: "Search" }),
                        (0, r.jsx)(t1.Z, {
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
                (0, r.jsxs)(R.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-sm/bold", children: "Game ID" }),
                        (0, r.jsx)(p.k, {
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
                            (0, r.jsx)(g.c, {}),
                            null != m
                                ? (0, r.jsx)(nS, { game: m })
                                : (0, r.jsxs)(D.E, {
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
var nA = a(691540),
    nk = a(97483),
    nI = a(123292),
    nD = a(780907),
    nT = a(56562);
let nR = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "Marvel Rivals", value: "1314395942253756416" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
];
function nO(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: l } = (0, t6.I)(t.id);
    return (0, r.jsxs)(R.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != l && (0, r.jsx)(t2.A, { game: l }),
            (0, r.jsxs)(R.B, {
                justify: "center",
                gap: 0,
                children: [
                    (0, r.jsx)(D.E, { variant: "text-md/normal", children: l?.name }),
                    a && (0, r.jsx)(D.E, { variant: "text-xxs/normal", children: "Debug" }),
                ],
            }),
        ],
    });
}
function nw() {
    let e = (0, M.bG)([j.Ay], () => j.Ay.getRunningGames()),
        t = (0, M.bG)([j.Ay], () => j.Ay.getDebugRunningGame()),
        [a, l] = (0, o.useState)(t?.id ?? ""),
        n = (0, o.useMemo)(
            () =>
                nR.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        ),
        s = (e) => {
            if (null == e || "" === e) return void (0, nD.xt)(null);
            let t = tM.A.getDetectableGame(e),
                a = t?.executables[0],
                l = t?.thirdPartySkus[0]?.distributor;
            if (null == t || null == a)
                return (0, nA.P0)({
                    id: "devtools-set-debug-game-error",
                    type: nk.Ck.FAILURE,
                    message: "Invalid Game ID",
                });
            (0, nD.xt)({
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
                fullscreenType: nT.aI.UNKNOWN,
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
                                (0, r.jsx)(nO, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, r.jsx)(g.c, {}),
            (0, r.jsxs)(R.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(w.D, { variant: "heading-md/bold", children: "Set Debug Running Game" }),
                    (0, r.jsx)(p.k, { label: "Custom Game ID", value: a, onChange: l }),
                    (0, r.jsx)(t1.Z, {
                        label: "Pick a Preset Game",
                        options: n,
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
                                (0, r.jsx)(nI.Q, { variant: "secondary", text: "Clear", onClick: () => s(null) }),
                            (0, r.jsx)(h.$, { variant: "primary", text: "Detect Game", onClick: () => s(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var nM = a(240248),
    nL = a(769195);
function nP() {
    let [e, t] = o.useState(!1),
        [a, l] = o.useState(null),
        [n, s] = o.useState(null),
        i = o.useCallback(async () => {
            try {
                t(!0), l(null), s(null);
                let e = await lz.Bo.put({
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
    return (0, r.jsxs)(R.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(h.$, { variant: "primary", onClick: i, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, nM.uJ)(a) && (0, r.jsx)(D.E, { variant: "text-md/normal", color: "status-positive", children: a }),
            !(0, nM.uJ)(n) && (0, r.jsx)(D.E, { variant: "text-md/normal", color: "status-danger", children: n }),
        ],
    });
}
function nU() {
    return (0, r.jsx)("div", {
        className: nL.n,
        children: (0, r.jsx)(R.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(nP, {}) }),
    });
}
a(172879);
var nG = a(985623),
    nF = a.n(nG),
    nB = a(990078),
    n$ = a(874804),
    nV = a(782134),
    nW = a(113494),
    nz = a(603349),
    nH = a(155466);
function nK(e) {
    return parseFloat(e.toFixed(3));
}
let nY = [
    {
        key: "store",
        cellClassName: nH.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: nH.i7,
        render(e) {
            let { trace: t } = e;
            return `${nK(t.time)} ms`;
        },
    },
];
function nq(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(d.Ip, { children: (0, r.jsx)(tR, { columns: nY, data: a }) });
}
let nJ = [
    {
        id: "action",
        name: "Action",
        group: aU.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = le()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(lE, {
                        className: nH.mP,
                        children: [
                            (0, r.jsx)(l_, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, lu.i$)(a, "LLLL"),
                                    children: (0, lu.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(l_, { name: "Total Time", children: [nK(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(d.Ip, { className: nH.Dx, children: (0, r.jsx)(aO.A, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: aU.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsx)(nq, { actionLog: t });
        },
    },
];
function nQ(e) {
    let { actionLog: t, initialHeight: a } = e,
        l = o.useMemo(
            () =>
                t.error
                    ? [
                          ...nJ,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(nz.A, { className: nH.ik }), "Error"],
                              }),
                              group: aU.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: k()(nH.u4, tT.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: tT.R5,
                                                  children: (0, r.jsx)(lt.$n, {
                                                      className: tT.Q$,
                                                      size: lt.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(d.Ip, {
                                              className: nH.Dx,
                                              children: (0, r.jsx)(aO.A, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : nJ,
            [t],
        ),
        { TabBar: n, renderSelectedTab: s } = (0, aU.Ay)({ tabs: l }, [l]);
    return (0, r.jsxs)(aP, {
        className: nH.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(n, {}),
            (0, r.jsxs)(aR.Ay, {
                className: k()(tT.jr, nH.nZ),
                children: [
                    (0, r.jsx)(aR.Ay.Icon, { icon: n$.K, tooltip: t.name }),
                    (0, r.jsx)(aR.Ay.Title, {
                        wrapperClassName: k()(tT.qd, tT.ZE),
                        className: tT.Pz,
                        children: t.name,
                    }),
                    (0, r.jsx)(aR.Ay.Icon, {
                        icon: la.T,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var l;
                                    return (t[a] = ((l = e[a]), J.AKn.test(l) ? "REDACTED" : l)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, lc.C)(a, () =>
                                (0, nA.P0)({
                                    id: "copy-action-log-name",
                                    type: nk.Ck.SUCCESS,
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
let nX = [
        {
            key: "action",
            cellClassName: nH.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(nz.A, { className: nH.ik }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: nH.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${nK(t.totalTime)} ms`;
            },
        },
        {
            key: "timestamp",
            cellClassName: nH.i7,
            render(e) {
                let { actionLog: t } = e;
                return le()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    nZ = {
        searchType: lo.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function n0() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        l = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = nF()(() => {
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
        n = o.useMemo(() => l.map((e) => ({ key: e.id.toString(), actionLog: e })).toReversed(), [l]),
        [s, i] = o.useState(n),
        [d, c] = o.useState(n),
        [u, m] = o.useState(!1),
        [h, x] = o.useState(),
        p = o.useCallback((e) => {
            c(e);
        }, []);
    (0, ld.RT)(t, u ? s : n, p, nZ);
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
        className: k()(tT.nd, nH.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nH.KE,
                children: [
                    (0, r.jsx)(nB.m, {
                        text: b,
                        children: (0, r.jsx)(eI.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? nV.u : nW.E,
                            "aria-label": b,
                            onClick: () => g(!u),
                        }),
                    }),
                    (0, r.jsx)(li.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(tR, {
                columns: nX,
                data: j,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => x(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(nQ, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var n1 = a(936388),
    n2 = a(132369);
function n8() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: k()(tT.nd, n2.n),
        children: (0, r.jsx)(h.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: n1.A.clearUploadedKeyVersions,
        }),
    });
}
var n6 = a(825484),
    n3 = a(37962),
    n5 = a(881520),
    n4 = a(670455),
    n9 = a(861160);
let n7 = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function se() {
    let [e, t] = o.useState(null),
        [a, l] = o.useState(0),
        [n, s] = o.useState(1e3),
        [i, d] = o.useState(0),
        c = (0, M.bG)([n5.A], () => (null === e ? null : (n5.A.getFeedbackConfig(n4.MW[e]) ?? n3.u[n4.MW[e]]))),
        m = Object.entries(n4.MW),
        v = m.slice(m.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        j = o.useMemo(() => null != e && i >= 0 && i <= 100 && a >= 0, [e, i, a]);
    return (0, r.jsx)("div", {
        className: n9.kL,
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
                                    onChange: (e) => l(parseFloat(e)),
                                }),
                                (0, r.jsx)(x.l, {
                                    label: "Override cooldown duration type",
                                    hideLabel: !0,
                                    options: n7,
                                    value: n,
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
                (0, r.jsxs)(n6.e, {
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
                                        cooldown: a * n,
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
var st = a(334279),
    sa = a(663417),
    sl = a(147925),
    sn = a(557009),
    ss = a(788868);
let si = async () =>
        (
            await lz.Bo.get({
                url: J.Rsh.ENTITLEMENTS_FOR_APPLICATION(ss.tv),
                oldFormErrors: !0,
                query: { exclude_consumed: !0, exclude_ended: !0 },
                rejectWithError: !0,
            })
        ).body.map((e) => sn.A.createFromServer(e)),
    sr = async (e) => {
        await lz.Bo.post({
            url: "/debug/entitlements/fractional-premium",
            body: { count: 1, sku_id: e },
            rejectWithError: !1,
        });
    },
    so = async (e) => {
        let t = "/debug/entitlements/fractional-premium";
        null != e && (t = `${t}/${e}`), await lz.Bo.del({ url: t, rejectWithError: !0 });
    },
    sd = async () => {
        await lz.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
    },
    sc = () => {
        let [e, t] = o.useState([]),
            [a, l] = o.useState(!1),
            n = (0, o.useCallback)(async () => {
                try {
                    l(!0);
                    let e = await si();
                    t(e);
                } finally {
                    l(!1);
                }
            }, []),
            s = (0, o.useCallback)(
                async (e) => {
                    await sr(e), await n();
                },
                [n],
            );
        return {
            grantFractionalPremium: s,
            deleteFractionalPremium: (0, o.useCallback)(
                async (e) => {
                    await so(e), await n();
                },
                [n],
            ),
            triggerNextEntitlementFulfillment: (0, o.useCallback)(async () => {
                await sd(), await n();
            }, [n]),
            refreshEntitlementList: n,
            entitlements: e,
            loading: a,
        };
    };
var su = a(51846),
    sm = a(214868);
let sh = {
        [J.GD.QUEST_REWARD]: "Quest Reward",
        [J.GD.DEVELOPER_GIFT]: "Developer Gift",
        [J.GD.INVOICE]: "Invoice",
        [J.GD.REVERSE_TRIAL]: "Reverse Trial",
        [J.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
        [J.GD.SUBSCRIPTION]: "Subscription",
        [J.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
    },
    sx = (e) => {
        let t,
            { entitlement: a, active: l, onDelete: n } = e,
            s = (e) => (null != e ? (0, lu.i$)(e, "LLL") : "---");
        return (0, r.jsxs)("div", {
            className: k()(su.Nr, l ? sm.C1 : ""),
            children: [
                (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["ID: ", a.id, " "] }),
                !l &&
                    (0, r.jsxs)(D.E, {
                        variant: "text-md/normal",
                        children: ["SKU: ", sp.find((e) => e.value === a.skuId)?.label],
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
                        null != (t = a.sourceType) && t in sh ? sh[t] : `Unknown source type ${t}`,
                    ],
                }),
                l &&
                    null != n &&
                    (0, r.jsx)(lt.$n, {
                        className: su.RW,
                        size: lt.$n.Sizes.TINY,
                        color: lt.$n.Colors.RED,
                        look: lt.$n.Looks.OUTLINED,
                        onClick: n,
                        children: "Delete",
                    }),
            ],
        });
    },
    sp = [
        { id: "1h", label: "1 hour", value: st.j.PREMIUM_TIER_2_1_HOUR },
        { id: "1d", label: "1 day", value: st.j.PREMIUM_TIER_2_1_DAY },
        { id: "3d", label: "3 days", value: st.j.PREMIUM_TIER_2_3_DAY },
    ];
function sg() {
    let [e, t] = o.useState(!1),
        [a, l] = o.useState(st.j.PREMIUM_TIER_2_1_HOUR),
        [n, s] = o.useState([]),
        [i, c] = o.useState([]),
        {
            refreshEntitlementList: u,
            grantFractionalPremium: m,
            deleteFractionalPremium: p,
            triggerNextEntitlementFulfillment: g,
            entitlements: v,
            loading: j,
        } = sc();
    return (
        o.useEffect(() => {
            u();
        }, [u]),
        o.useEffect(() => {
            s(v.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === J.zF_.FRACTIONAL_REDEMPTION)),
                c(v.filter((e) => Object.values(st.j).includes(e.skuId) && null == e.startsAt));
        }, [v]),
        (0, r.jsx)(d.Ip, {
            className: tT.nd,
            children: (0, r.jsxs)("div", {
                className: sm.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: sm.dL,
                        children: [
                            (0, r.jsx)(D.E, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, r.jsxs)(I.D, {
                                onClick: () => t(!e),
                                className: su.As,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Info" }),
                                    }),
                                    (0, r.jsx)(sl.A, { direction: e ? sl.A.Directions.UP : sl.A.Directions.DOWN }),
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
                        className: k()([su.uW, sm.Uo]),
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: sp,
                                onSelectionChange: l,
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
                        className: su.uW,
                        children: [
                            (0, r.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: sm.dL,
                                children: [
                                    (0, r.jsx)(D.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: su.GC,
                                        children: [
                                            (0, r.jsx)(lt.$n, {
                                                disabled: j,
                                                size: lt.$n.Sizes.TINY,
                                                color: lt.$n.Colors.PRIMARY,
                                                look: lt.$n.Looks.OUTLINED,
                                                onClick: () => g(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(lt.$n, {
                                                disabled: j,
                                                size: lt.$n.Sizes.TINY,
                                                color: lt.$n.Colors.RED,
                                                look: lt.$n.Looks.OUTLINED,
                                                onClick: () => p(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(lt.$n, {
                                                disabled: j,
                                                look: lt.$n.Looks.BLANK,
                                                size: lt.$n.Sizes.ICON,
                                                onClick: u,
                                                children: (0, r.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, r.jsx)(sa.f, { size: "xs", color: "currentColor" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            n.length > 0 &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Active premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: n.map((e) =>
                                                (0, r.jsx)(
                                                    sx,
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
                                            children: i.map((e) => (0, r.jsx)(sx, { entitlement: e }, e.id)),
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
var sv = a(390544),
    sj = a(396748),
    sb = a(522055),
    sf = a(661202);
function sy() {
    let e = (0, M.bG)([aY.A], () => aY.A.getGuildId()),
        t = (0, M.bG)([aK.A], () => aK.A.getGuild(e)?.name),
        a = (0, M.bG)([sb.A], () => sb.A.getStateForGuild(e)?.instances),
        l = o.useMemo(() => Object.values(a ?? {})[0], [a]),
        n = o.useCallback(
            (t) => {
                null != l &&
                    null != e &&
                    tA.h.dispatch({
                        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                        guildId: e,
                        instance: { ...l, status: t },
                    });
            },
            [l, e],
        ),
        s = o.useMemo(
            () =>
                Object.values(sv.M).map((e) =>
                    (0, r.jsx)(
                        h.$,
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
                tA.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...l, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [l, e]);
    return null == e
        ? null
        : (0, r.jsxs)(d.Ip, {
              className: sf.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: sf.uW,
                      children: (0, r.jsx)(w.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: sf.uW,
                      children: [
                          (0, r.jsx)(D.E, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${l?.name}`,
                          }),
                          (0, r.jsx)("div", { className: sf.UD, children: s }),
                          (0, r.jsx)(D.E, { variant: "eyebrow", children: "Remove Server Info" }),
                          (0, r.jsx)("div", {
                              className: sf.UD,
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
                                  (0, sj.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
function sE(e, t) {
    let a = "boolean" == typeof t ? t : !aT.Ay.get(e);
    tA.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var s_ = a(460281);
function sC(e) {
    let { devSettingsCategory: t } = e,
        a = (0, M.bG)([aT.Ay], () => aT.Ay.allByCategory(t), [t], M.My),
        l = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: l }] = e;
                    return (0, r.jsx)(v.d, { label: l, description: t, checked: a, onChange: (e) => sE(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: k()(tT.nd, s_.n), children: l });
}
var sS = a(950305),
    sN = a(231483),
    sA = a(597770),
    sk = a(433492),
    sI = a(695458),
    sD = a(796140),
    sT = a(268791),
    sR = a(836480),
    sO = a(855473),
    sw = a(626258),
    sM = a(420854),
    sL = a(373846),
    sP = a(657044),
    sU = a(141060),
    sG = a(608599),
    sF = a(685761),
    sB = a(157225),
    s$ = a(362704),
    sV = a(625903),
    sW = a(628284),
    sz = a(320448),
    sH = a(562708),
    sK = a(830215),
    sY = a(381689),
    sq = a(889227),
    sJ = a(499785),
    sQ = a(315069);
class sX extends sQ.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids);
    }
    static fromServer(e) {
        return new sX(e);
    }
    setPassword(e) {
        return (this.password = e), this;
    }
}
let sZ = { pools: null, users: null };
function s0(e) {
    null == sZ.users && (sZ.users = new Map()), sZ.users.set(e.id, new sq.A(e));
}
class s1 extends M.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (sZ.pools = new Map(Object.entries(e.pools))),
            null != e.users && (sZ.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != sZ.pools ? Object.fromEntries(sZ.pools) : null,
            users: null != sZ.users ? Object.fromEntries(sZ.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(sZ.users?.values() ?? []).filter((t) => sZ.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return sZ.pools?.get(e) ?? null;
    }
    getUser(e) {
        return sZ.users?.get(e) ?? null;
    }
    getPools() {
        return null === sZ.pools ? null : Array.from(sZ.pools.values());
    }
}
let s2 = new s1(tA.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        null == sZ.pools && (sZ.pools = new Map()), sZ.pools.set(t.id, t), a.forEach(s0);
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = sZ.pools?.get(t);
        if (null == a) return !1;
        a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                sZ.users?.delete(e);
            }),
            sZ.pools?.delete(t);
    },
});
var s8 = a(835002);
async function s6(e, t) {
    return await sJ.A.get({
        url: J.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: sH.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: a, body: l } = e;
            if (!a) return void sY.A.showFailedToast(s8.OB.GENERIC_ERROR);
            let { generated_pool: n, users: s } = l;
            tA.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: sX.fromServer(n).setPassword(t),
                users: s.map((e) => new sq.A(e)),
            });
        })
        .catch(() => (sY.A.showFailedToast(s8.OB.GENERIC_ERROR), null));
}
var s3 = a(844330),
    s5 = a(277851);
let s4 = [
        sS.n,
        sN.l,
        sA.o,
        sk.K,
        sI.m,
        sD.c,
        sT.$,
        sR.Q,
        sO.Z,
        sw.A,
        sM.E,
        sL.C,
        sP._,
        sU.i,
        sG.L,
        sF.f,
        sB.N,
        s$.Y,
        sV.Z,
    ],
    s9 = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ],
    s7 = () => {
        let [e, t] = o.useState(""),
            [a, l] = o.useState(""),
            [n, s] = o.useState(!1);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("form", {
                    onSubmit: async (n) => {
                        n.preventDefault(), s(!0);
                        try {
                            await s6(e, a), t(""), l("");
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
                                        disabled: n,
                                    }),
                                    (0, r.jsx)(p.k, {
                                        type: "password",
                                        fullWidth: !0,
                                        value: a,
                                        onChange: l,
                                        placeholder: "Password",
                                        disabled: n,
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
                                            t(""), l("");
                                        },
                                        disabled: 0 === e.length || 0 === a.length || n,
                                    }),
                                    (0, r.jsx)(h.$, {
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
                (0, r.jsx)(g.c, { gap: 4 }),
            ],
        });
    },
    ie = (e) => {
        let { pool: t } = e,
            { id: a, summary: l } = t,
            n = s2.getUsersForPool(a),
            s = (0, M.bG)([lh.default], () => lh.default.getId()),
            i = s4[Number(a) % s4.length],
            d = s9[Number(a) % s9.length],
            c = o.useCallback(() => {
                tA.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
            }, [a]);
        return (0, r.jsx)(R.B, {
            direction: "horizontal",
            align: "start",
            justify: "space-between",
            children: (0, r.jsx)(s3.A, {
                icon: (0, r.jsx)(D.E, {
                    variant: "text-md/medium",
                    color: d,
                    className: s5.td,
                    children: (0, r.jsx)(i, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
                title: l,
                className: s5.JC,
                subtitle: `${n.length} users`,
                children: (0, r.jsxs)(R.B, {
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
                                        0 !== a && (0, r.jsx)(g.c, { gap: 4 }),
                                        (0, r.jsx)(
                                            I.D,
                                            {
                                                onClick: (a) => {
                                                    a.stopPropagation(),
                                                        (function (e, t) {
                                                            let a = s2.getUser(t);
                                                            if (null == a) throw Error("User not found");
                                                            let l = s2.getPool(e)?.password;
                                                            if (null == l) throw Error("Pool password not found");
                                                            if (null == a.email) throw Error("User email not found");
                                                            sK.A.login({
                                                                login: a.email,
                                                                password: l,
                                                                isMultiAccount: !0,
                                                                source: "generated_test_user",
                                                            }).catch(
                                                                () => (sY.A.showFailedToast(s8.OB.GENERIC_ERROR), null),
                                                            );
                                                        })(t.id, e.id);
                                                },
                                                "aria-disabled": s === e.id,
                                                className: k()(s5.vk, { [s5.Pe]: s === e.id }),
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
                                                                className: k()({ [s5.WP]: s === e.id }),
                                                                children: [
                                                                    (0, r.jsx)(sS.n, {
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
                                                                                className: s5.c1,
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
                                                                      children: (0, r.jsx)(sW.y, {
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                                  })
                                                                : (0, r.jsx)(sz._, {
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
                            className: s5.UD,
                            children: (0, r.jsx)(h.$, {
                                icon: ls.u,
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
function it() {
    let e = (0, M.yK)([s2], () => s2.getPools() ?? []);
    return (0, r.jsxs)(R.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: s5.kL,
        children: [
            (0, r.jsx)(s7, {}),
            (0, r.jsx)(d.Ip, { className: s5.Ik, children: e?.map((e) => (0, r.jsx)(ie, { pool: e }, e.id)) }),
        ],
    });
}
var ia = a(582306),
    il = a(528153),
    is = a(275759),
    ii = a(888429);
function ir(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function io() {
    let e = (0, M.bG)([is.Ay], () => is.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, M.bG)([is.Ay], () => is.Ay.getDevToolCurrentDate()),
        a = (0, M.bG)([is.Ay], () => is.Ay.getGiftUnreadNotificationLastDismissedTimes()),
        l = (0, M.bG)([is.Ay], () => is.Ay.getMessageGiftIntentLastShownMap()),
        n = (0, M.bG)([is.Ay], () => is.Ay.getHighestAffinityFriendAnniversaries()),
        s = (0, M.bG)([is.Ay], () => is.Ay.getHighAffinityFriendAnniversaries()),
        i = (0, M.bG)([is.Ay], () => is.Ay.getProfilePopoutGiftIntentsDismissMap()),
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
            let t = a1.A.getUserAffinity(e);
            return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
        };
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)("div", {
            className: ii.l$,
            children: [
                (0, r.jsx)(D.E, { className: ii.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, r.jsx)("div", {
                    className: ii.Pm,
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
                                text: "Re-randomize",
                                disabled: null == e,
                                onClick: () => {
                                    tA.h.dispatch({ type: "DEV_TOOLS_RESAMPLE_FRIEND_ANNIVERSARIES" });
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
                        className: ii.Pm,
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
                                n.length > 0 &&
                                    (0, r.jsxs)(R.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(D.E, {
                                                variant: "text-xs/semibold",
                                                children:
                                                    "Highest Affinity Friend Anniversaries (Eligible for Notification):",
                                            }),
                                            n.map((e) => {
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
                    className: ii.Pm,
                    children: (0, r.jsxs)(R.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(ia.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? le()(t) : void 0,
                                onSelect: (e) => {
                                    let t = le()(),
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
                    className: ii.Pm,
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
                                            (0, ng._N)(t7.M.GIFT_INTENT_MESSAGE);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsx)(D.E, {
                                variant: "text-xs/normal",
                                children: null != o ? `Dismissed at: ${ir(o)}` : "Not dismissed",
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: ii.Pm,
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
                            Object.keys(l).length > 0 &&
                                (0, r.jsxs)(R.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift Message Intent Last Shown:",
                                        }),
                                        Object.entries(l).map((e) => {
                                            let [t, a] = e,
                                                l = H.default.getUser(t),
                                                n = l?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                D.E,
                                                { variant: "text-xs/normal", children: [n, ": ", ir(a)] },
                                                t,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: ii.Pm,
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
                                            (0, r.jsx)(D.E, { variant: "text-xs/normal", children: ir(e) }, t),
                                        ),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: ii.Pm,
                    children: [
                        (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Send gift notification" }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Send",
                            onClick: () => {
                                il.A.sendGiftingNotificationIfEligible();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: ii.Pm,
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
                    className: ii.Pm,
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
                                                l = H.default.getUser(t),
                                                n = l?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                D.E,
                                                { variant: "text-xs/normal", children: [n, ": ", ir(a)] },
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
var id = a(460890),
    ic = a(349288),
    iu = a(517461),
    im = a(214947),
    ih = a(403581),
    ix = a(34188);
let ip = [
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
var ig = a(545406);
let iv = [0, 0.5, 1],
    ij = ["Center", "Inner ring", "Outer ring"],
    ib = iv.length,
    iy = "ILLO_BLUE",
    iE = "ILLO_BLUE_40",
    i_ = Array.from({ length: ib }, () => iE),
    iC = Array.from({ length: ib }, () => iy),
    iS = ["1", "0.5", "0"],
    iN = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    iA = [
        { label: "Light", value: J.NJ8.LIGHT, id: J.NJ8.LIGHT },
        { label: "Dark", value: J.NJ8.DARK, id: J.NJ8.DARK },
        { label: "Darker", value: J.NJ8.DARKER, id: J.NJ8.DARKER },
        { label: "Midnight", value: J.NJ8.MIDNIGHT, id: J.NJ8.MIDNIGHT },
    ],
    ik = { [J.NJ8.MIDNIGHT]: J.NJ8.DARKER, [J.NJ8.DARKER]: J.NJ8.DARK, [J.NJ8.LIGHT]: J.NJ8.DARK },
    iI = { [J.NJ8.LIGHT]: "light", [J.NJ8.DARK]: "ash", [J.NJ8.DARKER]: "dark", [J.NJ8.MIDNIGHT]: "onyx" },
    iD = [
        { id: "friends", icon: im.$, text: "Friends" },
        { id: "nitro", icon: ih.t, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: ix.U, text: "Shop", useCustomGradient: !0 },
    ],
    iT = ip.map((e) => ({ label: e, value: e, id: e })),
    iR = Object.fromEntries(
        ip.map((e) => [
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
                        [a, l, n] = eO.A.unsafe_rawColors[e].resolve().rgba(),
                        s =
                            (0.299 * a + 0.587 * l + 0.114 * n) / 255 > 0.5
                                ? eO.A.unsafe_rawColors.OPACITY_BLACK_28
                                : eO.A.unsafe_rawColors.OPACITY_WHITE_28,
                        i = (0, r.jsx)("span", {
                            className: ig.oP,
                            style: { background: `rgb(${a}, ${l}, ${n})`, border: `1px solid ${s.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: i };
                }),
        ]),
    );
var iO = a(306327);
function iw(e, t, a) {
    return e.map((e, l) => (l === t ? a : e));
}
function iM(e, t) {
    let [a, l, n, s] = eO.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: l, b: n, a: s };
}
function iL(e, t) {
    let a = eO.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function iP(e) {
    let { yaml: t, label: a } = e,
        l = o.useCallback(() => {
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
                        icon: la.T,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: l,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: ig.RP, children: t }),
        ],
    });
}
function iU(e) {
    let { allResolvedStops: t } = e,
        a = o.useMemo(
            () =>
                ij.map((e, a) => {
                    let l;
                    return (
                        (l = iA
                            .map((e) => {
                                let l,
                                    n,
                                    { value: s } = e,
                                    i = iI[s],
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
    return (0, r.jsxs)(R.B, {
        gap: 16,
        children: [
            (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Token YAML" }),
            ij.map((e, t) => (0, r.jsx)(iP, { yaml: a[t], label: e }, e)),
        ],
    });
}
function iG(e, t, a) {
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
    return new iO.A("srgb", [
        (e.r * (1 - r) + l * r) / 255,
        (e.g * (1 - r) + n * r) / 255,
        (e.b * (1 - r) + s * r) / 255,
    ]);
}
function iF(e, t, a) {
    let l = a.map((e) => {
            let [t, a, l] = eO.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: l, opacity: e.opacity, position: e.position };
        }),
        n = 1 / 0,
        s = (e) => {
            e < n && (n = e);
        };
    for (let a of l) s(e.contrast(iG(t, l, a.position), "WCAG21"));
    for (let a = 0; a < l.length - 1; a++) {
        let { contrast: n } = (function (e, t, a, l, n) {
            let s = 1 / 0,
                i = l;
            for (let r = 0; r <= 100; r++) {
                let o = l + (r / 100) * (n - l),
                    d = a.contrast(iG(e, t, o), "WCAG21");
                d < s && ((s = d), (i = o));
            }
            return { contrast: s, position: i };
        })(t, l, e, l[a].position, l[a + 1].position);
        s(n);
    }
    return Math.round(100 * n) / 100;
}
function iB(e) {
    let [t, a, l] = eO.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [n, s, i] = eO.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = eO.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new iO.A("srgb", [t / 255, a / 255, l / 255]),
        background: { r: n * (1 - c) + r * c, g: s * (1 - c) + o * c, b: i * (1 - c) + d * c },
    };
}
function i$() {
    return {
        colors: Array.from({ length: ib }, () => void 0),
        scales: Array.from({ length: ib }, () => void 0),
        opacities: Array.from({ length: ib }, () => void 0),
    };
}
function iV() {
    return {
        [J.NJ8.LIGHT]: i$(),
        [J.NJ8.DARK]: { colors: [...i_], scales: [...iC], opacities: [...iS] },
        [J.NJ8.DARKER]: i$(),
        [J.NJ8.MIDNIGHT]: i$(),
    };
}
function iW() {
    let e = (0, id.G9)(),
        [t, a] = o.useState(J.NJ8.DARK),
        [l, n] = (0, iu.V)("DevToolsGradientContrastPanel_themeStops", iV()),
        s = l ?? iV(),
        [i, c] = o.useState(["", "", ""]),
        [u, m] = o.useState([null, null, null]),
        [x, g] = o.useState(null),
        { images: v, renderPickers: j } = (function () {
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
                        (0, r.jsxs)(R.B, {
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
                                              (0, r.jsx)(D.E, { variant: "text-sm/normal", children: e.name }),
                                              (0, r.jsx)(nI.Q, {
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
                    [e, l],
                );
            return { images: { buttonBackground: e }, renderPickers: n };
        })(),
        b = o.useMemo(
            () =>
                Object.fromEntries(
                    iA.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    l = [],
                                    n = [];
                                for (let s = 0; s < ib; s++) {
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
                                        d = ik[d];
                                    }
                                    a.push(i ?? i_[s]), l.push(r ?? iC[s]), n.push(o ?? iS[s]);
                                }
                                return { colors: a, scales: l, opacities: n };
                            })(s, t),
                        ];
                    }),
                ),
            [s],
        ),
        f = b[t],
        y = o.useCallback(
            (e) => {
                n({ ...s, [t]: e(s[t]) });
            },
            [t, n, s],
        ),
        E = o.useMemo(() => iB({ theme: t, saturation: 1 }), [t]),
        _ = o.useMemo(() => {
            let e = [];
            for (let t = 0; t < ib; t++) {
                let a = parseFloat(f.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: f.colors[t], opacity: a, position: iv[t] });
            }
            return e;
        }, [f]),
        C = o.useMemo(() => {
            if (null == _) return null;
            let { text: e, background: t } = E;
            return ij.map((a, l) =>
                iR[f.scales[l]].map((a) => {
                    let n = iF(e, t, iw(_, l, { ..._[l], color: a.value }));
                    return { ...a, trailing: `(${n}:1)` };
                }),
            );
        }, [_, E, f.scales]),
        S = o.useMemo(() => {
            try {
                return iA.map((e) => {
                    let { value: t, label: a } = e,
                        l = b[t],
                        n = [];
                    for (let e = 0; e < ib; e++) {
                        let s = parseFloat(l.opacities[e]);
                        if (isNaN(s) || s < 0 || s > 1) return { theme: t, label: a, result: null };
                        n.push({ color: l.colors[e], opacity: s, position: iv[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: l, background: n } = iB(t),
                                s = iF(l, n, e),
                                i = s >= 4.5;
                            if (!i)
                                for (let t = 0; t < e.length; t++) {
                                    let s = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return ip.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == s) continue;
                                    let i = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of iR[s]) {
                                        if (o === e[t].color) continue;
                                        let s = iF(l, n, iw(e, t, { ...e[t], color: o }));
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
        }, [b]);
    return (0, r.jsx)(d.Ar, {
        className: ig.XG,
        children: (0, r.jsxs)(R.B, {
            gap: 24,
            padding: 8,
            className: ig.zr,
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
                                (0, r.jsx)(ic.Anchor, {
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
                    options: iA,
                }),
                (0, r.jsxs)(R.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: ig.G9,
                            children: ij.map((e, t) => {
                                let a = "" !== i[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)(R.B, {
                                                gap: 0,
                                                className: ig.hi,
                                                children: [
                                                    (0, r.jsx)(D.E, { variant: "text-md/medium", children: e }),
                                                    (0, r.jsx)(nI.Q, {
                                                        variant: "secondary",
                                                        textVariant: "text-xs/normal",
                                                        text: `(${iL(f.colors[t], parseFloat(f.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                iL(f.colors[t], parseFloat(f.opacities[t])),
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
                                                    let a = iR[e][0]?.value;
                                                    y((l) => ({
                                                        ...l,
                                                        scales: iw(l.scales, t, e),
                                                        colors: null != a ? iw(l.colors, t, a) : l.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: iT,
                                            }),
                                            (0, r.jsx)(t1.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: f.colors[t],
                                                onSelectionChange: (e) =>
                                                    y((a) => ({ ...a, colors: iw(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: C?.[t] ?? iR[f.scales[t]],
                                            }),
                                            (0, r.jsx)(p.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: f.opacities[t],
                                                onChange: (e) => y((a) => ({ ...a, opacities: iw(a.opacities, t, e) })),
                                                placeholder: "0\u20131",
                                            }),
                                            (0, r.jsx)(p.k, {
                                                label: `Hex${a && null != u[t] ? ` (dE: ${u[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: i[t],
                                                onChange: (e) => {
                                                    c((a) => iw(a, t, e));
                                                    let a = (function (e) {
                                                        if (!iN.test(e)) return null;
                                                        try {
                                                            return new iO.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = iE,
                                                                a = iy,
                                                                l = 1 / 0;
                                                            for (let n of ip)
                                                                for (let s of iR[n]) {
                                                                    let i = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, l] = eO.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new iO.A("srgb", [
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
                                                        m((a) => iw(a, t, e.deltaE)),
                                                            y((a) => ({
                                                                ...a,
                                                                scales: iw(a.scales, t, e.scale),
                                                                colors: iw(a.colors, t, e.color),
                                                            }));
                                                    } else m((e) => iw(e, t, null));
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
                (0, r.jsx)(id.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(eT.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)(R.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: ig.$8,
                                        style: { background: eO.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: iD.map((e, t) =>
                                            (0, r.jsx)(
                                                en.z9,
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
                                                        hoverGradientStart: iM(f.colors[0], parseFloat(f.opacities[0])),
                                                        hoverGradientMiddle: iM(
                                                            f.colors[1],
                                                            parseFloat(f.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: iM(f.colors[2], parseFloat(f.opacities[2])),
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
                                let { theme: t, label: a, result: l } = e;
                                return null != l
                                    ? (0, r.jsxs)(
                                          R.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, r.jsx)(D.E, { variant: "text-md/semibold", children: a }),
                                                  (0, r.jsxs)(T.w, {
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
                                                                      ij[l.suggestion.stopIndex],
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
                (0, r.jsx)(iU, { allResolvedStops: b }),
            ],
        }),
    });
}
var iz = a(820739),
    iH = a(230135),
    iK = a(45780),
    iY = a(868652),
    iq = a(859241);
let iJ = [
        t7.M.GUILD_POWERUP_PERKS_COACHMARK,
        t7.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        t7.M.GUILD_POWERUP_NOTIFICATION,
        t7.M.GUILD_TAG_AVAILABLE_COACHMARK,
        t7.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
    ],
    iQ = [
        t7.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        t7.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        t7.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        t7.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        t7.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    iX = [t7.V.ADOPT_CLAN_IDENTITY_NOTICE],
    iZ = [
        t7.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        t7.M.VANITY_URL_POWERUP_ROLLBACK_MODAL,
        t7.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
    ];
function i0(e) {
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
var i1 = a(861671);
async function i2(e, t, a) {
    await lz.Bo.patch({
        url: J.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : le()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, iz.VU)(e),
        (0, iY.Xd)(e, !0);
}
async function i8(e) {
    await lz.Bo.post({ url: J.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function i6() {
    let e = (0, M.bG)([aY.A], () => aY.A.getGuildId()),
        t = (0, M.bG)([aK.A], () => aK.A.getGuild(e)?.name),
        a = (0, M.yK)([ae.A], () => [...iQ, ...iX].filter((t) => null != e && (0, iK.zs)(t, e))),
        l = (0, M.yK)([iq.A], () => (null != e ? (iq.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(d.Ip, {
            className: i1.kL,
            children: [
                (0, r.jsx)("div", {
                    className: i1.uW,
                    children: (0, r.jsx)(w.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                }),
                (0, r.jsxs)("div", {
                    className: i1.uW,
                    children: [
                        (0, r.jsx)(D.E, {
                            variant: "eyebrow",
                            className: i1.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, iY.qM)();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: i1.uW,
                    children: [
                        (0, r.jsx)(D.E, { variant: "eyebrow", className: i1.wx, children: "Reset Progress Bar State" }),
                        (0, r.jsx)(h.$, { variant: "primary", text: "Reset", onClick: iH.O }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: i1.uW,
                    children: [
                        (0, r.jsx)(D.E, { variant: "eyebrow", children: "Set Warning State" }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        i2(e, l.slice(Math.floor(l.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        i2(e, l, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: i1.uW,
                    children: [
                        (0, r.jsx)(D.E, { variant: "eyebrow", className: i1.wx, children: "Reset User Level DCs" }),
                        (0, r.jsx)(R.B, {
                            gap: 16,
                            children: iJ.map((e) => (0, r.jsx)(nm, { className: i1.z6, content: t7.M[e] }, t7.M[e])),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: i1.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Guild Level DCs",
                        children: iQ.map((t) =>
                            (0, r.jsx)(
                                v.d,
                                {
                                    label: i0(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, iK._$)(t, e, !1)
                                            : ((0, ng._N)(t7.M.GUILD_POWERUP_NOTIFICATION), (0, iK.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: i1.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: iX.map((t) =>
                            (0, r.jsx)(
                                v.d,
                                {
                                    label: i0(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, iK._$)(t, e, !1)
                                            : ((0, ng._N)(t7.M.GUILD_POWERUP_NOTIFICATION), (0, iK.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: i1.uW,
                    children: [
                        (0, r.jsx)(D.E, {
                            variant: "eyebrow",
                            className: i1.wx,
                            children: "Reset Powerup Rollback DCs",
                        }),
                        iZ.map((e) => (0, r.jsx)(nm, { className: i1.z6, content: t7.M[e] }, t7.M[e])),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: i1.uW,
                    children: [
                        (0, r.jsx)(D.E, {
                            variant: "eyebrow",
                            className: i1.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                i8(e);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(h.$, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, sj.Wp)(!1);
                    },
                }),
            ],
        });
}
var i3 = a(450510),
    i5 = a(320681);
function i4(e) {
    let { hotspotLocation: t } = e,
        [a, l] = (0, M.yK)([i3.HP], () => [i3.HP.hasHotspot(t, !0), i3.HP.getHotspotOverride(t)]);
    return (0, r.jsx)(x.l, {
        label: t,
        errorMessage: a ? "Inactive" : void 0,
        successMessage: a ? "Active" : void 0,
        value: l,
        options: [
            { id: "none", value: void 0, label: "No Override" },
            { id: "active", value: !0, label: "Force Active" },
            { id: "inactive", value: !1, label: "Force Inactive" },
        ],
        onSelectionChange: (e) => (null != e ? (0, i3.Kl)(t, e) : (0, i3.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function i9() {
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsx)(u.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: i5.IN,
            children: (0, r.jsx)(R.B, {
                gap: 20,
                children: Object.keys(i3._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, r.jsx)(i4, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var i7 = a(919523),
    re = a(855522),
    rt = a(37646),
    ra = a(773669);
function rl() {
    let e = (0, M.bG)([ra.default], () => ra.default.locale),
        [t, a] = o.useState(),
        l = (0, i7.runtimeHashMessageKey)(t ?? ""),
        n = o.useMemo(() => aQ.t[l], [l]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(aR.Ay, {
                children: [
                    (0, r.jsx)(aR.Ay.Icon, { icon: rt.U, tooltip: "Locale" }),
                    (0, r.jsx)(aR.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, r.jsxs)(lE, {
                children: [
                    (0, r.jsx)(l_, { name: "Active System", children: "@discord/intl" }),
                    (0, r.jsx)(l_, { name: "App", children: e }),
                    (0, r.jsx)(l_, { name: "System", children: aQ.systemLocale }),
                    (0, r.jsx)(l_, { name: "@discord/intl", children: aQ.intl.currentLocale }),
                    (0, r.jsx)(l_, { name: "common i18n", children: re.A.getLocale() }),
                    (0, r.jsx)(l_, { name: "Moment", children: le().locale() }),
                ],
            }),
            (0, r.jsxs)(aR.Ay, {
                children: [
                    (0, r.jsx)(aR.Ay.Icon, { icon: rt.U, tooltip: "Messages" }),
                    (0, r.jsx)(aR.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(lE, {
                children: (0, r.jsx)(l_, { name: "Unique Rendered Main Messages", children: Object.keys(aQ.t).length }),
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
            (0, r.jsxs)(lE, {
                children: [
                    (0, r.jsx)(l_, { name: "Hashed key", children: l }),
                    (0, r.jsx)(l_, { name: "Exists?", children: null != n ? "yes" : "no" }),
                ],
            }),
            (0, r.jsx)(aO.A, { data: n?.(e) }),
        ],
    });
}
var rn = a(434404);
function rs() {
    let { node: e } = (0, W.Ay)(rn.F, "");
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)(V.A, { node: e }, e.key),
        }),
    });
}
var ri = a(663066),
    rr = a(80556),
    ro = a(907135),
    rd = a(665095),
    rc = a(87404);
function ru() {
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)("div", {
            className: sm.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: sm.uW,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Verification Layer" }),
                        (0, r.jsx)("div", {
                            className: sm.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: () => {
                                    (0, ri.B8)(() => (0, r.jsx)(rd.A, {}), { layerKey: rc._s, Layer: rr.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: sm.uW,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Safety Flow" }),
                        (0, r.jsx)("div", {
                            className: sm.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: () => {
                                    (0, ri.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, r.jsx)(ro.A, { onClose: t });
                                        },
                                        { layerKey: rc._s, Layer: rr.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: sm.uW,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Layer Controls" }),
                        (0, r.jsx)("div", {
                            className: sm.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: () => {
                                    ri.xr.setState({ fullScreenLayers: [] });
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
var rm = a(687813),
    rh = a(604121);
let rx = {
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
function rp(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let l = new Uint8Array(e);
                    rm.$1(l, (e, l) => {
                        null != e && a(e);
                        let n = Object.keys(l).reduce((e, t) => ({ ...e, [t]: JSON.parse(rm.he(l[t])) }), {}),
                            s = n["manifest.json"];
                        t(n[`animations/${s.animations[0].id}.json`]);
                    });
                }),
        );
}
function rg() {
    let [e, t] = o.useState(void 0),
        [a, l] = o.useState(400),
        [n, s] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)(R.B, {
            gap: 24,
            children: [
                (0, r.jsx)(t1.Z, {
                    options: Object.keys(rx).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)(R.B, {
                    gap: 8,
                    direction: "horizontal",
                    children: [
                        (0, r.jsx)(p.k, { value: a.toString(), onChange: (e) => l(Number(e)), label: "Width" }),
                        (0, r.jsx)(p.k, { value: n.toString(), onChange: (e) => s(Number(e)), label: "Height" }),
                    ],
                }),
                (0, r.jsx)(h.$, {
                    size: "sm",
                    disabled: null == e,
                    onClick: async () => {
                        if (null == e) return;
                        let t = rx[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(rp).then(eG().cloneDeep)
                                            : await t().then((e) => eG().cloneDeep(e.default)),
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
                            rh.a,
                            {
                                importData: () => {
                                    let t = rx[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(rp).then(eG().cloneDeep)
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
var rv = a(442433),
    rj = a(395671);
let rb = {
        ClipsContextMenu: async () => {
            let { default: e } = await a.e("40638").then(a.bind(a, 562733));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await a.e("32986").then(a.bind(a, 728033)),
                t = new rj.kJ({
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
            return () => (0, r.jsx)(e, { application: t, channelId: "987654321", onClose: rv.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("9004"), a.e("19690"), a.e("22941"), a.e("10758")]).then(
                    a.bind(a, 455557),
                ),
                t = Object.values(aK.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("28149"),
                    a.e("14947"),
                    a.e("88850"),
                    a.e("49494"),
                    a.e("44135"),
                    a.e("16117"),
                    a.e("11124"),
                    a.e("87845"),
                    a.e("50862"),
                    a.e("85639"),
                    a.e("54802"),
                    a.e("77737"),
                    a.e("49089"),
                    a.e("44837"),
                    a.e("61175"),
                    a.e("86653"),
                    a.e("56574"),
                    a.e("4974"),
                    a.e("17566"),
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
                    a.e("98356"),
                    a.e("32607"),
                    a.e("65011"),
                ]).then(a.bind(a, 860417)),
                t = Object.values(aK.A.getGuilds())[0];
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
            let { default: e } = await Promise.all([a.e("11124"), a.e("26132"), a.e("44491")]).then(a.bind(a, 907206));
            return (t) => (0, r.jsx)(e, { ...t, onClose: rv.Z_ });
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
                        console.log("Leave role clicked"), (0, rv.Z_)();
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await Promise.all([a.e("86456"), a.e("89346")]).then(a.bind(a, 949881)),
                { ContentInventoryEntryType: t } = await Promise.resolve().then(a.bind(a, 681154)),
                { ContentInventoryAuthorType: l } = await Promise.resolve().then(a.bind(a, 6161)),
                n = H.default.getCurrentUser(),
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
                    a.e("86653"),
                    a.e("16117"),
                    a.e("11810"),
                    a.e("14656"),
                ]).then(a.bind(a, 892921)),
                t = Object.values(aK.A.getGuilds())[0];
            return null == t
                ? () => null
                : (a) =>
                      (0, r.jsx)(e, {
                          ...a,
                          addFormField: (e) => {
                              console.log("Add form field:", e), (0, rv.Z_)();
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
                t = aK.A.getGuilds(),
                l = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(ad.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = ad.A.getAllThreadsForParent(t.id);
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
                t = Object.values(aK.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rv.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("4974"), a.e("71719"), a.e("14878"), a.e("66016")]).then(
                    a.bind(a, 316173),
                ),
                t = Object.values(aK.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rv.Z_ });
        },
    },
    rf = {
        GuildShopSortOptions: o.lazy(async () => {
            let { default: e } = await Promise.all([a.e("83518"), a.e("55197"), a.e("50974")]).then(a.bind(a, 324269)),
                { default: t } = await a.e("55197").then(a.bind(a, 558060));
            return { default: () => (0, r.jsx)(t, { defaultSortOption: void 0, children: (0, r.jsx)(e, {}) }) };
        }),
    };
function ry() {
    let e = o.useMemo(
            () =>
                Object.keys(rb)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = o.useMemo(
            () =>
                Object.keys(rf)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, l] = o.useState(null),
        [n, s] = o.useState(null),
        i = o.useCallback(
            (e) => {
                null != a && (0, rv.L3)(e, rb[a]);
            },
            [a],
        ),
        c = null != n ? rf[n] : null;
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)(R.B, {
            className: sm.l$,
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
                            onSelectionChange: l,
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
                        value: n,
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
var rE = a(253506),
    r_ = a(665260),
    rC = a(97808),
    rS = a(778712),
    rN = a(308528),
    rA = a(720149),
    rk = a(571694),
    rI = a(963852),
    rD = a(704844),
    rT = a(309010),
    rR = a(567761),
    rO = a(716371),
    rw = a(825801);
let rM = [
    { id: "USER_JOIN", value: J.lAJ.USER_JOIN, label: "User Join" },
    { id: "CHANNEL_PINNED_MESSAGE", value: J.lAJ.CHANNEL_PINNED_MESSAGE, label: "Channel Pinned Message" },
    { id: "GUILD_BOOST", value: J.lAJ.GUILD_BOOST, label: "Guild Boost" },
    { id: "GUILD_BOOST_TIER_1", value: J.lAJ.GUILD_BOOST_TIER_1, label: "Guild Boost Tier 1" },
    { id: "GUILD_BOOST_TIER_2", value: J.lAJ.GUILD_BOOST_TIER_2, label: "Guild Boost Tier 2" },
    { id: "GUILD_BOOST_TIER_3", value: J.lAJ.GUILD_BOOST_TIER_3, label: "Guild Boost Tier 3" },
    { id: "THREAD_CREATED", value: J.lAJ.THREAD_CREATED, label: "Thread Created" },
    { id: "CHANNEL_FOLLOW_ADD", value: J.lAJ.CHANNEL_FOLLOW_ADD, label: "Channel Follow Add" },
    { id: "STAGE_START", value: J.lAJ.STAGE_START, label: "Stage Start" },
    { id: "STAGE_END", value: J.lAJ.STAGE_END, label: "Stage End" },
    { id: "STAGE_SPEAKER", value: J.lAJ.STAGE_SPEAKER, label: "Stage Speaker" },
    { id: "STAGE_RAISE_HAND", value: J.lAJ.STAGE_RAISE_HAND, label: "Stage Raise Hand" },
    { id: "STAGE_TOPIC", value: J.lAJ.STAGE_TOPIC, label: "Stage Topic" },
    { id: "VOICE_SESSION", value: J.lAJ.VOICE_SESSION, label: "Voice Session" },
    { id: "FRIEND_REQUEST_ACCEPTED", value: J.lAJ.FRIEND_REQUEST_ACCEPTED, label: "Friend Request Accepted" },
    { id: "GUILD_DISCOVERY_DISQUALIFIED", value: J.lAJ.GUILD_DISCOVERY_DISQUALIFIED, label: "Discovery Disqualified" },
    { id: "GUILD_DISCOVERY_REQUALIFIED", value: J.lAJ.GUILD_DISCOVERY_REQUALIFIED, label: "Discovery Requalified" },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING",
        value: J.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING,
        label: "Discovery Grace Initial Warning",
    },
    {
        id: "GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING",
        value: J.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING,
        label: "Discovery Grace Final Warning",
    },
    { id: "RECIPIENT_ADD", value: J.lAJ.RECIPIENT_ADD, label: "Recipient Add" },
    { id: "RECIPIENT_REMOVE", value: J.lAJ.RECIPIENT_REMOVE, label: "Recipient Remove" },
    { id: "CALL", value: J.lAJ.CALL, label: "Call" },
];
function rL() {
    let [e, t] = o.useState(J.lAJ.USER_JOIN),
        a = (0, M.bG)([rT.A], () => rT.A.getChannelId(), []),
        l = o.useCallback(() => {
            if (null == a || null == e) return;
            let t = (0, rI.Ay)({ channelId: a, content: "", type: e, state: J.cmJ.SENT });
            rA.A.receiveMessage(a, t, !1);
        }, [a, e]),
        n = o.useCallback(() => {
            if (null != a)
                for (let { value: e } of rM) {
                    let t = (0, rI.Ay)({ channelId: a, content: "", type: e, state: J.cmJ.SENT });
                    rA.A.receiveMessage(a, t, !1);
                }
        }, [a]);
    return (0, r.jsxs)("div", {
        className: rw.gs,
        children: [
            (0, r.jsx)(t1.Z, {
                label: "Inject System Message",
                selectionMode: "single",
                options: rM,
                placeholder: "Select type",
                value: e,
                onSelectionChange: t,
            }),
            (0, r.jsx)(h.$, {
                variant: "primary",
                size: "sm",
                text: "Inject",
                onClick: l,
                disabled: null == a || null == e,
            }),
            (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: "Inject All", onClick: n, disabled: null == a }),
        ],
    });
}
function rP() {
    let e = (0, M.yK)([rR.default], () => rR.default.getSortedChannels()[1]),
        [t, a] = o.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: l, options: n } = (0, M.cf)([ad.A, H.default, ac.A], () => ({
            selectedChannel: ad.A.getChannel(t),
            options: e.map((e) => {
                let t = ad.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, ao.m1)(t, H.default, ac.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, r.jsx)(rC.eu, { src: (0, rk.Y)(t), "aria-hidden": !0, size: rS._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        s = o.useCallback(() => {
            if (null == l || !l.isPrivate()) return;
            let e = (0, r_.PQ)(l.recipientFlags ?? 0, rE.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            rD.A.updatePrivateChannelRecipientFlags(l.id, e);
        }, [l]),
        i = !!l?.isPrivate() && (0, r_.Lt)(l.recipientFlags ?? 0, rE.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: rw.gs,
        children: [
            (0, r.jsx)(t1.Z, {
                label: "In-Game NUX Message for DMs",
                selectionMode: "single",
                options: n,
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
function rU() {
    let e = o.useCallback(() => {
        rN.A.openPrivateChannel({ recipientIds: [rO.K] });
    }, []);
    return (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function rG() {
    let e = (0, M.bG)([aT.Ay], () => aT.Ay.allByCategory(aT.xW.MESSAGING), [], M.My).map((e) => {
        let [t, a, { label: l }] = e;
        return (0, r.jsx)(v.d, { label: l, description: t, checked: a, onChange: (e) => sE(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: k()(tT.nd, rw.nd),
        children: [
            e,
            (0, r.jsx)("div", { className: rw.yF }),
            (0, r.jsx)(rL, {}),
            (0, r.jsx)("div", { className: rw.yF }),
            (0, r.jsx)(rP, {}),
            (0, r.jsx)("div", { className: rw.yF }),
            (0, r.jsx)(rU, {}),
        ],
    });
}
var rF = a(459838),
    rB = a(772707),
    r$ = a(150934),
    rV = a(598653),
    rW = a(166403),
    rz = a(625494),
    rH = a(204925);
let rK = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e("29232").then(a.bind(a, 180275));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: aQ.intl.string(aQ.t.ZLRYGU),
                confirmButtonText: aQ.intl.string(aQ.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e("19840").then(a.bind(a, 79779));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: aQ.intl.string(aQ.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: aQ.intl.string(aQ.t["13ofGu"]),
                impression: { impressionName: sH.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await Promise.all([a.e("54398"), a.e("34260"), a.e("18467")]).then(a.bind(a, 297102));
        return (t) => (0, r.jsx)(e, { ...t, entryPoint: a5.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e("25226"), a.e("82758"), a.e("80022"), a.e("10136")]).then(
            a.bind(a, 776971),
        );
        return (t) => (0, r.jsx)(e, { ...t, source: rH.w_.NSFW_SERVER });
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
            a.e("90665"),
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
        return (t) => (0, r.jsx)(e, { ...t, mediaEngineContext: rF.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, r.jsx)(rB.k, {
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
                (t.default.getDevicesForPlatform = (e) => (e === J.fg2.PLAYSTATION ? s : l.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== J.fg2.PLAYSTATION && i.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === J.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
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
                    (0, r.jsx)(e, { ...a, channel: n, platform: J.fg2.PLAYSTATION })
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
        let { default: e } = await Promise.all([a.e("54802"), a.e("10534")]).then(a.bind(a, 308229));
        return (t) => (0, r.jsx)(e, { ...t, videoEnabled: !1, onEnable: () => console.log("Camera enabled") });
    },
    CameraPreviewModalWithVideo: async () => {
        let { default: e } = await Promise.all([a.e("54802"), a.e("10534")]).then(a.bind(a, 308229));
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
                                (0, r.jsx)(r$.S, {
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
                                (0, r.jsx)(r$.S, {
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
        let { default: e } = await Promise.all([a.e("86653"), a.e("46313")]).then(a.bind(a, 336496));
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
    FamilyCenterAcceptLinkModal: async () => {
        let e = H.default.getUser("12345"),
            t = H.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: l } = await Promise.all([a.e("53385"), a.e("55738"), a.e("31385")]).then(a.bind(a, 58144));
        return (a) => (0, r.jsx)(l, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = H.default.getUser("12345"),
            t = H.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: l } = await Promise.all([a.e("53385"), a.e("55738"), a.e("84811")]).then(a.bind(a, 389094));
        return (a) => (0, r.jsx)(l, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = H.default.getUser("12345"),
            t = H.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: l } = await Promise.all([a.e("53385"), a.e("55738"), a.e("17219")]).then(a.bind(a, 187278));
        return (a) => (0, r.jsx)(l, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = H.default.getUser("12345"),
            t = H.default.getUser("67890");
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
            t = rW.A.getPremiumGroupSubscription();
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
            t = Object.keys(aK.A.getGuilds())[0];
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
            t = Object.values(aK.A.getGuilds())[0];
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await Promise.all([a.e("94674"), a.e("27917"), a.e("73152"), a.e("25281")]).then(
            a.bind(a, 516259),
        );
        return (t) => (0, r.jsx)(e, { ...t });
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([
            a.e("33110"),
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
            a.e("90665"),
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
function rY() {
    let e = o.useMemo(
            () =>
                Object.keys(rK)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)("div", {
            className: sm.l$,
            children: [
                (0, r.jsx)("section", {
                    className: sm.uW,
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
                                onClick: () => null != t && (0, eR.openModalLazy)(rK[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: sm.uW,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: sm.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, rV.o)(!0), rz._.dispatch(J.jej.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var rq = a(933832),
    rJ = a(472229),
    rQ = a(694080),
    rX = a(669316),
    rZ = a(354670),
    r0 = a(428262);
let r1 = async () => {
        try {
            let { body: e } = await lz.Bo.get({ url: J.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
            return e;
        } catch (e) {
            return [];
        }
    },
    r2 = async (e, t) => {
        try {
            await lz.Bo.post({ url: J.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, rQ._D)();
        }
    },
    r8 = async (e, t) => {
        try {
            await lz.Bo.del({ url: J.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, rQ._D)();
        }
    },
    r6 = async () => {
        try {
            let { body: e } = await lz.Bo.get({ url: J.Rsh.USER_OFFERS, rejectWithError: !0 });
            return { trial: e.trial, discount: e.discount.map(rX.A.createFromServer) };
        } catch (e) {
            return { trial: [], discount: [] };
        }
    },
    r3 = async () => {
        try {
            await lz.Bo.del({ url: J.Rsh.USER_OFFERS, rejectWithError: !0 });
        } catch {
        } finally {
            await rZ.A.forceReset(), await (0, rQ._D)();
        }
    },
    r5 = async (e) => {
        await lz.Bo.post({ url: J.Rsh.CREATE_REVERSE_TRIAL, body: { ends_at: e }, rejectWithError: !0 });
    };
function r4(e) {
    let { offer: t, offerOptions: a, forceRefetch: l } = e,
        [n, s] = o.useState(!1),
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
        E = null != p && new Date(p).getTime() < Date.now(),
        _ = j?.sku_id === ss.pe.TIER_0,
        C = async () => {
            u(!0), y ? await S({ expiresAt: null }) : await (0, rQ.u1)(t), l(), u(!1);
        },
        S = async (e) => {
            u(!0);
            try {
                await lz.Bo.patch({
                    url: J.Rsh.UPDATE_USER_OFFER(x, "trial"),
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
            className: k()(sm.Nr, _ ? sm.Qf : sm.C1),
            children: [
                (0, r.jsx)("div", {
                    className: k()(sm.nM, sm.S7),
                    children: (0, r.jsx)(w.D, { variant: "heading-lg/semibold", color: "always-white", children: f }),
                }),
                (0, r.jsxs)(I.D, {
                    className: k()(sm.nM, sm.QB),
                    onClick: () => {
                        (0, lc.C)(x, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(D.E, { variant: "eyebrow", color: "always-white", children: ["Offer: ", x] }),
                        n
                            ? (0, r.jsx)(rq.A, { size: "md", color: "currentColor", className: sm.Kk })
                            : (0, r.jsx)(la.T, { size: "xs", color: "currentColor", className: sm.Kk }),
                    ],
                }),
                (0, r.jsxs)(I.D, {
                    className: k()(sm.nM, sm.QB),
                    onClick: () => {
                        (0, lc.C)(v, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(D.E, { variant: "eyebrow", color: "always-white", children: ["Trial: ", v] }),
                        i
                            ? (0, r.jsx)(rq.A, { size: "md", color: "currentColor", className: sm.Kk })
                            : (0, r.jsx)(la.T, { size: "xs", color: "currentColor", className: sm.Kk }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: sm.nM,
                    children: (0, r.jsxs)(D.E, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, r0.re)({
                                intervalType: j?.interval ?? ss.WT.MONTH,
                                intervalCount: j?.interval_count ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: sm.nM,
                    children: [
                        (0, r.jsxs)(D.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, rJ.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, lu.Xm)(p),
                            onChange: (e) => {
                                S({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sm.nM,
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
                    className: sm.fC,
                    children: [
                        (0, r.jsx)(I.D, {
                            onClick: C,
                            className: k()(sm.qS, sm.vk, { [sm.R1]: y, [sm._7]: E }),
                            children: (0, r.jsx)(D.E, {
                                variant: "eyebrow",
                                color: "Acked" === N ? void 0 : "always-white",
                                children: N,
                            }),
                        }),
                        null != g &&
                            (0, r.jsx)("div", {
                                className: k()(sm.qS, sm.k3),
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
                        u(!0), await r8(x, "trial"), l(), u(!1);
                    },
                    children: (0, r.jsx)(ls.u, { size: "md", color: "currentColor", className: k()(sm.Kk, sm.IT) }),
                }),
                (0, r.jsx)("div", { className: k()(sm.g4, { [sm.VP]: c || m }), children: (0, r.jsx)(e8.y, {}) }),
            ],
        })
    );
}
function r9(e) {
    let { offer: t, offerOptions: a, forceRefetch: l } = e,
        [n, s] = o.useState(!1),
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
        E = async () => {
            u(!0), b ? await _({ expiresAt: null }) : await (0, rQ.u1)(void 0, t), l(), u(!1);
        },
        _ = async (e) => {
            let { expiresAt: t } = e;
            u(!0);
            try {
                await lz.Bo.patch({
                    url: J.Rsh.UPDATE_USER_OFFER(x, "discount"),
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
    let C = "Active";
    return (
        f && (C = "Expired"),
        b && (C = "Acked"),
        (0, r.jsxs)("div", {
            className: k()(sm.Nr, sm.id),
            children: [
                (0, r.jsx)("div", {
                    className: k()(sm.nM, sm.S7),
                    children: (0, r.jsx)(w.D, { variant: "heading-lg/semibold", color: "text-default", children: j }),
                }),
                (0, r.jsxs)(I.D, {
                    className: k()(sm.nM, sm.QB),
                    onClick: () => {
                        (0, lc.C)(x, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(D.E, { variant: "eyebrow", color: "text-default", children: ["Offer: ", x] }),
                        n
                            ? (0, r.jsx)(rq.A, { size: "md", color: "currentColor", className: k()(sm.Kk, sm.mK) })
                            : (0, r.jsx)(la.T, { size: "xs", color: "currentColor", className: sm.Kk }),
                    ],
                }),
                (0, r.jsxs)(I.D, {
                    className: k()(sm.nM, sm.QB),
                    onClick: () => {
                        (0, lc.C)(g, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(D.E, { variant: "eyebrow", color: "text-default", children: ["Discount: ", g] }),
                        i
                            ? (0, r.jsx)(rq.A, { size: "md", color: "currentColor", className: k()(sm.Kk, sm.mK) })
                            : (0, r.jsx)(la.T, { size: "xs", color: "currentColor", className: sm.Kk }),
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
                    className: sm.nM,
                    children: [
                        (0, r.jsxs)(D.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, rJ.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, lu.Xm)(p?.toISOString()),
                            onChange: (e) =>
                                _({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: sm.fC,
                    children: [
                        (0, r.jsx)(I.D, {
                            onClick: E,
                            className: k()(sm.qS, sm.vk, { [sm.R1]: b, [sm._7]: f }),
                            children: (0, r.jsx)(D.E, {
                                variant: "eyebrow",
                                color: "Acked" === C ? void 0 : "always-white",
                                children: C,
                            }),
                        }),
                        y &&
                            (0, r.jsx)("div", {
                                className: k()(sm.qS, sm.k3),
                                children: (0, r.jsx)(D.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(I.D, {
                    className: sm.aR,
                    onClick: async () => {
                        u(!0), await r8(x, "discount"), l(), u(!1);
                    },
                    children: (0, r.jsx)(ls.u, { size: "md", color: "currentColor", className: k()(sm.Kk, sm.fy) }),
                }),
                (0, r.jsx)("div", { className: k()(sm.g4, { [sm.VP]: c || m }), children: (0, r.jsx)(e8.y, {}) }),
            ],
        })
    );
}
function r7() {
    let [e, t] = o.useState([]),
        [a, l] = o.useState([]),
        [n, s] = o.useState(),
        [i, c] = o.useState(),
        [u, m] = o.useState([]),
        [p, g] = o.useState([]),
        [v, j] = o.useState(!0),
        [b, f] = o.useState(10080),
        [y, E] = o.useState([]),
        { entitlements: _, deleteFractionalPremium: C, refreshEntitlementList: S } = sc();
    o.useEffect(() => {
        S();
    }, [S]),
        o.useEffect(() => {
            E(_.filter((e) => e.sourceType === J.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [_]),
        o.useEffect(() => {
            (0 === e.length || 0 === a.length || v) &&
                r1().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        r = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    t(a), l(r), null == n && s(a[0].value), null == i && c(r[0].value);
                });
        }, [e, a, n, i, v]),
        o.useEffect(() => {
            v &&
                (j(!1),
                rZ.A.forceReset(),
                (0, rQ._D)(),
                r6().then((e) => {
                    m(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        g(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [v]);
    let N = async () => {
            null != n && (await r2(n, "trial"), j(!0));
        },
        A = async () => {
            null != i && (await r2(i, "discount"), j(!0));
        },
        k = async () => {
            await r3(), j(!0);
        },
        I = async () => {
            let e = new Date(Date.now() + 60 * b * 1e3).toISOString();
            await r5(e), S();
        };
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)("div", {
            className: sm.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: sm.uW,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Utils" }),
                        (0, r.jsxs)("div", {
                            className: sm.Uo,
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
                                    onClick: () => (0, ng.xB)(t7.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, ng._N)(t7.M.NAGBAR_NOTICE_OFFER_EXPIRING),
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
                    className: sm.uW,
                    children: (0, r.jsxs)("div", {
                        className: sm.bd,
                        children: [
                            (0, r.jsx)(x.l, {
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
                            (0, r.jsx)(h.$, { variant: "primary", text: "Create", onClick: N }),
                        ],
                    }),
                }),
                (0, r.jsx)("section", {
                    className: sm.uW,
                    children: (0, r.jsxs)("div", {
                        className: sm.bd,
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
                        className: sm.uW,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Existing Trial Offers" }),
                            u.map((t) =>
                                (0, r.jsx)(r4, { offer: t, offerOptions: e, forceRefetch: () => j(!0) }, t.id),
                            ),
                        ],
                    }),
                p.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: sm.uW,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Existing Discount Offers" }),
                            p.map((e) =>
                                (0, r.jsx)(r9, { offer: e, offerOptions: a, forceRefetch: () => j(!0) }, e.id),
                            ),
                        ],
                    }),
                (0, r.jsx)("section", {
                    className: sm.uW,
                    children: (0, r.jsxs)("div", {
                        className: sm.bd,
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
                                    (0, r.jsx)(sx, { entitlement: e, active: !0, onDelete: () => C(e.id) }, e.id),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var oe = a(528265),
    ot = a(26279),
    oa = a(142798);
let ol = {
        [ot.Re.UNSPECIFIED]: "Unspecified",
        [ot.Re.DRAFT]: "Draft",
        [ot.Re.SIGNED]: "Signed",
        [ot.Re.DISCARDED]: "Discarded",
        [ot.Re.SIGNING_IN_PROGRESS]: "Signing In Progress",
    },
    on = { [ot.BM.UNSPECIFIED]: "Unspecified", [ot.BM.ONE_TIME]: "One Time", [ot.BM.SUBSCRIPTION]: "Subscription" };
function os() {
    let [e, t] = o.useState(null),
        [a, l] = o.useState(!0),
        [n, s] = o.useState(null),
        i = o.useCallback(async () => {
            l(!0), s(null);
            try {
                let e = await lz.Bo.get({ url: `${J.Rsh.ORDER_LIST}?limit=5`, rejectWithError: !0 });
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
        (0, r.jsx)(d.Ip, {
            className: tT.nd,
            children: (0, r.jsxs)("div", {
                className: sm.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: sm.dL,
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
                    null != n && (0, r.jsx)(T.w, { type: "critical", children: n }),
                    !a &&
                        null != e &&
                        0 === e.length &&
                        (0, r.jsx)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "No orders found.",
                        }),
                    null != e && e.map((e) => (0, r.jsx)(oi, { order: e }, e.id)),
                ],
            }),
        })
    );
}
function oi(e) {
    let { order: t } = e,
        [a, l] = o.useState(!1),
        [n, s] = o.useState(!1),
        i = ol[t.status] ?? `Unknown (${t.status})`,
        d = [
            { id: "status", label: `Status: ${i}`, isDisabled: !1 },
            { id: "created", label: `Created: ${new Date(t.created_at).toLocaleString()}`, isDisabled: !1 },
        ],
        c = o.useCallback(() => {
            navigator.clipboard.writeText(t.id), s(!0), setTimeout(() => s(!1), 2e3);
        }, [t.id]);
    return (0, r.jsxs)("div", {
        className: sm.Nr,
        children: [
            (0, r.jsxs)(R.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                style: { marginBottom: "4px" },
                children: [
                    (0, r.jsx)(D.E, { variant: "text-md/semibold", children: t.id }),
                    (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: n ? "Copied!" : "Copy ID", onClick: c }),
                ],
            }),
            (0, r.jsx)(oe.C, {
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
                                                  on[e.purchase_type] ?? `Unknown (${e.purchase_type})`,
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
                    className: oa.VK,
                    style: { marginTop: "8px" },
                    children: [
                        (0, r.jsxs)(I.D, {
                            onClick: () => l((e) => !e),
                            className: oa.Eh,
                            children: [
                                (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Billing Facet" }),
                                (0, r.jsx)(sl.A, { direction: a ? sl.A.Directions.UP : sl.A.Directions.DOWN }),
                            ],
                        }),
                        a &&
                            (0, r.jsxs)("ul", {
                                className: oa.j3,
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
var or = a(935462),
    oo = a(260598),
    od = a(93688),
    oc = a(717400),
    ou = a(676955),
    om = a(31300),
    oh = a(500060),
    ox = a(391973),
    op = a(684013),
    og = a(765671),
    ov = a(235986),
    oj = a(742589),
    ob = a(41984),
    of = a(181435),
    oy = a(435736),
    oE = a(296027),
    o_ = a(515183),
    oC = a(489277),
    oS = a(127242),
    oN = a(869014),
    oA = a(528772),
    ok = a(38502),
    oI = a(532624),
    oD = a(773371),
    oT = a(996439),
    oR = a(350535),
    oO = a(9302),
    ow = a(644434),
    oM = a(618137);
let oL = {
        [J.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: J.uss.CLICK_ZONE_DEBUG,
            id: (0, ej.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...ok.A.getWidgetDefaultSettings(J.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [J.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: J.uss.PERFORMANCE_DEBUG,
            id: (0, ej.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...ok.A.getWidgetDefaultSettings(J.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    oP = {};
function oU(e) {
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
        (0, r.jsxs)(lt.$n, {
            look: lt.$n.Looks.LINK,
            color: lt.$n.Colors.LINK,
            size: lt.$n.Sizes.MIN,
            onClick: function () {
                (0, lc.C)(t, () => l(!0));
            },
            className: oM.DT,
            children: ["Application Id: ", t, " ", a ? aQ.intl.string(aQ.t.t5VZ88) : null],
        })
    );
}
let oG = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, M.bG)([j.Ay], () => j.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            l = (0, M.bG)([aq.A], () => aq.A.getGameForPID(t.pid)),
            n = (0, M.bG)([j.Ay], () => (null == a ? null : j.Ay.getGameOverlayStatus(a)));
        return (0, r.jsxs)("div", {
            className: oM.st,
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
                        children: (0, r.jsx)(oU, { id: t.applicationId }),
                    }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, o_.wR)(t.fullscreenType)],
                }),
                (0, r.jsxs)(D.E, { variant: "text-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, r.jsxs)("div", {
                    className: oM.st,
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
                            children: ["overlayMethod: ", (0, o_.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != n &&
                    (0, r.jsxs)("div", {
                        className: oM.st,
                        children: [
                            (0, r.jsxs)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", n.source],
                            }),
                            (0, r.jsxs)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", n.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", n.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, o_.gK)(n.overlayMethod)],
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
                    children: ["hook: ", l?.hook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", l?.overlay ? "Yes" : "No"],
                }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlayCompatibilityHook: ", l?.overlayCompatibilityHook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["supportsOutOfProcessOverlay: ", l?.supportsOutOfProcessOverlay ? "Yes" : "No"],
                }),
            ],
        });
    }),
    oF = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, M.cf)([oD.default], () => oD.default.getOverlayPIDStatuses()),
            l = (0, M.cf)([oE.default], () => oE.default.getTrackedGames()),
            n = (0, M.bG)([oD.default], () => oD.default.isInputLocked(t), [t]),
            s = (0, M.bG)([oD.default], () => oD.default.DEV_isInputLockedV3(t), [t]),
            i = (0, M.bG)([oD.default], () => oD.default.DEV_isInputLocked(t), [t]),
            o = (0, M.bG)([oD.default], () => oD.default.isReady(t), [t]);
        return (0, r.jsxs)("div", {
            className: oM.st,
            children: [
                (0, r.jsx)(D.E, { variant: "text-md/semibold", color: "text-strong", children: `${t}` }),
                (0, r.jsxs)(D.E, {
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
                (0, r.jsxs)(D.E, {
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
                (0, r.jsxs)(D.E, {
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
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["Bridge Status: ", a.get(Number(t))],
                }),
                (0, r.jsxs)(D.E, { variant: "text-sm/normal", color: "text-strong", children: ["isInputLocked: ", n] }),
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
function oB(e) {
    let t,
        a = ((t = Object.values((0, M.yK)([ok.A], () => ok.A.getWidgetsForLayout(ow.G)))), t.find((t) => t.type === e));
    return [
        a,
        () => {
            if (null != a) (0, ox.uv)(a.id);
            else {
                let t = oL[e];
                if (null == t) return;
                let a = t(ow.G);
                (0, ox.jn)(a);
            }
        },
    ];
}
function o$(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, lu.i$)(le()(e), "h:mm:ss.SSS");
}
let oV = o.memo(function (e) {
    let { pid: t, ...a } = e,
        l = (0, M.bG)([oE.default], () => {
            if (null == t) return "Unknown";
            let e = oE.default.getTrackedGameByPid(t)?.gameName;
            return null != e ? ((oP[t] = e), e) : (oP[t] ?? "Unknown");
        }, [t]);
    return (0, r.jsx)(D.E, { ...a, variant: "text-md/semibold", color: "text-strong", children: l });
});
function oW() {
    let e = (0, M.bG)([oS.A], () => oS.A.hasRenderDebugMode(ob.x7.TrackFocusPIDs)),
        t = (0, M.yK)([oE.default], () => oE.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, r.jsxs)("div", {
        className: oM.st,
        children: [
            (0, r.jsxs)("div", {
                className: oM.Iv,
                children: [
                    (0, r.jsx)(v.d, {
                        checked: e,
                        onChange: () =>
                            void op.A.setRenderDebugMode(
                                !oS.A.hasRenderDebugMode(ob.x7.TrackFocusPIDs),
                                ob.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, r.jsx)(I.D, {
                        className: oM.LL,
                        onClick: () => op.A.clearTrackedPids(),
                        children: (0, r.jsx)(ls.u, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(d.Ip, {
                className: k()(oM.st, oM.XG),
                children: [
                    0 === t.length &&
                        (0, r.jsx)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, a, l] = e;
                        return (0, r.jsx)(
                            o.Fragment,
                            {
                                children: (0, r.jsx)(nB.m, {
                                    position: "left",
                                    text: l === ob.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(D.E, {
                                            variant: "text-sm/medium",
                                            color: l === ob.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, r.jsx)(oV, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                o$(t),
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
let oz = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, M.bG)([oE.default, j.Ay], () => {
                if (null == t) return null;
                let e = oE.default.getTrackedGameByPid(t)?.fullscreenType;
                if (null != e) return e;
                let a = j.Ay.getGameOrTransformedSubgameForPID(t);
                return a?.fullscreenType ?? nT.aI.UNKNOWN;
            }, [t]);
        return (0, r.jsxs)(D.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, o_.wR)(a) : "Unknown"],
        });
    }),
    oH = o.memo(function () {
        let e = (0, M.cf)([oE.default], () => oE.default.getTrackedGames()),
            [t, a] = o.useState({}),
            l = o.useRef(null);
        return (
            o.useEffect(
                () => (
                    (l.current = setInterval(async () => {
                        let e = j.Ay.getRunningGames(),
                            t = [],
                            l = Date.now();
                        for (let a of e) t.push((0, o_.E1)(a.pid, 0).then((e) => [a.pid, e, l]));
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
                    }, +lK.A.Millis.SECOND)),
                    () => clearInterval(l.current)
                ),
                [],
            ),
            (0, r.jsx)(nB.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(d.Ip, {
                        className: k()(oM.st, oM.XG),
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
                                            (0, r.jsx)(oV, { tag: "div", pid: e.pid }),
                                            (0, r.jsx)(oz, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: l } = t;
                                                    return (0, r.jsx)(
                                                        D.E,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, o_.wR)(a)} @ ${o$(l)}`,
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
    oK = o.memo(function () {
        let e = (0, M.cf)([oE.default], () => oE.default.getTrackedGames()),
            t = (0, oO.getPID)(),
            a = (0, M.bG)([oE.default], () => oE.default.isOverlayOOPEnabledForPid(t), [t]),
            [l, n] = (0, M.yK)([oA.A], () => [oA.A.enabled, oA.A.keepOpen]),
            s = (0, M.bG)([oD.default], () => oD.default.getFocusedPID()),
            i = (0, M.bG)([oD.default], () => oD.default.isFocusedPidOutOfProcess());
        return (0, r.jsxs)("div", {
            className: oM.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, r.jsx)(D.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, r.jsx)(oF, { pid: e.pid }, e.pid)),
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
                            children: ["SoundboardOverlay.enabled: ", l ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.keepOpen: ", n ? "Yes" : "No"],
                        }),
                    ],
                }),
            ],
        });
    }),
    oY = [
        {
            mode: ob.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: ob.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: ob.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: ob.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: ob.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: ob.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: ob.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    oq = o.memo(function () {
        let [e, t] = oB(J.uss.CLICK_ZONE_DEBUG),
            [a, l] = oB(J.uss.PERFORMANCE_DEBUG),
            n = (0, M.bG)([oS.A], () => oS.A.getRenderDebugModes()),
            [s, i] = o.useState({});
        return (
            o.useEffect(() => {
                let e = setInterval(() => {
                    i({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, r.jsx)("div", {
                className: oM.st,
                children: oY.map((s) => {
                    let i =
                            s.mode === ob.x7.OverlayRafManagerForceEnabled
                                ? `${s.label} (${oN.A.getLastRAFCallbackReason()})`
                                : s.label,
                        d = () =>
                            s.mode === ob.x7.ClickZones
                                ? null != e
                                : s.mode === ob.x7.WidgetAreas
                                  ? null != a
                                  : n.has(s.mode);
                    return (0, r.jsx)(
                        o.Fragment,
                        {
                            children: (0, r.jsx)(v.d, {
                                checked: d(),
                                onChange: () => {
                                    var e;
                                    let a = d();
                                    s.mode === ob.x7.ClickZones && t(),
                                        s.mode === ob.x7.WidgetAreas && l(),
                                        (e = s.mode),
                                        op.A.setRenderDebugMode(!a, e);
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
    oJ = o.memo(function () {
        let e = (0, M.cf)([oE.default], () => oE.default.getTrackedGames()),
            t = (0, M.bG)([j.Ay], () => j.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(nB.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: oM.st,
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
                                                (0, r.jsx)(oz, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, r.jsx)(nB.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: oM.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, r.jsx)(oG, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    oQ = o.memo(function () {
        let e = (0, M.bG)([oE.default], () => oE.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            l = [
                { label: ob.V6.UNSET, value: ob.V6.UNSET, id: ob.V6.UNSET },
                { label: ob.V6.IN_PROCESS_V2, value: ob.V6.IN_PROCESS_V2, id: ob.V6.IN_PROCESS_V2 },
                { label: ob.V6.OUT_OF_PROCESS_V3, value: ob.V6.OUT_OF_PROCESS_V3, id: ob.V6.OUT_OF_PROCESS_V3 },
                {
                    label: ob.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: ob.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: ob.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, r.jsx)(x.l, {
            label: "Override the overlay render mode",
            value: t,
            options: l,
            onSelectionChange: (e) => {
                a(e), op.A.forceRenderMode(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function oX(e) {
    let { modalProps: t, onClose: a } = e,
        [l, n] = o.useState(null);
    function s() {
        a(null);
    }
    return (0, r.jsxs)(or.EO, {
        size: or.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, r.jsxs)(or.rQ, {
                align: ov.A.Align.CENTER,
                justify: ov.A.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(D.E, {
                        variant: "text-md/bold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, r.jsx)(or.s_, { onClick: s }),
                ],
            }),
            (0, r.jsx)(or.$m, {
                children: (0, r.jsx)("div", {
                    className: oM.st,
                    children: (0, r.jsx)(oo.f, { label: "Paste JSON Here", onChange: n, value: l ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(or.jl, {
                children: (0, r.jsxs)(n6.e, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Import",
                            onClick: function () {
                                a(l);
                            },
                        }),
                        (0, r.jsx)(h.$, { variant: "secondary", text: "Clear", onClick: s }),
                    ],
                }),
            }),
        ],
    });
}
let oZ = {
    native: { label: "Native", filter: (e) => e.type === of.ON.NativeLegacy || e.type === of.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === of.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === of.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === of.ON.OOPModule || e.type === of.ON.LegacyModule },
};
function o0(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : of.QJ.Info;
    if (t === of.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case of.ON.NativeLegacy:
            return "var(--yellow-500)";
        case of.ON.NativeOOP:
            return "var(--green-500)";
        case of.ON.Flux:
            return "var(--brand-400)";
        case of.ON.Renderer:
            return "var(--brand-500)";
        case of.ON.LegacyModule:
            return "var(--yellow-300)";
        case of.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let o1 = [
    {
        key: "type",
        cellClassName: oM.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                l = o2(t);
            return (0, r.jsx)("div", {
                className: oM.g$,
                style: { color: o0(t, a) },
                children: (0, r.jsx)(l, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "name",
        cellClassName: oM.Cm,
        render(e) {
            let { name: t, type: a, logType: l } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(D.E, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case of.QJ.Info:
                                    return "text-strong";
                                case of.QJ.Warning:
                                    return "text-feedback-warning";
                                case of.QJ.Error:
                                    return "text-feedback-critical";
                                default:
                                    return "text-subtle";
                            }
                        })(l),
                        children: t,
                    }),
                    (0, r.jsxs)(D.E, { variant: "text-sm/normal", color: "text-subtle", children: ["(", a, ")"] }),
                ],
            });
        },
    },
    {
        key: "timestamp",
        cellClassName: oM.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, lu.i$)(le()(t), "h:mm:ss.SSS");
        },
    },
];
function o2(e) {
    switch (e) {
        case of.ON.NativeLegacy:
            return od.W;
        case of.ON.NativeOOP:
            return oc.q;
        case of.ON.Renderer:
        case of.ON.Flux:
            return ou.v;
        case of.ON.LegacyModule:
            return om.k;
        case of.ON.OOPModule:
            return oh.o;
        default:
            return om.k;
    }
}
function o8(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let o6 = ["__webpack_require__", "fn"],
    o3 = ["web.js", "web.js.map"],
    o5 = [
        {
            id: "details",
            name: "Details",
            group: aU.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: l, type: n, logType: s, nativeId: i, stack: o, data: c, timestamp: u, pid: m } = t,
                    h = le()(u),
                    x = o2(n);
                return (0, r.jsxs)(d.Ar, {
                    className: oM.bW,
                    children: [
                        (0, r.jsxs)(oj.A, {
                            className: k()(tT.jr, oM.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: o0(n, s) },
                                    className: oM.nr,
                                    children: (0, r.jsx)(x, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(oj.A.Title, {
                                    wrapperClassName: oM.qd,
                                    children: [
                                        l,
                                        " (",
                                        n,
                                        ")",
                                        (0, r.jsx)(I.D, {
                                            tag: "span",
                                            className: oM.KE,
                                            onClick: () => (0, lc.C)(l),
                                            children: (0, r.jsx)(la.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(oj.A.Icon, {
                                    icon: la.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, lc.C)(o8(t));
                                    },
                                }),
                                (0, r.jsx)(oj.A.Icon, { icon: ln.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(lE, {
                            className: oM.ZK,
                            children: [
                                (0, r.jsx)(l_, {
                                    name: "Timestamp",
                                    copyValue: h.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: h.toISOString(),
                                        title: (0, lu.i$)(h, "LLLL"),
                                        children: (0, lu.i$)(h, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, r.jsx)(l_, {
                                    name: "Log Type",
                                    copyValue: s,
                                    children: (0, r.jsx)("code", { children: s }),
                                }),
                                (0, r.jsx)(l_, {
                                    name: "PID",
                                    copyValue: m?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: m?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(l_, {
                                    name: "Native ID",
                                    copyValue: i?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: i?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(l_, {
                                    name: "Data",
                                    copyValue: o8(c),
                                    children: (0, r.jsx)("code", { children: o8(c) }),
                                }),
                                null != o &&
                                    (0, r.jsx)(l_, {
                                        name: "Stack Trace",
                                        copyValue: o,
                                        children: (0, r.jsx)("code", {
                                            children: o.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, l, n, s] = a,
                                                        i = l.split(/[\\/]/).pop();
                                                    return o6.includes(e.trim())
                                                        ? null
                                                        : (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, r.jsx)("span", {
                                                                          className: oM.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !o3.includes(i ?? "") &&
                                                                          (0, r.jsxs)(r.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, r.jsxs)("span", {
                                                                                      className: oM.lz,
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
    o4 = {
        searchType: lo.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: l, data: n } = e,
                s = [t, a, JSON.stringify(n)];
            return null != l && s.push(l), s;
        },
        throttleMs: 100,
    };
function o9() {
    let { ref: e, height: t } = (0, og.Ay)(),
        a = (0, M.bG)([oS.A], () => oS.A.isModuleLoggingEnabled()),
        [l, n] = o.useState(a),
        [s, i] = o.useState(!1),
        [d, c] = o.useState(null),
        [u, m] = o.useState(Object.keys(oZ)),
        [h, x] = (0, M.bG)([oS.A], () => oS.A.getOverlayLoggingBreadcrumbs(), [], oT.D),
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
                              let { filter: a } = oZ[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [v, u, d, s, j],
        ),
        [E, _] = o.useState(y),
        [C, S] = o.useState(null),
        N = o.useMemo(() => v.find((e) => e.key === C), [v, C]),
        A = o.useCallback((e) => {
            _(e);
        }, []),
        { renderSelectedTab: T } = (0, aU.Ay)({ tabs: o5 }, []);
    (0, ld.RT)(b, y, A, o4, [v]);
    let R = o.useCallback((e) => {
            n(e), op.A.setModuleLogging(e);
        }, []),
        [O, w] = o.useState(!1),
        L = o.useRef(null),
        P = o.useCallback(() => {
            (0, lc.C)(JSON.stringify(y)), w(!0);
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
                        (0, r.jsx)(oX, {
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
        className: oM.rh,
        children: [
            (0, r.jsxs)("div", {
                className: oM.st,
                children: [
                    (0, r.jsxs)("div", {
                        className: k()(oM._V, oM.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: oM.iR,
                                children: (0, r.jsx)(r$.S, { label: "Poll Native", checked: l, onChange: (e) => R(e) }),
                            }),
                            (0, r.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: oM.iR,
                                children: (0, r.jsx)(r$.S, {
                                    label: "Only Active Games",
                                    checked: s,
                                    onChange: (e) => i(e),
                                }),
                            }),
                            (0, r.jsxs)(I.D, {
                                className: oM.ny,
                                onClick: P,
                                children: [
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: O ? "Copied" : "Copy All",
                                    }),
                                    O
                                        ? (0, r.jsx)(rq.A, { size: "sm", color: eO.A.unsafe_rawColors.GREEN_330.css })
                                        : (0, r.jsx)(la.T, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(I.D, {
                                className: oM.ny,
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
                        className: k()(oM._V, oM.XQ),
                        children: Object.entries(oZ).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                I.D,
                                {
                                    className: k()(oM.pb, u.includes(t) && oM.bx),
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
                        className: oM._V,
                        children: (0, r.jsx)(li.I, {
                            query: b,
                            onChange: f,
                            onClear: () => f(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: k()(oM.st, oM.CZ),
                children: (0, r.jsx)(tR, {
                    columns: o1,
                    data: E,
                    selectedRowKey: C ?? void 0,
                    onClickRow: (e) => S(e.key),
                }),
            }),
            null != N &&
                (0, r.jsx)(aP, {
                    className: k()(oM.st, oM.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: T({ breadcrumb: N, onClose: () => S(null) }),
                }),
        ],
    });
}
let o7 = o.memo(function () {
        let e = (0, M.bG)([oC.A], () => oC.A.getPopoutInitializationStages());
        return (0, r.jsxs)("div", {
            className: oM.st,
            children: [
                (0, r.jsx)("div", {
                    className: oM.Iv,
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
    de = o.memo(function () {
        let e = (0, M.bG)([oS.A], () => oS.A.isStateDebuggingEnabled()),
            t = (0, M.bG)([oS.A], () => oS.A.getDebuggingState());
        return (
            o.useEffect(
                () => (
                    op.A.setStateDebugging(!0),
                    () => {
                        op.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, r.jsxs)("div", {
                className: oM.st,
                children: [
                    (0, r.jsx)("div", {
                        className: oM.Iv,
                        children: (0, r.jsx)(v.d, {
                            checked: e,
                            onChange: () => op.A.setStateDebugging(!e),
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
function dt() {
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsxs)("div", {
            className: k()(tT.nd, oM.rf),
            children: [
                (0, r.jsx)(oq, {}),
                (0, r.jsx)(oQ, {}),
                (0, r.jsx)(oJ, {}),
                (0, r.jsx)(oK, {}),
                (0, r.jsx)(oW, {}),
                (0, r.jsx)(oH, {}),
                (0, r.jsx)(o7, {}),
                (0, r.jsx)(de, {}),
            ],
        }),
    });
}
let da = (e) => {
        switch (e) {
            case "Disabled":
                return;
            case "False":
                return !1;
            case "True":
                return !0;
        }
    },
    dl = (e) => (null == e ? "Disabled" : e ? "True" : "False"),
    dn = o.memo(function () {
        let e = (0, oy.wW)(),
            t = (0, M.bG)([oI.Ay], () => oI.Ay.getOverlayKeybind());
        return (0, r.jsxs)("div", {
            className: oM.st,
            children: [
                (0, r.jsx)(w.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
                (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Experiment State" }),
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", {
                        children: JSON.stringify({ ...e, overlayKeybind: (0, oR.dI)(t.shortcut) }, void 0, 2),
                    }),
                }),
                (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Overrides" }),
                (0, r.jsx)(x.l, {
                    label: "Overlay User Status",
                    description: "Override whether the current user was a new or existing user",
                    value: dl(e.overrideIsNewOverlayUser),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Existing user", value: "False", id: "False" },
                        { label: "New user", value: "True", id: "True" },
                    ],
                    onSelectionChange: (e) => {
                        (0, oy.sw)(da(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(x.l, {
                    label: "Override Previous Keybind Status",
                    description: "Override whether the user's pre-experiment keybind was the default keybind",
                    value: dl(e.overrideIsUsingDefaultOverlayKeybind),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Using default keybind", value: "True", id: "True" },
                        { label: "Not using default keybind", value: "False", id: "False" },
                    ],
                    onSelectionChange: (e) => {
                        (0, oy.C3)(da(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Actions" }),
                (0, r.jsx)(h.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, oy.xc)() }),
                (0, r.jsx)(h.$, {
                    size: "sm",
                    text: "Reset isUsingDefaultOverlayKeybind",
                    onClick: () => (0, oy.tM)(),
                }),
            ],
        });
    });
function ds() {
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsx)("div", { className: k()(tT.nd, oM.rf), children: (0, r.jsx)(dn, {}) }),
    });
}
function di() {
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
            className: k()(tT.nd, oM.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: oM._V,
                    children: [
                        (0, r.jsx)(I.D, {
                            className: k()(oM.k0, "state" === e && oM.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(D.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(I.D, {
                            className: k()(oM.k0, "logging" === e && oM.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(D.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(I.D, {
                            className: k()(oM.k0, "experiments" === e && oM.a),
                            onClick: () => t("experiments"),
                            children: (0, r.jsx)(D.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, r.jsx)(dt, {}),
                "logging" === e && (0, r.jsx)(o9, {}),
                "experiments" === e && (0, r.jsx)(ds, {}),
            ],
        })
    );
}
var dr = a(488428),
    dd = a(73825),
    dc = a(753390),
    du = a(892656),
    dm = a(944304),
    dh = a(300233),
    dx = a(599941),
    dp = a(817649),
    dg = a(4630),
    dv = a(44120),
    dj = a(532794),
    db = a(216678),
    df = a(194509),
    dy = a(761705),
    dE = a(65738),
    d_ = a(265768);
function dC(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, dx.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, r.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(dp.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let dS = function () {
    let [e, t] = o.useState(ss.pe.TIER_2),
        [a, l] = o.useState(null),
        n = (0, M.yK)([aK.A], () => aK.A.getGuildsArray()),
        [s] = (0, M.yK)([rW.A], () => [rW.A.getPremiumSubscription()]),
        i = n.map((e) => ({ id: e.id, value: e, label: e.name })),
        [c, m] = o.useState(i.length > 0 ? i[0].value : null),
        [v, j] = o.useState(""),
        [b, f] = o.useState({ plan_id: ss.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        y = "true" !== b.gift && null != s,
        [E, _] = o.useState(i.length > 0 ? i[0].value : null),
        { analyticsLocations: C } = (0, aF.Ay)(tm.A.PAYMENT_FLOW_TEST_PAGE),
        [S, N] = o.useState(""),
        [A, k] = o.useState(J.dJq),
        { balance: I, isFetching: T, error: O } = (0, dy.W)(),
        { isSubmitting: w, responseMessage: L, redeemVirtualCurrency: P } = (0, dy.Q)(),
        [U, G] = o.useState(J.dJq),
        [F, B] = o.useState(""),
        [$, V] = o.useState(J.dJq),
        [W, z] = o.useState(J.dJq);
    return (0, r.jsx)(aF.f5, {
        value: C,
        children: (0, r.jsx)(d.Ip, {
            className: d_.XG,
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
                                    { id: "tier_2", value: ss.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: ss.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: ss.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(df.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: lt.XD.PRIMARY,
                                look: lt.pR.FILLED,
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
                                    { id: "tier_2", value: ss.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: ss.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: ss.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => l(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, dj.A)({ subscriptionTier: a, analyticsLocations: C }),
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
                                ? (0, r.jsx)(dm.A, { guild: c, analyticsLocation: {} })
                                : (0, r.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)(R.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(ic.Anchor, {
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
                                    (0, r.jsx)(nB.m, {
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
                                    { id: "tier_2", value: ss.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: ss.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: ss.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
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
                    (0, r.jsx)(nB.m, {
                        text: "Already subscribed",
                        shouldShow: y,
                        children: (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: y,
                            onClick: () => {
                                window.open(J.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + dr.stringify({ ...b }));
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
                                              className: d_.wG,
                                              children: (0, r.jsx)(e8.y, { type: e8.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: d_.dB,
                                              children: [
                                                  null !== O &&
                                                      (0, r.jsxs)(D.E, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              O.message,
                                                          ],
                                                      }),
                                                  (0, r.jsx)(dE.Gy, {
                                                      balance: I ?? 0,
                                                      balanceWidgetMode: dE.k7.SELECTED,
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
                                value: E,
                                options: i,
                                onSelectionChange: (e) => _(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(dh.H, {
                                guildId: E?.id,
                                children: (0, r.jsx)(dC, { selectedGuildForGuildSub: E }),
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
                                    (0, dg.openIAPPurchaseModal)({
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
                                        value: $,
                                        onChange: (e) => V(e),
                                    }),
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        text: "Open Premium Apps Payment Modal for SKU",
                                        onClick: () =>
                                            (0, db.q)({
                                                applicationId: F,
                                                skuId: $,
                                                analyticsLocations: C,
                                                checkoutFlow: du.CL.PREMIUM_APPS_OTP_CHECKOUT,
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
                                onClick: () => (0, dv.A)({ skuId: W, analyticsLocations: C }),
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
                                    onClick: () => (0, dd.YG)(),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, dc.uZ)(),
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
                            onClick: () => (0, nn.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var dN = a(219887),
    dA = a(459357),
    dk = a(885180),
    dI = a(742810),
    dD = a(500380),
    dT = a(102609),
    dR = a(710195),
    dO = a(211287),
    dw = a(295405),
    dM = a(188976);
let dL = [
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
    dP = {
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
    dU = [
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
    dG = {
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
    dF = [
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
    dB = {
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
function d$() {
    let [e, t] = o.useState("US"),
        [a, l] = o.useState(null),
        [n, s] = o.useState(null),
        [i, c] = o.useState(null),
        [u, m] = o.useState(null),
        [p, g] = o.useState("pm_card_us"),
        [v, j] = o.useState(!1),
        b = Object.values((0, tu.bG)([dw.A], () => dw.A.paymentSources)),
        f = dP[e],
        y = async () => {
            let t = p;
            "" === t && (t = "pm_card_us"),
                await lz.Bo.post({
                    url: "/debug/payment-source",
                    body: { token: t, address: "US" === e ? n : "CA" === e ? u : null },
                    rejectWithError: !1,
                }),
                await (0, dc.$o)();
        },
        E = async () => {
            await lz.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }), await (0, dc.$o)();
        },
        _ = async () => {
            await lz.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }), window.location.reload();
        };
    return (
        o.useEffect(() => {
            (0, dc.$o)();
        }, []),
        (0, r.jsx)(d.Ip, {
            className: tT.nd,
            children: (0, r.jsxs)("div", {
                className: sm.l$,
                children: [
                    (0, r.jsxs)(D.E, {
                        style: { marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, r.jsxs)("div", {
                        className: sm.Uo,
                        children: [
                            (0, r.jsx)(t1.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: dL
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, r.jsx)("img", {
                                                alt: "",
                                                className: dM.bI,
                                                src: (0, dD.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: (e) => {
                                    t(e), g(dP[e][0].value), j(1 === dP[e].length);
                                },
                            }),
                            "US" === e &&
                                (0, r.jsx)(x.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: dU.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        l(e), s(dG[e] ?? null);
                                    },
                                }),
                            "CA" === e &&
                                (0, r.jsx)(x.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: i,
                                    options: dF.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        c(e), m(dB[e] ?? null);
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
                                    onClick: E,
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
                    (0, r.jsx)(dX, {}),
                    (0, r.jsx)(D.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Experiment Overrides",
                    }),
                    (0, r.jsx)(dq, {}),
                    (0, r.jsx)(D.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Existing Payment Sources",
                    }),
                    b.map((e) => (0, r.jsx)(dZ, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let dV = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    dW = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Legacy checkout" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Unified checkout" },
    ],
    dz = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Gift cards enabled" },
    ],
    dH = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Payment elements disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Payment elements enabled" },
    ],
    dK = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Orb redemption via legacy" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Orb redemption via orders" },
    ];
function dY(e) {
    let { experimentName: t, options: a = dV } = e,
        l = (0, tu.bG)([dR.A, lh.default], () => {
            let e = lh.default.getId(),
                a = dR.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        n = o.useCallback(
            (e) => {
                (0, dT.t$)(dT.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, r.jsx)(x.l, { selectionMode: "single", label: t, value: l, options: [...a], onSelectionChange: n });
}
function dq() {
    return (0, r.jsxs)(R.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(dY, { experimentName: dI.W2.definition.name, options: dW }),
            (0, r.jsx)(dY, { experimentName: dI._$.definition.name, options: dW }),
            (0, r.jsx)(dY, { experimentName: dA.A.definition.name, options: dz }),
            (0, r.jsx)(dY, { experimentName: dk._.definition.name, options: dH }),
            (0, r.jsx)(dY, { experimentName: dO.A.definition.name, options: dK }),
        ],
    });
}
let dJ = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    dQ = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function dX() {
    let [e, t] = o.useState("US"),
        [a, l] = o.useState("500"),
        [n, s] = o.useState(null),
        [i, d] = o.useState(!1),
        [c, u] = o.useState(!1),
        [m, g] = o.useState(null),
        v = parseInt(a, 10),
        j = !isNaN(v) && v >= 500 && v <= 5e3,
        b = async () => {
            if (j) {
                d(!0), g(null), s(null), u(!1);
                try {
                    let t = await lz.Bo.post({
                        url: "/billing/gift-card/create-on-demand-pin",
                        body: { country: e, currency: dQ[e], amount: v },
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
                        options: dJ,
                        onSelectionChange: t,
                    }),
                    (0, r.jsx)(p.k, {
                        label: "Amount (500\u20135000)",
                        type: "number",
                        value: a,
                        onChange: l,
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
            null != n &&
                (0, r.jsxs)(R.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(p.k, { label: "Generated PIN", value: n, onChange: () => {}, readOnly: !0 }),
                        (0, r.jsx)(h.$, {
                            variant: "secondary",
                            size: "sm",
                            text: c ? "Copied!" : "Copy",
                            onClick: () => {
                                navigator.clipboard.writeText(n), u(!0), setTimeout(() => u(!1), 2e3);
                            },
                        }),
                    ],
                }),
            null != m && (0, r.jsx)(T.w, { type: "critical", children: m }),
        ],
    });
}
function dZ(e) {
    let { paymentSource: t } = e,
        a = async () => {
            await lz.Bo.patch({ url: J.Rsh.BILLING_PAYMENT_SOURCE(t.id), body: { default: !0 }, rejectWithError: !1 }),
                await (0, dc.$o)();
        };
    return (0, r.jsxs)("div", {
        className: sm.bd,
        children: [
            (0, r.jsx)(dN.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, r.jsx)("img", { alt: t.country, className: dM.bI, src: (0, dD.t)(t.country) }),
            t.isDefault
                ? (0, r.jsx)(D.E, { variant: "text-sm/medium", children: "(Default)" })
                : (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: "Set as Default", onClick: a }),
        ],
    });
}
var d0 = a(706712),
    d1 = a(367727),
    d2 = a(845886);
function d8() {
    return (0, r.jsx)(d.Ip, { className: d2.kL, children: (0, r.jsx)(d6, {}) });
}
function d6() {
    let e = o.useCallback(() => {
            (0, ng._N)(t7.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, d1.FZ)(t7.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(w.D, { className: d2.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, r.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, r.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, r.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, r.jsx)("div", {
                className: d2.PW,
                children: (0, r.jsx)(h.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var d3 = a(136722),
    d5 = a(576705),
    d4 = a(558393),
    d9 = a(719366),
    d7 = a(842681);
function ce(e) {
    let { title: t, can: a } = e,
        l = a ? rq.A : F.P,
        n = (0, r.jsx)("div", {
            className: k()(d7.v_, a ? d7.uU : d7.Ss),
            children: (0, r.jsx)(l, { className: d7.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: d7.z8,
        children: [
            n,
            (0, r.jsx)("div", {
                className: d7.rv,
                children: (0, r.jsx)(D.E, { variant: "text-md/normal", children: t }),
            }),
        ],
    });
}
function ct() {
    let e = (0, M.bG)([rT.A], () => rT.A.getChannelId()),
        t = (0, M.bG)([aY.A], () => aY.A.getGuildId()),
        a = (0, M.bG)([ad.A], () => ad.A.getChannel(e)),
        l = (0, M.bG)([aK.A], () => aK.A.getGuild(t)),
        n = (0, M.bG)([d5.A], () => d5.A.computePermissions(a)),
        s = (0, M.bG)([d5.A], () => d5.A.computePermissions(l)),
        i = (0, ao.Ay)(a, !0),
        o = null != a ? (0, d9.mW)(a, !1) : null,
        d = null != l ? d4.A.getGuildPermissionSpecMap(l) : null,
        c = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                l = d3.zy(n, a);
            return (0, r.jsx)(ce, { title: t, can: l }, t);
        }),
        u = Object.values(d ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                l = d3.zy(s, a);
            return (0, r.jsx)(ce, { title: t, can: l }, t);
        });
    return (0, r.jsx)("div", {
        className: k()(tT.nd, d7.nd),
        children: (0, r.jsxs)("div", {
            className: d7.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: d7.uW,
                    children: [
                        (0, r.jsx)(w.D, {
                            variant: "heading-md/semibold",
                            children: null != i ? `Permissions in ${i}` : "No channel selected",
                        }),
                        c,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: d7.uW,
                    children: [
                        (0, r.jsx)(w.D, {
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
var ca = a(873298),
    cl = a(775602),
    cn = a(363195),
    cs = a(885386),
    ci = a(631670),
    cr = a(817281),
    co = a(955572),
    cd = a(56348),
    cc = a(385803),
    cu = a(381941);
let cm = [J.NJ8.DARK, J.NJ8.LIGHT, J.NJ8.DARKER, J.NJ8.MIDNIGHT],
    ch = [ca.NS.COMPACT, ca.NS.COZY, ca.NS.DEFAULT];
function cx(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function cp() {
    let e,
        t =
            ((e = H.default.getCurrentUser()),
            r0.Ay.canUseClientThemes(e) ? Object.keys(cc.ag).map((e) => Number(e)) : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                l = cx(a);
            if (null != l) {
                let t = cc.ag[l];
                e = t?.theme ?? J.NJ8.DARK;
            } else e = cx([J.NJ8.DARK, J.NJ8.DARKER, J.NJ8.MIDNIGHT]);
            await cr.u_(
                { theme: e, backgroundGradientPresetId: l ?? void 0, customUserThemeSettings: void 0 },
                ng.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = cx(cm);
            await cr.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                ng.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function cg() {
    let e = tx.A.purchases,
        t = (0, ey.x9)(e),
        a = (0, ey.$W)(e),
        l = t.length > 0,
        n = a.length > 0;
    if (l || n)
        try {
            let e = {};
            l && (e.avatarDecoration = cx([...t, null])), n && (e.nameplate = cx([...a, null])), (0, e7.p)(e);
            let s = te.A.getPendingChanges(),
                i = (0, cd.Sk)(s);
            await (0, ci._L)(i).finally(ci.pZ);
        } catch (e) {}
}
function cv() {
    try {
        let e = cx(J.hH7.FONT_SIZES);
        (0, co.XS)(e);
        let t = cx(cu.qh);
        (0, co.AC)(t);
        let a = cx(ch);
        cs.Xi.updateSetting(a);
    } catch (e) {}
}
function cj() {
    (0, tl.Bf)();
    let e = (0, M.bG)([H.default], () => H.default.getCurrentUser()),
        t = cs.eh.useSetting(),
        a = (0, M.bG)([cn.A], () => cn.A.theme),
        l = t.backgroundGradientPresetId,
        n = (0, M.bG)([tx.A], () => tx.A.purchases),
        s = (0, ey.x9)(n),
        i = (0, ey.$W)(n),
        d = e?.avatarDecoration?.skuId,
        c = e?.collectibles?.nameplate?.skuId,
        u = null != d ? (s.find((e) => e.skuId === d) ?? null) : null,
        m = null != c ? (i.find((e) => e.skuId === c) ?? null) : null,
        x = (0, M.bG)([th.A], () => th.A.getProduct(u?.skuId)),
        p = (0, M.bG)([th.A], () => th.A.getProduct(m?.skuId)),
        g = (0, M.bG)([cl.A], () => cl.A.fontSize),
        v = (0, M.bG)([cl.A], () => cl.A.messageGroupSpacing),
        j = cs.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = H.default.getCurrentUser(),
                t = cs.eh.getSetting(),
                a = tx.A.purchases,
                l = (0, ey.x9)(a),
                n = (0, ey.$W)(a),
                s = cn.A.theme,
                i = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (l.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (n.find((e) => e.skuId === o) ?? null) : null,
                u = cl.A.fontSize,
                m = cl.A.messageGroupSpacing,
                h = cs.Xi.getSetting();
            return () => {
                try {
                    cr.u_(
                        { theme: s, backgroundGradientPresetId: i ?? void 0, customUserThemeSettings: void 0 },
                        ng.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, e7.p)({ avatarDecoration: d, nameplate: c });
                    let e = te.A.getPendingChanges(),
                        t = (0, cd.Sk)(e);
                    (0, ci._L)(t).finally(ci.pZ), (0, co.XS)(u), (0, co.AC)(m), cs.Xi.updateSetting(h);
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: ny.kL,
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
                        (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: cp }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: cg,
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: cv,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["Theme: ", a] }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-md/normal",
                            children: ["Client Theme ID:", " ", null != l ? cc.ag[l]?.getName() : "None"],
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
                                        case ca.NS.COMPACT:
                                            return "Compact";
                                        case ca.NS.COZY:
                                            return "Cozy";
                                        case ca.NS.DEFAULT:
                                            return "Default";
                                        case ca.NS.RESPONSIVE:
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
var cb = a(885574),
    cf = a(311678),
    cy = a(508274),
    cE = a(837529);
let c_ = [5793266, 2303016],
    cC = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function cS() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: l } = (0, cE.Zt)(),
        n = (0, ee.Ay)(),
        s = (0, M.bG)([ae.A], () => ae.A.settings.appearance?.clientThemeSettings),
        i =
            s?.customUserThemeSettings != null &&
            null != s.customUserThemeSettings.colors &&
            s.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, cr.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), l(null));
    }
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsxs)(R.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(cf.N, {
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
                                    icon: cb.m,
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
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: c_ }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(n6.e, {
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
                                  options: cC,
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
                                                onClick: () => t({ ...e, themeColors: c_ }),
                                            }),
                                            (0, r.jsxs)(R.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, r.jsx)(cy.VN, {
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
                                                    (0, r.jsx)(cy.VN, {
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
                                                                    l({
                                                                        theme: n,
                                                                        customUserThemeSettings:
                                                                            s.customUserThemeSettings,
                                                                    }),
                                                                    (0, cr.u_)({ theme: "system" });
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
var cN = a(141931),
    cA = a(306173),
    ck = a(587626),
    cI = a(237984),
    cD = a(43203),
    cT = a(349435),
    cR = a(674272),
    cO = a(466034),
    cw = a(10094),
    cM = a(683760);
let cL = () => {
    let e = (0, M.bG)([H.default], () => H.default.getCurrentUser()),
        t = (0, M.bG)([cM.A], () => {
            let e = cM.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, M.bG)([cM.A], () => cM.A.getPremiumTypeOverride());
    return (0, r.jsxs)(R.B, {
        gap: 16,
        children: [
            (0, r.jsx)(x.l, {
                label: "Override Client-Side Premium Type",
                options: ss.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, cw.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(nI.Q, {
                onClick: () => {
                    (0, cw.O)(ss.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(ia.J, {
                label: "Override Client-Side Account Created At Date",
                value: le()(t),
                onSelect: (e) => {
                    var t;
                    return (t = e.toISOString()), void (0, cw.Y)(new Date(t));
                },
            }),
            (0, r.jsx)(nI.Q, { onClick: () => (0, cw.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
};
var cP = a(19575),
    cU = a(327337),
    cG = a(431804),
    cF = a(865349),
    cB = a(818050);
function c$() {
    throw Error("Send help");
}
function cV() {
    let e = cs.j0.useSetting(),
        [t, l] = o.useState(!1);
    return t
        ? {}
        : (0, r.jsxs)(d.Ip, {
              children: [
                  (0, r.jsx)("div", { className: k()(cF.N, cB.SX), children: (0, r.jsx)(cL, {}) }),
                  (0, r.jsx)("div", {
                      className: k()(cF.N, cB.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, cR.A)({ source: cG.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: k()(cF.N, cB.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = rT.A.getChannelId() ?? "21154681615024128"),
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
                                                  warningType: cT._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: cU.V },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: k()(cF.N, cB.QB),
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
                      className: k()(cF.N, cB.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, cD.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: k()(cF.N, cB.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: cA.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: k()(cF.N, cB.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = ck.A.getSocket();
                              tA.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: k()(cF.N, cB.QB),
                      children: (0, r.jsx)(v.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => cs.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: k()(cF.N, cB.QB),
                      children: [
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, cI.o)(),
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  ck.A.getSocket().close(), ck.A.getSocket().connect();
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
                              onClick: () => (0, cO.sy)(!0),
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: () => {
                                  lz.Bo.post({ url: J.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: k()(cF.N, cB.QB),
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
                              onSelectionChange: (e) => null != e && cP.Ay.crash(e),
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
                                      value: cN.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: cN.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: cN.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void cP.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => l(!0),
                          }),
                          (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: c$ }),
                      ],
                  }),
              ],
          });
}
var cW = a(593924),
    cz = a(653887),
    cH = a(105596);
function cK() {
    let e = Object.keys(cW).map((e) => (0, r.jsx)(cJ, { riveName: e }, e));
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
                (0, r.jsx)(cY, {}),
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
function cY() {
    let [e, t] = o.useState(null),
        [a, l] = o.useState(null),
        [n, s] = o.useState(null),
        [i, d] = o.useState([]),
        c = o.useRef(null),
        [u, m] = o.useState(400),
        [h, x] = o.useState(400),
        g = o.useCallback(() => {
            setTimeout(() => {
                s(c.current?.getProperties() ?? {}), d(c.current?.getArtboards() ?? []), l({});
            }, 1e3);
        }, []),
        v = o.useCallback(
            (e, t) => {
                null != a && l((a) => ({ ...a, [e]: { type: n?.[e]?.type, value: t } }));
            },
            [n, a],
        ),
        j = o.useCallback((e) => {
            s(null), l(null), t(e);
        }, []);
    return (0, r.jsxs)(R.B, {
        gap: 16,
        children: [
            (0, r.jsx)(cJ, { riveName: "Rive inspector", onRiveLoad: j }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(cz._, { src: e, ref: c, onLoad: g, dynamicDataBinding: a ?? {} }),
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
                                Object.keys(n ?? {}).map((e) =>
                                    (0, r.jsx)(
                                        cq,
                                        {
                                            property: e,
                                            type: n?.[e]?.type,
                                            value: a?.[e]?.value ?? n?.[e]?.value,
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
function cq(e) {
    let { property: t, type: a, value: l, onChange: n, artboards: s } = e;
    return "string" === a
        ? (0, r.jsx)(p.k, { label: t, value: l, onChange: (e) => n(e) })
        : "number" === a
          ? (0, r.jsx)(p.k, { type: "number", label: t, value: l, onChange: (e) => n(parseInt(e)) })
          : "boolean" === a
            ? (0, r.jsx)(v.d, { label: t, checked: l, onChange: (e) => n(e) })
            : "trigger" === a
              ? (0, r.jsx)(h.$, { text: `Trigger ${t}`, onClick: () => n(Number.isSafeInteger(l) ? l + 1 : 1) })
              : "image" === a
                ? (0, r.jsx)(p.k, { label: t, value: l, onChange: (e) => n(e) })
                : "color" === a
                  ? (0, r.jsx)(t1.Z, {
                        selectionMode: "single",
                        label: t,
                        value: l,
                        onSelectionChange: (e) => n(e),
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
                          value: l,
                          onSelectionChange: (e) => n(e),
                          closeOnSelect: !0,
                          placeholder: "Select an artboard...",
                          options: s.map((e) => ({ label: e, value: e, id: e })),
                      })
                    : null;
}
function cJ(e) {
    let { riveName: t, onRiveLoad: a } = e,
        l = cW[t]?.riveSrc,
        n = null == l,
        s = o.useRef(null),
        i = (0, cH.Gy)(l);
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
                                let n = new FileReader();
                                (n.onload = (e) => {
                                    let t = e.target?.result;
                                    null != l && (0, cH.DS)(l, t), a?.(t);
                                }),
                                    n.readAsArrayBuffer(t);
                            },
                            ref: s,
                        }),
                        (0, r.jsx)(eI.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: () => {
                                null != s.current && (s.current.value = ""),
                                    null != l && (0, cH.DS)(l, null),
                                    a?.(null);
                            },
                            icon: ls.u,
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
var cQ = a(290136),
    cX = a(106236),
    cZ = a(629584),
    c0 = a(600239),
    c1 = a(940622),
    c2 = a(961895),
    c8 = a(343991),
    c6 = a(699666);
let c3 = () => {
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
            { modalKey: c8.D },
        );
    },
    c5 = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    c4 = (e) => {
        let { className: t, onDrop: a, children: l } = e,
            [n, s] = o.useState(!1),
            i = o.useRef(null),
            d = o.useCallback((e) => {
                c5(e), s(!0), (0, eR.closeModal)(c8.D);
            }, []),
            c = o.useCallback((e) => {
                c5(e);
                let t = i.current,
                    a = e.relatedTarget;
                (null != a && (null == t || t.contains(a))) || s(!1);
            }, []),
            u = o.useCallback(
                async (e) => {
                    c5(e), s(!1);
                    let t = e.dataTransfer;
                    if (null == t) return void c3();
                    let l = await Promise.all(
                        Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry()),
                    ).then((e) => e.filter((e) => null != e));
                    l.length > 0 ? a(l) : c3();
                },
                [a],
            );
        return (0, r.jsxs)("div", {
            ref: i,
            className: k()(t, c6.iE),
            onDragEnter: d,
            onDragOver: c5,
            onDragLeave: c,
            onDrop: u,
            children: [
                l,
                n &&
                    (0, r.jsx)("div", {
                        className: c6.d2,
                        children: (0, r.jsxs)("div", {
                            className: c6.vW,
                            children: [
                                (0, r.jsx)(c2.A, { icons: eo.ir }),
                                (0, r.jsx)(w.D, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
                                (0, r.jsxs)("div", {
                                    className: c6.GA,
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            variant: "text-sm/normal",
                                            children: "Drop file(s) into this panel to preview Shop assets!",
                                        }),
                                        (0, r.jsxs)(D.E, {
                                            variant: "text-sm/normal",
                                            children: [
                                                "Click",
                                                (0, r.jsx)(cQ.c, {
                                                    className: c6.q4,
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
var c9 = a(559095);
let c7 = new Set([
        e_.RN.HERO_BANNER_STATIC,
        e_.RN.HERO_LOGO,
        e_.RN.PDP_BACKGROUND,
        e_.RN.LOGO,
        e_.RN.MOBILE_BANNER,
        e_.RN.MOBILE_BACKGROUND,
    ]),
    ue = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    ut = { max: 5e6, warn: 2e6 },
    ua = { max: 3e6, warn: 1e6 },
    ul = { max: 2e6, warn: 1e6 },
    un = { max: 1e6, warn: 5e5 },
    us = { max: 25e4, warn: 5e4 },
    ui = {
        [e_.Jn.PROFILE_EFFECT]: ut,
        [e_.Jn.AVATAR_DECORATION]: ua,
        [e_.Jn.PROFILE_FRAME]: ul,
        [e_.RN.HERO_BANNER_ANIMATED]: ut,
        [e_.RN.HERO_BANNER_RIVE]: ut,
        [e_.RN.CATALOG_BANNER_RIVE]: ut,
        [e_.RN.SHOP_BUTTON_BG_HOVER]: ua,
        [e_.RN.SHOP_BUTTON_BG_HOVER_DARK]: ua,
        [e_.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: ua,
        [e_.RN.SHOP_BUTTON_BG_RESTING]: ua,
        [e_.RN.SHOP_BUTTON_BG_RESTING_DARK]: ua,
        [e_.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: ua,
        [e_.RN.HERO_BANNER_STATIC]: ul,
        [e_.RN.UPSELL_BANNER]: un,
        [e_.RN.UPSELL_BANNER_POPOUT]: us,
        [e_.RN.MOBILE_BANNER]: un,
        [e_.RN.MOBILE_BACKGROUND]: us,
        [e_.RN.MOBILE_HERO]: un,
        [e_.RN.PDP_BACKGROUND]: us,
        [e_.RN.LOGO]: us,
        [e_.RN.TAB_TOOLTIP]: us,
    },
    ur = [e_.Kx.COLLECTION],
    uo = [e_.Kx.AVATAR_DECORATIONS, e_.Kx.FRAMES, e_.Kx.NAMEPLATES, e_.Kx.PROFILE_EFFECTS],
    ud = async (e) => {
        let t = e.createReader(),
            a = await new Promise((e) => t.readEntries(e)),
            l = new Set();
        for (let e of a) e.isDirectory && l.add(e.name);
        let n = ur.filter((e) => !l.has(e));
        return uo.some((e) => l.has(e)) || n.push(`at least one of: ${uo.join(", ")}`), n;
    },
    uc = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
    uu = (e) => {
        let { names: t, addError: a } = e,
            l = t.filter((e) => !uc.test(e));
        l.length > 0 && a("File names must be in lowercase snake case", l);
    },
    um = (e, t, a, l, n) => {
        let s = t.size,
            i = s > 1e6 ? `${(s / 1e6).toFixed(2)}MB` : `${(s / 1e3).toFixed(2)}KB`,
            r = `${n ?? t.name} - ${i}`;
        if (s > e.max) {
            let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
            a("Files exceed the recommended size limit - make sure they are optimized!", [`${r} (max: ${t})`]);
        } else s > e.warn && l("Files are a tad chonky - are you sure they're optimized?", [`${r}`]);
    },
    uh = (e, t, a, l) => {
        let n = ui[e];
        if (null != n) for (let e of t) e.name.endsWith(".txt") || um(n, e, a, l);
    },
    ux = (e) => {
        let t = e_.aL[e];
        return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
    },
    up = ["png", "jpg"];
var ug = a(981388);
let uv = o.createContext({ setDropHandler: () => {} }),
    uj = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    ub = { id: "none", label: "[none selected]", value: null },
    uf = () => {
        (0, eR.hasModalOpen)(c0.k)
            ? (0, eR.closeModal)(c0.k)
            : (0, eR.openModalLazy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: c0.k, onCloseRequest: () => (0, eR.closeModal)(c0.k) },
              );
    },
    uy = () => {
        (0, eR.hasModalOpen)(c0.g)
            ? (0, eR.closeModal)(c0.g)
            : (0, eR.openModalLazy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: c0.g, onCloseRequest: () => (0, eR.closeModal)(c0.g) },
              );
    },
    uE = () => {
        let e = (0, eC.pF)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, c1.JE)(),
            l = o.useMemo(() => [ub, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: ug.kO,
                  children: [
                      (0, r.jsx)(ar.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: ug.wR,
                          children: [
                              (0, r.jsx)(w.D, {
                                  variant: "heading-sm/semibold",
                                  children: `Profile Effect (${e.length} to preview)`,
                              }),
                              (0, r.jsx)(eI.K, {
                                  variant: "icon-only",
                                  size: "sm",
                                  onClick: uy,
                                  icon: cQ.c,
                                  "aria-label": "Open PFX preview instructions",
                              }),
                          ],
                      }),
                      (0, r.jsx)(x.l, {
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
    u_ = () => {
        let e = (0, c1.bA)(),
            { previewProfileFrameKey: t, setPreviewProfileFrameKey: a } = (0, c1.JE)(),
            l = o.useMemo(() => [ub, ...e.map((e) => ({ id: e.key, label: e.key, value: e.key }))], [e]);
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: ug.kO,
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
                          options: l,
                          value: t,
                          maxOptionsVisible: 50,
                          onSelectionChange: a,
                      }),
                  ],
              });
    },
    uC = () => {
        let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, c1.JE)(),
            { avatarDecorationAssets: a } = (0, c1.NE)(),
            l = o.useMemo(() => [ub, ...a.map((e) => ({ id: e.name, label: e.name, value: e.name }))], [a]);
        return 0 === a.length
            ? null
            : (0, r.jsxs)("div", {
                  className: ug.kO,
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
                          options: l,
                          value: e,
                          maxOptionsVisible: 50,
                          onSelectionChange: t,
                      }),
                  ],
              });
    },
    uS = new Set([e_.RN.HERO_BANNER_STATIC, e_.RN.HERO_BANNER_ANIMATED, e_.RN.HERO_BANNER_RIVE]),
    uN = (e) => {
        let { clearAssets: t, clearIgnoredFiles: a } = e,
            { collectionAssets: l } = (0, c1.NE)(),
            {
                deleteCollectionAsset: n,
                clearAssets: s,
                heroLogoMaxHeight: i,
                setHeroLogoMaxHeight: d,
                heroResponsive: c,
                setHeroResponsive: u,
            } = (0, c1.JE)(),
            m = o.useMemo(() => Object.values(l).map((e) => ({ label: e.name, value: e.type })), [l]),
            x = m.some((e) => e.value === e_.RN.HERO_LOGO),
            p = m.some((e) => uS.has(e.value)),
            g = o.useCallback((e) => n(e), [n]),
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
                              className: ug.v7,
                              children: [
                                  x &&
                                      (0, r.jsxs)("div", {
                                          className: ug.cj,
                                          children: [
                                              (0, r.jsx)(D.E, {
                                                  variant: "text-md/normal",
                                                  className: ug.Me,
                                                  children: "Logo size",
                                              }),
                                              (0, r.jsx)(cX.A, {
                                                  className: ug.TQ,
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
                                          className: ug.sy,
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
                          className: ug.wR,
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
                                      className: ug._0,
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
    uA = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
        return 0 === t.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(ar.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: ug.wR,
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
                                      className: ug.yk,
                                      children: (0, r.jsx)(D.E, { variant: "text-md/normal", children: e }),
                                  },
                                  `${e}-${t}`,
                              ),
                          ),
                      }),
                  ],
              });
    },
    uk = () => {
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
                                let l = await ud(t);
                                l.length > 0 && i("Missing required directories", l),
                                    (a = await (0, e_.eg)([t])),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: l } = e;
                                        for (let e of t.collectionFiles) {
                                            let t = (0, e_.pd)(e),
                                                n = null != t ? ui[t] : null;
                                            null != n && um(n, e, a, l);
                                        }
                                        uu({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                        let n = new Set(
                                                t.collectionFiles.map((e) => (0, e_.pd)(e)).filter((e) => null != e),
                                            ),
                                            s = Array.from(c7)
                                                .filter((e) => !n.has(e))
                                                .map(ux);
                                        s.length > 0 && a("Missing required files", s);
                                        let i = Object.values(e_.RN)
                                            .filter((e) => !c7.has(e))
                                            .filter((e) => !n.has(e))
                                            .map(ux);
                                        i.length > 0 && l("Missing optional assets", i);
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: l } = e;
                                        uu({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                            Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                                let [t, n] = e,
                                                    s = n.map((e) => e.name);
                                                uu({
                                                    names: s.map((e) => {
                                                        let t = e.indexOf("-");
                                                        return e.substring(0, t > 0 ? t : e.length);
                                                    }),
                                                    addError: a,
                                                }),
                                                    uh(e_.Jn.PROFILE_EFFECT, n, a, l);
                                                let i = ue
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
                                                        (e) => !ue.some((t) => e.startsWith(t)) && !e.endsWith(".txt"),
                                                    )
                                                    .map((e) => `${t}/${e}`);
                                                r.length > 0 && l("Contains unrecognized files", r);
                                            });
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: l } = e;
                                        uu({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                            uh(e_.Jn.AVATAR_DECORATION, t.avatarDecorationFiles, a, l);
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: l } = e,
                                            n = Object.keys(t.profileFrameDirsMap)
                                                .filter((e) => !uc.test(e))
                                                .map((e) => `${e_.Kx.FRAMES}/${e}`);
                                        n.length > 0 && a("File names must be in lowercase snake case", n);
                                        let s = ui[e_.Jn.PROFILE_FRAME];
                                        Object.entries(t.profileFrameDirsMap).forEach((e) => {
                                            let [t, n] = e,
                                                i = `${e_.Kx.FRAMES}/${t}`,
                                                r = n.previewFile?.name.split(".").pop()?.toLowerCase();
                                            (null != n.previewFile && null != r && up.includes(r)) ||
                                                a(
                                                    "Missing required preview file for profile frame (preview.png or preview.jpg)",
                                                    [`${i}/preview.{${up.join("|")}}`],
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
                                                uc.test(n.previewFile.name) ||
                                                o.push(`${i}/${n.previewFile.name}`),
                                            n.layerFiles))
                                                uc.test(e.name) || o.push(`${i}/${t}/${e.name}`);
                                            o.length > 0 && a("File names must be in lowercase snake case", o);
                                            let d = [];
                                            for (let { file: e, folder: t } of n.layerFiles) {
                                                let { parsed: a, errorType: l } = (0, c9.Mf)(e.name);
                                                if (null == a) {
                                                    let a = null != l ? c9.h4[l] : "invalid";
                                                    d.push(`${i}/${t}/${e.name}: ${a}`);
                                                }
                                            }
                                            if (
                                                (d.length > 0 && a("Invalid profile frame layer filenames", d),
                                                null != s)
                                            )
                                                for (let { file: e, folder: t } of (null != n.previewFile &&
                                                    um(s, n.previewFile, a, l, `${i}/${n.previewFile.name}`),
                                                n.layerFiles))
                                                    um(s, e, a, l, `${i}/${t}/${e.name}`);
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
            { setDropHandler: u } = o.useContext(uv),
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
                              className: ug._f,
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
                                    className: ug.ck,
                                    children: s.map((e, t) => {
                                        let [a, l] = e;
                                        return (0, r.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-critical",
                                                        children: a,
                                                    }),
                                                    l.length > 0 &&
                                                        (0, r.jsx)("ul", {
                                                            className: ug.ck,
                                                            children: l.map((e, t) =>
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
                                    className: ug.ck,
                                    children: Object.entries(l).map((e, t) => {
                                        let [a, l] = e;
                                        return (0, r.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-warning",
                                                        children: a,
                                                    }),
                                                    l.length > 0 &&
                                                        (0, r.jsx)("ul", {
                                                            className: ug.ck,
                                                            children: l.map((e, t) =>
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
    uI = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, c1.JE)(),
            { ignoredFilenames: l, clearAssets: n, clearIgnoredFilenames: s, processAndUpsertAssets: i } = (0, e_.ds)(),
            { setDropHandler: d } = o.useContext(uv),
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
                        className: ug.sy,
                        children: [
                            (0, r.jsx)(v.d, { checked: e, onChange: (e) => t(e) }),
                            (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Enable Preview" }),
                            (0, r.jsx)(eI.K, {
                                variant: "icon-only",
                                size: "sm",
                                onClick: uf,
                                icon: cQ.c,
                                "aria-label": "Open preview instructions",
                            }),
                        ],
                    }),
                    (0, r.jsx)(D.E, {
                        variant: "text-md/normal",
                        children: "Drop files in this panel to begin preview.",
                    }),
                    (0, r.jsx)(uE, {}),
                    (0, r.jsx)(u_, {}),
                    (0, r.jsx)(uC, {}),
                    (0, r.jsx)(uN, { clearAssets: n, clearIgnoredFiles: s }),
                    (0, r.jsx)(uA, { ignoredFiles: l, handleClearIgnoredFiles: s }),
                ],
            })
        );
    },
    uD = () => {
        let [e, t] = o.useState("preview");
        return (0, r.jsxs)("div", {
            className: ug.kL,
            children: [
                (0, r.jsx)(cZ.I, {
                    options: uj,
                    value: e,
                    onChange: (e) => {
                        let { value: a } = e;
                        return t(a);
                    },
                    className: ug.Vj,
                    optionClassName: ug.UK,
                }),
                (0, r.jsx)(ar.h, { size: 8 }),
                "preview" === e && (0, r.jsx)(uI, {}),
                "validate" === e && (0, r.jsx)(uk, {}),
                (0, r.jsx)(ar.h, { size: 16 }),
            ],
        });
    },
    uT = (e) => {
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
        return (0, r.jsx)(uv.Provider, { value: n, children: (0, r.jsx)(c4, { onDrop: s, children: t }) });
    };
var uR = a(663803),
    uO = a(859040),
    uw = a(385815);
let uM = () => {
    let e = (0, M.bG)([th.A], () => th.A.skipNumCategories);
    return (0, r.jsxs)("div", {
        className: uw.k,
        children: [
            (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Hide first # of categories" }),
            (0, r.jsx)(uR.l, {
                value: e,
                onChange: (e) => {
                    (0, uO.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
};
var uL =
        (((l = {}).DEFAULT = "default"),
        (l.DEFAULT_WITH_ORB_SHELF = "default_with_orb_shelf"),
        (l.ORB_TAB = "orb_tab"),
        (l.FRAMES = "frames"),
        (l.FRAMES_PINNED = "frames_pinned"),
        l),
    uP = a(295811);
let uU = () => {
    let e = (0, M.bG)([uP.A], () => uP.A.getShopHomeConfigOverride()),
        t = [
            { id: "none", label: "DISABLED (no override)", value: void 0 },
            ...Object.values(uL).map((e) => ({ id: e, label: e, value: e })),
        ];
    return (0, r.jsx)(x.l, {
        label: "Shop Home Override",
        layout: "horizontal",
        options: t,
        value: e,
        onSelectionChange: (e) => {
            (0, uO.Or)(e);
        },
        selectionMode: "single",
    });
};
var uG = a(172471);
let uF = () => {
        let [e, t] = o.useState(void 0);
        return (0, r.jsxs)("div", {
            className: k()(uG.kL, uG.fi),
            children: [
                (0, r.jsx)(p.k, {
                    fullWidth: !0,
                    label: "Shop Layout URL Override",
                    value: e,
                    onChange: (e) => ("" === e ? t(void 0) : t(e)),
                    placeholder: "https://cdn.discordapp.com/assets/content/...",
                }),
                (0, r.jsxs)("div", {
                    className: uG.o1,
                    children: [
                        (0, r.jsx)(h.$, {
                            variant: "critical-primary",
                            text: "Clear",
                            onClick: () => {
                                t(void 0), (0, uO.Aq)(void 0);
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Set",
                            onClick: () => (0, uO.Aq)("" !== e ? e : void 0),
                        }),
                    ],
                }),
            ],
        });
    },
    uB = (e) => {
        let { className: t } = e,
            a = Object.keys(t7.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
        return null == a
            ? null
            : (0, r.jsx)("div", { className: t, style: { zIndex: 1 }, children: (0, r.jsx)(nh, { items: [a] }) });
    };
var u$ = a(578797),
    uV = a(628917);
let uW = (e) => {
        let { title: t, expanded: a, onToggle: l, children: n } = e,
            s = o.useId();
        return (0, r.jsx)(cf.N, {
            isExpanded: a,
            className: uV.uW,
            collapsibleContent: (0, r.jsx)("div", { id: s, className: uV.f5, children: n }),
            children: () =>
                (0, r.jsxs)("button", {
                    type: "button",
                    onClick: l,
                    "aria-expanded": a,
                    "aria-controls": s,
                    className: uV.bV,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/bold", children: t }),
                        (0, r.jsx)(sz._, { size: "sm", color: "currentColor", className: k()(uV.ai, { [uV.hg]: a }) }),
                    ],
                }),
        });
    },
    uz = () => {
        let e = (0, M.bG)([nf.A], () => nf.A.get("shop_disable_cache")),
            t = (0, M.bG)([nf.A], () => nf.A.get("shop_include_unpublished")),
            a = (0, u$.U)("DevToolsShopPanel"),
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
        return (0, r.jsx)(uT, {
            onDrop: i,
            children: (0, r.jsxs)("div", {
                className: uV.Lm,
                children: [
                    (0, r.jsxs)("div", {
                        className: uV.dQ,
                        children: [
                            (0, r.jsx)(v.d, {
                                label: "Disable collectibles cache",
                                checked: e,
                                onChange: (e) => (0, nb.L)("shop_disable_cache", e),
                            }),
                            (0, r.jsx)(v.d, {
                                label: "Show unpublished collectibles",
                                checked: t,
                                onChange: (e) => (0, nb.L)("shop_include_unpublished", e),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(uW, {
                        title: "Layouts",
                        expanded: l.has("layouts"),
                        onToggle: () => s("layouts"),
                        children: [(0, r.jsx)(uB, {}), (0, r.jsx)(uU, {}), a && (0, r.jsx)(uF, {}), (0, r.jsx)(uM, {})],
                    }),
                    (0, r.jsx)(uW, {
                        title: "Assets",
                        expanded: l.has("assets"),
                        onToggle: () => s("assets"),
                        children: (0, r.jsx)(uD, {}),
                    }),
                ],
            }),
        });
    },
    uH = [
        { id: "unset", label: "Unset", value: ca.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
        { id: "all", label: "All", value: ca.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
        { id: "usersWithGame", label: "Users With Game", value: ca.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
        { id: "none", label: "None", value: ca.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
    ];
function uK() {
    let e = o.useRef(null),
        t = cs.TA.useSetting();
    return (0, r.jsx)("div", {
        ref: e,
        className: k()(tT.nd, aN.n),
        children: (0, r.jsxs)("div", {
            className: aN.k,
            children: [
                (0, r.jsx)(w.D, { variant: "heading-lg/normal", children: "Settings" }),
                (0, r.jsx)(x.l, {
                    label: "Receive DMs In Game",
                    options: uH,
                    value: t,
                    onSelectionChange: cs.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var uY = a(278416),
    uq = a(220631);
function uJ(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function uQ(e) {
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
        (0, r.jsx)(d.Ip, { className: uq.Dx, children: (0, r.jsx)(aO.A, { data: l }) })
    );
}
function uX(e) {
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
                for (let e of l.preDispatches ?? []) tA.h.dispatch(e);
                tA.h.dispatch({ ...l.buildPayload(e), type: l.actionType }), i();
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
        className: k()(uq.Dx, uq.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: uq.Vz,
                value: a,
                onChange: (e) => l(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != n && (0, r.jsx)("div", { className: uq.Xf, role: "alert", children: n }),
            (0, r.jsxs)("div", {
                className: uq.KA,
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
let uZ = [
    {
        key: "name",
        cellClassName: uq.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function u0(e) {
    let { store: t, initialHeight: a } = e,
        l = o.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: aU.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVars
                                ? (0, r.jsxs)("div", {
                                      className: uq.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(uQ, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: aU.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(uQ, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: aU.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVarsEditConfig
                                ? (0, r.jsxs)("div", {
                                      className: uq.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(uX, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: n, renderSelectedTab: s } = (0, aU.Ay)({ tabs: l }, []);
    return (0, r.jsxs)(aP, {
        className: uq.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(n, {}),
            (0, r.jsxs)(aR.Ay, {
                className: k()(tT.jr, uq.nZ),
                children: [
                    (0, r.jsx)(aR.Ay.Icon, { icon: uY.g, tooltip: t.getName() }),
                    (0, r.jsx)(aR.Ay.Title, { children: t.getName() }),
                ],
            }),
            s({ store: t }),
        ],
    });
}
function u1() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        l = M.il.getAll(),
        n = o
            .useMemo(() => l.map((e) => ({ key: e._dispatchToken, store: e })).sort(uJ), [l])
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
        className: k()(tT.nd, uq.nd),
        children: [
            (0, r.jsx)("div", {
                className: uq.KE,
                children: (0, r.jsx)(li.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(tR, { columns: uZ, data: n, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != d &&
                (0, r.jsx)(u0, { store: d, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, s),
        ],
    });
}
var u2 = a(91871),
    u8 = a.n(u2);
let u6 = [
        {
            key: "id",
            cellClassName: lS.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: lS.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: lS.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    u3 = [
        {
            id: "details",
            name: "Details",
            group: aU.fu.NONE,
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
                    d = le()(s);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(aR.Ay, {
                            className: k()(tT.jr, lS.nZ),
                            children: [
                                (0, r.jsx)(aR.Ay.Icon, { icon: ll.U, tooltip: t }),
                                (0, r.jsx)(aR.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(lE, {
                            className: lS.ZK,
                            children: [
                                (0, r.jsx)(l_, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: s.toISOString(),
                                        title: (0, lu.i$)(d, "LLLL"),
                                        children: (0, lu.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, r.jsx)(l_, {
                                        name: "Guild ID",
                                        children: (0, r.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, r.jsx)(l_, {
                                    name: "Bucket",
                                    children: (0, r.jsx)("code", { children: a.bucket }),
                                }),
                                (0, r.jsx)(l_, {
                                    name: "Revision",
                                    children: (0, r.jsx)("code", { children: a.revision }),
                                }),
                                (0, r.jsx)(l_, { name: "Override", children: (0, r.jsx)(lC, { value: a.override }) }),
                                (0, r.jsx)(l_, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                                (0, r.jsx)(l_, { name: "Excluded", children: (0, r.jsx)(lC, { value: n }) }),
                                (0, r.jsx)(l_, { name: "Previously tracked", children: (0, r.jsx)(lC, { value: o }) }),
                                (0, r.jsx)(l_, { name: "Location", children: (0, r.jsx)("code", { children: i }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function u5() {
    let [e, t] = o.useState(""),
        a = o.useRef(null),
        l = (0, M.yK)([lf], () => lf.loggedTriggers),
        n = o.useMemo(
            () =>
                l
                    .filter((t) => 0 === e.length || u8()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [l, e],
        ),
        [s, i] = o.useState(void 0),
        d = n.find((e) => e.key === s),
        { TabBar: c, renderSelectedTab: u } = (0, aU.Ay)({ tabs: u3 }, []),
        m = (0, M.bG)([lf], () => lf.trackTriggers),
        h = o.useCallback((e) => {
            tA.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        x = m ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: k()(tT.nd, lS.nd),
        children: [
            (0, r.jsxs)("div", {
                className: lS.rh,
                children: [
                    (0, r.jsx)(nB.m, {
                        text: x,
                        children: (0, r.jsx)(eI.K, {
                            size: "sm",
                            variant: m ? "active" : "primary",
                            icon: m ? nW.E : nV.u,
                            "aria-label": x,
                            onClick: () => h(!m),
                        }),
                    }),
                    (0, r.jsx)(li.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, r.jsx)(eI.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": aQ.intl.string(aQ.t.VkKicb),
                        icon: ls.u,
                        onClick: L.eY,
                    }),
                ],
            }),
            (0, r.jsx)(tR, { columns: u6, data: n, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != d &&
                (0, r.jsxs)(aP, {
                    className: lS.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(c, {}), u({ loggedTrigger: d })],
                }),
        ],
    });
}
var u4 = a(512950),
    u9 = a(324861),
    u7 = a(243655);
let me = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, u9.A)();
    return (0, r.jsx)("div", {
        className: u7.k,
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
                (0, r.jsx)(u4.p, {
                    messageType: u4.Y.INFO,
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these",
                }),
            ],
        }),
    });
};
var mt = a(899e3),
    ma = a(761853),
    ml = a(731854);
let mn = [
        ["codecH264", "H264"],
        ["codecH265", "H265 / HEVC"],
        ["codecAv1", "AV1"],
    ],
    ms = [
        ["encNvidiaDx11", "NVIDIA Direct3D 11"],
        ["encNvidiaCuda", "NVIDIA CUDA"],
        ["encAmdDx11", "AMD Direct3D 11"],
        ["encIntelDx11", "Intel Direct3D 11"],
        ["encIntelCpu", "Intel CPU"],
        ["encWmfCpu", "Media Foundation CPU"],
        ["encWmfGpu", "Media Foundation GPU"],
        ["encWmfDx11", "Media Foundation Direct3D 11 (NYI)"],
    ],
    mi = [
        ["capGraphicsCapture", "WGC / Windows Graphics Capture"],
        ["capDxgi", "DDA / DXGI Output Duplication"],
        ["capGdi", "GDI / PrintWindow + BitBlt"],
        ["capVideoHook", "Video Hook"],
    ],
    mr = [
        ["bypassHybridGpuFpsRestriction", "WGC: Bypass Hybrid-GPU 60 FPS Restriction"],
        ["gdiForceBitblt", "GDI: Force Allow BitBlt"],
        ["allowHdr", "Allow HDR Capture"],
    ];
function mo(e) {
    let { title: t, toggles: a, state: l } = e;
    return (0, r.jsxs)(R.B, {
        gap: 8,
        children: [
            (0, r.jsx)(D.E, { variant: "text-lg/bold", children: t }),
            a.map((e) => {
                let [t, a] = e;
                return (0, r.jsx)(r$.S, { label: a, checked: !!l[t], onChange: () => (0, mt.yn)({ [t]: !l[t] }) }, t);
            }),
        ],
    });
}
function md() {
    let e = (0, M.bG)([mt.Ay], () => mt.Ay.getSnapshot()),
        t = (0, M.bG)([ma.Ay], () => ma.Ay.supports(ml.O5.VIDEO));
    return (0, r.jsxs)(d.Ip, {
        className: tT.nd,
        children: [
            (0, r.jsx)(g.c, { gap: 16 }),
            (0, r.jsx)(mo, { title: "Video Codecs (Sender)", toggles: mn, state: e }),
            t
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(g.c, { gap: 16 }),
                          (0, r.jsx)(mo, { title: "Video Encoders", toggles: ms, state: e }),
                          (0, r.jsx)(g.c, { gap: 16 }),
                          (0, r.jsx)(mo, { title: "Capture Sources", toggles: mi, state: e }),
                          (0, r.jsx)(g.c, { gap: 16 }),
                          (0, r.jsx)(mo, { title: "Capture Options", toggles: mr, state: e }),
                      ],
                  })
                : null,
            (0, r.jsx)(g.c, { gap: 16 }),
            (0, r.jsx)(mo, {
                title: "Preview",
                toggles: [["alwaysShowCapturePreview", "Always Show (ignore main window focus)"]],
                state: e,
            }),
            (0, r.jsx)(g.c, { gap: 16 }),
        ],
    });
}
var mc = a(77729),
    mu = a(36934);
function mm() {
    let [e, t] = o.useState(""),
        [a, l] = o.useState(""),
        [n, s] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        i = "processing" === n.status;
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)("div", {
            className: mu.l7,
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
                                let e = await mc.A.fileManager.showOpenDialog({ properties: ["openDirectory"] });
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
                        (0, r.jsx)(p.k, { fullWidth: !0, value: a, onChange: l, placeholder: "Output directory" }),
                        (0, r.jsx)(h.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await mc.A.fileManager.showOpenDialog({
                                    properties: ["openDirectory", "createDirectory"],
                                });
                                e.length > 0 && l(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(h.$, {
                    variant: i ? "critical-primary" : "primary",
                    text: i ? "Cancel" : "Start Processing",
                    onClick: i
                        ? function () {
                              ma.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  s((e) => ({ ...e, status: "cancelled" }));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (s({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  ma.Ay.getMediaEngine().processBatchAudioFiles(
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
                    (0, r.jsxs)(R.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(D.E, {
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
                                            className: mu.TZ,
                                            children: (0, r.jsxs)(D.E, {
                                                variant: "text-xs/normal",
                                                className: e.success ? mu.$D : mu.uL,
                                                children: [e.success ? "OK" : "FAIL", " - ", e.filename],
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                            n.log.length > 20 &&
                                (0, r.jsxs)(D.E, {
                                    variant: "text-xs/normal",
                                    children: ["...and ", n.log.length - 20, " more"],
                                }),
                        ],
                    }),
            ],
        }),
    });
}
var mh = a(207898),
    mx = a.n(mh),
    mp = a(32880),
    mg = a(827343),
    mv = a(964486),
    mj = a(602674),
    mb = a(625841),
    mf = a(74848),
    my = a(573908);
function mE(e) {
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
function m_(e) {
    let { recording: t, playing: a, onPlay: l, onStop: n } = e;
    return (0, r.jsx)(cf.N, {
        collapsibleContent: (0, r.jsx)(mE, { recording: t }),
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
                            e.stopPropagation(), a ? n() : l(t);
                        },
                        children: a ? (0, r.jsx)(nW.E, { size: "xxs" }) : (0, r.jsx)(nV.u, { size: "xxs" }),
                    }),
                    (0, r.jsx)(I.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, l, n;
                            e.stopPropagation(),
                                (a = new Blob([mx()(t.audioBuffer)], { type: "audio/wav" })),
                                (l = URL.createObjectURL(a)),
                                ((n = document.createElement("a")).href = l),
                                (n.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                n.click(),
                                URL.revokeObjectURL(l);
                        },
                        children: (0, r.jsx)(mp.s, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function mC() {
    let { name: e } = (0, mf.x5)(ml.oh.AUDIO_INPUT),
        [t, a] = o.useState(!1),
        [l, n] = o.useState([]),
        s = (0, M.bG)([ma.Ay], () => ma.Ay.getKrispSuppressionLevel()),
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
            vadUseKrisp: E,
            vadKrispActivationThreshold: _,
            noiseCancellation: C,
            noiseSuppression: S,
            noiseSuppressionSupported: N,
            noiseCancellationSupported: A,
            noiseCancellationEnableStats: k,
            vadDuringPreProcess: I,
        } = (0, M.cf)([ma.Ay], () => ({
            krispModels: ma.Ay.getKrispModels(),
            krispModelOverride: ma.Ay.getKrispModelOverride(),
            echoCancellation: ma.Ay.getEchoCancellation(),
            autoThreshold: ma.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: ma.Ay.getModeOptions().vadUseKrisp,
            inputMode: ma.Ay.getMode(),
            vadKrispActivationThreshold: ma.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: ma.Ay.getNoiseCancellation(),
            noiseSuppression: ma.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: ma.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: ma.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: ma.Ay.getKrispEnableStats(),
            vadDuringPreProcess: ma.Ay.getModeOptions().vadDuringPreProcess,
        })),
        T = C ? "KRISP" : S ? "STANDARD" : "NONE",
        O = (0, mj.v)(),
        w = o.useCallback(() => {
            u.current?.stop(), (u.current = null), c(null);
        }, []);
    function L() {
        ma.Ay.getMediaEngine().stopRecordingRawSamples();
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
        (0, mv.l0)(() => {
            mg.A.setMode(ma.Ay.getMode(), { vadDuringPreProcess: null, vadKrispActivationThreshold: void 0 });
        });
    let U = [];
    return (
        A && U.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        N && U.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        U.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(d.Ip, {
            className: tT.nd,
            children: (0, r.jsxs)("div", {
                className: my.l,
                children: [
                    (0, r.jsx)(D.E, { variant: "text-lg/bold", children: "Krisp Tester" }),
                    (0, r.jsx)(mb.U, {
                        label: "Input Device",
                        deviceType: ml.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, r.jsx)(x.l, {
                        label: "Noise Cancellation",
                        value: T,
                        onSelectionChange: (e) => {
                            mg.A.setNoiseCancellation("KRISP" === e), mg.A.setNoiseSuppression("STANDARD" === e);
                        },
                        options: U,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === T &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(cX.A, {
                                    label: "Krisp Suppression Level",
                                    initialValue: s,
                                    onValueChange: mg.A.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, r.jsx)(x.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: j,
                                    options: g.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        mg.A.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(v.d, {
                                    label: "Enable Stats",
                                    checked: k,
                                    onChange: (e) => mg.A.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    b === ml.TB.VOICE_ACTIVITY &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(v.d, {
                                    label: "Auto Threshold",
                                    checked: y,
                                    onChange: (e) => mg.A.setMode(ml.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                y &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(v.d, {
                                                label: "Use Krisp VAD",
                                                checked: E,
                                                onChange: (e) => mg.A.setMode(ml.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            E &&
                                                (0, r.jsx)(cX.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: _,
                                                    onValueChange: (e) =>
                                                        mg.A.setMode(ml.TB.VOICE_ACTIVITY, {
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
                                    onChange: (e) => mg.A.setMode(ml.TB.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(v.d, {
                        label: "Echo Cancellation",
                        checked: f,
                        onChange: (e) => mg.A.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)(R.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(lt.$n, {
                                color: t ? lt.$n.Colors.RED : lt.$n.Colors.BRAND,
                                onClick: t
                                    ? L
                                    : function () {
                                          w(),
                                              a(!0),
                                              mg.A.setLoopback("krisp_test", !0),
                                              ma.Ay.getMediaEngine().startRecordingRawSamples((t, l, i) => {
                                                  a(!1), mg.A.setLoopback("krisp_test", !1);
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
                    (0, r.jsx)(cX.A, {
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
                            l.map((e, t) =>
                                (0, r.jsx)(m_, { recording: e, playing: e === i, onPlay: P, onStop: w }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var mS = a(874003),
    mN = a(329139);
function mA() {
    return ma.Ay.getMediaEngine().supports(ml.O5.SPATIAL_AUDIO)
        ? (0, r.jsx)(d.Ip, { className: tT.nd, children: (0, r.jsx)(mS.A, {}) })
        : (0, r.jsx)(d.Ip, {
              className: tT.nd,
              children: (0, r.jsxs)("div", {
                  style: { padding: 16 },
                  children: [
                      (0, r.jsx)(w.D, {
                          variant: "heading-lg/semibold",
                          style: { marginBottom: 16 },
                          children: aQ.intl.string(mN.default.EWQJcc),
                      }),
                      (0, r.jsx)(D.E, { variant: "text-md/normal", children: aQ.intl.string(mN.default["9qCMXb"]) }),
                  ],
              }),
          });
}
var mk = a(803306),
    mI = a(243217),
    mD = a(189213),
    mT = a(935208),
    mR = a(878784);
let mO = [
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
function mw() {
    let [e, t] = o.useState(!1),
        a = (0, M.bG)([H.default], () => H.default.getCurrentUser()),
        l = (0, mR.Lh)(),
        n = (0, M.bG)([rW.A], () => rW.A.getPremiumTypeSubscription()),
        s = null != l ? (ss.VD[l]?.tenureReqNumMonths ?? 0) : 0,
        i = o.useCallback(
            async (e) => {
                let l = new Date();
                e > 0 ? l.setMonth(l.getMonth() - e) : l.setDate(l.getDate() - 7), l.setDate(l.getDate() - 2);
                let s = {
                    subscription_status: J.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: mT.default.fromTimestamp(l.getTime()),
                };
                t(!0),
                    await lz.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: s, rejectWithError: !1 }),
                    await (0, mk.eO)(a.id),
                    await (0, dc.hP)(),
                    t(!1);
            },
            [n, a],
        );
    if (null != a && null != n)
        return (0, r.jsx)(x.l, {
            label: "Tenure",
            hideLabel: !0,
            selectionMode: "single",
            disabled: e,
            value: s,
            options: mO,
            onSelectionChange: i,
        });
}
var mM =
        (((n = {})[(n.DEFAULT = 0)] = "DEFAULT"),
        (n[(n.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (n[(n.FAILURE = 2)] = "FAILURE"),
        (n[(n.NONE = 3)] = "NONE"),
        n),
    mL =
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
async function mP(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: l, paymentType: n, sendReminderEmail: s } = a;
    return (
        await lz.Bo.post({
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
var mU = a(601107);
let mG = {
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
    mF = {
        [mU.qf.UNKNOWN]: "Unknown",
        [mU.qf.ADMIN]: "Admin",
        [mU.qf.USER]: "User",
        [mU.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [mU.qf.DEFERRED_START]: "Deferred Start",
        [mU.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    mB = [
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
function m$(e) {
    let { subscription: t, onClose: a, onUpdated: l, transitionState: n } = e,
        [s, i] = o.useState(le()()),
        [d, c] = o.useState(le()().format("HH:mm")),
        [m, h] = o.useState(!1),
        [x, p] = o.useState(void 0),
        g = async () => {
            if (null == s) return void p("Please select a target date");
            let [e, n] = d.split(":").map(Number),
                i = s.clone().hours(e).minutes(n).seconds(0).milliseconds(0);
            h(!0), p(void 0);
            try {
                await mP(t.id, mL.TIME_TRAVEL, { targetDate: i, paymentType: mM.DEFAULT, sendReminderEmail: !1 }),
                    l(),
                    a();
            } catch (e) {
                p(e.body?.message || e.message || "Failed to time travel");
            } finally {
                h(!1);
            }
        };
    return (0, r.jsx)(mD.Modal, {
        transitionState: n,
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
                (0, r.jsx)(ia.J, { label: "Target Date", value: s, onSelect: i }),
                (0, r.jsx)(u.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, r.jsx)("input", {
                        type: "time",
                        value: d,
                        onChange: (e) => {
                            c(e.target.value);
                        },
                        className: oa.Qn,
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
                                    className: oa.JX,
                                    children: ["Start: ", le()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(D.E, {
                                    variant: "text-xs/normal",
                                    className: oa.JX,
                                    children: ["End: ", le()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
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
function mV(e) {
    var t;
    let a,
        { subscription: l, onUpdated: n } = e,
        [s, i] = o.useState(!1),
        [d, c] = o.useState(!1),
        [m, p] = o.useState(!1),
        [g, v] = o.useState(!1),
        [j, b] = o.useState(null),
        f = (e) => {
            let t = new Date(e);
            return mT.default.fromTimestamp(t.getTime());
        },
        y = async (e) => {
            let { status: t = l.status, premiumStreakStart: a, endedAt: s } = e,
                i = {
                    subscription_status: t,
                    ...(null != a ? { premium_streak_started_at: f(a) } : null),
                    ...(null != s ? { ended_at: f(s) } : null),
                };
            await lz.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: i, rejectWithError: !1 }), n();
        },
        E = async () => {
            try {
                await mP(l.id, mL.RENEW, {
                    targetDate: le()(new Date()),
                    paymentType: mM.DEFAULT,
                    sendReminderEmail: !1,
                });
            } catch (e) {
                b(e.body?.message || e.message || "Failed to renew subscription");
            }
            n();
        },
        _ = ss.hd[l.planIdFromItems]?.premiumType === ss.PremiumTypes.TIER_0,
        C = l.metadata?.ended_at,
        S = null != C ? new Date(C).toISOString().substring(0, 10) : "",
        N = [
            { id: "id", label: `ID: ${l.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = l.status), t in mG) ? mG[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        A = l.hasActiveTrial,
        O = l.metadata?.active_discount_id != null;
    return (
        A && N.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        O && N.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        l.status !== J.Dmq.ACTIVE &&
            N.push({
                id: "dates",
                label: `Dates: ${(0, lu.i$)(l.createdAt, "LL")} - ${(0, lu.i$)(l.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        l.status === J.Dmq.PAUSED &&
            N.push({
                id: "pause-reason",
                label: `Pause Reason: ${l.pauseReason in mF ? mF[l.pauseReason] : `Unknown pause reason ${l.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: k()(sm.Nr, _ ? sm.Qf : sm.C1),
            children: (0, r.jsxs)(u.n, {
                label: `Type: ${null == ((a = l.planIdFromItems)) ? "No plan id" : a in ss.hd ? ss.hd[a].name : `Unknown plan id ${a}`}`,
                className: oa.lI,
                children: [
                    (0, r.jsx)(oe.C, {
                        items: N,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    A &&
                        (0, r.jsxs)("div", {
                            className: oa.VK,
                            children: [
                                (0, r.jsxs)(I.D, {
                                    onClick: () => {
                                        p(!m);
                                    },
                                    className: oa.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(D.E, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, r.jsx)(sl.A, { direction: m ? sl.A.Directions.UP : sl.A.Directions.DOWN }),
                                    ],
                                }),
                                m &&
                                    (0, r.jsxs)("ul", {
                                        className: oa.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(D.E, { variant: "text-md/bold", children: "trial_id" }),
                                                    (0, r.jsx)(D.E, { variant: "text-sm/normal", children: l.trialId }),
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
                                                            null != l.trialEndsAt
                                                                ? (0, lu.i$)(l.trialEndsAt, "LL")
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
                            className: oa.VK,
                            children: [
                                (0, r.jsxs)(I.D, {
                                    onClick: () => {
                                        v(!g);
                                    },
                                    className: oa.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(D.E, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, r.jsx)(sl.A, { direction: g ? sl.A.Directions.UP : sl.A.Directions.DOWN }),
                                    ],
                                }),
                                g &&
                                    (0, r.jsxs)("ul", {
                                        className: oa.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-sm/normal",
                                                        children: l.metadata?.active_discount_id,
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
                                                            l.metadata?.active_discount_expires_at != null
                                                                ? (0, lu.i$)(
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
                            className: oa.VK,
                            children: [
                                (0, r.jsxs)(I.D, {
                                    onClick: () => {
                                        i(!s);
                                    },
                                    className: oa.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(D.E, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, r.jsx)(sl.A, { direction: s ? sl.A.Directions.UP : sl.A.Directions.DOWN }),
                                    ],
                                }),
                                s &&
                                    (0, r.jsx)("ul", {
                                        className: oa.j3,
                                        children: Object.entries(l.metadata).map((e) => {
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
                        className: oa.VK,
                        children: [
                            (0, r.jsxs)(I.D, {
                                onClick: () => {
                                    c(!d);
                                },
                                className: oa.Eh,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(D.E, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, r.jsx)(sl.A, { direction: d ? sl.A.Directions.UP : sl.A.Directions.DOWN }),
                                ],
                            }),
                            d &&
                                (0, r.jsxs)(R.B, {
                                    gap: 24,
                                    children: [
                                        (0, r.jsx)(x.l, {
                                            label: "Status",
                                            value: l.status,
                                            options: mB,
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
                                                            onClick: (e) => E(),
                                                        }),
                                                        (0, r.jsx)(h.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, eR.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, r.jsx)(m$, {
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
                                                null !== j &&
                                                    (0, r.jsx)("div", {
                                                        className: oa.z3,
                                                        children: (0, r.jsx)(T.w, { type: "critical", children: j }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)(R.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(ia.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: le()(l.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => y({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(mw, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(ia.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== S ? le()(S) : void 0,
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
let mW = async () =>
        (
            await lz.Bo.get({
                url: J.Rsh.BILLING_SUBSCRIPTIONS,
                query: { include_inactive: !0, limit: 5 },
                rejectWithError: !1,
            })
        ).body.map((e) => mI.A.createFromServer(e)),
    mz = [
        { id: "nitro-monthly", label: "Nitro Monthly", value: ss.gD.PREMIUM_MONTH_TIER_2 },
        { id: "nitro-yearly", label: "Nitro Yearly", value: ss.gD.PREMIUM_YEAR_TIER_2 },
        { id: "nitro-classic-monthly", label: "Nitro Classic Monthly", value: ss.gD.PREMIUM_MONTH_TIER_1 },
        { id: "nitro-classic-yearly", label: "Nitro Classic Yearly", value: ss.gD.PREMIUM_YEAR_TIER_1 },
        { id: "basic-monthly", label: "Basic Monthly", value: ss.gD.PREMIUM_MONTH_TIER_0 },
        { id: "basic-yearly", label: "Basic Yearly", value: ss.gD.PREMIUM_YEAR_TIER_0 },
        { id: "reverse-trial-1week", label: "Reverse Trial 1-week", value: ss.gd },
        { id: "reverse-trial-2week", label: "Reverse Trial 2-week", value: ss.Uk },
        { id: "nitro-squad-monthly", label: "Nitro Squad Monthly", value: ss.gD.PREMIUM_GROUP_MONTH },
    ];
function mH() {
    let e = (0, M.bG)([rW.A], () => rW.A.getPremiumTypeSubscription()),
        t = (0, M.bG)([H.default], () => H.default.getCurrentUser()),
        [a, l] = o.useState("511651880837840896"),
        [n, s] = o.useState([]),
        [i, c] = o.useState(!1),
        u = o.useCallback(async () => {
            try {
                c(!0), await (0, dc.hP)(), await (0, mk.eO)(t.id), s(await mW());
            } finally {
                c(!1);
            }
        }, [t]);
    o.useEffect(() => {
        u();
    }, [u]);
    let m = o.useMemo(() => n.filter((e) => e.status !== J.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [n]),
        p = async () => {
            await lz.Bo.post({ url: "/debug/subscription", body: { plan_id: a }, rejectWithError: !1 }), await u();
        },
        g = async () => {
            await lz.Bo.del({ url: "/debug/subscription", rejectWithError: !1 }), await u();
        };
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)("div", {
            className: sm.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: sm.dL,
                    children: [
                        (0, r.jsx)(w.D, {
                            variant: "heading-lg/semibold",
                            className: tT.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, r.jsx)(eI.K, {
                            "aria-label": "Refresh",
                            icon: sa.f,
                            size: "sm",
                            variant: "icon-only",
                            disabled: i,
                            onClick: u,
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: k()([sm.uW, sm.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(x.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: mz,
                                    onSelectionChange: l,
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
                null != e && (0, r.jsx)(mV, { subscription: e, onUpdated: u }),
                (0, r.jsx)(w.D, { variant: "heading-lg/semibold", className: tT.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: k()([sm.uW, sm.Uo]),
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
                            m.map((e) => (0, r.jsx)(mV, { subscription: e, onUpdated: u }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var mK = a(284009),
    mY = a.n(mK),
    mq = a(889137),
    mJ = a(412703),
    mQ = a(440703),
    mX = a(267548),
    mZ = a(668824),
    m0 = a(695366),
    m1 = a(359778),
    m2 = a(507107),
    m8 = a(801365),
    m6 = a(792620),
    m3 = a(241124),
    m5 = a(743407),
    m4 = a(717695),
    m9 = a(961974),
    m7 = a(127219),
    he = a(262514),
    ht = a(19809),
    ha = a(317097),
    hl = a(452027),
    hn = a(922016),
    hs = a(714385),
    hi = a(359923);
let hr = function (e) {
    let { colorKey: t, value: a, onChange: l, title: n } = e,
        s = o.useRef(null);
    return (0, r.jsx)(hl.D, {
        label: n,
        children: (0, r.jsx)(hn.Y, {
            targetElementRef: s,
            renderPopout: (e) => (0, r.jsx)(cy.VN, { ...e, value: a, onChange: (e) => l(t, (0, ha.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(I.D, {
                    ...e,
                    innerRef: s,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: hi.O6,
                    style: { backgroundColor: a },
                    children: (0, r.jsx)(hs.d, { size: "xs", color: "currentColor", className: hi.WY }),
                }),
        }),
    });
};
var ho = a(247928);
let hd = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: l = !1 } = e;
    return (0, r.jsx)(ho.M, {
        children: (0, r.jsx)(m1.Z, {
            className: k()(hi.Rx, { [hi.aK]: l }),
            outline: l,
            children: (0, r.jsx)("div", {
                className: hi.AZ,
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
var hc = a(643374);
let hu = function (e) {
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
            (0, r.jsx)(hl.D, {
                label: s,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, r.jsx)(hc.A, {
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
    hm = function (e) {
        let { assetKey: t, initialValue: a, onMessageChange: l, title: n } = e,
            [s, i] = o.useState("");
        return (
            o.useEffect(() => {
                i(a ?? "");
            }, [a]),
            (0, r.jsx)(p.k, {
                label: n,
                value: s,
                onChange: function (e) {
                    i(e), l(t, e);
                },
            })
        );
    };
var hh = a(31587);
let hx = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: l } = (0, hh.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
        n = [
            { id: "none", label: "NONE", value: null },
            ...l.map((e) => ({ id: e.id, label: e.config.messages.questName, value: e })),
        ];
    return (0, r.jsx)(x.l, {
        label: "Prefill with Quest",
        options: n,
        value: a,
        onSelectionChange: t,
        selectionMode: "single",
        fullWidth: !0,
    });
};
var hp = a(843282),
    hg = a(972886);
let hv = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    hj = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: l } = e;
        return (0, r.jsxs)(R.B, {
            gap: 20,
            children: [
                (0, r.jsx)(hp.Pw, {
                    label: "Task Type(s)",
                    className: hg.Z,
                    placeholder: "Select Task Preset",
                    options: hv,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, n, s, i, r;
                        return (
                            e ===
                            ((t = l.tasks),
                            (a = mJ.n.PLAY_ON_PLAYSTATION in t || mJ.n.PLAY_ON_XBOX in t),
                            (n = mJ.n.PLAY_ON_DESKTOP in t),
                            (s = mJ.n.STREAM_ON_DESKTOP in t),
                            (i = mJ.n.WATCH_VIDEO in t),
                            (r = mJ.n.PLAY_ACTIVITY in t),
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
                                        a[mJ.n.STREAM_ON_DESKTOP] = { type: mJ.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[mJ.n.PLAY_ON_DESKTOP] = { type: mJ.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        (a[mJ.n.PLAY_ON_PLAYSTATION] = {
                                            type: mJ.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[mJ.n.PLAY_ON_XBOX] = {
                                                type: mJ.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 4:
                                        (a[mJ.n.PLAY_ON_DESKTOP] = { type: mJ.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[mJ.n.PLAY_ON_PLAYSTATION] = {
                                                type: mJ.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[mJ.n.PLAY_ON_XBOX] = {
                                                type: mJ.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 2:
                                        a[mJ.n.WATCH_VIDEO] = {
                                            type: mJ.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[mJ.n.PLAY_ACTIVITY] = { type: mJ.n.PLAY_ACTIVITY, target: t };
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
                    value: String(a / lK.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= lK.A.Seconds.MINUTE;
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
var hb = a(818348);
let hf = function () {
    let e = (0, ee.Ay)();
    return (0, r.jsx)(hl.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(et.zy, {
                    theme: hb.NJ.LIGHT,
                    isSelected: e === hb.NJ.LIGHT,
                    onSelect: () => (0, cr.u_)({ theme: hb.NJ.LIGHT }),
                }),
                (0, r.jsx)(et.zy, {
                    theme: hb.NJ.DARK,
                    isSelected: e === hb.NJ.DARK,
                    onSelect: () => (0, cr.u_)({ theme: hb.NJ.DARK }),
                }),
            ],
        }),
    });
};
var hy =
    (((i = {})[(i.UNENROLLED = 0)] = "UNENROLLED"),
    (i[(i.ENROLLED = 1)] = "ENROLLED"),
    (i[(i.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (i[(i.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (i[(i.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (i[(i.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (i[(i.CLAIMED = 6)] = "CLAIMED"),
    i);
let hE = function (e) {
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
var h_ = a(617986);
let hC = ["png", "gif", "webp"],
    hS = [...hC, "jpg", "jpeg"],
    hN = Array.from(new Set([...hS, "gif", "mp4", "webm"]));
function hA() {
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
let hk = "1193992107035983872",
    hI = {
        id: hk,
        preview: !0,
        config: {
            id: hk,
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
                        type: mQ.l.REWARD_CODE,
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
                joinOperator: mZ.K.AND,
                tasks: { [mJ.n.PLAY_ON_DESKTOP]: { type: mJ.n.PLAY_ON_DESKTOP, target: 300 } },
            },
            features: [],
            sharePolicy: mX.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function hD() {
    var e;
    let [t, l] = o.useState(hI),
        n = o.useCallback((e) => {
            l({ ...e, preview: !0 });
        }, []),
        [s, i] = o.useState(hy.UNENROLLED),
        [c, u] = o.useState(!1),
        [m, x] = o.useState(!1),
        [p, g] = o.useState(null),
        j =
            ((e = t.config),
            (0, mq.YW)(e)
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
            var l, s;
            n({
                ...t,
                config:
                    ((l = t.config),
                    (s = { [e]: a }),
                    (0, mq.YW)(l)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function f(e, a) {
        let l = t.config.taskConfigV2.tasks,
            s = l[mJ.n.WATCH_VIDEO];
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
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...l, [mJ.n.WATCH_VIDEO]: { ...s, assets: i } } },
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
                    (0, mq.YW)(l)
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
                    (0, mq.YW)(s)
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
    function _(e, a) {
        n({ ...t, config: { ...t.config, colors: { ...t.config.colors, [e]: a } } });
    }
    function C() {
        (0, m8.tU)(t.config) && (0, h_.hJ)(t, m2.uF.GIFT_INVENTORY_FOR_YOU, m2.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let S = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * lK.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        N = o.useMemo(() => mJ.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    mY()(!1 !== t.preview && null != t.preview, "Preview config must have property preview: true");
    let A = t.config.taskConfigV2.tasks[mJ.n.WATCH_VIDEO];
    return (0, r.jsxs)(d.Ip, {
        className: hi.kL,
        children: [
            (0, r.jsx)(w.D, { variant: "heading-lg/bold", className: hi.R_, children: "Quest Preview Tool" }),
            (0, r.jsx)("div", {
                className: hi.OA,
                children: (0, r.jsx)(hx, {
                    onSelect: function (e) {
                        g(e),
                            null == e ||
                                (i(
                                    (function (e) {
                                        if (null == e.userStatus) return hy.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return hy.CLAIMED;
                                        if (null != e.userStatus.completedAt) return hy.COMPLETED_100;
                                        let t = (0, m6.Yh)(e),
                                            a = t.progressSeconds,
                                            l = t.targetSeconds;
                                        return a / l >= 1
                                            ? hy.COMPLETED_100
                                            : a / l >= 0.75
                                              ? hy.COMPLETED_75
                                              : a / l >= 0.5
                                                ? hy.COMPLETED_50
                                                : a / l >= 0.25
                                                  ? hy.COMPLETED_25
                                                  : hy.ENROLLED;
                                    })(e),
                                ),
                                n(e));
                    },
                    quest: p,
                }),
            }),
            (0, r.jsx)(w.D, { variant: "heading-md/semibold", className: hi.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: hi.OA,
                children: (0, r.jsx)(hj, {
                    taskDuration: S,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        n({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)(w.D, { variant: "heading-md/semibold", className: hi.fV, children: "Messages" }),
            (0, r.jsxs)("div", {
                className: hi.OA,
                children: [
                    (0, r.jsx)(hm, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: y,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, r.jsx)(hm, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: y,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(hm, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: y,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    N &&
                        (0, r.jsx)(hm, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let l = t.config.taskConfigV2.tasks,
                                    s = l[mJ.n.WATCH_VIDEO];
                                if (null == s) return;
                                let i = { ...s.messages, [e]: a };
                                n({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...l, [mJ.n.WATCH_VIDEO]: { ...s, messages: i } },
                                        },
                                    },
                                });
                            },
                            initialValue: A?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)(w.D, { variant: "heading-md/semibold", className: hi.fV, children: "Assets" }),
            (0, r.jsxs)("div", {
                className: hi.OA,
                children: [
                    (0, r.jsx)(hu, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: b,
                        filters: hN,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, r.jsx)(hu, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: b,
                        filters: hN,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, r.jsx)(hu, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: b,
                        filters: hN,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(hu, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: b,
                        filters: hN,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, r.jsx)(hu, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: b,
                        filters: [...hS, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, r.jsx)(hu, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: b,
                        filters: [...hC, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    N &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(hu, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: f,
                                    filters: hN,
                                    initialValue: A?.assets.video.url,
                                }),
                                (0, r.jsx)(hu, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: f,
                                    filters: hN,
                                    initialValue: A?.assets.videoLowRes?.url,
                                }),
                                (0, r.jsx)(hu, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: f,
                                    filters: hS,
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
                                className: hi.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: hi.OA,
                                children: [
                                    (0, r.jsx)(hm, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => E(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(hm, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => E(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== mQ.l.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(hu, {
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
                                                                (0, mq.YW)(s)
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
                                            filters: hN,
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
                                                onClick: C,
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
            (0, r.jsx)(w.D, { variant: "heading-md/semibold", className: hi.fV, children: "Colors & Quest States" }),
            (0, r.jsxs)("div", {
                className: hi.OA,
                children: [
                    (0, r.jsxs)("div", {
                        className: hi.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(hr, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: _,
                                value: t.config.colors.primary,
                            }),
                            (0, r.jsx)(hr, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: _,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: hi.OA, children: (0, r.jsx)(hf, {}) }),
                    (0, r.jsx)(hE, {
                        onChange: function (e) {
                            switch ((i(e), e)) {
                                case hy.UNENROLLED:
                                    n({ ...t, userStatus: null });
                                    break;
                                case hy.ENROLLED:
                                    n({ ...t, userStatus: hA({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case hy.COMPLETED_25:
                                    n({
                                        ...t,
                                        userStatus: hA({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * S,
                                        }),
                                    });
                                    break;
                                case hy.COMPLETED_50:
                                    n({
                                        ...t,
                                        userStatus: hA({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * S,
                                        }),
                                    });
                                    break;
                                case hy.COMPLETED_75:
                                    n({
                                        ...t,
                                        userStatus: hA({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * S,
                                        }),
                                    });
                                    break;
                                case hy.COMPLETED_100:
                                    n({
                                        ...t,
                                        userStatus: hA({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: S,
                                        }),
                                    });
                                    break;
                                case hy.CLAIMED:
                                    n({
                                        ...t,
                                        userStatus: hA({
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
            (0, r.jsx)(w.D, { variant: "heading-lg/bold", className: hi.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: hi.$$,
                children: [
                    (0, r.jsxs)(hd, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: hi.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, r.jsx)(D.E, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: hi.ok,
                                        children: (0, r.jsx)(m3.jY, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, r.jsx)(m4.A, { children: (0, r.jsx)(m5.Y, { quest: t }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(hd, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(m3.jY, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, r.jsx)(ht.Ay, {
                                    quest: t,
                                    className: hi.d,
                                    questContent: m2.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: m2.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(hd, {
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
                                className: hi.l4,
                                children: (0, r.jsx)(m3.jY, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, r.jsx)("div", {
                                        className: hi.Jr,
                                        children: (0, r.jsx)(m9.A, {
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
                        className: hi.NY,
                        children: (0, r.jsx)(v.d, {
                            label: "Is Participating:",
                            checked: c,
                            onChange: function (e) {
                                u(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(hd, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            m
                                ? (0, r.jsx)(m7.l, { questId: t.id })
                                : (0, r.jsx)(
                                      he.M,
                                      {
                                          quest: t,
                                          location: m2.uF.QUESTS_EMBED,
                                          sourceQuestContent: m2.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: hi.NY,
                        children: (0, r.jsx)(v.d, { label: "Invalid Quests Embed:", checked: m, onChange: x }),
                    }),
                    N &&
                        (0, r.jsxs)(hd, {
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
                                                    sourceQuestContent: m2.uF.INTERNAL_PREVIEW_TOOL,
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
class hT extends o.Component {
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
                  className: hi.TA,
                  children: [
                      (0, r.jsx)(m0.E, { className: hi.Yw }),
                      (0, r.jsx)(w.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(h.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, r.jsx)(m1.Z, {
                              className: hi.Fx,
                              children: (0, r.jsx)("code", { className: hi.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, r.jsx)(hD, {}, t);
    }
}
var hR = a(913122),
    hO = a(839214),
    hw = a(77138),
    hM = a(450827),
    hL = a(626584),
    hP = a(174768),
    hU = a(205761),
    hG = a(860071),
    hF = a(696451),
    hB = a(860689),
    h$ = a(926140);
let hV = new hL.A("SearchDebugUtils");
function hW() {
    hV.info("--------------------------");
}
function hz() {
    let e = hP.A.getProps();
    hV.info("START Quick Switcher State"),
        hV.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((hV.info(`Result Type: ${e.type}`), e.type)) {
                case h$.rD.GUILD:
                    hV.info(`guild id: ${e.record.id}`);
                    break;
                case h$.rD.TEXT_CHANNEL:
                case h$.rD.VOICE_CHANNEL:
                    hV.info(`channel type: ${e.record.type}`),
                        hV.info(`channel id: ${e.record.id}`),
                        hV.info(`name: ${e.record.name}`);
                    break;
                case h$.rD.DM:
                    hV.info(`channel type: ${e.record.type}`),
                        hV.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (hV.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = H.default.getUser(e);
                                null != t &&
                                    (hV.info(`recipient username: ${t.username}`),
                                    hV.info(`recipient global name: ${X.Ay.getGlobalName(t)}`),
                                    hV.info(`recipient nickname: ${ac.A.getNickname(t.id)}`));
                            }));
                    break;
                case h$.rD.GROUP_DM:
                    hV.info(`channel type: ${e.record.type}`),
                        hV.info(`channel id: ${e.record.id}`),
                        hV.info(`name: ${(0, ao.m1)(e.record, H.default, ac.A)}`),
                        e.record.isGroupDM() &&
                            (hV.info(`default name: ${(0, ao.ks)(e.record, H.default, ac.A)}`),
                            hV.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = H.default.getUser(e);
                                null != t &&
                                    (hV.info(`recipient username: ${t.username}`),
                                    hV.info(`recipient global name: ${X.Ay.getGlobalName(t)}`),
                                    hV.info(`recipient nickname: ${ac.A.getNickname(t.id)}`));
                            }));
                    break;
                case h$.rD.USER:
                    hV.info(`user id: ${e.record.id}`),
                        hV.info(`username: ${e.record.username}`),
                        hV.info(`global name: ${X.Ay.getGlobalName(e.record)}`),
                        hV.info(`nickname: ${ac.A.getNickname(e.record.id)}`),
                        hV.info(`guild nicknames: ${hF.Ay.getNicknames(e.record.id)}`);
            }
            hV.info(`frecency score: ${hU.A.getScoreWithoutFetchingLatest(e.record.id)}`), hW();
        }),
        hV.info("END Quick Switcher State\n");
}
async function hH() {
    hV.info("START User Search Worker State");
    let e = await hM.A.requestDebugState();
    null == e
        ? hV.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
              let [t, a] = e;
              hV.info(`id: ${t}`),
                  hV.info(`username: ${a.username}`),
                  hV.info(`global name: ${a.globalName}`),
                  hV.info(`nickname: ${a.friendNickname}`),
                  Object.entries(a.nicknames).forEach((e) => {
                      let [t, a] = e;
                      hV.info(`guild id: ${t}`), hV.info(`guild nickname: ${a}`);
                  }),
                  hW();
          }),
          hV.info("END User Search Worker State\n"));
}
async function hK() {
    let e = await hM.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        a = H.default.getUsers(),
        l = new Set(Object.keys(t)),
        n = mT.default.keys(a),
        s = [];
    return (
        n.forEach((e) => {
            l.has(e) || s.push(e);
        }),
        s
    );
}
async function hY(e) {
    let t = await hM.A.requestDebugState(),
        a = null != t ? JSON.parse(t.users)[e] : null,
        l = aK.A.getGuildIds(),
        n = [];
    l.forEach((t) => {
        let a = hF.Ay.getMember(t, e);
        null != a && n.push(a);
    });
    let s = hG.A.getDebugState(e);
    return { user: H.default.getUser(e), searchWorkerUser: a, guildMembers: n, guildMemberRequests: s };
}
var hq = a(929948);
function hJ(e) {
    let { isUploading: t, isSuccess: a, errorMessage: l, onClick: n, title: s } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(h.$, {
                variant: "primary",
                onClick: n,
                loading: t,
                disabled: t,
                text: t ? "Uploading\u2026" : s,
            }),
            null != l &&
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: hq.qS,
                    children: l,
                }),
            a &&
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: hq.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let hQ = (0, hO.D)(() => ({
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
function hX() {
    let e = hQ.useField("includeFrecency"),
        t = hQ.useField("includeFriends"),
        a = hQ.useField("includeDMs"),
        l = hQ.useField("includeGDMs"),
        n = hQ.useField("includeQuickSwitcherState"),
        s = hQ.useField("includeUserSearchWorkerState"),
        i = hQ.useField("isUploading"),
        d = hQ.useField("isSuccess"),
        c = hQ.useField("errorMessage"),
        m = o.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: l,
                includeQuickSwitcherState: n,
                includeUserSearchWorkerState: s,
                isUploading: i,
            } = hQ.getState();
            if (!i)
                try {
                    let i, r, o, d, c, u, m, h, x, p, g, v;
                    hQ.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((i = ac.A.getFriendIDs()),
                            hV.info("START Discord Friends"),
                            i.forEach((e) => {
                                let t = H.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    l = X.Ay.getGlobalName(t),
                                    n = ac.A.getNickname(t.id),
                                    s = hF.Ay.getNicknames(t.id);
                                hV.info(`username: ${a}`),
                                    hV.info(`global name: ${l}`),
                                    hV.info(`nickname: ${n}`),
                                    hV.info(`guild nicknames: ${s}`),
                                    hW();
                            }),
                            hV.info("END Discord Friends\n")),
                        a &&
                            ((r = ad.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                e.isGroupDM() && o.push(e), e.isDM() && d.push(e);
                            }),
                            hV.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, ao.m1)(e, H.default, ac.A),
                                    a = (0, ao.ks)(e, H.default, ac.A);
                                hV.info(`id: ${e.id}`),
                                    hV.info(`name: ${t}`),
                                    hV.info(`default name: ${a}`),
                                    hV.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = H.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            l = X.Ay.getGlobalName(t),
                                            n = ac.A.getNickname(t.id),
                                            s = hF.Ay.getNicknames(t.id);
                                        hV.info(`username: ${a}`),
                                            hV.info(`global name: ${l}`),
                                            hV.info(`nickname: ${n}`),
                                            hV.info(`guild nicknames: ${s}`),
                                            hW();
                                    });
                            }),
                            hV.info("END Logging Group DM Channels\n"),
                            hV.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, ao.m1)(e, H.default, ac.A);
                                hV.info(`id: ${e.id}`), hV.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    l = H.default.getUser(a);
                                if (null == l) return;
                                let n = l.username,
                                    s = X.Ay.getGlobalName(l),
                                    i = ac.A.getNickname(l.id);
                                hV.info(`username: ${n}`),
                                    hV.info(`global name: ${s}`),
                                    hV.info(`nickname: ${i}`),
                                    hW();
                            }),
                            hV.info("END Logging DM Channels\n")),
                        l &&
                            ((c = ad.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                e.isGroupDM() && u.push(e), e.isDM() && m.push(e);
                            }),
                            hV.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, ao.m1)(e, H.default, ac.A),
                                    a = (0, ao.ks)(e, H.default, ac.A);
                                hV.info(`id: ${e.id}`),
                                    hV.info(`name: ${t}`),
                                    hV.info(`default name: ${a}`),
                                    hV.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = H.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            l = X.Ay.getGlobalName(t),
                                            n = ac.A.getNickname(t.id),
                                            s = hF.Ay.getNicknames(t.id);
                                        hV.info(`username: ${a}`),
                                            hV.info(`global name: ${l}`),
                                            hV.info(`nickname: ${n}`),
                                            hV.info(`guild nicknames: ${s}`),
                                            hW();
                                    });
                            }),
                            hV.info("END Logging Group DM Channels\n"),
                            hV.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, ao.m1)(e, H.default, ac.A);
                                hV.info(`id: ${e.id}`), hV.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    l = H.default.getUser(a);
                                if (null == l) return;
                                let n = l.username,
                                    s = X.Ay.getGlobalName(l),
                                    i = ac.A.getNickname(l.id);
                                hV.info(`username: ${n}`),
                                    hV.info(`global name: ${s}`),
                                    hV.info(`nickname: ${i}`),
                                    hW();
                            }),
                            hV.info("END Logging DM Channels\n")),
                        e &&
                            ((h = hU.A.getFrequentlyWithoutFetchingLatest()),
                            (x = []),
                            (p = []),
                            (g = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, hB.fh)(e)
                                    ? x.push(e)
                                    : e.isDM()
                                      ? g.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : p.push(e);
                            }),
                            hV.info("START Frecency"),
                            hV.info("Guilds"),
                            x.forEach((e) => {
                                let t = hU.A.getScoreWithoutFetchingLatest(e.id);
                                hV.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            hW(),
                            hV.info("DM Channels"),
                            g.forEach((e) => {
                                let t = hU.A.getScoreWithoutFetchingLatest(e.id);
                                hV.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            hW(),
                            hV.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = hU.A.getScoreWithoutFetchingLatest(e.id);
                                hV.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    hV.info(`default name: ${(0, ao.ks)(e, H.default, ac.A)}`),
                                    hV.info(`name: ${(0, ao.m1)(e, H.default, ac.A)}`);
                            }),
                            hW(),
                            hV.info("Guild Channels"),
                            p.forEach((e) => {
                                let t = hU.A.getScoreWithoutFetchingLatest(e.id);
                                hV.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            hW(),
                            hV.info("END Frecency\n")),
                        n && hz(),
                        s && hH(),
                        await (0, hw.a)(J.Umv.WEB_APP),
                        hQ.setState({ isSuccess: !0, errorMessage: null });
                } catch (t) {
                    let e = new hR.LG(t);
                    hQ.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    hQ.setState({ isUploading: !1 });
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
                onChange: () => hQ.setState({ includeFrecency: !e }),
            }),
            (0, r.jsx)(v.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => hQ.setState({ includeFriends: !t }),
            }),
            (0, r.jsx)(v.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => hQ.setState({ includeDMs: !a }),
            }),
            (0, r.jsx)(v.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: l,
                onChange: () => hQ.setState({ includeGDMs: !l }),
            }),
            (0, r.jsx)(v.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: n,
                onChange: () => hQ.setState({ includeQuickSwitcherState: !n }),
            }),
            (0, r.jsx)(v.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: s,
                onChange: () => hQ.setState({ includeUserSearchWorkerState: !s }),
            }),
            (0, r.jsx)(hJ, {
                isUploading: i,
                isSuccess: d,
                errorMessage: c,
                onClick: m,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let hZ = (0, hO.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function h0() {
    let e = hZ.useField("userIds"),
        t = hZ.useField("isLoading"),
        a = hZ.useField("isSuccess"),
        l = hZ.useField("errorMessage"),
        n = hZ.useField("lastRunAt"),
        s = o.useCallback(async () => {
            hZ.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await hK();
                hZ.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                hZ.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                hZ.setState({ isLoading: !1 });
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
                            className: hq.J1,
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
                    className: hq.N6,
                    children: [
                        null != l &&
                            (0, r.jsx)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: hq.qS,
                                children: l,
                            }),
                        a &&
                            e.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(D.E, { variant: "text-md/normal", children: `Last run at: ${n}` }),
                                    (0, r.jsx)(D.E, {
                                        variant: "text-md/normal",
                                        children: "User IDs missing from Worker:",
                                    }),
                                    (0, r.jsx)("div", { className: hq.uk, children: i }),
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
let h1 = (0, hO.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function h2() {
    let e = h1.useField("isRecording"),
        t = h1.useField("isUploading"),
        a = h1.useField("isSuccess"),
        l = h1.useField("errorMessage"),
        n = o.useRef([]),
        s = o.useRef(""),
        i = o.useCallback(() => {
            let { results: e, query: t } = hP.A.getProps();
            (n.current !== e || s.current !== t) && ((n.current = e), (s.current = t), hz());
        }, []);
    o.useEffect(() => {
        if (e) return hP.A.addChangeListener(i), () => hP.A.removeChangeListener(i);
    }, [i, e]);
    let d = o.useCallback(async () => {
        let { isUploading: e } = h1.getState();
        if (!e)
            try {
                h1.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, hw.a)(J.Umv.WEB_APP),
                    h1.setState({ isSuccess: !0, errorMessage: null });
            } catch (t) {
                let e = new hR.LG(t);
                h1.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                h1.setState({ isUploading: !1 });
            }
    }, []);
    return (0, r.jsxs)(u.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, r.jsx)(u4.p, {
                messageType: u4.Y.INFO,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, r.jsxs)(n6.e, {
                children: [
                    (0, r.jsx)(h.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => h1.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(hJ, {
                        isUploading: t,
                        isSuccess: a,
                        errorMessage: l,
                        onClick: d,
                        title: "Upload Session Logs",
                    }),
                ],
            }),
        ],
    });
}
var h8 = a(145497);
let h6 = (0, hO.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function h3(e) {
    let { title: t, guildIds: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: hq.J1,
                children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: t }),
            }),
            (0, r.jsxs)("div", {
                className: hq.uk,
                children: [
                    0 === a.length &&
                        (0, r.jsx)("div", {
                            className: hq.J1,
                            children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = aK.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: hq.J1,
                                      children: [
                                          (0, r.jsx)(h8.Ay, { guild: t, iconSize: 16 }),
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
function h5(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: l, guildMembers: n, guildMemberRequests: s } = t,
        i = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(sW.y, { size: "sm", color: eO.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(m0.E, { size: "sm", color: eO.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, r.jsxs)("div", {
        className: hq.N6,
        children: [
            (0, r.jsxs)("div", {
                className: hq.J1,
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
                    className: hq.uk,
                    children: (0, r.jsx)("div", {
                        className: hq.J1,
                        children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: hq.J1,
                children: [
                    i({ ok: null != l }),
                    (0, r.jsx)(D.E, {
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
                    className: hq.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: hq.J1,
                            children: (0, r.jsx)(D.E, {
                                variant: "text-sm/normal",
                                children: `username: ${l.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: hq.J1,
                            children: (0, r.jsx)(D.E, {
                                variant: "text-sm/normal",
                                children: `global name: ${l.globalName ?? "\u2014"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: hq.J1,
                            children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: hq.uk,
                            children: [
                                0 === Object.keys(l.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: hq.J1,
                                        children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "None" }),
                                    }),
                                Object.entries(l.nicknames).map((e) => {
                                    let [t, a] = e,
                                        l = aK.A.getGuild(t),
                                        n = ad.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: hq.J1,
                                            children: [
                                                null != l && (0, r.jsx)(h8.Ay, { guild: l, iconSize: 16 }),
                                                null != l &&
                                                    (0, r.jsx)(D.E, { variant: "text-sm/normal", children: l.name }),
                                                null == l &&
                                                    null != n &&
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-sm/normal",
                                                        children: (0, ao.m1)(n, H.default, ac.A),
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
                className: hq.J1,
                children: [
                    i({ ok: n.length > 0 }),
                    (0, r.jsx)(D.E, {
                        variant: "text-sm/normal",
                        children: n.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            n.length > 0 &&
                (0, r.jsx)("div", {
                    className: hq.uk,
                    children: n.map((e) => {
                        let t = aK.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: hq.J1,
                                children: [
                                    (0, r.jsx)(h8.Ay, { guild: t, iconSize: 16 }),
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
                className: hq.J1,
                children: [
                    (0, r.jsx)(cb.m, { size: "sm" }),
                    (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != s &&
                (0, r.jsxs)("div", {
                    className: hq.uk,
                    children: [
                        (0, r.jsx)(h3, { title: "Pending Guild Member Requests:", guildIds: s.pendingRequestGuildIds }),
                        (0, r.jsx)(h3, { title: "Sent Guild Member Requests:", guildIds: s.sentRequestGuildIds }),
                        (0, r.jsx)(h3, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: s.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function h4() {
    let e = o.useCallback((e) => {
            h6.setState({ userId: e, state: null });
        }, []),
        t = o.useCallback(async () => {
            let { userId: e, loading: t } = h6.getState();
            if (!t && null != e) {
                h6.setState({ loading: !0, error: null });
                try {
                    let t = await hY(e);
                    h6.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new hR.LG(t);
                    h6.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    h6.setState({ loading: !1 });
                }
            }
        }, []),
        a = h6.useField("loading");
    return (0, r.jsxs)("div", {
        className: hq.$n,
        children: [
            (0, r.jsx)(p.k, { placeholder: "User ID", onChange: e }),
            (0, r.jsx)(h.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function h9() {
    let e = h6.useField("state"),
        t = h6.useField("error");
    return (0, r.jsxs)(u.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, r.jsx)(h4, {}),
            null != t &&
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: hq.qS,
                    children: t,
                }),
            null != e && (0, r.jsx)(h5, { userState: e }),
        ],
    });
}
function h7() {
    return (0, r.jsxs)(d.Ip, {
        className: hq.nd,
        children: [
            (0, r.jsx)(h2, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(hX, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(h9, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(h0, {}),
        ],
    });
}
var xe = a(761508),
    xt = a(599147),
    xa = a(808411),
    xl = a(624716),
    xn = a(398590),
    xs = a(764451),
    xi = a(263419),
    xr = a(52822),
    xo = a(642153);
let xd = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    xc = {
        "virtual-currency": function () {
            return (0, r.jsxs)(xr.Hq, {
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
                                (e = xi.RevenuePlaygroundCollectionId.VIRTUAL_CURRENCY),
                                void (xs.PlaygroundStore.setState({ selectedCollection: e, selectedStory: null }),
                                (0, xn.id)(J.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: () =>
            (0, r.jsxs)("div", { children: [(0, r.jsx)(xt.o, {}), (0, r.jsx)(xa.A, {}), (0, r.jsx)(xl.A, {})] }),
    };
function xu() {
    let [e, t] = o.useState("virtual-currency"),
        a = o.useMemo(() => xc[e], [e]);
    return (0, r.jsxs)("div", {
        className: k()(tT.nd, xo.kL),
        children: [
            (0, r.jsx)(xe.V, {
                className: xo.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: xd.map((e) => (0, r.jsx)(xe.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, r.jsx)(d.Ar, { children: (0, r.jsx)("div", { className: xo.Qs, children: (0, r.jsx)(a, {}) }) }),
        ],
    });
}
var xm = a(718446),
    xh = a(766075),
    xx = a(355097);
let xp = (0, hO.D)(() => ({ urlString: "", error: null })),
    xg = Object.entries(xx.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function xv() {
    let [e, t] = o.useState(),
        a = xp.useField("urlString"),
        l = xp.useField("error"),
        n = o.useCallback(() => {
            let e = xp.getField("urlString");
            if (null == e || "" === e) return void xp.setState({ error: "URL is required" });
            let t = (0, xm.parseSettingsUrl)({ path: e });
            ((0, xm.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? xp.setState({ error: "String did not match expected format" })
                : (0, xh.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, r.jsx)(t1.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: xg,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = xx.od[e].split("/");
                        xp.setState({ urlString: J.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, r.jsx)(p.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => xp.setState({ urlString: e, error: null }),
            }),
            (0, r.jsxs)(n6.e, {
                children: [
                    (0, r.jsx)(h.$, {
                        variant: "primary",
                        onClick: n,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(h.$, {
                        variant: "secondary",
                        onClick: () => (0, lc.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != l && (0, r.jsx)(D.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
var xj = a(780964);
let xb = (0, hO.D)(() => ({ setting: xj.X.ACCOUNT_PANEL }));
function xf() {
    let e = xb.useField("setting"),
        t = o.useCallback(() => {
            (0, xh.openUserSettings)(e);
        }, [e]),
        a = o.useMemo(() => Object.values(xj.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, r.jsx)(t1.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => xb.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, r.jsx)(h.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var xy = a(963935),
    xE = a(952096),
    x_ = a(53181);
function xC(e) {
    let { title: t, initExpanded: a, highlightMode: l = "none", children: n } = e,
        [s, i] = o.useState(a),
        d = o.useCallback(() => {
            i(!s);
        }, [s]),
        c = "migrated" === l || "migrated-root" === l ? void 0 : "status-warning",
        u = (e) => (0, r.jsx)(D.E, { variant: e, color: c, children: t });
    return null == n
        ? (0, r.jsx)("div", { className: x_.NF, children: u("text-md/normal") })
        : (0, r.jsxs)("div", {
              className: x_.NF,
              children: [
                  (0, r.jsxs)(I.D, {
                      className: x_.jr,
                      onClick: d,
                      children: [
                          u("text-md/bold"),
                          (0, r.jsx)(sl.A, {
                              direction: s ? sl.A.Directions.DOWN : sl.A.Directions.RIGHT,
                              className: x_.D,
                          }),
                      ],
                  }),
                  s && (0, r.jsx)("div", { className: x_.m4, children: n }),
              ],
          });
}
function xS(e) {
    let { setting: t, depth: a, inheritedHighlightMode: l } = e,
        n = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case xy.Z6.ROOT:
                    return "migrated-root";
                case xy.Z6.SECTION:
                case xy.Z6.PANEL:
                case xy.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, l),
        s = "migrated" === n ? "migrated" : void 0,
        i = null;
    return (
        (0, xy.nW)(t) &&
            t.layout.length > 0 &&
            (i = t.layout.map((e) => (0, r.jsx)(xS, { setting: e, depth: a + 1, inheritedHighlightMode: s }, e.key))),
        (0, r.jsx)(xC, { title: t.key, initExpanded: a <= 2, highlightMode: n, children: i })
    );
}
function xN() {
    let { node: e } = (0, W.Ay)(xE.D, ""),
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
            (0, r.jsx)(xS, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var xA = a(168803);
function xk() {
    return (0, r.jsxs)(d.Ip, {
        className: xA.n,
        children: [
            (0, r.jsx)(xf, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(xv, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(xN, {}),
        ],
    });
}
function xI() {
    return o.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: aU.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(lO, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: aU.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(u5, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: aU.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(u1, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: aU.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(n0, {}),
            },
        ];
        return (
            aI.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: aU.fu.SHOP, render: () => (0, r.jsx)(uz, {}) }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: aU.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(dS, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: aU.fu.SHOP,
                    render: () => (0, r.jsx)(t_, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: aU.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, r.jsx)(cV, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: aU.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(n8, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: aU.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(d0.Ay, {}),
                }),
                e.push({
                    id: "age_verification",
                    name: "Age Verification",
                    group: aU.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(a9, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: aU.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(se, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: aU.fu.GAMES, render: () => (0, r.jsx)(di, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: aU.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(it, {}),
                }),
                aD.isPlatformEmbedded &&
                    e.push({
                        id: "detected_games",
                        name: "Detected Games",
                        group: aU.fu.GAMES,
                        render: () => (0, r.jsx)(nw, {}),
                    }),
                e.push({
                    id: "detectable_cache",
                    name: "Detectable Cache",
                    group: aU.fu.GAMES,
                    tags: ["games", "cache", "skus", "stale"],
                    render: () => (0, r.jsx)(nN, {}),
                }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: aU.fu.GAMES, render: () => (0, r.jsx)(uK, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: aU.fu.GAMES,
                    render: () => (0, r.jsx)(a0, {}),
                }),
                e.push({
                    id: "game_upsells",
                    name: "Game Upsells",
                    group: aU.fu.GAMES,
                    tags: ["dismissible", "cooldown", "dcf"],
                    render: () => (0, r.jsx)(ai, {}),
                }),
                e.push({
                    id: "slayer_storefront",
                    name: "Slayer Storefront",
                    group: aU.fu.GAMES,
                    render: () => (0, r.jsx)(ak, {}),
                }),
                e.push({
                    id: "game_profile",
                    name: "Game Profile",
                    group: aU.fu.GAMES,
                    render: () => (0, r.jsx)(t9, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: aU.fu.USERS,
                    render: () => (0, r.jsx)(h7, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: aU.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(N, {}) })),
            e.push({
                id: "rive",
                name: "Rive",
                group: aU.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(cK, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: aU.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag"],
                render: () => (0, r.jsx)(iW, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: aU.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rg, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: aU.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(rl, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: aU.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(l3, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: aU.fu.UI, render: () => (0, r.jsx)(nE, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: aU.fu.UI,
                render: () => (0, r.jsx)(cj, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: aU.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(sC, { devSettingsCategory: aT.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: aU.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(rG, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: aU.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(sC, { devSettingsCategory: aT.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: aU.fu.USERS, render: () => (0, r.jsx)(ct, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: aU.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(rY, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: aU.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(ry, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: aU.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(ru, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: aU.fu.USERS,
                tags: ["friends"],
                render: () => (0, r.jsx)(a6, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: aU.fu.USERS,
                tags: ["channels"],
                render: () => (0, r.jsx)(l6, {}),
            }),
            aI.A.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: aU.fu.USERS,
                    render: () => (0, r.jsx)(tZ, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: aU.fu.USERS,
                    render: () => (0, r.jsx)(ag, {}),
                })),
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: aU.fu.DCF, render: () => (0, r.jsx)(nj, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: aU.fu.DCF, render: () => (0, r.jsx)(na, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: aU.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(i9, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: aU.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up"],
                render: () => (0, r.jsx)(d8, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: aU.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(r7, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: aU.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(d$, {}),
                }),
                e.push({
                    id: "orders",
                    name: "Orders",
                    group: aU.fu.BILLING,
                    tags: ["orders"],
                    render: () => (0, r.jsx)(os, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: aU.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(mH, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: aU.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, r.jsx)(sg, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: aU.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, r.jsx)(io, {}),
            }),
            e.push({
                id: "spatial_audio",
                name: "Spatial Audio",
                group: aU.fu.AUDIO_VIDEO,
                tags: ["spatial", "hrtf", "steam audio", "3d"],
                render: () => (0, r.jsx)(mA, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: aU.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(mC, {}),
            }),
            e.push({
                id: "av_overrides",
                name: "Overrides",
                group: aU.fu.AUDIO_VIDEO,
                tags: ["video", "capture", "encoder", "golive"],
                render: () => (0, r.jsx)(md, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: aU.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(mm, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: aU.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(i6, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: aU.fu.BOOSTING, render: () => (0, r.jsx)(sy, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: aU.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(rs, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: aU.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(xk, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: aU.fu.QUESTS,
                render: () => (0, r.jsx)(af, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: aU.fu.QUESTS,
                render: () => (0, r.jsx)(me, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: aU.fu.BILLING,
                render: () => (0, r.jsx)(xu, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: aU.fu.QUESTS,
                render: () => (0, r.jsx)(hT, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: aU.fu.USERS,
                render: () => (0, r.jsx)(cS, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: aU.fu.USERS,
                render: () => (0, r.jsx)(lW, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: aU.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(nU, {}),
            }),
            e
        );
    }, []);
}
