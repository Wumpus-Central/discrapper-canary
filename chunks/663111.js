n.d(t, { M: () => T });
var i = n(627968);
n(64700);
var r = n(873263),
    l = n(311907),
    a = n(397927),
    s = n(587895),
    o = n(515610),
    d = n(91242),
    c = n(263063),
    u = n(394953),
    A = n(734057),
    h = n(71393),
    _ = n(309010),
    m = n(967198),
    p = n(486020),
    g = n(652215),
    E = n(165610),
    I = n(985018),
    f = n(842130),
    C = n(878251);
function T() {
    let e,
        t = (0, r.zy)(),
        n = (0, l.bG)([m.A], () => m.A.getGuildId()),
        T = (0, l.bG)([_.A], () => _.A.getChannelId()),
        N = (0, l.bG)([A.A], () => A.A.getChannel(T), [T]),
        S = n ?? N?.guild_id,
        x = (0, l.bG)([h.A], () => h.A.getGuild(S), [S]),
        v = (0, o.A)(),
        y = (0, u.lI)(),
        { application: b, isFrameInFocusedMode: O } = (0, l.cf)([s.A, d.A], () => {
            let e = d.A.getConnectedFrame();
            return {
                application: s.A.getApplication(e?.applicationId),
                isFrameInFocusedMode: d.A.getFrameLayoutMode() === E.y.FOCUSED,
            };
        }),
        L = null != b ? p.Ay.getApplicationIconURL({ id: b.id, icon: b.icon, bot: b.bot }) : void 0,
        R = null;
    return (null != b && O
        ? ((e = b.name),
          (R = (0, i.jsx)("img", {
              className: C.Z2,
              alt: I.intl.string(I.t.X4IxWL),
              src: L,
              "aria-hidden": !0,
              draggable: !1,
          })))
        : y
          ? ((e = I.intl.string(I.t.HcoRu0)), (R = (0, i.jsx)(a.XFE, { size: "sm" })))
          : null != x
            ? ((R = v
                  ? (0, i.jsx)(a.Gg5, { size: "sm" })
                  : (0, i.jsx)(c.Ay, { guild: x, size: c.Ay.Sizes.SMOL, active: !0, className: C.$f })),
              (e = x.name))
            : null != N && (N.isDM() || N.isGroupDM())
              ? ((e = I.intl.string(I.t.YUU0RF)), (R = (0, i.jsx)(a.pVd, { size: "sm" })))
              : t.pathname.startsWith(g.BVt.ICYMI)
                ? ((e = I.intl.string(I.t["jnXV/V"])), (R = (0, i.jsx)(a.gXB, { size: "sm" })))
                : t.pathname.startsWith(g.BVt.GLOBAL_DISCOVERY)
                  ? ((e = I.intl.string(I.t["4nEZLk"])), (R = (0, i.jsx)(a.QGJ, { size: "sm" })))
                  : t.pathname.startsWith(g.BVt.NITRO_HOME)
                    ? ((e = I.intl.string(I.t.Ipxkog)), (R = (0, i.jsx)(a.tvc, { size: "sm" })))
                    : t.pathname.startsWith(g.BVt.COLLECTIBLES_SHOP)
                      ? ((e = I.intl.string(I.t.pWG4ze)), (R = (0, i.jsx)(a.U1X, { size: "sm" })))
                      : t.pathname.startsWith(g.BVt.FRIENDS)
                        ? ((e = I.intl.string(I.t.TdEu5X)), (R = (0, i.jsx)(a.$yI, { size: "sm" })))
                        : t.pathname.startsWith(g.BVt.FAMILY_CENTER)
                          ? ((e = I.intl.string(f.default.RZqaJn)), (R = (0, i.jsx)(a.nFg, { size: "sm" })))
                          : t.pathname.startsWith(g.BVt.QUEST_HOME) &&
                            ((e = I.intl.string(I.t.JALI2K)), (R = (0, i.jsx)(a.r2v, { size: "sm" }))),
    null == e || "" === e)
        ? null
        : (0, i.jsxs)("div", {
              className: C.DD,
              children: [R, (0, i.jsx)(a.Text, { variant: "text-sm/medium", lineClamp: 1, children: e })],
          });
}
