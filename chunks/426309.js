a.d(t, { x: () => xy }), a(321073);
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
    y = a(315240),
    _ = a(871421),
    E = a(227628),
    C = a(468550),
    S = a(781710);
function N() {
    let e = (0, E.MZ)((e) => e.isOpen),
        t = (0, C.sY)((e) => e.isOpen),
        a = o.useCallback((e) => {
            if (!e) return void (0, C.kF)();
            let t = j.Ay.getVisibleGame()?.id,
                a = b.A.getLastClipsSession()?.newClipIds[0],
                n = (null != a ? b.A.getClipById(a)?.applicationId : null) ?? b.A.getClips()[0]?.applicationId,
                l = t ?? n;
            null != l && (0, C.M8)(l);
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
                                _.A.debugStashDeciderData();
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            text: "re-run ranking",
                            onClick: () => {
                                _.i.debugRerunRanking();
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
                            onChange: (e) => (e ? (0, E.w9)() : (0, E.yj)()),
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
    O = a(331322),
    R = a(811893),
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
                            e && (0, r.jsx)(V.A, { node: i }),
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
                            (0, r.jsx)($.A, {
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
    e_ = a(315949),
    eE = a(559474),
    eC = a(816866),
    eS = a(87558),
    eN = a(575593),
    eA = a(631903),
    ek = a(224640),
    eI = a(408278),
    eD = a(972213),
    eT = a(43990),
    eO = a(192308),
    eR = a(661531),
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
var eV = a(314485),
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
                                theme: l,
                                children: (e) =>
                                    (0, r.jsx)("img", {
                                        src: ez,
                                        alt: "",
                                        className: k()(eV.aM, e),
                                        "aria-hidden": !0,
                                    }),
                            }),
                            null != n &&
                                "" !== n &&
                                (0, r.jsx)("img", { src: n, className: eV.SD, alt: "Reduced motion preview" }),
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
                              (0, eO.hasModalOpen)(eY)
                                  ? (0, eO.closeModal)(eY)
                                  : (0, eO.openModalLazy)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, r.jsx)(eq, { ...e, frameSrc: a?.src ?? null, theme: n }),
                                            ),
                                        { modalKey: eY, onCloseRequest: () => (0, eO.closeModal)(eY) },
                                    );
                          },
                          children: o,
                      })
                    : (0, r.jsx)("div", { className: eV.zd, children: o }),
                null != a && (0, r.jsx)(h.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: l }),
            ],
        });
    },
    eQ = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, eC.wu)(),
            n = (0, M.bG)([H.default], () => H.default.getCurrentUser()),
            [l, s] = o.useState(!0),
            i = o.useRef({}),
            [d, c] = o.useState(!1),
            [u, m] = o.useState(!1),
            [x, p] = o.useState(8),
            [g, v] = o.useState([]),
            [j, b] = o.useState(eH),
            f = o.useRef([]),
            [y, _] = o.useState(t.name),
            E = y.toLowerCase().replace(/\s+/g, "_"),
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
            S = d ? eR.A.themes.DARKER : eR.A.themes.LIGHT,
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
                                              _(e.target.value);
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
                                                    user: n,
                                                    currentUser: n,
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
                                      l &&
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
                                                  user: n,
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
                                                          fileName: `${E}_timing_config.txt`,
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
                                                          fileName: `${E}_config.txt`,
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
            { deleteProfileEffect: n } = (0, eC.wu)();
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
                                e.preventDefault(), e.stopPropagation(), n(t.skuId);
                            },
                        }),
                    ],
                }),
            ],
        });
    };
function e0() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, eC.wu)(),
        [n, l] = o.useState(),
        s = o.useRef(null),
        { categories: i } = (0, e_.A)(),
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
                if (null == a || !e.type.startsWith("text/")) return (0, eE.Ni)(eX);
                let [n, l] = a.split(",");
                if (!n.includes("text/plain")) return (0, eE.Ni)(eX);
                let s = JSON.parse(atob(l));
                (s.skuId = (0, ej.A)()), t(s), (0, eE.GF)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        g = o.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, eE.Ni)("Error uploading file. Try again!")
                    : (0, eE.KE)(e.currentTarget.files, x, eE.Ni);
            },
            [x],
        );
    return (0, r.jsxs)("div", {
        className: eV.zr,
        children: [
            null == n &&
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
                                                })) && (a(), (0, eE.GF)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: eV.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(eZ, { profileEffect: e, onClick: () => l(e) }, e.skuId),
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
                                                    l({
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
    e9 = a(619499),
    e4 = a(207803),
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
        (0, e1.l0)(e4.RE),
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
                            i && (0, r.jsx)(e9.A, {}),
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
    t_ = (e) => {
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
                            children: (0, r.jsxs)(O.B, {
                                gap: 8,
                                children: [
                                    (0, r.jsx)(D.E, { variant: "text-md/semibold", children: "Not enough space?" }),
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        children: "You can pop out the DevTools to see the full layout.",
                                    }),
                                    (0, r.jsx)(h.$, {
                                        size: "sm",
                                        icon: R.t,
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
    tE = () => {
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
                                return (0, r.jsx)(t_, { setTab: t });
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
function tO(e) {
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
var tR = a(409626),
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
                    (0, t$.I5)(l) &&
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
    let e = (0, M.bG)([tU.A], () => tU.A.getFeed(tV.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, M.cf)(
            [tU.A],
            () => tU.A.getFeedState(tV.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        n = (0, M.bG)([tU.A], () => tU.A.getLastFeedFetchDate(tV.X1.GLOBAL_FEED));
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
        a = (0, M.bG)([tU.A], () => tU.A.getFeed(tV.X1.GLOBAL_FEED)),
        n = (0, M.bG)([tU.A], () => tU.A.getDebugImpressionCappingDisabled()),
        l = (0, M.bG)([tP.A], () => tP.A.getDebugFastImpressionCappingEnabled()),
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
        x = (0, tw.A)({ applicationId: m, location: "DevToolsContentInventory", source: tR.Ob.DevTools }),
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
                (0, r.jsxs)(O.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(D.E, { variant: "text-md/semibold", children: "Inventory" }),
                        s.length > 0 && (0, r.jsx)(tO, { columns: tQ, data: s }),
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
                (0, r.jsxs)(O.B, {
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
                (0, r.jsxs)(O.B, {
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
        a = (0, tw.A)({ applicationId: t.id, location: "DevToolsContentInventory", source: tR.Ob.DevTools });
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
function t9(e) {
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
          : (0, r.jsxs)(O.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(t2.A, { game: a, size: t2.M.SMALL }),
                    (0, r.jsxs)(O.B, {
                        gap: 0,
                        children: [
                            (0, r.jsx)(D.E, { variant: "text-md/semibold", children: a.name }),
                            (0, r.jsx)(D.E, { variant: "text-xxs/normal", color: "text-muted", children: a.id }),
                        ],
                    }),
                ],
            });
}
function t4() {
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
        x = (0, tw.A)({ gameId: m, location: "DevToolsGameProfile", source: tR.Ob.DevTools });
    return (0, r.jsx)("div", {
        className: tT.nd,
        children: (0, r.jsxs)(O.B, {
            gap: 32,
            padding: 12,
            fullWidth: !1,
            children: [
                (0, r.jsxs)(O.B, {
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
                (0, r.jsxs)(O.B, {
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
                (0, r.jsxs)(O.B, {
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
                        u.length > 0 && (0, r.jsx)(t9, { gameId: u }),
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
                        (0, r.jsx)(tO, {
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
                        (0, r.jsx)(tO, {
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
    a_ = a(868511),
    aE = a(147964),
    aC = a(760716),
    aS = a(115093),
    aN = a(11039);
let aA = window.GLOBAL_ENV.RELEASE_CHANNEL === aS.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function ak() {
    let e = (0, aC.i)((e) => e.overrideApplicationId),
        t = (0, aC.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        [n, l] = o.useState(aA),
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
        b = (0, M.bG)([aE.A], () => null != aE.A.testModeApplicationId),
        f = o.useCallback((e) => {
            e ? (0, eO.openModal)((e) => (0, r.jsx)(a_.A, { ...e })) : ay.cL();
        }, []),
        y = (0, tw.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: n,
            source: tR.Ob.Embed,
            trackEntryPointImpression: !0,
        }),
        _ = o.useCallback(
            (e) => {
                y?.(e);
            },
            [y],
        ),
        E = o.useCallback(() => {
            (0, av.pX)(J.BVt.COLLECTIBLES_SHOP_GAME_SHOP(n));
        }, [n]);
    return (0, r.jsx)("div", {
        className: k()(tT.nd, aN.n),
        children: (0, r.jsxs)("div", {
            className: aN.k,
            children: [
                (0, r.jsx)(p.k, { label: "Application ID", value: n, onChange: c }),
                (0, r.jsx)(w.D, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, r.jsx)(v.d, { label: "Override activity application ID", checked: a, onChange: d }),
                (0, r.jsx)(v.d, { label: "Show own voice activity (bypass self check)", checked: u, onChange: m }),
                (0, r.jsx)(v.d, { label: "Enable application test mode", checked: b, onChange: f }),
                (0, r.jsx)(h.$, { text: "Open Game Profile Modal", onClick: _ }),
                (0, r.jsx)(h.$, { text: "Navigate to App Game Shop", onClick: E }),
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
var aO = a(58736);
a(558179), a(21574);
var aR = a(231545),
    aw = a(761929),
    aM = a(23599);
function aL(e) {
    let { resizableNode: t, minHeight: a, onResize: n } = e,
        l = (0, aw.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: n,
            orientation: aw.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, r.jsx)("div", { onPointerDown: l, className: aM.Di });
}
function aP(e) {
    let { children: t, className: a, initialHeight: n, minHeight: l } = e,
        s = o.useRef(null),
        [i, d] = o.useState(n);
    return (0, r.jsxs)("div", {
        ref: s,
        className: aM.kL,
        style: { minHeight: l, height: i },
        children: [
            (0, r.jsx)(aL, { resizableNode: s, minHeight: l, onResize: d }),
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
        n = o.useRef(null),
        { analyticsLocations: l } = (0, aF.Ay)(tm.A.DEV_TOOLS),
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
        _ = (0, a$.RD)(v, { allowedFlows: [aJ._M.WEB], debug: !0 }),
        E = (0, M.bG)([aH.A], () => null != b && aH.A.isConnected(b.id)),
        C = (0, a$.RD)(v, { debug: !0 }),
        { canDeauthorize: S, deauthorize: N } =
            ((e = C.connectionApp?.id),
            (t = (0, M.bG)([az.default], () => az.default.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && aG.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: n,
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
                            : E
                              ? aV.nW.WARN
                              : aV.nW.OVERALL_BAD,
                        name: aQ.intl.string(aX.default.AGLx00),
                        steps: [
                            {
                                status: E ? aV.nW.GOOD : aV.nW.BAD,
                                text: aQ.intl.string(aX.default.kxF9br),
                                description: E ? null : aQ.intl.string(aX.default.PFxxJa),
                                learnMoreLink: E
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: y.debug.isSubscribedToAuthorizeRequest
                                    ? aV.nW.GOOD
                                    : E
                                      ? aV.nW.WARN
                                      : aV.nW.BAD,
                                text: aQ.intl.string(aX.default.S94dzs),
                                description:
                                    y.debug.isSubscribedToAuthorizeRequest || !E
                                        ? null
                                        : aQ.intl.string(aX.default.aTULMB),
                                learnMoreLink:
                                    y.debug.isSubscribedToAuthorizeRequest || !E
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: C.chosenFlow === aJ._M.RPC,
                    }),
                    (0, r.jsx)(aV.VT, {
                        overallStatus: _.debug.hasConnectionEntrypointUrl ? aV.nW.OVERALL_GOOD : aV.nW.OVERALL_BAD,
                        name: aQ.intl.string(aX.default.K3ObrU),
                        steps: [
                            {
                                status: _.debug.hasConnectionEntrypointUrl ? aV.nW.GOOD : aV.nW.BAD,
                                text: aQ.intl.string(aX.default["8a7IrV"]),
                                description: _.debug.hasConnectionEntrypointUrl
                                    ? aQ.intl.formatToPlainString(aX.default["9iLeL2"], {
                                          url: _.connectionApp?.connectionEntrypointUrl,
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
                        onClick: () => C.startAuthorization({ analyticsLocations: l }),
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
                        disabled: !_.canStartAuthorization,
                        onClick: () => _.startAuthorization({ analyticsLocations: l }),
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
            let { otherUserId: t, communicationProbability: a, vcProbability: n, isFriend: l } = e;
            return { user: H.default.getUser(t), affinity: a, vcProbability: n, isFriend: l, key: t };
        }),
    );
    return 0 === e.length ? null : (0, r.jsx)(tO, { className: tT.nd, columns: a8, rowClassName: a2.nM, data: e });
}
var a3 = a(139716),
    a5 = a(847599),
    a9 = a(282621);
function a4() {
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
                                void (0, eO.openModalLazy)(
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
    ne = a.n(a7),
    nt = a(862482),
    na = a(624479),
    nn = a(555704),
    nl = a(285796),
    ns = a(241326),
    ni = a(892547),
    nr = a(297413),
    no = a(379078),
    nd = a(704554),
    nc = a(957565),
    nu = a(58703),
    nm = a(80703),
    nh = a(495544);
let nx = 0,
    np = [],
    ng = 0,
    nv = [],
    nj = !1;
class nb extends M.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(nh.default, aI.A);
    }
    get loggedEvents() {
        return np;
    }
    get loggedEventsVersion() {
        return ng;
    }
    get loggedTriggers() {
        return nv;
    }
    get trackTriggers() {
        return nj;
    }
}
let nf = new nb(tA.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        aI.A.isDeveloper &&
            (np.push({
                key: (nx++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, nm.d)(n) : nh.default.getId(),
                timestamp: new Date(),
            }),
            ng++,
            np.length > 500 && (np = np.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: l, location: s, previouslyTracked: i } = e;
        !aI.A.isDeveloper ||
            (nj &&
                (nv = [
                    ...nv,
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
                nv.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        nj = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (np = []), ng++, (nv = []);
    },
});
var ny = a(658675);
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
                                  onClick: () => (0, nc.C)(n, () => s(!0)),
                                  children: l
                                      ? (0, r.jsx)(e6.U, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(na.T, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
};
function nC(e) {
    let { value: t } = e;
    return (0, r.jsx)(ny.P, { checked: t });
}
var nS = a(733657);
let nN = [
    {
        key: "event",
        cellClassName: nS.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "location",
        cellClassName: nS.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function nA(e) {
    let { children: t } = e;
    return (0, r.jsx)(d.Ip, { className: nS._D, children: (0, r.jsx)("dl", { children: t }) });
}
function nk(e) {
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
            className: nS.fY,
            children: [
                (0, r.jsx)("dt", { className: nS.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(I.D, {
                    tag: "span",
                    className: nS.nH,
                    onClick: () => (0, nc.C)(JSON.stringify(n), () => s(!0)),
                    children: l
                        ? (0, r.jsx)(e6.U, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(na.T, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let nI = new Set(["client_performance_cpu", "client_performance_memory"]),
    nD = [
        {
            id: "details",
            name: "Details",
            group: aU.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: n, fingerprint: l },
                        onClose: s,
                        filteredEvents: i,
                    } = e,
                    o = H.default.getUser(l),
                    d = ne()(n);
                return (0, r.jsxs)("div", {
                    className: nS.sw,
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(aO.Ay, {
                            className: k()(tT.jr, nS.nZ),
                            children: [
                                (0, r.jsx)(aO.Ay.Icon, { icon: nn.U, tooltip: t }),
                                (0, r.jsxs)(aO.Ay.Title, {
                                    wrapperClassName: nS.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(I.D, {
                                            tag: "span",
                                            className: nS.KE,
                                            onClick: () => (0, nc.C)(t),
                                            children: (0, r.jsx)(na.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(aO.Ay.Icon, {
                                    icon: na.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nc.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: n, fingerprint: l, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(aO.Ay.Icon, { icon: nl.a, tooltip: "Close", onClick: s }),
                            ],
                        }),
                        (0, r.jsxs)(n_, {
                            className: nS.ZK,
                            children: [
                                (0, r.jsx)(nE, {
                                    name: "Timestamp (local)",
                                    copyValue: n.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: n.toISOString(),
                                        title: (0, nu.i$)(d, "LLLL"),
                                        children: ["(", ne().locale(), ") ", (0, nu.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nE, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(nr.A, { user: o }),
                                    }),
                                (0, r.jsx)(nE, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(nA, {
                            children: Object.entries(a).map((e) => {
                                let [a, n] = e,
                                    l = nI.has(a)
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
                                                nk,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: n || null },
                                                    children:
                                                        null != n
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(n) })
                                                            : (0, r.jsx)("code", {
                                                                  className: nS.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, r.jsx)(
                                                    nk,
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
    nT = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(nT)
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
        searchType: no.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function nR() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (0, M.bG)([nf], () => nf.loggedEventsVersion),
        [l, s] = o.useState(() => Object.keys(nT)),
        [i, d] = o.useState(nf.loggedEvents),
        c = o.useCallback((e) => {
            d(e);
        }, []);
    (0, nd.RT)(t, nf.loggedEvents, c, nO, [n]);
    let u = i.filter((e) => {
            for (let t of l) if (nT[t].filter(e)) return !0;
            return !1;
        }),
        [m, h] = o.useState(void 0),
        x = u.find((e) => e.key === m),
        { TabBar: p, renderSelectedTab: g } = (0, aU.Ay)({ tabs: nD }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: k()(tT.nd, nS.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nS.rh,
                children: [
                    (0, r.jsx)(nt.$n, {
                        className: nS.Q$,
                        look: nt.$n.Looks.BLANK,
                        size: nt.$n.Sizes.ICON,
                        onClick: L.eY,
                        children: (0, r.jsx)("span", {
                            title: aQ.intl.string(aQ.t.VkKicb),
                            children: (0, r.jsx)(ns.u, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": aQ.intl.string(aQ.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: nS.Bi }),
                    (0, r.jsx)("div", {
                        className: nS.uW,
                        children: Object.entries(nT).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                I.D,
                                {
                                    className: k()(nS.pb, l.includes(t) && nS.bx),
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
                className: nS.rh,
                children: (0, r.jsx)(ni.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(tO, { columns: nN, data: u, selectedRowKey: m, onClickRow: (e) => h(e.key) }),
            null != x &&
                (0, r.jsxs)(aP, {
                    className: nS.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(p, {}), g({ loggedEvent: x, onClose: () => h(void 0), filteredEvents: u })],
                }),
        ],
    });
}
var nw = a(382483),
    nM = a(385113),
    nL = a(315117);
function nP(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)(O.B, {
        gap: 8,
        padding: 8,
        className: nL.lt,
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
                          O.B,
                          {
                              gap: 4,
                              padding: 4,
                              className: nL.YL,
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
function nU(e) {
    let { config: t, isSelected: a, onSelect: n } = e;
    return (0, r.jsxs)(O.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? nL.FM : nL.gt,
        children: [
            (0, r.jsx)(I.D, {
                className: nL.Av,
                onClick: n,
                children: (0, r.jsxs)(O.B, {
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
                onClick: () => (0, nw.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function nG() {
    let e = (0, M.bG)([nM.A], () => nM.A.getFeaturedFetchState());
    return (0, r.jsxs)(O.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(O.B, {
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
                onClick: () => (0, nw.Wq)({ force: !0 }),
            }),
        ],
    });
}
function nF() {
    let e = (0, M.bG)([nM.A], () => nM.A.getDeveloperFetchState());
    return (0, r.jsxs)(O.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(O.B, {
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
                onClick: () => (0, nw.i$)({ force: !0 }),
            }),
        ],
    });
}
function nB() {
    let [e, t] = o.useState(""),
        a = (0, M.bG)([nM.A], () => (e.length > 0 ? nM.A.getFetchState(e) : null)),
        n = (0, M.bG)([nM.A], () => (e.length > 0 ? nM.A.getConfigs(e) : null));
    return (0, r.jsxs)(O.B, {
        gap: 8,
        children: [
            (0, r.jsx)(D.E, { variant: "text-md/semibold", color: "text-strong", children: "Fetch by Application ID" }),
            (0, r.jsx)(p.k, { placeholder: "Application ID", value: e, onChange: (e) => t(e) }),
            (0, r.jsx)(h.$, {
                variant: "primary",
                size: "sm",
                text: "Fetch",
                disabled: 0 === e.length,
                onClick: () => (0, nw.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(D.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != n &&
                n.length > 0 &&
                (0, r.jsx)(O.B, { gap: 4, children: n.map((e) => (0, r.jsx)(nP, { config: e }, e.config_id)) }),
        ],
    });
}
function n$(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: n } = e,
        l = (0, M.bG)([nM.A], () => nM.A.getFeaturedFetchState());
    return (0, r.jsxs)(O.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(D.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            l === nM.e.FETCHING &&
                (0, r.jsx)(D.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    nU,
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
function nV(e) {
    let { config: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(g.c, {}),
            (0, r.jsxs)(O.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(D.E, { variant: "text-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(nP, { config: t }),
                ],
            }),
        ],
    });
}
function nW() {
    let [e, t] = o.useState(null),
        a = Object.values((0, M.bG)([nM.A], () => nM.A.getAllConfigsByApplication())).flat(),
        n = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsxs)(O.B, {
            gap: 16,
            padding: 8,
            className: nL.zr,
            children: [
                (0, r.jsx)(w.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(nG, {}),
                (0, r.jsx)(g.c, {}),
                (0, r.jsx)(nF, {}),
                (0, r.jsx)(g.c, {}),
                (0, r.jsx)(nB, {}),
                (0, r.jsx)(g.c, {}),
                (0, r.jsx)(n$, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != n && (0, r.jsx)(nV, { config: n }),
            ],
        }),
    });
}
var nz = a(636537),
    nH = a(153488),
    nK = a(927813);
let nY = 12 * nK.A.Millis.HOUR,
    nq = new Map(),
    nJ = !1,
    nQ = Object.freeze({ channelAffinities: [], lastFetched: 0 }),
    nX = { ...nQ };
function nZ() {
    nq = new Map(nX.channelAffinities.map((e) => [e.channelId, e]));
}
class n0 extends M.Ay.PersistedStore {
    static displayName = "ChannelAffinitiesV2Store";
    static persistKey = "ChannelAffinitiesStoreV2";
    initialize(e) {
        null != e && ((nX.channelAffinities = e.channelAffinities), (nX.lastFetched = e.lastFetched), nZ());
    }
    shouldFetch() {
        if (!nJ) return Date.now() - nX.lastFetched > nY;
    }
    isFetching() {
        return nJ;
    }
    getChannelAffinities() {
        return nX.channelAffinities;
    }
    getChannelAffinitiesMap() {
        return nq;
    }
    getChannelAffinity(e) {
        return nq.get(e);
    }
    compare(e, t) {
        return (nq.get(t)?.score ?? 0) - (nq.get(e)?.score ?? 0);
    }
    getState() {
        return nX;
    }
}
let n1 = new n0(tA.h, {
    LOAD_CHANNEL_AFFINITIES_V2: function () {
        nJ = !0;
    },
    LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineChannels: t } = e;
        (nX.lastFetched = Date.now()), (nJ = !1), (nX.channelAffinities = t), nZ();
    },
    LOAD_CHANNEL_AFFINITIES_V2_FAILURE: function () {
        nJ = !1;
    },
    LOGOUT: function () {
        (nX = { ...nQ }), (nq = new Map()), (nJ = !1);
    },
});
var n2 = a(907360);
let n8 = [
    {
        key: "channel",
        cellClassName: n2._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "SCORE" }),
        cellClassName: n2.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function n6() {
    o.useEffect(() => {
        !(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            n1.shouldFetch() && nH.A.hasConsented(J.YAq.PERSONALIZATION)
                ? (tA.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" }),
                  nz.Bo.get({
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
    let e = (0, M.yK)([n1, ad.A], () =>
        n1
            .getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: ad.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(tO, { className: tT.nd, columns: n8, rowClassName: n2.nM, data: e });
}
function n3() {
    return (0, r.jsxs)(D.E, {
        variant: "text-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var n5 = a(105565),
    n9 = a(558845),
    n4 = a(193337);
let n7 = (e) => {
        switch (e) {
            case n5.r.DC_DISMISSED:
                return "DISMISS:";
            case n5.r.DC_SHOWN:
                return "SHOW:";
            case n5.r.DC_SHOW_REQUEST:
                return "REQUEST TO SHOW:";
            default:
                return "UNKNOWN TYPE:";
        }
    },
    le = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${t7.M[a]}`;
            },
        },
    ],
    lt = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${t7.M[t]}`;
            },
        },
    ];
function la() {
    let e = (0, M.bG)([n5.A], () => n5.A.getDCFEvents()),
        t = (0, n9.Ay)((e) => e.candidates),
        a = (0, n9.Ay)((e) => e.lastWinnerTime),
        n = 0 !== a ? ne()(a).fromNow() : "n/a",
        l = (0, n9.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        s = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: n7(t) + a.toString(), event: n7(t), dismissibleContent: a };
        }),
        i = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: n4.KE,
        children: [
            (0, r.jsxs)("div", { className: n4.pq, children: ["Last winner time: ", n] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: n4.pq, children: ["Last winner: ", null != l ? t7.M[l] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: n4.uI,
                children: (0, r.jsx)(tO, { className: n4.Th, columns: lt, data: i }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(tO, { columns: le, data: s }),
        ],
    });
}
var ln = a(689175),
    ll = a(541689),
    ls = a(199773);
function li() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(lr());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        a.unshift(e), tN.w.set("RecentDismissibleOverrides", a);
    }, []);
    return [lr(), e];
}
function lr() {
    return tN.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var lo = a(662546),
    ld = a(643278),
    lc = a(256787),
    lu = a(20439);
let lm = o.memo(function (e) {
    let { className: t, content: a, onChange: n } = e,
        l = t7.M[a],
        { isDismissed: s, handleToggleDismissState: i } = (0, lu.A)(l),
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
            (0, r.jsxs)(O.B, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, r.jsx)(eI.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: d ? lo.O : ld.s,
                        onClick: m,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(v.d, {
                        label: `${a.toLowerCase()} (${t7.M[a]})`,
                        description: (0, lc.Zm)(l)
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
function lh(e) {
    let { items: t, onChange: a } = e,
        [n, l] = li(),
        s = (0, o.useCallback)(
            (e) => {
                l(e), a?.(e);
            },
            [l, a],
        );
    return (0, r.jsx)(O.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(lm, { content: e, onChange: s }, e)),
    });
}
function lx(e) {
    let { searchQuery: t = "" } = e,
        a = (0, n9.Ay)((e) => e.recentlyShown),
        [n, l] = li(),
        s = n
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(t7.M[e]))
            .slice(0, 3);
    return 0 === s.length
        ? null
        : (0, r.jsx)(u.n, { label: "Recent Overrides", children: (0, r.jsx)(lh, { items: s }) });
}
function lp(e) {
    let { searchQuery: t = "" } = e,
        a = (0, n9.Ay)((e) => e.recentlyShown)
            .map((e) => t7.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(u.n, { label: "Recently Shown", children: (0, r.jsx)(lh, { items: a }) });
}
var lg = a(594061),
    lv = a(268571);
function lj() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
        } = (0, M.cf)([ls.A], () => ({
            dailyCapReached: ls.A.hasUserHitDCCap(),
            dailyCapOverridden: ls.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: ls.A.newUserMinAgeRequiredOverridden,
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
    return (0, r.jsx)(ln.Ch, {
        onScroll: c,
        children: (0, r.jsxs)("div", {
            className: lv.KE,
            children: [
                (0, r.jsxs)(u.n, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, r.jsxs)(O.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, ll.Ab)(),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, lg.nT)(),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, lg.D1)(),
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
                            onChange: ll.SE,
                        }),
                        (0, r.jsx)(v.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: ll.U$,
                        }),
                    ],
                }),
                (0, r.jsx)(lp, {}),
                (0, r.jsx)(lx, {}),
                (0, r.jsxs)(u.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(ni.I, { query: n, onChange: l, onClear: () => l("") }),
                        (0, r.jsx)(lh, { items: d.slice(0, s) }),
                    ],
                }),
            ],
        }),
    });
}
var lb = a(276086),
    lf = a(154323),
    ly = a(155248);
function l_() {
    let e = (0, M.bG)([lf.A], () => lf.A.allWithDescriptions(), [], M.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, n] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                v.d,
                                { label: n, description: t, checked: a, onChange: (e) => (0, lb.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(g.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: ly.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: ly.x6,
                children: (0, r.jsx)(h.$, { variant: "primary", text: "Clear all", onClick: lb.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: ly.vu, children: t }),
        ],
    });
}
var lE = a(691540),
    lC = a(97483),
    lS = a(123292),
    lN = a(780907),
    lA = a(56562);
let lk = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "Marvel Rivals", value: "1314395942253756416" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
];
function lI(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: n } = (0, t6.I)(t.id);
    return (0, r.jsxs)(O.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != n && (0, r.jsx)(t2.A, { game: n }),
            (0, r.jsxs)(O.B, {
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
function lD() {
    let e = (0, M.bG)([j.Ay], () => j.Ay.getRunningGames()),
        t = (0, M.bG)([j.Ay], () => j.Ay.getDebugRunningGame()),
        [a, n] = (0, o.useState)(t?.id ?? ""),
        l = (0, o.useMemo)(
            () =>
                lk.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        ),
        s = (e) => {
            if (null == e || "" === e) return void (0, lN.xt)(null);
            let t = tM.A.getDetectableGame(e),
                a = t?.executables[0],
                n = t?.thirdPartySkus[0]?.distributor;
            if (null == t || null == a)
                return (0, lE.P0)({
                    id: "devtools-set-debug-game-error",
                    type: lC.Ck.FAILURE,
                    message: "Invalid Game ID",
                });
            (0, lN.xt)({
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
                fullscreenType: lA.aI.UNKNOWN,
                cmdLine: "",
                nativeProcessObserverId: -1,
            });
        };
    return (0, r.jsxs)(O.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(O.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(w.D, { variant: "heading-md/bold", children: "Running Games" }),
                    e.length > 0 &&
                        (0, r.jsx)("div", {
                            children: e.map((e) =>
                                (0, r.jsx)(lI, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, r.jsx)(g.c, {}),
            (0, r.jsxs)(O.B, {
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
                    (0, r.jsxs)(O.B, {
                        direction: "horizontal",
                        gap: 16,
                        justify: "end",
                        align: "end",
                        children: [
                            null != t &&
                                (0, r.jsx)(lS.Q, { variant: "secondary", text: "Clear", onClick: () => s(null) }),
                            (0, r.jsx)(h.$, { variant: "primary", text: "Detect Game", onClick: () => s(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lT = a(240248),
    lO = a(769195);
function lR() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            try {
                t(!0), n(null), s(null);
                let e = await nz.Bo.put({
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
    return (0, r.jsxs)(O.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(h.$, { variant: "primary", onClick: i, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, lT.uJ)(a) && (0, r.jsx)(D.E, { variant: "text-md/normal", color: "status-positive", children: a }),
            !(0, lT.uJ)(l) && (0, r.jsx)(D.E, { variant: "text-md/normal", color: "status-danger", children: l }),
        ],
    });
}
function lw() {
    return (0, r.jsx)("div", {
        className: lO.n,
        children: (0, r.jsx)(O.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(lR, {}) }),
    });
}
a(172879);
var lM = a(985623),
    lL = a.n(lM),
    lP = a(990078),
    lU = a(874804),
    lG = a(782134),
    lF = a(113494),
    lB = a(603349),
    l$ = a(155466);
function lV(e) {
    return parseFloat(e.toFixed(3));
}
let lW = [
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
            return `${lV(t.time)} ms`;
        },
    },
];
function lz(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(d.Ip, { children: (0, r.jsx)(tO, { columns: lW, data: a }) });
}
let lH = [
    {
        id: "action",
        name: "Action",
        group: aU.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = ne()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(n_, {
                        className: l$.mP,
                        children: [
                            (0, r.jsx)(nE, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, nu.i$)(a, "LLLL"),
                                    children: (0, nu.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(nE, { name: "Total Time", children: [lV(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(d.Ip, { className: l$.Dx, children: (0, r.jsx)(aR.A, { data: t.action }) }),
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
            return (0, r.jsx)(lz, { actionLog: t });
        },
    },
];
function lK(e) {
    let { actionLog: t, initialHeight: a } = e,
        n = o.useMemo(
            () =>
                t.error
                    ? [
                          ...lH,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(lB.A, { className: l$.ik }), "Error"],
                              }),
                              group: aU.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: k()(l$.u4, tT.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: tT.R5,
                                                  children: (0, r.jsx)(nt.$n, {
                                                      className: tT.Q$,
                                                      size: nt.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(d.Ip, {
                                              className: l$.Dx,
                                              children: (0, r.jsx)(aR.A, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : lH,
            [t],
        ),
        { TabBar: l, renderSelectedTab: s } = (0, aU.Ay)({ tabs: n }, [n]);
    return (0, r.jsxs)(aP, {
        className: l$.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(aO.Ay, {
                className: k()(tT.jr, l$.nZ),
                children: [
                    (0, r.jsx)(aO.Ay.Icon, { icon: lU.K, tooltip: t.name }),
                    (0, r.jsx)(aO.Ay.Title, {
                        wrapperClassName: k()(tT.qd, tT.ZE),
                        className: tT.Pz,
                        children: t.name,
                    }),
                    (0, r.jsx)(aO.Ay.Icon, {
                        icon: na.T,
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
                            (0, nc.C)(a, () =>
                                (0, lE.P0)({
                                    id: "copy-action-log-name",
                                    type: lC.Ck.SUCCESS,
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
let lY = [
        {
            key: "action",
            cellClassName: l$.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(lB.A, { className: l$.ik }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: l$.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${lV(t.totalTime)} ms`;
            },
        },
        {
            key: "timestamp",
            cellClassName: l$.i7,
            render(e) {
                let { actionLog: t } = e;
                return ne()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    lq = {
        searchType: no.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function lJ() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = lL()(() => {
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
    (0, nd.RT)(t, u ? s : l, p, lq);
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
                    (0, r.jsx)(lP.m, {
                        text: b,
                        children: (0, r.jsx)(eI.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? lG.u : lF.E,
                            "aria-label": b,
                            onClick: () => g(!u),
                        }),
                    }),
                    (0, r.jsx)(ni.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(tO, {
                columns: lY,
                data: j,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => x(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(lK, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var lQ = a(936388),
    lX = a(132369);
function lZ() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: k()(tT.nd, lX.n),
        children: (0, r.jsx)(h.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: lQ.A.clearUploadedKeyVersions,
        }),
    });
}
var l0 = a(825484),
    l1 = a(37962),
    l2 = a(881520),
    l8 = a(670455),
    l6 = a(861160);
let l3 = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function l5() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(0),
        [l, s] = o.useState(1e3),
        [i, d] = o.useState(0),
        c = (0, M.bG)([l2.A], () => (null === e ? null : (l2.A.getFeedbackConfig(l8.MW[e]) ?? l1.u[l8.MW[e]]))),
        m = Object.entries(l8.MW),
        v = m.slice(m.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        j = o.useMemo(() => null != e && i >= 0 && i <= 100 && a >= 0, [e, i, a]);
    return (0, r.jsx)("div", {
        className: l6.kL,
        children: (0, r.jsxs)(O.B, {
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
                        (0, r.jsxs)(O.B, {
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
                                    options: l3,
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
                (0, r.jsxs)(l0.e, {
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
    l4 = a(663417),
    l7 = a(147925),
    se = a(557009),
    st = a(788868);
let sa = async () =>
        (
            await nz.Bo.get({
                url: J.Rsh.ENTITLEMENTS_FOR_APPLICATION(st.tv),
                oldFormErrors: !0,
                query: { exclude_consumed: !0, exclude_ended: !0 },
                rejectWithError: !0,
            })
        ).body.map((e) => se.A.createFromServer(e)),
    sn = async (e) => {
        await nz.Bo.post({
            url: "/debug/entitlements/fractional-premium",
            body: { count: 1, sku_id: e },
            rejectWithError: !1,
        });
    },
    sl = async (e) => {
        let t = "/debug/entitlements/fractional-premium";
        null != e && (t = `${t}/${e}`), await nz.Bo.del({ url: t, rejectWithError: !0 });
    },
    ss = async () => {
        await nz.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
    },
    si = () => {
        let [e, t] = o.useState([]),
            [a, n] = o.useState(!1),
            l = (0, o.useCallback)(async () => {
                try {
                    n(!0);
                    let e = await sa();
                    t(e);
                } finally {
                    n(!1);
                }
            }, []),
            s = (0, o.useCallback)(
                async (e) => {
                    await sn(e), await l();
                },
                [l],
            );
        return {
            grantFractionalPremium: s,
            deleteFractionalPremium: (0, o.useCallback)(
                async (e) => {
                    await sl(e), await l();
                },
                [l],
            ),
            triggerNextEntitlementFulfillment: (0, o.useCallback)(async () => {
                await ss(), await l();
            }, [l]),
            refreshEntitlementList: l,
            entitlements: e,
            loading: a,
        };
    };
var sr = a(51846),
    so = a(214868);
let sd = {
        [J.GD.QUEST_REWARD]: "Quest Reward",
        [J.GD.DEVELOPER_GIFT]: "Developer Gift",
        [J.GD.INVOICE]: "Invoice",
        [J.GD.REVERSE_TRIAL]: "Reverse Trial",
        [J.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
        [J.GD.SUBSCRIPTION]: "Subscription",
        [J.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
    },
    sc = (e) => {
        let t,
            { entitlement: a, active: n, onDelete: l } = e,
            s = (e) => (null != e ? (0, nu.i$)(e, "LLL") : "---");
        return (0, r.jsxs)("div", {
            className: k()(sr.Nr, n ? so.C1 : ""),
            children: [
                (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["ID: ", a.id, " "] }),
                !n &&
                    (0, r.jsxs)(D.E, {
                        variant: "text-md/normal",
                        children: ["SKU: ", su.find((e) => e.value === a.skuId)?.label],
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
                        null != (t = a.sourceType) && t in sd ? sd[t] : `Unknown source type ${t}`,
                    ],
                }),
                n &&
                    null != l &&
                    (0, r.jsx)(nt.$n, {
                        className: sr.RW,
                        size: nt.$n.Sizes.TINY,
                        color: nt.$n.Colors.RED,
                        look: nt.$n.Looks.OUTLINED,
                        onClick: l,
                        children: "Delete",
                    }),
            ],
        });
    },
    su = [
        { id: "1h", label: "1 hour", value: l9.j.PREMIUM_TIER_2_1_HOUR },
        { id: "1d", label: "1 day", value: l9.j.PREMIUM_TIER_2_1_DAY },
        { id: "3d", label: "3 days", value: l9.j.PREMIUM_TIER_2_3_DAY },
    ];
function sm() {
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
        } = si();
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
                className: so.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: so.dL,
                        children: [
                            (0, r.jsx)(D.E, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, r.jsxs)(I.D, {
                                onClick: () => t(!e),
                                className: sr.As,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Info" }),
                                    }),
                                    (0, r.jsx)(l7.A, { direction: e ? l7.A.Directions.UP : l7.A.Directions.DOWN }),
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
                        className: k()([sr.uW, so.Uo]),
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: su,
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
                        className: sr.uW,
                        children: [
                            (0, r.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: so.dL,
                                children: [
                                    (0, r.jsx)(D.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: sr.GC,
                                        children: [
                                            (0, r.jsx)(nt.$n, {
                                                disabled: j,
                                                size: nt.$n.Sizes.TINY,
                                                color: nt.$n.Colors.PRIMARY,
                                                look: nt.$n.Looks.OUTLINED,
                                                onClick: () => g(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(nt.$n, {
                                                disabled: j,
                                                size: nt.$n.Sizes.TINY,
                                                color: nt.$n.Colors.RED,
                                                look: nt.$n.Looks.OUTLINED,
                                                onClick: () => p(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(nt.$n, {
                                                disabled: j,
                                                look: nt.$n.Looks.BLANK,
                                                size: nt.$n.Sizes.ICON,
                                                onClick: u,
                                                children: (0, r.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, r.jsx)(l4.f, { size: "xs", color: "currentColor" }),
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
                                                    sc,
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
                                            children: i.map((e) => (0, r.jsx)(sc, { entitlement: e }, e.id)),
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
var sh = a(390544),
    sx = a(396748),
    sp = a(522055),
    sg = a(661202);
function sv() {
    let e = (0, M.bG)([aY.A], () => aY.A.getGuildId()),
        t = (0, M.bG)([aK.A], () => aK.A.getGuild(e)?.name),
        a = (0, M.bG)([sp.A], () => sp.A.getStateForGuild(e)?.instances),
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
                Object.values(sh.M).map((e) =>
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
              className: sg.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: sg.uW,
                      children: (0, r.jsx)(w.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: sg.uW,
                      children: [
                          (0, r.jsx)(D.E, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${n?.name}`,
                          }),
                          (0, r.jsx)("div", { className: sg.UD, children: s }),
                          (0, r.jsx)(D.E, { variant: "eyebrow", children: "Remove Server Info" }),
                          (0, r.jsx)("div", {
                              className: sg.UD,
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
                                  (0, sx.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
function sj(e, t) {
    let a = "boolean" == typeof t ? t : !aT.Ay.get(e);
    tA.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var sb = a(460281);
function sf(e) {
    let { devSettingsCategory: t } = e,
        a = (0, M.bG)([aT.Ay], () => aT.Ay.allByCategory(t), [t], M.My),
        n = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: n }] = e;
                    return (0, r.jsx)(v.d, { label: n, description: t, checked: a, onChange: (e) => sj(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: k()(tT.nd, sb.n), children: n });
}
var sy = a(950305),
    s_ = a(231483),
    sE = a(597770),
    sC = a(433492),
    sS = a(695458),
    sN = a(796140),
    sA = a(268791),
    sk = a(836480),
    sI = a(855473),
    sD = a(626258),
    sT = a(420854),
    sO = a(373846),
    sR = a(657044),
    sw = a(141060),
    sM = a(608599),
    sL = a(685761),
    sP = a(157225),
    sU = a(362704),
    sG = a(625903),
    sF = a(628284),
    sB = a(320448),
    s$ = a(562708),
    sV = a(830215),
    sW = a(381689),
    sz = a(889227),
    sH = a(499785),
    sK = a(315069);
class sY extends sK.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids);
    }
    static fromServer(e) {
        return new sY(e);
    }
    setPassword(e) {
        return (this.password = e), this;
    }
}
let sq = { pools: null, users: null };
function sJ(e) {
    null == sq.users && (sq.users = new Map()), sq.users.set(e.id, new sz.A(e));
}
class sQ extends M.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (sq.pools = new Map(Object.entries(e.pools))),
            null != e.users && (sq.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != sq.pools ? Object.fromEntries(sq.pools) : null,
            users: null != sq.users ? Object.fromEntries(sq.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(sq.users?.values() ?? []).filter((t) => sq.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return sq.pools?.get(e) ?? null;
    }
    getUser(e) {
        return sq.users?.get(e) ?? null;
    }
    getPools() {
        return null === sq.pools ? null : Array.from(sq.pools.values());
    }
}
let sX = new sQ(tA.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        null == sq.pools && (sq.pools = new Map()), sq.pools.set(t.id, t), a.forEach(sJ);
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = sq.pools?.get(t);
        if (null == a) return !1;
        a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                sq.users?.delete(e);
            }),
            sq.pools?.delete(t);
    },
});
var sZ = a(835002);
async function s0(e, t) {
    return await sH.A.get({
        url: J.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: s$.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: a, body: n } = e;
            if (!a) return void sW.A.showFailedToast(sZ.OB.GENERIC_ERROR);
            let { generated_pool: l, users: s } = n;
            tA.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: sY.fromServer(l).setPassword(t),
                users: s.map((e) => new sz.A(e)),
            });
        })
        .catch(() => (sW.A.showFailedToast(sZ.OB.GENERIC_ERROR), null));
}
var s1 = a(844330),
    s2 = a(277851);
let s8 = [
        sy.n,
        s_.l,
        sE.o,
        sC.K,
        sS.m,
        sN.c,
        sA.$,
        sk.Q,
        sI.Z,
        sD.A,
        sT.E,
        sO.C,
        sR._,
        sw.i,
        sM.L,
        sL.f,
        sP.N,
        sU.Y,
        sG.Z,
    ],
    s6 = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ],
    s3 = () => {
        let [e, t] = o.useState(""),
            [a, n] = o.useState(""),
            [l, s] = o.useState(!1);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("form", {
                    onSubmit: async (l) => {
                        l.preventDefault(), s(!0);
                        try {
                            await s0(e, a), t(""), n("");
                        } finally {
                            s(!1);
                        }
                    },
                    children: (0, r.jsxs)(O.B, {
                        direction: "vertical",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, r.jsxs)(O.B, {
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
                            (0, r.jsxs)(O.B, {
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
    s5 = (e) => {
        let { pool: t } = e,
            { id: a, summary: n } = t,
            l = sX.getUsersForPool(a),
            s = (0, M.bG)([nh.default], () => nh.default.getId()),
            i = s8[Number(a) % s8.length],
            d = s6[Number(a) % s6.length],
            c = o.useCallback(() => {
                tA.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
            }, [a]);
        return (0, r.jsx)(O.B, {
            direction: "horizontal",
            align: "start",
            justify: "space-between",
            children: (0, r.jsx)(s1.A, {
                icon: (0, r.jsx)(D.E, {
                    variant: "text-md/medium",
                    color: d,
                    className: s2.td,
                    children: (0, r.jsx)(i, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
                title: n,
                className: s2.JC,
                subtitle: `${l.length} users`,
                children: (0, r.jsxs)(O.B, {
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
                                                            let a = sX.getUser(t);
                                                            if (null == a) throw Error("User not found");
                                                            let n = sX.getPool(e)?.password;
                                                            if (null == n) throw Error("Pool password not found");
                                                            if (null == a.email) throw Error("User email not found");
                                                            sV.A.login({
                                                                login: a.email,
                                                                password: n,
                                                                isMultiAccount: !0,
                                                                source: "generated_test_user",
                                                            }).catch(
                                                                () => (sW.A.showFailedToast(sZ.OB.GENERIC_ERROR), null),
                                                            );
                                                        })(t.id, e.id);
                                                },
                                                "aria-disabled": s === e.id,
                                                className: k()(s2.vk, { [s2.Pe]: s === e.id }),
                                                children: (0, r.jsxs)(
                                                    O.B,
                                                    {
                                                        direction: "horizontal",
                                                        align: "center",
                                                        justify: "space-between",
                                                        gap: 8,
                                                        padding: { right: 8 },
                                                        fullWidth: !1,
                                                        children: [
                                                            (0, r.jsxs)(O.B, {
                                                                direction: "horizontal",
                                                                align: "center",
                                                                gap: 8,
                                                                fullWidth: !1,
                                                                className: k()({ [s2.WP]: s === e.id }),
                                                                children: [
                                                                    (0, r.jsx)(sy.n, {
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
                                                                                className: s2.c1,
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
                                                                      children: (0, r.jsx)(sF.y, {
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                                  })
                                                                : (0, r.jsx)(sB._, {
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
                            className: s2.UD,
                            children: (0, r.jsx)(h.$, {
                                icon: ns.u,
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
    let e = (0, M.yK)([sX], () => sX.getPools() ?? []);
    return (0, r.jsxs)(O.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: s2.kL,
        children: [
            (0, r.jsx)(s3, {}),
            (0, r.jsx)(d.Ip, { className: s2.Ik, children: e?.map((e) => (0, r.jsx)(s5, { pool: e }, e.id)) }),
        ],
    });
}
var s4 = a(582306),
    s7 = a(528153),
    ie = a(275759),
    it = a(888429);
function ia(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function il() {
    let e = (0, M.bG)([ie.Ay], () => ie.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, M.bG)([ie.Ay], () => ie.Ay.getDevToolCurrentDate()),
        a = (0, M.bG)([ie.Ay], () => ie.Ay.getGiftUnreadNotificationLastDismissedTimes()),
        n = (0, M.bG)([ie.Ay], () => ie.Ay.getMessageGiftIntentLastShownMap()),
        l = (0, M.bG)([ie.Ay], () => ie.Ay.getHighestAffinityFriendAnniversaries()),
        s = (0, M.bG)([ie.Ay], () => ie.Ay.getHighAffinityFriendAnniversaries()),
        i = (0, M.bG)([ie.Ay], () => ie.Ay.getProfilePopoutGiftIntentsDismissMap()),
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
            className: it.l$,
            children: [
                (0, r.jsx)(D.E, { className: it.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, r.jsx)("div", {
                    className: it.Pm,
                    children: (0, r.jsxs)(O.B, {
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
                        className: it.Pm,
                        children: (0, r.jsxs)(O.B, {
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
                                    (0, r.jsxs)(O.B, {
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
                                    (0, r.jsxs)(O.B, {
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
                    className: it.Pm,
                    children: (0, r.jsxs)(O.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(s4.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? ne()(t) : void 0,
                                onSelect: (e) => {
                                    let t = ne()(),
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
                    className: it.Pm,
                    children: (0, r.jsxs)(O.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(O.B, {
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
                                            (0, lg._N)(t7.M.GIFT_INTENT_MESSAGE);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsx)(D.E, {
                                variant: "text-xs/normal",
                                children: null != o ? `Dismissed at: ${ia(o)}` : "Not dismissed",
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: it.Pm,
                    children: (0, r.jsxs)(O.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(O.B, {
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
                                (0, r.jsxs)(O.B, {
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
                                                { variant: "text-xs/normal", children: [l, ": ", ia(a)] },
                                                t,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: it.Pm,
                    children: (0, r.jsxs)(O.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(O.B, {
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
                                (0, r.jsxs)(O.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift notification shown timestamps:",
                                        }),
                                        a.map((e, t) =>
                                            (0, r.jsx)(D.E, { variant: "text-xs/normal", children: ia(e) }, t),
                                        ),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: it.Pm,
                    children: [
                        (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Send gift notification" }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Send",
                            onClick: () => {
                                s7.A.sendGiftingNotificationIfEligible();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: it.Pm,
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
                    className: it.Pm,
                    children: (0, r.jsxs)(O.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(O.B, {
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
                                (0, r.jsxs)(O.B, {
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
                                                { variant: "text-xs/normal", children: [l, ": ", ia(a)] },
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
var is = a(460890),
    ii = a(349288),
    ir = a(517461),
    io = a(214947),
    id = a(403581),
    ic = a(34188);
let iu = [
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
var im = a(545406);
let ih = [0, 0.5, 1],
    ix = ["Center", "Inner ring", "Outer ring"],
    ip = ih.length,
    ig = "ILLO_BLUE",
    iv = "ILLO_BLUE_40",
    ij = Array.from({ length: ip }, () => iv),
    ib = Array.from({ length: ip }, () => ig),
    iy = ["1", "0.5", "0"],
    i_ = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    iE = [
        { label: "Light", value: J.NJ8.LIGHT, id: J.NJ8.LIGHT },
        { label: "Dark", value: J.NJ8.DARK, id: J.NJ8.DARK },
        { label: "Darker", value: J.NJ8.DARKER, id: J.NJ8.DARKER },
        { label: "Midnight", value: J.NJ8.MIDNIGHT, id: J.NJ8.MIDNIGHT },
    ],
    iC = { [J.NJ8.MIDNIGHT]: J.NJ8.DARKER, [J.NJ8.DARKER]: J.NJ8.DARK, [J.NJ8.LIGHT]: J.NJ8.DARK },
    iS = { [J.NJ8.LIGHT]: "light", [J.NJ8.DARK]: "ash", [J.NJ8.DARKER]: "dark", [J.NJ8.MIDNIGHT]: "onyx" },
    iN = [
        { id: "friends", icon: io.$, text: "Friends" },
        { id: "nitro", icon: id.t, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: ic.U, text: "Shop", useCustomGradient: !0 },
    ],
    iA = iu.map((e) => ({ label: e, value: e, id: e })),
    ik = Object.fromEntries(
        iu.map((e) => [
            e,
            Object.keys(eR.A.unsafe_rawColors)
                .filter((t) => String(t).startsWith(e + "_"))
                .sort(
                    (e, t) =>
                        parseInt(String(e).split("_").pop() ?? "0", 10) -
                        parseInt(String(t).split("_").pop() ?? "0", 10),
                )
                .map((e) => {
                    let t = String(e).split("_").pop() ?? e,
                        [a, n, l] = eR.A.unsafe_rawColors[e].resolve().rgba(),
                        s =
                            (0.299 * a + 0.587 * n + 0.114 * l) / 255 > 0.5
                                ? eR.A.unsafe_rawColors.OPACITY_BLACK_28
                                : eR.A.unsafe_rawColors.OPACITY_WHITE_28,
                        i = (0, r.jsx)("span", {
                            className: im.oP,
                            style: { background: `rgb(${a}, ${n}, ${l})`, border: `1px solid ${s.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: i };
                }),
        ]),
    );
var iI = a(306327);
function iD(e, t, a) {
    return e.map((e, n) => (n === t ? a : e));
}
function iT(e, t) {
    let [a, n, l, s] = eR.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: n, b: l, a: s };
}
function iO(e, t) {
    let a = eR.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function iR(e) {
    let { yaml: t, label: a } = e,
        n = o.useCallback(() => {
            navigator.clipboard.writeText(t);
        }, [t]);
    return (0, r.jsxs)(O.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(O.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                justify: "space-between",
                children: [
                    (0, r.jsx)(D.E, { variant: "text-md/semibold", children: a }),
                    (0, r.jsx)(eI.K, {
                        icon: na.T,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: n,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: im.RP, children: t }),
        ],
    });
}
function iw(e) {
    let { allResolvedStops: t } = e,
        a = o.useMemo(
            () =>
                ix.map((e, a) => {
                    let n;
                    return (
                        (n = iE
                            .map((e) => {
                                let n,
                                    l,
                                    { value: s } = e,
                                    i = iS[s],
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
    return (0, r.jsxs)(O.B, {
        gap: 16,
        children: [
            (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Token YAML" }),
            ix.map((e, t) => (0, r.jsx)(iR, { yaml: a[t], label: e }, e)),
        ],
    });
}
function iM(e, t, a) {
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
    return new iI.A("srgb", [
        (e.r * (1 - r) + n * r) / 255,
        (e.g * (1 - r) + l * r) / 255,
        (e.b * (1 - r) + s * r) / 255,
    ]);
}
function iL(e, t, a) {
    let n = a.map((e) => {
            let [t, a, n] = eR.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: n, opacity: e.opacity, position: e.position };
        }),
        l = 1 / 0,
        s = (e) => {
            e < l && (l = e);
        };
    for (let a of n) s(e.contrast(iM(t, n, a.position), "WCAG21"));
    for (let a = 0; a < n.length - 1; a++) {
        let { contrast: l } = (function (e, t, a, n, l) {
            let s = 1 / 0,
                i = n;
            for (let r = 0; r <= 100; r++) {
                let o = n + (r / 100) * (l - n),
                    d = a.contrast(iM(e, t, o), "WCAG21");
                d < s && ((s = d), (i = o));
            }
            return { contrast: s, position: i };
        })(t, n, e, n[a].position, n[a + 1].position);
        s(l);
    }
    return Math.round(100 * l) / 100;
}
function iP(e) {
    let [t, a, n] = eR.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [l, s, i] = eR.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = eR.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new iI.A("srgb", [t / 255, a / 255, n / 255]),
        background: { r: l * (1 - c) + r * c, g: s * (1 - c) + o * c, b: i * (1 - c) + d * c },
    };
}
function iU() {
    return {
        colors: Array.from({ length: ip }, () => void 0),
        scales: Array.from({ length: ip }, () => void 0),
        opacities: Array.from({ length: ip }, () => void 0),
    };
}
function iG() {
    return {
        [J.NJ8.LIGHT]: iU(),
        [J.NJ8.DARK]: { colors: [...ij], scales: [...ib], opacities: [...iy] },
        [J.NJ8.DARKER]: iU(),
        [J.NJ8.MIDNIGHT]: iU(),
    };
}
function iF() {
    let e = (0, is.G9)(),
        [t, a] = o.useState(J.NJ8.DARK),
        [n, l] = (0, ir.V)("DevToolsGradientContrastPanel_themeStops", iG()),
        s = n ?? iG(),
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
                        (0, r.jsxs)(O.B, {
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
                                              (0, r.jsx)(lS.Q, {
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
                                for (let s = 0; s < ip; s++) {
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
                                        d = iC[d];
                                    }
                                    a.push(i ?? ij[s]), n.push(r ?? ib[s]), l.push(o ?? iy[s]);
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
        _ = o.useMemo(() => iP({ theme: t, saturation: 1 }), [t]),
        E = o.useMemo(() => {
            let e = [];
            for (let t = 0; t < ip; t++) {
                let a = parseFloat(f.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: f.colors[t], opacity: a, position: ih[t] });
            }
            return e;
        }, [f]),
        C = o.useMemo(() => {
            if (null == E) return null;
            let { text: e, background: t } = _;
            return ix.map((a, n) =>
                ik[f.scales[n]].map((a) => {
                    let l = iL(e, t, iD(E, n, { ...E[n], color: a.value }));
                    return { ...a, trailing: `(${l}:1)` };
                }),
            );
        }, [E, _, f.scales]),
        S = o.useMemo(() => {
            try {
                return iE.map((e) => {
                    let { value: t, label: a } = e,
                        n = b[t],
                        l = [];
                    for (let e = 0; e < ip; e++) {
                        let s = parseFloat(n.opacities[e]);
                        if (isNaN(s) || s < 0 || s > 1) return { theme: t, label: a, result: null };
                        l.push({ color: n.colors[e], opacity: s, position: ih[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: n, background: l } = iP(t),
                                s = iL(n, l, e),
                                i = s >= 4.5;
                            if (!i)
                                for (let t = 0; t < e.length; t++) {
                                    let s = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return iu.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == s) continue;
                                    let i = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of ik[s]) {
                                        if (o === e[t].color) continue;
                                        let s = iL(n, l, iD(e, t, { ...e[t], color: o }));
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
        className: im.XG,
        children: (0, r.jsxs)(O.B, {
            gap: 24,
            padding: 8,
            className: im.zr,
            children: [
                (0, r.jsx)(w.D, {
                    variant: "heading-lg/medium",
                    children: "Tab Hover Gradient Token Generator & Contrast Checker",
                }),
                (0, r.jsxs)(O.B, {
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
                                (0, r.jsx)(ii.Anchor, {
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
                (0, r.jsxs)(O.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: im.G9,
                            children: ix.map((e, t) => {
                                let a = "" !== i[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)(O.B, {
                                                gap: 0,
                                                className: im.hi,
                                                children: [
                                                    (0, r.jsx)(D.E, { variant: "text-md/medium", children: e }),
                                                    (0, r.jsx)(lS.Q, {
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
                                                    let a = ik[e][0]?.value;
                                                    y((n) => ({
                                                        ...n,
                                                        scales: iD(n.scales, t, e),
                                                        colors: null != a ? iD(n.colors, t, a) : n.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: iA,
                                            }),
                                            (0, r.jsx)(t1.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: f.colors[t],
                                                onSelectionChange: (e) =>
                                                    y((a) => ({ ...a, colors: iD(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: C?.[t] ?? ik[f.scales[t]],
                                            }),
                                            (0, r.jsx)(p.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: f.opacities[t],
                                                onChange: (e) => y((a) => ({ ...a, opacities: iD(a.opacities, t, e) })),
                                                placeholder: "0\u20131",
                                            }),
                                            (0, r.jsx)(p.k, {
                                                label: `Hex${a && null != u[t] ? ` (dE: ${u[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: i[t],
                                                onChange: (e) => {
                                                    c((a) => iD(a, t, e));
                                                    let a = (function (e) {
                                                        if (!i_.test(e)) return null;
                                                        try {
                                                            return new iI.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = iv,
                                                                a = ig,
                                                                n = 1 / 0;
                                                            for (let l of iu)
                                                                for (let s of ik[l]) {
                                                                    let i = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, n] = eR.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new iI.A("srgb", [
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
                                                        m((a) => iD(a, t, e.deltaE)),
                                                            y((a) => ({
                                                                ...a,
                                                                scales: iD(a.scales, t, e.scale),
                                                                colors: iD(a.colors, t, e.color),
                                                            }));
                                                    } else m((e) => iD(e, t, null));
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
                (0, r.jsx)(is.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(eT.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)(O.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: im.$8,
                                        style: { background: eR.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: iN.map((e, t) =>
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
                                                        hoverGradientStart: iT(f.colors[0], parseFloat(f.opacities[0])),
                                                        hoverGradientMiddle: iT(
                                                            f.colors[1],
                                                            parseFloat(f.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: iT(f.colors[2], parseFloat(f.opacities[2])),
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
                    (0, r.jsxs)(O.B, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Results" }),
                            S.map((e) => {
                                let { theme: t, label: a, result: n } = e;
                                return null != n
                                    ? (0, r.jsxs)(
                                          O.B,
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
                                                      (0, r.jsxs)(O.B, {
                                                          gap: 4,
                                                          children: [
                                                              (0, r.jsx)(D.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: "Suggestion:",
                                                              }),
                                                              (0, r.jsxs)(D.E, {
                                                                  variant: "text-sm/normal",
                                                                  children: [
                                                                      ix[n.suggestion.stopIndex],
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
                (0, r.jsx)(iw, { allResolvedStops: b }),
            ],
        }),
    });
}
var iB = a(820739),
    i$ = a(230135),
    iV = a(45780),
    iW = a(868652),
    iz = a(859241);
let iH = [
        t7.M.GUILD_POWERUP_PERKS_COACHMARK,
        t7.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        t7.M.GUILD_POWERUP_NOTIFICATION,
        t7.M.GUILD_TAG_AVAILABLE_COACHMARK,
        t7.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
    ],
    iK = [
        t7.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        t7.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        t7.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        t7.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        t7.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    iY = [t7.V.ADOPT_CLAN_IDENTITY_NOTICE],
    iq = [
        t7.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        t7.M.VANITY_URL_POWERUP_ROLLBACK_MODAL,
        t7.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
    ];
function iJ(e) {
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
var iQ = a(861671);
async function iX(e, t, a) {
    await nz.Bo.patch({
        url: J.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : ne()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, iB.VU)(e),
        (0, iW.Xd)(e, !0);
}
async function iZ(e) {
    await nz.Bo.post({ url: J.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function i0() {
    let e = (0, M.bG)([aY.A], () => aY.A.getGuildId()),
        t = (0, M.bG)([aK.A], () => aK.A.getGuild(e)?.name),
        a = (0, M.yK)([ae.A], () => [...iK, ...iY].filter((t) => null != e && (0, iV.zs)(t, e))),
        n = (0, M.yK)([iz.A], () => (null != e ? (iz.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(d.Ip, {
            className: iQ.kL,
            children: [
                (0, r.jsx)("div", {
                    className: iQ.uW,
                    children: (0, r.jsx)(w.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                }),
                (0, r.jsxs)("div", {
                    className: iQ.uW,
                    children: [
                        (0, r.jsx)(D.E, {
                            variant: "eyebrow",
                            className: iQ.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, iW.qM)();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iQ.uW,
                    children: [
                        (0, r.jsx)(D.E, { variant: "eyebrow", className: iQ.wx, children: "Reset Progress Bar State" }),
                        (0, r.jsx)(h.$, { variant: "primary", text: "Reset", onClick: i$.O }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iQ.uW,
                    children: [
                        (0, r.jsx)(D.E, { variant: "eyebrow", children: "Set Warning State" }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        iX(e, n.slice(Math.floor(n.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        iX(e, n, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iQ.uW,
                    children: [
                        (0, r.jsx)(D.E, { variant: "eyebrow", className: iQ.wx, children: "Reset User Level DCs" }),
                        (0, r.jsx)(O.B, {
                            gap: 16,
                            children: iH.map((e) => (0, r.jsx)(lm, { className: iQ.z6, content: t7.M[e] }, t7.M[e])),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: iQ.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Guild Level DCs",
                        children: iK.map((t) =>
                            (0, r.jsx)(
                                v.d,
                                {
                                    label: iJ(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, iV._$)(t, e, !1)
                                            : ((0, lg._N)(t7.M.GUILD_POWERUP_NOTIFICATION), (0, iV.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: iQ.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: iY.map((t) =>
                            (0, r.jsx)(
                                v.d,
                                {
                                    label: iJ(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, iV._$)(t, e, !1)
                                            : ((0, lg._N)(t7.M.GUILD_POWERUP_NOTIFICATION), (0, iV.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: iQ.uW,
                    children: [
                        (0, r.jsx)(D.E, {
                            variant: "eyebrow",
                            className: iQ.wx,
                            children: "Reset Powerup Rollback DCs",
                        }),
                        iq.map((e) => (0, r.jsx)(lm, { className: iQ.z6, content: t7.M[e] }, t7.M[e])),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iQ.uW,
                    children: [
                        (0, r.jsx)(D.E, {
                            variant: "eyebrow",
                            className: iQ.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                iZ(e);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(h.$, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, sx.Wp)(!1);
                    },
                }),
            ],
        });
}
var i1 = a(450510),
    i2 = a(320681);
function i8(e) {
    let { hotspotLocation: t } = e,
        [a, n] = (0, M.yK)([i1.HP], () => [i1.HP.hasHotspot(t, !0), i1.HP.getHotspotOverride(t)]);
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
        onSelectionChange: (e) => (null != e ? (0, i1.Kl)(t, e) : (0, i1.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function i6() {
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsx)(u.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: i2.IN,
            children: (0, r.jsx)(O.B, {
                gap: 20,
                children: Object.keys(i1._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, r.jsx)(i8, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var i3 = a(919523),
    i5 = a(855522),
    i9 = a(37646),
    i4 = a(773669);
function i7() {
    let e = (0, M.bG)([i4.default], () => i4.default.locale),
        [t, a] = o.useState(),
        n = (0, i3.runtimeHashMessageKey)(t ?? ""),
        l = o.useMemo(() => aQ.t[n], [n]);
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
                    (0, r.jsx)(nE, { name: "System", children: aQ.systemLocale }),
                    (0, r.jsx)(nE, { name: "@discord/intl", children: aQ.intl.currentLocale }),
                    (0, r.jsx)(nE, { name: "common i18n", children: i5.A.getLocale() }),
                    (0, r.jsx)(nE, { name: "Moment", children: ne().locale() }),
                ],
            }),
            (0, r.jsxs)(aO.Ay, {
                children: [
                    (0, r.jsx)(aO.Ay.Icon, { icon: i9.U, tooltip: "Messages" }),
                    (0, r.jsx)(aO.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(n_, {
                children: (0, r.jsx)(nE, { name: "Unique Rendered Main Messages", children: Object.keys(aQ.t).length }),
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
            (0, r.jsx)(aR.A, { data: l?.(e) }),
        ],
    });
}
var re = a(434404);
function rt() {
    let { node: e } = (0, W.Ay)(re.F, "");
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)(V.A, { node: e }, e.key),
        }),
    });
}
var ra = a(663066),
    rn = a(80556),
    rl = a(907135),
    rs = a(665095),
    ri = a(87404);
function rr() {
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)("div", {
            className: so.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: so.uW,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Verification Layer" }),
                        (0, r.jsx)("div", {
                            className: so.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: () => {
                                    (0, ra.B8)(() => (0, r.jsx)(rs.A, {}), { layerKey: ri._s, Layer: rn.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: so.uW,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Safety Flow" }),
                        (0, r.jsx)("div", {
                            className: so.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: () => {
                                    (0, ra.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, r.jsx)(rl.A, { onClose: t });
                                        },
                                        { layerKey: ri._s, Layer: rn.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: so.uW,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Layer Controls" }),
                        (0, r.jsx)("div", {
                            className: so.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: () => {
                                    ra.xr.setState({ fullScreenLayers: [] });
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
var ro = a(687813),
    rd = a(604121);
let rc = {
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
function ru(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let n = new Uint8Array(e);
                    ro.$1(n, (e, n) => {
                        null != e && a(e);
                        let l = Object.keys(n).reduce((e, t) => ({ ...e, [t]: JSON.parse(ro.he(n[t])) }), {}),
                            s = l["manifest.json"];
                        t(l[`animations/${s.animations[0].id}.json`]);
                    });
                }),
        );
}
function rm() {
    let [e, t] = o.useState(void 0),
        [a, n] = o.useState(400),
        [l, s] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)(O.B, {
            gap: 24,
            children: [
                (0, r.jsx)(t1.Z, {
                    options: Object.keys(rc).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)(O.B, {
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
                        let t = rc[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(ru).then(eG().cloneDeep)
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
                            rd.a,
                            {
                                importData: () => {
                                    let t = rc[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(ru).then(eG().cloneDeep)
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
var rh = a(442433),
    rx = a(395671);
let rp = {
        ClipsContextMenu: async () => {
            let { default: e } = await a.e("40638").then(a.bind(a, 562733));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await a.e("32986").then(a.bind(a, 728033)),
                t = new rx.kJ({
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
            return () => (0, r.jsx)(e, { application: t, channelId: "987654321", onClose: rh.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("9004"), a.e("19690"), a.e("45322"), a.e("10758")]).then(
                    a.bind(a, 455557),
                ),
                t = Object.values(aK.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("28149"),
                    a.e("77496"),
                    a.e("45333"),
                    a.e("63277"),
                    a.e("48580"),
                    a.e("98600"),
                    a.e("17116"),
                    a.e("88712"),
                    a.e("67972"),
                    a.e("87845"),
                    a.e("35636"),
                    a.e("73099"),
                    a.e("47199"),
                    a.e("89861"),
                    a.e("49089"),
                    a.e("24351"),
                    a.e("61175"),
                    a.e("4974"),
                    a.e("78067"),
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
                    a.e("81202"),
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
            let { default: e } = await Promise.all([
                a.e("89861"),
                a.e("26132"),
                a.e("81202"),
                a.e("43456"),
                a.e("44491"),
            ]).then(a.bind(a, 907206));
            return (t) => (0, r.jsx)(e, { ...t, onClose: rh.Z_ });
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
                        console.log("Leave role clicked"), (0, rh.Z_)();
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
                    a.e("78067"),
                    a.e("67972"),
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
                              console.log("Add form field:", e), (0, rh.Z_)();
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
                t = Object.values(aK.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rh.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("4974"), a.e("71719"), a.e("14878"), a.e("66016")]).then(
                    a.bind(a, 316173),
                ),
                t = Object.values(aK.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rh.Z_ });
        },
    },
    rg = {
        GuildShopSortOptions: o.lazy(async () => {
            let { default: e } = await Promise.all([a.e("83518"), a.e("55197"), a.e("50974")]).then(a.bind(a, 324269)),
                { default: t } = await a.e("55197").then(a.bind(a, 558060));
            return { default: () => (0, r.jsx)(t, { defaultSortOption: void 0, children: (0, r.jsx)(e, {}) }) };
        }),
    };
function rv() {
    let e = o.useMemo(
            () =>
                Object.keys(rp)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = o.useMemo(
            () =>
                Object.keys(rg)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(
            (e) => {
                null != a && (0, rh.L3)(e, rp[a]);
            },
            [a],
        ),
        c = null != l ? rg[l] : null;
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)(O.B, {
            className: so.l$,
            gap: 16,
            children: [
                (0, r.jsxs)(O.B, {
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
                (0, r.jsxs)(O.B, {
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
                (0, r.jsxs)(O.B, {
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
                (0, r.jsx)(O.B, {
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
var rj = a(253506),
    rb = a(665260),
    rf = a(97808),
    ry = a(778712),
    r_ = a(308528),
    rE = a(571694),
    rC = a(704844),
    rS = a(567761),
    rN = a(716371),
    rA = a(825801);
function rk() {
    let e = (0, M.yK)([rS.default], () => rS.default.getSortedChannels()[1]),
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
                            ? (0, r.jsx)(rf.eu, { src: (0, rE.Y)(t), "aria-hidden": !0, size: ry._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        s = o.useCallback(() => {
            if (null == n || !n.isPrivate()) return;
            let e = (0, rb.PQ)(n.recipientFlags ?? 0, rj.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            rC.A.updatePrivateChannelRecipientFlags(n.id, e);
        }, [n]),
        i = !!n?.isPrivate() && (0, rb.Lt)(n.recipientFlags ?? 0, rj.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: rA.gs,
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
function rI() {
    let e = o.useCallback(() => {
        r_.A.openPrivateChannel({ recipientIds: [rN.K] });
    }, []);
    return (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function rD() {
    let e = (0, M.bG)([aT.Ay], () => aT.Ay.allByCategory(aT.xW.MESSAGING), [], M.My).map((e) => {
        let [t, a, { label: n }] = e;
        return (0, r.jsx)(v.d, { label: n, description: t, checked: a, onChange: (e) => sj(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: k()(tT.nd, rA.nd),
        children: [
            e,
            (0, r.jsx)("div", { className: rA.yF }),
            (0, r.jsx)(rk, {}),
            (0, r.jsx)("div", { className: rA.yF }),
            (0, r.jsx)(rI, {}),
        ],
    });
}
var rT = a(459838),
    rO = a(772707),
    rR = a(150934),
    rw = a(598653),
    rM = a(166403),
    rL = a(625494),
    rP = a(204925);
let rU = {
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
                impression: { impressionName: s$.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
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
        return (t) => (0, r.jsx)(e, { ...t, source: rP.w_.NSFW_SERVER });
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
        let { default: e } = await Promise.all([a.e("78925"), a.e("82672"), a.e("89545"), a.e("11493")]).then(
            a.bind(a, 914724),
        );
        return (t) => (0, r.jsx)(e, { error: null, working: !1, validPhone: !1, ...t });
    },
    VoiceSettingsModal: async () => {
        let { default: e } = await a.e("96531").then(a.bind(a, 880510));
        return (t) => (0, r.jsx)(e, { ...t, mediaEngineContext: rT.x.DEFAULT, subtitle: "Devtools subtitle" });
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
        let { default: e } = await Promise.all([a.e("67972"), a.e("10534")]).then(a.bind(a, 308229));
        return (t) => (0, r.jsx)(e, { ...t, videoEnabled: !1, onEnable: () => console.log("Camera enabled") });
    },
    CameraPreviewModalWithVideo: async () => {
        let { default: e } = await Promise.all([a.e("67972"), a.e("10534")]).then(a.bind(a, 308229));
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
                                (0, r.jsx)(rR.S, {
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
                                (0, r.jsx)(rR.S, {
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
        let { default: e } = await Promise.all([a.e("98600"), a.e("46313")]).then(a.bind(a, 336496));
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
            a.e("78925"),
            a.e("30244"),
            a.e("98189"),
            a.e("48370"),
            a.e("72875"),
        ]).then(a.bind(a, 320742));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await Promise.all([a.e("44616"), a.e("85579")]).then(a.bind(a, 785606)),
            t = rM.A.getPremiumGroupSubscription();
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
        let { default: e } = await Promise.all([a.e("83307"), a.e("20577"), a.e("80443"), a.e("20723")]).then(
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
        let { default: e } = await Promise.all([a.e("44899"), a.e("82911"), a.e("22220")]).then(a.bind(a, 639719));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    DisableRiskyPermsModal: async () => {
        let { default: e } = await Promise.all([a.e("59066"), a.e("52823"), a.e("71905")]).then(a.bind(a, 868952)),
            t = Object.values(aK.A.getGuilds())[0];
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await Promise.all([a.e("99512"), a.e("27917"), a.e("73152"), a.e("25281")]).then(
            a.bind(a, 516259),
        );
        return (t) => (0, r.jsx)(e, { ...t });
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([
            a.e("24798"),
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
function rG() {
    let e = o.useMemo(
            () =>
                Object.keys(rU)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)("div", {
            className: so.l$,
            children: [
                (0, r.jsx)("section", {
                    className: so.uW,
                    children: (0, r.jsxs)(O.B, {
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
                                onClick: () => null != t && (0, eO.openModalLazy)(rU[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: so.uW,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: so.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, rw.o)(!0), rL._.dispatch(J.jej.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var rF = a(933832),
    rB = a(472229),
    r$ = a(694080),
    rV = a(669316),
    rW = a(354670),
    rz = a(428262);
let rH = async () => {
        try {
            let { body: e } = await nz.Bo.get({ url: J.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
            return e;
        } catch (e) {
            return [];
        }
    },
    rK = async (e, t) => {
        try {
            await nz.Bo.post({ url: J.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, r$._D)();
        }
    },
    rY = async (e, t) => {
        try {
            await nz.Bo.del({ url: J.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, r$._D)();
        }
    },
    rq = async () => {
        try {
            let { body: e } = await nz.Bo.get({ url: J.Rsh.USER_OFFERS, rejectWithError: !0 });
            return { trial: e.trial, discount: e.discount.map(rV.A.createFromServer) };
        } catch (e) {
            return { trial: [], discount: [] };
        }
    },
    rJ = async () => {
        try {
            await nz.Bo.del({ url: J.Rsh.USER_OFFERS, rejectWithError: !0 });
        } catch {
        } finally {
            await rW.A.forceReset(), await (0, r$._D)();
        }
    },
    rQ = async (e) => {
        await nz.Bo.post({ url: J.Rsh.CREATE_REVERSE_TRIAL, body: { ends_at: e }, rejectWithError: !0 });
    };
function rX(e) {
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
        E = j?.sku_id === st.pe.TIER_0,
        C = async () => {
            u(!0), y ? await S({ expiresAt: null }) : await (0, r$.u1)(t), n(), u(!1);
        },
        S = async (e) => {
            u(!0);
            try {
                await nz.Bo.patch({
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
        _ && (N = "Expired"),
        (0, r.jsxs)("div", {
            className: k()(so.Nr, E ? so.Qf : so.C1),
            children: [
                (0, r.jsx)("div", {
                    className: k()(so.nM, so.S7),
                    children: (0, r.jsx)(w.D, { variant: "heading-lg/semibold", color: "always-white", children: f }),
                }),
                (0, r.jsxs)(I.D, {
                    className: k()(so.nM, so.QB),
                    onClick: () => {
                        (0, nc.C)(x, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(D.E, { variant: "eyebrow", color: "always-white", children: ["Offer: ", x] }),
                        l
                            ? (0, r.jsx)(rF.A, { size: "md", color: "currentColor", className: so.Kk })
                            : (0, r.jsx)(na.T, { size: "xs", color: "currentColor", className: so.Kk }),
                    ],
                }),
                (0, r.jsxs)(I.D, {
                    className: k()(so.nM, so.QB),
                    onClick: () => {
                        (0, nc.C)(v, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(D.E, { variant: "eyebrow", color: "always-white", children: ["Trial: ", v] }),
                        i
                            ? (0, r.jsx)(rF.A, { size: "md", color: "currentColor", className: so.Kk })
                            : (0, r.jsx)(na.T, { size: "xs", color: "currentColor", className: so.Kk }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: so.nM,
                    children: (0, r.jsxs)(D.E, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, rz.re)({
                                intervalType: j?.interval ?? st.WT.MONTH,
                                intervalCount: j?.interval_count ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: so.nM,
                    children: [
                        (0, r.jsxs)(D.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, rB.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nu.Xm)(p),
                            onChange: (e) => {
                                S({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: so.nM,
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
                    className: so.fC,
                    children: [
                        (0, r.jsx)(I.D, {
                            onClick: C,
                            className: k()(so.qS, so.vk, { [so.R1]: y, [so._7]: _ }),
                            children: (0, r.jsx)(D.E, {
                                variant: "eyebrow",
                                color: "Acked" === N ? void 0 : "always-white",
                                children: N,
                            }),
                        }),
                        null != g &&
                            (0, r.jsx)("div", {
                                className: k()(so.qS, so.k3),
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
                        u(!0), await rY(x, "trial"), n(), u(!1);
                    },
                    children: (0, r.jsx)(ns.u, { size: "md", color: "currentColor", className: k()(so.Kk, so.IT) }),
                }),
                (0, r.jsx)("div", { className: k()(so.g4, { [so.VP]: c || m }), children: (0, r.jsx)(e8.y, {}) }),
            ],
        })
    );
}
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
            u(!0), b ? await E({ expiresAt: null }) : await (0, r$.u1)(void 0, t), n(), u(!1);
        },
        E = async (e) => {
            let { expiresAt: t } = e;
            u(!0);
            try {
                await nz.Bo.patch({
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
    let C = "Active";
    return (
        f && (C = "Expired"),
        b && (C = "Acked"),
        (0, r.jsxs)("div", {
            className: k()(so.Nr, so.id),
            children: [
                (0, r.jsx)("div", {
                    className: k()(so.nM, so.S7),
                    children: (0, r.jsx)(w.D, { variant: "heading-lg/semibold", color: "text-default", children: j }),
                }),
                (0, r.jsxs)(I.D, {
                    className: k()(so.nM, so.QB),
                    onClick: () => {
                        (0, nc.C)(x, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(D.E, { variant: "eyebrow", color: "text-default", children: ["Offer: ", x] }),
                        l
                            ? (0, r.jsx)(rF.A, { size: "md", color: "currentColor", className: k()(so.Kk, so.mK) })
                            : (0, r.jsx)(na.T, { size: "xs", color: "currentColor", className: so.Kk }),
                    ],
                }),
                (0, r.jsxs)(I.D, {
                    className: k()(so.nM, so.QB),
                    onClick: () => {
                        (0, nc.C)(g, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(D.E, { variant: "eyebrow", color: "text-default", children: ["Discount: ", g] }),
                        i
                            ? (0, r.jsx)(rF.A, { size: "md", color: "currentColor", className: k()(so.Kk, so.mK) })
                            : (0, r.jsx)(na.T, { size: "xs", color: "currentColor", className: so.Kk }),
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
                    className: so.nM,
                    children: [
                        (0, r.jsxs)(D.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, rB.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, nu.Xm)(p?.toISOString()),
                            onChange: (e) =>
                                E({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: so.fC,
                    children: [
                        (0, r.jsx)(I.D, {
                            onClick: _,
                            className: k()(so.qS, so.vk, { [so.R1]: b, [so._7]: f }),
                            children: (0, r.jsx)(D.E, {
                                variant: "eyebrow",
                                color: "Acked" === C ? void 0 : "always-white",
                                children: C,
                            }),
                        }),
                        y &&
                            (0, r.jsx)("div", {
                                className: k()(so.qS, so.k3),
                                children: (0, r.jsx)(D.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(I.D, {
                    className: so.aR,
                    onClick: async () => {
                        u(!0), await rY(x, "discount"), n(), u(!1);
                    },
                    children: (0, r.jsx)(ns.u, { size: "md", color: "currentColor", className: k()(so.Kk, so.fy) }),
                }),
                (0, r.jsx)("div", { className: k()(so.g4, { [so.VP]: c || m }), children: (0, r.jsx)(e8.y, {}) }),
            ],
        })
    );
}
function r0() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState([]),
        [l, s] = o.useState(),
        [i, c] = o.useState(),
        [u, m] = o.useState([]),
        [p, g] = o.useState([]),
        [v, j] = o.useState(!0),
        [b, f] = o.useState(10080),
        [y, _] = o.useState([]),
        { entitlements: E, deleteFractionalPremium: C, refreshEntitlementList: S } = si();
    o.useEffect(() => {
        S();
    }, [S]),
        o.useEffect(() => {
            _(E.filter((e) => e.sourceType === J.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [E]),
        o.useEffect(() => {
            (0 === e.length || 0 === a.length || v) &&
                rH().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        r = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    t(a), n(r), null == l && s(a[0].value), null == i && c(r[0].value);
                });
        }, [e, a, l, i, v]),
        o.useEffect(() => {
            v &&
                (j(!1),
                rW.A.forceReset(),
                (0, r$._D)(),
                rq().then((e) => {
                    m(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        g(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [v]);
    let N = async () => {
            null != l && (await rK(l, "trial"), j(!0));
        },
        A = async () => {
            null != i && (await rK(i, "discount"), j(!0));
        },
        k = async () => {
            await rJ(), j(!0);
        },
        I = async () => {
            let e = new Date(Date.now() + 60 * b * 1e3).toISOString();
            await rQ(e), S();
        };
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)("div", {
            className: so.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: so.uW,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Utils" }),
                        (0, r.jsxs)("div", {
                            className: so.Uo,
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
                                    onClick: () => (0, lg.xB)(t7.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, lg._N)(t7.M.NAGBAR_NOTICE_OFFER_EXPIRING),
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
                    className: so.uW,
                    children: (0, r.jsxs)("div", {
                        className: so.bd,
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
                    className: so.uW,
                    children: (0, r.jsxs)("div", {
                        className: so.bd,
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
                        className: so.uW,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Existing Trial Offers" }),
                            u.map((t) =>
                                (0, r.jsx)(rX, { offer: t, offerOptions: e, forceRefetch: () => j(!0) }, t.id),
                            ),
                        ],
                    }),
                p.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: so.uW,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Existing Discount Offers" }),
                            p.map((e) =>
                                (0, r.jsx)(rZ, { offer: e, offerOptions: a, forceRefetch: () => j(!0) }, e.id),
                            ),
                        ],
                    }),
                (0, r.jsx)("section", {
                    className: so.uW,
                    children: (0, r.jsxs)("div", {
                        className: so.bd,
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
                                    (0, r.jsx)(sc, { entitlement: e, active: !0, onDelete: () => C(e.id) }, e.id),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var r1 = a(528265),
    r2 = a(26279),
    r8 = a(142798);
let r6 = {
        [r2.Re.UNSPECIFIED]: "Unspecified",
        [r2.Re.DRAFT]: "Draft",
        [r2.Re.SIGNED]: "Signed",
        [r2.Re.DISCARDED]: "Discarded",
        [r2.Re.SIGNING_IN_PROGRESS]: "Signing In Progress",
    },
    r3 = { [r2.BM.UNSPECIFIED]: "Unspecified", [r2.BM.ONE_TIME]: "One Time", [r2.BM.SUBSCRIPTION]: "Subscription" };
function r5() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(!0),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            n(!0), s(null);
            try {
                let e = await nz.Bo.get({ url: `${J.Rsh.ORDER_LIST}?limit=5`, rejectWithError: !0 });
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
                className: so.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: so.dL,
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
        i = r6[t.status] ?? `Unknown (${t.status})`,
        d = [
            { id: "status", label: `Status: ${i}`, isDisabled: !1 },
            { id: "created", label: `Created: ${new Date(t.created_at).toLocaleString()}`, isDisabled: !1 },
        ],
        c = o.useCallback(() => {
            navigator.clipboard.writeText(t.id), s(!0), setTimeout(() => s(!1), 2e3);
        }, [t.id]);
    return (0, r.jsxs)("div", {
        className: so.Nr,
        children: [
            (0, r.jsxs)(O.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                style: { marginBottom: "4px" },
                children: [
                    (0, r.jsx)(D.E, { variant: "text-md/semibold", children: t.id }),
                    (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: l ? "Copied!" : "Copy ID", onClick: c }),
                ],
            }),
            (0, r.jsx)(r1.C, {
                items: d,
                label: "Order info",
                layout: "inline",
                selectionMode: "none",
                selectionBehavior: "replace",
                disabledKeys: new Set(),
            }),
            (0, r.jsxs)(O.B, {
                direction: "vertical",
                gap: 4,
                style: { marginTop: "8px" },
                children: [
                    (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Line Items" }),
                    0 === t.order_line_items.length
                        ? (0, r.jsx)(D.E, { variant: "text-xs/normal", color: "text-muted", children: "No line items" })
                        : t.order_line_items.map((e) =>
                              (0, r.jsxs)(
                                  O.B,
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
                                                  r3[e.purchase_type] ?? `Unknown (${e.purchase_type})`,
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
                    className: r8.VK,
                    style: { marginTop: "8px" },
                    children: [
                        (0, r.jsxs)(I.D, {
                            onClick: () => n((e) => !e),
                            className: r8.Eh,
                            children: [
                                (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Billing Facet" }),
                                (0, r.jsx)(l7.A, { direction: a ? l7.A.Directions.UP : l7.A.Directions.DOWN }),
                            ],
                        }),
                        a &&
                            (0, r.jsxs)("ul", {
                                className: r8.j3,
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
                                                            (0, r.jsx)(O.B, {
                                                                direction: "vertical",
                                                                gap: 4,
                                                                style: { marginTop: "4px" },
                                                                children:
                                                                    t.billing_facet.invoice_preview.line_items.map(
                                                                        (e) =>
                                                                            (0, r.jsxs)(
                                                                                O.B,
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
var r4 = a(935462),
    r7 = a(260598),
    oe = a(93688),
    ot = a(717400),
    oa = a(676955),
    on = a(31300),
    ol = a(500060),
    os = a(391973),
    oi = a(684013),
    or = a(765671),
    oo = a(235986),
    od = a(742589),
    oc = a(41984),
    ou = a(181435),
    om = a(435736),
    oh = a(296027),
    ox = a(515183),
    op = a(489277),
    og = a(127242),
    ov = a(869014),
    oj = a(528772),
    ob = a(38502),
    of = a(532624),
    oy = a(773371),
    o_ = a(996439),
    oE = a(350535),
    oC = a(9302),
    oS = a(644434),
    oN = a(618137);
let oA = {
        [J.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: J.uss.CLICK_ZONE_DEBUG,
            id: (0, ej.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...ob.A.getWidgetDefaultSettings(J.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [J.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: J.uss.PERFORMANCE_DEBUG,
            id: (0, ej.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...ob.A.getWidgetDefaultSettings(J.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    ok = {};
function oI(e) {
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
        (0, r.jsxs)(nt.$n, {
            look: nt.$n.Looks.LINK,
            color: nt.$n.Colors.LINK,
            size: nt.$n.Sizes.MIN,
            onClick: function () {
                (0, nc.C)(t, () => n(!0));
            },
            className: oN.DT,
            children: ["Application Id: ", t, " ", a ? aQ.intl.string(aQ.t.t5VZ88) : null],
        })
    );
}
let oD = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, M.bG)([j.Ay], () => j.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            n = (0, M.bG)([aq.A], () => aq.A.getGameForPID(t.pid)),
            l = (0, M.bG)([j.Ay], () => (null == a ? null : j.Ay.getGameOverlayStatus(a)));
        return (0, r.jsxs)("div", {
            className: oN.st,
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
                        children: (0, r.jsx)(oI, { id: t.applicationId }),
                    }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, ox.wR)(t.fullscreenType)],
                }),
                (0, r.jsxs)(D.E, { variant: "text-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, r.jsxs)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, r.jsxs)("div", {
                    className: oN.st,
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
                            children: ["overlayMethod: ", (0, ox.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != l &&
                    (0, r.jsxs)("div", {
                        className: oN.st,
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
                                children: ["raw overlayMethod: ", (0, ox.gK)(l.overlayMethod)],
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
    oT = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, M.cf)([oy.default], () => oy.default.getOverlayPIDStatuses()),
            n = (0, M.cf)([oh.default], () => oh.default.getTrackedGames()),
            l = (0, M.bG)([oy.default], () => oy.default.isInputLocked(t), [t]),
            s = (0, M.bG)([oy.default], () => oy.default.DEV_isInputLockedV3(t), [t]),
            i = (0, M.bG)([oy.default], () => oy.default.DEV_isInputLocked(t), [t]),
            o = (0, M.bG)([oy.default], () => oy.default.isReady(t), [t]);
        return (0, r.jsxs)("div", {
            className: oN.st,
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
        a = ((t = Object.values((0, M.yK)([ob.A], () => ob.A.getWidgetsForLayout(oS.G)))), t.find((t) => t.type === e));
    return [
        a,
        () => {
            if (null != a) (0, os.uv)(a.id);
            else {
                let t = oA[e];
                if (null == t) return;
                let a = t(oS.G);
                (0, os.jn)(a);
            }
        },
    ];
}
function oR(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, nu.i$)(ne()(e), "h:mm:ss.SSS");
}
let ow = o.memo(function (e) {
    let { pid: t, ...a } = e,
        n = (0, M.bG)([oh.default], () => {
            if (null == t) return "Unknown";
            let e = oh.default.getTrackedGameByPid(t)?.gameName;
            return null != e ? ((ok[t] = e), e) : (ok[t] ?? "Unknown");
        }, [t]);
    return (0, r.jsx)(D.E, { ...a, variant: "text-md/semibold", color: "text-strong", children: n });
});
function oM() {
    let e = (0, M.bG)([og.A], () => og.A.hasRenderDebugMode(oc.x7.TrackFocusPIDs)),
        t = (0, M.yK)([oh.default], () => oh.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, r.jsxs)("div", {
        className: oN.st,
        children: [
            (0, r.jsxs)("div", {
                className: oN.Iv,
                children: [
                    (0, r.jsx)(v.d, {
                        checked: e,
                        onChange: () =>
                            void oi.A.setRenderDebugMode(
                                !og.A.hasRenderDebugMode(oc.x7.TrackFocusPIDs),
                                oc.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, r.jsx)(I.D, {
                        className: oN.LL,
                        onClick: () => oi.A.clearTrackedPids(),
                        children: (0, r.jsx)(ns.u, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(d.Ip, {
                className: k()(oN.st, oN.XG),
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
                                children: (0, r.jsx)(lP.m, {
                                    position: "left",
                                    text: n === oc.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(D.E, {
                                            variant: "text-sm/medium",
                                            color: n === oc.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, r.jsx)(ow, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                oR(t),
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
let oL = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, M.bG)([oh.default, j.Ay], () => {
                if (null == t) return null;
                let e = oh.default.getTrackedGameByPid(t)?.fullscreenType;
                if (null != e) return e;
                let a = j.Ay.getGameOrTransformedSubgameForPID(t);
                return a?.fullscreenType ?? lA.aI.UNKNOWN;
            }, [t]);
        return (0, r.jsxs)(D.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, ox.wR)(a) : "Unknown"],
        });
    }),
    oP = o.memo(function () {
        let e = (0, M.cf)([oh.default], () => oh.default.getTrackedGames()),
            [t, a] = o.useState({}),
            n = o.useRef(null);
        return (
            o.useEffect(
                () => (
                    (n.current = setInterval(async () => {
                        let e = j.Ay.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, ox.E1)(a.pid, 0).then((e) => [a.pid, e, n]));
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
                    }, +nK.A.Millis.SECOND)),
                    () => clearInterval(n.current)
                ),
                [],
            ),
            (0, r.jsx)(lP.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(d.Ip, {
                        className: k()(oN.st, oN.XG),
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
                                            (0, r.jsx)(ow, { tag: "div", pid: e.pid }),
                                            (0, r.jsx)(oL, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: n } = t;
                                                    return (0, r.jsx)(
                                                        D.E,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, ox.wR)(a)} @ ${oR(n)}`,
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
    oU = o.memo(function () {
        let e = (0, M.cf)([oh.default], () => oh.default.getTrackedGames()),
            t = (0, oC.getPID)(),
            a = (0, M.bG)([oh.default], () => oh.default.isOverlayOOPEnabledForPid(t), [t]),
            [n, l] = (0, M.yK)([oj.A], () => [oj.A.enabled, oj.A.keepOpen]),
            s = (0, M.bG)([oy.default], () => oy.default.getFocusedPID()),
            i = (0, M.bG)([oy.default], () => oy.default.isFocusedPidOutOfProcess());
        return (0, r.jsxs)("div", {
            className: oN.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, r.jsx)(D.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, r.jsx)(oT, { pid: e.pid }, e.pid)),
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
    oG = [
        {
            mode: oc.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: oc.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: oc.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: oc.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oc.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oc.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: oc.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    oF = o.memo(function () {
        let [e, t] = oO(J.uss.CLICK_ZONE_DEBUG),
            [a, n] = oO(J.uss.PERFORMANCE_DEBUG),
            l = (0, M.bG)([og.A], () => og.A.getRenderDebugModes()),
            [s, i] = o.useState({});
        return (
            o.useEffect(() => {
                let e = setInterval(() => {
                    i({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, r.jsx)("div", {
                className: oN.st,
                children: oG.map((s) => {
                    let i =
                            s.mode === oc.x7.OverlayRafManagerForceEnabled
                                ? `${s.label} (${ov.A.getLastRAFCallbackReason()})`
                                : s.label,
                        d = () =>
                            s.mode === oc.x7.ClickZones
                                ? null != e
                                : s.mode === oc.x7.WidgetAreas
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
                                    s.mode === oc.x7.ClickZones && t(),
                                        s.mode === oc.x7.WidgetAreas && n(),
                                        (e = s.mode),
                                        oi.A.setRenderDebugMode(!a, e);
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
    oB = o.memo(function () {
        let e = (0, M.cf)([oh.default], () => oh.default.getTrackedGames()),
            t = (0, M.bG)([j.Ay], () => j.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(lP.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: oN.st,
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
                                                (0, r.jsx)(oL, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, r.jsx)(lP.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: oN.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, r.jsx)(oD, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    o$ = o.memo(function () {
        let e = (0, M.bG)([oh.default], () => oh.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            n = [
                { label: oc.V6.UNSET, value: oc.V6.UNSET, id: oc.V6.UNSET },
                { label: oc.V6.IN_PROCESS_V2, value: oc.V6.IN_PROCESS_V2, id: oc.V6.IN_PROCESS_V2 },
                { label: oc.V6.OUT_OF_PROCESS_V3, value: oc.V6.OUT_OF_PROCESS_V3, id: oc.V6.OUT_OF_PROCESS_V3 },
                {
                    label: oc.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: oc.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: oc.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, r.jsx)(x.l, {
            label: "Override the overlay render mode",
            value: t,
            options: n,
            onSelectionChange: (e) => {
                a(e), oi.A.forceRenderMode(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function oV(e) {
    let { modalProps: t, onClose: a } = e,
        [n, l] = o.useState(null);
    function s() {
        a(null);
    }
    return (0, r.jsxs)(r4.EO, {
        size: r4.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, r.jsxs)(r4.rQ, {
                align: oo.A.Align.CENTER,
                justify: oo.A.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(D.E, {
                        variant: "text-md/bold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, r.jsx)(r4.s_, { onClick: s }),
                ],
            }),
            (0, r.jsx)(r4.$m, {
                children: (0, r.jsx)("div", {
                    className: oN.st,
                    children: (0, r.jsx)(r7.f, { label: "Paste JSON Here", onChange: l, value: n ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(r4.jl, {
                children: (0, r.jsxs)(l0.e, {
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
let oW = {
    native: { label: "Native", filter: (e) => e.type === ou.ON.NativeLegacy || e.type === ou.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === ou.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === ou.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === ou.ON.OOPModule || e.type === ou.ON.LegacyModule },
};
function oz(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ou.QJ.Info;
    if (t === ou.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case ou.ON.NativeLegacy:
            return "var(--yellow-500)";
        case ou.ON.NativeOOP:
            return "var(--green-500)";
        case ou.ON.Flux:
            return "var(--brand-400)";
        case ou.ON.Renderer:
            return "var(--brand-500)";
        case ou.ON.LegacyModule:
            return "var(--yellow-300)";
        case ou.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let oH = [
    {
        key: "type",
        cellClassName: oN.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                n = oK(t);
            return (0, r.jsx)("div", {
                className: oN.g$,
                style: { color: oz(t, a) },
                children: (0, r.jsx)(n, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "name",
        cellClassName: oN.Cm,
        render(e) {
            let { name: t, type: a, logType: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(D.E, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case ou.QJ.Info:
                                    return "text-strong";
                                case ou.QJ.Warning:
                                    return "text-feedback-warning";
                                case ou.QJ.Error:
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
        cellClassName: oN.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, nu.i$)(ne()(t), "h:mm:ss.SSS");
        },
    },
];
function oK(e) {
    switch (e) {
        case ou.ON.NativeLegacy:
            return oe.W;
        case ou.ON.NativeOOP:
            return ot.q;
        case ou.ON.Renderer:
        case ou.ON.Flux:
            return oa.v;
        case ou.ON.LegacyModule:
            return on.k;
        case ou.ON.OOPModule:
            return ol.o;
        default:
            return on.k;
    }
}
function oY(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let oq = ["__webpack_require__", "fn"],
    oJ = ["web.js", "web.js.map"],
    oQ = [
        {
            id: "details",
            name: "Details",
            group: aU.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: n, type: l, logType: s, nativeId: i, stack: o, data: c, timestamp: u, pid: m } = t,
                    h = ne()(u),
                    x = oK(l);
                return (0, r.jsxs)(d.Ar, {
                    className: oN.bW,
                    children: [
                        (0, r.jsxs)(od.A, {
                            className: k()(tT.jr, oN.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: oz(l, s) },
                                    className: oN.nr,
                                    children: (0, r.jsx)(x, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(od.A.Title, {
                                    wrapperClassName: oN.qd,
                                    children: [
                                        n,
                                        " (",
                                        l,
                                        ")",
                                        (0, r.jsx)(I.D, {
                                            tag: "span",
                                            className: oN.KE,
                                            onClick: () => (0, nc.C)(n),
                                            children: (0, r.jsx)(na.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(od.A.Icon, {
                                    icon: na.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, nc.C)(oY(t));
                                    },
                                }),
                                (0, r.jsx)(od.A.Icon, { icon: nl.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(n_, {
                            className: oN.ZK,
                            children: [
                                (0, r.jsx)(nE, {
                                    name: "Timestamp",
                                    copyValue: h.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: h.toISOString(),
                                        title: (0, nu.i$)(h, "LLLL"),
                                        children: (0, nu.i$)(h, "L h:mm:ss.SSS"),
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
                                    copyValue: oY(c),
                                    children: (0, r.jsx)("code", { children: oY(c) }),
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
                                                    return oq.includes(e.trim())
                                                        ? null
                                                        : (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, r.jsx)("span", {
                                                                          className: oN.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !oJ.includes(i ?? "") &&
                                                                          (0, r.jsxs)(r.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, r.jsxs)("span", {
                                                                                      className: oN.lz,
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
    oX = {
        searchType: no.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: l } = e,
                s = [t, a, JSON.stringify(l)];
            return null != n && s.push(n), s;
        },
        throttleMs: 100,
    };
function oZ() {
    let { ref: e, height: t } = (0, or.Ay)(),
        a = (0, M.bG)([og.A], () => og.A.isModuleLoggingEnabled()),
        [n, l] = o.useState(a),
        [s, i] = o.useState(!1),
        [d, c] = o.useState(null),
        [u, m] = o.useState(Object.keys(oW)),
        [h, x] = (0, M.bG)([og.A], () => og.A.getOverlayLoggingBreadcrumbs(), [], o_.D),
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
                              let { filter: a } = oW[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [v, u, d, s, j],
        ),
        [_, E] = o.useState(y),
        [C, S] = o.useState(null),
        N = o.useMemo(() => v.find((e) => e.key === C), [v, C]),
        A = o.useCallback((e) => {
            E(e);
        }, []),
        { renderSelectedTab: T } = (0, aU.Ay)({ tabs: oQ }, []);
    (0, nd.RT)(b, y, A, oX, [v]);
    let O = o.useCallback((e) => {
            l(e), oi.A.setModuleLogging(e);
        }, []),
        [R, w] = o.useState(!1),
        L = o.useRef(null),
        P = o.useCallback(() => {
            (0, nc.C)(JSON.stringify(y)), w(!0);
        }, [y]);
    o.useEffect(() => {
        if (R)
            return (
                (L.current = setTimeout(() => {
                    w(!1);
                }, 4e3)),
                () => {
                    null != L.current && clearTimeout(L.current);
                }
            );
    }, [R]);
    let U = o.useCallback((e) => {
            g(null != e ? JSON.parse(e) : null);
        }, []),
        G = o.useCallback(
            (e) => {
                if (e) return g(null);
                (0, eO.openModal)(
                    (e) =>
                        (0, r.jsx)(oV, {
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
        className: oN.rh,
        children: [
            (0, r.jsxs)("div", {
                className: oN.st,
                children: [
                    (0, r.jsxs)("div", {
                        className: k()(oN._V, oN.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: oN.iR,
                                children: (0, r.jsx)(rR.S, { label: "Poll Native", checked: n, onChange: (e) => O(e) }),
                            }),
                            (0, r.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: oN.iR,
                                children: (0, r.jsx)(rR.S, {
                                    label: "Only Active Games",
                                    checked: s,
                                    onChange: (e) => i(e),
                                }),
                            }),
                            (0, r.jsxs)(I.D, {
                                className: oN.ny,
                                onClick: P,
                                children: [
                                    (0, r.jsx)(D.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: R ? "Copied" : "Copy All",
                                    }),
                                    R
                                        ? (0, r.jsx)(rF.A, { size: "sm", color: eR.A.unsafe_rawColors.GREEN_330.css })
                                        : (0, r.jsx)(na.T, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(I.D, {
                                className: oN.ny,
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
                        className: k()(oN._V, oN.XQ),
                        children: Object.entries(oW).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                I.D,
                                {
                                    className: k()(oN.pb, u.includes(t) && oN.bx),
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
                        className: oN._V,
                        children: (0, r.jsx)(ni.I, {
                            query: b,
                            onChange: f,
                            onClear: () => f(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: k()(oN.st, oN.CZ),
                children: (0, r.jsx)(tO, {
                    columns: oH,
                    data: _,
                    selectedRowKey: C ?? void 0,
                    onClickRow: (e) => S(e.key),
                }),
            }),
            null != N &&
                (0, r.jsx)(aP, {
                    className: k()(oN.st, oN.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: T({ breadcrumb: N, onClose: () => S(null) }),
                }),
        ],
    });
}
let o0 = o.memo(function () {
        let e = (0, M.bG)([op.A], () => op.A.getPopoutInitializationStages());
        return (0, r.jsxs)("div", {
            className: oN.st,
            children: [
                (0, r.jsx)("div", {
                    className: oN.Iv,
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
    o1 = o.memo(function () {
        let e = (0, M.bG)([og.A], () => og.A.isStateDebuggingEnabled()),
            t = (0, M.bG)([og.A], () => og.A.getDebuggingState());
        return (
            o.useEffect(
                () => (
                    oi.A.setStateDebugging(!0),
                    () => {
                        oi.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, r.jsxs)("div", {
                className: oN.st,
                children: [
                    (0, r.jsx)("div", {
                        className: oN.Iv,
                        children: (0, r.jsx)(v.d, {
                            checked: e,
                            onChange: () => oi.A.setStateDebugging(!e),
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
function o2() {
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsxs)("div", {
            className: k()(tT.nd, oN.rf),
            children: [
                (0, r.jsx)(oF, {}),
                (0, r.jsx)(o$, {}),
                (0, r.jsx)(oB, {}),
                (0, r.jsx)(oU, {}),
                (0, r.jsx)(oM, {}),
                (0, r.jsx)(oP, {}),
                (0, r.jsx)(o0, {}),
                (0, r.jsx)(o1, {}),
            ],
        }),
    });
}
let o8 = (e) => {
        switch (e) {
            case "Disabled":
                return;
            case "False":
                return !1;
            case "True":
                return !0;
        }
    },
    o6 = (e) => (null == e ? "Disabled" : e ? "True" : "False"),
    o3 = o.memo(function () {
        let e = (0, om.wW)(),
            t = (0, M.bG)([of.Ay], () => of.Ay.getOverlayKeybind());
        return (0, r.jsxs)("div", {
            className: oN.st,
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
                    value: o6(e.overrideIsNewOverlayUser),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Existing user", value: "False", id: "False" },
                        { label: "New user", value: "True", id: "True" },
                    ],
                    onSelectionChange: (e) => {
                        (0, om.sw)(o8(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(x.l, {
                    label: "Override Previous Keybind Status",
                    description: "Override whether the user's pre-experiment keybind was the default keybind",
                    value: o6(e.overrideIsUsingDefaultOverlayKeybind),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Using default keybind", value: "True", id: "True" },
                        { label: "Not using default keybind", value: "False", id: "False" },
                    ],
                    onSelectionChange: (e) => {
                        (0, om.C3)(o8(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(w.D, { variant: "heading-md/semibold", children: "Actions" }),
                (0, r.jsx)(h.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, om.xc)() }),
                (0, r.jsx)(h.$, {
                    size: "sm",
                    text: "Reset isUsingDefaultOverlayKeybind",
                    onClick: () => (0, om.tM)(),
                }),
            ],
        });
    });
function o5() {
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsx)("div", { className: k()(tT.nd, oN.rf), children: (0, r.jsx)(o3, {}) }),
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
            className: k()(tT.nd, oN.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: oN._V,
                    children: [
                        (0, r.jsx)(I.D, {
                            className: k()(oN.k0, "state" === e && oN.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(D.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(I.D, {
                            className: k()(oN.k0, "logging" === e && oN.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(D.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(I.D, {
                            className: k()(oN.k0, "experiments" === e && oN.a),
                            onClick: () => t("experiments"),
                            children: (0, r.jsx)(D.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, r.jsx)(o2, {}),
                "logging" === e && (0, r.jsx)(oZ, {}),
                "experiments" === e && (0, r.jsx)(o5, {}),
            ],
        })
    );
}
var o4 = a(488428),
    o7 = a(73825),
    de = a(753390),
    dt = a(155506),
    da = a(944304),
    dn = a(300233),
    dl = a(599941),
    ds = a(817649),
    di = a(4630),
    dr = a(44120),
    dd = a(532794),
    dc = a(216678),
    du = a(194509),
    dm = a(761705),
    dh = a(65738),
    dx = a(265768);
function dp(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, dl.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, r.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(ds.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let dg = function () {
    let [e, t] = o.useState(st.pe.TIER_2),
        [a, n] = o.useState(null),
        l = (0, M.yK)([aK.A], () => aK.A.getGuildsArray()),
        [s] = (0, M.yK)([rM.A], () => [rM.A.getPremiumSubscription()]),
        i = l.map((e) => ({ id: e.id, value: e, label: e.name })),
        [c, m] = o.useState(i.length > 0 ? i[0].value : null),
        [v, j] = o.useState(""),
        [b, f] = o.useState({ plan_id: st.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        y = "true" !== b.gift && null != s,
        [_, E] = o.useState(i.length > 0 ? i[0].value : null),
        { analyticsLocations: C } = (0, aF.Ay)(tm.A.PAYMENT_FLOW_TEST_PAGE),
        [S, N] = o.useState(""),
        [A, k] = o.useState(J.dJq),
        { balance: I, isFetching: T, error: R } = (0, dm.W)(),
        { isSubmitting: w, responseMessage: L, redeemVirtualCurrency: P } = (0, dm.Q)(),
        [U, G] = o.useState(J.dJq),
        [F, B] = o.useState(""),
        [$, V] = o.useState(J.dJq),
        [W, z] = o.useState(J.dJq);
    return (0, r.jsx)(aF.f5, {
        value: C,
        children: (0, r.jsx)(d.Ip, {
            className: dx.XG,
            children: (0, r.jsxs)(O.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, r.jsxs)(O.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Gift",
                                value: e,
                                options: [
                                    { id: "tier_2", value: st.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: st.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: st.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(du.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: nt.XD.PRIMARY,
                                look: nt.pR.FILLED,
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)(O.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Premium Select Plan",
                                value: a,
                                options: [
                                    { id: "tier_2", value: st.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: st.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: st.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => n(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, dd.A)({ subscriptionTier: a, analyticsLocations: C }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)(O.B, {
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
                                ? (0, r.jsx)(da.A, { guild: c, analyticsLocation: {} })
                                : (0, r.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)(O.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(ii.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, r.jsxs)(O.B, {
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
                                    (0, r.jsx)(lP.m, {
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
                                    { id: "tier_2", value: st.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: st.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: st.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
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
                    (0, r.jsx)(lP.m, {
                        text: "Already subscribed",
                        shouldShow: y,
                        children: (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: y,
                            onClick: () => {
                                window.open(J.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + o4.stringify({ ...b }));
                            },
                        }),
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, r.jsxs)(O.B, {
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
                                              className: dx.wG,
                                              children: (0, r.jsx)(e8.y, { type: e8.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: dx.dB,
                                              children: [
                                                  null !== R &&
                                                      (0, r.jsxs)(D.E, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              R.message,
                                                          ],
                                                      }),
                                                  (0, r.jsx)(dh.Gy, {
                                                      balance: I ?? 0,
                                                      balanceWidgetMode: dh.k7.SELECTED,
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
                                value: _,
                                options: i,
                                onSelectionChange: (e) => E(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(dn.H, {
                                guildId: _?.id,
                                children: (0, r.jsx)(dp, { selectedGuildForGuildSub: _ }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)(O.B, {
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
                                    (0, di.openIAPPurchaseModal)({
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
                    (0, r.jsx)(O.B, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, r.jsx)(u.n, {
                            label: "Standard Payment Modal Test",
                            children: (0, r.jsxs)(O.B, {
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
                                            (0, dc.q)({
                                                applicationId: F,
                                                skuId: $,
                                                analyticsLocations: C,
                                                checkoutFlow: dt.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsxs)(O.B, {
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
                                onClick: () => (0, dr.A)({ skuId: W, analyticsLocations: C }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(g.c, {}),
                    (0, r.jsx)(u.n, {
                        label: "Helpers",
                        children: (0, r.jsxs)(O.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, o7.YG)(),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, de.uZ)(),
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
                            onClick: () => (0, ll.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var dv = a(219887),
    dj = a(459357),
    db = a(885180),
    df = a(742810),
    dy = a(500380),
    d_ = a(102609),
    dE = a(710195),
    dC = a(211287),
    dS = a(295405),
    dN = a(188976);
let dA = [
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
    dk = {
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
    dI = [
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
    dD = {
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
    dT = [
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
function dR() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        [i, c] = o.useState(null),
        [u, m] = o.useState(null),
        [p, g] = o.useState("pm_card_us"),
        [v, j] = o.useState(!1),
        b = Object.values((0, tu.bG)([dS.A], () => dS.A.paymentSources)),
        f = dk[e],
        y = async () => {
            let t = p;
            "" === t && (t = "pm_card_us"),
                await nz.Bo.post({
                    url: "/debug/payment-source",
                    body: { token: t, address: "US" === e ? l : "CA" === e ? u : null },
                    rejectWithError: !1,
                }),
                await (0, de.$o)();
        },
        _ = async () => {
            await nz.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }), await (0, de.$o)();
        },
        E = async () => {
            await nz.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }), window.location.reload();
        };
    return (
        o.useEffect(() => {
            (0, de.$o)();
        }, []),
        (0, r.jsx)(d.Ip, {
            className: tT.nd,
            children: (0, r.jsxs)("div", {
                className: so.l$,
                children: [
                    (0, r.jsxs)(D.E, {
                        style: { marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, r.jsxs)("div", {
                        className: so.Uo,
                        children: [
                            (0, r.jsx)(t1.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: dA
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, r.jsx)("img", {
                                                alt: "",
                                                className: dN.bI,
                                                src: (0, dy.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: (e) => {
                                    t(e), g(dk[e][0].value), j(1 === dk[e].length);
                                },
                            }),
                            "US" === e &&
                                (0, r.jsx)(x.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: dI.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        n(e), s(dD[e] ?? null);
                                    },
                                }),
                            "CA" === e &&
                                (0, r.jsx)(x.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: i,
                                    options: dT.map((e) => {
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
                                    onClick: _,
                                }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                size: "sm",
                                text: "Reset API Rate limits and reload app",
                                onClick: E,
                            }),
                        ],
                    }),
                    (0, r.jsx)(D.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Generate Gift Card PIN",
                    }),
                    (0, r.jsx)(dV, {}),
                    (0, r.jsx)(D.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Experiment Overrides",
                    }),
                    (0, r.jsx)(dF, {}),
                    (0, r.jsx)(D.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Existing Payment Sources",
                    }),
                    b.map((e) => (0, r.jsx)(dW, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let dw = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    dM = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Legacy checkout" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Unified checkout" },
    ],
    dL = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Gift cards enabled" },
    ],
    dP = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Payment elements disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Payment elements enabled" },
    ],
    dU = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Orb redemption via legacy" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Orb redemption via orders" },
    ];
function dG(e) {
    let { experimentName: t, options: a = dw } = e,
        n = (0, tu.bG)([dE.A, nh.default], () => {
            let e = nh.default.getId(),
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
function dF() {
    return (0, r.jsxs)(O.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(dG, { experimentName: df.W2.definition.name, options: dM }),
            (0, r.jsx)(dG, { experimentName: df._$.definition.name, options: dM }),
            (0, r.jsx)(dG, { experimentName: dj.A.definition.name, options: dL }),
            (0, r.jsx)(dG, { experimentName: db._.definition.name, options: dP }),
            (0, r.jsx)(dG, { experimentName: dC.A.definition.name, options: dU }),
        ],
    });
}
let dB = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    d$ = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function dV() {
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
                    let t = await nz.Bo.post({
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
    return (0, r.jsxs)(O.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsxs)(O.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, r.jsx)(x.l, {
                        selectionMode: "single",
                        label: "Gift Card Country",
                        value: e,
                        options: dB,
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
                (0, r.jsxs)(O.B, {
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
function dW(e) {
    let { paymentSource: t } = e,
        a = async () => {
            await nz.Bo.patch({ url: J.Rsh.BILLING_PAYMENT_SOURCE(t.id), body: { default: !0 }, rejectWithError: !1 }),
                await (0, de.$o)();
        };
    return (0, r.jsxs)("div", {
        className: so.bd,
        children: [
            (0, r.jsx)(dv.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, r.jsx)("img", { alt: t.country, className: dN.bI, src: (0, dy.t)(t.country) }),
            t.isDefault
                ? (0, r.jsx)(D.E, { variant: "text-sm/medium", children: "(Default)" })
                : (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: "Set as Default", onClick: a }),
        ],
    });
}
var dz = a(706712),
    dH = a(367727),
    dK = a(845886);
function dY() {
    return (0, r.jsx)(d.Ip, { className: dK.kL, children: (0, r.jsx)(dq, {}) });
}
function dq() {
    let e = o.useCallback(() => {
            (0, lg._N)(t7.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, dH.FZ)(t7.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(w.D, { className: dK.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, r.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, r.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, r.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, r.jsx)("div", {
                className: dK.PW,
                children: (0, r.jsx)(h.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var dJ = a(136722),
    dQ = a(576705),
    dX = a(309010),
    dZ = a(558393),
    d0 = a(719366),
    d1 = a(842681);
function d2(e) {
    let { title: t, can: a } = e,
        n = a ? rF.A : F.P,
        l = (0, r.jsx)("div", {
            className: k()(d1.v_, a ? d1.uU : d1.Ss),
            children: (0, r.jsx)(n, { className: d1.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: d1.z8,
        children: [
            l,
            (0, r.jsx)("div", {
                className: d1.rv,
                children: (0, r.jsx)(D.E, { variant: "text-md/normal", children: t }),
            }),
        ],
    });
}
function d8() {
    let e = (0, M.bG)([dX.A], () => dX.A.getChannelId()),
        t = (0, M.bG)([aY.A], () => aY.A.getGuildId()),
        a = (0, M.bG)([ad.A], () => ad.A.getChannel(e)),
        n = (0, M.bG)([aK.A], () => aK.A.getGuild(t)),
        l = (0, M.bG)([dQ.A], () => dQ.A.computePermissions(a)),
        s = (0, M.bG)([dQ.A], () => dQ.A.computePermissions(n)),
        i = (0, ao.Ay)(a, !0),
        o = null != a ? (0, d0.mW)(a, !1) : null,
        d = null != n ? dZ.A.getGuildPermissionSpecMap(n) : null,
        c = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = dJ.zy(l, a);
            return (0, r.jsx)(d2, { title: t, can: n }, t);
        }),
        u = Object.values(d ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = dJ.zy(s, a);
            return (0, r.jsx)(d2, { title: t, can: n }, t);
        });
    return (0, r.jsx)("div", {
        className: k()(tT.nd, d1.nd),
        children: (0, r.jsxs)("div", {
            className: d1.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: d1.uW,
                    children: [
                        (0, r.jsx)(w.D, {
                            variant: "heading-md/semibold",
                            children: null != i ? `Permissions in ${i}` : "No channel selected",
                        }),
                        c,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: d1.uW,
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
var d6 = a(873298),
    d3 = a(775602),
    d5 = a(363195),
    d9 = a(885386),
    d4 = a(631670),
    d7 = a(817281),
    ce = a(955572),
    ct = a(56348),
    ca = a(385803),
    cn = a(381941);
let cl = [J.NJ8.DARK, J.NJ8.LIGHT, J.NJ8.DARKER, J.NJ8.MIDNIGHT],
    cs = [d6.NS.COMPACT, d6.NS.COZY, d6.NS.DEFAULT];
function ci(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function cr() {
    let e,
        t =
            ((e = H.default.getCurrentUser()),
            rz.Ay.canUseClientThemes(e) ? Object.keys(ca.ag).map((e) => Number(e)) : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                n = ci(a);
            if (null != n) {
                let t = ca.ag[n];
                e = t?.theme ?? J.NJ8.DARK;
            } else e = ci([J.NJ8.DARK, J.NJ8.DARKER, J.NJ8.MIDNIGHT]);
            await d7.u_(
                { theme: e, backgroundGradientPresetId: n ?? void 0, customUserThemeSettings: void 0 },
                lg.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = ci(cl);
            await d7.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                lg.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function co() {
    let e = tx.A.purchases,
        t = (0, ey.x9)(e),
        a = (0, ey.$W)(e),
        n = t.length > 0,
        l = a.length > 0;
    if (n || l)
        try {
            let e = {};
            n && (e.avatarDecoration = ci([...t, null])), l && (e.nameplate = ci([...a, null])), (0, e7.p)(e);
            let s = te.A.getPendingChanges(),
                i = (0, ct.Sk)(s);
            await (0, d4._L)(i).finally(d4.pZ);
        } catch (e) {}
}
function cd() {
    try {
        let e = ci(J.hH7.FONT_SIZES);
        (0, ce.XS)(e);
        let t = ci(cn.qh);
        (0, ce.AC)(t);
        let a = ci(cs);
        d9.Xi.updateSetting(a);
    } catch (e) {}
}
function cc() {
    (0, tn.Bf)();
    let e = (0, M.bG)([H.default], () => H.default.getCurrentUser()),
        t = d9.eh.useSetting(),
        a = (0, M.bG)([d5.A], () => d5.A.theme),
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
        g = (0, M.bG)([d3.A], () => d3.A.fontSize),
        v = (0, M.bG)([d3.A], () => d3.A.messageGroupSpacing),
        j = d9.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = H.default.getCurrentUser(),
                t = d9.eh.getSetting(),
                a = tx.A.purchases,
                n = (0, ey.x9)(a),
                l = (0, ey.$W)(a),
                s = d5.A.theme,
                i = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (n.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (l.find((e) => e.skuId === o) ?? null) : null,
                u = d3.A.fontSize,
                m = d3.A.messageGroupSpacing,
                h = d9.Xi.getSetting();
            return () => {
                try {
                    d7.u_(
                        { theme: s, backgroundGradientPresetId: i ?? void 0, customUserThemeSettings: void 0 },
                        lg.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, e7.p)({ avatarDecoration: d, nameplate: c });
                    let e = te.A.getPendingChanges(),
                        t = (0, ct.Sk)(e);
                    (0, d4._L)(t).finally(d4.pZ), (0, ce.XS)(u), (0, ce.AC)(m), d9.Xi.updateSetting(h);
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: ly.kL,
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
                        (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: cr }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: co,
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: cd,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, r.jsxs)(D.E, { variant: "text-md/normal", children: ["Theme: ", a] }),
                        (0, r.jsxs)(D.E, {
                            variant: "text-md/normal",
                            children: ["Client Theme ID:", " ", null != n ? ca.ag[n]?.getName() : "None"],
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
                                        case d6.NS.COMPACT:
                                            return "Compact";
                                        case d6.NS.COZY:
                                            return "Cozy";
                                        case d6.NS.DEFAULT:
                                            return "Default";
                                        case d6.NS.RESPONSIVE:
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
var cu = a(885574),
    cm = a(311678),
    ch = a(508274),
    cx = a(837529);
let cp = [5793266, 2303016],
    cg = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function cv() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: n } = (0, cx.Zt)(),
        l = (0, ee.Ay)(),
        s = (0, M.bG)([ae.A], () => ae.A.settings.appearance?.clientThemeSettings),
        i =
            s?.customUserThemeSettings != null &&
            null != s.customUserThemeSettings.colors &&
            s.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, d7.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), n(null));
    }
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsxs)(O.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(cm.N, {
                            collapsibleContent: (0, r.jsxs)(O.B, {
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
                                    icon: cu.m,
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
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: cp }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(l0.e, {
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
                                  options: cg,
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
                                                onClick: () => t({ ...e, themeColors: cp }),
                                            }),
                                            (0, r.jsxs)(O.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, r.jsx)(ch.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[0] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [a, e.themeColors?.[1] ?? null] }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)(O.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(D.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Secondary Color",
                                                    }),
                                                    (0, r.jsx)(ch.VN, {
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
                                  : (0, r.jsxs)(O.B, {
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
                                                                    (0, d7.u_)({ theme: "system" });
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
var cj = a(141931),
    cb = a(306173),
    cf = a(587626),
    cy = a(237984),
    c_ = a(43203),
    cE = a(349435),
    cC = a(674272),
    cS = a(466034),
    cN = a(10094),
    cA = a(683760);
let ck = () => {
    let e = (0, M.bG)([H.default], () => H.default.getCurrentUser()),
        t = (0, M.bG)([cA.A], () => {
            let e = cA.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, M.bG)([cA.A], () => cA.A.getPremiumTypeOverride());
    return (0, r.jsxs)(O.B, {
        gap: 16,
        children: [
            (0, r.jsx)(x.l, {
                label: "Override Client-Side Premium Type",
                options: st.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, cN.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(lS.Q, {
                onClick: () => {
                    (0, cN.O)(st.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(s4.J, {
                label: "Override Client-Side Account Created At Date",
                value: ne()(t),
                onSelect: (e) => {
                    var t;
                    return (t = e.toISOString()), void (0, cN.Y)(new Date(t));
                },
            }),
            (0, r.jsx)(lS.Q, { onClick: () => (0, cN.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
};
var cI = a(19575),
    cD = a(327337),
    cT = a(431804),
    cO = a(865349),
    cR = a(818050);
function cw() {
    throw Error("Send help");
}
function cM() {
    let e = d9.j0.useSetting(),
        [t, n] = o.useState(!1);
    return t
        ? {}
        : (0, r.jsxs)(d.Ip, {
              children: [
                  (0, r.jsx)("div", { className: k()(cO.N, cR.SX), children: (0, r.jsx)(ck, {}) }),
                  (0, r.jsx)("div", {
                      className: k()(cO.N, cR.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, cC.A)({ source: cT.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: k()(cO.N, cR.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = dX.A.getChannelId() ?? "21154681615024128"),
                                  void (0, eO.openModalLazy)(
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
                                      { modalKey: cD.V },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: k()(cO.N, cR.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () =>
                              void (0, eO.openModalLazy)(
                                  async () => {
                                      let { default: e } = await a.e("17724").then(a.bind(a, 563255));
                                      return (t) => (0, r.jsx)(e, { ...t });
                                  },
                                  { onCloseCallback: void 0 },
                              ),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: k()(cO.N, cR.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, c_.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: k()(cO.N, cR.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: cb.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: k()(cO.N, cR.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = cf.A.getSocket();
                              tA.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: k()(cO.N, cR.QB),
                      children: (0, r.jsx)(v.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => d9.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: k()(cO.N, cR.QB),
                      children: [
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, cy.o)(),
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  cf.A.getSocket().close(), cf.A.getSocket().connect();
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
                              onClick: () => (0, cS.sy)(!0),
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: () => {
                                  nz.Bo.post({ url: J.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: k()(cO.N, cR.QB),
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
                              onSelectionChange: (e) => null != e && cI.Ay.crash(e),
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
                                      value: cj.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: cj.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: cj.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void cI.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => n(!0),
                          }),
                          (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: cw }),
                      ],
                  }),
              ],
          });
}
var cL = a(593924),
    cP = a(653887),
    cU = a(105596);
function cG() {
    let e = Object.keys(cL).map((e) => (0, r.jsx)(c$, { riveName: e }, e));
    return (0, r.jsx)(d.Ar, {
        style: { maxHeight: "100%" },
        children: (0, r.jsxs)(O.B, {
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
                (0, r.jsx)(cF, {}),
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
function cF() {
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
    return (0, r.jsxs)(O.B, {
        gap: 16,
        children: [
            (0, r.jsx)(c$, { riveName: "Rive inspector", onRiveLoad: j }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(cP._, { src: e, ref: c, onLoad: g, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, r.jsx)(e8.y, {}) : null,
            null != a &&
                (0, r.jsxs)(O.B, {
                    children: [
                        (0, r.jsxs)(O.B, {
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
                        (0, r.jsxs)(O.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(w.D, { variant: "heading-lg/medium", children: "Data Binding" }),
                                Object.keys(l ?? {}).map((e) =>
                                    (0, r.jsx)(
                                        cB,
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
function cB(e) {
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
                        options: Object.entries(eR.A.colors).map((e) => {
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
        n = cL[t]?.riveSrc,
        l = null == n,
        s = o.useRef(null),
        i = (0, cU.Gy)(n);
    return (0, r.jsxs)(
        O.B,
        {
            gap: 8,
            children: [
                (0, r.jsx)("label", { children: t }),
                (0, r.jsxs)(O.B, {
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
                                    null != n && (0, cU.DS)(n, t), a?.(t);
                                }),
                                    l.readAsArrayBuffer(t);
                            },
                            ref: s,
                        }),
                        (0, r.jsx)(eI.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: () => {
                                null != s.current && (s.current.value = ""),
                                    null != n && (0, cU.DS)(n, null),
                                    a?.(null);
                            },
                            icon: ns.u,
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
var cV = a(290136),
    cW = a(106236),
    cz = a(629584),
    cH = a(600239),
    cK = a(940622),
    cY = a(961895),
    cq = a(343991),
    cJ = a(699666);
let cQ = () => {
        (0, eO.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(a.bind(a, 343991));
                return (t) =>
                    (0, r.jsx)(e, {
                        title: "No image or video files found!",
                        help: "Please drop one or more image or video files.",
                        ...t,
                    });
            },
            { modalKey: cq.D },
        );
    },
    cX = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    cZ = (e) => {
        let { className: t, onDrop: a, children: n } = e,
            [l, s] = o.useState(!1),
            i = o.useRef(null),
            d = o.useCallback((e) => {
                cX(e), s(!0), (0, eO.closeModal)(cq.D);
            }, []),
            c = o.useCallback((e) => {
                cX(e);
                let t = i.current,
                    a = e.relatedTarget;
                (null != a && (null == t || t.contains(a))) || s(!1);
            }, []),
            u = o.useCallback(
                async (e) => {
                    cX(e), s(!1);
                    let t = e.dataTransfer;
                    if (null == t) return void cQ();
                    let n = await Promise.all(
                        Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry()),
                    ).then((e) => e.filter((e) => null != e));
                    n.length > 0 ? a(n) : cQ();
                },
                [a],
            );
        return (0, r.jsxs)("div", {
            ref: i,
            className: k()(t, cJ.iE),
            onDragEnter: d,
            onDragOver: cX,
            onDragLeave: c,
            onDrop: u,
            children: [
                n,
                l &&
                    (0, r.jsx)("div", {
                        className: cJ.d2,
                        children: (0, r.jsxs)("div", {
                            className: cJ.vW,
                            children: [
                                (0, r.jsx)(cY.A, { icons: eo.ir }),
                                (0, r.jsx)(w.D, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
                                (0, r.jsxs)("div", {
                                    className: cJ.GA,
                                    children: [
                                        (0, r.jsx)(D.E, {
                                            variant: "text-sm/normal",
                                            children: "Drop file(s) into this panel to preview Shop assets!",
                                        }),
                                        (0, r.jsxs)(D.E, {
                                            variant: "text-sm/normal",
                                            children: [
                                                "Click",
                                                (0, r.jsx)(cV.c, {
                                                    className: cJ.q4,
                                                    size: "xs",
                                                    color: eR.A.colors.TEXT_DEFAULT,
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
var c0 = a(120301);
let c1 = new Set([
        eE.RN.HERO_BANNER_STATIC,
        eE.RN.HERO_LOGO,
        eE.RN.PDP_BACKGROUND,
        eE.RN.LOGO,
        eE.RN.MOBILE_BANNER,
        eE.RN.MOBILE_BACKGROUND,
    ]),
    c2 = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    c8 = { max: 5e6, warn: 2e6 },
    c6 = { max: 3e6, warn: 1e6 },
    c3 = { max: 2e6, warn: 1e6 },
    c5 = { max: 1e6, warn: 5e5 },
    c9 = { max: 25e4, warn: 5e4 },
    c4 = {
        [eE.Jn.PROFILE_EFFECT]: c8,
        [eE.Jn.AVATAR_DECORATION]: c6,
        [eE.Jn.PROFILE_FRAME]: c3,
        [eE.RN.HERO_BANNER_ANIMATED]: c8,
        [eE.RN.HERO_BANNER_RIVE]: c8,
        [eE.RN.CATALOG_BANNER_RIVE]: c8,
        [eE.RN.SHOP_BUTTON_BG_HOVER]: c6,
        [eE.RN.SHOP_BUTTON_BG_HOVER_DARK]: c6,
        [eE.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: c6,
        [eE.RN.SHOP_BUTTON_BG_RESTING]: c6,
        [eE.RN.SHOP_BUTTON_BG_RESTING_DARK]: c6,
        [eE.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: c6,
        [eE.RN.HERO_BANNER_STATIC]: c3,
        [eE.RN.UPSELL_BANNER]: c5,
        [eE.RN.UPSELL_BANNER_POPOUT]: c9,
        [eE.RN.MOBILE_BANNER]: c5,
        [eE.RN.MOBILE_BACKGROUND]: c9,
        [eE.RN.MOBILE_HERO]: c5,
        [eE.RN.PDP_BACKGROUND]: c9,
        [eE.RN.LOGO]: c9,
        [eE.RN.TAB_TOOLTIP]: c9,
    },
    c7 = [eE.Kx.COLLECTION],
    ue = [eE.Kx.AVATAR_DECORATIONS, eE.Kx.FRAMES, eE.Kx.NAMEPLATES, eE.Kx.PROFILE_EFFECTS],
    ut = async (e) => {
        let t = e.createReader(),
            a = await new Promise((e) => t.readEntries(e)),
            n = new Set();
        for (let e of a) e.isDirectory && n.add(e.name);
        let l = c7.filter((e) => !n.has(e));
        return ue.some((e) => n.has(e)) || l.push(`at least one of: ${ue.join(", ")}`), l;
    },
    ua = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
    un = (e) => {
        let { names: t, addError: a } = e,
            n = t.filter((e) => !ua.test(e));
        n.length > 0 && a("File names must be in lowercase snake case", n);
    },
    ul = (e, t, a, n, l) => {
        let s = t.size,
            i = s > 1e6 ? `${(s / 1e6).toFixed(2)}MB` : `${(s / 1e3).toFixed(2)}KB`,
            r = `${l ?? t.name} - ${i}`;
        if (s > e.max) {
            let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
            a("Files exceed the recommended size limit - make sure they are optimized!", [`${r} (max: ${t})`]);
        } else s > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [`${r}`]);
    },
    us = (e, t, a, n) => {
        let l = c4[e];
        if (null != l) for (let e of t) e.name.endsWith(".txt") || ul(l, e, a, n);
    },
    ui = (e) => {
        let t = eE.aL[e];
        return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
    },
    ur = ["png", "jpg"];
var uo = a(981388);
let ud = o.createContext({ setDropHandler: () => {} }),
    uc = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    uu = { id: "none", label: "[none selected]", value: null },
    um = () => {
        (0, eO.hasModalOpen)(cH.k)
            ? (0, eO.closeModal)(cH.k)
            : (0, eO.openModalLazy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: cH.k, onCloseRequest: () => (0, eO.closeModal)(cH.k) },
              );
    },
    uh = () => {
        (0, eO.hasModalOpen)(cH.g)
            ? (0, eO.closeModal)(cH.g)
            : (0, eO.openModalLazy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: cH.g, onCloseRequest: () => (0, eO.closeModal)(cH.g) },
              );
    },
    ux = () => {
        let e = (0, eC.pF)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, cK.JE)(),
            n = o.useMemo(() => [uu, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: uo.kO,
                  children: [
                      (0, r.jsx)(ar.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: uo.wR,
                          children: [
                              (0, r.jsx)(w.D, {
                                  variant: "heading-sm/semibold",
                                  children: `Profile Effect (${e.length} to preview)`,
                              }),
                              (0, r.jsx)(eI.K, {
                                  variant: "icon-only",
                                  size: "sm",
                                  onClick: uh,
                                  icon: cV.c,
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
    up = () => {
        let e = (0, cK.bA)(),
            { previewProfileFrameKey: t, setPreviewProfileFrameKey: a } = (0, cK.JE)(),
            n = o.useMemo(() => [uu, ...e.map((e) => ({ id: e.key, label: e.key, value: e.key }))], [e]);
        return 0 === e.length
            ? null
            : (0, r.jsxs)("div", {
                  className: uo.kO,
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
    ug = () => {
        let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, cK.JE)(),
            { avatarDecorationAssets: a } = (0, cK.NE)(),
            n = o.useMemo(() => [uu, ...a.map((e) => ({ id: e.name, label: e.name, value: e.name }))], [a]);
        return 0 === a.length
            ? null
            : (0, r.jsxs)("div", {
                  className: uo.kO,
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
    uv = new Set([eE.RN.HERO_BANNER_STATIC, eE.RN.HERO_BANNER_ANIMATED, eE.RN.HERO_BANNER_RIVE]),
    uj = (e) => {
        let { clearAssets: t, clearIgnoredFiles: a } = e,
            { collectionAssets: n } = (0, cK.NE)(),
            {
                deleteCollectionAsset: l,
                clearAssets: s,
                heroLogoMaxHeight: i,
                setHeroLogoMaxHeight: d,
                heroResponsive: c,
                setHeroResponsive: u,
            } = (0, cK.JE)(),
            m = o.useMemo(() => Object.values(n).map((e) => ({ label: e.name, value: e.type })), [n]),
            x = m.some((e) => e.value === eE.RN.HERO_LOGO),
            p = m.some((e) => uv.has(e.value)),
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
                              className: uo.v7,
                              children: [
                                  x &&
                                      (0, r.jsxs)("div", {
                                          className: uo.cj,
                                          children: [
                                              (0, r.jsx)(D.E, {
                                                  variant: "text-md/normal",
                                                  className: uo.Me,
                                                  children: "Logo size",
                                              }),
                                              (0, r.jsx)(cW.A, {
                                                  className: uo.TQ,
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
                                          className: uo.sy,
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
                          className: uo.wR,
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
                                      className: uo._0,
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
    ub = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
        return 0 === t.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(ar.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: uo.wR,
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
                                      className: uo.yk,
                                      children: (0, r.jsx)(D.E, { variant: "text-md/normal", children: e }),
                                  },
                                  `${e}-${t}`,
                              ),
                          ),
                      }),
                  ],
              });
    },
    uf = () => {
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
                                let n = await ut(t);
                                n.length > 0 && i("Missing required directories", n),
                                    (a = await (0, eE.eg)([t])),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        for (let e of t.collectionFiles) {
                                            let t = (0, eE.pd)(e),
                                                l = null != t ? c4[t] : null;
                                            null != l && ul(l, e, a, n);
                                        }
                                        un({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                        let l = new Set(
                                                t.collectionFiles.map((e) => (0, eE.pd)(e)).filter((e) => null != e),
                                            ),
                                            s = Array.from(c1)
                                                .filter((e) => !l.has(e))
                                                .map(ui);
                                        s.length > 0 && a("Missing required files", s);
                                        let i = Object.values(eE.RN)
                                            .filter((e) => !c1.has(e))
                                            .filter((e) => !l.has(e))
                                            .map(ui);
                                        i.length > 0 && n("Missing optional assets", i);
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        un({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                            Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                                let [t, l] = e,
                                                    s = l.map((e) => e.name);
                                                un({
                                                    names: s.map((e) => {
                                                        let t = e.indexOf("-");
                                                        return e.substring(0, t > 0 ? t : e.length);
                                                    }),
                                                    addError: a,
                                                }),
                                                    us(eE.Jn.PROFILE_EFFECT, l, a, n);
                                                let i = c2
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
                                                        (e) => !c2.some((t) => e.startsWith(t)) && !e.endsWith(".txt"),
                                                    )
                                                    .map((e) => `${t}/${e}`);
                                                r.length > 0 && n("Contains unrecognized files", r);
                                            });
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        un({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                            us(eE.Jn.AVATAR_DECORATION, t.avatarDecorationFiles, a, n);
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e,
                                            l = Object.keys(t.profileFrameDirsMap)
                                                .filter((e) => !ua.test(e))
                                                .map((e) => `${eE.Kx.FRAMES}/${e}`);
                                        l.length > 0 && a("File names must be in lowercase snake case", l);
                                        let s = c4[eE.Jn.PROFILE_FRAME];
                                        Object.entries(t.profileFrameDirsMap).forEach((e) => {
                                            let [t, l] = e,
                                                i = `${eE.Kx.FRAMES}/${t}`,
                                                r = l.previewFile?.name.split(".").pop()?.toLowerCase();
                                            (null != l.previewFile && null != r && ur.includes(r)) ||
                                                a(
                                                    "Missing required preview file for profile frame (preview.png or preview.jpg)",
                                                    [`${i}/preview.{${ur.join("|")}}`],
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
                                                ua.test(l.previewFile.name) ||
                                                o.push(`${i}/${l.previewFile.name}`),
                                            l.layerFiles))
                                                ua.test(e.name) || o.push(`${i}/${t}/${e.name}`);
                                            o.length > 0 && a("File names must be in lowercase snake case", o);
                                            let d = [];
                                            for (let { file: e, folder: t } of l.layerFiles) {
                                                let { parsed: a, errorType: n } = (0, c0.Mf)(e.name);
                                                if (null == a) {
                                                    let a = null != n ? c0.h4[n] : "invalid";
                                                    d.push(`${i}/${t}/${e.name}: ${a}`);
                                                }
                                            }
                                            if (
                                                (d.length > 0 && a("Invalid profile frame layer filenames", d),
                                                null != s)
                                            )
                                                for (let { file: e, folder: t } of (null != l.previewFile &&
                                                    ul(s, l.previewFile, a, n, `${i}/${l.previewFile.name}`),
                                                l.layerFiles))
                                                    ul(s, e, a, n, `${i}/${t}/${e.name}`);
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
            { setDropHandler: u } = o.useContext(ud),
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
                              className: uo._f,
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
                                    className: uo.ck,
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
                                                            className: uo.ck,
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
                                    className: uo.ck,
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
                                                            className: uo.ck,
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
    uy = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, cK.JE)(),
            { ignoredFilenames: n, clearAssets: l, clearIgnoredFilenames: s, processAndUpsertAssets: i } = (0, eE.ds)(),
            { setDropHandler: d } = o.useContext(ud),
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
                        className: uo.sy,
                        children: [
                            (0, r.jsx)(v.d, { checked: e, onChange: (e) => t(e) }),
                            (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Enable Preview" }),
                            (0, r.jsx)(eI.K, {
                                variant: "icon-only",
                                size: "sm",
                                onClick: um,
                                icon: cV.c,
                                "aria-label": "Open preview instructions",
                            }),
                        ],
                    }),
                    (0, r.jsx)(D.E, {
                        variant: "text-md/normal",
                        children: "Drop files in this panel to begin preview.",
                    }),
                    (0, r.jsx)(ux, {}),
                    (0, r.jsx)(up, {}),
                    (0, r.jsx)(ug, {}),
                    (0, r.jsx)(uj, { clearAssets: l, clearIgnoredFiles: s }),
                    (0, r.jsx)(ub, { ignoredFiles: n, handleClearIgnoredFiles: s }),
                ],
            })
        );
    },
    u_ = () => {
        let [e, t] = o.useState("preview");
        return (0, r.jsxs)("div", {
            className: uo.kL,
            children: [
                (0, r.jsx)(cz.I, {
                    options: uc,
                    value: e,
                    onChange: (e) => {
                        let { value: a } = e;
                        return t(a);
                    },
                    className: uo.Vj,
                    optionClassName: uo.UK,
                }),
                (0, r.jsx)(ar.h, { size: 8 }),
                "preview" === e && (0, r.jsx)(uy, {}),
                "validate" === e && (0, r.jsx)(uf, {}),
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
        return (0, r.jsx)(ud.Provider, { value: l, children: (0, r.jsx)(cZ, { onDrop: s, children: t }) });
    };
var uC = a(663803),
    uS = a(859040),
    uN = a(385815);
let uA = () => {
    let e = (0, M.bG)([th.A], () => th.A.skipNumCategories);
    return (0, r.jsxs)("div", {
        className: uN.k,
        children: [
            (0, r.jsx)(D.E, { variant: "text-md/normal", children: "Hide first # of categories" }),
            (0, r.jsx)(uC.l, {
                value: e,
                onChange: (e) => {
                    (0, uS.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
};
var uk =
        (((n = {}).DEFAULT = "default"),
        (n.DEFAULT_WITH_ORB_SHELF = "default_with_orb_shelf"),
        (n.ORB_TAB = "orb_tab"),
        (n.FRAMES = "frames"),
        (n.FRAMES_PINNED = "frames_pinned"),
        n),
    uI = a(295811);
let uD = () => {
    let e = (0, M.bG)([uI.A], () => uI.A.getShopHomeConfigOverride()),
        t = [
            { id: "none", label: "DISABLED (no override)", value: void 0 },
            ...Object.values(uk).map((e) => ({ id: e, label: e, value: e })),
        ];
    return (0, r.jsx)(x.l, {
        label: "Shop Home Override",
        layout: "horizontal",
        options: t,
        value: e,
        onSelectionChange: (e) => {
            (0, uS.Or)(e);
        },
        selectionMode: "single",
    });
};
var uT = a(172471);
let uO = () => {
        let [e, t] = o.useState(void 0);
        return (0, r.jsxs)("div", {
            className: k()(uT.kL, uT.fi),
            children: [
                (0, r.jsx)(p.k, {
                    fullWidth: !0,
                    label: "Shop Layout URL Override",
                    value: e,
                    onChange: (e) => ("" === e ? t(void 0) : t(e)),
                    placeholder: "https://cdn.discordapp.com/assets/content/...",
                }),
                (0, r.jsxs)("div", {
                    className: uT.o1,
                    children: [
                        (0, r.jsx)(h.$, {
                            variant: "critical-primary",
                            text: "Clear",
                            onClick: () => {
                                t(void 0), (0, uS.Aq)(void 0);
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Set",
                            onClick: () => (0, uS.Aq)("" !== e ? e : void 0),
                        }),
                    ],
                }),
            ],
        });
    },
    uR = (e) => {
        let { className: t } = e,
            a = Object.keys(t7.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
        return null == a
            ? null
            : (0, r.jsx)("div", { className: t, style: { zIndex: 1 }, children: (0, r.jsx)(lh, { items: [a] }) });
    };
var uw = a(578797),
    uM = a(628917);
let uL = (e) => {
        let { title: t, expanded: a, onToggle: n, children: l } = e,
            s = o.useId();
        return (0, r.jsx)(cm.N, {
            isExpanded: a,
            className: uM.uW,
            collapsibleContent: (0, r.jsx)("div", { id: s, className: uM.f5, children: l }),
            children: () =>
                (0, r.jsxs)("button", {
                    type: "button",
                    onClick: n,
                    "aria-expanded": a,
                    "aria-controls": s,
                    className: uM.bV,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-md/bold", children: t }),
                        (0, r.jsx)(sB._, { size: "sm", color: "currentColor", className: k()(uM.ai, { [uM.hg]: a }) }),
                    ],
                }),
        });
    },
    uP = () => {
        let e = (0, M.bG)([lf.A], () => lf.A.get("shop_disable_cache")),
            t = (0, M.bG)([lf.A], () => lf.A.get("shop_include_unpublished")),
            a = (0, uw.U)("DevToolsShopPanel"),
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
                className: uM.Lm,
                children: [
                    (0, r.jsxs)("div", {
                        className: uM.dQ,
                        children: [
                            (0, r.jsx)(v.d, {
                                label: "Disable collectibles cache",
                                checked: e,
                                onChange: (e) => (0, lb.L)("shop_disable_cache", e),
                            }),
                            (0, r.jsx)(v.d, {
                                label: "Show unpublished collectibles",
                                checked: t,
                                onChange: (e) => (0, lb.L)("shop_include_unpublished", e),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(uL, {
                        title: "Layouts",
                        expanded: n.has("layouts"),
                        onToggle: () => s("layouts"),
                        children: [(0, r.jsx)(uR, {}), (0, r.jsx)(uD, {}), a && (0, r.jsx)(uO, {}), (0, r.jsx)(uA, {})],
                    }),
                    (0, r.jsx)(uL, {
                        title: "Assets",
                        expanded: n.has("assets"),
                        onToggle: () => s("assets"),
                        children: (0, r.jsx)(u_, {}),
                    }),
                ],
            }),
        });
    },
    uU = [
        { id: "unset", label: "Unset", value: d6.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
        { id: "all", label: "All", value: d6.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
        { id: "usersWithGame", label: "Users With Game", value: d6.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
        { id: "none", label: "None", value: d6.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
    ];
function uG() {
    let e = o.useRef(null),
        t = d9.TA.useSetting();
    return (0, r.jsx)("div", {
        ref: e,
        className: k()(tT.nd, aN.n),
        children: (0, r.jsxs)("div", {
            className: aN.k,
            children: [
                (0, r.jsx)(w.D, { variant: "heading-lg/normal", children: "Settings" }),
                (0, r.jsx)(x.l, {
                    label: "Receive DMs In Game",
                    options: uU,
                    value: t,
                    onSelectionChange: d9.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var uF = a(278416),
    uB = a(220631);
function u$(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function uV(e) {
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
        (0, r.jsx)(d.Ip, { className: uB.Dx, children: (0, r.jsx)(aR.A, { data: n }) })
    );
}
function uW(e) {
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
        className: k()(uB.Dx, uB.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: uB.Vz,
                value: a,
                onChange: (e) => n(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != l && (0, r.jsx)("div", { className: uB.Xf, role: "alert", children: l }),
            (0, r.jsxs)("div", {
                className: uB.KA,
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
let uz = [
    {
        key: "name",
        cellClassName: uB.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function uH(e) {
    let { store: t, initialHeight: a } = e,
        n = o.useMemo(() => {
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
                                      className: uB.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(uV, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: aU.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(uV, { store: t, dataGetter: (e) => e });
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
                                      className: uB.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(uW, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: l, renderSelectedTab: s } = (0, aU.Ay)({ tabs: n }, []);
    return (0, r.jsxs)(aP, {
        className: uB.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(aO.Ay, {
                className: k()(tT.jr, uB.nZ),
                children: [
                    (0, r.jsx)(aO.Ay.Icon, { icon: uF.g, tooltip: t.getName() }),
                    (0, r.jsx)(aO.Ay.Title, { children: t.getName() }),
                ],
            }),
            s({ store: t }),
        ],
    });
}
function uK() {
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
        className: k()(tT.nd, uB.nd),
        children: [
            (0, r.jsx)("div", {
                className: uB.KE,
                children: (0, r.jsx)(ni.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(tO, { columns: uz, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != d &&
                (0, r.jsx)(uH, { store: d, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, s),
        ],
    });
}
var uY = a(91871),
    uq = a.n(uY);
let uJ = [
        {
            key: "id",
            cellClassName: nS.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: nS.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: nS.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    uQ = [
        {
            id: "details",
            name: "Details",
            group: aU.fu.NONE,
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
                    d = ne()(s);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(aO.Ay, {
                            className: k()(tT.jr, nS.nZ),
                            children: [
                                (0, r.jsx)(aO.Ay.Icon, { icon: nn.U, tooltip: t }),
                                (0, r.jsx)(aO.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(n_, {
                            className: nS.ZK,
                            children: [
                                (0, r.jsx)(nE, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: s.toISOString(),
                                        title: (0, nu.i$)(d, "LLLL"),
                                        children: (0, nu.mk)(d),
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
                                (0, r.jsx)(nE, { name: "Override", children: (0, r.jsx)(nC, { value: a.override }) }),
                                (0, r.jsx)(nE, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                                (0, r.jsx)(nE, { name: "Excluded", children: (0, r.jsx)(nC, { value: l }) }),
                                (0, r.jsx)(nE, { name: "Previously tracked", children: (0, r.jsx)(nC, { value: o }) }),
                                (0, r.jsx)(nE, { name: "Location", children: (0, r.jsx)("code", { children: i }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function uX() {
    let [e, t] = o.useState(""),
        a = o.useRef(null),
        n = (0, M.yK)([nf], () => nf.loggedTriggers),
        l = o.useMemo(
            () =>
                n
                    .filter((t) => 0 === e.length || uq()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [n, e],
        ),
        [s, i] = o.useState(void 0),
        d = l.find((e) => e.key === s),
        { TabBar: c, renderSelectedTab: u } = (0, aU.Ay)({ tabs: uQ }, []),
        m = (0, M.bG)([nf], () => nf.trackTriggers),
        h = o.useCallback((e) => {
            tA.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        x = m ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: k()(tT.nd, nS.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nS.rh,
                children: [
                    (0, r.jsx)(lP.m, {
                        text: x,
                        children: (0, r.jsx)(eI.K, {
                            size: "sm",
                            variant: m ? "active" : "primary",
                            icon: m ? lF.E : lG.u,
                            "aria-label": x,
                            onClick: () => h(!m),
                        }),
                    }),
                    (0, r.jsx)(ni.I, {
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
                        icon: ns.u,
                        onClick: L.eY,
                    }),
                ],
            }),
            (0, r.jsx)(tO, { columns: uJ, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != d &&
                (0, r.jsxs)(aP, {
                    className: nS.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(c, {}), u({ loggedTrigger: d })],
                }),
        ],
    });
}
var uZ = a(512950),
    u0 = a(324861),
    u1 = a(243655);
let u2 = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, u0.A)();
    return (0, r.jsx)("div", {
        className: u1.k,
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
                (0, r.jsx)(uZ.p, {
                    messageType: uZ.Y.INFO,
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these",
                }),
            ],
        }),
    });
};
var u8 = a(899e3),
    u6 = a(761853),
    u3 = a(731854);
let u5 = [
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
    u4 = [
        ["capGraphicsCapture", "WGC / Windows Graphics Capture"],
        ["capDxgi", "DDA / DXGI Output Duplication"],
        ["capGdi", "GDI / PrintWindow + BitBlt"],
        ["capVideoHook", "Video Hook"],
    ],
    u7 = [
        ["bypassHybridGpuFpsRestriction", "WGC: Bypass Hybrid-GPU 60 FPS Restriction"],
        ["gdiForceBitblt", "GDI: Force Allow BitBlt"],
        ["allowHdr", "Allow HDR Capture"],
    ];
function me(e) {
    let { title: t, toggles: a, state: n } = e;
    return (0, r.jsxs)(O.B, {
        gap: 8,
        children: [
            (0, r.jsx)(D.E, { variant: "text-lg/bold", children: t }),
            a.map((e) => {
                let [t, a] = e;
                return (0, r.jsx)(rR.S, { label: a, checked: !!n[t], onChange: () => (0, u8.yn)({ [t]: !n[t] }) }, t);
            }),
        ],
    });
}
function mt() {
    let e = (0, M.bG)([u8.Ay], () => u8.Ay.getSnapshot()),
        t = (0, M.bG)([u6.Ay], () => u6.Ay.supports(u3.O5.VIDEO));
    return (0, r.jsxs)(d.Ip, {
        className: tT.nd,
        children: [
            (0, r.jsx)(g.c, { gap: 16 }),
            (0, r.jsx)(me, { title: "Video Codecs (Sender)", toggles: u5, state: e }),
            t
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(g.c, { gap: 16 }),
                          (0, r.jsx)(me, { title: "Video Encoders", toggles: u9, state: e }),
                          (0, r.jsx)(g.c, { gap: 16 }),
                          (0, r.jsx)(me, { title: "Capture Sources", toggles: u4, state: e }),
                          (0, r.jsx)(g.c, { gap: 16 }),
                          (0, r.jsx)(me, { title: "Capture Options", toggles: u7, state: e }),
                      ],
                  })
                : null,
            (0, r.jsx)(g.c, { gap: 16 }),
            (0, r.jsx)(me, {
                title: "Preview",
                toggles: [["alwaysShowCapturePreview", "Always Show (ignore main window focus)"]],
                state: e,
            }),
            (0, r.jsx)(g.c, { gap: 16 }),
        ],
    });
}
var ma = a(77729),
    mn = a(36934);
function ml() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, s] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        i = "processing" === l.status;
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)("div", {
            className: mn.l7,
            children: [
                (0, r.jsx)(D.E, { variant: "text-lg/bold", children: "Batch Audio Processor" }),
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    children:
                        "Process wav files through the Discord audio ingest pipeline (WebRTC APM, Krisp, voice filters) and write output to wav files.",
                }),
                (0, r.jsxs)(O.B, {
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
                                let e = await ma.A.fileManager.showOpenDialog({ properties: ["openDirectory"] });
                                e.length > 0 && t(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)(O.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.k, { fullWidth: !0, value: a, onChange: n, placeholder: "Output directory" }),
                        (0, r.jsx)(h.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await ma.A.fileManager.showOpenDialog({
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
                              u6.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  s((e) => ({ ...e, status: "cancelled" }));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (s({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  u6.Ay.getMediaEngine().processBatchAudioFiles(
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
                    (0, r.jsxs)(O.B, {
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
                                            className: mn.TZ,
                                            children: (0, r.jsxs)(D.E, {
                                                variant: "text-xs/normal",
                                                className: e.success ? mn.$D : mn.uL,
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
var ms = a(207898),
    mi = a.n(ms),
    mr = a(32880),
    mo = a(827343),
    md = a(964486),
    mc = a(602674),
    mu = a(625841),
    mm = a(74848),
    mh = a(573908);
function mx(e) {
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
function mp(e) {
    let { recording: t, playing: a, onPlay: n, onStop: l } = e;
    return (0, r.jsx)(cm.N, {
        collapsibleContent: (0, r.jsx)(mx, { recording: t }),
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
                        children: a ? (0, r.jsx)(lF.E, { size: "xxs" }) : (0, r.jsx)(lG.u, { size: "xxs" }),
                    }),
                    (0, r.jsx)(I.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, n, l;
                            e.stopPropagation(),
                                (a = new Blob([mi()(t.audioBuffer)], { type: "audio/wav" })),
                                (n = URL.createObjectURL(a)),
                                ((l = document.createElement("a")).href = n),
                                (l.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                l.click(),
                                URL.revokeObjectURL(n);
                        },
                        children: (0, r.jsx)(mr.s, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function mg() {
    let { name: e } = (0, mm.x5)(u3.oh.AUDIO_INPUT),
        [t, a] = o.useState(!1),
        [n, l] = o.useState([]),
        s = (0, M.bG)([u6.Ay], () => u6.Ay.getKrispSuppressionLevel()),
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
            vadUseKrisp: _,
            vadKrispActivationThreshold: E,
            noiseCancellation: C,
            noiseSuppression: S,
            noiseSuppressionSupported: N,
            noiseCancellationSupported: A,
            noiseCancellationEnableStats: k,
            vadDuringPreProcess: I,
        } = (0, M.cf)([u6.Ay], () => ({
            krispModels: u6.Ay.getKrispModels(),
            krispModelOverride: u6.Ay.getKrispModelOverride(),
            echoCancellation: u6.Ay.getEchoCancellation(),
            autoThreshold: u6.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: u6.Ay.getModeOptions().vadUseKrisp,
            inputMode: u6.Ay.getMode(),
            vadKrispActivationThreshold: u6.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: u6.Ay.getNoiseCancellation(),
            noiseSuppression: u6.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: u6.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: u6.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: u6.Ay.getKrispEnableStats(),
            vadDuringPreProcess: u6.Ay.getModeOptions().vadDuringPreProcess,
        })),
        T = C ? "KRISP" : S ? "STANDARD" : "NONE",
        R = (0, mc.v)(),
        w = o.useCallback(() => {
            u.current?.stop(), (u.current = null), c(null);
        }, []);
    function L() {
        u6.Ay.getMediaEngine().stopRecordingRawSamples();
    }
    function P(e) {
        if ((t && L(), w(), null == R)) return;
        let a = R.createBufferSource();
        (a.buffer = e.audioBuffer),
            (m.current = R.createGain()),
            (m.current.gain.value = h),
            a.connect(m.current),
            m.current.connect(R.destination),
            (a.loop = !0),
            a.start(),
            (u.current = a),
            c(e);
    }
    o.useEffect(() => {
        w();
    }, [w]),
        (0, md.l0)(() => {
            mo.A.setMode(u6.Ay.getMode(), { vadDuringPreProcess: null, vadKrispActivationThreshold: void 0 });
        });
    let U = [];
    return (
        A && U.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        N && U.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        U.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(d.Ip, {
            className: tT.nd,
            children: (0, r.jsxs)("div", {
                className: mh.l,
                children: [
                    (0, r.jsx)(D.E, { variant: "text-lg/bold", children: "Krisp Tester" }),
                    (0, r.jsx)(mu.U, {
                        label: "Input Device",
                        deviceType: u3.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, r.jsx)(x.l, {
                        label: "Noise Cancellation",
                        value: T,
                        onSelectionChange: (e) => {
                            mo.A.setNoiseCancellation("KRISP" === e), mo.A.setNoiseSuppression("STANDARD" === e);
                        },
                        options: U,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === T &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(cW.A, {
                                    label: "Krisp Suppression Level",
                                    initialValue: s,
                                    onValueChange: mo.A.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, r.jsx)(x.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: j,
                                    options: g.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        mo.A.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(v.d, {
                                    label: "Enable Stats",
                                    checked: k,
                                    onChange: (e) => mo.A.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    b === u3.TB.VOICE_ACTIVITY &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(v.d, {
                                    label: "Auto Threshold",
                                    checked: y,
                                    onChange: (e) => mo.A.setMode(u3.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                y &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(v.d, {
                                                label: "Use Krisp VAD",
                                                checked: _,
                                                onChange: (e) => mo.A.setMode(u3.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            _ &&
                                                (0, r.jsx)(cW.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: E,
                                                    onValueChange: (e) =>
                                                        mo.A.setMode(u3.TB.VOICE_ACTIVITY, {
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
                                    onChange: (e) => mo.A.setMode(u3.TB.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(v.d, {
                        label: "Echo Cancellation",
                        checked: f,
                        onChange: (e) => mo.A.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)(O.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(nt.$n, {
                                color: t ? nt.$n.Colors.RED : nt.$n.Colors.BRAND,
                                onClick: t
                                    ? L
                                    : function () {
                                          w(),
                                              a(!0),
                                              mo.A.setLoopback("krisp_test", !0),
                                              u6.Ay.getMediaEngine().startRecordingRawSamples((t, n, i) => {
                                                  a(!1), mo.A.setLoopback("krisp_test", !1);
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
                    (0, r.jsx)(cW.A, {
                        label: "Volume",
                        initialValue: h,
                        asValueChanges: function (e) {
                            null != m.current && ((m.current.gain.value = e), p(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, r.jsxs)(O.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(D.E, { variant: "text-sm/semibold", children: "Recordings" }),
                            n.map((e, t) =>
                                (0, r.jsx)(mp, { recording: e, playing: e === i, onPlay: P, onStop: w }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var mv = a(874003),
    mj = a(329139);
function mb() {
    return u6.Ay.getMediaEngine().supports(u3.O5.SPATIAL_AUDIO)
        ? (0, r.jsx)(d.Ip, { className: tT.nd, children: (0, r.jsx)(mv.A, {}) })
        : (0, r.jsx)(d.Ip, {
              className: tT.nd,
              children: (0, r.jsxs)("div", {
                  style: { padding: 16 },
                  children: [
                      (0, r.jsx)(w.D, {
                          variant: "heading-lg/semibold",
                          style: { marginBottom: 16 },
                          children: aQ.intl.string(mj.default.EWQJcc),
                      }),
                      (0, r.jsx)(D.E, { variant: "text-md/normal", children: aQ.intl.string(mj.default["9qCMXb"]) }),
                  ],
              }),
          });
}
var mf = a(803306),
    my = a(243217),
    m_ = a(189213),
    mE = a(935208),
    mC = a(878784);
let mS = [
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
function mN() {
    let [e, t] = o.useState(!1),
        a = (0, M.bG)([H.default], () => H.default.getCurrentUser()),
        n = (0, mC.Lh)(),
        l = (0, M.bG)([rM.A], () => rM.A.getPremiumTypeSubscription()),
        s = null != n ? (st.VD[n]?.tenureReqNumMonths ?? 0) : 0,
        i = o.useCallback(
            async (e) => {
                let n = new Date();
                e > 0 ? n.setMonth(n.getMonth() - e) : n.setDate(n.getDate() - 7), n.setDate(n.getDate() - 2);
                let s = {
                    subscription_status: J.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: mE.default.fromTimestamp(n.getTime()),
                };
                t(!0),
                    await nz.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: s, rejectWithError: !1 }),
                    await (0, mf.eO)(a.id),
                    await (0, de.hP)(),
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
            options: mS,
            onSelectionChange: i,
        });
}
var mA =
        (((l = {})[(l.DEFAULT = 0)] = "DEFAULT"),
        (l[(l.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (l[(l.FAILURE = 2)] = "FAILURE"),
        (l[(l.NONE = 3)] = "NONE"),
        l),
    mk =
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
async function mI(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: n, paymentType: l, sendReminderEmail: s } = a;
    return (
        await nz.Bo.post({
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
var mD = a(601107);
let mT = {
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
    mO = {
        [mD.qf.UNKNOWN]: "Unknown",
        [mD.qf.ADMIN]: "Admin",
        [mD.qf.USER]: "User",
        [mD.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [mD.qf.DEFERRED_START]: "Deferred Start",
        [mD.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    mR = [
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
function mw(e) {
    let { subscription: t, onClose: a, onUpdated: n, transitionState: l } = e,
        [s, i] = o.useState(ne()()),
        [d, c] = o.useState(ne()().format("HH:mm")),
        [m, h] = o.useState(!1),
        [x, p] = o.useState(void 0),
        g = async () => {
            if (null == s) return void p("Please select a target date");
            let [e, l] = d.split(":").map(Number),
                i = s.clone().hours(e).minutes(l).seconds(0).milliseconds(0);
            h(!0), p(void 0);
            try {
                await mI(t.id, mk.TIME_TRAVEL, { targetDate: i, paymentType: mA.DEFAULT, sendReminderEmail: !1 }),
                    n(),
                    a();
            } catch (e) {
                p(e.body?.message || e.message || "Failed to time travel");
            } finally {
                h(!1);
            }
        };
    return (0, r.jsx)(m_.Modal, {
        transitionState: l,
        onClose: () => (a(), Promise.resolve()),
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: a },
            { text: "Time Travel", variant: "primary", onClick: g, disabled: m || null == s },
        ],
        children: (0, r.jsxs)(O.B, {
            gap: 16,
            children: [
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, r.jsx)(s4.J, { label: "Target Date", value: s, onSelect: i }),
                (0, r.jsx)(u.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, r.jsx)("input", {
                        type: "time",
                        value: d,
                        onChange: (e) => {
                            c(e.target.value);
                        },
                        className: r8.Qn,
                    }),
                }),
                (0, r.jsxs)(O.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(D.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, r.jsxs)(O.B, {
                            gap: 4,
                            children: [
                                (0, r.jsxs)(D.E, {
                                    variant: "text-xs/normal",
                                    className: r8.JX,
                                    children: ["Start: ", ne()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(D.E, {
                                    variant: "text-xs/normal",
                                    className: r8.JX,
                                    children: ["End: ", ne()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
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
function mM(e) {
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
            return mE.default.fromTimestamp(t.getTime());
        },
        y = async (e) => {
            let { status: t = n.status, premiumStreakStart: a, endedAt: s } = e,
                i = {
                    subscription_status: t,
                    ...(null != a ? { premium_streak_started_at: f(a) } : null),
                    ...(null != s ? { ended_at: f(s) } : null),
                };
            await nz.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: i, rejectWithError: !1 }), l();
        },
        _ = async () => {
            try {
                await mI(n.id, mk.RENEW, {
                    targetDate: ne()(new Date()),
                    paymentType: mA.DEFAULT,
                    sendReminderEmail: !1,
                });
            } catch (e) {
                b(e.body?.message || e.message || "Failed to renew subscription");
            }
            l();
        },
        E = st.hd[n.planIdFromItems]?.premiumType === st.PremiumTypes.TIER_0,
        C = n.metadata?.ended_at,
        S = null != C ? new Date(C).toISOString().substring(0, 10) : "",
        N = [
            { id: "id", label: `ID: ${n.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = n.status), t in mT) ? mT[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        A = n.hasActiveTrial,
        R = n.metadata?.active_discount_id != null;
    return (
        A && N.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        R && N.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        n.status !== J.Dmq.ACTIVE &&
            N.push({
                id: "dates",
                label: `Dates: ${(0, nu.i$)(n.createdAt, "LL")} - ${(0, nu.i$)(n.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        n.status === J.Dmq.PAUSED &&
            N.push({
                id: "pause-reason",
                label: `Pause Reason: ${n.pauseReason in mO ? mO[n.pauseReason] : `Unknown pause reason ${n.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: k()(so.Nr, E ? so.Qf : so.C1),
            children: (0, r.jsxs)(u.n, {
                label: `Type: ${null == ((a = n.planIdFromItems)) ? "No plan id" : a in st.hd ? st.hd[a].name : `Unknown plan id ${a}`}`,
                className: r8.lI,
                children: [
                    (0, r.jsx)(r1.C, {
                        items: N,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    A &&
                        (0, r.jsxs)("div", {
                            className: r8.VK,
                            children: [
                                (0, r.jsxs)(I.D, {
                                    onClick: () => {
                                        p(!m);
                                    },
                                    className: r8.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(D.E, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, r.jsx)(l7.A, { direction: m ? l7.A.Directions.UP : l7.A.Directions.DOWN }),
                                    ],
                                }),
                                m &&
                                    (0, r.jsxs)("ul", {
                                        className: r8.j3,
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
                                                                ? (0, nu.i$)(n.trialEndsAt, "LL")
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
                            className: r8.VK,
                            children: [
                                (0, r.jsxs)(I.D, {
                                    onClick: () => {
                                        v(!g);
                                    },
                                    className: r8.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(D.E, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, r.jsx)(l7.A, { direction: g ? l7.A.Directions.UP : l7.A.Directions.DOWN }),
                                    ],
                                }),
                                g &&
                                    (0, r.jsxs)("ul", {
                                        className: r8.j3,
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
                                                                ? (0, nu.i$)(
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
                            className: r8.VK,
                            children: [
                                (0, r.jsxs)(I.D, {
                                    onClick: () => {
                                        i(!s);
                                    },
                                    className: r8.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(D.E, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, r.jsx)(l7.A, { direction: s ? l7.A.Directions.UP : l7.A.Directions.DOWN }),
                                    ],
                                }),
                                s &&
                                    (0, r.jsx)("ul", {
                                        className: r8.j3,
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
                        className: r8.VK,
                        children: [
                            (0, r.jsxs)(I.D, {
                                onClick: () => {
                                    c(!d);
                                },
                                className: r8.Eh,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(D.E, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, r.jsx)(l7.A, { direction: d ? l7.A.Directions.UP : l7.A.Directions.DOWN }),
                                ],
                            }),
                            d &&
                                (0, r.jsxs)(O.B, {
                                    gap: 24,
                                    children: [
                                        (0, r.jsx)(x.l, {
                                            label: "Status",
                                            value: n.status,
                                            options: mR,
                                            onSelectionChange: (e) => {
                                                y({ status: e });
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsxs)(O.B, {
                                                    gap: 12,
                                                    children: [
                                                        (0, r.jsx)(h.$, {
                                                            variant: "primary",
                                                            size: "sm",
                                                            text: "Renew Subscription",
                                                            onClick: (e) => _(),
                                                        }),
                                                        (0, r.jsx)(h.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, eO.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, r.jsx)(mw, {
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
                                                        className: r8.z3,
                                                        children: (0, r.jsx)(T.w, { type: "critical", children: j }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)(O.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(s4.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: ne()(n.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => y({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(mN, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(s4.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== S ? ne()(S) : void 0,
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
let mL = async () =>
        (
            await nz.Bo.get({
                url: J.Rsh.BILLING_SUBSCRIPTIONS,
                query: { include_inactive: !0, limit: 5 },
                rejectWithError: !1,
            })
        ).body.map((e) => my.A.createFromServer(e)),
    mP = [
        { id: "nitro-monthly", label: "Nitro Monthly", value: st.gD.PREMIUM_MONTH_TIER_2 },
        { id: "nitro-yearly", label: "Nitro Yearly", value: st.gD.PREMIUM_YEAR_TIER_2 },
        { id: "nitro-classic-monthly", label: "Nitro Classic Monthly", value: st.gD.PREMIUM_MONTH_TIER_1 },
        { id: "nitro-classic-yearly", label: "Nitro Classic Yearly", value: st.gD.PREMIUM_YEAR_TIER_1 },
        { id: "basic-monthly", label: "Basic Monthly", value: st.gD.PREMIUM_MONTH_TIER_0 },
        { id: "basic-yearly", label: "Basic Yearly", value: st.gD.PREMIUM_YEAR_TIER_0 },
        { id: "reverse-trial-1week", label: "Reverse Trial 1-week", value: st.gd },
        { id: "reverse-trial-2week", label: "Reverse Trial 2-week", value: st.Uk },
        { id: "nitro-squad-monthly", label: "Nitro Squad Monthly", value: st.gD.PREMIUM_GROUP_MONTH },
    ];
function mU() {
    let e = (0, M.bG)([rM.A], () => rM.A.getPremiumTypeSubscription()),
        t = (0, M.bG)([H.default], () => H.default.getCurrentUser()),
        [a, n] = o.useState("511651880837840896"),
        [l, s] = o.useState([]),
        [i, c] = o.useState(!1),
        u = o.useCallback(async () => {
            try {
                c(!0), await (0, de.hP)(), await (0, mf.eO)(t.id), s(await mL());
            } finally {
                c(!1);
            }
        }, [t]);
    o.useEffect(() => {
        u();
    }, [u]);
    let m = o.useMemo(() => l.filter((e) => e.status !== J.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [l]),
        p = async () => {
            await nz.Bo.post({ url: "/debug/subscription", body: { plan_id: a }, rejectWithError: !1 }), await u();
        },
        g = async () => {
            await nz.Bo.del({ url: "/debug/subscription", rejectWithError: !1 }), await u();
        };
    return (0, r.jsx)(d.Ip, {
        className: tT.nd,
        children: (0, r.jsxs)("div", {
            className: so.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: so.dL,
                    children: [
                        (0, r.jsx)(w.D, {
                            variant: "heading-lg/semibold",
                            className: tT.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, r.jsx)(eI.K, {
                            "aria-label": "Refresh",
                            icon: l4.f,
                            size: "sm",
                            variant: "icon-only",
                            disabled: i,
                            onClick: u,
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: k()([so.uW, so.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(x.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: mP,
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
                null != e && (0, r.jsx)(mM, { subscription: e, onUpdated: u }),
                (0, r.jsx)(w.D, { variant: "heading-lg/semibold", className: tT.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: k()([so.uW, so.Uo]),
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
                            m.map((e) => (0, r.jsx)(mM, { subscription: e, onUpdated: u }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var mG = a(284009),
    mF = a.n(mG),
    mB = a(889137),
    m$ = a(412703),
    mV = a(440703),
    mW = a(267548),
    mz = a(668824),
    mH = a(695366),
    mK = a(359778),
    mY = a(507107),
    mq = a(801365),
    mJ = a(792620),
    mQ = a(241124),
    mX = a(732047),
    mZ = a(717695),
    m0 = a(961974),
    m1 = a(127219),
    m2 = a(262514),
    m8 = a(291922),
    m6 = a(317097),
    m3 = a(452027),
    m5 = a(922016),
    m9 = a(714385),
    m4 = a(359923);
let m7 = function (e) {
    let { colorKey: t, value: a, onChange: n, title: l } = e,
        s = o.useRef(null);
    return (0, r.jsx)(m3.D, {
        label: l,
        children: (0, r.jsx)(m5.Y, {
            targetElementRef: s,
            renderPopout: (e) => (0, r.jsx)(ch.VN, { ...e, value: a, onChange: (e) => n(t, (0, m6.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(I.D, {
                    ...e,
                    innerRef: s,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: m4.O6,
                    style: { backgroundColor: a },
                    children: (0, r.jsx)(m9.d, { size: "xs", color: "currentColor", className: m4.WY }),
                }),
        }),
    });
};
var he = a(247928);
let ht = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: n = !1 } = e;
    return (0, r.jsx)(he.M, {
        children: (0, r.jsx)(mK.Z, {
            className: k()(m4.Rx, { [m4.aK]: n }),
            outline: n,
            children: (0, r.jsx)("div", {
                className: m4.AZ,
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
var ha = a(643374);
let hn = function (e) {
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
                children: (0, r.jsx)(ha.A, {
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
    hl = function (e) {
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
var hs = a(31587);
let hi = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: n } = (0, hs.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
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
var hr = a(843282),
    ho = a(972886);
let hd = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    hc = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: n } = e;
        return (0, r.jsxs)(O.B, {
            gap: 20,
            children: [
                (0, r.jsx)(hr.Pw, {
                    label: "Task Type(s)",
                    className: ho.Z,
                    placeholder: "Select Task Preset",
                    options: hd,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, l, s, i, r;
                        return (
                            e ===
                            ((t = n.tasks),
                            (a = m$.n.PLAY_ON_PLAYSTATION in t || m$.n.PLAY_ON_XBOX in t),
                            (l = m$.n.PLAY_ON_DESKTOP in t),
                            (s = m$.n.STREAM_ON_DESKTOP in t),
                            (i = m$.n.WATCH_VIDEO in t),
                            (r = m$.n.PLAY_ACTIVITY in t),
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
                                        a[m$.n.STREAM_ON_DESKTOP] = { type: m$.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[m$.n.PLAY_ON_DESKTOP] = { type: m$.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        (a[m$.n.PLAY_ON_PLAYSTATION] = {
                                            type: m$.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[m$.n.PLAY_ON_XBOX] = {
                                                type: m$.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 4:
                                        (a[m$.n.PLAY_ON_DESKTOP] = { type: m$.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[m$.n.PLAY_ON_PLAYSTATION] = {
                                                type: m$.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[m$.n.PLAY_ON_XBOX] = {
                                                type: m$.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 2:
                                        a[m$.n.WATCH_VIDEO] = {
                                            type: m$.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[m$.n.PLAY_ACTIVITY] = { type: m$.n.PLAY_ACTIVITY, target: t };
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
                    value: String(a / nK.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= nK.A.Seconds.MINUTE;
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
var hu = a(818348);
let hm = function () {
    let e = (0, ee.Ay)();
    return (0, r.jsx)(m3.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(et.zy, {
                    theme: hu.NJ.LIGHT,
                    isSelected: e === hu.NJ.LIGHT,
                    onSelect: () => (0, d7.u_)({ theme: hu.NJ.LIGHT }),
                }),
                (0, r.jsx)(et.zy, {
                    theme: hu.NJ.DARK,
                    isSelected: e === hu.NJ.DARK,
                    onSelect: () => (0, d7.u_)({ theme: hu.NJ.DARK }),
                }),
            ],
        }),
    });
};
var hh =
    (((i = {})[(i.UNENROLLED = 0)] = "UNENROLLED"),
    (i[(i.ENROLLED = 1)] = "ENROLLED"),
    (i[(i.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (i[(i.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (i[(i.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (i[(i.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (i[(i.CLAIMED = 6)] = "CLAIMED"),
    i);
let hx = function (e) {
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
var hp = a(617986);
let hg = ["png", "gif", "webp"],
    hv = [...hg, "jpg", "jpeg"],
    hj = Array.from(new Set([...hv, "gif", "mp4", "webm"]));
function hb() {
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
let hf = "1193992107035983872",
    hy = {
        id: hf,
        preview: !0,
        config: {
            id: hf,
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
                joinOperator: mz.K.AND,
                tasks: { [m$.n.PLAY_ON_DESKTOP]: { type: m$.n.PLAY_ON_DESKTOP, target: 300 } },
            },
            features: [],
            sharePolicy: mW.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function h_() {
    var e;
    let [t, n] = o.useState(hy),
        l = o.useCallback((e) => {
            n({ ...e, preview: !0 });
        }, []),
        [s, i] = o.useState(hh.UNENROLLED),
        [c, u] = o.useState(!1),
        [m, x] = o.useState(!1),
        [p, g] = o.useState(null),
        j =
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
            s = n[m$.n.WATCH_VIDEO];
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
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...n, [m$.n.WATCH_VIDEO]: { ...s, assets: i } } },
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
    function E(e, a) {
        l({ ...t, config: { ...t.config, colors: { ...t.config.colors, [e]: a } } });
    }
    function C() {
        (0, mq.tU)(t.config) && (0, hp.hJ)(t, mY.uF.GIFT_INVENTORY_FOR_YOU, mY.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let S = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * nK.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        N = o.useMemo(() => m$.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    mF()(!1 !== t.preview && null != t.preview, "Preview config must have property preview: true");
    let A = t.config.taskConfigV2.tasks[m$.n.WATCH_VIDEO];
    return (0, r.jsxs)(d.Ip, {
        className: m4.kL,
        children: [
            (0, r.jsx)(w.D, { variant: "heading-lg/bold", className: m4.R_, children: "Quest Preview Tool" }),
            (0, r.jsx)("div", {
                className: m4.OA,
                children: (0, r.jsx)(hi, {
                    onSelect: function (e) {
                        g(e),
                            null == e ||
                                (i(
                                    (function (e) {
                                        if (null == e.userStatus) return hh.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return hh.CLAIMED;
                                        if (null != e.userStatus.completedAt) return hh.COMPLETED_100;
                                        let t = (0, mJ.Yh)(e),
                                            a = t.progressSeconds,
                                            n = t.targetSeconds;
                                        return a / n >= 1
                                            ? hh.COMPLETED_100
                                            : a / n >= 0.75
                                              ? hh.COMPLETED_75
                                              : a / n >= 0.5
                                                ? hh.COMPLETED_50
                                                : a / n >= 0.25
                                                  ? hh.COMPLETED_25
                                                  : hh.ENROLLED;
                                    })(e),
                                ),
                                l(e));
                    },
                    quest: p,
                }),
            }),
            (0, r.jsx)(w.D, { variant: "heading-md/semibold", className: m4.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: m4.OA,
                children: (0, r.jsx)(hc, {
                    taskDuration: S,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        l({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)(w.D, { variant: "heading-md/semibold", className: m4.fV, children: "Messages" }),
            (0, r.jsxs)("div", {
                className: m4.OA,
                children: [
                    (0, r.jsx)(hl, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: y,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, r.jsx)(hl, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: y,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(hl, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: y,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    N &&
                        (0, r.jsx)(hl, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let n = t.config.taskConfigV2.tasks,
                                    s = n[m$.n.WATCH_VIDEO];
                                if (null == s) return;
                                let i = { ...s.messages, [e]: a };
                                l({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...n, [m$.n.WATCH_VIDEO]: { ...s, messages: i } },
                                        },
                                    },
                                });
                            },
                            initialValue: A?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)(w.D, { variant: "heading-md/semibold", className: m4.fV, children: "Assets" }),
            (0, r.jsxs)("div", {
                className: m4.OA,
                children: [
                    (0, r.jsx)(hn, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: b,
                        filters: hj,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, r.jsx)(hn, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: b,
                        filters: hj,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, r.jsx)(hn, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: b,
                        filters: hj,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(hn, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: b,
                        filters: hj,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, r.jsx)(hn, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: b,
                        filters: [...hv, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, r.jsx)(hn, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: b,
                        filters: [...hg, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    N &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(hn, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: f,
                                    filters: hj,
                                    initialValue: A?.assets.video.url,
                                }),
                                (0, r.jsx)(hn, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: f,
                                    filters: hj,
                                    initialValue: A?.assets.videoLowRes?.url,
                                }),
                                (0, r.jsx)(hn, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: f,
                                    filters: hv,
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
                                className: m4.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: m4.OA,
                                children: [
                                    (0, r.jsx)(hl, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => _(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(hl, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => _(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== mV.l.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(hn, {
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
                                            filters: hj,
                                            initialValue: e.asset,
                                        }),
                                    (0, r.jsxs)(O.B, {
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
            (0, r.jsx)(w.D, { variant: "heading-md/semibold", className: m4.fV, children: "Colors & Quest States" }),
            (0, r.jsxs)("div", {
                className: m4.OA,
                children: [
                    (0, r.jsxs)("div", {
                        className: m4.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(m7, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: E,
                                value: t.config.colors.primary,
                            }),
                            (0, r.jsx)(m7, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: E,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: m4.OA, children: (0, r.jsx)(hm, {}) }),
                    (0, r.jsx)(hx, {
                        onChange: function (e) {
                            switch ((i(e), e)) {
                                case hh.UNENROLLED:
                                    l({ ...t, userStatus: null });
                                    break;
                                case hh.ENROLLED:
                                    l({ ...t, userStatus: hb({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case hh.COMPLETED_25:
                                    l({
                                        ...t,
                                        userStatus: hb({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * S,
                                        }),
                                    });
                                    break;
                                case hh.COMPLETED_50:
                                    l({
                                        ...t,
                                        userStatus: hb({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * S,
                                        }),
                                    });
                                    break;
                                case hh.COMPLETED_75:
                                    l({
                                        ...t,
                                        userStatus: hb({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * S,
                                        }),
                                    });
                                    break;
                                case hh.COMPLETED_100:
                                    l({
                                        ...t,
                                        userStatus: hb({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: S,
                                        }),
                                    });
                                    break;
                                case hh.CLAIMED:
                                    l({
                                        ...t,
                                        userStatus: hb({
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
            (0, r.jsx)(w.D, { variant: "heading-lg/bold", className: m4.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: m4.$$,
                children: [
                    (0, r.jsxs)(ht, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: m4.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, r.jsx)(D.E, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: m4.ok,
                                        children: (0, r.jsx)(mQ.jY, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, r.jsx)(mZ.A, { children: (0, r.jsx)(mX.Y, { quest: t }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(ht, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(mQ.jY, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, r.jsx)(m8.Ay, {
                                    quest: t,
                                    className: m4.d,
                                    questContent: mY.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: mY.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(ht, {
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
                                className: m4.l4,
                                children: (0, r.jsx)(mQ.jY, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, r.jsx)("div", {
                                        className: m4.Jr,
                                        children: (0, r.jsx)(m0.A, {
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
                        className: m4.NY,
                        children: (0, r.jsx)(v.d, {
                            label: "Is Participating:",
                            checked: c,
                            onChange: function (e) {
                                u(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(ht, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            m
                                ? (0, r.jsx)(m1.l, { questId: t.id })
                                : (0, r.jsx)(
                                      m2.M,
                                      {
                                          quest: t,
                                          location: mY.uF.QUESTS_EMBED,
                                          sourceQuestContent: mY.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: m4.NY,
                        children: (0, r.jsx)(v.d, { label: "Invalid Quests Embed:", checked: m, onChange: x }),
                    }),
                    N &&
                        (0, r.jsxs)(ht, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(w.D, { variant: "heading-sm/semibold", children: "Video Player" }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        let e = performance.now();
                                        (0, eO.openModalLazy)(async () => {
                                            let { default: n } = await Promise.all([
                                                a.e("22448"),
                                                a.e("10310"),
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
                                                    sourceQuestContent: mY.uF.INTERNAL_PREVIEW_TOOL,
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
class hE extends o.Component {
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
                  className: m4.TA,
                  children: [
                      (0, r.jsx)(mH.E, { className: m4.Yw }),
                      (0, r.jsx)(w.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(h.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, r.jsx)(mK.Z, {
                              className: m4.Fx,
                              children: (0, r.jsx)("code", { className: m4.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, r.jsx)(h_, {}, t);
    }
}
var hC = a(913122),
    hS = a(839214),
    hN = a(77138),
    hA = a(450827),
    hk = a(626584),
    hI = a(174768),
    hD = a(205761),
    hT = a(860071),
    hO = a(696451),
    hR = a(860689),
    hw = a(926140);
let hM = new hk.A("SearchDebugUtils");
function hL() {
    hM.info("--------------------------");
}
function hP() {
    let e = hI.A.getProps();
    hM.info("START Quick Switcher State"),
        hM.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((hM.info(`Result Type: ${e.type}`), e.type)) {
                case hw.rD.GUILD:
                    hM.info(`guild id: ${e.record.id}`);
                    break;
                case hw.rD.TEXT_CHANNEL:
                case hw.rD.VOICE_CHANNEL:
                    hM.info(`channel type: ${e.record.type}`),
                        hM.info(`channel id: ${e.record.id}`),
                        hM.info(`name: ${e.record.name}`);
                    break;
                case hw.rD.DM:
                    hM.info(`channel type: ${e.record.type}`),
                        hM.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (hM.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = H.default.getUser(e);
                                null != t &&
                                    (hM.info(`recipient username: ${t.username}`),
                                    hM.info(`recipient global name: ${X.Ay.getGlobalName(t)}`),
                                    hM.info(`recipient nickname: ${ac.A.getNickname(t.id)}`));
                            }));
                    break;
                case hw.rD.GROUP_DM:
                    hM.info(`channel type: ${e.record.type}`),
                        hM.info(`channel id: ${e.record.id}`),
                        hM.info(`name: ${(0, ao.m1)(e.record, H.default, ac.A)}`),
                        e.record.isGroupDM() &&
                            (hM.info(`default name: ${(0, ao.ks)(e.record, H.default, ac.A)}`),
                            hM.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = H.default.getUser(e);
                                null != t &&
                                    (hM.info(`recipient username: ${t.username}`),
                                    hM.info(`recipient global name: ${X.Ay.getGlobalName(t)}`),
                                    hM.info(`recipient nickname: ${ac.A.getNickname(t.id)}`));
                            }));
                    break;
                case hw.rD.USER:
                    hM.info(`user id: ${e.record.id}`),
                        hM.info(`username: ${e.record.username}`),
                        hM.info(`global name: ${X.Ay.getGlobalName(e.record)}`),
                        hM.info(`nickname: ${ac.A.getNickname(e.record.id)}`),
                        hM.info(`guild nicknames: ${hO.Ay.getNicknames(e.record.id)}`);
            }
            hM.info(`frecency score: ${hD.A.getScoreWithoutFetchingLatest(e.record.id)}`), hL();
        }),
        hM.info("END Quick Switcher State\n");
}
async function hU() {
    hM.info("START User Search Worker State");
    let e = await hA.A.requestDebugState();
    null == e
        ? hM.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
              let [t, a] = e;
              hM.info(`id: ${t}`),
                  hM.info(`username: ${a.username}`),
                  hM.info(`global name: ${a.globalName}`),
                  hM.info(`nickname: ${a.friendNickname}`),
                  Object.entries(a.nicknames).forEach((e) => {
                      let [t, a] = e;
                      hM.info(`guild id: ${t}`), hM.info(`guild nickname: ${a}`);
                  }),
                  hL();
          }),
          hM.info("END User Search Worker State\n"));
}
async function hG() {
    let e = await hA.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        a = H.default.getUsers(),
        n = new Set(Object.keys(t)),
        l = mE.default.keys(a),
        s = [];
    return (
        l.forEach((e) => {
            n.has(e) || s.push(e);
        }),
        s
    );
}
async function hF(e) {
    let t = await hA.A.requestDebugState(),
        a = null != t ? JSON.parse(t.users)[e] : null,
        n = aK.A.getGuildIds(),
        l = [];
    n.forEach((t) => {
        let a = hO.Ay.getMember(t, e);
        null != a && l.push(a);
    });
    let s = hT.A.getDebugState(e);
    return { user: H.default.getUser(e), searchWorkerUser: a, guildMembers: l, guildMemberRequests: s };
}
var hB = a(929948);
function h$(e) {
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
                    className: hB.qS,
                    children: n,
                }),
            a &&
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: hB.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let hV = (0, hS.D)(() => ({
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
function hW() {
    let e = hV.useField("includeFrecency"),
        t = hV.useField("includeFriends"),
        a = hV.useField("includeDMs"),
        n = hV.useField("includeGDMs"),
        l = hV.useField("includeQuickSwitcherState"),
        s = hV.useField("includeUserSearchWorkerState"),
        i = hV.useField("isUploading"),
        d = hV.useField("isSuccess"),
        c = hV.useField("errorMessage"),
        m = o.useCallback(async () => {
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
                            ((i = ac.A.getFriendIDs()),
                            hM.info("START Discord Friends"),
                            i.forEach((e) => {
                                let t = H.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    n = X.Ay.getGlobalName(t),
                                    l = ac.A.getNickname(t.id),
                                    s = hO.Ay.getNicknames(t.id);
                                hM.info(`username: ${a}`),
                                    hM.info(`global name: ${n}`),
                                    hM.info(`nickname: ${l}`),
                                    hM.info(`guild nicknames: ${s}`),
                                    hL();
                            }),
                            hM.info("END Discord Friends\n")),
                        a &&
                            ((r = ad.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                e.isGroupDM() && o.push(e), e.isDM() && d.push(e);
                            }),
                            hM.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, ao.m1)(e, H.default, ac.A),
                                    a = (0, ao.ks)(e, H.default, ac.A);
                                hM.info(`id: ${e.id}`),
                                    hM.info(`name: ${t}`),
                                    hM.info(`default name: ${a}`),
                                    hM.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = H.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = X.Ay.getGlobalName(t),
                                            l = ac.A.getNickname(t.id),
                                            s = hO.Ay.getNicknames(t.id);
                                        hM.info(`username: ${a}`),
                                            hM.info(`global name: ${n}`),
                                            hM.info(`nickname: ${l}`),
                                            hM.info(`guild nicknames: ${s}`),
                                            hL();
                                    });
                            }),
                            hM.info("END Logging Group DM Channels\n"),
                            hM.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, ao.m1)(e, H.default, ac.A);
                                hM.info(`id: ${e.id}`), hM.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = H.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = X.Ay.getGlobalName(n),
                                    i = ac.A.getNickname(n.id);
                                hM.info(`username: ${l}`),
                                    hM.info(`global name: ${s}`),
                                    hM.info(`nickname: ${i}`),
                                    hL();
                            }),
                            hM.info("END Logging DM Channels\n")),
                        n &&
                            ((c = ad.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                e.isGroupDM() && u.push(e), e.isDM() && m.push(e);
                            }),
                            hM.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, ao.m1)(e, H.default, ac.A),
                                    a = (0, ao.ks)(e, H.default, ac.A);
                                hM.info(`id: ${e.id}`),
                                    hM.info(`name: ${t}`),
                                    hM.info(`default name: ${a}`),
                                    hM.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = H.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = X.Ay.getGlobalName(t),
                                            l = ac.A.getNickname(t.id),
                                            s = hO.Ay.getNicknames(t.id);
                                        hM.info(`username: ${a}`),
                                            hM.info(`global name: ${n}`),
                                            hM.info(`nickname: ${l}`),
                                            hM.info(`guild nicknames: ${s}`),
                                            hL();
                                    });
                            }),
                            hM.info("END Logging Group DM Channels\n"),
                            hM.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, ao.m1)(e, H.default, ac.A);
                                hM.info(`id: ${e.id}`), hM.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = H.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = X.Ay.getGlobalName(n),
                                    i = ac.A.getNickname(n.id);
                                hM.info(`username: ${l}`),
                                    hM.info(`global name: ${s}`),
                                    hM.info(`nickname: ${i}`),
                                    hL();
                            }),
                            hM.info("END Logging DM Channels\n")),
                        e &&
                            ((h = hD.A.getFrequentlyWithoutFetchingLatest()),
                            (x = []),
                            (p = []),
                            (g = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, hR.fh)(e)
                                    ? x.push(e)
                                    : e.isDM()
                                      ? g.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : p.push(e);
                            }),
                            hM.info("START Frecency"),
                            hM.info("Guilds"),
                            x.forEach((e) => {
                                let t = hD.A.getScoreWithoutFetchingLatest(e.id);
                                hM.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            hL(),
                            hM.info("DM Channels"),
                            g.forEach((e) => {
                                let t = hD.A.getScoreWithoutFetchingLatest(e.id);
                                hM.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            hL(),
                            hM.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = hD.A.getScoreWithoutFetchingLatest(e.id);
                                hM.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    hM.info(`default name: ${(0, ao.ks)(e, H.default, ac.A)}`),
                                    hM.info(`name: ${(0, ao.m1)(e, H.default, ac.A)}`);
                            }),
                            hL(),
                            hM.info("Guild Channels"),
                            p.forEach((e) => {
                                let t = hD.A.getScoreWithoutFetchingLatest(e.id);
                                hM.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            hL(),
                            hM.info("END Frecency\n")),
                        l && hP(),
                        s && hU(),
                        await (0, hN.a)(J.Umv.WEB_APP),
                        hV.setState({ isSuccess: !0, errorMessage: null });
                } catch (t) {
                    let e = new hC.LG(t);
                    hV.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    hV.setState({ isUploading: !1 });
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
                onChange: () => hV.setState({ includeFrecency: !e }),
            }),
            (0, r.jsx)(v.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => hV.setState({ includeFriends: !t }),
            }),
            (0, r.jsx)(v.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => hV.setState({ includeDMs: !a }),
            }),
            (0, r.jsx)(v.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => hV.setState({ includeGDMs: !n }),
            }),
            (0, r.jsx)(v.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: l,
                onChange: () => hV.setState({ includeQuickSwitcherState: !l }),
            }),
            (0, r.jsx)(v.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: s,
                onChange: () => hV.setState({ includeUserSearchWorkerState: !s }),
            }),
            (0, r.jsx)(h$, {
                isUploading: i,
                isSuccess: d,
                errorMessage: c,
                onClick: m,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let hz = (0, hS.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function hH() {
    let e = hz.useField("userIds"),
        t = hz.useField("isLoading"),
        a = hz.useField("isSuccess"),
        n = hz.useField("errorMessage"),
        l = hz.useField("lastRunAt"),
        s = o.useCallback(async () => {
            hz.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await hG();
                hz.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                hz.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                hz.setState({ isLoading: !1 });
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
                            className: hB.J1,
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
                    className: hB.N6,
                    children: [
                        null != n &&
                            (0, r.jsx)(D.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: hB.qS,
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
                                    (0, r.jsx)("div", { className: hB.uk, children: i }),
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
let hK = (0, hS.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function hY() {
    let e = hK.useField("isRecording"),
        t = hK.useField("isUploading"),
        a = hK.useField("isSuccess"),
        n = hK.useField("errorMessage"),
        l = o.useRef([]),
        s = o.useRef(""),
        i = o.useCallback(() => {
            let { results: e, query: t } = hI.A.getProps();
            (l.current !== e || s.current !== t) && ((l.current = e), (s.current = t), hP());
        }, []);
    o.useEffect(() => {
        if (e) return hI.A.addChangeListener(i), () => hI.A.removeChangeListener(i);
    }, [i, e]);
    let d = o.useCallback(async () => {
        let { isUploading: e } = hK.getState();
        if (!e)
            try {
                hK.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, hN.a)(J.Umv.WEB_APP),
                    hK.setState({ isSuccess: !0, errorMessage: null });
            } catch (t) {
                let e = new hC.LG(t);
                hK.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                hK.setState({ isUploading: !1 });
            }
    }, []);
    return (0, r.jsxs)(u.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, r.jsx)(uZ.p, {
                messageType: uZ.Y.INFO,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, r.jsxs)(l0.e, {
                children: [
                    (0, r.jsx)(h.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => hK.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(h$, {
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
var hq = a(145497);
let hJ = (0, hS.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function hQ(e) {
    let { title: t, guildIds: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: hB.J1,
                children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: t }),
            }),
            (0, r.jsxs)("div", {
                className: hB.uk,
                children: [
                    0 === a.length &&
                        (0, r.jsx)("div", {
                            className: hB.J1,
                            children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = aK.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: hB.J1,
                                      children: [
                                          (0, r.jsx)(hq.Ay, { guild: t, iconSize: 16 }),
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
function hX(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: n, guildMembers: l, guildMemberRequests: s } = t,
        i = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(sF.y, { size: "sm", color: eR.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(mH.E, { size: "sm", color: eR.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, r.jsxs)("div", {
        className: hB.N6,
        children: [
            (0, r.jsxs)("div", {
                className: hB.J1,
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
                    className: hB.uk,
                    children: (0, r.jsx)("div", {
                        className: hB.J1,
                        children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: hB.J1,
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
                    className: hB.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: hB.J1,
                            children: (0, r.jsx)(D.E, {
                                variant: "text-sm/normal",
                                children: `username: ${n.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: hB.J1,
                            children: (0, r.jsx)(D.E, {
                                variant: "text-sm/normal",
                                children: `global name: ${n.globalName ?? "\u2014"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: hB.J1,
                            children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: hB.uk,
                            children: [
                                0 === Object.keys(n.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: hB.J1,
                                        children: (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "None" }),
                                    }),
                                Object.entries(n.nicknames).map((e) => {
                                    let [t, a] = e,
                                        n = aK.A.getGuild(t),
                                        l = ad.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: hB.J1,
                                            children: [
                                                null != n && (0, r.jsx)(hq.Ay, { guild: n, iconSize: 16 }),
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
                className: hB.J1,
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
                    className: hB.uk,
                    children: l.map((e) => {
                        let t = aK.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: hB.J1,
                                children: [
                                    (0, r.jsx)(hq.Ay, { guild: t, iconSize: 16 }),
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
                className: hB.J1,
                children: [
                    (0, r.jsx)(cu.m, { size: "sm" }),
                    (0, r.jsx)(D.E, { variant: "text-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != s &&
                (0, r.jsxs)("div", {
                    className: hB.uk,
                    children: [
                        (0, r.jsx)(hQ, { title: "Pending Guild Member Requests:", guildIds: s.pendingRequestGuildIds }),
                        (0, r.jsx)(hQ, { title: "Sent Guild Member Requests:", guildIds: s.sentRequestGuildIds }),
                        (0, r.jsx)(hQ, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: s.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function hZ() {
    let e = o.useCallback((e) => {
            hJ.setState({ userId: e, state: null });
        }, []),
        t = o.useCallback(async () => {
            let { userId: e, loading: t } = hJ.getState();
            if (!t && null != e) {
                hJ.setState({ loading: !0, error: null });
                try {
                    let t = await hF(e);
                    hJ.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new hC.LG(t);
                    hJ.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    hJ.setState({ loading: !1 });
                }
            }
        }, []),
        a = hJ.useField("loading");
    return (0, r.jsxs)("div", {
        className: hB.$n,
        children: [
            (0, r.jsx)(p.k, { placeholder: "User ID", onChange: e }),
            (0, r.jsx)(h.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function h0() {
    let e = hJ.useField("state"),
        t = hJ.useField("error");
    return (0, r.jsxs)(u.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, r.jsx)(hZ, {}),
            null != t &&
                (0, r.jsx)(D.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: hB.qS,
                    children: t,
                }),
            null != e && (0, r.jsx)(hX, { userState: e }),
        ],
    });
}
function h1() {
    return (0, r.jsxs)(d.Ip, {
        className: hB.nd,
        children: [
            (0, r.jsx)(hY, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(hW, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(h0, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(hH, {}),
        ],
    });
}
var h2 = a(761508),
    h8 = a(599147),
    h6 = a(808411),
    h3 = a(624716),
    h5 = a(398590),
    h9 = a(764451),
    h4 = a(263419),
    h7 = a(52822),
    xe = a(642153);
let xt = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    xa = {
        "virtual-currency": function () {
            return (0, r.jsxs)(h7.Hq, {
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
                                (e = h4.RevenuePlaygroundCollectionId.VIRTUAL_CURRENCY),
                                void (h9.PlaygroundStore.setState({ selectedCollection: e, selectedStory: null }),
                                (0, h5.id)(J.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: () =>
            (0, r.jsxs)("div", { children: [(0, r.jsx)(h8.o, {}), (0, r.jsx)(h6.A, {}), (0, r.jsx)(h3.A, {})] }),
    };
function xn() {
    let [e, t] = o.useState("virtual-currency"),
        a = o.useMemo(() => xa[e], [e]);
    return (0, r.jsxs)("div", {
        className: k()(tT.nd, xe.kL),
        children: [
            (0, r.jsx)(h2.V, {
                className: xe.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: xt.map((e) => (0, r.jsx)(h2.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, r.jsx)(d.Ar, { children: (0, r.jsx)("div", { className: xe.Qs, children: (0, r.jsx)(a, {}) }) }),
        ],
    });
}
var xl = a(718446),
    xs = a(766075),
    xi = a(355097);
let xr = (0, hS.D)(() => ({ urlString: "", error: null })),
    xo = Object.entries(xi.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function xd() {
    let [e, t] = o.useState(),
        a = xr.useField("urlString"),
        n = xr.useField("error"),
        l = o.useCallback(() => {
            let e = xr.getField("urlString");
            if (null == e || "" === e) return void xr.setState({ error: "URL is required" });
            let t = (0, xl.parseSettingsUrl)({ path: e });
            ((0, xl.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? xr.setState({ error: "String did not match expected format" })
                : (0, xs.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, r.jsx)(t1.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: xo,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = xi.od[e].split("/");
                        xr.setState({ urlString: J.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, r.jsx)(p.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => xr.setState({ urlString: e, error: null }),
            }),
            (0, r.jsxs)(l0.e, {
                children: [
                    (0, r.jsx)(h.$, {
                        variant: "primary",
                        onClick: l,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(h.$, {
                        variant: "secondary",
                        onClick: () => (0, nc.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != n && (0, r.jsx)(D.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var xc = a(780964);
let xu = (0, hS.D)(() => ({ setting: xc.X.ACCOUNT_PANEL }));
function xm() {
    let e = xu.useField("setting"),
        t = o.useCallback(() => {
            (0, xs.openUserSettings)(e);
        }, [e]),
        a = o.useMemo(() => Object.values(xc.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, r.jsx)(t1.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => xu.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, r.jsx)(h.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var xh = a(963935),
    xx = a(359009),
    xp = a(53181);
function xg(e) {
    let { title: t, initExpanded: a, highlightMode: n = "none", children: l } = e,
        [s, i] = o.useState(a),
        d = o.useCallback(() => {
            i(!s);
        }, [s]),
        c = "migrated" === n || "migrated-root" === n ? void 0 : "status-warning",
        u = (e) => (0, r.jsx)(D.E, { variant: e, color: c, children: t });
    return null == l
        ? (0, r.jsx)("div", { className: xp.NF, children: u("text-md/normal") })
        : (0, r.jsxs)("div", {
              className: xp.NF,
              children: [
                  (0, r.jsxs)(I.D, {
                      className: xp.jr,
                      onClick: d,
                      children: [
                          u("text-md/bold"),
                          (0, r.jsx)(l7.A, {
                              direction: s ? l7.A.Directions.DOWN : l7.A.Directions.RIGHT,
                              className: xp.D,
                          }),
                      ],
                  }),
                  s && (0, r.jsx)("div", { className: xp.m4, children: l }),
              ],
          });
}
function xv(e) {
    let { setting: t, depth: a, inheritedHighlightMode: n } = e,
        l = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case xh.Z6.ROOT:
                    return "migrated-root";
                case xh.Z6.SECTION:
                case xh.Z6.PANEL:
                case xh.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, n),
        s = "migrated" === l ? "migrated" : void 0,
        i = null;
    return (
        (0, xh.nW)(t) &&
            t.layout.length > 0 &&
            (i = t.layout.map((e) => (0, r.jsx)(xv, { setting: e, depth: a + 1, inheritedHighlightMode: s }, e.key))),
        (0, r.jsx)(xg, { title: t.key, initExpanded: a <= 2, highlightMode: l, children: i })
    );
}
function xj() {
    let { node: e } = (0, W.Ay)(xx.D, ""),
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
            (0, r.jsx)(xv, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var xb = a(168803);
function xf() {
    return (0, r.jsxs)(d.Ip, {
        className: xb.n,
        children: [
            (0, r.jsx)(xm, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(xd, {}),
            (0, r.jsx)(g.c, {}),
            (0, r.jsx)(xj, {}),
        ],
    });
}
function xy() {
    return o.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: aU.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(nR, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: aU.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(uX, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: aU.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(uK, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: aU.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(lJ, {}),
            },
        ];
        return (
            aI.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: aU.fu.SHOP, render: () => (0, r.jsx)(uP, {}) }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: aU.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(dg, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: aU.fu.SHOP,
                    render: () => (0, r.jsx)(tE, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: aU.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, r.jsx)(cM, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: aU.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(lZ, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: aU.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(dz.Ay, {}),
                }),
                e.push({
                    id: "age_verification",
                    name: "Age Verification",
                    group: aU.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(a4, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: aU.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(l5, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: aU.fu.GAMES, render: () => (0, r.jsx)(o9, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: aU.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(s9, {}),
                }),
                aD.isPlatformEmbedded &&
                    e.push({
                        id: "detected_games",
                        name: "Detected Games",
                        group: aU.fu.GAMES,
                        render: () => (0, r.jsx)(lD, {}),
                    }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: aU.fu.GAMES, render: () => (0, r.jsx)(uG, {}) }),
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
                    render: () => (0, r.jsx)(t4, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: aU.fu.USERS,
                    render: () => (0, r.jsx)(h1, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: aU.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(N, {}) })),
            e.push({
                id: "rive",
                name: "Rive",
                group: aU.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(cG, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: aU.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag"],
                render: () => (0, r.jsx)(iF, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: aU.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rm, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: aU.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(i7, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: aU.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(n3, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: aU.fu.UI, render: () => (0, r.jsx)(l_, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: aU.fu.UI,
                render: () => (0, r.jsx)(cc, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: aU.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(sf, { devSettingsCategory: aT.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: aU.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(rD, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: aU.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(sf, { devSettingsCategory: aT.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: aU.fu.USERS, render: () => (0, r.jsx)(d8, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: aU.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(rG, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: aU.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(rv, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: aU.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(rr, {}),
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
                render: () => (0, r.jsx)(n6, {}),
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
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: aU.fu.DCF, render: () => (0, r.jsx)(lj, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: aU.fu.DCF, render: () => (0, r.jsx)(la, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: aU.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(i6, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: aU.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up"],
                render: () => (0, r.jsx)(dY, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: aU.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(r0, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: aU.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(dR, {}),
                }),
                e.push({
                    id: "orders",
                    name: "Orders",
                    group: aU.fu.BILLING,
                    tags: ["orders"],
                    render: () => (0, r.jsx)(r5, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: aU.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(mU, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: aU.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, r.jsx)(sm, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: aU.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, r.jsx)(il, {}),
            }),
            e.push({
                id: "spatial_audio",
                name: "Spatial Audio",
                group: aU.fu.AUDIO_VIDEO,
                tags: ["spatial", "hrtf", "steam audio", "3d"],
                render: () => (0, r.jsx)(mb, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: aU.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(mg, {}),
            }),
            e.push({
                id: "av_overrides",
                name: "Overrides",
                group: aU.fu.AUDIO_VIDEO,
                tags: ["video", "capture", "encoder", "golive"],
                render: () => (0, r.jsx)(mt, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: aU.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(ml, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: aU.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(i0, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: aU.fu.BOOSTING, render: () => (0, r.jsx)(sv, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: aU.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(rt, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: aU.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(xf, {}),
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
                render: () => (0, r.jsx)(u2, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: aU.fu.BILLING,
                render: () => (0, r.jsx)(xn, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: aU.fu.QUESTS,
                render: () => (0, r.jsx)(hE, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: aU.fu.USERS,
                render: () => (0, r.jsx)(cv, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: aU.fu.USERS,
                render: () => (0, r.jsx)(nW, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: aU.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(lw, {}),
            }),
            e
        );
    }, []);
}
