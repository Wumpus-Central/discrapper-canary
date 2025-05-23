n.d(t, { Z: () => N }), n(388685);
var i = n(255367),
    r = n(73800),
    l = n(442837),
    o = n(218061),
    a = n(481060),
    c = n(361213),
    s = n(778569),
    u = n(213459),
    d = n(835473),
    p = n(541099),
    m = n(827498),
    f = n(783097),
    h = n(753972),
    b = n(387658),
    _ = n(536650),
    C = n(675993),
    v = n(689079),
    x = n(388032),
    y = n(608494),
    g = n(413097);
function N(e) {
    var t;
    let { context: n, application: c, sectionName: s } = e,
        N = 'channel' === n.type ? n.channel : void 0,
        P = (0, l.e7)([p.Z], () => p.Z.entrypoint()),
        E = null != (t = (0, d.q)(c.id === v.bi.BUILT_IN ? null : c.id)) ? t : c,
        A = (0, f.ye)(E) ? j : C.Z,
        I = r.useRef(null),
        [O, S] = r.useState(!1),
        { iconURL: T, name: L } = r.useMemo(
            () =>
                (0, f.sl)(E, {
                    fakeAppIconURL: g,
                    size: 84
                }),
            [E]
        ),
        R = (0, u.PL)(!0, !0),
        w = (0, u.LD)(null == N ? void 0 : N.guild_id, !0),
        Z = r.useMemo(() => (0, u.If)(n, E.id), [R, w, n, E.id]),
        k = !Z.isGuildInstalled && !Z.isUserInstalled;
    return (
        r.useEffect(() => {
            k && u.ZP.queryInstallOnDemandApp(E.id, null == N ? void 0 : N.id);
        }, [E.id, null == N ? void 0 : N.id, k]),
        (0, i.jsxs)(a.u2D, {
            className: y.container,
            fade: !0,
            ref: I,
            role: 'region',
            'aria-label': x.intl.formatToPlainString(x.t['4OP4Ul'], { applicationName: L }),
            children: [
                (0, i.jsx)(_.Z, {
                    application: E,
                    context: n,
                    name: L,
                    iconURL: T,
                    scrollerRef: I,
                    sectionName: s
                }),
                null != T &&
                    (0, i.jsx)(h.Z, {
                        src: T,
                        className: y.appIcon
                    }),
                (0, i.jsx)(o.Z, { size: 54 }),
                (0, i.jsx)(A, {
                    context: n,
                    application: E,
                    sectionName: s,
                    hasCommands: O
                }),
                P === m._b.TEXT
                    ? (0, i.jsx)(b.Z, {
                          context: n,
                          application: E,
                          sectionName: s,
                          installOnDemand: k,
                          setHasCommands: S
                      })
                    : null
            ]
        })
    );
}
function j(e) {
    let { context: t, application: n, sectionName: r, hasCommands: l } = e,
        o = (0, s.Z)({
            applicationId: n.id,
            size: 2048,
            names: ['embedded_cover']
        }),
        a = (0, f.yJ)(n),
        u = null != a && null != a.activity_preview_video_asset_id ? (0, c.Z)(n.id, a.activity_preview_video_asset_id) : null;
    return (0, i.jsx)(C.Z, {
        context: t,
        application: n,
        imageCoverUrl: o.url,
        videoUrl: u,
        sectionName: r,
        hasCommands: l
    });
}
