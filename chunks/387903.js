n.d(t, {
    Y: () => V,
    Z: () => X
}),
    n(789020),
    n(47120);
var r,
    l,
    i = n(200651),
    a = n(192379),
    o = n(120356),
    s = n.n(o),
    c = n(512722),
    u = n.n(c),
    d = n(780384),
    f = n(481060),
    p = n(438139),
    m = n(410030),
    g = n(726542),
    y = n(600164),
    b = n(686546),
    h = n(111028),
    v = n(925329),
    O = n(810568),
    j = n(168524),
    S = n(565138),
    N = n(707409),
    P = n(424678),
    I = n(750154),
    x = n(768581),
    E = n(630388),
    w = n(153066),
    Z = n(740265),
    T = n(122810),
    A = n(833664),
    C = n(503438),
    D = n(802856),
    _ = n(420660),
    k = n(39628),
    W = n(701488),
    R = n(981631),
    M = n(388032),
    L = n(888552);
function U(e, t, n) {
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
function G(e) {
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
                U(e, t, n[t]);
            });
    }
    return e;
}
var V = (((l = {}).ACTIVITY_FEED = 'ActivityFeed'), (l.STREAM_PREVIEW = 'StreamPreview'), (l.VOICE_CHANNEL = 'VoiceChannel'), l);
let F = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500]
    },
    { getAssetImage: B } = n(81063),
    Y = (0, p.Z)(
        class extends a.PureComponent {
            render() {
                return (0, i.jsx)('div', {
                    className: L.timestamp,
                    children: this.props.message
                });
            }
        }
    );
function z(e) {
    let { activity: t } = e,
        n = (0, m.ZP)(),
        r = (function (e) {
            let { activity: t } = e,
                n = null;
            return (0, C.Z)(t) && (n = R.ABu.SPOTIFY), null != t.platform && [R.M7m.PS4, R.M7m.PS5].includes(t.platform) && (n = R.ABu.PLAYSTATION), n;
        })({ activity: t });
    if (null == r) return null;
    let l = g.Z.get(r);
    return (0, i.jsx)('img', {
        alt: '',
        src: (0, d.ap)(n) ? l.icon.lightSVG : l.icon.darkSVG,
        className: L.platformIcon
    });
}
class H extends (r = a.PureComponent) {
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t && (null == e ? void 0 : e.type) !== R.IIU.PLAYING && (null == e ? void 0 : e.type) !== R.IIU.WATCHING && (null == e ? void 0 : e.type) !== R.IIU.LISTENING && (null == e ? void 0 : e.type) !== R.IIU.HANG_STATUS
            ? {
                  type: R.IIU.PLAYING,
                  name: M.NW.string(M.t.eXan7O)
              }
            : e;
    }
    getTypeClass(e, t) {
        return (0, w.l)(L, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, _.Z)(this.activity) && 'ActivityFeed' === this.props.type;
    }
    renderHeader(e) {
        let t;
        let { hideHeader: n, activityGuild: r, showChannelDetails: l, renderHeaderAccessory: a } = this.props,
            o = this.activity;
        if (n || null == o) return null;
        let { name: c } = o;
        switch (o.type) {
            case R.IIU.STREAMING:
                t = M.NW.formatToPlainString(M.t.Dzgz4u, {
                    platform: [R.ABu.TWITCH, R.ABu.YOUTUBE].includes(c.toLowerCase()) ? c : g.Z.get(R.ABu.TWITCH).name
                });
                break;
            case R.IIU.LISTENING:
                t = M.NW.formatToPlainString(M.t['5sYPnp'], { name: c });
                break;
            case R.IIU.WATCHING:
                t = M.NW.formatToPlainString(M.t.Ge29Z2, { name: c });
                break;
            case R.IIU.PLAYING:
                t = (0, Z.Z)(o);
                break;
            case R.IIU.COMPETING:
                t = M.NW.formatToPlainString(M.t.SQCo6O, { name: c });
        }
        if (null != r) {
            var u;
            t = (0, E.yE)(null !== (u = null == o ? void 0 : o.flags) && void 0 !== u ? u : 0, R.xjy.EMBEDDED) ? (o.type === R.IIU.WATCHING ? M.NW.formatToPlainString(M.t['M/L8oq'], { guildName: r.name }) : M.NW.formatToPlainString(M.t['4chKQk'], { guildName: r.name })) : M.NW.formatToPlainString(M.t.sddlGB, { server: r.name });
        }
        return (0, i.jsxs)('div', {
            className: L.headerContainer,
            children: [
                (0, i.jsx)(f.X6q, {
                    className: s()((0, w.l)(L, 'headerText', e ? 'EmptyBody' : 'Normal')),
                    variant: l ? 'text-xs/semibold' : 'eyebrow',
                    children: (0, i.jsx)(h.Z, { children: t })
                }),
                null == a ? void 0 : a()
            ]
        });
    }
    renderXboxImage() {
        return (0, i.jsx)('div', {
            className: L.assets,
            children: (0, i.jsx)('img', {
                alt: '',
                src: g.Z.get(R.ABu.XBOX).icon.customPNG,
                className: s()(this.getTypeClass('assetsLargeImage', 'Xbox'))
            })
        });
    }
    renderImage(e) {
        var t, n, r;
        let l, o;
        let { type: c } = this.props,
            { assets: u, application_id: d } = e;
        if (null == u || (null == u.large_image && null == u.small_image)) return null;
        (0, _.Z)(e) && (l = F[c]);
        let p = (0, C.Z)(e),
            m =
                null != u.large_image
                    ? (0, i.jsx)('img', {
                          alt: null !== (t = u.large_text) && void 0 !== t ? t : '',
                          src: B(d, u.large_image, null != l ? l : [W.Si.LARGE, W.Si.LARGE]),
                          className: s()(this.getTypeClass('assetsLargeImage', this.isStreamerOnTypeActivityFeed() ? R.ABu.TWITCH : ''), {
                              [null !== (n = this.getTypeClass('assetsLargeMask')) && void 0 !== n ? n : '']: null != u.small_image,
                              [L.assetsLargeImageSpotify]: p
                          })
                      })
                    : null;
        if (p)
            m = (0, i.jsx)(f.eee, {
                onClick: this.handleOpenSpotifyAlbum,
                children: m
            });
        else if ((0, I.dS)(e)) {
            let t = (0, I.rq)(e);
            if (null == t) return null;
            m = (0, i.jsx)(b.ZP, {
                mask: b.ZP.Masks.SQUIRCLE,
                width: W.Si.SMALL,
                height: W.Si.SMALL,
                children: (0, i.jsx)('img', {
                    src:
                        null !==
                            (r = x.ZP.getGuildIconURL({
                                id: t.guildId,
                                icon: u.small_image,
                                size: W.Si.SMALL
                            })) && void 0 !== r
                            ? r
                            : void 0,
                    className: L.assetsLargeImageVoiceChannel,
                    alt: ''
                })
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            '' !== e.url &&
            (m = (0, i.jsxs)('div', {
                className: L.twitchImageContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: L.twitchImageOverlay,
                        children: [
                            (0, i.jsx)(f.H, {
                                className: L.streamName,
                                children: e.name
                            }),
                            (0, i.jsx)('div', {
                                className: L.streamGame,
                                children: M.NW.format(M.t.gmCZRU, { game: e.details })
                            })
                        ]
                    }),
                    (0, i.jsx)(f.eee, {
                        className: L.twitchBackgroundImage,
                        href: e.url,
                        children: m
                    })
                ]
            })),
        (0, I.dS)(e) ||
            null == u.small_image ||
            (o = (0, i.jsx)(f.ua7, {
                text: '' !== u.small_text ? u.small_text : null,
                position: 'top',
                children: (e) => {
                    var t;
                    return (0, i.jsx)(
                        'img',
                        G(
                            {
                                alt: null !== (t = u.small_text) && void 0 !== t ? t : '',
                                src: B(d, u.small_image, [W.Si.SMALL, W.Si.SMALL]),
                                className: this.getTypeClass('assetsSmallImage', null == m ? 'WithoutLargeImage' : void 0)
                            },
                            e
                        )
                    );
                }
            })),
        null == m)
            ? (0, i.jsx)('div', {
                  className: L.assets,
                  children: o
              })
            : (0, i.jsxs)('div', {
                  className: L.assets,
                  children: [
                      (0, i.jsx)(f.ua7, {
                          text: null != u.large_text ? u.large_text : null,
                          position: 'top',
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return null != m
                                  ? a.cloneElement(m, {
                                        onMouseEnter: t,
                                        onMouseLeave: n
                                    })
                                  : null;
                          }
                      }),
                      o
                  ]
              });
    }
    renderGameImage(e) {
        let { user: t, type: n, application: r, activityGuild: l } = this.props;
        return null != e.assets || (0, T.Z)(e) || e.type !== R.IIU.PLAYING || 'ActivityFeed' === n || t.bot
            ? null
            : null == r && null != l
              ? (0, i.jsx)('div', { className: s()(L.gameIcon, L.screenshareIcon) })
              : (0, i.jsx)(v.Z, {
                    className: L.gameIcon,
                    game: r
                });
    }
    renderName(e) {
        let { user: t, application: n, hideName: r } = this.props;
        if (r) return null;
        let { details: l, type: a } = e;
        if (a === R.IIU.CUSTOM_STATUS) return null;
        let o = (0, A.Z)(e),
            c = e.name,
            u = c;
        return (o && null != n
            ? (u = (0, i.jsx)('span', {
                  className: L.activityName,
                  children: u
              }))
            : !o &&
              ((c = l),
              (u = l),
              (0, C.Z)(e) && null != e.sync_id && null != l
                  ? (u = (0, i.jsx)(f.eee, {
                        className: L.bodyLink,
                        onClick: this.handleOpenSpotifyTrack,
                        children: l
                    }))
                  : (0, I.dS)(e) && (u = e.name)),
        null == u)
            ? null
            : (0, i.jsx)(f.Text, {
                  title: c,
                  variant: 'text-sm/semibold',
                  className: s()((0, w.l)(L, 'name', t.bot ? 'wrap' : 'normal')),
                  children: u
              });
    }
    renderDetails(e) {
        let t;
        let { details: n, state: r } = e,
            l = n,
            a = n;
        if (e.type === R.IIU.CUSTOM_STATUS) l = r;
        else if (!(0, A.Z)(e)) {
            if (((l = r), (a = r), (0, C.Z)(e) && null != r))
                l = M.NW.format(M.t.uU9le3, {
                    artists: a,
                    artistsHook: (t, n) =>
                        (0, i.jsx)(
                            P.Z,
                            {
                                artists: r,
                                linkClassName: L.bodyLink,
                                canOpen: null != e.sync_id,
                                onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                            },
                            n
                        )
                });
            else if ((0, I.dS)(e)) {
                var o;
                l = null === (o = e.assets) || void 0 === o ? void 0 : o.small_text;
            }
        }
        return null == l || '' === l
            ? null
            : ((0, _.Z)(e) && (l = M.NW.formatToPlainString(M.t.gmCZRU, { game: l })), null != t)
              ? (0, i.jsx)(f.P3F, {
                    onClick: t,
                    title: null != a ? a : void 0,
                    className: L.clickableDetails,
                    children: l
                })
              : (0, i.jsx)('div', {
                    title: null != a ? a : void 0,
                    className: (0, _.Z)(e) || (0, C.Z)(e) ? L.detailsWrap : L.details,
                    children: l
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: r } = this.props;
        return n && null != t
            ? null == r
                ? (0, i.jsx)('div', {
                      className: (0, _.Z)(e) || (0, C.Z)(e) ? L.detailsWrap : L.details,
                      children: M.NW.format(M.t['hq/Qzc'], { guildName: t.name })
                  })
                : (0, i.jsxs)('div', {
                      className: s()((0, _.Z)(e) || (0, C.Z)(e) ? L.detailsWrap : L.details, L.guildDetails),
                      children: [
                          (0, i.jsx)(S.Z, {
                              guild: t,
                              size: S.Z.Sizes.SMOL,
                              className: L.guildIcon
                          }),
                          (0, i.jsx)(f.Fbu, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, i.jsxs)('div', {
                              className: L.voiceChannelInfo,
                              children: [
                                  (0, i.jsx)(f.gj8, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                                  (0, i.jsx)(f.Text, {
                                      variant: 'text-xs/normal',
                                      children: null == r ? void 0 : r.name
                                  })
                              ]
                          })
                      ]
                  })
            : null;
    }
    renderTimePlayed(e) {
        let { activityGuild: t } = this.props;
        if (!(0, A.Z)(e) || (0, C.Z)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, T.Z)(e)
              ? (0, i.jsx)(Y, { timestamps: n })
              : (0, i.jsx)(N.ZP, {
                    start: n.start,
                    location: N.ZP.Locations.USER_ACTIVITY,
                    className: L.playTime,
                    isApplicationStreaming: null != t
                });
    }
    renderTimeBar(e) {
        if (!(0, C.Z)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: n, end: r } = t;
        return null == n || null == r
            ? null
            : (0, i.jsx)(k.Z, {
                  start: n,
                  end: r,
                  className: this.getTypeClass('timeBar'),
                  themed: 'VoiceChannel' === this.props.type
              });
    }
    renderState(e, t) {
        var n, r;
        let l;
        let { state: a, party: o, assets: s } = e,
            c = a,
            u = a;
        return (!(0, A.Z)(e) &&
            ((c = null == s ? void 0 : s.large_text),
            (u = null == s ? void 0 : s.large_text),
            (0, C.Z)(e) &&
                null != c &&
                (c = M.NW.format(M.t.vOLBEx, {
                    album: u,
                    albumHook: (t, n) =>
                        null != e.sync_id && null != u
                            ? (0, i.jsx)(
                                  f.eee,
                                  {
                                      className: L.bodyLink,
                                      onClick: this.handleOpenSpotifyAlbum,
                                      children: u
                                  },
                                  n
                              )
                            : u
                }))),
        (null != c && '' !== c && e.type !== R.IIU.CUSTOM_STATUS) || (0, I.dS)(e))
            ? ((null == o ? void 0 : o.size) == null && [W.Zc].includes(null !== (n = e.application_id) && void 0 !== n ? n : '')
                  ? (l = M.NW.formatToPlainString(M.t['u//9Bw'], {
                        count: '0',
                        max: null !== (r = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== r ? r : 0
                    }))
                  : (0, I.dS)(e) && (null == o ? void 0 : o.size) != null
                    ? (l = M.NW.formatToPlainString(M.t['JC/3x8'], {
                          numSpeakers: o.size[0],
                          numListeners: o.size[1] - o.size[0]
                      }))
                    : (null == o ? void 0 : o.size) != null &&
                      o.size.length >= 2 &&
                      (l =
                          0 === o.size[1]
                              ? M.NW.formatToPlainString(M.t.IM4J4e, { count: o.size[0] })
                              : M.NW.formatToPlainString(M.t['u//9Bw'], {
                                    count: o.size[0],
                                    max: o.size[1]
                                })),
              (0, i.jsxs)('div', {
                  className: L.state,
                  children: [
                      (0, i.jsx)('span', {
                          title: u,
                          children: c
                      }),
                      null != l
                          ? (0, i.jsxs)('span', {
                                children: [' ', l]
                            })
                          : null
                  ]
              }))
            : null;
    }
    render() {
        let e;
        let { type: t, renderActions: n, className: r, application: l, showReactions: a, onClose: o, onOpenGameProfileModal: c } = this.props,
            u = this.activity;
        if (null == u || u.type === R.IIU.CUSTOM_STATUS) return null;
        let d = 'ActivityFeed' === t,
            p = 'StreamPreview' === t,
            m = !1;
        (0, D.Z)(u) ? ((e = this.renderXboxImage()), (m = !0)) : null == (e = this.renderImage(u)) && (m = null != (e = this.renderGameImage(u)));
        let g = this.renderName(u),
            b = this.renderDetails(u),
            h = this.renderState(u, l),
            v = this.renderTimePlayed(u),
            O = this.renderChannelDetails(u),
            j = null != n ? n() : null,
            S = this.renderTimeBar(u),
            N = ![e, g, b, h, v, S, j].some((e) => null != e);
        return (0, i.jsxs)('div', {
            className: s()(this.getTypeClass('activity'), r),
            children: [
                this.renderHeader(N),
                (0, i.jsx)('div', {
                    className: s()(m ? L.bodyAlignCenter : L.bodyNormal, a && !p && L.wrap),
                    children: (0, i.jsxs)('div', {
                        className: L.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, i.jsxs)(y.Z.Child, {
                                      className: s()((0, w.l)(L, 'content', m ? 'GameImage' : null != e ? 'Images' : 'NoImages', t)),
                                      children: [
                                          (0, i.jsxs)(f.P3F, {
                                              className: s()(null != c && L.openGameProfile),
                                              onClick:
                                                  null != c
                                                      ? (e) => {
                                                            c(e), null == o || o();
                                                        }
                                                      : void 0,
                                              children: [g, b, h, v]
                                          }),
                                          O,
                                          p ? null : S,
                                          d ? j : null
                                      ]
                                  })
                        ]
                    })
                }),
                p ? j : null,
                (0, i.jsx)(z, { activity: u })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            U(this, 'handleOpenSpotifyTrack', () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                u()(null != e, 'Spotify activity was null'), null == t || t(e);
            }),
            U(this, 'handleOpenSpotifyArtist', (e) => {
                let { activity: t, onOpenSpotifyArtist: n, user: r } = this.props;
                u()(null != t, 'Spotify activity was null'), null == n || n(t, r.id, e);
            }),
            U(this, 'handleOpenSpotifyAlbum', () => {
                let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
                u()(null != e, 'Spotify activity was null'), null == t || t(e, n.id);
            });
    }
}
U(H, 'Types', V);
let J = (e) => {
    var t, n, r, l, a;
    let o = (0, j.Z)({
        location: 'UserActivity',
        applicationId: null !== (r = null === (t = e.application) || void 0 === t ? void 0 : t.id) && void 0 !== r ? r : null === (n = e.activity) || void 0 === n ? void 0 : n.application_id,
        source: O.m1.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0
    });
    return (0, i.jsx)(
        H,
        ((l = G({}, e)),
        (a = a = { onOpenGameProfileModal: o }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(a)).forEach(function (e) {
                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e));
              }),
        l)
    );
};
J.Types = V;
let X = J;
