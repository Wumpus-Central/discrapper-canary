n.d(t, {
    ZP: () => S,
    xL: () => E
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(97519),
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
    _ = n(541716),
    y = n(61356),
    C = n(981631),
    x = n(314734),
    v = n(522271);
let O = (0, a.U)(() => ({ visible: !1 })),
    j = (e) => {
        (0, s.j)(() => {
            O.setState({ visible: e });
        });
    },
    E = O;
function S(e) {
    let { context: t, entryPointCommandButtonRef: n, type: l } = e,
        { isInitialLoading: o, application: a, primaryEntryPointCommand: s } = (0, h.Z)({ context: t }),
        c = null == a ? void 0 : a.id,
        f = (0, y.Z)({ type: l }),
        { sectionCommands: x } = (0, b.If)(t, null != c ? c : ''),
        v = i.useCallback(() => {
            f
                ? m.yT(g.ti.DISMISSED)
                : (m.__(g._b.TEXT, _.Ie.NORMAL, { applicationId: c }),
                  (0, p.yw)(C.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                      application_id: c,
                      location: d.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
                      source: g._b.TEXT
                  }));
        }, [c, f]),
        O = null != x && x.filter((e) => e.type === u.yU.CHAT || e.type === u.yU.PRIMARY_ENTRY_POINT).length > 0,
        E = !o && null != a && !0 === O;
    return (i.useEffect(
        () => (
            j(E),
            () => {
                j(!1);
            }
        ),
        [E]
    ),
    E)
        ? (0, r.jsx)(I, {
              context: t,
              application: a,
              primaryEntryPointCommand: s,
              onOpenButtonPress: v,
              entryPointCommandButtonRef: n,
              type: l
          })
        : null;
}
function I(e) {
    let { context: t, application: n, primaryEntryPointCommand: i, onOpenButtonPress: l, entryPointCommandButtonRef: a, type: s } = e,
        u = (0, y.Z)({ type: s }),
        {
            isExecutingLaunchInteraction: d,
            buttonText: p,
            hasActiveMatchingEmbeddedActivity: h,
            isEmbeddedApp: m,
            currentEmbeddedActivity: g,
            channelRecipientUserId: b,
            setIsExecutingLaunchInteraction: _,
            analyticsLocations: C
        } = (0, f.Z)({
            context: t,
            primaryEntryPointCommand: i,
            application: n,
            showAppLauncherPopup: u
        }),
        O = (0, f.J)({
            context: t,
            application: n,
            isEmbeddedApp: m,
            hasActiveMatchingEmbeddedActivity: h,
            currentEmbeddedActivity: g,
            onOpenButtonPress: l,
            channelRecipientUserId: b,
            setIsExecutingLaunchInteraction: _,
            analyticsLocations: C
        }),
        j = h ? c.zxk.Colors.RED : c.zxk.Colors.BRAND;
    return (0, r.jsx)(c.zxk, {
        className: o()(v.entryPointAppCommandButton, x.Id),
        size: c.zxk.Sizes.SMALL,
        color: j,
        submitting: d,
        onClick: O,
        buttonRef: a,
        children: p
    });
}
