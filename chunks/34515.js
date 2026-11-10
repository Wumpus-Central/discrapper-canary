l.d(t, { default: () => lQ });
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
    D = l(287809),
    M = l(723702),
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
    B = l(49999),
    q = l(683825),
    Y = l(792996),
    Q = l(829766);
let X = [
    { mode: "off", icon: z.DenyIcon },
    { mode: "manual", icon: H.ClipsIcon },
    { mode: "auto", icon: F.ClipsAutoIcon },
];
function W(e) {
    let { targetElementRef: t } = e,
        [l, i] = (0, K.kn)([U.M.AUTOCLIPPING_EARLY_ACCESS_LIBRARY_EDUCATION_POPOVER], { bypassAutoDismiss: !0 });
    return l !== U.M.AUTOCLIPPING_EARLY_ACCESS_LIBRARY_EDUCATION_POPOVER
        ? null
        : (0, n.jsx)(O.A, {
              targetElementRef: t,
              position: "bottom",
              alignmentStrategy: "trigger-center",
              badge: "early_access",
              title: Y.intl.string(q.default.yriD3v),
              body: Y.intl.string(q.default.UBihuW),
              onRequestClose: () => i(B.i.USER_DISMISS),
              actions: [
                  { text: Y.intl.string(Y.t["NX+WJN"]), variant: "secondary", onClick: () => i(B.i.TAKE_ACTION) },
              ],
          });
}
function Z(e) {
    let { mode: t, icon: l, selected: a, tooltip: s, onSelect: r, onKeyDown: o } = e,
        c = i.useRef(null),
        d = (function (e) {
            switch (e) {
                case "off":
                    return Y.intl.string(q.default["uO/2T5"]);
                case "manual":
                    return Y.intl.string(q.default.ms4ibY);
                case "auto":
                    return Y.intl.string(q.default["4gzBi+"]);
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
                className: Q.m,
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
function J(e) {
    let { showOffEducation: t = !1 } = e,
        { value: l, onChange: a } = (0, $.U)(),
        s = (0, V.T)(),
        r = i.useRef(null);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                ref: r,
                className: Q.O,
                role: "radiogroup",
                "aria-label": Y.intl.string(q.default.eIX9be),
                children: X.map((e, t) => {
                    let { mode: i, icon: o } = e;
                    return (0, n.jsx)(
                        Z,
                        {
                            mode: i,
                            icon: o,
                            selected: i === l,
                            tooltip: (function (e, t) {
                                switch (e) {
                                    case "off":
                                        return Y.intl.string(q.default.ElHi4v);
                                    case "manual":
                                        return t.length > 0
                                            ? Y.intl.formatToPlainString(q.default.QoCXBT, { keybind: t })
                                            : Y.intl.string(q.default.YlBcu8);
                                    case "auto":
                                        return Y.intl.string(q.default["bF6l+Y"]);
                                }
                            })(i, s),
                            onSelect: a,
                            onKeyDown: (e) =>
                                (function (e, t) {
                                    let l;
                                    if (!e.altKey && !e.ctrlKey && !e.metaKey) {
                                        switch (e.key) {
                                            case "ArrowRight":
                                            case "ArrowDown":
                                                l = (t + 1) % X.length;
                                                break;
                                            case "ArrowLeft":
                                            case "ArrowUp":
                                                l = (t + X.length - 1) % X.length;
                                                break;
                                            case "Home":
                                                l = 0;
                                                break;
                                            case "End":
                                                l = X.length - 1;
                                                break;
                                            default:
                                                return;
                                        }
                                        (e.preventDefault(),
                                            r.current?.querySelectorAll('[role="radio"]')[l]?.focus(),
                                            a(X[l].mode));
                                    }
                                })(e, t),
                        },
                        i,
                    );
                }),
            }),
            t && "off" === l && (0, n.jsx)(W, { targetElementRef: r }),
        ],
    });
}
var ee = l(923904),
    et = l(701266),
    el = l(423699),
    en = l(663357),
    ei = l(352527),
    ea = l(280483),
    es = l(111994);
l(321073);
var er = l(118057),
    eo = l(289873),
    ec = l(962125),
    ed = l(915089),
    eu = l(62617);
function em(e) {
    let { alt: t, ariaLabel: l, ariaHidden: a, role: s, width: r, height: o, className: c, style: d } = e,
        u = i.useMemo(
            () => (0, eu.H)({ width: r, height: o, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [r, o, d],
        );
    return (0, n.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/1e6b3a97c86291528609222cdeb8b18fdcce3270f796106d4af3d0f7fa3cce18.svg",
        className: (0, eu.Z)(c),
        alt: t,
        "aria-label": l,
        "aria-hidden": a,
        role: s ?? "img",
    });
}
var eh = l(164636),
    ef = l(687966),
    ex = l(646514),
    eg = l(475358),
    ep = l(123292),
    ej = l(292801),
    ey = l(780964),
    ev = l(766075),
    eb = l(532624),
    eC = l(350535),
    eN = l(572164),
    eA = l(953932),
    ek = l(652215),
    eE = l(71967);
function eI(e) {
    let { header: t, description: l } = e;
    return (0, n.jsxs)("div", {
        className: eE.Nr,
        children: [t, (0, n.jsx)(p.E, { color: "text-default", variant: "body-sm/medium", children: l })],
    });
}
function eS() {
    let e = (0, eh.bG)([eb.Ay], () => eb.Ay.getKeybindForAction(ek.hCu.SAVE_CLIP)),
        t = null != e ? eC.dI(e.shortcut, !0) : null;
    return (0, n.jsxs)("div", {
        className: eE.kR,
        children: [
            (0, n.jsx)(eI, {
                header: (0, n.jsx)(ef.GameControllerIcon, { size: "refresh_sm", color: ex.A.colors.ICON_DEFAULT }),
                description: Y.intl.string(q.default["4K56sP"]),
            }),
            (0, n.jsx)(eI, {
                header: null != t ? (0, n.jsx)(eg.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  Y.intl.format(q.default.BIwQis, { keybind: t }),
                                  (0, n.jsx)("div", {
                                      className: eE.JH,
                                      children: (0, n.jsx)(ep.Q, {
                                          text: Y.intl.string(q.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "body-sm/medium",
                                          onClick: function () {
                                              (0, ev.openUserSettings)(ey.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : Y.intl.string(q.default.HOUDUm),
            }),
            (0, n.jsx)(eI, {
                header: (0, n.jsx)(ej.ArrowAngleRightUpIcon, { size: "refresh_sm", color: ex.A.colors.ICON_DEFAULT }),
                description: Y.intl.string(q.default.DLzdl7),
            }),
        ],
    });
}
function ew(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, eN.E)(),
        a = (0, T.r)("ClipsGalleryEmptyState").enabled,
        { onChange: s } = (0, $.U)(),
        r = i.useCallback(() => s("manual"), [s]);
    return (0, n.jsx)("div", {
        className: eE.kL,
        children: (0, n.jsxs)("div", {
            className: eE.Qs,
            children: [
                (0, n.jsx)(em, { width: 213, height: 135, alt: "" }),
                (0, n.jsx)(f.D, {
                    className: eE.wx,
                    variant: "heading-xl/semibold",
                    children: t ? Y.intl.string(q.default["+M2iLf"]) : Y.intl.string(q.default.m2GEpP),
                }),
                t &&
                    (0, n.jsx)(p.E, {
                        className: eE.h_,
                        variant: "body-md/medium",
                        children: Y.intl.string(q.default.xkY5xS),
                    }),
                !l &&
                    (0, n.jsx)("div", {
                        className: eE.SO,
                        children: (0, n.jsx)(eA.A, { onEnableClips: a ? r : void 0 }),
                    }),
                l && !t && (0, n.jsx)(eS, {}),
            ],
        }),
    });
}
let eP = 4 / 3;
var eL = l(621466),
    eD = l(61491),
    eM = l(342952),
    e_ = l(890856),
    eT = l(939249),
    eR = l(820081),
    eU = l(365199),
    eO = l(778712),
    ez = l(821609),
    eH = l(22231),
    eF = l(983851),
    eG = l(31300),
    eK = l(442433),
    eV = l(587895),
    e$ = l(927813),
    eB = l(995273);
function eq(e) {
    let { timestamp: t, abbreviated: l = !0 } = e,
        [n, a] = i.useState(() => (0, eB.jb)(t, l));
    return (
        i.useEffect(() => {
            a((0, eB.jb)(t, l));
            let e = Date.now() - t;
            if (e > e$.A.Millis.DAY) return;
            let n = e >= e$.A.Millis.HOUR ? e$.A.Millis.HOUR : e$.A.Millis.MINUTE,
                i = setInterval(
                    () => {
                        a((0, eB.jb)(t, l));
                    },
                    n,
                    n - (e % n),
                );
            return () => clearInterval(i);
        }, [t, l]),
        n
    );
}
var eY = l(549685),
    eQ = l(129230),
    eX = l(403362),
    eW = l(53677),
    eZ = l(609174),
    eJ = l(151184),
    e0 = l(82716),
    e1 = l(449397),
    e3 = l(399053),
    e2 = l(285072),
    e9 = l(284009),
    e6 = l.n(e9),
    e5 = l(460905),
    e4 = l(443184),
    e8 = l(696016),
    e7 = l(153511);
function te(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    e6()(l?.type === e8.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let i = (0, d.bG)([D.default], () => D.default.getUser(l.remoteTriggerUserId));
    if (null == i) return null;
    let a = i.globalName ?? i.username;
    return (0, n.jsx)(j.m, {
        text: Y.intl.string(q.default.vTTkFF),
        children: (0, n.jsxs)("div", {
            className: e7.S,
            children: [
                (0, n.jsx)("img", { src: i.getAvatarURL(null, 12, !1), className: e7.$, alt: a }),
                (0, n.jsx)(p.E, {
                    color: "text-overlay-light",
                    variant: "body-xs/medium",
                    children: Y.intl.formatToPlainString(q.default.QJ7i8Z, { username: a }),
                }),
            ],
        }),
    });
}
function tt(e) {
    let { icon: t, text: l, tooltipText: i } = e;
    return (0, n.jsx)(j.m, {
        text: i,
        children: (0, n.jsxs)("div", {
            className: e7.S,
            children: [
                (0, n.jsx)(t, { size: "xxs", color: "currentColor" }),
                (0, n.jsx)(p.E, { color: "text-overlay-light", variant: "body-xs/medium", children: l }),
            ],
        }),
    });
}
function tl(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === e8.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case e8.Gy.DISTRIBUTED:
            return (0, n.jsx)(te, { clip: t });
        case e8.Gy.LAUGHTER:
            return (0, n.jsx)(tt, {
                icon: e5.ReactionIcon,
                text: Y.intl.string(q.default.bTC23D),
                tooltipText: Y.intl.string(q.default["ry+jxm"]),
            });
        case e8.Gy.SHOUTING:
            return (0, n.jsx)(tt, {
                icon: e5.ReactionIcon,
                text: Y.intl.string(q.default["3gqpuo"]),
                tooltipText: Y.intl.string(q.default["ry+jxm"]),
            });
        case e8.Gy.GAME_EVENT: {
            let e = (0, e4.u6)(t.applicationId, e8.Gy.GAME_EVENT, t.decision.signal.eventName);
            if (null == e) return null;
            return (0, n.jsx)(tt, {
                icon: e,
                text: (0, e4.PZ)(t.applicationId, e8.Gy.GAME_EVENT, t.decision.signal.eventName) ?? "",
                tooltipText: Y.intl.string(q.default["347DBb"]),
            });
        }
        default:
            return null;
    }
}
var tn = l(718812),
    ti = l(721610),
    ta = l(686320),
    ts = l(175764);
function tr(e) {
    let { clip: t, actionsDisabled: l, isNew: i, onClick: a, onEdit: s, gridItemProps: r } = e;
    return (0, n.jsx)(eZ.Cl, {
        clip: t,
        children: (0, n.jsx)(to, { actionsDisabled: l, isNew: i, onClick: a, onEdit: s, gridItemProps: r }),
    });
}
function to(e) {
    let { actionsDisabled: t, isNew: a, onClick: r, onEdit: o, gridItemProps: c } = e,
        u = (0, eZ.Y_)(),
        m = !0 === u.pending,
        h = t || m,
        { analyticsLocations: f } = (0, E.Ay)(k.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: x, toggleClipSelection: g, isMultiSelectMode: p, picker: j } = i.useContext(ti.$),
        y = j?.allowMultiSelect ?? !0,
        v = null != j ? (0, ta.$)(j.action).label : void 0,
        [b, C] = i.useState(!1),
        [N, I] = i.useState(!1),
        [S, w] = i.useState(!1),
        [P, L] = i.useState(!1),
        [D, M] = i.useState(0),
        T = x.has(u.id),
        R = u.type === e8.nQ.SCREENSHOT,
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
                              .filter(eX.Vq)
                        : [u];
                (0, eK.L3)(
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
                                    eQ.default.track(ek.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...eW.lc(),
                                        ...eW.Zy(u),
                                    });
                                },
                                onEdit: () => {
                                    (o(u),
                                        eQ.default.track(ek.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...eW.lc(),
                                            ...eW.Zy(u),
                                        }));
                                },
                                onBeforeDelete: K,
                                onAfterDelete: () => {
                                    eQ.default.track(ek.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...eW.lc(),
                                        ...eW.Zy(u),
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
                    eQ.default.track(ek.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" }));
            },
            [o, u],
        ),
        Z = i.useCallback(
            (e) => {
                !h &&
                    (!(0, eL.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") &&
                            null == e.target.closest("[data-clips-progress]") &&
                            null == e.target.closest("[data-clips-select]") &&
                            e.currentTarget.contains(e.target))) &&
                    (y && e.shiftKey ? (e.preventDefault(), g(u.id)) : y && p ? g(u.id) : null != r && r(u),
                    eQ.default.track(ek.HAw.CLIP_GALLERY_CARD_CLICKED, { ...eW.lc(), ...eW.Zy(u) }));
            },
            [h, y, p, g, u, r],
        );
    return (0, n.jsx)(E.f5, {
        value: f,
        children: (0, n.jsx)("div", {
            className: ts.hl,
            onFocus: H,
            onBlur: F,
            children: (0, n.jsx)(e_.s, {
                "aria-disabled": h,
                "aria-label": v ?? Y.intl.string(R ? Y.t["HO/oXl"] : Y.t.bt75uw),
                onClick: h ? void 0 : Z,
                onContextMenu: Q,
                buttonProps: null != c ? { role: "button", id: c.id, tabIndex: c.tabIndex } : void 0,
                buttonRef: c?.ref,
                onFocus: c?.onFocus,
                className: s()(ts.Nr, { [ts.r9]: h, [ts.in]: b, [ts.wH]: T }),
                onMouseEnter: () => I(!0),
                onMouseLeave: () => I(!1),
                children: (0, n.jsx)("div", {
                    className: ts.w7,
                    children: (0, n.jsxs)(tc, {
                        ref: G,
                        isPlaying: P,
                        onProgressChange: M,
                        children: [
                            m && (0, n.jsx)("div", { className: ts.mi, children: (0, n.jsx)(eo.y, {}) }),
                            (0, n.jsx)("div", {
                                className: s()(ts.w$, { [ts.t7]: z, [ts.Vg]: U }),
                                inert: !0,
                                "aria-hidden": "true",
                            }),
                            (0, n.jsx)(td, {
                                isNew: a,
                                showHoverActions: z && !h,
                                showSelect: y && (z || T),
                                isSelected: T,
                                onToggleSelect: B,
                                onMenu: X,
                                onBeforeDelete: K,
                            }),
                            (0, n.jsx)(tu, { showHoverState: z, playbackProgress: D, onEdit: W, onSeek: V }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function tc(e) {
    let { isPlaying: t, onProgressChange: l, children: i, ref: a } = e;
    return (0, n.jsx)(e3.d, {
        ref: a,
        isPlaying: t,
        preload: "none",
        onProgressChange: l,
        children: (0, n.jsx)(e2.h, { isVisible: !0, className: ts.Lw, children: i }),
    });
}
function td(e) {
    let {
            isNew: t,
            showHoverActions: l,
            showSelect: i,
            isSelected: a,
            onToggleSelect: r,
            onMenu: o,
            onBeforeDelete: c,
        } = e,
        d = (0, eZ.Y_)(),
        u = !0 === d.pending;
    return (0, n.jsxs)("div", {
        className: ts.wx,
        children: [
            (0, n.jsxs)("div", {
                className: ts.LD,
                children: [
                    i &&
                        (0, n.jsx)(eT.D, {
                            "aria-label": Y.intl.string(Y.t.XqMe3N),
                            "aria-pressed": a,
                            onClick: r,
                            "data-clips-select": "true",
                            className: s()(ts.UJ, { [ts.ZK]: a }),
                            children: a && (0, n.jsx)(eR.CheckmarkSmallBoldIcon, { size: "xs", color: "currentColor" }),
                        }),
                    !u &&
                        t &&
                        (0, n.jsx)("div", {
                            className: ts.Ad,
                            children: (0, n.jsx)(p.E, {
                                variant: "body-xs/semibold",
                                color: "text-overlay-light",
                                children: Y.intl.string(Y.t.y2b7CA),
                            }),
                        }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: ts.IE,
                children: [
                    (d.isFavorite || l) &&
                        (0, n.jsx)("div", {
                            className: s()({ [ts.L6]: d.isFavorite }),
                            children: (0, n.jsx)(e0.z, {}),
                        }),
                    l &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(j.m, {
                                    text: Y.intl.string(Y.t["UKOtz+"]),
                                    children: (0, n.jsx)(y.K, {
                                        onClick: o,
                                        icon: eU.MoreHorizontalIcon,
                                        "aria-label": Y.intl.string(Y.t["UKOtz+"]),
                                        variant: "overlay-secondary",
                                        size: "sm",
                                    }),
                                }),
                                (0, n.jsx)(eJ.k, { onBeforeDelete: c }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
function tu(e) {
    let { showHoverState: t, playbackProgress: l, onEdit: a, onSeek: r } = e,
        o = (0, eZ.Y_)(),
        c = o.type === e8.nQ.SCREENSHOT,
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
        j = (0, d.yK)([D.default], () => o.users.map((e) => D.default.getUser(e)).filter(eX.Vq)),
        y = eq({ timestamp: o.createdAt }),
        v = o.decision?.signal?.type,
        b = null != v && v !== e8.Gy.MANUAL,
        C =
            j.length > 0
                ? (0, n.jsx)("span", {
                      className: ts.HD,
                      "data-clips-avatars": "true",
                      children: (0, n.jsx)(eM.A, {
                          maxUsers: 3,
                          users: j,
                          size: eO._3.SIZE_16,
                          "aria-label": Y.intl.string(Y.t.WTozwe),
                      }),
                  })
                : null;
    return (0, n.jsx)("div", {
        className: ts.qr,
        children: (0, n.jsxs)("div", {
            className: ts.Zn,
            children: [
                (0, n.jsxs)("div", {
                    className: ts.$,
                    children: [
                        (0, n.jsxs)("div", { className: ts.gH, children: [(0, n.jsx)(tf, {}), (0, n.jsx)(th, {})] }),
                        t ? C : null,
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: s()(ts.SO, { [ts.AK]: t && !c, [ts.I_]: t && c }),
                    children: [
                        (0, n.jsxs)("div", {
                            className: s()(ts.KW, { [ts.g3]: t }),
                            inert: t,
                            "aria-hidden": t,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: ts.Tf,
                                    children: [
                                        (0, n.jsx)(tl, { clip: o }),
                                        b && (0, n.jsx)("span", { className: ts.TG, "aria-hidden": "true" }),
                                        C,
                                        (0, n.jsx)(p.E, {
                                            variant: "body-xs/normal",
                                            color: "none",
                                            children: Y.intl.format(q.default["0QCBug"], { time: y }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", { className: ts.av, children: (0, n.jsx)(tm, {}) }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: s()(ts.Ax, { [ts.Mg]: t }),
                            inert: !t,
                            children: [
                                !c &&
                                    (0, n.jsx)("div", {
                                        ref: u,
                                        className: ts.hr,
                                        onPointerDown: f,
                                        onPointerMove: x,
                                        onPointerUp: g,
                                        "data-clips-progress": "true",
                                        "aria-hidden": "true",
                                        children: (0, n.jsx)("div", {
                                            className: ts.z5,
                                            children: (0, n.jsx)("div", {
                                                className: ts.TE,
                                                style: { width: `${l}%` },
                                                children: (0, n.jsx)("div", {
                                                    className: ts.GT,
                                                    "aria-hidden": "true",
                                                }),
                                            }),
                                        }),
                                    }),
                                (0, n.jsxs)("div", {
                                    className: ts.E_,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: ts.lO,
                                            children: (0, n.jsx)(ez.$, {
                                                variant: "overlay-secondary",
                                                size: "sm",
                                                icon: eH.PencilIcon,
                                                text: Y.intl.string(Y.t.bt75uw),
                                                onClick: a,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: ts.lO,
                                            children: (0, n.jsx)(e1.e, { variant: "primary" }),
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
function tm() {
    let e = (0, eZ.Y_)(),
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
              className: ts.p0,
              children: [
                  a && (0, n.jsx)(eY.A, { color: "white", width: 14, height: 14 }),
                  (0, n.jsx)(p.E, {
                      variant: "body-xs/medium",
                      color: "text-overlay-light",
                      tabularNumbers: !0,
                      children: l ? Y.intl.string(Y.t["2Fp7OP"]) : s,
                  }),
              ],
          });
}
function th() {
    let e = (0, eZ.Y_)(),
        t = (0, tn.h)(e),
        l = "" !== t;
    return (0, n.jsx)(p.E, {
        className: ts.DD,
        variant: "body-sm/semibold",
        color: "text-overlay-light",
        children: l ? t : e.name,
    });
}
function tf() {
    let e = (0, eZ.Y_)(),
        t = (0, d.bG)([eV.A], () => (null != e.applicationId ? eV.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, n.jsx)("div", {
        className: ts.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, n.jsx)("img", { src: l, alt: "", className: ts.T_ })
                : e.type === e8.nQ.VOICE_CLIP
                  ? (0, n.jsx)(eF.VoiceNormalIcon, { size: "xs", color: "currentColor" })
                  : (0, n.jsx)(eG.ScreenIcon, { size: "xs", color: "currentColor" }),
    });
}
tc.displayName = "CardThumbnail";
var tx = l(792852);
function tg(e) {
    return Math.min(45 * e, 520);
}
var tp = l(91440),
    tj = l(762831);
function ty(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: a, onEdit: s, isLoading: r, topInset: o = 0 } = e,
        [c, u] = i.useState({ width: 0, height: 0 }),
        m = (0, d.yK)([_.Ay], () => _.Ay.getNewClipIds()),
        h = (0, d.bG)([_.Ay], () => _.Ay.getExportingClipIds().size > 0),
        x = (0, tx.P)((e) => e.activeMainLink),
        g = (0, tx.P)((e) => e.gameFacet),
        j = (0, tx.P)((e) => e.clippedWithFacet),
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
                    title: Y.intl.string(Y.t["kB2R/0"]),
                    description: t ? Y.intl.string(Y.t["6AXirz"]) : void 0,
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
        k = (0, ed.GV)(),
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
        } = (0, er.A)({ navId: k, columnCounts: I, prepareFocus: S }),
        D = i.useMemo(() => y.map((e) => Math.ceil(e.clips.length / N)), [y, N]),
        M = i.useMemo(() => D.reduce((e, t) => e + t, 0), [D]),
        T = Math.floor(C / eP) + 20,
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
                        className: tp.UX,
                        ...L(e),
                        children: c.map((t, l) => {
                            let i = { width: C };
                            return (
                                U && (i["--custom-entrance-delay"] = `${tg(e + l)}ms`),
                                (0, n.jsx)(
                                    "div",
                                    {
                                        className: U ? tj.$ : void 0,
                                        style: i,
                                        children: (0, n.jsx)(tr, {
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
                              className: tp.aE,
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
                                          className: tp.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [y],
        );
    if (!r && 0 === y.length) return (0, n.jsx)(ew, { isEmptyBecauseQuery: l > 0 });
    if (r && 0 === y.length) return (0, n.jsx)("div", { className: tp.dc, children: (0, n.jsx)(eo.y, {}) });
    let F = (0, n.jsx)(ec.A, {
            ref: E,
            role: "none presentation",
            className: tp.Vb,
            listPadding: v,
            renderRow: O,
            renderSectionHeader: H,
            rowCount: M,
            rowCountBySection: D,
            rowHeight: T,
            sectionHeaderHeight: z,
            onResize: u,
        }),
        { onFocus: G, ...K } = w();
    return (0, n.jsx)("div", { className: tp.UT, ...K, children: F });
}
var tv = l(405433),
    tb = l(241326),
    tC = l(27232),
    tN = l(505930),
    tA = l(322911);
function tk(e) {
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
        d = Y.intl.string(l ? q.default.IZsalP : q.default.ihBfyA),
        u = (0, n.jsx)(ez.$, {
            variant: "primary",
            size: "sm",
            icon: tv.ShareIcon,
            text: Y.intl.string(Y.t.RDE0Sc),
            onClick: r,
            disabled: c,
            loading: o,
        });
    return (0, n.jsxs)("div", {
        "aria-label": Y.intl.string(Y.t.z2jK6X),
        role: "region",
        className: tA.M0,
        children: [
            (0, n.jsxs)("div", {
                className: tA.h5,
                children: [
                    (0, n.jsx)(p.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: Y.intl.format(q.default.cSfYIv, { count: t }),
                    }),
                    (0, n.jsx)("span", { className: tA.Om, "aria-hidden": "true" }),
                    (0, n.jsx)(eT.D, {
                        className: tA.IU,
                        onClick: i,
                        children: (0, n.jsx)(p.E, {
                            variant: "body-sm/medium",
                            color: "text-link",
                            children: Y.intl.string(Y.t.VkKicb),
                        }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: tA.o1,
                children: [
                    (0, n.jsx)(j.m, {
                        text: Y.intl.string(Y.t.oyYWHE),
                        children: (0, n.jsx)(y.K, {
                            onClick: s,
                            icon: tb.TrashIcon,
                            size: "sm",
                            variant: "secondary",
                            "aria-label": Y.intl.string(Y.t.oyYWHE),
                        }),
                    }),
                    (0, n.jsx)(
                        j.m,
                        {
                            text: d,
                            children: (0, n.jsx)(y.K, {
                                onClick: a,
                                icon: l ? tC.StarIcon : tN.StarOutlineIcon,
                                size: "sm",
                                variant: "secondary",
                                "aria-label": d,
                            }),
                        },
                        `favorite:${l}`,
                    ),
                    (0, n.jsx)(j.m, { text: c ? Y.intl.string(q.default.qpw1d9) : null, asContainer: !0, children: u }),
                ],
            }),
        ],
    });
}
var tE = l(70860);
function tI(e) {
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
            className: tE.kL,
            children: [
                (0, n.jsx)("canvas", { ref: a, className: tE.Ji, tabIndex: 0, "aria-label": "Doggo Game" }),
                (0, n.jsx)("div", {
                    className: tE.b,
                    children: (0, n.jsx)(y.K, {
                        onClick: t,
                        icon: b.XLargeIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": Y.intl.string(Y.t.cpT0Cq),
                    }),
                }),
            ],
        })
    );
}
let tS = [
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
var tw = l(265872),
    tP = l(847374),
    tL = l(165862),
    tD = l(477782),
    tM = l(112173),
    t_ = l(97808),
    tT = l(683438),
    tR = l(682163),
    tU = l(71393),
    tO = l(341923),
    tz = l(305866),
    tH = l(441349),
    tF = l(789645),
    tG = l(70254),
    tK = l(569737);
function tV(e) {
    return (e.setHours(0, 0, 0, 0), e.getTime());
}
function t$(e) {
    return (e.setHours(23, 59, 59, 999), e.getTime());
}
function tB(e, t) {
    if (null == e && null == t) return null;
    let l = (0, tG.Xj)();
    return { preset: "custom", after: null != e ? tV(e.toDate(l)) : null, before: null != t ? t$(t.toDate(l)) : null };
}
function tq(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new tK.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let tY = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function tQ(e) {
    return tY.format(new Date(e));
}
function tX(e) {
    switch (e.preset) {
        case "today":
            return Y.intl.string(q.default.yOAWWM);
        case "yesterday":
            return Y.intl.string(q.default["PtV/Ti"]);
        case "last-3-days":
            return Y.intl.string(q.default.xfmv7I);
        case "this-year":
            return Y.intl.string(q.default["+eE7zX"]);
        case "last-year":
            return Y.intl.string(q.default.Nwj9v0);
        case "custom": {
            let t = null != e.after ? tQ(e.after) : null,
                l = null != e.before ? tQ(e.before) : null;
            if (null != t && null != l) return Y.intl.formatToPlainString(q.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return Y.intl.formatToPlainString(q.default.k1FkTL, { date: t });
            if (null != l) return Y.intl.formatToPlainString(q.default["4NlpHD"], { date: l });
            return Y.intl.string(q.default.tv9apA);
        }
    }
}
var tW = l(435021);
function tZ(e) {
    let { closePopout: t } = e,
        l = (0, tx.P)((e) => e.dateFilter),
        a = (0, tx.P)((e) => e.setDateFilter),
        [r, o] = i.useState(l?.preset === "custom"),
        [c, d] = i.useState(() => (l?.preset === "custom" ? tq(l.after) : null)),
        [u, m] = i.useState(() => (l?.preset === "custom" ? tq(l.before) : null)),
        h = i.useMemo(
            () => [
                { key: "today", label: Y.intl.string(q.default.yOAWWM) },
                { key: "yesterday", label: Y.intl.string(q.default["PtV/Ti"]) },
                { key: "last-3-days", label: Y.intl.string(q.default.xfmv7I) },
                { key: "this-year", label: Y.intl.string(q.default["+eE7zX"]) },
                { key: "last-year", label: Y.intl.string(q.default.Nwj9v0) },
            ],
            [],
        ),
        f = l?.preset ?? null,
        x = r && "custom" !== f ? null : f,
        g = i.useMemo(() => (0, tG.Ec)((0, tG.Xj)()), []),
        v = i.useCallback(
            (e) => {
                (a(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: tV(new Date(t)), before: t$(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: tV(new Date(l)), before: t$(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 2), { preset: e, after: tV(l), before: t$(new Date(t)) }
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
                (d(e), a(tB(e, u)));
            },
            [u, a],
        ),
        N = i.useCallback(
            (e) => {
                (m(e), a(tB(c, e)));
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
    return (0, n.jsx)(tz.l, {
        "aria-label": Y.intl.string(q.default.upqksT),
        onBlur: w,
        children: (0, n.jsxs)("div", {
            className: s()(tW.SW, r && tW.Td),
            children: [
                (0, n.jsxs)("div", {
                    className: tW.sh,
                    children: [
                        (0, n.jsx)(p.E, {
                            variant: "body-sm/medium",
                            color: "text-muted",
                            className: tW.a9,
                            children: Y.intl.string(q.default.upqksT),
                        }),
                        (0, n.jsxs)("div", {
                            ref: E,
                            className: tW.eF,
                            onKeyDown: S,
                            children: [
                                h.map((e) =>
                                    (0, n.jsx)(
                                        eT.D,
                                        {
                                            className: s()(tW.zD, x === e.key && tW.pH),
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
                                (0, n.jsxs)(eT.D, {
                                    className: s()(tW.zD, tW.Kl, (r || "custom" === f) && tW.pH),
                                    onClick: b,
                                    "aria-expanded": r,
                                    children: [
                                        (0, n.jsx)(p.E, {
                                            variant: "body-sm/medium",
                                            color: "currentColor",
                                            children: Y.intl.string(q.default.tv9apA),
                                        }),
                                        (0, n.jsx)(p.E, {
                                            variant: "body-md/medium",
                                            color: "text-muted",
                                            className: tW.Xt,
                                            children: r ? "\u25C0" : "\u25B6",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: tW.ML,
                    "aria-hidden": !r,
                    children: [
                        (0, n.jsxs)("div", {
                            className: tW.U6,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: tW._2,
                                    children: [
                                        (0, n.jsx)(p.E, {
                                            variant: "body-sm/medium",
                                            color: "text-muted",
                                            className: tW.bk,
                                            "aria-hidden": !0,
                                            children: Y.intl.string(q.default["96vZuU"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tW.h0,
                                            children: [
                                                (0, n.jsx)(tH.l, {
                                                    label: Y.intl.string(q.default["96vZuU"]),
                                                    hideLabel: !0,
                                                    value: c,
                                                    onChange: C,
                                                    maxValue: u ?? g,
                                                }),
                                                null != c &&
                                                    (0, n.jsx)(j.m, {
                                                        text: Y.intl.string(Y.t.VkKicb),
                                                        children: (0, n.jsx)(y.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tF.XSmallIcon,
                                                            onClick: () => C(null),
                                                            "aria-label": Y.intl.string(Y.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: tW._2,
                                    children: [
                                        (0, n.jsx)(p.E, {
                                            variant: "body-sm/medium",
                                            color: "text-muted",
                                            className: tW.bk,
                                            "aria-hidden": !0,
                                            children: Y.intl.string(q.default["GL51/b"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tW.h0,
                                            children: [
                                                (0, n.jsx)(tH.l, {
                                                    label: Y.intl.string(q.default["GL51/b"]),
                                                    hideLabel: !0,
                                                    value: u,
                                                    onChange: N,
                                                    minValue: c ?? void 0,
                                                    maxValue: g,
                                                }),
                                                null != u &&
                                                    (0, n.jsx)(j.m, {
                                                        text: Y.intl.string(Y.t.VkKicb),
                                                        children: (0, n.jsx)(y.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tF.XSmallIcon,
                                                            onClick: () => N(null),
                                                            "aria-label": Y.intl.string(Y.t.VkKicb),
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
                                className: tW.dS,
                                children: (0, n.jsx)(ep.Q, { size: "sm", text: Y.intl.string(Y.t.VkKicb), onClick: A }),
                            }),
                    ],
                }),
            ],
        }),
    });
}
var tJ = l(91871),
    t0 = l.n(tJ),
    t1 = l(190199),
    t3 = l(914427),
    t2 = l(724141);
function t9(e) {
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
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => t0()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, n.jsxs)(
                            t1.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, n.jsx)("span", { className: t2.H, children: e.icon }),
                                    (0, n.jsx)(t1.x4.Label, { children: e.label }),
                                    r ? (0, n.jsx)(t1.x4.Checkbox, {}) : (0, n.jsx)(t1.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        h = a.size > 0 ? `${t} (${a.size})` : t;
    return (0, n.jsx)(tw.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(t3.p, {
                "aria-label": t,
                placeholder: o,
                value: u,
                multiSelect: r,
                onChange: s,
                onClose: l,
                emptyStateText: c ?? Y.intl.string(Y.t.QwSXv8),
                maxVisibleItems: 6,
                children: m,
            });
        },
        children: (e) =>
            (0, n.jsx)(ez.$, {
                ...e,
                buttonRef: d,
                size: "sm",
                variant: "secondary",
                text: h,
                icon: tP.ChevronSmallDownIcon,
                iconPosition: "end",
            }),
    });
}
var t6 = l(187671);
function t5(e) {
    let { label: t, icon: l, onRemove: i, removeAriaLabel: a } = e;
    return (0, n.jsxs)("div", {
        className: t6.Io,
        children: [
            null != l && (0, n.jsx)("span", { className: t6.Kk, children: l }),
            (0, n.jsx)(p.E, {
                className: t6.Pf,
                variant: "body-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, n.jsx)(eT.D, {
                className: t6.DT,
                onClick: i,
                "aria-label": a ?? Y.intl.string(Y.t.N86XcP),
                children: (0, n.jsx)(tF.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var t4 = l(401756);
let t8 = { all: q.default.lscwjQ, auto: q.default.xrOIkz, manual: q.default.D7HSLJ };
function t7() {
    let e = (0, tx.P)((e) => e.dateFilter),
        t = i.useRef(null),
        l = null != e ? tX(e) : Y.intl.string(q.default.upqksT);
    return (0, n.jsx)(tw.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(tZ, { closePopout: t });
        },
        children: (e) =>
            (0, n.jsx)(ez.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: tP.ChevronSmallDownIcon,
                iconPosition: "end",
            }),
    });
}
function le() {
    let e = (0, tx.P)((e) => e.sortOrder),
        t = (0, tx.P)((e) => e.setSortOrder),
        l = i.useRef(null),
        a = e === es.mu.OLDEST ? Y.intl.string(Y.t["0gitSE"]) : Y.intl.string(Y.t["4LLKx3"]);
    return (0, n.jsx)(tw.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: i } = l;
            return (0, n.jsx)(tL.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": Y.intl.string(Y.t.XvNMNk),
                onClose: i,
                onSelect: void 0,
                children: (0, n.jsxs)(tD.rX, {
                    children: [
                        (0, n.jsx)(tD.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: Y.intl.string(Y.t["4LLKx3"]),
                            action: () => {
                                (t(es.mu.MOST_RECENT), i());
                            },
                            checked: e === es.mu.MOST_RECENT,
                        }),
                        (0, n.jsx)(tD.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: Y.intl.string(Y.t["0gitSE"]),
                            action: () => {
                                (t(es.mu.OLDEST), i());
                            },
                            checked: e === es.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, n.jsx)(ez.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: a,
                icon: tM.ArrowsUpDownIcon,
            }),
    });
}
function lt() {
    let e = (0, tx.P)((e) => e.clipMethodFilter),
        t = (0, tx.P)((e) => e.setClipMethodFilter),
        l = i.useRef(null);
    return (0, n.jsx)(tw.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: i } = l;
            return (0, n.jsx)(tL.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": Y.intl.string(q.default["kIqbb/"]),
                onClose: i,
                onSelect: void 0,
                children: (0, n.jsxs)(tD.rX, {
                    children: [
                        (0, n.jsx)(tD.iD, {
                            id: "method-all",
                            group: "method",
                            label: Y.intl.string(q.default.lscwjQ),
                            action: () => {
                                (t("all"), i());
                            },
                            checked: "all" === e,
                        }),
                        (0, n.jsx)(tD.iD, {
                            id: "method-auto",
                            group: "method",
                            label: Y.intl.string(q.default.xrOIkz),
                            action: () => {
                                (t("auto"), i());
                            },
                            checked: "auto" === e,
                        }),
                        (0, n.jsx)(tD.iD, {
                            id: "method-manual",
                            group: "method",
                            label: Y.intl.string(q.default.D7HSLJ),
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
            (0, n.jsx)(ez.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: Y.intl.string(q.default["kIqbb/"]),
                icon: tP.ChevronSmallDownIcon,
                iconPosition: "end",
            }),
    });
}
function ll(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: a } = e,
        s = (0, tx.P)((e) => e.query),
        r = (0, tx.P)((e) => e.setQuery),
        o = (0, tx.P)((e) => e.pendingSearchFocus),
        c = (0, tx.P)((e) => e.setPendingSearchFocus),
        d = i.useRef(null),
        u = (0, tx.P)((e) => e.activeMainLink),
        m = (0, tx.P)((e) => e.clipMethodFilter),
        h = (0, tx.P)((e) => e.setClipMethodFilter),
        f = (0, tx.P)((e) => e.gameFacet),
        x = (0, tx.P)((e) => e.clippedWithFacet),
        g = (0, tx.P)((e) => e.selectedGameIds),
        p = (0, tx.P)((e) => e.selectedUserIds),
        j = (0, tx.P)((e) => e.selectedGuildId),
        y = (0, tx.P)((e) => e.selectedActivity),
        v = (0, tx.P)((e) => e.dateFilter),
        b = (0, tx.P)((e) => e.toggleGameId),
        C = (0, tx.P)((e) => e.toggleUserId),
        N = (0, tx.P)((e) => e.setSelectedGuildId),
        A = (0, tx.P)((e) => e.setSelectedActivity),
        k = (0, tx.P)((e) => e.setDateFilter),
        E = (0, tx.P)((e) => e.clearFilters);
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
            filtered_by_favorites: u === es.oH.FAVORITES,
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
        t !== I.current && ((I.current = t), eQ.default.track(ek.HAw.CLIPS_FILTER_CHANGED, e));
    }, [m, f, g, v, j, x, p, u, y]);
    let P = i.useMemo(() => l.map((e) => e.key), [l]),
        L = (0, S.A)(P),
        M = i.useMemo(() => new Map(L.map((e) => [e?.id, e])), [L]),
        _ = i.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, n.jsx)(w.A, { game: M.get(e.key), size: w.M.XSMALL }),
                })),
            [l, M],
        ),
        T = i.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = tU.A.getGuild(e);
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
                    icon: (0, n.jsx)(tR.Ay, { guild: e.guild, size: tR.Ay.Sizes.MINI }),
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
                        let e = D.default.getUser(l.key);
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
                    icon: (0, n.jsx)(t_.eu, { src: e.avatarUrl, size: eO._3.SIZE_20, "aria-hidden": !0 }),
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
        B = (0, tO.H)() && u !== es.oH.AUTO_CLIPS,
        q = Y.intl.string(t8[m]),
        Q = (0, n.jsxs)(n.Fragment, {
            children: [
                V &&
                    Array.from(g).map((e) => {
                        let t = _.find((t) => t.key === e);
                        return (0, n.jsx)(
                            t5,
                            {
                                label: t?.label ?? e,
                                icon: (0, n.jsx)(w.A, { game: M.get(e), size: w.M.XSMALL }),
                                onRemove: () => b(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != v && (0, n.jsx)(t5, { label: tX(v), onRemove: () => k(null) }, "date"),
                null != j &&
                    (0, n.jsx)(
                        t5,
                        {
                            label: R.find((e) => e.key === j)?.label ?? j,
                            icon:
                                null != U.get(j)
                                    ? (0, n.jsx)(tR.Ay, { guild: U.get(j), size: tR.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => N(null),
                        },
                        "guild",
                    ),
                $ && Array.from(p).map((e) => (0, n.jsx)(ln, { userId: e, onRemove: () => C(e) }, `user-${e}`)),
                null != y && (0, n.jsx)(t5, { label: y, onRemove: () => A(null) }, "activity"),
                B && "all" !== m && (0, n.jsx)(t5, { label: q, onRemove: () => h("all") }, "method"),
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
                        children: (0, n.jsx)(tT.I, {
                            ref: d,
                            placeholder: Y.intl.string(Y.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: t4.Zq,
                        children: [
                            B && (0, n.jsx)(lt, {}),
                            V &&
                                _.length > 0 &&
                                (0, n.jsx)(t9, {
                                    triggerLabel: Y.intl.string(Y.t.URyqtP),
                                    options: _,
                                    selectedKeys: g,
                                    onToggle: b,
                                    multiSelect: !0,
                                    searchPlaceholder: Y.intl.string(Y.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(t7, {}),
                            R.length > 0 &&
                                (0, n.jsx)(t9, {
                                    triggerLabel: Y.intl.string(Y.t["5qyruI"]),
                                    options: R,
                                    selectedKeys: H,
                                    onToggle: G,
                                    multiSelect: !1,
                                    searchPlaceholder: Y.intl.string(Y.t["5h0QOP"]),
                                }),
                            $ &&
                                z.length > 0 &&
                                (0, n.jsx)(t9, {
                                    triggerLabel: Y.intl.string(Y.t.YQ6dJg),
                                    options: z,
                                    selectedKeys: p,
                                    onToggle: (e) => C(e),
                                    multiSelect: !0,
                                    searchPlaceholder: Y.intl.string(Y.t["5h0QOP"]),
                                }),
                            O.length > 0 &&
                                (0, n.jsx)(t9, {
                                    triggerLabel: Y.intl.string(Y.t.agRtPG),
                                    options: O,
                                    selectedKeys: F,
                                    onToggle: K,
                                    multiSelect: !1,
                                    searchPlaceholder: Y.intl.string(Y.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(le, {}),
                        ],
                    }),
                ],
            }),
            X &&
                (0, n.jsxs)("div", {
                    className: t4.eH,
                    children: [
                        Q,
                        (0, n.jsx)(ep.Q, {
                            size: "sm",
                            variant: "primary",
                            text: Y.intl.string(Y.t.O8k7O4),
                            onClick: E,
                        }),
                    ],
                }),
        ],
    });
}
function ln(e) {
    let { userId: t, onRemove: l } = e,
        i = (0, d.bG)([D.default], () => D.default.getUser(t), [t]);
    if (null == i) return null;
    let a = i.globalName ?? i.username;
    return (0, n.jsx)(t5, {
        label: a,
        icon: (0, n.jsx)(t_.eu, { src: i.getAvatarURL(null, 32), size: eO._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
var li = l(315629),
    la = l(516521),
    ls = l(975571);
function lr(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var lo = l(195715);
function lc(e) {
    let { clips: t, onEdit: l, onEdgeNavigate: a, showEducationCopy: s = !1 } = e,
        r = i.useMemo(() => lr(t), [t]),
        o = (0, tx.P)((e) => e.setActiveMainLink),
        c = (0, ed.GV)(),
        d = i.useMemo(() => [r.length], [r.length]),
        { getContainerProps: u, getItemProps: m, getRowProps: h } = (0, er.A)({ navId: c, columnCounts: d }),
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
              className: lo.uW,
              "aria-label": Y.intl.string(s ? q.default.U5V4YO : q.default.efLpNC),
              children: [
                  (0, n.jsxs)("div", {
                      className: lo.wx,
                      children: [
                          s
                              ? (0, n.jsxs)("div", {
                                    className: lo.eS,
                                    children: [
                                        (0, n.jsx)(f.D, {
                                            variant: "nitro-sm",
                                            color: "text-default",
                                            children: Y.intl.string(q.default.U5V4YO),
                                        }),
                                        (0, n.jsx)(p.E, {
                                            variant: "body-md/normal",
                                            color: "text-muted",
                                            children: Y.intl.format(q.default.i1g0Xm, {
                                                helpArticleUrl: ls.A.getArticleURL(ek.MVz.CLIPS),
                                            }),
                                        }),
                                    ],
                                })
                              : (0, n.jsxs)("div", {
                                    className: lo.mX,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: lo.UP,
                                            children: [
                                                (0, n.jsx)(f.D, {
                                                    variant: "heading-lg/medium",
                                                    color: "text-default",
                                                    children: Y.intl.string(q.default.I1h8uD),
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
                                            className: lo.DD,
                                            children: Y.intl.string(q.default.efLpNC),
                                        }),
                                    ],
                                }),
                          (0, n.jsx)("div", {
                              className: lo.BX,
                              children: (0, n.jsx)(ez.$, {
                                  variant: "overlay-primary",
                                  size: "sm",
                                  onClick: () => o(es.oH.AUTO_CLIPS),
                                  text: Y.intl.string(q.default.gCay1w),
                              }),
                          }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: lo.Vg,
                      "aria-label": Y.intl.string(q.default.efLpNC),
                      ...C,
                      tabIndex: -1,
                      children: (0, n.jsx)("div", {
                          className: lo.nM,
                          ...h(0),
                          children: r.map((e, t) =>
                              (0, n.jsx)(
                                  "div",
                                  {
                                      className: lo.v2,
                                      children: (0, n.jsx)(tr, {
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
var ld = l(65154),
    lu = l(713608),
    lm = l(331322),
    lh = l(783977),
    lf = l(865278);
function lx() {
    window.open(ls.A.getArticleURL(ek.MVz.CLIPS), "_blank", "noopener,noreferrer");
}
function lg() {
    (0, ev.openUserSettings)(ey.X.CLIPS_PANEL);
}
function lp(e) {
    let { className: t } = e;
    return (0, n.jsxs)("div", {
        className: s()(lf.GX, t),
        children: [
            (0, n.jsx)("div", {
                className: lf.f1,
                "aria-hidden": !0,
                children: (0, n.jsx)(F.ClipsAutoIcon, { size: "custom", width: 96, height: 96, color: "currentColor" }),
            }),
            (0, n.jsx)("div", {
                className: lf.UX,
                children: (0, n.jsxs)("div", {
                    className: lf.wE,
                    children: [
                        (0, n.jsx)(ld.CirclePlayIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                        (0, n.jsx)(ep.Q, {
                            variant: "always-white",
                            textVariant: "body-sm/medium",
                            text: Y.intl.string(q.default["2axqmn"]),
                            onClick: lx,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function lj(e) {
    let { tags: t, className: l } = e;
    return (0, n.jsxs)("div", {
        className: s()(lf.Ny, l),
        "aria-hidden": !0,
        children: [
            (0, n.jsx)("div", {
                className: lf.mB,
                children: (0, n.jsx)(F.ClipsAutoIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
            }),
            (0, n.jsxs)("div", {
                className: lf.UX,
                children: [
                    (0, n.jsxs)("div", {
                        className: lf.US,
                        children: [
                            (0, n.jsx)("div", { className: s()(lf.qV, lf.AL) }),
                            (0, n.jsx)("div", { className: s()(lf.qV, lf.SA) }),
                            (0, n.jsx)("div", { className: s()(lf.qV, lf.pq) }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: lf.U2,
                        children: [
                            t.map((e) => {
                                let { icon: t, label: l } = e;
                                return (0, n.jsxs)(
                                    "div",
                                    {
                                        className: lf.fP,
                                        children: [
                                            (0, n.jsx)(t, { size: "xxs", color: "currentColor" }),
                                            (0, n.jsx)(p.E, {
                                                variant: "body-xs/medium",
                                                color: "text-overlay-light",
                                                children: Y.intl.string(l),
                                            }),
                                        ],
                                    },
                                    Y.intl.string(l),
                                );
                            }),
                            (0, n.jsxs)("div", {
                                className: lf.Gc,
                                children: [
                                    (0, n.jsx)("div", { className: lf.my }),
                                    (0, n.jsx)("div", { className: lf.my }),
                                    (0, n.jsx)("div", { className: lf.my }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let ly = [
        { icon: e5.ReactionIcon, label: q.default["3gqpuo"] },
        { icon: lu.ModerationIcon, label: Y.t.ky6syM },
    ],
    lv = [
        { icon: e5.ReactionIcon, label: q.default.bTC23D },
        { icon: lu.ModerationIcon, label: Y.t.JMxzCr },
    ];
function lb(e) {
    let { icon: t, title: l, body: i } = e;
    return (0, n.jsxs)("div", {
        className: lf.Lw,
        children: [
            (0, n.jsx)(t, { size: "custom", width: 20, height: 20, color: "currentColor", "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: lf.ET,
                children: [
                    (0, n.jsx)(p.E, { variant: "body-md/medium", color: "text-default", children: Y.intl.string(l) }),
                    (0, n.jsx)(p.E, { variant: "body-sm/normal", color: "text-muted", children: i }),
                ],
            }),
        ],
    });
}
function lC() {
    let e = (0, eN.E)(),
        { onChange: t } = (0, $.U)(),
        l = i.useCallback(() => t("manual"), [t]);
    return (0, n.jsxs)("section", {
        className: lf.uW,
        "aria-label": Y.intl.string(q.default.Pottsi),
        children: [
            (0, n.jsxs)("div", {
                className: lf.jg,
                children: [
                    (0, n.jsxs)("div", {
                        className: lf.dw,
                        children: [
                            (0, n.jsxs)("div", {
                                className: lf.EQ,
                                "aria-hidden": !0,
                                children: [
                                    (0, n.jsx)(lj, { className: s()(lf.Qx, lf.On), tags: [] }),
                                    (0, n.jsx)(lj, { className: s()(lf.Qx, lf.D_), tags: ly }),
                                    (0, n.jsx)(lj, { className: s()(lf.Qx, lf.eu), tags: lv }),
                                    (0, n.jsx)(lj, { className: s()(lf.Qx, lf.z2), tags: ly }),
                                ],
                            }),
                            (0, n.jsx)(lp, { className: lf.RV }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: lf.oY,
                        children: [
                            (0, n.jsxs)("div", {
                                className: lf.C,
                                children: [
                                    (0, n.jsx)(f.D, {
                                        variant: "nitro-md",
                                        color: "text-default",
                                        children: Y.intl.string(q.default.Pottsi),
                                    }),
                                    (0, n.jsx)(p.E, {
                                        variant: "body-md/normal",
                                        color: "text-subtle",
                                        children: Y.intl.string(q.default["3RPyLm"]),
                                    }),
                                ],
                            }),
                            (0, n.jsxs)(lm.B, {
                                direction: "horizontal",
                                gap: 12,
                                justify: "center",
                                children: [
                                    (0, n.jsx)(ez.$, {
                                        variant: "secondary",
                                        icon: ej.ArrowAngleRightUpIcon,
                                        iconPosition: "end",
                                        text: Y.intl.string(Y.t.hvVgAZ),
                                        onClick: lx,
                                    }),
                                    e
                                        ? (0, n.jsx)(ez.$, {
                                              variant: "primary",
                                              icon: ld.CirclePlayIcon,
                                              text: Y.intl.string(q.default.caOprb),
                                              onClick: lx,
                                          })
                                        : (0, n.jsx)(ez.$, {
                                              variant: "primary",
                                              text: Y.intl.string(Y.t.h8rgrK),
                                              onClick: l,
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: lf.Mh,
                children: [
                    (0, n.jsx)(lb, {
                        icon: F.ClipsAutoIcon,
                        title: q.default["0+BIHX"],
                        body: Y.intl.string(q.default["tCTA+W"]),
                    }),
                    (0, n.jsx)(lb, {
                        icon: ef.GameControllerIcon,
                        title: q.default["x/w6AN"],
                        body: Y.intl.string(q.default.D4abD6),
                    }),
                    (0, n.jsx)(lb, {
                        icon: lh.FiltersHorizontalIcon,
                        title: q.default.EA8ENs,
                        body: Y.intl.format(q.default.PvfGzE, { onClipsSettingsClick: lg }),
                    }),
                ],
            }),
        ],
    });
}
function lN() {
    return (0, n.jsxs)("section", {
        className: lf.ZK,
        "aria-label": Y.intl.string(q.default["33gqTk"]),
        children: [
            (0, n.jsxs)("div", {
                className: lf.C,
                children: [
                    (0, n.jsx)(f.D, {
                        variant: "nitro-md",
                        color: "text-default",
                        children: Y.intl.string(q.default["33gqTk"]),
                    }),
                    (0, n.jsx)(p.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        children: Y.intl.format(q.default.aTozcJ, { helpArticleUrl: ls.A.getArticleURL(ek.MVz.CLIPS) }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: lf.LF,
                children: [(0, n.jsx)(lp, {}), (0, n.jsx)(lj, { tags: ly }), (0, n.jsx)(lj, { tags: lv })],
            }),
        ],
    });
}
var lA = l(770178),
    lk = l(202163),
    lE = l(68408);
function lI(e) {
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
        { gameRecord: h } = (0, lk.Ay)(t.applicationId),
        { onShareSession: x } = i.useContext(ti.$),
        g = i.useCallback(() => {
            x?.(t.clips);
        }, [x, t.clips]),
        j = (0, tx.P)((e) => e.setGameFacet),
        y = (0, tx.P)((e) => e.setActiveMainLink),
        v = t.applicationId,
        b = null != v && "" !== v,
        C = i.useCallback(() => {
            null != v && "" !== v && (j(v), y(es.oH.ALL_CLIPS));
        }, [v, j, y]),
        A = i.useCallback(() => {
            b ? C() : y(es.oH.ALL_CLIPS);
        }, [b, C, y]),
        k = i.useMemo(() => (null == h ? null : (h.getBannerURL(1024) ?? h.screenshotUrls?.[0] ?? null)), [h]),
        E = (0, d.yK)([D.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => D.default.getUser(e)).filter(eX.Vq);
        }),
        I = i.useMemo(() => t.clips.filter((e) => "auto" === e.clipMethod).length, [t.clips]),
        S = eq({ timestamp: t.startedAt }),
        [P, L] = i.useState(800),
        M = (0, N.A)((e) => {
            L(e.target.clientWidth);
        }),
        _ = (0, lA.w)(M),
        T = Math.max(1, (P - 40) / 3),
        R = i.useMemo(() => {
            let e = t.clips.slice(0, 6),
                l = [];
            for (let t = 0; t < e.length; t += 3) l.push(e.slice(t, t + 3));
            return l;
        }, [t.clips]),
        U = t.clips.length > 6,
        O = (0, ed.GV)(),
        z = i.useMemo(() => R.map((e) => e.length), [R]),
        { getContainerProps: H, getItemProps: F, getRowProps: G } = (0, er.A)({ navId: O, columnCounts: z }),
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
        className: lE.dZ,
        children: [
            (0, n.jsx)("div", {
                className: s()(lE.tB, null == k && lE.rD),
                style: null != k ? { backgroundImage: `url(${k})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, n.jsxs)("div", {
                className: lE.wx,
                children: [
                    b
                        ? (0, n.jsx)(e_.s, {
                              "aria-label": t.applicationName,
                              onClick: C,
                              className: lE.Zn,
                              children: (0, n.jsx)(w.A, {
                                  className: lE.Gt,
                                  game: h,
                                  size: w.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, n.jsx)(w.A, { className: lE.Gt, game: h, size: w.M.MEDIUM, "aria-hidden": !0 }),
                    (0, n.jsxs)("div", {
                        className: lE.TK,
                        children: [
                            b
                                ? (0, n.jsx)(e_.s, {
                                      "aria-label": t.applicationName,
                                      onClick: C,
                                      className: lE.wb,
                                      children: (0, n.jsx)(f.D, {
                                          variant: "body-md/medium",
                                          color: "text-default",
                                          className: lE.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, n.jsx)(f.D, {
                                      variant: "body-md/medium",
                                      color: "text-default",
                                      className: lE.mO,
                                      children: t.applicationName,
                                  }),
                            (0, n.jsxs)("div", {
                                className: lE.mI,
                                children: [
                                    (0, n.jsx)(p.E, {
                                        variant: "body-xs/normal",
                                        color: "text-muted",
                                        children: Y.intl.format(q.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    I > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: lE.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(p.E, {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    children: Y.intl.format(q.default.eRrt7X, { count: I }),
                                                }),
                                            ],
                                        }),
                                    (0, n.jsx)("span", { className: lE.TG, "aria-hidden": "true" }),
                                    (0, n.jsx)(p.E, { variant: "body-xs/normal", color: "text-muted", children: S }),
                                    E.length > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: lE.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(eM.A, { users: E, maxUsers: 5, size: eO._3.SIZE_16 }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    t.clips.length > 0 &&
                        null != x &&
                        (0, n.jsx)("div", {
                            className: lE.$s,
                            children: (0, n.jsx)(ez.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: tv.ShareIcon,
                                text: Y.intl.string(q.default.l34lLs),
                                onClick: g,
                            }),
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                ref: _,
                className: lE.Vg,
                ...$,
                tabIndex: -1,
                onKeyDown: B,
                children: R.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: lE.UX,
                            ...G(t),
                            children: e.map((e, i) => {
                                let s = { width: T };
                                return (
                                    c && (s["--custom-entrance-delay"] = `${tg(u + t + i)}ms`),
                                    (0, n.jsx)(
                                        "div",
                                        {
                                            className: c ? tj.$ : void 0,
                                            style: s,
                                            children: (0, n.jsx)(tr, {
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
                    className: lE.Vc,
                    children: (0, n.jsx)(ez.$, {
                        variant: "secondary",
                        size: "sm",
                        text: Y.intl.string(q.default.pqk9U0),
                        onClick: A,
                    }),
                }),
        ],
    });
}
var lS = l(885574),
    lw = l(253932),
    lP = l(734066),
    lL = l(947568);
function lD() {
    (0, ev.openUserSettings)(ey.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING);
}
function lM() {
    let {
        visible: e,
        handleAllow: t,
        handleDontAllow: l,
    } = (function () {
        let e = (0, d.bG)([D.default], () => (0, lP.qj)(D.default.getCurrentUser())),
            t = lw.Q$.useSetting(),
            l = e && !1 === t && (0, T.C)("ClipsLibraryVoiceBanner").enabled,
            [n, a] = (0, K.kn)(l ? [U.M.AUTOCLIPPING_EARLY_ACCESS_LIBRARY_VOICE_BANNER] : []);
        return {
            visible: null != n,
            handleAllow: i.useCallback(() => {
                (a(B.i.TAKE_ACTION), (0, R.eQ)({ allowVoiceRecording: !0 }));
            }, [a]),
            handleDontAllow: i.useCallback(() => {
                a(B.i.USER_DISMISS);
            }, [a]),
        };
    })();
    return e
        ? (0, n.jsxs)("div", {
              className: lL.v,
              children: [
                  (0, n.jsx)(lS.CircleInformationIcon, {
                      size: "xs",
                      color: ex.A.colors.ICON_FEEDBACK_INFO,
                      "aria-hidden": !0,
                  }),
                  (0, n.jsx)(p.E, {
                      variant: "body-sm/normal",
                      color: "text-strong",
                      className: lL.i,
                      children: Y.intl.format(q.default.m7PBif, { onDataPrivacyClick: lD }),
                  }),
                  (0, n.jsxs)(lm.B, {
                      direction: "horizontal",
                      gap: 8,
                      fullWidth: !1,
                      children: [
                          (0, n.jsx)(ez.$, {
                              variant: "secondary",
                              size: "sm",
                              text: Y.intl.string(q.default.beB8BG),
                              onClick: l,
                          }),
                          (0, n.jsx)(ez.$, {
                              variant: "primary",
                              size: "sm",
                              text: Y.intl.string(q.default["Bk5IR+"]),
                              onClick: t,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var l_ = l(799888);
let lT = { no_clips: 604, no_auto_clips: 400 };
function lR(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: a, onClipClick: s, isLoading: r, onScroll: o } = e,
        c = (0, tO.H)(),
        u = i.useMemo(() => lr(t), [t]),
        m = c && u.length > 0,
        h = (0, d.yK)([_.Ay], () => _.Ay.getNewClipIds()),
        x = (0, d.bG)([_.Ay], () => _.Ay.getExportingClipIds().size > 0),
        g = (0, tx.P)((e) => e.setActiveMainLink),
        p = i.useCallback(() => {
            g(es.oH.ALL_CLIPS);
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
        w = null != S ? lT[S] : void 0,
        P =
            null != w
                ? (0, n.jsx)(li.h, {
                      ref: N,
                      color: "nitro-pink",
                      className: l_.zP,
                      style: { "--custom-clips-home-gradient-height": `${w}px` },
                      "aria-hidden": !0,
                  })
                : null;
    return E
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  P,
                  (0, n.jsx)(la.Ch, {
                      className: l_.iR,
                      fade: !0,
                      onScroll: k,
                      children: (0, n.jsxs)("div", {
                          className: l_.Qs,
                          ref: b,
                          children: [
                              m &&
                                  (0, n.jsx)("div", {
                                      className: l_.Dk,
                                      children: (0, n.jsx)(lc, {
                                          clips: t,
                                          onEdit: a,
                                          onEdgeNavigate: C,
                                          showEducationCopy: "auto_clips" === S,
                                      }),
                                  }),
                              "no_auto_clips" === S &&
                                  (0, n.jsx)("div", { className: l_.Dk, children: (0, n.jsx)(lN, {}) }),
                              (0, n.jsx)(lM, {}),
                              j.length > 0 &&
                                  (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(f.D, {
                                              variant: "heading-lg/medium",
                                              color: "text-default",
                                              children: Y.intl.string(q.default.zfTWDE),
                                          }),
                                          j.map((e, t) =>
                                              (0, n.jsx)(
                                                  lI,
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
                                              className: l_.dp,
                                              children: (0, n.jsx)(ez.$, {
                                                  variant: "primary",
                                                  text: Y.intl.string(q.default.RQtkop),
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
          ? (0, n.jsx)("div", { className: l_.dc, children: (0, n.jsx)(eo.y, {}) })
          : "no_clips" === S
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      P,
                      (0, n.jsx)(la.Ch, {
                          className: l_.iR,
                          fade: !0,
                          onScroll: k,
                          children: (0, n.jsx)("div", {
                              className: l_.Qs,
                              children: (0, n.jsx)("div", { className: l_.Dk, children: (0, n.jsx)(lC, {}) }),
                          }),
                      }),
                  ],
              })
            : (0, n.jsx)(ew, { isEmptyBecauseQuery: l > 0 });
}
var lU = l(837381),
    lO = l(741918),
    lz = l(812993),
    lH = l(332837),
    lF = l(95362),
    lG = l(625903),
    lK = l(260762),
    lV = l(599428);
function l$(e) {
    let { itemId: t, icon: l, label: i, onClick: a, isSelected: r = !1, isDisabled: o = !1, badgeCount: c = 0 } = e,
        d = o && !r,
        u = (0, lU.rm)(t);
    return (0, n.jsx)(j.m, {
        text: i,
        position: "right",
        children: (0, n.jsxs)(eT.D, {
            ...u,
            role: "button",
            onClick: d ? void 0 : a,
            "aria-pressed": r,
            "aria-disabled": d,
            "aria-label": i,
            className: s()(lV.AY, { [lV.Hy]: r, [lV.Is]: d }),
            children: [l, c > 0 && (0, n.jsx)("span", { className: lV.e, children: (0, n.jsx)(lz.hV, { count: c }) })],
        }),
    });
}
function lB(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: a } = e,
        r = (0, tx.P)((e) => e.activeMainLink),
        o = (0, tx.P)((e) => e.gameFacet),
        c = (0, tx.P)((e) => e.clippedWithFacet),
        d = (0, tx.P)((e) => e.setActiveMainLink),
        u = (0, tx.P)((e) => e.setGameFacet),
        m = (0, tx.P)((e) => e.setClippedWithFacet),
        h = (0, tx.P)((e) => e.clearFilters),
        f = (0, tx.P)((e) => e.setPendingContentFocus),
        x = (0, tO.H)(),
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
                (u(o === e ? null : e), m(null), d(es.oH.ALL_CLIPS), h(), y());
            },
            [o, u, m, d, h, y],
        ),
        C = i.useCallback(() => {
            (0, ev.openUserSettings)(ey.X.CLIPS_PANEL);
        }, []),
        N = i.useMemo(() => t.map((e) => e.key), [t]),
        A = (0, S.A)(N),
        k = i.useMemo(() => new Map(A.map((e) => [e?.id, e])), [A]),
        E = (0, ed.GV)(),
        I = (0, lK.A)(E),
        { setFocus: P } = I,
        L = o ?? r;
    i.useEffect(() => {
        P(L);
    }, [P, L]);
    let { ref: D, onKeyDown: M, ..._ } = (0, lU.LT)(I),
        T = i.useCallback(
            (e) => {
                j.current = e.key === lO.D$.ENTER || e.key === lO.D$.SPACE;
                try {
                    M(e);
                } finally {
                    j.current = !1;
                }
            },
            [M],
        );
    return (0, n.jsx)(lU.hD, {
        navigator: I,
        children: (0, n.jsxs)("div", {
            className: lV.H$,
            ..._,
            tabIndex: -1,
            onKeyDown: T,
            ref: D,
            children: [
                (0, n.jsxs)("div", {
                    className: s()(lV.o3, lV.A9),
                    children: [
                        (0, n.jsx)(l$, {
                            itemId: es.oH.HOME,
                            icon: (0, n.jsx)(lH.HomeIcon, { size: "sm", color: "currentColor" }),
                            label: Y.intl.string(q.default.iVqj8B),
                            isSelected: p(es.oH.HOME),
                            onClick: () => v(es.oH.HOME),
                        }),
                        (0, n.jsx)(l$, {
                            itemId: es.oH.ALL_CLIPS,
                            icon: (0, n.jsx)(H.ClipsIcon, { size: "sm", color: "currentColor" }),
                            label: Y.intl.string(Y.t.dPVrEv),
                            isSelected: p(es.oH.ALL_CLIPS),
                            isDisabled: 0 === l.allClips,
                            badgeCount: a.allClips,
                            onClick: () => v(es.oH.ALL_CLIPS),
                        }),
                        x &&
                            (0, n.jsx)(l$, {
                                itemId: es.oH.AUTO_CLIPS,
                                icon: (0, n.jsx)(F.ClipsAutoIcon, { size: "sm", color: "currentColor" }),
                                label: Y.intl.string(q.default.ikNKf1),
                                isSelected: p(es.oH.AUTO_CLIPS),
                                isDisabled: 0 === l.autoClips,
                                badgeCount: a.autoClips,
                                onClick: () => v(es.oH.AUTO_CLIPS),
                            }),
                        (0, n.jsx)(l$, {
                            itemId: es.oH.FAVORITES,
                            icon: (0, n.jsx)(tC.StarIcon, { size: "sm", color: "currentColor" }),
                            label: Y.intl.string(Y.t["9rlCk1"]),
                            isSelected: p(es.oH.FAVORITES),
                            onClick: () => v(es.oH.FAVORITES),
                        }),
                    ],
                }),
                t.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { className: lV.Gz }),
                            (0, n.jsx)(lF.Ip, {
                                className: s()(lV.UZ, lV.A9),
                                fade: !0,
                                children: t.map((e) => {
                                    let t = o === e.key;
                                    return (0, n.jsx)(
                                        l$,
                                        {
                                            itemId: e.key,
                                            icon: (0, n.jsx)(w.A, {
                                                game: k.get(e.key),
                                                size: w.M.SMALL,
                                                className: lV.az,
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
                    className: s()(lV.Ms, lV.A9),
                    children: (0, n.jsx)(l$, {
                        itemId: "settings",
                        icon: (0, n.jsx)(lG.SettingsIcon, { size: "sm", color: "currentColor" }),
                        label: Y.intl.string(Y.t["3D5yo/"]),
                        onClick: C,
                    }),
                }),
            ],
        }),
    });
}
var lq = l(409067),
    lY = l(314484);
function lQ(e) {
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
            initialMainLink: $ = es.oH.HOME,
            ...B
        } = e;
    (0, ea.A)();
    let { analyticsLocations: Q } = (0, E.Ay)(k.A.CLIPS_GALLERY),
        X = G?.onPick,
        W = (0, T.r)("ClipsGalleryModal").enabled && null == G,
        Z = G?.allowMultiSelect ?? !0,
        [er, eo] = i.useState(new Set()),
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
        } = (0, lq.ad)(G?.filterClip),
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
    let { onShareClick: ev } = (0, ei.A)(H);
    (i.useEffect(
        () => () => {
            (tx.P.getState().resetAll(), (0, R.Su)());
        },
        [],
    ),
        i.useEffect(() => {
            let e = tx.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink($);
        }, [$]),
        (0, o.l0)(() => {
            _.Ay.hasClips() && L.A.isDeveloper && P.Ay.fireSurveyAction(c.w.POPULATED_CLIP_GALLERY_CLOSED);
        }));
    let eb = (0, d.bG)([_.Ay], () => _.Ay.getExportingClipIds().size > 0),
        [eC, eN] = i.useState(null != V ? "editing" : "gallery"),
        [eA, ek] = i.useState(V ?? null),
        eE = (0, d.bG)([_.Ay], () => (null != eA ? _.Ay.getClipById(eA) : null), [eA]),
        eI = (0, u.LA)(e8.nm),
        [eS, ew] = i.useState(!1);
    ((t = i.useCallback(() => ew(!0), [])),
        (a = eI && "gallery" === eC && !eS),
        (U = i.useRef(Array(tS.length).fill(""))),
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
                    ((e[O.current] = t.key.toLowerCase()), (O.current = (O.current + 1) % tS.length));
                    for (let t = 0; t < tS.length; t++) if (e[(O.current + t) % tS.length] !== tS[t]) return;
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
    let [eL, eD] = i.useState(null != V ? h.ip.ENTERED : h.ip.HIDDEN),
        eM = i.useRef(null),
        e_ = (0, tx.P)((e) => e.gameFacet),
        eT = (0, tx.P)((e) => e.clippedWithFacet),
        eR = (0, tx.P)((e) => e.activeMainLink),
        eU = (0, tx.P)((e) => e.currentPage),
        eO = eU === es.fB.HOME,
        { ref: ez, height: eH = 64 } = (0, C.Ay)(eU),
        eF = 68 + eH,
        eG = eO ? 68 : eF - 16;
    i.useLayoutEffect(() => {
        ed(0);
    }, [eU, ed]);
    let eK = (0, tx.P)((e) => e.pendingContentFocus),
        eV = (0, tx.P)((e) => e.setPendingContentFocus),
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
    let eB = (0, tx.P)(
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
        eR === es.oH.HOME && eB && tx.P.getState().setActiveMainLink(es.oH.ALL_CLIPS);
    }, [eR, eB]);
    let eq = i.useMemo(() => (null != e_ ? [e_] : []), [e_]),
        eY = (0, S.A)(eq)[0] ?? null,
        eQ = (0, d.bG)([D.default], () => (null != eT ? D.default.getUser(eT) : null), [eT]),
        eX = i.useMemo(() => {
            if (null != e_) return eu.find((e) => e.key === e_)?.name ?? Y.intl.string(Y.t.dPVrEv);
            if (null != eT) return null != eQ ? (eQ.globalName ?? eQ.username) : eT;
            switch (eR) {
                case es.oH.FAVORITES:
                    return Y.intl.string(Y.t["9rlCk1"]);
                case es.oH.AUTO_CLIPS:
                    return Y.intl.string(q.default.ikNKf1);
                case es.oH.HOME:
                    return Y.intl.string(q.default.iVqj8B);
                default:
                    return Y.intl.string(Y.t.dPVrEv);
            }
        }, [e_, eT, eR, eu, eQ]),
        eW = i.useMemo(() => {
            if (null != e_) return eu.find((e) => e.key === e_)?.count ?? 0;
            if (null != eT) return em.find((e) => e.key === eT)?.count ?? 0;
            switch (eR) {
                case es.oH.HOME:
                    return null;
                case es.oH.AUTO_CLIPS:
                    return ef.autoClips;
                case es.oH.FAVORITES:
                    return ef.favorites;
                default:
                    return ef.allClips;
            }
        }, [e_, eT, eR, eu, em, ef]),
        eZ = i.useCallback(() => {
            (eN("editing"), A.Ay.useReducedMotion && eD(h.ip.ENTERED));
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
                    ((0, M.cX)() ? !e.metaKey || e.ctrlKey : !e.ctrlKey || e.metaKey) ||
                    !eI ||
                    "gallery" !== eP.current
                )
                    return;
                (e.preventDefault(), e.stopPropagation());
                let t = tx.P.getState();
                (t.currentPage === es.fB.HOME && t.setActiveMainLink(es.oH.ALL_CLIPS), t.setPendingSearchFocus(!0));
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
        e6 = er.size > 0,
        e5 = i.useCallback(() => {
            let e = eg.filter((e) => er.has(e.id));
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
        }, [eg, er, e9]),
        e4 = i.useCallback(async () => {
            let e = eg.filter((e) => er.has(e.id));
            await ev({ clips: e, onShared: e9 });
        }, [eg, er, ev, e9]),
        e7 = i.useCallback(
            async (e) => {
                0 !== e.length && (eo(new Set(e.map((e) => e.id))), await ev({ clips: e }), e9());
            },
            [ev, e9],
        ),
        te = i.useCallback(() => {
            let e = tx.P.getState();
            (e.setGameFacet(null),
                e.setClippedWithFacet(null),
                e.setActiveMainLink(es.oH.ALL_CLIPS),
                e.setPendingSearchFocus(!0));
        }, []),
        tt = i.useMemo(() => {
            let e = eg.filter((e) => er.has(e.id));
            return e.length > 0 && e.every((e) => e.isFavorite);
        }, [eg, er]),
        tl = i.useCallback(async () => {
            let e = eg.filter((e) => er.has(e.id)),
                t = !tt;
            (await Promise.all(e.filter((e) => e.isFavorite !== t).map((e) => (0, R.Yy)(e.id, { isFavorite: t }, !0))),
                e9());
        }, [eg, er, tt, e9]),
        tn = i.useMemo(() => {
            let e = 0,
                t = 0,
                l = 0;
            return (
                eg.forEach((n) => {
                    switch (n.decision?.signal?.type) {
                        case e8.Gy.MANUAL:
                            l++;
                            break;
                        case e8.Gy.DISTRIBUTED:
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
    let ta = i.useMemo(
        () => ({
            selectedClipIds: er,
            toggleClipSelection: eJ,
            clearSelection: e9,
            isMultiSelectMode: e6,
            picker: G,
            onShareSession: Z ? e7 : void 0,
        }),
        [er, eJ, e9, e6, G, Z, e7],
    );
    return (0, n.jsx)(E.f5, {
        value: Q,
        children: (0, n.jsx)(ti.$.Provider, {
            value: ta,
            children: (0, n.jsx)(m.N, {
                onClose: F,
                transitionState: K,
                "aria-label": eS ? "Doggo Game" : void 0,
                ...B,
                children: eS
                    ? (0, n.jsx)(tI, { onClose: F })
                    : (0, n.jsxs)("div", {
                          className: lY.jT,
                          ref: eM,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: s()(lY.PD, "gallery" === eC && lY.vu),
                                  inert: "gallery" !== eC,
                                  children: [
                                      (0, n.jsx)(lB, { gamesFacet: eu, mainLinkCounts: ef, mainLinkNewCounts: ex }),
                                      (0, n.jsxs)("div", {
                                          className: lY.Qs,
                                          ref: e$,
                                          style: {
                                              "--custom-clips-header-height": "68px",
                                              "--custom-clips-scroll-inset": `${eG}px`,
                                          },
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  ref: ec,
                                                  className: s()(lY.$Q, !eO && lY.iF),
                                                  children: [
                                                      (0, n.jsxs)("div", {
                                                          className: lY.ev,
                                                          children: [
                                                              null != e_ &&
                                                                  (0, n.jsx)(w.A, {
                                                                      game: eY,
                                                                      size: w.M.SMALL,
                                                                      className: lY.Ve,
                                                                      "aria-hidden": !0,
                                                                  }),
                                                              (0, n.jsx)(f.D, {
                                                                  variant: "heading-sm/semibold",
                                                                  color: "text-default",
                                                                  className: lY.Yn,
                                                                  children: eX,
                                                              }),
                                                              null == e_ &&
                                                                  null == eT &&
                                                                  (eR === es.oH.AUTO_CLIPS ||
                                                                      (W && eR === es.oH.HOME)) &&
                                                                  (0, n.jsx)(x.E, {
                                                                      icon: g.NitroWheelIcon,
                                                                      type: "early_access",
                                                                      variant: "primary",
                                                                  }),
                                                              null != eW &&
                                                                  !eB &&
                                                                  (0, n.jsxs)("div", {
                                                                      className: lY.Vl,
                                                                      children: [
                                                                          (0, n.jsx)("span", {
                                                                              className: lY.FK,
                                                                              "aria-hidden": "true",
                                                                          }),
                                                                          (0, n.jsx)(p.E, {
                                                                              variant: "body-md/normal",
                                                                              color: "text-muted",
                                                                              children: Y.intl.format(
                                                                                  q.default["+YIqQM"],
                                                                                  { count: eW },
                                                                              ),
                                                                          }),
                                                                      ],
                                                                  }),
                                                          ],
                                                      }),
                                                      (0, n.jsxs)("div", {
                                                          className: lY.o5,
                                                          children: [
                                                              W &&
                                                                  (0, n.jsx)(J, {
                                                                      showOffEducation: "gallery" === eC && eI,
                                                                  }),
                                                              (0, n.jsxs)("div", {
                                                                  className: lY.$s,
                                                                  children: [
                                                                      (0, n.jsx)(j.m, {
                                                                          position: "bottom",
                                                                          text: Y.intl.string(Y.t["5h0QOP"]),
                                                                          children: (0, n.jsx)(y.K, {
                                                                              onClick: te,
                                                                              icon: v.MagnifyingGlassIcon,
                                                                              size: "sm",
                                                                              variant: "icon-only",
                                                                              "aria-label": Y.intl.string(
                                                                                  Y.t["5h0QOP"],
                                                                              ),
                                                                          }),
                                                                      }),
                                                                      (0, n.jsx)(j.m, {
                                                                          position: "bottom",
                                                                          text: Y.intl.string(Y.t.cpT0Cq),
                                                                          children: (0, n.jsx)(y.K, {
                                                                              onClick: F,
                                                                              icon: b.XLargeIcon,
                                                                              size: "sm",
                                                                              variant: "icon-only",
                                                                              "aria-label": Y.intl.string(Y.t.cpT0Cq),
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                              eO
                                                  ? (0, n.jsx)(lR, {
                                                        filteredClips: eh,
                                                        totalClipCount: eg.length,
                                                        onEdit: e0,
                                                        onClipClick: X,
                                                        isLoading: ej,
                                                        onScroll: ed,
                                                    })
                                                  : (0, n.jsxs)("div", {
                                                        className: lY.LG,
                                                        children: [
                                                            (0, n.jsx)("div", {
                                                                className: lY.oP,
                                                                ref: ez,
                                                                children: (0, n.jsx)(ll, {
                                                                    allClips: eg,
                                                                    gamesFacet: eu,
                                                                    participantsFacet: em,
                                                                }),
                                                            }),
                                                            (0, n.jsx)(ty, {
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
                                                  (0, n.jsx)(tk, {
                                                      selectedCount: er.size,
                                                      allSelectedFavorited: tt,
                                                      onClear: e9,
                                                      onFavorite: tl,
                                                      onDelete: e5,
                                                      onShare: e4,
                                                      isSharing: eb,
                                                  }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, n.jsx)("div", {
                                  className: s()(lY.jN, "editing" === eC && lY.vu),
                                  inert: "editing" !== eC,
                                  onTransitionEnd: () => {
                                      switch (eC) {
                                          case "gallery":
                                              (ek(null), eD(h.ip.HIDDEN));
                                              break;
                                          case "editing":
                                              eD(h.ip.ENTERED);
                                      }
                                  },
                                  children:
                                      null != eE &&
                                      (0, n.jsx)(ee.p, {
                                          clip: eE,
                                          modalContainerRef: eM,
                                          children: (0, n.jsxs)(
                                              en.JQ,
                                              {
                                                  children: [
                                                      (0, n.jsx)(el.A, {
                                                          transitionState: eL,
                                                          onClose: e2,
                                                          onBack: e3,
                                                      }),
                                                      (0, n.jsx)(et.A, { channelId: H, onClose: e2, onExit: F }),
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
