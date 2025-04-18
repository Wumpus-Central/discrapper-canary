n.d(t, { Z: () => w });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(91192),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(726542),
    m = n(100527),
    g = n(933557),
    p = n(670188),
    h = n(210887),
    f = n(598077),
    x = n(699516),
    b = n(594174),
    j = n(259580),
    N = n(51144),
    _ = n(426563),
    v = n(909746),
    O = n(501801),
    C = n(981631),
    y = n(388032),
    I = n(418797);
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
function S(e, t) {
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
class T extends i.PureComponent {
    render() {
        let { user: e, onContextMenu: t } = this.props;
        return (0, r.jsxs)('span', {
            onContextMenu: t,
            className: I.userHook,
            children: [
                (0, r.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    children: N.ZP.getUserTag(e, { mode: 'username' })
                }),
                '0' !== e.discriminator &&
                    (0, r.jsxs)(d.Text, {
                        variant: 'text-xs/normal',
                        className: I.discrim,
                        children: ['#', e.discriminator]
                    })
            ]
        });
    }
}
let P = i.forwardRef((e, t) => {
    let n,
        { log: i, className: s, expanded: o, guildId: h, guild: N, onChannelContextMenu: P, onContentClick: w, onHeaderClick: R, onTargetContextMenu: Z, onUserContextMenu: D, theme: A } = e,
        k = (function () {
            let { changes: e } = i;
            return (i.actionType !== C.vB8.DELETE || i.action === C.rsA.MEMBER_BAN_ADD || i.action === C.rsA.MEMBER_KICK || i.action === C.rsA.MEMBER_PRUNE) && null != e && e.some((e) => !(0, O.xO)(i, e));
        })(),
        W = I.headerDefault;
    o ? (W = I.headerExpanded) : k && (W = I.headerClickable);
    let L = i.timestampStart.calendar(),
        M = i.timestampEnd.calendar();
    n =
        L === M
            ? (0, r.jsx)(d.Text, {
                  className: I.timestamp,
                  variant: 'text-sm/normal',
                  children: L
              })
            : (0, r.jsxs)(d.Text, {
                  className: I.timestamp,
                  variant: 'text-sm/normal',
                  children: [L, '\u2014', M]
              });
    let G = k ? R : C.dG4;
    return (0, r.jsx)(a.mh, {
        id: i.id,
        children: (e) =>
            (0, r.jsxs)('div', {
                ref: t,
                className: l()(I.auditLog, s),
                children: [
                    (0, r.jsxs)(
                        d.P3F,
                        S(
                            E(
                                {
                                    className: W,
                                    'aria-expanded': o,
                                    onClick: G
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
                                            return (0, r.jsx)(p.Z, {
                                                user: e,
                                                guildId: h,
                                                newAnalyticsLocations: [m.Z.AVATAR],
                                                children: (e) => {
                                                    var t;
                                                    return (0, r.jsx)(
                                                        d.qEK,
                                                        S(E({}, e), {
                                                            onClick: (t) => {
                                                                t.stopPropagation(), e.onClick(t);
                                                            },
                                                            className: I.avatar,
                                                            src: i.action === C.rsA.AUTO_MODERATION_BLOCK_MESSAGE || i.action === C.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || i.action === C.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || i.action === C.rsA.AUTO_MODERATION_QUARANTINE_USER ? (0, _.j)() : null == (t = i.user) ? void 0 : t.getAvatarURL(h, 40),
                                                            'aria-hidden': !0,
                                                            size: d.EFr.SIZE_40
                                                        })
                                                    );
                                                }
                                            });
                                        if (null != n) {
                                            let e = u.Z.get(n);
                                            if (null != e) {
                                                let t = (0, c.wj)(A) ? e.icon.darkSVG : e.icon.lightSVG;
                                                return (0, r.jsx)(d.qEK, {
                                                    className: I.avatar,
                                                    src: t,
                                                    'aria-hidden': !0,
                                                    size: d.EFr.SIZE_40
                                                });
                                            }
                                        }
                                        return null;
                                    })(),
                                    (0, r.jsxs)('div', {
                                        className: I.timeWrap,
                                        children: [
                                            (0, r.jsx)('div', {
                                                className: I.title,
                                                children: (function () {
                                                    let { user: e, target: t, options: n } = i,
                                                        s = v.N5(i);
                                                    return null != s
                                                        ? (0, r.jsx)('div', {
                                                              className: I.overflowEllipsis,
                                                              children: y.NW.format(s, {
                                                                  user: e,
                                                                  target: t.toString(),
                                                                  userHook: (e, t) => {
                                                                      if (null != i.user)
                                                                          return (0, r.jsx)(
                                                                              T,
                                                                              {
                                                                                  user: i.user,
                                                                                  onContextMenu: D
                                                                              },
                                                                              t
                                                                          );
                                                                      if (null != i.options.integration_type) {
                                                                          var n;
                                                                          let e = u.Z.get(i.options.integration_type);
                                                                          return null != (n = null == e ? void 0 : e.name) ? n : y.NW.string(y.t['n+olu7']);
                                                                      }
                                                                      return y.NW.string(y.t['30mdIy']);
                                                                  },
                                                                  targetHook: (e, t) =>
                                                                      i.targetType === C.KFR.USER && i.target instanceof f.Z
                                                                          ? (0, r.jsx)(
                                                                                T,
                                                                                {
                                                                                    user: i.target,
                                                                                    onContextMenu: Z
                                                                                },
                                                                                t
                                                                            )
                                                                          : (0, r.jsx)(
                                                                                'span',
                                                                                {
                                                                                    onContextMenu: Z,
                                                                                    children: e
                                                                                },
                                                                                t
                                                                            ),
                                                                  count: n.count,
                                                                  channel: null == n.channel || 'string' == typeof n.channel ? n.channel : (0, g.F6)(n.channel, b.default, x.Z, !0),
                                                                  channelHook: (e, t) =>
                                                                      (0, r.jsx)(
                                                                          'span',
                                                                          {
                                                                              onContextMenu: P,
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
                                    k
                                        ? (0, r.jsx)(j.Z, {
                                              className: I.expand,
                                              foreground: I.expandForeground,
                                              expanded: o,
                                              'aria-hidden': !0
                                          })
                                        : null
                                ]
                            }
                        )
                    ),
                    o ? (0, r.jsx)('div', { className: I.divider }) : null,
                    o && null != N
                        ? (0, r.jsx)(O.tP, {
                              log: i,
                              guild: N,
                              onContentClick: w
                          })
                        : null
                ]
            })
    });
});
P.displayName = 'GuildSettingsAuditLogEntry';
let w = o.ZP.connectStores([h.Z], () => ({ theme: h.Z.theme }), { forwardRef: !0 })(P);
