n.d(t, { Z: () => _ }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    o = n(218061),
    s = n(481060),
    r = n(361213),
    c = n(778569),
    d = n(213459),
    u = n(835473),
    m = n(541099),
    p = n(827498),
    h = n(783097),
    v = n(753972),
    x = n(387658),
    f = n(536650),
    N = n(675993),
    C = n(689079),
    E = n(388032),
    A = n(370913),
    I = n(413097);
function _(e) {
    var t;
    let { context: n, application: r, sectionName: c } = e,
        _ = 'channel' === n.type ? n.channel : void 0,
        P = (0, a.e7)([m.Z], () => m.Z.entrypoint()),
        j = null !== (t = (0, u.q)(r.id === C.bi.BUILT_IN ? null : r.id)) && void 0 !== t ? t : r,
        y = (0, h.ye)(j) ? g : N.Z,
        T = l.useRef(null),
        [S, b] = l.useState(!1),
        { iconURL: L, name: R } = l.useMemo(
            () =>
                (0, h.sl)(j, {
                    fakeAppIconURL: I,
                    size: 84
                }),
            [j]
        ),
        M = (0, d.PL)(!0, !0),
        Z = (0, d.LD)(null == _ ? void 0 : _.guild_id, !0),
        O = l.useMemo(() => (0, d.If)(n, j.id), [M, Z, n, j.id]),
        k = !O.isGuildInstalled && !O.isUserInstalled;
    return (
        l.useEffect(() => {
            k && d.ZP.queryInstallOnDemandApp(j.id, null == _ ? void 0 : _.id);
        }, [j.id, null == _ ? void 0 : _.id, k]),
        (0, i.jsxs)(s.u2D, {
            className: A.container,
            fade: !0,
            ref: T,
            role: 'region',
            'aria-label': E.intl.formatToPlainString(E.t['4OP4Ul'], { applicationName: R }),
            children: [
                (0, i.jsx)(f.Z, {
                    application: j,
                    context: n,
                    name: R,
                    iconURL: L,
                    scrollerRef: T,
                    sectionName: c
                }),
                null != L &&
                    (0, i.jsx)(v.Z, {
                        src: L,
                        className: A.appIcon
                    }),
                (0, i.jsx)(o.Z, { size: 54 }),
                (0, i.jsx)(y, {
                    context: n,
                    application: j,
                    sectionName: c,
                    hasCommands: S
                }),
                P === p._b.TEXT
                    ? (0, i.jsx)(x.Z, {
                          context: n,
                          application: j,
                          sectionName: c,
                          installOnDemand: k,
                          setHasCommands: b
                      })
                    : null
            ]
        })
    );
}
function g(e) {
    let { context: t, application: n, sectionName: l, hasCommands: a } = e,
        o = (0, c.Z)({
            applicationId: n.id,
            size: 2048,
            names: ['embedded_cover']
        }),
        s = (0, h.yJ)(n),
        d = null != s && null != s.activity_preview_video_asset_id ? (0, r.Z)(n.id, s.activity_preview_video_asset_id) : null;
    return (0, i.jsx)(N.Z, {
        context: t,
        application: n,
        imageCoverUrl: o.url,
        videoUrl: d,
        sectionName: l,
        hasCommands: a
    });
}
