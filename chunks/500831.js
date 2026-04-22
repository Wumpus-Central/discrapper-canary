n.r(t), n.d(t, { default: () => F, useAppSidebarState: () => B });
var i = n(627968),
    r = n(64700),
    a = n(353640),
    l = n(574381),
    s = n(311907),
    o = n(312138),
    d = n(43990),
    u = n(526900),
    c = n(587895),
    A = n(875444),
    h = n(770031),
    _ = n(932340),
    E = n(733738),
    p = n(291445),
    m = n(898642),
    g = n(558416),
    I = n(358832),
    C = n(221345),
    f = n(663111),
    T = n(851109),
    S = n(667086),
    N = n(87001),
    O = n(52144),
    L = n(966597),
    y = n(922281),
    v = n(97469),
    b = n(253932),
    D = n(430363),
    R = n(113800),
    P = n(540999),
    w = n(147964),
    M = n(531685),
    U = n(837921),
    x = n(475815),
    G = n(268218),
    k = n(71855);
n(801416);
let j = (0, G.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("57174"),
                n.e("94678"),
                n.e("896"),
                n.e("60562"),
                n.e("82486"),
                n.e("755"),
                n.e("77602"),
                n.e("41353"),
                n.e("86546"),
                n.e("15373"),
                n.e("34519"),
                n.e("2736"),
                n.e("94212"),
                n.e("62175"),
                n.e("89"),
                n.e("58801"),
                n.e("21075"),
                n.e("84704"),
                n.e("33098"),
                n.e("27482"),
                n.e("55839"),
                n.e("91652"),
                n.e("70233"),
                n.e("84114"),
                n.e("95782"),
                n.e("44667"),
                n.e("35432"),
                n.e("10117"),
                n.e("83518"),
                n.e("81694"),
                n.e("12739"),
                n.e("69242"),
                n.e("19395"),
                n.e("39558"),
                n.e("34749"),
                n.e("40976"),
                n.e("7803"),
                n.e("67646"),
                n.e("39005"),
                n.e("16704"),
                n.e("32400"),
                n.e("4787"),
                n.e("79893"),
                n.e("23291"),
                n.e("99261"),
                n.e("58048"),
                n.e("21595"),
                n.e("38746"),
                n.e("8878"),
            ]).then(n.bind(n, 540177)),
        webpackId: 540177,
    }),
    V = () => Promise.all([n.e("27482"), n.e("91803")]).then(n.bind(n, 871432)),
    H = (0, G.Fe)({ createPromise: V, webpackId: 871432 }),
    B = (0, a.v)(() => ({ isOpen: !0 })),
    F = r.memo(function () {
        r.useLayoutEffect(() => {
            U.Ay.setMinimumSize(800, 500);
        }, []);
        let { notificationCenterVariant: e, entrypoint: t } = (0, T.X8)({ location: "AppTitleBar" }),
            { hasBugReporterAccess: n } = h.A.useConfig({ location: "HeaderBar" }),
            a = (0, s.bG)([P.A], () => P.A.isDeveloper),
            G = (0, D.Uk)("VoiceDareTitleBarButton"),
            B = (0, s.bG)(
                [w.A, c.A],
                () =>
                    b.Q_.getSetting() &&
                    null != w.A.testModeApplicationId &&
                    null != c.A.getApplication(w.A.testModeApplicationId) &&
                    (0, A.A)(c.A.getApplication(w.A.testModeApplicationId)),
            ),
            F = (0, C.g)(),
            Y = null !== e && t === T.RK.TITLE_BAR_LEFT,
            K = null === e,
            { enabled: z, inInbox: W } = L.A.useConfig({ location: "AppTitleBar" });
        r.useLayoutEffect(() => {
            U.Ay.setMinimumSize(800, 500);
        }, []);
        let $ = (0, v.NC)(),
            q = (0, s.bG)([M.A, N.A], () => (0, x._U)()),
            X = (0, l.xl)(),
            Q = (function (e) {
                let { showBackForwardButtons: t, showNotificationsInbox: n, showRecentsButton: i } = e;
                return r.useMemo(
                    () => (t ? "BACK_FORWARD_NAVIGATION" : n ? "NOTIFICATIONS_INBOX" : i ? "RECENTS" : "HELP"),
                    [t, n, i],
                );
            })({ showBackForwardButtons: X, showNotificationsInbox: Y, showRecentsButton: K }),
            { hasFriendList: Z } = (0, p.K)("friends-button");
        return (r.useEffect(() => {
            Z && V();
        }, [Z]),
        q)
            ? null
            : (0, i.jsx)(o.sk, {
                  children: (e) =>
                      (0, i.jsx)(d.N, {
                          theme: $,
                          children: (t) =>
                              (0, i.jsx)(k.cq, {
                                  className: t,
                                  leading: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          X &&
                                              (0, i.jsx)(E.A, {
                                                  firstElementFocusJumpSectionProps:
                                                      "BACK_FORWARD_NAVIGATION" === Q ? e : void 0,
                                              }),
                                          Y &&
                                              (0, i.jsx)(S.A, {
                                                  focusSectionProps: "NOTIFICATIONS_INBOX" === Q ? e : void 0,
                                              }),
                                      ],
                                  }),
                                  title: (0, i.jsx)(f.M, {}),
                                  trailing: (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          Z && (0, i.jsx)(H, {}),
                                          G ? (0, i.jsx)(R.A, {}) : null,
                                          F && (0, i.jsx)(C.A, {}),
                                          (0, i.jsx)(_.A, { canShowReminder: !0 }),
                                          z && !W && (0, i.jsx)(y.A, {}),
                                          K && (0, i.jsx)(O.A, { ...("RECENTS" === Q ? e : {}) }),
                                          n
                                              ? (0, i.jsx)(g.w, { focusSectionProps: "HELP" === Q ? e : void 0 })
                                              : (0, i.jsx)(m.A, { focusSectionProps: "HELP" === Q ? e : void 0 }),
                                          a && (0, i.jsx)(j, {}),
                                          B && (0, i.jsx)(u.A, {}),
                                          (0, i.jsx)(I.A, {}),
                                      ],
                                  }),
                              }),
                      }),
              });
    });
