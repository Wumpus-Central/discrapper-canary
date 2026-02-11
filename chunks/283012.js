n.d(t, { A: () => j, v: () => O }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(665260),
    d = n(311907),
    o = n(397927),
    c = n(47167),
    u = n(713654),
    m = n(734057),
    N = n(696451),
    h = n(71393),
    I = n(576705),
    g = n(44234),
    A = n(486020),
    E = n(225142),
    S = n(701785),
    x = n(65995),
    _ = n(111487),
    T = n(652215),
    f = n(340837),
    p = n(985018),
    D = n(23456);
function O(e) {
    let { title: t, emojiId: n, emojiName: l, icon: s, completed: a, Icon: d, onClick: c, ...u } = e,
        m = "channel" === u.variant ? u.channelId : null,
        N = "static" === u.variant ? u.subtitle : u.channelName,
        h = null != m ? A.Ay.getNewMemberActionIconURL({ channelId: m, icon: s }) : null;
    return (0, i.jsxs)(o.ZpM, {
        className: r()(D.XI, { [D.xU]: null != c }),
        onClick: c,
        children: [
            null != h
                ? (0, i.jsx)("img", { src: h, className: D.Kk, width: 32, height: 32, alt: "", "aria-hidden": !0 })
                : (0, i.jsx)(_.A, {
                      emojiId: n,
                      emojiName: l,
                      size: _.g.LARGE,
                      defaultComponent: (0, i.jsx)("div", {
                          className: D.uM,
                          children: (0, i.jsx)(d, { className: D.p, color: "currentColor" }),
                      }),
                  }),
            (0, i.jsxs)("div", {
                className: D.$I,
                children: [
                    (0, i.jsx)(o.Text, { variant: "text-md/semibold", color: "text-strong", children: t }),
                    null != N
                        ? (0, i.jsx)(o.Text, { variant: "text-xs/normal", color: "text-muted", children: N })
                        : null,
                ],
            }),
            a
                ? (0, i.jsx)(o.yr3, { size: "md", color: "currentColor", secondaryColor: "#fff", className: D.Yb })
                : (0, i.jsx)(g.A, { className: D.t3, width: 24, height: 24 }),
        ],
    });
}
function G(e) {
    let { action: t, completed: n } = e,
        { channelId: s, title: r, emoji: a, icon: N } = t,
        { id: h, name: g } = a ?? {},
        A = (0, d.bG)([m.A], () => m.A.getChannel(s)),
        S = (0, c.Ay)(A, !0),
        x = (0, d.bG)([I.A], () => I.A.can(T.xBc.VIEW_CHANNEL, A)),
        _ = l.useMemo(() => {
            if (null != A) return () => (0, E.qo)(A.guild_id, A.id);
        }, [A]);
    if (null == A || !x) return null;
    let f = (0, u.gU)(A) ?? o.N$i;
    return (0, i.jsx)(O, {
        variant: "channel",
        channelId: s,
        title: r,
        channelName: S,
        emojiId: h,
        emojiName: g,
        icon: N,
        completed: n,
        Icon: f,
        onClick: _,
    });
}
function j(e) {
    let { guildId: t } = e,
        n = (0, d.bG)([S.h], () => S.h.getNewMemberActions(t), [t]),
        s = (0, d.bG)([x.A], () => x.A.getCompletedActions(t)),
        c = (0, d.bG)([N.Ay], () => N.Ay.getSelfMember(t)),
        u = (0, d.bG)([h.A], () => h.A.getGuild(t));
    l.useEffect(() => {
        null == s && c?.flags != null && (0, a.Lt)(c.flags ?? 0, f.D.STARTED_HOME_ACTIONS) && (0, E.aW)(t);
    }, [s, t, c?.flags]);
    let m = l.useCallback(() => {
        null != u && null != u.rulesChannelId && (0, E.qo)(u.id, u.rulesChannelId);
    }, [u]);
    return null == c || null == n || 0 === n.length
        ? null
        : (0, i.jsxs)("div", {
              className: D.kL,
              children: [
                  (0, i.jsx)(o.Heading, {
                      variant: "heading-lg/bold",
                      color: "text-strong",
                      children: p.intl.string(p.t.LhlgY9),
                  }),
                  n.map((e) =>
                      (0, i.jsx)(G, { action: e, completed: s?.[e.channelId] === !0, guildId: t }, e.channelId),
                  ),
                  u?.rulesChannelId != null &&
                      (0, i.jsxs)(o.ZpM, {
                          className: r()(D.XI, D.xU),
                          onClick: m,
                          children: [
                              (0, i.jsx)("div", {
                                  className: D.KK,
                                  children: (0, i.jsx)(o.B8Q, { size: "xs", color: "currentColor", className: D.ZO }),
                              }),
                              (0, i.jsx)("div", {
                                  className: D.$I,
                                  children: (0, i.jsx)(o.Text, {
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
