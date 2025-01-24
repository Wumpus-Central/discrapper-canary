n.d(t, {
    ZP: function () {
        return T;
    },
    xL: function () {
        return S;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(213459),
    x = n(541716),
    v = n(540059),
    _ = n(61356),
    I = n(981631),
    E = n(314734),
    b = n(700559);
let Z = (0, s.U)(() => ({ visible: !1 })),
    N = (e) => {
        (0, o.j)(() => {
            Z.setState({ visible: e });
        });
    },
    S = Z;
function T(e) {
    let { context: t, entryPointCommandButtonRef: n, type: r } = e,
        { isInitialLoading: a, application: s, primaryEntryPointCommand: o } = (0, p.Z)({ context: t }),
        c = null == s ? void 0 : s.id,
        m = (0, _.Z)({ type: r }),
        { sectionCommands: v } = (0, C.If)(t, null != c ? c : ''),
        E = l.useCallback(() => {
            m
                ? f.yT(g.ti.DISMISSED)
                : (f.__(g._b.TEXT, x.Ie.NORMAL, { applicationId: c }),
                  (0, h.yw)(I.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                      application_id: c,
                      location: u.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
                      source: g._b.TEXT
                  }));
        }, [c, m]),
        b = null != v && v.filter((e) => e.type === d.yU.CHAT || e.type === d.yU.PRIMARY_ENTRY_POINT).length > 0,
        Z = !a && null != s && !0 === b;
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
              onOpenButtonPress: E,
              entryPointCommandButtonRef: n,
              type: r
          })
        : null;
}
function j(e) {
    let { context: t, application: n, primaryEntryPointCommand: l, onOpenButtonPress: r, entryPointCommandButtonRef: s, type: o } = e,
        d = (0, _.Z)({ type: o }),
        {
            isExecutingLaunchInteraction: u,
            buttonText: h,
            hasActiveMatchingEmbeddedActivity: p,
            isEmbeddedApp: f,
            currentEmbeddedActivity: g,
            channelRecipientUserId: C,
            setIsExecutingLaunchInteraction: x,
            analyticsLocations: I
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
            onOpenButtonPress: r,
            channelRecipientUserId: C,
            setIsExecutingLaunchInteraction: x,
            analyticsLocations: I
        }),
        N = p ? c.Button.Colors.RED : c.Button.Colors.BRAND,
        S = (0, v.Q3)('LoadedEntryPointCommandButton');
    return (0, i.jsx)(c.Button, {
        className: a()(b.entryPointAppCommandButton, E.Id),
        size: S ? c.Button.Sizes.SMALL : c.Button.Sizes.LARGE,
        color: N,
        submitting: u,
        onClick: Z,
        buttonRef: s,
        children: h
    });
}
