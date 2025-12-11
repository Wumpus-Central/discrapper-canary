n.d(t, {
    Z: () => Z,
    j: () => R,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(796027),
    s = n(194983),
    o = n(481060),
    c = n(977258),
    d = n(45966),
    u = n(473403),
    g = n(454585),
    f = n(323502),
    m = n(958832),
    b = n(324067),
    p = n(984933),
    h = n(259580),
    x = n(999382),
    j = n(743475),
    v = n(889369),
    O = n(570961),
    C = n(208665),
    y = n(868814),
    N = n(974513),
    E = n(2348),
    I = n(353890),
    S = n(716130),
    _ = n(388032),
    T = n(196732),
    P = n(960324);
function w(e) {
    let { guild: t } = e,
        a = (0, l.e7)([d.Z], () => d.Z.getEnabled(t.id)),
        b = (0, l.e7)([m.Z], () => m.Z.hasFetched(t.id)),
        p = (0, y.Z)(t),
        h = (0, l.e7)([v.Z], () => v.Z.editedDefaultChannelIds),
        x = p.filter((e) => !h.has(e.id)),
        [O, C] = i.useState(!1);
    return (i.useEffect(() => {
        b || a || (0, f.S)(t.id);
    }, [t.id, b, a]),
    O || 0 === x.length)
        ? null
        : (0, r.jsxs)("div", {
              className: T.recommendations,
              children: [
                  (0, r.jsx)(o.Text, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      children: _.intl.string(_.t.NN7rD3),
                  }),
                  (0, r.jsxs)("div", {
                      className: T.recsSubheader,
                      children: [
                          (0, r.jsx)(o.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: _.intl.string(_.t["3Uuql+"]),
                          }),
                          (0, r.jsxs)(o.P3F, {
                              className: T.dismissAll,
                              onClick: () => C(!0),
                              children: [
                                  (0, r.jsx)(o.dz2, {
                                      size: "xxs",
                                      color: "currentColor",
                                      className: T.checkmark,
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      className: T.dismissAllText,
                                      variant: "text-xs/medium",
                                      color: "text-brand",
                                      children: _.intl.string(_.t.ZC3PJ2),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, r.jsx)("div", {
                      className: T.recommendedChannels,
                      children: x.map((e, i) =>
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)("div", {
                                      className: T.channelRow,
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: T.channelInfo,
                                              children: [
                                                  (0, r.jsxs)("div", {
                                                      className: T.channelName,
                                                      children: [
                                                          (0, r.jsx)(u._W, {
                                                              channel: e,
                                                              guild: t,
                                                          }),
                                                          (0, r.jsx)(s.Z, {
                                                              className: T.__invalid_name,
                                                              children: (0, r.jsx)(o.Text, {
                                                                  className: T.__invalid_channelText,
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
                                                            s.Z,
                                                            {
                                                                className: P.markup,
                                                                children: (0, r.jsx)(o.Text, {
                                                                    className: T.topic,
                                                                    variant: "text-xs/normal",
                                                                    children: g.Z.parseTopic(e.topic, !0, {
                                                                        channelId: e.id,
                                                                    }),
                                                                }),
                                                            },
                                                            "topic",
                                                        )
                                                      : null,
                                              ],
                                          }),
                                          (0, c.s)(t.id, e.id)
                                              ? (0, r.jsx)(o.Button, {
                                                    size: "sm",
                                                    variant: "primary",
                                                    text: _.intl.string(_.t.OYkgVk),
                                                    onClick: () => (0, j.pt)(e.id),
                                                })
                                              : (0, r.jsx)(o.Button, {
                                                    size: "sm",
                                                    variant: "secondary",
                                                    text: _.intl.string(_.t.zA9d1J),
                                                    icon: o.mBM,
                                                    iconPosition: "start",
                                                    onClick: () => {
                                                        var i;
                                                        return (
                                                            (i = e.id),
                                                            void (0, o.ZDy)(async () => {
                                                                let { default: e } = await n
                                                                    .e("35641")
                                                                    .then(n.bind(n, 89216));
                                                                return (n) => {
                                                                    var l, a;
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
                                                                        (a = a =
                                                                            {
                                                                                guildId: t.id,
                                                                                startingChannelId: i,
                                                                            }),
                                                                        Object.getOwnPropertyDescriptors
                                                                            ? Object.defineProperties(
                                                                                  l,
                                                                                  Object.getOwnPropertyDescriptors(a),
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
                                                                              })(Object(a)).forEach(function (e) {
                                                                                  Object.defineProperty(
                                                                                      l,
                                                                                      e,
                                                                                      Object.getOwnPropertyDescriptor(
                                                                                          a,
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
                                  i < x.length - 1 ? (0, r.jsx)("div", { className: T.separator }) : null,
                              ],
                          }),
                      ),
                  }),
                  (0, r.jsx)("div", { className: T.largeSeparator }),
              ],
          });
}
function Z(e) {
    let { saveOnClose: t = !1 } = e,
        n = (0, l.e7)([x.Z], () => x.Z.getGuild()),
        a = (0, l.e7)([d.Z], () => d.Z.isLoading()),
        s = (0, l.e7)([p.ZP], () => p.ZP.getChannels(null == n ? void 0 : n.id)),
        c = (0, l.e7)([b.Z], () => b.Z.getCategories(null == n ? void 0 : n.id)),
        u = (0, l.e7)([C.Z], () => C.Z.advancedMode),
        g = i.useRef(null),
        [f, m] = i.useState(!1),
        v = i.useRef(n);
    return (i.useEffect(() => {
        v.current = n;
    }),
    i.useEffect(() => {
        if (t) {
            let { current: e } = v;
            return () => {
                null != e &&
                    (0, j.DO)(e)
                        .then(() => {
                            u && (0, O.rS)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                        })
                        .catch(() => {});
            };
        }
    }, [t, u]),
    null == n)
        ? null
        : a
          ? (0, r.jsx)(o.$jN, {})
          : (0, r.jsxs)("div", {
                className: T.columns,
                children: [
                    (0, r.jsxs)("div", {
                        className: T.channelBrowser,
                        children: [
                            (0, r.jsx)(o.P3F, {
                                className: T.collapseButton,
                                onClick: () => m((e) => !e),
                                children: (0, r.jsx)(h.Z, {
                                    direction: f ? h.Z.Directions.DOWN : h.Z.Directions.UP,
                                    height: 16,
                                    width: 16,
                                }),
                            }),
                            (0, r.jsx)(o.Heading, {
                                className: T.header,
                                variant: "heading-lg/extrabold",
                                children: _.intl.string(_.t["4GSygh"]),
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: _.intl.string(_.t.Kq7FAS),
                            }),
                            (0, r.jsx)(N.Wu, {
                                className: T.advancedModeToggle,
                                guildId: n.id,
                            }),
                            f
                                ? null
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(w, { guild: n }),
                                          (0, r.jsx)(E.Z, {
                                              className: T.channelBrowserOuter,
                                              guild: n,
                                              categories: c,
                                              channels: s,
                                              hasSidebar: !1,
                                          }),
                                      ],
                                  }),
                            u &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)("div", { className: T.largeSeparator }),
                                        (0, r.jsx)(o.Heading, {
                                            className: T.prejoinHeader,
                                            variant: "heading-lg/extrabold",
                                            children: _.intl.string(_.t.g2RnpV),
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            className: T.prejoinSubHeader,
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            children: _.intl.string(_.t.bLDQ1Q),
                                        }),
                                        (0, r.jsx)("div", {
                                            ref: g,
                                            className: T.advancedModeQuestions,
                                            children: (0, r.jsx)(S.Z, {
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
                    (0, r.jsx)(I.Z, {
                        guild: n,
                        scrollToQuestions: () => {
                            null != g.current && g.current.scrollIntoView({ behavior: "smooth" });
                        },
                    }),
                ],
            });
}
function R() {
    let e = (0, l.e7)([x.Z], () => x.Z.getProps().guild),
        t = (0, l.e7)([v.Z], () => v.Z.submitting),
        n = (0, l.e7)([C.Z], () => C.Z.advancedMode);
    return null == e
        ? null
        : (0, r.jsx)(a.Z, {
              onSave: () => {
                  (0, j.DO)(e)
                      .then(() => {
                          n && (0, O.rS)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                      })
                      .catch(() => {});
              },
              onReset: j.BG,
              submitting: t,
              onSaveText: _.intl.string(_.t["R3BPH+"]),
          });
}
