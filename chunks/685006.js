n.d(t, {
    ZP: () => S,
    xL: () => T
});
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(15729),
    o = n(731965),
    c = n(481060),
    d = n(911969),
    u = n(100527),
    h = n(367907),
    p = n(450936),
    m = n(368478),
    f = n(499254),
    g = n(827498),
    _ = n(213459),
    C = n(541716),
    x = n(540059),
    v = n(61356),
    E = n(981631),
    I = n(314734),
    b = n(700559);
let Z = (0, s.U)(() => ({ visible: !1 })),
    N = (e) => {
        (0, o.j)(() => {
            Z.setState({ visible: e });
        });
    },
    T = Z;
function S(e) {
    let { context: t, entryPointCommandButtonRef: n, type: a } = e,
        { isInitialLoading: r, application: s, primaryEntryPointCommand: o } = (0, p.Z)({ context: t }),
        c = null == s ? void 0 : s.id,
        m = (0, v.Z)({ type: a }),
        { sectionCommands: x } = (0, _.If)(t, null != c ? c : ''),
        I = l.useCallback(() => {
            m
                ? f.yT(g.ti.DISMISSED)
                : (f.__(g._b.TEXT, C.Ie.NORMAL, { applicationId: c }),
                  (0, h.yw)(E.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                      application_id: c,
                      location: u.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
                      source: g._b.TEXT
                  }));
        }, [c, m]),
        b = null != x && x.filter((e) => e.type === d.yU.CHAT || e.type === d.yU.PRIMARY_ENTRY_POINT).length > 0,
        Z = !r && null != s && !0 === b;
    return (l.useEffect(
        () => (
            N(Z),
            () => {
                N(!1);
            }
        ),
        [Z]
    ),
    Z)
        ? (0, i.jsx)(j, {
              context: t,
              application: s,
              primaryEntryPointCommand: o,
              onOpenButtonPress: I,
              entryPointCommandButtonRef: n,
              type: a
          })
        : null;
}
function j(e) {
    let { context: t, application: n, primaryEntryPointCommand: l, onOpenButtonPress: a, entryPointCommandButtonRef: s, type: o } = e,
        d = (0, v.Z)({ type: o }),
        {
            isExecutingLaunchInteraction: u,
            buttonText: h,
            hasActiveMatchingEmbeddedActivity: p,
            isEmbeddedApp: f,
            currentEmbeddedActivity: g,
            channelRecipientUserId: _,
            setIsExecutingLaunchInteraction: C,
            analyticsLocations: E
        } = (0, m.Z)({
            context: t,
            primaryEntryPointCommand: l,
            application: n,
            showAppLauncherPopup: d
        }),
        Z = (0, m.J)({
            context: t,
            application: n,
            isEmbeddedApp: f,
            hasActiveMatchingEmbeddedActivity: p,
            currentEmbeddedActivity: g,
            onOpenButtonPress: a,
            channelRecipientUserId: _,
            setIsExecutingLaunchInteraction: C,
            analyticsLocations: E
        }),
        N = p ? c.zxk.Colors.RED : c.zxk.Colors.BRAND,
        T = (0, x.Q3)('LoadedEntryPointCommandButton');
    return (0, i.jsx)(c.zxk, {
        className: r()(b.entryPointAppCommandButton, I.Id),
        size: T ? c.zxk.Sizes.SMALL : c.zxk.Sizes.LARGE,
        color: N,
        submitting: u,
        onClick: Z,
        buttonRef: s,
        children: h
    });
}
