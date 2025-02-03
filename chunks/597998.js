n.d(t, {
    ZP: () => T,
    eJ: () => y,
    nm: () => b
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
    h = n(374129),
    g = n(639351),
    v = n(630388),
    _ = n(51144),
    I = n(981631),
    S = n(354459),
    x = n(927923),
    E = n(388032),
    C = n(939214);
function Z(e, t, n) {
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
let y = (e) => {
    let { children: t, collapsed: n = !1, className: i } = e;
    return (0, l.jsx)('div', {
        className: s()(i, C.list, n ? C.listCollapse : C.listDefault),
        role: 'group',
        children: t
    });
};
function b(e) {
    let { className: t, mute: n, localMute: i, localVideoDisabled: a, serverMute: r, deaf: c, serverDeaf: d, collapsed: f, video: p, isStreaming: _, disabled: Z, isWatching: y, iconClassName: b, embeddedApplication: N, otherClientSessionType: T, voicePlatform: P, application: j, guildId: R, channelId: k, user: L, disconnected: O } = e;
    if (f || Z) return null;
    let M = [],
        D = (0, l.jsx)(w, {
            iconClassName: b,
            mute: n,
            localMute: i,
            serverMute: r,
            deaf: c,
            serverDeaf: d
        });
    p &&
        (a
            ? M.push(
                  (0, l.jsx)(
                      o.DY3,
                      {
                          className: C.iconSpacing,
                          text: E.intl.string(E.t['PXMZ//']),
                          children: (0, l.jsx)(o.Amn, {
                              size: 'md',
                              color: 'currentColor',
                              className: s()(C.icon, b),
                              colorClass: C.strikethrough
                          })
                      },
                      'video'
                  )
              )
            : M.push(
                  (0, l.jsx)(
                      o.DY3,
                      {
                          className: C.iconSpacing,
                          text: E.intl.string(E.t.FlNoSU),
                          children: (0, l.jsx)(o.Odl, {
                              size: 'md',
                              color: 'currentColor',
                              className: s()(C.icon, b)
                          })
                      },
                      'video'
                  )
              )),
        O &&
            M.push(
                (0, l.jsx)(
                    o.DY3,
                    {
                        className: C.iconSpacing,
                        text: E.intl.string(E.t.HFwRpq),
                        children: (0, l.jsx)(o.P4T, {
                            className: s()(C.icon, b),
                            color: o.TVs.colors.STATUS_WARNING_BACKGROUND
                        })
                    },
                    'disconnected'
                )
            ),
        null != N &&
            M.push(
                (0, l.jsx)(
                    o.DY3,
                    {
                        text: (0, u.Z)(N.name),
                        className: C.iconSpacing,
                        children: (0, l.jsx)(o.nG3, {
                            size: 'md',
                            color: 'currentColor',
                            className: s()(C.icon, b)
                        })
                    },
                    'activity'
                )
            ),
        T === x.YE.XBOX || P === S.wR.XBOX
            ? M.push(
                  (0, l.jsx)(
                      'div',
                      {
                          className: s()(C.iconSpacing),
                          children: (0, l.jsx)(g.Z, { className: s()(C.icon, b) })
                      },
                      'xbox'
                  )
              )
            : (T === x.YE.PLAYSTATION || P === S.wR.PLAYSTATION) &&
              M.push(
                  (0, l.jsx)(
                      'div',
                      {
                          className: s()(C.iconSpacing),
                          children: (0, l.jsx)(h.Z, { className: s()(C.icon, b) })
                      },
                      'playstation'
                  )
              ),
        _
            ? M.push(
                  (0, l.jsx)(
                      'div',
                      {
                          className: s()(C.iconSpacing, C.liveIconSpacing),
                          children: (0, l.jsx)(m.ZP, { size: m.ZP.Sizes.SMALL })
                      },
                      'stream'
                  )
              )
            : y &&
              M.push(
                  (0, l.jsx)(
                      o.DY3,
                      {
                          className: C.iconSpacing,
                          text: E.intl.string(E.t.JH1SJy),
                          children: (0, l.jsx)(o.tEF, {
                              size: 'xs',
                              color: 'currentColor',
                              className: s()(C.icon, b)
                          })
                      },
                      'watch'
                  )
              );
    let U = null != j && !(0, v.yE)(j.flags, I.udG.EMBEDDED);
    return 0 !== M.length || null != D || U
        ? (0, l.jsxs)('div', {
              className: s()(C.icons, t),
              children: [
                  (0, l.jsxs)('div', {
                      className: C.iconGroup,
                      children: [D, M]
                  }),
                  U &&
                      (0, l.jsx)('div', {
                          className: C.iconGroup,
                          children: (0, l.jsx)(
                              A,
                              {
                                  application: j,
                                  iconClassName: b,
                                  guildId: R,
                                  channelId: k,
                                  userId: L.id
                              },
                              ''.concat(L.id, '-game')
                          )
                      })
              ]
          })
        : null;
}
class N extends (i = a.Component) {
    renderPrioritySpeaker() {
        let { speaking: e, priority: t, collapsed: n, mute: i, serverMute: a } = this.props;
        return t && !n
            ? (0, l.jsx)(o.ua7, {
                  text: E.intl.string(E.t.BVK71t),
                  children: (t) =>
                      (0, l.jsx)('div', {
                          className: s()(C.iconPriortySpeaker, { [C.iconPriortySpeakerSpeaking]: !i && !a && e }),
                          ...t
                      })
              })
            : null;
    }
    renderAvatar() {
        let { speaking: e, user: t, size: n, avatarContainerClass: i, guildId: a } = this.props;
        return (0, l.jsx)('div', {
            className: s()(i, C.avatar, {
                [C.avatarLarge]: n === I.ipw.LARGE,
                [C.avatarSmall]: n === I.ipw.SMALL,
                [C.avatarSpeaking]: e
            }),
            style: { backgroundImage: 'url('.concat(t.getAvatarURL(a, n === I.ipw.LARGE ? 38 : 24), ')') }
        });
    }
    renderName() {
        let { nick: e, user: t, collapsed: n, speaking: i, userNameClassName: a, mute: r, serverMute: o, isGuest: c, isOverlay: u, guildId: d } = this.props,
            m = (0, l.jsxs)('div', {
                className: s()(a, {
                    [C.username]: !0,
                    [C.usernameSpeaking]: !r && !o && i
                }),
                children: [
                    null != e ? e : _.ZP.getName(t),
                    c
                        ? (0, l.jsxs)('span', {
                              className: C.guestSuffix,
                              children: ['\xA0', E.intl.string(E.t['pFO/Pj'])]
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
                className: s()(C.clanTag, u && C.isOverlay),
                profileViewedAnalytics: { source: u ? I.jXE.OVERLAY : I.Sbl.VOICE_PANEL }
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
        return (0, l.jsx)(b, { ...this.props });
    }
    render() {
        let { onClick: e, onKeyDown: t, flipped: n, size: i, className: a, selected: r, disabled: c, overlap: u, 'aria-label': d, tabIndex: m, ringing: f } = this.props;
        return (0, l.jsx)(o.P3F, {
            className: s()(a, {
                [C.voiceUser]: !0,
                [C.overlap]: u,
                [C.selected]: r,
                [C.clickable]: null != e,
                [C.userSmall]: i === I.ipw.SMALL,
                [C.userLarge]: i === I.ipw.LARGE,
                [C.disabled]: !r && c,
                [C.ringing]: f
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
                className: s()(C.content, { [C.flipped]: n }),
                children: [this.renderPrioritySpeaker(), this.renderAvatar(), this.renderName(), this.renderIcons()]
            })
        });
    }
    constructor(...e) {
        super(...e),
            Z(this, 'handleClick', (e) => {
                let { onClick: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            Z(this, 'handleDoubleClick', (e) => {
                let { onDoubleClick: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            Z(this, 'handleContextMenu', (e) => {
                let { onContextMenu: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            Z(this, 'handleMouseLeave', (e) => {
                let { onMouseLeave: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            Z(this, 'handleMouseEnter', (e) => {
                let { onMouseEnter: t, user: n } = this.props;
                null == t || t(e, n);
            }),
            Z(this, 'handleMouseDown', (e) => {
                let { onMouseDown: t, user: n } = this.props;
                null == t || t(e, n);
            });
    }
}
Z(N, 'defaultProps', {
    avatarContainerClass: C.avatarContainer,
    userNameClassName: C.usernameFont,
    size: I.ipw.SMALL,
    selected: !1,
    disabled: !1,
    isOverlay: !1
});
let T = N;
function A(e) {
    let { application: t, iconClassName: n, guildId: i, channelId: r, userId: u } = e,
        [m, f] = a.useState(!1),
        h = (0, c.O)((e) => f(e));
    return (
        a.useEffect(() => {
            m &&
                d.ZP.trackWithMetadata(I.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
                    channel_id: r,
                    guild_id: i,
                    user_id: u
                });
        }, [t.id, r, i, u, m]),
        (0, l.jsx)(o.DY3, {
            text: E.intl.formatToPlainString(E.t.Sq9xJy, { game: t.name }),
            'aria-label': E.intl.formatToPlainString(E.t.Sq9xJy, { game: t.name }),
            className: C.iconSpacing,
            children: (0, l.jsx)('div', {
                ref: h,
                children: (0, l.jsx)(p.Z, {
                    className: s()(C.icon, n),
                    game: t,
                    size: p.Z.Sizes.XSMALL,
                    onMouseEnter: () => {
                        d.ZP.trackWithMetadata(I.rMx.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_HOVERED, {
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
function w(e) {
    let { iconClassName: t, mute: n, localMute: i, serverMute: a, deaf: r, serverDeaf: c } = e,
        u = (0, o.bWb)().enabled,
        d = [];
    if (n) {
        let e;
        if (u) {
            let n;
            (n = a ? o.v0G : i ? o.v0G : o.nRN),
                (e = (0, l.jsx)(n, {
                    className: s()(C.icon, t, { [C.iconServer]: a }),
                    color: 'currentColor'
                }));
        } else
            e = (0, l.jsx)(o.nRN, {
                size: 'md',
                color: 'currentColor',
                className: s()(C.icon, t, { [C.iconServer]: a }),
                colorClass: i ? C.strikethrough : void 0
            });
        d.push(
            (0, l.jsx)(
                o.DY3,
                {
                    text: i ? E.intl.string(E.t.Q8Uzoa) : a ? E.intl.string(E.t.uLddbW) : E.intl.string(E.t.tjtv3N),
                    className: C.iconSpacing,
                    children: e
                },
                'mute'
            )
        );
    }
    if (c || r) {
        let e;
        if (u) {
            let n = c ? o.Vm4 : o.wE8;
            e = (0, l.jsx)(n, {
                className: s()(C.icon, t, { [C.iconServer]: c }),
                color: 'currentColor'
            });
        } else
            e = (0, l.jsx)(o.wE8, {
                size: 'md',
                color: 'currentColor',
                className: s()(C.icon, t, { [C.iconServer]: c })
            });
        d.push(
            (0, l.jsx)(
                o.DY3,
                {
                    className: C.iconSpacing,
                    text: c ? E.intl.string(E.t.btxSdH) : E.intl.string(E.t.NjmiOD),
                    children: e
                },
                'deaf'
            )
        );
    }
    return 0 === d.length ? null : (0, l.jsx)(l.Fragment, { children: d });
}
