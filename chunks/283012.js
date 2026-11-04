n(938796);
var s = n(477900),
    a = n(582128),
    t = n(503698),
    i = n.n(t),
    r = n(665260),
    c = n(855986),
    d = n(993077),
    o = n(834730),
    u = n(628284),
    m = n(939249);
if (221552 == n.j) var h = n(276293);
if (221552 == n.j) var x = n(534514);
if (221552 == n.j) var g = n(622629);
var j = n(47167),
    A = n(713654),
    b = n(734057),
    N = n(696451),
    f = n(71393),
    v = n(576705),
    I = n(44234),
    C = n(486020),
    p = n(225142),
    E = n(701785),
    y = n(65995),
    G = n(111487),
    M = n(652215),
    L = n(340837),
    _ = n(792996),
    k = n(374636);
function U(e) {
    let { title: l, emojiId: n, emojiName: a, icon: t, completed: r, Icon: c, onClick: h, ...x } = e,
        g = "channel" === x.variant ? x.channelId : null,
        j = "static" === x.variant ? x.subtitle : x.channelName,
        A = null != g ? C.Ay.getNewMemberActionIconURL({ channelId: g, icon: t }) : null,
        b = (0, s.jsxs)(d.Z, {
            className: i()(k.XI, { [k.xU]: null != h }),
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
                        (0, s.jsx)(o.E, { variant: "body-md/semibold", color: "text-strong", children: l }),
                        null != j
                            ? (0, s.jsx)(o.E, { variant: "body-xs/normal", color: "text-muted", children: j })
                            : null,
                    ],
                }),
                r
                    ? (0, s.jsx)(u.y, { size: "md", color: "currentColor", secondaryColor: "#fff", className: k.Yb })
                    : (0, s.jsx)(I.A, { className: k.t3, width: 24, height: 24 }),
            ],
        });
    return null != h
        ? (0, s.jsx)(m.D, {
              onClick: h,
              "aria-label": _.intl.formatToPlainString(_.t.FXFkPg, {
                  title: null != j ? `${l}, ${j}` : l,
                  status: r ? _.intl.string(_.t.g62IJl) : _.intl.string(_.t.DaELnU),
              }),
              children: b,
          })
        : b;
}
function R(e) {
    let { action: l, completed: n } = e,
        { channelId: t, title: i, emoji: r, icon: d } = l,
        { id: o, name: u } = r ?? {},
        m = (0, c.bG)([b.A], () => b.A.getChannel(t)),
        x = (0, j.Ay)(m, !0),
        g = (0, c.bG)([v.A], () => v.A.can(M.xBc.VIEW_CHANNEL, m)),
        N = a.useMemo(() => {
            if (null != m) return () => (0, p.qo)(m.guild_id, m.id);
        }, [m]);
    if (null == m || !g) return null;
    let f = (0, A.gU)(m) ?? h.N;
    return (0, s.jsx)(U, {
        variant: "channel",
        channelId: t,
        title: i,
        channelName: x,
        emojiId: o,
        emojiName: u,
        icon: d,
        completed: n,
        Icon: f,
        onClick: N,
    });
}
n.d(
    l,
    {},
    {
        A: function (e) {
            let { guildId: l } = e,
                n = (0, c.bG)([E.h], () => E.h.getNewMemberActions(l), [l]),
                t = (0, c.bG)([y.A], () => y.A.getCompletedActions(l)),
                u = (0, c.bG)([N.Ay], () => N.Ay.getSelfMember(l)),
                h = (0, c.bG)([f.A], () => f.A.getGuild(l));
            a.useEffect(() => {
                null == t && u?.flags != null && (0, r.Lt)(u.flags ?? 0, L.D.STARTED_HOME_ACTIONS) && (0, p.aW)(l);
            }, [t, l, u?.flags]);
            let j = a.useCallback(() => {
                null != h && null != h.rulesChannelId && (0, p.qo)(h.id, h.rulesChannelId);
            }, [h]);
            return null == u || null == n || 0 === n.length
                ? null
                : (0, s.jsxs)("div", {
                      className: k.kL,
                      children: [
                          (0, s.jsx)(x.D, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              children: _.intl.string(_.t.LhlgY9),
                          }),
                          n.map((e) =>
                              (0, s.jsx)(R, { action: e, completed: t?.[e.channelId] === !0, guildId: l }, e.channelId),
                          ),
                          h?.rulesChannelId != null &&
                              (0, s.jsx)(m.D, {
                                  onClick: j,
                                  "aria-label": _.intl.string(_.t["K/i3iQ"]),
                                  children: (0, s.jsxs)(d.Z, {
                                      className: i()(k.XI, k.xU),
                                      children: [
                                          (0, s.jsx)("div", {
                                              className: k.KK,
                                              children: (0, s.jsx)(g.B, {
                                                  size: "xs",
                                                  color: "currentColor",
                                                  className: k.ZO,
                                              }),
                                          }),
                                          (0, s.jsx)("div", {
                                              className: k.$I,
                                              children: (0, s.jsx)(o.E, {
                                                  variant: "body-md/semibold",
                                                  color: "text-strong",
                                                  children: _.intl.string(_.t["K/i3iQ"]),
                                              }),
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  });
        },
        v: U,
    },
);
