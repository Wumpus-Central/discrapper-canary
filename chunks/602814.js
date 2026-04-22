n.d(t, { A: () => v });
var l = n(627968),
    i = n(64700),
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
    N = n(985018),
    g = n(441031),
    E = n(291071);
function v(e) {
    let { context: t, application: n, sectionName: o } = e,
        c = "channel" === t.type ? t.channel : void 0,
        v = (0, a.bG)([m.A], () => m.A.entrypoint()),
        I = (0, u.h)(n.id === C.Ik.BUILT_IN ? null : n.id) ?? n,
        y = (0, _.Ag)(I) ? b : x.A,
        j = i.useRef(null),
        [P, T] = i.useState(!1),
        { iconURL: L, name: S } = i.useMemo(() => (0, _.X2)(I, { fakeAppIconURL: E, size: 84 }), [I]),
        R = (0, d.A4)(!0, !0),
        O = (0, d.ON)(c?.guild_id, !0),
        k = i.useMemo(() => (0, d.Sx)(t, I.id), [R, O, t, I.id]),
        M = !k.isGuildInstalled && !k.isUserInstalled;
    return (
        i.useEffect(() => {
            M && d.Ay.queryInstallOnDemandApp(I.id, c?.id);
        }, [I.id, c?.id, M]),
        (0, l.jsxs)(r.d_, {
            className: g.k,
            fade: !0,
            ref: j,
            role: "region",
            "aria-label": N.intl.formatToPlainString(N.t["4OP4Uk"], { applicationName: S }),
            children: [
                (0, l.jsx)(f.A, { application: I, context: t, name: S, iconURL: L, scrollerRef: j, sectionName: o }),
                null != L && (0, l.jsx)(A.A, { src: L, className: g.Z }),
                (0, l.jsx)(s.A, { size: 54 }),
                (0, l.jsx)(y, { context: t, application: I, sectionName: o, hasCommands: P }),
                v === p.s4.TEXT
                    ? (0, l.jsx)(h.A, {
                          context: t,
                          application: I,
                          sectionName: o,
                          installOnDemand: M,
                          setHasCommands: T,
                      })
                    : null,
            ],
        })
    );
}
function b(e) {
    let { context: t, application: n, sectionName: i, hasCommands: a } = e,
        s = (0, c.A)({ applicationId: n.id, size: 2048, names: ["embedded_cover"], format: "webp" }),
        r = (0, _.Cx)(n),
        d =
            null != r && null != r.activity_preview_video_asset_id
                ? (0, o.A)(n.id, r.activity_preview_video_asset_id)
                : null;
    return (0, l.jsx)(x.A, {
        context: t,
        application: n,
        imageCoverUrl: s.url,
        videoUrl: d,
        sectionName: i,
        hasCommands: a,
    });
}
