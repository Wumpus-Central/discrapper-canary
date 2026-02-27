l.d(n, { A: () => M, v: () => y }), l(938796);
var a = l(627968),
    s = l(64700),
    t = l(503698),
    i = l.n(t),
    r = l(665260),
    d = l(311907),
    c = l(397927),
    o = l(47167),
    u = l(713654),
    h = l(734057),
    m = l(696451),
    x = l(71393),
    g = l(576705),
    A = l(44234),
    _ = l(486020),
    f = l(225142),
    j = l(701785),
    b = l(65995),
    I = l(111487),
    N = l(652215),
    C = l(340837),
    p = l(985018),
    v = l(658938);
function y(e) {
    let { title: n, emojiId: l, emojiName: s, icon: t, completed: r, Icon: d, onClick: o, ...u } = e,
        h = "channel" === u.variant ? u.channelId : null,
        m = "static" === u.variant ? u.subtitle : u.channelName,
        x = null != h ? _.Ay.getNewMemberActionIconURL({ channelId: h, icon: t }) : null;
    return (0, a.jsxs)(c.ZpM, {
        className: i()(v.XI, { [v.xU]: null != o }),
        onClick: o,
        children: [
            null != x
                ? (0, a.jsx)("img", { src: x, className: v.Kk, width: 32, height: 32, alt: "", "aria-hidden": !0 })
                : (0, a.jsx)(I.A, {
                      emojiId: l,
                      emojiName: s,
                      size: I.g.LARGE,
                      defaultComponent: (0, a.jsx)("div", {
                          className: v.uM,
                          children: (0, a.jsx)(d, { className: v.p, color: "currentColor" }),
                      }),
                  }),
            (0, a.jsxs)("div", {
                className: v.$I,
                children: [
                    (0, a.jsx)(c.Text, { variant: "text-md/semibold", color: "text-strong", children: n }),
                    null != m
                        ? (0, a.jsx)(c.Text, { variant: "text-xs/normal", color: "text-muted", children: m })
                        : null,
                ],
            }),
            r
                ? (0, a.jsx)(c.yr3, { size: "md", color: "currentColor", secondaryColor: "#fff", className: v.Yb })
                : (0, a.jsx)(A.A, { className: v.t3, width: 24, height: 24 }),
        ],
    });
}
function G(e) {
    let { action: n, completed: l } = e,
        { channelId: t, title: i, emoji: r, icon: m } = n,
        { id: x, name: A } = r ?? {},
        _ = (0, d.bG)([h.A], () => h.A.getChannel(t)),
        j = (0, o.Ay)(_, !0),
        b = (0, d.bG)([g.A], () => g.A.can(N.xBc.VIEW_CHANNEL, _)),
        I = s.useMemo(() => {
            if (null != _) return () => (0, f.qo)(_.guild_id, _.id);
        }, [_]);
    if (null == _ || !b) return null;
    let C = (0, u.gU)(_) ?? c.N$i;
    return (0, a.jsx)(y, {
        variant: "channel",
        channelId: t,
        title: i,
        channelName: j,
        emojiId: x,
        emojiName: A,
        icon: m,
        completed: l,
        Icon: C,
        onClick: I,
    });
}
function M(e) {
    let { guildId: n } = e,
        l = (0, d.bG)([j.h], () => j.h.getNewMemberActions(n), [n]),
        t = (0, d.bG)([b.A], () => b.A.getCompletedActions(n)),
        o = (0, d.bG)([m.Ay], () => m.Ay.getSelfMember(n)),
        u = (0, d.bG)([x.A], () => x.A.getGuild(n));
    s.useEffect(() => {
        null == t && o?.flags != null && (0, r.Lt)(o.flags ?? 0, C.D.STARTED_HOME_ACTIONS) && (0, f.aW)(n);
    }, [t, n, o?.flags]);
    let h = s.useCallback(() => {
        null != u && null != u.rulesChannelId && (0, f.qo)(u.id, u.rulesChannelId);
    }, [u]);
    return null == o || null == l || 0 === l.length
        ? null
        : (0, a.jsxs)("div", {
              className: v.kL,
              children: [
                  (0, a.jsx)(c.Heading, {
                      variant: "heading-lg/bold",
                      color: "text-strong",
                      children: p.intl.string(p.t.LhlgY9),
                  }),
                  l.map((e) =>
                      (0, a.jsx)(G, { action: e, completed: t?.[e.channelId] === !0, guildId: n }, e.channelId),
                  ),
                  u?.rulesChannelId != null &&
                      (0, a.jsxs)(c.ZpM, {
                          className: i()(v.XI, v.xU),
                          onClick: h,
                          children: [
                              (0, a.jsx)("div", {
                                  className: v.KK,
                                  children: (0, a.jsx)(c.B8Q, { size: "xs", color: "currentColor", className: v.ZO }),
                              }),
                              (0, a.jsx)("div", {
                                  className: v.$I,
                                  children: (0, a.jsx)(c.Text, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: p.intl.string(p.t["K/i3iQ"]),
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
