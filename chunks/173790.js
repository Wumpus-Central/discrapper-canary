n.d(t, { Z: () => C }), n(388685);
var i = n(951288),
    l = n(647438),
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
    g = n(675993),
    x = n(689079),
    b = n(388032),
    N = n(30787),
    j = n(413097);
function C(e) {
    var t;
    let { context: n, application: s, sectionName: c } = e,
        C = "channel" === n.type ? n.channel : void 0,
        P = (0, r.e7)([p.Z], () => p.Z.entrypoint()),
        A = null != (t = (0, d.q)(s.id === x.bi.BUILT_IN ? null : s.id)) ? t : s,
        _ = (0, f.ye)(A) ? E : g.Z,
        O = l.useRef(null),
        [I, S] = l.useState(!1),
        { iconURL: T, name: L } = l.useMemo(
            () =>
                (0, f.sl)(A, {
                    fakeAppIconURL: j,
                    size: 84,
                }),
            [A],
        ),
        R = (0, u.PL)(!0, !0),
        Z = (0, u.LD)(null == C ? void 0 : C.guild_id, !0),
        w = l.useMemo(() => (0, u.If)(n, A.id), [R, Z, n, A.id]),
        k = !w.isGuildInstalled && !w.isUserInstalled;
    return (
        l.useEffect(() => {
            k && u.ZP.queryInstallOnDemandApp(A.id, null == C ? void 0 : C.id);
        }, [A.id, null == C ? void 0 : C.id, k]),
        (0, i.jsxs)(o.u2D, {
            className: N.container,
            fade: !0,
            ref: O,
            role: "region",
            "aria-label": b.intl.formatToPlainString(b.t["4OP4Uk"], { applicationName: L }),
            children: [
                (0, i.jsx)(y.Z, {
                    application: A,
                    context: n,
                    name: L,
                    iconURL: T,
                    scrollerRef: O,
                    sectionName: c,
                }),
                null != T &&
                    (0, i.jsx)(h.Z, {
                        src: T,
                        className: N.appIcon,
                    }),
                (0, i.jsx)(a.Z, { size: 54 }),
                (0, i.jsx)(_, {
                    context: n,
                    application: A,
                    sectionName: c,
                    hasCommands: I,
                }),
                P === m._b.TEXT
                    ? (0, i.jsx)(v.Z, {
                          context: n,
                          application: A,
                          sectionName: c,
                          installOnDemand: k,
                          setHasCommands: S,
                      })
                    : null,
            ],
        })
    );
}
function E(e) {
    let { context: t, application: n, sectionName: l, hasCommands: r } = e,
        a = (0, c.Z)({
            applicationId: n.id,
            size: 2048,
            names: ["embedded_cover"],
        }),
        o = (0, f.yJ)(n),
        u =
            null != o && null != o.activity_preview_video_asset_id
                ? (0, s.Z)(n.id, o.activity_preview_video_asset_id)
                : null;
    return (0, i.jsx)(g.Z, {
        context: t,
        application: n,
        imageCoverUrl: a.url,
        videoUrl: u,
        sectionName: l,
        hasCommands: r,
    });
}
