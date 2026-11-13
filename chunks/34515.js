l.d(t, { default: () => lW });
var n = l(477900),
    i = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(613412),
    o = l(935399),
    c = l(517846),
    d = l(855986),
    u = l(192308),
    m = l(521489),
    h = l(231723),
    f = l(534514),
    x = l(805251),
    g = l(403581),
    p = l(834730),
    j = l(866665),
    y = l(408278),
    v = l(7689),
    b = l(972213),
    C = l(765671),
    N = l(765548),
    A = l(775602),
    k = l(793574),
    E = l(688810),
    I = l(139286),
    S = l(429913),
    w = l(769015),
    P = l(669700),
    L = l(540999),
    M = l(287809),
    D = l(723702),
    _ = l(419490),
    T = l(898105),
    R = l(489496),
    U = l(554146),
    O = l(43105),
    z = l(428678),
    H = l(176781),
    F = l(650684),
    G = l(559106),
    K = l(263775),
    V = l(707116),
    $ = l(464132),
    B = l(270607),
    q = l(49999),
    Y = l(683825),
    Q = l(792996),
    X = l(829766);
let W = [
    { mode: "off", icon: z.DenyIcon },
    { mode: "manual", icon: H.ClipsIcon },
    { mode: "auto", icon: F.ClipsAutoIcon },
];
function Z(e) {
    let { targetElementRef: t } = e,
        [l, i] = (0, K.kn)([U.M.AUTOCLIPPING_EARLY_ACCESS_LIBRARY_EDUCATION_POPOVER], { bypassAutoDismiss: !0 });
    return l !== U.M.AUTOCLIPPING_EARLY_ACCESS_LIBRARY_EDUCATION_POPOVER
        ? null
        : (0, n.jsx)(O.A, {
              targetElementRef: t,
              position: "bottom",
              alignmentStrategy: "trigger-center",
              badge: "early_access",
              title: Q.intl.string(Y.default.yriD3v),
              body: Q.intl.string(Y.default.UBihuW),
              onRequestClose: () => i(q.i.USER_DISMISS),
              actions: [
                  { text: Q.intl.string(Q.t["NX+WJN"]), variant: "secondary", onClick: () => i(q.i.TAKE_ACTION) },
              ],
          });
}
function J(e) {
    let { mode: t, icon: l, selected: a, tooltip: s, onSelect: r, onKeyDown: o } = e,
        c = i.useRef(null),
        d = (function (e) {
            switch (e) {
                case "off":
                    return Q.intl.string(Y.default["uO/2T5"]);
                case "manual":
                    return Q.intl.string(Y.default.ms4ibY);
                case "auto":
                    return Q.intl.string(Y.default["4gzBi+"]);
            }
        })(t);
    return (0, n.jsx)(G.vN, {
        focusTarget: c,
        ringTarget: c,
        children: (0, n.jsx)(j.m, {
            position: "bottom",
            text: s,
            children: (0, n.jsxs)("button", {
                ref: c,
                type: "button",
                role: "radio",
                className: X.m,
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
                        (0, n.jsx)(p.E, {
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
function ee(e) {
    let { showOffEducation: t = !1 } = e,
        { value: l, onChange: a } = (0, $.U)(),
        { isLocked: s, openRoadblock: r } = (0, B.B)("ClipsCaptureModeSelector"),
        o = (0, V.T)(),
        c = i.useRef(null);
    function d(e) {
        s(e) ? r() : a(e);
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                ref: c,
                className: X.O,
                role: "radiogroup",
                "aria-label": Q.intl.string(Y.default.eIX9be),
                children: W.map((e, t) => {
                    let { mode: i, icon: r } = e;
                    return (0, n.jsx)(
                        J,
                        {
                            mode: i,
                            icon: r,
                            selected: i === l,
                            tooltip: (function (e, t) {
                                switch (e) {
                                    case "off":
                                        return Q.intl.string(Y.default.ElHi4v);
                                    case "manual":
                                        return t.length > 0
                                            ? Q.intl.formatToPlainString(Y.default.QoCXBT, { keybind: t })
                                            : Q.intl.string(Y.default.YlBcu8);
                                    case "auto":
                                        return Q.intl.string(Y.default["bF6l+Y"]);
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
                                            l = (t + 1) % W.length;
                                            break;
                                        case "ArrowLeft":
                                        case "ArrowUp":
                                            l = (t + W.length - 1) % W.length;
                                            break;
                                        case "Home":
                                            l = 0;
                                            break;
                                        case "End":
                                            l = W.length - 1;
                                            break;
                                        default:
                                            return;
                                    }
                                    (e.preventDefault(), c.current?.querySelectorAll('[role="radio"]')[l]?.focus());
                                    let n = W[l].mode;
                                    s(n) || a(n);
                                })(e, t),
                        },
                        i,
                    );
                }),
            }),
            t && "off" === l && (0, n.jsx)(Z, { targetElementRef: c }),
        ],
    });
}
var et = l(923904),
    el = l(701266),
    en = l(423699),
    ei = l(663357),
    ea = l(352527),
    es = l(280483),
    er = l(111994);
l(321073);
var eo = l(118057),
    ec = l(289873),
    ed = l(962125),
    eu = l(915089),
    em = l(62617);
function eh(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: s, width: r, height: o, className: c, style: d } = e,
        u = i.useMemo(
            () => (0, em.H)({ width: r, height: o, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [r, o, d],
        );
    return (0, n.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/1e6b3a97c86291528609222cdeb8b18fdcce3270f796106d4af3d0f7fa3cce18.svg",
        className: (0, em.Z)(c),
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: s ?? "img",
    });
}
var ef = l(164636),
    ex = l(687966),
    eg = l(646514),
    ep = l(475358),
    ej = l(123292),
    ey = l(292801),
    ev = l(780964),
    eb = l(766075),
    eC = l(532624),
    eN = l(350535),
    eA = l(572164),
    ek = l(953932),
    eE = l(652215),
    eI = l(71967);
function eS(e) {
    let { header: t, description: l } = e;
    return (0, n.jsxs)("div", {
        className: eI.Nr,
        children: [t, (0, n.jsx)(p.E, { color: "text-default", variant: "body-sm/medium", children: l })],
    });
}
function ew() {
    let e = (0, ef.bG)([eC.Ay], () => eC.Ay.getKeybindForAction(eE.hCu.SAVE_CLIP)),
        t = null != e ? eN.dI(e.shortcut, !0) : null;
    return (0, n.jsxs)("div", {
        className: eI.kR,
        children: [
            (0, n.jsx)(eS, {
                header: (0, n.jsx)(ex.GameControllerIcon, { size: "refresh_sm", color: eg.A.colors.ICON_DEFAULT }),
                description: Q.intl.string(Y.default["4K56sP"]),
            }),
            (0, n.jsx)(eS, {
                header: null != t ? (0, n.jsx)(ep.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  Q.intl.format(Y.default.BIwQis, { keybind: t }),
                                  (0, n.jsx)("div", {
                                      className: eI.JH,
                                      children: (0, n.jsx)(ej.Q, {
                                          text: Q.intl.string(Y.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "body-sm/medium",
                                          onClick: function () {
                                              (0, eb.openUserSettings)(ev.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : Q.intl.string(Y.default.HOUDUm),
            }),
            (0, n.jsx)(eS, {
                header: (0, n.jsx)(ey.ArrowAngleRightUpIcon, { size: "refresh_sm", color: eg.A.colors.ICON_DEFAULT }),
                description: Q.intl.string(Y.default.DLzdl7),
            }),
        ],
    });
}
function eP(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, eA.E)(),
        a = (0, T.r)("ClipsGalleryEmptyState").enabled,
        { onChange: s } = (0, $.U)(),
        r = i.useCallback(() => s("manual"), [s]);
    return (0, n.jsx)("div", {
        className: eI.kL,
        children: (0, n.jsxs)("div", {
            className: eI.Qs,
            children: [
                (0, n.jsx)(eh, { width: 213, height: 135, alt: "" }),
                (0, n.jsx)(f.D, {
                    className: eI.wx,
                    variant: "heading-xl/semibold",
                    children: t ? Q.intl.string(Y.default["+M2iLf"]) : Q.intl.string(Y.default.m2GEpP),
                }),
                t &&
                    (0, n.jsx)(p.E, {
                        className: eI.h_,
                        variant: "body-md/medium",
                        children: Q.intl.string(Y.default.xkY5xS),
                    }),
                !l &&
                    (0, n.jsx)("div", {
                        className: eI.SO,
                        children: (0, n.jsx)(ek.A, { onEnableClips: a ? r : void 0 }),
                    }),
                l && !t && (0, n.jsx)(ew, {}),
            ],
        }),
    });
}
let eL = 4 / 3;
var eM = l(621466),
    eD = l(61491),
    e_ = l(342952),
    eT = l(890856),
    eR = l(939249),
    eU = l(820081),
    eO = l(365199),
    ez = l(778712),
    eH = l(821609),
    eF = l(22231),
    eG = l(983851),
    eK = l(31300),
    eV = l(442433),
    e$ = l(587895),
    eB = l(927813),
    eq = l(995273);
function eY(e) {
    let { timestamp: t, abbreviated: l = !0 } = e,
        [n, a] = i.useState(() => (0, eq.jb)(t, l));
    return (
        i.useEffect(() => {
            a((0, eq.jb)(t, l));
            let e = Date.now() - t;
            if (e > eB.A.Millis.DAY) return;
            let n = e >= eB.A.Millis.HOUR ? eB.A.Millis.HOUR : eB.A.Millis.MINUTE,
                i = setInterval(
                    () => {
                        a((0, eq.jb)(t, l));
                    },
                    n,
                    n - (e % n),
                );
            return () => clearInterval(i);
        }, [t, l]),
        n
    );
}
var eQ = l(549685),
    eX = l(129230),
    eW = l(403362),
    eZ = l(53677),
    eJ = l(609174),
    e0 = l(151184),
    e1 = l(82716),
    e3 = l(449397),
    e2 = l(399053),
    e9 = l(285072),
    e6 = l(284009),
    e5 = l.n(e6),
    e8 = l(460905),
    e4 = l(443184),
    e7 = l(696016),
    te = l(153511);
function tt(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    e5()(l?.type === e7.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let i = (0, d.bG)([M.default], () => M.default.getUser(l.remoteTriggerUserId));
    if (null == i) return null;
    let a = i.globalName ?? i.username;
    return (0, n.jsx)(j.m, {
        text: Q.intl.string(Y.default.vTTkFF),
        children: (0, n.jsxs)("div", {
            className: te.S,
            children: [
                (0, n.jsx)("img", { src: i.getAvatarURL(null, 12, !1), className: te.$, alt: a }),
                (0, n.jsx)(p.E, {
                    color: "text-overlay-light",
                    variant: "body-xs/medium",
                    children: Q.intl.formatToPlainString(Y.default.QJ7i8Z, { username: a }),
                }),
            ],
        }),
    });
}
function tl(e) {
    let { icon: t, text: l, tooltipText: i } = e;
    return (0, n.jsx)(j.m, {
        text: i,
        children: (0, n.jsxs)("div", {
            className: te.S,
            children: [
                (0, n.jsx)(t, { size: "xxs", color: "currentColor" }),
                (0, n.jsx)(p.E, { color: "text-overlay-light", variant: "body-xs/medium", children: l }),
            ],
        }),
    });
}
function tn(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === e7.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case e7.Gy.DISTRIBUTED:
            return (0, n.jsx)(tt, { clip: t });
        case e7.Gy.LAUGHTER:
            return (0, n.jsx)(tl, {
                icon: e8.ReactionIcon,
                text: Q.intl.string(Y.default.bTC23D),
                tooltipText: Q.intl.string(Y.default["ry+jxm"]),
            });
        case e7.Gy.SHOUTING:
            return (0, n.jsx)(tl, {
                icon: e8.ReactionIcon,
                text: Q.intl.string(Y.default["3gqpuo"]),
                tooltipText: Q.intl.string(Y.default["ry+jxm"]),
            });
        case e7.Gy.GAME_EVENT: {
            let e = (0, e4.u6)(t.applicationId, e7.Gy.GAME_EVENT, t.decision.signal.eventName);
            if (null == e) return null;
            return (0, n.jsx)(tl, {
                icon: e,
                text: (0, e4.PZ)(t.applicationId, e7.Gy.GAME_EVENT, t.decision.signal.eventName) ?? "",
                tooltipText: Q.intl.string(Y.default["347DBb"]),
            });
        }
        default:
            return null;
    }
}
var ti = l(718812),
    ta = l(721610),
    ts = l(686320),
    tr = l(175764);
function to(e) {
    let { clip: t, actionsDisabled: l, isNew: i, onClick: a, onEdit: s, gridItemProps: r } = e;
    return (0, n.jsx)(eJ.Cl, {
        clip: t,
        children: (0, n.jsx)(tc, { actionsDisabled: l, isNew: i, onClick: a, onEdit: s, gridItemProps: r }),
    });
}
function tc(e) {
    let { actionsDisabled: t, isNew: a, onClick: r, onEdit: o, gridItemProps: c } = e,
        u = (0, eJ.Y_)(),
        m = !0 === u.pending,
        h = t || m,
        { analyticsLocations: f } = (0, E.Ay)(k.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: x, toggleClipSelection: g, isMultiSelectMode: p, picker: j } = i.useContext(ta.$),
        y = j?.allowMultiSelect ?? !0,
        v = null != j ? (0, ts.$)(j.action).label : void 0,
        [b, C] = i.useState(!1),
        [N, I] = i.useState(!1),
        [S, w] = i.useState(!1),
        [P, L] = i.useState(!1),
        [M, D] = i.useState(0),
        T = x.has(u.id),
        R = u.type === e7.nQ.SCREENSHOT,
        U = "auto" === u.clipMethod,
        O = (0, d.bG)([A.Ay], () => A.Ay.keyboardModeEnabled),
        z = (N || b || (S && O)) && !T,
        H = i.useCallback(() => w(!0), []),
        F = i.useCallback((e) => {
            e.currentTarget.contains(e.relatedTarget) || w(!1);
        }, []);
    i.useEffect(() => {
        if (!z || R || m) return;
        let e = window.setTimeout(() => L(!0), 150);
        return () => {
            (window.clearTimeout(e), L(!1));
        };
    }, [z, R, m]);
    let G = i.useRef(null),
        K = i.useCallback(() => {
            G.current?.releaseSource();
        }, []),
        V = i.useCallback((e) => {
            G.current?.seek(e);
        }, []),
        $ = i.useCallback(() => C(!1), []),
        B = i.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), g(u.id));
            },
            [g, u.id],
        ),
        q = i.useCallback(
            (e) => {
                C(!0);
                let t =
                    p && x.size > 0
                        ? Array.from(x)
                              .map((e) => _.Ay.getClipById(e))
                              .filter(eW.Vq)
                        : [u];
                (0, eV.L3)(
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
                                    eX.default.track(eE.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...eZ.lc(),
                                        ...eZ.Zy(u),
                                    });
                                },
                                onEdit: () => {
                                    (o(u),
                                        eX.default.track(eE.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...eZ.lc(),
                                            ...eZ.Zy(u),
                                        }));
                                },
                                onBeforeDelete: K,
                                onAfterDelete: () => {
                                    eX.default.track(eE.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...eZ.lc(),
                                        ...eZ.Zy(u),
                                    });
                                },
                            });
                    },
                    { onClose: $ },
                );
            },
            [u, p, x, h, $, o, K, j, f],
        ),
        Y = i.useCallback(
            (e) => {
                h || (e.preventDefault(), e.stopPropagation(), q(e));
            },
            [h, q],
        ),
        X = i.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), q(e));
            },
            [q],
        ),
        W = i.useCallback(
            (e) => {
                (e.preventDefault(),
                    e.stopPropagation(),
                    o(u),
                    eX.default.track(eE.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" }));
            },
            [o, u],
        ),
        Z = i.useCallback(
            (e) => {
                !h &&
                    (!(0, eM.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") &&
                            null == e.target.closest("[data-clips-progress]") &&
                            null == e.target.closest("[data-clips-select]") &&
                            e.currentTarget.contains(e.target))) &&
                    (y && e.shiftKey ? (e.preventDefault(), g(u.id)) : y && p ? g(u.id) : null != r && r(u),
                    eX.default.track(eE.HAw.CLIP_GALLERY_CARD_CLICKED, { ...eZ.lc(), ...eZ.Zy(u) }));
            },
            [h, y, p, g, u, r],
        );
    return (0, n.jsx)(E.f5, {
        value: f,
        children: (0, n.jsx)("div", {
            className: tr.hl,
            onFocus: H,
            onBlur: F,
            children: (0, n.jsx)(eT.s, {
                "aria-disabled": h,
                "aria-label": v ?? Q.intl.string(R ? Q.t["HO/oXl"] : Q.t.bt75uw),
                onClick: h ? void 0 : Z,
                onContextMenu: Y,
                buttonProps: null != c ? { role: "button", id: c.id, tabIndex: c.tabIndex } : void 0,
                buttonRef: c?.ref,
                onFocus: c?.onFocus,
                className: s()(tr.Nr, { [tr.r9]: h, [tr.in]: b, [tr.wH]: T }),
                onMouseEnter: () => I(!0),
                onMouseLeave: () => I(!1),
                children: (0, n.jsx)("div", {
                    className: tr.w7,
                    children: (0, n.jsxs)(td, {
                        ref: G,
                        isPlaying: P,
                        onProgressChange: D,
                        children: [
                            m && (0, n.jsx)("div", { className: tr.mi, children: (0, n.jsx)(ec.y, {}) }),
                            (0, n.jsx)("div", {
                                className: s()(tr.w$, { [tr.t7]: z, [tr.Vg]: U }),
                                inert: !0,
                                "aria-hidden": "true",
                            }),
                            (0, n.jsx)(tu, {
                                isNew: a,
                                showHoverActions: z && !h,
                                showSelect: y && (z || T),
                                isSelected: T,
                                onToggleSelect: B,
                                onMenu: X,
                                onBeforeDelete: K,
                            }),
                            (0, n.jsx)(tm, { showHoverState: z, playbackProgress: M, onEdit: W, onSeek: V }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function td(e) {
    let { isPlaying: t, onProgressChange: l, children: i, ref: a } = e;
    return (0, n.jsx)(e2.d, {
        ref: a,
        isPlaying: t,
        preload: "none",
        onProgressChange: l,
        children: (0, n.jsx)(e9.h, { isVisible: !0, className: tr.Lw, children: i }),
    });
}
function tu(e) {
    let {
            isNew: t,
            showHoverActions: l,
            showSelect: i,
            isSelected: a,
            onToggleSelect: r,
            onMenu: o,
            onBeforeDelete: c,
        } = e,
        d = (0, eJ.Y_)(),
        u = !0 === d.pending;
    return (0, n.jsxs)("div", {
        className: tr.wx,
        children: [
            (0, n.jsxs)("div", {
                className: tr.LD,
                children: [
                    i &&
                        (0, n.jsx)(eR.D, {
                            "aria-label": Q.intl.string(Q.t.XqMe3N),
                            "aria-pressed": a,
                            onClick: r,
                            "data-clips-select": "true",
                            className: s()(tr.UJ, { [tr.ZK]: a }),
                            children: a && (0, n.jsx)(eU.CheckmarkSmallBoldIcon, { size: "xs", color: "currentColor" }),
                        }),
                    !u &&
                        t &&
                        (0, n.jsx)("div", {
                            className: tr.Ad,
                            children: (0, n.jsx)(p.E, {
                                variant: "body-xs/semibold",
                                color: "text-overlay-light",
                                children: Q.intl.string(Q.t.y2b7CA),
                            }),
                        }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: tr.IE,
                children: [
                    (d.isFavorite || l) &&
                        (0, n.jsx)("div", {
                            className: s()({ [tr.L6]: d.isFavorite }),
                            children: (0, n.jsx)(e1.z, {}),
                        }),
                    l &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(j.m, {
                                    text: Q.intl.string(Q.t["UKOtz+"]),
                                    children: (0, n.jsx)(y.K, {
                                        onClick: o,
                                        icon: eO.MoreHorizontalIcon,
                                        "aria-label": Q.intl.string(Q.t["UKOtz+"]),
                                        variant: "overlay-secondary",
                                        size: "sm",
                                    }),
                                }),
                                (0, n.jsx)(e0.k, { onBeforeDelete: c }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
function tm(e) {
    let { showHoverState: t, playbackProgress: l, onEdit: a, onSeek: r } = e,
        o = (0, eJ.Y_)(),
        c = o.type === e7.nQ.SCREENSHOT,
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
        g = i.useCallback((e) => {
            ((m.current = !1),
                e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId));
        }, []),
        j = (0, d.yK)([M.default], () => o.users.map((e) => M.default.getUser(e)).filter(eW.Vq)),
        y = eY({ timestamp: o.createdAt }),
        v = o.decision?.signal?.type,
        b = null != v && v !== e7.Gy.MANUAL,
        C =
            j.length > 0
                ? (0, n.jsx)("span", {
                      className: tr.HD,
                      "data-clips-avatars": "true",
                      children: (0, n.jsx)(e_.A, {
                          maxUsers: 3,
                          users: j,
                          size: ez._3.SIZE_16,
                          "aria-label": Q.intl.string(Q.t.WTozwe),
                      }),
                  })
                : null;
    return (0, n.jsx)("div", {
        className: tr.qr,
        children: (0, n.jsxs)("div", {
            className: tr.Zn,
            children: [
                (0, n.jsxs)("div", {
                    className: tr.$,
                    children: [
                        (0, n.jsxs)("div", { className: tr.gH, children: [(0, n.jsx)(tx, {}), (0, n.jsx)(tf, {})] }),
                        t ? C : null,
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: s()(tr.SO, { [tr.AK]: t && !c, [tr.I_]: t && c }),
                    children: [
                        (0, n.jsxs)("div", {
                            className: s()(tr.KW, { [tr.g3]: t }),
                            inert: t,
                            "aria-hidden": t,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: tr.Tf,
                                    children: [
                                        (0, n.jsx)(tn, { clip: o }),
                                        b && (0, n.jsx)("span", { className: tr.TG, "aria-hidden": "true" }),
                                        C,
                                        (0, n.jsx)(p.E, {
                                            variant: "body-xs/normal",
                                            color: "none",
                                            children: Q.intl.format(Y.default["0QCBug"], { time: y }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", { className: tr.av, children: (0, n.jsx)(th, {}) }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: s()(tr.Ax, { [tr.Mg]: t }),
                            inert: !t,
                            children: [
                                !c &&
                                    (0, n.jsx)("div", {
                                        ref: u,
                                        className: tr.hr,
                                        onPointerDown: f,
                                        onPointerMove: x,
                                        onPointerUp: g,
                                        "data-clips-progress": "true",
                                        "aria-hidden": "true",
                                        children: (0, n.jsx)("div", {
                                            className: tr.z5,
                                            children: (0, n.jsx)("div", {
                                                className: tr.TE,
                                                style: { width: `${l}%` },
                                                children: (0, n.jsx)("div", {
                                                    className: tr.GT,
                                                    "aria-hidden": "true",
                                                }),
                                            }),
                                        }),
                                    }),
                                (0, n.jsxs)("div", {
                                    className: tr.E_,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: tr.lO,
                                            children: (0, n.jsx)(eH.$, {
                                                variant: "overlay-secondary",
                                                size: "sm",
                                                icon: eF.PencilIcon,
                                                text: Q.intl.string(Q.t.bt75uw),
                                                onClick: a,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: tr.lO,
                                            children: (0, n.jsx)(e3.e, { variant: "primary" }),
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
function th() {
    let e = (0, eJ.Y_)(),
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
            return (0, eD.rB)(l);
        }, [e.length, e.editMetadata]);
    return t
        ? null
        : (0, n.jsxs)("div", {
              className: tr.p0,
              children: [
                  a && (0, n.jsx)(eQ.A, { color: "white", width: 14, height: 14 }),
                  (0, n.jsx)(p.E, {
                      variant: "body-xs/medium",
                      color: "text-overlay-light",
                      tabularNumbers: !0,
                      children: l ? Q.intl.string(Q.t["2Fp7OP"]) : s,
                  }),
              ],
          });
}
function tf() {
    let e = (0, eJ.Y_)(),
        t = (0, ti.h)(e),
        l = "" !== t;
    return (0, n.jsx)(p.E, {
        className: tr.DD,
        variant: "body-sm/semibold",
        color: "text-overlay-light",
        children: l ? t : e.name,
    });
}
function tx() {
    let e = (0, eJ.Y_)(),
        t = (0, d.bG)([e$.A], () => (null != e.applicationId ? e$.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, n.jsx)("div", {
        className: tr.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, n.jsx)("img", { src: l, alt: "", className: tr.T_ })
                : e.type === e7.nQ.VOICE_CLIP
                  ? (0, n.jsx)(eG.VoiceNormalIcon, { size: "xs", color: "currentColor" })
                  : (0, n.jsx)(eK.ScreenIcon, { size: "xs", color: "currentColor" }),
    });
}
td.displayName = "CardThumbnail";
var tg = l(792852);
function tp(e) {
    return Math.min(45 * e, 520);
}
var tj = l(91440),
    ty = l(762831);
function tv(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: a, onEdit: s, isLoading: r, topInset: o = 0 } = e,
        [c, u] = i.useState({ width: 0, height: 0 }),
        m = (0, d.yK)([_.Ay], () => _.Ay.getNewClipIds()),
        h = (0, d.bG)([_.Ay], () => _.Ay.getExportingClipIds().size > 0),
        x = (0, tg.P)((e) => e.activeMainLink),
        g = (0, tg.P)((e) => e.gameFacet),
        j = (0, tg.P)((e) => e.clippedWithFacet),
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
                    title: Q.intl.string(Q.t["kB2R/0"]),
                    description: t ? Q.intl.string(Q.t["6AXirz"]) : void 0,
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
        { width: b } = c,
        { tileWidth: C, columns: N } = i.useMemo(() => {
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
        k = (0, eu.GV)(),
        E = i.useRef(null),
        I = i.useMemo(() => {
            let e = Math.max(1, N),
                t = [];
            for (let l of y) {
                let n = Math.ceil(l.clips.length / e);
                for (let i = 0; i < n; i++) t.push(Math.min(e, l.clips.length - i * e));
            }
            return t;
        }, [y, N]),
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
            getRowProps: L,
        } = (0, eo.A)({ navId: k, columnCounts: I, prepareFocus: S }),
        M = i.useMemo(() => y.map((e) => Math.ceil(e.clips.length / N)), [y, N]),
        D = i.useMemo(() => M.reduce((e, t) => e + t, 0), [M]),
        T = Math.floor(C / eL) + 20,
        R = y.length > 0 ? `${x}:${g ?? ""}:${j ?? ""}` : null,
        U = (function (e) {
            let t = (0, d.bG)([A.Ay], () => A.Ay.useReducedMotion),
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
        O = i.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: i } = t,
                    r = y[l];
                if (null == r) return null;
                let o = i * N,
                    c = r.clips.slice(o, o + N);
                return (0, n.jsx)(
                    "div",
                    {
                        className: tj.UX,
                        ...L(e),
                        children: c.map((t, l) => {
                            let i = { width: C };
                            return (
                                U && (i["--custom-entrance-delay"] = `${tp(e + l)}ms`),
                                (0, n.jsx)(
                                    "div",
                                    {
                                        className: U ? ty.$ : void 0,
                                        style: i,
                                        children: (0, n.jsx)(to, {
                                            actionsDisabled: h,
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
            [y, N, C, h, m, a, s, L, P, U, R],
        ),
        z = i.useCallback(
            (e) => {
                let t = y[e];
                return t?.description != null ? 66 : 44;
            },
            [y],
        ),
        H = i.useCallback(
            (e) => {
                let t = y[e];
                return null == t
                    ? null
                    : (0, n.jsxs)(
                          "div",
                          {
                              className: tj.aE,
                              children: [
                                  (0, n.jsx)(f.D, {
                                      variant: "body-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, n.jsx)(p.E, {
                                          variant: "body-sm/normal",
                                          color: "text-subtle",
                                          className: tj.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [y],
        );
    if (!r && 0 === y.length) return (0, n.jsx)(eP, { isEmptyBecauseQuery: l > 0 });
    if (r && 0 === y.length) return (0, n.jsx)("div", { className: tj.dc, children: (0, n.jsx)(ec.y, {}) });
    let F = (0, n.jsx)(ed.A, {
            ref: E,
            role: "none presentation",
            className: tj.Vb,
            listPadding: v,
            renderRow: O,
            renderSectionHeader: H,
            rowCount: D,
            rowCountBySection: M,
            rowHeight: T,
            sectionHeaderHeight: z,
            onResize: u,
        }),
        { onFocus: G, ...K } = w();
    return (0, n.jsx)("div", { className: tj.UT, ...K, children: F });
}
var tb = l(405433),
    tC = l(241326),
    tN = l(27232),
    tA = l(505930),
    tk = l(322911);
function tE(e) {
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
        d = Q.intl.string(l ? Y.default.IZsalP : Y.default.ihBfyA),
        u = (0, n.jsx)(eH.$, {
            variant: "primary",
            size: "sm",
            icon: tb.ShareIcon,
            text: Q.intl.string(Q.t.RDE0Sc),
            onClick: r,
            disabled: c,
            loading: o,
        });
    return (0, n.jsxs)("div", {
        "aria-label": Q.intl.string(Q.t.z2jK6X),
        role: "region",
        className: tk.M0,
        children: [
            (0, n.jsxs)("div", {
                className: tk.h5,
                children: [
                    (0, n.jsx)(p.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: Q.intl.format(Y.default.cSfYIv, { count: t }),
                    }),
                    (0, n.jsx)("span", { className: tk.Om, "aria-hidden": "true" }),
                    (0, n.jsx)(eR.D, {
                        className: tk.IU,
                        onClick: i,
                        children: (0, n.jsx)(p.E, {
                            variant: "body-sm/medium",
                            color: "text-link",
                            children: Q.intl.string(Q.t.VkKicb),
                        }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: tk.o1,
                children: [
                    (0, n.jsx)(j.m, {
                        text: Q.intl.string(Q.t.oyYWHE),
                        children: (0, n.jsx)(y.K, {
                            onClick: s,
                            icon: tC.TrashIcon,
                            size: "sm",
                            variant: "secondary",
                            "aria-label": Q.intl.string(Q.t.oyYWHE),
                        }),
                    }),
                    (0, n.jsx)(
                        j.m,
                        {
                            text: d,
                            children: (0, n.jsx)(y.K, {
                                onClick: a,
                                icon: l ? tN.StarIcon : tA.StarOutlineIcon,
                                size: "sm",
                                variant: "secondary",
                                "aria-label": d,
                            }),
                        },
                        `favorite:${l}`,
                    ),
                    (0, n.jsx)(j.m, { text: c ? Q.intl.string(Y.default.qpw1d9) : null, asContainer: !0, children: u }),
                ],
            }),
        ],
    });
}
var tI = l(70860);
function tS(e) {
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
            className: tI.kL,
            children: [
                (0, n.jsx)("canvas", { ref: a, className: tI.Ji, tabIndex: 0, "aria-label": "Doggo Game" }),
                (0, n.jsx)("div", {
                    className: tI.b,
                    children: (0, n.jsx)(y.K, {
                        onClick: t,
                        icon: b.XLargeIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": Q.intl.string(Q.t.cpT0Cq),
                    }),
                }),
            ],
        })
    );
}
let tw = [
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
var tP = l(265872),
    tL = l(847374),
    tM = l(165862),
    tD = l(477782),
    t_ = l(112173),
    tT = l(97808),
    tR = l(683438),
    tU = l(682163),
    tO = l(71393),
    tz = l(341923),
    tH = l(305866),
    tF = l(441349),
    tG = l(789645),
    tK = l(70254),
    tV = l(569737);
function t$(e) {
    return (e.setHours(0, 0, 0, 0), e.getTime());
}
function tB(e) {
    return (e.setHours(23, 59, 59, 999), e.getTime());
}
function tq(e, t) {
    if (null == e && null == t) return null;
    let l = (0, tK.Xj)();
    return { preset: "custom", after: null != e ? t$(e.toDate(l)) : null, before: null != t ? tB(t.toDate(l)) : null };
}
function tY(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new tV.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let tQ = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function tX(e) {
    return tQ.format(new Date(e));
}
function tW(e) {
    switch (e.preset) {
        case "today":
            return Q.intl.string(Y.default.yOAWWM);
        case "yesterday":
            return Q.intl.string(Y.default["PtV/Ti"]);
        case "last-3-days":
            return Q.intl.string(Y.default.xfmv7I);
        case "this-year":
            return Q.intl.string(Y.default["+eE7zX"]);
        case "last-year":
            return Q.intl.string(Y.default.Nwj9v0);
        case "custom": {
            let t = null != e.after ? tX(e.after) : null,
                l = null != e.before ? tX(e.before) : null;
            if (null != t && null != l) return Q.intl.formatToPlainString(Y.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return Q.intl.formatToPlainString(Y.default.k1FkTL, { date: t });
            if (null != l) return Q.intl.formatToPlainString(Y.default["4NlpHD"], { date: l });
            return Q.intl.string(Y.default.tv9apA);
        }
    }
}
var tZ = l(435021);
function tJ(e) {
    let { closePopout: t } = e,
        l = (0, tg.P)((e) => e.dateFilter),
        a = (0, tg.P)((e) => e.setDateFilter),
        [r, o] = i.useState(l?.preset === "custom"),
        [c, d] = i.useState(() => (l?.preset === "custom" ? tY(l.after) : null)),
        [u, m] = i.useState(() => (l?.preset === "custom" ? tY(l.before) : null)),
        h = i.useMemo(
            () => [
                { key: "today", label: Q.intl.string(Y.default.yOAWWM) },
                { key: "yesterday", label: Q.intl.string(Y.default["PtV/Ti"]) },
                { key: "last-3-days", label: Q.intl.string(Y.default.xfmv7I) },
                { key: "this-year", label: Q.intl.string(Y.default["+eE7zX"]) },
                { key: "last-year", label: Q.intl.string(Y.default.Nwj9v0) },
            ],
            [],
        ),
        f = l?.preset ?? null,
        x = r && "custom" !== f ? null : f,
        g = i.useMemo(() => (0, tK.Ec)((0, tK.Xj)()), []),
        v = i.useCallback(
            (e) => {
                (a(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: t$(new Date(t)), before: tB(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: t$(new Date(l)), before: tB(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 2), { preset: e, after: t$(l), before: tB(new Date(t)) }
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
                (d(e), a(tq(e, u)));
            },
            [u, a],
        ),
        N = i.useCallback(
            (e) => {
                (m(e), a(tq(c, e)));
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
    return (0, n.jsx)(tH.l, {
        "aria-label": Q.intl.string(Y.default.upqksT),
        onBlur: w,
        children: (0, n.jsxs)("div", {
            className: s()(tZ.SW, r && tZ.Td),
            children: [
                (0, n.jsxs)("div", {
                    className: tZ.sh,
                    children: [
                        (0, n.jsx)(p.E, {
                            variant: "body-sm/medium",
                            color: "text-muted",
                            className: tZ.a9,
                            children: Q.intl.string(Y.default.upqksT),
                        }),
                        (0, n.jsxs)("div", {
                            ref: E,
                            className: tZ.eF,
                            onKeyDown: S,
                            children: [
                                h.map((e) =>
                                    (0, n.jsx)(
                                        eR.D,
                                        {
                                            className: s()(tZ.zD, x === e.key && tZ.pH),
                                            onClick: () => v(e.key),
                                            "aria-pressed": x === e.key,
                                            children: (0, n.jsx)(p.E, {
                                                variant: "body-sm/medium",
                                                color: "currentColor",
                                                children: e.label,
                                            }),
                                        },
                                        e.key,
                                    ),
                                ),
                                (0, n.jsxs)(eR.D, {
                                    className: s()(tZ.zD, tZ.Kl, (r || "custom" === f) && tZ.pH),
                                    onClick: b,
                                    "aria-expanded": r,
                                    children: [
                                        (0, n.jsx)(p.E, {
                                            variant: "body-sm/medium",
                                            color: "currentColor",
                                            children: Q.intl.string(Y.default.tv9apA),
                                        }),
                                        (0, n.jsx)(p.E, {
                                            variant: "body-md/medium",
                                            color: "text-muted",
                                            className: tZ.Xt,
                                            children: r ? "\u25C0" : "\u25B6",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: tZ.ML,
                    "aria-hidden": !r,
                    children: [
                        (0, n.jsxs)("div", {
                            className: tZ.U6,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: tZ._2,
                                    children: [
                                        (0, n.jsx)(p.E, {
                                            variant: "body-sm/medium",
                                            color: "text-muted",
                                            className: tZ.bk,
                                            "aria-hidden": !0,
                                            children: Q.intl.string(Y.default["96vZuU"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tZ.h0,
                                            children: [
                                                (0, n.jsx)(tF.l, {
                                                    label: Q.intl.string(Y.default["96vZuU"]),
                                                    hideLabel: !0,
                                                    value: c,
                                                    onChange: C,
                                                    maxValue: u ?? g,
                                                }),
                                                null != c &&
                                                    (0, n.jsx)(j.m, {
                                                        text: Q.intl.string(Q.t.VkKicb),
                                                        children: (0, n.jsx)(y.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tG.XSmallIcon,
                                                            onClick: () => C(null),
                                                            "aria-label": Q.intl.string(Q.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: tZ._2,
                                    children: [
                                        (0, n.jsx)(p.E, {
                                            variant: "body-sm/medium",
                                            color: "text-muted",
                                            className: tZ.bk,
                                            "aria-hidden": !0,
                                            children: Q.intl.string(Y.default["GL51/b"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tZ.h0,
                                            children: [
                                                (0, n.jsx)(tF.l, {
                                                    label: Q.intl.string(Y.default["GL51/b"]),
                                                    hideLabel: !0,
                                                    value: u,
                                                    onChange: N,
                                                    minValue: c ?? void 0,
                                                    maxValue: g,
                                                }),
                                                null != u &&
                                                    (0, n.jsx)(j.m, {
                                                        text: Q.intl.string(Q.t.VkKicb),
                                                        children: (0, n.jsx)(y.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tG.XSmallIcon,
                                                            onClick: () => N(null),
                                                            "aria-label": Q.intl.string(Q.t.VkKicb),
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
                                className: tZ.dS,
                                children: (0, n.jsx)(ej.Q, { size: "sm", text: Q.intl.string(Q.t.VkKicb), onClick: A }),
                            }),
                    ],
                }),
            ],
        }),
    });
}
var t0 = l(91871),
    t1 = l.n(t0),
    t3 = l(190199),
    t2 = l(914427),
    t9 = l(724141);
function t6(e) {
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
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => t1()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, n.jsxs)(
                            t3.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, n.jsx)("span", { className: t9.H, children: e.icon }),
                                    (0, n.jsx)(t3.x4.Label, { children: e.label }),
                                    r ? (0, n.jsx)(t3.x4.Checkbox, {}) : (0, n.jsx)(t3.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        h = a.size > 0 ? `${t} (${a.size})` : t;
    return (0, n.jsx)(tP.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(t2.p, {
                "aria-label": t,
                placeholder: o,
                value: u,
                multiSelect: r,
                onChange: s,
                onClose: l,
                emptyStateText: c ?? Q.intl.string(Q.t.QwSXv8),
                maxVisibleItems: 6,
                children: m,
            });
        },
        children: (e) =>
            (0, n.jsx)(eH.$, {
                ...e,
                buttonRef: d,
                size: "sm",
                variant: "secondary",
                text: h,
                icon: tL.ChevronSmallDownIcon,
                iconPosition: "end",
            }),
    });
}
var t5 = l(187671);
function t8(e) {
    let { label: t, icon: l, onRemove: i, removeAriaLabel: a } = e;
    return (0, n.jsxs)("div", {
        className: t5.Io,
        children: [
            null != l && (0, n.jsx)("span", { className: t5.Kk, children: l }),
            (0, n.jsx)(p.E, {
                className: t5.Pf,
                variant: "body-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, n.jsx)(eR.D, {
                className: t5.DT,
                onClick: i,
                "aria-label": a ?? Q.intl.string(Q.t.N86XcP),
                children: (0, n.jsx)(tG.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var t4 = l(401756);
let t7 = { all: Y.default.lscwjQ, auto: Y.default.xrOIkz, manual: Y.default.D7HSLJ };
function le() {
    let e = (0, tg.P)((e) => e.dateFilter),
        t = i.useRef(null),
        l = null != e ? tW(e) : Q.intl.string(Y.default.upqksT);
    return (0, n.jsx)(tP.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(tJ, { closePopout: t });
        },
        children: (e) =>
            (0, n.jsx)(eH.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: tL.ChevronSmallDownIcon,
                iconPosition: "end",
            }),
    });
}
function lt() {
    let e = (0, tg.P)((e) => e.sortOrder),
        t = (0, tg.P)((e) => e.setSortOrder),
        l = i.useRef(null),
        a = e === er.mu.OLDEST ? Q.intl.string(Q.t["0gitSE"]) : Q.intl.string(Q.t["4LLKx3"]);
    return (0, n.jsx)(tP.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: i } = l;
            return (0, n.jsx)(tM.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": Q.intl.string(Q.t.XvNMNk),
                onClose: i,
                onSelect: void 0,
                children: (0, n.jsxs)(tD.rX, {
                    children: [
                        (0, n.jsx)(tD.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: Q.intl.string(Q.t["4LLKx3"]),
                            action: () => {
                                (t(er.mu.MOST_RECENT), i());
                            },
                            checked: e === er.mu.MOST_RECENT,
                        }),
                        (0, n.jsx)(tD.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: Q.intl.string(Q.t["0gitSE"]),
                            action: () => {
                                (t(er.mu.OLDEST), i());
                            },
                            checked: e === er.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, n.jsx)(eH.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: a,
                icon: t_.ArrowsUpDownIcon,
            }),
    });
}
function ll() {
    let e = (0, tg.P)((e) => e.clipMethodFilter),
        t = (0, tg.P)((e) => e.setClipMethodFilter),
        l = i.useRef(null);
    return (0, n.jsx)(tP.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: i } = l;
            return (0, n.jsx)(tM.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": Q.intl.string(Y.default["kIqbb/"]),
                onClose: i,
                onSelect: void 0,
                children: (0, n.jsxs)(tD.rX, {
                    children: [
                        (0, n.jsx)(tD.iD, {
                            id: "method-all",
                            group: "method",
                            label: Q.intl.string(Y.default.lscwjQ),
                            action: () => {
                                (t("all"), i());
                            },
                            checked: "all" === e,
                        }),
                        (0, n.jsx)(tD.iD, {
                            id: "method-auto",
                            group: "method",
                            label: Q.intl.string(Y.default.xrOIkz),
                            action: () => {
                                (t("auto"), i());
                            },
                            checked: "auto" === e,
                        }),
                        (0, n.jsx)(tD.iD, {
                            id: "method-manual",
                            group: "method",
                            label: Q.intl.string(Y.default.D7HSLJ),
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
            (0, n.jsx)(eH.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: Q.intl.string(Y.default["kIqbb/"]),
                icon: tL.ChevronSmallDownIcon,
                iconPosition: "end",
            }),
    });
}
function ln(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: a } = e,
        s = (0, tg.P)((e) => e.query),
        r = (0, tg.P)((e) => e.setQuery),
        o = (0, tg.P)((e) => e.pendingSearchFocus),
        c = (0, tg.P)((e) => e.setPendingSearchFocus),
        d = i.useRef(null),
        u = (0, tg.P)((e) => e.activeMainLink),
        m = (0, tg.P)((e) => e.clipMethodFilter),
        h = (0, tg.P)((e) => e.setClipMethodFilter),
        f = (0, tg.P)((e) => e.gameFacet),
        x = (0, tg.P)((e) => e.clippedWithFacet),
        g = (0, tg.P)((e) => e.selectedGameIds),
        p = (0, tg.P)((e) => e.selectedUserIds),
        j = (0, tg.P)((e) => e.selectedGuildId),
        y = (0, tg.P)((e) => e.selectedActivity),
        v = (0, tg.P)((e) => e.dateFilter),
        b = (0, tg.P)((e) => e.toggleGameId),
        C = (0, tg.P)((e) => e.toggleUserId),
        N = (0, tg.P)((e) => e.setSelectedGuildId),
        A = (0, tg.P)((e) => e.setSelectedActivity),
        k = (0, tg.P)((e) => e.setDateFilter),
        E = (0, tg.P)((e) => e.clearFilters);
    i.useEffect(() => {
        o && (d.current?.focus(), c(!1));
    }, [o, c]);
    let I = i.useRef(null);
    i.useEffect(() => {
        let e = {
            type_filter: "all" !== m ? m : "",
            game_filter_application_ids: null != f ? [f] : Array.from(g),
            date_filter_range: null != v ? v.preset.replace(/-/g, "_") : "",
            filtered_by_server: null != j,
            filtered_by_participants: null != x || p.size > 0,
            filtered_by_favorites: u === er.oH.FAVORITES,
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
            I.current = null;
            return;
        }
        let t = JSON.stringify(e);
        t !== I.current && ((I.current = t), eX.default.track(eE.HAw.CLIPS_FILTER_CHANGED, e));
    }, [m, f, g, v, j, x, p, u, y]);
    let P = i.useMemo(() => l.map((e) => e.key), [l]),
        L = (0, S.A)(P),
        D = i.useMemo(() => new Map(L.map((e) => [e?.id, e])), [L]),
        _ = i.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, n.jsx)(w.A, { game: D.get(e.key), size: w.M.XSMALL }),
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
                        let t = tO.A.getGuild(e);
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
                    icon: (0, n.jsx)(tU.Ay, { guild: e.guild, size: tU.Ay.Sizes.MINI }),
                })),
            [T],
        ),
        U = i.useMemo(() => new Map(T.map((e) => [e.key, e.guild])), [T]),
        O = i.useMemo(
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
        z = i.useMemo(
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
                })(a).map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, n.jsx)(tT.eu, { src: e.avatarUrl, size: ez._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [a],
        ),
        H = i.useMemo(() => (null != j ? new Set([j]) : new Set()), [j]),
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
        B = (0, tz.H)() && u !== er.oH.AUTO_CLIPS,
        q = Q.intl.string(t7[m]),
        Y = (0, n.jsxs)(n.Fragment, {
            children: [
                V &&
                    Array.from(g).map((e) => {
                        let t = _.find((t) => t.key === e);
                        return (0, n.jsx)(
                            t8,
                            {
                                label: t?.label ?? e,
                                icon: (0, n.jsx)(w.A, { game: D.get(e), size: w.M.XSMALL }),
                                onRemove: () => b(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != v && (0, n.jsx)(t8, { label: tW(v), onRemove: () => k(null) }, "date"),
                null != j &&
                    (0, n.jsx)(
                        t8,
                        {
                            label: R.find((e) => e.key === j)?.label ?? j,
                            icon:
                                null != U.get(j)
                                    ? (0, n.jsx)(tU.Ay, { guild: U.get(j), size: tU.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => N(null),
                        },
                        "guild",
                    ),
                $ && Array.from(p).map((e) => (0, n.jsx)(li, { userId: e, onRemove: () => C(e) }, `user-${e}`)),
                null != y && (0, n.jsx)(t8, { label: y, onRemove: () => A(null) }, "activity"),
                B && "all" !== m && (0, n.jsx)(t8, { label: q, onRemove: () => h("all") }, "method"),
            ],
        }),
        X = (V && g.size > 0) || null != v || null != j || ($ && p.size > 0) || null != y || (B && "all" !== m);
    return (0, n.jsxs)("div", {
        className: t4.kT,
        children: [
            (0, n.jsxs)("div", {
                className: t4.HL,
                children: [
                    (0, n.jsx)("div", {
                        className: t4.MT,
                        children: (0, n.jsx)(tR.I, {
                            ref: d,
                            placeholder: Q.intl.string(Q.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: t4.Zq,
                        children: [
                            B && (0, n.jsx)(ll, {}),
                            V &&
                                _.length > 0 &&
                                (0, n.jsx)(t6, {
                                    triggerLabel: Q.intl.string(Q.t.URyqtP),
                                    options: _,
                                    selectedKeys: g,
                                    onToggle: b,
                                    multiSelect: !0,
                                    searchPlaceholder: Q.intl.string(Q.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(le, {}),
                            R.length > 0 &&
                                (0, n.jsx)(t6, {
                                    triggerLabel: Q.intl.string(Q.t["5qyruI"]),
                                    options: R,
                                    selectedKeys: H,
                                    onToggle: G,
                                    multiSelect: !1,
                                    searchPlaceholder: Q.intl.string(Q.t["5h0QOP"]),
                                }),
                            $ &&
                                z.length > 0 &&
                                (0, n.jsx)(t6, {
                                    triggerLabel: Q.intl.string(Q.t.YQ6dJg),
                                    options: z,
                                    selectedKeys: p,
                                    onToggle: (e) => C(e),
                                    multiSelect: !0,
                                    searchPlaceholder: Q.intl.string(Q.t["5h0QOP"]),
                                }),
                            O.length > 0 &&
                                (0, n.jsx)(t6, {
                                    triggerLabel: Q.intl.string(Q.t.agRtPG),
                                    options: O,
                                    selectedKeys: F,
                                    onToggle: K,
                                    multiSelect: !1,
                                    searchPlaceholder: Q.intl.string(Q.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(lt, {}),
                        ],
                    }),
                ],
            }),
            X &&
                (0, n.jsxs)("div", {
                    className: t4.eH,
                    children: [
                        Y,
                        (0, n.jsx)(ej.Q, {
                            size: "sm",
                            variant: "primary",
                            text: Q.intl.string(Q.t.O8k7O4),
                            onClick: E,
                        }),
                    ],
                }),
        ],
    });
}
function li(e) {
    let { userId: t, onRemove: l } = e,
        i = (0, d.bG)([M.default], () => M.default.getUser(t), [t]);
    if (null == i) return null;
    let a = i.globalName ?? i.username;
    return (0, n.jsx)(t8, {
        label: a,
        icon: (0, n.jsx)(tT.eu, { src: i.getAvatarURL(null, 32), size: ez._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
var la = l(315629),
    ls = l(516521),
    lr = l(975571);
function lo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var lc = l(195715);
function ld(e) {
    let { clips: t, onEdit: l, onEdgeNavigate: a, showEducationCopy: s = !1 } = e,
        r = i.useMemo(() => lo(t), [t]),
        o = (0, tg.P)((e) => e.setActiveMainLink),
        c = (0, eu.GV)(),
        d = i.useMemo(() => [r.length], [r.length]),
        { getContainerProps: u, getItemProps: m, getRowProps: h } = (0, eo.A)({ navId: c, columnCounts: d }),
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
              className: lc.uW,
              "aria-label": Q.intl.string(s ? Y.default.U5V4YO : Y.default.efLpNC),
              children: [
                  (0, n.jsxs)("div", {
                      className: lc.wx,
                      children: [
                          s
                              ? (0, n.jsxs)("div", {
                                    className: lc.eS,
                                    children: [
                                        (0, n.jsx)(f.D, {
                                            variant: "nitro-sm",
                                            color: "text-default",
                                            children: Q.intl.string(Y.default.U5V4YO),
                                        }),
                                        (0, n.jsx)(p.E, {
                                            variant: "body-md/normal",
                                            color: "text-muted",
                                            children: Q.intl.format(Y.default.i1g0Xm, {
                                                helpArticleUrl: lr.A.getArticleURL(eE.MVz.CLIPS),
                                            }),
                                        }),
                                    ],
                                })
                              : (0, n.jsxs)("div", {
                                    className: lc.mX,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: lc.UP,
                                            children: [
                                                (0, n.jsx)(f.D, {
                                                    variant: "heading-lg/medium",
                                                    color: "text-default",
                                                    children: Q.intl.string(Y.default.I1h8uD),
                                                }),
                                                (0, n.jsx)(x.E, {
                                                    type: "early_access",
                                                    variant: "primary",
                                                    icon: g.NitroWheelIcon,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)(f.D, {
                                            variant: "display-md",
                                            color: "text-default",
                                            className: lc.DD,
                                            children: Q.intl.string(Y.default.efLpNC),
                                        }),
                                    ],
                                }),
                          (0, n.jsx)("div", {
                              className: lc.BX,
                              children: (0, n.jsx)(eH.$, {
                                  variant: "overlay-primary",
                                  size: "sm",
                                  onClick: () => o(er.oH.AUTO_CLIPS),
                                  text: Q.intl.string(Y.default.gCay1w),
                              }),
                          }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: lc.Vg,
                      "aria-label": Q.intl.string(Y.default.efLpNC),
                      ...C,
                      tabIndex: -1,
                      children: (0, n.jsx)("div", {
                          className: lc.nM,
                          ...h(0),
                          children: r.map((e, t) =>
                              (0, n.jsx)(
                                  "div",
                                  {
                                      className: lc.v2,
                                      children: (0, n.jsx)(to, {
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
var lu = l(65154),
    lm = l(713608),
    lh = l(331322),
    lf = l(783977),
    lx = l(865278),
    lg = l(148289);
function lp() {
    window.open(lr.A.getArticleURL(eE.MVz.CLIPS), "_blank", "noopener,noreferrer");
}
function lj() {
    (0, eb.openUserSettings)(ev.X.CLIPS_PANEL);
}
function ly(e) {
    let { className: t } = e;
    return (0, n.jsxs)("div", {
        className: s()(lx.GX, t),
        children: [
            (0, n.jsx)("div", {
                className: lx.f1,
                "aria-hidden": !0,
                children: (0, n.jsx)("img", { className: lx.IG, src: lg.A, alt: "" }),
            }),
            (0, n.jsx)("div", {
                className: lx.UX,
                children: (0, n.jsxs)("div", {
                    className: lx.wE,
                    children: [
                        (0, n.jsx)(lu.CirclePlayIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                        (0, n.jsx)(ej.Q, {
                            variant: "always-white",
                            textVariant: "body-sm/medium",
                            text: Q.intl.string(Y.default["2axqmn"]),
                            onClick: lp,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function lv(e) {
    let { tags: t, className: l } = e;
    return (0, n.jsxs)("div", {
        className: s()(lx.Ny, l),
        "aria-hidden": !0,
        children: [
            (0, n.jsx)("div", {
                className: lx.mB,
                children: (0, n.jsx)(F.ClipsAutoIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
            }),
            (0, n.jsxs)("div", {
                className: lx.UX,
                children: [
                    (0, n.jsxs)("div", {
                        className: lx.US,
                        children: [
                            (0, n.jsx)("div", { className: s()(lx.qV, lx.AL) }),
                            (0, n.jsx)("div", { className: s()(lx.qV, lx.SA) }),
                            (0, n.jsx)("div", { className: s()(lx.qV, lx.pq) }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: lx.U2,
                        children: [
                            t.map((e) => {
                                let { icon: t, label: l } = e;
                                return (0, n.jsxs)(
                                    "div",
                                    {
                                        className: lx.fP,
                                        children: [
                                            (0, n.jsx)(t, { size: "xxs", color: "currentColor" }),
                                            (0, n.jsx)(p.E, {
                                                variant: "body-xs/medium",
                                                color: "text-overlay-light",
                                                children: Q.intl.string(l),
                                            }),
                                        ],
                                    },
                                    Q.intl.string(l),
                                );
                            }),
                            (0, n.jsxs)("div", {
                                className: lx.Gc,
                                children: [
                                    (0, n.jsx)("div", { className: lx.my }),
                                    (0, n.jsx)("div", { className: lx.my }),
                                    (0, n.jsx)("div", { className: lx.my }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let lb = [
        { icon: e8.ReactionIcon, label: Y.default["3gqpuo"] },
        { icon: lm.ModerationIcon, label: Q.t.ky6syM },
    ],
    lC = [
        { icon: e8.ReactionIcon, label: Y.default.bTC23D },
        { icon: lm.ModerationIcon, label: Q.t.JMxzCr },
    ];
function lN(e) {
    let { icon: t, title: l, body: i } = e;
    return (0, n.jsxs)("div", {
        className: lx.Lw,
        children: [
            (0, n.jsx)(t, { size: "custom", width: 20, height: 20, color: "currentColor", "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: lx.ET,
                children: [
                    (0, n.jsx)(p.E, { variant: "body-md/medium", color: "text-default", children: Q.intl.string(l) }),
                    (0, n.jsx)(p.E, { variant: "body-sm/normal", color: "text-muted", children: i }),
                ],
            }),
        ],
    });
}
function lA() {
    let e = (0, eA.E)(),
        { onChange: t } = (0, $.U)(),
        l = i.useCallback(() => t("manual"), [t]);
    return (0, n.jsxs)("section", {
        className: lx.uW,
        "aria-label": Q.intl.string(Y.default.Pottsi),
        children: [
            (0, n.jsxs)("div", {
                className: lx.jg,
                children: [
                    (0, n.jsxs)("div", {
                        className: lx.dw,
                        children: [
                            (0, n.jsxs)("div", {
                                className: lx.EQ,
                                "aria-hidden": !0,
                                children: [
                                    (0, n.jsx)(lv, { className: s()(lx.Qx, lx.On), tags: [] }),
                                    (0, n.jsx)(lv, { className: s()(lx.Qx, lx.D_), tags: lb }),
                                    (0, n.jsx)(lv, { className: s()(lx.Qx, lx.eu), tags: lC }),
                                    (0, n.jsx)(lv, { className: s()(lx.Qx, lx.z2), tags: lb }),
                                ],
                            }),
                            (0, n.jsx)(ly, { className: lx.RV }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: lx.oY,
                        children: [
                            (0, n.jsxs)("div", {
                                className: lx.C,
                                children: [
                                    (0, n.jsx)(f.D, {
                                        variant: "nitro-md",
                                        color: "text-default",
                                        children: Q.intl.string(Y.default.Pottsi),
                                    }),
                                    (0, n.jsx)(p.E, {
                                        variant: "body-md/normal",
                                        color: "text-subtle",
                                        children: Q.intl.string(Y.default["3RPyLm"]),
                                    }),
                                ],
                            }),
                            (0, n.jsxs)(lh.B, {
                                direction: "horizontal",
                                gap: 12,
                                justify: "center",
                                children: [
                                    (0, n.jsx)(eH.$, {
                                        variant: "secondary",
                                        icon: ey.ArrowAngleRightUpIcon,
                                        iconPosition: "end",
                                        text: Q.intl.string(Q.t.hvVgAZ),
                                        onClick: lp,
                                    }),
                                    e
                                        ? (0, n.jsx)(eH.$, {
                                              variant: "primary",
                                              icon: lu.CirclePlayIcon,
                                              text: Q.intl.string(Y.default.caOprb),
                                              onClick: lp,
                                          })
                                        : (0, n.jsx)(eH.$, {
                                              variant: "primary",
                                              text: Q.intl.string(Q.t.h8rgrK),
                                              onClick: l,
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: lx.Mh,
                children: [
                    (0, n.jsx)(lN, {
                        icon: F.ClipsAutoIcon,
                        title: Y.default["0+BIHX"],
                        body: Q.intl.string(Y.default["tCTA+W"]),
                    }),
                    (0, n.jsx)(lN, {
                        icon: ex.GameControllerIcon,
                        title: Y.default["x/w6AN"],
                        body: Q.intl.string(Y.default.D4abD6),
                    }),
                    (0, n.jsx)(lN, {
                        icon: lf.FiltersHorizontalIcon,
                        title: Y.default.EA8ENs,
                        body: Q.intl.format(Y.default.PvfGzE, { onClipsSettingsClick: lj }),
                    }),
                ],
            }),
        ],
    });
}
function lk() {
    return (0, n.jsxs)("section", {
        className: lx.ZK,
        "aria-label": Q.intl.string(Y.default["33gqTk"]),
        children: [
            (0, n.jsxs)("div", {
                className: lx.C,
                children: [
                    (0, n.jsx)(f.D, {
                        variant: "nitro-md",
                        color: "text-default",
                        children: Q.intl.string(Y.default["33gqTk"]),
                    }),
                    (0, n.jsx)(p.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        children: Q.intl.format(Y.default.aTozcJ, { helpArticleUrl: lr.A.getArticleURL(eE.MVz.CLIPS) }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: lx.LF,
                children: [(0, n.jsx)(ly, {}), (0, n.jsx)(lv, { tags: lb }), (0, n.jsx)(lv, { tags: lC })],
            }),
        ],
    });
}
var lE = l(770178),
    lI = l(202163),
    lS = l(68408);
function lw(e) {
    let {
            session: t,
            recentClipIds: l,
            actionsDisabled: a,
            onEdit: r,
            onClipClick: o,
            animateEntrance: c,
            entranceRowOffset: u,
            onEdgeNavigate: m,
        } = e,
        { gameRecord: h } = (0, lI.Ay)(t.applicationId),
        { onShareSession: x } = i.useContext(ta.$),
        g = i.useCallback(() => {
            x?.(t.clips);
        }, [x, t.clips]),
        j = (0, tg.P)((e) => e.setGameFacet),
        y = (0, tg.P)((e) => e.setActiveMainLink),
        v = t.applicationId,
        b = null != v && "" !== v,
        C = i.useCallback(() => {
            null != v && "" !== v && (j(v), y(er.oH.ALL_CLIPS));
        }, [v, j, y]),
        A = i.useCallback(() => {
            b ? C() : y(er.oH.ALL_CLIPS);
        }, [b, C, y]),
        k = i.useMemo(() => (null == h ? null : (h.getBannerURL(1024) ?? h.screenshotUrls?.[0] ?? null)), [h]),
        E = (0, d.yK)([M.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => M.default.getUser(e)).filter(eW.Vq);
        }),
        I = i.useMemo(() => t.clips.filter((e) => "auto" === e.clipMethod).length, [t.clips]),
        S = eY({ timestamp: t.startedAt }),
        [P, L] = i.useState(800),
        D = (0, N.A)((e) => {
            L(e.target.clientWidth);
        }),
        _ = (0, lE.w)(D),
        T = Math.max(1, (P - 40) / 3),
        R = i.useMemo(() => {
            let e = t.clips.slice(0, 6),
                l = [];
            for (let t = 0; t < e.length; t += 3) l.push(e.slice(t, t + 3));
            return l;
        }, [t.clips]),
        U = t.clips.length > 6,
        O = (0, eu.GV)(),
        z = i.useMemo(() => R.map((e) => e.length), [R]),
        { getContainerProps: H, getItemProps: F, getRowProps: G } = (0, eo.A)({ navId: O, columnCounts: z }),
        { onFocus: K, onKeyDown: V, ...$ } = H(),
        B = i.useCallback(
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
        className: lS.dZ,
        children: [
            (0, n.jsx)("div", {
                className: s()(lS.tB, null == k && lS.rD),
                style: null != k ? { backgroundImage: `url(${k})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, n.jsxs)("div", {
                className: lS.wx,
                children: [
                    b
                        ? (0, n.jsx)(eT.s, {
                              "aria-label": t.applicationName,
                              onClick: C,
                              className: lS.Zn,
                              children: (0, n.jsx)(w.A, {
                                  className: lS.Gt,
                                  game: h,
                                  size: w.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, n.jsx)(w.A, { className: lS.Gt, game: h, size: w.M.MEDIUM, "aria-hidden": !0 }),
                    (0, n.jsxs)("div", {
                        className: lS.TK,
                        children: [
                            b
                                ? (0, n.jsx)(eT.s, {
                                      "aria-label": t.applicationName,
                                      onClick: C,
                                      className: lS.wb,
                                      children: (0, n.jsx)(f.D, {
                                          variant: "body-md/medium",
                                          color: "text-default",
                                          className: lS.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, n.jsx)(f.D, {
                                      variant: "body-md/medium",
                                      color: "text-default",
                                      className: lS.mO,
                                      children: t.applicationName,
                                  }),
                            (0, n.jsxs)("div", {
                                className: lS.mI,
                                children: [
                                    (0, n.jsx)(p.E, {
                                        variant: "body-xs/normal",
                                        color: "text-muted",
                                        children: Q.intl.format(Y.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    I > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: lS.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(p.E, {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    children: Q.intl.format(Y.default.eRrt7X, { count: I }),
                                                }),
                                            ],
                                        }),
                                    (0, n.jsx)("span", { className: lS.TG, "aria-hidden": "true" }),
                                    (0, n.jsx)(p.E, { variant: "body-xs/normal", color: "text-muted", children: S }),
                                    E.length > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: lS.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(e_.A, { users: E, maxUsers: 5, size: ez._3.SIZE_16 }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    t.clips.length > 0 &&
                        null != x &&
                        (0, n.jsx)("div", {
                            className: lS.$s,
                            children: (0, n.jsx)(eH.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: tb.ShareIcon,
                                text: Q.intl.string(Y.default.l34lLs),
                                onClick: g,
                            }),
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                ref: _,
                className: lS.Vg,
                ...$,
                tabIndex: -1,
                onKeyDown: B,
                children: R.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: lS.UX,
                            ...G(t),
                            children: e.map((e, i) => {
                                let s = { width: T };
                                return (
                                    c && (s["--custom-entrance-delay"] = `${tp(u + t + i)}ms`),
                                    (0, n.jsx)(
                                        "div",
                                        {
                                            className: c ? ty.$ : void 0,
                                            style: s,
                                            children: (0, n.jsx)(to, {
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
                    className: lS.Vc,
                    children: (0, n.jsx)(eH.$, {
                        variant: "secondary",
                        size: "sm",
                        text: Q.intl.string(Y.default.pqk9U0),
                        onClick: A,
                    }),
                }),
        ],
    });
}
var lP = l(885574),
    lL = l(253932),
    lM = l(734066),
    lD = l(947568);
function l_() {
    (0, eb.openUserSettings)(ev.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING);
}
function lT() {
    let {
        visible: e,
        handleAllow: t,
        handleDontAllow: l,
    } = (function () {
        let e = (0, d.bG)([M.default], () => (0, lM.qj)(M.default.getCurrentUser())),
            t = lL.Q$.useSetting(),
            l = e && !1 === t && (0, T.C)("ClipsLibraryVoiceBanner").enabled,
            [n, a] = (0, K.kn)(l ? [U.M.AUTOCLIPPING_EARLY_ACCESS_LIBRARY_VOICE_BANNER] : []);
        return {
            visible: null != n,
            handleAllow: i.useCallback(() => {
                (a(q.i.TAKE_ACTION), (0, R.eQ)({ allowVoiceRecording: !0 }));
            }, [a]),
            handleDontAllow: i.useCallback(() => {
                a(q.i.USER_DISMISS);
            }, [a]),
        };
    })();
    return e
        ? (0, n.jsxs)("div", {
              className: lD.v,
              children: [
                  (0, n.jsx)(lP.CircleInformationIcon, {
                      size: "xs",
                      color: eg.A.colors.ICON_FEEDBACK_INFO,
                      "aria-hidden": !0,
                  }),
                  (0, n.jsx)(p.E, {
                      variant: "body-sm/normal",
                      color: "text-strong",
                      className: lD.i,
                      children: Q.intl.format(Y.default.m7PBif, { onDataPrivacyClick: l_ }),
                  }),
                  (0, n.jsxs)(lh.B, {
                      direction: "horizontal",
                      gap: 8,
                      fullWidth: !1,
                      children: [
                          (0, n.jsx)(eH.$, {
                              variant: "secondary",
                              size: "sm",
                              text: Q.intl.string(Y.default.beB8BG),
                              onClick: l,
                          }),
                          (0, n.jsx)(eH.$, {
                              variant: "primary",
                              size: "sm",
                              text: Q.intl.string(Y.default["Bk5IR+"]),
                              onClick: t,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var lR = l(799888);
let lU = { no_clips: 604, no_auto_clips: 400 };
function lO(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: a, onClipClick: s, isLoading: r, onScroll: o } = e,
        c = (0, tz.H)(),
        u = i.useMemo(() => lo(t), [t]),
        m = c && u.length > 0,
        h = (0, d.yK)([_.Ay], () => _.Ay.getNewClipIds()),
        x = (0, d.bG)([_.Ay], () => _.Ay.getExportingClipIds().size > 0),
        g = (0, tg.P)((e) => e.setActiveMainLink),
        p = i.useCallback(() => {
            g(er.oH.ALL_CLIPS);
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
        y = (0, d.bG)([A.Ay], () => A.Ay.useReducedMotion),
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
        N = i.useRef(null),
        k = i.useCallback(
            (e) => {
                let { scrollTop: t } = e.currentTarget;
                (N.current?.style.setProperty("--custom-clips-home-scroll-top", `${t}px`), o?.(t));
            },
            [o],
        ),
        E = j.length > 0 || m,
        I = (function (e) {
            let { hasContent: t, isLoading: l, totalClipCount: n, showCarousel: i } = e;
            return t ? (i ? "auto_clips" : "no_auto_clips") : l || n > 0 ? null : "no_clips";
        })({ hasContent: E, isLoading: r, totalClipCount: l, showCarousel: m }),
        S = (0, T.r)("ClipsGalleryHome").enabled ? I : null,
        w = null != S ? lU[S] : void 0,
        P =
            null != w
                ? (0, n.jsx)(la.h, {
                      ref: N,
                      color: "nitro-pink",
                      className: lR.zP,
                      style: { "--custom-clips-home-gradient-height": `${w}px` },
                      "aria-hidden": !0,
                  })
                : null;
    return E
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  P,
                  (0, n.jsx)(ls.Ch, {
                      className: lR.iR,
                      fade: !0,
                      onScroll: k,
                      children: (0, n.jsxs)("div", {
                          className: lR.Qs,
                          ref: b,
                          children: [
                              m &&
                                  (0, n.jsx)("div", {
                                      className: lR.Dk,
                                      children: (0, n.jsx)(ld, {
                                          clips: t,
                                          onEdit: a,
                                          onEdgeNavigate: C,
                                          showEducationCopy: "auto_clips" === S,
                                      }),
                                  }),
                              "no_auto_clips" === S &&
                                  (0, n.jsx)("div", { className: lR.Dk, children: (0, n.jsx)(lk, {}) }),
                              (0, n.jsx)(lT, {}),
                              j.length > 0 &&
                                  (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(f.D, {
                                              variant: "heading-lg/medium",
                                              color: "text-default",
                                              children: Q.intl.string(Y.default.zfTWDE),
                                          }),
                                          j.map((e, t) =>
                                              (0, n.jsx)(
                                                  lw,
                                                  {
                                                      session: e,
                                                      recentClipIds: h,
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
                                              className: lR.dp,
                                              children: (0, n.jsx)(eH.$, {
                                                  variant: "primary",
                                                  text: Q.intl.string(Y.default.RQtkop),
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
          ? (0, n.jsx)("div", { className: lR.dc, children: (0, n.jsx)(ec.y, {}) })
          : "no_clips" === S
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      P,
                      (0, n.jsx)(ls.Ch, {
                          className: lR.iR,
                          fade: !0,
                          onScroll: k,
                          children: (0, n.jsx)("div", {
                              className: lR.Qs,
                              children: (0, n.jsx)("div", { className: lR.Dk, children: (0, n.jsx)(lA, {}) }),
                          }),
                      }),
                  ],
              })
            : (0, n.jsx)(eP, { isEmptyBecauseQuery: l > 0 });
}
var lz = l(837381),
    lH = l(741918),
    lF = l(812993),
    lG = l(332837),
    lK = l(95362),
    lV = l(625903),
    l$ = l(260762),
    lB = l(599428);
function lq(e) {
    let { itemId: t, icon: l, label: i, onClick: a, isSelected: r = !1, isDisabled: o = !1, badgeCount: c = 0 } = e,
        d = o && !r,
        u = (0, lz.rm)(t);
    return (0, n.jsx)(j.m, {
        text: i,
        position: "right",
        children: (0, n.jsxs)(eR.D, {
            ...u,
            role: "button",
            onClick: d ? void 0 : a,
            "aria-pressed": r,
            "aria-disabled": d,
            "aria-label": i,
            className: s()(lB.AY, { [lB.Hy]: r, [lB.Is]: d }),
            children: [l, c > 0 && (0, n.jsx)("span", { className: lB.e, children: (0, n.jsx)(lF.hV, { count: c }) })],
        }),
    });
}
function lY(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: a } = e,
        r = (0, tg.P)((e) => e.activeMainLink),
        o = (0, tg.P)((e) => e.gameFacet),
        c = (0, tg.P)((e) => e.clippedWithFacet),
        d = (0, tg.P)((e) => e.setActiveMainLink),
        u = (0, tg.P)((e) => e.setGameFacet),
        m = (0, tg.P)((e) => e.setClippedWithFacet),
        h = (0, tg.P)((e) => e.clearFilters),
        f = (0, tg.P)((e) => e.setPendingContentFocus),
        x = (0, tz.H)(),
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
                (u(o === e ? null : e), m(null), d(er.oH.ALL_CLIPS), h(), y());
            },
            [o, u, m, d, h, y],
        ),
        C = i.useCallback(() => {
            (0, eb.openUserSettings)(ev.X.CLIPS_PANEL);
        }, []),
        N = i.useMemo(() => t.map((e) => e.key), [t]),
        A = (0, S.A)(N),
        k = i.useMemo(() => new Map(A.map((e) => [e?.id, e])), [A]),
        E = (0, eu.GV)(),
        I = (0, l$.A)(E),
        { setFocus: P } = I,
        L = o ?? r;
    i.useEffect(() => {
        P(L);
    }, [P, L]);
    let { ref: M, onKeyDown: D, ..._ } = (0, lz.LT)(I),
        T = i.useCallback(
            (e) => {
                j.current = e.key === lH.D$.ENTER || e.key === lH.D$.SPACE;
                try {
                    D(e);
                } finally {
                    j.current = !1;
                }
            },
            [D],
        );
    return (0, n.jsx)(lz.hD, {
        navigator: I,
        children: (0, n.jsxs)("div", {
            className: lB.H$,
            ..._,
            tabIndex: -1,
            onKeyDown: T,
            ref: M,
            children: [
                (0, n.jsxs)("div", {
                    className: s()(lB.o3, lB.A9),
                    children: [
                        (0, n.jsx)(lq, {
                            itemId: er.oH.HOME,
                            icon: (0, n.jsx)(lG.HomeIcon, { size: "sm", color: "currentColor" }),
                            label: Q.intl.string(Y.default.iVqj8B),
                            isSelected: p(er.oH.HOME),
                            onClick: () => v(er.oH.HOME),
                        }),
                        (0, n.jsx)(lq, {
                            itemId: er.oH.ALL_CLIPS,
                            icon: (0, n.jsx)(H.ClipsIcon, { size: "sm", color: "currentColor" }),
                            label: Q.intl.string(Q.t.dPVrEv),
                            isSelected: p(er.oH.ALL_CLIPS),
                            isDisabled: 0 === l.allClips,
                            badgeCount: a.allClips,
                            onClick: () => v(er.oH.ALL_CLIPS),
                        }),
                        x &&
                            (0, n.jsx)(lq, {
                                itemId: er.oH.AUTO_CLIPS,
                                icon: (0, n.jsx)(F.ClipsAutoIcon, { size: "sm", color: "currentColor" }),
                                label: Q.intl.string(Y.default.ikNKf1),
                                isSelected: p(er.oH.AUTO_CLIPS),
                                isDisabled: 0 === l.autoClips,
                                badgeCount: a.autoClips,
                                onClick: () => v(er.oH.AUTO_CLIPS),
                            }),
                        (0, n.jsx)(lq, {
                            itemId: er.oH.FAVORITES,
                            icon: (0, n.jsx)(tN.StarIcon, { size: "sm", color: "currentColor" }),
                            label: Q.intl.string(Q.t["9rlCk1"]),
                            isSelected: p(er.oH.FAVORITES),
                            onClick: () => v(er.oH.FAVORITES),
                        }),
                    ],
                }),
                t.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { className: lB.Gz }),
                            (0, n.jsx)(lK.Ip, {
                                className: s()(lB.UZ, lB.A9),
                                fade: !0,
                                children: t.map((e) => {
                                    let t = o === e.key;
                                    return (0, n.jsx)(
                                        lq,
                                        {
                                            itemId: e.key,
                                            icon: (0, n.jsx)(w.A, {
                                                game: k.get(e.key),
                                                size: w.M.SMALL,
                                                className: lB.az,
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
                    className: s()(lB.Ms, lB.A9),
                    children: (0, n.jsx)(lq, {
                        itemId: "settings",
                        icon: (0, n.jsx)(lV.SettingsIcon, { size: "sm", color: "currentColor" }),
                        label: Q.intl.string(Q.t["3D5yo/"]),
                        onClick: C,
                    }),
                }),
            ],
        }),
    });
}
var lQ = l(409067),
    lX = l(314484);
function lW(e) {
    var t, a;
    let U,
        O,
        z,
        {
            channelId: H,
            onClose: F,
            picker: G,
            transitionState: K,
            initialEditingClipId: V,
            initialMainLink: $ = er.oH.HOME,
            ...B
        } = e;
    (0, es.A)();
    let { analyticsLocations: q } = (0, E.Ay)(k.A.CLIPS_GALLERY),
        X = G?.onPick,
        W = (0, T.r)("ClipsGalleryModal").enabled && null == G,
        Z = G?.allowMultiSelect ?? !0,
        [J, eo] = i.useState(new Set()),
        ec = i.useRef(null),
        ed = (0, N.A)((e) => {
            let t = ec.current;
            if (null == t) return;
            let l = Math.min(1, Math.max(0, e) / 40);
            t.style.setProperty("--custom-clips-header-solid-opacity", `${l}`);
        }),
        {
            gamesFacet: eu,
            participantsFacet: em,
            filteredClips: eh,
            mainLinkCounts: ef,
            mainLinkNewCounts: ex,
            allClips: eg,
        } = (0, lQ.ad)(G?.filterClip),
        ep = (0, d.bG)([_.Ay], () => _.Ay.getSettings().storageLocation),
        [ej, ey] = i.useState(!0);
    i.useEffect(() => {
        (async function () {
            ey(!0);
            try {
                await (0, R.Fb)(ep);
            } finally {
                ey(!1);
            }
        })().catch(() => {});
    }, [ep]);
    let { onShareClick: ev } = (0, ea.A)(H);
    (i.useEffect(
        () => () => {
            (tg.P.getState().resetAll(), (0, R.Su)());
        },
        [],
    ),
        i.useEffect(() => {
            let e = tg.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink($);
        }, [$]),
        (0, o.l0)(() => {
            _.Ay.hasClips() && L.A.isDeveloper && P.Ay.fireSurveyAction(c.w.POPULATED_CLIP_GALLERY_CLOSED);
        }));
    let eb = (0, d.bG)([_.Ay], () => _.Ay.getExportingClipIds().size > 0),
        [eC, eN] = i.useState(null != V ? "editing" : "gallery"),
        [eA, ek] = i.useState(V ?? null),
        eE = (0, d.bG)([_.Ay], () => (null != eA ? _.Ay.getClipById(eA) : null), [eA]),
        eI = (0, u.LA)(e7.nm),
        [eS, ew] = i.useState(!1);
    ((t = i.useCallback(() => ew(!0), [])),
        (a = eI && "gallery" === eC && !eS),
        (U = i.useRef(Array(tw.length).fill(""))),
        (O = i.useRef(0)),
        (z = i.useRef(t)),
        i.useEffect(() => {
            z.current = t;
        }, [t]),
        i.useEffect(() => {
            if (!a) return;
            let e = U.current;
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
                    ((e[O.current] = t.key.toLowerCase()), (O.current = (O.current + 1) % tw.length));
                    for (let t = 0; t < tw.length; t++) if (e[(O.current + t) % tw.length] !== tw[t]) return;
                    z.current();
                }
            }
            return (
                document.addEventListener("keydown", t, { capture: !0, passive: !0 }),
                () => {
                    (document.removeEventListener("keydown", t, { capture: !0 }), e.fill(""), (O.current = 0));
                }
            );
        }, [a]),
        i.useEffect(() => {
            if (eS)
                return (
                    document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0)
                );
            function e(e) {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation());
            }
        }, [eS]));
    let eP = i.useRef(eC);
    ((eP.current = eC), (i.useRef(eA).current = eA));
    let [eL, eM] = i.useState(null != V ? h.ip.ENTERED : h.ip.HIDDEN),
        eD = i.useRef(null),
        e_ = (0, tg.P)((e) => e.gameFacet),
        eT = (0, tg.P)((e) => e.clippedWithFacet),
        eR = (0, tg.P)((e) => e.activeMainLink),
        eU = (0, tg.P)((e) => e.currentPage),
        eO = eU === er.fB.HOME,
        { ref: ez, height: eH = 64 } = (0, C.Ay)(eU),
        eF = 68 + eH,
        eG = eO ? 68 : eF - 16;
    i.useLayoutEffect(() => {
        ed(0);
    }, [eU, ed]);
    let eK = (0, tg.P)((e) => e.pendingContentFocus),
        eV = (0, tg.P)((e) => e.setPendingContentFocus),
        e$ = i.useRef(null);
    i.useEffect(() => {
        if (!eK) return;
        let e = 0,
            t = 0;
        return (
            (t = requestAnimationFrame(function l() {
                let n = e$.current?.querySelector('[role="grid"] [role="button"]');
                if (null != n) {
                    (n.focus(), eV(!1));
                    return;
                }
                if (e++ < 10) {
                    t = requestAnimationFrame(l);
                    return;
                }
                eV(!1);
            })),
            () => cancelAnimationFrame(t)
        );
    }, [eK, eV]);
    let eB = (0, tg.P)(
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
        eR === er.oH.HOME && eB && tg.P.getState().setActiveMainLink(er.oH.ALL_CLIPS);
    }, [eR, eB]);
    let eq = i.useMemo(() => (null != e_ ? [e_] : []), [e_]),
        eY = (0, S.A)(eq)[0] ?? null,
        eQ = (0, d.bG)([M.default], () => (null != eT ? M.default.getUser(eT) : null), [eT]),
        eX = i.useMemo(() => {
            if (null != e_) return eu.find((e) => e.key === e_)?.name ?? Q.intl.string(Q.t.dPVrEv);
            if (null != eT) return null != eQ ? (eQ.globalName ?? eQ.username) : eT;
            switch (eR) {
                case er.oH.FAVORITES:
                    return Q.intl.string(Q.t["9rlCk1"]);
                case er.oH.AUTO_CLIPS:
                    return Q.intl.string(Y.default.ikNKf1);
                case er.oH.HOME:
                    return Q.intl.string(Y.default.iVqj8B);
                default:
                    return Q.intl.string(Q.t.dPVrEv);
            }
        }, [e_, eT, eR, eu, eQ]),
        eW = i.useMemo(() => {
            if (null != e_) return eu.find((e) => e.key === e_)?.count ?? 0;
            if (null != eT) return em.find((e) => e.key === eT)?.count ?? 0;
            switch (eR) {
                case er.oH.HOME:
                    return null;
                case er.oH.AUTO_CLIPS:
                    return ef.autoClips;
                case er.oH.FAVORITES:
                    return ef.favorites;
                default:
                    return ef.allClips;
            }
        }, [e_, eT, eR, eu, em, ef]),
        eZ = i.useCallback(() => {
            (eN("editing"), A.Ay.useReducedMotion && eM(h.ip.ENTERED));
        }, []),
        eJ = i.useCallback((e) => {
            eo((t) => {
                let l = new Set(t);
                return (l.has(e) ? l.delete(e) : l.add(e), l);
            });
        }, []),
        e0 = i.useCallback(
            (e) => {
                (ek(e.id), eZ());
            },
            [eZ],
        ),
        e1 = i.useRef(null != V),
        e3 = i.useCallback(() => {
            ((e1.current = !1), A.Ay.useReducedMotion && ek(null), eN("gallery"));
        }, []),
        e2 = i.useCallback(() => {
            e1.current ? F() : e3();
        }, [e3, F]);
    (i.useEffect(() => {
        function e(e) {
            "Escape" === e.key && "editing" === eP.current && eI && (e.stopPropagation(), e2());
        }
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [e2, F, eI]),
        i.useEffect(() => {
            function e(e) {
                if (
                    ("f" !== e.key && "F" !== e.key) ||
                    e.altKey ||
                    e.shiftKey ||
                    ((0, D.cX)() ? !e.metaKey || e.ctrlKey : !e.ctrlKey || e.metaKey) ||
                    !eI ||
                    "gallery" !== eP.current
                )
                    return;
                (e.preventDefault(), e.stopPropagation());
                let t = tg.P.getState();
                (t.currentPage === er.fB.HOME && t.setActiveMainLink(er.oH.ALL_CLIPS), t.setPendingSearchFocus(!0));
            }
            return (document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0));
        }, [eI]),
        i.useEffect(
            () =>
                "editing" === eC && null != eA
                    ? void (0, R.YK)(eA)
                    : ((0, R.TE)(),
                      () => {
                          (0, R.TE)();
                      }),
            [eC, eA],
        ));
    let e9 = i.useCallback(() => {
            eo(new Set());
        }, []),
        e6 = J.size > 0,
        e5 = i.useCallback(() => {
            let e = eg.filter((e) => J.has(e.id));
            (0, u.mM)(
                async () => {
                    let { default: t } = await l.e(913367).then(l.bind(l, 223818));
                    return (l) =>
                        (0, n.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                (e9(), l.onClose());
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [eg, J, e9]),
        e8 = i.useCallback(async () => {
            let e = eg.filter((e) => J.has(e.id));
            await ev({ clips: e, onShared: e9 });
        }, [eg, J, ev, e9]),
        e4 = i.useCallback(
            async (e) => {
                0 !== e.length && (eo(new Set(e.map((e) => e.id))), await ev({ clips: e }), e9());
            },
            [ev, e9],
        ),
        te = i.useCallback(() => {
            let e = tg.P.getState();
            (e.setGameFacet(null),
                e.setClippedWithFacet(null),
                e.setActiveMainLink(er.oH.ALL_CLIPS),
                e.setPendingSearchFocus(!0));
        }, []),
        tt = i.useMemo(() => {
            let e = eg.filter((e) => J.has(e.id));
            return e.length > 0 && e.every((e) => e.isFavorite);
        }, [eg, J]),
        tl = i.useCallback(async () => {
            let e = eg.filter((e) => J.has(e.id)),
                t = !tt;
            (await Promise.all(e.filter((e) => e.isFavorite !== t).map((e) => (0, R.Yy)(e.id, { isFavorite: t }, !0))),
                e9());
        }, [eg, J, tt, e9]),
        tn = i.useMemo(() => {
            let e = 0,
                t = 0,
                l = 0;
            return (
                eg.forEach((n) => {
                    switch (n.decision?.signal?.type) {
                        case e7.Gy.MANUAL:
                            l++;
                            break;
                        case e7.Gy.DISTRIBUTED:
                            t++;
                            break;
                        case void 0:
                            break;
                        default:
                            e++;
                    }
                }),
                {
                    number_of_clips_loaded: eg.length,
                    num_autoclips_loaded: e,
                    num_distributed_clips_loaded: t,
                    num_manual_clips_loaded: l,
                    gallery_page: eR,
                }
            );
        }, [eg, eR]);
    (0, I.A)(
        { type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.CLIP_GALLERY_VIEWED, properties: tn },
        { disableTrack: ej },
        [tn, ej],
    );
    let ti = i.useMemo(
        () => ({
            selectedClipIds: J,
            toggleClipSelection: eJ,
            clearSelection: e9,
            isMultiSelectMode: e6,
            picker: G,
            onShareSession: Z ? e4 : void 0,
        }),
        [J, eJ, e9, e6, G, Z, e4],
    );
    return (0, n.jsx)(E.f5, {
        value: q,
        children: (0, n.jsx)(ta.$.Provider, {
            value: ti,
            children: (0, n.jsx)(m.N, {
                onClose: F,
                transitionState: K,
                "aria-label": eS ? "Doggo Game" : void 0,
                ...B,
                children: eS
                    ? (0, n.jsx)(tS, { onClose: F })
                    : (0, n.jsxs)("div", {
                          className: lX.jT,
                          ref: eD,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: s()(lX.PD, "gallery" === eC && lX.vu),
                                  inert: "gallery" !== eC,
                                  children: [
                                      (0, n.jsx)(lY, { gamesFacet: eu, mainLinkCounts: ef, mainLinkNewCounts: ex }),
                                      (0, n.jsxs)("div", {
                                          className: lX.Qs,
                                          ref: e$,
                                          style: {
                                              "--custom-clips-header-height": "68px",
                                              "--custom-clips-scroll-inset": `${eG}px`,
                                          },
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  ref: ec,
                                                  className: s()(lX.$Q, !eO && lX.iF),
                                                  children: [
                                                      (0, n.jsxs)("div", {
                                                          className: lX.ev,
                                                          children: [
                                                              null != e_ &&
                                                                  (0, n.jsx)(w.A, {
                                                                      game: eY,
                                                                      size: w.M.SMALL,
                                                                      className: lX.Ve,
                                                                      "aria-hidden": !0,
                                                                  }),
                                                              (0, n.jsx)(f.D, {
                                                                  variant: "heading-sm/semibold",
                                                                  color: "text-default",
                                                                  className: lX.Yn,
                                                                  children: eX,
                                                              }),
                                                              null == e_ &&
                                                                  null == eT &&
                                                                  (eR === er.oH.AUTO_CLIPS ||
                                                                      (W && eR === er.oH.HOME)) &&
                                                                  (0, n.jsx)(x.E, {
                                                                      icon: g.NitroWheelIcon,
                                                                      type: "early_access",
                                                                      variant: "primary",
                                                                  }),
                                                              null != eW &&
                                                                  !eB &&
                                                                  (0, n.jsxs)("div", {
                                                                      className: lX.Vl,
                                                                      children: [
                                                                          (0, n.jsx)("span", {
                                                                              className: lX.FK,
                                                                              "aria-hidden": "true",
                                                                          }),
                                                                          (0, n.jsx)(p.E, {
                                                                              variant: "body-md/normal",
                                                                              color: "text-muted",
                                                                              children: Q.intl.format(
                                                                                  Y.default["+YIqQM"],
                                                                                  { count: eW },
                                                                              ),
                                                                          }),
                                                                      ],
                                                                  }),
                                                          ],
                                                      }),
                                                      (0, n.jsxs)("div", {
                                                          className: lX.o5,
                                                          children: [
                                                              W &&
                                                                  (0, n.jsx)(ee, {
                                                                      showOffEducation: "gallery" === eC && eI,
                                                                  }),
                                                              (0, n.jsxs)("div", {
                                                                  className: lX.$s,
                                                                  children: [
                                                                      (0, n.jsx)(j.m, {
                                                                          position: "bottom",
                                                                          text: Q.intl.string(Q.t["5h0QOP"]),
                                                                          children: (0, n.jsx)(y.K, {
                                                                              onClick: te,
                                                                              icon: v.MagnifyingGlassIcon,
                                                                              size: "sm",
                                                                              variant: "icon-only",
                                                                              "aria-label": Q.intl.string(
                                                                                  Q.t["5h0QOP"],
                                                                              ),
                                                                          }),
                                                                      }),
                                                                      (0, n.jsx)(j.m, {
                                                                          position: "bottom",
                                                                          text: Q.intl.string(Q.t.cpT0Cq),
                                                                          children: (0, n.jsx)(y.K, {
                                                                              onClick: F,
                                                                              icon: b.XLargeIcon,
                                                                              size: "sm",
                                                                              variant: "icon-only",
                                                                              "aria-label": Q.intl.string(Q.t.cpT0Cq),
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                              eO
                                                  ? (0, n.jsx)(lO, {
                                                        filteredClips: eh,
                                                        totalClipCount: eg.length,
                                                        onEdit: e0,
                                                        onClipClick: X,
                                                        isLoading: ej,
                                                        onScroll: ed,
                                                    })
                                                  : (0, n.jsxs)("div", {
                                                        className: lX.LG,
                                                        children: [
                                                            (0, n.jsx)("div", {
                                                                className: lX.oP,
                                                                ref: ez,
                                                                children: (0, n.jsx)(ln, {
                                                                    allClips: eg,
                                                                    gamesFacet: eu,
                                                                    participantsFacet: em,
                                                                }),
                                                            }),
                                                            (0, n.jsx)(tv, {
                                                                onEdit: e0,
                                                                channelId: H,
                                                                filteredClips: eh,
                                                                totalClipCount: eg.length,
                                                                onClipClick: X,
                                                                isLoading: ej,
                                                                topInset: eF,
                                                            }),
                                                        ],
                                                    }),
                                              Z &&
                                                  e6 &&
                                                  (0, n.jsx)(tE, {
                                                      selectedCount: J.size,
                                                      allSelectedFavorited: tt,
                                                      onClear: e9,
                                                      onFavorite: tl,
                                                      onDelete: e5,
                                                      onShare: e8,
                                                      isSharing: eb,
                                                  }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, n.jsx)("div", {
                                  className: s()(lX.jN, "editing" === eC && lX.vu),
                                  inert: "editing" !== eC,
                                  onTransitionEnd: () => {
                                      switch (eC) {
                                          case "gallery":
                                              (ek(null), eM(h.ip.HIDDEN));
                                              break;
                                          case "editing":
                                              eM(h.ip.ENTERED);
                                      }
                                  },
                                  children:
                                      null != eE &&
                                      (0, n.jsx)(et.p, {
                                          clip: eE,
                                          modalContainerRef: eD,
                                          children: (0, n.jsxs)(
                                              ei.JQ,
                                              {
                                                  children: [
                                                      (0, n.jsx)(en.A, {
                                                          transitionState: eL,
                                                          onClose: e2,
                                                          onBack: e3,
                                                      }),
                                                      (0, n.jsx)(el.A, { channelId: H, onClose: e2, onExit: F }),
                                                  ],
                                              },
                                              eE.id,
                                          ),
                                      }),
                              }),
                          ],
                      }),
            }),
        }),
    });
}
