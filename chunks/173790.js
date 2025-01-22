t.d(n, {
    Z: function () {
        return E;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    a = t(442837),
    o = t(218061),
    r = t(481060),
    s = t(361213),
    c = t(778569),
    d = t(213459),
    u = t(835473),
    m = t(541099),
    p = t(827498),
    h = t(783097),
    f = t(753972),
    C = t(387658),
    v = t(536650),
    _ = t(675993),
    x = t(689079),
    N = t(388032),
    I = t(370913),
    A = t(413097);
function E(e) {
    var n;
    let { channel: t, application: s, sectionName: c } = e,
        E = (0, a.e7)([m.Z], () => m.Z.entrypoint()),
        b = null !== (n = (0, u.q)(s.id === x.bi.BUILT_IN ? null : s.id)) && void 0 !== n ? n : s,
        P = (0, h.ye)(b) ? g : _.Z,
        S = l.useRef(null),
        [j, y] = l.useState(!1),
        { iconURL: T, name: L } = l.useMemo(
            () =>
                (0, h.sl)(b, {
                    fakeAppIconURL: A,
                    size: 84
                }),
            [b]
        ),
        R = (0, d.PL)(!0, !0),
        M = (0, d.LD)(t.guild_id, !0),
        Z = l.useMemo(() => (0, d.If)(t, b.id), [R, M, t, b.id]),
        k = !Z.isGuildInstalled && !Z.isUserInstalled;
    return (
        l.useEffect(() => {
            k && d.ZP.queryInstallOnDemandApp(b.id, t.id);
        }, [b.id, t.id, k]),
        (0, i.jsxs)(r.ScrollerNone, {
            className: I.container,
            fade: !0,
            ref: S,
            role: 'region',
            'aria-label': N.intl.formatToPlainString(N.t['4OP4Ul'], { applicationName: L }),
            children: [
                (0, i.jsx)(v.Z, {
                    application: b,
                    channel: t,
                    name: L,
                    iconURL: T,
                    scrollerRef: S,
                    sectionName: c
                }),
                null != T &&
                    (0, i.jsx)(f.Z, {
                        src: T,
                        className: I.appIcon
                    }),
                (0, i.jsx)(o.Z, { size: 54 }),
                (0, i.jsx)(P, {
                    channel: t,
                    application: b,
                    sectionName: c,
                    hasCommands: j
                }),
                E === p._b.TEXT
                    ? (0, i.jsx)(C.Z, {
                          channel: t,
                          application: b,
                          sectionName: c,
                          installOnDemand: k,
                          setHasCommands: y
                      })
                    : null
            ]
        })
    );
}
function g(e) {
    let { channel: n, application: t, sectionName: l, hasCommands: a } = e,
        o = (0, c.Z)({
            applicationId: t.id,
            size: 2048,
            names: ['embedded_cover']
        }),
        r = (0, h.yJ)(t),
        d = null != r && null != r.activity_preview_video_asset_id ? (0, s.Z)(t.id, r.activity_preview_video_asset_id) : null;
    return (0, i.jsx)(_.Z, {
        channel: n,
        application: t,
        imageCoverUrl: o.url,
        videoUrl: d,
        sectionName: l,
        hasCommands: a
    });
}
