n.d(t, { Z: () => E }), n(388685);
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
    f = n(573188),
    h = n(541099),
    b = n(827498),
    _ = n(783097),
    y = n(753972),
    x = n(387658),
    C = n(536650),
    v = n(675993),
    g = n(689079),
    j = n(388032),
    P = n(189102),
    N = n(413097);
function E(e) {
    var t;
    let { context: n, application: c, sectionName: u, showFriendsTab: E } = e,
        A = 'channel' === n.type ? n.channel : void 0,
        I = (0, l.e7)([h.Z], () => h.Z.entrypoint()),
        S = null != (t = (0, p.q)(c.id === g.bi.BUILT_IN ? null : c.id)) ? t : c,
        T = (0, l.e7)([s.Z], () => s.Z.inDevModeForApplication(S.id)),
        L = (0, _.ye)(S) ? O : v.Z,
        w = m.PM.useExperiment({ location: 'AppLauncherApplicationViewScreen' }),
        { enabled: R } = f.X.useExperiment({ location: 'AppLauncherApplicationViewScreen' }),
        Z = r.useRef(null),
        [k, M] = r.useState(!1),
        { iconURL: D, name: B } = r.useMemo(
            () =>
                (0, _.sl)(S, {
                    fakeAppIconURL: N,
                    size: 84
                }),
            [S]
        ),
        U = (0, d.PL)(!0, !0),
        H = (0, d.LD)(null == A ? void 0 : A.guild_id, !0),
        W = r.useMemo(() => (0, d.If)(n, S.id), [U, H, n, S.id]),
        V = !W.isGuildInstalled && !W.isUserInstalled;
    return (
        r.useEffect(() => {
            V && d.ZP.queryInstallOnDemandApp(S.id, null == A ? void 0 : A.id);
        }, [S.id, null == A ? void 0 : A.id, V]),
        (0, i.jsxs)(a.u2D, {
            className: P.container,
            fade: !0,
            ref: Z,
            role: 'region',
            'aria-label': j.intl.formatToPlainString(j.t['4OP4Ul'], { applicationName: B }),
            children: [
                (0, i.jsx)(C.Z, {
                    application: S,
                    context: n,
                    name: B,
                    iconURL: D,
                    scrollerRef: Z,
                    sectionName: u
                }),
                null != D &&
                    (0, i.jsx)(y.Z, {
                        src: D,
                        className: P.appIcon
                    }),
                (0, i.jsx)(o.Z, { size: w.enabled ? 44 : R ? 52 : 54 }),
                (0, i.jsx)(L, {
                    context: n,
                    application: S,
                    sectionName: u,
                    hasCommands: k,
                    showFriendsTab: E
                }),
                I === b._b.TEXT
                    ? (0, i.jsx)(x.Z, {
                          context: n,
                          application: S,
                          sectionName: u,
                          installOnDemand: V,
                          setHasCommands: M
                      })
                    : null,
                w.enabled || R
                    ? (0, i.jsx)(v.u, {
                          context: n,
                          application: S,
                          hasCommands: k,
                          isDeveloperOfThisApp: T
                      })
                    : null
            ]
        })
    );
}
function O(e) {
    let { context: t, application: n, sectionName: r, hasCommands: l, showFriendsTab: o } = e,
        a = (0, u.Z)({
            applicationId: n.id,
            size: 2048,
            names: ['embedded_cover']
        }),
        s = (0, _.yJ)(n),
        d = null != s && null != s.activity_preview_video_asset_id ? (0, c.Z)(n.id, s.activity_preview_video_asset_id) : null;
    return (0, i.jsx)(v.Z, {
        context: t,
        application: n,
        imageCoverUrl: a.url,
        videoUrl: d,
        sectionName: r,
        hasCommands: l,
        showFriendsTab: o
    });
}
