n.d(t, { Z: () => N }), n(388685);
var i = n(255367),
    r = n(73800),
    l = n(442837),
    o = n(218061),
    a = n(481060),
    s = n(115130),
    c = n(361213),
    u = n(778569),
    d = n(213459),
    p = n(835473),
    m = n(573188),
    f = n(541099),
    h = n(827498),
    b = n(783097),
    _ = n(753972),
    y = n(387658),
    v = n(536650),
    x = n(675993),
    C = n(689079),
    g = n(388032),
    j = n(189102),
    P = n(413097);
function N(e) {
    var t;
    let { context: n, application: c, sectionName: u, showFriendsTab: N } = e,
        E = 'channel' === n.type ? n.channel : void 0,
        A = (0, l.e7)([f.Z], () => f.Z.entrypoint()),
        I = null != (t = (0, p.q)(c.id === C.bi.BUILT_IN ? null : c.id)) ? t : c,
        S = (0, l.e7)([s.Z], () => s.Z.inDevModeForApplication(I.id)),
        T = (0, b.ye)(I) ? O : x.Z,
        { enabled: w } = m.X.useExperiment({ location: 'AppLauncherApplicationViewScreen' }),
        L = r.useRef(null),
        [R, Z] = r.useState(!1),
        { iconURL: k, name: M } = r.useMemo(
            () =>
                (0, b.sl)(I, {
                    fakeAppIconURL: P,
                    size: 84
                }),
            [I]
        ),
        D = (0, d.PL)(!0, !0),
        B = (0, d.LD)(null == E ? void 0 : E.guild_id, !0),
        U = r.useMemo(() => (0, d.If)(n, I.id), [D, B, n, I.id]),
        H = !U.isGuildInstalled && !U.isUserInstalled;
    return (
        r.useEffect(() => {
            H && d.ZP.queryInstallOnDemandApp(I.id, null == E ? void 0 : E.id);
        }, [I.id, null == E ? void 0 : E.id, H]),
        (0, i.jsxs)(a.u2D, {
            className: j.container,
            fade: !0,
            ref: L,
            role: 'region',
            'aria-label': g.intl.formatToPlainString(g.t['4OP4Ul'], { applicationName: M }),
            children: [
                (0, i.jsx)(v.Z, {
                    application: I,
                    context: n,
                    name: M,
                    iconURL: k,
                    scrollerRef: L,
                    sectionName: u
                }),
                null != k &&
                    (0, i.jsx)(_.Z, {
                        src: k,
                        className: j.appIcon
                    }),
                (0, i.jsx)(o.Z, { size: w ? 52 : 54 }),
                (0, i.jsx)(T, {
                    context: n,
                    application: I,
                    sectionName: u,
                    hasCommands: R,
                    showFriendsTab: N
                }),
                A === h._b.TEXT
                    ? (0, i.jsx)(y.Z, {
                          context: n,
                          application: I,
                          sectionName: u,
                          installOnDemand: H,
                          setHasCommands: Z
                      })
                    : null,
                w
                    ? (0, i.jsx)(x.u, {
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
function O(e) {
    let { context: t, application: n, sectionName: r, hasCommands: l, showFriendsTab: o } = e,
        a = (0, u.Z)({
            applicationId: n.id,
            size: 2048,
            names: ['embedded_cover']
        }),
        s = (0, b.yJ)(n),
        d = null != s && null != s.activity_preview_video_asset_id ? (0, c.Z)(n.id, s.activity_preview_video_asset_id) : null;
    return (0, i.jsx)(x.Z, {
        context: t,
        application: n,
        imageCoverUrl: a.url,
        videoUrl: d,
        sectionName: r,
        hasCommands: l,
        showFriendsTab: o
    });
}
