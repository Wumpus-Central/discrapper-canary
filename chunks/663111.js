n.d(t, { M: () => w });
var i = n(627968);
n(64700);
var r = n(873263),
    a = n(311907),
    l = n(782603),
    s = n(27232),
    o = n(111159),
    d = n(768622),
    u = n(836480),
    c = n(403581),
    A = n(34188),
    h = n(214947),
    _ = n(177953),
    E = n(577473),
    p = n(834730),
    m = n(587895),
    g = n(93055),
    I = n(5180),
    C = n(91242),
    f = n(263063),
    T = n(394953),
    S = n(734057),
    N = n(71393),
    O = n(309010),
    L = n(967198),
    y = n(486020),
    v = n(652215),
    b = n(165610),
    D = n(985018),
    R = n(602339),
    P = n(957896);
function w() {
    let e,
        t = (0, r.zy)(),
        n = (0, a.bG)([L.A], () => L.A.getGuildId()),
        w = (0, a.bG)([O.A], () => O.A.getChannelId()),
        M = (0, a.bG)([S.A], () => S.A.getChannel(w), [w]),
        U = n ?? M?.guild_id,
        x = (0, a.bG)([N.A], () => N.A.getGuild(U), [U]),
        G = (0, g.DZ)(),
        k = (0, T.lI)(),
        { application: j, isFrameInFocusedMode: V } = (0, a.cf)([m.A, C.A], () => {
            let e = C.A.getConnectedFrame();
            return {
                application: m.A.getApplication(e?.applicationId),
                isFrameInFocusedMode: C.A.getFrameLayoutMode() === b.y.FOCUSED,
            };
        }),
        H = null != j ? y.Ay.getApplicationIconURL({ id: j.id, icon: j.icon, bot: j.bot }) : void 0,
        B = null;
    return (null != j && V
        ? ((e = j.name),
          (B = (0, i.jsx)("img", {
              className: P.Z2,
              alt: D.intl.string(D.t.X4IxWL),
              src: H,
              "aria-hidden": !0,
              draggable: !1,
          })))
        : k
          ? ((e = D.intl.string(D.t.HcoRu0)), (B = (0, i.jsx)(l.X, { size: "sm" })))
          : null != x
            ? ((e = (0, I.YC)(x)),
              (B = G
                  ? (0, i.jsx)(s.G, { size: "sm" })
                  : (0, i.jsx)(f.Ay, { guild: x, size: f.Ay.Sizes.SMOL, active: !0, className: P.$f })))
            : null != M && (M.isDM() || M.isGroupDM())
              ? ((e = D.intl.string(D.t.YUU0RF)), (B = (0, i.jsx)(o.p, { size: "sm" })))
              : t.pathname.startsWith(v.BVt.ICYMI)
                ? ((e = D.intl.string(D.t["jnXV/V"])), (B = (0, i.jsx)(d.g, { size: "sm" })))
                : t.pathname.startsWith(v.BVt.GLOBAL_DISCOVERY)
                  ? ((e = D.intl.string(D.t["4nEZLk"])), (B = (0, i.jsx)(u.Q, { size: "sm" })))
                  : t.pathname.startsWith(v.BVt.NITRO_HOME)
                    ? ((e = D.intl.string(D.t.Ipxkog)), (B = (0, i.jsx)(c.t, { size: "sm" })))
                    : t.pathname.startsWith(v.BVt.COLLECTIBLES_SHOP)
                      ? ((e = D.intl.string(D.t.pWG4ze)), (B = (0, i.jsx)(A.U, { size: "sm" })))
                      : t.pathname.startsWith(v.BVt.FRIENDS)
                        ? ((e = D.intl.string(D.t.TdEu5X)), (B = (0, i.jsx)(h.$, { size: "sm" })))
                        : t.pathname.startsWith(v.BVt.FAMILY_CENTER)
                          ? ((e = D.intl.string(R.default.RZqaJn)), (B = (0, i.jsx)(_.n, { size: "sm" })))
                          : t.pathname.startsWith(v.BVt.QUEST_HOME) &&
                            ((e = D.intl.string(D.t.JALI2K)), (B = (0, i.jsx)(E.r, { size: "sm" }))),
    null == e || "" === e)
        ? null
        : (0, i.jsxs)("div", {
              className: P.DD,
              children: [B, (0, i.jsx)(p.E, { variant: "text-sm/medium", lineClamp: 1, children: e })],
          });
}
