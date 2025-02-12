n.d(t, {
    P: () => y,
    Qo: () => A,
    ZP: () => j,
    kw: () => P,
    rj: () => T
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(91192),
    s = n(442837),
    c = n(481060),
    d = n(211739),
    u = n(239091),
    h = n(146773),
    p = n(82295),
    m = n(111028),
    g = n(540059),
    f = n(680089),
    _ = n(430824),
    v = n(496675),
    C = n(9156),
    x = n(203818),
    Z = n(438144),
    I = n(981631),
    b = n(388032),
    S = n(894572);
function N(e) {
    e.stopPropagation();
}
let E = l.memo(function (e) {
        let t,
            { channel: r, connectChannelDragSource: h, connectChannelDropTarget: x, disableManageChannels: Z, position: E, sortingPosition: j, hideIcon: y, children: A } = e,
            T = (0, g.Q3)('CategoryChannel'),
            P = (0, s.e7)([C.ZP], () => C.ZP.isChannelMuted(r.getGuildId(), r.id)),
            w = (0, s.e7)([f.Z], () => f.Z.isCollapsed(r.id)),
            R = (0, s.e7)([v.Z], () => v.Z.can(I.Plq.MANAGE_CHANNELS, r));
        t = null != j ? (E > j ? S.containerDragAfter : S.containerDragBefore) : S.containerDefault;
        let L = l.useCallback(() => {
                w ? (0, d.mJ)(r.id) : (0, d.c4)(r.id);
            }, [r.id, w]),
            M = l.useCallback(
                (e) => {
                    if ('null' !== r.id) {
                        let t = _.Z.getGuild(r.getGuildId());
                        null != t &&
                            (0, u.jW)(e, async () => {
                                let { default: e } = await Promise.all([n.e('8965'), n.e('14280')]).then(n.bind(n, 139035));
                                return (n) =>
                                    (0, i.jsx)(e, {
                                        ...n,
                                        channel: r,
                                        guild: t
                                    });
                            });
                    }
                },
                [r]
            ),
            D = l.useCallback(() => {
                let e = r.type === I.d4z.GUILD_CATEGORY ? null : r.type,
                    t = r.getGuildId();
                null != t &&
                    (0, c.ZDy)(async () => {
                        let { default: l } = await Promise.all([n.e('45094'), n.e('20110')]).then(n.bind(n, 218613));
                        return (n) =>
                            (0, i.jsx)(l, {
                                ...n,
                                channelType: e,
                                guildId: t,
                                categoryId: 'null' !== r.id ? r.id : null
                            });
                    });
            }, [r]),
            { role: G, tabIndex: k, ...B } = (0, o.JA)(r.id),
            O = l.useRef(null),
            U = l.useRef(null),
            V = (0, i.jsxs)('li', {
                className: t,
                'data-dnd-name': r.name,
                children: [
                    (0, i.jsx)(c.tEY, {
                        focusTarget: O,
                        ringTarget: U,
                        offset: {
                            left: 4,
                            right: 4
                        },
                        children: (0, i.jsxs)('div', {
                            ref: U,
                            className: a()(S.iconVisibility, S.wrapper, {
                                [S.collapsed]: w,
                                [S.muted]: P,
                                [S.clickable]: !0
                            }),
                            onContextMenu: M,
                            children: [
                                (0, i.jsxs)(c.P3F, {
                                    innerRef: O,
                                    className: S.mainContent,
                                    tabIndex: k,
                                    ...B,
                                    onClick: L,
                                    'aria-label': b.intl.formatToPlainString(b.t.y5l3Jy, { categoryName: r.name }),
                                    'aria-expanded': !w,
                                    focusProps: { enabled: !1 },
                                    children: [
                                        T || y
                                            ? null
                                            : (0, i.jsx)(c.CJ0, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: S.icon
                                              }),
                                        (0, i.jsx)(p.Z, {
                                            className: S.name,
                                            children: (0, i.jsx)(m.Z, { children: r.name })
                                        }),
                                        T && !y
                                            ? (0, i.jsx)(c.CJ0, {
                                                  size: 'md',
                                                  color: 'currentColor',
                                                  className: S.icon
                                              })
                                            : null
                                    ]
                                }),
                                (0, i.jsx)('div', {
                                    onClick: N,
                                    className: S.children,
                                    children:
                                        R && !Z
                                            ? (0, i.jsx)(c.ua7, {
                                                  text: b.intl.string(b.t['fUYU+v']),
                                                  children: (e) => {
                                                      let { onMouseEnter: t, onMouseLeave: n } = e;
                                                      return (0, i.jsx)(c.zxk, {
                                                          'aria-label': b.intl.string(b.t['fUYU+v']),
                                                          look: c.zxk.Looks.BLANK,
                                                          size: c.zxk.Sizes.NONE,
                                                          className: a()(S.addButton, S.forceVisible),
                                                          onClick: D,
                                                          onMouseEnter: t,
                                                          onMouseLeave: n,
                                                          tabIndex: k,
                                                          focusProps: {
                                                              offset: {
                                                                  top: -3,
                                                                  right: -4,
                                                                  bottom: -3,
                                                                  left: -4
                                                              }
                                                          },
                                                          children: T
                                                              ? (0, i.jsx)(c.BRu, {
                                                                    size: 'xs',
                                                                    color: 'currentColor',
                                                                    className: S.addButtonIcon
                                                                })
                                                              : (0, i.jsx)(c.qJs, {
                                                                    size: 'sm',
                                                                    color: 'currentColor',
                                                                    className: S.addButtonIcon
                                                                })
                                                      });
                                                  }
                                              })
                                            : null
                                })
                            ]
                        })
                    }),
                    A
                ]
            });
        return null != x && null != h ? x(h(V)) : V;
    }),
    j = (0, h.B)(E),
    y = l.memo(function (e) {
        let { name: t, onDismiss: n, className: l } = e;
        return (0, i.jsx)('li', {
            className: a()(l, S.containerDefault),
            children: (0, i.jsxs)('div', {
                className: a()(S.iconVisibility, S.wrapperStatic),
                children: [
                    (0, i.jsx)('div', {
                        className: S.mainContent,
                        children: (0, i.jsx)(p.Z, {
                            className: S.name,
                            children: (0, i.jsx)(m.Z, { children: t })
                        })
                    }),
                    null != n
                        ? (0, i.jsx)(c.DY3, {
                              text: b.intl.string(b.t['5qNmsb']),
                              className: S.dismissWrapper,
                              children: (0, i.jsx)(c.P3F, {
                                  className: S.dismissButton,
                                  onClick: n,
                                  children: (0, i.jsx)(c.k$p, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: S.dismiss
                                  })
                              })
                          })
                        : null
                ]
            })
        });
    }),
    A = l.memo(function (e) {
        let { category: t } = e,
            n = (0, s.e7)([x.Z], () => x.Z.isVoiceCategoryCollapsed(t.guild.id)),
            r = (0, g.Q3)('VoiceChannelCategoryButton'),
            a = l.useCallback(() => {
                n ? (0, Z.s)(t.guild.id) : (0, Z.M)(t.guild.id);
            }, [t.guild.id, n]);
        return r
            ? (0, i.jsxs)(c.zxk, {
                  look: c.zxk.Looks.FILLED,
                  color: c.zxk.Colors.PRIMARY,
                  className: S.refreshVoiceChannelsButton,
                  innerClassName: S.refreshVoiceChannelsButtonInner,
                  onClick: a,
                  children: [
                      (0, i.jsx)(c.gj8, {
                          size: 'xs',
                          color: 'currentColor',
                          className: S.voiceChannelsToggleIcon
                      }),
                      (0, i.jsx)(c.Text, {
                          variant: 'text-sm/medium',
                          children: n ? b.intl.string(b.t['/eB9Bg']) : b.intl.string(b.t.Q2gPWl)
                      })
                  ]
              })
            : (0, i.jsxs)(c.P3F, {
                  className: S.voiceChannelsButton,
                  onClick: a,
                  children: [
                      (0, i.jsx)(c.gj8, {
                          size: 'xs',
                          color: 'currentColor',
                          className: S.voiceChannelsToggleIcon
                      }),
                      (0, i.jsx)(c.Text, {
                          variant: 'text-sm/medium',
                          children: n ? b.intl.string(b.t['/eB9Bg']) : b.intl.string(b.t.Q2gPWl)
                      })
                  ]
              });
    }),
    T = l.memo(function (e) {
        let { category: t, channel: n } = e,
            l = (0, s.e7)([x.Z], () => x.Z.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === I.d4z.GUILD_CATEGORY
            ? l
                ? (0, i.jsx)('li', {
                      className: a()(S.containerDefault),
                      children: (0, i.jsx)('div', {
                          className: a()(S.iconVisibility, S.wrapperStatic),
                          children: (0, i.jsx)(p.Z, {
                              className: S.name,
                              children: (0, i.jsx)(m.Z, { children: b.intl.string(b.t['V/u9Dw']) })
                          })
                      })
                  })
                : null
            : (0, i.jsx)('div', { style: { height: 16 } });
    }),
    P = l.memo(function (e) {
        let { channel: t } = e;
        return (0, i.jsx)('li', {
            className: a()(S.containerDefault),
            children: (0, i.jsx)('div', {
                className: a()(S.iconVisibility, S.wrapperStatic),
                children: (0, i.jsx)(p.Z, {
                    className: S.name,
                    children: (0, i.jsx)(m.Z, { children: t.name })
                })
            })
        });
    });
