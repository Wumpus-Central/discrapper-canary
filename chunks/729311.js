n.d(t, {
    Z: () => w,
    j: () => R
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(852860),
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
    N = n(889369),
    _ = n(570961),
    v = n(208665),
    C = n(868814),
    O = n(974513),
    y = n(2348),
    I = n(353890),
    E = n(716130),
    S = n(388032),
    T = n(19567);
function P(e) {
    let { guild: t } = e,
        l = (0, s.e7)([d.Z], () => d.Z.getEnabled(t.id)),
        h = (0, s.e7)([p.Z], () => p.Z.hasFetched(t.id)),
        f = (0, C.Z)(t),
        b = (0, s.e7)([N.Z], () => N.Z.editedDefaultChannelIds),
        x = f.filter((e) => !b.has(e.id)),
        [_, v] = i.useState(!1);
    i.useEffect(() => {
        h || l || (0, g.S)(t.id);
    }, [t.id, h, l]);
    let O = (e) => {
        (0, a.ZDy)(async () => {
            let { default: i } = await n.e('35641').then(n.bind(n, 89216));
            return (n) => {
                var s, a;
                return (0, r.jsx)(
                    i,
                    ((s = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, n)),
                    (a = a =
                        {
                            guildId: t.id,
                            startingChannelId: e
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    s)
                );
            };
        });
    };
    return _ || 0 === x.length
        ? null
        : (0, r.jsxs)('div', {
              className: T.recommendations,
              children: [
                  (0, r.jsx)(a.Text, {
                      variant: 'text-md/medium',
                      color: 'header-primary',
                      children: S.NW.string(S.t.NN7rDw)
                  }),
                  (0, r.jsxs)('div', {
                      className: T.recsSubheader,
                      children: [
                          (0, r.jsx)(a.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: S.NW.string(S.t['3Uuql5'])
                          }),
                          (0, r.jsxs)(a.P3F, {
                              className: T.dismissAll,
                              onClick: () => v(!0),
                              children: [
                                  (0, r.jsx)(a.dz2, {
                                      size: 'xxs',
                                      color: 'currentColor',
                                      className: T.checkmark
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      className: T.dismissAllText,
                                      variant: 'text-xs/medium',
                                      color: 'text-brand',
                                      children: S.NW.string(S.t.ZC3PJy)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: T.recommendedChannels,
                      children: x.map((e, n) =>
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: T.channelRow,
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: T.channelInfo,
                                              children: [
                                                  (0, r.jsxs)('div', {
                                                      className: T.channelName,
                                                      children: [
                                                          (0, r.jsx)(u._W, {
                                                              channel: e,
                                                              guild: t
                                                          }),
                                                          (0, r.jsx)(o.Z, {
                                                              className: T.__invalid_name,
                                                              children: (0, r.jsx)(a.Text, {
                                                                  className: T.__invalid_channelText,
                                                                  variant: 'text-md/medium',
                                                                  lineClamp: 1,
                                                                  color: 'text-normal',
                                                                  children: e.name
                                                              })
                                                          })
                                                      ]
                                                  }),
                                                  null != e.topic && e.topic.length > 0
                                                      ? (0, r.jsx)(
                                                            o.Z,
                                                            {
                                                                children: (0, r.jsx)(a.Text, {
                                                                    className: T.topic,
                                                                    variant: 'text-xs/normal',
                                                                    children: m.Z.parseTopic(e.topic, !0, { channelId: e.id })
                                                                })
                                                            },
                                                            'topic'
                                                        )
                                                      : null
                                              ]
                                          }),
                                          (0, c.s)(t.id, e.id)
                                              ? (0, r.jsx)(a.zxk, {
                                                    color: a.zxk.Colors.BRAND,
                                                    size: a.zxk.Sizes.SMALL,
                                                    className: T.addChannelCTA,
                                                    onClick: () => (0, j.pt)(e.id),
                                                    children: S.NW.string(S.t.OYkgVl)
                                                })
                                              : (0, r.jsxs)(a.zxk, {
                                                    look: a.zxk.Looks.OUTLINED,
                                                    color: a.zxk.Colors.PRIMARY,
                                                    className: T.lockedPill,
                                                    innerClassName: T.lockedPillInner,
                                                    onClick: () => O(e.id),
                                                    children: [
                                                        (0, r.jsx)(a.mBM, {
                                                            size: 'xs',
                                                            color: 'currentColor'
                                                        }),
                                                        (0, r.jsx)(a.Text, {
                                                            variant: 'text-sm/medium',
                                                            children: S.NW.string(S.t.zA9d1N)
                                                        })
                                                    ]
                                                })
                                      ]
                                  }),
                                  n < x.length - 1 ? (0, r.jsx)('div', { className: T.separator }) : null
                              ]
                          })
                      )
                  }),
                  (0, r.jsx)('div', { className: T.largeSeparator })
              ]
          });
}
function w(e) {
    let { saveOnClose: t = !1 } = e,
        n = (0, s.e7)([x.Z], () => x.Z.getGuild()),
        l = (0, s.e7)([d.Z], () => d.Z.isLoading()),
        o = (0, s.e7)([f.ZP], () => f.ZP.getChannels(null == n ? void 0 : n.id)),
        c = (0, s.e7)([h.Z], () => h.Z.getCategories(null == n ? void 0 : n.id)),
        u = (0, s.e7)([v.Z], () => v.Z.advancedMode),
        m = i.useRef(null),
        [g, p] = i.useState(!1),
        N = i.useRef(n);
    return (i.useEffect(() => {
        N.current = n;
    }),
    i.useEffect(() => {
        if (t) {
            let { current: e } = N;
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
        : l
          ? (0, r.jsx)(a.$jN, {})
          : (0, r.jsxs)('div', {
                className: T.columns,
                children: [
                    (0, r.jsxs)('div', {
                        className: T.channelBrowser,
                        children: [
                            (0, r.jsx)(a.P3F, {
                                className: T.collapseButton,
                                onClick: () => p((e) => !e),
                                children: (0, r.jsx)(b.Z, {
                                    direction: g ? b.Z.Directions.DOWN : b.Z.Directions.UP,
                                    height: 16,
                                    width: 16
                                })
                            }),
                            (0, r.jsx)(a.X6q, {
                                className: T.header,
                                variant: 'heading-lg/extrabold',
                                children: S.NW.string(S.t['4GSygo'])
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: S.NW.string(S.t.Kq7FAQ)
                            }),
                            (0, r.jsx)(O.Wu, {
                                className: T.advancedModeToggle,
                                guildId: n.id
                            }),
                            g
                                ? null
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(P, { guild: n }),
                                          (0, r.jsx)(y.Z, {
                                              className: T.channelBrowserOuter,
                                              guild: n,
                                              categories: c,
                                              channels: o,
                                              hasSidebar: !1
                                          })
                                      ]
                                  }),
                            u &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)('div', { className: T.largeSeparator }),
                                        (0, r.jsx)(a.X6q, {
                                            className: T.prejoinHeader,
                                            variant: 'heading-lg/extrabold',
                                            children: S.NW.string(S.t.g2Rnpa)
                                        }),
                                        (0, r.jsx)(a.Text, {
                                            className: T.prejoinSubHeader,
                                            variant: 'text-sm/normal',
                                            color: 'header-secondary',
                                            children: S.NW.string(S.t.bLDQ1d)
                                        }),
                                        (0, r.jsx)('div', {
                                            ref: m,
                                            className: T.advancedModeQuestions,
                                            children: (0, r.jsx)(E.Z, {
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
                    (0, r.jsx)(I.Z, {
                        guild: n,
                        scrollToQuestions: () => {
                            null != m.current && m.current.scrollIntoView({ behavior: 'smooth' });
                        }
                    })
                ]
            });
}
function R() {
    let e = (0, s.e7)([x.Z], () => x.Z.getProps().guild),
        t = (0, s.e7)([N.Z], () => N.Z.submitting),
        n = (0, s.e7)([v.Z], () => v.Z.advancedMode);
    return null == e
        ? null
        : (0, r.jsx)(l.Z, {
              onSave: () => {
                  (0, j.DO)(e)
                      .then(() => {
                          n && (0, _.rS)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                      })
                      .catch(() => {});
              },
              onReset: j.BG,
              submitting: t,
              onSaveText: S.NW.string(S.t.R3BPHx)
          });
}
