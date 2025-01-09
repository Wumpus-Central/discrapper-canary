n.d(t, {
    Z: function () {
        return D;
    },
    j: function () {
        return O;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(852860),
    d = n(111028),
    u = n(977258),
    m = n(45966),
    h = n(473403),
    g = n(454585),
    x = n(323502),
    p = n(958832),
    f = n(324067),
    C = n(984933),
    v = n(259580),
    _ = n(999382),
    N = n(743475),
    I = n(889369),
    T = n(570961),
    j = n(208665),
    b = n(868814),
    S = n(974513),
    E = n(2348),
    R = n(353890),
    y = n(716130),
    Z = n(388032),
    A = n(152623);
function L(e) {
    let { guild: t } = e,
        l = (0, s.e7)([m.Z], () => m.Z.getEnabled(t.id)),
        a = (0, s.e7)([p.Z], () => p.Z.hasFetched(t.id)),
        c = (0, b.Z)(t),
        f = (0, s.e7)([I.Z], () => I.Z.editedDefaultChannelIds),
        C = c.filter((e) => !f.has(e.id)),
        [v, _] = r.useState(!1);
    r.useEffect(() => {
        !a && !l && (0, x.S)(t.id);
    }, [t.id, a, l]);
    let T = (e) => {
        (0, o.openModalLazy)(async () => {
            let { default: r } = await n.e('35641').then(n.bind(n, 89216));
            return (n) =>
                (0, i.jsx)(r, {
                    ...n,
                    guildId: t.id,
                    startingChannelId: e
                });
        });
    };
    return v || 0 === C.length
        ? null
        : (0, i.jsxs)('div', {
              className: A.recommendations,
              children: [
                  (0, i.jsx)(o.Text, {
                      variant: 'text-md/medium',
                      color: 'header-primary',
                      children: Z.intl.string(Z.t.NN7rDw)
                  }),
                  (0, i.jsxs)('div', {
                      className: A.recsSubheader,
                      children: [
                          (0, i.jsx)(o.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              children: Z.intl.string(Z.t['3Uuql5'])
                          }),
                          (0, i.jsxs)(o.Clickable, {
                              className: A.dismissAll,
                              onClick: () => _(!0),
                              children: [
                                  (0, i.jsx)(o.CheckmarkLargeIcon, {
                                      size: 'xxs',
                                      color: 'currentColor',
                                      className: A.checkmark
                                  }),
                                  (0, i.jsx)(o.Text, {
                                      className: A.dismissAllText,
                                      variant: 'text-xs/medium',
                                      color: 'text-brand',
                                      children: Z.intl.string(Z.t.ZC3PJy)
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: A.recommendedChannels,
                      children: C.map((e, n) =>
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsxs)('div', {
                                      className: A.channelRow,
                                      children: [
                                          (0, i.jsxs)('div', {
                                              className: A.channelInfo,
                                              children: [
                                                  (0, i.jsxs)('div', {
                                                      className: A.channelName,
                                                      children: [
                                                          (0, i.jsx)(h._, {
                                                              channel: e,
                                                              guild: t
                                                          }),
                                                          (0, i.jsx)(d.Z, {
                                                              className: A.__invalid_name,
                                                              children: (0, i.jsx)(o.Text, {
                                                                  className: A.__invalid_channelText,
                                                                  variant: 'text-md/medium',
                                                                  lineClamp: 1,
                                                                  color: 'text-normal',
                                                                  children: e.name
                                                              })
                                                          })
                                                      ]
                                                  }),
                                                  null != e.topic && e.topic.length > 0
                                                      ? (0, i.jsx)(
                                                            d.Z,
                                                            {
                                                                children: (0, i.jsx)(o.Text, {
                                                                    className: A.topic,
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
                                              ? (0, i.jsx)(o.Button, {
                                                    color: o.Button.Colors.BRAND,
                                                    size: o.Button.Sizes.SMALL,
                                                    className: A.addChannelCTA,
                                                    onClick: () => (0, N.pt)(e.id),
                                                    children: Z.intl.string(Z.t.OYkgVl)
                                                })
                                              : (0, i.jsxs)(o.Button, {
                                                    look: o.Button.Looks.OUTLINED,
                                                    color: o.Button.Colors.PRIMARY,
                                                    className: A.lockedPill,
                                                    innerClassName: A.lockedPillInner,
                                                    onClick: () => T(e.id),
                                                    children: [
                                                        (0, i.jsx)(o.LockIcon, {
                                                            size: 'xs',
                                                            color: 'currentColor'
                                                        }),
                                                        (0, i.jsx)(o.Text, {
                                                            variant: 'text-sm/medium',
                                                            children: Z.intl.string(Z.t.zA9d1N)
                                                        })
                                                    ]
                                                })
                                      ]
                                  }),
                                  n < C.length - 1 ? (0, i.jsx)('div', { className: A.separator }) : null
                              ]
                          })
                      )
                  }),
                  (0, i.jsx)('div', { className: A.largeSeparator })
              ]
          });
}
function D(e) {
    let { saveOnClose: t = !1 } = e,
        n = (0, s.e7)([_.Z], () => _.Z.getGuild()),
        l = (0, s.e7)([m.Z], () => m.Z.isLoading()),
        c = (0, s.e7)([C.ZP], () => C.ZP.getChannels(null == n ? void 0 : n.id)),
        d = (0, s.e7)([f.Z], () => f.Z.getCategories(null == n ? void 0 : n.id)),
        u = (0, s.e7)([j.Z], () => j.Z.advancedMode),
        h = r.useRef(null),
        [g, x] = r.useState(!1),
        p = r.useRef(n);
    return (r.useEffect(() => {
        p.current = n;
    }),
    r.useEffect(() => {
        if (t) {
            let { current: e } = p;
            return () => {
                null != e &&
                    (0, N.DO)(e)
                        .then(() => {
                            u && (0, T.rS)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                        })
                        .catch(() => {});
            };
        }
    }, [t, u]),
    null == n)
        ? null
        : l
          ? (0, i.jsx)(o.Spinner, {})
          : (0, i.jsxs)('div', {
                className: A.columns,
                children: [
                    (0, i.jsxs)('div', {
                        className: A.channelBrowser,
                        children: [
                            (0, i.jsx)(o.Clickable, {
                                className: A.collapseButton,
                                onClick: () => x((e) => !e),
                                children: (0, i.jsx)(v.Z, {
                                    direction: g ? v.Z.Directions.DOWN : v.Z.Directions.UP,
                                    height: 16,
                                    width: 16
                                })
                            }),
                            (0, i.jsx)(o.Heading, {
                                className: A.header,
                                variant: 'heading-lg/extrabold',
                                children: Z.intl.string(Z.t['4GSygo'])
                            }),
                            (0, i.jsx)(o.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: Z.intl.string(Z.t.Kq7FAQ)
                            }),
                            (0, i.jsx)(S.Wu, {
                                className: A.advancedModeToggle,
                                guildId: n.id
                            }),
                            g
                                ? null
                                : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(L, { guild: n }),
                                          (0, i.jsx)(E.Z, {
                                              className: a()(A.channelBrowserOuter),
                                              guild: n,
                                              categories: d,
                                              channels: c,
                                              hasSidebar: !1
                                          })
                                      ]
                                  }),
                            u &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)('div', { className: A.largeSeparator }),
                                        (0, i.jsx)(o.Heading, {
                                            className: A.prejoinHeader,
                                            variant: 'heading-lg/extrabold',
                                            children: Z.intl.string(Z.t.g2Rnpa)
                                        }),
                                        (0, i.jsx)(o.Text, {
                                            className: A.prejoinSubHeader,
                                            variant: 'text-sm/normal',
                                            color: 'header-secondary',
                                            children: Z.intl.string(Z.t.bLDQ1d)
                                        }),
                                        (0, i.jsx)('div', {
                                            ref: h,
                                            className: A.advancedModeQuestions,
                                            children: (0, i.jsx)(y.Z, {
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
                    (0, i.jsx)(R.Z, {
                        guild: n,
                        scrollToQuestions: () => {
                            null != h.current && h.current.scrollIntoView({ behavior: 'smooth' });
                        }
                    })
                ]
            });
}
function O() {
    let e = (0, s.e7)([_.Z], () => _.Z.getProps().guild),
        t = (0, s.e7)([I.Z], () => I.Z.submitting),
        n = (0, s.e7)([j.Z], () => j.Z.advancedMode);
    return null == e
        ? null
        : (0, i.jsx)(c.Z, {
              onSave: () => {
                  (0, N.DO)(e)
                      .then(() => {
                          n && (0, T.rS)(e, { ignoreDefaultPrompt: !0 }).catch(() => {});
                      })
                      .catch(() => {});
              },
              onReset: N.BG,
              submitting: t,
              onSaveText: Z.intl.string(Z.t.R3BPHx)
          });
}
