n.d(t, { M: () => y });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(960488),
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
    f = n(71393),
    I = n(309010),
    C = n(967198),
    N = n(486020),
    T = n(652215),
    S = n(165610),
    x = n(985018),
    v = n(842130),
    b = n(878251);
function y(e) {
    let t,
        { withFastTravel: n, focusSectionProps: a } = e,
        y = (0, s.zy)(),
        L = (0, o.bG)([C.A], () => C.A.getGuildId()),
        O = (0, o.bG)([I.A], () => I.A.getChannelId()),
        R = (0, o.bG)([E.A], () => E.A.getChannel(O), [O]),
        P = L ?? R?.guild_id,
        j = (0, o.bG)([f.A], () => f.A.getGuild(P), [P]),
        D = (0, h.A)(),
        w = (0, p.lI)(),
        { guildTitleIconSize: M, guildIconSize: U } = (0, A.pz)({ location: "GuildTitle" }),
        { application: G, isFrameInFocusedMode: k } = (0, o.cf)([u.A, _.A], () => {
            let e = _.A.getConnectedFrame();
            return {
                application: u.A.getApplication(e?.applicationId),
                isFrameInFocusedMode: _.A.getFrameLayoutMode() === S.y.FOCUSED,
            };
        }),
        V = null != G ? N.Ay.getApplicationIconURL({ id: G.id, icon: G.icon, bot: G.bot }) : void 0,
        B = null;
    null != G && k
        ? ((t = G.name),
          (B = (0, i.jsx)("img", {
              className: b.Z2,
              alt: x.intl.string(x.t.X4IxWL),
              src: V,
              "aria-hidden": !0,
              draggable: !1,
          })))
        : w
          ? ((t = x.intl.string(x.t.HcoRu0)), (B = (0, i.jsx)(c.XFE, { size: M })))
          : null != j
            ? ((B = D
                  ? (0, i.jsx)(c.Gg5, { size: M })
                  : (0, i.jsx)(m.A, { guild: j, size: U, active: !0, className: b.$f })),
              (t = j.name))
            : null != R && (R.isDM() || R.isGroupDM())
              ? ((t = x.intl.string(x.t.YUU0RF)), (B = (0, i.jsx)(c.pVd, { size: M })))
              : y.pathname.startsWith(T.BVt.ICYMI)
                ? ((t = x.intl.string(x.t["jnXV/V"])), (B = (0, i.jsx)(c.gXB, { size: M })))
                : y.pathname.startsWith(T.BVt.GLOBAL_DISCOVERY)
                  ? ((t = x.intl.string(x.t["4nEZLk"])), (B = (0, i.jsx)(c.QGJ, { size: M })))
                  : y.pathname.startsWith(T.BVt.NITRO_HOME)
                    ? ((t = x.intl.string(x.t.Ipxkog)), (B = (0, i.jsx)(c.tvc, { size: M })))
                    : y.pathname.startsWith(T.BVt.COLLECTIBLES_SHOP)
                      ? ((t = x.intl.string(x.t.pWG4ze)), (B = (0, i.jsx)(c.U1X, { size: M })))
                      : y.pathname.startsWith(T.BVt.FRIENDS)
                        ? ((t = x.intl.string(x.t.TdEu5X)), (B = (0, i.jsx)(c.$yI, { size: M })))
                        : y.pathname.startsWith(T.BVt.FAMILY_CENTER)
                          ? ((t = x.intl.string(v.default.RZqaJn)), (B = (0, i.jsx)(c.nFg, { size: M })))
                          : y.pathname.startsWith(T.BVt.QUEST_HOME_V2) &&
                            ((t = x.intl.string(x.t.JALI2K)), (B = (0, i.jsx)(c.r2v, { size: M })));
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
                  className: l()(b.DD, { [b.Nt]: n }),
                  "aria-label": x.intl.string(x.t["7P/+qz"]),
                  ...a,
                  onClick: n ? H : void 0,
                  children: [
                      B,
                      (0, i.jsx)(c.Text, { variant: "text-sm/medium", lineClamp: 1, children: F }),
                      n && (0, i.jsx)(c._BQ, { className: b.c8, size: "xs" }),
                  ],
              }),
          });
}
