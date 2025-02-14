n.d(t, {
    Y: () => B,
    Z: () => J
}),
    n(789020),
    n(47120);
var l,
    i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    u = n(512722),
    c = n.n(u),
    d = n(780384),
    m = n(481060),
    f = n(438139),
    h = n(410030),
    g = n(726542),
    p = n(600164),
    v = n(686546),
    S = n(111028),
    I = n(925329),
    x = n(810568),
    E = n(168524),
    T = n(565138),
    Z = n(707409),
    N = n(424678),
    y = n(750154),
    A = n(768581),
    C = n(630388),
    P = n(153066),
    j = n(740265),
    w = n(122810),
    _ = n(833664),
    b = n(503438),
    R = n(802856),
    L = n(420660),
    M = n(39628),
    O = n(701488),
    D = n(981631),
    U = n(388032),
    k = n(312472);
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
var B = (((i = {}).ACTIVITY_FEED = 'ActivityFeed'), (i.STREAM_PREVIEW = 'StreamPreview'), (i.VOICE_CHANNEL = 'VoiceChannel'), i);
let F = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500]
    },
    { getAssetImage: Y } = n(81063),
    z = (0, f.Z)(
        class extends a.PureComponent {
            render() {
                return (0, r.jsx)('div', {
                    className: k.timestamp,
                    children: this.props.message
                });
            }
        }
    );
function V(e) {
    let { activity: t } = e,
        n = (0, h.ZP)(),
        l = (function (e) {
            let { activity: t } = e,
                n = null;
            return (0, b.Z)(t) && (n = D.ABu.SPOTIFY), null != t.platform && [D.M7m.PS4, D.M7m.PS5].includes(t.platform) && (n = D.ABu.PLAYSTATION), n;
        })({ activity: t });
    if (null == l) return null;
    let i = g.Z.get(l);
    return (0, r.jsx)('img', {
        alt: '',
        src: (0, d.ap)(n) ? i.icon.lightSVG : i.icon.darkSVG,
        className: k.platformIcon
    });
}
class W extends (l = a.PureComponent) {
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t && (null == e ? void 0 : e.type) !== D.IIU.PLAYING && (null == e ? void 0 : e.type) !== D.IIU.WATCHING && (null == e ? void 0 : e.type) !== D.IIU.LISTENING && (null == e ? void 0 : e.type) !== D.IIU.HANG_STATUS
            ? {
                  type: D.IIU.PLAYING,
                  name: U.intl.string(U.t.eXan7O)
              }
            : e;
    }
    getTypeClass(e, t) {
        return (0, P.l)(k, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, L.Z)(this.activity) && 'ActivityFeed' === this.props.type;
    }
    renderHeader(e) {
        let t;
        let { hideHeader: n, activityGuild: l, showChannelDetails: i, renderHeaderAccessory: a } = this.props,
            s = this.activity;
        if (n || null == s) return null;
        let { name: u } = s;
        switch (s.type) {
            case D.IIU.STREAMING:
                t = U.intl.formatToPlainString(U.t.Dzgz4u, {
                    platform: [D.ABu.TWITCH, D.ABu.YOUTUBE].includes(u.toLowerCase()) ? u : g.Z.get(D.ABu.TWITCH).name
                });
                break;
            case D.IIU.LISTENING:
                t = U.intl.formatToPlainString(U.t['5sYPnp'], { name: u });
                break;
            case D.IIU.WATCHING:
                t = U.intl.formatToPlainString(U.t.Ge29Z2, { name: u });
                break;
            case D.IIU.PLAYING:
                t = (0, j.Z)(s);
                break;
            case D.IIU.COMPETING:
                t = U.intl.formatToPlainString(U.t.SQCo6O, { name: u });
        }
        if (null != l) {
            var c;
            t = (0, C.yE)(null !== (c = null == s ? void 0 : s.flags) && void 0 !== c ? c : 0, D.xjy.EMBEDDED) ? (s.type === D.IIU.WATCHING ? U.intl.formatToPlainString(U.t['M/L8oq'], { guildName: l.name }) : U.intl.formatToPlainString(U.t['4chKQk'], { guildName: l.name })) : U.intl.formatToPlainString(U.t.sddlGB, { server: l.name });
        }
        return (0, r.jsxs)('div', {
            className: k.headerContainer,
            children: [
                (0, r.jsx)(m.X6q, {
                    className: o()((0, P.l)(k, 'headerText', e ? 'EmptyBody' : 'Normal')),
                    variant: i ? 'text-xs/semibold' : 'eyebrow',
                    children: (0, r.jsx)(S.Z, { children: t })
                }),
                null == a ? void 0 : a()
            ]
        });
    }
    renderXboxImage() {
        return (0, r.jsx)('div', {
            className: k.assets,
            children: (0, r.jsx)('img', {
                alt: '',
                src: g.Z.get(D.ABu.XBOX).icon.customPNG,
                className: o()(this.getTypeClass('assetsLargeImage', 'Xbox'))
            })
        });
    }
    renderImage(e) {
        var t, n, l;
        let i, s;
        let { type: u } = this.props,
            { assets: c, application_id: d } = e;
        if (null == c || (null == c.large_image && null == c.small_image)) return null;
        (0, L.Z)(e) && (i = F[u]);
        let f = (0, b.Z)(e),
            h =
                null != c.large_image
                    ? (0, r.jsx)('img', {
                          alt: null !== (t = c.large_text) && void 0 !== t ? t : '',
                          src: Y(d, c.large_image, null != i ? i : [O.Si.LARGE, O.Si.LARGE]),
                          className: o()(this.getTypeClass('assetsLargeImage', this.isStreamerOnTypeActivityFeed() ? D.ABu.TWITCH : ''), {
                              [null !== (n = this.getTypeClass('assetsLargeMask')) && void 0 !== n ? n : '']: null != c.small_image,
                              [k.assetsLargeImageSpotify]: f
                          })
                      })
                    : null;
        if (f)
            h = (0, r.jsx)(m.eee, {
                onClick: this.handleOpenSpotifyAlbum,
                children: h
            });
        else if ((0, y.dS)(e)) {
            let t = (0, y.rq)(e);
            if (null == t) return null;
            h = (0, r.jsx)(v.ZP, {
                mask: v.ZP.Masks.SQUIRCLE,
                width: O.Si.SMALL,
                height: O.Si.SMALL,
                children: (0, r.jsx)('img', {
                    src:
                        null !==
                            (l = A.ZP.getGuildIconURL({
                                id: t.guildId,
                                icon: c.small_image,
                                size: O.Si.SMALL
                            })) && void 0 !== l
                            ? l
                            : void 0,
                    className: k.assetsLargeImageVoiceChannel,
                    alt: ''
                })
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            '' !== e.url &&
            (h = (0, r.jsxs)('div', {
                className: k.twitchImageContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: k.twitchImageOverlay,
                        children: [
                            (0, r.jsx)(m.H, {
                                className: k.streamName,
                                children: e.name
                            }),
                            (0, r.jsx)('div', {
                                className: k.streamGame,
                                children: U.intl.format(U.t.gmCZRU, { game: e.details })
                            })
                        ]
                    }),
                    (0, r.jsx)(m.eee, {
                        className: k.twitchBackgroundImage,
                        href: e.url,
                        children: h
                    })
                ]
            })),
        (0, y.dS)(e) ||
            null == c.small_image ||
            (s = (0, r.jsx)(m.ua7, {
                text: '' !== c.small_text ? c.small_text : null,
                position: 'top',
                children: (e) => {
                    var t;
                    return (0, r.jsx)('img', {
                        alt: null !== (t = c.small_text) && void 0 !== t ? t : '',
                        src: Y(d, c.small_image, [O.Si.SMALL, O.Si.SMALL]),
                        className: this.getTypeClass('assetsSmallImage', null == h ? 'WithoutLargeImage' : void 0),
                        ...e
                    });
                }
            })),
        null == h)
            ? (0, r.jsx)('div', {
                  className: k.assets,
                  children: s
              })
            : (0, r.jsxs)('div', {
                  className: k.assets,
                  children: [
                      (0, r.jsx)(m.ua7, {
                          text: null != c.large_text ? c.large_text : null,
                          position: 'top',
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return null != h
                                  ? a.cloneElement(h, {
                                        onMouseEnter: t,
                                        onMouseLeave: n
                                    })
                                  : null;
                          }
                      }),
                      s
                  ]
              });
    }
    renderGameImage(e) {
        let { user: t, type: n, application: l, activityGuild: i } = this.props;
        return null != e.assets || (0, w.Z)(e) || e.type !== D.IIU.PLAYING || 'ActivityFeed' === n || t.bot
            ? null
            : null == l && null != i
              ? (0, r.jsx)('div', { className: o()(k.gameIcon, k.screenshareIcon) })
              : (0, r.jsx)(I.Z, {
                    className: k.gameIcon,
                    game: l
                });
    }
    renderName(e) {
        let { user: t, application: n, hideName: l } = this.props;
        if (l) return null;
        let { details: i, type: a } = e;
        if (a === D.IIU.CUSTOM_STATUS) return null;
        let s = (0, _.Z)(e),
            u = e.name,
            c = u;
        return (s && null != n
            ? (c = (0, r.jsx)('span', {
                  className: k.activityName,
                  children: c
              }))
            : !s &&
              ((u = i),
              (c = i),
              (0, b.Z)(e) && null != e.sync_id && null != i
                  ? (c = (0, r.jsx)(m.eee, {
                        className: k.bodyLink,
                        onClick: this.handleOpenSpotifyTrack,
                        children: i
                    }))
                  : (0, y.dS)(e) && (c = e.name)),
        null == c)
            ? null
            : (0, r.jsx)(m.Text, {
                  title: u,
                  variant: 'text-sm/semibold',
                  className: o()((0, P.l)(k, 'name', t.bot ? 'wrap' : 'normal')),
                  children: c
              });
    }
    renderDetails(e) {
        let t;
        let { details: n, state: l } = e,
            i = n,
            a = n;
        if (e.type === D.IIU.CUSTOM_STATUS) i = l;
        else if (!(0, _.Z)(e)) {
            if (((i = l), (a = l), (0, b.Z)(e) && null != l))
                i = U.intl.format(U.t.uU9le3, {
                    artists: a,
                    artistsHook: (t, n) =>
                        (0, r.jsx)(
                            N.Z,
                            {
                                artists: l,
                                linkClassName: k.bodyLink,
                                canOpen: null != e.sync_id,
                                onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                            },
                            n
                        )
                });
            else if ((0, y.dS)(e)) {
                var s;
                i = null === (s = e.assets) || void 0 === s ? void 0 : s.small_text;
            }
        }
        return null == i || '' === i
            ? null
            : ((0, L.Z)(e) && (i = U.intl.formatToPlainString(U.t.gmCZRU, { game: i })), null != t)
              ? (0, r.jsx)(m.P3F, {
                    onClick: t,
                    title: null != a ? a : void 0,
                    className: k.clickableDetails,
                    children: i
                })
              : (0, r.jsx)('div', {
                    title: null != a ? a : void 0,
                    className: (0, L.Z)(e) || (0, b.Z)(e) ? k.detailsWrap : k.details,
                    children: i
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: l } = this.props;
        return n && null != t
            ? null == l
                ? (0, r.jsx)('div', {
                      className: (0, L.Z)(e) || (0, b.Z)(e) ? k.detailsWrap : k.details,
                      children: U.intl.format(U.t['hq/Qzc'], { guildName: t.name })
                  })
                : (0, r.jsxs)('div', {
                      className: o()((0, L.Z)(e) || (0, b.Z)(e) ? k.detailsWrap : k.details, k.guildDetails),
                      children: [
                          (0, r.jsx)(T.Z, {
                              guild: t,
                              size: T.Z.Sizes.SMOL,
                              className: k.guildIcon
                          }),
                          (0, r.jsx)(m.Fbu, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, r.jsxs)('div', {
                              className: k.voiceChannelInfo,
                              children: [
                                  (0, r.jsx)(m.gj8, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                                  (0, r.jsx)(m.Text, {
                                      variant: 'text-xs/normal',
                                      children: null == l ? void 0 : l.name
                                  })
                              ]
                          })
                      ]
                  })
            : null;
    }
    renderTimePlayed(e) {
        let { activityGuild: t } = this.props;
        if (!(0, _.Z)(e) || (0, b.Z)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, w.Z)(e)
              ? (0, r.jsx)(z, { timestamps: n })
              : (0, r.jsx)(Z.ZP, {
                    start: n.start,
                    location: Z.ZP.Locations.USER_ACTIVITY,
                    className: k.playTime,
                    isApplicationStreaming: null != t
                });
    }
    renderTimeBar(e) {
        if (!(0, b.Z)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: n, end: l } = t;
        return null == n || null == l
            ? null
            : (0, r.jsx)(M.Z, {
                  start: n,
                  end: l,
                  className: this.getTypeClass('timeBar'),
                  themed: 'VoiceChannel' === this.props.type
              });
    }
    renderState(e, t) {
        var n, l;
        let i;
        let { state: a, party: s, assets: o } = e,
            u = a,
            c = a;
        return (!(0, _.Z)(e) &&
            ((u = null == o ? void 0 : o.large_text),
            (c = null == o ? void 0 : o.large_text),
            (0, b.Z)(e) &&
                null != u &&
                (u = U.intl.format(U.t.vOLBEx, {
                    album: c,
                    albumHook: (t, n) =>
                        null != e.sync_id && null != c
                            ? (0, r.jsx)(
                                  m.eee,
                                  {
                                      className: k.bodyLink,
                                      onClick: this.handleOpenSpotifyAlbum,
                                      children: c
                                  },
                                  n
                              )
                            : c
                }))),
        (null != u && '' !== u && e.type !== D.IIU.CUSTOM_STATUS) || (0, y.dS)(e))
            ? ((null == s ? void 0 : s.size) == null && [O.Zc].includes(null !== (n = e.application_id) && void 0 !== n ? n : '')
                  ? (i = U.intl.formatToPlainString(U.t['u//9Bw'], {
                        count: '0',
                        max: null !== (l = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== l ? l : 0
                    }))
                  : (0, y.dS)(e) && (null == s ? void 0 : s.size) != null
                    ? (i = U.intl.formatToPlainString(U.t['JC/3x8'], {
                          numSpeakers: s.size[0],
                          numListeners: s.size[1] - s.size[0]
                      }))
                    : (null == s ? void 0 : s.size) != null &&
                      s.size.length >= 2 &&
                      (i =
                          0 === s.size[1]
                              ? U.intl.formatToPlainString(U.t.IM4J4e, { count: s.size[0] })
                              : U.intl.formatToPlainString(U.t['u//9Bw'], {
                                    count: s.size[0],
                                    max: s.size[1]
                                })),
              (0, r.jsxs)('div', {
                  className: k.state,
                  children: [
                      (0, r.jsx)('span', {
                          title: c,
                          children: u
                      }),
                      null != i
                          ? (0, r.jsxs)('span', {
                                children: [' ', i]
                            })
                          : null
                  ]
              }))
            : null;
    }
    render() {
        let e;
        let { type: t, renderActions: n, className: l, application: i, showReactions: a, onClose: s, onOpenGameProfileModal: u } = this.props,
            c = this.activity;
        if (null == c || c.type === D.IIU.CUSTOM_STATUS) return null;
        let d = 'ActivityFeed' === t,
            f = 'StreamPreview' === t,
            h = !1;
        (0, R.Z)(c) ? ((e = this.renderXboxImage()), (h = !0)) : null == (e = this.renderImage(c)) && (h = null != (e = this.renderGameImage(c)));
        let g = this.renderName(c),
            v = this.renderDetails(c),
            S = this.renderState(c, i),
            I = this.renderTimePlayed(c),
            x = this.renderChannelDetails(c),
            E = null != n ? n() : null,
            T = this.renderTimeBar(c),
            Z = ![e, g, v, S, I, T, E].some((e) => null != e);
        return (0, r.jsxs)('div', {
            className: o()(this.getTypeClass('activity'), l),
            children: [
                this.renderHeader(Z),
                (0, r.jsx)('div', {
                    className: o()(h ? k.bodyAlignCenter : k.bodyNormal, a && !f && k.wrap),
                    children: (0, r.jsxs)('div', {
                        className: k.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, r.jsxs)(p.Z.Child, {
                                      className: o()((0, P.l)(k, 'content', h ? 'GameImage' : null != e ? 'Images' : 'NoImages', t)),
                                      children: [
                                          (0, r.jsxs)(m.P3F, {
                                              className: o()(null != u && k.openGameProfile),
                                              onClick:
                                                  null != u
                                                      ? (e) => {
                                                            u(e), null == s || s();
                                                        }
                                                      : void 0,
                                              children: [g, v, S, I]
                                          }),
                                          x,
                                          f ? null : T,
                                          d ? E : null
                                      ]
                                  })
                        ]
                    })
                }),
                f ? E : null,
                (0, r.jsx)(V, { activity: c })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            G(this, 'handleOpenSpotifyTrack', () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                c()(null != e, 'Spotify activity was null'), null == t || t(e);
            }),
            G(this, 'handleOpenSpotifyArtist', (e) => {
                let { activity: t, onOpenSpotifyArtist: n, user: l } = this.props;
                c()(null != t, 'Spotify activity was null'), null == n || n(t, l.id, e);
            }),
            G(this, 'handleOpenSpotifyAlbum', () => {
                let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
                c()(null != e, 'Spotify activity was null'), null == t || t(e, n.id);
            });
    }
}
G(W, 'Types', B);
let H = (e) => {
    var t, n, l;
    let i = (0, E.Z)({
        location: 'UserActivity',
        applicationId: null !== (l = null === (t = e.application) || void 0 === t ? void 0 : t.id) && void 0 !== l ? l : null === (n = e.activity) || void 0 === n ? void 0 : n.application_id,
        source: x.m1.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0
    });
    return (0, r.jsx)(W, {
        ...e,
        onOpenGameProfileModal: i
    });
};
H.Types = B;
let J = H;
