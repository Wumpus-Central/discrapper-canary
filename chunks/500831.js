n.r(t), n.d(t, { default: () => G, useAppSidebarState: () => U });
var i = n(627968),
    r = n(64700),
    l = n(353640),
    a = n(574381),
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
    y = n(97469),
    b = n(253932),
    O = n(430363),
    L = n(113800),
    R = n(540999),
    P = n(147964),
    j = n(531685),
    D = n(837921),
    M = n(475815),
    w = n(71855);
n(801416);
let U = (0, l.v)(() => ({ isOpen: !0 })),
    G = r.memo(function () {
        r.useLayoutEffect(() => {
            D.Ay.setMinimumSize(800, 500);
        }, []);
        let { notificationCenterVariant: e, entrypoint: t } = (0, N.X8)({ location: "AppTitleBar" }),
            { hasBugReporterAccess: n } = A.A.useConfig({ location: "HeaderBar" }),
            l = (0, s.bG)([R.A], () => R.A.isDeveloper),
            U = (0, O.Uk)("VoiceDareTitleBarButton"),
            G = (0, s.bG)(
                [P.A, c.A],
                () =>
                    b.Q_.getSetting() &&
                    null != P.A.testModeApplicationId &&
                    null != c.A.getApplication(P.A.testModeApplicationId) &&
                    (0, u.A)(c.A.getApplication(P.A.testModeApplicationId)),
            ),
            k = null !== e && t === N.RK.TITLE_BAR_LEFT,
            V = null === e,
            { enabled: B } = p.s.useConfig({ location: "AppTitleBar" });
        r.useLayoutEffect(() => {
            D.Ay.setMinimumSize(800, 500);
        }, []);
        let H = (0, y.NC)(),
            F = (0, s.bG)([j.A, x.A], () => (0, M._U)()),
            Y = (0, a.xl)(),
            W = (function (e) {
                let { showBackForwardButtons: t, showNotificationsInbox: n, showRecentsButton: i } = e;
                return r.useMemo(
                    () => (t ? "BACK_FORWARD_NAVIGATION" : n ? "NOTIFICATIONS_INBOX" : i ? "RECENTS" : "HELP"),
                    [t, n, i],
                );
            })({ showBackForwardButtons: Y, showNotificationsInbox: k, showRecentsButton: V });
        return F
            ? null
            : (0, i.jsx)(o.skg, {
                  children: (e) =>
                      (0, i.jsx)(o.NPJ, {
                          theme: H,
                          children: (t) =>
                              (0, i.jsx)(w.cq, {
                                  className: t,
                                  leading: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          Y &&
                                              (0, i.jsx)(_.A, {
                                                  firstElementFocusJumpSectionProps:
                                                      "BACK_FORWARD_NAVIGATION" === W ? e : void 0,
                                              }),
                                          k &&
                                              (0, i.jsx)(S.A, {
                                                  focusSectionProps: "NOTIFICATIONS_INBOX" === W ? e : void 0,
                                              }),
                                      ],
                                  }),
                                  title: (0, i.jsx)(T.M, {}),
                                  trailing: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(m.A, {}),
                                          U ? (0, i.jsx)(L.A, {}) : null,
                                          B && (0, i.jsx)(g.A, {}),
                                          (0, i.jsx)(h.A, { canShowReminder: !0 }),
                                          V && (0, i.jsx)(v.A, { ...("RECENTS" === W ? e : {}) }),
                                          n
                                              ? (0, i.jsx)(f.w, { focusSectionProps: "HELP" === W ? e : void 0 })
                                              : (0, i.jsx)(I.A, { focusSectionProps: "HELP" === W ? e : void 0 }),
                                          l && (0, i.jsx)(E.R, {}),
                                          G && (0, i.jsx)(d.A, {}),
                                          (0, i.jsx)(C.A, {}),
                                      ],
                                  }),
                              }),
                      }),
              });
    });
