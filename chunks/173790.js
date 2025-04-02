n.d(t, { Z: () => P }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    o = n(218061),
    a = n(481060),
    c = n(115130),
    s = n(361213),
    d = n(778569),
    u = n(213459),
    p = n(835473),
    m = n(424602),
    f = n(541099),
    h = n(827498),
    b = n(783097),
    v = n(753972),
    C = n(387658),
    _ = n(536650),
    x = n(675993),
    y = n(689079),
    N = n(388032),
    g = n(228522),
    j = n(413097);
function P(e) {
    var t;
    let { context: n, application: s, sectionName: d } = e,
        P = 'channel' === n.type ? n.channel : void 0,
        A = (0, l.e7)([f.Z], () => f.Z.entrypoint()),
        O = null !== (t = (0, p.q)(s.id === y.bi.BUILT_IN ? null : s.id)) && void 0 !== t ? t : s,
        I = (0, l.e7)([c.Z], () => c.Z.inDevModeForApplication(O.id)),
        S = (0, b.ye)(O) ? E : x.Z,
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
        M = (0, u.PL)(!0, !0),
        D = (0, u.LD)(null == P ? void 0 : P.guild_id, !0),
        W = r.useMemo(() => (0, u.If)(n, O.id), [M, D, n, O.id]),
        U = !W.isGuildInstalled && !W.isUserInstalled;
    return (
        r.useEffect(() => {
            U && u.ZP.queryInstallOnDemandApp(O.id, null == P ? void 0 : P.id);
        }, [O.id, null == P ? void 0 : P.id, U]),
        (0, i.jsxs)(a.u2D, {
            className: g.container,
            fade: !0,
            ref: L,
            role: 'region',
            'aria-label': N.NW.formatToPlainString(N.t['4OP4Ul'], { applicationName: Z }),
            children: [
                (0, i.jsx)(_.Z, {
                    application: O,
                    context: n,
                    name: Z,
                    iconURL: k,
                    scrollerRef: L,
                    sectionName: d
                }),
                null != k &&
                    (0, i.jsx)(v.Z, {
                        src: k,
                        className: g.appIcon
                    }),
                (0, i.jsx)(o.Z, { size: T.enabled ? 44 : 54 }),
                (0, i.jsx)(S, {
                    context: n,
                    application: O,
                    sectionName: d,
                    hasCommands: R
                }),
                A === h._b.TEXT
                    ? (0, i.jsx)(C.Z, {
                          context: n,
                          application: O,
                          sectionName: d,
                          installOnDemand: U,
                          setHasCommands: w
                      })
                    : null,
                T.enabled
                    ? (0, i.jsx)(x.u, {
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
        o = (0, d.Z)({
            applicationId: n.id,
            size: 2048,
            names: ['embedded_cover']
        }),
        a = (0, b.yJ)(n),
        c = null != a && null != a.activity_preview_video_asset_id ? (0, s.Z)(n.id, a.activity_preview_video_asset_id) : null;
    return (0, i.jsx)(x.Z, {
        context: t,
        application: n,
        imageCoverUrl: o.url,
        videoUrl: c,
        sectionName: r,
        hasCommands: l
    });
}
