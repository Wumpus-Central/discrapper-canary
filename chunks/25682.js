l.d(t, { default: () => lo });
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
    w = l(139286),
    P = l(429913),
    E = l(769015),
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
    ew = l(587895),
    eP = l(549973),
    eE = l(549685),
    eL = l(174459),
    eS = l(403362),
    eI = l(53677),
    eM = l(609174),
    eD = l(619744),
    eT = l(82716),
    e_ = l(449397),
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
    eQ = l(686320),
    eX = l(175764);
function eW(e) {
    let { clip: t, actionsDisabled: l, isNew: a, onClick: i, onEdit: s, gridItemProps: r } = e;
    return (0, n.jsx)(eM.Cl, {
        clip: t,
        children: (0, n.jsx)(eZ, { actionsDisabled: l, isNew: a, onClick: i, onEdit: s, gridItemProps: r }),
    });
}
function eZ(e) {
    let { actionsDisabled: t, isNew: i, onClick: r, onEdit: o, gridItemProps: c } = e,
        u = (0, eM.Y_)(),
        m = !0 === u.pending,
        h = t || m,
        { analyticsLocations: x } = (0, N.Ay)(A.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: f, toggleClipSelection: g, isMultiSelectMode: p, picker: j } = a.useContext(eY.$),
        v = j?.allowMultiSelect ?? !0,
        y = null != j ? (0, eQ.$)(j.action).label : void 0,
        [C, b] = a.useState(!1),
        [w, P] = a.useState(!1),
        [E, L] = a.useState(!1),
        [S, I] = a.useState(!1),
        [M, T] = a.useState(0),
        _ = f.has(u.id),
        R = u.type === eG.nQ.SCREENSHOT,
        F = "auto" === u.clipMethod,
        H = (0, d.bG)([k.Ay], () => k.Ay.keyboardModeEnabled),
        z = (w || C || (E && H)) && !_,
        O = a.useCallback(() => L(!0), []),
        U = a.useCallback((e) => {
            e.currentTarget.contains(e.relatedTarget) || L(!1);
        }, []);
    a.useEffect(() => {
        if (!z || R || m) return;
        let e = window.setTimeout(() => I(!0), 150);
        return () => {
            (window.clearTimeout(e), I(!1));
        };
    }, [z, R, m]);
    let G = a.useRef(null),
        V = a.useCallback(() => {
            G.current?.releaseSource();
        }, []),
        $ = a.useCallback((e) => {
            G.current?.seek(e);
        }, []),
        q = a.useCallback(() => b(!1), []),
        B = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), g(u.id));
            },
            [g, u.id],
        ),
        Y = a.useCallback(
            (e) => {
                b(!0);
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
                            l.e("6896"),
                        ]).then(l.bind(l, 553075));
                        return (l) =>
                            (0, n.jsx)(e, {
                                ...l,
                                analyticsLocations: x,
                                clips: t,
                                actionsDisabled: h,
                                onMainAction: null != j ? () => j.onPick(u) : void 0,
                                mainAction: j?.action,
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
                                onBeforeDelete: V,
                                onAfterDelete: () => {
                                    eL.default.track(ei.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...eI.lc(),
                                        ...eI.Zy(u),
                                    });
                                },
                            });
                    },
                    { onClose: q },
                );
            },
            [u, p, f, h, q, o, V, j, x],
        ),
        Q = a.useCallback(
            (e) => {
                h || (e.preventDefault(), e.stopPropagation(), Y(e));
            },
            [h, Y],
        ),
        X = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), Y(e));
            },
            [Y],
        ),
        W = a.useCallback(
            (e) => {
                (e.preventDefault(),
                    e.stopPropagation(),
                    o(u),
                    eL.default.track(ei.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" }));
            },
            [o, u],
        ),
        Z = a.useCallback(
            (e) => {
                !h &&
                    (!(0, eh.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") &&
                            null == e.target.closest("[data-clips-progress]") &&
                            null == e.target.closest("[data-clips-select]") &&
                            e.currentTarget.contains(e.target))) &&
                    (v && e.shiftKey ? (e.preventDefault(), g(u.id)) : v && p ? g(u.id) : null != r && r(u),
                    eL.default.track(ei.HAw.CLIP_GALLERY_CARD_CLICKED, { ...eI.lc(), ...eI.Zy(u) }));
            },
            [h, v, p, g, u, r],
        );
    return (0, n.jsx)(N.f5, {
        value: x,
        children: (0, n.jsx)("div", {
            className: eX.hl,
            onFocus: O,
            onBlur: U,
            children: (0, n.jsx)(eg.s, {
                "aria-disabled": h,
                "aria-label": y ?? er.intl.string(R ? er.t["HO/oXl"] : er.t.bt75uw),
                onClick: h ? void 0 : Z,
                onContextMenu: Q,
                buttonProps: null != c ? { role: "button", id: c.id, tabIndex: c.tabIndex } : void 0,
                buttonRef: c?.ref,
                onFocus: c?.onFocus,
                className: s()(eX.Nr, { [eX.r9]: h, [eX.in]: C, [eX.wH]: _ }),
                onMouseEnter: () => P(!0),
                onMouseLeave: () => P(!1),
                children: (0, n.jsx)("div", {
                    className: eX.w7,
                    children: (0, n.jsxs)(eJ, {
                        ref: G,
                        isPlaying: S,
                        onProgressChange: T,
                        children: [
                            m && (0, n.jsx)("div", { className: eX.mi, children: (0, n.jsx)(K.y, {}) }),
                            (0, n.jsx)("div", {
                                className: s()(eX.w$, { [eX.t7]: z, [eX.Vg]: F }),
                                inert: !0,
                                "aria-hidden": "true",
                            }),
                            (0, n.jsx)(e0, {
                                isNew: i,
                                showHoverActions: z && !h,
                                showSelect: v && (z || _),
                                isSelected: _,
                                onToggleSelect: B,
                                onMenu: X,
                                onBeforeDelete: V,
                            }),
                            (0, n.jsx)(e1, { showHoverState: z, playbackProgress: M, onEdit: W, onSeek: $ }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
let eJ = a.forwardRef((e, t) => {
    let { isPlaying: l, onProgressChange: a, children: i } = e;
    return (0, n.jsx)(eR.d, {
        ref: t,
        isPlaying: l,
        preload: "none",
        onProgressChange: a,
        children: (0, n.jsx)(eF.h, { isVisible: !0, className: eX.Lw, children: i }),
    });
});
function e0(e) {
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
        className: eX.wx,
        children: [
            (0, n.jsxs)("div", {
                className: eX.LD,
                children: [
                    a &&
                        (0, n.jsx)(ep.D, {
                            "aria-label": er.intl.string(er.t.XqMe3N),
                            "aria-pressed": i,
                            onClick: r,
                            "data-clips-select": "true",
                            className: s()(eX.UJ, { [eX.ZK]: i }),
                            children: i && (0, n.jsx)(ej.B, { size: "xs", color: "currentColor" }),
                        }),
                    !u &&
                        t &&
                        (0, n.jsx)("div", {
                            className: eX.Ad,
                            children: (0, n.jsx)(g.E, {
                                variant: "text-xs/bold",
                                color: "text-overlay-light",
                                children: er.intl.string(er.t.y2b7CA),
                            }),
                        }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: eX.IE,
                children: [
                    (d.isFavorite || l) &&
                        (0, n.jsx)("div", {
                            className: s()({ [eX.L6]: d.isFavorite }),
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
function e1(e) {
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
        v = (0, eP.e)({ timestamp: o.createdAt }),
        y = o.decision?.signal?.type,
        C = null != y && y !== eG.Gy.MANUAL,
        b =
            j.length > 0
                ? (0, n.jsx)("span", {
                      className: eX.HD,
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
        className: eX.qr,
        children: (0, n.jsxs)("div", {
            className: eX.Zn,
            children: [
                (0, n.jsxs)("div", {
                    className: eX.$,
                    children: [
                        (0, n.jsxs)("div", { className: eX.gH, children: [(0, n.jsx)(e5, {}), (0, n.jsx)(e3, {})] }),
                        t ? b : null,
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: s()(eX.SO, { [eX.AK]: t && !c, [eX.I_]: t && c }),
                    children: [
                        (0, n.jsxs)("div", {
                            className: s()(eX.KW, { [eX.g3]: t }),
                            inert: t,
                            "aria-hidden": t,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: eX.Tf,
                                    children: [
                                        (0, n.jsx)(eq, { clip: o }),
                                        C && (0, n.jsx)("span", { className: eX.TG, "aria-hidden": "true" }),
                                        b,
                                        (0, n.jsx)(g.E, {
                                            variant: "text-xs/normal",
                                            color: "none",
                                            children: er.intl.format(es.default["0QCBug"], { time: v }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", { className: eX.av, children: (0, n.jsx)(e2, {}) }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: s()(eX.Ax, { [eX.Mg]: t }),
                            inert: !t,
                            children: [
                                !c &&
                                    (0, n.jsx)("div", {
                                        ref: u,
                                        className: eX.hr,
                                        onPointerDown: x,
                                        onPointerMove: f,
                                        onPointerUp: p,
                                        "data-clips-progress": "true",
                                        "aria-hidden": "true",
                                        children: (0, n.jsx)("div", {
                                            className: eX.z5,
                                            children: (0, n.jsx)("div", {
                                                className: eX.TE,
                                                style: { width: `${l}%` },
                                                children: (0, n.jsx)("div", {
                                                    className: eX.GT,
                                                    "aria-hidden": "true",
                                                }),
                                            }),
                                        }),
                                    }),
                                (0, n.jsxs)("div", {
                                    className: eX.E_,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: eX.lO,
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
                                            className: eX.lO,
                                            children: (0, n.jsx)(e_.e, { variant: "primary" }),
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
function e2() {
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
              className: eX.p0,
              children: [
                  i && (0, n.jsx)(eE.A, { color: "white", width: 14, height: 14 }),
                  (0, n.jsx)(g.E, {
                      variant: "text-xs/medium",
                      color: "text-overlay-light",
                      tabularNumbers: !0,
                      children: l ? er.intl.string(er.t["2Fp7OP"]) : s,
                  }),
              ],
          });
}
function e3() {
    let e = (0, eM.Y_)(),
        t = (0, eB.h)(e),
        l = "" !== t;
    return (0, n.jsx)(g.E, {
        className: eX.DD,
        variant: "text-sm/semibold",
        color: "text-overlay-light",
        children: l ? t : e.name,
    });
}
function e5() {
    let e = (0, eM.Y_)(),
        t = (0, d.bG)([ew.A], () => (null != e.applicationId ? ew.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, n.jsx)("div", {
        className: eX.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, n.jsx)("img", { src: l, alt: "", className: eX.T_ })
                : e.type === eG.nQ.VOICE_CLIP
                  ? (0, n.jsx)(ek.H, { size: "xs", color: "currentColor" })
                  : (0, n.jsx)(eA.k, { size: "xs", color: "currentColor" }),
    });
}
eJ.displayName = "CardThumbnail";
var e8 = l(792852);
function e9(e) {
    return Math.min(45 * e, 520);
}
var e7 = l(91440),
    e4 = l(762831);
function e6(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: i, onEdit: s, isLoading: r, topInset: o = 0 } = e,
        [c, u] = a.useState({ width: 0, height: 0 }),
        m = (0, d.yK)([D.Ay], () => D.Ay.getNewClipIds()),
        h = (0, d.bG)([D.Ay], () => D.Ay.getExportingClipIds().size > 0),
        f = (0, e8.P)((e) => e.activeMainLink),
        p = (0, e8.P)((e) => e.gameFacet),
        j = (0, e8.P)((e) => e.clippedWithFacet),
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
        w = a.useRef(null),
        P = a.useMemo(() => {
            let e = Math.max(1, A),
                t = [];
            for (let l of v) {
                let n = Math.ceil(l.clips.length / e);
                for (let a = 0; a < n; a++) t.push(Math.min(e, l.clips.length - a * e));
            }
            return t;
        }, [v, A]),
        E = a.useCallback(
            (e, t, l) =>
                new Promise((e) => {
                    w.current?.scrollRowIntoView(t);
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
        } = (0, G.A)({ navId: N, columnCounts: P, prepareFocus: E }),
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
                        className: e7.UX,
                        ...I(e),
                        children: c.map((t, l) => {
                            let a = { width: b };
                            return (
                                F && (a["--custom-entrance-delay"] = `${e9(e + l)}ms`),
                                (0, n.jsx)(
                                    "div",
                                    {
                                        className: F ? e4.$ : void 0,
                                        style: a,
                                        children: (0, n.jsx)(eW, {
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
                              className: e7.aE,
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
                                          className: e7.yV,
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
    if (r && 0 === v.length) return (0, n.jsx)("div", { className: e7.dc, children: (0, n.jsx)(K.y, {}) });
    let U = (0, n.jsx)(V.A, {
            ref: w,
            role: "none presentation",
            className: e7.Vb,
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
    return (0, n.jsx)("div", { className: e7.UT, ...B, children: U });
}
var te = l(405433),
    tt = l(241326),
    tl = l(27232),
    tn = l(505930),
    ta = l(322911);
function ti(e) {
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
            icon: te.ShareIcon,
            text: er.intl.string(er.t.RDE0Sc),
            onClick: r,
            disabled: c,
            loading: o,
        });
    return (0, n.jsxs)("div", {
        "aria-label": er.intl.string(er.t.z2jK6X),
        role: "region",
        className: ta.M0,
        children: [
            (0, n.jsxs)("div", {
                className: ta.h5,
                children: [
                    (0, n.jsx)(g.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: er.intl.format(es.default.cSfYIv, { count: t }),
                    }),
                    (0, n.jsx)("span", { className: ta.Om, "aria-hidden": "true" }),
                    (0, n.jsx)(ep.D, {
                        className: ta.IU,
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
                className: ta.o1,
                children: [
                    (0, n.jsx)(p.m, {
                        text: er.intl.string(er.t.oyYWHE),
                        children: (0, n.jsx)(j.K, {
                            onClick: s,
                            icon: tt.TrashIcon,
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
                                icon: l ? tl.StarIcon : tn.y,
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
var ts = l(922016),
    tr = l(847374),
    to = l(980707),
    tc = l(477782),
    td = l(112173),
    tu = l(97808),
    tm = l(683438),
    th = l(548118),
    tx = l(71393),
    tf = l(341923),
    tg = l(441349),
    tp = l(305866),
    tj = l(789645),
    tv = l(620409),
    ty = l(569737);
function tC(e) {
    return (e.setHours(0, 0, 0, 0), e.getTime());
}
function tb(e) {
    return (e.setHours(23, 59, 59, 999), e.getTime());
}
function tk(e, t) {
    if (null == e && null == t) return null;
    let l = (0, tv.Xj)();
    return { preset: "custom", after: null != e ? tC(e.toDate(l)) : null, before: null != t ? tb(t.toDate(l)) : null };
}
function tA(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new ty.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let tN = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function tw(e) {
    return tN.format(new Date(e));
}
function tP(e) {
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
            let t = null != e.after ? tw(e.after) : null,
                l = null != e.before ? tw(e.before) : null;
            if (null != t && null != l)
                return er.intl.formatToPlainString(es.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return er.intl.formatToPlainString(es.default.k1FkTL, { date: t });
            if (null != l) return er.intl.formatToPlainString(es.default["4NlpHD"], { date: l });
            return er.intl.string(es.default.tv9apA);
        }
    }
}
var tE = l(435021);
function tL(e) {
    let { closePopout: t } = e,
        l = (0, e8.P)((e) => e.dateFilter),
        i = (0, e8.P)((e) => e.setDateFilter),
        [r, o] = a.useState(l?.preset === "custom"),
        [c, d] = a.useState(() => (l?.preset === "custom" ? tA(l.after) : null)),
        [u, m] = a.useState(() => (l?.preset === "custom" ? tA(l.before) : null)),
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
        v = a.useMemo(() => (0, tv.Ec)((0, tv.Xj)()), []),
        y = a.useCallback(
            (e) => {
                (i(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: tC(new Date(t)), before: tb(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: tC(new Date(l)), before: tb(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 2), { preset: e, after: tC(l), before: tb(new Date(t)) }
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
                (d(e), i(tk(e, u)));
            },
            [u, i],
        ),
        k = a.useCallback(
            (e) => {
                (m(e), i(tk(c, e)));
            },
            [c, i],
        ),
        A = a.useCallback(() => {
            (d(null), m(null), i(null));
        }, [i]),
        N = null != c || null != u,
        w = a.useRef(null),
        P = a.useCallback(() => Array.from(w.current?.querySelectorAll('[role="button"]') ?? []), []),
        E = a.useCallback(
            (e) => {
                if ("ArrowDown" !== e.key && "ArrowUp" !== e.key) return;
                let t = P();
                if (0 === t.length) return;
                (e.preventDefault(), e.stopPropagation());
                let l = t.indexOf(e.target);
                if (-1 === l) return void ("ArrowDown" === e.key ? t[0] : t[t.length - 1])?.focus();
                let n = Math.min(t.length - 1, Math.max(0, l + ("ArrowDown" === e.key ? 1 : -1)));
                t[n]?.focus();
            },
            [P],
        ),
        L = a.useCallback(
            (e) => {
                let l = e.relatedTarget;
                (null != l && (e.currentTarget.contains(l) || null != l.closest('[role="dialog"]'))) || t();
            },
            [t],
        );
    return (0, n.jsx)(tp.l, {
        "aria-label": er.intl.string(es.default.upqksT),
        onBlur: L,
        children: (0, n.jsxs)("div", {
            className: s()(tE.SW, r && tE.Td),
            children: [
                (0, n.jsxs)("div", {
                    className: tE.sh,
                    children: [
                        (0, n.jsx)(g.E, {
                            variant: "eyebrow",
                            color: "text-muted",
                            className: tE.a9,
                            children: er.intl.string(es.default.upqksT),
                        }),
                        (0, n.jsxs)("div", {
                            ref: w,
                            className: tE.eF,
                            onKeyDown: E,
                            children: [
                                h.map((e) =>
                                    (0, n.jsx)(
                                        ep.D,
                                        {
                                            className: s()(tE.zD, f === e.key && tE.pH),
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
                                    className: s()(tE.zD, tE.Kl, (r || "custom" === x) && tE.pH),
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
                                            className: tE.Xt,
                                            children: r ? "\u25C0" : "\u25B6",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: tE.ML,
                    "aria-hidden": !r,
                    children: [
                        (0, n.jsxs)("div", {
                            className: tE.U6,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: tE._2,
                                    children: [
                                        (0, n.jsx)(g.E, {
                                            variant: "eyebrow",
                                            color: "text-muted",
                                            className: tE.bk,
                                            "aria-hidden": !0,
                                            children: er.intl.string(es.default["96vZuU"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tE.h0,
                                            children: [
                                                (0, n.jsx)(tg.l, {
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
                                                            icon: tj.P,
                                                            onClick: () => b(null),
                                                            "aria-label": er.intl.string(er.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: tE._2,
                                    children: [
                                        (0, n.jsx)(g.E, {
                                            variant: "eyebrow",
                                            color: "text-muted",
                                            className: tE.bk,
                                            "aria-hidden": !0,
                                            children: er.intl.string(es.default["GL51/b"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tE.h0,
                                            children: [
                                                (0, n.jsx)(tg.l, {
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
                                                            icon: tj.P,
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
                                className: tE.dS,
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
var tS = l(91871),
    tI = l.n(tS),
    tM = l(190199),
    tD = l(914427),
    tT = l(724141);
function t_(e) {
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
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => tI()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, n.jsxs)(
                            tM.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, n.jsx)("span", { className: tT.H, children: e.icon }),
                                    (0, n.jsx)(tM.x4.Label, { children: e.label }),
                                    r ? (0, n.jsx)(tM.x4.Checkbox, {}) : (0, n.jsx)(tM.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        h = i.size > 0 ? `${t} (${i.size})` : t;
    return (0, n.jsx)(ts.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(tD.p, {
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
                icon: tr.a,
                iconPosition: "end",
            }),
    });
}
var tR = l(187671);
function tF(e) {
    let { label: t, icon: l, onRemove: a, removeAriaLabel: i } = e;
    return (0, n.jsxs)("div", {
        className: tR.Io,
        children: [
            null != l && (0, n.jsx)("span", { className: tR.Kk, children: l }),
            (0, n.jsx)(g.E, {
                className: tR.Pf,
                variant: "text-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, n.jsx)(ep.D, {
                className: tR.DT,
                onClick: a,
                "aria-label": i ?? er.intl.string(er.t.N86XcP),
                children: (0, n.jsx)(tj.P, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var tH = l(401756);
let tz = { all: es.default.lscwjQ, auto: es.default.xrOIkz, manual: es.default.D7HSLJ };
function tO() {
    let e = (0, e8.P)((e) => e.dateFilter),
        t = a.useRef(null),
        l = null != e ? tP(e) : er.intl.string(es.default.upqksT);
    return (0, n.jsx)(ts.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(tL, { closePopout: t });
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
function tU() {
    let e = (0, e8.P)((e) => e.sortOrder),
        t = (0, e8.P)((e) => e.setSortOrder),
        l = a.useRef(null),
        i = e === U.mu.OLDEST ? er.intl.string(er.t["0gitSE"]) : er.intl.string(er.t["4LLKx3"]);
    return (0, n.jsx)(ts.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, n.jsx)(to.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": er.intl.string(er.t.XvNMNk),
                onClose: a,
                onSelect: void 0,
                children: (0, n.jsxs)(tc.rX, {
                    children: [
                        (0, n.jsx)(tc.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: er.intl.string(er.t["4LLKx3"]),
                            action: () => {
                                (t(U.mu.MOST_RECENT), a());
                            },
                            checked: e === U.mu.MOST_RECENT,
                        }),
                        (0, n.jsx)(tc.iD, {
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
            (0, n.jsx)(eC.$, { ...e, buttonRef: l, size: "sm", variant: "secondary", text: i, icon: td.J }),
    });
}
function tG() {
    let e = (0, e8.P)((e) => e.clipMethodFilter),
        t = (0, e8.P)((e) => e.setClipMethodFilter),
        l = a.useRef(null);
    return (0, n.jsx)(ts.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, n.jsx)(to.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": er.intl.string(es.default["kIqbb/"]),
                onClose: a,
                onSelect: void 0,
                children: (0, n.jsxs)(tc.rX, {
                    children: [
                        (0, n.jsx)(tc.iD, {
                            id: "method-all",
                            group: "method",
                            label: er.intl.string(es.default.lscwjQ),
                            action: () => {
                                (t("all"), a());
                            },
                            checked: "all" === e,
                        }),
                        (0, n.jsx)(tc.iD, {
                            id: "method-auto",
                            group: "method",
                            label: er.intl.string(es.default.xrOIkz),
                            action: () => {
                                (t("auto"), a());
                            },
                            checked: "auto" === e,
                        }),
                        (0, n.jsx)(tc.iD, {
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
                icon: tr.a,
                iconPosition: "end",
            }),
    });
}
function tK(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: i } = e,
        s = (0, e8.P)((e) => e.query),
        r = (0, e8.P)((e) => e.setQuery),
        o = (0, e8.P)((e) => e.pendingSearchFocus),
        c = (0, e8.P)((e) => e.setPendingSearchFocus),
        d = a.useRef(null),
        u = (0, e8.P)((e) => e.activeMainLink),
        m = (0, e8.P)((e) => e.clipMethodFilter),
        h = (0, e8.P)((e) => e.setClipMethodFilter),
        x = (0, e8.P)((e) => e.gameFacet),
        f = (0, e8.P)((e) => e.clippedWithFacet),
        g = (0, e8.P)((e) => e.selectedGameIds),
        p = (0, e8.P)((e) => e.selectedUserIds),
        j = (0, e8.P)((e) => e.selectedGuildId),
        v = (0, e8.P)((e) => e.selectedActivity),
        y = (0, e8.P)((e) => e.dateFilter),
        C = (0, e8.P)((e) => e.toggleGameId),
        b = (0, e8.P)((e) => e.toggleUserId),
        k = (0, e8.P)((e) => e.setSelectedGuildId),
        A = (0, e8.P)((e) => e.setSelectedActivity),
        N = (0, e8.P)((e) => e.setDateFilter),
        w = (0, e8.P)((e) => e.clearFilters);
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
        M = (0, P.A)(S),
        D = a.useMemo(() => new Map(M.map((e) => [e?.id, e])), [M]),
        T = a.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, n.jsx)(E.A, { game: D.get(e.key), size: E.M.XSMALL }),
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
                        let t = tx.A.getGuild(e);
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
                    icon: (0, n.jsx)(th.Ay, { guild: e.guild, size: th.Ay.Sizes.MINI }),
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
                    icon: (0, n.jsx)(tu.eu, { src: e.avatarUrl, size: ey._3.SIZE_20, "aria-hidden": !0 }),
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
        B = (0, tf.HN)() && u !== U.oH.AUTO_CLIPS,
        Y = er.intl.string(tz[m]),
        Q = (0, n.jsxs)(n.Fragment, {
            children: [
                $ &&
                    Array.from(g).map((e) => {
                        let t = T.find((t) => t.key === e);
                        return (0, n.jsx)(
                            tF,
                            {
                                label: t?.label ?? e,
                                icon: (0, n.jsx)(E.A, { game: D.get(e), size: E.M.XSMALL }),
                                onRemove: () => C(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != y && (0, n.jsx)(tF, { label: tP(y), onRemove: () => N(null) }, "date"),
                null != j &&
                    (0, n.jsx)(
                        tF,
                        {
                            label: R.find((e) => e.key === j)?.label ?? j,
                            icon:
                                null != F.get(j)
                                    ? (0, n.jsx)(th.Ay, { guild: F.get(j), size: th.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => k(null),
                        },
                        "guild",
                    ),
                q && Array.from(p).map((e) => (0, n.jsx)(tV, { userId: e, onRemove: () => b(e) }, `user-${e}`)),
                null != v && (0, n.jsx)(tF, { label: v, onRemove: () => A(null) }, "activity"),
                B && "all" !== m && (0, n.jsx)(tF, { label: Y, onRemove: () => h("all") }, "method"),
            ],
        }),
        X = ($ && g.size > 0) || null != y || null != j || (q && p.size > 0) || null != v || (B && "all" !== m);
    return (0, n.jsxs)("div", {
        className: tH.kT,
        children: [
            (0, n.jsxs)("div", {
                className: tH.HL,
                children: [
                    (0, n.jsx)("div", {
                        className: tH.MT,
                        children: (0, n.jsx)(tm.I, {
                            ref: d,
                            placeholder: er.intl.string(er.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: tH.Zq,
                        children: [
                            B && (0, n.jsx)(tG, {}),
                            $ &&
                                T.length > 0 &&
                                (0, n.jsx)(t_, {
                                    triggerLabel: er.intl.string(er.t.URyqtP),
                                    options: T,
                                    selectedKeys: g,
                                    onToggle: C,
                                    multiSelect: !0,
                                    searchPlaceholder: er.intl.string(er.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(tO, {}),
                            R.length > 0 &&
                                (0, n.jsx)(t_, {
                                    triggerLabel: er.intl.string(er.t["5qyruI"]),
                                    options: R,
                                    selectedKeys: O,
                                    onToggle: K,
                                    multiSelect: !1,
                                    searchPlaceholder: er.intl.string(er.t["5h0QOP"]),
                                }),
                            q &&
                                z.length > 0 &&
                                (0, n.jsx)(t_, {
                                    triggerLabel: er.intl.string(er.t.YQ6dJg),
                                    options: z,
                                    selectedKeys: p,
                                    onToggle: (e) => b(e),
                                    multiSelect: !0,
                                    searchPlaceholder: er.intl.string(er.t["5h0QOP"]),
                                }),
                            H.length > 0 &&
                                (0, n.jsx)(t_, {
                                    triggerLabel: er.intl.string(er.t.agRtPG),
                                    options: H,
                                    selectedKeys: G,
                                    onToggle: V,
                                    multiSelect: !1,
                                    searchPlaceholder: er.intl.string(er.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(tU, {}),
                        ],
                    }),
                ],
            }),
            X &&
                (0, n.jsxs)("div", {
                    className: tH.eH,
                    children: [
                        Q,
                        (0, n.jsx)(W.Q, {
                            size: "sm",
                            variant: "primary",
                            text: er.intl.string(er.t.O8k7O4),
                            onClick: w,
                        }),
                    ],
                }),
        ],
    });
}
function tV(e) {
    let { userId: t, onRemove: l } = e,
        a = (0, d.bG)([I.default], () => I.default.getUser(t), [t]);
    if (null == a) return null;
    let i = a.globalName ?? a.username;
    return (0, n.jsx)(tF, {
        label: i,
        icon: (0, n.jsx)(tu.eu, { src: a.getAvatarURL(null, 32), size: ey._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
var t$ = l(689175);
let tq = (0, l(945810).mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var tB = l(449543),
    tY = l(152858);
function tQ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var tX = l(329924);
function tW(e) {
    let { clips: t, onEdit: l, onEdgeNavigate: i } = e,
        s = a.useMemo(() => tQ(t), [t]),
        r = (0, e8.P)((e) => e.setActiveMainLink),
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
              className: tX.uW,
              "aria-label": er.intl.string(es.default.efLpNC),
              children: [
                  (0, n.jsxs)("div", {
                      className: tX.wx,
                      children: [
                          (0, n.jsxs)("div", {
                              className: tX.mX,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: tX.UP,
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
                                      className: tX.DD,
                                      children: er.intl.string(es.default.efLpNC),
                                  }),
                              ],
                          }),
                          (0, n.jsx)("div", {
                              className: tX.BX,
                              children: (0, n.jsx)(eC.$, {
                                  variant: "overlay-primary",
                                  size: "sm",
                                  onClick: () => r(U.oH.AUTO_CLIPS),
                                  text: er.intl.string(es.default.gCay1w),
                              }),
                          }),
                      ],
                  }),
                  (0, n.jsx)(tB.A, {
                      className: tX.jG,
                      gap: 16,
                      edgeFade: 0,
                      scrollBehavior: tY.Uf.ITEM,
                      hideActionsWhenDisabled: !0,
                      "aria-label": er.intl.string(es.default.efLpNC),
                      gridContainerProps: v,
                      gridRowProps: m(0),
                      children: s.map((e, t) =>
                          (0, n.jsx)(
                              "div",
                              {
                                  className: tX.v2,
                                  children: (0, n.jsx)(eW, {
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
var tZ = l(770178),
    tJ = l(202163),
    t0 = l(68408);
function t1(e) {
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
        { gameRecord: h } = (0, tJ.A)(t.applicationId),
        { onShareSession: f } = a.useContext(eY.$),
        p = a.useCallback(() => {
            f?.(t.clips);
        }, [f, t.clips]),
        j = (0, e8.P)((e) => e.setGameFacet),
        v = (0, e8.P)((e) => e.setActiveMainLink),
        y = t.applicationId,
        C = null != y && "" !== y,
        k = a.useCallback(() => {
            null != y && "" !== y && (j(y), v(U.oH.ALL_CLIPS));
        }, [y, j, v]),
        A = a.useCallback(() => {
            C ? k() : v(U.oH.ALL_CLIPS);
        }, [C, k, v]),
        N = a.useMemo(() => (null == h ? null : (h.getBannerURL(1024) ?? h.screenshotUrls?.[0] ?? null)), [h]),
        w = (0, d.yK)([I.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => I.default.getUser(e)).filter(eS.Vq);
        }),
        P = a.useMemo(() => t.clips.filter((e) => "auto" === e.clipMethod).length, [t.clips]),
        L = (0, eP.e)({ timestamp: t.startedAt }),
        [S, M] = a.useState(800),
        D = (0, b.A)((e) => {
            M(e.target.clientWidth);
        }),
        T = (0, tZ.w)(D),
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
        className: t0.dZ,
        children: [
            (0, n.jsx)("div", {
                className: s()(t0.tB, null == N && t0.rD),
                style: null != N ? { backgroundImage: `url(${N})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, n.jsxs)("div", {
                className: t0.wx,
                children: [
                    C
                        ? (0, n.jsx)(eg.s, {
                              "aria-label": t.applicationName,
                              onClick: k,
                              className: t0.Zn,
                              children: (0, n.jsx)(E.A, {
                                  className: t0.Gt,
                                  game: h,
                                  size: E.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, n.jsx)(E.A, { className: t0.Gt, game: h, size: E.M.MEDIUM, "aria-hidden": !0 }),
                    (0, n.jsxs)("div", {
                        className: t0.TK,
                        children: [
                            C
                                ? (0, n.jsx)(eg.s, {
                                      "aria-label": t.applicationName,
                                      onClick: k,
                                      className: t0.wb,
                                      children: (0, n.jsx)(x.D, {
                                          variant: "text-md/medium",
                                          color: "text-default",
                                          className: t0.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, n.jsx)(x.D, {
                                      variant: "text-md/medium",
                                      color: "text-default",
                                      className: t0.mO,
                                      children: t.applicationName,
                                  }),
                            (0, n.jsxs)("div", {
                                className: t0.mI,
                                children: [
                                    (0, n.jsx)(g.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: er.intl.format(es.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    P > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: t0.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(g.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: er.intl.format(es.default.eRrt7X, { count: P }),
                                                }),
                                            ],
                                        }),
                                    (0, n.jsx)("span", { className: t0.TG, "aria-hidden": "true" }),
                                    (0, n.jsx)(g.E, { variant: "text-xs/normal", color: "text-muted", children: L }),
                                    w.length > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: t0.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(ef.A, { users: w, maxUsers: 5, size: ey._3.SIZE_16 }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    t.clips.length > 0 &&
                        null != f &&
                        (0, n.jsx)("div", {
                            className: t0.$s,
                            children: (0, n.jsx)(eC.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: te.ShareIcon,
                                text: er.intl.string(es.default.l34lLs),
                                onClick: p,
                            }),
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                ref: T,
                className: t0.Vg,
                ...Y,
                tabIndex: -1,
                onKeyDown: Q,
                children: R.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: t0.UX,
                            ...V(t),
                            children: e.map((e, a) => {
                                let s = { width: _ };
                                return (
                                    c && (s["--custom-entrance-delay"] = `${e9(u + t + a)}ms`),
                                    (0, n.jsx)(
                                        "div",
                                        {
                                            className: c ? e4.$ : void 0,
                                            style: s,
                                            children: (0, n.jsx)(eW, {
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
                    className: t0.Vc,
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
var t2 = l(799888);
function t3(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: i, onClipClick: s, isLoading: r, onScroll: o } = e,
        { enableAutoClipsReview: c } = tq.useConfig({ location: "ClipsGalleryHome" }),
        u = a.useMemo(() => tQ(t), [t]),
        m = c && u.length > 0,
        h = (0, d.yK)([D.Ay], () => D.Ay.getNewClipIds()),
        f = (0, d.bG)([D.Ay], () => D.Ay.getExportingClipIds().size > 0),
        g = (0, e8.P)((e) => e.setActiveMainLink),
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
        ? (0, n.jsx)(t$.Ch, {
              className: t2.iR,
              fade: !0,
              onScroll: A,
              children: (0, n.jsxs)("div", {
                  className: t2.Qs,
                  ref: C,
                  children: [
                      m &&
                          (0, n.jsx)("div", {
                              className: t2.Dk,
                              children: (0, n.jsx)(tW, { clips: t, onEdit: i, onEdgeNavigate: b }),
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
                                          t1,
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
                                      className: t2.dp,
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
          ? (0, n.jsx)("div", { className: t2.dc, children: (0, n.jsx)(K.y, {}) })
          : (0, n.jsx)(eu, { isEmptyBecauseQuery: l > 0 });
}
var t5 = l(837381),
    t8 = l(741918),
    t9 = l(812993),
    t7 = l(332837),
    t4 = l(176781),
    t6 = l(650684),
    le = l(364522),
    lt = l(625903),
    ll = l(260762),
    ln = l(599428);
function la(e) {
    let { itemId: t, icon: l, label: a, onClick: i, isSelected: r = !1, isDisabled: o = !1, badgeCount: c = 0 } = e,
        d = o && !r,
        u = (0, t5.rm)(t);
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
            className: s()(ln.AY, { [ln.Hy]: r, [ln.Is]: d }),
            children: [l, c > 0 && (0, n.jsx)("span", { className: ln.e, children: (0, n.jsx)(t9.hV, { count: c }) })],
        }),
    });
}
function li(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: i } = e,
        r = (0, e8.P)((e) => e.activeMainLink),
        o = (0, e8.P)((e) => e.gameFacet),
        c = (0, e8.P)((e) => e.clippedWithFacet),
        d = (0, e8.P)((e) => e.setActiveMainLink),
        u = (0, e8.P)((e) => e.setGameFacet),
        m = (0, e8.P)((e) => e.setClippedWithFacet),
        h = (0, e8.P)((e) => e.clearFilters),
        x = (0, e8.P)((e) => e.setPendingContentFocus),
        f = (0, tf.HN)(),
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
        A = (0, P.A)(k),
        N = a.useMemo(() => new Map(A.map((e) => [e?.id, e])), [A]),
        w = (0, $.GV)(),
        L = (0, ll.A)(w),
        { setFocus: S } = L,
        I = o ?? r;
    a.useEffect(() => {
        S(I);
    }, [S, I]);
    let { ref: M, onKeyDown: D, ...T } = (0, t5.LT)(L),
        _ = a.useCallback(
            (e) => {
                j.current = e.key === t8.D$.ENTER || e.key === t8.D$.SPACE;
                try {
                    D(e);
                } finally {
                    j.current = !1;
                }
            },
            [D],
        );
    return (0, n.jsx)(t5.hD, {
        navigator: L,
        children: (0, n.jsxs)("div", {
            className: ln.H$,
            ...T,
            tabIndex: -1,
            onKeyDown: _,
            ref: M,
            children: [
                (0, n.jsxs)("div", {
                    className: s()(ln.o3, ln.A9),
                    children: [
                        (0, n.jsx)(la, {
                            itemId: U.oH.HOME,
                            icon: (0, n.jsx)(t7.HomeIcon, { size: "sm", color: "currentColor" }),
                            label: er.intl.string(es.default.iVqj8B),
                            isSelected: p(U.oH.HOME),
                            onClick: () => y(U.oH.HOME),
                        }),
                        (0, n.jsx)(la, {
                            itemId: U.oH.ALL_CLIPS,
                            icon: (0, n.jsx)(t4.x, { size: "sm", color: "currentColor" }),
                            label: er.intl.string(er.t.dPVrEv),
                            isSelected: p(U.oH.ALL_CLIPS),
                            isDisabled: 0 === l.allClips,
                            badgeCount: i.allClips,
                            onClick: () => y(U.oH.ALL_CLIPS),
                        }),
                        f &&
                            (0, n.jsx)(la, {
                                itemId: U.oH.AUTO_CLIPS,
                                icon: (0, n.jsx)(t6.e, { size: "sm", color: "currentColor" }),
                                label: er.intl.string(es.default.ikNKf1),
                                isSelected: p(U.oH.AUTO_CLIPS),
                                isDisabled: 0 === l.autoClips,
                                badgeCount: i.autoClips,
                                onClick: () => y(U.oH.AUTO_CLIPS),
                            }),
                        (0, n.jsx)(la, {
                            itemId: U.oH.FAVORITES,
                            icon: (0, n.jsx)(tl.StarIcon, { size: "sm", color: "currentColor" }),
                            label: er.intl.string(er.t["9rlCk1"]),
                            isSelected: p(U.oH.FAVORITES),
                            onClick: () => y(U.oH.FAVORITES),
                        }),
                    ],
                }),
                t.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { className: ln.Gz }),
                            (0, n.jsx)(le.Ip, {
                                className: s()(ln.UZ, ln.A9),
                                fade: !0,
                                children: t.map((e) => {
                                    let t = o === e.key;
                                    return (0, n.jsx)(
                                        la,
                                        {
                                            itemId: e.key,
                                            icon: (0, n.jsx)(E.A, {
                                                game: N.get(e.key),
                                                size: E.M.SMALL,
                                                className: ln.az,
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
                    className: s()(ln.Ms, ln.A9),
                    children: (0, n.jsx)(la, {
                        itemId: "settings",
                        icon: (0, n.jsx)(lt.SettingsIcon, { size: "sm", color: "currentColor" }),
                        label: er.intl.string(er.t["3D5yo/"]),
                        onClick: b,
                    }),
                }),
            ],
        }),
    });
}
var ls = l(409067),
    lr = l(314484);
function lo(e) {
    let {
        channelId: t,
        onClose: i,
        picker: G,
        transitionState: K,
        initialEditingClipId: V,
        initialMainLink: $ = U.oH.HOME,
        ...q
    } = e;
    (0, O.A)();
    let { analyticsLocations: B } = (0, N.Ay)(A.A.CLIPS_GALLERY),
        Y = G?.onPick,
        Q = G?.allowMultiSelect ?? !0,
        [X, W] = a.useState(new Set()),
        Z = a.useRef(null),
        J = (0, b.A)((e) => {
            let t = Z.current;
            if (null == t) return;
            let l = Math.min(1, Math.max(0, e) / 40);
            t.style.setProperty("--custom-clips-header-solid-opacity", `${l}`);
        }),
        {
            gamesFacet: ee,
            participantsFacet: et,
            filteredClips: el,
            mainLinkCounts: en,
            mainLinkNewCounts: ea,
            allClips: ei,
        } = (0, ls.ad)(G?.filterClip),
        eo = (0, d.bG)([D.Ay], () => D.Ay.getSettings().storageLocation),
        [ec, ed] = a.useState(!0);
    a.useEffect(() => {
        (async function () {
            ed(!0);
            try {
                await (0, T.Fb)(eo);
            } finally {
                ed(!1);
            }
        })().catch(() => {});
    }, [eo]);
    let { onShareClick: eu } = (0, z.A)(t);
    (a.useEffect(
        () => () => {
            (e8.P.getState().resetAll(), (0, T.Su)());
        },
        [],
    ),
        a.useEffect(() => {
            let e = e8.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink($);
        }, [$]),
        (0, o.l0)(() => {
            D.Ay.hasClips() && S.A.isDeveloper && L.Ay.fireSurveyAction(c.w.POPULATED_CLIP_GALLERY_CLOSED);
        }));
    let em = (0, d.bG)([D.Ay], () => D.Ay.getExportingClipIds().size > 0),
        [eh, ex] = a.useState(null != V ? "editing" : "gallery"),
        [ef, eg] = a.useState(V ?? null),
        ep = (0, d.bG)([D.Ay], () => (null != ef ? D.Ay.getClipById(ef) : null), [ef]),
        ej = (0, u.useIsModalAtTop)(eG.nm),
        ev = a.useRef(eh);
    ((ev.current = eh), (a.useRef(ef).current = ef));
    let [ey, eC] = a.useState(null != V ? h.ip.ENTERED : h.ip.HIDDEN),
        eb = a.useRef(null),
        ek = (0, e8.P)((e) => e.gameFacet),
        eA = (0, e8.P)((e) => e.clippedWithFacet),
        eN = (0, e8.P)((e) => e.activeMainLink),
        ew = (0, e8.P)((e) => e.currentPage),
        eP = ew === U.fB.HOME,
        { ref: eE, height: eL = 64 } = (0, C.Ay)(ew),
        eS = 68 + eL,
        eI = eP ? 68 : eS - 16;
    a.useLayoutEffect(() => {
        J(0);
    }, [ew, J]);
    let eM = (0, e8.P)((e) => e.pendingContentFocus),
        eD = (0, e8.P)((e) => e.setPendingContentFocus),
        eT = a.useRef(null);
    a.useEffect(() => {
        if (!eM) return;
        let e = 0,
            t = 0;
        return (
            (t = requestAnimationFrame(function l() {
                let n = eT.current?.querySelector('[role="grid"] [role="button"]');
                if (null != n) {
                    (n.focus(), eD(!1));
                    return;
                }
                if (e++ < 10) {
                    t = requestAnimationFrame(l);
                    return;
                }
                eD(!1);
            })),
            () => cancelAnimationFrame(t)
        );
    }, [eM, eD]);
    let e_ = (0, e8.P)(
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
        eN === U.oH.HOME && e_ && e8.P.getState().setActiveMainLink(U.oH.ALL_CLIPS);
    }, [eN, e_]);
    let eR = a.useMemo(() => (null != ek ? [ek] : []), [ek]),
        eF = (0, P.A)(eR)[0] ?? null,
        eH = (0, d.bG)([I.default], () => (null != eA ? I.default.getUser(eA) : null), [eA]),
        ez = a.useMemo(() => {
            if (null != ek) return ee.find((e) => e.key === ek)?.name ?? er.intl.string(er.t.dPVrEv);
            if (null != eA) return null != eH ? (eH.globalName ?? eH.username) : eA;
            switch (eN) {
                case U.oH.FAVORITES:
                    return er.intl.string(er.t["9rlCk1"]);
                case U.oH.AUTO_CLIPS:
                    return er.intl.string(es.default.ikNKf1);
                case U.oH.HOME:
                    return er.intl.string(es.default.iVqj8B);
                default:
                    return er.intl.string(er.t.dPVrEv);
            }
        }, [ek, eA, eN, ee, eH]),
        eO = a.useMemo(() => {
            if (null != ek) return ee.find((e) => e.key === ek)?.count ?? 0;
            if (null != eA) return et.find((e) => e.key === eA)?.count ?? 0;
            switch (eN) {
                case U.oH.HOME:
                    return null;
                case U.oH.AUTO_CLIPS:
                    return en.autoClips;
                case U.oH.FAVORITES:
                    return en.favorites;
                default:
                    return en.allClips;
            }
        }, [ek, eA, eN, ee, et, en]),
        eU = a.useCallback(() => {
            (ex("editing"), k.Ay.useReducedMotion && eC(h.ip.ENTERED));
        }, []),
        eK = a.useCallback((e) => {
            W((t) => {
                let l = new Set(t);
                return (l.has(e) ? l.delete(e) : l.add(e), l);
            });
        }, []),
        eV = a.useCallback(
            (e) => {
                (eg(e.id), eU());
            },
            [eU],
        ),
        e$ = a.useCallback(() => {
            (k.Ay.useReducedMotion && eg(null), ex("gallery"));
        }, []);
    (a.useEffect(() => {
        function e(e) {
            "Escape" === e.key && "editing" === ev.current && ej && (e.stopPropagation(), e$());
        }
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [e$, i, ej]),
        a.useEffect(() => {
            function e(e) {
                if (
                    ("f" !== e.key && "F" !== e.key) ||
                    e.altKey ||
                    e.shiftKey ||
                    ((0, M.isMac)() ? !e.metaKey || e.ctrlKey : !e.ctrlKey || e.metaKey) ||
                    !ej ||
                    "gallery" !== ev.current
                )
                    return;
                (e.preventDefault(), e.stopPropagation());
                let t = e8.P.getState();
                (t.currentPage === U.fB.HOME && t.setActiveMainLink(U.oH.ALL_CLIPS), t.setPendingSearchFocus(!0));
            }
            return (document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0));
        }, [ej]),
        a.useEffect(
            () =>
                "editing" === eh && null != ef
                    ? void (0, T.YK)(ef)
                    : ((0, T.TE)(),
                      () => {
                          (0, T.TE)();
                      }),
            [eh, ef],
        ));
    let eq = a.useCallback(() => {
            W(new Set());
        }, []),
        eB = X.size > 0,
        eQ = a.useCallback(() => {
            let e = ei.filter((e) => X.has(e.id));
            (0, u.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("913367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, n.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                (eq(), l.onClose());
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [ei, X, eq]),
        eX = a.useCallback(async () => {
            let e = ei.filter((e) => X.has(e.id));
            (await eu({ clips: e }), eq());
        }, [ei, X, eu, eq]),
        eW = a.useCallback(
            async (e) => {
                0 !== e.length && (W(new Set(e.map((e) => e.id))), await eu({ clips: e }), eq());
            },
            [eu, eq],
        ),
        eZ = a.useCallback(() => {
            let e = e8.P.getState();
            (e.setGameFacet(null),
                e.setClippedWithFacet(null),
                e.setActiveMainLink(U.oH.ALL_CLIPS),
                e.setPendingSearchFocus(!0));
        }, []),
        eJ = a.useMemo(() => {
            let e = ei.filter((e) => X.has(e.id));
            return e.length > 0 && e.every((e) => e.isFavorite);
        }, [ei, X]),
        e0 = a.useCallback(async () => {
            let e = ei.filter((e) => X.has(e.id)),
                t = !eJ;
            (await Promise.all(e.filter((e) => e.isFavorite !== t).map((e) => (0, T.Yy)(e.id, { isFavorite: t }, !0))),
                eq());
        }, [ei, X, eJ, eq]),
        e1 = a.useMemo(() => {
            let e = 0,
                t = 0,
                l = 0;
            return (
                ei.forEach((n) => {
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
                    number_of_clips_loaded: ei.length,
                    num_autoclips_loaded: e,
                    num_distributed_clips_loaded: t,
                    num_manual_clips_loaded: l,
                    gallery_page: eN,
                }
            );
        }, [ei, eN]);
    (0, w.A)(
        { type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.CLIP_GALLERY_VIEWED, properties: e1 },
        { disableTrack: ec },
        [e1, ec],
    );
    let e2 = a.useMemo(
        () => ({
            selectedClipIds: X,
            toggleClipSelection: eK,
            clearSelection: eq,
            isMultiSelectMode: eB,
            picker: G,
            onShareSession: Q ? eW : void 0,
        }),
        [X, eK, eq, eB, G, Q, eW],
    );
    return (0, n.jsx)(N.f5, {
        value: B,
        children: (0, n.jsx)(eY.$.Provider, {
            value: e2,
            children: (0, n.jsx)(m.N, {
                onClose: i,
                transitionState: K,
                ...q,
                children: (0, n.jsxs)("div", {
                    className: lr.jT,
                    ref: eb,
                    children: [
                        (0, n.jsxs)("div", {
                            className: s()(lr.PD, "gallery" === eh && lr.vu),
                            inert: "gallery" !== eh,
                            children: [
                                (0, n.jsx)(li, { gamesFacet: ee, mainLinkCounts: en, mainLinkNewCounts: ea }),
                                (0, n.jsxs)("div", {
                                    className: lr.Qs,
                                    ref: eT,
                                    style: {
                                        "--custom-clips-header-height": "68px",
                                        "--custom-clips-scroll-inset": `${eI}px`,
                                    },
                                    children: [
                                        (0, n.jsxs)("div", {
                                            ref: Z,
                                            className: s()(lr.$Q, !eP && lr.iF),
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: lr.ev,
                                                    children: [
                                                        null != ek &&
                                                            (0, n.jsx)(E.A, {
                                                                game: eF,
                                                                size: E.M.SMALL,
                                                                className: lr.Ve,
                                                                "aria-hidden": !0,
                                                            }),
                                                        (0, n.jsx)(x.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-default",
                                                            className: lr.Yn,
                                                            children: ez,
                                                        }),
                                                        null == ek &&
                                                            null == eA &&
                                                            eN === U.oH.AUTO_CLIPS &&
                                                            (0, n.jsx)(f.E, { type: "beta", variant: "brand" }),
                                                        null != eO &&
                                                            !e_ &&
                                                            (0, n.jsxs)("div", {
                                                                className: lr.Vl,
                                                                children: [
                                                                    (0, n.jsx)("span", {
                                                                        className: lr.FK,
                                                                        "aria-hidden": "true",
                                                                    }),
                                                                    (0, n.jsx)(g.E, {
                                                                        variant: "text-md/normal",
                                                                        color: "text-muted",
                                                                        children: er.intl.format(es.default["+YIqQM"], {
                                                                            count: eO,
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                    ],
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: lr.$s,
                                                    children: [
                                                        (0, n.jsx)(p.m, {
                                                            text: er.intl.string(er.t["5h0QOP"]),
                                                            children: (0, n.jsx)(j.K, {
                                                                onClick: eZ,
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
                                        eP
                                            ? (0, n.jsx)(t3, {
                                                  filteredClips: el,
                                                  totalClipCount: ei.length,
                                                  onEdit: eV,
                                                  onClipClick: Y,
                                                  isLoading: ec,
                                                  onScroll: J,
                                              })
                                            : (0, n.jsxs)("div", {
                                                  className: lr.LG,
                                                  children: [
                                                      (0, n.jsx)("div", {
                                                          className: lr.oP,
                                                          ref: eE,
                                                          children: (0, n.jsx)(tK, {
                                                              allClips: ei,
                                                              gamesFacet: ee,
                                                              participantsFacet: et,
                                                          }),
                                                      }),
                                                      (0, n.jsx)(e6, {
                                                          onEdit: eV,
                                                          channelId: t,
                                                          filteredClips: el,
                                                          totalClipCount: ei.length,
                                                          onClipClick: Y,
                                                          isLoading: ec,
                                                          topInset: eS,
                                                      }),
                                                  ],
                                              }),
                                        Q &&
                                            eB &&
                                            (0, n.jsx)(ti, {
                                                selectedCount: X.size,
                                                allSelectedFavorited: eJ,
                                                onClear: eq,
                                                onFavorite: e0,
                                                onDelete: eQ,
                                                onShare: eX,
                                                isSharing: em,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: s()(lr.jN, "editing" === eh && lr.vu),
                            inert: "editing" !== eh,
                            onTransitionEnd: () => {
                                switch (eh) {
                                    case "gallery":
                                        (eg(null), eC(h.ip.HIDDEN));
                                        break;
                                    case "editing":
                                        eC(h.ip.ENTERED);
                                }
                            },
                            children:
                                null != ep &&
                                (0, n.jsx)(_.p, {
                                    clip: ep,
                                    modalContainerRef: eb,
                                    children: (0, n.jsxs)(
                                        H.JQ,
                                        {
                                            children: [
                                                (0, n.jsx)(F.A, { transitionState: ey, onClose: e$ }),
                                                (0, n.jsx)(R.A, { channelId: t, onClose: e$ }),
                                            ],
                                        },
                                        ep.id,
                                    ),
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
