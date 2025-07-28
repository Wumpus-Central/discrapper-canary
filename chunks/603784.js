n.d(t, { Z: () => R });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(91192),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(726542),
    m = n(100527),
    g = n(933557),
    p = n(670188),
    f = n(210887),
    h = n(598077),
    x = n(699516),
    b = n(594174),
    j = n(259580),
    v = n(411198),
    _ = n(51144),
    O = n(426563),
    y = n(909746),
    C = n(501801),
    N = n(981631),
    I = n(388032),
    E = n(677234);
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
function T(e, t) {
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
class P extends i.PureComponent {
    render() {
        let { user: e, onContextMenu: t } = this.props;
        return (0, r.jsxs)('span', {
            onContextMenu: t,
            className: E.userHook,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    children: _.ZP.getUserTag(e, { mode: 'username' })
                }),
                '0' !== e.discriminator &&
                    (0, r.jsxs)(d.Text, {
                        variant: 'text-xs/normal',
                        className: E.discrim,
                        children: ['#', e.discriminator]
                    })
            ]
        });
    }
}
let w = i.forwardRef((e, t) => {
    let n,
        { log: l, className: o, expanded: f, guildId: _, guild: w, onChannelContextMenu: R, onContentClick: Z, onHeaderClick: D, onTargetContextMenu: A, onUserContextMenu: k, theme: L } = e,
        M = i.useRef(null),
        G = (function () {
            let { changes: e } = l;
            return (l.actionType !== N.vB8.DELETE || l.action === N.rsA.MEMBER_BAN_ADD || l.action === N.rsA.MEMBER_KICK || l.action === N.rsA.MEMBER_PRUNE) && null != e && e.some((e) => !(0, C.xO)(l, e));
        })(),
        U = E.headerDefault;
    f ? (U = E.headerExpanded) : G && (U = E.headerClickable);
    let B = l.timestampStart.calendar(),
        F = l.timestampEnd.calendar();
    n =
        B === F
            ? (0, r.jsx)(d.Text, {
                  className: E.timestamp,
                  variant: 'text-sm/normal',
                  children: B
              })
            : (0, r.jsxs)(d.Text, {
                  className: E.timestamp,
                  variant: 'text-sm/normal',
                  children: [B, '\u2014', F]
              });
    let H = G ? D : N.dG4;
    return (0, r.jsx)(a.mh, {
        id: l.id,
        children: (e) =>
            (0, r.jsxs)('div', {
                ref: t,
                className: s()(E.auditLog, o),
                children: [
                    (0, r.jsxs)(
                        d.P3F,
                        T(
                            S(
                                {
                                    className: U,
                                    'aria-expanded': f,
                                    onClick: H
                                },
                                e
                            ),
                            {
                                children: [
                                    (0, r.jsx)(C.mp, {
                                        action: l.action,
                                        actionType: l.actionType,
                                        targetType: l.targetType
                                    }),
                                    (function () {
                                        let {
                                            user: e,
                                            userId: t,
                                            options: { integration_type: n }
                                        } = l;
                                        if (null != e && null != t)
                                            return (0, r.jsx)(p.Z, {
                                                targetElementRef: M,
                                                user: e,
                                                guildId: _,
                                                newAnalyticsLocations: [m.Z.AVATAR],
                                                children: (e) => {
                                                    var t;
                                                    return (0, r.jsx)(
                                                        d.qEK,
                                                        T(S({}, e), {
                                                            ref: M,
                                                            onClick: (t) => {
                                                                (t.stopPropagation(), e.onClick(t));
                                                            },
                                                            className: E.avatar,
                                                            src: l.action === N.rsA.AUTO_MODERATION_BLOCK_MESSAGE || l.action === N.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || l.action === N.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || l.action === N.rsA.AUTO_MODERATION_QUARANTINE_USER ? (0, O.j)() : null == (t = l.user) ? void 0 : t.getAvatarURL(_, 40),
                                                            'aria-hidden': !0,
                                                            size: d.EFr.SIZE_40
                                                        })
                                                    );
                                                }
                                            });
                                        if (null != n) {
                                            let e = u.Z.get(n);
                                            if (null != e) {
                                                let t = (0, c.wj)(L) ? e.icon.darkSVG : e.icon.lightSVG;
                                                return (0, r.jsx)(d.qEK, {
                                                    className: E.avatar,
                                                    src: t,
                                                    'aria-hidden': !0,
                                                    size: d.EFr.SIZE_40
                                                });
                                            }
                                        }
                                        return null;
                                    })(),
                                    (0, r.jsxs)('div', {
                                        className: E.timeWrap,
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: E.title,
                                                children: (function () {
                                                    let e,
                                                        { user: t, target: n, options: i } = l;
                                                    e = (0, v.lM)(n) ? n.name : n.toString();
                                                    let s = y.N5(l);
                                                    return null != s
                                                        ? (0, r.jsx)('div', {
                                                              className: E.overflowEllipsis,
                                                              children: I.intl.format(s, {
                                                                  user: t,
                                                                  target: e,
                                                                  userHook: (e, t) => {
                                                                      if (null != l.user)
                                                                          return (0, r.jsx)(
                                                                              P,
                                                                              {
                                                                                  user: l.user,
                                                                                  onContextMenu: k
                                                                              },
                                                                              t
                                                                          );
                                                                      if (null != l.options.integration_type) {
                                                                          var n;
                                                                          let e = u.Z.get(l.options.integration_type);
                                                                          return null != (n = null == e ? void 0 : e.name) ? n : I.intl.string(I.t['n+olu7']);
                                                                      }
                                                                      return I.intl.string(I.t['30mdIy']);
                                                                  },
                                                                  targetHook: (e, t) =>
                                                                      l.targetType === N.KFR.USER && l.target instanceof h.Z
                                                                          ? (0, r.jsx)(
                                                                                P,
                                                                                {
                                                                                    user: l.target,
                                                                                    onContextMenu: A
                                                                                },
                                                                                t
                                                                            )
                                                                          : (0, r.jsx)(
                                                                                'span',
                                                                                {
                                                                                    onContextMenu: A,
                                                                                    children: e
                                                                                },
                                                                                t
                                                                            ),
                                                                  count: i.count,
                                                                  channel: null == i.channel || 'string' == typeof i.channel ? i.channel : (0, g.F6)(i.channel, b.default, x.Z, !0),
                                                                  channelHook: (e, t) =>
                                                                      (0, r.jsx)(
                                                                          'span',
                                                                          {
                                                                              onContextMenu: R,
                                                                              children: e
                                                                          },
                                                                          t
                                                                      ),
                                                                  subtarget: i.subtarget
                                                              })
                                                          })
                                                        : null;
                                                })()
                                            }),
                                            n
                                        ]
                                    }),
                                    G
                                        ? (0, r.jsx)(j.Z, {
                                              className: E.expand,
                                              foreground: E.expandForeground,
                                              expanded: f,
                                              'aria-hidden': !0
                                          })
                                        : null
                                ]
                            }
                        )
                    ),
                    f ? (0, r.jsx)('div', { className: E.divider }) : null,
                    f && null != w
                        ? (0, r.jsx)(C.tP, {
                              log: l,
                              guild: w,
                              onContentClick: Z
                          })
                        : null
                ]
            })
    });
});
w.displayName = 'GuildSettingsAuditLogEntry';
let R = o.ZP.connectStores([f.Z], () => ({ theme: f.Z.theme }), { forwardRef: !0 })(w);
