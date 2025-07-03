n.d(t, { Z: () => w });
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
    _ = n(51144),
    v = n(426563),
    O = n(909746),
    C = n(501801),
    y = n(981631),
    N = n(388032),
    I = n(677234);
function E(e) {
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
                    children: _.ZP.getUserTag(e, { mode: 'username' })
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
        { log: l, className: o, expanded: f, guildId: _, guild: P, onChannelContextMenu: w, onContentClick: R, onHeaderClick: Z, onTargetContextMenu: D, onUserContextMenu: k, theme: A } = e,
        L = i.useRef(null),
        M = (function () {
            let { changes: e } = l;
            return (l.actionType !== y.vB8.DELETE || l.action === y.rsA.MEMBER_BAN_ADD || l.action === y.rsA.MEMBER_KICK || l.action === y.rsA.MEMBER_PRUNE) && null != e && e.some((e) => !(0, C.xO)(l, e));
        })(),
        G = I.headerDefault;
    f ? (G = I.headerExpanded) : M && (G = I.headerClickable);
    let U = l.timestampStart.calendar(),
        B = l.timestampEnd.calendar();
    n =
        U === B
            ? (0, r.jsx)(d.Text, {
                  className: I.timestamp,
                  variant: 'text-sm/normal',
                  children: U
              })
            : (0, r.jsxs)(d.Text, {
                  className: I.timestamp,
                  variant: 'text-sm/normal',
                  children: [U, '\u2014', B]
              });
    let F = M ? Z : y.dG4;
    return (0, r.jsx)(a.mh, {
        id: l.id,
        children: (e) =>
            (0, r.jsxs)('div', {
                ref: t,
                className: s()(I.auditLog, o),
                children: [
                    (0, r.jsxs)(
                        d.P3F,
                        S(
                            E(
                                {
                                    className: G,
                                    'aria-expanded': f,
                                    onClick: F
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
                                                targetElementRef: L,
                                                user: e,
                                                guildId: _,
                                                newAnalyticsLocations: [m.Z.AVATAR],
                                                children: (e) => {
                                                    var t;
                                                    return (0, r.jsx)(
                                                        d.qEK,
                                                        S(E({}, e), {
                                                            ref: L,
                                                            onClick: (t) => {
                                                                (t.stopPropagation(), e.onClick(t));
                                                            },
                                                            className: I.avatar,
                                                            src: l.action === y.rsA.AUTO_MODERATION_BLOCK_MESSAGE || l.action === y.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || l.action === y.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || l.action === y.rsA.AUTO_MODERATION_QUARANTINE_USER ? (0, v.j)() : null == (t = l.user) ? void 0 : t.getAvatarURL(_, 40),
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
                                                    let e,
                                                        { user: t, target: n, options: i } = l;
                                                    e = 'object' == typeof n && 'name' in n ? n.name : n.toString();
                                                    let s = O.N5(l);
                                                    return null != s
                                                        ? (0, r.jsx)('div', {
                                                              className: I.overflowEllipsis,
                                                              children: N.intl.format(s, {
                                                                  user: t,
                                                                  target: e,
                                                                  userHook: (e, t) => {
                                                                      if (null != l.user)
                                                                          return (0, r.jsx)(
                                                                              T,
                                                                              {
                                                                                  user: l.user,
                                                                                  onContextMenu: k
                                                                              },
                                                                              t
                                                                          );
                                                                      if (null != l.options.integration_type) {
                                                                          var n;
                                                                          let e = u.Z.get(l.options.integration_type);
                                                                          return null != (n = null == e ? void 0 : e.name) ? n : N.intl.string(N.t['n+olu7']);
                                                                      }
                                                                      return N.intl.string(N.t['30mdIy']);
                                                                  },
                                                                  targetHook: (e, t) =>
                                                                      l.targetType === y.KFR.USER && l.target instanceof h.Z
                                                                          ? (0, r.jsx)(
                                                                                T,
                                                                                {
                                                                                    user: l.target,
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
                                                                  count: i.count,
                                                                  channel: null == i.channel || 'string' == typeof i.channel ? i.channel : (0, g.F6)(i.channel, b.default, x.Z, !0),
                                                                  channelHook: (e, t) =>
                                                                      (0, r.jsx)(
                                                                          'span',
                                                                          {
                                                                              onContextMenu: w,
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
                                    M
                                        ? (0, r.jsx)(j.Z, {
                                              className: I.expand,
                                              foreground: I.expandForeground,
                                              expanded: f,
                                              'aria-hidden': !0
                                          })
                                        : null
                                ]
                            }
                        )
                    ),
                    f ? (0, r.jsx)('div', { className: I.divider }) : null,
                    f && null != P
                        ? (0, r.jsx)(C.tP, {
                              log: l,
                              guild: P,
                              onContentClick: R
                          })
                        : null
                ]
            })
    });
});
P.displayName = 'GuildSettingsAuditLogEntry';
let w = o.ZP.connectStores([f.Z], () => ({ theme: f.Z.theme }), { forwardRef: !0 })(P);
