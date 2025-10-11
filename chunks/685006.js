n.d(t, {
    ZP: () => S,
    xL: () => E,
});
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(191336),
    s = n(731965),
    c = n(481060),
    u = n(911969),
    d = n(100527),
    p = n(367907),
    h = n(450936),
    f = n(368478),
    m = n(499254),
    g = n(827498),
    b = n(213459),
    C = n(541716),
    y = n(61356),
    _ = n(981631),
    v = n(314734),
    x = n(409575);
let O = (0, o.U)(() => ({ visible: !1 })),
    j = (e) => {
        (0, s.j)(() => {
            O.setState({ visible: e });
        });
    },
    E = O;
function S(e) {
    let { context: t, entryPointCommandButtonRef: n, type: l } = e,
        { isInitialLoading: a, application: o, primaryEntryPointCommand: s } = (0, h.Z)({ context: t }),
        c = null == o ? void 0 : o.id,
        f = (0, y.Z)({ type: l }),
        { sectionCommands: v } = (0, b.If)(t, null != c ? c : ""),
        x = r.useCallback(() => {
            f
                ? m.yT(g.ti.DISMISSED)
                : (m.__(g._b.TEXT, C.Ie.NORMAL, { applicationId: c }),
                  (0, p.yw)(_.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                      application_id: c,
                      location: d.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
                      source: g._b.TEXT,
                  }));
        }, [c, f]),
        O = null != v && v.filter((e) => e.type === u.yU.CHAT || e.type === u.yU.PRIMARY_ENTRY_POINT).length > 0,
        E = !a && null != o && !0 === O;
    return (r.useEffect(
        () => (
            j(E),
            () => {
                j(!1);
            }
        ),
        [E],
    ),
    E)
        ? (0, i.jsx)(P, {
              context: t,
              application: o,
              primaryEntryPointCommand: s,
              onOpenButtonPress: x,
              entryPointCommandButtonRef: n,
              type: l,
          })
        : null;
}
function P(e) {
    let {
            context: t,
            application: n,
            primaryEntryPointCommand: r,
            onOpenButtonPress: l,
            entryPointCommandButtonRef: o,
            type: s,
        } = e,
        u = (0, y.Z)({ type: s }),
        {
            isExecutingLaunchInteraction: d,
            buttonText: p,
            hasActiveMatchingEmbeddedActivity: h,
            isEmbeddedApp: m,
            currentEmbeddedActivity: g,
            channelRecipientUserId: b,
            setIsExecutingLaunchInteraction: C,
            analyticsLocations: _,
        } = (0, f.Z)({
            context: t,
            primaryEntryPointCommand: r,
            application: n,
            showAppLauncherPopup: u,
        }),
        O = (0, f.J)({
            context: t,
            application: n,
            isEmbeddedApp: m,
            hasActiveMatchingEmbeddedActivity: h,
            currentEmbeddedActivity: g,
            onOpenButtonPress: l,
            channelRecipientUserId: b,
            setIsExecutingLaunchInteraction: C,
            analyticsLocations: _,
        }),
        j = h ? "critical-primary" : "primary";
    return (0, i.jsx)("div", {
        className: a()(x.entryPointAppCommandButtonContainer, v.Id),
        children: (0, i.jsx)(c.Button, {
            variant: j,
            loading: d,
            onClick: O,
            fullWidth: !0,
            buttonRef: o,
            text: p,
        }),
    });
}
