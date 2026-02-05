n.r(t), n.d(t, { default: () => H, useAppSidebarState: () => V });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(353640),
    o = n(311907),
    d = n(397927),
    c = n(526900),
    u = n(587895),
    A = n(875444),
    h = n(770031),
    _ = n(932340),
    m = n(545167),
    p = n(420936),
    g = n(733738),
    E = n(27169),
    f = n(871432),
    I = n(540177),
    C = n(898642),
    N = n(558416),
    T = n(358832),
    S = n(663111),
    x = n(851109),
    v = n(667086),
    b = n(87001),
    y = n(52144),
    L = n(97469),
    O = n(253932),
    R = n(430363),
    P = n(113800),
    j = n(540999),
    D = n(147964),
    w = n(531685),
    M = n(837921),
    U = n(475815),
    G = n(71855);
n(801416);
var k = n(260175);
let V = (0, s.v)(() => ({ isOpen: !0 }));
function B(e) {
    let { withFastTravel: t, quickSwitcherInsteadOfTitle: n, focusSectionProps: r } = e;
    return n ? (0, i.jsx)(E.F, { focusSectionProps: r }) : (0, i.jsx)(S.M, { withFastTravel: t, focusSectionProps: r });
}
let H = r.memo(function () {
    r.useLayoutEffect(() => {
        M.Ay.setMinimumSize(800, 500);
    }, []);
    let { notificationCenterVariant: e, entrypoint: t } = (0, x.X8)({ location: "AppTitleBar" }),
        { titlebarFastTravel: n, quickSwitcherInsteadOfTitle: a } = (0, p.t)({ location: "AppTitleBar" }),
        { backForwardButtons: s, titlebarIconSize: E } = (0, m.pz)({ location: "AppTitleBar" }),
        { hasBugReporterAccess: S } = h.A.useConfig({ location: "HeaderBar" }),
        V = (0, o.bG)([j.A], () => j.A.isDeveloper),
        H = (0, R.Uk)("VoiceDareTitleBarButton"),
        F = (0, o.bG)(
            [D.A, u.A],
            () =>
                O.Q_.getSetting() &&
                null != D.A.testModeApplicationId &&
                null != u.A.getApplication(D.A.testModeApplicationId) &&
                (0, A.A)(u.A.getApplication(D.A.testModeApplicationId)),
        ),
        Y = null !== e && t === x.RK.TITLE_BAR_LEFT,
        W = null === e;
    r.useLayoutEffect(() => {
        M.Ay.setMinimumSize(800, 500);
    }, []);
    let q = (0, L.NC)(),
        z = (0, o.bG)([w.A, b.A], () => (0, U._U)()),
        K = (function (e) {
            let {
                showBackForwardButtons: t,
                showNotificationsInbox: n,
                titlebarFastTravel: i,
                showRecentsButton: a,
            } = e;
            return r.useMemo(
                () =>
                    t
                        ? "BACK_FORWARD_NAVIGATION"
                        : n
                          ? "NOTIFICATIONS_INBOX"
                          : i
                            ? "TITLEBAR_FAST_TRAVEL"
                            : a
                              ? "RECENTS"
                              : "HELP",
                [t, n, i, a],
            );
        })({ showBackForwardButtons: s, showNotificationsInbox: Y, titlebarFastTravel: n, showRecentsButton: W });
    if (z) return null;
    let $ = l()(k.x, { [k.U]: "sm" === E });
    return (0, i.jsx)(d.skg, {
        children: (e) =>
            (0, i.jsx)(d.NPJ, {
                theme: q,
                children: (t) =>
                    (0, i.jsx)(G.cq, {
                        className: t,
                        leading: (0, i.jsxs)(i.Fragment, {
                            children: [
                                s &&
                                    (0, i.jsx)(g.A, {
                                        firstElementFocusJumpSectionProps: "BACK_FORWARD_NAVIGATION" === K ? e : void 0,
                                    }),
                                Y && (0, i.jsx)(v.A, { focusSectionProps: "NOTIFICATIONS_INBOX" === K ? e : void 0 }),
                            ],
                        }),
                        title: (0, i.jsx)(B, {
                            withFastTravel: n,
                            quickSwitcherInsteadOfTitle: a,
                            focusSectionProps: "TITLEBAR_FAST_TRAVEL" === K ? e : void 0,
                        }),
                        trailing: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(f.A, { className: $ }),
                                H ? (0, i.jsx)(P.A, {}) : null,
                                (0, i.jsx)(_.A, { canShowReminder: !0, className: $ }),
                                W && (0, i.jsx)(y.A, { ...("RECENTS" === K ? e : {}), className: $ }),
                                S
                                    ? (0, i.jsx)(N.w, { focusSectionProps: "HELP" === K ? e : void 0, className: $ })
                                    : (0, i.jsx)(C.A, { focusSectionProps: "HELP" === K ? e : void 0, className: $ }),
                                V ? (0, i.jsx)(I.R, { className: $ }) : null,
                                F && (0, i.jsx)(c.A, { className: $ }),
                                (0, i.jsx)(T.A, { className: $ }),
                            ],
                        }),
                    }),
            }),
    });
});
