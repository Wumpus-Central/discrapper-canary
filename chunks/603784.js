n.d(t, { Z: () => R });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(91192),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(726542),
    m = n(100527),
    g = n(933557),
    p = n(184301),
    h = n(347475),
    f = n(210887),
    b = n(598077),
    x = n(699516),
    j = n(594174),
    N = n(259580),
    _ = n(51144),
    v = n(426563),
    C = n(909746),
    O = n(501801),
    y = n(981631),
    I = n(388032),
    E = n(677234);
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
        { log: i, className: s, expanded: o, guildId: f, guild: _, onChannelContextMenu: w, onContentClick: R, onHeaderClick: Z, onTargetContextMenu: D, onUserContextMenu: A, theme: k } = e,
        W = (function () {
            let { changes: e } = i;
            return (i.actionType !== y.vB8.DELETE || i.action === y.rsA.MEMBER_BAN_ADD || i.action === y.rsA.MEMBER_KICK || i.action === y.rsA.MEMBER_PRUNE) && null != e && e.some((e) => !(0, O.xO)(i, e));
        })(),
        L = E.headerDefault;
    o ? (L = E.headerExpanded) : W && (L = E.headerClickable);
    let M = i.timestampStart.calendar(),
        G = i.timestampEnd.calendar();
    n =
        M === G
            ? (0, r.jsx)(d.Text, {
                  className: E.timestamp,
                  variant: 'text-sm/normal',
                  children: M
              })
            : (0, r.jsxs)(d.Text, {
                  className: E.timestamp,
                  variant: 'text-sm/normal',
                  children: [M, '\u2014', G]
              });
    let U = W ? Z : y.dG4;
    return (0, r.jsx)(l.mh, {
        id: i.id,
        children: (e) =>
            (0, r.jsxs)('div', {
                ref: t,
                className: a()(E.auditLog, s),
                children: [
                    (0, r.jsxs)(
                        d.P3F,
                        T(
                            S(
                                {
                                    className: L,
                                    'aria-expanded': o,
                                    onClick: U
                                },
                                e
                            ),
                            {
                                children: [
                                    (0, r.jsx)(O.mp, {
                                        action: i.action,
                                        actionType: i.actionType,
                                        targetType: i.targetType
                                    }),
                                    (function () {
                                        let {
                                            user: e,
                                            userId: t,
                                            options: { integration_type: n }
                                        } = i;
                                        if (null != e && null != t)
                                            return (0, r.jsx)(d.yRy, {
                                                preload: () => (0, p.Z)(t, e.getAvatarURL(f, 80), { guildId: f }),
                                                renderPopout: (e) =>
                                                    (0, r.jsx)(
                                                        h.Z,
                                                        T(S({}, e), {
                                                            userId: t,
                                                            guildId: f,
                                                            newAnalyticsLocations: [m.Z.AVATAR]
                                                        })
                                                    ),
                                                children: (e) => {
                                                    var t;
                                                    return (0, r.jsx)(
                                                        d.qEK,
                                                        T(S({}, e), {
                                                            onClick: (t) => {
                                                                t.stopPropagation(), e.onClick(t);
                                                            },
                                                            className: E.avatar,
                                                            src: i.action === y.rsA.AUTO_MODERATION_BLOCK_MESSAGE || i.action === y.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || i.action === y.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || i.action === y.rsA.AUTO_MODERATION_QUARANTINE_USER ? (0, v.j)() : null == (t = i.user) ? void 0 : t.getAvatarURL(f, 40),
                                                            'aria-hidden': !0,
                                                            size: d.EFr.SIZE_40
                                                        })
                                                    );
                                                }
                                            });
                                        if (null != n) {
                                            let e = u.Z.get(n);
                                            if (null != e) {
                                                let t = (0, c.wj)(k) ? e.icon.darkSVG : e.icon.lightSVG;
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
                                                    let { user: e, target: t, options: n } = i,
                                                        s = C.N5(i);
                                                    return null != s
                                                        ? (0, r.jsx)('div', {
                                                              className: E.overflowEllipsis,
                                                              children: I.NW.format(s, {
                                                                  user: e,
                                                                  target: t.toString(),
                                                                  userHook: (e, t) => {
                                                                      if (null != i.user)
                                                                          return (0, r.jsx)(
                                                                              P,
                                                                              {
                                                                                  user: i.user,
                                                                                  onContextMenu: A
                                                                              },
                                                                              t
                                                                          );
                                                                      if (null != i.options.integration_type) {
                                                                          var n;
                                                                          let e = u.Z.get(i.options.integration_type);
                                                                          return null != (n = null == e ? void 0 : e.name) ? n : I.NW.string(I.t['n+olu7']);
                                                                      }
                                                                      return I.NW.string(I.t['30mdIy']);
                                                                  },
                                                                  targetHook: (e, t) =>
                                                                      i.targetType === y.KFR.USER && i.target instanceof b.Z
                                                                          ? (0, r.jsx)(
                                                                                P,
                                                                                {
                                                                                    user: i.target,
                                                                                    onContextMenu: D
                                                                                },
                                                                                t
                                                                            )
                                                                          : (0, r.jsx)(
                                                                                'span',
                                                                                {
                                                                                    onContextMenu: D,
                                                                                    children: e
                                                                                },
                                                                                t
                                                                            ),
                                                                  count: n.count,
                                                                  channel: null == n.channel || 'string' == typeof n.channel ? n.channel : (0, g.F6)(n.channel, j.default, x.Z, !0),
                                                                  channelHook: (e, t) =>
                                                                      (0, r.jsx)(
                                                                          'span',
                                                                          {
                                                                              onContextMenu: w,
                                                                              children: e
                                                                          },
                                                                          t
                                                                      ),
                                                                  subtarget: n.subtarget
                                                              })
                                                          })
                                                        : null;
                                                })()
                                            }),
                                            n
                                        ]
                                    }),
                                    W
                                        ? (0, r.jsx)(N.Z, {
                                              className: E.expand,
                                              foreground: E.expandForeground,
                                              expanded: o,
                                              'aria-hidden': !0
                                          })
                                        : null
                                ]
                            }
                        )
                    ),
                    o ? (0, r.jsx)('div', { className: E.divider }) : null,
                    o && null != _
                        ? (0, r.jsx)(O.tP, {
                              log: i,
                              guild: _,
                              onContentClick: R
                          })
                        : null
                ]
            })
    });
});
w.displayName = 'GuildSettingsAuditLogEntry';
let R = o.ZP.connectStores([f.Z], () => ({ theme: f.Z.theme }), { forwardRef: !0 })(w);
