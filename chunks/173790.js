n.d(t, { Z: () => P }), n(388685);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(218061),
    o = n(481060),
    s = n(115130),
    c = n(361213),
    d = n(778569),
    u = n(213459),
    p = n(835473),
    m = n(424602),
    f = n(541099),
    h = n(827498),
    b = n(783097),
    x = n(753972),
    C = n(387658),
    _ = n(536650),
    v = n(675993),
    y = n(689079),
    N = n(388032),
    g = n(189102),
    j = n(413097);
function P(e) {
    var t;
    let { context: n, application: c, sectionName: d, showFriendsTab: P } = e,
        A = 'channel' === n.type ? n.channel : void 0,
        I = (0, l.e7)([f.Z], () => f.Z.entrypoint()),
        O = null != (t = (0, p.q)(c.id === y.bi.BUILT_IN ? null : c.id)) ? t : c,
        S = (0, l.e7)([s.Z], () => s.Z.inDevModeForApplication(O.id)),
        T = (0, b.ye)(O) ? E : v.Z,
        L = m.PM.useExperiment({ location: 'AppLauncherApplicationViewScreen' }),
        w = r.useRef(null),
        [R, k] = r.useState(!1),
        { iconURL: Z, name: M } = r.useMemo(
            () =>
                (0, b.sl)(O, {
                    fakeAppIconURL: j,
                    size: 84
                }),
            [O]
        ),
        W = (0, u.PL)(!0, !0),
        D = (0, u.LD)(null == A ? void 0 : A.guild_id, !0),
        U = r.useMemo(() => (0, u.If)(n, O.id), [W, D, n, O.id]),
        B = !U.isGuildInstalled && !U.isUserInstalled;
    return (
        r.useEffect(() => {
            B && u.ZP.queryInstallOnDemandApp(O.id, null == A ? void 0 : A.id);
        }, [O.id, null == A ? void 0 : A.id, B]),
        (0, i.jsxs)(o.u2D, {
            className: g.container,
            fade: !0,
            ref: w,
            role: 'region',
            'aria-label': N.NW.formatToPlainString(N.t['4OP4Ul'], { applicationName: M }),
            children: [
                (0, i.jsx)(_.Z, {
                    application: O,
                    context: n,
                    name: M,
                    iconURL: Z,
                    scrollerRef: w,
                    sectionName: d
                }),
                null != Z &&
                    (0, i.jsx)(x.Z, {
                        src: Z,
                        className: g.appIcon
                    }),
                (0, i.jsx)(a.Z, { size: L.enabled ? 44 : 54 }),
                (0, i.jsx)(T, {
                    context: n,
                    application: O,
                    sectionName: d,
                    hasCommands: R,
                    showFriendsTab: P
                }),
                I === h._b.TEXT
                    ? (0, i.jsx)(C.Z, {
                          context: n,
                          application: O,
                          sectionName: d,
                          installOnDemand: B,
                          setHasCommands: k
                      })
                    : null,
                L.enabled
                    ? (0, i.jsx)(v.u, {
                          context: n,
                          application: O,
                          hasCommands: R,
                          isDeveloperOfThisApp: S
                      })
                    : null
            ]
        })
    );
}
function E(e) {
    let { context: t, application: n, sectionName: r, hasCommands: l, showFriendsTab: a } = e,
        o = (0, d.Z)({
            applicationId: n.id,
            size: 2048,
            names: ['embedded_cover']
        }),
        s = (0, b.yJ)(n),
        u = null != s && null != s.activity_preview_video_asset_id ? (0, c.Z)(n.id, s.activity_preview_video_asset_id) : null;
    return (0, i.jsx)(v.Z, {
        context: t,
        application: n,
        imageCoverUrl: o.url,
        videoUrl: u,
        sectionName: r,
        hasCommands: l,
        showFriendsTab: a
    });
}
