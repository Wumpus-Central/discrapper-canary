var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(91192),
    o = n(442837),
    c = n(780384),
    d = n(481060),
    u = n(726542),
    m = n(100527),
    h = n(933557),
    g = n(184301),
    x = n(347475),
    p = n(210887),
    f = n(598077),
    C = n(699516),
    v = n(594174),
    _ = n(259580),
    I = n(51144),
    N = n(426563),
    T = n(909746),
    j = n(501801),
    b = n(981631),
    S = n(388032),
    E = n(52330);
class R extends r.PureComponent {
    render() {
        let { user: e, onContextMenu: t } = this.props;
        return (0, i.jsxs)('span', {
            onContextMenu: t,
            className: E.userHook,
            children: [
                (0, i.jsx)(d.Text, {
                    variant: 'text-md/normal',
                    children: I.ZP.getUserTag(e, { mode: 'username' })
                }),
                '0' !== e.discriminator &&
                    (0, i.jsxs)(d.Text, {
                        variant: 'text-xs/normal',
                        className: E.discrim,
                        children: ['#', e.discriminator]
                    })
            ]
        });
    }
}
class y extends r.PureComponent {
    hasChangesToRender() {
        let { log: e } = this.props,
            { changes: t } = e;
        return (e.actionType !== b.vB8.DELETE || e.action === b.rsA.MEMBER_BAN_ADD || e.action === b.rsA.MEMBER_KICK || e.action === b.rsA.MEMBER_PRUNE) && null != t && t.some((t) => !(0, j.xO)(e, t));
    }
    renderTitle() {
        let { log: e, onUserContextMenu: t, onTargetContextMenu: n, onChannelContextMenu: r } = this.props,
            { user: l, target: a, options: s } = e,
            o = T.N5(e);
        return null != o
            ? (0, i.jsx)('div', {
                  className: E.overflowEllipsis,
                  children: S.intl.format(o, {
                      user: l,
                      target: a.toString(),
                      userHook: (n, r) => {
                          if (null != e.user)
                              return (0, i.jsx)(
                                  R,
                                  {
                                      user: e.user,
                                      onContextMenu: t
                                  },
                                  r
                              );
                          if (null != e.options.integration_type) {
                              var l;
                              let t = u.Z.get(e.options.integration_type);
                              return null !== (l = null == t ? void 0 : t.name) && void 0 !== l ? l : S.intl.string(S.t['n+olu7']);
                          }
                          return S.intl.string(S.t['30mdIy']);
                      },
                      targetHook: (t, r) =>
                          e.targetType === b.KFR.USER && e.target instanceof f.Z
                              ? (0, i.jsx)(
                                    R,
                                    {
                                        user: e.target,
                                        onContextMenu: n
                                    },
                                    r
                                )
                              : (0, i.jsx)(
                                    'span',
                                    {
                                        onContextMenu: n,
                                        children: t
                                    },
                                    r
                                ),
                      count: s.count,
                      channel: null == s.channel || 'string' == typeof s.channel ? s.channel : (0, h.F6)(s.channel, v.default, C.Z, !0),
                      channelHook: (e, t) =>
                          (0, i.jsx)(
                              'span',
                              {
                                  onContextMenu: r,
                                  children: e
                              },
                              t
                          ),
                      subtarget: s.subtarget
                  })
              })
            : null;
    }
    renderChangeSummary() {
        let { expanded: e, log: t, guild: n, onContentClick: r } = this.props;
        return e && null != n
            ? (0, i.jsx)(j.tP, {
                  log: t,
                  guild: n,
                  onContentClick: r
              })
            : null;
    }
    renderEntryAvatar() {
        let {
                props: { log: e, guildId: t, theme: n }
            } = this,
            {
                user: r,
                userId: l,
                options: { integration_type: a }
            } = e;
        if (null != r && null != l)
            return (0, i.jsx)(d.Popout, {
                preload: () => (0, g.Z)(l, r.getAvatarURL(t, 80), { guildId: t }),
                renderPopout: (e) =>
                    (0, i.jsx)(x.Z, {
                        ...e,
                        userId: l,
                        guildId: t,
                        newAnalyticsLocations: [m.Z.AVATAR]
                    }),
                children: (n) => {
                    var r, l, a;
                    return (0, i.jsx)(d.Avatar, {
                        ...n,
                        onClick: (e) => {
                            e.stopPropagation(), n.onClick(e);
                        },
                        className: E.avatar,
                        src: ((r = e), (l = t), r.action === b.rsA.AUTO_MODERATION_BLOCK_MESSAGE || r.action === b.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL || r.action === b.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED || r.action === b.rsA.AUTO_MODERATION_QUARANTINE_USER ? (0, N.j)() : null === (a = r.user) || void 0 === a ? void 0 : a.getAvatarURL(l, 40)),
                        'aria-hidden': !0,
                        size: d.AvatarSizes.SIZE_40
                    });
                }
            });
        if (null != a) {
            let e = u.Z.get(a);
            if (null != e) {
                let t = (0, c.wj)(n) ? e.icon.darkSVG : e.icon.lightSVG;
                return (0, i.jsx)(d.Avatar, {
                    className: E.avatar,
                    src: t,
                    'aria-hidden': !0,
                    size: d.AvatarSizes.SIZE_40
                });
            }
        }
        return null;
    }
    render() {
        let e;
        let { log: t, className: n, expanded: r, onHeaderClick: l } = this.props,
            o = this.hasChangesToRender(),
            c = E.headerDefault;
        r ? (c = E.headerExpanded) : o && (c = E.headerClickable);
        let u = t.timestampStart.calendar(),
            m = t.timestampEnd.calendar();
        e =
            u === m
                ? (0, i.jsx)(d.Text, {
                      className: E.timestamp,
                      variant: 'text-sm/normal',
                      children: u
                  })
                : (0, i.jsxs)(d.Text, {
                      className: E.timestamp,
                      variant: 'text-sm/normal',
                      children: [u, '\u2014', m]
                  });
        let h = o ? l : b.dG4;
        return (0, i.jsx)(s.mh, {
            id: t.id,
            children: (l) =>
                (0, i.jsxs)('div', {
                    className: a()(E.auditLog, n),
                    children: [
                        (0, i.jsxs)(d.Clickable, {
                            className: c,
                            'aria-expanded': r,
                            onClick: h,
                            ...l,
                            children: [
                                (0, i.jsx)(j.mp, {
                                    action: t.action,
                                    actionType: t.actionType,
                                    targetType: t.targetType
                                }),
                                this.renderEntryAvatar(),
                                (0, i.jsxs)('div', {
                                    className: E.timeWrap,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: E.title,
                                            children: this.renderTitle()
                                        }),
                                        e
                                    ]
                                }),
                                o
                                    ? (0, i.jsx)(_.Z, {
                                          className: E.expand,
                                          foreground: E.expandForeground,
                                          expanded: r,
                                          'aria-hidden': !0
                                      })
                                    : null
                            ]
                        }),
                        r ? (0, i.jsx)('div', { className: E.divider }) : null,
                        this.renderChangeSummary()
                    ]
                })
        });
    }
}
t.Z = o.ZP.connectStores([p.Z], () => ({ theme: p.Z.theme }))(y);
