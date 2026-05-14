n.d(l, { A: () => R, v: () => U }), n(938796);
var s = n(627968),
    t = n(64700),
    a = n(503698),
    r = n.n(a),
    i = n(665260),
    c = n(17928),
    d = n(359778),
    u = n(834730),
    o = n(628284);
if (21552 == n.j) var m = n(276293);
if (21552 == n.j) var x = n(534514);
if (21552 == n.j) var h = n(622629);
var g = n(47167),
    j = n(713654),
    A = n(734057),
    N = n(696451),
    f = n(71393),
    v = n(576705),
    I = n(44234),
    b = n(486020),
    p = n(225142),
    C = n(701785),
    E = n(65995),
    G = n(111487),
    M = n(652215),
    L = n(340837),
    _ = n(375708),
    k = n(664019);
function U(e) {
    let { title: l, emojiId: n, emojiName: t, icon: a, completed: i, Icon: c, onClick: m, ...x } = e,
        h = "channel" === x.variant ? x.channelId : null,
        g = "static" === x.variant ? x.subtitle : x.channelName,
        j = null != h ? b.Ay.getNewMemberActionIconURL({ channelId: h, icon: a }) : null;
    return (0, s.jsxs)(d.Z, {
        className: r()(k.XI, { [k.xU]: null != m }),
        onClick: m,
        "aria-label": _.intl.formatToPlainString(_.t.FXFkPg, {
            title: l,
            status: i ? _.intl.string(_.t.g62IJl) : _.intl.string(_.t.DaELnU),
        }),
        children: [
            null != j
                ? (0, s.jsx)("img", { src: j, className: k.Kk, width: 32, height: 32, alt: "", "aria-hidden": !0 })
                : (0, s.jsx)(G.A, {
                      emojiId: n,
                      emojiName: t,
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
                    null != g ? (0, s.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: g }) : null,
                ],
            }),
            i
                ? (0, s.jsx)(o.y, { size: "md", color: "currentColor", secondaryColor: "#fff", className: k.Yb })
                : (0, s.jsx)(I.A, { className: k.t3, width: 24, height: 24 }),
        ],
    });
}
function y(e) {
    let { action: l, completed: n } = e,
        { channelId: a, title: r, emoji: i, icon: d } = l,
        { id: u, name: o } = i ?? {},
        x = (0, c.bG)([A.A], () => A.A.getChannel(a)),
        h = (0, g.Ay)(x, !0),
        N = (0, c.bG)([v.A], () => v.A.can(M.xBc.VIEW_CHANNEL, x)),
        f = t.useMemo(() => {
            if (null != x) return () => (0, p.qo)(x.guild_id, x.id);
        }, [x]);
    if (null == x || !N) return null;
    let I = (0, j.gU)(x) ?? m.N;
    return (0, s.jsx)(U, {
        variant: "channel",
        channelId: a,
        title: r,
        channelName: h,
        emojiId: u,
        emojiName: o,
        icon: d,
        completed: n,
        Icon: I,
        onClick: f,
    });
}
function R(e) {
    let { guildId: l } = e,
        n = (0, c.bG)([C.h], () => C.h.getNewMemberActions(l), [l]),
        a = (0, c.bG)([E.A], () => E.A.getCompletedActions(l)),
        o = (0, c.bG)([N.Ay], () => N.Ay.getSelfMember(l)),
        m = (0, c.bG)([f.A], () => f.A.getGuild(l));
    t.useEffect(() => {
        null == a && o?.flags != null && (0, i.Lt)(o.flags ?? 0, L.D.STARTED_HOME_ACTIONS) && (0, p.aW)(l);
    }, [a, l, o?.flags]);
    let g = t.useCallback(() => {
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
                      children: _.intl.string(_.t.LhlgY9),
                  }),
                  n.map((e) =>
                      (0, s.jsx)(y, { action: e, completed: a?.[e.channelId] === !0, guildId: l }, e.channelId),
                  ),
                  m?.rulesChannelId != null &&
                      (0, s.jsxs)(d.Z, {
                          className: r()(k.XI, k.xU),
                          onClick: g,
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
                                      children: _.intl.string(_.t["K/i3iQ"]),
                                  }),
                              }),
                          ],
                      }),
              ],
          });
}
