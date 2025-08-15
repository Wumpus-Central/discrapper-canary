n.d(t, {
    Z: () => R,
    j: () => Z,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(852860),
    o = n(111028),
    c = n(977258),
    d = n(45966),
    u = n(473403),
    m = n(454585),
    g = n(323502),
    p = n(958832),
    h = n(324067),
    f = n(984933),
    b = n(259580),
    x = n(999382),
    j = n(743475),
    v = n(889369),
    _ = n(570961),
    O = n(208665),
    y = n(868814),
    C = n(974513),
    N = n(2348),
    I = n(353890),
    E = n(716130),
    S = n(388032),
    T = n(868893),
    P = n(430864);
function w(e) {
    let { guild: t } = e,
        s = (0, l.e7)([d.Z], () => d.Z.getEnabled(t.id)),
        h = (0, l.e7)([p.Z], () => p.Z.hasFetched(t.id)),
        f = (0, y.Z)(t),
        b = (0, l.e7)([v.Z], () => v.Z.editedDefaultChannelIds),
        x = f.filter((e) => !b.has(e.id)),
        [_, O] = i.useState(!1);
    return (i.useEffect(() => {
        h || s || (0, g.S)(t.id);
    }, [t.id, h, s]),
    _ || 0 === x.length)
        ? null
        : (0, r.jsxs)("div", {
              className: T.recommendations,
              children: [
                  (0, r.jsx)(a.Text, {
                      variant: "text-md/medium",
                      color: "header-primary",
                      children: S.intl.string(S.t.NN7rDw),
                  }),
                  (0, r.jsxs)("div", {
                      className: T.recsSubheader,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: S.intl.string(S.t["3Uuql5"]),
                          }),
                          (0, r.jsxs)(a.P3F, {
                              className: T.dismissAll,
                              onClick: () => O(!0),
                              children: [
                                  (0, r.jsx)(a.dz2, {
                                      size: "xxs",
                                      color: "currentColor",
                                      className: T.checkmark,
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      className: T.dismissAllText,
                                      variant: "text-xs/medium",
                                      color: "text-brand",
                                      children: S.intl.string(S.t.ZC3PJy),
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
                                                          (0, r.jsx)(o.Z, {
                                                              className: T.__invalid_name,
                                                              children: (0, r.jsx)(a.Text, {
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
                                                            o.Z,
                                                            {
                                                                className: P.markup,
                                                                children: (0, r.jsx)(a.Text, {
                                                                    className: T.topic,
                                                                    variant: "text-xs/normal",
                                                                    children: m.Z.parseTopic(e.topic, !0, {
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
                                              ? (0, r.jsx)(a.zxk, {
                                                    size: "sm",
                                                    variant: "primary",
                                                    text: S.intl.string(S.t.OYkgVl),
                                                    onClick: () => (0, j.pt)(e.id),
                                                })
                                              : (0, r.jsx)(a.zxk, {
                                                    size: "sm",
                                                    variant: "secondary",
                                                    text: S.intl.string(S.t.zA9d1N),
                                                    icon: a.mBM,
                                                    iconPosition: "start",
                                                    onClick: () => {
                                                        var i;
                                                        return (
                                                            (i = e.id),
                                                            void (0, a.ZDy)(async () => {
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
function R(e) {
    let { saveOnClose: t = !1 } = e,
        n = (0, l.e7)([x.Z], () => x.Z.getGuild()),
        s = (0, l.e7)([d.Z], () => d.Z.isLoading()),
        o = (0, l.e7)([f.ZP], () => f.ZP.getChannels(null == n ? void 0 : n.id)),
        c = (0, l.e7)([h.Z], () => h.Z.getCategories(null == n ? void 0 : n.id)),
        u = (0, l.e7)([O.Z], () => O.Z.advancedMode),
        m = i.useRef(null),
        [g, p] = i.useState(!1),
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
                            u && (0, _.rS)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                        })
                        .catch(() => {});
            };
        }
    }, [t, u]),
    null == n)
        ? null
        : s
          ? (0, r.jsx)(a.$jN, {})
          : (0, r.jsxs)("div", {
                className: T.columns,
                children: [
                    (0, r.jsxs)("div", {
                        className: T.channelBrowser,
                        children: [
                            (0, r.jsx)(a.P3F, {
                                className: T.collapseButton,
                                onClick: () => p((e) => !e),
                                children: (0, r.jsx)(b.Z, {
                                    direction: g ? b.Z.Directions.DOWN : b.Z.Directions.UP,
                                    height: 16,
                                    width: 16,
                                }),
                            }),
                            (0, r.jsx)(a.X6q, {
                                className: T.header,
                                variant: "heading-lg/extrabold",
                                children: S.intl.string(S.t["4GSygo"]),
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: S.intl.string(S.t.Kq7FAQ),
                            }),
                            (0, r.jsx)(C.Wu, {
                                className: T.advancedModeToggle,
                                guildId: n.id,
                            }),
                            g
                                ? null
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(w, { guild: n }),
                                          (0, r.jsx)(N.Z, {
                                              className: T.channelBrowserOuter,
                                              guild: n,
                                              categories: c,
                                              channels: o,
                                              hasSidebar: !1,
                                          }),
                                      ],
                                  }),
                            u &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)("div", { className: T.largeSeparator }),
                                        (0, r.jsx)(a.X6q, {
                                            className: T.prejoinHeader,
                                            variant: "heading-lg/extrabold",
                                            children: S.intl.string(S.t.g2Rnpa),
                                        }),
                                        (0, r.jsx)(a.Text, {
                                            className: T.prejoinSubHeader,
                                            variant: "text-sm/normal",
                                            color: "header-secondary",
                                            children: S.intl.string(S.t.bLDQ1d),
                                        }),
                                        (0, r.jsx)("div", {
                                            ref: m,
                                            className: T.advancedModeQuestions,
                                            children: (0, r.jsx)(E.Z, {
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
                            null != m.current && m.current.scrollIntoView({ behavior: "smooth" });
                        },
                    }),
                ],
            });
}
function Z() {
    let e = (0, l.e7)([x.Z], () => x.Z.getProps().guild),
        t = (0, l.e7)([v.Z], () => v.Z.submitting),
        n = (0, l.e7)([O.Z], () => O.Z.advancedMode);
    return null == e
        ? null
        : (0, r.jsx)(s.Z, {
              onSave: () => {
                  (0, j.DO)(e)
                      .then(() => {
                          n && (0, _.rS)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                      })
                      .catch(() => {});
              },
              onReset: j.BG,
              submitting: t,
              onSaveText: S.intl.string(S.t.R3BPHx),
          });
}
