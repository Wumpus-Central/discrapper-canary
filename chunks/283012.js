n(938796);
var s = n(477900),
    a = n(582128),
    t = n(503698),
    i = n.n(t),
    r = n(665260),
    c = n(855986),
    o = n(993077),
    d = n(834730),
    u = n(628284),
    m = n(939249);
if (221552 == n.j) var h = n(276293);
if (221552 == n.j) var x = n(534514);
if (221552 == n.j) var g = n(622629);
var j = n(47167),
    A = n(713654),
    b = n(734057),
    I = n(696451),
    N = n(71393),
    f = n(576705),
    v = n(44234),
    C = n(486020),
    p = n(225142),
    E = n(701785),
    y = n(65995),
    G = n(111487),
    k = n(652215),
    M = n(340837),
    L = n(792996),
    _ = n(374636);
function U(e) {
    let { title: l, emojiId: n, emojiName: a, icon: t, completed: r, Icon: c, onClick: h, ...x } = e,
        g = "channel" === x.variant ? x.channelId : null,
        j = "static" === x.variant ? x.subtitle : x.channelName,
        A = null != g ? C.Ay.getNewMemberActionIconURL({ channelId: g, icon: t }) : null,
        b = (0, s.jsxs)(o.Z, {
            className: i()(_.XI, { [_.xU]: null != h }),
            children: [
                null != A
                    ? (0, s.jsx)("img", { src: A, className: _.Kk, width: 32, height: 32, alt: "", "aria-hidden": !0 })
                    : (0, s.jsx)(G.A, {
                          emojiId: n,
                          emojiName: a,
                          size: G.g.LARGE,
                          defaultComponent: (0, s.jsx)("div", {
                              className: _.uM,
                              children: (0, s.jsx)(c, { className: _.p, color: "currentColor" }),
                          }),
                      }),
                (0, s.jsxs)("div", {
                    className: _.$I,
                    children: [
                        (0, s.jsx)(d.E, { variant: "body-md/semibold", color: "text-strong", children: l }),
                        null != j
                            ? (0, s.jsx)(d.E, { variant: "body-xs/normal", color: "text-muted", children: j })
                            : null,
                    ],
                }),
                r
                    ? (0, s.jsx)(u.CircleCheckIcon, {
                          size: "md",
                          color: "currentColor",
                          secondaryColor: "#fff",
                          className: _.Yb,
                      })
                    : (0, s.jsx)(v.A, { className: _.t3, width: 24, height: 24 }),
            ],
        });
    return null != h
        ? (0, s.jsx)(m.D, {
              onClick: h,
              "aria-label": L.intl.formatToPlainString(L.t.FXFkPg, {
                  title: null != j ? `${l}, ${j}` : l,
                  status: r ? L.intl.string(L.t.g62IJl) : L.intl.string(L.t.DaELnU),
              }),
              children: b,
          })
        : b;
}
function R(e) {
    let { action: l, completed: n } = e,
        { channelId: t, title: i, emoji: r, icon: o } = l,
        { id: d, name: u } = r ?? {},
        m = (0, c.bG)([b.A], () => b.A.getChannel(t)),
        x = (0, j.Ay)(m, !0),
        g = (0, c.bG)([f.A], () => f.A.can(k.xBc.VIEW_CHANNEL, m)),
        I = a.useMemo(() => {
            if (null != m) return () => (0, p.qo)(m.guild_id, m.id);
        }, [m]);
    if (null == m || !g) return null;
    let N = (0, A.gU)(m) ?? h.TextIcon;
    return (0, s.jsx)(U, {
        variant: "channel",
        channelId: t,
        title: i,
        channelName: x,
        emojiId: d,
        emojiName: u,
        icon: o,
        completed: n,
        Icon: N,
        onClick: I,
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
                u = (0, c.bG)([I.Ay], () => I.Ay.getSelfMember(l)),
                h = (0, c.bG)([N.A], () => N.A.getGuild(l));
            a.useEffect(() => {
                null == t && u?.flags != null && (0, r.Lt)(u.flags ?? 0, M.D.STARTED_HOME_ACTIONS) && (0, p.aW)(l);
            }, [t, l, u?.flags]);
            let j = a.useCallback(() => {
                null != h && null != h.rulesChannelId && (0, p.qo)(h.id, h.rulesChannelId);
            }, [h]);
            return null == u || null == n || 0 === n.length
                ? null
                : (0, s.jsxs)("div", {
                      className: _.kL,
                      children: [
                          (0, s.jsx)(x.D, {
                              variant: "heading-lg/semibold",
                              color: "text-strong",
                              children: L.intl.string(L.t.LhlgY9),
                          }),
                          n.map((e) =>
                              (0, s.jsx)(R, { action: e, completed: t?.[e.channelId] === !0, guildId: l }, e.channelId),
                          ),
                          h?.rulesChannelId != null &&
                              (0, s.jsx)(m.D, {
                                  onClick: j,
                                  "aria-label": L.intl.string(L.t["K/i3iQ"]),
                                  children: (0, s.jsxs)(o.Z, {
                                      className: i()(_.XI, _.xU),
                                      children: [
                                          (0, s.jsx)("div", {
                                              className: _.KK,
                                              children: (0, s.jsx)(g.BookCheckIcon, {
                                                  size: "xs",
                                                  color: "currentColor",
                                                  className: _.ZO,
                                              }),
                                          }),
                                          (0, s.jsx)("div", {
                                              className: _.$I,
                                              children: (0, s.jsx)(d.E, {
                                                  variant: "body-md/semibold",
                                                  color: "text-strong",
                                                  children: L.intl.string(L.t["K/i3iQ"]),
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
