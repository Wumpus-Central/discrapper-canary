a.d(n, { A: () => L, v: () => T }), a(938796);
var l = a(627968),
    s = a(64700),
    t = a(503698),
    i = a.n(t),
    r = a(665260),
    c = a(17928),
    d = a(359778),
    o = a(834730),
    u = a(628284),
    _ = a(276293),
    h = a(534514),
    m = a(622629),
    x = a(47167),
    g = a(713654),
    f = a(734057),
    b = a(696451),
    A = a(71393),
    p = a(576705),
    j = a(44234),
    I = a(486020),
    v = a(225142),
    N = a(701785),
    C = a(65995),
    E = a(111487),
    y = a(652215),
    G = a(340837),
    M = a(985018),
    w = a(664019);
function T(e) {
    let { title: n, emojiId: a, emojiName: s, icon: t, completed: r, Icon: c, onClick: _, ...h } = e,
        m = "channel" === h.variant ? h.channelId : null,
        x = "static" === h.variant ? h.subtitle : h.channelName,
        g = null != m ? I.Ay.getNewMemberActionIconURL({ channelId: m, icon: t }) : null;
    return (0, l.jsxs)(d.Z, {
        className: i()(w.XI, { [w.xU]: null != _ }),
        onClick: _,
        children: [
            null != g
                ? (0, l.jsx)("img", { src: g, className: w.Kk, width: 32, height: 32, alt: "", "aria-hidden": !0 })
                : (0, l.jsx)(E.A, {
                      emojiId: a,
                      emojiName: s,
                      size: E.g.LARGE,
                      defaultComponent: (0, l.jsx)("div", {
                          className: w.uM,
                          children: (0, l.jsx)(c, { className: w.p, color: "currentColor" }),
                      }),
                  }),
            (0, l.jsxs)("div", {
                className: w.$I,
                children: [
                    (0, l.jsx)(o.E, { variant: "text-md/semibold", color: "text-strong", children: n }),
                    null != x ? (0, l.jsx)(o.E, { variant: "text-xs/normal", color: "text-muted", children: x }) : null,
                ],
            }),
            r
                ? (0, l.jsx)(u.y, { size: "md", color: "currentColor", secondaryColor: "#fff", className: w.Yb })
                : (0, l.jsx)(j.A, { className: w.t3, width: 24, height: 24 }),
        ],
    });
}
function D(e) {
    let { action: n, completed: a } = e,
        { channelId: t, title: i, emoji: r, icon: d } = n,
        { id: o, name: u } = r ?? {},
        h = (0, c.bG)([f.A], () => f.A.getChannel(t)),
        m = (0, x.Ay)(h, !0),
        b = (0, c.bG)([p.A], () => p.A.can(y.xBc.VIEW_CHANNEL, h)),
        A = s.useMemo(() => {
            if (null != h) return () => (0, v.qo)(h.guild_id, h.id);
        }, [h]);
    if (null == h || !b) return null;
    let j = (0, g.gU)(h) ?? _.N;
    return (0, l.jsx)(T, {
        variant: "channel",
        channelId: t,
        title: i,
        channelName: m,
        emojiId: o,
        emojiName: u,
        icon: d,
        completed: a,
        Icon: j,
        onClick: A,
    });
}
function L(e) {
    let { guildId: n } = e,
        a = (0, c.bG)([N.h], () => N.h.getNewMemberActions(n), [n]),
        t = (0, c.bG)([C.A], () => C.A.getCompletedActions(n)),
        u = (0, c.bG)([b.Ay], () => b.Ay.getSelfMember(n)),
        _ = (0, c.bG)([A.A], () => A.A.getGuild(n));
    s.useEffect(() => {
        null == t && u?.flags != null && (0, r.Lt)(u.flags ?? 0, G.D.STARTED_HOME_ACTIONS) && (0, v.aW)(n);
    }, [t, n, u?.flags]);
    let x = s.useCallback(() => {
        null != _ && null != _.rulesChannelId && (0, v.qo)(_.id, _.rulesChannelId);
    }, [_]);
    return null == u || null == a || 0 === a.length
        ? null
        : (0, l.jsxs)("div", {
              className: w.kL,
              children: [
                  (0, l.jsx)(h.D, {
                      variant: "heading-lg/bold",
                      color: "text-strong",
                      children: M.intl.string(M.t.LhlgY9),
                  }),
                  a.map((e) =>
                      (0, l.jsx)(D, { action: e, completed: t?.[e.channelId] === !0, guildId: n }, e.channelId),
                  ),
                  _?.rulesChannelId != null &&
                      (0, l.jsxs)(d.Z, {
                          className: i()(w.XI, w.xU),
                          onClick: x,
                          children: [
                              (0, l.jsx)("div", {
                                  className: w.KK,
                                  children: (0, l.jsx)(m.B, { size: "xs", color: "currentColor", className: w.ZO }),
                              }),
                              (0, l.jsx)("div", {
                                  className: w.$I,
                                  children: (0, l.jsx)(o.E, {
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
