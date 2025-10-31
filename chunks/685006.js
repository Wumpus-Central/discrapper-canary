n.d(t, {
    ZP: () => S,
    xL: () => j,
});
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(191336),
    s = n(731965),
    c = n(481060),
    u = n(911969),
    d = n(100527),
    p = n(367907),
    f = n(450936),
    h = n(368478),
    m = n(499254),
    g = n(827498),
    b = n(213459),
    _ = n(541716),
    y = n(61356),
    C = n(981631),
    v = n(314734),
    O = n(409575);
let x = (0, o.U)(() => ({ visible: !1 })),
    E = (e) => {
        (0, s.j)(() => {
            x.setState({ visible: e });
        });
    },
    j = x;
function S(e) {
    let { context: t, entryPointCommandButtonRef: n, type: l } = e,
        { isInitialLoading: a, application: o, primaryEntryPointCommand: s } = (0, f.Z)({ context: t }),
        c = null == o ? void 0 : o.id,
        h = (0, y.Z)({ type: l }),
        { sectionCommands: v } = (0, b.If)(t, null != c ? c : ""),
        O = i.useCallback(() => {
            h
                ? m.yT(g.ti.DISMISSED)
                : (m.__(g._b.TEXT, _.Ie.NORMAL, { applicationId: c }),
                  (0, p.yw)(C.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                      application_id: c,
                      location: d.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
                      source: g._b.TEXT,
                  }));
        }, [c, h]),
        x = null != v && v.filter((e) => e.type === u.yU.CHAT || e.type === u.yU.PRIMARY_ENTRY_POINT).length > 0,
        j = !a && null != o && !0 === x;
    return (i.useEffect(
        () => (
            E(j),
            () => {
                E(!1);
            }
        ),
        [j],
    ),
    j)
        ? (0, r.jsx)(P, {
              context: t,
              application: o,
              primaryEntryPointCommand: s,
              onOpenButtonPress: O,
              entryPointCommandButtonRef: n,
              type: l,
          })
        : null;
}
function P(e) {
    let {
            context: t,
            application: n,
            primaryEntryPointCommand: i,
            onOpenButtonPress: l,
            entryPointCommandButtonRef: o,
            type: s,
        } = e,
        u = (0, y.Z)({ type: s }),
        {
            isExecutingLaunchInteraction: d,
            buttonText: p,
            hasActiveMatchingEmbeddedActivity: f,
            isEmbeddedApp: m,
            currentEmbeddedActivity: g,
            channelRecipientUserId: b,
            setIsExecutingLaunchInteraction: _,
            analyticsLocations: C,
        } = (0, h.Z)({
            context: t,
            primaryEntryPointCommand: i,
            application: n,
            showAppLauncherPopup: u,
        }),
        x = (0, h.J)({
            context: t,
            application: n,
            isEmbeddedApp: m,
            hasActiveMatchingEmbeddedActivity: f,
            currentEmbeddedActivity: g,
            onOpenButtonPress: l,
            channelRecipientUserId: b,
            setIsExecutingLaunchInteraction: _,
            analyticsLocations: C,
        }),
        E = f ? "critical-primary" : "primary";
    return (0, r.jsx)("div", {
        className: a()(O.entryPointAppCommandButtonContainer, v.Id),
        children: (0, r.jsx)(c.Button, {
            variant: E,
            loading: d,
            onClick: x,
            fullWidth: !0,
            buttonRef: o,
            text: p,
        }),
    });
}
