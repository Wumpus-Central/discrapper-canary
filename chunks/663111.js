n.d(t, { M: () => b });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(873263),
    o = n(311907),
    d = n(435371),
    c = n(397927),
    u = n(587895),
    A = n(545167),
    h = n(515610),
    _ = n(91242),
    m = n(263063),
    p = n(394953),
    g = n(793322),
    E = n(734057),
    I = n(71393),
    f = n(309010),
    C = n(967198),
    T = n(486020),
    N = n(652215),
    S = n(165610),
    x = n(985018),
    v = n(870236),
    y = n(963369);
function b(e) {
    let t,
        { withFastTravel: n, focusSectionProps: l } = e,
        b = (0, s.zy)(),
        O = (0, o.bG)([C.A], () => C.A.getGuildId()),
        L = (0, o.bG)([f.A], () => f.A.getChannelId()),
        R = (0, o.bG)([E.A], () => E.A.getChannel(L), [L]),
        P = O ?? R?.guild_id,
        j = (0, o.bG)([I.A], () => I.A.getGuild(P), [P]),
        D = (0, h.A)(),
        M = (0, p.lI)(),
        { guildTitleIconSize: w, guildIconSize: U } = (0, A.pz)({ location: "GuildTitle" }),
        { application: G, isFrameInFocusedMode: k } = (0, o.cf)([u.A, _.A], () => {
            let e = _.A.getConnectedFrame();
            return {
                application: u.A.getApplication(e?.applicationId),
                isFrameInFocusedMode: _.A.getFrameLayoutMode() === S.y.FOCUSED,
            };
        }),
        V = null != G ? T.Ay.getApplicationIconURL({ id: G.id, icon: G.icon, bot: G.bot }) : void 0,
        B = null;
    null != G && k
        ? ((t = G.name),
          (B = (0, i.jsx)("img", {
              className: y.Z2,
              alt: x.intl.string(x.t.X4IxWL),
              src: V,
              "aria-hidden": !0,
              draggable: !1,
          })))
        : M
          ? ((t = x.intl.string(x.t.HcoRu0)), (B = (0, i.jsx)(c.XFE, { size: w })))
          : null != j
            ? ((B = D
                  ? (0, i.jsx)(c.Gg5, { size: w })
                  : (0, i.jsx)(m.Ay, { guild: j, size: U, active: !0, className: y.$f })),
              (t = j.name))
            : null != R && (R.isDM() || R.isGroupDM())
              ? ((t = x.intl.string(x.t.YUU0RF)), (B = (0, i.jsx)(c.pVd, { size: w })))
              : b.pathname.startsWith(N.BVt.ICYMI)
                ? ((t = x.intl.string(x.t["jnXV/V"])), (B = (0, i.jsx)(c.gXB, { size: w })))
                : b.pathname.startsWith(N.BVt.GLOBAL_DISCOVERY)
                  ? ((t = x.intl.string(x.t["4nEZLk"])), (B = (0, i.jsx)(c.QGJ, { size: w })))
                  : b.pathname.startsWith(N.BVt.NITRO_HOME)
                    ? ((t = x.intl.string(x.t.Ipxkog)), (B = (0, i.jsx)(c.tvc, { size: w })))
                    : b.pathname.startsWith(N.BVt.COLLECTIBLES_SHOP)
                      ? ((t = x.intl.string(x.t.pWG4ze)), (B = (0, i.jsx)(c.U1X, { size: w })))
                      : b.pathname.startsWith(N.BVt.FRIENDS)
                        ? ((t = x.intl.string(x.t.TdEu5X)), (B = (0, i.jsx)(c.$yI, { size: w })))
                        : b.pathname.startsWith(N.BVt.FAMILY_CENTER)
                          ? ((t = x.intl.string(v.default.RZqaJn)), (B = (0, i.jsx)(c.nFg, { size: w })))
                          : b.pathname.startsWith(N.BVt.QUEST_HOME_V2) &&
                            ((t = x.intl.string(x.t.JALI2K)), (B = (0, i.jsx)(c.r2v, { size: w })));
    let H = r.useCallback((e) => {
            (0, g.L$)("fast-travel");
        }, []),
        F = (null == t || "" === t) && n ? x.intl.string(x.t.ZvKwYa) : t;
    return null == F || "" === F
        ? null
        : (0, i.jsx)(d.m_, {
              shouldShow: n,
              ariaHidden: !0,
              text: x.intl.string(x.t["7P/+qz"]),
              keyboardShortcut: ["mod", "k"],
              children: (0, i.jsxs)(c.DUT, {
                  className: a()(y.DD, { [y.Nt]: n }),
                  "aria-label": x.intl.string(x.t["7P/+qz"]),
                  ...l,
                  onClick: n ? H : void 0,
                  children: [
                      B,
                      (0, i.jsx)(c.Text, { variant: "text-sm/medium", lineClamp: 1, children: F }),
                      n && (0, i.jsx)(c._BQ, { className: y.c8, size: "xs" }),
                  ],
              }),
          });
}
