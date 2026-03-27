"use strict";
n.d(t, { A: () => L, G: () => G });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(36525),
    a = n(3026),
    o = n(397927),
    d = n(112389),
    c = n(591552),
    u = n(166444),
    m = n(46054),
    g = n(12773),
    x = n(777705),
    h = n(769765),
    _ = n(808728),
    p = n(147925),
    A = n(555337),
    f = n(418448),
    j = n(863694),
    N = n(107795),
    E = n(655943),
    b = n(82566),
    C = n(259866),
    T = n(950358),
    I = n(561108),
    v = n(191117),
    S = n(985018),
    y = n(7716),
    R = n(830684);
function O(e) {
    let { guild: t } = e,
        r = (0, l.bG)([c.A], () => c.A.getEnabled(t.id)),
        h = (0, l.bG)([x.A], () => x.A.hasFetched(t.id)),
        _ = (0, b.A)(t),
        p = (0, l.bG)([j.A], () => j.A.editedDefaultChannelIds),
        A = _.filter((e) => !p.has(e.id)),
        [N, E] = s.useState(!1);
    return (s.useEffect(() => {
        h || r || (0, g.A)(t.id);
    }, [t.id, h, r]),
    N || 0 === A.length)
        ? null
        : (0, i.jsxs)("div", {
              className: y.Jl,
              children: [
                  (0, i.jsx)(o.Text, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      children: S.intl.string(S.t.NN7rD3),
                  }),
                  (0, i.jsxs)("div", {
                      className: y.j7,
                      children: [
                          (0, i.jsx)(o.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: S.intl.string(S.t["3Uuql+"]),
                          }),
                          (0, i.jsxs)(o.DUT, {
                              className: y.AC,
                              onClick: () => E(!0),
                              children: [
                                  (0, i.jsx)(o.A9s, { size: "xxs", color: "currentColor", className: y.AI }),
                                  (0, i.jsx)(o.Text, {
                                      className: y.fx,
                                      variant: "text-xs/medium",
                                      color: "text-brand",
                                      children: S.intl.string(S.t.ZC3PJ2),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, i.jsx)("div", {
                      className: y.IF,
                      children: A.map((e, s) =>
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: y.WG,
                                      children: [
                                          (0, i.jsxs)("div", {
                                              className: y.yW,
                                              children: [
                                                  (0, i.jsxs)("div", {
                                                      className: y.HA,
                                                      children: [
                                                          (0, i.jsx)(u.gm, { channel: e, guild: t }),
                                                          (0, i.jsx)(a.A, {
                                                              className: y.__invalid_name,
                                                              children: (0, i.jsx)(o.Text, {
                                                                  className: y.__invalid_channelText,
                                                                  variant: "text-md/medium",
                                                                  lineClamp: 1,
                                                                  color: "text-default",
                                                                  children: e.name,
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                                  null != e.topic && e.topic.length > 0
                                                      ? (0, i.jsx)(
                                                            a.A,
                                                            {
                                                                className: R.PT,
                                                                children: (0, i.jsx)(o.Text, {
                                                                    className: y.At,
                                                                    variant: "text-xs/normal",
                                                                    children: m.A.parseTopic(e.topic, !0, {
                                                                        channelId: e.id,
                                                                    }),
                                                                }),
                                                            },
                                                            "topic",
                                                        )
                                                      : null,
                                              ],
                                          }),
                                          (0, d.S)(t.id, e.id)
                                              ? (0, i.jsx)(o.Button, {
                                                    size: "sm",
                                                    variant: "primary",
                                                    text: S.intl.string(S.t.OYkgVk),
                                                    onClick: () => (0, f.bN)(e.id),
                                                })
                                              : (0, i.jsx)(o.Button, {
                                                    size: "sm",
                                                    variant: "secondary",
                                                    text: S.intl.string(S.t.zA9d1J),
                                                    icon: o.XAi,
                                                    iconPosition: "start",
                                                    onClick: () => {
                                                        var s;
                                                        return (
                                                            (s = e.id),
                                                            void (0, o.mMO)(async () => {
                                                                let { default: e } = await n
                                                                    .e("54857")
                                                                    .then(n.bind(n, 147696));
                                                                return (n) =>
                                                                    (0, i.jsx)(e, {
                                                                        ...n,
                                                                        guildId: t.id,
                                                                        startingChannelId: s,
                                                                    });
                                                            })
                                                        );
                                                    },
                                                }),
                                      ],
                                  }),
                                  s < A.length - 1 ? (0, i.jsx)("div", { className: y.me }) : null,
                              ],
                          }),
                      ),
                  }),
                  (0, i.jsx)("div", { className: y.FZ }),
              ],
          });
}
function L(e) {
    let { saveOnClose: t = !1 } = e,
        n = (0, l.bG)([A.A], () => A.A.getGuild()),
        r = (0, l.bG)([c.A], () => c.A.isLoading()),
        a = (0, l.bG)([_.Ay], () => _.Ay.getChannels(n?.id)),
        d = (0, l.bG)([h.A], () => h.A.getCategories(n?.id)),
        u = (0, l.bG)([E.A], () => E.A.advancedMode),
        m = s.useRef(null),
        [g, x] = s.useState(!1),
        j = s.useRef(n);
    return (s.useEffect(() => {
        j.current = n;
    }),
    s.useEffect(() => {
        if (t) {
            let { current: e } = j;
            return () => {
                null != e &&
                    (0, f.jr)(e)
                        .then(() => {
                            u && (0, N.dm)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                        })
                        .catch(() => {});
            };
        }
    }, [t, u]),
    null == n)
        ? null
        : r
          ? (0, i.jsx)(o.y$y, {})
          : (0, i.jsxs)("div", {
                className: y.YB,
                children: [
                    (0, i.jsxs)("div", {
                        className: y.U5,
                        children: [
                            (0, i.jsx)(o.DUT, {
                                className: y.cS,
                                onClick: () => x((e) => !e),
                                children: (0, i.jsx)(p.A, {
                                    direction: g ? p.A.Directions.DOWN : p.A.Directions.UP,
                                    height: 16,
                                    width: 16,
                                }),
                            }),
                            (0, i.jsx)(o.Heading, {
                                className: y.wx,
                                variant: "heading-lg/extrabold",
                                children: S.intl.string(S.t["4GSygh"]),
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: S.intl.string(S.t.Kq7FAS),
                            }),
                            (0, i.jsx)(C.mU, { className: y.kr, guildId: n.id }),
                            g
                                ? null
                                : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(O, { guild: n }),
                                          (0, i.jsx)(T.A, {
                                              className: y.bE,
                                              guild: n,
                                              categories: d,
                                              channels: a,
                                              hasSidebar: !1,
                                          }),
                                      ],
                                  }),
                            u &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)("div", { className: y.FZ }),
                                        (0, i.jsx)(o.Heading, {
                                            className: y.RH,
                                            variant: "heading-lg/extrabold",
                                            children: S.intl.string(S.t.g2RnpV),
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            className: y.nd,
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: S.intl.string(S.t.bLDQ1Q),
                                        }),
                                        (0, i.jsx)("div", {
                                            ref: m,
                                            className: y.di,
                                            children: (0, i.jsx)(v.A, {
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
                    (0, i.jsx)(I.A, {
                        guild: n,
                        scrollToQuestions: () => {
                            null != m.current && m.current.scrollIntoView({ behavior: "smooth" });
                        },
                    }),
                ],
            });
}
function G() {
    let e = (0, l.bG)([A.A], () => A.A.getProps().guild),
        t = (0, l.bG)([j.A], () => j.A.submitting),
        n = (0, l.bG)([E.A], () => E.A.advancedMode);
    return null == e
        ? null
        : (0, i.jsx)(r.A, {
              onSave: () => {
                  (0, f.jr)(e)
                      .then(() => {
                          n && (0, N.dm)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                      })
                      .catch(() => {});
              },
              onReset: f.nx,
              submitting: t,
              onSaveText: S.intl.string(S.t["R3BPH+"]),
          });
}
