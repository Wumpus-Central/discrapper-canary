l.d(t, { default: () => lr });
var n = l(477900),
    a = l(582128),
    i = l(503698),
    s = l.n(i),
    r = l(562708),
    o = l(935399),
    c = l(517846),
    d = l(17928),
    u = l(192308),
    m = l(521489),
    h = l(231723),
    x = l(297264),
    f = l(508770),
    g = l(834730),
    p = l(866665),
    j = l(408278),
    v = l(7689),
    y = l(972213),
    C = l(765671),
    b = l(765548),
    k = l(775602),
    A = l(793574),
    N = l(688810),
    E = l(139286),
    w = l(429913),
    P = l(769015),
    L = l(27620),
    S = l(540999),
    I = l(287809),
    M = l(723702),
    D = l(915725),
    T = l(614584),
    _ = l(362081),
    R = l(282207),
    F = l(620957),
    H = l(245116),
    z = l(352527),
    O = l(280483),
    U = l(111994);
l(321073);
var G = l(118057),
    K = l(289873),
    V = l(962125),
    $ = l(915089);
function q(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: i, width: s = 288, height: r = 162 } = e;
    return (0, n.jsx)("img", {
        style: { width: s, height: r },
        src: "https://cdn.discordapp.com/assets/content/1e6b3a97c86291528609222cdeb8b18fdcce3270f796106d4af3d0f7fa3cce18.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: i ?? "img",
    });
}
var B = l(702841),
    Y = l(687966),
    Q = l(661531),
    X = l(475358),
    W = l(123292),
    Z = l(292801),
    J = l(780964),
    ee = l(766075),
    et = l(532624),
    el = l(350535),
    en = l(572164),
    ea = l(953932),
    ei = l(652215),
    es = l(268378),
    er = l(375708),
    eo = l(71967);
function ec(e) {
    let { header: t, description: l } = e;
    return (0, n.jsxs)("div", {
        className: eo.Nr,
        children: [t, (0, n.jsx)(g.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function ed() {
    let e = (0, B.bG)([et.Ay], () => et.Ay.getKeybindForAction(ei.hCu.SAVE_CLIP)),
        t = null != e ? el.dI(e.shortcut, !0) : null;
    return (0, n.jsxs)("div", {
        className: eo.kR,
        children: [
            (0, n.jsx)(ec, {
                header: (0, n.jsx)(Y.GameControllerIcon, { size: "refresh_sm", color: Q.A.colors.ICON_DEFAULT }),
                description: er.intl.string(es.default["4K56sP"]),
            }),
            (0, n.jsx)(ec, {
                header: null != t ? (0, n.jsx)(X.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  er.intl.format(es.default.BIwQis, { keybind: t }),
                                  (0, n.jsx)("div", {
                                      className: eo.JH,
                                      children: (0, n.jsx)(W.Q, {
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
                header: (0, n.jsx)(Z.t, { size: "refresh_sm", color: Q.A.colors.ICON_DEFAULT }),
                description: er.intl.string(es.default.DLzdl7),
            }),
        ],
    });
}
function eu(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, en.E)();
    return (0, n.jsx)("div", {
        className: eo.kL,
        children: (0, n.jsxs)("div", {
            className: eo.Qs,
            children: [
                (0, n.jsx)(q, { width: 213, height: 135, alt: "" }),
                (0, n.jsx)(x.D, {
                    className: eo.wx,
                    variant: "heading-xl/semibold",
                    children: t ? er.intl.string(es.default["+M2iLf"]) : er.intl.string(es.default.m2GEpP),
                }),
                t &&
                    (0, n.jsx)(g.E, {
                        className: eo.h_,
                        variant: "text-md/medium",
                        children: er.intl.string(es.default.xkY5xS),
                    }),
                !l && (0, n.jsx)("div", { className: eo.SO, children: (0, n.jsx)(ea.A, {}) }),
                l && !t && (0, n.jsx)(ed, {}),
            ],
        }),
    });
}
let em = 4 / 3;
var eh = l(621466),
    ex = l(61491),
    ef = l(342952),
    eg = l(890856),
    ep = l(939249),
    ej = l(820081),
    ev = l(365199),
    ey = l(778712),
    eC = l(821609),
    eb = l(22231),
    ek = l(983851),
    eA = l(31300),
    eN = l(442433),
    eE = l(587895),
    ew = l(549973),
    eP = l(549685),
    eL = l(174459),
    eS = l(403362),
    eI = l(53677),
    eM = l(609174),
    eD = l(619744),
    eT = l(82716),
    e_ = l(585579),
    eR = l(930317),
    eF = l(285072),
    eH = l(284009),
    ez = l.n(eH),
    eO = l(460905),
    eU = l(713608),
    eG = l(696016),
    eK = l(153511);
function eV(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    ez()(l?.type === eG.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let a = (0, d.bG)([I.default], () => I.default.getUser(l.remoteTriggerUserId));
    if (null == a) return null;
    let i = a.globalName ?? a.username;
    return (0, n.jsx)(p.m, {
        text: er.intl.string(es.default.vTTkFF),
        children: (0, n.jsxs)("div", {
            className: eK.S,
            children: [
                (0, n.jsx)("img", { src: a.getAvatarURL(null, 12, !1), className: eK.$, alt: i }),
                (0, n.jsx)(g.E, {
                    color: "text-overlay-light",
                    variant: "text-xs/medium",
                    children: er.intl.formatToPlainString(es.default.QJ7i8Z, { username: i }),
                }),
            ],
        }),
    });
}
function e$(e) {
    let { icon: t, text: l, tooltipText: a } = e;
    return (0, n.jsx)(p.m, {
        text: a,
        children: (0, n.jsxs)("div", {
            className: eK.S,
            children: [
                (0, n.jsx)(t, { size: "xxs", color: "currentColor" }),
                (0, n.jsx)(g.E, { color: "text-overlay-light", variant: "text-xs/medium", children: l }),
            ],
        }),
    });
}
function eq(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === eG.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case eG.Gy.DISTRIBUTED:
            return (0, n.jsx)(eV, { clip: t });
        case eG.Gy.LAUGHTER:
            return (0, n.jsx)(e$, {
                icon: eO.n,
                text: er.intl.string(es.default.bTC23D),
                tooltipText: er.intl.string(es.default["ry+jxm"]),
            });
        case eG.Gy.SHOUTING:
            return (0, n.jsx)(e$, {
                icon: eO.n,
                text: er.intl.string(es.default["3gqpuo"]),
                tooltipText: er.intl.string(es.default["ry+jxm"]),
            });
        case eG.Gy.GAME_EVENT:
            return (0, n.jsx)(e$, {
                icon: eU.q,
                text: t.decision.signal.title ?? "",
                tooltipText: er.intl.string(es.default["347DBb"]),
            });
        default:
            return null;
    }
}
var eB = l(718812),
    eY = l(721610),
    eQ = l(175764);
function eX(e) {
    let { clip: t, actionsDisabled: l, isNew: a, onClick: i, onEdit: s, gridItemProps: r } = e;
    return (0, n.jsx)(eM.Cl, {
        clip: t,
        children: (0, n.jsx)(eW, { actionsDisabled: l, isNew: a, onClick: i, onEdit: s, gridItemProps: r }),
    });
}
function eW(e) {
    let { actionsDisabled: t, isNew: i, onClick: r, onEdit: o, gridItemProps: c } = e,
        u = (0, eM.Y_)(),
        m = !0 === u.pending,
        h = t || m,
        { analyticsLocations: x } = (0, N.Ay)(A.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: f, toggleClipSelection: g, isMultiSelectMode: p, onSelectClip: j } = a.useContext(eY.$),
        [v, y] = a.useState(!1),
        [C, b] = a.useState(!1),
        [E, w] = a.useState(!1),
        [P, L] = a.useState(!1),
        [S, I] = a.useState(0),
        M = f.has(u.id),
        T = u.type === eG.nQ.SCREENSHOT,
        _ = "auto" === u.clipMethod,
        R = (0, d.bG)([k.Ay], () => k.Ay.keyboardModeEnabled),
        F = (C || v || (E && R)) && !M,
        H = a.useCallback(() => w(!0), []),
        z = a.useCallback((e) => {
            e.currentTarget.contains(e.relatedTarget) || w(!1);
        }, []);
    a.useEffect(() => {
        if (!F || T || m) return;
        let e = window.setTimeout(() => L(!0), 150);
        return () => {
            (window.clearTimeout(e), L(!1));
        };
    }, [F, T, m]);
    let O = a.useRef(null),
        U = a.useCallback(() => {
            O.current?.releaseSource();
        }, []),
        G = a.useCallback((e) => {
            O.current?.seek(e);
        }, []),
        V = a.useCallback(() => y(!1), []),
        $ = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), g(u.id));
            },
            [g, u.id],
        ),
        q = a.useCallback(
            (e) => {
                y(!0);
                let t =
                    p && f.size > 0
                        ? Array.from(f)
                              .map((e) => D.Ay.getClipById(e))
                              .filter(eS.Vq)
                        : [u];
                (0, eN.L3)(
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
                                onSelectClip: null != j ? () => j(u) : void 0,
                                onShare: () => {
                                    eL.default.track(ei.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...eI.lc(),
                                        ...eI.Zy(u),
                                    });
                                },
                                onEdit: () => {
                                    (o(u),
                                        eL.default.track(ei.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...eI.lc(),
                                            ...eI.Zy(u),
                                        }));
                                },
                                onBeforeDelete: U,
                                onAfterDelete: () => {
                                    eL.default.track(ei.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...eI.lc(),
                                        ...eI.Zy(u),
                                    });
                                },
                            });
                    },
                    { onClose: V },
                );
            },
            [u, p, f, h, V, o, U, j, x],
        ),
        B = a.useCallback(
            (e) => {
                h || (e.preventDefault(), e.stopPropagation(), q(e));
            },
            [h, q],
        ),
        Y = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), q(e));
            },
            [q],
        ),
        Q = a.useCallback(
            (e) => {
                (e.preventDefault(),
                    e.stopPropagation(),
                    o(u),
                    eL.default.track(ei.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" }));
            },
            [o, u],
        ),
        X = a.useCallback(
            (e) => {
                !h &&
                    (!(0, eh.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") &&
                            null == e.target.closest("[data-clips-progress]") &&
                            null == e.target.closest("[data-clips-select]") &&
                            e.currentTarget.contains(e.target))) &&
                    (e.shiftKey ? (e.preventDefault(), g(u.id)) : p ? g(u.id) : null != r && r(u),
                    eL.default.track(ei.HAw.CLIP_GALLERY_CARD_CLICKED, { ...eI.lc(), ...eI.Zy(u) }));
            },
            [h, p, g, u, r],
        );
    return (0, n.jsx)(N.f5, {
        value: x,
        children: (0, n.jsx)("div", {
            className: eQ.hl,
            onFocus: H,
            onBlur: z,
            children: (0, n.jsx)(eg.s, {
                "aria-disabled": h,
                "aria-label": er.intl.string(T ? er.t["HO/oXl"] : er.t.bt75uw),
                onClick: h ? void 0 : X,
                onContextMenu: B,
                buttonProps: null != c ? { role: "button", id: c.id, tabIndex: c.tabIndex } : void 0,
                buttonRef: c?.ref,
                onFocus: c?.onFocus,
                className: s()(eQ.Nr, { [eQ.r9]: h, [eQ.in]: v, [eQ.wH]: M }),
                onMouseEnter: () => b(!0),
                onMouseLeave: () => b(!1),
                children: (0, n.jsx)("div", {
                    className: eQ.w7,
                    children: (0, n.jsxs)(eZ, {
                        ref: O,
                        isPlaying: P,
                        onProgressChange: I,
                        children: [
                            m && (0, n.jsx)("div", { className: eQ.mi, children: (0, n.jsx)(K.y, {}) }),
                            (0, n.jsx)("div", {
                                className: s()(eQ.w$, { [eQ.t7]: F, [eQ.Vg]: _ }),
                                inert: !0,
                                "aria-hidden": "true",
                            }),
                            (0, n.jsx)(eJ, {
                                isNew: i,
                                showHoverActions: F && !h,
                                showSelect: F || M,
                                isSelected: M,
                                onToggleSelect: $,
                                onMenu: Y,
                                onBeforeDelete: U,
                            }),
                            (0, n.jsx)(e0, { showHoverState: F, playbackProgress: S, onEdit: Q, onSeek: G }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
let eZ = a.forwardRef((e, t) => {
    let { isPlaying: l, onProgressChange: a, children: i } = e;
    return (0, n.jsx)(eR.d, {
        ref: t,
        isPlaying: l,
        preload: "none",
        onProgressChange: a,
        children: (0, n.jsx)(eF.h, { isVisible: !0, className: eQ.Lw, children: i }),
    });
});
function eJ(e) {
    let {
            isNew: t,
            showHoverActions: l,
            showSelect: a,
            isSelected: i,
            onToggleSelect: r,
            onMenu: o,
            onBeforeDelete: c,
        } = e,
        d = (0, eM.Y_)(),
        u = !0 === d.pending;
    return (0, n.jsxs)("div", {
        className: eQ.wx,
        children: [
            (0, n.jsxs)("div", {
                className: eQ.LD,
                children: [
                    a &&
                        (0, n.jsx)(ep.D, {
                            "aria-label": er.intl.string(er.t.XqMe3N),
                            "aria-pressed": i,
                            onClick: r,
                            "data-clips-select": "true",
                            className: s()(eQ.UJ, { [eQ.ZK]: i }),
                            children: i && (0, n.jsx)(ej.B, { size: "xs", color: "currentColor" }),
                        }),
                    !u &&
                        t &&
                        (0, n.jsx)("div", {
                            className: eQ.Ad,
                            children: (0, n.jsx)(g.E, {
                                variant: "text-xs/bold",
                                color: "text-overlay-light",
                                children: er.intl.string(er.t.y2b7CA),
                            }),
                        }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: eQ.IE,
                children: [
                    (d.isFavorite || l) &&
                        (0, n.jsx)("div", {
                            className: s()({ [eQ.L6]: d.isFavorite }),
                            children: (0, n.jsx)(eT.z, {}),
                        }),
                    l &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(p.m, {
                                    text: er.intl.string(er.t["UKOtz+"]),
                                    children: (0, n.jsx)(j.K, {
                                        onClick: o,
                                        icon: ev.MoreHorizontalIcon,
                                        "aria-label": er.intl.string(er.t["UKOtz+"]),
                                        variant: "overlay-secondary",
                                        size: "sm",
                                    }),
                                }),
                                (0, n.jsx)(eD.k, { onBeforeDelete: c }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
function e0(e) {
    let { showHoverState: t, playbackProgress: l, onEdit: i, onSeek: r } = e,
        o = (0, eM.Y_)(),
        c = o.type === eG.nQ.SCREENSHOT,
        u = a.useRef(null),
        m = a.useRef(!1),
        h = a.useCallback(
            (e) => {
                let t = u.current;
                if (null == t) return;
                let l = t.getBoundingClientRect();
                0 === l.width || r(Math.max(0, Math.min(100, 100 * ((e - l.left) / l.width))));
            },
            [r],
        ),
        x = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.preventDefault(),
                    (m.current = !0),
                    e.currentTarget.setPointerCapture(e.pointerId),
                    h(e.clientX));
            },
            [h],
        ),
        f = a.useCallback(
            (e) => {
                m.current && h(e.clientX);
            },
            [h],
        ),
        p = a.useCallback((e) => {
            ((m.current = !1),
                e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId));
        }, []),
        j = (0, d.yK)([I.default], () => o.users.map((e) => I.default.getUser(e)).filter(eS.Vq)),
        v = (0, ew.e)({ timestamp: o.createdAt }),
        y = o.decision?.signal?.type,
        C = null != y && y !== eG.Gy.MANUAL,
        b =
            j.length > 0
                ? (0, n.jsx)("span", {
                      className: eQ.HD,
                      "data-clips-avatars": "true",
                      children: (0, n.jsx)(ef.A, {
                          maxUsers: 3,
                          users: j,
                          size: ey._3.SIZE_16,
                          "aria-label": er.intl.string(er.t.WTozwe),
                      }),
                  })
                : null;
    return (0, n.jsx)("div", {
        className: eQ.qr,
        children: (0, n.jsxs)("div", {
            className: eQ.Zn,
            children: [
                (0, n.jsxs)("div", {
                    className: eQ.$,
                    children: [
                        (0, n.jsxs)("div", { className: eQ.gH, children: [(0, n.jsx)(e3, {}), (0, n.jsx)(e2, {})] }),
                        t ? b : null,
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: s()(eQ.SO, { [eQ.AK]: t && !c, [eQ.I_]: t && c }),
                    children: [
                        (0, n.jsxs)("div", {
                            className: s()(eQ.KW, { [eQ.g3]: t }),
                            inert: t,
                            "aria-hidden": t,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: eQ.Tf,
                                    children: [
                                        (0, n.jsx)(eq, { clip: o }),
                                        C && (0, n.jsx)("span", { className: eQ.TG, "aria-hidden": "true" }),
                                        b,
                                        (0, n.jsx)(g.E, {
                                            variant: "text-xs/normal",
                                            color: "none",
                                            children: er.intl.format(es.default["0QCBug"], { time: v }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", { className: eQ.av, children: (0, n.jsx)(e1, {}) }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: s()(eQ.Ax, { [eQ.Mg]: t }),
                            inert: !t,
                            children: [
                                !c &&
                                    (0, n.jsx)("div", {
                                        ref: u,
                                        className: eQ.hr,
                                        onPointerDown: x,
                                        onPointerMove: f,
                                        onPointerUp: p,
                                        "data-clips-progress": "true",
                                        "aria-hidden": "true",
                                        children: (0, n.jsx)("div", {
                                            className: eQ.z5,
                                            children: (0, n.jsx)("div", {
                                                className: eQ.TE,
                                                style: { width: `${l}%` },
                                                children: (0, n.jsx)("div", {
                                                    className: eQ.GT,
                                                    "aria-hidden": "true",
                                                }),
                                            }),
                                        }),
                                    }),
                                (0, n.jsxs)("div", {
                                    className: eQ.E_,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: eQ.lO,
                                            children: (0, n.jsx)(eC.$, {
                                                variant: "overlay-secondary",
                                                size: "sm",
                                                icon: eb.PencilIcon,
                                                text: er.intl.string(er.t.bt75uw),
                                                onClick: i,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: eQ.lO,
                                            children: (0, n.jsx)(e_.E, { variant: "primary" }),
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
function e1() {
    let e = (0, eM.Y_)(),
        t = 0 === e.length,
        l = !0 === e.pending,
        i = (function (e) {
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
        s = a.useMemo(() => {
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
              className: eQ.p0,
              children: [
                  i && (0, n.jsx)(eP.A, { color: "white", width: 14, height: 14 }),
                  (0, n.jsx)(g.E, {
                      variant: "text-xs/medium",
                      color: "text-overlay-light",
                      tabularNumbers: !0,
                      children: l ? er.intl.string(er.t["2Fp7OP"]) : s,
                  }),
              ],
          });
}
function e2() {
    let e = (0, eM.Y_)(),
        t = (0, eB.h)(e),
        l = "" !== t;
    return (0, n.jsx)(g.E, {
        className: eQ.DD,
        variant: "text-sm/semibold",
        color: "text-overlay-light",
        children: l ? t : e.name,
    });
}
function e3() {
    let e = (0, eM.Y_)(),
        t = (0, d.bG)([eE.A], () => (null != e.applicationId ? eE.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, n.jsx)("div", {
        className: eQ.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, n.jsx)("img", { src: l, alt: "", className: eQ.T_ })
                : e.type === eG.nQ.VOICE_CLIP
                  ? (0, n.jsx)(ek.H, { size: "xs", color: "currentColor" })
                  : (0, n.jsx)(eA.k, { size: "xs", color: "currentColor" }),
    });
}
eZ.displayName = "CardThumbnail";
var e5 = l(792852);
function e8(e) {
    return Math.min(45 * e, 520);
}
var e9 = l(91440),
    e7 = l(762831);
function e4(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: i, onEdit: s, isLoading: r, topInset: o = 0 } = e,
        [c, u] = a.useState({ width: 0, height: 0 }),
        m = (0, d.yK)([D.Ay], () => D.Ay.getNewClipIds()),
        h = (0, d.bG)([D.Ay], () => D.Ay.getExportingClipIds().size > 0),
        f = (0, e5.P)((e) => e.activeMainLink),
        p = (0, e5.P)((e) => e.gameFacet),
        j = (0, e5.P)((e) => e.clippedWithFacet),
        v = a.useMemo(() => {
            let e = [],
                l = new Map(),
                n = [],
                a = new Date();
            a.setHours(0, 0, 0, 0);
            let i = a.getTime();
            if (
                (t.forEach((e) => {
                    let t = e.createdAt,
                        a = new Date(t);
                    if ((a.setHours(0, 0, 0, 0), a.getTime() === i)) n.push(e);
                    else {
                        let n = new Date(t).toLocaleDateString("en-US", { month: "long", year: "numeric" }),
                            a = l.get(n) ?? [];
                        l.set(n, [...a, e]);
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
        y = a.useMemo(() => [o, 24, 0, 24], [o]),
        { width: C } = c,
        { tileWidth: b, columns: A } = a.useMemo(() => {
            var e, l;
            let n, a, i;
            return (
                (e = t.length),
                (n = Math.max(1, Math.floor(((l = C - 48) + 20) / 340))),
                (a = Math.max(320, (l - 20 * (n - 1)) / n)),
                (i = Math.ceil(e / n)),
                { tileWidth: a, columns: n, rows: i }
            );
        }, [t.length, C, 48]),
        N = (0, $.GV)(),
        E = a.useRef(null),
        w = a.useMemo(() => {
            let e = Math.max(1, A),
                t = [];
            for (let l of v) {
                let n = Math.ceil(l.clips.length / e);
                for (let a = 0; a < n; a++) t.push(Math.min(e, l.clips.length - a * e));
            }
            return t;
        }, [v, A]),
        P = a.useCallback(
            (e, t, l) =>
                new Promise((e) => {
                    E.current?.scrollRowIntoView(t);
                    let n = 0;
                    requestAnimationFrame(function t() {
                        null != document.querySelector(l) || n >= 10 ? e() : (n++, requestAnimationFrame(t));
                    });
                }),
            [],
        ),
        {
            getContainerProps: L,
            getItemProps: S,
            getRowProps: I,
        } = (0, G.A)({ navId: N, columnCounts: w, prepareFocus: P }),
        M = a.useMemo(() => v.map((e) => Math.ceil(e.clips.length / A)), [v, A]),
        T = a.useMemo(() => M.reduce((e, t) => e + t, 0), [M]),
        _ = Math.floor(b / em) + 20,
        R = v.length > 0 ? `${f}:${p ?? ""}:${j ?? ""}` : null,
        F = (function (e) {
            let t = (0, d.bG)([k.Ay], () => k.Ay.useReducedMotion),
                [l, n] = a.useState(null),
                [i, s] = a.useState(null);
            return (
                e !== l && (n(e), null != e && s(e)),
                a.useEffect(() => {
                    if (null == i) return;
                    let e = window.setTimeout(() => s(null), 1200);
                    return () => window.clearTimeout(e);
                }, [i]),
                !t && null != i
            );
        })(R),
        H = a.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: a } = t,
                    r = v[l];
                if (null == r) return null;
                let o = a * A,
                    c = r.clips.slice(o, o + A);
                return (0, n.jsx)(
                    "div",
                    {
                        className: e9.UX,
                        ...I(e),
                        children: c.map((t, l) => {
                            let a = { width: b };
                            return (
                                F && (a["--custom-entrance-delay"] = `${e8(e + l)}ms`),
                                (0, n.jsx)(
                                    "div",
                                    {
                                        className: F ? e7.$ : void 0,
                                        style: a,
                                        children: (0, n.jsx)(eX, {
                                            actionsDisabled: h,
                                            isNew: m.includes(t.id),
                                            onClick: i ?? s,
                                            onEdit: s,
                                            clip: t,
                                            gridItemProps: S(l, e),
                                        }),
                                    },
                                    `${R ?? "static"}:${t.id}`,
                                )
                            );
                        }),
                    },
                    `row-${l}-${a}`,
                );
            },
            [v, A, b, h, m, i, s, I, S, F, R],
        ),
        z = a.useCallback(
            (e) => {
                let t = v[e];
                return t?.description != null ? 66 : 44;
            },
            [v],
        ),
        O = a.useCallback(
            (e) => {
                let t = v[e];
                return null == t
                    ? null
                    : (0, n.jsxs)(
                          "div",
                          {
                              className: e9.aE,
                              children: [
                                  (0, n.jsx)(x.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, n.jsx)(g.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          className: e9.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [v],
        );
    if (!r && 0 === v.length) return (0, n.jsx)(eu, { isEmptyBecauseQuery: l > 0 });
    if (r && 0 === v.length) return (0, n.jsx)("div", { className: e9.dc, children: (0, n.jsx)(K.y, {}) });
    let U = (0, n.jsx)(V.A, {
            ref: E,
            role: "none presentation",
            className: e9.Vb,
            listPadding: y,
            renderRow: H,
            renderSectionHeader: O,
            rowCount: T,
            rowCountBySection: M,
            rowHeight: _,
            sectionHeaderHeight: z,
            onResize: u,
        }),
        { onFocus: q, ...B } = L();
    return (0, n.jsx)("div", { className: e9.UT, ...B, children: U });
}
var e6 = l(405433),
    te = l(241326),
    tt = l(27232),
    tl = l(505930),
    tn = l(322911);
function ta(e) {
    let {
            selectedCount: t,
            allSelectedFavorited: l,
            onClear: a,
            onFavorite: i,
            onDelete: s,
            onShare: r,
            isSharing: o = !1,
        } = e,
        c = t > 10,
        d = er.intl.string(l ? es.default.IZsalP : es.default.ihBfyA),
        u = (0, n.jsx)(eC.$, {
            variant: "primary",
            size: "sm",
            icon: e6.ShareIcon,
            text: er.intl.string(er.t.RDE0Sc),
            onClick: r,
            disabled: c,
            loading: o,
        });
    return (0, n.jsxs)("div", {
        "aria-label": er.intl.string(er.t.z2jK6X),
        role: "region",
        className: tn.M0,
        children: [
            (0, n.jsxs)("div", {
                className: tn.h5,
                children: [
                    (0, n.jsx)(g.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: er.intl.format(es.default.cSfYIv, { count: t }),
                    }),
                    (0, n.jsx)("span", { className: tn.Om, "aria-hidden": "true" }),
                    (0, n.jsx)(ep.D, {
                        className: tn.IU,
                        onClick: a,
                        children: (0, n.jsx)(g.E, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: er.intl.string(er.t.VkKicb),
                        }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: tn.o1,
                children: [
                    (0, n.jsx)(p.m, {
                        text: er.intl.string(er.t.oyYWHE),
                        children: (0, n.jsx)(j.K, {
                            onClick: s,
                            icon: te.TrashIcon,
                            size: "sm",
                            variant: "secondary",
                            "aria-label": er.intl.string(er.t.oyYWHE),
                        }),
                    }),
                    (0, n.jsx)(
                        p.m,
                        {
                            text: d,
                            children: (0, n.jsx)(j.K, {
                                onClick: i,
                                icon: l ? tt.StarIcon : tl.y,
                                size: "sm",
                                variant: "secondary",
                                "aria-label": d,
                            }),
                        },
                        `favorite:${l}`,
                    ),
                    (0, n.jsx)(p.m, {
                        text: c ? er.intl.string(es.default.qpw1d9) : null,
                        asContainer: !0,
                        children: u,
                    }),
                ],
            }),
        ],
    });
}
var ti = l(922016),
    ts = l(847374),
    tr = l(980707),
    to = l(477782),
    tc = l(112173),
    td = l(97808),
    tu = l(683438),
    tm = l(548118),
    th = l(71393),
    tx = l(341923),
    tf = l(441349),
    tg = l(305866),
    tp = l(789645),
    tj = l(620409),
    tv = l(569737);
function ty(e) {
    return (e.setHours(0, 0, 0, 0), e.getTime());
}
function tC(e) {
    return (e.setHours(23, 59, 59, 999), e.getTime());
}
function tb(e, t) {
    if (null == e && null == t) return null;
    let l = (0, tj.Xj)();
    return { preset: "custom", after: null != e ? ty(e.toDate(l)) : null, before: null != t ? tC(t.toDate(l)) : null };
}
function tk(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new tv.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let tA = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function tN(e) {
    return tA.format(new Date(e));
}
function tE(e) {
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
            let t = null != e.after ? tN(e.after) : null,
                l = null != e.before ? tN(e.before) : null;
            if (null != t && null != l)
                return er.intl.formatToPlainString(es.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return er.intl.formatToPlainString(es.default.k1FkTL, { date: t });
            if (null != l) return er.intl.formatToPlainString(es.default["4NlpHD"], { date: l });
            return er.intl.string(es.default.tv9apA);
        }
    }
}
var tw = l(435021);
function tP(e) {
    let { closePopout: t } = e,
        l = (0, e5.P)((e) => e.dateFilter),
        i = (0, e5.P)((e) => e.setDateFilter),
        [r, o] = a.useState(l?.preset === "custom"),
        [c, d] = a.useState(() => (l?.preset === "custom" ? tk(l.after) : null)),
        [u, m] = a.useState(() => (l?.preset === "custom" ? tk(l.before) : null)),
        h = a.useMemo(
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
        f = r && "custom" !== x ? null : x,
        v = a.useMemo(() => (0, tj.Ec)((0, tj.Xj)()), []),
        y = a.useCallback(
            (e) => {
                (i(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: ty(new Date(t)), before: tC(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: ty(new Date(l)), before: tC(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 2), { preset: e, after: ty(l), before: tC(new Date(t)) }
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
            [i, t],
        ),
        C = a.useCallback(() => {
            o((e) => !e);
        }, []),
        b = a.useCallback(
            (e) => {
                (d(e), i(tb(e, u)));
            },
            [u, i],
        ),
        k = a.useCallback(
            (e) => {
                (m(e), i(tb(c, e)));
            },
            [c, i],
        ),
        A = a.useCallback(() => {
            (d(null), m(null), i(null));
        }, [i]),
        N = null != c || null != u,
        E = a.useRef(null),
        w = a.useCallback(() => Array.from(E.current?.querySelectorAll('[role="button"]') ?? []), []),
        P = a.useCallback(
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
        L = a.useCallback(
            (e) => {
                let l = e.relatedTarget;
                (null != l && (e.currentTarget.contains(l) || null != l.closest('[role="dialog"]'))) || t();
            },
            [t],
        );
    return (0, n.jsx)(tg.l, {
        "aria-label": er.intl.string(es.default.upqksT),
        onBlur: L,
        children: (0, n.jsxs)("div", {
            className: s()(tw.SW, r && tw.Td),
            children: [
                (0, n.jsxs)("div", {
                    className: tw.sh,
                    children: [
                        (0, n.jsx)(g.E, {
                            variant: "eyebrow",
                            color: "text-muted",
                            className: tw.a9,
                            children: er.intl.string(es.default.upqksT),
                        }),
                        (0, n.jsxs)("div", {
                            ref: E,
                            className: tw.eF,
                            onKeyDown: P,
                            children: [
                                h.map((e) =>
                                    (0, n.jsx)(
                                        ep.D,
                                        {
                                            className: s()(tw.zD, f === e.key && tw.pH),
                                            onClick: () => y(e.key),
                                            "aria-pressed": f === e.key,
                                            children: (0, n.jsx)(g.E, {
                                                variant: "text-sm/medium",
                                                color: "currentColor",
                                                children: e.label,
                                            }),
                                        },
                                        e.key,
                                    ),
                                ),
                                (0, n.jsxs)(ep.D, {
                                    className: s()(tw.zD, tw.Kl, (r || "custom" === x) && tw.pH),
                                    onClick: C,
                                    "aria-expanded": r,
                                    children: [
                                        (0, n.jsx)(g.E, {
                                            variant: "text-sm/medium",
                                            color: "currentColor",
                                            children: er.intl.string(es.default.tv9apA),
                                        }),
                                        (0, n.jsx)(g.E, {
                                            variant: "text-md/medium",
                                            color: "text-muted",
                                            className: tw.Xt,
                                            children: r ? "\u25C0" : "\u25B6",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: tw.ML,
                    "aria-hidden": !r,
                    children: [
                        (0, n.jsxs)("div", {
                            className: tw.U6,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: tw._2,
                                    children: [
                                        (0, n.jsx)(g.E, {
                                            variant: "eyebrow",
                                            color: "text-muted",
                                            className: tw.bk,
                                            "aria-hidden": !0,
                                            children: er.intl.string(es.default["96vZuU"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tw.h0,
                                            children: [
                                                (0, n.jsx)(tf.l, {
                                                    label: er.intl.string(es.default["96vZuU"]),
                                                    hideLabel: !0,
                                                    value: c,
                                                    onChange: b,
                                                    maxValue: u ?? v,
                                                }),
                                                null != c &&
                                                    (0, n.jsx)(p.m, {
                                                        text: er.intl.string(er.t.VkKicb),
                                                        children: (0, n.jsx)(j.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tp.P,
                                                            onClick: () => b(null),
                                                            "aria-label": er.intl.string(er.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: tw._2,
                                    children: [
                                        (0, n.jsx)(g.E, {
                                            variant: "eyebrow",
                                            color: "text-muted",
                                            className: tw.bk,
                                            "aria-hidden": !0,
                                            children: er.intl.string(es.default["GL51/b"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tw.h0,
                                            children: [
                                                (0, n.jsx)(tf.l, {
                                                    label: er.intl.string(es.default["GL51/b"]),
                                                    hideLabel: !0,
                                                    value: u,
                                                    onChange: k,
                                                    minValue: c ?? void 0,
                                                    maxValue: v,
                                                }),
                                                null != u &&
                                                    (0, n.jsx)(p.m, {
                                                        text: er.intl.string(er.t.VkKicb),
                                                        children: (0, n.jsx)(j.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tp.P,
                                                            onClick: () => k(null),
                                                            "aria-label": er.intl.string(er.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        N &&
                            (0, n.jsx)("div", {
                                className: tw.dS,
                                children: (0, n.jsx)(W.Q, {
                                    size: "sm",
                                    text: er.intl.string(er.t.VkKicb),
                                    onClick: A,
                                }),
                            }),
                    ],
                }),
            ],
        }),
    });
}
var tL = l(91871),
    tS = l.n(tL),
    tI = l(190199),
    tM = l(914427),
    tD = l(724141);
function tT(e) {
    let {
            triggerLabel: t,
            options: l,
            selectedKeys: i,
            onToggle: s,
            multiSelect: r,
            searchPlaceholder: o,
            emptyStateText: c,
        } = e,
        d = a.useRef(null),
        u = a.useMemo(() => new Set(i), [i]),
        m = a.useCallback(
            (e) => {
                let t;
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => tS()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, n.jsxs)(
                            tI.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, n.jsx)("span", { className: tD.H, children: e.icon }),
                                    (0, n.jsx)(tI.x4.Label, { children: e.label }),
                                    r ? (0, n.jsx)(tI.x4.Checkbox, {}) : (0, n.jsx)(tI.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        h = i.size > 0 ? `${t} (${i.size})` : t;
    return (0, n.jsx)(ti.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(tM.p, {
                "aria-label": t,
                placeholder: o,
                value: u,
                multiSelect: r,
                onChange: s,
                onClose: l,
                emptyStateText: c ?? er.intl.string(er.t.QwSXv8),
                maxVisibleItems: 6,
                children: m,
            });
        },
        children: (e) =>
            (0, n.jsx)(eC.$, {
                ...e,
                buttonRef: d,
                size: "sm",
                variant: "secondary",
                text: h,
                icon: ts.a,
                iconPosition: "end",
            }),
    });
}
var t_ = l(187671);
function tR(e) {
    let { label: t, icon: l, onRemove: a, removeAriaLabel: i } = e;
    return (0, n.jsxs)("div", {
        className: t_.Io,
        children: [
            null != l && (0, n.jsx)("span", { className: t_.Kk, children: l }),
            (0, n.jsx)(g.E, {
                className: t_.Pf,
                variant: "text-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, n.jsx)(ep.D, {
                className: t_.DT,
                onClick: a,
                "aria-label": i ?? er.intl.string(er.t.N86XcP),
                children: (0, n.jsx)(tp.P, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var tF = l(401756);
let tH = { all: es.default.lscwjQ, auto: es.default.xrOIkz, manual: es.default.D7HSLJ };
function tz() {
    let e = (0, e5.P)((e) => e.dateFilter),
        t = a.useRef(null),
        l = null != e ? tE(e) : er.intl.string(es.default.upqksT);
    return (0, n.jsx)(ti.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(tP, { closePopout: t });
        },
        children: (e) =>
            (0, n.jsx)(eC.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: ts.a,
                iconPosition: "end",
            }),
    });
}
function tO() {
    let e = (0, e5.P)((e) => e.sortOrder),
        t = (0, e5.P)((e) => e.setSortOrder),
        l = a.useRef(null),
        i = e === U.mu.OLDEST ? er.intl.string(er.t["0gitSE"]) : er.intl.string(er.t["4LLKx3"]);
    return (0, n.jsx)(ti.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, n.jsx)(tr.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": er.intl.string(er.t.XvNMNk),
                onClose: a,
                onSelect: void 0,
                children: (0, n.jsxs)(to.rX, {
                    children: [
                        (0, n.jsx)(to.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: er.intl.string(er.t["4LLKx3"]),
                            action: () => {
                                (t(U.mu.MOST_RECENT), a());
                            },
                            checked: e === U.mu.MOST_RECENT,
                        }),
                        (0, n.jsx)(to.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: er.intl.string(er.t["0gitSE"]),
                            action: () => {
                                (t(U.mu.OLDEST), a());
                            },
                            checked: e === U.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, n.jsx)(eC.$, { ...e, buttonRef: l, size: "sm", variant: "secondary", text: i, icon: tc.J }),
    });
}
function tU() {
    let e = (0, e5.P)((e) => e.clipMethodFilter),
        t = (0, e5.P)((e) => e.setClipMethodFilter),
        l = a.useRef(null);
    return (0, n.jsx)(ti.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, n.jsx)(tr.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": er.intl.string(es.default["kIqbb/"]),
                onClose: a,
                onSelect: void 0,
                children: (0, n.jsxs)(to.rX, {
                    children: [
                        (0, n.jsx)(to.iD, {
                            id: "method-all",
                            group: "method",
                            label: er.intl.string(es.default.lscwjQ),
                            action: () => {
                                (t("all"), a());
                            },
                            checked: "all" === e,
                        }),
                        (0, n.jsx)(to.iD, {
                            id: "method-auto",
                            group: "method",
                            label: er.intl.string(es.default.xrOIkz),
                            action: () => {
                                (t("auto"), a());
                            },
                            checked: "auto" === e,
                        }),
                        (0, n.jsx)(to.iD, {
                            id: "method-manual",
                            group: "method",
                            label: er.intl.string(es.default.D7HSLJ),
                            action: () => {
                                (t("manual"), a());
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
                text: er.intl.string(es.default["kIqbb/"]),
                icon: ts.a,
                iconPosition: "end",
            }),
    });
}
function tG(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: i } = e,
        s = (0, e5.P)((e) => e.query),
        r = (0, e5.P)((e) => e.setQuery),
        o = (0, e5.P)((e) => e.pendingSearchFocus),
        c = (0, e5.P)((e) => e.setPendingSearchFocus),
        d = a.useRef(null),
        u = (0, e5.P)((e) => e.activeMainLink),
        m = (0, e5.P)((e) => e.clipMethodFilter),
        h = (0, e5.P)((e) => e.setClipMethodFilter),
        x = (0, e5.P)((e) => e.gameFacet),
        f = (0, e5.P)((e) => e.clippedWithFacet),
        g = (0, e5.P)((e) => e.selectedGameIds),
        p = (0, e5.P)((e) => e.selectedUserIds),
        j = (0, e5.P)((e) => e.selectedGuildId),
        v = (0, e5.P)((e) => e.selectedActivity),
        y = (0, e5.P)((e) => e.dateFilter),
        C = (0, e5.P)((e) => e.toggleGameId),
        b = (0, e5.P)((e) => e.toggleUserId),
        k = (0, e5.P)((e) => e.setSelectedGuildId),
        A = (0, e5.P)((e) => e.setSelectedActivity),
        N = (0, e5.P)((e) => e.setDateFilter),
        E = (0, e5.P)((e) => e.clearFilters);
    a.useEffect(() => {
        o && (d.current?.focus(), c(!1));
    }, [o, c]);
    let L = a.useRef(null);
    a.useEffect(() => {
        let e = {
            type_filter: "all" !== m ? m : "",
            game_filter_application_ids: null != x ? [x] : Array.from(g),
            date_filter_range: null != y ? y.preset.replace(/-/g, "_") : "",
            filtered_by_server: null != j,
            filtered_by_participants: null != f || p.size > 0,
            filtered_by_favorites: u === U.oH.FAVORITES,
            filtered_by_activity: null != v,
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
            L.current = null;
            return;
        }
        let t = JSON.stringify(e);
        t !== L.current && ((L.current = t), eL.default.track(ei.HAw.CLIPS_FILTER_CHANGED, e));
    }, [m, x, g, y, j, f, p, u, v]);
    let S = a.useMemo(() => l.map((e) => e.key), [l]),
        M = (0, w.A)(S),
        D = a.useMemo(() => new Map(M.map((e) => [e?.id, e])), [M]),
        T = a.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, n.jsx)(P.A, { game: D.get(e.key), size: P.M.XSMALL }),
                })),
            [l, D],
        ),
        _ = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = th.A.getGuild(e);
                        null != t && l.push({ key: e, label: t.name, guild: t });
                    }
                    return (l.sort((e, t) => e.label.toLowerCase().localeCompare(t.label.toLowerCase())), l);
                })(t),
            [t],
        ),
        R = a.useMemo(
            () =>
                _.map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, n.jsx)(tm.Ay, { guild: e.guild, size: tm.Ay.Sizes.MINI }),
                })),
            [_],
        ),
        F = a.useMemo(() => new Map(_.map((e) => [e.key, e.guild])), [_]),
        H = a.useMemo(
            () =>
                null == x
                    ? []
                    : (function (e) {
                          let t = new Set();
                          for (let l of e)
                              (l.activity?.state != null && "" !== l.activity.state && t.add(l.activity.state),
                                  l.activity?.details != null &&
                                      "" !== l.activity.details &&
                                      t.add(l.activity.details));
                          return Array.from(t).sort((e, t) => e.toLowerCase().localeCompare(t.toLowerCase()));
                      })(t.filter((e) => e.applicationId === x)).map((e) => ({ key: e, label: e })),
            [t, x],
        ),
        z = a.useMemo(
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
                })(i).map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, n.jsx)(td.eu, { src: e.avatarUrl, size: ey._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [i],
        ),
        O = a.useMemo(() => (null != j ? new Set([j]) : new Set()), [j]),
        G = a.useMemo(() => (null != v ? new Set([v]) : new Set()), [v]),
        K = a.useCallback(
            (e) => {
                k(j === e ? null : e);
            },
            [j, k],
        ),
        V = a.useCallback(
            (e) => {
                A(v === e ? null : e);
            },
            [v, A],
        ),
        $ = null == x,
        q = null == f,
        B = (0, tx.HN)() && u !== U.oH.AUTO_CLIPS,
        Y = er.intl.string(tH[m]),
        Q = (0, n.jsxs)(n.Fragment, {
            children: [
                $ &&
                    Array.from(g).map((e) => {
                        let t = T.find((t) => t.key === e);
                        return (0, n.jsx)(
                            tR,
                            {
                                label: t?.label ?? e,
                                icon: (0, n.jsx)(P.A, { game: D.get(e), size: P.M.XSMALL }),
                                onRemove: () => C(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != y && (0, n.jsx)(tR, { label: tE(y), onRemove: () => N(null) }, "date"),
                null != j &&
                    (0, n.jsx)(
                        tR,
                        {
                            label: R.find((e) => e.key === j)?.label ?? j,
                            icon:
                                null != F.get(j)
                                    ? (0, n.jsx)(tm.Ay, { guild: F.get(j), size: tm.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => k(null),
                        },
                        "guild",
                    ),
                q && Array.from(p).map((e) => (0, n.jsx)(tK, { userId: e, onRemove: () => b(e) }, `user-${e}`)),
                null != v && (0, n.jsx)(tR, { label: v, onRemove: () => A(null) }, "activity"),
                B && "all" !== m && (0, n.jsx)(tR, { label: Y, onRemove: () => h("all") }, "method"),
            ],
        }),
        X = ($ && g.size > 0) || null != y || null != j || (q && p.size > 0) || null != v || (B && "all" !== m);
    return (0, n.jsxs)("div", {
        className: tF.kT,
        children: [
            (0, n.jsxs)("div", {
                className: tF.HL,
                children: [
                    (0, n.jsx)("div", {
                        className: tF.MT,
                        children: (0, n.jsx)(tu.I, {
                            ref: d,
                            placeholder: er.intl.string(er.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: tF.Zq,
                        children: [
                            B && (0, n.jsx)(tU, {}),
                            $ &&
                                T.length > 0 &&
                                (0, n.jsx)(tT, {
                                    triggerLabel: er.intl.string(er.t.URyqtP),
                                    options: T,
                                    selectedKeys: g,
                                    onToggle: C,
                                    multiSelect: !0,
                                    searchPlaceholder: er.intl.string(er.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(tz, {}),
                            R.length > 0 &&
                                (0, n.jsx)(tT, {
                                    triggerLabel: er.intl.string(er.t["5qyruI"]),
                                    options: R,
                                    selectedKeys: O,
                                    onToggle: K,
                                    multiSelect: !1,
                                    searchPlaceholder: er.intl.string(er.t["5h0QOP"]),
                                }),
                            q &&
                                z.length > 0 &&
                                (0, n.jsx)(tT, {
                                    triggerLabel: er.intl.string(er.t.YQ6dJg),
                                    options: z,
                                    selectedKeys: p,
                                    onToggle: (e) => b(e),
                                    multiSelect: !0,
                                    searchPlaceholder: er.intl.string(er.t["5h0QOP"]),
                                }),
                            H.length > 0 &&
                                (0, n.jsx)(tT, {
                                    triggerLabel: er.intl.string(er.t.agRtPG),
                                    options: H,
                                    selectedKeys: G,
                                    onToggle: V,
                                    multiSelect: !1,
                                    searchPlaceholder: er.intl.string(er.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(tO, {}),
                        ],
                    }),
                ],
            }),
            X &&
                (0, n.jsxs)("div", {
                    className: tF.eH,
                    children: [
                        Q,
                        (0, n.jsx)(W.Q, {
                            size: "sm",
                            variant: "primary",
                            text: er.intl.string(er.t.O8k7O4),
                            onClick: E,
                        }),
                    ],
                }),
        ],
    });
}
function tK(e) {
    let { userId: t, onRemove: l } = e,
        a = (0, d.bG)([I.default], () => I.default.getUser(t), [t]);
    if (null == a) return null;
    let i = a.globalName ?? a.username;
    return (0, n.jsx)(tR, {
        label: i,
        icon: (0, n.jsx)(td.eu, { src: a.getAvatarURL(null, 32), size: ey._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
var tV = l(689175);
let t$ = (0, l(945810).mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var tq = l(449543),
    tB = l(152858);
function tY(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var tQ = l(329924);
function tX(e) {
    let { clips: t, onEdit: l, onEdgeNavigate: i } = e,
        s = a.useMemo(() => tY(t), [t]),
        r = (0, e5.P)((e) => e.setActiveMainLink),
        o = (0, $.GV)(),
        c = a.useMemo(() => [s.length], [s.length]),
        { getContainerProps: d, getItemProps: u, getRowProps: m } = (0, G.A)({ navId: o, columnCounts: c }),
        { onFocus: h, onKeyDown: g, ...p } = d(),
        j = a.useCallback(
            (e) => {
                if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
                    (e.preventDefault(),
                        e.stopPropagation(),
                        i?.("ArrowUp" === e.key ? "up" : "down", e.currentTarget));
                    return;
                }
                g(e);
            },
            [g, i],
        ),
        v = { ...p, onKeyDown: j };
    return 0 === s.length
        ? null
        : (0, n.jsxs)("section", {
              className: tQ.uW,
              "aria-label": er.intl.string(es.default.efLpNC),
              children: [
                  (0, n.jsxs)("div", {
                      className: tQ.wx,
                      children: [
                          (0, n.jsxs)("div", {
                              className: tQ.mX,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: tQ.UP,
                                      children: [
                                          (0, n.jsx)(x.D, {
                                              variant: "heading-lg/medium",
                                              color: "text-default",
                                              children: er.intl.string(es.default.I1h8uD),
                                          }),
                                          (0, n.jsx)(f.E, { type: "beta", variant: "brand" }),
                                      ],
                                  }),
                                  (0, n.jsx)(x.D, {
                                      variant: "display-md",
                                      color: "text-default",
                                      className: tQ.DD,
                                      children: er.intl.string(es.default.efLpNC),
                                  }),
                              ],
                          }),
                          (0, n.jsx)("div", {
                              className: tQ.BX,
                              children: (0, n.jsx)(eC.$, {
                                  variant: "overlay-primary",
                                  size: "sm",
                                  onClick: () => r(U.oH.AUTO_CLIPS),
                                  text: er.intl.string(es.default.gCay1w),
                              }),
                          }),
                      ],
                  }),
                  (0, n.jsx)(tq.A, {
                      className: tQ.jG,
                      gap: 16,
                      edgeFade: 0,
                      scrollBehavior: tB.Uf.ITEM,
                      hideActionsWhenDisabled: !0,
                      "aria-label": er.intl.string(es.default.efLpNC),
                      gridContainerProps: v,
                      gridRowProps: m(0),
                      children: s.map((e, t) =>
                          (0, n.jsx)(
                              "div",
                              {
                                  className: tQ.v2,
                                  children: (0, n.jsx)(eX, {
                                      clip: e,
                                      actionsDisabled: !1,
                                      isNew: !1,
                                      onEdit: l,
                                      onClick: l,
                                      gridItemProps: u(t, 0),
                                  }),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
var tW = l(770178),
    tZ = l(202163),
    tJ = l(68408);
function t0(e) {
    let {
            session: t,
            recentClipIds: l,
            actionsDisabled: i,
            onEdit: r,
            onClipClick: o,
            animateEntrance: c,
            entranceRowOffset: u,
            onEdgeNavigate: m,
        } = e,
        { gameRecord: h } = (0, tZ.A)(t.applicationId),
        { onShareSession: f } = a.useContext(eY.$),
        p = a.useCallback(() => {
            f?.(t.clips);
        }, [f, t.clips]),
        j = (0, e5.P)((e) => e.setGameFacet),
        v = (0, e5.P)((e) => e.setActiveMainLink),
        y = t.applicationId,
        C = null != y && "" !== y,
        k = a.useCallback(() => {
            null != y && "" !== y && (j(y), v(U.oH.ALL_CLIPS));
        }, [y, j, v]),
        A = a.useCallback(() => {
            C ? k() : v(U.oH.ALL_CLIPS);
        }, [C, k, v]),
        N = a.useMemo(() => (null == h ? null : (h.getBannerURL(1024) ?? h.screenshotUrls?.[0] ?? null)), [h]),
        E = (0, d.yK)([I.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => I.default.getUser(e)).filter(eS.Vq);
        }),
        w = a.useMemo(() => t.clips.filter((e) => "auto" === e.clipMethod).length, [t.clips]),
        L = (0, ew.e)({ timestamp: t.startedAt }),
        [S, M] = a.useState(800),
        D = (0, b.A)((e) => {
            M(e.target.clientWidth);
        }),
        T = (0, tW.w)(D),
        _ = Math.max(1, (S - 40) / 3),
        R = a.useMemo(() => {
            let e = t.clips.slice(0, 6),
                l = [];
            for (let t = 0; t < e.length; t += 3) l.push(e.slice(t, t + 3));
            return l;
        }, [t.clips]),
        F = t.clips.length > 6,
        H = (0, $.GV)(),
        z = a.useMemo(() => R.map((e) => e.length), [R]),
        { getContainerProps: O, getItemProps: K, getRowProps: V } = (0, G.A)({ navId: H, columnCounts: z }),
        { onFocus: q, onKeyDown: B, ...Y } = O(),
        Q = a.useCallback(
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
                B(e);
            },
            [B, m],
        );
    return (0, n.jsxs)("section", {
        className: tJ.dZ,
        children: [
            (0, n.jsx)("div", {
                className: s()(tJ.tB, null == N && tJ.rD),
                style: null != N ? { backgroundImage: `url(${N})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, n.jsxs)("div", {
                className: tJ.wx,
                children: [
                    C
                        ? (0, n.jsx)(eg.s, {
                              "aria-label": t.applicationName,
                              onClick: k,
                              className: tJ.Zn,
                              children: (0, n.jsx)(P.A, {
                                  className: tJ.Gt,
                                  game: h,
                                  size: P.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, n.jsx)(P.A, { className: tJ.Gt, game: h, size: P.M.MEDIUM, "aria-hidden": !0 }),
                    (0, n.jsxs)("div", {
                        className: tJ.TK,
                        children: [
                            C
                                ? (0, n.jsx)(eg.s, {
                                      "aria-label": t.applicationName,
                                      onClick: k,
                                      className: tJ.wb,
                                      children: (0, n.jsx)(x.D, {
                                          variant: "text-md/medium",
                                          color: "text-default",
                                          className: tJ.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, n.jsx)(x.D, {
                                      variant: "text-md/medium",
                                      color: "text-default",
                                      className: tJ.mO,
                                      children: t.applicationName,
                                  }),
                            (0, n.jsxs)("div", {
                                className: tJ.mI,
                                children: [
                                    (0, n.jsx)(g.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: er.intl.format(es.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    w > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: tJ.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(g.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: er.intl.format(es.default.eRrt7X, { count: w }),
                                                }),
                                            ],
                                        }),
                                    (0, n.jsx)("span", { className: tJ.TG, "aria-hidden": "true" }),
                                    (0, n.jsx)(g.E, { variant: "text-xs/normal", color: "text-muted", children: L }),
                                    E.length > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: tJ.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(ef.A, { users: E, maxUsers: 5, size: ey._3.SIZE_16 }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    t.clips.length > 0 &&
                        null != f &&
                        (0, n.jsx)("div", {
                            className: tJ.$s,
                            children: (0, n.jsx)(eC.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: e6.ShareIcon,
                                text: er.intl.string(es.default.l34lLs),
                                onClick: p,
                            }),
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                ref: T,
                className: tJ.Vg,
                ...Y,
                tabIndex: -1,
                onKeyDown: Q,
                children: R.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: tJ.UX,
                            ...V(t),
                            children: e.map((e, a) => {
                                let s = { width: _ };
                                return (
                                    c && (s["--custom-entrance-delay"] = `${e8(u + t + a)}ms`),
                                    (0, n.jsx)(
                                        "div",
                                        {
                                            className: c ? e7.$ : void 0,
                                            style: s,
                                            children: (0, n.jsx)(eX, {
                                                clip: e,
                                                actionsDisabled: i,
                                                isNew: l.includes(e.id),
                                                onClick: o ?? r,
                                                onEdit: r,
                                                gridItemProps: K(a, t),
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
            F &&
                (0, n.jsx)("div", {
                    className: tJ.Vc,
                    children: (0, n.jsx)(eC.$, {
                        variant: "secondary",
                        size: "sm",
                        text: er.intl.string(es.default.pqk9U0),
                        onClick: A,
                    }),
                }),
        ],
    });
}
var t1 = l(799888);
function t2(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: i, onClipClick: s, isLoading: r, onScroll: o } = e,
        { enableAutoClipsReview: c } = t$.useConfig({ location: "ClipsGalleryHome" }),
        u = a.useMemo(() => tY(t), [t]),
        m = c && u.length > 0,
        h = (0, d.yK)([D.Ay], () => D.Ay.getNewClipIds()),
        f = (0, d.bG)([D.Ay], () => D.Ay.getExportingClipIds().size > 0),
        g = (0, e5.P)((e) => e.setActiveMainLink),
        p = a.useCallback(() => {
            g(U.oH.ALL_CLIPS);
        }, [g]),
        j = a.useMemo(() => {
            let e = m ? new Set(u.map((e) => e.id)) : null;
            return (function (e) {
                let t = [...e].sort((e, t) => t.createdAt - e.createdAt),
                    l = [],
                    n = null;
                for (let e of t) {
                    let t = n?.clips[n.clips.length - 1],
                        a = null != n && n.applicationId === e.applicationId,
                        i = null != t && t.createdAt - e.createdAt <= 144e5;
                    null != n && a && i
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
        }, [t, m, u]),
        v = (0, d.bG)([k.Ay], () => k.Ay.useReducedMotion),
        y = a.useMemo(() => {
            let e = [],
                t = 0;
            for (let l of j) (e.push(t), (t += Math.min(2, Math.ceil(l.clips.length / 3))));
            return e;
        }, [j]),
        C = a.useRef(null),
        b = a.useCallback((e, t) => {
            let l = C.current;
            if (null == l) return;
            let n = Array.from(l.querySelectorAll('[role="grid"]')),
                a = n.indexOf(t);
            if (-1 === a) return;
            let i = n["down" === e ? a + 1 : a - 1];
            if (null == i) return;
            let s = Array.from(i.querySelectorAll('[role="button"]')).filter((e) => /-\d+-\d+$/.test(e.id)),
                r = "down" === e ? s[0] : s[s.length - 1];
            r?.focus();
        }, []),
        A = a.useCallback(
            (e) => {
                o?.(e.currentTarget.scrollTop);
            },
            [o],
        );
    return j.length > 0 || m
        ? (0, n.jsx)(tV.Ch, {
              className: t1.iR,
              fade: !0,
              onScroll: A,
              children: (0, n.jsxs)("div", {
                  className: t1.Qs,
                  ref: C,
                  children: [
                      m &&
                          (0, n.jsx)("div", {
                              className: t1.Dk,
                              children: (0, n.jsx)(tX, { clips: t, onEdit: i, onEdgeNavigate: b }),
                          }),
                      j.length > 0 &&
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(x.D, {
                                      variant: "heading-lg/medium",
                                      color: "text-default",
                                      children: er.intl.string(es.default.zfTWDE),
                                  }),
                                  j.map((e, t) =>
                                      (0, n.jsx)(
                                          t0,
                                          {
                                              session: e,
                                              recentClipIds: h,
                                              actionsDisabled: f,
                                              onEdit: i,
                                              onClipClick: s,
                                              animateEntrance: !v,
                                              entranceRowOffset: y[t] ?? 0,
                                              onEdgeNavigate: b,
                                          },
                                          e.id,
                                      ),
                                  ),
                                  (0, n.jsx)("div", {
                                      className: t1.dp,
                                      children: (0, n.jsx)(eC.$, {
                                          variant: "primary",
                                          text: er.intl.string(es.default.RQtkop),
                                          onClick: p,
                                      }),
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : r
          ? (0, n.jsx)("div", { className: t1.dc, children: (0, n.jsx)(K.y, {}) })
          : (0, n.jsx)(eu, { isEmptyBecauseQuery: l > 0 });
}
var t3 = l(837381),
    t5 = l(741918),
    t8 = l(812993),
    t9 = l(332837),
    t7 = l(176781),
    t4 = l(650684),
    t6 = l(364522),
    le = l(625903),
    lt = l(260762),
    ll = l(599428);
function ln(e) {
    let { itemId: t, icon: l, label: a, onClick: i, isSelected: r = !1, isDisabled: o = !1, badgeCount: c = 0 } = e,
        d = o && !r,
        u = (0, t3.rm)(t);
    return (0, n.jsx)(p.m, {
        text: a,
        position: "right",
        children: (0, n.jsxs)(ep.D, {
            ...u,
            role: "button",
            onClick: d ? void 0 : i,
            "aria-pressed": r,
            "aria-disabled": d,
            "aria-label": a,
            className: s()(ll.AY, { [ll.Hy]: r, [ll.Is]: d }),
            children: [l, c > 0 && (0, n.jsx)("span", { className: ll.e, children: (0, n.jsx)(t8.hV, { count: c }) })],
        }),
    });
}
function la(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: i } = e,
        r = (0, e5.P)((e) => e.activeMainLink),
        o = (0, e5.P)((e) => e.gameFacet),
        c = (0, e5.P)((e) => e.clippedWithFacet),
        d = (0, e5.P)((e) => e.setActiveMainLink),
        u = (0, e5.P)((e) => e.setGameFacet),
        m = (0, e5.P)((e) => e.setClippedWithFacet),
        h = (0, e5.P)((e) => e.clearFilters),
        x = (0, e5.P)((e) => e.setPendingContentFocus),
        f = (0, tx.HN)(),
        g = null != o || null != c;
    function p(e) {
        return !g && r === e;
    }
    let j = a.useRef(!1),
        v = a.useCallback(() => {
            j.current && x(!0);
        }, [x]),
        y = a.useCallback(
            (e) => {
                (d(e), u(null), m(null), h(), v());
            },
            [d, u, m, h, v],
        ),
        C = a.useCallback(
            (e) => {
                (u(o === e ? null : e), m(null), d(U.oH.ALL_CLIPS), h(), v());
            },
            [o, u, m, d, h, v],
        ),
        b = a.useCallback(() => {
            (0, ee.openUserSettings)(J.X.CLIPS_PANEL);
        }, []),
        k = a.useMemo(() => t.map((e) => e.key), [t]),
        A = (0, w.A)(k),
        N = a.useMemo(() => new Map(A.map((e) => [e?.id, e])), [A]),
        E = (0, $.GV)(),
        L = (0, lt.A)(E),
        { setFocus: S } = L,
        I = o ?? r;
    a.useEffect(() => {
        S(I);
    }, [S, I]);
    let { ref: M, onKeyDown: D, ...T } = (0, t3.LT)(L),
        _ = a.useCallback(
            (e) => {
                j.current = e.key === t5.D$.ENTER || e.key === t5.D$.SPACE;
                try {
                    D(e);
                } finally {
                    j.current = !1;
                }
            },
            [D],
        );
    return (0, n.jsx)(t3.hD, {
        navigator: L,
        children: (0, n.jsxs)("div", {
            className: ll.H$,
            ...T,
            tabIndex: -1,
            onKeyDown: _,
            ref: M,
            children: [
                (0, n.jsxs)("div", {
                    className: s()(ll.o3, ll.A9),
                    children: [
                        (0, n.jsx)(ln, {
                            itemId: U.oH.HOME,
                            icon: (0, n.jsx)(t9.HomeIcon, { size: "sm", color: "currentColor" }),
                            label: er.intl.string(es.default.iVqj8B),
                            isSelected: p(U.oH.HOME),
                            onClick: () => y(U.oH.HOME),
                        }),
                        (0, n.jsx)(ln, {
                            itemId: U.oH.ALL_CLIPS,
                            icon: (0, n.jsx)(t7.x, { size: "sm", color: "currentColor" }),
                            label: er.intl.string(er.t.dPVrEv),
                            isSelected: p(U.oH.ALL_CLIPS),
                            isDisabled: 0 === l.allClips,
                            badgeCount: i.allClips,
                            onClick: () => y(U.oH.ALL_CLIPS),
                        }),
                        f &&
                            (0, n.jsx)(ln, {
                                itemId: U.oH.AUTO_CLIPS,
                                icon: (0, n.jsx)(t4.e, { size: "sm", color: "currentColor" }),
                                label: er.intl.string(es.default.ikNKf1),
                                isSelected: p(U.oH.AUTO_CLIPS),
                                isDisabled: 0 === l.autoClips,
                                badgeCount: i.autoClips,
                                onClick: () => y(U.oH.AUTO_CLIPS),
                            }),
                        (0, n.jsx)(ln, {
                            itemId: U.oH.FAVORITES,
                            icon: (0, n.jsx)(tt.StarIcon, { size: "sm", color: "currentColor" }),
                            label: er.intl.string(er.t["9rlCk1"]),
                            isSelected: p(U.oH.FAVORITES),
                            onClick: () => y(U.oH.FAVORITES),
                        }),
                    ],
                }),
                t.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { className: ll.Gz }),
                            (0, n.jsx)(t6.Ip, {
                                className: s()(ll.UZ, ll.A9),
                                fade: !0,
                                children: t.map((e) => {
                                    let t = o === e.key;
                                    return (0, n.jsx)(
                                        ln,
                                        {
                                            itemId: e.key,
                                            icon: (0, n.jsx)(P.A, {
                                                game: N.get(e.key),
                                                size: P.M.SMALL,
                                                className: ll.az,
                                            }),
                                            label: e.name,
                                            isSelected: t,
                                            isDisabled: e.isDisabled,
                                            badgeCount: e.newCount,
                                            onClick: () => C(e.key),
                                        },
                                        e.key,
                                    );
                                }),
                            }),
                        ],
                    }),
                (0, n.jsx)("div", {
                    className: s()(ll.Ms, ll.A9),
                    children: (0, n.jsx)(ln, {
                        itemId: "settings",
                        icon: (0, n.jsx)(le.SettingsIcon, { size: "sm", color: "currentColor" }),
                        label: er.intl.string(er.t["3D5yo/"]),
                        onClick: b,
                    }),
                }),
            ],
        }),
    });
}
var li = l(409067),
    ls = l(314484);
function lr(e) {
    let {
        channelId: t,
        onClose: i,
        onClipClick: G,
        transitionState: K,
        initialEditingClipId: V,
        initialMainLink: $ = U.oH.HOME,
        ...q
    } = e;
    (0, O.A)();
    let { analyticsLocations: B } = (0, N.Ay)(A.A.CLIPS_GALLERY),
        [Y, Q] = a.useState(new Set()),
        X = a.useRef(null),
        W = (0, b.A)((e) => {
            let t = X.current;
            if (null == t) return;
            let l = Math.min(1, Math.max(0, e) / 40);
            t.style.setProperty("--custom-clips-header-solid-opacity", `${l}`);
        }),
        {
            gamesFacet: Z,
            participantsFacet: J,
            filteredClips: ee,
            mainLinkCounts: et,
            mainLinkNewCounts: el,
            allClips: en,
        } = (0, li.ad)(),
        ea = (0, d.bG)([D.Ay], () => D.Ay.getSettings().storageLocation),
        [ei, eo] = a.useState(!0);
    a.useEffect(() => {
        (async function () {
            eo(!0);
            try {
                await (0, T.Fb)(ea);
            } finally {
                eo(!1);
            }
        })().catch(() => {});
    }, [ea]);
    let { onShareClick: ec } = (0, z.A)(t);
    (a.useEffect(
        () => () => {
            (e5.P.getState().resetAll(), (0, T.Su)());
        },
        [],
    ),
        a.useEffect(() => {
            let e = e5.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink($);
        }, [$]),
        (0, o.l0)(() => {
            D.Ay.hasClips() && S.A.isDeveloper && L.Ay.fireSurveyAction(c.w.POPULATED_CLIP_GALLERY_CLOSED);
        }));
    let ed = (0, d.bG)([D.Ay], () => D.Ay.getExportingClipIds().size > 0),
        [eu, em] = a.useState(null != V ? "editing" : "gallery"),
        [eh, ex] = a.useState(V ?? null),
        ef = (0, d.bG)([D.Ay], () => (null != eh ? D.Ay.getClipById(eh) : null), [eh]),
        eg = (0, u.useIsModalAtTop)(eG.nm),
        ep = a.useRef(eu);
    ((ep.current = eu), (a.useRef(eh).current = eh));
    let [ej, ev] = a.useState(null != V ? h.ip.ENTERED : h.ip.HIDDEN),
        ey = a.useRef(null),
        eC = (0, e5.P)((e) => e.gameFacet),
        eb = (0, e5.P)((e) => e.clippedWithFacet),
        ek = (0, e5.P)((e) => e.activeMainLink),
        eA = (0, e5.P)((e) => e.currentPage),
        eN = eA === U.fB.HOME,
        { ref: eE, height: ew = 64 } = (0, C.Ay)(eA),
        eP = 68 + ew,
        eL = eN ? 68 : eP - 16;
    a.useLayoutEffect(() => {
        W(0);
    }, [eA, W]);
    let eS = (0, e5.P)((e) => e.pendingContentFocus),
        eI = (0, e5.P)((e) => e.setPendingContentFocus),
        eM = a.useRef(null);
    a.useEffect(() => {
        if (!eS) return;
        let e = 0,
            t = 0;
        return (
            (t = requestAnimationFrame(function l() {
                let n = eM.current?.querySelector('[role="grid"] [role="button"]');
                if (null != n) {
                    (n.focus(), eI(!1));
                    return;
                }
                if (e++ < 10) {
                    t = requestAnimationFrame(l);
                    return;
                }
                eI(!1);
            })),
            () => cancelAnimationFrame(t)
        );
    }, [eS, eI]);
    let eD = (0, e5.P)(
        (e) =>
            "" !== e.query.trim() ||
            e.selectedGameIds.size > 0 ||
            e.selectedUserIds.size > 0 ||
            null != e.selectedGuildId ||
            null != e.selectedActivity ||
            null != e.dateFilter ||
            "all" !== e.clipMethodFilter,
    );
    a.useEffect(() => {
        ek === U.oH.HOME && eD && e5.P.getState().setActiveMainLink(U.oH.ALL_CLIPS);
    }, [ek, eD]);
    let eT = a.useMemo(() => (null != eC ? [eC] : []), [eC]),
        e_ = (0, w.A)(eT)[0] ?? null,
        eR = (0, d.bG)([I.default], () => (null != eb ? I.default.getUser(eb) : null), [eb]),
        eF = a.useMemo(() => {
            if (null != eC) return Z.find((e) => e.key === eC)?.name ?? er.intl.string(er.t.dPVrEv);
            if (null != eb) return null != eR ? (eR.globalName ?? eR.username) : eb;
            switch (ek) {
                case U.oH.FAVORITES:
                    return er.intl.string(er.t["9rlCk1"]);
                case U.oH.AUTO_CLIPS:
                    return er.intl.string(es.default.ikNKf1);
                case U.oH.HOME:
                    return er.intl.string(es.default.iVqj8B);
                default:
                    return er.intl.string(er.t.dPVrEv);
            }
        }, [eC, eb, ek, Z, eR]),
        eH = a.useMemo(() => {
            if (null != eC) return Z.find((e) => e.key === eC)?.count ?? 0;
            if (null != eb) return J.find((e) => e.key === eb)?.count ?? 0;
            switch (ek) {
                case U.oH.HOME:
                    return null;
                case U.oH.AUTO_CLIPS:
                    return et.autoClips;
                case U.oH.FAVORITES:
                    return et.favorites;
                default:
                    return et.allClips;
            }
        }, [eC, eb, ek, Z, J, et]),
        ez = a.useCallback(() => {
            (em("editing"), k.Ay.useReducedMotion && ev(h.ip.ENTERED));
        }, []),
        eO = a.useCallback((e) => {
            Q((t) => {
                let l = new Set(t);
                return (l.has(e) ? l.delete(e) : l.add(e), l);
            });
        }, []),
        eU = a.useCallback(
            (e) => {
                (ex(e.id), ez());
            },
            [ez],
        ),
        eK = a.useCallback(() => {
            (k.Ay.useReducedMotion && ex(null), em("gallery"));
        }, []);
    (a.useEffect(() => {
        function e(e) {
            "Escape" === e.key && "editing" === ep.current && eg && (e.stopPropagation(), eK());
        }
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [eK, i, eg]),
        a.useEffect(() => {
            function e(e) {
                if (
                    ("f" !== e.key && "F" !== e.key) ||
                    e.altKey ||
                    e.shiftKey ||
                    ((0, M.isMac)() ? !e.metaKey || e.ctrlKey : !e.ctrlKey || e.metaKey) ||
                    !eg ||
                    "gallery" !== ep.current
                )
                    return;
                (e.preventDefault(), e.stopPropagation());
                let t = e5.P.getState();
                (t.currentPage === U.fB.HOME && t.setActiveMainLink(U.oH.ALL_CLIPS), t.setPendingSearchFocus(!0));
            }
            return (document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0));
        }, [eg]),
        a.useEffect(
            () =>
                "editing" === eu && null != eh
                    ? void (0, T.YK)(eh)
                    : ((0, T.TE)(),
                      () => {
                          (0, T.TE)();
                      }),
            [eu, eh],
        ));
    let eV = a.useCallback(() => {
            Q(new Set());
        }, []),
        e$ = Y.size > 0,
        eq = a.useCallback(() => {
            let e = en.filter((e) => Y.has(e.id));
            (0, u.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("913367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, n.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                (eV(), l.onClose());
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [en, Y, eV]),
        eB = a.useCallback(async () => {
            let e = en.filter((e) => Y.has(e.id));
            (await ec({ clips: e }), eV());
        }, [en, Y, ec, eV]),
        eQ = a.useCallback(
            async (e) => {
                0 !== e.length && (Q(new Set(e.map((e) => e.id))), await ec({ clips: e }), eV());
            },
            [ec, eV],
        ),
        eX = a.useCallback(() => {
            let e = e5.P.getState();
            (e.setGameFacet(null),
                e.setClippedWithFacet(null),
                e.setActiveMainLink(U.oH.ALL_CLIPS),
                e.setPendingSearchFocus(!0));
        }, []),
        eW = a.useMemo(() => {
            let e = en.filter((e) => Y.has(e.id));
            return e.length > 0 && e.every((e) => e.isFavorite);
        }, [en, Y]),
        eZ = a.useCallback(async () => {
            let e = en.filter((e) => Y.has(e.id)),
                t = !eW;
            (await Promise.all(e.filter((e) => e.isFavorite !== t).map((e) => (0, T.Yy)(e.id, { isFavorite: t }, !0))),
                eV());
        }, [en, Y, eW, eV]),
        eJ = a.useMemo(() => {
            let e = 0,
                t = 0,
                l = 0;
            return (
                en.forEach((n) => {
                    switch (n.decision?.signal?.type) {
                        case eG.Gy.MANUAL:
                            l++;
                            break;
                        case eG.Gy.DISTRIBUTED:
                            t++;
                            break;
                        case void 0:
                            break;
                        default:
                            e++;
                    }
                }),
                {
                    number_of_clips_loaded: en.length,
                    num_autoclips_loaded: e,
                    num_distributed_clips_loaded: t,
                    num_manual_clips_loaded: l,
                    gallery_page: ek,
                }
            );
        }, [en, ek]);
    (0, E.A)(
        { type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.CLIP_GALLERY_VIEWED, properties: eJ },
        { disableTrack: ei },
        [eJ, ei],
    );
    let e0 = a.useMemo(
        () => ({
            selectedClipIds: Y,
            toggleClipSelection: eO,
            clearSelection: eV,
            isMultiSelectMode: e$,
            onSelectClip: G,
            onShareSession: eQ,
        }),
        [Y, eO, eV, e$, G, eQ],
    );
    return (0, n.jsx)(N.f5, {
        value: B,
        children: (0, n.jsx)(eY.$.Provider, {
            value: e0,
            children: (0, n.jsx)(m.N, {
                onClose: i,
                transitionState: K,
                ...q,
                children: (0, n.jsxs)("div", {
                    className: ls.jT,
                    ref: ey,
                    children: [
                        (0, n.jsxs)("div", {
                            className: s()(ls.PD, "gallery" === eu && ls.vu),
                            inert: "gallery" !== eu,
                            children: [
                                (0, n.jsx)(la, { gamesFacet: Z, mainLinkCounts: et, mainLinkNewCounts: el }),
                                (0, n.jsxs)("div", {
                                    className: ls.Qs,
                                    ref: eM,
                                    style: {
                                        "--custom-clips-header-height": "68px",
                                        "--custom-clips-scroll-inset": `${eL}px`,
                                    },
                                    children: [
                                        (0, n.jsxs)("div", {
                                            ref: X,
                                            className: s()(ls.$Q, !eN && ls.iF),
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: ls.ev,
                                                    children: [
                                                        null != eC &&
                                                            (0, n.jsx)(P.A, {
                                                                game: e_,
                                                                size: P.M.SMALL,
                                                                className: ls.Ve,
                                                                "aria-hidden": !0,
                                                            }),
                                                        (0, n.jsx)(x.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-default",
                                                            className: ls.Yn,
                                                            children: eF,
                                                        }),
                                                        null == eC &&
                                                            null == eb &&
                                                            ek === U.oH.AUTO_CLIPS &&
                                                            (0, n.jsx)(f.E, { type: "beta", variant: "brand" }),
                                                        null != eH &&
                                                            !eD &&
                                                            (0, n.jsxs)("div", {
                                                                className: ls.Vl,
                                                                children: [
                                                                    (0, n.jsx)("span", {
                                                                        className: ls.FK,
                                                                        "aria-hidden": "true",
                                                                    }),
                                                                    (0, n.jsx)(g.E, {
                                                                        variant: "text-md/normal",
                                                                        color: "text-muted",
                                                                        children: er.intl.format(es.default["+YIqQM"], {
                                                                            count: eH,
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                    ],
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: ls.$s,
                                                    children: [
                                                        (0, n.jsx)(p.m, {
                                                            text: er.intl.string(er.t["5h0QOP"]),
                                                            children: (0, n.jsx)(j.K, {
                                                                onClick: eX,
                                                                icon: v.MagnifyingGlassIcon,
                                                                size: "sm",
                                                                variant: "icon-only",
                                                                "aria-label": er.intl.string(er.t["5h0QOP"]),
                                                            }),
                                                        }),
                                                        (0, n.jsx)(j.K, {
                                                            onClick: i,
                                                            icon: y.XLargeIcon,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": er.intl.string(er.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        eN
                                            ? (0, n.jsx)(t2, {
                                                  filteredClips: ee,
                                                  totalClipCount: en.length,
                                                  onEdit: eU,
                                                  onClipClick: G,
                                                  isLoading: ei,
                                                  onScroll: W,
                                              })
                                            : (0, n.jsxs)("div", {
                                                  className: ls.LG,
                                                  children: [
                                                      (0, n.jsx)("div", {
                                                          className: ls.oP,
                                                          ref: eE,
                                                          children: (0, n.jsx)(tG, {
                                                              allClips: en,
                                                              gamesFacet: Z,
                                                              participantsFacet: J,
                                                          }),
                                                      }),
                                                      (0, n.jsx)(e4, {
                                                          onEdit: eU,
                                                          channelId: t,
                                                          filteredClips: ee,
                                                          totalClipCount: en.length,
                                                          onClipClick: G,
                                                          isLoading: ei,
                                                          topInset: eP,
                                                      }),
                                                  ],
                                              }),
                                        e$ &&
                                            (0, n.jsx)(ta, {
                                                selectedCount: Y.size,
                                                allSelectedFavorited: eW,
                                                onClear: eV,
                                                onFavorite: eZ,
                                                onDelete: eq,
                                                onShare: eB,
                                                isSharing: ed,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: s()(ls.jN, "editing" === eu && ls.vu),
                            inert: "editing" !== eu,
                            onTransitionEnd: () => {
                                switch (eu) {
                                    case "gallery":
                                        (ex(null), ev(h.ip.HIDDEN));
                                        break;
                                    case "editing":
                                        ev(h.ip.ENTERED);
                                }
                            },
                            children:
                                null != ef &&
                                (0, n.jsx)(_.p, {
                                    clip: ef,
                                    modalContainerRef: ey,
                                    children: (0, n.jsxs)(
                                        H.JQ,
                                        {
                                            children: [
                                                (0, n.jsx)(F.A, { transitionState: ej, onClose: eK }),
                                                (0, n.jsx)(R.A, { channelId: t, onClose: eK }),
                                            ],
                                        },
                                        ef.id,
                                    ),
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
