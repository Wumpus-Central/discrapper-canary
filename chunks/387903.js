n.d(t, {
    Y: () => B,
    Z: () => X
}),
    n(997841),
    n(388685);
var r,
    l,
    i = n(255367),
    o = n(73800),
    a = n(120356),
    s = n.n(a),
    c = n(512722),
    u = n.n(c),
    d = n(780384),
    p = n(481060),
    f = n(438139),
    m = n(410030),
    g = n(726542),
    b = n(600164),
    O = n(686546),
    h = n(111028),
    y = n(925329),
    v = n(810568),
    S = n(168524),
    j = n(565138),
    P = n(707409),
    E = n(424678),
    I = n(750154),
    Z = n(81063),
    x = n(768581),
    C = n(630388),
    T = n(153066),
    N = n(740265),
    A = n(122810),
    w = n(833664),
    D = n(503438),
    _ = n(802856),
    L = n(420660),
    k = n(39628),
    M = n(701488),
    U = n(981631),
    R = n(388032),
    V = n(636424);
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
function Y(e) {
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
                F(e, t, n[t]);
            });
    }
    return e;
}
var B = (((l = {}).ACTIVITY_FEED = 'ActivityFeed'), (l.STREAM_PREVIEW = 'StreamPreview'), (l.VOICE_CHANNEL = 'VoiceChannel'), l);
let G = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500]
    },
    z = (0, f.Z)(
        class extends o.PureComponent {
            render() {
                return (0, i.jsx)('div', {
                    className: V.timestamp,
                    children: this.props.message
                });
            }
        }
    );
function W(e) {
    let { activity: t } = e,
        n = (0, m.ZP)(),
        r = (function (e) {
            let { activity: t } = e,
                n = null;
            return (0, D.Z)(t) && (n = U.ABu.SPOTIFY), null != t.platform && [U.M7m.PS4, U.M7m.PS5].includes(t.platform) && (n = U.ABu.PLAYSTATION), n;
        })({ activity: t });
    if (null == r) return null;
    let l = g.Z.get(r);
    return (0, i.jsx)('img', {
        alt: '',
        src: (0, d.ap)(n) ? l.icon.lightSVG : l.icon.darkSVG,
        className: V.platformIcon
    });
}
class H extends (r = o.PureComponent) {
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t && (null == e ? void 0 : e.type) !== U.IIU.PLAYING && (null == e ? void 0 : e.type) !== U.IIU.WATCHING && (null == e ? void 0 : e.type) !== U.IIU.LISTENING && (null == e ? void 0 : e.type) !== U.IIU.HANG_STATUS
            ? {
                  type: U.IIU.PLAYING,
                  name: R.intl.string(R.t.eXan7O)
              }
            : e;
    }
    getTypeClass(e, t) {
        return (0, T.l)(V, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, L.Z)(this.activity) && 'ActivityFeed' === this.props.type;
    }
    renderHeader(e) {
        let t,
            { hideHeader: n, activityGuild: r, showChannelDetails: l, renderHeaderAccessory: o } = this.props,
            a = this.activity;
        if (n || null == a) return null;
        let { name: c } = a;
        switch (a.type) {
            case U.IIU.STREAMING:
                t = R.intl.formatToPlainString(R.t.Dzgz4u, {
                    platform: [U.ABu.TWITCH, U.ABu.YOUTUBE].includes(c.toLowerCase()) ? c : g.Z.get(U.ABu.TWITCH).name
                });
                break;
            case U.IIU.LISTENING:
                t = R.intl.formatToPlainString(R.t['5sYPnp'], { name: c });
                break;
            case U.IIU.WATCHING:
                t = R.intl.formatToPlainString(R.t.Ge29Z2, { name: c });
                break;
            case U.IIU.PLAYING:
                t = (0, N.Z)(a);
                break;
            case U.IIU.COMPETING:
                t = R.intl.formatToPlainString(R.t.SQCo6O, { name: c });
        }
        if (null != r) {
            var u;
            t = (0, C.yE)(null != (u = null == a ? void 0 : a.flags) ? u : 0, U.xjy.EMBEDDED) ? (a.type === U.IIU.WATCHING ? R.intl.formatToPlainString(R.t['M/L8oq'], { guildName: r.name }) : R.intl.formatToPlainString(R.t['4chKQk'], { guildName: r.name })) : R.intl.formatToPlainString(R.t.sddlGB, { server: r.name });
        }
        return (0, i.jsxs)('div', {
            className: V.headerContainer,
            children: [
                (0, i.jsx)(p.X6q, {
                    className: s()((0, T.l)(V, 'headerText', e ? 'EmptyBody' : 'Normal')),
                    variant: l ? 'text-xs/semibold' : 'eyebrow',
                    children: (0, i.jsx)(h.Z, { children: t })
                }),
                null == o ? void 0 : o()
            ]
        });
    }
    renderXboxImage() {
        return (0, i.jsx)('div', {
            className: V.assets,
            children: (0, i.jsx)('img', {
                alt: '',
                src: g.Z.get(U.ABu.XBOX).icon.customPNG,
                className: s()(this.getTypeClass('assetsLargeImage', 'Xbox'))
            })
        });
    }
    renderImage(e) {
        var t, n, r;
        let l,
            a,
            { type: c } = this.props,
            { assets: u, application_id: d } = e;
        if (null == u || (null == u.large_image && null == u.small_image)) return null;
        (0, L.Z)(e) && (l = G[c]);
        let f = (0, D.Z)(e),
            m =
                null != u.large_image
                    ? (0, i.jsx)('img', {
                          alt: null != (t = u.large_text) ? t : '',
                          src: (0, Z.xF)(d, u.large_image, null != l ? l : [M.Si.LARGE, M.Si.LARGE]),
                          className: s()(this.getTypeClass('assetsLargeImage', this.isStreamerOnTypeActivityFeed() ? U.ABu.TWITCH : ''), {
                              [null != (n = this.getTypeClass('assetsLargeMask')) ? n : '']: null != u.small_image,
                              [V.assetsLargeImageSpotify]: f
                          })
                      })
                    : null;
        if (f)
            m = (0, i.jsx)(p.eee, {
                onClick: this.handleOpenSpotifyAlbum,
                children: m
            });
        else if ((0, I.dS)(e)) {
            let t = (0, I.rq)(e);
            if (null == t) return null;
            m = (0, i.jsx)(O.ZP, {
                mask: O.ZP.Masks.SQUIRCLE,
                width: M.Si.SMALL,
                height: M.Si.SMALL,
                children: (0, i.jsx)('img', {
                    src:
                        null !=
                        (r = x.ZP.getGuildIconURL({
                            id: t.guildId,
                            icon: u.small_image,
                            size: M.Si.SMALL
                        }))
                            ? r
                            : void 0,
                    className: V.assetsLargeImageVoiceChannel,
                    alt: ''
                })
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            '' !== e.url &&
            (m = (0, i.jsxs)('div', {
                className: V.twitchImageContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: V.twitchImageOverlay,
                        children: [
                            (0, i.jsx)(p.H, {
                                className: V.streamName,
                                children: e.name
                            }),
                            (0, i.jsx)('div', {
                                className: V.streamGame,
                                children: R.intl.format(R.t.gmCZRU, { game: e.details })
                            })
                        ]
                    }),
                    (0, i.jsx)(p.eee, {
                        className: V.twitchBackgroundImage,
                        href: e.url,
                        children: m
                    })
                ]
            })),
        (0, I.dS)(e) ||
            null == u.small_image ||
            (a = (0, i.jsx)(p.ua7, {
                text: '' !== u.small_text ? u.small_text : null,
                position: 'top',
                children: (e) => {
                    var t;
                    return (0, i.jsx)(
                        'img',
                        Y(
                            {
                                alt: null != (t = u.small_text) ? t : '',
                                src: (0, Z.xF)(d, u.small_image, [M.Si.SMALL, M.Si.SMALL]),
                                className: this.getTypeClass('assetsSmallImage', null == m ? 'WithoutLargeImage' : void 0)
                            },
                            e
                        )
                    );
                }
            })),
        null == m)
            ? (0, i.jsx)('div', {
                  className: V.assets,
                  children: a
              })
            : (0, i.jsxs)('div', {
                  className: V.assets,
                  children: [
                      (0, i.jsx)(p.ua7, {
                          text: null != u.large_text ? u.large_text : null,
                          position: 'top',
                          children: (e) => {
                              let { onMouseEnter: t, onMouseLeave: n } = e;
                              return null != m
                                  ? o.cloneElement(m, {
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
        let { user: t, type: n, application: r, activityGuild: l } = this.props;
        return null != e.assets || (0, A.Z)(e) || e.type !== U.IIU.PLAYING || 'ActivityFeed' === n || t.bot
            ? null
            : null == r && null != l
              ? (0, i.jsx)('div', { className: s()(V.gameIcon, V.screenshareIcon) })
              : (0, i.jsx)(y.Z, {
                    className: V.gameIcon,
                    game: r
                });
    }
    renderName(e) {
        let { user: t, application: n, hideName: r } = this.props;
        if (r) return null;
        let { details: l, type: o } = e;
        if (o === U.IIU.CUSTOM_STATUS) return null;
        let a = (0, w.Z)(e),
            c = e.name,
            u = c;
        return (a && null != n
            ? (u = (0, i.jsx)('span', {
                  className: V.activityName,
                  children: u
              }))
            : !a &&
              ((c = l),
              (u = l),
              (0, D.Z)(e) && null != e.sync_id && null != l
                  ? (u = (0, i.jsx)(p.eee, {
                        className: V.bodyLink,
                        onClick: this.handleOpenSpotifyTrack,
                        children: l
                    }))
                  : (0, I.dS)(e) && (u = e.name)),
        null == u)
            ? null
            : (0, i.jsx)(p.Text, {
                  title: c,
                  variant: 'text-sm/semibold',
                  className: s()((0, T.l)(V, 'name', t.bot ? 'wrap' : 'normal')),
                  children: u
              });
    }
    renderDetails(e) {
        let t,
            { details: n, state: r } = e,
            l = n,
            o = n;
        if (e.type === U.IIU.CUSTOM_STATUS) l = r;
        else if (!(0, w.Z)(e)) {
            if (((l = r), (o = r), (0, D.Z)(e) && null != r))
                l = R.intl.format(R.t.uU9le3, {
                    artists: o,
                    artistsHook: (t, n) =>
                        (0, i.jsx)(
                            E.Z,
                            {
                                artists: r,
                                linkClassName: V.bodyLink,
                                canOpen: null != e.sync_id,
                                onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                            },
                            n
                        )
                });
            else if ((0, I.dS)(e)) {
                var a;
                l = null == (a = e.assets) ? void 0 : a.small_text;
            }
        }
        return null == l || '' === l
            ? null
            : ((0, L.Z)(e) && (l = R.intl.formatToPlainString(R.t.gmCZRU, { game: l })), null != t)
              ? (0, i.jsx)(p.P3F, {
                    onClick: t,
                    title: null != o ? o : void 0,
                    className: V.clickableDetails,
                    children: l
                })
              : (0, i.jsx)('div', {
                    title: null != o ? o : void 0,
                    className: (0, L.Z)(e) || (0, D.Z)(e) ? V.detailsWrap : V.details,
                    children: l
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: r } = this.props;
        return n && null != t
            ? null == r
                ? (0, i.jsx)('div', {
                      className: (0, L.Z)(e) || (0, D.Z)(e) ? V.detailsWrap : V.details,
                      children: R.intl.format(R.t['hq/Qzc'], { guildName: t.name })
                  })
                : (0, i.jsxs)('div', {
                      className: s()((0, L.Z)(e) || (0, D.Z)(e) ? V.detailsWrap : V.details, V.guildDetails),
                      children: [
                          (0, i.jsx)(j.Z, {
                              guild: t,
                              size: j.Z.Sizes.SMOL,
                              className: V.guildIcon
                          }),
                          (0, i.jsx)(p.Fbu, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, i.jsxs)('div', {
                              className: V.voiceChannelInfo,
                              children: [
                                  (0, i.jsx)(p.gj8, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                                  (0, i.jsx)(p.Text, {
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
        if (!(0, w.Z)(e) || (0, D.Z)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, A.Z)(e)
              ? (0, i.jsx)(z, { timestamps: n })
              : (0, i.jsx)(P.ZP, {
                    start: n.start,
                    location: P.ZP.Locations.USER_ACTIVITY,
                    className: V.playTime,
                    isApplicationStreaming: null != t
                });
    }
    renderTimeBar(e) {
        if (!(0, D.Z)(e)) return null;
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
        let l,
            { state: o, party: a, assets: s } = e,
            c = o,
            u = o;
        return (!(0, w.Z)(e) &&
            ((c = null == s ? void 0 : s.large_text),
            (u = null == s ? void 0 : s.large_text),
            (0, D.Z)(e) &&
                null != c &&
                (c = R.intl.format(R.t.vOLBEx, {
                    album: u,
                    albumHook: (t, n) =>
                        null != e.sync_id && null != u
                            ? (0, i.jsx)(
                                  p.eee,
                                  {
                                      className: V.bodyLink,
                                      onClick: this.handleOpenSpotifyAlbum,
                                      children: u
                                  },
                                  n
                              )
                            : u
                }))),
        (null != c && '' !== c && e.type !== U.IIU.CUSTOM_STATUS) || (0, I.dS)(e))
            ? ((null == a ? void 0 : a.size) == null && [M.Zc].includes(null != (n = e.application_id) ? n : '')
                  ? (l = R.intl.formatToPlainString(R.t['u//9Bw'], {
                        count: '0',
                        max: null != (r = null == t ? void 0 : t.getMaxParticipants()) ? r : 0
                    }))
                  : (0, I.dS)(e) && (null == a ? void 0 : a.size) != null
                    ? (l = R.intl.formatToPlainString(R.t['JC/3x8'], {
                          numSpeakers: a.size[0],
                          numListeners: a.size[1] - a.size[0]
                      }))
                    : (null == a ? void 0 : a.size) != null &&
                      a.size.length >= 2 &&
                      (l =
                          0 === a.size[1]
                              ? R.intl.formatToPlainString(R.t.IM4J4e, { count: a.size[0] })
                              : R.intl.formatToPlainString(R.t['u//9Bw'], {
                                    count: a.size[0],
                                    max: a.size[1]
                                })),
              (0, i.jsxs)('div', {
                  className: V.state,
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
        let e,
            { type: t, renderActions: n, className: r, application: l, onClose: o, onOpenGameProfileModal: a } = this.props,
            c = this.activity;
        if (null == c || c.type === U.IIU.CUSTOM_STATUS) return null;
        let u = 'ActivityFeed' === t,
            d = 'StreamPreview' === t,
            f = !1;
        (0, _.Z)(c) ? ((e = this.renderXboxImage()), (f = !0)) : null == (e = this.renderImage(c)) && (f = null != (e = this.renderGameImage(c)));
        let m = this.renderName(c),
            g = this.renderDetails(c),
            O = this.renderState(c, l),
            h = this.renderTimePlayed(c),
            y = this.renderChannelDetails(c),
            v = null != n ? n() : null,
            S = this.renderTimeBar(c),
            j = ![e, m, g, O, h, S, v].some((e) => null != e);
        return (0, i.jsxs)('div', {
            className: s()(this.getTypeClass('activity'), r),
            children: [
                this.renderHeader(j),
                (0, i.jsx)('div', {
                    className: s()(f ? V.bodyAlignCenter : V.bodyNormal),
                    children: (0, i.jsxs)('div', {
                        className: V.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, i.jsxs)(b.Z.Child, {
                                      className: s()((0, T.l)(V, 'content', f ? 'GameImage' : null != e ? 'Images' : 'NoImages', t)),
                                      children: [
                                          (0, i.jsxs)(p.P3F, {
                                              className: s()(null != a && V.openGameProfile),
                                              onClick:
                                                  null != a
                                                      ? (e) => {
                                                            a(e), null == o || o();
                                                        }
                                                      : void 0,
                                              children: [m, g, O, h]
                                          }),
                                          y,
                                          d ? null : S,
                                          u ? v : null
                                      ]
                                  })
                        ]
                    })
                }),
                d ? v : null,
                (0, i.jsx)(W, { activity: c })
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
                let { activity: t, onOpenSpotifyArtist: n, user: r } = this.props;
                u()(null != t, 'Spotify activity was null'), null == n || n(t, r.id, e);
            }),
            F(this, 'handleOpenSpotifyAlbum', () => {
                let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
                u()(null != e, 'Spotify activity was null'), null == t || t(e, n.id);
            });
    }
}
F(H, 'Types', B);
let J = (e) => {
    var t, n, r, l, o;
    let a = (0, S.Z)({
        location: 'UserActivity',
        applicationId: null != (r = null == (t = e.application) ? void 0 : t.id) ? r : null == (n = e.activity) ? void 0 : n.application_id,
        source: v.m1.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0
    });
    return (0, i.jsx)(
        H,
        ((l = Y({}, e)),
        (o = o = { onOpenGameProfileModal: a }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(o)).forEach(function (e) {
                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
              }),
        l)
    );
};
J.Types = B;
let X = J;
