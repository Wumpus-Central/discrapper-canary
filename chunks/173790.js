(n.d(t, { Z: () => C }), n(388685));
var l = n(255367),
    i = n(73800),
    r = n(442837),
    a = n(218061),
    o = n(481060),
    s = n(361213),
    c = n(778569),
    u = n(213459),
    d = n(835473),
    p = n(541099),
    m = n(827498),
    f = n(783097),
    h = n(753972),
    v = n(387658),
    y = n(536650),
    x = n(675993),
    b = n(689079),
    g = n(388032),
    j = n(189102),
    N = n(413097);
function C(e) {
    var t;
    let { context: n, application: s, sectionName: c } = e,
        C = 'channel' === n.type ? n.channel : void 0,
        P = (0, r.e7)([p.Z], () => p.Z.entrypoint()),
        O = null != (t = (0, d.q)(s.id === b.bi.BUILT_IN ? null : s.id)) ? t : s,
        A = (0, f.ye)(O) ? E : x.Z,
        I = i.useRef(null),
        [_, S] = i.useState(!1),
        { iconURL: T, name: L } = i.useMemo(
            () =>
                (0, f.sl)(O, {
                    fakeAppIconURL: N,
                    size: 84
                }),
            [O]
        ),
        R = (0, u.PL)(!0, !0),
        Z = (0, u.LD)(null == C ? void 0 : C.guild_id, !0),
        w = i.useMemo(() => (0, u.If)(n, O.id), [R, Z, n, O.id]),
        k = !w.isGuildInstalled && !w.isUserInstalled;
    return (
        i.useEffect(() => {
            k && u.ZP.queryInstallOnDemandApp(O.id, null == C ? void 0 : C.id);
        }, [O.id, null == C ? void 0 : C.id, k]),
        (0, l.jsxs)(o.u2D, {
            className: j.container,
            fade: !0,
            ref: I,
            role: 'region',
            'aria-label': g.intl.formatToPlainString(g.t['4OP4Ul'], { applicationName: L }),
            children: [
                (0, l.jsx)(y.Z, {
                    application: O,
                    context: n,
                    name: L,
                    iconURL: T,
                    scrollerRef: I,
                    sectionName: c
                }),
                null != T &&
                    (0, l.jsx)(h.Z, {
                        src: T,
                        className: j.appIcon
                    }),
                (0, l.jsx)(a.Z, { size: 54 }),
                (0, l.jsx)(A, {
                    context: n,
                    application: O,
                    sectionName: c,
                    hasCommands: _
                }),
                P === m._b.TEXT
                    ? (0, l.jsx)(v.Z, {
                          context: n,
                          application: O,
                          sectionName: c,
                          installOnDemand: k,
                          setHasCommands: S
                      })
                    : null
            ]
        })
    );
}
function E(e) {
    let { context: t, application: n, sectionName: i, hasCommands: r } = e,
        a = (0, c.Z)({
            applicationId: n.id,
            size: 2048,
            names: ['embedded_cover']
        }),
        o = (0, f.yJ)(n),
        u = null != o && null != o.activity_preview_video_asset_id ? (0, s.Z)(n.id, o.activity_preview_video_asset_id) : null;
    return (0, l.jsx)(x.Z, {
        context: t,
        application: n,
        imageCoverUrl: a.url,
        videoUrl: u,
        sectionName: i,
        hasCommands: r
    });
}
