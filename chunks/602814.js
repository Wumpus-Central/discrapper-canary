n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(696986),
    r = n(573613),
    o = n(435582),
    c = n(283488),
    d = n(264322),
    u = n(429913),
    m = n(989837),
    p = n(500049),
    _ = n(735991),
    A = n(717048),
    h = n(129800),
    f = n(644681),
    x = n(723695),
    C = n(73510),
    g = n(985018),
    N = n(441031),
    E = n(291071);
function b(e) {
    let { context: t, application: n, sectionName: o } = e,
        c = "channel" === t.type ? t.channel : void 0,
        b = (0, a.bG)([m.A], () => m.A.entrypoint()),
        v = (0, u.h)(n.id === C.Ik.BUILT_IN ? null : n.id) ?? n,
        y = (0, _.Ag)(v) ? I : x.A,
        j = l.useRef(null),
        [P, L] = l.useState(!1),
        { iconURL: T, name: S } = l.useMemo(() => (0, _.X2)(v, { fakeAppIconURL: E, size: 84 }), [v]),
        R = (0, d.A4)(!0, !0),
        O = (0, d.ON)(c?.guild_id, !0),
        k = l.useMemo(() => (0, d.Sx)(t, v.id), [R, O, t, v.id]),
        M = !k.isGuildInstalled && !k.isUserInstalled;
    return (
        l.useEffect(() => {
            M && d.Ay.queryInstallOnDemandApp(v.id, c?.id);
        }, [v.id, c?.id, M]),
        (0, i.jsxs)(r.d_, {
            className: N.k,
            fade: !0,
            ref: j,
            role: "region",
            "aria-label": g.intl.formatToPlainString(g.t["4OP4Uk"], { applicationName: S }),
            children: [
                (0, i.jsx)(f.A, { application: v, context: t, name: S, iconURL: T, scrollerRef: j, sectionName: o }),
                null != T && (0, i.jsx)(A.A, { src: T, className: N.Z }),
                (0, i.jsx)(s.A, { size: 54 }),
                (0, i.jsx)(y, { context: t, application: v, sectionName: o, hasCommands: P }),
                b === p.s4.TEXT
                    ? (0, i.jsx)(h.A, {
                          context: t,
                          application: v,
                          sectionName: o,
                          installOnDemand: M,
                          setHasCommands: L,
                      })
                    : null,
            ],
        })
    );
}
function I(e) {
    let { context: t, application: n, sectionName: l, hasCommands: a } = e,
        s = (0, c.A)({ applicationId: n.id, size: 2048, names: ["embedded_cover"], format: "webp" }),
        r = (0, _.Cx)(n),
        d =
            null != r && null != r.activity_preview_video_asset_id
                ? (0, o.A)(n.id, r.activity_preview_video_asset_id)
                : null;
    return (0, i.jsx)(x.A, {
        context: t,
        application: n,
        imageCoverUrl: s.url,
        videoUrl: d,
        sectionName: l,
        hasCommands: a,
    });
}
