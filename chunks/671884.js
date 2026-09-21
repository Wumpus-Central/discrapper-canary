l.d(t, { default: () => lu });
var n = l(477900),
    i = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(562708),
    o = l(935399),
    c = l(517846),
    u = l(17928),
    d = l(192308),
    m = l(521489),
    h = l(231723),
    x = l(97808),
    g = l(778712),
    f = l(297264),
    p = l(866665),
    j = l(408278),
    v = l(405433),
    y = l(241326),
    b = l(972213),
    C = l(775602),
    k = l(793574),
    A = l(688810),
    N = l(139286),
    w = l(429913),
    P = l(769015),
    E = l(27620),
    L = l(540999),
    I = l(287809),
    S = l(723702),
    M = l(915725),
    D = l(614584),
    T = l(362081),
    _ = l(282207),
    R = l(620957),
    F = l(245116),
    H = l(352527),
    z = l(280483),
    O = l(111994);
l(321073);
var U = l(118057),
    G = l(834730),
    K = l(289873),
    V = l(962125),
    $ = l(915089);
function q(e) {
    let { alt: t, ariaLabel: l, ariaHidden: i, role: a, width: s = 288, height: r = 162 } = e;
    return (0, n.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/1e6b3a97c86291528609222cdeb8b18fdcce3270f796106d4af3d0f7fa3cce18.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var B = l(702841),
    Q = l(687966),
    Y = l(661531),
    W = l(475358),
    X = l(123292),
    Z = l(292801),
    J = l(780964),
    ee = l(766075),
    et = l(532624),
    el = l(350535),
    en = l(572164),
    ei = l(953932),
    ea = l(652215),
    es = l(268378),
    er = l(375708),
    eo = l(71967);
function ec(e) {
    let { header: t, description: l } = e;
    return (0, n.jsxs)("div", {
        className: eo.Nr,
        children: [t, (0, n.jsx)(G.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function eu() {
    let e = (0, B.bG)([et.Ay], () => et.Ay.getKeybindForAction(ea.hCu.SAVE_CLIP)),
        t = null != e ? el.dI(e.shortcut, !0) : null;
    return (0, n.jsxs)("div", {
        className: eo.kR,
        children: [
            (0, n.jsx)(ec, {
                header: (0, n.jsx)(Q.GameControllerIcon, { size: "refresh_sm", color: Y.A.colors.ICON_DEFAULT }),
                description: er.intl.string(es.default["4K56sP"]),
            }),
            (0, n.jsx)(ec, {
                header: null != t ? (0, n.jsx)(W.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  er.intl.format(es.default.BIwQis, { keybind: t }),
                                  (0, n.jsx)("div", {
                                      className: eo.JH,
                                      children: (0, n.jsx)(X.Q, {
                                          text: er.intl.string(es.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, ee.openUserSettings)(J.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : er.intl.string(es.default.HOUDUm),
            }),
            (0, n.jsx)(ec, {
                header: (0, n.jsx)(Z.t, { size: "refresh_sm", color: Y.A.colors.ICON_DEFAULT }),
                description: er.intl.string(es.default.DLzdl7),
            }),
        ],
    });
}
function ed(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, en.E)();
    return (0, n.jsx)("div", {
        className: eo.kL,
        children: (0, n.jsxs)("div", {
            className: eo.Qs,
            children: [
                (0, n.jsx)(q, { width: 213, height: 135, alt: "" }),
                (0, n.jsx)(f.D, {
                    className: eo.wx,
                    variant: "heading-xl/semibold",
                    children: t ? er.intl.string(es.default["+M2iLf"]) : er.intl.string(es.default.m2GEpP),
                }),
                t &&
                    (0, n.jsx)(G.E, {
                        className: eo.h_,
                        variant: "text-md/medium",
                        children: er.intl.string(es.default.xkY5xS),
                    }),
                !l && (0, n.jsx)("div", { className: eo.SO, children: (0, n.jsx)(ei.A, {}) }),
                l && !t && (0, n.jsx)(eu, {}),
            ],
        }),
    });
}
let em = 16 / 9;
var eh = l(621466),
    ex = l(61491),
    eg = l(342952),
    ef = l(890856),
    ep = l(365199),
    ej = l(27232),
    ev = l(821609),
    ey = l(22231),
    eb = l(983851),
    eC = l(31300),
    ek = l(442433),
    eA = l(587895),
    eN = l(47167),
    ew = l(549973),
    eP = l(734057),
    eE = l(71393),
    eL = l(549685),
    eI = l(174459),
    eS = l(403362),
    eM = l(53677),
    eD = l(609174),
    eT = l(619744),
    e_ = l(82716),
    eR = l(585579),
    eF = l(930317),
    eH = l(285072),
    ez = l(284009),
    eO = l.n(ez),
    eU = l(460905),
    eG = l(713608),
    eK = l(696016),
    eV = l(153511);
function e$(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    eO()(l?.type === eK.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let i = (0, u.bG)([I.default], () => I.default.getUser(l.remoteTriggerUserId));
    if (null == i) return null;
    let a = i.globalName ?? i.username;
    return (0, n.jsx)(p.m, {
        text: er.intl.string(es.default.vTTkFF),
        children: (0, n.jsxs)("div", {
            className: eV.S,
            children: [
                (0, n.jsx)("img", { src: i.getAvatarURL(null, 12, !1), className: eV.$, alt: a }),
                (0, n.jsx)(G.E, {
                    color: "text-overlay-light",
                    variant: "text-xs/bold",
                    children: er.intl.formatToPlainString(es.default.QJ7i8Z, { username: a }),
                }),
            ],
        }),
    });
}
function eq(e) {
    let { icon: t, text: l, tooltipText: i } = e;
    return (0, n.jsx)(p.m, {
        text: i,
        children: (0, n.jsxs)("div", {
            className: eV.S,
            children: [
                (0, n.jsx)(t, { size: "xxs", color: "white" }),
                (0, n.jsx)(G.E, { color: "text-overlay-light", variant: "text-xs/bold", children: l }),
            ],
        }),
    });
}
function eB(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === eK.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case eK.Gy.DISTRIBUTED:
            return (0, n.jsx)(e$, { clip: t });
        case eK.Gy.LAUGHTER:
            return (0, n.jsx)(eq, {
                icon: eU.n,
                text: er.intl.string(es.default.bTC23D),
                tooltipText: er.intl.string(es.default["ry+jxm"]),
            });
        case eK.Gy.SHOUTING:
            return (0, n.jsx)(eq, {
                icon: eU.n,
                text: er.intl.string(es.default["3gqpuo"]),
                tooltipText: er.intl.string(es.default["ry+jxm"]),
            });
        case eK.Gy.GAME_EVENT:
            return (0, n.jsx)(eq, {
                icon: eG.q,
                text: t.decision.signal.title ?? "",
                tooltipText: er.intl.string(es.default["347DBb"]),
            });
        default:
            return null;
    }
}
var eQ = l(718812),
    eY = l(721610),
    eW = l(175764);
function eX(e) {
    let { clip: t, actionsDisabled: l, isNew: i, onClick: a, onEdit: s, gridItemProps: r } = e;
    return (0, n.jsx)(eD.Cl, {
        clip: t,
        children: (0, n.jsx)(eZ, { actionsDisabled: l, isNew: i, onClick: a, onEdit: s, gridItemProps: r }),
    });
}
function eZ(e) {
    let { actionsDisabled: t, isNew: a, onClick: r, onEdit: o, gridItemProps: c } = e,
        d = (0, eD.Y_)(),
        m = !0 === d.pending,
        h = t || m,
        { analyticsLocations: x } = (0, A.Ay)(k.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: g, toggleClipSelection: f, isMultiSelectMode: p, onSelectClip: j } = i.useContext(eY.$),
        [v, y] = i.useState(!1),
        [b, N] = i.useState(!1),
        [w, P] = i.useState(!1),
        [E, L] = i.useState(!1),
        [I, S] = i.useState(0),
        D = g.has(d.id),
        T = d.type === eK.nQ.SCREENSHOT,
        _ = (0, u.bG)([C.Ay], () => C.Ay.keyboardModeEnabled),
        R = (b || v || (w && _)) && !D,
        F = i.useCallback(() => P(!0), []),
        H = i.useCallback((e) => {
            e.currentTarget.contains(e.relatedTarget) || P(!1);
        }, []);
    i.useEffect(() => {
        if (!R || T || m) return;
        let e = window.setTimeout(() => L(!0), 150);
        return () => {
            (window.clearTimeout(e), L(!1));
        };
    }, [R, T, m]);
    let z = i.useRef(null),
        O = i.useCallback(() => {
            z.current?.releaseSource();
        }, []),
        U = i.useCallback((e) => {
            z.current?.seek(e);
        }, []),
        G = i.useCallback(() => y(!1), []),
        V = i.useCallback(
            (e) => {
                y(!0);
                let t =
                    p && g.size > 0
                        ? Array.from(g)
                              .map((e) => M.Ay.getClipById(e))
                              .filter(eS.Vq)
                        : [d];
                (0, ek.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("249169"),
                            l.e("657266"),
                            l.e("272396"),
                            l.e("595429"),
                            l.e("311930"),
                            l.e("320891"),
                            l.e("531279"),
                            l.e("371863"),
                            l.e("338601"),
                            l.e("218489"),
                            l.e("669006"),
                            l.e("886456"),
                            l.e("218307"),
                            l.e("869370"),
                        ]).then(l.bind(l, 621953));
                        return (l) =>
                            (0, n.jsx)(e, {
                                ...l,
                                analyticsLocations: x,
                                clips: t,
                                actionsDisabled: h,
                                onSelectClip: null != j ? () => j(d) : void 0,
                                onShare: () => {
                                    eI.default.track(ea.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...eM.lc(),
                                        ...eM.Zy(d),
                                    });
                                },
                                onEdit: () => {
                                    (o(d),
                                        eI.default.track(ea.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...eM.lc(),
                                            ...eM.Zy(d),
                                        }));
                                },
                                onBeforeDelete: O,
                                onAfterDelete: () => {
                                    eI.default.track(ea.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...eM.lc(),
                                        ...eM.Zy(d),
                                    });
                                },
                            });
                    },
                    { onClose: G },
                );
            },
            [d, p, g, h, G, o, O, j, x],
        ),
        $ = i.useCallback(
            (e) => {
                h || (e.preventDefault(), e.stopPropagation(), V(e));
            },
            [h, V],
        ),
        q = i.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), V(e));
            },
            [V],
        ),
        B = i.useCallback(
            (e) => {
                (e.preventDefault(),
                    e.stopPropagation(),
                    o(d),
                    eI.default.track(ea.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" }));
            },
            [o, d],
        ),
        Q = i.useCallback(
            (e) => {
                !h &&
                    (!(0, eh.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") &&
                            null == e.target.closest("[data-clips-progress]") &&
                            e.currentTarget.contains(e.target))) &&
                    (e.shiftKey ? (e.preventDefault(), f(d.id)) : p ? f(d.id) : null != r && r(d),
                    eI.default.track(ea.HAw.CLIP_GALLERY_CARD_CLICKED, { ...eM.lc(), ...eM.Zy(d) }));
            },
            [h, p, f, d, r],
        );
    return (0, n.jsx)(A.f5, {
        value: x,
        children: (0, n.jsx)("div", {
            className: eW.hl,
            onFocus: F,
            onBlur: H,
            children: (0, n.jsxs)(ef.s, {
                "aria-disabled": h,
                "aria-label": er.intl.string(T ? er.t["HO/oXl"] : er.t.bt75uw),
                onClick: h ? void 0 : Q,
                onContextMenu: $,
                buttonProps: null != c ? { role: "button", id: c.id, tabIndex: c.tabIndex } : void 0,
                buttonRef: c?.ref,
                onFocus: c?.onFocus,
                className: s()(eW.Nr, { [eW.r9]: h, [eW.in]: v, [eW.wH]: D }),
                onMouseEnter: () => N(!0),
                onMouseLeave: () => N(!1),
                children: [
                    (0, n.jsx)("div", {
                        className: eW.w7,
                        children: (0, n.jsxs)(eJ, {
                            ref: z,
                            isPlaying: E,
                            onProgressChange: S,
                            children: [
                                m && (0, n.jsx)("div", { className: eW.mi, children: (0, n.jsx)(K.y, {}) }),
                                (0, n.jsx)(e0, { isNew: a }),
                                R && !h ? (0, n.jsx)(e1, { onMenu: q, onBeforeDelete: O }) : (0, n.jsx)(e2, {}),
                                (0, n.jsx)("div", { className: eW.dH, "aria-hidden": "true" }),
                            ],
                        }),
                    }),
                    (0, n.jsx)(e5, { showHoverState: R, playbackProgress: I, onEdit: B, onSeek: U }),
                ],
            }),
        }),
    });
}
let eJ = i.forwardRef((e, t) => {
    let { isPlaying: l, onProgressChange: i, children: a } = e;
    return (0, n.jsx)(eF.d, {
        ref: t,
        isPlaying: l,
        preload: "none",
        onProgressChange: i,
        children: (0, n.jsx)(eH.h, { isVisible: !0, children: a }),
    });
});
function e0(e) {
    let { isNew: t } = e,
        l = (0, eD.Y_)(),
        i = !0 === l.pending;
    return (0, n.jsxs)("div", {
        className: eW.zV,
        children: [
            !i &&
                t &&
                (0, n.jsx)("div", {
                    className: eW.Ad,
                    children: (0, n.jsx)(G.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        children: er.intl.string(er.t.y2b7CA),
                    }),
                }),
            (0, n.jsx)(eB, { clip: l }),
        ],
    });
}
function e1(e) {
    let { onMenu: t, onBeforeDelete: l } = e;
    return (0, n.jsxs)("div", {
        className: eW.Mw,
        children: [
            (0, n.jsx)(p.m, {
                text: er.intl.string(er.t["UKOtz+"]),
                children: (0, n.jsx)(j.K, {
                    onClick: t,
                    icon: ep.MoreHorizontalIcon,
                    "aria-label": er.intl.string(er.t["UKOtz+"]),
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, n.jsx)(eT.k, { onBeforeDelete: l }),
            (0, n.jsx)(e_.z, {}),
        ],
    });
}
function e2() {
    let e = (0, eD.Y_)();
    return (0, n.jsxs)("div", {
        className: eW.E4,
        children: [
            (0, n.jsx)(e3, {}),
            e.isFavorite &&
                (0, n.jsx)("div", {
                    className: s()(eW.cH, eW.y8),
                    "aria-label": er.intl.string(er.t.k8fFjp),
                    children: (0, n.jsx)(ej.StarIcon, { size: "xs", color: "white" }),
                }),
        ],
    });
}
function e3() {
    let e = (0, eD.Y_)(),
        t = 0 === e.length,
        l = !0 === e.pending,
        a = (function (e) {
            if (null == e.editMetadata) return !1;
            function t(e, t) {
                return 100 > Math.abs(e - t);
            }
            let l =
                    !t(1e3 * e.editMetadata.start, e.originalStartMs ?? 0) ||
                    !t(1e3 * e.editMetadata.end, e.originalEndMs ?? e.length),
                n =
                    !1 === e.editMetadata.applicationAudio ||
                    !1 === e.editMetadata.voiceAudio ||
                    !1 === e.editMetadata.soundboardAudio;
            return l || n;
        })(e),
        s = i.useMemo(() => {
            let t = e.length;
            if (null != e.editMetadata) {
                let l = e.editMetadata.end - e.editMetadata.start;
                1e3 * l < e.length && (t = 1e3 * l);
            }
            let l = Math.floor(t / 1e3);
            return (0, ex.rB)(l);
        }, [e.length, e.editMetadata]);
    return t
        ? null
        : (0, n.jsxs)("div", {
              className: eW.cH,
              children: [
                  a && (0, n.jsx)(eL.A, { color: "white", width: 14, height: 14 }),
                  (0, n.jsx)(G.E, {
                      variant: "text-xs/semibold",
                      color: "text-overlay-light",
                      tabularNumbers: !0,
                      children: l ? er.intl.string(er.t["2Fp7OP"]) : s,
                  }),
              ],
          });
}
function e5(e) {
    let { showHoverState: t, playbackProgress: l, onEdit: a, onSeek: r } = e,
        o = (0, eD.Y_)(),
        c = o.type === eK.nQ.SCREENSHOT,
        d = i.useRef(null),
        m = i.useRef(!1),
        h = i.useCallback(
            (e) => {
                let t = d.current;
                if (null == t) return;
                let l = t.getBoundingClientRect();
                0 === l.width || r(Math.max(0, Math.min(100, 100 * ((e - l.left) / l.width))));
            },
            [r],
        ),
        x = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.preventDefault(),
                    (m.current = !0),
                    e.currentTarget.setPointerCapture(e.pointerId),
                    h(e.clientX));
            },
            [h],
        ),
        f = i.useCallback(
            (e) => {
                m.current && h(e.clientX);
            },
            [h],
        ),
        p = i.useCallback((e) => {
            ((m.current = !1),
                e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId));
        }, []),
        j = (0, u.yK)([I.default], () => o.users.map((e) => I.default.getUser(e)).filter(eS.Vq)),
        v = (0, u.bG)([eP.A], () => (null != o.channelId ? eP.A.getChannel(o.channelId) : null)),
        y = (0, u.bG)([eE.A], () => (null != o.guildId ? eE.A.getGuild(o.guildId) : null)),
        b = (0, eN.Ay)(v),
        C = "" === o.applicationName && null != b && "" !== b ? b : o.applicationName,
        k = (0, ew.e)({ timestamp: o.createdAt }),
        A = y?.name;
    return (0, n.jsxs)("div", {
        className: eW.yu,
        children: [
            (0, n.jsxs)("div", {
                className: eW.$,
                children: [
                    (0, n.jsx)(e7, {}),
                    j.length > 0 &&
                        (0, n.jsx)("span", {
                            className: eW.HD,
                            "data-clips-avatars": "true",
                            children: (0, n.jsx)(eg.A, {
                                maxUsers: 3,
                                users: j,
                                size: g._3.SIZE_16,
                                "aria-label": er.intl.string(er.t.WTozwe),
                            }),
                        }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: eW.SO,
                children: [
                    (0, n.jsxs)("div", {
                        className: s()(eW.Ik, { [eW.Mq]: t }),
                        "aria-hidden": t,
                        children: [
                            (0, n.jsxs)("div", {
                                className: eW.Pb,
                                children: [
                                    (0, n.jsx)(e9, {}),
                                    (0, n.jsx)(G.E, {
                                        className: eW.gO,
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: C,
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: eW.eg,
                                children: [
                                    null != A &&
                                        "" !== A &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)(G.E, {
                                                    className: eW.gO,
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: A,
                                                }),
                                                (0, n.jsx)("span", { className: eW.TG, "aria-hidden": "true" }),
                                            ],
                                        }),
                                    (0, n.jsx)(G.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: er.intl.format(es.default["0QCBug"], { time: k }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: s()(eW.n_, { [eW.f$]: t }),
                        inert: !t,
                        children: [
                            !c &&
                                (0, n.jsx)("div", {
                                    ref: d,
                                    className: eW.hr,
                                    onPointerDown: x,
                                    onPointerMove: f,
                                    onPointerUp: p,
                                    "data-clips-progress": "true",
                                    "aria-hidden": "true",
                                    children: (0, n.jsx)("div", {
                                        className: eW.z5,
                                        children: (0, n.jsx)("div", { className: eW.TE, style: { width: `${l}%` } }),
                                    }),
                                }),
                            (0, n.jsxs)("div", {
                                className: eW.E_,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: eW.lO,
                                        children: (0, n.jsx)(ev.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            icon: ey.PencilIcon,
                                            text: er.intl.string(er.t.bt75uw),
                                            onClick: a,
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: eW.lO,
                                        children: (0, n.jsx)(eR.E, { variant: "primary" }),
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
function e7() {
    let e = (0, eD.Y_)(),
        t = (0, eQ.h)(e),
        l = "" !== t;
    return (0, n.jsx)(G.E, {
        className: eW.DD,
        variant: "text-sm/semibold",
        color: "text-default",
        children: l ? t : e.name,
    });
}
function e9() {
    let e = (0, eD.Y_)(),
        t = (0, u.bG)([eA.A], () => (null != e.applicationId ? eA.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, n.jsx)("div", {
        className: eW.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, n.jsx)("img", { src: l, alt: "", className: eW.T_ })
                : e.type === eK.nQ.VOICE_CLIP
                  ? (0, n.jsx)(eb.H, { size: "xs", color: "currentColor" })
                  : (0, n.jsx)(eC.k, { size: "xs", color: "currentColor" }),
    });
}
eJ.displayName = "CardThumbnail";
var e8 = l(792852);
function e6(e) {
    return Math.min(45 * e, 520);
}
var e4 = l(91440),
    te = l(762831);
let tt = [0, 16, 0, 16],
    tl = tt[1] + tt[3];
function tn(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: a, onEdit: s, isLoading: r } = e,
        [o, c] = i.useState({ width: 0, height: 0 }),
        d = (0, u.yK)([M.Ay], () => M.Ay.getNewClipIds()),
        m = (0, u.bG)([M.Ay], () => M.Ay.getExportingClipIds().size > 0),
        h = (0, e8.P)((e) => e.activeMainLink),
        x = (0, e8.P)((e) => e.gameFacet),
        g = (0, e8.P)((e) => e.clippedWithFacet),
        p = i.useMemo(() => {
            let e = [],
                l = new Map(),
                n = [],
                i = new Date();
            i.setHours(0, 0, 0, 0);
            let a = i.getTime();
            if (
                (t.forEach((e) => {
                    let t = e.createdAt,
                        i = new Date(t);
                    if ((i.setHours(0, 0, 0, 0), i.getTime() === a)) n.push(e);
                    else {
                        let n = new Date(t).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
                            i = l.get(n) ?? [];
                        l.set(n, [...i, e]);
                    }
                }),
                n.length > 0)
            ) {
                let t = n.some((e) => "auto" === e.clipMethod);
                e.push({
                    type: "today",
                    title: er.intl.string(er.t["kB2R/0"]),
                    description: t ? er.intl.string(er.t["6AXirz"]) : void 0,
                    clips: n,
                });
            }
            return (
                Array.from(l.entries()).forEach((t) => {
                    let [l, n] = t;
                    e.push({ type: "monthyear", title: l, clips: n });
                }),
                e
            );
        }, [t]),
        { width: j } = o,
        { tileWidth: v, columns: y } = i.useMemo(() => {
            var e, l;
            let n, i, a;
            return (
                (e = t.length),
                (n = Math.max(1, Math.floor(((l = j - tl) + 16) / 336))),
                (i = Math.max(320, (l - 16 * (n - 1)) / n)),
                (a = Math.ceil(e / n)),
                { tileWidth: i, columns: n, rows: a }
            );
        }, [t.length, j]),
        b = (0, $.GV)(),
        k = i.useRef(null),
        A = i.useMemo(() => {
            let e = Math.max(1, y),
                t = [];
            for (let l of p) {
                let n = Math.ceil(l.clips.length / e);
                for (let i = 0; i < n; i++) t.push(Math.min(e, l.clips.length - i * e));
            }
            return t;
        }, [p, y]),
        N = i.useCallback(
            (e, t, l) =>
                new Promise((e) => {
                    k.current?.scrollRowIntoView(t);
                    let n = 0;
                    requestAnimationFrame(function t() {
                        null != document.querySelector(l) || n >= 10 ? e() : (n++, requestAnimationFrame(t));
                    });
                }),
            [],
        ),
        {
            getContainerProps: w,
            getItemProps: P,
            getRowProps: E,
        } = (0, U.A)({ navId: b, columnCounts: A, prepareFocus: N }),
        L = i.useMemo(() => p.map((e) => Math.ceil(e.clips.length / y)), [p, y]),
        I = i.useMemo(() => L.reduce((e, t) => e + t, 0), [L]),
        S = Math.floor(v / em),
        D = p.length > 0 ? `${h}:${x ?? ""}:${g ?? ""}` : null,
        T = (function (e) {
            let t = (0, u.bG)([C.Ay], () => C.Ay.useReducedMotion),
                [l, n] = i.useState(null),
                [a, s] = i.useState(null);
            return (
                e !== l && (n(e), null != e && s(e)),
                i.useEffect(() => {
                    if (null == a) return;
                    let e = window.setTimeout(() => s(null), 1200);
                    return () => window.clearTimeout(e);
                }, [a]),
                !t && null != a
            );
        })(D),
        _ = i.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: i } = t,
                    r = p[l];
                if (null == r) return null;
                let o = i * y,
                    c = r.clips.slice(o, o + y);
                return (0, n.jsx)(
                    "div",
                    {
                        className: e4.UX,
                        ...E(e),
                        children: c.map((t, l) => {
                            let i = { width: v };
                            return (
                                T && (i["--custom-entrance-delay"] = `${e6(e + l)}ms`),
                                (0, n.jsx)(
                                    "div",
                                    {
                                        className: T ? te.$ : void 0,
                                        style: i,
                                        children: (0, n.jsx)(eX, {
                                            actionsDisabled: m,
                                            isNew: d.includes(t.id),
                                            onClick: a ?? s,
                                            onEdit: s,
                                            clip: t,
                                            gridItemProps: P(l, e),
                                        }),
                                    },
                                    `${D ?? "static"}:${t.id}`,
                                )
                            );
                        }),
                    },
                    `row-${l}-${i}`,
                );
            },
            [p, y, v, m, d, a, s, E, P, T, D],
        ),
        R = i.useCallback(
            (e) => {
                let t = p[e];
                return t?.description != null ? 66 : 44;
            },
            [p],
        ),
        F = i.useCallback(
            (e) => {
                let t = p[e];
                return null == t
                    ? null
                    : (0, n.jsxs)(
                          "div",
                          {
                              className: e4.aE,
                              children: [
                                  (0, n.jsx)(f.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, n.jsx)(G.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: e4.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [p],
        );
    if (!r && 0 === p.length) return (0, n.jsx)(ed, { isEmptyBecauseQuery: l > 0 });
    if (r && 0 === p.length) return (0, n.jsx)("div", { className: e4.dc, children: (0, n.jsx)(K.y, {}) });
    let H = (0, n.jsx)(V.A, {
            ref: k,
            role: "none presentation",
            listPadding: tt,
            renderRow: _,
            renderSectionHeader: F,
            rowCount: I,
            rowCountBySection: L,
            rowHeight: S + 96 + 16,
            sectionHeaderHeight: R,
            onResize: c,
        }),
        { onFocus: z, ...O } = w();
    return (0, n.jsx)("div", { className: e4.UT, ...O, children: H });
}
var ti = l(922016),
    ta = l(847374),
    ts = l(980707),
    tr = l(477782),
    to = l(112173),
    tc = l(683438),
    tu = l(548118),
    td = l(341923),
    tm = l(441349),
    th = l(305866),
    tx = l(939249),
    tg = l(789645),
    tf = l(620409),
    tp = l(569737);
function tj(e) {
    return (e.setHours(0, 0, 0, 0), e.getTime());
}
function tv(e) {
    return (e.setHours(23, 59, 59, 999), e.getTime());
}
function ty(e, t) {
    if (null == e && null == t) return null;
    let l = (0, tf.Xj)();
    return { preset: "custom", after: null != e ? tj(e.toDate(l)) : null, before: null != t ? tv(t.toDate(l)) : null };
}
function tb(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new tp.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let tC = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function tk(e) {
    return tC.format(new Date(e));
}
function tA(e) {
    switch (e.preset) {
        case "today":
            return er.intl.string(es.default.yOAWWM);
        case "yesterday":
            return er.intl.string(es.default["PtV/Ti"]);
        case "last-3-days":
            return er.intl.string(es.default.xfmv7I);
        case "this-year":
            return er.intl.string(es.default["+eE7zX"]);
        case "last-year":
            return er.intl.string(es.default.Nwj9v0);
        case "custom": {
            let t = null != e.after ? tk(e.after) : null,
                l = null != e.before ? tk(e.before) : null;
            if (null != t && null != l)
                return er.intl.formatToPlainString(es.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return er.intl.formatToPlainString(es.default.k1FkTL, { date: t });
            if (null != l) return er.intl.formatToPlainString(es.default["4NlpHD"], { date: l });
            return er.intl.string(es.default.tv9apA);
        }
    }
}
var tN = l(435021);
function tw(e) {
    let { closePopout: t } = e,
        l = (0, e8.P)((e) => e.dateFilter),
        a = (0, e8.P)((e) => e.setDateFilter),
        [r, o] = i.useState(l?.preset === "custom"),
        [c, u] = i.useState(() => (l?.preset === "custom" ? tb(l.after) : null)),
        [d, m] = i.useState(() => (l?.preset === "custom" ? tb(l.before) : null)),
        h = i.useMemo(
            () => [
                { key: "today", label: er.intl.string(es.default.yOAWWM) },
                { key: "yesterday", label: er.intl.string(es.default["PtV/Ti"]) },
                { key: "last-3-days", label: er.intl.string(es.default.xfmv7I) },
                { key: "this-year", label: er.intl.string(es.default["+eE7zX"]) },
                { key: "last-year", label: er.intl.string(es.default.Nwj9v0) },
            ],
            [],
        ),
        x = l?.preset ?? null,
        g = r && "custom" !== x ? null : x,
        f = i.useMemo(() => (0, tf.Ec)((0, tf.Xj)()), []),
        v = i.useCallback(
            (e) => {
                (a(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: tj(new Date(t)), before: tv(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: tj(new Date(l)), before: tv(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 2), { preset: e, after: tj(l), before: tv(new Date(t)) }
                                );
                            }
                            case "this-year": {
                                let l = t.getFullYear();
                                return {
                                    preset: e,
                                    after: new Date(l, 0, 1, 0, 0, 0, 0).getTime(),
                                    before: new Date(l, 11, 31, 23, 59, 59, 999).getTime(),
                                };
                            }
                            case "last-year": {
                                let l = t.getFullYear() - 1;
                                return {
                                    preset: e,
                                    after: new Date(l, 0, 1, 0, 0, 0, 0).getTime(),
                                    before: new Date(l, 11, 31, 23, 59, 59, 999).getTime(),
                                };
                            }
                        }
                    })(e),
                ),
                    t());
            },
            [a, t],
        ),
        y = i.useCallback(() => {
            o((e) => !e);
        }, []),
        b = i.useCallback(
            (e) => {
                (u(e), a(ty(e, d)));
            },
            [d, a],
        ),
        C = i.useCallback(
            (e) => {
                (m(e), a(ty(c, e)));
            },
            [c, a],
        ),
        k = i.useCallback(() => {
            (u(null), m(null), a(null));
        }, [a]),
        A = null != c || null != d,
        N = i.useRef(null),
        w = i.useCallback(() => Array.from(N.current?.querySelectorAll('[role="button"]') ?? []), []),
        P = i.useCallback(
            (e) => {
                if ("ArrowDown" !== e.key && "ArrowUp" !== e.key) return;
                let t = w();
                if (0 === t.length) return;
                (e.preventDefault(), e.stopPropagation());
                let l = t.indexOf(e.target);
                if (-1 === l) return void ("ArrowDown" === e.key ? t[0] : t[t.length - 1])?.focus();
                let n = Math.min(t.length - 1, Math.max(0, l + ("ArrowDown" === e.key ? 1 : -1)));
                t[n]?.focus();
            },
            [w],
        ),
        E = i.useCallback(
            (e) => {
                let l = e.relatedTarget;
                (null != l && (e.currentTarget.contains(l) || null != l.closest('[role="dialog"]'))) || t();
            },
            [t],
        );
    return (0, n.jsx)(th.l, {
        "aria-label": er.intl.string(es.default.upqksT),
        onBlur: E,
        children: (0, n.jsxs)("div", {
            className: s()(tN.SW, r && tN.Td),
            children: [
                (0, n.jsxs)("div", {
                    className: tN.sh,
                    children: [
                        (0, n.jsx)(G.E, {
                            variant: "eyebrow",
                            color: "text-muted",
                            className: tN.a9,
                            children: er.intl.string(es.default.upqksT),
                        }),
                        (0, n.jsxs)("div", {
                            ref: N,
                            className: tN.eF,
                            onKeyDown: P,
                            children: [
                                h.map((e) =>
                                    (0, n.jsx)(
                                        tx.D,
                                        {
                                            className: s()(tN.zD, g === e.key && tN.pH),
                                            onClick: () => v(e.key),
                                            "aria-pressed": g === e.key,
                                            children: (0, n.jsx)(G.E, {
                                                variant: "text-sm/medium",
                                                color: "currentColor",
                                                children: e.label,
                                            }),
                                        },
                                        e.key,
                                    ),
                                ),
                                (0, n.jsxs)(tx.D, {
                                    className: s()(tN.zD, tN.Kl, (r || "custom" === x) && tN.pH),
                                    onClick: y,
                                    "aria-expanded": r,
                                    children: [
                                        (0, n.jsx)(G.E, {
                                            variant: "text-sm/medium",
                                            color: "currentColor",
                                            children: er.intl.string(es.default.tv9apA),
                                        }),
                                        (0, n.jsx)(G.E, {
                                            variant: "text-md/medium",
                                            color: "text-muted",
                                            className: tN.Xt,
                                            children: r ? "\u25C0" : "\u25B6",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: tN.ML,
                    "aria-hidden": !r,
                    children: [
                        (0, n.jsxs)("div", {
                            className: tN.U6,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: tN._2,
                                    children: [
                                        (0, n.jsx)(G.E, {
                                            variant: "eyebrow",
                                            color: "text-muted",
                                            className: tN.bk,
                                            "aria-hidden": !0,
                                            children: er.intl.string(es.default["96vZuU"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tN.h0,
                                            children: [
                                                (0, n.jsx)(tm.l, {
                                                    label: er.intl.string(es.default["96vZuU"]),
                                                    hideLabel: !0,
                                                    value: c,
                                                    onChange: b,
                                                    maxValue: d ?? f,
                                                }),
                                                null != c &&
                                                    (0, n.jsx)(p.m, {
                                                        text: er.intl.string(er.t.VkKicb),
                                                        children: (0, n.jsx)(j.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tg.P,
                                                            onClick: () => b(null),
                                                            "aria-label": er.intl.string(er.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: tN._2,
                                    children: [
                                        (0, n.jsx)(G.E, {
                                            variant: "eyebrow",
                                            color: "text-muted",
                                            className: tN.bk,
                                            "aria-hidden": !0,
                                            children: er.intl.string(es.default["GL51/b"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tN.h0,
                                            children: [
                                                (0, n.jsx)(tm.l, {
                                                    label: er.intl.string(es.default["GL51/b"]),
                                                    hideLabel: !0,
                                                    value: d,
                                                    onChange: C,
                                                    minValue: c ?? void 0,
                                                    maxValue: f,
                                                }),
                                                null != d &&
                                                    (0, n.jsx)(p.m, {
                                                        text: er.intl.string(er.t.VkKicb),
                                                        children: (0, n.jsx)(j.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tg.P,
                                                            onClick: () => C(null),
                                                            "aria-label": er.intl.string(er.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        A &&
                            (0, n.jsx)("div", {
                                className: tN.dS,
                                children: (0, n.jsx)(X.Q, {
                                    size: "sm",
                                    text: er.intl.string(er.t.VkKicb),
                                    onClick: k,
                                }),
                            }),
                    ],
                }),
            ],
        }),
    });
}
var tP = l(91871),
    tE = l.n(tP),
    tL = l(190199),
    tI = l(914427),
    tS = l(724141);
function tM(e) {
    let {
            triggerLabel: t,
            options: l,
            selectedKeys: a,
            onToggle: s,
            multiSelect: r,
            searchPlaceholder: o,
            emptyStateText: c,
        } = e,
        u = i.useRef(null),
        d = i.useMemo(() => new Set(a), [a]),
        m = i.useCallback(
            (e) => {
                let t;
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => tE()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, n.jsxs)(
                            tL.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, n.jsx)("span", { className: tS.H, children: e.icon }),
                                    (0, n.jsx)(tL.x4.Label, { children: e.label }),
                                    r ? (0, n.jsx)(tL.x4.Checkbox, {}) : (0, n.jsx)(tL.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        h = a.size > 0 ? `${t} (${a.size})` : t;
    return (0, n.jsx)(ti.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: u,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(tI.p, {
                "aria-label": t,
                placeholder: o,
                value: d,
                multiSelect: r,
                onChange: s,
                onClose: l,
                emptyStateText: c ?? er.intl.string(er.t.QwSXv8),
                maxVisibleItems: 6,
                children: m,
            });
        },
        children: (e) =>
            (0, n.jsx)(ev.$, {
                ...e,
                buttonRef: u,
                size: "sm",
                variant: "secondary",
                text: h,
                icon: ta.a,
                iconPosition: "end",
            }),
    });
}
var tD = l(187671);
function tT(e) {
    let { label: t, icon: l, onRemove: i, removeAriaLabel: a } = e;
    return (0, n.jsxs)("div", {
        className: tD.Io,
        children: [
            null != l && (0, n.jsx)("span", { className: tD.Kk, children: l }),
            (0, n.jsx)(G.E, {
                className: tD.Pf,
                variant: "text-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, n.jsx)(tx.D, {
                className: tD.DT,
                onClick: i,
                "aria-label": a ?? er.intl.string(er.t.N86XcP),
                children: (0, n.jsx)(tg.P, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var t_ = l(401756);
let tR = { all: es.default.lscwjQ, auto: es.default.xrOIkz, manual: es.default.D7HSLJ };
function tF() {
    let e = (0, e8.P)((e) => e.dateFilter),
        t = i.useRef(null),
        l = null != e ? tA(e) : er.intl.string(es.default.upqksT);
    return (0, n.jsx)(ti.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(tw, { closePopout: t });
        },
        children: (e) =>
            (0, n.jsx)(ev.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: ta.a,
                iconPosition: "end",
            }),
    });
}
function tH() {
    let e = (0, e8.P)((e) => e.sortOrder),
        t = (0, e8.P)((e) => e.setSortOrder),
        l = i.useRef(null),
        a = e === O.mu.OLDEST ? er.intl.string(er.t["0gitSE"]) : er.intl.string(er.t["4LLKx3"]);
    return (0, n.jsx)(ti.Y, {
        position: "bottom",
        align: "right",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: i } = l;
            return (0, n.jsx)(ts.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": er.intl.string(er.t.XvNMNk),
                onClose: i,
                onSelect: void 0,
                children: (0, n.jsxs)(tr.rX, {
                    children: [
                        (0, n.jsx)(tr.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: er.intl.string(er.t["4LLKx3"]),
                            action: () => {
                                (t(O.mu.MOST_RECENT), i());
                            },
                            checked: e === O.mu.MOST_RECENT,
                        }),
                        (0, n.jsx)(tr.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: er.intl.string(er.t["0gitSE"]),
                            action: () => {
                                (t(O.mu.OLDEST), i());
                            },
                            checked: e === O.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, n.jsx)(ev.$, { ...e, buttonRef: l, size: "sm", variant: "secondary", text: a, icon: to.J }),
    });
}
function tz() {
    let e = (0, e8.P)((e) => e.clipMethodFilter),
        t = (0, e8.P)((e) => e.setClipMethodFilter),
        l = i.useRef(null);
    return (0, n.jsx)(ti.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: i } = l;
            return (0, n.jsx)(ts.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": er.intl.string(es.default["kIqbb/"]),
                onClose: i,
                onSelect: void 0,
                children: (0, n.jsxs)(tr.rX, {
                    children: [
                        (0, n.jsx)(tr.iD, {
                            id: "method-all",
                            group: "method",
                            label: er.intl.string(es.default.lscwjQ),
                            action: () => {
                                (t("all"), i());
                            },
                            checked: "all" === e,
                        }),
                        (0, n.jsx)(tr.iD, {
                            id: "method-auto",
                            group: "method",
                            label: er.intl.string(es.default.xrOIkz),
                            action: () => {
                                (t("auto"), i());
                            },
                            checked: "auto" === e,
                        }),
                        (0, n.jsx)(tr.iD, {
                            id: "method-manual",
                            group: "method",
                            label: er.intl.string(es.default.D7HSLJ),
                            action: () => {
                                (t("manual"), i());
                            },
                            checked: "manual" === e,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, n.jsx)(ev.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: er.intl.string(es.default["kIqbb/"]),
                icon: ta.a,
                iconPosition: "end",
            }),
    });
}
function tO(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: a } = e,
        s = (0, e8.P)((e) => e.query),
        r = (0, e8.P)((e) => e.setQuery),
        o = (0, e8.P)((e) => e.pendingSearchFocus),
        c = (0, e8.P)((e) => e.setPendingSearchFocus),
        u = i.useRef(null),
        d = (0, e8.P)((e) => e.activeMainLink),
        m = (0, e8.P)((e) => e.clipMethodFilter),
        h = (0, e8.P)((e) => e.setClipMethodFilter),
        f = (0, e8.P)((e) => e.gameFacet),
        p = (0, e8.P)((e) => e.clippedWithFacet),
        j = (0, e8.P)((e) => e.selectedGameIds),
        v = (0, e8.P)((e) => e.selectedUserIds),
        y = (0, e8.P)((e) => e.selectedGuildId),
        b = (0, e8.P)((e) => e.selectedActivity),
        C = (0, e8.P)((e) => e.dateFilter),
        k = (0, e8.P)((e) => e.toggleGameId),
        A = (0, e8.P)((e) => e.toggleUserId),
        N = (0, e8.P)((e) => e.setSelectedGuildId),
        E = (0, e8.P)((e) => e.setSelectedActivity),
        L = (0, e8.P)((e) => e.setDateFilter),
        S = (0, e8.P)((e) => e.clearFilters);
    i.useEffect(() => {
        o && (u.current?.focus(), c(!1));
    }, [o, c]);
    let M = i.useRef(null);
    i.useEffect(() => {
        let e = {
            type_filter: "all" !== m ? m : "",
            game_filter_application_ids: null != f ? [f] : Array.from(j),
            date_filter_range: null != C ? C.preset.replace(/-/g, "_") : "",
            filtered_by_server: null != y,
            filtered_by_participants: null != p || v.size > 0,
            filtered_by_favorites: d === O.oH.FAVORITES,
            filtered_by_activity: null != b,
        };
        if (
            !(
                "" !== e.type_filter ||
                e.game_filter_application_ids.length > 0 ||
                "" !== e.date_filter_range ||
                e.filtered_by_server ||
                e.filtered_by_participants ||
                e.filtered_by_favorites ||
                e.filtered_by_activity
            )
        ) {
            M.current = null;
            return;
        }
        let t = JSON.stringify(e);
        t !== M.current && ((M.current = t), eI.default.track(ea.HAw.CLIPS_FILTER_CHANGED, e));
    }, [m, f, j, C, y, p, v, d, b]);
    let D = i.useMemo(() => l.map((e) => e.key), [l]),
        T = (0, w.A)(D),
        _ = i.useMemo(() => new Map(T.map((e) => [e?.id, e])), [T]),
        R = i.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, n.jsx)(P.A, { game: _.get(e.key), size: P.M.XSMALL }),
                })),
            [l, _],
        ),
        F = i.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = eE.A.getGuild(e);
                        null != t && l.push({ key: e, label: t.name, guild: t });
                    }
                    return (l.sort((e, t) => e.label.toLowerCase().localeCompare(t.label.toLowerCase())), l);
                })(t),
            [t],
        ),
        H = i.useMemo(
            () =>
                F.map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, n.jsx)(tu.Ay, { guild: e.guild, size: tu.Ay.Sizes.MINI }),
                })),
            [F],
        ),
        z = i.useMemo(() => new Map(F.map((e) => [e.key, e.guild])), [F]),
        U = i.useMemo(
            () =>
                null == f
                    ? []
                    : (function (e) {
                          let t = new Set();
                          for (let l of e)
                              (l.activity?.state != null && "" !== l.activity.state && t.add(l.activity.state),
                                  l.activity?.details != null &&
                                      "" !== l.activity.details &&
                                      t.add(l.activity.details));
                          return Array.from(t).sort((e, t) => e.toLowerCase().localeCompare(t.toLowerCase()));
                      })(t.filter((e) => e.applicationId === f)).map((e) => ({ key: e, label: e })),
            [t, f],
        ),
        G = i.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    for (let l of e) {
                        let e = I.default.getUser(l.key);
                        null != e &&
                            t.push({
                                key: l.key,
                                label: e.globalName ?? e.username,
                                avatarUrl: e.getAvatarURL(null, 32),
                            });
                    }
                    return (t.sort((e, t) => e.label.toLowerCase().localeCompare(t.label.toLowerCase())), t);
                })(a).map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, n.jsx)(x.eu, { src: e.avatarUrl, size: g._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [a],
        ),
        K = i.useMemo(() => (null != y ? new Set([y]) : new Set()), [y]),
        V = i.useMemo(() => (null != b ? new Set([b]) : new Set()), [b]),
        $ = i.useCallback(
            (e) => {
                N(y === e ? null : e);
            },
            [y, N],
        ),
        q = i.useCallback(
            (e) => {
                E(b === e ? null : e);
            },
            [b, E],
        ),
        B = null == f,
        Q = null == p,
        Y = (0, td.HN)() && d !== O.oH.AUTO_CLIPS,
        W = er.intl.string(tR[m]),
        Z = (0, n.jsxs)(n.Fragment, {
            children: [
                B &&
                    Array.from(j).map((e) => {
                        let t = R.find((t) => t.key === e);
                        return (0, n.jsx)(
                            tT,
                            {
                                label: t?.label ?? e,
                                icon: (0, n.jsx)(P.A, { game: _.get(e), size: P.M.XSMALL }),
                                onRemove: () => k(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != C && (0, n.jsx)(tT, { label: tA(C), onRemove: () => L(null) }, "date"),
                null != y &&
                    (0, n.jsx)(
                        tT,
                        {
                            label: H.find((e) => e.key === y)?.label ?? y,
                            icon:
                                null != z.get(y)
                                    ? (0, n.jsx)(tu.Ay, { guild: z.get(y), size: tu.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => N(null),
                        },
                        "guild",
                    ),
                Q && Array.from(v).map((e) => (0, n.jsx)(tU, { userId: e, onRemove: () => A(e) }, `user-${e}`)),
                null != b && (0, n.jsx)(tT, { label: b, onRemove: () => E(null) }, "activity"),
                Y && "all" !== m && (0, n.jsx)(tT, { label: W, onRemove: () => h("all") }, "method"),
            ],
        }),
        J = (B && j.size > 0) || null != C || null != y || (Q && v.size > 0) || null != b || (Y && "all" !== m);
    return (0, n.jsxs)("div", {
        className: t_.kT,
        children: [
            (0, n.jsxs)("div", {
                className: t_.HL,
                children: [
                    (0, n.jsx)("div", {
                        className: t_.MT,
                        children: (0, n.jsx)(tc.I, {
                            ref: u,
                            placeholder: er.intl.string(er.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: t_.Zq,
                        children: [
                            Y && (0, n.jsx)(tz, {}),
                            B &&
                                R.length > 0 &&
                                (0, n.jsx)(tM, {
                                    triggerLabel: er.intl.string(er.t.URyqtP),
                                    options: R,
                                    selectedKeys: j,
                                    onToggle: k,
                                    multiSelect: !0,
                                    searchPlaceholder: er.intl.string(er.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(tF, {}),
                            H.length > 0 &&
                                (0, n.jsx)(tM, {
                                    triggerLabel: er.intl.string(er.t["5qyruI"]),
                                    options: H,
                                    selectedKeys: K,
                                    onToggle: $,
                                    multiSelect: !1,
                                    searchPlaceholder: er.intl.string(er.t["5h0QOP"]),
                                }),
                            Q &&
                                G.length > 0 &&
                                (0, n.jsx)(tM, {
                                    triggerLabel: er.intl.string(er.t.YQ6dJg),
                                    options: G,
                                    selectedKeys: v,
                                    onToggle: (e) => A(e),
                                    multiSelect: !0,
                                    searchPlaceholder: er.intl.string(er.t["5h0QOP"]),
                                }),
                            U.length > 0 &&
                                (0, n.jsx)(tM, {
                                    triggerLabel: er.intl.string(er.t.agRtPG),
                                    options: U,
                                    selectedKeys: V,
                                    onToggle: q,
                                    multiSelect: !1,
                                    searchPlaceholder: er.intl.string(er.t["5h0QOP"]),
                                }),
                        ],
                    }),
                    (0, n.jsx)("div", { className: t_.QZ, children: (0, n.jsx)(tH, {}) }),
                ],
            }),
            J &&
                (0, n.jsxs)("div", {
                    className: t_.eH,
                    children: [
                        Z,
                        (0, n.jsx)(X.Q, {
                            size: "sm",
                            variant: "primary",
                            text: er.intl.string(er.t.O8k7O4),
                            onClick: S,
                        }),
                    ],
                }),
        ],
    });
}
function tU(e) {
    let { userId: t, onRemove: l } = e,
        i = (0, u.bG)([I.default], () => I.default.getUser(t), [t]);
    if (null == i) return null;
    let a = i.globalName ?? i.username;
    return (0, n.jsx)(tT, {
        label: a,
        icon: (0, n.jsx)(x.eu, { src: i.getAvatarURL(null, 32), size: g._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
var tG = l(364522);
let tK = (0, l(945810).mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var tV = l(505124),
    t$ = l(43990),
    tq = l(175841),
    tB = l(449543),
    tQ = l(152858);
function tY(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var tW = l(329924);
function tX(e) {
    let { clips: t, onEdit: l, onEdgeNavigate: a } = e,
        r = i.useMemo(() => tY(t), [t]),
        { backgroundComponent: o, handleHoverChange: c } = (function () {
            let [e, t] = i.useState({ previousThumbnail: null, thumbnail: null }),
                l = i.useRef(null);
            i.useEffect(
                () => () => {
                    null != l.current && window.clearTimeout(l.current);
                },
                [],
            );
            let a = i.useCallback((e) => {
                (null != l.current && (window.clearTimeout(l.current), (l.current = null)),
                    null != e
                        ? t((t) => {
                              if (t.thumbnail === e) return t;
                              let l = t.thumbnail ?? t.previousThumbnail;
                              return { previousThumbnail: l !== e ? l : null, thumbnail: e };
                          })
                        : (l.current = window.setTimeout(() => {
                              (t((e) => ({ previousThumbnail: e.thumbnail ?? e.previousThumbnail, thumbnail: null })),
                                  (l.current = null));
                          }, 2e3)));
            }, []);
            return {
                backgroundComponent: (0, n.jsxs)(n.Fragment, {
                    children: [
                        null != e.previousThumbnail &&
                            (0, n.jsx)(
                                "img",
                                { src: e.previousThumbnail, className: tW.Tp, alt: "", "aria-hidden": !0 },
                                e.previousThumbnail,
                            ),
                        null != e.thumbnail &&
                            (0, n.jsx)(
                                "img",
                                { src: e.thumbnail, className: `${tW.Tp} ${tW.h9}`, alt: "", "aria-hidden": !0 },
                                e.thumbnail,
                            ),
                    ],
                }),
                handleHoverChange: a,
            };
        })(),
        u = (0, e8.P)((e) => e.setActiveMainLink),
        d = (0, $.GV)(),
        m = i.useMemo(() => [r.length], [r.length]),
        { getContainerProps: h, getItemProps: x, getRowProps: g } = (0, U.A)({ navId: d, columnCounts: m }),
        { onFocus: p, onKeyDown: j, ...v } = h(),
        y = i.useCallback(
            (e) => {
                if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
                    (e.preventDefault(),
                        e.stopPropagation(),
                        a?.("ArrowUp" === e.key ? "up" : "down", e.currentTarget));
                    return;
                }
                j(e);
            },
            [j, a],
        ),
        b = { ...v, onKeyDown: y };
    return 0 === r.length
        ? null
        : (0, n.jsx)(t$.N, {
              theme: tV.NJ.DARK,
              children: (e) =>
                  (0, n.jsxs)("section", {
                      className: s()(tW.uW, e),
                      "aria-label": er.intl.string(es.default.efLpNC),
                      children: [
                          o,
                          (0, n.jsxs)("div", {
                              className: tW.wx,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: tW.mX,
                                      children: [
                                          (0, n.jsxs)("div", {
                                              className: tW.UP,
                                              children: [
                                                  (0, n.jsx)(tq.SparklesIcon, { size: "refresh_sm", color: "white" }),
                                                  (0, n.jsx)(G.E, {
                                                      variant: "text-md/medium",
                                                      color: "text-overlay-light",
                                                      children: er.intl.string(es.default.I1h8uD),
                                                  }),
                                              ],
                                          }),
                                          (0, n.jsx)(f.D, {
                                              variant: "display-md",
                                              color: "text-overlay-light",
                                              className: tW.DD,
                                              children: er.intl.string(es.default.efLpNC),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsx)("div", {
                                      className: tW.BX,
                                      children: (0, n.jsx)(ev.$, {
                                          variant: "overlay-primary",
                                          size: "sm",
                                          onClick: () => u(O.oH.AUTO_CLIPS),
                                          text: er.intl.string(es.default.gCay1w),
                                      }),
                                  }),
                              ],
                          }),
                          (0, n.jsx)(tB.A, {
                              className: tW.jG,
                              gap: 16,
                              edgeFade: 0,
                              scrollBehavior: tQ.Uf.ITEM,
                              hideActionsWhenDisabled: !0,
                              "aria-label": er.intl.string(es.default.efLpNC),
                              gridContainerProps: b,
                              gridRowProps: g(0),
                              children: r.map((e, t) => {
                                  let i = "" !== e.thumbnail ? e.thumbnail : null;
                                  return (0, n.jsx)(
                                      "div",
                                      {
                                          className: tW.v2,
                                          onMouseEnter: () => c(i),
                                          onMouseLeave: () => c(null),
                                          onFocus: () => c(i),
                                          onBlur: (e) => {
                                              (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) ||
                                                  c(null);
                                          },
                                          children: (0, n.jsx)(eX, {
                                              clip: e,
                                              actionsDisabled: !1,
                                              isNew: !1,
                                              onEdit: l,
                                              onClick: l,
                                              gridItemProps: x(t, 0),
                                          }),
                                      },
                                      e.id,
                                  );
                              }),
                          }),
                      ],
                  }),
          });
}
var tZ = l(770178),
    tJ = l(765548),
    t0 = l(202163),
    t1 = l(68408);
function t2(e) {
    let {
            session: t,
            recentClipIds: l,
            actionsDisabled: a,
            onEdit: r,
            onClipClick: o,
            animateEntrance: c,
            entranceRowOffset: d,
            onEdgeNavigate: m,
        } = e,
        { gameRecord: h } = (0, t0.A)(t.applicationId),
        x = (0, e8.P)((e) => e.setGameFacet),
        p = (0, e8.P)((e) => e.setActiveMainLink),
        j = t.applicationId,
        v = null != j && "" !== j,
        y = i.useCallback(() => {
            null != j && "" !== j && (x(j), p(O.oH.ALL_CLIPS));
        }, [j, x, p]),
        b = i.useCallback(() => {
            v ? y() : p(O.oH.ALL_CLIPS);
        }, [v, y, p]),
        C = i.useMemo(() => (null == h ? null : (h.getBannerURL(1024) ?? h.screenshotUrls?.[0] ?? null)), [h]),
        k = (0, u.yK)([I.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => I.default.getUser(e)).filter(eS.Vq);
        }),
        A = (0, ew.e)({ timestamp: t.startedAt }),
        [N, w] = i.useState(800),
        E = (0, tJ.A)((e) => {
            w(e.target.clientWidth);
        }),
        L = (0, tZ.w)(E),
        S = Math.max(1, (N - 32) / 3),
        M = i.useMemo(() => {
            let e = t.clips.slice(0, 6),
                l = [];
            for (let t = 0; t < e.length; t += 3) l.push(e.slice(t, t + 3));
            return l;
        }, [t.clips]),
        D = t.clips.length > 6,
        T = (0, $.GV)(),
        _ = i.useMemo(() => M.map((e) => e.length), [M]),
        { getContainerProps: R, getItemProps: F, getRowProps: H } = (0, U.A)({ navId: T, columnCounts: _ }),
        { onFocus: z, onKeyDown: K, ...V } = R(),
        q = i.useCallback(
            (e) => {
                if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
                    let t = Array.from(e.currentTarget.querySelectorAll('[role="row"]')),
                        l = t.findIndex((t) => t.contains(e.target)),
                        n =
                            -1 !== l && "ArrowUp" === e.key && 0 === l
                                ? "up"
                                : -1 !== l && "ArrowDown" === e.key && l === t.length - 1
                                  ? "down"
                                  : null;
                    if (null != n) {
                        (e.preventDefault(), e.stopPropagation(), m(n, e.currentTarget));
                        return;
                    }
                }
                K(e);
            },
            [K, m],
        );
    return (0, n.jsxs)("section", {
        className: t1.dZ,
        children: [
            (0, n.jsx)("div", {
                className: s()(t1.tB, null == C && t1.rD),
                style: null != C ? { backgroundImage: `url(${C})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, n.jsxs)("div", {
                className: t1.wx,
                children: [
                    v
                        ? (0, n.jsx)(ef.s, {
                              "aria-label": t.applicationName,
                              onClick: y,
                              className: t1.Zn,
                              children: (0, n.jsx)(P.A, {
                                  className: t1.Gt,
                                  game: h,
                                  size: P.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, n.jsx)(P.A, { className: t1.Gt, game: h, size: P.M.MEDIUM, "aria-hidden": !0 }),
                    (0, n.jsxs)("div", {
                        className: t1.TK,
                        children: [
                            v
                                ? (0, n.jsx)(ef.s, {
                                      "aria-label": t.applicationName,
                                      onClick: y,
                                      className: t1.wb,
                                      children: (0, n.jsx)(f.D, {
                                          variant: "text-md/semibold",
                                          color: "text-default",
                                          className: t1.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, n.jsx)(f.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      className: t1.mO,
                                      children: t.applicationName,
                                  }),
                            (0, n.jsxs)("div", {
                                className: t1.mI,
                                children: [
                                    (0, n.jsx)(G.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: er.intl.format(es.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    (0, n.jsx)("span", { className: t1.TG, "aria-hidden": "true" }),
                                    (0, n.jsx)(G.E, { variant: "text-xs/normal", color: "text-muted", children: A }),
                                    k.length > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: t1.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(eg.A, { users: k, maxUsers: 5, size: g._3.SIZE_16 }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)("div", {
                ref: L,
                className: t1.Vg,
                ...V,
                tabIndex: -1,
                onKeyDown: q,
                children: M.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: t1.UX,
                            ...H(t),
                            children: e.map((e, i) => {
                                let s = { width: S };
                                return (
                                    c && (s["--custom-entrance-delay"] = `${e6(d + t + i)}ms`),
                                    (0, n.jsx)(
                                        "div",
                                        {
                                            className: c ? te.$ : void 0,
                                            style: s,
                                            children: (0, n.jsx)(eX, {
                                                clip: e,
                                                actionsDisabled: a,
                                                isNew: l.includes(e.id),
                                                onClick: o ?? r,
                                                onEdit: r,
                                                gridItemProps: F(i, t),
                                            }),
                                        },
                                        e.id,
                                    )
                                );
                            }),
                        },
                        `row-${t}`,
                    ),
                ),
            }),
            D &&
                (0, n.jsx)("div", {
                    className: t1.Vc,
                    children: (0, n.jsx)(ev.$, {
                        variant: "secondary",
                        size: "sm",
                        text: er.intl.string(es.default.pqk9U0),
                        onClick: b,
                    }),
                }),
        ],
    });
}
var t3 = l(799888);
function t5(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: a, onClipClick: s, isLoading: r } = e,
        { enableAutoClipsReview: o } = tK.useConfig({ location: "ClipsGalleryHome" }),
        c = i.useMemo(() => tY(t), [t]),
        d = o && c.length > 0,
        m = (0, u.yK)([M.Ay], () => M.Ay.getNewClipIds()),
        h = (0, u.bG)([M.Ay], () => M.Ay.getExportingClipIds().size > 0),
        x = (0, e8.P)((e) => e.setActiveMainLink),
        g = i.useCallback(() => {
            x(O.oH.ALL_CLIPS);
        }, [x]),
        p = i.useMemo(() => {
            let e = d ? new Set(c.map((e) => e.id)) : null;
            return (function (e) {
                let t = [...e].sort((e, t) => t.createdAt - e.createdAt),
                    l = [],
                    n = null;
                for (let e of t) {
                    let t = n?.clips[n.clips.length - 1],
                        i = null != n && n.applicationId === e.applicationId,
                        a = null != t && t.createdAt - e.createdAt <= 144e5;
                    null != n && i && a
                        ? n.clips.push(e)
                        : ((n = {
                              id: e.id,
                              applicationId: e.applicationId,
                              applicationName: e.applicationName,
                              startedAt: e.createdAt,
                              clips: [e],
                          }),
                          l.push(n));
                }
                return l;
            })(null == e ? t : t.filter((t) => !e.has(t.id))).slice(0, 3);
        }, [t, d, c]),
        j = (0, u.bG)([C.Ay], () => C.Ay.useReducedMotion),
        v = i.useMemo(() => {
            let e = [],
                t = 0;
            for (let l of p) (e.push(t), (t += Math.min(2, Math.ceil(l.clips.length / 3))));
            return e;
        }, [p]),
        y = i.useRef(null),
        b = i.useCallback((e, t) => {
            let l = y.current;
            if (null == l) return;
            let n = Array.from(l.querySelectorAll('[role="grid"]')),
                i = n.indexOf(t);
            if (-1 === i) return;
            let a = n["down" === e ? i + 1 : i - 1];
            if (null == a) return;
            let s = Array.from(a.querySelectorAll('[role="button"]')).filter((e) => /-\d+-\d+$/.test(e.id)),
                r = "down" === e ? s[0] : s[s.length - 1];
            r?.focus();
        }, []);
    return p.length > 0 || d
        ? (0, n.jsx)(tG.Ip, {
              className: t3.iR,
              fade: !0,
              children: (0, n.jsxs)("div", {
                  className: t3.Qs,
                  ref: y,
                  children: [
                      d &&
                          (0, n.jsx)("div", {
                              className: t3.Dk,
                              children: (0, n.jsx)(tX, { clips: t, onEdit: a, onEdgeNavigate: b }),
                          }),
                      p.length > 0 &&
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(f.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-default",
                                      children: er.intl.string(es.default.zfTWDE),
                                  }),
                                  p.map((e, t) =>
                                      (0, n.jsx)(
                                          t2,
                                          {
                                              session: e,
                                              recentClipIds: m,
                                              actionsDisabled: h,
                                              onEdit: a,
                                              onClipClick: s,
                                              animateEntrance: !j,
                                              entranceRowOffset: v[t] ?? 0,
                                              onEdgeNavigate: b,
                                          },
                                          e.id,
                                      ),
                                  ),
                                  (0, n.jsx)("div", {
                                      className: t3.dp,
                                      children: (0, n.jsx)(ev.$, {
                                          variant: "primary",
                                          text: er.intl.string(es.default.RQtkop),
                                          onClick: g,
                                      }),
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : r
          ? (0, n.jsx)("div", { className: t3.dc, children: (0, n.jsx)(K.y, {}) })
          : (0, n.jsx)(ed, { isEmptyBecauseQuery: l > 0 });
}
var t7 = l(7689),
    t9 = l(625903),
    t8 = l(332837),
    t6 = l(176781),
    t4 = l(650684),
    le = l(812993),
    lt = l(375106);
function ll(e) {
    let { icon: t, label: l, trailer: i, isSelected: a, isDisabled: r = !1, onClick: o } = e,
        c = r && !a;
    return (0, n.jsxs)(tx.D, {
        onClick: c ? void 0 : o,
        className: s()(lt.nM, { [lt.CZ]: a, [lt.lr]: c }),
        "aria-pressed": a,
        "aria-disabled": c,
        children: [
            (0, n.jsx)("span", { className: lt.aL, children: t }),
            (0, n.jsx)(G.E, {
                variant: "text-md/medium",
                color: "currentColor",
                className: lt.xZ,
                lineClamp: 1,
                children: l,
            }),
            null != i && (0, n.jsx)("span", { className: lt.iP, children: i }),
        ],
    });
}
function ln() {
    let e = (0, u.bG)([et.Ay], () => et.Ay.getKeybindForAction(ea.hCu.SAVE_CLIP)),
        t = (0, e8.P)((e) => e.setActiveMainLink),
        l = (0, e8.P)((e) => e.setGameFacet),
        a = (0, e8.P)((e) => e.setClippedWithFacet),
        s = (0, e8.P)((e) => e.setPendingSearchFocus),
        r = i.useCallback(() => {
            (0, ee.openUserSettings)(J.X.CLIPS_PANEL);
        }, []),
        o = i.useCallback(() => {
            (l(null), a(null), t(O.oH.ALL_CLIPS), s(!0));
        }, [l, a, t, s]),
        c = null != e ? el.dI(e.shortcut, !0) : null;
    return (0, n.jsxs)("div", {
        className: lt.aN,
        children: [
            (0, n.jsxs)("div", {
                className: lt.pR,
                children: [
                    (0, n.jsx)(f.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: er.intl.string(er.t.z2jK6X),
                    }),
                    null != c && (0, n.jsx)(W.e, { shortcut: c }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: lt.XL,
                children: [
                    (0, n.jsx)(p.m, {
                        text: er.intl.string(er.t["5h0QOP"]),
                        children: (0, n.jsx)(j.K, {
                            onClick: o,
                            icon: t7.MagnifyingGlassIcon,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": er.intl.string(er.t["5h0QOP"]),
                        }),
                    }),
                    (0, n.jsx)(p.m, {
                        text: er.intl.string(er.t["3D5yo/"]),
                        children: (0, n.jsx)(j.K, {
                            onClick: r,
                            icon: t9.SettingsIcon,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": er.intl.string(er.t["3D5yo/"]),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function li(e) {
    let t,
        l,
        a,
        s,
        { mainLinkCounts: r, mainLinkNewCounts: o } = e,
        c = (0, e8.P)((e) => e.activeMainLink),
        u =
            ((t = (0, e8.P)((e) => e.setActiveMainLink)),
            (l = (0, e8.P)((e) => e.setGameFacet)),
            (a = (0, e8.P)((e) => e.setClippedWithFacet)),
            (s = (0, e8.P)((e) => e.clearFilters)),
            i.useCallback(
                (e) => {
                    (t(e), l(null), a(null), s());
                },
                [t, l, a, s],
            )),
        d = (0, e8.P)((e) => e.gameFacet),
        m = (0, e8.P)((e) => e.clippedWithFacet),
        h = (0, td.HN)(),
        x = null != d || null != m;
    function g(e) {
        return !x && c === e;
    }
    return (0, n.jsxs)("div", {
        className: lt.uW,
        children: [
            (0, n.jsx)(ll, {
                icon: (0, n.jsx)(t8.HomeIcon, { size: "sm", color: "currentColor" }),
                label: er.intl.string(er.t.Ym2Ri6),
                isSelected: g(O.oH.HOME),
                onClick: () => u(O.oH.HOME),
            }),
            (0, n.jsx)(ll, {
                icon: (0, n.jsx)(t6.x, { size: "sm", color: "currentColor" }),
                label: er.intl.string(er.t.dPVrEv),
                trailer: (0, n.jsx)(la, { count: o.allClips }),
                isSelected: g(O.oH.ALL_CLIPS),
                isDisabled: 0 === r.allClips && !g(O.oH.ALL_CLIPS),
                onClick: () => u(O.oH.ALL_CLIPS),
            }),
            h &&
                (0, n.jsx)(ll, {
                    icon: (0, n.jsx)(t4.e, { size: "sm", color: "currentColor" }),
                    label: er.intl.string(es.default.ikNKf1),
                    trailer: (0, n.jsx)(la, { count: o.autoClips }),
                    isSelected: g(O.oH.AUTO_CLIPS),
                    isDisabled: 0 === r.autoClips && !g(O.oH.AUTO_CLIPS),
                    onClick: () => u(O.oH.AUTO_CLIPS),
                }),
            (0, n.jsx)(ll, {
                icon: (0, n.jsx)(ej.StarIcon, { size: "sm", color: "currentColor" }),
                label: er.intl.string(er.t["9rlCk1"]),
                trailer: (0, n.jsx)(la, { count: o.favorites }),
                isSelected: g(O.oH.FAVORITES),
                isDisabled: 0 === r.favorites && !g(O.oH.FAVORITES),
                onClick: () => u(O.oH.FAVORITES),
            }),
        ],
    });
}
function la(e) {
    let { count: t } = e;
    return t <= 0 ? null : (0, n.jsx)(le.hV, { count: t });
}
function ls(e) {
    let t,
        l,
        a,
        r,
        { gamesFacet: o } = e,
        c = (0, e8.P)((e) => e.gameFacet),
        u =
            ((t = (0, e8.P)((e) => e.setGameFacet)),
            (l = (0, e8.P)((e) => e.setClippedWithFacet)),
            (a = (0, e8.P)((e) => e.setActiveMainLink)),
            (r = (0, e8.P)((e) => e.clearFilters)),
            i.useCallback(
                (e, n) => {
                    null == n
                        ? "game" === e
                            ? t(null)
                            : l(null)
                        : ("game" === e ? t(n) : l(n), "game" === e ? l(null) : t(null), a(O.oH.ALL_CLIPS), r());
                },
                [t, l, a, r],
            )),
        d = i.useMemo(() => o.map((e) => e.key), [o]),
        m = (0, w.A)(d),
        h = i.useMemo(() => new Map(m.map((e) => [e?.id, e])), [m]);
    return 0 === o.length
        ? null
        : (0, n.jsxs)(tG.Ip, {
              className: s()(lt.uW, lt.fC),
              fade: !0,
              children: [
                  (0, n.jsx)(f.D, {
                      variant: "heading-sm/medium",
                      color: "text-muted",
                      className: lt.a9,
                      children: er.intl.string(er.t.URyqtP),
                  }),
                  (0, n.jsx)("div", {
                      className: lt._A,
                      children: o.map((e) =>
                          (0, n.jsx)(
                              ll,
                              {
                                  icon: (0, n.jsx)(P.A, { game: h.get(e.key), size: P.M.XSMALL, className: lt.Gt }),
                                  label: e.name,
                                  trailer: (0, n.jsx)(la, { count: e.newCount }),
                                  isSelected: c === e.key,
                                  isDisabled: e.isDisabled,
                                  onClick: () => u("game", c === e.key ? null : e.key),
                              },
                              e.key,
                          ),
                      ),
                  }),
              ],
          });
}
function lr(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: a } = e,
        s = (0, e8.P)((e) => e.setPendingContentFocus),
        r = i.useRef(null),
        o = i.useCallback(
            (e) => {
                let t = r.current;
                if (null == t) return;
                let l = e.target,
                    n = Array.from(t.querySelectorAll('[role="button"]')),
                    i = n.indexOf(l);
                if (-1 !== i) {
                    if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                        (e.preventDefault(), e.stopPropagation());
                        let t = Math.min(n.length - 1, Math.max(0, i + ("ArrowDown" === e.key ? 1 : -1)));
                        n[t]?.focus();
                        return;
                    }
                    ("Enter" === e.key || " " === e.key) && "true" !== l.getAttribute("aria-disabled") && s(!0);
                }
            },
            [s],
        );
    return (0, n.jsxs)("div", {
        className: lt.pz,
        children: [
            (0, n.jsx)(ln, {}),
            (0, n.jsxs)("div", {
                className: lt.wp,
                ref: r,
                onKeyDown: o,
                children: [
                    (0, n.jsx)(li, { mainLinkCounts: l, mainLinkNewCounts: a }),
                    (0, n.jsx)(ls, { gamesFacet: t }),
                ],
            }),
        ],
    });
}
var lo = l(409067),
    lc = l(314484);
function lu(e) {
    let {
        channelId: t,
        onClose: a,
        onClipClick: U,
        transitionState: G,
        initialEditingClipId: K,
        initialMainLink: V = O.oH.HOME,
        ...$
    } = e;
    (0, z.A)();
    let { analyticsLocations: q } = (0, A.Ay)(k.A.CLIPS_GALLERY),
        [B, Q] = i.useState(new Set()),
        {
            gamesFacet: Y,
            participantsFacet: W,
            distributedClipInitiatorsFacet: X,
            filteredClips: Z,
            mainLinkCounts: J,
            mainLinkNewCounts: ee,
            allClips: et,
        } = (0, lo.ad)(),
        el = (0, u.bG)([M.Ay], () => M.Ay.getSettings().storageLocation),
        [en, ei] = i.useState(!0);
    i.useEffect(() => {
        (async function () {
            ei(!0);
            try {
                await (0, D.Fb)(el);
            } finally {
                ei(!1);
            }
        })().catch(() => {});
    }, [el]);
    let { onShareClick: ea } = (0, H.A)(t);
    (i.useEffect(
        () => () => {
            (e8.P.getState().resetAll(), (0, D.Su)());
        },
        [],
    ),
        i.useEffect(() => {
            let e = e8.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink(V);
        }, [V]),
        (0, o.l0)(() => {
            M.Ay.hasClips() && L.A.isDeveloper && E.Ay.fireSurveyAction(c.w.POPULATED_CLIP_GALLERY_CLOSED);
        }));
    let eo = (0, u.bG)([M.Ay], () => M.Ay.getExportingClipIds().size > 0),
        [ec, eu] = i.useState(null != K ? "editing" : "gallery"),
        [ed, em] = i.useState(K ?? null),
        eh = (0, u.bG)([M.Ay], () => (null != ed ? M.Ay.getClipById(ed) : null), [ed]),
        ex = (0, d.useIsModalAtTop)(eK.nm),
        eg = i.useRef(ec);
    ((eg.current = ec), (i.useRef(ed).current = ed));
    let [ef, ep] = i.useState(null != K ? h.ip.ENTERED : h.ip.HIDDEN),
        ej = i.useRef(null),
        ev = (0, e8.P)((e) => e.gameFacet),
        ey = (0, e8.P)((e) => e.clippedWithFacet),
        eb = (0, e8.P)((e) => e.activeMainLink),
        eC = (0, e8.P)((e) => e.currentPage),
        ek = (0, e8.P)((e) => e.pendingContentFocus),
        eA = (0, e8.P)((e) => e.setPendingContentFocus),
        eN = i.useRef(null);
    i.useEffect(() => {
        if (!ek) return;
        let e = 0,
            t = 0;
        return (
            (t = requestAnimationFrame(function l() {
                let n = eN.current?.querySelector('[role="grid"] [role="button"]');
                if (null != n) {
                    (n.focus(), eA(!1));
                    return;
                }
                if (e++ < 10) {
                    t = requestAnimationFrame(l);
                    return;
                }
                eA(!1);
            })),
            () => cancelAnimationFrame(t)
        );
    }, [ek, eA]);
    let ew = (0, e8.P)(
        (e) =>
            "" !== e.query.trim() ||
            e.selectedGameIds.size > 0 ||
            e.selectedUserIds.size > 0 ||
            null != e.selectedGuildId ||
            null != e.selectedActivity ||
            null != e.dateFilter ||
            "all" !== e.clipMethodFilter,
    );
    i.useEffect(() => {
        eb === O.oH.HOME && ew && e8.P.getState().setActiveMainLink(O.oH.ALL_CLIPS);
    }, [eb, ew]);
    let eP = i.useMemo(() => (null != ev ? [ev] : []), [ev]),
        eE = (0, w.A)(eP)[0] ?? null,
        eL = (0, u.bG)([I.default], () => (null != ey ? I.default.getUser(ey) : null), [ey]),
        eI = i.useMemo(() => {
            if (null != ev) {
                let e = Y.find((e) => e.key === ev)?.name ?? er.intl.string(er.t.dPVrEv);
                return { icon: (0, n.jsx)(P.A, { game: eE, size: P.M.SMALL, "aria-hidden": !0 }), title: e };
            }
            if (null != ey) {
                let e = null != eL ? (eL.globalName ?? eL.username) : ey;
                return {
                    icon:
                        null != eL
                            ? (0, n.jsx)(x.eu, {
                                  src: eL.getAvatarURL(null, 32),
                                  size: g._3.SIZE_24,
                                  "aria-hidden": !0,
                              })
                            : null,
                    title: e,
                };
            }
            return eb === O.oH.FAVORITES
                ? { icon: null, title: er.intl.string(er.t["9rlCk1"]) }
                : eb === O.oH.AUTO_CLIPS
                  ? { icon: null, title: er.intl.string(es.default.ikNKf1) }
                  : eb === O.oH.HOME
                    ? { icon: null, title: er.intl.string(er.t.Ym2Ri6) }
                    : { icon: null, title: er.intl.string(er.t.dPVrEv) };
        }, [ev, ey, eb, Y, eE, eL]),
        eS = i.useCallback(() => {
            (eu("editing"), C.Ay.useReducedMotion && ep(h.ip.ENTERED));
        }, []),
        eM = i.useCallback((e) => {
            Q((t) => {
                let l = new Set(t);
                return (l.has(e) ? l.delete(e) : l.add(e), l);
            });
        }, []),
        eD = i.useCallback(
            (e) => {
                (em(e.id), eS());
            },
            [eS],
        ),
        eT = i.useCallback(() => {
            (C.Ay.useReducedMotion && em(null), eu("gallery"));
        }, []);
    (i.useEffect(() => {
        function e(e) {
            "Escape" === e.key && "editing" === eg.current && ex && (e.stopPropagation(), eT());
        }
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [eT, a, ex]),
        i.useEffect(() => {
            function e(e) {
                if (
                    ("f" !== e.key && "F" !== e.key) ||
                    e.altKey ||
                    e.shiftKey ||
                    ((0, S.isMac)() ? !e.metaKey || e.ctrlKey : !e.ctrlKey || e.metaKey) ||
                    !ex ||
                    "gallery" !== eg.current
                )
                    return;
                (e.preventDefault(), e.stopPropagation());
                let t = e8.P.getState();
                (t.currentPage === O.fB.HOME && t.setActiveMainLink(O.oH.ALL_CLIPS), t.setPendingSearchFocus(!0));
            }
            return (document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0));
        }, [ex]),
        i.useEffect(
            () =>
                "editing" === ec && null != ed
                    ? void (0, D.YK)(ed)
                    : ((0, D.TE)(),
                      () => {
                          (0, D.TE)();
                      }),
            [ec, ed],
        ));
    let e_ = i.useCallback(() => {
            Q(new Set());
        }, []),
        eR = B.size > 0,
        eF = i.useCallback(() => {
            let e = et.filter((e) => B.has(e.id));
            (0, d.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("913367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, n.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                (e_(), l.onClose());
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [et, B, e_]),
        eH = i.useCallback(async () => {
            let e = et.filter((e) => B.has(e.id));
            (await ea({ clips: e }), e_());
        }, [et, B, ea, e_]),
        ez = i.useMemo(() => {
            let e = 0,
                t = 0,
                l = 0;
            return (
                et.forEach((n) => {
                    switch (n.decision?.signal?.type) {
                        case eK.Gy.MANUAL:
                            l++;
                            break;
                        case eK.Gy.DISTRIBUTED:
                            t++;
                            break;
                        case void 0:
                            break;
                        default:
                            e++;
                    }
                }),
                {
                    number_of_clips_loaded: et.length,
                    num_autoclips_loaded: e,
                    num_distributed_clips_loaded: t,
                    num_manual_clips_loaded: l,
                    gallery_page: eb,
                }
            );
        }, [et, eb]);
    (0, N.A)(
        { type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.CLIP_GALLERY_VIEWED, properties: ez },
        { disableTrack: en },
        [ez, en],
    );
    let eO = i.useMemo(
        () => ({
            selectedClipIds: B,
            toggleClipSelection: eM,
            clearSelection: e_,
            isMultiSelectMode: eR,
            onSelectClip: U,
        }),
        [B, eM, e_, eR, U],
    );
    return (0, n.jsx)(A.f5, {
        value: q,
        children: (0, n.jsx)(eY.$.Provider, {
            value: eO,
            children: (0, n.jsx)(m.N, {
                onClose: a,
                transitionState: G,
                ...$,
                children: (0, n.jsxs)("div", {
                    className: lc.jT,
                    ref: ej,
                    children: [
                        (0, n.jsxs)("div", {
                            className: s()(lc.PD, "gallery" === ec && lc.vu),
                            inert: "gallery" !== ec,
                            children: [
                                (0, n.jsx)(lr, {
                                    gamesFacet: Y,
                                    distributedClipInitiatorsFacet: X,
                                    mainLinkCounts: J,
                                    mainLinkNewCounts: ee,
                                }),
                                (0, n.jsxs)("div", {
                                    className: lc.Qs,
                                    ref: eN,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: lc.$Q,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: lc.Rj,
                                                    children: [
                                                        eI.icon,
                                                        (0, n.jsx)(f.D, {
                                                            variant: "heading-md/medium",
                                                            color: "text-default",
                                                            children: eI.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: lc.$s,
                                                    children: [
                                                        eR &&
                                                            (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(p.m, {
                                                                        text: er.intl.string(er.t.RDE0Sc),
                                                                        children: (0, n.jsx)(j.K, {
                                                                            onClick: eH,
                                                                            icon: v.ShareIcon,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": er.intl.string(er.t.RDE0Sc),
                                                                            loading: eo,
                                                                        }),
                                                                    }),
                                                                    (0, n.jsx)(p.m, {
                                                                        text: er.intl.string(er.t.oyYWHE),
                                                                        children: (0, n.jsx)(j.K, {
                                                                            onClick: eF,
                                                                            icon: y.TrashIcon,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": er.intl.string(er.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, n.jsx)(j.K, {
                                                            onClick: a,
                                                            icon: b.XLargeIcon,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": er.intl.string(er.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        eC === O.fB.HOME
                                            ? (0, n.jsx)(t5, {
                                                  filteredClips: Z,
                                                  totalClipCount: et.length,
                                                  onEdit: eD,
                                                  onClipClick: U,
                                                  isLoading: en,
                                              })
                                            : (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(tO, {
                                                          allClips: et,
                                                          gamesFacet: Y,
                                                          participantsFacet: W,
                                                      }),
                                                      (0, n.jsx)(tn, {
                                                          onEdit: eD,
                                                          channelId: t,
                                                          filteredClips: Z,
                                                          totalClipCount: et.length,
                                                          onClipClick: U,
                                                          isLoading: en,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: s()(lc.jN, "editing" === ec && lc.vu),
                            inert: "editing" !== ec,
                            onTransitionEnd: () => {
                                switch (ec) {
                                    case "gallery":
                                        (em(null), ep(h.ip.HIDDEN));
                                        break;
                                    case "editing":
                                        ep(h.ip.ENTERED);
                                }
                            },
                            children:
                                null != eh &&
                                (0, n.jsx)(T.p, {
                                    clip: eh,
                                    modalContainerRef: ej,
                                    children: (0, n.jsxs)(
                                        F.JQ,
                                        {
                                            children: [
                                                (0, n.jsx)(R.A, { transitionState: ef, onClose: eT }),
                                                (0, n.jsx)(_.A, { channelId: t, onClose: eT }),
                                            ],
                                        },
                                        eh.id,
                                    ),
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
