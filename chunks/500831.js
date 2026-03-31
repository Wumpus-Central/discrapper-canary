n.r(t), n.d(t, { default: () => V, useAppSidebarState: () => k });
var i = n(627968),
    l = n(64700),
    a = n(353640),
    r = n(574381),
    s = n(311907),
    o = n(397927),
    d = n(526900),
    c = n(587895),
    u = n(875444),
    A = n(770031),
    h = n(932340),
    _ = n(733738),
    m = n(871432),
    p = n(352306),
    g = n(817199),
    E = n(540177),
    I = n(898642),
    f = n(558416),
    C = n(358832),
    T = n(663111),
    N = n(851109),
    S = n(667086),
    x = n(87001),
    v = n(52144),
    b = n(966597),
    y = n(922281),
    O = n(97469),
    L = n(253932),
    R = n(430363),
    P = n(113800),
    D = n(540999),
    M = n(147964),
    j = n(531685),
    w = n(837921),
    U = n(475815),
    G = n(71855);
n(801416);
let k = (0, a.v)(() => ({ isOpen: !0 })),
    V = l.memo(function () {
        l.useLayoutEffect(() => {
            w.Ay.setMinimumSize(800, 500);
        }, []);
        let { notificationCenterVariant: e, entrypoint: t } = (0, N.X8)({ location: "AppTitleBar" }),
            { hasBugReporterAccess: n } = A.A.useConfig({ location: "HeaderBar" }),
            a = (0, s.bG)([D.A], () => D.A.isDeveloper),
            k = (0, R.Uk)("VoiceDareTitleBarButton"),
            V = (0, s.bG)(
                [M.A, c.A],
                () =>
                    L.Q_.getSetting() &&
                    null != M.A.testModeApplicationId &&
                    null != c.A.getApplication(M.A.testModeApplicationId) &&
                    (0, u.A)(c.A.getApplication(M.A.testModeApplicationId)),
            ),
            B = null !== e && t === N.RK.TITLE_BAR_LEFT,
            H = null === e,
            { enabled: F } = p.s.useConfig({ location: "AppTitleBar" }),
            { enabled: Y, inInbox: W } = b.A.useConfig({ location: "AppTitleBar" });
        l.useLayoutEffect(() => {
            w.Ay.setMinimumSize(800, 500);
        }, []);
        let K = (0, O.NC)(),
            q = (0, s.bG)([j.A, x.A], () => (0, U._U)()),
            z = (0, r.xl)(),
            $ = (function (e) {
                let { showBackForwardButtons: t, showNotificationsInbox: n, showRecentsButton: i } = e;
                return l.useMemo(
                    () => (t ? "BACK_FORWARD_NAVIGATION" : n ? "NOTIFICATIONS_INBOX" : i ? "RECENTS" : "HELP"),
                    [t, n, i],
                );
            })({ showBackForwardButtons: z, showNotificationsInbox: B, showRecentsButton: H });
        return q
            ? null
            : (0, i.jsx)(o.skg, {
                  children: (e) =>
                      (0, i.jsx)(o.NPJ, {
                          theme: K,
                          children: (t) =>
                              (0, i.jsx)(G.cq, {
                                  className: t,
                                  leading: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          z &&
                                              (0, i.jsx)(_.A, {
                                                  firstElementFocusJumpSectionProps:
                                                      "BACK_FORWARD_NAVIGATION" === $ ? e : void 0,
                                              }),
                                          B &&
                                              (0, i.jsx)(S.A, {
                                                  focusSectionProps: "NOTIFICATIONS_INBOX" === $ ? e : void 0,
                                              }),
                                      ],
                                  }),
                                  title: (0, i.jsx)(T.M, {}),
                                  trailing: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(m.A, {}),
                                          k ? (0, i.jsx)(P.A, {}) : null,
                                          F && (0, i.jsx)(g.A, {}),
                                          (0, i.jsx)(h.A, { canShowReminder: !0 }),
                                          Y && !W && (0, i.jsx)(y.A, {}),
                                          H && (0, i.jsx)(v.A, { ...("RECENTS" === $ ? e : {}) }),
                                          n
                                              ? (0, i.jsx)(f.w, { focusSectionProps: "HELP" === $ ? e : void 0 })
                                              : (0, i.jsx)(I.A, { focusSectionProps: "HELP" === $ ? e : void 0 }),
                                          a && (0, i.jsx)(E.R, {}),
                                          V && (0, i.jsx)(d.A, {}),
                                          (0, i.jsx)(C.A, {}),
                                      ],
                                  }),
                              }),
                      }),
              });
    });
