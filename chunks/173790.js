n.d(t, { Z: () => T }), n(388685);
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
    p = n(827498),
    _ = n(783097),
    m = n(753972),
    h = n(387658),
    g = n(536650),
    E = n(675993),
    b = n(689079),
    y = n(388032),
    O = n(999711),
    v = n(413097);
let S = 2048,
    I = 84;
function T(e) {
    var t;
    let { context: n, application: l, sectionName: c } = e,
        S = "channel" === n.type ? n.channel : void 0,
        T = (0, a.e7)([f.Z], () => f.Z.entrypoint()),
        A = null != (t = (0, d.q)(l.id === b.bi.BUILT_IN ? null : l.id)) ? t : l,
        N = (0, _.ye)(A) ? C : E.Z,
        P = i.useRef(null),
        [R, w] = i.useState(!1),
        { iconURL: D, name: x } = i.useMemo(
            () =>
                (0, _.sl)(A, {
                    fakeAppIconURL: v,
                    size: I,
                }),
            [A],
        ),
        L = (0, u.PL)(!0, !0),
        j = (0, u.LD)(null == S ? void 0 : S.guild_id, !0),
        M = i.useMemo(() => (0, u.If)(n, A.id), [L, j, n, A.id]),
        k = !M.isGuildInstalled && !M.isUserInstalled;
    return (
        i.useEffect(() => {
            k && u.ZP.queryInstallOnDemandApp(A.id, null == S ? void 0 : S.id);
        }, [A.id, null == S ? void 0 : S.id, k]),
        (0, r.jsxs)(s.u2D, {
            className: O.container,
            fade: !0,
            ref: P,
            role: "region",
            "aria-label": y.intl.formatToPlainString(y.t["4OP4Uk"], { applicationName: x }),
            children: [
                (0, r.jsx)(g.Z, {
                    application: A,
                    context: n,
                    name: x,
                    iconURL: D,
                    scrollerRef: P,
                    sectionName: c,
                }),
                null != D &&
                    (0, r.jsx)(m.Z, {
                        src: D,
                        className: O.appIcon,
                    }),
                (0, r.jsx)(o.Z, { size: 54 }),
                (0, r.jsx)(N, {
                    context: n,
                    application: A,
                    sectionName: c,
                    hasCommands: R,
                }),
                T === p._b.TEXT
                    ? (0, r.jsx)(h.Z, {
                          context: n,
                          application: A,
                          sectionName: c,
                          installOnDemand: k,
                          setHasCommands: w,
                      })
                    : null,
            ],
        })
    );
}
function C(e) {
    let { context: t, application: n, sectionName: i, hasCommands: a } = e,
        o = (0, c.Z)({
            applicationId: n.id,
            size: S,
            names: ["embedded_cover"],
            format: "webp",
        }),
        s = (0, _.yJ)(n),
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
