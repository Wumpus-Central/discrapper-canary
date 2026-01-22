n.d(t, {
    A: () => v,
    v: () => T,
}),
    n(938796);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(665260),
    o = n(311907),
    c = n(397927),
    d = n(47167),
    u = n(713654),
    m = n(734057),
    g = n(696451),
    f = n(71393),
    h = n(576705),
    N = n(44234),
    I = n(486020),
    p = n(225142),
    O = n(701785),
    S = n(65995),
    E = n(111487),
    A = n(652215),
    x = n(340837),
    _ = n(985018),
    j = n(658938);

function T(e) {
    let { title: t, emojiId: n, emojiName: r, icon: i, completed: a, Icon: o, onClick: d } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++)
                    (l = n[r]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        i = Object.getOwnPropertyNames(e);
                    for (l = 0; l < i.length; l++)
                        (n = i[l]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    return r;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                    (l = n[r]),
                        !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
            return i;
        })(e, ["title", "emojiId", "emojiName", "icon", "completed", "Icon", "onClick"]),
        m = "channel" === u.variant ? u.channelId : null,
        g = "static" === u.variant ? u.subtitle : u.channelName,
        f =
            null != m
                ? I.Ay.getNewMemberActionIconURL({
                      channelId: m,
                      icon: i,
                  })
                : null;
    return (0, l.jsxs)(c.ZpM, {
        className: s()(j.XI, {
            [j.xU]: null != d,
        }),
        onClick: d,
        children: [
            null != f
                ? (0, l.jsx)("img", {
                      src: f,
                      className: j.Kk,
                      width: 32,
                      height: 32,
                      alt: "",
                      "aria-hidden": !0,
                  })
                : (0, l.jsx)(E.A, {
                      emojiId: n,
                      emojiName: r,
                      size: E.g.LARGE,
                      defaultComponent: (0, l.jsx)("div", {
                          className: j.uM,
                          children: (0, l.jsx)(o, {
                              className: j.p,
                              color: "currentColor",
                          }),
                      }),
                  }),
            (0, l.jsxs)("div", {
                className: j.$I,
                children: [
                    (0, l.jsx)(c.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: t,
                    }),
                    null != g
                        ? (0, l.jsx)(c.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: g,
                          })
                        : null,
                ],
            }),
            a
                ? (0, l.jsx)(c.yr3, {
                      size: "md",
                      color: "currentColor",
                      secondaryColor: "#fff",
                      className: j.Yb,
                  })
                : (0, l.jsx)(N.A, {
                      className: j.t3,
                      width: 24,
                      height: 24,
                  }),
        ],
    });
}

function b(e) {
    var t;
    let { action: n, completed: i } = e,
        { channelId: s, title: a, emoji: g, icon: f } = n,
        { id: N, name: I } = null != g ? g : {},
        O = (0, o.bG)([m.A], () => m.A.getChannel(s)),
        S = (0, d.Ay)(O, !0),
        E = (0, o.bG)([h.A], () => h.A.can(A.xBc.VIEW_CHANNEL, O)),
        x = r.useMemo(() => {
            if (null != O) return () => (0, p.qo)(O.guild_id, O.id);
        }, [O]);
    if (null == O || !E) return null;
    let _ = null != (t = (0, u.gU)(O)) ? t : c.N$i;
    return (0, l.jsx)(T, {
        variant: "channel",
        channelId: s,
        title: a,
        channelName: S,
        emojiId: N,
        emojiName: I,
        icon: f,
        completed: i,
        Icon: _,
        onClick: x,
    });
}

function v(e) {
    let { guildId: t } = e,
        n = (0, o.bG)([O.h], () => O.h.getNewMemberActions(t), [t]),
        i = (0, o.bG)([S.A], () => S.A.getCompletedActions(t)),
        d = (0, o.bG)([g.Ay], () => g.Ay.getSelfMember(t)),
        u = (0, o.bG)([f.A], () => f.A.getGuild(t));
    r.useEffect(() => {
        var e;
        null == i &&
            (null == d ? void 0 : d.flags) != null &&
            (0, a.Lt)(null != (e = d.flags) ? e : 0, x.D.STARTED_HOME_ACTIONS) &&
            (0, p.aW)(t);
    }, [i, t, null == d ? void 0 : d.flags]);
    let m = r.useCallback(() => {
        null != u && null != u.rulesChannelId && (0, p.qo)(u.id, u.rulesChannelId);
    }, [u]);
    return null == d || null == n || 0 === n.length
        ? null
        : (0, l.jsxs)("div", {
              className: j.kL,
              children: [
                  (0, l.jsx)(c.Heading, {
                      variant: "heading-lg/bold",
                      color: "text-strong",
                      children: _.intl.string(_.t.LhlgY9),
                  }),
                  n.map((e) =>
                      (0, l.jsx)(
                          b,
                          {
                              action: e,
                              completed: (null == i ? void 0 : i[e.channelId]) === !0,
                              guildId: t,
                          },
                          e.channelId,
                      ),
                  ),
                  (null == u ? void 0 : u.rulesChannelId) != null &&
                      (0, l.jsxs)(c.ZpM, {
                          className: s()(j.XI, j.xU),
                          onClick: m,
                          children: [
                              (0, l.jsx)("div", {
                                  className: j.KK,
                                  children: (0, l.jsx)(c.B8Q, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: j.ZO,
                                  }),
                              }),
                              (0, l.jsx)("div", {
                                  className: j.$I,
                                  children: (0, l.jsx)(c.Text, {
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
