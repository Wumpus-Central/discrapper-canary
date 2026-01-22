n.d(t, {
    A: () => I,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(696986),
    o = n(397927),
    l = n(435582),
    c = n(283488),
    u = n(264322),
    d = n(429913),
    f = n(989837),
    p = n(500049),
    _ = n(735991),
    h = n(717048),
    m = n(129800),
    g = n(644681),
    E = n(723695),
    b = n(73510),
    y = n(985018),
    O = n(123564),
    A = n(291071);
let v = 2048,
    S = 84;

function I(e) {
    var t;
    let { context: n, application: l, sectionName: c } = e,
        v = "channel" === n.type ? n.channel : void 0,
        I = (0, a.bG)([f.A], () => f.A.entrypoint()),
        C = null != (t = (0, d.h)(l.id === b.Ik.BUILT_IN ? null : l.id)) ? t : l,
        N = (0, _.Ag)(C) ? T : E.A,
        R = i.useRef(null),
        [w, P] = i.useState(!1),
        { iconURL: D, name: x } = i.useMemo(
            () =>
                (0, _.X2)(C, {
                    fakeAppIconURL: A,
                    size: S,
                }),
            [C],
        ),
        L = (0, u.A4)(!0, !0),
        j = (0, u.ON)(null == v ? void 0 : v.guild_id, !0),
        M = i.useMemo(() => (0, u.Sx)(n, C.id), [L, j, n, C.id]),
        k = !M.isGuildInstalled && !M.isUserInstalled;
    return (
        i.useEffect(() => {
            k && u.Ay.queryInstallOnDemandApp(C.id, null == v ? void 0 : v.id);
        }, [C.id, null == v ? void 0 : v.id, k]),
        (0, r.jsxs)(o.d_W, {
            className: O.k,
            fade: !0,
            ref: R,
            role: "region",
            "aria-label": y.intl.formatToPlainString(y.t["4OP4Uk"], {
                applicationName: x,
            }),
            children: [
                (0, r.jsx)(g.A, {
                    application: C,
                    context: n,
                    name: x,
                    iconURL: D,
                    scrollerRef: R,
                    sectionName: c,
                }),
                null != D &&
                    (0, r.jsx)(h.A, {
                        src: D,
                        className: O.Z,
                    }),
                (0, r.jsx)(s.A, {
                    size: 54,
                }),
                (0, r.jsx)(N, {
                    context: n,
                    application: C,
                    sectionName: c,
                    hasCommands: w,
                }),
                I === p.s4.TEXT
                    ? (0, r.jsx)(m.A, {
                          context: n,
                          application: C,
                          sectionName: c,
                          installOnDemand: k,
                          setHasCommands: P,
                      })
                    : null,
            ],
        })
    );
}

function T(e) {
    let { context: t, application: n, sectionName: i, hasCommands: a } = e,
        s = (0, c.A)({
            applicationId: n.id,
            size: v,
            names: ["embedded_cover"],
            format: "webp",
        }),
        o = (0, _.Cx)(n),
        u =
            null != o && null != o.activity_preview_video_asset_id
                ? (0, l.A)(n.id, o.activity_preview_video_asset_id)
                : null;
    return (0, r.jsx)(E.A, {
        context: t,
        application: n,
        imageCoverUrl: s.url,
        videoUrl: u,
        sectionName: i,
        hasCommands: a,
    });
}
