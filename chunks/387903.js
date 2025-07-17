(n.d(t, {
    Y: () => W,
    Z: () => X
}),
    n(997841),
    n(388685));
var r,
    i,
    l = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    c = n(512722),
    u = n.n(c),
    d = n(780384),
    p = n(481060),
    f = n(438139),
    m = n(410030),
    g = n(726542),
    _ = n(600164),
    v = n(686546),
    b = n(111028),
    h = n(925329),
    y = n(810568),
    O = n(168524),
    j = n(565138),
    x = n(707409),
    S = n(424678),
    I = n(750154),
    P = n(81063),
    C = n(768581),
    E = n(630388),
    w = n(153066),
    T = n(740265),
    N = n(122810),
    Z = n(833664),
    A = n(503438),
    D = n(802856),
    k = n(420660),
    L = n(39628),
    M = n(701488),
    R = n(981631),
    U = n(388032),
    F = n(636424);
function V(e, t, n) {
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                V(e, t, n[t]);
            }));
    }
    return e;
}
var W = (((i = {}).ACTIVITY_FEED = 'ActivityFeed'), (i.STREAM_PREVIEW = 'StreamPreview'), (i.VOICE_CHANNEL = 'VoiceChannel'), i);
let B = {
        StreamPreview: [108, 60],
        VoiceChannel: [108, 60],
        ActivityFeed: [900, 500]
    },
    z = (0, f.Z)(
        class extends a.PureComponent {
            render() {
                return (0, l.jsx)('div', {
                    className: F.timestamp,
                    children: this.props.message
                });
            }
        }
    );
function G(e) {
    let { activity: t } = e,
        n = (0, m.ZP)(),
        r = (function (e) {
            let { activity: t } = e,
                n = null;
            return ((0, A.Z)(t) && (n = R.ABu.SPOTIFY), null != t.platform && [R.M7m.PS4, R.M7m.PS5].includes(t.platform) && (n = R.ABu.PLAYSTATION), n);
        })({ activity: t });
    if (null == r) return null;
    let i = g.Z.get(r);
    return (0, l.jsx)('img', {
        alt: '',
        src: (0, d.ap)(n) ? i.icon.lightSVG : i.icon.darkSVG,
        className: F.platformIcon
    });
}
class H extends (r = a.PureComponent) {
    get activity() {
        let { activity: e, activityGuild: t } = this.props;
        return null != t && (null == e ? void 0 : e.type) !== R.IIU.PLAYING && (null == e ? void 0 : e.type) !== R.IIU.WATCHING && (null == e ? void 0 : e.type) !== R.IIU.LISTENING && (null == e ? void 0 : e.type) !== R.IIU.HANG_STATUS
            ? {
                  type: R.IIU.PLAYING,
                  name: U.intl.string(U.t.eXan7O)
              }
            : e;
    }
    getTypeClass(e, t) {
        return (0, w.l)(F, e, this.props.type, t);
    }
    isStreamerOnTypeActivityFeed() {
        return (0, k.Z)(this.activity) && 'ActivityFeed' === this.props.type;
    }
    renderHeader(e) {
        let t,
            { hideHeader: n, activityGuild: r, showChannelDetails: i, renderHeaderAccessory: a } = this.props,
            o = this.activity;
        if (n || null == o) return null;
        let { name: c } = o;
        switch (o.type) {
            case R.IIU.STREAMING:
                t = U.intl.formatToPlainString(U.t.Dzgz4u, {
                    platform: [R.ABu.TWITCH, R.ABu.YOUTUBE].includes(c.toLowerCase()) ? c : g.Z.get(R.ABu.TWITCH).name
                });
                break;
            case R.IIU.LISTENING:
                t = U.intl.formatToPlainString(U.t['5sYPnp'], { name: c });
                break;
            case R.IIU.WATCHING:
                t = U.intl.formatToPlainString(U.t.Ge29Z2, { name: c });
                break;
            case R.IIU.PLAYING:
                t = (0, T.Z)(o);
                break;
            case R.IIU.COMPETING:
                t = U.intl.formatToPlainString(U.t.SQCo6O, { name: c });
        }
        if (null != r) {
            var u;
            t = (0, E.yE)(null != (u = null == o ? void 0 : o.flags) ? u : 0, R.xjy.EMBEDDED) ? (o.type === R.IIU.WATCHING ? U.intl.formatToPlainString(U.t['M/L8oq'], { guildName: r.name }) : U.intl.formatToPlainString(U.t['4chKQk'], { guildName: r.name })) : U.intl.formatToPlainString(U.t.sddlGB, { server: r.name });
        }
        return (0, l.jsxs)('div', {
            className: F.headerContainer,
            children: [
                (0, l.jsx)(p.X6q, {
                    className: s()((0, w.l)(F, 'headerText', e ? 'EmptyBody' : 'Normal')),
                    variant: i ? 'text-xs/semibold' : 'eyebrow',
                    children: (0, l.jsx)(b.Z, { children: t })
                }),
                null == a ? void 0 : a()
            ]
        });
    }
    renderXboxImage() {
        return (0, l.jsx)('div', {
            className: F.assets,
            children: (0, l.jsx)('img', {
                alt: '',
                src: g.Z.get(R.ABu.XBOX).icon.customPNG,
                className: s()(this.getTypeClass('assetsLargeImage', 'Xbox'))
            })
        });
    }
    renderImage(e) {
        var t, n, r;
        let i,
            o,
            { type: c } = this.props,
            { assets: u, application_id: d } = e;
        if (null == u || (null == u.large_image && null == u.small_image)) return null;
        (0, k.Z)(e) && (i = B[c]);
        let f = (0, A.Z)(e),
            m =
                null != u.large_image
                    ? (0, l.jsx)('img', {
                          alt: null != (t = u.large_text) ? t : '',
                          src: (0, P.xF)(d, u.large_image, null != i ? i : [M.Si.LARGE, M.Si.LARGE]),
                          className: s()(this.getTypeClass('assetsLargeImage', this.isStreamerOnTypeActivityFeed() ? R.ABu.TWITCH : ''), {
                              [null != (n = this.getTypeClass('assetsLargeMask')) ? n : '']: null != u.small_image,
                              [F.assetsLargeImageSpotify]: f
                          })
                      })
                    : null;
        if (f)
            m = (0, l.jsx)(p.eee, {
                onClick: this.handleOpenSpotifyAlbum,
                children: m
            });
        else if ((0, I.dS)(e)) {
            let t = (0, I.rq)(e);
            if (null == t) return null;
            m = (0, l.jsx)(v.ZP, {
                mask: v.ZP.Masks.SQUIRCLE,
                width: M.Si.SMALL,
                height: M.Si.SMALL,
                children: (0, l.jsx)('img', {
                    src:
                        null !=
                        (r = C.ZP.getGuildIconURL({
                            id: t.guildId,
                            icon: u.small_image,
                            size: M.Si.SMALL
                        }))
                            ? r
                            : void 0,
                    className: F.assetsLargeImageVoiceChannel,
                    alt: ''
                })
            });
        }
        return (this.isStreamerOnTypeActivityFeed() &&
            null != e.url &&
            '' !== e.url &&
            (m = (0, l.jsxs)('div', {
                className: F.twitchImageContainer,
                children: [
                    (0, l.jsxs)('div', {
                        className: F.twitchImageOverlay,
                        children: [
                            (0, l.jsx)(p.H, {
                                className: F.streamName,
                                children: e.name
                            }),
                            (0, l.jsx)('div', {
                                className: F.streamGame,
                                children: U.intl.format(U.t.gmCZRU, { game: e.details })
                            })
                        ]
                    }),
                    (0, l.jsx)(p.eee, {
                        className: F.twitchBackgroundImage,
                        href: e.url,
                        children: m
                    })
                ]
            })),
        (0, I.dS)(e) ||
            null == u.small_image ||
            (o = (0, l.jsx)(p.ua7, {
                text: '' !== u.small_text ? u.small_text : null,
                position: 'top',
                children: (e) => {
                    var t;
                    return (0, l.jsx)(
                        'img',
                        Y(
                            {
                                alt: null != (t = u.small_text) ? t : '',
                                src: (0, P.xF)(d, u.small_image, [M.Si.SMALL, M.Si.SMALL]),
                                className: this.getTypeClass('assetsSmallImage', null == m ? 'WithoutLargeImage' : void 0)
                            },
                            e
                        )
                    );
                }
            })),
        null == m)
            ? (0, l.jsx)('div', {
                  className: F.assets,
                  children: o
              })
            : (0, l.jsxs)('div', {
                  className: F.assets,
                  children: [
                      (0, l.jsx)(p.ua7, {
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
        let { user: t, type: n, application: r, activityGuild: i } = this.props;
        return null != e.assets || (0, N.Z)(e) || e.type !== R.IIU.PLAYING || 'ActivityFeed' === n || t.bot
            ? null
            : null == r && null != i
              ? (0, l.jsx)('div', { className: s()(F.gameIcon, F.screenshareIcon) })
              : (0, l.jsx)(h.Z, {
                    className: F.gameIcon,
                    game: r
                });
    }
    renderName(e) {
        let { user: t, application: n, hideName: r } = this.props;
        if (r) return null;
        let { details: i, type: a } = e;
        if (a === R.IIU.CUSTOM_STATUS) return null;
        let o = (0, Z.Z)(e),
            c = e.name,
            u = c;
        return (o && null != n
            ? (u = (0, l.jsx)('span', {
                  className: F.activityName,
                  children: u
              }))
            : !o &&
              ((c = i),
              (u = i),
              (0, A.Z)(e) && null != e.sync_id && null != i
                  ? (u = (0, l.jsx)(p.eee, {
                        className: F.bodyLink,
                        onClick: this.handleOpenSpotifyTrack,
                        children: i
                    }))
                  : (0, I.dS)(e) && (u = e.name)),
        null == u)
            ? null
            : (0, l.jsx)(p.Text, {
                  title: c,
                  variant: 'text-sm/semibold',
                  className: s()((0, w.l)(F, 'name', t.bot ? 'wrap' : 'normal')),
                  children: u
              });
    }
    renderDetails(e) {
        let t,
            { details: n, state: r } = e,
            i = n,
            a = n;
        if (e.type === R.IIU.CUSTOM_STATUS) i = r;
        else if (!(0, Z.Z)(e)) {
            if (((i = r), (a = r), (0, A.Z)(e) && null != r))
                i = U.intl.format(U.t.uU9le3, {
                    artists: a,
                    artistsHook: (t, n) =>
                        (0, l.jsx)(
                            S.Z,
                            {
                                artists: r,
                                linkClassName: F.bodyLink,
                                canOpen: null != e.sync_id,
                                onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                            },
                            n
                        )
                });
            else if ((0, I.dS)(e)) {
                var o;
                i = null == (o = e.assets) ? void 0 : o.small_text;
            }
        }
        return null == i || '' === i
            ? null
            : ((0, k.Z)(e) && (i = U.intl.formatToPlainString(U.t.gmCZRU, { game: i })), null != t)
              ? (0, l.jsx)(p.P3F, {
                    onClick: t,
                    title: null != a ? a : void 0,
                    className: F.clickableDetails,
                    children: i
                })
              : (0, l.jsx)('div', {
                    title: null != a ? a : void 0,
                    className: (0, k.Z)(e) || (0, A.Z)(e) ? F.detailsWrap : F.details,
                    children: i
                });
    }
    renderChannelDetails(e) {
        let { activityGuild: t, showChannelDetails: n, channel: r } = this.props;
        return n && null != t
            ? null == r
                ? (0, l.jsx)('div', {
                      className: (0, k.Z)(e) || (0, A.Z)(e) ? F.detailsWrap : F.details,
                      children: U.intl.format(U.t['hq/Qzc'], { guildName: t.name })
                  })
                : (0, l.jsxs)('div', {
                      className: s()((0, k.Z)(e) || (0, A.Z)(e) ? F.detailsWrap : F.details, F.guildDetails),
                      children: [
                          (0, l.jsx)(j.Z, {
                              guild: t,
                              size: j.Z.Sizes.SMOL,
                              className: F.guildIcon
                          }),
                          (0, l.jsx)(p.Fbu, {
                              size: 'xxs',
                              color: 'currentColor'
                          }),
                          (0, l.jsxs)('div', {
                              className: F.voiceChannelInfo,
                              children: [
                                  (0, l.jsx)(p.gj8, {
                                      size: 'xxs',
                                      color: 'currentColor'
                                  }),
                                  (0, l.jsx)(p.Text, {
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
        if (!(0, Z.Z)(e) || (0, A.Z)(e)) return null;
        let { timestamps: n } = e;
        return null == n
            ? null
            : (0, N.Z)(e)
              ? (0, l.jsx)(z, { timestamps: n })
              : (0, l.jsx)(x.ZP, {
                    start: n.start,
                    location: x.ZP.Locations.USER_ACTIVITY,
                    className: F.playTime,
                    isApplicationStreaming: null != t
                });
    }
    renderTimeBar(e) {
        if (!(0, A.Z)(e)) return null;
        let { timestamps: t } = e;
        if (null == t) return null;
        let { start: n, end: r } = t;
        return null == n || null == r
            ? null
            : (0, l.jsx)(L.Z, {
                  start: n,
                  end: r,
                  className: this.getTypeClass('timeBar'),
                  themed: 'VoiceChannel' === this.props.type
              });
    }
    renderState(e, t) {
        var n, r;
        let i,
            { state: a, party: o, assets: s } = e,
            c = a,
            u = a;
        return (!(0, Z.Z)(e) &&
            ((c = null == s ? void 0 : s.large_text),
            (u = null == s ? void 0 : s.large_text),
            (0, A.Z)(e) &&
                null != c &&
                (c = U.intl.format(U.t.vOLBEx, {
                    album: u,
                    albumHook: (t, n) =>
                        null != e.sync_id && null != u
                            ? (0, l.jsx)(
                                  p.eee,
                                  {
                                      className: F.bodyLink,
                                      onClick: this.handleOpenSpotifyAlbum,
                                      children: u
                                  },
                                  n
                              )
                            : u
                }))),
        (null != c && '' !== c && e.type !== R.IIU.CUSTOM_STATUS) || (0, I.dS)(e))
            ? ((null == o ? void 0 : o.size) == null && [M.Zc].includes(null != (n = e.application_id) ? n : '')
                  ? (i = U.intl.formatToPlainString(U.t['u//9Bw'], {
                        count: '0',
                        max: null != (r = null == t ? void 0 : t.getMaxParticipants()) ? r : 0
                    }))
                  : (0, I.dS)(e) && (null == o ? void 0 : o.size) != null
                    ? (i = U.intl.formatToPlainString(U.t['JC/3x8'], {
                          numSpeakers: o.size[0],
                          numListeners: o.size[1] - o.size[0]
                      }))
                    : (null == o ? void 0 : o.size) != null &&
                      o.size.length >= 2 &&
                      (i =
                          0 === o.size[1]
                              ? U.intl.formatToPlainString(U.t.IM4J4e, { count: o.size[0] })
                              : U.intl.formatToPlainString(U.t['u//9Bw'], {
                                    count: o.size[0],
                                    max: o.size[1]
                                })),
              (0, l.jsxs)('div', {
                  className: F.state,
                  children: [
                      (0, l.jsx)('span', {
                          title: u,
                          children: c
                      }),
                      null != i
                          ? (0, l.jsxs)('span', {
                                children: [' ', i]
                            })
                          : null
                  ]
              }))
            : null;
    }
    render() {
        let e,
            { type: t, renderActions: n, className: r, application: i, onClose: a, onOpenGameProfileModal: o } = this.props,
            c = this.activity;
        if (null == c || c.type === R.IIU.CUSTOM_STATUS) return null;
        let u = 'ActivityFeed' === t,
            d = 'StreamPreview' === t,
            f = !1;
        (0, D.Z)(c) ? ((e = this.renderXboxImage()), (f = !0)) : null == (e = this.renderImage(c)) && (f = null != (e = this.renderGameImage(c)));
        let m = this.renderName(c),
            g = this.renderDetails(c),
            v = this.renderState(c, i),
            b = this.renderTimePlayed(c),
            h = this.renderChannelDetails(c),
            y = null != n ? n() : null,
            O = this.renderTimeBar(c),
            j = ![e, m, g, v, b, O, y].some((e) => null != e);
        return (0, l.jsxs)('div', {
            className: s()(this.getTypeClass('activity'), r),
            children: [
                this.renderHeader(j),
                (0, l.jsx)('div', {
                    className: s()(f ? F.bodyAlignCenter : F.bodyNormal),
                    children: (0, l.jsxs)('div', {
                        className: F.activityDetails,
                        children: [
                            e,
                            this.isStreamerOnTypeActivityFeed()
                                ? null
                                : (0, l.jsxs)(_.Z.Child, {
                                      className: s()((0, w.l)(F, 'content', f ? 'GameImage' : null != e ? 'Images' : 'NoImages', t)),
                                      children: [
                                          (0, l.jsxs)(p.P3F, {
                                              className: s()(null != o && F.openGameProfile),
                                              onClick:
                                                  null != o
                                                      ? (e) => {
                                                            (o(e), null == a || a());
                                                        }
                                                      : void 0,
                                              children: [m, g, v, b]
                                          }),
                                          h,
                                          d ? null : O,
                                          u ? y : null
                                      ]
                                  })
                        ]
                    })
                }),
                d ? y : null,
                (0, l.jsx)(G, { activity: c })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            V(this, 'handleOpenSpotifyTrack', () => {
                let { activity: e, onOpenSpotifyTrack: t } = this.props;
                (u()(null != e, 'Spotify activity was null'), null == t || t(e));
            }),
            V(this, 'handleOpenSpotifyArtist', (e) => {
                let { activity: t, onOpenSpotifyArtist: n, user: r } = this.props;
                (u()(null != t, 'Spotify activity was null'), null == n || n(t, r.id, e));
            }),
            V(this, 'handleOpenSpotifyAlbum', () => {
                let { activity: e, onOpenSpotifyAlbum: t, user: n } = this.props;
                (u()(null != e, 'Spotify activity was null'), null == t || t(e, n.id));
            }));
    }
}
V(H, 'Types', W);
let J = (e) => {
    var t, n, r, i, a;
    let o = (0, O.Z)({
        location: 'UserActivity',
        applicationId: null != (r = null == (t = e.application) ? void 0 : t.id) ? r : null == (n = e.activity) ? void 0 : n.application_id,
        source: y.m1.UserProfile,
        sourceUserId: e.user.id,
        trackEntryPointImpression: !0
    });
    return (0, l.jsx)(
        H,
        ((i = Y({}, e)),
        (a = a = { onOpenGameProfileModal: o }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(a)).forEach(function (e) {
                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
              }),
        i)
    );
};
J.Types = W;
let X = J;
