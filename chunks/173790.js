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
    x = t(675993),
    _ = t(689079),
    N = t(388032),
    A = t(370913),
    I = t(413097);
function E(e) {
    var n;
    let { context: t, application: s, sectionName: c } = e,
        E = 'channel' === t.type ? t.channel : void 0,
        b = (0, a.e7)([m.Z], () => m.Z.entrypoint()),
        P = null !== (n = (0, u.q)(s.id === _.bi.BUILT_IN ? null : s.id)) && void 0 !== n ? n : s,
        y = (0, h.ye)(P) ? g : x.Z,
        S = l.useRef(null),
        [j, T] = l.useState(!1),
        { iconURL: L, name: R } = l.useMemo(
            () =>
                (0, h.sl)(P, {
                    fakeAppIconURL: I,
                    size: 84
                }),
            [P]
        ),
        M = (0, d.PL)(!0, !0),
        Z = (0, d.LD)(null == E ? void 0 : E.guild_id, !0),
        k = l.useMemo(() => (0, d.If)(t, P.id), [M, Z, t, P.id]),
        O = !k.isGuildInstalled && !k.isUserInstalled;
    return (
        l.useEffect(() => {
            O && d.ZP.queryInstallOnDemandApp(P.id, null == E ? void 0 : E.id);
        }, [P.id, null == E ? void 0 : E.id, O]),
        (0, i.jsxs)(r.ScrollerNone, {
            className: A.container,
            fade: !0,
            ref: S,
            role: 'region',
            'aria-label': N.intl.formatToPlainString(N.t['4OP4Ul'], { applicationName: R }),
            children: [
                (0, i.jsx)(v.Z, {
                    application: P,
                    context: t,
                    name: R,
                    iconURL: L,
                    scrollerRef: S,
                    sectionName: c
                }),
                null != L &&
                    (0, i.jsx)(f.Z, {
                        src: L,
                        className: A.appIcon
                    }),
                (0, i.jsx)(o.Z, { size: 54 }),
                (0, i.jsx)(y, {
                    context: t,
                    application: P,
                    sectionName: c,
                    hasCommands: j
                }),
                b === p._b.TEXT
                    ? (0, i.jsx)(C.Z, {
                          context: t,
                          application: P,
                          sectionName: c,
                          installOnDemand: O,
                          setHasCommands: T
                      })
                    : null
            ]
        })
    );
}
function g(e) {
    let { context: n, application: t, sectionName: l, hasCommands: a } = e,
        o = (0, c.Z)({
            applicationId: t.id,
            size: 2048,
            names: ['embedded_cover']
        }),
        r = (0, h.yJ)(t),
        d = null != r && null != r.activity_preview_video_asset_id ? (0, s.Z)(t.id, r.activity_preview_video_asset_id) : null;
    return (0, i.jsx)(x.Z, {
        context: n,
        application: t,
        imageCoverUrl: o.url,
        videoUrl: d,
        sectionName: l,
        hasCommands: a
    });
}
