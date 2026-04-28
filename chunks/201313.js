n.r(t), n.d(t, { useAppSidebarState: () => th, default: () => tE });
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
    S = n(672477),
    L = n(274372),
    y = n(915618),
    O = n(361157),
    b = n(710315),
    v = n(338854),
    R = n(43105),
    P = n(372684),
    D = n(399925),
    x = n(665039);
function w(e) {
    let { onOpenClipsGallery: t, clipIconRef: n, lastClipsSession: a } = e,
        l = (0, s.bG)([L.A], () => {
            let e = L.A.getLastClipsSession()?.newClipIds;
            if (null == e) return null;
            let t = L.A.getClipIds().find((t) => e.includes(t));
            return null == t ? null : L.A.getClipById(t);
        }),
        o = (0, x.j)(l),
        d = r.useCallback(() => {
            (0, D.jA)();
        }, []);
    return null == l
        ? null
        : l.type !== P.nQ.SCREENSHOT && l.type !== P.nQ.VOICE_CLIP && null != o
          ? (0, i.jsx)(v.H, {
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
          : (0, i.jsx)(R.A, {
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
var M = n(271597),
    U = n(370791);
function G(e) {
    let { canShowReminder: t = !1 } = e,
        n = (0, y.A)(T.Ay),
        { enableReminderSidebar: a } = S.Z.useConfig({ location: "ClipsButton" }),
        { showClipsHeaderEntrypoint: l } = N.L_.useConfig({ location: "ClipsButton" }),
        { topBarButton: o } = b.$.useConfig({ location: "ClipsButton" }),
        {
            hasNewClips: d,
            lastClipsSession: c,
            remindersEnabled: h,
            hasAnyClipAnimations: E,
        } = (0, s.cf)([L.A], () => ({
            hasNewClips: L.A.getNewClipIds().length > 0,
            lastClipsSession: L.A.getLastClipsSession(),
            remindersEnabled: L.A.getSettings().remindersEnabled,
            hasAnyClipAnimations: L.A.hasAnyClipAnimations(),
        })),
        p = null != c && c.newClipIds.length > 0,
        m = (0, O.K)((e) => e.clipsButtonRef),
        v = (0, O.K)((e) => e.setClipsButtonRef),
        R = (0, s.bG)([f.A], () => f.A.hasLayers()),
        { preventIdle: P, allowIdle: D } = (0, C.o)("animation");
    function x() {
        (0, M.p)();
    }
    return (r.useEffect(() => (E ? P() : D(), () => D()), [E, P, D]),
    r.useEffect(() => {
        if (!a || !h || !p || !t || R || (0, I.hasAnyModalOpen)()) return;
        let { activePanel: e } = u.fy.getState();
        e !== u.HP.CLIPS_REMINDER && (0, U.w)();
    }, [a, h, p, t, R]),
    (l || o) && n)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  null != m &&
                      t &&
                      !a &&
                      h &&
                      p &&
                      !(0, I.hasAnyModalOpen)() &&
                      !R &&
                      (0, i.jsx)(w, { clipIconRef: m, lastClipsSession: c, onOpenClipsGallery: x }),
                  (0, i.jsx)("div", {
                      ref: v,
                      children: (0, i.jsx)(_.A, {
                          icon: g.x,
                          showBadge: d,
                          tooltip: A.intl.string(A.t.MXaLEM),
                          onClick: x,
                      }),
                  }),
              ],
          })
        : null;
}
var j = n(503698),
    k = n.n(j),
    V = n(990078),
    F = n(939249),
    H = n(477155),
    B = n(935286),
    Y = n(176522),
    $ = n(963169),
    W = n(228366),
    z = n(546859);
let K = Y.GY.binds["0"],
    q = Y.M$.binds["0"],
    X = (e) => {
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
                            W.h.subscribe("ROUTE_CHANGED", t),
                            W.h.subscribe("LOGOUT", t),
                            () => {
                                W.h.unsubscribe("ROUTE_CHANGED", t), W.h.unsubscribe("LOGOUT", t);
                            }
                        );
                    }, [e]),
                    t
                );
            })();
        return (0, i.jsxs)("div", {
            className: z.y_,
            children: [
                (0, i.jsx)(V.m, {
                    ariaHidden: !0,
                    shouldShow: n,
                    text: A.intl.string(A.t.B9vzIP),
                    keyboardShortcut: K,
                    children: (0, i.jsx)(F.D, {
                        "aria-label": A.intl.string(A.t.B9vzIP),
                        "aria-disabled": !n,
                        tabIndex: n ? 0 : -1,
                        className: k()(z.x6, z.aX, { [z.r9]: !n }),
                        onClick: () => (0, $.OE)("nav_button"),
                        ...t,
                        children: (0, i.jsx)(H.r, { size: "sm", color: "currentColor" }),
                    }),
                }),
                (0, i.jsx)(V.m, {
                    ariaHidden: !0,
                    shouldShow: a,
                    text: A.intl.string(A.t["9KJ29e"]),
                    keyboardShortcut: q,
                    children: (0, i.jsx)(F.D, {
                        "aria-label": A.intl.string(A.t["9KJ29e"]),
                        "aria-disabled": !a,
                        tabIndex: a ? 0 : -1,
                        className: k()(z.x6, z.sY, { [z.r9]: !a }),
                        onClick: () => (0, $.Qb)("nav_button"),
                        children: (0, i.jsx)(B.E, { size: "sm", color: "currentColor" }),
                    }),
                }),
            ],
        });
    };
var Z = n(291445),
    Q = n(661531),
    J = n(349288),
    ee = n(290136),
    et = n(287809),
    en = n(954571),
    ei = n(975571),
    er = n(427262),
    ea = n(652215);
function el(e) {
    let { focusSectionProps: t } = e,
        n = (0, s.bG)([et.default], () => et.default.getCurrentUser()),
        r = (0, er.mv)(n);
    return (0, i.jsx)(J.Anchor, {
        href: ei.C,
        target: "_blank",
        tabIndex: -1,
        children: (0, i.jsx)(_.A, {
            color: r ? Q.A.unsafe_rawColors.GREEN_360.css : "currentColor",
            onClick: () => en.default.track(ea.HAw.HELP_CLICKED, { highlighted: r }),
            icon: ee.c,
            tooltip: A.intl.string(A.t["cqEoj/"]),
            ...t,
        }),
    });
}
var es = n(550079),
    eo = n(477782),
    ed = n(92446),
    ec = n(509434),
    eu = n(922016),
    e_ = n(975807);
let eA = () =>
    (0, I.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("28367"), n.e("22261")]).then(n.bind(n, 317248));
        return (t) => (0, i.jsx)(e, { ...t });
    });
function eh(e) {
    let { onClose: t } = e;
    return (0, i.jsx)(es.W, {
        "data-menu-migrated": !0,
        onSelect: () => {},
        navId: "staff-help-popout",
        variant: "fixed",
        onClose: t,
        "aria-label": A.intl.string(A.t.HpQykc),
        children: (0, i.jsxs)(eo.rX, {
            children: [
                (0, i.jsx)(eo.Dr, {
                    id: "staff-help-bug-reporter",
                    label: A.intl.string(A.t["5LqopY"]),
                    icon: ed.Q,
                    leadingAccessory: { type: "icon", icon: ed.Q },
                    action: eA,
                }),
                (0, i.jsx)(eo.Dr, {
                    id: "staff-help-center",
                    label: "Go to Help Center",
                    icon: ec.I,
                    leadingAccessory: { type: "icon", icon: ee.c },
                    trailingIndicator: { type: "icon", icon: ec.I },
                    action: () => (0, e_.A)(ei.C),
                }),
            ],
        }),
    });
}
function eE(e) {
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
        children: (0, i.jsx)(eu.Y, {
            targetElementRef: o,
            shouldShow: n,
            animation: eu.Y.Animation.NONE,
            position: "bottom",
            align: "right",
            autoInvert: !1,
            onRequestOpen: () => a(!0),
            onRequestClose: () => a(!1),
            renderPopout: () => (0, i.jsx)(eh, { onClose: () => a(!1) }),
            children: (e, n) => {
                let { isShown: r } = n;
                return (0, i.jsx)(_.A, {
                    ref: o,
                    onClick: eA,
                    icon: ed.Q,
                    "aria-label": A.intl.string(A.t["5LqopY"]),
                    selected: r,
                    ...t,
                });
            },
        }),
    });
}
var ep = n(32880),
    em = n(157559),
    eI = n(987482);
let eg = "UPDATE_NOT_AVAILABLE";
function eC(e) {
    eg = e.type;
}
class ef extends s.Ay.Store {
    static displayName = "AutoUpdateStore";
    getState() {
        return eg;
    }
}
let eT = new ef(W.h, {
    CHECKING_FOR_UPDATES: eC,
    UPDATE_NOT_AVAILABLE: eC,
    UPDATE_AVAILABLE: eC,
    UPDATE_MANUALLY: eC,
    UPDATE_ERROR: eC,
    UPDATE_DOWNLOADED: eC,
});
var eN = n(763827),
    eS = n(82819);
class eL extends r.PureComponent {
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.memoizedMode ? { memoizedMode: e.mode, clicked: !1 } : null;
    }
    state = { memoizedMode: this.props.mode, clicked: !1 };
    handleDownloadApps() {
        (0, I.openModal)((e) => (0, i.jsx)(eI.default, { source: "Links", ...e }));
    }
    handleInstallDownload = () => {
        eN.A.isConnected()
            ? em.A.show({
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
        this.state.clicked || (this.setState({ clicked: !0 }), W.h.dispatch({ type: "AUTO_UPDATER_QUIT_AND_INSTALL" }));
    };
    render() {
        let e = "UPDATE_AVAILABLE" === this.props.mode,
            t = "UPDATE_DOWNLOADED" === this.props.mode || "UPDATE_MANUALLY" === this.props.mode;
        return e || t
            ? (0, i.jsx)(_.A, {
                  tooltip: e ? A.intl.string(A.t["zp9d/4"]) : A.intl.string(A.t.u18OXF),
                  color: Q.A.unsafe_rawColors.GREEN_360.css,
                  colorClass: e ? eS.z : void 0,
                  onClick: this.handleInstallDownload,
                  icon: ep.s,
                  disabled: e,
              })
            : null;
    }
}
let ey = s.Ay.connectStores([eT], () => ({ mode: eT.getState() }))(eL);
var eO = n(873263),
    eb = n(782603),
    ev = n(27232),
    eR = n(111159),
    eP = n(768622),
    eD = n(836480),
    ex = n(403581),
    ew = n(34188),
    eM = n(214947),
    eU = n(177953),
    eG = n(577473),
    ej = n(834730),
    ek = n(313281),
    eV = n(5180),
    eF = n(91242),
    eH = n(548118),
    eB = n(394953),
    eY = n(734057),
    e$ = n(71393),
    eW = n(309010),
    ez = n(967198),
    eK = n(486020),
    eq = n(165610),
    eX = n(602339),
    eZ = n(957896);
function eQ() {
    let e,
        t = (0, eO.zy)(),
        n = (0, s.bG)([ez.A], () => ez.A.getGuildId()),
        r = (0, s.bG)([eW.A], () => eW.A.getChannelId()),
        a = (0, s.bG)([eY.A], () => eY.A.getChannel(r), [r]),
        l = n ?? a?.guild_id,
        o = (0, s.bG)([e$.A], () => e$.A.getGuild(l), [l]),
        d = (0, ek.DZ)(),
        c = (0, eB.lI)(),
        { application: u, isFrameInFocusedMode: _ } = (0, s.cf)([E.A, eF.A], () => {
            let e = eF.A.getConnectedFrame();
            return {
                application: E.A.getApplication(e?.applicationId),
                isFrameInFocusedMode: eF.A.getFrameLayoutMode() === eq.y.FOCUSED,
            };
        }),
        h = null != u ? eK.Ay.getApplicationIconURL({ id: u.id, icon: u.icon, bot: u.bot }) : void 0,
        p = null;
    return (null != u && _
        ? ((e = u.name),
          (p = (0, i.jsx)("img", {
              className: eZ.Z2,
              alt: A.intl.string(A.t.X4IxWL),
              src: h,
              "aria-hidden": !0,
              draggable: !1,
          })))
        : c
          ? ((e = A.intl.string(A.t.HcoRu0)), (p = (0, i.jsx)(eb.X, { size: "sm" })))
          : null != o
            ? ((e = (0, eV.YC)(o)),
              (p = d
                  ? (0, i.jsx)(ev.G, { size: "sm" })
                  : (0, i.jsx)(eH.Ay, { guild: o, size: eH.Ay.Sizes.SMOL, active: !0, className: eZ.$f })))
            : null != a && (a.isDM() || a.isGroupDM())
              ? ((e = A.intl.string(A.t.YUU0RF)), (p = (0, i.jsx)(eR.p, { size: "sm" })))
              : t.pathname.startsWith(ea.BVt.ICYMI)
                ? ((e = A.intl.string(A.t["jnXV/V"])), (p = (0, i.jsx)(eP.g, { size: "sm" })))
                : t.pathname.startsWith(ea.BVt.GLOBAL_DISCOVERY)
                  ? ((e = A.intl.string(A.t["4nEZLk"])), (p = (0, i.jsx)(eD.Q, { size: "sm" })))
                  : t.pathname.startsWith(ea.BVt.NITRO_HOME)
                    ? ((e = A.intl.string(A.t.Ipxkog)), (p = (0, i.jsx)(ex.t, { size: "sm" })))
                    : t.pathname.startsWith(ea.BVt.COLLECTIBLES_SHOP)
                      ? ((e = A.intl.string(A.t.pWG4ze)), (p = (0, i.jsx)(ew.U, { size: "sm" })))
                      : t.pathname.startsWith(ea.BVt.FRIENDS)
                        ? ((e = A.intl.string(A.t.TdEu5X)), (p = (0, i.jsx)(eM.$, { size: "sm" })))
                        : t.pathname.startsWith(ea.BVt.FAMILY_CENTER)
                          ? ((e = A.intl.string(eX.default.RZqaJn)), (p = (0, i.jsx)(eU.n, { size: "sm" })))
                          : t.pathname.startsWith(ea.BVt.QUEST_HOME) &&
                            ((e = A.intl.string(A.t.JALI2K)), (p = (0, i.jsx)(eG.r, { size: "sm" }))),
    null == e || "" === e)
        ? null
        : (0, i.jsxs)("div", {
              className: eZ.DD,
              children: [p, (0, i.jsx)(ej.E, { variant: "text-sm/medium", lineClamp: 1, children: e })],
          });
}
var eJ = n(851109),
    e0 = n(567249),
    e1 = n(912592),
    e2 = n(851580),
    e6 = n(222823),
    e5 = n(371911),
    e3 = n(790782);
function e7(e) {
    let { onOpen: t, onClose: n, "data-jump-section": a } = e,
        l = (0, s.bG)([et.default], () => et.default.getCurrentUser()),
        o = r.useRef(null),
        d = (0, s.bG)([e6.Ay], () => l?.id != null && e6.Ay.getMentionCount(l.id, e3.P.NOTIFICATION_CENTER) > 0);
    return (0, i.jsx)(e5.C, {
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
                        icon: e1.K,
                        tooltip: A.intl.string(A.t.GSmTKJ),
                        onClick: e,
                        showBadge: d || r,
                        selected: t,
                        "data-jump-section": a,
                        ref: o,
                    }),
                    (0, i.jsx)(e2.v, { location: "inbox-button", targetElementRef: o }),
                ],
            }),
    });
}
var e4 = n(966597),
    e8 = n(97469),
    e9 = n(253932),
    te = n(430363);
function tt() {
    return null;
}
var tn = n(540999),
    ti = n(147964),
    tr = n(531685),
    ta = n(19575),
    tl = n(475815),
    ts = n(268218),
    to = n(71855);
n(801416);
let td = (0, ts.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
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
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("67339"),
                n.e("90161"),
                n.e("31538"),
                n.e("63087"),
                n.e("99717"),
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
    tc = (0, ts.Fe)({
        createPromise: () =>
            Promise.all([n.e("60161"), n.e("73644"), n.e("2529"), n.e("81505"), n.e("3671")]).then(n.bind(n, 667086)),
        webpackId: 667086,
        name: "NotificationsInboxTitleBarButton",
    }),
    tu = (0, ts.Fe)({
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
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
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
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("67339"),
                n.e("90161"),
                n.e("31538"),
                n.e("63087"),
                n.e("99717"),
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
                n.e("62597"),
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
                n.e("66774"),
                n.e("81250"),
                n.e("24805"),
                n.e("21595"),
                n.e("18779"),
                n.e("8878"),
            ]).then(n.bind(n, 540177)),
        webpackId: 540177,
    }),
    t_ = () => Promise.all([n.e("95752"), n.e("60989"), n.e("37886"), n.e("91803")]).then(n.bind(n, 496879)),
    tA = (0, ts.Fe)({ createPromise: t_, webpackId: 496879 }),
    th = (0, a.v)(() => ({ isOpen: !0 })),
    tE = r.memo(function () {
        r.useLayoutEffect(() => {
            ta.Ay.setMinimumSize(800, 500);
        }, []);
        let { notificationCenterVariant: e, entrypoint: t } = (0, eJ.X8)({ location: "AppTitleBar" }),
            { hasBugReporterAccess: n } = m.useConfig({ location: "HeaderBar" }),
            a = (0, s.bG)([tn.A], () => tn.A.isDeveloper),
            c = (0, te.Uk)("VoiceDareTitleBarButton"),
            u = (0, s.bG)(
                [ti.A, E.A],
                () =>
                    e9.Q_.getSetting() &&
                    null != ti.A.testModeApplicationId &&
                    null != E.A.getApplication(ti.A.testModeApplicationId) &&
                    (0, p.A)(E.A.getApplication(ti.A.testModeApplicationId)),
            ),
            _ = null !== e && t === eJ.RK.TITLE_BAR_LEFT,
            A = null === e,
            { enabled: I, inInbox: g } = e4.A.useConfig({ location: "AppTitleBar" });
        r.useLayoutEffect(() => {
            ta.Ay.setMinimumSize(800, 500);
        }, []);
        let C = (0, e8.NC)(),
            f = (0, s.bG)([tr.A, e0.A], () => (0, tl._U)()),
            T = (0, l.xl)(),
            N = (function (e) {
                let { showBackForwardButtons: t, showNotificationsInbox: n, showRecentsButton: i } = e;
                return r.useMemo(
                    () => (t ? "BACK_FORWARD_NAVIGATION" : n ? "NOTIFICATIONS_INBOX" : i ? "RECENTS" : "HELP"),
                    [t, n, i],
                );
            })({ showBackForwardButtons: T, showNotificationsInbox: _, showRecentsButton: A }),
            { hasFriendList: S } = (0, Z.K)("friends-button");
        return (r.useEffect(() => {
            S && t_();
        }, [S]),
        f)
            ? null
            : (0, i.jsx)(o.sk, {
                  children: (e) =>
                      (0, i.jsx)(d.N, {
                          theme: C,
                          children: (t) =>
                              (0, i.jsx)(to.cq, {
                                  className: t,
                                  leading: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          T &&
                                              (0, i.jsx)(X, {
                                                  firstElementFocusJumpSectionProps:
                                                      "BACK_FORWARD_NAVIGATION" === N ? e : void 0,
                                              }),
                                          _ &&
                                              (0, i.jsx)(tc, {
                                                  focusSectionProps: "NOTIFICATIONS_INBOX" === N ? e : void 0,
                                              }),
                                      ],
                                  }),
                                  title: (0, i.jsx)(eQ, {}),
                                  trailing: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          S && (0, i.jsx)(tA, {}),
                                          c ? (0, i.jsx)(tt, {}) : null,
                                          !1,
                                          (0, i.jsx)(G, { canShowReminder: !0 }),
                                          I && !g && (0, i.jsx)(td, {}),
                                          A && (0, i.jsx)(e7, { ...("RECENTS" === N ? e : {}) }),
                                          n
                                              ? (0, i.jsx)(eE, { focusSectionProps: "HELP" === N ? e : void 0 })
                                              : (0, i.jsx)(el, { focusSectionProps: "HELP" === N ? e : void 0 }),
                                          a && (0, i.jsx)(tu, {}),
                                          u && (0, i.jsx)(h, {}),
                                          (0, i.jsx)(ey, {}),
                                      ],
                                  }),
                              }),
                      }),
              });
    });
