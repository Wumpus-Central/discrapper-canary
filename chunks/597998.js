n.d(t, {
    eJ: function () {
        return T;
    },
    nm: function () {
        return N;
    }
}),
    n(653041),
    n(789020),
    n(47120);
var i,
    l = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(481060),
    c = n(434650),
    u = n(657305),
    d = n(367907),
    m = n(194082),
    f = n(282256),
    p = n(925329),
    g = n(833858),
    h = n(223135),
    v = n(374129),
    S = n(639351),
    I = n(630388),
    _ = n(51144),
    x = n(981631),
    E = n(354459),
    C = n(927923),
    Z = n(388032),
    y = n(939214);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let T = (e) => {
        let { children: t, collapsed: n = !1, className: i } = e;
        return (0, l.jsx)('div', {
            className: s()(i, y.list, n ? y.listCollapse : y.listDefault),
            role: 'group',
            children: t
        });
    },
    A = (e) => {
        let { hangStatusActivity: t, iconClassName: n, isSelf: i } = e;
        return i && null == t
            ? (0, l.jsx)(
                  o.TooltipContainer,
                  {
                      className: y.iconSpacing,
                      text: Z.intl.string(Z.t.qstQub),
                      children: (0, l.jsx)(o.PlusLargeIcon, { className: s()(y.icon, n) })
                  },
                  'add-status'
              )
            : (0, l.jsx)(
                  o.TooltipContainer,
                  {
                      className: y.iconSpacing,
                      text: (0, g.O8)(t),
                      children: (0, l.jsx)(h.Z, {
                          hangStatusActivity: t,
                          className: s()(y.hangStatusIcon, n)
                      })
                  },
                  'hang-status'
              );
    };
function N(e) {
    let { className: t, mute: n, localMute: i, localVideoDisabled: a, serverMute: r, deaf: c, serverDeaf: d, collapsed: f, video: p, isStreaming: g, disabled: h, isWatching: _, iconClassName: b, embeddedApplication: T, otherClientSessionType: N, voicePlatform: w, hangStatusActivity: R, showHangStatus: M, isSelf: O, application: L, guildId: k, channelId: D, user: U, handleHoverHangStatus: V, handleHoverIcons: F, disconnected: W } = e;
    if (f || h) return null;
    let B = [],
        G = (0, l.jsx)(P, {
            iconClassName: b,
            mute: n,
            localMute: i,
            serverMute: r,
            deaf: c,
            serverDeaf: d
        });
    p &&
        (a
            ? B.push(
                  (0, l.jsx)(
                      o.TooltipContainer,
                      {
                          className: y.iconSpacing,
                          text: Z.intl.string(Z.t['PXMZ//']),
                          children: (0, l.jsx)(o.VideoSlashIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: s()(y.icon, b),
                              colorClass: y.strikethrough
                          })
                      },
                      'video'
                  )
              )
            : B.push(
                  (0, l.jsx)(
                      o.TooltipContainer,
                      {
                          className: y.iconSpacing,
                          text: Z.intl.string(Z.t.FlNoSU),
                          children: (0, l.jsx)(o.VideoIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: s()(y.icon, b)
                          })
                      },
                      'video'
                  )
              )),
        W &&
            B.push(
                (0, l.jsx)(
                    o.TooltipContainer,
                    {
                        className: y.iconSpacing,
                        text: Z.intl.string(Z.t.HFwRpq),
                        children: (0, l.jsx)(o.CircleWarningIcon, {
                            className: s()(y.icon, b),
                            color: o.tokens.colors.STATUS_WARNING_BACKGROUND
                        })
                    },
                    'disconnected'
                )
            ),
        null != T &&
            B.push(
                (0, l.jsx)(
                    o.TooltipContainer,
                    {
                        text: (0, u.Z)(T.name),
                        className: y.iconSpacing,
                        children: (0, l.jsx)(o.ActivitiesIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: s()(y.icon, b)
                        })
                    },
                    'activity'
                )
            ),
        N === C.YE.XBOX || w === E.wR.XBOX
            ? B.push(
                  (0, l.jsx)(
                      'div',
                      {
                          className: s()(y.iconSpacing),
                          children: (0, l.jsx)(S.Z, { className: s()(y.icon, b) })
                      },
                      'xbox'
                  )
              )
            : (N === C.YE.PLAYSTATION || w === E.wR.PLAYSTATION) &&
              B.push(
                  (0, l.jsx)(
                      'div',
                      {
                          className: s()(y.iconSpacing),
                          children: (0, l.jsx)(v.Z, { className: s()(y.icon, b) })
                      },
                      'playstation'
                  )
              ),
        g
            ? B.push(
                  (0, l.jsx)(
                      'div',
                      {
                          className: s()(y.iconSpacing, y.liveIconSpacing),
                          children: (0, l.jsx)(m.ZP, { size: m.ZP.Sizes.SMALL })
                      },
                      'stream'
                  )
              )
            : _ &&
              B.push(
                  (0, l.jsx)(
                      o.TooltipContainer,
                      {
                          className: y.iconSpacing,
                          text: Z.intl.string(Z.t.JH1SJy),
                          children: (0, l.jsx)(o.EyeIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: s()(y.icon, b)
                          })
                      },
                      'watch'
                  )
              );
    let z = null != L && !(0, I.yE)(L.flags, x.udG.EMBEDDED),
        H = null == R && z;
    return 0 !== B.length || null != G || M || H
        ? (0, l.jsxs)('div', {
              className: s()(y.icons, t),
              children: [
                  (0, l.jsxs)('div', {
                      className: y.iconGroup,
                      onMouseEnter: () => (null == F ? void 0 : F(!0)),
                      onMouseLeave: () => (null == F ? void 0 : F(!1)),
                      children: [G, B]
                  }),
                  M || H
                      ? (0, l.jsx)('div', {
                            className: y.iconGroup,
                            onMouseEnter: () => (null == V ? void 0 : V(!0)),
                            onMouseLeave: () => (null == V ? void 0 : V(!1)),
                            children: H
                                ? (0, l.jsx)(
                                      j,
                                      {
                                          application: L,
                                          iconClassName: b,
                                          guildId: k,
                                          channelId: D,
                                          userId: U.id
                                      },
                                      ''.concat(U.id, '-game')
                                  )
                                : (0, l.jsx)(A, {
                                      hangStatusActivity: R,
                                      iconClassName: b,
                                      isSelf: O
                                  })
                        })
                      : null
              ]
          })
        : null;
}
class w extends (i = a.Component) {
    renderPrioritySpeaker() {
        let { speaking: e, priority: t, collapsed: n, mute: i, serverMute: a } = this.props;
        return t && !n
            ? (0, l.jsx)(o.Tooltip, {
                  text: Z.intl.string(Z.t.BVK71t),
                  children: (t) =>
                      (0, l.jsx)('div', {
                          className: s()(y.iconPriortySpeaker, { [y.iconPriortySpeakerSpeaking]: !i && !a && e }),
                          ...t
                      })
              })
            : null;
    }
    renderAvatar() {
        let { speaking: e, user: t, size: n, avatarContainerClass: i, guildId: a } = this.props;
        return (0, l.jsx)('div', {
            className: s()(i, y.avatar, {
                [y.avatarLarge]: n === x.ipw.LARGE,
                [y.avatarSmall]: n === x.ipw.SMALL,
                [y.avatarSpeaking]: e
            }),
            style: { backgroundImage: 'url('.concat(t.getAvatarURL(a, n === x.ipw.LARGE ? 38 : 24), ')') }
        });
    }
    renderName() {
        let { nick: e, user: t, collapsed: n, speaking: i, userNameClassName: a, mute: r, serverMute: o, isGuest: c, isOverlay: u, guildId: d } = this.props,
            m = (0, l.jsxs)('div', {
                className: s()(a, {
                    [y.username]: !0,
                    [y.usernameSpeaking]: !r && !o && i
                }),
                children: [
                    null != e ? e : _.ZP.getName(t),
                    c
                        ? (0, l.jsxs)('span', {
                              className: y.guestSuffix,
                              children: ['\xA0', Z.intl.string(Z.t['pFO/Pj'])]
                          })
                        : ''
                ]
            }),
            p = {
                primaryGuild: t.primaryGuild,
                userId: t.id,
                contextGuildId: d,
                isOverlay: u,
                disableTooltip: !0,
                className: s()(y.clanTag, u && y.isOverlay),
                profileViewedAnalytics: { source: u ? x.jXE.OVERLAY : x.Sbl.VOICE_PANEL }
            };
        return !n || u
            ? (0, l.jsx)(l.Fragment, {
                  children: (0, l.jsx)(f.Z, {
                      ...p,
                      children: m
                  })
              })
            : null;
    }
    renderIcons() {
        return (0, l.jsx)(N, { ...this.props });
    }
    render() {
        let { onClick: e, onKeyDown: t, flipped: n, size: i, className: a, selected: r, disabled: c, overlap: u, 'aria-label': d, tabIndex: m } = this.props;
        return (0, l.jsx)(o.Clickable, {
            className: s()(a, {
                [y.voiceUser]: !0,
                [y.overlap]: u,
                [y.selected]: r,
                [y.clickable]: null != e,
                [y.userSmall]: i === x.ipw.SMALL,
                [y.userLarge]: i === x.ipw.LARGE,
                [y.disabled]: !r && c
            }),
            onClick: this.handleClick,
            onDoubleClick: this.handleDoubleClick,
            onContextMenu: this.handleContextMenu,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onMouseDown: this.handleMouseDown,
            onKeyDown: t,
            'aria-label': d,
            tabIndex: m,
            children: (0, l.jsxs)('div', {
                className: s()(y.content, { [y.flipped]: n }),
                children: [this.renderPrioritySpeaker(), this.renderAvatar(), this.renderName(), this.renderIcons()]
            })
        });
    }
    constructor(...e) {
        super(...e),
            b(this, 'handleClick', (e) => {
                let { onClick: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            b(this, 'handleDoubleClick', (e) => {
                let { onDoubleClick: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            b(this, 'handleContextMenu', (e) => {
                let { onContextMenu: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            b(this, 'handleMouseLeave', (e) => {
                let { onMouseLeave: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            b(this, 'handleMouseEnter', (e) => {
                let { onMouseEnter: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            b(this, 'handleMouseDown', (e) => {
                let { onMouseDown: t, user: n } = this.props;
                null == t || t(e, n);
            });
    }
}
function j(e) {
    let { application: t, iconClassName: n, guildId: i, channelId: r, userId: u } = e,
        [m, f] = a.useState(!1),
        g = (0, c.O)((e) => f(e));
    return (
        a.useEffect(() => {
            m &&
                d.ZP.trackWithMetadata(x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: r,
                    guild_id: i,
                    user_id: u
                });
        }, [t.id, r, i, u, m]),
        (0, l.jsx)(o.TooltipContainer, {
            text: Z.intl.formatToPlainString(Z.t.Sq9xJy, { game: t.name }),
            'aria-label': Z.intl.formatToPlainString(Z.t.Sq9xJy, { game: t.name }),
            className: y.iconSpacing,
            children: (0, l.jsx)('div', {
                ref: g,
                children: (0, l.jsx)(p.Z, {
                    className: s()(y.icon, n),
                    game: t,
                    size: p.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        d.ZP.trackWithMetadata(x.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
                            channel_id: r,
                            guild_id: i,
                            game_name: t.name,
                            user_id: u
                        });
                    }
                })
            })
        })
    );
}
function P(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: a, deaf: r, serverDeaf: c } = e,
        u = (0, o.useRedesignIconContext)().enabled,
        d = [];
    if (n) {
        let e;
        if (u) {
            let n;
            (n = a ? o.MicrophoneDenyIcon : i ? o.MicrophoneDenyIcon : o.MicrophoneSlashIcon),
                (e = (0, l.jsx)(n, {
                    className: s()(y.icon, t, { [y.iconServer]: a }),
                    color: 'currentColor'
                }));
        } else
            e = (0, l.jsx)(o.MicrophoneSlashIcon, {
                size: 'md',
                color: 'currentColor',
                className: s()(y.icon, t, { [y.iconServer]: a }),
                colorClass: i ? y.strikethrough : void 0
            });
        d.push(
            (0, l.jsx)(
                o.TooltipContainer,
                {
                    text: i ? Z.intl.string(Z.t.Q8Uzoa) : a ? Z.intl.string(Z.t.uLddbW) : Z.intl.string(Z.t.tjtv3N),
                    className: y.iconSpacing,
                    children: e
                },
                'mute'
            )
        );
    }
    if (c || r) {
        let e;
        if (u) {
            let n = c ? o.HeadphonesDenyIcon : o.HeadphonesSlashIcon;
            e = (0, l.jsx)(n, {
                className: s()(y.icon, t, { [y.iconServer]: c }),
                color: 'currentColor'
            });
        } else
            e = (0, l.jsx)(o.HeadphonesSlashIcon, {
                size: 'md',
                color: 'currentColor',
                className: s()(y.icon, t, { [y.iconServer]: c })
            });
        d.push(
            (0, l.jsx)(
                o.TooltipContainer,
                {
                    className: y.iconSpacing,
                    text: c ? Z.intl.string(Z.t.btxSdH) : Z.intl.string(Z.t.NjmiOD),
                    children: e
                },
                'deaf'
            )
        );
    }
    return 0 === d.length ? null : (0, l.jsx)(l.Fragment, { children: d });
}
b(w, 'defaultProps', {
    avatarContainerClass: y.avatarContainer,
    userNameClassName: y.usernameFont,
    size: x.ipw.SMALL,
    selected: !1,
    disabled: !1,
    isOverlay: !1
}),
    (t.ZP = w);
