n.d(l, { A: () => U, v: () => y }), n(938796);
var s = n(627968),
    a = n(64700),
    t = n(503698),
    r = n.n(t),
    i = n(665260),
    c = n(17928),
    d = n(359778),
    u = n(834730),
    o = n(628284);
if (21552 == n.j) var m = n(276293);
if (21552 == n.j) var x = n(534514);
if (21552 == n.j) var h = n(622629);
var j = n(47167),
    A = n(713654),
    g = n(734057),
    N = n(696451),
    v = n(71393),
    f = n(576705),
    I = n(44234),
    b = n(486020),
    p = n(225142),
    C = n(701785),
    E = n(65995),
    G = n(111487),
    M = n(652215),
    _ = n(340837),
    L = n(985018),
    k = n(664019);
function y(e) {
    let { title: l, emojiId: n, emojiName: a, icon: t, completed: i, Icon: c, onClick: m, ...x } = e,
        h = "channel" === x.variant ? x.channelId : null,
        j = "static" === x.variant ? x.subtitle : x.channelName,
        A = null != h ? b.Ay.getNewMemberActionIconURL({ channelId: h, icon: t }) : null;
    return (0, s.jsxs)(d.Z, {
        className: r()(k.XI, { [k.xU]: null != m }),
        onClick: m,
        children: [
            null != A
                ? (0, s.jsx)("img", { src: A, className: k.Kk, width: 32, height: 32, alt: "", "aria-hidden": !0 })
                : (0, s.jsx)(G.A, {
                      emojiId: n,
                      emojiName: a,
                      size: G.g.LARGE,
                      defaultComponent: (0, s.jsx)("div", {
                          className: k.uM,
                          children: (0, s.jsx)(c, { className: k.p, color: "currentColor" }),
                      }),
                  }),
            (0, s.jsxs)("div", {
                className: k.$I,
                children: [
                    (0, s.jsx)(u.E, { variant: "text-md/semibold", color: "text-strong", children: l }),
                    null != j ? (0, s.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: j }) : null,
                ],
            }),
            i
                ? (0, s.jsx)(o.y, { size: "md", color: "currentColor", secondaryColor: "#fff", className: k.Yb })
                : (0, s.jsx)(I.A, { className: k.t3, width: 24, height: 24 }),
        ],
    });
}
function R(e) {
    let { action: l, completed: n } = e,
        { channelId: t, title: r, emoji: i, icon: d } = l,
        { id: u, name: o } = i ?? {},
        x = (0, c.bG)([g.A], () => g.A.getChannel(t)),
        h = (0, j.Ay)(x, !0),
        N = (0, c.bG)([f.A], () => f.A.can(M.xBc.VIEW_CHANNEL, x)),
        v = a.useMemo(() => {
            if (null != x) return () => (0, p.qo)(x.guild_id, x.id);
        }, [x]);
    if (null == x || !N) return null;
    let I = (0, A.gU)(x) ?? m.N;
    return (0, s.jsx)(y, {
        variant: "channel",
        channelId: t,
        title: r,
        channelName: h,
        emojiId: u,
        emojiName: o,
        icon: d,
        completed: n,
        Icon: I,
        onClick: v,
    });
}
function U(e) {
    let { guildId: l } = e,
        n = (0, c.bG)([C.h], () => C.h.getNewMemberActions(l), [l]),
        t = (0, c.bG)([E.A], () => E.A.getCompletedActions(l)),
        o = (0, c.bG)([N.Ay], () => N.Ay.getSelfMember(l)),
        m = (0, c.bG)([v.A], () => v.A.getGuild(l));
    a.useEffect(() => {
        null == t && o?.flags != null && (0, i.Lt)(o.flags ?? 0, _.D.STARTED_HOME_ACTIONS) && (0, p.aW)(l);
    }, [t, l, o?.flags]);
    let j = a.useCallback(() => {
        null != m && null != m.rulesChannelId && (0, p.qo)(m.id, m.rulesChannelId);
    }, [m]);
    return null == o || null == n || 0 === n.length
        ? null
        : (0, s.jsxs)("div", {
              className: k.kL,
              children: [
                  (0, s.jsx)(x.D, {
                      variant: "heading-lg/bold",
                      color: "text-strong",
                      children: L.intl.string(L.t.LhlgY9),
                  }),
                  n.map((e) =>
                      (0, s.jsx)(R, { action: e, completed: t?.[e.channelId] === !0, guildId: l }, e.channelId),
                  ),
                  m?.rulesChannelId != null &&
                      (0, s.jsxs)(d.Z, {
                          className: r()(k.XI, k.xU),
                          onClick: j,
                          children: [
                              (0, s.jsx)("div", {
                                  className: k.KK,
                                  children: (0, s.jsx)(h.B, { size: "xs", color: "currentColor", className: k.ZO }),
                              }),
                              (0, s.jsx)("div", {
                                  className: k.$I,
                                  children: (0, s.jsx)(u.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: L.intl.string(L.t["K/i3iQ"]),
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
