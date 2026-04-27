n.r(t), n.d(t, { useAppSidebarState: () => t_, default: () => tA });
var i = n(627968),
    r = n(64700),
    a = n(353640),
    l = n(574381),
    s = n(17928),
    o = n(312138),
    d = n(43990),
    c = n(346411),
    u = n(793943),
    _ = n(189252),
    A = n(985018);
function h() {
    let { activePanel: e } = (0, u.fy)(),
        t = e === u.HP.APPLICATION_TEST_MODE_DEBUG;
    return (0, i.jsx)(_.A, {
        onClick: () => {
            t ? (0, u.Jp)() : (0, u.nf)(u.HP.APPLICATION_TEST_MODE_DEBUG);
        },
        icon: c.P,
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
    f = n(186111),
    T = n(969341),
    N = n(734066),
    S = n(274372),
    L = n(915618),
    y = n(361157),
    O = n(710315),
    b = n(338854),
    v = n(43105),
    R = n(372684),
    P = n(399925),
    D = n(665039);
function x(e) {
    let { onOpenClipsGallery: t, clipIconRef: n, lastClipsSession: a } = e,
        l = (0, s.bG)([S.A], () => {
            let e = S.A.getLastClipsSession()?.newClipIds;
            if (null == e) return null;
            let t = S.A.getClipIds().find((t) => e.includes(t));
            return null == t ? null : S.A.getClipById(t);
        }),
        o = (0, D.j)(l),
        d = r.useCallback(() => {
            (0, P.jA)();
        }, []);
    return null == l
        ? null
        : l.type !== R.nQ.SCREENSHOT && l.type !== R.nQ.VOICE_CLIP && null != o
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
function M(e) {
    let { canShowReminder: t = !1 } = e,
        a = (0, L.A)(T.Ay),
        { showClipsHeaderEntrypoint: l } = N.L_.useConfig({ location: "ClipsButton" }),
        { topBarButton: o } = O.$.useConfig({ location: "ClipsButton" }),
        {
            hasNewClips: d,
            lastClipsSession: c,
            remindersEnabled: u,
            hasAnyClipAnimations: h,
        } = (0, s.cf)([S.A], () => ({
            hasNewClips: S.A.getNewClipIds().length > 0,
            lastClipsSession: S.A.getLastClipsSession(),
            remindersEnabled: S.A.getSettings().remindersEnabled,
            hasAnyClipAnimations: S.A.hasAnyClipAnimations(),
        })),
        E = null != c && c.newClipIds.length > 0,
        p = (0, y.K)((e) => e.clipsButtonRef),
        m = (0, y.K)((e) => e.setClipsButtonRef),
        b = (0, s.bG)([f.A], () => f.A.hasLayers()),
        { preventIdle: v, allowIdle: R } = (0, C.o)("animation");
    function P() {
        (0, I.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("74068"), n.e("41120")]).then(n.bind(n, 867487));
                return (t) => (0, i.jsx)(e, { ...t });
            },
            { modalKey: w.nm },
        );
    }
    return (r.useEffect(() => (h ? v() : R(), () => R()), [h, v, R]), (l || o) && a)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  null != p &&
                      t &&
                      u &&
                      E &&
                      !(0, I.hasAnyModalOpen)() &&
                      !b &&
                      (0, i.jsx)(x, { clipIconRef: p, lastClipsSession: c, onOpenClipsGallery: P }),
                  (0, i.jsx)("div", {
                      ref: m,
                      children: (0, i.jsx)(_.A, {
                          icon: g.x,
                          showBadge: d,
                          tooltip: A.intl.string(A.t.MXaLEM),
                          onClick: P,
                      }),
                  }),
              ],
          })
        : null;
}
var U = n(503698),
    G = n.n(U),
    j = n(990078),
    k = n(939249),
    V = n(477155),
    F = n(935286),
    H = n(176522),
    B = n(963169),
    Y = n(228366),
    $ = n(546859);
let z = H.GY.binds["0"],
    W = H.M$.binds["0"],
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
            className: $.y_,
            children: [
                (0, i.jsx)(j.m, {
                    ariaHidden: !0,
                    shouldShow: n,
                    text: A.intl.string(A.t.B9vzIP),
                    keyboardShortcut: z,
                    children: (0, i.jsx)(k.D, {
                        "aria-label": A.intl.string(A.t.B9vzIP),
                        "aria-disabled": !n,
                        tabIndex: n ? 0 : -1,
                        className: G()($.x6, $.aX, { [$.r9]: !n }),
                        onClick: () => (0, B.OE)("nav_button"),
                        ...t,
                        children: (0, i.jsx)(V.r, { size: "sm", color: "currentColor" }),
                    }),
                }),
                (0, i.jsx)(j.m, {
                    ariaHidden: !0,
                    shouldShow: a,
                    text: A.intl.string(A.t["9KJ29e"]),
                    keyboardShortcut: W,
                    children: (0, i.jsx)(k.D, {
                        "aria-label": A.intl.string(A.t["9KJ29e"]),
                        "aria-disabled": !a,
                        tabIndex: a ? 0 : -1,
                        className: G()($.x6, $.sY, { [$.r9]: !a }),
                        onClick: () => (0, B.Qb)("nav_button"),
                        children: (0, i.jsx)(F.E, { size: "sm", color: "currentColor" }),
                    }),
                }),
            ],
        });
    };
var K = n(291445),
    Q = n(661531),
    X = n(349288),
    Z = n(290136),
    J = n(287809),
    ee = n(954571),
    et = n(975571),
    en = n(427262),
    ei = n(652215);
function er(e) {
    let { focusSectionProps: t } = e,
        n = (0, s.bG)([J.default], () => J.default.getCurrentUser()),
        r = (0, en.mv)(n);
    return (0, i.jsx)(X.Anchor, {
        href: et.C,
        target: "_blank",
        tabIndex: -1,
        children: (0, i.jsx)(_.A, {
            color: r ? Q.A.unsafe_rawColors.GREEN_360.css : "currentColor",
            onClick: () => ee.default.track(ei.HAw.HELP_CLICKED, { highlighted: r }),
            icon: Z.c,
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
    ec = n(975807);
let eu = () =>
    (0, I.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("28367"), n.e("22261")]).then(n.bind(n, 317248));
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
                    action: eu,
                }),
                (0, i.jsx)(el.Dr, {
                    id: "staff-help-center",
                    label: "Go to Help Center",
                    icon: eo.I,
                    leadingAccessory: { type: "icon", icon: Z.c },
                    trailingIndicator: { type: "icon", icon: eo.I },
                    action: () => (0, ec.A)(et.C),
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
                    onClick: eu,
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
var ef = n(763827),
    eT = n(82819);
class eN extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.memoizedMode ? { memoizedMode: e.mode, clicked: !1 } : null;
    }
    state = { memoizedMode: this.props.mode, clicked: !1 };
    handleDownloadApps() {
        (0, I.openModal)((e) => (0, i.jsx)(ep.default, { source: "Links", ...e }));
    }
    handleInstallDownload = () => {
        ef.A.isConnected()
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
                  color: Q.A.unsafe_rawColors.GREEN_360.css,
                  colorClass: e ? eT.z : void 0,
                  onClick: this.handleInstallDownload,
                  icon: eh.s,
                  disabled: e,
              })
            : null;
    }
}
let eS = s.Ay.connectStores([eC], () => ({ mode: eC.getState() }))(eN);
var eL = n(873263),
    ey = n(782603),
    eO = n(27232),
    eb = n(111159),
    ev = n(768622),
    eR = n(836480),
    eP = n(403581),
    eD = n(34188),
    ex = n(214947),
    ew = n(177953),
    eM = n(577473),
    eU = n(834730),
    eG = n(313281),
    ej = n(5180),
    ek = n(91242),
    eV = n(548118),
    eF = n(394953),
    eH = n(734057),
    eB = n(71393),
    eY = n(309010),
    e$ = n(967198),
    ez = n(486020),
    eW = n(165610),
    eq = n(602339),
    eK = n(957896);
function eQ() {
    let e,
        t = (0, eL.zy)(),
        n = (0, s.bG)([e$.A], () => e$.A.getGuildId()),
        r = (0, s.bG)([eY.A], () => eY.A.getChannelId()),
        a = (0, s.bG)([eH.A], () => eH.A.getChannel(r), [r]),
        l = n ?? a?.guild_id,
        o = (0, s.bG)([eB.A], () => eB.A.getGuild(l), [l]),
        d = (0, eG.DZ)(),
        c = (0, eF.lI)(),
        { application: u, isFrameInFocusedMode: _ } = (0, s.cf)([E.A, ek.A], () => {
            let e = ek.A.getConnectedFrame();
            return {
                application: E.A.getApplication(e?.applicationId),
                isFrameInFocusedMode: ek.A.getFrameLayoutMode() === eW.y.FOCUSED,
            };
        }),
        h = null != u ? ez.Ay.getApplicationIconURL({ id: u.id, icon: u.icon, bot: u.bot }) : void 0,
        p = null;
    return (null != u && _
        ? ((e = u.name),
          (p = (0, i.jsx)("img", {
              className: eK.Z2,
              alt: A.intl.string(A.t.X4IxWL),
              src: h,
              "aria-hidden": !0,
              draggable: !1,
          })))
        : c
          ? ((e = A.intl.string(A.t.HcoRu0)), (p = (0, i.jsx)(ey.X, { size: "sm" })))
          : null != o
            ? ((e = (0, ej.YC)(o)),
              (p = d
                  ? (0, i.jsx)(eO.G, { size: "sm" })
                  : (0, i.jsx)(eV.Ay, { guild: o, size: eV.Ay.Sizes.SMOL, active: !0, className: eK.$f })))
            : null != a && (a.isDM() || a.isGroupDM())
              ? ((e = A.intl.string(A.t.YUU0RF)), (p = (0, i.jsx)(eb.p, { size: "sm" })))
              : t.pathname.startsWith(ei.BVt.ICYMI)
                ? ((e = A.intl.string(A.t["jnXV/V"])), (p = (0, i.jsx)(ev.g, { size: "sm" })))
                : t.pathname.startsWith(ei.BVt.GLOBAL_DISCOVERY)
                  ? ((e = A.intl.string(A.t["4nEZLk"])), (p = (0, i.jsx)(eR.Q, { size: "sm" })))
                  : t.pathname.startsWith(ei.BVt.NITRO_HOME)
                    ? ((e = A.intl.string(A.t.Ipxkog)), (p = (0, i.jsx)(eP.t, { size: "sm" })))
                    : t.pathname.startsWith(ei.BVt.COLLECTIBLES_SHOP)
                      ? ((e = A.intl.string(A.t.pWG4ze)), (p = (0, i.jsx)(eD.U, { size: "sm" })))
                      : t.pathname.startsWith(ei.BVt.FRIENDS)
                        ? ((e = A.intl.string(A.t.TdEu5X)), (p = (0, i.jsx)(ex.$, { size: "sm" })))
                        : t.pathname.startsWith(ei.BVt.FAMILY_CENTER)
                          ? ((e = A.intl.string(eq.default.RZqaJn)), (p = (0, i.jsx)(ew.n, { size: "sm" })))
                          : t.pathname.startsWith(ei.BVt.QUEST_HOME) &&
                            ((e = A.intl.string(A.t.JALI2K)), (p = (0, i.jsx)(eM.r, { size: "sm" }))),
    null == e || "" === e)
        ? null
        : (0, i.jsxs)("div", {
              className: eK.DD,
              children: [p, (0, i.jsx)(eU.E, { variant: "text-sm/medium", lineClamp: 1, children: e })],
          });
}
var eX = n(851109),
    eZ = n(567249),
    eJ = n(912592),
    e0 = n(851580),
    e1 = n(222823),
    e2 = n(371911),
    e5 = n(790782);
function e3(e) {
    let { onOpen: t, onClose: n, "data-jump-section": a } = e,
        l = (0, s.bG)([J.default], () => J.default.getCurrentUser()),
        o = r.useRef(null),
        d = (0, s.bG)([e1.Ay], () => l?.id != null && e1.Ay.getMentionCount(l.id, e5.P.NOTIFICATION_CENTER) > 0);
    return (0, i.jsx)(e2.C, {
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
                        icon: eJ.K,
                        tooltip: A.intl.string(A.t.GSmTKJ),
                        onClick: e,
                        showBadge: d || r,
                        selected: t,
                        "data-jump-section": a,
                        ref: o,
                    }),
                    (0, i.jsx)(e0.v, { location: "inbox-button", targetElementRef: o }),
                ],
            }),
    });
}
var e6 = n(966597),
    e4 = n(97469),
    e7 = n(253932),
    e8 = n(430363);
function e9() {
    return null;
}
var te = n(540999),
    tt = n(147964),
    tn = n(531685),
    ti = n(19575),
    tr = n(475815),
    ta = n(268218),
    tl = n(71855);
n(801416);
let ts = (0, ta.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("87963"),
                n.e("37266"),
                n.e("55057"),
                n.e("34717"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("53142"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("67339"),
                n.e("21055"),
                n.e("31538"),
                n.e("21453"),
                n.e("54436"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("52286"),
                n.e("86674"),
                n.e("4009"),
                n.e("29297"),
                n.e("22427"),
            ]).then(n.bind(n, 922281)),
        webpackId: 922281,
        name: "ForLaterButton",
    }),
    to = (0, ta.Fe)({
        createPromise: () =>
            Promise.all([n.e("60161"), n.e("73644"), n.e("2529"), n.e("81505"), n.e("3671")]).then(n.bind(n, 667086)),
        webpackId: 667086,
        name: "NotificationsInboxTitleBarButton",
    }),
    td = (0, ta.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("57174"),
                n.e("38939"),
                n.e("94678"),
                n.e("1856"),
                n.e("93942"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("87963"),
                n.e("37266"),
                n.e("55057"),
                n.e("34717"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("88342"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("53142"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("67339"),
                n.e("21055"),
                n.e("31538"),
                n.e("21453"),
                n.e("54436"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("68883"),
                n.e("29594"),
                n.e("52286"),
                n.e("8018"),
                n.e("7637"),
                n.e("3025"),
                n.e("86674"),
                n.e("4009"),
                n.e("42282"),
                n.e("49862"),
                n.e("80093"),
                n.e("44647"),
                n.e("10730"),
                n.e("25657"),
                n.e("49320"),
                n.e("60989"),
                n.e("82486"),
                n.e("75349"),
                n.e("73644"),
                n.e("54490"),
                n.e("40393"),
                n.e("6159"),
                n.e("77602"),
                n.e("33773"),
                n.e("63078"),
                n.e("88808"),
                n.e("86546"),
                n.e("15373"),
                n.e("14875"),
                n.e("86300"),
                n.e("44935"),
                n.e("62175"),
                n.e("41706"),
                n.e("43368"),
                n.e("72822"),
                n.e("52803"),
                n.e("53275"),
                n.e("84114"),
                n.e("7121"),
                n.e("96817"),
                n.e("84704"),
                n.e("33098"),
                n.e("37886"),
                n.e("23324"),
                n.e("91652"),
                n.e("25013"),
                n.e("2059"),
                n.e("20803"),
                n.e("98083"),
                n.e("95782"),
                n.e("40114"),
                n.e("19119"),
                n.e("26223"),
                n.e("83518"),
                n.e("67646"),
                n.e("51050"),
                n.e("76477"),
                n.e("23536"),
                n.e("39967"),
                n.e("48612"),
                n.e("38249"),
                n.e("40976"),
                n.e("85216"),
                n.e("9842"),
                n.e("96975"),
                n.e("83438"),
                n.e("4787"),
                n.e("81161"),
                n.e("44395"),
                n.e("81250"),
                n.e("24805"),
                n.e("21595"),
                n.e("89947"),
                n.e("8878"),
            ]).then(n.bind(n, 540177)),
        webpackId: 540177,
    }),
    tc = () => Promise.all([n.e("95752"), n.e("60989"), n.e("37886"), n.e("91803")]).then(n.bind(n, 496879)),
    tu = (0, ta.Fe)({ createPromise: tc, webpackId: 496879 }),
    t_ = (0, a.v)(() => ({ isOpen: !0 })),
    tA = r.memo(function () {
        r.useLayoutEffect(() => {
            ti.Ay.setMinimumSize(800, 500);
        }, []);
        let { notificationCenterVariant: e, entrypoint: t } = (0, eX.X8)({ location: "AppTitleBar" }),
            { hasBugReporterAccess: n } = m.useConfig({ location: "HeaderBar" }),
            a = (0, s.bG)([te.A], () => te.A.isDeveloper),
            c = (0, e8.Uk)("VoiceDareTitleBarButton"),
            u = (0, s.bG)(
                [tt.A, E.A],
                () =>
                    e7.Q_.getSetting() &&
                    null != tt.A.testModeApplicationId &&
                    null != E.A.getApplication(tt.A.testModeApplicationId) &&
                    (0, p.A)(E.A.getApplication(tt.A.testModeApplicationId)),
            ),
            _ = null !== e && t === eX.RK.TITLE_BAR_LEFT,
            A = null === e,
            { enabled: I, inInbox: g } = e6.A.useConfig({ location: "AppTitleBar" });
        r.useLayoutEffect(() => {
            ti.Ay.setMinimumSize(800, 500);
        }, []);
        let C = (0, e4.NC)(),
            f = (0, s.bG)([tn.A, eZ.A], () => (0, tr._U)()),
            T = (0, l.xl)(),
            N = (function (e) {
                let { showBackForwardButtons: t, showNotificationsInbox: n, showRecentsButton: i } = e;
                return r.useMemo(
                    () => (t ? "BACK_FORWARD_NAVIGATION" : n ? "NOTIFICATIONS_INBOX" : i ? "RECENTS" : "HELP"),
                    [t, n, i],
                );
            })({ showBackForwardButtons: T, showNotificationsInbox: _, showRecentsButton: A }),
            { hasFriendList: S } = (0, K.K)("friends-button");
        return (r.useEffect(() => {
            S && tc();
        }, [S]),
        f)
            ? null
            : (0, i.jsx)(o.sk, {
                  children: (e) =>
                      (0, i.jsx)(d.N, {
                          theme: C,
                          children: (t) =>
                              (0, i.jsx)(tl.cq, {
                                  className: t,
                                  leading: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          T &&
                                              (0, i.jsx)(q, {
                                                  firstElementFocusJumpSectionProps:
                                                      "BACK_FORWARD_NAVIGATION" === N ? e : void 0,
                                              }),
                                          _ &&
                                              (0, i.jsx)(to, {
                                                  focusSectionProps: "NOTIFICATIONS_INBOX" === N ? e : void 0,
                                              }),
                                      ],
                                  }),
                                  title: (0, i.jsx)(eQ, {}),
                                  trailing: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          S && (0, i.jsx)(tu, {}),
                                          c ? (0, i.jsx)(e9, {}) : null,
                                          !1,
                                          (0, i.jsx)(M, { canShowReminder: !0 }),
                                          I && !g && (0, i.jsx)(ts, {}),
                                          A && (0, i.jsx)(e3, { ...("RECENTS" === N ? e : {}) }),
                                          n
                                              ? (0, i.jsx)(eA, { focusSectionProps: "HELP" === N ? e : void 0 })
                                              : (0, i.jsx)(er, { focusSectionProps: "HELP" === N ? e : void 0 }),
                                          a && (0, i.jsx)(td, {}),
                                          u && (0, i.jsx)(h, {}),
                                          (0, i.jsx)(eS, {}),
                                      ],
                                  }),
                              }),
                      }),
              });
    });
