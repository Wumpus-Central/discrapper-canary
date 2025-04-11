n.d(t, { Z: () => P }), n(388685);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    o = n(218061),
    a = n(481060),
    s = n(115130),
    c = n(361213),
    u = n(778569),
    d = n(213459),
    p = n(835473),
    m = n(424602),
    f = n(541099),
    h = n(827498),
    b = n(783097),
    _ = n(753972),
    y = n(387658),
    x = n(536650),
    C = n(675993),
    v = n(689079),
    g = n(388032),
    N = n(189102),
    j = n(413097);
function P(e) {
    var t;
    let { context: n, application: c, sectionName: u, showFriendsTab: P } = e,
        O = 'channel' === n.type ? n.channel : void 0,
        A = (0, l.e7)([f.Z], () => f.Z.entrypoint()),
        I = null != (t = (0, p.q)(c.id === v.bi.BUILT_IN ? null : c.id)) ? t : c,
        S = (0, l.e7)([s.Z], () => s.Z.inDevModeForApplication(I.id)),
        T = (0, b.ye)(I) ? E : C.Z,
        L = m.PM.useExperiment({ location: 'AppLauncherApplicationViewScreen' }),
        w = r.useRef(null),
        [R, k] = r.useState(!1),
        { iconURL: Z, name: M } = r.useMemo(
            () =>
                (0, b.sl)(I, {
                    fakeAppIconURL: j,
                    size: 84
                }),
            [I]
        ),
        W = (0, d.PL)(!0, !0),
        D = (0, d.LD)(null == O ? void 0 : O.guild_id, !0),
        B = r.useMemo(() => (0, d.If)(n, I.id), [W, D, n, I.id]),
        U = !B.isGuildInstalled && !B.isUserInstalled;
    return (
        r.useEffect(() => {
            U && d.ZP.queryInstallOnDemandApp(I.id, null == O ? void 0 : O.id);
        }, [I.id, null == O ? void 0 : O.id, U]),
        (0, i.jsxs)(a.u2D, {
            className: N.container,
            fade: !0,
            ref: w,
            role: 'region',
            'aria-label': g.NW.formatToPlainString(g.t['4OP4Ul'], { applicationName: M }),
            children: [
                (0, i.jsx)(x.Z, {
                    application: I,
                    context: n,
                    name: M,
                    iconURL: Z,
                    scrollerRef: w,
                    sectionName: u
                }),
                null != Z &&
                    (0, i.jsx)(_.Z, {
                        src: Z,
                        className: N.appIcon
                    }),
                (0, i.jsx)(o.Z, { size: L.enabled ? 44 : 54 }),
                (0, i.jsx)(T, {
                    context: n,
                    application: I,
                    sectionName: u,
                    hasCommands: R,
                    showFriendsTab: P
                }),
                A === h._b.TEXT
                    ? (0, i.jsx)(y.Z, {
                          context: n,
                          application: I,
                          sectionName: u,
                          installOnDemand: U,
                          setHasCommands: k
                      })
                    : null,
                L.enabled
                    ? (0, i.jsx)(C.u, {
                          context: n,
                          application: I,
                          hasCommands: R,
                          isDeveloperOfThisApp: S
                      })
                    : null
            ]
        })
    );
}
function E(e) {
    let { context: t, application: n, sectionName: r, hasCommands: l, showFriendsTab: o } = e,
        a = (0, u.Z)({
            applicationId: n.id,
            size: 2048,
            names: ['embedded_cover']
        }),
        s = (0, b.yJ)(n),
        d = null != s && null != s.activity_preview_video_asset_id ? (0, c.Z)(n.id, s.activity_preview_video_asset_id) : null;
    return (0, i.jsx)(C.Z, {
        context: t,
        application: n,
        imageCoverUrl: a.url,
        videoUrl: d,
        sectionName: r,
        hasCommands: l,
        showFriendsTab: o
    });
}
