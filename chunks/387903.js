n.d(t, {
    Y: function () {
        return i;
    }
}),
    n(789020),
    n(47120);
var i,
    l,
    a,
    r = n(200651),
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
    _ = n(925329),
    x = n(810568),
    E = n(168524),
    C = n(565138),
    y = n(833858),
    Z = n(223135),
    b = n(707409),
    T = n(769654),
    A = n(424678),
    N = n(750154),
    w = n(768581),
    j = n(630388),
    P = n(153066),
    R = n(740265),
    M = n(122810),
    O = n(833664),
    L = n(503438),
    k = n(802856),
    D = n(420660),
    U = n(39628),
    V = n(701488),
    F = n(981631),
    W = n(388032),
    B = n(344782);
function G(e, t, n) {
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
((a = i || (i = {})).ACTIVITY_FEED = 'ActivityFeed'), (a.STREAM_PREVIEW = 'StreamPreview'), (a.VOICE_CHANNEL = 'VoiceChannel');
let z = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500]
    },
    { getAssetImage: H } = n(81063),
    Y = (0, p.Z)(
        class extends s.PureComponent {
            render() {
                return (0, r.jsx)('div', {
                    className: B.timestamp,
                    children: this.props.message
                });
            }
        }
    );
function J(e) {
    let { activity: t } = e,
        n = (0, h.ZP)(),
        i = (function (e) {
            let { activity: t } = e,
                n = null;
            return (0, L.Z)(t) && (n = F.ABu.SPOTIFY), null != t.platform && [F.M7m.PS4, F.M7m.PS5].includes(t.platform) && (n = F.ABu.PLAYSTATION), n;
        })({ activity: t });
    if (null == i) return null;
    let l = g.Z.get(i);
    return (0, r.jsx)('img', {
        alt: '',
        src: (0, m.ap)(n) ? l.icon.lightSVG : l.icon.darkSVG,
        className: B.platformIcon
    });
}
class q extends (l = s.PureComponent) {
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t && (null == e ? void 0 : e.type) !== F.IIU.PLAYING && (null == e ? void 0 : e.type) !== F.IIU.WATCHING && (null == e ? void 0 : e.type) !== F.IIU.LISTENING && (null == e ? void 0 : e.type) !== F.IIU.HANG_STATUS
            ? {
                  type: F.IIU.PLAYING,
                  name: W.intl.string(W.t.eXan7O)
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
        let { hideHeader: n, activityGuild: i, showChannelDetails: l, renderHeaderAccessory: a } = this.props,
            s = this.activity;
        if (n || null == s) return null;
        let { name: o } = s;
        switch (s.type) {
            case F.IIU.STREAMING:
                t = W.intl.formatToPlainString(W.t.Dzgz4u, {
                    platform: [F.ABu.TWITCH, F.ABu.YOUTUBE].includes(o.toLowerCase()) ? o : g.Z.get(F.ABu.TWITCH).name
                });
                break;
            case F.IIU.LISTENING:
                t = W.intl.formatToPlainString(W.t['5sYPnp'], { name: o });
                break;
            case F.IIU.WATCHING:
                t = W.intl.formatToPlainString(W.t.Ge29Z2, { name: o });
                break;
            case F.IIU.PLAYING:
                t = (0, R.Z)(s);
                break;
            case F.IIU.COMPETING:
                t = W.intl.formatToPlainString(W.t.SQCo6O, { name: o });
        }
        if (null != i) {
            var u;
            t = (0, j.yE)(null !== (u = null == s ? void 0 : s.flags) && void 0 !== u ? u : 0, F.xjy.EMBEDDED) ? (s.type === F.IIU.WATCHING ? W.intl.formatToPlainString(W.t['M/L8oq'], { guildName: i.name }) : W.intl.formatToPlainString(W.t['4chKQk'], { guildName: i.name })) : W.intl.formatToPlainString(W.t.sddlGB, { server: i.name });
        }
        return (
            (null == s ? void 0 : s.type) === F.IIU.HANG_STATUS && (t = W.intl.string(W.t['74vS//'])),
            (0, r.jsxs)('div', {
                className: B.headerContainer,
                children: [
                    (0, r.jsx)(f.Heading, {
                        className: c()((0, P.l)(B, 'headerText', e ? 'EmptyBody' : 'Normal')),
                        variant: l ? 'text-xs/semibold' : 'eyebrow',
                        children: (0, r.jsx)(I.Z, { children: t })
                    }),
                    null == a ? void 0 : a()
                ]
            })
        );
    }
    renderXboxImage() {
        return (0, r.jsx)('div', {
            className: B.assets,
            children: (0, r.jsx)('img', {
                alt: '',
                src: g.Z.get(F.ABu.XBOX).icon.customPNG,
                className: c()(this.getTypeClass('assetsLargeImage', 'Xbox'))
            })
        });
    }
    renderImage(e) {
        var t, n, i;
        let l, a;
        if (e.type === F.IIU.HANG_STATUS)
            return (0, r.jsx)('div', {
                className: B.assets,
                children: (0, r.jsx)(Z.Z, {
                    hangStatusActivity: e,
                    className: c()(B.assetsHangStatus, this.getTypeClass('assetsSmallImage', 'WithoutLargeImage'))
                })
            });
        let { type: o } = this.props,
            { assets: u, application_id: d } = e;
        if (null == u || (null == u.large_image && null == u.small_image)) return null;
        (0, D.Z)(e) && (l = z[o]);
        let m = (0, L.Z)(e),
            p =
                null != u.large_image
                    ? (0, r.jsx)('img', {
                          alt: null !== (t = u.large_text) && void 0 !== t ? t : '',
                          src: H(d, u.large_image, null != l ? l : [V.Si.LARGE, V.Si.LARGE]),
                          className: c()(this.getTypeClass('assetsLargeImage', this.isStreamerOnTypeActivityFeed() ? F.ABu.TWITCH : ''), {
                              [null !== (n = this.getTypeClass('assetsLargeMask')) && void 0 !== n ? n : '']: null != u.small_image,
                              [B.assetsLargeImageSpotify]: m
                          })
                      })
                    : null;
        if (m)
            p = (0, r.jsx)(f.Anchor, {
                onClick: this.handleOpenSpotifyAlbum,
                children: p
            });
        else if ((0, N.dS)(e)) {
            let t = (0, N.rq)(e);
            if (null == t) return null;
            p = (0, r.jsx)(S.ZP, {
                mask: S.ZP.Masks.SQUIRCLE,
                width: V.Si.SMALL,
                height: V.Si.SMALL,
                children: (0, r.jsx)('img', {
                    src:
                        null !==
                            (i = w.ZP.getGuildIconURL({
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
            (p = (0, r.jsxs)('div', {
                className: B.twitchImageContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: B.twitchImageOverlay,
                        children: [
                            (0, r.jsx)(f.H, {
                                className: B.streamName,
                                children: e.name
                            }),
                            (0, r.jsx)('div', {
                                className: B.streamGame,
                                children: W.intl.format(W.t.gmCZRU, { game: e.details })
                            })
                        ]
                    }),
                    (0, r.jsx)(f.Anchor, {
                        className: B.twitchBackgroundImage,
                        href: e.url,
                        children: p
                    })
                ]
            })),
        !(0, N.dS)(e) &&
            null != u.small_image &&
            (a = (0, r.jsx)(f.Tooltip, {
                text: '' !== u.small_text ? u.small_text : null,
                position: 'top',
                children: (e) => {
                    var t;
                    return (0, r.jsx)('img', {
                        alt: null !== (t = u.small_text) && void 0 !== t ? t : '',
                        src: H(d, u.small_image, [V.Si.SMALL, V.Si.SMALL]),
                        className: this.getTypeClass('assetsSmallImage', null == p ? 'WithoutLargeImage' : void 0),
                        ...e
                    });
                }
            })),
        null == p)
            ? (0, r.jsx)('div', {
                  className: B.assets,
                  children: a
              })
            : (0, r.jsxs)('div', {
                  className: B.assets,
                  children: [
                      (0, r.jsx)(f.Tooltip, {
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
                      a
                  ]
              });
    }
    renderGameImage(e) {
        let { user: t, type: n, application: i, activityGuild: l } = this.props;
        return null != e.assets || (0, M.Z)(e) || e.type !== F.IIU.PLAYING || 'ActivityFeed' === n || t.bot
            ? null
            : null == i && null != l
              ? (0, r.jsx)('div', { className: c()(B.gameIcon, B.screenshareIcon) })
              : (0, r.jsx)(_.Z, {
                    className: B.gameIcon,
                    game: i
                });
    }
    renderName(e) {
        let { user: t, application: n, hideName: i } = this.props;
        if (i) return null;
        let { details: l, type: a } = e;
        if (a === F.IIU.CUSTOM_STATUS) return null;
        let s = (0, O.Z)(e),
            o = e.name,
            u = o;
        return (a === F.IIU.HANG_STATUS
            ? (u = (0, y.O8)(e))
            : s && null != n
              ? (u = (0, r.jsx)('span', {
                    className: B.activityName,
                    children: u
                }))
              : !s &&
                ((o = l),
                (u = l),
                (0, L.Z)(e) && null != e.sync_id && null != l
                    ? (u = (0, r.jsx)(f.Anchor, {
                          className: B.bodyLink,
                          onClick: this.handleOpenSpotifyTrack,
                          children: l
                      }))
                    : (0, N.dS)(e) && (u = e.name)),
        null == u)
            ? null
            : (0, r.jsx)(f.Text, {
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
            a = n,
            s = n;
        if (e.type === F.IIU.CUSTOM_STATUS) a = i;
        else if (e.type === F.IIU.HANG_STATUS)
            (a = null != l ? W.intl.formatToPlainString(W.t.IAZiW1, { guildName: l.name }) : void 0),
                (t =
                    null != l
                        ? () => {
                              (0, T.X)(l.id);
                          }
                        : void 0);
        else if (!(0, O.Z)(e)) {
            if (((a = i), (s = i), (0, L.Z)(e) && null != i))
                a = W.intl.format(W.t.uU9le3, {
                    artists: s,
                    artistsHook: (t, n) =>
                        (0, r.jsx)(
                            A.Z,
                            {
                                artists: i,
                                linkClassName: B.bodyLink,
                                canOpen: null != e.sync_id,
                                onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                            },
                            n
                        )
                });
            else if ((0, N.dS)(e)) {
                var o;
                a = null === (o = e.assets) || void 0 === o ? void 0 : o.small_text;
            }
        }
        return null == a || '' === a
            ? null
            : ((0, D.Z)(e) && (a = W.intl.formatToPlainString(W.t.gmCZRU, { game: a })), null != t)
              ? (0, r.jsx)(f.Clickable, {
                    onClick: t,
                    title: null != s ? s : void 0,
                    className: B.clickableDetails,
                    children: a
                })
              : (0, r.jsx)('div', {
                    title: null != s ? s : void 0,
                    className: (0, D.Z)(e) || (0, L.Z)(e) ? B.detailsWrap : B.details,
                    children: a
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: i } = this.props;
        return n && null != t
            ? null == i
                ? (0, r.jsx)('div', {
                      className: (0, D.Z)(e) || (0, L.Z)(e) ? B.detailsWrap : B.details,
                      children: W.intl.format(W.t['hq/Qzc'], { guildName: t.name })
                  })
                : (0, r.jsxs)('div', {
                      className: c()((0, D.Z)(e) || (0, L.Z)(e) ? B.detailsWrap : B.details, B.guildDetails),
                      children: [
                          (0, r.jsx)(C.Z, {
                              guild: t,
                              size: C.Z.Sizes.SMOL,
                              className: B.guildIcon
                          }),
                          (0, r.jsx)(f.ChevronSmallRightIcon, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, r.jsxs)('div', {
                              className: B.voiceChannelInfo,
                              children: [
                                  (0, r.jsx)(f.VoiceNormalIcon, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                                  (0, r.jsx)(f.Text, {
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
        if (!(0, O.Z)(e) || (0, L.Z)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, M.Z)(e)
              ? (0, r.jsx)(Y, { timestamps: n })
              : (0, r.jsx)(b.ZP, {
                    start: n.start,
                    location: b.ZP.Locations.USER_ACTIVITY,
                    className: B.playTime,
                    isApplicationStreaming: null != t
                });
    }
    renderTimeBar(e) {
        if (!(0, L.Z)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: n, end: i } = t;
        return null == n || null == i
            ? null
            : (0, r.jsx)(U.Z, {
                  start: n,
                  end: i,
                  className: this.getTypeClass('timeBar'),
                  themed: 'VoiceChannel' === this.props.type
              });
    }
    renderState(e, t) {
        var n, i;
        let l;
        let { state: a, party: s, assets: o } = e,
            c = a,
            u = a;
        return (!(0, O.Z)(e) &&
            ((c = null == o ? void 0 : o.large_text),
            (u = null == o ? void 0 : o.large_text),
            (0, L.Z)(e) &&
                null != c &&
                (c = W.intl.format(W.t.vOLBEx, {
                    album: u,
                    albumHook: (t, n) =>
                        null != e.sync_id && null != u
                            ? (0, r.jsx)(
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
        (null != c && '' !== c && e.type !== F.IIU.CUSTOM_STATUS) || (0, N.dS)(e))
            ? ((null == s ? void 0 : s.size) == null && [V.Zc].includes(null !== (n = e.application_id) && void 0 !== n ? n : '')
                  ? (l = W.intl.formatToPlainString(W.t['u//9Bw'], {
                        count: '0',
                        max: null !== (i = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== i ? i : 0
                    }))
                  : (0, N.dS)(e) && (null == s ? void 0 : s.size) != null
                    ? (l = W.intl.formatToPlainString(W.t['JC/3x8'], {
                          numSpeakers: s.size[0],
                          numListeners: s.size[1] - s.size[0]
                      }))
                    : (null == s ? void 0 : s.size) != null &&
                      s.size.length >= 2 &&
                      (l = W.intl.formatToPlainString(W.t['u//9Bw'], {
                          count: s.size[0],
                          max: s.size[1]
                      })),
              (0, r.jsxs)('div', {
                  className: B.state,
                  children: [
                      (0, r.jsx)('span', {
                          title: u,
                          children: c
                      }),
                      null != l
                          ? (0, r.jsxs)('span', {
                                children: [' ', l]
                            })
                          : null
                  ]
              }))
            : null;
    }
    render() {
        let e;
        let { type: t, renderActions: n, className: i, application: l, showReactions: a, onClose: s, onOpenGameProfileModal: o } = this.props,
            u = this.activity;
        if (null == u || u.type === F.IIU.CUSTOM_STATUS) return null;
        let d = 'ActivityFeed' === t,
            m = 'StreamPreview' === t,
            p = !1;
        (0, k.Z)(u) ? ((e = this.renderXboxImage()), (p = !0)) : null == (e = this.renderImage(u)) && (p = null != (e = this.renderGameImage(u)));
        let h = this.renderName(u),
            g = this.renderDetails(u),
            S = this.renderState(u, l),
            I = this.renderTimePlayed(u),
            _ = this.renderChannelDetails(u),
            x = null != n ? n() : null,
            E = this.renderTimeBar(u),
            C = ![e, h, g, S, I, E, x].some((e) => null != e);
        return (0, r.jsxs)('div', {
            className: c()(this.getTypeClass('activity'), i),
            children: [
                this.renderHeader(C),
                (0, r.jsx)('div', {
                    className: c()(p ? B.bodyAlignCenter : B.bodyNormal, a && !m && B.wrap),
                    children: (0, r.jsxs)('div', {
                        className: B.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, r.jsxs)(v.Z.Child, {
                                      className: c()((0, P.l)(B, 'content', p ? 'GameImage' : null != e ? 'Images' : 'NoImages', t)),
                                      children: [
                                          (0, r.jsxs)(f.Clickable, {
                                              className: c()(null != o && B.openGameProfile),
                                              onClick:
                                                  null != o
                                                      ? (e) => {
                                                            o(e), null == s || s();
                                                        }
                                                      : void 0,
                                              children: [h, g, S, I]
                                          }),
                                          _,
                                          m ? null : E,
                                          d ? x : null
                                      ]
                                  })
                        ]
                    })
                }),
                m ? x : null,
                (0, r.jsx)(J, { activity: u })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            G(this, 'handleOpenSpotifyTrack', () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                d()(null != e, 'Spotify activity was null'), null == t || t(e);
            }),
            G(this, 'handleOpenSpotifyArtist', (e) => {
                let { activity: t, onOpenSpotifyArtist: n, user: i } = this.props;
                d()(null != t, 'Spotify activity was null'), null == n || n(t, i.id, e);
            }),
            G(this, 'handleOpenSpotifyAlbum', () => {
                let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
                d()(null != e, 'Spotify activity was null'), null == t || t(e, n.id);
            });
    }
}
G(q, 'Types', i);
let X = (e) => {
    var t, n, i;
    let l = (0, E.Z)({
        location: 'UserActivity',
        applicationId: null !== (i = null === (t = e.application) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : null === (n = e.activity) || void 0 === n ? void 0 : n.application_id,
        source: x.m1.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0
    });
    return (0, r.jsx)(q, {
        ...e,
        onOpenGameProfileModal: l
    });
};
(X.Types = i), (t.Z = X);
