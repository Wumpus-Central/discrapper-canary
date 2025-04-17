n.d(t, {
    P: () => w,
    Qo: () => Z,
    ZP: () => P,
    kw: () => A,
    rj: () => T
});
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(91192),
    a = n(442837),
    c = n(481060),
    u = n(211739),
    d = n(239091),
    h = n(146773),
    p = n(82295),
    f = n(111028),
    g = n(540059),
    m = n(680089),
    b = n(430824),
    _ = n(496675),
    y = n(9156),
    v = n(203818),
    O = n(438144),
    C = n(981631),
    S = n(388032),
    j = n(585523);
function E(e) {
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
function x(e, t) {
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
function N(e) {
    e.stopPropagation();
}
let I = i.memo(function (e) {
        let t,
            { channel: l, connectChannelDragSource: h, connectChannelDropTarget: v, disableManageChannels: O, position: I, sortingPosition: P, hideIcon: w, children: Z } = e,
            T = (0, g.Q3)('CategoryChannel'),
            A = (0, a.e7)([y.ZP], () => y.ZP.isChannelMuted(l.getGuildId(), l.id)),
            R = (0, a.e7)([m.Z], () => m.Z.isCollapsed(l.id)),
            D = (0, a.e7)([_.Z], () => _.Z.can(C.Plq.MANAGE_CHANNELS, l));
        t = null != P ? (I > P ? j.containerDragAfter : j.containerDragBefore) : j.containerDefault;
        let L = i.useCallback(() => {
                R ? (0, u.mJ)(l.id) : (0, u.c4)(l.id);
            }, [l.id, R]),
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
                                        x(E({}, n), {
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
                let e = l.type === C.d4z.GUILD_CATEGORY ? null : l.type,
                    t = l.getGuildId();
                null != t &&
                    (0, c.ZDy)(async () => {
                        let { default: i } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                x(E({}, n), {
                                    channelType: e,
                                    guildId: t,
                                    categoryId: 'null' !== l.id ? l.id : null
                                })
                            );
                    });
            }, [l]),
            U = (0, s.JA)(l.id),
            { role: G, tabIndex: B } = U,
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
            })(U, ['role', 'tabIndex']),
            V = i.useRef(null),
            H = i.useRef(null),
            F = (0, r.jsxs)('li', {
                className: t,
                'data-dnd-name': l.name,
                children: [
                    (0, r.jsx)(c.tEY, {
                        focusTarget: V,
                        ringTarget: H,
                        offset: {
                            left: 4,
                            right: 4
                        },
                        children: (0, r.jsxs)('div', {
                            ref: H,
                            className: o()(j.iconVisibility, j.wrapper, {
                                [j.collapsed]: R,
                                [j.muted]: A,
                                [j.clickable]: !0
                            }),
                            onContextMenu: k,
                            children: [
                                (0, r.jsxs)(
                                    c.P3F,
                                    x(
                                        E(
                                            {
                                                innerRef: V,
                                                className: j.mainContent,
                                                tabIndex: B
                                            },
                                            W
                                        ),
                                        {
                                            onClick: L,
                                            'aria-label': S.NW.formatToPlainString(S.t.y5l3Jy, { categoryName: l.name }),
                                            'aria-expanded': !R,
                                            focusProps: { enabled: !1 },
                                            children: [
                                                T || w
                                                    ? null
                                                    : (0, r.jsx)(c.CJ0, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: j.icon
                                                      }),
                                                (0, r.jsx)(p.Z, {
                                                    className: j.name,
                                                    children: (0, r.jsx)(f.Z, { children: l.name })
                                                }),
                                                T && !w
                                                    ? (0, r.jsx)(c.CJ0, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: j.icon
                                                      })
                                                    : null
                                            ]
                                        }
                                    )
                                ),
                                (0, r.jsx)('div', {
                                    onClick: N,
                                    className: j.children,
                                    children:
                                        D && !O
                                            ? (0, r.jsx)(c.ua7, {
                                                  text: S.NW.string(S.t['fUYU+v']),
                                                  children: (e) => {
                                                      let { onMouseEnter: t, onMouseLeave: n } = e;
                                                      return (0, r.jsx)(c.zxk, {
                                                          'aria-label': S.NW.string(S.t['fUYU+v']),
                                                          look: c.zxk.Looks.BLANK,
                                                          size: c.zxk.Sizes.NONE,
                                                          className: o()(j.addButton, j.forceVisible),
                                                          onClick: M,
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
                                                          children: T
                                                              ? (0, r.jsx)(c.BRu, {
                                                                    size: 'xs',
                                                                    color: 'currentColor',
                                                                    className: j.addButtonIcon
                                                                })
                                                              : (0, r.jsx)(c.qJs, {
                                                                    size: 'sm',
                                                                    color: 'currentColor',
                                                                    className: j.addButtonIcon
                                                                })
                                                      });
                                                  }
                                              })
                                            : null
                                })
                            ]
                        })
                    }),
                    Z
                ]
            });
        return null != v && null != h ? v(h(F)) : F;
    }),
    P = (0, h.B)(I),
    w = i.memo(function (e) {
        let { name: t, onDismiss: n, className: i } = e;
        return (0, r.jsx)('li', {
            className: o()(i, j.containerDefault),
            children: (0, r.jsxs)('div', {
                className: o()(j.iconVisibility, j.wrapperStatic),
                children: [
                    (0, r.jsx)('div', {
                        className: j.mainContent,
                        children: (0, r.jsx)(p.Z, {
                            className: j.name,
                            children: (0, r.jsx)(f.Z, { children: t })
                        })
                    }),
                    null != n
                        ? (0, r.jsx)(c.DY3, {
                              text: S.NW.string(S.t['5qNmsb']),
                              className: j.dismissWrapper,
                              children: (0, r.jsx)(c.P3F, {
                                  className: j.dismissButton,
                                  onClick: n,
                                  children: (0, r.jsx)(c.k$p, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: j.dismiss
                                  })
                              })
                          })
                        : null
                ]
            })
        });
    }),
    Z = i.memo(function (e) {
        let { category: t } = e,
            n = (0, a.e7)([v.Z], () => v.Z.isVoiceCategoryCollapsed(t.guild.id)),
            l = (0, g.Q3)('VoiceChannelCategoryButton'),
            o = i.useCallback(() => {
                n ? (0, O.s)(t.guild.id) : (0, O.M)(t.guild.id);
            }, [t.guild.id, n]);
        return l
            ? (0, r.jsxs)(c.zxk, {
                  look: c.zxk.Looks.FILLED,
                  color: c.zxk.Colors.PRIMARY,
                  className: j.refreshVoiceChannelsButton,
                  innerClassName: j.refreshVoiceChannelsButtonInner,
                  onClick: o,
                  children: [
                      (0, r.jsx)(c.gj8, {
                          size: 'xs',
                          color: 'currentColor',
                          className: j.voiceChannelsToggleIcon
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: 'text-sm/medium',
                          children: n ? S.NW.string(S.t['/eB9Bg']) : S.NW.string(S.t.Q2gPWl)
                      })
                  ]
              })
            : (0, r.jsxs)(c.P3F, {
                  className: j.voiceChannelsButton,
                  onClick: o,
                  children: [
                      (0, r.jsx)(c.gj8, {
                          size: 'xs',
                          color: 'currentColor',
                          className: j.voiceChannelsToggleIcon
                      }),
                      (0, r.jsx)(c.Text, {
                          variant: 'text-sm/medium',
                          children: n ? S.NW.string(S.t['/eB9Bg']) : S.NW.string(S.t.Q2gPWl)
                      })
                  ]
              });
    }),
    T = i.memo(function (e) {
        let { category: t, channel: n } = e,
            i = (0, a.e7)([v.Z], () => v.Z.isVoiceCategoryCollapsed(t.guild.id));
        return i || null == n || n.record.type === C.d4z.GUILD_CATEGORY
            ? i
                ? (0, r.jsx)('li', {
                      className: j.containerDefault,
                      children: (0, r.jsx)('div', {
                          className: o()(j.iconVisibility, j.wrapperStatic),
                          children: (0, r.jsx)(p.Z, {
                              className: j.name,
                              children: (0, r.jsx)(f.Z, { children: S.NW.string(S.t['V/u9Dw']) })
                          })
                      })
                  })
                : null
            : (0, r.jsx)('div', { style: { height: 16 } });
    }),
    A = i.memo(function (e) {
        let { channel: t } = e;
        return (0, r.jsx)('li', {
            className: j.containerDefault,
            children: (0, r.jsx)('div', {
                className: o()(j.iconVisibility, j.wrapperStatic),
                children: (0, r.jsx)(p.Z, {
                    className: j.name,
                    children: (0, r.jsx)(f.Z, { children: t.name })
                })
            })
        });
    });
