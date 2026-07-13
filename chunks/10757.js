l.d(t, { default: () => lp });
var n = l(627968),
    i = l(64700),
    a = l(503698),
    s = l.n(a),
    r = l(562708),
    o = l(935399),
    c = l(517846),
    u = l(17928),
    d = l(192308),
    m = l(990078),
    h = l(521489),
    x = l(231723),
    g = l(97808),
    f = l(778712),
    p = l(534514),
    j = l(408278),
    v = l(405433),
    y = l(241326),
    b = l(972213),
    C = l(775602),
    A = l(793574),
    k = l(688810),
    N = l(139286),
    w = l(429913),
    P = l(769015),
    E = l(27620),
    L = l(540999),
    S = l(287809),
    D = l(723702),
    M = l(553933),
    I = l(274372),
    T = l(372684),
    _ = l(430795),
    R = l(247181),
    F = l(309777),
    z = l(263356),
    H = l(564490),
    G = l(362081),
    O = l(352527),
    U = l(280483),
    K = l(111994);
l(321073);
var V = l(118057),
    $ = l(834730),
    q = l(289873),
    B = l(962125),
    Q = l(915089);
function Y(e) {
    let { alt: t, ariaLabel: l, ariaHidden: i, role: a, width: s = 288, height: r = 162 } = e;
    return (0, n.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/5cbe59588641e0337b4a5e93e16f0ab02d494b2033f96505d343d31aae29d89c.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var W = l(702841),
    X = l(687966),
    Z = l(661531),
    J = l(475358),
    ee = l(123292),
    et = l(292801),
    el = l(780964),
    en = l(766075),
    ei = l(532624),
    ea = l(350535),
    es = l(572164),
    er = l(953932),
    eo = l(652215),
    ec = l(16590),
    eu = l(375708),
    ed = l(311162);
function em(e) {
    let { header: t, description: l } = e;
    return (0, n.jsxs)("div", {
        className: ed.Nr,
        children: [t, (0, n.jsx)($.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function eh() {
    let e = (0, W.bG)([ei.Ay], () => ei.Ay.getKeybindForAction(eo.hCu.SAVE_CLIP)),
        t = null != e ? ea.dI(e.shortcut, !0) : null;
    return (0, n.jsxs)("div", {
        className: ed.kR,
        children: [
            (0, n.jsx)(em, {
                header: (0, n.jsx)(X._, { size: "refresh_sm", color: Z.A.colors.ICON_DEFAULT }),
                description: eu.intl.string(ec.default["4K56sP"]),
            }),
            (0, n.jsx)(em, {
                header: null != t ? (0, n.jsx)(J.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  eu.intl.format(ec.default.BIwQis, { keybind: t }),
                                  (0, n.jsx)("div", {
                                      className: ed.JH,
                                      children: (0, n.jsx)(ee.Q, {
                                          text: eu.intl.string(ec.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, en.openUserSettings)(el.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : eu.intl.string(ec.default.HOUDUm),
            }),
            (0, n.jsx)(em, {
                header: (0, n.jsx)(et.t, { size: "refresh_sm", color: Z.A.colors.ICON_DEFAULT }),
                description: eu.intl.string(ec.default.DLzdl7),
            }),
        ],
    });
}
function ex(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, es.Et)();
    return (0, n.jsx)("div", {
        className: ed.kL,
        children: (0, n.jsxs)("div", {
            className: ed.Qs,
            children: [
                (0, n.jsx)(Y, { width: 213, height: 135, alt: "" }),
                (0, n.jsx)(p.D, {
                    className: ed.wx,
                    variant: "heading-xl/semibold",
                    children: t ? eu.intl.string(ec.default["+M2iLf"]) : eu.intl.string(ec.default.m2GEpP),
                }),
                t &&
                    (0, n.jsx)($.E, {
                        className: ed.h_,
                        variant: "text-md/medium",
                        children: eu.intl.string(ec.default.xkY5xS),
                    }),
                !l && (0, n.jsx)("div", { className: ed.SO, children: (0, n.jsx)(er.A, {}) }),
                l && !t && (0, n.jsx)(eh, {}),
            ],
        }),
    });
}
let eg = 16 / 9;
var ef = l(621466),
    ep = l(61491),
    ej = l(342952),
    ev = l(890856),
    ey = l(365199),
    eb = l(27232),
    eC = l(821609),
    eA = l(22231),
    ek = l(983851),
    eN = l(31300),
    ew = l(442433),
    eP = l(587895),
    eE = l(47167),
    eL = l(549973),
    eS = l(734057),
    eD = l(71393),
    eM = l(549685),
    eI = l(174459),
    eT = l(403362),
    e_ = l(53677),
    eR = l(609174),
    eF = l(619744),
    ez = l(82716),
    eH = l(585579),
    eG = l(930317),
    eO = l(285072),
    eU = l(284009),
    eK = l.n(eU),
    eV = l(460905),
    e$ = l(713608),
    eq = l(788332);
function eB(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    eK()(l?.type === T.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let i = (0, u.bG)([S.default], () => S.default.getUser(l.remoteTriggerUserId));
    if (null == i) return null;
    let a = i.globalName ?? i.username;
    return (0, n.jsx)(m.m, {
        text: eu.intl.string(ec.default.vTTkFF),
        children: (0, n.jsxs)("div", {
            className: eq.S,
            children: [
                (0, n.jsx)("img", { src: i.getAvatarURL(null, 12, !1), className: eq.$, alt: a }),
                (0, n.jsx)($.E, {
                    color: "text-overlay-light",
                    variant: "text-xs/bold",
                    children: eu.intl.formatToPlainString(ec.default.QJ7i8Z, { username: a }),
                }),
            ],
        }),
    });
}
function eQ(e) {
    let { icon: t, text: l, tooltipText: i } = e;
    return (0, n.jsx)(m.m, {
        text: i,
        children: (0, n.jsxs)("div", {
            className: eq.S,
            children: [
                (0, n.jsx)(t, { size: "xxs", color: "white" }),
                (0, n.jsx)($.E, { color: "text-overlay-light", variant: "text-xs/bold", children: l }),
            ],
        }),
    });
}
function eY(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === T.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case T.Gy.DISTRIBUTED:
            return (0, n.jsx)(eB, { clip: t });
        case T.Gy.LAUGHTER:
            return (0, n.jsx)(eQ, {
                icon: eV.n,
                text: eu.intl.string(ec.default.bTC23D),
                tooltipText: eu.intl.string(ec.default["ry+jxm"]),
            });
        case T.Gy.SHOUTING:
            return (0, n.jsx)(eQ, {
                icon: eV.n,
                text: eu.intl.string(ec.default["3gqpuo"]),
                tooltipText: eu.intl.string(ec.default["ry+jxm"]),
            });
        case T.Gy.GAME_EVENT:
            return (0, n.jsx)(eQ, {
                icon: e$.q,
                text: t.decision.signal.title ?? "",
                tooltipText: eu.intl.string(ec.default["347DBb"]),
            });
        default:
            return null;
    }
}
var eW = l(718812),
    eX = l(721610),
    eZ = l(742007);
function eJ(e) {
    let { clip: t, actionsDisabled: l, isNew: i, onClick: a, onEdit: s, gridItemProps: r } = e;
    return (0, n.jsx)(eR.Cl, {
        clip: t,
        children: (0, n.jsx)(e0, { actionsDisabled: l, isNew: i, onClick: a, onEdit: s, gridItemProps: r }),
    });
}
function e0(e) {
    let { actionsDisabled: t, isNew: a, onClick: r, onEdit: o, gridItemProps: c } = e,
        d = (0, eR.Y_)(),
        { analyticsLocations: m } = (0, k.Ay)(A.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: h, toggleClipSelection: x, isMultiSelectMode: g, onSelectClip: f } = i.useContext(eX.$),
        [p, j] = i.useState(!1),
        [v, y] = i.useState(!1),
        [b, N] = i.useState(!1),
        [w, P] = i.useState(!1),
        [E, L] = i.useState(0),
        S = h.has(d.id),
        D = d.type === T.nQ.SCREENSHOT,
        M = (0, u.bG)([C.Ay], () => C.Ay.keyboardModeEnabled),
        _ = (v || p || (b && M)) && !S,
        R = i.useCallback(() => N(!0), []),
        F = i.useCallback((e) => {
            e.currentTarget.contains(e.relatedTarget) || N(!1);
        }, []);
    i.useEffect(() => {
        if (!_ || D) return;
        let e = window.setTimeout(() => P(!0), 150);
        return () => {
            window.clearTimeout(e), P(!1);
        };
    }, [_, D]);
    let z = i.useRef(null),
        H = i.useCallback(() => {
            z.current?.releaseSource();
        }, []),
        G = i.useCallback((e) => {
            z.current?.seek(e);
        }, []),
        O = i.useCallback(() => j(!1), []),
        U = i.useCallback(
            (e) => {
                j(!0);
                let i =
                    g && h.size > 0
                        ? Array.from(h)
                              .map((e) => I.Ay.getClipById(e))
                              .filter(eT.Vq)
                        : [d];
                (0, ew.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("64379"),
                            l.e("6619"),
                            l.e("93020"),
                            l.e("95429"),
                            l.e("91211"),
                            l.e("20891"),
                            l.e("31279"),
                            l.e("71863"),
                            l.e("38601"),
                            l.e("18489"),
                            l.e("69006"),
                            l.e("18307"),
                            l.e("86456"),
                            l.e("80955"),
                        ]).then(l.bind(l, 80982));
                        return (l) =>
                            (0, n.jsx)(e, {
                                ...l,
                                clips: i,
                                actionsDisabled: t,
                                onSelectClip: null != f ? () => f(d) : void 0,
                                onShare: () => {
                                    eI.default.track(eo.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...e_.lc("ClipsGalleryCard.onShare"),
                                        ...e_.Zy(d),
                                    });
                                },
                                onEdit: () => {
                                    o(d),
                                        eI.default.track(eo.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...e_.lc("ClipsGalleryCard.onEdit"),
                                            ...e_.Zy(d),
                                        });
                                },
                                onBeforeDelete: H,
                                onAfterDelete: () => {
                                    eI.default.track(eo.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...e_.lc("ClipsGalleryCard.onAfterDelete"),
                                        ...e_.Zy(d),
                                    });
                                },
                            });
                    },
                    { onClose: O },
                );
            },
            [d, g, h, t, O, o, H, f],
        ),
        K = i.useCallback(
            (e) => {
                t || (e.preventDefault(), e.stopPropagation(), U(e));
            },
            [t, U],
        ),
        V = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), U(e);
            },
            [U],
        ),
        $ = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    o(d),
                    eI.default.track(eo.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" });
            },
            [o, d],
        ),
        q = i.useCallback(
            (e) => {
                !t &&
                    (!(0, ef.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") &&
                            null == e.target.closest("[data-clips-progress]") &&
                            e.currentTarget.contains(e.target))) &&
                    (e.shiftKey ? (e.preventDefault(), x(d.id)) : g ? x(d.id) : null != r && r(d),
                    eI.default.track(eo.HAw.CLIP_GALLERY_CARD_CLICKED, {
                        ...e_.lc("ClipsGalleryCard.handleClick"),
                        ...e_.Zy(d),
                    }));
            },
            [t, g, x, d, r],
        );
    return (0, n.jsx)(k.f5, {
        value: m,
        children: (0, n.jsx)("div", {
            className: eZ.hl,
            onFocus: R,
            onBlur: F,
            children: (0, n.jsxs)(ev.s, {
                "aria-disabled": t,
                "aria-label": eu.intl.string(D ? eu.t["HO/oXl"] : eu.t.bt75uw),
                onClick: t ? void 0 : q,
                onContextMenu: K,
                buttonProps: null != c ? { role: "button", id: c.id, tabIndex: c.tabIndex } : void 0,
                buttonRef: c?.ref,
                onFocus: c?.onFocus,
                className: s()(eZ.Nr, { [eZ.r9]: t, [eZ.in]: p, [eZ.wH]: S }),
                onMouseEnter: () => y(!0),
                onMouseLeave: () => y(!1),
                children: [
                    (0, n.jsx)("div", {
                        className: eZ.w7,
                        children: (0, n.jsxs)(e1, {
                            ref: z,
                            isPlaying: w,
                            onProgressChange: L,
                            children: [
                                (0, n.jsx)(e2, { isNew: a }),
                                _ && !t ? (0, n.jsx)(e3, { onMenu: V, onBeforeDelete: H }) : (0, n.jsx)(e5, {}),
                                (0, n.jsx)("div", { className: eZ.dH, "aria-hidden": "true" }),
                            ],
                        }),
                    }),
                    (0, n.jsx)(e7, { showHoverState: _, playbackProgress: E, onEdit: $, onSeek: G }),
                ],
            }),
        }),
    });
}
let e1 = i.forwardRef((e, t) => {
    let { isPlaying: l, onProgressChange: i, children: a } = e;
    return (0, n.jsx)(eG.d, {
        ref: t,
        isPlaying: l,
        preload: "none",
        onProgressChange: i,
        children: (0, n.jsx)(eO.h, { isVisible: !0, children: a }),
    });
});
function e2(e) {
    let { isNew: t } = e,
        l = (0, eR.Y_)(),
        i = !0 === l.pending;
    return (0, n.jsxs)("div", {
        className: eZ.zV,
        children: [
            !i &&
                t &&
                (0, n.jsx)("div", {
                    className: eZ.Ad,
                    children: (0, n.jsx)($.E, {
                        variant: "text-xs/bold",
                        color: "text-overlay-light",
                        children: eu.intl.string(eu.t.y2b7CA),
                    }),
                }),
            (0, n.jsx)(eY, { clip: l }),
        ],
    });
}
function e3(e) {
    let { onMenu: t, onBeforeDelete: l } = e;
    return (0, n.jsxs)("div", {
        className: eZ.Mw,
        children: [
            (0, n.jsx)(m.m, {
                text: eu.intl.string(eu.t["UKOtz+"]),
                children: (0, n.jsx)(j.K, {
                    onClick: t,
                    icon: ey.j,
                    "aria-label": eu.intl.string(eu.t["UKOtz+"]),
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, n.jsx)(eF.k, { onBeforeDelete: l }),
            (0, n.jsx)(ez.z, {}),
        ],
    });
}
function e5() {
    let e = (0, eR.Y_)();
    return (0, n.jsxs)("div", {
        className: eZ.E4,
        children: [
            (0, n.jsx)(e9, {}),
            e.isFavorite &&
                (0, n.jsx)("div", {
                    className: s()(eZ.cH, eZ.y8),
                    "aria-label": eu.intl.string(eu.t.k8fFjp),
                    children: (0, n.jsx)(eb.G, { size: "xs", color: "white" }),
                }),
        ],
    });
}
function e9() {
    let e = (0, eR.Y_)(),
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
            return (0, ep.rB)(l);
        }, [e.length, e.editMetadata]);
    return t
        ? null
        : (0, n.jsxs)("div", {
              className: eZ.cH,
              children: [
                  a && (0, n.jsx)(eM.A, { color: "white", width: 14, height: 14 }),
                  (0, n.jsx)($.E, {
                      variant: "text-xs/semibold",
                      color: "text-overlay-light",
                      tabularNumbers: !0,
                      children: l ? eu.intl.string(eu.t["2Fp7OP"]) : s,
                  }),
              ],
          });
}
function e7(e) {
    let { showHoverState: t, playbackProgress: l, onEdit: a, onSeek: r } = e,
        o = (0, eR.Y_)(),
        c = o.type === T.nQ.SCREENSHOT,
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
                e.stopPropagation(),
                    e.preventDefault(),
                    (m.current = !0),
                    e.currentTarget.setPointerCapture(e.pointerId),
                    h(e.clientX);
            },
            [h],
        ),
        g = i.useCallback(
            (e) => {
                m.current && h(e.clientX);
            },
            [h],
        ),
        p = i.useCallback((e) => {
            (m.current = !1),
                e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId);
        }, []),
        j = (0, u.yK)([S.default], () => o.users.map((e) => S.default.getUser(e)).filter(eT.Vq)),
        v = (0, u.bG)([eS.A], () => (null != o.channelId ? eS.A.getChannel(o.channelId) : null)),
        y = (0, u.bG)([eD.A], () => (null != o.guildId ? eD.A.getGuild(o.guildId) : null)),
        b = (0, eE.Ay)(v),
        C = "" === o.applicationName && null != b && "" !== b ? b : o.applicationName,
        A = (0, eL.e)({ timestamp: o.createdAt }),
        k = y?.name;
    return (0, n.jsxs)("div", {
        className: eZ.yu,
        children: [
            (0, n.jsxs)("div", {
                className: eZ.$,
                children: [
                    (0, n.jsx)(e4, {}),
                    j.length > 0 &&
                        (0, n.jsx)("span", {
                            className: eZ.HD,
                            "data-clips-avatars": "true",
                            children: (0, n.jsx)(ej.A, {
                                maxUsers: 3,
                                users: j,
                                size: f._3.SIZE_16,
                                "aria-label": eu.intl.string(eu.t.WTozwe),
                            }),
                        }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: eZ.SO,
                children: [
                    (0, n.jsxs)("div", {
                        className: s()(eZ.Ik, { [eZ.Mq]: t }),
                        "aria-hidden": t,
                        children: [
                            (0, n.jsxs)("div", {
                                className: eZ.Pb,
                                children: [
                                    (0, n.jsx)(e8, {}),
                                    (0, n.jsx)($.E, {
                                        className: eZ.gO,
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: C,
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: eZ.eg,
                                children: [
                                    null != k &&
                                        "" !== k &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)($.E, {
                                                    className: eZ.gO,
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: k,
                                                }),
                                                (0, n.jsx)("span", { className: eZ.TG, "aria-hidden": "true" }),
                                            ],
                                        }),
                                    (0, n.jsx)($.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: eu.intl.format(ec.default["0QCBug"], { time: A }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: s()(eZ.n_, { [eZ.f$]: t }),
                        inert: !t,
                        children: [
                            !c &&
                                (0, n.jsx)("div", {
                                    ref: d,
                                    className: eZ.hr,
                                    onPointerDown: x,
                                    onPointerMove: g,
                                    onPointerUp: p,
                                    "data-clips-progress": "true",
                                    "aria-hidden": "true",
                                    children: (0, n.jsx)("div", {
                                        className: eZ.z5,
                                        children: (0, n.jsx)("div", { className: eZ.TE, style: { width: `${l}%` } }),
                                    }),
                                }),
                            (0, n.jsxs)("div", {
                                className: eZ.E_,
                                children: [
                                    (0, n.jsx)("div", {
                                        className: eZ.lO,
                                        children: (0, n.jsx)(eC.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            icon: eA.R,
                                            text: eu.intl.string(eu.t.bt75uw),
                                            onClick: a,
                                            fullWidth: !0,
                                        }),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: eZ.lO,
                                        children: (0, n.jsx)(eH.E, { variant: "primary" }),
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
function e4() {
    let e = (0, eR.Y_)(),
        t = (0, eW.h)(e),
        l = "" !== t;
    return (0, n.jsx)($.E, {
        className: eZ.DD,
        variant: "text-sm/semibold",
        color: "text-default",
        children: l ? t : e.name,
    });
}
function e8() {
    let e = (0, eR.Y_)(),
        t = (0, u.bG)([eP.A], () => (null != e.applicationId ? eP.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, n.jsx)("div", {
        className: eZ.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, n.jsx)("img", { src: l, alt: "", className: eZ.T_ })
                : e.type === T.nQ.VOICE_CLIP
                  ? (0, n.jsx)(ek.H, { size: "xs", color: "currentColor" })
                  : (0, n.jsx)(eN.k, { size: "xs", color: "currentColor" }),
    });
}
e1.displayName = "CardThumbnail";
var e6 = l(792852);
function te(e) {
    return Math.min(45 * e, 520);
}
var tt = l(352528),
    tl = l(32122);
let tn = [0, 16, 0, 16],
    ti = tn[1] + tn[3];
function ta(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: a, onEdit: s, isLoading: r } = e,
        [o, c] = i.useState({ width: 0, height: 0 }),
        d = (0, u.yK)([I.Ay], () => I.Ay.getNewClipIds()),
        m = (0, u.bG)([I.Ay], () => I.Ay.getExportingClipIds().size > 0),
        h = (0, e6.P)((e) => e.activeMainLink),
        x = (0, e6.P)((e) => e.gameFacet),
        g = (0, e6.P)((e) => e.clippedWithFacet),
        f = i.useMemo(() => {
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
                let t = n.some((e) => e.isTemporary);
                e.push({
                    type: "today",
                    title: eu.intl.string(eu.t["kB2R/0"]),
                    description: t ? eu.intl.string(eu.t["6AXirz"]) : void 0,
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
                (n = Math.max(1, Math.floor(((l = j - ti) + 16) / 336))),
                (i = Math.max(320, (l - 16 * (n - 1)) / n)),
                (a = Math.ceil(e / n)),
                { tileWidth: i, columns: n, rows: a }
            );
        }, [t.length, j]),
        b = (0, Q.GV)(),
        A = i.useRef(null),
        k = i.useMemo(() => {
            let e = Math.max(1, y),
                t = [];
            for (let l of f) {
                let n = Math.ceil(l.clips.length / e);
                for (let i = 0; i < n; i++) t.push(Math.min(e, l.clips.length - i * e));
            }
            return t;
        }, [f, y]),
        N = i.useCallback(
            (e, t, l) =>
                new Promise((e) => {
                    A.current?.scrollRowIntoView(t);
                    let n = 0,
                        i = () => {
                            null != document.querySelector(l) || n >= 10 ? e() : (n++, requestAnimationFrame(i));
                        };
                    requestAnimationFrame(i);
                }),
            [],
        ),
        {
            getContainerProps: w,
            getItemProps: P,
            getRowProps: E,
        } = (0, V.A)({ navId: b, columnCounts: k, prepareFocus: N }),
        L = i.useMemo(() => f.map((e) => Math.ceil(e.clips.length / y)), [f, y]),
        S = i.useMemo(() => L.reduce((e, t) => e + t, 0), [L]),
        D = Math.floor(v / eg),
        M = f.length > 0 ? `${h}:${x ?? ""}:${g ?? ""}` : null,
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
        })(M),
        _ = i.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: i } = t,
                    r = f[l];
                if (null == r) return null;
                let o = i * y,
                    c = r.clips.slice(o, o + y);
                return (0, n.jsx)(
                    "div",
                    {
                        className: tt.UX,
                        ...E(e),
                        children: c.map((t, l) => {
                            let i = { width: v };
                            return (
                                T && (i["--custom-entrance-delay"] = `${te(e + l)}ms`),
                                (0, n.jsx)(
                                    "div",
                                    {
                                        className: T ? tl.$ : void 0,
                                        style: i,
                                        children: (0, n.jsx)(eJ, {
                                            actionsDisabled: m,
                                            isNew: d.includes(t.id),
                                            onClick: a ?? s,
                                            onEdit: s,
                                            clip: t,
                                            gridItemProps: P(l, e),
                                        }),
                                    },
                                    `${M ?? "static"}:${t.id}`,
                                )
                            );
                        }),
                    },
                    `row-${l}-${i}`,
                );
            },
            [f, y, v, m, d, a, s, E, P, T, M],
        ),
        R = i.useCallback(
            (e) => {
                let t = f[e];
                return t?.description != null ? 66 : 44;
            },
            [f],
        ),
        F = i.useCallback(
            (e) => {
                let t = f[e];
                return null == t
                    ? null
                    : (0, n.jsxs)(
                          "div",
                          {
                              className: tt.aE,
                              children: [
                                  (0, n.jsx)(p.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, n.jsx)($.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: tt.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [f],
        );
    if (!r && 0 === f.length) return (0, n.jsx)(ex, { isEmptyBecauseQuery: l > 0 });
    if (r && 0 === f.length) return (0, n.jsx)("div", { className: tt.dc, children: (0, n.jsx)(q.y, {}) });
    let z = (0, n.jsx)(B.A, {
            ref: A,
            role: "none presentation",
            listPadding: tn,
            renderRow: _,
            renderSectionHeader: F,
            rowCount: S,
            rowCountBySection: L,
            rowHeight: D + 96 + 16,
            sectionHeaderHeight: R,
            onResize: c,
        }),
        { onFocus: H, ...G } = w();
    return (0, n.jsx)("div", { className: tt.UT, ...G, children: z });
}
var ts = l(922016),
    tr = l(847374),
    to = l(980707),
    tc = l(477782),
    tu = l(112173),
    td = l(892547),
    tm = l(548118),
    th = l(974293),
    tx = l(458977),
    tg = l(526233),
    tf = l(270962);
function tp() {
    let e = (0, th.aJ)("useIsAutoClipsAvailable"),
        t = tx.A.useConfig({ location: "isAutoClipsAvailable" }).enableDistributedClips,
        l = tf.A.useConfig({ location: "isAutoClipsAvailable" }).enableSteamTimeline,
        n = tg.A.useConfig({ location: "isAutoClipsAvailable" }).enableLeagueEvents;
    return e || t || l || n;
}
var tj = l(441349),
    tv = l(305866),
    ty = l(939249),
    tb = l(789645),
    tC = l(939546),
    tA = l(99478);
function tk(e) {
    return e.setHours(0, 0, 0, 0), e.getTime();
}
function tN(e) {
    return e.setHours(23, 59, 59, 999), e.getTime();
}
function tw(e, t) {
    if (null == e && null == t) return null;
    let l = (0, tC.Xj)();
    return { preset: "custom", after: null != e ? tk(e.toDate(l)) : null, before: null != t ? tN(t.toDate(l)) : null };
}
function tP(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new tA.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let tE = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function tL(e) {
    return tE.format(new Date(e));
}
function tS(e) {
    switch (e.preset) {
        case "today":
            return eu.intl.string(ec.default.yOAWWM);
        case "yesterday":
            return eu.intl.string(ec.default["PtV/Ti"]);
        case "last-3-days":
            return eu.intl.string(ec.default.xfmv7I);
        case "this-year":
            return eu.intl.string(ec.default["+eE7zX"]);
        case "last-year":
            return eu.intl.string(ec.default.Nwj9v0);
        case "custom": {
            let t = null != e.after ? tL(e.after) : null,
                l = null != e.before ? tL(e.before) : null;
            if (null != t && null != l)
                return eu.intl.formatToPlainString(ec.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return eu.intl.formatToPlainString(ec.default.k1FkTL, { date: t });
            if (null != l) return eu.intl.formatToPlainString(ec.default["4NlpHD"], { date: l });
            return eu.intl.string(ec.default.tv9apA);
        }
    }
}
var tD = l(817480);
function tM(e) {
    let { closePopout: t } = e,
        l = (0, e6.P)((e) => e.dateFilter),
        a = (0, e6.P)((e) => e.setDateFilter),
        [r, o] = i.useState(l?.preset === "custom"),
        [c, u] = i.useState(() => (l?.preset === "custom" ? tP(l.after) : null)),
        [d, h] = i.useState(() => (l?.preset === "custom" ? tP(l.before) : null)),
        x = i.useMemo(
            () => [
                { key: "today", label: eu.intl.string(ec.default.yOAWWM) },
                { key: "yesterday", label: eu.intl.string(ec.default["PtV/Ti"]) },
                { key: "last-3-days", label: eu.intl.string(ec.default.xfmv7I) },
                { key: "this-year", label: eu.intl.string(ec.default["+eE7zX"]) },
                { key: "last-year", label: eu.intl.string(ec.default.Nwj9v0) },
            ],
            [],
        ),
        g = l?.preset ?? null,
        f = r && "custom" !== g ? null : g,
        p = i.useMemo(() => (0, tC.Ec)((0, tC.Xj)()), []),
        v = i.useCallback(
            (e) => {
                a(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: tk(new Date(t)), before: tN(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: tk(new Date(l)), before: tN(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return l.setDate(l.getDate() - 2), { preset: e, after: tk(l), before: tN(new Date(t)) };
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
                    t();
            },
            [a, t],
        ),
        y = i.useCallback(() => {
            o((e) => !e);
        }, []),
        b = i.useCallback(
            (e) => {
                u(e), a(tw(e, d));
            },
            [d, a],
        ),
        C = i.useCallback(
            (e) => {
                h(e), a(tw(c, e));
            },
            [c, a],
        ),
        A = i.useCallback(() => {
            u(null), h(null), a(null);
        }, [a]),
        k = null != c || null != d,
        N = i.useRef(null),
        w = i.useCallback(() => Array.from(N.current?.querySelectorAll('[role="button"]') ?? []), []),
        P = i.useCallback(
            (e) => {
                if ("ArrowDown" !== e.key && "ArrowUp" !== e.key) return;
                let t = w();
                if (0 === t.length) return;
                e.preventDefault(), e.stopPropagation();
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
    return (0, n.jsx)(tv.l, {
        "aria-label": eu.intl.string(ec.default.upqksT),
        onBlur: E,
        children: (0, n.jsxs)("div", {
            className: s()(tD.SW, r && tD.Td),
            children: [
                (0, n.jsxs)("div", {
                    className: tD.sh,
                    children: [
                        (0, n.jsx)($.E, {
                            variant: "eyebrow",
                            color: "text-muted",
                            className: tD.a9,
                            children: eu.intl.string(ec.default.upqksT),
                        }),
                        (0, n.jsxs)("div", {
                            ref: N,
                            className: tD.eF,
                            onKeyDown: P,
                            children: [
                                x.map((e) =>
                                    (0, n.jsx)(
                                        ty.D,
                                        {
                                            className: s()(tD.zD, f === e.key && tD.pH),
                                            onClick: () => v(e.key),
                                            "aria-pressed": f === e.key,
                                            children: (0, n.jsx)($.E, {
                                                variant: "text-sm/medium",
                                                color: "currentColor",
                                                children: e.label,
                                            }),
                                        },
                                        e.key,
                                    ),
                                ),
                                (0, n.jsxs)(ty.D, {
                                    className: s()(tD.zD, tD.Kl, (r || "custom" === g) && tD.pH),
                                    onClick: y,
                                    "aria-expanded": r,
                                    children: [
                                        (0, n.jsx)($.E, {
                                            variant: "text-sm/medium",
                                            color: "currentColor",
                                            children: eu.intl.string(ec.default.tv9apA),
                                        }),
                                        (0, n.jsx)($.E, {
                                            variant: "text-md/medium",
                                            color: "text-muted",
                                            className: tD.Xt,
                                            children: r ? "\u25C0" : "\u25B6",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: tD.ML,
                    "aria-hidden": !r,
                    children: [
                        (0, n.jsxs)("div", {
                            className: tD.U6,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: tD._2,
                                    children: [
                                        (0, n.jsx)($.E, {
                                            variant: "eyebrow",
                                            color: "text-muted",
                                            className: tD.bk,
                                            "aria-hidden": !0,
                                            children: eu.intl.string(ec.default["96vZuU"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tD.h0,
                                            children: [
                                                (0, n.jsx)(tj.l, {
                                                    label: eu.intl.string(ec.default["96vZuU"]),
                                                    hideLabel: !0,
                                                    value: c,
                                                    onChange: b,
                                                    maxValue: d ?? p,
                                                }),
                                                null != c &&
                                                    (0, n.jsx)(m.m, {
                                                        text: eu.intl.string(eu.t.VkKicb),
                                                        children: (0, n.jsx)(j.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tb.P,
                                                            onClick: () => b(null),
                                                            "aria-label": eu.intl.string(eu.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: tD._2,
                                    children: [
                                        (0, n.jsx)($.E, {
                                            variant: "eyebrow",
                                            color: "text-muted",
                                            className: tD.bk,
                                            "aria-hidden": !0,
                                            children: eu.intl.string(ec.default["GL51/b"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tD.h0,
                                            children: [
                                                (0, n.jsx)(tj.l, {
                                                    label: eu.intl.string(ec.default["GL51/b"]),
                                                    hideLabel: !0,
                                                    value: d,
                                                    onChange: C,
                                                    minValue: c ?? void 0,
                                                    maxValue: p,
                                                }),
                                                null != d &&
                                                    (0, n.jsx)(m.m, {
                                                        text: eu.intl.string(eu.t.VkKicb),
                                                        children: (0, n.jsx)(j.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tb.P,
                                                            onClick: () => C(null),
                                                            "aria-label": eu.intl.string(eu.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        k &&
                            (0, n.jsx)("div", {
                                className: tD.dS,
                                children: (0, n.jsx)(ee.Q, {
                                    size: "sm",
                                    text: eu.intl.string(eu.t.VkKicb),
                                    onClick: A,
                                }),
                            }),
                    ],
                }),
            ],
        }),
    });
}
var tI = l(91871),
    tT = l.n(tI),
    t_ = l(103552),
    tR = l(914427),
    tF = l(213424);
function tz(e) {
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
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => tT()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, n.jsxs)(
                            t_.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, n.jsx)("span", { className: tF.H, children: e.icon }),
                                    (0, n.jsx)(t_.x4.Label, { children: e.label }),
                                    r ? (0, n.jsx)(t_.x4.Checkbox, {}) : (0, n.jsx)(t_.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        h = a.size > 0 ? `${t} (${a.size})` : t;
    return (0, n.jsx)(ts.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: u,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(tR.p, {
                "aria-label": t,
                placeholder: o,
                value: d,
                multiSelect: r,
                onChange: s,
                onClose: l,
                emptyStateText: c ?? eu.intl.string(eu.t.QwSXv8),
                maxVisibleItems: 6,
                children: m,
            });
        },
        children: (e) =>
            (0, n.jsx)(eC.$, {
                ...e,
                buttonRef: u,
                size: "sm",
                variant: "secondary",
                text: h,
                icon: tr.a,
                iconPosition: "end",
            }),
    });
}
var tH = l(941886);
function tG(e) {
    let { label: t, icon: l, onRemove: i, removeAriaLabel: a } = e;
    return (0, n.jsxs)("div", {
        className: tH.Io,
        children: [
            null != l && (0, n.jsx)("span", { className: tH.Kk, children: l }),
            (0, n.jsx)($.E, {
                className: tH.Pf,
                variant: "text-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, n.jsx)(ty.D, {
                className: tH.DT,
                onClick: i,
                "aria-label": a ?? eu.intl.string(eu.t.N86XcP),
                children: (0, n.jsx)(tb.P, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var tO = l(841765);
let tU = { all: ec.default.lscwjQ, auto: ec.default.xrOIkz, manual: ec.default.D7HSLJ };
function tK() {
    let e = (0, e6.P)((e) => e.dateFilter),
        t = i.useRef(null),
        l = null != e ? tS(e) : eu.intl.string(ec.default.upqksT);
    return (0, n.jsx)(ts.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(tM, { closePopout: t });
        },
        children: (e) =>
            (0, n.jsx)(eC.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: tr.a,
                iconPosition: "end",
            }),
    });
}
function tV() {
    let e = (0, e6.P)((e) => e.sortOrder),
        t = (0, e6.P)((e) => e.setSortOrder),
        l = i.useRef(null),
        a = e === K.mu.OLDEST ? eu.intl.string(eu.t["0gitSE"]) : eu.intl.string(eu.t["4LLKx3"]);
    return (0, n.jsx)(ts.Y, {
        position: "bottom",
        align: "right",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: i } = l;
            return (0, n.jsx)(to.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": eu.intl.string(eu.t.XvNMNk),
                onClose: i,
                onSelect: void 0,
                children: (0, n.jsxs)(tc.rX, {
                    children: [
                        (0, n.jsx)(tc.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: eu.intl.string(eu.t["4LLKx3"]),
                            action: () => {
                                t(K.mu.MOST_RECENT), i();
                            },
                            checked: e === K.mu.MOST_RECENT,
                        }),
                        (0, n.jsx)(tc.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: eu.intl.string(eu.t["0gitSE"]),
                            action: () => {
                                t(K.mu.OLDEST), i();
                            },
                            checked: e === K.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, n.jsx)(eC.$, { ...e, buttonRef: l, size: "sm", variant: "secondary", text: a, icon: tu.J }),
    });
}
function t$() {
    let e = (0, e6.P)((e) => e.clipMethodFilter),
        t = (0, e6.P)((e) => e.setClipMethodFilter),
        l = i.useRef(null);
    return (0, n.jsx)(ts.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: i } = l;
            return (0, n.jsx)(to.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": eu.intl.string(ec.default["kIqbb/"]),
                onClose: i,
                onSelect: void 0,
                children: (0, n.jsxs)(tc.rX, {
                    children: [
                        (0, n.jsx)(tc.iD, {
                            id: "method-all",
                            group: "method",
                            label: eu.intl.string(ec.default.lscwjQ),
                            action: () => {
                                t("all"), i();
                            },
                            checked: "all" === e,
                        }),
                        (0, n.jsx)(tc.iD, {
                            id: "method-auto",
                            group: "method",
                            label: eu.intl.string(ec.default.xrOIkz),
                            action: () => {
                                t("auto"), i();
                            },
                            checked: "auto" === e,
                        }),
                        (0, n.jsx)(tc.iD, {
                            id: "method-manual",
                            group: "method",
                            label: eu.intl.string(ec.default.D7HSLJ),
                            action: () => {
                                t("manual"), i();
                            },
                            checked: "manual" === e,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, n.jsx)(eC.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: eu.intl.string(ec.default["kIqbb/"]),
                icon: tr.a,
                iconPosition: "end",
            }),
    });
}
function tq(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: a } = e,
        s = (0, e6.P)((e) => e.query),
        r = (0, e6.P)((e) => e.setQuery),
        o = (0, e6.P)((e) => e.pendingSearchFocus),
        c = (0, e6.P)((e) => e.setPendingSearchFocus),
        u = i.useRef(null),
        d = (0, e6.P)((e) => e.activeMainLink),
        m = (0, e6.P)((e) => e.clipMethodFilter),
        h = (0, e6.P)((e) => e.setClipMethodFilter),
        x = (0, e6.P)((e) => e.gameFacet),
        p = (0, e6.P)((e) => e.clippedWithFacet),
        j = (0, e6.P)((e) => e.selectedGameIds),
        v = (0, e6.P)((e) => e.selectedUserIds),
        y = (0, e6.P)((e) => e.selectedGuildId),
        b = (0, e6.P)((e) => e.selectedActivity),
        C = (0, e6.P)((e) => e.dateFilter),
        A = (0, e6.P)((e) => e.toggleGameId),
        k = (0, e6.P)((e) => e.toggleUserId),
        N = (0, e6.P)((e) => e.setSelectedGuildId),
        E = (0, e6.P)((e) => e.setSelectedActivity),
        L = (0, e6.P)((e) => e.setDateFilter),
        D = (0, e6.P)((e) => e.clearFilters);
    i.useEffect(() => {
        o && (u.current?.focus(), c(!1));
    }, [o, c]);
    let M = i.useRef(null);
    i.useEffect(() => {
        let e = {
            type_filter: "all" !== m ? m : "",
            game_filter_application_ids: null != x ? [x] : Array.from(j),
            date_filter_range: null != C ? C.preset.replace(/-/g, "_") : "",
            filtered_by_server: null != y,
            filtered_by_participants: null != p || v.size > 0,
            filtered_by_favorites: d === K.oH.FAVORITES,
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
        t !== M.current && ((M.current = t), eI.default.track(eo.HAw.CLIPS_FILTER_CHANGED, e));
    }, [m, x, j, C, y, p, v, d, b]);
    let I = i.useMemo(() => l.map((e) => e.key), [l]),
        T = (0, w.A)(I),
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
                        let t = eD.A.getGuild(e);
                        null != t && l.push({ key: e, label: t.name, guild: t });
                    }
                    return l.sort((e, t) => e.label.toLowerCase().localeCompare(t.label.toLowerCase())), l;
                })(t),
            [t],
        ),
        z = i.useMemo(
            () =>
                F.map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, n.jsx)(tm.Ay, { guild: e.guild, size: tm.Ay.Sizes.MINI }),
                })),
            [F],
        ),
        H = i.useMemo(() => new Map(F.map((e) => [e.key, e.guild])), [F]),
        G = i.useMemo(
            () =>
                null == x
                    ? []
                    : (function (e) {
                          let t = new Set();
                          for (let l of e)
                              l.activity?.state != null && "" !== l.activity.state && t.add(l.activity.state),
                                  l.activity?.details != null && "" !== l.activity.details && t.add(l.activity.details);
                          return Array.from(t).sort((e, t) => e.toLowerCase().localeCompare(t.toLowerCase()));
                      })(t.filter((e) => e.applicationId === x)).map((e) => ({ key: e, label: e })),
            [t, x],
        ),
        O = i.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    for (let l of e) {
                        let e = S.default.getUser(l.key);
                        null != e &&
                            t.push({
                                key: l.key,
                                label: e.globalName ?? e.username,
                                avatarUrl: e.getAvatarURL(null, 32),
                            });
                    }
                    return t.sort((e, t) => e.label.toLowerCase().localeCompare(t.label.toLowerCase())), t;
                })(a).map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, n.jsx)(g.eu, { src: e.avatarUrl, size: f._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [a],
        ),
        U = i.useMemo(() => (null != y ? new Set([y]) : new Set()), [y]),
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
        B = null == x,
        Q = null == p,
        Y = tp() && d !== K.oH.AUTO_CLIPS,
        W = eu.intl.string(tU[m]),
        X = (0, n.jsxs)(n.Fragment, {
            children: [
                B &&
                    Array.from(j).map((e) => {
                        let t = R.find((t) => t.key === e);
                        return (0, n.jsx)(
                            tG,
                            {
                                label: t?.label ?? e,
                                icon: (0, n.jsx)(P.A, { game: _.get(e), size: P.M.XSMALL }),
                                onRemove: () => A(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != C && (0, n.jsx)(tG, { label: tS(C), onRemove: () => L(null) }, "date"),
                null != y &&
                    (0, n.jsx)(
                        tG,
                        {
                            label: z.find((e) => e.key === y)?.label ?? y,
                            icon:
                                null != H.get(y)
                                    ? (0, n.jsx)(tm.Ay, { guild: H.get(y), size: tm.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => N(null),
                        },
                        "guild",
                    ),
                Q && Array.from(v).map((e) => (0, n.jsx)(tB, { userId: e, onRemove: () => k(e) }, `user-${e}`)),
                null != b && (0, n.jsx)(tG, { label: b, onRemove: () => E(null) }, "activity"),
                Y && "all" !== m && (0, n.jsx)(tG, { label: W, onRemove: () => h("all") }, "method"),
            ],
        }),
        Z = (B && j.size > 0) || null != C || null != y || (Q && v.size > 0) || null != b || (Y && "all" !== m);
    return (0, n.jsxs)("div", {
        className: tO.kT,
        children: [
            (0, n.jsxs)("div", {
                className: tO.HL,
                children: [
                    (0, n.jsx)("div", {
                        className: tO.MT,
                        children: (0, n.jsx)(td.I, {
                            ref: u,
                            placeholder: eu.intl.string(eu.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: tO.Zq,
                        children: [
                            Y && (0, n.jsx)(t$, {}),
                            B &&
                                R.length > 0 &&
                                (0, n.jsx)(tz, {
                                    triggerLabel: eu.intl.string(eu.t.URyqtP),
                                    options: R,
                                    selectedKeys: j,
                                    onToggle: A,
                                    multiSelect: !0,
                                    searchPlaceholder: eu.intl.string(eu.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(tK, {}),
                            z.length > 0 &&
                                (0, n.jsx)(tz, {
                                    triggerLabel: eu.intl.string(eu.t["5qyruI"]),
                                    options: z,
                                    selectedKeys: U,
                                    onToggle: $,
                                    multiSelect: !1,
                                    searchPlaceholder: eu.intl.string(eu.t["5h0QOP"]),
                                }),
                            Q &&
                                O.length > 0 &&
                                (0, n.jsx)(tz, {
                                    triggerLabel: eu.intl.string(eu.t.YQ6dJg),
                                    options: O,
                                    selectedKeys: v,
                                    onToggle: (e) => k(e),
                                    multiSelect: !0,
                                    searchPlaceholder: eu.intl.string(eu.t["5h0QOP"]),
                                }),
                            G.length > 0 &&
                                (0, n.jsx)(tz, {
                                    triggerLabel: eu.intl.string(eu.t.agRtPG),
                                    options: G,
                                    selectedKeys: V,
                                    onToggle: q,
                                    multiSelect: !1,
                                    searchPlaceholder: eu.intl.string(eu.t["5h0QOP"]),
                                }),
                        ],
                    }),
                    (0, n.jsx)("div", { className: tO.QZ, children: (0, n.jsx)(tV, {}) }),
                ],
            }),
            Z &&
                (0, n.jsxs)("div", {
                    className: tO.eH,
                    children: [
                        X,
                        (0, n.jsx)(ee.Q, {
                            size: "sm",
                            variant: "primary",
                            text: eu.intl.string(eu.t.O8k7O4),
                            onClick: D,
                        }),
                    ],
                }),
        ],
    });
}
function tB(e) {
    let { userId: t, onRemove: l } = e,
        i = (0, u.bG)([S.default], () => S.default.getUser(t), [t]);
    if (null == i) return null;
    let a = i.globalName ?? i.username;
    return (0, n.jsx)(tG, {
        label: a,
        icon: (0, n.jsx)(g.eu, { src: i.getAvatarURL(null, 32), size: f._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
var tQ = l(364522);
let tY = (0, l(945810).mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var tW = l(505124),
    tX = l(43990),
    tZ = l(175841),
    tJ = l(449543),
    t0 = l(152858);
function t1(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var t2 = l(452143);
function t3(e) {
    let { clips: t, onEdit: l, onEdgeNavigate: a } = e,
        r = i.useMemo(() => t1(t), [t]),
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
                null != l.current && (window.clearTimeout(l.current), (l.current = null)),
                    null != e
                        ? t((t) => {
                              if (t.thumbnail === e) return t;
                              let l = t.thumbnail ?? t.previousThumbnail;
                              return { previousThumbnail: l !== e ? l : null, thumbnail: e };
                          })
                        : (l.current = window.setTimeout(() => {
                              t((e) => ({ previousThumbnail: e.thumbnail ?? e.previousThumbnail, thumbnail: null })),
                                  (l.current = null);
                          }, 2e3));
            }, []);
            return {
                backgroundComponent: (0, n.jsxs)(n.Fragment, {
                    children: [
                        null != e.previousThumbnail &&
                            (0, n.jsx)(
                                "img",
                                { src: e.previousThumbnail, className: t2.Tp, alt: "", "aria-hidden": !0 },
                                e.previousThumbnail,
                            ),
                        null != e.thumbnail &&
                            (0, n.jsx)(
                                "img",
                                { src: e.thumbnail, className: `${t2.Tp} ${t2.h9}`, alt: "", "aria-hidden": !0 },
                                e.thumbnail,
                            ),
                    ],
                }),
                handleHoverChange: a,
            };
        })(),
        u = (0, e6.P)((e) => e.setActiveMainLink),
        d = (0, Q.GV)(),
        m = i.useMemo(() => [r.length], [r.length]),
        { getContainerProps: h, getItemProps: x, getRowProps: g } = (0, V.A)({ navId: d, columnCounts: m }),
        { onFocus: f, onKeyDown: j, ...v } = h(),
        y = i.useCallback(
            (e) => {
                if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
                    e.preventDefault(), e.stopPropagation(), a?.("ArrowUp" === e.key ? "up" : "down", e.currentTarget);
                    return;
                }
                j(e);
            },
            [j, a],
        ),
        b = { ...v, onKeyDown: y };
    return 0 === r.length
        ? null
        : (0, n.jsx)(tX.N, {
              theme: tW.NJ.DARK,
              children: (e) =>
                  (0, n.jsxs)("section", {
                      className: s()(t2.uW, e),
                      "aria-label": eu.intl.string(ec.default.efLpNC),
                      children: [
                          o,
                          (0, n.jsxs)("div", {
                              className: t2.wx,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: t2.mX,
                                      children: [
                                          (0, n.jsxs)("div", {
                                              className: t2.UP,
                                              children: [
                                                  (0, n.jsx)(tZ.B, { size: "refresh_sm", color: "white" }),
                                                  (0, n.jsx)($.E, {
                                                      variant: "text-md/medium",
                                                      color: "text-overlay-light",
                                                      children: eu.intl.string(ec.default.I1h8uD),
                                                  }),
                                              ],
                                          }),
                                          (0, n.jsx)(p.D, {
                                              variant: "display-md",
                                              color: "text-overlay-light",
                                              className: t2.DD,
                                              children: eu.intl.string(ec.default.efLpNC),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsx)("div", {
                                      className: t2.BX,
                                      children: (0, n.jsx)(eC.$, {
                                          variant: "overlay-primary",
                                          size: "sm",
                                          onClick: () => u(K.oH.AUTO_CLIPS),
                                          text: eu.intl.string(ec.default.gCay1w),
                                      }),
                                  }),
                              ],
                          }),
                          (0, n.jsx)(tJ.A, {
                              className: t2.jG,
                              gap: 16,
                              edgeFade: 0,
                              scrollBehavior: t0.Uf.ITEM,
                              hideActionsWhenDisabled: !0,
                              "aria-label": eu.intl.string(ec.default.efLpNC),
                              gridContainerProps: b,
                              gridRowProps: g(0),
                              children: r.map((e, t) => {
                                  let i = "" !== e.thumbnail ? e.thumbnail : null;
                                  return (0, n.jsx)(
                                      "div",
                                      {
                                          className: t2.v2,
                                          onMouseEnter: () => c(i),
                                          onMouseLeave: () => c(null),
                                          onFocus: () => c(i),
                                          onBlur: (e) => {
                                              (null != e.relatedTarget && e.currentTarget.contains(e.relatedTarget)) ||
                                                  c(null);
                                          },
                                          children: (0, n.jsx)(eJ, {
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
var t5 = l(770178),
    t9 = l(765548),
    t7 = l(569926),
    t4 = l(251287);
function t8(e) {
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
        { data: h } = (0, t7.I)(t.applicationId),
        x = (0, e6.P)((e) => e.setGameFacet),
        g = (0, e6.P)((e) => e.setActiveMainLink),
        j = t.applicationId,
        v = null != j && "" !== j,
        y = i.useCallback(() => {
            null != j && "" !== j && (x(j), g(K.oH.ALL_CLIPS));
        }, [j, x, g]),
        b = i.useCallback(() => {
            v ? y() : g(K.oH.ALL_CLIPS);
        }, [v, y, g]),
        C = i.useMemo(() => (null == h ? null : (h.getBannerURL(1024) ?? h.screenshotUrls?.[0] ?? null)), [h]),
        A = (0, u.yK)([S.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => S.default.getUser(e)).filter(eT.Vq);
        }),
        k = (0, eL.e)({ timestamp: t.startedAt }),
        [N, w] = i.useState(800),
        E = (0, t9.A)((e) => {
            w(e.target.clientWidth);
        }),
        L = (0, t5.w)(E),
        D = Math.max(1, (N - 32) / 3),
        M = i.useMemo(() => {
            let e = t.clips.slice(0, 6),
                l = [];
            for (let t = 0; t < e.length; t += 3) l.push(e.slice(t, t + 3));
            return l;
        }, [t.clips]),
        I = t.clips.length > 6,
        T = (0, Q.GV)(),
        _ = i.useMemo(() => M.map((e) => e.length), [M]),
        { getContainerProps: R, getItemProps: F, getRowProps: z } = (0, V.A)({ navId: T, columnCounts: _ }),
        { onFocus: H, onKeyDown: G, ...O } = R(),
        U = i.useCallback(
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
                        e.preventDefault(), e.stopPropagation(), m(n, e.currentTarget);
                        return;
                    }
                }
                G(e);
            },
            [G, m],
        );
    return (0, n.jsxs)("section", {
        className: t4.dZ,
        children: [
            (0, n.jsx)("div", {
                className: s()(t4.tB, null == C && t4.rD),
                style: null != C ? { backgroundImage: `url(${C})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, n.jsxs)("div", {
                className: t4.wx,
                children: [
                    v
                        ? (0, n.jsx)(ev.s, {
                              "aria-label": t.applicationName,
                              onClick: y,
                              className: t4.Zn,
                              children: (0, n.jsx)(P.A, {
                                  className: t4.Gt,
                                  game: h,
                                  size: P.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, n.jsx)(P.A, { className: t4.Gt, game: h, size: P.M.MEDIUM, "aria-hidden": !0 }),
                    (0, n.jsxs)("div", {
                        className: t4.TK,
                        children: [
                            v
                                ? (0, n.jsx)(ev.s, {
                                      "aria-label": t.applicationName,
                                      onClick: y,
                                      className: t4.wb,
                                      children: (0, n.jsx)(p.D, {
                                          variant: "text-md/semibold",
                                          color: "text-default",
                                          className: t4.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, n.jsx)(p.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      className: t4.mO,
                                      children: t.applicationName,
                                  }),
                            (0, n.jsxs)("div", {
                                className: t4.mI,
                                children: [
                                    (0, n.jsx)($.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: eu.intl.format(ec.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    (0, n.jsx)("span", { className: t4.TG, "aria-hidden": "true" }),
                                    (0, n.jsx)($.E, { variant: "text-xs/normal", color: "text-muted", children: k }),
                                    A.length > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: t4.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(ej.A, { users: A, maxUsers: 5, size: f._3.SIZE_16 }),
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
                className: t4.Vg,
                ...O,
                tabIndex: -1,
                onKeyDown: U,
                children: M.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: t4.UX,
                            ...z(t),
                            children: e.map((e, i) => {
                                let s = { width: D };
                                return (
                                    c && (s["--custom-entrance-delay"] = `${te(d + t + i)}ms`),
                                    (0, n.jsx)(
                                        "div",
                                        {
                                            className: c ? tl.$ : void 0,
                                            style: s,
                                            children: (0, n.jsx)(eJ, {
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
            I &&
                (0, n.jsx)("div", {
                    className: t4.Vc,
                    children: (0, n.jsx)(eC.$, {
                        variant: "secondary",
                        size: "sm",
                        text: eu.intl.string(ec.default.pqk9U0),
                        onClick: b,
                    }),
                }),
        ],
    });
}
var t6 = l(177435);
function le(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: a, onClipClick: s, isLoading: r } = e,
        { enableAutoClipsReview: o } = tY.useConfig({ location: "ClipsGalleryHome" }),
        c = i.useMemo(() => t1(t), [t]),
        d = o && c.length > 0,
        m = (0, u.yK)([I.Ay], () => I.Ay.getNewClipIds()),
        h = (0, u.bG)([I.Ay], () => I.Ay.getExportingClipIds().size > 0),
        x = (0, e6.P)((e) => e.setActiveMainLink),
        g = i.useCallback(() => {
            x(K.oH.ALL_CLIPS);
        }, [x]),
        f = i.useMemo(() => {
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
            for (let l of f) e.push(t), (t += Math.min(2, Math.ceil(l.clips.length / 3)));
            return e;
        }, [f]),
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
    return f.length > 0 || d
        ? (0, n.jsx)(tQ.Ip, {
              className: t6.iR,
              fade: !0,
              children: (0, n.jsxs)("div", {
                  className: t6.Qs,
                  ref: y,
                  children: [
                      d &&
                          (0, n.jsx)("div", {
                              className: t6.Dk,
                              children: (0, n.jsx)(t3, { clips: t, onEdit: a, onEdgeNavigate: b }),
                          }),
                      f.length > 0 &&
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(p.D, {
                                      variant: "heading-lg/semibold",
                                      color: "text-default",
                                      children: eu.intl.string(ec.default.zfTWDE),
                                  }),
                                  f.map((e, t) =>
                                      (0, n.jsx)(
                                          t8,
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
                                      className: t6.dp,
                                      children: (0, n.jsx)(eC.$, {
                                          variant: "primary",
                                          text: eu.intl.string(ec.default.RQtkop),
                                          onClick: g,
                                      }),
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : r
          ? (0, n.jsx)("div", { className: t6.dc, children: (0, n.jsx)(q.y, {}) })
          : (0, n.jsx)(ex, { isEmptyBecauseQuery: l > 0 });
}
var lt = l(7689),
    ll = l(625903),
    ln = l(332837),
    li = l(176781),
    la = l(650684),
    ls = l(812993),
    lr = l(910537);
function lo(e) {
    let { icon: t, label: l, trailer: i, isSelected: a, isDisabled: r = !1, onClick: o } = e,
        c = r && !a;
    return (0, n.jsxs)(ty.D, {
        onClick: c ? void 0 : o,
        className: s()(lr.nM, { [lr.CZ]: a, [lr.lr]: c }),
        "aria-pressed": a,
        "aria-disabled": c,
        children: [
            (0, n.jsx)("span", { className: lr.aL, children: t }),
            (0, n.jsx)($.E, {
                variant: "text-md/medium",
                color: "currentColor",
                className: lr.xZ,
                lineClamp: 1,
                children: l,
            }),
            null != i && (0, n.jsx)("span", { className: lr.iP, children: i }),
        ],
    });
}
function lc() {
    let e = (0, u.bG)([ei.Ay], () => ei.Ay.getKeybindForAction(eo.hCu.SAVE_CLIP)),
        t = (0, e6.P)((e) => e.setActiveMainLink),
        l = (0, e6.P)((e) => e.setGameFacet),
        a = (0, e6.P)((e) => e.setClippedWithFacet),
        s = (0, e6.P)((e) => e.setPendingSearchFocus),
        r = i.useCallback(() => {
            (0, en.openUserSettings)(el.X.CLIPS_PANEL);
        }, []),
        o = i.useCallback(() => {
            l(null), a(null), t(K.oH.ALL_CLIPS), s(!0);
        }, [l, a, t, s]),
        c = null != e ? ea.dI(e.shortcut, !0) : null;
    return (0, n.jsxs)("div", {
        className: lr.aN,
        children: [
            (0, n.jsxs)("div", {
                className: lr.pR,
                children: [
                    (0, n.jsx)(p.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: eu.intl.string(eu.t.z2jK6X),
                    }),
                    null != c && (0, n.jsx)(J.e, { shortcut: c }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: lr.XL,
                children: [
                    (0, n.jsx)(m.m, {
                        text: eu.intl.string(eu.t["5h0QOP"]),
                        children: (0, n.jsx)(j.K, {
                            onClick: o,
                            icon: lt.$,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": eu.intl.string(eu.t["5h0QOP"]),
                        }),
                    }),
                    (0, n.jsx)(m.m, {
                        text: eu.intl.string(eu.t["3D5yo/"]),
                        children: (0, n.jsx)(j.K, {
                            onClick: r,
                            icon: ll.Z,
                            size: "sm",
                            variant: "icon-only",
                            "aria-label": eu.intl.string(eu.t["3D5yo/"]),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function lu(e) {
    let t,
        l,
        a,
        s,
        { mainLinkCounts: r, mainLinkNewCounts: o } = e,
        c = (0, e6.P)((e) => e.activeMainLink),
        u =
            ((t = (0, e6.P)((e) => e.setActiveMainLink)),
            (l = (0, e6.P)((e) => e.setGameFacet)),
            (a = (0, e6.P)((e) => e.setClippedWithFacet)),
            (s = (0, e6.P)((e) => e.clearFilters)),
            i.useCallback(
                (e) => {
                    t(e), l(null), a(null), s();
                },
                [t, l, a, s],
            )),
        d = (0, e6.P)((e) => e.gameFacet),
        m = (0, e6.P)((e) => e.clippedWithFacet),
        h = tp(),
        x = null != d || null != m;
    function g(e) {
        return !x && c === e;
    }
    return (0, n.jsxs)("div", {
        className: lr.uW,
        children: [
            (0, n.jsx)(lo, {
                icon: (0, n.jsx)(ln.f, { size: "sm", color: "currentColor" }),
                label: eu.intl.string(eu.t.Ym2Ri6),
                isSelected: g(K.oH.HOME),
                onClick: () => u(K.oH.HOME),
            }),
            (0, n.jsx)(lo, {
                icon: (0, n.jsx)(li.x, { size: "sm", color: "currentColor" }),
                label: eu.intl.string(eu.t.dPVrEv),
                trailer: (0, n.jsx)(ld, { count: o.allClips }),
                isSelected: g(K.oH.ALL_CLIPS),
                isDisabled: 0 === r.allClips && !g(K.oH.ALL_CLIPS),
                onClick: () => u(K.oH.ALL_CLIPS),
            }),
            h &&
                (0, n.jsx)(lo, {
                    icon: (0, n.jsx)(la.e, { size: "sm", color: "currentColor" }),
                    label: eu.intl.string(ec.default.ikNKf1),
                    trailer: (0, n.jsx)(ld, { count: o.autoClips }),
                    isSelected: g(K.oH.AUTO_CLIPS),
                    isDisabled: 0 === r.autoClips && !g(K.oH.AUTO_CLIPS),
                    onClick: () => u(K.oH.AUTO_CLIPS),
                }),
            (0, n.jsx)(lo, {
                icon: (0, n.jsx)(eb.G, { size: "sm", color: "currentColor" }),
                label: eu.intl.string(eu.t["9rlCk1"]),
                trailer: (0, n.jsx)(ld, { count: o.favorites }),
                isSelected: g(K.oH.FAVORITES),
                isDisabled: 0 === r.favorites && !g(K.oH.FAVORITES),
                onClick: () => u(K.oH.FAVORITES),
            }),
        ],
    });
}
function ld(e) {
    let { count: t } = e;
    return t <= 0 ? null : (0, n.jsx)(ls.hV, { count: t });
}
function lm(e) {
    let t,
        l,
        a,
        r,
        { gamesFacet: o } = e,
        c = (0, e6.P)((e) => e.gameFacet),
        u =
            ((t = (0, e6.P)((e) => e.setGameFacet)),
            (l = (0, e6.P)((e) => e.setClippedWithFacet)),
            (a = (0, e6.P)((e) => e.setActiveMainLink)),
            (r = (0, e6.P)((e) => e.clearFilters)),
            i.useCallback(
                (e, n) => {
                    null == n
                        ? "game" === e
                            ? t(null)
                            : l(null)
                        : ("game" === e ? t(n) : l(n), "game" === e ? l(null) : t(null), a(K.oH.ALL_CLIPS), r());
                },
                [t, l, a, r],
            )),
        d = i.useMemo(() => o.map((e) => e.key), [o]),
        m = (0, w.A)(d),
        h = i.useMemo(() => new Map(m.map((e) => [e?.id, e])), [m]);
    return 0 === o.length
        ? null
        : (0, n.jsxs)(tQ.Ip, {
              className: s()(lr.uW, lr.fC),
              fade: !0,
              children: [
                  (0, n.jsx)(p.D, {
                      variant: "heading-sm/medium",
                      color: "text-muted",
                      className: lr.a9,
                      children: eu.intl.string(eu.t.URyqtP),
                  }),
                  (0, n.jsx)("div", {
                      className: lr._A,
                      children: o.map((e) =>
                          (0, n.jsx)(
                              lo,
                              {
                                  icon: (0, n.jsx)(P.A, { game: h.get(e.key), size: P.M.XSMALL }),
                                  label: e.name,
                                  trailer: (0, n.jsx)(ld, { count: e.newCount }),
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
function lh(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: a } = e,
        s = (0, e6.P)((e) => e.setPendingContentFocus),
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
                        e.preventDefault(), e.stopPropagation();
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
        className: lr.pz,
        children: [
            (0, n.jsx)(lc, {}),
            (0, n.jsxs)("div", {
                className: lr.wp,
                ref: r,
                onKeyDown: o,
                children: [
                    (0, n.jsx)(lu, { mainLinkCounts: l, mainLinkNewCounts: a }),
                    (0, n.jsx)(lm, { gamesFacet: t }),
                ],
            }),
        ],
    });
}
var lx = l(409067),
    lg = l(696016),
    lf = l(847455);
function lp(e) {
    let {
        channelId: t,
        onClose: a,
        onClipClick: V,
        transitionState: $,
        initialEditingClipId: q,
        initialMainLink: B = K.oH.HOME,
        ...Q
    } = e;
    (0, U.A)();
    let { analyticsLocations: Y } = (0, k.Ay)(A.A.CLIPS_GALLERY),
        [W, X] = i.useState(new Set()),
        {
            gamesFacet: Z,
            participantsFacet: J,
            distributedClipInitiatorsFacet: ee,
            filteredClips: et,
            mainLinkCounts: el,
            mainLinkNewCounts: en,
            allClips: ei,
        } = (0, lx.ad)(),
        ea = (0, u.bG)([I.Ay], () => I.Ay.getSettings().storageLocation),
        [es, er] = i.useState(!0);
    i.useEffect(() => {
        (async function () {
            er(!0);
            try {
                await (0, _.Fb)(ea);
            } finally {
                er(!1);
            }
        })().catch(() => {});
    }, [ea]);
    let { onShareClick: eo } = (0, O.A)(t);
    i.useEffect(
        () => () => {
            e6.P.getState().resetAll(), (0, _.Su)();
        },
        [],
    ),
        i.useEffect(() => {
            let e = e6.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink(B);
        }, [B]),
        (0, o.l0)(() => {
            I.Ay.hasClips() && L.A.isDeveloper && E.Ay.fireSurveyAction(c.w.POPULATED_CLIP_GALLERY_CLOSED);
        });
    let ed = (0, u.bG)([I.Ay], () => I.Ay.getExportingClipIds().size > 0),
        [em, eh] = i.useState(null != q ? "editing" : "gallery"),
        [ex, eg] = i.useState(q ?? null),
        ef = (0, u.bG)([I.Ay], () => (null != ex ? I.Ay.getClipById(ex) : null), [ex]),
        ep = (0, d.useIsModalAtTop)(lg.nm),
        { enabled: ej } = M._.useConfig({ location: "ClipsGalleryModal" }),
        ev = i.useRef(em);
    (ev.current = em), (i.useRef(ex).current = ex);
    let [ey, eb] = i.useState(null != q ? x.ip.ENTERED : x.ip.HIDDEN),
        eC = i.useRef(null),
        eA = (0, e6.P)((e) => e.gameFacet),
        ek = (0, e6.P)((e) => e.clippedWithFacet),
        eN = (0, e6.P)((e) => e.activeMainLink),
        ew = (0, e6.P)((e) => e.currentPage),
        eP = (0, e6.P)((e) => e.pendingContentFocus),
        eE = (0, e6.P)((e) => e.setPendingContentFocus),
        eL = i.useRef(null);
    i.useEffect(() => {
        if (!eP) return;
        let e = 0,
            t = 0,
            l = () => {
                let n = eL.current?.querySelector('[role="grid"] [role="button"]');
                if (null != n) {
                    n.focus(), eE(!1);
                    return;
                }
                if (e++ < 10) {
                    t = requestAnimationFrame(l);
                    return;
                }
                eE(!1);
            };
        return (t = requestAnimationFrame(l)), () => cancelAnimationFrame(t);
    }, [eP, eE]);
    let eS = (0, e6.P)(
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
        eN === K.oH.HOME && eS && e6.P.getState().setActiveMainLink(K.oH.ALL_CLIPS);
    }, [eN, eS]);
    let eD = i.useMemo(() => (null != eA ? [eA] : []), [eA]),
        eM = (0, w.A)(eD)[0] ?? null,
        eI = (0, u.bG)([S.default], () => (null != ek ? S.default.getUser(ek) : null), [ek]),
        eT = i.useMemo(() => {
            if (null != eA) {
                let e = Z.find((e) => e.key === eA)?.name ?? eu.intl.string(eu.t.dPVrEv);
                return { icon: (0, n.jsx)(P.A, { game: eM, size: P.M.SMALL, "aria-hidden": !0 }), title: e };
            }
            if (null != ek) {
                let e = null != eI ? (eI.globalName ?? eI.username) : ek;
                return {
                    icon:
                        null != eI
                            ? (0, n.jsx)(g.eu, {
                                  src: eI.getAvatarURL(null, 32),
                                  size: f._3.SIZE_24,
                                  "aria-hidden": !0,
                              })
                            : null,
                    title: e,
                };
            }
            return eN === K.oH.FAVORITES
                ? { icon: null, title: eu.intl.string(eu.t["9rlCk1"]) }
                : eN === K.oH.AUTO_CLIPS
                  ? { icon: null, title: eu.intl.string(ec.default.ikNKf1) }
                  : eN === K.oH.HOME
                    ? { icon: null, title: eu.intl.string(eu.t.Ym2Ri6) }
                    : { icon: null, title: eu.intl.string(eu.t.dPVrEv) };
        }, [eA, ek, eN, Z, eM, eI]),
        e_ = i.useCallback(() => {
            eh("editing"), C.Ay.useReducedMotion && eb(x.ip.ENTERED);
        }, []),
        eR = i.useCallback((e) => {
            X((t) => {
                let l = new Set(t);
                return l.has(e) ? l.delete(e) : l.add(e), l;
            });
        }, []),
        eF = i.useCallback(
            (e) => {
                eg(e.id), e_();
            },
            [e_],
        ),
        ez = i.useCallback(() => {
            C.Ay.useReducedMotion && eg(null), eh("gallery");
        }, []);
    i.useEffect(() => {
        function e(e) {
            "Escape" === e.key && "editing" === ev.current && ep && (e.stopPropagation(), ez());
        }
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [ez, a, ep]),
        i.useEffect(() => {
            let e = (e) => {
                if (
                    ("f" !== e.key && "F" !== e.key) ||
                    e.altKey ||
                    e.shiftKey ||
                    ((0, D.isMac)() ? !e.metaKey || e.ctrlKey : !e.ctrlKey || e.metaKey) ||
                    !ep ||
                    "gallery" !== ev.current
                )
                    return;
                e.preventDefault(), e.stopPropagation();
                let t = e6.P.getState();
                t.currentPage === K.fB.HOME && t.setActiveMainLink(K.oH.ALL_CLIPS), t.setPendingSearchFocus(!0);
            };
            return document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0);
        }, [ep]),
        i.useEffect(
            () =>
                "editing" === em && null != ex
                    ? void (0, _.YK)(ex)
                    : ((0, _.TE)(),
                      () => {
                          (0, _.TE)();
                      }),
            [em, ex],
        );
    let eH = i.useCallback(() => {
            X(new Set());
        }, []),
        eG = W.size > 0,
        eO = i.useCallback(() => {
            let e = ei.filter((e) => W.has(e.id));
            (0, d.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("13367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, n.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                eH(), l.onClose();
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [ei, W, eH]),
        eU = i.useCallback(async () => {
            let e = ei.filter((e) => W.has(e.id));
            await eo({ clips: e }), eH();
        }, [ei, W, eo, eH]),
        eK = i.useMemo(() => {
            let e = 0,
                t = 0,
                l = 0;
            return (
                ei.forEach((n) => {
                    switch (n.decision?.signal?.type) {
                        case T.Gy.MANUAL:
                            l++;
                            break;
                        case T.Gy.DISTRIBUTED:
                            t++;
                            break;
                        case void 0:
                            break;
                        default:
                            e++;
                    }
                }),
                {
                    number_of_clips_loaded: ei.length,
                    num_autoclips_loaded: e,
                    num_distributed_clips_loaded: t,
                    num_manual_clips_loaded: l,
                    gallery_page: eN,
                }
            );
        }, [ei, eN]);
    (0, N.A)(
        { type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.CLIP_GALLERY_VIEWED, properties: eK },
        { disableTrack: es },
        [eK, es],
    );
    let eV = i.useMemo(
        () => ({
            selectedClipIds: W,
            toggleClipSelection: eR,
            clearSelection: eH,
            isMultiSelectMode: eG,
            onSelectClip: V,
        }),
        [W, eR, eH, eG, V],
    );
    return (0, n.jsx)(k.f5, {
        value: Y,
        children: (0, n.jsx)(eX.$.Provider, {
            value: eV,
            children: (0, n.jsx)(h.N, {
                onClose: a,
                transitionState: $,
                ...Q,
                children: (0, n.jsxs)("div", {
                    className: lf.jT,
                    ref: eC,
                    children: [
                        (0, n.jsxs)("div", {
                            className: s()(lf.PD, "gallery" === em && lf.vu),
                            inert: "gallery" !== em,
                            children: [
                                (0, n.jsx)(lh, {
                                    gamesFacet: Z,
                                    distributedClipInitiatorsFacet: ee,
                                    mainLinkCounts: el,
                                    mainLinkNewCounts: en,
                                }),
                                (0, n.jsxs)("div", {
                                    className: lf.Qs,
                                    ref: eL,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: lf.$Q,
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: lf.Rj,
                                                    children: [
                                                        eT.icon,
                                                        (0, n.jsx)(p.D, {
                                                            variant: "heading-md/medium",
                                                            color: "text-default",
                                                            children: eT.title,
                                                        }),
                                                    ],
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: lf.$s,
                                                    children: [
                                                        eG &&
                                                            (0, n.jsxs)(n.Fragment, {
                                                                children: [
                                                                    (0, n.jsx)(m.m, {
                                                                        text: eu.intl.string(eu.t.RDE0Sc),
                                                                        children: (0, n.jsx)(j.K, {
                                                                            onClick: eU,
                                                                            icon: v.l,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": eu.intl.string(eu.t.RDE0Sc),
                                                                            loading: ed,
                                                                        }),
                                                                    }),
                                                                    (0, n.jsx)(m.m, {
                                                                        text: eu.intl.string(eu.t.oyYWHE),
                                                                        children: (0, n.jsx)(j.K, {
                                                                            onClick: eO,
                                                                            icon: y.u,
                                                                            size: "sm",
                                                                            variant: "icon-only",
                                                                            "aria-label": eu.intl.string(eu.t.oyYWHE),
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        (0, n.jsx)(j.K, {
                                                            onClick: a,
                                                            icon: b.d,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": eu.intl.string(eu.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        ew === K.fB.HOME
                                            ? (0, n.jsx)(le, {
                                                  filteredClips: et,
                                                  totalClipCount: ei.length,
                                                  onEdit: eF,
                                                  onClipClick: V,
                                                  isLoading: es,
                                              })
                                            : (0, n.jsxs)(n.Fragment, {
                                                  children: [
                                                      (0, n.jsx)(tq, {
                                                          allClips: ei,
                                                          gamesFacet: Z,
                                                          participantsFacet: J,
                                                      }),
                                                      (0, n.jsx)(ta, {
                                                          onEdit: eF,
                                                          channelId: t,
                                                          filteredClips: et,
                                                          totalClipCount: ei.length,
                                                          onClipClick: V,
                                                          isLoading: es,
                                                      }),
                                                  ],
                                              }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: s()(lf.jN, "editing" === em && lf.vu),
                            inert: "editing" !== em,
                            onTransitionEnd: () => {
                                switch (em) {
                                    case "gallery":
                                        eg(null), eb(x.ip.HIDDEN);
                                        break;
                                    case "editing":
                                        eb(x.ip.ENTERED);
                                }
                            },
                            children:
                                null != ef &&
                                (0, n.jsx)(G.p, {
                                    clip: ef,
                                    modalContainerRef: eC,
                                    children: ej
                                        ? (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)(H.A, { transitionState: ey, onClose: ez }),
                                                  (0, n.jsx)(z.A, { channelId: t, onClose: ez }),
                                              ],
                                          })
                                        : (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)(R.A, { transitionState: ey, onClose: ez }),
                                                  (0, n.jsx)(F.A, { channelId: t, onClose: ez }),
                                              ],
                                          }),
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
