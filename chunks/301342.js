n.d(t, {
    P: () => N,
    Qo: () => w,
    ZP: () => P,
    kw: () => T,
    rj: () => Z
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(211739),
    d = n(239091),
    h = n(146773),
    p = n(82295),
    f = n(111028),
    g = n(680089),
    m = n(430824),
    b = n(496675),
    _ = n(9156),
    O = n(203818),
    y = n(438144),
    v = n(981631),
    C = n(388032),
    j = n(585523);
function S(e) {
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
}
function E(e, t) {
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
function x(e) {
    e.stopPropagation();
}
let I = i.memo(function (e) {
        let t,
            { channel: l, connectChannelDragSource: h, connectChannelDropTarget: O, disableManageChannels: y, position: I, sortingPosition: P, hideIcon: N, children: w } = e,
            Z = (0, s.e7)([_.ZP], () => _.ZP.isChannelMuted(l.getGuildId(), l.id)),
            T = (0, s.e7)([g.Z], () => g.Z.isCollapsed(l.id)),
            A = (0, s.e7)([b.Z], () => b.Z.can(v.Plq.MANAGE_CHANNELS, l));
        t = null != P ? (I > P ? j.containerDragAfter : j.containerDragBefore) : j.containerDefault;
        let R = i.useCallback(() => {
                T ? (0, u.mJ)(l.id) : (0, u.c4)(l.id);
            }, [l.id, T]),
            D = i.useCallback(
                (e) => {
                    if ('null' !== l.id) {
                        let t = m.Z.getGuild(l.getGuildId());
                        null != t &&
                            (0, d.jW)(e, async () => {
                                let { default: e } = await Promise.all([n.e('8965'), n.e('14280')]).then(n.bind(n, 139035));
                                return (n) =>
                                    (0, r.jsx)(
                                        e,
                                        E(S({}, n), {
                                            channel: l,
                                            guild: t
                                        })
                                    );
                            });
                    }
                },
                [l]
            ),
            L = i.useCallback(() => {
                let e = l.type === v.d4z.GUILD_CATEGORY ? null : l.type,
                    t = l.getGuildId();
                null != t &&
                    (0, c.ZDy)(async () => {
                        let { default: i } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                E(S({}, n), {
                                    channelType: e,
                                    guildId: t,
                                    categoryId: 'null' !== l.id ? l.id : null
                                })
                            );
                    });
            }, [l]),
            M = (0, a.JA)(l.id),
            { role: k, tabIndex: U } = M,
            G = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(M, ['role', 'tabIndex']),
            B = i.useRef(null),
            F = i.useRef(null),
            V = (0, r.jsxs)('li', {
                className: t,
                'data-dnd-name': l.name,
                children: [
                    (0, r.jsx)(c.tEY, {
                        focusTarget: B,
                        ringTarget: F,
                        offset: {
                            left: 4,
                            right: 4
                        },
                        children: (0, r.jsxs)('div', {
                            ref: F,
                            className: o()(j.iconVisibility, j.wrapper, {
                                [j.collapsed]: T,
                                [j.muted]: Z,
                                [j.clickable]: !0
                            }),
                            onContextMenu: D,
                            children: [
                                (0, r.jsxs)(
                                    c.P3F,
                                    E(
                                        S(
                                            {
                                                innerRef: B,
                                                className: j.mainContent,
                                                tabIndex: U
                                            },
                                            G
                                        ),
                                        {
                                            onClick: R,
                                            'aria-label': C.intl.formatToPlainString(C.t.y5l3Jy, { categoryName: l.name }),
                                            'aria-expanded': !T,
                                            focusProps: { enabled: !1 },
                                            children: [
                                                (0, r.jsx)(p.Z, {
                                                    className: j.name,
                                                    children: (0, r.jsx)(f.Z, { children: l.name })
                                                }),
                                                N
                                                    ? null
                                                    : (0, r.jsx)(c.CJ0, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: j.icon
                                                      })
                                            ]
                                        }
                                    )
                                ),
                                (0, r.jsx)('div', {
                                    onClick: x,
                                    className: j.children,
                                    children:
                                        A && !y
                                            ? (0, r.jsx)(c.ua7, {
                                                  text: C.intl.string(C.t['fUYU+v']),
                                                  children: (e) => {
                                                      let { onMouseEnter: t, onMouseLeave: n } = e;
                                                      return (0, r.jsx)(c.zxk, {
                                                          'aria-label': C.intl.string(C.t['fUYU+v']),
                                                          look: c.zxk.Looks.BLANK,
                                                          size: c.zxk.Sizes.NONE,
                                                          className: o()(j.addButton, j.forceVisible),
                                                          onClick: L,
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
                                                          children: (0, r.jsx)(c.BRu, {
                                                              size: 'xs',
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
                    w
                ]
            });
        return null != O && null != h ? O(h(V)) : V;
    }),
    P = (0, h.B)(I),
    N = i.memo(function (e) {
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
                              text: C.intl.string(C.t['5qNmsb']),
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
    w = i.memo(function (e) {
        let { category: t } = e,
            n = (0, s.e7)([O.Z], () => O.Z.isVoiceCategoryCollapsed(t.guild.id)),
            l = i.useCallback(() => {
                n ? (0, y.s)(t.guild.id) : (0, y.M)(t.guild.id);
            }, [t.guild.id, n]);
        return (0, r.jsxs)(c.zxk, {
            look: c.zxk.Looks.FILLED,
            color: c.zxk.Colors.PRIMARY,
            className: j.refreshVoiceChannelsButton,
            innerClassName: j.refreshVoiceChannelsButtonInner,
            onClick: l,
            children: [
                (0, r.jsx)(c.gj8, {
                    size: 'xs',
                    color: 'currentColor',
                    className: j.voiceChannelsToggleIcon
                }),
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    children: n ? C.intl.string(C.t['/eB9Bg']) : C.intl.string(C.t.Q2gPWl)
                })
            ]
        });
    }),
    Z = i.memo(function (e) {
        let { category: t, channel: n } = e,
            i = (0, s.e7)([O.Z], () => O.Z.isVoiceCategoryCollapsed(t.guild.id));
        return i || null == n || n.record.type === v.d4z.GUILD_CATEGORY
            ? i
                ? (0, r.jsx)('li', {
                      className: j.containerDefault,
                      children: (0, r.jsx)('div', {
                          className: o()(j.iconVisibility, j.wrapperStatic),
                          children: (0, r.jsx)(p.Z, {
                              className: j.name,
                              children: (0, r.jsx)(f.Z, { children: C.intl.string(C.t['V/u9Dw']) })
                          })
                      })
                  })
                : null
            : (0, r.jsx)('div', { style: { height: 16 } });
    }),
    T = i.memo(function (e) {
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
