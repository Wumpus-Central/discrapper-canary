n.d(t, {
    ZP: () => A,
    xL: () => S,
});
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(97519),
    l = n(731965),
    c = n(481060),
    u = n(911969),
    d = n(100527),
    f = n(367907),
    _ = n(450936),
    p = n(368478),
    h = n(499254),
    m = n(827498),
    g = n(213459),
    E = n(541716),
    b = n(61356),
    y = n(981631),
    O = n(314734),
    v = n(409575);
let I = (0, s.U)(() => ({ visible: !1 })),
    T = (e) => {
        (0, l.j)(() => {
            I.setState({ visible: e });
        });
    },
    S = I;
function A(e) {
    let { context: t, entryPointCommandButtonRef: n, type: o } = e,
        { isInitialLoading: a, application: s, primaryEntryPointCommand: l } = (0, _.Z)({ context: t }),
        c = null == s ? void 0 : s.id,
        p = (0, b.Z)({ type: o }),
        { sectionCommands: O } = (0, g.If)(t, null != c ? c : ""),
        v = i.useCallback(() => {
            p
                ? h.yT(m.ti.DISMISSED)
                : (h.__(m._b.TEXT, E.Ie.NORMAL, { applicationId: c }),
                  (0, f.yw)(y.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                      application_id: c,
                      location: d.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
                      source: m._b.TEXT,
                  }));
        }, [c, p]),
        I = null != O && O.filter((e) => e.type === u.yU.CHAT || e.type === u.yU.PRIMARY_ENTRY_POINT).length > 0,
        S = !a && null != s && !0 === I;
    return (i.useEffect(
        () => (
            T(S),
            () => {
                T(!1);
            }
        ),
        [S],
    ),
    S)
        ? (0, r.jsx)(N, {
              context: t,
              application: s,
              primaryEntryPointCommand: l,
              onOpenButtonPress: v,
              entryPointCommandButtonRef: n,
              type: o,
          })
        : null;
}
function N(e) {
    let {
            context: t,
            application: n,
            primaryEntryPointCommand: i,
            onOpenButtonPress: o,
            entryPointCommandButtonRef: s,
            type: l,
        } = e,
        u = (0, b.Z)({ type: l }),
        {
            isExecutingLaunchInteraction: d,
            buttonText: f,
            hasActiveMatchingEmbeddedActivity: _,
            isEmbeddedApp: h,
            currentEmbeddedActivity: m,
            channelRecipientUserId: g,
            setIsExecutingLaunchInteraction: E,
            analyticsLocations: y,
        } = (0, p.Z)({
            context: t,
            primaryEntryPointCommand: i,
            application: n,
            showAppLauncherPopup: u,
        }),
        I = (0, p.J)({
            context: t,
            application: n,
            isEmbeddedApp: h,
            hasActiveMatchingEmbeddedActivity: _,
            currentEmbeddedActivity: m,
            onOpenButtonPress: o,
            channelRecipientUserId: g,
            setIsExecutingLaunchInteraction: E,
            analyticsLocations: y,
        }),
        T = _ ? "critical-primary" : "primary";
    return (0, r.jsx)("div", {
        className: a()(v.entryPointAppCommandButtonContainer, O.Id),
        children: (0, r.jsx)(c.zxk, {
            variant: T,
            loading: d,
            onClick: I,
            fullWidth: !0,
            buttonRef: s,
            text: f,
        }),
    });
}
