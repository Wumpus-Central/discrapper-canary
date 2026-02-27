n.r(t), n.d(t, { default: () => V, useAppSidebarState: () => G });
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
    _ = n(420936),
    m = n(733738),
    p = n(27169),
    g = n(871432),
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
var U = n(260175);
let G = (0, l.v)(() => ({ isOpen: !0 }));
function k(e) {
    let { withFastTravel: t, quickSwitcherInsteadOfTitle: n, focusSectionProps: r } = e;
    return n ? (0, i.jsx)(p.F, { focusSectionProps: r }) : (0, i.jsx)(T.M, { withFastTravel: t, focusSectionProps: r });
}
let V = r.memo(function () {
    r.useLayoutEffect(() => {
        D.Ay.setMinimumSize(800, 500);
    }, []);
    let { notificationCenterVariant: e, entrypoint: t } = (0, N.X8)({ location: "AppTitleBar" }),
        { titlebarFastTravel: n, quickSwitcherInsteadOfTitle: l } = (0, _.t)({ location: "AppTitleBar" }),
        { hasBugReporterAccess: p } = A.A.useConfig({ location: "HeaderBar" }),
        T = (0, s.bG)([R.A], () => R.A.isDeveloper),
        G = (0, O.Uk)("VoiceDareTitleBarButton"),
        V = (0, s.bG)(
            [P.A, c.A],
            () =>
                b.Q_.getSetting() &&
                null != P.A.testModeApplicationId &&
                null != c.A.getApplication(P.A.testModeApplicationId) &&
                (0, u.A)(c.A.getApplication(P.A.testModeApplicationId)),
        ),
        B = null !== e && t === N.RK.TITLE_BAR_LEFT,
        H = null === e;
    r.useLayoutEffect(() => {
        D.Ay.setMinimumSize(800, 500);
    }, []);
    let F = (0, y.NC)(),
        Y = (0, s.bG)([j.A, x.A], () => (0, M._U)()),
        q = (0, a.xl)(),
        W = (function (e) {
            let {
                showBackForwardButtons: t,
                showNotificationsInbox: n,
                titlebarFastTravel: i,
                showRecentsButton: l,
            } = e;
            return r.useMemo(
                () =>
                    t
                        ? "BACK_FORWARD_NAVIGATION"
                        : n
                          ? "NOTIFICATIONS_INBOX"
                          : i
                            ? "TITLEBAR_FAST_TRAVEL"
                            : l
                              ? "RECENTS"
                              : "HELP",
                [t, n, i, l],
            );
        })({ showBackForwardButtons: q, showNotificationsInbox: B, titlebarFastTravel: n, showRecentsButton: H });
    return Y
        ? null
        : (0, i.jsx)(o.skg, {
              children: (e) =>
                  (0, i.jsx)(o.NPJ, {
                      theme: F,
                      children: (t) =>
                          (0, i.jsx)(w.cq, {
                              className: t,
                              leading: (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      q &&
                                          (0, i.jsx)(m.A, {
                                              firstElementFocusJumpSectionProps:
                                                  "BACK_FORWARD_NAVIGATION" === W ? e : void 0,
                                          }),
                                      B &&
                                          (0, i.jsx)(S.A, {
                                              focusSectionProps: "NOTIFICATIONS_INBOX" === W ? e : void 0,
                                          }),
                                  ],
                              }),
                              title: (0, i.jsx)(k, {
                                  withFastTravel: n,
                                  quickSwitcherInsteadOfTitle: l,
                                  focusSectionProps: "TITLEBAR_FAST_TRAVEL" === W ? e : void 0,
                              }),
                              trailing: (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(g.A, { className: U.x }),
                                      G ? (0, i.jsx)(L.A, {}) : null,
                                      (0, i.jsx)(h.A, { canShowReminder: !0, className: U.x }),
                                      H && (0, i.jsx)(v.A, { ...("RECENTS" === W ? e : {}), className: U.x }),
                                      p
                                          ? (0, i.jsx)(f.w, {
                                                focusSectionProps: "HELP" === W ? e : void 0,
                                                className: U.x,
                                            })
                                          : (0, i.jsx)(I.A, {
                                                focusSectionProps: "HELP" === W ? e : void 0,
                                                className: U.x,
                                            }),
                                      T ? (0, i.jsx)(E.R, { className: U.x }) : null,
                                      V && (0, i.jsx)(d.A, { className: U.x }),
                                      (0, i.jsx)(C.A, { className: U.x }),
                                  ],
                              }),
                          }),
                  }),
          });
});
