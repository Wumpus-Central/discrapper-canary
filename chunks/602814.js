"use strict";
n.d(t, { A: () => C });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(696986),
    o = n(397927),
    l = n(435582),
    u = n(283488),
    c = n(264322),
    d = n(429913),
    _ = n(989837),
    f = n(500049),
    p = n(735991),
    h = n(717048),
    m = n(129800),
    g = n(644681),
    E = n(723695),
    A = n(73510),
    I = n(985018),
    T = n(123564),
    y = n(291071);
let S = 2048,
    v = 84;
function C(e) {
    let { context: t, application: n, sectionName: l } = e,
        u = "channel" === t.type ? t.channel : void 0,
        S = (0, a.bG)([_.A], () => _.A.entrypoint()),
        C = (0, d.h)(n.id === A.Ik.BUILT_IN ? null : n.id) ?? n,
        N = (0, p.Ag)(C) ? b : E.A,
        R = i.useRef(null),
        [O, D] = i.useState(!1),
        { iconURL: L, name: w } = i.useMemo(() => (0, p.X2)(C, { fakeAppIconURL: y, size: v }), [C]),
        x = (0, c.A4)(!0, !0),
        P = (0, c.ON)(u?.guild_id, !0),
        M = i.useMemo(() => (0, c.Sx)(t, C.id), [x, P, t, C.id]),
        k = !M.isGuildInstalled && !M.isUserInstalled;
    return (
        i.useEffect(() => {
            k && c.Ay.queryInstallOnDemandApp(C.id, u?.id);
        }, [C.id, u?.id, k]),
        (0, r.jsxs)(o.d_W, {
            className: T.k,
            fade: !0,
            ref: R,
            role: "region",
            "aria-label": I.intl.formatToPlainString(I.t["4OP4Uk"], { applicationName: w }),
            children: [
                (0, r.jsx)(g.A, { application: C, context: t, name: w, iconURL: L, scrollerRef: R, sectionName: l }),
                null != L && (0, r.jsx)(h.A, { src: L, className: T.Z }),
                (0, r.jsx)(s.A, { size: 54 }),
                (0, r.jsx)(N, { context: t, application: C, sectionName: l, hasCommands: O }),
                S === f.s4.TEXT
                    ? (0, r.jsx)(m.A, {
                          context: t,
                          application: C,
                          sectionName: l,
                          installOnDemand: k,
                          setHasCommands: D,
                      })
                    : null,
            ],
        })
    );
}
function b(e) {
    let { context: t, application: n, sectionName: i, hasCommands: a } = e,
        s = (0, u.A)({ applicationId: n.id, size: S, names: ["embedded_cover"], format: "webp" }),
        o = (0, p.Cx)(n),
        c =
            null != o && null != o.activity_preview_video_asset_id
                ? (0, l.A)(n.id, o.activity_preview_video_asset_id)
                : null;
    return (0, r.jsx)(E.A, {
        context: t,
        application: n,
        imageCoverUrl: s.url,
        videoUrl: c,
        sectionName: i,
        hasCommands: a,
    });
}
