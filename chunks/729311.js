n.d(t, {
    Z: () => w,
    j: () => R
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(852860),
    o = n(111028),
    c = n(977258),
    d = n(45966),
    u = n(473403),
    m = n(454585),
    g = n(323502),
    p = n(958832),
    h = n(324067),
    f = n(984933),
    x = n(259580),
    b = n(999382),
    j = n(743475),
    _ = n(889369),
    v = n(570961),
    O = n(208665),
    C = n(868814),
    y = n(974513),
    N = n(2348),
    I = n(353890),
    E = n(716130),
    S = n(388032),
    T = n(19567);
function P(e) {
    let { guild: t } = e,
        a = (0, l.e7)([d.Z], () => d.Z.getEnabled(t.id)),
        h = (0, l.e7)([p.Z], () => p.Z.hasFetched(t.id)),
        f = (0, C.Z)(t),
        x = (0, l.e7)([_.Z], () => _.Z.editedDefaultChannelIds),
        b = f.filter((e) => !x.has(e.id)),
        [v, O] = i.useState(!1);
    i.useEffect(() => {
        h || a || (0, g.S)(t.id);
    }, [t.id, h, a]);
    let y = (e) => {
        (0, s.ZDy)(async () => {
            let { default: i } = await n.e('35641').then(n.bind(n, 89216));
            return (n) => {
                var l, s;
                return (0, r.jsx)(
                    i,
                    ((l = (function (e) {
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
    return v || 0 === b.length
        ? null
        : (0, r.jsxs)('div', {
              className: T.recommendations,
              children: [
                  (0, r.jsx)(s.Text, {
                      variant: 'text-md/medium',
                      color: 'header-primary',
                      children: S.intl.string(S.t.NN7rDw)
                  }),
                  (0, r.jsxs)('div', {
                      className: T.recsSubheader,
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: S.intl.string(S.t['3Uuql5'])
                          }),
                          (0, r.jsxs)(s.P3F, {
                              className: T.dismissAll,
                              onClick: () => O(!0),
                              children: [
                                  (0, r.jsx)(s.dz2, {
                                      size: 'xxs',
                                      color: 'currentColor',
                                      className: T.checkmark
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      className: T.dismissAllText,
                                      variant: 'text-xs/medium',
                                      color: 'text-brand',
                                      children: S.intl.string(S.t.ZC3PJy)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: T.recommendedChannels,
                      children: b.map((e, n) =>
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
                                                              children: (0, r.jsx)(s.Text, {
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
                                                                children: (0, r.jsx)(s.Text, {
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
                                              ? (0, r.jsx)(s.zxk, {
                                                    color: s.zxk.Colors.BRAND,
                                                    size: s.zxk.Sizes.SMALL,
                                                    className: T.addChannelCTA,
                                                    onClick: () => (0, j.pt)(e.id),
                                                    children: S.intl.string(S.t.OYkgVl)
                                                })
                                              : (0, r.jsxs)(s.zxk, {
                                                    look: s.zxk.Looks.OUTLINED,
                                                    color: s.zxk.Colors.PRIMARY,
                                                    className: T.lockedPill,
                                                    innerClassName: T.lockedPillInner,
                                                    onClick: () => y(e.id),
                                                    children: [
                                                        (0, r.jsx)(s.mBM, {
                                                            size: 'xs',
                                                            color: 'currentColor'
                                                        }),
                                                        (0, r.jsx)(s.Text, {
                                                            variant: 'text-sm/medium',
                                                            children: S.intl.string(S.t.zA9d1N)
                                                        })
                                                    ]
                                                })
                                      ]
                                  }),
                                  n < b.length - 1 ? (0, r.jsx)('div', { className: T.separator }) : null
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
        n = (0, l.e7)([b.Z], () => b.Z.getGuild()),
        a = (0, l.e7)([d.Z], () => d.Z.isLoading()),
        o = (0, l.e7)([f.ZP], () => f.ZP.getChannels(null == n ? void 0 : n.id)),
        c = (0, l.e7)([h.Z], () => h.Z.getCategories(null == n ? void 0 : n.id)),
        u = (0, l.e7)([O.Z], () => O.Z.advancedMode),
        m = i.useRef(null),
        [g, p] = i.useState(!1),
        _ = i.useRef(n);
    return (i.useEffect(() => {
        _.current = n;
    }),
    i.useEffect(() => {
        if (t) {
            let { current: e } = _;
            return () => {
                null != e &&
                    (0, j.DO)(e)
                        .then(() => {
                            u && (0, v.rS)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                        })
                        .catch(() => {});
            };
        }
    }, [t, u]),
    null == n)
        ? null
        : a
          ? (0, r.jsx)(s.$jN, {})
          : (0, r.jsxs)('div', {
                className: T.columns,
                children: [
                    (0, r.jsxs)('div', {
                        className: T.channelBrowser,
                        children: [
                            (0, r.jsx)(s.P3F, {
                                className: T.collapseButton,
                                onClick: () => p((e) => !e),
                                children: (0, r.jsx)(x.Z, {
                                    direction: g ? x.Z.Directions.DOWN : x.Z.Directions.UP,
                                    height: 16,
                                    width: 16
                                })
                            }),
                            (0, r.jsx)(s.X6q, {
                                className: T.header,
                                variant: 'heading-lg/extrabold',
                                children: S.intl.string(S.t['4GSygo'])
                            }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: S.intl.string(S.t.Kq7FAQ)
                            }),
                            (0, r.jsx)(y.Wu, {
                                className: T.advancedModeToggle,
                                guildId: n.id
                            }),
                            g
                                ? null
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(P, { guild: n }),
                                          (0, r.jsx)(N.Z, {
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
                                        (0, r.jsx)(s.X6q, {
                                            className: T.prejoinHeader,
                                            variant: 'heading-lg/extrabold',
                                            children: S.intl.string(S.t.g2Rnpa)
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            className: T.prejoinSubHeader,
                                            variant: 'text-sm/normal',
                                            color: 'header-secondary',
                                            children: S.intl.string(S.t.bLDQ1d)
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
    let e = (0, l.e7)([b.Z], () => b.Z.getProps().guild),
        t = (0, l.e7)([_.Z], () => _.Z.submitting),
        n = (0, l.e7)([O.Z], () => O.Z.advancedMode);
    return null == e
        ? null
        : (0, r.jsx)(a.Z, {
              onSave: () => {
                  (0, j.DO)(e)
                      .then(() => {
                          n && (0, v.rS)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                      })
                      .catch(() => {});
              },
              onReset: j.BG,
              submitting: t,
              onSaveText: S.intl.string(S.t.R3BPHx)
          });
}
