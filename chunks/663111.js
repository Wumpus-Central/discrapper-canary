n.d(t, { M: () => y });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(873263),
    o = n(311907),
    d = n(435371),
    c = n(397927),
    u = n(587895),
    A = n(515610),
    h = n(91242),
    _ = n(263063),
    m = n(394953),
    p = n(793322),
    g = n(734057),
    E = n(71393),
    I = n(309010),
    f = n(967198),
    C = n(486020),
    T = n(652215),
    N = n(165610),
    S = n(985018),
    x = n(842130),
    v = n(878251);
function y(e) {
    let t,
        { withFastTravel: n, focusSectionProps: l } = e,
        y = (0, s.zy)(),
        b = (0, o.bG)([f.A], () => f.A.getGuildId()),
        O = (0, o.bG)([I.A], () => I.A.getChannelId()),
        L = (0, o.bG)([g.A], () => g.A.getChannel(O), [O]),
        R = b ?? L?.guild_id,
        P = (0, o.bG)([E.A], () => E.A.getGuild(R), [R]),
        j = (0, A.A)(),
        D = (0, m.lI)(),
        { application: M, isFrameInFocusedMode: w } = (0, o.cf)([u.A, h.A], () => {
            let e = h.A.getConnectedFrame();
            return {
                application: u.A.getApplication(e?.applicationId),
                isFrameInFocusedMode: h.A.getFrameLayoutMode() === N.y.FOCUSED,
            };
        }),
        U = null != M ? C.Ay.getApplicationIconURL({ id: M.id, icon: M.icon, bot: M.bot }) : void 0,
        G = null;
    null != M && w
        ? ((t = M.name),
          (G = (0, i.jsx)("img", {
              className: v.Z2,
              alt: S.intl.string(S.t.X4IxWL),
              src: U,
              "aria-hidden": !0,
              draggable: !1,
          })))
        : D
          ? ((t = S.intl.string(S.t.HcoRu0)), (G = (0, i.jsx)(c.XFE, { size: "sm" })))
          : null != P
            ? ((G = j
                  ? (0, i.jsx)(c.Gg5, { size: "sm" })
                  : (0, i.jsx)(_.Ay, { guild: P, size: _.Ay.Sizes.SMOL, active: !0, className: v.$f })),
              (t = P.name))
            : null != L && (L.isDM() || L.isGroupDM())
              ? ((t = S.intl.string(S.t.YUU0RF)), (G = (0, i.jsx)(c.pVd, { size: "sm" })))
              : y.pathname.startsWith(T.BVt.ICYMI)
                ? ((t = S.intl.string(S.t["jnXV/V"])), (G = (0, i.jsx)(c.gXB, { size: "sm" })))
                : y.pathname.startsWith(T.BVt.GLOBAL_DISCOVERY)
                  ? ((t = S.intl.string(S.t["4nEZLk"])), (G = (0, i.jsx)(c.QGJ, { size: "sm" })))
                  : y.pathname.startsWith(T.BVt.NITRO_HOME)
                    ? ((t = S.intl.string(S.t.Ipxkog)), (G = (0, i.jsx)(c.tvc, { size: "sm" })))
                    : y.pathname.startsWith(T.BVt.COLLECTIBLES_SHOP)
                      ? ((t = S.intl.string(S.t.pWG4ze)), (G = (0, i.jsx)(c.U1X, { size: "sm" })))
                      : y.pathname.startsWith(T.BVt.FRIENDS)
                        ? ((t = S.intl.string(S.t.TdEu5X)), (G = (0, i.jsx)(c.$yI, { size: "sm" })))
                        : y.pathname.startsWith(T.BVt.FAMILY_CENTER)
                          ? ((t = S.intl.string(x.default.RZqaJn)), (G = (0, i.jsx)(c.nFg, { size: "sm" })))
                          : y.pathname.startsWith(T.BVt.QUEST_HOME) &&
                            ((t = S.intl.string(S.t.JALI2K)), (G = (0, i.jsx)(c.r2v, { size: "sm" })));
    let k = r.useCallback((e) => {
            (0, p.L$)("fast-travel");
        }, []),
        V = (null == t || "" === t) && n ? S.intl.string(S.t.ZvKwYa) : t;
    return null == V || "" === V
        ? null
        : (0, i.jsx)(d.m_, {
              shouldShow: n,
              ariaHidden: !0,
              text: S.intl.string(S.t["7P/+qz"]),
              keyboardShortcut: ["mod", "k"],
              children: (0, i.jsxs)(c.DUT, {
                  className: a()(v.DD, { [v.Nt]: n }),
                  "aria-label": S.intl.string(S.t["7P/+qz"]),
                  ...l,
                  onClick: n ? k : void 0,
                  children: [
                      G,
                      (0, i.jsx)(c.Text, { variant: "text-sm/medium", lineClamp: 1, children: V }),
                      n && (0, i.jsx)(c._BQ, { className: v.c8, size: "xs" }),
                  ],
              }),
          });
}
