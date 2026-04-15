n.r(t), n.d(t, { default: () => k, useAppSidebarState: () => G });
var i = n(627968),
    l = n(64700),
    r = n(353640),
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
    g = n(540177),
    p = n(898642),
    E = n(558416),
    I = n(358832),
    f = n(221345),
    C = n(663111),
    T = n(851109),
    S = n(667086),
    N = n(87001),
    x = n(52144),
    v = n(966597),
    b = n(922281),
    y = n(97469),
    O = n(253932),
    L = n(430363),
    R = n(113800),
    P = n(540999),
    D = n(147964),
    j = n(531685),
    M = n(837921),
    w = n(475815),
    U = n(71855);
n(801416);
let G = (0, r.v)(() => ({ isOpen: !0 })),
    k = l.memo(function () {
        l.useLayoutEffect(() => {
            M.Ay.setMinimumSize(800, 500);
        }, []);
        let { notificationCenterVariant: e, entrypoint: t } = (0, T.X8)({ location: "AppTitleBar" }),
            { hasBugReporterAccess: n } = A.A.useConfig({ location: "HeaderBar" }),
            r = (0, s.bG)([P.A], () => P.A.isDeveloper),
            G = (0, L.Uk)("VoiceDareTitleBarButton"),
            k = (0, s.bG)(
                [D.A, c.A],
                () =>
                    O.Q_.getSetting() &&
                    null != D.A.testModeApplicationId &&
                    null != c.A.getApplication(D.A.testModeApplicationId) &&
                    (0, u.A)(c.A.getApplication(D.A.testModeApplicationId)),
            ),
            V = (0, f.g)(),
            B = null !== e && t === T.RK.TITLE_BAR_LEFT,
            H = null === e,
            { enabled: F, inInbox: Y } = v.A.useConfig({ location: "AppTitleBar" });
        l.useLayoutEffect(() => {
            M.Ay.setMinimumSize(800, 500);
        }, []);
        let W = (0, y.NC)(),
            K = (0, s.bG)([j.A, N.A], () => (0, w._U)()),
            q = (0, a.xl)(),
            z = (function (e) {
                let { showBackForwardButtons: t, showNotificationsInbox: n, showRecentsButton: i } = e;
                return l.useMemo(
                    () => (t ? "BACK_FORWARD_NAVIGATION" : n ? "NOTIFICATIONS_INBOX" : i ? "RECENTS" : "HELP"),
                    [t, n, i],
                );
            })({ showBackForwardButtons: q, showNotificationsInbox: B, showRecentsButton: H });
        return K
            ? null
            : (0, i.jsx)(o.skg, {
                  children: (e) =>
                      (0, i.jsx)(o.NPJ, {
                          theme: W,
                          children: (t) =>
                              (0, i.jsx)(U.cq, {
                                  className: t,
                                  leading: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          q &&
                                              (0, i.jsx)(_.A, {
                                                  firstElementFocusJumpSectionProps:
                                                      "BACK_FORWARD_NAVIGATION" === z ? e : void 0,
                                              }),
                                          B &&
                                              (0, i.jsx)(S.A, {
                                                  focusSectionProps: "NOTIFICATIONS_INBOX" === z ? e : void 0,
                                              }),
                                      ],
                                  }),
                                  title: (0, i.jsx)(C.M, {}),
                                  trailing: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(m.A, {}),
                                          G ? (0, i.jsx)(R.A, {}) : null,
                                          V && (0, i.jsx)(f.A, {}),
                                          (0, i.jsx)(h.A, { canShowReminder: !0 }),
                                          F && !Y && (0, i.jsx)(b.A, {}),
                                          H && (0, i.jsx)(x.A, { ...("RECENTS" === z ? e : {}) }),
                                          n
                                              ? (0, i.jsx)(E.w, { focusSectionProps: "HELP" === z ? e : void 0 })
                                              : (0, i.jsx)(p.A, { focusSectionProps: "HELP" === z ? e : void 0 }),
                                          r && (0, i.jsx)(g.R, {}),
                                          k && (0, i.jsx)(d.A, {}),
                                          (0, i.jsx)(I.A, {}),
                                      ],
                                  }),
                              }),
                      }),
              });
    });
