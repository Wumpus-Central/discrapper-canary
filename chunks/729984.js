"use strict";
n.d(t, { A: () => D, G: () => M });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(36525),
    a = n(3026),
    o = n(397927),
    d = n(47167),
    c = n(112389),
    u = n(591552),
    m = n(166444),
    g = n(46054),
    x = n(12773),
    h = n(777705),
    _ = n(769765),
    A = n(808728),
    p = n(147925),
    f = n(555337),
    j = n(418448),
    N = n(863694),
    E = n(107795),
    C = n(655943),
    T = n(82566),
    I = n(259866),
    b = n(950358),
    v = n(561108),
    S = n(191117),
    y = n(985018),
    R = n(7716),
    O = n(830684);
function G(e) {
    let { channel: t, guild: n, isLast: s, onClickLockedChannel: l } = e,
        r = (0, d.Ay)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)("div", {
                className: R.WG,
                children: [
                    (0, i.jsxs)("div", {
                        className: R.yW,
                        children: [
                            (0, i.jsxs)("div", {
                                className: R.HA,
                                children: [
                                    (0, i.jsx)(m.gm, { channel: t, guild: n }),
                                    (0, i.jsx)(a.A, {
                                        className: R.__invalid_name,
                                        children: (0, i.jsx)(o.Text, {
                                            className: R.__invalid_channelText,
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
                                          className: O.PT,
                                          children: (0, i.jsx)(o.Text, {
                                              className: R.At,
                                              variant: "text-xs/normal",
                                              children: g.A.parseTopic(t.topic, !0, { channelId: t.id }),
                                          }),
                                      },
                                      "topic",
                                  )
                                : null,
                        ],
                    }),
                    (0, c.S)(n.id, t.id)
                        ? (0, i.jsx)(o.Button, {
                              size: "sm",
                              variant: "primary",
                              text: y.intl.string(y.t.OYkgVk),
                              onClick: () => (0, j.bN)(t.id),
                          })
                        : (0, i.jsx)(o.Button, {
                              size: "sm",
                              variant: "secondary",
                              text: y.intl.string(y.t.zA9d1J),
                              icon: o.XAi,
                              iconPosition: "start",
                              onClick: () => l(t.id),
                          }),
                ],
            }),
            s ? null : (0, i.jsx)("div", { className: R.me }),
        ],
    });
}
function L(e) {
    let { guild: t } = e,
        r = (0, l.bG)([u.A], () => u.A.getEnabled(t.id)),
        a = (0, l.bG)([h.A], () => h.A.hasFetched(t.id)),
        d = (0, T.A)(t),
        c = (0, l.bG)([N.A], () => N.A.editedDefaultChannelIds),
        m = d.filter((e) => !c.has(e.id)),
        [g, _] = s.useState(!1);
    s.useEffect(() => {
        a || r || (0, x.A)(t.id);
    }, [t.id, a, r]);
    let A = (e) => {
        (0, o.mMO)(async () => {
            let { default: s } = await n.e("54857").then(n.bind(n, 147696));
            return (n) => (0, i.jsx)(s, { ...n, guildId: t.id, startingChannelId: e });
        });
    };
    return g || 0 === m.length
        ? null
        : (0, i.jsxs)("div", {
              className: R.Jl,
              children: [
                  (0, i.jsx)(o.Text, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      children: y.intl.string(y.t.NN7rD3),
                  }),
                  (0, i.jsxs)("div", {
                      className: R.j7,
                      children: [
                          (0, i.jsx)(o.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: y.intl.string(y.t["3Uuql+"]),
                          }),
                          (0, i.jsxs)(o.DUT, {
                              className: R.AC,
                              onClick: () => _(!0),
                              children: [
                                  (0, i.jsx)(o.A9s, { size: "xxs", color: "currentColor", className: R.AI }),
                                  (0, i.jsx)(o.Text, {
                                      className: R.fx,
                                      variant: "text-xs/medium",
                                      color: "text-brand",
                                      children: y.intl.string(y.t.ZC3PJ2),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, i.jsx)("div", {
                      className: R.IF,
                      children: m.map((e, n) =>
                          (0, i.jsx)(
                              G,
                              { channel: e, guild: t, isLast: n === m.length - 1, onClickLockedChannel: A },
                              e.id,
                          ),
                      ),
                  }),
                  (0, i.jsx)("div", { className: R.FZ }),
              ],
          });
}
function D(e) {
    let { saveOnClose: t = !1 } = e,
        n = (0, l.bG)([f.A], () => f.A.getGuild()),
        r = (0, l.bG)([u.A], () => u.A.isLoading()),
        a = (0, l.bG)([A.Ay], () => A.Ay.getChannels(n?.id)),
        d = (0, l.bG)([_.A], () => _.A.getCategories(n?.id)),
        c = (0, l.bG)([C.A], () => C.A.advancedMode),
        m = s.useRef(null),
        [g, x] = s.useState(!1),
        h = s.useRef(n);
    return (s.useEffect(() => {
        h.current = n;
    }),
    s.useEffect(() => {
        if (t) {
            let { current: e } = h;
            return () => {
                null != e &&
                    (0, j.jr)(e)
                        .then(() => {
                            c && (0, E.dm)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                        })
                        .catch(() => {});
            };
        }
    }, [t, c]),
    null == n)
        ? null
        : r
          ? (0, i.jsx)(o.y$y, {})
          : (0, i.jsxs)("div", {
                className: R.YB,
                children: [
                    (0, i.jsxs)("div", {
                        className: R.U5,
                        children: [
                            (0, i.jsx)(o.DUT, {
                                className: R.cS,
                                onClick: () => x((e) => !e),
                                children: (0, i.jsx)(p.A, {
                                    direction: g ? p.A.Directions.DOWN : p.A.Directions.UP,
                                    height: 16,
                                    width: 16,
                                }),
                            }),
                            (0, i.jsx)(o.Heading, {
                                className: R.wx,
                                variant: "heading-lg/extrabold",
                                children: y.intl.string(y.t["4GSygh"]),
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: y.intl.string(y.t.Kq7FAS),
                            }),
                            (0, i.jsx)(I.mU, { className: R.kr, guildId: n.id }),
                            g
                                ? null
                                : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(L, { guild: n }),
                                          (0, i.jsx)(b.A, {
                                              className: R.bE,
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
                                        (0, i.jsx)("div", { className: R.FZ }),
                                        (0, i.jsx)(o.Heading, {
                                            className: R.RH,
                                            variant: "heading-lg/extrabold",
                                            children: y.intl.string(y.t.g2RnpV),
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            className: R.nd,
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: y.intl.string(y.t.bLDQ1Q),
                                        }),
                                        (0, i.jsx)("div", {
                                            ref: m,
                                            className: R.di,
                                            children: (0, i.jsx)(S.A, {
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
                    (0, i.jsx)(v.A, {
                        guild: n,
                        scrollToQuestions: () => {
                            null != m.current && m.current.scrollIntoView({ behavior: "smooth" });
                        },
                    }),
                ],
            });
}
function M() {
    let e = (0, l.bG)([f.A], () => f.A.getProps().guild),
        t = (0, l.bG)([N.A], () => N.A.submitting),
        n = (0, l.bG)([C.A], () => C.A.advancedMode);
    return null == e
        ? null
        : (0, i.jsx)(r.A, {
              onSave: () => {
                  (0, j.jr)(e)
                      .then(() => {
                          n && (0, E.dm)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                      })
                      .catch(() => {});
              },
              onReset: j.nx,
              submitting: t,
              onSaveText: y.intl.string(y.t["R3BPH+"]),
          });
}
