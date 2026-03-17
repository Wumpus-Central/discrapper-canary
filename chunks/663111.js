n.d(t, { M: () => N });
var i = n(627968);
n(64700);
var r = n(873263),
    l = n(311907),
    a = n(397927),
    s = n(587895),
    o = n(93055),
    d = n(5180),
    c = n(91242),
    u = n(263063),
    A = n(394953),
    h = n(734057),
    _ = n(71393),
    m = n(309010),
    g = n(967198),
    p = n(486020),
    E = n(652215),
    I = n(165610),
    f = n(985018),
    C = n(842130),
    T = n(878251);
function N() {
    let e,
        t = (0, r.zy)(),
        n = (0, l.bG)([g.A], () => g.A.getGuildId()),
        N = (0, l.bG)([m.A], () => m.A.getChannelId()),
        S = (0, l.bG)([h.A], () => h.A.getChannel(N), [N]),
        x = n ?? S?.guild_id,
        v = (0, l.bG)([_.A], () => _.A.getGuild(x), [x]),
        y = (0, o.DZ)(),
        b = (0, A.lI)(),
        { application: O, isFrameInFocusedMode: L } = (0, l.cf)([s.A, c.A], () => {
            let e = c.A.getConnectedFrame();
            return {
                application: s.A.getApplication(e?.applicationId),
                isFrameInFocusedMode: c.A.getFrameLayoutMode() === I.y.FOCUSED,
            };
        }),
        R = null != O ? p.Ay.getApplicationIconURL({ id: O.id, icon: O.icon, bot: O.bot }) : void 0,
        P = null;
    return (null != O && L
        ? ((e = O.name),
          (P = (0, i.jsx)("img", {
              className: T.Z2,
              alt: f.intl.string(f.t.X4IxWL),
              src: R,
              "aria-hidden": !0,
              draggable: !1,
          })))
        : b
          ? ((e = f.intl.string(f.t.HcoRu0)), (P = (0, i.jsx)(a.XFE, { size: "sm" })))
          : null != v
            ? ((e = (0, d.YC)(v)),
              (P = y
                  ? (0, i.jsx)(a.Gg5, { size: "sm" })
                  : (0, i.jsx)(u.Ay, { guild: v, size: u.Ay.Sizes.SMOL, active: !0, className: T.$f })))
            : null != S && (S.isDM() || S.isGroupDM())
              ? ((e = f.intl.string(f.t.YUU0RF)), (P = (0, i.jsx)(a.pVd, { size: "sm" })))
              : t.pathname.startsWith(E.BVt.ICYMI)
                ? ((e = f.intl.string(f.t["jnXV/V"])), (P = (0, i.jsx)(a.gXB, { size: "sm" })))
                : t.pathname.startsWith(E.BVt.GLOBAL_DISCOVERY)
                  ? ((e = f.intl.string(f.t["4nEZLk"])), (P = (0, i.jsx)(a.QGJ, { size: "sm" })))
                  : t.pathname.startsWith(E.BVt.NITRO_HOME)
                    ? ((e = f.intl.string(f.t.Ipxkog)), (P = (0, i.jsx)(a.tvc, { size: "sm" })))
                    : t.pathname.startsWith(E.BVt.COLLECTIBLES_SHOP)
                      ? ((e = f.intl.string(f.t.pWG4ze)), (P = (0, i.jsx)(a.U1X, { size: "sm" })))
                      : t.pathname.startsWith(E.BVt.FRIENDS)
                        ? ((e = f.intl.string(f.t.TdEu5X)), (P = (0, i.jsx)(a.$yI, { size: "sm" })))
                        : t.pathname.startsWith(E.BVt.FAMILY_CENTER)
                          ? ((e = f.intl.string(C.default.RZqaJn)), (P = (0, i.jsx)(a.nFg, { size: "sm" })))
                          : t.pathname.startsWith(E.BVt.QUEST_HOME) &&
                            ((e = f.intl.string(f.t.JALI2K)), (P = (0, i.jsx)(a.r2v, { size: "sm" }))),
    null == e || "" === e)
        ? null
        : (0, i.jsxs)("div", {
              className: T.DD,
              children: [P, (0, i.jsx)(a.Text, { variant: "text-sm/medium", lineClamp: 1, children: e })],
          });
}
