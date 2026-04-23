n.d(t, { A: () => F, G: () => H });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(36525),
    a = n(3026),
    o = n(834730),
    d = n(821609),
    c = n(194261),
    u = n(192308),
    m = n(939249),
    g = n(933832),
    h = n(289873),
    x = n(534514),
    _ = n(47167),
    p = n(112389),
    A = n(591552),
    E = n(166444),
    f = n(46054),
    j = n(12773),
    N = n(777705),
    I = n(769765),
    C = n(808728),
    b = n(147925),
    v = n(555337),
    S = n(418448),
    T = n(863694),
    y = n(107795),
    R = n(655943),
    L = n(82566),
    D = n(259866),
    O = n(950358),
    G = n(561108),
    M = n(191117),
    k = n(985018),
    U = n(161365),
    w = n(992595);
function P(e) {
    let { channel: t, guild: n, isLast: l, onClickLockedChannel: s } = e,
        r = (0, _.Ay)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: U.WG,
                children: [
                    (0, i.jsxs)("div", {
                        className: U.yW,
                        children: [
                            (0, i.jsxs)("div", {
                                className: U.HA,
                                children: [
                                    (0, i.jsx)(E.gm, { channel: t, guild: n }),
                                    (0, i.jsx)(a.A, {
                                        className: U.__invalid_name,
                                        children: (0, i.jsx)(o.E, {
                                            className: U.__invalid_channelText,
                                            variant: "text-md/medium",
                                            lineClamp: 1,
                                            color: "text-default",
                                            children: r,
                                        }),
                                    }),
                                ],
                            }),
                            null != t.topic && t.topic.length > 0
                                ? (0, i.jsx)(
                                      a.A,
                                      {
                                          className: w.PT,
                                          children: (0, i.jsx)(o.E, {
                                              className: U.At,
                                              variant: "text-xs/normal",
                                              children: f.A.parseTopic(t.topic, !0, { channelId: t.id }),
                                          }),
                                      },
                                      "topic",
                                  )
                                : null,
                        ],
                    }),
                    (0, p.S)(n.id, t.id)
                        ? (0, i.jsx)(d.$, {
                              size: "sm",
                              variant: "primary",
                              text: k.intl.string(k.t.OYkgVk),
                              onClick: () => (0, S.bN)(t.id),
                          })
                        : (0, i.jsx)(d.$, {
                              size: "sm",
                              variant: "secondary",
                              text: k.intl.string(k.t.zA9d1J),
                              icon: c.X,
                              iconPosition: "start",
                              onClick: () => s(t.id),
                          }),
                ],
            }),
            l ? null : (0, i.jsx)("div", { className: U.me }),
        ],
    });
}
function B(e) {
    let { guild: t } = e,
        r = (0, s.bG)([A.A], () => A.A.getEnabled(t.id)),
        a = (0, s.bG)([N.A], () => N.A.hasFetched(t.id)),
        d = (0, L.A)(t),
        c = (0, s.bG)([T.A], () => T.A.editedDefaultChannelIds),
        h = d.filter((e) => !c.has(e.id)),
        [x, _] = l.useState(!1);
    l.useEffect(() => {
        a || r || (0, j.A)(t.id);
    }, [t.id, a, r]);
    let p = (e) => {
        (0, u.openModalLazy)(async () => {
            let { default: l } = await n.e("54857").then(n.bind(n, 147696));
            return (n) => (0, i.jsx)(l, { ...n, guildId: t.id, startingChannelId: e });
        });
    };
    return x || 0 === h.length
        ? null
        : (0, i.jsxs)("div", {
              className: U.Jl,
              children: [
                  (0, i.jsx)(o.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      children: k.intl.string(k.t.NN7rD3),
                  }),
                  (0, i.jsxs)("div", {
                      className: U.j7,
                      children: [
                          (0, i.jsx)(o.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: k.intl.string(k.t["3Uuql+"]),
                          }),
                          (0, i.jsxs)(m.D, {
                              className: U.AC,
                              onClick: () => _(!0),
                              children: [
                                  (0, i.jsx)(g.A, { size: "xxs", color: "currentColor", className: U.AI }),
                                  (0, i.jsx)(o.E, {
                                      className: U.fx,
                                      variant: "text-xs/medium",
                                      color: "text-brand",
                                      children: k.intl.string(k.t.ZC3PJ2),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, i.jsx)("div", {
                      className: U.IF,
                      children: h.map((e, n) =>
                          (0, i.jsx)(
                              P,
                              { channel: e, guild: t, isLast: n === h.length - 1, onClickLockedChannel: p },
                              e.id,
                          ),
                      ),
                  }),
                  (0, i.jsx)("div", { className: U.FZ }),
              ],
          });
}
function F(e) {
    let { saveOnClose: t = !1 } = e,
        n = (0, s.bG)([v.A], () => v.A.getGuild()),
        r = (0, s.bG)([A.A], () => A.A.isLoading()),
        a = (0, s.bG)([C.Ay], () => C.Ay.getChannels(n?.id)),
        d = (0, s.bG)([I.A], () => I.A.getCategories(n?.id)),
        c = (0, s.bG)([R.A], () => R.A.advancedMode),
        u = l.useRef(null),
        [g, _] = l.useState(!1),
        p = l.useRef(n);
    return (l.useEffect(() => {
        p.current = n;
    }),
    l.useEffect(() => {
        if (t) {
            let { current: e } = p;
            return () => {
                null != e &&
                    (0, S.jr)(e)
                        .then(() => {
                            c && (0, y.dm)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                        })
                        .catch(() => {});
            };
        }
    }, [t, c]),
    null == n)
        ? null
        : r
          ? (0, i.jsx)(h.y, {})
          : (0, i.jsxs)("div", {
                className: U.YB,
                children: [
                    (0, i.jsxs)("div", {
                        className: U.U5,
                        children: [
                            (0, i.jsx)(m.D, {
                                className: U.cS,
                                onClick: () => _((e) => !e),
                                children: (0, i.jsx)(b.A, {
                                    direction: g ? b.A.Directions.DOWN : b.A.Directions.UP,
                                    height: 16,
                                    width: 16,
                                }),
                            }),
                            (0, i.jsx)(x.D, {
                                className: U.wx,
                                variant: "heading-lg/extrabold",
                                children: k.intl.string(k.t["4GSygh"]),
                            }),
                            (0, i.jsx)(o.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: k.intl.string(k.t.Kq7FAS),
                            }),
                            (0, i.jsx)(D.mU, { className: U.kr, guildId: n.id }),
                            g
                                ? null
                                : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(B, { guild: n }),
                                          (0, i.jsx)(O.A, {
                                              className: U.bE,
                                              guild: n,
                                              categories: d,
                                              channels: a,
                                              hasSidebar: !1,
                                          }),
                                      ],
                                  }),
                            c &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)("div", { className: U.FZ }),
                                        (0, i.jsx)(x.D, {
                                            className: U.RH,
                                            variant: "heading-lg/extrabold",
                                            children: k.intl.string(k.t.g2RnpV),
                                        }),
                                        (0, i.jsx)(o.E, {
                                            className: U.nd,
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: k.intl.string(k.t.bLDQ1Q),
                                        }),
                                        (0, i.jsx)("div", {
                                            ref: u,
                                            className: U.di,
                                            children: (0, i.jsx)(M.A, {
                                                guildId: n.id,
                                                prejoinOnly: !0,
                                                includeCount: !0,
                                                singleColumn: !0,
                                            }),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, i.jsx)(G.A, {
                        guild: n,
                        scrollToQuestions: () => {
                            null != u.current && u.current.scrollIntoView({ behavior: "smooth" });
                        },
                    }),
                ],
            });
}
function H() {
    let e = (0, s.bG)([v.A], () => v.A.getProps().guild),
        t = (0, s.bG)([T.A], () => T.A.submitting),
        n = (0, s.bG)([R.A], () => R.A.advancedMode);
    return null == e
        ? null
        : (0, i.jsx)(r.A, {
              onSave: () => {
                  (0, S.jr)(e)
                      .then(() => {
                          n && (0, y.dm)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                      })
                      .catch(() => {});
              },
              onReset: S.nx,
              submitting: t,
              onSaveText: k.intl.string(k.t["R3BPH+"]),
          });
}
