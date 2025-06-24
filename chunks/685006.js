n.d(t, {
    ZP: () => I,
    xL: () => E
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(97519),
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
    x = n(981631),
    C = n(314734),
    v = n(522271);
let j = (0, o.U)(() => ({ visible: !1 })),
    O = (e) => {
        (0, s.j)(() => {
            j.setState({ visible: e });
        });
    },
    E = j;
function I(e) {
    let { context: t, entryPointCommandButtonRef: n, type: l } = e,
        { isInitialLoading: a, application: o, primaryEntryPointCommand: s } = (0, h.Z)({ context: t }),
        c = null == o ? void 0 : o.id,
        f = (0, y.Z)({ type: l }),
        { sectionCommands: C } = (0, b.If)(t, null != c ? c : ''),
        v = i.useCallback(() => {
            f
                ? m.yT(g.ti.DISMISSED)
                : (m.__(g._b.TEXT, _.Ie.NORMAL, { applicationId: c }),
                  (0, p.yw)(x.rMx.APPLICATION_COMMAND_SECTION_SELECTED, {
                      application_id: c,
                      location: d.Z.APP_DMS_ENTRY_POINT_COMMAND_BUTTON,
                      source: g._b.TEXT
                  }));
        }, [c, f]),
        j = null != C && C.filter((e) => e.type === u.yU.CHAT || e.type === u.yU.PRIMARY_ENTRY_POINT).length > 0,
        E = !a && null != o && !0 === j;
    return (i.useEffect(
        () => (
            O(E),
            () => {
                O(!1);
            }
        ),
        [E]
    ),
    E)
        ? (0, r.jsx)(S, {
              context: t,
              application: o,
              primaryEntryPointCommand: s,
              onOpenButtonPress: v,
              entryPointCommandButtonRef: n,
              type: l
          })
        : null;
}
function S(e) {
    let { context: t, application: n, primaryEntryPointCommand: i, onOpenButtonPress: l, entryPointCommandButtonRef: o, type: s } = e,
        u = (0, y.Z)({ type: s }),
        {
            isExecutingLaunchInteraction: d,
            buttonText: p,
            hasActiveMatchingEmbeddedActivity: h,
            isEmbeddedApp: m,
            currentEmbeddedActivity: g,
            channelRecipientUserId: b,
            setIsExecutingLaunchInteraction: _,
            analyticsLocations: x
        } = (0, f.Z)({
            context: t,
            primaryEntryPointCommand: i,
            application: n,
            showAppLauncherPopup: u
        }),
        j = (0, f.J)({
            context: t,
            application: n,
            isEmbeddedApp: m,
            hasActiveMatchingEmbeddedActivity: h,
            currentEmbeddedActivity: g,
            onOpenButtonPress: l,
            channelRecipientUserId: b,
            setIsExecutingLaunchInteraction: _,
            analyticsLocations: x
        }),
        O = h ? c.zxk.Colors.RED : c.zxk.Colors.BRAND;
    return (0, r.jsx)(c.zxk, {
        className: a()(v.entryPointAppCommandButton, C.Id),
        size: c.zxk.Sizes.SMALL,
        color: O,
        submitting: d,
        onClick: j,
        buttonRef: o,
        children: p
    });
}
