n.d(t, {
    Y: () => Y,
    Z: () => H
}),
    n(789020),
    n(47120);
var l,
    i,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(512722),
    u = n.n(c),
    d = n(780384),
    m = n(481060),
    p = n(438139),
    h = n(410030),
    g = n(726542),
    f = n(600164),
    v = n(686546),
    S = n(111028),
    x = n(925329),
    I = n(810568),
    y = n(168524),
    T = n(565138),
    N = n(707409),
    A = n(424678),
    E = n(750154),
    Z = n(768581),
    C = n(630388),
    j = n(153066),
    P = n(740265),
    b = n(122810),
    w = n(833664),
    _ = n(503438),
    R = n(802856),
    L = n(420660),
    M = n(39628),
    U = n(701488),
    k = n(981631),
    O = n(388032),
    D = n(344782);
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
var Y = (((i = {}).ACTIVITY_FEED = 'ActivityFeed'), (i.STREAM_PREVIEW = 'StreamPreview'), (i.VOICE_CHANNEL = 'VoiceChannel'), i);
let z = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500]
    },
    { getAssetImage: B } = n(81063),
    F = (0, p.Z)(
        class extends a.PureComponent {
            render() {
                return (0, r.jsx)('div', {
                    className: D.timestamp,
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
            return (0, _.Z)(t) && (n = k.ABu.SPOTIFY), null != t.platform && [k.M7m.PS4, k.M7m.PS5].includes(t.platform) && (n = k.ABu.PLAYSTATION), n;
        })({ activity: t });
    if (null == l) return null;
    let i = g.Z.get(l);
    return (0, r.jsx)('img', {
        alt: '',
        src: (0, d.ap)(n) ? i.icon.lightSVG : i.icon.darkSVG,
        className: D.platformIcon
    });
}
class W extends (l = a.PureComponent) {
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t && (null == e ? void 0 : e.type) !== k.IIU.PLAYING && (null == e ? void 0 : e.type) !== k.IIU.WATCHING && (null == e ? void 0 : e.type) !== k.IIU.LISTENING && (null == e ? void 0 : e.type) !== k.IIU.HANG_STATUS
            ? {
                  type: k.IIU.PLAYING,
                  name: O.intl.string(O.t.eXan7O)
              }
            : e;
    }
    getTypeClass(e, t) {
        return (0, j.l)(D, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, L.Z)(this.activity) && 'ActivityFeed' === this.props.type;
    }
    renderHeader(e) {
        let t;
        let { hideHeader: n, activityGuild: l, showChannelDetails: i, renderHeaderAccessory: a } = this.props,
            s = this.activity;
        if (n || null == s) return null;
        let { name: c } = s;
        switch (s.type) {
            case k.IIU.STREAMING:
                t = O.intl.formatToPlainString(O.t.Dzgz4u, {
                    platform: [k.ABu.TWITCH, k.ABu.YOUTUBE].includes(c.toLowerCase()) ? c : g.Z.get(k.ABu.TWITCH).name
                });
                break;
            case k.IIU.LISTENING:
                t = O.intl.formatToPlainString(O.t['5sYPnp'], { name: c });
                break;
            case k.IIU.WATCHING:
                t = O.intl.formatToPlainString(O.t.Ge29Z2, { name: c });
                break;
            case k.IIU.PLAYING:
                t = (0, P.Z)(s);
                break;
            case k.IIU.COMPETING:
                t = O.intl.formatToPlainString(O.t.SQCo6O, { name: c });
        }
        if (null != l) {
            var u;
            t = (0, C.yE)(null !== (u = null == s ? void 0 : s.flags) && void 0 !== u ? u : 0, k.xjy.EMBEDDED) ? (s.type === k.IIU.WATCHING ? O.intl.formatToPlainString(O.t['M/L8oq'], { guildName: l.name }) : O.intl.formatToPlainString(O.t['4chKQk'], { guildName: l.name })) : O.intl.formatToPlainString(O.t.sddlGB, { server: l.name });
        }
        return (0, r.jsxs)('div', {
            className: D.headerContainer,
            children: [
                (0, r.jsx)(m.X6q, {
                    className: o()((0, j.l)(D, 'headerText', e ? 'EmptyBody' : 'Normal')),
                    variant: i ? 'text-xs/semibold' : 'eyebrow',
                    children: (0, r.jsx)(S.Z, { children: t })
                }),
                null == a ? void 0 : a()
            ]
        });
    }
    renderXboxImage() {
        return (0, r.jsx)('div', {
            className: D.assets,
            children: (0, r.jsx)('img', {
                alt: '',
                src: g.Z.get(k.ABu.XBOX).icon.customPNG,
                className: o()(this.getTypeClass('assetsLargeImage', 'Xbox'))
            })
        });
    }
    renderImage(e) {
        var t, n, l;
        let i, s;
        let { type: c } = this.props,
            { assets: u, application_id: d } = e;
        if (null == u || (null == u.large_image && null == u.small_image)) return null;
        (0, L.Z)(e) && (i = z[c]);
        let p = (0, _.Z)(e),
            h =
                null != u.large_image
                    ? (0, r.jsx)('img', {
                          alt: null !== (t = u.large_text) && void 0 !== t ? t : '',
                          src: B(d, u.large_image, null != i ? i : [U.Si.LARGE, U.Si.LARGE]),
                          className: o()(this.getTypeClass('assetsLargeImage', this.isStreamerOnTypeActivityFeed() ? k.ABu.TWITCH : ''), {
                              [null !== (n = this.getTypeClass('assetsLargeMask')) && void 0 !== n ? n : '']: null != u.small_image,
                              [D.assetsLargeImageSpotify]: p
                          })
                      })
                    : null;
        if (p)
            h = (0, r.jsx)(m.eee, {
                onClick: this.handleOpenSpotifyAlbum,
                children: h
            });
        else if ((0, E.dS)(e)) {
            let t = (0, E.rq)(e);
            if (null == t) return null;
            h = (0, r.jsx)(v.ZP, {
                mask: v.ZP.Masks.SQUIRCLE,
                width: U.Si.SMALL,
                height: U.Si.SMALL,
                children: (0, r.jsx)('img', {
                    src:
                        null !==
                            (l = Z.ZP.getGuildIconURL({
                                id: t.guildId,
                                icon: u.small_image,
                                size: U.Si.SMALL
                            })) && void 0 !== l
                            ? l
                            : void 0,
                    className: D.assetsLargeImageVoiceChannel,
                    alt: ''
                })
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            '' !== e.url &&
            (h = (0, r.jsxs)('div', {
                className: D.twitchImageContainer,
                children: [
                    (0, r.jsxs)('div', {
                        className: D.twitchImageOverlay,
                        children: [
                            (0, r.jsx)(m.H, {
                                className: D.streamName,
                                children: e.name
                            }),
                            (0, r.jsx)('div', {
                                className: D.streamGame,
                                children: O.intl.format(O.t.gmCZRU, { game: e.details })
                            })
                        ]
                    }),
                    (0, r.jsx)(m.eee, {
                        className: D.twitchBackgroundImage,
                        href: e.url,
                        children: h
                    })
                ]
            })),
        (0, E.dS)(e) ||
            null == u.small_image ||
            (s = (0, r.jsx)(m.ua7, {
                text: '' !== u.small_text ? u.small_text : null,
                position: 'top',
                children: (e) => {
                    var t;
                    return (0, r.jsx)('img', {
                        alt: null !== (t = u.small_text) && void 0 !== t ? t : '',
                        src: B(d, u.small_image, [U.Si.SMALL, U.Si.SMALL]),
                        className: this.getTypeClass('assetsSmallImage', null == h ? 'WithoutLargeImage' : void 0),
                        ...e
                    });
                }
            })),
        null == h)
            ? (0, r.jsx)('div', {
                  className: D.assets,
                  children: s
              })
            : (0, r.jsxs)('div', {
                  className: D.assets,
                  children: [
                      (0, r.jsx)(m.ua7, {
                          text: null != u.large_text ? u.large_text : null,
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
        return null != e.assets || (0, b.Z)(e) || e.type !== k.IIU.PLAYING || 'ActivityFeed' === n || t.bot
            ? null
            : null == l && null != i
              ? (0, r.jsx)('div', { className: o()(D.gameIcon, D.screenshareIcon) })
              : (0, r.jsx)(x.Z, {
                    className: D.gameIcon,
                    game: l
                });
    }
    renderName(e) {
        let { user: t, application: n, hideName: l } = this.props;
        if (l) return null;
        let { details: i, type: a } = e;
        if (a === k.IIU.CUSTOM_STATUS) return null;
        let s = (0, w.Z)(e),
            c = e.name,
            u = c;
        return (s && null != n
            ? (u = (0, r.jsx)('span', {
                  className: D.activityName,
                  children: u
              }))
            : !s &&
              ((c = i),
              (u = i),
              (0, _.Z)(e) && null != e.sync_id && null != i
                  ? (u = (0, r.jsx)(m.eee, {
                        className: D.bodyLink,
                        onClick: this.handleOpenSpotifyTrack,
                        children: i
                    }))
                  : (0, E.dS)(e) && (u = e.name)),
        null == u)
            ? null
            : (0, r.jsx)(m.Text, {
                  title: c,
                  variant: 'text-sm/semibold',
                  className: o()((0, j.l)(D, 'name', t.bot ? 'wrap' : 'normal')),
                  children: u
              });
    }
    renderDetails(e) {
        let t;
        let { details: n, state: l } = e,
            i = n,
            a = n;
        if (e.type === k.IIU.CUSTOM_STATUS) i = l;
        else if (!(0, w.Z)(e)) {
            if (((i = l), (a = l), (0, _.Z)(e) && null != l))
                i = O.intl.format(O.t.uU9le3, {
                    artists: a,
                    artistsHook: (t, n) =>
                        (0, r.jsx)(
                            A.Z,
                            {
                                artists: l,
                                linkClassName: D.bodyLink,
                                canOpen: null != e.sync_id,
                                onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                            },
                            n
                        )
                });
            else if ((0, E.dS)(e)) {
                var s;
                i = null === (s = e.assets) || void 0 === s ? void 0 : s.small_text;
            }
        }
        return null == i || '' === i
            ? null
            : ((0, L.Z)(e) && (i = O.intl.formatToPlainString(O.t.gmCZRU, { game: i })), null != t)
              ? (0, r.jsx)(m.P3F, {
                    onClick: t,
                    title: null != a ? a : void 0,
                    className: D.clickableDetails,
                    children: i
                })
              : (0, r.jsx)('div', {
                    title: null != a ? a : void 0,
                    className: (0, L.Z)(e) || (0, _.Z)(e) ? D.detailsWrap : D.details,
                    children: i
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: l } = this.props;
        return n && null != t
            ? null == l
                ? (0, r.jsx)('div', {
                      className: (0, L.Z)(e) || (0, _.Z)(e) ? D.detailsWrap : D.details,
                      children: O.intl.format(O.t['hq/Qzc'], { guildName: t.name })
                  })
                : (0, r.jsxs)('div', {
                      className: o()((0, L.Z)(e) || (0, _.Z)(e) ? D.detailsWrap : D.details, D.guildDetails),
                      children: [
                          (0, r.jsx)(T.Z, {
                              guild: t,
                              size: T.Z.Sizes.SMOL,
                              className: D.guildIcon
                          }),
                          (0, r.jsx)(m.Fbu, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, r.jsxs)('div', {
                              className: D.voiceChannelInfo,
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
        if (!(0, w.Z)(e) || (0, _.Z)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, b.Z)(e)
              ? (0, r.jsx)(F, { timestamps: n })
              : (0, r.jsx)(N.ZP, {
                    start: n.start,
                    location: N.ZP.Locations.USER_ACTIVITY,
                    className: D.playTime,
                    isApplicationStreaming: null != t
                });
    }
    renderTimeBar(e) {
        if (!(0, _.Z)(e)) return null;
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
            c = a,
            u = a;
        return (!(0, w.Z)(e) &&
            ((c = null == o ? void 0 : o.large_text),
            (u = null == o ? void 0 : o.large_text),
            (0, _.Z)(e) &&
                null != c &&
                (c = O.intl.format(O.t.vOLBEx, {
                    album: u,
                    albumHook: (t, n) =>
                        null != e.sync_id && null != u
                            ? (0, r.jsx)(
                                  m.eee,
                                  {
                                      className: D.bodyLink,
                                      onClick: this.handleOpenSpotifyAlbum,
                                      children: u
                                  },
                                  n
                              )
                            : u
                }))),
        (null != c && '' !== c && e.type !== k.IIU.CUSTOM_STATUS) || (0, E.dS)(e))
            ? ((null == s ? void 0 : s.size) == null && [U.Zc].includes(null !== (n = e.application_id) && void 0 !== n ? n : '')
                  ? (i = O.intl.formatToPlainString(O.t['u//9Bw'], {
                        count: '0',
                        max: null !== (l = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== l ? l : 0
                    }))
                  : (0, E.dS)(e) && (null == s ? void 0 : s.size) != null
                    ? (i = O.intl.formatToPlainString(O.t['JC/3x8'], {
                          numSpeakers: s.size[0],
                          numListeners: s.size[1] - s.size[0]
                      }))
                    : (null == s ? void 0 : s.size) != null &&
                      s.size.length >= 2 &&
                      (i =
                          0 === s.size[1]
                              ? O.intl.formatToPlainString(O.t.IM4J4e, { count: s.size[0] })
                              : O.intl.formatToPlainString(O.t['u//9Bw'], {
                                    count: s.size[0],
                                    max: s.size[1]
                                })),
              (0, r.jsxs)('div', {
                  className: D.state,
                  children: [
                      (0, r.jsx)('span', {
                          title: u,
                          children: c
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
        let { type: t, renderActions: n, className: l, application: i, showReactions: a, onClose: s, onOpenGameProfileModal: c } = this.props,
            u = this.activity;
        if (null == u || u.type === k.IIU.CUSTOM_STATUS) return null;
        let d = 'ActivityFeed' === t,
            p = 'StreamPreview' === t,
            h = !1;
        (0, R.Z)(u) ? ((e = this.renderXboxImage()), (h = !0)) : null == (e = this.renderImage(u)) && (h = null != (e = this.renderGameImage(u)));
        let g = this.renderName(u),
            v = this.renderDetails(u),
            S = this.renderState(u, i),
            x = this.renderTimePlayed(u),
            I = this.renderChannelDetails(u),
            y = null != n ? n() : null,
            T = this.renderTimeBar(u),
            N = ![e, g, v, S, x, T, y].some((e) => null != e);
        return (0, r.jsxs)('div', {
            className: o()(this.getTypeClass('activity'), l),
            children: [
                this.renderHeader(N),
                (0, r.jsx)('div', {
                    className: o()(h ? D.bodyAlignCenter : D.bodyNormal, a && !p && D.wrap),
                    children: (0, r.jsxs)('div', {
                        className: D.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, r.jsxs)(f.Z.Child, {
                                      className: o()((0, j.l)(D, 'content', h ? 'GameImage' : null != e ? 'Images' : 'NoImages', t)),
                                      children: [
                                          (0, r.jsxs)(m.P3F, {
                                              className: o()(null != c && D.openGameProfile),
                                              onClick:
                                                  null != c
                                                      ? (e) => {
                                                            c(e), null == s || s();
                                                        }
                                                      : void 0,
                                              children: [g, v, S, x]
                                          }),
                                          I,
                                          p ? null : T,
                                          d ? y : null
                                      ]
                                  })
                        ]
                    })
                }),
                p ? y : null,
                (0, r.jsx)(V, { activity: u })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            G(this, 'handleOpenSpotifyTrack', () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                u()(null != e, 'Spotify activity was null'), null == t || t(e);
            }),
            G(this, 'handleOpenSpotifyArtist', (e) => {
                let { activity: t, onOpenSpotifyArtist: n, user: l } = this.props;
                u()(null != t, 'Spotify activity was null'), null == n || n(t, l.id, e);
            }),
            G(this, 'handleOpenSpotifyAlbum', () => {
                let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
                u()(null != e, 'Spotify activity was null'), null == t || t(e, n.id);
            });
    }
}
G(W, 'Types', Y);
let J = (e) => {
    var t, n, l;
    let i = (0, y.Z)({
        location: 'UserActivity',
        applicationId: null !== (l = null === (t = e.application) || void 0 === t ? void 0 : t.id) && void 0 !== l ? l : null === (n = e.activity) || void 0 === n ? void 0 : n.application_id,
        source: I.m1.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0
    });
    return (0, r.jsx)(W, {
        ...e,
        onOpenGameProfileModal: i
    });
};
J.Types = Y;
let H = J;
