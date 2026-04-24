l.d(n, { A: () => R, v: () => D }), l(938796);
var a = l(627968),
    s = l(64700),
    t = l(503698),
    i = l.n(t),
    r = l(665260),
    d = l(17928),
    c = l(359778),
    o = l(834730),
    u = l(628284),
    h = l(276293),
    m = l(534514),
    x = l(622629),
    g = l(47167),
    _ = l(713654),
    A = l(734057),
    f = l(696451),
    j = l(71393),
    b = l(576705),
    I = l(44234),
    N = l(486020),
    C = l(225142),
    v = l(701785),
    p = l(65995),
    E = l(111487),
    y = l(652215),
    G = l(340837),
    M = l(985018),
    L = l(664019);
function D(e) {
    let { title: n, emojiId: l, emojiName: s, icon: t, completed: r, Icon: d, onClick: h, ...m } = e,
        x = "channel" === m.variant ? m.channelId : null,
        g = "static" === m.variant ? m.subtitle : m.channelName,
        _ = null != x ? N.Ay.getNewMemberActionIconURL({ channelId: x, icon: t }) : null;
    return (0, a.jsxs)(c.Z, {
        className: i()(L.XI, { [L.xU]: null != h }),
        onClick: h,
        children: [
            null != _
                ? (0, a.jsx)("img", { src: _, className: L.Kk, width: 32, height: 32, alt: "", "aria-hidden": !0 })
                : (0, a.jsx)(E.A, {
                      emojiId: l,
                      emojiName: s,
                      size: E.g.LARGE,
                      defaultComponent: (0, a.jsx)("div", {
                          className: L.uM,
                          children: (0, a.jsx)(d, { className: L.p, color: "currentColor" }),
                      }),
                  }),
            (0, a.jsxs)("div", {
                className: L.$I,
                children: [
                    (0, a.jsx)(o.E, { variant: "text-md/semibold", color: "text-strong", children: n }),
                    null != g ? (0, a.jsx)(o.E, { variant: "text-xs/normal", color: "text-muted", children: g }) : null,
                ],
            }),
            r
                ? (0, a.jsx)(u.y, { size: "md", color: "currentColor", secondaryColor: "#fff", className: L.Yb })
                : (0, a.jsx)(I.A, { className: L.t3, width: 24, height: 24 }),
        ],
    });
}
function w(e) {
    let { action: n, completed: l } = e,
        { channelId: t, title: i, emoji: r, icon: c } = n,
        { id: o, name: u } = r ?? {},
        m = (0, d.bG)([A.A], () => A.A.getChannel(t)),
        x = (0, g.Ay)(m, !0),
        f = (0, d.bG)([b.A], () => b.A.can(y.xBc.VIEW_CHANNEL, m)),
        j = s.useMemo(() => {
            if (null != m) return () => (0, C.qo)(m.guild_id, m.id);
        }, [m]);
    if (null == m || !f) return null;
    let I = (0, _.gU)(m) ?? h.N;
    return (0, a.jsx)(D, {
        variant: "channel",
        channelId: t,
        title: i,
        channelName: x,
        emojiId: o,
        emojiName: u,
        icon: c,
        completed: l,
        Icon: I,
        onClick: j,
    });
}
function R(e) {
    let { guildId: n } = e,
        l = (0, d.bG)([v.h], () => v.h.getNewMemberActions(n), [n]),
        t = (0, d.bG)([p.A], () => p.A.getCompletedActions(n)),
        u = (0, d.bG)([f.Ay], () => f.Ay.getSelfMember(n)),
        h = (0, d.bG)([j.A], () => j.A.getGuild(n));
    s.useEffect(() => {
        null == t && u?.flags != null && (0, r.Lt)(u.flags ?? 0, G.D.STARTED_HOME_ACTIONS) && (0, C.aW)(n);
    }, [t, n, u?.flags]);
    let g = s.useCallback(() => {
        null != h && null != h.rulesChannelId && (0, C.qo)(h.id, h.rulesChannelId);
    }, [h]);
    return null == u || null == l || 0 === l.length
        ? null
        : (0, a.jsxs)("div", {
              className: L.kL,
              children: [
                  (0, a.jsx)(m.D, {
                      variant: "heading-lg/bold",
                      color: "text-strong",
                      children: M.intl.string(M.t.LhlgY9),
                  }),
                  l.map((e) =>
                      (0, a.jsx)(w, { action: e, completed: t?.[e.channelId] === !0, guildId: n }, e.channelId),
                  ),
                  h?.rulesChannelId != null &&
                      (0, a.jsxs)(c.Z, {
                          className: i()(L.XI, L.xU),
                          onClick: g,
                          children: [
                              (0, a.jsx)("div", {
                                  className: L.KK,
                                  children: (0, a.jsx)(x.B, { size: "xs", color: "currentColor", className: L.ZO }),
                              }),
                              (0, a.jsx)("div", {
                                  className: L.$I,
                                  children: (0, a.jsx)(o.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: M.intl.string(M.t["K/i3iQ"]),
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
