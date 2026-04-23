n.r(t), n.d(t, { useAppSidebarState: () => tP, default: () => tw });
var i = n(627968),
    r = n(64700),
    a = n(353640),
    l = n(574381),
    s = n(17928),
    o = n(312138),
    d = n(43990),
    u = n(346411),
    c = n(793943),
    _ = n(189252),
    A = n(985018);
function h() {
    let { activePanel: e } = (0, c.fy)(),
        t = e === c.HP.APPLICATION_TEST_MODE_DEBUG;
    return (0, i.jsx)(_.A, {
        onClick: () => {
            t ? (0, c.Jp)() : (0, c.nf)(c.HP.APPLICATION_TEST_MODE_DEBUG);
        },
        icon: u.P,
        tooltip: A.intl.string(A.t["9Isknj"]),
        selected: t,
    });
}
var E = n(587895),
    p = n(875444);
let m = (0, n(945810).mj)({
    name: "2026-01-bug-reporter",
    kind: "user",
    defaultConfig: { hasBugReporterAccess: !1 },
    variations: { 1: { hasBugReporterAccess: !0 } },
});
var I = n(192308),
    g = n(176781),
    C = n(447404),
    T = n(186111),
    f = n(969341),
    N = n(734066),
    S = n(274372),
    O = n(915618),
    L = n(361157),
    y = n(710315),
    b = n(338854),
    v = n(43105),
    D = n(372684),
    R = n(399925),
    M = n(665039);
function P(e) {
    let { onOpenClipsGallery: t, clipIconRef: n, lastClipsSession: a } = e,
        l = (0, s.bG)([S.A], () => {
            let e = S.A.getLastClipsSession()?.newClipIds;
            if (null == e) return null;
            let t = S.A.getClipIds().find((t) => e.includes(t));
            return null == t ? null : S.A.getClipById(t);
        }),
        o = (0, M.j)(l),
        d = r.useCallback(() => {
            (0, R.jA)();
        }, []);
    return null == l
        ? null
        : l.type !== D.nQ.SCREENSHOT && l.type !== D.nQ.VOICE_CLIP && null != o
          ? (0, i.jsx)(b.H, {
                targetElementRef: { current: n },
                position: "bottom",
                title: A.intl.string(A.t.JugHO7),
                body: A.intl.format(A.t["+qxkzC"], { count: a.newClipIds.length }),
                assetUrl: o,
                disableMediaViewer: !0,
                caretConfig: { align: "center" },
                action: { text: A.intl.string(A.t.tQPBml), onClick: t },
                onRequestClose: d,
            })
          : (0, i.jsx)(v.A, {
                targetElementRef: { current: n },
                position: "bottom",
                title: A.intl.string(A.t.JugHO7),
                body: A.intl.format(A.t["+qxkzC"], { count: a.newClipIds.length }),
                graphic: null != l.thumbnail ? { type: "image", src: l.thumbnail } : void 0,
                caretConfig: { align: "center" },
                actions: [{ text: A.intl.string(A.t.tQPBml), onClick: t }],
                onRequestClose: d,
            });
}
var w = n(696016);
function x(e) {
    let { canShowReminder: t = !1 } = e,
        a = (0, O.A)(f.Ay),
        { showClipsHeaderEntrypoint: l } = N.L_.useConfig({ location: "ClipsButton" }),
        { topBarButton: o } = y.$.useConfig({ location: "ClipsButton" }),
        {
            hasNewClips: d,
            lastClipsSession: u,
            remindersEnabled: c,
            hasAnyClipAnimations: h,
        } = (0, s.cf)([S.A], () => ({
            hasNewClips: S.A.getNewClipIds().length > 0,
            lastClipsSession: S.A.getLastClipsSession(),
            remindersEnabled: S.A.getSettings().remindersEnabled,
            hasAnyClipAnimations: S.A.hasAnyClipAnimations(),
        })),
        E = null != u && u.newClipIds.length > 0,
        p = (0, L.K)((e) => e.clipsButtonRef),
        m = (0, L.K)((e) => e.setClipsButtonRef),
        b = (0, s.bG)([T.A], () => T.A.hasLayers()),
        { preventIdle: v, allowIdle: D } = (0, C.o)("animation");
    function R() {
        (0, I.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("74068"), n.e("75674")]).then(n.bind(n, 867487));
                return (t) => (0, i.jsx)(e, { ...t });
            },
            { modalKey: w.nm },
        );
    }
    return (r.useEffect(() => (h ? v() : D(), () => D()), [h, v, D]), (l || o) && a)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  null != p &&
                      t &&
                      c &&
                      E &&
                      !(0, I.hasAnyModalOpen)() &&
                      !b &&
                      (0, i.jsx)(P, { clipIconRef: p, lastClipsSession: u, onOpenClipsGallery: R }),
                  (0, i.jsx)("div", {
                      ref: m,
                      children: (0, i.jsx)(_.A, {
                          icon: g.x,
                          showBadge: d,
                          tooltip: A.intl.string(A.t.MXaLEM),
                          onClick: R,
                      }),
                  }),
              ],
          })
        : null;
}
var U = n(503698),
    G = n.n(U),
    k = n(990078),
    j = n(939249),
    V = n(477155),
    H = n(935286),
    B = n(176522),
    F = n(963169),
    Y = n(228366),
    K = n(546859);
let W = B.GY.binds["0"],
    z = B.M$.binds["0"],
    q = (e) => {
        let { firstElementFocusJumpSectionProps: t = {} } = e,
            { canGoBack: n, canGoForward: a } = (function () {
                let e = r.useCallback(() => {
                        if (null == window || !("navigation" in window)) return { canGoBack: !1, canGoForward: !1 };
                        let e = window.navigation;
                        return { canGoBack: e.canGoBack ?? !1, canGoForward: e.canGoForward ?? !1 };
                    }, []),
                    [t, n] = r.useState(e);
                return (
                    r.useEffect(() => {
                        let t = () => {
                            n(e());
                        };
                        return (
                            Y.h.subscribe("ROUTE_CHANGED", t),
                            Y.h.subscribe("LOGOUT", t),
                            () => {
                                Y.h.unsubscribe("ROUTE_CHANGED", t), Y.h.unsubscribe("LOGOUT", t);
                            }
                        );
                    }, [e]),
                    t
                );
            })();
        return (0, i.jsxs)("div", {
            className: K.y_,
            children: [
                (0, i.jsx)(k.m, {
                    ariaHidden: !0,
                    shouldShow: n,
                    text: A.intl.string(A.t.B9vzIP),
                    keyboardShortcut: W,
                    children: (0, i.jsx)(j.D, {
                        "aria-label": A.intl.string(A.t.B9vzIP),
                        "aria-disabled": !n,
                        tabIndex: n ? 0 : -1,
                        className: G()(K.x6, K.aX, { [K.r9]: !n }),
                        onClick: () => (0, F.OE)("nav_button"),
                        ...t,
                        children: (0, i.jsx)(V.r, { size: "sm", color: "currentColor" }),
                    }),
                }),
                (0, i.jsx)(k.m, {
                    ariaHidden: !0,
                    shouldShow: a,
                    text: A.intl.string(A.t["9KJ29e"]),
                    keyboardShortcut: z,
                    children: (0, i.jsx)(j.D, {
                        "aria-label": A.intl.string(A.t["9KJ29e"]),
                        "aria-disabled": !a,
                        tabIndex: a ? 0 : -1,
                        className: G()(K.x6, K.sY, { [K.r9]: !a }),
                        onClick: () => (0, F.Qb)("nav_button"),
                        children: (0, i.jsx)(H.E, { size: "sm", color: "currentColor" }),
                    }),
                }),
            ],
        });
    };
var $ = n(291445),
    X = n(661531),
    Z = n(349288),
    Q = n(290136),
    J = n(287809),
    ee = n(954571),
    et = n(975571),
    en = n(427262),
    ei = n(652215);
function er(e) {
    let { focusSectionProps: t } = e,
        n = (0, s.bG)([J.default], () => J.default.getCurrentUser()),
        r = (0, en.mv)(n);
    return (0, i.jsx)(Z.Anchor, {
        href: et.C,
        target: "_blank",
        tabIndex: -1,
        children: (0, i.jsx)(_.A, {
            color: r ? X.A.unsafe_rawColors.GREEN_360.css : "currentColor",
            onClick: () => ee.default.track(ei.HAw.HELP_CLICKED, { highlighted: r }),
            icon: Q.c,
            tooltip: A.intl.string(A.t["cqEoj/"]),
            ...t,
        }),
    });
}
var ea = n(550079),
    el = n(477782),
    es = n(92446),
    eo = n(509434),
    ed = n(922016),
    eu = n(975807);
let ec = () =>
    (0, I.openModalLazy)(async () => {
        let { default: e } = await n.e("31897").then(n.bind(n, 317248));
        return (t) => (0, i.jsx)(e, { ...t });
    });
function e_(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(ea.W, {
        "data-menu-migrated": !0,
        onSelect: () => {},
        navId: "staff-help-popout",
        variant: "fixed",
        onClose: t,
        "aria-label": A.intl.string(A.t.HpQykc),
        children: (0, i.jsxs)(el.rX, {
            children: [
                (0, i.jsx)(el.Dr, {
                    id: "staff-help-bug-reporter",
                    label: A.intl.string(A.t["5LqopY"]),
                    icon: es.Q,
                    leadingAccessory: { type: "icon", icon: es.Q },
                    action: ec,
                }),
                (0, i.jsx)(el.Dr, {
                    id: "staff-help-center",
                    label: "Go to Help Center",
                    icon: eo.I,
                    leadingAccessory: { type: "icon", icon: Q.c },
                    trailingIndicator: { type: "icon", icon: eo.I },
                    action: () => (0, eu.A)(et.C),
                }),
            ],
        }),
    });
}
function eA(e) {
    let { focusSectionProps: t } = e,
        [n, a] = r.useState(!1),
        [l, s] = r.useState(0),
        o = r.useRef(null),
        d = (e) => {
            clearTimeout(l),
                s(
                    setTimeout(() => {
                        a(e);
                    }, 100),
                );
        };
    return (0, i.jsx)("div", {
        onMouseEnter: () => d(!0),
        onMouseLeave: () => d(!1),
        children: (0, i.jsx)(ed.Y, {
            targetElementRef: o,
            shouldShow: n,
            animation: ed.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            onRequestOpen: () => a(!0),
            onRequestClose: () => a(!1),
            renderPopout: () => (0, i.jsx)(e_, { onClose: () => a(!1) }),
            children: (e, n) => {
                let { isShown: r } = n;
                return (0, i.jsx)(_.A, {
                    ref: o,
                    onClick: ec,
                    icon: es.Q,
                    "aria-label": A.intl.string(A.t["5LqopY"]),
                    selected: r,
                    ...t,
                });
            },
        }),
    });
}
var eh = n(32880),
    eE = n(157559),
    ep = n(987482);
let em = "UPDATE_NOT_AVAILABLE";
function eI(e) {
    em = e.type;
}
class eg extends s.Ay.Store {
    static displayName = "AutoUpdateStore";
    getState() {
        return em;
    }
}
let eC = new eg(Y.h, {
    CHECKING_FOR_UPDATES: eI,
    UPDATE_NOT_AVAILABLE: eI,
    UPDATE_AVAILABLE: eI,
    UPDATE_MANUALLY: eI,
    UPDATE_ERROR: eI,
    UPDATE_DOWNLOADED: eI,
});
var eT = n(763827),
    ef = n(82819);
class eN extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.memoizedMode ? { memoizedMode: e.mode, clicked: !1 } : null;
    }
    state = { memoizedMode: this.props.mode, clicked: !1 };
    handleDownloadApps() {
        (0, I.openModal)((e) => (0, i.jsx)(ep.default, { source: "Links", ...e }));
    }
    handleInstallDownload = () => {
        eT.A.isConnected()
            ? eE.A.show({
                  title: A.intl.string(A.t.tiu1ly),
                  body: A.intl.string(A.t["zK+lqW"]),
                  onConfirm: this.doUpdate,
                  cancelText: A.intl.string(A.t["ETE/oC"]),
                  confirmText: A.intl.string(A.t["QDX/qu"]),
                  confirmVariant: "critical-primary",
              })
            : this.doUpdate();
    };
    doUpdate = () => {
        this.state.clicked || (this.setState({ clicked: !0 }), Y.h.dispatch({ type: "AUTO_UPDATER_QUIT_AND_INSTALL" }));
    };
    render() {
        let e = "UPDATE_AVAILABLE" === this.props.mode,
            t = "UPDATE_DOWNLOADED" === this.props.mode || "UPDATE_MANUALLY" === this.props.mode;
        return e || t
            ? (0, i.jsx)(_.A, {
                  tooltip: e ? A.intl.string(A.t["zp9d/4"]) : A.intl.string(A.t.u18OXF),
                  color: X.A.unsafe_rawColors.GREEN_360.css,
                  colorClass: e ? ef.z : void 0,
                  onClick: this.handleInstallDownload,
                  icon: eh.s,
                  disabled: e,
              })
            : null;
    }
}
let eS = s.Ay.connectStores([eC], () => ({ mode: eC.getState() }))(eN);
var eO = n(873263),
    eL = n(782603),
    ey = n(27232),
    eb = n(111159),
    ev = n(768622),
    eD = n(836480),
    eR = n(403581),
    eM = n(34188),
    eP = n(214947),
    ew = n(177953),
    ex = n(577473),
    eU = n(834730),
    eG = n(313281),
    ek = n(5180),
    ej = n(91242),
    eV = n(548118),
    eH = n(394953),
    eB = n(734057),
    eF = n(71393),
    eY = n(309010),
    eK = n(967198),
    eW = n(486020),
    ez = n(165610),
    eq = n(602339),
    e$ = n(957896);
function eX() {
    let e,
        t = (0, eO.zy)(),
        n = (0, s.bG)([eK.A], () => eK.A.getGuildId()),
        r = (0, s.bG)([eY.A], () => eY.A.getChannelId()),
        a = (0, s.bG)([eB.A], () => eB.A.getChannel(r), [r]),
        l = n ?? a?.guild_id,
        o = (0, s.bG)([eF.A], () => eF.A.getGuild(l), [l]),
        d = (0, eG.DZ)(),
        u = (0, eH.lI)(),
        { application: c, isFrameInFocusedMode: _ } = (0, s.cf)([E.A, ej.A], () => {
            let e = ej.A.getConnectedFrame();
            return {
                application: E.A.getApplication(e?.applicationId),
                isFrameInFocusedMode: ej.A.getFrameLayoutMode() === ez.y.FOCUSED,
            };
        }),
        h = null != c ? eW.Ay.getApplicationIconURL({ id: c.id, icon: c.icon, bot: c.bot }) : void 0,
        p = null;
    return (null != c && _
        ? ((e = c.name),
          (p = (0, i.jsx)("img", {
              className: e$.Z2,
              alt: A.intl.string(A.t.X4IxWL),
              src: h,
              "aria-hidden": !0,
              draggable: !1,
          })))
        : u
          ? ((e = A.intl.string(A.t.HcoRu0)), (p = (0, i.jsx)(eL.X, { size: "sm" })))
          : null != o
            ? ((e = (0, ek.YC)(o)),
              (p = d
                  ? (0, i.jsx)(ey.G, { size: "sm" })
                  : (0, i.jsx)(eV.Ay, { guild: o, size: eV.Ay.Sizes.SMOL, active: !0, className: e$.$f })))
            : null != a && (a.isDM() || a.isGroupDM())
              ? ((e = A.intl.string(A.t.YUU0RF)), (p = (0, i.jsx)(eb.p, { size: "sm" })))
              : t.pathname.startsWith(ei.BVt.ICYMI)
                ? ((e = A.intl.string(A.t["jnXV/V"])), (p = (0, i.jsx)(ev.g, { size: "sm" })))
                : t.pathname.startsWith(ei.BVt.GLOBAL_DISCOVERY)
                  ? ((e = A.intl.string(A.t["4nEZLk"])), (p = (0, i.jsx)(eD.Q, { size: "sm" })))
                  : t.pathname.startsWith(ei.BVt.NITRO_HOME)
                    ? ((e = A.intl.string(A.t.Ipxkog)), (p = (0, i.jsx)(eR.t, { size: "sm" })))
                    : t.pathname.startsWith(ei.BVt.COLLECTIBLES_SHOP)
                      ? ((e = A.intl.string(A.t.pWG4ze)), (p = (0, i.jsx)(eM.U, { size: "sm" })))
                      : t.pathname.startsWith(ei.BVt.FRIENDS)
                        ? ((e = A.intl.string(A.t.TdEu5X)), (p = (0, i.jsx)(eP.$, { size: "sm" })))
                        : t.pathname.startsWith(ei.BVt.FAMILY_CENTER)
                          ? ((e = A.intl.string(eq.default.RZqaJn)), (p = (0, i.jsx)(ew.n, { size: "sm" })))
                          : t.pathname.startsWith(ei.BVt.QUEST_HOME) &&
                            ((e = A.intl.string(A.t.JALI2K)), (p = (0, i.jsx)(ex.r, { size: "sm" }))),
    null == e || "" === e)
        ? null
        : (0, i.jsxs)("div", {
              className: e$.DD,
              children: [p, (0, i.jsx)(eU.E, { variant: "text-sm/medium", lineClamp: 1, children: e })],
          });
}
var eZ = n(851109),
    eQ = n(877227),
    eJ = n(319354),
    e0 = n(331322),
    e1 = n(696986),
    e2 = n(573435),
    e6 = n(418842),
    e5 = n(723702),
    e4 = n(355216),
    e3 = n(625864),
    e8 = n(393058);
let e7 = { cozy: 0, default: 0, compact: 0 },
    e9 = { cozy: 36, default: 24, compact: 14 },
    te = { cozy: 95, default: 84, compact: 72 };
function tt(e) {
    let { onClick: t, selectedOverride: n = !1, popoutProps: a, ref: l, focusSectionProps: s } = e,
        [o, d] = r.useState(!1),
        u = (0, eH.lI)(),
        c = n || u,
        _ = n || c,
        h = (0, i.jsx)(eL.X, {
            className: e8.Kk,
            color: o || _ ? X.A.colors.ICON_STRONG : X.A.colors.ICON_MUTED,
            size: "sm",
        }),
        { badge: E, badgeType: p } = (0, e4.ux)({ isSelected: c }),
        m = (0, e5.isDesktop)(),
        I = (0, e6.C)(),
        g = (0, e5.isMac)() ? e7[I] : m ? e9[I] : te[I];
    return (0, i.jsxs)(e0.B, {
        gap: 0,
        direction: "horizontal",
        children: [
            (0, i.jsx)(e1.h, { size: g, horizontal: !0 }),
            (0, i.jsx)(k.m, {
                asContainer: !0,
                shouldShow: !_,
                text: A.intl.string(A.t.HcoRu0),
                children: (0, i.jsxs)(j.D, {
                    innerRef: l,
                    className: e8.OV,
                    ...s,
                    ...a,
                    onMouseEnter: () => {
                        d(!0);
                    },
                    onMouseLeave: () => {
                        d(!1);
                    },
                    onClick: () => {
                        t?.(), a?.onClick?.();
                    },
                    children: [
                        (0, i.jsx)("div", {
                            className: G()(e8.P0, null),
                            children:
                                "unread" === p
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(e2.Ay, {
                                                  width: eJ.E.sm,
                                                  height: eJ.E.sm,
                                                  mask: e2.Ay.Masks.HEADER_BAR_BADGE_BOTTOM,
                                                  children: h,
                                              }),
                                              (0, i.jsx)("div", { className: e8.Zm }),
                                          ],
                                      })
                                    : h,
                        }),
                        E,
                    ],
                }),
            }),
        ],
    });
}
function tn() {
    let { focusSectionProps: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = r.useRef(null),
        { notificationCenterVariant: n } = (0, eZ.X8)({ location: "NotificationsInboxButton" }),
        a = (0, s.bG)([eY.A], () => eY.A.getChannelId()),
        l = r.useMemo(() => ei.BVt.CHANNEL(ei.gNP, a ?? void 0), [a]),
        o = (0, e4.HN)();
    return n === eZ.U5.SIDEBAR
        ? (0, i.jsx)(tt, {
              onClick: () => {
                  o(), (0, eQ.pX)(l);
              },
              focusSectionProps: e,
          })
        : n === eZ.U5.POPOUT
          ? (0, i.jsx)(e3.A, {
                targetElementRef: t,
                popoutPosition: "bottom",
                popoutAlign: "left",
                spacing: 2,
                children: (n, r, a) =>
                    (0, i.jsx)(tt, {
                        ref: t,
                        selectedOverride: r,
                        onClick: () => {
                            o(), n();
                        },
                        popoutProps: a,
                        focusSectionProps: e,
                    }),
            })
          : null;
}
var ti = n(567249),
    tr = n(912592),
    ta = n(554146),
    tl = n(932001),
    ts = n(966597),
    to = n(49999),
    td = n(936037);
let tu = ta.M.FOR_LATER_POPOUT_COACHMARK;
function tc(e) {
    let { location: t, targetElementRef: n } = e,
        { enabled: r, inInbox: a } = ts.A.useConfig({ location: "ForLaterCoachmarkWeb" }),
        [l, s] = (0, tl.kn)(r && t === (a ? "inbox-button" : "bookmarks-button") ? [tu] : [], void 0);
    return l !== tu
        ? null
        : (0, i.jsx)(v.A, {
              targetElementRef: n,
              gradientColor: "purple",
              position: "bottom",
              align: "right",
              shouldShow: !0,
              caretConfig: { align: "end" },
              onRequestClose: () => s(to.i.USER_DISMISS),
              title: A.intl.string(A.t.qPbFK2),
              body: A.intl.string(A.t.URrJq1),
              actions: [{ text: A.intl.string(A.t["NX+WJN"]), onClick: () => s(to.i.USER_DISMISS) }],
              graphic: { type: "image", src: td },
          });
}
var t_ = n(222823),
    tA = n(371911),
    th = n(790782);
function tE(e) {
    let { onOpen: t, onClose: n, "data-jump-section": a } = e,
        l = (0, s.bG)([J.default], () => J.default.getCurrentUser()),
        o = r.useRef(null),
        d = (0, s.bG)([t_.Ay], () => l?.id != null && t_.Ay.getMentionCount(l.id, th.P.NOTIFICATION_CENTER) > 0);
    return (0, i.jsx)(tA.C, {
        targetElementRef: o,
        onOpen: t,
        onClose: n,
        badgeState: { badgeForYou: d },
        popoutPosition: "bottom",
        popoutAlign: "right",
        children: (e, t, n, r) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(_.A, {
                        ...n,
                        icon: tr.K,
                        tooltip: A.intl.string(A.t.GSmTKJ),
                        onClick: e,
                        showBadge: d || r,
                        selected: t,
                        "data-jump-section": a,
                        ref: o,
                    }),
                    (0, i.jsx)(tc, { location: "inbox-button", targetElementRef: o }),
                ],
            }),
    });
}
var tp = n(606096),
    tm = n(251333);
function tI(e) {
    let { onOpen: t, onClose: n } = e;
    return (0, i.jsx)(tm.$, {
        onOpen: t,
        onClose: n,
        popoutPosition: "bottom",
        popoutAlign: "right",
        children: (e, t, n, r, a) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(_.A, {
                        ...n,
                        ref: a,
                        onClick: e,
                        icon: tp.c,
                        tooltip: A.intl.string(A.t["2pAkDA"]),
                        selected: t,
                        showBadge: r,
                    }),
                    (0, i.jsx)(tc, { location: "bookmarks-button", targetElementRef: a }),
                ],
            }),
    });
}
var tg = n(97469),
    tC = n(253932),
    tT = n(430363);
function tf() {
    return null;
}
var tN = n(540999),
    tS = n(147964),
    tO = n(531685),
    tL = n(19575),
    ty = n(475815),
    tb = n(268218),
    tv = n(71855);
n(801416);
let tD = (0, tb.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("57174"),
                n.e("94678"),
                n.e("1856"),
                n.e("83815"),
                n.e("82486"),
                n.e("40393"),
                n.e("6159"),
                n.e("77602"),
                n.e("33773"),
                n.e("53668"),
                n.e("86546"),
                n.e("15373"),
                n.e("14875"),
                n.e("2736"),
                n.e("62175"),
                n.e("52803"),
                n.e("92630"),
                n.e("69059"),
                n.e("84114"),
                n.e("96817"),
                n.e("33098"),
                n.e("37886"),
                n.e("23324"),
                n.e("91652"),
                n.e("25013"),
                n.e("98083"),
                n.e("95782"),
                n.e("40114"),
                n.e("19119"),
                n.e("83518"),
                n.e("84704"),
                n.e("67646"),
                n.e("72649"),
                n.e("71018"),
                n.e("92007"),
                n.e("39967"),
                n.e("68515"),
                n.e("38249"),
                n.e("40976"),
                n.e("85216"),
                n.e("39849"),
                n.e("96975"),
                n.e("83438"),
                n.e("4787"),
                n.e("81161"),
                n.e("12942"),
                n.e("81250"),
                n.e("24805"),
                n.e("21595"),
                n.e("57648"),
                n.e("8878"),
            ]).then(n.bind(n, 540177)),
        webpackId: 540177,
    }),
    tR = () => Promise.all([n.e("37886"), n.e("91803")]).then(n.bind(n, 496879)),
    tM = (0, tb.Fe)({ createPromise: tR, webpackId: 496879 }),
    tP = (0, a.v)(() => ({ isOpen: !0 })),
    tw = r.memo(function () {
        r.useLayoutEffect(() => {
            tL.Ay.setMinimumSize(800, 500);
        }, []);
        let { notificationCenterVariant: e, entrypoint: t } = (0, eZ.X8)({ location: "AppTitleBar" }),
            { hasBugReporterAccess: n } = m.useConfig({ location: "HeaderBar" }),
            a = (0, s.bG)([tN.A], () => tN.A.isDeveloper),
            u = (0, tT.Uk)("VoiceDareTitleBarButton"),
            c = (0, s.bG)(
                [tS.A, E.A],
                () =>
                    tC.Q_.getSetting() &&
                    null != tS.A.testModeApplicationId &&
                    null != E.A.getApplication(tS.A.testModeApplicationId) &&
                    (0, p.A)(E.A.getApplication(tS.A.testModeApplicationId)),
            ),
            _ = null !== e && t === eZ.RK.TITLE_BAR_LEFT,
            A = null === e,
            { enabled: I, inInbox: g } = ts.A.useConfig({ location: "AppTitleBar" });
        r.useLayoutEffect(() => {
            tL.Ay.setMinimumSize(800, 500);
        }, []);
        let C = (0, tg.NC)(),
            T = (0, s.bG)([tO.A, ti.A], () => (0, ty._U)()),
            f = (0, l.xl)(),
            N = (function (e) {
                let { showBackForwardButtons: t, showNotificationsInbox: n, showRecentsButton: i } = e;
                return r.useMemo(
                    () => (t ? "BACK_FORWARD_NAVIGATION" : n ? "NOTIFICATIONS_INBOX" : i ? "RECENTS" : "HELP"),
                    [t, n, i],
                );
            })({ showBackForwardButtons: f, showNotificationsInbox: _, showRecentsButton: A }),
            { hasFriendList: S } = (0, $.K)("friends-button");
        return (r.useEffect(() => {
            S && tR();
        }, [S]),
        T)
            ? null
            : (0, i.jsx)(o.sk, {
                  children: (e) =>
                      (0, i.jsx)(d.N, {
                          theme: C,
                          children: (t) =>
                              (0, i.jsx)(tv.cq, {
                                  className: t,
                                  leading: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          f &&
                                              (0, i.jsx)(q, {
                                                  firstElementFocusJumpSectionProps:
                                                      "BACK_FORWARD_NAVIGATION" === N ? e : void 0,
                                              }),
                                          _ &&
                                              (0, i.jsx)(tn, {
                                                  focusSectionProps: "NOTIFICATIONS_INBOX" === N ? e : void 0,
                                              }),
                                      ],
                                  }),
                                  title: (0, i.jsx)(eX, {}),
                                  trailing: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          S && (0, i.jsx)(tM, {}),
                                          u ? (0, i.jsx)(tf, {}) : null,
                                          !1,
                                          (0, i.jsx)(x, { canShowReminder: !0 }),
                                          I && !g && (0, i.jsx)(tI, {}),
                                          A && (0, i.jsx)(tE, { ...("RECENTS" === N ? e : {}) }),
                                          n
                                              ? (0, i.jsx)(eA, { focusSectionProps: "HELP" === N ? e : void 0 })
                                              : (0, i.jsx)(er, { focusSectionProps: "HELP" === N ? e : void 0 }),
                                          a && (0, i.jsx)(tD, {}),
                                          c && (0, i.jsx)(h, {}),
                                          (0, i.jsx)(eS, {}),
                                      ],
                                  }),
                              }),
                      }),
              });
    });
