n.d(t, {
    P: () => w,
    Qo: () => E,
    ZP: () => Z,
    kw: () => A,
    rj: () => T
});
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(211739),
    d = n(239091),
    p = n(146773),
    h = n(82295),
    f = n(111028),
    g = n(540059),
    m = n(680089),
    b = n(430824),
    y = n(496675),
    _ = n(9156),
    v = n(203818),
    O = n(438144),
    j = n(981631),
    x = n(388032),
    C = n(585523);
function S(e) {
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
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    e.stopPropagation();
}
let N = i.memo(function (e) {
        let t,
            { channel: l, connectChannelDragSource: p, connectChannelDropTarget: v, disableManageChannels: O, position: N, sortingPosition: Z, hideIcon: w, children: E } = e,
            T = (0, g.Q3)('CategoryChannel'),
            A = (0, s.e7)([_.ZP], () => _.ZP.isChannelMuted(l.getGuildId(), l.id)),
            D = (0, s.e7)([m.Z], () => m.Z.isCollapsed(l.id)),
            R = (0, s.e7)([y.Z], () => y.Z.can(j.Plq.MANAGE_CHANNELS, l));
        t = null != Z ? (N > Z ? C.containerDragAfter : C.containerDragBefore) : C.containerDefault;
        let L = i.useCallback(() => {
                D ? (0, u.mJ)(l.id) : (0, u.c4)(l.id);
            }, [l.id, D]),
            k = i.useCallback(
                (e) => {
                    if ('null' !== l.id) {
                        let t = b.Z.getGuild(l.getGuildId());
                        null != t &&
                            (0, d.jW)(e, async () => {
                                let { default: e } = await Promise.all([n.e('8965'), n.e('14280')]).then(n.bind(n, 139035));
                                return (n) =>
                                    (0, r.jsx)(
                                        e,
                                        P(S({}, n), {
                                            channel: l,
                                            guild: t
                                        })
                                    );
                            });
                    }
                },
                [l]
            ),
            M = i.useCallback(() => {
                let e = l.type === j.d4z.GUILD_CATEGORY ? null : l.type,
                    t = l.getGuildId();
                null != t &&
                    (0, c.ZDy)(async () => {
                        let { default: i } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                P(S({}, n), {
                                    channelType: e,
                                    guildId: t,
                                    categoryId: 'null' !== l.id ? l.id : null
                                })
                            );
                    });
            }, [l]),
            G = (0, a.JA)(l.id),
            { role: B, tabIndex: U } = G,
            W = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(G, ['role', 'tabIndex']),
            V = i.useRef(null),
            F = i.useRef(null),
            H = (0, r.jsxs)('li', {
                className: t,
                'data-dnd-name': l.name,
                children: [
                    (0, r.jsx)(c.tEY, {
                        focusTarget: V,
                        ringTarget: F,
                        offset: {
                            left: 4,
                            right: 4
                        },
                        children: (0, r.jsxs)('div', {
                            ref: F,
                            className: o()(C.iconVisibility, C.wrapper, {
                                [C.collapsed]: D,
                                [C.muted]: A,
                                [C.clickable]: !0
                            }),
                            onContextMenu: k,
                            children: [
                                (0, r.jsxs)(
                                    c.P3F,
                                    P(
                                        S(
                                            {
                                                innerRef: V,
                                                className: C.mainContent,
                                                tabIndex: U
                                            },
                                            W
                                        ),
                                        {
                                            onClick: L,
                                            'aria-label': x.NW.formatToPlainString(x.t.y5l3Jy, { categoryName: l.name }),
                                            'aria-expanded': !D,
                                            focusProps: { enabled: !1 },
                                            children: [
                                                T || w
                                                    ? null
                                                    : (0, r.jsx)(c.CJ0, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: C.icon
                                                      }),
                                                (0, r.jsx)(h.Z, {
                                                    className: C.name,
                                                    children: (0, r.jsx)(f.Z, { children: l.name })
                                                }),
                                                T && !w
                                                    ? (0, r.jsx)(c.CJ0, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: C.icon
                                                      })
                                                    : null
                                            ]
                                        }
                                    )
                                ),
                                (0, r.jsx)('div', {
                                    onClick: I,
                                    className: C.children,
                                    children:
                                        R && !O
                                            ? (0, r.jsx)(c.ua7, {
                                                  text: x.NW.string(x.t['fUYU+v']),
                                                  children: (e) => {
                                                      let { onMouseEnter: t, onMouseLeave: n } = e;
                                                      return (0, r.jsx)(c.zxk, {
                                                          'aria-label': x.NW.string(x.t['fUYU+v']),
                                                          look: c.zxk.Looks.BLANK,
                                                          size: c.zxk.Sizes.NONE,
                                                          className: o()(C.addButton, C.forceVisible),
                                                          onClick: M,
                                                          onMouseEnter: t,
                                                          onMouseLeave: n,
                                                          tabIndex: U,
                                                          focusProps: {
                                                              offset: {
                                                                  top: -3,
                                                                  right: -4,
                                                                  bottom: -3,
                                                                  left: -4
                                                              }
                                                          },
                                                          children: T
                                                              ? (0, r.jsx)(c.BRu, {
                                                                    size: 'xs',
                                                                    color: 'currentColor',
                                                                    className: C.addButtonIcon
                                                                })
                                                              : (0, r.jsx)(c.qJs, {
                                                                    size: 'sm',
                                                                    color: 'currentColor',
                                                                    className: C.addButtonIcon
                                                                })
                                                      });
                                                  }
                                              })
                                            : null
                                })
                            ]
                        })
                    }),
                    E
                ]
            });
        return null != v && null != p ? v(p(H)) : H;
    }),
    Z = (0, p.B)(N),
    w = i.memo(function (e) {
        let { name: t, onDismiss: n, className: i } = e;
        return (0, r.jsx)('li', {
            className: o()(i, C.containerDefault),
            children: (0, r.jsxs)('div', {
                className: o()(C.iconVisibility, C.wrapperStatic),
                children: [
                    (0, r.jsx)('div', {
                        className: C.mainContent,
                        children: (0, r.jsx)(h.Z, {
                            className: C.name,
                            children: (0, r.jsx)(f.Z, { children: t })
                        })
                    }),
                    null != n
                        ? (0, r.jsx)(c.DY3, {
                              text: x.NW.string(x.t['5qNmsb']),
                              className: C.dismissWrapper,
                              children: (0, r.jsx)(c.P3F, {
                                  className: C.dismissButton,
                                  onClick: n,
                                  children: (0, r.jsx)(c.k$p, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: C.dismiss
                                  })
                              })
                          })
                        : null
                ]
            })
        });
    }),
    E = i.memo(function (e) {
        let { category: t } = e,
            n = (0, s.e7)([v.Z], () => v.Z.isVoiceCategoryCollapsed(t.guild.id)),
            l = (0, g.Q3)('VoiceChannelCategoryButton'),
            o = i.useCallback(() => {
                n ? (0, O.s)(t.guild.id) : (0, O.M)(t.guild.id);
            }, [t.guild.id, n]);
        return l
            ? (0, r.jsxs)(c.zxk, {
                  look: c.zxk.Looks.FILLED,
                  color: c.zxk.Colors.PRIMARY,
                  className: C.refreshVoiceChannelsButton,
                  innerClassName: C.refreshVoiceChannelsButtonInner,
                  onClick: o,
                  children: [
                      (0, r.jsx)(c.gj8, {
                          size: 'xs',
                          color: 'currentColor',
                          className: C.voiceChannelsToggleIcon
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: 'text-sm/medium',
                          children: n ? x.NW.string(x.t['/eB9Bg']) : x.NW.string(x.t.Q2gPWl)
                      })
                  ]
              })
            : (0, r.jsxs)(c.P3F, {
                  className: C.voiceChannelsButton,
                  onClick: o,
                  children: [
                      (0, r.jsx)(c.gj8, {
                          size: 'xs',
                          color: 'currentColor',
                          className: C.voiceChannelsToggleIcon
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: 'text-sm/medium',
                          children: n ? x.NW.string(x.t['/eB9Bg']) : x.NW.string(x.t.Q2gPWl)
                      })
                  ]
              });
    }),
    T = i.memo(function (e) {
        let { category: t, channel: n } = e,
            i = (0, s.e7)([v.Z], () => v.Z.isVoiceCategoryCollapsed(t.guild.id));
        return i || null == n || n.record.type === j.d4z.GUILD_CATEGORY
            ? i
                ? (0, r.jsx)('li', {
                      className: C.containerDefault,
                      children: (0, r.jsx)('div', {
                          className: o()(C.iconVisibility, C.wrapperStatic),
                          children: (0, r.jsx)(h.Z, {
                              className: C.name,
                              children: (0, r.jsx)(f.Z, { children: x.NW.string(x.t['V/u9Dw']) })
                          })
                      })
                  })
                : null
            : (0, r.jsx)('div', { style: { height: 16 } });
    }),
    A = i.memo(function (e) {
        let { channel: t } = e;
        return (0, r.jsx)('li', {
            className: C.containerDefault,
            children: (0, r.jsx)('div', {
                className: o()(C.iconVisibility, C.wrapperStatic),
                children: (0, r.jsx)(h.Z, {
                    className: C.name,
                    children: (0, r.jsx)(f.Z, { children: t.name })
                })
            })
        });
    });
