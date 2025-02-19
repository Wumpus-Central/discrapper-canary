n.d(t, {
    Z: () => D,
    j: () => Z
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(852860),
    d = n(111028),
    u = n(977258),
    m = n(45966),
    p = n(473403),
    g = n(454585),
    h = n(323502),
    f = n(958832),
    b = n(324067),
    x = n(984933),
    j = n(259580),
    N = n(999382),
    v = n(743475),
    _ = n(889369),
    O = n(570961),
    y = n(208665),
    C = n(868814),
    I = n(974513),
    E = n(2348),
    S = n(353890),
    T = n(716130),
    P = n(388032),
    w = n(419226);
function R(e) {
    let { guild: t } = e,
        s = (0, l.e7)([m.Z], () => m.Z.getEnabled(t.id)),
        a = (0, l.e7)([f.Z], () => f.Z.hasFetched(t.id)),
        c = (0, C.Z)(t),
        b = (0, l.e7)([_.Z], () => _.Z.editedDefaultChannelIds),
        x = c.filter((e) => !b.has(e.id)),
        [j, N] = i.useState(!1);
    i.useEffect(() => {
        a || s || (0, h.S)(t.id);
    }, [t.id, a, s]);
    let O = (e) => {
        (0, o.ZDy)(async () => {
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
    return j || 0 === x.length
        ? null
        : (0, r.jsxs)('div', {
              className: w.recommendations,
              children: [
                  (0, r.jsx)(o.Text, {
                      variant: 'text-md/medium',
                      color: 'header-primary',
                      children: P.NW.string(P.t.NN7rDw)
                  }),
                  (0, r.jsxs)('div', {
                      className: w.recsSubheader,
                      children: [
                          (0, r.jsx)(o.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: P.NW.string(P.t['3Uuql5'])
                          }),
                          (0, r.jsxs)(o.P3F, {
                              className: w.dismissAll,
                              onClick: () => N(!0),
                              children: [
                                  (0, r.jsx)(o.dz2, {
                                      size: 'xxs',
                                      color: 'currentColor',
                                      className: w.checkmark
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      className: w.dismissAllText,
                                      variant: 'text-xs/medium',
                                      color: 'text-brand',
                                      children: P.NW.string(P.t.ZC3PJy)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, r.jsx)('div', {
                      className: w.recommendedChannels,
                      children: x.map((e, n) =>
                          (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: w.channelRow,
                                      children: [
                                          (0, r.jsxs)('div', {
                                              className: w.channelInfo,
                                              children: [
                                                  (0, r.jsxs)('div', {
                                                      className: w.channelName,
                                                      children: [
                                                          (0, r.jsx)(p._, {
                                                              channel: e,
                                                              guild: t
                                                          }),
                                                          (0, r.jsx)(d.Z, {
                                                              className: w.__invalid_name,
                                                              children: (0, r.jsx)(o.Text, {
                                                                  className: w.__invalid_channelText,
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
                                                            d.Z,
                                                            {
                                                                children: (0, r.jsx)(o.Text, {
                                                                    className: w.topic,
                                                                    variant: 'text-xs/normal',
                                                                    children: g.Z.parseTopic(e.topic, !0, { channelId: e.id })
                                                                })
                                                            },
                                                            'topic'
                                                        )
                                                      : null
                                              ]
                                          }),
                                          (0, u.s)(t.id, e.id)
                                              ? (0, r.jsx)(o.zxk, {
                                                    color: o.zxk.Colors.BRAND,
                                                    size: o.zxk.Sizes.SMALL,
                                                    className: w.addChannelCTA,
                                                    onClick: () => (0, v.pt)(e.id),
                                                    children: P.NW.string(P.t.OYkgVl)
                                                })
                                              : (0, r.jsxs)(o.zxk, {
                                                    look: o.zxk.Looks.OUTLINED,
                                                    color: o.zxk.Colors.PRIMARY,
                                                    className: w.lockedPill,
                                                    innerClassName: w.lockedPillInner,
                                                    onClick: () => O(e.id),
                                                    children: [
                                                        (0, r.jsx)(o.mBM, {
                                                            size: 'xs',
                                                            color: 'currentColor'
                                                        }),
                                                        (0, r.jsx)(o.Text, {
                                                            variant: 'text-sm/medium',
                                                            children: P.NW.string(P.t.zA9d1N)
                                                        })
                                                    ]
                                                })
                                      ]
                                  }),
                                  n < x.length - 1 ? (0, r.jsx)('div', { className: w.separator }) : null
                              ]
                          })
                      )
                  }),
                  (0, r.jsx)('div', { className: w.largeSeparator })
              ]
          });
}
function D(e) {
    let { saveOnClose: t = !1 } = e,
        n = (0, l.e7)([N.Z], () => N.Z.getGuild()),
        s = (0, l.e7)([m.Z], () => m.Z.isLoading()),
        c = (0, l.e7)([x.ZP], () => x.ZP.getChannels(null == n ? void 0 : n.id)),
        d = (0, l.e7)([b.Z], () => b.Z.getCategories(null == n ? void 0 : n.id)),
        u = (0, l.e7)([y.Z], () => y.Z.advancedMode),
        p = i.useRef(null),
        [g, h] = i.useState(!1),
        f = i.useRef(n);
    return (i.useEffect(() => {
        f.current = n;
    }),
    i.useEffect(() => {
        if (t) {
            let { current: e } = f;
            return () => {
                null != e &&
                    (0, v.DO)(e)
                        .then(() => {
                            u && (0, O.rS)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                        })
                        .catch(() => {});
            };
        }
    }, [t, u]),
    null == n)
        ? null
        : s
          ? (0, r.jsx)(o.$jN, {})
          : (0, r.jsxs)('div', {
                className: w.columns,
                children: [
                    (0, r.jsxs)('div', {
                        className: w.channelBrowser,
                        children: [
                            (0, r.jsx)(o.P3F, {
                                className: w.collapseButton,
                                onClick: () => h((e) => !e),
                                children: (0, r.jsx)(j.Z, {
                                    direction: g ? j.Z.Directions.DOWN : j.Z.Directions.UP,
                                    height: 16,
                                    width: 16
                                })
                            }),
                            (0, r.jsx)(o.X6q, {
                                className: w.header,
                                variant: 'heading-lg/extrabold',
                                children: P.NW.string(P.t['4GSygo'])
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: P.NW.string(P.t.Kq7FAQ)
                            }),
                            (0, r.jsx)(I.Wu, {
                                className: w.advancedModeToggle,
                                guildId: n.id
                            }),
                            g
                                ? null
                                : (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(R, { guild: n }),
                                          (0, r.jsx)(E.Z, {
                                              className: a()(w.channelBrowserOuter),
                                              guild: n,
                                              categories: d,
                                              channels: c,
                                              hasSidebar: !1
                                          })
                                      ]
                                  }),
                            u &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)('div', { className: w.largeSeparator }),
                                        (0, r.jsx)(o.X6q, {
                                            className: w.prejoinHeader,
                                            variant: 'heading-lg/extrabold',
                                            children: P.NW.string(P.t.g2Rnpa)
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            className: w.prejoinSubHeader,
                                            variant: 'text-sm/normal',
                                            color: 'header-secondary',
                                            children: P.NW.string(P.t.bLDQ1d)
                                        }),
                                        (0, r.jsx)('div', {
                                            ref: p,
                                            className: w.advancedModeQuestions,
                                            children: (0, r.jsx)(T.Z, {
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
                    (0, r.jsx)(S.Z, {
                        guild: n,
                        scrollToQuestions: () => {
                            null != p.current && p.current.scrollIntoView({ behavior: 'smooth' });
                        }
                    })
                ]
            });
}
function Z() {
    let e = (0, l.e7)([N.Z], () => N.Z.getProps().guild),
        t = (0, l.e7)([_.Z], () => _.Z.submitting),
        n = (0, l.e7)([y.Z], () => y.Z.advancedMode);
    return null == e
        ? null
        : (0, r.jsx)(c.Z, {
              onSave: () => {
                  (0, v.DO)(e)
                      .then(() => {
                          n && (0, O.rS)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                      })
                      .catch(() => {});
              },
              onReset: v.BG,
              submitting: t,
              onSaveText: P.NW.string(P.t.R3BPHx)
          });
}
