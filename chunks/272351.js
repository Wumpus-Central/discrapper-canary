l.d(t, { default: () => lm });
var n = l(477900),
    a = l(582128),
    i = l(503698),
    s = l.n(i),
    r = l(562708),
    o = l(935399),
    c = l(517846),
    u = l(17928),
    d = l(192308),
    m = l(521489),
    f = l(231723),
    h = l(297264),
    g = l(508770),
    x = l(403581),
    p = l(834730),
    v = l(866665),
    j = l(408278),
    y = l(7689),
    C = l(972213),
    b = l(765671),
    k = l(765548),
    A = l(775602),
    N = l(793574),
    w = l(688810),
    E = l(139286),
    P = l(429913),
    L = l(769015),
    S = l(27620),
    I = l(540999),
    M = l(287809),
    D = l(723702),
    T = l(915725),
    _ = l(614584),
    R = l(362081),
    F = l(282207),
    H = l(96065),
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
function eu(e) {
    let { header: t, description: l } = e;
    return (0, n.jsxs)("div", {
        className: ec.Nr,
        children: [t, (0, n.jsx)(p.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function ed() {
    let e = (0, Y.bG)([el.Ay], () => el.Ay.getKeybindForAction(es.hCu.SAVE_CLIP)),
        t = null != e ? en.dI(e.shortcut, !0) : null;
    return (0, n.jsxs)("div", {
        className: ec.kR,
        children: [
            (0, n.jsx)(eu, {
                header: (0, n.jsx)(Q.GameControllerIcon, { size: "refresh_sm", color: X.A.colors.ICON_DEFAULT }),
                description: eo.intl.string(er.default["4K56sP"]),
            }),
            (0, n.jsx)(eu, {
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
            (0, n.jsx)(eu, {
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
                (0, n.jsx)(h.D, {
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
                l && !t && (0, n.jsx)(ed, {}),
            ],
        }),
    });
}
let ef = 4 / 3;
var eh = l(621466),
    eg = l(61491),
    ex = l(342952),
    ep = l(890856),
    ev = l(939249),
    ej = l(820081),
    ey = l(365199),
    eC = l(778712),
    eb = l(821609),
    ek = l(22231),
    eA = l(983851),
    eN = l(31300),
    ew = l(442433),
    eE = l(587895),
    eP = l(549973),
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
    eG = l(869036),
    eK = l(696016),
    eV = l(153511);
function e$(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    eO()(l?.type === eK.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let a = (0, u.bG)([M.default], () => M.default.getUser(l.remoteTriggerUserId));
    if (null == a) return null;
    let i = a.globalName ?? a.username;
    return (0, n.jsx)(v.m, {
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
    return (0, n.jsx)(v.m, {
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
        case eK.Gy.GAME_EVENT: {
            let e = (0, eG.u)(t.applicationId, eK.Gy.GAME_EVENT, t.decision.signal.eventName);
            if (null == e) return null;
            return (0, n.jsx)(eq, {
                icon: e,
                text: t.decision.signal.title ?? "",
                tooltipText: eo.intl.string(er.default["347DBb"]),
            });
        }
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
        d = (0, eD.Y_)(),
        m = !0 === d.pending,
        f = t || m,
        { analyticsLocations: h } = (0, w.Ay)(N.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: g, toggleClipSelection: x, isMultiSelectMode: p, picker: v } = a.useContext(eQ.$),
        j = v?.allowMultiSelect ?? !0,
        y = null != v ? (0, eX.$)(v.action).label : void 0,
        [C, b] = a.useState(!1),
        [k, E] = a.useState(!1),
        [P, L] = a.useState(!1),
        [S, I] = a.useState(!1),
        [M, D] = a.useState(0),
        _ = g.has(d.id),
        R = d.type === eK.nQ.SCREENSHOT,
        F = "auto" === d.clipMethod,
        H = (0, u.bG)([A.Ay], () => A.Ay.keyboardModeEnabled),
        z = (k || C || (P && H)) && !_,
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
                (e.preventDefault(), e.stopPropagation(), x(d.id));
            },
            [x, d.id],
        ),
        Y = a.useCallback(
            (e) => {
                b(!0);
                let t =
                    p && g.size > 0
                        ? Array.from(g)
                              .map((e) => T.Ay.getClipById(e))
                              .filter(eI.Vq)
                        : [d];
                (0, ew.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("238417"),
                            l.e("657266"),
                            l.e("272396"),
                            l.e("595429"),
                            l.e("311930"),
                            l.e("320891"),
                            l.e("531279"),
                            l.e("371863"),
                            l.e("338601"),
                            l.e("886456"),
                            l.e("669006"),
                            l.e("218489"),
                            l.e("218307"),
                            l.e("6896"),
                        ]).then(l.bind(l, 553075));
                        return (l) =>
                            (0, n.jsx)(e, {
                                ...l,
                                analyticsLocations: h,
                                clips: t,
                                actionsDisabled: f,
                                onMainAction: null != v ? () => v.onPick(d) : void 0,
                                mainAction: v?.action,
                                onShare: () => {
                                    eS.default.track(es.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...eM.lc(),
                                        ...eM.Zy(d),
                                    });
                                },
                                onEdit: () => {
                                    (o(d),
                                        eS.default.track(es.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...eM.lc(),
                                            ...eM.Zy(d),
                                        }));
                                },
                                onBeforeDelete: K,
                                onAfterDelete: () => {
                                    eS.default.track(es.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...eM.lc(),
                                        ...eM.Zy(d),
                                    });
                                },
                            });
                    },
                    { onClose: q },
                );
            },
            [d, p, g, f, q, o, K, v, h],
        ),
        Q = a.useCallback(
            (e) => {
                f || (e.preventDefault(), e.stopPropagation(), Y(e));
            },
            [f, Y],
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
                    o(d),
                    eS.default.track(es.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" }));
            },
            [o, d],
        ),
        Z = a.useCallback(
            (e) => {
                !f &&
                    (!(0, eh.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") &&
                            null == e.target.closest("[data-clips-progress]") &&
                            null == e.target.closest("[data-clips-select]") &&
                            e.currentTarget.contains(e.target))) &&
                    (j && e.shiftKey ? (e.preventDefault(), x(d.id)) : j && p ? x(d.id) : null != r && r(d),
                    eS.default.track(es.HAw.CLIP_GALLERY_CARD_CLICKED, { ...eM.lc(), ...eM.Zy(d) }));
            },
            [f, j, p, x, d, r],
        );
    return (0, n.jsx)(w.f5, {
        value: h,
        children: (0, n.jsx)("div", {
            className: eW.hl,
            onFocus: O,
            onBlur: U,
            children: (0, n.jsx)(ep.s, {
                "aria-disabled": f,
                "aria-label": y ?? eo.intl.string(R ? eo.t["HO/oXl"] : eo.t.bt75uw),
                onClick: f ? void 0 : Z,
                onContextMenu: Q,
                buttonProps: null != c ? { role: "button", id: c.id, tabIndex: c.tabIndex } : void 0,
                buttonRef: c?.ref,
                onFocus: c?.onFocus,
                className: s()(eW.Nr, { [eW.r9]: f, [eW.in]: C, [eW.wH]: _ }),
                onMouseEnter: () => E(!0),
                onMouseLeave: () => E(!1),
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
                                showHoverActions: z && !f,
                                showSelect: j && (z || _),
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
        u = (0, eD.Y_)(),
        d = !0 === u.pending;
    return (0, n.jsxs)("div", {
        className: eW.wx,
        children: [
            (0, n.jsxs)("div", {
                className: eW.LD,
                children: [
                    a &&
                        (0, n.jsx)(ev.D, {
                            "aria-label": eo.intl.string(eo.t.XqMe3N),
                            "aria-pressed": i,
                            onClick: r,
                            "data-clips-select": "true",
                            className: s()(eW.UJ, { [eW.ZK]: i }),
                            children: i && (0, n.jsx)(ej.B, { size: "xs", color: "currentColor" }),
                        }),
                    !d &&
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
                    (u.isFavorite || l) &&
                        (0, n.jsx)("div", {
                            className: s()({ [eW.L6]: u.isFavorite }),
                            children: (0, n.jsx)(e_.z, {}),
                        }),
                    l &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(v.m, {
                                    text: eo.intl.string(eo.t["UKOtz+"]),
                                    children: (0, n.jsx)(j.K, {
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
        d = a.useRef(null),
        m = a.useRef(!1),
        f = a.useCallback(
            (e) => {
                let t = d.current;
                if (null == t) return;
                let l = t.getBoundingClientRect();
                0 === l.width || r(Math.max(0, Math.min(100, 100 * ((e - l.left) / l.width))));
            },
            [r],
        ),
        h = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.preventDefault(),
                    (m.current = !0),
                    e.currentTarget.setPointerCapture(e.pointerId),
                    f(e.clientX));
            },
            [f],
        ),
        g = a.useCallback(
            (e) => {
                m.current && f(e.clientX);
            },
            [f],
        ),
        x = a.useCallback((e) => {
            ((m.current = !1),
                e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId));
        }, []),
        v = (0, u.yK)([M.default], () => o.users.map((e) => M.default.getUser(e)).filter(eI.Vq)),
        j = (0, eP.e)({ timestamp: o.createdAt }),
        y = o.decision?.signal?.type,
        C = null != y && y !== eK.Gy.MANUAL,
        b =
            v.length > 0
                ? (0, n.jsx)("span", {
                      className: eW.HD,
                      "data-clips-avatars": "true",
                      children: (0, n.jsx)(ex.A, {
                          maxUsers: 3,
                          users: v,
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
                                            children: eo.intl.format(er.default["0QCBug"], { time: j }),
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
                                        ref: d,
                                        className: eW.hr,
                                        onPointerDown: h,
                                        onPointerMove: g,
                                        onPointerUp: x,
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
            return (0, eg.rB)(l);
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
        t = (0, u.bG)([eE.A], () => (null != e.applicationId ? eE.A.getApplication(e.applicationId) : null)),
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
var e7 = l(792852);
function e9(e) {
    return Math.min(45 * e, 520);
}
var e4 = l(91440),
    e6 = l(762831);
function te(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: i, onEdit: s, isLoading: r, topInset: o = 0 } = e,
        [c, d] = a.useState({ width: 0, height: 0 }),
        m = (0, u.yK)([T.Ay], () => T.Ay.getNewClipIds()),
        f = (0, u.bG)([T.Ay], () => T.Ay.getExportingClipIds().size > 0),
        g = (0, e7.P)((e) => e.activeMainLink),
        x = (0, e7.P)((e) => e.gameFacet),
        v = (0, e7.P)((e) => e.clippedWithFacet),
        j = a.useMemo(() => {
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
        E = a.useMemo(() => {
            let e = Math.max(1, k),
                t = [];
            for (let l of j) {
                let n = Math.ceil(l.clips.length / e);
                for (let a = 0; a < n; a++) t.push(Math.min(e, l.clips.length - a * e));
            }
            return t;
        }, [j, k]),
        P = a.useCallback(
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
        } = (0, K.A)({ navId: N, columnCounts: E, prepareFocus: P }),
        M = a.useMemo(() => j.map((e) => Math.ceil(e.clips.length / k)), [j, k]),
        D = a.useMemo(() => M.reduce((e, t) => e + t, 0), [M]),
        _ = Math.floor(b / ef) + 20,
        R = j.length > 0 ? `${g}:${x ?? ""}:${v ?? ""}` : null,
        F = (function (e) {
            let t = (0, u.bG)([A.Ay], () => A.Ay.useReducedMotion),
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
                    r = j[l];
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
                                F && (a["--custom-entrance-delay"] = `${e9(e + l)}ms`),
                                (0, n.jsx)(
                                    "div",
                                    {
                                        className: F ? e6.$ : void 0,
                                        style: a,
                                        children: (0, n.jsx)(eZ, {
                                            actionsDisabled: f,
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
            [j, k, b, f, m, i, s, I, S, F, R],
        ),
        z = a.useCallback(
            (e) => {
                let t = j[e];
                return t?.description != null ? 66 : 44;
            },
            [j],
        ),
        O = a.useCallback(
            (e) => {
                let t = j[e];
                return null == t
                    ? null
                    : (0, n.jsxs)(
                          "div",
                          {
                              className: e4.aE,
                              children: [
                                  (0, n.jsx)(h.D, {
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
            [j],
        );
    if (!r && 0 === j.length) return (0, n.jsx)(em, { isEmptyBecauseQuery: l > 0 });
    if (r && 0 === j.length) return (0, n.jsx)("div", { className: e4.dc, children: (0, n.jsx)(V.y, {}) });
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
            onResize: d,
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
        u = eo.intl.string(l ? er.default.IZsalP : er.default.ihBfyA),
        d = (0, n.jsx)(eb.$, {
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
                    (0, n.jsx)(ev.D, {
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
                    (0, n.jsx)(v.m, {
                        text: eo.intl.string(eo.t.oyYWHE),
                        children: (0, n.jsx)(j.K, {
                            onClick: s,
                            icon: tl.TrashIcon,
                            size: "sm",
                            variant: "secondary",
                            "aria-label": eo.intl.string(eo.t.oyYWHE),
                        }),
                    }),
                    (0, n.jsx)(
                        v.m,
                        {
                            text: u,
                            children: (0, n.jsx)(j.K, {
                                onClick: i,
                                icon: l ? tn.StarIcon : ta.y,
                                size: "sm",
                                variant: "secondary",
                                "aria-label": u,
                            }),
                        },
                        `favorite:${l}`,
                    ),
                    (0, n.jsx)(v.m, {
                        text: c ? eo.intl.string(er.default.qpw1d9) : null,
                        asContainer: !0,
                        children: d,
                    }),
                ],
            }),
        ],
    });
}
var tr = l(70860);
function to(e) {
    let { onClose: t } = e,
        i = a.useRef(null);
    return (
        a.useEffect(() => {
            let e = i.current;
            if (null == e) return;
            e.focus();
            let t = !1,
                n = null;
            return (
                l
                    .e("175426")
                    .then(l.bind(l, 582420))
                    .then((l) => {
                        let { startDoggoGame: a } = l;
                        t || (n = a(e));
                    })
                    .catch(() => {}),
                () => {
                    ((t = !0), n?.());
                }
            );
        }, []),
        (0, n.jsxs)("div", {
            className: tr.kL,
            children: [
                (0, n.jsx)("canvas", { ref: i, className: tr.Ji, tabIndex: 0, "aria-label": "Doggo Game" }),
                (0, n.jsx)("div", {
                    className: tr.b,
                    children: (0, n.jsx)(j.K, {
                        onClick: t,
                        icon: C.XLargeIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": eo.intl.string(eo.t.cpT0Cq),
                    }),
                }),
            ],
        })
    );
}
let tc = [
    "arrowup",
    "arrowup",
    "arrowdown",
    "arrowdown",
    "arrowleft",
    "arrowright",
    "arrowleft",
    "arrowright",
    "b",
    "a",
];
var tu = l(922016),
    td = l(847374),
    tm = l(980707),
    tf = l(477782),
    th = l(112173),
    tg = l(97808),
    tx = l(683438),
    tp = l(548118),
    tv = l(71393),
    tj = l(341923),
    ty = l(305866),
    tC = l(441349),
    tb = l(789645),
    tk = l(620409),
    tA = l(569737);
function tN(e) {
    return (e.setHours(0, 0, 0, 0), e.getTime());
}
function tw(e) {
    return (e.setHours(23, 59, 59, 999), e.getTime());
}
function tE(e, t) {
    if (null == e && null == t) return null;
    let l = (0, tk.Xj)();
    return { preset: "custom", after: null != e ? tN(e.toDate(l)) : null, before: null != t ? tw(t.toDate(l)) : null };
}
function tP(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new tA.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let tL = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function tS(e) {
    return tL.format(new Date(e));
}
function tI(e) {
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
            let t = null != e.after ? tS(e.after) : null,
                l = null != e.before ? tS(e.before) : null;
            if (null != t && null != l)
                return eo.intl.formatToPlainString(er.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return eo.intl.formatToPlainString(er.default.k1FkTL, { date: t });
            if (null != l) return eo.intl.formatToPlainString(er.default["4NlpHD"], { date: l });
            return eo.intl.string(er.default.tv9apA);
        }
    }
}
var tM = l(435021);
function tD(e) {
    let { closePopout: t } = e,
        l = (0, e7.P)((e) => e.dateFilter),
        i = (0, e7.P)((e) => e.setDateFilter),
        [r, o] = a.useState(l?.preset === "custom"),
        [c, u] = a.useState(() => (l?.preset === "custom" ? tP(l.after) : null)),
        [d, m] = a.useState(() => (l?.preset === "custom" ? tP(l.before) : null)),
        f = a.useMemo(
            () => [
                { key: "today", label: eo.intl.string(er.default.yOAWWM) },
                { key: "yesterday", label: eo.intl.string(er.default["PtV/Ti"]) },
                { key: "last-3-days", label: eo.intl.string(er.default.xfmv7I) },
                { key: "this-year", label: eo.intl.string(er.default["+eE7zX"]) },
                { key: "last-year", label: eo.intl.string(er.default.Nwj9v0) },
            ],
            [],
        ),
        h = l?.preset ?? null,
        g = r && "custom" !== h ? null : h,
        x = a.useMemo(() => (0, tk.Ec)((0, tk.Xj)()), []),
        y = a.useCallback(
            (e) => {
                (i(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: tN(new Date(t)), before: tw(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: tN(new Date(l)), before: tw(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 2), { preset: e, after: tN(l), before: tw(new Date(t)) }
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
                (u(e), i(tE(e, d)));
            },
            [d, i],
        ),
        k = a.useCallback(
            (e) => {
                (m(e), i(tE(c, e)));
            },
            [c, i],
        ),
        A = a.useCallback(() => {
            (u(null), m(null), i(null));
        }, [i]),
        N = null != c || null != d,
        w = a.useRef(null),
        E = a.useCallback(() => Array.from(w.current?.querySelectorAll('[role="button"]') ?? []), []),
        P = a.useCallback(
            (e) => {
                if ("ArrowDown" !== e.key && "ArrowUp" !== e.key) return;
                let t = E();
                if (0 === t.length) return;
                (e.preventDefault(), e.stopPropagation());
                let l = t.indexOf(e.target);
                if (-1 === l) return void ("ArrowDown" === e.key ? t[0] : t[t.length - 1])?.focus();
                let n = Math.min(t.length - 1, Math.max(0, l + ("ArrowDown" === e.key ? 1 : -1)));
                t[n]?.focus();
            },
            [E],
        ),
        L = a.useCallback(
            (e) => {
                let l = e.relatedTarget;
                (null != l && (e.currentTarget.contains(l) || null != l.closest('[role="dialog"]'))) || t();
            },
            [t],
        );
    return (0, n.jsx)(ty.l, {
        "aria-label": eo.intl.string(er.default.upqksT),
        onBlur: L,
        children: (0, n.jsxs)("div", {
            className: s()(tM.SW, r && tM.Td),
            children: [
                (0, n.jsxs)("div", {
                    className: tM.sh,
                    children: [
                        (0, n.jsx)(p.E, {
                            variant: "eyebrow",
                            color: "text-muted",
                            className: tM.a9,
                            children: eo.intl.string(er.default.upqksT),
                        }),
                        (0, n.jsxs)("div", {
                            ref: w,
                            className: tM.eF,
                            onKeyDown: P,
                            children: [
                                f.map((e) =>
                                    (0, n.jsx)(
                                        ev.D,
                                        {
                                            className: s()(tM.zD, g === e.key && tM.pH),
                                            onClick: () => y(e.key),
                                            "aria-pressed": g === e.key,
                                            children: (0, n.jsx)(p.E, {
                                                variant: "text-sm/medium",
                                                color: "currentColor",
                                                children: e.label,
                                            }),
                                        },
                                        e.key,
                                    ),
                                ),
                                (0, n.jsxs)(ev.D, {
                                    className: s()(tM.zD, tM.Kl, (r || "custom" === h) && tM.pH),
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
                                            className: tM.Xt,
                                            children: r ? "\u25C0" : "\u25B6",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: tM.ML,
                    "aria-hidden": !r,
                    children: [
                        (0, n.jsxs)("div", {
                            className: tM.U6,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: tM._2,
                                    children: [
                                        (0, n.jsx)(p.E, {
                                            variant: "eyebrow",
                                            color: "text-muted",
                                            className: tM.bk,
                                            "aria-hidden": !0,
                                            children: eo.intl.string(er.default["96vZuU"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tM.h0,
                                            children: [
                                                (0, n.jsx)(tC.l, {
                                                    label: eo.intl.string(er.default["96vZuU"]),
                                                    hideLabel: !0,
                                                    value: c,
                                                    onChange: b,
                                                    maxValue: d ?? x,
                                                }),
                                                null != c &&
                                                    (0, n.jsx)(v.m, {
                                                        text: eo.intl.string(eo.t.VkKicb),
                                                        children: (0, n.jsx)(j.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tb.P,
                                                            onClick: () => b(null),
                                                            "aria-label": eo.intl.string(eo.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: tM._2,
                                    children: [
                                        (0, n.jsx)(p.E, {
                                            variant: "eyebrow",
                                            color: "text-muted",
                                            className: tM.bk,
                                            "aria-hidden": !0,
                                            children: eo.intl.string(er.default["GL51/b"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tM.h0,
                                            children: [
                                                (0, n.jsx)(tC.l, {
                                                    label: eo.intl.string(er.default["GL51/b"]),
                                                    hideLabel: !0,
                                                    value: d,
                                                    onChange: k,
                                                    minValue: c ?? void 0,
                                                    maxValue: x,
                                                }),
                                                null != d &&
                                                    (0, n.jsx)(v.m, {
                                                        text: eo.intl.string(eo.t.VkKicb),
                                                        children: (0, n.jsx)(j.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tb.P,
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
                                className: tM.dS,
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
var tT = l(91871),
    t_ = l.n(tT),
    tR = l(190199),
    tF = l(914427),
    tH = l(724141);
function tz(e) {
    let {
            triggerLabel: t,
            options: l,
            selectedKeys: i,
            onToggle: s,
            multiSelect: r,
            searchPlaceholder: o,
            emptyStateText: c,
        } = e,
        u = a.useRef(null),
        d = a.useMemo(() => new Set(i), [i]),
        m = a.useCallback(
            (e) => {
                let t;
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => t_()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, n.jsxs)(
                            tR.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, n.jsx)("span", { className: tH.H, children: e.icon }),
                                    (0, n.jsx)(tR.x4.Label, { children: e.label }),
                                    r ? (0, n.jsx)(tR.x4.Checkbox, {}) : (0, n.jsx)(tR.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        f = i.size > 0 ? `${t} (${i.size})` : t;
    return (0, n.jsx)(tu.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: u,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(tF.p, {
                "aria-label": t,
                placeholder: o,
                value: d,
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
                buttonRef: u,
                size: "sm",
                variant: "secondary",
                text: f,
                icon: td.a,
                iconPosition: "end",
            }),
    });
}
var tO = l(187671);
function tU(e) {
    let { label: t, icon: l, onRemove: a, removeAriaLabel: i } = e;
    return (0, n.jsxs)("div", {
        className: tO.Io,
        children: [
            null != l && (0, n.jsx)("span", { className: tO.Kk, children: l }),
            (0, n.jsx)(p.E, {
                className: tO.Pf,
                variant: "text-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, n.jsx)(ev.D, {
                className: tO.DT,
                onClick: a,
                "aria-label": i ?? eo.intl.string(eo.t.N86XcP),
                children: (0, n.jsx)(tb.P, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var tG = l(401756);
let tK = { all: er.default.lscwjQ, auto: er.default.xrOIkz, manual: er.default.D7HSLJ };
function tV() {
    let e = (0, e7.P)((e) => e.dateFilter),
        t = a.useRef(null),
        l = null != e ? tI(e) : eo.intl.string(er.default.upqksT);
    return (0, n.jsx)(tu.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(tD, { closePopout: t });
        },
        children: (e) =>
            (0, n.jsx)(eb.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: td.a,
                iconPosition: "end",
            }),
    });
}
function t$() {
    let e = (0, e7.P)((e) => e.sortOrder),
        t = (0, e7.P)((e) => e.setSortOrder),
        l = a.useRef(null),
        i = e === G.mu.OLDEST ? eo.intl.string(eo.t["0gitSE"]) : eo.intl.string(eo.t["4LLKx3"]);
    return (0, n.jsx)(tu.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, n.jsx)(tm.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": eo.intl.string(eo.t.XvNMNk),
                onClose: a,
                onSelect: void 0,
                children: (0, n.jsxs)(tf.rX, {
                    children: [
                        (0, n.jsx)(tf.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: eo.intl.string(eo.t["4LLKx3"]),
                            action: () => {
                                (t(G.mu.MOST_RECENT), a());
                            },
                            checked: e === G.mu.MOST_RECENT,
                        }),
                        (0, n.jsx)(tf.iD, {
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
            (0, n.jsx)(eb.$, { ...e, buttonRef: l, size: "sm", variant: "secondary", text: i, icon: th.J }),
    });
}
function tq() {
    let e = (0, e7.P)((e) => e.clipMethodFilter),
        t = (0, e7.P)((e) => e.setClipMethodFilter),
        l = a.useRef(null);
    return (0, n.jsx)(tu.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, n.jsx)(tm.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": eo.intl.string(er.default["kIqbb/"]),
                onClose: a,
                onSelect: void 0,
                children: (0, n.jsxs)(tf.rX, {
                    children: [
                        (0, n.jsx)(tf.iD, {
                            id: "method-all",
                            group: "method",
                            label: eo.intl.string(er.default.lscwjQ),
                            action: () => {
                                (t("all"), a());
                            },
                            checked: "all" === e,
                        }),
                        (0, n.jsx)(tf.iD, {
                            id: "method-auto",
                            group: "method",
                            label: eo.intl.string(er.default.xrOIkz),
                            action: () => {
                                (t("auto"), a());
                            },
                            checked: "auto" === e,
                        }),
                        (0, n.jsx)(tf.iD, {
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
                icon: td.a,
                iconPosition: "end",
            }),
    });
}
function tB(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: i } = e,
        s = (0, e7.P)((e) => e.query),
        r = (0, e7.P)((e) => e.setQuery),
        o = (0, e7.P)((e) => e.pendingSearchFocus),
        c = (0, e7.P)((e) => e.setPendingSearchFocus),
        u = a.useRef(null),
        d = (0, e7.P)((e) => e.activeMainLink),
        m = (0, e7.P)((e) => e.clipMethodFilter),
        f = (0, e7.P)((e) => e.setClipMethodFilter),
        h = (0, e7.P)((e) => e.gameFacet),
        g = (0, e7.P)((e) => e.clippedWithFacet),
        x = (0, e7.P)((e) => e.selectedGameIds),
        p = (0, e7.P)((e) => e.selectedUserIds),
        v = (0, e7.P)((e) => e.selectedGuildId),
        j = (0, e7.P)((e) => e.selectedActivity),
        y = (0, e7.P)((e) => e.dateFilter),
        C = (0, e7.P)((e) => e.toggleGameId),
        b = (0, e7.P)((e) => e.toggleUserId),
        k = (0, e7.P)((e) => e.setSelectedGuildId),
        A = (0, e7.P)((e) => e.setSelectedActivity),
        N = (0, e7.P)((e) => e.setDateFilter),
        w = (0, e7.P)((e) => e.clearFilters);
    a.useEffect(() => {
        o && (u.current?.focus(), c(!1));
    }, [o, c]);
    let E = a.useRef(null);
    a.useEffect(() => {
        let e = {
            type_filter: "all" !== m ? m : "",
            game_filter_application_ids: null != h ? [h] : Array.from(x),
            date_filter_range: null != y ? y.preset.replace(/-/g, "_") : "",
            filtered_by_server: null != v,
            filtered_by_participants: null != g || p.size > 0,
            filtered_by_favorites: d === G.oH.FAVORITES,
            filtered_by_activity: null != j,
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
            E.current = null;
            return;
        }
        let t = JSON.stringify(e);
        t !== E.current && ((E.current = t), eS.default.track(es.HAw.CLIPS_FILTER_CHANGED, e));
    }, [m, h, x, y, v, g, p, d, j]);
    let S = a.useMemo(() => l.map((e) => e.key), [l]),
        I = (0, P.A)(S),
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
                        let t = tv.A.getGuild(e);
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
                    icon: (0, n.jsx)(tp.Ay, { guild: e.guild, size: tp.Ay.Sizes.MINI }),
                })),
            [_],
        ),
        F = a.useMemo(() => new Map(_.map((e) => [e.key, e.guild])), [_]),
        H = a.useMemo(
            () =>
                null == h
                    ? []
                    : (function (e) {
                          let t = new Set();
                          for (let l of e)
                              (l.activity?.state != null && "" !== l.activity.state && t.add(l.activity.state),
                                  l.activity?.details != null &&
                                      "" !== l.activity.details &&
                                      t.add(l.activity.details));
                          return Array.from(t).sort((e, t) => e.toLowerCase().localeCompare(t.toLowerCase()));
                      })(t.filter((e) => e.applicationId === h)).map((e) => ({ key: e, label: e })),
            [t, h],
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
                    icon: (0, n.jsx)(tg.eu, { src: e.avatarUrl, size: eC._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [i],
        ),
        O = a.useMemo(() => (null != v ? new Set([v]) : new Set()), [v]),
        U = a.useMemo(() => (null != j ? new Set([j]) : new Set()), [j]),
        K = a.useCallback(
            (e) => {
                k(v === e ? null : e);
            },
            [v, k],
        ),
        V = a.useCallback(
            (e) => {
                A(j === e ? null : e);
            },
            [j, A],
        ),
        $ = null == h,
        q = null == g,
        B = (0, tj.HN)() && d !== G.oH.AUTO_CLIPS,
        Y = eo.intl.string(tK[m]),
        Q = (0, n.jsxs)(n.Fragment, {
            children: [
                $ &&
                    Array.from(x).map((e) => {
                        let t = T.find((t) => t.key === e);
                        return (0, n.jsx)(
                            tU,
                            {
                                label: t?.label ?? e,
                                icon: (0, n.jsx)(L.A, { game: D.get(e), size: L.M.XSMALL }),
                                onRemove: () => C(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != y && (0, n.jsx)(tU, { label: tI(y), onRemove: () => N(null) }, "date"),
                null != v &&
                    (0, n.jsx)(
                        tU,
                        {
                            label: R.find((e) => e.key === v)?.label ?? v,
                            icon:
                                null != F.get(v)
                                    ? (0, n.jsx)(tp.Ay, { guild: F.get(v), size: tp.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => k(null),
                        },
                        "guild",
                    ),
                q && Array.from(p).map((e) => (0, n.jsx)(tY, { userId: e, onRemove: () => b(e) }, `user-${e}`)),
                null != j && (0, n.jsx)(tU, { label: j, onRemove: () => A(null) }, "activity"),
                B && "all" !== m && (0, n.jsx)(tU, { label: Y, onRemove: () => f("all") }, "method"),
            ],
        }),
        X = ($ && x.size > 0) || null != y || null != v || (q && p.size > 0) || null != j || (B && "all" !== m);
    return (0, n.jsxs)("div", {
        className: tG.kT,
        children: [
            (0, n.jsxs)("div", {
                className: tG.HL,
                children: [
                    (0, n.jsx)("div", {
                        className: tG.MT,
                        children: (0, n.jsx)(tx.I, {
                            ref: u,
                            placeholder: eo.intl.string(eo.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: tG.Zq,
                        children: [
                            B && (0, n.jsx)(tq, {}),
                            $ &&
                                T.length > 0 &&
                                (0, n.jsx)(tz, {
                                    triggerLabel: eo.intl.string(eo.t.URyqtP),
                                    options: T,
                                    selectedKeys: x,
                                    onToggle: C,
                                    multiSelect: !0,
                                    searchPlaceholder: eo.intl.string(eo.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(tV, {}),
                            R.length > 0 &&
                                (0, n.jsx)(tz, {
                                    triggerLabel: eo.intl.string(eo.t["5qyruI"]),
                                    options: R,
                                    selectedKeys: O,
                                    onToggle: K,
                                    multiSelect: !1,
                                    searchPlaceholder: eo.intl.string(eo.t["5h0QOP"]),
                                }),
                            q &&
                                z.length > 0 &&
                                (0, n.jsx)(tz, {
                                    triggerLabel: eo.intl.string(eo.t.YQ6dJg),
                                    options: z,
                                    selectedKeys: p,
                                    onToggle: (e) => b(e),
                                    multiSelect: !0,
                                    searchPlaceholder: eo.intl.string(eo.t["5h0QOP"]),
                                }),
                            H.length > 0 &&
                                (0, n.jsx)(tz, {
                                    triggerLabel: eo.intl.string(eo.t.agRtPG),
                                    options: H,
                                    selectedKeys: U,
                                    onToggle: V,
                                    multiSelect: !1,
                                    searchPlaceholder: eo.intl.string(eo.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(t$, {}),
                        ],
                    }),
                ],
            }),
            X &&
                (0, n.jsxs)("div", {
                    className: tG.eH,
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
function tY(e) {
    let { userId: t, onRemove: l } = e,
        a = (0, u.bG)([M.default], () => M.default.getUser(t), [t]);
    if (null == a) return null;
    let i = a.globalName ?? a.username;
    return (0, n.jsx)(tU, {
        label: i,
        icon: (0, n.jsx)(tg.eu, { src: a.getAvatarURL(null, 32), size: eC._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
var tQ = l(689175);
let tX = (0, l(945810).mj)({
    kind: "user",
    name: "2026-05-auto-clips-review",
    defaultConfig: { enableAutoClipsReview: !1 },
    variations: { 1: { enableAutoClipsReview: !0 } },
});
var tW = l(449543),
    tZ = l(152858);
function tJ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var t0 = l(329924);
function t1(e) {
    let { clips: t, onEdit: l, onEdgeNavigate: i } = e,
        s = a.useMemo(() => tJ(t), [t]),
        r = (0, e7.P)((e) => e.setActiveMainLink),
        o = (0, q.GV)(),
        c = a.useMemo(() => [s.length], [s.length]),
        { getContainerProps: u, getItemProps: d, getRowProps: m } = (0, K.A)({ navId: o, columnCounts: c }),
        { onFocus: f, onKeyDown: p, ...v } = u(),
        j = a.useCallback(
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
        y = { ...v, onKeyDown: j };
    return 0 === s.length
        ? null
        : (0, n.jsxs)("section", {
              className: t0.uW,
              "aria-label": eo.intl.string(er.default.efLpNC),
              children: [
                  (0, n.jsxs)("div", {
                      className: t0.wx,
                      children: [
                          (0, n.jsxs)("div", {
                              className: t0.mX,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: t0.UP,
                                      children: [
                                          (0, n.jsx)(h.D, {
                                              variant: "heading-lg/medium",
                                              color: "text-default",
                                              children: eo.intl.string(er.default.I1h8uD),
                                          }),
                                          (0, n.jsx)(g.E, { type: "early_access", variant: "brand", icon: x.t }),
                                      ],
                                  }),
                                  (0, n.jsx)(h.D, {
                                      variant: "display-md",
                                      color: "text-default",
                                      className: t0.DD,
                                      children: eo.intl.string(er.default.efLpNC),
                                  }),
                              ],
                          }),
                          (0, n.jsx)("div", {
                              className: t0.BX,
                              children: (0, n.jsx)(eb.$, {
                                  variant: "overlay-primary",
                                  size: "sm",
                                  onClick: () => r(G.oH.AUTO_CLIPS),
                                  text: eo.intl.string(er.default.gCay1w),
                              }),
                          }),
                      ],
                  }),
                  (0, n.jsx)(tW.A, {
                      className: t0.jG,
                      gap: 16,
                      edgeFade: 0,
                      scrollBehavior: tZ.Uf.ITEM,
                      hideActionsWhenDisabled: !0,
                      "aria-label": eo.intl.string(er.default.efLpNC),
                      gridContainerProps: y,
                      gridRowProps: m(0),
                      children: s.map((e, t) =>
                          (0, n.jsx)(
                              "div",
                              {
                                  className: t0.v2,
                                  children: (0, n.jsx)(eZ, {
                                      clip: e,
                                      actionsDisabled: !1,
                                      isNew: !1,
                                      onEdit: l,
                                      onClick: l,
                                      gridItemProps: d(t, 0),
                                  }),
                              },
                              e.id,
                          ),
                      ),
                  }),
              ],
          });
}
var t2 = l(770178),
    t3 = l(202163),
    t5 = l(68408);
function t8(e) {
    let {
            session: t,
            recentClipIds: l,
            actionsDisabled: i,
            onEdit: r,
            onClipClick: o,
            animateEntrance: c,
            entranceRowOffset: d,
            onEdgeNavigate: m,
        } = e,
        { gameRecord: f } = (0, t3.A)(t.applicationId),
        { onShareSession: g } = a.useContext(eQ.$),
        x = a.useCallback(() => {
            g?.(t.clips);
        }, [g, t.clips]),
        v = (0, e7.P)((e) => e.setGameFacet),
        j = (0, e7.P)((e) => e.setActiveMainLink),
        y = t.applicationId,
        C = null != y && "" !== y,
        b = a.useCallback(() => {
            null != y && "" !== y && (v(y), j(G.oH.ALL_CLIPS));
        }, [y, v, j]),
        A = a.useCallback(() => {
            C ? b() : j(G.oH.ALL_CLIPS);
        }, [C, b, j]),
        N = a.useMemo(() => (null == f ? null : (f.getBannerURL(1024) ?? f.screenshotUrls?.[0] ?? null)), [f]),
        w = (0, u.yK)([M.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => M.default.getUser(e)).filter(eI.Vq);
        }),
        E = a.useMemo(() => t.clips.filter((e) => "auto" === e.clipMethod).length, [t.clips]),
        P = (0, eP.e)({ timestamp: t.startedAt }),
        [S, I] = a.useState(800),
        D = (0, k.A)((e) => {
            I(e.target.clientWidth);
        }),
        T = (0, t2.w)(D),
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
        className: t5.dZ,
        children: [
            (0, n.jsx)("div", {
                className: s()(t5.tB, null == N && t5.rD),
                style: null != N ? { backgroundImage: `url(${N})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, n.jsxs)("div", {
                className: t5.wx,
                children: [
                    C
                        ? (0, n.jsx)(ep.s, {
                              "aria-label": t.applicationName,
                              onClick: b,
                              className: t5.Zn,
                              children: (0, n.jsx)(L.A, {
                                  className: t5.Gt,
                                  game: f,
                                  size: L.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, n.jsx)(L.A, { className: t5.Gt, game: f, size: L.M.MEDIUM, "aria-hidden": !0 }),
                    (0, n.jsxs)("div", {
                        className: t5.TK,
                        children: [
                            C
                                ? (0, n.jsx)(ep.s, {
                                      "aria-label": t.applicationName,
                                      onClick: b,
                                      className: t5.wb,
                                      children: (0, n.jsx)(h.D, {
                                          variant: "text-md/medium",
                                          color: "text-default",
                                          className: t5.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, n.jsx)(h.D, {
                                      variant: "text-md/medium",
                                      color: "text-default",
                                      className: t5.mO,
                                      children: t.applicationName,
                                  }),
                            (0, n.jsxs)("div", {
                                className: t5.mI,
                                children: [
                                    (0, n.jsx)(p.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: eo.intl.format(er.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    E > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: t5.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(p.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    children: eo.intl.format(er.default.eRrt7X, { count: E }),
                                                }),
                                            ],
                                        }),
                                    (0, n.jsx)("span", { className: t5.TG, "aria-hidden": "true" }),
                                    (0, n.jsx)(p.E, { variant: "text-xs/normal", color: "text-muted", children: P }),
                                    w.length > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: t5.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(ex.A, { users: w, maxUsers: 5, size: eC._3.SIZE_16 }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    t.clips.length > 0 &&
                        null != g &&
                        (0, n.jsx)("div", {
                            className: t5.$s,
                            children: (0, n.jsx)(eb.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: tt.ShareIcon,
                                text: eo.intl.string(er.default.l34lLs),
                                onClick: x,
                            }),
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                ref: T,
                className: t5.Vg,
                ...Y,
                tabIndex: -1,
                onKeyDown: Q,
                children: R.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: t5.UX,
                            ...V(t),
                            children: e.map((e, a) => {
                                let s = { width: _ };
                                return (
                                    c && (s["--custom-entrance-delay"] = `${e9(d + t + a)}ms`),
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
                    className: t5.Vc,
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
var t7 = l(799888);
function t9(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: i, onClipClick: s, isLoading: r, onScroll: o } = e,
        { enableAutoClipsReview: c } = tX.useConfig({ location: "ClipsGalleryHome" }),
        d = a.useMemo(() => tJ(t), [t]),
        m = c && d.length > 0,
        f = (0, u.yK)([T.Ay], () => T.Ay.getNewClipIds()),
        g = (0, u.bG)([T.Ay], () => T.Ay.getExportingClipIds().size > 0),
        x = (0, e7.P)((e) => e.setActiveMainLink),
        p = a.useCallback(() => {
            x(G.oH.ALL_CLIPS);
        }, [x]),
        v = a.useMemo(() => {
            let e = m ? new Set(d.map((e) => e.id)) : null;
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
        }, [t, m, d]),
        j = (0, u.bG)([A.Ay], () => A.Ay.useReducedMotion),
        y = a.useMemo(() => {
            let e = [],
                t = 0;
            for (let l of v) (e.push(t), (t += Math.min(2, Math.ceil(l.clips.length / 3))));
            return e;
        }, [v]),
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
    return v.length > 0 || m
        ? (0, n.jsx)(tQ.Ch, {
              className: t7.iR,
              fade: !0,
              onScroll: k,
              children: (0, n.jsxs)("div", {
                  className: t7.Qs,
                  ref: C,
                  children: [
                      m &&
                          (0, n.jsx)("div", {
                              className: t7.Dk,
                              children: (0, n.jsx)(t1, { clips: t, onEdit: i, onEdgeNavigate: b }),
                          }),
                      v.length > 0 &&
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(h.D, {
                                      variant: "heading-lg/medium",
                                      color: "text-default",
                                      children: eo.intl.string(er.default.zfTWDE),
                                  }),
                                  v.map((e, t) =>
                                      (0, n.jsx)(
                                          t8,
                                          {
                                              session: e,
                                              recentClipIds: f,
                                              actionsDisabled: g,
                                              onEdit: i,
                                              onClipClick: s,
                                              animateEntrance: !j,
                                              entranceRowOffset: y[t] ?? 0,
                                              onEdgeNavigate: b,
                                          },
                                          e.id,
                                      ),
                                  ),
                                  (0, n.jsx)("div", {
                                      className: t7.dp,
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
          ? (0, n.jsx)("div", { className: t7.dc, children: (0, n.jsx)(V.y, {}) })
          : (0, n.jsx)(em, { isEmptyBecauseQuery: l > 0 });
}
var t4 = l(837381),
    t6 = l(741918),
    le = l(812993),
    lt = l(332837),
    ll = l(176781),
    ln = l(650684),
    la = l(364522),
    li = l(625903),
    ls = l(260762),
    lr = l(599428);
function lo(e) {
    let { itemId: t, icon: l, label: a, onClick: i, isSelected: r = !1, isDisabled: o = !1, badgeCount: c = 0 } = e,
        u = o && !r,
        d = (0, t4.rm)(t);
    return (0, n.jsx)(v.m, {
        text: a,
        position: "right",
        children: (0, n.jsxs)(ev.D, {
            ...d,
            role: "button",
            onClick: u ? void 0 : i,
            "aria-pressed": r,
            "aria-disabled": u,
            "aria-label": a,
            className: s()(lr.AY, { [lr.Hy]: r, [lr.Is]: u }),
            children: [l, c > 0 && (0, n.jsx)("span", { className: lr.e, children: (0, n.jsx)(le.hV, { count: c }) })],
        }),
    });
}
function lc(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: i } = e,
        r = (0, e7.P)((e) => e.activeMainLink),
        o = (0, e7.P)((e) => e.gameFacet),
        c = (0, e7.P)((e) => e.clippedWithFacet),
        u = (0, e7.P)((e) => e.setActiveMainLink),
        d = (0, e7.P)((e) => e.setGameFacet),
        m = (0, e7.P)((e) => e.setClippedWithFacet),
        f = (0, e7.P)((e) => e.clearFilters),
        h = (0, e7.P)((e) => e.setPendingContentFocus),
        g = (0, tj.HN)(),
        x = null != o || null != c;
    function p(e) {
        return !x && r === e;
    }
    let v = a.useRef(!1),
        j = a.useCallback(() => {
            v.current && h(!0);
        }, [h]),
        y = a.useCallback(
            (e) => {
                (u(e), d(null), m(null), f(), j());
            },
            [u, d, m, f, j],
        ),
        C = a.useCallback(
            (e) => {
                (d(o === e ? null : e), m(null), u(G.oH.ALL_CLIPS), f(), j());
            },
            [o, d, m, u, f, j],
        ),
        b = a.useCallback(() => {
            (0, et.openUserSettings)(ee.X.CLIPS_PANEL);
        }, []),
        k = a.useMemo(() => t.map((e) => e.key), [t]),
        A = (0, P.A)(k),
        N = a.useMemo(() => new Map(A.map((e) => [e?.id, e])), [A]),
        w = (0, q.GV)(),
        E = (0, ls.A)(w),
        { setFocus: S } = E,
        I = o ?? r;
    a.useEffect(() => {
        S(I);
    }, [S, I]);
    let { ref: M, onKeyDown: D, ...T } = (0, t4.LT)(E),
        _ = a.useCallback(
            (e) => {
                v.current = e.key === t6.D$.ENTER || e.key === t6.D$.SPACE;
                try {
                    D(e);
                } finally {
                    v.current = !1;
                }
            },
            [D],
        );
    return (0, n.jsx)(t4.hD, {
        navigator: E,
        children: (0, n.jsxs)("div", {
            className: lr.H$,
            ...T,
            tabIndex: -1,
            onKeyDown: _,
            ref: M,
            children: [
                (0, n.jsxs)("div", {
                    className: s()(lr.o3, lr.A9),
                    children: [
                        (0, n.jsx)(lo, {
                            itemId: G.oH.HOME,
                            icon: (0, n.jsx)(lt.HomeIcon, { size: "sm", color: "currentColor" }),
                            label: eo.intl.string(er.default.iVqj8B),
                            isSelected: p(G.oH.HOME),
                            onClick: () => y(G.oH.HOME),
                        }),
                        (0, n.jsx)(lo, {
                            itemId: G.oH.ALL_CLIPS,
                            icon: (0, n.jsx)(ll.x, { size: "sm", color: "currentColor" }),
                            label: eo.intl.string(eo.t.dPVrEv),
                            isSelected: p(G.oH.ALL_CLIPS),
                            isDisabled: 0 === l.allClips,
                            badgeCount: i.allClips,
                            onClick: () => y(G.oH.ALL_CLIPS),
                        }),
                        g &&
                            (0, n.jsx)(lo, {
                                itemId: G.oH.AUTO_CLIPS,
                                icon: (0, n.jsx)(ln.e, { size: "sm", color: "currentColor" }),
                                label: eo.intl.string(er.default.ikNKf1),
                                isSelected: p(G.oH.AUTO_CLIPS),
                                isDisabled: 0 === l.autoClips,
                                badgeCount: i.autoClips,
                                onClick: () => y(G.oH.AUTO_CLIPS),
                            }),
                        (0, n.jsx)(lo, {
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
                            (0, n.jsx)("div", { className: lr.Gz }),
                            (0, n.jsx)(la.Ip, {
                                className: s()(lr.UZ, lr.A9),
                                fade: !0,
                                children: t.map((e) => {
                                    let t = o === e.key;
                                    return (0, n.jsx)(
                                        lo,
                                        {
                                            itemId: e.key,
                                            icon: (0, n.jsx)(L.A, {
                                                game: N.get(e.key),
                                                size: L.M.SMALL,
                                                className: lr.az,
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
                    className: s()(lr.Ms, lr.A9),
                    children: (0, n.jsx)(lo, {
                        itemId: "settings",
                        icon: (0, n.jsx)(li.SettingsIcon, { size: "sm", color: "currentColor" }),
                        label: eo.intl.string(eo.t["3D5yo/"]),
                        onClick: b,
                    }),
                }),
            ],
        }),
    });
}
var lu = l(409067),
    ld = l(314484);
function lm(e) {
    var t, i;
    let K,
        V,
        $,
        {
            channelId: q,
            onClose: B,
            picker: Y,
            transitionState: Q,
            initialEditingClipId: X,
            initialMainLink: W = G.oH.HOME,
            ...Z
        } = e;
    (0, U.A)();
    let { analyticsLocations: J } = (0, w.Ay)(N.A.CLIPS_GALLERY),
        ee = Y?.onPick,
        et = Y?.allowMultiSelect ?? !0,
        [el, en] = a.useState(new Set()),
        ea = a.useRef(null),
        ei = (0, k.A)((e) => {
            let t = ea.current;
            if (null == t) return;
            let l = Math.min(1, Math.max(0, e) / 40);
            t.style.setProperty("--custom-clips-header-solid-opacity", `${l}`);
        }),
        {
            gamesFacet: es,
            participantsFacet: ec,
            filteredClips: eu,
            mainLinkCounts: ed,
            mainLinkNewCounts: em,
            allClips: ef,
        } = (0, lu.ad)(Y?.filterClip),
        eh = (0, u.bG)([T.Ay], () => T.Ay.getSettings().storageLocation),
        [eg, ex] = a.useState(!0);
    a.useEffect(() => {
        (async function () {
            ex(!0);
            try {
                await (0, _.Fb)(eh);
            } finally {
                ex(!1);
            }
        })().catch(() => {});
    }, [eh]);
    let { onShareClick: ep } = (0, O.A)(q);
    (a.useEffect(
        () => () => {
            (e7.P.getState().resetAll(), (0, _.Su)());
        },
        [],
    ),
        a.useEffect(() => {
            let e = e7.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink(W);
        }, [W]),
        (0, o.l0)(() => {
            T.Ay.hasClips() && I.A.isDeveloper && S.Ay.fireSurveyAction(c.w.POPULATED_CLIP_GALLERY_CLOSED);
        }));
    let ev = (0, u.bG)([T.Ay], () => T.Ay.getExportingClipIds().size > 0),
        [ej, ey] = a.useState(null != X ? "editing" : "gallery"),
        [eC, eb] = a.useState(X ?? null),
        ek = (0, u.bG)([T.Ay], () => (null != eC ? T.Ay.getClipById(eC) : null), [eC]),
        eA = (0, d.useIsModalAtTop)(eK.nm),
        [eN, ew] = a.useState(!1);
    ((t = a.useCallback(() => ew(!0), [])),
        (i = eA && "gallery" === ej && !eN),
        (K = a.useRef(Array(tc.length).fill(""))),
        (V = a.useRef(0)),
        ($ = a.useRef(t)),
        a.useEffect(() => {
            $.current = t;
        }, [t]),
        a.useEffect(() => {
            if (!i) return;
            let e = K.current;
            function t(t) {
                var l;
                if (
                    !t.ctrlKey &&
                    !t.metaKey &&
                    !t.altKey &&
                    (null == (l = t.target) ||
                        "string" != typeof l.tagName ||
                        ("INPUT" !== l.tagName && "TEXTAREA" !== l.tagName && !0 !== l.isContentEditable))
                ) {
                    ((e[V.current] = t.key.toLowerCase()), (V.current = (V.current + 1) % tc.length));
                    for (let t = 0; t < tc.length; t++) if (e[(V.current + t) % tc.length] !== tc[t]) return;
                    $.current();
                }
            }
            return (
                document.addEventListener("keydown", t, { capture: !0, passive: !0 }),
                () => {
                    (document.removeEventListener("keydown", t, { capture: !0 }), e.fill(""), (V.current = 0));
                }
            );
        }, [i]),
        a.useEffect(() => {
            if (eN)
                return (
                    document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0)
                );
            function e(e) {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation());
            }
        }, [eN]));
    let eE = a.useRef(ej);
    ((eE.current = ej), (a.useRef(eC).current = eC));
    let [eP, eL] = a.useState(null != X ? f.ip.ENTERED : f.ip.HIDDEN),
        eS = a.useRef(null),
        eI = (0, e7.P)((e) => e.gameFacet),
        eM = (0, e7.P)((e) => e.clippedWithFacet),
        eD = (0, e7.P)((e) => e.activeMainLink),
        eT = (0, e7.P)((e) => e.currentPage),
        e_ = eT === G.fB.HOME,
        { ref: eR, height: eF = 64 } = (0, b.Ay)(eT),
        eH = 68 + eF,
        ez = e_ ? 68 : eH - 16;
    a.useLayoutEffect(() => {
        ei(0);
    }, [eT, ei]);
    let eO = (0, e7.P)((e) => e.pendingContentFocus),
        eU = (0, e7.P)((e) => e.setPendingContentFocus),
        eG = a.useRef(null);
    a.useEffect(() => {
        if (!eO) return;
        let e = 0,
            t = 0;
        return (
            (t = requestAnimationFrame(function l() {
                let n = eG.current?.querySelector('[role="grid"] [role="button"]');
                if (null != n) {
                    (n.focus(), eU(!1));
                    return;
                }
                if (e++ < 10) {
                    t = requestAnimationFrame(l);
                    return;
                }
                eU(!1);
            })),
            () => cancelAnimationFrame(t)
        );
    }, [eO, eU]);
    let eV = (0, e7.P)(
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
        eD === G.oH.HOME && eV && e7.P.getState().setActiveMainLink(G.oH.ALL_CLIPS);
    }, [eD, eV]);
    let e$ = a.useMemo(() => (null != eI ? [eI] : []), [eI]),
        eq = (0, P.A)(e$)[0] ?? null,
        eB = (0, u.bG)([M.default], () => (null != eM ? M.default.getUser(eM) : null), [eM]),
        eY = a.useMemo(() => {
            if (null != eI) return es.find((e) => e.key === eI)?.name ?? eo.intl.string(eo.t.dPVrEv);
            if (null != eM) return null != eB ? (eB.globalName ?? eB.username) : eM;
            switch (eD) {
                case G.oH.FAVORITES:
                    return eo.intl.string(eo.t["9rlCk1"]);
                case G.oH.AUTO_CLIPS:
                    return eo.intl.string(er.default.ikNKf1);
                case G.oH.HOME:
                    return eo.intl.string(er.default.iVqj8B);
                default:
                    return eo.intl.string(eo.t.dPVrEv);
            }
        }, [eI, eM, eD, es, eB]),
        eX = a.useMemo(() => {
            if (null != eI) return es.find((e) => e.key === eI)?.count ?? 0;
            if (null != eM) return ec.find((e) => e.key === eM)?.count ?? 0;
            switch (eD) {
                case G.oH.HOME:
                    return null;
                case G.oH.AUTO_CLIPS:
                    return ed.autoClips;
                case G.oH.FAVORITES:
                    return ed.favorites;
                default:
                    return ed.allClips;
            }
        }, [eI, eM, eD, es, ec, ed]),
        eW = a.useCallback(() => {
            (ey("editing"), A.Ay.useReducedMotion && eL(f.ip.ENTERED));
        }, []),
        eZ = a.useCallback((e) => {
            en((t) => {
                let l = new Set(t);
                return (l.has(e) ? l.delete(e) : l.add(e), l);
            });
        }, []),
        eJ = a.useCallback(
            (e) => {
                (eb(e.id), eW());
            },
            [eW],
        ),
        e0 = a.useCallback(() => {
            (A.Ay.useReducedMotion && eb(null), ey("gallery"));
        }, []);
    (a.useEffect(() => {
        function e(e) {
            "Escape" === e.key && "editing" === eE.current && eA && (e.stopPropagation(), e0());
        }
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [e0, B, eA]),
        a.useEffect(() => {
            function e(e) {
                if (
                    ("f" !== e.key && "F" !== e.key) ||
                    e.altKey ||
                    e.shiftKey ||
                    ((0, D.isMac)() ? !e.metaKey || e.ctrlKey : !e.ctrlKey || e.metaKey) ||
                    !eA ||
                    "gallery" !== eE.current
                )
                    return;
                (e.preventDefault(), e.stopPropagation());
                let t = e7.P.getState();
                (t.currentPage === G.fB.HOME && t.setActiveMainLink(G.oH.ALL_CLIPS), t.setPendingSearchFocus(!0));
            }
            return (document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0));
        }, [eA]),
        a.useEffect(
            () =>
                "editing" === ej && null != eC
                    ? void (0, _.YK)(eC)
                    : ((0, _.TE)(),
                      () => {
                          (0, _.TE)();
                      }),
            [ej, eC],
        ));
    let e1 = a.useCallback(() => {
            en(new Set());
        }, []),
        e2 = el.size > 0,
        e3 = a.useCallback(() => {
            let e = ef.filter((e) => el.has(e.id));
            (0, d.openModalLazy)(
                async () => {
                    let { default: t } = await l.e("913367").then(l.bind(l, 223818));
                    return (l) =>
                        (0, n.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                (e1(), l.onClose());
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [ef, el, e1]),
        e5 = a.useCallback(async () => {
            let e = ef.filter((e) => el.has(e.id));
            (await ep({ clips: e }), e1());
        }, [ef, el, ep, e1]),
        e8 = a.useCallback(
            async (e) => {
                0 !== e.length && (en(new Set(e.map((e) => e.id))), await ep({ clips: e }), e1());
            },
            [ep, e1],
        ),
        e9 = a.useCallback(() => {
            let e = e7.P.getState();
            (e.setGameFacet(null),
                e.setClippedWithFacet(null),
                e.setActiveMainLink(G.oH.ALL_CLIPS),
                e.setPendingSearchFocus(!0));
        }, []),
        e4 = a.useMemo(() => {
            let e = ef.filter((e) => el.has(e.id));
            return e.length > 0 && e.every((e) => e.isFavorite);
        }, [ef, el]),
        e6 = a.useCallback(async () => {
            let e = ef.filter((e) => el.has(e.id)),
                t = !e4;
            (await Promise.all(e.filter((e) => e.isFavorite !== t).map((e) => (0, _.Yy)(e.id, { isFavorite: t }, !0))),
                e1());
        }, [ef, el, e4, e1]),
        tt = a.useMemo(() => {
            let e = 0,
                t = 0,
                l = 0;
            return (
                ef.forEach((n) => {
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
                    number_of_clips_loaded: ef.length,
                    num_autoclips_loaded: e,
                    num_distributed_clips_loaded: t,
                    num_manual_clips_loaded: l,
                    gallery_page: eD,
                }
            );
        }, [ef, eD]);
    (0, E.A)(
        { type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.CLIP_GALLERY_VIEWED, properties: tt },
        { disableTrack: eg },
        [tt, eg],
    );
    let tl = a.useMemo(
        () => ({
            selectedClipIds: el,
            toggleClipSelection: eZ,
            clearSelection: e1,
            isMultiSelectMode: e2,
            picker: Y,
            onShareSession: et ? e8 : void 0,
        }),
        [el, eZ, e1, e2, Y, et, e8],
    );
    return (0, n.jsx)(w.f5, {
        value: J,
        children: (0, n.jsx)(eQ.$.Provider, {
            value: tl,
            children: (0, n.jsx)(m.N, {
                onClose: B,
                transitionState: Q,
                "aria-label": eN ? "Doggo Game" : void 0,
                ...Z,
                children: eN
                    ? (0, n.jsx)(to, { onClose: B })
                    : (0, n.jsxs)("div", {
                          className: ld.jT,
                          ref: eS,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: s()(ld.PD, "gallery" === ej && ld.vu),
                                  inert: "gallery" !== ej,
                                  children: [
                                      (0, n.jsx)(lc, { gamesFacet: es, mainLinkCounts: ed, mainLinkNewCounts: em }),
                                      (0, n.jsxs)("div", {
                                          className: ld.Qs,
                                          ref: eG,
                                          style: {
                                              "--custom-clips-header-height": "68px",
                                              "--custom-clips-scroll-inset": `${ez}px`,
                                          },
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  ref: ea,
                                                  className: s()(ld.$Q, !e_ && ld.iF),
                                                  children: [
                                                      (0, n.jsxs)("div", {
                                                          className: ld.ev,
                                                          children: [
                                                              null != eI &&
                                                                  (0, n.jsx)(L.A, {
                                                                      game: eq,
                                                                      size: L.M.SMALL,
                                                                      className: ld.Ve,
                                                                      "aria-hidden": !0,
                                                                  }),
                                                              (0, n.jsx)(h.D, {
                                                                  variant: "heading-md/semibold",
                                                                  color: "text-default",
                                                                  className: ld.Yn,
                                                                  children: eY,
                                                              }),
                                                              null == eI &&
                                                                  null == eM &&
                                                                  eD === G.oH.AUTO_CLIPS &&
                                                                  (0, n.jsx)(g.E, {
                                                                      icon: x.t,
                                                                      type: "early_access",
                                                                      variant: "brand",
                                                                  }),
                                                              null != eX &&
                                                                  !eV &&
                                                                  (0, n.jsxs)("div", {
                                                                      className: ld.Vl,
                                                                      children: [
                                                                          (0, n.jsx)("span", {
                                                                              className: ld.FK,
                                                                              "aria-hidden": "true",
                                                                          }),
                                                                          (0, n.jsx)(p.E, {
                                                                              variant: "text-md/normal",
                                                                              color: "text-muted",
                                                                              children: eo.intl.format(
                                                                                  er.default["+YIqQM"],
                                                                                  { count: eX },
                                                                              ),
                                                                          }),
                                                                      ],
                                                                  }),
                                                          ],
                                                      }),
                                                      (0, n.jsxs)("div", {
                                                          className: ld.$s,
                                                          children: [
                                                              (0, n.jsx)(v.m, {
                                                                  text: eo.intl.string(eo.t["5h0QOP"]),
                                                                  children: (0, n.jsx)(j.K, {
                                                                      onClick: e9,
                                                                      icon: y.MagnifyingGlassIcon,
                                                                      size: "sm",
                                                                      variant: "icon-only",
                                                                      "aria-label": eo.intl.string(eo.t["5h0QOP"]),
                                                                  }),
                                                              }),
                                                              (0, n.jsx)(j.K, {
                                                                  onClick: B,
                                                                  icon: C.XLargeIcon,
                                                                  size: "sm",
                                                                  variant: "icon-only",
                                                                  "aria-label": eo.intl.string(eo.t.cpT0Cq),
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                              e_
                                                  ? (0, n.jsx)(t9, {
                                                        filteredClips: eu,
                                                        totalClipCount: ef.length,
                                                        onEdit: eJ,
                                                        onClipClick: ee,
                                                        isLoading: eg,
                                                        onScroll: ei,
                                                    })
                                                  : (0, n.jsxs)("div", {
                                                        className: ld.LG,
                                                        children: [
                                                            (0, n.jsx)("div", {
                                                                className: ld.oP,
                                                                ref: eR,
                                                                children: (0, n.jsx)(tB, {
                                                                    allClips: ef,
                                                                    gamesFacet: es,
                                                                    participantsFacet: ec,
                                                                }),
                                                            }),
                                                            (0, n.jsx)(te, {
                                                                onEdit: eJ,
                                                                channelId: q,
                                                                filteredClips: eu,
                                                                totalClipCount: ef.length,
                                                                onClipClick: ee,
                                                                isLoading: eg,
                                                                topInset: eH,
                                                            }),
                                                        ],
                                                    }),
                                              et &&
                                                  e2 &&
                                                  (0, n.jsx)(ts, {
                                                      selectedCount: el.size,
                                                      allSelectedFavorited: e4,
                                                      onClear: e1,
                                                      onFavorite: e6,
                                                      onDelete: e3,
                                                      onShare: e5,
                                                      isSharing: ev,
                                                  }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, n.jsx)("div", {
                                  className: s()(ld.jN, "editing" === ej && ld.vu),
                                  inert: "editing" !== ej,
                                  onTransitionEnd: () => {
                                      switch (ej) {
                                          case "gallery":
                                              (eb(null), eL(f.ip.HIDDEN));
                                              break;
                                          case "editing":
                                              eL(f.ip.ENTERED);
                                      }
                                  },
                                  children:
                                      null != ek &&
                                      (0, n.jsx)(R.p, {
                                          clip: ek,
                                          modalContainerRef: eS,
                                          children: (0, n.jsxs)(
                                              z.JQ,
                                              {
                                                  children: [
                                                      (0, n.jsx)(H.A, { transitionState: eP, onClose: e0 }),
                                                      (0, n.jsx)(F.A, { channelId: q, onClose: e0 }),
                                                  ],
                                              },
                                              ek.id,
                                          ),
                                      }),
                              }),
                          ],
                      }),
            }),
        }),
    });
}
