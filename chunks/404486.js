a.d(t, { x: () => xb }), a(321073);
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
    g = a(372684),
    v = a(607814),
    j = a(871421);
function b() {
    let [e, t] = o.useState(g.rb.KILL),
        [a, n] = o.useState(1),
        [l, s] = o.useState(""),
        [i, b] = o.useState("");
    return (0, r.jsx)(d.Ip, {
        children: (0, r.jsxs)(c.l, {
            children: [
                (0, r.jsx)(u.n, {
                    label: "Send Test Signals",
                    children: (0, r.jsxs)(m.M, {
                        children: [
                            (0, r.jsx)(h.$, { text: "Manual", onClick: () => v.Ts({ type: g.Gy.MANUAL }) }),
                            (0, r.jsx)(h.$, {
                                text: "Distributed",
                                onClick: () =>
                                    v.Ts({
                                        type: g.Gy.DISTRIBUTED,
                                        remoteTriggerUserId: "123",
                                        remoteTriggerClipId: "456",
                                    }),
                            }),
                            (0, r.jsx)(h.$, {
                                text: "Phrase: Clip",
                                onClick: () => v.Ts({ type: g.Gy.PHRASE, text: "clip" }),
                            }),
                            (0, r.jsx)(h.$, {
                                text: "Yelling",
                                onClick: () => v.Ts({ type: g.Gy.YELLING, userId: "123" }),
                            }),
                            (0, r.jsx)(h.$, {
                                text: "Laughter",
                                onClick: () => v.Ts({ type: g.Gy.LAUGHTER, label: "laughter", confidence: 1 }),
                            }),
                            (0, r.jsx)(h.$, {
                                text: "Shouting",
                                onClick: () => v.Ts({ type: g.Gy.LAUGHTER, label: "shouting", confidence: 1 }),
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
                                    value: e,
                                    onSelectionChange: (e) => t(e),
                                    options: [
                                        { id: "kill", label: "Kill", value: g.rb.KILL },
                                        { id: "multikill", label: "Multikill", value: g.rb.MULTIKILL },
                                        { id: "death", label: "Death", value: g.rb.DEATH },
                                        { id: "assist", label: "Assist", value: g.rb.ASSIST },
                                        { id: "item", label: "Item", value: g.rb.ITEM },
                                        { id: "victory", label: "Victory", value: g.rb.VICTORY },
                                        { id: "defeat", label: "Defeat", value: g.rb.DEFEAT },
                                        { id: "level_up", label: "Level Up", value: g.rb.LEVEL_UP },
                                        { id: "treasure", label: "Treasure", value: g.rb.TREASURE },
                                        { id: "objective_kill", label: "Objective Kill", value: g.rb.OBJECTIVE_KILL },
                                    ],
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(x.l, {
                                    label: "Importance",
                                    value: a,
                                    onSelectionChange: n,
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
                            value: l,
                            onChange: s,
                            placeholder: "e.g., First Blood",
                        }),
                        (0, r.jsx)(p.k, {
                            label: "Description (optional)",
                            value: i,
                            onChange: b,
                            placeholder: "e.g., Killed enemy ADC in bot lane",
                        }),
                        (0, r.jsx)(h.$, {
                            text: "Create Game Event",
                            onClick: () => {
                                v.Ts({ type: g.Gy.GAME_EVENT, eventType: e, importance: a, title: l, description: i });
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            text: "stash decider data",
                            onClick: () => {
                                j.Ay.debugStashDeciderData();
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            text: "re-run ranking",
                            onClick: () => {
                                j.ih.debugRerunRanking();
                            },
                        }),
                    ],
                }),
            ],
        }),
    });
}
var f = a(503698),
    y = a.n(f),
    _ = a(939249),
    C = a(834730),
    E = a(683071),
    S = a(331322),
    N = a(811893),
    A = a(534514),
    k = a(17928),
    I = a(538064),
    T = a(265059),
    D = a(902592),
    O = a(869146);
a(323874), a(14289), a(35956);
var R = a(789645),
    w = a(589158),
    M = a(65593),
    L = a(740572),
    P = a(581298),
    U = a(98596),
    G = a(287809),
    B = a(901139),
    F = a(641886),
    V = a(780898),
    $ = a(652215),
    W = a(224196),
    z = a(427262);
function H(e) {
    let { nameplate: t } = e,
        a = (0, k.bG)([G.default], () => G.default.getCurrentUser()),
        n = z.Ay.useName(a) ?? "";
    return (0, r.jsx)(W.g, {
        username: n,
        selfMute: !1,
        selfDeaf: !1,
        serverMute: !1,
        serverDeaf: !1,
        suppress: !1,
        speaking: !1,
        streaming: !1,
        status: $.clD.ONLINE,
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
var K = a(736653),
    Y = a(653523),
    q = a(809948);
function J(e) {
    let { selected: t, onSelect: a } = e,
        n = (0, K.Ay)();
    return (0, r.jsxs)("div", {
        className: q.N,
        children: [
            (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "Preselected Gradient" }),
            (0, r.jsx)("div", {
                className: q.Z,
                children: F.Z6.map((e) => {
                    let l = n !== $.NJ8.LIGHT ? e.darkBackground : e.lightBackground,
                        s = t === e.name;
                    return (0, r.jsx)(
                        Y.S4,
                        { onSelect: () => a(e), style: { background: l }, name: e.name, isSelected: s },
                        e.name,
                    );
                }),
            }),
        ],
    });
}
var Q = a(696157),
    X = a(95701),
    Z = a(331884);
function ee(e) {
    let { selected: t, nameplate: a } = e,
        n = (0, Z.i)(),
        l = new X.cq({ id: "0", type: $.rbe.DM, name: "self", guild_id: "0", recipients: [n.id] });
    return (0, r.jsx)(Q.th, { selected: t, channel: l, user: n, nameplate: a });
}
var et = a(698638),
    ea = a(877203);
function en() {
    let [e, t] = (0, o.useState)(!1),
        [a, n] = (0, o.useState)(!1),
        [l, s] = (0, o.useState)(null),
        { node: i } = (0, P.Ay)(U.k, ""),
        d = (0, B.Ay)((e) => e.toolsCache),
        { setToolsCache: c, removeToolsCache: u } = (0, B.DE)(),
        { setImgCache: m } = (0, B.TW)(),
        x = (0, o.useCallback)(
            (e) => {
                let t = d[e];
                null != t
                    ? s({ previewToolKey: t.url, palette: t.palette, skuId: "0" })
                    : s((t) =>
                          null == t ? { previewToolKey: e, palette: F.Wj, skuId: "0" } : { ...t, previewToolKey: e },
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
                className: ea.ne,
                children: [
                    (0, r.jsxs)("div", {
                        className: ea.gO,
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
                        className: ea.uQ,
                        children: [
                            e && (0, r.jsx)(L.A, { node: i }),
                            a &&
                                (0, r.jsx)(J, {
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
                className: ea.iW,
                children: [
                    (0, r.jsx)(el, { nameplate: l }, l?.palette?.name),
                    (0, r.jsxs)("div", {
                        className: ea.Uo,
                        children: [
                            (0, r.jsx)(C.E, {
                                variant: "text-sm/semibold",
                                children: "Drag background image to screen",
                            }),
                            (0, r.jsx)(M.A, {
                                title: "upload image",
                                description: "upload the background",
                                icons: et.xi,
                                onDrop: async (e) => {
                                    let t = URL.createObjectURL(e[0]),
                                        a = e[0],
                                        n = await a.arrayBuffer();
                                    m(t, t, (0, V.nI)(n)), c(t, t, F.Wj);
                                },
                            }),
                            (0, r.jsx)("div", {
                                className: ea.is,
                                children: Object.values(d).map((e) => {
                                    let { url: t } = e;
                                    return (0, r.jsx)(es, { src: t, onSetStatic: x, removeAsset: g }, t);
                                }),
                            }),
                            (0, r.jsx)(er, {
                                label: "gradient override",
                                onChange: (e) => p({ name: F.AK, darkBackground: e, lightBackground: e }),
                            }),
                            (0, r.jsx)(ei, { label: "set", onClick: () => {} }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function el(e) {
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
            className: ea.Fp,
            orientation: "horizontal",
            children: (0, r.jsxs)("div", {
                ref: l,
                className: ea.ey,
                style: { width: `${a}px` },
                children: [
                    (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "Memberlist" }),
                    (0, r.jsx)(eo, { nameplate: t }),
                    (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "DMs" }),
                    (0, r.jsx)(ed, { nameplate: t }),
                    (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "RTC" }),
                    (0, r.jsx)(ec, { nameplate: t }),
                    (0, r.jsx)("div", { className: ea.Di, onMouseDown: m }),
                ],
            }),
        })
    );
}
function es(e) {
    let { src: t, onSetStatic: a, removeAsset: n } = e;
    return (0, r.jsxs)("div", {
        className: ea.xO,
        children: [
            (0, r.jsx)(_.D, {
                onClick: () => n(t),
                className: ea.yV,
                children: (0, r.jsx)(R.P, { size: "custom", width: 16, height: 16, name: "x" }),
            }),
            (0, r.jsx)("img", { className: ea.Ez, src: t, alt: "" }),
            (0, r.jsx)("div", {
                className: ea.Lu,
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
function ei(e) {
    let { label: t, onClick: a } = e;
    return (0, r.jsxs)("div", {
        className: ea.Uu,
        children: [
            (0, r.jsx)(C.E, { variant: "text-sm/normal", children: "coming soon" }),
            (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: t, disabled: !0, onClick: a }),
        ],
    });
}
function er(e) {
    let { label: t, onChange: a } = e;
    return (0, r.jsxs)("div", {
        className: ea.Im,
        children: [
            (0, r.jsx)(C.E, { variant: "text-sm/normal", children: t }),
            (0, r.jsx)("input", {
                onChange: (e) => {
                    a(e.target.value);
                },
                className: ea.QL,
                placeholder: "#000000",
            }),
        ],
    });
}
function eo(e) {
    let { nameplate: t } = e,
        a = (0, k.bG)([G.default], () => G.default.getCurrentUser());
    return (0, r.jsx)("div", {
        className: ea.VH,
        children: (0, r.jsxs)("div", {
            className: ea.H1,
            children: [
                (0, r.jsx)(C.E, { className: ea.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(w.A, { nameplate: t, user: a, currentUser: a }),
                (0, r.jsx)(C.E, { className: ea.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(w.A, { nameplate: t, selected: !0, user: a, currentUser: a }),
                        (0, r.jsx)(w.A, { selected: !0, user: a, currentUser: a }),
                    ],
                }),
            ],
        }),
    });
}
function ed(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: ea.VH,
        children: (0, r.jsxs)("div", {
            className: ea.H1,
            children: [
                (0, r.jsx)(C.E, { className: ea.Pf, variant: "text-sm/semibold", children: "DEFAULT" }),
                (0, r.jsx)(ee, { nameplate: t }),
                (0, r.jsx)(C.E, { className: ea.Pf, variant: "text-sm/semibold", children: "FOCUSED" }),
                (0, r.jsxs)("div", {
                    children: [(0, r.jsx)(ee, { selected: !0, nameplate: t }), (0, r.jsx)(ee, { selected: !0 })],
                }),
            ],
        }),
    });
}
function ec(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: ea.VH,
        children: (0, r.jsx)("div", { className: ea.X2, children: (0, r.jsx)(H, { nameplate: t }) }),
    });
}
a(508300);
var eu = a(835245),
    em = a(157559),
    eh = a(780777),
    ex = a(993408),
    ep = a(315949),
    eg = a(559474),
    ev = a(816866),
    ej = a(87558),
    eb = a(575593),
    ef = a(631903),
    ey = a(224640),
    e_ = a(408278),
    eC = a(972213),
    eE = a(43990),
    eS = a(192308),
    eN = a(661531),
    eA = a(231723),
    ek = a(900686),
    eI = a(986687),
    eT = a(141618),
    eD = a(735438),
    eO = a.n(eD),
    eR = a(219220),
    ew = a(480335);
let eM = (e) => {
    let { profileEffect: t } = e,
        a = o.useMemo(() => (0, eD.cloneDeep)(t), [t]),
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
        { layerData: s } = (0, eR.A)({ skuId: "debug", layers: l.effects });
    return (0, r.jsx)(ew.p, { profileEffect: l, layerData: s, skuId: "debug" });
};
var eL = a(314485),
    eP = a(778765);
let eU =
        "https://cdn.discordapp.com/assets/content/ad2a252a6866e1ecb3bab521e2baaabbf13ab2d1ecaa8af67862c53c91f76761.png",
    eG = { [ej.qH.THUMBNAIL]: null, [ej.qH.STATIC]: null, [ej.qH.REDUCED_MOTION]: null },
    eB = "debug",
    eF = "reduced-motion-preview-modal",
    eV = (e) => {
        let { transitionState: t, onClose: a, frameSrc: n, theme: l } = e;
        return (0, r.jsx)(ey.d, {
            transitionState: t,
            size: "md",
            onClose: a,
            maxHeight: "viewport",
            children: (0, r.jsxs)("div", {
                className: eL.Xd,
                children: [
                    (0, r.jsx)("div", {
                        className: eL.y6,
                        children: (0, r.jsx)(e_.K, {
                            "aria-label": "Close",
                            onClick: a,
                            icon: eC.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: eL.rU,
                        children: [
                            (0, r.jsx)(eE.N, {
                                theme: l,
                                children: (e) =>
                                    (0, r.jsx)("img", {
                                        src: eU,
                                        alt: "",
                                        className: y()(eL.aM, e),
                                        "aria-hidden": !0,
                                    }),
                            }),
                            null != n &&
                                "" !== n &&
                                (0, r.jsx)("img", { src: n, className: eL.SD, alt: "Reduced motion preview" }),
                        ],
                    }),
                ],
            }),
        });
    },
    e$ = (e) => {
        let { type: t, frame: a, theme: n, onClear: l } = e,
            s = t === ej.qH.REDUCED_MOTION,
            i = s ? eU : eP.A,
            o = (0, r.jsx)(eE.N, {
                theme: n,
                children: (e) =>
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)("img", { src: i, alt: "", className: y()(eL.aM, e), "aria-hidden": !0 }),
                            a?.src != null &&
                                "" !== a.src &&
                                (0, r.jsx)("img", { src: a.src, className: y()(eL.SD, e), alt: "" }),
                        ],
                    }),
            });
        return (0, r.jsxs)("div", {
            className: eL.pK,
            children: [
                (0, r.jsx)(A.D, { variant: "heading-sm/bold", children: t }),
                s
                    ? (0, r.jsx)(_.D, {
                          className: y()(eL.zd, eL.eB),
                          onClick: () => {
                              (0, eS.hasModalOpen)(eF)
                                  ? (0, eS.closeModal)(eF)
                                  : (0, eS.openModalLazy)(
                                        () =>
                                            Promise.resolve((e) =>
                                                (0, r.jsx)(eV, { ...e, frameSrc: a?.src ?? null, theme: n }),
                                            ),
                                        { modalKey: eF, onCloseRequest: () => (0, eS.closeModal)(eF) },
                                    );
                          },
                          children: o,
                      })
                    : (0, r.jsx)("div", { className: eL.zd, children: o }),
                null != a && (0, r.jsx)(h.$, { variant: "critical-secondary", size: "sm", text: "Clear", onClick: l }),
            ],
        });
    },
    eW = (e) => {
        let { profileEffect: t } = e,
            { upsertProfileEffect: a } = (0, ev.wu)(),
            n = (0, k.bG)([G.default], () => G.default.getCurrentUser()),
            [l, s] = o.useState(!0),
            i = o.useRef({}),
            [d, c] = o.useState(!1),
            [u, m] = o.useState(!1),
            [x, p] = o.useState(8),
            [g, v] = o.useState([]),
            [j, b] = o.useState(eG),
            f = o.useRef([]),
            [_, E] = o.useState(t.name),
            S = _.toLowerCase().replace(/\s+/g, "_"),
            N = o.useMemo(
                () => ({
                    type: eb.R.PROFILE_EFFECT,
                    skuId: eB,
                    title: eB,
                    description: eB,
                    accessibilityLabel: eB,
                    reducedMotionSrc: "",
                    thumbnailPreviewSrc: "",
                    effects: g,
                    animationType: ef.l.ANIMATION_TYPE_UNSPECIFIED,
                }),
                [g],
            ),
            I = d ? eN.A.themes.DARKER : eN.A.themes.LIGHT,
            T = (e) => {
                let t = e.currentTarget.files;
                return null == t ? null : t[0];
            },
            D = (e, t) => {
                let a = T(t);
                null != a &&
                    (0, ej.Mz)(a, (t) => {
                        b((n) => ({ ...n, [e]: (0, ej.GT)(t, a) }));
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
                                let e = (0, ej.fB)(a.base64);
                                (a.src = e), f.current.push(e), b((e) => ({ ...e, [t]: a }));
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
            e.readonly || t({ skuId: e.skuId, name: _, effects: g, stillFrames: j });
        }, [g, j, _]),
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
                  className: eL.zr,
                  children: [
                      (0, r.jsxs)("div", {
                          style: { display: "none" },
                          children: [
                              (0, r.jsx)(eh.A, {
                                  ref: (e) => {
                                      i.current.animated = e;
                                  },
                                  onChange: (e) => {
                                      let t = T(e);
                                      null != t &&
                                          (0, ej.Mz)(t, async (e) => {
                                              let a = await (0, ej.Ay)(e, t, g.length);
                                              v((e) => [...e, a]);
                                          });
                                  },
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eh.A, {
                                  ref: (e) => {
                                      i.current.thumbnail = e;
                                  },
                                  onChange: (e) => D(ej.qH.THUMBNAIL, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eh.A, {
                                  ref: (e) => {
                                      i.current.static = e;
                                  },
                                  onChange: (e) => D(ej.qH.STATIC, e),
                                  multiple: !1,
                              }),
                              (0, r.jsx)(eh.A, {
                                  ref: (e) => {
                                      i.current.reducedMotion = e;
                                  },
                                  onChange: (e) => D(ej.qH.REDUCED_MOTION, e),
                                  multiple: !1,
                              }),
                          ],
                      }),
                      (0, r.jsxs)("div", {
                          className: eL.Vg,
                          children: [
                              (0, r.jsxs)("div", {
                                  className: y()(eL.nM, eL.uW),
                                  children: [
                                      (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Profile Effect Name" }),
                                      (0, r.jsx)("input", {
                                          type: "text",
                                          value: _,
                                          className: eL.hF,
                                          onChange: (e) => {
                                              E(e.target.value);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eL.nM,
                                  children: [
                                      (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Dark Theme" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: d,
                                          className: eL.OO,
                                          onChange: () => {
                                              c(!d);
                                          },
                                      }),
                                      (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Show User Profile" }),
                                      (0, r.jsx)("input", {
                                          type: "checkbox",
                                          checked: u,
                                          className: eL.OO,
                                          onChange: () => {
                                              m(!u);
                                          },
                                      }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: eL.nM,
                                  children: [
                                      (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Border Radius" }),
                                      (0, r.jsx)("input", {
                                          type: "range",
                                          min: 4,
                                          max: 24,
                                          step: 2,
                                          value: x,
                                          onChange: (e) => p(+e.target.value),
                                      }),
                                      (0, r.jsxs)(C.E, { variant: "text-sm/normal", children: [x, "px"] }),
                                  ],
                              }),
                              (0, r.jsxs)("div", {
                                  className: y()(eL.nz, eL.VH),
                                  style: { borderRadius: x },
                                  children: [
                                      u
                                          ? (0, r.jsx)("div", {
                                                className: eL.jq,
                                                children: (0, r.jsx)(eT.A, {
                                                    user: n,
                                                    currentUser: n,
                                                    transitionState: eA.ip.ENTERED,
                                                    onClose: () => {},
                                                    themeContainerClassName: eL.JB,
                                                }),
                                            })
                                          : (0, r.jsx)(eE.N, {
                                                theme: I,
                                                children: (e) =>
                                                    (0, r.jsx)("div", {
                                                        className: y()(eL.aM, e),
                                                        children: (0, r.jsx)("img", { src: eP.A, alt: "", width: 400 }),
                                                    }),
                                            }),
                                      l &&
                                          (0, r.jsx)("div", {
                                              className: eL.KJ,
                                              children: (0, r.jsx)(eM, { profileEffect: N }),
                                          }),
                                  ],
                              }),
                              (0, r.jsx)("div", {
                                  children:
                                      u &&
                                      (0, r.jsxs)("div", {
                                          className: y()(eL.f5, eL.VH),
                                          style: { borderRadius: x },
                                          children: [
                                              (0, r.jsx)(eI.A, {
                                                  user: n,
                                                  pendingAvatar: void 0,
                                                  pendingProfileEffect: null,
                                                  canUsePremiumCustomization: !0,
                                                  isTryItOut: !0,
                                              }),
                                              (0, r.jsx)(eM, { profileEffect: N }),
                                          ],
                                      }),
                              }),
                              (0, r.jsxs)("div", {
                                  className: eL.nz,
                                  children: [
                                      (0, r.jsxs)("div", {
                                          className: eL.nM,
                                          children: [
                                              (0, r.jsx)(h.$, {
                                                  variant: "active",
                                                  text: "Upload Animated Layer",
                                                  onClick: () => i.current.animated?.activateUploadDialogue(),
                                              }),
                                              (0, r.jsx)(C.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Make sure to upload the bottommost layer first!",
                                              }),
                                          ],
                                      }),
                                      (0, r.jsxs)("div", {
                                          className: eL.nM,
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
                                          className: eL.q6,
                                          children: (0, r.jsx)("div", {
                                              className: eL.nM,
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
                                          className: y()(eL.q6, eL.XA),
                                          children: [
                                              (0, r.jsx)(C.E, {
                                                  variant: "text-sm/semibold",
                                                  children: "Please download both configs for the drop package!",
                                              }),
                                              (0, r.jsx)(C.E, {
                                                  variant: "text-sm/bold",
                                                  color: "text-feedback-critical",
                                                  children: "WARNING: The full config is really big :0",
                                              }),
                                              (0, r.jsxs)("div", {
                                                  className: eL.nM,
                                                  children: [
                                                      (0, r.jsx)(ek.A, {
                                                          fileContents: () => (0, ej.rs)(g),
                                                          contentType: "text/plain",
                                                          fileName: `${S}_timing_config.txt`,
                                                          children: (0, r.jsx)(h.$, {
                                                              variant: "primary",
                                                              size: "sm",
                                                              text: "Download Timing Config",
                                                          }),
                                                      }),
                                                      (0, r.jsx)(ek.A, {
                                                          fileContents: () =>
                                                              JSON.stringify({
                                                                  ...t,
                                                                  name: _,
                                                                  readonly: !1,
                                                                  effects: g,
                                                                  stillFrames: j,
                                                              }),
                                                          contentType: "text/plain",
                                                          fileName: `${S}_config.txt`,
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
                                          className: eL.uW,
                                          children: [
                                              (0, r.jsx)(A.D, { variant: "heading-lg/bold", children: "Still Frames" }),
                                              (0, r.jsx)("div", {
                                                  className: eL.mv,
                                                  children: Object.entries(j).map((e) => {
                                                      let [t, a] = e;
                                                      return (0, r.jsx)(
                                                          e$,
                                                          {
                                                              type: t,
                                                              frame: a,
                                                              theme: I,
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
                                              className: y()(eL.uW, eL.l7),
                                              children: [
                                                  (0, r.jsx)(C.E, {
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
                                  className: y()(eL.Vg, eL.ZF),
                                  children: [
                                      (0, r.jsx)("div", {
                                          className: eL.cD,
                                          children: (0, r.jsx)(h.$, {
                                              variant: "critical-secondary",
                                              text: "Clear Assets",
                                              onClick: () => {
                                                  v([]), b(eG);
                                              },
                                          }),
                                      }),
                                      g.map((e, t) =>
                                          (0, r.jsxs)(
                                              "div",
                                              {
                                                  className: eL.ec,
                                                  children: [
                                                      (0, r.jsxs)("div", {
                                                          className: eL.D1,
                                                          children: [
                                                              (0, r.jsx)(A.D, {
                                                                  variant: "heading-md/bold",
                                                                  children: e.name,
                                                              }),
                                                              (0, r.jsx)("img", {
                                                                  src: e.src,
                                                                  className: eL.oq,
                                                                  alt: "",
                                                              }),
                                                              null != e.randomizedSources &&
                                                                  (0, r.jsxs)(r.Fragment, {
                                                                      children: [
                                                                          (0, r.jsx)(A.D, {
                                                                              variant: "heading-md/bold",
                                                                              children: "Alternatives",
                                                                          }),
                                                                          e.randomizedSources.map((e, t) =>
                                                                              (0, r.jsxs)(
                                                                                  "div",
                                                                                  {
                                                                                      children: [
                                                                                          null != e.filename &&
                                                                                              (0, r.jsx)(A.D, {
                                                                                                  variant:
                                                                                                      "heading-sm/semibold",
                                                                                                  children: e.filename,
                                                                                              }),
                                                                                          (0, r.jsx)("img", {
                                                                                              src: e.src,
                                                                                              className: eL.oq,
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
                                                          className: y()(eL.Vg, eL.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: eL.nz,
                                                                  children: [
                                                                      (0, r.jsx)(C.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Start",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.start,
                                                                          className: eL.hF,
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
                                                                  className: eL.nz,
                                                                  children: [
                                                                      (0, r.jsx)(C.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Duration",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "number",
                                                                          value: e.duration,
                                                                          className: eL.hF,
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
                                                          className: y()(eL.Vg, eL.uW),
                                                          children: [
                                                              (0, r.jsxs)("div", {
                                                                  className: eL.nz,
                                                                  children: [
                                                                      (0, r.jsx)(C.E, {
                                                                          variant: "text-md/bold",
                                                                          children: "Loop",
                                                                      }),
                                                                      (0, r.jsx)("input", {
                                                                          type: "checkbox",
                                                                          checked: e.loop,
                                                                          className: eL.OO,
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
                                                                  className: eL.nz,
                                                                  children:
                                                                      e.loop &&
                                                                      (0, r.jsxs)(r.Fragment, {
                                                                          children: [
                                                                              (0, r.jsx)(C.E, {
                                                                                  variant: "text-md/bold",
                                                                                  children: "Loop Delay",
                                                                              }),
                                                                              (0, r.jsx)("input", {
                                                                                  type: "number",
                                                                                  value: e.loopDelay,
                                                                                  className: eL.hF,
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
                                                          children: (0, r.jsx)(eh.A, {
                                                              ref: (e) => {
                                                                  i.current[`randomized-${t}`] = e;
                                                              },
                                                              onChange: (e) => {
                                                                  let a;
                                                                  null != (a = T(e)) &&
                                                                      (0, ej.Mz)(a, (e) => {
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
                                                          className: y()(eL.nM, eL._N),
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
    ez = "Make sure you're only uploading text files!",
    eH = (e) => {
        let { profileEffect: t, onClick: a } = e,
            { deleteProfileEffect: n } = (0, ev.wu)();
        return (0, r.jsxs)(_.D, {
            className: eL.B0,
            onClick: a,
            children: [
                (0, r.jsx)("div", { className: eL.yV, style: { backgroundImage: `url(${t.effects?.[0]?.base64})` } }),
                (0, r.jsxs)("div", {
                    className: eL.eL,
                    children: [
                        (0, r.jsx)(C.E, { variant: "text-md/bold", children: t.name }),
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
function eK() {
    let { profileEffects: e, upsertProfileEffect: t, clearAll: a } = (0, ev.wu)(),
        [n, l] = o.useState(),
        s = o.useRef(null),
        { categories: i } = (0, ep.A)(),
        d = o.useMemo(() => (0, ex.Wj)(i), [i]),
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
                if (null == a || !e.type.startsWith("text/")) return (0, eg.Ni)(ez);
                let [n, l] = a.split(",");
                if (!n.includes("text/plain")) return (0, eg.Ni)(ez);
                let s = JSON.parse(atob(l));
                (s.skuId = (0, eu.A)()), t(s), (0, eg.GF)("Profile Effect (maybe??) imported!");
            },
            [t],
        ),
        g = o.useCallback(
            (e) => {
                e.currentTarget?.files == null
                    ? (0, eg.Ni)("Error uploading file. Try again!")
                    : (0, eg.KE)(e.currentTarget.files, x, eg.Ni);
            },
            [x],
        );
    return (0, r.jsxs)("div", {
        className: eL.zr,
        children: [
            null == n &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)("div", {
                            className: eL.nz,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: y()(eL.uW, eL.nM),
                                    children: [
                                        (0, r.jsx)(A.D, {
                                            variant: "heading-xl/bold",
                                            children: "Custom Profile Effects",
                                        }),
                                        (0, r.jsx)(h.$, {
                                            variant: "critical-secondary",
                                            text: "Clear All",
                                            onClick: async () => {
                                                (await em.A.confirm({
                                                    title: "Clear All Profile Effects",
                                                    body: "Are you sure you want to clear all profile effects? This cannot be undone.",
                                                    confirmText: "Clear All",
                                                    confirmVariant: "critical-primary",
                                                })) && (a(), (0, eg.GF)("All profile effects cleared!"));
                                            },
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: eL.Iv,
                                    children: Object.values(e).map((e) =>
                                        (0, r.jsx)(eH, { profileEffect: e, onClick: () => l(e) }, e.skuId),
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: y()(eL.nM, eL._N, eL.uW),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: eL.au,
                                    children: [
                                        (0, r.jsx)(C.E, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: "Import Shared Config",
                                        }),
                                        (0, r.jsx)(eh.A, { ref: s, onChange: g, multiple: !1 }),
                                    ],
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Create New Effect",
                                    onClick: () => {
                                        t({ skuId: (0, eu.A)(), name: "New Profile Effect", effects: [] });
                                    },
                                }),
                            ],
                        }),
                        (0, r.jsx)("hr", {}),
                        (0, r.jsxs)("div", {
                            className: eL.uW,
                            children: [
                                (0, r.jsx)(A.D, { variant: "heading-xl/bold", children: "All Effects" }),
                                (0, r.jsx)(p.k, {
                                    value: c,
                                    onChange: (e) => {
                                        u(e);
                                    },
                                }),
                                (0, r.jsx)("div", {
                                    className: eL.xm,
                                    children: m.map((e) =>
                                        (0, r.jsx)(
                                            _.D,
                                            {
                                                className: eL.S5,
                                                style: { backgroundImage: `url(${e.thumbnailPreviewSrc})` },
                                                onClick: () => {
                                                    let t = {
                                                        [ej.qH.THUMBNAIL]:
                                                            null != e.thumbnailPreviewSrc &&
                                                            "" !== e.thumbnailPreviewSrc
                                                                ? {
                                                                      src: e.thumbnailPreviewSrc,
                                                                      name: "thumbnail.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [ej.qH.STATIC]:
                                                            null != e.staticFrameSrc && "" !== e.staticFrameSrc
                                                                ? {
                                                                      src: e.staticFrameSrc,
                                                                      name: "static.png",
                                                                      base64: "",
                                                                  }
                                                                : null,
                                                        [ej.qH.REDUCED_MOTION]:
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
                                                    className: eL.Hd,
                                                    children: (0, r.jsx)(C.E, {
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
            null != n && (0, r.jsx)(eW, { profileEffect: n }),
        ],
    });
}
var eY = a(935399),
    eq = a(462887),
    eJ = a(289873),
    eQ = a(478016),
    eX = a(565645),
    eZ = a(7584),
    e0 = a(619499),
    e1 = a(207803),
    e2 = a(84540),
    e8 = a(836602),
    e3 = a(999291),
    e6 = a(903209),
    e5 = a(841702),
    e4 = a(892118),
    e9 = a(744808),
    e7 = a(725287),
    te = a(626768),
    tt = a(464896);
function ta() {
    let e = (0, K.Ay)();
    return (0, r.jsxs)("div", {
        className: e7.z3,
        children: [
            (0, r.jsx)("img", { src: (0, eq.M)(e) ? te : tt, alt: "" }),
            (0, r.jsx)(C.E, {
                variant: "text-sm/normal",
                children:
                    "No frames found on your account. You must be granted test profile frame entitlements to use this tool.",
            }),
        ],
    });
}
function tn() {
    let e = (0, k.bG)([G.default], () => G.default.getCurrentUser()),
        t = (0, e3.Ay)(e?.id);
    o.useEffect(() => {
        e?.id != null && (0, e6.A)(e.id);
    }, [e?.id]);
    let { purchases: a, isFetchingPurchases: n } = (0, e5.Bf)(),
        l = o.useMemo(() => (0, ex.MG)(a, new Map()), [a]),
        [{ pendingProfileFrame: s }, i] = (0, k.yK)([e8.A], () => [e8.A.getPendingChanges(), e8.A.showNotice()]),
        d = void 0 === s ? t?.profileFrame : s,
        c = null != d ? a.get(d.skuId) : void 0,
        u = (0, e4.s)(c?.items[0]) ? c.items[0] : void 0;
    return (
        (0, eY.l0)(e1.RE),
        (0, r.jsxs)("div", {
            className: e7.kL,
            children: [
                (0, r.jsxs)(A.D, {
                    variant: "heading-xl/bold",
                    children: [
                        (0, r.jsx)(eX.A, {
                            emojiName: eZ.Ay.getByName("frame_with_picture")?.surrogates,
                            className: e7.Zg,
                        }),
                        "Profile Frames!",
                    ],
                }),
                0 === l.length && n && (0, r.jsx)(eJ.y, {}),
                0 === l.length && !n && (0, r.jsx)(ta, {}),
                l.length > 0 &&
                    (0, r.jsxs)("div", {
                        className: e7.MK,
                        children: [
                            (0, r.jsx)(C.E, {
                                variant: "text-sm/normal",
                                children: "Select a frame to preview. Save to apply the frame to your main profile.",
                            }),
                            (0, r.jsxs)("ul", {
                                className: e7.p_,
                                children: [
                                    (0, r.jsx)(
                                        "li",
                                        {
                                            children: (0, r.jsx)(h.$, {
                                                text: "None",
                                                variant: "secondary",
                                                fullWidth: !0,
                                                icon: null == d ? eQ.U : void 0,
                                                disabled: null == d,
                                                onClick: () => (0, e2.p)({ profileFrame: null }),
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
                                                          icon: d?.skuId === e.skuId ? eQ.U : void 0,
                                                          disabled: d?.skuId === e.skuId,
                                                          onClick: () => (0, e2.p)({ profileFrame: e }),
                                                      }),
                                                  },
                                                  e.skuId,
                                              );
                                    }),
                                ],
                            }),
                            i && (0, r.jsx)(e0.A, {}),
                            (0, r.jsxs)("div", {
                                className: e7.VH,
                                children: [
                                    (0, r.jsx)(C.E, { variant: "text-sm/normal", children: "Preview:" }),
                                    (0, r.jsxs)("div", {
                                        className: e7.ME,
                                        children: [
                                            (0, r.jsx)("img", { src: eP.A, alt: "" }),
                                            null != u && (0, r.jsx)(e9.A, { frame: u }),
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
var tl = a(702841),
    ts = a(793574),
    ti = a(590180),
    tr = a(4227),
    to = a(491438),
    td = a(61750),
    tc = a(328762);
let tu = (e) => {
        let [t, a] = o.useState(0);
        return (
            o.useLayoutEffect(() => {
                let e = tr.A.getPurchase;
                return (
                    (tr.A.getPurchase = (e) => void 0),
                    tr.A.emitChange(),
                    a(1),
                    () => {
                        (tr.A.getPurchase = e), tr.A.emitChange();
                    }
                );
            }, []),
            (0, r.jsx)("div", { className: tc.Do, children: (0, r.jsx)(to.A, { ...e }, t) })
        );
    },
    tm = () => {
        let e = (0, tl.bG)([G.default], () => G.default.getCurrentUser()),
            t = (0, tl.bG)([ti.A], () => ti.A.categories),
            a = (0, tl.bG)([tr.A], () => tr.A.purchases),
            n = (0, tl.bG)([ti.A], () => ti.A.lastSuccessfulFetch),
            l = t.size > 0 && a.size > 0 && null != n,
            { isFetching: s, categories: i } = (0, e5.Ay)({ logPerf: !1, stalePurchasesOK: !0, noOp: l }),
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
            let e = ti.A.getProduct(u),
                t = ti.A.getCategoryForProduct(u);
            null != e && null != t ? (g(e), j(t)) : (g(null), j(null));
        }, [u, c]),
        s)
            ? (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Loading categories and collectibles..." })
            : null == e
              ? (0, r.jsx)(C.E, { variant: "text-md/normal", children: "No user found" })
              : (0, r.jsxs)("div", {
                    className: tc.kL,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tc.uW,
                            children: [
                                (0, r.jsx)(A.D, { variant: "heading-lg/semibold", children: "Product Configuration" }),
                                (0, r.jsxs)("div", {
                                    className: tc.qp,
                                    children: [
                                        (0, r.jsx)(C.E, {
                                            variant: "text-md/semibold",
                                            className: tc.NB,
                                            children: "Primary Product SKU ID",
                                        }),
                                        (0, r.jsx)(p.k, { value: u, onChange: m, placeholder: "Enter product SKU ID" }),
                                        !c &&
                                            "" !== u.trim() &&
                                            (0, r.jsx)(C.E, {
                                                variant: "text-sm/normal",
                                                className: tc.KQ,
                                                children: "Loading products...",
                                            }),
                                        c &&
                                            "" !== u.trim() &&
                                            null == x &&
                                            (0, r.jsx)(C.E, {
                                                variant: "text-sm/normal",
                                                className: tc.kc,
                                                children: "Product not found",
                                            }),
                                        null != x &&
                                            (0, r.jsxs)(C.E, {
                                                variant: "text-sm/normal",
                                                className: tc.xT,
                                                children: ["Found: ", x.name],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: tc.uW,
                            children: [
                                (0, r.jsx)(A.D, { variant: "heading-lg/semibold", children: "Product Preview" }),
                                null != x && null != v
                                    ? (0, r.jsxs)("div", {
                                          className: tc.i1,
                                          children: [
                                              (0, r.jsx)(tu, { skuId: x.skuId }),
                                              (0, r.jsx)(h.$, {
                                                  variant: "primary",
                                                  onClick: () => {
                                                      null != x &&
                                                          null != e &&
                                                          (0, td.A)({
                                                              product: x,
                                                              analyticsLocations: [ts.A.COLLECTIBLES_SHOP_CARD],
                                                          });
                                                  },
                                                  text: "Show Collectibles Collected Modal",
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)("div", {
                                          className: tc.qf,
                                          children: (0, r.jsx)(C.E, {
                                              variant: "text-md/normal",
                                              className: tc.X2,
                                              children: "Enter a valid product SKU ID to see the preview",
                                          }),
                                      }),
                            ],
                        }),
                    ],
                });
    };
var th = a(410724);
let tx = { profile_effects: 1, nameplates: 2, profile_frames: 3, product_preview: 4 },
    tp = (e) => {
        let { setTab: t } = e,
            a = (0, k.bG)([O.A], () => O.A.getWindowOpen($.MLl.DEVTOOLS_POPOUT));
        return (0, r.jsxs)("div", {
            className: th.Qs,
            children: [
                (0, r.jsx)(_.D, {
                    onClick: () => {
                        t(1);
                    },
                    children: (0, r.jsx)("div", {
                        className: y()(th.vK, th.Dg),
                        children: (0, r.jsx)(C.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Effects",
                        }),
                    }),
                }),
                (0, r.jsx)(_.D, {
                    onClick: () => {
                        t(2);
                    },
                    children: (0, r.jsx)("div", {
                        className: y()(th.vK, th.st),
                        children: (0, r.jsx)(C.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Nameplates",
                        }),
                    }),
                }),
                (0, r.jsx)(_.D, {
                    onClick: () => {
                        t(3);
                    },
                    children: (0, r.jsx)("div", {
                        className: y()(th.vK, th.Dg),
                        children: (0, r.jsx)(C.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Profile Frames",
                        }),
                    }),
                }),
                (0, r.jsx)(_.D, {
                    onClick: () => {
                        t(4);
                    },
                    children: (0, r.jsx)("div", {
                        className: y()(th.vK, th.IP),
                        children: (0, r.jsx)(C.E, {
                            variant: "text-md/bold",
                            color: "always-white",
                            children: "Products",
                        }),
                    }),
                }),
                !a &&
                    (0, r.jsx)("div", {
                        style: { marginTop: 16 },
                        children: (0, r.jsx)(E.w, {
                            type: "warning",
                            children: (0, r.jsxs)(S.B, {
                                gap: 8,
                                children: [
                                    (0, r.jsx)(C.E, { variant: "text-md/semibold", children: "Not enough space?" }),
                                    (0, r.jsx)(C.E, {
                                        variant: "text-sm/normal",
                                        children: "You can pop out the DevTools to see the full layout.",
                                    }),
                                    (0, r.jsx)(h.$, {
                                        size: "sm",
                                        icon: N.t,
                                        variant: "secondary",
                                        onClick: D.openDevToolsPopout,
                                        text: "Popout DevTools",
                                    }),
                                ],
                            }),
                        }),
                    }),
            ],
        });
    },
    tg = () => {
        let [e, t] = o.useState(() => {
            let e = T.A.lastOpenSubTabId;
            return null != e && e in tx ? tx[e] : 0;
        });
        return (
            o.useEffect(() => {
                null != T.A.lastOpenSubTabId && (0, I.Jt)({ lastOpenSubTabId: null });
            }, []),
            (0, r.jsxs)(d.Ip, {
                className: th.iE,
                children: [
                    (0, r.jsxs)("div", {
                        className: th.C$,
                        children: [
                            (0, r.jsx)(A.D, { variant: "heading-xxl/medium", children: "Collectibles DevTools" }),
                            0 !== e && (0, r.jsx)(h.$, { variant: "primary", onClick: () => t(0), text: "Back" }),
                        ],
                    }),
                    (() => {
                        switch (e) {
                            case 1:
                                return (0, r.jsx)(eK, {});
                            case 2:
                                return (0, r.jsx)(en, {});
                            case 3:
                                return (0, r.jsx)(tn, {});
                            case 4:
                                return (0, r.jsx)(tm, {});
                            default:
                                return (0, r.jsx)(tp, { setTab: t });
                        }
                    })(),
                ],
            })
        );
    };
var tv = a(681154),
    tj = a(306264),
    tb = a(506774),
    tf = a(243721),
    ty = a(228366),
    t_ = a(587895),
    tC = a(429913),
    tE = a(475825),
    tS = a(505206);
function tN(e) {
    let { columns: t, data: a, className: n, rowClassName: l, onClickRow: s, selectedRowKey: i, rowHeight: d = 40 } = e,
        c = o.useMemo(
            () =>
                t.map((e) => ({
                    renderHeader: () => (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: e.key }),
                    ...e,
                })),
            [t],
        ),
        u = 0 === a.length ? [1] : [a.length];
    return (0, r.jsx)("div", {
        className: tS.CZ,
        children: (0, r.jsx)(tE.OZ, {
            className: n,
            innerClassName: tS.tp,
            sections: u,
            sectionHeight: 40,
            renderSection: (e) => {
                let { section: t } = e,
                    n = tS.ZR;
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
                    u = y()(tS.jD, { [tS.wD]: o === i, rowClassName: l });
                return (0, r.jsx)(
                    _.D,
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
var tA = a(409626),
    tk = a(692969),
    tI = a(760751),
    tT = a(403362),
    tD = a(435738),
    tO = a(99753),
    tR = a(975732),
    tw = a(574520),
    tM = a(808323),
    tL = a(832384),
    tP = a(424994),
    tU = a(330837);
function tG(e) {
    let { id: t } = e,
        a = (0, k.bG)([G.default], () => G.default.getUser(t));
    return null == a
        ? null
        : (0, r.jsx)(_.D, {
              className: tU._,
              onClick: function () {
                  (0, tR.openUserProfileModal)({ sourceAnalyticsLocations: [ts.A.DEV_TOOLS], userId: t });
              },
              children: (0, r.jsx)(C.E, { variant: "text-md/semibold", children: a.username }),
          });
}
function tB() {
    let e = (0, k.bG)([tO.A], () => tO.A.getFeed(tP.X1.GLOBAL_FEED)),
        t = (0, k.bG)([tO.A], () => tO.A.getFilters()),
        a = (0, k.cf)([tw.A], () => {
            let t = {};
            for (let a of e?.entries ?? []) t[(0, tw.$)(a.content)] = tw.A.canRenderContent(a.content);
            return t;
        }, [e]),
        n = (0, k.bG)([tD.A], () => tD.A.getImpressionCappedItemIds());
    if (null == t) return null;
    let l = e?.entries?.flatMap((e) => {
        let { content: l } = e;
        if (!(0, tM.l)(t, l)) return [];
        let s = a[(0, tw.$)(l)];
        return (0, r.jsxs)(
            "li",
            {
                className: tU.p,
                children: [
                    (0, r.jsx)(tG, { type: l.author_type, id: l.author_id }),
                    !s && (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Expired or no matching presence" }),
                    (0, tL.I5)(l) &&
                        (0, r.jsxs)(C.E, { variant: "text-md/normal", children: ["Expired at ", l.expires_at] }),
                    n.has(l.id) && (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Impression capped" }),
                ],
            },
            l.id,
        );
    });
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(A.D, { variant: "heading-md/semibold", children: "Selected Content" }),
            null != l ? (0, r.jsx)("ul", { children: l }) : (0, r.jsx)("div", { children: "(none?)" }),
        ],
    });
}
var tF = a(576470),
    tV = a(85451);
function t$() {
    let e = (0, k.bG)([tO.A], () => tO.A.getFeed(tP.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        { loading: t, nextFetchDate: a } = (0, k.cf)(
            [tO.A],
            () => tO.A.getFeedState(tP.X1.GLOBAL_FEED) ?? { loading: !1 },
        ),
        n = (0, k.bG)([tO.A], () => tO.A.getLastFeedFetchDate(tP.X1.GLOBAL_FEED));
    return (0, r.jsxs)("div", {
        children: [
            t
                ? (0, r.jsx)(C.E, { variant: "text-md/normal", children: "(fetching)" })
                : (0, r.jsxs)(C.E, {
                      variant: "text-md/normal",
                      children: [
                          "Next fetch: ",
                          null != a ? (0, r.jsx)(tF.A, { deadline: a }) : e ? "(awaiting push)" : "(unscheduled)",
                      ],
                  }),
            (0, r.jsxs)(C.E, {
                variant: "text-md/normal",
                children: [
                    "Last fetch:",
                    " ",
                    null != n ? (0, r.jsx)(tV.z, { inline: !0, entry: { start: n.getTime() } }) : "(never)",
                ],
            }),
        ],
    });
}
var tW = a(866839);
let tz = [
    {
        key: "type",
        cellClassName: y()(tW.Hn, tW.T$),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(C.E, { variant: "text-md/semibold", children: tv.ContentInventoryEntryType[t] });
        },
    },
    {
        key: "count",
        cellClassName: y()(tW.Hn, tW.MX),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)("div", { children: (0, r.jsx)(C.E, { variant: "text-md/normal", children: t.length }) });
        },
    },
    {
        key: "only?",
        cellClassName: tW.Hn,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(tH, { type: t });
        },
    },
];
function tH(e) {
    let { type: t } = e,
        a = (0, k.bG)([tO.A], () => tO.A.getFilters()),
        n = a?.types?.has(t) ?? !1;
    return (0, r.jsx)(tf.d, {
        checked: n,
        onChange: function () {
            n
                ? ty.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: void 0 })
                : ty.h.dispatch({ type: "CONTENT_INVENTORY_SET_FILTERS", filters: { types: new Set([t]) } });
        },
    });
}
function tK() {
    var e;
    let t,
        a = (0, k.bG)([tO.A], () => tO.A.getFeed(tP.X1.GLOBAL_FEED)),
        n = (0, k.bG)([tO.A], () => tO.A.getDebugImpressionCappingDisabled()),
        l = (0, k.bG)([tD.A], () => tD.A.getDebugFastImpressionCappingEnabled()),
        s =
            ((e = a?.entries?.map((e) => e.content)),
            Object.keys((t = eO().groupBy(e, (e) => e.content_type))).map((e) => {
                let a = t[e];
                return { key: `${e}`, type: a[0].content_type, entries: a };
            })),
        i = (0, k.bG)([tO.A], () => tO.A.getFeedState(tP.X1.GLOBAL_FEED)?.loading === !0),
        [c, u] = o.useState(""),
        m = (0, k.bG)(
            [tI.A, t_.A],
            () => (parseInt(c) > 0 ? c : (tI.A.searchGamesByName(c)[0] ?? t_.A.getApplicationByName(c)?.id)),
            [c],
        ),
        x = (0, tk.A)({ applicationId: m, location: "DevToolsContentInventory", source: tA.Ob.DevTools }),
        g = Object.entries(tb.w.get("GameProfileModal") ?? {})
            .filter((e) => {
                let [t, a] = e;
                return a;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        v = (0, tC.A)(g).filter(tT.Vq);
    return (0, r.jsx)("div", {
        className: tS.nd,
        children: (0, r.jsxs)(d.Ip, {
            className: tW.Qs,
            children: [
                (0, r.jsxs)(S.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(C.E, { variant: "text-md/semibold", children: "Inventory" }),
                        s.length > 0 && (0, r.jsx)(tN, { columns: tz, data: s }),
                        (0, r.jsx)(t$, {}),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Refresh Now",
                            fullWidth: !0,
                            onClick: function () {
                                ty.h.dispatch({
                                    type: "CONTENT_INVENTORY_MANUAL_REFRESH",
                                    feedId: tP.X1.GLOBAL_FEED,
                                    feature: tj.M.INBOX,
                                });
                            },
                            loading: i,
                        }),
                    ],
                }),
                (0, r.jsxs)(S.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(C.E, { variant: "text-md/semibold", children: "Impression Capping" }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Clear Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                ty.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Log Impressions",
                            fullWidth: !0,
                            onClick: function () {
                                ty.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS" });
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: n ? "Enable Impression Capping" : "Disable Impression Capping",
                            fullWidth: !0,
                            onClick: function () {
                                ty.h.dispatch({ type: "CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING" });
                            },
                        }),
                        (0, r.jsx)(h.$, {
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
                (0, r.jsx)(tB, {}),
                (0, r.jsxs)(S.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(C.E, { variant: "text-md/semibold", children: "Game Profile" }),
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
                                    { children: (0, r.jsx)(tY, { application: e }) },
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
let tY = (e) => {
    let { application: t } = e,
        a = (0, tk.A)({ applicationId: t.id, location: "DevToolsContentInventory", source: tA.Ob.DevTools });
    return (0, r.jsx)(_.D, {
        onClick: a,
        children: (0, r.jsx)(C.E, { variant: "text-xs/normal", color: "text-muted", children: t.name }),
    });
};
var tq = a(783878),
    tJ = a(137177),
    tQ = a(311043),
    tX = a(569926),
    tZ = a(282435);
function t0(e) {
    return tZ.Bf.get(e) ?? 0;
}
function t1(e) {
    let { gameId: t } = e,
        { data: a, isLoading: n } = (0, tX.I)(t),
        l = (0, k.bG)([tQ.A], () => tQ.A.hasNoData(t), [t]);
    return n || (null == a && !l)
        ? (0, r.jsx)(C.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading\u2026" })
        : null == a
          ? (0, r.jsxs)(C.E, {
                variant: "text-sm/normal",
                color: "text-feedback-critical",
                children: ["No game found for ID ", t],
            })
          : (0, r.jsxs)(S.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(tJ.A, { game: a, size: tJ.M.SMALL }),
                    (0, r.jsxs)(S.B, {
                        gap: 0,
                        children: [
                            (0, r.jsx)(C.E, { variant: "text-md/semibold", children: a.name }),
                            (0, r.jsx)(C.E, { variant: "text-xxs/normal", color: "text-muted", children: a.id }),
                        ],
                    }),
                ],
            });
}
function t2() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(""),
        l = (0, k.bG)([tI.A], () => tI.A.games),
        s = o.useMemo(
            () =>
                l
                    .filter((e) => null != e.name && "" !== e.name)
                    .map((e) => ({ id: e.id, value: e.id, label: e.name }))
                    .sort((e, t) => t0(t.value) - t0(e.value)),
            [l],
        ),
        i = o.useMemo(() => ({ baseSort: (e, t) => t0(t.item.value) - t0(e.item.value), keys: ["label"] }), []),
        d = o.useCallback((e) => {
            t(e), null != e && n("");
        }, []),
        c = o.useCallback((e) => {
            n(e), e.trim().length > 0 && t(null);
        }, []),
        u = a.trim(),
        m = u.length > 0 ? u : (e ?? void 0),
        x = (0, tk.A)({ gameId: m, location: "DevToolsGameProfile", source: tA.Ob.DevTools });
    return (0, r.jsx)("div", {
        className: tS.nd,
        children: (0, r.jsxs)(S.B, {
            gap: 32,
            padding: 12,
            fullWidth: !1,
            children: [
                (0, r.jsxs)(S.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(A.D, { variant: "heading-md/bold", children: "Game Profile" }),
                        (0, r.jsx)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: "Search for a game by name, or paste a game ID, then open its profile.",
                        }),
                    ],
                }),
                (0, r.jsxs)(S.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(A.D, { variant: "heading-sm/bold", children: "Search" }),
                        (0, r.jsx)(tq.Z, {
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
                (0, r.jsxs)(S.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(A.D, { variant: "heading-sm/bold", children: "Game ID" }),
                        (0, r.jsx)(p.k, {
                            label: "Game ID",
                            hideLabel: !0,
                            placeholder: "Paste a game ID",
                            value: a,
                            onChange: c,
                        }),
                        u.length > 0 && (0, r.jsx)(t1, { gameId: u }),
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
var t8 = a(696986),
    t3 = a(47167),
    t6 = a(734057),
    t5 = a(994500),
    t4 = a(310031),
    t9 = a(394953),
    t7 = a(732421);
let ae = [
        {
            key: "channelName",
            cellClassName: y()(t7.Hn, t7.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(C.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: y()(t7.Hn, t7.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(C.E, { variant: "text-md/normal", children: t });
            },
        },
    ],
    at = [
        {
            key: "channelName",
            cellClassName: y()(t7.Hn, t7.HA),
            render(e) {
                let { channelName: t } = e;
                return (0, r.jsx)(C.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "loadState",
            cellClassName: y()(t7.Hn, t7.C7),
            render(e) {
                let { loadState: t } = e;
                return (0, r.jsx)(C.E, { variant: "text-md/normal", children: t });
            },
        },
        {
            key: "channelId",
            cellClassName: y()(t7.Hn, t7.Zm),
            render(e) {
                let { channelId: t } = e;
                return (0, r.jsx)(C.E, { variant: "text-md/normal", children: t });
            },
        },
    ];
function aa() {
    let { unreadRecentMentionsCount: e, unreadChannelIds: t } = (0, t9.U4)(),
        {
            isLoading: a,
            hasLoadedEver: n,
            hasPreloaded: l,
            hasMoreToLoad: s,
            isLoadingComplete: i,
        } = (0, tl.cf)([t4.A], () => ({
            isLoading: t4.A.isLoading,
            hasLoadedEver: t4.A.hasLoadedEver,
            hasPreloaded: t4.A.hasPreloaded,
            hasMoreToLoad: t4.A.hasMoreToLoad,
            isLoadingComplete: t4.A.isLoadingComplete,
        })),
        o = (0, tl.bG)([t4.A], () => t4.A.currentRequestAnalyticsPayload),
        c = (0, tl.cf)([t4.A], () => t4.A.getChannelInfoMap()),
        u = (0, tl.cf)([t6.A], () => {
            let e = {};
            return (
                Object.entries(c).forEach((t) => {
                    let [a] = t,
                        n = t6.A.getChannel(a);
                    e[a] = n ?? null;
                }),
                e
            );
        }),
        m = (0, tl.cf)([t6.A], () =>
            t.reduce((e, t) => {
                let a = t6.A.getChannel(t);
                return (e[t] = a ?? null), e;
            }, {}),
        ),
        h = (0, tl.bG)([t4.A], () => t4.A.getInboxMessages()),
        x = (0, tl.bG)([t4.A], () => t4.A.getDevOverrides().navOnClick);
    return (0, r.jsx)("div", {
        className: tS.nd,
        children: (0, r.jsxs)(d.Ip, {
            className: t7.Qs,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(A.D, { variant: "heading-lg/semibold", children: "Inbox" }),
                        (0, r.jsxs)("div", { children: ["Inbox Message Count: ", h.length] }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(A.D, { variant: "heading-lg/semibold", children: "Dev Overrides" }),
                        (0, r.jsx)("div", {
                            style: { display: "flex", alignItems: "center", marginTop: 8 },
                            children: (0, r.jsx)(tf.d, {
                                label: "Nav On Click",
                                checked: !!x,
                                onChange: (e) => {
                                    ty.h.dispatch({ type: "NOTIFICATIONS_INBOX_SET_DEV_OVERRIDES", navOnClick: e });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(A.D, { variant: "heading-lg/semibold", children: "Unreads and Badging" }),
                        (0, r.jsx)(t8.h, { size: 8 }),
                        (0, r.jsxs)("div", { children: ["Unread Recent Mentions Count: ", e] }),
                        (0, r.jsxs)("div", { children: ["Unread Channel Count: ", t.length] }),
                        (0, r.jsx)(tN, {
                            columns: ae,
                            data: Object.entries(m).map((e) => {
                                let [t, a] = e;
                                return {
                                    key: t,
                                    channelId: t,
                                    channelName: null != a ? (0, t3.m1)(a, G.default, t5.A) : "",
                                };
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(A.D, { variant: "heading-lg/semibold", children: "Store State" }),
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
                        (0, r.jsx)(A.D, { variant: "heading-lg/semibold", children: "Channel Info Map" }),
                        (0, r.jsxs)("div", { children: ["Total Channels: ", Object.keys(c).length] }),
                        (0, r.jsx)(tN, {
                            columns: at,
                            data: Object.entries(c).map((e) => {
                                let t,
                                    [a, n] = e;
                                return {
                                    key: a,
                                    channelId: a,
                                    channelName: null != (t = u[a]) ? (0, t3.m1)(t, G.default, t5.A) : "",
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
var an = a(976860),
    al = a(340124),
    as = a(988483);
let ai = function () {
    return (0, r.jsxs)("div", {
        className: as.k,
        children: [
            (0, r.jsx)(C.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                style: { marginBottom: "8px" },
                children: "Click the button below to clear your Minor Reward Capping History.",
            }),
            (0, r.jsx)(h.$, {
                onClick: () => {
                    (0, al.Ov)(), (0, an.pX)($.BVt.QUEST_HOME);
                },
                text: "Clear History",
            }),
            (0, r.jsx)(C.E, {
                variant: "text-md/normal",
                color: "text-feedback-info",
                children:
                    "Your may have to refresh your client after being redirected to the Quest Home in order to see these changes.",
            }),
        ],
    });
};
var ar = a(271866),
    ao = a(868511),
    ad = a(147964),
    ac = a(760716),
    au = a(533406),
    am = a(115093),
    ah = a(11039);
let ax = window.GLOBAL_ENV.RELEASE_CHANNEL === am.B.STAGING ? "1438571444891025408" : "1346069614634864772";
function ap() {
    let e = (0, ac.i)((e) => e.overrideApplicationId),
        t = (0, ac.i)((e) => e.setOverrideApplicationId),
        a = null != e,
        [n, l] = o.useState(ax),
        [s, i] = o.useState($.FYj),
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
        u = (0, ac.i)((e) => e.showSelfActivity),
        m = (0, ac.i)((e) => e.setShowSelfActivity),
        x = (0, ac.i)((e) => e.recommendationApplicationIds),
        g = (0, ac.i)((e) => e.setRecommendationApplicationIds),
        v = o.useCallback(
            (e) => {
                e ? g(s) : g(null);
            },
            [s, g],
        ),
        j = (0, k.bG)([ad.A], () => null != ad.A.testModeApplicationId),
        b = o.useCallback((e) => {
            e ? (0, eS.openModal)((e) => (0, r.jsx)(ao.A, { ...e })) : ar.cL();
        }, []),
        f = (0, tk.A)({
            location: "DevToolsSlayerStorefrontPanel",
            applicationId: n,
            source: tA.Ob.Embed,
            trackEntryPointImpression: !0,
        }),
        _ = o.useCallback(
            (e) => {
                f?.(e);
            },
            [f],
        ),
        C = o.useCallback(() => {
            (0, an.pX)($.BVt.COLLECTIBLES_SHOP_GAME_SHOP(n));
        }, [n]),
        E = o.useCallback(() => {
            (0, au.openSocialLayerStorefrontAnnouncementModal)();
        }, []);
    return (0, r.jsx)("div", {
        className: y()(tS.nd, ah.n),
        children: (0, r.jsxs)("div", {
            className: ah.k,
            children: [
                (0, r.jsx)(p.k, { label: "Application ID", value: n, onChange: c }),
                (0, r.jsx)(A.D, { variant: "heading-lg/normal", children: "Activity Override" }),
                (0, r.jsx)(tf.d, { label: "Override activity application ID", checked: a, onChange: d }),
                (0, r.jsx)(tf.d, { label: "Show own voice activity (bypass self check)", checked: u, onChange: m }),
                (0, r.jsx)(tf.d, { label: "Enable application test mode", checked: j, onChange: b }),
                (0, r.jsx)(h.$, { text: "Open Game Profile Modal", onClick: _ }),
                (0, r.jsx)(h.$, { text: "Open Announcement Modal", onClick: E }),
                (0, r.jsx)(h.$, { text: "Navigate to App Game Shop", onClick: C }),
                (0, r.jsx)(A.D, { variant: "heading-lg/normal", children: "Wishlists" }),
                (0, r.jsx)(p.k, {
                    label: "Recommendation application IDs",
                    value: s,
                    onChange: i,
                    disabled: null == x,
                }),
                (0, r.jsx)(tf.d, {
                    label: "Enable recommendation application IDs override",
                    checked: null != x,
                    onChange: v,
                }),
            ],
        }),
    });
}
var ag = a(540999),
    av = a(865116);
a(670812), a(772958);
var aj = a(58736);
a(558179), a(21574);
var ab = a(788806),
    af = a(302031);
let ay = {
    base00: eN.A.colors.BACKGROUND_BASE_LOWER.css,
    base03: eN.A.colors.TEXT_FEEDBACK_WARNING.css,
    base07: eN.A.colors.TEXT_DEFAULT.css,
    base08: eN.A.colors.TEXT_MUTED.css,
    base09: eN.A.colors.TEXT_FEEDBACK_POSITIVE.css,
    base0B: eN.A.colors.TEXT_FEEDBACK_WARNING.css,
    base0D: eN.A.colors.TEXT_BRAND.css,
};
function a_(e) {
    let t = {};
    for (let [a, n] of Object.entries(e)) t[a] = n;
    return t;
}
let aC = a_(ay),
    aE = a_(ay);
function aS(e) {
    return $.AKn.test(e) ? (0, r.jsx)(af.Ay, { type: af.Ay.Types.TEXT, children: () => e }) : e;
}
function aN(e) {
    let { data: t } = e,
        a = (0, K.Ay)();
    return (0, r.jsx)("div", {
        className: tS.H$,
        children: (0, r.jsx)(ab.d, {
            data: t,
            theme: "light" === a ? aE : aC,
            invertTheme: !1,
            valueRenderer: aS,
            shouldExpandNode: () => !0,
        }),
    });
}
var aA = a(761929),
    ak = a(23599);
function aI(e) {
    let { resizableNode: t, minHeight: a, onResize: n } = e,
        l = (0, aA.A)({
            minDimension: a,
            resizableDomNodeRef: t,
            onElementResize: n,
            orientation: aA.R.VERTICAL_TOP,
            usePointerEvents: !0,
        });
    return (0, r.jsx)("div", { onPointerDown: l, className: ak.Di });
}
function aT(e) {
    let { children: t, className: a, initialHeight: n, minHeight: l } = e,
        s = o.useRef(null),
        [i, d] = o.useState(n);
    return (0, r.jsxs)("div", {
        ref: s,
        className: ak.kL,
        style: { minHeight: l, height: i },
        children: [
            (0, r.jsx)(aI, { resizableNode: s, minHeight: l, onResize: d }),
            (0, r.jsx)("div", { className: y()(ak.KZ, a), children: t }),
        ],
    });
}
var aD = a(231643);
a(895017), aD.fu.NONE, aD.fu.NONE;
var aO = a(404778),
    aR = a(824552),
    aw = a(688810),
    aM = a(975460),
    aL = a(46225),
    aP = a(487431),
    aU = a(952818),
    aG = a(905552),
    aB = a(546183),
    aF = a(134861),
    aV = a(71393),
    a$ = a(967198),
    aW = a(157257),
    az = a(942370),
    aH = a(375708),
    aK = a(311350),
    aY = a(325126);
function aq() {
    var e;
    let t,
        a,
        n = o.useRef(null),
        { analyticsLocations: l } = (0, aw.Ay)(ts.A.DEV_TOOLS),
        [s, i] = o.useState(""),
        d = (0, k.bG)([a$.A], () => a$.A.getGuildId()),
        c = (0, k.bG)([aV.A], () => aV.A.getGuild(d)),
        u = c?.gameApplicationIds ?? [],
        m = (0, tC.A)(u).filter((e) => null != e),
        x = (0, k.bG)([aU.Ay, aW.A], () => (0, aG.A)(aU.Ay, aW.A)),
        g = (0, tC.h)(s),
        v = (0, aM.g)(g),
        j = (0, k.yK)(
            [t_.A],
            () => g?.linkedGames?.map((e) => t_.A.getApplication(e.id)).filter((e) => null != e) ?? [],
        ),
        b = (0, aL.RD)(g, { allowedFlows: [az._M.RPC], debug: !0 }),
        f = (0, aL.RD)(g, { allowedFlows: [az._M.WEB], debug: !0 }),
        _ = (0, k.bG)([aF.A], () => null != v && aF.A.isConnected(v.id)),
        E = (0, aL.RD)(g, { debug: !0 }),
        { canDeauthorize: S, deauthorize: N } =
            ((e = E.connectionApp?.id),
            (t = (0, k.bG)([aB.default], () => aB.default.getNewestTokenForApplication(e))),
            (a = o.useCallback(() => {
                null != t && aR.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, r.jsxs)("div", {
        ref: n,
        className: y()(tS.nd, aY.nd),
        children: [
            (0, r.jsxs)("div", {
                className: aY.kL,
                children: [
                    (0, r.jsx)(A.D, { variant: "heading-lg/normal", children: "Guild Official Games" }),
                    null != c
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)(C.E, { variant: "text-md/normal", children: [c.name, " (", c.id, ")"] }),
                                  m.length > 0
                                      ? (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(C.E, {
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
                                      : (0, r.jsx)(C.E, { variant: "text-md/normal", children: "No official games" }),
                              ],
                          })
                        : (0, r.jsx)(C.E, { variant: "text-md/normal", children: "No guild selected" }),
                ],
            }),
            (0, r.jsxs)("div", {
                className: aY.kL,
                children: [
                    (0, r.jsx)(A.D, { variant: "heading-lg/normal", children: "Application" }),
                    (0, r.jsx)(p.k, { label: "Application ID", value: s, onChange: i }),
                    null != x && null != x.id
                        ? (0, r.jsx)(h.$, {
                              onClick: () => i(x.id),
                              variant: "primary",
                              text: `Use detected game: ${x.name} (${x.id})`,
                          })
                        : null,
                    (0, r.jsxs)(C.E, {
                        variant: "text-md/normal",
                        children: ["Application Name: ", null != g ? g.name : "N/A"],
                    }),
                    (0, r.jsxs)(C.E, {
                        variant: "text-md/normal",
                        children: [
                            "Linked Games:",
                            " ",
                            j.length > 0
                                ? j.map((e) => ((0, aM.t)(g)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                : "N/A",
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(aO.c, {}),
            (0, r.jsxs)("div", {
                className: aY.kL,
                children: [
                    (0, r.jsx)(A.D, { variant: "heading-lg/normal", children: "Authorization" }),
                    (0, r.jsx)(aP.VT, {
                        overallStatus: b.debug.isSubscribedToAuthorizeRequest
                            ? aP.nW.OVERALL_GOOD
                            : _
                              ? aP.nW.WARN
                              : aP.nW.OVERALL_BAD,
                        name: aH.intl.string(aK.default.AGLx00),
                        steps: [
                            {
                                status: _ ? aP.nW.GOOD : aP.nW.BAD,
                                text: aH.intl.string(aK.default.kxF9br),
                                description: _ ? null : aH.intl.string(aK.default.PFxxJa),
                                learnMoreLink: _
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: b.debug.isSubscribedToAuthorizeRequest
                                    ? aP.nW.GOOD
                                    : _
                                      ? aP.nW.WARN
                                      : aP.nW.BAD,
                                text: aH.intl.string(aK.default.S94dzs),
                                description:
                                    b.debug.isSubscribedToAuthorizeRequest || !_
                                        ? null
                                        : aH.intl.string(aK.default.aTULMB),
                                learnMoreLink:
                                    b.debug.isSubscribedToAuthorizeRequest || !_
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: E.chosenFlow === az._M.RPC,
                    }),
                    (0, r.jsx)(aP.VT, {
                        overallStatus: f.debug.hasConnectionEntrypointUrl ? aP.nW.OVERALL_GOOD : aP.nW.OVERALL_BAD,
                        name: aH.intl.string(aK.default.K3ObrU),
                        steps: [
                            {
                                status: f.debug.hasConnectionEntrypointUrl ? aP.nW.GOOD : aP.nW.BAD,
                                text: aH.intl.string(aK.default["8a7IrV"]),
                                description: f.debug.hasConnectionEntrypointUrl
                                    ? aH.intl.formatToPlainString(aK.default["9iLeL2"], {
                                          url: f.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: E.chosenFlow === az._M.WEB,
                    }),
                    (0, r.jsx)(aP.Sy, {
                        status: E.hasAlreadyLinked ? aP.nW.OVERALL_GOOD : aP.nW.OVERALL_BAD,
                        text: aH.intl.string(aH.t["Vu/zmQ"]),
                    }),
                    0 === E.debug.validFlows.length &&
                        (0, r.jsx)(C.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: aH.intl.string(aK.default.eg0mNa),
                        }),
                    (0, r.jsx)(h.$, {
                        disabled: !E.canStartAuthorization,
                        onClick: () => E.startAuthorization({ analyticsLocations: l }),
                        variant: "primary",
                        text: "Start Authorization",
                    }),
                    (0, r.jsx)(C.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children:
                            "This will start whichever authorization flow is available. RPC authorization takes precedence over web.",
                    }),
                    (0, r.jsx)(h.$, {
                        disabled: !b.canStartAuthorization,
                        onClick: () => b.startAuthorization({ analyticsLocations: l }),
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, r.jsx)(h.$, {
                        disabled: !f.canStartAuthorization,
                        onClick: () => f.startAuthorization({ analyticsLocations: l }),
                        variant: "secondary",
                        text: "Start Web Authorization",
                    }),
                    (0, r.jsx)(h.$, { disabled: !S, onClick: N, variant: "critical-primary", text: "Deauthorize" }),
                ],
            }),
            g?.applicationAccountLinkBenefitConfig != null &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(aO.c, {}),
                        (0, r.jsxs)("div", {
                            className: aY.kL,
                            children: [
                                (0, r.jsx)(A.D, { variant: "heading-lg/normal", children: "Reward Configuration" }),
                                (0, r.jsx)("div", {
                                    className: aY.Nr,
                                    children: (0, r.jsxs)("div", {
                                        className: aY.Tc,
                                        children: [
                                            null != g.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, r.jsx)("img", {
                                                    src: g.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: aY.L8,
                                                }),
                                            (0, r.jsx)(C.E, {
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
var aJ = a(427358),
    aQ = a(465153);
let aX = [
    {
        key: "user",
        cellClassName: aQ.iL,
        render(e) {
            let { user: t, key: a } = e;
            return t?.username ?? a;
        },
    },
    {
        key: "affinity",
        renderHeader: () => (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "COMMUNICATION AFFINITY" }),
        cellClassName: aQ.nz,
        render(e) {
            let { affinity: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "vcProbability",
        renderHeader: () => (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "VOICE AFFINITY" }),
        cellClassName: aQ.nz,
        render(e) {
            let { vcProbability: t } = e;
            return t.toFixed(5);
        },
    },
    {
        key: "isFriend",
        renderHeader: () => (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "IS FRIEND" }),
        cellClassName: aQ.nz,
        render(e) {
            let { isFriend: t } = e;
            return t.toString();
        },
    },
];
function aZ() {
    let e = (0, k.yK)([aJ.A, G.default], () =>
        aJ.A.getUserAffinities().map((e) => {
            let { otherUserId: t, communicationProbability: a, vcProbability: n, isFriend: l } = e;
            return { user: G.default.getUser(t), affinity: a, vcProbability: n, isFriend: l, key: t };
        }),
    );
    return 0 === e.length ? null : (0, r.jsx)(tN, { className: tS.nd, columns: aX, rowClassName: aQ.nM, data: e });
}
var a0 = a(139716),
    a1 = a(847599),
    a2 = a(282621);
function a8() {
    return (0, r.jsx)("div", {
        className: y()(tS.nd, a2.k),
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(A.D, { variant: "heading-lg/semibold", children: "Quick Actions" }),
                (0, r.jsx)(aO.c, { gap: 16 }),
                (0, r.jsxs)("div", {
                    className: a2.h,
                    children: [
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Launch Age Verification Test Tool",
                            onClick: () =>
                                void (0, eS.openModalLazy)(
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
                                a0.A.showAgeVerificationGetStartedModal({ entryPoint: a1.q1.DEV_TOOLS_QUICK_ACTIONS }),
                            fullWidth: !0,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var a3 = a(989349),
    a6 = a.n(a3),
    a5 = a(862482),
    a4 = a(624479),
    a9 = a(555704),
    a7 = a(285796),
    ne = a(241326),
    nt = a(892547),
    na = a(297413),
    nn = a(379078),
    nl = a(704554),
    ns = a(957565),
    ni = a(58703),
    nr = a(80703),
    no = a(495544);
let nd = 0,
    nc = [],
    nu = 0,
    nm = [],
    nh = !1;
class nx extends k.Ay.Store {
    static displayName = "AnalyticsLogStore";
    initialize() {
        this.waitFor(no.default, ag.A);
    }
    get loggedEvents() {
        return nc;
    }
    get loggedEventsVersion() {
        return nu;
    }
    get loggedTriggers() {
        return nm;
    }
    get trackTriggers() {
        return nh;
    }
}
let np = new nx(ty.h, {
    TRACK: function (e) {
        let { event: t, properties: a, fingerprint: n } = e;
        ag.A.isDeveloper &&
            (nc.push({
                key: (nd++).toString(),
                event: t,
                properties: a,
                fingerprint: null != n ? (0, nr.d)(n) : no.default.getId(),
                timestamp: new Date(),
            }),
            nu++,
            nc.length > 500 && (nc = nc.slice(-Math.floor(250))));
    },
    TRACK_TRIGGER: function (e) {
        let { experimentId: t, descriptor: a, exposureType: n, excluded: l, location: s, previouslyTracked: i } = e;
        !ag.A.isDeveloper ||
            (nh &&
                (nm = [
                    ...nm,
                    {
                        key: (0, eu.A)(),
                        experimentId: t,
                        descriptor: a,
                        exposureType: n,
                        excluded: l,
                        location: s,
                        previouslyTracked: i,
                        timestamp: new Date(),
                    },
                ]).length > 500 &&
                nm.shift());
    },
    SET_TRACK_TRIGGERS: function (e) {
        let { enabled: t } = e;
        nh = t;
    },
    ANALYTICS_LOG_CLEAR: function () {
        (nc = []), nu++, (nm = []);
    },
});
var ng = a(658675);
function nv(e) {
    let { className: t, children: a } = e;
    return (0, r.jsx)("dl", { className: y()(tS.qo, t), children: a });
}
let nj = (e) => {
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
                (0, r.jsx)("dt", { className: tS.Bz, children: t }),
                (0, r.jsxs)("dd", {
                    className: tS.Nw,
                    children: [
                        a,
                        null != n
                            ? (0, r.jsx)(_.D, {
                                  tag: "span",
                                  className: tS.nH,
                                  onClick: () => (0, ns.C)(n, () => s(!0)),
                                  children: l
                                      ? (0, r.jsx)(eQ.U, { color: "currentColor", size: "sm" })
                                      : (0, r.jsx)(a4.T, { color: "currentColor", size: "sm" }),
                              })
                            : null,
                    ],
                }),
            ],
        })
    );
};
function nb(e) {
    let { value: t } = e;
    return (0, r.jsx)(ng.P, { checked: t });
}
var nf = a(733657);
let ny = [
    {
        key: "event",
        cellClassName: nf.Hz,
        render(e) {
            let { event: t } = e;
            return t;
        },
    },
    {
        key: "location",
        cellClassName: nf.QN,
        render(e) {
            let { properties: t } = e;
            return null == t.location ? null : t.location;
        },
    },
];
function n_(e) {
    let { children: t } = e;
    return (0, r.jsx)(d.Ip, { className: nf._D, children: (0, r.jsx)("dl", { children: t }) });
}
function nC(e) {
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
            className: nf.fY,
            children: [
                (0, r.jsx)("dt", { className: nf.m2, children: t }),
                (0, r.jsx)("dd", { children: a }),
                (0, r.jsx)(_.D, {
                    tag: "span",
                    className: nf.nH,
                    onClick: () => (0, ns.C)(JSON.stringify(n), () => s(!0)),
                    children: l
                        ? (0, r.jsx)(eQ.U, { color: "currentColor", size: "sm" })
                        : (0, r.jsx)(a4.T, { color: "currentColor", size: "sm" }),
                }),
            ],
        })
    );
}
let nE = new Set(["client_performance_cpu", "client_performance_memory"]),
    nS = [
        {
            id: "details",
            name: "Details",
            group: aD.fu.NONE,
            render: (e) => {
                let {
                        loggedEvent: { event: t, properties: a, timestamp: n, fingerprint: l },
                        onClose: s,
                        filteredEvents: i,
                    } = e,
                    o = G.default.getUser(l),
                    d = a6()(n);
                return (0, r.jsxs)("div", {
                    className: nf.sw,
                    "data-mtctest-ignore": "true",
                    children: [
                        (0, r.jsxs)(aj.Ay, {
                            className: y()(tS.jr, nf.nZ),
                            children: [
                                (0, r.jsx)(aj.Ay.Icon, { icon: a9.U, tooltip: t }),
                                (0, r.jsxs)(aj.Ay.Title, {
                                    wrapperClassName: nf.qd,
                                    children: [
                                        t,
                                        (0, r.jsx)(_.D, {
                                            tag: "span",
                                            className: nf.KE,
                                            onClick: () => (0, ns.C)(t),
                                            children: (0, r.jsx)(a4.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(aj.Ay.Icon, {
                                    icon: a4.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, ns.C)(
                                            JSON.stringify(
                                                { event: t, timestamp: n, fingerprint: l, user: o?.id, ...a },
                                                (e, t) => (void 0 === t ? null : t),
                                                2,
                                            ),
                                        );
                                    },
                                }),
                                (0, r.jsx)(aj.Ay.Icon, { icon: a7.a, tooltip: "Close", onClick: s }),
                            ],
                        }),
                        (0, r.jsxs)(nv, {
                            className: nf.ZK,
                            children: [
                                (0, r.jsx)(nj, {
                                    name: "Timestamp (local)",
                                    copyValue: n.toISOString(),
                                    children: (0, r.jsxs)("time", {
                                        dateTime: n.toISOString(),
                                        title: (0, ni.i$)(d, "LLLL"),
                                        children: ["(", a6().locale(), ") ", (0, ni.mk)(d)],
                                    }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nj, {
                                        name: "User",
                                        copyValue: o.id,
                                        children: (0, r.jsx)(na.A, { user: o }),
                                    }),
                                (0, r.jsx)(nj, {
                                    name: "Fingerprint",
                                    copyValue: l,
                                    children: (0, r.jsx)("code", { children: l }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(n_, {
                            children: Object.entries(a).map((e) => {
                                let [a, n] = e,
                                    l = nE.has(a)
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
                                                nC,
                                                {
                                                    name: `${a}:`,
                                                    copyValue: { [a]: n || null },
                                                    children:
                                                        null != n
                                                            ? (0, r.jsx)("code", { children: JSON.stringify(n) })
                                                            : (0, r.jsx)("code", {
                                                                  className: nf.HO,
                                                                  children: "null",
                                                              }),
                                                },
                                                a,
                                            ),
                                            null !== l &&
                                                null !== l.average &&
                                                (0, r.jsx)(
                                                    nC,
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
    nN = {
        events: {
            label: "Events",
            filter: (e) =>
                Object.entries(nN)
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
    nA = {
        searchType: nn.n.REGEX,
        searchStringGenerator: (e) => {
            let { event: t, properties: a } = e;
            return null != a.location ? [t, a.location] : t;
        },
        throttleMs: 100,
    };
function nk() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (0, k.bG)([np], () => np.loggedEventsVersion),
        [l, s] = o.useState(() => Object.keys(nN)),
        [i, d] = o.useState(np.loggedEvents),
        c = o.useCallback((e) => {
            d(e);
        }, []);
    (0, nl.RT)(t, np.loggedEvents, c, nA, [n]);
    let u = i.filter((e) => {
            for (let t of l) if (nN[t].filter(e)) return !0;
            return !1;
        }),
        [m, h] = o.useState(void 0),
        x = u.find((e) => e.key === m),
        { TabBar: p, renderSelectedTab: g } = (0, aD.Ay)({ tabs: nS }, []);
    return (0, r.jsxs)("div", {
        ref: e,
        className: y()(tS.nd, nf.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nf.rh,
                children: [
                    (0, r.jsx)(a5.$n, {
                        className: nf.Q$,
                        look: a5.$n.Looks.BLANK,
                        size: a5.$n.Sizes.ICON,
                        onClick: I.eY,
                        children: (0, r.jsx)("span", {
                            title: aH.intl.string(aH.t.VkKicb),
                            children: (0, r.jsx)(ne.u, {
                                size: "md",
                                color: "currentColor",
                                "aria-label": aH.intl.string(aH.t.VkKicb),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", { className: nf.Bi }),
                    (0, r.jsx)("div", {
                        className: nf.uW,
                        children: Object.entries(nN).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                _.D,
                                {
                                    className: y()(nf.pb, l.includes(t) && nf.bx),
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
                className: nf.rh,
                children: (0, r.jsx)(nt.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search by event name",
                }),
            }),
            (0, r.jsx)(tN, { columns: ny, data: u, selectedRowKey: m, onClickRow: (e) => h(e.key) }),
            null != x &&
                (0, r.jsxs)(aT, {
                    className: nf.rf,
                    minHeight: 100,
                    initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(p, {}), g({ loggedEvent: x, onClose: () => h(void 0), filteredEvents: u })],
                }),
        ],
    });
}
var nI = a(382483),
    nT = a(385113),
    nD = a(315117);
function nO(e) {
    let { config: t } = e,
        a = Object.entries(t.surfaces ?? {});
    return (0, r.jsxs)(S.B, {
        gap: 8,
        padding: 8,
        className: nD.lt,
        children: [
            (0, r.jsx)(C.E, { variant: "text-sm/semibold", color: "text-strong", children: t.display_name }),
            (0, r.jsxs)(C.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["Config ID: ", t.config_id],
            }),
            (0, r.jsxs)(C.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: ["App ID: ", t.application_id],
            }),
            (0, r.jsxs)(C.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", t.status] }),
            null != t.updated_at &&
                (0, r.jsxs)(C.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Updated: ", t.updated_at],
                }),
            null != t.published_at &&
                (0, r.jsxs)(C.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    children: ["Published: ", t.published_at],
                }),
            (0, r.jsx)(aO.c, {}),
            (0, r.jsxs)(C.E, {
                variant: "text-xs/semibold",
                color: "text-strong",
                children: ["Surfaces (", a.length, ")"],
            }),
            0 === a.length
                ? (0, r.jsx)(C.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: "No surfaces configured",
                  })
                : a.map((e) => {
                      let [t, a] = e;
                      return (0, r.jsxs)(
                          S.B,
                          {
                              gap: 4,
                              padding: 4,
                              className: nD.YL,
                              children: [
                                  (0, r.jsx)(C.E, { variant: "text-xs/semibold", color: "text-default", children: t }),
                                  (0, r.jsxs)(C.E, {
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
function nR(e) {
    let { config: t, isSelected: a, onSelect: n } = e;
    return (0, r.jsxs)(S.B, {
        direction: "horizontal",
        align: "center",
        gap: 8,
        padding: 8,
        className: a ? nD.FM : nD.gt,
        children: [
            (0, r.jsx)(_.D, {
                className: nD.Av,
                onClick: n,
                children: (0, r.jsxs)(S.B, {
                    gap: 4,
                    children: [
                        (0, r.jsx)(C.E, { variant: "text-sm/medium", color: "text-strong", children: t.display_name }),
                        (0, r.jsxs)(C.E, {
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
                onClick: () => (0, nI.un)(t.application_id, { force: !0 }),
            }),
        ],
    });
}
function nw() {
    let e = (0, k.bG)([nT.A], () => nT.A.getFeaturedFetchState());
    return (0, r.jsxs)(S.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(S.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(C.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Featured Configs",
                    }),
                    (0, r.jsxs)(C.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(h.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, nI.Wq)({ force: !0 }),
            }),
        ],
    });
}
function nM() {
    let e = (0, k.bG)([nT.A], () => nT.A.getDeveloperFetchState());
    return (0, r.jsxs)(S.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(S.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                children: [
                    (0, r.jsx)(C.E, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: "Developer Configs",
                    }),
                    (0, r.jsxs)(C.E, { variant: "text-xs/normal", color: "text-muted", children: ["(", e, ")"] }),
                ],
            }),
            (0, r.jsx)(h.$, {
                variant: "primary",
                size: "sm",
                text: "Force Refetch",
                onClick: () => (0, nI.i$)({ force: !0 }),
            }),
        ],
    });
}
function nL() {
    let [e, t] = o.useState(""),
        a = (0, k.bG)([nT.A], () => (e.length > 0 ? nT.A.getFetchState(e) : null)),
        n = (0, k.bG)([nT.A], () => (e.length > 0 ? nT.A.getConfigs(e) : null));
    return (0, r.jsxs)(S.B, {
        gap: 8,
        children: [
            (0, r.jsx)(C.E, { variant: "text-md/semibold", color: "text-strong", children: "Fetch by Application ID" }),
            (0, r.jsx)(p.k, { placeholder: "Application ID", value: e, onChange: (e) => t(e) }),
            (0, r.jsx)(h.$, {
                variant: "primary",
                size: "sm",
                text: "Fetch",
                disabled: 0 === e.length,
                onClick: () => (0, nI.un)(e, { force: !0 }),
            }),
            null != a &&
                (0, r.jsxs)(C.E, { variant: "text-xs/normal", color: "text-muted", children: ["Status: ", a] }),
            null != n &&
                n.length > 0 &&
                (0, r.jsx)(S.B, { gap: 4, children: n.map((e) => (0, r.jsx)(nO, { config: e }, e.config_id)) }),
        ],
    });
}
function nP(e) {
    let { configs: t, selectedConfigId: a, onSelectConfig: n } = e,
        l = (0, k.bG)([nT.A], () => nT.A.getFeaturedFetchState());
    return (0, r.jsxs)(S.B, {
        gap: 8,
        children: [
            (0, r.jsxs)(C.E, {
                variant: "text-md/semibold",
                color: "text-strong",
                children: ["All Loaded Configs (", t.length, ")"],
            }),
            l === nT.e.FETCHING &&
                (0, r.jsx)(C.E, { variant: "text-sm/normal", color: "text-muted", children: "Loading..." }),
            t.map((e) =>
                (0, r.jsx)(
                    nR,
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
function nU(e) {
    let { config: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(aO.c, {}),
            (0, r.jsxs)(S.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(C.E, { variant: "text-md/semibold", color: "text-strong", children: "Config Details" }),
                    (0, r.jsx)(nO, { config: t }),
                ],
            }),
        ],
    });
}
function nG() {
    let [e, t] = o.useState(null),
        a = Object.values((0, k.bG)([nT.A], () => nT.A.getAllConfigsByApplication())).flat(),
        n = null != e ? a.find((t) => t.config_id === e) : null;
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsxs)(S.B, {
            gap: 16,
            padding: 8,
            className: nD.zr,
            children: [
                (0, r.jsx)(A.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    children: "Application Widget Configs",
                }),
                (0, r.jsx)(nw, {}),
                (0, r.jsx)(aO.c, {}),
                (0, r.jsx)(nM, {}),
                (0, r.jsx)(aO.c, {}),
                (0, r.jsx)(nL, {}),
                (0, r.jsx)(aO.c, {}),
                (0, r.jsx)(nP, { configs: a, selectedConfigId: e, onSelectConfig: t }),
                null != n && (0, r.jsx)(nU, { config: n }),
            ],
        }),
    });
}
var nB = a(636537),
    nF = a(153488),
    nV = a(927813);
let n$ = 12 * nV.A.Millis.HOUR,
    nW = new Map(),
    nz = !1,
    nH = Object.freeze({ channelAffinities: [], lastFetched: 0 }),
    nK = { ...nH };
function nY() {
    nW = new Map(nK.channelAffinities.map((e) => [e.channelId, e]));
}
class nq extends k.Ay.PersistedStore {
    static displayName = "ChannelAffinitiesV2Store";
    static persistKey = "ChannelAffinitiesStoreV2";
    initialize(e) {
        null != e && ((nK.channelAffinities = e.channelAffinities), (nK.lastFetched = e.lastFetched), nY());
    }
    shouldFetch() {
        if (!nz) return Date.now() - nK.lastFetched > n$;
    }
    isFetching() {
        return nz;
    }
    getChannelAffinities() {
        return nK.channelAffinities;
    }
    getChannelAffinitiesMap() {
        return nW;
    }
    getChannelAffinity(e) {
        return nW.get(e);
    }
    compare(e, t) {
        return (nW.get(t)?.score ?? 0) - (nW.get(e)?.score ?? 0);
    }
    getState() {
        return nK;
    }
}
let nJ = new nq(ty.h, {
    LOAD_CHANNEL_AFFINITIES_V2: function () {
        nz = !0;
    },
    LOAD_CHANNEL_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineChannels: t } = e;
        (nK.lastFetched = Date.now()), (nz = !1), (nK.channelAffinities = t), nY();
    },
    LOAD_CHANNEL_AFFINITIES_V2_FAILURE: function () {
        nz = !1;
    },
    LOGOUT: function () {
        (nK = { ...nH }), (nW = new Map()), (nz = !1);
    },
});
var nQ = a(907360);
let nX = [
    {
        key: "channel",
        cellClassName: nQ._w,
        render(e) {
            let { channelName: t } = e;
            return t;
        },
    },
    {
        key: "score",
        renderHeader: () => (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "SCORE" }),
        cellClassName: nQ.t6,
        render(e) {
            let { score: t } = e;
            return t.toFixed(5);
        },
    },
];
function nZ() {
    o.useEffect(() => {
        !(function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            nJ.shouldFetch() && nF.A.hasConsented($.YAq.PERSONALIZATION)
                ? (ty.h.dispatch({ type: "LOAD_CHANNEL_AFFINITIES_V2" }),
                  nB.Bo.get({
                      url: $.Rsh.CHANNEL_AFFINITIES_V2,
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
    let e = (0, k.yK)([nJ, t6.A], () =>
        nJ
            .getChannelAffinities()
            .map((e) => {
                let { channelId: t, score: a } = e;
                return { key: t, channelName: t6.A.getChannel(t)?.name ?? t, score: a };
            })
            .sort((e, t) => t.score - e.score),
    );
    return 0 === e.length ? null : (0, r.jsx)(tN, { className: tS.nd, columns: nX, rowClassName: nQ.nM, data: e });
}
function n0() {
    return (0, r.jsxs)(C.E, {
        variant: "text-lg/normal",
        children: [
            "Under Construction",
            " ",
            (0, r.jsx)("span", { role: "img", "aria-label": "Construction", children: "\uD83D\uDEA7" }),
        ],
    });
}
var n1 = a(554146),
    n2 = a(105565),
    n8 = a(558845),
    n3 = a(193337);
let n6 = (e) => {
        switch (e) {
            case n2.r.DC_DISMISSED:
                return "DISMISS:";
            case n2.r.DC_SHOWN:
                return "SHOW:";
            case n2.r.DC_SHOW_REQUEST:
                return "REQUEST TO SHOW:";
            default:
                return "UNKNOWN TYPE:";
        }
    },
    n5 = [
        {
            key: "events",
            render(e) {
                let { event: t, dismissibleContent: a } = e;
                return `${t} ${n1.M[a]}`;
            },
        },
    ],
    n4 = [
        {
            key: "candidates",
            render(e) {
                let { dismissibleContent: t } = e;
                return `${n1.M[t]}`;
            },
        },
    ];
function n9() {
    let e = (0, k.bG)([n2.A], () => n2.A.getDCFEvents()),
        t = (0, n8.Ay)((e) => e.candidates),
        a = (0, n8.Ay)((e) => e.lastWinnerTime),
        n = 0 !== a ? a6()(a).fromNow() : "n/a",
        l = (0, n8.Ay)((e) => (0 === e.lastWinnerTime ? null : e.recentlyShown[0])),
        s = e.map((e) => {
            let { eventType: t, dismissibleContent: a } = e;
            return { key: n6(t) + a.toString(), event: n6(t), dismissibleContent: a };
        }),
        i = Array.from(t.keys()).map((e) => ({ key: e.toString(), dismissibleContent: e }));
    return (0, r.jsxs)("div", {
        className: n3.KE,
        children: [
            (0, r.jsxs)("div", { className: n3.pq, children: ["Last winner time: ", n] }),
            (0, r.jsx)("br", {}),
            (0, r.jsxs)("div", { className: n3.pq, children: ["Last winner: ", null != l ? n1.M[l] : "None"] }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)("div", {
                className: n3.uI,
                children: (0, r.jsx)(tN, { className: n3.Th, columns: n4, data: i }),
            }),
            (0, r.jsx)("br", {}),
            (0, r.jsx)(tN, { columns: n5, data: s }),
        ],
    });
}
var n7 = a(689175),
    le = a(541689),
    lt = a(199773);
function la() {
    let e = (0, o.useCallback)((e) => {
        let t = new Set(ln());
        t.delete(e);
        let a = Array.from(t).slice(0, 4);
        a.unshift(e), tb.w.set("RecentDismissibleOverrides", a);
    }, []);
    return [ln(), e];
}
function ln() {
    return tb.w.get("RecentDismissibleOverrides") ?? [];
}
a(667532);
var ll = a(662546),
    ls = a(643278),
    li = a(617617),
    lr = a(256787),
    lo = a(20439);
let ld = o.memo(function (e) {
    let { className: t, content: a, onChange: n } = e,
        l = n1.M[a],
        { isDismissed: s, handleToggleDismissState: i } = (0, lo.A)(l),
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
            (0, r.jsxs)(S.B, {
                className: t,
                direction: "horizontal",
                align: "center",
                children: [
                    (0, r.jsx)(e_.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: d ? ll.O : ls.s,
                        onClick: m,
                        "aria-label": d ? "Copied" : "Copy",
                    }),
                    (0, r.jsx)(tf.d, {
                        label: `${a.toLowerCase()} (${n1.M[a]})`,
                        description: (0, lr.Zm)(l)
                            ? (function (e) {
                                  let t = li.A.settings.userContent?.recurringDismissibleContentStates?.[e];
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
            (0, r.jsx)(aO.c, {}),
        ],
    });
});
function lc(e) {
    let { items: t, onChange: a } = e,
        [n, l] = la(),
        s = (0, o.useCallback)(
            (e) => {
                l(e), a?.(e);
            },
            [l, a],
        );
    return (0, r.jsx)(S.B, {
        gap: 16,
        children: t.filter((e) => isNaN(Number(e))).map((e) => (0, r.jsx)(ld, { content: e, onChange: s }, e)),
    });
}
function lu(e) {
    let { searchQuery: t = "" } = e,
        a = (0, n8.Ay)((e) => e.recentlyShown),
        [n, l] = la(),
        s = n
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .filter((e) => !a.includes(n1.M[e]))
            .slice(0, 3);
    return 0 === s.length
        ? null
        : (0, r.jsx)(u.n, { label: "Recent Overrides", children: (0, r.jsx)(lc, { items: s }) });
}
function lm(e) {
    let { searchQuery: t = "" } = e,
        a = (0, n8.Ay)((e) => e.recentlyShown)
            .map((e) => n1.M[e])
            .filter((e) => e.toLowerCase().includes(t.toLowerCase()))
            .slice(0, 3);
    return 0 === a.length ? null : (0, r.jsx)(u.n, { label: "Recently Shown", children: (0, r.jsx)(lc, { items: a }) });
}
var lh = a(594061),
    lx = a(268571);
function lp() {
    let {
            dailyCapReached: e,
            dailyCapOverridden: t,
            newUserMinAgeRequiredOverridden: a,
        } = (0, k.cf)([lt.A], () => ({
            dailyCapReached: lt.A.hasUserHitDCCap(),
            dailyCapOverridden: lt.A.dailyCapOverridden,
            newUserMinAgeRequiredOverridden: lt.A.newUserMinAgeRequiredOverridden,
        })),
        [n, l] = o.useState(""),
        [s, i] = o.useState(20),
        d = o.useMemo(
            () =>
                Object.keys(n1.M)
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
    return (0, r.jsx)(n7.Ch, {
        onScroll: c,
        children: (0, r.jsxs)("div", {
            className: lx.KE,
            children: [
                (0, r.jsxs)(u.n, {
                    label: "Dismissible Content Overrides",
                    children: [
                        (0, r.jsxs)(S.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset Daily Cap",
                                    onClick: () => (0, le.Ab)(),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Undismiss All DCs",
                                    onClick: () => (0, lh.nT)(),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Dismiss All DCs",
                                    onClick: () => (0, lh.D1)(),
                                }),
                                (0, r.jsx)(C.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: `Daily Cap Reached: ${e ? "Yes" : "No"}`,
                                }),
                            ],
                        }),
                        (0, r.jsx)(tf.d, {
                            label: "Override Dismissible Content Daily Cap",
                            checked: t,
                            onChange: le.SE,
                        }),
                        (0, r.jsx)(tf.d, {
                            label: "Override Minimum User Account Age Requirement",
                            checked: a,
                            onChange: le.U$,
                        }),
                    ],
                }),
                (0, r.jsx)(lm, {}),
                (0, r.jsx)(lu, {}),
                (0, r.jsxs)(u.n, {
                    label: "All Dismissible Contents",
                    children: [
                        (0, r.jsx)(nt.I, { query: n, onChange: l, onClear: () => l("") }),
                        (0, r.jsx)(lc, { items: d.slice(0, s) }),
                    ],
                }),
            ],
        }),
    });
}
var lg = a(276086),
    lv = a(154323),
    lj = a(155248);
function lb() {
    let e = (0, k.bG)([lv.A], () => lv.A.allWithDescriptions(), [], k.My),
        t = o.useMemo(
            () =>
                e.map((e) => {
                    let [t, a, n] = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(
                                tf.d,
                                { label: n, description: t, checked: a, onChange: (e) => (0, lg.L)(t, e) },
                                t,
                            ),
                            (0, r.jsx)(aO.c, { gap: 16 }),
                        ],
                    });
                }),
            [e],
        );
    return (0, r.jsxs)("div", {
        className: lj.kL,
        children: [
            (0, r.jsx)("div", {
                "data-button-hoisted-classname-wrapper": !0,
                className: lj.x6,
                children: (0, r.jsx)(h.$, { variant: "primary", text: "Clear all", onClick: lg.$, fullWidth: !0 }),
            }),
            (0, r.jsx)("div", { className: lj.vu, children: t }),
        ],
    });
}
var lf = a(691540),
    ly = a(97483),
    l_ = a(123292),
    lC = a(780907),
    lE = a(56562);
let lS = [
    { label: "Wuthering Waves", value: "1247227126416146462" },
    { label: "VALORANT", value: "700136079562375258" },
    { label: "League of Legends", value: "1402418696126992445" },
];
function lN(e) {
    let { runningGame: t, isDebugGame: a } = e,
        { data: n } = (0, tX.I)(t.id);
    return (0, r.jsxs)(S.B, {
        direction: "horizontal",
        gap: 8,
        children: [
            null != n && (0, r.jsx)(tJ.A, { game: n }),
            (0, r.jsxs)(S.B, {
                justify: "center",
                gap: 0,
                children: [
                    (0, r.jsx)(C.E, { variant: "text-md/normal", children: n?.name }),
                    a && (0, r.jsx)(C.E, { variant: "text-xxs/normal", children: "Debug" }),
                ],
            }),
        ],
    });
}
function lA() {
    let e = (0, k.bG)([aU.Ay], () => aU.Ay.getRunningGames()),
        t = (0, k.bG)([aU.Ay], () => aU.Ay.getDebugRunningGame()),
        [a, n] = (0, o.useState)(t?.id ?? ""),
        l = (0, o.useMemo)(
            () =>
                lS.map((e) => {
                    let { label: t, value: a } = e;
                    return { label: t, value: a, id: a };
                }),
            [],
        ),
        s = (e) => {
            if (null == e || "" === e) return void (0, lC.xt)(null);
            let t = tI.A.getDetectableGame(e),
                a = t?.executables[0],
                n = t?.thirdPartySkus[0]?.distributor;
            if (null == t || null == a)
                return (0, lf.P0)({
                    id: "devtools-set-debug-game-error",
                    type: ly.Ck.FAILURE,
                    message: "Invalid Game ID",
                });
            (0, lC.xt)({
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
                fullscreenType: lE.aI.UNKNOWN,
                cmdLine: "",
                nativeProcessObserverId: -1,
            });
        };
    return (0, r.jsxs)(S.B, {
        gap: 32,
        padding: 12,
        fullWidth: !1,
        children: [
            (0, r.jsxs)(S.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(A.D, { variant: "heading-md/bold", children: "Running Games" }),
                    e.length > 0 &&
                        (0, r.jsx)("div", {
                            children: e.map((e) =>
                                (0, r.jsx)(lN, { runningGame: e, isDebugGame: t?.id === e.id }, e.id),
                            ),
                        }),
                ],
            }),
            (0, r.jsx)(aO.c, {}),
            (0, r.jsxs)(S.B, {
                gap: 8,
                children: [
                    (0, r.jsx)(A.D, { variant: "heading-md/bold", children: "Set Debug Running Game" }),
                    (0, r.jsx)(p.k, { label: "Custom Game ID", value: a, onChange: n }),
                    (0, r.jsx)(tq.Z, {
                        label: "Pick a Preset Game",
                        options: l,
                        value: t?.id ?? "",
                        onSelectionChange: (e) => {
                            s(e);
                        },
                        selectionMode: "single",
                        clearable: !0,
                    }),
                    (0, r.jsxs)(S.B, {
                        direction: "horizontal",
                        gap: 16,
                        justify: "end",
                        align: "end",
                        children: [
                            null != t &&
                                (0, r.jsx)(l_.Q, { variant: "secondary", text: "Clear", onClick: () => s(null) }),
                            (0, r.jsx)(h.$, { variant: "primary", text: "Detect Game", onClick: () => s(a) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
var lk = a(240248),
    lI = a(769195);
function lT() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(async () => {
            try {
                t(!0), n(null), s(null);
                let e = await nB.Bo.put({
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
    return (0, r.jsxs)(S.B, {
        direction: "vertical",
        gap: 4,
        children: [
            (0, r.jsx)(h.$, { variant: "primary", onClick: i, text: "Reset Onboarding", disabled: e, fullWidth: !0 }),
            !(0, lk.uJ)(a) && (0, r.jsx)(C.E, { variant: "text-md/normal", color: "status-positive", children: a }),
            !(0, lk.uJ)(l) && (0, r.jsx)(C.E, { variant: "text-md/normal", color: "status-danger", children: l }),
        ],
    });
}
function lD() {
    return (0, r.jsx)("div", {
        className: lI.n,
        children: (0, r.jsx)(S.B, { direction: "vertical", gap: 16, children: (0, r.jsx)(lT, {}) }),
    });
}
a(172879);
var lO = a(985623),
    lR = a.n(lO),
    lw = a(990078),
    lM = a(874804),
    lL = a(782134),
    lP = a(113494),
    lU = a(603349),
    lG = a(155466);
function lB(e) {
    return parseFloat(e.toFixed(3));
}
let lF = [
    {
        key: "store",
        cellClassName: lG.lA,
        render(e) {
            let { trace: t } = e;
            return t.name;
        },
    },
    {
        key: "time",
        cellClassName: lG.i7,
        render(e) {
            let { trace: t } = e;
            return `${lB(t.time)} ms`;
        },
    },
];
function lV(e) {
    let { actionLog: t } = e,
        a = o.useMemo(() => t.traces.map((e) => ({ key: e.name, trace: e })), [t]);
    return (0, r.jsx)(d.Ip, { children: (0, r.jsx)(tN, { columns: lF, data: a }) });
}
let l$ = [
    {
        id: "action",
        name: "Action",
        group: aD.fu.NONE,
        render(e) {
            let { actionLog: t } = e,
                a = a6()(t.createdAt);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)(nv, {
                        className: lG.mP,
                        children: [
                            (0, r.jsx)(nj, {
                                name: "Created at",
                                children: (0, r.jsx)("time", {
                                    dateTime: t.createdAt?.toISOString(),
                                    title: (0, ni.i$)(a, "LLLL"),
                                    children: (0, ni.mk)(a),
                                }),
                            }),
                            (0, r.jsxs)(nj, { name: "Total Time", children: [lB(t.totalTime), " ms"] }),
                        ],
                    }),
                    (0, r.jsx)(d.Ip, { className: lG.Dx, children: (0, r.jsx)(aN, { data: t.action }) }),
                ],
            });
        },
    },
    {
        id: "traces",
        name: "Store Handlers",
        group: aD.fu.NONE,
        render(e) {
            let { actionLog: t } = e;
            return (0, r.jsx)(lV, { actionLog: t });
        },
    },
];
function lW(e) {
    let { actionLog: t, initialHeight: a } = e,
        n = o.useMemo(
            () =>
                t.error
                    ? [
                          ...l$,
                          {
                              id: "error",
                              name: (0, r.jsxs)(r.Fragment, {
                                  children: [(0, r.jsx)(lU.A, { className: lG.ik }), "Error"],
                              }),
                              group: aD.fu.NONE,
                              render(e) {
                                  let { actionLog: t } = e;
                                  return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              className: y()(lG.u4, tS.KE),
                                              children: (0, r.jsx)("div", {
                                                  className: tS.R5,
                                                  children: (0, r.jsx)(a5.$n, {
                                                      className: tS.Q$,
                                                      size: a5.$n.Sizes.MIN,
                                                      onClick: () => console.error(t.error),
                                                      children: "Log to Console",
                                                  }),
                                              }),
                                          }),
                                          (0, r.jsx)(d.Ip, {
                                              className: lG.Dx,
                                              children: (0, r.jsx)(aN, { data: t.error }),
                                          }),
                                      ],
                                  });
                              },
                          },
                      ]
                    : l$,
            [t],
        ),
        { TabBar: l, renderSelectedTab: s } = (0, aD.Ay)({ tabs: n }, [n]);
    return (0, r.jsxs)(aT, {
        className: lG.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(aj.Ay, {
                className: y()(tS.jr, lG.nZ),
                children: [
                    (0, r.jsx)(aj.Ay.Icon, { icon: lM.K, tooltip: t.name }),
                    (0, r.jsx)(aj.Ay.Title, {
                        wrapperClassName: y()(tS.qd, tS.ZE),
                        className: tS.Pz,
                        children: t.name,
                    }),
                    (0, r.jsx)(aj.Ay.Icon, {
                        icon: a4.T,
                        tooltip: "Copy event data",
                        onClick: () => {
                            var e;
                            let a = JSON.stringify(
                                Object.keys((e = t.action)).reduce((t, a) => {
                                    var n;
                                    return (t[a] = ((n = e[a]), $.AKn.test(n) ? "REDACTED" : n)), t;
                                }, {}),
                                null,
                                2,
                            );
                            (0, ns.C)(a, () =>
                                (0, lf.P0)({
                                    id: "copy-action-log-name",
                                    type: ly.Ck.SUCCESS,
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
let lz = [
        {
            key: "action",
            cellClassName: lG.lA,
            render(e) {
                let { actionLog: t } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [t.error && (0, r.jsx)(lU.A, { className: lG.ik }), t.name],
                });
            },
        },
        {
            key: "total time",
            cellClassName: lG.i7,
            render(e) {
                let { actionLog: t } = e;
                return `${lB(t.totalTime)} ms`;
            },
        },
        {
            key: "timestamp",
            cellClassName: lG.i7,
            render(e) {
                let { actionLog: t } = e;
                return a6()(t.createdAt).format("HH:mm:ss.SSS");
            },
        },
    ],
    lH = {
        searchType: nn.n.REGEX,
        searchStringGenerator: (e) => {
            let { actionLog: t } = e;
            return t.name;
        },
        throttleMs: 100,
    };
function lK() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = (function (e) {
            let [t, a] = o.useState(e.logs);
            return (
                o.useEffect(() => {
                    let t = lR()(() => {
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
        [h, x] = o.useState(),
        p = o.useCallback((e) => {
            c(e);
        }, []);
    (0, nl.RT)(t, u ? s : l, p, lH);
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
        className: y()(tS.nd, lG.nd),
        children: [
            (0, r.jsxs)("div", {
                className: lG.KE,
                children: [
                    (0, r.jsx)(lw.m, {
                        text: b,
                        children: (0, r.jsx)(e_.K, {
                            size: "sm",
                            variant: u ? "primary" : "active",
                            icon: u ? lL.u : lP.E,
                            "aria-label": b,
                            onClick: () => g(!u),
                        }),
                    }),
                    (0, r.jsx)(nt.I, {
                        size: "sm",
                        query: t,
                        onChange: a,
                        onClear: () => a(""),
                        placeholder: "Search by action name",
                    }),
                ],
            }),
            (0, r.jsx)(tN, {
                columns: lz,
                data: j,
                selectedRowKey: h?.id.toString(),
                onClickRow: (e) => x(e.actionLog),
            }),
            null != h &&
                (0, r.jsx)(lW, { actionLog: h, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }),
        ],
    });
}
var lY = a(936388),
    lq = a(132369);
function lJ() {
    let e = o.useRef(null);
    return (0, r.jsx)("div", {
        ref: e,
        className: y()(tS.nd, lq.n),
        children: (0, r.jsx)(h.$, {
            variant: "primary",
            size: "sm",
            text: "Reset Uploaded Key Versions Cache",
            onClick: lY.A.clearUploadedKeyVersions,
        }),
    });
}
var lQ = a(825484),
    lX = a(37962),
    lZ = a(881520),
    l0 = a(670455),
    l1 = a(861160);
let l2 = [
    { id: "seconds", label: "second(s)", value: 1e3 },
    { id: "minutes", label: "minute(s)", value: 6e4 },
    { id: "hours", label: "hour(s)", value: 36e5 },
    { id: "days", label: "day(s)", value: 864e5 },
];
function l8() {
    let [e, t] = o.useState(null),
        [a, n] = o.useState(0),
        [l, s] = o.useState(1e3),
        [i, d] = o.useState(0),
        c = (0, k.bG)([lZ.A], () => (null === e ? null : (lZ.A.getFeedbackConfig(l0.MW[e]) ?? lX.u[l0.MW[e]]))),
        m = Object.entries(l0.MW),
        g = m.slice(m.length / 2).map((e) => {
            let [t] = e;
            return { id: t, label: t, value: t };
        }),
        v = o.useMemo(() => null != e && i >= 0 && i <= 100 && a >= 0, [e, i, a]);
    return (0, r.jsx)("div", {
        className: l1.kL,
        children: (0, r.jsxs)(S.B, {
            gap: 32,
            children: [
                (0, r.jsx)(x.l, {
                    label: "Feedback Survey",
                    options: g,
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
                                    (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "Current cooldown" }),
                                    (0, r.jsx)(C.E, {
                                        variant: "text-sm/normal",
                                        children: `${c.cooldown / 1e3} second(s) or`,
                                    }),
                                    (0, r.jsx)(C.E, {
                                        variant: "text-sm/normal",
                                        children: `${c.cooldown / 6e4} minute(s) or`,
                                    }),
                                    (0, r.jsx)(C.E, {
                                        variant: "text-sm/normal",
                                        children: `${c.cooldown / 36e5} hour(s) or`,
                                    }),
                                    (0, r.jsx)(C.E, {
                                        variant: "text-sm/normal",
                                        children: `${c.cooldown / 864e5} day(s)`,
                                    }),
                                ],
                            }),
                        (0, r.jsxs)(S.B, {
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
                                    options: l2,
                                    value: l,
                                    onSelectionChange: s,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(aO.c, {}),
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
                (0, r.jsxs)(lQ.e, {
                    children: [
                        (0, r.jsx)(h.$, {
                            variant: "critical-primary",
                            text: "Clear Override",
                            onClick: () =>
                                void (
                                    null != c &&
                                    ty.h.dispatch({ type: "FEEDBACK_OVERRIDE_CLEAR", feedbackType: c.feedbackType })
                                ),
                            disabled: !v,
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Update",
                            onClick: () =>
                                void (
                                    null != c &&
                                    ty.h.dispatch({
                                        type: "FEEDBACK_OVERRIDE_SET",
                                        feedbackType: c.feedbackType,
                                        cooldown: a * l,
                                        chance: i / 100,
                                    })
                                ),
                            disabled: !v,
                        }),
                    ],
                }),
                null == e &&
                    (0, r.jsx)(C.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: need to select a survey",
                    }),
                !(a >= 0) &&
                    (0, r.jsx)(C.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: cooldown needs to be a number greater than 0",
                    }),
                !(i >= 0 && i <= 100) &&
                    (0, r.jsx)(C.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        children: "Error: chance needs to be a number between 0 and 100",
                    }),
                (0, r.jsx)(C.E, {
                    variant: "text-sm/normal",
                    children: "Clear override resets a feedback survey to its default values",
                }),
            ],
        }),
    });
}
var l3 = a(334279),
    l6 = a(663417),
    l5 = a(147925),
    l4 = a(557009),
    l9 = a(788868);
let l7 = async () =>
        (
            await nB.Bo.get({
                url: $.Rsh.ENTITLEMENTS_FOR_APPLICATION(l9.tv),
                oldFormErrors: !0,
                query: { exclude_consumed: !0, exclude_ended: !0 },
                rejectWithError: !0,
            })
        ).body.map((e) => l4.A.createFromServer(e)),
    se = async (e) => {
        await nB.Bo.post({
            url: "/debug/entitlements/fractional-premium",
            body: { count: 1, sku_id: e },
            rejectWithError: !1,
        });
    },
    st = async (e) => {
        let t = "/debug/entitlements/fractional-premium";
        null != e && (t = `${t}/${e}`), await nB.Bo.del({ url: t, rejectWithError: !0 });
    },
    sa = async () => {
        await nB.Bo.post({ url: "/debug/entitlements/fulfillment", rejectWithError: !1 });
    },
    sn = () => {
        let [e, t] = o.useState([]),
            [a, n] = o.useState(!1),
            l = (0, o.useCallback)(async () => {
                try {
                    n(!0);
                    let e = await l7();
                    t(e);
                } finally {
                    n(!1);
                }
            }, []),
            s = (0, o.useCallback)(
                async (e) => {
                    await se(e), await l();
                },
                [l],
            );
        return {
            grantFractionalPremium: s,
            deleteFractionalPremium: (0, o.useCallback)(
                async (e) => {
                    await st(e), await l();
                },
                [l],
            ),
            triggerNextEntitlementFulfillment: (0, o.useCallback)(async () => {
                await sa(), await l();
            }, [l]),
            refreshEntitlementList: l,
            entitlements: e,
            loading: a,
        };
    };
var sl = a(51846),
    ss = a(214868);
let si = {
        [$.GD.QUEST_REWARD]: "Quest Reward",
        [$.GD.DEVELOPER_GIFT]: "Developer Gift",
        [$.GD.INVOICE]: "Invoice",
        [$.GD.REVERSE_TRIAL]: "Reverse Trial",
        [$.GD.FRACTIONAL_PREMIUM_GIVEBACK]: "Giveback",
        [$.GD.SUBSCRIPTION]: "Subscription",
        [$.GD.SUBSCRIPTION_MEMBER]: "Subscription Member",
    },
    sr = (e) => {
        let t,
            { entitlement: a, active: n, onDelete: l } = e,
            s = (e) => (null != e ? (0, ni.i$)(e, "LLL") : "---");
        return (0, r.jsxs)("div", {
            className: y()(sl.Nr, n ? ss.C1 : ""),
            children: [
                (0, r.jsxs)(C.E, { variant: "text-md/normal", children: ["ID: ", a.id, " "] }),
                !n &&
                    (0, r.jsxs)(C.E, {
                        variant: "text-md/normal",
                        children: ["SKU: ", so.find((e) => e.value === a.skuId)?.label],
                    }),
                null != a.startsAt &&
                    null != a.endsAt &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsxs)(C.E, { variant: "text-md/normal", children: ["Start: ", s(a.startsAt), " "] }),
                            (0, r.jsxs)(C.E, { variant: "text-md/normal", children: ["End: ", s(a.endsAt), " "] }),
                        ],
                    }),
                (0, r.jsxs)(C.E, {
                    variant: "text-md/normal",
                    children: [
                        "Entitlement source type: ",
                        null != (t = a.sourceType) && t in si ? si[t] : `Unknown source type ${t}`,
                    ],
                }),
                n &&
                    null != l &&
                    (0, r.jsx)(a5.$n, {
                        className: sl.RW,
                        size: a5.$n.Sizes.TINY,
                        color: a5.$n.Colors.RED,
                        look: a5.$n.Looks.OUTLINED,
                        onClick: l,
                        children: "Delete",
                    }),
            ],
        });
    },
    so = [
        { id: "1h", label: "1 hour", value: l3.j.PREMIUM_TIER_2_1_HOUR },
        { id: "1d", label: "1 day", value: l3.j.PREMIUM_TIER_2_1_DAY },
        { id: "3d", label: "3 days", value: l3.j.PREMIUM_TIER_2_3_DAY },
    ];
function sd() {
    let [e, t] = o.useState(!1),
        [a, n] = o.useState(l3.j.PREMIUM_TIER_2_1_HOUR),
        [l, s] = o.useState([]),
        [i, c] = o.useState([]),
        {
            refreshEntitlementList: u,
            grantFractionalPremium: m,
            deleteFractionalPremium: p,
            triggerNextEntitlementFulfillment: g,
            entitlements: v,
            loading: j,
        } = sn();
    return (
        o.useEffect(() => {
            u();
        }, [u]),
        o.useEffect(() => {
            s(v.filter((e) => null != e.endsAt && e.endsAt > new Date() && e.type === $.zF_.FRACTIONAL_REDEMPTION)),
                c(v.filter((e) => Object.values(l3.j).includes(e.skuId) && null == e.startsAt));
        }, [v]),
        (0, r.jsx)(d.Ip, {
            className: tS.nd,
            children: (0, r.jsxs)("div", {
                className: ss.l$,
                children: [
                    (0, r.jsxs)("div", {
                        className: ss.dL,
                        children: [
                            (0, r.jsx)(C.E, {
                                style: { marginBottom: "8px" },
                                variant: "text-lg/bold",
                                children: "Manage Fractional Nitro",
                            }),
                            (0, r.jsxs)(_.D, {
                                onClick: () => t(!e),
                                className: sl.As,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Info" }),
                                    }),
                                    (0, r.jsx)(l5.A, { direction: e ? l5.A.Directions.UP : l5.A.Directions.DOWN }),
                                ],
                            }),
                        ],
                    }),
                    e &&
                        (0, r.jsxs)("div", {
                            style: { margin: "8px 0" },
                            children: [
                                (0, r.jsx)(C.E, {
                                    variant: "text-md/normal",
                                    style: { fontStyle: "italic" },
                                    color: "text-muted",
                                    children:
                                        "Subscriptions paused by Fractional Nitro do not automatically resume in local or staging environments. Subscription has to be resumed manually via Admin.",
                                }),
                                (0, r.jsx)("br", {}),
                                (0, r.jsx)(C.E, {
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
                        className: y()([sl.uW, ss.Uo]),
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Fractional Premium SKU",
                                value: a,
                                options: so,
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
                        className: sl.uW,
                        children: [
                            (0, r.jsxs)("div", {
                                style: { flexWrap: "wrap" },
                                className: ss.dL,
                                children: [
                                    (0, r.jsx)(C.E, {
                                        style: { marginBottom: "8px" },
                                        variant: "text-lg/semibold",
                                        children: "Entitlements",
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: sl.GC,
                                        children: [
                                            (0, r.jsx)(a5.$n, {
                                                disabled: j,
                                                size: a5.$n.Sizes.TINY,
                                                color: a5.$n.Colors.PRIMARY,
                                                look: a5.$n.Looks.OUTLINED,
                                                onClick: () => g(),
                                                children: "Run fulfillment",
                                            }),
                                            (0, r.jsx)(a5.$n, {
                                                disabled: j,
                                                size: a5.$n.Sizes.TINY,
                                                color: a5.$n.Colors.RED,
                                                look: a5.$n.Looks.OUTLINED,
                                                onClick: () => p(),
                                                children: "Delete all",
                                            }),
                                            (0, r.jsx)(a5.$n, {
                                                disabled: j,
                                                look: a5.$n.Looks.BLANK,
                                                size: a5.$n.Sizes.ICON,
                                                onClick: u,
                                                children: (0, r.jsx)("span", {
                                                    title: "Refresh",
                                                    children: (0, r.jsx)(l6.f, { size: "xs", color: "currentColor" }),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            l.length > 0 &&
                                (0, r.jsxs)("div", {
                                    children: [
                                        (0, r.jsx)(C.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Active premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: l.map((e) =>
                                                (0, r.jsx)(
                                                    sr,
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
                                        (0, r.jsx)(C.E, {
                                            style: { marginTop: "15px" },
                                            variant: "text-md/bold",
                                            children: "Unconsumed Fractional Premium",
                                        }),
                                        (0, r.jsx)("div", {
                                            children: i.map((e) => (0, r.jsx)(sr, { entitlement: e }, e.id)),
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
var sc = a(390544),
    su = a(396748),
    sm = a(522055),
    sh = a(661202);
function sx() {
    let e = (0, k.bG)([a$.A], () => a$.A.getGuildId()),
        t = (0, k.bG)([aV.A], () => aV.A.getGuild(e)?.name),
        a = (0, k.bG)([sm.A], () => sm.A.getStateForGuild(e)?.instances),
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
                Object.values(sc.M).map((e) =>
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
                ty.h.dispatch({
                    type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
                    guildId: e,
                    instance: { ...n, serverIP: void 0, port: void 0, gameServerPanelUrl: void 0 },
                });
        }, [n, e]);
    return null == e
        ? null
        : (0, r.jsxs)(d.Ip, {
              className: sh.kL,
              children: [
                  (0, r.jsx)("div", {
                      className: sh.uW,
                      children: (0, r.jsx)(A.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                  }),
                  (0, r.jsxs)("div", {
                      className: sh.uW,
                      children: [
                          (0, r.jsx)(C.E, {
                              variant: "eyebrow",
                              children: `Set server state for first server: ${n?.name}`,
                          }),
                          (0, r.jsx)("div", { className: sh.UD, children: s }),
                          (0, r.jsx)(C.E, { variant: "eyebrow", children: "Remove Server Info" }),
                          (0, r.jsx)("div", {
                              className: sh.UD,
                              children: (0, r.jsx)(h.$, {
                                  variant: "primary",
                                  text: "Remove IP Address & Game Server Panel URL",
                                  onClick: i,
                              }),
                          }),
                          (0, r.jsx)(C.E, { variant: "eyebrow", children: "Reset server" }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              text: "Reset",
                              onClick: () => {
                                  (0, su.cq)(e);
                              },
                          }),
                      ],
                  }),
              ],
          });
}
function sp(e, t) {
    let a = "boolean" == typeof t ? t : !av.Ay.get(e);
    ty.h.dispatch({ type: "DEV_TOOLS_DEV_SETTING_SET", toggle: e, value: a });
}
var sg = a(460281);
function sv(e) {
    let { devSettingsCategory: t } = e,
        a = (0, k.bG)([av.Ay], () => av.Ay.allByCategory(t), [t], k.My),
        n = o.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: n }] = e;
                    return (0, r.jsx)(tf.d, { label: n, description: t, checked: a, onChange: (e) => sp(t, e) }, t);
                }),
            [a],
        );
    return (0, r.jsx)("div", { className: y()(tS.nd, sg.n), children: n });
}
var sj = a(950305),
    sb = a(231483),
    sf = a(597770),
    sy = a(433492),
    s_ = a(695458),
    sC = a(796140),
    sE = a(268791),
    sS = a(836480),
    sN = a(855473),
    sA = a(626258),
    sk = a(420854),
    sI = a(373846),
    sT = a(657044),
    sD = a(141060),
    sO = a(608599),
    sR = a(685761),
    sw = a(157225),
    sM = a(362704),
    sL = a(625903),
    sP = a(628284),
    sU = a(320448),
    sG = a(562708),
    sB = a(830215),
    sF = a(381689),
    sV = a(889227),
    s$ = a(499785),
    sW = a(315069);
class sz extends sW.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids);
    }
    static fromServer(e) {
        return new sz(e);
    }
    setPassword(e) {
        return (this.password = e), this;
    }
}
let sH = { pools: null, users: null };
function sK(e) {
    null == sH.users && (sH.users = new Map()), sH.users.set(e.id, new sV.A(e));
}
class sY extends k.Ay.PersistedStore {
    static displayName = "GeneratedTestUsersStore";
    static persistKey = "GeneratedTestUsersStore";
    initialize(e) {
        null != e &&
            (null != e.pools && (sH.pools = new Map(Object.entries(e.pools))),
            null != e.users && (sH.users = new Map(Object.entries(e.users))));
    }
    getState() {
        return {
            pools: null != sH.pools ? Object.fromEntries(sH.pools) : null,
            users: null != sH.users ? Object.fromEntries(sH.users) : null,
        };
    }
    getUsersForPool(e) {
        return Array.from(sH.users?.values() ?? []).filter((t) => sH.pools?.get(e)?.userIds.includes(t.id));
    }
    getPool(e) {
        return sH.pools?.get(e) ?? null;
    }
    getUser(e) {
        return sH.users?.get(e) ?? null;
    }
    getPools() {
        return null === sH.pools ? null : Array.from(sH.pools.values());
    }
}
let sq = new sY(ty.h, {
    GENERATED_POOL_BY_ID_FETCH_SUCCESS: function (e) {
        let { pool: t, users: a } = e;
        null == sH.pools && (sH.pools = new Map()), sH.pools.set(t.id, t), a.forEach(sK);
    },
    GENERATED_POOL_REMOVE_FROM_LIST: function (e) {
        let { poolId: t } = e,
            a = sH.pools?.get(t);
        if (null == a) return !1;
        a.userIds.length > 0 &&
            a.userIds.forEach((e) => {
                sH.users?.delete(e);
            }),
            sH.pools?.delete(t);
    },
});
var sJ = a(835002);
async function sQ(e, t) {
    return await s$.A.get({
        url: $.Rsh.GENERATED_POOL_BY_ID(e),
        trackedActionData: { event: sG.NetworkActionNames.USER_LOGIN },
        rejectWithError: !1,
    })
        .then((e) => {
            let { ok: a, body: n } = e;
            if (!a) return void sF.A.showFailedToast(sJ.OB.GENERIC_ERROR);
            let { generated_pool: l, users: s } = n;
            ty.h.dispatch({
                type: "GENERATED_POOL_BY_ID_FETCH_SUCCESS",
                pool: sz.fromServer(l).setPassword(t),
                users: s.map((e) => new sV.A(e)),
            });
        })
        .catch(() => (sF.A.showFailedToast(sJ.OB.GENERIC_ERROR), null));
}
var sX = a(844330),
    sZ = a(277851);
let s0 = [
        sj.n,
        sb.l,
        sf.o,
        sy.K,
        s_.m,
        sC.c,
        sE.$,
        sS.Q,
        sN.Z,
        sA.A,
        sk.E,
        sI.C,
        sT._,
        sD.i,
        sO.L,
        sR.f,
        sw.N,
        sM.Y,
        sL.Z,
    ],
    s1 = [
        "text-default",
        "text-feedback-positive",
        "text-feedback-warning",
        "text-feedback-info",
        "text-feedback-critical",
    ],
    s2 = () => {
        let [e, t] = o.useState(""),
            [a, n] = o.useState(""),
            [l, s] = o.useState(!1);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("form", {
                    onSubmit: async (l) => {
                        l.preventDefault(), s(!0);
                        try {
                            await sQ(e, a), t(""), n("");
                        } finally {
                            s(!1);
                        }
                    },
                    children: (0, r.jsxs)(S.B, {
                        direction: "vertical",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, r.jsxs)(S.B, {
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
                            (0, r.jsxs)(S.B, {
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
                (0, r.jsx)(aO.c, { gap: 4 }),
            ],
        });
    },
    s8 = (e) => {
        let { pool: t } = e,
            { id: a, summary: n } = t,
            l = sq.getUsersForPool(a),
            s = (0, k.bG)([no.default], () => no.default.getId()),
            i = s0[Number(a) % s0.length],
            d = s1[Number(a) % s1.length],
            c = o.useCallback(() => {
                ty.h.dispatch({ type: "GENERATED_POOL_REMOVE_FROM_LIST", poolId: a });
            }, [a]);
        return (0, r.jsx)(S.B, {
            direction: "horizontal",
            align: "start",
            justify: "space-between",
            children: (0, r.jsx)(sX.A, {
                icon: (0, r.jsx)(C.E, {
                    variant: "text-md/medium",
                    color: d,
                    className: sZ.td,
                    children: (0, r.jsx)(i, { size: "custom", width: 24, height: 24, color: "currentColor" }),
                }),
                title: n,
                className: sZ.JC,
                subtitle: `${l.length} users`,
                children: (0, r.jsxs)(S.B, {
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
                                        0 !== a && (0, r.jsx)(aO.c, { gap: 4 }),
                                        (0, r.jsx)(
                                            _.D,
                                            {
                                                onClick: (a) => {
                                                    a.stopPropagation(),
                                                        (function (e, t) {
                                                            let a = sq.getUser(t);
                                                            if (null == a) throw Error("User not found");
                                                            let n = sq.getPool(e)?.password;
                                                            if (null == n) throw Error("Pool password not found");
                                                            if (null == a.email) throw Error("User email not found");
                                                            sB.A.login({
                                                                login: a.email,
                                                                password: n,
                                                                isMultiAccount: !0,
                                                                source: "generated_test_user",
                                                            }).catch(
                                                                () => (sF.A.showFailedToast(sJ.OB.GENERIC_ERROR), null),
                                                            );
                                                        })(t.id, e.id);
                                                },
                                                "aria-disabled": s === e.id,
                                                className: y()(sZ.vk, { [sZ.Pe]: s === e.id }),
                                                children: (0, r.jsxs)(
                                                    S.B,
                                                    {
                                                        direction: "horizontal",
                                                        align: "center",
                                                        justify: "space-between",
                                                        gap: 8,
                                                        padding: { right: 8 },
                                                        fullWidth: !1,
                                                        children: [
                                                            (0, r.jsxs)(S.B, {
                                                                direction: "horizontal",
                                                                align: "center",
                                                                gap: 8,
                                                                fullWidth: !1,
                                                                className: y()({ [sZ.WP]: s === e.id }),
                                                                children: [
                                                                    (0, r.jsx)(sj.n, {
                                                                        size: "custom",
                                                                        width: 20,
                                                                        height: 20,
                                                                        color: "currentColor",
                                                                    }),
                                                                    (0, r.jsxs)("div", {
                                                                        children: [
                                                                            (0, r.jsx)(C.E, {
                                                                                variant: "text-sm/normal",
                                                                                color: "text-default",
                                                                                children: e.username,
                                                                            }),
                                                                            (0, r.jsx)(C.E, {
                                                                                variant: "text-xs/normal",
                                                                                color: "text-muted",
                                                                                className: sZ.c1,
                                                                                children: e.email,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                            s === e.id
                                                                ? (0, r.jsx)(C.E, {
                                                                      variant: "text-sm/normal",
                                                                      color: "text-feedback-positive",
                                                                      children: (0, r.jsx)(sP.y, {
                                                                          size: "sm",
                                                                          color: "currentColor",
                                                                      }),
                                                                  })
                                                                : (0, r.jsx)(sU._, {
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
                            className: sZ.UD,
                            children: (0, r.jsx)(h.$, {
                                icon: ne.u,
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
function s3() {
    let e = (0, k.yK)([sq], () => sq.getPools() ?? []);
    return (0, r.jsxs)(S.B, {
        padding: 16,
        gap: 16,
        fullWidth: !1,
        className: sZ.kL,
        children: [
            (0, r.jsx)(s2, {}),
            (0, r.jsx)(d.Ip, { className: sZ.Ik, children: e?.map((e) => (0, r.jsx)(s8, { pool: e }, e.id)) }),
        ],
    });
}
var s6 = a(582306),
    s5 = a(528153),
    s4 = a(275759),
    s9 = a(888429);
function s7(e) {
    let t = new Date(e);
    return (
        t.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) +
        " " +
        t.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: !0 })
    );
}
function ie() {
    let e = (0, k.bG)([s4.Ay], () => s4.Ay.getDevToolTotalFriendAnniversaries()),
        t = (0, k.bG)([s4.Ay], () => s4.Ay.getDevToolCurrentDate()),
        a = (0, k.bG)([s4.Ay], () => s4.Ay.getGiftUnreadNotificationLastDismissedTimes()),
        n = (0, k.bG)([s4.Ay], () => s4.Ay.getMessageGiftIntentLastShownMap()),
        l = (0, k.bG)([s4.Ay], () => s4.Ay.getHighestAffinityFriendAnniversaries()),
        s = (0, k.bG)([s4.Ay], () => s4.Ay.getHighAffinityFriendAnniversaries()),
        i = (0, k.bG)([s4.Ay], () => s4.Ay.getProfilePopoutGiftIntentsDismissMap()),
        o = (0, k.bG)([li.A], () => {
            let e =
                li.A.settings.userContent?.recurringDismissibleContentStates[n1.M.GIFT_INTENT_MESSAGE]
                    ?.lastDismissedAtMs;
            if (null == e || "0" === e) return null;
            let t = Number(e);
            return Number.isNaN(t) ? null : t;
        }),
        c = (e) => {
            ty.h.dispatch({ type: "DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT", total: e });
        },
        u = (e) => {
            let t = aJ.A.getUserAffinity(e);
            return t?.dmProbability != null ? `${(100 * t.dmProbability).toFixed(3)}%` : "N/A";
        };
    return (0, r.jsx)(d.Ip, {
        className: tS.nd,
        children: (0, r.jsxs)("div", {
            className: s9.l$,
            children: [
                (0, r.jsx)(C.E, { className: s9.Iv, variant: "text-lg/bold", children: "Friend Anniversary" }),
                (0, r.jsx)("div", {
                    className: s9.Pm,
                    children: (0, r.jsxs)(S.B, {
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
                        className: s9.Pm,
                        children: (0, r.jsxs)(S.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(C.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "Affinity is the percent chance that User A will DM or GDM User B in the next 7 days.",
                                }),
                                (0, r.jsx)(C.E, {
                                    variant: "text-xs/normal",
                                    children:
                                        "The devtool automatically assigns users as high affinity regardless of actual affinity for testing.",
                                }),
                                l.length > 0 &&
                                    (0, r.jsxs)(S.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(C.E, {
                                                variant: "text-xs/semibold",
                                                children:
                                                    "Highest Affinity Friend Anniversaries (Eligible for Notification):",
                                            }),
                                            l.map((e) => {
                                                let t = G.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    C.E,
                                                    { variant: "text-xs/normal", children: [a, " (", u(e), ")"] },
                                                    e,
                                                );
                                            }),
                                        ],
                                    }),
                                s.length > 0 &&
                                    (0, r.jsxs)(S.B, {
                                        gap: 4,
                                        children: [
                                            (0, r.jsx)(C.E, {
                                                variant: "text-xs/semibold",
                                                children: "High Affinity Friend Anniversaries:",
                                            }),
                                            s.map((e) => {
                                                let t = G.default.getUser(e),
                                                    a = t?.username ?? `Unknown User (${e})`;
                                                return (0, r.jsxs)(
                                                    C.E,
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
                    className: s9.Pm,
                    children: (0, r.jsxs)(S.B, {
                        gap: 8,
                        direction: "horizontal",
                        children: [
                            (0, r.jsx)(s6.J, {
                                label: "Override current date used for cooldowns",
                                value: null != t ? a6()(t) : void 0,
                                onSelect: (e) => {
                                    let t = a6()(),
                                        a = e
                                            .clone()
                                            .hours(t.hours())
                                            .minutes(t.minutes())
                                            .seconds(t.seconds())
                                            .milliseconds(t.milliseconds());
                                    ty.h.dispatch({ type: "DEV_TOOLS_SET_CURRENT_DATE", date: a.valueOf() });
                                },
                            }),
                            (0, r.jsx)(h.$, {
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
                    className: s9.Pm,
                    children: (0, r.jsxs)(S.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(S.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(C.E, {
                                        variant: "text-md/normal",
                                        children: "Reset DCF gift intent cooldown (global, 24h)",
                                    }),
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: "Reset",
                                        onClick: () => {
                                            (0, lh._N)(n1.M.GIFT_INTENT_MESSAGE);
                                        },
                                    }),
                                ],
                            }),
                            (0, r.jsx)(C.E, {
                                variant: "text-xs/normal",
                                children: null != o ? `Dismissed at: ${s7(o)}` : "Not dismissed",
                            }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: s9.Pm,
                    children: (0, r.jsxs)(S.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(S.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(C.E, {
                                        variant: "text-md/normal",
                                        children: "Reset gift message cooldown (per-user, 14d)",
                                    }),
                                    (0, r.jsx)(h.$, {
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
                                (0, r.jsxs)(S.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(C.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift Message Intent Last Shown:",
                                        }),
                                        Object.entries(n).map((e) => {
                                            let [t, a] = e,
                                                n = G.default.getUser(t),
                                                l = n?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                C.E,
                                                { variant: "text-xs/normal", children: [l, ": ", s7(a)] },
                                                t,
                                            );
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsx)("div", {
                    className: s9.Pm,
                    children: (0, r.jsxs)(S.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(S.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(C.E, {
                                        variant: "text-md/normal",
                                        children: "Reset gift notification cooldown",
                                    }),
                                    (0, r.jsx)(h.$, {
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
                                (0, r.jsxs)(S.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(C.E, {
                                            variant: "text-xs/semibold",
                                            children: "Gift notification shown timestamps:",
                                        }),
                                        a.map((e, t) =>
                                            (0, r.jsx)(C.E, { variant: "text-xs/normal", children: s7(e) }, t),
                                        ),
                                    ],
                                }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: s9.Pm,
                    children: [
                        (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Send gift notification" }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Send",
                            onClick: () => {
                                s5.A.sendGiftingNotificationIfEligible();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: s9.Pm,
                    children: [
                        (0, r.jsx)(C.E, {
                            variant: "text-md/normal",
                            children: "Clear last seen friend anniversaries in All Friends",
                        }),
                        (0, r.jsx)(h.$, {
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
                    className: s9.Pm,
                    children: (0, r.jsxs)(S.B, {
                        gap: 8,
                        children: [
                            (0, r.jsxs)(S.B, {
                                gap: 8,
                                direction: "horizontal",
                                children: [
                                    (0, r.jsx)(C.E, {
                                        variant: "text-md/normal",
                                        children: "Reset profile popout gift intents dismiss",
                                    }),
                                    (0, r.jsx)(h.$, {
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
                                (0, r.jsxs)(S.B, {
                                    gap: 4,
                                    children: [
                                        (0, r.jsx)(C.E, {
                                            variant: "text-xs/semibold",
                                            children: "Profile Popout Gift Intents Dismissed:",
                                        }),
                                        Object.entries(i).map((e) => {
                                            let [t, a] = e,
                                                n = G.default.getUser(t),
                                                l = n?.username ?? `Unknown User (${t})`;
                                            return (0, r.jsxs)(
                                                C.E,
                                                { variant: "text-xs/normal", children: [l, ": ", s7(a)] },
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
var it = a(460890),
    ia = a(349288),
    il = a(517461),
    is = a(214947),
    ii = a(403581),
    ir = a(34188);
let io = [
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
var id = a(545406);
let ic = [0, 0.5, 1],
    iu = ["Center", "Inner ring", "Outer ring"],
    im = ic.length,
    ih = "ILLO_BLUE",
    ix = "ILLO_BLUE_40",
    ip = Array.from({ length: im }, () => ix),
    ig = Array.from({ length: im }, () => ih),
    iv = ["1", "0.5", "0"],
    ij = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i,
    ib = [
        { label: "Light", value: $.NJ8.LIGHT, id: $.NJ8.LIGHT },
        { label: "Dark", value: $.NJ8.DARK, id: $.NJ8.DARK },
        { label: "Darker", value: $.NJ8.DARKER, id: $.NJ8.DARKER },
        { label: "Midnight", value: $.NJ8.MIDNIGHT, id: $.NJ8.MIDNIGHT },
    ],
    iy = { [$.NJ8.MIDNIGHT]: $.NJ8.DARKER, [$.NJ8.DARKER]: $.NJ8.DARK, [$.NJ8.LIGHT]: $.NJ8.DARK },
    i_ = { [$.NJ8.LIGHT]: "light", [$.NJ8.DARK]: "ash", [$.NJ8.DARKER]: "dark", [$.NJ8.MIDNIGHT]: "onyx" },
    iC = [
        { id: "friends", icon: is.$, text: "Friends" },
        { id: "nitro", icon: ii.t, text: "Nitro Home", nitroHoverGradient: !0 },
        { id: "shop", icon: ir.U, text: "Shop", useCustomGradient: !0 },
    ],
    iE = io.map((e) => ({ label: e, value: e, id: e })),
    iS = Object.fromEntries(
        io.map((e) => [
            e,
            Object.keys(eN.A.unsafe_rawColors)
                .filter((t) => String(t).startsWith(e + "_"))
                .sort(
                    (e, t) =>
                        parseInt(String(e).split("_").pop() ?? "0", 10) -
                        parseInt(String(t).split("_").pop() ?? "0", 10),
                )
                .map((e) => {
                    let t = String(e).split("_").pop() ?? e,
                        [a, n, l] = eN.A.unsafe_rawColors[e].resolve().rgba(),
                        s =
                            (0.299 * a + 0.587 * n + 0.114 * l) / 255 > 0.5
                                ? eN.A.unsafe_rawColors.OPACITY_BLACK_28
                                : eN.A.unsafe_rawColors.OPACITY_WHITE_28,
                        i = (0, r.jsx)("span", {
                            className: id.oP,
                            style: { background: `rgb(${a}, ${n}, ${l})`, border: `1px solid ${s.css}` },
                        });
                    return { label: t, value: e, id: String(e), leading: i };
                }),
        ]),
    );
var iN = a(306327);
function iA(e, t, a) {
    return e.map((e, n) => (n === t ? a : e));
}
function ik(e, t) {
    let [a, n, l, s] = eN.A.unsafe_rawColors[e].resolve().rgba({ opacity: t });
    return { r: a, g: n, b: l, a: s };
}
function iI(e, t) {
    let a = eN.A.unsafe_rawColors[e].resolve();
    return null != t ? a.hex({ opacity: t }) : a.hex();
}
function iT(e) {
    let { yaml: t, label: a } = e,
        n = o.useCallback(() => {
            navigator.clipboard.writeText(t);
        }, [t]);
    return (0, r.jsxs)(S.B, {
        gap: 4,
        children: [
            (0, r.jsxs)(S.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                justify: "space-between",
                children: [
                    (0, r.jsx)(C.E, { variant: "text-md/semibold", children: a }),
                    (0, r.jsx)(e_.K, {
                        icon: a4.T,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: n,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, r.jsx)("pre", { className: id.RP, children: t }),
        ],
    });
}
function iD(e) {
    let { allResolvedStops: t } = e,
        a = o.useMemo(
            () =>
                iu.map((e, a) => {
                    let n;
                    return (
                        (n = ib
                            .map((e) => {
                                let n,
                                    l,
                                    { value: s } = e,
                                    i = i_[s],
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
    return (0, r.jsxs)(S.B, {
        gap: 16,
        children: [
            (0, r.jsx)(A.D, { variant: "heading-sm/semibold", children: "Token YAML" }),
            iu.map((e, t) => (0, r.jsx)(iT, { yaml: a[t], label: e }, e)),
        ],
    });
}
function iO(e, t, a) {
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
    return new iN.A("srgb", [
        (e.r * (1 - r) + n * r) / 255,
        (e.g * (1 - r) + l * r) / 255,
        (e.b * (1 - r) + s * r) / 255,
    ]);
}
function iR(e, t, a) {
    let n = a.map((e) => {
            let [t, a, n] = eN.A.unsafe_rawColors[e.color].resolve().rgba();
            return { r: t, g: a, b: n, opacity: e.opacity, position: e.position };
        }),
        l = 1 / 0,
        s = (e) => {
            e < l && (l = e);
        };
    for (let a of n) s(e.contrast(iO(t, n, a.position), "WCAG21"));
    for (let a = 0; a < n.length - 1; a++) {
        let { contrast: l } = (function (e, t, a, n, l) {
            let s = 1 / 0,
                i = n;
            for (let r = 0; r <= 100; r++) {
                let o = n + (r / 100) * (l - n),
                    d = a.contrast(iO(e, t, o), "WCAG21");
                d < s && ((s = d), (i = o));
            }
            return { contrast: s, position: i };
        })(t, n, e, n[a].position, n[a + 1].position);
        s(l);
    }
    return Math.round(100 * l) / 100;
}
function iw(e) {
    let [t, a, n] = eN.A.colors.TEXT_DEFAULT.resolve(e).rgba(),
        [l, s, i] = eN.A.colors.BACKGROUND_BASE_LOWEST.resolve(e).rgba(),
        [r, o, d, c] = eN.A.colors.INTERACTIVE_BACKGROUND_HOVER.resolve(e).rgba();
    return {
        text: new iN.A("srgb", [t / 255, a / 255, n / 255]),
        background: { r: l * (1 - c) + r * c, g: s * (1 - c) + o * c, b: i * (1 - c) + d * c },
    };
}
function iM() {
    return {
        colors: Array.from({ length: im }, () => void 0),
        scales: Array.from({ length: im }, () => void 0),
        opacities: Array.from({ length: im }, () => void 0),
    };
}
function iL() {
    return {
        [$.NJ8.LIGHT]: iM(),
        [$.NJ8.DARK]: { colors: [...ip], scales: [...ig], opacities: [...iv] },
        [$.NJ8.DARKER]: iM(),
        [$.NJ8.MIDNIGHT]: iM(),
    };
}
function iP() {
    let e = (0, it.G9)(),
        [t, a] = o.useState($.NJ8.DARK),
        [n, l] = (0, il.V)("DevToolsGradientContrastPanel_themeStops", iL()),
        s = n ?? iL(),
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
                        (0, r.jsxs)(S.B, {
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
                                              (0, r.jsx)(C.E, { variant: "text-sm/normal", children: e.name }),
                                              (0, r.jsx)(l_.Q, {
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
                    ib.map((e) => {
                        let { value: t } = e;
                        return [
                            t,
                            (function (e, t) {
                                let a = [],
                                    n = [],
                                    l = [];
                                for (let s = 0; s < im; s++) {
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
                                        d = iy[d];
                                    }
                                    a.push(i ?? ip[s]), n.push(r ?? ig[s]), l.push(o ?? iv[s]);
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
        _ = o.useMemo(() => iw({ theme: t, saturation: 1 }), [t]),
        N = o.useMemo(() => {
            let e = [];
            for (let t = 0; t < im; t++) {
                let a = parseFloat(f.opacities[t]);
                if (isNaN(a) || a < 0 || a > 1) return null;
                e.push({ color: f.colors[t], opacity: a, position: ic[t] });
            }
            return e;
        }, [f]),
        k = o.useMemo(() => {
            if (null == N) return null;
            let { text: e, background: t } = _;
            return iu.map((a, n) =>
                iS[f.scales[n]].map((a) => {
                    let l = iR(e, t, iA(N, n, { ...N[n], color: a.value }));
                    return { ...a, trailing: `(${l}:1)` };
                }),
            );
        }, [N, _, f.scales]),
        I = o.useMemo(() => {
            try {
                return ib.map((e) => {
                    let { value: t, label: a } = e,
                        n = b[t],
                        l = [];
                    for (let e = 0; e < im; e++) {
                        let s = parseFloat(n.opacities[e]);
                        if (isNaN(s) || s < 0 || s > 1) return { theme: t, label: a, result: null };
                        l.push({ color: n.colors[e], opacity: s, position: ic[e] });
                    }
                    return {
                        theme: t,
                        label: a,
                        result: (function (e, t) {
                            let a,
                                { text: n, background: l } = iw(t),
                                s = iR(n, l, e),
                                i = s >= 4.5;
                            if (!i)
                                for (let t = 0; t < e.length; t++) {
                                    let s = (function (e) {
                                        let t = String(e).match(/^(.+)_\d+$/);
                                        if (null == t) return null;
                                        let a = t[1];
                                        return io.includes(a) ? a : null;
                                    })(e[t].color);
                                    if (null == s) continue;
                                    let i = parseInt(String(e[t].color).split("_").pop() ?? "0", 10),
                                        r = 1 / 0;
                                    for (let { value: o } of iS[s]) {
                                        if (o === e[t].color) continue;
                                        let s = iR(n, l, iA(e, t, { ...e[t], color: o }));
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
        className: id.XG,
        children: (0, r.jsxs)(S.B, {
            gap: 24,
            padding: 8,
            className: id.zr,
            children: [
                (0, r.jsx)(A.D, {
                    variant: "heading-lg/medium",
                    children: "Tab Hover Gradient Token Generator & Contrast Checker",
                }),
                (0, r.jsxs)(S.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(C.E, {
                            variant: "text-md/normal",
                            children:
                                "Checks that tab hover gradients pass WCAG AA (4.5:1) contrast against the text in the tab, accounting for opacities and hover states.",
                        }),
                        (0, r.jsx)(C.E, {
                            variant: "text-sm/normal",
                            children:
                                "Pick colors for each gradient stop (center, inner ring, outer ring) per theme. Each color in the dropdown will show the minimum contrast ratio for the gradient if the color were selected. Dark-family themes inherit: values set on Dark cascade to Darker and Midnight unless overridden.",
                        }),
                        (0, r.jsx)(C.E, {
                            variant: "text-sm/normal",
                            children:
                                "Use the hex field to paste in a hex color \u2014 it will snap to the closest allowed token and show the deltaE distance.",
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/normal",
                            children: [
                                "Copy the generated YAML at the bottom to create your token definitions to be used by the",
                                " ",
                                (0, r.jsx)(ia.Anchor, {
                                    href: "https://design.discord.tools/foundations/color/token-pipeline",
                                    children: "token pipeline",
                                }),
                                ".",
                            ],
                        }),
                    ],
                }),
                (0, r.jsx)(tq.Z, {
                    selectionMode: "single",
                    label: "Theme",
                    value: t,
                    onSelectionChange: (e) => a(e),
                    closeOnSelect: !0,
                    options: ib,
                }),
                (0, r.jsxs)(S.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(A.D, { variant: "heading-sm/semibold", children: "Gradient Stops" }),
                        (0, r.jsx)("div", {
                            className: id.G9,
                            children: iu.map((e, t) => {
                                let a = "" !== i[t];
                                return (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            (0, r.jsxs)(S.B, {
                                                gap: 0,
                                                className: id.hi,
                                                children: [
                                                    (0, r.jsx)(C.E, { variant: "text-md/medium", children: e }),
                                                    (0, r.jsx)(l_.Q, {
                                                        variant: "secondary",
                                                        textVariant: "text-xs/normal",
                                                        text: `(${iI(f.colors[t], parseFloat(f.opacities[t]))})`,
                                                        onClick: () =>
                                                            navigator.clipboard.writeText(
                                                                iI(f.colors[t], parseFloat(f.opacities[t])),
                                                            ),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(tq.Z, {
                                                selectionMode: "single",
                                                label: "Scale",
                                                disabled: a,
                                                value: f.scales[t],
                                                onSelectionChange: (e) => {
                                                    let a = iS[e][0]?.value;
                                                    y((n) => ({
                                                        ...n,
                                                        scales: iA(n.scales, t, e),
                                                        colors: null != a ? iA(n.colors, t, a) : n.colors,
                                                    }));
                                                },
                                                closeOnSelect: !0,
                                                options: iE,
                                            }),
                                            (0, r.jsx)(tq.Z, {
                                                selectionMode: "single",
                                                label: "Value",
                                                disabled: a,
                                                value: f.colors[t],
                                                onSelectionChange: (e) =>
                                                    y((a) => ({ ...a, colors: iA(a.colors, t, e) })),
                                                closeOnSelect: !0,
                                                options: k?.[t] ?? iS[f.scales[t]],
                                            }),
                                            (0, r.jsx)(p.k, {
                                                label: "Opacity",
                                                name: `opacity-${t}`,
                                                value: f.opacities[t],
                                                onChange: (e) => y((a) => ({ ...a, opacities: iA(a.opacities, t, e) })),
                                                placeholder: "0\u20131",
                                            }),
                                            (0, r.jsx)(p.k, {
                                                label: `Hex${a && null != u[t] ? ` (dE: ${u[t]})` : ""}`,
                                                name: `hex-${t}`,
                                                value: i[t],
                                                onChange: (e) => {
                                                    c((a) => iA(a, t, e));
                                                    let a = (function (e) {
                                                        if (!ij.test(e)) return null;
                                                        try {
                                                            return new iN.A(e.startsWith("#") ? e : `#${e}`);
                                                        } catch {
                                                            return null;
                                                        }
                                                    })(e);
                                                    if (null != a) {
                                                        let e = (function (e) {
                                                            let t = ix,
                                                                a = ih,
                                                                n = 1 / 0;
                                                            for (let l of io)
                                                                for (let s of iS[l]) {
                                                                    let i = e.deltaE(
                                                                        (function (e) {
                                                                            let [t, a, n] = eN.A.unsafe_rawColors[e]
                                                                                .resolve()
                                                                                .rgba();
                                                                            return new iN.A("srgb", [
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
                                                        m((a) => iA(a, t, e.deltaE)),
                                                            y((a) => ({
                                                                ...a,
                                                                scales: iA(a.scales, t, e.scale),
                                                                colors: iA(a.colors, t, e.color),
                                                            }));
                                                    } else m((e) => iA(e, t, null));
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
                (0, r.jsx)(A.D, { variant: "heading-sm/semibold", children: "Preview" }),
                (0, r.jsx)(it.GE, {
                    value: { ...e, theme: t },
                    children: (0, r.jsx)(eE.N, {
                        theme: t,
                        children: (e) =>
                            (0, r.jsx)("div", {
                                className: e,
                                children: (0, r.jsx)(S.B, {
                                    gap: 16,
                                    children: (0, r.jsx)("ul", {
                                        className: id.$8,
                                        style: { background: eN.A.colors.BACKGROUND_BASE_LOWEST.css },
                                        children: iC.map((e, t) =>
                                            (0, r.jsx)(
                                                Q.z9,
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
                                                        hoverGradientStart: ik(f.colors[0], parseFloat(f.opacities[0])),
                                                        hoverGradientMiddle: ik(
                                                            f.colors[1],
                                                            parseFloat(f.opacities[1]),
                                                        ),
                                                        hoverGradientEnd: ik(f.colors[2], parseFloat(f.opacities[2])),
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
                null != I &&
                    (0, r.jsxs)(S.B, {
                        gap: 16,
                        children: [
                            (0, r.jsx)(A.D, { variant: "heading-sm/semibold", children: "Results" }),
                            I.map((e) => {
                                let { theme: t, label: a, result: n } = e;
                                return null != n
                                    ? (0, r.jsxs)(
                                          S.B,
                                          {
                                              gap: 8,
                                              children: [
                                                  (0, r.jsx)(C.E, { variant: "text-md/semibold", children: a }),
                                                  (0, r.jsxs)(E.w, {
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
                                                      (0, r.jsxs)(S.B, {
                                                          gap: 4,
                                                          children: [
                                                              (0, r.jsx)(C.E, {
                                                                  variant: "text-sm/semibold",
                                                                  children: "Suggestion:",
                                                              }),
                                                              (0, r.jsxs)(C.E, {
                                                                  variant: "text-sm/normal",
                                                                  children: [
                                                                      iu[n.suggestion.stopIndex],
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
                                                      (0, r.jsx)(C.E, {
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
                (0, r.jsx)(iD, { allResolvedStops: b }),
            ],
        }),
    });
}
var iU = a(820739),
    iG = a(230135),
    iB = a(45780),
    iF = a(868652),
    iV = a(859241);
let i$ = [
        n1.M.GUILD_POWERUP_PERKS_COACHMARK,
        n1.M.GUILD_POWERUPS_OVERVIEW_SIDEBAR_COACHMARK,
        n1.M.GUILD_POWERUP_NOTIFICATION,
        n1.M.GUILD_TAG_AVAILABLE_COACHMARK,
        n1.M.GUILD_POWERUP_NEW_PERK_AVAILABLE_COACHMARK,
    ],
    iW = [
        n1.V.GUILD_POWERUP_LEVEL_1_COACHMARK,
        n1.V.GUILD_POWERUP_LEVEL_2_COACHMARK,
        n1.V.GUILD_POWERUP_LEVEL_3_COACHMARK,
        n1.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK,
        n1.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK,
    ],
    iz = [n1.V.ADOPT_CLAN_IDENTITY_NOTICE],
    iH = [
        n1.M.VANITY_URL_POWERUP_ROLLBACK_NOTIFICATION,
        n1.M.VANITY_URL_POWERUP_ROLLBACK_MODAL,
        n1.M.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
    ];
function iK(e) {
    switch (e) {
        case n1.V.GUILD_POWERUP_LEVEL_1_COACHMARK:
            return "GUILD_POWERUP_LEVEL_1_COACHMARK";
        case n1.V.GUILD_POWERUP_LEVEL_2_COACHMARK:
            return "GUILD_POWERUP_LEVEL_2_COACHMARK";
        case n1.V.GUILD_POWERUP_LEVEL_3_COACHMARK:
            return "GUILD_POWERUP_LEVEL_3_COACHMARK";
        case n1.V.GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_SINGLE_SKU_PURCHASE_COACHMARK";
        case n1.V.GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK:
            return "GUILD_POWERUP_CHOICE_SKU_PURCHASE_COACHMARK";
        case n1.V.ADOPT_CLAN_IDENTITY_NOTICE:
            return "ADOPT_CLAN_IDENTITY_NOTICE";
        default:
            return String(e);
    }
}
var iY = a(861671);
async function iq(e, t, a) {
    await nB.Bo.patch({
        url: $.Rsh.APPLIED_BOOST_MODIFY_END_DATE,
        body: { applied_boost_ids: t.map((e) => e.id), ends_at: a ? null : a6()().add(1, "day") },
        rejectWithError: !0,
    }),
        (0, iU.VU)(e),
        (0, iF.Xd)(e, !0);
}
async function iJ(e) {
    await nB.Bo.post({ url: $.Rsh.SEND_POWERUPS_SYSTEM_MESSAGE(e), rejectWithError: !0 });
}
function iQ() {
    let e = (0, k.bG)([a$.A], () => a$.A.getGuildId()),
        t = (0, k.bG)([aV.A], () => aV.A.getGuild(e)?.name),
        a = (0, k.yK)([li.A], () => [...iW, ...iz].filter((t) => null != e && (0, iB.zs)(t, e))),
        n = (0, k.yK)([iV.A], () => (null != e ? (iV.A.getAppliedGuildBoostsForGuild(e) ?? []) : []));
    if (null != e)
        return (0, r.jsxs)(d.Ip, {
            className: iY.kL,
            children: [
                (0, r.jsx)("div", {
                    className: iY.uW,
                    children: (0, r.jsx)(A.D, { variant: "heading-md/normal", children: `Current guild: ${t}` }),
                }),
                (0, r.jsxs)("div", {
                    className: iY.uW,
                    children: [
                        (0, r.jsx)(C.E, {
                            variant: "eyebrow",
                            className: iY.wx,
                            children: "Reset Notification Indicators",
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Reset",
                            onClick: () => {
                                (0, iF.qM)();
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iY.uW,
                    children: [
                        (0, r.jsx)(C.E, { variant: "eyebrow", className: iY.wx, children: "Reset Progress Bar State" }),
                        (0, r.jsx)(h.$, { variant: "primary", text: "Reset", onClick: iG.O }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iY.uW,
                    children: [
                        (0, r.jsx)(C.E, { variant: "eyebrow", children: "Set Warning State" }),
                        (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Set Half Boosts expiring in 1 day",
                                    onClick: () => {
                                        iq(e, n.slice(Math.floor(n.length / 2)), !1);
                                    },
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset End Date",
                                    onClick: () => {
                                        iq(e, n, !0);
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iY.uW,
                    children: [
                        (0, r.jsx)(C.E, { variant: "eyebrow", className: iY.wx, children: "Reset User Level DCs" }),
                        (0, r.jsx)(S.B, {
                            gap: 16,
                            children: i$.map((e) => (0, r.jsx)(ld, { className: iY.z6, content: n1.M[e] }, n1.M[e])),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: iY.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Guild Level DCs",
                        children: iW.map((t) =>
                            (0, r.jsx)(
                                tf.d,
                                {
                                    label: iK(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, iB._$)(t, e, !1)
                                            : ((0, lh._N)(n1.M.GUILD_POWERUP_NOTIFICATION), (0, iB.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: iY.uW,
                    children: (0, r.jsx)(u.n, {
                        label: "Reset Server Tag Guild Level DCs",
                        children: iz.map((t) =>
                            (0, r.jsx)(
                                tf.d,
                                {
                                    label: iK(t),
                                    checked: a.includes(t),
                                    onChange: (a) => {
                                        a
                                            ? (0, iB._$)(t, e, !1)
                                            : ((0, lh._N)(n1.M.GUILD_POWERUP_NOTIFICATION), (0, iB.hk)(t, e));
                                    },
                                },
                                t,
                            ),
                        ),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: iY.uW,
                    children: [
                        (0, r.jsx)(C.E, {
                            variant: "eyebrow",
                            className: iY.wx,
                            children: "Reset Powerup Rollback DCs",
                        }),
                        iH.map((e) => (0, r.jsx)(ld, { className: iY.z6, content: n1.M[e] }, n1.M[e])),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: iY.uW,
                    children: [
                        (0, r.jsx)(C.E, {
                            variant: "eyebrow",
                            className: iY.wx,
                            children: "Send Powerups System Message",
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Send System Message",
                            onClick: () => {
                                iJ(e);
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(h.$, {
                    variant: "primary",
                    text: "Reset GameServer ToS",
                    onClick: () => {
                        (0, su.Wp)(!1);
                    },
                }),
            ],
        });
}
var iX = a(450510),
    iZ = a(320681);
function i0(e) {
    let { hotspotLocation: t } = e,
        [a, n] = (0, k.yK)([iX.HP], () => [iX.HP.hasHotspot(t, !0), iX.HP.getHotspotOverride(t)]);
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
        onSelectionChange: (e) => (null != e ? (0, iX.Kl)(t, e) : (0, iX.LF)(t)),
        selectionMode: "single",
        fullWidth: !0,
    });
}
function i1() {
    return (0, r.jsx)(d.Ip, {
        className: tS.nd,
        children: (0, r.jsx)(u.n, {
            label: "Hotspots",
            description:
                "All the 'hotspots' in app, and their current status. Use the select menu to override them on or off.",
            className: iZ.IN,
            children: (0, r.jsx)(S.B, {
                gap: 20,
                children: Object.keys(iX._2)
                    .sort((e, t) => e.localeCompare(t))
                    .map((e) => (0, r.jsx)(i0, { hotspotLocation: e }, e)),
            }),
        }),
    });
}
var i2 = a(919523),
    i8 = a(855522),
    i3 = a(37646),
    i6 = a(773669);
function i5() {
    let e = (0, k.bG)([i6.default], () => i6.default.locale),
        [t, a] = o.useState(),
        n = (0, i2.runtimeHashMessageKey)(t ?? ""),
        l = o.useMemo(() => aH.t[n], [n]);
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsxs)(aj.Ay, {
                children: [
                    (0, r.jsx)(aj.Ay.Icon, { icon: i3.U, tooltip: "Locale" }),
                    (0, r.jsx)(aj.Ay.Title, { children: "Locale" }),
                ],
            }),
            (0, r.jsxs)(nv, {
                children: [
                    (0, r.jsx)(nj, { name: "Active System", children: "@discord/intl" }),
                    (0, r.jsx)(nj, { name: "App", children: e }),
                    (0, r.jsx)(nj, { name: "System", children: aH.systemLocale }),
                    (0, r.jsx)(nj, { name: "@discord/intl", children: aH.intl.currentLocale }),
                    (0, r.jsx)(nj, { name: "common i18n", children: i8.A.getLocale() }),
                    (0, r.jsx)(nj, { name: "Moment", children: a6().locale() }),
                ],
            }),
            (0, r.jsxs)(aj.Ay, {
                children: [
                    (0, r.jsx)(aj.Ay.Icon, { icon: i3.U, tooltip: "Messages" }),
                    (0, r.jsx)(aj.Ay.Title, { children: "New System Messages" }),
                ],
            }),
            (0, r.jsx)(nv, {
                children: (0, r.jsx)(nj, { name: "Unique Rendered Main Messages", children: Object.keys(aH.t).length }),
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
            (0, r.jsxs)(nv, {
                children: [
                    (0, r.jsx)(nj, { name: "Hashed key", children: n }),
                    (0, r.jsx)(nj, { name: "Exists?", children: null != l ? "yes" : "no" }),
                ],
            }),
            (0, r.jsx)(aN, { data: l?.(e) }),
        ],
    });
}
var i4 = a(434404);
function i9() {
    let { node: e } = (0, P.Ay)(i4.F, "");
    return (0, r.jsx)(d.Ip, {
        className: tS.nd,
        children: (0, r.jsx)("div", {
            style: { padding: "var(--space-8)" },
            children: (0, r.jsx)(L.A, { node: e }, e.key),
        }),
    });
}
var i7 = a(663066),
    re = a(80556),
    rt = a(907135),
    ra = a(665095),
    rn = a(87404);
function rl() {
    return (0, r.jsx)(d.Ip, {
        className: tS.nd,
        children: (0, r.jsxs)("div", {
            className: ss.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: ss.uW,
                    children: [
                        (0, r.jsx)(A.D, { variant: "heading-md/semibold", children: "Verification Layer" }),
                        (0, r.jsx)("div", {
                            className: ss.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open Verification Layer",
                                onClick: () => {
                                    (0, i7.B8)(() => (0, r.jsx)(ra.A, {}), { layerKey: rn._s, Layer: re.Ay });
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: ss.uW,
                    children: [
                        (0, r.jsx)(A.D, { variant: "heading-md/semibold", children: "Safety Flow" }),
                        (0, r.jsx)("div", {
                            className: ss.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open Safety Flow",
                                onClick: () => {
                                    (0, i7.B8)(
                                        (e) => {
                                            let { closeLayer: t } = e;
                                            return (0, r.jsx)(rt.A, { onClose: t });
                                        },
                                        { layerKey: rn._s, Layer: re.Ay },
                                    );
                                },
                            }),
                        }),
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: ss.uW,
                    children: [
                        (0, r.jsx)(A.D, { variant: "heading-md/semibold", children: "Layer Controls" }),
                        (0, r.jsx)("div", {
                            className: ss.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Close All Layers",
                                onClick: () => {
                                    i7.xr.setState({ fullScreenLayers: [] });
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
var rs = a(687813),
    ri = a(604121);
let rr = {
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
function ro(e) {
    let { default: t } = e;
    return fetch(t)
        .then((e) => e.arrayBuffer())
        .then(
            (e) =>
                new Promise((t, a) => {
                    let n = new Uint8Array(e);
                    rs.$1(n, (e, n) => {
                        null != e && a(e);
                        let l = Object.keys(n).reduce((e, t) => ({ ...e, [t]: JSON.parse(rs.he(n[t])) }), {}),
                            s = l["manifest.json"];
                        t(l[`animations/${s.animations[0].id}.json`]);
                    });
                }),
        );
}
function rd() {
    let [e, t] = o.useState(void 0),
        [a, n] = o.useState(400),
        [l, s] = o.useState(400);
    return (0, r.jsx)("div", {
        style: { margin: 24 },
        children: (0, r.jsxs)(S.B, {
            gap: 24,
            children: [
                (0, r.jsx)(tq.Z, {
                    options: Object.keys(rr).map((e) => ({ id: e, label: e, value: e })),
                    value: e,
                    onSelectionChange: t,
                    selectionMode: "single",
                }),
                (0, r.jsxs)(S.B, {
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
                        let t = rr[e],
                            a = new Blob(
                                [
                                    JSON.stringify(
                                        e.endsWith(".lottie")
                                            ? await t().then(ro).then(eO().cloneDeep)
                                            : await t().then((e) => eO().cloneDeep(e.default)),
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
                            ri.a,
                            {
                                importData: () => {
                                    let t = rr[e];
                                    return e.endsWith(".lottie")
                                        ? t().then(ro).then(eO().cloneDeep)
                                        : t().then((e) => eO().cloneDeep(e.default));
                                },
                            },
                            e,
                        ),
                    }),
            ],
        }),
    });
}
var rc = a(442433),
    ru = a(395671);
let rm = {
        ClipsContextMenu: async () => {
            let { default: e } = await a.e("40638").then(a.bind(a, 562733));
            return (t) => (0, r.jsx)(e, { ...t });
        },
        ActivityPopoutHeaderOverflowMenu: async () => {
            let { default: e } = await a.e("32986").then(a.bind(a, 728033)),
                t = new ru.kJ({
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
            return () => (0, r.jsx)(e, { application: t, channelId: "987654321", onClose: rc.Z_ });
        },
        GuildChannelListContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("9004"), a.e("19690"), a.e("45322"), a.e("10758")]).then(
                    a.bind(a, 455557),
                ),
                t = Object.values(aV.A.getGuilds())[0];
            return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
        },
        GuildContextMenu: async () => {
            let { default: e } = await Promise.all([
                    a.e("18320"),
                    a.e("15249"),
                    a.e("19397"),
                    a.e("72888"),
                    a.e("37261"),
                    a.e("25812"),
                    a.e("87845"),
                    a.e("50862"),
                    a.e("54518"),
                    a.e("10859"),
                    a.e("64422"),
                    a.e("45970"),
                    a.e("1472"),
                    a.e("83852"),
                    a.e("44710"),
                    a.e("4974"),
                    a.e("73589"),
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
                t = Object.values(aV.A.getGuilds())[0];
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
            return (t) => (0, r.jsx)(e, { ...t, onClose: rc.Z_ });
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
                        console.log("Leave role clicked"), (0, rc.Z_)();
                    },
                });
        },
        StaffOnlyEntryDebugMenu: async () => {
            let { default: e } = await Promise.all([a.e("86456"), a.e("89346")]).then(a.bind(a, 949881)),
                { ContentInventoryEntryType: t } = await Promise.resolve().then(a.bind(a, 681154)),
                { ContentInventoryAuthorType: n } = await Promise.resolve().then(a.bind(a, 6161)),
                l = G.default.getCurrentUser(),
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
                    a.e("44710"),
                    a.e("25812"),
                    a.e("11810"),
                    a.e("14656"),
                ]).then(a.bind(a, 892921)),
                t = Object.values(aV.A.getGuilds())[0];
            return null == t
                ? () => null
                : (a) =>
                      (0, r.jsx)(e, {
                          ...a,
                          addFormField: (e) => {
                              console.log("Add form field:", e), (0, rc.Z_)();
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
                t = aV.A.getGuilds(),
                n = null;
            for (let e of Object.values(t)) {
                for (let t of Object.values(t6.A.getMutableGuildChannelsForGuild(e.id))) {
                    let e = t6.A.getAllThreadsForParent(t.id);
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
                t = Object.values(aV.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rc.Z_ });
        },
        MembersTableJoinTypeContextMenu: async () => {
            let { default: e } = await Promise.all([a.e("4974"), a.e("71719"), a.e("14878"), a.e("66016")]).then(
                    a.bind(a, 316173),
                ),
                t = Object.values(aV.A.getGuilds())[0];
            return null == t ? () => null : () => (0, r.jsx)(e, { guildId: t.id, onClose: rc.Z_ });
        },
    },
    rh = {
        GuildShopSortOptions: o.lazy(async () => {
            let { default: e } = await Promise.all([a.e("83518"), a.e("55197"), a.e("50974")]).then(a.bind(a, 324269)),
                { default: t } = await a.e("55197").then(a.bind(a, 558060));
            return { default: () => (0, r.jsx)(t, { defaultSortOption: void 0, children: (0, r.jsx)(e, {}) }) };
        }),
    };
function rx() {
    let e = o.useMemo(
            () =>
                Object.keys(rm)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        t = o.useMemo(
            () =>
                Object.keys(rh)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        i = o.useCallback(
            (e) => {
                null != a && (0, rc.L3)(e, rm[a]);
            },
            [a],
        ),
        c = null != l ? rh[l] : null;
    return (0, r.jsx)(d.Ip, {
        className: tS.nd,
        children: (0, r.jsxs)(S.B, {
            className: ss.l$,
            gap: 16,
            children: [
                (0, r.jsxs)(S.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(C.E, { variant: "eyebrow", children: "Context Menus" }),
                        (0, r.jsx)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a menu and click Open to trigger it as a context menu at the button position.",
                        }),
                    ],
                }),
                (0, r.jsxs)(S.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: [
                        (0, r.jsx)(tq.Z, {
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
                (0, r.jsxs)(S.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(C.E, { variant: "eyebrow", children: "Popout Menus" }),
                        (0, r.jsx)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children:
                                "Select a popout menu to render it. Click the rendered button to open the popout.",
                        }),
                    ],
                }),
                (0, r.jsx)(S.B, {
                    direction: "horizontal",
                    gap: 8,
                    align: "end",
                    children: (0, r.jsx)(tq.Z, {
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
                        fallback: (0, r.jsx)(C.E, {
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
var rp = a(253506),
    rg = a(665260),
    rv = a(97808),
    rj = a(778712),
    rb = a(308528),
    rf = a(571694),
    ry = a(704844),
    r_ = a(567761),
    rC = a(716371),
    rE = a(825801);
function rS() {
    let e = (0, k.yK)([r_.default], () => r_.default.getSortedChannels()[1]),
        [t, a] = o.useState(e.length > 0 ? e[0].channelId : void 0),
        { selectedChannel: n, options: l } = (0, k.cf)([t6.A, G.default, t5.A], () => ({
            selectedChannel: t6.A.getChannel(t),
            options: e.map((e) => {
                let t = t6.A.getChannel(e.channelId);
                return {
                    id: e.channelId,
                    value: e.channelId,
                    label: null != t ? (0, t3.m1)(t, G.default, t5.A) : e.channelId,
                    leading:
                        null != t
                            ? (0, r.jsx)(rv.eu, { src: (0, rf.Y)(t), "aria-hidden": !0, size: rj._3.SIZE_16 })
                            : void 0,
                };
            }),
        })),
        s = o.useCallback(() => {
            if (null == n || !n.isPrivate()) return;
            let e = (0, rg.PQ)(n.recipientFlags ?? 0, rp.o.DISMISSED_IN_GAME_MESSAGE_NUX);
            ry.A.updatePrivateChannelRecipientFlags(n.id, e);
        }, [n]),
        i = !!n?.isPrivate() && (0, rg.Lt)(n.recipientFlags ?? 0, rp.o.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)("div", {
        className: rE.gs,
        children: [
            (0, r.jsx)(tq.Z, {
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
function rN() {
    let e = o.useCallback(() => {
        rb.A.openPrivateChannel({ recipientIds: [rC.K] });
    }, []);
    return (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "Open System DM", onClick: e });
}
function rA() {
    let e = (0, k.bG)([av.Ay], () => av.Ay.allByCategory(av.xW.MESSAGING), [], k.My).map((e) => {
        let [t, a, { label: n }] = e;
        return (0, r.jsx)(tf.d, { label: n, description: t, checked: a, onChange: (e) => sp(t, e) }, t);
    });
    return (0, r.jsxs)("div", {
        className: y()(tS.nd, rE.nd),
        children: [
            e,
            (0, r.jsx)("div", { className: rE.yF }),
            (0, r.jsx)(rS, {}),
            (0, r.jsx)("div", { className: rE.yF }),
            (0, r.jsx)(rN, {}),
        ],
    });
}
var rk = a(459838),
    rI = a(772707),
    rT = a(150934),
    rD = a(598653),
    rO = a(166403),
    rR = a(625494),
    rw = a(204925);
let rM = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e("29232").then(a.bind(a, 180275));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: aH.intl.string(aH.t.ZLRYGU),
                confirmButtonText: aH.intl.string(aH.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e("19840").then(a.bind(a, 79779));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                headerText: aH.intl.string(aH.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: aH.intl.string(aH.t["13ofGu"]),
                impression: { impressionName: sG.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await Promise.all([a.e("54398"), a.e("34260"), a.e("18467")]).then(a.bind(a, 297102));
        return (t) => (0, r.jsx)(e, { ...t, entryPoint: a1.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e("25226"), a.e("82758"), a.e("80022"), a.e("10136")]).then(
            a.bind(a, 776971),
        );
        return (t) => (0, r.jsx)(e, { ...t, source: rw.w_.NSFW_SERVER });
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
            a.e("63897"),
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
        let { default: e } = await Promise.resolve().then(a.bind(a, 914724));
        return (t) => (0, r.jsx)(e, { error: null, working: !1, validPhone: !1, ...t });
    },
    VoiceSettingsModal: async () => {
        let { default: e } = await a.e("96531").then(a.bind(a, 880510));
        return (t) => (0, r.jsx)(e, { ...t, mediaEngineContext: rk.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, r.jsx)(rI.k, {
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
                (t.default.getDevicesForPlatform = (e) => (e === $.fg2.PLAYSTATION ? s : n.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== $.fg2.PLAYSTATION && i.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === $.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
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
                    (0, r.jsx)(e, { ...a, channel: l, platform: $.fg2.PLAYSTATION })
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
            a.e("13218"),
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
            a.e("13218"),
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
        let { default: e } = await Promise.all([a.e("44710"), a.e("46313")]).then(a.bind(a, 336496));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildRaidLockdownFeedbackModal: Modal closed"), t.onClose()),
            });
    },
    GuildVerificationLevelModal: async () => {
        let { default: e } = await Promise.all([a.e("44710"), a.e("78618"), a.e("70232")]).then(a.bind(a, 313003)),
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
        let { default: e } = await Promise.all([a.e("44710"), a.e("78618"), a.e("70232")]).then(a.bind(a, 313003)),
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
        let e = G.default.getUser("12345"),
            t = G.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("31385")]).then(a.bind(a, 58144));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = G.default.getUser("12345"),
            t = G.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("84811")]).then(a.bind(a, 389094));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = G.default.getUser("12345"),
            t = G.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("17219")]).then(a.bind(a, 187278));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = G.default.getUser("12345"),
            t = G.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: n } = await Promise.all([a.e("53385"), a.e("55738"), a.e("43139")]).then(a.bind(a, 179950));
        return (a) => (0, r.jsx)(n, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([
            a.e("41816"),
            a.e("30244"),
            a.e("98189"),
            a.e("48370"),
            a.e("72875"),
        ]).then(a.bind(a, 320742));
        return (t) => (0, r.jsx)(e, { ...t });
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await Promise.all([a.e("44616"), a.e("85579")]).then(a.bind(a, 785606)),
            t = rO.A.getPremiumGroupSubscription();
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
            t = Object.keys(aV.A.getGuilds())[0];
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
            t = Object.values(aV.A.getGuilds())[0];
        return null == t ? () => null : (a) => (0, r.jsx)(e, { ...a, guild: t });
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await Promise.all([a.e("81857"), a.e("27917"), a.e("73152"), a.e("25281")]).then(
            a.bind(a, 516259),
        );
        return (t) => (0, r.jsx)(e, { ...t });
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([
            a.e("12289"),
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
            a.e("63897"),
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
function rL() {
    let e = o.useMemo(
            () =>
                Object.keys(rM)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = o.useState(null);
    return (0, r.jsx)(d.Ip, {
        className: tS.nd,
        children: (0, r.jsxs)("div", {
            className: ss.l$,
            children: [
                (0, r.jsx)("section", {
                    className: ss.uW,
                    children: (0, r.jsxs)(S.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(tq.Z, {
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
                                onClick: () => null != t && (0, eS.openModalLazy)(rM[t]),
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("section", {
                    className: ss.uW,
                    children: [
                        (0, r.jsx)(A.D, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, r.jsx)("div", {
                            className: ss.bd,
                            children: (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, rD.o)(!0), rR._.dispatch($.jej.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
var rP = a(933832),
    rU = a(472229),
    rG = a(694080),
    rB = a(669316),
    rF = a(354670),
    rV = a(428262);
let r$ = async () => {
        try {
            let { body: e } = await nB.Bo.get({ url: $.Rsh.USER_OFFER_IDS, rejectWithError: !0 });
            return e;
        } catch (e) {
            return [];
        }
    },
    rW = async (e, t) => {
        try {
            await nB.Bo.post({ url: $.Rsh.CREATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, rG._D)();
        }
    },
    rz = async (e, t) => {
        try {
            await nB.Bo.del({ url: $.Rsh.UPDATE_USER_OFFER(e, t), rejectWithError: !0 });
        } catch {
        } finally {
            await (0, rG._D)();
        }
    },
    rH = async () => {
        try {
            let { body: e } = await nB.Bo.get({ url: $.Rsh.USER_OFFERS, rejectWithError: !0 });
            return { trial: e.trial, discount: e.discount.map(rB.A.createFromServer) };
        } catch (e) {
            return { trial: [], discount: [] };
        }
    },
    rK = async () => {
        try {
            await nB.Bo.del({ url: $.Rsh.USER_OFFERS, rejectWithError: !0 });
        } catch {
        } finally {
            await rF.A.forceReset(), await (0, rG._D)();
        }
    },
    rY = async (e) => {
        await nB.Bo.post({ url: $.Rsh.CREATE_REVERSE_TRIAL, body: { ends_at: e }, rejectWithError: !0 });
    };
function rq(e) {
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
    let E = null != p,
        S = null != p && new Date(p).getTime() < Date.now(),
        N = j?.sku_id === l9.pe.TIER_0,
        k = async () => {
            u(!0), E ? await I({ expiresAt: null }) : await (0, rG.u1)(t), n(), u(!1);
        },
        I = async (e) => {
            u(!0);
            try {
                await nB.Bo.patch({
                    url: $.Rsh.UPDATE_USER_OFFER(x, "trial"),
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
    let T = "Active";
    return (
        E && (T = "Acked"),
        S && (T = "Expired"),
        (0, r.jsxs)("div", {
            className: y()(ss.Nr, N ? ss.Qf : ss.C1),
            children: [
                (0, r.jsx)("div", {
                    className: y()(ss.nM, ss.S7),
                    children: (0, r.jsx)(A.D, { variant: "heading-lg/semibold", color: "always-white", children: f }),
                }),
                (0, r.jsxs)(_.D, {
                    className: y()(ss.nM, ss.QB),
                    onClick: () => {
                        (0, ns.C)(x, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(C.E, { variant: "eyebrow", color: "always-white", children: ["Offer: ", x] }),
                        l
                            ? (0, r.jsx)(rP.A, { size: "md", color: "currentColor", className: ss.Kk })
                            : (0, r.jsx)(a4.T, { size: "xs", color: "currentColor", className: ss.Kk }),
                    ],
                }),
                (0, r.jsxs)(_.D, {
                    className: y()(ss.nM, ss.QB),
                    onClick: () => {
                        (0, ns.C)(v, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(C.E, { variant: "eyebrow", color: "always-white", children: ["Trial: ", v] }),
                        i
                            ? (0, r.jsx)(rP.A, { size: "md", color: "currentColor", className: ss.Kk })
                            : (0, r.jsx)(a4.T, { size: "xs", color: "currentColor", className: ss.Kk }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: ss.nM,
                    children: (0, r.jsxs)(C.E, {
                        variant: "eyebrow",
                        color: "always-white",
                        children: [
                            "Trial Length:",
                            " ",
                            (0, rV.re)({
                                intervalType: j?.interval ?? l9.WT.MONTH,
                                intervalCount: j?.interval_count ?? 1,
                                capitalize: !1,
                            }),
                        ],
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: ss.nM,
                    children: [
                        (0, r.jsxs)(C.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, rU.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, ni.Xm)(p),
                            onChange: (e) => {
                                I({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null });
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: ss.nM,
                    children: [
                        (0, r.jsx)(C.E, { variant: "eyebrow", color: "always-white", children: "Referrer ID:" }),
                        (0, r.jsx)("input", {
                            type: "text",
                            value: b?.id ?? "",
                            onChange: (e) => I({ referrerId: e.target.value }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: ss.fC,
                    children: [
                        (0, r.jsx)(_.D, {
                            onClick: k,
                            className: y()(ss.qS, ss.vk, { [ss.R1]: E, [ss._7]: S }),
                            children: (0, r.jsx)(C.E, {
                                variant: "eyebrow",
                                color: "Acked" === T ? void 0 : "always-white",
                                children: T,
                            }),
                        }),
                        null != g &&
                            (0, r.jsx)("div", {
                                className: y()(ss.qS, ss.k3),
                                children: (0, r.jsx)(C.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Redeemed",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(_.D, {
                    onClick: async () => {
                        u(!0), await rz(x, "trial"), n(), u(!1);
                    },
                    children: (0, r.jsx)(ne.u, { size: "md", color: "currentColor", className: y()(ss.Kk, ss.IT) }),
                }),
                (0, r.jsx)("div", { className: y()(ss.g4, { [ss.VP]: c || m }), children: (0, r.jsx)(eJ.y, {}) }),
            ],
        })
    );
}
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
    let { id: x, expiresAt: p, discountId: g, discount: v } = t,
        j =
            a.find((e) => {
                let { value: t } = e;
                return t === g;
            })?.label ?? "Unknown",
        b = null != p,
        f = t.hasExpired(),
        E = t.isApplied(),
        S = async () => {
            u(!0), b ? await N({ expiresAt: null }) : await (0, rG.u1)(void 0, t), n(), u(!1);
        },
        N = async (e) => {
            let { expiresAt: t } = e;
            u(!0);
            try {
                await nB.Bo.patch({
                    url: $.Rsh.UPDATE_USER_OFFER(x, "discount"),
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
    let k = "Active";
    return (
        f && (k = "Expired"),
        b && (k = "Acked"),
        (0, r.jsxs)("div", {
            className: y()(ss.Nr, ss.id),
            children: [
                (0, r.jsx)("div", {
                    className: y()(ss.nM, ss.S7),
                    children: (0, r.jsx)(A.D, { variant: "heading-lg/semibold", color: "text-default", children: j }),
                }),
                (0, r.jsxs)(_.D, {
                    className: y()(ss.nM, ss.QB),
                    onClick: () => {
                        (0, ns.C)(x, () => s(!0));
                    },
                    children: [
                        (0, r.jsxs)(C.E, { variant: "eyebrow", color: "text-default", children: ["Offer: ", x] }),
                        l
                            ? (0, r.jsx)(rP.A, { size: "md", color: "currentColor", className: y()(ss.Kk, ss.mK) })
                            : (0, r.jsx)(a4.T, { size: "xs", color: "currentColor", className: ss.Kk }),
                    ],
                }),
                (0, r.jsxs)(_.D, {
                    className: y()(ss.nM, ss.QB),
                    onClick: () => {
                        (0, ns.C)(g, () => d(!0));
                    },
                    children: [
                        (0, r.jsxs)(C.E, { variant: "eyebrow", color: "text-default", children: ["Discount: ", g] }),
                        i
                            ? (0, r.jsx)(rP.A, { size: "md", color: "currentColor", className: y()(ss.Kk, ss.mK) })
                            : (0, r.jsx)(a4.T, { size: "xs", color: "currentColor", className: ss.Kk }),
                    ],
                }),
                v?.amount != null &&
                    (0, r.jsx)("div", {
                        children: (0, r.jsxs)(C.E, {
                            variant: "eyebrow",
                            color: "text-default",
                            children: [v.amount, "% off"],
                        }),
                    }),
                (0, r.jsxs)("div", {
                    className: ss.nM,
                    children: [
                        (0, r.jsxs)(C.E, {
                            variant: "eyebrow",
                            color: "always-white",
                            children: ["Expires (", (0, rU.A)(), "):"],
                        }),
                        (0, r.jsx)("input", {
                            type: "datetime-local",
                            value: (0, ni.Xm)(p?.toISOString()),
                            onChange: (e) =>
                                N({ expiresAt: "" !== e.target.value ? new Date(e.target.value).toISOString() : null }),
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: ss.fC,
                    children: [
                        (0, r.jsx)(_.D, {
                            onClick: S,
                            className: y()(ss.qS, ss.vk, { [ss.R1]: b, [ss._7]: f }),
                            children: (0, r.jsx)(C.E, {
                                variant: "eyebrow",
                                color: "Acked" === k ? void 0 : "always-white",
                                children: k,
                            }),
                        }),
                        E &&
                            (0, r.jsx)("div", {
                                className: y()(ss.qS, ss.k3),
                                children: (0, r.jsx)(C.E, {
                                    variant: "eyebrow",
                                    color: "always-white",
                                    children: "Applied",
                                }),
                            }),
                    ],
                }),
                (0, r.jsx)(_.D, {
                    className: ss.aR,
                    onClick: async () => {
                        u(!0), await rz(x, "discount"), n(), u(!1);
                    },
                    children: (0, r.jsx)(ne.u, { size: "md", color: "currentColor", className: y()(ss.Kk, ss.fy) }),
                }),
                (0, r.jsx)("div", { className: y()(ss.g4, { [ss.VP]: c || m }), children: (0, r.jsx)(eJ.y, {}) }),
            ],
        })
    );
}
function rQ() {
    let [e, t] = o.useState([]),
        [a, n] = o.useState([]),
        [l, s] = o.useState(),
        [i, c] = o.useState(),
        [u, m] = o.useState([]),
        [p, g] = o.useState([]),
        [v, j] = o.useState(!0),
        [b, f] = o.useState(10080),
        [y, _] = o.useState([]),
        { entitlements: E, deleteFractionalPremium: S, refreshEntitlementList: N } = sn();
    o.useEffect(() => {
        N();
    }, [N]),
        o.useEffect(() => {
            _(E.filter((e) => e.sourceType === $.GD.REVERSE_TRIAL && null != e.endsAt && e.endsAt > new Date()));
        }, [E]),
        o.useEffect(() => {
            (0 === e.length || 0 === a.length || v) &&
                r$().then((e) => {
                    let a = Object.keys(e.trial).map((t) => ({ label: t, value: e.trial[t] })),
                        r = Object.keys(e.discount).map((t) => ({ label: t, value: e.discount[t] }));
                    t(a), n(r), null == l && s(a[0].value), null == i && c(r[0].value);
                });
        }, [e, a, l, i, v]),
        o.useEffect(() => {
            v &&
                (j(!1),
                rF.A.forceReset(),
                (0, rG._D)(),
                rH().then((e) => {
                    m(e.trial.sort((e, t) => e.id.localeCompare(t.id))),
                        g(e.discount.sort((e, t) => e.id.localeCompare(t.id)));
                }));
        }, [v]);
    let k = async () => {
            null != l && (await rW(l, "trial"), j(!0));
        },
        I = async () => {
            null != i && (await rW(i, "discount"), j(!0));
        },
        T = async () => {
            await rK(), j(!0);
        },
        D = async () => {
            let e = new Date(Date.now() + 60 * b * 1e3).toISOString();
            await rY(e), N();
        };
    return (0, r.jsx)(d.Ip, {
        className: tS.nd,
        children: (0, r.jsxs)("div", {
            className: ss.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: ss.uW,
                    children: [
                        (0, r.jsx)(A.D, { variant: "heading-md/semibold", children: "Utils" }),
                        (0, r.jsxs)("div", {
                            className: ss.Uo,
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear all User Offers",
                                    onClick: T,
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Mobile Trials DismissibleContent",
                                    onClick: () => (0, lh.xB)(n1.M.PREMIUM_MOBILE_TRIAL_USER_SETTINGS_AVATAR_BADGE),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: "Clear Offer Nagbar DismissibleContent",
                                    onClick: () => (0, lh._N)(n1.M.NAGBAR_NOTICE_OFFER_EXPIRING),
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
                    className: ss.uW,
                    children: (0, r.jsxs)("div", {
                        className: ss.bd,
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
                            (0, r.jsx)(h.$, { variant: "primary", text: "Create", onClick: k }),
                        ],
                    }),
                }),
                (0, r.jsx)("section", {
                    className: ss.uW,
                    children: (0, r.jsxs)("div", {
                        className: ss.bd,
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
                            (0, r.jsx)(h.$, { variant: "primary", text: "Create", onClick: I }),
                        ],
                    }),
                }),
                u.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: ss.uW,
                        children: [
                            (0, r.jsx)(A.D, { variant: "heading-md/semibold", children: "Existing Trial Offers" }),
                            u.map((t) =>
                                (0, r.jsx)(rq, { offer: t, offerOptions: e, forceRefetch: () => j(!0) }, t.id),
                            ),
                        ],
                    }),
                p.length > 0 &&
                    (0, r.jsxs)("section", {
                        className: ss.uW,
                        children: [
                            (0, r.jsx)(A.D, { variant: "heading-md/semibold", children: "Existing Discount Offers" }),
                            p.map((e) =>
                                (0, r.jsx)(rJ, { offer: e, offerOptions: a, forceRefetch: () => j(!0) }, e.id),
                            ),
                        ],
                    }),
                (0, r.jsx)("section", {
                    className: ss.uW,
                    children: (0, r.jsxs)("div", {
                        className: ss.bd,
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
                            (0, r.jsx)(h.$, { variant: "primary", text: "Create", onClick: D }),
                        ],
                    }),
                }),
                y.length > 0 &&
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(C.E, {
                                style: { marginTop: "15px" },
                                variant: "text-md/bold",
                                children: "Active reverse trial",
                            }),
                            (0, r.jsx)("div", {
                                children: y.map((e) =>
                                    (0, r.jsx)(sr, { entitlement: e, active: !0, onDelete: () => S(e.id) }, e.id),
                                ),
                            }),
                        ],
                    }),
            ],
        }),
    });
}
var rX = a(935462),
    rZ = a(260598),
    r0 = a(93688),
    r1 = a(717400),
    r2 = a(676955),
    r8 = a(31300),
    r3 = a(500060),
    r6 = a(391973),
    r5 = a(684013),
    r4 = a(765671),
    r9 = a(235986),
    r7 = a(742589),
    oe = a(41984),
    ot = a(181435),
    oa = a(435736),
    on = a(296027),
    ol = a(515183),
    os = a(489277),
    oi = a(127242),
    or = a(869014),
    oo = a(528772),
    od = a(38502),
    oc = a(532624),
    ou = a(773371),
    om = a(996439),
    oh = a(350535),
    ox = a(9302),
    op = a(644434),
    og = a(618137);
let ov = {
        [$.uss.CLICK_ZONE_DEBUG]: (e) => ({
            type: $.uss.CLICK_ZONE_DEBUG,
            id: (0, eu.A)(),
            layoutId: e,
            anchor: { top: 0.35, right: 0.35 },
            size: { width: 100, height: 100 },
            ...od.A.getWidgetDefaultSettings($.uss.CLICK_ZONE_DEBUG),
            pinned: !0,
        }),
        [$.uss.PERFORMANCE_DEBUG]: (e) => ({
            type: $.uss.PERFORMANCE_DEBUG,
            id: (0, eu.A)(),
            layoutId: e,
            anchor: { top: 0.1, right: 0.1 },
            size: { fixed: !1, width: "auto", height: "auto" },
            ...od.A.getWidgetDefaultSettings($.uss.PERFORMANCE_DEBUG),
            pinned: !0,
        }),
    },
    oj = {};
function ob(e) {
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
        (0, r.jsxs)(a5.$n, {
            look: a5.$n.Looks.LINK,
            color: a5.$n.Colors.LINK,
            size: a5.$n.Sizes.MIN,
            onClick: function () {
                (0, ns.C)(t, () => n(!0));
            },
            className: og.DT,
            children: ["Application Id: ", t, " ", a ? aH.intl.string(aH.t.t5VZ88) : null],
        })
    );
}
let of = o.memo(function (e) {
        let { trackedGame: t } = e,
            a = (0, k.bG)([aU.Ay], () => aU.Ay.getGameOrTransformedSubgameForPID(t.pid)),
            n = (0, k.bG)([aW.A], () => aW.A.getGameForPID(t.pid)),
            l = (0, k.bG)([aU.Ay], () => (null == a ? null : aU.Ay.getGameOverlayStatus(a)));
        return (0, r.jsxs)("div", {
            className: og.st,
            children: [
                (0, r.jsx)(C.E, { variant: "text-md/bold", color: "text-strong", children: t.gameName }),
                (0, r.jsx)(C.E, { variant: "text-sm/bold", color: "text-subtle", children: t.pid }),
                (0, r.jsx)(C.E, { variant: "text-sm/normal", color: "text-subtle", children: a?.exeName }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["isLauncher: ", a?.isLauncher ? "Yes" : "No"],
                }),
                null != t.applicationId &&
                    (0, r.jsx)(C.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: (0, r.jsx)(ob, { id: t.applicationId }),
                    }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["fullscreenType: ", (0, ol.wR)(t.fullscreenType)],
                }),
                (0, r.jsxs)(C.E, { variant: "text-sm/normal", color: "text-default", children: ["state: ", t.state] }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["successfullyShown: ", t.successfullyShown ? "Yes" : "No"],
                }),
                (0, r.jsxs)("div", {
                    className: og.st,
                    children: [
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["source: ", t.source],
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["legacyEnabled: ", t.legacyEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["oopEnabled: ", t.oopEnabled ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: ["overlayMethod: ", (0, ol.gK)(t.overlayMethod)],
                        }),
                    ],
                }),
                null != l &&
                    (0, r.jsxs)("div", {
                        className: og.st,
                        children: [
                            (0, r.jsxs)(C.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw source: ", l.source],
                            }),
                            (0, r.jsxs)(C.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledLegacy: ", l.enabledLegacy ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(C.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw enabledOOP: ", l.enabledOOP ? "Yes" : "No"],
                            }),
                            (0, r.jsxs)(C.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: ["raw overlayMethod: ", (0, ol.gK)(l.overlayMethod)],
                            }),
                        ],
                    }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hidden: ", a?.hidden ? "Yes" : "No"],
                }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["hook: ", n?.hook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlay: ", n?.overlay ? "Yes" : "No"],
                }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["overlayCompatibilityHook: ", n?.overlayCompatibilityHook ? "Yes" : "No"],
                }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: ["supportsOutOfProcessOverlay: ", n?.supportsOutOfProcessOverlay ? "Yes" : "No"],
                }),
            ],
        });
    }),
    oy = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, k.cf)([ou.default], () => ou.default.getOverlayPIDStatuses()),
            n = (0, k.cf)([on.default], () => on.default.getTrackedGames()),
            l = (0, k.bG)([ou.default], () => ou.default.isInputLocked(t), [t]),
            s = (0, k.bG)([ou.default], () => ou.default.DEV_isInputLockedV3(t), [t]),
            i = (0, k.bG)([ou.default], () => ou.default.DEV_isInputLocked(t), [t]),
            o = (0, k.bG)([ou.default], () => ou.default.isReady(t), [t]);
        return (0, r.jsxs)("div", {
            className: og.st,
            children: [
                (0, r.jsx)(C.E, { variant: "text-md/semibold", color: "text-strong", children: `${t}` }),
                (0, r.jsxs)(C.E, {
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
                (0, r.jsxs)(C.E, {
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
                (0, r.jsxs)(C.E, {
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
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["Bridge Status: ", a.get(Number(t))],
                }),
                (0, r.jsxs)(C.E, { variant: "text-sm/normal", color: "text-strong", children: ["isInputLocked: ", l] }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV3: ", s],
                }),
                (0, r.jsxs)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: ["isInputLockedV2: ", i],
                }),
                (0, r.jsxs)(C.E, { variant: "text-sm/normal", color: "text-strong", children: ["isReady: ", o] }),
            ],
        });
    });
function o_(e) {
    let t,
        a = ((t = Object.values((0, k.yK)([od.A], () => od.A.getWidgetsForLayout(op.G)))), t.find((t) => t.type === e));
    return [
        a,
        () => {
            if (null != a) (0, r6.uv)(a.id);
            else {
                let t = ov[e];
                if (null == t) return;
                let a = t(op.G);
                (0, r6.jn)(a);
            }
        },
    ];
}
function oC(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t ? `${e.toFixed(2)}ms` : (0, ni.i$)(a6()(e), "h:mm:ss.SSS");
}
let oE = o.memo(function (e) {
    let { pid: t, ...a } = e,
        n = (0, k.bG)([on.default], () => {
            if (null == t) return "Unknown";
            let e = on.default.getTrackedGameByPid(t)?.gameName;
            return null != e ? ((oj[t] = e), e) : (oj[t] ?? "Unknown");
        }, [t]);
    return (0, r.jsx)(C.E, { ...a, variant: "text-md/semibold", color: "text-strong", children: n });
});
function oS() {
    let e = (0, k.bG)([oi.A], () => oi.A.hasRenderDebugMode(oe.x7.TrackFocusPIDs)),
        t = (0, k.yK)([on.default], () => on.default.getDevToolsFocusedPidsWithTimestamp());
    return (0, r.jsxs)("div", {
        className: og.st,
        children: [
            (0, r.jsxs)("div", {
                className: og.Iv,
                children: [
                    (0, r.jsx)(tf.d, {
                        checked: e,
                        onChange: () =>
                            void r5.A.setRenderDebugMode(
                                !oi.A.hasRenderDebugMode(oe.x7.TrackFocusPIDs),
                                oe.x7.TrackFocusPIDs,
                            ),
                        label: "Track Focus Pids",
                    }),
                    (0, r.jsx)(_.D, {
                        className: og.LL,
                        onClick: () => r5.A.clearTrackedPids(),
                        children: (0, r.jsx)(ne.u, { size: "md", color: "currentColor" }),
                    }),
                ],
            }),
            (0, r.jsxs)(d.Ip, {
                className: y()(og.st, og.XG),
                children: [
                    0 === t.length &&
                        (0, r.jsx)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: "No recent focused pids",
                        }),
                    [...t].reverse().map((e) => {
                        let [t, a, n] = e;
                        return (0, r.jsx)(
                            o.Fragment,
                            {
                                children: (0, r.jsx)(lw.m, {
                                    position: "left",
                                    text: n === oe.su.TRACK_FOCUS ? "Tracked Focus Event" : "Clear Focus Event",
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsxs)(C.E, {
                                            variant: "text-sm/medium",
                                            color: n === oe.su.TRACK_FOCUS ? "text-default" : "text-feedback-critical",
                                            children: [
                                                (0, r.jsx)(oE, { pid: a, tag: "span" }),
                                                " - ",
                                                a?.toString() ?? "null",
                                                " @ ",
                                                oC(t),
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
let oN = o.memo(function (e) {
        let { pid: t } = e,
            a = (0, k.bG)([on.default, aU.Ay], () => {
                if (null == t) return null;
                let e = on.default.getTrackedGameByPid(t)?.fullscreenType;
                if (null != e) return e;
                let a = aU.Ay.getGameOrTransformedSubgameForPID(t);
                return a?.fullscreenType ?? lE.aI.UNKNOWN;
            }, [t]);
        return (0, r.jsxs)(C.E, {
            variant: "text-sm/normal",
            color: "text-subtle",
            tag: "span",
            children: ["Original Screen Type: ", null != a ? (0, ol.wR)(a) : "Unknown"],
        });
    }),
    oA = o.memo(function () {
        let e = (0, k.cf)([on.default], () => on.default.getTrackedGames()),
            [t, a] = o.useState({}),
            n = o.useRef(null);
        return (
            o.useEffect(
                () => (
                    (n.current = setInterval(async () => {
                        let e = aU.Ay.getRunningGames(),
                            t = [],
                            n = Date.now();
                        for (let a of e) t.push((0, ol.E1)(a.pid, 0).then((e) => [a.pid, e, n]));
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
                    }, +nV.A.Millis.SECOND)),
                    () => clearInterval(n.current)
                ),
                [],
            ),
            (0, r.jsx)(lw.m, {
                position: "left",
                text: "The most recent screen types we've logged, indexed by pid",
                children: (0, r.jsx)("div", {
                    children: (0, r.jsxs)(d.Ip, {
                        className: y()(og.st, og.XG),
                        children: [
                            0 === Object.keys(e).length &&
                                (0, r.jsx)(C.E, {
                                    variant: "text-sm/normal",
                                    color: "text-default",
                                    children: "No recent screen types",
                                }),
                            Object.values(e).map((e) =>
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        children: [
                                            (0, r.jsx)(oE, { tag: "div", pid: e.pid }),
                                            (0, r.jsx)(oN, { pid: e.pid }),
                                            null != t[e.pid] &&
                                                [...t[e.pid]].reverse().map((t) => {
                                                    let { screenType: a, timestamp: n } = t;
                                                    return (0, r.jsx)(
                                                        C.E,
                                                        {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            children: `${a}:${(0, ol.wR)(a)} @ ${oC(n)}`,
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
    ok = o.memo(function () {
        let e = (0, k.cf)([on.default], () => on.default.getTrackedGames()),
            t = (0, ox.getPID)(),
            a = (0, k.bG)([on.default], () => on.default.isOverlayOOPEnabledForPid(t), [t]),
            [n, l] = (0, k.yK)([oo.A], () => [oo.A.enabled, oo.A.keepOpen]),
            s = (0, k.bG)([ou.default], () => ou.default.getFocusedPID()),
            i = (0, k.bG)([ou.default], () => ou.default.isFocusedPidOutOfProcess());
        return (0, r.jsxs)("div", {
            className: og.st,
            children: [
                0 === Object.keys(e).length &&
                    (0, r.jsx)(C.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        children: "No tracked game times",
                    }),
                Object.values(e).map((e) => (0, r.jsx)(oy, { pid: e.pid }, e.pid)),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["focusedPID: ", s?.toString() ?? "null"],
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isFocusedPidOutOfProcess: ", i ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            children: ["processPid: ", t?.toString() ?? "unknown"],
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["isOOPEnabledForPid: ", a ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.enabled: ", n ? "Yes" : "No"],
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ["SoundboardOverlay.keepOpen: ", l ? "Yes" : "No"],
                        }),
                    ],
                }),
            ],
        });
    }),
    oI = [
        {
            mode: oe.x7.ClickZones,
            label: "Click Zone Debug Mode",
            tooltip: "Enables a red border around click zones to help with debugging.",
        },
        {
            mode: oe.x7.WidgetAreas,
            label: "Render Debug Mode",
            tooltip:
                "Enables a border around any widgets that are rendered on screen that are pinned (even if they are hidden). Blue = pinned widgets, Gray = unpinned widgets",
        },
        {
            mode: oe.x7.WindowContainer,
            label: "Window Container Debug Mode",
            tooltip: "Enables a border the overlay window",
        },
        {
            mode: oe.x7.DisabledGPUBoost,
            label: "Disable GPU Boost",
            tooltip: "Disables GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oe.x7.ForceGPUBoost,
            label: "Force GPU Boost",
            tooltip: "Forces GPU Boost, which can help with performance when games compete for GPU resources.",
        },
        {
            mode: oe.x7.OverlayRafManagerForceEnabled,
            label: "Overlay SmartRAF",
            tooltip: "Creates a widget that has a clickzone inside of it, which will show/hide every few seconds.",
        },
        {
            mode: oe.x7.LegacyOverlayLogging,
            label: "Legacy Overlay Logging",
            tooltip: "Enables legacy overlay logging, which will forward all legacy logging to the main apps console.",
        },
    ],
    oT = o.memo(function () {
        let [e, t] = o_($.uss.CLICK_ZONE_DEBUG),
            [a, n] = o_($.uss.PERFORMANCE_DEBUG),
            l = (0, k.bG)([oi.A], () => oi.A.getRenderDebugModes()),
            [s, i] = o.useState({});
        return (
            o.useEffect(() => {
                let e = setInterval(() => {
                    i({});
                }, 200);
                return () => clearInterval(e);
            }, []),
            (0, r.jsx)("div", {
                className: og.st,
                children: oI.map((s) => {
                    let i =
                            s.mode === oe.x7.OverlayRafManagerForceEnabled
                                ? `${s.label} (${or.A.getLastRAFCallbackReason()})`
                                : s.label,
                        d = () =>
                            s.mode === oe.x7.ClickZones
                                ? null != e
                                : s.mode === oe.x7.WidgetAreas
                                  ? null != a
                                  : l.has(s.mode);
                    return (0, r.jsx)(
                        o.Fragment,
                        {
                            children: (0, r.jsx)(tf.d, {
                                checked: d(),
                                onChange: () => {
                                    var e;
                                    let a = d();
                                    s.mode === oe.x7.ClickZones && t(),
                                        s.mode === oe.x7.WidgetAreas && n(),
                                        (e = s.mode),
                                        r5.A.setRenderDebugMode(!a, e);
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
    oD = o.memo(function () {
        let e = (0, k.cf)([on.default], () => on.default.getTrackedGames()),
            t = (0, k.bG)([aU.Ay], () => aU.Ay.getRunningGames()).filter((t) => null == e[t.pid]);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                t.length > 0 &&
                    (0, r.jsx)(lw.m, {
                        position: "left",
                        text: "Games that are running but not tracked by the overlay",
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsxs)("div", {
                                className: og.st,
                                children: [
                                    (0, r.jsx)(C.E, {
                                        variant: "text-md/bold",
                                        color: "text-feedback-critical",
                                        children: "Untracked Running Games",
                                    }),
                                    t.map((e) =>
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)(
                                                    C.E,
                                                    {
                                                        variant: "text-sm/normal",
                                                        color: "text-feedback-critical",
                                                        children: `${e.pid} - ${e.name} (${e.exeName})`,
                                                    },
                                                    e.pid,
                                                ),
                                                (0, r.jsx)(oN, { pid: e.pid }),
                                            ],
                                        }),
                                    ),
                                ],
                            }),
                        }),
                    }),
                (0, r.jsx)(lw.m, {
                    position: "left",
                    text: "The current running games process information",
                    children: (0, r.jsx)("div", {
                        children: (0, r.jsxs)("div", {
                            className: og.st,
                            children: [
                                0 === Object.keys(e).length &&
                                    (0, r.jsx)(C.E, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: "No running games",
                                    }),
                                Object.values(e).map((e) => (0, r.jsx)(of, { trackedGame: e }, e.pid)),
                            ],
                        }),
                    }),
                }),
            ],
        });
    }),
    oO = o.memo(function () {
        let e = (0, k.bG)([on.default], () => on.default.getForcedRenderMode()),
            [t, a] = o.useState(e),
            n = [
                { label: oe.V6.UNSET, value: oe.V6.UNSET, id: oe.V6.UNSET },
                { label: oe.V6.IN_PROCESS_V2, value: oe.V6.IN_PROCESS_V2, id: oe.V6.IN_PROCESS_V2 },
                { label: oe.V6.OUT_OF_PROCESS_V3, value: oe.V6.OUT_OF_PROCESS_V3, id: oe.V6.OUT_OF_PROCESS_V3 },
                {
                    label: oe.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    value: oe.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                    id: oe.V6.OUT_OF_PROCESS_V3_LIMITED_INTERACTION,
                },
            ].map((t) => ({ ...t, label: `${t.label} ${e === t.value ? "(current)" : ""}` }));
        return (0, r.jsx)(x.l, {
            label: "Override the overlay render mode",
            value: t,
            options: n,
            onSelectionChange: (e) => {
                a(e), r5.A.forceRenderMode(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        });
    });
function oR(e) {
    let { modalProps: t, onClose: a } = e,
        [n, l] = o.useState(null);
    function s() {
        a(null);
    }
    return (0, r.jsxs)(rX.EO, {
        size: rX.rI.LARGE,
        "aria-label": "Breadcrumb Import",
        ...t,
        transitionState: t.transitionState,
        parentComponent: "BreadcrumbImportPanel",
        children: [
            (0, r.jsxs)(rX.rQ, {
                align: r9.A.Align.CENTER,
                justify: r9.A.Justify.BETWEEN,
                children: [
                    (0, r.jsx)(C.E, {
                        variant: "text-md/bold",
                        color: "text-feedback-critical",
                        children: "Breadcrumb Import",
                    }),
                    (0, r.jsx)(rX.s_, { onClick: s }),
                ],
            }),
            (0, r.jsx)(rX.$m, {
                children: (0, r.jsx)("div", {
                    className: og.st,
                    children: (0, r.jsx)(rZ.f, { label: "Paste JSON Here", onChange: l, value: n ?? "", rows: 12 }),
                }),
            }),
            (0, r.jsx)(rX.jl, {
                children: (0, r.jsxs)(lQ.e, {
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
let ow = {
    native: { label: "Native", filter: (e) => e.type === ot.ON.NativeLegacy || e.type === ot.ON.NativeOOP },
    render: { label: "Render", filter: (e) => e.type === ot.ON.Renderer },
    flux: { label: "Flux", filter: (e) => e.type === ot.ON.Flux },
    client: { label: "Client", filter: (e) => e.type === ot.ON.OOPModule || e.type === ot.ON.LegacyModule },
};
function oM(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ot.QJ.Info;
    if (t === ot.QJ.Error) return "var(--text-feedback-critical)";
    switch (e) {
        case ot.ON.NativeLegacy:
            return "var(--yellow-500)";
        case ot.ON.NativeOOP:
            return "var(--green-500)";
        case ot.ON.Flux:
            return "var(--brand-400)";
        case ot.ON.Renderer:
            return "var(--brand-500)";
        case ot.ON.LegacyModule:
            return "var(--yellow-300)";
        case ot.ON.OOPModule:
            return "var(--green-300)";
        default:
            return "var(--gray-400)";
    }
}
let oL = [
    {
        key: "type",
        cellClassName: og.SZ,
        renderHeader: () => null,
        render(e) {
            let { type: t, logType: a } = e,
                n = oP(t);
            return (0, r.jsx)("div", {
                className: og.g$,
                style: { color: oM(t, a) },
                children: (0, r.jsx)(n, { color: "currentColor", size: "sm" }),
            });
        },
    },
    {
        key: "name",
        cellClassName: og.Cm,
        render(e) {
            let { name: t, type: a, logType: n } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(C.E, {
                        variant: "text-md/normal",
                        color: (function (e) {
                            switch (e) {
                                case ot.QJ.Info:
                                    return "text-strong";
                                case ot.QJ.Warning:
                                    return "text-feedback-warning";
                                case ot.QJ.Error:
                                    return "text-feedback-critical";
                                default:
                                    return "text-subtle";
                            }
                        })(n),
                        children: t,
                    }),
                    (0, r.jsxs)(C.E, { variant: "text-sm/normal", color: "text-subtle", children: ["(", a, ")"] }),
                ],
            });
        },
    },
    {
        key: "timestamp",
        cellClassName: og.DK,
        render(e) {
            let { timestamp: t } = e;
            return (0, ni.i$)(a6()(t), "h:mm:ss.SSS");
        },
    },
];
function oP(e) {
    switch (e) {
        case ot.ON.NativeLegacy:
            return r0.W;
        case ot.ON.NativeOOP:
            return r1.q;
        case ot.ON.Renderer:
        case ot.ON.Flux:
            return r2.v;
        case ot.ON.LegacyModule:
            return r8.k;
        case ot.ON.OOPModule:
            return r3.o;
        default:
            return r8.k;
    }
}
function oU(e) {
    return JSON.stringify(e, (e, t) => (void 0 === t ? null : t), 2);
}
let oG = ["__webpack_require__", "fn"],
    oB = ["web.js", "web.js.map"],
    oF = [
        {
            id: "details",
            name: "Details",
            group: aD.fu.NONE,
            render: (e) => {
                let { breadcrumb: t, onClose: a } = e,
                    { name: n, type: l, logType: s, nativeId: i, stack: o, data: c, timestamp: u, pid: m } = t,
                    h = a6()(u),
                    x = oP(l);
                return (0, r.jsxs)(d.Ar, {
                    className: og.bW,
                    children: [
                        (0, r.jsxs)(r7.A, {
                            className: y()(tS.jr, og.nZ),
                            children: [
                                (0, r.jsx)("div", {
                                    style: { color: oM(l, s) },
                                    className: og.nr,
                                    children: (0, r.jsx)(x, { color: "currentColor", size: "sm" }),
                                }),
                                (0, r.jsxs)(r7.A.Title, {
                                    wrapperClassName: og.qd,
                                    children: [
                                        n,
                                        " (",
                                        l,
                                        ")",
                                        (0, r.jsx)(_.D, {
                                            tag: "span",
                                            className: og.KE,
                                            onClick: () => (0, ns.C)(n),
                                            children: (0, r.jsx)(a4.T, { color: "currentColor", size: "sm" }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(r7.A.Icon, {
                                    icon: a4.T,
                                    tooltip: "Copy all properties",
                                    onClick: () => {
                                        (0, ns.C)(oU(t));
                                    },
                                }),
                                (0, r.jsx)(r7.A.Icon, { icon: a7.a, tooltip: "Close", onClick: a }),
                            ],
                        }),
                        (0, r.jsxs)(nv, {
                            className: og.ZK,
                            children: [
                                (0, r.jsx)(nj, {
                                    name: "Timestamp",
                                    copyValue: h.toISOString(),
                                    children: (0, r.jsx)("time", {
                                        dateTime: h.toISOString(),
                                        title: (0, ni.i$)(h, "LLLL"),
                                        children: (0, ni.i$)(h, "L h:mm:ss.SSS"),
                                    }),
                                }),
                                (0, r.jsx)(nj, {
                                    name: "Log Type",
                                    copyValue: s,
                                    children: (0, r.jsx)("code", { children: s }),
                                }),
                                (0, r.jsx)(nj, {
                                    name: "PID",
                                    copyValue: m?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: m?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nj, {
                                    name: "Native ID",
                                    copyValue: i?.toString() ?? "null",
                                    children: (0, r.jsx)("code", { children: i?.toString() ?? "null" }),
                                }),
                                (0, r.jsx)(nj, {
                                    name: "Data",
                                    copyValue: oU(c),
                                    children: (0, r.jsx)("code", { children: oU(c) }),
                                }),
                                null != o &&
                                    (0, r.jsx)(nj, {
                                        name: "Stack Trace",
                                        copyValue: o,
                                        children: (0, r.jsx)("code", {
                                            children: o.split("\n").map((e, t) => {
                                                let a = e.match(/at (.*) \((.*):(\d+):(\d+)\)/);
                                                if (null != a) {
                                                    let [, e, n, l, s] = a,
                                                        i = n.split(/[\\/]/).pop();
                                                    return oG.includes(e.trim())
                                                        ? null
                                                        : (0, r.jsxs)(
                                                              "div",
                                                              {
                                                                  children: [
                                                                      (0, r.jsx)("span", {
                                                                          className: og.e0,
                                                                          children: e.trim(),
                                                                      }),
                                                                      !oB.includes(i ?? "") &&
                                                                          (0, r.jsxs)(r.Fragment, {
                                                                              children: [
                                                                                  " (",
                                                                                  (0, r.jsxs)("span", {
                                                                                      className: og.lz,
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
    oV = {
        searchType: nn.n.REGEX,
        searchStringGenerator: (e) => {
            let { name: t, type: a, stack: n, data: l } = e,
                s = [t, a, JSON.stringify(l)];
            return null != n && s.push(n), s;
        },
        throttleMs: 100,
    };
function o$() {
    let { ref: e, height: t } = (0, r4.Ay)(),
        a = (0, k.bG)([oi.A], () => oi.A.isModuleLoggingEnabled()),
        [n, l] = o.useState(a),
        [s, i] = o.useState(!1),
        [d, c] = o.useState(null),
        [u, m] = o.useState(Object.keys(ow)),
        [h, x] = (0, k.bG)([oi.A], () => oi.A.getOverlayLoggingBreadcrumbs(), [], om.D),
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
        E = o.useMemo(
            () =>
                0 === j
                    ? []
                    : v.filter((e) => {
                          if (s && null != d && e.timestamp < d) return !1;
                          for (let t of u) {
                              let { filter: a } = ow[t];
                              if (a(e)) return !0;
                          }
                          return !1;
                      }),
            [v, u, d, s, j],
        ),
        [S, N] = o.useState(E),
        [A, I] = o.useState(null),
        T = o.useMemo(() => v.find((e) => e.key === A), [v, A]),
        D = o.useCallback((e) => {
            N(e);
        }, []),
        { renderSelectedTab: O } = (0, aD.Ay)({ tabs: oF }, []);
    (0, nl.RT)(b, E, D, oV, [v]);
    let R = o.useCallback((e) => {
            l(e), r5.A.setModuleLogging(e);
        }, []),
        [w, M] = o.useState(!1),
        L = o.useRef(null),
        P = o.useCallback(() => {
            (0, ns.C)(JSON.stringify(E)), M(!0);
        }, [E]);
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
            g(null != e ? JSON.parse(e) : null);
        }, []),
        G = o.useCallback(
            (e) => {
                if (e) return g(null);
                (0, eS.openModal)(
                    (e) =>
                        (0, r.jsx)(oR, {
                            modalProps: e,
                            onClose: (t) => {
                                U(t), e.onClose();
                            },
                        }),
                    { modalKey: "breadcrumb-import-panel" },
                    eA.SY,
                );
            },
            [U],
        );
    return (0, r.jsxs)("div", {
        ref: e,
        className: og.rh,
        children: [
            (0, r.jsxs)("div", {
                className: og.st,
                children: [
                    (0, r.jsxs)("div", {
                        className: y()(og._V, og.XQ),
                        children: [
                            (0, r.jsx)("div", {
                                title: "Toggles the Polling of Native",
                                className: og.iR,
                                children: (0, r.jsx)(rT.S, { label: "Poll Native", checked: n, onChange: (e) => R(e) }),
                            }),
                            (0, r.jsx)("div", {
                                title: "Only show breadcrumbs for active games",
                                className: og.iR,
                                children: (0, r.jsx)(rT.S, {
                                    label: "Only Active Games",
                                    checked: s,
                                    onChange: (e) => i(e),
                                }),
                            }),
                            (0, r.jsxs)(_.D, {
                                className: og.ny,
                                onClick: P,
                                children: [
                                    (0, r.jsx)(C.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: w ? "Copied" : "Copy All",
                                    }),
                                    w
                                        ? (0, r.jsx)(rP.A, { size: "sm", color: eN.A.unsafe_rawColors.GREEN_330.css })
                                        : (0, r.jsx)(a4.T, { color: "currentColor", size: "sm" }),
                                ],
                            }),
                            (0, r.jsx)(_.D, {
                                className: og.ny,
                                onClick: () => G(null != p),
                                children: (0, r.jsx)(C.E, {
                                    variant: "text-sm/normal",
                                    color: "currentColor",
                                    children: null != p ? "Clear" : "Import",
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: y()(og._V, og.XQ),
                        children: Object.entries(ow).map((e) => {
                            let [t, a] = e;
                            return (0, r.jsx)(
                                _.D,
                                {
                                    className: y()(og.pb, u.includes(t) && og.bx),
                                    onClick: () => {
                                        m((e) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]));
                                    },
                                    children: (0, r.jsx)(C.E, {
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
                        className: og._V,
                        children: (0, r.jsx)(nt.I, {
                            query: b,
                            onChange: f,
                            onClear: () => f(""),
                            placeholder: "Regex search by breadcrumb name and data",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: y()(og.st, og.CZ),
                children: (0, r.jsx)(tN, {
                    columns: oL,
                    data: S,
                    selectedRowKey: A ?? void 0,
                    onClickRow: (e) => I(e.key),
                }),
            }),
            null != T &&
                (0, r.jsx)(aT, {
                    className: y()(og.st, og.rf),
                    minHeight: 100,
                    initialHeight: null != t ? t / 3 : 300,
                    children: O({ breadcrumb: T, onClose: () => I(null) }),
                }),
        ],
    });
}
let oW = o.memo(function () {
        let e = (0, k.bG)([os.A], () => os.A.getPopoutInitializationStages());
        return (0, r.jsxs)("div", {
            className: og.st,
            children: [
                (0, r.jsx)("div", {
                    className: og.Iv,
                    children: (0, r.jsx)(C.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: "Popout Initialization Stages",
                    }),
                }),
                (0, r.jsx)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", { children: JSON.stringify(e, void 0, 2) }),
                }),
            ],
        });
    }),
    oz = o.memo(function () {
        let e = (0, k.bG)([oi.A], () => oi.A.isStateDebuggingEnabled()),
            t = (0, k.bG)([oi.A], () => oi.A.getDebuggingState());
        return (
            o.useEffect(
                () => (
                    r5.A.setStateDebugging(!0),
                    () => {
                        r5.A.setStateDebugging(!1);
                    }
                ),
                [],
            ),
            (0, r.jsxs)("div", {
                className: og.st,
                children: [
                    (0, r.jsx)("div", {
                        className: og.Iv,
                        children: (0, r.jsx)(tf.d, {
                            checked: e,
                            onChange: () => r5.A.setStateDebugging(!e),
                            label: "Poll Native Module State",
                        }),
                    }),
                    (0, r.jsx)(C.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: (0, r.jsx)("pre", { children: JSON.stringify(t, void 0, 2) }),
                    }),
                ],
            })
        );
    });
function oH() {
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsxs)("div", {
            className: y()(tS.nd, og.rf),
            children: [
                (0, r.jsx)(oT, {}),
                (0, r.jsx)(oO, {}),
                (0, r.jsx)(oD, {}),
                (0, r.jsx)(ok, {}),
                (0, r.jsx)(oS, {}),
                (0, r.jsx)(oA, {}),
                (0, r.jsx)(oW, {}),
                (0, r.jsx)(oz, {}),
            ],
        }),
    });
}
let oK = (e) => {
        switch (e) {
            case "Disabled":
                return;
            case "False":
                return !1;
            case "True":
                return !0;
        }
    },
    oY = (e) => (null == e ? "Disabled" : e ? "True" : "False"),
    oq = o.memo(function () {
        let e = (0, oa.wW)(),
            t = (0, k.bG)([oc.Ay], () => oc.Ay.getOverlayKeybind());
        return (0, r.jsxs)("div", {
            className: og.st,
            children: [
                (0, r.jsx)(A.D, { variant: "heading-lg/semibold", children: "Overlay Default Keybind Experiment" }),
                (0, r.jsx)(A.D, { variant: "heading-md/semibold", children: "Experiment State" }),
                (0, r.jsx)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: (0, r.jsx)("pre", {
                        children: JSON.stringify({ ...e, overlayKeybind: (0, oh.dI)(t.shortcut) }, void 0, 2),
                    }),
                }),
                (0, r.jsx)(A.D, { variant: "heading-md/semibold", children: "Overrides" }),
                (0, r.jsx)(x.l, {
                    label: "Overlay User Status",
                    description: "Override whether the current user was a new or existing user",
                    value: oY(e.overrideIsNewOverlayUser),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Existing user", value: "False", id: "False" },
                        { label: "New user", value: "True", id: "True" },
                    ],
                    onSelectionChange: (e) => {
                        (0, oa.sw)(oK(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(x.l, {
                    label: "Override Previous Keybind Status",
                    description: "Override whether the user's pre-experiment keybind was the default keybind",
                    value: oY(e.overrideIsUsingDefaultOverlayKeybind),
                    options: [
                        { label: "Disabled (no override)", value: "Disabled", id: "Disabled" },
                        { label: "Using default keybind", value: "True", id: "True" },
                        { label: "Not using default keybind", value: "False", id: "False" },
                    ],
                    onSelectionChange: (e) => {
                        (0, oa.C3)(oK(e));
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                (0, r.jsx)(A.D, { variant: "heading-md/semibold", children: "Actions" }),
                (0, r.jsx)(h.$, { size: "sm", text: "Reset isNewOverlayUser", onClick: () => (0, oa.xc)() }),
                (0, r.jsx)(h.$, {
                    size: "sm",
                    text: "Reset isUsingDefaultOverlayKeybind",
                    onClick: () => (0, oa.tM)(),
                }),
            ],
        });
    });
function oJ() {
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsx)("div", { className: y()(tS.nd, og.rf), children: (0, r.jsx)(oq, {}) }),
    });
}
function oQ() {
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
            className: y()(tS.nd, og.nd),
            children: [
                (0, r.jsxs)("div", {
                    className: og._V,
                    children: [
                        (0, r.jsx)(_.D, {
                            className: y()(og.k0, "state" === e && og.a),
                            onClick: () => t("state"),
                            children: (0, r.jsx)(C.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Client State",
                            }),
                        }),
                        (0, r.jsx)(_.D, {
                            className: y()(og.k0, "logging" === e && og.a),
                            onClick: () => t("logging"),
                            children: (0, r.jsx)(C.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Logging",
                            }),
                        }),
                        (0, r.jsx)(_.D, {
                            className: y()(og.k0, "experiments" === e && og.a),
                            onClick: () => t("experiments"),
                            children: (0, r.jsx)(C.E, {
                                variant: "text-md/medium",
                                color: "currentColor",
                                children: "Experiments",
                            }),
                        }),
                    ],
                }),
                "state" === e && (0, r.jsx)(oH, {}),
                "logging" === e && (0, r.jsx)(o$, {}),
                "experiments" === e && (0, r.jsx)(oJ, {}),
            ],
        })
    );
}
var oX = a(488428),
    oZ = a(73825),
    o0 = a(753390),
    o1 = a(663288),
    o2 = a(944304),
    o8 = a(300233),
    o3 = a(599941),
    o6 = a(817649),
    o5 = a(4630),
    o4 = a(44120),
    o9 = a(532794),
    o7 = a(216678),
    de = a(194509),
    dt = a(761705),
    da = a(65738),
    dn = a(265768);
function dl(e) {
    let { selectedGuildForGuildSub: t } = e,
        a = (0, o3.uk)(t?.id)[0];
    return null != t && null != a
        ? (0, r.jsx)("div", {
              children: a.subscription_listings_ids.map((e) =>
                  (0, r.jsx)(o6.A, { guildId: t.id, groupListingId: e, listingId: e }, e),
              ),
          })
        : null;
}
let ds = function () {
    let [e, t] = o.useState(l9.pe.TIER_2),
        [a, n] = o.useState(null),
        l = (0, k.yK)([aV.A], () => aV.A.getGuildsArray()),
        [s] = (0, k.yK)([rO.A], () => [rO.A.getPremiumSubscription()]),
        i = l.map((e) => ({ id: e.id, value: e, label: e.name })),
        [c, m] = o.useState(i.length > 0 ? i[0].value : null),
        [g, v] = o.useState(""),
        [j, b] = o.useState({ plan_id: l9.gD.PREMIUM_MONTH_TIER_2, gift: "true" }),
        f = "true" !== j.gift && null != s,
        [y, _] = o.useState(i.length > 0 ? i[0].value : null),
        { analyticsLocations: E } = (0, aw.Ay)(ts.A.PAYMENT_FLOW_TEST_PAGE),
        [N, A] = o.useState(""),
        [I, T] = o.useState($.dJq),
        { balance: D, isFetching: O, error: R } = (0, dt.W)(),
        { isSubmitting: w, responseMessage: M, redeemVirtualCurrency: L } = (0, dt.Q)(),
        [P, U] = o.useState($.dJq),
        [G, B] = o.useState(""),
        [F, V] = o.useState($.dJq),
        [W, z] = o.useState($.dJq);
    return (0, r.jsx)(aw.f5, {
        value: E,
        children: (0, r.jsx)(d.Ip, {
            className: dn.XG,
            children: (0, r.jsxs)(S.B, {
                direction: "vertical",
                gap: 24,
                children: [
                    (0, r.jsxs)(S.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Gift",
                                value: e,
                                options: [
                                    { id: "tier_2", value: l9.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: l9.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: l9.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => t(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(de.A, {
                                subscriptionTier: e,
                                premiumModalAnalyticsLocation: {},
                                color: a5.XD.PRIMARY,
                                look: a5.pR.FILLED,
                            }),
                        ],
                    }),
                    (0, r.jsx)(aO.c, {}),
                    (0, r.jsxs)(S.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Premium Select Plan",
                                value: a,
                                options: [
                                    { id: "tier_2", value: l9.pe.TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: l9.pe.TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: l9.pe.TIER_0, label: "Nitro Basic" },
                                    { id: "none", value: null, label: "None" },
                                ],
                                onSelectionChange: (e) => n(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Select Plan",
                                onClick: () => (0, o9.A)({ subscriptionTier: a, analyticsLocations: E }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(aO.c, {}),
                    (0, r.jsxs)(S.B, {
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
                                ? (0, r.jsx)(o2.A, { guild: c, analyticsLocation: {} })
                                : (0, r.jsx)("div", { children: "No Guild to boost" }),
                        ],
                    }),
                    (0, r.jsx)(aO.c, {}),
                    (0, r.jsxs)(S.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsx)(ia.Anchor, {
                                href: "https://i.dis.gd/createPromo",
                                children: "How to create promotion",
                            }),
                            (0, r.jsxs)(S.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(p.k, {
                                        label: "Standalone: Trial Promotion Redemption",
                                        placeholder: "Promotion Code",
                                        value: g,
                                        onChange: (e) => v(e),
                                    }),
                                    (0, r.jsx)(lw.m, {
                                        text: "Need Promotion Code",
                                        shouldShow: g.length < 1,
                                        children: (0, r.jsx)(h.$, {
                                            variant: "primary",
                                            text: "Open Link",
                                            disabled: g.length < 1,
                                            onClick: () => {
                                                window.open($.BVt.BILLING_PROMOTION_REDEMPTION(g));
                                            },
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(aO.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Standalone: Gift/Subscription Purchase",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Plan",
                                value: j.plan_id,
                                options: [
                                    { id: "tier_2", value: l9.gD.PREMIUM_MONTH_TIER_2, label: "Nitro" },
                                    { id: "tier_1", value: l9.gD.PREMIUM_MONTH_TIER_1, label: "Nitro Classic" },
                                    { id: "tier_0", value: l9.gD.PREMIUM_MONTH_TIER_0, label: "Nitro Basic" },
                                ],
                                onSelectionChange: (e) => {
                                    b((t) => ({ ...t, plan_id: e }));
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
                                    b((t) => ({ ...t, gift: e }));
                                },
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                        ],
                    }),
                    (0, r.jsx)(lw.m, {
                        text: "Already subscribed",
                        shouldShow: f,
                        children: (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Open Link",
                            disabled: f,
                            onClick: () => {
                                window.open($.BVt.BILLING_PREMIUM_SUBSCRIBE + "?" + oX.stringify({ ...j }));
                            },
                        }),
                    }),
                    (0, r.jsx)(aO.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Redeem Virtual Currency for SKU",
                        children: [
                            (0, r.jsxs)(S.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(C.E, {
                                        variant: "text-sm/normal",
                                        children: "Virtual Currency Balance:",
                                    }),
                                    O
                                        ? (0, r.jsx)("div", {
                                              className: dn.wG,
                                              children: (0, r.jsx)(eJ.y, { type: eJ.t.SPINNING_CIRCLE }),
                                          })
                                        : (0, r.jsxs)("div", {
                                              className: dn.dB,
                                              children: [
                                                  null !== R &&
                                                      (0, r.jsxs)(C.E, {
                                                          variant: "text-sm/normal",
                                                          children: [
                                                              "Error fetching Virtual Currency Balance: ",
                                                              R.message,
                                                          ],
                                                      }),
                                                  (0, r.jsx)(da.Gy, {
                                                      balance: D ?? 0,
                                                      balanceWidgetMode: da.k7.SELECTED,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                            (0, r.jsx)(p.k, {
                                label: "SKU ID",
                                placeholder: "SKU ID",
                                value: P,
                                onChange: (e) => U(e),
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Redeem Virtual Currency for SKU",
                                loading: w,
                                onClick: () => L(P, (0, eu.A)()),
                            }),
                            null != M && (0, r.jsx)(C.E, { variant: "text-sm/normal", children: M }),
                        ],
                    }),
                    (0, r.jsx)(aO.c, {}),
                    (0, r.jsxs)(u.n, {
                        label: "Creator Revenue",
                        children: [
                            (0, r.jsx)(x.l, {
                                label: "Premium Server Subscription For",
                                value: y,
                                options: i,
                                onSelectionChange: (e) => _(e),
                                selectionMode: "single",
                                fullWidth: !0,
                            }),
                            (0, r.jsx)(o8.H, {
                                guildId: y?.id,
                                children: (0, r.jsx)(dl, { selectedGuildForGuildSub: y }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(aO.c, {}),
                    (0, r.jsxs)(S.B, {
                        direction: "vertical",
                        gap: 8,
                        children: [
                            (0, r.jsxs)(u.n, {
                                label: "Activities & Application Payment Modals",
                                children: [
                                    (0, r.jsx)(p.k, {
                                        label: "Application Id",
                                        placeholder: "Application Id",
                                        value: N,
                                        onChange: A,
                                    }),
                                    (0, r.jsx)(p.k, {
                                        label: "Sku Id",
                                        placeholder: "Sku Id",
                                        value: I,
                                        onChange: (e) => T(e),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(h.$, {
                                variant: "primary",
                                text: "Open App Subs Modal for Activity",
                                onClick: () =>
                                    (0, o5.openIAPPurchaseModal)({
                                        applicationId: N,
                                        skuId: I,
                                        openPremiumPaymentModal: () => !0,
                                        analyticsLocations: [],
                                        analyticsLocationObject: { page: $.liQ.IN_APP },
                                        context: $.BRT.APP,
                                    }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(aO.c, {}),
                    (0, r.jsx)(S.B, {
                        direction: "vertical",
                        gap: 8,
                        children: (0, r.jsx)(u.n, {
                            label: "Standard Payment Modal Test",
                            children: (0, r.jsxs)(S.B, {
                                direction: "horizontal",
                                gap: 8,
                                align: "end",
                                children: [
                                    (0, r.jsx)(p.k, {
                                        label: "Application Id",
                                        hideLabel: !0,
                                        placeholder: "Application Id",
                                        value: G,
                                        onChange: B,
                                    }),
                                    (0, r.jsx)(p.k, {
                                        label: "SKU ID",
                                        hideLabel: !0,
                                        placeholder: "SKU ID",
                                        value: F,
                                        onChange: (e) => V(e),
                                    }),
                                    (0, r.jsx)(h.$, {
                                        variant: "primary",
                                        text: "Open Standard Payment Modal for SKU",
                                        onClick: () =>
                                            (0, o7.A)({
                                                applicationId: G,
                                                skuId: F,
                                                analyticsLocations: E,
                                                checkoutFlow: o1.CL.PREMIUM_APPS_OTP_CHECKOUT,
                                            }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    (0, r.jsx)(aO.c, {}),
                    (0, r.jsxs)(S.B, {
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
                                onClick: () => (0, o4.A)({ skuId: W, analyticsLocations: E }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(aO.c, {}),
                    (0, r.jsx)(u.n, {
                        label: "Helpers",
                        children: (0, r.jsxs)(S.B, {
                            direction: "horizontal",
                            gap: 8,
                            align: "end",
                            children: [
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionPlanStore",
                                    onClick: () => (0, oZ.YG)(),
                                }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Reset SubscriptionStore",
                                    onClick: () => (0, o0.uZ)(),
                                }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(aO.c, {}),
                    (0, r.jsx)(u.n, {
                        label: "Dismissible Content Framework",
                        children: (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Reset DismissibleContentFrameworkStore",
                            onClick: () => (0, le.Ab)(),
                        }),
                    }),
                ],
            }),
        }),
    });
};
var di = a(219887),
    dr = a(459357),
    dd = a(885180),
    dc = a(742810),
    du = a(500380),
    dm = a(102609),
    dh = a(710195),
    dx = a(211287),
    dp = a(295405),
    dg = a(188976);
let dv = [
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
    dj = {
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
    db = [
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
    df = {
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
    dy = [
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
    d_ = {
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
function dC() {
    let [e, t] = o.useState("US"),
        [a, n] = o.useState(null),
        [l, s] = o.useState(null),
        [i, c] = o.useState(null),
        [u, m] = o.useState(null),
        [p, g] = o.useState("pm_card_us"),
        [v, j] = o.useState(!1),
        b = Object.values((0, tl.bG)([dp.A], () => dp.A.paymentSources)),
        f = dj[e],
        y = async () => {
            let t = p;
            "" === t && (t = "pm_card_us"),
                await nB.Bo.post({
                    url: "/debug/payment-source",
                    body: { token: t, address: "US" === e ? l : "CA" === e ? u : null },
                    rejectWithError: !1,
                }),
                await (0, o0.$o)();
        },
        _ = async () => {
            await nB.Bo.del({ url: "/debug/payment-source", rejectWithError: !1 }), await (0, o0.$o)();
        },
        E = async () => {
            await nB.Bo.del({ url: "/debug/rate-limits", rejectWithError: !1 }), window.location.reload();
        };
    return (
        o.useEffect(() => {
            (0, o0.$o)();
        }, []),
        (0, r.jsx)(d.Ip, {
            className: tS.nd,
            children: (0, r.jsxs)("div", {
                className: ss.l$,
                children: [
                    (0, r.jsxs)(C.E, {
                        style: { marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: [" ", "Manage Payment Sources", " "],
                    }),
                    (0, r.jsxs)("div", {
                        className: ss.Uo,
                        children: [
                            (0, r.jsx)(tq.Z, {
                                selectionMode: "single",
                                label: "Card Type",
                                value: e,
                                options: dv
                                    .filter((e) => !("disabled" in e && e.disabled))
                                    .map((e) => {
                                        let { value: t, label: a } = e;
                                        return {
                                            id: t,
                                            value: t,
                                            label: a,
                                            leading: (0, r.jsx)("img", {
                                                alt: "",
                                                className: dg.bI,
                                                src: (0, du.t)(t),
                                            }),
                                        };
                                    }),
                                onSelectionChange: (e) => {
                                    t(e), g(dj[e][0].value), j(1 === dj[e].length);
                                },
                            }),
                            "US" === e &&
                                (0, r.jsx)(x.l, {
                                    selectionMode: "single",
                                    label: "US Address",
                                    hideLabel: !0,
                                    value: a,
                                    options: db.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        n(e), s(df[e] ?? null);
                                    },
                                }),
                            "CA" === e &&
                                (0, r.jsx)(x.l, {
                                    selectionMode: "single",
                                    label: "CA Address",
                                    hideLabel: !0,
                                    value: i,
                                    options: dy.map((e) => {
                                        let { value: t, label: a } = e;
                                        return { id: t, value: t, label: a };
                                    }),
                                    onSelectionChange: (e) => {
                                        c(e), m(d_[e] ?? null);
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
                    (0, r.jsx)(C.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Generate Gift Card PIN",
                    }),
                    (0, r.jsx)(dR, {}),
                    (0, r.jsx)(C.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Experiment Overrides",
                    }),
                    (0, r.jsx)(dT, {}),
                    (0, r.jsx)(C.E, {
                        style: { marginTop: "24px", marginBottom: "16px" },
                        variant: "text-lg/bold",
                        children: "Existing Payment Sources",
                    }),
                    b.map((e) => (0, r.jsx)(dw, { paymentSource: e }, e.id)),
                ],
            }),
        })
    );
}
let dE = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0)" },
        { id: "1", value: "1", label: "Treatment (1)" },
    ],
    dS = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Legacy checkout" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Unified checkout" },
    ],
    dN = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Gift cards disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Gift cards enabled" },
    ],
    dA = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Payment elements disabled" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Payment elements enabled" },
    ],
    dk = [
        { id: "none", value: "none", label: "No Override (use server assignment)" },
        { id: "0", value: "0", label: "Control (0) \u2014 Orb redemption via legacy" },
        { id: "1", value: "1", label: "Treatment (1) \u2014 Orb redemption via orders" },
    ];
function dI(e) {
    let { experimentName: t, options: a = dE } = e,
        n = (0, tl.bG)([dh.A, no.default], () => {
            let e = no.default.getId(),
                a = dh.A.getAssignment("user", e, t);
            return a?.isOverride === !0 ? String(a.variantId) : "none";
        }),
        l = o.useCallback(
            (e) => {
                (0, dm.t$)(dm.l5.APEX, t, "none" === e ? null : Number(e));
            },
            [t],
        );
    return (0, r.jsx)(x.l, { selectionMode: "single", label: t, value: n, options: [...a], onSelectionChange: l });
}
function dT() {
    return (0, r.jsxs)(S.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsx)(dI, { experimentName: dc.W2.definition.name, options: dS }),
            (0, r.jsx)(dI, { experimentName: dc._$.definition.name, options: dS }),
            (0, r.jsx)(dI, { experimentName: dr.A.definition.name, options: dN }),
            (0, r.jsx)(dI, { experimentName: dd._.definition.name, options: dA }),
            (0, r.jsx)(dI, { experimentName: dx.A.definition.name, options: dk }),
        ],
    });
}
let dD = [
        { id: "US", value: "US", label: "United States (USD)" },
        { id: "CA", value: "CA", label: "Canada (CAD)" },
        { id: "FR", value: "FR", label: "France (EUR)" },
        { id: "GB", value: "GB", label: "United Kingdom (GBP)" },
        { id: "DE", value: "DE", label: "Germany (EUR)" },
    ],
    dO = { US: "usd", CA: "cad", FR: "eur", GB: "gbp", DE: "eur" };
function dR() {
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
                    let t = await nB.Bo.post({
                        url: "/billing/gift-card/create-on-demand-pin",
                        body: { country: e, currency: dO[e], amount: v },
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
    return (0, r.jsxs)(S.B, {
        direction: "vertical",
        gap: 8,
        children: [
            (0, r.jsxs)(S.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, r.jsx)(x.l, {
                        selectionMode: "single",
                        label: "Gift Card Country",
                        value: e,
                        options: dD,
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
                (0, r.jsxs)(S.B, {
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
            null != m && (0, r.jsx)(E.w, { type: "critical", children: m }),
        ],
    });
}
function dw(e) {
    let { paymentSource: t } = e,
        a = async () => {
            await nB.Bo.patch({ url: $.Rsh.BILLING_PAYMENT_SOURCE(t.id), body: { default: !0 }, rejectWithError: !1 }),
                await (0, o0.$o)();
        };
    return (0, r.jsxs)("div", {
        className: ss.bd,
        children: [
            (0, r.jsx)(di.A, { locale: "en-US", paymentSource: t, showLabels: !0, showPaymentSourceIcon: !0 }, t.id),
            (0, r.jsx)("img", { alt: t.country, className: dg.bI, src: (0, du.t)(t.country) }),
            t.isDefault
                ? (0, r.jsx)(C.E, { variant: "text-sm/medium", children: "(Default)" })
                : (0, r.jsx)(h.$, { variant: "secondary", size: "sm", text: "Set as Default", onClick: a }),
        ],
    });
}
var dM = a(706712),
    dL = a(367727),
    dP = a(845886);
function dU() {
    return (0, r.jsx)(d.Ip, { className: dP.kL, children: (0, r.jsx)(dG, {}) });
}
function dG() {
    let e = o.useCallback(() => {
            (0, lh._N)(n1.M.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, dL.FZ)(n1.M.NITRO_TENURE_BADGE_LEVEL_UP),
        a = null != t ? new Date(t) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(A.D, { className: dP.wx, variant: "heading-lg/semibold", children: "Tenure Badges" }),
            (0, r.jsxs)("p", {
                children: [
                    "Level Up DC:\xa0",
                    null != a && (0, r.jsxs)("b", { children: ["Dismissed (", a.toLocaleDateString(), ")"] }),
                    null == a && (0, r.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, r.jsx)("div", {
                className: dP.PW,
                children: (0, r.jsx)(h.$, { variant: "primary", text: "Reset Level Up DC", onClick: e }),
            }),
        ],
    });
}
var dB = a(136722),
    dF = a(576705),
    dV = a(309010),
    d$ = a(558393),
    dW = a(719366),
    dz = a(842681);
function dH(e) {
    let { title: t, can: a } = e,
        n = a ? rP.A : R.P,
        l = (0, r.jsx)("div", {
            className: y()(dz.v_, a ? dz.uU : dz.Ss),
            children: (0, r.jsx)(n, { className: dz.Kk }),
        });
    return (0, r.jsxs)("div", {
        className: dz.z8,
        children: [
            l,
            (0, r.jsx)("div", {
                className: dz.rv,
                children: (0, r.jsx)(C.E, { variant: "text-md/normal", children: t }),
            }),
        ],
    });
}
function dK() {
    let e = (0, k.bG)([dV.A], () => dV.A.getChannelId()),
        t = (0, k.bG)([a$.A], () => a$.A.getGuildId()),
        a = (0, k.bG)([t6.A], () => t6.A.getChannel(e)),
        n = (0, k.bG)([aV.A], () => aV.A.getGuild(t)),
        l = (0, k.bG)([dF.A], () => dF.A.computePermissions(a)),
        s = (0, k.bG)([dF.A], () => dF.A.computePermissions(n)),
        i = (0, t3.Ay)(a, !0),
        o = null != a ? (0, dW.mW)(a, !1) : null,
        d = null != n ? d$.A.getGuildPermissionSpecMap(n) : null,
        c = Object.values(o ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = dB.zy(l, a);
            return (0, r.jsx)(dH, { title: t, can: n }, t);
        }),
        u = Object.values(d ?? {}).map((e) => {
            let { title: t, flag: a } = e,
                n = dB.zy(s, a);
            return (0, r.jsx)(dH, { title: t, can: n }, t);
        });
    return (0, r.jsx)("div", {
        className: y()(tS.nd, dz.nd),
        children: (0, r.jsxs)("div", {
            className: dz.l$,
            children: [
                (0, r.jsxs)("section", {
                    className: dz.uW,
                    children: [
                        (0, r.jsx)(A.D, {
                            variant: "heading-md/semibold",
                            children: null != i ? `Permissions in ${i}` : "No channel selected",
                        }),
                        c,
                    ],
                }),
                (0, r.jsxs)("section", {
                    className: dz.uW,
                    children: [
                        (0, r.jsx)(A.D, {
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
var dY = a(873298),
    dq = a(775602),
    dJ = a(363195),
    dQ = a(885386),
    dX = a(631670),
    dZ = a(817281),
    d0 = a(955572),
    d1 = a(56348),
    d2 = a(385803),
    d8 = a(381941);
let d3 = [$.NJ8.DARK, $.NJ8.LIGHT, $.NJ8.DARKER, $.NJ8.MIDNIGHT],
    d6 = [dY.NS.COMPACT, dY.NS.COZY, dY.NS.DEFAULT];
function d5(e) {
    return e[Math.floor(Math.random() * e.length)];
}
async function d4() {
    let e,
        t =
            ((e = G.default.getCurrentUser()),
            rV.Ay.canUseClientThemes(e) ? Object.keys(d2.ag).map((e) => Number(e)) : []),
        a = t.length > 0 && Math.random() > 0.7;
    try {
        if (a) {
            let e,
                a = [...t, null],
                n = d5(a);
            if (null != n) {
                let t = d2.ag[n];
                e = t?.theme ?? $.NJ8.DARK;
            } else e = d5([$.NJ8.DARK, $.NJ8.DARKER, $.NJ8.MIDNIGHT]);
            await dZ.u_(
                { theme: e, backgroundGradientPresetId: n ?? void 0, customUserThemeSettings: void 0 },
                lh.Sb.INFREQUENT_USER_ACTION,
            );
        } else {
            let e = d5(d3);
            await dZ.u_(
                { theme: e, backgroundGradientPresetId: void 0, customUserThemeSettings: void 0 },
                lh.Sb.INFREQUENT_USER_ACTION,
            );
        }
    } catch (e) {}
}
async function d9() {
    let e = tr.A.purchases,
        t = (0, ex.x9)(e),
        a = (0, ex.$W)(e),
        n = t.length > 0,
        l = a.length > 0;
    if (n || l)
        try {
            let e = {};
            n && (e.avatarDecoration = d5([...t, null])), l && (e.nameplate = d5([...a, null])), (0, e2.p)(e);
            let s = e8.A.getPendingChanges(),
                i = (0, d1.Sk)(s);
            await (0, dX._L)(i).finally(dX.pZ);
        } catch (e) {}
}
function d7() {
    try {
        let e = d5($.hH7.FONT_SIZES);
        (0, d0.XS)(e);
        let t = d5(d8.qh);
        (0, d0.AC)(t);
        let a = d5(d6);
        dQ.Xi.updateSetting(a);
    } catch (e) {}
}
function ce() {
    (0, e5.Bf)();
    let e = (0, k.bG)([G.default], () => G.default.getCurrentUser()),
        t = dQ.eh.useSetting(),
        a = (0, k.bG)([dJ.A], () => dJ.A.theme),
        n = t.backgroundGradientPresetId,
        l = (0, k.bG)([tr.A], () => tr.A.purchases),
        s = (0, ex.x9)(l),
        i = (0, ex.$W)(l),
        d = e?.avatarDecoration?.skuId,
        c = e?.collectibles?.nameplate?.skuId,
        u = null != d ? (s.find((e) => e.skuId === d) ?? null) : null,
        m = null != c ? (i.find((e) => e.skuId === c) ?? null) : null,
        x = (0, k.bG)([ti.A], () => ti.A.getProduct(u?.skuId)),
        p = (0, k.bG)([ti.A], () => ti.A.getProduct(m?.skuId)),
        g = (0, k.bG)([dq.A], () => dq.A.fontSize),
        v = (0, k.bG)([dq.A], () => dq.A.messageGroupSpacing),
        j = dQ.Xi.useSetting();
    return (
        o.useEffect(() => {
            let e = G.default.getCurrentUser(),
                t = dQ.eh.getSetting(),
                a = tr.A.purchases,
                n = (0, ex.x9)(a),
                l = (0, ex.$W)(a),
                s = dJ.A.theme,
                i = t.backgroundGradientPresetId,
                r = e?.avatarDecoration?.skuId,
                o = e?.collectibles?.nameplate?.skuId,
                d = null != r ? (n.find((e) => e.skuId === r) ?? null) : null,
                c = null != o ? (l.find((e) => e.skuId === o) ?? null) : null,
                u = dq.A.fontSize,
                m = dq.A.messageGroupSpacing,
                h = dQ.Xi.getSetting();
            return () => {
                try {
                    dZ.u_(
                        { theme: s, backgroundGradientPresetId: i ?? void 0, customUserThemeSettings: void 0 },
                        lh.Sb.INFREQUENT_USER_ACTION,
                    ),
                        (0, e2.p)({ avatarDecoration: d, nameplate: c });
                    let e = e8.A.getPendingChanges(),
                        t = (0, d1.Sk)(e);
                    (0, dX._L)(t).finally(dX.pZ), (0, d0.XS)(u), (0, d0.AC)(m), dQ.Xi.updateSetting(h);
                } catch (e) {}
            };
        }, []),
        (0, r.jsxs)("div", {
            className: lj.kL,
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(A.D, {
                            variant: "heading-lg/semibold",
                            children: "Randomize customization settings",
                        }),
                        (0, r.jsx)(C.E, {
                            variant: "text-md/normal",
                            children:
                                "Randomly sets appearance-related settings. Leaving this tab or closing devtools will reset to your initial state.",
                        }),
                        (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "Randomize Theme", onClick: d4 }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Collectibles",
                            onClick: d9,
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            size: "sm",
                            text: "Randomize Appearance Settings",
                            onClick: d7,
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(A.D, { variant: "heading-lg/semibold", children: "Current Settings" }),
                        (0, r.jsxs)(C.E, { variant: "text-md/normal", children: ["Theme: ", a] }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-md/normal",
                            children: ["Client Theme ID:", " ", null != n ? d2.ag[n]?.getName() : "None"],
                        }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-md/normal",
                            children: ["Avatar Decoration: ", x?.name ?? "None"],
                        }),
                        (0, r.jsxs)(C.E, { variant: "text-md/normal", children: ["Nameplate: ", p?.name ?? "None"] }),
                        (0, r.jsxs)(C.E, { variant: "text-md/normal", children: ["Font Size: ", g, "px"] }),
                        (0, r.jsxs)(C.E, { variant: "text-md/normal", children: ["Message Spacing: ", v] }),
                        (0, r.jsxs)(C.E, {
                            variant: "text-md/normal",
                            children: [
                                "UI Density: ",
                                j,
                                " (",
                                (function (e) {
                                    switch (e) {
                                        case dY.NS.COMPACT:
                                            return "Compact";
                                        case dY.NS.COZY:
                                            return "Cozy";
                                        case dY.NS.DEFAULT:
                                            return "Default";
                                        case dY.NS.RESPONSIVE:
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
var ct = a(885574),
    ca = a(311678),
    cn = a(508274),
    cl = a(837529);
let cs = [5793266, 2303016],
    ci = [
        { id: "nitro", label: "Nitro", value: "nitro" },
        { id: "non-nitro", label: "Non-Nitro", value: "non-nitro" },
    ];
function cr() {
    let { themeOverride: e, setThemeOverride: t, savedClientTheme: a, setSavedClientTheme: n } = (0, cl.Zt)(),
        l = (0, K.Ay)(),
        s = (0, k.bG)([li.A], () => li.A.settings.appearance?.clientThemeSettings),
        i =
            s?.customUserThemeSettings != null &&
            null != s.customUserThemeSettings.colors &&
            s.customUserThemeSettings.colors.length > 0;
    function o() {
        null != a && ((0, dZ.u_)({ theme: a.theme, customUserThemeSettings: a.customUserThemeSettings }), n(null));
    }
    return (0, r.jsx)(d.Ar, {
        children: (0, r.jsxs)(S.B, {
            gap: 16,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(ca.N, {
                            collapsibleContent: (0, r.jsxs)(S.B, {
                                gap: 8,
                                padding: 4,
                                children: [
                                    (0, r.jsx)(C.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children:
                                            "This panel allows you to override the theme and theme colors that are used when rendering user profiles. The overrides you set here will apply to all user profiles, not just your own.",
                                    }),
                                    (0, r.jsx)(C.E, {
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
                                    icon: ct.m,
                                    onClick: t,
                                });
                            },
                        }),
                        (0, r.jsx)(aO.c, {}),
                    ],
                }),
                null == e
                    ? (0, r.jsx)(h.$, {
                          variant: "primary",
                          text: "Enable Theme Override",
                          onClick: () => t({ mode: "nitro", themeType: null, themeColors: cs }),
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(lQ.e, {
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
                                  options: ci,
                                  onSelectionChange: (a) => t({ ...e, mode: a }),
                              }),
                              "nitro" === e.mode
                                  ? (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(tf.d, {
                                                label: "Disable Banner",
                                                checked: !0 === e.disableBanner,
                                                onChange: (a) => t({ ...e, disableBanner: a }),
                                            }),
                                            (0, r.jsx)(h.$, {
                                                variant: "secondary",
                                                text: "Reset Colors",
                                                onClick: () => t({ ...e, themeColors: cs }),
                                            }),
                                            (0, r.jsxs)(S.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Primary Color",
                                                    }),
                                                    (0, r.jsx)(cn.VN, {
                                                        wrapperComponentType: "div",
                                                        showEyeDropper: !0,
                                                        eagerUpdate: !0,
                                                        value: e.themeColors?.[0] ?? 0,
                                                        onChange: (a) =>
                                                            t({ ...e, themeColors: [a, e.themeColors?.[1] ?? null] }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)(S.B, {
                                                gap: 8,
                                                children: [
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: "Secondary Color",
                                                    }),
                                                    (0, r.jsx)(cn.VN, {
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
                                  : (0, r.jsxs)(S.B, {
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(x.l, {
                                                label: "Theme Type",
                                                selectionMode: "single",
                                                value: e.themeType,
                                                options: Object.values($.NJ8).map((e) => ({
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
                                                        (0, r.jsx)(C.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-feedback-warning",
                                                            children:
                                                                "You have an active custom theme so setting a theme type does nothing.",
                                                        }),
                                                        (0, r.jsx)(C.E, {
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
                                                                    (0, dZ.u_)({ theme: "system" });
                                                            },
                                                        }),
                                                    ],
                                                }),
                                            null != a &&
                                                (0, r.jsxs)(r.Fragment, {
                                                    children: [
                                                        (0, r.jsx)(C.E, {
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
var co = a(141931),
    cd = a(306173),
    cc = a(587626),
    cu = a(237984),
    cm = a(43203),
    ch = a(349435),
    cx = a(674272),
    cp = a(466034),
    cg = a(10094),
    cv = a(683760);
let cj = () => {
    let e = (0, k.bG)([G.default], () => G.default.getCurrentUser()),
        t = (0, k.bG)([cv.A], () => {
            let e = cv.A.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : "";
        }),
        a = (0, k.bG)([cv.A], () => cv.A.getPremiumTypeOverride());
    return (0, r.jsxs)(S.B, {
        gap: 16,
        children: [
            (0, r.jsx)(x.l, {
                label: "Override Client-Side Premium Type",
                options: l9.Jm,
                value: a,
                onSelectionChange: (t) => {
                    (0, cg.O)(t, e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            (0, r.jsx)(l_.Q, {
                onClick: () => {
                    (0, cg.O)(l9.$I, e);
                },
                text: "Reset premium type override",
            }),
            (0, r.jsx)(s6.J, {
                label: "Override Client-Side Account Created At Date",
                value: a6()(t),
                onSelect: (e) => {
                    var t;
                    return (t = e.toISOString()), void (0, cg.Y)(new Date(t));
                },
            }),
            (0, r.jsx)(l_.Q, { onClick: () => (0, cg.Y)(void 0), text: "Reset account created at override" }),
        ],
    });
};
var cb = a(19575),
    cf = a(327337),
    cy = a(431804),
    c_ = a(865349),
    cC = a(818050);
function cE() {
    throw Error("Send help");
}
function cS() {
    let e = dQ.j0.useSetting(),
        [t, n] = o.useState(!1);
    return t
        ? {}
        : (0, r.jsxs)(d.Ip, {
              children: [
                  (0, r.jsx)("div", { className: y()(c_.N, cC.SX), children: (0, r.jsx)(cj, {}) }),
                  (0, r.jsx)("div", {
                      className: y()(c_.N, cC.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Vibing Wumpus",
                          onClick: () => (0, cx.A)({ source: cy.y.KEYBIND }),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: y()(c_.N, cC.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Safety Tools Modal",
                          onClick: () => {
                              let e;
                              return (
                                  (e = dV.A.getChannelId() ?? "21154681615024128"),
                                  void (0, eS.openModalLazy)(
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
                                                  warningType: ch._j.INAPPROPRIATE_CONVERSATION_TIER_2,
                                                  ...a,
                                              });
                                      },
                                      { modalKey: cf.V },
                                  )
                              );
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: y()(c_.N, cC.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Captcha Test Tool",
                          onClick: () =>
                              void (0, eS.openModalLazy)(
                                  async () => {
                                      let { default: e } = await a.e("17724").then(a.bind(a, 563255));
                                      return (t) => (0, r.jsx)(e, { ...t });
                                  },
                                  { onCloseCallback: void 0 },
                              ),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: y()(c_.N, cC.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Launch Accept Invite Modal",
                          onClick: () => (0, cm.$)("fortnite", "DevTools Quick Actions"),
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: y()(c_.N, cC.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Crash",
                          onClick: cd.Oy,
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: y()(c_.N, cC.QB),
                      children: (0, r.jsx)(h.$, {
                          variant: "primary",
                          size: "sm",
                          text: "Force libdiscore Store Error",
                          onClick: () => {
                              let e = cc.A.getSocket();
                              ty.h.dispatch({ type: "LIBDISCORE_SIMULATE_STORE_ERROR" }).catch((t) => {
                                  e.resetSocketOnDispatchError({ error: t, action: "LIBDISCORE_SIMULATE_STORE_ERROR" });
                              });
                          },
                      }),
                  }),
                  (0, r.jsx)("div", {
                      className: y()(c_.N, cC.QB),
                      children: (0, r.jsx)(tf.d, {
                          label: "Ignore profile speedbump disabled",
                          checked: e,
                          onChange: (e) => dQ.j0.updateSetting(e),
                      }),
                  }),
                  (0, r.jsxs)("div", {
                      className: y()(c_.N, cC.QB),
                      children: [
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Open Overlay",
                              onClick: () => (0, cu.o)(),
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Reset Socket",
                              onClick: () => {
                                  cc.A.getSocket().close(), cc.A.getSocket().connect();
                              },
                          }),
                          (0, r.jsx)(h.$, {
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
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Show TOTP Success",
                              onClick: () => (0, cp.sy)(!0),
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "Trigger Suspicious Sessions Notifications",
                              onClick: () => {
                                  nB.Bo.post({ url: $.Rsh.AUTH_SESSION_NOTIFICATIONS_DEBUG, rejectWithError: !0 });
                              },
                          }),
                      ],
                  }),
                  (0, r.jsxs)("div", {
                      className: y()(c_.N, cC.QB),
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
                              onSelectionChange: (e) => null != e && cb.Ay.crash(e),
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
                                      value: co.qQ.RendererProcessDelayed,
                                      id: "delayed_exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in renderer process",
                                      value: co.qQ.RendererProcess,
                                      id: "exception_in_renderer_process",
                                  },
                                  {
                                      label: "Exception in main process",
                                      value: co.qQ.MainProcess,
                                      id: "exception_in_main_process",
                                  },
                              ],
                              onSelectionChange: (e) => (null != e ? void cb.Ay.triggerJSException(e) : void 0),
                          }),
                          (0, r.jsx)(h.$, {
                              variant: "primary",
                              size: "sm",
                              text: "React Crash",
                              onClick: () => n(!0),
                          }),
                          (0, r.jsx)(h.$, { variant: "primary", size: "sm", text: "onClick Throw", onClick: cE }),
                      ],
                  }),
              ],
          });
}
var cN = a(593924),
    cA = a(653887),
    ck = a(105596);
function cI() {
    let e = Object.keys(cN).map((e) => (0, r.jsx)(cO, { riveName: e }, e));
    return (0, r.jsx)(d.Ar, {
        style: { maxHeight: "100%" },
        children: (0, r.jsxs)(S.B, {
            gap: 24,
            padding: 8,
            style: { boxSizing: "border-box" },
            children: [
                (0, r.jsx)(A.D, { variant: "heading-lg/medium", children: "Rive Inspector" }),
                (0, r.jsx)(C.E, {
                    variant: "text-md/normal",
                    children:
                        "Upload a .riv file to view the animation and interact with its data binding configuration.",
                }),
                (0, r.jsx)(cT, {}),
                (0, r.jsx)(A.D, { variant: "heading-lg/medium", children: "Rive Overrides" }),
                (0, r.jsx)(C.E, {
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
    return (0, r.jsxs)(S.B, {
        gap: 16,
        children: [
            (0, r.jsx)(cO, { riveName: "Rive inspector", onRiveLoad: j }),
            null != e &&
                (0, r.jsx)("div", {
                    style: { width: u, height: h },
                    children: (0, r.jsx)(cA._, { src: e, ref: c, onLoad: g, dynamicDataBinding: a ?? {} }),
                }),
            null != e && null == a ? (0, r.jsx)(eJ.y, {}) : null,
            null != a &&
                (0, r.jsxs)(S.B, {
                    children: [
                        (0, r.jsxs)(S.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(A.D, { variant: "heading-lg/medium", children: "Dimensions" }),
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
                        (0, r.jsxs)(S.B, {
                            gap: 8,
                            children: [
                                (0, r.jsx)(A.D, { variant: "heading-lg/medium", children: "Data Binding" }),
                                Object.keys(l ?? {}).map((e) =>
                                    (0, r.jsx)(
                                        cD,
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
function cD(e) {
    let { property: t, type: a, value: n, onChange: l, artboards: s } = e;
    return "string" === a
        ? (0, r.jsx)(p.k, { label: t, value: n, onChange: (e) => l(e) })
        : "number" === a
          ? (0, r.jsx)(p.k, { type: "number", label: t, value: n, onChange: (e) => l(parseInt(e)) })
          : "boolean" === a
            ? (0, r.jsx)(tf.d, { label: t, checked: n, onChange: (e) => l(e) })
            : "trigger" === a
              ? (0, r.jsx)(h.$, { text: `Trigger ${t}`, onClick: () => l(Number.isSafeInteger(n) ? n + 1 : 1) })
              : "image" === a
                ? (0, r.jsx)(p.k, { label: t, value: n, onChange: (e) => l(e) })
                : "color" === a
                  ? (0, r.jsx)(tq.Z, {
                        selectionMode: "single",
                        label: t,
                        value: n,
                        onSelectionChange: (e) => l(e),
                        closeOnSelect: !0,
                        placeholder: "Select a color...",
                        options: Object.entries(eN.A.colors).map((e) => {
                            let [t, a] = e;
                            return { label: t, value: a, id: t };
                        }),
                    })
                  : "artboard" === a
                    ? (0, r.jsx)(tq.Z, {
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
function cO(e) {
    let { riveName: t, onRiveLoad: a } = e,
        n = cN[t]?.riveSrc,
        l = null == n,
        s = o.useRef(null),
        i = (0, ck.Gy)(n);
    return (0, r.jsxs)(
        S.B,
        {
            gap: 8,
            children: [
                (0, r.jsx)("label", { children: t }),
                (0, r.jsxs)(S.B, {
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
                                    null != n && (0, ck.DS)(n, t), a?.(t);
                                }),
                                    l.readAsArrayBuffer(t);
                            },
                            ref: s,
                        }),
                        (0, r.jsx)(e_.K, {
                            "aria-label": `Clear override for ${t}`,
                            onClick: () => {
                                null != s.current && (s.current.value = ""),
                                    null != n && (0, ck.DS)(n, null),
                                    a?.(null);
                            },
                            icon: ne.u,
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
var cR = a(290136),
    cw = a(106236),
    cM = a(629584),
    cL = a(600239),
    cP = a(940622),
    cU = a(961895),
    cG = a(343991),
    cB = a(699666);
let cF = () => {
        (0, eS.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(a.bind(a, 343991));
                return (t) =>
                    (0, r.jsx)(e, {
                        title: "No image or video files found!",
                        help: "Please drop one or more image or video files.",
                        ...t,
                    });
            },
            { modalKey: cG.D },
        );
    },
    cV = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    c$ = (e) => {
        let { className: t, onDrop: a, children: n } = e,
            [l, s] = o.useState(!1),
            i = o.useRef(null),
            d = o.useCallback((e) => {
                cV(e), s(!0), (0, eS.closeModal)(cG.D);
            }, []),
            c = o.useCallback((e) => {
                cV(e);
                let t = i.current,
                    a = e.relatedTarget;
                (null != a && (null == t || t.contains(a))) || s(!1);
            }, []),
            u = o.useCallback(
                async (e) => {
                    cV(e), s(!1);
                    let t = e.dataTransfer;
                    if (null == t) return void cF();
                    let n = await Promise.all(
                        Array.from(t.items).map((e) => e.webkitGetAsEntry() ?? e.getAsEntry()),
                    ).then((e) => e.filter((e) => null != e));
                    n.length > 0 ? a(n) : cF();
                },
                [a],
            );
        return (0, r.jsxs)("div", {
            ref: i,
            className: y()(t, cB.iE),
            onDragEnter: d,
            onDragOver: cV,
            onDragLeave: c,
            onDrop: u,
            children: [
                n,
                l &&
                    (0, r.jsx)("div", {
                        className: cB.d2,
                        children: (0, r.jsxs)("div", {
                            className: cB.vW,
                            children: [
                                (0, r.jsx)(cU.A, { icons: et.ir }),
                                (0, r.jsx)(A.D, { variant: "heading-lg/bold", children: "Upload Shop Assets" }),
                                (0, r.jsxs)("div", {
                                    className: cB.GA,
                                    children: [
                                        (0, r.jsx)(C.E, {
                                            variant: "text-sm/normal",
                                            children: "Drop file(s) into this panel to preview Shop assets!",
                                        }),
                                        (0, r.jsxs)(C.E, {
                                            variant: "text-sm/normal",
                                            children: [
                                                "Click",
                                                (0, r.jsx)(cR.c, {
                                                    className: cB.q4,
                                                    size: "xs",
                                                    color: eN.A.colors.TEXT_DEFAULT,
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
    cW = new Set([
        eg.RN.HERO_BANNER_STATIC,
        eg.RN.HERO_LOGO,
        eg.RN.PDP_BACKGROUND,
        eg.RN.LOGO,
        eg.RN.MOBILE_BANNER,
        eg.RN.MOBILE_BACKGROUND,
    ]),
    cz = ["intro", "idle", "reduced_motion", "static", "thumbnail"],
    cH = { max: 5e6, warn: 2e6 },
    cK = { max: 3e6, warn: 1e6 },
    cY = { max: 2e6, warn: 1e6 },
    cq = { max: 1e6, warn: 5e5 },
    cJ = { max: 25e4, warn: 5e4 },
    cQ = {
        [eg.Jn.PROFILE_EFFECT]: cH,
        [eg.Jn.AVATAR_DECORATION]: cK,
        [eg.RN.HERO_BANNER_ANIMATED]: cH,
        [eg.RN.HERO_BANNER_RIVE]: cH,
        [eg.RN.CATALOG_BANNER_RIVE]: cH,
        [eg.RN.SHOP_BUTTON_BG_HOVER]: cK,
        [eg.RN.SHOP_BUTTON_BG_HOVER_DARK]: cK,
        [eg.RN.SHOP_BUTTON_BG_HOVER_LIGHT]: cK,
        [eg.RN.SHOP_BUTTON_BG_RESTING]: cK,
        [eg.RN.SHOP_BUTTON_BG_RESTING_DARK]: cK,
        [eg.RN.SHOP_BUTTON_BG_RESTING_LIGHT]: cK,
        [eg.RN.HERO_BANNER_STATIC]: cY,
        [eg.RN.UPSELL_BANNER]: cq,
        [eg.RN.UPSELL_BANNER_POPOUT]: cJ,
        [eg.RN.MOBILE_BANNER]: cq,
        [eg.RN.MOBILE_BACKGROUND]: cJ,
        [eg.RN.MOBILE_HERO]: cq,
        [eg.RN.PDP_BACKGROUND]: cJ,
        [eg.RN.LOGO]: cJ,
        [eg.RN.TAB_TOOLTIP]: cJ,
    },
    cX = async (e) => {
        let t = Object.values(eg.Kx),
            a = new Set(),
            n = e.createReader();
        for (let e of await new Promise((e) => n.readEntries(e))) e.isDirectory && t.includes(e.name) && a.add(e.name);
        return t.filter((e) => !a.has(e));
    },
    cZ = (e) => {
        let { names: t, addError: a } = e,
            n = /^[a-z0-9]+(_[a-z0-9]+)*(\.[a-z0-9]+)?$/,
            l = t.filter((e) => !n.test(e));
        l.length > 0 && a("File names must be in lowercase snake case", l);
    },
    c0 = (e, t, a, n) => {
        let l = t.size,
            s = l > 1e6 ? `${(l / 1e6).toFixed(2)}MB` : `${(l / 1e3).toFixed(2)}KB`,
            i = `${t.name} - ${s}`;
        if (l > e.max) {
            let t = e.max > 1e6 ? `${Math.round(e.max / 1e6)}MB` : `${Math.round(e.max / 1e3)}KB`;
            a("Files exceed the recommended size limit - make sure they are optimized!", [`${i} (max: ${t})`]);
        } else l > e.warn && n("Files are a tad chonky - are you sure they're optimized?", [`${i}`]);
    },
    c1 = (e, t, a, n) => {
        let l = cQ[e];
        if (null != l) for (let e of t) e.name.endsWith(".txt") || c0(l, e, a, n);
    },
    c2 = (e) => {
        let t = eg.aL[e];
        return `${e} (${t.map((e) => `.${e}`).join(", ")})`;
    };
var c8 = a(981388);
let c3 = o.createContext({ setDropHandler: () => {} }),
    c6 = [
        { name: "Preview", value: "preview" },
        { name: "Validate", value: "validate" },
    ],
    c5 = { id: "none", label: "[none selected]", value: null },
    c4 = () => {
        (0, eS.hasModalOpen)(cL.k)
            ? (0, eS.closeModal)(cL.k)
            : (0, eS.openModalLazy)(
                  async () => {
                      let { ShopAssetsPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: cL.k, onCloseRequest: () => (0, eS.closeModal)(cL.k) },
              );
    },
    c9 = () => {
        (0, eS.hasModalOpen)(cL.g)
            ? (0, eS.closeModal)(cL.g)
            : (0, eS.openModalLazy)(
                  async () => {
                      let { ShopPFXPreviewInstructionModal: e } = await Promise.resolve().then(a.bind(a, 600239));
                      return (t) => (0, r.jsx)(e, { ...t });
                  },
                  { modalKey: cL.g, onCloseRequest: () => (0, eS.closeModal)(cL.g) },
              );
    },
    c7 = () => {
        let e = (0, ev.pF)(),
            { previewProfileEffectSkuId: t, setPreviewProfileEffectSkuId: a } = (0, cP.JE)(),
            n = o.useMemo(() => [c5, ...e.map((e) => ({ id: e.skuId, label: e.name, value: e.skuId }))], [e]);
        return (0, r.jsxs)("div", {
            className: c8.kO,
            children: [
                (0, r.jsx)(t8.h, { size: 16 }),
                (0, r.jsxs)("div", {
                    className: c8.wR,
                    children: [
                        (0, r.jsx)(A.D, { variant: "heading-md/bold", children: "Preview Profile Effect" }),
                        (0, r.jsx)(e_.K, {
                            variant: "icon-only",
                            size: "sm",
                            onClick: c9,
                            icon: cR.c,
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
    ue = () => {
        let { previewAvatarDecorationKey: e, setPreviewAvatarDecorationKey: t } = (0, cP.JE)(),
            { avatarDecorationAssets: a } = (0, cP.NE)(),
            n = o.useMemo(() => a.map((e) => ({ id: e.name, label: e.name, value: e.name })), [a]);
        return 0 === a.length
            ? null
            : (0, r.jsxs)("div", {
                  className: c8.kO,
                  children: [
                      (0, r.jsx)(t8.h, { size: 16 }),
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
    ut = new Set([eg.RN.HERO_BANNER_STATIC, eg.RN.HERO_BANNER_ANIMATED, eg.RN.HERO_BANNER_RIVE]),
    ua = (e) => {
        let { clearAssets: t, clearIgnoredFiles: a } = e,
            { collectionAssets: n } = (0, cP.NE)(),
            {
                deleteCollectionAsset: l,
                clearAssets: s,
                heroLogoMaxHeight: i,
                setHeroLogoMaxHeight: d,
                heroResponsive: c,
                setHeroResponsive: u,
            } = (0, cP.JE)(),
            m = o.useMemo(() => Object.values(n).map((e) => ({ label: e.name, value: e.type })), [n]),
            x = m.some((e) => e.value === eg.RN.HERO_LOGO),
            p = m.some((e) => ut.has(e.value)),
            g = o.useCallback((e) => l(e), [l]),
            v = o.useCallback(() => {
                s(), t(), a();
            }, [s, t, a]);
        return 0 === m.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(t8.h, { size: 16 }),
                      (x || p) &&
                          (0, r.jsxs)("div", {
                              className: c8.v7,
                              children: [
                                  x &&
                                      (0, r.jsxs)("div", {
                                          className: c8.cj,
                                          children: [
                                              (0, r.jsx)(C.E, {
                                                  variant: "text-md/normal",
                                                  className: c8.Me,
                                                  children: "Logo size",
                                              }),
                                              (0, r.jsx)(cw.A, {
                                                  className: c8.TQ,
                                                  minValue: 90,
                                                  maxValue: 200,
                                                  initialValue: i ?? 90,
                                                  handleSize: 10,
                                                  onValueChange: (e) => d(Math.round(e)),
                                                  onValueRender: (e) => `${Math.round(e)}px`,
                                                  "aria-label": "Hero logo max height",
                                              }),
                                              (0, r.jsx)(C.E, { variant: "text-sm/normal", children: `${i ?? 90}px` }),
                                          ],
                                      }),
                                  p &&
                                      (0, r.jsxs)("div", {
                                          className: c8.sy,
                                          children: [
                                              (0, r.jsx)(tf.d, { checked: c, onChange: u }),
                                              (0, r.jsx)(C.E, {
                                                  variant: "text-md/normal",
                                                  children: "Responsive Hero",
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                      (0, r.jsx)(t8.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: c8.wR,
                          children: [
                              (0, r.jsx)(A.D, { variant: "heading-lg/bold", children: "Uploaded Assets" }),
                              (0, r.jsx)(h.$, {
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
                                      className: c8._0,
                                      children: [
                                          (0, r.jsx)(e_.K, {
                                              variant: "icon-only",
                                              size: "sm",
                                              onClick: () => g(e.value),
                                              icon: R.P,
                                              "aria-label": "Remove asset",
                                          }),
                                          (0, r.jsx)(C.E, { variant: "text-md/normal", children: e.label }),
                                      ],
                                  },
                                  e.value,
                              ),
                          ),
                      }),
                  ],
              });
    },
    un = (e) => {
        let { ignoredFiles: t, handleClearIgnoredFiles: a } = e;
        return 0 === t.length
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(t8.h, { size: 16 }),
                      (0, r.jsxs)("div", {
                          className: c8.wR,
                          children: [
                              (0, r.jsx)(A.D, { variant: "heading-lg/bold", children: "Ignored Files" }),
                              (0, r.jsx)(h.$, { variant: "primary", size: "sm", onClick: a, text: "Clear" }),
                          ],
                      }),
                      (0, r.jsx)("ul", {
                          children: t.map((e, t) =>
                              (0, r.jsx)(
                                  "li",
                                  {
                                      className: c8.yk,
                                      children: (0, r.jsx)(C.E, { variant: "text-md/normal", children: e }),
                                  },
                                  `${e}-${t}`,
                              ),
                          ),
                      }),
                  ],
              });
    },
    ul = () => {
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
                                let n = await cX(t);
                                if (n.length > 0) return void i("Missing required directories", n);
                                (a = await (0, eg.eg)([t])),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        for (let e of t.collectionFiles) {
                                            let t = (0, eg.pd)(e),
                                                l = null != t ? cQ[t] : null;
                                            null != l && c0(l, e, a, n);
                                        }
                                        cZ({ names: t.collectionFiles.map((e) => e.name), addError: a });
                                        let l = new Set(
                                                t.collectionFiles.map((e) => (0, eg.pd)(e)).filter((e) => null != e),
                                            ),
                                            s = Array.from(cW)
                                                .filter((e) => !l.has(e))
                                                .map(c2);
                                        s.length > 0 && a("Missing required files", s);
                                        let i = Object.values(eg.RN)
                                            .filter((e) => !cW.has(e))
                                            .filter((e) => !l.has(e))
                                            .map(c2);
                                        i.length > 0 && n("Missing optional assets", i);
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        cZ({ names: Object.keys(t.profileEffectFilesMap), addError: a }),
                                            Object.entries(t.profileEffectFilesMap).forEach((e) => {
                                                let [t, l] = e,
                                                    s = l.map((e) => e.name);
                                                cZ({
                                                    names: s.map((e) => {
                                                        let t = e.indexOf("-");
                                                        return e.substring(0, t > 0 ? t : e.length);
                                                    }),
                                                    addError: a,
                                                }),
                                                    c1(eg.Jn.PROFILE_EFFECT, l, a, n);
                                                let i = cz
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
                                                        (e) => !cz.some((t) => e.startsWith(t)) && !e.endsWith(".txt"),
                                                    )
                                                    .map((e) => `${t}/${e}`);
                                                r.length > 0 && n("Contains unrecognized files", r);
                                            });
                                    })({ files: a, addError: i, addWarning: r }),
                                    ((e) => {
                                        let { files: t, addError: a, addWarning: n } = e;
                                        cZ({ names: t.avatarDecorationFiles.map((e) => e.name), addError: a }),
                                            c1(eg.Jn.AVATAR_DECORATION, t.avatarDecorationFiles, a, n);
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
            { setDropHandler: u } = o.useContext(c3),
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
                              className: c8._f,
                              children: [
                                  (0, r.jsx)(C.E, {
                                      variant: "text-md/normal",
                                      color: d ? "text-feedback-critical" : "text-default",
                                      children: `${s.length} errors`,
                                  }),
                                  (0, r.jsx)(C.E, {
                                      variant: "text-md/normal",
                                      color: c ? "text-feedback-warning" : "text-default",
                                      children: `${i.length} warnings`,
                                  }),
                                  (0, r.jsx)(h.$, { variant: "primary", size: "sm", onClick: t, text: "Reset" }),
                              ],
                          })
                        : (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Drop asset folder to validate." }),
                    (0, r.jsx)(t8.h, { size: 16 }),
                    d &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(A.D, { variant: "heading-lg/bold", children: "Errors" }),
                                (0, r.jsx)(t8.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: c8.ck,
                                    children: s.map((e, t) => {
                                        let [a, n] = e;
                                        return (0, r.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-critical",
                                                        children: a,
                                                    }),
                                                    n.length > 0 &&
                                                        (0, r.jsx)("ul", {
                                                            className: c8.ck,
                                                            children: n.map((e, t) =>
                                                                (0, r.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, r.jsx)(C.E, {
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
                                (0, r.jsx)(A.D, { variant: "heading-lg/bold", children: "Warnings" }),
                                (0, r.jsx)(t8.h, { size: 8 }),
                                (0, r.jsx)("ul", {
                                    className: c8.ck,
                                    children: Object.entries(n).map((e, t) => {
                                        let [a, n] = e;
                                        return (0, r.jsxs)(
                                            "li",
                                            {
                                                children: [
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-md/bold",
                                                        color: "text-feedback-warning",
                                                        children: a,
                                                    }),
                                                    n.length > 0 &&
                                                        (0, r.jsx)("ul", {
                                                            className: c8.ck,
                                                            children: n.map((e, t) =>
                                                                (0, r.jsx)(
                                                                    "li",
                                                                    {
                                                                        children: (0, r.jsx)(C.E, {
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
    us = () => {
        let { previewEnabled: e, setPreviewEnabled: t, clearAssets: a } = (0, cP.JE)(),
            { ignoredFilenames: n, clearAssets: l, clearIgnoredFilenames: s, processAndUpsertAssets: i } = (0, eg.ds)(),
            { setDropHandler: d } = o.useContext(c3),
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
                    (0, r.jsx)(C.E, {
                        variant: "text-md/normal",
                        children: "Drop files in this panel to begin preview.",
                    }),
                    (0, r.jsxs)("div", {
                        className: c8.sy,
                        children: [
                            (0, r.jsx)(tf.d, { checked: e, onChange: (e) => t(e) }),
                            (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Enable Preview" }),
                            (0, r.jsx)(e_.K, {
                                variant: "icon-only",
                                size: "sm",
                                onClick: c4,
                                icon: cR.c,
                                "aria-label": "Open preview instructions",
                            }),
                        ],
                    }),
                    (0, r.jsx)(c7, {}),
                    (0, r.jsx)(ue, {}),
                    (0, r.jsx)(ua, { clearAssets: l, clearIgnoredFiles: s }),
                    (0, r.jsx)(un, { ignoredFiles: n, handleClearIgnoredFiles: s }),
                ],
            })
        );
    },
    ui = () => {
        let [e, t] = o.useState("preview");
        return (0, r.jsxs)("div", {
            className: c8.kL,
            children: [
                (0, r.jsx)(cM.I, {
                    options: c6,
                    value: e,
                    onChange: (e) => {
                        let { value: a } = e;
                        return t(a);
                    },
                    className: c8.Vj,
                    optionClassName: c8.UK,
                }),
                (0, r.jsx)(t8.h, { size: 8 }),
                "preview" === e && (0, r.jsx)(us, {}),
                "validate" === e && (0, r.jsx)(ul, {}),
                (0, r.jsx)(t8.h, { size: 16 }),
            ],
        });
    },
    ur = (e) => {
        let { children: t } = e,
            [a, n] = o.useState(() => () => {}),
            l = o.useMemo(() => ({ setDropHandler: (e) => n(() => e) }), []);
        return (0, r.jsx)(c3.Provider, { value: l, children: (0, r.jsx)(c$, { onDrop: a, children: t }) });
    };
var uo = a(663803),
    ud = a(859040),
    uc = a(385815);
let uu = () => {
    let e = (0, k.bG)([ti.A], () => ti.A.skipNumCategories);
    return (0, r.jsxs)("div", {
        className: uc.k,
        children: [
            (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Hide first # of categories" }),
            (0, r.jsx)(uo.l, {
                value: e,
                onChange: (e) => {
                    (0, ud.ue)(e);
                },
                minValue: 0,
                maxValue: 100,
            }),
        ],
    });
};
var um =
        (((n = {}).DEFAULT = "default"),
        (n.DEFAULT_WITH_ORB_SHELF = "default_with_orb_shelf"),
        (n.ORB_TAB = "orb_tab"),
        (n.FRAMES = "frames"),
        (n.FRAMES_PINNED = "frames_pinned"),
        n),
    uh = a(295811),
    ux = a(172471);
let up = () => {
        let e = (0, k.bG)([uh.A], () => uh.A.getShopHomeConfigOverride()),
            t = [
                { id: "none", label: "DISABLED (no override)", value: void 0 },
                ...Object.values(um).map((e) => ({ id: e, label: e, value: e })),
            ];
        return (0, r.jsx)("div", {
            className: ux.kL,
            children: (0, r.jsx)(x.l, {
                label: "Shop Home Override",
                options: t,
                value: e,
                onSelectionChange: (e) => {
                    (0, ud.Or)(e);
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
        });
    },
    ug = () => {
        let [e, t] = o.useState(void 0);
        return (0, r.jsxs)("div", {
            className: y()(ux.kL, ux.fi),
            children: [
                (0, r.jsx)(p.k, {
                    fullWidth: !0,
                    label: "Shop Layout URL Override",
                    value: e,
                    onChange: (e) => ("" === e ? t(void 0) : t(e)),
                    placeholder: "https://cdn.discordapp.com/assets/content/...",
                }),
                (0, r.jsxs)("div", {
                    className: ux.o1,
                    children: [
                        (0, r.jsx)(h.$, {
                            variant: "critical-primary",
                            text: "Clear",
                            onClick: () => {
                                t(void 0), (0, ud.Aq)(void 0);
                            },
                        }),
                        (0, r.jsx)(h.$, {
                            variant: "primary",
                            text: "Set",
                            onClick: () => (0, ud.Aq)("" !== e ? e : void 0),
                        }),
                    ],
                }),
            ],
        });
    },
    uv = (e) => {
        let { className: t } = e,
            a = Object.keys(n1.M).find((e) => "COLLECTIBLES_SHOP_ENTRY_MARKETING" === e);
        return null == a
            ? null
            : (0, r.jsxs)("div", {
                  className: t,
                  children: [
                      (0, r.jsx)(A.D, { variant: "heading-md/semibold", children: "Shop Marketing" }),
                      (0, r.jsx)("div", { style: { zIndex: 1 }, children: (0, r.jsx)(lc, { items: [a] }) }),
                  ],
              });
    };
var uj = a(922529),
    ub = a(628917);
let uf = () => {
        let e = (0, k.bG)([lv.A], () => lv.A.get("shop_disable_cache")),
            t = (0, k.bG)([lv.A], () => lv.A.get("shop_include_unpublished"));
        return (0, r.jsx)(ur, {
            children: (0, r.jsxs)("div", {
                className: ub.Lm,
                children: [
                    (0, r.jsxs)("div", {
                        className: ub.gf,
                        children: [
                            (0, r.jsx)(tf.d, {
                                label: "Disable collectibles cache",
                                checked: e,
                                onChange: (e) => (0, lg.L)("shop_disable_cache", e),
                            }),
                            (0, r.jsx)(tf.d, {
                                label: "Show unpublished collectibles",
                                checked: t,
                                onChange: (e) => (0, lg.L)("shop_include_unpublished", e),
                            }),
                        ],
                    }),
                    (0, r.jsx)(uv, { className: ub._l }),
                    (0, r.jsxs)("div", {
                        className: ub._l,
                        children: [
                            (0, r.jsx)(A.D, { variant: "heading-md/semibold", children: "Shop Overrides" }),
                            (0, r.jsx)(up, {}),
                            (0, r.jsx)(uj.A, { className: ub.yF }),
                            (0, r.jsx)(ug, {}),
                            (0, r.jsx)(uj.A, { className: ub.yF }),
                            (0, r.jsx)(uu, {}),
                            (0, r.jsx)(uj.A, { className: ub.yF }),
                            (0, r.jsx)(ui, {}),
                        ],
                    }),
                ],
            }),
        });
    },
    uy = [
        { id: "unset", label: "Unset", value: dY.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET },
        { id: "all", label: "All", value: dY.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
        { id: "usersWithGame", label: "Users With Game", value: dY.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
        { id: "none", label: "None", value: dY.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
    ];
function u_() {
    let e = o.useRef(null),
        t = dQ.TA.useSetting();
    return (0, r.jsx)("div", {
        ref: e,
        className: y()(tS.nd, ah.n),
        children: (0, r.jsxs)("div", {
            className: ah.k,
            children: [
                (0, r.jsx)(A.D, { variant: "heading-lg/normal", children: "Settings" }),
                (0, r.jsx)(x.l, {
                    label: "Receive DMs In Game",
                    options: uy,
                    value: t,
                    onSelectionChange: dQ.TA.updateSetting,
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            ],
        }),
    });
}
var uC = a(278416),
    uE = a(220631);
function uS(e, t) {
    return e.store.getName().localeCompare(t.store.getName());
}
function uN(e) {
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
        (0, r.jsx)(d.Ip, { className: uE.Dx, children: (0, r.jsx)(aN, { data: n }) })
    );
}
function uA(e) {
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
        className: y()(uE.Dx, uE.Ef),
        children: [
            (0, r.jsx)("textarea", {
                className: uE.Vz,
                value: a,
                onChange: (e) => n(e.target.value),
                spellCheck: !1,
                "aria-label": "Edit local variables as JSON",
            }),
            null != l && (0, r.jsx)("div", { className: uE.Xf, role: "alert", children: l }),
            (0, r.jsxs)("div", {
                className: uE.KA,
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
let uk = [
    {
        key: "name",
        cellClassName: uE.__invalid_eventColumn,
        render(e) {
            let { store: t } = e;
            return t.getName();
        },
    },
];
function uI(e) {
    let { store: t, initialHeight: a } = e,
        n = o.useMemo(() => {
            let e;
            return (
                (e = [
                    {
                        id: "local",
                        name: "Local Variables",
                        group: aD.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVars
                                ? (0, r.jsxs)("div", {
                                      className: uE.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVars" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(uN, { store: t, dataGetter: (e) => e.__getLocalVars() });
                        },
                    },
                    {
                        id: "instance",
                        name: "Store Instance",
                        group: aD.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return (0, r.jsx)(uN, { store: t, dataGetter: (e) => e });
                        },
                    },
                ]),
                null != t.__getLocalVars &&
                    e.push({
                        id: "edit-local",
                        name: "Edit Local Variables",
                        group: aD.fu.NONE,
                        render(e) {
                            let { store: t } = e;
                            return null == t.__getLocalVarsEditConfig
                                ? (0, r.jsxs)("div", {
                                      className: uE.Dx,
                                      children: [
                                          "Store is missing ",
                                          (0, r.jsx)("code", { children: "__getLocalVarsEditConfig" }),
                                          " method.",
                                      ],
                                  })
                                : (0, r.jsx)(uA, { store: t });
                        },
                    }),
                e
            );
        }, [t]),
        { TabBar: l, renderSelectedTab: s } = (0, aD.Ay)({ tabs: n }, []);
    return (0, r.jsxs)(aT, {
        className: uE.rf,
        minHeight: 100,
        initialHeight: a,
        children: [
            (0, r.jsx)(l, {}),
            (0, r.jsxs)(aj.Ay, {
                className: y()(tS.jr, uE.nZ),
                children: [
                    (0, r.jsx)(aj.Ay.Icon, { icon: uC.g, tooltip: t.getName() }),
                    (0, r.jsx)(aj.Ay.Title, { children: t.getName() }),
                ],
            }),
            s({ store: t }),
        ],
    });
}
function uT() {
    let e = o.useRef(null),
        [t, a] = o.useState(""),
        n = k.il.getAll(),
        l = o
            .useMemo(() => n.map((e) => ({ key: e._dispatchToken, store: e })).sort(uS), [n])
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
        className: y()(tS.nd, uE.nd),
        children: [
            (0, r.jsx)("div", {
                className: uE.KE,
                children: (0, r.jsx)(nt.I, {
                    size: "sm",
                    query: t,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: "Search stores",
                    "aria-label": "Search stores",
                }),
            }),
            (0, r.jsx)(tN, { columns: uk, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != d &&
                (0, r.jsx)(uI, { store: d, initialHeight: null != e.current ? e.current.clientHeight / 2 : 300 }, s),
        ],
    });
}
var uD = a(91871),
    uO = a.n(uD);
let uR = [
        {
            key: "id",
            cellClassName: nf.Hz,
            render(e) {
                let { experimentId: t } = e;
                return t;
            },
        },
        {
            key: "bucket",
            cellClassName: nf.QN,
            render(e) {
                let { descriptor: t } = e;
                return t.bucket;
            },
        },
        {
            key: "timestamp",
            cellClassName: nf.QN,
            render(e) {
                let { timestamp: t } = e;
                return t.toLocaleString();
            },
        },
    ],
    uw = [
        {
            id: "details",
            name: "Details",
            group: aD.fu.NONE,
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
                    d = a6()(s);
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(aj.Ay, {
                            className: y()(tS.jr, nf.nZ),
                            children: [
                                (0, r.jsx)(aj.Ay.Icon, { icon: a9.U, tooltip: t }),
                                (0, r.jsx)(aj.Ay.Title, { children: t }),
                            ],
                        }),
                        (0, r.jsxs)(nv, {
                            className: nf.ZK,
                            children: [
                                (0, r.jsx)(nj, {
                                    name: "Timestamp (local)",
                                    children: (0, r.jsx)("time", {
                                        dateTime: s.toISOString(),
                                        title: (0, ni.i$)(d, "LLLL"),
                                        children: (0, ni.mk)(d),
                                    }),
                                }),
                                "guild" === a.type &&
                                    (0, r.jsx)(nj, {
                                        name: "Guild ID",
                                        children: (0, r.jsx)("code", { children: a.guildId }),
                                    }),
                                (0, r.jsx)(nj, {
                                    name: "Bucket",
                                    children: (0, r.jsx)("code", { children: a.bucket }),
                                }),
                                (0, r.jsx)(nj, {
                                    name: "Revision",
                                    children: (0, r.jsx)("code", { children: a.revision }),
                                }),
                                (0, r.jsx)(nj, { name: "Override", children: (0, r.jsx)(nb, { value: a.override }) }),
                                (0, r.jsx)(nj, {
                                    name: "Exposure type",
                                    children: (0, r.jsx)("code", { children: n }),
                                }),
                                (0, r.jsx)(nj, { name: "Excluded", children: (0, r.jsx)(nb, { value: l }) }),
                                (0, r.jsx)(nj, { name: "Previously tracked", children: (0, r.jsx)(nb, { value: o }) }),
                                (0, r.jsx)(nj, { name: "Location", children: (0, r.jsx)("code", { children: i }) }),
                            ],
                        }),
                    ],
                });
            },
        },
    ];
function uM() {
    let [e, t] = o.useState(""),
        a = o.useRef(null),
        n = (0, k.yK)([np], () => np.loggedTriggers),
        l = o.useMemo(
            () =>
                n
                    .filter((t) => 0 === e.length || uO()(e, t.experimentId))
                    .sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()),
            [n, e],
        ),
        [s, i] = o.useState(void 0),
        d = l.find((e) => e.key === s),
        { TabBar: c, renderSelectedTab: u } = (0, aD.Ay)({ tabs: uw }, []),
        m = (0, k.bG)([np], () => np.trackTriggers),
        h = o.useCallback((e) => {
            ty.h.dispatch({ type: "SET_TRACK_TRIGGERS", enabled: e });
        }, []),
        x = m ? "Stop Tracking" : "Start Tracking";
    return (0, r.jsxs)("div", {
        ref: a,
        className: y()(tS.nd, nf.nd),
        children: [
            (0, r.jsxs)("div", {
                className: nf.rh,
                children: [
                    (0, r.jsx)(lw.m, {
                        text: x,
                        children: (0, r.jsx)(e_.K, {
                            size: "sm",
                            variant: m ? "active" : "primary",
                            icon: m ? lP.E : lL.u,
                            "aria-label": x,
                            onClick: () => h(!m),
                        }),
                    }),
                    (0, r.jsx)(nt.I, {
                        size: "sm",
                        query: e,
                        onChange: t,
                        onClear: () => t(""),
                        placeholder: "Search by experiment id",
                    }),
                    (0, r.jsx)(e_.K, {
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": aH.intl.string(aH.t.VkKicb),
                        icon: ne.u,
                        onClick: I.eY,
                    }),
                ],
            }),
            (0, r.jsx)(tN, { columns: uR, data: l, selectedRowKey: s, onClickRow: (e) => i(e.key) }),
            null != d &&
                (0, r.jsxs)(aT, {
                    className: nf.rf,
                    minHeight: 100,
                    initialHeight: null != a.current ? a.current.clientHeight / 2 : 300,
                    children: [(0, r.jsx)(c, {}), u({ loggedTrigger: d })],
                }),
        ],
    });
}
var uL = a(512950),
    uP = a(324861),
    uU = a(243655);
let uG = function () {
    let { resetOnboardingExperience: e, resetQuestStatus: t } = (0, uP.A)();
    return (0, r.jsx)("div", {
        className: uU.k,
        children: (0, r.jsxs)(u.n, {
            label: "Virtual Currency Configuration",
            description: "Click the button below to reset your onboarding state for Virtual Currency.",
            children: [
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(h.$, {
                        text: "Reset Onboarding State",
                        onClick: () => {
                            e(), t(), (0, an.pX)($.BVt.APP);
                        },
                    }),
                }),
                (0, r.jsx)(uL.p, {
                    messageType: uL.Y.INFO,
                    children:
                        "Your may have to refresh your client after being redirected to the main application in order to see these",
                }),
            ],
        }),
    });
};
var uB = a(899e3),
    uF = a(761853),
    uV = a(731854);
let u$ = [
        ["codecH264", "H264"],
        ["codecH265", "H265 / HEVC"],
        ["codecAv1", "AV1"],
    ],
    uW = [
        ["encNvidiaDx11", "NVIDIA Direct3D 11"],
        ["encNvidiaCuda", "NVIDIA CUDA"],
        ["encAmdDx11", "AMD Direct3D 11"],
        ["encIntelDx11", "Intel Direct3D 11"],
        ["encIntelCpu", "Intel CPU"],
        ["encWmfCpu", "Media Foundation CPU"],
        ["encWmfGpu", "Media Foundation GPU"],
        ["encWmfDx11", "Media Foundation Direct3D 11 (NYI)"],
    ],
    uz = [
        ["capGraphicsCapture", "WGC / Windows Graphics Capture"],
        ["capDxgi", "DDA / DXGI Output Duplication"],
        ["capGdi", "GDI / PrintWindow + BitBlt"],
        ["capVideoHook", "Video Hook"],
    ],
    uH = [
        ["bypassHybridGpuFpsRestriction", "WGC: Bypass Hybrid-GPU 60 FPS Restriction"],
        ["gdiForceBitblt", "GDI: Force Allow BitBlt"],
        ["allowHdr", "Allow HDR Capture"],
    ];
function uK(e) {
    let { title: t, toggles: a, state: n } = e;
    return (0, r.jsxs)(S.B, {
        gap: 8,
        children: [
            (0, r.jsx)(C.E, { variant: "text-lg/bold", children: t }),
            a.map((e) => {
                let [t, a] = e;
                return (0, r.jsx)(rT.S, { label: a, checked: !!n[t], onChange: () => (0, uB.yn)({ [t]: !n[t] }) }, t);
            }),
        ],
    });
}
function uY() {
    let e = (0, k.bG)([uB.Ay], () => uB.Ay.getSnapshot()),
        t = (0, k.bG)([uF.Ay], () => uF.Ay.supports(uV.O5.VIDEO));
    return (0, r.jsxs)(d.Ip, {
        className: tS.nd,
        children: [
            (0, r.jsx)(aO.c, { gap: 16 }),
            (0, r.jsx)(uK, { title: "Video Codecs (Sender)", toggles: u$, state: e }),
            t
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(aO.c, { gap: 16 }),
                          (0, r.jsx)(uK, { title: "Video Encoders", toggles: uW, state: e }),
                          (0, r.jsx)(aO.c, { gap: 16 }),
                          (0, r.jsx)(uK, { title: "Capture Sources", toggles: uz, state: e }),
                          (0, r.jsx)(aO.c, { gap: 16 }),
                          (0, r.jsx)(uK, { title: "Capture Options", toggles: uH, state: e }),
                      ],
                  })
                : null,
            (0, r.jsx)(aO.c, { gap: 16 }),
            (0, r.jsx)(uK, {
                title: "Preview",
                toggles: [["alwaysShowCapturePreview", "Always Show (ignore main window focus)"]],
                state: e,
            }),
            (0, r.jsx)(aO.c, { gap: 16 }),
        ],
    });
}
var uq = a(77729),
    uJ = a(36934);
function uQ() {
    let [e, t] = o.useState(""),
        [a, n] = o.useState(""),
        [l, s] = o.useState({ status: "idle", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
        i = "processing" === l.status;
    return (0, r.jsx)(d.Ip, {
        className: tS.nd,
        children: (0, r.jsxs)("div", {
            className: uJ.l7,
            children: [
                (0, r.jsx)(C.E, { variant: "text-lg/bold", children: "Batch Audio Processor" }),
                (0, r.jsx)(C.E, {
                    variant: "text-sm/normal",
                    children:
                        "Process wav files through the Discord audio ingest pipeline (WebRTC APM, Krisp, voice filters) and write output to wav files.",
                }),
                (0, r.jsxs)(S.B, {
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
                                let e = await uq.A.fileManager.showOpenDialog({ properties: ["openDirectory"] });
                                e.length > 0 && t(e[0]);
                            },
                        }),
                    ],
                }),
                (0, r.jsxs)(S.B, {
                    direction: "horizontal",
                    align: "end",
                    gap: 8,
                    children: [
                        (0, r.jsx)(p.k, { fullWidth: !0, value: a, onChange: n, placeholder: "Output directory" }),
                        (0, r.jsx)(h.$, {
                            variant: "secondary",
                            text: "Browse",
                            onClick: async () => {
                                let e = await uq.A.fileManager.showOpenDialog({
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
                              uF.Ay.getMediaEngine().cancelBatchAudioProcessing(),
                                  s((e) => ({ ...e, status: "cancelled" }));
                          }
                        : function () {
                              "" !== e &&
                                  "" !== a &&
                                  (s({ status: "processing", current: 0, total: 0, processed: 0, failed: 0, log: [] }),
                                  uF.Ay.getMediaEngine().processBatchAudioFiles(
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
                    (0, r.jsxs)(S.B, {
                        gap: 4,
                        children: [
                            (0, r.jsxs)(C.E, {
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
                                            className: uJ.TZ,
                                            children: (0, r.jsxs)(C.E, {
                                                variant: "text-xs/normal",
                                                className: e.success ? uJ.$D : uJ.uL,
                                                children: [e.success ? "OK" : "FAIL", " - ", e.filename],
                                            }),
                                        },
                                        t,
                                    ),
                                ),
                            l.log.length > 20 &&
                                (0, r.jsxs)(C.E, {
                                    variant: "text-xs/normal",
                                    children: ["...and ", l.log.length - 20, " more"],
                                }),
                        ],
                    }),
            ],
        }),
    });
}
var uX = a(207898),
    uZ = a.n(uX),
    u0 = a(32880),
    u1 = a(827343),
    u2 = a(964486),
    u8 = a(602674),
    u3 = a(625841),
    u6 = a(74848),
    u5 = a(573908);
function u4(e) {
    let { recording: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(C.E, { variant: "text-sm/normal", children: ["Duration: ", t.audioBuffer.duration] }),
            (0, r.jsxs)(C.E, {
                variant: "text-sm/normal",
                children: ["Num Channels: ", t.audioBuffer.numberOfChannels],
            }),
            (0, r.jsxs)(C.E, { variant: "text-sm/normal", children: ["Sample Rate: ", t.audioBuffer.sampleRate] }),
            (0, r.jsxs)(C.E, { variant: "text-sm/normal", children: ["Noise Suppression: ", t.suppression] }),
            (0, r.jsxs)(C.E, {
                variant: "text-sm/normal",
                children: ["Krisp Suppression Level: ", t.krispSuppressionLevel],
            }),
            (0, r.jsxs)(C.E, {
                variant: "text-sm/normal",
                children: ["Echo Cancellation: ", String(t.echoCancellation)],
            }),
        ],
    });
}
function u9(e) {
    let { recording: t, playing: a, onPlay: n, onStop: l } = e;
    return (0, r.jsx)(ca.N, {
        collapsibleContent: (0, r.jsx)(u4, { recording: t }),
        children: (e) => {
            let { onClick: s } = e;
            return (0, r.jsxs)(_.D, {
                onClick: s,
                children: [
                    (0, r.jsxs)(C.E, {
                        variant: "text-sm/bold",
                        tag: "span",
                        children: [t.inputName, " - ", new Date(t.createdAt).toLocaleString()],
                    }),
                    (0, r.jsx)(_.D, {
                        tag: "span",
                        onClick: (e) => {
                            e.stopPropagation(), a ? l() : n(t);
                        },
                        children: a ? (0, r.jsx)(lP.E, { size: "xxs" }) : (0, r.jsx)(lL.u, { size: "xxs" }),
                    }),
                    (0, r.jsx)(_.D, {
                        tag: "span",
                        onClick: (e) => {
                            let a, n, l;
                            e.stopPropagation(),
                                (a = new Blob([uZ()(t.audioBuffer)], { type: "audio/wav" })),
                                (n = URL.createObjectURL(a)),
                                ((l = document.createElement("a")).href = n),
                                (l.download = `${t.inputName}-${new Date(t.createdAt).toLocaleString()}.wav`),
                                l.click(),
                                URL.revokeObjectURL(n);
                        },
                        children: (0, r.jsx)(u0.s, { size: "xxs" }),
                    }),
                ],
            });
        },
    });
}
function u7() {
    let { name: e } = (0, u6.x5)(uV.oh.AUDIO_INPUT),
        [t, a] = o.useState(!1),
        [n, l] = o.useState([]),
        s = (0, k.bG)([uF.Ay], () => uF.Ay.getKrispSuppressionLevel()),
        [i, c] = o.useState(null),
        u = o.useRef(null),
        m = o.useRef(null),
        [h, p] = o.useState(0.5),
        {
            krispModels: g,
            krispModelOverride: v,
            inputMode: j,
            echoCancellation: b,
            autoThreshold: f,
            vadUseKrisp: y,
            vadKrispActivationThreshold: _,
            noiseCancellation: E,
            noiseSuppression: N,
            noiseSuppressionSupported: A,
            noiseCancellationSupported: I,
            noiseCancellationEnableStats: T,
            vadDuringPreProcess: D,
        } = (0, k.cf)([uF.Ay], () => ({
            krispModels: uF.Ay.getKrispModels(),
            krispModelOverride: uF.Ay.getKrispModelOverride(),
            echoCancellation: uF.Ay.getEchoCancellation(),
            autoThreshold: uF.Ay.getModeOptions().autoThreshold,
            vadUseKrisp: uF.Ay.getModeOptions().vadUseKrisp,
            inputMode: uF.Ay.getMode(),
            vadKrispActivationThreshold: uF.Ay.getKrispVadActivationThreshold(),
            noiseCancellation: uF.Ay.getNoiseCancellation(),
            noiseSuppression: uF.Ay.getNoiseSuppression(),
            noiseSuppressionSupported: uF.Ay.isNoiseSuppressionSupported(),
            noiseCancellationSupported: uF.Ay.isNoiseCancellationSupported(),
            noiseCancellationEnableStats: uF.Ay.getKrispEnableStats(),
            vadDuringPreProcess: uF.Ay.getModeOptions().vadDuringPreProcess,
        })),
        O = E ? "KRISP" : N ? "STANDARD" : "NONE",
        R = (0, u8.v)(),
        w = o.useCallback(() => {
            u.current?.stop(), (u.current = null), c(null);
        }, []);
    function M() {
        uF.Ay.getMediaEngine().stopRecordingRawSamples();
    }
    function L(e) {
        if ((t && M(), w(), null == R)) return;
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
        (0, u2.l0)(() => {
            u1.A.setMode(uF.Ay.getMode(), { vadDuringPreProcess: null, vadKrispActivationThreshold: void 0 });
        });
    let P = [];
    return (
        I && P.push({ id: "krisp", label: "Krisp", value: "KRISP" }),
        A && P.push({ id: "standard", label: "Standard", value: "STANDARD" }),
        P.push({ id: "disabled", label: "Disabled", value: "NONE" }),
        (0, r.jsx)(d.Ip, {
            className: tS.nd,
            children: (0, r.jsxs)("div", {
                className: u5.l,
                children: [
                    (0, r.jsx)(C.E, { variant: "text-lg/bold", children: "Krisp Tester" }),
                    (0, r.jsx)(u3.U, {
                        label: "Input Device",
                        deviceType: uV.oh.AUDIO_INPUT,
                        location: "DevToolsKrispTester",
                    }),
                    (0, r.jsx)(x.l, {
                        label: "Noise Cancellation",
                        value: O,
                        onSelectionChange: (e) => {
                            u1.A.setNoiseCancellation("KRISP" === e), u1.A.setNoiseSuppression("STANDARD" === e);
                        },
                        options: P,
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                    "KRISP" === O &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(cw.A, {
                                    label: "Krisp Suppression Level",
                                    initialValue: s,
                                    onValueChange: u1.A.setKrispSuppressionLevel,
                                    minValue: 0,
                                    maxValue: 100,
                                }),
                                (0, r.jsx)(x.l, {
                                    label: "Krisp Model Override",
                                    clearable: !0,
                                    value: v,
                                    options: g.map((e) => ({ label: e, value: e, id: e })),
                                    onSelectionChange: (e) => {
                                        u1.A.setKrispModelOverride(e ?? "");
                                    },
                                    selectionMode: "single",
                                    fullWidth: !0,
                                }),
                                (0, r.jsx)(tf.d, {
                                    label: "Enable Stats",
                                    checked: T,
                                    onChange: (e) => u1.A.setNoiseCancellationEnableStats(e),
                                }),
                            ],
                        }),
                    j === uV.TB.VOICE_ACTIVITY &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(tf.d, {
                                    label: "Auto Threshold",
                                    checked: f,
                                    onChange: (e) => u1.A.setMode(uV.TB.VOICE_ACTIVITY, { autoThreshold: e }),
                                }),
                                f &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (0, r.jsx)(tf.d, {
                                                label: "Use Krisp VAD",
                                                checked: y,
                                                onChange: (e) => u1.A.setMode(uV.TB.VOICE_ACTIVITY, { vadUseKrisp: e }),
                                            }),
                                            y &&
                                                (0, r.jsx)(cw.A, {
                                                    label: "Krisp VAD Activation Threshold",
                                                    initialValue: _,
                                                    onValueChange: (e) =>
                                                        u1.A.setMode(uV.TB.VOICE_ACTIVITY, {
                                                            vadKrispActivationThreshold: e,
                                                        }),
                                                    minValue: 0,
                                                    maxValue: 1,
                                                }),
                                        ],
                                    }),
                                (0, r.jsx)(tf.d, {
                                    label: "Run Before Processing",
                                    checked: D ?? !1,
                                    onChange: (e) => u1.A.setMode(uV.TB.VOICE_ACTIVITY, { vadDuringPreProcess: e }),
                                }),
                            ],
                        }),
                    (0, r.jsx)(tf.d, {
                        label: "Echo Cancellation",
                        checked: b,
                        onChange: (e) => u1.A.setEchoCancellation(e),
                    }),
                    (0, r.jsxs)(S.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "Recorder" }),
                            (0, r.jsx)(a5.$n, {
                                color: t ? a5.$n.Colors.RED : a5.$n.Colors.BRAND,
                                onClick: t
                                    ? M
                                    : function () {
                                          w(),
                                              a(!0),
                                              u1.A.setLoopback("krisp_test", !0),
                                              uF.Ay.getMediaEngine().startRecordingRawSamples((t, n, i) => {
                                                  a(!1), u1.A.setLoopback("krisp_test", !1);
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
                                                          echoCancellation: b,
                                                          krispSuppressionLevel: s,
                                                      },
                                                  ]);
                                              });
                                      },
                                children: t ? "Stop Recording" : "Start Recording",
                            }),
                        ],
                    }),
                    (0, r.jsx)(cw.A, {
                        label: "Volume",
                        initialValue: h,
                        asValueChanges: function (e) {
                            null != m.current && ((m.current.gain.value = e), p(e));
                        },
                        minValue: 0,
                        maxValue: 1,
                    }),
                    (0, r.jsxs)(S.B, {
                        gap: 4,
                        children: [
                            (0, r.jsx)(C.E, { variant: "text-sm/semibold", children: "Recordings" }),
                            n.map((e, t) =>
                                (0, r.jsx)(u9, { recording: e, playing: e === i, onPlay: L, onStop: w }, t),
                            ),
                        ],
                    }),
                ],
            }),
        })
    );
}
var me = a(742158),
    mt = a(717558),
    ma = a(85448),
    mn = a(763827),
    ml = a(977997),
    ms = a(647160);
let mi = [
    { value: "line", label: "Line" },
    { value: "arc", label: "Arc" },
    { value: "grid", label: "Grid" },
    { value: "manual", label: "Manual" },
];
function mr(e, t) {
    let a = t / 2;
    return { x: a + (e.x / 7) * a, y: a + (e.z / 7) * a };
}
function mo(e, t) {
    let a = 7 / t,
        n = e / 2;
    return { zoom: a, pan: { x: n * (1 - a), y: n - n * (1 - t / 14) * a } };
}
function md(e) {
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
    (0, u2.u5)(() => {
        let e = u.current;
        if (null == e) return;
        let t = !0,
            a = new ResizeObserver((e) => {
                let a = Math.floor(e[0].contentRect.width);
                a <= 0 || (t && ((t = !1), i(mo(a, l))), c(a));
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
                        i = Math.max(mc, Math.min(mu, a * Math.exp(-t.deltaY * mm))),
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
                n < a.length && e.set(t.userId, mr(a[n], d));
            });
        return e;
    }, [t, n, a, h, d]);
    o.useEffect(() => {
        if ("manual" === t || 0 === d) return;
        let e = new Map();
        n.forEach((t, n) => {
            n < a.length && e.set(t.userId, mr(a[n], d));
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
        _ = o.useCallback(
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
                uF.Ay.getMediaEngine().eachConnection((e) => {
                    e.setUserPosition(p, o);
                });
            },
            [v, p, d, s.pan.x, s.pan.y, s.zoom, i],
        ),
        C = o.useCallback(() => {
            g(null), j(!1);
        }, []),
        E = v ? "grabbing" : "default";
    return (0, r.jsxs)("div", {
        ref: u,
        className: ms.BW,
        style: { cursor: E },
        onMouseDown: y,
        onMouseMove: _,
        onMouseUp: C,
        onMouseLeave: C,
        onContextMenu: (e) => e.preventDefault(),
        children: [
            (0, r.jsx)("canvas", { ref: m, width: d, height: d, className: ms.Ji }),
            n.map((e) => {
                let a = b.get(e.userId);
                return null == a
                    ? null
                    : (0, r.jsx)(
                          mh,
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
let mc = 0.25,
    mu = 4,
    mm = 0.002;
function mh(e) {
    let { userId: t, x: a, y: n, draggable: l, onMouseDown: s } = e,
        i = (0, k.bG)([G.default], () => G.default.getUser(t)),
        o = (0, mt.A)({ userId: t });
    return null == i
        ? null
        : (0, r.jsx)(lw.m, {
              text: i.username,
              children: (0, r.jsx)("div", {
                  className: ms.my,
                  style: { left: a - 12, top: n - 12, cursor: l ? "grab" : "default" },
                  onMouseDown: (e) => s(e, t),
                  children: (0, r.jsx)(ma.A, {
                      userId: t,
                      size: rj._3.SIZE_24,
                      src: i.getAvatarURL(void 0, 24),
                      speaking: o,
                      ringing: !1,
                  }),
              }),
          });
}
function mx() {
    return uF.Ay.getMediaEngine().supports(uV.O5.SPATIAL_AUDIO)
        ? (0, r.jsx)(mp, {})
        : (0, r.jsx)(d.Ip, {
              className: tS.nd,
              children: (0, r.jsxs)("div", {
                  className: ms.kL,
                  children: [
                      (0, r.jsx)(A.D, { variant: "heading-lg/semibold", className: ms.R_, children: "Spatial Audio" }),
                      (0, r.jsx)(C.E, {
                          variant: "text-md/normal",
                          children: "Spatial audio is not supported by this client. Update Discord to enable.",
                      }),
                  ],
              }),
          });
}
function mp() {
    let e = (0, k.bG)([uF.Ay], () => uF.Ay.getAudioMixerSettings()),
        t = rk.x.DEFAULT,
        [a, n] = o.useState({ zoom: 1, pan: { x: 0, y: 0 } }),
        [l, s] = o.useState(0),
        i = (0, k.bG)([mn.A, t6.A], () => {
            let e = mn.A.getChannelId();
            return null != e ? t6.A.getChannel(e) : null;
        }),
        c = no.default.getId(),
        u = i?.id,
        m = (0, k.yK)(
            [ml.A],
            () => (null == u ? [] : Object.values(ml.A.getVoiceStatesForChannel(u)).filter((e) => e.userId !== c)),
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
            uF.Ay.getMediaEngine().eachConnection((e) => {
                m.forEach((t, a) => {
                    a < p.length && e.setUserPosition(t.userId, p[a]);
                });
            });
    }, [x, p, m]);
    let g = o.useCallback(
            (a) => {
                u1.A.setAudioMixerSettings({ ...e, ...a }, t);
            },
            [e, t],
        ),
        v = o.useRef(null),
        j = o.useCallback(
            (e) => {
                null !== v.current && clearTimeout(v.current),
                    (v.current = window.setTimeout(() => {
                        g({ roomSize: e }), (v.current = null);
                    }, 500));
            },
            [g],
        );
    return (0, r.jsx)(d.Ip, {
        className: tS.nd,
        children: (0, r.jsxs)("div", {
            className: ms.kL,
            children: [
                (0, r.jsxs)("div", {
                    className: ms.ne,
                    children: [
                        (0, r.jsx)(A.D, {
                            variant: "heading-lg/semibold",
                            className: ms.R_,
                            children: "Spatial Audio",
                        }),
                        (0, r.jsxs)("div", {
                            className: ms.nM,
                            children: [
                                (0, r.jsx)(C.E, { variant: "text-md/normal", children: "Enabled" }),
                                (0, r.jsx)(tf.d, { checked: e.enabled, onChange: (e) => g({ enabled: e }) }),
                            ],
                        }),
                        (0, r.jsx)(aO.c, { className: ms.yF }),
                        (0, r.jsx)(me.z, { className: ms.Pf, children: "Spatial Blend" }),
                        (0, r.jsx)(cw.A, {
                            className: ms.aw,
                            initialValue: e.spatialBlend,
                            value: e.spatialBlend,
                            minValue: 0,
                            maxValue: 1,
                            asValueChanges: (e) => g({ spatialBlend: e }),
                            onValueRender: (e) => e.toFixed(2),
                        }),
                        (0, r.jsx)(me.z, { className: ms.Pf, children: "Room Size (m\xb2)" }),
                        (0, r.jsx)(cw.A, {
                            className: ms.aw,
                            initialValue: e.roomSize ?? 25,
                            value: e.roomSize ?? 25,
                            minValue: 10,
                            maxValue: 150,
                            asValueChanges: j,
                            onValueRender: (e) => e.toFixed(0),
                        }),
                        (0, r.jsx)(aO.c, { className: ms.yF }),
                        (0, r.jsx)(me.z, { className: ms.Pf, children: "Placement Mode" }),
                        (0, r.jsx)("div", {
                            className: ms.XU,
                            children: mi.map((t) => {
                                let { value: a, label: s } = t;
                                return (0, r.jsx)(
                                    "button",
                                    {
                                        className: `${ms._V} ${x === a ? ms.cB : ""}`,
                                        onClick: () => {
                                            g({ mode: a }), l > 0 && n(mo(l, e.distance));
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
                                    (0, r.jsx)(me.z, { className: ms.Pf, children: "Distance" }),
                                    (0, r.jsx)(cw.A, {
                                        className: ms.aw,
                                        initialValue: e.distance,
                                        value: e.distance,
                                        minValue: 1,
                                        maxValue: 10,
                                        asValueChanges: (e) => g({ distance: e }),
                                        onValueRender: (e) => e.toFixed(1),
                                    }),
                                ],
                            }),
                        "line" === x &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(me.z, { className: ms.Pf, children: "Spread" }),
                                    (0, r.jsx)(cw.A, {
                                        className: ms.aw,
                                        initialValue: e.spread,
                                        value: e.spread,
                                        minValue: 0,
                                        maxValue: 10,
                                        asValueChanges: (e) => g({ spread: e }),
                                        onValueRender: (e) => e.toFixed(1),
                                    }),
                                ],
                            }),
                        "arc" === x &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(me.z, { className: ms.Pf, children: "Arc Angle" }),
                                    (0, r.jsx)(cw.A, {
                                        className: ms.aw,
                                        initialValue: e.arcAngle ?? 180,
                                        value: e.arcAngle ?? 180,
                                        minValue: 0,
                                        maxValue: 180,
                                        asValueChanges: (e) => g({ arcAngle: e }),
                                        onValueRender: (e) => `${e.toFixed(0)}\xb0`,
                                    }),
                                ],
                            }),
                        "grid" === x &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(me.z, { className: ms.Pf, children: "Columns" }),
                                    (0, r.jsx)(cw.A, {
                                        className: ms.aw,
                                        initialValue: e.gridColumns ?? 3,
                                        value: e.gridColumns ?? 3,
                                        minValue: 2,
                                        maxValue: 6,
                                        keyboardStep: 1,
                                        asValueChanges: (e) => g({ gridColumns: Math.round(e) }),
                                        onValueRender: (e) => e.toFixed(0),
                                    }),
                                    (0, r.jsx)(me.z, { className: ms.Pf, children: "Spacing (m)" }),
                                    (0, r.jsx)(cw.A, {
                                        className: ms.aw,
                                        initialValue: e.gridSpacing ?? 1.5,
                                        value: e.gridSpacing ?? 1.5,
                                        minValue: 0.5,
                                        maxValue: 3,
                                        asValueChanges: (e) => g({ gridSpacing: e }),
                                        onValueRender: (e) => e.toFixed(1),
                                    }),
                                ],
                            }),
                        (0, r.jsx)(aO.c, { className: ms.yF }),
                        (0, r.jsx)(h.$, {
                            variant: "secondary",
                            size: "sm",
                            text: "Reset to Defaults",
                            onClick: () => {
                                let a = { ...uF.bY, enabled: e.enabled };
                                u1.A.setAudioMixerSettings(a, t), l > 0 && n(mo(l, a.distance));
                            },
                        }),
                    ],
                }),
                (0, r.jsx)(md, {
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
var mg = a(803306),
    mv = a(243217),
    mj = a(189213),
    mb = a(528265),
    mf = a(935208),
    my = a(878784);
let m_ = [
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
function mC() {
    let [e, t] = o.useState(!1),
        a = (0, k.bG)([G.default], () => G.default.getCurrentUser()),
        n = (0, my.Lh)(),
        l = (0, k.bG)([rO.A], () => rO.A.getPremiumTypeSubscription()),
        s = null != n ? (l9.VD[n]?.tenureReqNumMonths ?? 0) : 0,
        i = o.useCallback(
            async (e) => {
                let n = new Date();
                e > 0 ? n.setMonth(n.getMonth() - e) : n.setDate(n.getDate() - 7), n.setDate(n.getDate() - 2);
                let s = {
                    subscription_status: $.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: mf.default.fromTimestamp(n.getTime()),
                };
                t(!0),
                    await nB.Bo.patch({ url: `/debug/subscriptions/${l.id}`, body: s, rejectWithError: !1 }),
                    await (0, mg.eO)(a.id),
                    await (0, o0.hP)(),
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
            options: m_,
            onSelectionChange: i,
        });
}
var mE =
        (((l = {})[(l.DEFAULT = 0)] = "DEFAULT"),
        (l[(l.SUCCESSFUL = 1)] = "SUCCESSFUL"),
        (l[(l.FAILURE = 2)] = "FAILURE"),
        (l[(l.NONE = 3)] = "NONE"),
        l),
    mS =
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
async function mN(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetDate: n, paymentType: l, sendReminderEmail: s } = a;
    return (
        await nB.Bo.post({
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
var mA = a(601107),
    mk = a(142798);
let mI = {
        [$.Dmq.UNPAID]: "Unpaid",
        [$.Dmq.ACTIVE]: "Active",
        [$.Dmq.PAST_DUE]: "Past Due",
        [$.Dmq.CANCELED]: "Canceled",
        [$.Dmq.ENDED]: "Ended",
        [$.Dmq.ACCOUNT_HOLD]: "Account Hold",
        [$.Dmq.BILLING_RETRY]: "Billing Retry",
        [$.Dmq.PAUSED]: "Paused",
        [$.Dmq.PAUSE_PENDING]: "Pause Pending",
    },
    mT = {
        [mA.qf.UNKNOWN]: "Unknown",
        [mA.qf.ADMIN]: "Admin",
        [mA.qf.USER]: "User",
        [mA.qf.FRACTIONAL_PREMIUM]: "Fractional Premium",
        [mA.qf.DEFERRED_START]: "Deferred Start",
        [mA.qf.USER_TEMPORARY_BAN]: "User Temp Ban",
    },
    mD = [
        { id: "unpaid", label: "Unpaid", value: $.Dmq.UNPAID },
        { id: "active", label: "Active", value: $.Dmq.ACTIVE },
        { id: "pastDue", label: "Past Due", value: $.Dmq.PAST_DUE },
        { id: "canceled", label: "Canceled", value: $.Dmq.CANCELED },
        { id: "ended", label: "Ended", value: $.Dmq.ENDED },
        { id: "accountHold", label: "Account Hold", value: $.Dmq.ACCOUNT_HOLD },
        { id: "billingRetry", label: "Billing Retry", value: $.Dmq.BILLING_RETRY },
        { id: "paused", label: "Paused", value: $.Dmq.PAUSED },
        { id: "pausePending", label: "Pause Pending", value: $.Dmq.PAUSE_PENDING },
    ];
function mO(e) {
    let { subscription: t, onClose: a, onUpdated: n, transitionState: l } = e,
        [s, i] = o.useState(a6()()),
        [d, c] = o.useState(a6()().format("HH:mm")),
        [m, h] = o.useState(!1),
        [x, p] = o.useState(void 0),
        g = async () => {
            if (null == s) return void p("Please select a target date");
            let [e, l] = d.split(":").map(Number),
                i = s.clone().hours(e).minutes(l).seconds(0).milliseconds(0);
            h(!0), p(void 0);
            try {
                await mN(t.id, mS.TIME_TRAVEL, { targetDate: i, paymentType: mE.DEFAULT, sendReminderEmail: !1 }),
                    n(),
                    a();
            } catch (e) {
                p(e.body?.message || e.message || "Failed to time travel");
            } finally {
                h(!1);
            }
        };
    return (0, r.jsx)(mj.Modal, {
        transitionState: l,
        onClose: () => (a(), Promise.resolve()),
        title: "Time Travel Subscription",
        size: "sm",
        actions: [
            { text: "Cancel", variant: "secondary", onClick: a },
            { text: "Time Travel", variant: "primary", onClick: g, disabled: m || null == s },
        ],
        children: (0, r.jsxs)(S.B, {
            gap: 16,
            children: [
                (0, r.jsx)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children:
                        "Select the target date and time to travel the subscription to. This will adjust the subscription period and trigger any necessary invoice operations.",
                }),
                (0, r.jsx)(s6.J, { label: "Target Date", value: s, onSelect: i }),
                (0, r.jsx)(u.n, {
                    label: "Target Time (HH:mm)",
                    children: (0, r.jsx)("input", {
                        type: "time",
                        value: d,
                        onChange: (e) => {
                            c(e.target.value);
                        },
                        className: mk.Qn,
                    }),
                }),
                (0, r.jsxs)(S.B, {
                    gap: 8,
                    children: [
                        (0, r.jsx)(C.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            children: "Current Period",
                        }),
                        (0, r.jsxs)(S.B, {
                            gap: 4,
                            children: [
                                (0, r.jsxs)(C.E, {
                                    variant: "text-xs/normal",
                                    className: mk.JX,
                                    children: ["Start: ", a6()(t.currentPeriodStart).format("YYYY-MM-DD HH:mm")],
                                }),
                                (0, r.jsxs)(C.E, {
                                    variant: "text-xs/normal",
                                    className: mk.JX,
                                    children: ["End: ", a6()(t.currentPeriodEnd).format("YYYY-MM-DD HH:mm")],
                                }),
                            ],
                        }),
                    ],
                }),
                null != x && (0, r.jsx)(E.w, { type: "critical", children: x }),
            ],
        }),
    });
}
function mR(e) {
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
            return mf.default.fromTimestamp(t.getTime());
        },
        N = async (e) => {
            let { status: t = n.status, premiumStreakStart: a, endedAt: s } = e,
                i = {
                    subscription_status: t,
                    ...(null != a ? { premium_streak_started_at: f(a) } : null),
                    ...(null != s ? { ended_at: f(s) } : null),
                };
            await nB.Bo.patch({ url: `/debug/subscriptions/${n.id}`, body: i, rejectWithError: !1 }), l();
        },
        A = async () => {
            try {
                await mN(n.id, mS.RENEW, {
                    targetDate: a6()(new Date()),
                    paymentType: mE.DEFAULT,
                    sendReminderEmail: !1,
                });
            } catch (e) {
                b(e.body?.message || e.message || "Failed to renew subscription");
            }
            l();
        },
        k = l9.hd[n.planIdFromItems]?.premiumType === l9.PremiumTypes.TIER_0,
        I = n.metadata?.ended_at,
        T = null != I ? new Date(I).toISOString().substring(0, 10) : "",
        D = [
            { id: "id", label: `ID: ${n.id}`, isDisabled: !1 },
            {
                id: "status",
                label: `Status: ${(null == t && (t = n.status), t in mI) ? mI[t] : `Unknown status ${t}`}`,
                isDisabled: !1,
            },
        ],
        O = n.hasActiveTrial,
        R = n.metadata?.active_discount_id != null;
    return (
        O && D.push({ id: "trial", label: "Has Trial", isDisabled: !1 }),
        R && D.push({ id: "active-discount", label: "Has Active Discount", isDisabled: !1 }),
        n.status !== $.Dmq.ACTIVE &&
            D.push({
                id: "dates",
                label: `Dates: ${(0, ni.i$)(n.createdAt, "LL")} - ${(0, ni.i$)(n.currentPeriodEnd, "LL")}`,
                isDisabled: !1,
            }),
        n.status === $.Dmq.PAUSED &&
            D.push({
                id: "pause-reason",
                label: `Pause Reason: ${n.pauseReason in mT ? mT[n.pauseReason] : `Unknown pause reason ${n.pauseReason}`}`,
                isDisabled: !1,
            }),
        (0, r.jsx)("div", {
            className: y()(ss.Nr, k ? ss.Qf : ss.C1),
            children: (0, r.jsxs)(u.n, {
                label: `Type: ${null == ((a = n.planIdFromItems)) ? "No plan id" : a in l9.hd ? l9.hd[a].name : `Unknown plan id ${a}`}`,
                className: mk.lI,
                children: [
                    (0, r.jsx)(mb.C, {
                        items: D,
                        label: "Tags",
                        selectionMode: "none",
                        selectionBehavior: "replace",
                        disabledKeys: new Set(),
                    }),
                    O &&
                        (0, r.jsxs)("div", {
                            className: mk.VK,
                            children: [
                                (0, r.jsxs)(_.D, {
                                    onClick: () => {
                                        p(!m);
                                    },
                                    className: mk.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(C.E, {
                                                variant: "text-md/bold",
                                                children: "Trial Info",
                                            }),
                                        }),
                                        (0, r.jsx)(l5.A, { direction: m ? l5.A.Directions.UP : l5.A.Directions.DOWN }),
                                    ],
                                }),
                                m &&
                                    (0, r.jsxs)("ul", {
                                        className: mk.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(C.E, { variant: "text-md/bold", children: "trial_id" }),
                                                    (0, r.jsx)(C.E, { variant: "text-sm/normal", children: n.trialId }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-md/bold",
                                                        children: "trial_ends_at",
                                                    }),
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            null != n.trialEndsAt
                                                                ? (0, ni.i$)(n.trialEndsAt, "LL")
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
                            className: mk.VK,
                            children: [
                                (0, r.jsxs)(_.D, {
                                    onClick: () => {
                                        v(!g);
                                    },
                                    className: mk.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(C.E, {
                                                variant: "text-md/bold",
                                                children: "Active Discount Info",
                                            }),
                                        }),
                                        (0, r.jsx)(l5.A, { direction: g ? l5.A.Directions.UP : l5.A.Directions.DOWN }),
                                    ],
                                }),
                                g &&
                                    (0, r.jsxs)("ul", {
                                        className: mk.j3,
                                        children: [
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_id",
                                                    }),
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-sm/normal",
                                                        children: n.metadata?.active_discount_id,
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsxs)("li", {
                                                children: [
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-md/bold",
                                                        children: "active_discount_expires_at",
                                                    }),
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-sm/normal",
                                                        children:
                                                            n.metadata?.active_discount_expires_at != null
                                                                ? (0, ni.i$)(
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
                            className: mk.VK,
                            children: [
                                (0, r.jsxs)(_.D, {
                                    onClick: () => {
                                        i(!s);
                                    },
                                    className: mk.Eh,
                                    children: [
                                        (0, r.jsx)("div", {
                                            children: (0, r.jsx)(C.E, {
                                                variant: "text-md/bold",
                                                children: "Metadata",
                                            }),
                                        }),
                                        (0, r.jsx)(l5.A, { direction: s ? l5.A.Directions.UP : l5.A.Directions.DOWN }),
                                    ],
                                }),
                                s &&
                                    (0, r.jsx)("ul", {
                                        className: mk.j3,
                                        children: Object.entries(n.metadata).map((e) => {
                                            let [t, a] = e;
                                            return (0, r.jsxs)(
                                                "li",
                                                {
                                                    children: [
                                                        (0, r.jsx)(C.E, { variant: "text-md/bold", children: t }),
                                                        (0, r.jsx)(C.E, { variant: "text-sm/normal", children: a }),
                                                    ],
                                                },
                                                t,
                                            );
                                        }),
                                    }),
                            ],
                        }),
                    (0, r.jsxs)("div", {
                        className: mk.VK,
                        children: [
                            (0, r.jsxs)(_.D, {
                                onClick: () => {
                                    c(!d);
                                },
                                className: mk.Eh,
                                children: [
                                    (0, r.jsx)("div", {
                                        children: (0, r.jsx)(C.E, {
                                            variant: "text-md/bold",
                                            children: "Modifications",
                                        }),
                                    }),
                                    (0, r.jsx)(l5.A, { direction: d ? l5.A.Directions.UP : l5.A.Directions.DOWN }),
                                ],
                            }),
                            d &&
                                (0, r.jsxs)(S.B, {
                                    gap: 24,
                                    children: [
                                        (0, r.jsx)(x.l, {
                                            label: "Status",
                                            value: n.status,
                                            options: mD,
                                            onSelectionChange: (e) => {
                                                N({ status: e });
                                            },
                                            selectionMode: "single",
                                            fullWidth: !0,
                                        }),
                                        (0, r.jsxs)("div", {
                                            children: [
                                                (0, r.jsxs)(S.B, {
                                                    gap: 12,
                                                    children: [
                                                        (0, r.jsx)(h.$, {
                                                            variant: "primary",
                                                            size: "sm",
                                                            text: "Renew Subscription",
                                                            onClick: (e) => A(),
                                                        }),
                                                        (0, r.jsx)(h.$, {
                                                            variant: "secondary",
                                                            size: "sm",
                                                            text: "Time Travel",
                                                            onClick: () => {
                                                                (0, eS.openModalLazy)(() =>
                                                                    Promise.resolve((e) =>
                                                                        (0, r.jsx)(mO, {
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
                                                        className: mk.z3,
                                                        children: (0, r.jsx)(E.w, { type: "critical", children: j }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsxs)(S.B, {
                                            gap: 16,
                                            children: [
                                                (0, r.jsx)(s6.J, {
                                                    label: "Premium Streak Start Date",
                                                    value: a6()(n.premiumSince?.toISOString().substring(0, 10)),
                                                    onSelect: (e) => N({ premiumStreakStart: e.toISOString() }),
                                                }),
                                                (0, r.jsx)(mC, {}),
                                            ],
                                        }),
                                        (0, r.jsx)(s6.J, {
                                            label: "Metadata Ended At Date",
                                            value: "" !== T ? a6()(T) : void 0,
                                            onSelect: (e) => N({ endedAt: e.toISOString() }),
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
let mw = async () =>
        (
            await nB.Bo.get({
                url: $.Rsh.BILLING_SUBSCRIPTIONS,
                query: { include_inactive: !0, limit: 5 },
                rejectWithError: !1,
            })
        ).body.map((e) => mv.A.createFromServer(e)),
    mM = [
        { id: "nitro-monthly", label: "Nitro Monthly", value: l9.gD.PREMIUM_MONTH_TIER_2 },
        { id: "nitro-yearly", label: "Nitro Yearly", value: l9.gD.PREMIUM_YEAR_TIER_2 },
        { id: "nitro-classic-monthly", label: "Nitro Classic Monthly", value: l9.gD.PREMIUM_MONTH_TIER_1 },
        { id: "nitro-classic-yearly", label: "Nitro Classic Yearly", value: l9.gD.PREMIUM_YEAR_TIER_1 },
        { id: "basic-monthly", label: "Basic Monthly", value: l9.gD.PREMIUM_MONTH_TIER_0 },
        { id: "basic-yearly", label: "Basic Yearly", value: l9.gD.PREMIUM_YEAR_TIER_0 },
        { id: "reverse-trial-1week", label: "Reverse Trial 1-week", value: l9.gd },
        { id: "reverse-trial-2week", label: "Reverse Trial 2-week", value: l9.Uk },
        { id: "nitro-squad-monthly", label: "Nitro Squad Monthly", value: l9.gD.PREMIUM_GROUP_MONTH },
    ];
function mL() {
    let e = (0, k.bG)([rO.A], () => rO.A.getPremiumTypeSubscription()),
        t = (0, k.bG)([G.default], () => G.default.getCurrentUser()),
        [a, n] = o.useState("511651880837840896"),
        [l, s] = o.useState([]),
        [i, c] = o.useState(!1),
        u = o.useCallback(async () => {
            try {
                c(!0), await (0, o0.hP)(), await (0, mg.eO)(t.id), s(await mw());
            } finally {
                c(!1);
            }
        }, [t]);
    o.useEffect(() => {
        u();
    }, [u]);
    let m = o.useMemo(() => l.filter((e) => e.status !== $.Dmq.ACTIVE).sort((e, t) => (e.id > t.id ? -1 : 1)), [l]),
        p = async () => {
            await nB.Bo.post({ url: "/debug/subscription", body: { plan_id: a }, rejectWithError: !1 }), await u();
        },
        g = async () => {
            await nB.Bo.del({ url: "/debug/subscription", rejectWithError: !1 }), await u();
        };
    return (0, r.jsx)(d.Ip, {
        className: tS.nd,
        children: (0, r.jsxs)("div", {
            className: ss.l$,
            children: [
                (0, r.jsxs)("div", {
                    className: ss.dL,
                    children: [
                        (0, r.jsx)(A.D, {
                            variant: "heading-lg/semibold",
                            className: tS.wx,
                            children: null != e ? "Active Subscription" : "Subscription Type",
                        }),
                        (0, r.jsx)(e_.K, {
                            "aria-label": "Refresh",
                            icon: l6.f,
                            size: "sm",
                            variant: "icon-only",
                            disabled: i,
                            onClick: u,
                        }),
                    ],
                }),
                (0, r.jsx)("section", {
                    className: y()([ss.uW, ss.Uo]),
                    children:
                        null == e &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(x.l, {
                                    label: "Premium Plan",
                                    hideLabel: !0,
                                    value: a,
                                    options: mM,
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
                null != e && (0, r.jsx)(mR, { subscription: e, onUpdated: u }),
                (0, r.jsx)(A.D, { variant: "heading-lg/semibold", className: tS.wx, children: "Bulk Actions" }),
                (0, r.jsx)("section", {
                    className: y()([ss.uW, ss.Uo]),
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
                            (0, r.jsx)(A.D, {
                                variant: "heading-lg/semibold",
                                className: tS.wx,
                                children: "Previous Subscriptions",
                            }),
                            m.map((e) => (0, r.jsx)(mR, { subscription: e, onUpdated: u }, e.id)),
                        ],
                    }),
            ],
        }),
    });
}
a(801541);
var mP = a(284009),
    mU = a.n(mP),
    mG = a(889137),
    mB = a(412703),
    mF = a(440703),
    mV = a(267548),
    m$ = a(668824),
    mW = a(695366),
    mz = a(359778),
    mH = a(507107),
    mK = a(801365),
    mY = a(792620),
    mq = a(241124),
    mJ = a(28082),
    mQ = a(717695),
    mX = a(961974),
    mZ = a(127219),
    m0 = a(262514),
    m1 = a(291922),
    m2 = a(317097),
    m8 = a(452027),
    m3 = a(922016),
    m6 = a(714385),
    m5 = a(359923);
let m4 = function (e) {
    let { colorKey: t, value: a, onChange: n, title: l } = e,
        s = o.useRef(null);
    return (0, r.jsx)(m8.D, {
        label: l,
        children: (0, r.jsx)(m3.Y, {
            targetElementRef: s,
            renderPopout: (e) => (0, r.jsx)(cn.VN, { ...e, value: a, onChange: (e) => n(t, (0, m2.Hl)(e)) }),
            children: (e) =>
                (0, r.jsx)(_.D, {
                    ...e,
                    innerRef: s,
                    tag: "span",
                    "aria-label": "Select a color",
                    className: m5.O6,
                    style: { backgroundColor: a },
                    children: (0, r.jsx)(m6.d, { size: "xs", color: "currentColor", className: m5.WY }),
                }),
        }),
    });
};
var m9 = a(247928);
let m7 = function (e) {
    let { allowClicks: t = !1, children: a, withBorder: n = !1 } = e;
    return (0, r.jsx)(m9.M, {
        children: (0, r.jsx)(mz.Z, {
            className: y()(m5.Rx, { [m5.aK]: n }),
            outline: n,
            children: (0, r.jsx)("div", {
                className: m5.AZ,
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
var he = a(643374);
let ht = function (e) {
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
            (0, r.jsx)(m8.D, {
                label: s,
                description: `Supported asset formats: ${a.join(", ")}`,
                children: (0, r.jsx)(he.A, {
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
    ha = function (e) {
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
var hn = a(31587);
let hl = function (e) {
    let { onSelect: t, quest: a } = e,
        { quests: n } = (0, hn.mL)({ fetchPolicy: "cache-and-network", callerSource: "prefill_selector" }),
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
var hs = a(843282),
    hi = a(972886);
let hr = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
    ],
    ho = function (e) {
        let { onSelect: t, taskDuration: a = 10, taskConfigV2: n } = e;
        return (0, r.jsxs)(S.B, {
            gap: 20,
            children: [
                (0, r.jsx)(hs.Pw, {
                    label: "Task Type(s)",
                    className: hi.Z,
                    placeholder: "Select Task Preset",
                    options: hr,
                    renderOptionValue: (e) => e.map((e) => (0, r.jsx)("div", { children: e.label }, e.value)),
                    renderOptionLabel: (e) => (0, r.jsx)("div", { children: e.label }),
                    isSelected: (e) => {
                        var t;
                        let a, l, s, i, r;
                        return (
                            e ===
                            ((t = n.tasks),
                            (a = mB.n.PLAY_ON_PLAYSTATION in t || mB.n.PLAY_ON_XBOX in t),
                            (l = mB.n.PLAY_ON_DESKTOP in t),
                            (s = mB.n.STREAM_ON_DESKTOP in t),
                            (i = mB.n.WATCH_VIDEO in t),
                            (r = mB.n.PLAY_ACTIVITY in t),
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
                                        a[mB.n.STREAM_ON_DESKTOP] = { type: mB.n.STREAM_ON_DESKTOP, target: t };
                                        break;
                                    case 0:
                                        a[mB.n.PLAY_ON_DESKTOP] = { type: mB.n.PLAY_ON_DESKTOP, target: t };
                                        break;
                                    case 3:
                                        (a[mB.n.PLAY_ON_PLAYSTATION] = {
                                            type: mB.n.PLAY_ON_PLAYSTATION,
                                            target: t,
                                            externalIds: [],
                                        }),
                                            (a[mB.n.PLAY_ON_XBOX] = {
                                                type: mB.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 4:
                                        (a[mB.n.PLAY_ON_DESKTOP] = { type: mB.n.PLAY_ON_DESKTOP, target: t }),
                                            (a[mB.n.PLAY_ON_PLAYSTATION] = {
                                                type: mB.n.PLAY_ON_PLAYSTATION,
                                                target: t,
                                                externalIds: [],
                                            }),
                                            (a[mB.n.PLAY_ON_XBOX] = {
                                                type: mB.n.PLAY_ON_XBOX,
                                                target: t,
                                                externalIds: [],
                                            });
                                        break;
                                    case 2:
                                        a[mB.n.WATCH_VIDEO] = {
                                            type: mB.n.WATCH_VIDEO,
                                            target: t,
                                            assets: { video: { url: "" } },
                                            messages: { videoTitle: "" },
                                        };
                                        break;
                                    case 5:
                                        a[mB.n.PLAY_ACTIVITY] = { type: mB.n.PLAY_ACTIVITY, target: t };
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
                    value: String(a / nV.A.Seconds.MINUTE),
                    onChange: function (e) {
                        let a = Number(e);
                        if (isNaN(a)) return;
                        a *= nV.A.Seconds.MINUTE;
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
var hd = a(818348);
let hc = function () {
    let e = (0, K.Ay)();
    return (0, r.jsx)(m8.D, {
        label: "Theme",
        children: (0, r.jsxs)("div", {
            style: { display: "flex", justifyContent: "space-between" },
            children: [
                (0, r.jsx)(Y.zy, {
                    theme: hd.NJ.LIGHT,
                    isSelected: e === hd.NJ.LIGHT,
                    onSelect: () => (0, dZ.u_)({ theme: hd.NJ.LIGHT }),
                }),
                (0, r.jsx)(Y.zy, {
                    theme: hd.NJ.DARK,
                    isSelected: e === hd.NJ.DARK,
                    onSelect: () => (0, dZ.u_)({ theme: hd.NJ.DARK }),
                }),
            ],
        }),
    });
};
var hu =
    (((i = {})[(i.UNENROLLED = 0)] = "UNENROLLED"),
    (i[(i.ENROLLED = 1)] = "ENROLLED"),
    (i[(i.COMPLETED_25 = 2)] = "COMPLETED_25"),
    (i[(i.COMPLETED_50 = 3)] = "COMPLETED_50"),
    (i[(i.COMPLETED_75 = 4)] = "COMPLETED_75"),
    (i[(i.COMPLETED_100 = 5)] = "COMPLETED_100"),
    (i[(i.CLAIMED = 6)] = "CLAIMED"),
    i);
let hm = function (e) {
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
var hh = a(617986);
let hx = ["png", "gif", "webp"],
    hp = [...hx, "jpg", "jpeg"],
    hg = Array.from(new Set([...hp, "gif", "mp4", "webm"]));
function hv() {
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
let hj = "1193992107035983872",
    hb = {
        id: hj,
        preview: !0,
        config: {
            id: hj,
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
                        type: mF.l.REWARD_CODE,
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
                joinOperator: m$.K.AND,
                tasks: { [mB.n.PLAY_ON_DESKTOP]: { type: mB.n.PLAY_ON_DESKTOP, target: 300 } },
            },
            features: [],
            sharePolicy: mV.i.SHAREABLE_EVERYWHERE,
            ctaConfig: { link: "https://discord.com/", buttonLabel: "Learn More" },
        },
        userStatus: null,
        targetedContent: [],
    };
function hf() {
    var e;
    let [t, n] = o.useState(hb),
        l = o.useCallback((e) => {
            n({ ...e, preview: !0 });
        }, []),
        [s, i] = o.useState(hu.UNENROLLED),
        [c, u] = o.useState(!1),
        [m, x] = o.useState(!1),
        [p, g] = o.useState(null),
        v =
            ((e = t.config),
            (0, mG.YW)(e)
                .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
                .exhaustive());
    function j(e, a) {
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
                    (0, mG.YW)(n)
                        .with({ configVersion: 2 }, (e) => ({ ...e, assets: { ...e.assets, ...s } }))
                        .exhaustive()),
            });
        }
    }
    function b(e, a) {
        let n = t.config.taskConfigV2.tasks,
            s = n[mB.n.WATCH_VIDEO];
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
                taskConfigV2: { ...t.config.taskConfigV2, tasks: { ...n, [mB.n.WATCH_VIDEO]: { ...s, assets: i } } },
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
                    (0, mG.YW)(n)
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
                    (0, mG.YW)(s)
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
        (0, mK.tU)(t.config) && (0, hh.hJ)(t, mH.uF.GIFT_INVENTORY_FOR_YOU, mH.uF.INTERNAL_PREVIEW_TOOL, !0);
    }
    let N = o.useMemo(() => {
            for (let [e, a] of Object.entries(t.config.taskConfigV2.tasks)) if (null != a.target) return a.target;
            return 10 * nV.A.Seconds.MINUTE;
        }, [t.config.taskConfigV2.tasks]),
        k = o.useMemo(() => mB.n.WATCH_VIDEO in t.config.taskConfigV2.tasks, [t.config.taskConfigV2.tasks]);
    mU()(!1 !== t.preview && null != t.preview, "Preview config must have property preview: true");
    let I = t.config.taskConfigV2.tasks[mB.n.WATCH_VIDEO];
    return (0, r.jsxs)(d.Ip, {
        className: m5.kL,
        children: [
            (0, r.jsx)(A.D, { variant: "heading-lg/bold", className: m5.R_, children: "Quest Preview Tool" }),
            (0, r.jsx)("div", {
                className: m5.OA,
                children: (0, r.jsx)(hl, {
                    onSelect: function (e) {
                        g(e),
                            null == e ||
                                (i(
                                    (function (e) {
                                        if (null == e.userStatus) return hu.UNENROLLED;
                                        if (null != e.userStatus.claimedAt) return hu.CLAIMED;
                                        if (null != e.userStatus.completedAt) return hu.COMPLETED_100;
                                        let t = (0, mY.Yh)(e),
                                            a = t.progressSeconds,
                                            n = t.targetSeconds;
                                        return a / n >= 1
                                            ? hu.COMPLETED_100
                                            : a / n >= 0.75
                                              ? hu.COMPLETED_75
                                              : a / n >= 0.5
                                                ? hu.COMPLETED_50
                                                : a / n >= 0.25
                                                  ? hu.COMPLETED_25
                                                  : hu.ENROLLED;
                                    })(e),
                                ),
                                l(e));
                    },
                    quest: p,
                }),
            }),
            (0, r.jsx)(A.D, { variant: "heading-md/semibold", className: m5.fV, children: "Task Config" }),
            (0, r.jsx)("div", {
                className: m5.OA,
                children: (0, r.jsx)(ho, {
                    taskDuration: N,
                    taskConfigV2: t.config.taskConfigV2,
                    onSelect: function (e) {
                        l({ ...t, config: { ...t.config, taskConfigV2: e } });
                    },
                }),
            }),
            (0, r.jsx)(A.D, { variant: "heading-md/semibold", className: m5.fV, children: "Messages" }),
            (0, r.jsxs)("div", {
                className: m5.OA,
                children: [
                    (0, r.jsx)(ha, {
                        title: "Quest Name",
                        assetKey: "questName",
                        onMessageChange: f,
                        initialValue: t.config.messages.questName,
                    }),
                    (0, r.jsx)(ha, {
                        title: "Game Title",
                        assetKey: "gameTitle",
                        onMessageChange: f,
                        initialValue: t.config.messages.gameTitle,
                    }),
                    (0, r.jsx)(ha, {
                        title: "Game Publisher",
                        assetKey: "gamePublisher",
                        onMessageChange: f,
                        initialValue: t.config.messages.gamePublisher,
                    }),
                    k &&
                        (0, r.jsx)(ha, {
                            title: "Video Title",
                            assetKey: "videoTitle",
                            onMessageChange: function (e, a) {
                                let n = t.config.taskConfigV2.tasks,
                                    s = n[mB.n.WATCH_VIDEO];
                                if (null == s) return;
                                let i = { ...s.messages, [e]: a };
                                l({
                                    ...t,
                                    config: {
                                        ...t.config,
                                        taskConfigV2: {
                                            ...t.config.taskConfigV2,
                                            tasks: { ...n, [mB.n.WATCH_VIDEO]: { ...s, messages: i } },
                                        },
                                    },
                                });
                            },
                            initialValue: I?.messages.videoTitle,
                        }),
                ],
            }),
            (0, r.jsx)(A.D, { variant: "heading-md/semibold", className: m5.fV, children: "Assets" }),
            (0, r.jsxs)("div", {
                className: m5.OA,
                children: [
                    (0, r.jsx)(ht, {
                        title: "Hero",
                        assetKey: "hero",
                        onFileChange: j,
                        filters: hg,
                        initialValue: t.config.assets.hero,
                    }),
                    (0, r.jsx)(ht, {
                        title: "Hero Video (optional)",
                        assetKey: "heroVideo",
                        onFileChange: j,
                        filters: hg,
                        initialValue: t.config.assets.heroVideo ?? void 0,
                    }),
                    (0, r.jsx)(ht, {
                        title: "Quest Bar Hero",
                        assetKey: "questBarHero",
                        onFileChange: j,
                        filters: hg,
                        initialValue: t.config.assets.questBarHero,
                    }),
                    (0, r.jsx)(ht, {
                        title: "Quest Bar Hero Video (optional)",
                        assetKey: "questBarHeroVideo",
                        onFileChange: j,
                        filters: hg,
                        initialValue: t.config.assets.questBarHeroVideo ?? void 0,
                    }),
                    (0, r.jsx)(ht, {
                        title: "Game Tile",
                        assetKey: "gameTile",
                        onFileChange: j,
                        filters: [...hp, "svg"],
                        initialValue: t.config.assets.gameTile,
                    }),
                    (0, r.jsx)(ht, {
                        title: "Logotype",
                        assetKey: "logotype",
                        onFileChange: j,
                        filters: [...hx, "svg"],
                        initialValue: t.config.assets.logotype,
                    }),
                    k &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(ht, {
                                    title: "Quest Video",
                                    assetKey: "videoPlayerVideo",
                                    onFileChange: b,
                                    filters: hg,
                                    initialValue: I?.assets.video.url,
                                }),
                                (0, r.jsx)(ht, {
                                    title: "Quest Video (Low Resolution)",
                                    assetKey: "videoPlayerVideoLowRes",
                                    onFileChange: b,
                                    filters: hg,
                                    initialValue: I?.assets.videoLowRes?.url,
                                }),
                                (0, r.jsx)(ht, {
                                    title: "Video Player Thumbnail (optional)",
                                    assetKey: "videoPlayerThumbnail",
                                    onFileChange: b,
                                    filters: hp,
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
                            (0, r.jsxs)(A.D, {
                                variant: "heading-md/semibold",
                                className: m5.fV,
                                children: ["Reward #", a + 1],
                            }),
                            (0, r.jsxs)("div", {
                                className: m5.OA,
                                children: [
                                    (0, r.jsx)(ha, {
                                        title: "Name",
                                        assetKey: "name",
                                        onMessageChange: (e, t) => y(e, t, a),
                                        initialValue: e.messages.name,
                                    }),
                                    (0, r.jsx)(ha, {
                                        title: "Name With Article",
                                        assetKey: "nameWithArticle",
                                        onMessageChange: (e, t) => y(e, t, a),
                                        initialValue: e.messages.nameWithArticle,
                                    }),
                                    e.type !== mF.l.VIRTUAL_CURRENCY &&
                                        (0, r.jsx)(ht, {
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
                                                                (0, mG.YW)(s)
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
                                            filters: hg,
                                            initialValue: e.asset,
                                        }),
                                    (0, r.jsxs)(S.B, {
                                        direction: "vertical",
                                        gap: 8,
                                        children: [
                                            (0, r.jsx)(A.D, {
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
            (0, r.jsx)(A.D, { variant: "heading-md/semibold", className: m5.fV, children: "Colors & Quest States" }),
            (0, r.jsxs)("div", {
                className: m5.OA,
                children: [
                    (0, r.jsxs)("div", {
                        className: m5.OA,
                        style: { marginBottom: 0 },
                        children: [
                            (0, r.jsx)(m4, {
                                title: "Primary",
                                colorKey: "primary",
                                onChange: _,
                                value: t.config.colors.primary,
                            }),
                            (0, r.jsx)(m4, {
                                title: "Secondary",
                                colorKey: "secondary",
                                onChange: _,
                                value: t.config.colors.secondary,
                            }),
                        ],
                    }),
                    (0, r.jsx)("div", { className: m5.OA, children: (0, r.jsx)(hc, {}) }),
                    (0, r.jsx)(hm, {
                        onChange: function (e) {
                            switch ((i(e), e)) {
                                case hu.UNENROLLED:
                                    l({ ...t, userStatus: null });
                                    break;
                                case hu.ENROLLED:
                                    l({ ...t, userStatus: hv({ enrolledAt: new Date().toISOString() }) });
                                    break;
                                case hu.COMPLETED_25:
                                    l({
                                        ...t,
                                        userStatus: hv({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.25 * N,
                                        }),
                                    });
                                    break;
                                case hu.COMPLETED_50:
                                    l({
                                        ...t,
                                        userStatus: hv({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.5 * N,
                                        }),
                                    });
                                    break;
                                case hu.COMPLETED_75:
                                    l({
                                        ...t,
                                        userStatus: hv({
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: 0.75 * N,
                                        }),
                                    });
                                    break;
                                case hu.COMPLETED_100:
                                    l({
                                        ...t,
                                        userStatus: hv({
                                            completedAt: new Date().toISOString(),
                                            enrolledAt: new Date().toISOString(),
                                            streamProgressSeconds: N,
                                        }),
                                    });
                                    break;
                                case hu.CLAIMED:
                                    l({
                                        ...t,
                                        userStatus: hv({
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
            (0, r.jsx)(A.D, { variant: "heading-lg/bold", className: m5.R_, children: "Component Previews" }),
            (0, r.jsxs)("div", {
                className: m5.$$,
                children: [
                    (0, r.jsxs)(m7, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(A.D, { variant: "heading-sm/semibold", children: "Quest Bar" }),
                            (0, r.jsxs)("div", {
                                className: m5.l4,
                                children: [
                                    t.userStatus?.claimedAt != null &&
                                        (0, r.jsx)(C.E, {
                                            color: "text-subtle",
                                            variant: "text-sm/normal",
                                            children: "The Quest Bar is hidden when the user has claimed the reward.",
                                        }),
                                    (0, r.jsx)("div", {
                                        className: m5.ok,
                                        children: (0, r.jsx)(mq.jY, {
                                            isPreview: !0,
                                            source: "preview",
                                            questId: "0",
                                            children: (0, r.jsx)(mQ.A, { children: (0, r.jsx)(mJ.Y, { quest: t }) }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)(m7, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(A.D, { variant: "heading-sm/semibold", children: "Quest Home Card" }),
                            (0, r.jsx)(mq.jY, {
                                isPreview: !0,
                                source: "preview",
                                questId: "0",
                                children: (0, r.jsx)(m1.Ay, {
                                    quest: t,
                                    className: m5.d,
                                    questContent: mH.uF.QUEST_HOME_DESKTOP,
                                    contentPosition: 0,
                                    rowIndex: 0,
                                    sourceQuestContent: mH.uF.INTERNAL_PREVIEW_TOOL,
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(m7, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(A.D, { variant: "heading-sm/semibold", children: "Channel Call Header" }),
                            t.userStatus?.claimedAt != null &&
                                (0, r.jsx)(C.E, {
                                    color: "text-subtle",
                                    variant: "text-sm/normal",
                                    children:
                                        "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                                }),
                            (0, r.jsx)("div", {
                                className: m5.l4,
                                children: (0, r.jsx)(mq.jY, {
                                    isPreview: !0,
                                    source: "preview",
                                    questId: "0",
                                    children: (0, r.jsx)("div", {
                                        className: m5.Jr,
                                        children: (0, r.jsx)(mX.A, {
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
                        className: m5.NY,
                        children: (0, r.jsx)(tf.d, {
                            label: "Is Participating:",
                            checked: c,
                            onChange: function (e) {
                                u(e);
                            },
                        }),
                    }),
                    (0, r.jsxs)(m7, {
                        withBorder: !0,
                        children: [
                            (0, r.jsx)(A.D, { variant: "heading-sm/semibold", children: "Quest Card Embed" }),
                            m
                                ? (0, r.jsx)(mZ.l, { questId: t.id })
                                : (0, r.jsx)(
                                      m0.M,
                                      {
                                          quest: t,
                                          location: mH.uF.QUESTS_EMBED,
                                          sourceQuestContent: mH.uF.INTERNAL_PREVIEW_TOOL,
                                      },
                                      t.id,
                                  ),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: m5.NY,
                        children: (0, r.jsx)(tf.d, { label: "Invalid Quests Embed:", checked: m, onChange: x }),
                    }),
                    k &&
                        (0, r.jsxs)(m7, {
                            withBorder: !0,
                            allowClicks: !0,
                            children: [
                                (0, r.jsx)(A.D, { variant: "heading-sm/semibold", children: "Video Player" }),
                                (0, r.jsx)(h.$, {
                                    variant: "primary",
                                    text: "Open Video Player Modal",
                                    onClick: () => {
                                        let e = performance.now();
                                        (0, eS.openModalLazy)(async () => {
                                            let { default: n } = await Promise.all([
                                                a.e("22448"),
                                                a.e("48628"),
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
                                                    sourceQuestContent: mH.uF.INTERNAL_PREVIEW_TOOL,
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
class hy extends o.Component {
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
                  className: m5.TA,
                  children: [
                      (0, r.jsx)(mW.E, { className: m5.Yw }),
                      (0, r.jsx)(A.D, {
                          variant: "heading-lg/semibold",
                          children: "Something broke in the Quest preview tool :(",
                      }),
                      (0, r.jsx)(h.$, { variant: "secondary", text: "Reset", onClick: this.handleResetState }),
                      null != e.message &&
                          (0, r.jsx)(mz.Z, {
                              className: m5.Fx,
                              children: (0, r.jsx)("code", { className: m5.gJ, children: e.message }),
                          }),
                  ],
              })
            : (0, r.jsx)(hf, {}, t);
    }
}
var h_ = a(913122),
    hC = a(839214),
    hE = a(77138),
    hS = a(450827),
    hN = a(626584),
    hA = a(174768),
    hk = a(205761),
    hI = a(860071),
    hT = a(696451),
    hD = a(860689),
    hO = a(926140);
let hR = new hN.A("SearchDebugUtils");
function hw() {
    hR.info("--------------------------");
}
function hM() {
    let e = hA.A.getProps();
    hR.info("START Quick Switcher State"),
        hR.info(`Query: ${e.query}`),
        e.results.forEach((e) => {
            switch ((hR.info(`Result Type: ${e.type}`), e.type)) {
                case hO.rD.GUILD:
                    hR.info(`guild id: ${e.record.id}`);
                    break;
                case hO.rD.TEXT_CHANNEL:
                case hO.rD.VOICE_CHANNEL:
                    hR.info(`channel type: ${e.record.type}`),
                        hR.info(`channel id: ${e.record.id}`),
                        hR.info(`name: ${e.record.name}`);
                    break;
                case hO.rD.DM:
                    hR.info(`channel type: ${e.record.type}`),
                        hR.info(`channel id: ${e.record.id}`),
                        e.record.isDM() &&
                            (hR.info(`recipient id: ${e.record.getRecipientId()}`),
                            e.record.recipients.forEach((e) => {
                                let t = G.default.getUser(e);
                                null != t &&
                                    (hR.info(`recipient username: ${t.username}`),
                                    hR.info(`recipient global name: ${z.Ay.getGlobalName(t)}`),
                                    hR.info(`recipient nickname: ${t5.A.getNickname(t.id)}`));
                            }));
                    break;
                case hO.rD.GROUP_DM:
                    hR.info(`channel type: ${e.record.type}`),
                        hR.info(`channel id: ${e.record.id}`),
                        hR.info(`name: ${(0, t3.m1)(e.record, G.default, t5.A)}`),
                        e.record.isGroupDM() &&
                            (hR.info(`default name: ${(0, t3.ks)(e.record, G.default, t5.A)}`),
                            hR.info(`recipient id: ${e.record.recipients}`),
                            e.record.recipients.forEach((e) => {
                                let t = G.default.getUser(e);
                                null != t &&
                                    (hR.info(`recipient username: ${t.username}`),
                                    hR.info(`recipient global name: ${z.Ay.getGlobalName(t)}`),
                                    hR.info(`recipient nickname: ${t5.A.getNickname(t.id)}`));
                            }));
                    break;
                case hO.rD.USER:
                    hR.info(`user id: ${e.record.id}`),
                        hR.info(`username: ${e.record.username}`),
                        hR.info(`global name: ${z.Ay.getGlobalName(e.record)}`),
                        hR.info(`nickname: ${t5.A.getNickname(e.record.id)}`),
                        hR.info(`guild nicknames: ${hT.Ay.getNicknames(e.record.id)}`);
            }
            hR.info(`frecency score: ${hk.A.getScoreWithoutFetchingLatest(e.record.id)}`), hw();
        }),
        hR.info("END Quick Switcher State\n");
}
async function hL() {
    hR.info("START User Search Worker State");
    let e = await hS.A.requestDebugState();
    null == e
        ? hR.info("Unable to get debug state from User Search Worker")
        : (Object.entries(JSON.parse(e.users)).forEach((e) => {
              let [t, a] = e;
              hR.info(`id: ${t}`),
                  hR.info(`username: ${a.username}`),
                  hR.info(`global name: ${a.globalName}`),
                  hR.info(`nickname: ${a.friendNickname}`),
                  Object.entries(a.nicknames).forEach((e) => {
                      let [t, a] = e;
                      hR.info(`guild id: ${t}`), hR.info(`guild nickname: ${a}`);
                  }),
                  hw();
          }),
          hR.info("END User Search Worker State\n"));
}
async function hP() {
    let e = await hS.A.requestDebugState();
    if (null == e) throw Error("Unable to get debug state from User Search Worker");
    let t = JSON.parse(e.users),
        a = G.default.getUsers(),
        n = new Set(Object.keys(t)),
        l = mf.default.keys(a),
        s = [];
    return (
        l.forEach((e) => {
            n.has(e) || s.push(e);
        }),
        s
    );
}
async function hU(e) {
    let t = await hS.A.requestDebugState(),
        a = null != t ? JSON.parse(t.users)[e] : null,
        n = aV.A.getGuildIds(),
        l = [];
    n.forEach((t) => {
        let a = hT.Ay.getMember(t, e);
        null != a && l.push(a);
    });
    let s = hI.A.getDebugState(e);
    return { user: G.default.getUser(e), searchWorkerUser: a, guildMembers: l, guildMemberRequests: s };
}
var hG = a(929948);
function hB(e) {
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
                (0, r.jsx)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: hG.qS,
                    children: n,
                }),
            a &&
                (0, r.jsx)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-positive",
                    className: hG.qS,
                    children: "Logs uploaded successfully",
                }),
        ],
    });
}
let hF = (0, hC.D)(() => ({
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
function hV() {
    let e = hF.useField("includeFrecency"),
        t = hF.useField("includeFriends"),
        a = hF.useField("includeDMs"),
        n = hF.useField("includeGDMs"),
        l = hF.useField("includeQuickSwitcherState"),
        s = hF.useField("includeUserSearchWorkerState"),
        i = hF.useField("isUploading"),
        d = hF.useField("isSuccess"),
        c = hF.useField("errorMessage"),
        m = o.useCallback(async () => {
            let {
                includeFrecency: e,
                includeFriends: t,
                includeGDMs: a,
                includeDMs: n,
                includeQuickSwitcherState: l,
                includeUserSearchWorkerState: s,
                isUploading: i,
            } = hF.getState();
            if (!i)
                try {
                    let i, r, o, d, c, u, m, h, x, p, g, v;
                    hF.setState({ isUploading: !0, errorMessage: null, isSuccess: !1 }),
                        t &&
                            ((i = t5.A.getFriendIDs()),
                            hR.info("START Discord Friends"),
                            i.forEach((e) => {
                                let t = G.default.getUser(e);
                                if (null == t) return;
                                let a = t.username,
                                    n = z.Ay.getGlobalName(t),
                                    l = t5.A.getNickname(t.id),
                                    s = hT.Ay.getNicknames(t.id);
                                hR.info(`username: ${a}`),
                                    hR.info(`global name: ${n}`),
                                    hR.info(`nickname: ${l}`),
                                    hR.info(`guild nicknames: ${s}`),
                                    hw();
                            }),
                            hR.info("END Discord Friends\n")),
                        a &&
                            ((r = t6.A.getMutablePrivateChannels()),
                            (o = []),
                            (d = []),
                            Object.values(r).forEach((e) => {
                                e.isGroupDM() && o.push(e), e.isDM() && d.push(e);
                            }),
                            hR.info("START Logging Group DM Channels"),
                            o.forEach((e) => {
                                let t = (0, t3.m1)(e, G.default, t5.A),
                                    a = (0, t3.ks)(e, G.default, t5.A);
                                hR.info(`id: ${e.id}`),
                                    hR.info(`name: ${t}`),
                                    hR.info(`default name: ${a}`),
                                    hR.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = G.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = z.Ay.getGlobalName(t),
                                            l = t5.A.getNickname(t.id),
                                            s = hT.Ay.getNicknames(t.id);
                                        hR.info(`username: ${a}`),
                                            hR.info(`global name: ${n}`),
                                            hR.info(`nickname: ${l}`),
                                            hR.info(`guild nicknames: ${s}`),
                                            hw();
                                    });
                            }),
                            hR.info("END Logging Group DM Channels\n"),
                            hR.info("START Logging DM Channels"),
                            d.forEach((e) => {
                                let t = (0, t3.m1)(e, G.default, t5.A);
                                hR.info(`id: ${e.id}`), hR.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = G.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = z.Ay.getGlobalName(n),
                                    i = t5.A.getNickname(n.id);
                                hR.info(`username: ${l}`),
                                    hR.info(`global name: ${s}`),
                                    hR.info(`nickname: ${i}`),
                                    hw();
                            }),
                            hR.info("END Logging DM Channels\n")),
                        n &&
                            ((c = t6.A.getMutablePrivateChannels()),
                            (u = []),
                            (m = []),
                            Object.values(c).forEach((e) => {
                                e.isGroupDM() && u.push(e), e.isDM() && m.push(e);
                            }),
                            hR.info("START Logging Group DM Channels"),
                            u.forEach((e) => {
                                let t = (0, t3.m1)(e, G.default, t5.A),
                                    a = (0, t3.ks)(e, G.default, t5.A);
                                hR.info(`id: ${e.id}`),
                                    hR.info(`name: ${t}`),
                                    hR.info(`default name: ${a}`),
                                    hR.info(`recipients ids: ${e.recipients}`),
                                    e.recipients.forEach((e) => {
                                        let t = G.default.getUser(e);
                                        if (null == t) return;
                                        let a = t.username,
                                            n = z.Ay.getGlobalName(t),
                                            l = t5.A.getNickname(t.id),
                                            s = hT.Ay.getNicknames(t.id);
                                        hR.info(`username: ${a}`),
                                            hR.info(`global name: ${n}`),
                                            hR.info(`nickname: ${l}`),
                                            hR.info(`guild nicknames: ${s}`),
                                            hw();
                                    });
                            }),
                            hR.info("END Logging Group DM Channels\n"),
                            hR.info("START Logging DM Channels"),
                            m.forEach((e) => {
                                let t = (0, t3.m1)(e, G.default, t5.A);
                                hR.info(`id: ${e.id}`), hR.info(`name: ${t}`);
                                let a = e.getRecipientId(),
                                    n = G.default.getUser(a);
                                if (null == n) return;
                                let l = n.username,
                                    s = z.Ay.getGlobalName(n),
                                    i = t5.A.getNickname(n.id);
                                hR.info(`username: ${l}`),
                                    hR.info(`global name: ${s}`),
                                    hR.info(`nickname: ${i}`),
                                    hw();
                            }),
                            hR.info("END Logging DM Channels\n")),
                        e &&
                            ((h = hk.A.getFrequentlyWithoutFetchingLatest()),
                            (x = []),
                            (p = []),
                            (g = []),
                            (v = []),
                            h.forEach((e) => {
                                (0, hD.fh)(e)
                                    ? x.push(e)
                                    : e.isDM()
                                      ? g.push(e)
                                      : e.isMultiUserDM()
                                        ? v.push(e)
                                        : p.push(e);
                            }),
                            hR.info("START Frecency"),
                            hR.info("Guilds"),
                            x.forEach((e) => {
                                let t = hk.A.getScoreWithoutFetchingLatest(e.id);
                                hR.info(`id: ${e.id} - name: ${e.name} - Frecency Score: ${t}`);
                            }),
                            hw(),
                            hR.info("DM Channels"),
                            g.forEach((e) => {
                                let t = hk.A.getScoreWithoutFetchingLatest(e.id);
                                hR.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            hw(),
                            hR.info("Group DM Channels"),
                            v.forEach((e) => {
                                let t = hk.A.getScoreWithoutFetchingLatest(e.id);
                                hR.info(`id: ${e.id} - Frecency Score: ${t}`),
                                    hR.info(`default name: ${(0, t3.ks)(e, G.default, t5.A)}`),
                                    hR.info(`name: ${(0, t3.m1)(e, G.default, t5.A)}`);
                            }),
                            hw(),
                            hR.info("Guild Channels"),
                            p.forEach((e) => {
                                let t = hk.A.getScoreWithoutFetchingLatest(e.id);
                                hR.info(`id: ${e.id} - Frecency Score: ${t}`);
                            }),
                            hw(),
                            hR.info("END Frecency\n")),
                        l && hM(),
                        s && hL(),
                        await (0, hE.a)($.Umv.WEB_APP),
                        hF.setState({ isSuccess: !0, errorMessage: null });
                } catch (t) {
                    let e = new h_.LG(t);
                    hF.setState({ errorMessage: e.getAnyErrorMessage() });
                } finally {
                    hF.setState({ isUploading: !1 });
                }
        }, []);
    return (0, r.jsxs)(u.n, {
        label: "Debug Logs Snapshot",
        description:
            "Uploading a snapshot of the client state can help us figure out what exactly is wrong with your search. You can opt out of uploading certain logs, but it may make it more difficult to debug your issue.",
        children: [
            (0, r.jsx)(tf.d, {
                label: "Frecency",
                description:
                    "Frecency is a measure of how often you visit a guild or channel. Includes frecency scores for guilds and channels along with the guild or channel IDs.",
                checked: e,
                onChange: () => hF.setState({ includeFrecency: !e }),
            }),
            (0, r.jsx)(tf.d, {
                label: "Friends",
                description: "Includes all Discord Friend usernames, global names, and nicknames.",
                checked: t,
                onChange: () => hF.setState({ includeFriends: !t }),
            }),
            (0, r.jsx)(tf.d, {
                label: "DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames for all DMs. Does NOT include any message data.",
                checked: a,
                onChange: () => hF.setState({ includeDMs: !a }),
            }),
            (0, r.jsx)(tf.d, {
                label: "Group DMs",
                description:
                    "Includes recipient user ids, usernames, global names, nicknames, and custom channel names for all Group DMs. Does NOT include any message data.",
                checked: n,
                onChange: () => hF.setState({ includeGDMs: !n }),
            }),
            (0, r.jsx)(tf.d, {
                label: "Quick Switcher Results",
                description:
                    "Includes the current QuickSwitcher query and results. If you include this, please ensure the QuickSwitcher is open when you click to Upload Snapshot Logs.",
                checked: l,
                onChange: () => hF.setState({ includeQuickSwitcherState: !l }),
            }),
            (0, r.jsx)(tf.d, {
                label: "User Search Worker",
                description:
                    "Includes all users that your client knows about. For each user, includes the user id, username, nickname, and any guild nicknames.",
                checked: s,
                onChange: () => hF.setState({ includeUserSearchWorkerState: !s }),
            }),
            (0, r.jsx)(hB, {
                isUploading: i,
                isSuccess: d,
                errorMessage: c,
                onClick: m,
                title: "Upload Snapshot Logs",
            }),
        ],
    });
}
let h$ = (0, hC.D)(() => ({ userIds: [], isLoading: !1, isSuccess: !1, errorMessage: null, lastRunAt: null }));
function hW() {
    let e = h$.useField("userIds"),
        t = h$.useField("isLoading"),
        a = h$.useField("isSuccess"),
        n = h$.useField("errorMessage"),
        l = h$.useField("lastRunAt"),
        s = o.useCallback(async () => {
            h$.setState({ isLoading: !0, errorMessage: null, isSuccess: !1 });
            try {
                let e = await hP();
                h$.setState({ userIds: e, errorMessage: null, isSuccess: !0, lastRunAt: new Date().toISOString() });
            } catch (e) {
                h$.setState({ errorMessage: e, isSuccess: !1 });
            } finally {
                h$.setState({ isLoading: !1 });
            }
        }, []),
        i = o.useMemo(
            () =>
                e.map((e) => {
                    let t = G.default.getUser(e),
                        a = null != t ? z.Ay.getName(t) : "Unknown";
                    return (0, r.jsx)(
                        "div",
                        {
                            className: hG.J1,
                            children: (0, r.jsx)(C.E, { variant: "text-md/normal", children: `${a} (${e})` }),
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
                    className: hG.N6,
                    children: [
                        null != n &&
                            (0, r.jsx)(C.E, {
                                variant: "text-sm/normal",
                                color: "text-feedback-critical",
                                className: hG.qS,
                                children: n,
                            }),
                        a &&
                            e.length > 0 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(C.E, { variant: "text-md/normal", children: `Last run at: ${l}` }),
                                    (0, r.jsx)(C.E, {
                                        variant: "text-md/normal",
                                        children: "User IDs missing from Worker:",
                                    }),
                                    (0, r.jsx)("div", { className: hG.uk, children: i }),
                                ],
                            }),
                        a &&
                            0 === e.length &&
                            (0, r.jsx)(C.E, { variant: "text-md/normal", children: "No users missing from Worker" }),
                    ],
                }),
            ],
        }),
    });
}
let hz = (0, hC.D)(() => ({ isRecording: !1, isUploading: !1, isSuccess: !1, errorMessage: null }));
function hH() {
    let e = hz.useField("isRecording"),
        t = hz.useField("isUploading"),
        a = hz.useField("isSuccess"),
        n = hz.useField("errorMessage"),
        l = o.useRef([]),
        s = o.useRef(""),
        i = o.useCallback(() => {
            let { results: e, query: t } = hA.A.getProps();
            (l.current !== e || s.current !== t) && ((l.current = e), (s.current = t), hM());
        }, []);
    o.useEffect(() => {
        if (e) return hA.A.addChangeListener(i), () => hA.A.removeChangeListener(i);
    }, [i, e]);
    let d = o.useCallback(async () => {
        let { isUploading: e } = hz.getState();
        if (!e)
            try {
                hz.setState({ isRecording: !1, isUploading: !0, errorMessage: null, isSuccess: !1 }),
                    await (0, hE.a)($.Umv.WEB_APP),
                    hz.setState({ isSuccess: !0, errorMessage: null });
            } catch (t) {
                let e = new h_.LG(t);
                hz.setState({ errorMessage: e.getAnyErrorMessage() });
            } finally {
                hz.setState({ isUploading: !1 });
            }
    }, []);
    return (0, r.jsxs)(u.n, {
        label: "Debug Logs Session",
        description:
            "Click to emit debug logs as you search in the Quick Switcher. Includes your search term and all results. For each result, includes the record id, associated names, and frecency scores.",
        children: [
            (0, r.jsx)(uL.p, {
                messageType: uL.Y.INFO,
                children: "When you are done, please remember to upload the logs.",
            }),
            (0, r.jsxs)(lQ.e, {
                children: [
                    (0, r.jsx)(h.$, {
                        variant: e ? "critical-primary" : "primary",
                        onClick: () => hz.setState({ isRecording: !e }),
                        text: e ? "Stop Recording" : "Start Recording",
                    }),
                    (0, r.jsx)(hB, {
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
var hK = a(145497);
let hY = (0, hC.D)(() => ({ userId: null, state: null, loading: !1, error: null }));
function hq(e) {
    let { title: t, guildIds: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: hG.J1,
                children: (0, r.jsx)(C.E, { variant: "text-sm/normal", children: t }),
            }),
            (0, r.jsxs)("div", {
                className: hG.uk,
                children: [
                    0 === a.length &&
                        (0, r.jsx)("div", {
                            className: hG.J1,
                            children: (0, r.jsx)(C.E, { variant: "text-sm/normal", children: "None" }),
                        }),
                    a.map((e) => {
                        let t = aV.A.getGuild(e);
                        return null == t
                            ? null
                            : (0, r.jsxs)(
                                  "div",
                                  {
                                      className: hG.J1,
                                      children: [
                                          (0, r.jsx)(hK.Ay, { guild: t, iconSize: 16 }),
                                          (0, r.jsx)(C.E, { variant: "text-sm/normal", children: t.name }),
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
function hJ(e) {
    let { userState: t } = e,
        { user: a, searchWorkerUser: n, guildMembers: l, guildMemberRequests: s } = t,
        i = o.useCallback((e) => {
            let { ok: t } = e;
            return t
                ? (0, r.jsx)(sP.y, { size: "sm", color: eN.A.colors.STATUS_POSITIVE })
                : (0, r.jsx)(mW.E, { size: "sm", color: eN.A.colors.ICON_FEEDBACK_CRITICAL });
        }, []);
    return (0, r.jsxs)("div", {
        className: hG.N6,
        children: [
            (0, r.jsxs)("div", {
                className: hG.J1,
                children: [
                    i({ ok: null != a }),
                    (0, r.jsx)(C.E, {
                        variant: "text-sm/normal",
                        children: null != a ? "User exists in UserStore" : "User does not exist in UserStore",
                    }),
                ],
            }),
            null != a &&
                (0, r.jsx)("div", {
                    className: hG.uk,
                    children: (0, r.jsx)("div", {
                        className: hG.J1,
                        children: (0, r.jsx)(C.E, { variant: "text-sm/normal", children: `username: ${a.username}` }),
                    }),
                }),
            (0, r.jsxs)("div", {
                className: hG.J1,
                children: [
                    i({ ok: null != n }),
                    (0, r.jsx)(C.E, {
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
                    className: hG.uk,
                    children: [
                        (0, r.jsx)("div", {
                            className: hG.J1,
                            children: (0, r.jsx)(C.E, {
                                variant: "text-sm/normal",
                                children: `username: ${n.username}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: hG.J1,
                            children: (0, r.jsx)(C.E, {
                                variant: "text-sm/normal",
                                children: `global name: ${n.globalName ?? "\u2014"}`,
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: hG.J1,
                            children: (0, r.jsx)(C.E, { variant: "text-sm/normal", children: "nicknames:" }),
                        }),
                        (0, r.jsxs)("div", {
                            className: hG.uk,
                            children: [
                                0 === Object.keys(n.nicknames).length &&
                                    (0, r.jsx)("div", {
                                        className: hG.J1,
                                        children: (0, r.jsx)(C.E, { variant: "text-sm/normal", children: "None" }),
                                    }),
                                Object.entries(n.nicknames).map((e) => {
                                    let [t, a] = e,
                                        n = aV.A.getGuild(t),
                                        l = t6.A.getChannel(t);
                                    return (0, r.jsxs)(
                                        "div",
                                        {
                                            className: hG.J1,
                                            children: [
                                                null != n && (0, r.jsx)(hK.Ay, { guild: n, iconSize: 16 }),
                                                null != n &&
                                                    (0, r.jsx)(C.E, { variant: "text-sm/normal", children: n.name }),
                                                null == n &&
                                                    null != l &&
                                                    (0, r.jsx)(C.E, {
                                                        variant: "text-sm/normal",
                                                        children: (0, t3.m1)(l, G.default, t5.A),
                                                    }),
                                                (0, r.jsx)(C.E, { variant: "text-sm/normal", children: ` (${t})` }),
                                                null != a &&
                                                    "" !== a &&
                                                    (0, r.jsx)(C.E, { variant: "text-sm/normal", children: ` - ${a}` }),
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
                className: hG.J1,
                children: [
                    i({ ok: l.length > 0 }),
                    (0, r.jsx)(C.E, {
                        variant: "text-sm/normal",
                        children: l.length > 0 ? "Guild members exist:" : "No guild members exist",
                    }),
                ],
            }),
            l.length > 0 &&
                (0, r.jsx)("div", {
                    className: hG.uk,
                    children: l.map((e) => {
                        let t = aV.A.getGuild(e.guildId);
                        if (null == t) return null;
                        let a = e.nick ?? "";
                        return (0, r.jsxs)(
                            "div",
                            {
                                className: hG.J1,
                                children: [
                                    (0, r.jsx)(hK.Ay, { guild: t, iconSize: 16 }),
                                    (0, r.jsxs)(C.E, {
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
                className: hG.J1,
                children: [
                    (0, r.jsx)(ct.m, { size: "sm" }),
                    (0, r.jsx)(C.E, { variant: "text-sm/normal", children: "GuildMemberRequesterStore State" }),
                ],
            }),
            null != s &&
                (0, r.jsxs)("div", {
                    className: hG.uk,
                    children: [
                        (0, r.jsx)(hq, { title: "Pending Guild Member Requests:", guildIds: s.pendingRequestGuildIds }),
                        (0, r.jsx)(hq, { title: "Sent Guild Member Requests:", guildIds: s.sentRequestGuildIds }),
                        (0, r.jsx)(hq, {
                            title: "Unacknowledged Guild Member Requests:",
                            guildIds: s.unacknowledgedRequestGuildIds,
                        }),
                    ],
                }),
        ],
    });
}
function hQ() {
    let e = o.useCallback((e) => {
            hY.setState({ userId: e, state: null });
        }, []),
        t = o.useCallback(async () => {
            let { userId: e, loading: t } = hY.getState();
            if (!t && null != e) {
                hY.setState({ loading: !0, error: null });
                try {
                    let t = await hU(e);
                    hY.setState({ state: t, loading: !1 });
                } catch (t) {
                    let e = new h_.LG(t);
                    hY.setState({ error: e.getAnyErrorMessage(), loading: !1 });
                } finally {
                    hY.setState({ loading: !1 });
                }
            }
        }, []),
        a = hY.useField("loading");
    return (0, r.jsxs)("div", {
        className: hG.$n,
        children: [
            (0, r.jsx)(p.k, { placeholder: "User ID", onChange: e }),
            (0, r.jsx)(h.$, { onClick: t, text: "Get Snapshot", loading: a, disabled: a }),
        ],
    });
}
function hX() {
    let e = hY.useField("state"),
        t = hY.useField("error");
    return (0, r.jsxs)(u.n, {
        label: "Debug User State",
        description:
            "Paste a user ID below to get a snapshot of client state for the user. This does not generate any logs.",
        children: [
            (0, r.jsx)(hQ, {}),
            null != t &&
                (0, r.jsx)(C.E, {
                    variant: "text-sm/normal",
                    color: "text-feedback-critical",
                    className: hG.qS,
                    children: t,
                }),
            null != e && (0, r.jsx)(hJ, { userState: e }),
        ],
    });
}
function hZ() {
    return (0, r.jsxs)(d.Ip, {
        className: hG.nd,
        children: [
            (0, r.jsx)(hH, {}),
            (0, r.jsx)(aO.c, {}),
            (0, r.jsx)(hV, {}),
            (0, r.jsx)(aO.c, {}),
            (0, r.jsx)(hX, {}),
            (0, r.jsx)(aO.c, {}),
            (0, r.jsx)(hW, {}),
        ],
    });
}
var h0 = a(761508),
    h1 = a(599147),
    h2 = a(808411),
    h8 = a(624716),
    h3 = a(398590),
    h6 = a(848281),
    h5 = a(263419),
    h4 = a(52822),
    h9 = a(642153);
let h7 = [
        { id: "virtual-currency", name: "Virtual Current (Orb) Components" },
        { id: "nitro", name: "Nitro Components" },
    ],
    xe = {
        "virtual-currency": function () {
            return (0, r.jsxs)(h4.Hq, {
                label: "Open New Revenue Storybook",
                direction: "vertical",
                children: [
                    (0, r.jsx)(C.E, {
                        variant: "text-md/normal",
                        color: "text-feedback-info",
                        style: { marginBottom: "8px" },
                        children: "This section is deprecated. Use button to open the new Revenue Storybook instead.",
                    }),
                    (0, r.jsx)(h.$, {
                        onClick: () => {
                            var e;
                            return (
                                (e = h5.RevenuePlaygroundCollectionId.VIRTUAL_CURRENCY),
                                void (h6.PlaygroundStore.setState({ selectedCollection: e, selectedStory: null }),
                                (0, h3.id)($.zgK.COMPONENT_PLAYGROUND))
                            );
                        },
                        text: "Open New Revenue Storybook",
                    }),
                ],
            });
        },
        nitro: () =>
            (0, r.jsxs)("div", { children: [(0, r.jsx)(h1.o, {}), (0, r.jsx)(h2.A, {}), (0, r.jsx)(h8.A, {})] }),
    };
function xt() {
    let [e, t] = o.useState("virtual-currency"),
        a = o.useMemo(() => xe[e], [e]);
    return (0, r.jsxs)("div", {
        className: y()(tS.nd, h9.kL),
        children: [
            (0, r.jsx)(h0.V, {
                className: h9.$H,
                selectedItem: e,
                onItemSelect: t,
                look: "brand",
                type: "top",
                orientation: "horizontal",
                children: h7.map((e) => (0, r.jsx)(h0.V.Item, { id: e.id, children: e.name }, e.id)),
            }),
            (0, r.jsx)(d.Ar, { children: (0, r.jsx)("div", { className: h9.Qs, children: (0, r.jsx)(a, {}) }) }),
        ],
    });
}
var xa = a(718446),
    xn = a(766075),
    xl = a(355097);
let xs = (0, hC.D)(() => ({ urlString: "", error: null })),
    xi = Object.entries(xl.od).map((e) => {
        let [t, a] = e;
        return { id: t, label: a, value: t };
    });
function xr() {
    let [e, t] = o.useState(),
        a = xs.useField("urlString"),
        n = xs.useField("error"),
        l = o.useCallback(() => {
            let e = xs.getField("urlString");
            if (null == e || "" === e) return void xs.setState({ error: "URL is required" });
            let t = (0, xa.parseSettingsUrl)({ path: e });
            ((0, xa.trackParseSettingsUrl)(t, "devtools"), null == t.target)
                ? xs.setState({ error: "String did not match expected format" })
                : (0, xn.openUserSettings)(t.target, { path: t.path });
        }, []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Deep Link Tool",
        children: [
            (0, r.jsx)(tq.Z, {
                label: "[optional] Choose a path",
                clearable: !0,
                value: e,
                placeholder: "Select a settings path",
                options: xi,
                selectionMode: "single",
                onSelectionChange: (e) => {
                    if ((t(e), null != e)) {
                        let [t, a] = xl.od[e].split("/");
                        xs.setState({ urlString: $.BVt.SETTINGS(t, a), error: null });
                    }
                },
                fullWidth: !0,
            }),
            (0, r.jsx)(p.k, {
                label: "URL",
                placeholder: "e.g. /settings/appearance",
                value: a,
                onChange: (e) => xs.setState({ urlString: e, error: null }),
            }),
            (0, r.jsxs)(lQ.e, {
                children: [
                    (0, r.jsx)(h.$, {
                        variant: "primary",
                        onClick: l,
                        text: "Open User Settings for URL",
                        disabled: "" === a,
                    }),
                    (0, r.jsx)(h.$, {
                        variant: "secondary",
                        onClick: () => (0, ns.C)(`${window.location.origin}${a}`),
                        disabled: "" === a,
                        text: "Copy URL",
                    }),
                ],
            }),
            null != n && (0, r.jsx)(C.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: n }),
        ],
    });
}
var xo = a(780964);
let xd = (0, hC.D)(() => ({ setting: xo.X.ACCOUNT_PANEL }));
function xc() {
    let e = xd.useField("setting"),
        t = o.useCallback(() => {
            (0, xn.openUserSettings)(e);
        }, [e]),
        a = o.useMemo(() => Object.values(xo.X).map((e) => ({ id: e, label: e, value: e })), []);
    return (0, r.jsxs)(u.n, {
        label: "Settings Navigation Tool",
        children: [
            (0, r.jsx)(tq.Z, {
                label: "Setting",
                placeholder: "Select a setting",
                value: e,
                onSelectionChange: (e) => xd.setState({ setting: e }),
                options: a,
                selectionMode: "single",
                clearable: !0,
            }),
            (0, r.jsx)(h.$, { variant: "primary", onClick: t, text: "Open User Settings" }),
        ],
    });
}
var xu = a(963935),
    xm = a(879398),
    xh = a(53181);
function xx(e) {
    let { title: t, initExpanded: a, highlightMode: n = "none", children: l } = e,
        [s, i] = o.useState(a),
        d = o.useCallback(() => {
            i(!s);
        }, [s]),
        c = "migrated" === n || "migrated-root" === n ? void 0 : "status-warning",
        u = (e) => (0, r.jsx)(C.E, { variant: e, color: c, children: t });
    return null == l
        ? (0, r.jsx)("div", { className: xh.NF, children: u("text-md/normal") })
        : (0, r.jsxs)("div", {
              className: xh.NF,
              children: [
                  (0, r.jsxs)(_.D, {
                      className: xh.jr,
                      onClick: d,
                      children: [
                          u("text-md/bold"),
                          (0, r.jsx)(l5.A, {
                              direction: s ? l5.A.Directions.DOWN : l5.A.Directions.RIGHT,
                              className: xh.D,
                          }),
                      ],
                  }),
                  s && (0, r.jsx)("div", { className: xh.m4, children: l }),
              ],
          });
}
function xp(e) {
    let { setting: t, depth: a, inheritedHighlightMode: n } = e,
        l = (function (e, t) {
            if ("migrated" === t) return "migrated";
            switch (e.type) {
                case xu.Z6.ROOT:
                    return "migrated-root";
                case xu.Z6.SECTION:
                case xu.Z6.PANEL:
                case xu.Z6.SIDEBAR_ITEM:
                    return "migrated";
                default:
                    return t ?? "migrated";
            }
        })(t, n),
        s = "migrated" === l ? "migrated" : void 0,
        i = null;
    return (
        (0, xu.nW)(t) &&
            t.layout.length > 0 &&
            (i = t.layout.map((e) => (0, r.jsx)(xp, { setting: e, depth: a + 1, inheritedHighlightMode: s }, e.key))),
        (0, r.jsx)(xx, { title: t.key, initExpanded: a <= 2, highlightMode: l, children: i })
    );
}
function xg() {
    let { node: e } = (0, P.Ay)(xm.D, ""),
        t = (0, P.KA)();
    return (0, r.jsxs)(u.n, {
        label: "Settings Tree",
        children: [
            (0, r.jsx)(tf.d, {
                label: "Bypass Predicates",
                description: "Forces all migrated settings to be visible.",
                checked: t,
                onChange: P.jL,
            }),
            (0, r.jsx)(xp, { setting: e, depth: 1 }, e.key),
        ],
    });
}
var xv = a(168803);
function xj() {
    return (0, r.jsxs)(d.Ip, {
        className: xv.n,
        children: [
            (0, r.jsx)(xc, {}),
            (0, r.jsx)(aO.c, {}),
            (0, r.jsx)(xr, {}),
            (0, r.jsx)(aO.c, {}),
            (0, r.jsx)(xg, {}),
        ],
    });
}
function xb() {
    return o.useMemo(() => {
        let e = [
            {
                id: "analytics",
                name: "Analytics",
                group: aD.fu.EXPERIMENTS,
                tags: ["events", "impressions", "tracking"],
                render: () => (0, r.jsx)(nk, {}),
            },
            {
                id: "triggers",
                name: "Triggers",
                group: aD.fu.EXPERIMENTS,
                tags: ["experiments", "exposure", "buckets"],
                render: () => (0, r.jsx)(uM, {}),
            },
            {
                id: "stores",
                name: "Stores",
                group: aD.fu.EVENTS,
                tags: ["flux", "state"],
                render: () => (0, r.jsx)(uT, {}),
            },
            {
                id: "dispatcher",
                name: "Dispatcher",
                group: aD.fu.EVENTS,
                tags: ["flux", "actions"],
                render: () => (0, r.jsx)(lK, {}),
            },
        ];
        return (
            ag.A.isDeveloper &&
                (e.push({ id: "shop", name: "Shop Overrides", group: aD.fu.SHOP, render: () => (0, r.jsx)(uf, {}) }),
                e.push({
                    id: "payment_flow_modals",
                    name: "Payment Flow Modals",
                    group: aD.fu.BILLING,
                    tags: ["gifts", "nitro", "boost", "sku", "collectibles"],
                    render: () => (0, r.jsx)(ds, {}),
                }),
                e.push({
                    id: "shop_collectibles",
                    name: "Collectibles Preview",
                    group: aD.fu.SHOP,
                    render: () => (0, r.jsx)(tg, {}),
                }),
                e.push({
                    id: "quick_actions",
                    name: "Quick Actions",
                    group: aD.fu.DEVELOPMENT,
                    tags: ["captcha", "safety", "vibe", "vibing", "override", "premium type"],
                    render: () => (0, r.jsx)(cS, {}),
                }),
                e.push({
                    id: "end_to_end_encryption",
                    name: "E2EE",
                    group: aD.fu.DEVELOPMENT,
                    tags: ["secure frames", "encryption"],
                    render: () => (0, r.jsx)(lJ, {}),
                }),
                e.push({
                    id: "performance",
                    name: "Performance",
                    group: aD.fu.DEVELOPMENT,
                    tags: ["fps", "frames", "gateway", "telemetry"],
                    render: () => (0, r.jsx)(dM.Ay, {}),
                }),
                e.push({
                    id: "age_verification",
                    name: "Age Verification",
                    group: aD.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(a8, {}),
                }),
                e.push({
                    id: "feedback",
                    name: "Feedback",
                    group: aD.fu.USERS,
                    tags: ["surveys"],
                    render: () => (0, r.jsx)(l8, {}),
                }),
                e.push({ id: "overlay", name: "Overlay v3", group: aD.fu.GAMES, render: () => (0, r.jsx)(oQ, {}) }),
                e.push({
                    id: "generated_test_user",
                    name: "Generated Test Users",
                    group: aD.fu.DEVELOPMENT,
                    render: () => (0, r.jsx)(s3, {}),
                }),
                e.push({
                    id: "detected_games",
                    name: "Detected Games",
                    group: aD.fu.GAMES,
                    render: () => (0, r.jsx)(lA, {}),
                }),
                e.push({ id: "slayer_sdk", name: "Slayer SDK", group: aD.fu.GAMES, render: () => (0, r.jsx)(u_, {}) }),
                e.push({
                    id: "account_linking",
                    name: "Account Linking",
                    group: aD.fu.GAMES,
                    render: () => (0, r.jsx)(aq, {}),
                }),
                e.push({
                    id: "slayer_storefront",
                    name: "Slayer Storefront",
                    group: aD.fu.GAMES,
                    render: () => (0, r.jsx)(ap, {}),
                }),
                e.push({
                    id: "game_profile",
                    name: "Game Profile",
                    group: aD.fu.GAMES,
                    render: () => (0, r.jsx)(t2, {}),
                }),
                e.push({
                    id: "quick_switcher",
                    name: "Quick Switcher",
                    group: aD.fu.USERS,
                    render: () => (0, r.jsx)(hZ, {}),
                }),
                e.push({ id: "clips", name: "Clips", group: aD.fu.AUDIO_VIDEO, render: () => (0, r.jsx)(b, {}) })),
            e.push({
                id: "rive",
                name: "Rive",
                group: aD.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(cI, {}),
            }),
            e.push({
                id: "gradient-contrast",
                name: "Tab Hover Gradient",
                group: aD.fu.UI,
                tags: ["accessibility", "contrast", "gradient", "wcag"],
                render: () => (0, r.jsx)(iP, {}),
            }),
            e.push({
                id: "lottie",
                name: "Lottie",
                group: aD.fu.UI,
                tags: ["animation"],
                render: () => (0, r.jsx)(rd, {}),
            }),
            e.push({
                id: "intl",
                name: "Intl",
                group: aD.fu.UI,
                tags: ["i18n", "localization", "messages"],
                render: () => (0, r.jsx)(i5, {}),
            }),
            e.push({
                id: "colors",
                name: "Colors",
                group: aD.fu.UI,
                tags: ["tokens", "themes", "palette"],
                render: () => (0, r.jsx)(n0, {}),
            }),
            e.push({ id: "design_toggles", name: "Design Toggles", group: aD.fu.UI, render: () => (0, r.jsx)(lb, {}) }),
            e.push({
                id: "appearance_randomizer",
                name: "Appearance Randomizer",
                group: aD.fu.UI,
                render: () => (0, r.jsx)(ce, {}),
            }),
            e.push({
                id: "overlays",
                name: "Dev Overlays",
                group: aD.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(sv, { devSettingsCategory: av.xW.OVERLAYS }),
            }),
            e.push({
                id: "messaging",
                name: "Messaging",
                group: aD.fu.USERS,
                tags: ["dm", "nux", "system dm"],
                render: () => (0, r.jsx)(rA, {}),
            }),
            e.push({
                id: "reporting",
                name: "Reporting",
                group: aD.fu.EXPERIMENTS,
                render: () => (0, r.jsx)(sv, { devSettingsCategory: av.xW.REPORTING }),
            }),
            e.push({ id: "permissions", name: "Permissions", group: aD.fu.USERS, render: () => (0, r.jsx)(dK, {}) }),
            e.push({
                id: "modals",
                name: "Modals",
                group: aD.fu.UI,
                tags: ["dialogs", "popups"],
                render: () => (0, r.jsx)(rL, {}),
            }),
            e.push({
                id: "menus",
                name: "Menus",
                group: aD.fu.UI,
                tags: ["contextmenus", "popout"],
                render: () => (0, r.jsx)(rx, {}),
            }),
            e.push({
                id: "layers",
                name: "Layers",
                group: aD.fu.UI,
                tags: ["verification", "safety flow"],
                render: () => (0, r.jsx)(rl, {}),
            }),
            e.push({
                id: "affinity",
                name: "Affinity",
                group: aD.fu.USERS,
                tags: ["friends"],
                render: () => (0, r.jsx)(aZ, {}),
            }),
            e.push({
                id: "channel_affinity",
                name: "Channel Affinity",
                group: aD.fu.USERS,
                tags: ["channels"],
                render: () => (0, r.jsx)(nZ, {}),
            }),
            ag.A.isDeveloper &&
                (e.push({
                    id: "content_inventory",
                    name: "Content Inventory",
                    group: aD.fu.USERS,
                    render: () => (0, r.jsx)(tK, {}),
                }),
                e.push({
                    id: "notifications_inbox",
                    name: "Notifications Inbox",
                    group: aD.fu.USERS,
                    render: () => (0, r.jsx)(aa, {}),
                })),
            e.push({ id: "dcf_overrides", name: "DCF Overrides", group: aD.fu.DCF, render: () => (0, r.jsx)(lp, {}) }),
            e.push({ id: "dcf_events", name: "DCF Events", group: aD.fu.DCF, render: () => (0, r.jsx)(n9, {}) }),
            e.push({
                id: "hotspots",
                name: "Hotspots",
                group: aD.fu.EXPERIMENTS,
                tags: ["coachmarks", "nux", "onboarding"],
                render: () => (0, r.jsx)(i1, {}),
            }),
            e.push({
                id: "perks",
                name: "Perks",
                group: aD.fu.PREMIUM,
                tags: ["nitro", "tenure", "badges", "level up"],
                render: () => (0, r.jsx)(dU, {}),
            }),
            window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") &&
                (e.push({
                    id: "offers",
                    name: "Offers",
                    group: aD.fu.PREMIUM,
                    tags: ["discounts", "trials", "reverse trials", "churn"],
                    render: () => (0, r.jsx)(rQ, {}),
                }),
                e.push({
                    id: "payments",
                    name: "Payments",
                    group: aD.fu.BILLING,
                    tags: ["stripe", "cards", "test cards"],
                    render: () => (0, r.jsx)(dC, {}),
                }),
                e.push({
                    id: "subscriptions",
                    name: "Subscriptions",
                    group: aD.fu.PREMIUM,
                    tags: ["nitro", "reverse trial"],
                    render: () => (0, r.jsx)(mL, {}),
                }),
                e.push({
                    id: "fractional_nitro",
                    name: "Fractional Nitro",
                    group: aD.fu.PREMIUM,
                    tags: ["entitlements", "quests"],
                    render: () => (0, r.jsx)(sd, {}),
                })),
            e.push({
                id: "gifting_intent",
                name: "Gifting Intent",
                group: aD.fu.PREMIUM,
                tags: ["friends", "anniversary"],
                render: () => (0, r.jsx)(ie, {}),
            }),
            e.push({
                id: "spatial_audio",
                name: "Spatial Audio",
                group: aD.fu.AUDIO_VIDEO,
                tags: ["spatial", "hrtf", "steam audio", "3d"],
                render: () => (0, r.jsx)(mx, {}),
            }),
            e.push({
                id: "krisp_tester",
                name: "Krisp Tester",
                group: aD.fu.AUDIO_VIDEO,
                tags: ["noise cancellation", "audio", "vad"],
                render: () => (0, r.jsx)(u7, {}),
            }),
            e.push({
                id: "av_overrides",
                name: "Overrides",
                group: aD.fu.AUDIO_VIDEO,
                tags: ["video", "capture", "encoder", "golive"],
                render: () => (0, r.jsx)(uY, {}),
            }),
            e.push({
                id: "batch_audio_processor",
                name: "Batch Audio Processor",
                group: aD.fu.AUDIO_VIDEO,
                tags: ["krisp", "noise cancellation", "wav", "batch", "audio processing", "ingest"],
                render: () => (0, r.jsx)(uQ, {}),
            }),
            e.push({
                id: "skill_trees",
                name: "Skill Trees",
                group: aD.fu.BOOSTING,
                tags: ["boosting", "powerups", "server tag"],
                render: () => (0, r.jsx)(iQ, {}),
            }),
            e.push({ id: "game_server", name: "Game Server", group: aD.fu.BOOSTING, render: () => (0, r.jsx)(sx, {}) }),
            e.push({
                id: "language",
                name: "Language",
                group: aD.fu.UI,
                tags: ["locale"],
                render: () => (0, r.jsx)(i9, {}),
            }),
            e.push({
                id: "user_settings",
                name: "User Settings",
                group: aD.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(xj, {}),
            }),
            e.push({
                id: "quest_minor_reward_capping_config",
                name: "Minor Reward Capping",
                group: aD.fu.QUESTS,
                render: () => (0, r.jsx)(ai, {}),
            }),
            e.push({
                id: "virtual_currency_config",
                name: "Virtual Currency Config",
                group: aD.fu.QUESTS,
                render: () => (0, r.jsx)(uG, {}),
            }),
            e.push({
                id: "Revenue Storybook",
                name: "Revenue Storybook",
                group: aD.fu.BILLING,
                render: () => (0, r.jsx)(xt, {}),
            }),
            e.push({
                id: "quest_preview",
                name: "Quest Preview",
                group: aD.fu.QUESTS,
                render: () => (0, r.jsx)(hy, {}),
            }),
            e.push({
                id: "profile_theme_override",
                name: "Profile Theme Override",
                group: aD.fu.USERS,
                render: () => (0, r.jsx)(cr, {}),
            }),
            e.push({
                id: "application_widget",
                name: "Application Widget",
                group: aD.fu.USERS,
                render: () => (0, r.jsx)(nG, {}),
            }),
            e.push({
                id: "developer_portal",
                name: "Developer Portal",
                group: aD.fu.DEVELOPMENT,
                render: () => (0, r.jsx)(lD, {}),
            }),
            e
        );
    }, []);
}
