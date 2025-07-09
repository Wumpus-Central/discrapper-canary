(n.d(t, {
    Z: () => Z,
    j: () => D
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(755721),
    a = n(481060),
    o = n(852860),
    c = n(111028),
    d = n(977258),
    u = n(45966),
    m = n(473403),
    g = n(454585),
    p = n(323502),
    f = n(958832),
    h = n(324067),
    x = n(984933),
    b = n(259580),
    j = n(999382),
    _ = n(743475),
    v = n(889369),
    O = n(570961),
    C = n(208665),
    y = n(868814),
    N = n(974513),
    I = n(2348),
    E = n(353890),
    S = n(716130),
    T = n(388032),
    P = n(19567),
    w = n(73433);
function R(e) {
    let { guild: t } = e,
        o = (0, l.e7)([u.Z], () => u.Z.getEnabled(t.id)),
        h = (0, l.e7)([f.Z], () => f.Z.hasFetched(t.id)),
        x = (0, y.Z)(t),
        b = (0, l.e7)([v.Z], () => v.Z.editedDefaultChannelIds),
        j = x.filter((e) => !b.has(e.id)),
        [O, C] = i.useState(!1);
    i.useEffect(() => {
        h || o || (0, p.S)(t.id);
    }, [t.id, h, o]);
    let N = (e) => {
        (0, a.ZDy)(async () => {
            let { default: i } = await n.e('35641').then(n.bind(n, 89216));
            return (n) => {
                var l, s;
                return (0, r.jsx)(
                    i,
                    ((l = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    ((r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r));
                                }));
                        }
                        return e;
                    })({}, n)),
                    (s = s =
                        {
                            guildId: t.id,
                            startingChannelId: e
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(s)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                          }),
                    l)
                );
            };
        });
    };
    return O || 0 === j.length
        ? null
        : (0, r.jsxs)('div', {
              className: P.recommendations,
              children: [
                  (0, r.jsx)(a.Text, {
                      variant: 'text-md/medium',
                      color: 'header-primary',
                      children: T.intl.string(T.t.NN7rDw)
                  }),
                  (0, r.jsxs)('div', {
                      className: P.recsSubheader,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: T.intl.string(T.t['3Uuql5'])
                          }),
                          (0, r.jsxs)(a.P3F, {
                              className: P.dismissAll,
                              onClick: () => C(!0),
                              children: [
                                  (0, r.jsx)(a.dz2, {
                                      size: 'xxs',
                                      color: 'currentColor',
                                      className: P.checkmark
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      className: P.dismissAllText,
                                      variant: 'text-xs/medium',
                                      color: 'text-brand',
                                      children: T.intl.string(T.t.ZC3PJy)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: P.recommendedChannels,
                      children: j.map((e, n) =>
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: P.channelRow,
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: P.channelInfo,
                                              children: [
                                                  (0, r.jsxs)('div', {
                                                      className: P.channelName,
                                                      children: [
                                                          (0, r.jsx)(m._W, {
                                                              channel: e,
                                                              guild: t
                                                          }),
                                                          (0, r.jsx)(c.Z, {
                                                              className: P.__invalid_name,
                                                              children: (0, r.jsx)(a.Text, {
                                                                  className: P.__invalid_channelText,
                                                                  variant: 'text-md/medium',
                                                                  lineClamp: 1,
                                                                  color: 'text-default',
                                                                  children: e.name
                                                              })
                                                          })
                                                      ]
                                                  }),
                                                  null != e.topic && e.topic.length > 0
                                                      ? (0, r.jsx)(
                                                            c.Z,
                                                            {
                                                                className: w.markup,
                                                                children: (0, r.jsx)(a.Text, {
                                                                    className: P.topic,
                                                                    variant: 'text-xs/normal',
                                                                    children: g.Z.parseTopic(e.topic, !0, { channelId: e.id })
                                                                })
                                                            },
                                                            'topic'
                                                        )
                                                      : null
                                              ]
                                          }),
                                          (0, d.s)(t.id, e.id)
                                              ? (0, r.jsx)(s.zx, {
                                                    color: s.zx.Colors.BRAND,
                                                    size: s.zx.Sizes.SMALL,
                                                    className: P.addChannelCTA,
                                                    onClick: () => (0, _.pt)(e.id),
                                                    children: T.intl.string(T.t.OYkgVl)
                                                })
                                              : (0, r.jsxs)(s.zx, {
                                                    look: s.zx.Looks.OUTLINED,
                                                    color: s.zx.Colors.PRIMARY,
                                                    className: P.lockedPill,
                                                    innerClassName: P.lockedPillInner,
                                                    onClick: () => N(e.id),
                                                    children: [
                                                        (0, r.jsx)(a.mBM, {
                                                            size: 'xs',
                                                            color: 'currentColor'
                                                        }),
                                                        (0, r.jsx)(a.Text, {
                                                            variant: 'text-sm/medium',
                                                            children: T.intl.string(T.t.zA9d1N)
                                                        })
                                                    ]
                                                })
                                      ]
                                  }),
                                  n < j.length - 1 ? (0, r.jsx)('div', { className: P.separator }) : null
                              ]
                          })
                      )
                  }),
                  (0, r.jsx)('div', { className: P.largeSeparator })
              ]
          });
}
function Z(e) {
    let { saveOnClose: t = !1 } = e,
        n = (0, l.e7)([j.Z], () => j.Z.getGuild()),
        s = (0, l.e7)([u.Z], () => u.Z.isLoading()),
        o = (0, l.e7)([x.ZP], () => x.ZP.getChannels(null == n ? void 0 : n.id)),
        c = (0, l.e7)([h.Z], () => h.Z.getCategories(null == n ? void 0 : n.id)),
        d = (0, l.e7)([C.Z], () => C.Z.advancedMode),
        m = i.useRef(null),
        [g, p] = i.useState(!1),
        f = i.useRef(n);
    return (i.useEffect(() => {
        f.current = n;
    }),
    i.useEffect(() => {
        if (t) {
            let { current: e } = f;
            return () => {
                null != e &&
                    (0, _.DO)(e)
                        .then(() => {
                            d && (0, O.rS)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                        })
                        .catch(() => {});
            };
        }
    }, [t, d]),
    null == n)
        ? null
        : s
          ? (0, r.jsx)(a.$jN, {})
          : (0, r.jsxs)('div', {
                className: P.columns,
                children: [
                    (0, r.jsxs)('div', {
                        className: P.channelBrowser,
                        children: [
                            (0, r.jsx)(a.P3F, {
                                className: P.collapseButton,
                                onClick: () => p((e) => !e),
                                children: (0, r.jsx)(b.Z, {
                                    direction: g ? b.Z.Directions.DOWN : b.Z.Directions.UP,
                                    height: 16,
                                    width: 16
                                })
                            }),
                            (0, r.jsx)(a.X6q, {
                                className: P.header,
                                variant: 'heading-lg/extrabold',
                                children: T.intl.string(T.t['4GSygo'])
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: T.intl.string(T.t.Kq7FAQ)
                            }),
                            (0, r.jsx)(N.Wu, {
                                className: P.advancedModeToggle,
                                guildId: n.id
                            }),
                            g
                                ? null
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(R, { guild: n }),
                                          (0, r.jsx)(I.Z, {
                                              className: P.channelBrowserOuter,
                                              guild: n,
                                              categories: c,
                                              channels: o,
                                              hasSidebar: !1
                                          })
                                      ]
                                  }),
                            d &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)('div', { className: P.largeSeparator }),
                                        (0, r.jsx)(a.X6q, {
                                            className: P.prejoinHeader,
                                            variant: 'heading-lg/extrabold',
                                            children: T.intl.string(T.t.g2Rnpa)
                                        }),
                                        (0, r.jsx)(a.Text, {
                                            className: P.prejoinSubHeader,
                                            variant: 'text-sm/normal',
                                            color: 'header-secondary',
                                            children: T.intl.string(T.t.bLDQ1d)
                                        }),
                                        (0, r.jsx)('div', {
                                            ref: m,
                                            className: P.advancedModeQuestions,
                                            children: (0, r.jsx)(S.Z, {
                                                guildId: n.id,
                                                prejoinOnly: !0,
                                                includeCount: !0,
                                                singleColumn: !0
                                            })
                                        })
                                    ]
                                })
                        ]
                    }),
                    (0, r.jsx)(E.Z, {
                        guild: n,
                        scrollToQuestions: () => {
                            null != m.current && m.current.scrollIntoView({ behavior: 'smooth' });
                        }
                    })
                ]
            });
}
function D() {
    let e = (0, l.e7)([j.Z], () => j.Z.getProps().guild),
        t = (0, l.e7)([v.Z], () => v.Z.submitting),
        n = (0, l.e7)([C.Z], () => C.Z.advancedMode);
    return null == e
        ? null
        : (0, r.jsx)(o.Z, {
              onSave: () => {
                  (0, _.DO)(e)
                      .then(() => {
                          n && (0, O.rS)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                      })
                      .catch(() => {});
              },
              onReset: _.BG,
              submitting: t,
              onSaveText: T.intl.string(T.t.R3BPHx)
          });
}
