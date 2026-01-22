n.d(t, {
    A: () => w,
    G: () => R,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(36525),
    a = n(3026),
    c = n(397927),
    o = n(112389),
    d = n(591552),
    u = n(166444),
    f = n(46054),
    g = n(12773),
    b = n(777705),
    m = n(769765),
    p = n(808728),
    x = n(147925),
    h = n(555337),
    j = n(418448),
    O = n(863694),
    y = n(107795),
    v = n(655943),
    A = n(82566),
    E = n(259866),
    N = n(950358),
    _ = n(561108),
    S = n(191117),
    T = n(985018),
    I = n(894958),
    C = n(206314);
function P(e) {
    let { guild: t } = e,
        s = (0, l.bG)([d.A], () => d.A.getEnabled(t.id)),
        m = (0, l.bG)([b.A], () => b.A.hasFetched(t.id)),
        p = (0, A.A)(t),
        x = (0, l.bG)([O.A], () => O.A.editedDefaultChannelIds),
        h = p.filter((e) => !x.has(e.id)),
        [y, v] = i.useState(!1);
    return (i.useEffect(() => {
        m || s || (0, g.A)(t.id);
    }, [t.id, m, s]),
    y || 0 === h.length)
        ? null
        : (0, r.jsxs)("div", {
              className: I.Jl,
              children: [
                  (0, r.jsx)(c.Text, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      children: T.intl.string(T.t.NN7rD3),
                  }),
                  (0, r.jsxs)("div", {
                      className: I.j7,
                      children: [
                          (0, r.jsx)(c.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: T.intl.string(T.t["3Uuql+"]),
                          }),
                          (0, r.jsxs)(c.DUT, {
                              className: I.AC,
                              onClick: () => v(!0),
                              children: [
                                  (0, r.jsx)(c.A9s, {
                                      size: "xxs",
                                      color: "currentColor",
                                      className: I.AI,
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      className: I.fx,
                                      variant: "text-xs/medium",
                                      color: "text-brand",
                                      children: T.intl.string(T.t.ZC3PJ2),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: I.IF,
                      children: h.map((e, i) =>
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: I.WG,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: I.yW,
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: I.HA,
                                                      children: [
                                                          (0, r.jsx)(u.gm, {
                                                              channel: e,
                                                              guild: t,
                                                          }),
                                                          (0, r.jsx)(a.A, {
                                                              className: I.__invalid_name,
                                                              children: (0, r.jsx)(c.Text, {
                                                                  className: I.__invalid_channelText,
                                                                  variant: "text-md/medium",
                                                                  lineClamp: 1,
                                                                  color: "text-default",
                                                                  children: e.name,
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                                  null != e.topic && e.topic.length > 0
                                                      ? (0, r.jsx)(
                                                            a.A,
                                                            {
                                                                className: C.PT,
                                                                children: (0, r.jsx)(c.Text, {
                                                                    className: I.At,
                                                                    variant: "text-xs/normal",
                                                                    children: f.A.parseTopic(e.topic, !0, {
                                                                        channelId: e.id,
                                                                    }),
                                                                }),
                                                            },
                                                            "topic",
                                                        )
                                                      : null,
                                              ],
                                          }),
                                          (0, o.S)(t.id, e.id)
                                              ? (0, r.jsx)(c.Button, {
                                                    size: "sm",
                                                    variant: "primary",
                                                    text: T.intl.string(T.t.OYkgVk),
                                                    onClick: () => (0, j.bN)(e.id),
                                                })
                                              : (0, r.jsx)(c.Button, {
                                                    size: "sm",
                                                    variant: "secondary",
                                                    text: T.intl.string(T.t.zA9d1J),
                                                    icon: c.XAi,
                                                    iconPosition: "start",
                                                    onClick: () => {
                                                        var i;
                                                        return (
                                                            (i = e.id),
                                                            void (0, c.mMO)(async () => {
                                                                let { default: e } = await n
                                                                    .e("54857")
                                                                    .then(n.bind(n, 147696));
                                                                return (n) => {
                                                                    var l, s;
                                                                    return (0, r.jsx)(
                                                                        e,
                                                                        ((l = (function (e) {
                                                                            for (var t = 1; t < arguments.length; t++) {
                                                                                var n =
                                                                                        null != arguments[t]
                                                                                            ? arguments[t]
                                                                                            : {},
                                                                                    r = Object.keys(n);
                                                                                "function" ==
                                                                                    typeof Object.getOwnPropertySymbols &&
                                                                                    (r = r.concat(
                                                                                        Object.getOwnPropertySymbols(
                                                                                            n,
                                                                                        ).filter(function (e) {
                                                                                            return Object.getOwnPropertyDescriptor(
                                                                                                n,
                                                                                                e,
                                                                                            ).enumerable;
                                                                                        }),
                                                                                    )),
                                                                                    r.forEach(function (t) {
                                                                                        var r;
                                                                                        (r = n[t]),
                                                                                            t in e
                                                                                                ? Object.defineProperty(
                                                                                                      e,
                                                                                                      t,
                                                                                                      {
                                                                                                          value: r,
                                                                                                          enumerable:
                                                                                                              !0,
                                                                                                          configurable:
                                                                                                              !0,
                                                                                                          writable: !0,
                                                                                                      },
                                                                                                  )
                                                                                                : (e[t] = r);
                                                                                    });
                                                                            }
                                                                            return e;
                                                                        })({}, n)),
                                                                        (s = s =
                                                                            {
                                                                                guildId: t.id,
                                                                                startingChannelId: i,
                                                                            }),
                                                                        Object.getOwnPropertyDescriptors
                                                                            ? Object.defineProperties(
                                                                                  l,
                                                                                  Object.getOwnPropertyDescriptors(s),
                                                                              )
                                                                            : (function (e, t) {
                                                                                  var n = Object.keys(e);
                                                                                  if (Object.getOwnPropertySymbols) {
                                                                                      var r =
                                                                                          Object.getOwnPropertySymbols(
                                                                                              e,
                                                                                          );
                                                                                      n.push.apply(n, r);
                                                                                  }
                                                                                  return n;
                                                                              })(Object(s)).forEach(function (e) {
                                                                                  Object.defineProperty(
                                                                                      l,
                                                                                      e,
                                                                                      Object.getOwnPropertyDescriptor(
                                                                                          s,
                                                                                          e,
                                                                                      ),
                                                                                  );
                                                                              }),
                                                                        l),
                                                                    );
                                                                };
                                                            })
                                                        );
                                                    },
                                                }),
                                      ],
                                  }),
                                  i < h.length - 1 ? (0, r.jsx)("div", { className: I.me }) : null,
                              ],
                          }),
                      ),
                  }),
                  (0, r.jsx)("div", { className: I.FZ }),
              ],
          });
}
function w(e) {
    let { saveOnClose: t = !1 } = e,
        n = (0, l.bG)([h.A], () => h.A.getGuild()),
        s = (0, l.bG)([d.A], () => d.A.isLoading()),
        a = (0, l.bG)([p.Ay], () => p.Ay.getChannels(null == n ? void 0 : n.id)),
        o = (0, l.bG)([m.A], () => m.A.getCategories(null == n ? void 0 : n.id)),
        u = (0, l.bG)([v.A], () => v.A.advancedMode),
        f = i.useRef(null),
        [g, b] = i.useState(!1),
        O = i.useRef(n);
    return (i.useEffect(() => {
        O.current = n;
    }),
    i.useEffect(() => {
        if (t) {
            let { current: e } = O;
            return () => {
                null != e &&
                    (0, j.jr)(e)
                        .then(() => {
                            u && (0, y.dm)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                        })
                        .catch(() => {});
            };
        }
    }, [t, u]),
    null == n)
        ? null
        : s
          ? (0, r.jsx)(c.y$y, {})
          : (0, r.jsxs)("div", {
                className: I.YB,
                children: [
                    (0, r.jsxs)("div", {
                        className: I.U5,
                        children: [
                            (0, r.jsx)(c.DUT, {
                                className: I.cS,
                                onClick: () => b((e) => !e),
                                children: (0, r.jsx)(x.A, {
                                    direction: g ? x.A.Directions.DOWN : x.A.Directions.UP,
                                    height: 16,
                                    width: 16,
                                }),
                            }),
                            (0, r.jsx)(c.Heading, {
                                className: I.wx,
                                variant: "heading-lg/extrabold",
                                children: T.intl.string(T.t["4GSygh"]),
                            }),
                            (0, r.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: T.intl.string(T.t.Kq7FAS),
                            }),
                            (0, r.jsx)(E.mU, {
                                className: I.kr,
                                guildId: n.id,
                            }),
                            g
                                ? null
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(P, { guild: n }),
                                          (0, r.jsx)(N.A, {
                                              className: I.bE,
                                              guild: n,
                                              categories: o,
                                              channels: a,
                                              hasSidebar: !1,
                                          }),
                                      ],
                                  }),
                            u &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)("div", { className: I.FZ }),
                                        (0, r.jsx)(c.Heading, {
                                            className: I.RH,
                                            variant: "heading-lg/extrabold",
                                            children: T.intl.string(T.t.g2RnpV),
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            className: I.nd,
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: T.intl.string(T.t.bLDQ1Q),
                                        }),
                                        (0, r.jsx)("div", {
                                            ref: f,
                                            className: I.di,
                                            children: (0, r.jsx)(S.A, {
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
                    (0, r.jsx)(_.A, {
                        guild: n,
                        scrollToQuestions: () => {
                            null != f.current && f.current.scrollIntoView({ behavior: "smooth" });
                        },
                    }),
                ],
            });
}
function R() {
    let e = (0, l.bG)([h.A], () => h.A.getProps().guild),
        t = (0, l.bG)([O.A], () => O.A.submitting),
        n = (0, l.bG)([v.A], () => v.A.advancedMode);
    return null == e
        ? null
        : (0, r.jsx)(s.A, {
              onSave: () => {
                  (0, j.jr)(e)
                      .then(() => {
                          n && (0, y.dm)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                      })
                      .catch(() => {});
              },
              onReset: j.nx,
              submitting: t,
              onSaveText: T.intl.string(T.t["R3BPH+"]),
          });
}
