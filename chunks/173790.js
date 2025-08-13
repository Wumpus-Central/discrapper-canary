n.d(t, { Z: () => S }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(218061),
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
    O = n(582631),
    v = n(413097);
let I = 2048,
    T = 84;
function S(e) {
    var t;
    let { context: n, application: l, sectionName: c } = e,
        I = "channel" === n.type ? n.channel : void 0,
        S = (0, o.e7)([f.Z], () => f.Z.entrypoint()),
        N = null != (t = (0, d.q)(l.id === b.bi.BUILT_IN ? null : l.id)) ? t : l,
        C = (0, p.ye)(N) ? A : E.Z,
        R = i.useRef(null),
        [P, w] = i.useState(!1),
        { iconURL: D, name: L } = i.useMemo(
            () =>
                (0, p.sl)(N, {
                    fakeAppIconURL: v,
                    size: T,
                }),
            [N],
        ),
        x = (0, u.PL)(!0, !0),
        M = (0, u.LD)(null == I ? void 0 : I.guild_id, !0),
        j = i.useMemo(() => (0, u.If)(n, N.id), [x, M, n, N.id]),
        k = !j.isGuildInstalled && !j.isUserInstalled;
    return (
        i.useEffect(() => {
            k && u.ZP.queryInstallOnDemandApp(N.id, null == I ? void 0 : I.id);
        }, [N.id, null == I ? void 0 : I.id, k]),
        (0, r.jsxs)(s.u2D, {
            className: O.container,
            fade: !0,
            ref: R,
            role: "region",
            "aria-label": y.intl.formatToPlainString(y.t["4OP4Ul"], { applicationName: L }),
            children: [
                (0, r.jsx)(g.Z, {
                    application: N,
                    context: n,
                    name: L,
                    iconURL: D,
                    scrollerRef: R,
                    sectionName: c,
                }),
                null != D &&
                    (0, r.jsx)(h.Z, {
                        src: D,
                        className: O.appIcon,
                    }),
                (0, r.jsx)(a.Z, { size: 54 }),
                (0, r.jsx)(C, {
                    context: n,
                    application: N,
                    sectionName: c,
                    hasCommands: P,
                }),
                S === _._b.TEXT
                    ? (0, r.jsx)(m.Z, {
                          context: n,
                          application: N,
                          sectionName: c,
                          installOnDemand: k,
                          setHasCommands: w,
                      })
                    : null,
            ],
        })
    );
}
function A(e) {
    let { context: t, application: n, sectionName: i, hasCommands: o } = e,
        a = (0, c.Z)({
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
        imageCoverUrl: a.url,
        videoUrl: u,
        sectionName: i,
        hasCommands: o,
    });
}
