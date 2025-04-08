n.d(t, { Z: () => P }), n(388685);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(218061),
    o = n(481060),
    c = n(115130),
    s = n(361213),
    u = n(778569),
    d = n(213459),
    p = n(835473),
    m = n(424602),
    f = n(541099),
    h = n(827498),
    b = n(783097),
    C = n(753972),
    x = n(387658),
    _ = n(536650),
    y = n(675993),
    v = n(689079),
    N = n(388032),
    g = n(189102),
    j = n(413097);
function P(e) {
    var t;
    let { context: n, application: s, sectionName: u, showFriendsTab: P } = e,
        A = 'channel' === n.type ? n.channel : void 0,
        I = (0, l.e7)([f.Z], () => f.Z.entrypoint()),
        O = null != (t = (0, p.q)(s.id === v.bi.BUILT_IN ? null : s.id)) ? t : s,
        S = (0, l.e7)([c.Z], () => c.Z.inDevModeForApplication(O.id)),
        T = (0, b.ye)(O) ? E : y.Z,
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
        D = (0, d.PL)(!0, !0),
        W = (0, d.LD)(null == A ? void 0 : A.guild_id, !0),
        B = r.useMemo(() => (0, d.If)(n, O.id), [D, W, n, O.id]),
        U = !B.isGuildInstalled && !B.isUserInstalled;
    return (
        r.useEffect(() => {
            U && d.ZP.queryInstallOnDemandApp(O.id, null == A ? void 0 : A.id);
        }, [O.id, null == A ? void 0 : A.id, U]),
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
                    sectionName: u
                }),
                null != Z &&
                    (0, i.jsx)(C.Z, {
                        src: Z,
                        className: g.appIcon
                    }),
                (0, i.jsx)(a.Z, { size: L.enabled ? 44 : 54 }),
                (0, i.jsx)(T, {
                    context: n,
                    application: O,
                    sectionName: u,
                    hasCommands: R,
                    showFriendsTab: P
                }),
                I === h._b.TEXT
                    ? (0, i.jsx)(x.Z, {
                          context: n,
                          application: O,
                          sectionName: u,
                          installOnDemand: U,
                          setHasCommands: k
                      })
                    : null,
                L.enabled
                    ? (0, i.jsx)(y.u, {
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
        o = (0, u.Z)({
            applicationId: n.id,
            size: 2048,
            names: ['embedded_cover']
        }),
        c = (0, b.yJ)(n),
        d = null != c && null != c.activity_preview_video_asset_id ? (0, s.Z)(n.id, c.activity_preview_video_asset_id) : null;
    return (0, i.jsx)(y.Z, {
        context: t,
        application: n,
        imageCoverUrl: o.url,
        videoUrl: d,
        sectionName: r,
        hasCommands: l,
        showFriendsTab: a
    });
}
