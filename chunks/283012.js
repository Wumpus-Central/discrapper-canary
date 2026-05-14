n.d(l, { A: () => D, v: () => y }), n(938796);
var s = n(627968),
    t = n(64700),
    a = n(503698),
    i = n.n(a),
    r = n(665260),
    c = n(17928),
    d = n(359778),
    u = n(834730),
    o = n(628284),
    m = n(939249);
if (21552 == n.j) var x = n(276293);
if (21552 == n.j) var h = n(534514);
if (21552 == n.j) var g = n(622629);
var j = n(47167),
    A = n(713654),
    N = n(734057),
    f = n(696451),
    v = n(71393),
    b = n(576705),
    I = n(44234),
    p = n(486020),
    C = n(225142),
    E = n(701785),
    G = n(65995),
    M = n(111487),
    L = n(652215),
    _ = n(340837),
    k = n(375708),
    U = n(664019);
function y(e) {
    let { title: l, emojiId: n, emojiName: t, icon: a, completed: r, Icon: c, onClick: x, ...h } = e,
        g = "channel" === h.variant ? h.channelId : null,
        j = "static" === h.variant ? h.subtitle : h.channelName,
        A = null != g ? p.Ay.getNewMemberActionIconURL({ channelId: g, icon: a }) : null,
        N = (0, s.jsxs)(d.Z, {
            className: i()(U.XI, { [U.xU]: null != x }),
            children: [
                null != A
                    ? (0, s.jsx)("img", { src: A, className: U.Kk, width: 32, height: 32, alt: "", "aria-hidden": !0 })
                    : (0, s.jsx)(M.A, {
                          emojiId: n,
                          emojiName: t,
                          size: M.g.LARGE,
                          defaultComponent: (0, s.jsx)("div", {
                              className: U.uM,
                              children: (0, s.jsx)(c, { className: U.p, color: "currentColor" }),
                          }),
                      }),
                (0, s.jsxs)("div", {
                    className: U.$I,
                    children: [
                        (0, s.jsx)(u.E, { variant: "text-md/semibold", color: "text-strong", children: l }),
                        null != j
                            ? (0, s.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: j })
                            : null,
                    ],
                }),
                r
                    ? (0, s.jsx)(o.y, { size: "md", color: "currentColor", secondaryColor: "#fff", className: U.Yb })
                    : (0, s.jsx)(I.A, { className: U.t3, width: 24, height: 24 }),
            ],
        });
    return null != x
        ? (0, s.jsx)(m.D, {
              onClick: x,
              "aria-label": k.intl.formatToPlainString(k.t.FXFkPg, {
                  title: l,
                  status: r ? k.intl.string(k.t.g62IJl) : k.intl.string(k.t.DaELnU),
              }),
              children: N,
          })
        : N;
}
function R(e) {
    let { action: l, completed: n } = e,
        { channelId: a, title: i, emoji: r, icon: d } = l,
        { id: u, name: o } = r ?? {},
        m = (0, c.bG)([N.A], () => N.A.getChannel(a)),
        h = (0, j.Ay)(m, !0),
        g = (0, c.bG)([b.A], () => b.A.can(L.xBc.VIEW_CHANNEL, m)),
        f = t.useMemo(() => {
            if (null != m) return () => (0, C.qo)(m.guild_id, m.id);
        }, [m]);
    if (null == m || !g) return null;
    let v = (0, A.gU)(m) ?? x.N;
    return (0, s.jsx)(y, {
        variant: "channel",
        channelId: a,
        title: i,
        channelName: h,
        emojiId: u,
        emojiName: o,
        icon: d,
        completed: n,
        Icon: v,
        onClick: f,
    });
}
function D(e) {
    let { guildId: l } = e,
        n = (0, c.bG)([E.h], () => E.h.getNewMemberActions(l), [l]),
        a = (0, c.bG)([G.A], () => G.A.getCompletedActions(l)),
        o = (0, c.bG)([f.Ay], () => f.Ay.getSelfMember(l)),
        x = (0, c.bG)([v.A], () => v.A.getGuild(l));
    t.useEffect(() => {
        null == a && o?.flags != null && (0, r.Lt)(o.flags ?? 0, _.D.STARTED_HOME_ACTIONS) && (0, C.aW)(l);
    }, [a, l, o?.flags]);
    let j = t.useCallback(() => {
        null != x && null != x.rulesChannelId && (0, C.qo)(x.id, x.rulesChannelId);
    }, [x]);
    return null == o || null == n || 0 === n.length
        ? null
        : (0, s.jsxs)("div", {
              className: U.kL,
              children: [
                  (0, s.jsx)(h.D, {
                      variant: "heading-lg/bold",
                      color: "text-strong",
                      children: k.intl.string(k.t.LhlgY9),
                  }),
                  n.map((e) =>
                      (0, s.jsx)(R, { action: e, completed: a?.[e.channelId] === !0, guildId: l }, e.channelId),
                  ),
                  x?.rulesChannelId != null &&
                      (0, s.jsx)(m.D, {
                          onClick: j,
                          "aria-label": k.intl.string(k.t["K/i3iQ"]),
                          children: (0, s.jsxs)(d.Z, {
                              className: i()(U.XI, U.xU),
                              children: [
                                  (0, s.jsx)("div", {
                                      className: U.KK,
                                      children: (0, s.jsx)(g.B, { size: "xs", color: "currentColor", className: U.ZO }),
                                  }),
                                  (0, s.jsx)("div", {
                                      className: U.$I,
                                      children: (0, s.jsx)(u.E, {
                                          variant: "text-md/semibold",
                                          color: "text-strong",
                                          children: k.intl.string(k.t["K/i3iQ"]),
                                      }),
                                  }),
                              ],
                          }),
                      }),
              ],
          });
}
