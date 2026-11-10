l.d(t, { default: () => lD });
var n = l(477900),
    a = l(582128),
    i = l(503698),
    s = l.n(i),
    r = l(613412),
    o = l(935399),
    c = l(517846),
    u = l(855986),
    d = l(192308),
    m = l(521489),
    f = l(231723),
    h = l(534514),
    g = l(805251),
    x = l(403581),
    p = l(834730),
    y = l(866665),
    j = l(408278),
    v = l(7689),
    b = l(972213),
    C = l(765671),
    A = l(765548),
    k = l(775602),
    N = l(793574),
    E = l(688810),
    I = l(139286),
    S = l(429913),
    w = l(769015),
    L = l(669700),
    P = l(540999),
    M = l(287809),
    D = l(723702),
    _ = l(419490),
    T = l(898105),
    R = l(489496),
    O = l(554146),
    H = l(43105),
    F = l(428678),
    U = l(176781),
    z = l(650684),
    G = l(559106),
    K = l(263775),
    V = l(707116),
    B = l(464132),
    $ = l(49999),
    Y = l(683825),
    q = l(792996),
    X = l(829766);
let Q = [
    { mode: "off", icon: F.DenyIcon },
    { mode: "manual", icon: U.ClipsIcon },
    { mode: "auto", icon: z.ClipsAutoIcon },
];
function W(e) {
    let { targetElementRef: t } = e,
        [l, a] = (0, K.kn)([O.M.AUTOCLIPPING_EARLY_ACCESS_LIBRARY_EDUCATION_POPOVER], { bypassAutoDismiss: !0 });
    return l !== O.M.AUTOCLIPPING_EARLY_ACCESS_LIBRARY_EDUCATION_POPOVER
        ? null
        : (0, n.jsx)(H.A, {
              targetElementRef: t,
              position: "bottom",
              alignmentStrategy: "trigger-center",
              badge: "early_access",
              title: q.intl.string(Y.default.yriD3v),
              body: q.intl.string(Y.default.UBihuW),
              onRequestClose: () => a($.i.USER_DISMISS),
              actions: [
                  { text: q.intl.string(q.t["NX+WJN"]), variant: "secondary", onClick: () => a($.i.TAKE_ACTION) },
              ],
          });
}
function Z(e) {
    let { mode: t, icon: l, selected: i, tooltip: s, onSelect: r, onKeyDown: o } = e,
        c = a.useRef(null),
        u = (function (e) {
            switch (e) {
                case "off":
                    return q.intl.string(Y.default["uO/2T5"]);
                case "manual":
                    return q.intl.string(Y.default.ms4ibY);
                case "auto":
                    return q.intl.string(Y.default["4gzBi+"]);
            }
        })(t);
    return (0, n.jsx)(G.vN, {
        focusTarget: c,
        ringTarget: c,
        children: (0, n.jsx)(y.m, {
            position: "bottom",
            text: s,
            children: (0, n.jsxs)("button", {
                ref: c,
                type: "button",
                role: "radio",
                className: X.m,
                "aria-checked": i,
                "aria-label": u,
                tabIndex: i ? 0 : -1,
                onClick: () => {
                    i || r(t);
                },
                onKeyDown: o,
                children: [
                    (0, n.jsx)(l, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    i &&
                        (0, n.jsx)(p.E, {
                            tag: "span",
                            variant: "body-sm/medium",
                            color: "none",
                            "aria-hidden": !0,
                            children: u,
                        }),
                ],
            }),
        }),
    });
}
function J(e) {
    let { showOffEducation: t = !1 } = e,
        { value: l, onChange: i } = (0, B.U)(),
        s = (0, V.T)(),
        r = a.useRef(null);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                ref: r,
                className: X.O,
                role: "radiogroup",
                "aria-label": q.intl.string(Y.default.eIX9be),
                children: Q.map((e, t) => {
                    let { mode: a, icon: o } = e;
                    return (0, n.jsx)(
                        Z,
                        {
                            mode: a,
                            icon: o,
                            selected: a === l,
                            tooltip: (function (e, t) {
                                switch (e) {
                                    case "off":
                                        return q.intl.string(Y.default.ElHi4v);
                                    case "manual":
                                        return t.length > 0
                                            ? q.intl.formatToPlainString(Y.default.QoCXBT, { keybind: t })
                                            : q.intl.string(Y.default.YlBcu8);
                                    case "auto":
                                        return q.intl.string(Y.default["bF6l+Y"]);
                                }
                            })(a, s),
                            onSelect: i,
                            onKeyDown: (e) =>
                                (function (e, t) {
                                    let l;
                                    if (!e.altKey && !e.ctrlKey && !e.metaKey) {
                                        switch (e.key) {
                                            case "ArrowRight":
                                            case "ArrowDown":
                                                l = (t + 1) % Q.length;
                                                break;
                                            case "ArrowLeft":
                                            case "ArrowUp":
                                                l = (t + Q.length - 1) % Q.length;
                                                break;
                                            case "Home":
                                                l = 0;
                                                break;
                                            case "End":
                                                l = Q.length - 1;
                                                break;
                                            default:
                                                return;
                                        }
                                        (e.preventDefault(),
                                            r.current?.querySelectorAll('[role="radio"]')[l]?.focus(),
                                            i(Q[l].mode));
                                    }
                                })(e, t),
                        },
                        a,
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
    ea = l(352527),
    ei = l(280483),
    es = l(111994);
l(321073);
var er = l(118057),
    eo = l(289873),
    ec = l(962125),
    eu = l(915089),
    ed = l(62617);
function em(e) {
    let { alt: t, ariaLabel: l, ariaHidden: i, role: s, width: r, height: o, className: c, style: u } = e,
        d = a.useMemo(
            () => (0, ed.H)({ width: r, height: o, intrinsicWidth: 288, intrinsicHeight: 162, style: u }),
            [r, o, u],
        );
    return (0, n.jsx)("img", {
        style: d,
        src: "https://cdn.discordapp.com/assets/content/1e6b3a97c86291528609222cdeb8b18fdcce3270f796106d4af3d0f7fa3cce18.svg",
        className: (0, ed.Z)(c),
        alt: t,
        "aria-label": l,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
var ef = l(164636),
    eh = l(687966),
    eg = l(646514),
    ex = l(475358),
    ep = l(123292),
    ey = l(292801),
    ej = l(780964),
    ev = l(766075),
    eb = l(532624),
    eC = l(350535),
    eA = l(572164),
    ek = l(953932),
    eN = l(652215),
    eE = l(71967);
function eI(e) {
    let { header: t, description: l } = e;
    return (0, n.jsxs)("div", {
        className: eE.Nr,
        children: [t, (0, n.jsx)(p.E, { color: "text-default", variant: "body-sm/medium", children: l })],
    });
}
function eS() {
    let e = (0, ef.bG)([eb.Ay], () => eb.Ay.getKeybindForAction(eN.hCu.SAVE_CLIP)),
        t = null != e ? eC.dI(e.shortcut, !0) : null;
    return (0, n.jsxs)("div", {
        className: eE.kR,
        children: [
            (0, n.jsx)(eI, {
                header: (0, n.jsx)(eh.GameControllerIcon, { size: "refresh_sm", color: eg.A.colors.ICON_DEFAULT }),
                description: q.intl.string(Y.default["4K56sP"]),
            }),
            (0, n.jsx)(eI, {
                header: null != t ? (0, n.jsx)(ex.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  q.intl.format(Y.default.BIwQis, { keybind: t }),
                                  (0, n.jsx)("div", {
                                      className: eE.JH,
                                      children: (0, n.jsx)(ep.Q, {
                                          text: q.intl.string(Y.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "body-sm/medium",
                                          onClick: function () {
                                              (0, ev.openUserSettings)(ej.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : q.intl.string(Y.default.HOUDUm),
            }),
            (0, n.jsx)(eI, {
                header: (0, n.jsx)(ey.ArrowAngleRightUpIcon, { size: "refresh_sm", color: eg.A.colors.ICON_DEFAULT }),
                description: q.intl.string(Y.default.DLzdl7),
            }),
        ],
    });
}
function ew(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, eA.E)(),
        i = (0, T.r)("ClipsGalleryEmptyState").enabled,
        { onChange: s } = (0, B.U)(),
        r = a.useCallback(() => s("manual"), [s]);
    return (0, n.jsx)("div", {
        className: eE.kL,
        children: (0, n.jsxs)("div", {
            className: eE.Qs,
            children: [
                (0, n.jsx)(em, { width: 213, height: 135, alt: "" }),
                (0, n.jsx)(h.D, {
                    className: eE.wx,
                    variant: "heading-xl/semibold",
                    children: t ? q.intl.string(Y.default["+M2iLf"]) : q.intl.string(Y.default.m2GEpP),
                }),
                t &&
                    (0, n.jsx)(p.E, {
                        className: eE.h_,
                        variant: "body-md/medium",
                        children: q.intl.string(Y.default.xkY5xS),
                    }),
                !l &&
                    (0, n.jsx)("div", {
                        className: eE.SO,
                        children: (0, n.jsx)(ek.A, { onEnableClips: i ? r : void 0 }),
                    }),
                l && !t && (0, n.jsx)(eS, {}),
            ],
        }),
    });
}
let eL = 4 / 3;
var eP = l(621466),
    eM = l(61491),
    eD = l(342952),
    e_ = l(890856),
    eT = l(939249),
    eR = l(820081),
    eO = l(365199),
    eH = l(778712),
    eF = l(821609),
    eU = l(22231),
    ez = l(983851),
    eG = l(31300),
    eK = l(442433),
    eV = l(587895),
    eB = l(927813),
    e$ = l(995273);
function eY(e) {
    let { timestamp: t, abbreviated: l = !0 } = e,
        [n, i] = a.useState(() => (0, e$.jb)(t, l));
    return (
        a.useEffect(() => {
            i((0, e$.jb)(t, l));
            let e = Date.now() - t;
            if (e > eB.A.Millis.DAY) return;
            let n = e >= eB.A.Millis.HOUR ? eB.A.Millis.HOUR : eB.A.Millis.MINUTE,
                a = setInterval(
                    () => {
                        i((0, e$.jb)(t, l));
                    },
                    n,
                    n - (e % n),
                );
            return () => clearInterval(a);
        }, [t, l]),
        n
    );
}
var eq = l(549685),
    eX = l(129230),
    eQ = l(403362),
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
    e8 = l(443184),
    e7 = l(696016),
    e4 = l(153511);
function te(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    e6()(l?.type === e7.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let a = (0, u.bG)([M.default], () => M.default.getUser(l.remoteTriggerUserId));
    if (null == a) return null;
    let i = a.globalName ?? a.username;
    return (0, n.jsx)(y.m, {
        text: q.intl.string(Y.default.vTTkFF),
        children: (0, n.jsxs)("div", {
            className: e4.S,
            children: [
                (0, n.jsx)("img", { src: a.getAvatarURL(null, 12, !1), className: e4.$, alt: i }),
                (0, n.jsx)(p.E, {
                    color: "text-overlay-light",
                    variant: "body-xs/medium",
                    children: q.intl.formatToPlainString(Y.default.QJ7i8Z, { username: i }),
                }),
            ],
        }),
    });
}
function tt(e) {
    let { icon: t, text: l, tooltipText: a } = e;
    return (0, n.jsx)(y.m, {
        text: a,
        children: (0, n.jsxs)("div", {
            className: e4.S,
            children: [
                (0, n.jsx)(t, { size: "xxs", color: "currentColor" }),
                (0, n.jsx)(p.E, { color: "text-overlay-light", variant: "body-xs/medium", children: l }),
            ],
        }),
    });
}
function tl(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === e7.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case e7.Gy.DISTRIBUTED:
            return (0, n.jsx)(te, { clip: t });
        case e7.Gy.LAUGHTER:
            return (0, n.jsx)(tt, {
                icon: e5.ReactionIcon,
                text: q.intl.string(Y.default.bTC23D),
                tooltipText: q.intl.string(Y.default["ry+jxm"]),
            });
        case e7.Gy.SHOUTING:
            return (0, n.jsx)(tt, {
                icon: e5.ReactionIcon,
                text: q.intl.string(Y.default["3gqpuo"]),
                tooltipText: q.intl.string(Y.default["ry+jxm"]),
            });
        case e7.Gy.GAME_EVENT: {
            let e = (0, e8.u6)(t.applicationId, e7.Gy.GAME_EVENT, t.decision.signal.eventName);
            if (null == e) return null;
            return (0, n.jsx)(tt, {
                icon: e,
                text: (0, e8.PZ)(t.applicationId, e7.Gy.GAME_EVENT, t.decision.signal.eventName) ?? "",
                tooltipText: q.intl.string(Y.default["347DBb"]),
            });
        }
        default:
            return null;
    }
}
var tn = l(718812),
    ta = l(721610),
    ti = l(686320),
    ts = l(175764);
function tr(e) {
    let { clip: t, actionsDisabled: l, isNew: a, onClick: i, onEdit: s, gridItemProps: r } = e;
    return (0, n.jsx)(eZ.Cl, {
        clip: t,
        children: (0, n.jsx)(to, { actionsDisabled: l, isNew: a, onClick: i, onEdit: s, gridItemProps: r }),
    });
}
function to(e) {
    let { actionsDisabled: t, isNew: i, onClick: r, onEdit: o, gridItemProps: c } = e,
        d = (0, eZ.Y_)(),
        m = !0 === d.pending,
        f = t || m,
        { analyticsLocations: h } = (0, E.Ay)(N.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: g, toggleClipSelection: x, isMultiSelectMode: p, picker: y } = a.useContext(ta.$),
        j = y?.allowMultiSelect ?? !0,
        v = null != y ? (0, ti.$)(y.action).label : void 0,
        [b, C] = a.useState(!1),
        [A, I] = a.useState(!1),
        [S, w] = a.useState(!1),
        [L, P] = a.useState(!1),
        [M, D] = a.useState(0),
        T = g.has(d.id),
        R = d.type === e7.nQ.SCREENSHOT,
        O = "auto" === d.clipMethod,
        H = (0, u.bG)([k.Ay], () => k.Ay.keyboardModeEnabled),
        F = (A || b || (S && H)) && !T,
        U = a.useCallback(() => w(!0), []),
        z = a.useCallback((e) => {
            e.currentTarget.contains(e.relatedTarget) || w(!1);
        }, []);
    a.useEffect(() => {
        if (!F || R || m) return;
        let e = window.setTimeout(() => P(!0), 150);
        return () => {
            (window.clearTimeout(e), P(!1));
        };
    }, [F, R, m]);
    let G = a.useRef(null),
        K = a.useCallback(() => {
            G.current?.releaseSource();
        }, []),
        V = a.useCallback((e) => {
            G.current?.seek(e);
        }, []),
        B = a.useCallback(() => C(!1), []),
        $ = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), x(d.id));
            },
            [x, d.id],
        ),
        Y = a.useCallback(
            (e) => {
                C(!0);
                let t =
                    p && g.size > 0
                        ? Array.from(g)
                              .map((e) => _.Ay.getClipById(e))
                              .filter(eQ.Vq)
                        : [d];
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
                                analyticsLocations: h,
                                clips: t,
                                actionsDisabled: f,
                                showExportingModal: !0,
                                onMainAction: null != y ? () => y.onPick(d) : void 0,
                                mainAction: y?.action,
                                onShare: () => {
                                    eX.default.track(eN.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...eW.lc(),
                                        ...eW.Zy(d),
                                    });
                                },
                                onEdit: () => {
                                    (o(d),
                                        eX.default.track(eN.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...eW.lc(),
                                            ...eW.Zy(d),
                                        }));
                                },
                                onBeforeDelete: K,
                                onAfterDelete: () => {
                                    eX.default.track(eN.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...eW.lc(),
                                        ...eW.Zy(d),
                                    });
                                },
                            });
                    },
                    { onClose: B },
                );
            },
            [d, p, g, f, B, o, K, y, h],
        ),
        X = a.useCallback(
            (e) => {
                f || (e.preventDefault(), e.stopPropagation(), Y(e));
            },
            [f, Y],
        ),
        Q = a.useCallback(
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
                    eX.default.track(eN.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" }));
            },
            [o, d],
        ),
        Z = a.useCallback(
            (e) => {
                !f &&
                    (!(0, eP.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") &&
                            null == e.target.closest("[data-clips-progress]") &&
                            null == e.target.closest("[data-clips-select]") &&
                            e.currentTarget.contains(e.target))) &&
                    (j && e.shiftKey ? (e.preventDefault(), x(d.id)) : j && p ? x(d.id) : null != r && r(d),
                    eX.default.track(eN.HAw.CLIP_GALLERY_CARD_CLICKED, { ...eW.lc(), ...eW.Zy(d) }));
            },
            [f, j, p, x, d, r],
        );
    return (0, n.jsx)(E.f5, {
        value: h,
        children: (0, n.jsx)("div", {
            className: ts.hl,
            onFocus: U,
            onBlur: z,
            children: (0, n.jsx)(e_.s, {
                "aria-disabled": f,
                "aria-label": v ?? q.intl.string(R ? q.t["HO/oXl"] : q.t.bt75uw),
                onClick: f ? void 0 : Z,
                onContextMenu: X,
                buttonProps: null != c ? { role: "button", id: c.id, tabIndex: c.tabIndex } : void 0,
                buttonRef: c?.ref,
                onFocus: c?.onFocus,
                className: s()(ts.Nr, { [ts.r9]: f, [ts.in]: b, [ts.wH]: T }),
                onMouseEnter: () => I(!0),
                onMouseLeave: () => I(!1),
                children: (0, n.jsx)("div", {
                    className: ts.w7,
                    children: (0, n.jsxs)(tc, {
                        ref: G,
                        isPlaying: L,
                        onProgressChange: D,
                        children: [
                            m && (0, n.jsx)("div", { className: ts.mi, children: (0, n.jsx)(eo.y, {}) }),
                            (0, n.jsx)("div", {
                                className: s()(ts.w$, { [ts.t7]: F, [ts.Vg]: O }),
                                inert: !0,
                                "aria-hidden": "true",
                            }),
                            (0, n.jsx)(tu, {
                                isNew: i,
                                showHoverActions: F && !f,
                                showSelect: j && (F || T),
                                isSelected: T,
                                onToggleSelect: $,
                                onMenu: Q,
                                onBeforeDelete: K,
                            }),
                            (0, n.jsx)(td, { showHoverState: F, playbackProgress: M, onEdit: W, onSeek: V }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function tc(e) {
    let { isPlaying: t, onProgressChange: l, children: a, ref: i } = e;
    return (0, n.jsx)(e3.d, {
        ref: i,
        isPlaying: t,
        preload: "none",
        onProgressChange: l,
        children: (0, n.jsx)(e2.h, { isVisible: !0, className: ts.Lw, children: a }),
    });
}
function tu(e) {
    let {
            isNew: t,
            showHoverActions: l,
            showSelect: a,
            isSelected: i,
            onToggleSelect: r,
            onMenu: o,
            onBeforeDelete: c,
        } = e,
        u = (0, eZ.Y_)(),
        d = !0 === u.pending;
    return (0, n.jsxs)("div", {
        className: ts.wx,
        children: [
            (0, n.jsxs)("div", {
                className: ts.LD,
                children: [
                    a &&
                        (0, n.jsx)(eT.D, {
                            "aria-label": q.intl.string(q.t.XqMe3N),
                            "aria-pressed": i,
                            onClick: r,
                            "data-clips-select": "true",
                            className: s()(ts.UJ, { [ts.ZK]: i }),
                            children: i && (0, n.jsx)(eR.CheckmarkSmallBoldIcon, { size: "xs", color: "currentColor" }),
                        }),
                    !d &&
                        t &&
                        (0, n.jsx)("div", {
                            className: ts.Ad,
                            children: (0, n.jsx)(p.E, {
                                variant: "body-xs/semibold",
                                color: "text-overlay-light",
                                children: q.intl.string(q.t.y2b7CA),
                            }),
                        }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: ts.IE,
                children: [
                    (u.isFavorite || l) &&
                        (0, n.jsx)("div", {
                            className: s()({ [ts.L6]: u.isFavorite }),
                            children: (0, n.jsx)(e0.z, {}),
                        }),
                    l &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(y.m, {
                                    text: q.intl.string(q.t["UKOtz+"]),
                                    children: (0, n.jsx)(j.K, {
                                        onClick: o,
                                        icon: eO.MoreHorizontalIcon,
                                        "aria-label": q.intl.string(q.t["UKOtz+"]),
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
function td(e) {
    let { showHoverState: t, playbackProgress: l, onEdit: i, onSeek: r } = e,
        o = (0, eZ.Y_)(),
        c = o.type === e7.nQ.SCREENSHOT,
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
        y = (0, u.yK)([M.default], () => o.users.map((e) => M.default.getUser(e)).filter(eQ.Vq)),
        j = eY({ timestamp: o.createdAt }),
        v = o.decision?.signal?.type,
        b = null != v && v !== e7.Gy.MANUAL,
        C =
            y.length > 0
                ? (0, n.jsx)("span", {
                      className: ts.HD,
                      "data-clips-avatars": "true",
                      children: (0, n.jsx)(eD.A, {
                          maxUsers: 3,
                          users: y,
                          size: eH._3.SIZE_16,
                          "aria-label": q.intl.string(q.t.WTozwe),
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
                        (0, n.jsxs)("div", { className: ts.gH, children: [(0, n.jsx)(th, {}), (0, n.jsx)(tf, {})] }),
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
                                            children: q.intl.format(Y.default["0QCBug"], { time: j }),
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
                                        ref: d,
                                        className: ts.hr,
                                        onPointerDown: h,
                                        onPointerMove: g,
                                        onPointerUp: x,
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
                                            children: (0, n.jsx)(eF.$, {
                                                variant: "overlay-secondary",
                                                size: "sm",
                                                icon: eU.PencilIcon,
                                                text: q.intl.string(q.t.bt75uw),
                                                onClick: i,
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
            return (0, eM.rB)(l);
        }, [e.length, e.editMetadata]);
    return t
        ? null
        : (0, n.jsxs)("div", {
              className: ts.p0,
              children: [
                  i && (0, n.jsx)(eq.A, { color: "white", width: 14, height: 14 }),
                  (0, n.jsx)(p.E, {
                      variant: "body-xs/medium",
                      color: "text-overlay-light",
                      tabularNumbers: !0,
                      children: l ? q.intl.string(q.t["2Fp7OP"]) : s,
                  }),
              ],
          });
}
function tf() {
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
function th() {
    let e = (0, eZ.Y_)(),
        t = (0, u.bG)([eV.A], () => (null != e.applicationId ? eV.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, n.jsx)("div", {
        className: ts.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, n.jsx)("img", { src: l, alt: "", className: ts.T_ })
                : e.type === e7.nQ.VOICE_CLIP
                  ? (0, n.jsx)(ez.VoiceNormalIcon, { size: "xs", color: "currentColor" })
                  : (0, n.jsx)(eG.ScreenIcon, { size: "xs", color: "currentColor" }),
    });
}
tc.displayName = "CardThumbnail";
var tg = l(792852);
function tx(e) {
    return Math.min(45 * e, 520);
}
var tp = l(91440),
    ty = l(762831);
function tj(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: i, onEdit: s, isLoading: r, topInset: o = 0 } = e,
        [c, d] = a.useState({ width: 0, height: 0 }),
        m = (0, u.yK)([_.Ay], () => _.Ay.getNewClipIds()),
        f = (0, u.bG)([_.Ay], () => _.Ay.getExportingClipIds().size > 0),
        g = (0, tg.P)((e) => e.activeMainLink),
        x = (0, tg.P)((e) => e.gameFacet),
        y = (0, tg.P)((e) => e.clippedWithFacet),
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
                    title: q.intl.string(q.t["kB2R/0"]),
                    description: t ? q.intl.string(q.t["6AXirz"]) : void 0,
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
        v = a.useMemo(() => [o, 24, 0, 24], [o]),
        { width: b } = c,
        { tileWidth: C, columns: A } = a.useMemo(() => {
            var e, l;
            let n, a, i;
            return (
                (e = t.length),
                (n = Math.max(1, Math.floor(((l = b - 48) + 20) / 340))),
                (a = Math.max(320, (l - 20 * (n - 1)) / n)),
                (i = Math.ceil(e / n)),
                { tileWidth: a, columns: n, rows: i }
            );
        }, [t.length, b, 48]),
        N = (0, eu.GV)(),
        E = a.useRef(null),
        I = a.useMemo(() => {
            let e = Math.max(1, A),
                t = [];
            for (let l of j) {
                let n = Math.ceil(l.clips.length / e);
                for (let a = 0; a < n; a++) t.push(Math.min(e, l.clips.length - a * e));
            }
            return t;
        }, [j, A]),
        S = a.useCallback(
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
            getItemProps: L,
            getRowProps: P,
        } = (0, er.A)({ navId: N, columnCounts: I, prepareFocus: S }),
        M = a.useMemo(() => j.map((e) => Math.ceil(e.clips.length / A)), [j, A]),
        D = a.useMemo(() => M.reduce((e, t) => e + t, 0), [M]),
        T = Math.floor(C / eL) + 20,
        R = j.length > 0 ? `${g}:${x ?? ""}:${y ?? ""}` : null,
        O = (function (e) {
            let t = (0, u.bG)([k.Ay], () => k.Ay.useReducedMotion),
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
                let o = a * A,
                    c = r.clips.slice(o, o + A);
                return (0, n.jsx)(
                    "div",
                    {
                        className: tp.UX,
                        ...P(e),
                        children: c.map((t, l) => {
                            let a = { width: C };
                            return (
                                O && (a["--custom-entrance-delay"] = `${tx(e + l)}ms`),
                                (0, n.jsx)(
                                    "div",
                                    {
                                        className: O ? ty.$ : void 0,
                                        style: a,
                                        children: (0, n.jsx)(tr, {
                                            actionsDisabled: f,
                                            isNew: m.includes(t.id),
                                            onClick: i ?? s,
                                            onEdit: s,
                                            clip: t,
                                            gridItemProps: L(l, e),
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
            [j, A, C, f, m, i, s, P, L, O, R],
        ),
        F = a.useCallback(
            (e) => {
                let t = j[e];
                return t?.description != null ? 66 : 44;
            },
            [j],
        ),
        U = a.useCallback(
            (e) => {
                let t = j[e];
                return null == t
                    ? null
                    : (0, n.jsxs)(
                          "div",
                          {
                              className: tp.aE,
                              children: [
                                  (0, n.jsx)(h.D, {
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
            [j],
        );
    if (!r && 0 === j.length) return (0, n.jsx)(ew, { isEmptyBecauseQuery: l > 0 });
    if (r && 0 === j.length) return (0, n.jsx)("div", { className: tp.dc, children: (0, n.jsx)(eo.y, {}) });
    let z = (0, n.jsx)(ec.A, {
            ref: E,
            role: "none presentation",
            className: tp.Vb,
            listPadding: v,
            renderRow: H,
            renderSectionHeader: U,
            rowCount: D,
            rowCountBySection: M,
            rowHeight: T,
            sectionHeaderHeight: F,
            onResize: d,
        }),
        { onFocus: G, ...K } = w();
    return (0, n.jsx)("div", { className: tp.UT, ...K, children: z });
}
var tv = l(405433),
    tb = l(241326),
    tC = l(27232),
    tA = l(505930),
    tk = l(322911);
function tN(e) {
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
        u = q.intl.string(l ? Y.default.IZsalP : Y.default.ihBfyA),
        d = (0, n.jsx)(eF.$, {
            variant: "primary",
            size: "sm",
            icon: tv.ShareIcon,
            text: q.intl.string(q.t.RDE0Sc),
            onClick: r,
            disabled: c,
            loading: o,
        });
    return (0, n.jsxs)("div", {
        "aria-label": q.intl.string(q.t.z2jK6X),
        role: "region",
        className: tk.M0,
        children: [
            (0, n.jsxs)("div", {
                className: tk.h5,
                children: [
                    (0, n.jsx)(p.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: q.intl.format(Y.default.cSfYIv, { count: t }),
                    }),
                    (0, n.jsx)("span", { className: tk.Om, "aria-hidden": "true" }),
                    (0, n.jsx)(eT.D, {
                        className: tk.IU,
                        onClick: a,
                        children: (0, n.jsx)(p.E, {
                            variant: "body-sm/medium",
                            color: "text-link",
                            children: q.intl.string(q.t.VkKicb),
                        }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: tk.o1,
                children: [
                    (0, n.jsx)(y.m, {
                        text: q.intl.string(q.t.oyYWHE),
                        children: (0, n.jsx)(j.K, {
                            onClick: s,
                            icon: tb.TrashIcon,
                            size: "sm",
                            variant: "secondary",
                            "aria-label": q.intl.string(q.t.oyYWHE),
                        }),
                    }),
                    (0, n.jsx)(
                        y.m,
                        {
                            text: u,
                            children: (0, n.jsx)(j.K, {
                                onClick: i,
                                icon: l ? tC.StarIcon : tA.StarOutlineIcon,
                                size: "sm",
                                variant: "secondary",
                                "aria-label": u,
                            }),
                        },
                        `favorite:${l}`,
                    ),
                    (0, n.jsx)(y.m, { text: c ? q.intl.string(Y.default.qpw1d9) : null, asContainer: !0, children: d }),
                ],
            }),
        ],
    });
}
var tE = l(70860);
function tI(e) {
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
                    .e(349193)
                    .then(l.bind(l, 986357))
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
            className: tE.kL,
            children: [
                (0, n.jsx)("canvas", { ref: i, className: tE.Ji, tabIndex: 0, "aria-label": "Doggo Game" }),
                (0, n.jsx)("div", {
                    className: tE.b,
                    children: (0, n.jsx)(j.K, {
                        onClick: t,
                        icon: b.XLargeIcon,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": q.intl.string(q.t.cpT0Cq),
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
    tL = l(847374),
    tP = l(165862),
    tM = l(477782),
    tD = l(112173),
    t_ = l(97808),
    tT = l(683438),
    tR = l(682163),
    tO = l(71393),
    tH = l(341923),
    tF = l(305866),
    tU = l(441349),
    tz = l(789645),
    tG = l(70254),
    tK = l(569737);
function tV(e) {
    return (e.setHours(0, 0, 0, 0), e.getTime());
}
function tB(e) {
    return (e.setHours(23, 59, 59, 999), e.getTime());
}
function t$(e, t) {
    if (null == e && null == t) return null;
    let l = (0, tG.Xj)();
    return { preset: "custom", after: null != e ? tV(e.toDate(l)) : null, before: null != t ? tB(t.toDate(l)) : null };
}
function tY(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new tK.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let tq = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function tX(e) {
    return tq.format(new Date(e));
}
function tQ(e) {
    switch (e.preset) {
        case "today":
            return q.intl.string(Y.default.yOAWWM);
        case "yesterday":
            return q.intl.string(Y.default["PtV/Ti"]);
        case "last-3-days":
            return q.intl.string(Y.default.xfmv7I);
        case "this-year":
            return q.intl.string(Y.default["+eE7zX"]);
        case "last-year":
            return q.intl.string(Y.default.Nwj9v0);
        case "custom": {
            let t = null != e.after ? tX(e.after) : null,
                l = null != e.before ? tX(e.before) : null;
            if (null != t && null != l) return q.intl.formatToPlainString(Y.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return q.intl.formatToPlainString(Y.default.k1FkTL, { date: t });
            if (null != l) return q.intl.formatToPlainString(Y.default["4NlpHD"], { date: l });
            return q.intl.string(Y.default.tv9apA);
        }
    }
}
var tW = l(435021);
function tZ(e) {
    let { closePopout: t } = e,
        l = (0, tg.P)((e) => e.dateFilter),
        i = (0, tg.P)((e) => e.setDateFilter),
        [r, o] = a.useState(l?.preset === "custom"),
        [c, u] = a.useState(() => (l?.preset === "custom" ? tY(l.after) : null)),
        [d, m] = a.useState(() => (l?.preset === "custom" ? tY(l.before) : null)),
        f = a.useMemo(
            () => [
                { key: "today", label: q.intl.string(Y.default.yOAWWM) },
                { key: "yesterday", label: q.intl.string(Y.default["PtV/Ti"]) },
                { key: "last-3-days", label: q.intl.string(Y.default.xfmv7I) },
                { key: "this-year", label: q.intl.string(Y.default["+eE7zX"]) },
                { key: "last-year", label: q.intl.string(Y.default.Nwj9v0) },
            ],
            [],
        ),
        h = l?.preset ?? null,
        g = r && "custom" !== h ? null : h,
        x = a.useMemo(() => (0, tG.Ec)((0, tG.Xj)()), []),
        v = a.useCallback(
            (e) => {
                (i(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: tV(new Date(t)), before: tB(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: tV(new Date(l)), before: tB(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 2), { preset: e, after: tV(l), before: tB(new Date(t)) }
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
        b = a.useCallback(() => {
            o((e) => !e);
        }, []),
        C = a.useCallback(
            (e) => {
                (u(e), i(t$(e, d)));
            },
            [d, i],
        ),
        A = a.useCallback(
            (e) => {
                (m(e), i(t$(c, e)));
            },
            [c, i],
        ),
        k = a.useCallback(() => {
            (u(null), m(null), i(null));
        }, [i]),
        N = null != c || null != d,
        E = a.useRef(null),
        I = a.useCallback(() => Array.from(E.current?.querySelectorAll('[role="button"]') ?? []), []),
        S = a.useCallback(
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
        w = a.useCallback(
            (e) => {
                let l = e.relatedTarget;
                (null != l && (e.currentTarget.contains(l) || null != l.closest('[role="dialog"]'))) || t();
            },
            [t],
        );
    return (0, n.jsx)(tF.l, {
        "aria-label": q.intl.string(Y.default.upqksT),
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
                            children: q.intl.string(Y.default.upqksT),
                        }),
                        (0, n.jsxs)("div", {
                            ref: E,
                            className: tW.eF,
                            onKeyDown: S,
                            children: [
                                f.map((e) =>
                                    (0, n.jsx)(
                                        eT.D,
                                        {
                                            className: s()(tW.zD, g === e.key && tW.pH),
                                            onClick: () => v(e.key),
                                            "aria-pressed": g === e.key,
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
                                    className: s()(tW.zD, tW.Kl, (r || "custom" === h) && tW.pH),
                                    onClick: b,
                                    "aria-expanded": r,
                                    children: [
                                        (0, n.jsx)(p.E, {
                                            variant: "body-sm/medium",
                                            color: "currentColor",
                                            children: q.intl.string(Y.default.tv9apA),
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
                                            children: q.intl.string(Y.default["96vZuU"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tW.h0,
                                            children: [
                                                (0, n.jsx)(tU.l, {
                                                    label: q.intl.string(Y.default["96vZuU"]),
                                                    hideLabel: !0,
                                                    value: c,
                                                    onChange: C,
                                                    maxValue: d ?? x,
                                                }),
                                                null != c &&
                                                    (0, n.jsx)(y.m, {
                                                        text: q.intl.string(q.t.VkKicb),
                                                        children: (0, n.jsx)(j.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tz.XSmallIcon,
                                                            onClick: () => C(null),
                                                            "aria-label": q.intl.string(q.t.VkKicb),
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
                                            children: q.intl.string(Y.default["GL51/b"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tW.h0,
                                            children: [
                                                (0, n.jsx)(tU.l, {
                                                    label: q.intl.string(Y.default["GL51/b"]),
                                                    hideLabel: !0,
                                                    value: d,
                                                    onChange: A,
                                                    minValue: c ?? void 0,
                                                    maxValue: x,
                                                }),
                                                null != d &&
                                                    (0, n.jsx)(y.m, {
                                                        text: q.intl.string(q.t.VkKicb),
                                                        children: (0, n.jsx)(j.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tz.XSmallIcon,
                                                            onClick: () => A(null),
                                                            "aria-label": q.intl.string(q.t.VkKicb),
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
                                className: tW.dS,
                                children: (0, n.jsx)(ep.Q, { size: "sm", text: q.intl.string(q.t.VkKicb), onClick: k }),
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
        f = i.size > 0 ? `${t} (${i.size})` : t;
    return (0, n.jsx)(tw.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: u,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(t3.p, {
                "aria-label": t,
                placeholder: o,
                value: d,
                multiSelect: r,
                onChange: s,
                onClose: l,
                emptyStateText: c ?? q.intl.string(q.t.QwSXv8),
                maxVisibleItems: 6,
                children: m,
            });
        },
        children: (e) =>
            (0, n.jsx)(eF.$, {
                ...e,
                buttonRef: u,
                size: "sm",
                variant: "secondary",
                text: f,
                icon: tL.ChevronSmallDownIcon,
                iconPosition: "end",
            }),
    });
}
var t6 = l(187671);
function t5(e) {
    let { label: t, icon: l, onRemove: a, removeAriaLabel: i } = e;
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
                onClick: a,
                "aria-label": i ?? q.intl.string(q.t.N86XcP),
                children: (0, n.jsx)(tz.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var t8 = l(401756);
let t7 = { all: Y.default.lscwjQ, auto: Y.default.xrOIkz, manual: Y.default.D7HSLJ };
function t4() {
    let e = (0, tg.P)((e) => e.dateFilter),
        t = a.useRef(null),
        l = null != e ? tQ(e) : q.intl.string(Y.default.upqksT);
    return (0, n.jsx)(tw.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(tZ, { closePopout: t });
        },
        children: (e) =>
            (0, n.jsx)(eF.$, {
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
function le() {
    let e = (0, tg.P)((e) => e.sortOrder),
        t = (0, tg.P)((e) => e.setSortOrder),
        l = a.useRef(null),
        i = e === es.mu.OLDEST ? q.intl.string(q.t["0gitSE"]) : q.intl.string(q.t["4LLKx3"]);
    return (0, n.jsx)(tw.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, n.jsx)(tP.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": q.intl.string(q.t.XvNMNk),
                onClose: a,
                onSelect: void 0,
                children: (0, n.jsxs)(tM.rX, {
                    children: [
                        (0, n.jsx)(tM.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: q.intl.string(q.t["4LLKx3"]),
                            action: () => {
                                (t(es.mu.MOST_RECENT), a());
                            },
                            checked: e === es.mu.MOST_RECENT,
                        }),
                        (0, n.jsx)(tM.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: q.intl.string(q.t["0gitSE"]),
                            action: () => {
                                (t(es.mu.OLDEST), a());
                            },
                            checked: e === es.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, n.jsx)(eF.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: i,
                icon: tD.ArrowsUpDownIcon,
            }),
    });
}
function lt() {
    let e = (0, tg.P)((e) => e.clipMethodFilter),
        t = (0, tg.P)((e) => e.setClipMethodFilter),
        l = a.useRef(null);
    return (0, n.jsx)(tw.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, n.jsx)(tP.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": q.intl.string(Y.default["kIqbb/"]),
                onClose: a,
                onSelect: void 0,
                children: (0, n.jsxs)(tM.rX, {
                    children: [
                        (0, n.jsx)(tM.iD, {
                            id: "method-all",
                            group: "method",
                            label: q.intl.string(Y.default.lscwjQ),
                            action: () => {
                                (t("all"), a());
                            },
                            checked: "all" === e,
                        }),
                        (0, n.jsx)(tM.iD, {
                            id: "method-auto",
                            group: "method",
                            label: q.intl.string(Y.default.xrOIkz),
                            action: () => {
                                (t("auto"), a());
                            },
                            checked: "auto" === e,
                        }),
                        (0, n.jsx)(tM.iD, {
                            id: "method-manual",
                            group: "method",
                            label: q.intl.string(Y.default.D7HSLJ),
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
            (0, n.jsx)(eF.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: q.intl.string(Y.default["kIqbb/"]),
                icon: tL.ChevronSmallDownIcon,
                iconPosition: "end",
            }),
    });
}
function ll(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: i } = e,
        s = (0, tg.P)((e) => e.query),
        r = (0, tg.P)((e) => e.setQuery),
        o = (0, tg.P)((e) => e.pendingSearchFocus),
        c = (0, tg.P)((e) => e.setPendingSearchFocus),
        u = a.useRef(null),
        d = (0, tg.P)((e) => e.activeMainLink),
        m = (0, tg.P)((e) => e.clipMethodFilter),
        f = (0, tg.P)((e) => e.setClipMethodFilter),
        h = (0, tg.P)((e) => e.gameFacet),
        g = (0, tg.P)((e) => e.clippedWithFacet),
        x = (0, tg.P)((e) => e.selectedGameIds),
        p = (0, tg.P)((e) => e.selectedUserIds),
        y = (0, tg.P)((e) => e.selectedGuildId),
        j = (0, tg.P)((e) => e.selectedActivity),
        v = (0, tg.P)((e) => e.dateFilter),
        b = (0, tg.P)((e) => e.toggleGameId),
        C = (0, tg.P)((e) => e.toggleUserId),
        A = (0, tg.P)((e) => e.setSelectedGuildId),
        k = (0, tg.P)((e) => e.setSelectedActivity),
        N = (0, tg.P)((e) => e.setDateFilter),
        E = (0, tg.P)((e) => e.clearFilters);
    a.useEffect(() => {
        o && (u.current?.focus(), c(!1));
    }, [o, c]);
    let I = a.useRef(null);
    a.useEffect(() => {
        let e = {
            type_filter: "all" !== m ? m : "",
            game_filter_application_ids: null != h ? [h] : Array.from(x),
            date_filter_range: null != v ? v.preset.replace(/-/g, "_") : "",
            filtered_by_server: null != y,
            filtered_by_participants: null != g || p.size > 0,
            filtered_by_favorites: d === es.oH.FAVORITES,
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
            I.current = null;
            return;
        }
        let t = JSON.stringify(e);
        t !== I.current && ((I.current = t), eX.default.track(eN.HAw.CLIPS_FILTER_CHANGED, e));
    }, [m, h, x, v, y, g, p, d, j]);
    let L = a.useMemo(() => l.map((e) => e.key), [l]),
        P = (0, S.A)(L),
        D = a.useMemo(() => new Map(P.map((e) => [e?.id, e])), [P]),
        _ = a.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, n.jsx)(w.A, { game: D.get(e.key), size: w.M.XSMALL }),
                })),
            [l, D],
        ),
        T = a.useMemo(
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
        R = a.useMemo(
            () =>
                T.map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, n.jsx)(tR.Ay, { guild: e.guild, size: tR.Ay.Sizes.MINI }),
                })),
            [T],
        ),
        O = a.useMemo(() => new Map(T.map((e) => [e.key, e.guild])), [T]),
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
        F = a.useMemo(
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
                    icon: (0, n.jsx)(t_.eu, { src: e.avatarUrl, size: eH._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [i],
        ),
        U = a.useMemo(() => (null != y ? new Set([y]) : new Set()), [y]),
        z = a.useMemo(() => (null != j ? new Set([j]) : new Set()), [j]),
        G = a.useCallback(
            (e) => {
                A(y === e ? null : e);
            },
            [y, A],
        ),
        K = a.useCallback(
            (e) => {
                k(j === e ? null : e);
            },
            [j, k],
        ),
        V = null == h,
        B = null == g,
        $ = (0, tH.H)() && d !== es.oH.AUTO_CLIPS,
        Y = q.intl.string(t7[m]),
        X = (0, n.jsxs)(n.Fragment, {
            children: [
                V &&
                    Array.from(x).map((e) => {
                        let t = _.find((t) => t.key === e);
                        return (0, n.jsx)(
                            t5,
                            {
                                label: t?.label ?? e,
                                icon: (0, n.jsx)(w.A, { game: D.get(e), size: w.M.XSMALL }),
                                onRemove: () => b(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != v && (0, n.jsx)(t5, { label: tQ(v), onRemove: () => N(null) }, "date"),
                null != y &&
                    (0, n.jsx)(
                        t5,
                        {
                            label: R.find((e) => e.key === y)?.label ?? y,
                            icon:
                                null != O.get(y)
                                    ? (0, n.jsx)(tR.Ay, { guild: O.get(y), size: tR.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => A(null),
                        },
                        "guild",
                    ),
                B && Array.from(p).map((e) => (0, n.jsx)(ln, { userId: e, onRemove: () => C(e) }, `user-${e}`)),
                null != j && (0, n.jsx)(t5, { label: j, onRemove: () => k(null) }, "activity"),
                $ && "all" !== m && (0, n.jsx)(t5, { label: Y, onRemove: () => f("all") }, "method"),
            ],
        }),
        Q = (V && x.size > 0) || null != v || null != y || (B && p.size > 0) || null != j || ($ && "all" !== m);
    return (0, n.jsxs)("div", {
        className: t8.kT,
        children: [
            (0, n.jsxs)("div", {
                className: t8.HL,
                children: [
                    (0, n.jsx)("div", {
                        className: t8.MT,
                        children: (0, n.jsx)(tT.I, {
                            ref: u,
                            placeholder: q.intl.string(q.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: t8.Zq,
                        children: [
                            $ && (0, n.jsx)(lt, {}),
                            V &&
                                _.length > 0 &&
                                (0, n.jsx)(t9, {
                                    triggerLabel: q.intl.string(q.t.URyqtP),
                                    options: _,
                                    selectedKeys: x,
                                    onToggle: b,
                                    multiSelect: !0,
                                    searchPlaceholder: q.intl.string(q.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(t4, {}),
                            R.length > 0 &&
                                (0, n.jsx)(t9, {
                                    triggerLabel: q.intl.string(q.t["5qyruI"]),
                                    options: R,
                                    selectedKeys: U,
                                    onToggle: G,
                                    multiSelect: !1,
                                    searchPlaceholder: q.intl.string(q.t["5h0QOP"]),
                                }),
                            B &&
                                F.length > 0 &&
                                (0, n.jsx)(t9, {
                                    triggerLabel: q.intl.string(q.t.YQ6dJg),
                                    options: F,
                                    selectedKeys: p,
                                    onToggle: (e) => C(e),
                                    multiSelect: !0,
                                    searchPlaceholder: q.intl.string(q.t["5h0QOP"]),
                                }),
                            H.length > 0 &&
                                (0, n.jsx)(t9, {
                                    triggerLabel: q.intl.string(q.t.agRtPG),
                                    options: H,
                                    selectedKeys: z,
                                    onToggle: K,
                                    multiSelect: !1,
                                    searchPlaceholder: q.intl.string(q.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(le, {}),
                        ],
                    }),
                ],
            }),
            Q &&
                (0, n.jsxs)("div", {
                    className: t8.eH,
                    children: [
                        X,
                        (0, n.jsx)(ep.Q, {
                            size: "sm",
                            variant: "primary",
                            text: q.intl.string(q.t.O8k7O4),
                            onClick: E,
                        }),
                    ],
                }),
        ],
    });
}
function ln(e) {
    let { userId: t, onRemove: l } = e,
        a = (0, u.bG)([M.default], () => M.default.getUser(t), [t]);
    if (null == a) return null;
    let i = a.globalName ?? a.username;
    return (0, n.jsx)(t5, {
        label: i,
        icon: (0, n.jsx)(t_.eu, { src: a.getAvatarURL(null, 32), size: eH._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
var la = l(516521);
function li(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var ls = l(195715);
function lr(e) {
    let { clips: t, onEdit: l, onEdgeNavigate: i } = e,
        s = a.useMemo(() => li(t), [t]),
        r = (0, tg.P)((e) => e.setActiveMainLink),
        o = (0, eu.GV)(),
        c = a.useMemo(() => [s.length], [s.length]),
        { getContainerProps: u, getItemProps: d, getRowProps: m } = (0, er.A)({ navId: o, columnCounts: c }),
        { onFocus: f, onKeyDown: p, ...y } = u(),
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
        v = { ...y, onKeyDown: j };
    return 0 === s.length
        ? null
        : (0, n.jsxs)("section", {
              className: ls.uW,
              "aria-label": q.intl.string(Y.default.efLpNC),
              children: [
                  (0, n.jsxs)("div", {
                      className: ls.wx,
                      children: [
                          (0, n.jsxs)("div", {
                              className: ls.mX,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: ls.UP,
                                      children: [
                                          (0, n.jsx)(h.D, {
                                              variant: "heading-lg/medium",
                                              color: "text-default",
                                              children: q.intl.string(Y.default.I1h8uD),
                                          }),
                                          (0, n.jsx)(g.E, {
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
                                      children: q.intl.string(Y.default.efLpNC),
                                  }),
                              ],
                          }),
                          (0, n.jsx)("div", {
                              className: ls.BX,
                              children: (0, n.jsx)(eF.$, {
                                  variant: "overlay-primary",
                                  size: "sm",
                                  onClick: () => r(es.oH.AUTO_CLIPS),
                                  text: q.intl.string(Y.default.gCay1w),
                              }),
                          }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: ls.Vg,
                      "aria-label": q.intl.string(Y.default.efLpNC),
                      ...v,
                      tabIndex: -1,
                      children: (0, n.jsx)("div", {
                          className: ls.nM,
                          ...m(0),
                          children: s.map((e, t) =>
                              (0, n.jsx)(
                                  "div",
                                  {
                                      className: ls.v2,
                                      children: (0, n.jsx)(tr, {
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
                  }),
              ],
          });
}
var lo = l(770178),
    lc = l(202163),
    lu = l(68408);
function ld(e) {
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
        { gameRecord: f } = (0, lc.Ay)(t.applicationId),
        { onShareSession: g } = a.useContext(ta.$),
        x = a.useCallback(() => {
            g?.(t.clips);
        }, [g, t.clips]),
        y = (0, tg.P)((e) => e.setGameFacet),
        j = (0, tg.P)((e) => e.setActiveMainLink),
        v = t.applicationId,
        b = null != v && "" !== v,
        C = a.useCallback(() => {
            null != v && "" !== v && (y(v), j(es.oH.ALL_CLIPS));
        }, [v, y, j]),
        k = a.useCallback(() => {
            b ? C() : j(es.oH.ALL_CLIPS);
        }, [b, C, j]),
        N = a.useMemo(() => (null == f ? null : (f.getBannerURL(1024) ?? f.screenshotUrls?.[0] ?? null)), [f]),
        E = (0, u.yK)([M.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => M.default.getUser(e)).filter(eQ.Vq);
        }),
        I = a.useMemo(() => t.clips.filter((e) => "auto" === e.clipMethod).length, [t.clips]),
        S = eY({ timestamp: t.startedAt }),
        [L, P] = a.useState(800),
        D = (0, A.A)((e) => {
            P(e.target.clientWidth);
        }),
        _ = (0, lo.w)(D),
        T = Math.max(1, (L - 40) / 3),
        R = a.useMemo(() => {
            let e = t.clips.slice(0, 6),
                l = [];
            for (let t = 0; t < e.length; t += 3) l.push(e.slice(t, t + 3));
            return l;
        }, [t.clips]),
        O = t.clips.length > 6,
        H = (0, eu.GV)(),
        F = a.useMemo(() => R.map((e) => e.length), [R]),
        { getContainerProps: U, getItemProps: z, getRowProps: G } = (0, er.A)({ navId: H, columnCounts: F }),
        { onFocus: K, onKeyDown: V, ...B } = U(),
        $ = a.useCallback(
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
        className: lu.dZ,
        children: [
            (0, n.jsx)("div", {
                className: s()(lu.tB, null == N && lu.rD),
                style: null != N ? { backgroundImage: `url(${N})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, n.jsxs)("div", {
                className: lu.wx,
                children: [
                    b
                        ? (0, n.jsx)(e_.s, {
                              "aria-label": t.applicationName,
                              onClick: C,
                              className: lu.Zn,
                              children: (0, n.jsx)(w.A, {
                                  className: lu.Gt,
                                  game: f,
                                  size: w.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, n.jsx)(w.A, { className: lu.Gt, game: f, size: w.M.MEDIUM, "aria-hidden": !0 }),
                    (0, n.jsxs)("div", {
                        className: lu.TK,
                        children: [
                            b
                                ? (0, n.jsx)(e_.s, {
                                      "aria-label": t.applicationName,
                                      onClick: C,
                                      className: lu.wb,
                                      children: (0, n.jsx)(h.D, {
                                          variant: "body-md/medium",
                                          color: "text-default",
                                          className: lu.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, n.jsx)(h.D, {
                                      variant: "body-md/medium",
                                      color: "text-default",
                                      className: lu.mO,
                                      children: t.applicationName,
                                  }),
                            (0, n.jsxs)("div", {
                                className: lu.mI,
                                children: [
                                    (0, n.jsx)(p.E, {
                                        variant: "body-xs/normal",
                                        color: "text-muted",
                                        children: q.intl.format(Y.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    I > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: lu.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(p.E, {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    children: q.intl.format(Y.default.eRrt7X, { count: I }),
                                                }),
                                            ],
                                        }),
                                    (0, n.jsx)("span", { className: lu.TG, "aria-hidden": "true" }),
                                    (0, n.jsx)(p.E, { variant: "body-xs/normal", color: "text-muted", children: S }),
                                    E.length > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: lu.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(eD.A, { users: E, maxUsers: 5, size: eH._3.SIZE_16 }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    t.clips.length > 0 &&
                        null != g &&
                        (0, n.jsx)("div", {
                            className: lu.$s,
                            children: (0, n.jsx)(eF.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: tv.ShareIcon,
                                text: q.intl.string(Y.default.l34lLs),
                                onClick: x,
                            }),
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                ref: _,
                className: lu.Vg,
                ...B,
                tabIndex: -1,
                onKeyDown: $,
                children: R.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: lu.UX,
                            ...G(t),
                            children: e.map((e, a) => {
                                let s = { width: T };
                                return (
                                    c && (s["--custom-entrance-delay"] = `${tx(d + t + a)}ms`),
                                    (0, n.jsx)(
                                        "div",
                                        {
                                            className: c ? ty.$ : void 0,
                                            style: s,
                                            children: (0, n.jsx)(tr, {
                                                clip: e,
                                                actionsDisabled: i,
                                                isNew: l.includes(e.id),
                                                onClick: o ?? r,
                                                onEdit: r,
                                                gridItemProps: z(a, t),
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
            O &&
                (0, n.jsx)("div", {
                    className: lu.Vc,
                    children: (0, n.jsx)(eF.$, {
                        variant: "secondary",
                        size: "sm",
                        text: q.intl.string(Y.default.pqk9U0),
                        onClick: k,
                    }),
                }),
        ],
    });
}
var lm = l(885574),
    lf = l(331322),
    lh = l(253932),
    lg = l(734066),
    lx = l(947568);
function lp() {
    (0, ev.openUserSettings)(ej.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING);
}
function ly() {
    let {
        visible: e,
        handleAllow: t,
        handleDontAllow: l,
    } = (function () {
        let e = (0, u.bG)([M.default], () => (0, lg.qj)(M.default.getCurrentUser())),
            t = lh.Q$.useSetting(),
            l = e && !1 === t && (0, T.C)("ClipsLibraryVoiceBanner").enabled,
            [n, i] = (0, K.kn)(l ? [O.M.AUTOCLIPPING_EARLY_ACCESS_LIBRARY_VOICE_BANNER] : []);
        return {
            visible: null != n,
            handleAllow: a.useCallback(() => {
                (i($.i.TAKE_ACTION), (0, R.eQ)({ allowVoiceRecording: !0 }));
            }, [i]),
            handleDontAllow: a.useCallback(() => {
                i($.i.USER_DISMISS);
            }, [i]),
        };
    })();
    return e
        ? (0, n.jsxs)("div", {
              className: lx.v,
              children: [
                  (0, n.jsx)(lm.CircleInformationIcon, {
                      size: "xs",
                      color: eg.A.colors.ICON_FEEDBACK_INFO,
                      "aria-hidden": !0,
                  }),
                  (0, n.jsx)(p.E, {
                      variant: "body-sm/normal",
                      color: "text-strong",
                      className: lx.i,
                      children: q.intl.format(Y.default.m7PBif, { onDataPrivacyClick: lp }),
                  }),
                  (0, n.jsxs)(lf.B, {
                      direction: "horizontal",
                      gap: 8,
                      fullWidth: !1,
                      children: [
                          (0, n.jsx)(eF.$, {
                              variant: "secondary",
                              size: "sm",
                              text: q.intl.string(Y.default.beB8BG),
                              onClick: l,
                          }),
                          (0, n.jsx)(eF.$, {
                              variant: "primary",
                              size: "sm",
                              text: q.intl.string(Y.default["Bk5IR+"]),
                              onClick: t,
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var lj = l(799888);
function lv(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: i, onClipClick: s, isLoading: r, onScroll: o } = e,
        c = (0, tH.H)(),
        d = a.useMemo(() => li(t), [t]),
        m = c && d.length > 0,
        f = (0, u.yK)([_.Ay], () => _.Ay.getNewClipIds()),
        g = (0, u.bG)([_.Ay], () => _.Ay.getExportingClipIds().size > 0),
        x = (0, tg.P)((e) => e.setActiveMainLink),
        p = a.useCallback(() => {
            x(es.oH.ALL_CLIPS);
        }, [x]),
        y = a.useMemo(() => {
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
        j = (0, u.bG)([k.Ay], () => k.Ay.useReducedMotion),
        v = a.useMemo(() => {
            let e = [],
                t = 0;
            for (let l of y) (e.push(t), (t += Math.min(2, Math.ceil(l.clips.length / 3))));
            return e;
        }, [y]),
        b = a.useRef(null),
        C = a.useCallback((e, t) => {
            let l = b.current;
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
    return y.length > 0 || m
        ? (0, n.jsx)(la.Ch, {
              className: lj.iR,
              fade: !0,
              onScroll: A,
              children: (0, n.jsxs)("div", {
                  className: lj.Qs,
                  ref: b,
                  children: [
                      m &&
                          (0, n.jsx)("div", {
                              className: lj.Dk,
                              children: (0, n.jsx)(lr, { clips: t, onEdit: i, onEdgeNavigate: C }),
                          }),
                      (0, n.jsx)(ly, {}),
                      y.length > 0 &&
                          (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)(h.D, {
                                      variant: "heading-lg/medium",
                                      color: "text-default",
                                      children: q.intl.string(Y.default.zfTWDE),
                                  }),
                                  y.map((e, t) =>
                                      (0, n.jsx)(
                                          ld,
                                          {
                                              session: e,
                                              recentClipIds: f,
                                              actionsDisabled: g,
                                              onEdit: i,
                                              onClipClick: s,
                                              animateEntrance: !j,
                                              entranceRowOffset: v[t] ?? 0,
                                              onEdgeNavigate: C,
                                          },
                                          e.id,
                                      ),
                                  ),
                                  (0, n.jsx)("div", {
                                      className: lj.dp,
                                      children: (0, n.jsx)(eF.$, {
                                          variant: "primary",
                                          text: q.intl.string(Y.default.RQtkop),
                                          onClick: p,
                                      }),
                                  }),
                              ],
                          }),
                  ],
              }),
          })
        : r
          ? (0, n.jsx)("div", { className: lj.dc, children: (0, n.jsx)(eo.y, {}) })
          : (0, n.jsx)(ew, { isEmptyBecauseQuery: l > 0 });
}
var lb = l(837381),
    lC = l(741918),
    lA = l(812993),
    lk = l(332837),
    lN = l(95362),
    lE = l(625903),
    lI = l(260762),
    lS = l(599428);
function lw(e) {
    let { itemId: t, icon: l, label: a, onClick: i, isSelected: r = !1, isDisabled: o = !1, badgeCount: c = 0 } = e,
        u = o && !r,
        d = (0, lb.rm)(t);
    return (0, n.jsx)(y.m, {
        text: a,
        position: "right",
        children: (0, n.jsxs)(eT.D, {
            ...d,
            role: "button",
            onClick: u ? void 0 : i,
            "aria-pressed": r,
            "aria-disabled": u,
            "aria-label": a,
            className: s()(lS.AY, { [lS.Hy]: r, [lS.Is]: u }),
            children: [l, c > 0 && (0, n.jsx)("span", { className: lS.e, children: (0, n.jsx)(lA.hV, { count: c }) })],
        }),
    });
}
function lL(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: i } = e,
        r = (0, tg.P)((e) => e.activeMainLink),
        o = (0, tg.P)((e) => e.gameFacet),
        c = (0, tg.P)((e) => e.clippedWithFacet),
        u = (0, tg.P)((e) => e.setActiveMainLink),
        d = (0, tg.P)((e) => e.setGameFacet),
        m = (0, tg.P)((e) => e.setClippedWithFacet),
        f = (0, tg.P)((e) => e.clearFilters),
        h = (0, tg.P)((e) => e.setPendingContentFocus),
        g = (0, tH.H)(),
        x = null != o || null != c;
    function p(e) {
        return !x && r === e;
    }
    let y = a.useRef(!1),
        j = a.useCallback(() => {
            y.current && h(!0);
        }, [h]),
        v = a.useCallback(
            (e) => {
                (u(e), d(null), m(null), f(), j());
            },
            [u, d, m, f, j],
        ),
        b = a.useCallback(
            (e) => {
                (d(o === e ? null : e), m(null), u(es.oH.ALL_CLIPS), f(), j());
            },
            [o, d, m, u, f, j],
        ),
        C = a.useCallback(() => {
            (0, ev.openUserSettings)(ej.X.CLIPS_PANEL);
        }, []),
        A = a.useMemo(() => t.map((e) => e.key), [t]),
        k = (0, S.A)(A),
        N = a.useMemo(() => new Map(k.map((e) => [e?.id, e])), [k]),
        E = (0, eu.GV)(),
        I = (0, lI.A)(E),
        { setFocus: L } = I,
        P = o ?? r;
    a.useEffect(() => {
        L(P);
    }, [L, P]);
    let { ref: M, onKeyDown: D, ..._ } = (0, lb.LT)(I),
        T = a.useCallback(
            (e) => {
                y.current = e.key === lC.D$.ENTER || e.key === lC.D$.SPACE;
                try {
                    D(e);
                } finally {
                    y.current = !1;
                }
            },
            [D],
        );
    return (0, n.jsx)(lb.hD, {
        navigator: I,
        children: (0, n.jsxs)("div", {
            className: lS.H$,
            ..._,
            tabIndex: -1,
            onKeyDown: T,
            ref: M,
            children: [
                (0, n.jsxs)("div", {
                    className: s()(lS.o3, lS.A9),
                    children: [
                        (0, n.jsx)(lw, {
                            itemId: es.oH.HOME,
                            icon: (0, n.jsx)(lk.HomeIcon, { size: "sm", color: "currentColor" }),
                            label: q.intl.string(Y.default.iVqj8B),
                            isSelected: p(es.oH.HOME),
                            onClick: () => v(es.oH.HOME),
                        }),
                        (0, n.jsx)(lw, {
                            itemId: es.oH.ALL_CLIPS,
                            icon: (0, n.jsx)(U.ClipsIcon, { size: "sm", color: "currentColor" }),
                            label: q.intl.string(q.t.dPVrEv),
                            isSelected: p(es.oH.ALL_CLIPS),
                            isDisabled: 0 === l.allClips,
                            badgeCount: i.allClips,
                            onClick: () => v(es.oH.ALL_CLIPS),
                        }),
                        g &&
                            (0, n.jsx)(lw, {
                                itemId: es.oH.AUTO_CLIPS,
                                icon: (0, n.jsx)(z.ClipsAutoIcon, { size: "sm", color: "currentColor" }),
                                label: q.intl.string(Y.default.ikNKf1),
                                isSelected: p(es.oH.AUTO_CLIPS),
                                isDisabled: 0 === l.autoClips,
                                badgeCount: i.autoClips,
                                onClick: () => v(es.oH.AUTO_CLIPS),
                            }),
                        (0, n.jsx)(lw, {
                            itemId: es.oH.FAVORITES,
                            icon: (0, n.jsx)(tC.StarIcon, { size: "sm", color: "currentColor" }),
                            label: q.intl.string(q.t["9rlCk1"]),
                            isSelected: p(es.oH.FAVORITES),
                            onClick: () => v(es.oH.FAVORITES),
                        }),
                    ],
                }),
                t.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { className: lS.Gz }),
                            (0, n.jsx)(lN.Ip, {
                                className: s()(lS.UZ, lS.A9),
                                fade: !0,
                                children: t.map((e) => {
                                    let t = o === e.key;
                                    return (0, n.jsx)(
                                        lw,
                                        {
                                            itemId: e.key,
                                            icon: (0, n.jsx)(w.A, {
                                                game: N.get(e.key),
                                                size: w.M.SMALL,
                                                className: lS.az,
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
                    className: s()(lS.Ms, lS.A9),
                    children: (0, n.jsx)(lw, {
                        itemId: "settings",
                        icon: (0, n.jsx)(lE.SettingsIcon, { size: "sm", color: "currentColor" }),
                        label: q.intl.string(q.t["3D5yo/"]),
                        onClick: C,
                    }),
                }),
            ],
        }),
    });
}
var lP = l(409067),
    lM = l(314484);
function lD(e) {
    var t, i;
    let O,
        H,
        F,
        {
            channelId: U,
            onClose: z,
            picker: G,
            transitionState: K,
            initialEditingClipId: V,
            initialMainLink: B = es.oH.HOME,
            ...$
        } = e;
    (0, ei.A)();
    let { analyticsLocations: X } = (0, E.Ay)(N.A.CLIPS_GALLERY),
        Q = G?.onPick,
        W = (0, T.r)("ClipsGalleryModal").enabled && null == G,
        Z = G?.allowMultiSelect ?? !0,
        [er, eo] = a.useState(new Set()),
        ec = a.useRef(null),
        eu = (0, A.A)((e) => {
            let t = ec.current;
            if (null == t) return;
            let l = Math.min(1, Math.max(0, e) / 40);
            t.style.setProperty("--custom-clips-header-solid-opacity", `${l}`);
        }),
        {
            gamesFacet: ed,
            participantsFacet: em,
            filteredClips: ef,
            mainLinkCounts: eh,
            mainLinkNewCounts: eg,
            allClips: ex,
        } = (0, lP.ad)(G?.filterClip),
        ep = (0, u.bG)([_.Ay], () => _.Ay.getSettings().storageLocation),
        [ey, ej] = a.useState(!0);
    a.useEffect(() => {
        (async function () {
            ej(!0);
            try {
                await (0, R.Fb)(ep);
            } finally {
                ej(!1);
            }
        })().catch(() => {});
    }, [ep]);
    let { onShareClick: ev } = (0, ea.A)(U);
    (a.useEffect(
        () => () => {
            (tg.P.getState().resetAll(), (0, R.Su)());
        },
        [],
    ),
        a.useEffect(() => {
            let e = tg.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink(B);
        }, [B]),
        (0, o.l0)(() => {
            _.Ay.hasClips() && P.A.isDeveloper && L.Ay.fireSurveyAction(c.w.POPULATED_CLIP_GALLERY_CLOSED);
        }));
    let eb = (0, u.bG)([_.Ay], () => _.Ay.getExportingClipIds().size > 0),
        [eC, eA] = a.useState(null != V ? "editing" : "gallery"),
        [ek, eN] = a.useState(V ?? null),
        eE = (0, u.bG)([_.Ay], () => (null != ek ? _.Ay.getClipById(ek) : null), [ek]),
        eI = (0, d.LA)(e7.nm),
        [eS, ew] = a.useState(!1);
    ((t = a.useCallback(() => ew(!0), [])),
        (i = eI && "gallery" === eC && !eS),
        (O = a.useRef(Array(tS.length).fill(""))),
        (H = a.useRef(0)),
        (F = a.useRef(t)),
        a.useEffect(() => {
            F.current = t;
        }, [t]),
        a.useEffect(() => {
            if (!i) return;
            let e = O.current;
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
                    ((e[H.current] = t.key.toLowerCase()), (H.current = (H.current + 1) % tS.length));
                    for (let t = 0; t < tS.length; t++) if (e[(H.current + t) % tS.length] !== tS[t]) return;
                    F.current();
                }
            }
            return (
                document.addEventListener("keydown", t, { capture: !0, passive: !0 }),
                () => {
                    (document.removeEventListener("keydown", t, { capture: !0 }), e.fill(""), (H.current = 0));
                }
            );
        }, [i]),
        a.useEffect(() => {
            if (eS)
                return (
                    document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0)
                );
            function e(e) {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation());
            }
        }, [eS]));
    let eL = a.useRef(eC);
    ((eL.current = eC), (a.useRef(ek).current = ek));
    let [eP, eM] = a.useState(null != V ? f.ip.ENTERED : f.ip.HIDDEN),
        eD = a.useRef(null),
        e_ = (0, tg.P)((e) => e.gameFacet),
        eT = (0, tg.P)((e) => e.clippedWithFacet),
        eR = (0, tg.P)((e) => e.activeMainLink),
        eO = (0, tg.P)((e) => e.currentPage),
        eH = eO === es.fB.HOME,
        { ref: eF, height: eU = 64 } = (0, C.Ay)(eO),
        ez = 68 + eU,
        eG = eH ? 68 : ez - 16;
    a.useLayoutEffect(() => {
        eu(0);
    }, [eO, eu]);
    let eK = (0, tg.P)((e) => e.pendingContentFocus),
        eV = (0, tg.P)((e) => e.setPendingContentFocus),
        eB = a.useRef(null);
    a.useEffect(() => {
        if (!eK) return;
        let e = 0,
            t = 0;
        return (
            (t = requestAnimationFrame(function l() {
                let n = eB.current?.querySelector('[role="grid"] [role="button"]');
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
    let e$ = (0, tg.P)(
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
        eR === es.oH.HOME && e$ && tg.P.getState().setActiveMainLink(es.oH.ALL_CLIPS);
    }, [eR, e$]);
    let eY = a.useMemo(() => (null != e_ ? [e_] : []), [e_]),
        eq = (0, S.A)(eY)[0] ?? null,
        eX = (0, u.bG)([M.default], () => (null != eT ? M.default.getUser(eT) : null), [eT]),
        eQ = a.useMemo(() => {
            if (null != e_) return ed.find((e) => e.key === e_)?.name ?? q.intl.string(q.t.dPVrEv);
            if (null != eT) return null != eX ? (eX.globalName ?? eX.username) : eT;
            switch (eR) {
                case es.oH.FAVORITES:
                    return q.intl.string(q.t["9rlCk1"]);
                case es.oH.AUTO_CLIPS:
                    return q.intl.string(Y.default.ikNKf1);
                case es.oH.HOME:
                    return q.intl.string(Y.default.iVqj8B);
                default:
                    return q.intl.string(q.t.dPVrEv);
            }
        }, [e_, eT, eR, ed, eX]),
        eW = a.useMemo(() => {
            if (null != e_) return ed.find((e) => e.key === e_)?.count ?? 0;
            if (null != eT) return em.find((e) => e.key === eT)?.count ?? 0;
            switch (eR) {
                case es.oH.HOME:
                    return null;
                case es.oH.AUTO_CLIPS:
                    return eh.autoClips;
                case es.oH.FAVORITES:
                    return eh.favorites;
                default:
                    return eh.allClips;
            }
        }, [e_, eT, eR, ed, em, eh]),
        eZ = a.useCallback(() => {
            (eA("editing"), k.Ay.useReducedMotion && eM(f.ip.ENTERED));
        }, []),
        eJ = a.useCallback((e) => {
            eo((t) => {
                let l = new Set(t);
                return (l.has(e) ? l.delete(e) : l.add(e), l);
            });
        }, []),
        e0 = a.useCallback(
            (e) => {
                (eN(e.id), eZ());
            },
            [eZ],
        ),
        e1 = a.useRef(null != V),
        e3 = a.useCallback(() => {
            ((e1.current = !1), k.Ay.useReducedMotion && eN(null), eA("gallery"));
        }, []),
        e2 = a.useCallback(() => {
            e1.current ? z() : e3();
        }, [e3, z]);
    (a.useEffect(() => {
        function e(e) {
            "Escape" === e.key && "editing" === eL.current && eI && (e.stopPropagation(), e2());
        }
        return (
            document.addEventListener("keydown", e),
            () => {
                document.removeEventListener("keydown", e);
            }
        );
    }, [e2, z, eI]),
        a.useEffect(() => {
            function e(e) {
                if (
                    ("f" !== e.key && "F" !== e.key) ||
                    e.altKey ||
                    e.shiftKey ||
                    ((0, D.cX)() ? !e.metaKey || e.ctrlKey : !e.ctrlKey || e.metaKey) ||
                    !eI ||
                    "gallery" !== eL.current
                )
                    return;
                (e.preventDefault(), e.stopPropagation());
                let t = tg.P.getState();
                (t.currentPage === es.fB.HOME && t.setActiveMainLink(es.oH.ALL_CLIPS), t.setPendingSearchFocus(!0));
            }
            return (document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0));
        }, [eI]),
        a.useEffect(
            () =>
                "editing" === eC && null != ek
                    ? void (0, R.YK)(ek)
                    : ((0, R.TE)(),
                      () => {
                          (0, R.TE)();
                      }),
            [eC, ek],
        ));
    let e9 = a.useCallback(() => {
            eo(new Set());
        }, []),
        e6 = er.size > 0,
        e5 = a.useCallback(() => {
            let e = ex.filter((e) => er.has(e.id));
            (0, d.mM)(
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
        }, [ex, er, e9]),
        e8 = a.useCallback(async () => {
            let e = ex.filter((e) => er.has(e.id));
            await ev({ clips: e, onShared: e9 });
        }, [ex, er, ev, e9]),
        e4 = a.useCallback(
            async (e) => {
                0 !== e.length && (eo(new Set(e.map((e) => e.id))), await ev({ clips: e }), e9());
            },
            [ev, e9],
        ),
        te = a.useCallback(() => {
            let e = tg.P.getState();
            (e.setGameFacet(null),
                e.setClippedWithFacet(null),
                e.setActiveMainLink(es.oH.ALL_CLIPS),
                e.setPendingSearchFocus(!0));
        }, []),
        tt = a.useMemo(() => {
            let e = ex.filter((e) => er.has(e.id));
            return e.length > 0 && e.every((e) => e.isFavorite);
        }, [ex, er]),
        tl = a.useCallback(async () => {
            let e = ex.filter((e) => er.has(e.id)),
                t = !tt;
            (await Promise.all(e.filter((e) => e.isFavorite !== t).map((e) => (0, R.Yy)(e.id, { isFavorite: t }, !0))),
                e9());
        }, [ex, er, tt, e9]),
        tn = a.useMemo(() => {
            let e = 0,
                t = 0,
                l = 0;
            return (
                ex.forEach((n) => {
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
                    number_of_clips_loaded: ex.length,
                    num_autoclips_loaded: e,
                    num_distributed_clips_loaded: t,
                    num_manual_clips_loaded: l,
                    gallery_page: eR,
                }
            );
        }, [ex, eR]);
    (0, I.A)(
        { type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.CLIP_GALLERY_VIEWED, properties: tn },
        { disableTrack: ey },
        [tn, ey],
    );
    let ti = a.useMemo(
        () => ({
            selectedClipIds: er,
            toggleClipSelection: eJ,
            clearSelection: e9,
            isMultiSelectMode: e6,
            picker: G,
            onShareSession: Z ? e4 : void 0,
        }),
        [er, eJ, e9, e6, G, Z, e4],
    );
    return (0, n.jsx)(E.f5, {
        value: X,
        children: (0, n.jsx)(ta.$.Provider, {
            value: ti,
            children: (0, n.jsx)(m.N, {
                onClose: z,
                transitionState: K,
                "aria-label": eS ? "Doggo Game" : void 0,
                ...$,
                children: eS
                    ? (0, n.jsx)(tI, { onClose: z })
                    : (0, n.jsxs)("div", {
                          className: lM.jT,
                          ref: eD,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: s()(lM.PD, "gallery" === eC && lM.vu),
                                  inert: "gallery" !== eC,
                                  children: [
                                      (0, n.jsx)(lL, { gamesFacet: ed, mainLinkCounts: eh, mainLinkNewCounts: eg }),
                                      (0, n.jsxs)("div", {
                                          className: lM.Qs,
                                          ref: eB,
                                          style: {
                                              "--custom-clips-header-height": "68px",
                                              "--custom-clips-scroll-inset": `${eG}px`,
                                          },
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  ref: ec,
                                                  className: s()(lM.$Q, !eH && lM.iF),
                                                  children: [
                                                      (0, n.jsxs)("div", {
                                                          className: lM.ev,
                                                          children: [
                                                              null != e_ &&
                                                                  (0, n.jsx)(w.A, {
                                                                      game: eq,
                                                                      size: w.M.SMALL,
                                                                      className: lM.Ve,
                                                                      "aria-hidden": !0,
                                                                  }),
                                                              (0, n.jsx)(h.D, {
                                                                  variant: "heading-sm/semibold",
                                                                  color: "text-default",
                                                                  className: lM.Yn,
                                                                  children: eQ,
                                                              }),
                                                              null == e_ &&
                                                                  null == eT &&
                                                                  (eR === es.oH.AUTO_CLIPS ||
                                                                      (W && eR === es.oH.HOME)) &&
                                                                  (0, n.jsx)(g.E, {
                                                                      icon: x.NitroWheelIcon,
                                                                      type: "early_access",
                                                                      variant: "primary",
                                                                  }),
                                                              null != eW &&
                                                                  !e$ &&
                                                                  (0, n.jsxs)("div", {
                                                                      className: lM.Vl,
                                                                      children: [
                                                                          (0, n.jsx)("span", {
                                                                              className: lM.FK,
                                                                              "aria-hidden": "true",
                                                                          }),
                                                                          (0, n.jsx)(p.E, {
                                                                              variant: "body-md/normal",
                                                                              color: "text-muted",
                                                                              children: q.intl.format(
                                                                                  Y.default["+YIqQM"],
                                                                                  { count: eW },
                                                                              ),
                                                                          }),
                                                                      ],
                                                                  }),
                                                          ],
                                                      }),
                                                      (0, n.jsxs)("div", {
                                                          className: lM.o5,
                                                          children: [
                                                              W &&
                                                                  (0, n.jsx)(J, {
                                                                      showOffEducation: "gallery" === eC && eI,
                                                                  }),
                                                              (0, n.jsxs)("div", {
                                                                  className: lM.$s,
                                                                  children: [
                                                                      (0, n.jsx)(y.m, {
                                                                          position: "bottom",
                                                                          text: q.intl.string(q.t["5h0QOP"]),
                                                                          children: (0, n.jsx)(j.K, {
                                                                              onClick: te,
                                                                              icon: v.MagnifyingGlassIcon,
                                                                              size: "sm",
                                                                              variant: "icon-only",
                                                                              "aria-label": q.intl.string(
                                                                                  q.t["5h0QOP"],
                                                                              ),
                                                                          }),
                                                                      }),
                                                                      (0, n.jsx)(y.m, {
                                                                          position: "bottom",
                                                                          text: q.intl.string(q.t.cpT0Cq),
                                                                          children: (0, n.jsx)(j.K, {
                                                                              onClick: z,
                                                                              icon: b.XLargeIcon,
                                                                              size: "sm",
                                                                              variant: "icon-only",
                                                                              "aria-label": q.intl.string(q.t.cpT0Cq),
                                                                          }),
                                                                      }),
                                                                  ],
                                                              }),
                                                          ],
                                                      }),
                                                  ],
                                              }),
                                              eH
                                                  ? (0, n.jsx)(lv, {
                                                        filteredClips: ef,
                                                        totalClipCount: ex.length,
                                                        onEdit: e0,
                                                        onClipClick: Q,
                                                        isLoading: ey,
                                                        onScroll: eu,
                                                    })
                                                  : (0, n.jsxs)("div", {
                                                        className: lM.LG,
                                                        children: [
                                                            (0, n.jsx)("div", {
                                                                className: lM.oP,
                                                                ref: eF,
                                                                children: (0, n.jsx)(ll, {
                                                                    allClips: ex,
                                                                    gamesFacet: ed,
                                                                    participantsFacet: em,
                                                                }),
                                                            }),
                                                            (0, n.jsx)(tj, {
                                                                onEdit: e0,
                                                                channelId: U,
                                                                filteredClips: ef,
                                                                totalClipCount: ex.length,
                                                                onClipClick: Q,
                                                                isLoading: ey,
                                                                topInset: ez,
                                                            }),
                                                        ],
                                                    }),
                                              Z &&
                                                  e6 &&
                                                  (0, n.jsx)(tN, {
                                                      selectedCount: er.size,
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
                                  className: s()(lM.jN, "editing" === eC && lM.vu),
                                  inert: "editing" !== eC,
                                  onTransitionEnd: () => {
                                      switch (eC) {
                                          case "gallery":
                                              (eN(null), eM(f.ip.HIDDEN));
                                              break;
                                          case "editing":
                                              eM(f.ip.ENTERED);
                                      }
                                  },
                                  children:
                                      null != eE &&
                                      (0, n.jsx)(ee.p, {
                                          clip: eE,
                                          modalContainerRef: eD,
                                          children: (0, n.jsxs)(
                                              en.JQ,
                                              {
                                                  children: [
                                                      (0, n.jsx)(el.A, {
                                                          transitionState: eP,
                                                          onClose: e2,
                                                          onBack: e3,
                                                      }),
                                                      (0, n.jsx)(et.A, { channelId: U, onClose: e2, onExit: z }),
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
