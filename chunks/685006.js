n.d(t, {
    ZP: function () {
        return S;
    },
    xL: function () {
        return N;
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
    v = n(61356),
    _ = n(981631),
    I = n(314734),
    E = n(700559);
let b = (0, s.U)(() => ({ visible: !1 })),
    Z = (e) => {
        (0, o.j)(() => {
            b.setState({ visible: e });
        });
    },
    N = b;
function S(e) {
    let { channel: t, entryPointCommandButtonRef: n, type: r } = e,
        { isInitialLoading: a, application: s, primaryEntryPointCommand: o } = (0, p.Z)({ channel: t }),
        c = null == s ? void 0 : s.id,
        m = (0, v.Z)({ type: r }),
        { sectionCommands: I } = (0, C.If)(t, null != c ? c : ''),
        E = l.useCallback(() => {
            m
                ? f.yT(g.ti.DISMISSED)
                : (f.__(g._b.TEXT, x.Ie.NORMAL, { applicationId: c }),
                  (0, h.yw)(_.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                      application_id: c,
                      location: u.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
                      source: g._b.TEXT
                  }));
        }, [c, m]),
        b = null != I && I.filter((e) => e.type === d.yU.CHAT || e.type === d.yU.PRIMARY_ENTRY_POINT).length > 0,
        N = !a && null != s && !0 === b;
    return (l.useEffect(
        () => (
            Z(N),
            () => {
                Z(!1);
            }
        ),
        [N]
    ),
    N)
        ? (0, i.jsx)(T, {
              channel: t,
              application: s,
              primaryEntryPointCommand: o,
              onOpenButtonPress: E,
              entryPointCommandButtonRef: n,
              type: r
          })
        : null;
}
function T(e) {
    let { channel: t, application: n, primaryEntryPointCommand: l, onOpenButtonPress: r, entryPointCommandButtonRef: s, type: o } = e,
        d = (0, v.Z)({ type: o }),
        {
            isExecutingLaunchInteraction: u,
            buttonText: h,
            hasActiveMatchingEmbeddedActivity: p,
            isEmbeddedApp: f,
            currentEmbeddedActivity: g,
            channelRecipientUserId: C,
            setIsExecutingLaunchInteraction: x,
            analyticsLocations: _
        } = (0, m.Z)({
            channel: t,
            primaryEntryPointCommand: l,
            application: n,
            showAppLauncherPopup: d
        }),
        b = (0, m.J)({
            channel: t,
            application: n,
            isEmbeddedApp: f,
            hasActiveMatchingEmbeddedActivity: p,
            currentEmbeddedActivity: g,
            onOpenButtonPress: r,
            channelRecipientUserId: C,
            setIsExecutingLaunchInteraction: x,
            analyticsLocations: _
        }),
        Z = p ? c.Button.Colors.RED : c.Button.Colors.BRAND;
    return (0, i.jsx)(c.Button, {
        className: a()(E.entryPointAppCommandButton, I.Id),
        size: c.Button.Sizes.LARGE,
        color: Z,
        submitting: u,
        onClick: b,
        buttonRef: s,
        children: h
    });
}
