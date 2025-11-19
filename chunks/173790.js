n.d(t, { Z: () => S }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(218061),
    s = n(481060),
    l = n(361213),
    c = n(778569),
    u = n(213459),
    d = n(835473),
    f = n(541099),
    _ = n(827498),
    p = n(783097),
    h = n(753972),
    m = n(387658),
    g = n(536650),
    E = n(675993),
    b = n(689079),
    y = n(388032),
    O = n(30787),
    v = n(413097);
let I = 2048,
    T = 84;
function S(e) {
    var t;
    let { context: n, application: l, sectionName: c } = e,
        I = "channel" === n.type ? n.channel : void 0,
        S = (0, a.e7)([f.Z], () => f.Z.entrypoint()),
        C = null != (t = (0, d.q)(l.id === b.bi.BUILT_IN ? null : l.id)) ? t : l,
        N = (0, p.ye)(C) ? A : E.Z,
        R = i.useRef(null),
        [P, D] = i.useState(!1),
        { iconURL: w, name: L } = i.useMemo(
            () =>
                (0, p.sl)(C, {
                    fakeAppIconURL: v,
                    size: T,
                }),
            [C],
        ),
        x = (0, u.PL)(!0, !0),
        M = (0, u.LD)(null == I ? void 0 : I.guild_id, !0),
        k = i.useMemo(() => (0, u.If)(n, C.id), [x, M, n, C.id]),
        j = !k.isGuildInstalled && !k.isUserInstalled;
    return (
        i.useEffect(() => {
            j && u.ZP.queryInstallOnDemandApp(C.id, null == I ? void 0 : I.id);
        }, [C.id, null == I ? void 0 : I.id, j]),
        (0, r.jsxs)(s.u2D, {
            className: O.container,
            fade: !0,
            ref: R,
            role: "region",
            "aria-label": y.intl.formatToPlainString(y.t["4OP4Uk"], { applicationName: L }),
            children: [
                (0, r.jsx)(g.Z, {
                    application: C,
                    context: n,
                    name: L,
                    iconURL: w,
                    scrollerRef: R,
                    sectionName: c,
                }),
                null != w &&
                    (0, r.jsx)(h.Z, {
                        src: w,
                        className: O.appIcon,
                    }),
                (0, r.jsx)(o.Z, { size: 54 }),
                (0, r.jsx)(N, {
                    context: n,
                    application: C,
                    sectionName: c,
                    hasCommands: P,
                }),
                S === _._b.TEXT
                    ? (0, r.jsx)(m.Z, {
                          context: n,
                          application: C,
                          sectionName: c,
                          installOnDemand: j,
                          setHasCommands: D,
                      })
                    : null,
            ],
        })
    );
}
function A(e) {
    let { context: t, application: n, sectionName: i, hasCommands: a } = e,
        o = (0, c.Z)({
            applicationId: n.id,
            size: I,
            names: ["embedded_cover"],
        }),
        s = (0, p.yJ)(n),
        u =
            null != s && null != s.activity_preview_video_asset_id
                ? (0, l.Z)(n.id, s.activity_preview_video_asset_id)
                : null;
    return (0, r.jsx)(E.Z, {
        context: t,
        application: n,
        imageCoverUrl: o.url,
        videoUrl: u,
        sectionName: i,
        hasCommands: a,
    });
}
