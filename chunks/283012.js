n.d(t, { A: () => R, v: () => L }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(665260),
    d = n(17928),
    o = n(359778),
    c = n(834730),
    u = n(628284);
if (21552 == n.j) var m = n(276293);
if (21552 == n.j) var N = n(534514);
if (21552 == n.j) var h = n(622629);
var I = n(47167),
    E = n(713654),
    g = n(734057),
    A = n(696451),
    S = n(71393),
    _ = n(576705),
    f = n(44234),
    x = n(486020),
    T = n(225142),
    D = n(701785),
    j = n(65995),
    p = n(111487),
    O = n(652215),
    G = n(340837),
    v = n(985018),
    C = n(664019);
function L(e) {
    let { title: t, emojiId: n, emojiName: l, icon: s, completed: a, Icon: d, onClick: m, ...N } = e,
        h = "channel" === N.variant ? N.channelId : null,
        I = "static" === N.variant ? N.subtitle : N.channelName,
        E = null != h ? x.Ay.getNewMemberActionIconURL({ channelId: h, icon: s }) : null;
    return (0, i.jsxs)(o.Z, {
        className: r()(C.XI, { [C.xU]: null != m }),
        onClick: m,
        children: [
            null != E
                ? (0, i.jsx)("img", { src: E, className: C.Kk, width: 32, height: 32, alt: "", "aria-hidden": !0 })
                : (0, i.jsx)(p.A, {
                      emojiId: n,
                      emojiName: l,
                      size: p.g.LARGE,
                      defaultComponent: (0, i.jsx)("div", {
                          className: C.uM,
                          children: (0, i.jsx)(d, { className: C.p, color: "currentColor" }),
                      }),
                  }),
            (0, i.jsxs)("div", {
                className: C.$I,
                children: [
                    (0, i.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: t }),
                    null != I ? (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: I }) : null,
                ],
            }),
            a
                ? (0, i.jsx)(u.y, { size: "md", color: "currentColor", secondaryColor: "#fff", className: C.Yb })
                : (0, i.jsx)(f.A, { className: C.t3, width: 24, height: 24 }),
        ],
    });
}
function b(e) {
    let { action: t, completed: n } = e,
        { channelId: s, title: r, emoji: a, icon: o } = t,
        { id: c, name: u } = a ?? {},
        N = (0, d.bG)([g.A], () => g.A.getChannel(s)),
        h = (0, I.Ay)(N, !0),
        A = (0, d.bG)([_.A], () => _.A.can(O.xBc.VIEW_CHANNEL, N)),
        S = l.useMemo(() => {
            if (null != N) return () => (0, T.qo)(N.guild_id, N.id);
        }, [N]);
    if (null == N || !A) return null;
    let f = (0, E.gU)(N) ?? m.N;
    return (0, i.jsx)(L, {
        variant: "channel",
        channelId: s,
        title: r,
        channelName: h,
        emojiId: c,
        emojiName: u,
        icon: o,
        completed: n,
        Icon: f,
        onClick: S,
    });
}
function R(e) {
    let { guildId: t } = e,
        n = (0, d.bG)([D.h], () => D.h.getNewMemberActions(t), [t]),
        s = (0, d.bG)([j.A], () => j.A.getCompletedActions(t)),
        u = (0, d.bG)([A.Ay], () => A.Ay.getSelfMember(t)),
        m = (0, d.bG)([S.A], () => S.A.getGuild(t));
    l.useEffect(() => {
        null == s && u?.flags != null && (0, a.Lt)(u.flags ?? 0, G.D.STARTED_HOME_ACTIONS) && (0, T.aW)(t);
    }, [s, t, u?.flags]);
    let I = l.useCallback(() => {
        null != m && null != m.rulesChannelId && (0, T.qo)(m.id, m.rulesChannelId);
    }, [m]);
    return null == u || null == n || 0 === n.length
        ? null
        : (0, i.jsxs)("div", {
              className: C.kL,
              children: [
                  (0, i.jsx)(N.D, {
                      variant: "heading-lg/bold",
                      color: "text-strong",
                      children: v.intl.string(v.t.LhlgY9),
                  }),
                  n.map((e) =>
                      (0, i.jsx)(b, { action: e, completed: s?.[e.channelId] === !0, guildId: t }, e.channelId),
                  ),
                  m?.rulesChannelId != null &&
                      (0, i.jsxs)(o.Z, {
                          className: r()(C.XI, C.xU),
                          onClick: I,
                          children: [
                              (0, i.jsx)("div", {
                                  className: C.KK,
                                  children: (0, i.jsx)(h.B, { size: "xs", color: "currentColor", className: C.ZO }),
                              }),
                              (0, i.jsx)("div", {
                                  className: C.$I,
                                  children: (0, i.jsx)(c.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: v.intl.string(v.t["K/i3iQ"]),
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
