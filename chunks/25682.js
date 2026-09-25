l.d(t, { default: () => lc });
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
    g = l(403581),
    p = l(834730),
    j = l(866665),
    v = l(408278),
    y = l(7689),
    C = l(972213),
    b = l(765671),
    k = l(765548),
    A = l(775602),
    N = l(793574),
    w = l(688810),
    P = l(139286),
    E = l(429913),
    L = l(769015),
    S = l(27620),
    I = l(540999),
    M = l(287809),
    D = l(723702),
    T = l(915725),
    _ = l(614584),
    R = l(362081),
    F = l(282207),
    H = l(620957),
    z = l(245116),
    O = l(352527),
    U = l(280483),
    G = l(111994);
l(321073);
var K = l(118057),
    V = l(289873),
    $ = l(962125),
    q = l(915089);
function B(e) {
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
var Y = l(702841),
    Q = l(687966),
    X = l(661531),
    W = l(475358),
    Z = l(123292),
    J = l(292801),
    ee = l(780964),
    et = l(766075),
    el = l(532624),
    en = l(350535),
    ea = l(572164),
    ei = l(953932),
    es = l(652215),
    er = l(268378),
    eo = l(375708),
    ec = l(71967);
function ed(e) {
    let { header: t, description: l } = e;
    return (0, n.jsxs)("div", {
        className: ec.Nr,
        children: [t, (0, n.jsx)(p.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function eu() {
    let e = (0, Y.bG)([el.Ay], () => el.Ay.getKeybindForAction(es.hCu.SAVE_CLIP)),
        t = null != e ? en.dI(e.shortcut, !0) : null;
    return (0, n.jsxs)("div", {
        className: ec.kR,
        children: [
            (0, n.jsx)(ed, {
                header: (0, n.jsx)(Q.GameControllerIcon, { size: "refresh_sm", color: X.A.colors.ICON_DEFAULT }),
                description: eo.intl.string(er.default["4K56sP"]),
            }),
            (0, n.jsx)(ed, {
                header: null != t ? (0, n.jsx)(W.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  eo.intl.format(er.default.BIwQis, { keybind: t }),
                                  (0, n.jsx)("div", {
                                      className: ec.JH,
                                      children: (0, n.jsx)(Z.Q, {
                                          text: eo.intl.string(er.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, et.openUserSettings)(ee.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : eo.intl.string(er.default.HOUDUm),
            }),
            (0, n.jsx)(ed, {
                header: (0, n.jsx)(J.t, { size: "refresh_sm", color: X.A.colors.ICON_DEFAULT }),
                description: eo.intl.string(er.default.DLzdl7),
            }),
        ],
    });
}
function em(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, ea.E)();
    return (0, n.jsx)("div", {
        className: ec.kL,
        children: (0, n.jsxs)("div", {
            className: ec.Qs,
            children: [
                (0, n.jsx)(B, { width: 213, height: 135, alt: "" }),
                (0, n.jsx)(x.D, {
                    className: ec.wx,
                    variant: "heading-xl/semibold",
                    children: t ? eo.intl.string(er.default["+M2iLf"]) : eo.intl.string(er.default.m2GEpP),
                }),
                t &&
                    (0, n.jsx)(p.E, {
                        className: ec.h_,
                        variant: "text-md/medium",
                        children: eo.intl.string(er.default.xkY5xS),
                    }),
                !l && (0, n.jsx)("div", { className: ec.SO, children: (0, n.jsx)(ei.A, {}) }),
                l && !t && (0, n.jsx)(eu, {}),
            ],
        }),
    });
}
let eh = 4 / 3;
var ex = l(621466),
    ef = l(61491),
    eg = l(342952),
    ep = l(890856),
    ej = l(939249),
    ev = l(820081),
    ey = l(365199),
    eC = l(778712),
    eb = l(821609),
    ek = l(22231),
    eA = l(983851),
    eN = l(31300),
    ew = l(442433),
    eP = l(587895),
    eE = l(549973),
    eL = l(549685),
    eS = l(174459),
    eI = l(403362),
    eM = l(53677),
    eD = l(609174),
    eT = l(619744),
    e_ = l(82716),
    eR = l(449397),
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
    let a = (0, d.bG)([M.default], () => M.default.getUser(l.remoteTriggerUserId));
    if (null == a) return null;
    let i = a.globalName ?? a.username;
    return (0, n.jsx)(j.m, {
        text: eo.intl.string(er.default.vTTkFF),
        children: (0, n.jsxs)("div", {
            className: eV.S,
            children: [
                (0, n.jsx)("img", { src: a.getAvatarURL(null, 12, !1), className: eV.$, alt: i }),
                (0, n.jsx)(p.E, {
                    color: "text-overlay-light",
                    variant: "text-xs/medium",
                    children: eo.intl.formatToPlainString(er.default.QJ7i8Z, { username: i }),
                }),
            ],
        }),
    });
}
function eq(e) {
    let { icon: t, text: l, tooltipText: a } = e;
    return (0, n.jsx)(j.m, {
        text: a,
        children: (0, n.jsxs)("div", {
            className: eV.S,
            children: [
                (0, n.jsx)(t, { size: "xxs", color: "currentColor" }),
                (0, n.jsx)(p.E, { color: "text-overlay-light", variant: "text-xs/medium", children: l }),
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
                text: eo.intl.string(er.default.bTC23D),
                tooltipText: eo.intl.string(er.default["ry+jxm"]),
            });
        case eK.Gy.SHOUTING:
            return (0, n.jsx)(eq, {
                icon: eU.n,
                text: eo.intl.string(er.default["3gqpuo"]),
                tooltipText: eo.intl.string(er.default["ry+jxm"]),
            });
        case eK.Gy.GAME_EVENT:
            return (0, n.jsx)(eq, {
                icon: eG.q,
                text: t.decision.signal.title ?? "",
                tooltipText: eo.intl.string(er.default["347DBb"]),
            });
        default:
            return null;
    }
}
var eY = l(718812),
    eQ = l(721610),
    eX = l(686320),
    eW = l(175764);
function eZ(e) {
    let { clip: t, actionsDisabled: l, isNew: a, onClick: i, onEdit: s, gridItemProps: r } = e;
    return (0, n.jsx)(eD.Cl, {
        clip: t,
        children: (0, n.jsx)(eJ, { actionsDisabled: l, isNew: a, onClick: i, onEdit: s, gridItemProps: r }),
    });
}
function eJ(e) {
    let { actionsDisabled: t, isNew: i, onClick: r, onEdit: o, gridItemProps: c } = e,
        u = (0, eD.Y_)(),
        m = !0 === u.pending,
        h = t || m,
        { analyticsLocations: x } = (0, w.Ay)(N.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: f, toggleClipSelection: g, isMultiSelectMode: p, picker: j } = a.useContext(eQ.$),
        v = j?.allowMultiSelect ?? !0,
        y = null != j ? (0, eX.$)(j.action).label : void 0,
        [C, b] = a.useState(!1),
        [k, P] = a.useState(!1),
        [E, L] = a.useState(!1),
        [S, I] = a.useState(!1),
        [M, D] = a.useState(0),
        _ = f.has(u.id),
        R = u.type === eK.nQ.SCREENSHOT,
        F = "auto" === u.clipMethod,
        H = (0, d.bG)([A.Ay], () => A.Ay.keyboardModeEnabled),
        z = (k || C || (E && H)) && !_,
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
        K = a.useCallback(() => {
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
                              .map((e) => T.Ay.getClipById(e))
                              .filter(eI.Vq)
                        : [u];
                (0, ew.L3)(
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
                                    eS.default.track(es.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...eM.lc(),
                                        ...eM.Zy(u),
                                    });
                                },
                                onEdit: () => {
                                    (o(u),
                                        eS.default.track(es.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...eM.lc(),
                                            ...eM.Zy(u),
                                        }));
                                },
                                onBeforeDelete: K,
                                onAfterDelete: () => {
                                    eS.default.track(es.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...eM.lc(),
                                        ...eM.Zy(u),
                                    });
                                },
                            });
                    },
                    { onClose: q },
                );
            },
            [u, p, f, h, q, o, K, j, x],
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
                    eS.default.track(es.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" }));
            },
            [o, u],
        ),
        Z = a.useCallback(
            (e) => {
                !h &&
                    (!(0, ex.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") &&
                            null == e.target.closest("[data-clips-progress]") &&
                            null == e.target.closest("[data-clips-select]") &&
                            e.currentTarget.contains(e.target))) &&
                    (v && e.shiftKey ? (e.preventDefault(), g(u.id)) : v && p ? g(u.id) : null != r && r(u),
                    eS.default.track(es.HAw.CLIP_GALLERY_CARD_CLICKED, { ...eM.lc(), ...eM.Zy(u) }));
            },
            [h, v, p, g, u, r],
        );
    return (0, n.jsx)(w.f5, {
        value: x,
        children: (0, n.jsx)("div", {
            className: eW.hl,
            onFocus: O,
            onBlur: U,
            children: (0, n.jsx)(ep.s, {
                "aria-disabled": h,
                "aria-label": y ?? eo.intl.string(R ? eo.t["HO/oXl"] : eo.t.bt75uw),
                onClick: h ? void 0 : Z,
                onContextMenu: Q,
                buttonProps: null != c ? { role: "button", id: c.id, tabIndex: c.tabIndex } : void 0,
                buttonRef: c?.ref,
                onFocus: c?.onFocus,
                className: s()(eW.Nr, { [eW.r9]: h, [eW.in]: C, [eW.wH]: _ }),
                onMouseEnter: () => P(!0),
                onMouseLeave: () => P(!1),
                children: (0, n.jsx)("div", {
                    className: eW.w7,
                    children: (0, n.jsxs)(e0, {
                        ref: G,
                        isPlaying: S,
                        onProgressChange: D,
                        children: [
                            m && (0, n.jsx)("div", { className: eW.mi, children: (0, n.jsx)(V.y, {}) }),
                            (0, n.jsx)("div", {
                                className: s()(eW.w$, { [eW.t7]: z, [eW.Vg]: F }),
                                inert: !0,
                                "aria-hidden": "true",
                            }),
                            (0, n.jsx)(e1, {
                                isNew: i,
                                showHoverActions: z && !h,
                                showSelect: v && (z || _),
                                isSelected: _,
                                onToggleSelect: B,
                                onMenu: X,
                                onBeforeDelete: K,
                            }),
                            (0, n.jsx)(e2, { showHoverState: z, playbackProgress: M, onEdit: W, onSeek: $ }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
let e0 = a.forwardRef((e, t) => {
    let { isPlaying: l, onProgressChange: a, children: i } = e;
    return (0, n.jsx)(eF.d, {
        ref: t,
        isPlaying: l,
        preload: "none",
        onProgressChange: a,
        children: (0, n.jsx)(eH.h, { isVisible: !0, className: eW.Lw, children: i }),
    });
});
function e1(e) {
    let {
            isNew: t,
            showHoverActions: l,
            showSelect: a,
            isSelected: i,
            onToggleSelect: r,
            onMenu: o,
            onBeforeDelete: c,
        } = e,
        d = (0, eD.Y_)(),
        u = !0 === d.pending;
    return (0, n.jsxs)("div", {
        className: eW.wx,
        children: [
            (0, n.jsxs)("div", {
                className: eW.LD,
                children: [
                    a &&
                        (0, n.jsx)(ej.D, {
                            "aria-label": eo.intl.string(eo.t.XqMe3N),
                            "aria-pressed": i,
                            onClick: r,
                            "data-clips-select": "true",
                            className: s()(eW.UJ, { [eW.ZK]: i }),
                            children: i && (0, n.jsx)(ev.B, { size: "xs", color: "currentColor" }),
                        }),
                    !u &&
                        t &&
                        (0, n.jsx)("div", {
                            className: eW.Ad,
                            children: (0, n.jsx)(p.E, {
                                variant: "text-xs/bold",
                                color: "text-overlay-light",
                                children: eo.intl.string(eo.t.y2b7CA),
                            }),
                        }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: eW.IE,
                children: [
                    (d.isFavorite || l) &&
                        (0, n.jsx)("div", {
                            className: s()({ [eW.L6]: d.isFavorite }),
                            children: (0, n.jsx)(e_.z, {}),
                        }),
                    l &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(j.m, {
                                    text: eo.intl.string(eo.t["UKOtz+"]),
                                    children: (0, n.jsx)(v.K, {
                                        onClick: o,
                                        icon: ey.MoreHorizontalIcon,
                                        "aria-label": eo.intl.string(eo.t["UKOtz+"]),
                                        variant: "overlay-secondary",
                                        size: "sm",
                                    }),
                                }),
                                (0, n.jsx)(eT.k, { onBeforeDelete: c }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
function e2(e) {
    let { showHoverState: t, playbackProgress: l, onEdit: i, onSeek: r } = e,
        o = (0, eD.Y_)(),
        c = o.type === eK.nQ.SCREENSHOT,
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
        g = a.useCallback((e) => {
            ((m.current = !1),
                e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId));
        }, []),
        j = (0, d.yK)([M.default], () => o.users.map((e) => M.default.getUser(e)).filter(eI.Vq)),
        v = (0, eE.e)({ timestamp: o.createdAt }),
        y = o.decision?.signal?.type,
        C = null != y && y !== eK.Gy.MANUAL,
        b =
            j.length > 0
                ? (0, n.jsx)("span", {
                      className: eW.HD,
                      "data-clips-avatars": "true",
                      children: (0, n.jsx)(eg.A, {
                          maxUsers: 3,
                          users: j,
                          size: eC._3.SIZE_16,
                          "aria-label": eo.intl.string(eo.t.WTozwe),
                      }),
                  })
                : null;
    return (0, n.jsx)("div", {
        className: eW.qr,
        children: (0, n.jsxs)("div", {
            className: eW.Zn,
            children: [
                (0, n.jsxs)("div", {
                    className: eW.$,
                    children: [
                        (0, n.jsxs)("div", { className: eW.gH, children: [(0, n.jsx)(e8, {}), (0, n.jsx)(e5, {})] }),
                        t ? b : null,
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: s()(eW.SO, { [eW.AK]: t && !c, [eW.I_]: t && c }),
                    children: [
                        (0, n.jsxs)("div", {
                            className: s()(eW.KW, { [eW.g3]: t }),
                            inert: t,
                            "aria-hidden": t,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: eW.Tf,
                                    children: [
                                        (0, n.jsx)(eB, { clip: o }),
                                        C && (0, n.jsx)("span", { className: eW.TG, "aria-hidden": "true" }),
                                        b,
                                        (0, n.jsx)(p.E, {
                                            variant: "text-xs/normal",
                                            color: "none",
                                            children: eo.intl.format(er.default["0QCBug"], { time: v }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", { className: eW.av, children: (0, n.jsx)(e3, {}) }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: s()(eW.Ax, { [eW.Mg]: t }),
                            inert: !t,
                            children: [
                                !c &&
                                    (0, n.jsx)("div", {
                                        ref: u,
                                        className: eW.hr,
                                        onPointerDown: x,
                                        onPointerMove: f,
                                        onPointerUp: g,
                                        "data-clips-progress": "true",
                                        "aria-hidden": "true",
                                        children: (0, n.jsx)("div", {
                                            className: eW.z5,
                                            children: (0, n.jsx)("div", {
                                                className: eW.TE,
                                                style: { width: `${l}%` },
                                                children: (0, n.jsx)("div", {
                                                    className: eW.GT,
                                                    "aria-hidden": "true",
                                                }),
                                            }),
                                        }),
                                    }),
                                (0, n.jsxs)("div", {
                                    className: eW.E_,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: eW.lO,
                                            children: (0, n.jsx)(eb.$, {
                                                variant: "overlay-secondary",
                                                size: "sm",
                                                icon: ek.PencilIcon,
                                                text: eo.intl.string(eo.t.bt75uw),
                                                onClick: i,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: eW.lO,
                                            children: (0, n.jsx)(eR.e, { variant: "primary" }),
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
function e3() {
    let e = (0, eD.Y_)(),
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
            return (0, ef.rB)(l);
        }, [e.length, e.editMetadata]);
    return t
        ? null
        : (0, n.jsxs)("div", {
              className: eW.p0,
              children: [
                  i && (0, n.jsx)(eL.A, { color: "white", width: 14, height: 14 }),
                  (0, n.jsx)(p.E, {
                      variant: "text-xs/medium",
                      color: "text-overlay-light",
                      tabularNumbers: !0,
                      children: l ? eo.intl.string(eo.t["2Fp7OP"]) : s,
                  }),
              ],
          });
}
function e5() {
    let e = (0, eD.Y_)(),
        t = (0, eY.h)(e),
        l = "" !== t;
    return (0, n.jsx)(p.E, {
        className: eW.DD,
        variant: "text-sm/semibold",
        color: "text-overlay-light",
        children: l ? t : e.name,
    });
}
function e8() {
    let e = (0, eD.Y_)(),
        t = (0, d.bG)([eP.A], () => (null != e.applicationId ? eP.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, n.jsx)("div", {
        className: eW.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, n.jsx)("img", { src: l, alt: "", className: eW.T_ })
                : e.type === eK.nQ.VOICE_CLIP
                  ? (0, n.jsx)(eA.H, { size: "xs", color: "currentColor" })
                  : (0, n.jsx)(eN.k, { size: "xs", color: "currentColor" }),
    });
}
e0.displayName = "CardThumbnail";
var e9 = l(792852);
function e7(e) {
    return Math.min(45 * e, 520);
}
var e4 = l(91440),
    e6 = l(762831);
function te(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: i, onEdit: s, isLoading: r, topInset: o = 0 } = e,
        [c, u] = a.useState({ width: 0, height: 0 }),
        m = (0, d.yK)([T.Ay], () => T.Ay.getNewClipIds()),
        h = (0, d.bG)([T.Ay], () => T.Ay.getExportingClipIds().size > 0),
        f = (0, e9.P)((e) => e.activeMainLink),
        g = (0, e9.P)((e) => e.gameFacet),
        j = (0, e9.P)((e) => e.clippedWithFacet),
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
                    title: eo.intl.string(eo.t["kB2R/0"]),
                    description: t ? eo.intl.string(eo.t["6AXirz"]) : void 0,
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
        { tileWidth: b, columns: k } = a.useMemo(() => {
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
        N = (0, q.GV)(),
        w = a.useRef(null),
        P = a.useMemo(() => {
            let e = Math.max(1, k),
                t = [];
            for (let l of v) {
                let n = Math.ceil(l.clips.length / e);
                for (let a = 0; a < n; a++) t.push(Math.min(e, l.clips.length - a * e));
            }
            return t;
        }, [v, k]),
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
        } = (0, K.A)({ navId: N, columnCounts: P, prepareFocus: E }),
        M = a.useMemo(() => v.map((e) => Math.ceil(e.clips.length / k)), [v, k]),
        D = a.useMemo(() => M.reduce((e, t) => e + t, 0), [M]),
        _ = Math.floor(b / eh) + 20,
        R = v.length > 0 ? `${f}:${g ?? ""}:${j ?? ""}` : null,
        F = (function (e) {
            let t = (0, d.bG)([A.Ay], () => A.Ay.useReducedMotion),
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
                let o = a * k,
                    c = r.clips.slice(o, o + k);
                return (0, n.jsx)(
                    "div",
                    {
                        className: e4.UX,
                        ...I(e),
                        children: c.map((t, l) => {
                            let a = { width: b };
                            return (
                                F && (a["--custom-entrance-delay"] = `${e7(e + l)}ms`),
                                (0, n.jsx)(
                                    "div",
                                    {
                                        className: F ? e6.$ : void 0,
                                        style: a,
                                        children: (0, n.jsx)(eZ, {
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
            [v, k, b, h, m, i, s, I, S, F, R],
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
                              className: e4.aE,
                              children: [
                                  (0, n.jsx)(x.D, {
                                      variant: "text-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, n.jsx)(p.E, {
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
            [v],
        );
    if (!r && 0 === v.length) return (0, n.jsx)(em, { isEmptyBecauseQuery: l > 0 });
    if (r && 0 === v.length) return (0, n.jsx)("div", { className: e4.dc, children: (0, n.jsx)(V.y, {}) });
    let U = (0, n.jsx)($.A, {
            ref: w,
            role: "none presentation",
            className: e4.Vb,
            listPadding: y,
            renderRow: H,
            renderSectionHeader: O,
            rowCount: D,
            rowCountBySection: M,
            rowHeight: _,
            sectionHeaderHeight: z,
            onResize: u,
        }),
        { onFocus: G, ...B } = L();
    return (0, n.jsx)("div", { className: e4.UT, ...B, children: U });
}
var tt = l(405433),
    tl = l(241326),
    tn = l(27232),
    ta = l(505930),
    ti = l(322911);
function ts(e) {
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
        d = eo.intl.string(l ? er.default.IZsalP : er.default.ihBfyA),
        u = (0, n.jsx)(eb.$, {
            variant: "primary",
            size: "sm",
            icon: tt.ShareIcon,
            text: eo.intl.string(eo.t.RDE0Sc),
            onClick: r,
            disabled: c,
            loading: o,
        });
    return (0, n.jsxs)("div", {
        "aria-label": eo.intl.string(eo.t.z2jK6X),
        role: "region",
        className: ti.M0,
        children: [
            (0, n.jsxs)("div", {
                className: ti.h5,
                children: [
                    (0, n.jsx)(p.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: eo.intl.format(er.default.cSfYIv, { count: t }),
                    }),
                    (0, n.jsx)("span", { className: ti.Om, "aria-hidden": "true" }),
                    (0, n.jsx)(ej.D, {
                        className: ti.IU,
                        onClick: a,
                        children: (0, n.jsx)(p.E, {
                            variant: "text-sm/medium",
                            color: "text-link",
                            children: eo.intl.string(eo.t.VkKicb),
                        }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: ti.o1,
                children: [
                    (0, n.jsx)(j.m, {
                        text: eo.intl.string(eo.t.oyYWHE),
                        children: (0, n.jsx)(v.K, {
                            onClick: s,
                            icon: tl.TrashIcon,
                            size: "sm",
                            variant: "secondary",
                            "aria-label": eo.intl.string(eo.t.oyYWHE),
                        }),
                    }),
                    (0, n.jsx)(
                        j.m,
                        {
                            text: d,
                            children: (0, n.jsx)(v.K, {
                                onClick: i,
                                icon: l ? tn.StarIcon : ta.y,
                                size: "sm",
                                variant: "secondary",
                                "aria-label": d,
                            }),
                        },
                        `favorite:${l}`,
                    ),
                    (0, n.jsx)(j.m, {
                        text: c ? eo.intl.string(er.default.qpw1d9) : null,
                        asContainer: !0,
                        children: u,
                    }),
                ],
            }),
        ],
    });
}
var tr = l(922016),
    to = l(847374),
    tc = l(980707),
    td = l(477782),
    tu = l(112173),
    tm = l(97808),
    th = l(683438),
    tx = l(548118),
    tf = l(71393),
    tg = l(341923),
    tp = l(305866),
    tj = l(441349),
    tv = l(789645),
    ty = l(620409),
    tC = l(569737);
function tb(e) {
    return (e.setHours(0, 0, 0, 0), e.getTime());
}
function tk(e) {
    return (e.setHours(23, 59, 59, 999), e.getTime());
}
function tA(e, t) {
    if (null == e && null == t) return null;
    let l = (0, ty.Xj)();
    return { preset: "custom", after: null != e ? tb(e.toDate(l)) : null, before: null != t ? tk(t.toDate(l)) : null };
}
function tN(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new tC.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let tw = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function tP(e) {
    return tw.format(new Date(e));
}
function tE(e) {
    switch (e.preset) {
        case "today":
            return eo.intl.string(er.default.yOAWWM);
        case "yesterday":
            return eo.intl.string(er.default["PtV/Ti"]);
        case "last-3-days":
            return eo.intl.string(er.default.xfmv7I);
        case "this-year":
            return eo.intl.string(er.default["+eE7zX"]);
        case "last-year":
            return eo.intl.string(er.default.Nwj9v0);
        case "custom": {
            let t = null != e.after ? tP(e.after) : null,
                l = null != e.before ? tP(e.before) : null;
            if (null != t && null != l)
                return eo.intl.formatToPlainString(er.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return eo.intl.formatToPlainString(er.default.k1FkTL, { date: t });
            if (null != l) return eo.intl.formatToPlainString(er.default["4NlpHD"], { date: l });
            return eo.intl.string(er.default.tv9apA);
        }
    }
}
var tL = l(435021);
function tS(e) {
    let { closePopout: t } = e,
        l = (0, e9.P)((e) => e.dateFilter),
        i = (0, e9.P)((e) => e.setDateFilter),
        [r, o] = a.useState(l?.preset === "custom"),
        [c, d] = a.useState(() => (l?.preset === "custom" ? tN(l.after) : null)),
        [u, m] = a.useState(() => (l?.preset === "custom" ? tN(l.before) : null)),
        h = a.useMemo(
            () => [
                { key: "today", label: eo.intl.string(er.default.yOAWWM) },
                { key: "yesterday", label: eo.intl.string(er.default["PtV/Ti"]) },
                { key: "last-3-days", label: eo.intl.string(er.default.xfmv7I) },
                { key: "this-year", label: eo.intl.string(er.default["+eE7zX"]) },
                { key: "last-year", label: eo.intl.string(er.default.Nwj9v0) },
            ],
            [],
        ),
        x = l?.preset ?? null,
        f = r && "custom" !== x ? null : x,
        g = a.useMemo(() => (0, ty.Ec)((0, ty.Xj)()), []),
        y = a.useCallback(
            (e) => {
                (i(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: tb(new Date(t)), before: tk(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: tb(new Date(l)), before: tk(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 2), { preset: e, after: tb(l), before: tk(new Date(t)) }
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
                (d(e), i(tA(e, u)));
            },
            [u, i],
        ),
        k = a.useCallback(
            (e) => {
                (m(e), i(tA(c, e)));
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
        "aria-label": eo.intl.string(er.default.upqksT),
        onBlur: L,
        children: (0, n.jsxs)("div", {
            className: s()(tL.SW, r && tL.Td),
            children: [
                (0, n.jsxs)("div", {
                    className: tL.sh,
                    children: [
                        (0, n.jsx)(p.E, {
                            variant: "eyebrow",
                            color: "text-muted",
                            className: tL.a9,
                            children: eo.intl.string(er.default.upqksT),
                        }),
                        (0, n.jsxs)("div", {
                            ref: w,
                            className: tL.eF,
                            onKeyDown: E,
                            children: [
                                h.map((e) =>
                                    (0, n.jsx)(
                                        ej.D,
                                        {
                                            className: s()(tL.zD, f === e.key && tL.pH),
                                            onClick: () => y(e.key),
                                            "aria-pressed": f === e.key,
                                            children: (0, n.jsx)(p.E, {
                                                variant: "text-sm/medium",
                                                color: "currentColor",
                                                children: e.label,
                                            }),
                                        },
                                        e.key,
                                    ),
                                ),
                                (0, n.jsxs)(ej.D, {
                                    className: s()(tL.zD, tL.Kl, (r || "custom" === x) && tL.pH),
                                    onClick: C,
                                    "aria-expanded": r,
                                    children: [
                                        (0, n.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            color: "currentColor",
                                            children: eo.intl.string(er.default.tv9apA),
                                        }),
                                        (0, n.jsx)(p.E, {
                                            variant: "text-md/medium",
                                            color: "text-muted",
                                            className: tL.Xt,
                                            children: r ? "\u25C0" : "\u25B6",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: tL.ML,
                    "aria-hidden": !r,
                    children: [
                        (0, n.jsxs)("div", {
                            className: tL.U6,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: tL._2,
                                    children: [
                                        (0, n.jsx)(p.E, {
                                            variant: "eyebrow",
                                            color: "text-muted",
                                            className: tL.bk,
                                            "aria-hidden": !0,
                                            children: eo.intl.string(er.default["96vZuU"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tL.h0,
                                            children: [
                                                (0, n.jsx)(tj.l, {
                                                    label: eo.intl.string(er.default["96vZuU"]),
                                                    hideLabel: !0,
                                                    value: c,
                                                    onChange: b,
                                                    maxValue: u ?? g,
                                                }),
                                                null != c &&
                                                    (0, n.jsx)(j.m, {
                                                        text: eo.intl.string(eo.t.VkKicb),
                                                        children: (0, n.jsx)(v.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tv.P,
                                                            onClick: () => b(null),
                                                            "aria-label": eo.intl.string(eo.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: tL._2,
                                    children: [
                                        (0, n.jsx)(p.E, {
                                            variant: "eyebrow",
                                            color: "text-muted",
                                            className: tL.bk,
                                            "aria-hidden": !0,
                                            children: eo.intl.string(er.default["GL51/b"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tL.h0,
                                            children: [
                                                (0, n.jsx)(tj.l, {
                                                    label: eo.intl.string(er.default["GL51/b"]),
                                                    hideLabel: !0,
                                                    value: u,
                                                    onChange: k,
                                                    minValue: c ?? void 0,
                                                    maxValue: g,
                                                }),
                                                null != u &&
                                                    (0, n.jsx)(j.m, {
                                                        text: eo.intl.string(eo.t.VkKicb),
                                                        children: (0, n.jsx)(v.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tv.P,
                                                            onClick: () => k(null),
                                                            "aria-label": eo.intl.string(eo.t.VkKicb),
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
                                className: tL.dS,
                                children: (0, n.jsx)(Z.Q, {
                                    size: "sm",
                                    text: eo.intl.string(eo.t.VkKicb),
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
    tM = l.n(tI),
    tD = l(190199),
    tT = l(914427),
    t_ = l(724141);
function tR(e) {
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
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => tM()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, n.jsxs)(
                            tD.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, n.jsx)("span", { className: t_.H, children: e.icon }),
                                    (0, n.jsx)(tD.x4.Label, { children: e.label }),
                                    r ? (0, n.jsx)(tD.x4.Checkbox, {}) : (0, n.jsx)(tD.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        h = i.size > 0 ? `${t} (${i.size})` : t;
    return (0, n.jsx)(tr.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(tT.p, {
                "aria-label": t,
                placeholder: o,
                value: u,
                multiSelect: r,
                onChange: s,
                onClose: l,
                emptyStateText: c ?? eo.intl.string(eo.t.QwSXv8),
                maxVisibleItems: 6,
                children: m,
            });
        },
        children: (e) =>
            (0, n.jsx)(eb.$, {
                ...e,
                buttonRef: d,
                size: "sm",
                variant: "secondary",
                text: h,
                icon: to.a,
                iconPosition: "end",
            }),
    });
}
var tF = l(187671);
function tH(e) {
    let { label: t, icon: l, onRemove: a, removeAriaLabel: i } = e;
    return (0, n.jsxs)("div", {
        className: tF.Io,
        children: [
            null != l && (0, n.jsx)("span", { className: tF.Kk, children: l }),
            (0, n.jsx)(p.E, {
                className: tF.Pf,
                variant: "text-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, n.jsx)(ej.D, {
                className: tF.DT,
                onClick: a,
                "aria-label": i ?? eo.intl.string(eo.t.N86XcP),
                children: (0, n.jsx)(tv.P, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var tz = l(401756);
let tO = { all: er.default.lscwjQ, auto: er.default.xrOIkz, manual: er.default.D7HSLJ };
function tU() {
    let e = (0, e9.P)((e) => e.dateFilter),
        t = a.useRef(null),
        l = null != e ? tE(e) : eo.intl.string(er.default.upqksT);
    return (0, n.jsx)(tr.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(tS, { closePopout: t });
        },
        children: (e) =>
            (0, n.jsx)(eb.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: to.a,
                iconPosition: "end",
            }),
    });
}
function tG() {
    let e = (0, e9.P)((e) => e.sortOrder),
        t = (0, e9.P)((e) => e.setSortOrder),
        l = a.useRef(null),
        i = e === G.mu.OLDEST ? eo.intl.string(eo.t["0gitSE"]) : eo.intl.string(eo.t["4LLKx3"]);
    return (0, n.jsx)(tr.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, n.jsx)(tc.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": eo.intl.string(eo.t.XvNMNk),
                onClose: a,
                onSelect: void 0,
                children: (0, n.jsxs)(td.rX, {
                    children: [
                        (0, n.jsx)(td.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: eo.intl.string(eo.t["4LLKx3"]),
                            action: () => {
                                (t(G.mu.MOST_RECENT), a());
                            },
                            checked: e === G.mu.MOST_RECENT,
                        }),
                        (0, n.jsx)(td.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: eo.intl.string(eo.t["0gitSE"]),
                            action: () => {
                                (t(G.mu.OLDEST), a());
                            },
                            checked: e === G.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, n.jsx)(eb.$, { ...e, buttonRef: l, size: "sm", variant: "secondary", text: i, icon: tu.J }),
    });
}
function tK() {
    let e = (0, e9.P)((e) => e.clipMethodFilter),
        t = (0, e9.P)((e) => e.setClipMethodFilter),
        l = a.useRef(null);
    return (0, n.jsx)(tr.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, n.jsx)(tc.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": eo.intl.string(er.default["kIqbb/"]),
                onClose: a,
                onSelect: void 0,
                children: (0, n.jsxs)(td.rX, {
                    children: [
                        (0, n.jsx)(td.iD, {
                            id: "method-all",
                            group: "method",
                            label: eo.intl.string(er.default.lscwjQ),
                            action: () => {
                                (t("all"), a());
                            },
                            checked: "all" === e,
                        }),
                        (0, n.jsx)(td.iD, {
                            id: "method-auto",
                            group: "method",
                            label: eo.intl.string(er.default.xrOIkz),
                            action: () => {
                                (t("auto"), a());
                            },
                            checked: "auto" === e,
                        }),
                        (0, n.jsx)(td.iD, {
                            id: "method-manual",
                            group: "method",
                            label: eo.intl.string(er.default.D7HSLJ),
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
            (0, n.jsx)(eb.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: eo.intl.string(er.default["kIqbb/"]),
                icon: to.a,
                iconPosition: "end",
            }),
    });
}
function tV(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: i } = e,
        s = (0, e9.P)((e) => e.query),
        r = (0, e9.P)((e) => e.setQuery),
        o = (0, e9.P)((e) => e.pendingSearchFocus),
        c = (0, e9.P)((e) => e.setPendingSearchFocus),
        d = a.useRef(null),
        u = (0, e9.P)((e) => e.activeMainLink),
        m = (0, e9.P)((e) => e.clipMethodFilter),
        h = (0, e9.P)((e) => e.setClipMethodFilter),
        x = (0, e9.P)((e) => e.gameFacet),
        f = (0, e9.P)((e) => e.clippedWithFacet),
        g = (0, e9.P)((e) => e.selectedGameIds),
        p = (0, e9.P)((e) => e.selectedUserIds),
        j = (0, e9.P)((e) => e.selectedGuildId),
        v = (0, e9.P)((e) => e.selectedActivity),
        y = (0, e9.P)((e) => e.dateFilter),
        C = (0, e9.P)((e) => e.toggleGameId),
        b = (0, e9.P)((e) => e.toggleUserId),
        k = (0, e9.P)((e) => e.setSelectedGuildId),
        A = (0, e9.P)((e) => e.setSelectedActivity),
        N = (0, e9.P)((e) => e.setDateFilter),
        w = (0, e9.P)((e) => e.clearFilters);
    a.useEffect(() => {
        o && (d.current?.focus(), c(!1));
    }, [o, c]);
    let P = a.useRef(null);
    a.useEffect(() => {
        let e = {
            type_filter: "all" !== m ? m : "",
            game_filter_application_ids: null != x ? [x] : Array.from(g),
            date_filter_range: null != y ? y.preset.replace(/-/g, "_") : "",
            filtered_by_server: null != j,
            filtered_by_participants: null != f || p.size > 0,
            filtered_by_favorites: u === G.oH.FAVORITES,
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
            P.current = null;
            return;
        }
        let t = JSON.stringify(e);
        t !== P.current && ((P.current = t), eS.default.track(es.HAw.CLIPS_FILTER_CHANGED, e));
    }, [m, x, g, y, j, f, p, u, v]);
    let S = a.useMemo(() => l.map((e) => e.key), [l]),
        I = (0, E.A)(S),
        D = a.useMemo(() => new Map(I.map((e) => [e?.id, e])), [I]),
        T = a.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, n.jsx)(L.A, { game: D.get(e.key), size: L.M.XSMALL }),
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
                        let t = tf.A.getGuild(e);
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
                    icon: (0, n.jsx)(tx.Ay, { guild: e.guild, size: tx.Ay.Sizes.MINI }),
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
                        let e = M.default.getUser(l.key);
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
                    icon: (0, n.jsx)(tm.eu, { src: e.avatarUrl, size: eC._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [i],
        ),
        O = a.useMemo(() => (null != j ? new Set([j]) : new Set()), [j]),
        U = a.useMemo(() => (null != v ? new Set([v]) : new Set()), [v]),
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
        B = (0, tg.HN)() && u !== G.oH.AUTO_CLIPS,
        Y = eo.intl.string(tO[m]),
        Q = (0, n.jsxs)(n.Fragment, {
            children: [
                $ &&
                    Array.from(g).map((e) => {
                        let t = T.find((t) => t.key === e);
                        return (0, n.jsx)(
                            tH,
                            {
                                label: t?.label ?? e,
                                icon: (0, n.jsx)(L.A, { game: D.get(e), size: L.M.XSMALL }),
                                onRemove: () => C(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != y && (0, n.jsx)(tH, { label: tE(y), onRemove: () => N(null) }, "date"),
                null != j &&
                    (0, n.jsx)(
                        tH,
                        {
                            label: R.find((e) => e.key === j)?.label ?? j,
                            icon:
                                null != F.get(j)
                                    ? (0, n.jsx)(tx.Ay, { guild: F.get(j), size: tx.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => k(null),
                        },
                        "guild",
                    ),
                q && Array.from(p).map((e) => (0, n.jsx)(t$, { userId: e, onRemove: () => b(e) }, `user-${e}`)),
                null != v && (0, n.jsx)(tH, { label: v, onRemove: () => A(null) }, "activity"),
                B && "all" !== m && (0, n.jsx)(tH, { label: Y, onRemove: () => h("all") }, "method"),
            ],
        }),
        X = ($ && g.size > 0) || null != y || null != j || (q && p.size > 0) || null != v || (B && "all" !== m);
    return (0, n.jsxs)("div", {
        className: tz.kT,
        children: [
            (0, n.jsxs)("div", {
                className: tz.HL,
                children: [
                    (0, n.jsx)("div", {
                        className: tz.MT,
                        children: (0, n.jsx)(th.I, {
                            ref: d,
                            placeholder: eo.intl.string(eo.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: tz.Zq,
                        children: [
                            B && (0, n.jsx)(tK, {}),
                            $ &&
                                T.length > 0 &&
                                (0, n.jsx)(tR, {
                                    triggerLabel: eo.intl.string(eo.t.URyqtP),
                                    options: T,
                                    selectedKeys: g,
                                    onToggle: C,
                                    multiSelect: !0,
                                    searchPlaceholder: eo.intl.string(eo.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(tU, {}),
                            R.length > 0 &&
                                (0, n.jsx)(tR, {
                                    triggerLabel: eo.intl.string(eo.t["5qyruI"]),
                                    options: R,
                                    selectedKeys: O,
                                    onToggle: K,
                                    multiSelect: !1,
                                    searchPlaceholder: eo.intl.string(eo.t["5h0QOP"]),
                                }),
                            q &&
                                z.length > 0 &&
                                (0, n.jsx)(tR, {
                                    triggerLabel: eo.intl.string(eo.t.YQ6dJg),
                                    options: z,
                                    selectedKeys: p,
                                    onToggle: (e) => b(e),
                                    multiSelect: !0,
                                    searchPlaceholder: eo.intl.string(eo.t["5h0QOP"]),
                                }),
                            H.length > 0 &&
                                (0, n.jsx)(tR, {
                                    triggerLabel: eo.intl.string(eo.t.agRtPG),
                                    options: H,
                                    selectedKeys: U,
                                    onToggle: V,
                                    multiSelect: !1,
                                    searchPlaceholder: eo.intl.string(eo.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(tG, {}),
                        ],
                    }),
                ],
            }),
            X &&
                (0, n.jsxs)("div", {
                    className: tz.eH,
                    children: [
                        Q,
                        (0, n.jsx)(Z.Q, {
                            size: "sm",
                            variant: "primary",
                            text: eo.intl.string(eo.t.O8k7O4),
                            onClick: w,
                        }),
                    ],
                }),
        ],
    });
}
function t$(e) {
    let { userId: t, onRemove: l } = e,
        a = (0, d.bG)([M.default], () => M.default.getUser(t), [t]);
    if (null == a) return null;
    let i = a.globalName ?? a.username;
    return (0, n.jsx)(tH, {
        label: i,
        icon: (0, n.jsx)(tm.eu, { src: a.getAvatarURL(null, 32), size: eC._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
var tq = l(689175);
let tB = (0, l(945810).mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var tY = l(449543),
    tQ = l(152858);
function tX(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var tW = l(329924);
function tZ(e) {
    let { clips: t, onEdit: l, onEdgeNavigate: i } = e,
        s = a.useMemo(() => tX(t), [t]),
        r = (0, e9.P)((e) => e.setActiveMainLink),
        o = (0, q.GV)(),
        c = a.useMemo(() => [s.length], [s.length]),
        { getContainerProps: d, getItemProps: u, getRowProps: m } = (0, K.A)({ navId: o, columnCounts: c }),
        { onFocus: h, onKeyDown: p, ...j } = d(),
        v = a.useCallback(
            (e) => {
                if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
                    (e.preventDefault(),
                        e.stopPropagation(),
                        i?.("ArrowUp" === e.key ? "up" : "down", e.currentTarget));
                    return;
                }
                p(e);
            },
            [p, i],
        ),
        y = { ...j, onKeyDown: v };
    return 0 === s.length
        ? null
        : (0, n.jsxs)("section", {
              className: tW.uW,
              "aria-label": eo.intl.string(er.default.efLpNC),
              children: [
                  (0, n.jsxs)("div", {
                      className: tW.wx,
                      children: [
                          (0, n.jsxs)("div", {
                              className: tW.mX,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: tW.UP,
                                      children: [
                                          (0, n.jsx)(x.D, {
                                              variant: "heading-lg/medium",
                                              color: "text-default",
                                              children: eo.intl.string(er.default.I1h8uD),
                                          }),
                                          (0, n.jsx)(f.E, { type: "early_access", variant: "brand", icon: g.t }),
                                      ],
                                  }),
                                  (0, n.jsx)(x.D, {
                                      variant: "display-md",
                                      color: "text-default",
                                      className: tW.DD,
                                      children: eo.intl.string(er.default.efLpNC),
                                  }),
                              ],
                          }),
                          (0, n.jsx)("div", {
                              className: tW.BX,
                              children: (0, n.jsx)(eb.$, {
                                  variant: "overlay-primary",
                                  size: "sm",
                                  onClick: () => r(G.oH.AUTO_CLIPS),
                                  text: eo.intl.string(er.default.gCay1w),
                              }),
                          }),
                      ],
                  }),
                  (0, n.jsx)(tY.A, {
                      className: tW.jG,
                      gap: 16,
                      edgeFade: 0,
                      scrollBehavior: tQ.Uf.ITEM,
                      hideActionsWhenDisabled: !0,
                      "aria-label": eo.intl.string(er.default.efLpNC),
                      gridContainerProps: y,
                      gridRowProps: m(0),
                      children: s.map((e, t) =>
                          (0, n.jsx)(
                              "div",
                              {
                                  className: tW.v2,
                                  children: (0, n.jsx)(eZ, {
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
var tJ = l(770178),
    t0 = l(202163),
    t1 = l(68408);
function t2(e) {
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
        { gameRecord: h } = (0, t0.A)(t.applicationId),
        { onShareSession: f } = a.useContext(eQ.$),
        g = a.useCallback(() => {
            f?.(t.clips);
        }, [f, t.clips]),
        j = (0, e9.P)((e) => e.setGameFacet),
        v = (0, e9.P)((e) => e.setActiveMainLink),
        y = t.applicationId,
        C = null != y && "" !== y,
        b = a.useCallback(() => {
            null != y && "" !== y && (j(y), v(G.oH.ALL_CLIPS));
        }, [y, j, v]),
        A = a.useCallback(() => {
            C ? b() : v(G.oH.ALL_CLIPS);
        }, [C, b, v]),
        N = a.useMemo(() => (null == h ? null : (h.getBannerURL(1024) ?? h.screenshotUrls?.[0] ?? null)), [h]),
        w = (0, d.yK)([M.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => M.default.getUser(e)).filter(eI.Vq);
        }),
        P = a.useMemo(() => t.clips.filter((e) => "auto" === e.clipMethod).length, [t.clips]),
        E = (0, eE.e)({ timestamp: t.startedAt }),
        [S, I] = a.useState(800),
        D = (0, k.A)((e) => {
            I(e.target.clientWidth);
        }),
        T = (0, tJ.w)(D),
        _ = Math.max(1, (S - 40) / 3),
        R = a.useMemo(() => {
            let e = t.clips.slice(0, 6),
                l = [];
            for (let t = 0; t < e.length; t += 3) l.push(e.slice(t, t + 3));
            return l;
        }, [t.clips]),
        F = t.clips.length > 6,
        H = (0, q.GV)(),
        z = a.useMemo(() => R.map((e) => e.length), [R]),
        { getContainerProps: O, getItemProps: U, getRowProps: V } = (0, K.A)({ navId: H, columnCounts: z }),
        { onFocus: $, onKeyDown: B, ...Y } = O(),
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
        className: t1.dZ,
        children: [
            (0, n.jsx)("div", {
                className: s()(t1.tB, null == N && t1.rD),
                style: null != N ? { backgroundImage: `url(${N})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, n.jsxs)("div", {
                className: t1.wx,
                children: [
                    C
                        ? (0, n.jsx)(ep.s, {
                              "aria-label": t.applicationName,
                              onClick: b,
                              className: t1.Zn,
                              children: (0, n.jsx)(L.A, {
                                  className: t1.Gt,
                                  game: h,
                                  size: L.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, n.jsx)(L.A, { className: t1.Gt, game: h, size: L.M.MEDIUM, "aria-hidden": !0 }),
                    (0, n.jsxs)("div", {
                        className: t1.TK,
                        children: [
                            C
                                ? (0, n.jsx)(ep.s, {
                                      "aria-label": t.applicationName,
                                      onClick: b,
                                      className: t1.wb,
                                      children: (0, n.jsx)(x.D, {
                                          variant: "text-md/medium",
                                          color: "text-default",
                                          className: t1.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, n.jsx)(x.D, {
                                      variant: "text-md/medium",
                                      color: "text-default",
                                      className: t1.mO,
                                      children: t.applicationName,
                                  }),
                            (0, n.jsxs)("div", {
                                className: t1.mI,
                                children: [
                                    (0, n.jsx)(p.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: eo.intl.format(er.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    P > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: t1.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(p.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: eo.intl.format(er.default.eRrt7X, { count: P }),
                                                }),
                                            ],
                                        }),
                                    (0, n.jsx)("span", { className: t1.TG, "aria-hidden": "true" }),
                                    (0, n.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: E }),
                                    w.length > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: t1.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(eg.A, { users: w, maxUsers: 5, size: eC._3.SIZE_16 }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    t.clips.length > 0 &&
                        null != f &&
                        (0, n.jsx)("div", {
                            className: t1.$s,
                            children: (0, n.jsx)(eb.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: tt.ShareIcon,
                                text: eo.intl.string(er.default.l34lLs),
                                onClick: g,
                            }),
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                ref: T,
                className: t1.Vg,
                ...Y,
                tabIndex: -1,
                onKeyDown: Q,
                children: R.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: t1.UX,
                            ...V(t),
                            children: e.map((e, a) => {
                                let s = { width: _ };
                                return (
                                    c && (s["--custom-entrance-delay"] = `${e7(u + t + a)}ms`),
                                    (0, n.jsx)(
                                        "div",
                                        {
                                            className: c ? e6.$ : void 0,
                                            style: s,
                                            children: (0, n.jsx)(eZ, {
                                                clip: e,
                                                actionsDisabled: i,
                                                isNew: l.includes(e.id),
                                                onClick: o ?? r,
                                                onEdit: r,
                                                gridItemProps: U(a, t),
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
                    className: t1.Vc,
                    children: (0, n.jsx)(eb.$, {
                        variant: "secondary",
                        size: "sm",
                        text: eo.intl.string(er.default.pqk9U0),
                        onClick: A,
                    }),
                }),
        ],
    });
}
var t3 = l(799888);
function t5(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: i, onClipClick: s, isLoading: r, onScroll: o } = e,
        { enableAutoClipsReview: c } = tB.useConfig({ location: "ClipsGalleryHome" }),
        u = a.useMemo(() => tX(t), [t]),
        m = c && u.length > 0,
        h = (0, d.yK)([T.Ay], () => T.Ay.getNewClipIds()),
        f = (0, d.bG)([T.Ay], () => T.Ay.getExportingClipIds().size > 0),
        g = (0, e9.P)((e) => e.setActiveMainLink),
        p = a.useCallback(() => {
            g(G.oH.ALL_CLIPS);
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
        v = (0, d.bG)([A.Ay], () => A.Ay.useReducedMotion),
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
        k = a.useCallback(
            (e) => {
                o?.(e.currentTarget.scrollTop);
            },
            [o],
        );
    return j.length > 0 || m
        ? (0, n.jsx)(tq.Ch, {
              className: t3.iR,
              fade: !0,
              onScroll: k,
              children: (0, n.jsxs)("div", {
                  className: t3.Qs,
                  ref: C,
                  children: [
                      m &&
                          (0, n.jsx)("div", {
                              className: t3.Dk,
                              children: (0, n.jsx)(tZ, { clips: t, onEdit: i, onEdgeNavigate: b }),
                          }),
                      j.length > 0 &&
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(x.D, {
                                      variant: "heading-lg/medium",
                                      color: "text-default",
                                      children: eo.intl.string(er.default.zfTWDE),
                                  }),
                                  j.map((e, t) =>
                                      (0, n.jsx)(
                                          t2,
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
                                      className: t3.dp,
                                      children: (0, n.jsx)(eb.$, {
                                          variant: "primary",
                                          text: eo.intl.string(er.default.RQtkop),
                                          onClick: p,
                                      }),
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : r
          ? (0, n.jsx)("div", { className: t3.dc, children: (0, n.jsx)(V.y, {}) })
          : (0, n.jsx)(em, { isEmptyBecauseQuery: l > 0 });
}
var t8 = l(837381),
    t9 = l(741918),
    t7 = l(812993),
    t4 = l(332837),
    t6 = l(176781),
    le = l(650684),
    lt = l(364522),
    ll = l(625903),
    ln = l(260762),
    la = l(599428);
function li(e) {
    let { itemId: t, icon: l, label: a, onClick: i, isSelected: r = !1, isDisabled: o = !1, badgeCount: c = 0 } = e,
        d = o && !r,
        u = (0, t8.rm)(t);
    return (0, n.jsx)(j.m, {
        text: a,
        position: "right",
        children: (0, n.jsxs)(ej.D, {
            ...u,
            role: "button",
            onClick: d ? void 0 : i,
            "aria-pressed": r,
            "aria-disabled": d,
            "aria-label": a,
            className: s()(la.AY, { [la.Hy]: r, [la.Is]: d }),
            children: [l, c > 0 && (0, n.jsx)("span", { className: la.e, children: (0, n.jsx)(t7.hV, { count: c }) })],
        }),
    });
}
function ls(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: i } = e,
        r = (0, e9.P)((e) => e.activeMainLink),
        o = (0, e9.P)((e) => e.gameFacet),
        c = (0, e9.P)((e) => e.clippedWithFacet),
        d = (0, e9.P)((e) => e.setActiveMainLink),
        u = (0, e9.P)((e) => e.setGameFacet),
        m = (0, e9.P)((e) => e.setClippedWithFacet),
        h = (0, e9.P)((e) => e.clearFilters),
        x = (0, e9.P)((e) => e.setPendingContentFocus),
        f = (0, tg.HN)(),
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
                (u(o === e ? null : e), m(null), d(G.oH.ALL_CLIPS), h(), v());
            },
            [o, u, m, d, h, v],
        ),
        b = a.useCallback(() => {
            (0, et.openUserSettings)(ee.X.CLIPS_PANEL);
        }, []),
        k = a.useMemo(() => t.map((e) => e.key), [t]),
        A = (0, E.A)(k),
        N = a.useMemo(() => new Map(A.map((e) => [e?.id, e])), [A]),
        w = (0, q.GV)(),
        P = (0, ln.A)(w),
        { setFocus: S } = P,
        I = o ?? r;
    a.useEffect(() => {
        S(I);
    }, [S, I]);
    let { ref: M, onKeyDown: D, ...T } = (0, t8.LT)(P),
        _ = a.useCallback(
            (e) => {
                j.current = e.key === t9.D$.ENTER || e.key === t9.D$.SPACE;
                try {
                    D(e);
                } finally {
                    j.current = !1;
                }
            },
            [D],
        );
    return (0, n.jsx)(t8.hD, {
        navigator: P,
        children: (0, n.jsxs)("div", {
            className: la.H$,
            ...T,
            tabIndex: -1,
            onKeyDown: _,
            ref: M,
            children: [
                (0, n.jsxs)("div", {
                    className: s()(la.o3, la.A9),
                    children: [
                        (0, n.jsx)(li, {
                            itemId: G.oH.HOME,
                            icon: (0, n.jsx)(t4.HomeIcon, { size: "sm", color: "currentColor" }),
                            label: eo.intl.string(er.default.iVqj8B),
                            isSelected: p(G.oH.HOME),
                            onClick: () => y(G.oH.HOME),
                        }),
                        (0, n.jsx)(li, {
                            itemId: G.oH.ALL_CLIPS,
                            icon: (0, n.jsx)(t6.x, { size: "sm", color: "currentColor" }),
                            label: eo.intl.string(eo.t.dPVrEv),
                            isSelected: p(G.oH.ALL_CLIPS),
                            isDisabled: 0 === l.allClips,
                            badgeCount: i.allClips,
                            onClick: () => y(G.oH.ALL_CLIPS),
                        }),
                        f &&
                            (0, n.jsx)(li, {
                                itemId: G.oH.AUTO_CLIPS,
                                icon: (0, n.jsx)(le.e, { size: "sm", color: "currentColor" }),
                                label: eo.intl.string(er.default.ikNKf1),
                                isSelected: p(G.oH.AUTO_CLIPS),
                                isDisabled: 0 === l.autoClips,
                                badgeCount: i.autoClips,
                                onClick: () => y(G.oH.AUTO_CLIPS),
                            }),
                        (0, n.jsx)(li, {
                            itemId: G.oH.FAVORITES,
                            icon: (0, n.jsx)(tn.StarIcon, { size: "sm", color: "currentColor" }),
                            label: eo.intl.string(eo.t["9rlCk1"]),
                            isSelected: p(G.oH.FAVORITES),
                            onClick: () => y(G.oH.FAVORITES),
                        }),
                    ],
                }),
                t.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { className: la.Gz }),
                            (0, n.jsx)(lt.Ip, {
                                className: s()(la.UZ, la.A9),
                                fade: !0,
                                children: t.map((e) => {
                                    let t = o === e.key;
                                    return (0, n.jsx)(
                                        li,
                                        {
                                            itemId: e.key,
                                            icon: (0, n.jsx)(L.A, {
                                                game: N.get(e.key),
                                                size: L.M.SMALL,
                                                className: la.az,
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
                    className: s()(la.Ms, la.A9),
                    children: (0, n.jsx)(li, {
                        itemId: "settings",
                        icon: (0, n.jsx)(ll.SettingsIcon, { size: "sm", color: "currentColor" }),
                        label: eo.intl.string(eo.t["3D5yo/"]),
                        onClick: b,
                    }),
                }),
            ],
        }),
    });
}
var lr = l(409067),
    lo = l(314484);
function lc(e) {
    let {
        channelId: t,
        onClose: i,
        picker: K,
        transitionState: V,
        initialEditingClipId: $,
        initialMainLink: q = G.oH.HOME,
        ...B
    } = e;
    (0, U.A)();
    let { analyticsLocations: Y } = (0, w.Ay)(N.A.CLIPS_GALLERY),
        Q = K?.onPick,
        X = K?.allowMultiSelect ?? !0,
        [W, Z] = a.useState(new Set()),
        J = a.useRef(null),
        ee = (0, k.A)((e) => {
            let t = J.current;
            if (null == t) return;
            let l = Math.min(1, Math.max(0, e) / 40);
            t.style.setProperty("--custom-clips-header-solid-opacity", `${l}`);
        }),
        {
            gamesFacet: et,
            participantsFacet: el,
            filteredClips: en,
            mainLinkCounts: ea,
            mainLinkNewCounts: ei,
            allClips: es,
        } = (0, lr.ad)(K?.filterClip),
        ec = (0, d.bG)([T.Ay], () => T.Ay.getSettings().storageLocation),
        [ed, eu] = a.useState(!0);
    a.useEffect(() => {
        (async function () {
            eu(!0);
            try {
                await (0, _.Fb)(ec);
            } finally {
                eu(!1);
            }
        })().catch(() => {});
    }, [ec]);
    let { onShareClick: em } = (0, O.A)(t);
    (a.useEffect(
        () => () => {
            (e9.P.getState().resetAll(), (0, _.Su)());
        },
        [],
    ),
        a.useEffect(() => {
            let e = e9.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink(q);
        }, [q]),
        (0, o.l0)(() => {
            T.Ay.hasClips() && I.A.isDeveloper && S.Ay.fireSurveyAction(c.w.POPULATED_CLIP_GALLERY_CLOSED);
        }));
    let eh = (0, d.bG)([T.Ay], () => T.Ay.getExportingClipIds().size > 0),
        [ex, ef] = a.useState(null != $ ? "editing" : "gallery"),
        [eg, ep] = a.useState($ ?? null),
        ej = (0, d.bG)([T.Ay], () => (null != eg ? T.Ay.getClipById(eg) : null), [eg]),
        ev = (0, u.useIsModalAtTop)(eK.nm),
        ey = a.useRef(ex);
    ((ey.current = ex), (a.useRef(eg).current = eg));
    let [eC, eb] = a.useState(null != $ ? h.ip.ENTERED : h.ip.HIDDEN),
        ek = a.useRef(null),
        eA = (0, e9.P)((e) => e.gameFacet),
        eN = (0, e9.P)((e) => e.clippedWithFacet),
        ew = (0, e9.P)((e) => e.activeMainLink),
        eP = (0, e9.P)((e) => e.currentPage),
        eE = eP === G.fB.HOME,
        { ref: eL, height: eS = 64 } = (0, b.Ay)(eP),
        eI = 68 + eS,
        eM = eE ? 68 : eI - 16;
    a.useLayoutEffect(() => {
        ee(0);
    }, [eP, ee]);
    let eD = (0, e9.P)((e) => e.pendingContentFocus),
        eT = (0, e9.P)((e) => e.setPendingContentFocus),
        e_ = a.useRef(null);
    a.useEffect(() => {
        if (!eD) return;
        let e = 0,
            t = 0;
        return (
            (t = requestAnimationFrame(function l() {
                let n = e_.current?.querySelector('[role="grid"] [role="button"]');
                if (null != n) {
                    (n.focus(), eT(!1));
                    return;
                }
                if (e++ < 10) {
                    t = requestAnimationFrame(l);
                    return;
                }
                eT(!1);
            })),
            () => cancelAnimationFrame(t)
        );
    }, [eD, eT]);
    let eR = (0, e9.P)(
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
        ew === G.oH.HOME && eR && e9.P.getState().setActiveMainLink(G.oH.ALL_CLIPS);
    }, [ew, eR]);
    let eF = a.useMemo(() => (null != eA ? [eA] : []), [eA]),
        eH = (0, E.A)(eF)[0] ?? null,
        ez = (0, d.bG)([M.default], () => (null != eN ? M.default.getUser(eN) : null), [eN]),
        eO = a.useMemo(() => {
            if (null != eA) return et.find((e) => e.key === eA)?.name ?? eo.intl.string(eo.t.dPVrEv);
            if (null != eN) return null != ez ? (ez.globalName ?? ez.username) : eN;
            switch (ew) {
                case G.oH.FAVORITES:
                    return eo.intl.string(eo.t["9rlCk1"]);
                case G.oH.AUTO_CLIPS:
                    return eo.intl.string(er.default.ikNKf1);
                case G.oH.HOME:
                    return eo.intl.string(er.default.iVqj8B);
                default:
                    return eo.intl.string(eo.t.dPVrEv);
            }
        }, [eA, eN, ew, et, ez]),
        eU = a.useMemo(() => {
            if (null != eA) return et.find((e) => e.key === eA)?.count ?? 0;
            if (null != eN) return el.find((e) => e.key === eN)?.count ?? 0;
            switch (ew) {
                case G.oH.HOME:
                    return null;
                case G.oH.AUTO_CLIPS:
                    return ea.autoClips;
                case G.oH.FAVORITES:
                    return ea.favorites;
                default:
                    return ea.allClips;
            }
        }, [eA, eN, ew, et, el, ea]),
        eG = a.useCallback(() => {
            (ef("editing"), A.Ay.useReducedMotion && eb(h.ip.ENTERED));
        }, []),
        eV = a.useCallback((e) => {
            Z((t) => {
                let l = new Set(t);
                return (l.has(e) ? l.delete(e) : l.add(e), l);
            });
        }, []),
        e$ = a.useCallback(
            (e) => {
                (ep(e.id), eG());
            },
            [eG],
        ),
        eq = a.useCallback(() => {
            (A.Ay.useReducedMotion && ep(null), ef("gallery"));
        }, []);
    (a.useEffect(() => {
        function e(e) {
            "Escape" === e.key && "editing" === ey.current && ev && (e.stopPropagation(), eq());
        }
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [eq, i, ev]),
        a.useEffect(() => {
            function e(e) {
                if (
                    ("f" !== e.key && "F" !== e.key) ||
                    e.altKey ||
                    e.shiftKey ||
                    ((0, D.isMac)() ? !e.metaKey || e.ctrlKey : !e.ctrlKey || e.metaKey) ||
                    !ev ||
                    "gallery" !== ey.current
                )
                    return;
                (e.preventDefault(), e.stopPropagation());
                let t = e9.P.getState();
                (t.currentPage === G.fB.HOME && t.setActiveMainLink(G.oH.ALL_CLIPS), t.setPendingSearchFocus(!0));
            }
            return (document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0));
        }, [ev]),
        a.useEffect(
            () =>
                "editing" === ex && null != eg
                    ? void (0, _.YK)(eg)
                    : ((0, _.TE)(),
                      () => {
                          (0, _.TE)();
                      }),
            [ex, eg],
        ));
    let eB = a.useCallback(() => {
            Z(new Set());
        }, []),
        eY = W.size > 0,
        eX = a.useCallback(() => {
            let e = es.filter((e) => W.has(e.id));
            (0, u.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("913367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, n.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                (eB(), l.onClose());
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [es, W, eB]),
        eW = a.useCallback(async () => {
            let e = es.filter((e) => W.has(e.id));
            (await em({ clips: e }), eB());
        }, [es, W, em, eB]),
        eZ = a.useCallback(
            async (e) => {
                0 !== e.length && (Z(new Set(e.map((e) => e.id))), await em({ clips: e }), eB());
            },
            [em, eB],
        ),
        eJ = a.useCallback(() => {
            let e = e9.P.getState();
            (e.setGameFacet(null),
                e.setClippedWithFacet(null),
                e.setActiveMainLink(G.oH.ALL_CLIPS),
                e.setPendingSearchFocus(!0));
        }, []),
        e0 = a.useMemo(() => {
            let e = es.filter((e) => W.has(e.id));
            return e.length > 0 && e.every((e) => e.isFavorite);
        }, [es, W]),
        e1 = a.useCallback(async () => {
            let e = es.filter((e) => W.has(e.id)),
                t = !e0;
            (await Promise.all(e.filter((e) => e.isFavorite !== t).map((e) => (0, _.Yy)(e.id, { isFavorite: t }, !0))),
                eB());
        }, [es, W, e0, eB]),
        e2 = a.useMemo(() => {
            let e = 0,
                t = 0,
                l = 0;
            return (
                es.forEach((n) => {
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
                    number_of_clips_loaded: es.length,
                    num_autoclips_loaded: e,
                    num_distributed_clips_loaded: t,
                    num_manual_clips_loaded: l,
                    gallery_page: ew,
                }
            );
        }, [es, ew]);
    (0, P.A)(
        { type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.CLIP_GALLERY_VIEWED, properties: e2 },
        { disableTrack: ed },
        [e2, ed],
    );
    let e3 = a.useMemo(
        () => ({
            selectedClipIds: W,
            toggleClipSelection: eV,
            clearSelection: eB,
            isMultiSelectMode: eY,
            picker: K,
            onShareSession: X ? eZ : void 0,
        }),
        [W, eV, eB, eY, K, X, eZ],
    );
    return (0, n.jsx)(w.f5, {
        value: Y,
        children: (0, n.jsx)(eQ.$.Provider, {
            value: e3,
            children: (0, n.jsx)(m.N, {
                onClose: i,
                transitionState: V,
                ...B,
                children: (0, n.jsxs)("div", {
                    className: lo.jT,
                    ref: ek,
                    children: [
                        (0, n.jsxs)("div", {
                            className: s()(lo.PD, "gallery" === ex && lo.vu),
                            inert: "gallery" !== ex,
                            children: [
                                (0, n.jsx)(ls, { gamesFacet: et, mainLinkCounts: ea, mainLinkNewCounts: ei }),
                                (0, n.jsxs)("div", {
                                    className: lo.Qs,
                                    ref: e_,
                                    style: {
                                        "--custom-clips-header-height": "68px",
                                        "--custom-clips-scroll-inset": `${eM}px`,
                                    },
                                    children: [
                                        (0, n.jsxs)("div", {
                                            ref: J,
                                            className: s()(lo.$Q, !eE && lo.iF),
                                            children: [
                                                (0, n.jsxs)("div", {
                                                    className: lo.ev,
                                                    children: [
                                                        null != eA &&
                                                            (0, n.jsx)(L.A, {
                                                                game: eH,
                                                                size: L.M.SMALL,
                                                                className: lo.Ve,
                                                                "aria-hidden": !0,
                                                            }),
                                                        (0, n.jsx)(x.D, {
                                                            variant: "heading-md/semibold",
                                                            color: "text-default",
                                                            className: lo.Yn,
                                                            children: eO,
                                                        }),
                                                        null == eA &&
                                                            null == eN &&
                                                            ew === G.oH.AUTO_CLIPS &&
                                                            (0, n.jsx)(f.E, {
                                                                icon: g.t,
                                                                type: "early_access",
                                                                variant: "brand",
                                                            }),
                                                        null != eU &&
                                                            !eR &&
                                                            (0, n.jsxs)("div", {
                                                                className: lo.Vl,
                                                                children: [
                                                                    (0, n.jsx)("span", {
                                                                        className: lo.FK,
                                                                        "aria-hidden": "true",
                                                                    }),
                                                                    (0, n.jsx)(p.E, {
                                                                        variant: "text-md/normal",
                                                                        color: "text-muted",
                                                                        children: eo.intl.format(er.default["+YIqQM"], {
                                                                            count: eU,
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                    ],
                                                }),
                                                (0, n.jsxs)("div", {
                                                    className: lo.$s,
                                                    children: [
                                                        (0, n.jsx)(j.m, {
                                                            text: eo.intl.string(eo.t["5h0QOP"]),
                                                            children: (0, n.jsx)(v.K, {
                                                                onClick: eJ,
                                                                icon: y.MagnifyingGlassIcon,
                                                                size: "sm",
                                                                variant: "icon-only",
                                                                "aria-label": eo.intl.string(eo.t["5h0QOP"]),
                                                            }),
                                                        }),
                                                        (0, n.jsx)(v.K, {
                                                            onClick: i,
                                                            icon: C.XLargeIcon,
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            "aria-label": eo.intl.string(eo.t.cpT0Cq),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        eE
                                            ? (0, n.jsx)(t5, {
                                                  filteredClips: en,
                                                  totalClipCount: es.length,
                                                  onEdit: e$,
                                                  onClipClick: Q,
                                                  isLoading: ed,
                                                  onScroll: ee,
                                              })
                                            : (0, n.jsxs)("div", {
                                                  className: lo.LG,
                                                  children: [
                                                      (0, n.jsx)("div", {
                                                          className: lo.oP,
                                                          ref: eL,
                                                          children: (0, n.jsx)(tV, {
                                                              allClips: es,
                                                              gamesFacet: et,
                                                              participantsFacet: el,
                                                          }),
                                                      }),
                                                      (0, n.jsx)(te, {
                                                          onEdit: e$,
                                                          channelId: t,
                                                          filteredClips: en,
                                                          totalClipCount: es.length,
                                                          onClipClick: Q,
                                                          isLoading: ed,
                                                          topInset: eI,
                                                      }),
                                                  ],
                                              }),
                                        X &&
                                            eY &&
                                            (0, n.jsx)(ts, {
                                                selectedCount: W.size,
                                                allSelectedFavorited: e0,
                                                onClear: eB,
                                                onFavorite: e1,
                                                onDelete: eX,
                                                onShare: eW,
                                                isSharing: eh,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: s()(lo.jN, "editing" === ex && lo.vu),
                            inert: "editing" !== ex,
                            onTransitionEnd: () => {
                                switch (ex) {
                                    case "gallery":
                                        (ep(null), eb(h.ip.HIDDEN));
                                        break;
                                    case "editing":
                                        eb(h.ip.ENTERED);
                                }
                            },
                            children:
                                null != ej &&
                                (0, n.jsx)(R.p, {
                                    clip: ej,
                                    modalContainerRef: ek,
                                    children: (0, n.jsxs)(
                                        z.JQ,
                                        {
                                            children: [
                                                (0, n.jsx)(H.A, { transitionState: eC, onClose: eq }),
                                                (0, n.jsx)(F.A, { channelId: t, onClose: eq }),
                                            ],
                                        },
                                        ej.id,
                                    ),
                                }),
                        }),
                    ],
                }),
            }),
        }),
    });
}
