n.d(t, { Z: () => T });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(91192),
    o = n(442837),
    c = n(780384),
    A = n(481060),
    d = n(726542),
    u = n(100527),
    g = n(933557),
    f = n(184301),
    m = n(347475),
    p = n(210887),
    h = n(598077),
    C = n(699516),
    b = n(594174),
    v = n(259580),
    x = n(51144),
    N = n(426563),
    j = n(909746),
    E = n(501801),
    I = n(981631),
    O = n(388032),
    y = n(152041);
function w(e) {
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
class B extends i.PureComponent {
    render() {
        let { user: e, onContextMenu: t } = this.props;
        return (0, r.jsxs)('span', {
            onContextMenu: t,
            className: y.userHook,
            children: [
                (0, r.jsx)(A.Text, {
                    variant: 'text-md/normal',
                    children: x.ZP.getUserTag(e, { mode: 'username' })
                }),
                '0' !== e.discriminator &&
                    (0, r.jsxs)(A.Text, {
                        variant: 'text-xs/normal',
                        className: y.discrim,
                        children: ['#', e.discriminator]
                    })
            ]
        });
    }
}
let D = i.forwardRef((e, t) => {
    let n;
    let { log: i, className: s, expanded: o, guildId: p, guild: x, onChannelContextMenu: D, onContentClick: T, onHeaderClick: S, onTargetContextMenu: L, onUserContextMenu: R, theme: Q } = e,
        Z = (function () {
            let { changes: e } = i;
            return (i.actionType !== I.vB8.DELETE || i.action === I.rsA.MEMBER_BAN_ADD || i.action === I.rsA.MEMBER_KICK || i.action === I.rsA.MEMBER_PRUNE) && null != e && e.some((e) => !(0, E.xO)(i, e));
        })(),
        W = y.headerDefault;
    o ? (W = y.headerExpanded) : Z && (W = y.headerClickable);
    let k = i.timestampStart.calendar(),
        M = i.timestampEnd.calendar();
    n =
        k === M
            ? (0, r.jsx)(A.Text, {
                  className: y.timestamp,
                  variant: 'text-sm/normal',
                  children: k
              })
            : (0, r.jsxs)(A.Text, {
                  className: y.timestamp,
                  variant: 'text-sm/normal',
                  children: [k, '\u2014', M]
              });
    let _ = Z ? S : I.dG4;
    return (0, r.jsx)(l.mh, {
        id: i.id,
        children: (e) =>
            (0, r.jsxs)('div', {
                ref: t,
                className: a()(y.auditLog, s),
                children: [
                    (0, r.jsxs)(
                        A.P3F,
                        P(
                            w(
                                {
                                    className: W,
                                    'aria-expanded': o,
                                    onClick: _
                                },
                                e
                            ),
                            {
                                children: [
                                    (0, r.jsx)(E.mp, {
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
                                            return (0, r.jsx)(A.yRy, {
                                                preload: () => (0, f.Z)(t, e.getAvatarURL(p, 80), { guildId: p }),
                                                renderPopout: (e) =>
                                                    (0, r.jsx)(
                                                        m.Z,
                                                        P(w({}, e), {
                                                            userId: t,
                                                            guildId: p,
                                                            newAnalyticsLocations: [u.Z.AVATAR]
                                                        })
                                                    ),
                                                children: (e) => {
                                                    var t;
                                                    return (0, r.jsx)(
                                                        A.qEK,
                                                        P(w({}, e), {
                                                            onClick: (t) => {
                                                                t.stopPropagation(), e.onClick(t);
                                                            },
                                                            className: y.avatar,
                                                            src: i.action === I.rsA.AUTO_MODERATION_BLOCK_MESSAGE || i.action === I.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || i.action === I.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || i.action === I.rsA.AUTO_MODERATION_QUARANTINE_USER ? (0, N.j)() : null === (t = i.user) || void 0 === t ? void 0 : t.getAvatarURL(p, 40),
                                                            'aria-hidden': !0,
                                                            size: A.EFr.SIZE_40
                                                        })
                                                    );
                                                }
                                            });
                                        if (null != n) {
                                            let e = d.Z.get(n);
                                            if (null != e) {
                                                let t = (0, c.wj)(Q) ? e.icon.darkSVG : e.icon.lightSVG;
                                                return (0, r.jsx)(A.qEK, {
                                                    className: y.avatar,
                                                    src: t,
                                                    'aria-hidden': !0,
                                                    size: A.EFr.SIZE_40
                                                });
                                            }
                                        }
                                        return null;
                                    })(),
                                    (0, r.jsxs)('div', {
                                        className: y.timeWrap,
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: y.title,
                                                children: (function () {
                                                    let { user: e, target: t, options: n } = i,
                                                        s = j.N5(i);
                                                    return null != s
                                                        ? (0, r.jsx)('div', {
                                                              className: y.overflowEllipsis,
                                                              children: O.NW.format(s, {
                                                                  user: e,
                                                                  target: t.toString(),
                                                                  userHook: (e, t) => {
                                                                      if (null != i.user)
                                                                          return (0, r.jsx)(
                                                                              B,
                                                                              {
                                                                                  user: i.user,
                                                                                  onContextMenu: R
                                                                              },
                                                                              t
                                                                          );
                                                                      if (null != i.options.integration_type) {
                                                                          var n;
                                                                          let e = d.Z.get(i.options.integration_type);
                                                                          return null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : O.NW.string(O.t['n+olu7']);
                                                                      }
                                                                      return O.NW.string(O.t['30mdIy']);
                                                                  },
                                                                  targetHook: (e, t) =>
                                                                      i.targetType === I.KFR.USER && i.target instanceof h.Z
                                                                          ? (0, r.jsx)(
                                                                                B,
                                                                                {
                                                                                    user: i.target,
                                                                                    onContextMenu: L
                                                                                },
                                                                                t
                                                                            )
                                                                          : (0, r.jsx)(
                                                                                'span',
                                                                                {
                                                                                    onContextMenu: L,
                                                                                    children: e
                                                                                },
                                                                                t
                                                                            ),
                                                                  count: n.count,
                                                                  channel: null == n.channel || 'string' == typeof n.channel ? n.channel : (0, g.F6)(n.channel, b.default, C.Z, !0),
                                                                  channelHook: (e, t) =>
                                                                      (0, r.jsx)(
                                                                          'span',
                                                                          {
                                                                              onContextMenu: D,
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
                                    Z
                                        ? (0, r.jsx)(v.Z, {
                                              className: y.expand,
                                              foreground: y.expandForeground,
                                              expanded: o,
                                              'aria-hidden': !0
                                          })
                                        : null
                                ]
                            }
                        )
                    ),
                    o ? (0, r.jsx)('div', { className: y.divider }) : null,
                    o && null != x
                        ? (0, r.jsx)(E.tP, {
                              log: i,
                              guild: x,
                              onContentClick: T
                          })
                        : null
                ]
            })
    });
});
D.displayName = 'GuildSettingsAuditLogEntry';
let T = o.ZP.connectStores([p.Z], () => ({ theme: p.Z.theme }), { forwardRef: !0 })(D);
