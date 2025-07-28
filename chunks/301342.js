n.d(t, {
    P: () => w,
    Qo: () => Z,
    ZP: () => N,
    kw: () => A,
    rj: () => T
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(91192),
    s = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(211739),
    h = n(239091),
    p = n(146773),
    f = n(82295),
    g = n(111028),
    m = n(680089),
    b = n(430824),
    _ = n(496675),
    O = n(9156),
    y = n(203818),
    C = n(438144),
    v = n(981631),
    j = n(388032),
    E = n(585523);
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
function I(e) {
    e.stopPropagation();
}
let P = i.memo(function (e) {
        let t,
            { channel: l, connectChannelDragSource: p, connectChannelDropTarget: y, disableManageChannels: C, position: P, sortingPosition: N, hideIcon: w, children: Z } = e,
            T = (0, s.e7)([O.ZP], () => O.ZP.isChannelMuted(l.getGuildId(), l.id)),
            A = (0, s.e7)([m.Z], () => m.Z.isCollapsed(l.id)),
            R = (0, s.e7)([_.Z], () => _.Z.can(v.Plq.MANAGE_CHANNELS, l));
        t = null != N ? (P > N ? E.containerDragAfter : E.containerDragBefore) : E.containerDefault;
        let D = i.useCallback(() => {
                A ? (0, d.mJ)(l.id) : (0, d.c4)(l.id);
            }, [l.id, A]),
            L = i.useCallback(
                (e) => {
                    if ('null' !== l.id) {
                        let t = b.Z.getGuild(l.getGuildId());
                        null != t &&
                            (0, h.jW)(e, async () => {
                                let { default: e } = await Promise.all([n.e('8965'), n.e('14280')]).then(n.bind(n, 139035));
                                return (n) =>
                                    (0, r.jsx)(
                                        e,
                                        x(S({}, n), {
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
                let e = l.type === v.d4z.GUILD_CATEGORY ? null : l.type,
                    t = l.getGuildId();
                null != t &&
                    (0, u.ZDy)(async () => {
                        let { default: i } = await Promise.all([n.e('45094'), n.e('45822')]).then(n.bind(n, 218613));
                        return (n) =>
                            (0, r.jsx)(
                                i,
                                x(S({}, n), {
                                    channelType: e,
                                    guildId: t,
                                    categoryId: 'null' !== l.id ? l.id : null
                                })
                            );
                    });
            }, [l]),
            k = (0, a.JA)(l.id),
            { role: U, tabIndex: G } = k,
            B = (function (e, t) {
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
            })(k, ['role', 'tabIndex']),
            V = i.useRef(null),
            F = i.useRef(null),
            H = (0, r.jsxs)('li', {
                className: t,
                'data-dnd-name': l.name,
                children: [
                    (0, r.jsx)(u.tEY, {
                        focusTarget: V,
                        ringTarget: F,
                        offset: {
                            left: 4,
                            right: 4
                        },
                        children: (0, r.jsxs)('div', {
                            ref: F,
                            className: o()(E.iconVisibility, E.wrapper, {
                                [E.collapsed]: A,
                                [E.muted]: T,
                                [E.clickable]: !0
                            }),
                            onContextMenu: L,
                            children: [
                                (0, r.jsxs)(
                                    u.P3F,
                                    x(
                                        S(
                                            {
                                                innerRef: V,
                                                className: E.mainContent,
                                                tabIndex: G
                                            },
                                            B
                                        ),
                                        {
                                            onClick: D,
                                            'aria-label': j.intl.formatToPlainString(j.t.y5l3Jy, { categoryName: l.name }),
                                            'aria-expanded': !A,
                                            focusProps: { enabled: !1 },
                                            children: [
                                                (0, r.jsx)(f.Z, {
                                                    className: E.name,
                                                    children: (0, r.jsx)(g.Z, { children: l.name })
                                                }),
                                                w
                                                    ? null
                                                    : (0, r.jsx)(u.CJ0, {
                                                          size: 'md',
                                                          color: 'currentColor',
                                                          className: E.icon
                                                      })
                                            ]
                                        }
                                    )
                                ),
                                (0, r.jsx)('div', {
                                    onClick: I,
                                    className: E.children,
                                    children:
                                        R && !C
                                            ? (0, r.jsx)(u.ua7, {
                                                  text: j.intl.string(j.t['fUYU+v']),
                                                  children: (e) => {
                                                      let { onMouseEnter: t, onMouseLeave: n } = e;
                                                      return (0, r.jsx)(c.zx, {
                                                          'aria-label': j.intl.string(j.t['fUYU+v']),
                                                          look: c.zx.Looks.BLANK,
                                                          size: c.zx.Sizes.NONE,
                                                          className: o()(E.addButton, E.forceVisible),
                                                          onClick: M,
                                                          onMouseEnter: t,
                                                          onMouseLeave: n,
                                                          tabIndex: G,
                                                          focusProps: {
                                                              offset: {
                                                                  top: -3,
                                                                  right: -4,
                                                                  bottom: -3,
                                                                  left: -4
                                                              }
                                                          },
                                                          children: (0, r.jsx)(u.BRu, {
                                                              size: 'xs',
                                                              color: 'currentColor',
                                                              className: E.addButtonIcon
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
        return null != y && null != p ? y(p(H)) : H;
    }),
    N = (0, p.B)(P),
    w = i.memo(function (e) {
        let { name: t, onDismiss: n, className: i } = e;
        return (0, r.jsx)('li', {
            className: o()(i, E.containerDefault),
            children: (0, r.jsxs)('div', {
                className: o()(E.iconVisibility, E.wrapperStatic),
                children: [
                    (0, r.jsx)('div', {
                        className: E.mainContent,
                        children: (0, r.jsx)(f.Z, {
                            className: E.name,
                            children: (0, r.jsx)(g.Z, { children: t })
                        })
                    }),
                    null != n
                        ? (0, r.jsx)(u.DY3, {
                              text: j.intl.string(j.t['5qNmsb']),
                              className: E.dismissWrapper,
                              children: (0, r.jsx)(u.P3F, {
                                  className: E.dismissButton,
                                  onClick: n,
                                  children: (0, r.jsx)(u.k$p, {
                                      size: 'md',
                                      color: 'currentColor',
                                      className: E.dismiss
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
            n = (0, s.e7)([y.Z], () => y.Z.isVoiceCategoryCollapsed(t.guild.id)),
            l = i.useCallback(() => {
                n ? (0, C.s)(t.guild.id) : (0, C.M)(t.guild.id);
            }, [t.guild.id, n]);
        return (0, r.jsxs)(c.zx, {
            look: c.zx.Looks.FILLED,
            color: c.zx.Colors.PRIMARY,
            className: E.refreshVoiceChannelsButton,
            innerClassName: E.refreshVoiceChannelsButtonInner,
            onClick: l,
            children: [
                (0, r.jsx)(u.gj8, {
                    size: 'xs',
                    color: 'currentColor',
                    className: E.voiceChannelsToggleIcon
                }),
                (0, r.jsx)(u.Text, {
                    variant: 'text-sm/medium',
                    children: n ? j.intl.string(j.t['/eB9Bg']) : j.intl.string(j.t.Q2gPWl)
                })
            ]
        });
    }),
    T = i.memo(function (e) {
        let { category: t, channel: n } = e,
            i = (0, s.e7)([y.Z], () => y.Z.isVoiceCategoryCollapsed(t.guild.id));
        return i || null == n || n.record.type === v.d4z.GUILD_CATEGORY
            ? i
                ? (0, r.jsx)('li', {
                      className: E.containerDefault,
                      children: (0, r.jsx)('div', {
                          className: o()(E.iconVisibility, E.wrapperStatic),
                          children: (0, r.jsx)(f.Z, {
                              className: E.name,
                              children: (0, r.jsx)(g.Z, { children: j.intl.string(j.t['V/u9Dw']) })
                          })
                      })
                  })
                : null
            : (0, r.jsx)('div', { style: { height: 16 } });
    }),
    A = i.memo(function (e) {
        let { channel: t } = e;
        return (0, r.jsx)('li', {
            className: E.containerDefault,
            children: (0, r.jsx)('div', {
                className: o()(E.iconVisibility, E.wrapperStatic),
                children: (0, r.jsx)(f.Z, {
                    className: E.name,
                    children: (0, r.jsx)(g.Z, { children: t.name })
                })
            })
        });
    });
