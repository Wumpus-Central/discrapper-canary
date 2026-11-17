l.d(t, { default: () => lY });
var n = l(477900),
    i = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(613412),
    o = l(935399),
    c = l(855986),
    d = l(192308),
    u = l(521489),
    m = l(231723),
    h = l(534514),
    f = l(805251),
    x = l(403581),
    g = l(834730),
    p = l(866665),
    j = l(408278),
    y = l(7689),
    v = l(972213),
    b = l(765671),
    C = l(765548),
    N = l(775602),
    A = l(793574),
    k = l(688810),
    E = l(139286),
    I = l(429913),
    S = l(769015),
    w = l(287809),
    P = l(723702),
    L = l(419490),
    M = l(849993),
    D = l(489496),
    _ = l(554146),
    T = l(43105),
    R = l(428678),
    U = l(176781),
    H = l(650684),
    O = l(559106),
    z = l(263775),
    F = l(707116),
    G = l(464132),
    K = l(270607),
    V = l(49999),
    $ = l(683825),
    B = l(792996),
    q = l(829766);
let Y = [
    { mode: "off", icon: R.DenyIcon },
    { mode: "manual", icon: U.ClipsIcon },
    { mode: "auto", icon: H.ClipsAutoIcon },
];
function Q(e) {
    let { targetElementRef: t } = e,
        [l, i] = (0, z.kn)([_.M.AUTOCLIPPING_EARLY_ACCESS_LIBRARY_EDUCATION_POPOVER], { bypassAutoDismiss: !0 });
    return l !== _.M.AUTOCLIPPING_EARLY_ACCESS_LIBRARY_EDUCATION_POPOVER
        ? null
        : (0, n.jsx)(T.A, {
              targetElementRef: t,
              position: "bottom",
              alignmentStrategy: "trigger-center",
              title: B.intl.string($.default.yriD3v),
              body: B.intl.string($.default.UBihuW),
              onRequestClose: () => i(V.i.USER_DISMISS),
              actions: [
                  { text: B.intl.string(B.t["NX+WJN"]), variant: "secondary", onClick: () => i(V.i.TAKE_ACTION) },
              ],
          });
}
function X(e) {
    let { mode: t, icon: l, selected: a, tooltip: s, onSelect: r, onKeyDown: o } = e,
        c = i.useRef(null),
        d = (function (e) {
            switch (e) {
                case "off":
                    return B.intl.string($.default["uO/2T5"]);
                case "manual":
                    return B.intl.string($.default.ms4ibY);
                case "auto":
                    return B.intl.string($.default["4gzBi+"]);
            }
        })(t);
    return (0, n.jsx)(O.vN, {
        focusTarget: c,
        ringTarget: c,
        children: (0, n.jsx)(p.m, {
            position: "bottom",
            text: s,
            children: (0, n.jsxs)("button", {
                ref: c,
                type: "button",
                role: "radio",
                className: q.m,
                "aria-checked": a,
                "aria-label": d,
                tabIndex: a ? 0 : -1,
                onClick: () => {
                    a || r(t);
                },
                onKeyDown: o,
                children: [
                    (0, n.jsx)(l, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    a &&
                        (0, n.jsx)(g.E, {
                            tag: "span",
                            variant: "body-sm/medium",
                            color: "none",
                            "aria-hidden": !0,
                            children: d,
                        }),
                ],
            }),
        }),
    });
}
function W(e) {
    let { showOffEducation: t = !1 } = e,
        { value: l, onChange: a } = (0, G.U)(),
        { isLocked: s, openRoadblock: r } = (0, K.B)("ClipsCaptureModeSelector"),
        o = (0, F.T)(),
        c = i.useRef(null);
    function d(e) {
        s(e) ? r() : a(e);
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                ref: c,
                className: q.O,
                role: "radiogroup",
                "aria-label": B.intl.string($.default.eIX9be),
                children: Y.map((e, t) => {
                    let { mode: i, icon: r } = e;
                    return (0, n.jsx)(
                        X,
                        {
                            mode: i,
                            icon: r,
                            selected: i === l,
                            tooltip: (function (e, t) {
                                switch (e) {
                                    case "off":
                                        return B.intl.string($.default.ElHi4v);
                                    case "manual":
                                        return t.length > 0
                                            ? B.intl.formatToPlainString($.default.QoCXBT, { keybind: t })
                                            : B.intl.string($.default.YlBcu8);
                                    case "auto":
                                        return B.intl.string($.default["bF6l+Y"]);
                                }
                            })(i, o),
                            onSelect: d,
                            onKeyDown: (e) =>
                                (function (e, t) {
                                    let l;
                                    if (e.altKey || e.ctrlKey || e.metaKey) return;
                                    switch (e.key) {
                                        case "ArrowRight":
                                        case "ArrowDown":
                                            l = (t + 1) % Y.length;
                                            break;
                                        case "ArrowLeft":
                                        case "ArrowUp":
                                            l = (t + Y.length - 1) % Y.length;
                                            break;
                                        case "Home":
                                            l = 0;
                                            break;
                                        case "End":
                                            l = Y.length - 1;
                                            break;
                                        default:
                                            return;
                                    }
                                    (e.preventDefault(), c.current?.querySelectorAll('[role="radio"]')[l]?.focus());
                                    let n = Y[l].mode;
                                    s(n) || a(n);
                                })(e, t),
                        },
                        i,
                    );
                }),
            }),
            t && "off" === l && (0, n.jsx)(Q, { targetElementRef: c }),
        ],
    });
}
var Z = l(923904),
    J = l(701266),
    ee = l(423699),
    et = l(663357),
    el = l(352527),
    en = l(280483),
    ei = l(111994);
l(321073);
var ea = l(118057),
    es = l(289873),
    er = l(962125),
    eo = l(915089),
    ec = l(62617);
function ed(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: s, width: r, height: o, className: c, style: d } = e,
        u = i.useMemo(
            () => (0, ec.H)({ width: r, height: o, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [r, o, d],
        );
    return (0, n.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/1e6b3a97c86291528609222cdeb8b18fdcce3270f796106d4af3d0f7fa3cce18.svg",
        className: (0, ec.Z)(c),
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: s ?? "img",
    });
}
var eu = l(164636),
    em = l(687966),
    eh = l(646514),
    ef = l(475358),
    ex = l(123292),
    eg = l(292801),
    ep = l(780964),
    ej = l(766075),
    ey = l(532624),
    ev = l(350535),
    eb = l(572164),
    eC = l(953932),
    eN = l(652215),
    eA = l(71967);
function ek(e) {
    let { header: t, description: l } = e;
    return (0, n.jsxs)("div", {
        className: eA.Nr,
        children: [t, (0, n.jsx)(g.E, { color: "text-default", variant: "body-sm/medium", children: l })],
    });
}
function eE() {
    let e = (0, eu.bG)([ey.Ay], () => ey.Ay.getKeybindForAction(eN.hCu.SAVE_CLIP)),
        t = null != e ? ev.dI(e.shortcut, !0) : null;
    return (0, n.jsxs)("div", {
        className: eA.kR,
        children: [
            (0, n.jsx)(ek, {
                header: (0, n.jsx)(em.GameControllerIcon, { size: "refresh_sm", color: eh.A.colors.ICON_DEFAULT }),
                description: B.intl.string($.default["4K56sP"]),
            }),
            (0, n.jsx)(ek, {
                header: null != t ? (0, n.jsx)(ef.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  B.intl.format($.default.BIwQis, { keybind: t }),
                                  (0, n.jsx)("div", {
                                      className: eA.JH,
                                      children: (0, n.jsx)(ex.Q, {
                                          text: B.intl.string($.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "body-sm/medium",
                                          onClick: function () {
                                              (0, ej.openUserSettings)(ep.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : B.intl.string($.default.HOUDUm),
            }),
            (0, n.jsx)(ek, {
                header: (0, n.jsx)(eg.ArrowAngleRightUpIcon, { size: "refresh_sm", color: eh.A.colors.ICON_DEFAULT }),
                description: B.intl.string($.default.DLzdl7),
            }),
        ],
    });
}
function eI(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, eb.E)(),
        a = (0, M.H)("ClipsGalleryEmptyState"),
        { onChange: s } = (0, G.U)(),
        r = i.useCallback(() => s("manual"), [s]);
    return (0, n.jsx)("div", {
        className: eA.kL,
        children: (0, n.jsxs)("div", {
            className: eA.Qs,
            children: [
                (0, n.jsx)(ed, { width: 213, height: 135, alt: "" }),
                (0, n.jsx)(h.D, {
                    className: eA.wx,
                    variant: "heading-xl/semibold",
                    children: t ? B.intl.string($.default["+M2iLf"]) : B.intl.string($.default.m2GEpP),
                }),
                t &&
                    (0, n.jsx)(g.E, {
                        className: eA.h_,
                        variant: "body-md/medium",
                        children: B.intl.string($.default.xkY5xS),
                    }),
                !l &&
                    (0, n.jsx)("div", {
                        className: eA.SO,
                        children: (0, n.jsx)(eC.A, { onEnableClips: a ? r : void 0 }),
                    }),
                l && !t && (0, n.jsx)(eE, {}),
            ],
        }),
    });
}
let eS = 4 / 3;
var ew = l(621466),
    eP = l(61491),
    eL = l(342952),
    eM = l(890856),
    eD = l(939249),
    e_ = l(820081),
    eT = l(365199),
    eR = l(778712),
    eU = l(821609),
    eH = l(22231),
    eO = l(983851),
    ez = l(31300),
    eF = l(442433),
    eG = l(587895),
    eK = l(927813),
    eV = l(995273);
function e$(e) {
    let { timestamp: t, abbreviated: l = !0 } = e,
        [n, a] = i.useState(() => (0, eV.jb)(t, l));
    return (
        i.useEffect(() => {
            a((0, eV.jb)(t, l));
            let e = Date.now() - t;
            if (e > eK.A.Millis.DAY) return;
            let n = e >= eK.A.Millis.HOUR ? eK.A.Millis.HOUR : eK.A.Millis.MINUTE,
                i = setInterval(
                    () => {
                        a((0, eV.jb)(t, l));
                    },
                    n,
                    n - (e % n),
                );
            return () => clearInterval(i);
        }, [t, l]),
        n
    );
}
var eB = l(549685),
    eq = l(129230),
    eY = l(403362),
    eQ = l(53677),
    eX = l(609174),
    eW = l(151184),
    eZ = l(82716),
    eJ = l(449397),
    e0 = l(399053),
    e1 = l(285072),
    e3 = l(284009),
    e2 = l.n(e3),
    e9 = l(460905),
    e6 = l(443184),
    e5 = l(696016),
    e4 = l(153511);
function e8(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    e2()(l?.type === e5.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let i = (0, c.bG)([w.default], () => w.default.getUser(l.remoteTriggerUserId));
    if (null == i) return null;
    let a = i.globalName ?? i.username;
    return (0, n.jsx)(p.m, {
        text: B.intl.string($.default.vTTkFF),
        children: (0, n.jsxs)("div", {
            className: e4.S,
            children: [
                (0, n.jsx)("img", { src: i.getAvatarURL(null, 12, !1), className: e4.$, alt: a }),
                (0, n.jsx)(g.E, {
                    color: "text-overlay-light",
                    variant: "body-xs/medium",
                    children: B.intl.formatToPlainString($.default.QJ7i8Z, { username: a }),
                }),
            ],
        }),
    });
}
function e7(e) {
    let { icon: t, text: l, tooltipText: i } = e;
    return (0, n.jsx)(p.m, {
        text: i,
        children: (0, n.jsxs)("div", {
            className: e4.S,
            children: [
                (0, n.jsx)(t, { size: "xxs", color: "currentColor" }),
                (0, n.jsx)(g.E, { color: "text-overlay-light", variant: "body-xs/medium", children: l }),
            ],
        }),
    });
}
function te(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === e5.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case e5.Gy.DISTRIBUTED:
            return (0, n.jsx)(e8, { clip: t });
        case e5.Gy.LAUGHTER:
            return (0, n.jsx)(e7, {
                icon: e9.ReactionIcon,
                text: B.intl.string($.default.bTC23D),
                tooltipText: B.intl.string($.default["ry+jxm"]),
            });
        case e5.Gy.SHOUTING:
            return (0, n.jsx)(e7, {
                icon: e9.ReactionIcon,
                text: B.intl.string($.default["3gqpuo"]),
                tooltipText: B.intl.string($.default["ry+jxm"]),
            });
        case e5.Gy.GAME_EVENT: {
            let e = (0, e6.u6)(t.applicationId, e5.Gy.GAME_EVENT, t.decision.signal.eventName);
            if (null == e) return null;
            return (0, n.jsx)(e7, {
                icon: e,
                text: (0, e6.PZ)(t.applicationId, e5.Gy.GAME_EVENT, t.decision.signal.eventName) ?? "",
                tooltipText: B.intl.string($.default["347DBb"]),
            });
        }
        default:
            return null;
    }
}
var tt = l(718812),
    tl = l(721610),
    tn = l(686320),
    ti = l(175764);
function ta(e) {
    let { clip: t, actionsDisabled: l, isNew: i, onClick: a, onEdit: s, gridItemProps: r } = e;
    return (0, n.jsx)(eX.Cl, {
        clip: t,
        children: (0, n.jsx)(ts, { actionsDisabled: l, isNew: i, onClick: a, onEdit: s, gridItemProps: r }),
    });
}
function ts(e) {
    let { actionsDisabled: t, isNew: a, onClick: r, onEdit: o, gridItemProps: d } = e,
        u = (0, eX.Y_)(),
        m = !0 === u.pending,
        h = t || m,
        { analyticsLocations: f } = (0, k.Ay)(A.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: x, toggleClipSelection: g, isMultiSelectMode: p, picker: j } = i.useContext(tl.$),
        y = j?.allowMultiSelect ?? !0,
        v = null != j ? (0, tn.$)(j.action).label : void 0,
        [b, C] = i.useState(!1),
        [E, I] = i.useState(!1),
        [S, w] = i.useState(!1),
        [P, M] = i.useState(!1),
        [D, _] = i.useState(0),
        T = x.has(u.id),
        R = u.type === e5.nQ.SCREENSHOT,
        U = "auto" === u.clipMethod,
        H = (0, c.bG)([N.Ay], () => N.Ay.keyboardModeEnabled),
        O = (E || b || (S && H)) && !T,
        z = i.useCallback(() => w(!0), []),
        F = i.useCallback((e) => {
            e.currentTarget.contains(e.relatedTarget) || w(!1);
        }, []);
    i.useEffect(() => {
        if (!O || R || m) return;
        let e = window.setTimeout(() => M(!0), 150);
        return () => {
            (window.clearTimeout(e), M(!1));
        };
    }, [O, R, m]);
    let G = i.useRef(null),
        K = i.useCallback(() => {
            G.current?.releaseSource();
        }, []),
        V = i.useCallback((e) => {
            G.current?.seek(e);
        }, []),
        $ = i.useCallback(() => C(!1), []),
        q = i.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), g(u.id));
            },
            [g, u.id],
        ),
        Y = i.useCallback(
            (e) => {
                C(!0);
                let t =
                    p && x.size > 0
                        ? Array.from(x)
                              .map((e) => L.Ay.getClipById(e))
                              .filter(eY.Vq)
                        : [u];
                (0, eF.L3)(
                    e,
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e(249169),
                            l.e(657266),
                            l.e(715867),
                            l.e(595429),
                            l.e(115472),
                            l.e(320891),
                            l.e(531279),
                            l.e(371863),
                            l.e(398793),
                            l.e(338601),
                            l.e(218489),
                            l.e(4328),
                            l.e(886456),
                            l.e(218307),
                            l.e(401343),
                        ]).then(l.bind(l, 590146));
                        return (l) =>
                            (0, n.jsx)(e, {
                                ...l,
                                analyticsLocations: f,
                                clips: t,
                                actionsDisabled: h,
                                showExportingModal: !0,
                                onMainAction: null != j ? () => j.onPick(u) : void 0,
                                mainAction: j?.action,
                                onShare: () => {
                                    eq.default.track(eN.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...eQ.lc(),
                                        ...eQ.Zy(u),
                                    });
                                },
                                onEdit: () => {
                                    (o(u),
                                        eq.default.track(eN.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...eQ.lc(),
                                            ...eQ.Zy(u),
                                        }));
                                },
                                onBeforeDelete: K,
                                onAfterDelete: () => {
                                    eq.default.track(eN.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...eQ.lc(),
                                        ...eQ.Zy(u),
                                    });
                                },
                            });
                    },
                    { onClose: $ },
                );
            },
            [u, p, x, h, $, o, K, j, f],
        ),
        Q = i.useCallback(
            (e) => {
                h || (e.preventDefault(), e.stopPropagation(), Y(e));
            },
            [h, Y],
        ),
        X = i.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), Y(e));
            },
            [Y],
        ),
        W = i.useCallback(
            (e) => {
                (e.preventDefault(),
                    e.stopPropagation(),
                    o(u),
                    eq.default.track(eN.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" }));
            },
            [o, u],
        ),
        Z = i.useCallback(
            (e) => {
                !h &&
                    (!(0, ew.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") &&
                            null == e.target.closest("[data-clips-progress]") &&
                            null == e.target.closest("[data-clips-select]") &&
                            e.currentTarget.contains(e.target))) &&
                    (y && e.shiftKey ? (e.preventDefault(), g(u.id)) : y && p ? g(u.id) : null != r && r(u),
                    eq.default.track(eN.HAw.CLIP_GALLERY_CARD_CLICKED, { ...eQ.lc(), ...eQ.Zy(u) }));
            },
            [h, y, p, g, u, r],
        );
    return (0, n.jsx)(k.f5, {
        value: f,
        children: (0, n.jsx)("div", {
            className: ti.hl,
            onFocus: z,
            onBlur: F,
            children: (0, n.jsx)(eM.s, {
                "aria-disabled": h,
                "aria-label": v ?? B.intl.string(R ? B.t["HO/oXl"] : B.t.bt75uw),
                onClick: h ? void 0 : Z,
                onContextMenu: Q,
                buttonProps: null != d ? { role: "button", id: d.id, tabIndex: d.tabIndex } : void 0,
                buttonRef: d?.ref,
                onFocus: d?.onFocus,
                className: s()(ti.Nr, { [ti.r9]: h, [ti.in]: b, [ti.wH]: T }),
                onMouseEnter: () => I(!0),
                onMouseLeave: () => I(!1),
                children: (0, n.jsx)("div", {
                    className: ti.w7,
                    children: (0, n.jsxs)(tr, {
                        ref: G,
                        isPlaying: P,
                        onProgressChange: _,
                        children: [
                            m && (0, n.jsx)("div", { className: ti.mi, children: (0, n.jsx)(es.y, {}) }),
                            (0, n.jsx)("div", {
                                className: s()(ti.w$, { [ti.t7]: O, [ti.Vg]: U }),
                                inert: !0,
                                "aria-hidden": "true",
                            }),
                            (0, n.jsx)(to, {
                                isNew: a,
                                showHoverActions: O && !h,
                                showSelect: y && (O || T),
                                isSelected: T,
                                onToggleSelect: q,
                                onMenu: X,
                                onBeforeDelete: K,
                            }),
                            (0, n.jsx)(tc, { showHoverState: O, playbackProgress: D, onEdit: W, onSeek: V }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function tr(e) {
    let { isPlaying: t, onProgressChange: l, children: i, ref: a } = e;
    return (0, n.jsx)(e0.d, {
        ref: a,
        isPlaying: t,
        preload: "none",
        onProgressChange: l,
        children: (0, n.jsx)(e1.h, { isVisible: !0, className: ti.Lw, children: i }),
    });
}
function to(e) {
    let {
            isNew: t,
            showHoverActions: l,
            showSelect: i,
            isSelected: a,
            onToggleSelect: r,
            onMenu: o,
            onBeforeDelete: c,
        } = e,
        d = (0, eX.Y_)(),
        u = !0 === d.pending;
    return (0, n.jsxs)("div", {
        className: ti.wx,
        children: [
            (0, n.jsxs)("div", {
                className: ti.LD,
                children: [
                    i &&
                        (0, n.jsx)(eD.D, {
                            "aria-label": B.intl.string(B.t.XqMe3N),
                            "aria-pressed": a,
                            onClick: r,
                            "data-clips-select": "true",
                            className: s()(ti.UJ, { [ti.ZK]: a }),
                            children: a && (0, n.jsx)(e_.CheckmarkSmallBoldIcon, { size: "xs", color: "currentColor" }),
                        }),
                    !u &&
                        t &&
                        (0, n.jsx)("div", {
                            className: ti.Ad,
                            children: (0, n.jsx)(g.E, {
                                variant: "body-xs/semibold",
                                color: "text-overlay-light",
                                children: B.intl.string(B.t.y2b7CA),
                            }),
                        }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: ti.IE,
                children: [
                    (d.isFavorite || l) &&
                        (0, n.jsx)("div", {
                            className: s()({ [ti.L6]: d.isFavorite }),
                            children: (0, n.jsx)(eZ.z, {}),
                        }),
                    l &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(p.m, {
                                    text: B.intl.string(B.t["UKOtz+"]),
                                    children: (0, n.jsx)(j.K, {
                                        onClick: o,
                                        icon: eT.MoreHorizontalIcon,
                                        "aria-label": B.intl.string(B.t["UKOtz+"]),
                                        variant: "overlay-secondary",
                                        size: "sm",
                                    }),
                                }),
                                (0, n.jsx)(eW.k, { onBeforeDelete: c }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
function tc(e) {
    let { showHoverState: t, playbackProgress: l, onEdit: a, onSeek: r } = e,
        o = (0, eX.Y_)(),
        d = o.type === e5.nQ.SCREENSHOT,
        u = i.useRef(null),
        m = i.useRef(!1),
        h = i.useCallback(
            (e) => {
                let t = u.current;
                if (null == t) return;
                let l = t.getBoundingClientRect();
                0 === l.width || r(Math.max(0, Math.min(100, 100 * ((e - l.left) / l.width))));
            },
            [r],
        ),
        f = i.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.preventDefault(),
                    (m.current = !0),
                    e.currentTarget.setPointerCapture(e.pointerId),
                    h(e.clientX));
            },
            [h],
        ),
        x = i.useCallback(
            (e) => {
                m.current && h(e.clientX);
            },
            [h],
        ),
        p = i.useCallback((e) => {
            ((m.current = !1),
                e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId));
        }, []),
        j = (0, c.yK)([w.default], () => o.users.map((e) => w.default.getUser(e)).filter(eY.Vq)),
        y = e$({ timestamp: o.createdAt }),
        v = o.decision?.signal?.type,
        b = null != v && v !== e5.Gy.MANUAL,
        C =
            j.length > 0
                ? (0, n.jsx)("span", {
                      className: ti.HD,
                      "data-clips-avatars": "true",
                      children: (0, n.jsx)(eL.A, {
                          maxUsers: 3,
                          users: j,
                          size: eR._3.SIZE_16,
                          "aria-label": B.intl.string(B.t.WTozwe),
                      }),
                  })
                : null;
    return (0, n.jsx)("div", {
        className: ti.qr,
        children: (0, n.jsxs)("div", {
            className: ti.Zn,
            children: [
                (0, n.jsxs)("div", {
                    className: ti.$,
                    children: [
                        (0, n.jsxs)("div", { className: ti.gH, children: [(0, n.jsx)(tm, {}), (0, n.jsx)(tu, {})] }),
                        t ? C : null,
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: s()(ti.SO, { [ti.AK]: t && !d, [ti.I_]: t && d }),
                    children: [
                        (0, n.jsxs)("div", {
                            className: s()(ti.KW, { [ti.g3]: t }),
                            inert: t,
                            "aria-hidden": t,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: ti.Tf,
                                    children: [
                                        (0, n.jsx)(te, { clip: o }),
                                        b && (0, n.jsx)("span", { className: ti.TG, "aria-hidden": "true" }),
                                        C,
                                        (0, n.jsx)(g.E, {
                                            variant: "body-xs/normal",
                                            color: "none",
                                            children: B.intl.format($.default["0QCBug"], { time: y }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", { className: ti.av, children: (0, n.jsx)(td, {}) }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: s()(ti.Ax, { [ti.Mg]: t }),
                            inert: !t,
                            children: [
                                !d &&
                                    (0, n.jsx)("div", {
                                        ref: u,
                                        className: ti.hr,
                                        onPointerDown: f,
                                        onPointerMove: x,
                                        onPointerUp: p,
                                        "data-clips-progress": "true",
                                        "aria-hidden": "true",
                                        children: (0, n.jsx)("div", {
                                            className: ti.z5,
                                            children: (0, n.jsx)("div", {
                                                className: ti.TE,
                                                style: { width: `${l}%` },
                                                children: (0, n.jsx)("div", {
                                                    className: ti.GT,
                                                    "aria-hidden": "true",
                                                }),
                                            }),
                                        }),
                                    }),
                                (0, n.jsxs)("div", {
                                    className: ti.E_,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: ti.lO,
                                            children: (0, n.jsx)(eU.$, {
                                                variant: "overlay-secondary",
                                                size: "sm",
                                                icon: eH.PencilIcon,
                                                text: B.intl.string(B.t.bt75uw),
                                                onClick: a,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: ti.lO,
                                            children: (0, n.jsx)(eJ.e, { variant: "primary" }),
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
function td() {
    let e = (0, eX.Y_)(),
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
            return (0, eP.rB)(l);
        }, [e.length, e.editMetadata]);
    return t
        ? null
        : (0, n.jsxs)("div", {
              className: ti.p0,
              children: [
                  a && (0, n.jsx)(eB.A, { color: "white", width: 14, height: 14 }),
                  (0, n.jsx)(g.E, {
                      variant: "body-xs/medium",
                      color: "text-overlay-light",
                      tabularNumbers: !0,
                      children: l ? B.intl.string(B.t["2Fp7OP"]) : s,
                  }),
              ],
          });
}
function tu() {
    let e = (0, eX.Y_)(),
        t = (0, tt.h)(e),
        l = "" !== t;
    return (0, n.jsx)(g.E, {
        className: ti.DD,
        variant: "body-sm/semibold",
        color: "text-overlay-light",
        children: l ? t : e.name,
    });
}
function tm() {
    let e = (0, eX.Y_)(),
        t = (0, c.bG)([eG.A], () => (null != e.applicationId ? eG.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, n.jsx)("div", {
        className: ti.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, n.jsx)("img", { src: l, alt: "", className: ti.T_ })
                : e.type === e5.nQ.VOICE_CLIP
                  ? (0, n.jsx)(eO.VoiceNormalIcon, { size: "xs", color: "currentColor" })
                  : (0, n.jsx)(ez.ScreenIcon, { size: "xs", color: "currentColor" }),
    });
}
tr.displayName = "CardThumbnail";
var th = l(792852);
function tf(e) {
    return Math.min(45 * e, 520);
}
var tx = l(91440),
    tg = l(762831);
function tp(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: a, onEdit: s, isLoading: r, topInset: o = 0 } = e,
        [d, u] = i.useState({ width: 0, height: 0 }),
        m = (0, c.yK)([L.Ay], () => L.Ay.getNewClipIds()),
        f = (0, c.bG)([L.Ay], () => L.Ay.getExportingClipIds().size > 0),
        x = (0, th.P)((e) => e.activeMainLink),
        p = (0, th.P)((e) => e.gameFacet),
        j = (0, th.P)((e) => e.clippedWithFacet),
        y = i.useMemo(() => {
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
                    title: B.intl.string(B.t["kB2R/0"]),
                    description: t ? B.intl.string(B.t["6AXirz"]) : void 0,
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
        v = i.useMemo(() => [o, 24, 0, 24], [o]),
        { width: b } = d,
        { tileWidth: C, columns: A } = i.useMemo(() => {
            var e, l;
            let n, i, a;
            return (
                (e = t.length),
                (n = Math.max(1, Math.floor(((l = b - 48) + 20) / 340))),
                (i = Math.max(320, (l - 20 * (n - 1)) / n)),
                (a = Math.ceil(e / n)),
                { tileWidth: i, columns: n, rows: a }
            );
        }, [t.length, b, 48]),
        k = (0, eo.GV)(),
        E = i.useRef(null),
        I = i.useMemo(() => {
            let e = Math.max(1, A),
                t = [];
            for (let l of y) {
                let n = Math.ceil(l.clips.length / e);
                for (let i = 0; i < n; i++) t.push(Math.min(e, l.clips.length - i * e));
            }
            return t;
        }, [y, A]),
        S = i.useCallback(
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
            getContainerProps: w,
            getItemProps: P,
            getRowProps: M,
        } = (0, ea.A)({ navId: k, columnCounts: I, prepareFocus: S }),
        D = i.useMemo(() => y.map((e) => Math.ceil(e.clips.length / A)), [y, A]),
        _ = i.useMemo(() => D.reduce((e, t) => e + t, 0), [D]),
        T = Math.floor(C / eS) + 20,
        R = y.length > 0 ? `${x}:${p ?? ""}:${j ?? ""}` : null,
        U = (function (e) {
            let t = (0, c.bG)([N.Ay], () => N.Ay.useReducedMotion),
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
        })(R),
        H = i.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: i } = t,
                    r = y[l];
                if (null == r) return null;
                let o = i * A,
                    c = r.clips.slice(o, o + A);
                return (0, n.jsx)(
                    "div",
                    {
                        className: tx.UX,
                        ...M(e),
                        children: c.map((t, l) => {
                            let i = { width: C };
                            return (
                                U && (i["--custom-entrance-delay"] = `${tf(e + l)}ms`),
                                (0, n.jsx)(
                                    "div",
                                    {
                                        className: U ? tg.$ : void 0,
                                        style: i,
                                        children: (0, n.jsx)(ta, {
                                            actionsDisabled: f,
                                            isNew: m.includes(t.id),
                                            onClick: a ?? s,
                                            onEdit: s,
                                            clip: t,
                                            gridItemProps: P(l, e),
                                        }),
                                    },
                                    `${R ?? "static"}:${t.id}`,
                                )
                            );
                        }),
                    },
                    `row-${l}-${i}`,
                );
            },
            [y, A, C, f, m, a, s, M, P, U, R],
        ),
        O = i.useCallback(
            (e) => {
                let t = y[e];
                return t?.description != null ? 66 : 44;
            },
            [y],
        ),
        z = i.useCallback(
            (e) => {
                let t = y[e];
                return null == t
                    ? null
                    : (0, n.jsxs)(
                          "div",
                          {
                              className: tx.aE,
                              children: [
                                  (0, n.jsx)(h.D, {
                                      variant: "body-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, n.jsx)(g.E, {
                                          variant: "body-sm/normal",
                                          color: "text-subtle",
                                          className: tx.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [y],
        );
    if (!r && 0 === y.length) return (0, n.jsx)(eI, { isEmptyBecauseQuery: l > 0 });
    if (r && 0 === y.length) return (0, n.jsx)("div", { className: tx.dc, children: (0, n.jsx)(es.y, {}) });
    let F = (0, n.jsx)(er.A, {
            ref: E,
            role: "none presentation",
            className: tx.Vb,
            listPadding: v,
            renderRow: H,
            renderSectionHeader: z,
            rowCount: _,
            rowCountBySection: D,
            rowHeight: T,
            sectionHeaderHeight: O,
            onResize: u,
        }),
        { onFocus: G, ...K } = w();
    return (0, n.jsx)("div", { className: tx.UT, ...K, children: F });
}
var tj = l(405433),
    ty = l(241326),
    tv = l(27232),
    tb = l(505930),
    tC = l(322911);
function tN(e) {
    let {
            selectedCount: t,
            allSelectedFavorited: l,
            onClear: i,
            onFavorite: a,
            onDelete: s,
            onShare: r,
            isSharing: o = !1,
        } = e,
        c = t > 10,
        d = B.intl.string(l ? $.default.IZsalP : $.default.ihBfyA),
        u = (0, n.jsx)(eU.$, {
            variant: "primary",
            size: "sm",
            icon: tj.ShareIcon,
            text: B.intl.string(B.t.RDE0Sc),
            onClick: r,
            disabled: c,
            loading: o,
        });
    return (0, n.jsxs)("div", {
        "aria-label": B.intl.string(B.t.z2jK6X),
        role: "region",
        className: tC.M0,
        children: [
            (0, n.jsxs)("div", {
                className: tC.h5,
                children: [
                    (0, n.jsx)(g.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: B.intl.format($.default.cSfYIv, { count: t }),
                    }),
                    (0, n.jsx)("span", { className: tC.Om, "aria-hidden": "true" }),
                    (0, n.jsx)(eD.D, {
                        className: tC.IU,
                        onClick: i,
                        children: (0, n.jsx)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-link",
                            children: B.intl.string(B.t.VkKicb),
                        }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: tC.o1,
                children: [
                    (0, n.jsx)(p.m, {
                        text: B.intl.string(B.t.oyYWHE),
                        children: (0, n.jsx)(j.K, {
                            onClick: s,
                            icon: ty.TrashIcon,
                            size: "sm",
                            variant: "secondary",
                            "aria-label": B.intl.string(B.t.oyYWHE),
                        }),
                    }),
                    (0, n.jsx)(
                        p.m,
                        {
                            text: d,
                            children: (0, n.jsx)(j.K, {
                                onClick: a,
                                icon: l ? tv.StarIcon : tb.StarOutlineIcon,
                                size: "sm",
                                variant: "secondary",
                                "aria-label": d,
                            }),
                        },
                        `favorite:${l}`,
                    ),
                    (0, n.jsx)(p.m, { text: c ? B.intl.string($.default.qpw1d9) : null, asContainer: !0, children: u }),
                ],
            }),
        ],
    });
}
var tA = l(70860);
function tk(e) {
    let { onClose: t } = e,
        a = i.useRef(null);
    return (
        i.useEffect(() => {
            let e = a.current;
            if (null == e) return;
            e.focus();
            let t = !1,
                n = null;
            return (
                l
                    .e(349193)
                    .then(l.bind(l, 986357))
                    .then((l) => {
                        let { startDoggoGame: i } = l;
                        t || (n = i(e));
                    })
                    .catch(() => {}),
                () => {
                    ((t = !0), n?.());
                }
            );
        }, []),
        (0, n.jsxs)("div", {
            className: tA.kL,
            children: [
                (0, n.jsx)("canvas", { ref: a, className: tA.Ji, tabIndex: 0, "aria-label": "Doggo Game" }),
                (0, n.jsx)("div", {
                    className: tA.b,
                    children: (0, n.jsx)(j.K, {
                        onClick: t,
                        icon: v.XLargeIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": B.intl.string(B.t.cpT0Cq),
                    }),
                }),
            ],
        })
    );
}
let tE = [
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
var tI = l(265872),
    tS = l(847374),
    tw = l(165862),
    tP = l(477782),
    tL = l(112173),
    tM = l(97808),
    tD = l(683438),
    t_ = l(682163),
    tT = l(71393),
    tR = l(341923),
    tU = l(305866),
    tH = l(441349),
    tO = l(789645),
    tz = l(70254),
    tF = l(569737);
function tG(e) {
    return (e.setHours(0, 0, 0, 0), e.getTime());
}
function tK(e) {
    return (e.setHours(23, 59, 59, 999), e.getTime());
}
function tV(e, t) {
    if (null == e && null == t) return null;
    let l = (0, tz.Xj)();
    return { preset: "custom", after: null != e ? tG(e.toDate(l)) : null, before: null != t ? tK(t.toDate(l)) : null };
}
function t$(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new tF.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let tB = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function tq(e) {
    return tB.format(new Date(e));
}
function tY(e) {
    switch (e.preset) {
        case "today":
            return B.intl.string($.default.yOAWWM);
        case "yesterday":
            return B.intl.string($.default["PtV/Ti"]);
        case "last-3-days":
            return B.intl.string($.default.xfmv7I);
        case "this-year":
            return B.intl.string($.default["+eE7zX"]);
        case "last-year":
            return B.intl.string($.default.Nwj9v0);
        case "custom": {
            let t = null != e.after ? tq(e.after) : null,
                l = null != e.before ? tq(e.before) : null;
            if (null != t && null != l) return B.intl.formatToPlainString($.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return B.intl.formatToPlainString($.default.k1FkTL, { date: t });
            if (null != l) return B.intl.formatToPlainString($.default["4NlpHD"], { date: l });
            return B.intl.string($.default.tv9apA);
        }
    }
}
var tQ = l(435021);
function tX(e) {
    let { closePopout: t } = e,
        l = (0, th.P)((e) => e.dateFilter),
        a = (0, th.P)((e) => e.setDateFilter),
        [r, o] = i.useState(l?.preset === "custom"),
        [c, d] = i.useState(() => (l?.preset === "custom" ? t$(l.after) : null)),
        [u, m] = i.useState(() => (l?.preset === "custom" ? t$(l.before) : null)),
        h = i.useMemo(
            () => [
                { key: "today", label: B.intl.string($.default.yOAWWM) },
                { key: "yesterday", label: B.intl.string($.default["PtV/Ti"]) },
                { key: "last-3-days", label: B.intl.string($.default.xfmv7I) },
                { key: "this-year", label: B.intl.string($.default["+eE7zX"]) },
                { key: "last-year", label: B.intl.string($.default.Nwj9v0) },
            ],
            [],
        ),
        f = l?.preset ?? null,
        x = r && "custom" !== f ? null : f,
        y = i.useMemo(() => (0, tz.Ec)((0, tz.Xj)()), []),
        v = i.useCallback(
            (e) => {
                (a(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: tG(new Date(t)), before: tK(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: tG(new Date(l)), before: tK(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 2), { preset: e, after: tG(l), before: tK(new Date(t)) }
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
        b = i.useCallback(() => {
            o((e) => !e);
        }, []),
        C = i.useCallback(
            (e) => {
                (d(e), a(tV(e, u)));
            },
            [u, a],
        ),
        N = i.useCallback(
            (e) => {
                (m(e), a(tV(c, e)));
            },
            [c, a],
        ),
        A = i.useCallback(() => {
            (d(null), m(null), a(null));
        }, [a]),
        k = null != c || null != u,
        E = i.useRef(null),
        I = i.useCallback(() => Array.from(E.current?.querySelectorAll('[role="button"]') ?? []), []),
        S = i.useCallback(
            (e) => {
                if ("ArrowDown" !== e.key && "ArrowUp" !== e.key) return;
                let t = I();
                if (0 === t.length) return;
                (e.preventDefault(), e.stopPropagation());
                let l = t.indexOf(e.target);
                if (-1 === l) return void ("ArrowDown" === e.key ? t[0] : t[t.length - 1])?.focus();
                let n = Math.min(t.length - 1, Math.max(0, l + ("ArrowDown" === e.key ? 1 : -1)));
                t[n]?.focus();
            },
            [I],
        ),
        w = i.useCallback(
            (e) => {
                let l = e.relatedTarget;
                (null != l && (e.currentTarget.contains(l) || null != l.closest('[role="dialog"]'))) || t();
            },
            [t],
        );
    return (0, n.jsx)(tU.l, {
        "aria-label": B.intl.string($.default.upqksT),
        onBlur: w,
        children: (0, n.jsxs)("div", {
            className: s()(tQ.SW, r && tQ.Td),
            children: [
                (0, n.jsxs)("div", {
                    className: tQ.sh,
                    children: [
                        (0, n.jsx)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-muted",
                            className: tQ.a9,
                            children: B.intl.string($.default.upqksT),
                        }),
                        (0, n.jsxs)("div", {
                            ref: E,
                            className: tQ.eF,
                            onKeyDown: S,
                            children: [
                                h.map((e) =>
                                    (0, n.jsx)(
                                        eD.D,
                                        {
                                            className: s()(tQ.zD, x === e.key && tQ.pH),
                                            onClick: () => v(e.key),
                                            "aria-pressed": x === e.key,
                                            children: (0, n.jsx)(g.E, {
                                                variant: "body-sm/medium",
                                                color: "currentColor",
                                                children: e.label,
                                            }),
                                        },
                                        e.key,
                                    ),
                                ),
                                (0, n.jsxs)(eD.D, {
                                    className: s()(tQ.zD, tQ.Kl, (r || "custom" === f) && tQ.pH),
                                    onClick: b,
                                    "aria-expanded": r,
                                    children: [
                                        (0, n.jsx)(g.E, {
                                            variant: "body-sm/medium",
                                            color: "currentColor",
                                            children: B.intl.string($.default.tv9apA),
                                        }),
                                        (0, n.jsx)(g.E, {
                                            variant: "body-md/medium",
                                            color: "text-muted",
                                            className: tQ.Xt,
                                            children: r ? "\u25C0" : "\u25B6",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: tQ.ML,
                    "aria-hidden": !r,
                    children: [
                        (0, n.jsxs)("div", {
                            className: tQ.U6,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: tQ._2,
                                    children: [
                                        (0, n.jsx)(g.E, {
                                            variant: "body-sm/medium",
                                            color: "text-muted",
                                            className: tQ.bk,
                                            "aria-hidden": !0,
                                            children: B.intl.string($.default["96vZuU"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tQ.h0,
                                            children: [
                                                (0, n.jsx)(tH.l, {
                                                    label: B.intl.string($.default["96vZuU"]),
                                                    hideLabel: !0,
                                                    value: c,
                                                    onChange: C,
                                                    maxValue: u ?? y,
                                                }),
                                                null != c &&
                                                    (0, n.jsx)(p.m, {
                                                        text: B.intl.string(B.t.VkKicb),
                                                        children: (0, n.jsx)(j.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tO.XSmallIcon,
                                                            onClick: () => C(null),
                                                            "aria-label": B.intl.string(B.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: tQ._2,
                                    children: [
                                        (0, n.jsx)(g.E, {
                                            variant: "body-sm/medium",
                                            color: "text-muted",
                                            className: tQ.bk,
                                            "aria-hidden": !0,
                                            children: B.intl.string($.default["GL51/b"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tQ.h0,
                                            children: [
                                                (0, n.jsx)(tH.l, {
                                                    label: B.intl.string($.default["GL51/b"]),
                                                    hideLabel: !0,
                                                    value: u,
                                                    onChange: N,
                                                    minValue: c ?? void 0,
                                                    maxValue: y,
                                                }),
                                                null != u &&
                                                    (0, n.jsx)(p.m, {
                                                        text: B.intl.string(B.t.VkKicb),
                                                        children: (0, n.jsx)(j.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tO.XSmallIcon,
                                                            onClick: () => N(null),
                                                            "aria-label": B.intl.string(B.t.VkKicb),
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
                                className: tQ.dS,
                                children: (0, n.jsx)(ex.Q, { size: "sm", text: B.intl.string(B.t.VkKicb), onClick: A }),
                            }),
                    ],
                }),
            ],
        }),
    });
}
var tW = l(91871),
    tZ = l.n(tW),
    tJ = l(190199),
    t0 = l(914427),
    t1 = l(724141);
function t3(e) {
    let {
            triggerLabel: t,
            options: l,
            selectedKeys: a,
            onToggle: s,
            multiSelect: r,
            searchPlaceholder: o,
            emptyStateText: c,
        } = e,
        d = i.useRef(null),
        u = i.useMemo(() => new Set(a), [a]),
        m = i.useCallback(
            (e) => {
                let t;
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => tZ()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, n.jsxs)(
                            tJ.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, n.jsx)("span", { className: t1.H, children: e.icon }),
                                    (0, n.jsx)(tJ.x4.Label, { children: e.label }),
                                    r ? (0, n.jsx)(tJ.x4.Checkbox, {}) : (0, n.jsx)(tJ.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        h = a.size > 0 ? `${t} (${a.size})` : t;
    return (0, n.jsx)(tI.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(t0.p, {
                "aria-label": t,
                placeholder: o,
                value: u,
                multiSelect: r,
                onChange: s,
                onClose: l,
                emptyStateText: c ?? B.intl.string(B.t.QwSXv8),
                maxVisibleItems: 6,
                children: m,
            });
        },
        children: (e) =>
            (0, n.jsx)(eU.$, {
                ...e,
                buttonRef: d,
                size: "sm",
                variant: "secondary",
                text: h,
                icon: tS.ChevronSmallDownIcon,
                iconPosition: "end",
            }),
    });
}
var t2 = l(187671);
function t9(e) {
    let { label: t, icon: l, onRemove: i, removeAriaLabel: a } = e;
    return (0, n.jsxs)("div", {
        className: t2.Io,
        children: [
            null != l && (0, n.jsx)("span", { className: t2.Kk, children: l }),
            (0, n.jsx)(g.E, {
                className: t2.Pf,
                variant: "body-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, n.jsx)(eD.D, {
                className: t2.DT,
                onClick: i,
                "aria-label": a ?? B.intl.string(B.t.N86XcP),
                children: (0, n.jsx)(tO.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var t6 = l(401756);
let t5 = { all: $.default.lscwjQ, auto: $.default.xrOIkz, manual: $.default.D7HSLJ };
function t4() {
    let e = (0, th.P)((e) => e.dateFilter),
        t = i.useRef(null),
        l = null != e ? tY(e) : B.intl.string($.default.upqksT);
    return (0, n.jsx)(tI.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(tX, { closePopout: t });
        },
        children: (e) =>
            (0, n.jsx)(eU.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: tS.ChevronSmallDownIcon,
                iconPosition: "end",
            }),
    });
}
function t8() {
    let e = (0, th.P)((e) => e.sortOrder),
        t = (0, th.P)((e) => e.setSortOrder),
        l = i.useRef(null),
        a = e === ei.mu.OLDEST ? B.intl.string(B.t["0gitSE"]) : B.intl.string(B.t["4LLKx3"]);
    return (0, n.jsx)(tI.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: i } = l;
            return (0, n.jsx)(tw.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": B.intl.string(B.t.XvNMNk),
                onClose: i,
                onSelect: void 0,
                children: (0, n.jsxs)(tP.rX, {
                    children: [
                        (0, n.jsx)(tP.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: B.intl.string(B.t["4LLKx3"]),
                            action: () => {
                                (t(ei.mu.MOST_RECENT), i());
                            },
                            checked: e === ei.mu.MOST_RECENT,
                        }),
                        (0, n.jsx)(tP.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: B.intl.string(B.t["0gitSE"]),
                            action: () => {
                                (t(ei.mu.OLDEST), i());
                            },
                            checked: e === ei.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, n.jsx)(eU.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: a,
                icon: tL.ArrowsUpDownIcon,
            }),
    });
}
function t7() {
    let e = (0, th.P)((e) => e.clipMethodFilter),
        t = (0, th.P)((e) => e.setClipMethodFilter),
        l = i.useRef(null);
    return (0, n.jsx)(tI.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: i } = l;
            return (0, n.jsx)(tw.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": B.intl.string($.default["kIqbb/"]),
                onClose: i,
                onSelect: void 0,
                children: (0, n.jsxs)(tP.rX, {
                    children: [
                        (0, n.jsx)(tP.iD, {
                            id: "method-all",
                            group: "method",
                            label: B.intl.string($.default.lscwjQ),
                            action: () => {
                                (t("all"), i());
                            },
                            checked: "all" === e,
                        }),
                        (0, n.jsx)(tP.iD, {
                            id: "method-auto",
                            group: "method",
                            label: B.intl.string($.default.xrOIkz),
                            action: () => {
                                (t("auto"), i());
                            },
                            checked: "auto" === e,
                        }),
                        (0, n.jsx)(tP.iD, {
                            id: "method-manual",
                            group: "method",
                            label: B.intl.string($.default.D7HSLJ),
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
            (0, n.jsx)(eU.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: B.intl.string($.default["kIqbb/"]),
                icon: tS.ChevronSmallDownIcon,
                iconPosition: "end",
            }),
    });
}
function le(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: a } = e,
        s = (0, th.P)((e) => e.query),
        r = (0, th.P)((e) => e.setQuery),
        o = (0, th.P)((e) => e.pendingSearchFocus),
        c = (0, th.P)((e) => e.setPendingSearchFocus),
        d = i.useRef(null),
        u = (0, th.P)((e) => e.activeMainLink),
        m = (0, th.P)((e) => e.clipMethodFilter),
        h = (0, th.P)((e) => e.setClipMethodFilter),
        f = (0, th.P)((e) => e.gameFacet),
        x = (0, th.P)((e) => e.clippedWithFacet),
        g = (0, th.P)((e) => e.selectedGameIds),
        p = (0, th.P)((e) => e.selectedUserIds),
        j = (0, th.P)((e) => e.selectedGuildId),
        y = (0, th.P)((e) => e.selectedActivity),
        v = (0, th.P)((e) => e.dateFilter),
        b = (0, th.P)((e) => e.toggleGameId),
        C = (0, th.P)((e) => e.toggleUserId),
        N = (0, th.P)((e) => e.setSelectedGuildId),
        A = (0, th.P)((e) => e.setSelectedActivity),
        k = (0, th.P)((e) => e.setDateFilter),
        E = (0, th.P)((e) => e.clearFilters);
    i.useEffect(() => {
        o && (d.current?.focus(), c(!1));
    }, [o, c]);
    let P = i.useRef(null);
    i.useEffect(() => {
        let e = {
            type_filter: "all" !== m ? m : "",
            game_filter_application_ids: null != f ? [f] : Array.from(g),
            date_filter_range: null != v ? v.preset.replace(/-/g, "_") : "",
            filtered_by_server: null != j,
            filtered_by_participants: null != x || p.size > 0,
            filtered_by_favorites: u === ei.oH.FAVORITES,
            filtered_by_activity: null != y,
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
        t !== P.current && ((P.current = t), eq.default.track(eN.HAw.CLIPS_FILTER_CHANGED, e));
    }, [m, f, g, v, j, x, p, u, y]);
    let L = i.useMemo(() => l.map((e) => e.key), [l]),
        M = (0, I.A)(L),
        D = i.useMemo(() => new Map(M.map((e) => [e?.id, e])), [M]),
        _ = i.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, n.jsx)(S.A, { game: D.get(e.key), size: S.M.XSMALL }),
                })),
            [l, D],
        ),
        T = i.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = tT.A.getGuild(e);
                        null != t && l.push({ key: e, label: t.name, guild: t });
                    }
                    return (l.sort((e, t) => e.label.toLowerCase().localeCompare(t.label.toLowerCase())), l);
                })(t),
            [t],
        ),
        R = i.useMemo(
            () =>
                T.map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, n.jsx)(t_.Ay, { guild: e.guild, size: t_.Ay.Sizes.MINI }),
                })),
            [T],
        ),
        U = i.useMemo(() => new Map(T.map((e) => [e.key, e.guild])), [T]),
        H = i.useMemo(
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
        O = i.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    for (let l of e) {
                        let e = w.default.getUser(l.key);
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
                    icon: (0, n.jsx)(tM.eu, { src: e.avatarUrl, size: eR._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [a],
        ),
        z = i.useMemo(() => (null != j ? new Set([j]) : new Set()), [j]),
        F = i.useMemo(() => (null != y ? new Set([y]) : new Set()), [y]),
        G = i.useCallback(
            (e) => {
                N(j === e ? null : e);
            },
            [j, N],
        ),
        K = i.useCallback(
            (e) => {
                A(y === e ? null : e);
            },
            [y, A],
        ),
        V = null == f,
        $ = null == x,
        q = (0, tR.H)() && u !== ei.oH.AUTO_CLIPS,
        Y = B.intl.string(t5[m]),
        Q = (0, n.jsxs)(n.Fragment, {
            children: [
                V &&
                    Array.from(g).map((e) => {
                        let t = _.find((t) => t.key === e);
                        return (0, n.jsx)(
                            t9,
                            {
                                label: t?.label ?? e,
                                icon: (0, n.jsx)(S.A, { game: D.get(e), size: S.M.XSMALL }),
                                onRemove: () => b(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != v && (0, n.jsx)(t9, { label: tY(v), onRemove: () => k(null) }, "date"),
                null != j &&
                    (0, n.jsx)(
                        t9,
                        {
                            label: R.find((e) => e.key === j)?.label ?? j,
                            icon:
                                null != U.get(j)
                                    ? (0, n.jsx)(t_.Ay, { guild: U.get(j), size: t_.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => N(null),
                        },
                        "guild",
                    ),
                $ && Array.from(p).map((e) => (0, n.jsx)(lt, { userId: e, onRemove: () => C(e) }, `user-${e}`)),
                null != y && (0, n.jsx)(t9, { label: y, onRemove: () => A(null) }, "activity"),
                q && "all" !== m && (0, n.jsx)(t9, { label: Y, onRemove: () => h("all") }, "method"),
            ],
        }),
        X = (V && g.size > 0) || null != v || null != j || ($ && p.size > 0) || null != y || (q && "all" !== m);
    return (0, n.jsxs)("div", {
        className: t6.kT,
        children: [
            (0, n.jsxs)("div", {
                className: t6.HL,
                children: [
                    (0, n.jsx)("div", {
                        className: t6.MT,
                        children: (0, n.jsx)(tD.I, {
                            ref: d,
                            placeholder: B.intl.string(B.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: t6.Zq,
                        children: [
                            q && (0, n.jsx)(t7, {}),
                            V &&
                                _.length > 0 &&
                                (0, n.jsx)(t3, {
                                    triggerLabel: B.intl.string(B.t.URyqtP),
                                    options: _,
                                    selectedKeys: g,
                                    onToggle: b,
                                    multiSelect: !0,
                                    searchPlaceholder: B.intl.string(B.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(t4, {}),
                            R.length > 0 &&
                                (0, n.jsx)(t3, {
                                    triggerLabel: B.intl.string(B.t["5qyruI"]),
                                    options: R,
                                    selectedKeys: z,
                                    onToggle: G,
                                    multiSelect: !1,
                                    searchPlaceholder: B.intl.string(B.t["5h0QOP"]),
                                }),
                            $ &&
                                O.length > 0 &&
                                (0, n.jsx)(t3, {
                                    triggerLabel: B.intl.string(B.t.YQ6dJg),
                                    options: O,
                                    selectedKeys: p,
                                    onToggle: (e) => C(e),
                                    multiSelect: !0,
                                    searchPlaceholder: B.intl.string(B.t["5h0QOP"]),
                                }),
                            H.length > 0 &&
                                (0, n.jsx)(t3, {
                                    triggerLabel: B.intl.string(B.t.agRtPG),
                                    options: H,
                                    selectedKeys: F,
                                    onToggle: K,
                                    multiSelect: !1,
                                    searchPlaceholder: B.intl.string(B.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(t8, {}),
                        ],
                    }),
                ],
            }),
            X &&
                (0, n.jsxs)("div", {
                    className: t6.eH,
                    children: [
                        Q,
                        (0, n.jsx)(ex.Q, {
                            size: "sm",
                            variant: "primary",
                            text: B.intl.string(B.t.O8k7O4),
                            onClick: E,
                        }),
                    ],
                }),
        ],
    });
}
function lt(e) {
    let { userId: t, onRemove: l } = e,
        i = (0, c.bG)([w.default], () => w.default.getUser(t), [t]);
    if (null == i) return null;
    let a = i.globalName ?? i.username;
    return (0, n.jsx)(t9, {
        label: a,
        icon: (0, n.jsx)(tM.eu, { src: i.getAvatarURL(null, 32), size: eR._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
var ll = l(315629),
    ln = l(516521),
    li = l(975571);
function la(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var ls = l(195715);
function lr(e) {
    let { clips: t, onEdit: l, onEdgeNavigate: a, showEducationCopy: s = !1 } = e,
        r = i.useMemo(() => la(t), [t]),
        o = (0, th.P)((e) => e.setActiveMainLink),
        c = (0, eo.GV)(),
        d = i.useMemo(() => [r.length], [r.length]),
        { getContainerProps: u, getItemProps: m, getRowProps: p } = (0, ea.A)({ navId: c, columnCounts: d }),
        { onFocus: j, onKeyDown: y, ...v } = u(),
        b = i.useCallback(
            (e) => {
                if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
                    (e.preventDefault(),
                        e.stopPropagation(),
                        a?.("ArrowUp" === e.key ? "up" : "down", e.currentTarget));
                    return;
                }
                y(e);
            },
            [y, a],
        ),
        C = { ...v, onKeyDown: b };
    return 0 === r.length
        ? null
        : (0, n.jsxs)("section", {
              className: ls.uW,
              "aria-label": B.intl.string(s ? $.default.U5V4YO : $.default.efLpNC),
              children: [
                  (0, n.jsxs)("div", {
                      className: ls.wx,
                      children: [
                          s
                              ? (0, n.jsxs)("div", {
                                    className: ls.eS,
                                    children: [
                                        (0, n.jsx)(h.D, {
                                            variant: "nitro-sm",
                                            color: "text-default",
                                            children: B.intl.string($.default.U5V4YO),
                                        }),
                                        (0, n.jsx)(g.E, {
                                            variant: "body-md/normal",
                                            color: "text-muted",
                                            children: B.intl.format($.default.i1g0Xm, {
                                                helpArticleUrl: li.A.getArticleURL(eN.MVz.CLIPS),
                                            }),
                                        }),
                                    ],
                                })
                              : (0, n.jsxs)("div", {
                                    className: ls.mX,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: ls.UP,
                                            children: [
                                                (0, n.jsx)(h.D, {
                                                    variant: "heading-lg/medium",
                                                    color: "text-default",
                                                    children: B.intl.string($.default.I1h8uD),
                                                }),
                                                (0, n.jsx)(f.E, {
                                                    type: "early_access",
                                                    variant: "primary",
                                                    icon: x.NitroWheelIcon,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)(h.D, {
                                            variant: "display-md",
                                            color: "text-default",
                                            className: ls.DD,
                                            children: B.intl.string($.default.efLpNC),
                                        }),
                                    ],
                                }),
                          (0, n.jsx)("div", {
                              className: ls.BX,
                              children: (0, n.jsx)(eU.$, {
                                  variant: "overlay-primary",
                                  size: "sm",
                                  onClick: () => o(ei.oH.AUTO_CLIPS),
                                  text: B.intl.string($.default.gCay1w),
                              }),
                          }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: ls.Vg,
                      "aria-label": B.intl.string($.default.efLpNC),
                      ...C,
                      tabIndex: -1,
                      children: (0, n.jsx)("div", {
                          className: ls.nM,
                          ...p(0),
                          children: r.map((e, t) =>
                              (0, n.jsx)(
                                  "div",
                                  {
                                      className: ls.v2,
                                      children: (0, n.jsx)(ta, {
                                          clip: e,
                                          actionsDisabled: !1,
                                          isNew: !1,
                                          onEdit: l,
                                          onClick: l,
                                          gridItemProps: m(t, 0),
                                      }),
                                  },
                                  e.id,
                              ),
                          ),
                      }),
                  }),
              ],
          });
}
var lo = l(65154),
    lc = l(713608),
    ld = l(331322),
    lu = l(783977),
    lm = l(865278),
    lh = l(148289);
function lf() {
    window.open(li.A.getArticleURL(eN.MVz.CLIPS), "_blank", "noopener,noreferrer");
}
function lx() {
    (0, ej.openUserSettings)(ep.X.CLIPS_PANEL);
}
function lg(e) {
    let { className: t } = e;
    return (0, n.jsxs)("div", {
        className: s()(lm.GX, t),
        children: [
            (0, n.jsx)("div", {
                className: lm.f1,
                "aria-hidden": !0,
                children: (0, n.jsx)("img", { className: lm.IG, src: lh.A, alt: "" }),
            }),
            (0, n.jsx)("div", {
                className: lm.UX,
                children: (0, n.jsxs)("div", {
                    className: lm.wE,
                    children: [
                        (0, n.jsx)(lo.CirclePlayIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                        (0, n.jsx)(ex.Q, {
                            variant: "always-white",
                            textVariant: "body-sm/medium",
                            text: B.intl.string($.default["2axqmn"]),
                            onClick: lf,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function lp(e) {
    let { tags: t, className: l } = e;
    return (0, n.jsxs)("div", {
        className: s()(lm.Ny, l),
        "aria-hidden": !0,
        children: [
            (0, n.jsx)("div", {
                className: lm.mB,
                children: (0, n.jsx)(H.ClipsAutoIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
            }),
            (0, n.jsxs)("div", {
                className: lm.UX,
                children: [
                    (0, n.jsxs)("div", {
                        className: lm.US,
                        children: [
                            (0, n.jsx)("div", { className: s()(lm.qV, lm.AL) }),
                            (0, n.jsx)("div", { className: s()(lm.qV, lm.SA) }),
                            (0, n.jsx)("div", { className: s()(lm.qV, lm.pq) }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: lm.U2,
                        children: [
                            t.map((e) => {
                                let { icon: t, label: l } = e;
                                return (0, n.jsxs)(
                                    "div",
                                    {
                                        className: lm.fP,
                                        children: [
                                            (0, n.jsx)(t, { size: "xxs", color: "currentColor" }),
                                            (0, n.jsx)(g.E, {
                                                variant: "body-xs/medium",
                                                color: "text-overlay-light",
                                                children: B.intl.string(l),
                                            }),
                                        ],
                                    },
                                    B.intl.string(l),
                                );
                            }),
                            (0, n.jsxs)("div", {
                                className: lm.Gc,
                                children: [
                                    (0, n.jsx)("div", { className: lm.my }),
                                    (0, n.jsx)("div", { className: lm.my }),
                                    (0, n.jsx)("div", { className: lm.my }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let lj = [
        { icon: e9.ReactionIcon, label: $.default["3gqpuo"] },
        { icon: lc.ModerationIcon, label: B.t.ky6syM },
    ],
    ly = [
        { icon: e9.ReactionIcon, label: $.default.bTC23D },
        { icon: lc.ModerationIcon, label: B.t.JMxzCr },
    ];
function lv(e) {
    let { icon: t, title: l, body: i } = e;
    return (0, n.jsxs)("div", {
        className: lm.Lw,
        children: [
            (0, n.jsx)(t, { size: "custom", width: 20, height: 20, color: "currentColor", "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: lm.ET,
                children: [
                    (0, n.jsx)(g.E, { variant: "body-md/medium", color: "text-default", children: B.intl.string(l) }),
                    (0, n.jsx)(g.E, { variant: "body-sm/normal", color: "text-muted", children: i }),
                ],
            }),
        ],
    });
}
function lb() {
    let e = (0, eb.E)(),
        { onChange: t } = (0, G.U)(),
        l = i.useCallback(() => t("manual"), [t]);
    return (0, n.jsxs)("section", {
        className: lm.uW,
        "aria-label": B.intl.string($.default.Pottsi),
        children: [
            (0, n.jsxs)("div", {
                className: lm.jg,
                children: [
                    (0, n.jsxs)("div", {
                        className: lm.dw,
                        children: [
                            (0, n.jsxs)("div", {
                                className: lm.EQ,
                                "aria-hidden": !0,
                                children: [
                                    (0, n.jsx)(lp, { className: s()(lm.Qx, lm.On), tags: [] }),
                                    (0, n.jsx)(lp, { className: s()(lm.Qx, lm.D_), tags: lj }),
                                    (0, n.jsx)(lp, { className: s()(lm.Qx, lm.eu), tags: ly }),
                                    (0, n.jsx)(lp, { className: s()(lm.Qx, lm.z2), tags: lj }),
                                ],
                            }),
                            (0, n.jsx)(lg, { className: lm.RV }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: lm.oY,
                        children: [
                            (0, n.jsxs)("div", {
                                className: lm.C,
                                children: [
                                    (0, n.jsx)(h.D, {
                                        variant: "nitro-md",
                                        color: "text-default",
                                        children: B.intl.string($.default.Pottsi),
                                    }),
                                    (0, n.jsx)(g.E, {
                                        variant: "body-md/normal",
                                        color: "text-subtle",
                                        children: B.intl.string($.default["3RPyLm"]),
                                    }),
                                ],
                            }),
                            (0, n.jsxs)(ld.B, {
                                direction: "horizontal",
                                gap: 12,
                                justify: "center",
                                children: [
                                    (0, n.jsx)(eU.$, {
                                        variant: "secondary",
                                        icon: eg.ArrowAngleRightUpIcon,
                                        iconPosition: "end",
                                        text: B.intl.string(B.t.hvVgAZ),
                                        onClick: lf,
                                    }),
                                    e
                                        ? (0, n.jsx)(eU.$, {
                                              variant: "primary",
                                              icon: lo.CirclePlayIcon,
                                              text: B.intl.string($.default.caOprb),
                                              onClick: lf,
                                          })
                                        : (0, n.jsx)(eU.$, {
                                              variant: "primary",
                                              text: B.intl.string(B.t.h8rgrK),
                                              onClick: l,
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: lm.Mh,
                children: [
                    (0, n.jsx)(lv, {
                        icon: H.ClipsAutoIcon,
                        title: $.default["0+BIHX"],
                        body: B.intl.string($.default["tCTA+W"]),
                    }),
                    (0, n.jsx)(lv, {
                        icon: em.GameControllerIcon,
                        title: $.default["x/w6AN"],
                        body: B.intl.string($.default.D4abD6),
                    }),
                    (0, n.jsx)(lv, {
                        icon: lu.FiltersHorizontalIcon,
                        title: $.default.EA8ENs,
                        body: B.intl.format($.default.PvfGzE, { onClipsSettingsClick: lx }),
                    }),
                ],
            }),
        ],
    });
}
function lC() {
    return (0, n.jsxs)("section", {
        className: lm.ZK,
        "aria-label": B.intl.string($.default["33gqTk"]),
        children: [
            (0, n.jsxs)("div", {
                className: lm.C,
                children: [
                    (0, n.jsx)(h.D, {
                        variant: "nitro-md",
                        color: "text-default",
                        children: B.intl.string($.default["33gqTk"]),
                    }),
                    (0, n.jsx)(g.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        children: B.intl.format($.default.aTozcJ, { helpArticleUrl: li.A.getArticleURL(eN.MVz.CLIPS) }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: lm.LF,
                children: [(0, n.jsx)(lg, {}), (0, n.jsx)(lp, { tags: lj }), (0, n.jsx)(lp, { tags: ly })],
            }),
        ],
    });
}
var lN = l(770178),
    lA = l(202163),
    lk = l(68408);
function lE(e) {
    let {
            session: t,
            recentClipIds: l,
            actionsDisabled: a,
            onEdit: r,
            onClipClick: o,
            animateEntrance: d,
            entranceRowOffset: u,
            onEdgeNavigate: m,
        } = e,
        { gameRecord: f } = (0, lA.Ay)(t.applicationId),
        { onShareSession: x } = i.useContext(tl.$),
        p = i.useCallback(() => {
            x?.(t.clips);
        }, [x, t.clips]),
        j = (0, th.P)((e) => e.setGameFacet),
        y = (0, th.P)((e) => e.setActiveMainLink),
        v = t.applicationId,
        b = null != v && "" !== v,
        N = i.useCallback(() => {
            null != v && "" !== v && (j(v), y(ei.oH.ALL_CLIPS));
        }, [v, j, y]),
        A = i.useCallback(() => {
            b ? N() : y(ei.oH.ALL_CLIPS);
        }, [b, N, y]),
        k = i.useMemo(() => (null == f ? null : (f.getBannerURL(1024) ?? f.screenshotUrls?.[0] ?? null)), [f]),
        E = (0, c.yK)([w.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => w.default.getUser(e)).filter(eY.Vq);
        }),
        I = i.useMemo(() => t.clips.filter((e) => "auto" === e.clipMethod).length, [t.clips]),
        P = e$({ timestamp: t.startedAt }),
        [L, M] = i.useState(800),
        D = (0, C.A)((e) => {
            M(e.target.clientWidth);
        }),
        _ = (0, lN.w)(D),
        T = Math.max(1, (L - 40) / 3),
        R = i.useMemo(() => {
            let e = t.clips.slice(0, 6),
                l = [];
            for (let t = 0; t < e.length; t += 3) l.push(e.slice(t, t + 3));
            return l;
        }, [t.clips]),
        U = t.clips.length > 6,
        H = (0, eo.GV)(),
        O = i.useMemo(() => R.map((e) => e.length), [R]),
        { getContainerProps: z, getItemProps: F, getRowProps: G } = (0, ea.A)({ navId: H, columnCounts: O }),
        { onFocus: K, onKeyDown: V, ...q } = z(),
        Y = i.useCallback(
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
                V(e);
            },
            [V, m],
        );
    return (0, n.jsxs)("section", {
        className: lk.dZ,
        children: [
            (0, n.jsx)("div", {
                className: s()(lk.tB, null == k && lk.rD),
                style: null != k ? { backgroundImage: `url(${k})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, n.jsxs)("div", {
                className: lk.wx,
                children: [
                    b
                        ? (0, n.jsx)(eM.s, {
                              "aria-label": t.applicationName,
                              onClick: N,
                              className: lk.Zn,
                              children: (0, n.jsx)(S.A, {
                                  className: lk.Gt,
                                  game: f,
                                  size: S.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, n.jsx)(S.A, { className: lk.Gt, game: f, size: S.M.MEDIUM, "aria-hidden": !0 }),
                    (0, n.jsxs)("div", {
                        className: lk.TK,
                        children: [
                            b
                                ? (0, n.jsx)(eM.s, {
                                      "aria-label": t.applicationName,
                                      onClick: N,
                                      className: lk.wb,
                                      children: (0, n.jsx)(h.D, {
                                          variant: "body-md/medium",
                                          color: "text-default",
                                          className: lk.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, n.jsx)(h.D, {
                                      variant: "body-md/medium",
                                      color: "text-default",
                                      className: lk.mO,
                                      children: t.applicationName,
                                  }),
                            (0, n.jsxs)("div", {
                                className: lk.mI,
                                children: [
                                    (0, n.jsx)(g.E, {
                                        variant: "body-xs/normal",
                                        color: "text-muted",
                                        children: B.intl.format($.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    I > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: lk.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(g.E, {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    children: B.intl.format($.default.eRrt7X, { count: I }),
                                                }),
                                            ],
                                        }),
                                    (0, n.jsx)("span", { className: lk.TG, "aria-hidden": "true" }),
                                    (0, n.jsx)(g.E, { variant: "body-xs/normal", color: "text-muted", children: P }),
                                    E.length > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: lk.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(eL.A, { users: E, maxUsers: 5, size: eR._3.SIZE_16 }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    t.clips.length > 0 &&
                        null != x &&
                        (0, n.jsx)("div", {
                            className: lk.$s,
                            children: (0, n.jsx)(eU.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: tj.ShareIcon,
                                text: B.intl.string($.default.l34lLs),
                                onClick: p,
                            }),
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                ref: _,
                className: lk.Vg,
                ...q,
                tabIndex: -1,
                onKeyDown: Y,
                children: R.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: lk.UX,
                            ...G(t),
                            children: e.map((e, i) => {
                                let s = { width: T };
                                return (
                                    d && (s["--custom-entrance-delay"] = `${tf(u + t + i)}ms`),
                                    (0, n.jsx)(
                                        "div",
                                        {
                                            className: d ? tg.$ : void 0,
                                            style: s,
                                            children: (0, n.jsx)(ta, {
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
            U &&
                (0, n.jsx)("div", {
                    className: lk.Vc,
                    children: (0, n.jsx)(eU.$, {
                        variant: "secondary",
                        size: "sm",
                        text: B.intl.string($.default.pqk9U0),
                        onClick: A,
                    }),
                }),
        ],
    });
}
var lI = l(885574),
    lS = l(253932),
    lw = l(734066),
    lP = l(947568);
function lL() {
    (0, ej.openUserSettings)(ep.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING);
}
function lM() {
    let {
        visible: e,
        handleAllow: t,
        handleDontAllow: l,
    } = (function () {
        let e = (0, c.bG)([w.default], () => (0, lw.qj)(w.default.getCurrentUser())),
            t = lS.Q$.useSetting(),
            l = e && !1 === t && (0, M.o)("ClipsLibraryVoiceBanner"),
            [n, a] = (0, z.kn)(l ? [_.M.AUTOCLIPPING_EARLY_ACCESS_LIBRARY_VOICE_BANNER] : []);
        return {
            visible: null != n,
            handleAllow: i.useCallback(() => {
                (a(V.i.TAKE_ACTION), (0, D.eQ)({ allowVoiceRecording: !0 }));
            }, [a]),
            handleDontAllow: i.useCallback(() => {
                a(V.i.USER_DISMISS);
            }, [a]),
        };
    })();
    return e
        ? (0, n.jsxs)("div", {
              className: lP.v,
              children: [
                  (0, n.jsx)(lI.CircleInformationIcon, {
                      size: "xs",
                      color: eh.A.colors.ICON_FEEDBACK_INFO,
                      "aria-hidden": !0,
                  }),
                  (0, n.jsx)(g.E, {
                      variant: "body-sm/normal",
                      color: "text-strong",
                      className: lP.i,
                      children: B.intl.format($.default.m7PBif, { onDataPrivacyClick: lL }),
                  }),
                  (0, n.jsxs)(ld.B, {
                      direction: "horizontal",
                      gap: 8,
                      fullWidth: !1,
                      children: [
                          (0, n.jsx)(eU.$, {
                              variant: "secondary",
                              size: "sm",
                              text: B.intl.string($.default.beB8BG),
                              onClick: l,
                          }),
                          (0, n.jsx)(eU.$, {
                              variant: "primary",
                              size: "sm",
                              text: B.intl.string($.default["Bk5IR+"]),
                              onClick: t,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var lD = l(799888);
let l_ = { no_clips: 604, no_auto_clips: 400 };
function lT(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: a, onClipClick: s, isLoading: r, onScroll: o } = e,
        d = (0, tR.H)(),
        u = i.useMemo(() => la(t), [t]),
        m = d && u.length > 0,
        f = (0, c.yK)([L.Ay], () => L.Ay.getNewClipIds()),
        x = (0, c.bG)([L.Ay], () => L.Ay.getExportingClipIds().size > 0),
        g = (0, th.P)((e) => e.setActiveMainLink),
        p = i.useCallback(() => {
            g(ei.oH.ALL_CLIPS);
        }, [g]),
        j = i.useMemo(() => {
            let e = m ? new Set(u.map((e) => e.id)) : null;
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
        }, [t, m, u]),
        y = (0, c.bG)([N.Ay], () => N.Ay.useReducedMotion),
        v = i.useMemo(() => {
            let e = [],
                t = 0;
            for (let l of j) (e.push(t), (t += Math.min(2, Math.ceil(l.clips.length / 3))));
            return e;
        }, [j]),
        b = i.useRef(null),
        C = i.useCallback((e, t) => {
            let l = b.current;
            if (null == l) return;
            let n = Array.from(l.querySelectorAll('[role="grid"]')),
                i = n.indexOf(t);
            if (-1 === i) return;
            let a = n["down" === e ? i + 1 : i - 1];
            if (null == a) return;
            let s = Array.from(a.querySelectorAll('[role="button"]')).filter((e) => /-\d+-\d+$/.test(e.id)),
                r = "down" === e ? s[0] : s[s.length - 1];
            r?.focus();
        }, []),
        A = i.useRef(null),
        k = i.useCallback(
            (e) => {
                let { scrollTop: t } = e.currentTarget;
                (A.current?.style.setProperty("--custom-clips-home-scroll-top", `${t}px`), o?.(t));
            },
            [o],
        ),
        E = j.length > 0 || m,
        I = (function (e) {
            let { hasContent: t, isLoading: l, totalClipCount: n, showCarousel: i } = e;
            return t ? (i ? "auto_clips" : "no_auto_clips") : l || n > 0 ? null : "no_clips";
        })({ hasContent: E, isLoading: r, totalClipCount: l, showCarousel: m }),
        S = (0, M.H)("ClipsGalleryHome") ? I : null,
        w = null != S ? l_[S] : void 0,
        P =
            null != w
                ? (0, n.jsx)(ll.h, {
                      ref: A,
                      color: "nitro-pink",
                      className: lD.zP,
                      style: { "--custom-clips-home-gradient-height": `${w}px` },
                      "aria-hidden": !0,
                  })
                : null;
    return E
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  P,
                  (0, n.jsx)(ln.Ch, {
                      className: lD.iR,
                      fade: !0,
                      onScroll: k,
                      children: (0, n.jsxs)("div", {
                          className: lD.Qs,
                          ref: b,
                          children: [
                              m &&
                                  (0, n.jsx)("div", {
                                      className: lD.Dk,
                                      children: (0, n.jsx)(lr, {
                                          clips: t,
                                          onEdit: a,
                                          onEdgeNavigate: C,
                                          showEducationCopy: "auto_clips" === S,
                                      }),
                                  }),
                              "no_auto_clips" === S &&
                                  (0, n.jsx)("div", { className: lD.Dk, children: (0, n.jsx)(lC, {}) }),
                              (0, n.jsx)(lM, {}),
                              j.length > 0 &&
                                  (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(h.D, {
                                              variant: "heading-lg/medium",
                                              color: "text-default",
                                              children: B.intl.string($.default.zfTWDE),
                                          }),
                                          j.map((e, t) =>
                                              (0, n.jsx)(
                                                  lE,
                                                  {
                                                      session: e,
                                                      recentClipIds: f,
                                                      actionsDisabled: x,
                                                      onEdit: a,
                                                      onClipClick: s,
                                                      animateEntrance: !y,
                                                      entranceRowOffset: v[t] ?? 0,
                                                      onEdgeNavigate: C,
                                                  },
                                                  e.id,
                                              ),
                                          ),
                                          (0, n.jsx)("div", {
                                              className: lD.dp,
                                              children: (0, n.jsx)(eU.$, {
                                                  variant: "primary",
                                                  text: B.intl.string($.default.RQtkop),
                                                  onClick: p,
                                              }),
                                          }),
                                      ],
                                  }),
                          ],
                      }),
                  }),
              ],
          })
        : r
          ? (0, n.jsx)("div", { className: lD.dc, children: (0, n.jsx)(es.y, {}) })
          : "no_clips" === S
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      P,
                      (0, n.jsx)(ln.Ch, {
                          className: lD.iR,
                          fade: !0,
                          onScroll: k,
                          children: (0, n.jsx)("div", {
                              className: lD.Qs,
                              children: (0, n.jsx)("div", { className: lD.Dk, children: (0, n.jsx)(lb, {}) }),
                          }),
                      }),
                  ],
              })
            : (0, n.jsx)(eI, { isEmptyBecauseQuery: l > 0 });
}
var lR = l(837381),
    lU = l(741918),
    lH = l(812993),
    lO = l(332837),
    lz = l(95362),
    lF = l(625903),
    lG = l(260762),
    lK = l(599428);
function lV(e) {
    let { itemId: t, icon: l, label: i, onClick: a, isSelected: r = !1, isDisabled: o = !1, badgeCount: c = 0 } = e,
        d = o && !r,
        u = (0, lR.rm)(t);
    return (0, n.jsx)(p.m, {
        text: i,
        position: "right",
        children: (0, n.jsxs)(eD.D, {
            ...u,
            role: "button",
            onClick: d ? void 0 : a,
            "aria-pressed": r,
            "aria-disabled": d,
            "aria-label": i,
            className: s()(lK.AY, { [lK.Hy]: r, [lK.Is]: d }),
            children: [l, c > 0 && (0, n.jsx)("span", { className: lK.e, children: (0, n.jsx)(lH.hV, { count: c }) })],
        }),
    });
}
function l$(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: a } = e,
        r = (0, th.P)((e) => e.activeMainLink),
        o = (0, th.P)((e) => e.gameFacet),
        c = (0, th.P)((e) => e.clippedWithFacet),
        d = (0, th.P)((e) => e.setActiveMainLink),
        u = (0, th.P)((e) => e.setGameFacet),
        m = (0, th.P)((e) => e.setClippedWithFacet),
        h = (0, th.P)((e) => e.clearFilters),
        f = (0, th.P)((e) => e.setPendingContentFocus),
        x = (0, tR.H)(),
        g = null != o || null != c;
    function p(e) {
        return !g && r === e;
    }
    let j = i.useRef(!1),
        y = i.useCallback(() => {
            j.current && f(!0);
        }, [f]),
        v = i.useCallback(
            (e) => {
                (d(e), u(null), m(null), h(), y());
            },
            [d, u, m, h, y],
        ),
        b = i.useCallback(
            (e) => {
                (u(o === e ? null : e), m(null), d(ei.oH.ALL_CLIPS), h(), y());
            },
            [o, u, m, d, h, y],
        ),
        C = i.useCallback(() => {
            (0, ej.openUserSettings)(ep.X.CLIPS_PANEL);
        }, []),
        N = i.useMemo(() => t.map((e) => e.key), [t]),
        A = (0, I.A)(N),
        k = i.useMemo(() => new Map(A.map((e) => [e?.id, e])), [A]),
        E = (0, eo.GV)(),
        w = (0, lG.A)(E),
        { setFocus: P } = w,
        L = o ?? r;
    i.useEffect(() => {
        P(L);
    }, [P, L]);
    let { ref: M, onKeyDown: D, ..._ } = (0, lR.LT)(w),
        T = i.useCallback(
            (e) => {
                j.current = e.key === lU.D$.ENTER || e.key === lU.D$.SPACE;
                try {
                    D(e);
                } finally {
                    j.current = !1;
                }
            },
            [D],
        );
    return (0, n.jsx)(lR.hD, {
        navigator: w,
        children: (0, n.jsxs)("div", {
            className: lK.H$,
            ..._,
            tabIndex: -1,
            onKeyDown: T,
            ref: M,
            children: [
                (0, n.jsxs)("div", {
                    className: s()(lK.o3, lK.A9),
                    children: [
                        (0, n.jsx)(lV, {
                            itemId: ei.oH.HOME,
                            icon: (0, n.jsx)(lO.HomeIcon, { size: "sm", color: "currentColor" }),
                            label: B.intl.string($.default.iVqj8B),
                            isSelected: p(ei.oH.HOME),
                            onClick: () => v(ei.oH.HOME),
                        }),
                        (0, n.jsx)(lV, {
                            itemId: ei.oH.ALL_CLIPS,
                            icon: (0, n.jsx)(U.ClipsIcon, { size: "sm", color: "currentColor" }),
                            label: B.intl.string(B.t.dPVrEv),
                            isSelected: p(ei.oH.ALL_CLIPS),
                            isDisabled: 0 === l.allClips,
                            badgeCount: a.allClips,
                            onClick: () => v(ei.oH.ALL_CLIPS),
                        }),
                        x &&
                            (0, n.jsx)(lV, {
                                itemId: ei.oH.AUTO_CLIPS,
                                icon: (0, n.jsx)(H.ClipsAutoIcon, { size: "sm", color: "currentColor" }),
                                label: B.intl.string($.default.ikNKf1),
                                isSelected: p(ei.oH.AUTO_CLIPS),
                                isDisabled: 0 === l.autoClips,
                                badgeCount: a.autoClips,
                                onClick: () => v(ei.oH.AUTO_CLIPS),
                            }),
                        (0, n.jsx)(lV, {
                            itemId: ei.oH.FAVORITES,
                            icon: (0, n.jsx)(tv.StarIcon, { size: "sm", color: "currentColor" }),
                            label: B.intl.string(B.t["9rlCk1"]),
                            isSelected: p(ei.oH.FAVORITES),
                            onClick: () => v(ei.oH.FAVORITES),
                        }),
                    ],
                }),
                t.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { className: lK.Gz }),
                            (0, n.jsx)(lz.Ip, {
                                className: s()(lK.UZ, lK.A9),
                                fade: !0,
                                children: t.map((e) => {
                                    let t = o === e.key;
                                    return (0, n.jsx)(
                                        lV,
                                        {
                                            itemId: e.key,
                                            icon: (0, n.jsx)(S.A, {
                                                game: k.get(e.key),
                                                size: S.M.SMALL,
                                                className: lK.az,
                                            }),
                                            label: e.name,
                                            isSelected: t,
                                            isDisabled: e.isDisabled,
                                            badgeCount: e.newCount,
                                            onClick: () => b(e.key),
                                        },
                                        e.key,
                                    );
                                }),
                            }),
                        ],
                    }),
                (0, n.jsx)("div", {
                    className: s()(lK.Ms, lK.A9),
                    children: (0, n.jsx)(lV, {
                        itemId: "settings",
                        icon: (0, n.jsx)(lF.SettingsIcon, { size: "sm", color: "currentColor" }),
                        label: B.intl.string(B.t["3D5yo/"]),
                        onClick: C,
                    }),
                }),
            ],
        }),
    });
}
var lB = l(409067),
    lq = l(314484);
function lY(e) {
    var t, a;
    let _,
        T,
        R,
        {
            channelId: U,
            onClose: H,
            picker: O,
            transitionState: z,
            initialEditingClipId: F,
            initialMainLink: G = ei.oH.HOME,
            ...K
        } = e;
    (0, en.A)();
    let { analyticsLocations: V } = (0, k.Ay)(A.A.CLIPS_GALLERY),
        q = O?.onPick,
        Y = (0, M.H)("ClipsGalleryModal") && null == O,
        Q = O?.allowMultiSelect ?? !0,
        [X, ea] = i.useState(new Set()),
        es = i.useRef(null),
        er = (0, C.A)((e) => {
            let t = es.current;
            if (null == t) return;
            let l = Math.min(1, Math.max(0, e) / 40);
            t.style.setProperty("--custom-clips-header-solid-opacity", `${l}`);
        }),
        {
            gamesFacet: eo,
            participantsFacet: ec,
            filteredClips: ed,
            mainLinkCounts: eu,
            mainLinkNewCounts: em,
            allClips: eh,
        } = (0, lB.ad)(O?.filterClip),
        ef = (0, c.bG)([L.Ay], () => L.Ay.getSettings().storageLocation),
        [ex, eg] = i.useState(!0);
    i.useEffect(() => {
        (async function () {
            eg(!0);
            try {
                await (0, D.Fb)(ef);
            } finally {
                eg(!1);
            }
        })().catch(() => {});
    }, [ef]);
    let { onShareClick: ep } = (0, el.A)(U);
    (i.useEffect(
        () => () => {
            (th.P.getState().resetAll(), (0, D.Su)());
        },
        [],
    ),
        i.useEffect(() => {
            let e = th.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink(G);
        }, [G]),
        (0, o.l0)(D._o));
    let ej = (0, c.bG)([L.Ay], () => L.Ay.getExportingClipIds().size > 0),
        [ey, ev] = i.useState(null != F ? "editing" : "gallery"),
        [eb, eC] = i.useState(F ?? null),
        eN = (0, c.bG)([L.Ay], () => (null != eb ? L.Ay.getClipById(eb) : null), [eb]),
        eA = (0, d.LA)(e5.nm),
        [ek, eE] = i.useState(!1);
    ((t = i.useCallback(() => eE(!0), [])),
        (a = eA && "gallery" === ey && !ek),
        (_ = i.useRef(Array(tE.length).fill(""))),
        (T = i.useRef(0)),
        (R = i.useRef(t)),
        i.useEffect(() => {
            R.current = t;
        }, [t]),
        i.useEffect(() => {
            if (!a) return;
            let e = _.current;
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
                    ((e[T.current] = t.key.toLowerCase()), (T.current = (T.current + 1) % tE.length));
                    for (let t = 0; t < tE.length; t++) if (e[(T.current + t) % tE.length] !== tE[t]) return;
                    R.current();
                }
            }
            return (
                document.addEventListener("keydown", t, { capture: !0, passive: !0 }),
                () => {
                    (document.removeEventListener("keydown", t, { capture: !0 }), e.fill(""), (T.current = 0));
                }
            );
        }, [a]),
        i.useEffect(() => {
            if (ek)
                return (
                    document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0)
                );
            function e(e) {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation());
            }
        }, [ek]));
    let eI = i.useRef(ey);
    ((eI.current = ey), (i.useRef(eb).current = eb));
    let [eS, ew] = i.useState(null != F ? m.ip.ENTERED : m.ip.HIDDEN),
        eP = i.useRef(null),
        eL = (0, th.P)((e) => e.gameFacet),
        eM = (0, th.P)((e) => e.clippedWithFacet),
        eD = (0, th.P)((e) => e.activeMainLink),
        e_ = (0, th.P)((e) => e.currentPage),
        eT = e_ === ei.fB.HOME,
        { ref: eR, height: eU = 64 } = (0, b.Ay)(e_),
        eH = 68 + eU,
        eO = eT ? 68 : eH - 16;
    i.useLayoutEffect(() => {
        er(0);
    }, [e_, er]);
    let ez = (0, th.P)((e) => e.pendingContentFocus),
        eF = (0, th.P)((e) => e.setPendingContentFocus),
        eG = i.useRef(null);
    i.useEffect(() => {
        if (!ez) return;
        let e = 0,
            t = 0;
        return (
            (t = requestAnimationFrame(function l() {
                let n = eG.current?.querySelector('[role="grid"] [role="button"]');
                if (null != n) {
                    (n.focus(), eF(!1));
                    return;
                }
                if (e++ < 10) {
                    t = requestAnimationFrame(l);
                    return;
                }
                eF(!1);
            })),
            () => cancelAnimationFrame(t)
        );
    }, [ez, eF]);
    let eK = (0, th.P)(
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
        eD === ei.oH.HOME && eK && th.P.getState().setActiveMainLink(ei.oH.ALL_CLIPS);
    }, [eD, eK]);
    let eV = i.useMemo(() => (null != eL ? [eL] : []), [eL]),
        e$ = (0, I.A)(eV)[0] ?? null,
        eB = (0, c.bG)([w.default], () => (null != eM ? w.default.getUser(eM) : null), [eM]),
        eq = i.useMemo(() => {
            if (null != eL) return eo.find((e) => e.key === eL)?.name ?? B.intl.string(B.t.dPVrEv);
            if (null != eM) return null != eB ? (eB.globalName ?? eB.username) : eM;
            switch (eD) {
                case ei.oH.FAVORITES:
                    return B.intl.string(B.t["9rlCk1"]);
                case ei.oH.AUTO_CLIPS:
                    return B.intl.string($.default.ikNKf1);
                case ei.oH.HOME:
                    return B.intl.string($.default.iVqj8B);
                default:
                    return B.intl.string(B.t.dPVrEv);
            }
        }, [eL, eM, eD, eo, eB]),
        eY = i.useMemo(() => {
            if (null != eL) return eo.find((e) => e.key === eL)?.count ?? 0;
            if (null != eM) return ec.find((e) => e.key === eM)?.count ?? 0;
            switch (eD) {
                case ei.oH.HOME:
                    return null;
                case ei.oH.AUTO_CLIPS:
                    return eu.autoClips;
                case ei.oH.FAVORITES:
                    return eu.favorites;
                default:
                    return eu.allClips;
            }
        }, [eL, eM, eD, eo, ec, eu]),
        eQ = i.useCallback(() => {
            (ev("editing"), N.Ay.useReducedMotion && ew(m.ip.ENTERED));
        }, []),
        eX = i.useCallback((e) => {
            ea((t) => {
                let l = new Set(t);
                return (l.has(e) ? l.delete(e) : l.add(e), l);
            });
        }, []),
        eW = i.useCallback(
            (e) => {
                (eC(e.id), eQ());
            },
            [eQ],
        ),
        eZ = i.useRef(null != F),
        eJ = i.useCallback(() => {
            ((eZ.current = !1), N.Ay.useReducedMotion && eC(null), ev("gallery"));
        }, []),
        e0 = i.useCallback(() => {
            eZ.current ? H() : eJ();
        }, [eJ, H]);
    (i.useEffect(() => {
        "editing" === ey && null == eN && e0();
    }, [ey, eN, e0]),
        i.useEffect(() => {
            function e(e) {
                "Escape" === e.key && "editing" === eI.current && eA && (e.stopPropagation(), e0());
            }
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [e0, H, eA]),
        i.useEffect(() => {
            function e(e) {
                if (
                    ("f" !== e.key && "F" !== e.key) ||
                    e.altKey ||
                    e.shiftKey ||
                    ((0, P.cX)() ? !e.metaKey || e.ctrlKey : !e.ctrlKey || e.metaKey) ||
                    !eA ||
                    "gallery" !== eI.current
                )
                    return;
                (e.preventDefault(), e.stopPropagation());
                let t = th.P.getState();
                (t.currentPage === ei.fB.HOME && t.setActiveMainLink(ei.oH.ALL_CLIPS), t.setPendingSearchFocus(!0));
            }
            return (document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0));
        }, [eA]),
        i.useEffect(
            () =>
                "editing" === ey && null != eb
                    ? void (0, D.YK)(eb)
                    : ((0, D.TE)(),
                      () => {
                          (0, D.TE)();
                      }),
            [ey, eb],
        ));
    let e1 = i.useCallback(() => {
            ea(new Set());
        }, []),
        e3 = X.size > 0,
        e2 = i.useCallback(() => {
            let e = eh.filter((e) => X.has(e.id));
            (0, d.mM)(
                async () => {
                    let { default: t } = await l.e(913367).then(l.bind(l, 223818));
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
        }, [eh, X, e1]),
        e9 = i.useCallback(async () => {
            let e = eh.filter((e) => X.has(e.id));
            await ep({ clips: e, onShared: e1 });
        }, [eh, X, ep, e1]),
        e6 = i.useCallback(
            async (e) => {
                0 !== e.length && (ea(new Set(e.map((e) => e.id))), await ep({ clips: e }), e1());
            },
            [ep, e1],
        ),
        e4 = i.useCallback(() => {
            let e = th.P.getState();
            (e.setGameFacet(null),
                e.setClippedWithFacet(null),
                e.setActiveMainLink(ei.oH.ALL_CLIPS),
                e.setPendingSearchFocus(!0));
        }, []),
        e8 = i.useMemo(() => {
            let e = eh.filter((e) => X.has(e.id));
            return e.length > 0 && e.every((e) => e.isFavorite);
        }, [eh, X]),
        e7 = i.useCallback(async () => {
            let e = eh.filter((e) => X.has(e.id)),
                t = !e8;
            (await Promise.all(e.filter((e) => e.isFavorite !== t).map((e) => (0, D.Yy)(e.id, { isFavorite: t }, !0))),
                e1());
        }, [eh, X, e8, e1]),
        te = i.useMemo(() => {
            let e = 0,
                t = 0,
                l = 0;
            return (
                eh.forEach((n) => {
                    switch (n.decision?.signal?.type) {
                        case e5.Gy.MANUAL:
                            l++;
                            break;
                        case e5.Gy.DISTRIBUTED:
                            t++;
                            break;
                        case void 0:
                            break;
                        default:
                            e++;
                    }
                }),
                {
                    number_of_clips_loaded: eh.length,
                    num_autoclips_loaded: e,
                    num_distributed_clips_loaded: t,
                    num_manual_clips_loaded: l,
                    gallery_page: eD,
                }
            );
        }, [eh, eD]);
    (0, E.A)(
        { type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.CLIP_GALLERY_VIEWED, properties: te },
        { disableTrack: ex },
        [te, ex],
    );
    let tt = i.useMemo(
        () => ({
            selectedClipIds: X,
            toggleClipSelection: eX,
            clearSelection: e1,
            isMultiSelectMode: e3,
            picker: O,
            onShareSession: Q ? e6 : void 0,
        }),
        [X, eX, e1, e3, O, Q, e6],
    );
    return (0, n.jsx)(k.f5, {
        value: V,
        children: (0, n.jsx)(tl.$.Provider, {
            value: tt,
            children: (0, n.jsx)(u.N, {
                onClose: H,
                transitionState: z,
                "aria-label": ek ? "Doggo Game" : void 0,
                ...K,
                children: ek
                    ? (0, n.jsx)(tk, { onClose: H })
                    : (0, n.jsxs)("div", {
                          className: lq.jT,
                          ref: eP,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: s()(lq.PD, "gallery" === ey && lq.vu),
                                  inert: "gallery" !== ey,
                                  children: [
                                      (0, n.jsx)(l$, { gamesFacet: eo, mainLinkCounts: eu, mainLinkNewCounts: em }),
                                      (0, n.jsxs)("div", {
                                          className: lq.Qs,
                                          ref: eG,
                                          style: {
                                              "--custom-clips-header-height": "68px",
                                              "--custom-clips-scroll-inset": `${eO}px`,
                                          },
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  ref: es,
                                                  className: s()(lq.$Q, !eT && lq.iF),
                                                  children: [
                                                      (0, n.jsxs)("div", {
                                                          className: lq.ev,
                                                          children: [
                                                              null != eL &&
                                                                  (0, n.jsx)(S.A, {
                                                                      game: e$,
                                                                      size: S.M.SMALL,
                                                                      className: lq.Ve,
                                                                      "aria-hidden": !0,
                                                                  }),
                                                              (0, n.jsx)(h.D, {
                                                                  variant: "heading-sm/semibold",
                                                                  color: "text-default",
                                                                  className: lq.Yn,
                                                                  children: eq,
                                                              }),
                                                              null == eL &&
                                                                  null == eM &&
                                                                  (eD === ei.oH.AUTO_CLIPS ||
                                                                      (Y && eD === ei.oH.HOME)) &&
                                                                  (0, n.jsx)(f.E, {
                                                                      icon: x.NitroWheelIcon,
                                                                      type: "early_access",
                                                                      variant: "primary",
                                                                  }),
                                                              null != eY &&
                                                                  !eK &&
                                                                  (0, n.jsxs)("div", {
                                                                      className: lq.Vl,
                                                                      children: [
                                                                          (0, n.jsx)("span", {
                                                                              className: lq.FK,
                                                                              "aria-hidden": "true",
                                                                          }),
                                                                          (0, n.jsx)(g.E, {
                                                                              variant: "body-md/normal",
                                                                              color: "text-muted",
                                                                              children: B.intl.format(
                                                                                  $.default["+YIqQM"],
                                                                                  { count: eY },
                                                                              ),
                                                                          }),
                                                                      ],
                                                                  }),
                                                          ],
                                                      }),
                                                      (0, n.jsxs)("div", {
                                                          className: lq.o5,
                                                          children: [
                                                              Y &&
                                                                  (0, n.jsx)(W, {
                                                                      showOffEducation: "gallery" === ey && eA,
                                                                  }),
                                                              (0, n.jsxs)("div", {
                                                                  className: lq.$s,
                                                                  children: [
                                                                      (0, n.jsx)(p.m, {
                                                                          position: "bottom",
                                                                          text: B.intl.string(B.t["5h0QOP"]),
                                                                          children: (0, n.jsx)(j.K, {
                                                                              onClick: e4,
                                                                              icon: y.MagnifyingGlassIcon,
                                                                              size: "sm",
                                                                              variant: "icon-only",
                                                                              "aria-label": B.intl.string(
                                                                                  B.t["5h0QOP"],
                                                                              ),
                                                                          }),
                                                                      }),
                                                                      (0, n.jsx)(p.m, {
                                                                          position: "bottom",
                                                                          text: B.intl.string(B.t.cpT0Cq),
                                                                          children: (0, n.jsx)(j.K, {
                                                                              onClick: H,
                                                                              icon: v.XLargeIcon,
                                                                              size: "sm",
                                                                              variant: "icon-only",
                                                                              "aria-label": B.intl.string(B.t.cpT0Cq),
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                              eT
                                                  ? (0, n.jsx)(lT, {
                                                        filteredClips: ed,
                                                        totalClipCount: eh.length,
                                                        onEdit: eW,
                                                        onClipClick: q,
                                                        isLoading: ex,
                                                        onScroll: er,
                                                    })
                                                  : (0, n.jsxs)("div", {
                                                        className: lq.LG,
                                                        children: [
                                                            (0, n.jsx)("div", {
                                                                className: lq.oP,
                                                                ref: eR,
                                                                children: (0, n.jsx)(le, {
                                                                    allClips: eh,
                                                                    gamesFacet: eo,
                                                                    participantsFacet: ec,
                                                                }),
                                                            }),
                                                            (0, n.jsx)(tp, {
                                                                onEdit: eW,
                                                                channelId: U,
                                                                filteredClips: ed,
                                                                totalClipCount: eh.length,
                                                                onClipClick: q,
                                                                isLoading: ex,
                                                                topInset: eH,
                                                            }),
                                                        ],
                                                    }),
                                              Q &&
                                                  e3 &&
                                                  (0, n.jsx)(tN, {
                                                      selectedCount: X.size,
                                                      allSelectedFavorited: e8,
                                                      onClear: e1,
                                                      onFavorite: e7,
                                                      onDelete: e2,
                                                      onShare: e9,
                                                      isSharing: ej,
                                                  }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, n.jsx)("div", {
                                  className: s()(lq.jN, "editing" === ey && lq.vu),
                                  inert: "editing" !== ey,
                                  onTransitionEnd: () => {
                                      switch (ey) {
                                          case "gallery":
                                              (eC(null), ew(m.ip.HIDDEN));
                                              break;
                                          case "editing":
                                              ew(m.ip.ENTERED);
                                      }
                                  },
                                  children:
                                      null != eN &&
                                      (0, n.jsx)(Z.p, {
                                          clip: eN,
                                          modalContainerRef: eP,
                                          children: (0, n.jsxs)(
                                              et.JQ,
                                              {
                                                  children: [
                                                      (0, n.jsx)(ee.A, {
                                                          transitionState: eS,
                                                          onClose: e0,
                                                          onBack: eJ,
                                                      }),
                                                      (0, n.jsx)(J.A, { channelId: U, onClose: e0, onExit: H }),
                                                  ],
                                              },
                                              eN.id,
                                          ),
                                      }),
                              }),
                          ],
                      }),
            }),
        }),
    });
}
