l.d(t, { default: () => nu });
var n = l(477900),
    a = l(582128),
    i = l(503698),
    s = l.n(i),
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
    C = l(765671),
    b = l(765548),
    A = l(775602),
    N = l(793574),
    E = l(688810),
    k = l(139286),
    I = l(429913),
    S = l(769015),
    L = l(287809),
    w = l(723702),
    _ = l(419490),
    P = l(424739),
    M = l(489496),
    D = l(554146),
    T = l(43105),
    R = l(428678),
    O = l(176781),
    H = l(650684),
    U = l(559106),
    G = l(263775),
    F = l(707116),
    z = l(464132),
    V = l(270607),
    K = l(49999),
    $ = l(683825),
    B = l(792996),
    q = l(829766);
let Y = [
    { mode: "off", icon: R.DenyIcon },
    { mode: "manual", icon: O.ClipsIcon },
    { mode: "auto", icon: H.ClipsAutoIcon },
];
function X(e) {
    let { targetElementRef: t } = e,
        [l, a] = (0, G.kn)([D.M.AUTOCLIPPING_EARLY_ACCESS_LIBRARY_EDUCATION_POPOVER], { bypassAutoDismiss: !0 });
    return l !== D.M.AUTOCLIPPING_EARLY_ACCESS_LIBRARY_EDUCATION_POPOVER
        ? null
        : (0, n.jsx)(T.A, {
              targetElementRef: t,
              position: "bottom",
              alignmentStrategy: "trigger-center",
              title: B.intl.string($.default.yriD3v),
              body: B.intl.string($.default.UBihuW),
              onRequestClose: () => a(K.i.USER_DISMISS),
              actions: [
                  { text: B.intl.string(B.t["NX+WJN"]), variant: "secondary", onClick: () => a(K.i.TAKE_ACTION) },
              ],
          });
}
function Q(e) {
    let { mode: t, icon: l, selected: i, tooltip: s, onSelect: r, onKeyDown: o } = e,
        c = a.useRef(null),
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
    return (0, n.jsx)(U.vN, {
        focusTarget: c,
        ringTarget: c,
        children: (0, n.jsx)(p.m, {
            position: "bottom",
            text: s,
            children: (0, n.jsxs)("button", {
                ref: c,
                type: "button",
                role: "radio",
                className: q.mX,
                "aria-checked": i,
                "aria-label": d,
                tabIndex: i ? 0 : -1,
                onClick: () => {
                    i || r(t);
                },
                onKeyDown: o,
                children: [
                    (0, n.jsx)(l, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    i &&
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
        { value: l, onChange: i } = (0, z.U)(N.A.CLIPS_EA_LIBRARY_MODE_SELECTOR),
        { isLocked: s, openRoadblock: r } = (0, V.B)(N.A.CLIPS_EA_LIBRARY_MODE_SELECTOR),
        o = (0, F.T)(),
        c = a.useRef(null);
    function d(e) {
        s(e) ? r() : i(e);
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                ref: c,
                className: q.Os,
                role: "radiogroup",
                "aria-label": B.intl.string($.default.eIX9be),
                children: Y.map((e, t) => {
                    let { mode: r, icon: u } = e,
                        m = t > 0 ? Y[t - 1].mode : null,
                        h = null != m && m !== l && r !== l;
                    return (0, n.jsxs)(
                        a.Fragment,
                        {
                            children: [
                                h && (0, n.jsx)("div", { className: q.yF, "aria-hidden": !0 }),
                                (0, n.jsx)(Q, {
                                    mode: r,
                                    icon: u,
                                    selected: r === l,
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
                                    })(r, o),
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
                                            (e.preventDefault(),
                                                c.current?.querySelectorAll('[role="radio"]')[l]?.focus());
                                            let n = Y[l].mode;
                                            s(n) || i(n);
                                        })(e, t),
                                }),
                            ],
                        },
                        r,
                    );
                }),
            }),
            t && "off" === l && (0, n.jsx)(X, { targetElementRef: c }),
        ],
    });
}
var Z = l(923904),
    J = l(14929),
    ee = l(423699),
    et = l(1093),
    el = l(352527),
    en = l(280483),
    ea = l(111994);
l(321073);
var ei = l(118057),
    es = l(289873),
    er = l(962125),
    eo = l(915089),
    ec = l(62617);
function ed(e) {
    let { alt: t, ariaLabel: l, ariaHidden: i, role: s, width: r, height: o, className: c, style: d } = e,
        u = a.useMemo(
            () => (0, ec.H)({ width: r, height: o, intrinsicWidth: 288, intrinsicHeight: 162, style: d }),
            [r, o, d],
        );
    return (0, n.jsx)("img", {
        style: u,
        src: "https://cdn.discordapp.com/assets/content/1e6b3a97c86291528609222cdeb8b18fdcce3270f796106d4af3d0f7fa3cce18.svg",
        className: (0, ec.Z)(c),
        alt: t,
        "aria-label": l,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
var eu = l(164636),
    em = l(687966),
    eh = l(646514),
    ef = l(475358),
    ex = l(410767),
    eg = l(123292),
    ep = l(292801),
    ej = l(780964),
    ey = l(532624),
    ev = l(350535),
    eC = l(572164),
    eb = l(953932),
    eA = l(843010),
    eN = l(766075),
    eE = l(696016);
function ek(e) {
    ((0, eA.f)() && (0, d.Oo)(eE.nm), (0, eN.openUserSettings)(e));
}
var eI = l(783977),
    eS = l(90163);
function eL() {
    ek(ej.X.CLIPS_PANEL);
}
function ew(e) {
    let { icon: t, title: l, body: a } = e;
    return (0, n.jsxs)("div", {
        className: eS.Lw,
        children: [
            (0, n.jsx)(t, { size: "custom", width: 20, height: 20, color: "currentColor", "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: eS.ET,
                children: [
                    (0, n.jsx)(g.E, { variant: "body-md/medium", color: "text-default", children: B.intl.string(l) }),
                    (0, n.jsx)(g.E, { variant: "body-sm/normal", color: "text-muted", children: a }),
                ],
            }),
        ],
    });
}
function e_(e) {
    let { className: t } = e;
    return (0, n.jsxs)("div", {
        className: s()(eS.Mh, t),
        children: [
            (0, n.jsx)(ew, {
                icon: H.ClipsAutoIcon,
                title: $.default["0+BIHX"],
                body: B.intl.string($.default["tCTA+W"]),
            }),
            (0, n.jsx)(ew, {
                icon: em.GameControllerIcon,
                title: $.default["x/w6AN"],
                body: B.intl.string($.default.D4abD6),
            }),
            (0, n.jsx)(ew, {
                icon: eI.FiltersHorizontalIcon,
                title: $.default.EA8ENs,
                body: B.intl.format($.default.PvfGzE, { onClipsSettingsClick: eL }),
            }),
        ],
    });
}
var eP = l(792852),
    eM = l(652215),
    eD = l(71967);
function eT(e) {
    let { header: t, description: l } = e;
    return (0, n.jsxs)("div", {
        className: eD.Nr,
        children: [t, (0, n.jsx)(g.E, { color: "text-default", variant: "body-sm/medium", children: l })],
    });
}
function eR() {
    let e = (0, eu.bG)([ey.Ay], () => ey.Ay.getKeybindForAction(eM.hCu.SAVE_CLIP, !1, !0)),
        t = null != e ? ev.dI(e.shortcut, !0) : null;
    return (0, n.jsxs)("div", {
        className: eD.kR,
        children: [
            (0, n.jsx)(eT, {
                header: (0, n.jsx)(em.GameControllerIcon, { size: "refresh_sm", color: eh.A.colors.ICON_DEFAULT }),
                description: B.intl.string($.default["4K56sP"]),
            }),
            (0, n.jsx)(eT, {
                header:
                    null != t
                        ? (0, n.jsx)(ef.e, { shortcut: t })
                        : (0, n.jsx)(ex.KeyboardIcon, { size: "refresh_sm", color: eh.A.colors.ICON_DEFAULT }),
                description:
                    null != t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  B.intl.format($.default.BIwQis, { keybind: t }),
                                  (0, n.jsx)("div", {
                                      className: eD.JH,
                                      children: (0, n.jsx)(eg.Q, {
                                          text: B.intl.string($.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "body-sm/medium",
                                          onClick: function () {
                                              ek(ej.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : B.intl.string($.default.HOUDUm),
            }),
            (0, n.jsx)(eT, {
                header: (0, n.jsx)(ep.ArrowAngleRightUpIcon, { size: "refresh_sm", color: eh.A.colors.ICON_DEFAULT }),
                description: B.intl.string($.default.DLzdl7),
            }),
        ],
    });
}
function eO(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, eC.E)(),
        i = (0, P.H)("ClipsGalleryEmptyState"),
        { onChange: s } = (0, z.U)(),
        r = a.useCallback(() => s("manual"), [s]);
    return (0, eP.P)((e) => e.activeMainLink === ea.oH.FAVORITES && null == e.gameFacet && null == e.clippedWithFacet)
        ? (0, n.jsx)("div", {
              className: eD.kL,
              children: (0, n.jsx)(h.D, {
                  variant: "heading-xl/semibold",
                  children: B.intl.string($.default["+M2iLf"]),
              }),
          })
        : (0, n.jsx)("div", {
              className: eD.kL,
              children: (0, n.jsxs)("div", {
                  className: eD.Qs,
                  children: [
                      (0, n.jsx)(ed, { width: 213, height: 135, alt: "" }),
                      (0, n.jsx)(h.D, {
                          className: eD.wx,
                          variant: "heading-xl/semibold",
                          children: t ? B.intl.string($.default["+M2iLf"]) : B.intl.string($.default.m2GEpP),
                      }),
                      t &&
                          (0, n.jsx)(g.E, {
                              className: eD.h_,
                              variant: "body-md/medium",
                              children: B.intl.string($.default.xkY5xS),
                          }),
                      !l &&
                          (0, n.jsx)("div", {
                              className: eD.SO,
                              children: (0, n.jsx)(eb.A, { onEnableClips: i ? r : void 0 }),
                          }),
                      l && !t && (i ? (0, n.jsx)(e_, { className: eD.Mh }) : (0, n.jsx)(eR, {})),
                  ],
              }),
          });
}
let eH = 4 / 3;
var eU = l(621466),
    eG = l(61491),
    eF = l(342952),
    ez = l(890856),
    eV = l(939249),
    eK = l(820081),
    e$ = l(365199),
    eB = l(778712),
    eq = l(821609),
    eY = l(22231),
    eX = l(983851),
    eQ = l(31300),
    eW = l(442433),
    eZ = l(587895),
    eJ = l(927813),
    e0 = l(995273);
function e1(e) {
    let { timestamp: t, abbreviated: l = !0 } = e,
        [n, i] = a.useState(() => (0, e0.jb)(t, l));
    return (
        a.useEffect(() => {
            i((0, e0.jb)(t, l));
            let e = Date.now() - t;
            if (e > eJ.A.Millis.DAY) return;
            let n = e >= eJ.A.Millis.HOUR ? eJ.A.Millis.HOUR : eJ.A.Millis.MINUTE,
                a = setInterval(
                    () => {
                        i((0, e0.jb)(t, l));
                    },
                    n,
                    n - (e % n),
                );
            return () => clearInterval(a);
        }, [t, l]),
        n
    );
}
var e3 = l(549685),
    e2 = l(129230),
    e9 = l(403362),
    e6 = l(53677);
l(457538);
var e7 = l(609174),
    e4 = l(151184),
    e5 = l(82716),
    e8 = l(449397),
    te = l(399053),
    tt = l(285072),
    tl = l(284009),
    tn = l.n(tl),
    ta = l(460905),
    ti = l(608333),
    ts = l(153511);
function tr(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    tn()(l?.type === eE.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let a = (0, c.bG)([L.default], () => L.default.getUser(l.remoteTriggerUserId));
    if (null == a) return null;
    let i = a.globalName ?? a.username;
    return (0, n.jsx)(p.m, {
        text: B.intl.string($.default.vTTkFF),
        children: (0, n.jsxs)("div", {
            className: ts.S,
            children: [
                (0, n.jsx)("img", { src: a.getAvatarURL(null, 12, !1), className: ts.$, alt: i }),
                (0, n.jsx)(g.E, {
                    color: "text-overlay-light",
                    variant: "body-xs/medium",
                    children: B.intl.formatToPlainString($.default.QJ7i8Z, { username: i }),
                }),
            ],
        }),
    });
}
function to(e) {
    let { icon: t, text: l, ref: a, ...i } = e;
    return (0, n.jsxs)("div", {
        ...i,
        ref: a,
        className: ts.S,
        children: [
            (0, n.jsx)(t, { size: "xxs", color: "currentColor" }),
            (0, n.jsx)(g.E, { color: "text-overlay-light", variant: "body-xs/medium", children: l }),
        ],
    });
}
function tc(e) {
    let { icon: t, text: l, tooltipText: a } = e;
    return (0, n.jsx)(p.m, { text: a, children: (0, n.jsx)(to, { icon: t, text: l }) });
}
function td(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === eE.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case eE.Gy.DISTRIBUTED:
            return (0, n.jsx)(tr, { clip: t });
        case eE.Gy.LAUGHTER:
            return (0, n.jsx)(tc, {
                icon: ta.ReactionIcon,
                text: B.intl.string($.default.bTC23D),
                tooltipText: B.intl.string($.default.Ek6GZO),
            });
        case eE.Gy.SHOUTING:
            return (0, n.jsx)(tc, {
                icon: ta.ReactionIcon,
                text: B.intl.string($.default["3gqpuo"]),
                tooltipText: B.intl.string($.default.Ek6GZO),
            });
        case eE.Gy.GAME_EVENT: {
            let e = (0, ti.u6)(t.applicationId, eE.Gy.GAME_EVENT, t.decision.signal.eventName);
            if (null == e) return null;
            return (0, n.jsx)(tc, {
                icon: e,
                text: (0, ti.PZ)(t.applicationId, eE.Gy.GAME_EVENT, t.decision.signal.eventName) ?? "",
                tooltipText: B.intl.string($.default["347DBb"]),
            });
        }
        default:
            return null;
    }
}
var tu = l(718812),
    tm = l(721610),
    th = l(686320),
    tf = l(175764);
function tx(e) {
    let { clip: t, actionsDisabled: l, isNew: a, onClick: i, onEdit: s, gridItemProps: r } = e;
    return (0, n.jsx)(e7.Cl, {
        clip: t,
        children: (0, n.jsx)(tg, { actionsDisabled: l, isNew: a, onClick: i, onEdit: s, gridItemProps: r }),
    });
}
function tg(e) {
    let { actionsDisabled: t, isNew: i, onClick: r, onEdit: o, gridItemProps: d } = e,
        u = (0, e7.Y_)(),
        m = !0 === u.pending,
        h = (0, c.bG)([_.Ay], () => _.Ay.isClipExporting(u.id)),
        f = t || m || h,
        x = m || h,
        { analyticsLocations: g } = (0, E.Ay)(N.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: p, toggleClipSelection: j, isMultiSelectMode: y, picker: v } = a.useContext(tm.$),
        C = v?.allowMultiSelect ?? !0,
        b = null != v ? (0, th.$)(v.action).label : void 0,
        [k, I] = a.useState(!1),
        [S, L] = a.useState(!1),
        [w, P] = a.useState(!1),
        [M, D] = a.useState(!1),
        [T, R] = a.useState(0),
        O = p.has(u.id),
        H = u.type === eE.nQ.SCREENSHOT,
        U = "auto" === u.clipMethod,
        G = (0, c.bG)([A.Ay], () => A.Ay.keyboardModeEnabled),
        F = (S || k || (w && G)) && !O,
        z = a.useCallback(() => P(!0), []),
        V = a.useCallback((e) => {
            e.currentTarget.contains(e.relatedTarget) || P(!1);
        }, []);
    a.useEffect(() => {
        if (!F || H || m) return;
        let e = window.setTimeout(() => D(!0), 150);
        return () => {
            (window.clearTimeout(e), D(!1));
        };
    }, [F, H, m]);
    let K = a.useRef(null),
        $ = a.useCallback(() => {
            K.current?.releaseSource();
        }, []),
        q = a.useCallback((e) => {
            K.current?.seek(e);
        }, []),
        Y = a.useCallback(() => I(!1), []),
        X = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), j(u.id));
            },
            [j, u.id],
        ),
        Q = a.useCallback(
            (e) => {
                I(!0);
                let t =
                    y && p.size > 0
                        ? Array.from(p)
                              .map((e) => _.Ay.getClipById(e))
                              .filter(e9.Vq)
                        : [u];
                (0, eW.L3)(
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
                                analyticsLocations: g,
                                clips: t,
                                actionsDisabled: f,
                                showExportingModal: !0,
                                onMainAction: null != v ? () => v.onPick(u) : void 0,
                                mainAction: v?.action,
                                onShare: () => {
                                    e2.default.track(eM.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...e6.lc(),
                                        ...e6.Zy(u),
                                    });
                                },
                                onEdit: () => {
                                    (o(u),
                                        e2.default.track(eM.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...e6.lc(),
                                            ...e6.Zy(u),
                                        }));
                                },
                                onBeforeDelete: $,
                                onAfterDelete: () => {
                                    e2.default.track(eM.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...e6.lc(),
                                        ...e6.Zy(u),
                                    });
                                },
                            });
                    },
                    { onClose: Y },
                );
            },
            [u, y, p, f, Y, o, $, v, g],
        ),
        W = a.useCallback(
            (e) => {
                f || (e.preventDefault(), e.stopPropagation(), Q(e));
            },
            [f, Q],
        ),
        Z = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), Q(e));
            },
            [Q],
        ),
        J = a.useCallback(
            (e) => {
                (e.preventDefault(),
                    e.stopPropagation(),
                    o(u),
                    e2.default.track(eM.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" }));
            },
            [o, u],
        ),
        ee = a.useCallback(
            (e) => {
                !x &&
                    (!(0, eU.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") &&
                            null == e.target.closest("[data-clips-progress]") &&
                            null == e.target.closest("[data-clips-select]") &&
                            e.currentTarget.contains(e.target))) &&
                    (C && e.shiftKey ? (e.preventDefault(), j(u.id)) : C && y ? j(u.id) : null != r && r(u),
                    e2.default.track(eM.HAw.CLIP_GALLERY_CARD_CLICKED, { ...e6.lc(), ...e6.Zy(u) }));
            },
            [x, C, y, j, u, r],
        );
    return (0, n.jsx)(E.f5, {
        value: g,
        children: (0, n.jsx)("div", {
            className: tf.hl,
            onFocus: z,
            onBlur: V,
            children: (0, n.jsx)(ez.s, {
                "aria-disabled": x,
                "aria-label": b ?? B.intl.string(H ? B.t["HO/oXl"] : B.t.bt75uw),
                onClick: x ? void 0 : ee,
                onContextMenu: W,
                buttonProps: null != d ? { role: "button", id: d.id, tabIndex: d.tabIndex } : void 0,
                buttonRef: d?.ref,
                onFocus: d?.onFocus,
                className: s()(tf.Nr, { [tf.r9]: x, [tf.in]: k, [tf.wH]: O }),
                onMouseEnter: () => L(!0),
                onMouseLeave: () => L(!1),
                children: (0, n.jsx)("div", {
                    className: tf.w7,
                    children: (0, n.jsxs)(tp, {
                        ref: K,
                        isPlaying: M,
                        onProgressChange: R,
                        children: [
                            m && (0, n.jsx)("div", { className: tf.mi, children: (0, n.jsx)(es.y, {}) }),
                            (0, n.jsx)("div", {
                                className: s()(tf.w$, { [tf.t7]: F, [tf.Vg]: U }),
                                inert: !0,
                                "aria-hidden": "true",
                            }),
                            (0, n.jsx)(tj, {
                                isNew: i,
                                showHoverActions: F && !f,
                                showSelect: C && (F || O),
                                isSelected: O,
                                onToggleSelect: X,
                                onMenu: Z,
                                onBeforeDelete: $,
                            }),
                            (0, n.jsx)(ty, {
                                showHoverState: F,
                                playbackProgress: T,
                                editDisabled: x,
                                onEdit: J,
                                onSeek: q,
                            }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function tp(e) {
    let { isPlaying: t, onProgressChange: l, children: a, ref: i } = e;
    return (0, n.jsx)(te.d, {
        ref: i,
        isPlaying: t,
        preload: "none",
        onProgressChange: l,
        children: (0, n.jsx)(tt.h, { isVisible: !0, className: tf.Lw, children: a }),
    });
}
function tj(e) {
    let {
            isNew: t,
            showHoverActions: l,
            showSelect: a,
            isSelected: i,
            onToggleSelect: r,
            onMenu: o,
            onBeforeDelete: c,
        } = e,
        d = (0, e7.Y_)(),
        u = !0 === d.pending;
    return (0, n.jsxs)("div", {
        className: tf.wx,
        children: [
            (0, n.jsxs)("div", {
                className: tf.LD,
                children: [
                    a &&
                        (0, n.jsx)(eV.D, {
                            "aria-label": B.intl.string(B.t.XqMe3N),
                            "aria-pressed": i,
                            onClick: r,
                            "data-clips-select": "true",
                            className: s()(tf.UJ, { [tf.ZK]: i }),
                            children: i && (0, n.jsx)(eK.CheckmarkSmallBoldIcon, { size: "xs", color: "currentColor" }),
                        }),
                    !u &&
                        t &&
                        (0, n.jsx)("div", {
                            className: tf.Ad,
                            children: (0, n.jsx)(g.E, {
                                variant: "body-xs/semibold",
                                color: "text-overlay-light",
                                children: B.intl.string(B.t.y2b7CA),
                            }),
                        }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: tf.IE,
                children: [
                    (d.isFavorite || l) &&
                        (0, n.jsx)("div", {
                            className: s()({ [tf.L6]: d.isFavorite }),
                            children: (0, n.jsx)(e5.z, {}),
                        }),
                    l &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(p.m, {
                                    text: B.intl.string(B.t["UKOtz+"]),
                                    children: (0, n.jsx)(j.K, {
                                        onClick: o,
                                        icon: e$.MoreHorizontalIcon,
                                        "aria-label": B.intl.string(B.t["UKOtz+"]),
                                        variant: "overlay-secondary",
                                        size: "sm",
                                    }),
                                }),
                                (0, n.jsx)(e4.k, { onBeforeDelete: c }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
function ty(e) {
    let { showHoverState: t, playbackProgress: l, editDisabled: i, onEdit: r, onSeek: o } = e,
        d = (0, e7.Y_)(),
        u = d.type === eE.nQ.SCREENSHOT,
        m = a.useRef(null),
        h = a.useRef(!1),
        f = a.useCallback(
            (e) => {
                let t = m.current;
                if (null == t) return;
                let l = t.getBoundingClientRect();
                0 === l.width || o(Math.max(0, Math.min(100, 100 * ((e - l.left) / l.width))));
            },
            [o],
        ),
        x = a.useCallback(
            (e) => {
                (e.stopPropagation(),
                    e.preventDefault(),
                    (h.current = !0),
                    e.currentTarget.setPointerCapture(e.pointerId),
                    f(e.clientX));
            },
            [f],
        ),
        p = a.useCallback(
            (e) => {
                h.current && f(e.clientX);
            },
            [f],
        ),
        j = a.useCallback((e) => {
            ((h.current = !1),
                e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId));
        }, []),
        y = (0, c.yK)([L.default], () => d.users.map((e) => L.default.getUser(e)).filter(e9.Vq)),
        v = e1({ timestamp: d.createdAt }),
        C = d.decision?.signal?.type,
        b = null != C && C !== eE.Gy.MANUAL,
        A =
            y.length > 0
                ? (0, n.jsx)("span", {
                      className: tf.HD,
                      "data-clips-avatars": "true",
                      children: (0, n.jsx)(eF.A, {
                          maxUsers: 3,
                          users: y,
                          size: eB._3.SIZE_16,
                          "aria-label": B.intl.string(B.t.WTozwe),
                      }),
                  })
                : null;
    return (0, n.jsx)("div", {
        className: tf.qr,
        children: (0, n.jsxs)("div", {
            className: tf.Zn,
            children: [
                (0, n.jsxs)("div", {
                    className: tf.$,
                    children: [
                        (0, n.jsxs)("div", { className: tf.gH, children: [(0, n.jsx)(tb, {}), (0, n.jsx)(tC, {})] }),
                        t ? A : null,
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: s()(tf.SO, { [tf.AK]: t && !u, [tf.I_]: t && u }),
                    children: [
                        (0, n.jsxs)("div", {
                            className: s()(tf.KW, { [tf.g3]: t }),
                            inert: t,
                            "aria-hidden": t,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: tf.Tf,
                                    children: [
                                        (0, n.jsx)(td, { clip: d }),
                                        b && (0, n.jsx)("span", { className: tf.TG, "aria-hidden": "true" }),
                                        A,
                                        (0, n.jsx)(g.E, {
                                            variant: "body-xs/normal",
                                            color: "none",
                                            children: B.intl.format($.default["0QCBug"], { time: v }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", { className: tf.av, children: (0, n.jsx)(tv, {}) }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: s()(tf.Ax, { [tf.Mg]: t }),
                            inert: !t,
                            children: [
                                !u &&
                                    (0, n.jsx)("div", {
                                        ref: m,
                                        className: tf.hr,
                                        onPointerDown: x,
                                        onPointerMove: p,
                                        onPointerUp: j,
                                        "data-clips-progress": "true",
                                        "aria-hidden": "true",
                                        children: (0, n.jsx)("div", {
                                            className: tf.z5,
                                            children: (0, n.jsx)("div", {
                                                className: tf.TE,
                                                style: { width: `${l}%` },
                                                children: (0, n.jsx)("div", {
                                                    className: tf.GT,
                                                    "aria-hidden": "true",
                                                }),
                                            }),
                                        }),
                                    }),
                                (0, n.jsxs)("div", {
                                    className: tf.E_,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: tf.lO,
                                            children: (0, n.jsx)(eq.$, {
                                                variant: "overlay-secondary",
                                                size: "sm",
                                                icon: eY.PencilIcon,
                                                text: B.intl.string(B.t.bt75uw),
                                                disabled: i,
                                                onClick: r,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: tf.lO,
                                            children: (0, n.jsx)(e8.e, { variant: "primary" }),
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
function tv() {
    let e = (0, e7.Y_)(),
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
                    !1 === e.editMetadata.soundboardAudio ||
                    (e.editMetadata.mutedSpeakerIds?.length ?? 0) > 0 ||
                    Object.values(e.editMetadata.speakerVolumes ?? {}).some((e) => 100 !== e) ||
                    (e.editMetadata.applicationVolume ?? 100) !== 100 ||
                    (e.editMetadata.soundboardVolume ?? 100) !== 100;
            return l || n;
        })(e),
        s = a.useMemo(() => {
            let t = e.length;
            if (null != e.editMetadata) {
                let l = e.editMetadata.end - e.editMetadata.start;
                1e3 * l < e.length && (t = 1e3 * l);
            }
            let l = Math.floor(t / 1e3);
            return (0, eG.rB)(l);
        }, [e.length, e.editMetadata]);
    return t
        ? null
        : (0, n.jsxs)("div", {
              className: tf.p0,
              children: [
                  i && (0, n.jsx)(e3.A, { color: "white", width: 14, height: 14 }),
                  (0, n.jsx)(g.E, {
                      variant: "body-xs/medium",
                      color: "text-overlay-light",
                      tabularNumbers: !0,
                      children: l ? B.intl.string(B.t["2Fp7OP"]) : s,
                  }),
              ],
          });
}
function tC() {
    let e = (0, e7.Y_)(),
        t = (0, tu.h)(e),
        l = "" !== t;
    return (0, n.jsx)(g.E, {
        className: tf.DD,
        variant: "body-sm/semibold",
        color: "text-overlay-light",
        children: l ? t : e.name,
    });
}
function tb() {
    let e = (0, e7.Y_)(),
        t = (0, c.bG)([eZ.A], () => (null != e.applicationId ? eZ.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, n.jsx)("div", {
        className: tf.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, n.jsx)("img", { src: l, alt: "", className: tf.T_ })
                : e.type === eE.nQ.VOICE_CLIP
                  ? (0, n.jsx)(eX.VoiceNormalIcon, { size: "xs", color: "currentColor" })
                  : (0, n.jsx)(eQ.ScreenIcon, { size: "xs", color: "currentColor" }),
    });
}
function tA(e) {
    return Math.min(45 * e, 520);
}
tp.displayName = "CardThumbnail";
var tN = l(91440),
    tE = l(762831);
function tk(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: i, onEdit: s, isLoading: r, topInset: o = 0 } = e,
        [d, u] = a.useState({ width: 0, height: 0 }),
        m = (0, c.yK)([_.Ay], () => _.Ay.getNewClipIds()),
        f = (0, c.bG)([_.Ay], () => _.Ay.getExportingClipIds().size > 0),
        x = (0, eP.P)((e) => e.activeMainLink),
        p = (0, eP.P)((e) => e.gameFacet),
        j = (0, eP.P)((e) => e.clippedWithFacet),
        y = a.useMemo(() => {
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
        v = a.useMemo(() => [o, 24, 0, 24], [o]),
        { width: C } = d,
        { tileWidth: b, columns: N } = a.useMemo(() => {
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
        E = (0, eo.GV)(),
        k = a.useRef(null),
        I = a.useMemo(() => {
            let e = Math.max(1, N),
                t = [];
            for (let l of y) {
                let n = Math.ceil(l.clips.length / e);
                for (let a = 0; a < n; a++) t.push(Math.min(e, l.clips.length - a * e));
            }
            return t;
        }, [y, N]),
        S = a.useCallback(
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
            getContainerProps: L,
            getItemProps: w,
            getRowProps: P,
        } = (0, ei.A)({ navId: E, columnCounts: I, prepareFocus: S }),
        M = a.useMemo(() => y.map((e) => Math.ceil(e.clips.length / N)), [y, N]),
        D = a.useMemo(() => M.reduce((e, t) => e + t, 0), [M]),
        T = Math.floor(b / eH) + 20,
        R = y.length > 0 ? `${x}:${p ?? ""}:${j ?? ""}` : null,
        O = (function (e) {
            let t = (0, c.bG)([A.Ay], () => A.Ay.useReducedMotion),
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
                    r = y[l];
                if (null == r) return null;
                let o = a * N,
                    c = r.clips.slice(o, o + N);
                return (0, n.jsx)(
                    "div",
                    {
                        className: tN.UX,
                        ...P(e),
                        children: c.map((t, l) => {
                            let a = { width: b };
                            return (
                                O && (a["--custom-entrance-delay"] = `${tA(e + l)}ms`),
                                (0, n.jsx)(
                                    "div",
                                    {
                                        className: O ? tE.$ : void 0,
                                        style: a,
                                        children: (0, n.jsx)(tx, {
                                            actionsDisabled: f,
                                            isNew: m.includes(t.id),
                                            onClick: i ?? s,
                                            onEdit: s,
                                            clip: t,
                                            gridItemProps: w(l, e),
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
            [y, N, b, f, m, i, s, P, w, O, R],
        ),
        U = a.useCallback(
            (e) => {
                let t = y[e];
                return t?.description != null ? 66 : 44;
            },
            [y],
        ),
        G = a.useCallback(
            (e) => {
                let t = y[e];
                return null == t
                    ? null
                    : (0, n.jsxs)(
                          "div",
                          {
                              className: tN.aE,
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
                                          className: tN.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [y],
        );
    if (!r && 0 === y.length) return (0, n.jsx)(eO, { isEmptyBecauseQuery: l > 0 });
    if (r && 0 === y.length) return (0, n.jsx)("div", { className: tN.dc, children: (0, n.jsx)(es.y, {}) });
    let F = (0, n.jsx)(er.A, {
            ref: k,
            role: "none presentation",
            className: tN.Vb,
            listPadding: v,
            renderRow: H,
            renderSectionHeader: G,
            rowCount: D,
            rowCountBySection: M,
            rowHeight: T,
            sectionHeaderHeight: U,
            onResize: u,
        }),
        { onFocus: z, ...V } = L();
    return (0, n.jsx)("div", { className: tN.UT, ...V, children: F });
}
var tI = l(405433),
    tS = l(241326),
    tL = l(27232),
    tw = l(505930),
    t_ = l(322911);
function tP(e) {
    let {
            selectedCount: t,
            allSelectedFavorited: l,
            onClear: a,
            onFavorite: i,
            onDelete: s,
            onShare: r,
            isSharing: o = !1,
            actionsDisabled: c = !1,
        } = e,
        d = t > 10,
        u = B.intl.string(l ? $.default.IZsalP : $.default.ihBfyA),
        m = (0, n.jsx)(eq.$, {
            variant: "primary",
            size: "sm",
            icon: tI.ShareIcon,
            text: B.intl.string(B.t.RDE0Sc),
            onClick: r,
            disabled: d,
            loading: o,
        });
    return (0, n.jsxs)("div", {
        "aria-label": B.intl.string(B.t.z2jK6X),
        role: "region",
        className: t_.M0,
        children: [
            (0, n.jsxs)("div", {
                className: t_.h5,
                children: [
                    (0, n.jsx)(g.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: B.intl.format($.default.cSfYIv, { count: t }),
                    }),
                    (0, n.jsx)("span", { className: t_.Om, "aria-hidden": "true" }),
                    (0, n.jsx)(eV.D, {
                        className: t_.IU,
                        onClick: a,
                        children: (0, n.jsx)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-link",
                            children: B.intl.string(B.t.VkKicb),
                        }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: t_.o1,
                children: [
                    (0, n.jsx)(p.m, {
                        text: B.intl.string(B.t.oyYWHE),
                        children: (0, n.jsx)(j.K, {
                            onClick: s,
                            icon: tS.TrashIcon,
                            size: "sm",
                            variant: "secondary",
                            disabled: c,
                            "aria-label": B.intl.string(B.t.oyYWHE),
                        }),
                    }),
                    (0, n.jsx)(
                        p.m,
                        {
                            text: u,
                            children: (0, n.jsx)(j.K, {
                                onClick: i,
                                icon: l ? tL.StarIcon : tw.StarOutlineIcon,
                                size: "sm",
                                variant: "secondary",
                                disabled: c,
                                "aria-label": u,
                            }),
                        },
                        `favorite:${l}`,
                    ),
                    (0, n.jsx)(p.m, { text: d ? B.intl.string($.default.qpw1d9) : null, asContainer: !0, children: m }),
                ],
            }),
        ],
    });
}
var tM = l(70860);
function tD(e) {
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
            className: tM.kL,
            children: [
                (0, n.jsx)("canvas", { ref: i, className: tM.Ji, tabIndex: 0, "aria-label": "Doggo Game" }),
                (0, n.jsx)("div", {
                    className: tM.b,
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
let tT = [
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
var tR = l(265872),
    tO = l(847374),
    tH = l(165862),
    tU = l(477782),
    tG = l(112173),
    tF = l(97808),
    tz = l(683438),
    tV = l(682163),
    tK = l(71393),
    t$ = l(341923),
    tB = l(305866),
    tq = l(441349),
    tY = l(789645),
    tX = l(70254),
    tQ = l(569737);
function tW(e) {
    return (e.setHours(0, 0, 0, 0), e.getTime());
}
function tZ(e) {
    return (e.setHours(23, 59, 59, 999), e.getTime());
}
function tJ(e, t) {
    if (null == e && null == t) return null;
    let l = (0, tX.Xj)();
    return { preset: "custom", after: null != e ? tW(e.toDate(l)) : null, before: null != t ? tZ(t.toDate(l)) : null };
}
function t0(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new tQ.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let t1 = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function t3(e) {
    return t1.format(new Date(e));
}
function t2(e) {
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
            let t = null != e.after ? t3(e.after) : null,
                l = null != e.before ? t3(e.before) : null;
            if (null != t && null != l) return B.intl.formatToPlainString($.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return B.intl.formatToPlainString($.default.k1FkTL, { date: t });
            if (null != l) return B.intl.formatToPlainString($.default["4NlpHD"], { date: l });
            return B.intl.string($.default.tv9apA);
        }
    }
}
var t9 = l(435021);
function t6(e) {
    let { closePopout: t } = e,
        l = (0, eP.P)((e) => e.dateFilter),
        i = (0, eP.P)((e) => e.setDateFilter),
        [r, o] = a.useState(l?.preset === "custom"),
        [c, d] = a.useState(() => (l?.preset === "custom" ? t0(l.after) : null)),
        [u, m] = a.useState(() => (l?.preset === "custom" ? t0(l.before) : null)),
        h = a.useMemo(
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
        y = a.useMemo(() => (0, tX.Ec)((0, tX.Xj)()), []),
        v = a.useCallback(
            (e) => {
                (i(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: tW(new Date(t)), before: tZ(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: tW(new Date(l)), before: tZ(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 2), { preset: e, after: tW(l), before: tZ(new Date(t)) }
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
                (d(e), i(tJ(e, u)));
            },
            [u, i],
        ),
        A = a.useCallback(
            (e) => {
                (m(e), i(tJ(c, e)));
            },
            [c, i],
        ),
        N = a.useCallback(() => {
            (d(null), m(null), i(null));
        }, [i]),
        E = null != c || null != u,
        k = a.useRef(null),
        I = a.useCallback(() => Array.from(k.current?.querySelectorAll('[role="button"]') ?? []), []),
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
        L = a.useCallback(
            (e) => {
                let l = e.relatedTarget;
                (null != l && (e.currentTarget.contains(l) || null != l.closest('[role="dialog"]'))) || t();
            },
            [t],
        );
    return (0, n.jsx)(tB.l, {
        "aria-label": B.intl.string($.default.upqksT),
        onBlur: L,
        children: (0, n.jsxs)("div", {
            className: s()(t9.SW, r && t9.Td),
            children: [
                (0, n.jsxs)("div", {
                    className: t9.sh,
                    children: [
                        (0, n.jsx)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-muted",
                            className: t9.a9,
                            children: B.intl.string($.default.upqksT),
                        }),
                        (0, n.jsxs)("div", {
                            ref: k,
                            className: t9.eF,
                            onKeyDown: S,
                            children: [
                                h.map((e) =>
                                    (0, n.jsx)(
                                        eV.D,
                                        {
                                            className: s()(t9.zD, x === e.key && t9.pH),
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
                                (0, n.jsxs)(eV.D, {
                                    className: s()(t9.zD, t9.Kl, (r || "custom" === f) && t9.pH),
                                    onClick: C,
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
                                            className: t9.Xt,
                                            children: r ? "\u25C0" : "\u25B6",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: t9.ML,
                    "aria-hidden": !r,
                    children: [
                        (0, n.jsxs)("div", {
                            className: t9.U6,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: t9._2,
                                    children: [
                                        (0, n.jsx)(g.E, {
                                            variant: "body-sm/medium",
                                            color: "text-muted",
                                            className: t9.bk,
                                            "aria-hidden": !0,
                                            children: B.intl.string($.default["96vZuU"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: t9.h0,
                                            children: [
                                                (0, n.jsx)(tq.l, {
                                                    label: B.intl.string($.default["96vZuU"]),
                                                    hideLabel: !0,
                                                    value: c,
                                                    onChange: b,
                                                    maxValue: u ?? y,
                                                }),
                                                null != c &&
                                                    (0, n.jsx)(p.m, {
                                                        text: B.intl.string(B.t.VkKicb),
                                                        children: (0, n.jsx)(j.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tY.XSmallIcon,
                                                            onClick: () => b(null),
                                                            "aria-label": B.intl.string(B.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: t9._2,
                                    children: [
                                        (0, n.jsx)(g.E, {
                                            variant: "body-sm/medium",
                                            color: "text-muted",
                                            className: t9.bk,
                                            "aria-hidden": !0,
                                            children: B.intl.string($.default["GL51/b"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: t9.h0,
                                            children: [
                                                (0, n.jsx)(tq.l, {
                                                    label: B.intl.string($.default["GL51/b"]),
                                                    hideLabel: !0,
                                                    value: u,
                                                    onChange: A,
                                                    minValue: c ?? void 0,
                                                    maxValue: y,
                                                }),
                                                null != u &&
                                                    (0, n.jsx)(p.m, {
                                                        text: B.intl.string(B.t.VkKicb),
                                                        children: (0, n.jsx)(j.K, {
                                                            size: "sm",
                                                            variant: "icon-only",
                                                            icon: tY.XSmallIcon,
                                                            onClick: () => A(null),
                                                            "aria-label": B.intl.string(B.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        E &&
                            (0, n.jsx)("div", {
                                className: t9.dS,
                                children: (0, n.jsx)(eg.Q, { size: "sm", text: B.intl.string(B.t.VkKicb), onClick: N }),
                            }),
                    ],
                }),
            ],
        }),
    });
}
var t7 = l(91871),
    t4 = l.n(t7),
    t5 = l(190199),
    t8 = l(914427),
    le = l(724141);
function lt(e) {
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
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => t4()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, n.jsxs)(
                            t5.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, n.jsx)("span", { className: le.H, children: e.icon }),
                                    (0, n.jsx)(t5.x4.Label, { children: e.label }),
                                    r ? (0, n.jsx)(t5.x4.Checkbox, {}) : (0, n.jsx)(t5.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        h = i.size > 0 ? `${t} (${i.size})` : t;
    return (0, n.jsx)(tR.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(t8.p, {
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
            (0, n.jsx)(eq.$, {
                ...e,
                buttonRef: d,
                size: "sm",
                variant: "secondary",
                text: h,
                icon: tO.ChevronSmallDownIcon,
                iconPosition: "end",
            }),
    });
}
var ll = l(187671);
function ln(e) {
    let { label: t, icon: l, onRemove: a, removeAriaLabel: i } = e;
    return (0, n.jsxs)("div", {
        className: ll.Io,
        children: [
            null != l && (0, n.jsx)("span", { className: ll.Kk, children: l }),
            (0, n.jsx)(g.E, {
                className: ll.Pf,
                variant: "body-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, n.jsx)(eV.D, {
                className: ll.DT,
                onClick: a,
                "aria-label": i ?? B.intl.string(B.t.N86XcP),
                children: (0, n.jsx)(tY.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var la = l(401756);
let li = { all: $.default.lscwjQ, auto: $.default.xrOIkz, manual: $.default.D7HSLJ };
function ls() {
    let e = (0, eP.P)((e) => e.dateFilter),
        t = a.useRef(null),
        l = null != e ? t2(e) : B.intl.string($.default.upqksT);
    return (0, n.jsx)(tR.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(t6, { closePopout: t });
        },
        children: (e) =>
            (0, n.jsx)(eq.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: tO.ChevronSmallDownIcon,
                iconPosition: "end",
            }),
    });
}
function lr() {
    let e = (0, eP.P)((e) => e.sortOrder),
        t = (0, eP.P)((e) => e.setSortOrder),
        l = a.useRef(null),
        i = e === ea.mu.OLDEST ? B.intl.string(B.t["0gitSE"]) : B.intl.string(B.t["4LLKx3"]);
    return (0, n.jsx)(tR.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, n.jsx)(tH.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": B.intl.string(B.t.XvNMNk),
                onClose: a,
                onSelect: void 0,
                children: (0, n.jsxs)(tU.rX, {
                    children: [
                        (0, n.jsx)(tU.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: B.intl.string(B.t["4LLKx3"]),
                            action: () => {
                                (t(ea.mu.MOST_RECENT), a());
                            },
                            checked: e === ea.mu.MOST_RECENT,
                        }),
                        (0, n.jsx)(tU.iD, {
                            id: "sort-oldest",
                            group: "sort",
                            label: B.intl.string(B.t["0gitSE"]),
                            action: () => {
                                (t(ea.mu.OLDEST), a());
                            },
                            checked: e === ea.mu.OLDEST,
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, n.jsx)(eq.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: i,
                icon: tG.ArrowsUpDownIcon,
            }),
    });
}
function lo() {
    let e = (0, eP.P)((e) => e.clipMethodFilter),
        t = (0, eP.P)((e) => e.setClipMethodFilter),
        l = a.useRef(null);
    return (0, n.jsx)(tR.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, n.jsx)(tH.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": B.intl.string($.default["kIqbb/"]),
                onClose: a,
                onSelect: void 0,
                children: (0, n.jsxs)(tU.rX, {
                    children: [
                        (0, n.jsx)(tU.iD, {
                            id: "method-all",
                            group: "method",
                            label: B.intl.string($.default.lscwjQ),
                            action: () => {
                                (t("all"), a());
                            },
                            checked: "all" === e,
                        }),
                        (0, n.jsx)(tU.iD, {
                            id: "method-auto",
                            group: "method",
                            label: B.intl.string($.default.xrOIkz),
                            action: () => {
                                (t("auto"), a());
                            },
                            checked: "auto" === e,
                        }),
                        (0, n.jsx)(tU.iD, {
                            id: "method-manual",
                            group: "method",
                            label: B.intl.string($.default.D7HSLJ),
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
            (0, n.jsx)(eq.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: B.intl.string($.default["kIqbb/"]),
                icon: tO.ChevronSmallDownIcon,
                iconPosition: "end",
            }),
    });
}
function lc(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: i } = e,
        s = (0, eP.P)((e) => e.query),
        r = (0, eP.P)((e) => e.setQuery),
        o = (0, eP.P)((e) => e.pendingSearchFocus),
        c = (0, eP.P)((e) => e.setPendingSearchFocus),
        d = a.useRef(null),
        u = (0, eP.P)((e) => e.activeMainLink),
        m = (0, eP.P)((e) => e.clipMethodFilter),
        h = (0, eP.P)((e) => e.setClipMethodFilter),
        f = (0, eP.P)((e) => e.gameFacet),
        x = (0, eP.P)((e) => e.clippedWithFacet),
        g = (0, eP.P)((e) => e.selectedGameIds),
        p = (0, eP.P)((e) => e.selectedUserIds),
        j = (0, eP.P)((e) => e.selectedGuildId),
        y = (0, eP.P)((e) => e.selectedActivity),
        v = (0, eP.P)((e) => e.dateFilter),
        C = (0, eP.P)((e) => e.toggleGameId),
        b = (0, eP.P)((e) => e.toggleUserId),
        A = (0, eP.P)((e) => e.setSelectedGuildId),
        N = (0, eP.P)((e) => e.setSelectedActivity),
        E = (0, eP.P)((e) => e.setDateFilter),
        k = (0, eP.P)((e) => e.clearFilters);
    a.useEffect(() => {
        o && (d.current?.focus(), c(!1));
    }, [o, c]);
    let w = a.useRef(null);
    a.useEffect(() => {
        let e = {
            type_filter: "all" !== m ? m : "",
            game_filter_application_ids: null != f ? [f] : Array.from(g),
            date_filter_range: null != v ? v.preset.replace(/-/g, "_") : "",
            filtered_by_server: null != j,
            filtered_by_participants: null != x || p.size > 0,
            filtered_by_favorites: u === ea.oH.FAVORITES,
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
            w.current = null;
            return;
        }
        let t = JSON.stringify(e);
        t !== w.current && ((w.current = t), e2.default.track(eM.HAw.CLIPS_FILTER_CHANGED, e));
    }, [m, f, g, v, j, x, p, u, y]);
    let _ = a.useMemo(() => l.map((e) => e.key), [l]),
        P = (0, I.A)(_),
        M = a.useMemo(() => new Map(P.map((e) => [e?.id, e])), [P]),
        D = a.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, n.jsx)(S.A, { game: M.get(e.key), size: S.M.XSMALL }),
                })),
            [l, M],
        ),
        T = a.useMemo(
            () =>
                (function (e) {
                    let t = new Set();
                    for (let l of e) null != l.guildId && t.add(l.guildId);
                    let l = [];
                    for (let e of t) {
                        let t = tK.A.getGuild(e);
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
                    icon: (0, n.jsx)(tV.Ay, { guild: e.guild, size: tV.Ay.Sizes.MINI }),
                })),
            [T],
        ),
        O = a.useMemo(() => new Map(T.map((e) => [e.key, e.guild])), [T]),
        H = a.useMemo(
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
        U = a.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    for (let l of e) {
                        let e = L.default.getUser(l.key);
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
                    icon: (0, n.jsx)(tF.eu, { src: e.avatarUrl, size: eB._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [i],
        ),
        G = a.useMemo(() => (null != j ? new Set([j]) : new Set()), [j]),
        F = a.useMemo(() => (null != y ? new Set([y]) : new Set()), [y]),
        z = a.useCallback(
            (e) => {
                A(j === e ? null : e);
            },
            [j, A],
        ),
        V = a.useCallback(
            (e) => {
                N(y === e ? null : e);
            },
            [y, N],
        ),
        K = null == f,
        $ = null == x,
        q = (0, t$.H)() && u !== ea.oH.AUTO_CLIPS,
        Y = B.intl.string(li[m]),
        X = (0, n.jsxs)(n.Fragment, {
            children: [
                K &&
                    Array.from(g).map((e) => {
                        let t = D.find((t) => t.key === e);
                        return (0, n.jsx)(
                            ln,
                            {
                                label: t?.label ?? e,
                                icon: (0, n.jsx)(S.A, { game: M.get(e), size: S.M.XSMALL }),
                                onRemove: () => C(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != v && (0, n.jsx)(ln, { label: t2(v), onRemove: () => E(null) }, "date"),
                null != j &&
                    (0, n.jsx)(
                        ln,
                        {
                            label: R.find((e) => e.key === j)?.label ?? j,
                            icon:
                                null != O.get(j)
                                    ? (0, n.jsx)(tV.Ay, { guild: O.get(j), size: tV.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => A(null),
                        },
                        "guild",
                    ),
                $ && Array.from(p).map((e) => (0, n.jsx)(ld, { userId: e, onRemove: () => b(e) }, `user-${e}`)),
                null != y && (0, n.jsx)(ln, { label: y, onRemove: () => N(null) }, "activity"),
                q && "all" !== m && (0, n.jsx)(ln, { label: Y, onRemove: () => h("all") }, "method"),
            ],
        }),
        Q = (K && g.size > 0) || null != v || null != j || ($ && p.size > 0) || null != y || (q && "all" !== m);
    return (0, n.jsxs)("div", {
        className: la.kT,
        children: [
            (0, n.jsxs)("div", {
                className: la.HL,
                children: [
                    (0, n.jsx)("div", {
                        className: la.MT,
                        children: (0, n.jsx)(tz.I, {
                            ref: d,
                            placeholder: B.intl.string(B.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: la.Zq,
                        children: [
                            q && (0, n.jsx)(lo, {}),
                            K &&
                                D.length > 0 &&
                                (0, n.jsx)(lt, {
                                    triggerLabel: B.intl.string(B.t.URyqtP),
                                    options: D,
                                    selectedKeys: g,
                                    onToggle: C,
                                    multiSelect: !0,
                                    searchPlaceholder: B.intl.string(B.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(ls, {}),
                            R.length > 0 &&
                                (0, n.jsx)(lt, {
                                    triggerLabel: B.intl.string(B.t["5qyruI"]),
                                    options: R,
                                    selectedKeys: G,
                                    onToggle: z,
                                    multiSelect: !1,
                                    searchPlaceholder: B.intl.string(B.t["5h0QOP"]),
                                }),
                            $ &&
                                U.length > 0 &&
                                (0, n.jsx)(lt, {
                                    triggerLabel: B.intl.string(B.t.YQ6dJg),
                                    options: U,
                                    selectedKeys: p,
                                    onToggle: (e) => b(e),
                                    multiSelect: !0,
                                    searchPlaceholder: B.intl.string(B.t["5h0QOP"]),
                                }),
                            H.length > 0 &&
                                (0, n.jsx)(lt, {
                                    triggerLabel: B.intl.string(B.t.agRtPG),
                                    options: H,
                                    selectedKeys: F,
                                    onToggle: V,
                                    multiSelect: !1,
                                    searchPlaceholder: B.intl.string(B.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(lr, {}),
                        ],
                    }),
                ],
            }),
            Q &&
                (0, n.jsxs)("div", {
                    className: la.eH,
                    children: [
                        X,
                        (0, n.jsx)(eg.Q, {
                            size: "sm",
                            variant: "primary",
                            text: B.intl.string(B.t.O8k7O4),
                            onClick: k,
                        }),
                    ],
                }),
        ],
    });
}
function ld(e) {
    let { userId: t, onRemove: l } = e,
        a = (0, c.bG)([L.default], () => L.default.getUser(t), [t]);
    if (null == a) return null;
    let i = a.globalName ?? a.username;
    return (0, n.jsx)(ln, {
        label: i,
        icon: (0, n.jsx)(tF.eu, { src: a.getAvatarURL(null, 32), size: eB._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
var lu = l(315629),
    lm = l(516521),
    lh = l(975571);
function lf(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var lx = l(195715);
function lg(e) {
    let { clips: t, onEdit: l, onEdgeNavigate: i, showEducationCopy: s = !1 } = e,
        r = a.useMemo(() => lf(t), [t]),
        o = (0, eP.P)((e) => e.setActiveMainLink),
        c = (0, eo.GV)(),
        d = a.useMemo(() => [r.length], [r.length]),
        { getContainerProps: u, getItemProps: m, getRowProps: p } = (0, ei.A)({ navId: c, columnCounts: d }),
        { onFocus: j, onKeyDown: y, ...v } = u(),
        C = a.useCallback(
            (e) => {
                if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
                    (e.preventDefault(),
                        e.stopPropagation(),
                        i?.("ArrowUp" === e.key ? "up" : "down", e.currentTarget));
                    return;
                }
                y(e);
            },
            [y, i],
        ),
        b = { ...v, onKeyDown: C };
    return 0 === r.length
        ? null
        : (0, n.jsxs)("section", {
              className: lx.uW,
              "aria-label": B.intl.string(s ? $.default.U5V4YO : $.default.efLpNC),
              children: [
                  (0, n.jsxs)("div", {
                      className: lx.wx,
                      children: [
                          s
                              ? (0, n.jsxs)("div", {
                                    className: lx.eS,
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
                                                helpArticleUrl: lh.A.getArticleURL(eM.MVz.CLIPS),
                                            }),
                                        }),
                                    ],
                                })
                              : (0, n.jsxs)("div", {
                                    className: lx.mX,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: lx.UP,
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
                                            className: lx.DD,
                                            children: B.intl.string($.default.efLpNC),
                                        }),
                                    ],
                                }),
                          (0, n.jsx)("div", {
                              className: lx.BX,
                              children: (0, n.jsx)(eq.$, {
                                  variant: "overlay-primary",
                                  size: "sm",
                                  onClick: () => o(ea.oH.AUTO_CLIPS),
                                  text: B.intl.string($.default.gCay1w),
                              }),
                          }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: lx.Vg,
                      "aria-label": B.intl.string($.default.efLpNC),
                      ...b,
                      tabIndex: -1,
                      children: (0, n.jsx)("div", {
                          className: lx.nM,
                          ...p(0),
                          children: r.map((e, t) =>
                              (0, n.jsx)(
                                  "div",
                                  {
                                      className: lx.v2,
                                      children: (0, n.jsx)(tx, {
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
var lp = l(65154),
    lj = l(331322),
    ly = l(509434),
    lv = l(106983),
    lC = l(257920),
    lb = l(171251),
    lA = l(876474),
    lN = l(801344),
    lE = l(190443),
    lk = l(979563),
    lI = l(865278),
    lS = l(763180);
function lL() {
    (0, lC.z)("ClipsHomeEducation");
}
function lw(e, t) {
    e2.default.track(eM.HAw.CLIPS_HOME_EDUCATION_CTA_CLICKED, {
        location: N.A.CLIPS_EA_CLIPS_HOME_EDUCATION,
        cta: e,
        education_state: t,
    });
}
function l_(e) {
    let { className: t, educationState: l } = e;
    return (0, n.jsxs)("div", {
        className: s()(lI.GX, t),
        children: [
            (0, n.jsx)("div", {
                className: lI.f1,
                "aria-hidden": !0,
                children: (0, n.jsx)("img", { className: lI.IG, src: lS.A, alt: "" }),
            }),
            (0, n.jsx)("div", {
                className: lI.UX,
                children: (0, n.jsxs)("div", {
                    className: lI.wE,
                    children: [
                        (0, n.jsx)(lp.CirclePlayIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                        (0, n.jsx)(eg.Q, {
                            variant: "always-white",
                            textVariant: "body-sm/medium",
                            text: B.intl.string($.default["2axqmn"]),
                            onClick: () => {
                                (lw("watch_video", l), lL());
                            },
                        }),
                    ],
                }),
            }),
        ],
    });
}
function lP(e) {
    let { type: t, applicationId: l, eventName: a } = e,
        i = (0, ti.u6)(l, t, a),
        s = (0, ti.PZ)(l, t, a);
    return null == i || null == s ? null : (0, n.jsx)(to, { icon: i, text: s });
}
function lM(e) {
    let { tags: t, className: l } = e;
    return (0, n.jsxs)("div", {
        className: s()(lI.Ny, l),
        "aria-hidden": !0,
        children: [
            (0, n.jsx)("div", {
                className: lI.mB,
                children: (0, n.jsx)(H.ClipsAutoIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
            }),
            (0, n.jsxs)("div", {
                className: lI.UX,
                children: [
                    (0, n.jsxs)("div", {
                        className: lI.US,
                        children: [
                            (0, n.jsx)("div", { className: s()(lI.qV, lI.AL) }),
                            (0, n.jsx)("div", { className: s()(lI.qV, lI.SA) }),
                            (0, n.jsx)("div", { className: s()(lI.qV, lI.pq) }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: lI.U2,
                        children: [
                            t.map((e) => (0, n.jsx)(lP, { ...e }, `${e.type}:${e.eventName ?? ""}`)),
                            (0, n.jsxs)("div", {
                                className: lI.Gc,
                                children: [
                                    (0, n.jsx)("div", { className: lI.my }),
                                    (0, n.jsx)("div", { className: lI.my }),
                                    (0, n.jsx)("div", { className: lI.my }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let lD = { type: eE.Gy.SHOUTING },
    lT = { type: eE.Gy.LAUGHTER },
    lR = { type: eE.Gy.GAME_EVENT, applicationId: lA.m, eventName: lN.n_.ChampionKill },
    lO = { type: eE.Gy.GAME_EVENT, applicationId: lA.m, eventName: lN.n_.PentaKill },
    lH = { type: eE.Gy.GAME_EVENT, applicationId: lb.w, eventName: lv.C.Ace },
    lU = { type: eE.Gy.GAME_EVENT, applicationId: lE.e, eventName: lk.d.AerialGoal },
    lG = { type: eE.Gy.GAME_EVENT, applicationId: lE.e, eventName: lk.d.EpicSave },
    lF = [lD, lR],
    lz = [lT, lO],
    lV = [
        { tags: [lD, lR], className: lI.ZU },
        { tags: [lU], className: lI.ex },
        { tags: [lT, lO], className: lI.l$ },
        { tags: [lH], className: lI.eS },
        { tags: [lD, lG], className: lI.lu },
        { tags: [lT, lH], className: lI.er },
    ];
function lK(e) {
    let { ref: t } = e;
    return (0, n.jsx)("div", {
        ref: t,
        className: lI.$j,
        "aria-hidden": !0,
        children: (0, n.jsx)("div", {
            className: lI.qG,
            children: (0, n.jsx)("div", {
                className: lI.h$,
                children: lV.map((e, t) => {
                    let { tags: l, className: a } = e;
                    return (0, n.jsx)(lM, { className: s()(lI.Qx, a), tags: l }, t);
                }),
            }),
        }),
    });
}
function l$() {
    let e = (0, eC.E)(),
        { onChange: t } = (0, z.U)(N.A.CLIPS_EA_CLIPS_HOME_EDUCATION),
        l = a.useCallback(() => t("manual"), [t]);
    return (0, n.jsxs)("section", {
        className: lI.uW,
        "aria-label": B.intl.string($.default.Pottsi),
        children: [
            (0, n.jsxs)("div", {
                className: lI.jg,
                children: [
                    (0, n.jsx)("div", {
                        className: lI.dw,
                        children: (0, n.jsx)(l_, { className: lI.RV, educationState: "no_clips" }),
                    }),
                    (0, n.jsxs)("div", {
                        className: lI.oY,
                        children: [
                            (0, n.jsxs)("div", {
                                className: lI.C,
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
                            (0, n.jsxs)(lj.B, {
                                direction: "horizontal",
                                gap: 12,
                                justify: "center",
                                children: [
                                    (0, n.jsx)(eq.$, {
                                        variant: "secondary",
                                        icon: ly.LinkExternalSmallIcon,
                                        iconPosition: "end",
                                        text: B.intl.string(B.t.hvVgAZ),
                                        onClick: () => {
                                            (lw("learn_more", "no_clips"),
                                                window.open(
                                                    lh.A.getArticleURL(eM.MVz.CLIPS),
                                                    "_blank",
                                                    "noopener,noreferrer",
                                                ));
                                        },
                                    }),
                                    e
                                        ? (0, n.jsx)(eq.$, {
                                              variant: "primary",
                                              icon: lp.CirclePlayIcon,
                                              text: B.intl.string($.default.caOprb),
                                              onClick: () => {
                                                  (lw("how_it_works", "no_clips"), lL());
                                              },
                                          })
                                        : (0, n.jsx)(eq.$, {
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
            (0, n.jsx)(e_, { className: lI.Vh }),
        ],
    });
}
function lB() {
    return (0, n.jsxs)("section", {
        className: lI.ZK,
        "aria-label": B.intl.string($.default["33gqTk"]),
        children: [
            (0, n.jsxs)("div", {
                className: lI.C,
                children: [
                    (0, n.jsx)(h.D, {
                        variant: "nitro-md",
                        color: "text-default",
                        children: B.intl.string($.default["33gqTk"]),
                    }),
                    (0, n.jsx)(g.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        children: B.intl.format($.default.aTozcJ, { helpArticleUrl: lh.A.getArticleURL(eM.MVz.CLIPS) }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: lI.LF,
                children: [
                    (0, n.jsx)(l_, { educationState: "no_auto_clips" }),
                    (0, n.jsx)(lM, { tags: lF }),
                    (0, n.jsx)(lM, { tags: lz }),
                ],
            }),
        ],
    });
}
var lq = l(770178),
    lY = l(202163),
    lX = l(68408);
function lQ(e) {
    let {
            session: t,
            recentClipIds: l,
            actionsDisabled: i,
            onEdit: r,
            onClipClick: o,
            animateEntrance: d,
            entranceRowOffset: u,
            onEdgeNavigate: m,
        } = e,
        { gameRecord: f } = (0, lY.Ay)(t.applicationId),
        { onShareSession: x } = a.useContext(tm.$),
        p = a.useCallback(() => {
            x?.(t.clips);
        }, [x, t.clips]),
        j = (0, eP.P)((e) => e.setGameFacet),
        y = (0, eP.P)((e) => e.setActiveMainLink),
        v = t.applicationId,
        C = null != v && "" !== v,
        A = a.useCallback(() => {
            null != v && "" !== v && (j(v), y(ea.oH.ALL_CLIPS));
        }, [v, j, y]),
        N = a.useCallback(() => {
            C ? A() : y(ea.oH.ALL_CLIPS);
        }, [C, A, y]),
        E = a.useMemo(() => (null == f ? null : (f.getBannerURL(1024) ?? f.screenshotUrls?.[0] ?? null)), [f]),
        k = (0, c.yK)([L.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => L.default.getUser(e)).filter(e9.Vq);
        }),
        I = a.useMemo(() => t.clips.filter((e) => "auto" === e.clipMethod).length, [t.clips]),
        w = e1({ timestamp: t.startedAt }),
        [_, P] = a.useState(800),
        M = (0, b.A)((e) => {
            P(e.target.clientWidth);
        }),
        D = (0, lq.w)(M),
        T = Math.max(1, (_ - 40) / 3),
        R = a.useMemo(() => {
            let e = t.clips.slice(0, 6),
                l = [];
            for (let t = 0; t < e.length; t += 3) l.push(e.slice(t, t + 3));
            return l;
        }, [t.clips]),
        O = t.clips.length > 6,
        H = (0, eo.GV)(),
        U = a.useMemo(() => R.map((e) => e.length), [R]),
        { getContainerProps: G, getItemProps: F, getRowProps: z } = (0, ei.A)({ navId: H, columnCounts: U }),
        { onFocus: V, onKeyDown: K, ...q } = G(),
        Y = a.useCallback(
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
        className: lX.dZ,
        children: [
            (0, n.jsx)("div", {
                className: s()(lX.tB, null == E && lX.rD),
                style: null != E ? { backgroundImage: `url(${E})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, n.jsxs)("div", {
                className: lX.wx,
                children: [
                    C
                        ? (0, n.jsx)(ez.s, {
                              "aria-label": t.applicationName,
                              onClick: A,
                              className: lX.Zn,
                              children: (0, n.jsx)(S.A, {
                                  className: lX.Gt,
                                  game: f,
                                  size: S.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, n.jsx)(S.A, { className: lX.Gt, game: f, size: S.M.MEDIUM, "aria-hidden": !0 }),
                    (0, n.jsxs)("div", {
                        className: lX.TK,
                        children: [
                            C
                                ? (0, n.jsx)(ez.s, {
                                      "aria-label": t.applicationName,
                                      onClick: A,
                                      className: lX.wb,
                                      children: (0, n.jsx)(h.D, {
                                          variant: "body-md/medium",
                                          color: "text-default",
                                          className: lX.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, n.jsx)(h.D, {
                                      variant: "body-md/medium",
                                      color: "text-default",
                                      className: lX.mO,
                                      children: t.applicationName,
                                  }),
                            (0, n.jsxs)("div", {
                                className: lX.mI,
                                children: [
                                    (0, n.jsx)(g.E, {
                                        variant: "body-xs/normal",
                                        color: "text-muted",
                                        children: B.intl.format($.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    I > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: lX.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(g.E, {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    children: B.intl.format($.default.eRrt7X, { count: I }),
                                                }),
                                            ],
                                        }),
                                    (0, n.jsx)("span", { className: lX.TG, "aria-hidden": "true" }),
                                    (0, n.jsx)(g.E, { variant: "body-xs/normal", color: "text-muted", children: w }),
                                    k.length > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: lX.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(eF.A, { users: k, maxUsers: 5, size: eB._3.SIZE_16 }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    t.clips.length > 0 &&
                        null != x &&
                        (0, n.jsx)("div", {
                            className: lX.$s,
                            children: (0, n.jsx)(eq.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: tI.ShareIcon,
                                text: B.intl.string($.default.l34lLs),
                                onClick: p,
                            }),
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                ref: D,
                className: lX.Vg,
                ...q,
                tabIndex: -1,
                onKeyDown: Y,
                children: R.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: lX.UX,
                            ...z(t),
                            children: e.map((e, a) => {
                                let s = { width: T };
                                return (
                                    d && (s["--custom-entrance-delay"] = `${tA(u + t + a)}ms`),
                                    (0, n.jsx)(
                                        "div",
                                        {
                                            className: d ? tE.$ : void 0,
                                            style: s,
                                            children: (0, n.jsx)(tx, {
                                                clip: e,
                                                actionsDisabled: i,
                                                isNew: l.includes(e.id),
                                                onClick: o ?? r,
                                                onEdit: r,
                                                gridItemProps: F(a, t),
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
                    className: lX.Vc,
                    children: (0, n.jsx)(eq.$, {
                        variant: "secondary",
                        size: "sm",
                        text: B.intl.string($.default.pqk9U0),
                        onClick: N,
                    }),
                }),
        ],
    });
}
var lW = l(885574),
    lZ = l(253932),
    lJ = l(734066),
    l0 = l(947568);
function l1() {
    ek(ej.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING);
}
function l3() {
    let {
        visible: e,
        handleAllow: t,
        handleDontAllow: l,
    } = (function () {
        let e = (0, c.bG)([L.default], () => (0, lJ.qj)(L.default.getCurrentUser())),
            t = lZ.Q$.useSetting(),
            l = e && !1 === t && (0, P.o)("autoclips_ea:library_voice_banner"),
            [n, i] = (0, G.kn)(l ? [D.M.AUTOCLIPPING_EARLY_ACCESS_LIBRARY_VOICE_BANNER] : []);
        return {
            visible: null != n,
            handleAllow: a.useCallback(() => {
                (i(K.i.TAKE_ACTION),
                    (0, M.eQ)({ allowVoiceRecording: !0, analyticsLocation: N.A.CLIPS_EA_LIBRARY_VOICE_BANNER }));
            }, [i]),
            handleDontAllow: a.useCallback(() => {
                i(K.i.USER_DISMISS);
            }, [i]),
        };
    })();
    return e
        ? (0, n.jsxs)("div", {
              className: l0.v,
              children: [
                  (0, n.jsx)(lW.CircleInformationIcon, {
                      size: "xs",
                      color: eh.A.colors.ICON_FEEDBACK_INFO,
                      "aria-hidden": !0,
                  }),
                  (0, n.jsx)(g.E, {
                      variant: "body-sm/normal",
                      color: "text-strong",
                      className: l0.i,
                      children: B.intl.format($.default.m7PBif, { onDataPrivacyClick: l1 }),
                  }),
                  (0, n.jsxs)(lj.B, {
                      direction: "horizontal",
                      gap: 8,
                      fullWidth: !1,
                      children: [
                          (0, n.jsx)(eq.$, {
                              variant: "secondary",
                              size: "sm",
                              text: B.intl.string($.default.beB8BG),
                              onClick: l,
                          }),
                          (0, n.jsx)(eq.$, {
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
var l2 = l(799888);
let l9 = { no_clips: 604, no_auto_clips: 400 };
function l6(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: i, onClipClick: s, isLoading: r, onScroll: o } = e,
        d = (0, t$.H)(),
        u = a.useMemo(() => lf(t), [t]),
        m = d && u.length > 0,
        f = (0, c.yK)([_.Ay], () => _.Ay.getNewClipIds()),
        x = (0, c.bG)([_.Ay], () => _.Ay.getExportingClipIds().size > 0),
        g = (0, eP.P)((e) => e.setActiveMainLink),
        p = a.useCallback(() => {
            g(ea.oH.ALL_CLIPS);
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
        y = (0, c.bG)([A.Ay], () => A.Ay.useReducedMotion),
        v = a.useMemo(() => {
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
        N = a.useRef(null),
        E = a.useRef(null),
        k = a.useCallback(
            (e) => {
                let { scrollTop: t } = e.currentTarget;
                (N.current?.style.setProperty("--custom-clips-home-scroll-top", `${t}px`),
                    E.current?.style.setProperty("--custom-clips-home-scroll-top", `${t}px`),
                    o?.(t));
            },
            [o],
        ),
        I = j.length > 0 || m,
        S = (function (e) {
            let { hasContent: t, isLoading: l, totalClipCount: n, showCarousel: a } = e;
            return t ? (a ? "auto_clips" : "no_auto_clips") : l || n > 0 ? null : "no_clips";
        })({ hasContent: I, isLoading: r, totalClipCount: l, showCarousel: m }),
        L = (0, P.H)("autoclips_ea:clips_home_education", null != S) ? S : null,
        w = null != L ? l9[L] : void 0,
        M =
            null != w
                ? (0, n.jsx)(lu.h, {
                      ref: N,
                      color: "nitro-pink",
                      className: l2.zP,
                      style: { "--custom-clips-home-gradient-height": `${w}px` },
                      "aria-hidden": !0,
                  })
                : null;
    return I
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  M,
                  (0, n.jsx)(lm.Ch, {
                      className: l2.iR,
                      fade: !0,
                      onScroll: k,
                      children: (0, n.jsxs)("div", {
                          className: l2.Qs,
                          ref: C,
                          children: [
                              m &&
                                  (0, n.jsx)("div", {
                                      className: l2.Dk,
                                      children: (0, n.jsx)(lg, {
                                          clips: t,
                                          onEdit: i,
                                          onEdgeNavigate: b,
                                          showEducationCopy: "auto_clips" === L,
                                      }),
                                  }),
                              "no_auto_clips" === L &&
                                  (0, n.jsx)("div", { className: l2.Dk, children: (0, n.jsx)(lB, {}) }),
                              (0, n.jsx)(l3, {}),
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
                                                  lQ,
                                                  {
                                                      session: e,
                                                      recentClipIds: f,
                                                      actionsDisabled: x,
                                                      onEdit: i,
                                                      onClipClick: s,
                                                      animateEntrance: !y,
                                                      entranceRowOffset: v[t] ?? 0,
                                                      onEdgeNavigate: b,
                                                  },
                                                  e.id,
                                              ),
                                          ),
                                          (0, n.jsx)("div", {
                                              className: l2.dp,
                                              children: (0, n.jsx)(eq.$, {
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
          ? (0, n.jsx)("div", { className: l2.dc, children: (0, n.jsx)(es.y, {}) })
          : "no_clips" === L
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      M,
                      (0, n.jsx)(lK, { ref: E }),
                      (0, n.jsx)(lm.Ch, {
                          className: l2.iR,
                          fade: !0,
                          onScroll: k,
                          children: (0, n.jsx)("div", {
                              className: l2.Qs,
                              children: (0, n.jsx)("div", { className: l2.Dk, children: (0, n.jsx)(l$, {}) }),
                          }),
                      }),
                  ],
              })
            : (0, n.jsx)(eO, { isEmptyBecauseQuery: l > 0 });
}
var l7 = l(837381),
    l4 = l(741918),
    l5 = l(812993),
    l8 = l(332837),
    ne = l(95362),
    nt = l(625903),
    nl = l(260762),
    nn = l(599428);
function na(e) {
    let { itemId: t, icon: l, label: a, onClick: i, isSelected: r = !1, isDisabled: o = !1, badgeCount: c = 0 } = e,
        d = o && !r,
        u = (0, l7.rm)(t);
    return (0, n.jsx)(p.m, {
        text: a,
        position: "right",
        children: (0, n.jsxs)(eV.D, {
            ...u,
            role: "button",
            onClick: d ? void 0 : i,
            "aria-pressed": r,
            "aria-disabled": d,
            "aria-label": a,
            className: s()(nn.AY, { [nn.Hy]: r, [nn.Is]: d }),
            children: [l, c > 0 && (0, n.jsx)("span", { className: nn.e, children: (0, n.jsx)(l5.hV, { count: c }) })],
        }),
    });
}
function ni(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: i } = e,
        r = (0, eP.P)((e) => e.activeMainLink),
        o = (0, eP.P)((e) => e.gameFacet),
        c = (0, eP.P)((e) => e.clippedWithFacet),
        d = (0, eP.P)((e) => e.setActiveMainLink),
        u = (0, eP.P)((e) => e.setGameFacet),
        m = (0, eP.P)((e) => e.setClippedWithFacet),
        h = (0, eP.P)((e) => e.clearFilters),
        f = (0, eP.P)((e) => e.setPendingContentFocus),
        x = (0, t$.H)(),
        g = null != o || null != c;
    function p(e) {
        return !g && r === e;
    }
    let j = a.useRef(!1),
        y = a.useCallback(() => {
            j.current && f(!0);
        }, [f]),
        v = a.useCallback(
            (e) => {
                (d(e), u(null), m(null), h(), y());
            },
            [d, u, m, h, y],
        ),
        C = a.useCallback(
            (e) => {
                (u(o === e ? null : e), m(null), d(ea.oH.ALL_CLIPS), h(), y());
            },
            [o, u, m, d, h, y],
        ),
        b = a.useCallback(() => {
            ek(ej.X.CLIPS_PANEL);
        }, []),
        A = a.useMemo(() => t.map((e) => e.key), [t]),
        N = (0, I.A)(A),
        E = a.useMemo(() => new Map(N.map((e) => [e?.id, e])), [N]),
        k = (0, eo.GV)(),
        L = (0, nl.A)(k),
        { setFocus: w } = L,
        _ = o ?? r;
    a.useEffect(() => {
        w(_);
    }, [w, _]);
    let { ref: P, onKeyDown: M, ...D } = (0, l7.LT)(L),
        T = a.useCallback(
            (e) => {
                j.current = e.key === l4.D$.ENTER || e.key === l4.D$.SPACE;
                try {
                    M(e);
                } finally {
                    j.current = !1;
                }
            },
            [M],
        );
    return (0, n.jsx)(l7.hD, {
        navigator: L,
        children: (0, n.jsxs)("div", {
            className: nn.H$,
            ...D,
            tabIndex: -1,
            onKeyDown: T,
            ref: P,
            children: [
                (0, n.jsxs)("div", {
                    className: s()(nn.o3, nn.A9),
                    children: [
                        (0, n.jsx)(na, {
                            itemId: ea.oH.HOME,
                            icon: (0, n.jsx)(l8.HomeIcon, { size: "sm", color: "currentColor" }),
                            label: B.intl.string($.default.iVqj8B),
                            isSelected: p(ea.oH.HOME),
                            onClick: () => v(ea.oH.HOME),
                        }),
                        (0, n.jsx)(na, {
                            itemId: ea.oH.ALL_CLIPS,
                            icon: (0, n.jsx)(O.ClipsIcon, { size: "sm", color: "currentColor" }),
                            label: B.intl.string(B.t.dPVrEv),
                            isSelected: p(ea.oH.ALL_CLIPS),
                            isDisabled: 0 === l.allClips,
                            badgeCount: i.allClips,
                            onClick: () => v(ea.oH.ALL_CLIPS),
                        }),
                        x &&
                            (0, n.jsx)(na, {
                                itemId: ea.oH.AUTO_CLIPS,
                                icon: (0, n.jsx)(H.ClipsAutoIcon, { size: "sm", color: "currentColor" }),
                                label: B.intl.string($.default.ikNKf1),
                                isSelected: p(ea.oH.AUTO_CLIPS),
                                isDisabled: 0 === l.autoClips,
                                badgeCount: i.autoClips,
                                onClick: () => v(ea.oH.AUTO_CLIPS),
                            }),
                        (0, n.jsx)(na, {
                            itemId: ea.oH.FAVORITES,
                            icon: (0, n.jsx)(tL.StarIcon, { size: "sm", color: "currentColor" }),
                            label: B.intl.string(B.t["9rlCk1"]),
                            isSelected: p(ea.oH.FAVORITES),
                            isDisabled: 0 === l.favorites,
                            onClick: () => v(ea.oH.FAVORITES),
                        }),
                    ],
                }),
                t.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { className: nn.Gz }),
                            (0, n.jsx)(ne.Ip, {
                                className: s()(nn.UZ, nn.A9),
                                fade: !0,
                                children: t.map((e) => {
                                    let t = o === e.key;
                                    return (0, n.jsx)(
                                        na,
                                        {
                                            itemId: e.key,
                                            icon: (0, n.jsx)(S.A, {
                                                game: E.get(e.key),
                                                size: S.M.SMALL,
                                                className: nn.az,
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
                    className: s()(nn.Ms, nn.A9),
                    children: (0, n.jsx)(na, {
                        itemId: "settings",
                        icon: (0, n.jsx)(nt.SettingsIcon, { size: "sm", color: "currentColor" }),
                        label: B.intl.string(B.t["3D5yo/"]),
                        onClick: b,
                    }),
                }),
            ],
        }),
    });
}
var ns = l(267102),
    nr = l(712687),
    no = l(188567),
    nc = l(409067),
    nd = l(314484);
function nu(e) {
    var t, i, D;
    let T,
        R,
        O,
        {
            channelId: H,
            onClose: U,
            picker: G,
            transitionState: F,
            initialEditingClipId: z,
            initialMainLink: V = ea.oH.HOME,
            ...K
        } = e;
    (0, en.A)();
    let { analyticsLocations: q } = (0, E.Ay)(N.A.CLIPS_GALLERY),
        Y = G?.onPick,
        X = (0, P.H)("autoclips_ea:library_mode_selector", null == G),
        Q = G?.allowMultiSelect ?? !0,
        [ei, es] = a.useState(new Set()),
        er = a.useRef(null),
        eo = (0, b.A)((e) => {
            let t = er.current;
            if (null == t) return;
            let l = Math.min(1, Math.max(0, e) / 40);
            t.style.setProperty("--custom-clips-header-solid-opacity", `${l}`);
        }),
        {
            gamesFacet: ec,
            participantsFacet: ed,
            filteredClips: eu,
            mainLinkCounts: em,
            mainLinkNewCounts: eh,
            allClips: ef,
        } = (0, nc.ad)(G?.filterClip),
        ex = (0, c.bG)([_.Ay], () => _.Ay.getSettings().storageLocation),
        [eg, ep] = a.useState(!0);
    a.useEffect(() => {
        (async function () {
            ep(!0);
            try {
                await (0, M.Fb)(ex);
            } finally {
                ep(!1);
            }
        })().catch(() => {});
    }, [ex]);
    let { onShareClick: ej } = (0, el.A)(H);
    (a.useEffect(
        () => () => {
            (eP.P.getState().resetAll(), (0, M.Su)());
        },
        [],
    ),
        a.useEffect(() => {
            let e = eP.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink(V);
        }, [V]),
        (0, o.l0)(M._o));
    let ey = (0, c.bG)([_.Ay], () => _.Ay.getExportingClipIds().size > 0),
        ev = (0, c.bG)([_.Ay], () => Array.from(ei).some((e) => _.Ay.isClipExporting(e)), [ei]),
        [eC, eb] = a.useState(null != z ? "editing" : "gallery"),
        [eA, eN] = a.useState(z ?? null),
        ek = (0, c.bG)([_.Ay], () => (null != eA ? _.Ay.getClipById(eA) : null), [eA]),
        eI = (0, d.LA)(eE.nm),
        [eS, eL] = a.useState(!1);
    ((t = a.useCallback(() => eL(!0), [])),
        (i = eI && "gallery" === eC && !eS),
        (T = a.useRef(Array(tT.length).fill(""))),
        (R = a.useRef(0)),
        (O = a.useRef(t)),
        a.useEffect(() => {
            O.current = t;
        }, [t]),
        a.useEffect(() => {
            if (!i) return;
            let e = T.current;
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
                    ((e[R.current] = t.key.toLowerCase()), (R.current = (R.current + 1) % tT.length));
                    for (let t = 0; t < tT.length; t++) if (e[(R.current + t) % tT.length] !== tT[t]) return;
                    O.current();
                }
            }
            return (
                document.addEventListener("keydown", t, { capture: !0, passive: !0 }),
                () => {
                    (document.removeEventListener("keydown", t, { capture: !0 }), e.fill(""), (R.current = 0));
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
    let ew = a.useRef(eC);
    ((ew.current = eC), (a.useRef(eA).current = eA));
    let [e_, eD] = a.useState(null != z ? m.ip.ENTERED : m.ip.HIDDEN),
        eT = a.useRef(null),
        eR = (0, eP.P)((e) => e.gameFacet),
        eO = (0, eP.P)((e) => e.clippedWithFacet),
        eH = (0, eP.P)((e) => e.activeMainLink),
        eU = (0, eP.P)((e) => e.currentPage),
        eG = eU === ea.fB.HOME,
        { ref: eF, height: ez = 64 } = (0, C.Ay)(eU),
        eV = 68 + ez,
        eK = eG ? 68 : eV - 16;
    a.useLayoutEffect(() => {
        eo(0);
    }, [eU, eo]);
    let e$ = (0, eP.P)((e) => e.pendingContentFocus),
        eB = (0, eP.P)((e) => e.setPendingContentFocus),
        eq = a.useRef(null);
    a.useEffect(() => {
        if (!e$) return;
        let e = 0,
            t = 0;
        return (
            (t = requestAnimationFrame(function l() {
                let n = eq.current?.querySelector('[role="grid"] [role="button"]');
                if (null != n) {
                    (n.focus(), eB(!1));
                    return;
                }
                if (e++ < 10) {
                    t = requestAnimationFrame(l);
                    return;
                }
                eB(!1);
            })),
            () => cancelAnimationFrame(t)
        );
    }, [e$, eB]);
    let eY = (0, eP.P)(
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
        eH === ea.oH.HOME && eY && eP.P.getState().setActiveMainLink(ea.oH.ALL_CLIPS);
    }, [eH, eY]);
    let eX = a.useMemo(() => (null != eR ? [eR] : []), [eR]),
        eQ = (0, I.A)(eX)[0] ?? null,
        eW = (0, c.bG)([L.default], () => (null != eO ? L.default.getUser(eO) : null), [eO]),
        eZ = a.useMemo(() => {
            if (null != eR) return ec.find((e) => e.key === eR)?.name ?? B.intl.string(B.t.dPVrEv);
            if (null != eO) return null != eW ? (eW.globalName ?? eW.username) : eO;
            switch (eH) {
                case ea.oH.FAVORITES:
                    return B.intl.string(B.t["9rlCk1"]);
                case ea.oH.AUTO_CLIPS:
                    return B.intl.string($.default.ikNKf1);
                case ea.oH.HOME:
                    return B.intl.string($.default.iVqj8B);
                default:
                    return B.intl.string(B.t.dPVrEv);
            }
        }, [eR, eO, eH, ec, eW]),
        eJ = a.useMemo(() => {
            if (null != eR) return ec.find((e) => e.key === eR)?.count ?? 0;
            if (null != eO) return ed.find((e) => e.key === eO)?.count ?? 0;
            switch (eH) {
                case ea.oH.HOME:
                    return null;
                case ea.oH.AUTO_CLIPS:
                    return em.autoClips;
                case ea.oH.FAVORITES:
                    return em.favorites;
                default:
                    return em.allClips;
            }
        }, [eR, eO, eH, ec, ed, em]),
        e0 = a.useCallback(() => {
            (eb("editing"), A.Ay.useReducedMotion && eD(m.ip.ENTERED));
        }, []),
        e1 = a.useCallback((e) => {
            es((t) => {
                let l = new Set(t);
                return (l.has(e) ? l.delete(e) : l.add(e), l);
            });
        }, []),
        e3 = a.useCallback(
            (e) => {
                (eN(e.id), e0());
            },
            [e0],
        ),
        e2 = a.useRef(null != z),
        e9 = a.useCallback(() => {
            ((e2.current = !1), A.Ay.useReducedMotion && eN(null), eb("gallery"));
        }, []),
        e6 = a.useCallback(() => {
            e2.current ? U() : e9();
        }, [e9, U]);
    (a.useEffect(() => {
        "editing" === eC && null == ek && e6();
    }, [eC, ek, e6]),
        (D = "editing" === eC && eI),
        a.useEffect(() => {
            if (D) return (document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e));
            function e(e) {
                "Escape" !== e.key ||
                    no._.hasSubscribers(eM.jej.CALL_DECLINE) ||
                    nr.A.isOpen() ||
                    ((0, ns.wp)(e)?.hasSubscribers(eM.jej.POPOUT_CLOSE) !== !0 && (e.stopPropagation(), e6()));
            }
        }, [D, e6]),
        a.useEffect(() => {
            function e(e) {
                if (
                    ("f" !== e.key && "F" !== e.key) ||
                    e.altKey ||
                    e.shiftKey ||
                    ((0, w.cX)() ? !e.metaKey || e.ctrlKey : !e.ctrlKey || e.metaKey) ||
                    !eI ||
                    "gallery" !== ew.current
                )
                    return;
                (e.preventDefault(), e.stopPropagation());
                let t = eP.P.getState();
                (t.currentPage === ea.fB.HOME && t.setActiveMainLink(ea.oH.ALL_CLIPS), t.setPendingSearchFocus(!0));
            }
            return (document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0));
        }, [eI]),
        a.useEffect(
            () =>
                "editing" === eC && null != eA
                    ? void (0, M.YK)(eA)
                    : ((0, M.TE)(),
                      () => {
                          (0, M.TE)();
                      }),
            [eC, eA],
        ));
    let e7 = a.useCallback(() => {
            es(new Set());
        }, []),
        e4 = ei.size > 0,
        e5 = a.useCallback(() => {
            let e = ef.filter((e) => ei.has(e.id));
            (0, d.mM)(
                async () => {
                    let { default: t } = await l.e(913367).then(l.bind(l, 223818));
                    return (l) =>
                        (0, n.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                (e7(), l.onClose());
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [ef, ei, e7]),
        e8 = a.useCallback(async () => {
            let e = ef.filter((e) => ei.has(e.id));
            await ej({ clips: e, onShared: e7 });
        }, [ef, ei, ej, e7]),
        te = a.useCallback(
            async (e) => {
                0 !== e.length && (es(new Set(e.map((e) => e.id))), await ej({ clips: e }), e7());
            },
            [ej, e7],
        ),
        tt = a.useCallback(() => {
            let e = eP.P.getState();
            (e.setGameFacet(null),
                e.setClippedWithFacet(null),
                e.setActiveMainLink(ea.oH.ALL_CLIPS),
                e.setPendingSearchFocus(!0));
        }, []),
        tl = a.useMemo(() => {
            let e = ef.filter((e) => ei.has(e.id));
            return e.length > 0 && e.every((e) => e.isFavorite);
        }, [ef, ei]),
        tn = a.useCallback(async () => {
            let e = ef.filter((e) => ei.has(e.id)),
                t = !tl;
            (await Promise.all(e.filter((e) => e.isFavorite !== t).map((e) => (0, M.Yy)(e.id, { isFavorite: t }, !0))),
                e7());
        }, [ef, ei, tl, e7]),
        ta = a.useMemo(() => {
            let e = 0,
                t = 0,
                l = 0;
            return (
                ef.forEach((n) => {
                    switch (n.decision?.signal?.type) {
                        case eE.Gy.MANUAL:
                            l++;
                            break;
                        case eE.Gy.DISTRIBUTED:
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
                    gallery_page: eH,
                }
            );
        }, [ef, eH]);
    (0, k.A)(
        { type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.CLIP_GALLERY_VIEWED, properties: ta },
        { disableTrack: eg },
        [ta, eg],
    );
    let ti = a.useMemo(
        () => ({
            selectedClipIds: ei,
            toggleClipSelection: e1,
            clearSelection: e7,
            isMultiSelectMode: e4,
            picker: G,
            onShareSession: Q ? te : void 0,
        }),
        [ei, e1, e7, e4, G, Q, te],
    );
    return (0, n.jsx)(E.f5, {
        value: q,
        children: (0, n.jsx)(tm.$.Provider, {
            value: ti,
            children: (0, n.jsx)(u.N, {
                onClose: U,
                transitionState: F,
                "aria-label": eS ? "Doggo Game" : void 0,
                ...K,
                children: eS
                    ? (0, n.jsx)(tD, { onClose: U })
                    : (0, n.jsxs)("div", {
                          className: nd.jT,
                          ref: eT,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: s()(nd.PD, "gallery" === eC && nd.vu),
                                  inert: "gallery" !== eC,
                                  children: [
                                      (0, n.jsx)(ni, { gamesFacet: ec, mainLinkCounts: em, mainLinkNewCounts: eh }),
                                      (0, n.jsxs)("div", {
                                          className: nd.Qs,
                                          ref: eq,
                                          style: {
                                              "--custom-clips-header-height": "68px",
                                              "--custom-clips-scroll-inset": `${eK}px`,
                                          },
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  ref: er,
                                                  className: s()(nd.$Q, !eG && nd.iF),
                                                  children: [
                                                      (0, n.jsxs)("div", {
                                                          className: nd.ev,
                                                          children: [
                                                              null != eR &&
                                                                  (0, n.jsx)(S.A, {
                                                                      game: eQ,
                                                                      size: S.M.SMALL,
                                                                      className: nd.Ve,
                                                                      "aria-hidden": !0,
                                                                  }),
                                                              (0, n.jsx)(h.D, {
                                                                  variant: "heading-sm/semibold",
                                                                  color: "text-default",
                                                                  className: nd.Yn,
                                                                  children: eZ,
                                                              }),
                                                              null == eR &&
                                                                  null == eO &&
                                                                  (eH === ea.oH.AUTO_CLIPS ||
                                                                      (X && eH === ea.oH.HOME)) &&
                                                                  (0, n.jsx)(f.E, {
                                                                      icon: x.NitroWheelIcon,
                                                                      type: "early_access",
                                                                      variant: "expressive",
                                                                  }),
                                                              null != eJ &&
                                                                  !eY &&
                                                                  (0, n.jsxs)("div", {
                                                                      className: nd.Vl,
                                                                      children: [
                                                                          (0, n.jsx)("span", {
                                                                              className: nd.FK,
                                                                              "aria-hidden": "true",
                                                                          }),
                                                                          (0, n.jsx)(g.E, {
                                                                              variant: "body-md/normal",
                                                                              color: "text-muted",
                                                                              children: B.intl.format(
                                                                                  $.default["+YIqQM"],
                                                                                  { count: eJ },
                                                                              ),
                                                                          }),
                                                                      ],
                                                                  }),
                                                          ],
                                                      }),
                                                      (0, n.jsxs)("div", {
                                                          className: nd.o5,
                                                          children: [
                                                              X &&
                                                                  (0, n.jsx)(W, {
                                                                      showOffEducation: "gallery" === eC && eI,
                                                                  }),
                                                              (0, n.jsxs)("div", {
                                                                  className: nd.$s,
                                                                  children: [
                                                                      (0, n.jsx)(p.m, {
                                                                          position: "bottom",
                                                                          text: B.intl.string(B.t["5h0QOP"]),
                                                                          children: (0, n.jsx)(j.K, {
                                                                              onClick: tt,
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
                                                                              onClick: U,
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
                                              eG
                                                  ? (0, n.jsx)(l6, {
                                                        filteredClips: eu,
                                                        totalClipCount: ef.length,
                                                        onEdit: e3,
                                                        onClipClick: Y,
                                                        isLoading: eg,
                                                        onScroll: eo,
                                                    })
                                                  : (0, n.jsxs)("div", {
                                                        className: nd.LG,
                                                        children: [
                                                            (0, n.jsx)("div", {
                                                                className: nd.oP,
                                                                ref: eF,
                                                                children: (0, n.jsx)(lc, {
                                                                    allClips: ef,
                                                                    gamesFacet: ec,
                                                                    participantsFacet: ed,
                                                                }),
                                                            }),
                                                            (0, n.jsx)(tk, {
                                                                onEdit: e3,
                                                                channelId: H,
                                                                filteredClips: eu,
                                                                totalClipCount: ef.length,
                                                                onClipClick: Y,
                                                                isLoading: eg,
                                                                topInset: eV,
                                                            }),
                                                        ],
                                                    }),
                                              Q &&
                                                  e4 &&
                                                  (0, n.jsx)(tP, {
                                                      selectedCount: ei.size,
                                                      allSelectedFavorited: tl,
                                                      onClear: e7,
                                                      onFavorite: tn,
                                                      onDelete: e5,
                                                      onShare: e8,
                                                      isSharing: ey,
                                                      actionsDisabled: ev,
                                                  }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, n.jsx)("div", {
                                  className: s()(nd.jN, "editing" === eC && nd.vu),
                                  inert: "editing" !== eC,
                                  onTransitionEnd: () => {
                                      switch (eC) {
                                          case "gallery":
                                              (eN(null), eD(m.ip.HIDDEN));
                                              break;
                                          case "editing":
                                              eD(m.ip.ENTERED);
                                      }
                                  },
                                  children:
                                      null != ek &&
                                      (0, n.jsx)(Z.p, {
                                          clip: ek,
                                          modalContainerRef: eT,
                                          children: (0, n.jsxs)(
                                              et.JQ,
                                              {
                                                  children: [
                                                      (0, n.jsx)(ee.A, {
                                                          transitionState: e_,
                                                          onClose: e6,
                                                          onBack: e9,
                                                      }),
                                                      (0, n.jsx)(J.A, { channelId: H, onClose: e6, onExit: U }),
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
