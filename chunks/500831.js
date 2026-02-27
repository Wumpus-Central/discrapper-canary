n.r(t), n.d(t, { default: () => U, useAppSidebarState: () => w });
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
    p = n(540177),
    g = n(898642),
    E = n(558416),
    I = n(358832),
    f = n(663111),
    C = n(851109),
    T = n(667086),
    N = n(87001),
    S = n(52144),
    x = n(97469),
    v = n(253932),
    y = n(430363),
    b = n(113800),
    O = n(540999),
    L = n(147964),
    R = n(531685),
    P = n(837921),
    j = n(475815),
    D = n(71855);
n(801416);
var M = n(260175);
let w = (0, l.v)(() => ({ isOpen: !0 })),
    U = r.memo(function () {
        r.useLayoutEffect(() => {
            P.Ay.setMinimumSize(800, 500);
        }, []);
        let { notificationCenterVariant: e, entrypoint: t } = (0, C.X8)({ location: "AppTitleBar" }),
            { hasBugReporterAccess: n } = A.A.useConfig({ location: "HeaderBar" }),
            l = (0, s.bG)([O.A], () => O.A.isDeveloper),
            w = (0, y.Uk)("VoiceDareTitleBarButton"),
            U = (0, s.bG)(
                [L.A, c.A],
                () =>
                    v.Q_.getSetting() &&
                    null != L.A.testModeApplicationId &&
                    null != c.A.getApplication(L.A.testModeApplicationId) &&
                    (0, u.A)(c.A.getApplication(L.A.testModeApplicationId)),
            ),
            G = null !== e && t === C.RK.TITLE_BAR_LEFT,
            k = null === e;
        r.useLayoutEffect(() => {
            P.Ay.setMinimumSize(800, 500);
        }, []);
        let V = (0, x.NC)(),
            B = (0, s.bG)([R.A, N.A], () => (0, j._U)()),
            H = (0, a.xl)(),
            F = (function (e) {
                let { showBackForwardButtons: t, showNotificationsInbox: n, showRecentsButton: i } = e;
                return r.useMemo(
                    () => (t ? "BACK_FORWARD_NAVIGATION" : n ? "NOTIFICATIONS_INBOX" : i ? "RECENTS" : "HELP"),
                    [t, n, i],
                );
            })({ showBackForwardButtons: H, showNotificationsInbox: G, showRecentsButton: k });
        return B
            ? null
            : (0, i.jsx)(o.skg, {
                  children: (e) =>
                      (0, i.jsx)(o.NPJ, {
                          theme: V,
                          children: (t) =>
                              (0, i.jsx)(D.cq, {
                                  className: t,
                                  leading: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          H &&
                                              (0, i.jsx)(_.A, {
                                                  firstElementFocusJumpSectionProps:
                                                      "BACK_FORWARD_NAVIGATION" === F ? e : void 0,
                                              }),
                                          G &&
                                              (0, i.jsx)(T.A, {
                                                  focusSectionProps: "NOTIFICATIONS_INBOX" === F ? e : void 0,
                                              }),
                                      ],
                                  }),
                                  title: (0, i.jsx)(f.M, {}),
                                  trailing: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(m.A, { className: M.x }),
                                          w ? (0, i.jsx)(b.A, {}) : null,
                                          (0, i.jsx)(h.A, { canShowReminder: !0, className: M.x }),
                                          k && (0, i.jsx)(S.A, { ...("RECENTS" === F ? e : {}), className: M.x }),
                                          n
                                              ? (0, i.jsx)(E.w, {
                                                    focusSectionProps: "HELP" === F ? e : void 0,
                                                    className: M.x,
                                                })
                                              : (0, i.jsx)(g.A, {
                                                    focusSectionProps: "HELP" === F ? e : void 0,
                                                    className: M.x,
                                                }),
                                          l ? (0, i.jsx)(p.R, { className: M.x }) : null,
                                          U && (0, i.jsx)(d.A, { className: M.x }),
                                          (0, i.jsx)(I.A, { className: M.x }),
                                      ],
                                  }),
                              }),
                      }),
              });
    });
