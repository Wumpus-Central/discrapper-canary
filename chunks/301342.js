n.d(t, {
    P: function () {
        return y;
    },
    Qo: function () {
        return j;
    },
    kw: function () {
        return P;
    },
    rj: function () {
        return T;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(211739),
    d = n(239091),
    h = n(146773),
    p = n(82295),
    f = n(111028),
    m = n(540059),
    g = n(680089),
    v = n(430824),
    C = n(496675),
    x = n(9156),
    I = n(203818),
    _ = n(438144),
    Z = n(981631),
    b = n(388032),
    S = n(147903);
function N(e) {
    e.stopPropagation();
}
let E = l.memo(function (e) {
    let t,
        { channel: r, connectChannelDragSource: h, connectChannelDropTarget: I, disableManageChannels: _, position: E, sortingPosition: y, hideIcon: j, children: T } = e,
        P = (0, m.Q3)('CategoryChannel'),
        A = (0, s.e7)([x.ZP], () => x.ZP.isChannelMuted(r.getGuildId(), r.id)),
        w = (0, s.e7)([g.Z], () => g.Z.isCollapsed(r.id)),
        M = (0, s.e7)([C.Z], () => C.Z.can(Z.Plq.MANAGE_CHANNELS, r));
    t = null != y ? (E > y ? S.containerDragAfter : S.containerDragBefore) : S.containerDefault;
    let L = l.useCallback(() => {
            w ? (0, u.mJ)(r.id) : (0, u.c4)(r.id);
        }, [r.id, w]),
        R = l.useCallback(
            (e) => {
                if ('null' !== r.id) {
                    let t = v.Z.getGuild(r.getGuildId());
                    null != t &&
                        (0, d.jW)(e, async () => {
                            let { default: e } = await n.e('8965').then(n.bind(n, 139035));
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
            let e = r.type === Z.d4z.GUILD_CATEGORY ? null : r.type,
                t = r.getGuildId();
            null != t &&
                (0, c.openModalLazy)(async () => {
                    let { default: l } = await Promise.all([n.e('45094'), n.e('5506')]).then(n.bind(n, 218613));
                    return (n) =>
                        (0, i.jsx)(l, {
                            ...n,
                            channelType: e,
                            guildId: t,
                            categoryId: 'null' !== r.id ? r.id : null
                        });
                });
        }, [r]),
        { role: G, tabIndex: B, ...k } = (0, o.JA)(r.id),
        U = l.useRef(null),
        O = l.useRef(null),
        V = (0, i.jsxs)('li', {
            className: t,
            'data-dnd-name': r.name,
            children: [
                (0, i.jsx)(c.FocusRing, {
                    focusTarget: U,
                    ringTarget: O,
                    offset: {
                        left: 4,
                        right: 4
                    },
                    children: (0, i.jsxs)('div', {
                        ref: O,
                        className: a()(S.iconVisibility, S.wrapper, {
                            [S.collapsed]: w,
                            [S.muted]: A,
                            [S.clickable]: !0
                        }),
                        onContextMenu: R,
                        children: [
                            (0, i.jsxs)(c.Clickable, {
                                innerRef: U,
                                className: S.mainContent,
                                tabIndex: B,
                                ...k,
                                onClick: L,
                                'aria-label': b.intl.formatToPlainString(b.t.y5l3Jy, { categoryName: r.name }),
                                'aria-expanded': !w,
                                focusProps: { enabled: !1 },
                                children: [
                                    P || j
                                        ? null
                                        : (0, i.jsx)(c.ChevronSmallDownIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: S.icon
                                          }),
                                    (0, i.jsx)(p.Z, {
                                        className: S.name,
                                        children: (0, i.jsx)(f.Z, { children: r.name })
                                    }),
                                    P && !j
                                        ? (0, i.jsx)(c.ChevronSmallDownIcon, {
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
                                    M && !_
                                        ? (0, i.jsx)(c.Tooltip, {
                                              text: b.intl.string(b.t['fUYU+v']),
                                              children: (e) => {
                                                  let { onMouseEnter: t, onMouseLeave: n } = e;
                                                  return (0, i.jsx)(c.Button, {
                                                      'aria-label': b.intl.string(b.t['fUYU+v']),
                                                      look: c.Button.Looks.BLANK,
                                                      size: c.Button.Sizes.NONE,
                                                      className: a()(S.addButton, S.forceVisible),
                                                      onClick: D,
                                                      onMouseEnter: t,
                                                      onMouseLeave: n,
                                                      tabIndex: B,
                                                      focusProps: {
                                                          offset: {
                                                              top: -3,
                                                              right: -4,
                                                              bottom: -3,
                                                              left: -4
                                                          }
                                                      },
                                                      children: P
                                                          ? (0, i.jsx)(c.PlusMediumIcon, {
                                                                size: 'refresh_sm',
                                                                color: 'currentColor',
                                                                className: S.addButtonIcon
                                                            })
                                                          : (0, i.jsx)(c.PlusSmallIcon, {
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
                T
            ]
        });
    return null != I && null != h ? I(h(V)) : V;
});
t.ZP = (0, h.B)(E);
let y = l.memo(function (e) {
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
                            children: (0, i.jsx)(f.Z, { children: t })
                        })
                    }),
                    null != n
                        ? (0, i.jsx)(c.TooltipContainer, {
                              text: b.intl.string(b.t['5qNmsb']),
                              className: S.dismissWrapper,
                              children: (0, i.jsx)(c.Clickable, {
                                  className: S.dismissButton,
                                  onClick: n,
                                  children: (0, i.jsx)(c.CircleXIcon, {
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
    j = l.memo(function (e) {
        let { category: t } = e,
            n = (0, s.e7)([I.Z], () => I.Z.isVoiceCategoryCollapsed(t.guild.id)),
            r = (0, m.Q3)('VoiceChannelCategoryButton'),
            a = l.useCallback(() => {
                n ? (0, _.s)(t.guild.id) : (0, _.M)(t.guild.id);
            }, [t.guild.id, n]);
        return r
            ? (0, i.jsxs)(c.Button, {
                  look: c.Button.Looks.FILLED,
                  color: c.Button.Colors.PRIMARY,
                  className: S.refreshVoiceChannelsButton,
                  innerClassName: S.refreshVoiceChannelsButtonInner,
                  onClick: a,
                  children: [
                      (0, i.jsx)(c.VoiceNormalIcon, {
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
            : (0, i.jsxs)(c.Clickable, {
                  className: S.voiceChannelsButton,
                  onClick: a,
                  children: [
                      (0, i.jsx)(c.VoiceNormalIcon, {
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
            l = (0, s.e7)([I.Z], () => I.Z.isVoiceCategoryCollapsed(t.guild.id));
        return l || null == n || n.record.type === Z.d4z.GUILD_CATEGORY
            ? l
                ? (0, i.jsx)('li', {
                      className: a()(S.containerDefault),
                      children: (0, i.jsx)('div', {
                          className: a()(S.iconVisibility, S.wrapperStatic),
                          children: (0, i.jsx)(p.Z, {
                              className: S.name,
                              children: (0, i.jsx)(f.Z, { children: b.intl.string(b.t['V/u9Dw']) })
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
                    children: (0, i.jsx)(f.Z, { children: t.name })
                })
            })
        });
    });
