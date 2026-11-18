l.d(t, { default: () => l7 });
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
    f = l(534514),
    h = l(805251),
    x = l(403581),
    g = l(834730),
    p = l(866665),
    j = l(408278),
    y = l(7689),
    v = l(972213),
    b = l(765671),
    C = l(765548),
    N = l(775602),
    k = l(793574),
    A = l(688810),
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
    H = l(176781),
    G = l(650684),
    U = l(559106),
    O = l(263775),
    F = l(707116),
    z = l(464132),
    K = l(270607),
    V = l(49999),
    $ = l(683825),
    B = l(792996),
    q = l(829766);
let Y = [
    { mode: "off", icon: R.DenyIcon },
    { mode: "manual", icon: H.ClipsIcon },
    { mode: "auto", icon: G.ClipsAutoIcon },
];
function X(e) {
    let { targetElementRef: t } = e,
        [l, a] = (0, O.kn)([_.M.AUTOCLIPPING_EARLY_ACCESS_LIBRARY_EDUCATION_POPOVER], { bypassAutoDismiss: !0 });
    return l !== _.M.AUTOCLIPPING_EARLY_ACCESS_LIBRARY_EDUCATION_POPOVER
        ? null
        : (0, n.jsx)(T.A, {
              targetElementRef: t,
              position: "bottom",
              alignmentStrategy: "trigger-center",
              title: B.intl.string($.default.yriD3v),
              body: B.intl.string($.default.UBihuW),
              onRequestClose: () => a(V.i.USER_DISMISS),
              actions: [
                  { text: B.intl.string(B.t["NX+WJN"]), variant: "secondary", onClick: () => a(V.i.TAKE_ACTION) },
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
        { value: l, onChange: i } = (0, z.U)(),
        { isLocked: s, openRoadblock: r } = (0, K.B)("ClipsCaptureModeSelector"),
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
                        f = null != m && m !== l && r !== l;
                    return (0, n.jsxs)(
                        a.Fragment,
                        {
                            children: [
                                f && (0, n.jsx)("div", { className: q.yF, "aria-hidden": !0 }),
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
    J = l(701266),
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
var eu = l(572164),
    em = l(953932),
    ef = l(687966),
    eh = l(783977),
    ex = l(780964),
    eg = l(766075),
    ep = l(90163);
function ej() {
    (0, eg.openUserSettings)(ex.X.CLIPS_PANEL);
}
function ey(e) {
    let { icon: t, title: l, body: a } = e;
    return (0, n.jsxs)("div", {
        className: ep.Lw,
        children: [
            (0, n.jsx)(t, { size: "custom", width: 20, height: 20, color: "currentColor", "aria-hidden": !0 }),
            (0, n.jsxs)("div", {
                className: ep.ET,
                children: [
                    (0, n.jsx)(g.E, { variant: "body-md/medium", color: "text-default", children: B.intl.string(l) }),
                    (0, n.jsx)(g.E, { variant: "body-sm/normal", color: "text-muted", children: a }),
                ],
            }),
        ],
    });
}
function ev(e) {
    let { className: t } = e;
    return (0, n.jsxs)("div", {
        className: s()(ep.Mh, t),
        children: [
            (0, n.jsx)(ey, {
                icon: G.ClipsAutoIcon,
                title: $.default["0+BIHX"],
                body: B.intl.string($.default["tCTA+W"]),
            }),
            (0, n.jsx)(ey, {
                icon: ef.GameControllerIcon,
                title: $.default["x/w6AN"],
                body: B.intl.string($.default.D4abD6),
            }),
            (0, n.jsx)(ey, {
                icon: eh.FiltersHorizontalIcon,
                title: $.default.EA8ENs,
                body: B.intl.format($.default.PvfGzE, { onClipsSettingsClick: ej }),
            }),
        ],
    });
}
var eb = l(792852),
    eC = l(71967);
function eN(e) {
    let { isEmptyBecauseQuery: t } = e,
        l = (0, eu.E)(),
        i = (0, M.H)("ClipsGalleryEmptyState"),
        { onChange: s } = (0, z.U)(),
        r = a.useCallback(() => s("manual"), [s]);
    return (0, eb.P)((e) => e.activeMainLink === ea.oH.FAVORITES && null == e.gameFacet && null == e.clippedWithFacet)
        ? (0, n.jsx)("div", {
              className: eC.kL,
              children: (0, n.jsx)(f.D, {
                  variant: "heading-xl/semibold",
                  children: B.intl.string($.default["+M2iLf"]),
              }),
          })
        : (0, n.jsx)("div", {
              className: eC.kL,
              children: (0, n.jsxs)("div", {
                  className: eC.Qs,
                  children: [
                      (0, n.jsx)(ed, { width: 213, height: 135, alt: "" }),
                      (0, n.jsx)(f.D, {
                          className: eC.wx,
                          variant: "heading-xl/semibold",
                          children: t ? B.intl.string($.default["+M2iLf"]) : B.intl.string($.default.m2GEpP),
                      }),
                      t &&
                          (0, n.jsx)(g.E, {
                              className: eC.h_,
                              variant: "body-md/medium",
                              children: B.intl.string($.default.xkY5xS),
                          }),
                      !l &&
                          (0, n.jsx)("div", {
                              className: eC.SO,
                              children: (0, n.jsx)(em.A, { onEnableClips: i ? r : void 0 }),
                          }),
                      l && !t && (0, n.jsx)(ev, { className: eC.Mh }),
                  ],
              }),
          });
}
let ek = 4 / 3;
var eA = l(621466),
    eE = l(61491),
    eI = l(342952),
    eS = l(890856),
    ew = l(939249),
    eP = l(820081),
    eL = l(365199),
    eM = l(778712),
    eD = l(821609),
    e_ = l(22231),
    eT = l(983851),
    eR = l(31300),
    eH = l(442433),
    eG = l(587895),
    eU = l(927813),
    eO = l(995273);
function eF(e) {
    let { timestamp: t, abbreviated: l = !0 } = e,
        [n, i] = a.useState(() => (0, eO.jb)(t, l));
    return (
        a.useEffect(() => {
            i((0, eO.jb)(t, l));
            let e = Date.now() - t;
            if (e > eU.A.Millis.DAY) return;
            let n = e >= eU.A.Millis.HOUR ? eU.A.Millis.HOUR : eU.A.Millis.MINUTE,
                a = setInterval(
                    () => {
                        i((0, eO.jb)(t, l));
                    },
                    n,
                    n - (e % n),
                );
            return () => clearInterval(a);
        }, [t, l]),
        n
    );
}
var ez = l(549685),
    eK = l(129230),
    eV = l(403362),
    e$ = l(53677),
    eB = l(609174),
    eq = l(151184),
    eY = l(82716),
    eX = l(449397),
    eQ = l(399053),
    eW = l(285072),
    eZ = l(284009),
    eJ = l.n(eZ),
    e0 = l(460905),
    e1 = l(443184),
    e3 = l(696016),
    e2 = l(153511);
function e9(e) {
    let { clip: t } = e,
        l = t.decision?.signal;
    eJ()(l?.type === e3.Gy.DISTRIBUTED, "Clip must be a distributed clip");
    let a = (0, c.bG)([w.default], () => w.default.getUser(l.remoteTriggerUserId));
    if (null == a) return null;
    let i = a.globalName ?? a.username;
    return (0, n.jsx)(p.m, {
        text: B.intl.string($.default.vTTkFF),
        children: (0, n.jsxs)("div", {
            className: e2.S,
            children: [
                (0, n.jsx)("img", { src: a.getAvatarURL(null, 12, !1), className: e2.$, alt: i }),
                (0, n.jsx)(g.E, {
                    color: "text-overlay-light",
                    variant: "body-xs/medium",
                    children: B.intl.formatToPlainString($.default.QJ7i8Z, { username: i }),
                }),
            ],
        }),
    });
}
function e6(e) {
    let { icon: t, text: l, ref: a, ...i } = e;
    return (0, n.jsxs)("div", {
        ...i,
        ref: a,
        className: e2.S,
        children: [
            (0, n.jsx)(t, { size: "xxs", color: "currentColor" }),
            (0, n.jsx)(g.E, { color: "text-overlay-light", variant: "body-xs/medium", children: l }),
        ],
    });
}
function e4(e) {
    let { icon: t, text: l, tooltipText: a } = e;
    return (0, n.jsx)(p.m, { text: a, children: (0, n.jsx)(e6, { icon: t, text: l }) });
}
function e8(e) {
    let { clip: t } = e;
    if (t.decision?.signal?.type == null || t.decision?.signal?.type === e3.Gy.MANUAL) return null;
    switch (t.decision?.signal?.type) {
        case e3.Gy.DISTRIBUTED:
            return (0, n.jsx)(e9, { clip: t });
        case e3.Gy.LAUGHTER:
            return (0, n.jsx)(e4, {
                icon: e0.ReactionIcon,
                text: B.intl.string($.default.bTC23D),
                tooltipText: B.intl.string($.default["ry+jxm"]),
            });
        case e3.Gy.SHOUTING:
            return (0, n.jsx)(e4, {
                icon: e0.ReactionIcon,
                text: B.intl.string($.default["3gqpuo"]),
                tooltipText: B.intl.string($.default["ry+jxm"]),
            });
        case e3.Gy.GAME_EVENT: {
            let e = (0, e1.u6)(t.applicationId, e3.Gy.GAME_EVENT, t.decision.signal.eventName);
            if (null == e) return null;
            return (0, n.jsx)(e4, {
                icon: e,
                text: (0, e1.PZ)(t.applicationId, e3.Gy.GAME_EVENT, t.decision.signal.eventName) ?? "",
                tooltipText: B.intl.string($.default["347DBb"]),
            });
        }
        default:
            return null;
    }
}
var e7 = l(718812),
    e5 = l(721610),
    te = l(686320),
    tt = l(652215),
    tl = l(175764);
function tn(e) {
    let { clip: t, actionsDisabled: l, isNew: a, onClick: i, onEdit: s, gridItemProps: r } = e;
    return (0, n.jsx)(eB.Cl, {
        clip: t,
        children: (0, n.jsx)(ta, { actionsDisabled: l, isNew: a, onClick: i, onEdit: s, gridItemProps: r }),
    });
}
function ta(e) {
    let { actionsDisabled: t, isNew: i, onClick: r, onEdit: o, gridItemProps: d } = e,
        u = (0, eB.Y_)(),
        m = !0 === u.pending,
        f = t || m,
        { analyticsLocations: h } = (0, A.Ay)(k.A.CLIPS_GALLERY_ITEM),
        { selectedClipIds: x, toggleClipSelection: g, isMultiSelectMode: p, picker: j } = a.useContext(e5.$),
        y = j?.allowMultiSelect ?? !0,
        v = null != j ? (0, te.$)(j.action).label : void 0,
        [b, C] = a.useState(!1),
        [E, I] = a.useState(!1),
        [S, w] = a.useState(!1),
        [P, M] = a.useState(!1),
        [D, _] = a.useState(0),
        T = x.has(u.id),
        R = u.type === e3.nQ.SCREENSHOT,
        H = "auto" === u.clipMethod,
        G = (0, c.bG)([N.Ay], () => N.Ay.keyboardModeEnabled),
        U = (E || b || (S && G)) && !T,
        O = a.useCallback(() => w(!0), []),
        F = a.useCallback((e) => {
            e.currentTarget.contains(e.relatedTarget) || w(!1);
        }, []);
    a.useEffect(() => {
        if (!U || R || m) return;
        let e = window.setTimeout(() => M(!0), 150);
        return () => {
            (window.clearTimeout(e), M(!1));
        };
    }, [U, R, m]);
    let z = a.useRef(null),
        K = a.useCallback(() => {
            z.current?.releaseSource();
        }, []),
        V = a.useCallback((e) => {
            z.current?.seek(e);
        }, []),
        $ = a.useCallback(() => C(!1), []),
        q = a.useCallback(
            (e) => {
                (e.preventDefault(), e.stopPropagation(), g(u.id));
            },
            [g, u.id],
        ),
        Y = a.useCallback(
            (e) => {
                C(!0);
                let t =
                    p && x.size > 0
                        ? Array.from(x)
                              .map((e) => L.Ay.getClipById(e))
                              .filter(eV.Vq)
                        : [u];
                (0, eH.L3)(
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
                                onMainAction: null != j ? () => j.onPick(u) : void 0,
                                mainAction: j?.action,
                                onShare: () => {
                                    eK.default.track(tt.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "share",
                                        ...e$.lc(),
                                        ...e$.Zy(u),
                                    });
                                },
                                onEdit: () => {
                                    (o(u),
                                        eK.default.track(tt.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                            type: "edit",
                                            ...e$.lc(),
                                            ...e$.Zy(u),
                                        }));
                                },
                                onBeforeDelete: K,
                                onAfterDelete: () => {
                                    eK.default.track(tt.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, {
                                        type: "delete",
                                        ...e$.lc(),
                                        ...e$.Zy(u),
                                    });
                                },
                            });
                    },
                    { onClose: $ },
                );
            },
            [u, p, x, f, $, o, K, j, h],
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
                    o(u),
                    eK.default.track(tt.HAw.CLIP_GALLERY_CARD_BUTTON_CLICKED, { type: "edit" }));
            },
            [o, u],
        ),
        Z = a.useCallback(
            (e) => {
                !f &&
                    (!(0, eA.vq)(e.target, Element) ||
                        (null == e.target.closest("[data-clips-avatars]") &&
                            null == e.target.closest("[data-clips-progress]") &&
                            null == e.target.closest("[data-clips-select]") &&
                            e.currentTarget.contains(e.target))) &&
                    (y && e.shiftKey ? (e.preventDefault(), g(u.id)) : y && p ? g(u.id) : null != r && r(u),
                    eK.default.track(tt.HAw.CLIP_GALLERY_CARD_CLICKED, { ...e$.lc(), ...e$.Zy(u) }));
            },
            [f, y, p, g, u, r],
        );
    return (0, n.jsx)(A.f5, {
        value: h,
        children: (0, n.jsx)("div", {
            className: tl.hl,
            onFocus: O,
            onBlur: F,
            children: (0, n.jsx)(eS.s, {
                "aria-disabled": f,
                "aria-label": v ?? B.intl.string(R ? B.t["HO/oXl"] : B.t.bt75uw),
                onClick: f ? void 0 : Z,
                onContextMenu: X,
                buttonProps: null != d ? { role: "button", id: d.id, tabIndex: d.tabIndex } : void 0,
                buttonRef: d?.ref,
                onFocus: d?.onFocus,
                className: s()(tl.Nr, { [tl.r9]: f, [tl.in]: b, [tl.wH]: T }),
                onMouseEnter: () => I(!0),
                onMouseLeave: () => I(!1),
                children: (0, n.jsx)("div", {
                    className: tl.w7,
                    children: (0, n.jsxs)(ti, {
                        ref: z,
                        isPlaying: P,
                        onProgressChange: _,
                        children: [
                            m && (0, n.jsx)("div", { className: tl.mi, children: (0, n.jsx)(es.y, {}) }),
                            (0, n.jsx)("div", {
                                className: s()(tl.w$, { [tl.t7]: U, [tl.Vg]: H }),
                                inert: !0,
                                "aria-hidden": "true",
                            }),
                            (0, n.jsx)(ts, {
                                isNew: i,
                                showHoverActions: U && !f,
                                showSelect: y && (U || T),
                                isSelected: T,
                                onToggleSelect: q,
                                onMenu: Q,
                                onBeforeDelete: K,
                            }),
                            (0, n.jsx)(tr, { showHoverState: U, playbackProgress: D, onEdit: W, onSeek: V }),
                        ],
                    }),
                }),
            }),
        }),
    });
}
function ti(e) {
    let { isPlaying: t, onProgressChange: l, children: a, ref: i } = e;
    return (0, n.jsx)(eQ.d, {
        ref: i,
        isPlaying: t,
        preload: "none",
        onProgressChange: l,
        children: (0, n.jsx)(eW.h, { isVisible: !0, className: tl.Lw, children: a }),
    });
}
function ts(e) {
    let {
            isNew: t,
            showHoverActions: l,
            showSelect: a,
            isSelected: i,
            onToggleSelect: r,
            onMenu: o,
            onBeforeDelete: c,
        } = e,
        d = (0, eB.Y_)(),
        u = !0 === d.pending;
    return (0, n.jsxs)("div", {
        className: tl.wx,
        children: [
            (0, n.jsxs)("div", {
                className: tl.LD,
                children: [
                    a &&
                        (0, n.jsx)(ew.D, {
                            "aria-label": B.intl.string(B.t.XqMe3N),
                            "aria-pressed": i,
                            onClick: r,
                            "data-clips-select": "true",
                            className: s()(tl.UJ, { [tl.ZK]: i }),
                            children: i && (0, n.jsx)(eP.CheckmarkSmallBoldIcon, { size: "xs", color: "currentColor" }),
                        }),
                    !u &&
                        t &&
                        (0, n.jsx)("div", {
                            className: tl.Ad,
                            children: (0, n.jsx)(g.E, {
                                variant: "body-xs/semibold",
                                color: "text-overlay-light",
                                children: B.intl.string(B.t.y2b7CA),
                            }),
                        }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: tl.IE,
                children: [
                    (d.isFavorite || l) &&
                        (0, n.jsx)("div", {
                            className: s()({ [tl.L6]: d.isFavorite }),
                            children: (0, n.jsx)(eY.z, {}),
                        }),
                    l &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(p.m, {
                                    text: B.intl.string(B.t["UKOtz+"]),
                                    children: (0, n.jsx)(j.K, {
                                        onClick: o,
                                        icon: eL.MoreHorizontalIcon,
                                        "aria-label": B.intl.string(B.t["UKOtz+"]),
                                        variant: "overlay-secondary",
                                        size: "sm",
                                    }),
                                }),
                                (0, n.jsx)(eq.k, { onBeforeDelete: c }),
                            ],
                        }),
                ],
            }),
        ],
    });
}
function tr(e) {
    let { showHoverState: t, playbackProgress: l, onEdit: i, onSeek: r } = e,
        o = (0, eB.Y_)(),
        d = o.type === e3.nQ.SCREENSHOT,
        u = a.useRef(null),
        m = a.useRef(!1),
        f = a.useCallback(
            (e) => {
                let t = u.current;
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
        x = a.useCallback(
            (e) => {
                m.current && f(e.clientX);
            },
            [f],
        ),
        p = a.useCallback((e) => {
            ((m.current = !1),
                e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId));
        }, []),
        j = (0, c.yK)([w.default], () => o.users.map((e) => w.default.getUser(e)).filter(eV.Vq)),
        y = eF({ timestamp: o.createdAt }),
        v = o.decision?.signal?.type,
        b = null != v && v !== e3.Gy.MANUAL,
        C =
            j.length > 0
                ? (0, n.jsx)("span", {
                      className: tl.HD,
                      "data-clips-avatars": "true",
                      children: (0, n.jsx)(eI.A, {
                          maxUsers: 3,
                          users: j,
                          size: eM._3.SIZE_16,
                          "aria-label": B.intl.string(B.t.WTozwe),
                      }),
                  })
                : null;
    return (0, n.jsx)("div", {
        className: tl.qr,
        children: (0, n.jsxs)("div", {
            className: tl.Zn,
            children: [
                (0, n.jsxs)("div", {
                    className: tl.$,
                    children: [
                        (0, n.jsxs)("div", { className: tl.gH, children: [(0, n.jsx)(td, {}), (0, n.jsx)(tc, {})] }),
                        t ? C : null,
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: s()(tl.SO, { [tl.AK]: t && !d, [tl.I_]: t && d }),
                    children: [
                        (0, n.jsxs)("div", {
                            className: s()(tl.KW, { [tl.g3]: t }),
                            inert: t,
                            "aria-hidden": t,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: tl.Tf,
                                    children: [
                                        (0, n.jsx)(e8, { clip: o }),
                                        b && (0, n.jsx)("span", { className: tl.TG, "aria-hidden": "true" }),
                                        C,
                                        (0, n.jsx)(g.E, {
                                            variant: "body-xs/normal",
                                            color: "none",
                                            children: B.intl.format($.default["0QCBug"], { time: y }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", { className: tl.av, children: (0, n.jsx)(to, {}) }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            className: s()(tl.Ax, { [tl.Mg]: t }),
                            inert: !t,
                            children: [
                                !d &&
                                    (0, n.jsx)("div", {
                                        ref: u,
                                        className: tl.hr,
                                        onPointerDown: h,
                                        onPointerMove: x,
                                        onPointerUp: p,
                                        "data-clips-progress": "true",
                                        "aria-hidden": "true",
                                        children: (0, n.jsx)("div", {
                                            className: tl.z5,
                                            children: (0, n.jsx)("div", {
                                                className: tl.TE,
                                                style: { width: `${l}%` },
                                                children: (0, n.jsx)("div", {
                                                    className: tl.GT,
                                                    "aria-hidden": "true",
                                                }),
                                            }),
                                        }),
                                    }),
                                (0, n.jsxs)("div", {
                                    className: tl.E_,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: tl.lO,
                                            children: (0, n.jsx)(eD.$, {
                                                variant: "overlay-secondary",
                                                size: "sm",
                                                icon: e_.PencilIcon,
                                                text: B.intl.string(B.t.bt75uw),
                                                onClick: i,
                                                fullWidth: !0,
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: tl.lO,
                                            children: (0, n.jsx)(eX.e, { variant: "primary" }),
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
function to() {
    let e = (0, eB.Y_)(),
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
            return (0, eE.rB)(l);
        }, [e.length, e.editMetadata]);
    return t
        ? null
        : (0, n.jsxs)("div", {
              className: tl.p0,
              children: [
                  i && (0, n.jsx)(ez.A, { color: "white", width: 14, height: 14 }),
                  (0, n.jsx)(g.E, {
                      variant: "body-xs/medium",
                      color: "text-overlay-light",
                      tabularNumbers: !0,
                      children: l ? B.intl.string(B.t["2Fp7OP"]) : s,
                  }),
              ],
          });
}
function tc() {
    let e = (0, eB.Y_)(),
        t = (0, e7.h)(e),
        l = "" !== t;
    return (0, n.jsx)(g.E, {
        className: tl.DD,
        variant: "body-sm/semibold",
        color: "text-overlay-light",
        children: l ? t : e.name,
    });
}
function td() {
    let e = (0, eB.Y_)(),
        t = (0, c.bG)([eG.A], () => (null != e.applicationId ? eG.A.getApplication(e.applicationId) : null)),
        l = t?.getIconURL(32);
    return (0, n.jsx)("div", {
        className: tl.Gt,
        "aria-hidden": "true",
        children:
            null != l
                ? (0, n.jsx)("img", { src: l, alt: "", className: tl.T_ })
                : e.type === e3.nQ.VOICE_CLIP
                  ? (0, n.jsx)(eT.VoiceNormalIcon, { size: "xs", color: "currentColor" })
                  : (0, n.jsx)(eR.ScreenIcon, { size: "xs", color: "currentColor" }),
    });
}
function tu(e) {
    return Math.min(45 * e, 520);
}
ti.displayName = "CardThumbnail";
var tm = l(91440),
    tf = l(762831);
function th(e) {
    let { filteredClips: t, totalClipCount: l, onClipClick: i, onEdit: s, isLoading: r, topInset: o = 0 } = e,
        [d, u] = a.useState({ width: 0, height: 0 }),
        m = (0, c.yK)([L.Ay], () => L.Ay.getNewClipIds()),
        h = (0, c.bG)([L.Ay], () => L.Ay.getExportingClipIds().size > 0),
        x = (0, eb.P)((e) => e.activeMainLink),
        p = (0, eb.P)((e) => e.gameFacet),
        j = (0, eb.P)((e) => e.clippedWithFacet),
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
        { width: b } = d,
        { tileWidth: C, columns: k } = a.useMemo(() => {
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
        A = (0, eo.GV)(),
        E = a.useRef(null),
        I = a.useMemo(() => {
            let e = Math.max(1, k),
                t = [];
            for (let l of y) {
                let n = Math.ceil(l.clips.length / e);
                for (let a = 0; a < n; a++) t.push(Math.min(e, l.clips.length - a * e));
            }
            return t;
        }, [y, k]),
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
            getItemProps: P,
            getRowProps: M,
        } = (0, ei.A)({ navId: A, columnCounts: I, prepareFocus: S }),
        D = a.useMemo(() => y.map((e) => Math.ceil(e.clips.length / k)), [y, k]),
        _ = a.useMemo(() => D.reduce((e, t) => e + t, 0), [D]),
        T = Math.floor(C / ek) + 20,
        R = y.length > 0 ? `${x}:${p ?? ""}:${j ?? ""}` : null,
        H = (function (e) {
            let t = (0, c.bG)([N.Ay], () => N.Ay.useReducedMotion),
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
        G = a.useCallback(
            (e, t) => {
                let { sectionIndex: l, sectionRowIndex: a } = t,
                    r = y[l];
                if (null == r) return null;
                let o = a * k,
                    c = r.clips.slice(o, o + k);
                return (0, n.jsx)(
                    "div",
                    {
                        className: tm.UX,
                        ...M(e),
                        children: c.map((t, l) => {
                            let a = { width: C };
                            return (
                                H && (a["--custom-entrance-delay"] = `${tu(e + l)}ms`),
                                (0, n.jsx)(
                                    "div",
                                    {
                                        className: H ? tf.$ : void 0,
                                        style: a,
                                        children: (0, n.jsx)(tn, {
                                            actionsDisabled: h,
                                            isNew: m.includes(t.id),
                                            onClick: i ?? s,
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
                    `row-${l}-${a}`,
                );
            },
            [y, k, C, h, m, i, s, M, P, H, R],
        ),
        U = a.useCallback(
            (e) => {
                let t = y[e];
                return t?.description != null ? 66 : 44;
            },
            [y],
        ),
        O = a.useCallback(
            (e) => {
                let t = y[e];
                return null == t
                    ? null
                    : (0, n.jsxs)(
                          "div",
                          {
                              className: tm.aE,
                              children: [
                                  (0, n.jsx)(f.D, {
                                      variant: "body-md/semibold",
                                      color: "text-default",
                                      children: t.title,
                                  }),
                                  null != t.description &&
                                      (0, n.jsx)(g.E, {
                                          variant: "body-sm/normal",
                                          color: "text-subtle",
                                          className: tm.yV,
                                          children: t.description,
                                      }),
                              ],
                          },
                          `header-${e}`,
                      );
            },
            [y],
        );
    if (!r && 0 === y.length) return (0, n.jsx)(eN, { isEmptyBecauseQuery: l > 0 });
    if (r && 0 === y.length) return (0, n.jsx)("div", { className: tm.dc, children: (0, n.jsx)(es.y, {}) });
    let F = (0, n.jsx)(er.A, {
            ref: E,
            role: "none presentation",
            className: tm.Vb,
            listPadding: v,
            renderRow: G,
            renderSectionHeader: O,
            rowCount: _,
            rowCountBySection: D,
            rowHeight: T,
            sectionHeaderHeight: U,
            onResize: u,
        }),
        { onFocus: z, ...K } = w();
    return (0, n.jsx)("div", { className: tm.UT, ...K, children: F });
}
var tx = l(405433),
    tg = l(241326),
    tp = l(27232),
    tj = l(505930),
    ty = l(322911);
function tv(e) {
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
        d = B.intl.string(l ? $.default.IZsalP : $.default.ihBfyA),
        u = (0, n.jsx)(eD.$, {
            variant: "primary",
            size: "sm",
            icon: tx.ShareIcon,
            text: B.intl.string(B.t.RDE0Sc),
            onClick: r,
            disabled: c,
            loading: o,
        });
    return (0, n.jsxs)("div", {
        "aria-label": B.intl.string(B.t.z2jK6X),
        role: "region",
        className: ty.M0,
        children: [
            (0, n.jsxs)("div", {
                className: ty.h5,
                children: [
                    (0, n.jsx)(g.E, {
                        variant: "body-sm/medium",
                        color: "text-default",
                        children: B.intl.format($.default.cSfYIv, { count: t }),
                    }),
                    (0, n.jsx)("span", { className: ty.Om, "aria-hidden": "true" }),
                    (0, n.jsx)(ew.D, {
                        className: ty.IU,
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
                className: ty.o1,
                children: [
                    (0, n.jsx)(p.m, {
                        text: B.intl.string(B.t.oyYWHE),
                        children: (0, n.jsx)(j.K, {
                            onClick: s,
                            icon: tg.TrashIcon,
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
                                onClick: i,
                                icon: l ? tp.StarIcon : tj.StarOutlineIcon,
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
var tb = l(70860);
function tC(e) {
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
            className: tb.kL,
            children: [
                (0, n.jsx)("canvas", { ref: i, className: tb.Ji, tabIndex: 0, "aria-label": "Doggo Game" }),
                (0, n.jsx)("div", {
                    className: tb.b,
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
let tN = [
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
var tk = l(265872),
    tA = l(847374),
    tE = l(165862),
    tI = l(477782),
    tS = l(112173),
    tw = l(97808),
    tP = l(683438),
    tL = l(123292),
    tM = l(682163),
    tD = l(71393),
    t_ = l(341923),
    tT = l(305866),
    tR = l(441349),
    tH = l(789645),
    tG = l(70254),
    tU = l(569737);
function tO(e) {
    return (e.setHours(0, 0, 0, 0), e.getTime());
}
function tF(e) {
    return (e.setHours(23, 59, 59, 999), e.getTime());
}
function tz(e, t) {
    if (null == e && null == t) return null;
    let l = (0, tG.Xj)();
    return { preset: "custom", after: null != e ? tO(e.toDate(l)) : null, before: null != t ? tF(t.toDate(l)) : null };
}
function tK(e) {
    if (null == e) return null;
    let t = new Date(e);
    return new tU.ng(t.getFullYear(), t.getMonth() + 1, t.getDate());
}
let tV = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" });
function t$(e) {
    return tV.format(new Date(e));
}
function tB(e) {
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
            let t = null != e.after ? t$(e.after) : null,
                l = null != e.before ? t$(e.before) : null;
            if (null != t && null != l) return B.intl.formatToPlainString($.default["9pwQ/F"], { after: t, before: l });
            if (null != t) return B.intl.formatToPlainString($.default.k1FkTL, { date: t });
            if (null != l) return B.intl.formatToPlainString($.default["4NlpHD"], { date: l });
            return B.intl.string($.default.tv9apA);
        }
    }
}
var tq = l(435021);
function tY(e) {
    let { closePopout: t } = e,
        l = (0, eb.P)((e) => e.dateFilter),
        i = (0, eb.P)((e) => e.setDateFilter),
        [r, o] = a.useState(l?.preset === "custom"),
        [c, d] = a.useState(() => (l?.preset === "custom" ? tK(l.after) : null)),
        [u, m] = a.useState(() => (l?.preset === "custom" ? tK(l.before) : null)),
        f = a.useMemo(
            () => [
                { key: "today", label: B.intl.string($.default.yOAWWM) },
                { key: "yesterday", label: B.intl.string($.default["PtV/Ti"]) },
                { key: "last-3-days", label: B.intl.string($.default.xfmv7I) },
                { key: "this-year", label: B.intl.string($.default["+eE7zX"]) },
                { key: "last-year", label: B.intl.string($.default.Nwj9v0) },
            ],
            [],
        ),
        h = l?.preset ?? null,
        x = r && "custom" !== h ? null : h,
        y = a.useMemo(() => (0, tG.Ec)((0, tG.Xj)()), []),
        v = a.useCallback(
            (e) => {
                (i(
                    (function (e) {
                        let t = new Date();
                        switch (e) {
                            case "today":
                                return { preset: e, after: tO(new Date(t)), before: tF(new Date(t)) };
                            case "yesterday": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 1),
                                    { preset: e, after: tO(new Date(l)), before: tF(new Date(l)) }
                                );
                            }
                            case "last-3-days": {
                                let l = new Date(t);
                                return (
                                    l.setDate(l.getDate() - 2), { preset: e, after: tO(l), before: tF(new Date(t)) }
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
                (d(e), i(tz(e, u)));
            },
            [u, i],
        ),
        N = a.useCallback(
            (e) => {
                (m(e), i(tz(c, e)));
            },
            [c, i],
        ),
        k = a.useCallback(() => {
            (d(null), m(null), i(null));
        }, [i]),
        A = null != c || null != u,
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
    return (0, n.jsx)(tT.l, {
        "aria-label": B.intl.string($.default.upqksT),
        onBlur: w,
        children: (0, n.jsxs)("div", {
            className: s()(tq.SW, r && tq.Td),
            children: [
                (0, n.jsxs)("div", {
                    className: tq.sh,
                    children: [
                        (0, n.jsx)(g.E, {
                            variant: "body-sm/medium",
                            color: "text-muted",
                            className: tq.a9,
                            children: B.intl.string($.default.upqksT),
                        }),
                        (0, n.jsxs)("div", {
                            ref: E,
                            className: tq.eF,
                            onKeyDown: S,
                            children: [
                                f.map((e) =>
                                    (0, n.jsx)(
                                        ew.D,
                                        {
                                            className: s()(tq.zD, x === e.key && tq.pH),
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
                                (0, n.jsxs)(ew.D, {
                                    className: s()(tq.zD, tq.Kl, (r || "custom" === h) && tq.pH),
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
                                            className: tq.Xt,
                                            children: r ? "\u25C0" : "\u25B6",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: tq.ML,
                    "aria-hidden": !r,
                    children: [
                        (0, n.jsxs)("div", {
                            className: tq.U6,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: tq._2,
                                    children: [
                                        (0, n.jsx)(g.E, {
                                            variant: "body-sm/medium",
                                            color: "text-muted",
                                            className: tq.bk,
                                            "aria-hidden": !0,
                                            children: B.intl.string($.default["96vZuU"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tq.h0,
                                            children: [
                                                (0, n.jsx)(tR.l, {
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
                                                            icon: tH.XSmallIcon,
                                                            onClick: () => C(null),
                                                            "aria-label": B.intl.string(B.t.VkKicb),
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: tq._2,
                                    children: [
                                        (0, n.jsx)(g.E, {
                                            variant: "body-sm/medium",
                                            color: "text-muted",
                                            className: tq.bk,
                                            "aria-hidden": !0,
                                            children: B.intl.string($.default["GL51/b"]),
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: tq.h0,
                                            children: [
                                                (0, n.jsx)(tR.l, {
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
                                                            icon: tH.XSmallIcon,
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
                        A &&
                            (0, n.jsx)("div", {
                                className: tq.dS,
                                children: (0, n.jsx)(tL.Q, { size: "sm", text: B.intl.string(B.t.VkKicb), onClick: k }),
                            }),
                    ],
                }),
            ],
        }),
    });
}
var tX = l(91871),
    tQ = l.n(tX),
    tW = l(190199),
    tZ = l(914427),
    tJ = l(724141);
function t0(e) {
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
                return ("" === (t = e.trim().toLowerCase()) ? l : l.filter((e) => tQ()(t, e.label.toLowerCase()))).map(
                    (e) =>
                        (0, n.jsxs)(
                            tW.x4,
                            {
                                value: e.key,
                                children: [
                                    null != e.icon && (0, n.jsx)("span", { className: tJ.H, children: e.icon }),
                                    (0, n.jsx)(tW.x4.Label, { children: e.label }),
                                    r ? (0, n.jsx)(tW.x4.Checkbox, {}) : (0, n.jsx)(tW.x4.Checkmark, {}),
                                ],
                            },
                            e.key,
                        ),
                );
            },
            [l, r],
        ),
        f = i.size > 0 ? `${t} (${i.size})` : t;
    return (0, n.jsx)(tk.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: d,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, n.jsx)(tZ.p, {
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
            (0, n.jsx)(eD.$, {
                ...e,
                buttonRef: d,
                size: "sm",
                variant: "secondary",
                text: f,
                icon: tA.ChevronSmallDownIcon,
                iconPosition: "end",
            }),
    });
}
var t1 = l(187671);
function t3(e) {
    let { label: t, icon: l, onRemove: a, removeAriaLabel: i } = e;
    return (0, n.jsxs)("div", {
        className: t1.Io,
        children: [
            null != l && (0, n.jsx)("span", { className: t1.Kk, children: l }),
            (0, n.jsx)(g.E, {
                className: t1.Pf,
                variant: "body-sm/semibold",
                color: "currentColor",
                lineClamp: 1,
                children: t,
            }),
            (0, n.jsx)(ew.D, {
                className: t1.DT,
                onClick: a,
                "aria-label": i ?? B.intl.string(B.t.N86XcP),
                children: (0, n.jsx)(tH.XSmallIcon, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var t2 = l(401756);
let t9 = { all: $.default.lscwjQ, auto: $.default.xrOIkz, manual: $.default.D7HSLJ };
function t6() {
    let e = (0, eb.P)((e) => e.dateFilter),
        t = a.useRef(null),
        l = null != e ? tB(e) : B.intl.string($.default.upqksT);
    return (0, n.jsx)(tk.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: t,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(tY, { closePopout: t });
        },
        children: (e) =>
            (0, n.jsx)(eD.$, {
                ...e,
                buttonRef: t,
                size: "sm",
                variant: "secondary",
                text: l,
                icon: tA.ChevronSmallDownIcon,
                iconPosition: "end",
            }),
    });
}
function t4() {
    let e = (0, eb.P)((e) => e.sortOrder),
        t = (0, eb.P)((e) => e.setSortOrder),
        l = a.useRef(null),
        i = e === ea.mu.OLDEST ? B.intl.string(B.t["0gitSE"]) : B.intl.string(B.t["4LLKx3"]);
    return (0, n.jsx)(tk.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, n.jsx)(tE.W, {
                navId: "clips-sort-menu",
                variant: "fixed",
                "aria-label": B.intl.string(B.t.XvNMNk),
                onClose: a,
                onSelect: void 0,
                children: (0, n.jsxs)(tI.rX, {
                    children: [
                        (0, n.jsx)(tI.iD, {
                            id: "sort-recent",
                            group: "sort",
                            label: B.intl.string(B.t["4LLKx3"]),
                            action: () => {
                                (t(ea.mu.MOST_RECENT), a());
                            },
                            checked: e === ea.mu.MOST_RECENT,
                        }),
                        (0, n.jsx)(tI.iD, {
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
            (0, n.jsx)(eD.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: i,
                icon: tS.ArrowsUpDownIcon,
            }),
    });
}
function t8() {
    let e = (0, eb.P)((e) => e.clipMethodFilter),
        t = (0, eb.P)((e) => e.setClipMethodFilter),
        l = a.useRef(null);
    return (0, n.jsx)(tk.Y, {
        position: "bottom",
        align: "left",
        targetElementRef: l,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, n.jsx)(tE.W, {
                navId: "clips-method-menu",
                variant: "fixed",
                "aria-label": B.intl.string($.default["kIqbb/"]),
                onClose: a,
                onSelect: void 0,
                children: (0, n.jsxs)(tI.rX, {
                    children: [
                        (0, n.jsx)(tI.iD, {
                            id: "method-all",
                            group: "method",
                            label: B.intl.string($.default.lscwjQ),
                            action: () => {
                                (t("all"), a());
                            },
                            checked: "all" === e,
                        }),
                        (0, n.jsx)(tI.iD, {
                            id: "method-auto",
                            group: "method",
                            label: B.intl.string($.default.xrOIkz),
                            action: () => {
                                (t("auto"), a());
                            },
                            checked: "auto" === e,
                        }),
                        (0, n.jsx)(tI.iD, {
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
            (0, n.jsx)(eD.$, {
                ...e,
                buttonRef: l,
                size: "sm",
                variant: "secondary",
                text: B.intl.string($.default["kIqbb/"]),
                icon: tA.ChevronSmallDownIcon,
                iconPosition: "end",
            }),
    });
}
function t7(e) {
    let { allClips: t, gamesFacet: l, participantsFacet: i } = e,
        s = (0, eb.P)((e) => e.query),
        r = (0, eb.P)((e) => e.setQuery),
        o = (0, eb.P)((e) => e.pendingSearchFocus),
        c = (0, eb.P)((e) => e.setPendingSearchFocus),
        d = a.useRef(null),
        u = (0, eb.P)((e) => e.activeMainLink),
        m = (0, eb.P)((e) => e.clipMethodFilter),
        f = (0, eb.P)((e) => e.setClipMethodFilter),
        h = (0, eb.P)((e) => e.gameFacet),
        x = (0, eb.P)((e) => e.clippedWithFacet),
        g = (0, eb.P)((e) => e.selectedGameIds),
        p = (0, eb.P)((e) => e.selectedUserIds),
        j = (0, eb.P)((e) => e.selectedGuildId),
        y = (0, eb.P)((e) => e.selectedActivity),
        v = (0, eb.P)((e) => e.dateFilter),
        b = (0, eb.P)((e) => e.toggleGameId),
        C = (0, eb.P)((e) => e.toggleUserId),
        N = (0, eb.P)((e) => e.setSelectedGuildId),
        k = (0, eb.P)((e) => e.setSelectedActivity),
        A = (0, eb.P)((e) => e.setDateFilter),
        E = (0, eb.P)((e) => e.clearFilters);
    a.useEffect(() => {
        o && (d.current?.focus(), c(!1));
    }, [o, c]);
    let P = a.useRef(null);
    a.useEffect(() => {
        let e = {
            type_filter: "all" !== m ? m : "",
            game_filter_application_ids: null != h ? [h] : Array.from(g),
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
            P.current = null;
            return;
        }
        let t = JSON.stringify(e);
        t !== P.current && ((P.current = t), eK.default.track(tt.HAw.CLIPS_FILTER_CHANGED, e));
    }, [m, h, g, v, j, x, p, u, y]);
    let L = a.useMemo(() => l.map((e) => e.key), [l]),
        M = (0, I.A)(L),
        D = a.useMemo(() => new Map(M.map((e) => [e?.id, e])), [M]),
        _ = a.useMemo(
            () =>
                l.map((e) => ({
                    key: e.key,
                    label: e.name,
                    icon: (0, n.jsx)(S.A, { game: D.get(e.key), size: S.M.XSMALL }),
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
                        let t = tD.A.getGuild(e);
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
                    icon: (0, n.jsx)(tM.Ay, { guild: e.guild, size: tM.Ay.Sizes.MINI }),
                })),
            [T],
        ),
        H = a.useMemo(() => new Map(T.map((e) => [e.key, e.guild])), [T]),
        G = a.useMemo(
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
        U = a.useMemo(
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
                })(i).map((e) => ({
                    key: e.key,
                    label: e.label,
                    icon: (0, n.jsx)(tw.eu, { src: e.avatarUrl, size: eM._3.SIZE_20, "aria-hidden": !0 }),
                })),
            [i],
        ),
        O = a.useMemo(() => (null != j ? new Set([j]) : new Set()), [j]),
        F = a.useMemo(() => (null != y ? new Set([y]) : new Set()), [y]),
        z = a.useCallback(
            (e) => {
                N(j === e ? null : e);
            },
            [j, N],
        ),
        K = a.useCallback(
            (e) => {
                k(y === e ? null : e);
            },
            [y, k],
        ),
        V = null == h,
        $ = null == x,
        q = (0, t_.H)() && u !== ea.oH.AUTO_CLIPS,
        Y = B.intl.string(t9[m]),
        X = (0, n.jsxs)(n.Fragment, {
            children: [
                V &&
                    Array.from(g).map((e) => {
                        let t = _.find((t) => t.key === e);
                        return (0, n.jsx)(
                            t3,
                            {
                                label: t?.label ?? e,
                                icon: (0, n.jsx)(S.A, { game: D.get(e), size: S.M.XSMALL }),
                                onRemove: () => b(e),
                            },
                            `game-${e}`,
                        );
                    }),
                null != v && (0, n.jsx)(t3, { label: tB(v), onRemove: () => A(null) }, "date"),
                null != j &&
                    (0, n.jsx)(
                        t3,
                        {
                            label: R.find((e) => e.key === j)?.label ?? j,
                            icon:
                                null != H.get(j)
                                    ? (0, n.jsx)(tM.Ay, { guild: H.get(j), size: tM.Ay.Sizes.SMOL })
                                    : void 0,
                            onRemove: () => N(null),
                        },
                        "guild",
                    ),
                $ && Array.from(p).map((e) => (0, n.jsx)(t5, { userId: e, onRemove: () => C(e) }, `user-${e}`)),
                null != y && (0, n.jsx)(t3, { label: y, onRemove: () => k(null) }, "activity"),
                q && "all" !== m && (0, n.jsx)(t3, { label: Y, onRemove: () => f("all") }, "method"),
            ],
        }),
        Q = (V && g.size > 0) || null != v || null != j || ($ && p.size > 0) || null != y || (q && "all" !== m);
    return (0, n.jsxs)("div", {
        className: t2.kT,
        children: [
            (0, n.jsxs)("div", {
                className: t2.HL,
                children: [
                    (0, n.jsx)("div", {
                        className: t2.MT,
                        children: (0, n.jsx)(tP.I, {
                            ref: d,
                            placeholder: B.intl.string(B.t["5h0QOP"]),
                            query: s,
                            onChange: r,
                            onClear: () => r(""),
                            size: "sm",
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: t2.Zq,
                        children: [
                            q && (0, n.jsx)(t8, {}),
                            V &&
                                _.length > 0 &&
                                (0, n.jsx)(t0, {
                                    triggerLabel: B.intl.string(B.t.URyqtP),
                                    options: _,
                                    selectedKeys: g,
                                    onToggle: b,
                                    multiSelect: !0,
                                    searchPlaceholder: B.intl.string(B.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(t6, {}),
                            R.length > 0 &&
                                (0, n.jsx)(t0, {
                                    triggerLabel: B.intl.string(B.t["5qyruI"]),
                                    options: R,
                                    selectedKeys: O,
                                    onToggle: z,
                                    multiSelect: !1,
                                    searchPlaceholder: B.intl.string(B.t["5h0QOP"]),
                                }),
                            $ &&
                                U.length > 0 &&
                                (0, n.jsx)(t0, {
                                    triggerLabel: B.intl.string(B.t.YQ6dJg),
                                    options: U,
                                    selectedKeys: p,
                                    onToggle: (e) => C(e),
                                    multiSelect: !0,
                                    searchPlaceholder: B.intl.string(B.t["5h0QOP"]),
                                }),
                            G.length > 0 &&
                                (0, n.jsx)(t0, {
                                    triggerLabel: B.intl.string(B.t.agRtPG),
                                    options: G,
                                    selectedKeys: F,
                                    onToggle: K,
                                    multiSelect: !1,
                                    searchPlaceholder: B.intl.string(B.t["5h0QOP"]),
                                }),
                            (0, n.jsx)(t4, {}),
                        ],
                    }),
                ],
            }),
            Q &&
                (0, n.jsxs)("div", {
                    className: t2.eH,
                    children: [
                        X,
                        (0, n.jsx)(tL.Q, {
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
function t5(e) {
    let { userId: t, onRemove: l } = e,
        a = (0, c.bG)([w.default], () => w.default.getUser(t), [t]);
    if (null == a) return null;
    let i = a.globalName ?? a.username;
    return (0, n.jsx)(t3, {
        label: i,
        icon: (0, n.jsx)(tw.eu, { src: a.getAvatarURL(null, 32), size: eM._3.SIZE_16, "aria-hidden": !0 }),
        onRemove: l,
    });
}
var le = l(315629),
    lt = l(516521),
    ll = l(975571);
function ln(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
    return e
        .filter((e) => "auto" === e.clipMethod && !0 !== e.isCandidate)
        .sort((e, t) => t.createdAt - e.createdAt)
        .slice(0, t);
}
var la = l(195715);
function li(e) {
    let { clips: t, onEdit: l, onEdgeNavigate: i, showEducationCopy: s = !1 } = e,
        r = a.useMemo(() => ln(t), [t]),
        o = (0, eb.P)((e) => e.setActiveMainLink),
        c = (0, eo.GV)(),
        d = a.useMemo(() => [r.length], [r.length]),
        { getContainerProps: u, getItemProps: m, getRowProps: p } = (0, ei.A)({ navId: c, columnCounts: d }),
        { onFocus: j, onKeyDown: y, ...v } = u(),
        b = a.useCallback(
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
        C = { ...v, onKeyDown: b };
    return 0 === r.length
        ? null
        : (0, n.jsxs)("section", {
              className: la.uW,
              "aria-label": B.intl.string(s ? $.default.U5V4YO : $.default.efLpNC),
              children: [
                  (0, n.jsxs)("div", {
                      className: la.wx,
                      children: [
                          s
                              ? (0, n.jsxs)("div", {
                                    className: la.eS,
                                    children: [
                                        (0, n.jsx)(f.D, {
                                            variant: "nitro-sm",
                                            color: "text-default",
                                            children: B.intl.string($.default.U5V4YO),
                                        }),
                                        (0, n.jsx)(g.E, {
                                            variant: "body-md/normal",
                                            color: "text-muted",
                                            children: B.intl.format($.default.i1g0Xm, {
                                                helpArticleUrl: ll.A.getArticleURL(tt.MVz.CLIPS),
                                            }),
                                        }),
                                    ],
                                })
                              : (0, n.jsxs)("div", {
                                    className: la.mX,
                                    children: [
                                        (0, n.jsxs)("div", {
                                            className: la.UP,
                                            children: [
                                                (0, n.jsx)(f.D, {
                                                    variant: "heading-lg/medium",
                                                    color: "text-default",
                                                    children: B.intl.string($.default.I1h8uD),
                                                }),
                                                (0, n.jsx)(h.E, {
                                                    type: "early_access",
                                                    variant: "primary",
                                                    icon: x.NitroWheelIcon,
                                                }),
                                            ],
                                        }),
                                        (0, n.jsx)(f.D, {
                                            variant: "display-md",
                                            color: "text-default",
                                            className: la.DD,
                                            children: B.intl.string($.default.efLpNC),
                                        }),
                                    ],
                                }),
                          (0, n.jsx)("div", {
                              className: la.BX,
                              children: (0, n.jsx)(eD.$, {
                                  variant: "overlay-primary",
                                  size: "sm",
                                  onClick: () => o(ea.oH.AUTO_CLIPS),
                                  text: B.intl.string($.default.gCay1w),
                              }),
                          }),
                      ],
                  }),
                  (0, n.jsx)("div", {
                      className: la.Vg,
                      "aria-label": B.intl.string($.default.efLpNC),
                      ...C,
                      tabIndex: -1,
                      children: (0, n.jsx)("div", {
                          className: la.nM,
                          ...p(0),
                          children: r.map((e, t) =>
                              (0, n.jsx)(
                                  "div",
                                  {
                                      className: la.v2,
                                      children: (0, n.jsx)(tn, {
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
var ls = l(65154),
    lr = l(331322),
    lo = l(509434),
    lc = l(106983),
    ld = l(14868),
    lu = l(171251),
    lm = l(876474),
    lf = l(801344),
    lh = l(190443),
    lx = l(979563),
    lg = l(865278),
    lp = l(148289);
function lj() {
    window.open(ll.A.getArticleURL(tt.MVz.CLIPS), "_blank", "noopener,noreferrer");
}
function ly() {
    (0, ld.z)("ClipsHomeEducation");
}
function lv(e) {
    let { className: t } = e;
    return (0, n.jsxs)("div", {
        className: s()(lg.GX, t),
        children: [
            (0, n.jsx)("div", {
                className: lg.f1,
                "aria-hidden": !0,
                children: (0, n.jsx)("img", { className: lg.IG, src: lp.A, alt: "" }),
            }),
            (0, n.jsx)("div", {
                className: lg.UX,
                children: (0, n.jsxs)("div", {
                    className: lg.wE,
                    children: [
                        (0, n.jsx)(ls.CirclePlayIcon, { size: "sm", color: "currentColor", "aria-hidden": !0 }),
                        (0, n.jsx)(tL.Q, {
                            variant: "always-white",
                            textVariant: "body-sm/medium",
                            text: B.intl.string($.default["2axqmn"]),
                            onClick: ly,
                        }),
                    ],
                }),
            }),
        ],
    });
}
function lb(e) {
    let { type: t, applicationId: l, eventName: a } = e,
        i = (0, e1.u6)(l, t, a),
        s = (0, e1.PZ)(l, t, a);
    return null == i || null == s ? null : (0, n.jsx)(e6, { icon: i, text: s });
}
function lC(e) {
    let { tags: t, className: l } = e;
    return (0, n.jsxs)("div", {
        className: s()(lg.Ny, l),
        "aria-hidden": !0,
        children: [
            (0, n.jsx)("div", {
                className: lg.mB,
                children: (0, n.jsx)(G.ClipsAutoIcon, { size: "custom", width: 20, height: 20, color: "currentColor" }),
            }),
            (0, n.jsxs)("div", {
                className: lg.UX,
                children: [
                    (0, n.jsxs)("div", {
                        className: lg.US,
                        children: [
                            (0, n.jsx)("div", { className: s()(lg.qV, lg.AL) }),
                            (0, n.jsx)("div", { className: s()(lg.qV, lg.SA) }),
                            (0, n.jsx)("div", { className: s()(lg.qV, lg.pq) }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: lg.U2,
                        children: [
                            t.map((e) => (0, n.jsx)(lb, { ...e }, `${e.type}:${e.eventName ?? ""}`)),
                            (0, n.jsxs)("div", {
                                className: lg.Gc,
                                children: [
                                    (0, n.jsx)("div", { className: lg.my }),
                                    (0, n.jsx)("div", { className: lg.my }),
                                    (0, n.jsx)("div", { className: lg.my }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let lN = { type: e3.Gy.SHOUTING },
    lk = { type: e3.Gy.LAUGHTER },
    lA = { type: e3.Gy.GAME_EVENT, applicationId: lm.m, eventName: lf.n_.ChampionKill },
    lE = { type: e3.Gy.GAME_EVENT, applicationId: lm.m, eventName: lf.n_.PentaKill },
    lI = { type: e3.Gy.GAME_EVENT, applicationId: lu.w, eventName: lc.C.Ace },
    lS = { type: e3.Gy.GAME_EVENT, applicationId: lh.e, eventName: lx.d.AerialGoal },
    lw = { type: e3.Gy.GAME_EVENT, applicationId: lh.e, eventName: lx.d.EpicSave },
    lP = [lN, lA],
    lL = [lk, lE],
    lM = [
        { tags: [lN, lA], className: lg.ZU },
        { tags: [lS], className: lg.ex },
        { tags: [lk, lE], className: lg.l$ },
        { tags: [lI], className: lg.eS },
        { tags: [lN, lw], className: lg.lu },
        { tags: [lk, lI], className: lg.er },
    ];
function lD(e) {
    let { ref: t } = e;
    return (0, n.jsx)("div", {
        ref: t,
        className: lg.$j,
        "aria-hidden": !0,
        children: (0, n.jsx)("div", {
            className: lg.qG,
            children: (0, n.jsx)("div", {
                className: lg.h$,
                children: lM.map((e, t) => {
                    let { tags: l, className: a } = e;
                    return (0, n.jsx)(lC, { className: s()(lg.Qx, a), tags: l }, t);
                }),
            }),
        }),
    });
}
function l_() {
    let e = (0, eu.E)(),
        { onChange: t } = (0, z.U)(),
        l = a.useCallback(() => t("manual"), [t]);
    return (0, n.jsxs)("section", {
        className: lg.uW,
        "aria-label": B.intl.string($.default.Pottsi),
        children: [
            (0, n.jsxs)("div", {
                className: lg.jg,
                children: [
                    (0, n.jsx)("div", { className: lg.dw, children: (0, n.jsx)(lv, { className: lg.RV }) }),
                    (0, n.jsxs)("div", {
                        className: lg.oY,
                        children: [
                            (0, n.jsxs)("div", {
                                className: lg.C,
                                children: [
                                    (0, n.jsx)(f.D, {
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
                            (0, n.jsxs)(lr.B, {
                                direction: "horizontal",
                                gap: 12,
                                justify: "center",
                                children: [
                                    (0, n.jsx)(eD.$, {
                                        variant: "secondary",
                                        icon: lo.LinkExternalSmallIcon,
                                        iconPosition: "end",
                                        text: B.intl.string(B.t.hvVgAZ),
                                        onClick: lj,
                                    }),
                                    e
                                        ? (0, n.jsx)(eD.$, {
                                              variant: "primary",
                                              icon: ls.CirclePlayIcon,
                                              text: B.intl.string($.default.caOprb),
                                              onClick: ly,
                                          })
                                        : (0, n.jsx)(eD.$, {
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
            (0, n.jsx)(ev, { className: lg.Vh }),
        ],
    });
}
function lT() {
    return (0, n.jsxs)("section", {
        className: lg.ZK,
        "aria-label": B.intl.string($.default["33gqTk"]),
        children: [
            (0, n.jsxs)("div", {
                className: lg.C,
                children: [
                    (0, n.jsx)(f.D, {
                        variant: "nitro-md",
                        color: "text-default",
                        children: B.intl.string($.default["33gqTk"]),
                    }),
                    (0, n.jsx)(g.E, {
                        variant: "body-md/normal",
                        color: "text-subtle",
                        children: B.intl.format($.default.aTozcJ, { helpArticleUrl: ll.A.getArticleURL(tt.MVz.CLIPS) }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: lg.LF,
                children: [(0, n.jsx)(lv, {}), (0, n.jsx)(lC, { tags: lP }), (0, n.jsx)(lC, { tags: lL })],
            }),
        ],
    });
}
var lR = l(770178),
    lH = l(202163),
    lG = l(68408);
function lU(e) {
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
        { gameRecord: h } = (0, lH.Ay)(t.applicationId),
        { onShareSession: x } = a.useContext(e5.$),
        p = a.useCallback(() => {
            x?.(t.clips);
        }, [x, t.clips]),
        j = (0, eb.P)((e) => e.setGameFacet),
        y = (0, eb.P)((e) => e.setActiveMainLink),
        v = t.applicationId,
        b = null != v && "" !== v,
        N = a.useCallback(() => {
            null != v && "" !== v && (j(v), y(ea.oH.ALL_CLIPS));
        }, [v, j, y]),
        k = a.useCallback(() => {
            b ? N() : y(ea.oH.ALL_CLIPS);
        }, [b, N, y]),
        A = a.useMemo(() => (null == h ? null : (h.getBannerURL(1024) ?? h.screenshotUrls?.[0] ?? null)), [h]),
        E = (0, c.yK)([w.default], () => {
            let e = new Set();
            for (let l of t.clips) for (let t of l.users) e.add(t);
            return Array.from(e, (e) => w.default.getUser(e)).filter(eV.Vq);
        }),
        I = a.useMemo(() => t.clips.filter((e) => "auto" === e.clipMethod).length, [t.clips]),
        P = eF({ timestamp: t.startedAt }),
        [L, M] = a.useState(800),
        D = (0, C.A)((e) => {
            M(e.target.clientWidth);
        }),
        _ = (0, lR.w)(D),
        T = Math.max(1, (L - 40) / 3),
        R = a.useMemo(() => {
            let e = t.clips.slice(0, 6),
                l = [];
            for (let t = 0; t < e.length; t += 3) l.push(e.slice(t, t + 3));
            return l;
        }, [t.clips]),
        H = t.clips.length > 6,
        G = (0, eo.GV)(),
        U = a.useMemo(() => R.map((e) => e.length), [R]),
        { getContainerProps: O, getItemProps: F, getRowProps: z } = (0, ei.A)({ navId: G, columnCounts: U }),
        { onFocus: K, onKeyDown: V, ...q } = O(),
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
                V(e);
            },
            [V, m],
        );
    return (0, n.jsxs)("section", {
        className: lG.dZ,
        children: [
            (0, n.jsx)("div", {
                className: s()(lG.tB, null == A && lG.rD),
                style: null != A ? { backgroundImage: `url(${A})` } : void 0,
                "aria-hidden": "true",
            }),
            (0, n.jsxs)("div", {
                className: lG.wx,
                children: [
                    b
                        ? (0, n.jsx)(eS.s, {
                              "aria-label": t.applicationName,
                              onClick: N,
                              className: lG.Zn,
                              children: (0, n.jsx)(S.A, {
                                  className: lG.Gt,
                                  game: h,
                                  size: S.M.MEDIUM,
                                  "aria-hidden": !0,
                              }),
                          })
                        : (0, n.jsx)(S.A, { className: lG.Gt, game: h, size: S.M.MEDIUM, "aria-hidden": !0 }),
                    (0, n.jsxs)("div", {
                        className: lG.TK,
                        children: [
                            b
                                ? (0, n.jsx)(eS.s, {
                                      "aria-label": t.applicationName,
                                      onClick: N,
                                      className: lG.wb,
                                      children: (0, n.jsx)(f.D, {
                                          variant: "body-md/medium",
                                          color: "text-default",
                                          className: lG.mO,
                                          children: t.applicationName,
                                      }),
                                  })
                                : (0, n.jsx)(f.D, {
                                      variant: "body-md/medium",
                                      color: "text-default",
                                      className: lG.mO,
                                      children: t.applicationName,
                                  }),
                            (0, n.jsxs)("div", {
                                className: lG.mI,
                                children: [
                                    (0, n.jsx)(g.E, {
                                        variant: "body-xs/normal",
                                        color: "text-muted",
                                        children: B.intl.format($.default["+YIqQM"], { count: t.clips.length }),
                                    }),
                                    I > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: lG.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(g.E, {
                                                    variant: "body-xs/normal",
                                                    color: "text-muted",
                                                    children: B.intl.format($.default.eRrt7X, { count: I }),
                                                }),
                                            ],
                                        }),
                                    (0, n.jsx)("span", { className: lG.TG, "aria-hidden": "true" }),
                                    (0, n.jsx)(g.E, { variant: "body-xs/normal", color: "text-muted", children: P }),
                                    E.length > 0 &&
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)("span", { className: lG.TG, "aria-hidden": "true" }),
                                                (0, n.jsx)(eI.A, { users: E, maxUsers: 5, size: eM._3.SIZE_16 }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    }),
                    t.clips.length > 0 &&
                        null != x &&
                        (0, n.jsx)("div", {
                            className: lG.$s,
                            children: (0, n.jsx)(eD.$, {
                                variant: "secondary",
                                size: "sm",
                                icon: tx.ShareIcon,
                                text: B.intl.string($.default.l34lLs),
                                onClick: p,
                            }),
                        }),
                ],
            }),
            (0, n.jsx)("div", {
                ref: _,
                className: lG.Vg,
                ...q,
                tabIndex: -1,
                onKeyDown: Y,
                children: R.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: lG.UX,
                            ...z(t),
                            children: e.map((e, a) => {
                                let s = { width: T };
                                return (
                                    d && (s["--custom-entrance-delay"] = `${tu(u + t + a)}ms`),
                                    (0, n.jsx)(
                                        "div",
                                        {
                                            className: d ? tf.$ : void 0,
                                            style: s,
                                            children: (0, n.jsx)(tn, {
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
            H &&
                (0, n.jsx)("div", {
                    className: lG.Vc,
                    children: (0, n.jsx)(eD.$, {
                        variant: "secondary",
                        size: "sm",
                        text: B.intl.string($.default.pqk9U0),
                        onClick: k,
                    }),
                }),
        ],
    });
}
var lO = l(885574),
    lF = l(646514),
    lz = l(253932),
    lK = l(734066),
    lV = l(947568);
function l$() {
    (0, eg.openUserSettings)(ex.X.CLIPS_ALLOW_VOICE_RECORDING_SETTING);
}
function lB() {
    let {
        visible: e,
        handleAllow: t,
        handleDontAllow: l,
    } = (function () {
        let e = (0, c.bG)([w.default], () => (0, lK.qj)(w.default.getCurrentUser())),
            t = lz.Q$.useSetting(),
            l = e && !1 === t && (0, M.o)("ClipsLibraryVoiceBanner"),
            [n, i] = (0, O.kn)(l ? [_.M.AUTOCLIPPING_EARLY_ACCESS_LIBRARY_VOICE_BANNER] : []);
        return {
            visible: null != n,
            handleAllow: a.useCallback(() => {
                (i(V.i.TAKE_ACTION), (0, D.eQ)({ allowVoiceRecording: !0 }));
            }, [i]),
            handleDontAllow: a.useCallback(() => {
                i(V.i.USER_DISMISS);
            }, [i]),
        };
    })();
    return e
        ? (0, n.jsxs)("div", {
              className: lV.v,
              children: [
                  (0, n.jsx)(lO.CircleInformationIcon, {
                      size: "xs",
                      color: lF.A.colors.ICON_FEEDBACK_INFO,
                      "aria-hidden": !0,
                  }),
                  (0, n.jsx)(g.E, {
                      variant: "body-sm/normal",
                      color: "text-strong",
                      className: lV.i,
                      children: B.intl.format($.default.m7PBif, { onDataPrivacyClick: l$ }),
                  }),
                  (0, n.jsxs)(lr.B, {
                      direction: "horizontal",
                      gap: 8,
                      fullWidth: !1,
                      children: [
                          (0, n.jsx)(eD.$, {
                              variant: "secondary",
                              size: "sm",
                              text: B.intl.string($.default.beB8BG),
                              onClick: l,
                          }),
                          (0, n.jsx)(eD.$, {
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
var lq = l(799888);
let lY = { no_clips: 604, no_auto_clips: 400 };
function lX(e) {
    let { filteredClips: t, totalClipCount: l, onEdit: i, onClipClick: s, isLoading: r, onScroll: o } = e,
        d = (0, t_.H)(),
        u = a.useMemo(() => ln(t), [t]),
        m = d && u.length > 0,
        h = (0, c.yK)([L.Ay], () => L.Ay.getNewClipIds()),
        x = (0, c.bG)([L.Ay], () => L.Ay.getExportingClipIds().size > 0),
        g = (0, eb.P)((e) => e.setActiveMainLink),
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
        y = (0, c.bG)([N.Ay], () => N.Ay.useReducedMotion),
        v = a.useMemo(() => {
            let e = [],
                t = 0;
            for (let l of j) (e.push(t), (t += Math.min(2, Math.ceil(l.clips.length / 3))));
            return e;
        }, [j]),
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
        k = a.useRef(null),
        A = a.useRef(null),
        E = a.useCallback(
            (e) => {
                let { scrollTop: t } = e.currentTarget;
                (k.current?.style.setProperty("--custom-clips-home-scroll-top", `${t}px`),
                    A.current?.style.setProperty("--custom-clips-home-scroll-top", `${t}px`),
                    o?.(t));
            },
            [o],
        ),
        I = j.length > 0 || m,
        S = (function (e) {
            let { hasContent: t, isLoading: l, totalClipCount: n, showCarousel: a } = e;
            return t ? (a ? "auto_clips" : "no_auto_clips") : l || n > 0 ? null : "no_clips";
        })({ hasContent: I, isLoading: r, totalClipCount: l, showCarousel: m }),
        w = (0, M.H)("ClipsGalleryHome") ? S : null,
        P = null != w ? lY[w] : void 0,
        D =
            null != P
                ? (0, n.jsx)(le.h, {
                      ref: k,
                      color: "nitro-pink",
                      className: lq.zP,
                      style: { "--custom-clips-home-gradient-height": `${P}px` },
                      "aria-hidden": !0,
                  })
                : null;
    return I
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  D,
                  (0, n.jsx)(lt.Ch, {
                      className: lq.iR,
                      fade: !0,
                      onScroll: E,
                      children: (0, n.jsxs)("div", {
                          className: lq.Qs,
                          ref: b,
                          children: [
                              m &&
                                  (0, n.jsx)("div", {
                                      className: lq.Dk,
                                      children: (0, n.jsx)(li, {
                                          clips: t,
                                          onEdit: i,
                                          onEdgeNavigate: C,
                                          showEducationCopy: "auto_clips" === w,
                                      }),
                                  }),
                              "no_auto_clips" === w &&
                                  (0, n.jsx)("div", { className: lq.Dk, children: (0, n.jsx)(lT, {}) }),
                              (0, n.jsx)(lB, {}),
                              j.length > 0 &&
                                  (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(f.D, {
                                              variant: "heading-lg/medium",
                                              color: "text-default",
                                              children: B.intl.string($.default.zfTWDE),
                                          }),
                                          j.map((e, t) =>
                                              (0, n.jsx)(
                                                  lU,
                                                  {
                                                      session: e,
                                                      recentClipIds: h,
                                                      actionsDisabled: x,
                                                      onEdit: i,
                                                      onClipClick: s,
                                                      animateEntrance: !y,
                                                      entranceRowOffset: v[t] ?? 0,
                                                      onEdgeNavigate: C,
                                                  },
                                                  e.id,
                                              ),
                                          ),
                                          (0, n.jsx)("div", {
                                              className: lq.dp,
                                              children: (0, n.jsx)(eD.$, {
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
          ? (0, n.jsx)("div", { className: lq.dc, children: (0, n.jsx)(es.y, {}) })
          : "no_clips" === w
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      D,
                      (0, n.jsx)(lD, { ref: A }),
                      (0, n.jsx)(lt.Ch, {
                          className: lq.iR,
                          fade: !0,
                          onScroll: E,
                          children: (0, n.jsx)("div", {
                              className: lq.Qs,
                              children: (0, n.jsx)("div", { className: lq.Dk, children: (0, n.jsx)(l_, {}) }),
                          }),
                      }),
                  ],
              })
            : (0, n.jsx)(eN, { isEmptyBecauseQuery: l > 0 });
}
var lQ = l(837381),
    lW = l(741918),
    lZ = l(812993),
    lJ = l(332837),
    l0 = l(95362),
    l1 = l(625903),
    l3 = l(260762),
    l2 = l(599428);
function l9(e) {
    let { itemId: t, icon: l, label: a, onClick: i, isSelected: r = !1, isDisabled: o = !1, badgeCount: c = 0 } = e,
        d = o && !r,
        u = (0, lQ.rm)(t);
    return (0, n.jsx)(p.m, {
        text: a,
        position: "right",
        children: (0, n.jsxs)(ew.D, {
            ...u,
            role: "button",
            onClick: d ? void 0 : i,
            "aria-pressed": r,
            "aria-disabled": d,
            "aria-label": a,
            className: s()(l2.AY, { [l2.Hy]: r, [l2.Is]: d }),
            children: [l, c > 0 && (0, n.jsx)("span", { className: l2.e, children: (0, n.jsx)(lZ.hV, { count: c }) })],
        }),
    });
}
function l6(e) {
    let { gamesFacet: t, mainLinkCounts: l, mainLinkNewCounts: i } = e,
        r = (0, eb.P)((e) => e.activeMainLink),
        o = (0, eb.P)((e) => e.gameFacet),
        c = (0, eb.P)((e) => e.clippedWithFacet),
        d = (0, eb.P)((e) => e.setActiveMainLink),
        u = (0, eb.P)((e) => e.setGameFacet),
        m = (0, eb.P)((e) => e.setClippedWithFacet),
        f = (0, eb.P)((e) => e.clearFilters),
        h = (0, eb.P)((e) => e.setPendingContentFocus),
        x = (0, t_.H)(),
        g = null != o || null != c;
    function p(e) {
        return !g && r === e;
    }
    let j = a.useRef(!1),
        y = a.useCallback(() => {
            j.current && h(!0);
        }, [h]),
        v = a.useCallback(
            (e) => {
                (d(e), u(null), m(null), f(), y());
            },
            [d, u, m, f, y],
        ),
        b = a.useCallback(
            (e) => {
                (u(o === e ? null : e), m(null), d(ea.oH.ALL_CLIPS), f(), y());
            },
            [o, u, m, d, f, y],
        ),
        C = a.useCallback(() => {
            (0, eg.openUserSettings)(ex.X.CLIPS_PANEL);
        }, []),
        N = a.useMemo(() => t.map((e) => e.key), [t]),
        k = (0, I.A)(N),
        A = a.useMemo(() => new Map(k.map((e) => [e?.id, e])), [k]),
        E = (0, eo.GV)(),
        w = (0, l3.A)(E),
        { setFocus: P } = w,
        L = o ?? r;
    a.useEffect(() => {
        P(L);
    }, [P, L]);
    let { ref: M, onKeyDown: D, ..._ } = (0, lQ.LT)(w),
        T = a.useCallback(
            (e) => {
                j.current = e.key === lW.D$.ENTER || e.key === lW.D$.SPACE;
                try {
                    D(e);
                } finally {
                    j.current = !1;
                }
            },
            [D],
        );
    return (0, n.jsx)(lQ.hD, {
        navigator: w,
        children: (0, n.jsxs)("div", {
            className: l2.H$,
            ..._,
            tabIndex: -1,
            onKeyDown: T,
            ref: M,
            children: [
                (0, n.jsxs)("div", {
                    className: s()(l2.o3, l2.A9),
                    children: [
                        (0, n.jsx)(l9, {
                            itemId: ea.oH.HOME,
                            icon: (0, n.jsx)(lJ.HomeIcon, { size: "sm", color: "currentColor" }),
                            label: B.intl.string($.default.iVqj8B),
                            isSelected: p(ea.oH.HOME),
                            onClick: () => v(ea.oH.HOME),
                        }),
                        (0, n.jsx)(l9, {
                            itemId: ea.oH.ALL_CLIPS,
                            icon: (0, n.jsx)(H.ClipsIcon, { size: "sm", color: "currentColor" }),
                            label: B.intl.string(B.t.dPVrEv),
                            isSelected: p(ea.oH.ALL_CLIPS),
                            isDisabled: 0 === l.allClips,
                            badgeCount: i.allClips,
                            onClick: () => v(ea.oH.ALL_CLIPS),
                        }),
                        x &&
                            (0, n.jsx)(l9, {
                                itemId: ea.oH.AUTO_CLIPS,
                                icon: (0, n.jsx)(G.ClipsAutoIcon, { size: "sm", color: "currentColor" }),
                                label: B.intl.string($.default.ikNKf1),
                                isSelected: p(ea.oH.AUTO_CLIPS),
                                isDisabled: 0 === l.autoClips,
                                badgeCount: i.autoClips,
                                onClick: () => v(ea.oH.AUTO_CLIPS),
                            }),
                        (0, n.jsx)(l9, {
                            itemId: ea.oH.FAVORITES,
                            icon: (0, n.jsx)(tp.StarIcon, { size: "sm", color: "currentColor" }),
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
                            (0, n.jsx)("div", { className: l2.Gz }),
                            (0, n.jsx)(l0.Ip, {
                                className: s()(l2.UZ, l2.A9),
                                fade: !0,
                                children: t.map((e) => {
                                    let t = o === e.key;
                                    return (0, n.jsx)(
                                        l9,
                                        {
                                            itemId: e.key,
                                            icon: (0, n.jsx)(S.A, {
                                                game: A.get(e.key),
                                                size: S.M.SMALL,
                                                className: l2.az,
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
                    className: s()(l2.Ms, l2.A9),
                    children: (0, n.jsx)(l9, {
                        itemId: "settings",
                        icon: (0, n.jsx)(l1.SettingsIcon, { size: "sm", color: "currentColor" }),
                        label: B.intl.string(B.t["3D5yo/"]),
                        onClick: C,
                    }),
                }),
            ],
        }),
    });
}
var l4 = l(409067),
    l8 = l(314484);
function l7(e) {
    var t, i;
    let _,
        T,
        R,
        {
            channelId: H,
            onClose: G,
            picker: U,
            transitionState: O,
            initialEditingClipId: F,
            initialMainLink: z = ea.oH.HOME,
            ...K
        } = e;
    (0, en.A)();
    let { analyticsLocations: V } = (0, A.Ay)(k.A.CLIPS_GALLERY),
        q = U?.onPick,
        Y = (0, M.H)("ClipsGalleryModal") && null == U,
        X = U?.allowMultiSelect ?? !0,
        [Q, ei] = a.useState(new Set()),
        es = a.useRef(null),
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
            allClips: ef,
        } = (0, l4.ad)(U?.filterClip),
        eh = (0, c.bG)([L.Ay], () => L.Ay.getSettings().storageLocation),
        [ex, eg] = a.useState(!0);
    a.useEffect(() => {
        (async function () {
            eg(!0);
            try {
                await (0, D.Fb)(eh);
            } finally {
                eg(!1);
            }
        })().catch(() => {});
    }, [eh]);
    let { onShareClick: ep } = (0, el.A)(H);
    (a.useEffect(
        () => () => {
            (eb.P.getState().resetAll(), (0, D.Su)());
        },
        [],
    ),
        a.useEffect(() => {
            let e = eb.P.getState();
            null == e.gameFacet && null == e.clippedWithFacet && e.setActiveMainLink(z);
        }, [z]),
        (0, o.l0)(D._o));
    let ej = (0, c.bG)([L.Ay], () => L.Ay.getExportingClipIds().size > 0),
        [ey, ev] = a.useState(null != F ? "editing" : "gallery"),
        [eC, eN] = a.useState(F ?? null),
        ek = (0, c.bG)([L.Ay], () => (null != eC ? L.Ay.getClipById(eC) : null), [eC]),
        eA = (0, d.LA)(e3.nm),
        [eE, eI] = a.useState(!1);
    ((t = a.useCallback(() => eI(!0), [])),
        (i = eA && "gallery" === ey && !eE),
        (_ = a.useRef(Array(tN.length).fill(""))),
        (T = a.useRef(0)),
        (R = a.useRef(t)),
        a.useEffect(() => {
            R.current = t;
        }, [t]),
        a.useEffect(() => {
            if (!i) return;
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
                    ((e[T.current] = t.key.toLowerCase()), (T.current = (T.current + 1) % tN.length));
                    for (let t = 0; t < tN.length; t++) if (e[(T.current + t) % tN.length] !== tN[t]) return;
                    R.current();
                }
            }
            return (
                document.addEventListener("keydown", t, { capture: !0, passive: !0 }),
                () => {
                    (document.removeEventListener("keydown", t, { capture: !0 }), e.fill(""), (T.current = 0));
                }
            );
        }, [i]),
        a.useEffect(() => {
            if (eE)
                return (
                    document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0)
                );
            function e(e) {
                "Escape" === e.key && (e.preventDefault(), e.stopPropagation());
            }
        }, [eE]));
    let eS = a.useRef(ey);
    ((eS.current = ey), (a.useRef(eC).current = eC));
    let [ew, eP] = a.useState(null != F ? m.ip.ENTERED : m.ip.HIDDEN),
        eL = a.useRef(null),
        eM = (0, eb.P)((e) => e.gameFacet),
        eD = (0, eb.P)((e) => e.clippedWithFacet),
        e_ = (0, eb.P)((e) => e.activeMainLink),
        eT = (0, eb.P)((e) => e.currentPage),
        eR = eT === ea.fB.HOME,
        { ref: eH, height: eG = 64 } = (0, b.Ay)(eT),
        eU = 68 + eG,
        eO = eR ? 68 : eU - 16;
    a.useLayoutEffect(() => {
        er(0);
    }, [eT, er]);
    let eF = (0, eb.P)((e) => e.pendingContentFocus),
        ez = (0, eb.P)((e) => e.setPendingContentFocus),
        eK = a.useRef(null);
    a.useEffect(() => {
        if (!eF) return;
        let e = 0,
            t = 0;
        return (
            (t = requestAnimationFrame(function l() {
                let n = eK.current?.querySelector('[role="grid"] [role="button"]');
                if (null != n) {
                    (n.focus(), ez(!1));
                    return;
                }
                if (e++ < 10) {
                    t = requestAnimationFrame(l);
                    return;
                }
                ez(!1);
            })),
            () => cancelAnimationFrame(t)
        );
    }, [eF, ez]);
    let eV = (0, eb.P)(
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
        e_ === ea.oH.HOME && eV && eb.P.getState().setActiveMainLink(ea.oH.ALL_CLIPS);
    }, [e_, eV]);
    let e$ = a.useMemo(() => (null != eM ? [eM] : []), [eM]),
        eB = (0, I.A)(e$)[0] ?? null,
        eq = (0, c.bG)([w.default], () => (null != eD ? w.default.getUser(eD) : null), [eD]),
        eY = a.useMemo(() => {
            if (null != eM) return eo.find((e) => e.key === eM)?.name ?? B.intl.string(B.t.dPVrEv);
            if (null != eD) return null != eq ? (eq.globalName ?? eq.username) : eD;
            switch (e_) {
                case ea.oH.FAVORITES:
                    return B.intl.string(B.t["9rlCk1"]);
                case ea.oH.AUTO_CLIPS:
                    return B.intl.string($.default.ikNKf1);
                case ea.oH.HOME:
                    return B.intl.string($.default.iVqj8B);
                default:
                    return B.intl.string(B.t.dPVrEv);
            }
        }, [eM, eD, e_, eo, eq]),
        eX = a.useMemo(() => {
            if (null != eM) return eo.find((e) => e.key === eM)?.count ?? 0;
            if (null != eD) return ec.find((e) => e.key === eD)?.count ?? 0;
            switch (e_) {
                case ea.oH.HOME:
                    return null;
                case ea.oH.AUTO_CLIPS:
                    return eu.autoClips;
                case ea.oH.FAVORITES:
                    return eu.favorites;
                default:
                    return eu.allClips;
            }
        }, [eM, eD, e_, eo, ec, eu]),
        eQ = a.useCallback(() => {
            (ev("editing"), N.Ay.useReducedMotion && eP(m.ip.ENTERED));
        }, []),
        eW = a.useCallback((e) => {
            ei((t) => {
                let l = new Set(t);
                return (l.has(e) ? l.delete(e) : l.add(e), l);
            });
        }, []),
        eZ = a.useCallback(
            (e) => {
                (eN(e.id), eQ());
            },
            [eQ],
        ),
        eJ = a.useRef(null != F),
        e0 = a.useCallback(() => {
            ((eJ.current = !1), N.Ay.useReducedMotion && eN(null), ev("gallery"));
        }, []),
        e1 = a.useCallback(() => {
            eJ.current ? G() : e0();
        }, [e0, G]);
    (a.useEffect(() => {
        "editing" === ey && null == ek && e1();
    }, [ey, ek, e1]),
        a.useEffect(() => {
            function e(e) {
                "Escape" === e.key && "editing" === eS.current && eA && (e.stopPropagation(), e1());
            }
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [e1, G, eA]),
        a.useEffect(() => {
            function e(e) {
                if (
                    ("f" !== e.key && "F" !== e.key) ||
                    e.altKey ||
                    e.shiftKey ||
                    ((0, P.cX)() ? !e.metaKey || e.ctrlKey : !e.ctrlKey || e.metaKey) ||
                    !eA ||
                    "gallery" !== eS.current
                )
                    return;
                (e.preventDefault(), e.stopPropagation());
                let t = eb.P.getState();
                (t.currentPage === ea.fB.HOME && t.setActiveMainLink(ea.oH.ALL_CLIPS), t.setPendingSearchFocus(!0));
            }
            return (document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0));
        }, [eA]),
        a.useEffect(
            () =>
                "editing" === ey && null != eC
                    ? void (0, D.YK)(eC)
                    : ((0, D.TE)(),
                      () => {
                          (0, D.TE)();
                      }),
            [ey, eC],
        ));
    let e2 = a.useCallback(() => {
            ei(new Set());
        }, []),
        e9 = Q.size > 0,
        e6 = a.useCallback(() => {
            let e = ef.filter((e) => Q.has(e.id));
            (0, d.mM)(
                async () => {
                    let { default: t } = await l.e(913367).then(l.bind(l, 223818));
                    return (l) =>
                        (0, n.jsx)(t, {
                            ...l,
                            clips: e,
                            onAfterDelete: () => {
                                (e2(), l.onClose());
                            },
                        });
                },
                { stackingBehavior: "stack" },
            );
        }, [ef, Q, e2]),
        e4 = a.useCallback(async () => {
            let e = ef.filter((e) => Q.has(e.id));
            await ep({ clips: e, onShared: e2 });
        }, [ef, Q, ep, e2]),
        e8 = a.useCallback(
            async (e) => {
                0 !== e.length && (ei(new Set(e.map((e) => e.id))), await ep({ clips: e }), e2());
            },
            [ep, e2],
        ),
        e7 = a.useCallback(() => {
            let e = eb.P.getState();
            (e.setGameFacet(null),
                e.setClippedWithFacet(null),
                e.setActiveMainLink(ea.oH.ALL_CLIPS),
                e.setPendingSearchFocus(!0));
        }, []),
        te = a.useMemo(() => {
            let e = ef.filter((e) => Q.has(e.id));
            return e.length > 0 && e.every((e) => e.isFavorite);
        }, [ef, Q]),
        tt = a.useCallback(async () => {
            let e = ef.filter((e) => Q.has(e.id)),
                t = !te;
            (await Promise.all(e.filter((e) => e.isFavorite !== t).map((e) => (0, D.Yy)(e.id, { isFavorite: t }, !0))),
                e2());
        }, [ef, Q, te, e2]),
        tl = a.useMemo(() => {
            let e = 0,
                t = 0,
                l = 0;
            return (
                ef.forEach((n) => {
                    switch (n.decision?.signal?.type) {
                        case e3.Gy.MANUAL:
                            l++;
                            break;
                        case e3.Gy.DISTRIBUTED:
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
                    gallery_page: e_,
                }
            );
        }, [ef, e_]);
    (0, E.A)(
        { type: r.ImpressionTypes.MODAL, name: r.ImpressionNames.CLIP_GALLERY_VIEWED, properties: tl },
        { disableTrack: ex },
        [tl, ex],
    );
    let tn = a.useMemo(
        () => ({
            selectedClipIds: Q,
            toggleClipSelection: eW,
            clearSelection: e2,
            isMultiSelectMode: e9,
            picker: U,
            onShareSession: X ? e8 : void 0,
        }),
        [Q, eW, e2, e9, U, X, e8],
    );
    return (0, n.jsx)(A.f5, {
        value: V,
        children: (0, n.jsx)(e5.$.Provider, {
            value: tn,
            children: (0, n.jsx)(u.N, {
                onClose: G,
                transitionState: O,
                "aria-label": eE ? "Doggo Game" : void 0,
                ...K,
                children: eE
                    ? (0, n.jsx)(tC, { onClose: G })
                    : (0, n.jsxs)("div", {
                          className: l8.jT,
                          ref: eL,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: s()(l8.PD, "gallery" === ey && l8.vu),
                                  inert: "gallery" !== ey,
                                  children: [
                                      (0, n.jsx)(l6, { gamesFacet: eo, mainLinkCounts: eu, mainLinkNewCounts: em }),
                                      (0, n.jsxs)("div", {
                                          className: l8.Qs,
                                          ref: eK,
                                          style: {
                                              "--custom-clips-header-height": "68px",
                                              "--custom-clips-scroll-inset": `${eO}px`,
                                          },
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  ref: es,
                                                  className: s()(l8.$Q, !eR && l8.iF),
                                                  children: [
                                                      (0, n.jsxs)("div", {
                                                          className: l8.ev,
                                                          children: [
                                                              null != eM &&
                                                                  (0, n.jsx)(S.A, {
                                                                      game: eB,
                                                                      size: S.M.SMALL,
                                                                      className: l8.Ve,
                                                                      "aria-hidden": !0,
                                                                  }),
                                                              (0, n.jsx)(f.D, {
                                                                  variant: "heading-sm/semibold",
                                                                  color: "text-default",
                                                                  className: l8.Yn,
                                                                  children: eY,
                                                              }),
                                                              null == eM &&
                                                                  null == eD &&
                                                                  (e_ === ea.oH.AUTO_CLIPS ||
                                                                      (Y && e_ === ea.oH.HOME)) &&
                                                                  (0, n.jsx)(h.E, {
                                                                      icon: x.NitroWheelIcon,
                                                                      type: "early_access",
                                                                      variant: "expressive",
                                                                  }),
                                                              null != eX &&
                                                                  !eV &&
                                                                  (0, n.jsxs)("div", {
                                                                      className: l8.Vl,
                                                                      children: [
                                                                          (0, n.jsx)("span", {
                                                                              className: l8.FK,
                                                                              "aria-hidden": "true",
                                                                          }),
                                                                          (0, n.jsx)(g.E, {
                                                                              variant: "body-md/normal",
                                                                              color: "text-muted",
                                                                              children: B.intl.format(
                                                                                  $.default["+YIqQM"],
                                                                                  { count: eX },
                                                                              ),
                                                                          }),
                                                                      ],
                                                                  }),
                                                          ],
                                                      }),
                                                      (0, n.jsxs)("div", {
                                                          className: l8.o5,
                                                          children: [
                                                              Y &&
                                                                  (0, n.jsx)(W, {
                                                                      showOffEducation: "gallery" === ey && eA,
                                                                  }),
                                                              (0, n.jsxs)("div", {
                                                                  className: l8.$s,
                                                                  children: [
                                                                      (0, n.jsx)(p.m, {
                                                                          position: "bottom",
                                                                          text: B.intl.string(B.t["5h0QOP"]),
                                                                          children: (0, n.jsx)(j.K, {
                                                                              onClick: e7,
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
                                                                              onClick: G,
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
                                              eR
                                                  ? (0, n.jsx)(lX, {
                                                        filteredClips: ed,
                                                        totalClipCount: ef.length,
                                                        onEdit: eZ,
                                                        onClipClick: q,
                                                        isLoading: ex,
                                                        onScroll: er,
                                                    })
                                                  : (0, n.jsxs)("div", {
                                                        className: l8.LG,
                                                        children: [
                                                            (0, n.jsx)("div", {
                                                                className: l8.oP,
                                                                ref: eH,
                                                                children: (0, n.jsx)(t7, {
                                                                    allClips: ef,
                                                                    gamesFacet: eo,
                                                                    participantsFacet: ec,
                                                                }),
                                                            }),
                                                            (0, n.jsx)(th, {
                                                                onEdit: eZ,
                                                                channelId: H,
                                                                filteredClips: ed,
                                                                totalClipCount: ef.length,
                                                                onClipClick: q,
                                                                isLoading: ex,
                                                                topInset: eU,
                                                            }),
                                                        ],
                                                    }),
                                              X &&
                                                  e9 &&
                                                  (0, n.jsx)(tv, {
                                                      selectedCount: Q.size,
                                                      allSelectedFavorited: te,
                                                      onClear: e2,
                                                      onFavorite: tt,
                                                      onDelete: e6,
                                                      onShare: e4,
                                                      isSharing: ej,
                                                  }),
                                          ],
                                      }),
                                  ],
                              }),
                              (0, n.jsx)("div", {
                                  className: s()(l8.jN, "editing" === ey && l8.vu),
                                  inert: "editing" !== ey,
                                  onTransitionEnd: () => {
                                      switch (ey) {
                                          case "gallery":
                                              (eN(null), eP(m.ip.HIDDEN));
                                              break;
                                          case "editing":
                                              eP(m.ip.ENTERED);
                                      }
                                  },
                                  children:
                                      null != ek &&
                                      (0, n.jsx)(Z.p, {
                                          clip: ek,
                                          modalContainerRef: eL,
                                          children: (0, n.jsxs)(
                                              et.JQ,
                                              {
                                                  children: [
                                                      (0, n.jsx)(ee.A, {
                                                          transitionState: ew,
                                                          onClose: e1,
                                                          onBack: e0,
                                                      }),
                                                      (0, n.jsx)(J.A, { channelId: H, onClose: e1, onExit: G }),
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
