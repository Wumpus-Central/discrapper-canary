n.d(t, {
    Y: () => z,
    Z: () => J
}),
    n(789020),
    n(47120);
var i,
    l,
    a = n(200651),
    r = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(512722),
    u = n.n(c),
    d = n(780384),
    m = n(481060),
    f = n(438139),
    p = n(410030),
    h = n(726542),
    g = n(600164),
    v = n(686546),
    _ = n(111028),
    S = n(925329),
    I = n(810568),
    x = n(168524),
    E = n(565138),
    C = n(707409),
    Z = n(424678),
    y = n(750154),
    b = n(768581),
    N = n(630388),
    T = n(153066),
    A = n(740265),
    w = n(122810),
    P = n(833664),
    j = n(503438),
    R = n(802856),
    k = n(420660),
    L = n(39628),
    O = n(701488),
    M = n(981631),
    D = n(388032),
    U = n(344782);
function F(e, t, n) {
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
var z = (((l = {}).ACTIVITY_FEED = 'ActivityFeed'), (l.STREAM_PREVIEW = 'StreamPreview'), (l.VOICE_CHANNEL = 'VoiceChannel'), l);
let V = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500]
    },
    { getAssetImage: W } = n(81063),
    B = (0, f.Z)(
        class extends r.PureComponent {
            render() {
                return (0, a.jsx)('div', {
                    className: U.timestamp,
                    children: this.props.message
                });
            }
        }
    );
function Y(e) {
    let { activity: t } = e,
        n = (0, p.ZP)(),
        i = (function (e) {
            let { activity: t } = e,
                n = null;
            return (0, j.Z)(t) && (n = M.ABu.SPOTIFY), null != t.platform && [M.M7m.PS4, M.M7m.PS5].includes(t.platform) && (n = M.ABu.PLAYSTATION), n;
        })({ activity: t });
    if (null == i) return null;
    let l = h.Z.get(i);
    return (0, a.jsx)('img', {
        alt: '',
        src: (0, d.ap)(n) ? l.icon.lightSVG : l.icon.darkSVG,
        className: U.platformIcon
    });
}
class G extends (i = r.PureComponent) {
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t && (null == e ? void 0 : e.type) !== M.IIU.PLAYING && (null == e ? void 0 : e.type) !== M.IIU.WATCHING && (null == e ? void 0 : e.type) !== M.IIU.LISTENING && (null == e ? void 0 : e.type) !== M.IIU.HANG_STATUS
            ? {
                  type: M.IIU.PLAYING,
                  name: D.intl.string(D.t.eXan7O)
              }
            : e;
    }
    getTypeClass(e, t) {
        return (0, T.l)(U, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, k.Z)(this.activity) && 'ActivityFeed' === this.props.type;
    }
    renderHeader(e) {
        let t;
        let { hideHeader: n, activityGuild: i, showChannelDetails: l, renderHeaderAccessory: r } = this.props,
            s = this.activity;
        if (n || null == s) return null;
        let { name: c } = s;
        switch (s.type) {
            case M.IIU.STREAMING:
                t = D.intl.formatToPlainString(D.t.Dzgz4u, {
                    platform: [M.ABu.TWITCH, M.ABu.YOUTUBE].includes(c.toLowerCase()) ? c : h.Z.get(M.ABu.TWITCH).name
                });
                break;
            case M.IIU.LISTENING:
                t = D.intl.formatToPlainString(D.t['5sYPnp'], { name: c });
                break;
            case M.IIU.WATCHING:
                t = D.intl.formatToPlainString(D.t.Ge29Z2, { name: c });
                break;
            case M.IIU.PLAYING:
                t = (0, A.Z)(s);
                break;
            case M.IIU.COMPETING:
                t = D.intl.formatToPlainString(D.t.SQCo6O, { name: c });
        }
        if (null != i) {
            var u;
            t = (0, N.yE)(null !== (u = null == s ? void 0 : s.flags) && void 0 !== u ? u : 0, M.xjy.EMBEDDED) ? (s.type === M.IIU.WATCHING ? D.intl.formatToPlainString(D.t['M/L8oq'], { guildName: i.name }) : D.intl.formatToPlainString(D.t['4chKQk'], { guildName: i.name })) : D.intl.formatToPlainString(D.t.sddlGB, { server: i.name });
        }
        return (0, a.jsxs)('div', {
            className: U.headerContainer,
            children: [
                (0, a.jsx)(m.X6q, {
                    className: o()((0, T.l)(U, 'headerText', e ? 'EmptyBody' : 'Normal')),
                    variant: l ? 'text-xs/semibold' : 'eyebrow',
                    children: (0, a.jsx)(_.Z, { children: t })
                }),
                null == r ? void 0 : r()
            ]
        });
    }
    renderXboxImage() {
        return (0, a.jsx)('div', {
            className: U.assets,
            children: (0, a.jsx)('img', {
                alt: '',
                src: h.Z.get(M.ABu.XBOX).icon.customPNG,
                className: o()(this.getTypeClass('assetsLargeImage', 'Xbox'))
            })
        });
    }
    renderImage(e) {
        var t, n, i;
        let l, s;
        let { type: c } = this.props,
            { assets: u, application_id: d } = e;
        if (null == u || (null == u.large_image && null == u.small_image)) return null;
        (0, k.Z)(e) && (l = V[c]);
        let f = (0, j.Z)(e),
            p =
                null != u.large_image
                    ? (0, a.jsx)('img', {
                          alt: null !== (t = u.large_text) && void 0 !== t ? t : '',
                          src: W(d, u.large_image, null != l ? l : [O.Si.LARGE, O.Si.LARGE]),
                          className: o()(this.getTypeClass('assetsLargeImage', this.isStreamerOnTypeActivityFeed() ? M.ABu.TWITCH : ''), {
                              [null !== (n = this.getTypeClass('assetsLargeMask')) && void 0 !== n ? n : '']: null != u.small_image,
                              [U.assetsLargeImageSpotify]: f
                          })
                      })
                    : null;
        if (f)
            p = (0, a.jsx)(m.eee, {
                onClick: this.handleOpenSpotifyAlbum,
                children: p
            });
        else if ((0, y.dS)(e)) {
            let t = (0, y.rq)(e);
            if (null == t) return null;
            p = (0, a.jsx)(v.ZP, {
                mask: v.ZP.Masks.SQUIRCLE,
                width: O.Si.SMALL,
                height: O.Si.SMALL,
                children: (0, a.jsx)('img', {
                    src:
                        null !==
                            (i = b.ZP.getGuildIconURL({
                                id: t.guildId,
                                icon: u.small_image,
                                size: O.Si.SMALL
                            })) && void 0 !== i
                            ? i
                            : void 0,
                    className: U.assetsLargeImageVoiceChannel,
                    alt: ''
                })
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            '' !== e.url &&
            (p = (0, a.jsxs)('div', {
                className: U.twitchImageContainer,
                children: [
                    (0, a.jsxs)('div', {
                        className: U.twitchImageOverlay,
                        children: [
                            (0, a.jsx)(m.H, {
                                className: U.streamName,
                                children: e.name
                            }),
                            (0, a.jsx)('div', {
                                className: U.streamGame,
                                children: D.intl.format(D.t.gmCZRU, { game: e.details })
                            })
                        ]
                    }),
                    (0, a.jsx)(m.eee, {
                        className: U.twitchBackgroundImage,
                        href: e.url,
                        children: p
                    })
                ]
            })),
        (0, y.dS)(e) ||
            null == u.small_image ||
            (s = (0, a.jsx)(m.ua7, {
                text: '' !== u.small_text ? u.small_text : null,
                position: 'top',
                children: (e) => {
                    var t;
                    return (0, a.jsx)('img', {
                        alt: null !== (t = u.small_text) && void 0 !== t ? t : '',
                        src: W(d, u.small_image, [O.Si.SMALL, O.Si.SMALL]),
                        className: this.getTypeClass('assetsSmallImage', null == p ? 'WithoutLargeImage' : void 0),
                        ...e
                    });
                }
            })),
        null == p)
            ? (0, a.jsx)('div', {
                  className: U.assets,
                  children: s
              })
            : (0, a.jsxs)('div', {
                  className: U.assets,
                  children: [
                      (0, a.jsx)(m.ua7, {
                          text: null != u.large_text ? u.large_text : null,
                          position: 'top',
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return null != p
                                  ? r.cloneElement(p, {
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
        let { user: t, type: n, application: i, activityGuild: l } = this.props;
        return null != e.assets || (0, w.Z)(e) || e.type !== M.IIU.PLAYING || 'ActivityFeed' === n || t.bot
            ? null
            : null == i && null != l
              ? (0, a.jsx)('div', { className: o()(U.gameIcon, U.screenshareIcon) })
              : (0, a.jsx)(S.Z, {
                    className: U.gameIcon,
                    game: i
                });
    }
    renderName(e) {
        let { user: t, application: n, hideName: i } = this.props;
        if (i) return null;
        let { details: l, type: r } = e;
        if (r === M.IIU.CUSTOM_STATUS) return null;
        let s = (0, P.Z)(e),
            c = e.name,
            u = c;
        return (s && null != n
            ? (u = (0, a.jsx)('span', {
                  className: U.activityName,
                  children: u
              }))
            : !s &&
              ((c = l),
              (u = l),
              (0, j.Z)(e) && null != e.sync_id && null != l
                  ? (u = (0, a.jsx)(m.eee, {
                        className: U.bodyLink,
                        onClick: this.handleOpenSpotifyTrack,
                        children: l
                    }))
                  : (0, y.dS)(e) && (u = e.name)),
        null == u)
            ? null
            : (0, a.jsx)(m.Text, {
                  title: c,
                  variant: 'text-sm/semibold',
                  className: o()((0, T.l)(U, 'name', t.bot ? 'wrap' : 'normal')),
                  children: u
              });
    }
    renderDetails(e) {
        let t;
        let { details: n, state: i } = e,
            l = n,
            r = n;
        if (e.type === M.IIU.CUSTOM_STATUS) l = i;
        else if (!(0, P.Z)(e)) {
            if (((l = i), (r = i), (0, j.Z)(e) && null != i))
                l = D.intl.format(D.t.uU9le3, {
                    artists: r,
                    artistsHook: (t, n) =>
                        (0, a.jsx)(
                            Z.Z,
                            {
                                artists: i,
                                linkClassName: U.bodyLink,
                                canOpen: null != e.sync_id,
                                onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                            },
                            n
                        )
                });
            else if ((0, y.dS)(e)) {
                var s;
                l = null === (s = e.assets) || void 0 === s ? void 0 : s.small_text;
            }
        }
        return null == l || '' === l
            ? null
            : ((0, k.Z)(e) && (l = D.intl.formatToPlainString(D.t.gmCZRU, { game: l })), null != t)
              ? (0, a.jsx)(m.P3F, {
                    onClick: t,
                    title: null != r ? r : void 0,
                    className: U.clickableDetails,
                    children: l
                })
              : (0, a.jsx)('div', {
                    title: null != r ? r : void 0,
                    className: (0, k.Z)(e) || (0, j.Z)(e) ? U.detailsWrap : U.details,
                    children: l
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: i } = this.props;
        return n && null != t
            ? null == i
                ? (0, a.jsx)('div', {
                      className: (0, k.Z)(e) || (0, j.Z)(e) ? U.detailsWrap : U.details,
                      children: D.intl.format(D.t['hq/Qzc'], { guildName: t.name })
                  })
                : (0, a.jsxs)('div', {
                      className: o()((0, k.Z)(e) || (0, j.Z)(e) ? U.detailsWrap : U.details, U.guildDetails),
                      children: [
                          (0, a.jsx)(E.Z, {
                              guild: t,
                              size: E.Z.Sizes.SMOL,
                              className: U.guildIcon
                          }),
                          (0, a.jsx)(m.Fbu, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, a.jsxs)('div', {
                              className: U.voiceChannelInfo,
                              children: [
                                  (0, a.jsx)(m.gj8, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                                  (0, a.jsx)(m.Text, {
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
        if (!(0, P.Z)(e) || (0, j.Z)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, w.Z)(e)
              ? (0, a.jsx)(B, { timestamps: n })
              : (0, a.jsx)(C.ZP, {
                    start: n.start,
                    location: C.ZP.Locations.USER_ACTIVITY,
                    className: U.playTime,
                    isApplicationStreaming: null != t
                });
    }
    renderTimeBar(e) {
        if (!(0, j.Z)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: n, end: i } = t;
        return null == n || null == i
            ? null
            : (0, a.jsx)(L.Z, {
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
        return (!(0, P.Z)(e) &&
            ((c = null == o ? void 0 : o.large_text),
            (u = null == o ? void 0 : o.large_text),
            (0, j.Z)(e) &&
                null != c &&
                (c = D.intl.format(D.t.vOLBEx, {
                    album: u,
                    albumHook: (t, n) =>
                        null != e.sync_id && null != u
                            ? (0, a.jsx)(
                                  m.eee,
                                  {
                                      className: U.bodyLink,
                                      onClick: this.handleOpenSpotifyAlbum,
                                      children: u
                                  },
                                  n
                              )
                            : u
                }))),
        (null != c && '' !== c && e.type !== M.IIU.CUSTOM_STATUS) || (0, y.dS)(e))
            ? ((null == s ? void 0 : s.size) == null && [O.Zc].includes(null !== (n = e.application_id) && void 0 !== n ? n : '')
                  ? (l = D.intl.formatToPlainString(D.t['u//9Bw'], {
                        count: '0',
                        max: null !== (i = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== i ? i : 0
                    }))
                  : (0, y.dS)(e) && (null == s ? void 0 : s.size) != null
                    ? (l = D.intl.formatToPlainString(D.t['JC/3x8'], {
                          numSpeakers: s.size[0],
                          numListeners: s.size[1] - s.size[0]
                      }))
                    : (null == s ? void 0 : s.size) != null &&
                      s.size.length >= 2 &&
                      (l =
                          0 === s.size[1]
                              ? D.intl.formatToPlainString(D.t.IM4J4e, { count: s.size[0] })
                              : D.intl.formatToPlainString(D.t['u//9Bw'], {
                                    count: s.size[0],
                                    max: s.size[1]
                                })),
              (0, a.jsxs)('div', {
                  className: U.state,
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
        let { type: t, renderActions: n, className: i, application: l, showReactions: r, onClose: s, onOpenGameProfileModal: c } = this.props,
            u = this.activity;
        if (null == u || u.type === M.IIU.CUSTOM_STATUS) return null;
        let d = 'ActivityFeed' === t,
            f = 'StreamPreview' === t,
            p = !1;
        (0, R.Z)(u) ? ((e = this.renderXboxImage()), (p = !0)) : null == (e = this.renderImage(u)) && (p = null != (e = this.renderGameImage(u)));
        let h = this.renderName(u),
            v = this.renderDetails(u),
            _ = this.renderState(u, l),
            S = this.renderTimePlayed(u),
            I = this.renderChannelDetails(u),
            x = null != n ? n() : null,
            E = this.renderTimeBar(u),
            C = ![e, h, v, _, S, E, x].some((e) => null != e);
        return (0, a.jsxs)('div', {
            className: o()(this.getTypeClass('activity'), i),
            children: [
                this.renderHeader(C),
                (0, a.jsx)('div', {
                    className: o()(p ? U.bodyAlignCenter : U.bodyNormal, r && !f && U.wrap),
                    children: (0, a.jsxs)('div', {
                        className: U.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, a.jsxs)(g.Z.Child, {
                                      className: o()((0, T.l)(U, 'content', p ? 'GameImage' : null != e ? 'Images' : 'NoImages', t)),
                                      children: [
                                          (0, a.jsxs)(m.P3F, {
                                              className: o()(null != c && U.openGameProfile),
                                              onClick:
                                                  null != c
                                                      ? (e) => {
                                                            c(e), null == s || s();
                                                        }
                                                      : void 0,
                                              children: [h, v, _, S]
                                          }),
                                          I,
                                          f ? null : E,
                                          d ? x : null
                                      ]
                                  })
                        ]
                    })
                }),
                f ? x : null,
                (0, a.jsx)(Y, { activity: u })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            F(this, 'handleOpenSpotifyTrack', () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                u()(null != e, 'Spotify activity was null'), null == t || t(e);
            }),
            F(this, 'handleOpenSpotifyArtist', (e) => {
                let { activity: t, onOpenSpotifyArtist: n, user: i } = this.props;
                u()(null != t, 'Spotify activity was null'), null == n || n(t, i.id, e);
            }),
            F(this, 'handleOpenSpotifyAlbum', () => {
                let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
                u()(null != e, 'Spotify activity was null'), null == t || t(e, n.id);
            });
    }
}
F(G, 'Types', z);
let H = (e) => {
    var t, n, i;
    let l = (0, x.Z)({
        location: 'UserActivity',
        applicationId: null !== (i = null === (t = e.application) || void 0 === t ? void 0 : t.id) && void 0 !== i ? i : null === (n = e.activity) || void 0 === n ? void 0 : n.application_id,
        source: I.m1.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0
    });
    return (0, a.jsx)(G, {
        ...e,
        onOpenGameProfileModal: l
    });
};
H.Types = z;
let J = H;
