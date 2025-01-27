n.d(t, {
    Y: function () {
        return i;
    }
}),
    n(789020),
    n(47120);
var i,
    l,
    r,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    c = n.n(o),
    u = n(512722),
    d = n.n(u),
    m = n(780384),
    f = n(481060),
    p = n(438139),
    h = n(410030),
    g = n(726542),
    v = n(600164),
    S = n(686546),
    I = n(111028),
    x = n(925329),
    _ = n(810568),
    C = n(168524),
    b = n(565138),
    E = n(833858),
    y = n(223135),
    Z = n(707409),
    T = n(769654),
    N = n(424678),
    A = n(750154),
    j = n(768581),
    w = n(630388),
    P = n(153066),
    R = n(740265),
    O = n(122810),
    M = n(833664),
    k = n(503438),
    L = n(802856),
    D = n(420660),
    U = n(39628),
    V = n(701488),
    F = n(981631),
    z = n(388032),
    B = n(344782);
function W(e, t, n) {
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
((r = i || (i = {})).ACTIVITY_FEED = 'ActivityFeed'), (r.STREAM_PREVIEW = 'StreamPreview'), (r.VOICE_CHANNEL = 'VoiceChannel');
let G = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500]
    },
    { getAssetImage: H } = n(81063),
    Y = (0, p.Z)(
        class extends s.PureComponent {
            render() {
                return (0, a.jsx)('div', {
                    className: B.timestamp,
                    children: this.props.message
                });
            }
        }
    );
function q(e) {
    let { activity: t } = e,
        n = (0, h.ZP)(),
        i = (function (e) {
            let { activity: t } = e,
                n = null;
            return (0, k.Z)(t) && (n = F.ABu.SPOTIFY), null != t.platform && [F.M7m.PS4, F.M7m.PS5].includes(t.platform) && (n = F.ABu.PLAYSTATION), n;
        })({ activity: t });
    if (null == i) return null;
    let l = g.Z.get(i);
    return (0, a.jsx)('img', {
        alt: '',
        src: (0, m.ap)(n) ? l.icon.lightSVG : l.icon.darkSVG,
        className: B.platformIcon
    });
}
class J extends (l = s.PureComponent) {
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t && (null == e ? void 0 : e.type) !== F.IIU.PLAYING && (null == e ? void 0 : e.type) !== F.IIU.WATCHING && (null == e ? void 0 : e.type) !== F.IIU.LISTENING && (null == e ? void 0 : e.type) !== F.IIU.HANG_STATUS
            ? {
                  type: F.IIU.PLAYING,
                  name: z.intl.string(z.t.eXan7O)
              }
            : e;
    }
    getTypeClass(e, t) {
        return (0, P.l)(B, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, D.Z)(this.activity) && 'ActivityFeed' === this.props.type;
    }
    renderHeader(e) {
        let t;
        let { hideHeader: n, activityGuild: i, showChannelDetails: l, renderHeaderAccessory: r } = this.props,
            s = this.activity;
        if (n || null == s) return null;
        let { name: o } = s;
        switch (s.type) {
            case F.IIU.STREAMING:
                t = z.intl.formatToPlainString(z.t.Dzgz4u, {
                    platform: [F.ABu.TWITCH, F.ABu.YOUTUBE].includes(o.toLowerCase()) ? o : g.Z.get(F.ABu.TWITCH).name
                });
                break;
            case F.IIU.LISTENING:
                t = z.intl.formatToPlainString(z.t['5sYPnp'], { name: o });
                break;
            case F.IIU.WATCHING:
                t = z.intl.formatToPlainString(z.t.Ge29Z2, { name: o });
                break;
            case F.IIU.PLAYING:
                t = (0, R.Z)(s);
                break;
            case F.IIU.COMPETING:
                t = z.intl.formatToPlainString(z.t.SQCo6O, { name: o });
        }
        if (null != i) {
            var u;
            t = (0, w.yE)(null !== (u = null == s ? void 0 : s.flags) && void 0 !== u ? u : 0, F.xjy.EMBEDDED) ? (s.type === F.IIU.WATCHING ? z.intl.formatToPlainString(z.t['M/L8oq'], { guildName: i.name }) : z.intl.formatToPlainString(z.t['4chKQk'], { guildName: i.name })) : z.intl.formatToPlainString(z.t.sddlGB, { server: i.name });
        }
        return (
            (null == s ? void 0 : s.type) === F.IIU.HANG_STATUS && (t = z.intl.string(z.t['74vS//'])),
            (0, a.jsxs)('div', {
                className: B.headerContainer,
                children: [
                    (0, a.jsx)(f.Heading, {
                        className: c()((0, P.l)(B, 'headerText', e ? 'EmptyBody' : 'Normal')),
                        variant: l ? 'text-xs/semibold' : 'eyebrow',
                        children: (0, a.jsx)(I.Z, { children: t })
                    }),
                    null == r ? void 0 : r()
                ]
            })
        );
    }
    renderXboxImage() {
        return (0, a.jsx)('div', {
            className: B.assets,
            children: (0, a.jsx)('img', {
                alt: '',
                src: g.Z.get(F.ABu.XBOX).icon.customPNG,
                className: c()(this.getTypeClass('assetsLargeImage', 'Xbox'))
            })
        });
    }
    renderImage(e) {
        var t, n, i;
        let l, r;
        if (e.type === F.IIU.HANG_STATUS)
            return (0, a.jsx)('div', {
                className: B.assets,
                children: (0, a.jsx)(y.Z, {
                    hangStatusActivity: e,
                    className: c()(B.assetsHangStatus, this.getTypeClass('assetsSmallImage', 'WithoutLargeImage'))
                })
            });
        let { type: o } = this.props,
            { assets: u, application_id: d } = e;
        if (null == u || (null == u.large_image && null == u.small_image)) return null;
        (0, D.Z)(e) && (l = G[o]);
        let m = (0, k.Z)(e),
            p =
                null != u.large_image
                    ? (0, a.jsx)('img', {
                          alt: null !== (t = u.large_text) && void 0 !== t ? t : '',
                          src: H(d, u.large_image, null != l ? l : [V.Si.LARGE, V.Si.LARGE]),
                          className: c()(this.getTypeClass('assetsLargeImage', this.isStreamerOnTypeActivityFeed() ? F.ABu.TWITCH : ''), {
                              [null !== (n = this.getTypeClass('assetsLargeMask')) && void 0 !== n ? n : '']: null != u.small_image,
                              [B.assetsLargeImageSpotify]: m
                          })
                      })
                    : null;
        if (m)
            p = (0, a.jsx)(f.Anchor, {
                onClick: this.handleOpenSpotifyAlbum,
                children: p
            });
        else if ((0, A.dS)(e)) {
            let t = (0, A.rq)(e);
            if (null == t) return null;
            p = (0, a.jsx)(S.ZP, {
                mask: S.ZP.Masks.SQUIRCLE,
                width: V.Si.SMALL,
                height: V.Si.SMALL,
                children: (0, a.jsx)('img', {
                    src:
                        null !==
                            (i = j.ZP.getGuildIconURL({
                                id: t.guildId,
                                icon: u.small_image,
                                size: V.Si.SMALL
                            })) && void 0 !== i
                            ? i
                            : void 0,
                    className: B.assetsLargeImageVoiceChannel,
                    alt: ''
                })
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            '' !== e.url &&
            (p = (0, a.jsxs)('div', {
                className: B.twitchImageContainer,
                children: [
                    (0, a.jsxs)('div', {
                        className: B.twitchImageOverlay,
                        children: [
                            (0, a.jsx)(f.H, {
                                className: B.streamName,
                                children: e.name
                            }),
                            (0, a.jsx)('div', {
                                className: B.streamGame,
                                children: z.intl.format(z.t.gmCZRU, { game: e.details })
                            })
                        ]
                    }),
                    (0, a.jsx)(f.Anchor, {
                        className: B.twitchBackgroundImage,
                        href: e.url,
                        children: p
                    })
                ]
            })),
        !(0, A.dS)(e) &&
            null != u.small_image &&
            (r = (0, a.jsx)(f.Tooltip, {
                text: '' !== u.small_text ? u.small_text : null,
                position: 'top',
                children: (e) => {
                    var t;
                    return (0, a.jsx)('img', {
                        alt: null !== (t = u.small_text) && void 0 !== t ? t : '',
                        src: H(d, u.small_image, [V.Si.SMALL, V.Si.SMALL]),
                        className: this.getTypeClass('assetsSmallImage', null == p ? 'WithoutLargeImage' : void 0),
                        ...e
                    });
                }
            })),
        null == p)
            ? (0, a.jsx)('div', {
                  className: B.assets,
                  children: r
              })
            : (0, a.jsxs)('div', {
                  className: B.assets,
                  children: [
                      (0, a.jsx)(f.Tooltip, {
                          text: null != u.large_text ? u.large_text : null,
                          position: 'top',
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return null != p
                                  ? s.cloneElement(p, {
                                        onMouseEnter: t,
                                        onMouseLeave: n
                                    })
                                  : null;
                          }
                      }),
                      r
                  ]
              });
    }
    renderGameImage(e) {
        let { user: t, type: n, application: i, activityGuild: l } = this.props;
        return null != e.assets || (0, O.Z)(e) || e.type !== F.IIU.PLAYING || 'ActivityFeed' === n || t.bot
            ? null
            : null == i && null != l
              ? (0, a.jsx)('div', { className: c()(B.gameIcon, B.screenshareIcon) })
              : (0, a.jsx)(x.Z, {
                    className: B.gameIcon,
                    game: i
                });
    }
    renderName(e) {
        let { user: t, application: n, hideName: i } = this.props;
        if (i) return null;
        let { details: l, type: r } = e;
        if (r === F.IIU.CUSTOM_STATUS) return null;
        let s = (0, M.Z)(e),
            o = e.name,
            u = o;
        return (r === F.IIU.HANG_STATUS
            ? (u = (0, E.O8)(e))
            : s && null != n
              ? (u = (0, a.jsx)('span', {
                    className: B.activityName,
                    children: u
                }))
              : !s &&
                ((o = l),
                (u = l),
                (0, k.Z)(e) && null != e.sync_id && null != l
                    ? (u = (0, a.jsx)(f.Anchor, {
                          className: B.bodyLink,
                          onClick: this.handleOpenSpotifyTrack,
                          children: l
                      }))
                    : (0, A.dS)(e) && (u = e.name)),
        null == u)
            ? null
            : (0, a.jsx)(f.Text, {
                  title: o,
                  variant: 'text-sm/semibold',
                  className: c()((0, P.l)(B, 'name', t.bot ? 'wrap' : 'normal')),
                  children: u
              });
    }
    renderDetails(e) {
        let t;
        let { details: n, state: i } = e,
            { activityGuild: l } = this.props,
            r = n,
            s = n;
        if (e.type === F.IIU.CUSTOM_STATUS) r = i;
        else if (e.type === F.IIU.HANG_STATUS)
            (r = null != l ? z.intl.formatToPlainString(z.t.IAZiW1, { guildName: l.name }) : void 0),
                (t =
                    null != l
                        ? () => {
                              (0, T.X)(l.id);
                          }
                        : void 0);
        else if (!(0, M.Z)(e)) {
            if (((r = i), (s = i), (0, k.Z)(e) && null != i))
                r = z.intl.format(z.t.uU9le3, {
                    artists: s,
                    artistsHook: (t, n) =>
                        (0, a.jsx)(
                            N.Z,
                            {
                                artists: i,
                                linkClassName: B.bodyLink,
                                canOpen: null != e.sync_id,
                                onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                            },
                            n
                        )
                });
            else if ((0, A.dS)(e)) {
                var o;
                r = null === (o = e.assets) || void 0 === o ? void 0 : o.small_text;
            }
        }
        return null == r || '' === r
            ? null
            : ((0, D.Z)(e) && (r = z.intl.formatToPlainString(z.t.gmCZRU, { game: r })), null != t)
              ? (0, a.jsx)(f.Clickable, {
                    onClick: t,
                    title: null != s ? s : void 0,
                    className: B.clickableDetails,
                    children: r
                })
              : (0, a.jsx)('div', {
                    title: null != s ? s : void 0,
                    className: (0, D.Z)(e) || (0, k.Z)(e) ? B.detailsWrap : B.details,
                    children: r
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: i } = this.props;
        return n && null != t
            ? null == i
                ? (0, a.jsx)('div', {
                      className: (0, D.Z)(e) || (0, k.Z)(e) ? B.detailsWrap : B.details,
                      children: z.intl.format(z.t['hq/Qzc'], { guildName: t.name })
                  })
                : (0, a.jsxs)('div', {
                      className: c()((0, D.Z)(e) || (0, k.Z)(e) ? B.detailsWrap : B.details, B.guildDetails),
                      children: [
                          (0, a.jsx)(b.Z, {
                              guild: t,
                              size: b.Z.Sizes.SMOL,
                              className: B.guildIcon
                          }),
                          (0, a.jsx)(f.ChevronSmallRightIcon, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, a.jsxs)('div', {
                              className: B.voiceChannelInfo,
                              children: [
                                  (0, a.jsx)(f.VoiceNormalIcon, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                                  (0, a.jsx)(f.Text, {
                                      variant: 'text-xs/normal',
                                      children: null == i ? void 0 : i.name
                                  })
                              ]
                          })
                      ]
                  })
            : null;
    }
    renderTimePlayed(e) {
        let { activityGuild: t } = this.props;
        if (!(0, M.Z)(e) || (0, k.Z)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, O.Z)(e)
              ? (0, a.jsx)(Y, { timestamps: n })
              : (0, a.jsx)(Z.ZP, {
                    start: n.start,
                    location: Z.ZP.Locations.USER_ACTIVITY,
                    className: B.playTime,
                    isApplicationStreaming: null != t
                });
    }
    renderTimeBar(e) {
        if (!(0, k.Z)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: n, end: i } = t;
        return null == n || null == i
            ? null
            : (0, a.jsx)(U.Z, {
                  start: n,
                  end: i,
                  className: this.getTypeClass('timeBar'),
                  themed: 'VoiceChannel' === this.props.type
              });
    }
    renderState(e, t) {
        var n, i;
        let l;
        let { state: r, party: s, assets: o } = e,
            c = r,
            u = r;
        return (!(0, M.Z)(e) &&
            ((c = null == o ? void 0 : o.large_text),
            (u = null == o ? void 0 : o.large_text),
            (0, k.Z)(e) &&
                null != c &&
                (c = z.intl.format(z.t.vOLBEx, {
                    album: u,
                    albumHook: (t, n) =>
                        null != e.sync_id && null != u
                            ? (0, a.jsx)(
                                  f.Anchor,
                                  {
                                      className: B.bodyLink,
                                      onClick: this.handleOpenSpotifyAlbum,
                                      children: u
                                  },
                                  n
                              )
                            : u
                }))),
        (null != c && '' !== c && e.type !== F.IIU.CUSTOM_STATUS) || (0, A.dS)(e))
            ? ((null == s ? void 0 : s.size) == null && [V.Zc].includes(null !== (n = e.application_id) && void 0 !== n ? n : '')
                  ? (l = z.intl.formatToPlainString(z.t['u//9Bw'], {
                        count: '0',
                        max: null !== (i = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== i ? i : 0
                    }))
                  : (0, A.dS)(e) && (null == s ? void 0 : s.size) != null
                    ? (l = z.intl.formatToPlainString(z.t['JC/3x8'], {
                          numSpeakers: s.size[0],
                          numListeners: s.size[1] - s.size[0]
                      }))
                    : (null == s ? void 0 : s.size) != null &&
                      s.size.length >= 2 &&
                      (l = z.intl.formatToPlainString(z.t['u//9Bw'], {
                          count: s.size[0],
                          max: s.size[1]
                      })),
              (0, a.jsxs)('div', {
                  className: B.state,
                  children: [
                      (0, a.jsx)('span', {
                          title: u,
                          children: c
                      }),
                      null != l
                          ? (0, a.jsxs)('span', {
                                children: [' ', l]
                            })
                          : null
                  ]
              }))
            : null;
    }
    render() {
        let e;
        let { type: t, renderActions: n, className: i, application: l, showReactions: r, onClose: s, onOpenGameProfileModal: o } = this.props,
            u = this.activity;
        if (null == u || u.type === F.IIU.CUSTOM_STATUS) return null;
        let d = 'ActivityFeed' === t,
            m = 'StreamPreview' === t,
            p = !1;
        (0, L.Z)(u) ? ((e = this.renderXboxImage()), (p = !0)) : null == (e = this.renderImage(u)) && (p = null != (e = this.renderGameImage(u)));
        let h = this.renderName(u),
            g = this.renderDetails(u),
            S = this.renderState(u, l),
            I = this.renderTimePlayed(u),
            x = this.renderChannelDetails(u),
            _ = null != n ? n() : null,
            C = this.renderTimeBar(u),
            b = ![e, h, g, S, I, C, _].some((e) => null != e);
        return (0, a.jsxs)('div', {
            className: c()(this.getTypeClass('activity'), i),
            children: [
                this.renderHeader(b),
                (0, a.jsx)('div', {
                    className: c()(p ? B.bodyAlignCenter : B.bodyNormal, r && !m && B.wrap),
                    children: (0, a.jsxs)('div', {
                        className: B.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, a.jsxs)(v.Z.Child, {
                                      className: c()((0, P.l)(B, 'content', p ? 'GameImage' : null != e ? 'Images' : 'NoImages', t)),
                                      children: [
                                          (0, a.jsxs)(f.Clickable, {
                                              className: c()(null != o && B.openGameProfile),
                                              onClick:
                                                  null != o
                                                      ? (e) => {
                                                            o(e), null == s || s();
                                                        }
                                                      : void 0,
                                              children: [h, g, S, I]
                                          }),
                                          x,
                                          m ? null : C,
                                          d ? _ : null
                                      ]
                                  })
                        ]
                    })
                }),
                m ? _ : null,
                (0, a.jsx)(q, { activity: u })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            W(this, 'handleOpenSpotifyTrack', () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                d()(null != e, 'Spotify activity was null'), null == t || t(e);
            }),
            W(this, 'handleOpenSpotifyArtist', (e) => {
                let { activity: t, onOpenSpotifyArtist: n, user: i } = this.props;
                d()(null != t, 'Spotify activity was null'), null == n || n(t, i.id, e);
            }),
            W(this, 'handleOpenSpotifyAlbum', () => {
                let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
                d()(null != e, 'Spotify activity was null'), null == t || t(e, n.id);
            });
    }
}
W(J, 'Types', i);
let X = (e) => {
    var t, n, i;
    let l = (0, C.Z)({
        location: 'UserActivity',
        applicationId: null !== (i = null === (t = e.application) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : null === (n = e.activity) || void 0 === n ? void 0 : n.application_id,
        source: _.m1.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0
    });
    return (0, a.jsx)(J, {
        ...e,
        onOpenGameProfileModal: l
    });
};
(X.Types = i), (t.Z = X);
