n.d(t, { Z: () => P }), n(47120);
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
    _ = n(387658),
    x = n(536650),
    v = n(675993),
    y = n(689079),
    N = n(388032),
    g = n(189102),
    j = n(413097);
function P(e) {
    var t;
    let { context: n, application: s, sectionName: u } = e,
        P = 'channel' === n.type ? n.channel : void 0,
        A = (0, l.e7)([f.Z], () => f.Z.entrypoint()),
        O = null != (t = (0, p.q)(s.id === y.bi.BUILT_IN ? null : s.id)) ? t : s,
        I = (0, l.e7)([c.Z], () => c.Z.inDevModeForApplication(O.id)),
        S = (0, b.ye)(O) ? E : v.Z,
        T = m.PM.useExperiment({ location: 'AppLauncherApplicationViewScreen' }),
        L = r.useRef(null),
        [R, w] = r.useState(!1),
        { iconURL: k, name: Z } = r.useMemo(
            () =>
                (0, b.sl)(O, {
                    fakeAppIconURL: j,
                    size: 84
                }),
            [O]
        ),
        M = (0, d.PL)(!0, !0),
        D = (0, d.LD)(null == P ? void 0 : P.guild_id, !0),
        W = r.useMemo(() => (0, d.If)(n, O.id), [M, D, n, O.id]),
        U = !W.isGuildInstalled && !W.isUserInstalled;
    return (
        r.useEffect(() => {
            U && d.ZP.queryInstallOnDemandApp(O.id, null == P ? void 0 : P.id);
        }, [O.id, null == P ? void 0 : P.id, U]),
        (0, i.jsxs)(o.u2D, {
            className: g.container,
            fade: !0,
            ref: L,
            role: 'region',
            'aria-label': N.NW.formatToPlainString(N.t['4OP4Ul'], { applicationName: Z }),
            children: [
                (0, i.jsx)(x.Z, {
                    application: O,
                    context: n,
                    name: Z,
                    iconURL: k,
                    scrollerRef: L,
                    sectionName: u
                }),
                null != k &&
                    (0, i.jsx)(C.Z, {
                        src: k,
                        className: g.appIcon
                    }),
                (0, i.jsx)(a.Z, { size: T.enabled ? 44 : 54 }),
                (0, i.jsx)(S, {
                    context: n,
                    application: O,
                    sectionName: u,
                    hasCommands: R
                }),
                A === h._b.TEXT
                    ? (0, i.jsx)(_.Z, {
                          context: n,
                          application: O,
                          sectionName: u,
                          installOnDemand: U,
                          setHasCommands: w
                      })
                    : null,
                T.enabled
                    ? (0, i.jsx)(v.u, {
                          context: n,
                          application: O,
                          hasCommands: R,
                          isDeveloperOfThisApp: I
                      })
                    : null
            ]
        })
    );
}
function E(e) {
    let { context: t, application: n, sectionName: r, hasCommands: l } = e,
        a = (0, u.Z)({
            applicationId: n.id,
            size: 2048,
            names: ['embedded_cover']
        }),
        o = (0, b.yJ)(n),
        c = null != o && null != o.activity_preview_video_asset_id ? (0, s.Z)(n.id, o.activity_preview_video_asset_id) : null;
    return (0, i.jsx)(v.Z, {
        context: t,
        application: n,
        imageCoverUrl: a.url,
        videoUrl: c,
        sectionName: r,
        hasCommands: l
    });
}
