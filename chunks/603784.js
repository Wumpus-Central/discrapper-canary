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
    p = n(933557),
    g = n(184301),
    h = n(347475),
    f = n(210887),
    b = n(598077),
    x = n(699516),
    j = n(594174),
    N = n(259580),
    v = n(51144),
    _ = n(426563),
    O = n(909746),
    y = n(501801),
    C = n(981631),
    I = n(388032),
    E = n(677811);
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
                    children: v.ZP.getUserTag(e, { mode: 'username' })
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
class w extends i.PureComponent {
    hasChangesToRender() {
        let { log: e } = this.props,
            { changes: t } = e;
        return (e.actionType !== C.vB8.DELETE || e.action === C.rsA.MEMBER_BAN_ADD || e.action === C.rsA.MEMBER_KICK || e.action === C.rsA.MEMBER_PRUNE) && null != t && t.some((t) => !(0, y.xO)(e, t));
    }
    renderTitle() {
        let { log: e, onUserContextMenu: t, onTargetContextMenu: n, onChannelContextMenu: i } = this.props,
            { user: s, target: a, options: l } = e,
            o = O.N5(e);
        return null != o
            ? (0, r.jsx)('div', {
                  className: E.overflowEllipsis,
                  children: I.NW.format(o, {
                      user: s,
                      target: a.toString(),
                      userHook: (n, i) => {
                          if (null != e.user)
                              return (0, r.jsx)(
                                  P,
                                  {
                                      user: e.user,
                                      onContextMenu: t
                                  },
                                  i
                              );
                          if (null != e.options.integration_type) {
                              var s;
                              let t = u.Z.get(e.options.integration_type);
                              return null !== (s = null == t ? void 0 : t.name) && void 0 !== s ? s : I.NW.string(I.t['n+olu7']);
                          }
                          return I.NW.string(I.t['30mdIy']);
                      },
                      targetHook: (t, i) =>
                          e.targetType === C.KFR.USER && e.target instanceof b.Z
                              ? (0, r.jsx)(
                                    P,
                                    {
                                        user: e.target,
                                        onContextMenu: n
                                    },
                                    i
                                )
                              : (0, r.jsx)(
                                    'span',
                                    {
                                        onContextMenu: n,
                                        children: t
                                    },
                                    i
                                ),
                      count: l.count,
                      channel: null == l.channel || 'string' == typeof l.channel ? l.channel : (0, p.F6)(l.channel, j.default, x.Z, !0),
                      channelHook: (e, t) =>
                          (0, r.jsx)(
                              'span',
                              {
                                  onContextMenu: i,
                                  children: e
                              },
                              t
                          ),
                      subtarget: l.subtarget
                  })
              })
            : null;
    }
    renderChangeSummary() {
        let { expanded: e, log: t, guild: n, onContentClick: i } = this.props;
        return e && null != n
            ? (0, r.jsx)(y.tP, {
                  log: t,
                  guild: n,
                  onContentClick: i
              })
            : null;
    }
    renderEntryAvatar() {
        let {
                props: { log: e, guildId: t, theme: n }
            } = this,
            {
                user: i,
                userId: s,
                options: { integration_type: a }
            } = e;
        if (null != i && null != s)
            return (0, r.jsx)(d.yRy, {
                preload: () => (0, g.Z)(s, i.getAvatarURL(t, 80), { guildId: t }),
                renderPopout: (e) =>
                    (0, r.jsx)(
                        h.Z,
                        T(S({}, e), {
                            userId: s,
                            guildId: t,
                            newAnalyticsLocations: [m.Z.AVATAR]
                        })
                    ),
                children: (n) => {
                    var i;
                    return (0, r.jsx)(
                        d.qEK,
                        T(S({}, n), {
                            onClick: (e) => {
                                e.stopPropagation(), n.onClick(e);
                            },
                            className: E.avatar,
                            src: e.action === C.rsA.AUTO_MODERATION_BLOCK_MESSAGE || e.action === C.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || e.action === C.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || e.action === C.rsA.AUTO_MODERATION_QUARANTINE_USER ? (0, _.j)() : null === (i = e.user) || void 0 === i ? void 0 : i.getAvatarURL(t, 40),
                            'aria-hidden': !0,
                            size: d.EFr.SIZE_40
                        })
                    );
                }
            });
        if (null != a) {
            let e = u.Z.get(a);
            if (null != e) {
                let t = (0, c.wj)(n) ? e.icon.darkSVG : e.icon.lightSVG;
                return (0, r.jsx)(d.qEK, {
                    className: E.avatar,
                    src: t,
                    'aria-hidden': !0,
                    size: d.EFr.SIZE_40
                });
            }
        }
        return null;
    }
    render() {
        let e;
        let { log: t, className: n, expanded: i, onHeaderClick: s } = this.props,
            o = this.hasChangesToRender(),
            c = E.headerDefault;
        i ? (c = E.headerExpanded) : o && (c = E.headerClickable);
        let u = t.timestampStart.calendar(),
            m = t.timestampEnd.calendar();
        e =
            u === m
                ? (0, r.jsx)(d.Text, {
                      className: E.timestamp,
                      variant: 'text-sm/normal',
                      children: u
                  })
                : (0, r.jsxs)(d.Text, {
                      className: E.timestamp,
                      variant: 'text-sm/normal',
                      children: [u, '\u2014', m]
                  });
        let p = o ? s : C.dG4;
        return (0, r.jsx)(l.mh, {
            id: t.id,
            children: (s) =>
                (0, r.jsxs)('div', {
                    className: a()(E.auditLog, n),
                    children: [
                        (0, r.jsxs)(
                            d.P3F,
                            T(
                                S(
                                    {
                                        className: c,
                                        'aria-expanded': i,
                                        onClick: p
                                    },
                                    s
                                ),
                                {
                                    children: [
                                        (0, r.jsx)(y.mp, {
                                            action: t.action,
                                            actionType: t.actionType,
                                            targetType: t.targetType
                                        }),
                                        this.renderEntryAvatar(),
                                        (0, r.jsxs)('div', {
                                            className: E.timeWrap,
                                            children: [
                                                (0, r.jsx)('div', {
                                                    className: E.title,
                                                    children: this.renderTitle()
                                                }),
                                                e
                                            ]
                                        }),
                                        o
                                            ? (0, r.jsx)(N.Z, {
                                                  className: E.expand,
                                                  foreground: E.expandForeground,
                                                  expanded: i,
                                                  'aria-hidden': !0
                                              })
                                            : null
                                    ]
                                }
                            )
                        ),
                        i ? (0, r.jsx)('div', { className: E.divider }) : null,
                        this.renderChangeSummary()
                    ]
                })
        });
    }
}
let R = o.ZP.connectStores([f.Z], () => ({ theme: f.Z.theme }))(w);
